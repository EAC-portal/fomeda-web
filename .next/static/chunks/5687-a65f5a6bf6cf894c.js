(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5687],{15687:function(e,t,r){"use strict";var a=r(57437),c=r(73454),i=r(25325),s=r(3650),o=r(77733),n=r(95381),l=r(7673),d=r(74011),u=r(91518),_=r(46682),h=r(97382),E=r(55293),I=r(99242),y=r(43561),p=r(17460),C=r(2265);r(33864);var A=r(31919),S=r(9707),f=r(63632),m=r(71480),w=r(46622),P=r(88372),g=r(55166),N=r(19030),T=r(16463),O=r(34682),b=r(6762),x=r(50040),B=r(5951),v=r(82649);let j=e=>new Promise((t,r)=>{let a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(a.result),a.onerror=()=>r(Error("File reading failed"))}),F={[O.Py.ALPHABET]:b.K.REGEX_ALPHABET,[O.Py.NUMERIC]:b.K.REGEX_NUMERIC};t.default=e=>{var t,r,b,D;let{type:R,productId:Z,verificationId:G}=e,U=(0,T.useRouter)(),L="view"===R,[Y]=c.Z.useForm(),[V,q]=(0,C.useState)(null),[M,k]=(0,C.useState)([]),[H,J]=(0,C.useState)([]),[W,X]=(0,C.useState)([]),[z,$]=(0,C.useState)([]),[K,Q]=(0,C.useState)(""),[ee,et]=(0,C.useState)({}),[er,ea]=(0,C.useState)(!1),[ec,ei]=(0,C.useState)(!1),[es,eo]=(0,C.useState)(!1);(0,C.useEffect)(()=>{let e=async()=>{try{ei(!0);let e=await P.Z.findActiveSubcategorySpecificationByCatId(K);e&&k(e)}catch(e){throw console.error(e),e}};""!==K&&e().then(()=>ei(!1))},[K]);let en=async()=>{try{eo(!0);let e=await P.Z.findAllActiveCategories();if(e){let t=[],r=e.map(e=>{var r;let a=null===(r=e.children)||void 0===r?void 0:r.map(t=>({label:t.subcat_name,value:t._id,cat_id:e._id}));return a&&t.push(...a),{label:e.cat_name,value:e._id}});J(r),X(t)}}catch(e){throw console.error(e),e}};(0,C.useEffect)(()=>{L||en().then(()=>eo(!1))},[L,R]);let el=(0,C.useCallback)(async()=>{try{let t;if(ei(!0),t=Z?await N.Z.getProductDetailsById(Z):await N.Z.getProductVerificationDetailsById(G)){var e;et(t),Q(t.subcat_id),q(null===(e=t.product_img)||void 0===e?void 0:e.file.preview)}}catch(e){throw console.error(e),e}},[Z,G]);(0,C.useEffect)(()=>{(Z||G)&&el().then(()=>ei(!1))},[el,Z,G]);let ed=e=>{Y.setFieldValue("cat_id",void 0),Y.setFieldValue("subcat_id",void 0),Q(""),$(W.filter(t=>t.cat_id===e))},eu=async()=>{try{await Y.validateFields()}catch(e){throw B.Z.error("Please fill in all required fields"),e}try{var e;let t=Y.getFieldsValue(),r=t.specification,a={...ee,...L?{}:t,pro_id:null!=Z?Z:void 0,status:O.Py.PENDING,product_img:null!==(e=t.product_img)&&void 0!==e?e:ee.product_img,verification_id:G,specification:Object.values(r)};ei(!0),await N.Z.createProductVerification(a),er&&ee.status===O.Py.PENDING?(ea(!1),el().then(()=>ei(!1))):(ei(!1),U.back()),er?v.Z.success("Update Product","".concat(ee.product_name," updated successfully")):v.Z.success("Create Product","Application of ".concat(t.product_name," submitted successfully."))}catch(e){throw ei(!1),er?v.Z.error("Update Product","".concat(ee.product_name," failed to update.")):v.Z.error("Create Product","Application of ".concat(ee.product_name," failed to submit.")),e}},e_=(e,t,r)=>{var a;if(!L)return"";let c=null===(a=ee.specification)||void 0===a?void 0:a.find(t=>t.spec_id===e);return er?(null==c?void 0:c.spec_desc)||"":(null==c?void 0:c.spec_desc)!==void 0&&""!==c.spec_desc?[t,c.spec_desc,r].join(" ").trim():"-"},eh=(e,t)=>(0,a.jsx)(c.Z.List,{name:"specification",children:()=>e.filter(e=>e.cat_type===t).map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z.Item,{name:[e._id,"spec_id"],hidden:!0,initialValue:e._id}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:e.subcat_spec_name}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:[e._id,"spec_desc"],initialValue:e_(e._id),rules:[{required:e.is_required&&(er||!L),message:"".concat(e.subcat_spec_name," is required")},{pattern:F[e.field_type],message:"Only ".concat(x.x.formatLowerCase(e.field_type)," is allowed")}],children:!e.children&&(L&&!er?(0,a.jsx)("div",{children:e_(e._id,e.prefix,e.suffix)}):(0,a.jsx)(i.default,{prefix:e.prefix,suffix:e.suffix,disabled:!e.allow_input}))}),e.children&&eI(e.children,e._id)]},e._id))}),eE=(e,t,r,a)=>{var c,i,s;if(!L)return"";let o=null===(s=ee.specification)||void 0===s?void 0:null===(i=s.find(t=>t.spec_id===e))||void 0===i?void 0:null===(c=i.subspecification)||void 0===c?void 0:c.find(e=>e.subspec_id===t);return er?(null==o?void 0:o.subspec_desc)||"":(null==o?void 0:o.subspec_desc)!==void 0&&""!==o.subspec_desc?[r,o.subspec_desc,a].join(" ").trim():"-"},eI=(e,t)=>(0,a.jsx)(c.Z.List,{name:[t,"subspecification"],children:()=>null==e?void 0:e.map((e,r)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z.Item,{name:[r,"subspec_id"],hidden:!0,initialValue:e._id}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:e.subcat_subspec_name}),labelAlign:"left",labelCol:{span:12},className:"ml-16 mb-4",name:[r,"subspec_desc"],initialValue:eE(t,e._id),rules:[{required:e.is_required&&(er||!L),message:"".concat(e.subcat_subspec_name," is required")},{pattern:F[e.field_type],message:"Only ".concat(x.x.formatLowerCase(e.field_type)," is allowed")}],children:L&&!er?(0,a.jsx)("div",{children:eE(t,e._id,e.prefix,e.suffix)}):(0,a.jsx)(i.default,{prefix:e.prefix,suffix:e.suffix})})]},e._id))}),ey=(e,t)=>L?(0,a.jsx)("div",{children:e}):t;return(0,a.jsx)(c.Z,{form:Y,className:"w-full",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(n.Z,{span:12,children:(0,a.jsx)(o.Z,{justify:"center",children:(0,a.jsx)(c.Z.Item,{name:"product_img",className:"mt-8",children:!er&&L?(0,a.jsx)(l.Z,{className:"max-w-96 bg-gray-300",children:(null===(t=ee.product_img)||void 0===t?void 0:t.file.preview)?(0,a.jsx)(d.Z,{src:null===(b=ee.product_img)||void 0===b?void 0:null===(r=b.file)||void 0===r?void 0:r.preview,alt:"product_img",className:"max-h-96 object-cover"}):(0,a.jsx)(A.Z,{className:"text-5xl py-44 justify-center text-gray-500"})}):(0,a.jsx)(u.Z.Dragger,{accept:"image/*",showUploadList:!1,beforeUpload:()=>!1,onChange:e=>{let{file:t}=e;t.url||t.preview?q(t.preview):j(t).then(e=>{t.preview=e,q(e)})},className:"product-drag",maxCount:1,multiple:!1,children:V?(0,a.jsxs)(l.Z,{className:"w-full",children:[(0,a.jsx)(d.Z,{src:V,alt:"product_img",className:"max-h-96 object-cover",preview:!1}),(0,a.jsx)(_.ZP,{shape:"circle",icon:(0,a.jsx)(S.Z,{}),onClick:e=>{e.stopPropagation(),q(null),Y.setFieldValue("product_img",null)},className:"float-end absolute top-2 right-2"})]}):(0,a.jsxs)("div",{className:"py-32",children:[(0,a.jsx)(f.Z,{className:"text-5xl"}),(0,a.jsx)("div",{className:"mt-4",children:"Click or drag image file to this area to upload"})]})})},"product_img")})}),(0,a.jsx)(n.Z,{span:12,className:"mb-12",children:(0,a.jsx)(h.Z,{spinning:ec,children:(0,a.jsxs)(E.Z,{bordered:!1,children:[L&&(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(o.Z,{hidden:!G,children:[(0,a.jsx)("h5",{className:"self-center mr-4",children:"Status:"}),(e=>{switch(e){case O.Py.APPROVED:return(0,a.jsx)(s.Z,{color:"green",bordered:!1,className:"px-3 py-0.5 rounded-xl self-center",children:"Approved"});case O.Py.PENDING:return(0,a.jsx)(s.Z,{color:"yellow",bordered:!1,className:"px-3 py-0.5 rounded-xl self-center",children:"Pending"});case O.Py.REJECTED:return(0,a.jsx)(s.Z,{color:"red",bordered:!1,className:"px-3 py-0.5 rounded-xl self-center",children:"Rejected"})}})(ee.status)]}),(0,a.jsx)(_.ZP,{type:"primary",icon:(0,a.jsx)(m.Z,{}),className:"ml-auto flex items-center",disabled:er,onClick:()=>{ea(!0),Y.resetFields()},children:"Edit Product"})]}),(0,a.jsx)("h5",{className:"my-3.5",children:"General Information"}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:"Product Name"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"product_name",rules:[{required:!er&&!L,message:"Product Name is required"}],children:ey(ee.product_name,(0,a.jsx)(i.default,{}))}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:"Model No."}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"model_no",rules:[{required:!er&&!L,message:"Model No. is required"}],children:ey(ee.model_no,(0,a.jsx)(i.default,{}))}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:"QR Code"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",hidden:!L||ee.status===O.Py.PENDING||ee.status===O.Py.REJECTED,children:(0,a.jsx)(I.Z,{value:null!=Z?Z:ee.pro_id})}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:"Rating"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",hidden:!L||ee.status===O.Py.PENDING,children:(0,a.jsx)(y.Z,{value:ee.rating,disabled:!0})}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:"Category"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"category",rules:[{required:!er&&!L,message:"Category is required"}],children:ey(ee.cat_name,(0,a.jsx)(p.default,{options:H,onChange:e=>ed(e),defaultActiveFirstOption:!0,allowClear:!0,removeIcon:(0,a.jsx)(w.Z,{}),loading:es}))}),(0,a.jsx)(c.Z.Item,{label:(0,a.jsx)("h5",{children:"Subcategory"}),labelAlign:"left",labelCol:{span:12},className:"ml-8 mb-4",name:"subcat_id",rules:[{required:!er&&!L,message:"Subcategory is required"}],children:ey(ee.subcat_name,(0,a.jsx)(p.default,{options:z,disabled:0===z.length,defaultValue:z.length>0?void 0:null===(D=z[0])||void 0===D?void 0:D.value,onChange:e=>Q(null!=e?e:""),allowClear:!0,removeIcon:(0,a.jsx)(w.Z,{}),loading:es}))}),""!==K&&!ec&&(0,a.jsxs)(a.Fragment,{children:[eh(M,g.rJ.INFORMATION),(0,a.jsx)("h5",{className:"mb-3.5 mt-8",children:"Certification"}),eh(M,g.rJ.CERTIFICATION),(0,a.jsx)("h5",{className:"mb-3.5 mt-8",children:"Warranty"}),eh(M,g.rJ.WARRANTY),(0,a.jsx)("h5",{className:"mb-3.5 mt-8",children:"Specification"}),eh(M,g.rJ.SPECIFICATION)]}),(0,a.jsx)(c.Z.Item,{name:"status",hidden:!0}),(!L||er)&&(0,a.jsxs)(o.Z,{className:"justify-end mt-16",children:[(0,a.jsx)(_.ZP,{type:"default",size:"large",className:"m-2",onClick:()=>{if(er){var e;ea(!1),q(null===(e=ee.product_img)||void 0===e?void 0:e.file.preview),Y.resetFields()}else U.back()},children:"Cancel"}),(0,a.jsx)(_.ZP,{type:"primary",size:"large",className:"m-2",onClick:eu,disabled:""===K||ec,children:er?"Save":"AddProduct"})]})]})})})]})})}},6762:function(e,t,r){"use strict";r.d(t,{K:function(){return a}});class a{}a.REGEX_ALPHABET=/^[a-zA-Z\s\-\_]+$/,a.REGEX_NUMERIC=/^\d*\.?\d*$/,a.REGEX_ALPHANUMERIC=/^[a-zA-Z0-9\s\-\_\@\#\!\$]+$/},88372:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(91413),c=r(86863);class i{}i.createCategory=async e=>{try{return await c.O.post(a.P.CREATE_CATEGORY,e)}catch(e){throw console.error(e),e}},i.createGeneralSpecification=async e=>{try{return await c.O.post(a.P.CREATE_GENERAL_SPECIFICATION,e)}catch(e){throw console.error(e),e}},i.getAllGeneralSpecifications=async()=>{try{return await c.O.get(a.P.FIND_ALL_GENERAL_SPECIFICATION)}catch(e){throw console.error(e),e}},i.createGeneralSubspecification=async e=>{try{return await c.O.post(a.P.CREATE_GENERAL_SUBSPECIFICATION,e)}catch(e){throw console.error(e),e}},i.createSubcategory=async e=>{try{return await c.O.post(a.P.CREATE_SUBCATEGORY,e)}catch(e){throw console.error(e),e}},i.getAllCategory=async()=>{try{return await c.O.get(a.P.FIND_ALL_CATEGORY)}catch(e){throw console.error(e),e}},i.findOneSubcategoryById=async e=>{try{return await c.O.get(a.P.FIND_ONE_SUBCATEGORY_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findAllActiveCategories=async()=>{try{return await c.O.get(a.P.FIND_ALL_ACTIVE_CATEGORIES)}catch(e){throw console.error(e),e}},i.updateCategory=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_CATEGORY,t,{id:e})}catch(e){throw console.error(e),e}},i.updateSubcategory=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_SUBCATEGORY,t,{id:e})}catch(e){throw console.error(e),e}},i.updateGeneralSpecification=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_GENERAL_SPECIFICATION,t,{id:e})}catch(e){throw console.error(e),e}},i.updateGeneralSubspecification=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_GENERAL_SUBSPECIFICATION,t,{id:e})}catch(e){throw console.error(e),e}},i.deactivateCategory=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_CATEGORY,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deactivateSubcategory=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_SUBCATEGORY,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deleteCategory=async e=>{try{return await c.O.delete(a.P.DELETE_CATEGORY,{id:e})}catch(e){throw console.error(e),e}},i.deleteSubcategory=async e=>{try{return await c.O.delete(a.P.DELETE_SUBCATEGORY,{id:e})}catch(e){throw console.error(e),e}},i.deactivateGeneralSpecification=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_GENERAL_SPECIFICATION,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deactivateGeneralSubspecification=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_GENERAL_SUBSPECIFICATION,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deleteGeneralSpecification=async e=>{try{return await c.O.delete(a.P.DELETE_GENERAL_SPECIFICATION,{id:e})}catch(e){throw console.error(e),e}},i.deleteGeneralSubspecification=async e=>{try{return await c.O.delete(a.P.DELETE_GENERAL_SUBSPECIFICATION,{id:e})}catch(e){throw console.error(e),e}},i.deactivateCategoryBaseSpecification=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_BASE_SPECIFICATION,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deactivateCategoryBaseSubspecification=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_BASE_SUBSPECIFICATION,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deactivateSubcategorySpecification=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_SUBCATEGORY_SPECIFICATION,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deactivateSubcategorySubspecification=async(e,t)=>{try{return await c.O.put(a.P.DEACTIVATE_SUBCATEGORY_SUBSPECIFICATION,{},{id:e,is_active:t})}catch(e){throw console.error(e),e}},i.deleteCategoryBaseSpecification=async e=>{try{return await c.O.delete(a.P.DELETE_BASE_SPECIFICATION,{id:e})}catch(e){throw console.error(e),e}},i.deleteCategoryBaseSubspecification=async e=>{try{return await c.O.delete(a.P.DELETE_BASE_SUBSPECIFICATION,{id:e})}catch(e){throw console.error(e),e}},i.deleteSubcategorySpecification=async e=>{try{return await c.O.delete(a.P.DELETE_SUBCATEGORY_SPECIFICATION,{id:e})}catch(e){throw console.error(e),e}},i.deleteSubcategorySubspecification=async e=>{try{return await c.O.delete(a.P.DELETE_SUBCATEGORY_SUBSPECIFICATION,{id:e})}catch(e){throw console.error(e),e}},i.findCategoryBaseSpecificationByCatId=async e=>{try{return await c.O.get(a.P.FIND_BASE_SPECIFICATION_BY_CAT_ID,{id:e})}catch(e){throw console.error(e),e}},i.findSubcategorySpecificationByCatId=async e=>{try{return await c.O.get(a.P.FIND_SUBCATEGORY_SPECIFICATION_BY_CAT_ID,{id:e})}catch(e){throw console.error(e),e}},i.findActiveSubcategorySpecificationByCatId=async e=>{try{return await c.O.get(a.P.FIND_ACTIVE_SUBCATEGORY_SPECIFICATION_BY_CAT_ID,{id:e})}catch(e){throw console.error(e),e}},i.findSubcategorySpecificationById=async e=>{try{return await c.O.get(a.P.FIND_SUBCATEGORY_SPECIFICATION_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findSubcategorySubspecificationById=async e=>{try{return await c.O.get(a.P.FIND_SUBCATEGORY_SUBSPECIFICATION_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findGeneralSpecificationById=async e=>{try{return await c.O.get(a.P.FIND_GENERAL_SPECIFICATION_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findGeneralSubspecificationById=async e=>{try{return await c.O.get(a.P.FIND_GENERAL_SUBSPECIFICATION_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findBaseSpecificationById=async e=>{try{return await c.O.get(a.P.FIND_BASE_SPECIFICATION_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findBaseSubspecificationById=async e=>{try{return await c.O.get(a.P.FIND_BASE_SUBSPECIFICATION_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findAllBaseSpecificationWithSameSubcatById=async e=>{try{return await c.O.get(a.P.FIND_ALL_BASE_SPECIFICATION_WITH_SAME_SUBCAT_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.findAllSubcategorySpecificationWithSameSubcatById=async e=>{try{return await c.O.get(a.P.FIND_ALL_SUBCATEGORY_SPECIFICATION_WITH_SAME_SUBCAT_BY_ID,{id:e})}catch(e){throw console.error(e),e}},i.createCategoryBaseSpecification=async e=>{try{return console.log(e),await c.O.post(a.P.CREATE_BASE_SPECIFICATION,e)}catch(e){throw console.error(e),e}},i.createCategoryBaseSubspecification=async e=>{try{return await c.O.post(a.P.CREATE_BASE_SUBSPECIFICATION,e)}catch(e){throw console.error(e),e}},i.createSubcategorySpecification=async e=>{try{return await c.O.post(a.P.CREATE_SUBCATEGORY_SPECIFICATION,e)}catch(e){throw console.error(e),e}},i.createSubcategorySubspecification=async e=>{try{return await c.O.post(a.P.CREATE_SUBCATEGORY_SUBSPECIFICATION,e)}catch(e){throw console.error(e),e}},i.updateBaseSpecification=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_BASE_SPECIFICATION,t,{id:e})}catch(e){throw console.error(e),e}},i.updateBaseSubspecification=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_BASE_SUBSPECIFICATION,t,{id:e})}catch(e){throw console.error(e),e}},i.updateSubcategorySpecification=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_SUBCATEGORY_SPECIFICATION,t,{id:e})}catch(e){throw console.error(e),e}},i.updateSubcategorySubspecification=async(e,t)=>{try{return await c.O.put(a.P.UPDATE_SUBCATEGORY_SUBSPECIFICATION,t,{id:e})}catch(e){throw console.error(e),e}},i.findNameById=async e=>{try{return await c.O.get(a.P.FIND_NAME_BY_ID,{id:e})}catch(e){throw console.log(e),e}},i.getProductSpecificationBySubcatId=async e=>{try{return await c.O.get(a.P.GET_PRODUCT_SPECIFICATION_BY_SUBCAT_ID,{id:e})}catch(e){throw console.error(e),e}}},5951:function(e,t,r){"use strict";var a=r(71768);class c{static showMessage(e,t){switch(e){case"success":return a.ZP.success(t);case"error":return a.ZP.error(t);case"warning":return a.ZP.warning(t);default:return a.ZP.info(t)}}static success(e){return this.showMessage("success",e)}static error(e){return this.showMessage("error",e)}static warning(e){return this.showMessage("warning",e)}static info(e){return this.showMessage("info",e)}}t.Z=c},33864:function(){}}]);