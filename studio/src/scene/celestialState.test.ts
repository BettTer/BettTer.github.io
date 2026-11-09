import {describe,expect,it} from 'vitest';
import {celestialReducer as reduce,initialCelestialState as initial} from './celestialState';

describe('celestial handoff',()=>{
 it('keeps the old sun until it has set, then raises the moon',()=>{
  const setting=reduce(initial('dusk'),{type:'request',period:'night'});
  expect(setting).toMatchObject({shown:'dusk',target:'night',phase:'setting'});
  const rising=reduce(setting,{type:'advance',token:setting.token});
  expect(rising).toMatchObject({shown:'night',phase:'rising'});
  expect(reduce(rising,{type:'advance',token:rising.token})).toMatchObject({shown:'night',phase:'idle'});
 });
 it('sets the old moon before sunrise',()=>{
  const setting=reduce(initial('night'),{type:'request',period:'morning'});
  expect(setting).toMatchObject({shown:'night',phase:'setting'});
  expect(reduce(setting,{type:'advance',token:setting.token})).toMatchObject({shown:'morning',phase:'rising'});
 });
 it('finishes same-body travel before starting a queued body change',()=>{
  const moving=reduce(initial('day'),{type:'request',period:'dusk'});
  expect(moving).toMatchObject({shown:'dusk',phase:'travelling'});
  const queued=reduce(moving,{type:'request',period:'night'});
  expect(queued).toMatchObject({shown:'dusk',phase:'travelling',token:moving.token});
  expect(reduce(queued,{type:'advance',token:queued.token})).toMatchObject({shown:'dusk',phase:'setting',target:'night'});
 });
 it('uses the latest request at the hidden boundary without flashing an obsolete moon',()=>{
  const setting=reduce(initial('dusk'),{type:'request',period:'night'});
  const queued=reduce(setting,{type:'request',period:'morning'});
  expect(queued.shown).toBe('dusk');
  expect(reduce(queued,{type:'advance',token:queued.token})).toMatchObject({shown:'morning',phase:'rising'});
 });
 it('does not replace a moon that is still rising',()=>{
  const setting=reduce(initial('dusk'),{type:'request',period:'night'});
  const rising=reduce(setting,{type:'advance',token:setting.token});
  const queued=reduce(rising,{type:'request',period:'morning'});
  expect(queued).toMatchObject({shown:'night',phase:'rising',token:rising.token});
  expect(reduce(queued,{type:'advance',token:queued.token})).toMatchObject({shown:'night',phase:'setting'});
 });
 it('settles immediately offscreen/reduced-motion and rejects old completions',()=>{
  const setting=reduce(initial('dusk'),{type:'request',period:'night'});
  const settled=reduce(setting,{type:'request',period:'morning',immediate:true});
  expect(settled).toMatchObject({shown:'morning',target:'morning',phase:'idle'});
  expect(reduce(settled,{type:'advance',token:setting.token})).toBe(settled);
 });
 it('does not start work for an unchanged idle scene',()=>{
  const state=initial('dusk');
  expect(reduce(state,{type:'request',period:'dusk'})).toBe(state);
  expect(reduce(state,{type:'advance',token:state.token})).toBe(state);
 });
 it('finishes the current solar cycle instead of travelling backwards from dusk to morning',()=>{
  const setting=reduce(initial('dusk'),{type:'request',period:'morning'});
  expect(setting).toMatchObject({shown:'dusk',phase:'setting'});
  expect(reduce(setting,{type:'advance',token:setting.token})).toMatchObject({shown:'morning',phase:'rising'});
 });
 it('also starts a new cycle when daylight is changed back to morning',()=>{
  expect(reduce(initial('day'),{type:'request',period:'morning'})).toMatchObject({shown:'day',phase:'setting'});
 });
});
