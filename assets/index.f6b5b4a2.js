import{J as S,ab as A,af as U,ai as T,N as a,R as e,X as t,M as n,O as B,L as p,G as f,P as _,Y as N,a1 as F,aj as V,ak as E,H as u,al as L,I as s,am as H,an as R,Z as d,ao as G}from"./index.5dfdbaa3.js";import{s as I,c as O}from"./function-call.15610028.js";const P={address:"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",abi:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"},{inputs:[{name:"_initialAmount",type:"uint256"},{name:"_tokenName",type:"string"},{name:"_decimalUnits",type:"uint8"},{name:"_tokenSymbol",type:"string"}],payable:!1,type:"constructor"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_extraData",type:"bytes"}],name:"approveAndCall",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,type:"function"}]},x={USDCToken:P},j={class:"text-gray-600 body-font"},J={class:"container px-5 py-20 mx-auto"},M=e("div",{class:"text-center mb-5"},[e("h1",{class:"sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"}," Login "),e("p",{class:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"}," Reward more than 9 USDC in the last 24 hours. ")],-1),X={class:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"},Y={key:0,class:"p-2 sm:w-1/2 w-full"},Z={class:"bg-gray-100 rounded flex p-4 h-full items-center"},q=e("span",{class:"title-font font-medium"},"Account not logged in",-1),z={key:1,class:"p-2 sm:w-1/2 w-full"},K={class:"bg-gray-100 rounded flex p-4 h-full items-center"},Q={class:"title-font font-medium"},W={class:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"},$={key:0,class:"p-2 sm:w-1/2 w-full"},ee={class:"bg-gray-100 rounded flex p-4 h-full items-center"},te=e("span",{class:"title-font font-medium"},"need pay 9 USDC to Developer",-1),se={key:1,class:"p-2 sm:w-1/2 w-full"},ne={class:"bg-gray-100 rounded flex p-4 h-full items-center"},ae=d("Start"),oe=d(" connect wallet "),ie=d(" Get VIP (pay 9 USDC) "),pe=S({__name:"index",setup(le){const{open:v}=G(),{address:o,isActivated:b,signer:g}=A(),{onActivated:h}=U(),w=L(),i=T(),m=()=>{w.push({name:"Nft"})};async function y(){o.value!=""&&await i.login(),i.isvip==1&&m()}h(async({address:r})=>{console.log("activate: ",r),await y()});async function k(){I({duration:0,forbidClick:!0,message:"\u64CD\u4F5C\u8FDB\u884C\u4E2D..."}),await(await new F(x.USDCToken.address,x.USDCToken.abi,g.value).transfer(V,E("9.0",6),{gasLimit:5e5})).wait(),O(),await y()}return(r,C)=>{const l=u("van-icon"),c=u("van-button"),D=u("vd-board");return s(),a(N,null,[e("section",j,[e("div",J,[M,e("div",X,[t(b)?(s(),a("div",z,[e("div",K,[n(l,{name:"passed",class:"mr-5 text-green-600 text-2xl title-font"}),e("span",Q,B(t(H)(t(o))),1)])])):(s(),a("div",Y,[e("div",Z,[n(l,{name:"warning-o",class:"mr-5 text-red-600 text-2xl title-font"}),q])]))]),e("div",W,[t(i).isvip==0?(s(),a("div",$,[e("div",ee,[n(l,{name:"vip-card-o",class:"mr-5 text-red-600 text-2xl title-font"}),te])])):(s(),a("div",se,[e("div",ne,[n(l,{name:"passed",class:"mr-5 text-green-600 text-2xl title-font"}),n(c,{type:"primary",onClick:m},{default:p(()=>[ae]),_:1})])]))]),t(o)==""?(s(),f(c,{key:0,type:"primary",class:"flex mx-auto mt-16 text-lg",onClick:t(v)},{default:p(()=>[oe]),_:1},8,["onClick"])):_("",!0),t(o)!=""&&t(i).isvip==0?(s(),f(c,{key:1,type:"primary",class:"flex mx-auto mt-16 text-lg",onClick:k},{default:p(()=>[ie]),_:1})):_("",!0)])]),n(D,{connectors:t(R),dark:""},null,8,["connectors"])],64)}}});export{pe as default};
