import{M as D,N as G,ai as Q,O as q,H as p,I as c,X as $,V as u,aj as Y,U as s,W as r,Z as b,G as S,S as m,Y as J,ag as Z,T as l,a0 as R,a3 as H,P as X,ak as K,al as ee,Q as te,am as ae,$ as oe}from"./index.002f202c.js";import{s as ne,b as se,r as le,A as re}from"./hero.fd8628ec.js";import{t as U}from"./ethers.b9f8e717.js";import{a as E,c as P,s as L}from"./function-call.35340bed.js";const ie={class:"flex justify-between"},ue={class:"text-base ml-1 inline-block align-top"},me={key:0,class:"text-sm text-gray-500"},de={key:1,class:"text-sm text-red-500"},ce={class:"text-base ml-1"},pe=u("div",{class:"h-40"},null,-1),fe={class:"py-3"},ve={class:"mb-2 text-center"},ge={class:"inline-block align-top ml-1 text-gray-900 text-lg font-medium"},ye={key:0,class:"mx-auto text-center"},_e={key:1,class:"mx-auto text-center"},we=D({__name:"NftCard",props:{title:String,thumb:String,amount:{type:Number,default:1},quality:{type:Number,default:1},race:{type:Number,default:1},level:{type:Number,default:1},lvPower:{type:Number,default:1},className:{type:Number,default:1},source:{type:Number,default:1},code:{type:Number,default:1001},tokenId:{type:Number,default:0},isSoulbound:{type:Boolean,default:!1}},emits:["onRefresh"],setup(M,{emit:T}){const t=M,{t:x}=G(),{address:h,signer:N}=Q(),V=["border-gray-500","border-gray-500","border-green-500","border-blue-500","border-purple-500","border-yellow-500"],A=q(!1),n=q(""),F=q(1),d=q(!1),_=q(1),z=()=>{_.value=t.amount,d.value=!0},I=()=>{F.value=t.amount,A.value=!0},B=async()=>{E({duration:0,message:x("common.Operation_progress")});try{t.tokenId==0?await(await new H(U.HeroNFT1155.address,U.HeroNFT1155.abi,N.value).safeTransferFrom(h.value,n.value,t.code,F.value,"0x00")).wait():await(await new H(U.HeroNFT.address,U.HeroNFT.abi,N.value).transferFrom(h.value,n.value,t.tokenId)).wait()}catch{P(),L("Error!")}P(),T("onRefresh")},w=async()=>{E({duration:0,forbidClick:!0,message:x("common.Operation_progress")});const i=U.NFTStaking.address,e=U.NFTStaking.abi;let o=new H(i,e,N.value);try{t.tokenId==0?await(await o.unstake([t.code],[_.value],[])).wait():await(await o.unstake([],[],[t.tokenId])).wait()}catch{P(),L("Error!")}P(),T("onRefresh")};return(i,e)=>{const o=p("van-icon"),v=p("van-tag"),y=p("van-button"),g=p("van-cell"),C=p("van-stepper"),k=p("van-cell-group"),j=p("van-dialog"),a=p("van-field");return c(),$(R,null,[u("div",{class:Z(["rounded-lg shadow-lg max-w-sm m-3 border-2",V[t.quality]])},[u("div",{class:"m-2 bg-no-repeat bg-cover bg-top",style:Y("background-image: url("+t.thumb+"); background-position-y: -80px")},[u("div",ie,[u("div",null,[s(o,{name:"/static/images/race/"+t.race+".png"},null,8,["name"]),u("span",ue,"Lv."+r(t.level),1)]),t.source==1?(c(),$("div",me,r(i.$t("mynft.mine_pool")),1)):b("",!0),t.source==2?(c(),$("div",de,r(i.$t("mynft.free")),1)):b("",!0),u("div",null,[s(o,{name:"/static/images/item/top_icon2.png"}),u("span",ce,r(t.lvPower),1)])]),pe,u("div",fe,[u("div",ve,[s(o,{name:"/static/images/class/"+t.className+".png",size:"1.3rem"},null,8,["name"]),u("span",ge,r(t.title),1),t.amount>1?(c(),S(v,{key:0,class:"ml-1",color:"#111827",plain:""},{default:m(()=>[J("X"+r(t.amount),1)]),_:1})):b("",!0)]),t.isSoulbound?(c(),$("div",_e,[u("span",null,r(i.$t("mynft.Soulbound")),1)])):(c(),$("div",ye,[t.source==1&&t.amount==1?(c(),S(y,{key:0,plain:"",type:"default",size:"small",icon:"paid-o",class:"mr-2",onClick:w},{default:m(()=>[J(r(i.$t("mynft.unstake")),1)]),_:1})):b("",!0),t.source==1&&t.amount>1?(c(),S(y,{key:1,plain:"",type:"default",size:"small",icon:"paid-o",class:"mr-2",onClick:z},{default:m(()=>[J(r(i.$t("mynft.unstake")),1)]),_:1})):b("",!0),t.source==2?(c(),S(y,{key:2,type:"default",size:"small",icon:"share-o",onClick:I},{default:m(()=>[J(r(i.$t("mynft.transfer")),1)]),_:1})):b("",!0)]))])],4)],2),s(j,{show:d.value,"onUpdate:show":e[1]||(e[1]=f=>d.value=f),title:i.$t("mynft.unstake"),"show-cancel-button":"",onConfirm:w},{default:m(()=>[s(k,{inset:""},{default:m(()=>[s(g,{title:"NFT",value:t.title},null,8,["value"]),s(g,{title:i.$t("mynft.amount_unstake")},{value:m(()=>[s(C,{modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=f=>_.value=f),min:"1",max:t.amount},null,8,["modelValue","max"])]),_:1},8,["title"])]),_:1})]),_:1},8,["show","title"]),s(j,{show:A.value,"onUpdate:show":e[4]||(e[4]=f=>A.value=f),title:i.$t("mynft.transfer"),"show-cancel-button":"",onConfirm:B},{default:m(()=>[s(k,{inset:""},{default:m(()=>[s(g,{title:i.$t("mynft.from_address"),value:l(h)},null,8,["title","value"]),s(g,{title:"NFT",value:t.title},null,8,["value"]),s(g,{title:i.$t("mynft.amount_transfer")},{value:m(()=>[s(C,{modelValue:F.value,"onUpdate:modelValue":e[2]||(e[2]=f=>F.value=f),min:"1",max:t.amount},null,8,["modelValue","max"])]),_:1},8,["title"]),s(a,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=f=>n.value=f),label:i.$t("mynft.to_address"),placeholder:i.$t("mynft.toaddress_tips")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["show","title"])],64)}}}),ke={class:"flex justify-between mx-4 my-2"},be={class:"text-sm text-gray-500"},he={class:"text-gray-900"},Ne={class:"text-sm text-gray-500"},Ve={class:"grid grid-cols-2 md:lg:xl:grid-cols-5 group bg-white shadow-xl shadow-neutral-100 border"},xe=D({__name:"index",setup(M){const{t:T}=G(),t=function(e){return e.text=T(e.text),e};let x=JSON.parse(JSON.stringify(ne)),h=JSON.parse(JSON.stringify(se)),N=JSON.parse(JSON.stringify(le));const{address:V,isActivated:A}=Q();let n=X({nfts:[],limit:10,page:1,total:0,totalnft:0});const{onActivated:F}=K();let d=X({source:0,quality:0,race:0});const _=q(!1),z=async()=>{await w(V.value),L(T("common.Refresh_succeeded")),_.value=!1},I=async(e=0)=>{console.log(d.source),await w(V.value)},B=async()=>{console.log(n.page),await w(V.value)};F(async({address:e})=>{console.log("activate: ",e),await w(e)}),ee(()=>{x=x.map(t),h=h.map(t),N=N.map(t)}),te(async()=>{console.log("activate: ",V.value),await w(V.value)});async function w(e=""){E({duration:0,forbidClick:!0,message:T("common.Updating_data")});const o=await i(e,d.quality,d.race,d.source,n.page,n.limit);n.nfts=o.nfts,n.limit=o.limit,n.page=o.page,n.total=o.total,n.totalnft=o.totalnft,P()}async function i(e="",o=0,v=0,y=0,g=1,C=20){if(e=="")return{nfts:[],limit:C,page:g,total:0,totalnft:0};let k=!0;y==3&&(k=!1,y=0);const O=await ae("https://service-q42yv3pc-1258577806.hk.apigw.tencentcs.com/release/",{url:"nft/inventory/list",pjson:{address:e,merge:k,page:{number:g,size:C},filter:{quality:o,race:v,source:y}}}),W=re(O.list);return console.log("res: ",O),{nfts:W,limit:O.limit,page:O.page,total:O.total,totalnft:O.totalnft}}return(e,o)=>{const v=p("van-dropdown-item"),y=p("van-dropdown-menu"),g=p("van-sticky"),C=p("van-pull-refresh"),k=p("van-icon"),j=p("van-pagination");return c(),$(R,null,[s(g,{"offset-top":40},{default:m(()=>[l(A)?(c(),S(y,{key:0},{default:m(()=>[s(v,{modelValue:l(d).source,"onUpdate:modelValue":o[0]||(o[0]=a=>l(d).source=a),options:l(x),onChange:I},null,8,["modelValue","options"]),s(v,{modelValue:l(d).quality,"onUpdate:modelValue":o[1]||(o[1]=a=>l(d).quality=a),options:l(h),onChange:I},null,8,["modelValue","options"]),s(v,{modelValue:l(d).race,"onUpdate:modelValue":o[2]||(o[2]=a=>l(d).race=a),options:l(N),onChange:I},null,8,["modelValue","options"])]),_:1})):b("",!0)]),_:1}),u("div",ke,[u("div",be,[J(r(e.$t("mynft.total_NFT"))+"\uFF1A",1),u("span",he,r(l(n).totalnft),1)]),u("div",Ne,r(e.$t("mynft.total_of"))+r(l(n).total)+r(e.$t("mynft.items"))+"\uFF0C"+r(e.$t("mynft.per_page"))+r(l(n).limit)+r(e.$t("mynft.items"))+"\uFF0C"+r(e.$t("mynft.current"))+r(l(n).page)+r(e.$t("mynft.page")),1)]),s(C,{modelValue:_.value,"onUpdate:modelValue":o[3]||(o[3]=a=>_.value=a),onRefresh:z},{default:m(()=>[u("div",Ve,[(c(!0),$(R,null,oe(l(n).nfts,(a,f)=>(c(),S(we,{key:"nft"+f,title:e.$t(a.name),thumb:"/static/images/"+(a.code>1e4?a.code%1e4:a.code)+".png",amount:a.amount,quality:a.quality,level:a.level,race:a.race,lvPower:a.lvPower,className:a.class,source:a.source,code:a.code,tokenId:a.tokenId,isSoulbound:a.isSoulbound,onOnRefresh:z},null,8,["title","thumb","amount","quality","level","race","lvPower","className","source","code","tokenId","isSoulbound"]))),128))])]),_:1},8,["modelValue"]),l(n).total>0?(c(),S(j,{key:0,modelValue:l(n).page,"onUpdate:modelValue":o[4]||(o[4]=a=>l(n).page=a),"total-items":l(n).total,"items-per-page":l(n).limit,"show-page-size":3,"force-ellipses":"",onChange:B},{"prev-text":m(()=>[s(k,{name:"arrow-left"})]),"next-text":m(()=>[s(k,{name:"arrow"})]),_:1},8,["modelValue","total-items","items-per-page"])):b("",!0)],64)}}});export{xe as default};
