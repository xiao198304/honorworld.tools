import{O as F,P as Q,Q as S,an as J,aG as K,aL as X,ac as Y,G as f,J as t,Z as o,K as s,H as c,I as i,V as g,a0 as w,L as E,X as U,Y as C,aE as Z,aM as V,aN as h,aO as j,aP as ee,W as te,M as l,N as a,aQ as oe,$ as b,a1 as se,aR as ae,aS as ne,aT as ce,aU as ie,ae as le}from"./index.921ff005.js";const re={class:"text-gray-600 body-font"},de={class:"float-left mt-5 ml-5"},ue={key:0},me={class:"bg-gray-100 rounded flex h-full items-center"},pe={class:"title-font font-medium"},_e={key:1},ve={class:"bg-gray-100 rounded flex h-full items-center"},fe={class:"title-font font-medium mr-3"},ge={class:"float-right mt-5 mr-5"},he={class:"ml-1 text-gray-400"},ye={class:"container px-5 py-16 mx-auto"},ke={class:"text-center mb-2"},xe={class:"my-2 font-serif font-semibold text-dark-50 leading-none text-2xl"},we={class:"mr-2"},Ce={class:"text-center pt-1"},be={class:"text-base text-gray-400 leading-relaxed mx-auto"},Ee=F({__name:"index",setup(Te){const{locale:N,t:T}=Q(),$=S(!1),L=[{text:"English",locale:"en-US"},{text:"\u7E41\u4F53\u4E2D\u6587",locale:"zh-TW"}],r=S(3),A=e=>r.value=e,B=e=>{N.value=e.locale,localStorage.setItem("LANG",e.locale)},{open:D}=ce(),{address:d,isActivated:I,signer:R}=J(),{wallet:$e,disconnect:q}=ie(),{onActivated:P}=K(),y=le(),m=X(),z=()=>{let e="/home";y.currentRoute.value.query.redirect&&(e=y.currentRoute.value.query.redirect),y.push({path:e})};async function k(){d.value!=""&&(U({duration:0,message:T("common.Updating_data")}),await m.login(),C()),m.isvip==1&&z()}P(async({address:e})=>{await k()}),Y(async()=>{await k()});async function G(){U({duration:0,forbidClick:!0,message:T("common.Operation_progress")});let e=new Z(V.USDCToken.address,V.USDCToken.abi,R.value);try{let u=h.find(_=>_.itemType==r.value).price;await(await e.transfer(j,ee(u.toString(),6))).wait()}catch{C(),te("Error!")}C(),await k()}return(e,u)=>{const p=l("van-button"),_=l("van-icon"),H=l("van-popover"),M=l("van-col"),O=l("van-row"),W=l("vd-board");return a(),f(E,null,[t("section",re,[t("div",de,[o(I)?(a(),f("div",_e,[t("div",ve,[t("span",fe,s(o(oe)(o(d))),1),c(p,{round:"",type:"default",size:"small",onClick:o(q),class:"text-gray-500"},{default:i(()=>[b(s(e.$t("login.disconnect")),1)]),_:1},8,["onClick"])])])):(a(),f("div",ue,[t("div",me,[t("span",pe,s(e.$t("login.no_login")),1)])]))]),t("div",ge,[c(H,{placement:"bottom-end",theme:"dark",show:$.value,"onUpdate:show":u[0]||(u[0]=n=>$.value=n),actions:L,onSelect:B},{reference:i(()=>[c(_,{class:"ml-1 iconfont","class-prefix":"ali-icon",name:"lvzhou_yuyanqiehuan"}),t("span",he,s(e.$t("common.language")),1)]),_:1},8,["show"])]),t("div",ye,[t("div",ke,[c(_,{class:"iconfont text-5xl",style:{color:"#1989fa"},"class-prefix":"ali-icon",name:"tinytools"}),t("div",xe,[t("span",we,s(e.$t("common.tiny")),1),t("span",null,s(e.$t("common.helper")),1)])]),t("div",Ce,[t("p",be,s(e.$t("login.desc")),1)]),o(d)==""?(a(),g(p,{key:0,type:"primary",class:"flex mx-auto mt-12 text-lg",onClick:o(D)},{default:i(()=>[b(s(e.$t("login.connect_wallet")),1)]),_:1},8,["onClick"])):w("",!0),o(d)!=""&&o(m).isvip==0?(a(),g(p,{key:1,type:"primary",class:"flex mx-auto mt-2 text-lg",onClick:G},{default:i(()=>{var n,v;return[b(s(e.$t("login.get_vip_1"))+s((n=o(h).find(x=>x.itemType==r.value))==null?void 0:n.description)+s(e.$t("login.get_vip_2"))+s((v=o(h).find(x=>x.itemType==r.value))==null?void 0:v.price)+s(e.$t("login.get_vip_3")),1)]}),_:1})):w("",!0),o(d)!=""&&o(m).isvip==0?(a(),g(O,{key:2,class:"pt-2"},{default:i(()=>[(a(!0),f(E,null,se(o(h),(n,v)=>(a(),g(M,{key:v,span:"12"},{default:i(()=>[c(ae,{item:n,changevip:r.value,onChangeVipItem:A},null,8,["item","changevip"])]),_:2},1024))),128))]),_:1})):w("",!0)])]),c(W,{connectors:o(ne),dark:""},null,8,["connectors"])],64)}}});export{Ee as default};
