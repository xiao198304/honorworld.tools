import{O as h,Q as y,ab as C,ac as k,G as r,H as s,I as w,L as c,ad as g,M as l,ae as x,N as i,a1 as L}from"./index.91da3b7c.js";const A=h({__name:"index",setup(N){const e=y(0),a=["Season","CityLevel","Auto"],m=g(),u=x(),v=[{title:"tabbar.season",name:"Season",path:"/game/season"},{title:"tabbar.citylevel",name:"CityLevel",path:"/game/citylevel"},{title:"tabbar.auto",name:"Auto",path:"/game/auto"}];C(e,(t,n)=>{u.push({name:a[t]})});const p=()=>{u.push({name:a[e.value]})};return k(()=>{e.value=a.findIndex(t=>t==m.name)}),(t,n)=>{const _=l("van-tab"),b=l("van-tabs"),d=l("router-view");return i(),r(c,null,[s(b,{active:e.value,"onUpdate:active":n[0]||(n[0]=o=>e.value=o),swipeable:"",sticky:"",onClickTab:p},{default:w(()=>[(i(),r(c,null,L(v,(o,f)=>s(_,{title:t.$t(o.title),key:f},null,8,["title"])),64))]),_:1},8,["active"]),s(d)],64)}}});export{A as default};
