import type {Locale} from './locale';
const en={
 paperCollection:'Journal newspapers',browsePapers:'SLIDE THROUGH THE PAPERS · PICK ONE TO READ',previousPaper:'Previous newspaper',nextPaper:'Next newspaper',
 pageTitle:'Young — A room by the sea',studio:'’s studio',skip:'Skip to projects',navigation:'Main navigation',collection:'The collection',journal:'Journal',music:'Music',about:'About',language:'Language',
 heroEyebrow:'AN OPEN WINDOW. A PERSONAL COLLECTION.',heroFirst:'A room',heroSecond:'by the',heroAccent:'sea.',heroDescription:'Software, sound &\nthings worth keeping.',comeIn:'Come on in',listeningDesk:'THE LISTENING DESK',inPlayer:'IN THE PLAYER',pace:'EXPLORE AT YOUR OWN PACE.',scrollDesk:'SCROLL TO THE DESK',roomBy:'A ROOM BY YOUNG / BETTTER',
 ready:'DISC READY',changing:'CHANGING DISC',readingDisc:'READING DISC',track:'TRACK',previous:'Previous project',next:'Next project',loadedDisc:'Loaded disc',
 collectionEyebrow:'01 / THE RECORD SHELF',collectionFirst:'Things I’ve',collectionSecond:'put into the world.',collectionDescription:'A few experiments in software,\nsound and interaction.',chooseDisc:'Choose a disc. Have a look inside.',projectCollection:'Project collection',load:'Load',loaded:'LOADED',linerNotes:'LINER NOTES',exploreGithub:'Explore on GitHub',liveProject:'Open live project',personalCollection:'PERSONAL COLLECTION',discs:'DISCS',restGithub:'The rest is on GitHub',
 musicEyebrow:'ALSO FROM THIS ROOM / MUSIC',musicFirst:'After hours.',musicSecond:'Another frequency.',musicDescription:'Music lives here, too.\nMeet Young CRT, the other side of the collection.',listenSpotify:'Listen on Spotify',artistSpotify:'ARTIST ON SPOTIFY',posterAlt:'Young CRT — Lofi / Synthwave: a pink sunset, purple sky, astronaut and retro car.',
 notesEyebrow:'02 / PAPERS ON THE TABLE',notesFirst:'A few words,',notesSecond:'kept on paper.',notesDescription:'Ideas, observations, loose ends.\nThe occasional dispatch from this room.',read:'Read',paperBrand:'杂谈',notesCategory:'NOTES & OBSERVATIONS',unfold:'UNFOLD & READ',keepingFirst:'Some things',keepingSecond:'are worth keeping.',notebook:'An open notebook.\nOne page at a time.',closeNote:'Close note',close:'CLOSE',originalArchive:'Original archive',originalLanguage:'Original text · Chinese',readerFooter:'Filed in the studio. Kept for another day.',
 aboutEyebrow:'03 / BEFORE YOU GO',aboutFirst:'Made with curiosity.',aboutSecond:'Kept with care.',aboutIntro:'I’m Young, also known as BettTer.',aboutBody:'I build software and collect small experiments in sound, interaction and the places between. This room is a way of keeping them together.',findGithub:'Find me on GitHub',listenArtist:'Listen to Young CRT on Spotify',browseArchive:'Browse the original journal archive',littleRoom:'A LITTLE ROOM ON THE INTERNET.',backWindow:'BACK TO THE WINDOW',
 projectDescriptions:[
 'Card search, deck checks, opening-hand odds and a rules-engine route planner. Tools that give an AI assistant exact data instead of asking it to remember.',
 'An iOS vocal keyboard with Live2D characters, beat-driven visuals, editable lyrics and adaptive tempo. Your touch becomes a small performance.',
 'A streaming audio engine built directly on Core Audio. Parsing, packet buffering and AudioQueue output, without a third-party audio library in the engine. Code-driven playback; not a finished player UI.',
 'An AR prototype that pins a note to a real surface and restores it later. World-map relocalization, GPS/heading fallback and surface snapping make a digital note feel attached to a place.'
 ],projectKinds:['TOOLS / GAME SYSTEMS','MUSIC / INTERACTION','AUDIO / ENGINEERING','SPATIAL / PROTOTYPE']
};
export type Messages=typeof en;
const zhHans:Messages={
 paperCollection:'杂谈报纸收藏',browsePapers:'左右翻阅，挑一份展开读读。',previousPaper:'上一份报纸',nextPaper:'下一份报纸',
 pageTitle:'Young — 海边的工作室',studio:' 的工作室',skip:'跳到项目',navigation:'主导航',collection:'项目收藏',journal:'杂谈',music:'音乐',about:'关于',language:'语言',
 heroEyebrow:'一扇敞开的窗，一份私人的收藏。',heroFirst:'一间工作室，',heroSecond:'面朝',heroAccent:'大海。',heroDescription:'软件、声音，\n还有值得留下的事物。',comeIn:'进来坐坐',listeningDesk:'此刻的聆听角落',inPlayer:'碟机里的项目',pace:'按自己的节奏，慢慢探索。',scrollDesk:'走近桌面',roomBy:'YOUNG / BETTTER 的小房间',
 ready:'碟片就绪',changing:'正在换碟',readingDisc:'正在读碟',track:'曲目',previous:'上一个项目',next:'下一个项目',loadedDisc:'已装入的碟片',
 collectionEyebrow:'01 / 我的唱片架',collectionFirst:'一些想法，',collectionSecond:'做成了这些。',collectionDescription:'关于软件、声音\n与交互的几次尝试。',chooseDisc:'挑一张碟，看看里面是什么。',projectCollection:'项目收藏',load:'装入',loaded:'已装入',linerNotes:'碟片内页',exploreGithub:'在 GitHub 查看',liveProject:'打开在线项目',personalCollection:'个人收藏',discs:'张碟片',restGithub:'更多项目在 GitHub',
 musicEyebrow:'同样来自这间工作室 / 音乐',musicFirst:'工作之外，',musicSecond:'另一个频率。',musicDescription:'这里也有音乐。\nYoung CRT，是收藏的另一面。',listenSpotify:'去 Spotify 听听',artistSpotify:'SPOTIFY 歌手页',posterAlt:'Young CRT — Lofi / Synthwave：粉色落日、紫色天空、宇航员与复古汽车。',
 notesEyebrow:'02 / 桌上的报纸',notesFirst:'几句话，',notesSecond:'留在纸上。',notesDescription:'想法、观察、未完的思绪。\n偶尔从这间房里寄出的一页。',read:'阅读',paperBrand:'杂谈',notesCategory:'随笔 · 想法与观察',unfold:'展开阅读',keepingFirst:'有些事物，',keepingSecond:'值得留下。',notebook:'一本摊开的笔记。\n一页，一页地写。',closeNote:'关闭文章',close:'关闭',originalArchive:'原始归档',originalLanguage:'原文 · 中文',readerFooter:'收进工作室，留待另一天。',
 aboutEyebrow:'03 / 离开之前',aboutFirst:'出于好奇，',aboutSecond:'用心留下。',aboutIntro:'我是 Young，也叫 BettTer。',aboutBody:'我做软件，也收集关于声音、交互，以及它们之间的小实验。这间工作室，把这些事物放在了一起。',findGithub:'在 GitHub 找到我',listenArtist:'在 Spotify 聆听 Young CRT',browseArchive:'浏览原来的杂谈归档',littleRoom:'互联网上的一间小房间。',backWindow:'回到窗边',
 projectDescriptions:[
 '查卡、卡组检查、起手概率计算，以及基于真实规则引擎的展开路线规划。让 AI 助手使用准确的数据，而不是凭记忆回答。',
 '一个 iOS 人声键盘：Live2D 角色、节拍驱动的画面、可编辑歌词和自适应速度。让每一次触碰成为一段小小的演出。',
 '直接基于 Core Audio 的流式音频引擎，自行处理解析、数据包缓冲和 AudioQueue 输出，引擎不依赖第三方音频库。目前通过代码控制播放，尚无完整播放器界面。',
 '一个把便签贴在真实表面、并在之后恢复的 AR 原型。通过世界地图重定位、GPS 与朝向回退，以及表面吸附，让数字便签留在原处。'
 ],projectKinds:['工具 / 游戏系统','音乐 / 交互','音频 / 工程','空间 / 原型']
};
const zhHant:Messages={
 paperCollection:'雜談報紙收藏',browsePapers:'左右翻閱，挑一份展開讀讀。',previousPaper:'上一份報紙',nextPaper:'下一份報紙',
 pageTitle:'Young — 海邊的工作室',studio:' 的工作室',skip:'跳到專案',navigation:'主導覽',collection:'專案收藏',journal:'雜談',music:'音樂',about:'關於',language:'語言',
 heroEyebrow:'一扇敞開的窗，一份私人的收藏。',heroFirst:'一間工作室，',heroSecond:'面朝',heroAccent:'大海。',heroDescription:'軟體、聲音，\n還有值得留下的事物。',comeIn:'進來坐坐',listeningDesk:'此刻的聆聽角落',inPlayer:'碟機裡的專案',pace:'按自己的節奏，慢慢探索。',scrollDesk:'走近桌面',roomBy:'YOUNG / BETTTER 的小房間',
 ready:'碟片就緒',changing:'正在換碟',readingDisc:'正在讀碟',track:'曲目',previous:'上一個專案',next:'下一個專案',loadedDisc:'已載入的碟片',
 collectionEyebrow:'01 / 我的唱片架',collectionFirst:'一些想法，',collectionSecond:'做成了這些。',collectionDescription:'關於軟體、聲音\n與互動的幾次嘗試。',chooseDisc:'挑一張碟，看看裡面是什麼。',projectCollection:'專案收藏',load:'載入',loaded:'已載入',linerNotes:'碟片內頁',exploreGithub:'在 GitHub 查看',liveProject:'開啟線上專案',personalCollection:'個人收藏',discs:'張碟片',restGithub:'更多專案在 GitHub',
 musicEyebrow:'同樣來自這間工作室 / 音樂',musicFirst:'工作之外，',musicSecond:'另一個頻率。',musicDescription:'這裡也有音樂。\nYoung CRT，是收藏的另一面。',listenSpotify:'去 Spotify 聽聽',artistSpotify:'SPOTIFY 藝人頁',posterAlt:'Young CRT — Lofi / Synthwave：粉色落日、紫色天空、太空人與復古汽車。',
 notesEyebrow:'02 / 桌上的報紙',notesFirst:'幾句話，',notesSecond:'留在紙上。',notesDescription:'想法、觀察、未完的思緒。\n偶爾從這間房裡寄出的一頁。',read:'閱讀',paperBrand:'雜談',notesCategory:'隨筆 · 想法與觀察',unfold:'展開閱讀',keepingFirst:'有些事物，',keepingSecond:'值得留下。',notebook:'一本攤開的筆記。\n一頁，一頁地寫。',closeNote:'關閉文章',close:'關閉',originalArchive:'原始封存',originalLanguage:'原文 · 中文',readerFooter:'收進工作室，留待另一天。',
 aboutEyebrow:'03 / 離開之前',aboutFirst:'出於好奇，',aboutSecond:'用心留下。',aboutIntro:'我是 Young，也叫 BettTer。',aboutBody:'我做軟體，也收集關於聲音、互動，以及它們之間的小實驗。這間工作室，把這些事物放在了一起。',findGithub:'在 GitHub 找到我',listenArtist:'在 Spotify 聆聽 Young CRT',browseArchive:'瀏覽原來的雜談封存',littleRoom:'網路上的一間小房間。',backWindow:'回到窗邊',
 projectDescriptions:[
 '卡片查詢、牌組檢查、起手機率計算，以及基於真實規則引擎的展開路線規劃。讓 AI 助手使用準確的資料，而不是憑記憶回答。',
 '一個 iOS 人聲鍵盤：Live2D 角色、節拍驅動的畫面、可編輯歌詞和自適應速度。讓每一次觸碰成為一段小小的演出。',
 '直接基於 Core Audio 的串流音訊引擎，自行處理解析、資料封包緩衝和 AudioQueue 輸出，引擎不依賴第三方音訊函式庫。目前透過程式碼控制播放，尚無完整播放器介面。',
 '一個把便條貼在真實表面、並在之後恢復的 AR 原型。透過世界地圖重新定位、GPS 與朝向備援，以及表面吸附，讓數位便條留在原處。'
 ],projectKinds:['工具 / 遊戲系統','音樂 / 互動','音訊 / 工程','空間 / 原型']
};
const ja:Messages={
 paperCollection:'雑談の新聞コレクション',browsePapers:'左右にめくって、気になる一枚を。',previousPaper:'前の新聞',nextPaper:'次の新聞',
 pageTitle:'Young — 海辺のアトリエ',studio:' のアトリエ',skip:'プロジェクトへ',navigation:'メインナビゲーション',collection:'コレクション',journal:'雑談',music:'音楽',about:'自己紹介',language:'言語',
 heroEyebrow:'開いた窓と、ささやかなコレクション。',heroFirst:'海辺の',heroSecond:'',heroAccent:'アトリエ。',heroDescription:'ソフトウェア、音、\nそして残しておきたいもの。',comeIn:'どうぞ、中へ',listeningDesk:'リスニングデスク',inPlayer:'プレーヤーの中には',pace:'自分のペースで、ゆっくりと。',scrollDesk:'デスクへ',roomBy:'YOUNG / BETTTER の小さな部屋',
 ready:'ディスク準備完了',changing:'ディスク交換中',readingDisc:'ディスク読込中',track:'曲目',previous:'前のプロジェクト',next:'次のプロジェクト',loadedDisc:'セット中のディスク',
 collectionEyebrow:'01 / ディスクの棚',collectionFirst:'思いついたことを、',collectionSecond:'かたちに。',collectionDescription:'ソフトウェア、音、\nインタラクションの小さな実験。',chooseDisc:'一枚選んで、中をのぞいてみてください。',projectCollection:'プロジェクト一覧',load:'セットする',loaded:'セット中',linerNotes:'ライナーノーツ',exploreGithub:'GitHub で見る',liveProject:'ブラウザーで試す',personalCollection:'個人コレクション',discs:'枚のディスク',restGithub:'ほかのプロジェクトは GitHub へ',
 musicEyebrow:'この部屋から、もうひとつ / 音楽',musicFirst:'日が暮れたら、',musicSecond:'別の周波数へ。',musicDescription:'この部屋には、音楽もあります。\nYoung CRT。コレクションの、もうひとつの顔。',listenSpotify:'Spotify で聴く',artistSpotify:'SPOTIFY アーティストページ',posterAlt:'Young CRT — Lofi / Synthwave：ピンクの夕焼け、紫の空、宇宙飛行士とレトロな車。',
 notesEyebrow:'02 / テーブルの上の新聞',notesFirst:'いくつかの言葉を、',notesSecond:'紙に残して。',notesDescription:'思いつき、観察、まだ途中の考え。\nこの部屋から、ときどき届く一ページ。',read:'読む',paperBrand:'雑談',notesCategory:'随筆 · 考えと観察',unfold:'広げて読む',keepingFirst:'残しておきたい',keepingSecond:'ものがある。',notebook:'開いたノート。\n一ページずつ。',closeNote:'記事を閉じる',close:'閉じる',originalArchive:'元の記事',originalLanguage:'原文 · 中国語',readerFooter:'アトリエにしまって、またいつか。',
 aboutEyebrow:'03 / お帰りの前に',aboutFirst:'好奇心でつくり、',aboutSecond:'大切に残す。',aboutIntro:'Young、またの名を BettTer といいます。',aboutBody:'ソフトウェアをつくり、音やインタラクション、その間にある小さな実験を集めています。この部屋は、それらを一緒に置いておく場所です。',findGithub:'GitHub でつながる',listenArtist:'Spotify で Young CRT を聴く',browseArchive:'以前の雑談アーカイブを見る',littleRoom:'インターネットの片隅の、小さな部屋。',backWindow:'窓辺に戻る',
 projectDescriptions:[
 'カード検索、デッキ検証、初手の確率計算、そして実際のルールエンジンによる展開ルート探索。AI アシスタントが記憶に頼らず、正確なデータを使えるようにするツールです。',
 'Live2D キャラクター、ビートに合わせた映像、編集できる歌詞、テンポへの適応を備えた iOS のボーカルキーボード。タッチが小さな演奏になります。',
 'Core Audio を直接使ったストリーミング音声エンジン。解析、パケットバッファー、AudioQueue 出力を実装し、エンジン内に外部の音声ライブラリーを使いません。現在はコードから再生を操作し、完成したプレーヤー画面はありません。',
 '現実の表面にメモを置き、後で同じ場所に復元する AR プロトタイプ。ワールドマップによる再ローカライズ、GPS と方位による補完、表面への吸着を組み合わせています。'
 ],projectKinds:['ツール / ゲームシステム','音楽 / インタラクション','音声 / エンジニアリング','空間 / プロトタイプ']
};
export const messages:Record<Locale,Messages>={en,'zh-Hans':zhHans,'zh-Hant':zhHant,ja};
