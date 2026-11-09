import {useI18n} from '../i18n/I18n';
import {DiscArt} from './DiscArt';
import type {Project} from '../content/projects';
import type {DiscState} from '../player/discState';
type Props={project:Project;state:DiscState;count:number;onPrevious:()=>void;onNext:()=>void};
export function CDPlayer({project,state,count,onPrevious,onNext}:Props){const {t}=useI18n();return <div className={`cd-player phase-${state.phase}`}>
 <div className="player-top"><span className="player-brand">YOUNG<span>COMPACT DISC SYSTEM</span></span><span className="hi-fi">STEREO<br/>HIGH FIDELITY</span><div className="platter"><div className="disc-carrier"><DiscArt project={project}/></div><span className="glass-line"/></div><span className="top-screw screw-a"/><span className="top-screw screw-b"/></div>
 <div className="player-front"><span className="power-dot"/><div className="lcd" aria-label={`${t.loadedDisc} ${project.title} ${project.subtitle}`}><div className="lcd-top"><span>{state.phase==='idle'?t.ready:state.phase==='ejecting'?t.changing:t.readingDisc}</span><span>CD</span></div><div className="lcd-title"><span>{project.year}</span><b>{project.title}</b></div><div className="lcd-bottom"><span>{t.track} {project.year} / {String(count).padStart(2,'0')}</span><span className="equalizer">▂ ▅ ▃ ▆ ▂</span></div></div><div className="player-buttons"><button onClick={onPrevious} aria-label={t.previous}>◀◀</button><button onClick={onNext} aria-label={t.next}>▶▶</button></div></div>
 <span className="player-foot foot-a"/><span className="player-foot foot-b"/>
 </div>}
