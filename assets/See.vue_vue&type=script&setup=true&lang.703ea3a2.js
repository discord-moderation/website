import{d as e,c as t,g as n,o as s,b as r,f as l,t as a,w as o,h as i,e as p,z as u,F as c,A as y,k,l as d}from"./vendor.334b0b9f.js";import{u as m,b as f}from"./index.22fc3ff7.js";import{m as b}from"./SourceButton.vue_vue&type=script&setup=true&lang.1d7b43e7.js";function h(e,t){var n;const s=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i.exec(e);s&&(e=s[1]);const r=s?s[2]:null,l=e.split(/(\.|#)/);return t.links[l[0]]?((null==(n=l[2])?void 0:n.startsWith("event:"))&&(l[2]=l[2].replace("event:","e-"),e=e.replace("event:","")),{text:null!=r?r:e,link:"object"==typeof t.links[l[0]]?{name:t.links[l[0]].name,params:t.links[l[0]].params,query:{scrollTo:l[1]?`${"."===l[1]?"s-":""}${l[2]}`:void 0}}:t.links[l[0]]}):/^https?:\/\//i.exec(e)?{text:null!=r?r:e,link:e}:{text:null!=r?r:e}}function v(e,t,n,s){if(!e)return null;const r=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi;let l,a="",o=0;for(;l=r.exec(e);){a+=e.slice(o,l.index);const r=h(l[0],t);if(r.link){let e;"object"==typeof r.link?(r.link.params||(r.link.params={}),r.link.params.source=s.params.source,r.link.params.tag=s.params.tag,e=n.resolve(r.link).href):e=r.link,a+=`[${r.text}](${e})`}else a+=r.text;o=l.index+l[0].length}return a?(a+=e.slice(o),a):e}function x(e){return"string"==typeof e?e:e.join("-")}const g={key:0},w={key:3};var j=e({props:{type:{type:[String,Array],required:!0}},setup(e){const y=e,k=m(),d=t((()=>k.state.docs)),b=t((()=>"function"===y.type[0]?"Function":y.type[0])),h=t((()=>{var e;return(null==(e=d.value)?void 0:e.links[y.type[0]])?d.value.links[y.type[0]]:null}));return(t,y)=>{const k=n("router-link"),d=f;return s(),r(c,null,[l(h)?"object"==typeof l(h)?(s(),r(k,{key:1,to:l(h)},{default:o((()=>[i(a(l(b)),1)])),_:1},8,["to"])):(s(),r("a",{key:2,href:l(h),target:"_blank",rel:"noopener"},[i(a(l(b))+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),r("span",g,a(l(b)),1)),e.type[1]?(s(),r("span",w,a(e.type[1]),1)):u("",!0)],64)}}});const A={class:"docs-type inline-block whitespace-pre-wrap"},_={class:"font-semibold"},q={key:0};var M=e({props:{names:{type:[String,Array,Array],required:!0},nullable:{type:Boolean,required:!1},variable:{type:Boolean,required:!1}},setup:e=>(t,n)=>(s(),r("div",A,[p("span",_,a(e.nullable?"?":"")+a(e.variable?"...":""),1),Array.isArray(e.names)?(s(),r("span",q,[(s(!0),r(c,null,y(e.names,(e=>(s(),r(j,{key:l(x)(e),type:e},null,8,["type"])))),128))])):u("",!0)]))});const T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},L=p("g",{fill:"none"},[p("path",{d:"M5 13l4 4L19 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var $={name:"heroicons-outline-check",render:function(e,t){return s(),r("svg",T,[L])}};const B={class:"grid"},H={class:"overflow-x-auto lg:custom-scroll border dark:border-gray-600 rounded-md mt-3"},S={class:"!text-base !text-center !my-0 min-w-max xl:min-w-0"},D={class:"bg-discord-blurple-500 !text-gray-200"},F={class:"!uppercase"},z=p("th",{class:"!p-4 w-96"},"Parameter",-1),C=p("th",{class:"!p-4 w-48"},"Type",-1),N={key:0,class:"!p-4 w-40"},O={key:1,class:"!p-4 w-40"},P=p("th",{class:"!p-4 w-96"},"Description",-1),R={class:"!pl-2.5 !py-5"},W={class:"!py-5"},Y={key:0,class:"!py-5"},E=p("span",{class:"sr-only"},"True",-1),G={key:1,class:"!py-5"},I={key:0};var J=e({props:{parameters:{type:Array,required:!0}},setup(e){const n=e,o=k(),i=d(),f=m(),h=t((()=>f.state.docs)),g=t((()=>n.parameters.some((e=>e.optional)))),w=e=>{var t;return b(v(null!=(t=e.description)?t:"No description.",h.value,o,i))},j=e=>e.optional?`<code>${e.default}</code>`:"";return(t,n)=>{const o=$;return s(),r("div",B,[p("div",H,[p("table",S,[p("thead",D,[p("tr",F,[z,C,l(g)?(s(),r("th",N,"Optional")):u("",!0),l(g)?(s(),r("th",O,"Default")):u("",!0),P])]),p("tbody",null,[(s(!0),r(c,null,y(e.parameters,(e=>(s(),r("tr",{key:e.name},[p("td",R,a(e.name),1),p("td",W,[p("div",null,[(s(!0),r(c,null,y(e.type,(t=>(s(),r(M,{key:l(x)(t),names:t,variable:e.variable,nullable:e.nullable},null,8,["names","variable","nullable"])))),128))])]),l(g)?(s(),r("td",Y,[E,e.optional?(s(),r(o,{key:0,class:"h-5 w-5 mx-auto","aria-hidden":"true"})):u("",!0)])):u("",!0),l(g)?(s(),r("td",G,[e.optional&&void 0===e.default?(s(),r("em",I,"none")):(s(),r("span",{key:1,innerHTML:j(e)},null,8,["innerHTML"]))])):u("",!0),p("td",{class:"!pr-2.5 !py-0",innerHTML:w(e)},null,8,["innerHTML"])])))),128))])])])])}}});const K={class:"break-words-legacy mt-4"},Q=i(" See also: "),U={key:0},V={key:2},X={key:1},Z={key:2};var ee=e({props:{see:{type:Array,required:!0}},setup(e){const u=e,k=m(),d=t((()=>k.state.docs)),b=t((()=>{const e=new Array(u.see.length);for(let t=0;t<u.see.length;t++)e[t]=h(u.see[t],d.value);return e}));return(t,u)=>{const k=n("router-link"),d=f;return s(),r("div",K,[Q,e.see.length>1?(s(),r("ul",U,[(s(!0),r(c,null,y(l(b),(e=>(s(),r("li",{key:e.text},["object"==typeof e.link?(s(),r(k,{key:0,to:e.link},{default:o((()=>[i(a(e.text),1)])),_:2},1032,["to"])):"string"==typeof e.link?(s(),r("a",{key:1,href:e.link,target:"_blank",rel:"noopener"},[i(a(e.text)+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),r("span",V,a(e.text),1))])))),128))])):(s(),r("span",X,["object"==typeof l(b)[0].link?(s(),r(k,{key:0,to:l(b)[0].link},{default:o((()=>[i(a(l(b)[0].text),1)])),_:1},8,["to"])):"string"==typeof l(b)[0].link?(s(),r("a",{key:1,href:l(b)[0].link,target:"_blank",rel:"noopener"},[i(a(l(b)[0].text)+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),r("span",Z,a(l(b)[0].text),1))]))])}}});export{J as _,M as a,ee as b,v as c,j as d,h as p,x as t};
