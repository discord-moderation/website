import{o as e,c as l,a as n,i as s,j as a,k as r,e as t,d as o,w as i,n as u,z as d,F as p,t as m,N as v,s as c}from"./vendor.8173c927.js";import{u as y}from"./index.91123aec.js";import{m as h,_ as k}from"./SourceButton.vue_vue&type=script&setup=true&lang.8c81a0f7.js";import{b as f,c as w,d as x,t as g,_ as b,a as M}from"./See.vue_vue&type=script&setup=true&lang.ab637a1b.js";import{D as j,a as T,b as _}from"./headlessui.esm.088c4b7e.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},H=n("g",{fill:"none"},[n("path",{d:"M12 4v16m8-8H4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var B={name:"heroicons-outline-plus",render:function(n,s){return e(),l("svg",A,[H])}};const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},R=n("g",{fill:"none"},[n("path",{d:"M20 12H4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var S={name:"heroicons-outline-minus",render:function(n,s){return e(),l("svg",L,[R])}};const C={class:"flex gap-1 items-center -ml-1"},E={class:"font-semibold"},P={class:"sr-only"};var Y=s({props:["names","variable","nullable"],setup(s){var v;const c=s,k=a(),M=r(),A=y(),H=t((()=>A.state.docs)),L=o(null==(v=H.value)?void 0:v.typedefs.find((e=>e.name===c.names[0][0]))),R=t((()=>{var e;return h(w(null==(e=L.value)?void 0:e.description,H.value,k,M))}));return(a,r)=>{const t=B,o=S;return L.value?(e(),l(u(j),{key:0,as:"div"},{default:i((({open:a})=>[n(u(T),{as:"div",class:"focus:outline-none"},{default:i((()=>[n("div",C,[n("span",E,d(s.nullable?"?":"")+d(s.variable?"...":""),1),(e(!0),l(p,null,m(s.names,(n=>(e(),l(x,{key:u(g)(n),type:n},null,8,["type"])))),128)),n("button",{class:"leading-3 focus:outline-none","aria-expanded":a},[n("span",P,d(a?"Shrink":"Expand"),1),n(t,{class:["inline-block",{hidden:a}],"aria-hidden":"true"},null,8,["class"]),n(o,{class:["inline-block",{hidden:!a}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])),_:2},1024),n(u(_),null,{default:i((()=>{var n,s;return[(null==(n=L.value)?void 0:n.props)?(e(),l(b,{key:0,parameters:null==(s=L.value)?void 0:s.props},null,8,["parameters"])):(e(),l("div",{key:1,innerHTML:u(R)},null,8,["innerHTML"]))]})),_:1})])),_:1})):(e(),l(f,{key:1,names:s.names},null,8,["names"]))}}});const z={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},D={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},F=n("h2",null,"Types",-1),I={id:"typedef-types"},N={key:2},$=n("h2",null,"Properties",-1),q={key:3},G=n("h2",null,"Parameters",-1),J={key:4},K=n("h2",null,"Returns",-1),O={key:0},Q={key:1};var U=s({setup(s){var o;const i=a(),x=r(),j=y(),T=t((()=>j.state.docs)),_=null==(o=T.value)?void 0:o.typedefs.find((e=>e.name===x.params.typedef)),A=t((()=>h(w(null==_?void 0:_.description,T.value,i,x))));return v((()=>{const e=document.getElementById("container");e&&e.scrollTop>200&&e.scrollTo({top:0,behavior:"smooth"})})),(s,a)=>{var r,t,o,i,v,y,h,w,x,j,T,H;return e(),l("div",z,[n(k,{class:"float-right mt-2",meta:null==(r=u(_))?void 0:r.meta},null,8,["meta"]),n("div",D,[n("h1",{id:`doc-for-${null==(t=u(_))?void 0:t.name}`},d(null==(o=u(_))?void 0:o.name),9,["id"]),(null==(i=u(_))?void 0:i.description)?(e(),l("p",{key:0,innerHTML:u(A)},null,8,["innerHTML"])):c("",!0),(null==(v=u(_))?void 0:v.see)?(e(),l(M,{key:1,see:null==(y=u(_))?void 0:y.see},null,8,["see"])):c("",!0),F,n("ul",I,[(e(!0),l(p,null,m(null==(h=u(_))?void 0:h.type,(s=>(e(),l("li",{key:u(g)(s)},[n(Y,{class:"!m-0",names:s},null,8,["names"])])))),128))]),(null==(w=u(_))?void 0:w.props)&&(null==(x=u(_))?void 0:x.props.length)?(e(),l("div",N,[$,n(b,{parameters:u(_).props},null,8,["parameters"])])):c("",!0),(null==(j=u(_))?void 0:j.params)&&(null==(T=u(_))?void 0:T.params.length)?(e(),l("div",q,[G,n(b,{parameters:u(_).params},null,8,["parameters"])])):c("",!0),(null==(H=u(_))?void 0:H.returns)?(e(),l("div",J,[K,n("p",null,[u(_).returns&&Array.isArray(u(_).returns)?(e(),l("span",O,[(e(!0),l(p,null,m(u(_).returns,(n=>(e(),l(f,{key:u(g)(n),names:n},null,8,["names"])))),128))])):u(_).returns&&!Array.isArray(u(_).returns)?(e(),l("span",Q,[(e(!0),l(p,null,m(u(_).returns.types||u(_).returns,(n=>(e(),l(f,{key:u(g)(n),names:n,variable:u(_).returns.variable,nullable:u(_).returns.nullable},null,8,["names","variable","nullable"])))),128))])):c("",!0)])])):c("",!0)])])}}});export{U as default};
