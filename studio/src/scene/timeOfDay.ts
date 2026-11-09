export const scenePeriods=['morning','day','dusk','night'] as const;
export type ScenePeriod=typeof scenePeriods[number];
export type SceneChoice=ScenePeriod|'auto';
export function resolveScenePeriod(choice:SceneChoice,date:Date):ScenePeriod {
 if(choice!=='auto')return choice;
 const hour=date.getHours();
 if(hour>=5&&hour<10)return 'morning';
 if(hour>=10&&hour<16)return 'day';
 if(hour>=16&&hour<20)return 'dusk';
 return 'night';
}
