import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {useCelestialTransition} from '../scene/useCelestialTransition';
import {celestialDurations} from '../scene/celestialState';
import {orbitCssPoint} from '../scene/orbitGeometry';
import {orbitKeyframes} from '../scene/orbitAnimation';
import type {ScenePeriod} from '../scene/timeOfDay';
export function StudioScene({period,reduced=false}:{period:ScenePeriod;reduced?:boolean}){
 const scene=useRef<HTMLDivElement>(null);
 const [running,setRunning]=useState(true);
 const orbit=useCelestialTransition(period,reduced||!running);
 const restingPose=orbitCssPoint(orbit.to);
 const motionStyle={
  '--orbit-body-pose':restingPose.body,'--orbit-light-pose':restingPose.reflection,
  '--orbit-path-name':orbit.phase==='idle'?'none':`celestial-path-${orbit.token}`,
  '--orbit-light-name':orbit.phase==='idle'?'none':`celestial-light-${orbit.token}`,
  '--orbit-duration':`${orbit.phase==='idle'?0:celestialDurations[orbit.phase]}ms`
 } as CSSProperties;
 useEffect(()=>{
  let inView=true;
  const update=()=>setRunning(inView&&!document.hidden);
  const observer=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;update();});
  if(scene.current)observer.observe(scene.current);
  document.addEventListener('visibilitychange',update);
  update();
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',update);};
 },[]);
 return <div ref={scene} className={`studio-scene ${running?'scene-running':'scene-paused'}`} data-period={orbit.shown} data-orbit-phase={orbit.phase} data-requested-period={period} style={motionStyle} aria-hidden="true"><style>{orbitKeyframes(orbit)}</style><svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<defs>
 <linearGradient id="sky" x2="0" y2="1"><stop stopColor="var(--scene-sky-1)"/><stop offset=".34" stopColor="var(--scene-sky-2)"/><stop offset=".67" stopColor="var(--scene-sky-3)"/><stop offset="1" stopColor="var(--scene-sky-4)"/></linearGradient>
 <radialGradient id="sun-haze"><stop stopColor="var(--scene-haze-core)" stopOpacity=".62"/><stop offset=".55" stopColor="var(--scene-haze-edge)" stopOpacity=".2"/><stop offset="1" stopColor="var(--scene-haze-edge)" stopOpacity="0"/></radialGradient>
 <linearGradient id="sea" x2="0" y2="1"><stop stopColor="var(--scene-sea-1)"/><stop offset=".38" stopColor="var(--scene-sea-2)"/><stop offset="1" stopColor="var(--scene-sea-3)"/></linearGradient>
 <linearGradient id="room" x2="1" y2="1"><stop stopColor="var(--scene-room-1)"/><stop offset="1" stopColor="var(--scene-room-2)"/></linearGradient>
 <linearGradient id="wood" x2="0" y2="1"><stop stopColor="var(--scene-wood-1)"/><stop offset="1" stopColor="var(--scene-wood-2)"/></linearGradient>
 <mask id="scene-moon-mask"><circle r="61" fill="white"/><circle cx="25" cy="-17" r="53" fill="black"/></mask>
 <clipPath id="window"><rect x="434" y="74" width="1076" height="565" rx="2"/></clipPath>
 <pattern id="grill" width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#343d3c"/><circle cx="2" cy="2" r="1" fill="#121f22"/></pattern>
