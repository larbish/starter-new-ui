import b from"./ContentDoc.DONtkbHw.js";import{d as y,D as h,E as u,b as l,c as p,G as i,H as v,I as s,J as w,K as $,n as f,f as g,e as B,l as C,L as k,w as _,M as x,g as d}from"./entry.CU8l5Oll.js";import"./ContentRenderer.DTkWyEtO.js";import"./ContentRendererMarkdown.vue.BT_HP7_y.js";import"./index.BsYmvPZw.js";import"./preview.DoUK6CeB.js";import"./ContentQuery.BHm4mqa-.js";import"./asyncData.DhkF2ErU.js";import"./query.DrwSbxam.js";const P=y({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const c={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},r=o,{ui:t,attrs:e}=h("page.body",u(r,"ui"),c,u(r,"class"),!0);return(a,m)=>(l(),p("div",v({class:[s(t).wrapper,o.prose&&s(t).prose]},s(e)),[i(a.$slots,"default")],16))}}),j=y({inheritAttrs:!1,__name:"Page",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const c={wrapper:"flex flex-col lg:grid lg:grid-cols-10 lg:gap-8",left:"lg:col-span-2",center:{narrow:"lg:col-span-6",base:"lg:col-span-8",full:"lg:col-span-10"},right:"lg:col-span-2 order-first lg:order-last"},r=o,t=w(),{ui:e,attrs:a}=h("page",u(r,"ui"),c,u(r,"class"),!0),m=$(()=>t.left&&t.right?e.value.center.narrow:t.left||t.right?e.value.center.base:e.value.center.full);return(n,S)=>(l(),p("div",v({class:s(e).wrapper},s(a)),[n.$slots.left?(l(),p("div",{key:0,class:f(s(e).left)},[i(n.$slots,"left")],2)):g("",!0),B("div",{class:f(s(m))},[i(n.$slots,"default")],2),n.$slots.right?(l(),p("div",{key:1,class:f(s(e).right)},[i(n.$slots,"right")],2)):g("",!0)],16))}}),A={};function O(o,c){const r=b,t=P,e=j,a=x;return l(),k(a,null,{default:_(()=>[d(e,null,{default:_(()=>[d(t,{prose:""},{default:_(()=>[d(r)]),_:1})]),_:1})]),_:1})}const J=C(A,[["render",O]]);export{J as default};
