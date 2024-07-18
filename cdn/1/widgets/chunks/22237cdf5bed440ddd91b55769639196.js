/*! For license information please see 22237cdf5bed440ddd91b55769639196.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[95136],{95136:(e,t,i)=>{i.r(t),i.d(t,{arcgis_symbol_order:()=>d});var n=i(28384),r=i(62727),o=i(66716);i(18869),i(81068);var s,l;!function(e){e.Ascending="sort-ascending-arrow",e.Descending="sort-descending-arrow"}(s||(s={})),function(e){e.AscendingDate="sortLeastRecent",e.AscendingNumber="smallToLarge",e.DescendingDate="sortMostRecent",e.DescendingNumber="largeToSmall"}(l||(l={}));const d=class{constructor(e){(0,n.r)(this,e),this.arcgisSymbolOrderChange=(0,n.c)(this,"arcgisSymbolOrderChange",7),this.fieldPickListChanges=e=>{var t,i;e.stopPropagation();const n=null===(i=null===(t=e.detail)||void 0===t?void 0:t.selectedFields)||void 0===i?void 0:i[0];n&&n!==this.selectedField.name&&(this.selectedField=n!==this.getRendererFieldName()?this.toPickListFieldInfo(this.findField(n)):this.getRendererFieldInfo()),this.onHideFieldPickList()},this.view=void 0,this.layer=void 0,this.open=!0,this.disabled=!1,this.fieldTypes=["integer","small-integer","big-integer","single","double","long","date"],this.objectIdFieldName="oid",this.ascending=!1,this.selectedField=void 0}async componentWillLoad(){var e;const[t]=await(0,r.g)(this.hostElement);this.strings=t;const{view:i,layer:n,pickListFields:o}=this;this.props={view:i,layer:n};const s=o||this.createPickListFields();if(this.isRendererOrder())this.selectedField=this.getRendererFieldInfo();else{const{orderBy:t}=n,i=(null==t?void 0:t.length)?t[0]:t;this.ascending="ascending"===(null==i?void 0:i.mode);const r=this.orderByField=(null==i?void 0:i.field)||(null===(e=this.findOIDField(s))||void 0===e?void 0:e.name)||s[0];this.selectedField=this.toPickListFieldInfo(this.findField(r))}}async componentDidLoad(){const[e]=await(0,o.l)(["esri/intl"]);this.intl=e,this.intl.setLocale(document.documentElement.lang)}disconnectedCallback(){this.destroyFieldsPickList()}async done(){this.disableContainer(!1),this.destroyFieldsPickList()}render(){const{strings:e,open:t,disabled:i}=this;return(0,n.h)(n.H,null,(0,n.h)("calcite-block",{class:"container",heading:e.heading,collapsible:!0,disabled:i,open:t&&!i},(0,n.h)("p",{class:"information"},e.orderByTooltip),(0,n.h)("article",null,this.renderFieldSelectionButton(),this.renderSortOrderAction())),(0,n.h)("calcite-tooltip",{"reference-element":"sort-action",placement:"bottom-start",label:"",ref:e=>this.tooltipNode=e},this.getSortDirectionTooltip()))}renderFieldSelectionButton(){const{selectedField:e,strings:t}=this,i=this.createPickListFields();return(0,n.h)("calcite-label",{scale:"s"},t.orderBy,(0,n.h)("calcite-button",{key:"selected-field-button",appearance:"outline-fill",kind:"neutral",width:"full",alignment:"icon-end-space-between",scale:"s",disabled:i.length<=1,iconEnd:"chevron-down",onClick:e=>this.onShowFieldPickList(e),ref:e=>this.fieldSelectionNode=e},(null==e?void 0:e.alias)||i[0].alias))}renderSortOrderAction(){const{selectedField:e}=this,t="oid"===e.type||"renderer"===e.type;return(0,n.h)("section",null,(0,n.h)("calcite-action",{scale:"s",id:"sort-action",appearance:"transparent",alignment:"start",icon:this.getSortDirectionIcon(),onClick:e=>this.onToggleSortDirection(e),onMouseOver:()=>this.onShowTooltip(!0),onMouseOut:()=>this.onShowTooltip(!1),text:"",disabled:t}))}onChange(){const e=this.getValue(),t="renderer"===e;this.layer.orderBy=t?void 0:e,this.layer.renderer.orderByClassesEnabled=t||void 0,this.arcgisSymbolOrderChange.emit()}async onShowFieldPickList(e){e.stopPropagation(),this.disableContainer(!0),this.createFieldPickList()}async onHideFieldPickList(){this.disableContainer(!1),this.destroyFieldsPickList(),await this.fieldSelectionNode.setFocus(),this.onChange()}onToggleSortDirection(e){e.stopPropagation(),this.ascending=!this.ascending,this.onChange()}onShowTooltip(e){this.tooltipNode.open=e}createFieldPickList(){const{layer:e,pickListFields:t,view:i,strings:n}=this,r=t||this.createPickListFields(),o=this.fieldSelectionNode,s=this.createPopoverProps(o),l=this.selectedField||(this.isRendererOrder()?this.getRendererFieldInfo():r[0]),d=this.fieldPickList=document.createElement("arcgis-field-pick-list");return d.heading=n.orderBy,d.multiple=!1,d.showFieldInfo=!1,d.showFieldName=!0,d.mapView=i,d.layer=e,d.fields=r,d.selectedFields=[l.name],d.popoverProps=s,d.addEventListener("arcgisFieldPickListDismissed",this.fieldPickListChanges),document.body.appendChild(d),d}destroyFieldsPickList(){this.fieldPickList&&(document.body.removeChild(this.fieldPickList),this.fieldPickList=null)}createPopoverProps(e){return{placement:"bottom-end",offsetDistance:5,offsetSkidding:0,pointerDisabled:!0,popoverWidth:this.getPopoverWidth(),refElement:e}}createPickListFields(){let{pickListFields:e}=this;if(!e){const{layer:t,fieldTypes:i}=this,{fields:n}=t;e=this.pickListFields=n.filter((e=>i.indexOf(null==e?void 0:e.type)>-1)).map((e=>this.toPickListFieldInfo(e)));const r=this.toPickListFieldInfo(this.getOIDField());if(e.unshift(r),this.hasTypesOrPredominanceRenderer()){const t=this.getRendererFieldInfo();e.unshift(t)}}return e}toPickListFieldInfo(e){return{name:e.name,alias:this.getFieldAlias(e),type:e.type}}getPopoverWidth(){var e;return(null===(e=this.hostElement)||void 0===e?void 0:e.getBoundingClientRect().width)+30||280}getFieldAlias(e){const{strings:t}=this;if("oid"===e.type)return t.defaultDataOrder;{const t=this.findFieldInfoFromPopup(e);return(null==t?void 0:t.label)||e.alias||e.name}}findFieldInfoFromPopup(e){const{popupTemplate:t}=this.layer;return((null==t?void 0:t.fieldInfos)||[]).find((t=>t.fieldName===e.name))}getOIDField(){const{layer:e}=this,{fields:t}=e;return t.find((t=>t.name===e.objectIdField||"oid"===t.type))}findOIDField(e){const{layer:t}=this;return e.find((e=>e.name===t.objectIdField||"oid"===e.type))}findField(e){const{layer:t}=this,{fields:i}=t;return i.find((t=>t.name===e))||i[0]}getSortDirectionIcon(){return this.ascending?s.Ascending:s.Descending}getSortDirectionTooltip(){const{ascending:e,selectedField:t,strings:i}=this;let n="sortLeastRecent";return n="date"===(null==t?void 0:t.type)?e?l.AscendingDate:l.DescendingDate:e?l.AscendingNumber:l.DescendingNumber,i[n]}hasTypesOrPredominanceRenderer(){var e,t;const{layer:i}=this,{renderer:n}=i;return"unique-value"===(null==n?void 0:n.type)&&(!(null===(e=null==n?void 0:n.authoringInfo)||void 0===e?void 0:e.type)||"predominance"===(null===(t=null==n?void 0:n.authoringInfo)||void 0===t?void 0:t.type))}isRendererOrder(){const{layer:e}=this,t=e.renderer;return this.hasTypesOrPredominanceRenderer()&&!0===(null==t?void 0:t.orderByClassesEnabled)}getRendererFieldName(){const{layer:e}=this,t=e.renderer;return this.hasTypesOrPredominanceRenderer()&&(t.field||t.valueExpressionTitle)||null}getRendererFieldInfo(){return{name:this.getRendererFieldName(),alias:this.strings.styleOrder,type:"renderer"}}disableContainer(e){const t=this.hostElement.closest("calcite-flow-item");t&&(t.disabled=e)}getValue(){const{selectedField:e}=this;return"oid"===e.type?null:"renderer"===e.type?"renderer":[{order:this.ascending?"ascending":"descending",field:this.selectedField.name}]}get hostElement(){return(0,n.d)(this)}};d.style="article{display:flex;align-items:center;flex-direction:row;grid-gap:0.5rem;gap:0.5rem}article calcite-action{margin-top:0.7em}article calcite-label{width:100%}.infoPopover{width:340px;font-size:12px}.information{margin:0 0 1em 0}"},81068:(e,t,i)=>{i.d(t,{C:()=>l,a:()=>c,f:()=>d,g:()=>s,l:()=>o});var n=i(66716),r=i(18869);const o=new Map([["ar","ar"],["bg","bg"],["bs","bs"],["ca","ca"],["cs","cs"],["da","da"],["de","de"],["el","el"],["en","en"],["es","es"],["et","et"],["fi","fi"],["fr","fr"],["he","he"],["hr","hr"],["hu","hu"],["id","id"],["it","it"],["ja","ja"],["ko","ko"],["lt","lt"],["lv","lv"],["nb","nb"],["nl","nl"],["pl","pl"],["pt-br","pt-BR"],["pt-pt","pt-PT"],["ro","ro"],["ru","ru"],["sk","sk"],["sl","sl"],["sr","sr"],["sv","sv"],["th","th"],["tr","tr"],["uk","uk"],["vi","vi"],["zh-cn","zh-CN"],["zh-hk","zh-HK"],["zh-tw","zh-TW"]]);function s(e){return function(e,t,i){const n=(0,r.c)(e,"[dir]");return n?n.getAttribute("dir"):"ltr"}(e)}const l={rtl:"arcgis--rtl"};async function d(e,t){const{api:i,type:r,places:o}=t||{};if(4===i){const[t]=await(0,n.l)(["esri/intl"]),i=t.convertNumberFormatToIntlOptions({places:o,style:r,digitSeparator:!0});return t.formatNumber(e,Object.assign(Object.assign({},i),{style:r}))}const[s]=await(0,n.l)(["dojo/number"]);return s.format(e,{type:r,places:o,pattern:null==t?void 0:t.pattern})}const a={};function c(e){const t=document.documentElement.lang;return a[t]||(a[t]=new Intl.DateTimeFormat(document.documentElement.lang,{year:"numeric",month:"short",day:"numeric"})),a[t].format(e)}},66716:(e,t,i)=>{i.d(t,{a:()=>n,c:()=>o,e:()=>s,g:()=>r,l:()=>l});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}var s=o((function(e,t){!function(e){var t={Promise:"undefined"!=typeof window?window.Promise:void 0},i="4.24",n="next";function r(e){if(e.toLowerCase()===n)return n;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function o(e){return void 0===e&&(e=i),"https://js.arcgis.com/".concat(e,"/")}function s(e){return!e||r(e)?function(e){void 0===e&&(e=i);var t=o(e),s=r(e);if(s!==n&&3===s.major){var l=s.minor<=10?"js/":"";return"".concat(t).concat(l,"esri/css/esri.css")}return"".concat(t,"esri/themes/light/main.css")}(e):e}function l(e,t){var i=s(e),n=function(e){return document.querySelector('link[href*="'.concat(e,'"]'))}(i);return n||function(e,t){if(t){var i=document.querySelector(t);i.parentNode.insertBefore(e,i)}else document.head.appendChild(e)}(n=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}(i),t),n}var d={};function a(e,t,i){var n;i&&(n=function(e,t){var i=function(n){t(n.error||new Error("There was an error attempting to load ".concat(e.src))),e.removeEventListener("error",i,!1)};return e.addEventListener("error",i,!1),i}(e,i));var r=function(){t(e),e.removeEventListener("load",r,!1),n&&e.removeEventListener("error",n,!1)};e.addEventListener("load",r,!1)}function c(){return document.querySelector("script[data-esri-loader]")}function u(){var e=window.require;return e&&e.on}function h(e){void 0===e&&(e={});var i={};[d,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}));var n=i.version,r=i.url||o(n);return new t.Promise((function(e,t){var o=c();if(o){var s=o.getAttribute("src");s!==r?t(new Error("The ArcGIS API for JavaScript is already loaded (".concat(s,")."))):u()?e(o):a(o,e,t)}else if(u())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var d=i.css;d&&l(!0===d?n:d,i.insertCssBefore),a(o=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}(r),(function(){o.setAttribute("data-esri-loader","loaded"),e(o)}),t),document.body.appendChild(o)}}))}function f(e){return new t.Promise((function(t,i){var n=window.require.on("error",i);window.require(e,(function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];n.remove(),t(e)}))}))}e.utils=t,e.loadModules=function(e,t){if(void 0===t&&(t={}),u())return f(e);var i=c(),n=i&&i.getAttribute("src");return!t.url&&n&&(t.url=n),h(t).then((function(){return f(e)}))},e.getScript=c,e.isLoaded=u,e.loadScript=h,e.setDefaultOptions=function(e){void 0===e&&(e={}),d=e},e.loadCss=l,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const l=async(e,t)=>(await s.loadModules(e,t)).map((e=>e.__esModule&&e.default?e.default:e))},62727:(e,t,i)=>{i.d(t,{a:()=>s,g:()=>a});var n=i(18869),r=i(81068),o=i(28384);function s(e){var t,i,o;const s=null!==(t=(0,n.c)(e,"[lang]"))&&void 0!==t?t:null===(o=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===o?void 0:o.documentElement,l=((null==s?void 0:s.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return r.l.has(l)?r.l.get(l):r.l.has(l.slice(0,2))?r.l.get(l.slice(0,2)):"en"}const l={};function d(e,t){const i=`${e}${t}`;return l[i]||(l[i]=function(e,t){return new Promise(((i,n)=>{fetch((0,o.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?i(e.json()):n()}),(()=>n()))}))}(e,t)),l[i]}async function a(e,t){const i=t||e.tagName.toLowerCase(),o=s(e),l=function(e){var t,i,o;const s=null!==(t=(0,n.c)(e,"[lang]"))&&void 0!==t?t:null===(o=null===(i=e.shadowRoot)||void 0===i?void 0:i.ownerDocument)||void 0===o?void 0:o.documentElement,l=((null==s?void 0:s.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return r.l.has(l)?r.l.get(l):r.l.has(l.slice(0,2))?l:"en"}(e);let a;try{a=await d(i,o)}catch(e){console.warn(`no locale for ${i} (${o}) loading default locale en.`),a=await d(i,"en")}return[a,o,l]}}}]);