import{q as k}from"./hero.d6daa2c6.js";import{O as L,G as g,H as t,I as e,M as i,N as _,J as s,ah as m,K as a,$ as f,Z as r,au as x,av as P,L as C,a1 as B,V,ae as j}from"./index.348ac05b.js";import{c as h,a as D}from"./dragon.b67eff30.js";const I={class:"rounded-lg shadow-lg m-3 border-2"},M={class:"pt-6 pl-2"},z={class:"text-gray-500 text-sm pt-2"},E={class:"text-gray-500 text-sm pt-1"},G={class:"text-gray-500 text-sm pt-1"},J={class:"text-gray-500 text-sm pt-1"},K={class:"text-gray-500 text-sm pt-1"},O={class:"absolute"},T={class:"text-gray-500 text-center text-sm"},U={class:"text-gray-500 text-center text-sm"},Z={class:"text-gray-500 text-center text-sm"},X=L({__name:"PlayerCard",props:{data:null},setup(H){const o=H,N=j(),R=n=>{let u="/game/citylevel/"+n;N.push({path:u})};return(n,u)=>{const l=i("van-col"),v=i("van-tag"),p=i("van-row"),b=i("van-image"),y=i("van-badge");return _(),g("div",I,[t(p,{justify:"space-around"},{default:e(()=>[t(l,{span:"4"},{default:e(()=>[s("div",M,[s("span",{class:m(["rounded-lg bg-blue-500 p-2 text-white",o.data.Rank<10?"text-3xl":"text-xl"])},a(o.data.Rank),3)])]),_:1}),t(l,{span:"20"},{default:e(()=>[s("div",z,[f(a(o.data.Name)+" ",1),t(v,{onClick:u[0]||(u[0]=d=>R(o.data.Id)),plain:"",type:"primary",class:"float-right mr-6"},{default:e(()=>[f(a(n.$t("tabbar.citylevel")),1)]),_:1})]),t(p,{justify:"space-around"},{default:e(()=>[t(l,{span:"6"},{default:e(()=>[s("div",null,[t(v,{plain:"",type:"primary",class:"mr-2"},{default:e(()=>[f(a(o.data.Player.Level)+a(n.$t("dragon_season.level")),1)]),_:1})]),s("div",null,[t(v,{type:"primary"},{default:e(()=>[f(a(n.$t("dragon_stage."+o.data.Player.Stage)),1)]),_:1})])]),_:1}),t(l,{span:"10"},{default:e(()=>[s("div",E,a(o.data.Player.FightPower)+a(n.$t("dragon_season.floor"))+"/"+a(r(x)(r(h)(o.data.Player.Heroes)[0].max_sec)),1),s("div",G,"1000"+a(n.$t("dragon_season.floor"))+"/"+a(r(x)(r(D)(o.data.Player.Heroes))),1)]),_:1}),t(l,{span:"8"},{default:e(()=>[s("div",J,a(n.$t("dragon_season.hwt"))+":"+a(r(P)(o.data.HwtReward,".")),1),s("div",K,a(n.$t("dragon_season.crystal"))+":"+a(r(P)(o.data.UsdReward,".")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(p,{class:"m-2",justify:"space-around"},{default:e(()=>[(_(!0),g(C,null,B(o.data.Player.Heroes,(d,S)=>(_(),V(l,{span:"8",key:"hero"+S},{default:e(()=>{var w;return[s("div",{class:m(["border-solid border-1 rounded m-1 p-1","border-"+((w=r(k).find(c=>c.quality==d.grade))==null?void 0:w.color)+"-500"])},[t(y,{content:d.level,position:"top-left",color:"#1989fa"},{default:e(()=>[t(p,null,{default:e(()=>[t(l,{span:"16",class:"relative"},{default:e(()=>[s("div",O,[t(b,{width:"130%",fit:"cover",position:"left",src:"/static/images/dragon/hero/"+d.code+".png"},null,8,["src"]),s("div",T,a(n.$t("dragon_hero."+d.code)),1),s("div",U,a(r(h)([d])[0].max_floor)+a(n.$t("dragon_season.floor")),1),s("div",Z,a(r(x)(r(h)([d])[0].max_sec)),1)])]),_:2},1024),t(l,{span:"8"},{default:e(()=>[(_(!0),g(C,null,B(d.items,(c,q)=>{var $;return _(),g("div",{key:"item"+q,class:m(["m-1 mt-3","bg-"+(($=r(k).find(F=>F.quality==c.grade))==null?void 0:$.color)+"-400"])},[t(y,{content:c.level,position:"top-left",color:"#1989fa"},{default:e(()=>[t(y,{content:c.score,position:"bottom-right",color:"#6B7280"},{default:e(()=>[s("div",{class:m(c.soulbound?"border-dotted border-2 border-gray-500":"")},[t(b,{width:"100%",height:"100%",fit:"cover",src:"/static/images/dragon/item/"+c.code+".png"},null,8,["src"])],2)]),_:2},1032,["content"])]),_:2},1032,["content"])],2)}),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["content"])],2)]}),_:2},1024))),128))]),_:1})])}}});export{X as _};
