import {useEffect,useReducer,useState} from 'react';
import {StudioScene} from './components/StudioScene';
import {SceneTimeControl} from './components/SceneTimeControl';
import {useLocalSceneTime} from './scene/useLocalSceneTime';
import {CDPlayer} from './components/CDPlayer';
import {ProjectCollection} from './components/ProjectCollection';
import {NewspaperDesk,type Note} from './components/NewspaperDesk';
import {NoteReader} from './components/NoteReader';
import {projects} from './content/projects';
import {profile} from './content/profile';
import {MusicCorner} from './components/MusicCorner';
import {useI18n,LanguageSwitch} from './i18n/I18n';
import {initialDiscState,discReducer,adjacentIndex} from './player/discState';
export default function App(){
 const {t}=useI18n();
 const sceneClock=useLocalSceneTime();
 const [disc,dispatch]=useReducer(discReducer,initialDiscState(0));
 const [note,setNote]=useState<Note|null>(null);
 const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
 const [exploring,setExploring]=useState(false);
 useEffect(()=>{const m=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(m.matches);m.addEventListener('change',change);return()=>m.removeEventListener('change',change)},[]);
 useEffect(()=>{if(disc.phase==='idle')return;const token=disc.token;const timer=setTimeout(()=>dispatch({type:'advance',token}),reduced?0:disc.phase==='ejecting'?340:440);return()=>clearTimeout(timer)},[disc.phase,disc.token,reduced]);
 useEffect(()=>{const node=document.querySelector('#projects');if(!node)return;const observer=new IntersectionObserver(entries=>setExploring(entries[0].isIntersecting),{rootMargin:'0px 0px -20% 0px'});observer.observe(node);return()=>observer.disconnect()},[]);
 const select=(index:number)=>dispatch({type:'select',index,immediate:reduced});
 const current=projects[disc.current];
 return <><a className="skip-link" href="#projects">{t.skip}</a><header className="site-header"><a href="#home" className="wordmark">Young<span>{t.studio}</span><i>✳</i></a><nav aria-label={t.navigation}><a href="#projects">{t.collection}</a><a href="#notes">{t.journal}</a><a href="#music" className="nav-music">{t.music}</a><a href="#about" className="nav-about">{t.about}</a><a href={profile.github} target="_blank" rel="noreferrer" className="github-nav">GitHub ↗</a></nav><LanguageSwitch/></header>
 <main><div className={`room-journey ${exploring?'exploring':''}`}><div className="room-backdrop"><StudioScene period={sceneClock.period}/></div><section className="hero section-pad" id="home" aria-labelledby="hero-title"><div className="hero-intro" id="about"><span className="eyebrow"><span className="tiny-sun"/> {t.heroEyebrow}</span><h1 id="hero-title"><span className="hero-greeting">{t.heroFirst}</span><em>{t.heroAccent}</em></h1><div className="hero-biography"><p>{t.heroDescription}</p><a className="hero-current" href="https://ancher.ai/" target="_blank" rel="noreferrer">{t.heroCurrent} <span>↗</span></a></div><div className="hero-products"><span>{t.shippedProducts}</span><div>{projects.filter(p=>p.category==='product').map(p=><a key={p.id} href={p.demoUrl||p.storeLinks?.[0].url} target="_blank" rel="noreferrer">{p.title} {p.id==='planflow'?p.subtitle:p.id==='emoji'?'Converter':''}<span>↗</span></a>)}</div></div><a href="#projects" className="explore-link">{t.comeIn} <span>↘</span></a></div><div className="hero-player"><div className="player-caption"><span>{t.listeningDesk}</span><span>01—{String(projects.length).padStart(2,'0')}</span></div><CDPlayer project={current} state={disc} count={projects.length} onPrevious={()=>select(adjacentIndex(disc.pending,-1,projects.length))} onNext={()=>select(adjacentIndex(disc.pending,1,projects.length))}/><a className="now-playing" href="#projects"><span className="now-dot"/><span>{t.inPlayer} <strong>{current.title} · {current.subtitle}</strong></span><span>↗</span></a></div><div className="hero-bottom"><SceneTimeControl clock={sceneClock}/><a href="#projects">{t.scrollDesk} <span>↓</span></a><span>{t.roomBy}</span></div></section>
 <ProjectCollection current={disc.current} onSelect={select}/></div><MusicCorner/><NewspaperDesk onOpen={setNote}/><section id="approach" className="about section-pad"><div className="about-window"><span className="about-sun"/><span className="about-sea"/><span className="about-horizon"/></div><div className="about-copy"><span className="eyebrow">{t.aboutEyebrow}</span><h2>{t.aboutFirst}<br/><em>{t.aboutSecond}</em></h2><p>{t.aboutIntro}<br/>{t.aboutBody}</p><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">{t.findGithub} <span>↗</span></a><a className="spotify-contact" href={profile.spotify} target="_blank" rel="noreferrer">{t.listenArtist} ↗</a><a className="archive-small" href="/blog/archives/">{t.browseArchive} ↗</a></div></section></main>
 <footer className="site-footer"><a className="wordmark" href="#home">Young<span>{t.studio}</span></a><span>{t.littleRoom}</span><a href="#home">{t.backWindow} ↑</a></footer>{note&&<NoteReader note={note} onClose={()=>setNote(null)}/>}</>;
}
