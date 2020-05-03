!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n(1),n(3),n(10);var o=document.querySelector("emails-input");document.getElementById("add-email").onclick=function(){o.dispatchEvent(new Event("add"))},document.getElementById("emails-count").onclick=function(){o.dispatchEvent(new Event("count"))}},function(t,e,n){},,function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(4),r=n(5),a=s(n(6)),l=s(n(7));function s(t){return t&&t.__esModule?t:{default:t}}var c=13,u=188,d=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.attachTemplate(a.default,l.default),t.bindPropertiesToAttributes(["items"]),t.previosKeyCodeValid=!0,t._items=[],t.addShadowEventListener(".emails-input__item-cross","click",t.handleClickCrossEvent),t.addShadowEventListener(".emails-input__add-more-input","keyup",t.handleAddItemEvent),t.addShadowEventListener(".emails-input__add-more-input","focusout",t.handleAddItemEvent),t.addLightEventListener("emails-input","count",function(){alert("Valid emails count: "+t.getValidEmailsCount())}),t.addLightEventListener("emails-input","add",function(){t.addNewEmail()}),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i.Component),o(e,null,[{key:"getValidClassname",value:function(t){return r.EMAIL_RE.test(t)?"emails-input__item--valid":"emails-input__item--invalid"}}]),o(e,[{key:"attributeChangedCallback",value:function(t,e,n){var o=this;"items"===t&&(this._items=[],n&&n.split(",").forEach(function(t){o._items.push({id:o.generateId(),label:t})}),this.renderEmailsList())}},{key:"connectedCallback",value:function(){this.renderEmailsList()}},{key:"disconnectedCallback",value:function(){this.removeShadowEventListeners(),this.removeLightEventListeners()}},{key:"getValidEmailsCount",value:function(){return this._items.filter(function(t){return r.EMAIL_RE.test(t.label)}).length}},{key:"generateId",value:function(){var t=Math.floor(999*Math.random())+1;return this._items.map(function(t){return t.id}).includes(t)&&this.generateId(),t}},{key:"addNewEmail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.generateEmail)();t&&(this._items.push({id:this.generateId(),label:t}),this.setAttribute("items",this._items.map(function(t){return t.label}).toString()),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:t,text:"New email "+t+" was added."}})))}},{key:"handleAddItemEvent",value:function(t){t.preventDefault();var e=this.shadowRoot.getElementById("add-more-input").value;t.keyCode===c&&(this.previosKeyCodeValid=!0,this.addNewEmail(e)),t.keyCode===u&&","===t.key&&(this.previosKeyCodeValid=!0,e=e.substring(0,e.length-1),this.addNewEmail(e)),"focusout"===t.type&&e&&!this.previosKeyCodeValid&&this.addNewEmail(e),this.previosKeyCodeValid=!1}},{key:"handleClickCrossEvent",value:function(t,e){var n=e.parentElement.getAttribute("data-value");this.removeEmail(n)}},{key:"removeEmail",value:function(t){var e=this._items.find(function(e){return e.id===Number(t)}).label;this._items=this._items.filter(function(e){return e.id!==Number(t)}),this.setAttribute("items",this._items.map(function(t){return t.label}).toString()),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{email:e,text:"Email "+e+" was removed."}}))}},{key:"renderEmptyList",value:function(){for(;this.emailsList.hasChildNodes();)this.emailsList.removeChild(this.emailsList.lastChild)}},{key:"renderEmailsList",value:function(){var t=this;this.renderEmptyList(),this._items.forEach(function(n){var o=document.createElement("div");o.className="emails-input__item-text",o.innerText=n.label;var i=document.createElement("span");i.innerHTML="<span>&times;</span>",i.className="emails-input__item-cross";var r=document.createElement("div");r.setAttribute("data-value",n.id),r.classList.add("emails-input__item",e.getValidClassname(n.label)),r.appendChild(o),r.appendChild(i),t.emailsList.appendChild(r)});var n=document.createElement("input");n.id="add-more-input",n.placeholder="add more people…",n.className="emails-input__add-more-input",this.emailsList.appendChild(n),this.shadowRoot.getElementById("add-more-input").focus()}},{key:"emailsList",get:function(){return this.shadowRoot.getElementById("items")}},{key:"items",set:function(t){this._items=t},get:function(){return this._items}}],[{key:"observedAttributes",get:function(){return["items"]}}]),e}();window.customElements.define("emails-input",d)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.Component=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.eventListeners=[],t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),o(e,[{key:"attachTemplate",value:function(t,e){e=e?"<style>"+e+"</style>":"",this.attachShadow({mode:"open"}).innerHTML=e+t}},{key:"_addEventListener",value:function(t,e,n,o){var i=this,r=o?this.shadowRoot:this,a={type:e,handler:function(e){var o=e.target.closest(t);o&&r.contains(o)&&(n=n.bind(i))(e,o)},isShadowRoot:o};this.eventListeners.push(a),r.addEventListener(a.type,a.handler)}},{key:"_removeEventListeners",value:function(t){var e=t?this.shadowRoot:this;this.eventListeners.filter(function(e){return e.isShadowRoot===t}).map(function(t){return e.removeEventListener(t.type,t.handler)})}},{key:"addLightEventListener",value:function(t,e,n){this._addEventListener(t,e,n,!1)}},{key:"removeLightEventListeners",value:function(){this._removeEventListeners(!1)}},{key:"addShadowEventListener",value:function(t,e,n){this._addEventListener(t,e,n,!0)}},{key:"removeShadowEventListeners",value:function(){this._removeEventListeners(!0)}},{key:"bindPropertiesToAttributes",value:function(t){var n=this;t.map(function(t){var o=e.convertCamelCaseToKebab(t);Object.defineProperty(n,t,{get:function(){var t=n.getAttribute(o);return t===String(Number(t))?+t:t},set:function(t){return t?n.setAttribute(o,t):n.removeAttribute(o)}})})}}],[{key:"convertCamelCaseToKebab",value:function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}}]),e}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.generateEmail=function(){return"abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())]+Math.random().toString(36).substring(1,4)+"@miro.com"};e.EMAIL_RE=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},function(t,e){t.exports="<div id=items class=emails-input__container></div>"},function(t,e,n){var o=n(8);t.exports="string"==typeof o?o:o.toString()},function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".emails-input__container{background:#fff;border:1px solid #c3c2cf;box-sizing:border-box;border-radius:4px;height:96px;flex-shrink:1;display:flex;align-content:flex-start;flex-wrap:wrap;padding:8px 7px;overflow:scroll}.emails-input__add-more-input{font-style:normal;font-weight:400;font-size:14px;color:#050038;line-height:24px;margin-right:8px;height:24px;margin-bottom:4px;border:0 none;width:124px}.emails-input__add-more-input:focus{outline:0 none}.emails-input__add-more-input::placeholder{color:#c3c2cf}.emails-input__item{font-style:normal;font-weight:400;font-size:14px;line-height:24px;color:#050038;height:24px;max-width:220px;overflow:hidden;padding-right:16px;position:relative;box-sizing:border-box;margin-right:8px;margin-bottom:4px}.emails-input__item--valid{padding-left:10px;background:rgba(102,153,255,.2);border-radius:100px}.emails-input__item--invalid{border-bottom:1px dashed #d92929}.emails-input__item-text{overflow:hidden}.emails-input__item-cross{color:#050038;cursor:pointer;transition:.3s;position:absolute;right:4px;top:0}.emails-input__item-cross:hover{color:#05004a}",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(r).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";(function(){var t=window.Document.prototype.createElement,e=window.Document.prototype.createElementNS,n=window.Document.prototype.importNode,o=window.Document.prototype.prepend,i=window.Document.prototype.append,r=window.DocumentFragment.prototype.prepend,a=window.DocumentFragment.prototype.append,l=window.Node.prototype.cloneNode,s=window.Node.prototype.appendChild,c=window.Node.prototype.insertBefore,u=window.Node.prototype.removeChild,d=window.Node.prototype.replaceChild,f=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),p=window.Element.prototype.attachShadow,h=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),m=window.Element.prototype.getAttribute,v=window.Element.prototype.setAttribute,y=window.Element.prototype.removeAttribute,b=window.Element.prototype.getAttributeNS,g=window.Element.prototype.setAttributeNS,E=window.Element.prototype.removeAttributeNS,_=window.Element.prototype.insertAdjacentElement,w=window.Element.prototype.insertAdjacentHTML,C=window.Element.prototype.prepend,k=window.Element.prototype.append,L=window.Element.prototype.before,N=window.Element.prototype.after,x=window.Element.prototype.replaceWith,S=window.Element.prototype.remove,T=window.HTMLElement,O=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),j=window.HTMLElement.prototype.insertAdjacentElement,A=window.HTMLElement.prototype.insertAdjacentHTML,M=new Set;function D(t){var e=M.has(t);return t=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),!e&&t}"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(t){return M.add(t)});var P=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function F(t){var e=t.isConnected;if(void 0!==e)return e;if(P(t))return!0;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function H(t){var e=t.children;if(e)return Array.prototype.slice.call(e);for(e=[],t=t.firstChild;t;t=t.nextSibling)t.nodeType===Node.ELEMENT_NODE&&e.push(t);return e}function R(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function I(){var t=!(null===at||void 0===at||!at.noDocumentConstructionObserver),e=!(null===at||void 0===at||!at.shadyDomFastWalk);this.h=[],this.a=[],this.f=!1,this.shadyDomFastWalk=e,this.C=!t}function z(t,e,n,o){var i=window.ShadyDom;if(t.shadyDomFastWalk&&i&&i.inUse){if(e.nodeType===Node.ELEMENT_NODE&&n(e),e.querySelectorAll)for(t=i.nativeMethods.querySelectorAll.call(e,"*"),e=0;e<t.length;e++)n(t[e])}else!function t(e,n,o){for(var i=e;i;){if(i.nodeType===Node.ELEMENT_NODE){var r=i;n(r);var a=r.localName;if("link"===a&&"import"===r.getAttribute("rel")){if(i=r.import,void 0===o&&(o=new Set),i instanceof Node&&!o.has(i))for(o.add(i),i=i.firstChild;i;i=i.nextSibling)t(i,n,o);i=R(e,r);continue}if("template"===a){i=R(e,r);continue}if(r=r.__CE_shadowRoot)for(r=r.firstChild;r;r=r.nextSibling)t(r,n,o)}i=i.firstChild?i.firstChild:R(e,i)}}(e,n,o)}function V(t,e){t.f&&z(t,e,function(e){return B(t,e)})}function B(t,e){if(t.f&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.h.length;n++)t.h[n](e);for(n=0;n<t.a.length;n++)t.a[n](e)}}function U(t,e){var n=[];for(z(t,e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state?t.connectedCallback(o):q(t,o)}}function W(t,e){var n=[];for(z(t,e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state&&t.disconnectedCallback(o)}}function K(t,e,n){var o=(n=void 0===n?{}:n).D,i=n.upgrade||function(e){return q(t,e)},r=[];for(z(t,e,function(e){if(t.f&&B(t,e),"link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_registry=document.__CE_registry),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var r=new Set;o&&(o.forEach(function(t){return r.add(t)}),r.delete(n)),K(t,n,{D:r,upgrade:i})}})}else r.push(e)},o),e=0;e<r.length;e++)i(r[e])}function q(t,e){try{var n=e.ownerDocument,o=n.__CE_registry,i=o&&(n.defaultView||n.__CE_isImportDocument)?nt(o,e.localName):void 0;if(i&&void 0===e.__CE_state){i.constructionStack.push(e);try{try{if(new i.constructorFunction!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{i.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=i,i.attributeChangedCallback&&e.hasAttributes()){var r=i.observedAttributes;for(i=0;i<r.length;i++){var a=r[i],l=e.getAttribute(a);null!==l&&t.attributeChangedCallback(e,a,null,l,null)}}F(e)&&t.connectedCallback(e)}}catch(t){Z(t)}}function $(n,o,i,r){var a=o.__CE_registry;if(a&&(null===r||"http://www.w3.org/1999/xhtml"===r)&&(a=nt(a,i)))try{var l=new a.constructorFunction;if(void 0===l.__CE_state||void 0===l.__CE_definition)throw Error("Failed to construct '"+i+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==l.namespaceURI)throw Error("Failed to construct '"+i+"': The constructed element's namespace must be the HTML namespace.");if(l.hasAttributes())throw Error("Failed to construct '"+i+"': The constructed element must not have any attributes.");if(null!==l.firstChild)throw Error("Failed to construct '"+i+"': The constructed element must not have any children.");if(null!==l.parentNode)throw Error("Failed to construct '"+i+"': The constructed element must not have a parent node.");if(l.ownerDocument!==o)throw Error("Failed to construct '"+i+"': The constructed element's owner document is incorrect.");if(l.localName!==i)throw Error("Failed to construct '"+i+"': The constructed element's local name is incorrect.");return l}catch(a){return Z(a),o=null===r?t.call(o,i):e.call(o,r,i),Object.setPrototypeOf(o,HTMLUnknownElement.prototype),o.__CE_state=2,o.__CE_definition=void 0,B(n,o),o}return B(n,o=null===r?t.call(o,i):e.call(o,r,i)),o}function Z(t){var e=t.message,n=t.sourceURL||t.fileName||"",o=t.line||t.lineNumber||0,i=t.column||t.columnNumber||0,r=void 0;void 0===ErrorEvent.prototype.initErrorEvent?r=new ErrorEvent("error",{cancelable:!0,message:e,filename:n,lineno:o,colno:i,error:t}):((r=document.createEvent("ErrorEvent")).initErrorEvent("error",!1,!0,e,n,o),r.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),void 0===r.error&&Object.defineProperty(r,"error",{configurable:!0,enumerable:!0,get:function(){return t}}),window.dispatchEvent(r),r.defaultPrevented||console.error(t)}function J(){var t=this;this.a=void 0,this.w=new Promise(function(e){t.g=e})}function X(t){var e=document;this.g=void 0,this.b=t,this.a=e,K(this.b,this.a),"loading"===this.a.readyState&&(this.g=new MutationObserver(this.A.bind(this)),this.g.observe(this.a,{childList:!0,subtree:!0}))}function G(t){t.g&&t.g.disconnect()}function Q(t){this.j=new Map,this.l=new Map,this.u=new Map,this.o=!1,this.s=new Map,this.i=function(t){return t()},this.c=!1,this.m=[],this.b=t,this.v=t.C?new X(t):void 0}function Y(t,e){if(!D(e))throw new SyntaxError("The element name '"+e+"' is not valid.");if(nt(t,e))throw Error("A custom element with name '"+e+"' has already been defined.");if(t.o)throw Error("A custom element is already being defined.")}function tt(t,e,n){var o;t.o=!0;try{var i=n.prototype;if(!(i instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var r=function(t){var e=i[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},a=r("connectedCallback"),l=r("disconnectedCallback"),s=r("adoptedCallback"),c=(o=r("attributeChangedCallback"))&&n.observedAttributes||[]}catch(t){throw t}finally{t.o=!1}return n={localName:e,constructorFunction:n,connectedCallback:a,disconnectedCallback:l,adoptedCallback:s,attributeChangedCallback:o,observedAttributes:c,constructionStack:[]},t.l.set(e,n),t.u.set(n.constructorFunction,n),n}function et(t){if(!1!==t.c){t.c=!1;for(var e=[],n=t.m,o=new Map,i=0;i<n.length;i++)o.set(n[i],[]);for(K(t.b,document,{upgrade:function(n){if(void 0===n.__CE_state){var i=n.localName,r=o.get(i);r?r.push(n):t.l.has(i)&&e.push(n)}}}),i=0;i<e.length;i++)q(t.b,e[i]);for(i=0;i<n.length;i++){for(var r=n[i],a=o.get(r),l=0;l<a.length;l++)q(t.b,a[l]);(r=t.s.get(r))&&r.resolve(void 0)}n.length=0}}function nt(t,e){var n=t.l.get(e);if(n)return n;if(n=t.j.get(e)){t.j.delete(e);try{return tt(t,e,n())}catch(t){Z(t)}}}function ot(t,e,n){function o(e){return function(n){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];i=[];for(var r=[],a=0;a<o.length;a++){var l=o[a];if(l instanceof Element&&F(l)&&r.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)i.push(l);else i.push(l)}for(e.apply(this,o),o=0;o<r.length;o++)W(t,r[o]);if(F(this))for(o=0;o<i.length;o++)(r=i[o])instanceof Element&&U(t,r)}}void 0!==n.prepend&&(e.prepend=o(n.prepend)),void 0!==n.append&&(e.append=o(n.append))}function it(t){function n(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var o=this,i=void 0;if(F(this)&&(i=[],z(t,this,function(t){t!==o&&i.push(t)})),n.set.call(this,e),i)for(var r=0;r<i.length;r++){var a=i[r];1===a.__CE_state&&t.disconnectedCallback(a)}return this.ownerDocument.__CE_registry?K(t,this):V(t,this),e}})}function o(e,n){e.insertAdjacentElement=function(e,o){var i=F(o);return e=n.call(this,e,o),i&&W(t,o),F(e)&&U(t,o),e}}function i(e,n){function o(e,n){for(var o=[];e!==n;e=e.nextSibling)o.push(e);for(n=0;n<o.length;n++)K(t,o[n])}e.insertAdjacentHTML=function(t,e){if("beforebegin"===(t=t.toLowerCase())){var i=this.previousSibling;n.call(this,t,e),o(i||this.parentNode.firstChild,this)}else if("afterbegin"===t)i=this.firstChild,n.call(this,t,e),o(this.firstChild,i);else if("beforeend"===t)i=this.lastChild,n.call(this,t,e),o(i||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");i=this.nextSibling,n.call(this,t,e),o(this.nextSibling,i)}}}p&&(Element.prototype.attachShadow=function(e){if(e=p.call(this,e),t.f&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.h.length;n++)t.h[n](e)}return this.__CE_shadowRoot=e}),h&&h.get?n(Element.prototype,h):O&&O.get?n(HTMLElement.prototype,O):function(t,e){t.f=!0,t.a.push(e)}(t,function(t){n(t,{enumerable:!0,configurable:!0,get:function(){return l.call(this,!0).innerHTML},set:function(t){var n="template"===this.localName,o=n?this.content:this,i=e.call(document,this.namespaceURI,this.localName);for(i.innerHTML=t;0<o.childNodes.length;)u.call(o,o.childNodes[0]);for(t=n?i.content:i;0<t.childNodes.length;)s.call(o,t.childNodes[0])}})}),Element.prototype.setAttribute=function(e,n){if(1!==this.__CE_state)return v.call(this,e,n);var o=m.call(this,e);v.call(this,e,n),n=m.call(this,e),t.attributeChangedCallback(this,e,o,n,null)},Element.prototype.setAttributeNS=function(e,n,o){if(1!==this.__CE_state)return g.call(this,e,n,o);var i=b.call(this,e,n);g.call(this,e,n,o),o=b.call(this,e,n),t.attributeChangedCallback(this,n,i,o,e)},Element.prototype.removeAttribute=function(e){if(1!==this.__CE_state)return y.call(this,e);var n=m.call(this,e);y.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)},Element.prototype.removeAttributeNS=function(e,n){if(1!==this.__CE_state)return E.call(this,e,n);var o=b.call(this,e,n);E.call(this,e,n);var i=b.call(this,e,n);o!==i&&t.attributeChangedCallback(this,n,o,i,e)},j?o(HTMLElement.prototype,j):_&&o(Element.prototype,_),A?i(HTMLElement.prototype,A):w&&i(Element.prototype,w),ot(t,Element.prototype,{prepend:C,append:k}),function(t){function e(e){return function(n){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];i=[];for(var r=[],a=0;a<o.length;a++){var l=o[a];if(l instanceof Element&&F(l)&&r.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)i.push(l);else i.push(l)}for(e.apply(this,o),o=0;o<r.length;o++)W(t,r[o]);if(F(this))for(o=0;o<i.length;o++)(r=i[o])instanceof Element&&U(t,r)}}var n=Element.prototype;void 0!==L&&(n.before=e(L)),void 0!==N&&(n.after=e(N)),void 0!==x&&(n.replaceWith=function(e){for(var n=[],o=0;o<arguments.length;++o)n[o]=arguments[o];o=[];for(var i=[],r=0;r<n.length;r++){var a=n[r];if(a instanceof Element&&F(a)&&i.push(a),a instanceof DocumentFragment)for(a=a.firstChild;a;a=a.nextSibling)o.push(a);else o.push(a)}for(r=F(this),x.apply(this,n),n=0;n<i.length;n++)W(t,i[n]);if(r)for(W(t,this),n=0;n<o.length;n++)(i=o[n])instanceof Element&&U(t,i)}),void 0!==S&&(n.remove=function(){var e=F(this);S.call(this),e&&W(t,this)})}(t)}I.prototype.connectedCallback=function(t){var e=t.__CE_definition;if(e.connectedCallback)try{e.connectedCallback.call(t)}catch(t){Z(t)}},I.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;if(e.disconnectedCallback)try{e.disconnectedCallback.call(t)}catch(t){Z(t)}},I.prototype.attributeChangedCallback=function(t,e,n,o,i){var r=t.__CE_definition;if(r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(e))try{r.attributeChangedCallback.call(t,e,n,o,i)}catch(t){Z(t)}},J.prototype.resolve=function(t){if(this.a)throw Error("Already resolved.");this.a=t,this.g(t)},X.prototype.A=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||G(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,o=0;o<n.length;o++)K(this.b,n[o])},Q.prototype.B=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");Y(this,t),this.j.set(t,e),this.m.push(t),this.c||(this.c=!0,this.i(function(){return et(n)}))},Q.prototype.define=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");Y(this,t),tt(this,t,e),this.m.push(t),this.c||(this.c=!0,this.i(function(){return et(n)}))},Q.prototype.upgrade=function(t){K(this.b,t)},Q.prototype.get=function(t){if(t=nt(this,t))return t.constructorFunction},Q.prototype.whenDefined=function(t){if(!D(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.s.get(t);if(e)return e.w;e=new J,this.s.set(t,e);var n=this.l.has(t)||this.j.has(t);return t=-1===this.m.indexOf(t),n&&t&&e.resolve(void 0),e.w},Q.prototype.polyfillWrapFlushCallback=function(t){this.v&&G(this.v);var e=this.i;this.i=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=Q,Q.prototype.define=Q.prototype.define,Q.prototype.upgrade=Q.prototype.upgrade,Q.prototype.get=Q.prototype.get,Q.prototype.whenDefined=Q.prototype.whenDefined,Q.prototype.polyfillDefineLazy=Q.prototype.B,Q.prototype.polyfillWrapFlushCallback=Q.prototype.polyfillWrapFlushCallback;var rt={};var at=window.customElements;function lt(){var e=new I;!function(e){function n(){var n=this.constructor,o=document.__CE_registry.u.get(n);if(!o)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var i=o.constructionStack;if(0===i.length)return i=t.call(document,o.localName),Object.setPrototypeOf(i,n.prototype),i.__CE_state=1,i.__CE_definition=o,B(e,i),i;var r=i.length-1,a=i[r];if(a===rt)throw Error("Failed to construct '"+o.localName+"': This element was already constructed.");return i[r]=rt,Object.setPrototypeOf(a,n.prototype),B(e,a),a}n.prototype=T.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:n}),window.HTMLElement=n}(e),function(t){Document.prototype.createElement=function(e){return $(t,this,e,null)},Document.prototype.importNode=function(e,o){return e=n.call(this,e,!!o),this.__CE_registry?K(t,e):V(t,e),e},Document.prototype.createElementNS=function(e,n){return $(t,this,n,e)},ot(t,Document.prototype,{prepend:o,append:i})}(e),ot(e,DocumentFragment.prototype,{prepend:r,append:a}),function(t){function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,e);else{var o=void 0;if(this.firstChild){var i=this.childNodes,r=i.length;if(0<r&&F(this)){o=Array(r);for(var a=0;a<r;a++)o[a]=i[a]}}if(n.set.call(this,e),o)for(e=0;e<o.length;e++)W(t,o[e])}}})}Node.prototype.insertBefore=function(e,n){if(e instanceof DocumentFragment){var o=H(e);if(e=c.call(this,e,n),F(this))for(n=0;n<o.length;n++)U(t,o[n]);return e}return o=e instanceof Element&&F(e),n=c.call(this,e,n),o&&W(t,e),F(this)&&U(t,e),n},Node.prototype.appendChild=function(e){if(e instanceof DocumentFragment){var n=H(e);if(e=s.call(this,e),F(this))for(var o=0;o<n.length;o++)U(t,n[o]);return e}return n=e instanceof Element&&F(e),o=s.call(this,e),n&&W(t,e),F(this)&&U(t,e),o},Node.prototype.cloneNode=function(e){return e=l.call(this,!!e),this.ownerDocument.__CE_registry?K(t,e):V(t,e),e},Node.prototype.removeChild=function(e){var n=e instanceof Element&&F(e),o=u.call(this,e);return n&&W(t,e),o},Node.prototype.replaceChild=function(e,n){if(e instanceof DocumentFragment){var o=H(e);if(e=d.call(this,e,n),F(this))for(W(t,n),n=0;n<o.length;n++)U(t,o[n]);return e}o=e instanceof Element&&F(e);var i=d.call(this,e,n),r=F(this);return r&&W(t,n),o&&W(t,e),r&&U(t,e),i},f&&f.get?e(Node.prototype,f):function(t,e){t.f=!0,t.h.push(e)}(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=this.firstChild;e;e=e.nextSibling)e.nodeType!==Node.COMMENT_NODE&&t.push(e.textContent);return t.join("")},set:function(t){for(;this.firstChild;)u.call(this,this.firstChild);null!=t&&""!==t&&s.call(this,document.createTextNode(t))}})})}(e),it(e),e=new Q(e),document.__CE_registry=e,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:e})}at&&!at.forcePolyfill&&"function"==typeof at.define&&"function"==typeof at.get||lt(),window.__CE_installPolyfill=lt}).call(self)}]);