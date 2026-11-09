import type {CelestialState} from './celestialState';
import {orbitCssPoint} from './orbitGeometry';

export function orbitKeyframes(state:CelestialState):string {
 if(state.phase==='idle')return '';
 const body=[],light=[];
 for(let i=0;i<=32;i++){
  const t=i/32,eased=t*t*(3-2*t);
  const point=orbitCssPoint(state.from+(state.to-state.from)*eased);
  const opacity=state.phase==='setting'?Math.min(1,(1-t)/.3):state.phase==='rising'?Math.min(1,t/.3):1;
  body.push(`${t*100}%{transform:${point.body};opacity:${opacity.toFixed(4)}}`);
  light.push(`${t*100}%{transform:${point.reflection};opacity:${opacity.toFixed(4)}}`);
 }
 return `@keyframes celestial-path-${state.token}{${body.join('')}}@keyframes celestial-light-${state.token}{${light.join('')}}`;
}
