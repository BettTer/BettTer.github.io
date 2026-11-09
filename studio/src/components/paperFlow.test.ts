import {describe, expect, it} from 'vitest';
import {paperFlowReducer} from './paperFlow';

describe('newspaper browsing', () => {
 it('previews another paper without moving the centered issue', () => {
  expect(paperFlowReducer({centered:0, featured:0}, {type:'preview', index:1}, 3))
   .toEqual({centered:0, featured:1});
 });
 it('features the nearest paper after horizontal browsing', () => {
  expect(paperFlowReducer({centered:0, featured:2}, {type:'center', index:1}, 3))
   .toEqual({centered:1, featured:1});
 });
 it('does not discard hover when scroll remains on the same issue', () => {
  const state={centered:0, featured:1};
  expect(paperFlowReducer(state, {type:'center', index:0}, 2)).toBe(state);
 });
 it('stops at real collection edges instead of wrapping or inventing issues', () => {
  expect(paperFlowReducer({centered:0, featured:0}, {type:'center', index:-1}, 2))
   .toEqual({centered:0, featured:0});
  expect(paperFlowReducer({centered:0, featured:0}, {type:'center', index:8}, 2))
   .toEqual({centered:1, featured:1});
  expect(paperFlowReducer({centered:0, featured:0}, {type:'center', index:1}, 1))
   .toEqual({centered:0, featured:0});
 });
});
