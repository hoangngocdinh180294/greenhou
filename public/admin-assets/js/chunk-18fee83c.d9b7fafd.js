(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18fee83c"],{"8e1d":function(e,t,a){"use strict";var r=a("b5df"),n=a.n(r);n.a},b5df:function(e,t,a){},d41c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{attrs:{id:"main-container"}},[a("div",{staticClass:"row no-gutters flex-md-10-auto"},[a("div",{staticClass:"col-md-2"}),a("div",{staticClass:"col-md-8 order-md-0"},[a("div",{staticClass:"content content-full"},[a("div",{staticClass:"block block-fx-pop"},[a("div",{staticClass:"block-content block-content-full d-flex justify-content-between border-bottom"},[a("div",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[e._m(0),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/employees"}},[e._v("Lãnh đạo")])],1),e.isEdit?a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("Sửa Lãnh đạo / "+e._s(e.currentForm.name))]):a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("Thêm lãnh đạo")])])])]),a("div",[a("a",{staticClass:"btn btn-sm btn-info",attrs:{href:"javascript:void(0)"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("Lưu lại")])])]),a("div",{staticClass:"block-content"},[a("form",{attrs:{method:"POST",onsubmit:"return false;"}},[a("div",{staticClass:"d-none d-md-block push",attrs:{id:"side-content"}},[a("div",{attrs:{id:"settings-accordion",role:"tablist","aria-multiselectable":"true"}},[a("div",{staticClass:"block mb-0"},[e._m(1),a("div",{attrs:{id:"settings-accordion_s4",role:"tabpanel","aria-labelledby":"settings-accordion_h4","data-parent":"#settings-accordion"}},[a("div",{staticClass:"block-content block-content-full",on:{click:function(t){return e.openFileManager("image")}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentForm.image,expression:"currentForm.image"}],attrs:{type:"hidden"},domProps:{value:e.currentForm.image},on:{input:function(t){t.target.composing||e.$set(e.currentForm,"image",t.target.value)}}}),e.currentForm.image&&""!=e.currentForm.image?a("div",[a("img",{staticClass:"img-fluid",attrs:{src:e.currentForm.image,alt:""}})]):a("div",{staticClass:"btn-add-image"},[e._v(" + ")])])])])])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:254",expression:"'required|max:254'"},{name:"model",rawName:"v-model",value:e.currentForm.name,expression:"currentForm.name"}],staticClass:"form-control py-4",attrs:{type:"text",id:"post-name",name:"name",placeholder:"Họ và tên ..."},domProps:{value:e.currentForm.name},on:{input:function(t){t.target.composing||e.$set(e.currentForm,"name",t.target.value)}}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("name")))])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.currentForm.email,expression:"currentForm.email"}],staticClass:"form-control py-4",attrs:{type:"text",id:"post-email",name:"email",placeholder:"Email ..."},domProps:{value:e.currentForm.email},on:{input:function(t){t.target.composing||e.$set(e.currentForm,"email",t.target.value)}}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10",expression:"'required|max:10'"},{name:"model",rawName:"v-model",value:e.currentForm.phone,expression:"currentForm.phone"}],staticClass:"form-control py-4",attrs:{type:"text",id:"post-phone",name:"phone",placeholder:"Số điện thoại ..."},domProps:{value:e.currentForm.phone},on:{input:function(t){t.target.composing||e.$set(e.currentForm,"phone",t.target.value)}}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("phone")))])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:254",expression:"'required|max:254'"},{name:"model",rawName:"v-model",value:e.currentForm.position,expression:"currentForm.position"}],staticClass:"form-control py-4",attrs:{type:"text",id:"post-position",name:"position",placeholder:"Chức vụ ..."},domProps:{value:e.currentForm.position},on:{input:function(t){t.target.composing||e.$set(e.currentForm,"position",t.target.value)}}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("position")))])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"txt-description"}},[e._v("Ghi chú")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.currentForm.note,expression:"currentForm.note"}],staticClass:"form-control",attrs:{id:"txt-note",name:"txt-note",rows:"4"},domProps:{value:e.currentForm.note},on:{input:function(t){t.target.composing||e.$set(e.currentForm,"note",t.target.value)}}})])])])])])]),a("div",{staticClass:"col-md-2 "})]),a("file-manager-popup")],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("i",{staticClass:"nav-main-link-icon fa fa-user"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block-header block-header-default border-top p-0",attrs:{role:"tab",id:"settings-accordion_h4"}},[a("a",{staticClass:"font-w600 d-block w-100 p-3",attrs:{"data-parent":"#settings-accordion",href:"#settings-accordion_s4","aria-expanded":"true","aria-controls":"settings-accordion_s4"}},[e._v("Ảnh đại diện")])])}],i=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("bd86")),o=a("b775"),s="ajax/";function c(e){return Object(o["a"])({url:s+"employees/"+e,method:"get"})}function l(e){return Object(o["a"])({url:s+"employees",method:"post",data:e})}function m(e,t){return Object(o["a"])({url:s+"employees/"+e,method:"patch",data:t})}var u=a("2b0e"),d=a("7bb1"),p=(a("2ef0"),a("2f62"));function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}u["a"].use(d["b"],{useConstraintAttrs:!1});var g={id:null,name:"",position:"",note:"",email:"",phone:"",image:""},h={vn:{custom:{name:{required:"Vui lòng nhập tên lãnh đạo",max:"Tên quá dài"},email:{required:"Vui lòng nhập email",email:"Vui lòng nhập đúng định dạng email. VD: abc@gmail.com"},phone:{required:"Vui lòng nhập số điện thoại",max:"Số điện thoại tối đa 10 chữ số"},position:{required:"Vui lòng nhập chức vụ",max:"Tên chức vụ quá dài"}}}};d["a"].localize(h);var b=new d["a"]({first_name:"min",second_name:"required"});b.localize("vn");var F={name:"Detail",props:{isEdit:{type:Boolean,default:!1}},components:{},data:function(){return{currentForm:Object.assign({},g),valid:!0,loading:!1,nameRules:[function(e){return e.length>0||"Tên lãnh đạo không được để trống"}],panel:[!1],newDirectoryItem:{},newDirectoryIndex:-1,newDirectorySlug:""}},computed:{},watch:{},created:function(){if(this.isEdit){var e=this.$route.params&&this.$route.params.employee;this.getData(e)}else this.currentForm=Object.assign({},g)},methods:f({},Object(p["d"])("app",["setSnackbar","setMessage"]),{getData:function(e){var t=this;c(e).then((function(e){t.currentForm=e,t.slug=e.slug})).catch((function(e){console.log(e)}))},submitFormRequest:function(e){var t=this;return new Promise((function(a,r){if(t.isEdit){var n=t.$route.params&&t.$route.params.employee;m(n,e).then((function(e){a(e)})).catch((function(e){console.log(e),r(e)}))}else l(e).then((function(e){a(e)})).catch((function(e){console.log(e),r(e)}))}))},submitForm:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.loading=!0,e.submitFormRequest(e.currentForm).then((function(t){e.loading=!1,Dashmix.helpers("notify",{type:"success",icon:"fa fa-success mr-1",message:"Lưu lãnh đạo thành công."}),e.isEdit||e.$router.replace("/employees/edit/"+t.id)}),(function(){e.loading=!1,Dashmix.helpers("notify",{type:"danger",icon:"fa fa-times mr-1",message:"Không lưu được. Vui lòng lưu lại bài viết bằng công cụ khác. Reload và thử lại."})})))}))},openFileManager:function(e){var t=this;window.setFileToElement=function(a,r){t.currentForm[e]=r,t.$store.dispatch("file/closeFileManager"),jQuery("#modal-site-file").modal("hide")},"video"==e&&this.$store.dispatch("file/setType","Files"),this.$store.dispatch("file/openFileManager"),jQuery("#modal-site-file").modal("show")}})},x=F,y=(a("8e1d"),a("2877")),C=Object(y["a"])(x,r,n,!1,null,"f785caae",null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-18fee83c.d9b7fafd.js.map