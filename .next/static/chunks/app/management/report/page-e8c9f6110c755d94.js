(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8172],{15663:function(e,t,a){Promise.resolve().then(a.bind(a,62777))},62777:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I}});var r=a(57437),s=a(50413),n=a(73454),i=a(21482),o=a(77733),l=a(95381),d=a(25325),c=a(46682),u=a(2265),p=a(30367),h=a(3650),m=a(65783),y=a(87138),_=a(99765),x=a(5765),w=a(63962),f=e=>{let{filterData:t}=e,[a,s]=(0,u.useState)([]),[n,i]=(0,u.useState)(!1),[o,l]=(0,u.useState)(!1),[d,f]=(0,u.useState)(),[g,S]=(0,u.useState)(),j=(0,u.useCallback)(async()=>{try{i(!0),t.adm_status_list=[p.a5.PENDING,p.a5.NOTIFIED];let e=await x.Z.getAdminReportListByFilter(t);e&&s(e)}catch(e){throw console.error(e),e}finally{i(!1)}},[t]);(0,u.useEffect)(()=>{j().then()},[j]);let b=e=>{f(e._id),S(e.product_name),l(!0)},I=p.Lu.map(e=>{switch(e.key){case"product_name":return{...e,render:(e,t)=>(0,r.jsx)(y.default,{href:"/product/details?id=".concat(t.pro_id),children:t.product_name})};case"created_on":return{...e,render:(t,a)=>_.I.formatDate(a[e.key],_.I.CATEGORY_DATE_FORMAT),sorter:(t,a)=>new Date(t[e.key]).getTime()-new Date(a[e.key]).getTime()};case"sup_status":return{...e,render:(e,t)=>E(t.sup_status)};case"adm_status":return{...e,render:(e,t)=>E(t.adm_status)};case"actions":return{...e,render:(e,t)=>(0,r.jsx)(c.ZP,{onClick:()=>b(t),children:"View Details"})};default:return{...e,sorter:(t,a)=>(t[e.key]||"").toString().localeCompare((a[e.key]||"").toString())}}}),E=e=>{switch(e){case p.a5.NOTIFIED:return(0,r.jsx)(h.Z,{color:"blue",bordered:!1,className:"px-3 py-0.5 rounded-xl",children:"Notified Owner"});case p.a5.PENDING:return(0,r.jsx)(h.Z,{color:"yellow",bordered:!1,className:"px-3 py-0.5 rounded-xl",children:"Pending"});case p.a5.CLOSED:return(0,r.jsx)(h.Z,{color:"red",bordered:!1,className:"px-3 py-0.5 rounded-xl",children:"Closed"});default:return(0,r.jsx)("div",{children:"-"})}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{className:"mt-4",columns:I,showSorterTooltip:!1,dataSource:a,rowKey:"_id",loading:n,pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100]}}),o&&(0,r.jsx)(w.Z,{onOpen:o,onClose:()=>l(!1),reportId:d,productName:g,onUpdate:()=>{j().then()}})]})},g=e=>{let{filterData:t}=e,[a,s]=u.useState([]),[n,i]=u.useState(!1),[o,l]=(0,u.useState)(!1),[d,f]=(0,u.useState)(),[g,S]=(0,u.useState)();(0,u.useEffect)(()=>{(async()=>{try{i(!0),t.adm_status_list=[p.a5.CLOSED];let e=await x.Z.getAdminReportListByFilter(t);e&&s(e)}catch(e){throw console.error(e),e}finally{i(!1)}})().then()},[t]);let j=e=>{f(e._id),S(e.product_name),l(!0)},b=p.Pf.map(e=>{switch(e.key){case"product_name":return{...e,render:(e,t)=>(0,r.jsx)(y.default,{href:"/product/details?id=".concat(t.pro_id),children:t.product_name})};case"reviewed_on":return{...e,render:(t,a)=>_.I.formatDate(a[e.key],_.I.CATEGORY_DATE_FORMAT),sorter:(t,a)=>new Date(t[e.key]).getTime()-new Date(a[e.key]).getTime()};case"adm_status":return{...e,render:(e,t)=>I(t.adm_status)};case"actions":return{...e,render:(e,t)=>(0,r.jsx)(c.ZP,{onClick:()=>j(t),children:"View Details"})};default:return{...e,sorter:(t,a)=>(t[e.key]||"").toString().localeCompare((a[e.key]||"").toString())}}}),I=e=>{switch(e){case p.a5.NOTIFIED:return(0,r.jsx)(h.Z,{color:"blue",bordered:!1,className:"px-3 py-0.5 rounded-xl",children:"Notified Owner"});case p.a5.PENDING:return(0,r.jsx)(h.Z,{color:"yellow",bordered:!1,className:"px-3 py-0.5 rounded-xl",children:"Pending"});case p.a5.CLOSED:return(0,r.jsx)(h.Z,{color:"red",bordered:!1,className:"px-3 py-0.5 rounded-xl",children:"Closed"});default:return(0,r.jsx)("div",{children:"-"})}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{className:"mt-4",columns:b,showSorterTooltip:!1,dataSource:a,rowKey:"_id",loading:n,pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100]}}),o&&(0,r.jsx)(w.Z,{onOpen:o,onClose:()=>l(!1),reportId:d,productName:g})]})},S=a(57834),j=a(53730),b=a(88372),I=()=>{let[e,t]=(0,u.useState)(p.Dh[0].value),[a]=n.Z.useForm(),[h,m]=(0,u.useState)({}),[y,_]=(0,u.useState)([]),[x,w]=(0,u.useState)([]),[I,E]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("report_segmented_tab");e&&t(e)},[]),(0,u.useEffect)(()=>{let e=e=>{var a;(null===(a=e.state)||void 0===a?void 0:a.segmentedTab)&&t(e.state.segmentedTab)};return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}},[]);let N=async()=>{try{E(!0);let e=await b.Z.findAllActiveCategories();if(e){let t=e.map(e=>{var t;let a=null===(t=e.children)||void 0===t?void 0:t.map(e=>({title:e.subcat_name,value:e._id,key:e._id}));return{title:e.cat_name,value:e._id,key:e._id,children:a}});_(t)}}catch(e){throw console.error(e),e}};(0,u.useEffect)(()=>{N().then(()=>E(!1))},[]);let Z=async()=>{m(a.getFieldsValue())},C=async()=>{a.resetFields(),m(a.getFieldsValue())};return(0,r.jsxs)(s.default,{title:"Report Management",children:[(0,r.jsx)(i.Z,{options:p.Dh,onChange:e=>{t(e),window.history.pushState({segmentedTab:e},"","?report_segmented_tab=".concat(e)),m({}),a.resetFields()},value:e}),(0,r.jsx)(o.Z,{className:"flex justify-between items-center space-x-3 mt-4",children:(0,r.jsx)(l.Z,{flex:"auto",children:(0,r.jsx)(n.Z,{form:a,children:(0,r.jsxs)(o.Z,{className:"flex space-x-3",children:[(0,r.jsx)(n.Z.Item,{name:"search",className:"w-1/3 m-0",children:(0,r.jsx)(d.default,{prefix:(0,r.jsx)(S.Z,{}),placeholder:"Product Name / Model Number",size:"large"})}),(0,r.jsx)(n.Z.Item,{name:"subcat_ids",className:"w-1/6 m-0",children:(0,r.jsx)(j.Z,{placeholder:"Category",options:y,showSearch:!0,optionsPlaceholder:"Search Category...",onChange:e=>{w(e)},values:x,size:"large",loading:I})}),(0,r.jsx)(c.ZP,{type:"primary",onClick:Z,size:"large",children:"Search"}),(0,r.jsx)(c.ZP,{type:"default",onClick:C,size:"large",children:"Reset"})]})})})}),"pending"===e&&(0,r.jsx)(f,{filterData:h}),"history"===e&&(0,r.jsx)(g,{filterData:h})]})}},35945:function(e,t,a){"use strict";var r=a(57437);t.Z=e=>{let{action:t,record:a,details:s}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),"Are you confirmed to ",(0,r.jsx)("b",{children:t})," this ",s,"?",(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)("b",{children:"Product:"})," ",a.product_name]}),(0,r.jsx)("br",{})]})}},63962:function(e,t,a){"use strict";var r=a(57437),s=a(73454),n=a(77738),i=a(46682),o=a(97382),l=a(30252),d=a(91518),c=a(74011),u=a(2265),p=a(5765),h=a(82649),m=a(30367),y=a(35945);t.Z=e=>{let{onOpen:t,onClose:a,reportId:_,productName:x,onUpdate:w,user:f="admin"}=e,[g]=s.Z.useForm(),[S,j]=(0,u.useState)([]),[b,I]=(0,u.useState)(!1),[E,N]=(0,u.useState)(""),[Z,C]=(0,u.useState)({}),[k,D]=(0,u.useState)(!1),[O,P]=(0,u.useState)(!1);(0,u.useEffect)(()=>{(async()=>{try{D(!0);let e=await p.Z.getReportDetails(_);if(e){if(e.rpt_img){let t=[{uid:e.rpt_img.uid,name:e.rpt_img.name,status:"done",thumbUrl:e.rpt_img.base64}];j(t)}C(e)}}catch(e){throw console.error(e),e}finally{D(!1)}})().then()},[_]);let v=async e=>{n.Z.confirm({title:(0,r.jsx)("h3",{children:"Confirmation"}),content:(0,r.jsx)(y.Z,{action:m.d2[e],record:{product_name:x},details:"report"}),className:"confirmation-modal",centered:!0,width:"35%",okText:"Confirm",onOk:()=>T(e)})},T=async e=>{try{P(!0);let t={};"admin"===f?t.adm_status=e:t.sup_status=e,await p.Z.updateReportStatus(_,t),a(),w(),h.Z.success("Review Product","Report of ".concat(x," is ").concat(m.Uq[e]," successfully"))}catch(e){h.Z.error("Review Product","Report of ".concat(x," is failed to review"))}finally{P(!1)}},R=async e=>{N(e.thumbUrl||""),I(!0)},L=[(0,r.jsx)(i.ZP,{type:"default",onClick:a,children:"Cancel"},"cancel"),(0,r.jsx)(i.ZP,{type:"primary",loading:O,onClick:()=>v(m.a5.NOTIFIED),hidden:"supplier"===f,disabled:Z.adm_status===m.a5.NOTIFIED,children:"Notify Owner"},"notify"),(0,r.jsx)(i.ZP,{type:"primary",danger:!0,loading:O,onClick:()=>v(m.a5.CLOSED),disabled:Z.sup_status===m.a5.PENDING&&"supplier"!==f,children:"Resolved"},"close")];return(0,r.jsxs)(n.Z,{open:t,onCancel:()=>{g.resetFields(),a()},title:(0,r.jsx)("h3",{className:"text-center",children:"Reported Details"}),width:"50%",footer:Z.adm_status===m.a5.CLOSED||Z.sup_status===m.a5.CLOSED&&"supplier"===f?null:L,children:[(0,r.jsx)(o.Z,{spinning:k,children:(0,r.jsxs)(s.Z,{form:g,children:[(0,r.jsx)(s.Z.Item,{label:(0,r.jsx)("h5",{children:"Product Name"}),className:"mb-2",labelAlign:"left",labelCol:{span:6},children:(0,r.jsx)("div",{children:x})}),(0,r.jsx)(s.Z.Item,{label:(0,r.jsx)("h5",{children:"Title"}),className:"mb-2",labelAlign:"left",labelCol:{span:6},children:(0,r.jsx)("div",{children:Z.rpt_title})}),(0,r.jsx)(s.Z.Item,{label:(0,r.jsx)("h5",{children:"Reason"}),className:"mb-2",labelAlign:"left",labelCol:{span:6},children:(0,r.jsx)(l.default.Paragraph,{ellipsis:{rows:4,expandable:!0,symbol:"more"},children:Z.rpt_reason})}),Z.rpt_img&&(0,r.jsx)(d.Z,{listType:"picture",fileList:S,showUploadList:{showRemoveIcon:!1},onPreview:R,disabled:!0})]})}),E&&(0,r.jsx)(c.Z,{wrapperStyle:{display:"none"},preview:{visible:b,onVisibleChange:e=>I(e),afterOpenChange:e=>!e&&N("")},src:E,alt:"report-image"})]})}},30367:function(e,t,a){"use strict";a.d(t,{Dh:function(){return s},Lu:function(){return n},Pf:function(){return i},Uq:function(){return o},a5:function(){return r},d2:function(){return l}});class r{}r.PENDING="PENDING",r.NOTIFIED="NOTIFIED",r.CLOSED="CLOSED";let s=[{key:"pending",label:"Pending",value:"pending"},{key:"history",label:"History",value:"history"}],n=[{key:"product_name",title:"Product Name",dataIndex:"product_name",width:"30%"},{key:"model_no",title:"Model No",dataIndex:"model_no",width:"10%"},{key:"cat_name",title:"Category",dataIndex:"cat_name",width:"10%"},{key:"subcat_name",title:"Subcategory",dataIndex:"subcat_name",width:"10%"},{key:"created_on",title:"Reported On",dataIndex:"created_on",width:"10%"},{key:"sup_status",title:"Supplier Action",dataIndex:"sup_status",width:"10%"},{key:"adm_status",title:"Status",dataIndex:"adm_status",width:"10%"},{key:"actions",title:"Actions",dataIndex:"action",width:"10%"}],i=[{key:"product_name",title:"Product Name",dataIndex:"product_name",width:"30%"},{key:"model_no",title:"Model No",dataIndex:"model_no",width:"10%"},{key:"cat_name",title:"Category",dataIndex:"cat_name",width:"10%"},{key:"subcat_name",title:"Subcategory",dataIndex:"subcat_name",width:"10%"},{key:"reviewed_on",title:"Reviewed on",dataIndex:"reviewed_on",width:"10%"},{key:"reviewed_by",title:"Reviewed by",dataIndex:"reviewed_by",width:"10%"},{key:"adm_status",title:"Status",dataIndex:"adm_status",width:"10%"},{key:"actions",title:"Actions",dataIndex:"action",width:"10%"}],o={NOTIFIED:"notified owner",CLOSED:"closed"},l={NOTIFIED:"inform owner",CLOSED:"resolve"}},5765:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(86863),s=a(91413);class n{}n.createReport=async e=>{try{return await r.O.post(s.P.CREATE_REPORT,e)}catch(e){throw console.error(e),e}},n.getReportDetails=async e=>{try{return await r.O.get(s.P.GET_REPORT_DETAILS,{id:e})}catch(e){throw console.error(e),e}},n.getSupplierReportListByFilter=async e=>{try{return await r.O.post(s.P.GET_SUPPLIER_REPORT_LIST_BY_FILTER,e)}catch(e){throw console.error(e),e}},n.getAdminReportListByFilter=async e=>{try{return await r.O.post(s.P.GET_ADMIN_REPORT_LIST_BY_FILTER,e)}catch(e){throw console.error(e),e}},n.updateReportStatus=async(e,t)=>{try{return await r.O.put(s.P.UPDATE_REPORT_STATUS,t,{id:e})}catch(e){throw console.error(e),e}}}},function(e){e.O(0,[3276,9665,3419,3454,5325,252,7460,7382,7373,7738,4052,6487,5783,6326,1518,183,210,413,6875,2971,7023,1744],function(){return e(e.s=15663)}),_N_E=e.O()}]);