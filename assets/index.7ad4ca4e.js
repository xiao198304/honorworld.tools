import{O as w,Q as C,ab as x,ac as y,G as c,H as a,I as u,L as i,ad as N,M as n,N as p,a1 as L,ae as M}from"./index.efe8c10c.js";const H=w({__name:"index",setup(R){const t=C(0),o=["CallHero","NftMarket","LpPools"],_=N(),r=M(),m=[{title:"tabbar.callhero",path:"/nft/callhero"},{title:"tabbar.nftmarket",path:"/nft/nftmarket"},{title:"tabbar.lppools",path:"/nft/lppools"}];x(t,(e,s)=>{r.push({name:o[e]})});const v=()=>{r.push({name:o[t.value]})};return y(()=>{t.value=o.findIndex(e=>e==_.name)}),(e,s)=>{const b=n("van-tab"),f=n("van-tabs"),d=n("van-sticky"),k=n("router-view");return p(),c(i,null,[a(d,null,{default:u(()=>[a(f,{active:t.value,"onUpdate:active":s[0]||(s[0]=l=>t.value=l),swipeable:"",sticky:"",onClickTab:v},{default:u(()=>[(p(),c(i,null,L(m,(l,h)=>a(b,{title:e.$t(l.title),key:h},null,8,["title"])),64))]),_:1},8,["active"])]),_:1}),a(k)],64)}}});export{H as default};
