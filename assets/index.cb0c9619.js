import{O as E,P as U,Q as m,am as D,T as J,G as w,J as T,L as b,a1 as O,V as S,I as d,a0 as X,X as z,aD as N,aJ as c,Y as C,W as H,M as s,aa as K,N as v,H as a,K as V,$ as M,Z as P}from"./index.efe8c10c.js";const Q={class:"grid grid-cols-2 md:lg:xl:grid-cols-5 group bg-white shadow-xl shadow-neutral-100 border"},q=E({__name:"index",setup(W){const{t:k}=U(),t=m([]),p=m(!1),i=m(0),g=m(""),f=m(1),{address:u,isActivated:Y,signer:F}=D();J(async()=>{console.log("activate: ",u.value),await h(u.value)});async function h(e=""){t.value=[];let l=await new N(c.address,c.abi,K).getInventory(e);for(let r=0;r<l.amounts.length;r++)l.amounts[r].toNumber()>0&&t.value.push({amounts:l.amounts[r].toNumber(),ids:l.ids[r].toNumber()});console.log(t.value)}const G=e=>{i.value=e,p.value=!0},$=async()=>{z({duration:0,message:k("common.Operation_progress")});try{let e=t.value[i.value].ids;await(await new N(c.address,c.abi,F.value).safeTransferFrom(u.value,g.value,e,f.value,"0x00")).wait()}catch{C(),H("Error!")}C(),await h(u.value)};return(e,n)=>{const l=s("van-image"),r=s("van-button"),_=s("van-cell"),x=s("van-icon"),B=s("van-stepper"),I=s("van-field"),L=s("van-cell-group"),A=s("van-dialog");return v(),w(b,null,[T("div",Q,[(v(!0),w(b,null,O(t.value,(o,y)=>(v(),w("div",{key:"gem"+y,class:"rounded-lg shadow-lg max-w-sm m-3 border-2 text-center"},[a(l,{class:"inline-block h-40 w-40 rounded-full ring-2 ring-white mt-2",fit:"cover",src:"/static/images/gem/"+o.ids+".png"},null,8,["src"]),T("div",null,"X"+V(o.amounts),1),a(r,{plain:"",type:"default",size:"small",icon:"paid-o",class:"m-2",onClick:Z=>G(y)},{default:d(()=>[M(V(e.$t("mynft.transfer")),1)]),_:2},1032,["onClick"])]))),128))]),t.value[i.value]!=null?(v(),S(A,{key:0,show:p.value,"onUpdate:show":n[2]||(n[2]=o=>p.value=o),title:e.$t("mynft.transfer"),"show-cancel-button":"",onConfirm:$},{default:d(()=>[a(L,{inset:""},{default:d(()=>[a(_,{title:e.$t("mynft.from_address"),value:P(u)},null,8,["title","value"]),a(_,{title:"NFT"},{"right-icon":d(()=>[a(x,{name:"/static/images/gem/"+t.value[i.value].ids+".png"},null,8,["name"])]),_:1}),a(_,{title:e.$t("mynft.amount_transfer")},{value:d(()=>[a(B,{modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=o=>f.value=o),min:"1",max:t.value[i.value].amounts},null,8,["modelValue","max"])]),_:1},8,["title"]),a(I,{modelValue:g.value,"onUpdate:modelValue":n[1]||(n[1]=o=>g.value=o),label:e.$t("mynft.to_address"),placeholder:e.$t("mynft.toaddress_tips")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["show","title"])):X("",!0)],64)}}});export{q as default};
