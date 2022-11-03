/*! For license information please see main.js.LICENSE.txt */
!function(){"use strict";function t(){t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var h={};function f(){}function d(){}function p(){}var v={};s(v,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(k([])));m&&m!==n&&r.call(m,i)&&(v=m);var g=p.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,s(g,"constructor",p),s(p,"constructor",d),d.displayName=s(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},w(L.prototype),s(L.prototype,a,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),s(g,c,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}var n=function(){var n,r=(n=t().mark((function e(n){var r,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,i){var a=n.apply(t,r);function c(t){e(a,o,i,c,s,"next",t)}function s(t){e(a,o,i,c,s,"throw",t)}c(void 0)}))});return function(t){return r.apply(this,arguments)}}(),r=function(t){var e,n=t.toString(),r=n.split("").length,o=r%3;e=n.substring(0,o);for(var i=o;i<r;)e=""===e?e.concat("".concat(n.substring(i,i+3))):e.concat(",".concat(n.substring(i,i+3))),i+=3;return e},o=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];e&&clearTimeout(e),e=setTimeout((function(){t.apply(r,i)}),n)}},i=function(t){for(;t.firstElementChild;)t.removeChild(t.firstElementChild)},a=function(t){return Object.values(t).reduce((function(t,e){return t.concat(", ".concat(e))}))},c=function t(e){var n,o=document.createElement("div");o.classList.add("country-card-full-display"),o.innerHTML='<button class="button button--back">\n            <span>\n                <svg aria-hidden="true">\n    \n                    <use href="#arrow-back_icon"></use>\n    \n                </svg>\n                <span>Back</span>\n            </span>\n        </button>\n        <div class="info-container">\n            <img src="'.concat(e.flags.svg,'" alt="').concat(e.name.common,' flag" class="flag-full">\n            <div class="infos">\n                <ul>\n                    <li aria-label="country name" class="country-name-text"> ').concat(e.name.common,'</li>\n                    <li>\n                        <span class="country-specs-title">Native Name:</span>\n                        <span>').concat(Object.values(e.name.nativeName)[0].common,'</span>\n                    </li>\n                    <li>\n                        <span class="country-specs-title">population:</span>\n                        <span>').concat(r(e.population),'</span>\n                    </li>\n                    <li>\n                        <span class="country-specs-title">Region:</span>\n                        <span>').concat(e.region,'</span>\n                    </li>\n                    <li>\n                        <span class="country-specs-title">Sub Region:</span>\n                        <span>').concat(e.subregion,'</span>\n                    </li>\n                    <li>\n                        <span class="country-specs-title">Capital:</span>\n                        <span>').concat(e.capital,'</span>\n                    </li>\n\n                    <li class=visually-hidden>\n                        <span class="country-specs-title">Top Level Domain:</span>\n                        <span>').concat(e.tld,'</span>\n                    </li>\n                    <li class=visually-hidden>\n                        <span class="country-specs-title">Currencies:</span>\n                        <span>').concat(Object.values(e.currencies)[0].name,'</span>\n                    </li>\n                    <li class=visually-hidden>\n                        <span class="country-specs-title">Languages:</span>\n                        <span>').concat(a(e.languages),'</span>\n                    </li>\n                </ul>\n    \n                <ul aria-hidden=true>\n                    <li>\n                        <span class="country-specs-title">Top Level Domain:</span>\n                        <span>').concat(e.tld,'</span>\n                    </li>\n                    <li>\n                        <span class="country-specs-title">Currencies:</span>\n                        <span>').concat(Object.values(e.currencies)[0].name,'</span>\n                    </li>\n                    <li>\n                        <span class="country-specs-title">Languages:</span>\n                        <span>').concat(a(e.languages),'</span>\n                    </li>\n                </ul>\n                <div class="borders">\n                    <span class="country-specs-title">Border Countries:</span>\n                    ').concat((n=e.borders)?n.reduce((function(t,e){return t.concat("<button data-name=".concat(e," class='button button--country'>").concat(e,"</button>"))}),""):"","\n                </div>\n            </div>\n        </div>"),document.body.appendChild(o);var i=o.querySelector(".button--back");i.addEventListener("click",(function(t){var e=document.querySelector("main"),n=document.querySelector(".search-and-filter-container");document.body.removeChild(t.currentTarget.parentElement),e.classList.contains("hide")&&(e.classList.remove("hide"),n.classList.remove("hide"))}));var c=o.querySelectorAll(".button--country");c&&c.forEach((function(e){e.addEventListener("click",(function(e){var n=e.target.dataset.name,r=new RegExp("^".concat(n),"i"),o=JSON.parse(localStorage.getItem("data"));i.click();var a=o.find((function(t){return r.test(t.translatedNames)})),c=document.querySelector("main"),s=document.querySelector(".search-and-filter-container");c.classList.contains("hide")||(c.classList.add("hide"),s.classList.add("hide")),t(a)}))}))},s=function(){var t=parseInt(this.dataset.id),e=document.querySelector("main"),n=document.querySelector(".search-and-filter-container");e.classList.contains("hide")||(e.classList.add("hide"),n.classList.add("hide"));var r=JSON.parse(localStorage.getItem("data"))[t];c(r)},u=function(t,e){var n=e;for(var r in t)n=n.concat(" ".concat(t[r].common));return n},l=function(t){var e=document.createElement("div");e.addEventListener("click",o(s,100,e)),e.classList.add("country-card"),e.setAttribute("tabindex","0");var n=r(t.population);return e.innerHTML="\n                            <img src=".concat(t.flags.svg," class='flag' alt='").concat(t.name.common," flag'>\n                            <ul aria-label=country details>\n                                <li class=country-name-text>").concat(t.name.common,"</li>\n                                <li>\n                                    <span class=country-specs-title>population:</span>\n                                    <span>").concat(n,"</span>\n                                </li>\n                                <li>\n                                    <span class=country-specs-title>region:</span>\n                                    <span> ").concat(t.region," </span>\n                                </li>\n                                <li>\n                                    <span class=country-specs-title>capital:</span>\n                                    <span> ").concat(t.capital,"</span>\n                                </li>\n                            </ul>\n                            "),e},h=function(t){var e=t.reduce((function(e,n){var r,o;return e.push({translatedNames:u(n.translations,n.name.common),name:n.name,area:n.area,tld:n.tld,capital:n.capital,flags:n.flags,population:n.population,region:n.region,subregion:n.subregion,currencies:n.currencies,languages:n.languages,borders:(r=n.borders,o=t,r?o.filter((function(t){return r.includes(t.cca3)})).reduce((function(t,e){return t.concat(e.name.common)}),[]):null)}),e}),[]);localStorage.setItem("data",JSON.stringify(e))};function f(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function d(){d=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function h(){}function f(){}function p(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(k([])));m&&m!==e&&n.call(m,o)&&(v=m);var g=p.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var p=d().mark((function t(e){var n,r,o,i,a=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.length>1&&void 0!==a[1]?a[1]:0,r=document.querySelector(".main"),o=n;case 3:if(!(o<e.length)){t.next=13;break}if((i=l(e[o])).setAttribute("data-id",o),r.appendChild(i),!(o%10==0&&o>0)){t.next=10;break}return t.next=10,o;case 10:o++,t.next=3;break;case 13:case"end":return t.stop()}}),t)})),v=function(t,e,n){var r=t.next().value;if(r){var o=document.querySelector(".country-card:nth-child(".concat(r,")"));e.observe(o)}e.unobserve(n)},y=function(){var t,e=(t=d().mark((function t(){var e,r,o,a,c,s,u,f,y,m,g,w;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==localStorage.getItem("data")){t.next=30;break}return r=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&v(e,r,t.target)}))})),o=document.querySelector(".main"),i(o),t.next=6,n("https://restcountries.com/v3.1/region/oceania");case 6:return(a=t.sent).forEach((function(t,e){var n=l(t);n.dataset.id=e,o.appendChild(n),26===e&&r.observe(n)})),t.next=10,n("https://restcountries.com/v3.1/region/africa");case 10:return c=t.sent,t.next=13,n("https://restcountries.com/v3.1/region/europe");case 13:return s=t.sent,t.next=16,n("https://restcountries.com/v3.1/region/asia");case 16:return u=t.sent,t.next=19,n("https://restcountries.com/v3.1/region/americas");case 19:f=t.sent,y=[],a.forEach((function(t){return y.push(t)})),c.forEach((function(t){return y.push(t)})),s.forEach((function(t){return y.push(t)})),u.forEach((function(t){return y.push(t)})),f.forEach((function(t){return y.push(t)})),h(y),e=p(JSON.parse(localStorage.getItem("data")),27),t.next=37;break;case 30:m=document.querySelector(".main"),i(m),e=p(JSON.parse(localStorage.getItem("data"))),r=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&v(e,r,t.target)}))})),g=e.next().value,w=document.querySelector(".country-card:nth-child(".concat(g)),r.observe(w);case 37:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){f(i,r,o,a,c,"next",t)}function c(t){f(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),m=function t(){if(this.parentElement.classList.contains("isfocused")){if(this.parentElement.classList.remove("isfocused"),""===this.value){var e=this.parentElement.querySelector("label"),n=this.parentElement.querySelector("svg");e.classList.remove("visually-hidden"),n.classList.remove("visually-hidden"),this.removeAttribute("style")}this.removeEventListener("focusout",t)}};function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function h(){}function f(){}function d(){}var p={};c(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==e&&n.call(y,o)&&(p=y);var m=d.prototype=h.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=d,c(m,"constructor",d),c(d,"constructor",f),f.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var w,L,b,E,x,S,k,O,_,N=g().mark((function t(e,n){var r,o,a,c,s,u,h;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.querySelector("input[type=search]"),o=r.value.toLowerCase(),a=document.querySelector(".main"),i(a),c=0,s=0;case 6:if(!(s<e.length)){t.next=15;break}if(u=e[s].translatedNames.toLowerCase(),e[s].region===n&&u.includes(o)&&((h=l(e[s])).setAttribute("data-id",s),a.appendChild(h),c++),!(c%10==0&&c>0)){t.next=12;break}return t.next=12,c;case 12:s++,t.next=6;break;case 15:case"end":return t.stop()}}),t)})),q=function(){document.querySelector(".button--filter-region").click(),document.querySelectorAll(".regions > *").forEach((function(t){t.classList.contains("active")&&t.classList.remove("active")}));var t=JSON.parse(localStorage.getItem("data")),e=N(t,this.dataset.region),n=e.next().value;if(n){var r=document.querySelector(".main > .country-card:nth-child(".concat(n)),o=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&v(e,o,t.target)}))}));o.observe(r)}this.classList.add("active")},j=function(){var t=/animate-card-\d/g,e=this.boundingClientRect.left+this.boundingClientRect.width;e>1100&&this.isIntersecting&&this.target.classList.add("animate-card-0"),e<1100&&e>850&&this.isIntersecting&&!t.test(this.target.className)&&this.target.classList.add("animate-card-1"),e<850&&e>550&&this.isIntersecting&&!t.test(this.target.className)&&this.target.classList.add("animate-card-2"),e<550&&this.isIntersecting&&!t.test(this.target.className)&&this.target.classList.add("animate-card-3")},I=window.matchMedia("min-width: 1100px");window.addEventListener("DOMContentLoaded",y),I.matches&&(w=document.querySelector(".gopher"),document.addEventListener("mousemove",(function(t){var e=w.getBoundingClientRect(),n=e.left+e.width/2,r=e.top+e.height/2,o=n-t.clientX,i=r-t.clientY,a=180*Math.atan2(i,o)/Math.PI;document.querySelectorAll(".eye").forEach((function(t){t.style.transform="rotate(".concat(-60+a,"deg)")}))}))),L=new IntersectionObserver((function(t){t.forEach((function(t){j.call(t)}))}),{root:null,threshold:.25}),b=window.matchMedia("prefers-reduced-motion"),E=1,x=new MutationObserver((function(t){t.forEach((function(t){if("childList"===t.type&&!b.matches&&t.addedNodes.length){var e=t.target.querySelector(".country-card:nth-child(".concat(E,")"));L.observe(e),E++}"childList"===t.type&&t.removedNodes.length&&E--}))})),S=document.querySelector("main"),x.observe(S,{childList:!0}),k=document.querySelector("input[type=search]"),O=document.querySelectorAll(".regions > *:not(:first-child"),_=document.querySelector(".regions > *:first-child"),O.forEach((function(t){t.addEventListener("click",q)})),k.addEventListener("input",o((function(){var t=JSON.parse(localStorage.getItem("data")),e=this.value.toLowerCase(),n=document.querySelector(".regions > .active");if(""===e)"all"===n.dataset.region?y():(document.querySelector(".button--filter-region").click(),n.click());else{var r=document.querySelector(".main");i(r),t.forEach((function(t,o){var i=t.translatedNames.toLowerCase();if(i.includes(e)&&n.dataset.region===t.region){var a=l(t);a.setAttribute("data-id",o),r.appendChild(a)}if(i.includes(e)&&"all"===n.dataset.region){var c=l(t);c.setAttribute("data-id",o),r.appendChild(c)}}))}}),500,k)),_.addEventListener("click",(function(){document.querySelector(".button--filter-region").click(),document.querySelectorAll(".regions > *").forEach((function(t){t.classList.contains("active")&&t.classList.remove("active")}));var t=new Event("input",{bubbles:!1,cancelable:!1});k.dispatchEvent(t),_.classList.add("active")})),document.querySelector(".button--filter-region").addEventListener("click",(function(){document.querySelector(".regions").classList.toggle("isclosed"),this.querySelector("svg").classList.toggle("rotate-180")})),document.querySelector(".button--toggle-theme").addEventListener("click",(function(){var t=document.querySelector("html");"dark"===t.className?(t.className="light",this.querySelector("use").setAttribute("href","#moon_icon"),this.querySelector("span > span").textContent="dark"):(t.className="dark",this.querySelector("use").setAttribute("href","#sun_icon"),this.querySelector("span > span").textContent="light")})),document.querySelector("input[type=search]").addEventListener("focusin",(function(){if(!this.parentElement.classList.contains("isfocused")){this.parentElement.classList.add("isfocused"),this.style.width="100%";var t=this.parentElement.querySelector("label"),e=this.parentElement.querySelector("svg");t.classList.contains("visually-hidden")||(t.classList.add("visually-hidden"),e.classList.add("visually-hidden")),this.addEventListener("focusout",m)}}))}();