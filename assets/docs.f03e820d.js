import{o as t,c as e,a,i as l,j as n,k as s,d as r,e as o,m as u,l as d,J as i,r as c,s as p,n as f,w as g,F as v,t as m,x,y,z as b,K as h,b as k,L as w,M as _,N as F,O as j,P as S}from"./vendor.8173c927.js";import{u as T,M as C,i as V,f as E}from"./index.f5c33797.js";import{_ as M,a as z}from"./chevron-down.55c750ef.js";import{D as B,a as D,b as I,L as K,c as U,d as A,e as L,S as O,f as R,g as Y}from"./headlessui.esm.088c4b7e.js";import{S as J}from"./Spinner.1a18cfd3.js";const N={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},P=a("g",{fill:"none"},[a("path",{d:"M5 15l7-7l7 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var $={name:"heroicons-outline-chevron-up",render:function(a,l){return t(),e("svg",N,[P])}};const q=a("span",{class:"sr-only"},"Open menu",-1),G={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},H={class:"my-5 px-2 space-y-1 z-10"},Q={class:"pb-1"},W={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},X={class:"sr-only"},Z=k(" Docs settings "),tt={class:"relative mt-1"},et={class:"truncate"},at={class:"truncate"},lt={class:"relative mt-1"},nt={class:"truncate"},st={class:"truncate"},rt={class:"flex justify-between px-2"},ot=k("Show privates"),ut={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},dt={class:"sr-only"},it={class:"truncate"},ct={class:"truncate"},pt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ft={class:"sr-only"},gt=k(" Classes "),vt={class:"truncate"},mt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},xt={class:"sr-only"},yt=k(" Typedefs "),bt={class:"truncate"};var ht=l({setup(l){var k,w,_,F,j;const S=n(),E=s(),J=T(),N=x(y).greater("lg"),P=r(!1),ht=r(),kt=o((()=>J.state.sources)),wt=o((()=>J.state.source)),_t=o((()=>J.state.tag)),Ft=o((()=>J.state.docs)),jt=o((()=>J.state.branches)),St=o((()=>kt.value.find((t=>E.params.source===t.id)))),Tt=r({source:null!=(w=null==(k=St.value)?void 0:k.source)?w:C,name:null!=(F=null==(_=St.value)?void 0:_.name)?F:C.name}),Ct=r(null!=(j=E.params.tag)?j:C.defaultTag),Vt=o((()=>{var t,e;return V.value?null==(t=Ft.value)?void 0:t.classes:null==(e=Ft.value)?void 0:e.classes.filter((t=>"private"!==t.access))})),Et=o((()=>{var t,e;return V.value?null==(t=Ft.value)?void 0:t.typedefs:null==(e=Ft.value)?void 0:e.typedefs.filter((t=>"private"!==t.access))}));return u(ht,(()=>P.value=!1)),d(N,(()=>P.value=!1),{immediate:!0}),i([Tt,Ct],(async([t,e],[a,l])=>t!==a?(Ct.value=t.source.defaultTag,S.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:t.source.defaultTag,category:t.source.defaultFile.category,file:t.source.defaultFile.id}})):e!==l?S.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:e,category:t.source.defaultFile.category,file:t.source.defaultFile.id}}):void 0)),(l,n)=>{var s,r,o;const u=M,d=z,i=$,x=c("router-link");return t(),e(v,null,[P.value?p("",!0):(t(),e("div",{key:0,class:["block fixed lg:hidden z-10 transition-transform transform-gpu",P.value?"translate-x-72 md:translate-x-80":null]},[a("button",{type:"button",class:"\n\t\t\t\trounded-md rounded-l-none rounded-tr-none\n\t\t\t\tp-3\n\t\t\t\tinline-flex\n\t\t\t\titems-center\n\t\t\t\tjustify-center\n\t\t\t\ttext-gray-200\n\t\t\t\tbg-discord-blurple-600\n\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t","aria-controls":"sidebar-menu","aria-expanded":P.value,onClick:n[1]||(n[1]=t=>P.value=!P.value)},[q,a(u,{class:["h-6 w-6",{hidden:P.value,block:!P.value}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])],2)),a("div",{ref:ht,class:["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",P.value?"translate-x-0":"-translate-x-full lg:translate-x-0"]},[a("div",G,[a("nav",H,[a("ul",null,[a("li",Q,[a(f(B),{"default-open":!0},{default:g((({open:l})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",W,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",X,b(l?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(d,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),Z])])),_:2},1024),a(f(I),{as:"ul",class:"px-2 space-y-3"},{default:g((()=>[a("li",null,[a(f(K),{modelValue:Tt.value,"onUpdate:modelValue":n[2]||(n[2]=t=>Tt.value=t)},{default:g((({open:l})=>[a("div",tt,[a(f(U),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[a("span",et,b(Tt.value.name),1),l?p("",!0):(t(),e(d,{key:0})),l?(t(),e(i,{key:1})):p("",!0)])),_:2},1024),a(f(A),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[(t(!0),e(v,null,m(f(kt),(l=>(t(),e(f(L),{key:l.source.id,class:"cursor-default",value:l},{default:g((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":t}]},[a("span",at,b(l.name),1)],2)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(f(K),{modelValue:Ct.value,"onUpdate:modelValue":n[3]||(n[3]=t=>Ct.value=t)},{default:g((({open:l})=>[a("div",lt,[a(f(U),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[a("span",nt,b(Ct.value),1),l?p("",!0):(t(),e(d,{key:0})),l?(t(),e(i,{key:1})):p("",!0)])),_:2},1024),a(f(A),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[(t(!0),e(v,null,m(f(jt),(l=>(t(),e(f(L),{key:l,class:"cursor-default",value:l},{default:g((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":t}]},[a("span",st,b(l),1)],2)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(f(O),null,{default:g((()=>[a("div",rt,[a(f(R),{class:"mr-4 dark:text-gray-200"},{default:g((()=>[ot])),_:1}),a(f(Y),{modelValue:f(V),"onUpdate:modelValue":n[4]||(n[4]=t=>h(V)?V.value=t:null),class:["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",f(V)?"bg-discord-red-500":"bg-gray-500"]},{default:g((()=>[a("span",{class:["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",f(V)?"translate-x-6":"translate-x-1"]},null,2)])),_:1},8,["modelValue","class"])])])),_:1})])])),_:1})])),_:1})]),(t(!0),e(v,null,m(null==(s=f(Ft))?void 0:s.custom,((l,s)=>(t(),e("li",{key:s},[a(f(B),{"default-open":!0},{default:g((({open:r})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",ut,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":r},[a("span",dt,b(r?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:r}],"aria-hidden":"true"},null,8,["class"]),a(d,{class:["inline-block",{hidden:!r}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),a("span",it,b(l.name),1)])])),_:2},1024),a(f(I),{as:"ul"},{default:g((()=>[(t(!0),e(v,null,m(l.files,((l,r)=>{var o;return t(),e("li",{key:r},[a(x,{to:{name:"docs-source-tag-category-file",params:{source:null==(o=f(wt))?void 0:o.id,tag:f(_t),category:s,file:r}},class:"\n\t\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[5]||(n[5]=t=>P.value=!1)},{default:g((()=>[a("span",ct,b("object"==typeof l?l.name:l),1)])),_:2},1032,["to"])])})),128))])),_:2},1024)])),_:2},1024)])))),128)),(null==(r=f(Vt))?void 0:r.length)?(t(),e(f(B),{key:0,as:"li","default-open":!0},{default:g((({open:l})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",pt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",ft,b(l?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(d,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),gt])])),_:2},1024),a(f(I),{as:"ul"},{default:g((()=>[(t(!0),e(v,null,m(f(Vt),(l=>{var s;return t(),e("li",{key:l.name},[a(x,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:null==(s=f(wt))?void 0:s.id,tag:f(_t),class:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[6]||(n[6]=t=>P.value=!1)},{default:g((()=>[a("span",vt,b(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):p("",!0),(null==(o=f(Et))?void 0:o.length)?(t(),e(f(B),{key:1,as:"li","default-open":!0},{default:g((({open:l})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",mt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",xt,b(l?"Shrink":"Expand"),1),a(u,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(d,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),yt])])),_:2},1024),a(f(I),{as:"ul"},{default:g((()=>[(t(!0),e(v,null,m(f(Et),(l=>{var s;return t(),e("li",{key:l.name},[a(x,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:null==(s=f(wt))?void 0:s.id,tag:f(_t),typedef:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[7]||(n[7]=t=>P.value=!1)},{default:g((()=>[a("span",bt,b(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):p("",!0)])])])],2)],64)}}});const kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},wt=a("g",{fill:"none"},[a("path",{d:"M8 7l4-4m0 0l4 4m-4-4v18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var _t={name:"heroicons-outline-arrow-narrow-up",render:function(a,l){return t(),e("svg",kt,[wt])}};const Ft={class:"fixed bottom-0 right-0 pb-4"},jt={class:"px-6 lg:px-8"};var St=l({setup:l=>(l,n)=>{const s=_t;return t(),e("div",Ft,[a("div",jt,[a("button",{class:"\n\t\t\t\t\tbg-discord-blurple-500\n\t\t\t\t\thover:bg-discord-blurple-530\n\t\t\t\t\tdark:hover:bg-discord-blurple-560\n\t\t\t\t\ttext-gray-200\n\t\t\t\t\thover:text-white\n\t\t\t\t\trounded-md\n\t\t\t\t\tp-2\n\t\t\t\t\tleading-3\n\t\t\t\t\tfocus:outline-none\n\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-gray-200\n\t\t\t\t",onClick:n[1]||(n[1]=t=>{return null==(e=document.getElementById("container"))?void 0:e.scrollTo({top:0,behavior:"smooth"});var e})},[a(s,{class:"h-6 w-6"})])])])}});const Tt={class:"lg:flex mx-auto w-full max-w-screen-2xl"},Ct={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Vt=k(" Couldn't load the documentation data. ");var Et=l({setup(l){const u=n(),i=s(),g=T(),{Ctrl_K:v}=w({passive:!1,onEventFired(t){t.ctrlKey&&"k"===t.key&&"keydown"===t.type&&t.preventDefault()}}),m=_({[C.id]:C}),x=r(!1),y=o((()=>g.state.source)),h=o((()=>g.state.tag)),k=o((()=>g.state.docs));F((()=>{const t=document.getElementById("container");j(t,"scroll",(()=>{t&&t.scrollTop>300?x.value=!0:x.value=!1}))})),d(v,(()=>{var t;null==(t=document.getElementById("search"))||t.focus()}));return S((()=>{(async()=>{var t,e,a,l,n,s,r,o,d,c,p,f,v,x,b,w,_,F,j,S;if("/"!==i.path)i.params.source&&i.params.tag&&((null==(t=k.value)?void 0:t.id)!==m[i.params.source].id||(null==(e=k.value)?void 0:e.tag)!==i.params.tag)&&(await g.dispatch({type:"fetchDocs",inputSource:null!=(a=m[i.params.source])?a:C,inputTag:null!=(l=i.params.tag)?l:h.value}),await g.dispatch({type:"fetchTags",currentSource:null!=(n=m[i.params.source])?n:C})),i.params.source&&m[i.params.source]?(g.commit({type:"setSource",source:m[i.params.source]}),i.params.tag?(g.commit({type:"setTag",tag:i.params.tag}),g.commit({type:"setSource",source:m[i.params.source]}),i.params.file||i.params.class||i.params.typedef||"docs-source-tag-search"===i.name||u.replace({name:"docs-source-tag-category-file",params:{source:null!=(b=null==(x=y.value)?void 0:x.id)?b:C.id,tag:null!=(w=h.value)?w:C.defaultTag,category:null!=(F=null==(_=y.value)?void 0:_.defaultFile.category)?F:C.defaultFile.category,file:null!=(S=null==(j=y.value)?void 0:j.defaultFile.id)?S:C.defaultFile.id}})):u.replace({name:"docs-source-tag-category-file",params:{source:null!=(r=null==(s=y.value)?void 0:s.id)?r:C.id,tag:(null==(o=y.value)?void 0:o.recentTag)||(null==(d=y.value)?void 0:d.defaultTag),category:null!=(p=null==(c=y.value)?void 0:c.defaultFile.category)?p:C.defaultFile.category,file:null!=(v=null==(f=y.value)?void 0:f.defaultFile.id)?v:C.defaultFile.id}})):u.replace({name:"docs-source-tag-category-file",params:{source:C.id,tag:C.defaultTag,category:C.defaultFile.category,file:C.defaultFile.id}})})()})),(l,n)=>{const s=c("router-view");return t(),e("div",null,[a("div",Tt,[a(ht),f(k)?(t(),e(s,{key:l.$route.path})):f(E)?(t(),e("div",Ct,[Vt,a("pre",null,b(f(E).toString()),1)])):(t(),e(J,{key:2}))]),x.value?(t(),e(St,{key:0})):p("",!0)])}}});export{Et as default};
