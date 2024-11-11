"use strict";exports.id=6327,exports.ids=[6327],exports.modules={96327:(t,r,a)=>{a.d(r,{Z:()=>i});var e=a(12111),c=a(63506);class i{static{this.createCategory=async t=>{try{return await c.O.post(e.P.CREATE_CATEGORY,t)}catch(t){throw console.error(t),t}}}static{this.createGeneralSpecification=async t=>{try{return await c.O.post(e.P.CREATE_GENERAL_SPECIFICATION,t)}catch(t){throw console.error(t),t}}}static{this.getAllGeneralSpecifications=async()=>{try{return await c.O.get(e.P.FIND_ALL_GENERAL_SPECIFICATION)}catch(t){throw console.error(t),t}}}static{this.createGeneralSubspecification=async t=>{try{return await c.O.post(e.P.CREATE_GENERAL_SUBSPECIFICATION,t)}catch(t){throw console.error(t),t}}}static{this.createSubcategory=async t=>{try{return await c.O.post(e.P.CREATE_SUBCATEGORY,t)}catch(t){throw console.error(t),t}}}static{this.getAllCategory=async()=>{try{return await c.O.get(e.P.FIND_ALL_CATEGORY)}catch(t){throw console.error(t),t}}}static{this.findOneSubcategoryById=async t=>{try{return await c.O.get(e.P.FIND_ONE_SUBCATEGORY_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findAllActiveCategories=async()=>{try{return await c.O.get(e.P.FIND_ALL_ACTIVE_CATEGORIES)}catch(t){throw console.error(t),t}}}static{this.updateCategory=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_CATEGORY,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.updateSubcategory=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_SUBCATEGORY,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.updateGeneralSpecification=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_GENERAL_SPECIFICATION,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.updateGeneralSubspecification=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_GENERAL_SUBSPECIFICATION,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.deactivateCategory=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_CATEGORY,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deactivateSubcategory=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_SUBCATEGORY,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deleteCategory=async t=>{try{return await c.O.delete(e.P.DELETE_CATEGORY,{id:t})}catch(t){throw console.error(t),t}}}static{this.deleteSubcategory=async t=>{try{return await c.O.delete(e.P.DELETE_SUBCATEGORY,{id:t})}catch(t){throw console.error(t),t}}}static{this.deactivateGeneralSpecification=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_GENERAL_SPECIFICATION,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deactivateGeneralSubspecification=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_GENERAL_SUBSPECIFICATION,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deleteGeneralSpecification=async t=>{try{return await c.O.delete(e.P.DELETE_GENERAL_SPECIFICATION,{id:t})}catch(t){throw console.error(t),t}}}static{this.deleteGeneralSubspecification=async t=>{try{return await c.O.delete(e.P.DELETE_GENERAL_SUBSPECIFICATION,{id:t})}catch(t){throw console.error(t),t}}}static{this.deactivateCategoryBaseSpecification=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_BASE_SPECIFICATION,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deactivateCategoryBaseSubspecification=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_BASE_SUBSPECIFICATION,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deactivateSubcategorySpecification=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_SUBCATEGORY_SPECIFICATION,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deactivateSubcategorySubspecification=async(t,r)=>{try{return await c.O.put(e.P.DEACTIVATE_SUBCATEGORY_SUBSPECIFICATION,{},{id:t,is_active:r})}catch(t){throw console.error(t),t}}}static{this.deleteCategoryBaseSpecification=async t=>{try{return await c.O.delete(e.P.DELETE_BASE_SPECIFICATION,{id:t})}catch(t){throw console.error(t),t}}}static{this.deleteCategoryBaseSubspecification=async t=>{try{return await c.O.delete(e.P.DELETE_BASE_SUBSPECIFICATION,{id:t})}catch(t){throw console.error(t),t}}}static{this.deleteSubcategorySpecification=async t=>{try{return await c.O.delete(e.P.DELETE_SUBCATEGORY_SPECIFICATION,{id:t})}catch(t){throw console.error(t),t}}}static{this.deleteSubcategorySubspecification=async t=>{try{return await c.O.delete(e.P.DELETE_SUBCATEGORY_SUBSPECIFICATION,{id:t})}catch(t){throw console.error(t),t}}}static{this.findCategoryBaseSpecificationByCatId=async t=>{try{return await c.O.get(e.P.FIND_BASE_SPECIFICATION_BY_CAT_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findSubcategorySpecificationByCatId=async t=>{try{return await c.O.get(e.P.FIND_SUBCATEGORY_SPECIFICATION_BY_CAT_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findActiveSubcategorySpecificationByCatId=async t=>{try{return await c.O.get(e.P.FIND_ACTIVE_SUBCATEGORY_SPECIFICATION_BY_CAT_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findSubcategorySpecificationById=async t=>{try{return await c.O.get(e.P.FIND_SUBCATEGORY_SPECIFICATION_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findSubcategorySubspecificationById=async t=>{try{return await c.O.get(e.P.FIND_SUBCATEGORY_SUBSPECIFICATION_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findGeneralSpecificationById=async t=>{try{return await c.O.get(e.P.FIND_GENERAL_SPECIFICATION_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findGeneralSubspecificationById=async t=>{try{return await c.O.get(e.P.FIND_GENERAL_SUBSPECIFICATION_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findBaseSpecificationById=async t=>{try{return await c.O.get(e.P.FIND_BASE_SPECIFICATION_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findBaseSubspecificationById=async t=>{try{return await c.O.get(e.P.FIND_BASE_SUBSPECIFICATION_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findAllBaseSpecificationWithSameSubcatById=async t=>{try{return await c.O.get(e.P.FIND_ALL_BASE_SPECIFICATION_WITH_SAME_SUBCAT_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.findAllSubcategorySpecificationWithSameSubcatById=async t=>{try{return await c.O.get(e.P.FIND_ALL_SUBCATEGORY_SPECIFICATION_WITH_SAME_SUBCAT_BY_ID,{id:t})}catch(t){throw console.error(t),t}}}static{this.createCategoryBaseSpecification=async t=>{try{return console.log(t),await c.O.post(e.P.CREATE_BASE_SPECIFICATION,t)}catch(t){throw console.error(t),t}}}static{this.createCategoryBaseSubspecification=async t=>{try{return await c.O.post(e.P.CREATE_BASE_SUBSPECIFICATION,t)}catch(t){throw console.error(t),t}}}static{this.createSubcategorySpecification=async t=>{try{return await c.O.post(e.P.CREATE_SUBCATEGORY_SPECIFICATION,t)}catch(t){throw console.error(t),t}}}static{this.createSubcategorySubspecification=async t=>{try{return await c.O.post(e.P.CREATE_SUBCATEGORY_SUBSPECIFICATION,t)}catch(t){throw console.error(t),t}}}static{this.updateBaseSpecification=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_BASE_SPECIFICATION,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.updateBaseSubspecification=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_BASE_SUBSPECIFICATION,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.updateSubcategorySpecification=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_SUBCATEGORY_SPECIFICATION,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.updateSubcategorySubspecification=async(t,r)=>{try{return await c.O.put(e.P.UPDATE_SUBCATEGORY_SUBSPECIFICATION,r,{id:t})}catch(t){throw console.error(t),t}}}static{this.findNameById=async t=>{try{return await c.O.get(e.P.FIND_NAME_BY_ID,{id:t})}catch(t){throw console.log(t),t}}}static{this.getProductSpecificationBySubcatId=async t=>{try{return await c.O.get(e.P.GET_PRODUCT_SPECIFICATION_BY_SUBCAT_ID,{id:t})}catch(t){throw console.error(t),t}}}}}};