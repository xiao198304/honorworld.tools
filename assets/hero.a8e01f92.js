import{J as r,K as t,L as e}from"./index.3233faa0.js";const s="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/nftmarket/floorprice.json",c=r("hero",{state:()=>({floorprice:[]}),actions:{async initFloorprice(){let o=s+"?="+t().format("YYYYMMDDHHMM");this.floorprice=await e(o)}}}),i=c;export{i as u};
