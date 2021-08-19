import{r as t,o as e,c as s,a as n,w as o,b as r,D as a,d as l,e as i,f as c,u as d,g as u,h as p,i as h,j as m,k as g,l as f,m as v,n as b,p as w,v as x,q as y,s as k,F as _,t as S,T as M,x as j,y as C,z as R,A as T,B as O,C as $,E as A,G as E,H as L,I as z,V as P}from"./vendor.8173c927.js";const D={},G={class:"bg-discord-blurple-560"},W={class:"max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200"},N=r("discord-moderation"),I=n("p",{class:"mb-4"},"Module that will simplify creating Moderation system for your Bot",-1);D.render=function(r,a){const l=t("router-link");return e(),s("footer",G,[n("div",W,[n("strong",null,[n(l,{to:"/"},{default:o((()=>[N])),_:1})]),I])])};const U=t=>{if(!t.ok)throw new Error("Failed to fetch docs data file from GitHub");return t.json()};const J=new Set(["docs"]);var B=new class{constructor(t){var e,s,n,o,r;this.options=t,this.id=this.options.id,this.name=this.options.name,this.repo=this.options.repo,this.defaultTag=null!=(e=this.options.defaultTag)?e:"main",this.defaultFile=null!=(s=this.options.defaultFile)?s:{category:"general",id:"welcome"},this.source=null!=(n=this.options.source)?n:`https://github.com/${this.repo}/blob/`,this.branchFilter=null!=(o=this.options.branchFilter)?o:t=>"main"!==t,this.tagFilter=null!=(r=this.options.tagFilter)?r:()=>!0,this.tags=null,this.recentTag=null}fetchTags(){return this.tags?Promise.resolve(this.tags):Promise.all([fetch(`https://api.github.com/repos/${this.repo}/branches`).then(U),fetch(`https://api.github.com/repos/${this.repo}/tags`).then(U)]).catch((t=>{if(localStorage[`source-${this.id}`]){console.error(t);const e=JSON.parse(localStorage[`source-${this.id}`]);return[e.branches,e.tags]}throw t})).then((t=>{const[e,s]=t;this.tags=[this.defaultTag],localStorage[`source-${this.id}`]=JSON.stringify({branches:e,tags:s});for(const o of e)o.name!==this.defaultTag&&this.branchFilter(o.name)&&this.tags.push(o.name);const n={};for(const o of s)if(a.valid(o.name)){const t=`${a.major(o.name)}.${a.minor(o.name)}`,e=a.patch(o.name);if(e<n[t])continue;n[t]=e}for(const o of s)if(o.name!==this.defaultTag&&this.tagFilter(o.name)){if(a.valid(o.name)){const t=`${a.major(o.name)}.${a.minor(o.name)}`;if(a.patch(o.name)<n[t])continue}this.tags.push(o.name)}return this.tags}))}async fetchDocs(t){const e=await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${t}.json`);return U(e)}}({id:"main",name:"DM",repo:"discord-moderation/source",defaultTag:"stable",branchFilter:t=>!J.has(t)&&!t.startsWith("dependabot/"),tagFilter:t=>a.gte(t,"9.0.0")});const F=l(!1);class V{constructor(t,e){this.name=t.toLowerCase(),this.related=new Set([e])}addRelated(t){this.related.add(t)}matches(t){return t.includes(this.name)}}var Y,H;(H=Y||(Y={}))[H.Class=0]="Class",H[H.Method=1]="Method",H[H.Property=2]="Property",H[H.Events=3]="Events",H[H.Typedefs=4]="Typedefs";class Z{constructor(t,e,s,n,o,r){switch(this.name=t,this.type=e,this.parentName=s,this.parentType=n,this.access=o,this.scope=r,e){case 0:case 4:this.computedName=t;break;case 1:this.computedName=`${null!=s?s:""}.${t}()`;break;case 2:this.computedName=`${null!=s?s:""}.${t}`;break;case 3:this.computedName=`${null!=s?s:""}#${t}`}this.nameLowerCase=t.toLowerCase(),this.cleanedComputedName=this.computedName.replace(/[().#]/,"").toLowerCase()}get isPriority(){return 0===this.type||4===this.type}getLinkPath(){var t,e;if(4===this.type||4===this.parentType)return{name:"docs-source-tag-typedef-typedef",params:{typedef:null!=(t=this.parentName)?t:this.name}};const s={name:"docs-source-tag-class-class",params:{class:null!=(e=this.parentName)?e:this.name}};return 1!==this.type&&2!==this.type||(s.query={scrollTo:this.name}),3===this.type&&(s.query={scrollTo:`e-${this.name}`}),s}}const q=i((()=>et.state.searchIndex)),K=i((()=>et.state.searchRef));function Q(t){const e=t.replace(/[\s().#]/g,"").toLowerCase();if(""===e)return[];let s=q.value.reduce(((t,s)=>{if(e.includes(s.name))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map);0===s.size&&e.length<10&&(s=q.value.reduce(((t,s)=>{if(s.name.includes(e))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map));return Array.from(s.entries()).map((([t,e])=>[K.value[t],e])).filter((([t])=>"private"!==t.access||F.value)).sort((([t,s],[n,o])=>{let r=0;return t.nameLowerCase===e?r+=t.isPriority?-10:-4:n.nameLowerCase===e&&(r+=n.isPriority?10:4),e.length>=7&&(t.cleanedComputedName.includes(e)&&(r-=30),n.cleanedComputedName.includes(e)&&(r+=30)),s.numMatches===o.numMatches&&(t.isPriority&&(r-=6),n.isPriority&&(r+=6),s.numMatches>1&&(r+=Math.abs(e.length-t.computedName.length)-Math.abs(e.length-n.computedName.length)),r+=o.lengthMatches-s.lengthMatches),o.numMatches-s.numMatches+r})).map((([t,e])=>t))}const X=l(null),tt=Symbol("docs"),et=c({state:{sources:[{source:B,name:B.name,id:B.id}],source:B,tag:B.defaultTag,docs:null,branches:[],file:null,stats:{downloads:`${(0).toLocaleString()}+`,stars:`${(0).toLocaleString()}+`,contributors:`${(0).toLocaleString()}+`},searchIndex:[],searchRef:[]},mutations:{setSource(t,{source:e}){t.source=e},setTag(t,{tag:e}){t.tag=e},setDocs(t,{docs:e}){t.docs=e},setBranches(t,{branches:e}){t.branches=e},setFile(t,{file:e}){t.file=e},setStats(t,{stats:e}){t.stats=e},setSearchIndex(t,{searchIndex:e,searchRef:s}){t.searchIndex=e,t.searchRef=s}},actions:{fetchStats:async({commit:t})=>{let e=0,s=0,n=0;const o=t=>t.json(),r=()=>{},[a,l,i]=await Promise.all([fetch("https://api.npmjs.org/downloads/range/2021-06-27:2100-08-21/discord-moderation").then(o,r),fetch("https://api.github.com/repos/bad-boy-discord/discord-moderation").then(o,r),fetch("https://api.github.com/repos/bad-boy-discord/discord-moderation/stats/contributors").then(o,r)]);if(a){e=0;for(const t of a.downloads)e+=t.downloads}l&&(s=l.stargazers_count),i&&(n=i.length),t({type:"setStats",stats:{downloads:`${e.toLocaleString()}`,stars:`${s.toLocaleString()}`,contributors:`${n.toLocaleString()}`}})},fetchDocs:async({commit:t},{inputSource:e,inputTag:s=e.defaultTag})=>{var n,o,r,a;let l;try{l=await e.fetchDocs(s)}catch(p){return t({type:"setDocs",docs:null}),t({type:"setTag",docs:null}),void(X.value=p)}const i=[],c=[];let d=0;const u=(t,e,s,n,o,r)=>{const a=function(t){var e,s;return/^[_A-Z]+$/.test(t)?null!=(e=t.match(/[A-Z]+/g))?e:[]:null!=(s=t.match(/(([A-Z]{2,})(?=[A-Z]))|[A-Z][a-z]+|[a-z]+/g))?s:[]}(t),l=new Z(t,e,s,n,o,r);i.push(l);const u=[];for(const i of a){const t=i.toLowerCase();let e=c.findIndex((e=>e.name===t));e>-1?c[e].addRelated(d):e=c.push(new V(t,d))-1,u.push(e)}return d+=1,u};for(const h of l.classes){const t=u(h.name,Y.Class,void 0,void 0,h.access,h.scope),e=[];for(const s of null!=(n=h.methods)?n:[])u(s.name,Y.Method,h.name,Y.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(o=h.props)?o:[])u(s.name,Y.Property,h.name,Y.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(r=h.events)?r:[])u(s.name,Y.Events,h.name,Y.Class,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}for(const h of l.typedefs){const t=u(h.name,Y.Typedefs,void 0,void 0,h.access,h.scope),e=[];for(const s of null!=(a=h.props)?a:[])u(s.name,Y.Property,h.name,Y.Typedefs,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}t({type:"setSearchIndex",searchIndex:c,searchRef:i}),l.classes.sort(((t,e)=>t.name.localeCompare(e.name))),l.typedefs.sort(((t,e)=>t.name.localeCompare(e.name)));for(const h of l.classes)h.props&&h.props.sort(((t,e)=>t.name.localeCompare(e.name))),h.methods&&h.methods.sort(((t,e)=>t.name.localeCompare(e.name))),h.events&&h.events.sort(((t,e)=>t.name.localeCompare(e.name)));l.links={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",symbol:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",void:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Set:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",RegExp:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",Error:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",Buffer:"https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",ReadableStream:"https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",ChildProcess:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",Worker:"https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",MessagePort:"https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",ytdl:"https://github.com/fent/node-ytdl-core/blob/master/typings/index.d.ts",Collection:"https://discord.js.org/#/docs/collection/master/class/Collection",Client:"https://discord.js.org/#/docs/main/master/class/Client",Message:"https://discord.js.org/#/docs/main/master/class/Message",GuildMember:"https://discord.js.org/#/docs/main/master/class/GuildMember",User:"https://discord.js.org/#/docs/main/master/class/User",VoiceConnection:"https://discord.js.org/#/docs/main/master/class/VoiceConnection",StreamDispatcher:"https://discord.js.org/#/docs/main/master/class/StreamDispatcher",TextChannel:"https://discord.js.org/#/docs/main/master/class/TextChannel",VoiceChannel:"https://discord.js.org/#/docs/main/master/class/VoiceChannel",Snowflake:"https://discord.js.org/#/docs/main/master/typedef/Snowflake",StageChannel:"https://discord.js.org/#/docs/main/master/class/StageChannel",VoiceState:"https://discord.js.org/#/docs/main/master/class/VoiceState",Interaction:"https://discord.js.org/#/docs/main/master/class/Interaction"},l.externals=l.externals||[],l.classes=l.classes||[],l.typedefs=l.typedefs||[];for(const h of l.externals)l.links[h.name]=h.see[0].replace(/\{@link\s+(.+?)\s*\}/i,"$1");for(const h of l.classes)l.links[h.name]={name:"docs-source-tag-class-class",params:{class:h.name}};for(const h of l.typedefs)l.links[h.name]={name:"docs-source-tag-typedef-typedef",params:{typedef:h.name}};"commando"===e.id&&(l.links.Message={name:"docs-source-tag-class-class",params:{source:"main",tag:"master",class:"Message"}}),l.source=e.source,l.id=e.id,l.tag=s,t({type:"setDocs",docs:l})},fetchTags:async({commit:t},{currentSource:e})=>{t({type:"setBranches",branches:await e.fetchTags()})}}});function st(){return d(tt)}const nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ot=n("g",{fill:"none"},[n("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var rt={name:"heroicons-outline-external-link",render:function(t,n){return e(),s("svg",nt,[ot])}};const at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},lt=n("g",{fill:"none"},[n("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var it={name:"heroicons-outline-sun",render:function(t,n){return e(),s("svg",at,[lt])}};const ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},dt=n("g",{fill:"none"},[n("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ut={name:"heroicons-outline-moon",render:function(t,n){return e(),s("svg",ct,[dt])}};const pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ht=n("g",{fill:"none"},[n("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var mt={name:"heroicons-outline-search",render:function(t,n){return e(),s("svg",pt,[ht])}};const gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ft=n("g",{fill:"none"},[n("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var vt={name:"heroicons-outline-arrow-right",render:function(t,n){return e(),s("svg",gt,[ft])}};const bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},wt=n("g",{fill:"none"},[n("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var xt={name:"heroicons-outline-menu",render:function(t,n){return e(),s("svg",bt,[wt])}};const yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},kt=n("g",{fill:"none"},[n("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var _t={name:"heroicons-outline-x",render:function(t,n){return e(),s("svg",yt,[kt])}};const St=u({storageKey:"theme"}),Mt=p(St),jt={class:"sticky top-0 z-20"},Ct={class:"bg-discord-blurple-560"},Rt={class:"max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8"},Tt={class:"hidden md:flex md:py-2 md:space-x-4 lg:space-x-8","aria-label":"Global navigation"},Ot=r(" discord-moderation "),$t=r(" Documentation "),At=n("span",{class:"mr-2"},"GitHub",-1),Et=n("span",{class:"mr-2"},"Support Server",-1),Lt={class:"relative h-16 flex md:max-w-md md:w-full lg:max-w-lg"},zt={class:"relative z-10 flex items-center md:hidden"},Pt={class:"relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end"},Dt=n("label",{for:"search",class:"sr-only"},"Search",-1),Gt={class:"relative"},Wt={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center","aria-hidden":"true"},Nt={class:"relative z-10 flex items-center md:hidden"},It=n("span",{class:"sr-only"},"Open menu",-1),Ut={key:0,id:"mobile-menu",class:"md:hidden","aria-label":"Global navigation"},Jt={class:"pt-2 pb-3 px-2 space-y-1"},Bt=r("discord-moderation"),Ft=r("Documentation"),Vt=n("span",{class:"mr-2"},"Github",-1),Yt=n("span",{class:"mr-2"},"Support Server",-1);var Ht=h({setup(a){const c=m(),d=g(),u=st(),p=j(C).greater("md"),h=l(!1),T=l(),O=l(""),$=l(!1),A=l(-1),E=i((()=>{var t;return null==(t=u.state.source)?void 0:t.repo})),L=i((()=>(A.value=-1,Q(O.value).slice(0,7)))),z=()=>{if(L.value.length)return $.value=!1,A.value>=0?(c.push(L.value[A.value].getLinkPath()),void(A.value=-1)):c.push({name:"docs-source-tag-search",query:{query:O.value}})},P=t=>{A.value+=1,A.value>Math.min(6,L.value.length-1)&&(A.value=0),t.preventDefault()},D=t=>{A.value-=1,A.value<0&&(A.value=Math.min(6,L.value.length-1)),t.preventDefault()},G=t=>{if(!t.target)return;const e=t.target.getAttribute("data-index");e&&(A.value=parseInt(e,10))};return f(p,(()=>h.value=!1)),v(T,(()=>{$.value=!1,A.value=-1})),(a,l)=>{const i=t("router-link"),c=rt,u=it,p=ut,m=mt,g=vt,f=xt,v=_t;return e(),s("div",jt,[n("header",Ct,[n("div",Rt,[n("nav",Tt,[n(i,{to:"/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-blurple-600"},{default:o((()=>[Ot])),_:1}),n(i,{to:"/docs",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-blurple-600"},{default:o((()=>[$t])),_:1}),n("a",{href:`https://github.com/${b(E)}`,class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[At,n(c,{class:"h-5 w-5"})],8,["href"]),n("a",{href:"https://discord.gg/invite/eGZfaWsZgR",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[Et,n(c,{class:"h-5 w-5"})],8,["href"])]),n("div",Lt,[n("div",zt,[n("button",{class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-discord-blurple-630\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(b(St)?"light theme":"dark theme"),onClick:l[1]||(l[1]=t=>b(Mt)())},[b(St)?(e(),s(p,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(e(),s(u,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"])]),n("div",Pt,[n("button",{class:"\n\t\t\t\t\t\t\t\thidden\n\t\t\t\t\t\t\t\tmd:block\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-1 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(b(St)?"light theme":"dark theme"),onClick:l[2]||(l[2]=t=>b(Mt)())},[b(St)?(e(),s(p,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(e(),s(u,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"]),"/"!==b(d).path?(e(),s("div",{key:0,ref:T,class:"w-full sm:max-w-lg lg:max-w-xs"},[Dt,n("div",Gt,[n("div",Wt,[n(m,{class:"h-5 w-5 text-gray-200"})]),w(n("input",{id:"search","onUpdate:modelValue":l[3]||(l[3]=t=>O.value=t),name:"search",class:"\n\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\tbg-discord-blurple-600\n\t\t\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\tpl-10\n\t\t\t\t\t\t\t\t\t\tpr-3\n\t\t\t\t\t\t\t\t\t\ttext-base text-white\n\t\t\t\t\t\t\t\t\t\tplaceholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\tfocus:text-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:placeholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:ring-2\n\t\t\t\t\t\t\t\t\t\tfocus:ring-inset\n\t\t\t\t\t\t\t\t\t\tfocus:ring-white\n\t\t\t\t\t\t\t\t\t\tlg:focus:ring-1\n\t\t\t\t\t\t\t\t\t",placeholder:"Search",type:"search",autocomplete:"off",autocapitalize:"off",autocorrect:"off",onFocus:l[4]||(l[4]=t=>$.value=!0),onInput:l[5]||(l[5]=t=>$.value=!0),onKeyup:y(z,["enter"]),onKeydown:[y(D,["up"]),y(P,["down"])]},null,40,["onKeyup","onKeydown"]),[[x,O.value]]),$.value&&O.value&&b(L).length?(e(),s("div",{key:0,class:"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center","aria-hidden":"true",onClick:z},[n(g,{class:"h-5 w-5 text-gray-200"})])):k("",!0),$.value&&O.value&&b(L).length?(e(),s("div",{key:1,class:"absolute mt-1 w-full break-words-legacy border bg-discord-blurple-600 rounded-md",onMouseover:G},[n("ul",null,[(e(!0),s(_,null,S(b(L),((t,a)=>(e(),s("li",{key:t.computedName,class:["\n\t\t\t\t\t\t\t\t\t\t\t\teven:bg-discord-blurple-560\n\t\t\t\t\t\t\t\t\t\t\t\tdark:even:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\tdark:hover:bg-discord-blurple-660\n\t\t\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\t\t\t\t",{"ring-1 ring-gray-200 even:bg-discord-blurple-630 dark:even:bg-discord-blurple-660 bg-discord-blurple-630 dark:bg-discord-blurple-660":a===A.value}]},[n(i,{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-3\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:rounded-md\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:focus-visible:bg-discord-blurple-660\n\t\t\t\t\t\t\t\t\t\t\t\t",exact:"",to:t.getLinkPath(),"data-index":a,onClick:l[6]||(l[6]=t=>$.value=!1)},{default:o((()=>[r(R(t.computedName),1)])),_:2},1032,["to","data-index"])],2)))),128))])],32)):k("",!0)])],512)):k("",!0)]),n("div",Nt,[n("button",{type:"button",class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-controls":"mobile-menu","aria-expanded":h.value,onClick:l[7]||(l[7]=t=>h.value=!h.value)},[It,n(f,{class:{hidden:h.value,block:!h.value},"aria-hidden":"true"},null,8,["class"]),n(v,{class:{block:h.value,hidden:!h.value},"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])]),n(M,{"enter-active-class":"transition transform-gpu duration-300 ease-out","enter-from-class":"translate-x-12 opacity-0","enter-to-class":"translate-x-0 opacity-100"},{default:o((()=>[h.value?(e(),s("nav",Ut,[n("div",Jt,[n(i,{to:"/",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:l[8]||(l[8]=t=>h.value=!h.value)},{default:o((()=>[Bt])),_:1}),n(i,{to:"/docs",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:l[9]||(l[9]=t=>h.value=!h.value)},{default:o((()=>[Ft])),_:1}),n("a",{href:`https://github.com/${b(E)}`,class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:l[10]||(l[10]=t=>h.value=!h.value)},[Vt,n(c,{class:"h-5 w-5 inline-block"})],8,["href"]),n("a",{href:"https://discord.gg/invite/eGZfaWsZgR",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:l[11]||(l[11]=t=>h.value=!h.value)},[Yt,n(c,{class:"h-5 w-5 inline-block"})],8,["href"])])])):k("",!0)])),_:1})])])}}});const Zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},qt=n("g",{fill:"none"},[n("path",{d:"M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Kt={name:"heroicons-outline-download",render:function(t,n){return e(),s("svg",Zt,[qt])}};function Qt(t={}){const{immediate:e=!0,onNeedRefresh:s,onOfflineReady:n}=t,o=l(!1),r=l(!1);return{updateServiceWorker:function(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:n}=t;let o;return"serviceWorker"in navigator&&(o=new T("/sw.js",{scope:"/"}),o.addEventListener("activated",(t=>{t.isUpdate?window.location.reload():null==n||n()})),o.register({immediate:e}).then((t=>t))),async(t=!0)=>{}}({immediate:e,onNeedRefresh(){o.value=!0,null==s||s()},onOfflineReady(){r.value=!0,null==n||n()}}),offlineReady:r,needRefresh:o}}const Xt={key:0,class:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"},te={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},ee={class:"p-2 rounded-lg bg-discord-blurple-600 dark:bg-discord-blurple-700 shadow-lg sm:p-3"},se={class:"flex items-center justify-between flex-wrap"},ne={class:"w-0 flex-1 flex items-center"},oe={class:"flex p-2 rounded-lg bg-discord-blurple-530 dark:bg-discord-blurple-630"},re={class:"ml-3 font-medium text-white truncate"},ae={class:"sm:hidden"},le={class:"hidden sm:inline"},ie={key:0,class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},ce={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-2"},de=n("span",{class:"sr-only"},"Dismiss",-1);var ue=h({setup(t){const{offlineReady:o,needRefresh:r,updateServiceWorker:a}=Qt(),l=()=>{o.value=!1,r.value=!1};return(t,i)=>{const c=Kt,d=_t;return b(o)||b(r)?(e(),s("div",Xt,[n("div",te,[n("div",ee,[n("div",se,[n("div",ne,[n("span",oe,[n(c,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})]),n("p",re,[n("span",ae,R(b(o)?"App ready to work offline.":"New content available."),1),n("span",le,R(b(o)?"App ready to work offline.":"New content available, click refresh to update."),1)])]),b(r)?(e(),s("div",ie,[n("button",{class:"\n\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\tfont-medium\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\tbg-discord-blurple-530\n\t\t\t\t\t\t\t\tdark:bg-discord-blurple-630\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-460\n\t\t\t\t\t\t\t\tdark:hover:bg-discord-blurple-600\n\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t",onClick:i[1]||(i[1]=t=>b(a)(!0))}," Refresh ")])):k("",!0),n("div",ce,[n("button",{type:"button",class:"-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",onClick:l},[de,n(d,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})])])])])])])):k("",!0)}}});const pe={class:"min-h-full grid grid-layout"},he={id:"container",class:"grid grid-layout-container lg:custom-scroll"},me={class:"bg-white dark:bg-[#1d1d1d]"};var ge=h({setup:o=>(st().dispatch("fetchStats"),(o,r)=>{const a=t("router-view"),l=D;return e(),s(_,null,[n("div",pe,[n(Ht),n("div",he,[n("div",me,[n(a)]),n(l)])]),n(ue)],64)})});let fe;const ve={},be=function(t,e){if(!e||0===e.length)return t();if(void 0===fe){const t=document.createElement("link").relList;fe=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if((t=`/${t}`)in ve)return;ve[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":fe,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e?new Promise(((t,e)=>{n.addEventListener("load",t),n.addEventListener("error",e)})):void 0}))).then((()=>t()))},we={},xe={src:"https://dm-docs-test.tk/static/logo.png"};we.render=function(t,n){return e(),s("img",xe)};const ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ke=n("g",{fill:"none"},[n("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var _e={name:"heroicons-outline-clipboard-copy",render:function(t,n){return e(),s("svg",ye,[ke])}};const Se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Me=n("g",{fill:"none"},[n("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var je={name:"heroicons-outline-clipboard-check",render:function(t,n){return e(),s("svg",Se,[Me])}};const Ce={class:"text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},Re=n("span",{class:"hover:text-white mr-2"},"npm install discord-moderation",-1);var Te=h({setup(t){const o=l(),r=l(!1),a=O((t=>{t(),r.value=!1}),1e3),{show:i,hide:c}=$(o,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),d=async()=>{try{await navigator.clipboard.writeText("npm install discord-moderation"),i()}catch{}r.value=!0,a(c)};return(t,a)=>{const l=_e,i=je;return e(),s("code",Ce,[Re,n("button",{ref:o,class:"focus:outline-none","aria-label":"Copy install command"},[r.value?(e(),s(i,{key:1,class:"inline-block fill-current text-discord-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:d})):(e(),s(l,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:d}))],512)])}}});const Oe=r(),$e=n("br",null,null,-1),Ae=r(),Ee=n("br",null,null,-1);var Le=h({setup(t){const o=st(),r=i((()=>o.state.stats.downloads)),a=i((()=>o.state.stats.stars)),l=i((()=>o.state.stats.contributors));return(t,o)=>(e(),s(_,null,[n("strong",null,"[👍] "+R(b(r))+" downloads",1),Oe,$e,n("strong",null,"[⭐] "+R(b(a))+" stars",1),Ae,Ee,n("strong",null,"[💻] "+R(b(l))+" contributors",1)],64))}});const ze={class:"bg-discord-blurple-500 py-20"},Pe={class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12"},De={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tlg:prose-lg\n\t\t\tpx-6\n\t\t\tmx-auto\n\t\t\tpb-8\n\t\t\tw-full\n\t\t\txl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl\n\t\t"},Ge=A("<div><h2>Why?</h2><span><strong>[🔑] Writen on TypeScript</strong></span> <br><span><strong>[⚙] 100% Promise-based</strong></span> <br><span><strong>[🙂] Built in Declarations</strong></span> <br><span><strong>[👍] Discord.JS v13</strong></span> <br></div>",1),We=n("h2",null,"Statistics",-1);const Ne=[{name:"index",path:"/",component:h({setup(t){const o=st();return i((()=>o.state.docs)).value||(o.dispatch("fetchDocs",{inputSource:B}),o.dispatch("fetchTags",{currentSource:B})),(t,o)=>(e(),s(_,null,[n("div",ze,[n("div",Pe,[n(we,{class:"filter drop-shadow-lg my-6"}),n(Te)])]),n("div",De,[Ge,n("div",null,[We,n(Le)])])],64))}}),props:!0},{path:"/docs",component:()=>be((()=>import("./docs.81c724a5.js")),["assets/docs.81c724a5.js","assets/docs.675be814.css","assets/vendor.8173c927.js","assets/chevron-down.55c750ef.js","assets/headlessui.esm.088c4b7e.js","assets/Spinner.1a18cfd3.js","assets/Spinner.af24072b.css"]),children:[{name:"docs-source",path:":source",component:()=>be((()=>import("./index.8c820ae0.js")),["assets/index.8c820ae0.js","assets/Spinner.1a18cfd3.js","assets/Spinner.af24072b.css","assets/vendor.8173c927.js"]),props:!0},{name:"docs-source-tag-search",path:":source/:tag/search",component:()=>be((()=>import("./search.8c7002a4.js")),["assets/search.8c7002a4.js","assets/search.055dc457.css","assets/vendor.8173c927.js"]),props:!0},{name:"docs-source-tag-class-class",path:":source/:tag/class/:class",component:()=>be((()=>import("./[class].1256c515.js")),["assets/[class].1256c515.js","assets/[class].32241939.css","assets/vendor.8173c927.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.71f1d935.js","assets/See.vue_vue&type=script&setup=true&lang.8a32d385.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/chevron-down.55c750ef.js","assets/headlessui.esm.088c4b7e.js"]),props:!0},{name:"docs-source-tag-typedef-typedef",path:":source/:tag/typedef/:typedef",component:()=>be((()=>import("./[typedef].34172b1e.js")),["assets/[typedef].34172b1e.js","assets/vendor.8173c927.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.71f1d935.js","assets/See.vue_vue&type=script&setup=true&lang.8a32d385.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/headlessui.esm.088c4b7e.js"]),props:!0},{name:"docs-source-tag-category-file",path:":source/:tag/:category/:file",component:()=>be((()=>import("./[file].05270e8b.js")),["assets/[file].05270e8b.js","assets/vendor.8173c927.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.71f1d935.js"]),props:!0}],props:!0},{name:"all",path:"/:all(.*)*",component:()=>be((()=>import("./[...all].8f4174ae.js")),["assets/[...all].8f4174ae.js","assets/vendor.8173c927.js"]),props:!0}];var Ie=E({history:L(),routes:Ne});const Ue=z(ge);Ue.use(et,tt),Ue.use(Ie),Ue.use(P),Ue.mount("#app");export{Y as D,B as M,_e as _,je as a,rt as b,X as f,F as i,Q as s,st as u};
