import{O as g,Q as y,ak as k,ac as x,G as c,H as o,I as m,L as d,ad as C,M as s,N as v,a1 as B,ae as h}from"./index.efe8c10c.js";const L=g({__name:"index",setup(w){const n=y(0),u=["Season","CityLevel","Auto"],i=C();h();const r=[{title:"tabbar.season",name:"Season",path:"/game/season",badge:""},{title:"tabbar.citylevel",name:"CityLevel",path:"/game/citylevel",badge:"\u9650\u6642\u514D\u8CBB"},{title:"tabbar.auto",name:"Auto",path:"/game/auto",badge:"V"}];return k((e,l)=>{r.findIndex(a=>a.name==e.name)!=-1&&(n.value=u.findIndex(a=>a==e.name))}),x(()=>{console.log("name",i.name),n.value=u.findIndex(e=>e==i.name)}),(e,l)=>{const a=s("van-tab"),p=s("van-tabs"),_=s("van-sticky"),b=s("router-view");return v(),c(d,null,[o(_,null,{default:m(()=>[o(p,{active:n.value,"onUpdate:active":l[0]||(l[0]=t=>n.value=t),swipeable:"",sticky:""},{default:m(()=>[(v(),c(d,null,B(r,(t,f)=>o(a,{title:e.$t(t.title),to:t.path,badge:t.badge,key:f},null,8,["title","to","badge"])),64))]),_:1},8,["active"])]),_:1}),o(b)],64)}}});export{L as default};
