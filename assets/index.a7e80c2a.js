import{aw as ke,ax as He,ay as Ee,az as Pe,H as o,aA as ze,aB as Me,O as Xe,P as Le,Q as j,R as me,ab as We,ac as Ke,X as Ge,Y as Qe,G as k,I as l,L as P,ad as Ye,M as w,N as i,J as v,$ as p,K as a,a1 as M,V as x,ah as B,Z as r,au as ae,av as ye,a0 as X,ae as Ze,a8 as et,aq as ge,aC as he,a2 as tt}from"./index.348ac05b.js";import{q as J}from"./hero.d6daa2c6.js";import{u as at,g as lt,s as be,b as ot,d as le,e as st,i as oe,f as se,h as nt,j as rt,k as ut,c as dt,t as it,l as T,m as q,n as ct,o as vt,p as pt}from"./dragon.b67eff30.js";import{a as _t}from"./dragonauto.4804b964.js";let ne;const ft={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let mt=ke({},ft);function yt(){({instance:ne}=Ee({setup(){const{state:A,toggle:F}=Pe();return()=>o(Me,ze(A,{"onUpdate:show":F}),null)}}))}function gt(Z){return He?new Promise((A,F)=>{ne||yt(),ne.open(ke({},mt,Z,{callback:U=>{(U==="confirm"?A:F)(U)}}))}):Promise.resolve()}const ht={key:0},bt={class:"flex -space-x-4 overflow-hidden"},kt={key:1},wt={class:"flex -space-x-4 overflow-hidden"},xt={class:"border-solid border-1 rounded m-1 p-1 border-gray-500"},St={class:"pt-6 pl-2"},$t={key:1,class:"rounded-lg bg-blue-500 p-2 text-white text-base"},Ct={class:"text-gray-500 text-sm pt-1"},It={class:"text-gray-500 text-sm pt-1"},Tt={class:"text-gray-500 text-sm pt-1"},Rt={class:"text-gray-500 text-sm pt-1"},Nt=["onClick"],Ft={key:0},Ot={class:"text-base my-4"},Vt={class:"mb-4"},jt={key:1,style:{width:"100%",height:"150px"}},Bt={class:"-mt-2"},Jt={class:"text-sm"},At={key:0,class:"border-solid border-1 rounded m-1 p-1 border-gray-300"},Dt={class:"text-xs text-center"},qt={key:1,class:"m-1"},Ut={class:"text-sm mt-1 text-center"},Ht=["onClick"],Et={class:"text-center text-sm text-gray-500"},Pt={class:"m-2 p-1 text-gray-500"},zt={class:"ml-1"},Mt={class:"mt-4"},Gt=Xe({__name:"index",setup(Z){let A=["attackbase","defensebase","hpbase","luckbase"];const F=at(),U=_t(),{t:O,locale:re}=Le(),we=Ze(),H=Ye(),L=j([]);let ue=lt();const _=j(ue),c=j({hero:3,item:3}),de=["warrior","ranger","wizard"],xe=["weapon","armor","ornaments"],n=j(st(1)),y=j({stat1_type:"",stat2_type:"",stat3_type:""}),C=j(oe[0]),W=j(0),ie=j(0);j({hero:3,item:3});const R=j({hero:!1,item:!1,attrib:!1}),E=()=>{R.value.hero=!1,R.value.item=!1},K=me([{text:"SSSR",value:5,children:[]},{text:"SSR",value:4,children:[]},{text:"SR",value:3,children:[]},{text:"R",value:2,children:[]},{text:"N",value:1,children:[]}]),G=me([{text:"SSSR",value:5,children:[]},{text:"SSR",value:4,children:[]},{text:"SR",value:3,children:[]},{text:"R",value:2,children:[]},{text:"N",value:1,children:[]}]);let f=j({Rank:0,HwtReward:"",UsdReward:"",attack:0,defense:0,hp:0,luck:0});We(_,async(e,s)=>{let u=se(e);F.data.length==0&&await F.initSeason();let b=JSON.parse(JSON.stringify(F.data));b=b.sort(et("Rank"));let g=b.find(N=>N.FightPower<=u[0].max_floor);g?(f.value.Rank=g.Rank,f.value.HwtReward=g.HwtReward,f.value.UsdReward=g.UsdReward):(f.value.Rank=0,f.value.HwtReward="",f.value.UsdReward=""),f.value.attack=0,f.value.defense=0,f.value.hp=0,f.value.luck=0;for(let N=0;N<e.data.length;N++)f.value.attack+=e.data[N].hero.attack,f.value.defense+=e.data[N].hero.defense,f.value.hp+=e.data[N].hero.hp,f.value.luck+=e.data[N].hero.luck});const Se=()=>{we.push({name:"Season"})};Ke(async()=>{await $e()});async function $e(e=!1){if(Ge({duration:0,message:O("common.Updating_data")}),await ee(),H.params&&H.params.playerId){console.log("id ",H.params.playerId),F.data.length==0&&await F.initSeason();let s=JSON.parse(JSON.stringify(F.data));if(s.findIndex(u=>u.Id==parseInt(H.params.playerId))){let u=s.find(g=>g.Id==parseInt(H.params.playerId)),b=be(u);Q(b)}else if(JSON.stringify(U.season)!="{}"&&U.season.Id==parseInt(H.params.playerId)){let u=be(U.season);Q(u)}}Qe()}const ee=async()=>{L.value=[];let e=await F.getSeasonTeamData();L.value.push(...e),localStorage.getItem("myteamdata")&&L.value.push(...JSON.parse(localStorage.getItem("myteamdata")))},Q=(e=ue)=>{_.value=JSON.parse(JSON.stringify(e))},Ce=()=>{if(!_.value.data.find(e=>e.hero.code!=0)){ge(O("dragon_citylevel.setting_no_save"));return}Ie(),he(O("dragon_citylevel.setting_save_ok"))},Ie=()=>{let e=[],s=1;localStorage.getItem("myteamdata")&&(e=JSON.parse(localStorage.getItem("myteamdata")),s=e.length+1),_.value.title_cn="\u6211\u7684\u6230\u968A_"+s,_.value.title_en="myteam_"+s,_.value.type=1,_.value.timestamp=tt().unix(),e.push(_.value);let u=JSON.stringify(e);localStorage.setItem("myteamdata",u),ee()},Te=async e=>{console.log("\u522A\u9664\u6587\u6A94");let s=re.value=="zh_TW"?e.title_cn:e.title_en;gt({title:O("dragon_citylevel.delete_file"),message:O("dragon_citylevel.delete_file_message")+": "+s+" ?"}).then(async()=>{await Re(e)})},Re=async e=>{if(localStorage.getItem("myteamdata")){let s=JSON.parse(localStorage.getItem("myteamdata")),u=s.findIndex(b=>b.timestamp==e.timestamp);u>=0&&(s.splice(u,1),localStorage.setItem("myteamdata",JSON.stringify(s)),await ee(),he(O("common.delete_succeed")))}},Ne=e=>{c.value.item=3,c.value.hero=e.type-1,Je(),R.value.hero=!0},Fe=(e,s,u)=>{c.value.hero=e-1,c.value.item=s-1,_.value.data[c.value.hero].hero.code==0?ge(O("dragon_citylevel.choose_hero_first")):(Ae(),R.value.item=!0)},Oe=(e,s)=>{c.value.hero=e,c.value.item=s,y.value={stat1_type:"",stat2_type:"",stat3_type:""},n.value=JSON.parse(JSON.stringify(_.value.data[c.value.hero].items[c.value.item]));let u=oe.find(b=>b.code==n.value.code);u.stat1_type>0&&(y.value.stat1_type=A[u.stat1_type-1]),u.stat2_type>0&&(y.value.stat2_type=A[u.stat2_type-1]),u.stat3_type>0&&(y.value.stat3_type=A[u.stat3_type-1]),C.value=u,R.value.attrib=!0},Ve=()=>{let e={attack:n.value.attackbase,defense:n.value.defensebase,hp:n.value.hpbase,luck:n.value.luckbase},s={attack:n.value.attacksuit,defense:n.value.defensesuit,hp:n.value.hpsuit,luck:n.value.lucksuit},u=ot(n.value.code,n.value.level,n.value.soulbound,e,s);_.value.data[c.value.hero].items[c.value.item]=u,_.value=le(_.value),R.value.attrib=!1},je=e=>{let s=_.value.data[c.value.hero].items,u=ct(e.selectedValues[1],e.selectedValues[2],s);_.value.data[c.value.hero]=u,_.value=le(_.value),R.value.hero=!1},Be=e=>{let s=JSON.parse(JSON.stringify(_.value));if(s.data[c.value.hero].items[c.value.item].code==e.selectedValues[1])s.data[c.value.hero].items[c.value.item].level=e.selectedValues[2];else{let u=vt(e.selectedValues[1],e.selectedValues[2],80,!0);s.data[c.value.hero].items[c.value.item]=u}_.value=le(s),R.value.item=!1},Je=()=>{if(c.value.hero>=3)return;K.forEach(s=>s.children=[]);const e=c.value.hero+1;pt.forEach(s=>{s.type==e&&K.find(u=>u.value==s.grade).children.push({text:O("dragon_hero."+s.code),value:s.code,children:[]})}),K.forEach(s=>{let u=20;s.children.forEach(b=>{b.children=[];for(let g=1;g<=u;g++)b.children.push({text:g+O("dragon_season.level"),value:g})})}),W.value+=1},Ae=()=>{if(c.value.item>=3)return;G.forEach(s=>s.children=[]);const e=c.value.item+1;oe.forEach(s=>{s.type==e&&G.find(u=>u.value==s.grade).children.push({text:O("dragon_item."+s.code),value:s.code,children:[]})}),G.forEach(s=>{let u=10;s.children.forEach(b=>{b.children=[];for(let g=1;g<=u;g++)b.children.push({text:g+O("dragon_season.level"),value:g})})}),W.value+=1};return(e,s)=>{const u=w("van-button"),b=w("van-cell"),g=w("van-image"),N=w("van-icon"),Y=w("van-badge"),ce=w("van-grid-item"),De=w("van-grid"),ve=w("van-cell-group"),d=w("van-col"),I=w("van-row"),pe=w("van-tag"),_e=w("van-picker"),fe=w("van-popup"),qe=w("van-checkbox"),te=w("van-stepper"),Ue=w("van-dialog");return i(),k(P,null,[o(ve,{inset:""},{default:l(()=>[o(b,{title:e.$t("dragon_citylevel.team_file"),icon:"notes-o"},{value:l(()=>[v("div",{class:"text-gray-500 mr-1",onClick:Se},[o(u,{size:"mini",color:"#aaaaaa",plain:"",class:"mr-1"},{default:l(()=>[p(a(e.$t("dragon_citylevel.read_randlist")),1)]),_:1})])]),_:1},8,["title"]),o(De,{"column-num":3,border:!1,gutter:2},{default:l(()=>[(i(!0),k(P,null,M(L.value,t=>(i(),x(ce,{key:t.title_en,icon:"photo-o",text:t.title_cn,onClick:m=>Q(t)},{icon:l(()=>[t.type>0?(i(),k("div",ht,[o(Y,null,{content:l(()=>[o(N,{name:"cross",class:"badge-icon",onClick:m=>Te(t)},null,8,["onClick"])]),default:l(()=>[v("div",bt,[(i(!0),k(P,null,M(t.data.filter(m=>m.hero.code>0),(m,h)=>{var S;return i(),x(g,{key:h,class:B(["inline-block h-10 w-10 rounded-full ring-2 ring-white","bg-"+((S=r(J).find(V=>V.quality==m.hero.grade))==null?void 0:S.color)+"-500"]),fit:"cover",src:"/static/images/dragon/hero/"+m.hero.code+".png"},null,8,["class","src"])}),128))])]),_:2},1024)])):(i(),k("div",kt,[v("div",wt,[(i(!0),k(P,null,M(t.data.filter(m=>m.hero.code>0),(m,h)=>{var S;return i(),x(g,{key:h,class:B(["inline-block h-10 w-10 rounded-full ring-2 ring-white","bg-"+((S=r(J).find(V=>V.quality==m.hero.grade))==null?void 0:S.color)+"-500"]),fit:"cover",src:"/static/images/dragon/hero/"+m.hero.code+".png"},null,8,["class","src"])}),128))])]))]),_:2},1032,["text","onClick"]))),128)),o(ce,{icon:"plus",text:e.$t("dragon_citylevel.new_document"),onClick:s[0]||(s[0]=t=>Q())},null,8,["text"])]),_:1})]),_:1}),o(ve,{class:"mt-4",inset:""},{default:l(()=>[o(b,{title:r(re)=="zh-TW"?_.value.title_cn:_.value.title_en,icon:"friends-o"},{value:l(()=>[v("div",{class:"text-gray-500 mr-2",onClick:Ce},[o(u,{size:"mini",color:"#aaaaaa",plain:"",class:"mr-2"},{default:l(()=>[p(a(e.$t("dragon_citylevel.save_document")),1)]),_:1})])]),_:1},8,["title"]),v("div",xt,[o(I,{justify:"space-around"},{default:l(()=>[o(d,{span:"4"},{default:l(()=>[v("div",St,[r(f).Rank!=0?(i(),k("span",{key:0,class:B(["rounded-lg bg-blue-500 p-2 text-white",r(f).Rank<10?"text-3xl":"text-xl"])},a(r(f).Rank),3)):(i(),k("span",$t,">100"))])]),_:1}),o(d,{span:"20"},{default:l(()=>[o(I,{justify:"space-around",class:"ml-2"},{default:l(()=>[o(d,{span:"12"},{default:l(()=>[v("div",Ct,a(r(se)(_.value)[0].max_floor)+a(e.$t("dragon_season.floor"))+"/"+a(r(ae)(r(se)(_.value)[0].max_sec)),1),v("div",It,"1000"+a(e.$t("dragon_season.floor"))+"/"+a(r(ae)(r(nt)(_.value))),1)]),_:1}),o(d,{span:"12"},{default:l(()=>[v("div",Tt,a(e.$t("dragon_season.hwt"))+":"+a(r(ye)(r(f).HwtReward,".")),1),v("div",Rt,a(e.$t("dragon_season.crystal"))+":"+a(r(ye)(r(f).UsdReward,".")),1)]),_:1})]),_:1}),o(I,{justify:"space-around",class:"text-gray-500 text-sm ml-2 mt-1"},{default:l(()=>[o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.attack"))+": "+a(r(f).attack),1)]),_:1}),o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.defense"))+": "+a(r(f).defense),1)]),_:1}),o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.hp"))+": "+a(r(f).hp),1)]),_:1}),o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.luck"))+": "+a(r(f).luck),1)]),_:1})]),_:1})]),_:1})]),_:1})]),(i(!0),k(P,null,M(_.value.data,(t,m)=>(i(),k("div",{key:m+"_"+ie.value,class:"py-2 solid-bottom"},[o(I,null,{default:l(()=>[o(d,{span:"8"},{default:l(()=>{var h,S,V,z;return[v("div",{class:B([m==c.value.hero&&c.value.item>2?"bg-gray-200":"","text-gray-500 text-center p-1"]),onClick:$=>Ne(t.hero)},[t.hero.code!=0?(i(),k("div",Ft,[v("div",{class:B(["border-solid border-1 rounded m-1 p-1","border-"+((h=r(J).find($=>$.quality==t.hero.grade))==null?void 0:h.color)+"-500"])},[o(Y,{offset:["-90%",5],color:(S=r(J).find($=>$.quality==t.hero.grade))==null?void 0:S.rgb,content:(V=r(J).find($=>$.quality==t.hero.grade))==null?void 0:V.title},{default:l(()=>{var $;return[o(Y,{offset:["-10%",5],color:($=r(J).find(D=>D.quality==t.hero.grade))==null?void 0:$.rgb,content:"Lv."+t.hero.level},{default:l(()=>[o(g,{class:"-ml-4 mt-1",src:"/static/images/dragon/hero/"+t.hero.code+".png",width:"140%",position:"left",fit:"cover"},null,8,["src"])]),_:2},1032,["color","content"])]}),_:2},1032,["color","content"]),v("div",null,[v("span",Ot,a(e.$t("dragon_hero."+t.hero.code)),1)]),v("div",Vt,[o(pe,{plain:"",type:"primary",color:(z=r(J).find($=>$.quality==t.hero.grade))==null?void 0:z.rgb},{default:l(()=>[p(" +"+a(r(rt)(t))+a(e.$t("dragon_season.floor")),1)]),_:2},1032,["color"])])],2)])):(i(),k("div",jt,[o(N,{class:"iconfont","class-prefix":"ali-icon",name:de[m],size:"80"},null,8,["name"]),v("div",Bt,[v("span",Jt,a(e.$t("dragon_citylevel.select_one"))+a(e.$t("mynft."+de[m])),1)])]))],10,Nt)]}),_:2},1024),o(d,{span:"16"},{default:l(()=>[t.hero.code!=0?(i(),k("div",At,[o(I,{justify:"space-around",class:"text-gray-600 text-sm"},{default:l(()=>[o(d,{span:"12"},{default:l(()=>[p(a(e.$t("dragon_citylevel.level"))+"\uFF1A"+a(r(ut)(t))+a(e.$t("dragon_season.floor")),1)]),_:2},1024),o(d,{span:"12"},{default:l(()=>[p(a(e.$t("dragon_citylevel.time"))+"\uFF1A"+a(r(ae)(r(dt)([t.hero])[0].max_sec)),1)]),_:2},1024)]),_:2},1024),o(I,{justify:"space-around",class:"text-gray-500 text-xs"},{default:l(()=>[o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.attack"))+": "+a(t.hero.attack),1)]),_:2},1024),o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.defense"))+": "+a(t.hero.defense),1)]),_:2},1024),o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.hp"))+": "+a(t.hero.hp),1)]),_:2},1024),o(d,{span:"6"},{default:l(()=>[p(a(e.$t("dragon_citylevel.luck"))+": "+a(t.hero.luck),1)]),_:2},1024)]),_:2},1024)])):X("",!0),o(I,{justify:"space-around",class:"margin-left"},{default:l(()=>[(i(!0),k(P,null,M(t.items,(h,S)=>(i(),x(d,{span:"8",key:h.code+S+ie.value},{default:l(()=>[o(I,{class:"text-gray-500 text-center",onClick:V=>Fe(t.hero.type,h.type,h.code)},{default:l(()=>{var V,z,$;return[h.code!=0?(i(),k("div",{key:0,class:B(["m-1",m==c.value.hero&&S==c.value.item?"bg-gray-300":""])},[v("div",{class:B(["border-solid border-1 rounded p-1","border-"+((V=r(J).find(D=>D.quality==h.grade))==null?void 0:V.color)+"-500"])},[o(Y,{offset:["-10%",5],color:(z=r(J).find(D=>D.quality==h.grade))==null?void 0:z.rgb,content:"Lv."+h.level},{default:l(()=>[v("div",{class:B(h.soulbound?"border-dotted border-2 border-gray-500":"")},[o(g,{class:"-ml-1 mt-1",src:"/static/images/dragon/item/"+h.code+".png",width:"100%",position:"left",fit:"cover"},null,8,["src"])],2)]),_:2},1032,["color","content"]),v("div",Dt,a(e.$t("dragon_item."+h.code)),1),v("div",null,[o(pe,{plain:"",type:"primary",color:($=r(J).find(D=>D.quality==h.grade))==null?void 0:$.rgb},{default:l(()=>[p(" +"+a(r(it)(t,h))+a(e.$t("dragon_season.floor")),1)]),_:2},1032,["color"])])],2)],2)):(i(),k("div",qt,[v("div",{class:B(["text-center p-4",m==c.value.hero&&S==c.value.item?"bg-gray-300":""])},[o(N,{name:"plus",size:"50"})],2),v("div",Ut,a(e.$t("mynft."+xe[S])),1)]))]}),_:2},1032,["onClick"]),h.code!=0?(i(),k("div",{key:0,onClick:V=>Oe(m,S)},[v("div",Et,[v("span",null,a(e.$t("dragon_citylevel.attribute_adjustment")),1)])],8,Ht)):X("",!0)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128))]),_:1}),o(fe,{show:R.value.hero,position:"bottom",onClose:E,onClickOverlay:E,teleport:"body"},{default:l(()=>[(i(),x(_e,{key:"herog"+W.value,columns:K,"confirm-button-text":e.$t("common.confirm"),"cancel-button-text":e.$t("dragon_citylevel.no_select_hero"),onConfirm:je,onCancel:E},null,8,["columns","confirm-button-text","cancel-button-text"]))]),_:1},8,["show"]),o(fe,{show:R.value.item,position:"bottom",onClose:E,onClickOverlay:E,teleport:"body"},{default:l(()=>[(i(),x(_e,{key:"itemg"+W.value,columns:G,"confirm-button-text":e.$t("common.confirm"),"cancel-button-text":e.$t("dragon_citylevel.no_select_item"),onConfirm:Be,onCancel:E},null,8,["columns","confirm-button-text","cancel-button-text"]))]),_:1},8,["show"]),o(Ue,{show:R.value.attrib,"onUpdate:show":s[5]||(s[5]=t=>R.value.attrib=t),title:e.$t("dragon_citylevel.attribute_adjustment"),"show-cancel-button":"",teleport:"body",confirmButtonText:e.$t("common.confirm"),cancelButtonText:e.$t("common.cancel"),onConfirm:Ve},{default:l(()=>[v("div",Pt,[o(I,{justify:"space-between"},{default:l(()=>{var t;return[o(d,{span:"12",class:B("text-"+((t=r(J).find(m=>m.quality==n.value.grade))==null?void 0:t.color)+"-500")},{default:l(()=>[p(a(e.$t("dragon_item."+n.value.code))+" ",1),v("span",zt,a(e.$t("dragon_citylevel.current_level"))+":"+a(n.value.level),1)]),_:1},8,["class"]),o(d,{span:"12"},{default:l(()=>[o(qe,{modelValue:n.value.soulbound,"onUpdate:modelValue":s[1]||(s[1]=m=>n.value.soulbound=m)},{default:l(()=>[p(a(e.$t("dragon_citylevel.soulbound")),1)]),_:1},8,["modelValue"])]),_:1})]}),_:1}),o(I,{class:"mt-1",justify:"space-between"},{default:l(()=>[o(d,{span:"12"},{default:l(()=>[p(a(e.$t("dragon_citylevel.attribute_bonus"))+"\uFF1A"+a(r(T).find(t=>t.level==n.value.level).bonus)+"%",1)]),_:1}),o(d,{span:"12",class:B(n.value.soulbound?"":"text-gray-300")},{default:l(()=>[p(a(e.$t("dragon_citylevel.soulbound_bonus"))+"\uFF1A"+a(r(q).find(t=>t.level==n.value.level).bonus)+"%",1)]),_:1},8,["class"])]),_:1}),v("div",Mt,[y.value.stat1_type!=""?(i(),x(I,{key:0,justify:"center",class:"mt-2 ml-2 text-base"},{default:l(()=>[o(d,{span:"4"},{default:l(()=>[p(a(e.$t("dragon_citylevel."+y.value.stat1_type))+":",1)]),_:1}),o(d,{span:"10"},{default:l(()=>[o(te,{"input-width":"60px",modelValue:n.value[y.value.stat1_type],"onUpdate:modelValue":s[2]||(s[2]=t=>n.value[y.value.stat1_type]=t),step:"1",min:C.value.stat1-C.value.stat1_rand_range,max:C.value.stat1+C.value.stat1_rand_range},null,8,["modelValue","min","max"])]),_:1}),n.value.soulbound?(i(),x(d,{key:0,span:"10"},{default:l(()=>[p(" X"+a(r(T).find(t=>t.level==n.value.level).bonus+r(q).find(t=>t.level==n.value.level).bonus)+"%="+a(Math.floor(n.value[y.value.stat1_type]*(r(T).find(t=>t.level==n.value.level).bonus+r(q).find(t=>t.level==n.value.level).bonus)/100)),1)]),_:1})):(i(),x(d,{key:1,span:"10"},{default:l(()=>[p(" X"+a(r(T).find(t=>t.level==n.value.level).bonus)+"%="+a(Math.floor(n.value[y.value.stat1_type]*r(T).find(t=>t.level==n.value.level).bonus/100)),1)]),_:1}))]),_:1})):X("",!0),y.value.stat2_type!=""?(i(),x(I,{key:1,justify:"center",class:"mt-2 ml-2 text-base"},{default:l(()=>[o(d,{span:"4"},{default:l(()=>[p(a(e.$t("dragon_citylevel."+y.value.stat2_type))+":",1)]),_:1}),o(d,{span:"10"},{default:l(()=>[o(te,{"input-width":"60px",modelValue:n.value[y.value.stat2_type],"onUpdate:modelValue":s[3]||(s[3]=t=>n.value[y.value.stat2_type]=t),step:"1",min:C.value.stat2-C.value.stat2_rand_range,max:C.value.stat2+C.value.stat2_rand_range},null,8,["modelValue","min","max"])]),_:1}),n.value.soulbound?(i(),x(d,{key:0,span:"10"},{default:l(()=>[p(" X"+a(r(T).find(t=>t.level==n.value.level).bonus+r(q).find(t=>t.level==n.value.level).bonus)+"%="+a(Math.floor(n.value[y.value.stat2_type]*(r(T).find(t=>t.level==n.value.level).bonus+r(q).find(t=>t.level==n.value.level).bonus)/100)),1)]),_:1})):(i(),x(d,{key:1,span:"10"},{default:l(()=>[p(" X"+a(r(T).find(t=>t.level==n.value.level).bonus)+"%="+a(Math.floor(n.value[y.value.stat2_type]*r(T).find(t=>t.level==n.value.level).bonus/100)),1)]),_:1}))]),_:1})):X("",!0),y.value.stat3_type!=""?(i(),x(I,{key:2,justify:"center",class:"mt-2 ml-2 text-base"},{default:l(()=>[o(d,{span:"4"},{default:l(()=>[p(a(e.$t("dragon_citylevel."+y.value.stat3_type))+":",1)]),_:1}),o(d,{span:"10"},{default:l(()=>[o(te,{"input-width":"60px",modelValue:n.value[y.value.stat3_type],"onUpdate:modelValue":s[4]||(s[4]=t=>n.value[y.value.stat3_type]=t),step:"1",min:C.value.stat3-C.value.stat1_rand_range,max:C.value.stat3+C.value.stat3_rand_range},null,8,["modelValue","min","max"])]),_:1}),n.value.soulbound?(i(),x(d,{key:0,span:"10"},{default:l(()=>[p(" X"+a(r(T).find(t=>t.level==n.value.level).bonus+r(q).find(t=>t.level==n.value.level).bonus)+"%="+a(Math.floor(n.value[y.value.stat3_type]*(r(T).find(t=>t.level==n.value.level).bonus+r(q).find(t=>t.level==n.value.level).bonus)/100)),1)]),_:1})):(i(),x(d,{key:1,span:"10"},{default:l(()=>[p(" X"+a(r(T).find(t=>t.level==n.value.level).bonus)+"%="+a(Math.floor(n.value[y.value.stat3_type]*r(T).find(t=>t.level==n.value.level).bonus/100)),1)]),_:1}))]),_:1})):X("",!0)])])]),_:1},8,["show","title","confirmButtonText","cancelButtonText"])],64)}}});export{Gt as default};
