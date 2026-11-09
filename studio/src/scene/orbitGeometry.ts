export const orbitProgress={morning:.22,day:.5,dusk:.86,night:.5} as const;
export function orbitPoint(progress:number) {
 const angle=Math.max(0,Math.min(1,progress))*Math.PI;
 return {x:1080-300*Math.cos(angle),y:510-360*Math.sin(angle)};
}
export function orbitCssPoint(progress:number) {
 const point=orbitPoint(progress);
 const horizontal=((1080-point.x)/300).toFixed(6),height=((510-point.y)/360).toFixed(6);
 const x=`calc(var(--orbit-center-x) - var(--orbit-radius-x) * ${horizontal})`;
 const y=`calc(var(--orbit-ground-y) - var(--orbit-radius-y) * ${height})`;
 return {body:`translate(${x},${y})`,reflection:`translateX(calc(${x} - 1177px))`};
}
