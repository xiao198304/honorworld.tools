import{a4 as g,P as h,a5 as v,a6 as c,a7 as y,a8 as O,O as w,a9 as C,aa as b,U as x,ab as T,ac as M}from"./index.78e23ef2.js";function P(){const e=h({show:!1}),t=s=>{e.show=s},n=s=>{c(e,s,{transitionAppear:!0}),t(!0)},a=()=>t(!1);return v({open:n,close:a,toggle:t}),{open:n,close:a,state:e,toggle:t}}function k(e){const t=g(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const E={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let o=[],I=!1,i=c({},E);const S=new Map;function l(e){return O(e)?e:{message:e}}function A(){const{instance:e,unmount:t}=k({setup(){const n=w(""),{open:a,state:s,close:p,toggle:d}=P(),f=()=>{},m=()=>x(M,T(s,{onClosed:f,"onUpdate:show":d}),null);return C(n,r=>{s.message=r}),b().render=m,{open:a,close:p,message:n}}});return e}function N(){if(!o.length||I){const e=A();o.push(e)}return o[o.length-1]}function U(e={}){if(!y)return{};const t=N(),n=l(e);return t.open(c({},i,S.get(n.type||i.type),n)),t}const u=e=>t=>U(c({type:e},l(t))),q=u("loading"),z=u("fail"),B=e=>{o.length&&(e?(o.forEach(t=>{t.close()}),o=[]):o[0].close())};export{q as a,z as b,B as c,U as s};
