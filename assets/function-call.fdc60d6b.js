import{a2 as m,T as g,a3 as h,a4 as r,a5 as v,a6 as y,K as C,a7 as O,a8 as w,M as b,a9 as x,aa as M}from"./index.ece6453d.js";function T(){const e=g({show:!1}),t=s=>{e.show=s},n=s=>{r(e,s,{transitionAppear:!0}),t(!0)},a=()=>t(!1);return h({open:n,close:a,toggle:t}),{open:n,close:a,state:e,toggle:t}}function k(e){const t=m(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const E={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let o=[],I=!1,i=r({},E);const P=new Map;function l(e){return y(e)?e:{message:e}}function S(){const{instance:e,unmount:t}=k({setup(){const n=C(""),{open:a,state:s,close:u,toggle:p}=T(),d=()=>{},f=()=>b(M,x(s,{onClosed:d,"onUpdate:show":p}),null);return O(n,c=>{s.message=c}),w().render=f,{open:a,close:u,message:n}}});return e}function A(){if(!o.length||I){const e=S();o.push(e)}return o[o.length-1]}function N(e={}){if(!v)return{};const t=A(),n=l(e);return t.open(r({},i,P.get(n.type||i.type),n)),t}const j=e=>t=>N(r({type:e},l(t))),z=j("loading"),B=e=>{o.length&&(e?(o.forEach(t=>{t.close()}),o=[]):o[0].close())};export{N as a,B as c,z as s};
