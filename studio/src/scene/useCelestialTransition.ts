import {useEffect,useReducer} from 'react';
import {celestialDurations,celestialReducer,initialCelestialState} from './celestialState';
import type {ScenePeriod} from './timeOfDay';

export function useCelestialTransition(period:ScenePeriod,immediate:boolean) {
 const [state,dispatch]=useReducer(celestialReducer,period,initialCelestialState);
 useEffect(()=>dispatch({type:'request',period,immediate}),[period,immediate]);
 useEffect(()=>{
  if(state.phase==='idle')return;
  const token=state.token;
  const timer=window.setTimeout(()=>dispatch({type:'advance',token}),celestialDurations[state.phase]);
  return()=>window.clearTimeout(timer);
 },[state.phase,state.token]);
 return state;
}
