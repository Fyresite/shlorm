module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=12)}([function(t,e){t.exports=require("react")},function(t,e,r){(function(t,r){var n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",u="[object Map]",c="[object Set]",a=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[u]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[c]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,d=p||y||Function("return this")(),b=e&&!e.nodeType&&e,h=b&&"object"==typeof r&&r&&!r.nodeType&&r,v=h&&h.exports===b;function g(t,e){return t.set(e[0],e[1]),t}function m(t,e){return t.add(e),t}function j(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function _(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function w(t,e){return function(r){return t(e(r))}}function S(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var x,P=Array.prototype,E=Function.prototype,A=Object.prototype,T=d["__core-js_shared__"],k=(x=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",D=E.toString,C=A.hasOwnProperty,z=A.toString,M=RegExp("^"+D.call(C).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=v?d.Buffer:void 0,I=d.Symbol,R=d.Uint8Array,U=w(Object.getPrototypeOf,Object),N=Object.create,$=A.propertyIsEnumerable,B=P.splice,V=Object.getOwnPropertySymbols,J=F?F.isBuffer:void 0,L=w(Object.keys,Object),H=ht(d,"DataView"),q=ht(d,"Map"),G=ht(d,"Promise"),W=ht(d,"Set"),Z=ht(d,"WeakMap"),K=ht(Object,"create"),Q=_t(H),X=_t(q),Y=_t(G),tt=_t(W),et=_t(Z),rt=I?I.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){this.__data__=new it(t)}function at(t,e){var r=wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&St(t)}(t)&&C.call(t,"callee")&&(!$.call(t,"callee")||z.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,i=!!o;for(var u in t)!e&&!C.call(t,u)||i&&("length"==u||mt(u,o))||r.push(u);return r}function ft(t,e,r){var n=t[e];C.call(t,e)&&Ot(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(Ot(t[r][0],e))return r;return-1}function lt(t,e,r,f,s,p,y){var d;if(f&&(d=p?f(t,s,p,y):f(t)),void 0!==d)return d;if(!Et(t))return t;var b=wt(t);if(b){if(d=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&C.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,d)}else{var h=gt(t),v=h==o||h==i;if(xt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==h||h==n||v&&!p){if(_(t))return p?t:{};if(d=function(t){return"function"!=typeof t.constructor||jt(t)?{}:(e=U(t),Et(e)?N(e):{});var e}(v?{}:t),!e)return function(t,e){return dt(t,vt(t),e)}(t,function(t,e){return t&&dt(e,At(e),t)}(d,t))}else{if(!l[h])return p?t:{};d=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case u:return function(t,e,r){return j(e?r(O(t),!0):O(t),g,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,a.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,r){return j(e?r(S(t),!0):S(t),m,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,h,lt,e)}}y||(y=new ct);var w=y.get(t);if(w)return w;if(y.set(t,d),!b)var x=r?function(t){return function(t,e,r){var n=e(t);return wt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,At,vt)}(t):At(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(x||t,(function(n,o){x&&(n=t[o=n]),ft(d,o,lt(n,e,r,f,o,t,y))})),d}function pt(t){return!(!Et(t)||(e=t,k&&k in e))&&(Pt(t)||_(t)?M:f).test(_t(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new R(e).set(new R(t)),e}function dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;ft(r,u,void 0===c?t[u]:c)}return r}function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ht(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=K?K(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return C.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:C.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():B.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return st(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ut.prototype.clear=function(){this.__data__={hash:new ot,map:new(q||it),string:new ot}},ut.prototype.delete=function(t){return bt(this,t).delete(t)},ut.prototype.get=function(t){return bt(this,t).get(t)},ut.prototype.has=function(t){return bt(this,t).has(t)},ut.prototype.set=function(t,e){return bt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new it},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!q||n.length<199)return n.push([t,e]),this;r=this.__data__=new ut(n)}return r.set(t,e),this};var vt=V?w(V,Object):function(){return[]},gt=function(t){return z.call(t)};function mt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||A)}function _t(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ot(t,e){return t===e||t!=t&&e!=e}(H&&"[object DataView]"!=gt(new H(new ArrayBuffer(1)))||q&&gt(new q)!=u||G&&"[object Promise]"!=gt(G.resolve())||W&&gt(new W)!=c||Z&&"[object WeakMap]"!=gt(new Z))&&(gt=function(t){var e=z.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?_t(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return u;case Y:return"[object Promise]";case tt:return c;case et:return"[object WeakMap]"}return e});var wt=Array.isArray;function St(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Pt(t)}var xt=J||function(){return!1};function Pt(t){var e=Et(t)?z.call(t):"";return e==o||e==i}function Et(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function At(t){return St(t)?at(t):function(t){if(!jt(t))return L(t);var e=[];for(var r in Object(t))C.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}r.exports=function(t){return lt(t,!0,!0)}}).call(this,r(3),r(4)(t))},function(t,e,r){const n=r(5),o=r(9);t.exports=n.deprecate(o,"Deep requiring like `const uuidv4 = require('uuid/v4');` is deprecated as of uuid@7.x. Please require the top-level module when using the Node.js CommonJS module or use ECMAScript Modules when bundling for the browser. See https://github.com/uuidjs/uuid/blob/master/README.md#upgrading-from-v3x-of-this-module for more information.")},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},o=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(c(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,i=n.length,u=String(t).replace(o,(function(t){if("%%"===t)return"%";if(r>=i)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}})),a=n[r];r<i;a=n[++r])b(a)||!j(a)?u+=" "+a:u+=" "+c(a);return u},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),o=!0}return r.apply(this,arguments)}};var i,u={};function c(t,r){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(r)?n.showHidden=r:r&&e._extend(n,r),g(n.showHidden)&&(n.showHidden=!1),g(n.depth)&&(n.depth=2),g(n.colors)&&(n.colors=!1),g(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=a),s(n,t,n.depth)}function a(t,e){var r=c.styles[e];return r?"["+c.colors[r][0]+"m"+t+"["+c.colors[r][1]+"m":t}function f(t,e){return t}function s(t,r,n){if(t.customInspect&&r&&w(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,t);return v(o)||(o=s(t,o,n)),o}var i=function(t,e){if(g(e))return t.stylize("undefined","undefined");if(v(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(h(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(b(e))return t.stylize("null","null")}(t,r);if(i)return i;var u=Object.keys(r),c=function(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(r)),O(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(r);if(0===u.length){if(w(r)){var a=r.name?": "+r.name:"";return t.stylize("[Function"+a+"]","special")}if(m(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(_(r))return t.stylize(Date.prototype.toString.call(r),"date");if(O(r))return l(r)}var f,j="",S=!1,x=["{","}"];(y(r)&&(S=!0,x=["[","]"]),w(r))&&(j=" [Function"+(r.name?": "+r.name:"")+"]");return m(r)&&(j=" "+RegExp.prototype.toString.call(r)),_(r)&&(j=" "+Date.prototype.toUTCString.call(r)),O(r)&&(j=" "+l(r)),0!==u.length||S&&0!=r.length?n<0?m(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),f=S?function(t,e,r,n,o){for(var i=[],u=0,c=e.length;u<c;++u)A(e,String(u))?i.push(p(t,e,r,n,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,r,n,o,!0))})),i}(t,r,n,c,u):u.map((function(e){return p(t,r,n,c,e,S)})),t.seen.pop(),function(t,e,r){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(f,j,x)):x[0]+j+x[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,r,n,o,i){var u,c,a;if((a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(c=t.stylize("[Setter]","special")),A(n,o)||(u="["+o+"]"),c||(t.seen.indexOf(a.value)<0?(c=b(r)?s(t,a.value,null):s(t,a.value,r-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),g(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function y(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function b(t){return null===t}function h(t){return"number"==typeof t}function v(t){return"string"==typeof t}function g(t){return void 0===t}function m(t){return j(t)&&"[object RegExp]"===S(t)}function j(t){return"object"==typeof t&&null!==t}function _(t){return j(t)&&"[object Date]"===S(t)}function O(t){return j(t)&&("[object Error]"===S(t)||t instanceof Error)}function w(t){return"function"==typeof t}function S(t){return Object.prototype.toString.call(t)}function x(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(g(i)&&(i=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!u[r])if(new RegExp("\\b"+r+"\\b","i").test(i)){var n=t.pid;u[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else u[r]=function(){};return u[r]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=d,e.isNull=b,e.isNullOrUndefined=function(t){return null==t},e.isNumber=h,e.isString=v,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=g,e.isRegExp=m,e.isObject=j,e.isDate=_,e.isError=O,e.isFunction=w,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(7);var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(){var t=new Date,e=[x(t.getHours()),x(t.getMinutes()),x(t.getSeconds())].join(":");return[t.getDate(),P[t.getMonth()],e].join(" ")}function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",E(),e.format.apply(e,arguments))},e.inherits=r(8),e._extend=function(t,e){if(!e||!j(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var T="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function k(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(T&&t[T]){var e;if("function"!=typeof(e=t[T]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise((function(t,n){e=t,r=n})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,n){t?r(t):e(n)}));try{t.apply(this,o)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),T&&Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=T,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var o=r.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};e.apply(this,r).then((function(e){t.nextTick(u,null,e)}),(function(e){t.nextTick(k,e,u)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}}).call(this,r(6))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var a,f=[],s=!1,l=-1;function p(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&y())}function y(){if(!s){var t=c(p);s=!0;for(var e=f.length;e;){for(a=f,f=[];++l<e;)a&&a[l].run();l=-1,e=f.length}a=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function b(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];f.push(new d(t,e)),1!==f.length||s||c(y)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(r(10)),o=i(r(11));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(t,e,r){var i=e&&r||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var u=(t=t||{}).random||(t.rng||n.default)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,e)for(var c=0;c<16;++c)e[i+c]=u[c];return e||(0,o.default)(u)};e.default=u,t.exports=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){if(!n)throw new Error("uuid: This browser does not seem to support crypto.getRandomValues(). If you need to support this browser, please provide a custom random number generator through options.rng.");return n(o)};var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);t.exports=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);var i=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")};e.default=i,t.exports=e.default},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(2),u=r.n(i),c=r(1),a=r.n(c);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=o.a.forwardRef((function(t,e){var r=t.type,n=void 0===r?"text":r,i=(t.valid,t.validator,t.value,s(t,["type","valid","validator","value"]));return console.log("ref",e),o.a.createElement("input",f({type:n,ref:e.current},i))}));l.defaultProps={"formler-input":!0},l.displayName="Input";var p=l;function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}r.d(e,"Input",(function(){return p}));var O=function(t){function e(t){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=m(this,j(e).call(this,t));var n={submitted:null};if(t.children){var o=t.children;Array.isArray(o)||(o=[o]),o.forEach((function(t){var e=t.props;e["formler-input"]&&(n[e.name]={value:e.value||"",valid:!0})}))}return r.state=n,r.form={refs:{}},r.children=[],r}var r,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(e,t),r=e,(n=[{key:"shouldComponentUpdate",value:function(t,e){return this.state.submitted!==e.submitted}},{key:"getForm",value:function(){var t=this,e={};return Object.keys(this.state).forEach((function(r){"submitted"!==r&&(e[r]=t.state[r].value)})),e}},{key:"updateChildren",value:function(t){var e=this;if(!this.props.children)return[];var r=a()(this.props.children);return Array.isArray(r)||(r=[r]),r.map((function(r){var n=r.props,i=v(r,["props"]),c=n["formler-input"],a=n["formler-submit"],f=v(n,["formler-input","formler-submit"]),s=(i=b({props:f},i)).props.name;return f.key=s?"formler-input-".concat(s):u()(),c&&(e.form.refs[s]=o.a.createRef(),f.ref=e.form.refs[s],console.log("props.ref",f.ref),f.onChange=e.handleChange.bind(e,s),f=b({},f,{},t[s])),a&&(f.onClick=e.handleSubmit.bind(e)),o.a.cloneElement(i,f)}))}},{key:"handleChange",value:function(t,e){var r=this;this.setState(h({},t,{value:e.target.value,valid:!0}),(function(){r.updateChildren(r.state)}))}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var r=this.form.refs,n=a()(this.state),o=[],i=!1;Object.keys(r).forEach((function(t){console.log(r);var e=r[t].current;if(console.log(e),e.props&&e.props.validator){var u=e.props.validator(n[t].value);n[t].valid=u,u||(o.push({field:t,message:e.props.errorMessage,ref:e}),Object.keys(e.refs).forEach((function(t){var r=e.refs[t];console.log(r),r.focus&&!i&&(r.focus(),i=!0)})))}})),n.submitted=Date.now(),this.setState(n,(function(){o.length?e.props.onError&&e.props.onError(o):e.props.onSubmit&&e.props.onSubmit(e.getForm())}))}},{key:"render",value:function(){return this.children=this.updateChildren(this.state),o.a.createElement("form",{onSubmit:this.handleSubmit.bind(this),style:{display:"flex",flexDirection:"column"}},this.children,o.a.createElement("input",{type:"submit",style:{display:"none"}}))}}])&&g(r.prototype,n),i&&g(r,i),e}(o.a.Component);e.default=O}]);
//# sourceMappingURL=index.js.map