import{J as r,K as t}from"./index.f6760a0d.js";import{d as e}from"./honor.39be7b7d.js";const s="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/nftmarket/floorprice.json",c=r("hero",{state:()=>({floorprice:[]}),actions:{async initFloorprice(){let o=s+"?="+e().format("YYYYMMDDHHMM");this.floorprice=await t(o)}}}),n=c;export{n as u};
