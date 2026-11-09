import {access,readFile} from 'node:fs/promises';
import {parseHTML} from 'linkedom';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const out=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
for(const p of ['index.html','blog/archives/index.html','blog/2020/07/28/kai-tian/index.html','legacy/index.html','atom.xml','studio-art/favicon.svg'])await access(path.join(out,p));
const {document}=parseHTML(await readFile(path.join(out,'index.html'),'utf8'));
for(const n of document.querySelectorAll('script[src],link[href]')){const ref=n.getAttribute('src')||n.getAttribute('href');if(ref.startsWith('/'))await access(path.join(out,ref));}
console.log('PASS: production homepage assets and legacy routes exist.');
