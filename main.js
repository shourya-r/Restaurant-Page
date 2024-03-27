(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'.header{\n    border-style: solid;\n    border-top: 0px;\n    border-left: 0px;\n    border-right: 0px;\n    margin: 0px;\n\n}\n\n.title{\n    font-family: "Satisfy", cursive;\n    font-size: 50px;\n    text-align: center;\n    margin: 15px;\n}\n\n.navBar{\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.navButton{\n    font-family: "Satisfy", cursive;\n    color:rgb(181, 94, 23);\n    font-size: 20px;\n    margin-right: 10px;\n    background-color: \t#f3e88c;\n    border: none;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    border-radius: 10px;\n}\n\n.navButton:hover{\n    background-color:#ecdd55 ;\n}\nbody{\n    background-color: \t#f3e88c;\n    margin: 0px;\n}   \n\n.chefImage{\n    width: 200px;\n    border-radius: 200px;\n}\n\n.imageDiv{\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 40px;\n}\n\n.descriptionDiv{\n    width: 650px;\n    text-align: center;\n    margin-top: 40px;\n    font-family: "Satisfy", cursive;\n    font-size: 20px;\n}\n\n.outerDiv\n{\n    display: flex;\n    justify-content: center;\n}\n\n.contentDiv{\n    margin-bottom: 50px;\n}\n\n.locationImage{\n    width: 500px;\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var u=t(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),a=t.n(r),o=t(659),i=t.n(o),c=t(56),s=t.n(c),d=t(540),u=t.n(d),l=t(113),p=t.n(l),f=t(365),m={};function v(n){const e=document.createElement("img");return e.src=n,e.classList.add("chefImage"),e}function h(n){const e=document.createElement("div");e.classList.add("outerDiv");const t=document.createElement("div");return t.textContent=n,t.classList.add("descriptionDiv"),e.appendChild(t),e}function g(){const n=document.createElement("div");return n.appendChild(function(){const n=document.createElement("div");return n.classList.add("imageDiv"),n.appendChild(v("images/chef1.jpg")),n.appendChild(v("images/chef2.jpg")),n}()),n.appendChild(h("Experience the vibrant flavors of North India at Tikka Treasure. From sizzling tandoori delights to rich, creamy curries, every dish is a journey for your taste buds. Come indulge in the essence of India, right here on your plate.")),n.appendChild(h("Helmed by renowned Indian chefs Vikas Khanna and Ranveer Brar, Tikka Treasure honors their culinary legacy with authentic flavors and expert craftsmanship, inviting diners on a journey through the rich tapestry of North Indian cuisine.")),n.classList.add("contentDiv"),n}function y(n){const e=document.createElement("div");e.classList.add("outerDiv");const t=document.createElement("div");return t.textContent=n,t.classList.add("descriptionDiv"),e.appendChild(t),e}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const x=document.querySelector("body");function C(){const n=document.createElement("header");n.classList.add("header");const e=document.createElement("h1");e.textContent="Tikka Treasure",e.classList.toggle("title");const t=function(){const n=document.createElement("nav");n.classList.add("navBar");const e=document.createElement("button");e.textContent="Home",e.classList.add("navButton"),e.addEventListener("click",(()=>{const n=document.querySelector(".main");n.textContent="",n.appendChild(g())}));const t=document.createElement("button");t.textContent="Menu",t.classList.add("navButton");const r=document.createElement("button");return r.textContent="Contact Us",r.classList.add("navButton"),r.addEventListener("click",(()=>{const n=document.querySelector(".main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");return n.appendChild(y("📞123 456 7890")),n.appendChild(y("📍Worldmark-1 (Aerocity)")),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("imageDiv"),n.appendChild(function(n){const e=document.createElement("img");return e.src="images/location.png",e.classList.add("locationImage"),e}()),n}()),n.classList.add("contentDiv"),n}())})),n.appendChild(e),n.appendChild(t),n.appendChild(r),n}();return n.appendChild(e),n.appendChild(t),n}!function(){x.appendChild(C());const n=function(){const n=document.createElement("div");return n.classList.add("main"),n}();x.appendChild(n),n.appendChild(g())}()})()})();