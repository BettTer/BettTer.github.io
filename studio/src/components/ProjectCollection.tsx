import {useI18n} from '../i18n/I18n';
import {projects} from '../content/projects';
import {CoverArt} from './DiscArt';
export function ProjectCollection({current,onSelect}:{current:number;onSelect:(n:number)=>void}) {
 const {t}=useI18n();
 const project=projects[current];
 return <section id="projects" className="collection section-pad" aria-labelledby="collection-title">
  <div className="section-heading"><div><span className="eyebrow">{t.collectionEyebrow}</span><h2 id="collection-title">{t.collectionFirst}<br/><em>{t.collectionSecond}</em></h2></div><p className="multiline">{t.collectionDescription}<span>{t.chooseDisc}</span></p></div>
  <div className="collection-groups" role="group" aria-label={t.workCategories}>
   {(['product','opensource'] as const).map(category=><button key={category} aria-pressed={project.category===category} onClick={()=>onSelect(projects.findIndex(p=>p.category===category))}>{category==='product'?t.shippedProducts:t.openSourceWork}<span>{projects.filter(p=>p.category===category).length.toString().padStart(2,'0')}</span></button>)}
  </div>
  <div className={`record-shelf ${project.category==='product'?'product-shelf':''}`} aria-label={t.projectCollection}>{projects.map((p,i)=>p.category===project.category&&<button key={p.id} className={`record ${i===current?'selected':''}`} aria-pressed={i===current} onClick={()=>onSelect(i)} aria-label={`${t.load} ${p.title} ${p.subtitle}`}><div className="jewel-case"><CoverArt project={p}/><span className="case-glint"/></div><span className="record-label"><span>{p.year}</span>{p.title}<span>{i===current?'↳ '+t.loaded:'↗'}</span></span></button>)}</div>
  <div className="project-insert" aria-live="polite" aria-atomic="true"><div className="insert-number" aria-hidden="true">{project.year}<span>{t.linerNotes}</span></div><div className="insert-copy"><span className="eyebrow">{t.projectKinds[current]}</span><h3>{project.title} <em>{project.subtitle}</em></h3><p>{t.projectDescriptions[current]}</p><div className="tech-tags">{project.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></div><div className="insert-links">{project.repoUrl&&<a href={project.repoUrl} target="_blank" rel="noreferrer">{t.exploreGithub}<span>↗</span></a>}{project.demoUrl&&<a href={project.demoUrl} target="_blank" rel="noreferrer">{project.category==='product'?t.productWebsite:t.liveProject}<span>↗</span></a>}{project.storeLinks?.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div></div>
  <div className="shelf-foot"><span>{t.personalCollection} · {projects.length} {t.discs}</span><a href="https://github.com/BettTer?tab=repositories" target="_blank" rel="noreferrer">{t.restGithub} ↗</a></div>
 </section>;
}
