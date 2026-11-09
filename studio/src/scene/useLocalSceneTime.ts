import {useEffect,useState} from 'react';
import {resolveScenePeriod,type SceneChoice} from './timeOfDay';

export function useLocalSceneTime() {
 const [now,setNow]=useState(()=>new Date());
 const [choice,setChoice]=useState<SceneChoice>('auto');
 useEffect(()=>{
  const update=()=>{if(!document.hidden)setNow(new Date());};
  const timer=window.setInterval(update,60_000);
  document.addEventListener('visibilitychange',update);
  return()=>{window.clearInterval(timer);document.removeEventListener('visibilitychange',update);};
 },[]);
 function select(next:SceneChoice) {setNow(new Date());setChoice(next);}
 return {choice,select,period:resolveScenePeriod(choice,now),clockLabel:`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`};
}
