import{P as f,R as b,aa as k,ab as h,G as w,W as r,ac as x,H as o,I as c,a3 as C,a6 as R,a7 as B,ad as N,a0 as l}from"./index.0fde2e5f.js";const I=f({__name:"index",setup(y){const e=b(0),s=["CallHero","NftMarket"],u=x(),i=N(),p=[{title:"tabbar.callhero",path:"/nft/callhero"},{title:"tabbar.nftmarket",path:"/nft/nftmarket"}];return k(e,(t,n)=>{i.push({name:s[t]})}),h(()=>{e.value=s.findIndex(t=>t==u.name)}),(t,n)=>{const _=o("router-view"),m=o("van-tab"),v=o("van-tabs");return c(),w(v,{active:e.value,"onUpdate:active":n[0]||(n[0]=a=>e.value=a),swipeable:"",sticky:""},{default:r(()=>[(c(),C(B,null,R(p,(a,d)=>l(m,{title:t.$t(a.title),to:a.path,key:d},{default:r(()=>[l(_)]),_:2},1032,["title","to"])),64))]),_:1},8,["active"])}}});export{I as default};
