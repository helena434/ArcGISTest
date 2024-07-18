/*! For license information please see 9700783cb8e2cd70e4699a784a88535f.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[21147],{26426:(e,t,n)=>{n.d(t,{a:()=>l,b:()=>f,c:()=>i,d:()=>r,e:()=>o,f:()=>c,g:()=>m,i:()=>a,m:()=>s,t:()=>u,u:()=>d});const r=(e,t)=>{let n,r="idle";const i=(...i)=>new Promise((o=>{switch(r){case"flushed":r="idle",n?(clearTimeout(n),o(e(...i))):o(null);break;case"invoked":clearTimeout(n),r="idle",o(e(...i));break;case"cancelled":clearTimeout(n),r="idle",o(null);break;default:n&&clearTimeout(n),r="pending",n=setTimeout((()=>(r="idle",o(e(...i)))),t)}}));return i.flush=function(...e){return r="flushed",i(...e)},i.invoke=function(...e){return r="invoked",i(...e)},i.cancel=function(...e){return r="cancelled",i(...e)},i.getStatus=function(){return r},i},i=(e,t)=>{let n;return(...r)=>new Promise((i=>{n||(n=setTimeout((()=>{clearTimeout(n),n=void 0,i(e(...r))}),t))}))};function o(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){return null!=e}async function s(e,t){return await Promise.all([e,u(t)]),e}function u(e){return new Promise((t=>setTimeout(t,e)))}const l=(e,t)=>Object.fromEntries((e||[]).map((e=>{const{key:n,data:r}=t(e);return[n,r]}))),c=(e,t)=>e.length===t.length&&e.reduce(((e,n)=>e&&t.indexOf(n)>-1),!0);function d(e,t){const n=[],r={};return e.forEach((e=>{const i=t(e);null==r[i]&&(r[i]=e,n.push(e))})),n}function f(e){const t={boolean:{},number:{},string:{}},n=[];return e.filter((e=>{let r=typeof e;return r in t?!t[r].hasOwnProperty(e)&&(t[r][e]=!0):!(n.indexOf(e)>=0)&&n.push(e)}))}const m=(e,t)=>[...Array(Math.ceil(e.length/t))].map(((n,r)=>e.slice(t*r,t+t*r)))},21147:(e,t,n)=>{n.d(t,{A:()=>i,N:()=>r,a:()=>f,b:()=>v,c:()=>m,d:()=>p,e:()=>w,f:()=>h,g:()=>b,h:()=>g,i:()=>s,j:()=>d,k:()=>u,l:()=>l,m:()=>y});var r,i,o=n(66716),a=n(26426);function s(e){return"AbortError"===(null==e?void 0:e.name)}function u(e){return["small-integer","big-integer","integer","single","double","oid"].includes(e)}function l(e){const t=new Date(e);return`${t.getFullYear()}-${c((t.getMonth()+1).toString(),2,"0")}-${c(t.getDate().toString(),2,"0")} ${c(t.getHours().toString(),2,"0")}:${c(t.getMinutes().toString(),2,"0")}:${c(t.getSeconds().toString(),2,"0")}`}function c(e,t,n){for(n=n||" ";e.length<t;)e=n+e;return e}function d(e){const t=e.find((e=>"best"===e.name.toLowerCase()));if(t)return t;const n=e.find((e=>"acquisitiondate"===e.name.toLowerCase()));if(n)return n;const r=e.find((e=>"date"===e.name.toLowerCase()));return r||e.find((e=>"double"===e.type||"integer"===e.type))}async function f(e,t){let n;try{n=await e.queryRasterCount(t)}catch(e){console.log(e)}return Number.isInteger(n)?n:null}async function m(e,t){t.outFields=["*"],t.returnGeometry=!0;const n=await e.queryRasters(t);return Array.isArray(null==n?void 0:n.features)?n:null}async function y(e,t){var n;const r=e.createQuery();let i;r.where=`${e.objectIdField} = ${t}`,r.returnGeometry=!0;try{i=await e.queryRasters(r)}catch(e){console.log(e)}return(null===(n=null==i?void 0:i.features)||void 0===n?void 0:n[0].geometry)||null}function p(e,t){const n=e.fields,r=e.objectIdField;let i=n.find((e=>"name"===e.name.toLowerCase()));return i||(i=n.find((e=>e.name===r))),i&&i.name!==t.name?[i,t]:[t]}function g(e){const t=["small-integer","big-integer","integer","single","double","date","oid","string"];return Array.isArray(e)?e.filter((e=>t.includes(e.type))):[]}function v(e,t,n,r,o,a){const s=e.createQuery();if((null==n?void 0:n.length)>0){let e="";if("date"===t.type){if(1===n.length){const r=new Date(n[0]),i=r.setSeconds(r.getSeconds()+1);e=e=`${t.name} BETWEEN timestamp '${l(n[0])}' AND timestamp '${l(i)}'`}2===n.length&&(e=`${t.name} BETWEEN timestamp '${l(n[0])}' AND timestamp '${l(n[1])}'`)}else 1===n.length&&(e="string"==typeof n[0]?`${t.name}='${n[0]}'`:`${t.name}=${n[0]}`),2===n.length&&(e="string"==typeof n[0]?`${t.name} BETWEEN '${n[0]}' AND '${n[1]}'`:`${t.name} BETWEEN ${n[0]} AND ${n[1]}`);s.where=e}const u="(Category <> 2)";if(o)s.where=s.where.replace(u,"");else{const e=u+(s.where?" AND "+s.where:"");s.where=e}return s.geometry=r===i.DisplayExtent?a:null,s.spatialRelationship=r===i.DisplayExtent?"intersects":null,s}async function h(e,t,n,r,o,s=!1){var u,l;if(!t)return[];const c=e.createQuery();c.where="1=1";const d=n===i.DisplayExtent||n===i.Visible;c.geometry=d?r:null,c.spatialRelationship=d?"intersects":null,c.outFields=[t],c.orderByFields=[`${t} ASC`],c.returnExceededLimitFeatures=!0,c.returnGeometry=!1;const f=[];if(s){let n=!0;for(;n;){const r=await e.queryRasters(c,{signal:o});if(n=null==r?void 0:r.exceededTransferLimit,(null===(u=r.features)||void 0===u?void 0:u.length)>0){const e=(0,a.b)(r.features.map((e=>e.attributes[t])));f.push(...e)}}return f}const m=await e.queryRasters(c,{signal:o});return(null===(l=null==m?void 0:m.features)||void 0===l?void 0:l.length)>0?(0,a.b)(m.features.map((e=>e.attributes[t]))):[]}async function w(e,t,n,r,o){var a;if(!t)return[];const s=e.createQuery();s.where="1=1";const u=n===i.DisplayExtent||n===i.Visible;s.geometry=u?r:null,s.spatialRelationship=u?"intersects":null,s.returnGeometry=!1,s.outStatistics=[{statisticType:"min",onStatisticField:t,outStatisticFieldName:"MIN_FIELD_VALUE"},{statisticType:"max",onStatisticField:t,outStatisticFieldName:"MAX_FIELD_VALUE"}];const l=await e.queryRasters(s,{signal:o});if((null===(a=null==l?void 0:l.features)||void 0===a?void 0:a.length)>0){const[e]=l.features;return[e.attributes.MIN_FIELD_VALUE,e.attributes.MAX_FIELD_VALUE]}return[]}async function b(e,t,n){var r;let i=[];const a=await async function(e,t){const[n,r,i]=await(0,o.l)(["esri/geometry/Polygon","esri/geometry/Point","esri/rest/support/ImageIdentifyParameters"]),{extent:a,width:s,height:u}=t,l=new n(a.spatialReference);l.addRing([[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]);const c=new r((a.xmax-a.xmin)/s,(a.ymax-a.ymin)/u,a.spatialReference),d=new i;d.geometry=l,d.returnGeometry=!1,d.pixelSize=c;const f=e.mosaicRule.clone();return e.definitionExpression&&(f.where=e.definitionExpression),d.mosaicRule=f,d}(e,t);if(e.visible){const t=await e.identify(a);if(!(null===(r=null==t?void 0:t.catalogItems)||void 0===r?void 0:r.features)||!(null==t?void 0:t.catalogItemVisibilities))return null;const o=e.objectIdField;for(let e=0;e<t.catalogItems.features.length;e++)t.catalogItemVisibilities[e]>0&&i.push(t.catalogItems.features[e].attributes[o]);if(0===i.length)return null;const s=`${e.objectIdField} in (${i.map((e=>`${e}`)).join(",")})`;n.where=`${n.where} AND ${s}`,n.outFields=["*"],n.returnGeometry=!0;const u=await e.queryRasters(n);return Array.isArray(null==u?void 0:u.features)?u:null}}!function(e){e.Inspect="inspect",e.Select="select"}(r||(r={})),function(e){e.Visible="visible",e.DisplayExtent="displayExtent",e.All="all"}(i||(i={}))},66716:(e,t,n)=>{n.d(t,{a:()=>r,c:()=>o,e:()=>a,g:()=>i,l:()=>s});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var a=o((function(e,t){!function(e){var t={Promise:"undefined"!=typeof window?window.Promise:void 0},n="4.24",r="next";function i(e){if(e.toLowerCase()===r)return r;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function o(e){return void 0===e&&(e=n),"https://js.arcgis.com/".concat(e,"/")}function a(e){return!e||i(e)?function(e){void 0===e&&(e=n);var t=o(e),a=i(e);if(a!==r&&3===a.major){var s=a.minor<=10?"js/":"";return"".concat(t).concat(s,"esri/css/esri.css")}return"".concat(t,"esri/themes/light/main.css")}(e):e}function s(e,t){var n=a(e),r=function(e){return document.querySelector('link[href*="'.concat(e,'"]'))}(n);return r||function(e,t){if(t){var n=document.querySelector(t);n.parentNode.insertBefore(e,n)}else document.head.appendChild(e)}(r=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}(n),t),r}var u={};function l(e,t,n){var r;n&&(r=function(e,t){var n=function(r){t(r.error||new Error("There was an error attempting to load ".concat(e.src))),e.removeEventListener("error",n,!1)};return e.addEventListener("error",n,!1),n}(e,n));var i=function(){t(e),e.removeEventListener("load",i,!1),r&&e.removeEventListener("error",r,!1)};e.addEventListener("load",i,!1)}function c(){return document.querySelector("script[data-esri-loader]")}function d(){var e=window.require;return e&&e.on}function f(e){void 0===e&&(e={});var n={};[u,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}));var r=n.version,i=n.url||o(r);return new t.Promise((function(e,t){var o=c();if(o){var a=o.getAttribute("src");a!==i?t(new Error("The ArcGIS API for JavaScript is already loaded (".concat(a,")."))):d()?e(o):l(o,e,t)}else if(d())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var u=n.css;u&&s(!0===u?r:u,n.insertCssBefore),l(o=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}(i),(function(){o.setAttribute("data-esri-loader","loaded"),e(o)}),t),document.body.appendChild(o)}}))}function m(e){return new t.Promise((function(t,n){var r=window.require.on("error",n);window.require(e,(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.remove(),t(e)}))}))}e.utils=t,e.loadModules=function(e,t){if(void 0===t&&(t={}),d())return m(e);var n=c(),r=n&&n.getAttribute("src");return!t.url&&r&&(t.url=r),f(t).then((function(){return m(e)}))},e.getScript=c,e.isLoaded=d,e.loadScript=f,e.setDefaultOptions=function(e){void 0===e&&(e={}),u=e},e.loadCss=s,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const s=async(e,t)=>(await a.loadModules(e,t)).map((e=>e.__esModule&&e.default?e.default:e))}}]);