</defs>
<rect width="1600" height="1000" fill="url(#room)"/>
<path d="M0 0H1600V32H0Z" fill="#d9d5c3"/>
<rect x="414" y="54" width="1116" height="605" fill="#b6b3a1"/>
<rect x="425" y="65" width="1094" height="583" fill="#f6eed9"/>
<g clipPath="url(#window)">
 <rect x="434" y="74" width="1076" height="565" fill="url(#sky)"/>
 <g className="scene-stars" fill="#e8e5ff">
  {[[505,110,2],[570,159,1.5],[650,107,2.5],[730,145,1.8],[820,106,2],[905,167,1.7],[980,113,2.4],[1070,205,1.8],[1150,105,2],[1230,145,2.5],[1307,98,1.5],[1390,183,2],[1450,120,2.5],[605,221,1.7],[705,205,2],[1105,255,2],[1255,236,1.8],[1470,248,2]].map(([cx,cy,r],i)=><circle className={`scene-star star-${i%3}`} key={cx} cx={cx} cy={cy} r={r}/>)}
 </g>
 <g className="scene-celestial">
  <circle className="scene-halo" r="205" fill="url(#sun-haze)"/><circle className="scene-halo scene-halo-outer" r="270" fill="url(#sun-haze)"/>
  <circle className="scene-sun" r="70" fill="var(--scene-orb)"/>
  <circle className="scene-moon" r="61" fill="var(--scene-orb)" mask="url(#scene-moon-mask)"/>
 </g>
 <g fill="var(--scene-cloud)" opacity=".62"><path className="scene-cloud scene-cloud-a" d="M470 183q72-20 142-4l149 10-229 1Z"/><path className="scene-cloud scene-cloud-b" d="M1090 155q74-19 136 1l168 10-242 1Z"/><path className="scene-cloud scene-cloud-c" d="M770 245q66-16 122-1l144 9-202 1Z"/><path className="scene-cloud scene-cloud-d" d="M455 296q62-16 117-4l150 8-204 2Z"/></g>
 <path d="M434 411H1510V639H434Z" fill="url(#sea)"/>
 <path d="M434 411H1510" stroke="var(--scene-wave)" strokeWidth="3"/>
 <g className="scene-water" fill="none" strokeLinecap="round">
  <g className="scene-wave scene-wave-far" stroke="var(--scene-wave)" strokeWidth="1.8" opacity=".65"><path d="M408 438q65-4 130 0t130 0t130 0t130 0t130 0t130 0t130 0t130 0t130 0M420 461q75 4 150 0t150 0t150 0t150 0t150 0t150 0t150 0t150 0"/></g>
  <g className="scene-wave scene-wave-mid" stroke="var(--scene-wave)" strokeWidth="2.5" opacity=".6"><path d="M406 488q93-5 186 0t186 0t186 0t186 0t186 0t186 0t186 0M420 526q76 5 152 0t152 0t152 0t152 0t152 0t152 0t152 0t152 0"/></g>
  <g className="scene-wave scene-wave-near" stroke="var(--scene-wave)" strokeWidth="3" opacity=".62"><path d="M400 553q105-10 210 0t210 0t210 0t210 0t210 0t210 0M410 584q85 9 170 0t170 0t170 0t170 0t170 0t170 0t170 0M400 618q110-8 220 0t220 0t220 0t220 0t220 0t220 0"/></g>
 </g>
 <g className="scene-reflection" fill="var(--scene-reflection)">
  {['M1126 429h104l-18 3h-102z','M1114 445h140l-31 3h-125z','M1088 467h186l-21 3h-184z','M1099 493h156l40 3h-233z','M1052 522h256l-36 3h-195z','M1034 563h271l30 3h-321z','M1017 602h344l-39 3h-335z'].map((d,i)=><path key={d} className={`reflection-band reflection-band-${i}`} d={d}/>)}
 </g>
 <g className="scene-glints" stroke="var(--scene-reflection)" strokeLinecap="round" strokeWidth="2.5">
  {[[545,446,28],[685,462,40],[775,484,34],[598,505,49],[860,526,54],[710,548,32],[520,565,44],[892,555,29]].map(([x,y,w],i)=><path key={x} className={`scene-glint glint-${i%3}`} d={`M${x} ${y}h${w}`}/>)}
 </g>
 <g fill="var(--scene-city)"><path d="M444 414v-37h19v-44h28v15h17v-57h28v32h27v-67h23v-12h11v12h23v77h23v-26h35v60h19v-88h34v17h22v-48h29v101h19v-71h29v31h31v76h28v-47h20v-28h20v45h22v-67h32v12h22v83h26v-54h21v54h20v-80h36v94H444Z"/>
 <path d="M1337 414v-34h23v-47h16v47h23v-87h36v-31h6v31h17v79h24v-59h28v101Z"/></g>
 <g className="scene-city-lights" fill="var(--scene-window-light)"><path d="M579 276h5v5h-5zm0 15h5v5h-5zm16 30h5v5h-5zm111-8h5v5h-5zm0 15h5v5h-5zm16 0h5v5h-5zm81 8h5v5h-5zm16 15h5v5h-5zm585-27h5v5h-5zm0 17h5v5h-5z"/></g>
 <path d="M445 639q35-186 4-409l12-3q44 220 11 412Z" fill="var(--scene-palm)"/>
 <g className="scene-palm-crown scene-palm-left" fill="var(--scene-palm)"><path className="scene-frond frond-0" d="M456 236q-80-79-180-25 119-23 180 25"/><path className="scene-frond frond-1" d="M456 236q-5-139-103-147 77 50 103 147"/><path className="scene-frond frond-2" d="M456 236q53-115 143-87-87 13-143 87"/><path className="scene-frond frond-0" d="M456 236q102-54 162 12-94-36-162-12"/><path className="scene-frond frond-1" d="M456 236q-82-27-128 74 62-70 128-74"/><path className="scene-frond frond-2" d="M456 236q68 7 91 99-45-61-91-99"/></g>
 <path d="M1429 639q-3-199 28-359l8 3q-22 163-16 356Z" fill="var(--scene-palm)"/>
 <g className="scene-palm-crown scene-palm-right" fill="var(--scene-palm)"><path className="scene-frond frond-0" d="M1461 288q-38-91-116-64 71 8 116 64"/><path className="scene-frond frond-1" d="M1461 288q21-112 94-102-63 34-94 102"/><path className="scene-frond frond-2" d="M1461 288q73-81 132-33-79-12-132 33"/><path className="scene-frond frond-0" d="M1461 288q-91-15-103 62 47-54 103-62"/><path className="scene-frond frond-1" d="M1461 288q69-12 92 74-53-61-92-74"/></g>
 <path d="M434 579H1510V591H434Z" fill="#ded5ba"/><path d="M434 595H1510V639H434Z" fill="#c0bba6"/>
 <g stroke="#ddd6bf" strokeWidth="4"><path d="M505 591v48M668 591v48M831 591v48M994 591v48M1157 591v48M1320 591v48M1483 591v48"/></g>
