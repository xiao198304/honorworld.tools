import{c as _t,J as ht,K as P,G as ut,L as a,H as R,I as S,M as l,N as H,O as i,P as Z,Q as mt,R as p,S as pt,T as it,U as gt,V as yt,W as xt,X as k,Y as ct,Z as F,$ as vt}from"./index.6c2a73f9.js";import{M as at,p as dt}from"./nftdata.2594166f.js";import{s as $t,c as bt}from"./function-call.d2cd2a41.js";var ft={exports:{}};(function(C,z){(function(j,M){C.exports=M()})(_t,function(){var j=1e3,M=6e4,q=36e5,B="millisecond",y="second",g="minute",x="hour",D="day",I="week",N="month",et="quarter",A="year",J="date",st="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var s=["th","st","nd","rd"],t=o%100;return"["+o+(s[(t-20)%10]||s[t]||s[0])+"]"}},T=function(o,s,t){var n=String(o);return!n||n.length>=s?o:""+Array(s+1-n.length).join(t)+o},f={s:T,z:function(o){var s=-o.utcOffset(),t=Math.abs(s),n=Math.floor(t/60),e=t%60;return(s<=0?"+":"-")+T(n,2,"0")+":"+T(e,2,"0")},m:function o(s,t){if(s.date()<t.date())return-o(t,s);var n=12*(t.year()-s.year())+(t.month()-s.month()),e=s.clone().add(n,N),c=t-e<0,u=s.clone().add(n+(c?-1:1),N);return+(-(n+(t-e)/(c?e-u:u-e))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:N,y:A,w:I,d:D,D:J,h:x,m:g,s:y,ms:B,Q:et}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},$="en",d={};d[$]=E;var w=function(o){return o instanceof K},Y=function o(s,t,n){var e;if(!s)return $;if(typeof s=="string"){var c=s.toLowerCase();d[c]&&(e=c),t&&(d[c]=t,e=c);var u=s.split("-");if(!e&&u.length>1)return o(u[0])}else{var m=s.name;d[m]=s,e=m}return!n&&e&&($=e),e||!n&&$},r=function(o,s){if(w(o))return o.clone();var t=typeof s=="object"?s:{};return t.date=o,t.args=arguments,new K(t)},_=f;_.l=Y,_.i=w,_.w=function(o,s){return r(o,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var K=function(){function o(t){this.$L=Y(t.locale,null,!0),this.parse(t)}var s=o.prototype;return s.parse=function(t){this.$d=function(n){var e=n.date,c=n.utc;if(e===null)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(Q);if(u){var m=u[2]-1||0,b=(u[7]||"0").substring(0,3);return c?new Date(Date.UTC(u[1],m,u[3]||1,u[4]||0,u[5]||0,u[6]||0,b)):new Date(u[1],m,u[3]||1,u[4]||0,u[5]||0,u[6]||0,b)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},s.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},s.$utils=function(){return _},s.isValid=function(){return this.$d.toString()!==st},s.isSame=function(t,n){var e=r(t);return this.startOf(n)<=e&&e<=this.endOf(n)},s.isAfter=function(t,n){return r(t)<this.startOf(n)},s.isBefore=function(t,n){return this.endOf(n)<r(t)},s.$g=function(t,n,e){return _.u(t)?this[n]:this.set(e,t)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(t,n){var e=this,c=!!_.u(n)||n,u=_.p(t),m=function(G,L){var V=_.w(e.$u?Date.UTC(e.$y,L,G):new Date(e.$y,L,G),e);return c?V:V.endOf(D)},b=function(G,L){return _.w(e.toDate()[G].apply(e.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(L)),e)},v=this.$W,O=this.$M,U=this.$D,W="set"+(this.$u?"UTC":"");switch(u){case A:return c?m(1,0):m(31,11);case N:return c?m(1,O):m(0,O+1);case I:var X=this.$locale().weekStart||0,tt=(v<X?v+7:v)-X;return m(c?U-tt:U+(6-tt),O);case D:case J:return b(W+"Hours",0);case x:return b(W+"Minutes",1);case g:return b(W+"Seconds",2);case y:return b(W+"Milliseconds",3);default:return this.clone()}},s.endOf=function(t){return this.startOf(t,!1)},s.$set=function(t,n){var e,c=_.p(t),u="set"+(this.$u?"UTC":""),m=(e={},e[D]=u+"Date",e[J]=u+"Date",e[N]=u+"Month",e[A]=u+"FullYear",e[x]=u+"Hours",e[g]=u+"Minutes",e[y]=u+"Seconds",e[B]=u+"Milliseconds",e)[c],b=c===D?this.$D+(n-this.$W):n;if(c===N||c===A){var v=this.clone().set(J,1);v.$d[m](b),v.init(),this.$d=v.set(J,Math.min(this.$D,v.daysInMonth())).$d}else m&&this.$d[m](b);return this.init(),this},s.set=function(t,n){return this.clone().$set(t,n)},s.get=function(t){return this[_.p(t)]()},s.add=function(t,n){var e,c=this;t=Number(t);var u=_.p(n),m=function(O){var U=r(c);return _.w(U.date(U.date()+Math.round(O*t)),c)};if(u===N)return this.set(N,this.$M+t);if(u===A)return this.set(A,this.$y+t);if(u===D)return m(1);if(u===I)return m(7);var b=(e={},e[g]=M,e[x]=q,e[y]=j,e)[u]||1,v=this.$d.getTime()+t*b;return _.w(v,this)},s.subtract=function(t,n){return this.add(-1*t,n)},s.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||st;var c=t||"YYYY-MM-DDTHH:mm:ssZ",u=_.z(this),m=this.$H,b=this.$m,v=this.$M,O=e.weekdays,U=e.months,W=function(L,V,rt,nt){return L&&(L[V]||L(n,c))||rt[V].slice(0,nt)},X=function(L){return _.s(m%12||12,L,"0")},tt=e.meridiem||function(L,V,rt){var nt=L<12?"AM":"PM";return rt?nt.toLowerCase():nt},G={YY:String(this.$y).slice(-2),YYYY:this.$y,M:v+1,MM:_.s(v+1,2,"0"),MMM:W(e.monthsShort,v,U,3),MMMM:W(U,v),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:W(e.weekdaysMin,this.$W,O,2),ddd:W(e.weekdaysShort,this.$W,O,3),dddd:O[this.$W],H:String(m),HH:_.s(m,2,"0"),h:X(1),hh:X(2),a:tt(m,b,!0),A:tt(m,b,!1),m:String(b),mm:_.s(b,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:u};return c.replace(h,function(L,V){return V||G[L]||u.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(t,n,e){var c,u=_.p(n),m=r(t),b=(m.utcOffset()-this.utcOffset())*M,v=this-m,O=_.m(this,m);return O=(c={},c[A]=O/12,c[N]=O,c[et]=O/3,c[I]=(v-b)/6048e5,c[D]=(v-b)/864e5,c[x]=v/q,c[g]=v/M,c[y]=v/j,c)[u]||v,e?O:_.a(O)},s.daysInMonth=function(){return this.endOf(N).$D},s.$locale=function(){return d[this.$L]},s.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),c=Y(t,n,!0);return c&&(e.$L=c),e},s.clone=function(){return _.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},o}(),lt=K.prototype;return r.prototype=lt,[["$ms",B],["$s",y],["$m",g],["$H",x],["$W",D],["$M",N],["$y",A],["$D",J]].forEach(function(o){lt[o[1]]=function(s){return this.$g(s,o[0],o[1])}}),r.extend=function(o,s){return o.$i||(o(s,K,r),o.$i=!0),r},r.locale=Y,r.isDayjs=w,r.unix=function(o){return r(1e3*o)},r.en=d[$],r.Ls=d,r.p={},r})})(ft);const ot=ft.exports;function wt(C){return function(z,j){var M=parseFloat(z[C]),q=parseFloat(j[C]);return q<M?1:q>M?-1:0}}function Mt(C){return C.substring(0,2)=="\\x"||C.substring(0,2)=="0x"?C.substring(2,6)+".."+C.substring(C.length-4,C.length):C}const kt={class:"m-5 text-center"},St=ht({__name:"DataCell",props:{title:String,listLength:{type:Number,default:0}},emits:["changeCount"],setup(C,{emit:z}){const j=C,M=P(5),q=y=>{M.value+=y,z("changeCount",M)},B=()=>{M.value=5,z("changeCount",M)};return(y,g)=>{const x=R("van-cell"),D=R("van-cell-group");return S(),ut(D,{inset:"",class:"mt-5"},{default:a(()=>[l(x,{title:j.title,icon:"label-o"},{value:a(()=>[M.value>5?(S(),H("span",{key:0,onClick:g[0]||(g[0]=I=>B())},i(y.$t("common.show_only_5")),1)):Z("",!0)]),_:1},8,["title"]),mt(y.$slots,"default"),p("div",kt,[M.value<j.listLength?(S(),H("span",{key:0,class:"text-gray-500",onClick:g[1]||(g[1]=I=>q(5))},i(y.$t("common.add_more")),1)):Z("",!0)])]),_:3})}}}),Dt={style:{width:"90%"},class:"text-gray-400 text-sm text-left"},Ot={style:{width:"90%"},class:"mt-2"},Ct={key:0,class:"text-orange-400 text-4xl"},Ht={key:1,class:"text-fuchsia-400 text-4xl"},Nt={key:2,class:"text-blue-400 text-4xl"},Tt={key:3,class:"text-green-400 text-4xl"},Lt={key:4,class:"text-gray-400 text-4xl"},Yt={style:{width:"90%"},class:"text-left mt-1"},It={class:"text-gray-400 text-sm"},Ft={key:0,class:"text-black-500 text-sm ml-1"},jt={style:{width:"90%"},class:"text-left mt-1"},qt={class:"text-gray-400 text-sm"},At={class:"text-black-500 text-sm ml-1"},Wt={style:{width:"90%"},class:"text-left mt-1"},Bt={class:"text-gray-400 text-sm"},Jt={class:"text-black text-sm ml-1"},Ut={style:{width:"90%"},class:"text-left mt-1"},Vt={class:"text-gray-400 text-sm"},Rt={class:"text-black text-sm ml-1"},Zt={class:"text-base text-gray-400"},zt={class:"text-base text-gray-400"},Et={class:"text-base text-gray-400"},Pt=F("SSSR"),Gt={class:"text-base text-block-500"},Qt={class:"text-base text-slate-500"},Kt=F("SSR"),Xt={class:"text-base text-block-500"},te={class:"text-base text-slate-500"},ee=F("SR"),se={class:"text-base text-block-500"},ne={class:"text-base text-slate-500"},ae=F("R"),oe={class:"text-base text-block-500"},le={class:"text-base text-slate-500"},re=F("N"),ie={class:"text-base text-block-500"},ue={class:"text-base text-slate-500"},ce={key:0,class:"text-orange-500 mr-1"},de={key:1,class:"text-fuchsia-500 mr-1"},he={key:2,class:"text-blue-500 mr-1"},fe={key:3,class:"text-green-500 mr-1"},_e={key:4,class:"text-grey-500 mr-1"},ye=ht({__name:"index",setup(C){const{t:z}=pt(),j=P(""),M=P(""),q=P(0),B=P(0),y=P(0);let g=P([]),x=it({sssr:[],ssr:[],sr:[],r:[],n:[]}),D=null,I=it({last:[],luck:[],bad:[]}),N=it({last:5,luck:5,bad:5});const et=h=>N.last=h,A="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/callhero/";let J=at.filters.OpenBox();gt(async()=>{await st()}),yt(async()=>{at.removeAllListeners(),D&&clearInterval(D)});const st=async()=>{$t({duration:0,forbidClick:!0,message:z("common.Updating_data")}),D&&clearInterval(D),D=setInterval(()=>{j.value=ot().format("HH:mm:ss")});let h=[],E=A+"last12.json?="+ot().format("YYYYMMDDHHMM");const T=await xt(E);T.data.length>0&&(h.push(...T.data),M.value=ot.unix(T.starttimestamp).format("HH:mm")),Q(h),bt();let f=parseInt(T.endblock)+1,$=await at.queryFilter(J,f,"latest");if($.length>0){let d=await dt($);h.push(...d),Q(h)}at.on("OpenBox",async(d,w,Y,r,_,K,lt,o,s)=>{let t=await dt([s]);for(let n=0;n<h.length;n++)t=t.filter(e=>e.transactionHash!=h[n].transactionHash);h.push(...t),Q(h)})},Q=h=>{g.value=JSON.parse(JSON.stringify(h)),x.sssr=g.value.filter(d=>d.quality==5),x.ssr=g.value.filter(d=>d.quality==4),x.sr=g.value.filter(d=>d.quality==3),x.r=g.value.filter(d=>d.quality==2),x.n=g.value.filter(d=>d.quality==1);let E=-1,T=-1;h.forEach((d,w)=>{d.quality==5&&(E=w),d.quality==4&&(T=w)}),q.value=h.length-E-1,B.value=h.length-T-1;let f=.5+(.005-x.sssr.length/h.length)*40+(.025-x.ssr.length/h.length)*8+(.08-x.sr.length/h.length)*2;y.value=Number((f*100).toFixed(2));let $=h.reduce((d,w)=>{let Y=-1;if(d.length&&(Y=d.findIndex(function(r){return r.owner==w.owner&&r.blockNumber==w.blockNumber})),Y>=0)d[Y].totalnum[0]++,d[Y].totalnum[w.quality]++,d[Y].nfts.push(w);else{let r={owner:w.owner,totalnum:[1,0,0,0,0,0],timestamp:w.timestamp,blockNumber:w.blockNumber,nfts:[w]};r.totalnum[w.quality]++,d.push(r)}return d},[]);$=$.sort(wt("blockNumber")),I.last=$.reverse(),console.log("listArr.last.length : ",I.last.length)};return(h,E)=>{const T=R("van-grid-item"),f=R("van-col"),$=R("van-row"),d=R("van-tag"),w=R("van-grid"),Y=R("van-cell-group");return S(),H(ct,null,[l(Y,{inset:"",class:"mt-2"},{default:a(()=>[l(w,{"column-num":"2"},{default:a(()=>[l(T,{"use-slot":""},{default:a(()=>[p("div",Dt,i(h.$t("callhero.heartIndex")),1),p("div",Ot,[y.value>85?(S(),H("span",Ct,i(y.value)+"%",1)):y.value>70?(S(),H("span",Ht,i(y.value)+"%",1)):y.value>50?(S(),H("span",Nt,i(y.value)+"%",1)):y.value>30?(S(),H("span",Tt,i(y.value)+"%",1)):(S(),H("span",Lt,i(y.value)+"%",1))]),p("div",Yt,[p("span",It,i(h.$t("callhero.total_time"))+":",1),k(g).length?(S(),H("span",Ft,i(M.value)+"-"+i(j.value),1)):Z("",!0)]),p("div",jt,[p("span",qt,i(h.$t("callhero.total_open"))+":",1),p("span",At,i(k(g).length),1)]),p("div",Wt,[p("span",Bt,i(h.$t("callhero.no_orange"))+":",1),p("span",Jt,i(q.value)+"/200",1)]),p("div",Ut,[p("span",Vt,i(h.$t("callhero.no_purple"))+":",1),p("span",Rt,i(B.value)+"/40",1)])]),_:1}),l(T,{"use-slot":""},{default:a(()=>[l($,{style:{width:"90%"},justify:"space-between",class:"mt-1"},{default:a(()=>[l(f,{span:"8",class:"text-left"},{default:a(()=>[p("span",Zt,i(h.$t("callhero.title_nft")),1)]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",zt,i(h.$t("callhero.title_open")),1)]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",Et,i(h.$t("callhero.title_theory")),1)]),_:1})]),_:1}),l($,{style:{width:"90%"},justify:"space-between",class:"mt-1"},{default:a(()=>[l(f,{span:"8"},{default:a(()=>[l(d,{color:"#ff7105"},{default:a(()=>[Pt]),_:1})]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",Gt,i(k(x).sssr.length),1)]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",Qt,i((k(g).length*.005).toFixed(0)),1)]),_:1})]),_:1}),l($,{style:{width:"90%"},justify:"space-between",class:"mt-1"},{default:a(()=>[l(f,{span:"8"},{default:a(()=>[l(d,{color:"#9554fd"},{default:a(()=>[Kt]),_:1})]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",Xt,i(k(x).ssr.length),1)]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",te,i((k(g).length*.025).toFixed(0)),1)]),_:1})]),_:1}),l($,{style:{width:"90%"},justify:"space-between",class:"mt-1"},{default:a(()=>[l(f,{span:"8"},{default:a(()=>[l(d,{color:"#2d8eec"},{default:a(()=>[ee]),_:1})]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",se,i(k(x).sr.length),1)]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",ne,i((k(g).length*.12).toFixed(0)),1)]),_:1})]),_:1}),l($,{style:{width:"90%"},justify:"space-between",class:"mt-1"},{default:a(()=>[l(f,{span:"8"},{default:a(()=>[l(d,{color:"#10b981"},{default:a(()=>[ae]),_:1})]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",oe,i(k(x).r.length),1)]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",le,i((k(g).length*.35).toFixed(0)),1)]),_:1})]),_:1}),l($,{style:{width:"90%"},justify:"space-between",class:"mt-1"},{default:a(()=>[l(f,{span:"8"},{default:a(()=>[l(d,{color:"#6b7280"},{default:a(()=>[re]),_:1})]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",ie,i(k(x).n.length),1)]),_:1}),l(f,{span:"8",class:"text-center"},{default:a(()=>[p("span",ue,i((k(g).length*.5).toFixed(0)),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),(S(),ut(St,{title:h.$t("callhero.list_last"),listLength:k(I).last.length,onChangeCount:et,key:"last"+k(I).last.length},{default:a(()=>[l($,{justify:"center",class:"my-2 text-center"},{default:a(()=>[l(f,{span:"4",class:"text-base text-gray-500"},{default:a(()=>[F(i(h.$t("callhero.list_time")),1)]),_:1}),l(f,{span:"6",class:"text-base text-gray-500"},{default:a(()=>[F(i(h.$t("callhero.list_address")),1)]),_:1}),l(f,{span:"11",class:"text-base text-gray-500"},{default:a(()=>[F(i(h.$t("callhero.list_grades")),1)]),_:1}),l(f,{span:"3",class:"text-base text-gray-500"},{default:a(()=>[F(i(h.$t("callhero.list_total")),1)]),_:1})]),_:1}),(S(!0),H(ct,null,vt(k(I).last.slice(0,k(N).last),(r,_)=>(S(),ut($,{justify:"center",class:"text-center",style:{"border-top":"thin solid #e5e7eb"},key:"last"+r.blockNumber+r.owner+_*1e3+r.totalnum[0]},{default:a(()=>[l(f,{span:"4",class:"py-2"},{default:a(()=>[F(i(k(ot).unix(r.timestamp).format("HH:mm")),1)]),_:2},1024),l(f,{span:"6",class:"py-2"},{default:a(()=>[F(i(k(Mt)(r.owner)),1)]),_:2},1024),l(f,{span:"11",class:"py-2"},{default:a(()=>[r.totalnum[5]?(S(),H("span",ce,i(r.totalnum[5])+"sssr",1)):Z("",!0),r.totalnum[4]?(S(),H("span",de,i(r.totalnum[4])+"ssr",1)):Z("",!0),r.totalnum[3]?(S(),H("span",he,i(r.totalnum[3])+"sr",1)):Z("",!0),r.totalnum[2]?(S(),H("span",fe,i(r.totalnum[2])+"r",1)):Z("",!0),r.totalnum[1]?(S(),H("span",_e,i(r.totalnum[1])+"n",1)):Z("",!0)]),_:2},1024),l(f,{span:"3",class:"py-2"},{default:a(()=>[F(i(r.totalnum[0]),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["title","listLength"]))],64)}}});export{ye as default};
