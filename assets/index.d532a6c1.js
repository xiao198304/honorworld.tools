import{P as d,R as b,ac as h,ag as k,G as w,W as r,ah as x,H as o,I as c,a0 as C,a3 as R,a4 as B,ai as N,Y as l}from"./index.2d28162b.js";const H=d({__name:"index",setup(g){const e=b(0),s=["CallHero","NftMarket"],u=x(),i=N(),p=[{title:"tabbar.callhero",path:"/nft/callhero"},{title:"tabbar.nftmarket",path:"/nft/nftmarket"}];return h(e,(t,n)=>{i.push({name:s[t]})}),k(()=>{e.value=s.findIndex(t=>t==u.name)}),(t,n)=>{const _=o("router-view"),m=o("van-tab"),v=o("van-tabs");return c(),w(v,{active:e.value,"onUpdate:active":n[0]||(n[0]=a=>e.value=a),swipeable:"",sticky:""},{default:r(()=>[(c(),C(B,null,R(p,(a,f)=>l(m,{title:t.$t(a.title),to:a.path,key:f},{default:r(()=>[l(_)]),_:2},1032,["title","to"])),64))]),_:1},8,["active"])}}});export{H as default};
