export type DiscState={current:number;pending:number;phase:'idle'|'ejecting'|'loading';token:number};
export function initialDiscState(index=0):DiscState{return {current:index,pending:index,phase:'idle',token:0}}
export function adjacentIndex(index:number,delta:number,count:number){return count ? ((index+delta)%count+count)%count : 0}
export function discReducer(state:DiscState,event:{type:'select';index:number;immediate?:boolean}|{type:'advance';token:number}):DiscState{
 if(event.type==='select'){
  if(event.index===state.pending)return state;
  return event.immediate?{current:event.index,pending:event.index,phase:'idle',token:state.token+1}:{...state,pending:event.index,phase:'ejecting',token:state.token+1};
 }
 if(event.token!==state.token||state.phase==='idle')return state;
 return state.phase==='ejecting'?{...state,current:state.pending,phase:'loading'}:{...state,phase:'idle'};
}
