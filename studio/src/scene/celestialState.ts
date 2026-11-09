import type {ScenePeriod} from './timeOfDay';
import {orbitProgress} from './orbitGeometry';
export type CelestialState={shown:ScenePeriod;target:ScenePeriod;phase:'idle'|'travelling'|'setting'|'rising';token:number;from:number;to:number};
export type CelestialEvent={type:'request';period:ScenePeriod;immediate?:boolean}|{type:'advance';token:number};
export const celestialDurations={travelling:1600,setting:1800,rising:1800};
export function initialCelestialState(period:ScenePeriod):CelestialState {return {shown:period,target:period,phase:'idle',token:0,from:orbitProgress[period],to:orbitProgress[period]};}
function continueToTarget(state:CelestialState):CelestialState {
 if(state.shown===state.target)return {...state,phase:'idle',token:state.token+1};
 const sameBody=(state.shown==='night')===(state.target==='night');
 const forward=sameBody&&orbitProgress[state.target]>state.to;
 return forward
  ?{...state,shown:state.target,phase:'travelling',from:state.to,to:orbitProgress[state.target],token:state.token+1}
  :{...state,phase:'setting',from:state.to,to:1,token:state.token+1};
}
export function celestialReducer(state:CelestialState,event:CelestialEvent):CelestialState {
 if(event.type==='request'){
  if(event.immediate){
   if(state.phase==='idle'&&state.shown===event.period)return state;
   return {...initialCelestialState(event.period),token:state.token+1};
  }
  if(state.target===event.period)return state;
  const next={...state,target:event.period};
  return state.phase==='idle'?continueToTarget(next):next;
 }
 if(state.phase==='idle'||event.token!==state.token)return state;
 if(state.phase==='setting')return {...state,shown:state.target,phase:'rising',from:0,to:orbitProgress[state.target],token:state.token+1};
 return continueToTarget(state);
}
