import {describe,expect,it} from 'vitest';
import {resolveScenePeriod} from './timeOfDay';

describe('the visitor’s local day',()=>{
 it.each([
  [0,0,'night'],[4,59,'night'],[5,0,'morning'],[9,59,'morning'],
  [10,0,'day'],[15,59,'day'],[16,0,'dusk'],[19,59,'dusk'],[20,0,'night'],[23,59,'night']
 ] as const)('resolves local %s:%s as %s',(hour,minute,want)=>{
  expect(resolveScenePeriod('auto',new Date(2026,10,8,hour,minute))).toBe(want);
 });
 it('keeps a manual preview during clock changes and resumes the live clock in Auto',()=>{
  const night=new Date(2026,10,8,23,30),morning=new Date(2026,10,9,6,0);
  expect(resolveScenePeriod('dusk',night)).toBe('dusk');
  expect(resolveScenePeriod('dusk',morning)).toBe('dusk');
  expect(resolveScenePeriod('auto',morning)).toBe('morning');
 });
 it('reads local clock fields instead of converting the visitor to UTC',()=>{
  const localDate=new Date(2026,10,8,8,30);
  // A clock boundary fixture with distinct local/UTC hours catches accidental UTC use.
  localDate.getUTCHours=()=>20;
  expect(resolveScenePeriod('auto',localDate)).toBe('morning');
 });
});
