(()=>{var e={};e.id=86,e.ids=[86],e.modules={131:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(687),i=r(3210),s=r(474),a=r(5814),o=r.n(a);let l={src:"/_next/static/media/logo.72116d1a.png",height:87,width:810,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEX///////9VfPVsAAAAAnRSTlMYDhMweGYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BkYGBkYGBgAAAAFgAD2SryXwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1};var d=r(6233);function c({scrollContainerRef:e,onHeightChange:t,fixedColor:r}){let[a,c]=(0,i.useState)(!1),[u,h]=(0,i.useState)(!1),f=(0,i.useRef)(null);return(0,n.jsxs)("nav",{ref:f,className:`relative fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${a?"bg-[#001f3f]":"bg-transparent"}`,style:{backgroundColor:r||(a?"#001f3f":"transparent")},children:[(0,n.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)(s.default,{src:l,alt:"Newspaper Icon",width:240,height:100,loader:d.A})})}),(0,n.jsxs)("div",{className:"hidden md:flex space-x-4",children:[(0,n.jsx)(o(),{href:"/",className:"block text-white hover:underline",children:"首頁"}),(0,n.jsx)(o(),{href:"/about",className:"text-white hover:underline",children:"關於我們"}),(0,n.jsx)(o(),{href:"/news",className:"text-white hover:underline",children:"新聞"})]}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{onClick:()=>{h(e=>!e)},className:"text-white focus:outline-none",children:u?"✖️":"☰"})})]})}),u&&(0,n.jsx)("div",{className:"md:hidden bg-[#001f3f]",children:(0,n.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[(0,n.jsx)(o(),{href:"/",className:"block text-white hover:underline",children:"首頁"}),(0,n.jsx)(o(),{href:"/about",className:"block text-white hover:underline",children:"關於我們"}),(0,n.jsx)(o(),{href:"/contact",className:"block text-white hover:underline",children:"聯絡我們"})]})})]})}function u({children:e}){let t=(0,i.useRef)(null),[r,s]=(0,i.useState)(0);return(0,n.jsxs)("div",{ref:t,className:"h-screen overflow-y-scroll snap-y snap-mandatory",style:{scrollPaddingTop:`${r}px`},children:[(0,n.jsx)(c,{scrollContainerRef:t,onHeightChange:e=>{s(e)}}),e]})}},301:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(687),i=r(3210),s=r(6217),a=r(474),o=r(6233);let l=({id:e})=>{let t=(0,i.useRef)(null),r=s.find(t=>t.id===parseInt(e,10));return((0,i.useEffect)(()=>{console.log("newsItem.imageUrl:",r?.imageUrl)},[r]),r)?(0,n.jsx)("div",{ref:t,className:"bg-white min-h-screen overflow-y-scroll snap-y snap-mandatory",children:(0,n.jsxs)("section",{className:"bg-white min-h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center",children:[(0,n.jsxs)("div",{style:{margin:"0 auto",textAlign:"left",width:"75%",paddingTop:"3%"},children:[(0,n.jsx)("h1",{className:"text-gray-800 text-3xl font-bold",children:r.title}),(0,n.jsx)("p",{className:"text-gray-800 text-sm",style:{paddingTop:"2%"},children:r.date})]}),(0,n.jsx)("div",{className:"text-gray-800 mt-4",style:{margin:"0 auto",textAlign:"center",width:"75%",marginTop:"20px"},children:(0,n.jsx)(a.default,{style:{margin:"0 auto",width:"100%",marginTop:"20px"},unoptimized:!0,src:r.imageUrl,alt:r.title,width:800,height:400,loader:o.A})}),(0,n.jsxs)("div",{className:"text-xl font-bold",style:{margin:"0 auto",textAlign:"left",width:"75%"},children:[r.description.map((e,t)=>(0,n.jsx)("div",{className:"text-gray-800 text-md font-normal leading-relaxed mt-6",children:e.split("\n").map((e,t)=>(0,n.jsx)("p",{className:"mb-4",children:e},t))},t)),r.subtitle.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-gray-800 text-2xl mt-6 font-bold",children:e}),r.texts[t]&&(0,n.jsx)("p",{className:"text-gray-800 text-md font-normal leading-relaxed mt-6",children:r.texts[t].split("\n").map((e,t)=>(0,n.jsxs)("span",{children:[e,(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]},t))})]},t))]})]})}):(0,n.jsx)("div",{children:"新聞未找到"})}},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1060:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6346,23)),Promise.resolve().then(r.t.bind(r,7924,23)),Promise.resolve().then(r.t.bind(r,5656,23)),Promise.resolve().then(r.t.bind(r,99,23)),Promise.resolve().then(r.t.bind(r,8243,23)),Promise.resolve().then(r.t.bind(r,8827,23)),Promise.resolve().then(r.t.bind(r,2763,23)),Promise.resolve().then(r.t.bind(r,7173,23))},1354:(e,t,r)=>{Promise.resolve().then(r.bind(r,301))},2704:()=>{},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3202:(e,t,r)=>{Promise.resolve().then(r.bind(r,7095))},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4227:(e,t,r)=>{Promise.resolve().then(r.bind(r,9420))},6055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(1658);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},6217:e=>{"use strict";e.exports=JSON.parse('[{"id":1,"date":"2130 年 5 月 12 日 11:48 【品牌特稿】","title":"Current Effect 慶祝創立百年：從 Exhibit O-o 到人類文明的永續繁榮","description":["在今日隆重舉行的全球直播典禮中，Current Effect 慶祝其創立一百週年，回顧其自 2030 年在潮間帶發現革命性遺傳因子 Exhibit O 以來，如何一步步成為人類文明史上的轉捩點。來自世界各地的政府領袖、科學家、企業家與民眾齊聚虛擬實境平台，共襄盛舉這場被譽為「新時代奠基者」的科技巨擘的百年盛典。"],"subtitle":["Exhibit O：從海岸邊的發現，到全球生命的轉捩點","超越醫療的影響力：Tidal-A 與生物美學的新時代","一百年之後：Current Effect 的下一步是什麼？"],"texts":["Current Effect 的故事始於一個看似偶然的發現。2030 年，數名海洋生物學家於東亞一處潮間帶採樣時，意外取得一種未知海洋微生物樣本，其內含一種被命名為「Exhibit O」的生物因子。這項發現最初僅被視為罕見的遺傳現象，然而王凱麗和她所領導的研究團隊很快洞察到 Exhibit O 在細胞再生與老化控制方面潛藏的巨大潛力。\\n經過長達十年的倫理審查與多國臨床實驗，Current Effect 於 2042 年推出全球首款具延緩老化與修復基因缺陷的疫苗 —— Exhibit O-o-A。該疫苗的問世不僅改變了醫學界對於「自然壽命」的定義，也徹底顛覆了全球保健與社會體制的根基。\\n截至今日，全球已有 85% 的人口接種過 Exhibit O-o-A，該疫苗也成為聯合國訂立的人權基本保障之一，象徵著科技平權的核心價值。","Current Effect 並未止步於健康領域。在 2050 年代，該公司推出了 Tidal-A 系列療程，結合深層細胞塑型與個人化生化調整技術，引領美容與自我優化的嶄新潮流。從基因層次上重新定義「美」的概念，Tidal-A 不僅成為時尚界的新標準，更深刻影響了當代對自我認同與人類形象的文化思維。\\n該療程目前已在 126 個國家設立專屬中心，被視為當代最重要的個人福祉科技之一。從重建戰後傷患的容貌，到協助跨性別者進行更自然的身體調整，Tidal-A 的應用層面持續拓展。","在慶典的尾聲，王凱麗揭露了下一個百年的新計畫：「Project Echelon」。據初步透露，該計畫將著眼於進一步拓展人類神經與量子意識的整合，希望在人類與人工智慧的共生邊界上，開創全新的感知形式與智慧結構。「如果說過去百年是關於延伸生命，那麼接下來的百年，我們將探索意識的可能性。」王凱麗表示。"],"imageUrl":"/news1.png"},{"id":2,"date":"2130 年 7 月 20 日 13:12 【品牌動態】","title":"Current Effect 公布「潮間帶計畫」：探索生態科技的終極潛能","description":["繼百週年盛典之後，全球生態科技領導品牌 Current Effect 今日正式對外公布其下一階段旗艦研究專案──「潮間帶計畫」（Intertidal Project）。這項新計畫將 Exhibit O 的應用層次推向全新高度，致力於整合自我修復基因技術、神經網絡接合與生態系統協同演化，為未來人類打造更具適應性與環境共鳴能力的生命模型。\\n在今日的全息記者會中，創辦人 王凱麗 再次發表具前瞻性的演說：「我們的科技來自潮間帶，而我們的未來也將以潮間帶為名。這片界限模糊、潮起潮落的地形，讓我們學會了如何在變化中求生、創造與繁榮。」","王凱麗的發言強調：「我們的技術來自潮間帶，而我們的未來也將以潮間帶為名。這片界限模糊的土地教會我們如何在變化中求生、創造與繁榮。」","「潮間帶計畫」預計將引入最新的 神經網絡接合技術與自我修復基因技術，目標是為所有人類提供 更健康、更適應環境變化的身體。"],"subtitle":["從 Exhibit O 出發，再一次回到源頭","不只是延壽，而是進化","企業願景升級：從「延展生命」到「重構存在」"],"texts":["「潮間帶計畫」象徵著 Current Effect 的一次關鍵回歸與進化。2030 年，正是在一處潮間帶環境中發現的 Exhibit O 微生物，開啟了延緩衰老、促進細胞自我修復等一系列醫療科技革命。百年之後，Current Effect 再次將目光投向生態邊界地帶，試圖以 Exhibit O 為媒介，促成人類與自然界的更深層整合。\\n據官方公布，「潮間帶計畫」第一階段將專注於開發具環境感知能力的 神經網絡接合技術（Neural Mesh Integration），使個體的生理狀態能與氣候、氣壓、甚至土壤微生物群落進行即時回應。第二階段則將導入升級版的 自我修復基因架構（Adaptive Self-Repair Genome），進一步提升身體在極端氣候下的再生與調節能力。","Current Effect 科技長 Livia Haroun 在受訪時表示：「這並非只是單向地提升人類生理，而是重建一種與自然『互相理解』的能力。未來人類將不再僅僅是環境的使用者，而是共構者、調和者。」\\n據內部文件，「潮間帶計畫」也將與多國政府與研究機構展開合作，首波試點預計將於太平洋生物邊界保護區、北極生態監測站與東南亞紅樹林區同步啟動。\\n目前已有包括環境人類學者、氣候建築師、生物神經學者等數百位專家加入計畫，形成橫跨科學、人文與社會系統的跨界聯盟，為未來百年生活型態的共生模型提供設計藍圖。","從 Exhibit O-o-A 長壽疫苗到 Tidal-A 的細胞美學調整，Current Effect 長期以來扮演著「科技造福人類」的關鍵角色。如今，透過「潮間帶計畫」，企業願景也進一步升級：不再僅僅聚焦於人體自身的延展，而是從根本上重新定義「人在自然中的位置」。\\n「這項計畫不只是技術挑戰，它是文明方向的一次提問。」王凱麗如此總結：「在這個氣候與科技同步劇烈變動的年代，Current Effect 將持續探索人類如何與世界共生——在自然的邊界上，不斷重新想像自己。」"],"imageUrl":"/news2.png"},{"id":3,"date":"2130 年 9 月 3 日 15:20 【品牌新聞室】","title":"Current Effect 發表聲明：回應 U Foundation 的反對運動","description":["在過去數週，全球多地掀起一波由 U Foundation 發起的「返璞歸真」（Back to Stone）運動，針對 Current Effect 的核心技術與產業模式提出質疑與反對。作為全球生態科技與延壽醫療的領導者，Current Effect 於今日正式回應此運動，重申企業對於安全性、可近性與社會平等的長期承諾。\\nU Foundation 在其公開聲明中表示，Exhibit O-o-A 長壽疫苗在部分基因群體中引發了「嚴重智能退化與身體畸形」，同時質疑該項技術在全球的推行導致資源分配不均與社會階級固化。他們指出，越來越多的延壽科技資源集中於財富與權力階層，使一般民眾難以平等受益。對此，Current Effect 發布聲明指出：「我們從未忽視任何一位使用者的健康與安全。我們理解這些聲音的出現來自於對未來科技發展的深刻焦慮，也正因此，我們願意打開對話，回應關切，並進一步強化我們的監測與改善機制。」\\n聲明進一步指出，Exhibit O-o-A 自 2032 年首次臨床實施以來，歷經超過百萬人次的多族群測試，並在過去一個世紀中進行了超過 42 次重大版本調整。針對所謂「基因不適應群體」的風險反應，公司已於本年度 4 月完成新一代基因接合過濾系統（GJ-9），將副作用發生率控制在千萬分之一以下。此外，Current Effect 亦再次強調其「地球平權計畫」（Planet Equity Initiative），這是一項自 2105 年起推動的全球科技共享政策，旨在透過地區補助、技術開放與基因適應升級，使所有階層的人口皆能平等獲得 Exhibit 系列產品與 Tidal-A 療程。據官方數據，目前全球 85% 的人口已完成 Exhibit O-o-A 系列接種，其中逾 60% 來自中低經濟水平區域。\\n儘管如此，U Foundation 的抗議活動仍持續擴大，涵蓋歐亞多國與北非沿岸，部分城市爆發零星衝突事件。目前尚無重大傷亡通報。針對示威浪潮，Current Effect 表示將尊重所有和平抗議的權利，並呼籲各界在理性討論與公開科學數據的基礎上，共同思考人類未來的技術與倫理方向。\\n聲明最後由創辦人王凱麗親自發表簡短談話：「我們不能只問科技能做什麼，更要問它應該為誰服務。我們創立 Current Effect，不是為了製造菁英，而是為了延續每一個人的未來。我們的承諾，從來不只是科技，更是信任。」"],"subtitle":[],"texts":[],"imageUrl":"/news3.png"}]')},6233:(e,t,r)=>{"use strict";function n({src:e}){return`https://averybigwhale.github.io/currenteffect${e}`}r.d(t,{A:()=>n})},7095:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/koikbing/Desktop/arg-web/currenteffect/components/NewsDetail.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/koikbing/Desktop/arg-web/currenteffect/components/NewsDetail.tsx","default")},7414:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var n=r(5239),i=r(8088),s=r(8170),a=r.n(s),o=r(893),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d={children:["",{children:["news",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7981)),"/Users/koikbing/Desktop/arg-web/currenteffect/app/news/[id]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8014)),"/Users/koikbing/Desktop/arg-web/currenteffect/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["/Users/koikbing/Desktop/arg-web/currenteffect/app/news/[id]/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/news/[id]/page",pathname:"/news/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7908:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6444,23)),Promise.resolve().then(r.t.bind(r,6042,23)),Promise.resolve().then(r.t.bind(r,8170,23)),Promise.resolve().then(r.t.bind(r,9477,23)),Promise.resolve().then(r.t.bind(r,9345,23)),Promise.resolve().then(r.t.bind(r,2089,23)),Promise.resolve().then(r.t.bind(r,6577,23)),Promise.resolve().then(r.t.bind(r,1307,23))},7981:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,generateStaticParams:()=>c});var n=r(7413),i=r(7095);let s=require("fs");var a=r.n(s),o=r(3873),l=r.n(o);let d=()=>{let e=l().join(process.cwd(),"app/news/newsData.json");return JSON.parse(a().readFileSync(e,"utf-8"))};function c(){return d().map(e=>({id:e.id.toString()}))}async function u(e){let t=await e.params,r=d(),s=parseInt(t.id,10);return r.find(e=>e.id===s)?(0,n.jsx)(i.default,{id:t.id}):(0,n.jsx)("div",{children:"找不到資料"})}},8014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>s});var n=r(7413);r(2704);var i=r(9420);let s={title:"Current Effect",icons:{icon:"../public/web-logo.png"}};function a({children:e}){return(0,n.jsx)("html",{lang:"zh-TW",children:(0,n.jsxs)("body",{children:[(0,n.jsx)(i.default,{children:e}),(0,n.jsx)("footer",{className:"bg-gray-800 text-intertidalLightMain py-6 text-center mt-0",children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)("h3",{className:"text-normal font-normal",children:"\xa9 Current Effect 2130, all rights reserved."})})})]})})}},8400:(e,t,r)=>{Promise.resolve().then(r.bind(r,131))},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9420:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/koikbing/Desktop/arg-web/currenteffect/app/HomeClient.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/koikbing/Desktop/arg-web/currenteffect/app/HomeClient.tsx","default")},9551:e=>{"use strict";e.exports=require("url")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[447,771,658],()=>r(7414));module.exports=n})();