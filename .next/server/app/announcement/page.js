(()=>{var e={};e.id=722,e.ids=[722],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},73958:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(38982),r(49864),r(35866);var s=r(23191),n=r(88716),a=r(37922),i=r.n(a),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["announcement",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,38982)),"C:\\Users\\User\\Desktop\\Project\\fomeda-web\\src\\app\\announcement\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,49864)),"C:\\Users\\User\\Desktop\\Project\\fomeda-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\User\\Desktop\\Project\\fomeda-web\\src\\app\\announcement\\page.tsx"],u="/announcement/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/announcement/page",pathname:"/announcement",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},53760:(e,t,r)=>{Promise.resolve().then(r.bind(r,27595))},38106:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=r(18467).Z},27595:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var s=r(10326),n=r(17577),a=r(52783),i=r(99985),o=r(36301),l=r(4139),c=r(38106),d=r(59270),u=r(97458),p=r(17987),m=r(80314),x=r(24395),h=r(45211),g=r(56230),f=r(35047),_=r(94368);let{Text:y,Paragraph:j}=i.default,w=({visible:e,onClose:t,data:r})=>{let[a,i]=(0,n.useState)({...r});(0,n.useEffect)(()=>{i({...r})},[r]);let o=async()=>{t()};return(0,s.jsxs)(_.Z,{title:s.jsx("h3",{style:{textAlign:"center"},children:"View Announcement"}),open:e,onCancel:o,footer:null,width:1e3,children:[s.jsx(j,{strong:!0,children:r?.title}),s.jsx(j,{children:r?.description}),r?.file_uploaded?.length>0?s.jsx(u.Z,{itemLayout:"horizontal",dataSource:r?.file_uploaded,renderItem:e=>s.jsx(u.Z.Item,{children:s.jsx(p.Z,{style:{width:"100%",padding:0},styles:{body:{padding:"2px 16px"}},children:(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[s.jsx(m.Z,{src:e?.thumbUrl,alt:e?.name,style:{maxHeight:80,objectFit:"cover"}}),s.jsx(y,{className:"pl-2",children:e?.name})]})})})}):s.jsx(s.Fragment,{}),(0,s.jsxs)(j,{children:["Created on: ",g.I.formatDate(r?.created_on)]})]})},{Text:A}=i.default,E=()=>{let[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)([]),[_,y]=(0,n.useState)(!0),[j,E]=(0,n.useState)(!1),[D,b]=(0,n.useState)([null,null]),[v,P]=(0,n.useState)(null),[T,N]=(0,n.useState)(""),C=(0,f.useRouter)(),{RangePicker:M}=o.default,U=async()=>{try{let e=await h.Z.getVisibleAnnouncements();t(e),i(e)}catch(e){throw console.error(e),e}finally{y(!1)}};(0,n.useEffect)(()=>{U()},[C]);let O=e=>{Z(e,D)},Z=(t,r)=>{let s=RegExp(t,"i"),[n,a]=r||[null,null];i(e.filter(e=>{let t=s.test(e.title),r=new Date(e.created_on);return t&&(!n||!a||r>=n&&r<=a)}))},I=e=>{P(e),E(!0)};return(0,s.jsxs)(a.default,{title:"Announcements",children:[s.jsx(w,{visible:j,onClose:()=>{E(!1),P(null)},data:v}),s.jsx(l.Z,{style:{justifyContent:"space-between",marginBottom:16},children:(0,s.jsxs)(c.Z,{style:{display:"flex",gap:"8px"},span:16,children:[s.jsx(d.default,{placeholder:"Search Announcement",onChange:e=>O(e.target.value?[e.target.value]:[]),prefix:s.jsx(x.Z,{}),size:"large",style:{width:"60%"}}),s.jsx(M,{onChange:e=>{b(e),Z(T,e)},style:{width:"40%"}})]})}),s.jsx("div",{className:"custom-list",children:s.jsx(u.Z,{grid:{gutter:16,column:4},dataSource:r,renderItem:e=>s.jsx(u.Z.Item,{children:(0,s.jsxs)(p.Z,{onClick:()=>I(e),title:e?.title,cover:e?.file_uploaded?.length?s.jsx(m.Z,{alt:e?.title,src:e?.file_uploaded?.[0]?.thumbUrl,preview:!1}):null,hoverable:!0,children:[(0,s.jsxs)(A,{children:[e?.description,s.jsx("br",{}),s.jsx("br",{})]}),s.jsx(A,{children:g.I.formatDate(e?.created_on)})]})})})})]})}},45211:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(12111),n=r(63506);r(14242);class a{static{this.getAllAnnouncements=async()=>{try{let e=await n.O.get(s.P.FIND_ALL_ANNOUNCEMENT);return e.sort((e,t)=>new Date(t.created_on).getTime()-new Date(e.created_on).getTime()),e}catch(e){throw console.error(e),e}}}static{this.getVisibleAnnouncements=async()=>{try{let e=await n.O.get(s.P.FIND_VISIBLE_ANNOUNCEMENT);return e.sort((e,t)=>new Date(t.created_on).getTime()-new Date(e.created_on).getTime()),e}catch(e){throw console.error(e),e}}}static async createAnnouncement(e){try{await n.O.post(s.P.CREATE_ANNOUNCEMENT,e)}catch(e){throw console.error(e),e}}static{this.updateAnnouncement=async(e,t)=>{try{await n.O.patch(s.P.EDIT_ANNOUNCEMENT,t,{id:e})}catch(e){throw console.error(e),e}}}static{this.updateAnnouncementVisibility=async(e,t)=>{try{await n.O.patch(s.P.EDIT_ANNOUNCEMENT,{visibility:t},{id:e})}catch(e){throw console.error(e),e}}}}},56230:(e,t,r)=>{"use strict";r.d(t,{I:()=>a});var s=r(88295),n=r.n(s);class a{static{this.DEFAULT_DATE_FORMAT="YYYY-MM-DD"}static{this.DEFAULT_DATE_TIME_FORMAT="YYYY-MM-DD HH:mm:ss"}static{this.CATEGORY_DATE_FORMAT="DD MMM YYYY"}static formatDate(e,t=a.DEFAULT_DATE_FORMAT){return e?n()(e).format(t):""}}},38982:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});var s=r(68570);let n=(0,s.createProxy)(String.raw`C:\Users\User\Desktop\Project\fomeda-web\src\app\announcement\page.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let o=(0,s.createProxy)(String.raw`C:\Users\User\Desktop\Project\fomeda-web\src\app\announcement\page.tsx#default`)},14242:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,349,4052,1775,9270,9985,3057,3325,7987,1259,2991,3118,4368,1098,6301,7458,8492],()=>r(73958));module.exports=s})();