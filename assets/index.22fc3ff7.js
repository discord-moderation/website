import{s as t,r as e,c as s,a as n,u as o,d as r,o as a,b as l,e as i,t as c,f as d,g as u,w as p,h,i as m,j as g,k as f,l as b,m as v,n as w,p as x,q as y,v as k,x as _,y as S,z as M,F as j,A as R,T as C,B as O,C as z,D as T,E as $,G as A,H as W,I as E,V as L}from"./vendor.334b0b9f.js";const G=t=>{if(!t.ok)throw new Error("Failed to fetch docs data file from GitHub");return t.json()};const P=new Set(["docs","webpack","v8"]);var U=new class{constructor(t){var e,s,n,o,r;this.options=t,this.id=this.options.id,this.name=this.options.name,this.global=this.options.global,this.repo=this.options.repo,this.defaultTag=null!=(e=this.options.defaultTag)?e:"main",this.defaultFile=null!=(s=this.options.defaultFile)?s:{category:"general",id:"welcome"},this.source=null!=(n=this.options.source)?n:`https://github.com/${this.repo}/blob/`,this.branchFilter=null!=(o=this.options.branchFilter)?o:t=>"main"!==t,this.tagFilter=null!=(r=this.options.tagFilter)?r:()=>!0,this.tags=null,this.recentTag=null}fetchTags(){return this.tags?Promise.resolve(this.tags):Promise.all([fetch(`https://api.github.com/repos/${this.repo}/branches`).then(G),fetch(`https://api.github.com/repos/${this.repo}/tags`).then(G)]).catch((t=>{if(localStorage[`source-${this.id}`]){console.error(t);const e=JSON.parse(localStorage[`source-${this.id}`]);return[e.branches,e.tags]}throw t})).then((e=>{const[s,n]=e;this.tags=[this.defaultTag],localStorage[`source-${this.id}`]=JSON.stringify({branches:s,tags:n});for(const t of s)t.name!==this.defaultTag&&this.branchFilter(t.name)&&this.tags.push(t.name);const o={};for(const r of n)if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`,s=t.patch(r.name);if(s<o[e])continue;o[e]=s}for(const r of n)if(r.name!==this.defaultTag&&this.tagFilter(r.name)){if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`;if(t.patch(r.name)<o[e])continue}this.tags.push(r.name)}return this.tags}))}async fetchDocs(t){const e=await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${t}.json`);return G(e)}}({id:"main",name:"Main library",global:"",repo:"discord-moderation/source",defaultTag:"master",branchFilter:t=>!P.has(t)&&!t.startsWith("dependabot/"),tagFilter:e=>t.gte(e.replace(/^v/,""),"9.0.0")});const J=e(!1);class D{constructor(t,e){this.name=t.toLowerCase(),this.related=new Set([e])}addRelated(t){this.related.add(t)}matches(t){return t.includes(this.name)}}var N,I;(I=N||(N={}))[I.Class=0]="Class",I[I.Method=1]="Method",I[I.Property=2]="Property",I[I.Events=3]="Events",I[I.Typedefs=4]="Typedefs";class B{constructor(t,e,s,n,o,r){switch(this.name=t,this.type=e,this.parentName=s,this.parentType=n,this.access=o,this.scope=r,e){case 0:case 4:this.computedName=t;break;case 1:this.computedName=`${null!=s?s:""}.${t}()`;break;case 2:this.computedName=`${null!=s?s:""}.${t}`;break;case 3:this.computedName=`${null!=s?s:""}#${t}`}this.nameLowerCase=t.toLowerCase(),this.cleanedComputedName=this.computedName.replace(/[().#]/,"").toLowerCase()}get isPriority(){return 0===this.type||4===this.type}getLinkPath(){var t,e;if(4===this.type||4===this.parentType)return{name:"docs-source-tag-typedef-typedef",params:{typedef:null!=(t=this.parentName)?t:this.name}};const s={name:"docs-source-tag-class-class",params:{class:null!=(e=this.parentName)?e:this.name}};return 1!==this.type&&2!==this.type||(s.query={scrollTo:`${"static"===this.scope?"s-":""}${this.name}`}),3===this.type&&(s.query={scrollTo:`e-${this.name}`}),s}}const F=s((()=>K.state.searchIndex)),V=s((()=>K.state.searchRef));function Y(t){const e=t.replace(/[\s().#]/g,"").toLowerCase();if(""===e)return[];let s=F.value.reduce(((t,s)=>{if(e.includes(s.name))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map);0===s.size&&e.length<10&&(s=F.value.reduce(((t,s)=>{if(s.name.includes(e))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map));return Array.from(s.entries()).map((([t,e])=>[V.value[t],e])).filter((([t])=>"private"!==t.access||J.value)).sort((([t,s],[n,o])=>{let r=0;return t.nameLowerCase===e?r+=t.isPriority?-10:-4:n.nameLowerCase===e&&(r+=n.isPriority?10:4),e.length>=7&&(t.cleanedComputedName.includes(e)&&(r-=30),n.cleanedComputedName.includes(e)&&(r+=30)),s.numMatches===o.numMatches&&(t.isPriority&&(r-=6),n.isPriority&&(r+=6),s.numMatches>1&&(r+=Math.abs(e.length-t.computedName.length)-Math.abs(e.length-n.computedName.length)),r+=o.lengthMatches-s.lengthMatches),o.numMatches-s.numMatches+r})).map((([t,e])=>t))}const H=e(null),q=Symbol("docs"),K=n({state:{sources:[{source:U,name:U.name,id:U.id}],source:U,tag:U.defaultTag,docs:null,branches:[],file:null,stats:{downloads:`${(0).toLocaleString("be")}`,stars:`${(0).toLocaleString("be")}`,contributors:`${(0).toLocaleString("be")}`},searchIndex:[],searchRef:[]},mutations:{setSource(t,{source:e}){t.source=e},setTag(t,{tag:e}){t.tag=e},setDocs(t,{docs:e}){t.docs=e},setBranches(t,{branches:e}){t.branches=e},setFile(t,{file:e}){t.file=e},setStats(t,{stats:e}){t.stats=e},setSearchIndex(t,{searchIndex:e,searchRef:s}){t.searchIndex=e,t.searchRef=s}},actions:{fetchStats:async({commit:t})=>{let e=0,s=0,n=0;const o=t=>t.json(),r=()=>{},[a,l,i]=await Promise.all([fetch("https://api.npmjs.org/downloads/range/2020-03-10:2100-08-21/discord-moderation").then(o,r),fetch("https://api.github.com/repos/discord-moderation/source").then(o,r),fetch("https://api.github.com/repos/discord-moderation/source/stats/contributors").then(o,r)]);if(a){e=0;for(const t of a.downloads)e+=t.downloads}l&&(s=l.stargazers_count),i&&(n=i.length),t({type:"setStats",stats:{downloads:`${e.toLocaleString("be")}`,stars:`${s.toLocaleString("be")}`,contributors:`${n.toLocaleString("be")}`}})},fetchDocs:async({commit:t},{inputSource:e,inputTag:s=e.defaultTag})=>{var n,o,r,a;let l;try{l=await e.fetchDocs(s)}catch(p){return t({type:"setDocs",docs:null}),t({type:"setTag",docs:null}),void(H.value=p)}const i=[],c=[];let d=0;const u=(t,e,s,n,o,r)=>{const a=function(t){var e,s;return/^[_A-Z]+$/.test(t)?null!=(e=t.match(/[A-Z]+/g))?e:[]:null!=(s=t.match(/(([A-Z]{2,})(?=[A-Z]))|[A-Z][a-z]+|[a-z]+/g))?s:[]}(t),l=new B(t,e,s,n,o,r);i.push(l);const u=[];for(const i of a){const t=i.toLowerCase();let e=c.findIndex((e=>e.name===t));e>-1?c[e].addRelated(d):e=c.push(new D(t,d))-1,u.push(e)}return d+=1,u};for(const h of l.classes){const t=u(h.name,N.Class,void 0,void 0,h.access,h.scope),e=[];for(const s of null!=(n=h.methods)?n:[])u(s.name,N.Method,h.name,N.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(o=h.props)?o:[])u(s.name,N.Property,h.name,N.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(r=h.events)?r:[])u(s.name,N.Events,h.name,N.Class,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}for(const h of l.typedefs){const t=u(h.name,N.Typedefs,void 0,void 0,h.access,h.scope),e=[];for(const s of null!=(a=h.props)?a:[])u(s.name,N.Property,h.name,N.Typedefs,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}t({type:"setSearchIndex",searchIndex:c,searchRef:i}),l.classes.sort(((t,e)=>t.name.localeCompare(e.name))),l.typedefs.sort(((t,e)=>t.name.localeCompare(e.name)));for(const h of l.classes)h.props&&h.props.sort(((t,e)=>t.name.localeCompare(e.name))),h.methods&&h.methods.sort(((t,e)=>t.name.localeCompare(e.name))),h.events&&h.events.sort(((t,e)=>t.name.localeCompare(e.name)));l.links={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",String:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",Number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",bigint:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",true:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",false:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",symbol:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",void:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",undefined:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",null:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Set:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",RegExp:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",Error:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",Immediate:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_immediate",Buffer:"https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",ReadableStream:"https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",ChildProcess:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",Worker:"https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",MessagePort:"https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",any:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",unknown:"https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown",readonly:"https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly",Record:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",Exclude:"https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion",Omit:"https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys",IterableIterator:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"},l.externals=l.externals||[],l.classes=l.classes||[],l.typedefs=l.typedefs||[];for(const h of l.externals)l.links[h.name]=h.see[0].replace(/\{@link\s+(.+?)\s*\}/i,"$1");for(const h of l.classes)l.links[h.name]={name:"docs-source-tag-class-class",params:{class:h.name}};for(const h of l.typedefs)l.links[h.name]={name:"docs-source-tag-typedef-typedef",params:{typedef:h.name}};"commando"===e.id&&(l.links.Message={name:"docs-source-tag-class-class",params:{source:"main",tag:"master",class:"Message"}}),l.global=e.global,l.source=e.source,l.id=e.id,l.tag=s,t({type:"setDocs",docs:l})},fetchTags:async({commit:t},{currentSource:e})=>{t({type:"setBranches",branches:await e.fetchTags()})}}});function Z(){return o(q)}var X=r({setup(t){const e=Z(),n=s((()=>e.state.stats.downloads)),o=s((()=>e.state.stats.stars)),r=s((()=>e.state.stats.contributors));return(t,e)=>(a(),l("ul",null,[i("li",null,[i("strong",null,c(d(n))+" downloads",1)]),i("li",null,[i("strong",null,c(d(o))+" stars",1)]),i("li",null,[i("strong",null,c(d(r))+" contributors",1)])]))}});const Q={class:"bg-discord-blurple-560"},tt={class:"max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200"},et=h("discord-moderation"),st=i("p",{class:"mb-4"},"A module that will simplify creating moderation system to your discord bot.",-1),nt={class:"text-xs break-words-legacy"},ot=i("br",null,null,-1);var rt=r({setup(t){const s=e("8b963288ff5149b705f6bc994396cc24ce43cae1"),n=e(new Date(1647888909893).toUTCString());return(t,e)=>{const o=u("router-link");return a(),l("footer",Q,[i("div",tt,[i("strong",null,[i(o,{to:"/"},{default:p((()=>[et])),_:1})]),st,i(X,{class:"mb-4"}),i("p",nt,[h(" commit: "+c(s.value),1),ot,h(" built at: "+c(n.value),1)])])])}}});const at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},lt=i("g",{fill:"none"},[i("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var it={name:"heroicons-outline-external-link",render:function(t,e){return a(),l("svg",at,[lt])}};const ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},dt=i("g",{fill:"none"},[i("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ut={name:"heroicons-outline-sun",render:function(t,e){return a(),l("svg",ct,[dt])}};const pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ht=i("g",{fill:"none"},[i("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var mt={name:"heroicons-outline-moon",render:function(t,e){return a(),l("svg",pt,[ht])}};const gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ft=i("g",{fill:"none"},[i("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var bt={name:"heroicons-outline-search",render:function(t,e){return a(),l("svg",gt,[ft])}};const vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},wt=i("g",{fill:"none"},[i("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var xt={name:"heroicons-outline-arrow-right",render:function(t,e){return a(),l("svg",vt,[wt])}};const yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},kt=i("g",{fill:"none"},[i("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var _t={name:"heroicons-outline-menu",render:function(t,e){return a(),l("svg",yt,[kt])}};const St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Mt=i("g",{fill:"none"},[i("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var jt={name:"heroicons-outline-x",render:function(t,e){return a(),l("svg",St,[Mt])}};const Rt=m({storageKey:"theme"}),Ct=g(Rt),Ot={class:"sticky top-0 z-20"},zt={class:"bg-discord-blurple-560"},Tt={class:"max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8"},$t={class:"hidden md:flex md:py-2 md:space-x-4 lg:space-x-8","aria-label":"Global navigation"},At=h(" discord-moderation "),Wt=h(" Documentation "),Et=i("span",{class:"mr-2"},"GitHub",-1),Lt=i("span",{class:"mr-2"},"Support Server",-1),Gt={class:"relative h-16 flex md:max-w-md md:w-full lg:max-w-lg"},Pt={class:"relative z-10 flex items-center md:hidden"},Ut={class:"relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end"},Jt=i("label",{for:"search",class:"sr-only"},"Search",-1),Dt={class:"relative"},Nt={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center","aria-hidden":"true"},It={class:"relative z-10 flex items-center md:hidden"},Bt=i("span",{class:"sr-only"},"Open menu",-1),Ft={key:0,id:"mobile-menu",class:"md:hidden","aria-label":"Global navigation"},Vt={class:"pt-2 pb-3 px-2 space-y-1"},Yt=h("discord-moderation"),Ht=h("Documentation"),qt=i("span",{class:"mr-2"},"Github",-1),Kt=i("span",{class:"mr-2"},"Support Server",-1);var Zt=r({setup(t){const n=f(),o=b(),r=Z(),m=v(w).greater("md"),g=e(!1),O=e(),z=e(""),T=e(!1),$=e(-1),A=s((()=>{var t;return null==(t=r.state.source)?void 0:t.repo})),W=s((()=>($.value=-1,Y(z.value).slice(0,7)))),E=()=>{if(W.value.length)return T.value=!1,$.value>=0?(n.push(W.value[$.value].getLinkPath()),void($.value=-1)):n.push({name:"docs-source-tag-search",query:{query:z.value}})},L=t=>{$.value+=1,$.value>Math.min(6,W.value.length-1)&&($.value=0),t.preventDefault()},G=t=>{$.value-=1,$.value<0&&($.value=Math.min(6,W.value.length-1)),t.preventDefault()},P=t=>{if(!t.target)return;const e=t.target.getAttribute("data-index");e&&($.value=parseInt(e,10))};return x(m,(()=>g.value=!1)),y(O,(()=>{T.value=!1,$.value=-1})),(t,e)=>{const s=u("router-link"),n=it,r=ut,m=mt,f=bt,b=xt,v=_t,w=jt;return a(),l("div",Ot,[i("header",zt,[i("div",Tt,[i("nav",$t,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-blurple-600"},{default:p((()=>[At])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-blurple-600"},{default:p((()=>[Wt])),_:1}),i("a",{href:`https://github.com/${d(A)}`,class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[Et,i(n,{class:"h-5 w-5"})],8,["href"]),i("a",{href:"https://discord.gg/zsTgXs24k2",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[Lt,i(n,{class:"h-5 w-5"})],8,["href"])]),i("div",Gt,[i("div",Pt,[i("button",{class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-discord-blurple-630\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[1]||(e[1]=t=>d(Ct)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"])]),i("div",Ut,[i("button",{class:"\n\t\t\t\t\t\t\t\thidden\n\t\t\t\t\t\t\t\tmd:block\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-1 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[2]||(e[2]=t=>d(Ct)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"]),"/"!==d(o).path?(a(),l("div",{key:0,ref:O,class:"w-full sm:max-w-lg lg:max-w-xs"},[Jt,i("div",Dt,[i("div",Nt,[i(f,{class:"h-5 w-5 text-gray-200"})]),k(i("input",{id:"search","onUpdate:modelValue":e[3]||(e[3]=t=>z.value=t),name:"search",class:"\n\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\tbg-discord-blurple-600\n\t\t\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\tpl-10\n\t\t\t\t\t\t\t\t\t\tpr-3\n\t\t\t\t\t\t\t\t\t\ttext-base text-white\n\t\t\t\t\t\t\t\t\t\tplaceholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\tfocus:text-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:placeholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:ring-2\n\t\t\t\t\t\t\t\t\t\tfocus:ring-inset\n\t\t\t\t\t\t\t\t\t\tfocus:ring-white\n\t\t\t\t\t\t\t\t\t\tlg:focus:ring-1\n\t\t\t\t\t\t\t\t\t",placeholder:"Search",type:"search",autocomplete:"off",autocapitalize:"off",autocorrect:"off",onFocus:e[4]||(e[4]=t=>T.value=!0),onInput:e[5]||(e[5]=t=>T.value=!0),onKeyup:S(E,["enter"]),onKeydown:[S(G,["up"]),S(L,["down"])]},null,40,["onKeyup","onKeydown"]),[[_,z.value]]),T.value&&z.value&&d(W).length?(a(),l("div",{key:0,class:"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center","aria-hidden":"true",onClick:E},[i(b,{class:"h-5 w-5 text-gray-200"})])):M("",!0),T.value&&z.value&&d(W).length?(a(),l("div",{key:1,class:"absolute mt-1 w-full break-words-legacy border bg-discord-blurple-600 rounded-md",onMouseover:P},[i("ul",null,[(a(!0),l(j,null,R(d(W),((t,n)=>(a(),l("li",{key:t.computedName,class:["\n\t\t\t\t\t\t\t\t\t\t\t\teven:bg-discord-blurple-560\n\t\t\t\t\t\t\t\t\t\t\t\tdark:even:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\tdark:hover:bg-discord-blurple-660\n\t\t\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\t\t\t\t",{"ring-1 ring-gray-200 even:bg-discord-blurple-630 dark:even:bg-discord-blurple-660 bg-discord-blurple-630 dark:bg-discord-blurple-660":n===$.value}]},[i(s,{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-3\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:rounded-md\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:focus-visible:bg-discord-blurple-660\n\t\t\t\t\t\t\t\t\t\t\t\t",exact:"",to:t.getLinkPath(),"data-index":n,onClick:e[6]||(e[6]=t=>T.value=!1)},{default:p((()=>[h(c(t.computedName),1)])),_:2},1032,["to","data-index"])],2)))),128))])],32)):M("",!0)])],512)):M("",!0)]),i("div",It,[i("button",{type:"button",class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-controls":"mobile-menu","aria-expanded":g.value,onClick:e[7]||(e[7]=t=>g.value=!g.value)},[Bt,i(v,{class:{hidden:g.value,block:!g.value},"aria-hidden":"true"},null,8,["class"]),i(w,{class:{block:g.value,hidden:!g.value},"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])]),i(C,{"enter-active-class":"transition transform-gpu duration-300 ease-out","enter-from-class":"translate-x-12 opacity-0","enter-to-class":"translate-x-0 opacity-100"},{default:p((()=>[g.value?(a(),l("nav",Ft,[i("div",Vt,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[8]||(e[8]=t=>g.value=!g.value)},{default:p((()=>[Yt])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[9]||(e[9]=t=>g.value=!g.value)},{default:p((()=>[Ht])),_:1}),i("a",{href:`https://github.com/${d(A)}`,class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[10]||(e[10]=t=>g.value=!g.value)},[qt,i(n,{class:"h-5 w-5 inline-block"})],8,["href"]),i("a",{href:"https://discord.gg/zsTgXs24k2",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[11]||(e[11]=t=>g.value=!g.value)},[Kt,i(n,{class:"h-5 w-5 inline-block"})],8,["href"])])])):M("",!0)])),_:1})])])}}});const Xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Qt=i("g",{fill:"none"},[i("path",{d:"M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var te={name:"heroicons-outline-download",render:function(t,e){return a(),l("svg",Xt,[Qt])}};function ee(t={}){const{immediate:s=!0,onNeedRefresh:n,onOfflineReady:o}=t,r=e(!1),a=e(!1);return{updateServiceWorker:function(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:n}=t;let o;return"serviceWorker"in navigator&&(o=new O("/sw.js",{scope:"/"}),o.addEventListener("activated",(t=>{t.isUpdate?window.location.reload():null==n||n()})),o.register({immediate:e}).then((t=>t))),async(t=!0)=>{}}({immediate:s,onNeedRefresh(){r.value=!0,null==n||n()},onOfflineReady(){a.value=!0,null==o||o()}}),offlineReady:a,needRefresh:r}}const se={key:0,class:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"},ne={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},oe={class:"p-2 rounded-lg bg-discord-blurple-600 dark:bg-discord-blurple-700 shadow-lg sm:p-3"},re={class:"flex items-center justify-between flex-wrap"},ae={class:"w-0 flex-1 flex items-center"},le={class:"flex p-2 rounded-lg bg-discord-blurple-530 dark:bg-discord-blurple-630"},ie={class:"ml-3 font-medium text-white truncate"},ce={class:"sm:hidden"},de={class:"hidden sm:inline"},ue={key:0,class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},pe={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-2"},he=i("span",{class:"sr-only"},"Dismiss",-1);var me=r({setup(t){const{offlineReady:e,needRefresh:s,updateServiceWorker:n}=ee(),o=()=>{e.value=!1,s.value=!1};return(t,r)=>{const u=te,p=jt;return d(e)||d(s)?(a(),l("div",se,[i("div",ne,[i("div",oe,[i("div",re,[i("div",ae,[i("span",le,[i(u,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})]),i("p",ie,[i("span",ce,c(d(e)?"App ready to work offline.":"New content available."),1),i("span",de,c(d(e)?"App ready to work offline.":"New content available, click refresh to update."),1)])]),d(s)?(a(),l("div",ue,[i("button",{class:"\n\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\tfont-medium\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\tbg-discord-blurple-530\n\t\t\t\t\t\t\t\tdark:bg-discord-blurple-630\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-460\n\t\t\t\t\t\t\t\tdark:hover:bg-discord-blurple-600\n\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t",onClick:r[1]||(r[1]=t=>d(n)(!0))}," Refresh ")])):M("",!0),i("div",pe,[i("button",{type:"button",class:"-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",onClick:o},[he,i(p,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})])])])])])])):M("",!0)}}});const ge={class:"min-h-full grid grid-layout"},fe={id:"container",class:"grid grid-layout-container lg:custom-scroll"},be={class:"bg-white dark:bg-[#1d1d1d]"};var ve=r({setup:t=>(Z().dispatch("fetchStats"),(t,e)=>{const s=u("router-view"),n=rt;return a(),l(j,null,[i("div",ge,[i(Zt),i("div",fe,[i("div",be,[i(s)]),i(n)])]),i(me)],64)})});let we;const xe={},ye=function(t,e){if(!e||0===e.length)return t();if(void 0===we){const t=document.createElement("link").relList;we=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if((t=`/${t}`)in xe)return;xe[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":we,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e?new Promise(((t,e)=>{n.addEventListener("load",t),n.addEventListener("error",e)})):void 0}))).then((()=>t()))},ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_e=i("g",{fill:"none"},[i("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Se={name:"heroicons-outline-clipboard-copy",render:function(t,e){return a(),l("svg",ke,[_e])}};const Me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},je=i("g",{fill:"none"},[i("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Re={name:"heroicons-outline-clipboard-check",render:function(t,e){return a(),l("svg",Me,[je])}};const Ce={class:"text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},Oe=i("span",{class:"hover:text-white mr-2"},"npm install discord-moderation",-1),ze={class:"text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},Te=i("span",{class:"hover:text-white mr-2"},"yarn add discord-moderation",-1);var $e=r({setup(t){const s=e(),n=e(!1),o=z((t=>{t(),n.value=!1}),1e3),{show:r,hide:c}=T(s,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),d=async()=>{try{await navigator.clipboard.writeText("npm install discord-moderation"),r()}catch{}n.value=!0,o(c)},u=async()=>{try{await navigator.clipboard.writeText("yarn add discord-moderation"),r()}catch{}n.value=!0,o(c)};return(t,e)=>{const o=Se,r=Re;return a(),l(j,null,[i("code",Ce,[Oe,i("button",{ref:s,class:"focus:outline-none","aria-label":"Copy install command"},[n.value?(a(),l(r,{key:1,class:"inline-block fill-current text-discord-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:d})):(a(),l(o,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:d}))],512)]),i("code",ze,[Te,i("button",{ref:s,class:"focus:outline-none","aria-label":"Copy install command"},[n.value?(a(),l(r,{key:1,class:"inline-block fill-current text-discord-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:u})):(a(),l(o,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:u}))],512)])],64)}}});const Ae={class:"bg-discord-blurple-500 py-20"},We={class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12"},Ee={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tlg:prose-lg\n\t\t\tpx-6\n\t\t\tmx-auto\n\t\t\tpb-8\n\t\t\tw-full\n\t\t\txl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl\n\t\t"},Le=$("<div><h2>Why?</h2><span><strong>[⭐] Simple to Use</strong></span> <br><span><strong>[🔑] Writen on TypeScript</strong></span> <br><span><strong>[⚙] 100% Promise-based</strong></span> <br><span><strong>[🙂] Built in Declarations</strong></span> <br></div>",1),Ge=i("h2",null,"Statistics",-1);const Pe=[{name:"index",path:"/",component:r({setup(t){const e=Z();return s((()=>e.state.docs)).value||(e.dispatch("fetchDocs",{inputSource:U}),e.dispatch("fetchTags",{currentSource:U})),(t,e)=>(a(),l(j,null,[i("div",Ae,[i("div",We,[i($e)])]),i("div",Ee,[Le,i("div",null,[Ge,i(X)])])],64))}}),props:!0},{path:"/docs",component:()=>ye((()=>import("./docs.46f32cbf.js")),["assets/docs.46f32cbf.js","assets/docs.675be814.css","assets/vendor.334b0b9f.js","assets/chevron-down.97d24cca.js","assets/headlessui.esm.5c113eea.js","assets/Spinner.e42cf5cd.js","assets/Spinner.af24072b.css"]),children:[{name:"docs-source",path:":source",component:()=>ye((()=>import("./index.2bebb305.js")),["assets/index.2bebb305.js","assets/Spinner.e42cf5cd.js","assets/Spinner.af24072b.css","assets/vendor.334b0b9f.js"]),props:!0},{name:"docs-source-tag-search",path:":source/:tag/search",component:()=>ye((()=>import("./search.8f6f0d9a.js")),["assets/search.8f6f0d9a.js","assets/search.055dc457.css","assets/vendor.334b0b9f.js"]),props:!0},{name:"docs-source-tag-category-file",path:":source/:tag/:category/:file",component:()=>ye((()=>import("./[file].13f6b62c.js")),["assets/[file].13f6b62c.js","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.1d7b43e7.js"]),props:!0},{name:"docs-source-tag-class-class",path:":source/:tag/class/:class",component:()=>ye((()=>import("./[class].3a9f69e8.js")),["assets/[class].3a9f69e8.js","assets/[class].32241939.css","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.1d7b43e7.js","assets/See.vue_vue&type=script&setup=true&lang.703ea3a2.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/chevron-down.97d24cca.js","assets/headlessui.esm.5c113eea.js"]),props:!0},{name:"docs-source-tag-typedef-typedef",path:":source/:tag/typedef/:typedef",component:()=>ye((()=>import("./[typedef].b4f6e98f.js")),["assets/[typedef].b4f6e98f.js","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.1d7b43e7.js","assets/See.vue_vue&type=script&setup=true&lang.703ea3a2.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/headlessui.esm.5c113eea.js"]),props:!0}],props:!0},{name:"all",path:"/:all(.*)*",component:()=>ye((()=>import("./[...all].6c73002e.js")),["assets/[...all].6c73002e.js","assets/vendor.334b0b9f.js"]),props:!0}];var Ue=A({history:W(),routes:Pe});const Je=E(ve);Je.use(K,q),Je.use(Ue),Je.use(L),Je.mount("#app");export{N as D,U as M,Se as _,Re as a,it as b,H as f,J as i,Y as s,Z as u};