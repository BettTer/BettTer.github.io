import {describe,it,expect} from 'vitest';
import {initialDiscState,discReducer,adjacentIndex} from './discState';
describe('CD changes',()=>{
 it('does not eject the currently selected disc',()=>{const s=initialDiscState(0);expect(discReducer(s,{type:'select',index:0})).toBe(s)});
 it('wraps the collection in both directions',()=>{expect(adjacentIndex(0,-1,4)).toBe(3);expect(adjacentIndex(3,1,4)).toBe(0)});
 it('keeps the last selection when old animations finish',()=>{let s=initialDiscState(0);s=discReducer(s,{type:'select',index:1});const old=s.token;s=discReducer(s,{type:'select',index:2});expect(discReducer(s,{type:'advance',token:old})).toBe(s);s=discReducer(s,{type:'advance',token:s.token});expect(s.current).toBe(2);expect(s.phase).toBe('loading');s=discReducer(s,{type:'advance',token:s.token});expect(s.phase).toBe('idle')});
 it('switches immediately with reduced motion',()=>{const s=discReducer(initialDiscState(0),{type:'select',index:2,immediate:true});expect(s.current).toBe(2);expect(s.phase).toBe('idle')});
});
