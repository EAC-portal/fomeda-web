(()=>{var e={};e.id=7143,e.ids=[7143],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},84592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>l,pages:()=>d,routeModule:()=>f,tree:()=>c}),r(89081),r(35866),r(49864);var n=r(23191),s=r(88716),i=r(37922),a=r.n(i),o=r(95231),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);r.d(t,u);let c=["",{children:["(auth)",{children:["rejection-info",{children:["[userId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,89081)),"C:\\Users\\User\\Desktop\\Project\\fomeda-web\\src\\app\\(auth)\\rejection-info\\[userId]\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,49864)),"C:\\Users\\User\\Desktop\\Project\\fomeda-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\User\\Desktop\\Project\\fomeda-web\\src\\app\\(auth)\\rejection-info\\[userId]\\page.tsx"],l="/(auth)/rejection-info/[userId]/page",h={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(auth)/rejection-info/[userId]/page",pathname:"/rejection-info/[userId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},97813:(e,t,r)=>{Promise.resolve().then(r.bind(r,64293))},38106:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let n=r(18467).Z},88295:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",n="hour",s="week",i="month",a="quarter",o="year",u="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},f="en",p={};p[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var m="$isDayjsObject",$=function(e){return e instanceof v||!(!e||!e[m])},g=function e(t,r,n){var s;if(!t)return f;if("string"==typeof t){var i=t.toLowerCase();p[i]&&(s=i),r&&(p[i]=r,s=i);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;p[o]=t,s=o}return!n&&s&&(f=s),s||!n&&f},x=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},y={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(n,i),a=r-s<0,o=t.clone().add(n+(a?-1:1),i);return+(-(n+(r-s)/(a?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:i,y:o,w:s,d:"day",D:u,h:n,m:r,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=g,y.i=$,y.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function h(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[m]=!0}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return x(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<x(e)},f.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,a){var c=this,d=!!y.u(a)||a,l=y.p(e),h=function(e,t){var r=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return d?r:r.endOf("day")},f=function(e,t){return y.w(c.toDate()[e].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},p=this.$W,m=this.$M,$=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case o:return d?h(1,0):h(31,11);case i:return d?h(1,m):h(0,m+1);case s:var x=this.$locale().weekStart||0,v=(p<x?p+7:p)-x;return h(d?$-v:$+(6-v),m);case"day":case u:return f(g+"Hours",0);case n:return f(g+"Minutes",1);case r:return f(g+"Seconds",2);case t:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(s,a){var c,d=y.p(s),l="set"+(this.$u?"UTC":""),h=((c={}).day=l+"Date",c[u]=l+"Date",c[i]=l+"Month",c[o]=l+"FullYear",c[n]=l+"Hours",c[r]=l+"Minutes",c[t]=l+"Seconds",c[e]=l+"Milliseconds",c)[d],f="day"===d?this.$D+(a-this.$W):a;if(d===i||d===o){var p=this.clone().set(u,1);p.$d[h](f),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[y.p(e)]()},f.add=function(e,a){var u,c=this;e=Number(e);var d=y.p(a),l=function(t){var r=x(c);return y.w(r.date(r.date()+Math.round(t*e)),c)};if(d===i)return this.set(i,this.$M+e);if(d===o)return this.set(o,this.$y+e);if("day"===d)return l(1);if(d===s)return l(7);var h=((u={})[r]=6e4,u[n]=36e5,u[t]=1e3,u)[d]||1,f=this.$d.getTime()+e*h;return y.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),i=this.$H,a=this.$m,o=this.$M,u=r.weekdays,d=r.months,h=r.meridiem,f=function(e,r,s,i){return e&&(e[r]||e(t,n))||s[r].slice(0,i)},p=function(e){return y.s(i%12||12,e,"0")},m=h||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(l,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return o+1;case"MM":return y.s(o+1,2,"0");case"MMM":return f(r.monthsShort,o,d,3);case"MMMM":return f(d,o);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,u,2);case"ddd":return f(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return y.s(i,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,u,c){var d,l=this,h=y.p(u),f=x(e),p=(f.utcOffset()-this.utcOffset())*6e4,m=this-f,$=function(){return y.m(l,f)};switch(h){case o:d=$()/12;break;case i:d=$();break;case a:d=$()/3;break;case s:d=(m-p)/6048e5;break;case"day":d=(m-p)/864e5;break;case n:d=m/36e5;break;case r:d=m/6e4;break;case t:d=m/1e3;break;default:d=m}return c?d:y.a(d)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=g(e,t,!0);return n&&(r.$L=n),r},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),D=v.prototype;return x.prototype=D,[["$ms",e],["$s",t],["$m",r],["$H",n],["$W","day"],["$M",i],["$y",o],["$D",u]].forEach(function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,v,x),e.$i=!0),x},x.locale=g,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=p[f],x.Ls=p,x.p={},x},e.exports=t()},64293:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(10326),s=r(17577),i=r(52783),a=r(99985),o=r(4139),u=r(38106),c=r(80314),d=r(17987),l=r(91726),h=r(60816),f=r(13227),p=r(35047),m=r(56230);let{Title:$,Link:g,Text:x}=a.default,y=()=>{let e=(0,p.usePathname)(),t=e.substring(e.lastIndexOf("/")+1),r=(0,p.useRouter)(),[y,v]=(0,s.useState)({rejected_by:"",rejected_on:"",reason:""});return(0,s.useEffect)(()=>{(async()=>{try{let e=await f.Z.getRejectionInfo(t);v(e)}catch(e){throw console.error(e),e}})()},[t]),n.jsx(i.default,{showTitle:!1,children:(0,n.jsxs)(o.Z,{align:"middle",justify:"space-evenly",style:{height:"100vh"},children:[n.jsx(u.Z,{children:n.jsx(c.Z,{preview:!1,src:"/logoFomeda.svg",alt:"fomeda-logo"})}),n.jsx(u.Z,{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{name:"basic",layout:"vertical",style:{width:"500px"},children:[n.jsx($,{level:2,children:"Your registration was rejected."}),n.jsx(x,{strong:!0,children:"Reason:"}),n.jsx("br",{}),n.jsx(x,{children:y?.reason}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(x,{strong:!0,children:"Rejected on:"}),n.jsx("br",{}),n.jsx(x,{children:m.I.formatDate(new Date(y?.rejected_on))}),n.jsx(h.ZP,{type:"primary",block:!0,className:"mt-5",onClick:()=>{r.push(`/appeal/${t}`)},children:"Appeal registration"})]}),(0,n.jsxs)("div",{style:{textAlign:"center",paddingTop:"16px"},children:[n.jsx(a.default.Text,{style:{padding:"5px"},children:"Back to sign in?"}),n.jsx(g,{href:"/login",children:"Sign in here"})]})]})})]})})}},56230:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=r(88295),s=r.n(n);class i{static{this.DEFAULT_DATE_FORMAT="YYYY-MM-DD"}static{this.DEFAULT_DATE_TIME_FORMAT="YYYY-MM-DD HH:mm:ss"}static{this.CATEGORY_DATE_FORMAT="DD MMM YYYY"}static formatDate(e,t=i.DEFAULT_DATE_FORMAT){return e?s()(e).format(t):""}}},89081:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>o});var n=r(68570);let s=(0,n.createProxy)(String.raw`C:\Users\User\Desktop\Project\fomeda-web\src\app\(auth)\rejection-info\[userId]\page.tsx`),{__esModule:i,$$typeof:a}=s;s.default;let o=(0,n.createProxy)(String.raw`C:\Users\User\Desktop\Project\fomeda-web\src\app\(auth)\rejection-info\[userId]\page.tsx#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[8948,349,4052,1775,1726,9985,3057,3325,7987,8492],()=>r(84592));module.exports=n})();