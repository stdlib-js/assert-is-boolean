// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,c=o.__lookupGetter__,i=o.__lookupSetter__;var u=r,f=function(t,e,r){var u,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(c.call(t,e)||i.call(t,e)?(u=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=u):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(t,e,r.get),y&&l&&l.call(t,e,r.set),t},p=e()?u:f;var y=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var b=function(t){return"boolean"==typeof t};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return _&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var d=function(t){return m.call(t)},j=Object.prototype.hasOwnProperty;var g=function(t,e){return null!=t&&j.call(t,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",w=g,h=S,O=s;var P=d,T=function(t){var e,r,o;if(null==t)return O.call(t);r=t[h],e=w(t,h);try{t[h]=void 0}catch(e){return O.call(t)}return o=O.call(t),e?t[h]=r:delete t[h],o},B=v()?T:P,E=Boolean.prototype.toString;var k=B,x=function(t){try{return E.call(t),!0}catch(t){return!1}},A=v();var G=function(t){return"object"==typeof t&&(t instanceof Boolean||(A?x(t):"[object Boolean]"===k(t)))},V=b,C=G;var F=y,q=function(t){return V(t)||C(t)},z=b,D=G;F(q,"isPrimitive",z),F(q,"isObject",D);var H=q;export{H as default,D as isObject,z as isPrimitive};
//# sourceMappingURL=mod.js.map