</g>
<path d="M966 73h12v567h-12Z" fill="#ede5ce"/><path d="M978 74h4v565h-4Z" fill="#b0b2a3"/>
<path d="M404 651H1540V672H404Z" fill="#f3ecd7"/>
<path d="M404 672H1540L1390 730H240Z" fill="#b8b09c" opacity=".35"/>
<path d="M0 740H1600V1000H0Z" fill="url(#wood)"/>
<path d="M0 735H1600V750H0Z" fill="#dfad7d"/><path d="M0 750H1600V764H0Z" fill="#744338"/>
<path className="scene-room-light" d="M978 672L1190 735h351l-250-63Z" fill="#f8d59a" opacity=".5"/>
<path className="scene-room-light scene-room-light-soft" d="M450 672L301 735h162l122-63Z" fill="#f7cd91" opacity=".42"/>
<path d="M740 764L1075 1000h325L993 764Z" fill="#f1be87" opacity=".18"/>
<g className="scene-speaker" transform="translate(1450 456)"><rect x="0" y="0" width="151" height="279" rx="4" fill="#453c34"/><rect x="8" y="9" width="135" height="259" fill="url(#grill)"/><circle cx="75" cy="70" r="27" fill="#252f30"/><circle cx="75" cy="70" r="16" fill="#1e292b"/><circle cx="75" cy="178" r="55" fill="#202c2e"/><circle cx="75" cy="178" r="44" fill="#2d3939"/><circle cx="75" cy="178" r="22" fill="#182629"/><rect x="57" y="249" width="36" height="4" fill="#aea18a"/></g>
<g transform="translate(299 570)"><path d="M10 160h120l-19-9H28Z" fill="#d7c6a4"/><path d="M27 151l46-120 7 2-45 118Z" fill="#b9b7a3"/><path d="M57 29l55-20 36 68-101 0Z" fill="#254a50"/><path d="M47 77h101" stroke="#1f3c43" strokeWidth="5"/><path d="M50 80L6 166h210L145 80Z" fill="#ffe3ab" opacity=".12"/></g>
<path d="M0 944H1600" stroke="#6c4238" opacity=".45"/>
</svg><span className="scene-grain"/></div>}
