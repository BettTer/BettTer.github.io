import {expect,it} from 'vitest';
import {orbitPoint} from './orbitGeometry';
it('rises from the eastern horizon, arcs above the room, and sets in the west',()=>{
 expect(orbitPoint(0)).toEqual({x:780,y:510});
 expect(orbitPoint(.5).x).toBeCloseTo(1080);
 expect(orbitPoint(.5).y).toBeCloseTo(150);
 expect(orbitPoint(1).x).toBeCloseTo(1380);
 expect(orbitPoint(1).y).toBeCloseTo(510);
 // A straight diagonal from sunrise to noon would cross y=330 here.
 expect(orbitPoint(.25).y).toBeLessThan(300);
 expect(orbitPoint(.25).x).toBeGreaterThan(780);
 expect(orbitPoint(.25).x).toBeLessThan(1080);
});
it('continues right and downward through sunset instead of reversing toward morning',()=>{
 const before=orbitPoint(.86),later=orbitPoint(.94),set=orbitPoint(1);
 expect(later.x).toBeGreaterThan(before.x);
 expect(later.y).toBeGreaterThan(before.y);
 expect(set.x).toBeGreaterThan(later.x);
 expect(set.y).toBeGreaterThan(later.y);
});
