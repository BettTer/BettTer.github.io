import {useEffect, useReducer, useRef, type CSSProperties, type PointerEvent} from 'react';
import {useI18n} from '../i18n/I18n';
import notes from '../content/notes.generated.json';
import {paperFlowReducer} from './paperFlow';

export type Note={id:string;title:string;date:string;html:string;legacyUrl:string|null};
type Drag={pointer:number;x:number;y:number;left:number;moved:boolean};

export function NewspaperDesk({onOpen}:{onOpen:(note:Note)=>void}) {
 const {t}=useI18n();
 const [flow, dispatch]=useReducer((state:typeof flowInitial, action:Parameters<typeof paperFlowReducer>[1])=>paperFlowReducer(state,action,notes.length),flowInitial);
 const track=useRef<HTMLDivElement>(null);
 const drag=useRef<Drag|null>(null);
 const suppressClick=useRef(false);
 const centered=useRef(flow.centered);
 centered.current=flow.centered;

 function nearestIssue() {
  const el=track.current;
  if(!el)return 0;
  const middle=el.scrollLeft+el.clientWidth/2;
  let nearest=0, distance=Infinity;
  [...el.children].forEach((child,index)=>{
   const slot=child as HTMLElement;
   const delta=Math.abs(slot.offsetLeft+slot.offsetWidth/2-middle);
   if(delta<distance){nearest=index;distance=delta;}
  });
  return nearest;
 }
 function centerIssue(index:number, behavior:ScrollBehavior='smooth', focus=false) {
  const el=track.current;
  const target=Math.max(0,Math.min(notes.length-1,index));
  const slot=el?.children[target] as HTMLElement|undefined;
  if(!el||!slot)return;
  dispatch({type:'center',index:target});
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollTo({left:slot.offsetLeft+slot.offsetWidth/2-el.clientWidth/2,behavior:reduced?'instant':behavior});
  if(focus)slot.querySelector('button')?.focus({preventScroll:true});
 }
 useEffect(()=>{
  const el=track.current;
  if(!el)return;
  const observer=new ResizeObserver(()=>centerIssue(centered.current,'instant'));
  observer.observe(el);
  return()=>observer.disconnect();
 },[]);

 function startDrag(event:PointerEvent<HTMLDivElement>) {
  suppressClick.current=false;
  if(event.pointerType!=='mouse'||event.button!==0)return;
  drag.current={pointer:event.pointerId,x:event.clientX,y:event.clientY,left:event.currentTarget.scrollLeft,moved:false};
 }
 function moveDrag(event:PointerEvent<HTMLDivElement>) {
  const current=drag.current;
  if(!current||current.pointer!==event.pointerId)return;
  if(event.buttons===0){finishDrag(event);return;}
  const dx=event.clientX-current.x,dy=event.clientY-current.y;
  if(!current.moved&&Math.abs(dx)>8&&Math.abs(dx)>Math.abs(dy)){
   current.moved=true;
   event.currentTarget.setPointerCapture(event.pointerId);
   event.currentTarget.classList.add('is-dragging');
  }
  if(current.moved){event.preventDefault();event.currentTarget.scrollLeft=current.left-dx;}
 }
 function finishDrag(event:PointerEvent<HTMLDivElement>) {
  const current=drag.current;
  if(!current||current.pointer!==event.pointerId)return;
  drag.current=null;
  event.currentTarget.classList.remove('is-dragging');
  if(current.moved){
   suppressClick.current=event.type==='pointerup';
   if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
   centerIssue(nearestIssue());
  }
 }
 const featured=notes[flow.featured];
 return <section className="newspaper-desk section-pad" id="notes" aria-labelledby="notes-title">
  <div className="section-heading"><div><span className="eyebrow">{t.notesEyebrow}</span><h2 id="notes-title">{t.notesFirst}<br/><em>{t.notesSecond}</em></h2></div><p className="multiline">{t.notesDescription}</p></div>
  <div className="paper-stage">
   <div className="paper-desk-light" aria-hidden="true"/>
   <div className="paper-track" id="journal-issues" ref={track} role="group" aria-label={t.paperCollection} tabIndex={0}
    onScroll={()=>dispatch({type:'center',index:nearestIssue()})}
    onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}
    onClickCapture={event=>{
     const suppress=suppressClick.current&&event.detail>0;
     suppressClick.current=false;
     if(suppress){event.preventDefault();event.stopPropagation();}
    }}
    onKeyDown={event=>{
     const focusedSlot=(event.target as HTMLElement).closest('.paper-slot');
     const focusedIndex=focusedSlot?[...event.currentTarget.children].indexOf(focusedSlot):-1;
     const from=focusedIndex<0?flow.centered:focusedIndex;
     const index=event.key==='ArrowLeft'?from-1:event.key==='ArrowRight'?from+1:event.key==='Home'?0:event.key==='End'?notes.length-1:null;
     if(index!==null){event.preventDefault();centerIssue(index,'smooth',true);}
    }}>
    {notes.map((note,i)=>{
     const offset=i-flow.featured;
     const active=i===flow.featured;
     const [headline,...translation]=note.title.split(' / ');
     const excerpt=note.html.replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,180);
     return <div className={`paper-slot${active?' is-featured':''}`} key={note.id} style={{zIndex:active?30:Math.max(1,20-Math.abs(offset)),'--paper-turn':`${offset===0?0:offset>0?-24:24}deg`,'--paper-lean':`${offset===0?0:offset>0?2:-2}deg`} as CSSProperties}>
      <button className="newspaper" onClick={()=>onOpen(note)} onPointerEnter={event=>{if(event.pointerType==='mouse'&&!drag.current?.moved)dispatch({type:'preview',index:i});}} onFocus={()=>dispatch({type:'preview',index:i})} aria-label={`${t.read} ${note.title}`}>
       <span className="paper-meta">YOUNG’S JOURNAL<span>NO. {String(notes.length-i).padStart(3,'0')}</span></span>
       <span className="paper-masthead">{t.paperBrand}<span>THE STUDIO<br/>TIMES</span></span>
       <span className="paper-date">{note.date.slice(0,10).replaceAll('-',' / ')}<span>{t.notesCategory}</span></span>
       <span className="paper-title" lang="zh-Hans">{headline}</span>
       {translation.length>0&&<span className="paper-title-translation" lang="en">{translation.join(' / ')}</span>}
       <span className="paper-excerpt" lang="zh-Hans">{excerpt}</span>
       <span className="paper-rules" aria-hidden="true"/>
       <span className="paper-read">{t.unfold}<span>↗</span></span>
      </button>
     </div>;
    })}
   </div>
  </div>
  <div className="paper-browse-bar">
   <span className="paper-browse-hint">{t.browsePapers}</span>
   <div className="paper-navigation"><button onClick={()=>centerIssue(flow.centered-1)} disabled={flow.centered===0} aria-label={t.previousPaper} aria-controls="journal-issues">←</button><span className="paper-counter">{String(flow.centered+1).padStart(2,'0')}<i>/</i>{String(notes.length).padStart(2,'0')}</span><button onClick={()=>centerIssue(flow.centered+1)} disabled={flow.centered>=notes.length-1} aria-label={t.nextPaper} aria-controls="journal-issues">→</button></div>
   <span className="paper-current-title" aria-live="polite" aria-atomic="true">{featured?.title}</span>
  </div>
  <div className="desk-keepsake" aria-hidden="true"><div className="coffee"/><span className="handwritten">{t.keepingFirst}<br/>{t.keepingSecond}</span><span className="desk-edition">THE STUDIO TIMES<br/>EST. 2020 · YOUNG</span></div>
 </section>;
}
const flowInitial={centered:0,featured:0};
