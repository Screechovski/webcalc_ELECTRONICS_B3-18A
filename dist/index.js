!function(){"use strict";var e={735:function(e,n,t){var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),n.Z=o},692:function(e,n,t){var r=t(645),o=t.n(r),a=t(84),i=t(735),s=o()((function(e){return e[1]}));s.i(a.Z),s.i(i.Z),s.push([e.id,'.hide{position:absolute;z-index:-2;opacity:0}body{height:100vh;display:flex;align-items:center;justify-content:center;min-height:500px}.calc{width:300px;position:relative;--bg-screen-color: #d6d6d6;--bg-color: #9DA4A1}.calc__inner{position:relative;width:100%;height:100%;background-color:var(--bg-color);padding:15px;border-radius:6px;box-sizing:border-box;z-index:2;box-shadow:1px 2px 9px 2px #989E9CAB;border:4px solid #989b99}.calc__header{background-color:var(--bg-screen-color);padding:10px 0;border:3px solid var(--bg-screen-color);border-radius:5px;box-shadow:0px 0px 6px 2px #3636364d,inset 0px 0px 10px 0px #36363675}.calc__title{text-transform:uppercase;text-align:center;padding:.4em 0;font-size:20px;margin-bottom:15px;font-family:"PT Mono",monospace}.calc__title>*{font-size:1em;font-weight:500;color:#4c89a4;padding-top:.2em;padding-bottom:.2em;border-top:2px solid #4c89a4;border-bottom:2px solid #4c89a4;margin:0}.calc__screen{display:flex;align-items:stretch;box-shadow:0px 0px 6px 2px #363636ab;border-radius:3px;margin-right:10px;margin-left:10px;background-color:#1c2522;border:2px solid #1c2522;font-family:"Electronica"}.calc__screen span{width:20px;background-color:transparent;display:flex;flex-direction:column;align-items:center;height:100%;color:#00772e;border-radius:3px 0px 0px 3px;height:100%}.calc__screen span .minus,.calc__screen span .overflow{width:100%;height:33.33%;max-height:33.33%;font-size:20px;display:flex;justify-content:center;align-items:center}.calc__screen input{display:block;border-radius:0px 3px 3px 0px;max-width:calc(100% - 20px);background-color:transparent;font-size:36px;text-transform:uppercase;font-weight:500;text-align:right;width:100%;box-sizing:border-box;padding:.3em .3em .3em 0;outline:none;border:none;text-shadow:2px -2px 2px #00772eb0;color:#00772e}.calc__screen--power{background-color:#212c29;box-shadow:inset 0px 0px 10px 1px #00772eb0}.calc__body{padding:17px 2px;background-color:var(--bg-screen-color);margin-top:15px;border-radius:6px;display:flex;flex-direction:column;align-items:center;box-shadow:0px 0px 6px 2px #36363673,inset 0px 0px 10px 0px #36363687;border:3px solid #f8f8f8}.calc__buttons{display:grid;grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(4, 1fr);gap:15px}.calc__flags{display:flex;justify-content:space-evenly;margin-bottom:15px;margin-top:15px;width:100%}.calc__history{position:absolute;top:0;left:0px;width:100%;height:100%;z-index:1;will-change:left;transition:left .2s}.calc__history--active.c-history--left{left:calc(-100% + 10px)}.calc__history--active.c-history--right{left:calc(100% - 10px)}.c-history{background-color:#a5a4a0;padding:10px;border-radius:6px;box-sizing:border-box;z-index:1;box-shadow:-5px 0px 9px 0px #86897eab,inset 0px 0px 10px 0px #36363687;border:4px solid #919487}.c-history--left{height:100%}.c-history--left .c-history__arrow{transform:rotate(180deg);left:-70px}.c-history--left .c-history__arrow--active{transform:rotate(0deg)}.c-history--right{height:auto}.c-history--right .c-history__arrow{right:-70px}.c-history--right .c-history__arrow--active{transform:rotate(180deg)}.c-history__inner{display:flex;flex-direction:column;box-shadow:0px 0px 6px 2px #363636ab;border-radius:3px;background-color:#1f2221;height:inherit;position:relative}.c-history__arrow{height:40px;width:40px;position:absolute;top:calc(50% - 20px);padding:0;display:flex;align-items:center;justify-content:center;border:none;background-color:transparent;cursor:pointer}.c-history__arrow:hover svg path{fill:#828282}.c-history__arrow svg{height:50%;width:50%}.c-history__arrow svg path{fill:#9da3a0}.c-history__list{display:flex;flex-direction:column;font-family:"Coming Soon",cursive;max-height:100%;min-height:100%;overflow:auto;scrollbar-width:none;background-color:transparent}.c-history__list::-webkit-scrollbar{display:none}.c-history__item p{padding:.4em .5em;font-size:20px;line-height:1.2em;font-family:"Electronica";color:#bebebe}.calc-flag{display:flex;flex-direction:column;align-items:center;padding:9px 6px;cursor:pointer;background-color:#fff;border-radius:24px;box-shadow:inset 0px 0px 6px 1px #36363687;font-family:"GOST";width:24px}.calc-flag__top{font-size:8px;font-weight:bold;text-transform:uppercase;margin-bottom:2px;color:#4c89a4}.calc-flag__bottom{font-size:8px;font-weight:bold;text-transform:uppercase;margin-top:2px;color:#4c89a4}.slider{--size: 12px;height:calc(var(--size) * 2);width:var(--size);background-color:#303030;box-sizing:border-box;transition:padding-top .1s;padding-top:var(--size);border-radius:calc(var(--size) / 2);overflow:hidden}.slider--active{padding-top:0}.slider__item{height:var(--size);width:var(--size);background-color:#161616;border-radius:50%;position:relative}.slider__item::after{content:"";display:block;height:4px;width:4px;border-radius:50%;background-color:#ff00005e;position:absolute;bottom:-7px;left:calc(50% - 2px)}.calc-button{display:flex;flex-direction:column;justify-content:space-between;align-items:center;font-family:"Electrolize",sans-serif}.calc-button__label{font-size:9px;margin-bottom:2px}.calc-button__button{padding:0;height:30px;width:30px;border:none;font-size:13px;text-transform:uppercase;background-color:#fff;border-radius:3px;box-shadow:1px 1px 0px 1px silver,1px 1px 6px 1px #c0c0c09c;cursor:pointer;outline:none}.calc-button--red .calc-button__button{background-color:#d21732;color:#fff}.calc-button--c-red .calc-button__button{color:#d21732}.calc-button:active .calc-button__button,.calc-button--active .calc-button__button{box-shadow:0px 0 9px 0px #c0c0c080;transform:translate(2px, 2px)}.logs{background-color:rgba(0,0,0,.8);display:flex;flex-direction:column;padding:10px;font-family:"Electronica";background-color:transparent}.logs__item{font-size:15px;color:#bebebe}.logs__item:not(:last-child){margin-bottom:10px}.logs__item span{margin-left:4px}',""]),n.Z=s},84:function(e,n,t){var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),n.Z=o},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:function(e,n,t){var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var s=e[o],l=n.base?s[0]+n.base:s[0],c=t[l]||0,u="".concat(l," ").concat(c);t[l]=c+1;var d=i(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:b(p,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var c,u=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function b(e,n){var t,r,o;if(n.singleton){var a=h++;t=m||(m=l(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=l(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var l=s(e,n),c=0;c<t.length;c++){var u=i(t[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=l}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e=t(379),n=t.n(e),r=t(692);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const a=new class{constructor(e,n,t,r,a,i,s,l,c){o(this,"dotActive",!1),o(this,"operationLogs",null),o(this,"triangleArc",!1),o(this,"lastCalculatedNum",null),o(this,"calculated",!1)}clearAll(){this.screenValue="0",this._operationNumber=null,this._operationName=null,this._screenWorkValue=0,this.calculated=!1,u(!1),d(!1)}get screenWorkValue(){return this._screenWorkValue}set screenWorkValue(e){document.getElementById("workReg").innerText=e,this._screenWorkValue=e}get operationName(){return this._operationName}set operationName(e){if("swap"==e)this.screenValue=this.screenWorkValue,this._operationName=null,s("");else if("equally"!=e){if(null!=this._operationNumber&&null!=this._operationName&&"equally"!=this.operationLogs){this.lastCalculatedNum=this.operationNumber,l(this.screenValue),this.calculated=!1;let e=c(this._operationNumber,this.screenValue,this._operationName);this.operationNumber=e,this.screenWorkValue=e}else this.operationNumber=this.screenValue;this._operationPrev=this._operationName,this._operationName=e,this._screenValue=0}else if(l(this.screenValue),"equally"!=this.operationLogs){let e=this._operationNumber;this._operationNumber=this.screenValue,this.lastCalculatedNum=this.screenValue,this.calculated=!0;let n=c(e,this.screenValue,this._operationName);this.screenValue=n,this.screenWorkValue=n}else{this.lastCalculatedNum=this.screenValue,this.calculated=!0;let e=c(this.screenValue,this._operationNumber,this._operationName);this.screenValue=e,this.screenWorkValue=e}this.operationLogs=e}get operationNumber(){return this._operationNumber}set operationNumber(e){s(e),this._operationNumber=e}get memoryNumber(){return this._memoryNumber}set memoryNumber(e){document.getElementById("memory").innerText=Number(e),this._memoryNumber=Number(e)}get screenValue(){return this._screenValue}set screenValue(e){if(null!=e){const n=parseFloat(e),t=e.toString();"infinity"===t.toLowerCase()||"-infinity"===t.toLowerCase()?(this._screenValue=0,g(0),d(!0)):isNaN(n)?(this._screenValue=0,g(0),d(!1)):(this._screenValue=e,g(e))}}get radians(){return this._radians}set radians(e){x(e),this._radians=e}get power(){return this._power}set power(e){f(e),m(e),e&&this.clearAll(),d(!1),this._power=e}get F(){return this._F}set F(e){this._F=e,h(e),b(e),p(e)}}(!1,!1,0,0,null,null,null,!0,null);window.calc=a;const i=e=>{if(isNaN(e))d(!0),console.warn("message");else{let n=(e=y(e)).toString();if(-1!=n.indexOf(".")){if(d(n.length>9),n.length>9)return Number(n.substring(0,9))}else if(d(n.length>8),n.length>8)return Number(n.substring(0,8))}return e},s=e=>{document.getElementById("firstNum").innerText=e},l=e=>{document.getElementById("secondNum").innerText=e},c=(e,n,t)=>{let r;switch(t){case"multiply":r=i(Number(e)*Number(n)),_(`${e} × ${n} = ${r}`);break;case"divide":r=i(Number(e)/Number(n)),_(`${e} / ${n} = ${r}`);break;case"plus":r=i(Number(e)+Number(n)),_(`${e} + ${n} = ${r}`);break;case"minus":r=i(Number(e)-Number(n)),_(`${e} - ${n} = ${r}`);break;case"xpowy":r=i(Math.pow(Number(e),Number(n))),_(`${e}<sup>${n}</sup> = ${r}`);break;default:r=a.screenValue,console.warn("Uncorrected primitive operation type",t)}return r},u=e=>{document.getElementById("screenMinus").style.opacity=e?1:0},d=e=>{document.getElementById("screenOverflow").style.opacity=e?1:0},p=e=>{document.querySelectorAll(".calc-button").forEach((n=>{const t=n.querySelector(".calc-button__button"),r=n.querySelector(".calc-button__label");""==r.innerHTML&&(r.innerHTML=n.getAttribute("data-value-f")),"onf"!=n.getAttribute("data-operation").toLowerCase().trim()&&(e?(t.style.fontSize="9px",t.style.fontWeight="bold",t.innerHTML=n.getAttribute("data-value-f"),r.style.opacity=0):(t.style.fontSize="13px",t.style.fontWeight="normal",t.innerHTML=n.getAttribute("data-value"),r.style.opacity=1))}))},m=e=>{document.getElementById("calcPower").innerText=e?"ON":"OFF"},h=e=>{document.getElementById("calcF").innerText=e?"ON":"OFF"},b=e=>{const n=document.getElementById("calcButtonF");e?n.classList.add("calc-button--active"):n.classList.remove("calc-button--active")},g=e=>{const n=document.getElementById("calc-screen"),t=Number(e);let r=e.toString();"0"==n.value&&"0"==r||(t<0&&(r=Math.abs(t).toString()),u(t<0),r.indexOf(".")==r.length-1&&(r=Math.abs(t)+"."),-1!=r.indexOf(".")?r.length>9&&(r=r.substring(0,9)):r.length>8&&(r=r.substring(0,8)),""==r&&a.power&&(r="0"),n.value=r)},f=e=>{const n=document.querySelector(".calc__screen"),t=document.querySelector("#flag-power .slider");e?(t.classList.add("slider--active"),n.classList.add("calc__screen--power"),a.screenValue="0"):(t.classList.remove("slider--active"),n.classList.remove("calc__screen--power"),document.getElementById("calc-screen").value="")},x=e=>{const n=document.querySelector("#radian .slider");e?n.classList.remove("slider--active"):n.classList.add("slider--active")},y=e=>(e=>(e=+e,isNaN(e)?NaN:(e=e.toString().split("e"),+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]- -7:7)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]-7:-7)))))(e),v=e=>(e=Number(e))*Math.PI/180,w=e=>180*(e=Number(e))/Math.PI,_=e=>{e=(e=e.replace("Infinity","Переполнено")).replace("-Infinity","Переполнено");const n=document.querySelector(".c-history__list"),t=`<li class="c-history__item">\n        <p>${e}</p>\n    </li>`;n.insertAdjacentHTML("beforeend",t),n.scrollTop=n.scrollHeight},N=e=>{const n=e.target.closest(".calc-button");if(null!=n&&a.power){const e=n.getAttribute("data-operation").toLowerCase().trim(),t=n.getAttribute("data-operation-f").toLowerCase().trim();let r,o;if(a.F){switch(console.log(t),t){case"offf":a.F=!1;break;case"ln":r=a.screenValue,s(r),o=i(Math.log(r)),a.screenValue=o,a.calculated=!0,_(`ln(${r}) = ${a.screenValue}`),console.log(r,`ln(${r})`,o);break;case"lg":r=a.screenValue,s(r),o=i(Math.log10(r)),a.screenValue=o,a.calculated=!0,_(`lg(${r}) = ${a.screenValue}`),console.log(r,`lg(${r})`,o);break;case"sqrt":r=a.screenValue,s(r),o=i(Math.sqrt(r)),a.screenValue=o,a.calculated=!0,_(`sqrt${r} = ${a.screenValue}`),console.log(r,`sqrt(${r})`,o);break;case"epowx":r=a.screenValue,s(r),o=i(Math.pow(Math.E,r)),a.screenValue=o,a.calculated=!0,_(`e<sup>${r}</sup> = ${a.screenValue}`),console.log(r,`e${r}`,o);break;case"tenpowx":r=a.screenValue,s(r),o=i(Math.pow(10,r)),a.screenValue=o,a.calculated=!0,_(`10<sup>${r}</sup> = ${a.screenValue}`),console.log(r,`10^${r}`,o);break;case"arc":a.triangleArc=!0,console.log("arc");break;case"sin":r=a.screenValue,s(r),a.triangleArc?(o=i(a.radians||null==a.radians?Math.asin(r):w(Math.atan(r))),a.screenValue=o,a.calculated=!0,_(`arcsin(${r}) = ${a.screenValue}`),console.log(r,`arcsin(${r})`,o),a.operationLogs="arcsin",a.triangleArc=!1):(o=i(Math.sin(a.radians||null==a.radians?r:v(r))),a.screenValue=o,a.calculated=!0,_(`sin(${r}) = ${a.screenValue}`),console.log(r,`sin(${r})`,o));break;case"cos":r=a.screenValue,s(r),a.triangleArc?(o=i(a.radians||null==a.radians?Math.acos(r):w(Math.atan(r))),a.screenValue=o,a.calculated=!0,_(`arccos(${r}) = ${a.screenValue}`),console.log(r,`arccos(${r})`,o),a.triangleArc=!1,a.operationLogs="arccos"):(o=i(Math.cos(a.radians||null==a.radians?r:v(r))),a.screenValue=o,a.calculated=!0,_(`cos(${r}) = ${a.screenValue}`),console.log(r,`cos(${r})`,o));break;case"tg":r=a.screenValue,s(r),a.triangleArc?(o=i(a.radians||null==a.radians?Math.atan(r):w(Math.atan(r))),a.screenValue=o,a.calculated=!0,_(`artg(${r}) = ${a.screenValue}`),console.log(r,`artg(${r})`,o),a.triangleArc=!1,a.operationLogs="artg"):(o=i(Math.tan(a.radians||null==a.radians?r:v(r))),a.screenValue=o,a.calculated=!0,_(`tg(${r}) = ${a.screenValue}`),console.log(r,`tg(${r})`,o));break;case"pi":r=a.screenValue,o=i(Math.PI),a.screenValue=o,_(`pi = ${a.screenValue}`),console.log(r,"pi",o);break;case"show":r=a.screenValue,o=a.memoryNumber,a.screenValue=o,_(`${a.screenValue} ИП`),console.log(r,"show",o);break;case"save":r=a.screenValue,a.memoryNumber=Number(r),a.calculated=!0,_(`${a.screenValue} ЗАП`),console.log(r,"save");break;case"clearf":if("1"==document.querySelector("#screenOverflow").style.opacity)d(!1);else{r=a.screenValue,o=r;let e=r.toString();"0"!=e&&(o=-1!=e.indexOf(".")?e.length>9?e.substring(0,9):e.substring(0,e.length-1):e.length>8?r.toString().substring(0,8):e.substring(0,e.length-1)),a.screenValue=o,console.log(r,"clearf",o)}break;case"1dividex":r=Number(a.screenValue),s(r),o=i(1/r),a.screenValue=o,_(`1/ ${r} = ${a.screenValue}`),console.log(r,`1/${r}`,o);break;case"xpowy":a.operationName="xpowy";break;case"memplus":null==a.memoryNumber&&(a.memoryNumber=0),r=Number(a.screenValue),o=Number(a.memoryNumber),a.memoryNumber=i(o+r),_(`${r} + ${o} = ${a.memoryNumber}`),_(`${a.memoryNumber} ЗАП`),console.log(r,`1/${r}`,o);break;case"memminus":null==a.memoryNumber&&(a.memoryNumber=0),r=Number(a.screenValue),o=Number(a.memoryNumber),a.memoryNumber=i(o-r),_(`${o} - ${r} = ${a.memoryNumber}`),_(`${a.memoryNumber} ЗАП`),console.log(r,`1/${r}`,o);break;case"piplusxpow2":r=Number(a.screenValue),o=Number(null==a.memoryNumber?0:a.memoryNumber),a.memoryNumber=i(o+Math.pow(r,2)),_(`${o} + ${r}<sup>2</sup> = ${a.memoryNumber}`),_(`${a.memoryNumber} ЗАП`),console.log(r,"piplusxpow2",o);break;case"swapf":const e=a.memoryNumber;r=Number(a.screenValue),a.memoryNumber=r,a.screenValue=null==e?"0":e,_(`${a.screenValue} <-> ${r}`),console.log(a.screenValue,"swapF",a.memoryNumber)}"arc"!=t&&(a.F=!1)}else switch(e){case"number":let e=a.screenValue.toString(),t=n.getAttribute("data-value");a.calculated?(a.screenValue=t,a.calculated=!1):a.dotActive?(a.screenValue=e+"."+t,a.dotActive=!1):"0"==a.screenValue?a.screenValue=t:(-1==e.indexOf(".")&&e.length<8||-1!=e.indexOf(".")&&e.length<9)&&(a.screenValue=e+t);break;case"clear":a.clearAll();break;case"onf":a.F=!0;break;case"numminus":a.screenValue=(-1*parseFloat(a.screenValue)).toString();break;case"multiply":a.operationName="multiply";break;case"result":a.operationName="equally";break;case"divide":a.operationName="divide";break;case"plus":a.operationName="plus";break;case"minus":a.operationName="minus";break;case"dot":Number.isInteger(Number(a.screenValue))&&(g(Number(a.screenValue).toString()+"."),a.dotActive=!0);break;case"swap":null!=a.screenWorkValue&&(a.operationName="swap")}}};window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".calc-button"),n=document.getElementById("flag-power"),t=document.getElementById("radian"),r=document.getElementById("historyBtn"),o=document.getElementById("memoryBtn");n.addEventListener("click",(e=>{a.power=!a.power})),t.addEventListener("click",(e=>{null==a.radians?a.radians=!1:a.radians=!a.radians})),e.forEach((e=>{e.addEventListener("click",N)})),r.addEventListener("click",(e=>{document.querySelector(".calc__history.c-history.c-history--left").classList.toggle("calc__history--active"),r.classList.toggle("c-history__arrow--active")})),o.addEventListener("click",(e=>{document.querySelector(".calc__history.c-history.c-history--right").classList.toggle("calc__history--active"),o.classList.toggle("c-history__arrow--active")})),p(!1),window.calc=a}))}()}();