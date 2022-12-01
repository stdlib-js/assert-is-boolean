// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,r=o.toString,n=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,a=o.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var u,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===r.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===r.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(i.call(e,t)||a.call(e,t)?(u=e.__proto__,e.__proto__=o,delete e[t],e[t]=c.value,e.__proto__=u):e[t]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(e,t,c.get),y&&l&&l.call(e,t,c.set),e};function u(e,t,o){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:o})}function f(e){return"boolean"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,_=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(e){var t,o,r,n,l;if(null==e)return b.call(e);o=e[s],l=s,t=null!=(n=e)&&_.call(n,l);try{e[s]=void 0}catch(t){return b.call(e)}return r=b.call(e),t?e[s]=o:delete e[s],r}:function(e){return b.call(e)},m=Boolean,g=Boolean.prototype.toString,j=y();function v(e){return"object"==typeof e&&(e instanceof m||(j?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===d(e)))}function S(e){return f(e)||v(e)}return u(S,"isPrimitive",f),u(S,"isObject",v),S},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isBoolean=t();
//# sourceMappingURL=browser.js.map
