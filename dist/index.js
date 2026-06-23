"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(b){throw (e=0, b)}};};var i=t(function(R,n){
function x(r){return typeof r=="boolean"}n.exports=x
});var u=t(function(k,a){
var B=Boolean.prototype.toString;a.exports=B
});var v=t(function(w,c){
var g=u();function j(r){try{return g.call(r),!0}catch(e){return!1}}c.exports=j
});var s=t(function(z,f){
var y=require('@stdlib/assert-has-tostringtag-support/dist'),m=require('@stdlib/utils-native-class/dist'),O=require('@stdlib/boolean-ctor/dist'),S=v(),P=y();function h(r){return typeof r=="object"?r instanceof O?!0:P?S(r):m(r)==="[object Boolean]":!1}f.exports=h
});var p=t(function(A,q){
var T=i(),d=s();function C(r){return T(r)||d(r)}q.exports=C
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=p(),F=i(),G=s();l(o,"isPrimitive",F);l(o,"isObject",G);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
