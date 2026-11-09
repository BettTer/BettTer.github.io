export type PaperFlowState = {centered:number; featured:number};
export type PaperFlowAction = {type:'preview'|'center'; index:number};

export function paperFlowReducer(state:PaperFlowState, action:PaperFlowAction, count:number):PaperFlowState {
 const index=Math.max(0,Math.min(Math.max(0,count-1),action.index));
 if(action.type==='preview')return index===state.featured?state:{...state,featured:index};
 return index===state.centered?state:{centered:index,featured:index};
}
