import{F as f,N as b,a8 as k,ac as h,G as w,R as r,ad as x,H as o,I as c,W as C,Z as N,$ as R,ae as B,T as l}from"./index.099fc90d.js";const H=f({__name:"index",setup(y){const e=b(0),s=["CallHero","NftMarket"],u=x(),i=B(),p=[{title:"tabbar.callhero",path:"/nft/callhero"},{title:"tabbar.nftmarket",path:"/nft/nftmarket"}];return k(e,(t,n)=>{i.push({name:s[t]})}),h(()=>{e.value=s.findIndex(t=>t==u.name)}),(t,n)=>{const _=o("router-view"),m=o("van-tab"),v=o("van-tabs");return c(),w(v,{active:e.value,"onUpdate:active":n[0]||(n[0]=a=>e.value=a),swipeable:"",sticky:""},{default:r(()=>[(c(),C(R,null,N(p,(a,d)=>l(m,{title:t.$t(a.title),to:a.path,key:d},{default:r(()=>[l(_)]),_:2},1032,["title","to"])),64))]),_:1},8,["active"])}}});export{H as default};
