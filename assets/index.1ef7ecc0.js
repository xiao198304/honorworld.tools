import{O as Z,P as z,Q as L,R as C,S as g,T as tt,U as et,V as m,I as t,W as st,X as at,Y as lt,M as $,N as o,Z as d,H as s,J as u,K as e,G as _,$ as r,a0 as T,a1 as V,a2 as J,L as N}from"./index.9a11cad6.js";import{_ as M}from"./DataCell.vue_vue_type_script_setup_true_lang.867e30cf.js";import{_ as W}from"./AddressLabel.vue_vue_type_style_index_0_lang.ed54bf0f.js";import{u as nt,H as q,p as E,a as D,b as B,c as ot,d as rt,e as it}from"./pools.6637579a.js";import{u as dt}from"./honor.68c47e8a.js";const pt={style:{width:"90%"},class:"text-gray-400 text-sm text-left"},ut={style:{width:"90%"},class:"mt-2"},ct={key:0,class:"text-orange-400 text-4xl"},mt={key:1,class:"text-fuchsia-400 text-4xl"},_t={key:2,class:"text-blue-400 text-4xl"},ft={key:3,class:"text-green-400 text-4xl"},ht={key:4,class:"text-gray-400 text-4xl"},yt={style:{width:"90%"},class:"text-left mt-2"},wt={class:"text-gray-400 text-sm"},xt={class:"text-black-500 text-sm ml-1"},gt={style:{width:"90%"},class:"text-left mt-2"},kt={class:"text-gray-400 text-sm"},$t={class:"text-black-500 text-sm ml-1"},vt={key:0},Ht={key:0,class:"ml-1 text-green-500"},St={key:1,class:"ml-1 text-red-500"},bt={key:2,class:"ml-1 text-gray-500"},Pt={key:1,class:"text-center text-sm text-gray-500"},Et={key:0},Nt=Z({__name:"index",setup(Ft){const{t:j}=z(),k=nt(),p=dt(),y=L(0),h=C({top:[],historytop:[],last:[]}),v=L([]);let H=C({top:5,historytop:5,last:5});const O=l=>H.top=l,R=l=>H.last=l;let A=C({top:"1",historytop:"1"}),G=g.filters.Deposit(null,q),K=g.filters.Withdraw(null,q);const F=L(!1),Q=async()=>{await U(!0),st(j("common.Refresh_succeeded")),F.value=!1};tt(async()=>{await U()}),et(async()=>{g.removeAllListeners()});const U=async(l=!1)=>{at({duration:0,message:j("common.Updating_data")}),(p.hwtmcs.timestamp==0||l)&&await p.initHwtmcs(),y.value=Math.floor(p.hwtmcs.HwtEthPools.lp.totalSupply*p.hwtmcs.HwtEthPools.lp.price),(JSON.stringify(k.hwtethlpstark.address)=="{}"||l)&&await k.initHwtethlpStarkAddress();let i=k.hwtethlpstark.address.data;await S(i),lt();let a=[],c=k.hwtethlpstark.address.endBlock+1,b=await g.queryFilter(G,c,"latest");if(b.length>0){let w=E(b,"deposit");a.push(...w)}let P=await g.queryFilter(K,c,"latest");if(P.length>0){let w=E(P,"withdraw");a.push(...w)}let I=D(a);i.push(...I),i=B(i),await S(i),g.on("Deposit",async w=>{let n=E([w],"deposit"),x=D(n);i.push(...x),i=B(i),await S(i)}),g.on("Withdraw",async w=>{let n=E([w],"withdraw"),x=D(n);i.push(...x),i=B(i),await S(i)})},S=async l=>{l=ot(l,k.hwtethlpstark.address.endtimestamp,k.hwtethlpstark.address.endBlock),v.value=await rt(l),h.top=l.filter(i=>i.index<=50),h.historytop=l.filter(i=>i.index>50),h.last=it(l,50)};return(l,i)=>{const a=$("van-col"),c=$("van-row"),b=$("van-cell-group"),P=$("van-collapse-item"),I=$("van-collapse"),w=$("van-pull-refresh");return o(),m(w,{modelValue:F.value,"onUpdate:modelValue":i[1]||(i[1]=n=>F.value=n),onRefresh:Q},{default:t(()=>[d(p).hwtmcs.timestamp!=0?(o(),m(b,{key:0,inset:"",class:"mt-2"},{default:t(()=>[s(c,{class:"py-2 ml-5"},{default:t(()=>[s(a,{span:"12"},{default:t(()=>[u("div",pt,e(l.$t("farm.hwtethlp_amounts")),1),u("div",ut,[y.value>1e4?(o(),_("span",ct,"$"+e(y.value),1)):y.value>5e3?(o(),_("span",mt,"$"+e(y.value),1)):y.value>1e3?(o(),_("span",_t,"$"+e(y.value),1)):y.value>500?(o(),_("span",ft,"$"+e(y.value),1)):(o(),_("span",ht,"$"+e(y.value),1))])]),_:1}),s(a,{span:"12"},{default:t(()=>[u("div",yt,[u("span",wt,e(l.$t("farm.hwt_amount"))+":",1),u("span",xt,e(parseFloat(d(p).hwtmcs.HwtEthPools.balance.hwt.toString()).toFixed(2)),1)]),u("div",gt,[u("span",kt,e(l.$t("farm.weth_amount"))+":",1),u("span",$t,e(parseFloat(d(p).hwtmcs.HwtEthPools.balance.weth.toString()).toFixed(2)),1)])]),_:1})]),_:1}),s(c,{style:{width:"90%"},justify:"space-around",class:"text-sm text-center text-gray-400 py-1"},{default:t(()=>[s(a,{span:"6",class:"text-gray-400"},{default:t(()=>[r(e(l.$t("farm.lp_name")),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(l.$t("farm.lp_amount")),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(l.$t("farm.lp_price")),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(l.$t("farm.lp_proportion")),1)]),_:1})]),_:1}),s(c,{style:{width:"90%"},justify:"space-around",class:"text-sm text-center py-1"},{default:t(()=>[s(a,{span:"6",class:"text-gray-400"},{default:t(()=>[u("span",null,e(l.$t("farm.lp_offical")),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(parseInt(d(p).hwtmcs.HwtEthPools.lp.lp_offical.toString())),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(parseInt((d(p).hwtmcs.HwtEthPools.lp.lp_offical*d(p).hwtmcs.HwtEthPools.lp.price).toString()))+"$",1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(parseFloat((100*d(p).hwtmcs.HwtEthPools.lp.lp_offical/d(p).hwtmcs.HwtEthPools.lp.totalSupply).toString()).toFixed(2))+"%",1)]),_:1})]),_:1}),s(c,{style:{width:"90%"},justify:"space-around",class:"text-sm text-center py-1"},{default:t(()=>[s(a,{span:"6",class:"text-gray-400"},{default:t(()=>[u("span",null,e(l.$t("farm.lp_stark")),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(parseInt(d(p).hwtmcs.HwtEthPools.lp.lp_stark.toString())),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(parseInt((d(p).hwtmcs.HwtEthPools.lp.lp_stark*d(p).hwtmcs.HwtEthPools.lp.price).toString()))+"$",1)]),_:1}),s(a,{span:"6"},{default:t(()=>[u("span",null,e(parseFloat((100*d(p).hwtmcs.HwtEthPools.lp.lp_stark/d(p).hwtmcs.HwtEthPools.lp.totalSupply).toString()).toFixed(2))+"%",1)]),_:1})]),_:1})]),_:1})):T("",!0),(o(),m(M,{title:l.$t("farm.hwteth_lp_stark_last_actions"),listLength:h.last.length,onChangeCount:R,key:"last"+h.last.length},{default:t(()=>[s(c,{justify:"center",class:"my-2 text-center text-base text-gray-500"},{default:t(()=>[s(a,{span:"3"},{default:t(()=>[r(e(l.$t("farm.list_time")),1)]),_:1}),s(a,{span:"3"},{default:t(()=>[r(e(l.$t("farm.list_index")),1)]),_:1}),s(a,{span:"6"},{default:t(()=>[r(e(l.$t("farm.list_address")),1)]),_:1}),s(a,{span:"3"},{default:t(()=>[r(e(l.$t("farm.list_actions")),1)]),_:1}),s(a,{span:"4"},{default:t(()=>[r(e(l.$t("farm.list_LP")),1)]),_:1}),s(a,{span:"5"},{default:t(()=>[r(e(l.$t("farm.list_amount")),1)]),_:1})]),_:1}),(o(!0),_(N,null,V(h.last.slice(0,d(H).last),(n,x)=>(o(),m(c,{class:"py-2 text-center text-sm",key:"lastevent"+n.blockHash+x*1e3+n.type},{default:t(()=>[s(a,{span:"3"},{default:t(()=>[v.value.length>0?(o(),_("span",vt,e(d(J).unix(v.value.find(f=>f.blockNumber==n.blockNumber).timestamp).format("HH:mm")),1)):T("",!0)]),_:2},1024),s(a,{span:"3"},{default:t(()=>[r(e(h.top.findIndex(f=>f.user==n.user)!=-1?h.top.find(f=>f.user==n.user).index:"-"),1)]),_:2},1024),s(a,{span:"6"},{default:t(()=>[(o(),m(W,{address:n.user,key:"last"+n.user+x*1e3+n.blockHash},null,8,["address"]))]),_:2},1024),n.type=="deposit"?(o(),m(a,{key:0,span:"3",class:"text-green-500 text-center"},{default:t(()=>[r(e(l.$t("farm.deposit")),1)]),_:1})):(o(),m(a,{key:1,span:"3",class:"text-red-500 text-center"},{default:t(()=>[r(e(l.$t("farm.withdraw")),1)]),_:1})),s(a,{span:"4"},{default:t(()=>[r(e(parseFloat(n.amount.toString()).toFixed(2)),1)]),_:2},1024),s(a,{span:"5"},{default:t(()=>[r(e(parseInt((parseFloat(n.amount)*d(p).hwtmcs.HwtEthPools.lp.price).toString()))+"$",1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["title","listLength"])),(o(),m(M,{title:l.$t("farm.hwteth_lp_stark_topaddress_50"),listLength:h.top.length,onChangeCount:O,key:"top"+h.top.length},{default:t(()=>[s(c,{justify:"center",class:"my-2 text-center"},{default:t(()=>[s(a,{span:"4",class:"text-base text-gray-500"},{default:t(()=>[r(e(l.$t("farm.list_index")),1)]),_:1}),s(a,{span:"8",class:"text-base text-gray-500"},{default:t(()=>[r(e(l.$t("farm.list_address")),1)]),_:1}),s(a,{span:"5",class:"text-base text-gray-500"},{default:t(()=>[r(e(l.$t("farm.list_lpamount")),1)]),_:1}),s(a,{span:"7",class:"text-base text-gray-500"},{default:t(()=>[r(e(l.$t("farm.list_trends")),1)]),_:1})]),_:1}),s(I,{modelValue:d(A).top,"onUpdate:modelValue":i[0]||(i[0]=n=>d(A).top=n),accordion:""},{default:t(()=>[(o(!0),_(N,null,V(h.top.slice(0,d(H).top),(n,x)=>(o(),m(P,{key:"top"+n.user+x*1e3+n.actions[0],name:n.index.toString(),"is-link":n.events.length>0},{title:t(()=>[s(c,null,{default:t(()=>[s(a,{span:"8"},{default:t(()=>[r(e(n.index),1)]),_:2},1024),s(a,{span:"16"},{default:t(()=>[(o(),m(W,{address:n.user,key:"top"+n.user+x*1e3+n.actions[0]},null,8,["address"]))]),_:2},1024)]),_:2},1024)]),value:t(()=>[s(c,null,{default:t(()=>[s(a,{span:"18",class:"text-black text-sm text-left"},{default:t(()=>[r(e(parseInt(n.amount.toString()))+"/("+e(parseInt((n.amount*d(p).hwtmcs.HwtEthPools.lp.price).toString()))+"$) ",1)]),_:2},1024),s(a,{span:"6",class:"text-sm text-left"},{default:t(()=>[n.historyIndex-n.index>0?(o(),_("span",Ht,"+"+e(n.historyIndex-n.index),1)):n.historyIndex-n.index<0?(o(),_("span",St,e(n.historyIndex-n.index),1)):(o(),_("span",bt,"-"))]),_:2},1024)]),_:2},1024)]),default:t(()=>[n.events.length>0?(o(),m(c,{key:0,class:"pb-2 text-center"},{default:t(()=>[s(a,{span:"6"},{default:t(()=>[r(e(l.$t("farm.list_time")),1)]),_:1}),s(a,{span:"4"},{default:t(()=>[r(e(l.$t("farm.list_actions")),1)]),_:1}),s(a,{span:"7"},{default:t(()=>[r(e(l.$t("farm.list_LP")),1)]),_:1}),s(a,{span:"7"},{default:t(()=>[r(e(l.$t("farm.list_amount")),1)]),_:1})]),_:1})):(o(),_("div",Pt,e(l.$t("farm.no_actions_tips")),1)),(o(!0),_(N,null,V(n.events,(f,X)=>(o(),m(c,{class:"py-2 text-center text-sm",key:"topevent"+f.blockHash+X*1e3+f.type},{default:t(()=>[s(a,{span:"6"},{default:t(()=>[v.value.length>0?(o(),_("span",Et,e(d(J).unix(v.value.find(Y=>Y.blockNumber==f.blockNumber).timestamp).format("MM-DD HH:mm")),1)):T("",!0)]),_:2},1024),f.type=="deposit"?(o(),m(a,{key:0,span:"4",class:"text-green-500 text-center"},{default:t(()=>[r(e(l.$t("farm.deposit")),1)]),_:1})):(o(),m(a,{key:1,span:"4",class:"text-red-500 text-center"},{default:t(()=>[r(e(l.$t("farm.withdraw")),1)]),_:1})),s(a,{span:"7"},{default:t(()=>[r(e(parseFloat(f.amount.toString()).toFixed(2)),1)]),_:2},1024),s(a,{span:"7"},{default:t(()=>[r(e(parseInt((parseFloat(f.amount)*d(p).hwtmcs.HwtEthPools.lp.price).toString()))+"$",1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["name","is-link"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["title","listLength"]))]),_:1},8,["modelValue"])}}});export{Nt as default};
