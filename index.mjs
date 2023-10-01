// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-tostringtag-support@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/boolean-ctor@v0.1.0-esm/index.mjs";function r(t){return"boolean"==typeof t}var i=Boolean.prototype.toString;var o=e();function a(t){return"object"==typeof t&&(t instanceof n||(o?function(t){try{return i.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===s(t)))}function l(t){return r(t)||a(t)}t(l,"isPrimitive",r),t(l,"isObject",a);export{l as default,a as isObject,r as isPrimitive};
//# sourceMappingURL=index.mjs.map
