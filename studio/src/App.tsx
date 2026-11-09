import {useEffect,useReducer,useState} from 'react';
import {StudioScene} from './components/StudioScene';
import {CDPlayer} from './components/CDPlayer';
import {ProjectCollection} from './components/ProjectCollection';
import {NewspaperDesk,type Note} from './components/NewspaperDesk';
import {NoteReader} from './components/NoteReader';
import {projects} from './content/projects';
import {profile} from './content/profile';
import {initialDiscState,discReducer,adjacentIndex} from './player/discState';
export default function App(){
 const [disc,dispatch]=useReducer(discReducer,initialDiscState(0));
 const [note,setNote]=useState<Note|null>(null);
 const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
 const [exploring,setExploring]=useState(false);
 useEffect(()=>{const m=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(m.matches);m.addEventListener('change',change);return()=>m.removeEventListener('change',change)},[]);
 useEffect(()=>{if(disc.phase==='idle')return;const token=disc.token;const timer=setTimeout(()=>dispatch({type:'advance',token}),reduced?0:disc.phase==='ejecting'?340:440);return()=>clearTimeout(timer)},[disc.phase,disc.token,reduced]);
 useEffect(()=>{const node=document.querySelector('#projects');if(!node)return;const observer=new IntersectionObserver(entries=>setExploring(entries[0].isIntersecting),{rootMargin:'0px 0px -20% 0px'});observer.observe(node);return()=>observer.disconnect()},[]);
 const select=(index:number)=>dispatch({type:'select',index,immediate:reduced});
 const current=projects[disc.current];
 return <><a className="skip-link" href="#projects">Skip to projects</a><header className="site-header"><a href="#home" className="wordmark">Young<span>’s studio</span><i>✳</i></a><nav aria-label="Main navigation"><a href="#projects">The collection</a><a href="#notes">杂谈 / Journal</a><a href="#about">About</a><a href={profile.github} target="_blank" rel="noreferrer" className="github-nav">GitHub ↗</a></nav></header>
 <main><div className={`room-journey ${exploring?'exploring':''}`}><div className="room-backdrop"><StudioScene/></div><section className="hero section-pad" id="home" aria-labelledby="hero-title"><div className="hero-intro"><span className="eyebrow"><span className="tiny-sun"/> AN OPEN WINDOW. A PERSONAL COLLECTION.</span><h1 id="hero-title">A room<br/>by the <em>sea.</em></h1><p>Software, sound &<br/>things worth keeping.</p><a href="#projects" className="explore-link">Come on in <span>↘</span></a></div><div className="hero-player"><div className="player-caption"><span>THE LISTENING DESK</span><span>01—04</span></div><CDPlayer project={current} state={disc} count={projects.length} onPrevious={()=>select(adjacentIndex(disc.pending,-1,projects.length))} onNext={()=>select(adjacentIndex(disc.pending,1,projects.length))}/><a className="now-playing" href="#projects"><span className="now-dot"/><span>IN THE PLAYER <strong>{current.title} · {current.subtitle}</strong></span><span>↗</span></a></div><div className="hero-bottom"><span>DESIGNED TO BE EXPLORED, AT YOUR OWN PACE.</span><a href="#projects">SCROLL TO THE DESK <span>↓</span></a><span>A ROOM BY YOUNG / BETTTER</span></div></section>
 <ProjectCollection current={disc.current} onSelect={select} player={<CDPlayer project={current} state={disc} count={projects.length} onPrevious={()=>select(adjacentIndex(disc.pending,-1,projects.length))} onNext={()=>select(adjacentIndex(disc.pending,1,projects.length))}/>}/></div><NewspaperDesk onOpen={setNote}/><section id="about" className="about section-pad"><div className="about-window"><span className="about-sun"/><span className="about-sea"/><span className="about-horizon"/></div><div className="about-copy"><span className="eyebrow">03 / BEFORE YOU GO</span><h2>Made with curiosity.<br/><em>Kept with care.</em></h2><p>I’m {profile.name}, also known as {profile.handle}.<br/>{profile.bio}</p><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">Find me on GitHub <span>↗</span></a><a className="archive-small" href="/blog/archives/">Browse the original journal archive ↗</a></div></section></main>
 <footer className="site-footer"><a className="wordmark" href="#home">Young<span>’s studio</span></a><span>A LITTLE ROOM ON THE INTERNET.</span><a href="#home">BACK TO THE WINDOW ↑</a></footer>{note&&<NoteReader note={note} onClose={()=>setNote(null)}/>}</>;
}
