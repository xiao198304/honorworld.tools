import{O as k,P as S,R as v,aB as B,ac as L,X as O,a9 as N,Y as b,G as x,H as p,I as h,V as w,Z as o,L as q,M as C,N as d,a1 as H}from"./index.d61d7c7d.js";import{_ as I}from"./DataCell.vue_vue_type_script_setup_true_lang.a1d93db7.js";import{_ as M}from"./PlayerCard.vue_vue_type_script_setup_true_lang.e55958ac.js";import{u as P}from"./dragon.1fffdb1e.js";import"./hero.d6daa2c6.js";const $=k({__name:"index",setup(U){const{t:c}=S(),u=P();let t=v({quality:0,sort:0});const f=function(n){return n.text=c(n.text),n};let m=[{text:"dragon_season.all_quality",value:0},{text:"dragon_season.one_5",value:1},{text:"dragon_season.two_5",value:2},{text:"dragon_season.all_5",value:3},{text:"dragon_season.zero_5",value:4}],_=[{text:"dragon_season.asc",value:0},{text:"dragon_season.desc",value:1}];const g=async()=>{console.log(t.quality,t.sort),await y()};let a=v({data:[],limit:5,alldata:[]});const V=n=>a.limit=n;B(()=>{m=m.map(f),_=_.map(f)}),L(async()=>{await y()});async function y(n=!1){O({duration:0,message:c("common.Updating_data")}),(u.data.length==0||n)&&await u.initSeason();let s=JSON.parse(JSON.stringify(u.data));a.alldata=s.sort(N("Rank")),t.quality>0?a.data=a.alldata.filter(l=>{let r=!1,e=0;for(let i=0;i<l.Player.Heroes.length;i++)l.Player.Heroes[i].grade==5&&(e=e+1);return e==t.quality&&(r=!0),t.quality==4&&e==0&&(r=!0),r}):a.data=a.alldata,t.sort==1&&(a.data=a.data.reverse()),b()}return(n,s)=>{const l=C("van-dropdown-item"),r=C("van-dropdown-menu");return d(),x(q,null,[p(r,null,{default:h(()=>[p(l,{modelValue:o(t).quality,"onUpdate:modelValue":s[0]||(s[0]=e=>o(t).quality=e),options:o(m),onChange:g,teleport:"body"},null,8,["modelValue","options"]),p(l,{modelValue:o(t).sort,"onUpdate:modelValue":s[1]||(s[1]=e=>o(t).sort=e),options:o(_),onChange:g,teleport:"body"},null,8,["modelValue","options"])]),_:1}),(d(),w(I,{isinset:!1,listLength:o(a).data.length,onChangeCount:V,key:"bad"+o(a).data.length},{default:h(()=>[(d(!0),x(q,null,H(o(a).data.slice(0,o(a).limit),(e,i)=>(d(),w(M,{key:"player"+i,data:e},null,8,["data"]))),128))]),_:1},8,["listLength"]))],64)}}});export{$ as default};
