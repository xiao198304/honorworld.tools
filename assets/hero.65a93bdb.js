import{a5 as t,a2 as r,a6 as a,a7 as s}from"./index.d61d7c7d.js";const e="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/nftmarket/floorprice.json",l="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/callhero/last12.zip.json",c=t("hero",{state:()=>({floorprice:[],callhero:{}}),actions:{async initFloorprice(){let o=e+"?="+r().format("YYYYMMDDHHMM");this.floorprice=await a(o)},async initCallhero(){let o=l+"?="+r().format("YYYYMMDDHH");this.callhero=await s(o)}}}),i=c;export{i as u};
