exports.id=2653,exports.ids=[2653],exports.modules={92653:(e,s,a)=>{"use strict";a.d(s,{default:()=>D});var i=a(10326),l=a(91726),t=a(59270),r=a(92379),c=a(4139),d=a(38106),n=a(39520),o=a(80314),u=a(38579),m=a(60816),p=a(82991),h=a(17987),x=a(93256),f=a(50143),_=a(91259),b=a(17577);a(86478);var j=a(37758),g=a(63191),Z=a(18445),N=a(46024),y=a(49965),w=a(96327),P=a(15522),v=a(3264),C=a(35047),E=a(79840),I=a(21215),A=a(73475),R=a(58946),S=a(73916);let q=e=>new Promise((s,a)=>{let i=new FileReader;i.readAsDataURL(e),i.onload=()=>s(i.result),i.onerror=()=>a(Error("File reading failed"))}),F={[E.Py.ALPHABET]:I.K.REGEX_ALPHABET,[E.Py.NUMERIC]:I.K.REGEX_NUMERIC},D=({type:e,productId:s,verificationId:a})=>{let I=(0,C.useRouter)(),D="view"===e,[M]=l.Z.useForm(),[V,$]=(0,b.useState)(null),[G,L]=(0,b.useState)([]),[T,O]=(0,b.useState)([]),[U,k]=(0,b.useState)([]),[B,J]=(0,b.useState)([]),[X,z]=(0,b.useState)(""),[H,K]=(0,b.useState)({}),[W,Q]=(0,b.useState)(!1),[Y,ee]=(0,b.useState)(!1),[es,ea]=(0,b.useState)(!1);(0,b.useEffect)(()=>{let e=async()=>{try{ee(!0);let e=await w.Z.findActiveSubcategorySpecificationByCatId(X);e&&L(e)}catch(e){throw console.error(e),e}};""!==X&&e().then(()=>ee(!1))},[X]);let ei=async()=>{try{ea(!0);let e=await w.Z.findAllActiveCategories();if(e){let s=[],a=e.map(e=>{let a=e.children?.map(s=>({label:s.subcat_name,value:s._id,cat_id:e._id}));return a&&s.push(...a),{label:e.cat_name,value:e._id}});O(a),k(s)}}catch(e){throw console.error(e),e}};(0,b.useEffect)(()=>{D||ei().then(()=>ea(!1))},[D,e]);let el=(0,b.useCallback)(async()=>{try{let e;ee(!0),(e=s?await v.Z.getProductDetailsById(s):await v.Z.getProductVerificationDetailsById(a))&&(K(e),z(e.subcat_id),$(e.product_img?.file.preview))}catch(e){throw console.error(e),e}},[s,a]);(0,b.useEffect)(()=>{(s||a)&&el().then(()=>ee(!1))},[el,s,a]);let et=e=>{M.setFieldValue("cat_id",void 0),M.setFieldValue("subcat_id",void 0),z(""),J(U.filter(s=>s.cat_id===e))},er=async()=>{try{await M.validateFields()}catch(e){throw R.Z.error("Please fill in all required fields"),e}try{let e=M.getFieldsValue(),i=e.specification,l={...H,...D?{}:e,pro_id:s??void 0,status:E.Py.PENDING,product_img:e.product_img??H.product_img,verification_id:a,specification:Object.values(i)};ee(!0),await v.Z.createProductVerification(l),W&&H.status===E.Py.PENDING?(Q(!1),el().then(()=>ee(!1))):(ee(!1),I.back()),W?S.Z.success("Update Product",`${H.product_name} updated successfully`):S.Z.success("Create Product",`Application of ${e.product_name} submitted successfully.`)}catch(e){throw ee(!1),W?S.Z.error("Update Product",`${H.product_name} failed to update.`):S.Z.error("Create Product",`Application of ${H.product_name} failed to submit.`),e}},ec=(e,s,a)=>{if(!D)return"";let i=H.specification?.find(s=>s.spec_id===e);return W?i?.spec_desc||"":i?.spec_desc!==void 0&&""!==i.spec_desc?[s,i.spec_desc,a].join(" ").trim():"-"},ed=(e,s)=>i.jsx(l.Z.List,{name:"specification",children:()=>e.filter(e=>e.cat_type===s).map(e=>(0,i.jsxs)("div",{children:[i.jsx(l.Z.Item,{name:[e._id,"spec_id"],hidden:!0,initialValue:e._id}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:e.subcat_spec_name}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:[e._id,"spec_desc"],initialValue:ec(e._id),rules:[{required:e.is_required&&(W||!D),message:`${e.subcat_spec_name} is required`},{pattern:F[e.field_type],message:`Only ${A.x.formatLowerCase(e.field_type)} is allowed`}],children:!e.children&&(D&&!W?i.jsx("div",{children:ec(e._id,e.prefix,e.suffix)}):i.jsx(t.default,{prefix:e.prefix,suffix:e.suffix,disabled:!e.allow_input}))}),e.children&&eo(e.children,e._id)]},e._id))}),en=(e,s,a,i)=>{if(!D)return"";let l=H.specification?.find(s=>s.spec_id===e)?.subspecification?.find(e=>e.subspec_id===s);return W?l?.subspec_desc||"":l?.subspec_desc!==void 0&&""!==l.subspec_desc?[a,l.subspec_desc,i].join(" ").trim():"-"},eo=(e,s)=>i.jsx(l.Z.List,{name:[s,"subspecification"],children:()=>e?.map((e,a)=>i.jsxs("div",{children:[i.jsx(l.Z.Item,{name:[a,"subspec_id"],hidden:!0,initialValue:e._id}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:e.subcat_subspec_name}),labelAlign:"left",labelCol:{span:12},className:"ml-16 mb-4",name:[a,"subspec_desc"],initialValue:en(s,e._id),rules:[{required:e.is_required&&(W||!D),message:`${e.subcat_subspec_name} is required`},{pattern:F[e.field_type],message:`Only ${A.x.formatLowerCase(e.field_type)} is allowed`}],children:D&&!W?i.jsx("div",{children:en(s,e._id,e.prefix,e.suffix)}):i.jsx(t.default,{prefix:e.prefix,suffix:e.suffix})})]},e._id))}),eu=(e,s)=>D?i.jsx("div",{children:e}):s;return i.jsx(l.Z,{form:M,className:"w-full",children:(0,i.jsxs)(c.Z,{children:[i.jsx(d.Z,{span:12,children:i.jsx(c.Z,{justify:"center",children:i.jsx(l.Z.Item,{name:"product_img",className:"mt-8",children:!W&&D?i.jsx(n.Z,{className:"max-w-96 bg-gray-300",children:H.product_img?.file.preview?i.jsx(o.Z,{src:H.product_img?.file?.preview,alt:"product_img",className:"max-h-96 object-cover"}):i.jsx(j.Z,{className:"text-5xl py-44 justify-center text-gray-500"})}):i.jsx(u.Z.Dragger,{accept:"image/*",showUploadList:!1,beforeUpload:()=>!1,onChange:e=>{let{file:s}=e;s.url||s.preview?$(s.preview):q(s).then(e=>{s.preview=e,$(e)})},className:"product-drag",maxCount:1,multiple:!1,children:V?(0,i.jsxs)(n.Z,{className:"w-full",children:[i.jsx(o.Z,{src:V,alt:"product_img",className:"max-h-96 object-cover",preview:!1}),i.jsx(m.ZP,{shape:"circle",icon:i.jsx(g.Z,{}),onClick:e=>{e.stopPropagation(),$(null),M.setFieldValue("product_img",null)},className:"float-end absolute top-2 right-2"})]}):(0,i.jsxs)("div",{className:"py-32",children:[i.jsx(Z.Z,{className:"text-5xl"}),i.jsx("div",{className:"mt-4",children:"Click or drag image file to this area to upload"})]})})},"product_img")})}),i.jsx(d.Z,{span:12,className:"mb-12",children:i.jsx(p.Z,{spinning:Y,children:(0,i.jsxs)(h.Z,{bordered:!1,children:[D&&(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)(c.Z,{hidden:!a,children:[i.jsx("h5",{className:"self-center mr-4",children:"Status:"}),(e=>{switch(e){case E.Py.APPROVED:return i.jsx(r.Z,{color:"green",bordered:!1,className:"px-3 py-0.5 rounded-xl self-center",children:"Approved"});case E.Py.PENDING:return i.jsx(r.Z,{color:"yellow",bordered:!1,className:"px-3 py-0.5 rounded-xl self-center",children:"Pending"});case E.Py.REJECTED:return i.jsx(r.Z,{color:"red",bordered:!1,className:"px-3 py-0.5 rounded-xl self-center",children:"Rejected"})}})(H.status)]}),i.jsx(m.ZP,{type:"primary",icon:i.jsx(N.Z,{}),className:"ml-auto flex items-center",disabled:W,onClick:()=>{Q(!0),M.resetFields()},children:"Edit Product"})]}),i.jsx("h5",{className:"my-3.5",children:"General Information"}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:"Product Name"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"product_name",rules:[{required:!W&&!D,message:"Product Name is required"}],children:eu(H.product_name,i.jsx(t.default,{}))}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:"Model No."}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"model_no",rules:[{required:!W&&!D,message:"Model No. is required"}],children:eu(H.model_no,i.jsx(t.default,{}))}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:"QR Code"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",hidden:!D||H.status===E.Py.PENDING||H.status===E.Py.REJECTED,children:i.jsx(x.Z,{value:s??H.pro_id})}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:"Rating"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",hidden:!D||H.status===E.Py.PENDING,children:i.jsx(f.Z,{value:H.rating,disabled:!0})}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:"Category"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"category",rules:[{required:!W&&!D,message:"Category is required"}],children:eu(H.cat_name,i.jsx(_.default,{options:T,onChange:e=>et(e),defaultActiveFirstOption:!0,allowClear:!0,removeIcon:i.jsx(y.Z,{}),loading:es}))}),i.jsx(l.Z.Item,{label:i.jsx("h5",{children:"Subcategory"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"subcat_id",rules:[{required:!W&&!D,message:"Subcategory is required"}],children:eu(H.subcat_name,i.jsx(_.default,{options:B,disabled:0===B.length,defaultValue:B.length>0?void 0:B[0]?.value,onChange:e=>z(e??""),allowClear:!0,removeIcon:i.jsx(y.Z,{}),loading:es}))}),""!==X&&!Y&&(0,i.jsxs)(i.Fragment,{children:[ed(G,P.rJ.INFORMATION),i.jsx("h5",{className:"mb-3.5 mt-8",children:"Certification"}),ed(G,P.rJ.CERTIFICATION),i.jsx("h5",{className:"mb-3.5 mt-8",children:"Warranty"}),ed(G,P.rJ.WARRANTY),i.jsx("h5",{className:"mb-3.5 mt-8",children:"Specification"}),ed(G,P.rJ.SPECIFICATION)]}),i.jsx(l.Z.Item,{name:"status",hidden:!0}),(!D||W)&&(0,i.jsxs)(c.Z,{className:"justify-end mt-16",children:[i.jsx(m.ZP,{type:"default",size:"large",className:"m-2",onClick:()=>{W?(Q(!1),$(H.product_img?.file.preview),M.resetFields()):I.back()},children:"Cancel"}),i.jsx(m.ZP,{type:"primary",size:"large",className:"m-2",onClick:er,disabled:""===X||Y,children:W?"Save":"AddProduct"})]})]})})})]})})}},21215:(e,s,a)=>{"use strict";a.d(s,{K:()=>i});class i{static{this.REGEX_ALPHABET=/^[a-zA-Z\s\-\_]+$/}static{this.REGEX_NUMERIC=/^\d*\.?\d*$/}static{this.REGEX_ALPHANUMERIC=/^[a-zA-Z0-9\s\-\_\@\#\!\$]+$/}}},58946:(e,s,a)=>{"use strict";a.d(s,{Z:()=>t});var i=a(88201);class l{static showMessage(e,s){switch(e){case"success":return i.ZP.success(s);case"error":return i.ZP.error(s);case"warning":return i.ZP.warning(s);default:return i.ZP.info(s)}}static success(e){return this.showMessage("success",e)}static error(e){return this.showMessage("error",e)}static warning(e){return this.showMessage("warning",e)}static info(e){return this.showMessage("info",e)}}let t=l},86478:()=>{}};