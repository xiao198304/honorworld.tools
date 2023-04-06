import{O as rt,P as it,am as ut,Q as g,N as p,G as T,J as c,aC as pt,H as o,K as l,a0 as _,V as O,I as u,$ as J,af as ft,Z as r,L as tt,X,aD as j,aE as z,Y as U,W as K,M as i,R as Z,aF as vt,aB as yt,T as _t,aG as gt,aH as G,aa as st,aI as lt,a1 as bt}from"./index.efe8c10c.js";import{A as wt}from"./nftdata.f3ba295d.js";import{s as kt,b as ht,r as Nt}from"./hero.d6daa2c6.js";const $t={class:"flex justify-between"},Ct={class:"text-base ml-1 inline-block align-top"},Vt={key:0,class:"text-sm text-gray-500"},Tt={key:1,class:"text-sm text-red-500"},Ft={class:"text-base ml-1"},St=c("div",{class:"h-40"},null,-1),xt={class:"py-3"},Ot={class:"mb-2 text-center"},Ut={class:"inline-block align-top ml-1 text-gray-900 text-lg font-medium"},At={key:0,class:"mx-auto text-center"},qt={key:1,class:"mx-auto text-center"},Bt=rt({__name:"NftCard",props:{title:String,thumb:String,amount:{type:Number,default:1},quality:{type:Number,default:1},race:{type:Number,default:1},level:{type:Number,default:1},lvPower:{type:Number,default:1},className:{type:Number,default:1},source:{type:Number,default:1},code:{type:Number,default:1001},tokenId:{type:Number,default:0},isSoulbound:{type:Boolean,default:!1}},emits:["onRefresh"],setup(et,{emit:F}){const a=et,{t:A}=it(),{address:b,signer:L}=ut(),M=["border-gray-500","border-gray-500","border-green-500","border-blue-500","border-purple-500","border-yellow-500"],S=g(!1),w=g(""),k=g(1),f=g(!1),q=g(1),Q=()=>{q.value=a.amount,f.value=!0},d=()=>{k.value=a.amount,S.value=!0},W=async()=>{X({duration:0,message:A("common.Operation_progress")});try{a.tokenId==0?await(await new j(z.HeroNFT1155.address,z.HeroNFT1155.abi,L.value).safeTransferFrom(b.value,w.value,a.code,k.value,"0x00")).wait():await(await new j(z.HeroNFT.address,z.HeroNFT.abi,L.value).transferFrom(b.value,w.value,a.tokenId)).wait()}catch{U(),K("Error!")}U(),F("onRefresh")},v=async()=>{X({duration:0,forbidClick:!0,message:A("common.Operation_progress")});const s=z.NFTStaking.address,m=z.NFTStaking.abi;let y=new j(s,m,L.value);try{a.tokenId==0?await(await y.unstake([a.code],[q.value],[])).wait():await(await y.unstake([],[],[a.tokenId])).wait()}catch{U(),K("Error!")}U(),F("onRefresh")};return(s,m)=>{const y=i("van-icon"),h=i("van-tag"),P=i("van-button"),N=i("van-cell"),$=i("van-stepper"),E=i("van-cell-group"),H=i("van-dialog"),e=i("van-field");return p(),T(tt,null,[c("div",{class:ft(["rounded-lg shadow-lg max-w-sm m-3 border-2",M[a.quality]])},[c("div",{class:"m-2 bg-no-repeat bg-cover bg-top",style:pt("background-image: url("+a.thumb+"); background-position-y: -80px")},[c("div",$t,[c("div",null,[o(y,{name:"/static/images/race/"+a.race+".png"},null,8,["name"]),c("span",Ct,"Lv."+l(a.level),1)]),a.source==1?(p(),T("div",Vt,l(s.$t("mynft.mine_pool")),1)):_("",!0),a.source==2?(p(),T("div",Tt,l(s.$t("mynft.free")),1)):_("",!0),c("div",null,[o(y,{name:"/static/images/item/top_icon2.png"}),c("span",Ft,l(a.lvPower),1)])]),St,c("div",xt,[c("div",Ot,[o(y,{name:"/static/images/class/"+a.className+".png",size:"1.3rem"},null,8,["name"]),c("span",Ut,l(a.title),1),a.amount>1?(p(),O(h,{key:0,class:"ml-1",color:"#111827",plain:""},{default:u(()=>[J("X"+l(a.amount),1)]),_:1})):_("",!0)]),a.isSoulbound?(p(),T("div",qt,[c("span",null,l(s.$t("mynft.Soulbound")),1)])):(p(),T("div",At,[a.source==1&&a.amount==1?(p(),O(P,{key:0,plain:"",type:"default",size:"small",icon:"paid-o",class:"mr-2",onClick:v},{default:u(()=>[J(l(s.$t("mynft.unstake")),1)]),_:1})):_("",!0),a.source==1&&a.amount>1?(p(),O(P,{key:1,plain:"",type:"default",size:"small",icon:"paid-o",class:"mr-2",onClick:Q},{default:u(()=>[J(l(s.$t("mynft.unstake")),1)]),_:1})):_("",!0),a.source==2?(p(),O(P,{key:2,type:"default",size:"small",icon:"share-o",onClick:d},{default:u(()=>[J(l(s.$t("mynft.transfer")),1)]),_:1})):_("",!0)]))])],4)],2),o(H,{show:f.value,"onUpdate:show":m[1]||(m[1]=t=>f.value=t),title:s.$t("mynft.unstake"),"show-cancel-button":"",onConfirm:v},{default:u(()=>[o(E,{inset:""},{default:u(()=>[o(N,{title:"NFT",value:a.title},null,8,["value"]),o(N,{title:s.$t("mynft.amount_unstake")},{value:u(()=>[o($,{modelValue:q.value,"onUpdate:modelValue":m[0]||(m[0]=t=>q.value=t),min:"1",max:a.amount},null,8,["modelValue","max"])]),_:1},8,["title"])]),_:1})]),_:1},8,["show","title"]),o(H,{show:S.value,"onUpdate:show":m[4]||(m[4]=t=>S.value=t),title:s.$t("mynft.transfer"),"show-cancel-button":"",onConfirm:W},{default:u(()=>[o(E,{inset:""},{default:u(()=>[o(N,{title:s.$t("mynft.from_address"),value:r(b)},null,8,["title","value"]),o(N,{title:"NFT",value:a.title},null,8,["value"]),o(N,{title:s.$t("mynft.amount_transfer")},{value:u(()=>[o($,{modelValue:k.value,"onUpdate:modelValue":m[2]||(m[2]=t=>k.value=t),min:"1",max:a.amount},null,8,["modelValue","max"])]),_:1},8,["title"]),o(e,{modelValue:w.value,"onUpdate:modelValue":m[3]||(m[3]=t=>w.value=t),label:s.$t("mynft.to_address"),placeholder:s.$t("mynft.toaddress_tips")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["show","title"])],64)}}}),It={key:0,class:"pl-8 py-2 bg-white"},zt={class:"text-gray-500 pr-2 pt-2"},Jt={class:"text-gray-800 pt-2"},jt={class:"flex justify-between mx-4 my-2"},Lt={class:"text-sm text-gray-500"},Mt={class:"text-gray-900"},Pt={class:"text-sm text-gray-500"},Et={class:"grid grid-cols-2 md:lg:xl:grid-cols-5 group bg-white shadow-xl shadow-neutral-100 border"},Gt=rt({__name:"index",setup(et){const{t:F}=it(),a=g(!1),A=g(""),b=g(1),L=()=>{b.value=s.bit,a.value=!0},M=function(e){return e.text=F(e.text),e};let S=JSON.parse(JSON.stringify(kt)),w=JSON.parse(JSON.stringify(ht)),k=JSON.parse(JSON.stringify(Nt));const{address:f,isActivated:q,signer:Q}=ut();let d=Z({nfts:[],limit:10,page:1,total:0,totalnft:0});const{onActivated:W}=vt();let v=Z({source:0,quality:0,race:0});const s=Z({bit:0,unlock:0}),m=g(!1),y=async()=>{await $(f.value),K(F("common.Refresh_succeeded")),m.value=!1},h=async(e=0)=>{console.log(v.source),await $(f.value)},P=async()=>{console.log(d.page),await $(f.value)};W(async({address:e})=>{console.log("activate: ",e),await $(e)}),yt(()=>{S=S.map(M),w=w.map(M),k=k.map(M)}),_t(async()=>{console.log("activate: ",f.value),await $(f.value),await N(f.value)});async function N(e=""){let t=new j(G.address,G.abi,st),B=new j(lt.address,lt.abi,st),C=await t.balanceOf(e,100);console.log("bit_crystal_balance ",C.toNumber()),s.bit=C.toNumber();let x=await B.balanceOf(e,100);console.log("unlock_crystal_balance ",x.toNumber()),s.unlock=x.toNumber()}async function $(e=""){X({duration:0,forbidClick:!0,message:F("common.Updating_data")});const t=await E(e,v.quality,v.race,v.source,d.page,d.limit);d.nfts=t.nfts,d.limit=t.limit,d.page=t.page,d.total=t.total,d.totalnft=t.totalnft,U()}async function E(e="",t=0,B=0,C=0,x=1,I=20){if(e=="")return{nfts:[],limit:I,page:x,total:0,totalnft:0};let R=!0;C==3&&(R=!1,C=0);const V=await gt("https://service-1zp4p22u-1258577806.hk.apigw.tencentcs.com/release/nftlist",{pjson:{address:e,merge:R,page:{number:x,size:I},filter:{quality:t,race:B,source:C}}}),D=wt(V.list);return console.log("res: ",V),{nfts:D,limit:V.limit,page:V.page,total:V.total,totalnft:V.totalnft}}const H=async()=>{X({duration:0,message:F("common.Operation_progress")});try{await(await new j(G.address,G.abi,Q.value).safeTransferFrom(f.value,A.value,100,b.value,"0x00")).wait()}catch{U(),K("Error!")}await N(f.value),U()};return(e,t)=>{const B=i("van-col"),C=i("van-button"),x=i("van-row"),I=i("van-dropdown-item"),R=i("van-dropdown-menu"),at=i("van-sticky"),ot=i("van-pull-refresh"),Y=i("van-icon"),V=i("van-pagination"),D=i("van-cell"),nt=i("van-field"),dt=i("van-cell-group"),ct=i("van-dialog");return p(),T(tt,null,[o(at,{"offset-top":40},{default:u(()=>[s.bit>0?(p(),T("div",It,[o(x,{justify:"space-between",class:"text-center"},{default:u(()=>[o(B,{span:"16 text-left align-bottom align-text-bottom pt-2"},{default:u(()=>[c("span",zt,l(e.$t("mynft.crystal_bit")),1),c("span",Jt,l(s.bit),1)]),_:1}),o(B,{span:"8"},{default:u(()=>[o(C,{type:"default",size:"small",icon:"share-o",onClick:L},{default:u(()=>[J(l(e.$t("mynft.transfer")),1)]),_:1})]),_:1})]),_:1})])):_("",!0),r(q)?(p(),O(R,{key:1},{default:u(()=>[o(I,{modelValue:r(v).source,"onUpdate:modelValue":t[0]||(t[0]=n=>r(v).source=n),options:r(S),onChange:h},null,8,["modelValue","options"]),o(I,{modelValue:r(v).quality,"onUpdate:modelValue":t[1]||(t[1]=n=>r(v).quality=n),options:r(w),onChange:h},null,8,["modelValue","options"]),o(I,{modelValue:r(v).race,"onUpdate:modelValue":t[2]||(t[2]=n=>r(v).race=n),options:r(k),onChange:h},null,8,["modelValue","options"])]),_:1})):_("",!0)]),_:1}),c("div",jt,[c("div",Lt,[J(l(e.$t("mynft.total_NFT"))+"\uFF1A",1),c("span",Mt,l(r(d).totalnft),1)]),c("div",Pt,l(e.$t("mynft.total_of"))+l(r(d).total)+l(e.$t("mynft.items"))+"\uFF0C"+l(e.$t("mynft.per_page"))+l(r(d).limit)+l(e.$t("mynft.items"))+"\uFF0C"+l(e.$t("mynft.current"))+l(r(d).page)+l(e.$t("mynft.page")),1)]),o(ot,{modelValue:m.value,"onUpdate:modelValue":t[3]||(t[3]=n=>m.value=n),onRefresh:y},{default:u(()=>[c("div",Et,[(p(!0),T(tt,null,bt(r(d).nfts,(n,mt)=>(p(),O(Bt,{key:"nft"+mt,title:e.$t(n.name),thumb:"/static/images/dragon/hero/"+(n.code>1e4?n.code%1e4:n.code)+".png",amount:n.amount,quality:n.quality,level:n.level,race:n.race,lvPower:n.lvPower,className:n.class,source:n.source,code:n.code,tokenId:n.tokenId,isSoulbound:n.isSoulbound,onOnRefresh:y},null,8,["title","thumb","amount","quality","level","race","lvPower","className","source","code","tokenId","isSoulbound"]))),128))])]),_:1},8,["modelValue"]),r(d).total>0?(p(),O(V,{key:0,modelValue:r(d).page,"onUpdate:modelValue":t[4]||(t[4]=n=>r(d).page=n),"total-items":r(d).total,"items-per-page":r(d).limit,"show-page-size":3,"force-ellipses":"",onChange:P},{"prev-text":u(()=>[o(Y,{name:"arrow-left"})]),"next-text":u(()=>[o(Y,{name:"arrow"})]),_:1},8,["modelValue","total-items","items-per-page"])):_("",!0),o(ct,{show:a.value,"onUpdate:show":t[7]||(t[7]=n=>a.value=n),title:e.$t("mynft.transfer"),"show-cancel-button":"",onConfirm:H},{default:u(()=>[o(dt,{inset:""},{default:u(()=>[o(D,{title:e.$t("mynft.from_address"),value:r(f)},null,8,["title","value"]),o(D,{title:"NFT",value:e.$t("mynft.crystal_bit")},null,8,["value"]),o(nt,{modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=n=>b.value=n),type:"digit",label:e.$t("mynft.amount_transfer")},null,8,["modelValue","label"]),o(nt,{modelValue:A.value,"onUpdate:modelValue":t[6]||(t[6]=n=>A.value=n),label:e.$t("mynft.to_address"),placeholder:e.$t("mynft.toaddress_tips")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["show","title"])],64)}}});export{Gt as default};
