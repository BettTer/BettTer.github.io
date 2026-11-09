import type {Locale} from './locale';
const en={
 sceneLabel:'SCENE',sceneTimeLabel:'Choose the time of day',sceneAuto:'Local time',sceneMorning:'Morning',sceneDay:'Daylight',sceneDusk:'Dusk',sceneNight:'Night',
 heroCurrent:"At Ancher: mobile apps & AI agents",shippedProducts:"SHIPPED PRODUCTS",openSourceWork:"OPEN SOURCE & EXPLORATIONS",workCategories:"Browse work by category",productWebsite:"Visit the website",
 paperCollection:'Journal newspapers',browsePapers:'SLIDE THROUGH THE PAPERS · PICK ONE TO READ',previousPaper:'Previous newspaper',nextPaper:'Next newspaper',
 pageTitle:'Young — A room by the sea',studio:'’s studio',skip:'Skip to projects',navigation:'Main navigation',collection:'The collection',journal:'Journal',music:'Music',about:'About',language:'Language',
 heroEyebrow:"SOFTWARE ENGINEER / MOBILE · WEB · AI",heroFirst:"Hi, I’m",heroSecond:'by the',heroAccent:"Young.",heroDescription:"Nine years shipping consumer apps and the backends behind them. From native iOS to full stack, with AI agents now part of the work.",comeIn:"Explore my work",listeningDesk:'THE LISTENING DESK',inPlayer:'IN THE PLAYER',pace:'EXPLORE AT YOUR OWN PACE.',scrollDesk:'SCROLL TO THE DESK',roomBy:'A ROOM BY YOUNG / BETTTER',
 ready:'DISC READY',changing:'CHANGING DISC',readingDisc:'READING DISC',track:'TRACK',previous:'Previous project',next:'Next project',loadedDisc:'Loaded disc',
 collectionEyebrow:'01 / THE RECORD SHELF',collectionFirst:"Built to be used.",collectionSecond:"Made to stay curious.",collectionDescription:"Shipped products and open-source work.\nMobile, web, and AI — from idea to release.",chooseDisc:'Choose a disc. Have a look inside.',projectCollection:'Project collection',load:'Load',loaded:'LOADED',linerNotes:'LINER NOTES',exploreGithub:'Explore on GitHub',liveProject:'Open live project',personalCollection:'PERSONAL COLLECTION',discs:'DISCS',restGithub:'The rest is on GitHub',
 musicEyebrow:'ALSO FROM THIS ROOM / MUSIC',musicFirst:'After hours.',musicSecond:'Another frequency.',musicDescription:'Music lives here, too.\nMeet Young CRT, the other side of the collection.',listenSpotify:'Listen on Spotify',artistSpotify:'ARTIST ON SPOTIFY',posterAlt:'Young CRT — Lofi / Synthwave: a pink sunset, purple sky, astronaut and retro car.',
 notesEyebrow:'02 / PAPERS ON THE TABLE',notesFirst:'A few words,',notesSecond:'kept on paper.',notesDescription:'Ideas, observations, loose ends.\nThe occasional dispatch from this room.',read:'Read',paperBrand:'杂谈',notesCategory:'NOTES & OBSERVATIONS',unfold:'UNFOLD & READ',keepingFirst:'Some things',keepingSecond:'are worth keeping.',notebook:'An open notebook.\nOne page at a time.',closeNote:'Close note',close:'CLOSE',originalArchive:'Original archive',originalLanguage:'Original text · Chinese',readerFooter:'Filed in the studio. Kept for another day.',
 aboutEyebrow:"03 / HOW I WORK",aboutFirst:"Know what you ship.",aboutSecond:"Read every line.",aboutIntro:"I write the spec and design, work with coding agents, and review every line before it merges.",aboutBody:"Nothing ships that I can’t explain. Outside of code: Yu-Gi-Oh!, the NBA and the gym.",findGithub:'Find me on GitHub',listenArtist:'Listen to Young CRT on Spotify',browseArchive:'Browse the original journal archive',littleRoom:'A LITTLE ROOM ON THE INTERNET.',backWindow:'BACK TO THE WINDOW',
 projectDescriptions:[
 "An AI knowledge workspace. I build the mobile app and contribute to the agent side: the MCP server, retrieval and evaluations that keep answers honest.",
 "A planning app built around interactive widgets. I wrote the sync engine that keeps the app and widgets consistent under concurrent writes.",
 "An on-device model I trained and converted to Core ML. It runs at 60 FPS, fully offline.",
 'Card search, deck checks, opening-hand odds and a rules-engine route planner. Tools that give an AI assistant exact data instead of asking it to remember.',
 'An iOS vocal keyboard with Live2D characters, beat-driven visuals, editable lyrics and adaptive tempo. Your touch becomes a small performance.',
 'A streaming audio engine built directly on Core Audio. Parsing, packet buffering and AudioQueue output, without a third-party audio library in the engine. Code-driven playback; not a finished player UI.',
 'An AR prototype that pins a note to a real surface and restores it later. World-map relocalization, GPS/heading fallback and surface snapping make a digital note feel attached to a place.'
 ],projectKinds:["SHIPPED / MOBILE & AI","SHIPPED / WIDGETS & SYNC","SHIPPED / ON-DEVICE ML",'TOOLS / GAME SYSTEMS','MUSIC / INTERACTION','AUDIO / ENGINEERING','SPATIAL / PROTOTYPE']
};
export type Messages=typeof en;
const zhHans:Messages={
 sceneLabel:'天色',sceneTimeLabel:'选择场景时段',sceneAuto:'当地时间',sceneMorning:'清晨',sceneDay:'白天',sceneDusk:'黄昏',sceneNight:'夜晚',
 heroCurrent:"在 Ancher，做移动端与 AI Agent",shippedProducts:"已上线的产品",openSourceWork:"开源与探索",workCategories:"按类别浏览作品",productWebsite:"访问产品网站",
 paperCollection:'杂谈报纸收藏',browsePapers:'左右翻阅，挑一份展开读读。',previousPaper:'上一份报纸',nextPaper:'下一份报纸',
 pageTitle:'Young — 海边的工作室',studio:' 的工作室',skip:'跳到项目',navigation:'主导航',collection:'项目收藏',journal:'杂谈',music:'音乐',about:'关于',language:'语言',
 heroEyebrow:"软件工程师 / 移动端 · WEB · AI",heroFirst:"你好，我是",heroSecond:'面朝',heroAccent:"Young.",heroDescription:"九年消费级产品开发经验，从原生 iOS 到跨端、Web 与后端。现在做全栈，也把 AI Agent 带进实际产品。",comeIn:"看看我的作品",listeningDesk:'此刻的聆听角落',inPlayer:'碟机里的项目',pace:'按自己的节奏，慢慢探索。',scrollDesk:'走近桌面',roomBy:'YOUNG / BETTTER 的小房间',
 ready:'碟片就绪',changing:'正在换碟',readingDisc:'正在读碟',track:'曲目',previous:'上一个项目',next:'下一个项目',loadedDisc:'已装入的碟片',
 collectionEyebrow:'01 / 我的唱片架',collectionFirst:"做成产品，",collectionSecond:"也保留好奇。",collectionDescription:"上线的产品，也有开源的探索。\n从移动端到 Web 和 AI，从想法到交付。",chooseDisc:'挑一张碟，看看里面是什么。',projectCollection:'项目收藏',load:'装入',loaded:'已装入',linerNotes:'碟片内页',exploreGithub:'在 GitHub 查看',liveProject:'打开在线项目',personalCollection:'个人收藏',discs:'张碟片',restGithub:'更多项目在 GitHub',
 musicEyebrow:'同样来自这间工作室 / 音乐',musicFirst:'工作之外，',musicSecond:'另一个频率。',musicDescription:'这里也有音乐。\nYoung CRT，是收藏的另一面。',listenSpotify:'去 Spotify 听听',artistSpotify:'SPOTIFY 歌手页',posterAlt:'Young CRT — Lofi / Synthwave：粉色落日、紫色天空、宇航员与复古汽车。',
 notesEyebrow:'02 / 桌上的报纸',notesFirst:'几句话，',notesSecond:'留在纸上。',notesDescription:'想法、观察、未完的思绪。\n偶尔从这间房里寄出的一页。',read:'阅读',paperBrand:'杂谈',notesCategory:'随笔 · 想法与观察',unfold:'展开阅读',keepingFirst:'有些事物，',keepingSecond:'值得留下。',notebook:'一本摊开的笔记。\n一页，一页地写。',closeNote:'关闭文章',close:'关闭',originalArchive:'原始归档',originalLanguage:'原文 · 中文',readerFooter:'收进工作室，留待另一天。',
 aboutEyebrow:"03 / 我的工作方式",aboutFirst:"理解每次交付，",aboutSecond:"读过每一行。",aboutIntro:"我写需求和设计，让 Coding Agent 承担大部分代码输入，并在合并前逐行审阅。",aboutBody:"无法解释清楚的东西，就不发布。写代码之外，喜欢游戏王、NBA 和健身。",findGithub:'在 GitHub 找到我',listenArtist:'在 Spotify 聆听 Young CRT',browseArchive:'浏览原来的杂谈归档',littleRoom:'互联网上的一间小房间。',backWindow:'回到窗边',
 projectDescriptions:[
 "一个 AI 知识工作空间。我负责移动端，也参与 Agent 侧的 MCP Server、检索，以及检查回答质量的评估工作。",
 "围绕交互式小组件打造的规划应用。我编写了同步引擎，让 App 与小组件在并发写入时仍然保持一致。",
 "我自行训练端侧模型并转换为 Core ML，让它以 60 FPS 完全离线运行。",
 '查卡、卡组检查、起手概率计算，以及基于真实规则引擎的展开路线规划。让 AI 助手使用准确的数据，而不是凭记忆回答。',
 '一个 iOS 人声键盘：Live2D 角色、节拍驱动的画面、可编辑歌词和自适应速度。让每一次触碰成为一段小小的演出。',
 '直接基于 Core Audio 的流式音频引擎，自行处理解析、数据包缓冲和 AudioQueue 输出，引擎不依赖第三方音频库。目前通过代码控制播放，尚无完整播放器界面。',
 '一个把便签贴在真实表面、并在之后恢复的 AR 原型。通过世界地图重定位、GPS 与朝向回退，以及表面吸附，让数字便签留在原处。'
 ],projectKinds:["已上线 / 移动端与 AI","已上线 / 小组件与同步","已上线 / 端侧机器学习",'工具 / 游戏系统','音乐 / 交互','音频 / 工程','空间 / 原型']
};
const zhHant:Messages={
 sceneLabel:'天色',sceneTimeLabel:'選擇場景時段',sceneAuto:'當地時間',sceneMorning:'清晨',sceneDay:'白天',sceneDusk:'黃昏',sceneNight:'夜晚',
 heroCurrent:"在 Ancher，做行動端與 AI Agent",shippedProducts:"已上線的產品",openSourceWork:"開源與探索",workCategories:"依類別瀏覽作品",productWebsite:"造訪產品網站",
 paperCollection:'雜談報紙收藏',browsePapers:'左右翻閱，挑一份展開讀讀。',previousPaper:'上一份報紙',nextPaper:'下一份報紙',
 pageTitle:'Young — 海邊的工作室',studio:' 的工作室',skip:'跳到專案',navigation:'主導覽',collection:'專案收藏',journal:'雜談',music:'音樂',about:'關於',language:'語言',
 heroEyebrow:"軟體工程師 / 行動端 · WEB · AI",heroFirst:"你好，我是",heroSecond:'面朝',heroAccent:"Young.",heroDescription:"九年消費級產品開發經驗，從原生 iOS 到跨平台、Web 與後端。現在做全端，也把 AI Agent 帶進實際產品。",comeIn:"看看我的作品",listeningDesk:'此刻的聆聽角落',inPlayer:'碟機裡的專案',pace:'按自己的節奏，慢慢探索。',scrollDesk:'走近桌面',roomBy:'YOUNG / BETTTER 的小房間',
 ready:'碟片就緒',changing:'正在換碟',readingDisc:'正在讀碟',track:'曲目',previous:'上一個專案',next:'下一個專案',loadedDisc:'已載入的碟片',
 collectionEyebrow:'01 / 我的唱片架',collectionFirst:"做成產品，",collectionSecond:"也保留好奇。",collectionDescription:"上線的產品，也有開源的探索。\n從行動端到 Web 和 AI，從想法到交付。",chooseDisc:'挑一張碟，看看裡面是什麼。',projectCollection:'專案收藏',load:'載入',loaded:'已載入',linerNotes:'碟片內頁',exploreGithub:'在 GitHub 查看',liveProject:'開啟線上專案',personalCollection:'個人收藏',discs:'張碟片',restGithub:'更多專案在 GitHub',
 musicEyebrow:'同樣來自這間工作室 / 音樂',musicFirst:'工作之外，',musicSecond:'另一個頻率。',musicDescription:'這裡也有音樂。\nYoung CRT，是收藏的另一面。',listenSpotify:'去 Spotify 聽聽',artistSpotify:'SPOTIFY 藝人頁',posterAlt:'Young CRT — Lofi / Synthwave：粉色落日、紫色天空、太空人與復古汽車。',
 notesEyebrow:'02 / 桌上的報紙',notesFirst:'幾句話，',notesSecond:'留在紙上。',notesDescription:'想法、觀察、未完的思緒。\n偶爾從這間房裡寄出的一頁。',read:'閱讀',paperBrand:'雜談',notesCategory:'隨筆 · 想法與觀察',unfold:'展開閱讀',keepingFirst:'有些事物，',keepingSecond:'值得留下。',notebook:'一本攤開的筆記。\n一頁，一頁地寫。',closeNote:'關閉文章',close:'關閉',originalArchive:'原始封存',originalLanguage:'原文 · 中文',readerFooter:'收進工作室，留待另一天。',
 aboutEyebrow:"03 / 我的工作方式",aboutFirst:"理解每次交付，",aboutSecond:"讀過每一行。",aboutIntro:"我寫需求和設計，讓 Coding Agent 承擔大部分程式碼輸入，並在合併前逐行審閱。",aboutBody:"無法解釋清楚的東西，就不發布。寫程式之外，喜歡遊戲王、NBA 和健身。",findGithub:'在 GitHub 找到我',listenArtist:'在 Spotify 聆聽 Young CRT',browseArchive:'瀏覽原來的雜談封存',littleRoom:'網路上的一間小房間。',backWindow:'回到窗邊',
 projectDescriptions:[
 "一個 AI 知識工作空間。我負責行動端，也參與 Agent 側的 MCP Server、檢索，以及檢查回答品質的評估工作。",
 "圍繞互動式小工具打造的規劃應用。我編寫了同步引擎，讓 App 與小工具在並行寫入時仍然保持一致。",
 "我自行訓練端側模型並轉換為 Core ML，讓它以 60 FPS 完全離線執行。",
 '卡片查詢、牌組檢查、起手機率計算，以及基於真實規則引擎的展開路線規劃。讓 AI 助手使用準確的資料，而不是憑記憶回答。',
 '一個 iOS 人聲鍵盤：Live2D 角色、節拍驅動的畫面、可編輯歌詞和自適應速度。讓每一次觸碰成為一段小小的演出。',
 '直接基於 Core Audio 的串流音訊引擎，自行處理解析、資料封包緩衝和 AudioQueue 輸出，引擎不依賴第三方音訊函式庫。目前透過程式碼控制播放，尚無完整播放器介面。',
 '一個把便條貼在真實表面、並在之後恢復的 AR 原型。透過世界地圖重新定位、GPS 與朝向備援，以及表面吸附，讓數位便條留在原處。'
 ],projectKinds:["已上線 / 行動端與 AI","已上線 / 小工具與同步","已上線 / 端側機器學習",'工具 / 遊戲系統','音樂 / 互動','音訊 / 工程','空間 / 原型']
};
const ja:Messages={
 sceneLabel:'空の色',sceneTimeLabel:'時間帯を選ぶ',sceneAuto:'現地時刻',sceneMorning:'朝',sceneDay:'昼',sceneDusk:'夕暮れ',sceneNight:'夜',
 heroCurrent:"Ancher でモバイルと AI エージェントを開発",shippedProducts:"リリースした製品",openSourceWork:"オープンソースと実験",workCategories:"作品のカテゴリー",productWebsite:"製品サイトを見る",
 paperCollection:'雑談の新聞コレクション',browsePapers:'左右にめくって、気になる一枚を。',previousPaper:'前の新聞',nextPaper:'次の新聞',
 pageTitle:'Young — 海辺のアトリエ',studio:' のアトリエ',skip:'プロジェクトへ',navigation:'メインナビゲーション',collection:'コレクション',journal:'雑談',music:'音楽',about:'自己紹介',language:'言語',
 heroEyebrow:"ソフトウェアエンジニア / MOBILE · WEB · AI",heroFirst:"こんにちは、",heroSecond:'',heroAccent:"Young.",heroDescription:"コンシューマー向けアプリとバックエンドをつくって9年。ネイティブ iOS からフルスタックへ。今は AI エージェントにも取り組んでいます。",comeIn:"つくったものを見る",listeningDesk:'リスニングデスク',inPlayer:'プレーヤーの中には',pace:'自分のペースで、ゆっくりと。',scrollDesk:'デスクへ',roomBy:'YOUNG / BETTTER の小さな部屋',
 ready:'ディスク準備完了',changing:'ディスク交換中',readingDisc:'ディスク読込中',track:'曲目',previous:'前のプロジェクト',next:'次のプロジェクト',loadedDisc:'セット中のディスク',
 collectionEyebrow:'01 / ディスクの棚',collectionFirst:"使われるものを。",collectionSecond:"好奇心も、そのままに。",collectionDescription:"リリースした製品と、オープンソースの取り組み。\nモバイル、Web、AI。アイデアから届けるところまで。",chooseDisc:'一枚選んで、中をのぞいてみてください。',projectCollection:'プロジェクト一覧',load:'セットする',loaded:'セット中',linerNotes:'ライナーノーツ',exploreGithub:'GitHub で見る',liveProject:'ブラウザーで試す',personalCollection:'個人コレクション',discs:'枚のディスク',restGithub:'ほかのプロジェクトは GitHub へ',
 musicEyebrow:'この部屋から、もうひとつ / 音楽',musicFirst:'日が暮れたら、',musicSecond:'別の周波数へ。',musicDescription:'この部屋には、音楽もあります。\nYoung CRT。コレクションの、もうひとつの顔。',listenSpotify:'Spotify で聴く',artistSpotify:'SPOTIFY アーティストページ',posterAlt:'Young CRT — Lofi / Synthwave：ピンクの夕焼け、紫の空、宇宙飛行士とレトロな車。',
 notesEyebrow:'02 / テーブルの上の新聞',notesFirst:'いくつかの言葉を、',notesSecond:'紙に残して。',notesDescription:'思いつき、観察、まだ途中の考え。\nこの部屋から、ときどき届く一ページ。',read:'読む',paperBrand:'雑談',notesCategory:'随筆 · 考えと観察',unfold:'広げて読む',keepingFirst:'残しておきたい',keepingSecond:'ものがある。',notebook:'開いたノート。\n一ページずつ。',closeNote:'記事を閉じる',close:'閉じる',originalArchive:'元の記事',originalLanguage:'原文 · 中国語',readerFooter:'アトリエにしまって、またいつか。',
 aboutEyebrow:"03 / 仕事の進め方",aboutFirst:"届けるものを理解し、",aboutSecond:"一行ずつ読む。",aboutIntro:"仕様と設計を書き、コーディングエージェントと実装し、マージ前にすべてのコードを読みます。",aboutBody:"説明できないものはリリースしません。コード以外では、遊戯王、NBA、ジムが好きです。",findGithub:'GitHub でつながる',listenArtist:'Spotify で Young CRT を聴く',browseArchive:'以前の雑談アーカイブを見る',littleRoom:'インターネットの片隅の、小さな部屋。',backWindow:'窓辺に戻る',
 projectDescriptions:[
 "AI ナレッジワークスペース。モバイル開発を担当し、MCP サーバー、検索、回答品質の評価など、エージェント側にも取り組んでいます。",
 "インタラクティブウィジェットを中心としたプランニングアプリ。同時書き込みでもアプリとウィジェットの整合性を保つ同期エンジンを実装しました。",
 "自分で学習させた端末内モデルを Core ML に変換。完全オフラインで 60 FPS 動作します。",
 'カード検索、デッキ検証、初手の確率計算、そして実際のルールエンジンによる展開ルート探索。AI アシスタントが記憶に頼らず、正確なデータを使えるようにするツールです。',
 'Live2D キャラクター、ビートに合わせた映像、編集できる歌詞、テンポへの適応を備えた iOS のボーカルキーボード。タッチが小さな演奏になります。',
 'Core Audio を直接使ったストリーミング音声エンジン。解析、パケットバッファー、AudioQueue 出力を実装し、エンジン内に外部の音声ライブラリーを使いません。現在はコードから再生を操作し、完成したプレーヤー画面はありません。',
 '現実の表面にメモを置き、後で同じ場所に復元する AR プロトタイプ。ワールドマップによる再ローカライズ、GPS と方位による補完、表面への吸着を組み合わせています。'
 ],projectKinds:["製品 / モバイルと AI","製品 / ウィジェットと同期","製品 / オンデバイス ML",'ツール / ゲームシステム','音楽 / インタラクション','音声 / エンジニアリング','空間 / プロトタイプ']
};
export const messages:Record<Locale,Messages>={en,'zh-Hans':zhHans,'zh-Hant':zhHant,ja};
