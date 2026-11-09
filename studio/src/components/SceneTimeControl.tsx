import {useI18n} from '../i18n/I18n';
import {scenePeriods,type SceneChoice} from '../scene/timeOfDay';
import type {useLocalSceneTime} from '../scene/useLocalSceneTime';

export function SceneTimeControl({clock}:{clock:ReturnType<typeof useLocalSceneTime>}) {
 const {t}=useI18n();
 const labels:Record<SceneChoice,string>={auto:`${t.sceneAuto} · ${clock.clockLabel}`,morning:t.sceneMorning,day:t.sceneDay,dusk:t.sceneDusk,night:t.sceneNight};
 return <div className="scene-time-control"><label htmlFor="scene-time-select">{t.sceneLabel}</label><select id="scene-time-select" aria-label={t.sceneTimeLabel} value={clock.choice} onChange={event=>clock.select(event.target.value as SceneChoice)}>{(['auto',...scenePeriods] as const).map(value=><option key={value} value={value}>{labels[value]}</option>)}</select></div>;
}
