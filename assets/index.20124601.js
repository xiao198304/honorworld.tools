import{F as R,M as z,N as H,ai as I,ak as L,an as W,W as i,U as t,T as a,R as r,V as n,S as s,G as x,Y as b,$ as G,a2 as O,ao as P,ap as M,aq as _,H as m,ae as X,I as o,ar as Y,X as y,as as j,at as J,au as K}from"./index.6895eac1.js";import{a as Q,c as k,s as Z}from"./function-call.908f5ca5.js";const ee={address:"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",abi:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"},{inputs:[{name:"_initialAmount",type:"uint256"},{name:"_tokenName",type:"string"},{name:"_decimalUnits",type:"uint8"},{name:"_tokenSymbol",type:"string"}],payable:!1,type:"constructor"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_extraData",type:"bytes"}],name:"approveAndCall",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,type:"function"}]},w={USDCToken:ee},te={class:"text-gray-600 body-font"},ne={class:"float-right mt-5 mr-5"},se={class:"ml-1 text-gray-400"},ae={class:"container px-5 py-20 mx-auto"},oe={class:"text-center mb-5"},le={class:"my-5 font-serif font-semibold text-dark-50 leading-none text-2xl"},ie={class:"mr-2"},re={class:"text-center mb-5 pt-3"},ce={class:"text-base text-gray-400 leading-relaxed mx-auto"},pe={class:"flex flex-wrap -mx-2"},ue={key:0,class:"p-2 w-full"},de={class:"bg-gray-100 rounded flex p-4 h-full items-center"},me={class:"title-font font-medium"},ye={key:1,class:"p-2 w-full"},fe={class:"bg-gray-100 rounded flex p-4 h-full items-center"},_e={class:"title-font font-medium mr-3"},ve={class:"flex flex-wrap -mx-2"},ge={key:0,class:"p-2 w-full"},he={class:"bg-gray-100 rounded flex p-4 h-full items-center"},xe={class:"title-font font-medium text-gray-500"},be={key:1,class:"p-2 w-full"},ke={class:"bg-gray-100 rounded flex p-4 h-full items-center"},we={class:"title-font font-medium mr-3"},Te=R({__name:"index",setup(Ce){const{locale:C,t:S}=z(),v=H(!1),$=[{text:"English",locale:"en-US"},{text:"\u7E41\u4F53\u4E2D\u6587",locale:"zh-TW"}],A=e=>{C.value=e.locale,localStorage.setItem("LANG",e.locale)},{open:T}=J(),{address:c,isActivated:D,signer:U}=I(),{wallet:Se,disconnect:E}=K(),{onActivated:B}=L(),f=X(),p=W(),g=()=>{let e="/nft/callhero";f.currentRoute.value.query.redirect&&(e=f.currentRoute.value.query.redirect),f.push({path:e})};async function h(){c.value!=""&&await p.login(),p.isvip==1&&g()}B(async({address:e})=>{await h()});async function N(){Q({duration:0,forbidClick:!0,message:S("common.Operation_progress")});let e=new O(w.USDCToken.address,w.USDCToken.abi,U.value);try{await(await e.transfer(P,M(_.toString(),6))).wait()}catch{k(),Z("Error!")}k(),await h()}return(e,u)=>{const l=m("van-icon"),F=m("van-popover"),d=m("van-button"),V=m("vd-board");return o(),i(G,null,[t("section",te,[t("div",ne,[a(F,{placement:"bottom-end",theme:"dark",show:v.value,"onUpdate:show":u[0]||(u[0]=q=>v.value=q),actions:$,onSelect:A},{reference:r(()=>[a(l,{class:"ml-1 iconfont","class-prefix":"ali-icon",name:"lvzhou_yuyanqiehuan"}),t("span",se,n(e.$t("common.language")),1)]),_:1},8,["show"])]),t("div",ae,[t("div",oe,[a(l,{class:"iconfont text-5xl",style:{color:"#1989fa"},"class-prefix":"ali-icon",name:"tinytools"}),t("div",le,[t("span",ie,n(e.$t("common.tiny")),1),t("span",null,n(e.$t("common.helper")),1)])]),t("div",re,[t("p",ce,n(e.$t("login.desc_1"))+n(s(_).toString())+n(e.$t("login.desc_2")),1)]),t("div",pe,[s(D)?(o(),i("div",ye,[t("div",fe,[a(l,{name:"passed",class:"mr-5 text-green-600 text-2xl title-font"}),t("span",_e,n(s(Y)(s(c))),1),a(d,{round:"",type:"default",size:"small",onClick:s(E),class:"text-gray-500"},{default:r(()=>[y(n(e.$t("login.disconnect")),1)]),_:1},8,["onClick"])])])):(o(),i("div",ue,[t("div",de,[a(l,{name:"warning-o",class:"mr-5 text-red-600 text-2xl title-font"}),t("span",me,n(e.$t("login.no_login")),1)])]))]),t("div",ve,[s(p).isvip==0?(o(),i("div",ge,[t("div",he,[a(l,{name:"vip-card-o",class:"mr-5 text-red-600 text-2xl title-font"}),t("span",xe,n(e.$t("login.need_pay")),1)])])):(o(),i("div",be,[t("div",ke,[a(l,{name:"passed",class:"mr-5 text-green-600 text-2xl title-font"}),t("span",we,n(e.$t("login.is_vip")),1),a(d,{type:"primary",onClick:g},{default:r(()=>[y(n(e.$t("login.start")),1)]),_:1})])]))]),s(c)==""?(o(),x(d,{key:0,type:"primary",class:"flex mx-auto mt-16 text-lg",onClick:s(T)},{default:r(()=>[y(n(e.$t("login.connect_wallet")),1)]),_:1},8,["onClick"])):b("",!0),s(c)!=""&&s(p).isvip==0?(o(),x(d,{key:1,type:"primary",class:"flex mx-auto mt-16 text-lg",onClick:N},{default:r(()=>[y(n(e.$t("login.get_vip_1"))+n(s(_).toString())+n(e.$t("login.get_vip_2")),1)]),_:1})):b("",!0)])]),a(V,{connectors:s(j),dark:""},null,8,["connectors"])],64)}}});export{Te as default};
