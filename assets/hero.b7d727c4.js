import{J as r,K as t}from"./index.589a9aad.js";import{d as e}from"./honor.bed22960.js";const s="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/nftmarket/floorprice.json",c=r("hero",{state:()=>({floorprice:[]}),actions:{async initFloorprice(){let o=s+"?="+e().format("YYYYMMDDHHMM");this.floorprice=await t(o)}}}),n=c;export{n as u};
