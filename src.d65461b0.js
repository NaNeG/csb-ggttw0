parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var define;
var t;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return a(t)||o(t,e)||u(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}function a(t){if(Array.isArray(t))return t}function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function c(t){return p(t)||l(t)||u(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function l(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function p(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(){"use strict";h=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(q){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(q){return{type:"throw",arg:q}}}t.wrap=u;var p={};function f(){}function d(){}function y(){}var v={};s(v,a,function(){return this});var m=Object.getPrototypeOf,b=m&&m(m(_([])));b&&b!==r&&n.call(b,a)&&(v=b);var g=y.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function w(t,r){var o;this._invoke=function(a,i){function c(){return new r(function(o,c){!function o(a,i,c,s){var u=l(t[a],t,i);if("throw"!==u.type){var p=u.arg,f=p.value;return f&&"object"==e(f)&&n.call(f,"__await")?r.resolve(f.__await).then(function(t){o("next",t,c,s)},function(t){o("throw",t,c,s)}):r.resolve(f).then(function(t){p.value=t,c(p)},function(t){return o("throw",t,c,s)})}s(u.arg)}(a,i,o,c)})}return o=o?o.then(c,c):c()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return d.prototype=y,s(g,"constructor",y),s(y,"constructor",d),d.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(w.prototype),s(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(g),s(g,c,"Generator"),s(g,a,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function d(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){d(a,n,o,i,c,"next",t)}function c(t){d(a,n,o,i,c,"throw",t)}i(void 0)})}}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e,r){return e&&m(t.prototype,e),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var g=function(){function t(e){v(this,t),this.options=e,this.maxexample=2,this.word=""}return b(t,[{key:"displayName",value:function(){var t=y(h().mark(function t(){var e;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,api.locale();case 2:if(-1==(e=t.sent).indexOf("CN")){t.next=5;break}return t.abrupt("return","剑桥英汉双解(简体)");case 5:if(-1==e.indexOf("TW")){t.next=7;break}return t.abrupt("return","劍橋英漢雙解(簡體)");case 7:return t.abrupt("return","Cambridge ccw");case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"setOptions",value:function(t){this.options=t,this.maxexample=t.maxexample}},{key:"findTerm",value:function(){var t=y(h().mark(function t(e){var r,n,o;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.word=e,n=[this.findCambridge(e),this.findYoudao(e)],t.next=4,Promise.all(n);case 4:return o=t.sent,t.abrupt("return",(r=[]).concat.apply(r,c(o)).filter(function(t){return t}));case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"findCambridge",value:function(){var t=y(h().mark(function t(e){var n,o,a,c,s,u,l,p,f,d,y,v,m,b,g,x,w,k,S,L,E,_,A,q,O,j,T,I,P,C,N,F,G,U,R,z,Y,M,B,D,K,W,$,H;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=function(t){return t?t.innerText.trim():""},n=[],e){t.next=4;break}return t.abrupt("return",n);case 4:return"https://dictionary.cambridge.org/search/english-chinese-simplified/direct/?q=",a="https://dictionary.cambridge.org/search/english-chinese-simplified/direct/?q="+encodeURIComponent(e),c="",t.prev=7,t.next=10,api.fetch(a);case 10:s=t.sent,u=new DOMParser,c=u.parseFromString(s,"text/html"),t.next=18;break;case 15:return t.prev=15,t.t0=t.catch(7),t.abrupt("return",[]);case 18:l=c.querySelectorAll(".pr .entry-body__el")||[],p=i(l),t.prev=20,p.s();case 22:if((f=p.n()).done){t.next=127;break}d=f.value,y=[],v=[],m=o(d.querySelector(".headword")),b="",(g=d.querySelectorAll(".pron .ipa"))&&(x=o(g[0]),w=o(g[1]),b=x||w?"UK[".concat(x,"] US[").concat(w,"] "):""),k=(k=o(d.querySelector(".posgram")))?"<span class='pos'>".concat(k,"</span>"):"",v[0]=d.querySelector(".uk.dpron-i source"),v[0]=v[0]?"https://dictionary.cambridge.org"+v[0].getAttribute("src"):"",v[1]=d.querySelector(".us.dpron-i source"),v[1]=v[1]?"https://dictionary.cambridge.org"+v[1].getAttribute("src"):"",S=d.querySelectorAll(".sense-body")||[],L=i(S),t.prev=38,L.s();case 40:if((E=L.n()).done){t.next=115;break}_=E.value,A=_.childNodes||[],q=i(A),t.prev=44,q.s();case 46:if((O=q.n()).done){t.next=105;break}if(j=O.value,T="",I=[],j.classList&&j.classList.contains("phrase-block")&&(T=(T=o(j.querySelector(".phrase-title")))?'<div class="phrasehead">'.concat(T,"</div>"):"",I=j.querySelectorAll(".def-block")||[]),j.classList&&j.classList.contains("def-block")&&(I=[j]),!(I.length<=0)){t.next=54;break}return t.abrupt("continue",103);case 54:P=i(I),t.prev=55,P.s();case 57:if((C=P.n()).done){t.next=95;break}if(N=C.value,F=o(N.querySelector(".ddef_h .def")),G=o(N.querySelector(".def-body .trans")),F){t.next=63;break}return t.abrupt("continue",93);case 63:if(U="",F="<span class='eng_tran'>".concat(F.replace(RegExp(m,"gi"),"<b>".concat(m,"</b>")),"</span>"),G="<span class='chn_tran'>".concat(G,"</span>"),R="<span class='tran'>".concat(F).concat(G,"</span>"),U+=T?"".concat(T).concat(R):"".concat(k).concat(R),!((z=N.querySelectorAll(".def-body .examp")||[]).length>0&&this.maxexample>0)){t.next=92;break}U+='<ul class="sents">',Y=i(z.entries()),t.prev=72,Y.s();case 74:if((M=Y.n()).done){t.next=83;break}if(B=r(M.value,2),D=B[0],K=B[1],!(D>this.maxexample-1)){t.next=78;break}return t.abrupt("break",83);case 78:W=o(K.querySelector(".eg")),$=o(K.querySelector(".trans")),U+="<li class='sent'><span class='eng_sent'>".concat(W.replace(RegExp(m,"gi"),"<b>".concat(m,"</b>")),"</span><span class='chn_sent'>").concat($,"</span></li>");case 81:t.next=74;break;case 83:t.next=88;break;case 85:t.prev=85,t.t1=t.catch(72),Y.e(t.t1);case 88:return t.prev=88,Y.f(),t.finish(88);case 91:U+="</ul>";case 92:U&&y.push(U);case 93:t.next=57;break;case 95:t.next=100;break;case 97:t.prev=97,t.t2=t.catch(55),P.e(t.t2);case 100:return t.prev=100,P.f(),t.finish(100);case 103:t.next=46;break;case 105:t.next=110;break;case 107:t.prev=107,t.t3=t.catch(44),q.e(t.t3);case 110:return t.prev=110,q.f(),t.finish(110);case 113:t.next=40;break;case 115:t.next=120;break;case 117:t.prev=117,t.t4=t.catch(38),L.e(t.t4);case 120:return t.prev=120,L.f(),t.finish(120);case 123:H=this.renderCSS(),n.push({css:H,expression:m,reading:b,definitions:y,audios:v});case 125:t.next=22;break;case 127:t.next=132;break;case 129:t.prev=129,t.t5=t.catch(20),p.e(t.t5);case 132:return t.prev=132,p.f(),t.finish(132);case 135:return t.abrupt("return",n);case 136:case"end":return t.stop()}},t,this,[[7,15],[20,129,132,135],[38,117,120,123],[44,107,110,113],[55,97,100,103],[72,85,88,91]])}));return function(e){return t.apply(this,arguments)}}()},{key:"findYoudao",value:function(){var t=y(h().mark(function t(e){var r,n,o,a,c,s,u,l,p;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(p=function(t){return t?t.innerText.trim():""},l=function(t){var e=[],r=t.querySelectorAll("#ydTrans .trans-container p")[1];if(!r)return e;var n="".concat(p(r));return e.push({css:"\n              <style>\n                  .odh-expression {\n                      font-size: 1em!important;\n                      font-weight: normal!important;\n                  }\n              </style>",definitions:[n]}),e},u=function(t){var e=[],r=t.querySelectorAll("#phrsListTab .trans-container ul li");if(!r||!r.length)return e;var n=p(t.querySelector("#phrsListTab .wordbook-js .keyword")),o="",a=t.querySelectorAll("#phrsListTab .wordbook-js .pronounce");if(a){var c=p(a[0]),s=p(a[1]);o=c||s?"".concat(c," ").concat(s):""}var u=[];u[0]="https://dict.youdao.com/dictvoice?audio=".concat(encodeURIComponent(n),"&type=1"),u[1]="https://dict.youdao.com/dictvoice?audio=".concat(encodeURIComponent(n),"&type=2");var l,f='<ul class="ec">',h=i(r);try{for(h.s();!(l=h.n()).done;){var d=l.value,y="",v=p(d),m=/(^.+?\.)\s/gi.exec(v);m&&m.length>1&&(y=m[1],v=v.replace(y,"")),y=y?'<span class="pos simple">'.concat(y,"</span>"):"",f+='<li class="ec">'.concat(y,'<span class="ec_chn">').concat(v,"</span></li>")}}catch(b){h.e(b)}finally{h.f()}f+="</ul>";return e.push({css:"\n              <style>\n                  span.pos  {text-transform:lowercase; font-size:0.9em; margin-right:5px; padding:2px 4px; color:white; background-color:#0d47a1; border-radius:3px;}\n                  span.simple {background-color: #999!important}\n                  ul.ec, li.ec {margin:0; padding:0;}\n              </style>",expression:n,reading:o,definitions:[f],audios:u}),e},e){t.next=5;break}return t.abrupt("return",[]);case 5:return"https://dict.youdao.com/w/",r="https://dict.youdao.com/w/"+encodeURIComponent(e),n="",t.prev=8,t.next=11,api.fetch(r);case 11:return o=t.sent,a=new DOMParser,n=a.parseFromString(o,"text/html"),c=u(n),s=l(n),t.abrupt("return",[].concat(c,s));case 19:return t.prev=19,t.t0=t.catch(8),t.abrupt("return",[]);case 22:case"end":return t.stop()}},t,null,[[8,19]])}));return function(e){return t.apply(this,arguments)}}()},{key:"renderCSS",value:function(){return"\n          <style>\n              div.phrasehead{margin: 2px 0;font-weight: bold;}\n              span.star {color: #FFBB00;}\n              span.pos  {text-transform:lowercase; font-size:0.9em; margin-right:5px; padding:2px 4px; color:white; background-color:#0d47a1; border-radius:3px;}\n              span.tran {margin:0; padding:0;}\n              span.eng_tran {margin-right:3px; padding:0;}\n              span.chn_tran {color:#0d47a1;}\n              ul.sents {font-size:0.8em; list-style:square inside; margin:3px 0;padding:5px;background:rgba(13,71,161,0.1); border-radius:5px;}\n              li.sent  {margin:0; padding:0;}\n              span.eng_sent {margin-right:5px;}\n              span.chn_sent {color:#0d47a1;}\n          </style>"}}]),t}();
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-ggttw0/src.d65461b0.js.map