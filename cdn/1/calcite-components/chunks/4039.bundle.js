/*! For license information please see 4039.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4039,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},3819:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteProgress:()=>a,defineCustomElement:()=>n});var r=i(2964);const a=r.P,n=r.d},2964:(e,t,i)=>{"use strict";i.d(t,{P:()=>n,d:()=>s});var r=i(7210),a=i(9145);const n=(0,r.GH)(class extends r.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="determinate",this.value=0,this.label=void 0,this.text=void 0,this.reversed=!1}render(){const e="determinate"===this.type?{width:100*this.value+"%"}:{},t=(0,a.b)(this.el);return(0,r.h)("div",{"aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},(0,r.h)("div",{class:"track"},(0,r.h)("div",{class:{bar:!0,indeterminate:"indeterminate"===this.type,[a.C.rtl]:"rtl"===t,reversed:this.reversed},style:e})),this.text?(0,r.h)("div",{class:"text"},this.text):null)}get el(){return this}static get style(){return":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-app-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:var(--calcite-app-z-index);background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-progress",{type:[513],value:[2],label:[1],text:[1],reversed:[516]}]);function s(){"undefined"!=typeof customElements&&["calcite-progress"].forEach((e=>{"calcite-progress"===e&&(customElements.get(e)||customElements.define(e,n))}))}s()}}]);