(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43f8f7f8"],{5:function(n,t){},6:function(n,t){},cddd:function(n,t,c){"use strict";c.r(t),c.d(t,"export_txt_to_zip",(function(){return a}));c("08ba"),c("e18c"),c("1c2e");var o=c("d72d"),e=c("8423"),i=c.n(e);function a(n,t,c,e){var a=new i.a,f=c||"file",r=e||"file",u=t,p="".concat(n,"\r\n");u.forEach((function(n){var t="";t=n.toString(),p+="".concat(t,"\r\n")})),a.file("".concat(f,".txt"),p),a.generateAsync({type:"blob"}).then((function(n){Object(o["saveAs"])(n,"".concat(r,".zip"))}),(function(n){alert("导出失败")}))}}}]);