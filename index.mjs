// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-tostringtag-support@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@esm/index.mjs";function s(t){return"boolean"==typeof t}var r=Boolean.prototype.toString;var i=e();function o(t){return"object"==typeof t&&(t instanceof Boolean||(i?function(t){try{return r.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===n(t)))}function a(t){return s(t)||o(t)}t(a,"isPrimitive",s),t(a,"isObject",o);export{a as default,o as isObject,s as isPrimitive};
//# sourceMappingURL=index.mjs.map
