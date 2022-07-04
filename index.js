// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,r=Object.prototype,n=r.toString,l=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,c=r.__lookupSetter__,u=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,t,o){var u,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof o||null===o||"[object Array]"===n.call(o))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+o+"`.");if((f="value"in o)&&(a.call(e,t)||c.call(e,t)?(u=e.__proto__,e.__proto__=r,delete e[t],e[t]=o.value,e.__proto__=u):e[t]=o.value),p="get"in o,y="set"in o,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&l&&l.call(e,t,o.get),y&&i&&i.call(e,t,o.set),e};function f(e,t,o){u(e,t,{configurable:!1,enumerable:!1,writable:!1,value:o})}function p(e){return"boolean"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",m=b()?function(e){var t,o,r,n,l;if(null==e)return s.call(e);o=e[d],l=d,t=null!=(n=e)&&_.call(n,l);try{e[d]=void 0}catch(t){return s.call(e)}return r=s.call(e),t?e[d]=o:delete e[d],r}:function(e){return s.call(e)},j=Boolean.prototype.toString,v=b();function g(e){return"object"==typeof e&&(e instanceof Boolean||(v?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===m(e)))}function S(e){return p(e)||g(e)}f(S,"isPrimitive",p),f(S,"isObject",g),e.default=S,e.isObject=g,e.isPrimitive=p,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isBoolean={});
//# sourceMappingURL=index.js.map
