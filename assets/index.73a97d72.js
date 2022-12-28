import{d as H,c as I,u as et,b as at,e as D,_ as st}from"./hero.0c2f65b9.js";import{a6 as lt,a4 as G,J as nt,$ as ot,K as C,a1 as N,M as rt,a3 as it,G as x,N as t,H as L,I as c,T as e,Y as u,U as s,P as b,X as o,V as B,Q as E,R as S,W as d,Z as F}from"./index.d71df806.js";import{n as K,q as Q,a as ct,r as ut,c as dt}from"./hero.016759d5.js";import{s as mt,a as pt,c as ft}from"./function-call.42f2315d.js";const _t="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/nftmarket/last.json",gt="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/nftmarket/logs/last.json",yt=lt("nftmarket",{state:()=>({auctionLists:[],tradeLogs:[]}),actions:{async initAuctionLists(){let M=_t+"?="+H().format("YYYYMMDDHHMM");this.auctionLists=await G(M)},async initTradeLogs(){let M=gt+"?="+H().format("YYYYMMDDHHMM"),A=await G(M),w=[];A.data.forEach(_=>{let y=1001;_.ids.length>0&&(y=_.ids[0]),_.tokens.length>0&&(y=_.tokens[0].code);let Y=parseInt((y/1e3).toString()),V=K[y].name;w.push({_id:_._id,id:_.id,auctor:_.auctor,bidder:_.bidder,bidPrice:_.bidPrice,tx:_.tx,timestamp:_.timestamp,tokens:_.tokens,ids:_.ids,amounts:_.amounts,code:y,quality:Y,name:V})}),w=w.sort(I("timestamp")),w=w.reverse(),this.tradeLogs=w}}}),ht=yt,kt={style:{width:"90%"},class:"text-gray-400 text-sm text-left"},xt={style:{width:"90%"},class:"mt-2"},vt={key:0,class:"text-orange-400 text-4xl"},bt={key:1,class:"text-fuchsia-400 text-4xl"},$t={key:2,class:"text-blue-400 text-4xl"},wt={key:3,class:"text-green-400 text-4xl"},Pt={key:4,class:"text-gray-400 text-4xl"},Tt={style:{width:"90%"},class:"text-left mt-2"},Lt={class:"text-gray-400 text-sm"},It={key:0,class:"text-black-500 text-sm ml-1"},qt={class:"text-gray-400"},Ct={class:"text-gray-400"},St={class:"text-gray-400"},Ht={class:"text-gray-400"},Mt={class:"ml-1 inline-block align-top"},At={class:"ml-1 inline-block align-top"},Yt={class:"ml-1 inline-block align-top"},Vt={class:"ml-1 inline-block align-top"},jt={class:"text-black ml-1 inline-block align-top"},Qt=nt({__name:"index",setup(M){const{t:A}=ot(),w=et(),_=at(),y=ht(),Y=C(""),V=C(""),$=C(0);let J=N({logs:5,auctionTotals:5});const W=l=>J.logs=l,U=C(!1),X=async()=>{await O(!0),mt(A("common.Refresh_succeeded")),U.value=!1};let r=N({logs:[],auctionTotals:[],buyer:[],seller:[]}),P=N({logs:[],auctionTotals:[]}),q=N({logs:0,auctionTotals:0}),j=C([{quality:0,title:"ALL",color:"black",rgb:"#1f1f1f",color_cn:"\u9ED1\u8272",name:"mynft.all_quality"}]);j.value.push(...Q);const Z=l=>{q.logs=l,l>0?P.logs=r.logs.filter(h=>h.quality==l):P.logs=r.logs},R=l=>{q.auctionTotals=l,P.auctionTotals=r.auctionTotals.filter(h=>h.quality==l)};async function O(l=!1){pt({duration:0,message:A("common.Updating_data")}),(w.hwtmcs.timestamp==0||l)&&await w.initHwtmcs(),(_.floorprice.length==0||l)&&await _.initFloorprice(),(y.auctionLists.length==0||l)&&await y.initAuctionLists(),(y.tradeLogs.length==0||l)&&await y.initTradeLogs(),P.logs=r.logs=y.tradeLogs,r.auctionTotals=tt(y.tradeLogs,y.auctionLists),P.auctionTotals=r.auctionTotals.filter(i=>i.quality==q.auctionTotals),$.value=parseInt((r.logs.reduce((i,m)=>i+parseInt(m.bidPrice),0)/1e6).toString()),V.value=H.unix(r.logs[r.logs.length-1].timestamp).format("HH:mm"),Y.value=H.unix(r.logs[0].timestamp).format("HH:mm");let h=z(r.logs,"bidder");r.buyer=h.sort(I("amount")).reverse();let n=z(r.logs,"auctor");r.seller=n.sort(I("amount")).reverse(),ft()}function tt(l,h){let n=[];return[1,2,3,4,5].forEach(m=>{ct.find(k=>k.quality==m).code.forEach(k=>{let a=l.filter(g=>g.code==k),f=h.filter(g=>g.code==k);f=f.sort(I("nowPrice")),a=a.sort(I("bidPrice")),n.push({quality:m,code:k,name:K[k].name,auctions:f.length,minPrice:f.length?parseInt(f[0].nowPrice):0,maxPrice:f.length?parseInt(f[f.length-1].nowPrice):0,sells:a.length,minPrice_sell:a.length?parseInt(a[0].bidPrice):0,maxPrice_sell:a.length?parseInt(a[a.length-1].bidPrice):0})});let p=l.filter(k=>k.quality==m),v=h.filter(k=>k.quality==m);v=v.sort(I("nowPrice")),p=p.sort(I("bidPrice")),n.push({quality:0,code:m,name:j.value.find(k=>k.quality==m).name,auctions:v.length,minPrice:v.length?parseInt(v[0].nowPrice):0,maxPrice:v.length?parseInt(v[v.length-1].nowPrice):0,sells:p.length,minPrice_sell:p.length?parseInt(p[0].bidPrice):0,maxPrice_sell:p.length?parseInt(p[p.length-1].bidPrice):0})}),n}function z(l,h){return l.reduce((i,m)=>{let T=-1;if(i.length&&(T=i.findIndex(p=>p.id==m[h].toString())),T>=0)i[T].totalnum[0]++,i[T].totalnum[m.quality]++,i[T].amount+=parseInt(m.bidPrice),i[T].items.push(m);else{let p={id:m[h].toString(),amount:0,totalnum:[0,0,0,0,0,0],items:[m]};p.totalnum[0]++,p.totalnum[m.quality]++,p.amount+=parseInt(m.bidPrice),i.push(p)}return i},[])}return rt(async()=>{await O()}),it(async()=>{}),(l,h)=>{const n=L("van-col"),i=L("van-row"),m=L("van-cell-group"),T=L("van-cell"),p=L("van-tag"),v=L("van-icon"),k=L("van-pull-refresh");return c(),x(k,{modelValue:U.value,"onUpdate:modelValue":h[0]||(h[0]=a=>U.value=a),onRefresh:X},{default:t(()=>[e(m,{inset:"",class:"mt-2"},{default:t(()=>[e(i,{class:"py-2 ml-5"},{default:t(()=>[e(n,{span:"10"},{default:t(()=>[u("div",kt,s(l.$t("nftmarket.all_amounts")),1),u("div",xt,[$.value>1e4?(c(),b("span",vt,"$"+s($.value),1)):$.value>5e3?(c(),b("span",bt,"$"+s($.value),1)):$.value>1e3?(c(),b("span",$t,"$"+s($.value),1)):$.value>500?(c(),b("span",wt,"$"+s($.value),1)):(c(),b("span",Pt,"$"+s($.value),1))]),u("div",Tt,[u("span",Lt,s(l.$t("nftmarket.list_time"))+":",1),o(r).logs.length?(c(),b("span",It,s(V.value)+"-"+s(Y.value),1)):B("",!0)])]),_:1}),e(n,{span:"14",class:"text-sm text-black-500"},{default:t(()=>[o(r).buyer.length>0?(c(),x(i,{key:0,style:{width:"90%"},justify:"space-between"},{default:t(()=>[e(n,{span:"6",class:"text-left text-gray-400"},{default:t(()=>[u("span",null,s(l.$t("nftmarket.title_max_buyer")),1)]),_:1}),e(n,{span:"10",class:"text-center"},{default:t(()=>[(c(),x(D,{address:o(r).buyer[0].id,key:"buyer"+o(r).buyer[0].id},null,8,["address"]))]),_:1}),e(n,{span:"8",class:"text-center"},{default:t(()=>[u("span",null,s(parseInt((o(r).buyer[0].amount/1e6).toString()))+"$",1)]),_:1})]),_:1})):B("",!0),o(r).seller.length>0?(c(),x(i,{key:1,style:{width:"90%"},justify:"space-between",class:"mt-2"},{default:t(()=>[e(n,{span:"6",class:"text-left text-gray-400"},{default:t(()=>[u("span",null,s(l.$t("nftmarket.title_max_seller")),1)]),_:1}),e(n,{span:"10",class:"text-center"},{default:t(()=>[(c(),x(D,{address:o(r).seller[0].id,key:"seller"+o(r).seller[0].id},null,8,["address"]))]),_:1}),e(n,{span:"8",class:"text-center"},{default:t(()=>[u("span",null,s(parseInt((o(r).seller[0].amount/1e6).toString()))+"$",1)]),_:1})]),_:1})):B("",!0),e(i,{style:{width:"90%"},justify:"space-between",class:"mt-2"},{default:t(()=>[e(n,{span:"6",class:"text-left text-gray-400"},{default:t(()=>[u("span",null,s(l.$t("nftmarket.list_account")),1)]),_:1}),e(n,{span:"9",class:"text-center"},{default:t(()=>[u("span",null,s(o(r).buyer.length),1),u("span",qt,s(l.$t("nftmarket.list_buyer")),1)]),_:1}),e(n,{span:"9",class:"text-center"},{default:t(()=>[u("span",null,s(o(r).seller.length),1),u("span",Ct,s(l.$t("nftmarket.list_seller")),1)]),_:1})]),_:1}),e(i,{style:{width:"90%"},justify:"space-between",class:"mt-2"},{default:t(()=>[e(n,{span:"6",class:"text-left text-gray-400"},{default:t(()=>[u("span",null,s(l.$t("nftmarket.numbers")),1)]),_:1}),e(n,{span:"9",class:"text-center"},{default:t(()=>[u("span",null,s(o(r).logs.length),1),u("span",St,s(l.$t("nftmarket.sells")),1)]),_:1}),e(n,{span:"9",class:"text-center"},{default:t(()=>[u("span",null,s(o(y).auctionLists.length),1),u("span",Ht,s(l.$t("nftmarket.auctions")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{inset:"",class:"mt-5"},{default:t(()=>[e(T,{title:l.$t("nftmarket.market_overview"),icon:"label-o"},null,8,["title"]),e(i,{justify:"center",class:"py-2 text-center"},{default:t(()=>[(c(!0),b(S,null,E(o(j),(a,f)=>(c(),x(p,{key:f,class:"mr-4",color:a.rgb,plain:a.quality!=o(q).auctionTotals,onClick:g=>R(a.quality)},{default:t(()=>[d(s(l.$t(a.name)),1)]),_:2},1032,["color","plain","onClick"]))),128))]),_:1}),e(i,{justify:"center",class:"py-2 text-center text-sm text-gray-500"},{default:t(()=>[e(n,{span:"6"},{default:t(()=>[d(s(l.$t("nftmarket.list_name")),1)]),_:1}),e(n,{span:"4"},{default:t(()=>[d(s(l.$t("nftmarket.auctions")),1)]),_:1}),e(n,{span:"5"},{default:t(()=>[d(s(l.$t("nftmarket.auction_minprice")),1)]),_:1}),e(n,{span:"4"},{default:t(()=>[d(s(l.$t("nftmarket.sells")),1)]),_:1}),e(n,{span:"5"},{default:t(()=>[d(s(l.$t("nftmarket.sell_minprice")),1)]),_:1})]),_:1}),(c(!0),b(S,null,E(o(P).auctionTotals,(a,f)=>(c(),x(i,{key:"auctionTotals"+f+a.code,justify:"center",class:"py-2 text-center text-sm"},{default:t(()=>[a.quality==0?(c(),x(n,{key:0,span:"6",class:F("text-"+o(Q).find(g=>g.quality==a.code).color+"-500")},{default:t(()=>[d(s(l.$t(a.name)),1)]),_:2},1032,["class"])):(c(),x(n,{key:1,span:"6",class:F("text-"+o(Q).find(g=>g.quality==a.quality).color+"-500")},{default:t(()=>[d(s(l.$t(a.name)),1)]),_:2},1032,["class"])),e(n,{span:"4"},{default:t(()=>[d(s(a.auctions),1)]),_:2},1024),e(n,{span:"5"},{default:t(()=>[d(s(a.minPrice/1e6)+"$ ",1)]),_:2},1024),e(n,{span:"4"},{default:t(()=>[d(s(a.sells),1)]),_:2},1024),e(n,{span:"5"},{default:t(()=>[d(s(a.minPrice_sell/1e6)+"$ ",1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),(c(),x(st,{title:l.$t("nftmarket.latest_transaction"),listLength:o(P).logs.length,onChangeCount:W,key:"logs"+o(P).logs.length},{default:t(()=>[e(i,{justify:"center",class:"py-2 text-center"},{default:t(()=>[(c(!0),b(S,null,E(o(j),(a,f)=>(c(),x(p,{key:f,class:"mr-4",color:a.rgb,plain:a.quality!=o(q).logs,onClick:g=>Z(a.quality)},{default:t(()=>[d(s(l.$t(a.name)),1)]),_:2},1032,["color","plain","onClick"]))),128))]),_:1}),e(i,{justify:"center",class:"py-2 text-center"},{default:t(()=>[e(n,{span:"3",class:"text-base text-gray-500"},{default:t(()=>[d(s(l.$t("nftmarket.list_time")),1)]),_:1}),e(n,{span:"5",class:"text-base text-gray-500"},{default:t(()=>[d(s(l.$t("nftmarket.list_seller")),1)]),_:1}),e(n,{span:"6",class:"text-base text-gray-500"},{default:t(()=>[d(s(l.$t("nftmarket.list_name")),1)]),_:1}),e(n,{span:"5",class:"text-base text-gray-500"},{default:t(()=>[d(s(l.$t("nftmarket.list_amount")),1)]),_:1}),e(n,{span:"5",class:"text-base text-gray-500"},{default:t(()=>[d(s(l.$t("nftmarket.list_buyer")),1)]),_:1})]),_:1}),(c(!0),b(S,null,E(o(P).logs.slice(0,o(J).logs),(a,f)=>(c(),b(S,{key:"logs"+f+a._id},[e(i,{justify:"center",class:"py-2 text-center text-sm"},{default:t(()=>[e(n,{span:"3"},{default:t(()=>[d(s(o(H)(a.timestamp*1e3).format("HH:mm")),1)]),_:2},1024),e(n,{span:"5"},{default:t(()=>[(c(),x(D,{address:a.auctor,key:"logs"+f+a._id},null,8,["address"]))]),_:2},1024),e(n,{span:"6",class:F("text-"+o(Q).find(g=>g.quality==a.quality).color+"-500")},{default:t(()=>[d(s(l.$t(a.name)),1)]),_:2},1032,["class"]),e(n,{span:"5",class:"text-black"},{default:t(()=>[d(s(parseInt(a.bidPrice)/1e6)+"$ ",1)]),_:2},1024),e(n,{span:"5"},{default:t(()=>[(c(),x(D,{address:a.bidder,key:"logs"+f+a._id},null,8,["address"]))]),_:2},1024)]),_:2},1024),a.tokens.length>0?(c(),x(i,{key:0,justify:"space-around",class:"text-sm text-gray-500 pb-2"},{default:t(()=>[e(n,{span:"5"},{default:t(()=>[e(v,{name:"/static/images/race/"+a.tokens[0].race+".png"},null,8,["name"]),u("span",Mt,s(l.$t(o(ut).find(g=>g.value==a.tokens[0].race).text)),1)]),_:2},1024),e(n,{span:"4"},{default:t(()=>[e(v,{name:"/static/images/class/"+a.tokens[0].class+".png"},null,8,["name"]),u("span",At,s(l.$t(o(dt).find(g=>g.value==a.tokens[0].class).text)),1)]),_:2},1024),e(n,{span:"4"},{default:t(()=>[e(v,{name:"/static/images/item/top_icon2.png"}),u("span",Yt,s(a.tokens[0].power),1)]),_:2},1024),e(n,{span:"4"},{default:t(()=>[u("span",Vt,"Lv."+s(a.tokens[0].level),1)]),_:2},1024),e(n,{span:"5"},{default:t(()=>[e(v,{name:"/static/images/item/top_icon2.png"}),u("span",jt,s(a.tokens[0].lvPower),1)]),_:2},1024)]),_:2},1024)):B("",!0)],64))),128))]),_:1},8,["title","listLength"]))]),_:1},8,["modelValue"])}}});export{Qt as default};
