import{a5 as Le,a2 as fe,a7 as Te,a8 as De,a9 as ne,aa as ge}from"./index.f06e802a.js";const Fe="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/honorworld/hwtethlpstark/address/last.zip.json",Oe=Le("pools",{state:()=>({hwtethlpstark:{address:{}}}),actions:{async initHwtethlpStarkAddress(){let e=Fe+"?="+fe().format("YYYYMMDDHHMM");this.hwtethlpstark.address=await Te(e)}}}),Tn=Oe,Dn="0x3EcC5A0d8b3456c5E1ab2B110f0a4da923dC49Ec";/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var $=9e15,V=1e9,ce="0123456789abcdef",x="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",y="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",le={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-$,maxE:$,crypto:!1},ve,R,m=!0,ie="[DecimalError] ",Y=ie+"Invalid argument: ",Ee=ie+"Precision limit exceeded",ke=ie+"crypto unavailable",Me="[object Decimal]",I=Math.floor,C=Math.pow,Ze=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,_e=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,He=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,be=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Z=1e7,w=7,Re=9007199254740991,Be=x.length-1,ae=y.length-1,d={toStringTag:Me};d.absoluteValue=d.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),p(e)};d.ceil=function(){return p(new this.constructor(this),this.e+1,2)};d.clampedTo=d.clamp=function(e,n){var i,r=this,t=r.constructor;if(e=new t(e),n=new t(n),!e.s||!n.s)return new t(NaN);if(e.gt(n))throw Error(Y+n);return i=r.cmp(e),i<0?e:r.cmp(n)>0?n:new t(r)};d.comparedTo=d.cmp=function(e){var n,i,r,t,s=this,o=s.d,u=(e=new s.constructor(e)).d,c=s.s,f=e.s;if(!o||!u)return!c||!f?NaN:c!==f?c:o===u?0:!o^c<0?1:-1;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==e.e)return s.e>e.e^c<0?1:-1;for(r=o.length,t=u.length,n=0,i=r<t?r:t;n<i;++n)if(o[n]!==u[n])return o[n]>u[n]^c<0?1:-1;return r===t?0:r>t^c<0?1:-1};d.cosine=d.cos=function(){var e,n,i=this,r=i.constructor;return i.d?i.d[0]?(e=r.precision,n=r.rounding,r.precision=e+Math.max(i.e,i.sd())+w,r.rounding=1,i=Ue(r,Ie(r,i)),r.precision=e,r.rounding=n,p(R==2||R==3?i.neg():i,e,n,!0)):new r(1):new r(NaN)};d.cubeRoot=d.cbrt=function(){var e,n,i,r,t,s,o,u,c,f,l=this,a=l.constructor;if(!l.isFinite()||l.isZero())return new a(l);for(m=!1,s=l.s*C(l.s*l,1/3),!s||Math.abs(s)==1/0?(i=S(l.d),e=l.e,(s=(e-i.length+1)%3)&&(i+=s==1||s==-2?"0":"00"),s=C(i,1/3),e=I((e+1)/3)-(e%3==(e<0?-1:2)),s==1/0?i="5e"+e:(i=s.toExponential(),i=i.slice(0,i.indexOf("e")+1)+e),r=new a(i),r.s=l.s):r=new a(s.toString()),o=(e=a.precision)+3;;)if(u=r,c=u.times(u).times(u),f=c.plus(l),r=k(f.plus(l).times(u),f.plus(c),o+2,1),S(u.d).slice(0,o)===(i=S(r.d)).slice(0,o))if(i=i.slice(o-3,o+1),i=="9999"||!t&&i=="4999"){if(!t&&(p(u,e+1,0),u.times(u).times(u).eq(l))){r=u;break}o+=4,t=1}else{(!+i||!+i.slice(1)&&i.charAt(0)=="5")&&(p(r,e+1,1),n=!r.times(r).times(r).eq(l));break}return m=!0,p(r,e,a.rounding,n)};d.decimalPlaces=d.dp=function(){var e,n=this.d,i=NaN;if(n){if(e=n.length-1,i=(e-I(this.e/w))*w,e=n[e],e)for(;e%10==0;e/=10)i--;i<0&&(i=0)}return i};d.dividedBy=d.div=function(e){return k(this,new this.constructor(e))};d.dividedToIntegerBy=d.divToInt=function(e){var n=this,i=n.constructor;return p(k(n,new i(e),0,1,1),i.precision,i.rounding)};d.equals=d.eq=function(e){return this.cmp(e)===0};d.floor=function(){return p(new this.constructor(this),this.e+1,3)};d.greaterThan=d.gt=function(e){return this.cmp(e)>0};d.greaterThanOrEqualTo=d.gte=function(e){var n=this.cmp(e);return n==1||n===0};d.hyperbolicCosine=d.cosh=function(){var e,n,i,r,t,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,r=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,t=s.d.length,t<32?(e=Math.ceil(t/3),n=(1/te(4,e)).toString()):(e=16,n="2.3283064365386962890625e-10"),s=J(o,1,s.times(n),new o(1),!0);for(var c,f=e,l=new o(8);f--;)c=s.times(s),s=u.minus(c.times(l.minus(c.times(l))));return p(s,o.precision=i,o.rounding=r,!0)};d.hyperbolicSine=d.sinh=function(){var e,n,i,r,t=this,s=t.constructor;if(!t.isFinite()||t.isZero())return new s(t);if(n=s.precision,i=s.rounding,s.precision=n+Math.max(t.e,t.sd())+4,s.rounding=1,r=t.d.length,r<3)t=J(s,2,t,t,!0);else{e=1.4*Math.sqrt(r),e=e>16?16:e|0,t=t.times(1/te(5,e)),t=J(s,2,t,t,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);e--;)o=t.times(t),t=t.times(u.plus(o.times(c.times(o).plus(f))))}return s.precision=n,s.rounding=i,p(t,n,i,!0)};d.hyperbolicTangent=d.tanh=function(){var e,n,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+7,r.rounding=1,k(i.sinh(),i.cosh(),r.precision=e,r.rounding=n)):new r(i.s)};d.inverseCosine=d.acos=function(){var e,n=this,i=n.constructor,r=n.abs().cmp(1),t=i.precision,s=i.rounding;return r!==-1?r===0?n.isNeg()?O(i,t,s):new i(0):new i(NaN):n.isZero()?O(i,t+4,s).times(.5):(i.precision=t+6,i.rounding=1,n=n.asin(),e=O(i,t+4,s).times(.5),i.precision=t,i.rounding=s,e.minus(n))};d.inverseHyperbolicCosine=d.acosh=function(){var e,n,i=this,r=i.constructor;return i.lte(1)?new r(i.eq(1)?0:NaN):i.isFinite()?(e=r.precision,n=r.rounding,r.precision=e+Math.max(Math.abs(i.e),i.sd())+4,r.rounding=1,m=!1,i=i.times(i).minus(1).sqrt().plus(i),m=!0,r.precision=e,r.rounding=n,i.ln()):new r(i)};d.inverseHyperbolicSine=d.asinh=function(){var e,n,i=this,r=i.constructor;return!i.isFinite()||i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+2*Math.max(Math.abs(i.e),i.sd())+6,r.rounding=1,m=!1,i=i.times(i).plus(1).sqrt().plus(i),m=!0,r.precision=e,r.rounding=n,i.ln())};d.inverseHyperbolicTangent=d.atanh=function(){var e,n,i,r,t=this,s=t.constructor;return t.isFinite()?t.e>=0?new s(t.abs().eq(1)?t.s/0:t.isZero()?t:NaN):(e=s.precision,n=s.rounding,r=t.sd(),Math.max(r,e)<2*-t.e-1?p(new s(t),e,n,!0):(s.precision=i=r-t.e,t=k(t.plus(1),new s(1).minus(t),i+e,1),s.precision=e+4,s.rounding=1,t=t.ln(),s.precision=e,s.rounding=n,t.times(.5))):new s(NaN)};d.inverseSine=d.asin=function(){var e,n,i,r,t=this,s=t.constructor;return t.isZero()?new s(t):(n=t.abs().cmp(1),i=s.precision,r=s.rounding,n!==-1?n===0?(e=O(s,i+4,r).times(.5),e.s=t.s,e):new s(NaN):(s.precision=i+6,s.rounding=1,t=t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=r,t.times(2)))};d.inverseTangent=d.atan=function(){var e,n,i,r,t,s,o,u,c,f=this,l=f.constructor,a=l.precision,h=l.rounding;if(f.isFinite()){if(f.isZero())return new l(f);if(f.abs().eq(1)&&a+4<=ae)return o=O(l,a+4,h).times(.25),o.s=f.s,o}else{if(!f.s)return new l(NaN);if(a+4<=ae)return o=O(l,a+4,h).times(.5),o.s=f.s,o}for(l.precision=u=a+10,l.rounding=1,i=Math.min(28,u/w+2|0),e=i;e;--e)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(m=!1,n=Math.ceil(u/w),r=1,c=f.times(f),o=new l(f),t=f;e!==-1;)if(t=t.times(c),s=o.minus(t.div(r+=2)),t=t.times(c),o=s.plus(t.div(r+=2)),o.d[n]!==void 0)for(e=n;o.d[e]===s.d[e]&&e--;);return i&&(o=o.times(2<<i-1)),m=!0,p(o,l.precision=a,l.rounding=h,!0)};d.isFinite=function(){return!!this.d};d.isInteger=d.isInt=function(){return!!this.d&&I(this.e/w)>this.d.length-2};d.isNaN=function(){return!this.s};d.isNegative=d.isNeg=function(){return this.s<0};d.isPositive=d.isPos=function(){return this.s>0};d.isZero=function(){return!!this.d&&this.d[0]===0};d.lessThan=d.lt=function(e){return this.cmp(e)<0};d.lessThanOrEqualTo=d.lte=function(e){return this.cmp(e)<1};d.logarithm=d.log=function(e){var n,i,r,t,s,o,u,c,f=this,l=f.constructor,a=l.precision,h=l.rounding,g=5;if(e==null)e=new l(10),n=!0;else{if(e=new l(e),i=e.d,e.s<0||!i||!i[0]||e.eq(1))return new l(NaN);n=e.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new l(i&&!i[0]?-1/0:f.s!=1?NaN:i?0:1/0);if(n)if(i.length>1)s=!0;else{for(t=i[0];t%10===0;)t/=10;s=t!==1}if(m=!1,u=a+g,o=U(f,u),r=n?ee(l,u+10):U(e,u),c=k(o,r,u,1),G(c.d,t=a,h))do if(u+=10,o=U(f,u),r=n?ee(l,u+10):U(e,u),c=k(o,r,u,1),!s){+S(c.d).slice(t+1,t+15)+1==1e14&&(c=p(c,a+1,0));break}while(G(c.d,t+=10,h));return m=!0,p(c,a,h)};d.minus=d.sub=function(e){var n,i,r,t,s,o,u,c,f,l,a,h,g=this,v=g.constructor;if(e=new v(e),!g.d||!e.d)return!g.s||!e.s?e=new v(NaN):g.d?e.s=-e.s:e=new v(e.d||g.s!==e.s?g:NaN),e;if(g.s!=e.s)return e.s=-e.s,g.plus(e);if(f=g.d,h=e.d,u=v.precision,c=v.rounding,!f[0]||!h[0]){if(h[0])e.s=-e.s;else if(f[0])e=new v(g);else return new v(c===3?-0:0);return m?p(e,u,c):e}if(i=I(e.e/w),l=I(g.e/w),f=f.slice(),s=l-i,s){for(a=s<0,a?(n=f,s=-s,o=h.length):(n=h,i=l,o=f.length),r=Math.max(Math.ceil(u/w),o)+2,s>r&&(s=r,n.length=1),n.reverse(),r=s;r--;)n.push(0);n.reverse()}else{for(r=f.length,o=h.length,a=r<o,a&&(o=r),r=0;r<o;r++)if(f[r]!=h[r]){a=f[r]<h[r];break}s=0}for(a&&(n=f,f=h,h=n,e.s=-e.s),o=f.length,r=h.length-o;r>0;--r)f[o++]=0;for(r=h.length;r>s;){if(f[--r]<h[r]){for(t=r;t&&f[--t]===0;)f[t]=Z-1;--f[t],f[r]+=Z}f[r]-=h[r]}for(;f[--o]===0;)f.pop();for(;f[0]===0;f.shift())--i;return f[0]?(e.d=f,e.e=re(f,i),m?p(e,u,c):e):new v(c===3?-0:0)};d.modulo=d.mod=function(e){var n,i=this,r=i.constructor;return e=new r(e),!i.d||!e.s||e.d&&!e.d[0]?new r(NaN):!e.d||i.d&&!i.d[0]?p(new r(i),r.precision,r.rounding):(m=!1,r.modulo==9?(n=k(i,e.abs(),0,3,1),n.s*=e.s):n=k(i,e,0,r.modulo,1),n=n.times(e),m=!0,i.minus(n))};d.naturalExponential=d.exp=function(){return he(this)};d.naturalLogarithm=d.ln=function(){return U(this)};d.negated=d.neg=function(){var e=new this.constructor(this);return e.s=-e.s,p(e)};d.plus=d.add=function(e){var n,i,r,t,s,o,u,c,f,l,a=this,h=a.constructor;if(e=new h(e),!a.d||!e.d)return!a.s||!e.s?e=new h(NaN):a.d||(e=new h(e.d||a.s===e.s?a:NaN)),e;if(a.s!=e.s)return e.s=-e.s,a.minus(e);if(f=a.d,l=e.d,u=h.precision,c=h.rounding,!f[0]||!l[0])return l[0]||(e=new h(a)),m?p(e,u,c):e;if(s=I(a.e/w),r=I(e.e/w),f=f.slice(),t=s-r,t){for(t<0?(i=f,t=-t,o=l.length):(i=l,r=s,o=f.length),s=Math.ceil(u/w),o=s>o?s+1:o+1,t>o&&(t=o,i.length=1),i.reverse();t--;)i.push(0);i.reverse()}for(o=f.length,t=l.length,o-t<0&&(t=o,i=l,l=f,f=i),n=0;t;)n=(f[--t]=f[t]+l[t]+n)/Z|0,f[t]%=Z;for(n&&(f.unshift(n),++r),o=f.length;f[--o]==0;)f.pop();return e.d=f,e.e=re(f,r),m?p(e,u,c):e};d.precision=d.sd=function(e){var n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Y+e);return i.d?(n=Ce(i.d),e&&i.e+1>n&&(n=i.e+1)):n=NaN,n};d.round=function(){var e=this,n=e.constructor;return p(new n(e),e.e+1,n.rounding)};d.sine=d.sin=function(){var e,n,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+Math.max(i.e,i.sd())+w,r.rounding=1,i=Ve(r,Ie(r,i)),r.precision=e,r.rounding=n,p(R>2?i.neg():i,e,n,!0)):new r(NaN)};d.squareRoot=d.sqrt=function(){var e,n,i,r,t,s,o=this,u=o.d,c=o.e,f=o.s,l=o.constructor;if(f!==1||!u||!u[0])return new l(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(m=!1,f=Math.sqrt(+o),f==0||f==1/0?(n=S(u),(n.length+c)%2==0&&(n+="0"),f=Math.sqrt(n),c=I((c+1)/2)-(c<0||c%2),f==1/0?n="5e"+c:(n=f.toExponential(),n=n.slice(0,n.indexOf("e")+1)+c),r=new l(n)):r=new l(f.toString()),i=(c=l.precision)+3;;)if(s=r,r=s.plus(k(o,s,i+2,1)).times(.5),S(s.d).slice(0,i)===(n=S(r.d)).slice(0,i))if(n=n.slice(i-3,i+1),n=="9999"||!t&&n=="4999"){if(!t&&(p(s,c+1,0),s.times(s).eq(o))){r=s;break}i+=4,t=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(p(r,c+1,1),e=!r.times(r).eq(o));break}return m=!0,p(r,c,l.rounding,e)};d.tangent=d.tan=function(){var e,n,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+10,r.rounding=1,i=i.sin(),i.s=1,i=k(i,new r(1).minus(i.times(i)).sqrt(),e+10,0),r.precision=e,r.rounding=n,p(R==2||R==4?i.neg():i,e,n,!0)):new r(NaN)};d.times=d.mul=function(e){var n,i,r,t,s,o,u,c,f,l=this,a=l.constructor,h=l.d,g=(e=new a(e)).d;if(e.s*=l.s,!h||!h[0]||!g||!g[0])return new a(!e.s||h&&!h[0]&&!g||g&&!g[0]&&!h?NaN:!h||!g?e.s/0:e.s*0);for(i=I(l.e/w)+I(e.e/w),c=h.length,f=g.length,c<f&&(s=h,h=g,g=s,o=c,c=f,f=o),s=[],o=c+f,r=o;r--;)s.push(0);for(r=f;--r>=0;){for(n=0,t=c+r;t>r;)u=s[t]+g[r]*h[t-r-1]+n,s[t--]=u%Z|0,n=u/Z|0;s[t]=(s[t]+n)%Z|0}for(;!s[--o];)s.pop();return n?++i:s.shift(),e.d=s,e.e=re(s,i),m?p(e,a.precision,a.rounding):e};d.toBinary=function(e,n){return pe(this,2,e,n)};d.toDecimalPlaces=d.toDP=function(e,n){var i=this,r=i.constructor;return i=new r(i),e===void 0?i:(T(e,0,V),n===void 0?n=r.rounding:T(n,0,8),p(i,e+i.e+1,n))};d.toExponential=function(e,n){var i,r=this,t=r.constructor;return e===void 0?i=_(r,!0):(T(e,0,V),n===void 0?n=t.rounding:T(n,0,8),r=p(new t(r),e+1,n),i=_(r,!0,e+1)),r.isNeg()&&!r.isZero()?"-"+i:i};d.toFixed=function(e,n){var i,r,t=this,s=t.constructor;return e===void 0?i=_(t):(T(e,0,V),n===void 0?n=s.rounding:T(n,0,8),r=p(new s(t),e+t.e+1,n),i=_(r,!1,e+r.e+1)),t.isNeg()&&!t.isZero()?"-"+i:i};d.toFraction=function(e){var n,i,r,t,s,o,u,c,f,l,a,h,g=this,v=g.d,N=g.constructor;if(!v)return new N(g);if(f=i=new N(1),r=c=new N(0),n=new N(r),s=n.e=Ce(v)-g.e-1,o=s%w,n.d[0]=C(10,o<0?w+o:o),e==null)e=s>0?n:f;else{if(u=new N(e),!u.isInt()||u.lt(f))throw Error(Y+u);e=u.gt(n)?s>0?n:f:u}for(m=!1,u=new N(S(v)),l=N.precision,N.precision=s=v.length*w*2;a=k(u,n,0,1,1),t=i.plus(a.times(r)),t.cmp(e)!=1;)i=r,r=t,t=f,f=c.plus(a.times(t)),c=t,t=n,n=u.minus(a.times(t)),u=t;return t=k(e.minus(i),r,0,1,1),c=c.plus(t.times(f)),i=i.plus(t.times(r)),c.s=f.s=g.s,h=k(f,r,s,1).minus(g).abs().cmp(k(c,i,s,1).minus(g).abs())<1?[f,r]:[c,i],N.precision=l,m=!0,h};d.toHexadecimal=d.toHex=function(e,n){return pe(this,16,e,n)};d.toNearest=function(e,n){var i=this,r=i.constructor;if(i=new r(i),e==null){if(!i.d)return i;e=new r(1),n=r.rounding}else{if(e=new r(e),n===void 0?n=r.rounding:T(n,0,8),!i.d)return e.s?i:e;if(!e.d)return e.s&&(e.s=i.s),e}return e.d[0]?(m=!1,i=k(i,e,0,n,1).times(e),m=!0,p(i)):(e.s=i.s,i=e),i};d.toNumber=function(){return+this};d.toOctal=function(e,n){return pe(this,8,e,n)};d.toPower=d.pow=function(e){var n,i,r,t,s,o,u=this,c=u.constructor,f=+(e=new c(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new c(C(+u,f));if(u=new c(u),u.eq(1))return u;if(r=c.precision,s=c.rounding,e.eq(1))return p(u,r,s);if(n=I(e.e/w),n>=e.d.length-1&&(i=f<0?-f:f)<=Re)return t=Se(c,u,i,r),e.s<0?new c(1).div(t):p(t,r,s);if(o=u.s,o<0){if(n<e.d.length-1)return new c(NaN);if((e.d[n]&1)==0&&(o=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=o,u}return i=C(+u,f),n=i==0||!isFinite(i)?I(f*(Math.log("0."+S(u.d))/Math.LN10+u.e+1)):new c(i+"").e,n>c.maxE+1||n<c.minE-1?new c(n>0?o/0:0):(m=!1,c.rounding=u.s=1,i=Math.min(12,(n+"").length),t=he(e.times(U(u,r+i)),r),t.d&&(t=p(t,r+5,1),G(t.d,r,s)&&(n=r+10,t=p(he(e.times(U(u,n+i)),n),n+5,1),+S(t.d).slice(r+1,r+15)+1==1e14&&(t=p(t,r+1,0)))),t.s=o,m=!0,c.rounding=s,p(t,r,s))};d.toPrecision=function(e,n){var i,r=this,t=r.constructor;return e===void 0?i=_(r,r.e<=t.toExpNeg||r.e>=t.toExpPos):(T(e,1,V),n===void 0?n=t.rounding:T(n,0,8),r=p(new t(r),e,n),i=_(r,e<=r.e||r.e<=t.toExpNeg,e)),r.isNeg()&&!r.isZero()?"-"+i:i};d.toSignificantDigits=d.toSD=function(e,n){var i=this,r=i.constructor;return e===void 0?(e=r.precision,n=r.rounding):(T(e,1,V),n===void 0?n=r.rounding:T(n,0,8)),p(new r(i),e,n)};d.toString=function(){var e=this,n=e.constructor,i=_(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+i:i};d.truncated=d.trunc=function(){return p(new this.constructor(this),this.e+1,1)};d.valueOf=d.toJSON=function(){var e=this,n=e.constructor,i=_(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+i:i};function S(e){var n,i,r,t=e.length-1,s="",o=e[0];if(t>0){for(s+=o,n=1;n<t;n++)r=e[n]+"",i=w-r.length,i&&(s+=B(i)),s+=r;o=e[n],r=o+"",i=w-r.length,i&&(s+=B(i))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function T(e,n,i){if(e!==~~e||e<n||e>i)throw Error(Y+e)}function G(e,n,i,r){var t,s,o,u;for(s=e[0];s>=10;s/=10)--n;return--n<0?(n+=w,t=0):(t=Math.ceil((n+1)/w),n%=w),s=C(10,w-n),u=e[t]%s|0,r==null?n<3?(n==0?u=u/100|0:n==1&&(u=u/10|0),o=i<4&&u==99999||i>3&&u==49999||u==5e4||u==0):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(e[t+1]/s/100|0)==C(10,n-2)-1||(u==s/2||u==0)&&(e[t+1]/s/100|0)==0:n<4?(n==0?u=u/1e3|0:n==1?u=u/100|0:n==2&&(u=u/10|0),o=(r||i<4)&&u==9999||!r&&i>3&&u==4999):o=((r||i<4)&&u+1==s||!r&&i>3&&u+1==s/2)&&(e[t+1]/s/1e3|0)==C(10,n-3)-1,o}function j(e,n,i){for(var r,t=[0],s,o=0,u=e.length;o<u;){for(s=t.length;s--;)t[s]*=n;for(t[0]+=ce.indexOf(e.charAt(o++)),r=0;r<t.length;r++)t[r]>i-1&&(t[r+1]===void 0&&(t[r+1]=0),t[r+1]+=t[r]/i|0,t[r]%=i)}return t.reverse()}function Ue(e,n){var i,r,t;if(n.isZero())return n;r=n.d.length,r<32?(i=Math.ceil(r/3),t=(1/te(4,i)).toString()):(i=16,t="2.3283064365386962890625e-10"),e.precision+=i,n=J(e,1,n.times(t),new e(1));for(var s=i;s--;){var o=n.times(n);n=o.times(o).minus(o).times(8).plus(1)}return e.precision-=i,n}var k=function(){function e(r,t,s){var o,u=0,c=r.length;for(r=r.slice();c--;)o=r[c]*t+u,r[c]=o%s|0,u=o/s|0;return u&&r.unshift(u),r}function n(r,t,s,o){var u,c;if(s!=o)c=s>o?1:-1;else for(u=c=0;u<s;u++)if(r[u]!=t[u]){c=r[u]>t[u]?1:-1;break}return c}function i(r,t,s,o){for(var u=0;s--;)r[s]-=u,u=r[s]<t[s]?1:0,r[s]=u*o+r[s]-t[s];for(;!r[0]&&r.length>1;)r.shift()}return function(r,t,s,o,u,c){var f,l,a,h,g,v,N,A,b,D,E,q,X,H,se,K,W,oe,F,Q,z=r.constructor,ue=r.s==t.s?1:-1,P=r.d,M=t.d;if(!P||!P[0]||!M||!M[0])return new z(!r.s||!t.s||(P?M&&P[0]==M[0]:!M)?NaN:P&&P[0]==0||!M?ue*0:ue/0);for(c?(g=1,l=r.e-t.e):(c=Z,g=w,l=I(r.e/g)-I(t.e/g)),F=M.length,W=P.length,b=new z(ue),D=b.d=[],a=0;M[a]==(P[a]||0);a++);if(M[a]>(P[a]||0)&&l--,s==null?(H=s=z.precision,o=z.rounding):u?H=s+(r.e-t.e)+1:H=s,H<0)D.push(1),v=!0;else{if(H=H/g+2|0,a=0,F==1){for(h=0,M=M[0],H++;(a<W||h)&&H--;a++)se=h*c+(P[a]||0),D[a]=se/M|0,h=se%M|0;v=h||a<W}else{for(h=c/(M[0]+1)|0,h>1&&(M=e(M,h,c),P=e(P,h,c),F=M.length,W=P.length),K=F,E=P.slice(0,F),q=E.length;q<F;)E[q++]=0;Q=M.slice(),Q.unshift(0),oe=M[0],M[1]>=c/2&&++oe;do h=0,f=n(M,E,F,q),f<0?(X=E[0],F!=q&&(X=X*c+(E[1]||0)),h=X/oe|0,h>1?(h>=c&&(h=c-1),N=e(M,h,c),A=N.length,q=E.length,f=n(N,E,A,q),f==1&&(h--,i(N,F<A?Q:M,A,c))):(h==0&&(f=h=1),N=M.slice()),A=N.length,A<q&&N.unshift(0),i(E,N,q,c),f==-1&&(q=E.length,f=n(M,E,F,q),f<1&&(h++,i(E,F<q?Q:M,q,c))),q=E.length):f===0&&(h++,E=[0]),D[a++]=h,f&&E[0]?E[q++]=P[K]||0:(E=[P[K]],q=1);while((K++<W||E[0]!==void 0)&&H--);v=E[0]!==void 0}D[0]||D.shift()}if(g==1)b.e=l,ve=v;else{for(a=1,h=D[0];h>=10;h/=10)a++;b.e=a+l*g-1,p(b,u?s+b.e+1:s,o,v)}return b}}();function p(e,n,i,r){var t,s,o,u,c,f,l,a,h,g=e.constructor;e:if(n!=null){if(a=e.d,!a)return e;for(t=1,u=a[0];u>=10;u/=10)t++;if(s=n-t,s<0)s+=w,o=n,l=a[h=0],c=l/C(10,t-o-1)%10|0;else if(h=Math.ceil((s+1)/w),u=a.length,h>=u)if(r){for(;u++<=h;)a.push(0);l=c=0,t=1,s%=w,o=s-w+1}else break e;else{for(l=u=a[h],t=1;u>=10;u/=10)t++;s%=w,o=s-w+t,c=o<0?0:l/C(10,t-o-1)%10|0}if(r=r||n<0||a[h+1]!==void 0||(o<0?l:l%C(10,t-o-1)),f=i<4?(c||r)&&(i==0||i==(e.s<0?3:2)):c>5||c==5&&(i==4||r||i==6&&(s>0?o>0?l/C(10,t-o):0:a[h-1])%10&1||i==(e.s<0?8:7)),n<1||!a[0])return a.length=0,f?(n-=e.e+1,a[0]=C(10,(w-n%w)%w),e.e=-n||0):a[0]=e.e=0,e;if(s==0?(a.length=h,u=1,h--):(a.length=h+1,u=C(10,w-s),a[h]=o>0?(l/C(10,t-o)%C(10,o)|0)*u:0),f)for(;;)if(h==0){for(s=1,o=a[0];o>=10;o/=10)s++;for(o=a[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(e.e++,a[0]==Z&&(a[0]=1));break}else{if(a[h]+=u,a[h]!=Z)break;a[h--]=0,u=1}for(s=a.length;a[--s]===0;)a.pop()}return m&&(e.e>g.maxE?(e.d=null,e.e=NaN):e.e<g.minE&&(e.e=0,e.d=[0])),e}function _(e,n,i){if(!e.isFinite())return Pe(e);var r,t=e.e,s=S(e.d),o=s.length;return n?(i&&(r=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+B(r):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(e.e<0?"e":"e+")+e.e):t<0?(s="0."+B(-t-1)+s,i&&(r=i-o)>0&&(s+=B(r))):t>=o?(s+=B(t+1-o),i&&(r=i-t-1)>0&&(s=s+"."+B(r))):((r=t+1)<o&&(s=s.slice(0,r)+"."+s.slice(r)),i&&(r=i-o)>0&&(t+1===o&&(s+="."),s+=B(r))),s}function re(e,n){var i=e[0];for(n*=w;i>=10;i/=10)n++;return n}function ee(e,n,i){if(n>Be)throw m=!0,i&&(e.precision=i),Error(Ee);return p(new e(x),n,1,!0)}function O(e,n,i){if(n>ae)throw Error(Ee);return p(new e(y),n,i,!0)}function Ce(e){var n=e.length-1,i=n*w+1;if(n=e[n],n){for(;n%10==0;n/=10)i--;for(n=e[0];n>=10;n/=10)i++}return i}function B(e){for(var n="";e--;)n+="0";return n}function Se(e,n,i,r){var t,s=new e(1),o=Math.ceil(r/w+4);for(m=!1;;){if(i%2&&(s=s.times(n),me(s.d,o)&&(t=!0)),i=I(i/2),i===0){i=s.d.length-1,t&&s.d[i]===0&&++s.d[i];break}n=n.times(n),me(n.d,o)}return m=!0,s}function we(e){return e.d[e.d.length-1]&1}function qe(e,n,i){for(var r,t=new e(n[0]),s=0;++s<n.length;)if(r=new e(n[s]),r.s)t[i](r)&&(t=r);else{t=r;break}return t}function he(e,n){var i,r,t,s,o,u,c,f=0,l=0,a=0,h=e.constructor,g=h.rounding,v=h.precision;if(!e.d||!e.d[0]||e.e>17)return new h(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(n==null?(m=!1,c=v):c=n,u=new h(.03125);e.e>-2;)e=e.times(u),a+=5;for(r=Math.log(C(2,a))/Math.LN10*2+5|0,c+=r,i=s=o=new h(1),h.precision=c;;){if(s=p(s.times(e),c,1),i=i.times(++l),u=o.plus(k(s,i,c,1)),S(u.d).slice(0,c)===S(o.d).slice(0,c)){for(t=a;t--;)o=p(o.times(o),c,1);if(n==null)if(f<3&&G(o.d,c-r,g,f))h.precision=c+=10,i=s=u=new h(1),l=0,f++;else return p(o,h.precision=v,g,m=!0);else return h.precision=v,o}o=u}}function U(e,n){var i,r,t,s,o,u,c,f,l,a,h,g=1,v=10,N=e,A=N.d,b=N.constructor,D=b.rounding,E=b.precision;if(N.s<0||!A||!A[0]||!N.e&&A[0]==1&&A.length==1)return new b(A&&!A[0]?-1/0:N.s!=1?NaN:A?0:N);if(n==null?(m=!1,l=E):l=n,b.precision=l+=v,i=S(A),r=i.charAt(0),Math.abs(s=N.e)<15e14){for(;r<7&&r!=1||r==1&&i.charAt(1)>3;)N=N.times(e),i=S(N.d),r=i.charAt(0),g++;s=N.e,r>1?(N=new b("0."+i),s++):N=new b(r+"."+i.slice(1))}else return f=ee(b,l+2,E).times(s+""),N=U(new b(r+"."+i.slice(1)),l-v).plus(f),b.precision=E,n==null?p(N,E,D,m=!0):N;for(a=N,c=o=N=k(N.minus(1),N.plus(1),l,1),h=p(N.times(N),l,1),t=3;;){if(o=p(o.times(h),l,1),f=c.plus(k(o,new b(t),l,1)),S(f.d).slice(0,l)===S(c.d).slice(0,l))if(c=c.times(2),s!==0&&(c=c.plus(ee(b,l+2,E).times(s+""))),c=k(c,new b(g),l,1),n==null)if(G(c.d,l-v,D,u))b.precision=l+=v,f=o=N=k(a.minus(1),a.plus(1),l,1),h=p(N.times(N),l,1),t=u=1;else return p(c,b.precision=E,D,m=!0);else return b.precision=E,c;c=f,t+=2}}function Pe(e){return String(e.s*e.s/0)}function de(e,n){var i,r,t;for((i=n.indexOf("."))>-1&&(n=n.replace(".","")),(r=n.search(/e/i))>0?(i<0&&(i=r),i+=+n.slice(r+1),n=n.substring(0,r)):i<0&&(i=n.length),r=0;n.charCodeAt(r)===48;r++);for(t=n.length;n.charCodeAt(t-1)===48;--t);if(n=n.slice(r,t),n){if(t-=r,e.e=i=i-r-1,e.d=[],r=(i+1)%w,i<0&&(r+=w),r<t){for(r&&e.d.push(+n.slice(0,r)),t-=w;r<t;)e.d.push(+n.slice(r,r+=w));n=n.slice(r),r=w-n.length}else r-=t;for(;r--;)n+="0";e.d.push(+n),m&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function Ye(e,n){var i,r,t,s,o,u,c,f,l;if(n.indexOf("_")>-1){if(n=n.replace(/(\d)_(?=\d)/g,"$1"),be.test(n))return de(e,n)}else if(n==="Infinity"||n==="NaN")return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(_e.test(n))i=16,n=n.toLowerCase();else if(Ze.test(n))i=2;else if(He.test(n))i=8;else throw Error(Y+n);for(s=n.search(/p/i),s>0?(c=+n.slice(s+1),n=n.substring(2,s)):n=n.slice(2),s=n.indexOf("."),o=s>=0,r=e.constructor,o&&(n=n.replace(".",""),u=n.length,s=u-s,t=Se(r,new r(i),s,s*2)),f=j(n,i,Z),l=f.length-1,s=l;f[s]===0;--s)f.pop();return s<0?new r(e.s*0):(e.e=re(f,l),e.d=f,m=!1,o&&(e=k(e,t,u*4)),c&&(e=e.times(Math.abs(c)<54?C(2,c):L.pow(2,c))),m=!0,e)}function Ve(e,n){var i,r=n.d.length;if(r<3)return n.isZero()?n:J(e,2,n,n);i=1.4*Math.sqrt(r),i=i>16?16:i|0,n=n.times(1/te(5,i)),n=J(e,2,n,n);for(var t,s=new e(5),o=new e(16),u=new e(20);i--;)t=n.times(n),n=n.times(s.plus(t.times(o.times(t).minus(u))));return n}function J(e,n,i,r,t){var s,o,u,c,f=e.precision,l=Math.ceil(f/w);for(m=!1,c=i.times(i),u=new e(r);;){if(o=k(u.times(c),new e(n++*n++),f,1),u=t?r.plus(o):r.minus(o),r=k(o.times(c),new e(n++*n++),f,1),o=u.plus(r),o.d[l]!==void 0){for(s=l;o.d[s]===u.d[s]&&s--;);if(s==-1)break}s=u,u=r,r=o,o=s}return m=!0,o.d.length=l+1,o}function te(e,n){for(var i=e;--n;)i*=e;return i}function Ie(e,n){var i,r=n.s<0,t=O(e,e.precision,1),s=t.times(.5);if(n=n.abs(),n.lte(s))return R=r?4:1,n;if(i=n.divToInt(t),i.isZero())R=r?3:2;else{if(n=n.minus(i.times(t)),n.lte(s))return R=we(i)?r?2:3:r?4:1,n;R=we(i)?r?1:4:r?3:2}return n.minus(t).abs()}function pe(e,n,i,r){var t,s,o,u,c,f,l,a,h,g=e.constructor,v=i!==void 0;if(v?(T(i,1,V),r===void 0?r=g.rounding:T(r,0,8)):(i=g.precision,r=g.rounding),!e.isFinite())l=Pe(e);else{for(l=_(e),o=l.indexOf("."),v?(t=2,n==16?i=i*4-3:n==8&&(i=i*3-2)):t=n,o>=0&&(l=l.replace(".",""),h=new g(1),h.e=l.length-o,h.d=j(_(h),10,t),h.e=h.d.length),a=j(l,10,t),s=c=a.length;a[--c]==0;)a.pop();if(!a[0])l=v?"0p+0":"0";else{if(o<0?s--:(e=new g(e),e.d=a,e.e=s,e=k(e,h,i,r,0,t),a=e.d,s=e.e,f=ve),o=a[i],u=t/2,f=f||a[i+1]!==void 0,f=r<4?(o!==void 0||f)&&(r===0||r===(e.s<0?3:2)):o>u||o===u&&(r===4||f||r===6&&a[i-1]&1||r===(e.s<0?8:7)),a.length=i,f)for(;++a[--i]>t-1;)a[i]=0,i||(++s,a.unshift(1));for(c=a.length;!a[c-1];--c);for(o=0,l="";o<c;o++)l+=ce.charAt(a[o]);if(v){if(c>1)if(n==16||n==8){for(o=n==16?4:3,--c;c%o;c++)l+="0";for(a=j(l,t,n),c=a.length;!a[c-1];--c);for(o=1,l="1.";o<c;o++)l+=ce.charAt(a[o])}else l=l.charAt(0)+"."+l.slice(1);l=l+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)l="0"+l;l="0."+l}else if(++s>c)for(s-=c;s--;)l+="0";else s<c&&(l=l.slice(0,s)+"."+l.slice(s))}l=(n==16?"0x":n==2?"0b":n==8?"0o":"")+l}return e.s<0?"-"+l:l}function me(e,n){if(e.length>n)return e.length=n,!0}function $e(e){return new this(e).abs()}function Je(e){return new this(e).acos()}function We(e){return new this(e).acosh()}function Ge(e,n){return new this(e).plus(n)}function Xe(e){return new this(e).asin()}function Ke(e){return new this(e).asinh()}function Qe(e){return new this(e).atan()}function ze(e){return new this(e).atanh()}function je(e,n){e=new this(e),n=new this(n);var i,r=this.precision,t=this.rounding,s=r+4;return!e.s||!n.s?i=new this(NaN):!e.d&&!n.d?(i=O(this,s,1).times(n.s>0?.25:.75),i.s=e.s):!n.d||e.isZero()?(i=n.s<0?O(this,r,t):new this(0),i.s=e.s):!e.d||n.isZero()?(i=O(this,s,1).times(.5),i.s=e.s):n.s<0?(this.precision=s,this.rounding=1,i=this.atan(k(e,n,s,1)),n=O(this,s,1),this.precision=r,this.rounding=t,i=e.s<0?i.minus(n):i.plus(n)):i=this.atan(k(e,n,s,1)),i}function xe(e){return new this(e).cbrt()}function ye(e){return p(e=new this(e),e.e+1,2)}function en(e,n,i){return new this(e).clamp(n,i)}function nn(e){if(!e||typeof e!="object")throw Error(ie+"Object expected");var n,i,r,t=e.defaults===!0,s=["precision",1,V,"rounding",0,8,"toExpNeg",-$,0,"toExpPos",0,$,"maxE",0,$,"minE",-$,0,"modulo",0,9];for(n=0;n<s.length;n+=3)if(i=s[n],t&&(this[i]=le[i]),(r=e[i])!==void 0)if(I(r)===r&&r>=s[n+1]&&r<=s[n+2])this[i]=r;else throw Error(Y+i+": "+r);if(i="crypto",t&&(this[i]=le[i]),(r=e[i])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[i]=!0;else throw Error(ke);else this[i]=!1;else throw Error(Y+i+": "+r);return this}function rn(e){return new this(e).cos()}function tn(e){return new this(e).cosh()}function Ae(e){var n,i,r;function t(s){var o,u,c,f=this;if(!(f instanceof t))return new t(s);if(f.constructor=t,Ne(s)){f.s=s.s,m?!s.d||s.e>t.maxE?(f.e=NaN,f.d=null):s.e<t.minE?(f.e=0,f.d=[0]):(f.e=s.e,f.d=s.d.slice()):(f.e=s.e,f.d=s.d?s.d.slice():s.d);return}if(c=typeof s,c==="number"){if(s===0){f.s=1/s<0?-1:1,f.e=0,f.d=[0];return}if(s<0?(s=-s,f.s=-1):f.s=1,s===~~s&&s<1e7){for(o=0,u=s;u>=10;u/=10)o++;m?o>t.maxE?(f.e=NaN,f.d=null):o<t.minE?(f.e=0,f.d=[0]):(f.e=o,f.d=[s]):(f.e=o,f.d=[s]);return}else if(s*0!==0){s||(f.s=NaN),f.e=NaN,f.d=null;return}return de(f,s.toString())}else if(c!=="string")throw Error(Y+s);return(u=s.charCodeAt(0))===45?(s=s.slice(1),f.s=-1):(u===43&&(s=s.slice(1)),f.s=1),be.test(s)?de(f,s):Ye(f,s)}if(t.prototype=d,t.ROUND_UP=0,t.ROUND_DOWN=1,t.ROUND_CEIL=2,t.ROUND_FLOOR=3,t.ROUND_HALF_UP=4,t.ROUND_HALF_DOWN=5,t.ROUND_HALF_EVEN=6,t.ROUND_HALF_CEIL=7,t.ROUND_HALF_FLOOR=8,t.EUCLID=9,t.config=t.set=nn,t.clone=Ae,t.isDecimal=Ne,t.abs=$e,t.acos=Je,t.acosh=We,t.add=Ge,t.asin=Xe,t.asinh=Ke,t.atan=Qe,t.atanh=ze,t.atan2=je,t.cbrt=xe,t.ceil=ye,t.clamp=en,t.cos=rn,t.cosh=tn,t.div=sn,t.exp=on,t.floor=un,t.hypot=fn,t.ln=cn,t.log=ln,t.log10=hn,t.log2=an,t.max=dn,t.min=pn,t.mod=gn,t.mul=wn,t.pow=mn,t.random=Nn,t.round=vn,t.sign=En,t.sin=kn,t.sinh=Mn,t.sqrt=bn,t.sub=Cn,t.sum=Sn,t.tan=qn,t.tanh=Pn,t.trunc=In,e===void 0&&(e={}),e&&e.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<r.length;)e.hasOwnProperty(i=r[n++])||(e[i]=this[i]);return t.config(e),t}function sn(e,n){return new this(e).div(n)}function on(e){return new this(e).exp()}function un(e){return p(e=new this(e),e.e+1,3)}function fn(){var e,n,i=new this(0);for(m=!1,e=0;e<arguments.length;)if(n=new this(arguments[e++]),n.d)i.d&&(i=i.plus(n.times(n)));else{if(n.s)return m=!0,new this(1/0);i=n}return m=!0,i.sqrt()}function Ne(e){return e instanceof L||e&&e.toStringTag===Me||!1}function cn(e){return new this(e).ln()}function ln(e,n){return new this(e).log(n)}function an(e){return new this(e).log(2)}function hn(e){return new this(e).log(10)}function dn(){return qe(this,arguments,"lt")}function pn(){return qe(this,arguments,"gt")}function gn(e,n){return new this(e).mod(n)}function wn(e,n){return new this(e).mul(n)}function mn(e,n){return new this(e).pow(n)}function Nn(e){var n,i,r,t,s=0,o=new this(1),u=[];if(e===void 0?e=this.precision:T(e,1,V),r=Math.ceil(e/w),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(r));s<r;)t=n[s],t>=429e7?n[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=t%1e7;else if(crypto.randomBytes){for(n=crypto.randomBytes(r*=4);s<r;)t=n[s]+(n[s+1]<<8)+(n[s+2]<<16)+((n[s+3]&127)<<24),t>=214e7?crypto.randomBytes(4).copy(n,s):(u.push(t%1e7),s+=4);s=r/4}else throw Error(ke);else for(;s<r;)u[s++]=Math.random()*1e7|0;for(r=u[--s],e%=w,r&&e&&(t=C(10,w-e),u[s]=(r/t|0)*t);u[s]===0;s--)u.pop();if(s<0)i=0,u=[0];else{for(i=-1;u[0]===0;i-=w)u.shift();for(r=1,t=u[0];t>=10;t/=10)r++;r<w&&(i-=w-r)}return o.e=i,o.d=u,o}function vn(e){return p(e=new this(e),e.e+1,this.rounding)}function En(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function kn(e){return new this(e).sin()}function Mn(e){return new this(e).sinh()}function bn(e){return new this(e).sqrt()}function Cn(e,n){return new this(e).sub(n)}function Sn(){var e=0,n=arguments,i=new this(n[e]);for(m=!1;i.s&&++e<n.length;)i=i.plus(n[e]);return m=!0,p(i,this.precision,this.rounding)}function qn(e){return new this(e).tan()}function Pn(e){return new this(e).tanh()}function In(e){return p(e=new this(e),e.e+1,1)}d[Symbol.for("nodejs.util.inspect.custom")]=d.toString;d[Symbol.toStringTag]="Decimal";var L=d.constructor=Ae(le);x=new L(x);y=new L(y);function Fn(e,n="deposit"){let i=[];return e.forEach(r=>{r.args.user==null&&console.log("item ",r),i.push({blockNumber:r.blockNumber,blockHash:r.blockHash,user:r.args.user,token:r.args.token,amount:De(r.args.amount,18),type:n})}),i}function On(e){return e.reduce((i,r)=>{let t=-1;if(i.length&&(t=i.findIndex(s=>s.user==r.user)),t>=0)i[t].events.findIndex(s=>s.blockHash==r.blockHash&&s.type==r.type)==-1&&(i[t].actions[0]++,r.type=="deposit"&&(i[t].actions[1]++,i[t].amount=new L(i[t].amount).add(new L(r.amount)).toNumber()),r.type=="withdraw"&&(i[t].actions[2]++,i[t].amount=new L(i[t].amount).sub(new L(r.amount)).toNumber()),i[t].events.push(r));else{let s={user:r.user,amount:0,actions:[1,0,0],events:[r],index:0,historyIndex:0,historyAmount:0};r.type=="deposit"&&(s.actions[1]++,s.amount=new L(s.amount).add(new L(r.amount)).toNumber()),r.type=="withdraw"&&(s.actions[2]++,s.amount=new L(s.amount).sub(new L(r.amount)).toNumber()),i.push(s)}return i},[])}function Zn(e){let n=e.reduce((i,r)=>{let t=-1;return i.length&&(t=i.findIndex(s=>s.user==r.user)),t>=0?(i[t].amount=new L(i[t].amount).add(new L(r.amount)).toNumber(),i[t].actions[0]+=r.actions[0],i[t].actions[1]+=r.actions[1],i[t].actions[2]+=r.actions[2],i[t].events.push(...r.events)):i.push(r),i},[]);return An(n)}function _n(e,n,i){let r=fe().add(-1,"day").format("YYYY-MM-DD"),t=fe(r+"T00:00:00.000Z").unix(),s=i-(n-t)*3;console.log("historyBlock is ",s);for(let o=0;o<e.length;o++)e[o].events=e[o].events.filter(u=>u.blockNumber>s),e[o].events.sort(ne("blockNumber")).reverse();return e}function An(e){e=e.sort(ne("amount")).reverse();for(let n=0;n<e.length;n++)e[n].index=n+1;return e}function Hn(e,n=50){let i=[];return e.forEach(function(r){i.push(...r.events)}),i=i.sort(ne("blockNumber")).reverse().slice(0,n),i}async function Rn(e){let n=[];e.forEach(function(u){u.events.forEach(function(c){n.findIndex(f=>f.blockNumber==c.blockNumber)==-1?n.push({blockNumber:c.blockNumber,blockTotal:1,timestamp:0}):n.find(f=>f.blockNumber==c.blockNumber).blockTotal+=1})}),n=n.sort(ne("blockNumber"));let i=n[0].blockNumber,r=(await ge.getBlock(i)).timestamp,t=n[n.length-1].blockNumber,s=(await ge.getBlock(t)).timestamp,o=0;return t>i&&(o=(s-r)/(t-i)),n.forEach(function(u){u.timestamp=r+(u.blockNumber-i)*o}),n}export{Dn as H,On as a,Zn as b,_n as c,Rn as d,Hn as e,Fn as p,Tn as u};
