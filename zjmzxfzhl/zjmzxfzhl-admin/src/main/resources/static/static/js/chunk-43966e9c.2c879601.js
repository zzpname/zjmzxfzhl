(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43966e9c"],{"333d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[i("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},s=[];i("c5f6");Math.easeInOutQuad=function(t,e,i,n){return t/=n/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,i){var n=o(),s=t-n,c=20,l=0;e="undefined"===typeof e?500:e;var u=function t(){l+=c;var o=Math.easeInOutQuad(l,n,s,e);r(o),l<e?a(t):i&&"function"===typeof i&&i()};u()}var l={name:"Pagination",props:{total:{required:!0,type:Number},current:{type:Number,default:1},size:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.current},set:function(t){this.$emit("update:current",t)}},pageSize:{get:function(){return this.size},set:function(t){this.$emit("update:size",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{current:this.currentPage,size:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{current:t,size:this.pageSize}),this.autoScroll&&c(0,800)}}},u=l,d=(i("6467"),i("2877")),f=Object(d["a"])(u,n,s,!1,null,"5599f724",null);e["default"]=f.exports},"3f4b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"发起流程",visible:t.dialogStartProcessVisibleInChild,fullscreen:!1},on:{"update:visible":function(e){t.dialogStartProcessVisibleInChild=e}}},[t.generateStartFormVisible?i("div",[i("fm-generate-form",{ref:"generateStartForm",attrs:{data:t.startFormJson}})],1):t._e(),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.showBusinessKey?i("el-form",{attrs:{"label-width":"100px"}},[i("el-form-item",{attrs:{label:"业务主键Key:"}},[i("el-input",{attrs:{placeholder:"请输入业务主键Key"},model:{value:t.businessKey,callback:function(e){t.businessKey=e},expression:"businessKey"}})],1)],1):t._e(),t._v(" "),i("el-button",{attrs:{icon:"el-icon-close"},on:{click:function(e){t.dialogStartProcessVisibleInChild=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:t.doStartInstance}},[t._v("确定\n        ")])],1)])},s=[],a=i("0fea"),r=i("5c96"),o={name:"StartProcess",props:{visible:{type:Boolean,default:function(){return!1}},processDefinition:{type:Object,default:function(){return{}}}},computed:{dialogStartProcessVisibleInChild:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},data:function(){return{generateStartFormVisible:!1,startFormJson:void 0,variables:void 0,showBusinessKey:!1,businessKey:void 0}},created:function(){this.initData()},methods:{initData:function(){var t=this;this.processDefinition.formKey&&Object(a["c"])("/flowable/processDefinition/renderedStartForm",{processDefinitionId:this.processDefinition.id}).then((function(e){var i=e.data;t.showBusinessKey=i.showBusinessKey,i.renderedStartForm&&(t.startFormJson=JSON.parse(i.renderedStartForm),t.generateStartFormVisible=!0)}))},doStartInstance:function(){var t=this;this.$refs.generateStartForm?this.$refs.generateStartForm.getData().then((function(e){if(e&&void 0!=e){var i=JSON.stringify(e),n=Object.assign({processInstanceFormData:i},e);return Object(a["d"])("/flowable/processInstance/start",{processDefinitionId:t.processDefinition.id,businessKey:t.businessKey,values:n}).then((function(e){var i=e.msg;r["Message"].success(i),t.dialogStartProcessVisibleInChild=!1}))}})).catch((function(t){})):Object(a["d"])("/flowable/processInstance/start",{processDefinitionId:this.processDefinition.id,businessKey:this.businessKey}).then((function(e){var i=e.msg;r["Message"].success(i),t.dialogStartProcessVisibleInChild=!1}))}}},c=o,l=i("2877"),u=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},6467:function(t,e,i){"use strict";var n=i("c45a"),s=i.n(n);s.a},7529:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"流程定义名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.btnQuery(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),i("el-dropdown",{staticClass:"filter-item",attrs:{"split-button":"",type:"primary"},on:{click:t.btnQuery}},[i("i",{staticClass:"el-icon-search el-icon--left"}),t._v("查询\n            "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{icon:"el-icon-zoom-out"},nativeOn:{click:function(e){return t.btnReset(e)}}},[t._v("重置")])],1)],1)],1),t._v(" "),i("el-row",t._l(t.records,(function(e){return i("el-col",{attrs:{span:12}},[i("div",{staticClass:"filter-container",staticStyle:{"margin-right":"3px","margin-bottom":"3px"}},[i("el-card",[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v(t._s(e.name)+"-v"+t._s(e.version))]),t._v(" "),i("div",{staticStyle:{position:"relative","text-align":"right"}},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.btnImage(e.id)}}},[t._v("流程图")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.btnStartInstance(e)}}},[t._v("发起流程\n                            ")])],1)]),t._v(" "),i("div",{staticClass:"text item"},[t._v("\n                        "+t._s(e.description?e.description:"无描述")+"\n                    ")]),t._v(" "),i("div",{staticClass:"text item"},[t._v("\n                        "+t._s(e.category?e.category:"无命名空间")+"\n                    ")])])],1)])})),1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,current:t.listQuery.current,size:t.listQuery.size},on:{"update:current":function(e){return t.$set(t.listQuery,"current",e)},"update:size":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.list}}),t._v(" "),i("el-dialog",{attrs:{title:"流程图",fullscreen:"",visible:t.dialogImageVisible,width:"80%"},on:{"update:visible":function(e){t.dialogImageVisible=e}}},[i("img",{attrs:{src:t.imagePath,alt:"流程图"}})]),t._v(" "),t.dialogStartInstanceVisible?i("start-process",{attrs:{visible:t.dialogStartInstanceVisible,processDefinition:t.processDefinition},on:{"update:visible":function(e){t.dialogStartInstanceVisible=e}}}):t._e()],1)},s=[],a=i("333d"),r=i("0fea"),o=i("5c96"),c=i("5f87"),l=i("3f4b"),u={name:"FlowableStartMyProcess",components:{StartProcess:l["default"],Pagination:a["default"]},data:function(){return{dicts:[],records:null,selectedRecords:[],total:0,listQuery:{current:1,size:10,id:void 0,name:void 0,key:void 0,latestVersion:"true",suspended:void 0},dialogFormVisible:!1,dialogImportVisible:!1,dialogImageVisible:!1,imagePath:"",dialogStartInstanceVisible:!1,formJson:void 0,dialogProcessDefinitionIdentityLinkVisible:!1,selectedProcessDefinitionId:"",selectedProcessDefinitionName:"",processDefinition:void 0}},beforeCreate:function(){var t=this;this.getDicts("trueOrFalse").then((function(e){var i=e.data;t.dicts=i}))},created:function(){this.list()},methods:{list:function(){var t=this;Object(r["c"])("/flowable/processDefinition/listMyself",this.listQuery).then((function(e){var i=e.data;t.records=i.records,t.total=i.total,0==i.total&&o["Message"].info("查无可发起的流程")}))},btnQuery:function(){this.listQuery.current=1,this.list()},btnReset:function(){this.listQuery={current:1,size:10,id:void 0,name:void 0,key:void 0,latestVersion:"true",suspended:void 0},this.list()},btnImage:function(t){this.imagePath="".concat("/zjmzxfzhl")+"/flowable/processDefinition/image?processDefinitionId="+t+"&access_token="+Object(c["a"])()+"&time="+new Date,this.dialogImageVisible=!0},btnStartInstance:function(t){this.processDefinition=t,this.dialogStartInstanceVisible=!0}}},d=u,f=i("2877"),p=Object(f["a"])(d,n,s,!1,null,null,null);e["default"]=p.exports},c45a:function(t,e,i){}}]);