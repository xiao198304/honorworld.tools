import{O as k,Q as w,ab as x,ac as C,G as l,H as a,I as u,L as i,ad as M,M as n,N as m,a1 as g,ae as N}from"./index.d61d7c7d.js";const G=k({__name:"index",setup(R){const e=w(0),o=["MyHero","MyGem"],_=M(),c=N(),p=[{title:"tabbar.myhero",path:"/my/hero"},{title:"tabbar.mygem",path:"/my/gem"}];x(e,(t,s)=>{c.push({name:o[t]})});const v=()=>{c.push({name:o[e.value]})};return C(()=>{e.value=o.findIndex(t=>t==_.name)}),(t,s)=>{const d=n("van-tab"),b=n("van-tabs"),y=n("van-sticky"),f=n("router-view");return m(),l(i,null,[a(y,null,{default:u(()=>[a(b,{active:e.value,"onUpdate:active":s[0]||(s[0]=r=>e.value=r),swipeable:"",sticky:"",onClickTab:v},{default:u(()=>[(m(),l(i,null,g(p,(r,h)=>a(d,{title:t.$t(r.title),key:h},null,8,["title"])),64))]),_:1},8,["active"])]),_:1}),a(f)],64)}}});export{G as default};
