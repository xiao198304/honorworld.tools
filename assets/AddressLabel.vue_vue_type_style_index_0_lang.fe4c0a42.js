import{O as c,Q as i,N as l,V as _,I as m,J as u,K as v,Z as f,a4 as h,M as w}from"./index.479942d6.js";const x={class:"text-sm"},y=c({__name:"AddressLabel",props:{address:{type:String,default:""}},setup(t){const e=t,o=i(!1),n=[{id:2,text:"Arbiscan.io",code:e.address,icon:"share-o"}],r=a=>{if(a.id==2){let s="https://arbiscan.io/address/"+e.address;window.open(s,"_blank")}};return(a,s)=>{const d=w("van-popover");return l(),_(d,{show:o.value,"onUpdate:show":s[0]||(s[0]=p=>o.value=p),actions:n,onSelect:r,placement:"top-start"},{reference:m(()=>[u("span",x,v(f(h)(e.address)),1)]),_:1},8,["show"])}}});export{y as _};
