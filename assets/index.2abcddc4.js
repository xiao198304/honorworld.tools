import{P as O,Q,R as S,ak as X,aw as Y,aA as Z,a3 as f,a1 as t,$ as o,a2 as a,a0 as c,W as i,G as g,a5 as x,a7 as E,Y as U,Z as w,au as j,aB as V,aC as h,aD as K,aE as M,X as ee,H as l,I as s,aF as te,a4 as C,a6 as oe,aG as ae,aH as se,aI as ne,ad as ce,aJ as ie}from"./index.3b891e7f.js";const le={class:"text-gray-600 body-font"},re={class:"float-left mt-5 ml-5"},de={key:0},ue={class:"bg-gray-100 rounded flex h-full items-center"},me={class:"title-font font-medium"},pe={key:1},_e={class:"bg-gray-100 rounded flex h-full items-center"},ve={class:"title-font font-medium mr-3"},fe={class:"float-right mt-5 mr-5"},ge={class:"ml-1 text-gray-400"},he={class:"container px-5 py-16 mx-auto"},ye={class:"text-center mb-2"},ke={class:"my-2 font-serif font-semibold text-dark-50 leading-none text-2xl"},xe={class:"mr-2"},we={class:"text-center pt-1"},Ce={class:"text-base text-gray-400 leading-relaxed mx-auto"},Se=O({__name:"index",setup(be){const{locale:A,t:b}=Q(),$=S(!1),B=[{text:"English",locale:"en-US"},{text:"\u7E41\u4F53\u4E2D\u6587",locale:"zh-TW"}],r=S(3),D=e=>r.value=e,I=e=>{A.value=e.locale,localStorage.setItem("LANG",e.locale)},{open:N}=se(),{address:d,isActivated:R,signer:q}=X(),{wallet:$e,disconnect:H}=ne(),{onActivated:L}=Y(),y=ce(),m=Z(),z=()=>{let e="/nft/callhero";y.currentRoute.value.query.redirect&&(e=y.currentRoute.value.query.redirect),y.push({path:e})};async function T(){d.value!=""&&(U({duration:0,message:b("common.Updating_data")}),await m.login(),w()),m.isvip==1&&z()}L(async({address:e})=>{await T()});async function F(){U({duration:0,forbidClick:!0,message:b("common.Operation_progress")});let e=new j(V.USDCToken.address,V.USDCToken.abi,q.value);try{let u=h.find(_=>_.itemType==r.value).price;await(await e.transfer(K,M(u.toString(),6))).wait()}catch{w(),ee("Error!")}w(),await T()}return(e,u)=>{const p=l("van-button"),_=l("van-icon"),G=l("van-popover"),P=l("van-col"),W=l("van-row"),J=l("vd-board");return s(),f(E,null,[t("section",le,[t("div",re,[o(R)?(s(),f("div",pe,[t("div",_e,[t("span",ve,a(o(te)(o(d))),1),c(p,{round:"",type:"default",size:"small",onClick:o(H),class:"text-gray-500"},{default:i(()=>[C(a(e.$t("login.disconnect")),1)]),_:1},8,["onClick"])])])):(s(),f("div",de,[t("div",ue,[t("span",me,a(e.$t("login.no_login")),1)])]))]),t("div",fe,[c(G,{placement:"bottom-end",theme:"dark",show:$.value,"onUpdate:show":u[0]||(u[0]=n=>$.value=n),actions:B,onSelect:I},{reference:i(()=>[c(_,{class:"ml-1 iconfont","class-prefix":"ali-icon",name:"lvzhou_yuyanqiehuan"}),t("span",ge,a(e.$t("common.language")),1)]),_:1},8,["show"])]),t("div",he,[t("div",ye,[c(_,{class:"iconfont text-5xl",style:{color:"#1989fa"},"class-prefix":"ali-icon",name:"tinytools"}),t("div",ke,[t("span",xe,a(e.$t("common.tiny")),1),t("span",null,a(e.$t("common.helper")),1)])]),t("div",we,[t("p",Ce,a(e.$t("login.desc")),1)]),o(d)==""?(s(),g(p,{key:0,type:"primary",class:"flex mx-auto mt-12 text-lg",onClick:o(N)},{default:i(()=>[C(a(e.$t("login.connect_wallet")),1)]),_:1},8,["onClick"])):x("",!0),o(d)!=""&&o(m).isvip==0?(s(),g(p,{key:1,type:"primary",class:"flex mx-auto mt-2 text-lg",onClick:F},{default:i(()=>{var n,v;return[C(a(e.$t("login.get_vip_1"))+a((n=o(h).find(k=>k.itemType==r.value))==null?void 0:n.description)+a(e.$t("login.get_vip_2"))+a((v=o(h).find(k=>k.itemType==r.value))==null?void 0:v.price)+a(e.$t("login.get_vip_3")),1)]}),_:1})):x("",!0),o(d)!=""&&o(m).isvip==0?(s(),g(W,{key:2,class:"pt-2"},{default:i(()=>[(s(!0),f(E,null,oe(o(h),(n,v)=>(s(),g(P,{key:v,span:"12"},{default:i(()=>[c(ie,{item:n,changevip:r.value,onChangeVipItem:D},null,8,["item","changevip"])]),_:2},1024))),128))]),_:1})):x("",!0)])]),c(J,{connectors:o(ae),dark:""},null,8,["connectors"])],64)}}});export{Se as default};
