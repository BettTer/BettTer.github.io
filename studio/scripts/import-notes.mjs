import {parseHTML} from 'linkedom';
import sanitizeHtml from 'sanitize-html';
import {marked} from 'marked';
import {readFile,writeFile,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const here=path.dirname(fileURLToPath(import.meta.url));
const studio=path.resolve(here,'..'),repo=path.resolve(studio,'..');
export function extractNote(source,legacyUrl){
 const {document}=parseHTML(source);
 const title=document.querySelector('.entry-title')?.textContent.trim()||'Untitled';
 const date=document.querySelector('time[datetime]')?.getAttribute('datetime')||'';
 const content=document.querySelector('.entry-content');
 if(!content)throw new Error(`Missing note content: ${legacyUrl}`);
 content.innerHTML=sanitizeHtml(content.innerHTML,{allowedTags:[...sanitizeHtml.defaults.allowedTags,'img'],allowedAttributes:{...sanitizeHtml.defaults.allowedAttributes,img:['src','alt','width','height','loading']},allowedSchemes:['http','https','mailto'],allowProtocolRelative:false});
 for(const el of content.querySelectorAll('*')){
  for(const a of [...el.attributes]){
   if(a.name.startsWith('on')||['style','srcdoc','srcset'].includes(a.name))el.removeAttribute(a.name);
   if(['href','src'].includes(a.name)){
    const url=new URL(a.value,new URL(legacyUrl,'https://bettter.github.io'));
    if(!['http:','https:','mailto:'].includes(url.protocol)){el.removeAttribute(a.name);continue;}
    el.setAttribute(a.name,url.origin==='https://bettter.github.io'?url.pathname+url.search+url.hash:url.href);
   }
  }
 }
 return {id:legacyUrl.split('/').filter(Boolean).at(-1),title,date,html:content.innerHTML,legacyUrl};
}
async function walk(folder){const out=[];for(const f of await readdir(folder,{withFileTypes:true})){const p=path.join(folder,f.name);if(f.isDirectory())out.push(...await walk(p));else if(f.name==='index.html')out.push(p);}return out;}
async function main(){
 const notes=[];
 for(const file of await walk(path.join(repo,'blog'))){const text=await readFile(file,'utf8');if(!text.includes('class="entry-content"')||!text.includes('class="entry-title"'))continue;const legacyUrl='/'+path.relative(repo,path.dirname(file)).split(path.sep).join('/')+'/';notes.push(extractNote(text,legacyUrl));}
 for(const file of await readdir(path.join(studio,'content/notes'))){if(!file.endsWith('.md'))continue;const source=await readFile(path.join(studio,'content/notes',file),'utf8');const match=source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!match)throw new Error(`Note needs title and date frontmatter: ${file}`);const meta=Object.fromEntries(match[1].split('\n').map(l=>{const i=l.indexOf(':');return[l.slice(0,i).trim(),l.slice(i+1).trim()]}));if(!meta.title||!meta.date)throw new Error(`Missing title/date: ${file}`);const {document}=parseHTML('<article><h1 class="entry-title"></h1><time></time><div class="entry-content"></div></article>');document.querySelector('h1').textContent=meta.title;document.querySelector('time').setAttribute('datetime',meta.date);document.querySelector('.entry-content').innerHTML=await marked.parse(match[2]);notes.push({...extractNote(document.toString(),'/notes/'+file.replace(/\.md$/,'')+'/'),legacyUrl:null});}
 notes.sort((a,b)=>b.date.localeCompare(a.date));
 await writeFile(path.join(studio,'src/content/notes.generated.json'),JSON.stringify(notes,null,2)+'\n');console.log(`Imported ${notes.length} notes.`);
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await main();
