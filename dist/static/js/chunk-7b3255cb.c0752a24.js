(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b3255cb"],{"08a65":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-history-container"},[n("aside",[t._v(" "+t._s(t.$t("route.management"))+" ")]),n("el-form",{ref:"form",attrs:{"label-width":"auto"}},[t._l(t.form,(function(e,a){return n("el-form-item",{key:a,attrs:{label:t.$t("management."+e.functionName)}},[n("el-switch",{model:{value:e.isEnabled,callback:function(n){t.$set(e,"isEnabled",n)},expression:"item.isEnabled"}})],1)})),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.$t("button.save")))])],1)],2)],1)},i=[],c=n("7c15"),o={data:function(){return{form:[]}},mounted:function(){this.getDate()},methods:{getDate:function(){var t=this;Object(c["e"])().then((function(e){t.form=e.data}))},onSubmit:function(){var t=this;this.$confirm("确定保存？").then((function(e){Object(c["r"])(t.form).then((function(e){t.getDate(),t.$notify({title:"Success",dangerouslyUseHTMLString:!0,type:"success"})}))})).catch((function(t){}))}}},s=o,r=(n("b8e1"),n("4ac2")),u=Object(r["a"])(s,a,i,!1,null,"10f1847e",null);e["default"]=u.exports},b8e1:function(t,e,n){"use strict";n("ce3a")},ce3a:function(t,e,n){}}]);