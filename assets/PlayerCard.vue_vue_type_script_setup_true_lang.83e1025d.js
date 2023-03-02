import{a5 as q,a2 as B,a7 as F,O as R,G as y,H as s,I as n,M as m,N as p,J as i,af as k,K as l,$ as S,Z as u,ar as b,as as $,L as P,a1 as H,V}from"./index.578f7d7c.js";import{q as C}from"./hero.d6daa2c6.js";const Y="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/dragon/season/last.zip.json",L=q("season",{state:()=>({data:[],info:{}}),actions:{async initSeason(){let r=Y+"?="+B().format("YYYYMMDDHHMM"),t=await F(r);return this.data=t.data,this.info=t.info,this.data}}}),et=L;function z(r,t){return Math.floor(r*t/60/200)}function J(r,t){let e=25,c=Number(r);return e-=25*c/(c+1e3),Math.floor(60*t/e)}function g(r,t=-1){if(t==0)return[{max_sec:0,max_floor:0,kill_count:0},{max_sec:0,max_floor:0,kill_count:0},{max_sec:0,max_floor:0,kill_count:0},{max_sec:0,max_floor:0,kill_count:0}];let e=[0,0,0],c=[0,0,0],o=[0,0,0],d=0,_=0;for(let a=0;a<r.length;a++){let h=J(r[a].defense,r[a].hp);e[a]=h,t>0&&t<h&&(e[a]=t),c[a]=z(r[a].attack,e[a]),o[a]=Math.floor(c[a]/10+1),_+=c[a],e[a]>d&&(d=e[a])}let x=Math.floor(_/10);return[{max_sec:d,max_floor:x,kill_count:_},{max_sec:e[0],max_floor:o[0],kill_count:c[0]},{max_sec:e[1],max_floor:o[1],kill_count:c[1]},{max_sec:e[2],max_floor:o[2],kill_count:c[2]}]}function K(r,t=1e3){let e=g(r);if(t>e[0].max_floor||t<=0)return-1;let c=1,o=e[0].max_sec;for(;c<=o;){let d=Math.floor((c+o)/2),_=g(r,d);if(t==_[0].max_floor)return d;t>_[0].max_floor?c=d+1:o=d-1}return-1}const T={class:"rounded-lg shadow-lg m-3 border-2"},Z={class:"pt-6 pl-2"},A={class:"text-gray-500 text-sm pt-2"},E={class:"text-gray-500 text-sm pt-1"},G={class:"text-gray-500 text-sm pt-1"},I={class:"text-gray-500 text-sm pt-1"},O={class:"text-gray-500 text-sm pt-1"},U={class:"absolute"},D={class:"text-gray-500 text-center text-sm"},Q={class:"text-gray-500 text-center text-sm"},W={class:"text-gray-500 text-center text-sm"},at=R({__name:"PlayerCard",props:{data:null},setup(r){const t=r;return(e,c)=>{const o=m("van-col"),d=m("van-tag"),_=m("van-row"),x=m("van-image"),v=m("van-badge");return p(),y("div",T,[s(_,{justify:"space-around"},{default:n(()=>[s(o,{span:"4"},{default:n(()=>[i("div",Z,[i("span",{class:k(["rounded-lg bg-blue-500 p-2 text-white",t.data.Rank<10?"text-3xl":"text-xl"])},l(t.data.Rank),3)])]),_:1}),s(o,{span:"20"},{default:n(()=>[i("div",A,l(t.data.Name),1),s(_,{justify:"space-around"},{default:n(()=>[s(o,{span:"6"},{default:n(()=>[i("div",null,[s(d,{plain:"",type:"primary",class:"mr-2"},{default:n(()=>[S(l(t.data.Player.Level)+l(e.$t("dragon_season.level")),1)]),_:1})]),i("div",null,[s(d,{type:"primary"},{default:n(()=>[S(l(e.$t("dragon_stage."+t.data.Player.Stage)),1)]),_:1})])]),_:1}),s(o,{span:"10"},{default:n(()=>[i("div",E,l(t.data.Player.FightPower)+l(e.$t("dragon_season.floor"))+"/"+l(u(b)(u(g)(t.data.Player.Heroes)[0].max_sec)),1),i("div",G,"1000"+l(e.$t("dragon_season.floor"))+"/"+l(u(b)(u(K)(t.data.Player.Heroes))),1)]),_:1}),s(o,{span:"8"},{default:n(()=>[i("div",I,l(e.$t("dragon_season.hwt"))+":"+l(u($)(t.data.HwtReward,".")),1),i("div",O,l(e.$t("dragon_season.crystal"))+":"+l(u($)(t.data.UsdReward,".")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(_,{class:"m-2",justify:"space-around"},{default:n(()=>[(p(!0),y(P,null,H(t.data.Player.Heroes,(a,h)=>(p(),V(o,{span:"8",key:"hero"+h},{default:n(()=>{var w;return[i("div",{class:k(["border-solid border-1 rounded m-1 p-1","border-"+((w=u(C).find(f=>f.quality==a.grade))==null?void 0:w.color)+"-500"])},[s(v,{content:a.level,position:"top-left",color:"#1989fa"},{default:n(()=>[s(_,null,{default:n(()=>[s(o,{span:"16",class:"relative"},{default:n(()=>[i("div",U,[s(x,{width:"130%",fit:"cover",position:"left",src:"/static/images/dragon/hero/"+a.code+".png"},null,8,["src"]),i("div",D,l(e.$t("dragon_hero."+a.code)),1),i("div",Q,l(u(g)([a])[0].max_floor)+l(e.$t("dragon_season.floor")),1),i("div",W,l(u(b)(u(g)([a])[0].max_sec)),1)])]),_:2},1024),s(o,{span:"8"},{default:n(()=>[(p(!0),y(P,null,H(a.items,(f,N)=>{var M;return p(),y("div",{key:"item"+N,class:k(["m-1 mt-3","bg-"+((M=u(C).find(j=>j.quality==f.grade))==null?void 0:M.color)+"-400"])},[s(v,{content:f.level,position:"top-left",color:"#1989fa"},{default:n(()=>[s(v,{content:f.score,position:"bottom-right",color:"#6B7280"},{default:n(()=>[i("div",{class:k(f.soulbound?"border-dotted border-2 border-gray-500":"")},[s(x,{width:"100%",height:"100%",fit:"cover",src:"/static/images/dragon/item/"+f.code+".png"},null,8,["src"])],2)]),_:2},1032,["content"])]),_:2},1032,["content"])],2)}),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["content"])],2)]}),_:2},1024))),128))]),_:1})])}}});export{at as _,et as u};
