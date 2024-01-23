import{W as Um,a as qm,b as Gm,l as Gn,I as Jm,K as tt,c as Zt,e as Yl}from"./monaco-WDgoRb0s.js";import"./index-5EY8RJoo.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function qa(e,n){const t=new Set(e.split(","));return n?r=>t.has(r.toLowerCase()):r=>t.has(r)}const Ge={},Qt=[],Tn=()=>{},Zm=()=>!1,oo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ga=e=>e.startsWith("onUpdate:"),tn=Object.assign,Ja=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ym=Object.prototype.hasOwnProperty,$e=(e,n)=>Ym.call(e,n),Pe=Array.isArray,er=e=>si(e)==="[object Map]",qd=e=>si(e)==="[object Set]",Xm=e=>si(e)==="[object RegExp]",xe=e=>typeof e=="function",Ye=e=>typeof e=="string",gr=e=>typeof e=="symbol",Ue=e=>e!==null&&typeof e=="object",Gd=e=>(Ue(e)||xe(e))&&xe(e.then)&&xe(e.catch),Jd=Object.prototype.toString,si=e=>Jd.call(e),Qm=e=>si(e).slice(8,-1),Zd=e=>si(e)==="[object Object]",Za=e=>Ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pi=qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),so=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},ev=/-(\w)/g,Kn=so(e=>e.replace(ev,(n,t)=>t?t.toUpperCase():"")),nv=/\B([A-Z])/g,hr=so(e=>e.replace(nv,"-$1").toLowerCase()),ao=so(e=>e.charAt(0).toUpperCase()+e.slice(1)),$o=so(e=>e?`on${ao(e)}`:""),bt=(e,n)=>!Object.is(e,n),Dr=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ji=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},tv=e=>{const n=parseFloat(e);return isNaN(n)?e:n},rv=e=>{const n=Ye(e)?Number(e):NaN;return isNaN(n)?e:n};let Xl;const Yd=()=>Xl||(Xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function we(e){if(Pe(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=Ye(r)?av(r):we(r);if(i)for(const s in i)n[s]=i[s]}return n}else if(Ye(e)||Ue(e))return e}const iv=/;(?![^(]*\))/g,ov=/:([^]+)/,sv=/\/\*[^]*?\*\//g;function av(e){const n={};return e.replace(sv,"").split(iv).forEach(t=>{if(t){const r=t.split(ov);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function z(e){let n="";if(Ye(e))n=e;else if(Pe(e))for(let t=0;t<e.length;t++){const r=z(e[t]);r&&(n+=r+" ")}else if(Ue(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function lv(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Ye(n)&&(e.class=z(n)),t&&(e.style=we(t)),e}const cv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uv=qa(cv);function Xd(e){return!!e||e===""}const ze=e=>Ye(e)?e:e==null?"":Pe(e)||Ue(e)&&(e.toString===Jd||!xe(e.toString))?JSON.stringify(e,Qd,2):String(e),Qd=(e,n)=>n&&n.__v_isRef?Qd(e,n.value):er(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i],s)=>(t[Ho(r,s)+" =>"]=i,t),{})}:qd(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Ho(t))}:gr(n)?Ho(n):Ue(n)&&!Pe(n)&&!Zd(n)?String(n):n,Ho=(e,n="")=>{var t;return gr(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let gn;class ef{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gn,!n&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=gn;try{return gn=this,n()}finally{gn=t}}}on(){gn=this}off(){gn=this.parent}stop(n){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nf(e){return new ef(e)}function dv(e,n=gn){n&&n.active&&n.effects.push(e)}function Ya(){return gn}function tf(e){gn&&gn.cleanups.push(e)}let Nt;class Xa{constructor(n,t,r,i){this.fn=n,this.trigger=t,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,dv(this,i)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Kt();for(const n of this.deps)if(n.computed&&(fv(n.computed),this._dirtyLevel>=2))break;Wt(),this._queryings--}return this._dirtyLevel>=2}set dirty(n){this._dirtyLevel=n?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let n=mt,t=Nt;try{return mt=!0,Nt=this,this._runnings++,Ql(this),this.fn()}finally{ec(this),this._runnings--,Nt=t,mt=n}}stop(){var n;this.active&&(Ql(this),ec(this),(n=this.onStop)==null||n.call(this),this.active=!1)}}function fv(e){return e.value}function Ql(e){e._trackId++,e._depsLength=0}function ec(e){if(e.deps&&e.deps.length>e._depsLength){for(let n=e._depsLength;n<e.deps.length;n++)rf(e.deps[n],e);e.deps.length=e._depsLength}}function rf(e,n){const t=e.get(n);t!==void 0&&n._trackId!==t&&(e.delete(n),e.size===0&&e.cleanup())}let mt=!0,da=0;const of=[];function Kt(){of.push(mt),mt=!1}function Wt(){const e=of.pop();mt=e===void 0?!0:e}function Qa(){da++}function el(){for(da--;!da&&fa.length;)fa.shift()()}function sf(e,n,t){if(n.get(e)!==e._trackId){n.set(e,e._trackId);const r=e.deps[e._depsLength];r!==n?(r&&rf(r,e),e.deps[e._depsLength++]=n):e._depsLength++}}const fa=[];function af(e,n,t){Qa();for(const r of e.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<n&&(!r._runnings||n!==2)){const i=r._dirtyLevel;r._dirtyLevel=n,i===0&&(!r._queryings||n!==2)&&(r.trigger(),r.scheduler&&fa.push(r.scheduler))}el()}const lf=(e,n)=>{const t=new Map;return t.cleanup=e,t.computed=n,t},Fi=new WeakMap,Dt=Symbol(""),pa=Symbol("");function mn(e,n,t){if(mt&&Nt){let r=Fi.get(e);r||Fi.set(e,r=new Map);let i=r.get(t);i||r.set(t,i=lf(()=>r.delete(t))),sf(Nt,i)}}function Jn(e,n,t,r,i,s){const o=Fi.get(e);if(!o)return;let a=[];if(n==="clear")a=[...o.values()];else if(t==="length"&&Pe(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!gr(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),n){case"add":Pe(e)?Za(t)&&a.push(o.get("length")):(a.push(o.get(Dt)),er(e)&&a.push(o.get(pa)));break;case"delete":Pe(e)||(a.push(o.get(Dt)),er(e)&&a.push(o.get(pa)));break;case"set":er(e)&&a.push(o.get(Dt));break}Qa();for(const l of a)l&&af(l,3);el()}function pv(e,n){var t;return(t=Fi.get(e))==null?void 0:t.get(n)}const mv=qa("__proto__,__v_isRef,__isVue"),cf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gr)),nc=vv();function vv(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=Be(this);for(let s=0,o=this.length;s<o;s++)mn(r,"get",s+"");const i=r[n](...t);return i===-1||i===!1?r[n](...t.map(Be)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Kt(),Qa();const r=Be(this)[n].apply(this,t);return el(),Wt(),r}}),e}function gv(e){const n=Be(this);return mn(n,"has",e),n.hasOwnProperty(e)}class uf{constructor(n=!1,t=!1){this._isReadonly=n,this._shallow=t}get(n,t,r){const i=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return s;if(t==="__v_raw")return r===(i?s?Rv:mf:s?pf:ff).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const o=Pe(n);if(!i){if(o&&$e(nc,t))return Reflect.get(nc,t,r);if(t==="hasOwnProperty")return gv}const a=Reflect.get(n,t,r);return(gr(t)?cf.has(t):mv(t))||(i||mn(n,"get",t),s)?a:Qe(a)?o&&Za(t)?a:a.value:Ue(a)?i?rl(a):We(a):a}}class df extends uf{constructor(n=!1){super(!1,n)}set(n,t,r,i){let s=n[t];if(!this._shallow){const l=ar(s);if(!Ki(r)&&!ar(r)&&(s=Be(s),r=Be(r)),!Pe(n)&&Qe(s)&&!Qe(r))return l?!1:(s.value=r,!0)}const o=Pe(n)&&Za(t)?Number(t)<n.length:$e(n,t),a=Reflect.set(n,t,r,i);return n===Be(i)&&(o?bt(r,s)&&Jn(n,"set",t,r):Jn(n,"add",t,r)),a}deleteProperty(n,t){const r=$e(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&r&&Jn(n,"delete",t,void 0),i}has(n,t){const r=Reflect.has(n,t);return(!gr(t)||!cf.has(t))&&mn(n,"has",t),r}ownKeys(n){return mn(n,"iterate",Pe(n)?"length":Dt),Reflect.ownKeys(n)}}class hv extends uf{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const bv=new df,yv=new hv,Sv=new df(!0),nl=e=>e,lo=e=>Reflect.getPrototypeOf(e);function ui(e,n,t=!1,r=!1){e=e.__v_raw;const i=Be(e),s=Be(n);t||(bt(n,s)&&mn(i,"get",n),mn(i,"get",s));const{has:o}=lo(i),a=r?nl:t?ol:Gr;if(o.call(i,n))return a(e.get(n));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(n)}function di(e,n=!1){const t=this.__v_raw,r=Be(t),i=Be(e);return n||(bt(e,i)&&mn(r,"has",e),mn(r,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function fi(e,n=!1){return e=e.__v_raw,!n&&mn(Be(e),"iterate",Dt),Reflect.get(e,"size",e)}function tc(e){e=Be(e);const n=Be(this);return lo(n).has.call(n,e)||(n.add(e),Jn(n,"add",e,e)),this}function rc(e,n){n=Be(n);const t=Be(this),{has:r,get:i}=lo(t);let s=r.call(t,e);s||(e=Be(e),s=r.call(t,e));const o=i.call(t,e);return t.set(e,n),s?bt(n,o)&&Jn(t,"set",e,n):Jn(t,"add",e,n),this}function ic(e){const n=Be(this),{has:t,get:r}=lo(n);let i=t.call(n,e);i||(e=Be(e),i=t.call(n,e)),r&&r.call(n,e);const s=n.delete(e);return i&&Jn(n,"delete",e,void 0),s}function oc(){const e=Be(this),n=e.size!==0,t=e.clear();return n&&Jn(e,"clear",void 0,void 0),t}function pi(e,n){return function(r,i){const s=this,o=s.__v_raw,a=Be(o),l=n?nl:e?ol:Gr;return!e&&mn(a,"iterate",Dt),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function mi(e,n,t){return function(...r){const i=this.__v_raw,s=Be(i),o=er(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=t?nl:n?ol:Gr;return!n&&mn(s,"iterate",l?pa:Dt),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function rt(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Ev(){const e={get(s){return ui(this,s)},get size(){return fi(this)},has:di,add:tc,set:rc,delete:ic,clear:oc,forEach:pi(!1,!1)},n={get(s){return ui(this,s,!1,!0)},get size(){return fi(this)},has:di,add:tc,set:rc,delete:ic,clear:oc,forEach:pi(!1,!0)},t={get(s){return ui(this,s,!0)},get size(){return fi(this,!0)},has(s){return di.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:pi(!0,!1)},r={get(s){return ui(this,s,!0,!0)},get size(){return fi(this,!0)},has(s){return di.call(this,s,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=mi(s,!1,!1),t[s]=mi(s,!0,!1),n[s]=mi(s,!1,!0),r[s]=mi(s,!0,!0)}),[e,t,n,r]}const[_v,kv,Tv,Ov]=Ev();function tl(e,n){const t=n?e?Ov:Tv:e?kv:_v;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get($e(t,i)&&i in r?t:r,i,s)}const Pv={get:tl(!1,!1)},Cv={get:tl(!1,!0)},Lv={get:tl(!0,!1)},ff=new WeakMap,pf=new WeakMap,mf=new WeakMap,Rv=new WeakMap;function wv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xv(e){return e.__v_skip||!Object.isExtensible(e)?0:wv(Qm(e))}function We(e){return ar(e)?e:il(e,!1,bv,Pv,ff)}function vf(e){return il(e,!1,Sv,Cv,pf)}function rl(e){return il(e,!0,yv,Lv,mf)}function il(e,n,t,r,i){if(!Ue(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=xv(e);if(o===0)return e;const a=new Proxy(e,o===2?r:t);return i.set(e,a),a}function vt(e){return ar(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function ar(e){return!!(e&&e.__v_isReadonly)}function Ki(e){return!!(e&&e.__v_isShallow)}function gf(e){return vt(e)||ar(e)}function Be(e){const n=e&&e.__v_raw;return n?Be(n):e}function co(e){return ji(e,"__v_skip",!0),e}const Gr=e=>Ue(e)?We(e):e,ol=e=>Ue(e)?rl(e):e;class hf{constructor(n,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Xa(()=>n(this._value),()=>ma(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const n=Be(this);return bf(n),(!n._cacheable||n.effect.dirty)&&bt(n._value,n._value=n.effect.run())&&ma(n,2),n._value}set value(n){this._setter(n)}get _dirty(){return this.effect.dirty}set _dirty(n){this.effect.dirty=n}}function Iv(e,n,t=!1){let r,i;const s=xe(e);return s?(r=e,i=Tn):(r=e.get,i=e.set),new hf(r,i,s||!i,t)}function bf(e){mt&&Nt&&(e=Be(e),sf(Nt,e.dep||(e.dep=lf(()=>e.dep=void 0,e instanceof hf?e:void 0))))}function ma(e,n=3,t){e=Be(e);const r=e.dep;r&&af(r,n)}function Qe(e){return!!(e&&e.__v_isRef===!0)}function j(e){return yf(e,!1)}function Av(e){return yf(e,!0)}function yf(e,n){return Qe(e)?e:new Bv(e,n)}class Bv{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:Be(n),this._value=t?n:Gr(n)}get value(){return bf(this),this._value}set value(n){const t=this.__v_isShallow||Ki(n)||ar(n);n=t?n:Be(n),bt(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Gr(n),ma(this,3))}}function ke(e){return Qe(e)?e.value:e}const Nv={get:(e,n,t)=>ke(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return Qe(i)&&!Qe(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function Sf(e){return vt(e)?e:new Proxy(e,Nv)}function De(e){const n=Pe(e)?new Array(e.length):{};for(const t in e)n[t]=Ef(e,t);return n}class Dv{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return pv(Be(this._object),this._key)}}class $v{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Wi(e,n,t){return Qe(e)?e:xe(e)?new $v(e):Ue(e)&&arguments.length>1?Ef(e,n,t):j(e)}function Ef(e,n,t){const r=e[n];return Qe(r)?r:new Dv(e,n,t)}function gt(e,n,t,r){let i;try{i=r?e(...r):e()}catch(s){uo(s,n,t)}return i}function On(e,n,t,r){if(xe(e)){const s=gt(e,n,t,r);return s&&Gd(s)&&s.catch(o=>{uo(o,n,t)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(On(e[s],n,t,r));return i}function uo(e,n,t,r=!0){const i=n?n.vnode:null;if(n){let s=n.parent;const o=n.proxy,a=`https://vuejs.org/errors/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}s=s.parent}const l=n.appContext.config.errorHandler;if(l){gt(l,null,10,[e,o,a]);return}}}let Jr=!1,va=!1;const cn=[];let Mn=0;const nr=[];let qn=null,At=0;const _f=Promise.resolve();let sl=null;function Fe(e){const n=sl||_f;return e?n.then(this?e.bind(this):e):n}function Hv(e){let n=Mn+1,t=cn.length;for(;n<t;){const r=n+t>>>1,i=cn[r],s=Zr(i);s<e||s===e&&i.pre?n=r+1:t=r}return n}function al(e){(!cn.length||!cn.includes(e,Jr&&e.allowRecurse?Mn+1:Mn))&&(e.id==null?cn.push(e):cn.splice(Hv(e.id),0,e),kf())}function kf(){!Jr&&!va&&(va=!0,sl=_f.then(Of))}function Mv(e){const n=cn.indexOf(e);n>Mn&&cn.splice(n,1)}function jv(e){Pe(e)?nr.push(...e):(!qn||!qn.includes(e,e.allowRecurse?At+1:At))&&nr.push(e),kf()}function sc(e,n,t=Jr?Mn+1:0){for(;t<cn.length;t++){const r=cn[t];if(r&&r.pre){if(e&&r.id!==e.uid)continue;cn.splice(t,1),t--,r()}}}function Tf(e){if(nr.length){const n=[...new Set(nr)];if(nr.length=0,qn){qn.push(...n);return}for(qn=n,qn.sort((t,r)=>Zr(t)-Zr(r)),At=0;At<qn.length;At++)qn[At]();qn=null,At=0}}const Zr=e=>e.id==null?1/0:e.id,Fv=(e,n)=>{const t=Zr(e)-Zr(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Of(e){va=!1,Jr=!0,cn.sort(Fv);try{for(Mn=0;Mn<cn.length;Mn++){const n=cn[Mn];n&&n.active!==!1&&gt(n,null,14)}}finally{Mn=0,cn.length=0,Tf(),Jr=!1,sl=null,(cn.length||nr.length)&&Of()}}function Kv(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Ge;let i=t;const s=n.startsWith("update:"),o=s&&n.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=r[u]||Ge;f&&(i=t.map(m=>Ye(m)?m.trim():m)),d&&(i=t.map(tv))}let a,l=r[a=$o(n)]||r[a=$o(Kn(n))];!l&&s&&(l=r[a=$o(hr(n))]),l&&On(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,On(c,e,6,i)}}function Pf(e,n,t=!1){const r=n.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!xe(e)){const l=c=>{const u=Pf(c,n,!0);u&&(a=!0,tn(o,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(Ue(e)&&r.set(e,null),null):(Pe(s)?s.forEach(l=>o[l]=null):tn(o,s),Ue(e)&&r.set(e,o),o)}function fo(e,n){return!e||!oo(n)?!1:(n=n.slice(2).replace(/Once$/,""),$e(e,n[0].toLowerCase()+n.slice(1))||$e(e,hr(n))||$e(e,n))}let an=null,po=null;function zi(e){const n=an;return an=e,po=e&&e.type.__scopeId||null,n}function Wv(e){po=e}function zv(){po=null}function K(e,n=an,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&Sc(-1);const s=zi(n);let o;try{o=e(...i)}finally{zi(s),r._d&&Sc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mo(e){const{type:n,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:S,inheritAttrs:E}=e;let P,k;const T=zi(e);try{if(t.shapeFlag&4){const v=i||r,R=v;P=Hn(u.call(R,v,d,s,m,f,S)),k=l}else{const v=n;P=Hn(v.length>1?v(s,{attrs:l,slots:a,emit:c}):v(s,null)),k=n.props?l:Vv(l)}}catch(v){Mr.length=0,uo(v,e,1),P=O(Pn)}let _=P;if(k&&E!==!1){const v=Object.keys(k),{shapeFlag:R}=_;v.length&&R&7&&(o&&v.some(Ga)&&(k=Uv(k,o)),_=bn(_,k))}return t.dirs&&(_=bn(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),P=_,zi(T),P}const Vv=e=>{let n;for(const t in e)(t==="class"||t==="style"||oo(t))&&((n||(n={}))[t]=e[t]);return n},Uv=(e,n)=>{const t={};for(const r in e)(!Ga(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function qv(e,n,t){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=n,c=s.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?ac(r,o,c):!!o;if(l&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==r[f]&&!fo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ac(r,o,c):!0:!!o;return!1}function ac(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(n[s]!==e[s]&&!fo(t,s))return!0}return!1}function Gv({vnode:e,parent:n},t){if(t)for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const ll="components",Jv="directives";function ae(e,n){return cl(ll,e,!0,n)||e}const Cf=Symbol.for("v-ndc");function Zn(e){return Ye(e)?cl(ll,e,!1)||e:e||Cf}function Zv(e){return cl(Jv,e)}function cl(e,n,t=!0,r=!1){const i=an||sn;if(i){const s=i.type;if(e===ll){const a=ka(s,!1);if(a&&(a===n||a===Kn(n)||a===ao(Kn(n))))return s}const o=lc(i[e]||s[e],n)||lc(i.appContext[e],n);return!o&&r?s:o}}function lc(e,n){return e&&(e[n]||e[Kn(n)]||e[ao(Kn(n))])}const Lf=e=>e.__isSuspense;function Yv(e,n){n&&n.pendingBranch?Pe(e)?n.effects.push(...e):n.effects.push(e):jv(e)}const Xv=Symbol.for("v-scx"),Qv=()=>Me(Xv);function eg(e,n){return ul(e,null,n)}const vi={};function Oe(e,n,t){return ul(e,n,t)}function ul(e,n,{immediate:t,deep:r,flush:i,once:s,onTrack:o,onTrigger:a}=Ge){if(n&&s){const b=n;n=(...C)=>{b(...C),R()}}const l=sn,c=b=>r===!0?b:Bt(b,r===!1?1:void 0);let u,d=!1,f=!1;if(Qe(e)?(u=()=>e.value,d=Ki(e)):vt(e)?(u=()=>c(e),d=!0):Pe(e)?(f=!0,d=e.some(b=>vt(b)||Ki(b)),u=()=>e.map(b=>{if(Qe(b))return b.value;if(vt(b))return c(b);if(xe(b))return gt(b,l,2)})):xe(e)?n?u=()=>gt(e,l,2):u=()=>(m&&m(),On(e,l,3,[S])):u=Tn,n&&r){const b=u;u=()=>Bt(b())}let m,S=b=>{m=_.onStop=()=>{gt(b,l,4),m=_.onStop=void 0}},E;if(bo)if(S=Tn,n?t&&On(n,l,3,[u(),f?[]:void 0,S]):u(),i==="sync"){const b=Qv();E=b.__watcherHandles||(b.__watcherHandles=[])}else return Tn;let P=f?new Array(e.length).fill(vi):vi;const k=()=>{if(!(!_.active||!_.dirty))if(n){const b=_.run();(r||d||(f?b.some((C,w)=>bt(C,P[w])):bt(b,P)))&&(m&&m(),On(n,l,3,[b,P===vi?void 0:f&&P[0]===vi?[]:P,S]),P=b)}else _.run()};k.allowRecurse=!!n;let T;i==="sync"?T=k:i==="post"?T=()=>ln(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),T=()=>al(k));const _=new Xa(u,Tn,T),v=Ya(),R=()=>{_.stop(),v&&Ja(v.effects,_)};return n?t?k():P=_.run():i==="post"?ln(_.run.bind(_),l&&l.suspense):_.run(),E&&E.push(R),R}function ng(e,n,t){const r=this.proxy,i=Ye(e)?e.includes(".")?Rf(r,e):()=>r[e]:e.bind(r,r);let s;xe(n)?s=n:(s=n.handler,t=n);const o=sn;cr(this);const a=ul(i,s.bind(r),t);return o?cr(o):$t(),a}function Rf(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function Bt(e,n,t=0,r){if(!Ue(e)||e.__v_skip)return e;if(n&&n>0){if(t>=n)return e;t++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Qe(e))Bt(e.value,n,t,r);else if(Pe(e))for(let i=0;i<e.length;i++)Bt(e[i],n,t,r);else if(qd(e)||er(e))e.forEach(i=>{Bt(i,n,t,r)});else if(Zd(e))for(const i in e)Bt(e[i],n,t,r);return e}function jn(e,n){const t=an;if(t===null)return e;const r=yo(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[o,a,l,c=Ge]=n[s];o&&(xe(o)&&(o={mounted:o,updated:o}),o.deep&&Bt(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Ct(e,n,t,r){const i=e.dirs,s=n&&n.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Kt(),On(l,t,8,[e.el,a,e,n]),Wt())}}const ct=Symbol("_leaveCb"),gi=Symbol("_enterCb");function wf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ze(()=>{e.isMounted=!0}),Rn(()=>{e.isUnmounting=!0}),e}const En=[Function,Array],xf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},tg={name:"BaseTransition",props:xf,setup(e,{slots:n}){const t=Tt(),r=wf();let i;return()=>{const s=n.default&&dl(n.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const E of s)if(E.type!==Pn){o=E;break}}const a=Be(e),{mode:l}=a;if(r.isLeaving)return jo(o);const c=cc(o);if(!c)return jo(o);const u=Yr(c,a,r,t);lr(c,u);const d=t.subTree,f=d&&cc(d);let m=!1;const{getTransitionKey:S}=c.type;if(S){const E=S();i===void 0?i=E:E!==i&&(i=E,m=!0)}if(f&&f.type!==Pn&&(!pt(c,f)||m)){const E=Yr(f,a,r,t);if(lr(f,E),l==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},jo(o);l==="in-out"&&c.type!==Pn&&(E.delayLeave=(P,k,T)=>{const _=If(r,f);_[String(f.key)]=f,P[ct]=()=>{k(),P[ct]=void 0,delete u.delayedLeave},u.delayedLeave=T})}return o}}},rg=tg;function If(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Yr(e,n,t,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:S,onBeforeAppear:E,onAppear:P,onAfterAppear:k,onAppearCancelled:T}=n,_=String(e.key),v=If(t,e),R=(w,x)=>{w&&On(w,r,9,x)},b=(w,x)=>{const I=x[1];R(w,x),Pe(w)?w.every(H=>H.length<=1)&&I():w.length<=1&&I()},C={mode:s,persisted:o,beforeEnter(w){let x=a;if(!t.isMounted)if(i)x=E||a;else return;w[ct]&&w[ct](!0);const I=v[_];I&&pt(e,I)&&I.el[ct]&&I.el[ct](),R(x,[w])},enter(w){let x=l,I=c,H=u;if(!t.isMounted)if(i)x=P||l,I=k||c,H=T||u;else return;let D=!1;const F=w[gi]=ie=>{D||(D=!0,ie?R(H,[w]):R(I,[w]),C.delayedLeave&&C.delayedLeave(),w[gi]=void 0)};x?b(x,[w,F]):F()},leave(w,x){const I=String(e.key);if(w[gi]&&w[gi](!0),t.isUnmounting)return x();R(d,[w]);let H=!1;const D=w[ct]=F=>{H||(H=!0,x(),F?R(S,[w]):R(m,[w]),w[ct]=void 0,v[I]===e&&delete v[I])};v[I]=e,f?b(f,[w,D]):D()},clone(w){return Yr(w,n,t,r)}};return C}function jo(e){if(mo(e))return e=bn(e),e.children=null,e}function cc(e){return mo(e)?e.children?e.children[0]:void 0:e}function lr(e,n){e.shapeFlag&6&&e.component?lr(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function dl(e,n=!1,t){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ke?(o.patchFlag&128&&i++,r=r.concat(dl(o.children,n,a))):(n||o.type!==Pn)&&r.push(a!=null?bn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Z(e,n){return xe(e)?tn({name:e.name},n,{setup:e}):e}const tr=e=>!!e.type.__asyncLoader,mo=e=>e.type.__isKeepAlive,ig={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=Tt(),r=t.ctx;if(!r.renderer)return()=>{const T=n.default&&n.default();return T&&T.length===1?T[0]:T};const i=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=r,f=d("div");r.activate=(T,_,v,R,b)=>{const C=T.component;c(T,_,v,0,a),l(C.vnode,T,_,v,C,a,R,T.slotScopeIds,b),ln(()=>{C.isDeactivated=!1,C.a&&Dr(C.a);const w=T.props&&T.props.onVnodeMounted;w&&_n(w,C.parent,T)},a)},r.deactivate=T=>{const _=T.component;c(T,f,null,1,a),ln(()=>{_.da&&Dr(_.da);const v=T.props&&T.props.onVnodeUnmounted;v&&_n(v,_.parent,T),_.isDeactivated=!0},a)};function m(T){Fo(T),u(T,t,a,!0)}function S(T){i.forEach((_,v)=>{const R=ka(_.type);R&&(!T||!T(R))&&E(v)})}function E(T){const _=i.get(T);!o||!pt(_,o)?m(_):o&&Fo(o),i.delete(T),s.delete(T)}Oe(()=>[e.include,e.exclude],([T,_])=>{T&&S(v=>xr(T,v)),_&&S(v=>!xr(_,v))},{flush:"post",deep:!0});let P=null;const k=()=>{P!=null&&i.set(P,Ko(t.subTree))};return Ze(k),_t(k),Rn(()=>{i.forEach(T=>{const{subTree:_,suspense:v}=t,R=Ko(_);if(T.type===R.type&&T.key===R.key){Fo(R);const b=R.component.da;b&&ln(b,v);return}m(T)})}),()=>{if(P=null,!n.default)return null;const T=n.default(),_=T[0];if(T.length>1)return o=null,T;if(!jt(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let v=Ko(_);const R=v.type,b=ka(tr(v)?v.type.__asyncResolved||{}:R),{include:C,exclude:w,max:x}=e;if(C&&(!b||!xr(C,b))||w&&b&&xr(w,b))return o=v,_;const I=v.key==null?R:v.key,H=i.get(I);return v.el&&(v=bn(v),_.shapeFlag&128&&(_.ssContent=v)),P=I,H?(v.el=H.el,v.component=H.component,v.transition&&lr(v,v.transition),v.shapeFlag|=512,s.delete(I),s.add(I)):(s.add(I),x&&s.size>parseInt(x,10)&&E(s.values().next().value)),v.shapeFlag|=256,o=v,Lf(_.type)?_:v}}},og=ig;function xr(e,n){return Pe(e)?e.some(t=>xr(t,n)):Ye(e)?e.split(",").includes(n):Xm(e)?e.test(n):!1}function sg(e,n){Bf(e,"a",n)}function Af(e,n){Bf(e,"da",n)}function Bf(e,n,t=sn){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(vo(n,r,t),t){let i=t.parent;for(;i&&i.parent;)mo(i.parent.vnode)&&ag(r,n,t,i),i=i.parent}}function ag(e,n,t,r){const i=vo(n,e,r,!0);kt(()=>{Ja(r[n],i)},t)}function Fo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ko(e){return e.shapeFlag&128?e.ssContent:e}function vo(e,n,t=sn,r=!1){if(t){const i=t[e]||(t[e]=[]),s=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;Kt(),cr(t);const a=On(n,t,e,o);return $t(),Wt(),a});return r?i.unshift(s):i.push(s),s}}const Qn=e=>(n,t=sn)=>(!bo||e==="sp")&&vo(e,(...r)=>n(...r),t),lg=Qn("bm"),Ze=Qn("m"),cg=Qn("bu"),_t=Qn("u"),Rn=Qn("bum"),kt=Qn("um"),ug=Qn("sp"),dg=Qn("rtg"),fg=Qn("rtc");function pg(e,n=sn){vo("ec",e,n)}function ai(e,n,t,r){let i;const s=t&&t[r];if(Pe(e)||Ye(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=n(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=n(o+1,o,void 0,s&&s[o])}else if(Ue(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>n(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=n(e[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function Xr(e,n){for(let t=0;t<n.length;t++){const r=n[t];if(Pe(r))for(let i=0;i<r.length;i++)e[r[i].name]=r[i].fn;else r&&(e[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return e}function de(e,n,t={},r,i){if(an.isCE||an.parent&&tr(an.parent)&&an.parent.isCE)return n!=="default"&&(t.name=n),O("slot",t,r&&r());let s=e[n];s&&s._c&&(s._d=!1),B();const o=s&&Nf(s(t)),a=pe(Ke,{key:t.key||o&&o.key||`_${n}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Nf(e){return e.some(n=>jt(n)?!(n.type===Pn||n.type===Ke&&!Nf(n.children)):!0)?e:null}const ga=e=>e?Gf(e)?yo(e)||e.proxy:ga(e.parent):null,$r=tn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ga(e.parent),$root:e=>ga(e.root),$emit:e=>e.emit,$options:e=>fl(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,al(e.update)}),$nextTick:e=>e.n||(e.n=Fe.bind(e.proxy)),$watch:e=>ng.bind(e)}),Wo=(e,n)=>e!==Ge&&!e.__isScriptSetup&&$e(e,n),mg={get({_:e},n){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if(n[0]!=="$"){const m=o[n];if(m!==void 0)switch(m){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return s[n]}else{if(Wo(r,n))return o[n]=1,r[n];if(i!==Ge&&$e(i,n))return o[n]=2,i[n];if((c=e.propsOptions[0])&&$e(c,n))return o[n]=3,s[n];if(t!==Ge&&$e(t,n))return o[n]=4,t[n];ha&&(o[n]=0)}}const u=$r[n];let d,f;if(u)return n==="$attrs"&&mn(e,"get",n),u(e);if((d=a.__cssModules)&&(d=d[n]))return d;if(t!==Ge&&$e(t,n))return o[n]=4,t[n];if(f=l.config.globalProperties,$e(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:s}=e;return Wo(i,n)?(i[n]=t,!0):r!==Ge&&$e(r,n)?(r[n]=t,!0):$e(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(s[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||e!==Ge&&$e(e,o)||Wo(n,o)||(a=s[0])&&$e(a,o)||$e(r,o)||$e($r,o)||$e(i.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:$e(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function uc(e){return Pe(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let ha=!0;function vg(e){const n=fl(e),t=e.proxy,r=e.ctx;ha=!1,n.beforeCreate&&dc(n.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:S,activated:E,deactivated:P,beforeDestroy:k,beforeUnmount:T,destroyed:_,unmounted:v,render:R,renderTracked:b,renderTriggered:C,errorCaptured:w,serverPrefetch:x,expose:I,inheritAttrs:H,components:D,directives:F,filters:ie}=n;if(c&&gg(c,r,null),o)for(const re in o){const U=o[re];xe(U)&&(r[re]=U.bind(t))}if(i){const re=i.call(t,t);Ue(re)&&(e.data=We(re))}if(ha=!0,s)for(const re in s){const U=s[re],ge=xe(U)?U.bind(t,t):xe(U.get)?U.get.bind(t,t):Tn,q=!xe(U)&&xe(U.set)?U.set.bind(t):Tn,se=h({get:ge,set:q});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>se.value,set:fe=>se.value=fe})}if(a)for(const re in a)Df(a[re],r,t,re);if(l){const re=xe(l)?l.call(t):l;Reflect.ownKeys(re).forEach(U=>{fn(U,re[U])})}u&&dc(u,e,"c");function te(re,U){Pe(U)?U.forEach(ge=>re(ge.bind(t))):U&&re(U.bind(t))}if(te(lg,d),te(Ze,f),te(cg,m),te(_t,S),te(sg,E),te(Af,P),te(pg,w),te(fg,b),te(dg,C),te(Rn,T),te(kt,v),te(ug,x),Pe(I))if(I.length){const re=e.exposed||(e.exposed={});I.forEach(U=>{Object.defineProperty(re,U,{get:()=>t[U],set:ge=>t[U]=ge})})}else e.exposed||(e.exposed={});R&&e.render===Tn&&(e.render=R),H!=null&&(e.inheritAttrs=H),D&&(e.components=D),F&&(e.directives=F)}function gg(e,n,t=Tn){Pe(e)&&(e=ba(e));for(const r in e){const i=e[r];let s;Ue(i)?"default"in i?s=Me(i.from||r,i.default,!0):s=Me(i.from||r):s=Me(i),Qe(s)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):n[r]=s}}function dc(e,n,t){On(Pe(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Df(e,n,t,r){const i=r.includes(".")?Rf(t,r):()=>t[r];if(Ye(e)){const s=n[e];xe(s)&&Oe(i,s)}else if(xe(e))Oe(i,e.bind(t));else if(Ue(e))if(Pe(e))e.forEach(s=>Df(s,n,t,r));else{const s=xe(e.handler)?e.handler.bind(t):n[e.handler];xe(s)&&Oe(i,s,e)}}function fl(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(n);let l;return a?l=a:!i.length&&!t&&!r?l=n:(l={},i.length&&i.forEach(c=>Vi(l,c,o,!0)),Vi(l,n,o)),Ue(n)&&s.set(n,l),l}function Vi(e,n,t,r=!1){const{mixins:i,extends:s}=n;s&&Vi(e,s,t,!0),i&&i.forEach(o=>Vi(e,o,t,!0));for(const o in n)if(!(r&&o==="expose")){const a=hg[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const hg={data:fc,props:pc,emits:pc,methods:Ir,computed:Ir,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:Ir,directives:Ir,watch:yg,provide:fc,inject:bg};function fc(e,n){return n?e?function(){return tn(xe(e)?e.call(this,this):e,xe(n)?n.call(this,this):n)}:n:e}function bg(e,n){return Ir(ba(e),ba(n))}function ba(e){if(Pe(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function un(e,n){return e?[...new Set([].concat(e,n))]:n}function Ir(e,n){return e?tn(Object.create(null),e,n):n}function pc(e,n){return e?Pe(e)&&Pe(n)?[...new Set([...e,...n])]:tn(Object.create(null),uc(e),uc(n??{})):n}function yg(e,n){if(!e)return n;if(!n)return e;const t=tn(Object.create(null),e);for(const r in n)t[r]=un(e[r],n[r]);return t}function $f(){return{app:null,config:{isNativeTag:Zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sg=0;function Eg(e,n){return function(r,i=null){xe(r)||(r=tn({},r)),i!=null&&!Ue(i)&&(i=null);const s=$f(),o=new WeakSet;let a=!1;const l=s.app={_uid:Sg++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ug,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&xe(c.install)?(o.add(c),c.install(l,...u)):xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const f=O(r,i);return f.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),u&&n?n(f,c):e(f,c,d),a=!0,l._container=c,c.__vue_app__=l,yo(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Qr=l;try{return c()}finally{Qr=null}}};return l}}let Qr=null;function fn(e,n){if(sn){let t=sn.provides;const r=sn.parent&&sn.parent.provides;r===t&&(t=sn.provides=Object.create(r)),t[e]=n}}function Me(e,n,t=!1){const r=sn||an;if(r||Qr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&xe(n)?n.call(r&&r.proxy):n}}function _g(){return!!(sn||an||Qr)}function kg(e,n,t,r=!1){const i={},s={};ji(s,ho,1),e.propsDefaults=Object.create(null),Hf(e,n,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);t?e.props=r?i:vf(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Tg(e,n,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=Be(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(fo(e.emitsOptions,f))continue;const m=n[f];if(l)if($e(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const S=Kn(f);i[S]=ya(l,a,S,m,e,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Hf(e,n,i,s)&&(c=!0);let u;for(const d in a)(!n||!$e(n,d)&&((u=hr(d))===d||!$e(n,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(i[d]=ya(l,a,d,void 0,e,!0)):delete i[d]);if(s!==a)for(const d in s)(!n||!$e(n,d))&&(delete s[d],c=!0)}c&&Jn(e,"set","$attrs")}function Hf(e,n,t,r){const[i,s]=e.propsOptions;let o=!1,a;if(n)for(let l in n){if(Pi(l))continue;const c=n[l];let u;i&&$e(i,u=Kn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:fo(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Be(t),c=a||Ge;for(let u=0;u<s.length;u++){const d=s[u];t[d]=ya(i,l,d,c[d],e,!$e(c,d))}}return o}function ya(e,n,t,r,i,s){const o=e[t];if(o!=null){const a=$e(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&xe(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(cr(i),r=c[t]=l.call(null,n),$t())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===hr(t))&&(r=!0))}return r}function Mf(e,n,t=!1){const r=n.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!xe(e)){const u=d=>{l=!0;const[f,m]=Mf(d,n,!0);tn(o,f),m&&a.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return Ue(e)&&r.set(e,Qt),Qt;if(Pe(s))for(let u=0;u<s.length;u++){const d=Kn(s[u]);mc(d)&&(o[d]=Ge)}else if(s)for(const u in s){const d=Kn(u);if(mc(d)){const f=s[u],m=o[d]=Pe(f)||xe(f)?{type:f}:tn({},f);if(m){const S=hc(Boolean,m.type),E=hc(String,m.type);m[0]=S>-1,m[1]=E<0||S<E,(S>-1||$e(m,"default"))&&a.push(d)}}}const c=[o,a];return Ue(e)&&r.set(e,c),c}function mc(e){return e[0]!=="$"}function vc(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function gc(e,n){return vc(e)===vc(n)}function hc(e,n){return Pe(n)?n.findIndex(t=>gc(t,e)):xe(n)&&gc(n,e)?0:-1}const jf=e=>e[0]==="_"||e==="$stable",pl=e=>Pe(e)?e.map(Hn):[Hn(e)],Og=(e,n,t)=>{if(n._n)return n;const r=K((...i)=>pl(n(...i)),t);return r._c=!1,r},Ff=(e,n,t)=>{const r=e._ctx;for(const i in e){if(jf(i))continue;const s=e[i];if(xe(s))n[i]=Og(i,s,r);else if(s!=null){const o=pl(s);n[i]=()=>o}}},Kf=(e,n)=>{const t=pl(n);e.slots.default=()=>t},Pg=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=Be(n),ji(n,"_",t)):Ff(n,e.slots={})}else e.slots={},n&&Kf(e,n);ji(e.slots,ho,1)},Cg=(e,n,t)=>{const{vnode:r,slots:i}=e;let s=!0,o=Ge;if(r.shapeFlag&32){const a=n._;a?t&&a===1?s=!1:(tn(i,n),!t&&a===1&&delete i._):(s=!n.$stable,Ff(n,i)),o=n}else n&&(Kf(e,n),o={default:1});if(s)for(const a in i)!jf(a)&&o[a]==null&&delete i[a]};function Sa(e,n,t,r,i=!1){if(Pe(e)){e.forEach((f,m)=>Sa(f,n&&(Pe(n)?n[m]:n),t,r,i));return}if(tr(r)&&!i)return;const s=r.shapeFlag&4?yo(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=n&&n.r,u=a.refs===Ge?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ye(c)?(u[c]=null,$e(d,c)&&(d[c]=null)):Qe(c)&&(c.value=null)),xe(l))gt(l,a,12,[o,u]);else{const f=Ye(l),m=Qe(l);if(f||m){const S=()=>{if(e.f){const E=f?$e(d,l)?d[l]:u[l]:l.value;i?Pe(E)&&Ja(E,s):Pe(E)?E.includes(s)||E.push(s):f?(u[l]=[s],$e(d,l)&&(d[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,$e(d,l)&&(d[l]=o)):m&&(l.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,ln(S,t)):S()}}}const ln=Yv;function Lg(e){return Rg(e)}function Rg(e,n){const t=Yd();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=Tn,insertStaticContent:S}=e,E=(y,p,g,L=null,A=null,W=null,ee=void 0,ne=null,Q=!!p.dynamicChildren)=>{if(y===p)return;y&&!pt(y,p)&&(L=$(y),fe(y,A,W,!0),y=null),p.patchFlag===-2&&(Q=!1,p.dynamicChildren=null);const{type:J,ref:ve,shapeFlag:Se}=p;switch(J){case go:P(y,p,g,L);break;case Pn:k(y,p,g,L);break;case Vo:y==null&&T(p,g,L,ee);break;case Ke:D(y,p,g,L,A,W,ee,ne,Q);break;default:Se&1?R(y,p,g,L,A,W,ee,ne,Q):Se&6?F(y,p,g,L,A,W,ee,ne,Q):(Se&64||Se&128)&&J.process(y,p,g,L,A,W,ee,ne,Q,G)}ve!=null&&A&&Sa(ve,y&&y.ref,W,p||y,!p)},P=(y,p,g,L)=>{if(y==null)r(p.el=a(p.children),g,L);else{const A=p.el=y.el;p.children!==y.children&&c(A,p.children)}},k=(y,p,g,L)=>{y==null?r(p.el=l(p.children||""),g,L):p.el=y.el},T=(y,p,g,L)=>{[y.el,y.anchor]=S(y.children,p,g,L,y.el,y.anchor)},_=({el:y,anchor:p},g,L)=>{let A;for(;y&&y!==p;)A=f(y),r(y,g,L),y=A;r(p,g,L)},v=({el:y,anchor:p})=>{let g;for(;y&&y!==p;)g=f(y),i(y),y=g;i(p)},R=(y,p,g,L,A,W,ee,ne,Q)=>{p.type==="svg"?ee="svg":p.type==="math"&&(ee="mathml"),y==null?b(p,g,L,A,W,ee,ne,Q):x(y,p,A,W,ee,ne,Q)},b=(y,p,g,L,A,W,ee,ne)=>{let Q,J;const{props:ve,shapeFlag:Se,transition:ye,dirs:Re}=y;if(Q=y.el=o(y.type,W,ve&&ve.is,ve),Se&8?u(Q,y.children):Se&16&&w(y.children,Q,null,L,A,zo(y,W),ee,ne),Re&&Ct(y,null,L,"created"),C(Q,y,y.scopeId,ee,L),ve){for(const M in ve)M!=="value"&&!Pi(M)&&s(Q,M,null,ve[M],W,y.children,L,A,me);"value"in ve&&s(Q,"value",null,ve.value,W),(J=ve.onVnodeBeforeMount)&&_n(J,L,y)}Re&&Ct(y,null,L,"beforeMount");const Ie=wg(A,ye);Ie&&ye.beforeEnter(Q),r(Q,p,g),((J=ve&&ve.onVnodeMounted)||Ie||Re)&&ln(()=>{J&&_n(J,L,y),Ie&&ye.enter(Q),Re&&Ct(y,null,L,"mounted")},A)},C=(y,p,g,L,A)=>{if(g&&m(y,g),L)for(let W=0;W<L.length;W++)m(y,L[W]);if(A){let W=A.subTree;if(p===W){const ee=A.vnode;C(y,ee,ee.scopeId,ee.slotScopeIds,A.parent)}}},w=(y,p,g,L,A,W,ee,ne,Q=0)=>{for(let J=Q;J<y.length;J++){const ve=y[J]=ne?ut(y[J]):Hn(y[J]);E(null,ve,p,g,L,A,W,ee,ne)}},x=(y,p,g,L,A,W,ee)=>{const ne=p.el=y.el;let{patchFlag:Q,dynamicChildren:J,dirs:ve}=p;Q|=y.patchFlag&16;const Se=y.props||Ge,ye=p.props||Ge;let Re;if(g&&Lt(g,!1),(Re=ye.onVnodeBeforeUpdate)&&_n(Re,g,p,y),ve&&Ct(p,y,g,"beforeUpdate"),g&&Lt(g,!0),J?I(y.dynamicChildren,J,ne,g,L,zo(p,A),W):ee||U(y,p,ne,null,g,L,zo(p,A),W,!1),Q>0){if(Q&16)H(ne,p,Se,ye,g,L,A);else if(Q&2&&Se.class!==ye.class&&s(ne,"class",null,ye.class,A),Q&4&&s(ne,"style",Se.style,ye.style,A),Q&8){const Ie=p.dynamicProps;for(let M=0;M<Ie.length;M++){const N=Ie[M],V=Se[N],be=ye[N];(be!==V||N==="value")&&s(ne,N,V,be,A,y.children,g,L,me)}}Q&1&&y.children!==p.children&&u(ne,p.children)}else!ee&&J==null&&H(ne,p,Se,ye,g,L,A);((Re=ye.onVnodeUpdated)||ve)&&ln(()=>{Re&&_n(Re,g,p,y),ve&&Ct(p,y,g,"updated")},L)},I=(y,p,g,L,A,W,ee)=>{for(let ne=0;ne<p.length;ne++){const Q=y[ne],J=p[ne],ve=Q.el&&(Q.type===Ke||!pt(Q,J)||Q.shapeFlag&70)?d(Q.el):g;E(Q,J,ve,null,L,A,W,ee,!0)}},H=(y,p,g,L,A,W,ee)=>{if(g!==L){if(g!==Ge)for(const ne in g)!Pi(ne)&&!(ne in L)&&s(y,ne,g[ne],null,ee,p.children,A,W,me);for(const ne in L){if(Pi(ne))continue;const Q=L[ne],J=g[ne];Q!==J&&ne!=="value"&&s(y,ne,J,Q,ee,p.children,A,W,me)}"value"in L&&s(y,"value",g.value,L.value,ee)}},D=(y,p,g,L,A,W,ee,ne,Q)=>{const J=p.el=y?y.el:a(""),ve=p.anchor=y?y.anchor:a("");let{patchFlag:Se,dynamicChildren:ye,slotScopeIds:Re}=p;Re&&(ne=ne?ne.concat(Re):Re),y==null?(r(J,g,L),r(ve,g,L),w(p.children,g,ve,A,W,ee,ne,Q)):Se>0&&Se&64&&ye&&y.dynamicChildren?(I(y.dynamicChildren,ye,g,A,W,ee,ne),(p.key!=null||A&&p===A.subTree)&&ml(y,p,!0)):U(y,p,g,ve,A,W,ee,ne,Q)},F=(y,p,g,L,A,W,ee,ne,Q)=>{p.slotScopeIds=ne,y==null?p.shapeFlag&512?A.ctx.activate(p,g,L,ee,Q):ie(p,g,L,A,W,ee,Q):ce(y,p,Q)},ie=(y,p,g,L,A,W,ee)=>{const ne=y.component=jg(y,L,A);if(mo(y)&&(ne.ctx.renderer=G),Fg(ne),ne.asyncDep){if(A&&A.registerDep(ne,te),!y.el){const Q=ne.subTree=O(Pn);k(null,Q,p,g)}}else te(ne,y,p,g,A,W,ee)},ce=(y,p,g)=>{const L=p.component=y.component;if(qv(y,p,g))if(L.asyncDep&&!L.asyncResolved){re(L,p,g);return}else L.next=p,Mv(L.update),L.effect.dirty=!0,L.update();else p.el=y.el,L.vnode=p},te=(y,p,g,L,A,W,ee)=>{const ne=()=>{if(y.isMounted){let{next:ve,bu:Se,u:ye,parent:Re,vnode:Ie}=y;{const rn=Wf(y);if(rn){ve&&(ve.el=Ie.el,re(y,ve,ee)),rn.asyncDep.then(()=>{y.isUnmounted||ne()});return}}let M=ve,N;Lt(y,!1),ve?(ve.el=Ie.el,re(y,ve,ee)):ve=Ie,Se&&Dr(Se),(N=ve.props&&ve.props.onVnodeBeforeUpdate)&&_n(N,Re,ve,Ie),Lt(y,!0);const V=Mo(y),be=y.subTree;y.subTree=V,E(be,V,d(be.el),$(be),y,A,W),ve.el=V.el,M===null&&Gv(y,V.el),ye&&ln(ye,A),(N=ve.props&&ve.props.onVnodeUpdated)&&ln(()=>_n(N,Re,ve,Ie),A)}else{let ve;const{el:Se,props:ye}=p,{bm:Re,m:Ie,parent:M}=y,N=tr(p);if(Lt(y,!1),Re&&Dr(Re),!N&&(ve=ye&&ye.onVnodeBeforeMount)&&_n(ve,M,p),Lt(y,!0),Se&&Le){const V=()=>{y.subTree=Mo(y),Le(Se,y.subTree,y,A,null)};N?p.type.__asyncLoader().then(()=>!y.isUnmounted&&V()):V()}else{const V=y.subTree=Mo(y);E(null,V,g,L,y,A,W),p.el=V.el}if(Ie&&ln(Ie,A),!N&&(ve=ye&&ye.onVnodeMounted)){const V=p;ln(()=>_n(ve,M,V),A)}(p.shapeFlag&256||M&&tr(M.vnode)&&M.vnode.shapeFlag&256)&&y.a&&ln(y.a,A),y.isMounted=!0,p=g=L=null}},Q=y.effect=new Xa(ne,Tn,()=>al(J),y.scope),J=y.update=()=>{Q.dirty&&Q.run()};J.id=y.uid,Lt(y,!0),J()},re=(y,p,g)=>{p.component=y;const L=y.vnode.props;y.vnode=p,y.next=null,Tg(y,p.props,L,g),Cg(y,p.children,g),Kt(),sc(y),Wt()},U=(y,p,g,L,A,W,ee,ne,Q=!1)=>{const J=y&&y.children,ve=y?y.shapeFlag:0,Se=p.children,{patchFlag:ye,shapeFlag:Re}=p;if(ye>0){if(ye&128){q(J,Se,g,L,A,W,ee,ne,Q);return}else if(ye&256){ge(J,Se,g,L,A,W,ee,ne,Q);return}}Re&8?(ve&16&&me(J,A,W),Se!==J&&u(g,Se)):ve&16?Re&16?q(J,Se,g,L,A,W,ee,ne,Q):me(J,A,W,!0):(ve&8&&u(g,""),Re&16&&w(Se,g,L,A,W,ee,ne,Q))},ge=(y,p,g,L,A,W,ee,ne,Q)=>{y=y||Qt,p=p||Qt;const J=y.length,ve=p.length,Se=Math.min(J,ve);let ye;for(ye=0;ye<Se;ye++){const Re=p[ye]=Q?ut(p[ye]):Hn(p[ye]);E(y[ye],Re,g,null,A,W,ee,ne,Q)}J>ve?me(y,A,W,!0,!1,Se):w(p,g,L,A,W,ee,ne,Q,Se)},q=(y,p,g,L,A,W,ee,ne,Q)=>{let J=0;const ve=p.length;let Se=y.length-1,ye=ve-1;for(;J<=Se&&J<=ye;){const Re=y[J],Ie=p[J]=Q?ut(p[J]):Hn(p[J]);if(pt(Re,Ie))E(Re,Ie,g,null,A,W,ee,ne,Q);else break;J++}for(;J<=Se&&J<=ye;){const Re=y[Se],Ie=p[ye]=Q?ut(p[ye]):Hn(p[ye]);if(pt(Re,Ie))E(Re,Ie,g,null,A,W,ee,ne,Q);else break;Se--,ye--}if(J>Se){if(J<=ye){const Re=ye+1,Ie=Re<ve?p[Re].el:L;for(;J<=ye;)E(null,p[J]=Q?ut(p[J]):Hn(p[J]),g,Ie,A,W,ee,ne,Q),J++}}else if(J>ye)for(;J<=Se;)fe(y[J],A,W,!0),J++;else{const Re=J,Ie=J,M=new Map;for(J=Ie;J<=ye;J++){const vn=p[J]=Q?ut(p[J]):Hn(p[J]);vn.key!=null&&M.set(vn.key,J)}let N,V=0;const be=ye-Ie+1;let rn=!1,on=0;const Sn=new Array(be);for(J=0;J<be;J++)Sn[J]=0;for(J=Re;J<=Se;J++){const vn=y[J];if(V>=be){fe(vn,A,W,!0);continue}let $n;if(vn.key!=null)$n=M.get(vn.key);else for(N=Ie;N<=ye;N++)if(Sn[N-Ie]===0&&pt(vn,p[N])){$n=N;break}$n===void 0?fe(vn,A,W,!0):(Sn[$n-Ie]=J+1,$n>=on?on=$n:rn=!0,E(vn,p[$n],g,null,A,W,ee,ne,Q),V++)}const Jl=rn?xg(Sn):Qt;for(N=Jl.length-1,J=be-1;J>=0;J--){const vn=Ie+J,$n=p[vn],Zl=vn+1<ve?p[vn+1].el:L;Sn[J]===0?E(null,$n,g,Zl,A,W,ee,ne,Q):rn&&(N<0||J!==Jl[N]?se($n,g,Zl,2):N--)}}},se=(y,p,g,L,A=null)=>{const{el:W,type:ee,transition:ne,children:Q,shapeFlag:J}=y;if(J&6){se(y.component.subTree,p,g,L);return}if(J&128){y.suspense.move(p,g,L);return}if(J&64){ee.move(y,p,g,G);return}if(ee===Ke){r(W,p,g);for(let Se=0;Se<Q.length;Se++)se(Q[Se],p,g,L);r(y.anchor,p,g);return}if(ee===Vo){_(y,p,g);return}if(L!==2&&J&1&&ne)if(L===0)ne.beforeEnter(W),r(W,p,g),ln(()=>ne.enter(W),A);else{const{leave:Se,delayLeave:ye,afterLeave:Re}=ne,Ie=()=>r(W,p,g),M=()=>{Se(W,()=>{Ie(),Re&&Re()})};ye?ye(W,Ie,M):M()}else r(W,p,g)},fe=(y,p,g,L=!1,A=!1)=>{const{type:W,props:ee,ref:ne,children:Q,dynamicChildren:J,shapeFlag:ve,patchFlag:Se,dirs:ye}=y;if(ne!=null&&Sa(ne,null,g,y,!0),ve&256){p.ctx.deactivate(y);return}const Re=ve&1&&ye,Ie=!tr(y);let M;if(Ie&&(M=ee&&ee.onVnodeBeforeUnmount)&&_n(M,p,y),ve&6)Te(y.component,g,L);else{if(ve&128){y.suspense.unmount(g,L);return}Re&&Ct(y,null,p,"beforeUnmount"),ve&64?y.type.remove(y,p,g,A,G,L):J&&(W!==Ke||Se>0&&Se&64)?me(J,p,g,!1,!0):(W===Ke&&Se&384||!A&&ve&16)&&me(Q,p,g),L&&Ce(y)}(Ie&&(M=ee&&ee.onVnodeUnmounted)||Re)&&ln(()=>{M&&_n(M,p,y),Re&&Ct(y,null,p,"unmounted")},g)},Ce=y=>{const{type:p,el:g,anchor:L,transition:A}=y;if(p===Ke){Ne(g,L);return}if(p===Vo){v(y);return}const W=()=>{i(g),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(y.shapeFlag&1&&A&&!A.persisted){const{leave:ee,delayLeave:ne}=A,Q=()=>ee(g,W);ne?ne(y.el,W,Q):Q()}else W()},Ne=(y,p)=>{let g;for(;y!==p;)g=f(y),i(y),y=g;i(p)},Te=(y,p,g)=>{const{bum:L,scope:A,update:W,subTree:ee,um:ne}=y;L&&Dr(L),A.stop(),W&&(W.active=!1,fe(ee,y,p,g)),ne&&ln(ne,p),ln(()=>{y.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},me=(y,p,g,L=!1,A=!1,W=0)=>{for(let ee=W;ee<y.length;ee++)fe(y[ee],p,g,L,A)},$=y=>y.shapeFlag&6?$(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),Y=(y,p,g)=>{y==null?p._vnode&&fe(p._vnode,null,null,!0):E(p._vnode||null,y,p,null,null,null,g),sc(),Tf(),p._vnode=y},G={p:E,um:fe,m:se,r:Ce,mt:ie,mc:w,pc:U,pbc:I,n:$,o:e};let ue,Le;return n&&([ue,Le]=n(G)),{render:Y,hydrate:ue,createApp:Eg(Y,ue)}}function zo({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Lt({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function wg(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ml(e,n,t=!1){const r=e.children,i=n.children;if(Pe(r)&&Pe(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ut(i[s]),a.el=o.el),t||ml(o,a)),a.type===go&&(a.el=o.el)}}function xg(e){const n=e.slice(),t=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=t[t.length-1],e[i]<c){n[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,e[t[a]]<c?s=a+1:o=a;c<e[t[s]]&&(s>0&&(n[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=n[o];return t}function Wf(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Wf(n)}const Ig=e=>e.__isTeleport,Hr=e=>e&&(e.disabled||e.disabled===""),bc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,yc=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ea=(e,n)=>{const t=e&&e.to;return Ye(t)?n?n(t):null:t},Ag={name:"Teleport",__isTeleport:!0,process(e,n,t,r,i,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:m,querySelector:S,createText:E,createComment:P}}=c,k=Hr(n.props);let{shapeFlag:T,children:_,dynamicChildren:v}=n;if(e==null){const R=n.el=E(""),b=n.anchor=E("");m(R,t,r),m(b,t,r);const C=n.target=Ea(n.props,S),w=n.targetAnchor=E("");C&&(m(w,C),o==="svg"||bc(C)?o="svg":(o==="mathml"||yc(C))&&(o="mathml"));const x=(I,H)=>{T&16&&u(_,I,H,i,s,o,a,l)};k?x(t,b):C&&x(C,w)}else{n.el=e.el;const R=n.anchor=e.anchor,b=n.target=e.target,C=n.targetAnchor=e.targetAnchor,w=Hr(e.props),x=w?t:b,I=w?R:C;if(o==="svg"||bc(b)?o="svg":(o==="mathml"||yc(b))&&(o="mathml"),v?(f(e.dynamicChildren,v,x,i,s,o,a),ml(e,n,!0)):l||d(e,n,x,I,i,s,o,a,!1),k)w?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):hi(n,t,R,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const H=n.target=Ea(n.props,S);H&&hi(n,H,null,c,0)}else w&&hi(n,b,C,c,1)}Vf(n)},remove(e,n,t,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=e;if(d&&s(u),o&&s(c),a&16){const m=o||!Hr(f);for(let S=0;S<l.length;S++){const E=l[S];i(E,n,t,m,!!E.dynamicChildren)}}},move:hi,hydrate:Bg};function hi(e,n,t,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,n,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,d=s===2;if(d&&r(o,n,t),(!d||Hr(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],n,t,2);d&&r(a,n,t)}function Bg(e,n,t,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=n.target=Ea(n.props,l);if(u){const d=u._lpa||u.firstChild;if(n.shapeFlag&16)if(Hr(n.props))n.anchor=c(o(e),n,a(e),t,r,i,s),n.targetAnchor=d;else{n.anchor=o(e);let f=d;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,u._lpa=n.targetAnchor&&o(n.targetAnchor);break}c(d,n,u,t,r,i,s)}Vf(n)}return n.anchor&&o(n.anchor)}const zf=Ag;function Vf(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t&&t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Ke=Symbol.for("v-fgt"),go=Symbol.for("v-txt"),Pn=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),Mr=[];let xn=null;function B(e=!1){Mr.push(xn=e?null:[])}function Ng(){Mr.pop(),xn=Mr[Mr.length-1]||null}let ei=1;function Sc(e){ei+=e}function Uf(e){return e.dynamicChildren=ei>0?xn||Qt:null,Ng(),ei>0&&xn&&xn.push(e),e}function X(e,n,t,r,i,s){return Uf(le(e,n,t,r,i,s,!0))}function pe(e,n,t,r,i){return Uf(O(e,n,t,r,i,!0))}function jt(e){return e?e.__v_isVNode===!0:!1}function pt(e,n){return e.type===n.type&&e.key===n.key}const ho="__vInternal",qf=({key:e})=>e??null,Ci=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Ye(e)||Qe(e)||xe(e)?{i:an,r:e,k:n,f:!!t}:e:null);function le(e,n=null,t=null,r=0,i=null,s=e===Ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&qf(n),ref:n&&Ci(n),scopeId:po,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:an};return a?(vl(l,t),s&128&&e.normalize(l)):t&&(l.shapeFlag|=Ye(t)?8:16),ei>0&&!o&&xn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xn.push(l),l}const O=Dg;function Dg(e,n=null,t=null,r=0,i=null,s=!1){if((!e||e===Cf)&&(e=Pn),jt(e)){const a=bn(e,n,!0);return t&&vl(a,t),ei>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(e)]=a:xn.push(a)),a.patchFlag|=-2,a}if(Vg(e)&&(e=e.__vccOpts),n){n=$g(n);let{class:a,style:l}=n;a&&!Ye(a)&&(n.class=z(a)),Ue(l)&&(gf(l)&&!Pe(l)&&(l=tn({},l)),n.style=we(l))}const o=Ye(e)?1:Lf(e)?128:Ig(e)?64:Ue(e)?4:xe(e)?2:0;return le(e,n,t,r,i,o,s,!0)}function $g(e){return e?gf(e)||ho in e?tn({},e):e:null}function bn(e,n,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=n?He(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&qf(a),ref:n&&n.ref?t&&i?Pe(i)?i.concat(Ci(n)):[i,Ci(n)]:Ci(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ke?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bn(e.ssContent),ssFallback:e.ssFallback&&bn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ae(e=" ",n=0){return O(go,null,e,n)}function Ee(e="",n=!1){return n?(B(),pe(Pn,null,e)):O(Pn,null,e)}function Hn(e){return e==null||typeof e=="boolean"?O(Pn):Pe(e)?O(Ke,null,e.slice()):typeof e=="object"?ut(e):O(go,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:bn(e)}function vl(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(Pe(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),vl(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!(ho in n)?n._ctx=an:i===3&&an&&(an.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else xe(n)?(n={default:n,_ctx:an},t=32):(n=String(n),r&64?(t=16,n=[Ae(n)]):t=8);e.children=n,e.shapeFlag|=t}function He(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=z([n.class,r.class]));else if(i==="style")n.style=we([n.style,r.style]);else if(oo(i)){const s=n[i],o=r[i];o&&s!==o&&!(Pe(s)&&s.includes(o))&&(n[i]=s?[].concat(s,o):o)}else i!==""&&(n[i]=r[i])}return n}function _n(e,n,t,r=null){On(e,n,7,[t,r])}const Hg=$f();let Mg=0;function jg(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||Hg,s={uid:Mg++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(r,i),emitsOptions:Pf(r,i),emit:null,emitted:null,propsDefaults:Ge,inheritAttrs:r.inheritAttrs,ctx:Ge,data:Ge,props:Ge,attrs:Ge,slots:Ge,refs:Ge,setupState:Ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Kv.bind(null,s),e.ce&&e.ce(s),s}let sn=null;const Tt=()=>sn||an;let gl,_a;{const e=Yd(),n=(t,r)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};gl=n("__VUE_INSTANCE_SETTERS__",t=>sn=t),_a=n("__VUE_SSR_SETTERS__",t=>bo=t)}const cr=e=>{gl(e),e.scope.on()},$t=()=>{sn&&sn.scope.off(),gl(null)};function Gf(e){return e.vnode.shapeFlag&4}let bo=!1;function Fg(e,n=!1){n&&_a(n);const{props:t,children:r}=e.vnode,i=Gf(e);kg(e,t,i,n),Pg(e,r);const s=i?Kg(e,n):void 0;return n&&_a(!1),s}function Kg(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=co(new Proxy(e.ctx,mg));const{setup:r}=t;if(r){const i=e.setupContext=r.length>1?zg(e):null;cr(e),Kt();const s=gt(r,e,0,[e.props,i]);if(Wt(),$t(),Gd(s)){if(s.then($t,$t),n)return s.then(o=>{Ec(e,o,n)}).catch(o=>{uo(o,e,0)});e.asyncDep=s}else Ec(e,s,n)}else Jf(e,n)}function Ec(e,n,t){xe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ue(n)&&(e.setupState=Sf(n)),Jf(e,t)}let _c;function Jf(e,n,t){const r=e.type;if(!e.render){if(!n&&_c&&!r.render){const i=r.template||fl(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=tn(tn({isCustomElement:s,delimiters:a},o),l);r.render=_c(i,c)}}e.render=r.render||Tn}{cr(e),Kt();try{vg(e)}finally{Wt(),$t()}}}function Wg(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return mn(e,"get","$attrs"),n[t]}}))}function zg(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return Wg(e)},slots:e.slots,emit:e.emit,expose:n}}function yo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Sf(co(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in $r)return $r[t](e)},has(n,t){return t in n||t in $r}}))}function ka(e,n=!0){return xe(e)?e.displayName||e.name:e.name||n&&e.__name}function Vg(e){return xe(e)&&"__vccOpts"in e}const h=(e,n)=>Iv(e,n,bo);function ni(e,n,t){const r=arguments.length;return r===2?Ue(n)&&!Pe(n)?jt(n)?O(e,null,[n]):O(e,n):O(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&jt(t)&&(t=[t]),O(e,n,t))}const Ug="3.4.5",qg="http://www.w3.org/2000/svg",Gg="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,kc=dt&&dt.createElement("template"),Jg={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n==="svg"?dt.createElementNS(qg,e):n==="mathml"?dt.createElementNS(Gg,e):dt.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,s){const o=t?t.previousSibling:n.lastChild;if(i&&(i===s||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{kc.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=kc.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},it="transition",Or="animation",ur=Symbol("_vtc"),Wn=(e,{slots:n})=>ni(rg,Yf(e),n);Wn.displayName="Transition";const Zf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zg=Wn.props=tn({},xf,Zf),Rt=(e,n=[])=>{Pe(e)?e.forEach(t=>t(...n)):e&&e(...n)},Tc=e=>e?Pe(e)?e.some(n=>n.length>1):e.length>1:!1;function Yf(e){const n={};for(const D in e)D in Zf||(n[D]=e[D]);if(e.css===!1)return n;const{name:t="v",type:r,duration:i,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=e,S=Yg(i),E=S&&S[0],P=S&&S[1],{onBeforeEnter:k,onEnter:T,onEnterCancelled:_,onLeave:v,onLeaveCancelled:R,onBeforeAppear:b=k,onAppear:C=T,onAppearCancelled:w=_}=n,x=(D,F,ie)=>{at(D,F?u:a),at(D,F?c:o),ie&&ie()},I=(D,F)=>{D._isLeaving=!1,at(D,d),at(D,m),at(D,f),F&&F()},H=D=>(F,ie)=>{const ce=D?C:T,te=()=>x(F,D,ie);Rt(ce,[F,te]),Oc(()=>{at(F,D?l:s),Un(F,D?u:a),Tc(ce)||Pc(F,r,E,te)})};return tn(n,{onBeforeEnter(D){Rt(k,[D]),Un(D,s),Un(D,o)},onBeforeAppear(D){Rt(b,[D]),Un(D,l),Un(D,c)},onEnter:H(!1),onAppear:H(!0),onLeave(D,F){D._isLeaving=!0;const ie=()=>I(D,F);Un(D,d),Qf(),Un(D,f),Oc(()=>{D._isLeaving&&(at(D,d),Un(D,m),Tc(v)||Pc(D,r,P,ie))}),Rt(v,[D,ie])},onEnterCancelled(D){x(D,!1),Rt(_,[D])},onAppearCancelled(D){x(D,!0),Rt(w,[D])},onLeaveCancelled(D){I(D),Rt(R,[D])}})}function Yg(e){if(e==null)return null;if(Ue(e))return[Uo(e.enter),Uo(e.leave)];{const n=Uo(e);return[n,n]}}function Uo(e){return rv(e)}function Un(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[ur]||(e[ur]=new Set)).add(n)}function at(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[ur];t&&(t.delete(n),t.size||(e[ur]=void 0))}function Oc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Xg=0;function Pc(e,n,t,r){const i=e._endId=++Xg,s=()=>{i===e._endId&&r()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Xf(e,n);if(!o)return r();const c=o+"end";let u=0;const d=()=>{e.removeEventListener(c,f),s()},f=m=>{m.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(c,f)}function Xf(e,n){const t=window.getComputedStyle(e),r=S=>(t[S]||"").split(", "),i=r(`${it}Delay`),s=r(`${it}Duration`),o=Cc(i,s),a=r(`${Or}Delay`),l=r(`${Or}Duration`),c=Cc(a,l);let u=null,d=0,f=0;n===it?o>0&&(u=it,d=o,f=s.length):n===Or?c>0&&(u=Or,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?it:Or:null,f=u?u===it?s.length:l.length:0);const m=u===it&&/\b(transform|all)(,|$)/.test(r(`${it}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:m}}function Cc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>Lc(t)+Lc(e[r])))}function Lc(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Qf(){return document.body.offsetHeight}function Qg(e,n,t){const r=e[ur];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const hl=Symbol("_vod"),Ht={beforeMount(e,{value:n},{transition:t}){e[hl]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Pr(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),Pr(e,!0),r.enter(e)):r.leave(e,()=>{Pr(e,!1)}):Pr(e,n))},beforeUnmount(e,{value:n}){Pr(e,n)}};function Pr(e,n){e.style.display=n?e[hl]:"none"}const eh=Symbol("");function nh(e,n,t){const r=e.style,i=Ye(t);if(t&&!i){if(n&&!Ye(n))for(const s in n)t[s]==null&&Ta(r,s,"");for(const s in t)Ta(r,s,t[s])}else{const s=r.display;if(i){if(n!==t){const o=r[eh];o&&(t+=";"+o),r.cssText=t}}else n&&e.removeAttribute("style");hl in e&&(r.display=s)}}const Rc=/\s*!important$/;function Ta(e,n,t){if(Pe(t))t.forEach(r=>Ta(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=th(e,n);Rc.test(t)?e.setProperty(hr(r),t.replace(Rc,""),"important"):e[r]=t}}const wc=["Webkit","Moz","ms"],qo={};function th(e,n){const t=qo[n];if(t)return t;let r=Kn(n);if(r!=="filter"&&r in e)return qo[n]=r;r=ao(r);for(let i=0;i<wc.length;i++){const s=wc[i]+r;if(s in e)return qo[n]=s}return n}const xc="http://www.w3.org/1999/xlink";function rh(e,n,t,r,i){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(xc,n.slice(6,n.length)):e.setAttributeNS(xc,n,t);else{const s=uv(n);t==null||s&&!Xd(t)?e.removeAttribute(n):e.setAttribute(n,s?"":t)}}function ih(e,n,t,r,i,s,o){if(n==="innerHTML"||n==="textContent"){r&&o(r,i,s),e[n]=t??"";return}const a=e.tagName;if(n==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=t;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=t??"";c!==u&&(e.value=u),t==null&&e.removeAttribute(n);return}let l=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=Xd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(n)}function oh(e,n,t,r){e.addEventListener(n,t,r)}function sh(e,n,t,r){e.removeEventListener(n,t,r)}const Ic=Symbol("_vei");function ah(e,n,t,r,i=null){const s=e[Ic]||(e[Ic]={}),o=s[n];if(r&&o)o.value=r;else{const[a,l]=lh(n);if(r){const c=s[n]=dh(r,i);oh(e,a,c,l)}else o&&(sh(e,a,o,l),s[n]=void 0)}}const Ac=/(?:Once|Passive|Capture)$/;function lh(e){let n;if(Ac.test(e)){n={};let r;for(;r=e.match(Ac);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hr(e.slice(2)),n]}let Go=0;const ch=Promise.resolve(),uh=()=>Go||(ch.then(()=>Go=0),Go=Date.now());function dh(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;On(fh(r,t.value),n,5,[r])};return t.value=e,t.attached=uh(),t}function fh(e,n){if(Pe(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const Bc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ph=(e,n,t,r,i,s,o,a,l)=>{const c=i==="svg";n==="class"?Qg(e,r,c):n==="style"?nh(e,t,r):oo(n)?Ga(n)||ah(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):mh(e,n,r,c))?ih(e,n,r,s,o,a,l):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),rh(e,n,r,c))};function mh(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Bc(n)&&xe(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Bc(n)&&Ye(t)?!1:n in e}const ep=new WeakMap,np=new WeakMap,Ui=Symbol("_moveCb"),Nc=Symbol("_enterCb"),tp={name:"TransitionGroup",props:tn({},Zg,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Tt(),r=wf();let i,s;return _t(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!yh(i[0].el,t.vnode.el,o))return;i.forEach(gh),i.forEach(hh);const a=i.filter(bh);Qf(),a.forEach(l=>{const c=l.el,u=c.style;Un(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[Ui]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c[Ui]=null,at(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=Be(e),a=Yf(o);let l=o.tag||Ke;i=s,s=n.default?dl(n.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&lr(u,Yr(u,a,r,t))}if(i)for(let c=0;c<i.length;c++){const u=i[c];lr(u,Yr(u,a,r,t)),ep.set(u,u.el.getBoundingClientRect())}return O(l,null,s)}}},vh=e=>delete e.mode;tp.props;const bl=tp;function gh(e){const n=e.el;n[Ui]&&n[Ui](),n[Nc]&&n[Nc]()}function hh(e){np.set(e,e.el.getBoundingClientRect())}function bh(e){const n=ep.get(e),t=np.get(e),r=n.left-t.left,i=n.top-t.top;if(r||i){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",e}}function yh(e,n,t){const r=e.cloneNode(),i=e[ur];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=n.nodeType===1?n:n.parentNode;s.appendChild(r);const{hasTransform:o}=Xf(r);return s.removeChild(r),o}const Sh=["ctrl","shift","alt","meta"],Eh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Sh.some(t=>e[`${t}Key`]&&!n.includes(t))},Xn=(e,n)=>{const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=(i,...s)=>{for(let o=0;o<n.length;o++){const a=Eh[n[o]];if(a&&a(i,n))return}return e(i,...s)})},_h=tn({patchProp:ph},Jg);let Dc;function rp(){return Dc||(Dc=Lg(_h))}const qi=(...e)=>{rp().render(...e)},kh=(...e)=>{const n=rp().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=Oh(r);if(!i)return;const s=n._component;!xe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,Th(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},n};function Th(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Oh(e){return Ye(e)?document.querySelector(e):e}var Ph=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ip;const So=e=>ip=e,op=Symbol();function Oa(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var jr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(jr||(jr={}));function Ch(){const e=nf(!0),n=e.run(()=>j({}));let t=[],r=[];const i=co({install(s){So(i),i._a=s,s.provide(op,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!Ph?r.push(s):t.push(s),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return i}const sp=()=>{};function $c(e,n,t,r=sp){e.push(n);const i=()=>{const s=e.indexOf(n);s>-1&&(e.splice(s,1),r())};return!t&&Ya()&&tf(i),i}function Yt(e,...n){e.slice().forEach(t=>{t(...n)})}const Lh=e=>e();function Pa(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,r)=>e.set(r,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],i=e[t];Oa(i)&&Oa(r)&&e.hasOwnProperty(t)&&!Qe(r)&&!vt(r)?e[t]=Pa(i,r):e[t]=r}return e}const Rh=Symbol();function wh(e){return!Oa(e)||!e.hasOwnProperty(Rh)}const{assign:lt}=Object;function xh(e){return!!(Qe(e)&&e.effect)}function Ih(e,n,t,r){const{state:i,actions:s,getters:o}=n,a=t.state.value[e];let l;function c(){a||(t.state.value[e]=i?i():{});const u=De(t.state.value[e]);return lt(u,s,Object.keys(o||{}).reduce((d,f)=>(d[f]=co(h(()=>{So(t);const m=t._s.get(e);return o[f].call(m,m)})),d),{}))}return l=ap(e,c,n,t,r,!0),l}function ap(e,n,t={},r,i,s){let o;const a=lt({actions:{}},t),l={deep:!0};let c,u,d=[],f=[],m;const S=r.state.value[e];!s&&!S&&(r.state.value[e]={}),j({});let E;function P(w){let x;c=u=!1,typeof w=="function"?(w(r.state.value[e]),x={type:jr.patchFunction,storeId:e,events:m}):(Pa(r.state.value[e],w),x={type:jr.patchObject,payload:w,storeId:e,events:m});const I=E=Symbol();Fe().then(()=>{E===I&&(c=!0)}),u=!0,Yt(d,x,r.state.value[e])}const k=s?function(){const{state:x}=t,I=x?x():{};this.$patch(H=>{lt(H,I)})}:sp;function T(){o.stop(),d=[],f=[],r._s.delete(e)}function _(w,x){return function(){So(r);const I=Array.from(arguments),H=[],D=[];function F(te){H.push(te)}function ie(te){D.push(te)}Yt(f,{args:I,name:w,store:R,after:F,onError:ie});let ce;try{ce=x.apply(this&&this.$id===e?this:R,I)}catch(te){throw Yt(D,te),te}return ce instanceof Promise?ce.then(te=>(Yt(H,te),te)).catch(te=>(Yt(D,te),Promise.reject(te))):(Yt(H,ce),ce)}}const v={_p:r,$id:e,$onAction:$c.bind(null,f),$patch:P,$reset:k,$subscribe(w,x={}){const I=$c(d,w,x.detached,()=>H()),H=o.run(()=>Oe(()=>r.state.value[e],D=>{(x.flush==="sync"?u:c)&&w({storeId:e,type:jr.direct,events:m},D)},lt({},l,x)));return I},$dispose:T},R=We(v);r._s.set(e,R);const C=(r._a&&r._a.runWithContext||Lh)(()=>r._e.run(()=>(o=nf()).run(n)));for(const w in C){const x=C[w];if(Qe(x)&&!xh(x)||vt(x))s||(S&&wh(x)&&(Qe(x)?x.value=S[w]:Pa(x,S[w])),r.state.value[e][w]=x);else if(typeof x=="function"){const I=_(w,x);C[w]=I,a.actions[w]=x}}return lt(R,C),lt(Be(R),C),Object.defineProperty(R,"$state",{get:()=>r.state.value[e],set:w=>{P(x=>{lt(x,w)})}}),r._p.forEach(w=>{lt(R,o.run(()=>w({store:R,app:r._a,pinia:r,options:a})))}),S&&s&&t.hydrate&&t.hydrate(R.$state,S),c=!0,u=!0,R}function Eo(e,n,t){let r,i;const s=typeof n=="function";typeof e=="string"?(r=e,i=s?t:n):(i=e,r=e.id);function o(a,l){const c=_g();return a=a||(c?Me(op,null):null),a&&So(a),a=ip,a._s.has(r)||(s?ap(r,n,i,a):Ih(r,i,a)),a._s.get(r)}return o.$id=r,o}var lp=typeof global=="object"&&global&&global.Object===Object&&global,Ah=typeof self=="object"&&self&&self.Object===Object&&self,Bn=lp||Ah||Function("return this")(),zn=Bn.Symbol,cp=Object.prototype,Bh=cp.hasOwnProperty,Nh=cp.toString,Cr=zn?zn.toStringTag:void 0;function Dh(e){var n=Bh.call(e,Cr),t=e[Cr];try{e[Cr]=void 0;var r=!0}catch{}var i=Nh.call(e);return r&&(n?e[Cr]=t:delete e[Cr]),i}var $h=Object.prototype,Hh=$h.toString;function Mh(e){return Hh.call(e)}var jh="[object Null]",Fh="[object Undefined]",Hc=zn?zn.toStringTag:void 0;function br(e){return e==null?e===void 0?Fh:jh:Hc&&Hc in Object(e)?Dh(e):Mh(e)}function yr(e){return e!=null&&typeof e=="object"}var Kh="[object Symbol]";function up(e){return typeof e=="symbol"||yr(e)&&br(e)==Kh}function Wh(e,n){for(var t=-1,r=e==null?0:e.length,i=Array(r);++t<r;)i[t]=n(e[t],t,e);return i}var Sr=Array.isArray,zh=1/0,Mc=zn?zn.prototype:void 0,jc=Mc?Mc.toString:void 0;function dp(e){if(typeof e=="string")return e;if(Sr(e))return Wh(e,dp)+"";if(up(e))return jc?jc.call(e):"";var n=e+"";return n=="0"&&1/e==-zh?"-0":n}var Vh=/\s/;function Uh(e){for(var n=e.length;n--&&Vh.test(e.charAt(n)););return n}var qh=/^\s+/;function Gh(e){return e&&e.slice(0,Uh(e)+1).replace(qh,"")}function yt(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var Fc=NaN,Jh=/^[-+]0x[0-9a-f]+$/i,Zh=/^0b[01]+$/i,Yh=/^0o[0-7]+$/i,Xh=parseInt;function Kc(e){if(typeof e=="number")return e;if(up(e))return Fc;if(yt(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=yt(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Gh(e);var t=Zh.test(e);return t||Yh.test(e)?Xh(e.slice(2),t?2:8):Jh.test(e)?Fc:+e}var Qh="[object AsyncFunction]",eb="[object Function]",nb="[object GeneratorFunction]",tb="[object Proxy]";function fp(e){if(!yt(e))return!1;var n=br(e);return n==eb||n==nb||n==Qh||n==tb}var Jo=Bn["__core-js_shared__"],Wc=function(){var e=/[^.]+$/.exec(Jo&&Jo.keys&&Jo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function rb(e){return!!Wc&&Wc in e}var ib=Function.prototype,ob=ib.toString;function zt(e){if(e!=null){try{return ob.call(e)}catch{}try{return e+""}catch{}}return""}var sb=/[\\^$.*+?()[\]{}|]/g,ab=/^\[object .+?Constructor\]$/,lb=Function.prototype,cb=Object.prototype,ub=lb.toString,db=cb.hasOwnProperty,fb=RegExp("^"+ub.call(db).replace(sb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function pb(e){if(!yt(e)||rb(e))return!1;var n=fp(e)?fb:ab;return n.test(zt(e))}function mb(e,n){return e==null?void 0:e[n]}function Vt(e,n){var t=mb(e,n);return pb(t)?t:void 0}var Ca=Vt(Bn,"WeakMap"),zc=Object.create,vb=function(){function e(){}return function(n){if(!yt(n))return{};if(zc)return zc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();function pp(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var Vc=function(){try{var e=Vt(Object,"defineProperty");return e({},"",{}),e}catch{}}();function gb(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var hb=9007199254740991,bb=/^(?:0|[1-9]\d*)$/;function yb(e,n){var t=typeof e;return n=n??hb,!!n&&(t=="number"||t!="symbol"&&bb.test(e))&&e>-1&&e%1==0&&e<n}function mp(e,n,t){n=="__proto__"&&Vc?Vc(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function vp(e,n){return e===n||e!==e&&n!==n}var Sb=Object.prototype,Eb=Sb.hasOwnProperty;function gp(e,n,t){var r=e[n];(!(Eb.call(e,n)&&vp(r,t))||t===void 0&&!(n in e))&&mp(e,n,t)}function _o(e,n,t,r){var i=!t;t||(t={});for(var s=-1,o=n.length;++s<o;){var a=n[s],l=r?r(t[a],e[a],a,t,e):void 0;l===void 0&&(l=e[a]),i?mp(t,a,l):gp(t,a,l)}return t}var _b=9007199254740991;function hp(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_b}function bp(e){return e!=null&&hp(e.length)&&!fp(e)}var kb=Object.prototype;function yl(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||kb;return e===t}function Tb(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var Ob="[object Arguments]";function Uc(e){return yr(e)&&br(e)==Ob}var yp=Object.prototype,Pb=yp.hasOwnProperty,Cb=yp.propertyIsEnumerable,Sp=Uc(function(){return arguments}())?Uc:function(e){return yr(e)&&Pb.call(e,"callee")&&!Cb.call(e,"callee")};function Lb(){return!1}var Ep=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qc=Ep&&typeof module=="object"&&module&&!module.nodeType&&module,Rb=qc&&qc.exports===Ep,Gc=Rb?Bn.Buffer:void 0,wb=Gc?Gc.isBuffer:void 0,_p=wb||Lb,xb="[object Arguments]",Ib="[object Array]",Ab="[object Boolean]",Bb="[object Date]",Nb="[object Error]",Db="[object Function]",$b="[object Map]",Hb="[object Number]",Mb="[object Object]",jb="[object RegExp]",Fb="[object Set]",Kb="[object String]",Wb="[object WeakMap]",zb="[object ArrayBuffer]",Vb="[object DataView]",Ub="[object Float32Array]",qb="[object Float64Array]",Gb="[object Int8Array]",Jb="[object Int16Array]",Zb="[object Int32Array]",Yb="[object Uint8Array]",Xb="[object Uint8ClampedArray]",Qb="[object Uint16Array]",ey="[object Uint32Array]",qe={};qe[Ub]=qe[qb]=qe[Gb]=qe[Jb]=qe[Zb]=qe[Yb]=qe[Xb]=qe[Qb]=qe[ey]=!0;qe[xb]=qe[Ib]=qe[zb]=qe[Ab]=qe[Vb]=qe[Bb]=qe[Nb]=qe[Db]=qe[$b]=qe[Hb]=qe[Mb]=qe[jb]=qe[Fb]=qe[Kb]=qe[Wb]=!1;function ny(e){return yr(e)&&hp(e.length)&&!!qe[br(e)]}function Sl(e){return function(n){return e(n)}}var kp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fr=kp&&typeof module=="object"&&module&&!module.nodeType&&module,ty=Fr&&Fr.exports===kp,Zo=ty&&lp.process,dr=function(){try{var e=Fr&&Fr.require&&Fr.require("util").types;return e||Zo&&Zo.binding&&Zo.binding("util")}catch{}}(),Jc=dr&&dr.isTypedArray,ry=Jc?Sl(Jc):ny,iy=Object.prototype,oy=iy.hasOwnProperty;function Tp(e,n){var t=Sr(e),r=!t&&Sp(e),i=!t&&!r&&_p(e),s=!t&&!r&&!i&&ry(e),o=t||r||i||s,a=o?Tb(e.length,String):[],l=a.length;for(var c in e)(n||oy.call(e,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||yb(c,l)))&&a.push(c);return a}function Op(e,n){return function(t){return e(n(t))}}var sy=Op(Object.keys,Object),ay=Object.prototype,ly=ay.hasOwnProperty;function cy(e){if(!yl(e))return sy(e);var n=[];for(var t in Object(e))ly.call(e,t)&&t!="constructor"&&n.push(t);return n}function El(e){return bp(e)?Tp(e):cy(e)}function uy(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var dy=Object.prototype,fy=dy.hasOwnProperty;function py(e){if(!yt(e))return uy(e);var n=yl(e),t=[];for(var r in e)r=="constructor"&&(n||!fy.call(e,r))||t.push(r);return t}function _l(e){return bp(e)?Tp(e,!0):py(e)}var ti=Vt(Object,"create");function my(){this.__data__=ti?ti(null):{},this.size=0}function vy(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var gy="__lodash_hash_undefined__",hy=Object.prototype,by=hy.hasOwnProperty;function yy(e){var n=this.__data__;if(ti){var t=n[e];return t===gy?void 0:t}return by.call(n,e)?n[e]:void 0}var Sy=Object.prototype,Ey=Sy.hasOwnProperty;function _y(e){var n=this.__data__;return ti?n[e]!==void 0:Ey.call(n,e)}var ky="__lodash_hash_undefined__";function Ty(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ti&&n===void 0?ky:n,this}function Ft(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Ft.prototype.clear=my;Ft.prototype.delete=vy;Ft.prototype.get=yy;Ft.prototype.has=_y;Ft.prototype.set=Ty;function Oy(){this.__data__=[],this.size=0}function ko(e,n){for(var t=e.length;t--;)if(vp(e[t][0],n))return t;return-1}var Py=Array.prototype,Cy=Py.splice;function Ly(e){var n=this.__data__,t=ko(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():Cy.call(n,t,1),--this.size,!0}function Ry(e){var n=this.__data__,t=ko(n,e);return t<0?void 0:n[t][1]}function wy(e){return ko(this.__data__,e)>-1}function xy(e,n){var t=this.__data__,r=ko(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function et(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}et.prototype.clear=Oy;et.prototype.delete=Ly;et.prototype.get=Ry;et.prototype.has=wy;et.prototype.set=xy;var ri=Vt(Bn,"Map");function Iy(){this.size=0,this.__data__={hash:new Ft,map:new(ri||et),string:new Ft}}function Ay(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function To(e,n){var t=e.__data__;return Ay(n)?t[typeof n=="string"?"string":"hash"]:t.map}function By(e){var n=To(this,e).delete(e);return this.size-=n?1:0,n}function Ny(e){return To(this,e).get(e)}function Dy(e){return To(this,e).has(e)}function $y(e,n){var t=To(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function Er(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Er.prototype.clear=Iy;Er.prototype.delete=By;Er.prototype.get=Ny;Er.prototype.has=Dy;Er.prototype.set=$y;function Hy(e){return e==null?"":dp(e)}function Oo(e,n){for(var t=-1,r=n.length,i=e.length;++t<r;)e[i+t]=n[t];return e}var Zc=zn?zn.isConcatSpreadable:void 0;function My(e){return Sr(e)||Sp(e)||!!(Zc&&e&&e[Zc])}function Pp(e,n,t,r,i){var s=-1,o=e.length;for(t||(t=My),i||(i=[]);++s<o;){var a=e[s];n>0&&t(a)?n>1?Pp(a,n-1,t,r,i):Oo(i,a):r||(i[i.length]=a)}return i}var jy=Op(Object.getPrototypeOf,Object);const Cp=jy;function Fy(){this.__data__=new et,this.size=0}function Ky(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function Wy(e){return this.__data__.get(e)}function zy(e){return this.__data__.has(e)}var Vy=200;function Uy(e,n){var t=this.__data__;if(t instanceof et){var r=t.__data__;if(!ri||r.length<Vy-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Er(r)}return t.set(e,n),this.size=t.size,this}function _r(e){var n=this.__data__=new et(e);this.size=n.size}_r.prototype.clear=Fy;_r.prototype.delete=Ky;_r.prototype.get=Wy;_r.prototype.has=zy;_r.prototype.set=Uy;function qy(e,n){return e&&_o(n,El(n),e)}function Gy(e,n){return e&&_o(n,_l(n),e)}var Lp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Yc=Lp&&typeof module=="object"&&module&&!module.nodeType&&module,Jy=Yc&&Yc.exports===Lp,Xc=Jy?Bn.Buffer:void 0,Qc=Xc?Xc.allocUnsafe:void 0;function Zy(e,n){if(n)return e.slice();var t=e.length,r=Qc?Qc(t):new e.constructor(t);return e.copy(r),r}function Yy(e,n){for(var t=-1,r=e==null?0:e.length,i=0,s=[];++t<r;){var o=e[t];n(o,t,e)&&(s[i++]=o)}return s}function Rp(){return[]}var Xy=Object.prototype,Qy=Xy.propertyIsEnumerable,eu=Object.getOwnPropertySymbols,kl=eu?function(e){return e==null?[]:(e=Object(e),Yy(eu(e),function(n){return Qy.call(e,n)}))}:Rp;function eS(e,n){return _o(e,kl(e),n)}var nS=Object.getOwnPropertySymbols,wp=nS?function(e){for(var n=[];e;)Oo(n,kl(e)),e=Cp(e);return n}:Rp;function tS(e,n){return _o(e,wp(e),n)}function xp(e,n,t){var r=n(e);return Sr(e)?r:Oo(r,t(e))}function rS(e){return xp(e,El,kl)}function iS(e){return xp(e,_l,wp)}var La=Vt(Bn,"DataView"),Ra=Vt(Bn,"Promise"),wa=Vt(Bn,"Set"),nu="[object Map]",oS="[object Object]",tu="[object Promise]",ru="[object Set]",iu="[object WeakMap]",ou="[object DataView]",sS=zt(La),aS=zt(ri),lS=zt(Ra),cS=zt(wa),uS=zt(Ca),xt=br;(La&&xt(new La(new ArrayBuffer(1)))!=ou||ri&&xt(new ri)!=nu||Ra&&xt(Ra.resolve())!=tu||wa&&xt(new wa)!=ru||Ca&&xt(new Ca)!=iu)&&(xt=function(e){var n=br(e),t=n==oS?e.constructor:void 0,r=t?zt(t):"";if(r)switch(r){case sS:return ou;case aS:return nu;case lS:return tu;case cS:return ru;case uS:return iu}return n});const Tl=xt;var dS=Object.prototype,fS=dS.hasOwnProperty;function pS(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&fS.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var su=Bn.Uint8Array;function Ol(e){var n=new e.constructor(e.byteLength);return new su(n).set(new su(e)),n}function mS(e,n){var t=n?Ol(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var vS=/\w*$/;function gS(e){var n=new e.constructor(e.source,vS.exec(e));return n.lastIndex=e.lastIndex,n}var au=zn?zn.prototype:void 0,lu=au?au.valueOf:void 0;function hS(e){return lu?Object(lu.call(e)):{}}function bS(e,n){var t=n?Ol(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var yS="[object Boolean]",SS="[object Date]",ES="[object Map]",_S="[object Number]",kS="[object RegExp]",TS="[object Set]",OS="[object String]",PS="[object Symbol]",CS="[object ArrayBuffer]",LS="[object DataView]",RS="[object Float32Array]",wS="[object Float64Array]",xS="[object Int8Array]",IS="[object Int16Array]",AS="[object Int32Array]",BS="[object Uint8Array]",NS="[object Uint8ClampedArray]",DS="[object Uint16Array]",$S="[object Uint32Array]";function HS(e,n,t){var r=e.constructor;switch(n){case CS:return Ol(e);case yS:case SS:return new r(+e);case LS:return mS(e,t);case RS:case wS:case xS:case IS:case AS:case BS:case NS:case DS:case $S:return bS(e,t);case ES:return new r;case _S:case OS:return new r(e);case kS:return gS(e);case TS:return new r;case PS:return hS(e)}}function MS(e){return typeof e.constructor=="function"&&!yl(e)?vb(Cp(e)):{}}var jS="[object Map]";function FS(e){return yr(e)&&Tl(e)==jS}var cu=dr&&dr.isMap,KS=cu?Sl(cu):FS,WS="[object Set]";function zS(e){return yr(e)&&Tl(e)==WS}var uu=dr&&dr.isSet,VS=uu?Sl(uu):zS,US=1,qS=2,GS=4,Ip="[object Arguments]",JS="[object Array]",ZS="[object Boolean]",YS="[object Date]",XS="[object Error]",Ap="[object Function]",QS="[object GeneratorFunction]",eE="[object Map]",nE="[object Number]",Bp="[object Object]",tE="[object RegExp]",rE="[object Set]",iE="[object String]",oE="[object Symbol]",sE="[object WeakMap]",aE="[object ArrayBuffer]",lE="[object DataView]",cE="[object Float32Array]",uE="[object Float64Array]",dE="[object Int8Array]",fE="[object Int16Array]",pE="[object Int32Array]",mE="[object Uint8Array]",vE="[object Uint8ClampedArray]",gE="[object Uint16Array]",hE="[object Uint32Array]",Ve={};Ve[Ip]=Ve[JS]=Ve[aE]=Ve[lE]=Ve[ZS]=Ve[YS]=Ve[cE]=Ve[uE]=Ve[dE]=Ve[fE]=Ve[pE]=Ve[eE]=Ve[nE]=Ve[Bp]=Ve[tE]=Ve[rE]=Ve[iE]=Ve[oE]=Ve[mE]=Ve[vE]=Ve[gE]=Ve[hE]=!0;Ve[XS]=Ve[Ap]=Ve[sE]=!1;function Li(e,n,t,r,i,s){var o,a=n&US,l=n&qS,c=n&GS;if(t&&(o=i?t(e,r,i,s):t(e)),o!==void 0)return o;if(!yt(e))return e;var u=Sr(e);if(u){if(o=pS(e),!a)return pp(e,o)}else{var d=Tl(e),f=d==Ap||d==QS;if(_p(e))return Zy(e,a);if(d==Bp||d==Ip||f&&!i){if(o=l||f?{}:MS(e),!a)return l?tS(e,Gy(o,e)):eS(e,qy(o,e))}else{if(!Ve[d])return i?e:{};o=HS(e,d,a)}}s||(s=new _r);var m=s.get(e);if(m)return m;s.set(e,o),VS(e)?e.forEach(function(P){o.add(Li(P,n,t,P,e,s))}):KS(e)&&e.forEach(function(P,k){o.set(k,Li(P,n,t,k,e,s))});var S=c?l?iS:rS:l?_l:El,E=u?void 0:S(e);return gb(E||e,function(P,k){E&&(k=P,P=e[k]),gp(o,k,Li(P,n,t,k,e,s))}),o}var bE=1,yE=4;function SE(e){return Li(e,bE|yE)}function EE(){var e=arguments.length;if(!e)return[];for(var n=Array(e-1),t=arguments[0],r=e;r--;)n[r-1]=arguments[r];return Oo(Sr(t)?pp(t):[t],Pp(n,1))}var Yo=function(){return Bn.Date.now()},_E="Expected a function",kE=Math.max,TE=Math.min;function du(e,n,t){var r,i,s,o,a,l,c=0,u=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(_E);n=Kc(n)||0,yt(t)&&(u=!!t.leading,d="maxWait"in t,s=d?kE(Kc(t.maxWait)||0,n):s,f="trailing"in t?!!t.trailing:f);function m(b){var C=r,w=i;return r=i=void 0,c=b,o=e.apply(w,C),o}function S(b){return c=b,a=setTimeout(k,n),u?m(b):o}function E(b){var C=b-l,w=b-c,x=n-C;return d?TE(x,s-w):x}function P(b){var C=b-l,w=b-c;return l===void 0||C>=n||C<0||d&&w>=s}function k(){var b=Yo();if(P(b))return T(b);a=setTimeout(k,E(b))}function T(b){return a=void 0,f&&r?m(b):(r=i=void 0,o)}function _(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function v(){return a===void 0?o:T(Yo())}function R(){var b=Yo(),C=P(b);if(r=arguments,i=this,l=b,C){if(a===void 0)return S(l);if(d)return clearTimeout(a),a=setTimeout(k,n),m(l)}return a===void 0&&(a=setTimeout(k,n)),o}return R.cancel=_,R.flush=v,R}var OE=0;function PE(e){var n=++OE;return Hy(e)+n}const Ut=Object.prototype.toString;function dn(e){return Ut.call(e)==="[object Array]"}function qt(e){return Ut.call(e)==="[object Null]"}function St(e){return Ut.call(e)==="[object Boolean]"}function Je(e){return Ut.call(e)==="[object Object]"}const Gi=e=>Ut.call(e)==="[object Promise]";function Cn(e){return Ut.call(e)==="[object String]"}function _e(e){return Ut.call(e)==="[object Number]"&&e===e}function pn(e){return e===void 0}function Xe(e){return typeof e=="function"}function CE(e){return Je(e)&&Object.keys(e).length===0}const Np=e=>(e==null?void 0:e.$)!==void 0,Gt=Symbol("ArcoConfigProvider"),bi={formatYear:"YYYY 年",formatMonth:"YYYY 年 MM 月",today:"今天",view:{month:"月",year:"年",week:"周",day:"日"},month:{long:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"},short:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"}},week:{long:{self:"周",monday:"周一",tuesday:"周二",wednesday:"周三",thursday:"周四",friday:"周五",saturday:"周六",sunday:"周日"},short:{self:"周",monday:"一",tuesday:"二",wednesday:"三",thursday:"四",friday:"五",saturday:"六",sunday:"日"}}},LE={locale:"zh-CN",empty:{description:"暂无数据"},drawer:{okText:"确定",cancelText:"取消"},popconfirm:{okText:"确定",cancelText:"取消"},modal:{okText:"确定",cancelText:"取消"},pagination:{goto:"前往",page:"页",countPerPage:"条/页",total:"共 {0} 条"},table:{okText:"确定",resetText:"重置"},upload:{start:"开始",cancel:"取消",delete:"删除",retry:"点击重试",buttonText:"点击上传",preview:"预览",drag:"点击或拖拽文件到此处上传",dragHover:"释放文件并开始上传",error:"上传失败"},calendar:bi,datePicker:{view:bi.view,month:bi.month,week:bi.week,placeholder:{date:"请选择日期",week:"请选择周",month:"请选择月份",year:"请选择年份",quarter:"请选择季度",time:"请选择时间"},rangePlaceholder:{date:["开始日期","结束日期"],week:["开始周","结束周"],month:["开始月份","结束月份"],year:["开始年份","结束年份"],quarter:["开始季度","结束季度"],time:["开始时间","结束时间"]},selectTime:"选择时间",today:"今天",now:"此刻",ok:"确定"},image:{loading:"加载中"},imagePreview:{fullScreen:"全屏",rotateRight:"向右旋转",rotateLeft:"向左旋转",zoomIn:"放大",zoomOut:"缩小",originalSize:"原始尺寸"},typography:{copied:"已复制",copy:"复制",expand:"展开",collapse:"折叠",edit:"编辑"},form:{validateMessages:{required:"#{field} 是必填项",type:{string:"#{field} 不是合法的文本类型",number:"#{field} 不是合法的数字类型",boolean:"#{field} 不是合法的布尔类型",array:"#{field} 不是合法的数组类型",object:"#{field} 不是合法的对象类型",url:"#{field} 不是合法的 url 地址",email:"#{field} 不是合法的邮箱地址",ip:"#{field} 不是合法的 IP 地址"},number:{min:"`#{value}` 小于最小值 `#{min}`",max:"`#{value}` 大于最大值 `#{max}`",equal:"`#{value}` 不等于 `#{equal}`",range:"`#{value}` 不在 `#{min} ~ #{max}` 范围内",positive:"`#{value}` 不是正数",negative:"`#{value}` 不是负数"},array:{length:"`#{field}` 个数不等于 #{length}",minLength:"`#{field}` 个数最少为 #{minLength}",maxLength:"`#{field}` 个数最多为 #{maxLength}",includes:"#{field} 不包含 #{includes}",deepEqual:"#{field} 不等于 #{deepEqual}",empty:"`#{field}` 不是空数组"},string:{minLength:"字符数最少为 #{minLength}",maxLength:"字符数最多为 #{maxLength}",length:"字符数必须是 #{length}",match:"`#{value}` 不符合模式 #{pattern}",uppercase:"`#{value}` 必须全大写",lowercase:"`#{value}` 必须全小写"},object:{deepEqual:"`#{field}` 不等于期望值",hasKeys:"`#{field}` 不包含必须字段",empty:"`#{field}` 不是对象"},boolean:{true:"期望是 `true`",false:"期望是 `false`"}}}},RE=j("zh-CN"),wE=We({"zh-CN":LE}),Po=()=>{const e=Me(Gt,void 0),n=h(()=>{var i;return(i=e==null?void 0:e.locale)!=null?i:wE[RE.value]}),t=h(()=>n.value.locale);return{i18nMessage:n,locale:t,t:(i,...s)=>{const o=i.split(".");let a=n.value;for(const l of o){if(!a[l])return i;a=a[l]}return Cn(a)&&s.length>0?a.replace(/{(\d+)}/g,(l,c)=>{var u;return(u=s[c])!=null?u:l}):a}}};var xE=Object.defineProperty,IE=Object.defineProperties,AE=Object.getOwnPropertyDescriptors,fu=Object.getOwnPropertySymbols,BE=Object.prototype.hasOwnProperty,NE=Object.prototype.propertyIsEnumerable,pu=(e,n,t)=>n in e?xE(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,DE=(e,n)=>{for(var t in n||(n={}))BE.call(n,t)&&pu(e,t,n[t]);if(fu)for(var t of fu(n))NE.call(n,t)&&pu(e,t,n[t]);return e},$E=(e,n)=>IE(e,AE(n));const HE="A",ME="arco",xa="$arco",en=e=>{var n;return(n=e==null?void 0:e.componentPrefix)!=null?n:HE},nn=(e,n)=>{var t;n&&n.classPrefix&&(e.config.globalProperties[xa]=$E(DE({},(t=e.config.globalProperties[xa])!=null?t:{}),{classPrefix:n.classPrefix}))},oe=e=>{var n,t,r;const i=Tt(),s=Me(Gt,void 0),o=(r=(t=s==null?void 0:s.prefixCls)!=null?t:(n=i==null?void 0:i.appContext.config.globalProperties[xa])==null?void 0:n.classPrefix)!=null?r:ME;return e?`${o}-${e}`:o};var Dp=function(){if(typeof Map<"u")return Map;function e(n,t){var r=-1;return n.some(function(i,s){return i[0]===t?(r=s,!0):!1}),r}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(t){var r=e(this.__entries__,t),i=this.__entries__[r];return i&&i[1]},n.prototype.set=function(t,r){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=r:this.__entries__.push([t,r])},n.prototype.delete=function(t){var r=this.__entries__,i=e(r,t);~i&&r.splice(i,1)},n.prototype.has=function(t){return!!~e(this.__entries__,t)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];t.call(r,o[1],o[0])}},n}()}(),Ia=typeof window<"u"&&typeof document<"u"&&window.document===document,Ji=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),jE=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ji):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),FE=2;function KE(e,n){var t=!1,r=!1,i=0;function s(){t&&(t=!1,e()),r&&a()}function o(){jE(s)}function a(){var l=Date.now();if(t){if(l-i<FE)return;r=!0}else t=!0,r=!1,setTimeout(o,n);i=l}return a}var WE=20,zE=["top","right","bottom","left","width","height","size","weight"],VE=typeof MutationObserver<"u",UE=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=KE(this.refresh.bind(this),WE)}return e.prototype.addObserver=function(n){~this.observers_.indexOf(n)||this.observers_.push(n),this.connected_||this.connect_()},e.prototype.removeObserver=function(n){var t=this.observers_,r=t.indexOf(n);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var n=this.updateObservers_();n&&this.refresh()},e.prototype.updateObservers_=function(){var n=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return n.forEach(function(t){return t.broadcastActive()}),n.length>0},e.prototype.connect_=function(){!Ia||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),VE?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ia||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(n){var t=n.propertyName,r=t===void 0?"":t,i=zE.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),$p=function(e,n){for(var t=0,r=Object.keys(n);t<r.length;t++){var i=r[t];Object.defineProperty(e,i,{value:n[i],enumerable:!1,writable:!1,configurable:!0})}return e},fr=function(e){var n=e&&e.ownerDocument&&e.ownerDocument.defaultView;return n||Ji},Hp=Co(0,0,0,0);function Zi(e){return parseFloat(e)||0}function mu(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return n.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+Zi(s)},0)}function qE(e){for(var n=["top","right","bottom","left"],t={},r=0,i=n;r<i.length;r++){var s=i[r],o=e["padding-"+s];t[s]=Zi(o)}return t}function GE(e){var n=e.getBBox();return Co(0,0,n.width,n.height)}function JE(e){var n=e.clientWidth,t=e.clientHeight;if(!n&&!t)return Hp;var r=fr(e).getComputedStyle(e),i=qE(r),s=i.left+i.right,o=i.top+i.bottom,a=Zi(r.width),l=Zi(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==n&&(a-=mu(r,"left","right")+s),Math.round(l+o)!==t&&(l-=mu(r,"top","bottom")+o)),!YE(e)){var c=Math.round(a+s)-n,u=Math.round(l+o)-t;Math.abs(c)!==1&&(a-=c),Math.abs(u)!==1&&(l-=u)}return Co(i.left,i.top,a,l)}var ZE=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof fr(e).SVGGraphicsElement}:function(e){return e instanceof fr(e).SVGElement&&typeof e.getBBox=="function"}}();function YE(e){return e===fr(e).document.documentElement}function XE(e){return Ia?ZE(e)?GE(e):JE(e):Hp}function QE(e){var n=e.x,t=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return $p(o,{x:n,y:t,width:r,height:i,top:t,right:n+r,bottom:i+t,left:n}),o}function Co(e,n,t,r){return{x:e,y:n,width:t,height:r}}var e_=function(){function e(n){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Co(0,0,0,0),this.target=n}return e.prototype.isActive=function(){var n=XE(this.target);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var n=this.contentRect_;return this.broadcastWidth=n.width,this.broadcastHeight=n.height,n},e}(),n_=function(){function e(n,t){var r=QE(t);$p(this,{target:n,contentRect:r})}return e}(),t_=function(){function e(n,t,r){if(this.activeObservations_=[],this.observations_=new Dp,typeof n!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=n,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof fr(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)||(t.set(n,new e_(n)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof fr(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)&&(t.delete(n),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var n=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&n.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var n=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new n_(r.target,r.broadcastRect())});this.callback_.call(n,t,n),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Mp=typeof WeakMap<"u"?new WeakMap:new Dp,jp=function(){function e(n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=UE.getInstance(),r=new t_(n,t,this);Mp.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){jp.prototype[e]=function(){var n;return(n=Mp.get(this))[e].apply(n,arguments)}});var Pl=function(){return typeof Ji.ResizeObserver<"u"?Ji.ResizeObserver:jp}(),vu;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(vu||(vu={}));var gu;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(gu||(gu={}));const Cl=e=>!!(e&&e.shapeFlag&1),Ll=(e,n)=>!!(e&&e.shapeFlag&6),Fp=(e,n)=>!!(e&&e.shapeFlag&16),r_=(e,n)=>!!(e&&e.shapeFlag&32),rr=e=>{var n,t;if(e)for(const r of e){if(Cl(r)||Ll(r))return r;if(Fp(r,r.children)){const i=rr(r.children);if(i)return i}else if(r_(r,r.children)){const i=(t=(n=r.children).default)==null?void 0:t.call(n);if(i){const s=rr(i);if(s)return s}}else if(dn(r)){const i=rr(r);if(i)return i}}},i_=e=>{if(!e)return!0;for(const n of e)if(n.children)return!1;return!0},Kp=(e,n)=>{if(e&&e.length>0)for(let t=0;t<e.length;t++){const r=e[t];if(Cl(r)||Ll(r)){const s=Xe(n)?n(r):n;return e[t]=bn(r,s,!0),!0}const i=Wp(r);if(i&&i.length>0&&Kp(i,n))return!0}return!1},Wp=e=>{if(Fp(e,e.children))return e.children;if(dn(e))return e},zp=e=>{var n,t;if(Cl(e))return e.el;if(Ll(e)){if(((n=e.el)==null?void 0:n.nodeType)===1)return e.el;if((t=e.component)!=null&&t.subTree){const r=zp(e.component.subTree);if(r)return r}}else{const r=Wp(e);return Vp(r)}},Vp=e=>{if(e&&e.length>0)for(const n of e){const t=zp(n);if(t)return t}},Kr=e=>{if(e)return Xe(e)?e:()=>e};var Rl=Z({name:"ResizeObserver",emits:["resize"],setup(e,{emit:n,slots:t}){let r;const i=j(),s=h(()=>Np(i.value)?i.value.$el:i.value),o=l=>{l&&(r=new Pl(c=>{const u=c[0];n("resize",u)}),r.observe(l))},a=()=>{r&&(r.disconnect(),r=null)};return Oe(s,l=>{r&&a(),l&&o(l)}),Ze(()=>{s.value&&o(s.value)}),kt(()=>{a()}),()=>{var l,c;const u=rr((c=(l=t.default)==null?void 0:l.call(t))!=null?c:[]);return u?bn(u,{ref:i},!0):null}}});const Up=typeof window>"u"?global:window,o_=Up.requestAnimationFrame,hu=Up.cancelAnimationFrame;function bu(e){let n=0;const t=(...r)=>{n&&hu(n),n=o_(()=>{e(...r),n=0})};return t.cancel=()=>{hu(n),n=0},t}const wl=()=>{},qp=()=>{const{body:e}=document,n=document.documentElement;let t;try{t=(window.top||window.self||window).document.body}catch{}return{height:Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight,(t==null?void 0:t.scrollHeight)||0,(t==null?void 0:t.clientHeight)||0),width:Math.max(e.scrollWidth,e.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth,(t==null?void 0:t.scrollWidth)||0,(t==null?void 0:t.clientWidth)||0)}},xl=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),hn=xl?wl:(e,n,t,r=!1)=>{e.addEventListener(n,t,r)},Fn=xl?wl:(e,n,t,r=!1)=>{e.removeEventListener(n,t,r)},s_=(e,n)=>{if(!e||!n)return!1;let t=n;for(;t;){if(t===e)return!0;t=t.parentNode}return!1},Gp=e=>{const n=document.createElement("div");return n.setAttribute("class",`arco-overlay arco-overlay-${e}`),n},a_=(e,n)=>{var t;return xl?wl():(t=(n??document).querySelector(e))!=null?t:void 0},Aa=(e,n)=>{if(Cn(e)){const t=e[0]==="#"?`[id='${e.slice(1)}']`:e;return a_(t,n)}return e},l_=(e,n)=>{const t=e.getBoundingClientRect(),r=n.getBoundingClientRect();return{top:t.top-r.top,bottom:r.bottom-t.bottom,left:t.left-r.left,right:r.right-t.right,width:t.width,height:t.height}},c_=e=>e.tagName==="BODY"?document.documentElement.scrollHeight>window.innerHeight:e.scrollHeight>e.offsetHeight,u_=e=>e.tagName==="BODY"?window.innerWidth-qp().width:e.offsetWidth-e.clientWidth;var he=(e,n)=>{for(const[t,r]of n)e[t]=r;return e};const d_=Z({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:oe("icon-hover")}}});function f_(e,n,t,r,i,s){return B(),X("span",{class:z([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[de(e.$slots,"default")],2)}var yn=he(d_,[["render",f_]]);const p_=Z({name:"IconClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-close`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),m_=["stroke-width","stroke-linecap","stroke-linejoin"],v_=le("path",{d:"M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"},null,-1),g_=[v_];function h_(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},g_,14,m_)}var Xo=he(p_,[["render",h_]]);const Jt=Object.assign(Xo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Xo.name,Xo)}}),b_=Z({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-info-circle-fill`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),y_=["stroke-width","stroke-linecap","stroke-linejoin"],S_=le("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),E_=[S_];function __(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},E_,14,y_)}var Qo=he(b_,[["render",__]]);const Il=Object.assign(Qo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Qo.name,Qo)}}),k_=Z({name:"IconCheckCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-check-circle-fill`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),T_=["stroke-width","stroke-linecap","stroke-linejoin"],O_=le("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",fill:"currentColor",stroke:"none"},null,-1),P_=[O_];function C_(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},P_,14,T_)}var es=he(k_,[["render",C_]]);const Lo=Object.assign(es,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+es.name,es)}}),L_=Z({name:"IconExclamationCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-exclamation-circle-fill`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),R_=["stroke-width","stroke-linecap","stroke-linejoin"],w_=le("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",fill:"currentColor",stroke:"none"},null,-1),x_=[w_];function I_(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},x_,14,R_)}var ns=he(L_,[["render",I_]]);const Ro=Object.assign(ns,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ns.name,ns)}}),A_=Z({name:"IconCloseCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-close-circle-fill`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),B_=["stroke-width","stroke-linecap","stroke-linejoin"],N_=le("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",fill:"currentColor",stroke:"none"},null,-1),D_=[N_];function $_(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},D_,14,B_)}var ts=he(A_,[["render",$_]]);const wo=Object.assign(ts,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ts.name,ts)}});function yu(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Su(e,n){return(!n||e!=="hidden")&&e!=="visible"&&e!=="clip"}function rs(e,n){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var t=getComputedStyle(e,null);return Su(t.overflowY,n)||Su(t.overflowX,n)||function(r){var i=function(s){if(!s.ownerDocument||!s.ownerDocument.defaultView)return null;try{return s.ownerDocument.defaultView.frameElement}catch{return null}}(r);return!!i&&(i.clientHeight<r.scrollHeight||i.clientWidth<r.scrollWidth)}(e)}return!1}function yi(e,n,t,r,i,s,o,a){return s<e&&o>n||s>e&&o<n?0:s<=e&&a<=t||o>=n&&a>=t?s-e-r:o>n&&a<t||s<e&&a>t?o-n+i:0}var Eu=function(e,n){var t=window,r=n.scrollMode,i=n.block,s=n.inline,o=n.boundary,a=n.skipOverflowHiddenElements,l=typeof o=="function"?o:function(g){return g!==o};if(!yu(e))throw new TypeError("Invalid target");for(var c,u,d=document.scrollingElement||document.documentElement,f=[],m=e;yu(m)&&l(m);){if((m=(u=(c=m).parentElement)==null?c.getRootNode().host||null:u)===d){f.push(m);break}m!=null&&m===document.body&&rs(m)&&!rs(document.documentElement)||m!=null&&rs(m,a)&&f.push(m)}for(var S=t.visualViewport?t.visualViewport.width:innerWidth,E=t.visualViewport?t.visualViewport.height:innerHeight,P=window.scrollX||pageXOffset,k=window.scrollY||pageYOffset,T=e.getBoundingClientRect(),_=T.height,v=T.width,R=T.top,b=T.right,C=T.bottom,w=T.left,x=i==="start"||i==="nearest"?R:i==="end"?C:R+_/2,I=s==="center"?w+v/2:s==="end"?b:w,H=[],D=0;D<f.length;D++){var F=f[D],ie=F.getBoundingClientRect(),ce=ie.height,te=ie.width,re=ie.top,U=ie.right,ge=ie.bottom,q=ie.left;if(r==="if-needed"&&R>=0&&w>=0&&C<=E&&b<=S&&R>=re&&C<=ge&&w>=q&&b<=U)return H;var se=getComputedStyle(F),fe=parseInt(se.borderLeftWidth,10),Ce=parseInt(se.borderTopWidth,10),Ne=parseInt(se.borderRightWidth,10),Te=parseInt(se.borderBottomWidth,10),me=0,$=0,Y="offsetWidth"in F?F.offsetWidth-F.clientWidth-fe-Ne:0,G="offsetHeight"in F?F.offsetHeight-F.clientHeight-Ce-Te:0,ue="offsetWidth"in F?F.offsetWidth===0?0:te/F.offsetWidth:0,Le="offsetHeight"in F?F.offsetHeight===0?0:ce/F.offsetHeight:0;if(d===F)me=i==="start"?x:i==="end"?x-E:i==="nearest"?yi(k,k+E,E,Ce,Te,k+x,k+x+_,_):x-E/2,$=s==="start"?I:s==="center"?I-S/2:s==="end"?I-S:yi(P,P+S,S,fe,Ne,P+I,P+I+v,v),me=Math.max(0,me+k),$=Math.max(0,$+P);else{me=i==="start"?x-re-Ce:i==="end"?x-ge+Te+G:i==="nearest"?yi(re,ge,ce,Ce,Te+G,x,x+_,_):x-(re+ce/2)+G/2,$=s==="start"?I-q-fe:s==="center"?I-(q+te/2)+Y/2:s==="end"?I-U+Ne+Y:yi(q,U,te,fe,Ne+Y,I,I+v,v);var y=F.scrollLeft,p=F.scrollTop;x+=p-(me=Math.max(0,Math.min(p+me/Le,F.scrollHeight-ce/Le+G))),I+=y-($=Math.max(0,Math.min(y+$/ue,F.scrollWidth-te/ue+Y)))}H.push({el:F,top:me,left:$})}return H};const Jp=["info","success","warning","error"],Et=["onFocus","onFocusin","onFocusout","onBlur","onChange","onBeforeinput","onInput","onReset","onSubmit","onInvalid","onKeydown","onKeypress","onKeyup","onCopy","onCut","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onSelect","autocomplete","autofocus","maxlength","minlength","name","pattern","readonly","required"],H_=Z({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-loading`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),M_=["stroke-width","stroke-linecap","stroke-linejoin"],j_=le("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),F_=[j_];function K_(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},F_,14,M_)}var is=he(H_,[["render",K_]]);const Ot=Object.assign(is,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+is.name,is)}}),W_=Z({name:"FeedbackIcon",components:{IconLoading:Ot,IconCheckCircleFill:Lo,IconExclamationCircleFill:Ro,IconCloseCircleFill:wo},props:{type:{type:String}},setup(e){const n=oe("feedback-icon");return{cls:h(()=>[n,`${n}-status-${e.type}`])}}});function z_(e,n,t,r,i,s){const o=ae("icon-loading"),a=ae("icon-check-circle-fill"),l=ae("icon-exclamation-circle-fill"),c=ae("icon-close-circle-fill");return B(),X("span",{class:z(e.cls)},[e.type==="validating"?(B(),pe(o,{key:0})):e.type==="success"?(B(),pe(a,{key:1})):e.type==="warning"?(B(),pe(l,{key:2})):e.type==="error"?(B(),pe(c,{key:3})):Ee("v-if",!0)],2)}var Al=he(W_,[["render",z_]]);const Bl={key:"Enter",code:"Enter"},V_={key:"Backspace",code:"Backspace"};var U_=Object.defineProperty,_u=Object.getOwnPropertySymbols,q_=Object.prototype.hasOwnProperty,G_=Object.prototype.propertyIsEnumerable,ku=(e,n,t)=>n in e?U_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,J_=(e,n)=>{for(var t in n||(n={}))q_.call(n,t)&&ku(e,t,n[t]);if(_u)for(var t of _u(n))G_.call(n,t)&&ku(e,t,n[t]);return e};const kr=(e,n)=>{const t=J_({},e);for(const r of n)r in t&&delete t[r];return t};function li(e,n){const t={};return n.forEach(r=>{const i=r;r in e&&(t[i]=e[i])}),t}const Ba=Symbol("ArcoFormItemContext"),Nl=Symbol("ArcoFormContext"),Nn=({size:e,disabled:n,error:t,uninject:r}={})=>{const i=r?{}:Me(Ba,{}),s=h(()=>{var u;return(u=e==null?void 0:e.value)!=null?u:i.size}),o=h(()=>(n==null?void 0:n.value)||i.disabled),a=h(()=>(t==null?void 0:t.value)||i.error),l=Wi(i,"feedback"),c=Wi(i,"eventHandlers");return{formItemCtx:i,mergedSize:s,mergedDisabled:o,mergedError:a,feedback:l,eventHandlers:c}},Pt=(e,{defaultValue:n="medium"}={})=>{const t=Me(Gt,void 0);return{mergedSize:h(()=>{var i,s;return(s=(i=e==null?void 0:e.value)!=null?i:t==null?void 0:t.size)!=null?s:n})}};function Zp(e){const n=j();function t(){if(!e.value)return;const{selectionStart:i,selectionEnd:s,value:o}=e.value;if(i==null||s==null)return;const a=o.slice(0,Math.max(0,i)),l=o.slice(Math.max(0,s));n.value={selectionStart:i,selectionEnd:s,value:o,beforeTxt:a,afterTxt:l}}function r(){if(!e.value||!n.value)return;const{value:i}=e.value,{beforeTxt:s,afterTxt:o,selectionStart:a}=n.value;if(!s||!o||!a)return;let l=i.length;if(i.endsWith(o))l=i.length-o.length;else if(i.startsWith(s))l=s.length;else{const c=s[a-1],u=i.indexOf(c,a-1);u!==-1&&(l=u+1)}e.value.setSelectionRange(l,l)}return[t,r]}var Z_=Object.defineProperty,Tu=Object.getOwnPropertySymbols,Y_=Object.prototype.hasOwnProperty,X_=Object.prototype.propertyIsEnumerable,Ou=(e,n,t)=>n in e?Z_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Pu=(e,n)=>{for(var t in n||(n={}))Y_.call(n,t)&&Ou(e,t,n[t]);if(Tu)for(var t of Tu(n))X_.call(n,t)&&Ou(e,t,n[t]);return e},Wr=Z({name:"Input",inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},size:{type:String},allowClear:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},placeholder:String,maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},wordLength:{type:Function},wordSlice:{type:Function},inputAttrs:{type:Object},type:{type:String,default:"text"}},emits:{"update:modelValue":e=>!0,input:(e,n)=>!0,change:(e,n)=>!0,pressEnter:e=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{size:i,disabled:s,error:o,modelValue:a}=De(e),l=oe("input"),c=j(),{mergedSize:u,mergedDisabled:d,mergedError:f,feedback:m,eventHandlers:S}=Nn({size:i,disabled:s,error:o}),{mergedSize:E}=Pt(u),[P,k]=Zp(c),T=j(e.defaultValue),_=h(()=>{var p;return(p=e.modelValue)!=null?p:T.value});Oe(a,p=>{(pn(p)||qt(p))&&(T.value="")});let v=_.value;const R=j(!1),b=h(()=>e.allowClear&&!d.value&&!!_.value),C=j(!1),w=j(""),x=p=>{var g;return Xe(e.wordLength)?e.wordLength(p):(g=p.length)!=null?g:0},I=h(()=>x(_.value)),H=h(()=>f.value||!!(Je(e.maxLength)&&e.maxLength.errorOnly&&I.value>F.value)),D=h(()=>Je(e.maxLength)&&!!e.maxLength.errorOnly),F=h(()=>Je(e.maxLength)?e.maxLength.length:e.maxLength),ie=h(()=>{const p=x("a");return Math.floor(F.value/p)}),ce=p=>{var g,L;F.value&&!D.value&&x(p)>F.value&&(p=(L=(g=e.wordSlice)==null?void 0:g.call(e,p,F.value))!=null?L:p.slice(0,ie.value)),T.value=p,n("update:modelValue",p)},te=p=>{c.value&&p.target!==c.value&&(p.preventDefault(),c.value.focus())},re=(p,g)=>{var L,A;p!==v&&(v=p,n("change",p,g),(A=(L=S.value)==null?void 0:L.onChange)==null||A.call(L,g))},U=p=>{var g,L;R.value=!0,v=_.value,n("focus",p),(L=(g=S.value)==null?void 0:g.onFocus)==null||L.call(g,p)},ge=p=>{var g,L;R.value=!1,re(_.value,p),n("blur",p),(L=(g=S.value)==null?void 0:g.onBlur)==null||L.call(g,p)},q=p=>{var g,L,A;const{value:W,selectionStart:ee,selectionEnd:ne}=p.target;if(p.type==="compositionend"){if(C.value=!1,w.value="",F.value&&!D.value&&I.value>=F.value&&x(W)>F.value&&ee===ne){se();return}ce(W),n("input",W,p),(L=(g=S.value)==null?void 0:g.onInput)==null||L.call(g,p),se()}else C.value=!0,w.value=_.value+((A=p.data)!=null?A:"")},se=()=>{P(),Fe(()=>{c.value&&_.value!==c.value.value&&(c.value.value=_.value,k())})},fe=p=>{var g,L;const{value:A}=p.target;if(!C.value){if(F.value&&!D.value&&I.value>=F.value&&x(A)>F.value&&p.inputType==="insertText"){se();return}ce(A),n("input",A,p),(L=(g=S.value)==null?void 0:g.onInput)==null||L.call(g,p),se()}},Ce=p=>{ce(""),re("",p),n("clear",p)},Ne=p=>{const g=p.key||p.code;!C.value&&g===Bl.key&&(re(_.value,p),n("pressEnter",p))},Te=h(()=>[`${l}-outer`,`${l}-outer-size-${E.value}`,{[`${l}-outer-has-suffix`]:!!t.suffix,[`${l}-outer-disabled`]:d.value}]),me=h(()=>[`${l}-wrapper`,{[`${l}-error`]:H.value,[`${l}-disabled`]:d.value,[`${l}-focus`]:R.value}]),$=h(()=>[l,`${l}-size-${E.value}`]),Y=h(()=>kr(r,Et)),G=h(()=>li(r,Et)),ue=h(()=>{const p=Pu(Pu({},G.value),e.inputAttrs);return H.value&&(p["aria-invalid"]=!0),p}),Le=p=>{var g;return O("span",He({class:me.value,onMousedown:te},p?void 0:Y.value),[t.prefix&&O("span",{class:`${l}-prefix`},[t.prefix()]),O("input",He({ref:c,class:$.value,value:_.value,type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:d.value,onInput:fe,onKeydown:Ne,onFocus:U,onBlur:ge,onCompositionstart:q,onCompositionupdate:q,onCompositionend:q},ue.value),null),b.value&&O(yn,{prefix:l,class:`${l}-clear-btn`,onClick:Ce},{default:()=>[O(Jt,null,null)]}),(t.suffix||!!e.maxLength&&e.showWordLimit||!!m.value)&&O("span",{class:[`${l}-suffix`,{[`${l}-suffix-has-feedback`]:m.value}]},[!!e.maxLength&&e.showWordLimit&&O("span",{class:`${l}-word-limit`},[I.value,Ae("/"),F.value]),(g=t.suffix)==null?void 0:g.call(t),!!m.value&&O(Al,{type:m.value},null)])])};return{inputRef:c,render:()=>t.prepend||t.append?O("span",He({class:Te.value},Y.value),[t.prepend&&O("span",{class:`${l}-prepend`},[t.prepend()]),Le(!0),t.append&&O("span",{class:`${l}-append`},[t.append()])]):Le()}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}});const Q_=Z({name:"IconSearch",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-search`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),ek=["stroke-width","stroke-linecap","stroke-linejoin"],nk=le("path",{d:"M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"},null,-1),tk=[nk];function rk(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},tk,14,ek)}var os=he(Q_,[["render",rk]]);const Na=Object.assign(os,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+os.name,os)}}),Yp=Symbol("ArcoButtonGroup"),ik=Z({name:"Button",components:{IconLoading:Ot},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:n}){const{size:t,disabled:r}=De(e),i=oe("btn"),s=Me(Yp,void 0),o=h(()=>{var m;return(m=t.value)!=null?m:s==null?void 0:s.size}),a=h(()=>!!(r.value||s!=null&&s.disabled)),{mergedSize:l,mergedDisabled:c}=Nn({size:o,disabled:a}),{mergedSize:u}=Pt(l),d=h(()=>{var m,S,E,P,k,T;return[i,`${i}-${(S=(m=e.type)!=null?m:s==null?void 0:s.type)!=null?S:"secondary"}`,`${i}-shape-${(P=(E=e.shape)!=null?E:s==null?void 0:s.shape)!=null?P:"square"}`,`${i}-size-${u.value}`,`${i}-status-${(T=(k=e.status)!=null?k:s==null?void 0:s.status)!=null?T:"normal"}`,{[`${i}-long`]:e.long,[`${i}-loading`]:e.loading,[`${i}-disabled`]:c.value,[`${i}-link`]:Cn(e.href)}]});return{prefixCls:i,cls:d,mergedDisabled:c,handleClick:m=>{if(e.disabled||e.loading){m.preventDefault();return}n("click",m)}}}}),ok=["href"],sk=["type","disabled"];function ak(e,n,t,r,i,s){const o=ae("icon-loading");return e.href?(B(),X("a",{key:0,class:z([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:n[0]||(n[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(B(),X("span",{key:0,class:z(`${e.prefixCls}-icon`)},[e.loading?(B(),pe(o,{key:0,spin:"true"})):de(e.$slots,"icon",{key:1})],2)):Ee("v-if",!0),de(e.$slots,"default")],10,ok)):(B(),X("button",{key:1,class:z([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:n[1]||(n[1]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(B(),X("span",{key:0,class:z(`${e.prefixCls}-icon`)},[e.loading?(B(),pe(o,{key:0,spin:!0})):de(e.$slots,"icon",{key:1})],2)):Ee("v-if",!0),de(e.$slots,"default")],10,sk))}var ss=he(ik,[["render",ak]]);const lk=Z({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:n,size:t,status:r,disabled:i,shape:s}=De(e),o=oe("btn-group");return fn(Yp,We({type:n,size:t,shape:s,status:r,disabled:i})),{prefixCls:o}}});function ck(e,n,t,r,i,s){return B(),X("div",{class:z(e.prefixCls)},[de(e.$slots,"default")],2)}var Ri=he(lk,[["render",ck]]);const nt=Object.assign(ss,{Group:Ri,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+ss.name,ss),e.component(t+Ri.name,Ri)}});var as=Z({name:"InputSearch",props:{searchButton:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String},buttonText:{type:String},buttonProps:{type:Object}},emits:{search:(e,n)=>!0},setup(e,{emit:n,slots:t}){const{size:r}=De(e),i=oe("input-search"),{mergedSize:s}=Pt(r),o=j(),a=d=>{o.value.inputRef&&n("search",o.value.inputRef.value,d)},l=()=>{var d;return O(Ke,null,[e.loading?O(Ot,null,null):O(yn,{onClick:a},{default:()=>[O(Na,null,null)]}),(d=t.suffix)==null?void 0:d.call(t)])},c=()=>{var d;let f={};return e.buttonText||t["button-default"]||t["button-icon"]?f={default:(d=t["button-default"])!=null?d:e.buttonText?()=>e.buttonText:void 0,icon:t["button-icon"]}:f={icon:()=>O(Na,null,null)},O(nt,He({type:"primary",class:`${i}-btn`,disabled:e.disabled,size:s.value,loading:e.loading},e.buttonProps,{onClick:a}),f)};return{inputRef:o,render:()=>O(Wr,{ref:o,class:i,size:s.value,disabled:e.disabled},{prepend:t.prepend,prefix:t.prefix,suffix:e.searchButton?t.suffix:l,append:e.searchButton?c:t.append})}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}});const uk=Z({name:"IconEye",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-eye`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),dk=["stroke-width","stroke-linecap","stroke-linejoin"],fk=le("path",{"clip-rule":"evenodd",d:"M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"},null,-1),pk=le("path",{d:"M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"},null,-1),mk=[fk,pk];function vk(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},mk,14,dk)}var ls=he(uk,[["render",vk]]);const Xp=Object.assign(ls,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ls.name,ls)}}),gk=Z({name:"IconEyeInvisible",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-eye-invisible`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),hk=["stroke-width","stroke-linecap","stroke-linejoin"],bk=le("path",{d:"M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"},null,-1),yk=le("path",{d:"M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"},null,-1),Sk=[bk,yk];function Ek(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Sk,14,hk)}var cs=he(gk,[["render",Ek]]);const _k=Object.assign(cs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+cs.name,cs)}});function kk(e){const n=j(e);return[n,r=>{n.value=r}]}function Qp(e,n){const{value:t}=De(n),[r,i]=kk(pn(t.value)?e:t.value);return Oe(t,o=>{pn(o)&&i(void 0)}),[h(()=>pn(t.value)?r.value:t.value),i,r]}const Tk=Z({name:"InputPassword",components:{IconEye:Xp,IconEyeInvisible:_k,AIconHover:yn,AInput:Wr},props:{visibility:{type:Boolean,default:void 0},defaultVisibility:{type:Boolean,default:!0},invisibleButton:{type:Boolean,default:!0}},emits:["visibility-change","update:visibility"],setup(e,{emit:n}){const{visibility:t,defaultVisibility:r}=De(e),i=j(),s=()=>{l(!o.value)},[o,a]=Qp(r.value,We({value:t})),l=c=>{c!==o.value&&(n("visibility-change",c),n("update:visibility",c),a(c))};return{inputRef:i,mergedVisible:o,handleInvisible:s}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}}});function Ok(e,n,t,r,i,s){const o=ae("icon-eye"),a=ae("icon-eye-invisible"),l=ae("a-icon-hover"),c=ae("a-input");return B(),pe(c,{ref:"inputRef",type:e.mergedVisible?"password":"text"},Xr({_:2},[e.$slots.prepend?{name:"prepend",fn:K(()=>[de(e.$slots,"prepend")])}:void 0,e.$slots.prefix?{name:"prefix",fn:K(()=>[de(e.$slots,"prefix")])}:void 0,e.invisibleButton||e.$slots.suffix?{name:"suffix",fn:K(()=>[e.invisibleButton?(B(),pe(l,{key:0,onClick:e.handleInvisible,onMousedown:n[0]||(n[0]=Xn(()=>{},["prevent"])),onMouseup:n[1]||(n[1]=Xn(()=>{},["prevent"]))},{default:K(()=>[e.mergedVisible?(B(),pe(a,{key:1})):(B(),pe(o,{key:0}))]),_:1},8,["onClick"])):Ee("v-if",!0),de(e.$slots,"suffix")])}:void 0,e.$slots.append?{name:"append",fn:K(()=>[de(e.$slots,"append")])}:void 0]),1032,["type"])}var us=he(Tk,[["render",Ok]]);const Pk=Z({name:"InputGroup",setup(){return{prefixCls:oe("input-group")}}});function Ck(e,n,t,r,i,s){return B(),X("div",{class:z(e.prefixCls)},[de(e.$slots,"default")],2)}var ds=he(Pk,[["render",Ck]]);const Lk=Object.assign(Wr,{Search:as,Password:us,Group:ds,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Wr.name,Wr),e.component(t+ds.name,ds),e.component(t+as.name,as),e.component(t+us.name,us)}});var Rk=Object.defineProperty,Cu=Object.getOwnPropertySymbols,wk=Object.prototype.hasOwnProperty,xk=Object.prototype.propertyIsEnumerable,Lu=(e,n,t)=>n in e?Rk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ar=(e,n)=>{for(var t in n||(n={}))wk.call(n,t)&&Lu(e,t,n[t]);if(Cu)for(var t of Cu(n))xk.call(n,t)&&Lu(e,t,n[t]);return e};const Ik=()=>{const{height:e,width:n}=qp();return{width:Math.min(n,window.innerWidth),height:Math.min(e,window.innerHeight)}},Ru=(e,n)=>{var t,r;const i=e.getBoundingClientRect();return{top:i.top,bottom:i.bottom,left:i.left,right:i.right,scrollTop:i.top-n.top,scrollBottom:i.bottom-n.top,scrollLeft:i.left-n.left,scrollRight:i.right-n.left,width:(t=e.offsetWidth)!=null?t:e.clientWidth,height:(r=e.offsetHeight)!=null?r:e.clientHeight}},Ak=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},Si=(e,n)=>{switch(n){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},Bk=(e,n,{containerRect:t,triggerRect:r,popupRect:i,offset:s,translate:o})=>{const a=Ak(e),l=Ik(),c={top:t.top+n.top,bottom:l.height-(t.top+n.top+i.height),left:t.left+n.left,right:l.width-(t.left+n.left+i.width)};let u=e;if(a==="top"&&c.top<0)if(r.top>i.height)n.top=-t.top;else{const d=Br("bottom",r,i,{offset:s,translate:o});l.height-(t.top+d.top+i.height)>0&&(u=Si(e,"bottom"),n.top=d.top)}if(a==="bottom"&&c.bottom<0)if(l.height-r.bottom>i.height)n.top=-t.top+(l.height-i.height);else{const d=Br("top",r,i,{offset:s,translate:o});t.top+d.top>0&&(u=Si(e,"top"),n.top=d.top)}if(a==="left"&&c.left<0)if(r.left>i.width)n.left=-t.left;else{const d=Br("right",r,i,{offset:s,translate:o});l.width-(t.left+d.left+i.width)>0&&(u=Si(e,"right"),n.left=d.left)}if(a==="right"&&c.right<0)if(l.width-r.right>i.width)n.left=-t.left+(l.width-i.width);else{const d=Br("left",r,i,{offset:s,translate:o});t.left+d.left>0&&(u=Si(e,"left"),n.left=d.left)}return(a==="top"||a==="bottom")&&(c.left<0?n.left=-t.left:c.right<0&&(n.left=-t.left+(l.width-i.width))),(a==="left"||a==="right")&&(c.top<0?n.top=-t.top:c.bottom<0&&(n.top=-t.top+(l.height-i.height))),{popupPosition:n,position:u}},Br=(e,n,t,{offset:r=0,translate:i=[0,0]}={})=>{var s;const o=(s=dn(i)?i:i[e])!=null?s:[0,0];switch(e){case"top":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+o[0],top:n.scrollTop-t.height-r+o[1]};case"tl":return{left:n.scrollLeft+o[0],top:n.scrollTop-t.height-r+o[1]};case"tr":return{left:n.scrollRight-t.width+o[0],top:n.scrollTop-t.height-r+o[1]};case"bottom":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+o[0],top:n.scrollBottom+r+o[1]};case"bl":return{left:n.scrollLeft+o[0],top:n.scrollBottom+r+o[1]};case"br":return{left:n.scrollRight-t.width+o[0],top:n.scrollBottom+r+o[1]};case"left":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+o[1]};case"lt":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollTop+o[1]};case"lb":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollBottom-t.height+o[1]};case"right":return{left:n.scrollRight+r+o[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+o[1]};case"rt":return{left:n.scrollRight+r+o[0],top:n.scrollTop+o[1]};case"rb":return{left:n.scrollRight+r+o[0],top:n.scrollBottom-t.height+o[1]};default:return{left:0,top:0}}},Nk=e=>{let n="0";["top","bottom"].includes(e)?n="50%":["left","lt","lb","tr","br"].includes(e)&&(n="100%");let t="0";return["left","right"].includes(e)?t="50%":["top","tl","tr","lt","rt"].includes(e)&&(t="100%"),`${n} ${t}`},Dk=(e,n,t,r,{offset:i=0,translate:s=[0,0],customStyle:o={},autoFitPosition:a=!1}={})=>{let l=e,c=Br(e,t,r,{offset:i,translate:s});if(a){const d=Bk(e,c,{containerRect:n,popupRect:r,triggerRect:t,offset:i,translate:s});c=d.popupPosition,l=d.position}return{style:Ar({left:`${c.left}px`,top:`${c.top}px`},o),position:l}},$k=(e,n,t,{customStyle:r={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let s=Math.abs(n.scrollLeft+n.width/2-t.scrollLeft);return s>t.width-8&&(n.width>t.width?s=t.width/2:s=t.width-8),["top","tl","tr"].includes(e)?Ar({left:`${s}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},r):Ar({left:`${s}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)}let i=Math.abs(n.scrollTop+n.height/2-t.scrollTop);return i>t.height-8&&(n.height>t.height?i=t.height/2:i=t.height-8),["left","lt","lb"].includes(e)?Ar({top:`${i}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},r):Ar({top:`${i}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)},Hk=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,wu=e=>{var n;const t=[];let r=e;for(;r&&r!==document.documentElement;)Hk(r)&&t.push(r),r=(n=r.parentElement)!=null?n:void 0;return t},em=()=>{const e={},n=j(),t=()=>{const r=Vp(e.value);r!==n.value&&(n.value=r)};return Ze(()=>t()),_t(()=>t()),{children:e,firstElement:n}};var Yi=Z({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:n,slots:t}){const{children:r,firstElement:i}=em();let s;const o=l=>{l&&(s=new Pl(c=>{const u=c[0];n("resize",u)}),s.observe(l))},a=()=>{s&&(s.disconnect(),s=null)};return Oe(i,l=>{s&&a(),l&&o(l)}),Rn(()=>{s&&a()}),()=>{var l;return r.value=(l=t.default)==null?void 0:l.call(t),r.value}}});function Mk(e,n){const t=j(e[n]);return _t(()=>{const r=e[n];t.value!==r&&(t.value=r)}),t}const xu=Symbol("ArcoTrigger"),jk=1e3,Fk=5e3,Kk=1;class Wk{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=n=>(n==="message"?Array.from(this.popupStack.message).pop()||Fk:Array.from(this.popupStack.popup).pop()||jk)+Kk,this.add=n=>{const t=this.getNextZIndex(n);return this.popupStack[n].add(t),n==="dialog"&&this.popupStack.popup.add(t),t},this.delete=(n,t)=>{this.popupStack[t].delete(n),t==="dialog"&&this.popupStack.popup.delete(n)},this.isLastDialog=n=>this.popupStack.dialog.size>1?n===Array.from(this.popupStack.dialog).pop():!0}}const fs=new Wk;function Dl(e,{visible:n,runOnMounted:t}={}){const r=j(0),i=()=>{r.value=fs.add(e)},s=()=>{fs.delete(r.value,e)},o=()=>e==="dialog"?fs.isLastDialog(r.value):!1;return Oe(()=>n==null?void 0:n.value,a=>{a?i():s()},{immediate:!0}),t&&(Ze(()=>{i()}),Rn(()=>{s()})),{zIndex:rl(r),open:i,close:s,isLastDialog:o}}const zk=({elementRef:e,onResize:n})=>{let t;return{createResizeObserver:()=>{e.value&&(t=new Pl(s=>{const o=s[0];Xe(n)&&n(o)}),t.observe(e.value))},destroyResizeObserver:()=>{t&&(t.disconnect(),t=null)}}};var nm=Z({name:"ClientOnly",setup(e,{slots:n}){const t=j(!1);return Ze(()=>t.value=!0),()=>{var r;return t.value?(r=n.default)==null?void 0:r.call(n):null}}});const tm=({popupContainer:e,visible:n,defaultContainer:t="body",documentContainer:r})=>{const i=j(e.value),s=j(),o=()=>{const a=Aa(e.value),l=a?e.value:t,c=a??(r?document.documentElement:Aa(t));l!==i.value&&(i.value=l),c!==s.value&&(s.value=c)};return Ze(()=>o()),Oe(n,a=>{i.value!==e.value&&a&&o()}),{teleportContainer:i,containerRef:s}};var Vk=Object.defineProperty,Uk=Object.defineProperties,qk=Object.getOwnPropertyDescriptors,Iu=Object.getOwnPropertySymbols,Gk=Object.prototype.hasOwnProperty,Jk=Object.prototype.propertyIsEnumerable,Au=(e,n,t)=>n in e?Vk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Zk=(e,n)=>{for(var t in n||(n={}))Gk.call(n,t)&&Au(e,t,n[t]);if(Iu)for(var t of Iu(n))Jk.call(n,t)&&Au(e,t,n[t]);return e},Yk=(e,n)=>Uk(e,qk(n));const Xk=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var ps=Z({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1},scrollToClose:{type:Boolean,default:!1},scrollToCloseDistance:{type:Number,default:0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{popupContainer:i}=De(e),s=oe("trigger"),o=h(()=>kr(r,Xk)),a=Me(Gt,void 0),l=h(()=>[].concat(e.trigger)),c=new Set,u=Me(xu,void 0),{children:d,firstElement:f}=em(),m=j(),S=j(e.defaultPopupVisible),E=j(e.position),P=j({}),k=j({}),T=j({}),_=j(),v=j({top:0,left:0});let R=null,b=null;const C=h(()=>{var N;return(N=e.popupVisible)!=null?N:S.value}),{teleportContainer:w,containerRef:x}=tm({popupContainer:i,visible:C,documentContainer:!0}),{zIndex:I}=Dl("popup",{visible:C});let H=0,D=!1,F=!1;const ie=()=>{H&&(window.clearTimeout(H),H=0)},ce=N=>{if(e.alignPoint){const{pageX:V,pageY:be}=N;v.value={top:be,left:V}}},te=()=>{if(!f.value||!m.value||!x.value)return;const N=x.value.getBoundingClientRect(),V=e.alignPoint?{top:v.value.top,bottom:v.value.top,left:v.value.left,right:v.value.left,scrollTop:v.value.top,scrollBottom:v.value.top,scrollLeft:v.value.left,scrollRight:v.value.left,width:0,height:0}:Ru(f.value,N),be=()=>Ru(m.value,N),rn=be(),{style:on,position:Sn}=Dk(e.position,N,V,rn,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(k.value={transformOrigin:Nk(Sn)}),e.autoFitPopupMinWidth?on.minWidth=`${V.width}px`:e.autoFitPopupWidth&&(on.width=`${V.width}px`),E.value!==Sn&&(E.value=Sn),P.value=on,e.showArrow&&Fe(()=>{T.value=$k(Sn,V,be(),{customStyle:e.arrowStyle})})},re=(N,V)=>{if(N===C.value&&H===0)return;const be=()=>{S.value=N,n("update:popupVisible",N),n("popupVisibleChange",N),N&&Fe(()=>{te()})};N||(R=null,b=null),V?(ie(),N!==C.value&&(H=window.setTimeout(be,V))):be()},U=N=>{var V;(V=r.onClick)==null||V.call(r,N),!(e.disabled||C.value&&!e.clickToClose)&&(l.value.includes("click")?(ce(N),re(!C.value)):l.value.includes("contextMenu")&&C.value&&re(!1))},ge=N=>{var V;(V=r.onMouseenter)==null||V.call(r,N),!(e.disabled||!l.value.includes("hover"))&&(ce(N),re(!0,e.mouseEnterDelay))},q=N=>{u==null||u.onMouseenter(N),ge(N)},se=N=>{var V;(V=r.onMouseleave)==null||V.call(r,N),!(e.disabled||!l.value.includes("hover"))&&re(!1,e.mouseLeaveDelay)},fe=N=>{u==null||u.onMouseleave(N),se(N)},Ce=N=>{var V;(V=r.onFocusin)==null||V.call(r,N),!(e.disabled||!l.value.includes("focus"))&&re(!0,e.focusDelay)},Ne=N=>{var V;(V=r.onFocusout)==null||V.call(r,N),!(e.disabled||!l.value.includes("focus"))&&e.blurToClose&&re(!1)},Te=N=>{var V;(V=r.onContextmenu)==null||V.call(r,N),!(e.disabled||!l.value.includes("contextMenu")||C.value&&!e.clickToClose)&&(ce(N),re(!C.value),N.preventDefault())};fn(xu,We({onMouseenter:q,onMouseleave:fe,addChildRef:N=>{c.add(N),u==null||u.addChildRef(N)},removeChildRef:N=>{c.delete(N),u==null||u.removeChildRef(N)}}));const Y=()=>{Fn(document.documentElement,"mousedown",Le),D=!1},G=Mk(t,"content"),ue=h(()=>{var N;return e.hideEmpty&&i_((N=G.value)==null?void 0:N.call(G))}),Le=N=>{var V,be,rn;if(!((V=f.value)!=null&&V.contains(N.target)||(be=m.value)!=null&&be.contains(N.target))){for(const on of c)if((rn=on.value)!=null&&rn.contains(N.target))return;Y(),re(!1)}},y=(N,V)=>{const[be,rn]=N,{scrollTop:on,scrollLeft:Sn}=V;return Math.abs(on-be)>=e.scrollToCloseDistance||Math.abs(Sn-rn)>=e.scrollToCloseDistance},p=bu(N=>{if(C.value)if(e.scrollToClose||a!=null&&a.scrollToClose){const V=N.target;R||(R=[V.scrollTop,V.scrollLeft]),y(R,V)?re(!1):te()}else te()}),g=()=>{Fn(window,"scroll",L),F=!1},L=bu(N=>{const V=N.target.documentElement;b||(b=[V.scrollTop,V.scrollLeft]),y(b,V)&&(re(!1),g())}),A=()=>{C.value&&te()},W=()=>{A(),n("resize")},ee=N=>{e.preventFocus&&N.preventDefault()};u==null||u.addChildRef(m);const ne=h(()=>C.value?e.openedClass:void 0);let Q;Oe(C,N=>{if(e.clickOutsideToClose&&(!N&&D?Y():N&&!D&&(hn(document.documentElement,"mousedown",Le),D=!0)),(e.scrollToClose||a!=null&&a.scrollToClose)&&(hn(window,"scroll",L),F=!0),e.updateAtScroll||a!=null&&a.updateAtScroll){if(N){Q=wu(f.value);for(const V of Q)V.addEventListener("scroll",p)}else if(Q){for(const V of Q)V.removeEventListener("scroll",p);Q=void 0}}N&&(Se.value=!0)}),Oe(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{C.value&&te()});const{createResizeObserver:J,destroyResizeObserver:ve}=zk({elementRef:x,onResize:A});Ze(()=>{if(J(),C.value&&(te(),e.clickOutsideToClose&&!D&&(hn(document.documentElement,"mousedown",Le),D=!0),e.updateAtScroll||a!=null&&a.updateAtScroll)){Q=wu(f.value);for(const N of Q)N.addEventListener("scroll",p)}}),_t(()=>{C.value&&te()}),Af(()=>{re(!1)}),Rn(()=>{if(u==null||u.removeChildRef(m),ve(),D&&Y(),F&&g(),Q){for(const N of Q)N.removeEventListener("scroll",p);Q=void 0}});const Se=j(C.value),ye=j(!1),Re=()=>{ye.value=!0},Ie=()=>{ye.value=!1,C.value&&n("show")},M=()=>{ye.value=!1,C.value||(Se.value=!1,n("hide"))};return()=>{var N,V;return d.value=(V=(N=t.default)==null?void 0:N.call(t))!=null?V:[],Kp(d.value,{class:ne.value,onClick:U,onMouseenter:ge,onMouseleave:se,onFocusin:Ce,onFocusout:Ne,onContextmenu:Te}),O(Ke,null,[e.autoFixPosition?O(Yi,{onResize:W},{default:()=>[d.value]}):d.value,O(nm,null,{default:()=>[O(zf,{to:w.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||C.value||Se.value)&&!ue.value&&O(Yi,{onResize:A},{default:()=>[O("div",He({ref:m,class:[`${s}-popup`,`${s}-position-${E.value}`],style:Yk(Zk({},P.value),{zIndex:I.value,pointerEvents:ye.value?"none":"auto"}),"trigger-placement":E.value,onMouseenter:q,onMouseleave:fe,onMousedown:ee},o.value),[O(Wn,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:Re,onAfterEnter:Ie,onBeforeLeave:Re,onAfterLeave:M},{default:()=>{var be;return[jn(O("div",{class:`${s}-popup-wrapper`,style:k.value},[O("div",{class:[`${s}-content`,e.contentClass],style:e.contentStyle},[(be=t.content)==null?void 0:be.call(t)]),e.showArrow&&O("div",{ref:_,class:[`${s}-arrow`,e.arrowClass],style:T.value},null)]),[[Ht,C.value]])]}})])]})]})]})])}}});const pr=Object.assign(ps,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+ps.name,ps)}}),Qk=Z({name:"IconEmpty",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-empty`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),eT=["stroke-width","stroke-linecap","stroke-linejoin"],nT=le("path",{d:"M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"},null,-1),tT=[nT];function rT(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},tT,14,eT)}var ms=he(Qk,[["render",rT]]);const iT=Object.assign(ms,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ms.name,ms)}});var vs=Z({name:"Empty",props:{description:String,imgSrc:String,inConfigProvider:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=oe("empty"),{t:r}=Po(),i=Me(Gt,void 0);return()=>{var s,o,a,l;return!e.inConfigProvider&&(i!=null&&i.slots.empty)&&!(n.image||e.imgSrc||e.description)?i.slots.empty({component:"empty"}):O("div",{class:t},[O("div",{class:`${t}-image`},[(o=(s=n.image)==null?void 0:s.call(n))!=null?o:e.imgSrc?O("img",{src:e.imgSrc,alt:e.description||"empty"},null):O(iT,null,null)]),O("div",{class:`${t}-description`},[(l=(a=n.default)==null?void 0:a.call(n))!=null?l:e.description||r("empty.description")])])}}});const rm=Object.assign(vs,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+vs.name,vs)}}),oT=5;var sT=Z({name:"DotLoading",props:{size:{type:Number}},setup(e){const n=oe("dot-loading");return()=>{const t=e.size?{width:`${e.size}px`,height:`${e.size}px`}:{};return O("div",{class:n,style:{width:e.size?`${e.size*7}px`:void 0,height:e.size?`${e.size}px`:void 0}},[Array(oT).fill(1).map((r,i)=>O("div",{class:`${n}-item`,key:i,style:t},null))])}}}),gs=Z({name:"Spin",props:{size:{type:Number},loading:Boolean,dot:Boolean,tip:String,hideIcon:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=oe("spin"),r=Me(Gt,void 0),i=h(()=>[t,{[`${t}-loading`]:e.loading,[`${t}-with-tip`]:e.tip&&!n.default}]),s=()=>{if(n.icon){const a=rr(n.icon());if(a)return bn(a,{spin:!0})}return n.element?n.element():e.dot?O(sT,{size:e.size},null):r!=null&&r.slots.loading?r.slots.loading():O(Ot,{spin:!0,size:e.size},null)},o=()=>{var a,l,c;const u=e.size?{fontSize:`${e.size}px`}:void 0,d=!!((a=n.tip)!=null?a:e.tip);return O(Ke,null,[!e.hideIcon&&O("div",{class:`${t}-icon`,style:u},[s()]),d&&O("div",{class:`${t}-tip`},[(c=(l=n.tip)==null?void 0:l.call(n))!=null?c:e.tip])])};return()=>O("div",{class:i.value},[n.default?O(Ke,null,[n.default(),e.loading&&O("div",{class:`${t}-mask`},[O("div",{class:`${t}-mask-icon`},[o()])])]):o()])}});const aT=Object.assign(gs,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+gs.name,gs)}}),lT=Z({name:"Thumb",props:{data:{type:Object},direction:{type:String,default:"horizontal"},alwaysShow:{type:Boolean,default:!1},both:{type:Boolean,default:!1}},emits:["scroll"],setup(e,{emit:n}){const t=oe("scrollbar"),r=j(!1),i=j(),s=j(),o=h(()=>e.direction==="horizontal"?{size:"width",direction:"left",offset:"offsetWidth",client:"clientX"}:{size:"height",direction:"top",offset:"offsetHeight",client:"clientY"}),a=j(0),l=j(!1),c=j(0),u=h(()=>{var T,_;return{[o.value.size]:`${(_=(T=e.data)==null?void 0:T.thumbSize)!=null?_:0}px`,[o.value.direction]:`${a.value}px`}}),d=T=>{T.preventDefault(),s.value&&(c.value=T[o.value.client]-s.value.getBoundingClientRect()[o.value.direction],l.value=!0,hn(window,"mousemove",S),hn(window,"mouseup",E),hn(window,"contextmenu",E))},f=T=>{var _,v,R,b;if(T.preventDefault(),s.value){const C=m(T[o.value.client]>s.value.getBoundingClientRect()[o.value.direction]?a.value+((v=(_=e.data)==null?void 0:_.thumbSize)!=null?v:0):a.value-((b=(R=e.data)==null?void 0:R.thumbSize)!=null?b:0));C!==a.value&&(a.value=C,n("scroll",C))}},m=T=>T<0?0:e.data&&T>e.data.max?e.data.max:T,S=T=>{if(i.value&&s.value){const _=m(T[o.value.client]-i.value.getBoundingClientRect()[o.value.direction]-c.value);_!==a.value&&(a.value=_,n("scroll",_))}},E=()=>{l.value=!1,Fn(window,"mousemove",S),Fn(window,"mouseup",E)},P=T=>{l.value||(T=m(T),T!==a.value&&(a.value=T))},k=h(()=>[`${t}-thumb`,`${t}-thumb-direction-${e.direction}`,{[`${t}-thumb-dragging`]:l.value}]);return{visible:r,trackRef:i,thumbRef:s,prefixCls:t,thumbCls:k,thumbStyle:u,handleThumbMouseDown:d,handleTrackClick:f,setOffset:P}}});function cT(e,n,t,r,i,s){return B(),pe(Wn,null,{default:K(()=>[le("div",{ref:"trackRef",class:z([`${e.prefixCls}-track`,`${e.prefixCls}-track-direction-${e.direction}`]),onMousedown:n[1]||(n[1]=Xn((...o)=>e.handleTrackClick&&e.handleTrackClick(...o),["self"]))},[le("div",{ref:"thumbRef",class:z(e.thumbCls),style:we(e.thumbStyle),onMousedown:n[0]||(n[0]=(...o)=>e.handleThumbMouseDown&&e.handleThumbMouseDown(...o))},[le("div",{class:z(`${e.prefixCls}-thumb-bar`)},null,2)],38)],34)]),_:1})}var uT=he(lT,[["render",cT]]);const Bu=20,Ei=15,dT=Z({name:"Scrollbar",components:{ResizeObserver:Yi,Thumb:uT},inheritAttrs:!1,props:{type:{type:String,default:"embed"},outerClass:[String,Object,Array],outerStyle:{type:[String,Object,Array]},hide:{type:Boolean,default:!1},disableHorizontal:{type:Boolean,default:!1},disableVertical:{type:Boolean,default:!1}},emits:{scroll:e=>!0},setup(e,{emit:n}){const t=oe("scrollbar"),r=j(),i=j(),s=j(),o=j(),a=j(),l=j(!1),c=j(!1),u=h(()=>l.value&&!e.disableHorizontal),d=h(()=>c.value&&!e.disableVertical),f=j(!1),m=()=>{var v,R,b,C,w,x;if(r.value){const{clientWidth:I,clientHeight:H,offsetWidth:D,offsetHeight:F,scrollWidth:ie,scrollHeight:ce,scrollTop:te,scrollLeft:re}=r.value;l.value=ie>I,c.value=ce>H,f.value=u.value&&d.value;const U=e.type==="embed"&&f.value?D-Ei:D,ge=e.type==="embed"&&f.value?F-Ei:F,q=Math.round(U/Math.min(ie/I,U/Bu)),se=U-q,fe=(ie-I)/se,Ce=Math.round(ge/Math.min(ce/H,ge/Bu)),Ne=ge-Ce,Te=(ce-H)/Ne;if(i.value={ratio:fe,thumbSize:q,max:se},s.value={ratio:Te,thumbSize:Ce,max:Ne},te>0){const me=Math.round(te/((R=(v=s.value)==null?void 0:v.ratio)!=null?R:1));(b=a.value)==null||b.setOffset(me)}if(re>0){const me=Math.round(re/((w=(C=s.value)==null?void 0:C.ratio)!=null?w:1));(x=o.value)==null||x.setOffset(me)}}};Ze(()=>{m()});const S=()=>{m()},E=v=>{var R,b,C,w,x,I;if(r.value){if(u.value&&!e.disableHorizontal){const H=Math.round(r.value.scrollLeft/((b=(R=i.value)==null?void 0:R.ratio)!=null?b:1));(C=o.value)==null||C.setOffset(H)}if(d.value&&!e.disableVertical){const H=Math.round(r.value.scrollTop/((x=(w=s.value)==null?void 0:w.ratio)!=null?x:1));(I=a.value)==null||I.setOffset(H)}}n("scroll",v)},P=v=>{var R,b;r.value&&r.value.scrollTo({left:v*((b=(R=i.value)==null?void 0:R.ratio)!=null?b:1)})},k=v=>{var R,b;r.value&&r.value.scrollTo({top:v*((b=(R=s.value)==null?void 0:R.ratio)!=null?b:1)})},T=h(()=>{const v={};return e.type==="track"&&(u.value&&(v.paddingBottom=`${Ei}px`),d.value&&(v.paddingRight=`${Ei}px`)),[v,e.outerStyle]}),_=h(()=>[`${t}`,`${t}-type-${e.type}`,{[`${t}-both`]:f.value},e.outerClass]);return{prefixCls:t,cls:_,style:T,containerRef:r,horizontalThumbRef:o,verticalThumbRef:a,horizontalData:i,verticalData:s,isBoth:f,hasHorizontalScrollbar:u,hasVerticalScrollbar:d,handleResize:S,handleScroll:E,handleHorizontalScroll:P,handleVerticalScroll:k}},methods:{scrollTo(e,n){var t,r;Je(e)?(t=this.$refs.containerRef)==null||t.scrollTo(e):(e||n)&&((r=this.$refs.containerRef)==null||r.scrollTo(e,n))},scrollTop(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({top:e})},scrollLeft(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({left:e})}}});function fT(e,n,t,r,i,s){const o=ae("ResizeObserver"),a=ae("thumb");return B(),X("div",{class:z(e.cls),style:we(e.style)},[O(o,{onResize:e.handleResize},{default:K(()=>[le("div",He({ref:"containerRef",class:`${e.prefixCls}-container`},e.$attrs,{onScroll:n[0]||(n[0]=(...l)=>e.handleScroll&&e.handleScroll(...l))}),[O(o,{onResize:e.handleResize},{default:K(()=>[de(e.$slots,"default")]),_:3},8,["onResize"])],16)]),_:3},8,["onResize"]),!e.hide&&e.hasHorizontalScrollbar?(B(),pe(a,{key:0,ref:"horizontalThumbRef",data:e.horizontalData,direction:"horizontal",both:e.isBoth,onScroll:e.handleHorizontalScroll},null,8,["data","both","onScroll"])):Ee("v-if",!0),!e.hide&&e.hasVerticalScrollbar?(B(),pe(a,{key:1,ref:"verticalThumbRef",data:e.verticalData,direction:"vertical",both:e.isBoth,onScroll:e.handleVerticalScroll},null,8,["data","both","onScroll"])):Ee("v-if",!0)],6)}var hs=he(dT,[["render",fT]]);const im=Object.assign(hs,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+hs.name,hs)}}),pT=e=>{const n=j(),t=()=>Np(n.value)?n.value.$refs[e]:n.value,r=j();return Ze(()=>{r.value=t()}),Oe([n],()=>{r.value=t()}),{componentRef:n,elementRef:r}};var mT=Object.defineProperty,Nu=Object.getOwnPropertySymbols,vT=Object.prototype.hasOwnProperty,gT=Object.prototype.propertyIsEnumerable,Du=(e,n,t)=>n in e?mT(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,hT=(e,n)=>{for(var t in n||(n={}))vT.call(n,t)&&Du(e,t,n[t]);if(Nu)for(var t of Nu(n))gT.call(n,t)&&Du(e,t,n[t]);return e};const bT=e=>{const n=h(()=>!!e.value),t=h(()=>{if(e.value)return hT({type:"embed"},St(e.value)?void 0:e.value)});return{displayScrollbar:n,scrollbarProps:t}},yT=Z({name:"SelectDropdown",components:{ScrollbarComponent:im,Empty:rm,Spin:aT},props:{loading:Boolean,empty:Boolean,virtualList:Boolean,bottomOffset:{type:Number,default:0},scrollbar:{type:[Boolean,Object],default:!0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]},showHeaderOnEmpty:{type:Boolean,default:!1},showFooterOnEmpty:{type:Boolean,default:!1}},emits:["scroll","reachBottom"],setup(e,{emit:n,slots:t}){var r,i,s;const{scrollbar:o}=De(e),a=oe("select-dropdown"),l=Me(Gt,void 0),c=(s=(i=l==null?void 0:(r=l.slots).empty)==null?void 0:i.call(r,{component:"select"}))==null?void 0:s[0],{componentRef:u,elementRef:d}=pT("containerRef"),{displayScrollbar:f,scrollbarProps:m}=bT(o),S=P=>{const{scrollTop:k,scrollHeight:T,offsetHeight:_}=P.target;T-(k+_)<=e.bottomOffset&&n("reachBottom",P),n("scroll",P)},E=h(()=>[a,{[`${a}-has-header`]:!!t.header,[`${a}-has-footer`]:!!t.footer}]);return{prefixCls:a,SelectEmpty:c,cls:E,wrapperRef:d,wrapperComRef:u,handleScroll:S,displayScrollbar:f,scrollbarProps:m}}});function ST(e,n,t,r,i,s){const o=ae("spin");return B(),X("div",{class:z(e.cls)},[e.$slots.header&&(!e.empty||e.showHeaderOnEmpty)?(B(),X("div",{key:0,class:z(`${e.prefixCls}-header`)},[de(e.$slots,"header")],2)):Ee("v-if",!0),e.loading?(B(),pe(o,{key:1,class:z(`${e.prefixCls}-loading`)},null,8,["class"])):e.empty?(B(),X("div",{key:2,class:z(`${e.prefixCls}-empty`)},[de(e.$slots,"empty",{},()=>[(B(),pe(Zn(e.SelectEmpty?e.SelectEmpty:"Empty")))])],2)):Ee("v-if",!0),e.virtualList&&!e.loading&&!e.empty?de(e.$slots,"virtual-list",{key:3}):Ee("v-if",!0),e.virtualList?Ee("v-if",!0):jn((B(),pe(Zn(e.displayScrollbar?"ScrollbarComponent":"div"),He({key:4,ref:"wrapperComRef",class:`${e.prefixCls}-list-wrapper`},e.scrollbarProps,{onScroll:e.handleScroll}),{default:K(()=>[le("ul",{class:z(`${e.prefixCls}-list`)},[de(e.$slots,"default")],2)]),_:3},16,["class","onScroll"])),[[Ht,!e.loading&&!e.empty]]),e.$slots.footer&&(!e.empty||e.showFooterOnEmpty)?(B(),X("div",{key:5,class:z(`${e.prefixCls}-footer`)},[de(e.$slots,"footer")],2)):Ee("v-if",!0)],2)}var ET=he(yT,[["render",ST]]),$u=Z({name:"IconCheck",render(){return O("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor"},[O("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"},null)])}});const om=Symbol("ArcoCheckboxGroup");var wi=Z({name:"Checkbox",components:{IconCheck:$u,IconHover:yn},props:{modelValue:{type:[Boolean,Array],default:void 0},defaultChecked:{type:Boolean,default:!1},value:{type:[String,Number,Boolean]},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},uninjectGroupContext:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const{disabled:r,modelValue:i}=De(e),s=oe("checkbox"),o=j(),a=e.uninjectGroupContext?void 0:Me(om,void 0),l=(a==null?void 0:a.name)==="ArcoCheckboxGroup",{mergedDisabled:c,eventHandlers:u}=Nn({disabled:r}),d=j(e.defaultChecked),f=h(()=>{var v;return l?a==null?void 0:a.computedValue:(v=e.modelValue)!=null?v:d.value}),m=h(()=>{var v;return dn(f.value)?f.value.includes((v=e.value)!=null?v:!0):f.value}),S=h(()=>(a==null?void 0:a.disabled)||(c==null?void 0:c.value)||!m.value&&(a==null?void 0:a.isMaxed)),E=v=>{v.stopPropagation()},P=v=>{var R,b,C,w;const{checked:x}=v.target;let I=x;if(dn(f.value)){const H=new Set(f.value);x?H.add((R=e.value)!=null?R:!0):H.delete((b=e.value)!=null?b:!0),I=Array.from(H)}d.value=x,l&&dn(I)?a==null||a.handleChange(I,v):(n("update:modelValue",I),n("change",I,v),(w=(C=u.value)==null?void 0:C.onChange)==null||w.call(C,v)),Fe(()=>{o.value&&o.value.checked!==m.value&&(o.value.checked=m.value)})},k=h(()=>[s,{[`${s}-checked`]:m.value,[`${s}-indeterminate`]:e.indeterminate,[`${s}-disabled`]:S.value}]),T=v=>{var R,b;(b=(R=u.value)==null?void 0:R.onFocus)==null||b.call(R,v)},_=v=>{var R,b;(b=(R=u.value)==null?void 0:R.onBlur)==null||b.call(R,v)};return Oe(i,v=>{(pn(v)||qt(v))&&(d.value=!1)}),Oe(f,v=>{var R;let b;dn(v)?b=v.includes((R=e.value)!=null?R:!0):b=v,d.value!==b&&(d.value=b),o.value&&o.value.checked!==b&&(o.value.checked=b)}),()=>{var v,R,b,C;return O("label",{"aria-disabled":S.value,class:k.value},[O("input",{ref:o,type:"checkbox",checked:m.value,value:e.value,class:`${s}-target`,disabled:S.value,onClick:E,onChange:P,onFocus:T,onBlur:_},null),(C=(b=(R=t.checkbox)!=null?R:(v=a==null?void 0:a.slots)==null?void 0:v.checkbox)==null?void 0:b({checked:m.value,disabled:S.value}))!=null?C:O(yn,{class:`${s}-icon-hover`,disabled:S.value||m.value},{default:()=>[O("div",{class:`${s}-icon`},[m.value&&O($u,{class:`${s}-icon-check`},null)])]}),t.default&&O("span",{class:`${s}-label`},[t.default()])])}}}),bs=Z({name:"CheckboxGroup",props:{modelValue:{type:Array,default:void 0},defaultValue:{type:Array,default:()=>[]},max:{type:Number},options:{type:Array},direction:{type:String,default:"horizontal"},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const{disabled:r}=De(e),i=oe("checkbox-group"),{mergedDisabled:s,eventHandlers:o}=Nn({disabled:r}),a=j(e.defaultValue),l=h(()=>dn(e.modelValue)?e.modelValue:a.value),c=h(()=>e.max===void 0?!1:l.value.length>=e.max),u=h(()=>{var S;return((S=e.options)!=null?S:[]).map(E=>Cn(E)||_e(E)?{label:E,value:E}:E)});fn(om,We({name:"ArcoCheckboxGroup",computedValue:l,disabled:s,isMaxed:c,slots:t,handleChange:(S,E)=>{var P,k;a.value=S,n("update:modelValue",S),n("change",S,E),(k=(P=o.value)==null?void 0:P.onChange)==null||k.call(P,E)}}));const f=h(()=>[i,`${i}-direction-${e.direction}`]);Oe(()=>e.modelValue,S=>{dn(S)?a.value=[...S]:a.value=[]});const m=()=>u.value.map(S=>{const E=l.value.includes(S.value);return O(wi,{key:S.value,value:S.value,disabled:S.disabled||!E&&c.value,indeterminate:S.indeterminate,modelValue:E},{default:()=>[t.label?t.label({data:S}):Xe(S.label)?S.label():S.label]})});return()=>{var S;return O("span",{class:f.value},[u.value.length>0?m():(S=t.default)==null?void 0:S.call(t)])}}});const _T=Object.assign(wi,{Group:bs,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+wi.name,wi),e.component(t+bs.name,bs)}}),sm=Symbol("ArcoSelectContext");var kT=Object.defineProperty,TT=Object.defineProperties,OT=Object.getOwnPropertyDescriptors,Hu=Object.getOwnPropertySymbols,PT=Object.prototype.hasOwnProperty,CT=Object.prototype.propertyIsEnumerable,Mu=(e,n,t)=>n in e?kT(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,$l=(e,n)=>{for(var t in n||(n={}))PT.call(n,t)&&Mu(e,t,n[t]);if(Hu)for(var t of Hu(n))CT.call(n,t)&&Mu(e,t,n[t]);return e},am=(e,n)=>TT(e,OT(n));const LT=e=>Je(e)&&"isGroup"in e,lm=e=>Je(e)&&"isGroup"in e,RT=(e,n="value")=>String(Je(e)?e[n]:e),ii=(e,n="value")=>Je(e)?`__arco__option__object__${e[n]}`:e||_e(e)||Cn(e)||St(e)?`__arco__option__${typeof e}-${e}`:"",wT=e=>e.has("__arco__option__string-"),xT=(e,{valueKey:n,fieldNames:t,origin:r,index:i=-1})=>{var s;if(Je(e)){const a=e[t.value];return{raw:e,index:i,key:ii(a,n),origin:r,value:a,label:(s=e[t.label])!=null?s:RT(a,n),render:e[t.render],disabled:!!e[t.disabled],tagProps:e[t.tagProps]}}const o={value:e,label:String(e),disabled:!1};return $l({raw:o,index:i,key:ii(e,n),origin:r},o)},Da=(e,{valueKey:n,fieldNames:t,origin:r,optionInfoMap:i})=>{var s;const o=[];for(const a of e)if(LT(a)){const l=Da((s=a.options)!=null?s:[],{valueKey:n,fieldNames:t,origin:r,optionInfoMap:i});l.length>0&&o.push(am($l({},a),{key:`__arco__group__${a.label}`,options:l}))}else{const l=xT(a,{valueKey:n,fieldNames:t,origin:r});o.push(l),i.get(l.key)||i.set(l.key,l)}return o},ju=(e,{inputValue:n,filterOption:t})=>{const r=i=>{var s;const o=[];for(const a of i)if(lm(a)){const l=r((s=a.options)!=null?s:[]);l.length>0&&o.push(am($l({},a),{options:l}))}else xo(a,{inputValue:n,filterOption:t})&&o.push(a);return o};return r(e)},xo=(e,{inputValue:n,filterOption:t})=>Xe(t)?!n||t(n,e.raw):t?e.label.toLowerCase().includes((n??"").toLowerCase()):!0,IT=(e,n)=>{if(!e||!n||e.length!==n.length)return!1;for(const t of Object.keys(e))if(!Hl(e[t],n[t]))return!1;return!0},AT=(e,n)=>{if(!e||!n)return!1;const{length:t}=e;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(!Hl(e[r],n[r]))return!1;return!0},Hl=(e,n)=>{const t=Object.prototype.toString.call(e);return t!==Object.prototype.toString.call(n)?!1:t==="[object Object]"?IT(e,n):t==="[object Array]"?AT(e,n):t==="[object Function]"?e===n?!0:e.toString()===n.toString():e===n},BT=Z({name:"Option",components:{Checkbox:_T},props:{value:{type:[String,Number,Boolean,Object],default:void 0},label:String,disabled:Boolean,tagProps:{type:Object},extra:{type:Object},index:{type:Number},internal:Boolean},setup(e){const{disabled:n,tagProps:t,index:r}=De(e),i=oe("select-option"),s=Me(sm,void 0),o=Tt(),a=j(),l=j(t.value);Oe(t,(b,C)=>{Hl(b,C)||(l.value=b)});const c=j(""),u=h(()=>{var b,C;return(C=(b=e.value)!=null?b:e.label)!=null?C:c.value}),d=h(()=>{var b;return(b=e.label)!=null?b:c.value}),f=h(()=>ii(u.value,s==null?void 0:s.valueKey)),m=h(()=>{var b;return(b=s==null?void 0:s.component)!=null?b:"li"}),S=()=>{var b;if(!e.label&&a.value){const C=(b=a.value.textContent)!=null?b:"";c.value!==C&&(c.value=C)}};Ze(()=>S()),_t(()=>S());const E=h(()=>{var b;return(b=s==null?void 0:s.valueKeys.includes(f.value))!=null?b:!1}),P=h(()=>(s==null?void 0:s.activeKey)===f.value);let k=j(!0);if(!e.internal){const b=We({raw:{value:u,label:d,disabled:n,tagProps:l},ref:a,index:r,key:f,origin:"slot",value:u,label:d,disabled:n,tagProps:l});k=h(()=>xo(b,{inputValue:s==null?void 0:s.inputValue,filterOption:s==null?void 0:s.filterOption})),o&&(s==null||s.addSlotOptionInfo(o.uid,b)),Rn(()=>{o&&(s==null||s.removeSlotOptionInfo(o.uid))})}const T=b=>{e.disabled||s==null||s.onSelect(f.value,b)},_=()=>{e.disabled||s==null||s.setActiveKey(f.value)},v=()=>{e.disabled||s==null||s.setActiveKey()},R=h(()=>[i,{[`${i}-disabled`]:e.disabled,[`${i}-active`]:P.value,[`${i}-multiple`]:s==null?void 0:s.multiple}]);return{prefixCls:i,cls:R,selectCtx:s,itemRef:a,component:m,isSelected:E,isValid:k,handleClick:T,handleMouseEnter:_,handleMouseLeave:v}}});function NT(e,n,t,r,i,s){const o=ae("checkbox");return jn((B(),pe(Zn(e.component),{ref:"itemRef",class:z([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:e.handleClick,onMouseenter:e.handleMouseEnter,onMouseleave:e.handleMouseLeave},{default:K(()=>[e.$slots.icon?(B(),X("span",{key:0,class:z(`${e.prefixCls}-icon`)},[de(e.$slots,"icon")],2)):Ee("v-if",!0),e.selectCtx&&e.selectCtx.multiple?(B(),pe(o,{key:1,class:z(`${e.prefixCls}-checkbox`),"model-value":e.isSelected,disabled:e.disabled,"uninject-group-context":""},{default:K(()=>[de(e.$slots,"default",{},()=>[Ae(ze(e.label),1)])]),_:3},8,["class","model-value","disabled"])):(B(),X("span",{key:2,class:z(`${e.prefixCls}-content`)},[de(e.$slots,"default",{},()=>[Ae(ze(e.label),1)])],2)),e.$slots.suffix?(B(),X("span",{key:3,class:z(`${e.prefixCls}-suffix`)},[de(e.$slots,"suffix")],2)):Ee("v-if",!0)]),_:3},8,["class","onClick","onMouseenter","onMouseleave"])),[[Ht,e.isValid]])}var zr=he(BT,[["render",NT]]),DT=Object.defineProperty,$T=Object.defineProperties,HT=Object.getOwnPropertyDescriptors,Fu=Object.getOwnPropertySymbols,MT=Object.prototype.hasOwnProperty,jT=Object.prototype.propertyIsEnumerable,Ku=(e,n,t)=>n in e?DT(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ys=(e,n)=>{for(var t in n||(n={}))MT.call(n,t)&&Ku(e,t,n[t]);if(Fu)for(var t of Fu(n))jT.call(n,t)&&Ku(e,t,n[t]);return e},FT=(e,n)=>$T(e,HT(n));const KT={value:"value",label:"label",disabled:"disabled",tagProps:"tagProps",render:"render"},WT=({options:e,extraOptions:n,inputValue:t,filterOption:r,showExtraOptions:i,valueKey:s,fieldNames:o})=>{const a=h(()=>ys(ys({},KT),o==null?void 0:o.value)),l=We(new Map),c=h(()=>Array.from(l.values()).sort((_,v)=>_e(_.index)&&_e(v.index)?_.index-v.index:0)),u=h(()=>{var _,v;const R=new Map;return{optionInfos:Da((_=e==null?void 0:e.value)!=null?_:[],{valueKey:(v=s==null?void 0:s.value)!=null?v:"value",fieldNames:a.value,origin:"options",optionInfoMap:R}),optionInfoMap:R}}),d=h(()=>{var _,v;const R=new Map;return{optionInfos:Da((_=n==null?void 0:n.value)!=null?_:[],{valueKey:(v=s==null?void 0:s.value)!=null?v:"value",fieldNames:a.value,origin:"extraOptions",optionInfoMap:R}),optionInfoMap:R}}),f=We(new Map);Oe([c,e??j([]),n??j([]),s??j("value")],()=>{f.clear(),c.value.forEach((_,v)=>{f.set(_.key,FT(ys({},_),{index:v}))}),u.value.optionInfoMap.forEach(_=>{f.has(_.key)||(_.index=f.size,f.set(_.key,_))}),d.value.optionInfoMap.forEach(_=>{f.has(_.key)||(_.index=f.size,f.set(_.key,_))})},{immediate:!0,deep:!0});const m=h(()=>{var _;const v=ju(u.value.optionInfos,{inputValue:t==null?void 0:t.value,filterOption:r==null?void 0:r.value});return((_=i==null?void 0:i.value)==null||_)&&v.push(...ju(d.value.optionInfos,{inputValue:t==null?void 0:t.value,filterOption:r==null?void 0:r.value})),v}),S=h(()=>Array.from(f.values()).filter(_=>_.origin==="extraOptions"&&(i==null?void 0:i.value)===!1?!1:xo(_,{inputValue:t==null?void 0:t.value,filterOption:r==null?void 0:r.value}))),E=h(()=>S.value.filter(_=>!_.disabled).map(_=>_.key));return{validOptions:m,optionInfoMap:f,validOptionInfos:S,enabledOptionKeys:E,getNextSlotOptionIndex:()=>l.size,addSlotOptionInfo:(_,v)=>{l.set(_,v)},removeSlotOptionInfo:_=>{l.delete(_)}}},Nr={ENTER:"Enter",ESC:"Escape",BACKSPACE:"Backspace",TAB:"Tab",SPACE:" ",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight"},Wu=e=>JSON.stringify({key:e.key,ctrl:!!e.ctrl,shift:!!e.shift,alt:!!e.alt,meta:!!e.meta}),zT=e=>{const n={};return e.forEach((t,r)=>{const i=Cn(r)?{key:r}:r;n[Wu(i)]=t}),t=>{const r=Wu({key:t.key,ctrl:t.ctrlKey,shift:t.shiftKey,alt:t.altKey,meta:t.metaKey}),i=n[r];i&&(t.stopPropagation(),i(t))}},VT=({multiple:e,options:n,extraOptions:t,inputValue:r,filterOption:i,showExtraOptions:s,component:o,valueKey:a,fieldNames:l,loading:c,popupVisible:u,valueKeys:d,dropdownRef:f,optionRefs:m,virtualListRef:S,onSelect:E,onPopupVisibleChange:P,enterToOpen:k=!0,defaultActiveFirstOption:T})=>{const{validOptions:_,optionInfoMap:v,validOptionInfos:R,enabledOptionKeys:b,getNextSlotOptionIndex:C,addSlotOptionInfo:w,removeSlotOptionInfo:x}=WT({options:n,extraOptions:t,inputValue:r,filterOption:i,showExtraOptions:s,valueKey:a,fieldNames:l}),I=j();Oe(b,ce=>{(!I.value||!ce.includes(I.value))&&(I.value=ce[0])});const H=ce=>{I.value=ce},D=ce=>{const te=b.value.length;if(te===0)return;if(!I.value)return ce==="down"?b.value[0]:b.value[te-1];const re=b.value.indexOf(I.value),U=(te+re+(ce==="up"?-1:1))%te;return b.value[U]},F=ce=>{var te,re;S!=null&&S.value&&S.value.scrollTo({key:ce});const U=v.get(ce),ge=(te=f==null?void 0:f.value)==null?void 0:te.wrapperRef,q=(re=m==null?void 0:m.value[ce])!=null?re:U==null?void 0:U.ref;if(!ge||!q||ge.scrollHeight===ge.offsetHeight)return;const se=l_(q,ge),fe=ge.scrollTop;se.top<0?ge.scrollTo(0,fe+se.top):se.bottom<0&&ge.scrollTo(0,fe-se.bottom)};Oe(u,ce=>{var te;if(ce){const re=d.value[d.value.length-1];let U=(te=T==null?void 0:T.value)==null||te?b.value[0]:void 0;b.value.includes(re)&&(U=re),U!==I.value&&(I.value=U),Fe(()=>{I.value&&F(I.value)})}});const ie=zT(new Map([[Nr.ENTER,ce=>{!(c!=null&&c.value)&&!ce.isComposing&&(u.value?I.value&&(E(I.value,ce),ce.preventDefault()):k&&(P(!0),ce.preventDefault()))}],[Nr.ESC,ce=>{u.value&&(P(!1),ce.preventDefault())}],[Nr.ARROW_DOWN,ce=>{if(u.value){const te=D("down");te&&(I.value=te,F(te)),ce.preventDefault()}}],[Nr.ARROW_UP,ce=>{if(u.value){const te=D("up");te&&(I.value=te,F(te)),ce.preventDefault()}}]]));return fn(sm,We({multiple:e,valueKey:a,inputValue:r,filterOption:i,component:o,valueKeys:d,activeKey:I,setActiveKey:H,onSelect:E,getNextSlotOptionIndex:C,addSlotOptionInfo:w,removeSlotOptionInfo:x})),{validOptions:_,optionInfoMap:v,validOptionInfos:R,enabledOptionKeys:b,activeKey:I,setActiveKey:H,addSlotOptionInfo:w,removeSlotOptionInfo:x,getNextActiveKey:D,scrollIntoView:F,handleKeyDown:ie}},UT=({dataKeys:e,contentRef:n,fixedSize:t,estimatedSize:r,buffer:i})=>{const s=j(0),o=new Map,a=h(()=>e.value.length),l=j(0),c=h(()=>{const C=l.value+i.value*3;return C>a.value?a.value:C}),u=h(()=>{const C=a.value-i.value*3;return C<0?0:C}),d=C=>{C<0?l.value=0:C>u.value?l.value=u.value:l.value=C},f=j(t.value),m=h(()=>r.value!==30?r.value:s.value||r.value),S=(C,w)=>{o.set(C,w)},E=C=>{var w;if(f.value)return m.value;const x=e.value[C];return(w=o.get(x))!=null?w:m.value},P=C=>o.has(C);Ze(()=>{const C=Array.from(o.values()).reduce((w,x)=>w+x,0);C>0&&(s.value=C/o.size)});const k=C=>f.value?m.value*C:T(0,C),T=(C,w)=>{let x=0;for(let I=C;I<w;I++)x+=E(I);return x},_=h(()=>f.value?m.value*l.value:T(0,l.value)),v=C=>{const w=C>=_.value;let x=Math.abs(C-_.value);const I=w?l.value:l.value-1;let H=0;for(;x>0;)x-=E(I+H),w?H++:H--;return H},R=C=>{const w=v(C),x=l.value+w-i.value;return x<0?0:x>u.value?u.value:x},b=h(()=>f.value?m.value*(a.value-c.value):T(c.value,a.value));return{frontPadding:_,behindPadding:b,start:l,end:c,getStartByScroll:R,setItemSize:S,hasItemSize:P,setStart:d,getScrollOffset:k}};var qT=Z({name:"VirtualListItem",props:{hasItemSize:{type:Function,required:!0},setItemSize:{type:Function,required:!0}},setup(e,{slots:n}){var t;const r=(t=Tt())==null?void 0:t.vnode.key,i=j(),s=()=>{var o,a,l,c;const u=(a=(o=i.value)==null?void 0:o.$el)!=null?a:i.value,d=(c=(l=u==null?void 0:u.getBoundingClientRect)==null?void 0:l.call(u).height)!=null?c:u==null?void 0:u.offsetHeight;d&&e.setItemSize(r,d)};return Ze(()=>s()),Rn(()=>s()),()=>{var o;const a=rr((o=n.default)==null?void 0:o.call(n));return a?bn(a,{ref:i},!0):null}}}),GT=Object.defineProperty,zu=Object.getOwnPropertySymbols,JT=Object.prototype.hasOwnProperty,ZT=Object.prototype.propertyIsEnumerable,Vu=(e,n,t)=>n in e?GT(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,YT=(e,n)=>{for(var t in n||(n={}))JT.call(n,t)&&Vu(e,t,n[t]);if(zu)for(var t of zu(n))ZT.call(n,t)&&Vu(e,t,n[t]);return e};const XT=Z({name:"VirtualList",components:{VirtualListItem:qT},props:{height:{type:[Number,String],default:200},data:{type:Array,default:()=>[]},threshold:{type:Number,default:0},itemKey:{type:String,default:"key"},fixedSize:{type:Boolean,default:!1},estimatedSize:{type:Number,default:30},buffer:{type:Number,default:10},component:{type:[String,Object],default:"div"},listAttrs:{type:Object},contentAttrs:{type:Object},paddingPosition:{type:String,default:"content"}},emits:{scroll:e=>!0,reachBottom:e=>!0},setup(e,{emit:n}){const{data:t,itemKey:r,fixedSize:i,estimatedSize:s,buffer:o,height:a}=De(e),l=oe("virtual-list"),c=h(()=>Je(e.component)?YT({container:"div",list:"div",content:"div"},e.component):{container:e.component,list:"div",content:"div"}),u=j(),d=j(),f=h(()=>({height:_e(a.value)?`${a.value}px`:a.value,overflow:"auto"})),m=h(()=>t.value.map((I,H)=>{var D;return(D=I[r.value])!=null?D:H})),{frontPadding:S,behindPadding:E,start:P,end:k,getStartByScroll:T,setItemSize:_,hasItemSize:v,setStart:R,getScrollOffset:b}=UT({dataKeys:m,contentRef:d,fixedSize:i,estimatedSize:s,buffer:o}),C=h(()=>e.threshold&&t.value.length<=e.threshold?t.value:t.value.slice(P.value,k.value)),w=I=>{const{scrollTop:H,scrollHeight:D,offsetHeight:F}=I.target,ie=T(H);ie!==P.value&&(R(ie),Fe(()=>{x(H)})),n("scroll",I),Math.floor(D-(H+F))<=0&&n("reachBottom",I)},x=I=>{var H,D;if(u.value)if(_e(I))u.value.scrollTop=I;else{const F=(D=I.index)!=null?D:m.value.indexOf((H=I.key)!=null?H:"");R(F-o.value),u.value.scrollTop=b(F),Fe(()=>{if(u.value){const ie=b(F);ie!==u.value.scrollTop&&(u.value.scrollTop=ie)}})}};return{prefixCls:l,containerRef:u,contentRef:d,frontPadding:S,currentList:C,behindPadding:E,onScroll:w,setItemSize:_,hasItemSize:v,start:P,scrollTo:x,style:f,mergedComponent:c}}});function QT(e,n,t,r,i,s){const o=ae("VirtualListItem");return B(),pe(Zn(e.mergedComponent.container),{ref:"containerRef",class:z(e.prefixCls),style:we(e.style),onScroll:e.onScroll},{default:K(()=>[(B(),pe(Zn(e.mergedComponent.list),He(e.listAttrs,{style:e.paddingPosition==="list"?{paddingTop:`${e.frontPadding}px`,paddingBottom:`${e.behindPadding}px`}:{}}),{default:K(()=>[(B(),pe(Zn(e.mergedComponent.content),He({ref:"contentRef"},e.contentAttrs,{style:e.paddingPosition==="content"?{paddingTop:`${e.frontPadding}px`,paddingBottom:`${e.behindPadding}px`}:{}}),{default:K(()=>[(B(!0),X(Ke,null,ai(e.currentList,(a,l)=>{var c;return B(),pe(o,{key:(c=a[e.itemKey])!=null?c:e.start+l,"has-item-size":e.hasItemSize,"set-item-size":e.setItemSize},{default:K(()=>[de(e.$slots,"item",{item:a,index:e.start+l})]),_:2},1032,["has-item-size","set-item-size"])}),128))]),_:3},16,["style"]))]),_:3},16,["style"]))]),_:3},8,["class","style","onScroll"])}var eO=he(XT,[["render",QT]]),nO=Object.defineProperty,Uu=Object.getOwnPropertySymbols,tO=Object.prototype.hasOwnProperty,rO=Object.prototype.propertyIsEnumerable,qu=(e,n,t)=>n in e?nO(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ss=(e,n)=>{for(var t in n||(n={}))tO.call(n,t)&&qu(e,t,n[t]);if(Uu)for(var t of Uu(n))rO.call(n,t)&&qu(e,t,n[t]);return e};const iO=["red","orangered","orange","gold","lime","green","cyan","arcoblue","purple","pinkpurple","magenta","gray"],oO=["normal","processing","success","warning","danger"];var Es=Z({name:"Badge",props:{text:{type:String},dot:{type:Boolean},dotStyle:{type:Object},maxCount:{type:Number,default:99},offset:{type:Array,default:()=>[]},color:{type:String},status:{type:String,validator:e=>oO.includes(e)},count:{type:Number}},setup(e,{slots:n}){const{status:t,color:r,dotStyle:i,offset:s,text:o,dot:a,maxCount:l,count:c}=De(e),u=oe("badge"),d=sO(u,t==null?void 0:t.value,n==null?void 0:n.default),f=h(()=>{const S=Ss({},(i==null?void 0:i.value)||{}),[E,P]=(s==null?void 0:s.value)||[];E&&(S.marginRight=`${-E}px`),P&&(S.marginTop=`${P}px`);const k=!(r!=null&&r.value)||iO.includes(r==null?void 0:r.value)?{}:{backgroundColor:r.value};return{mergedStyle:Ss(Ss({},k),S),computedDotStyle:S,computedColorStyle:k}}),m=()=>{const S=o==null?void 0:o.value,E=r==null?void 0:r.value,P=t==null?void 0:t.value,k=a==null?void 0:a.value,T=Number(c==null?void 0:c.value),_=(c==null?void 0:c.value)!=null,{computedDotStyle:v,mergedStyle:R}=f.value;return n.content?O("span",{class:`${u}-custom-dot`,style:v},[n.content()]):S&&!E&&!P?O("span",{class:`${u}-text`,style:v},[S]):P||E&&!_?O("span",{class:`${u}-status-wrapper`},[O("span",{class:[`${u}-status-dot`,{[`${u}-status-${P}`]:P,[`${u}-color-${E}`]:E}],style:R},null),S&&O("span",{class:`${u}-status-text`},[S])]):(k||E)&&T>0?O("span",{class:[`${u}-dot`,{[`${u}-color-${E}`]:E}],style:R},null):T===0?null:O("span",{class:`${u}-number`,style:R},[O("span",null,[l.value&&T>l.value?`${l.value}+`:T])])};return()=>O("span",{class:d.value},[n.default&&n.default(),m()])}});const sO=(e,n,t)=>h(()=>[e,{[`${e}-status`]:n,[`${e}-no-children`]:!t}]),aO=Object.assign(Es,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Es.name,Es)}}),lO=Z({name:"IconMore",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-more`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),cO=["stroke-width","stroke-linecap","stroke-linejoin"],uO=le("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",fill:"currentColor",stroke:"none"},null,-1),dO=le("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"},null,-1),fO=[uO,dO];function pO(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},fO,14,cO)}var _s=he(lO,[["render",pO]]);const mO=Object.assign(_s,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+_s.name,_s)}}),vO=Z({name:"IconDown",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-down`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),gO=["stroke-width","stroke-linecap","stroke-linejoin"],hO=le("path",{d:"M39.6 17.443 24.043 33 8.487 17.443"},null,-1),bO=[hO];function yO(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},bO,14,gO)}var ks=he(vO,[["render",yO]]);const cm=Object.assign(ks,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ks.name,ks)}}),Ml=Symbol("ArcoDropdown"),SO=Z({name:"DropdownPanel",components:{Scrollbar:im,Empty:rm},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:n,slots:t}){const r=oe("dropdown"),i=Me(Ml,{}),s=j(),o=c=>{const{scrollTop:u,scrollHeight:d,offsetHeight:f}=c.target;d-(u+f)<=e.bottomOffset&&n("reachBottom",c),n("scroll",c)},a=h(()=>{if(_e(i.popupMaxHeight))return{maxHeight:`${i.popupMaxHeight}px`};if(!i.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),l=h(()=>[r,{[`${r}-has-footer`]:!!t.footer}]);return{prefixCls:r,cls:l,style:a,wrapperRef:s,handleScroll:o}}});function EO(e,n,t,r,i,s){const o=ae("empty"),a=ae("Scrollbar");return B(),X("div",{class:z(e.cls)},[e.isEmpty?(B(),X("div",{key:0,class:z(`${e.prefixCls}-empty`)},[de(e.$slots,"empty",{},()=>[O(o)])],2)):Ee("v-if",!0),O(a,{ref:"wrapperRef",class:z(`${e.prefixCls}-list-wrapper`),style:we(e.style),onScroll:e.handleScroll},{default:K(()=>[le("ul",{class:z(`${e.prefixCls}-list`)},[de(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(B(),X("div",{key:1,class:z(`${e.prefixCls}-footer`)},[de(e.$slots,"footer")],2)):Ee("v-if",!0)],2)}var um=he(SO,[["render",EO]]);const Io=({popupVisible:e,defaultPopupVisible:n,emit:t})=>{var r;const i=j((r=n==null?void 0:n.value)!=null?r:!1),s=h(()=>{var a;return(a=e==null?void 0:e.value)!=null?a:i.value}),o=a=>{a!==s.value&&(i.value=a,t("update:popupVisible",a),t("popupVisibleChange",a))};return Oe(s,a=>{i.value!==a&&(i.value=a)}),{computedPopupVisible:s,handlePopupVisibleChange:o}},_O=Z({name:"Dropdown",components:{Trigger:pr,DropdownPanel:um},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r,popupMaxHeight:i}=De(e),s=oe("dropdown"),{computedPopupVisible:o,handlePopupVisibleChange:a}=Io({defaultPopupVisible:t,popupVisible:r,emit:n});return fn(Ml,We({popupMaxHeight:i,onOptionClick:(c,u)=>{n("select",c,u),e.hideOnSelect&&a(!1)}})),{prefixCls:s,computedPopupVisible:o,handlePopupVisibleChange:a}}});function kO(e,n,t,r,i,s){const o=ae("DropdownPanel"),a=ae("Trigger");return B(),pe(a,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:K(()=>[O(o,null,Xr({default:K(()=>[de(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:K(()=>[de(e.$slots,"footer")])}:void 0]),1024)]),default:K(()=>[de(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var xi=he(_O,[["render",kO]]);const TO=Z({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("dropdown-option"),r=j(),i=h(()=>{var l,c,u;return(u=(c=e.value)!=null?c:(l=r.value)==null?void 0:l.textContent)!=null?u:void 0}),s=e.uninjectContext?void 0:Me(Ml,void 0),o=l=>{e.disabled||(n("click",l),s==null||s.onOptionClick(i.value,l))},a=h(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:a,liRef:r,handleClick:o}}});function OO(e,n,t,r,i,s){return B(),X("li",{ref:"liRef",class:z([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:n[0]||(n[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[e.$slots.icon?(B(),X("span",{key:0,class:z(`${e.prefixCls}-icon`)},[de(e.$slots,"icon")],2)):Ee("v-if",!0),le("span",{class:z(`${e.prefixCls}-content`)},[de(e.$slots,"default")],2),e.$slots.suffix?(B(),X("span",{key:1,class:z(`${e.prefixCls}-suffix`)},[de(e.$slots,"suffix")],2)):Ee("v-if",!0)],2)}var Vr=he(TO,[["render",OO]]);const PO=Z({name:"Dgroup",props:{title:String},setup(){return{prefixCls:oe("dropdown-group")}}});function CO(e,n,t,r,i,s){return B(),X(Ke,null,[le("li",{class:z(`${e.prefixCls}-title`)},[de(e.$slots,"title",{},()=>[Ae(ze(e.title),1)])],2),de(e.$slots,"default")],64)}var Ts=he(PO,[["render",CO]]);const LO=Z({name:"IconRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-right`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),RO=["stroke-width","stroke-linecap","stroke-linejoin"],wO=le("path",{d:"m16 39.513 15.556-15.557L16 8.4"},null,-1),xO=[wO];function IO(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},xO,14,RO)}var Os=he(LO,[["render",IO]]);const AO=Object.assign(Os,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Os.name,Os)}}),BO=Z({name:"Dsubmenu",components:{Trigger:pr,DropdownPanel:um,DropdownOption:Vr,IconRight:AO},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=De(e),i=oe("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:o}=Io({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:s,handlePopupVisibleChange:o}}});function NO(e,n,t,r,i,s){const o=ae("IconRight"),a=ae("dropdown-option"),l=ae("dropdown-panel"),c=ae("Trigger");return B(),pe(c,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:K(()=>[O(l,{class:z(`${e.prefixCls}-submenu`)},Xr({default:K(()=>[de(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:K(()=>[de(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:K(()=>[O(a,He(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),Xr({suffix:K(()=>[de(e.$slots,"suffix",{},()=>[O(o)])]),default:K(()=>[de(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:K(()=>[de(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var Ps=he(BO,[["render",NO]]);const DO=Z({name:"DropdownButton",components:{IconMore:mO,Button:nt,ButtonGroup:Ri,Dropdown:xi},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=De(e),i=oe("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:o}=Io({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:s,handleClick:c=>{n("click",c)},handleSelect:(c,u)=>{n("select",c,u)},handlePopupVisibleChange:o}}});function $O(e,n,t,r,i,s){const o=ae("Button"),a=ae("IconMore"),l=ae("Dropdown"),c=ae("ButtonGroup");return B(),pe(c,null,{default:K(()=>[O(o,He({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:K(()=>[de(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),O(l,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:K(()=>[de(e.$slots,"content")]),default:K(()=>[O(o,{size:e.size,type:e.type,disabled:e.disabled},{icon:K(()=>[de(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[O(a)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var Cs=he(DO,[["render",$O]]);const HO=Object.assign(xi,{Option:Vr,Group:Ts,Submenu:Ps,Button:Cs,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+xi.name,xi),e.component(t+Vr.name,Vr),e.component(t+Ts.name,Ts),e.component(t+Ps.name,Ps),e.component(t+Cs.name,Cs)}});function MO(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const jO=({defaultValue:e,modelValue:n,emit:t,eventName:r="input",updateEventName:i="update:modelValue",eventHandlers:s})=>{var o;const a=j(),l=j((o=e==null?void 0:e.value)!=null?o:""),c=j(!1),u=j(!1),d=j("");let f;const m=h(()=>{var b;return(b=n==null?void 0:n.value)!=null?b:l.value}),S=(b,C)=>{l.value=b,t(i,b),t(r,b,C)},E=b=>{const{value:C}=b.target;u.value||(S(C,b),Fe(()=>{a.value&&m.value!==a.value.value&&(a.value.value=m.value)}))},P=b=>{r==="input"&&m.value!==f&&(f=m.value,t("change",m.value,b))},k=b=>{var C;const{value:w}=b.target;b.type==="compositionend"?(u.value=!1,d.value="",S(w,b),Fe(()=>{a.value&&m.value!==a.value.value&&(a.value.value=m.value)})):(u.value=!0,d.value=m.value+((C=b.data)!=null?C:""))},T=b=>{var C,w;c.value=!0,f=m.value,t("focus",b),(w=(C=s==null?void 0:s.value)==null?void 0:C.onFocus)==null||w.call(C,b)},_=b=>{var C,w;c.value=!1,t("blur",b),(w=(C=s==null?void 0:s.value)==null?void 0:C.onBlur)==null||w.call(C,b),P(b)},v=b=>{const C=b.key||b.code;!u.value&&C===Bl.key&&(t("pressEnter",b),P(b))},R=b=>{a.value&&b.target!==a.value&&(b.preventDefault(),a.value.focus())};return Oe(m,b=>{a.value&&b!==a.value.value&&(a.value.value=b)}),{inputRef:a,_value:l,_focused:c,isComposition:u,compositionValue:d,computedValue:m,handleInput:E,handleComposition:k,handleFocus:T,handleBlur:_,handleKeyDown:v,handleMousedown:R}};var FO=Z({name:"InputLabel",inheritAttrs:!1,props:{modelValue:Object,inputValue:{type:String,default:""},enabledInput:Boolean,formatLabel:Function,placeholder:String,retainInputValue:Boolean,disabled:Boolean,baseCls:String,size:String,error:Boolean,focused:Boolean,uninjectFormItemContext:Boolean},emits:["update:inputValue","inputValueChange","focus","blur"],setup(e,{attrs:n,emit:t,slots:r}){var i;const{size:s,disabled:o,error:a,inputValue:l,uninjectFormItemContext:c}=De(e),u=(i=e.baseCls)!=null?i:oe("input-label"),{mergedSize:d,mergedDisabled:f,mergedError:m,eventHandlers:S}=Nn({size:s,disabled:o,error:a,uninject:c==null?void 0:c.value}),{mergedSize:E}=Pt(d),{inputRef:P,_focused:k,computedValue:T,handleInput:_,handleComposition:v,handleFocus:R,handleBlur:b,handleMousedown:C}=jO({modelValue:l,emit:t,eventName:"inputValueChange",updateEventName:"update:inputValue",eventHandlers:S}),w=h(()=>{var re;return(re=e.focused)!=null?re:k.value}),x=h(()=>e.enabledInput&&k.value||!e.modelValue),I=()=>{var re,U;return e.modelValue?(U=(re=e.formatLabel)==null?void 0:re.call(e,e.modelValue))!=null?U:e.modelValue.label:""},H=h(()=>e.enabledInput&&e.modelValue?I():e.placeholder),D=()=>{var re,U;return e.modelValue?(U=(re=r.default)==null?void 0:re.call(r,{data:e.modelValue}))!=null?U:I():null},F=h(()=>[u,`${u}-size-${E.value}`,{[`${u}-search`]:e.enabledInput,[`${u}-focus`]:w.value,[`${u}-disabled`]:f.value,[`${u}-error`]:m.value}]),ie=h(()=>kr(n,Et)),ce=h(()=>li(n,Et));return{inputRef:P,render:()=>O("span",He(ie.value,{class:F.value,title:I(),onMousedown:C}),[r.prefix&&O("span",{class:`${u}-prefix`},[r.prefix()]),O("input",He(ce.value,{ref:P,class:[`${u}-input`,{[`${u}-input-hidden`]:!x.value}],value:T.value,readonly:!e.enabledInput,placeholder:H.value,disabled:f.value,onInput:_,onFocus:R,onBlur:b,onCompositionstart:v,onCompositionupdate:v,onCompositionend:v}),null),O("span",{class:[`${u}-value`,{[`${u}-value-hidden`]:x.value}]},[D()]),r.suffix&&O("span",{class:`${u}-suffix`},[r.suffix()])])}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}}),KO=Object.defineProperty,Gu=Object.getOwnPropertySymbols,WO=Object.prototype.hasOwnProperty,zO=Object.prototype.propertyIsEnumerable,Ju=(e,n,t)=>n in e?KO(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,VO=(e,n)=>{for(var t in n||(n={}))WO.call(n,t)&&Ju(e,t,n[t]);if(Gu)for(var t of Gu(n))zO.call(n,t)&&Ju(e,t,n[t]);return e};const UO=(e,n)=>{const t=[];for(const r of e)if(Je(r))t.push({raw:r,value:r[n.value],label:r[n.label],closable:r[n.closable],tagProps:r[n.tagProps]});else if(e||_e(e)){const i={value:r,label:String(r),closable:!0};t.push(VO({raw:i},i))}return t},Zu=["red","orangered","orange","gold","lime","green","cyan","blue","arcoblue","purple","pinkpurple","magenta","gray"],qO=Z({name:"Tag",components:{IconHover:yn,IconClose:Jt,IconLoading:Ot},props:{color:{type:String},size:{type:String},bordered:{type:Boolean,default:!1},visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},checked:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,default:!0}},emits:{"update:visible":e=>!0,"update:checked":e=>!0,close:e=>!0,check:(e,n)=>!0},setup(e,{emit:n}){const{size:t}=De(e),r=oe("tag"),i=h(()=>e.color&&Zu.includes(e.color)),s=h(()=>e.color&&!Zu.includes(e.color)),o=j(e.defaultVisible),a=j(e.defaultChecked),l=h(()=>{var P;return(P=e.visible)!=null?P:o.value}),c=h(()=>{var P;return e.checkable?(P=e.checked)!=null?P:a.value:!0}),{mergedSize:u}=Pt(t),d=h(()=>u.value==="mini"?"small":u.value),f=P=>{o.value=!1,n("update:visible",!1),n("close",P)},m=P=>{if(e.checkable){const k=!c.value;a.value=k,n("update:checked",k),n("check",k,P)}},S=h(()=>[r,`${r}-size-${d.value}`,{[`${r}-loading`]:e.loading,[`${r}-hide`]:!l.value,[`${r}-${e.color}`]:i.value,[`${r}-bordered`]:e.bordered,[`${r}-checkable`]:e.checkable,[`${r}-checked`]:c.value,[`${r}-custom-color`]:s.value}]),E=h(()=>{if(s.value)return{backgroundColor:e.color}});return{prefixCls:r,cls:S,style:E,computedVisible:l,computedChecked:c,handleClick:m,handleClose:f}}});function GO(e,n,t,r,i,s){const o=ae("icon-close"),a=ae("icon-hover"),l=ae("icon-loading");return e.computedVisible?(B(),X("span",{key:0,class:z(e.cls),style:we(e.style),onClick:n[0]||(n[0]=(...c)=>e.handleClick&&e.handleClick(...c))},[e.$slots.icon?(B(),X("span",{key:0,class:z(`${e.prefixCls}-icon`)},[de(e.$slots,"icon")],2)):Ee("v-if",!0),de(e.$slots,"default"),e.closable?(B(),pe(a,{key:1,role:"button","aria-label":"Close",prefix:e.prefixCls,class:z(`${e.prefixCls}-close-btn`),onClick:Xn(e.handleClose,["stop"])},{default:K(()=>[de(e.$slots,"close-icon",{},()=>[O(o)])]),_:3},8,["prefix","class","onClick"])):Ee("v-if",!0),e.loading?(B(),X("span",{key:2,class:z(`${e.prefixCls}-loading-icon`)},[O(l)],2)):Ee("v-if",!0)],6)):Ee("v-if",!0)}var Ls=he(qO,[["render",GO]]);const JO=Object.assign(Ls,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Ls.name,Ls)}});var ZO=Object.defineProperty,Yu=Object.getOwnPropertySymbols,YO=Object.prototype.hasOwnProperty,XO=Object.prototype.propertyIsEnumerable,Xu=(e,n,t)=>n in e?ZO(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_i=(e,n)=>{for(var t in n||(n={}))YO.call(n,t)&&Xu(e,t,n[t]);if(Yu)for(var t of Yu(n))XO.call(n,t)&&Xu(e,t,n[t]);return e};const QO={value:"value",label:"label",closable:"closable",tagProps:"tagProps"};var Rs=Z({name:"InputTag",inheritAttrs:!1,props:{modelValue:{type:Array},defaultValue:{type:Array,default:()=>[]},inputValue:String,defaultInputValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},size:{type:String},maxTagCount:{type:Number,default:0},retainInputValue:{type:[Boolean,Object],default:!1},formatTag:{type:Function},uniqueValue:{type:Boolean,default:!1},fieldNames:{type:Object},baseCls:String,focused:Boolean,disabledInput:Boolean,uninjectFormItemContext:Boolean},emits:{"update:modelValue":e=>!0,"update:inputValue":e=>!0,change:(e,n)=>!0,inputValueChange:(e,n)=>!0,pressEnter:(e,n)=>!0,remove:(e,n)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{size:i,disabled:s,error:o,uninjectFormItemContext:a,modelValue:l}=De(e),c=e.baseCls||oe("input-tag"),u=j(),d=j(),{mergedSize:f,mergedDisabled:m,mergedError:S,feedback:E,eventHandlers:P}=Nn({size:i,disabled:s,error:o,uninject:a==null?void 0:a.value}),{mergedSize:k}=Pt(f),T=h(()=>_i(_i({},QO),e.fieldNames)),_=j(!1),v=j(e.defaultValue),R=j(e.defaultInputValue),b=j(!1),C=j(""),w=h(()=>Je(e.retainInputValue)?_i({create:!1,blur:!1},e.retainInputValue):{create:e.retainInputValue,blur:e.retainInputValue}),x=We({width:"12px"}),I=h(()=>e.focused||_.value),H=(g,L)=>{R.value=g,n("update:inputValue",g),n("inputValueChange",g,L)},D=g=>{var L;const{value:A}=g.target;g.type==="compositionend"?(b.value=!1,C.value="",H(A,g),Fe(()=>{u.value&&ie.value!==u.value.value&&(u.value.value=ie.value)})):(b.value=!0,C.value=ie.value+((L=g.data)!=null?L:""))},F=h(()=>{var g;return(g=e.modelValue)!=null?g:v.value}),ie=h(()=>{var g;return(g=e.inputValue)!=null?g:R.value});Oe(l,g=>{(pn(g)||qt(g))&&(v.value=[])});const ce=g=>{u.value&&g.target!==u.value&&(g.preventDefault(),u.value.focus())},te=g=>{const{value:L}=g.target;b.value||(H(L,g),Fe(()=>{u.value&&ie.value!==u.value.value&&(u.value.value=ie.value)}))},re=h(()=>UO(F.value,T.value)),U=h(()=>{if(e.maxTagCount>0){const g=re.value.length-e.maxTagCount;if(g>0){const L=re.value.slice(0,e.maxTagCount),A={value:"__arco__more",label:`+${g}...`,closable:!1};return L.push(_i({raw:A},A)),L}}return re.value}),ge=(g,L)=>{var A,W;v.value=g,n("update:modelValue",g),n("change",g,L),(W=(A=P.value)==null?void 0:A.onChange)==null||W.call(A,L)},q=(g,L,A)=>{var W;const ee=(W=F.value)==null?void 0:W.filter((ne,Q)=>Q!==L);ge(ee,A),n("remove",g,A)},se=g=>{ge([],g),n("clear",g)},fe=h(()=>!m.value&&!e.readonly&&e.allowClear&&!!F.value.length),Ce=g=>{var L;if(ie.value){if(g.preventDefault(),e.uniqueValue&&((L=F.value)!=null&&L.includes(ie.value))){n("pressEnter",ie.value,g);return}const A=F.value.concat(ie.value);ge(A,g),n("pressEnter",ie.value,g),w.value.create||H("",g)}},Ne=g=>{var L,A;_.value=!0,n("focus",g),(A=(L=P.value)==null?void 0:L.onFocus)==null||A.call(L,g)},Te=g=>{var L,A;_.value=!1,!w.value.blur&&ie.value&&H("",g),n("blur",g),(A=(L=P.value)==null?void 0:L.onBlur)==null||A.call(L,g)},me=()=>{for(let g=re.value.length-1;g>=0;g--)if(re.value[g].closable)return g;return-1},$=g=>{if(m.value||e.readonly)return;const L=g.key||g.code;if(!b.value&&ie.value&&L===Bl.key&&Ce(g),!b.value&&U.value.length>0&&!ie.value&&L===V_.key){const A=me();A>=0&&q(re.value[A].value,A,g)}},Y=g=>{g>12?x.width=`${g}px`:x.width="12px"};Ze(()=>{d.value&&Y(d.value.offsetWidth)});const G=()=>{d.value&&Y(d.value.offsetWidth)};Oe(ie,g=>{u.value&&!b.value&&g!==u.value.value&&(u.value.value=g)});const ue=h(()=>[c,`${c}-size-${k.value}`,{[`${c}-disabled`]:m.value,[`${c}-disabled-input`]:e.disabledInput,[`${c}-error`]:S.value,[`${c}-focus`]:I.value,[`${c}-readonly`]:e.readonly,[`${c}-has-tag`]:U.value.length>0,[`${c}-has-prefix`]:!!t.prefix,[`${c}-has-suffix`]:!!t.suffix||fe.value||E.value,[`${c}-has-placeholder`]:!F.value.length}]),Le=h(()=>kr(r,Et)),y=h(()=>li(r,Et));return{inputRef:u,render:()=>{var g;return O("span",He({class:ue.value,onMousedown:ce},Le.value),[O(Rl,{onResize:G},{default:()=>[O("span",{ref:d,class:`${c}-mirror`},[U.value.length>0?C.value||ie.value:C.value||ie.value||e.placeholder])]}),t.prefix&&O("span",{class:`${c}-prefix`},[t.prefix()]),O(bl,{tag:"span",name:"input-tag-zoom",class:`${c}-inner`},{default:()=>[U.value.map((L,A)=>O(JO,He({key:`tag-${L.value}`,class:`${c}-tag`,closable:!m.value&&!e.readonly&&L.closable,visible:!0},L.tagProps,{onClose:W=>q(L.value,A,W)}),{default:()=>{var W,ee,ne,Q;return[(Q=(ne=(W=t.tag)==null?void 0:W.call(t,{data:L.raw}))!=null?ne:(ee=e.formatTag)==null?void 0:ee.call(e,L.raw))!=null?Q:L.label]}})),O("input",He(y.value,{ref:u,key:"input-tag-input",class:`${c}-input`,style:x,placeholder:U.value.length===0?e.placeholder:void 0,disabled:m.value,readonly:e.readonly||e.disabledInput,onInput:te,onKeydown:$,onFocus:Ne,onBlur:Te,onCompositionstart:D,onCompositionupdate:D,onCompositionend:D}),null)]}),fe.value&&O(yn,{class:`${c}-clear-btn`,onClick:se,onMousedown:L=>L.stopPropagation()},{default:()=>[O(Jt,null,null)]}),(t.suffix||!!E.value)&&O("span",{class:`${c}-suffix`},[(g=t.suffix)==null?void 0:g.call(t),!!E.value&&O(Al,{type:E.value},null)])])}}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}});const eP=Object.assign(Rs,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Rs.name,Rs)}});var Qu=Z({name:"SelectView",props:{modelValue:{type:Array,required:!0},inputValue:String,placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},opened:{type:Boolean,default:!1},size:{type:String},bordered:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},allowCreate:{type:Boolean,default:!1},allowSearch:{type:Boolean,default:e=>dn(e.modelValue)},maxTagCount:{type:Number,default:0},retainInputValue:{type:Boolean,default:!1}},emits:["remove","clear","focus","blur"],setup(e,{emit:n,slots:t}){const{size:r,disabled:i,error:s}=De(e),o=oe("select-view"),{feedback:a,eventHandlers:l,mergedDisabled:c,mergedSize:u,mergedError:d}=Nn({size:r,disabled:i,error:s}),{mergedSize:f}=Pt(u),{opened:m}=De(e),S=j(),E=h(()=>{var H;return(H=S.value)==null?void 0:H.inputRef}),P=h(()=>e.modelValue.length===0),k=h(()=>e.allowSearch||e.allowCreate),T=h(()=>e.allowClear&&!e.disabled&&!P.value),_=H=>{var D,F;n("focus",H),(F=(D=l.value)==null?void 0:D.onFocus)==null||F.call(D,H)},v=H=>{var D,F;n("blur",H),(F=(D=l.value)==null?void 0:D.onBlur)==null||F.call(D,H)},R=H=>{n("remove",H)},b=H=>{n("clear",H)},C=()=>{var H,D,F,ie;return e.loading?(D=(H=t["loading-icon"])==null?void 0:H.call(t))!=null?D:O(Ot,null,null):e.allowSearch&&e.opened?(ie=(F=t["search-icon"])==null?void 0:F.call(t))!=null?ie:O(Na,null,null):t["arrow-icon"]?t["arrow-icon"]():O(cm,{class:`${o}-arrow-icon`},null)},w=()=>O(Ke,null,[T.value&&O(yn,{class:`${o}-clear-btn`,onClick:b,onMousedown:H=>H.stopPropagation()},{default:()=>[O(Jt,null,null)]}),O("span",{class:`${o}-icon`},[C()]),!!a.value&&O(Al,{type:a.value},null)]);Oe(m,H=>{!H&&E.value&&E.value.isSameNode(document.activeElement)&&E.value.blur()});const x=h(()=>[`${o}-${e.multiple?"multiple":"single"}`,{[`${o}-opened`]:e.opened,[`${o}-borderless`]:!e.bordered}]);return{inputRef:E,handleFocus:_,handleBlur:v,render:()=>e.multiple?O(eP,{ref:S,baseCls:o,class:x.value,modelValue:e.modelValue,inputValue:e.inputValue,focused:e.opened,placeholder:e.placeholder,disabled:c.value,size:f.value,error:d.value,maxTagCount:e.maxTagCount,disabledInput:!e.allowSearch&&!e.allowCreate,retainInputValue:!0,uninjectFormItemContext:!0,onRemove:R,onFocus:_,onBlur:v},{prefix:t.prefix,suffix:w,tag:t.label}):O(FO,{ref:S,baseCls:o,class:x.value,modelValue:e.modelValue[0],inputValue:e.inputValue,focused:e.opened,placeholder:e.placeholder,disabled:c.value,size:f.value,error:d.value,enabledInput:k.value,uninjectFormItemContext:!0,onFocus:_,onBlur:v},{default:t.label,prefix:t.prefix,suffix:w})}},methods:{focus(){this.inputRef&&this.inputRef.focus()},blur(){this.inputRef&&this.inputRef.blur()}},render(){return this.render()}});const nP=Z({name:"Optgroup",props:{label:{type:String}},setup(){return{prefixCls:oe("select-group")}}});function tP(e,n,t,r,i,s){return B(),X(Ke,null,[le("li",{class:z(`${e.prefixCls}-title`)},[de(e.$slots,"label",{},()=>[Ae(ze(e.label),1)])],2),de(e.$slots,"default")],64)}var Ii=he(nP,[["render",tP]]);const ed=typeof window>"u"?global:window;function rP(e,n){let t=0;return(...r)=>{t&&ed.clearTimeout(t),t=ed.setTimeout(()=>{t=0,e(...r)},n)}}var iP=Object.defineProperty,oP=Object.defineProperties,sP=Object.getOwnPropertyDescriptors,nd=Object.getOwnPropertySymbols,aP=Object.prototype.hasOwnProperty,lP=Object.prototype.propertyIsEnumerable,td=(e,n,t)=>n in e?iP(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Lr=(e,n)=>{for(var t in n||(n={}))aP.call(n,t)&&td(e,t,n[t]);if(nd)for(var t of nd(n))lP.call(n,t)&&td(e,t,n[t]);return e},cP=(e,n)=>oP(e,sP(n));function uP(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!jt(e)}const dP={value:"value",label:"label",disabled:"disabled",tagProps:"tagProps",render:"render"};var ws=Z({name:"Select",components:{Trigger:pr,SelectView:Qu},inheritAttrs:!1,props:{multiple:{type:Boolean,default:!1},modelValue:{type:[String,Number,Boolean,Object,Array],default:void 0},defaultValue:{type:[String,Number,Boolean,Object,Array],default:e=>pn(e.multiple)?"":[]},inputValue:{type:String},defaultInputValue:{type:String,default:""},size:{type:String},placeholder:String,loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},allowSearch:{type:[Boolean,Object],default:e=>!!e.multiple},allowCreate:{type:Boolean,default:!1},maxTagCount:{type:Number,default:0},popupContainer:{type:[String,Object]},bordered:{type:Boolean,default:!0},defaultActiveFirstOption:{type:Boolean,default:!0},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},unmountOnClose:{type:Boolean,default:!1},filterOption:{type:[Boolean,Function],default:!0},options:{type:Array,default:()=>[]},virtualListProps:{type:Object},triggerProps:{type:Object},formatLabel:{type:Function},fallbackOption:{type:[Boolean,Function],default:!0},showExtraOptions:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},searchDelay:{type:Number,default:500},limit:{type:Number,default:0},fieldNames:{type:Object},scrollbar:{type:[Boolean,Object],default:!0},showHeaderOnEmpty:{type:Boolean,default:!1},showFooterOnEmpty:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,"update:inputValue":e=>!0,"update:popupVisible":e=>!0,change:e=>!0,inputValueChange:e=>!0,popupVisibleChange:e=>!0,clear:e=>!0,remove:e=>!0,search:e=>!0,dropdownScroll:e=>!0,dropdownReachBottom:e=>!0,exceedLimit:(e,n)=>!0},setup(e,{slots:n,emit:t,attrs:r}){const{size:i,disabled:s,error:o,options:a,filterOption:l,valueKey:c,multiple:u,popupVisible:d,defaultPopupVisible:f,showExtraOptions:m,modelValue:S,fieldNames:E,loading:P,defaultActiveFirstOption:k}=De(e),T=oe("select"),{mergedSize:_,mergedDisabled:v,mergedError:R,eventHandlers:b}=Nn({size:i,disabled:s,error:o}),C=h(()=>e.virtualListProps?"div":"li"),w=h(()=>Je(e.allowSearch)&&!!e.allowSearch.retainInputValue);h(()=>{if(Xe(e.formatLabel))return M=>{const N=ee.get(M.value);return e.formatLabel(N)}});const x=j(),I=j({}),H=j(),{computedPopupVisible:D,handlePopupVisibleChange:F}=Io({popupVisible:d,defaultPopupVisible:f,emit:t}),ie=j(e.defaultValue),ce=h(()=>{var M;const N=(M=e.modelValue)!=null?M:ie.value;return(dn(N)?N:N||_e(N)||Cn(N)||St(N)?[N]:[]).map(be=>({value:be,key:ii(be,e.valueKey)}))});Oe(S,M=>{(pn(M)||qt(M))&&(ie.value=u.value?[]:M)});const te=h(()=>ce.value.map(M=>M.key)),re=h(()=>Lr(Lr({},dP),E==null?void 0:E.value)),U=j(),ge=M=>{const N={};return M.forEach(V=>{N[V]=ee.get(V)}),N},q=M=>{U.value=ge(M)},se=M=>Xe(e.fallbackOption)?e.fallbackOption(M):{[re.value.value]:M,[re.value.label]:String(Je(M)?M[c==null?void 0:c.value]:M)},fe=()=>{const M=[],N=[];if(e.allowCreate||e.fallbackOption){for(const V of ce.value)if(!N.includes(V.key)&&V.value!==""){const be=ee.get(V.key);(!be||be.origin==="extraOptions")&&(M.push(V),N.push(V.key))}}if(e.allowCreate&&me.value){const V=ii(me.value);if(!N.includes(V)){const be=ee.get(V);(!be||be.origin==="extraOptions")&&M.push({value:me.value,key:V})}}return M},Ce=j([]),Ne=h(()=>Ce.value.map(M=>{var N;let V=se(M.value);const be=(N=U.value)==null?void 0:N[M.key];return!pn(be)&&!CE(be)&&(V=Lr(Lr({},V),be)),V}));Fe(()=>{eg(()=>{var M;const N=fe();if(N.length!==Ce.value.length)Ce.value=N;else if(N.length>0){for(let V=0;V<N.length;V++)if(N[V].key!==((M=Ce.value[V])==null?void 0:M.key)){Ce.value=N;break}}})});const Te=j(""),me=h(()=>{var M;return(M=e.inputValue)!=null?M:Te.value});Oe(D,M=>{!M&&!w.value&&me.value&&G("")});const $=M=>{var N,V;return e.multiple?M.map(be=>{var rn,on;return(on=(rn=ee.get(be))==null?void 0:rn.value)!=null?on:""}):(V=(N=ee.get(M[0]))==null?void 0:N.value)!=null?V:wT(ee)?void 0:""},Y=M=>{var N,V;const be=$(M);ie.value=be,t("update:modelValue",be),t("change",be),(V=(N=b.value)==null?void 0:N.onChange)==null||V.call(N),q(M)},G=M=>{Te.value=M,t("update:inputValue",M),t("inputValueChange",M)},ue=(M,N)=>{if(e.multiple){if(te.value.includes(M)){const V=te.value.filter(be=>be!==M);Y(V)}else if(Q.value.includes(M))if(e.limit>0&&te.value.length>=e.limit){const V=ee.get(M);t("exceedLimit",V==null?void 0:V.value,N)}else{const V=te.value.concat(M);Y(V)}w.value||G("")}else{if(M!==te.value[0]&&Y([M]),w.value){const V=ee.get(M);V&&G(V.label)}F(!1)}},Le=rP(M=>{t("search",M)},e.searchDelay),y=M=>{M!==me.value&&(D.value||F(!0),G(M),e.allowSearch&&Le(M))},p=M=>{const N=ee.get(M),V=te.value.filter(be=>be!==M);Y(V),t("remove",N==null?void 0:N.value)},g=M=>{M==null||M.stopPropagation();const N=te.value.filter(V=>{var be;return(be=ee.get(V))==null?void 0:be.disabled});Y(N),G(""),t("clear",M)},L=M=>{t("dropdownScroll",M)},A=M=>{t("dropdownReachBottom",M)},{validOptions:W,optionInfoMap:ee,validOptionInfos:ne,enabledOptionKeys:Q,handleKeyDown:J}=VT({multiple:u,options:a,extraOptions:Ne,inputValue:me,filterOption:l,showExtraOptions:m,component:C,valueKey:c,fieldNames:E,loading:P,popupVisible:D,valueKeys:te,dropdownRef:x,optionRefs:I,virtualListRef:H,defaultActiveFirstOption:k,onSelect:ue,onPopupVisibleChange:F}),ve=h(()=>{var M;const N=[];for(const V of ce.value){const be=ee.get(V.key);be&&N.push(cP(Lr({},be),{value:V.key,label:(M=be==null?void 0:be.label)!=null?M:String(Je(V.value)?V.value[c==null?void 0:c.value]:V.value),closable:!(be!=null&&be.disabled),tagProps:be==null?void 0:be.tagProps}))}return N}),Se=M=>{if(Xe(n.option)){const N=n.option;return()=>N({data:M.raw})}return Xe(M.render)?M.render:()=>M.label},ye=M=>{if(lm(M)){let N;return O(Ii,{key:M.key,label:M.label},uP(N=M.options.map(V=>ye(V)))?N:{default:()=>[N]})}return xo(M,{inputValue:me.value,filterOption:l==null?void 0:l.value})?O(zr,{ref:N=>{N!=null&&N.$el&&(I.value[M.key]=N.$el)},key:M.key,value:M.value,label:M.label,disabled:M.disabled,internal:!0},{default:Se(M)}):null},Re=()=>O(ET,{ref:x,loading:e.loading,empty:ne.value.length===0,virtualList:!!e.virtualListProps,scrollbar:e.scrollbar,showHeaderOnEmpty:e.showHeaderOnEmpty,showFooterOnEmpty:e.showFooterOnEmpty,onScroll:L,onReachBottom:A},{default:()=>{var M,N;return[...(N=(M=n.default)==null?void 0:M.call(n))!=null?N:[],...W.value.map(ye)]},"virtual-list":()=>O(eO,He(e.virtualListProps,{ref:H,data:W.value}),{item:({item:M})=>ye(M)}),empty:n.empty,header:n.header,footer:n.footer}),Ie=({data:M})=>{var N,V,be,rn;if((n.label||Xe(e.formatLabel))&&M){const on=ee.get(M.value);if(on!=null&&on.raw)return(be=(N=n.label)==null?void 0:N.call(n,{data:on.raw}))!=null?be:(V=e.formatLabel)==null?void 0:V.call(e,on.raw)}return(rn=M==null?void 0:M.label)!=null?rn:""};return()=>O(pr,He({trigger:"click",position:"bl",popupOffset:4,animationName:"slide-dynamic-origin",hideEmpty:!0,preventFocus:!0,autoFitPopupWidth:!0,autoFitTransformOrigin:!0,disabled:v.value,popupVisible:D.value,unmountOnClose:e.unmountOnClose,clickToClose:!(e.allowSearch||e.allowCreate),popupContainer:e.popupContainer,onPopupVisibleChange:F},e.triggerProps),{default:()=>{var M,N;return[(N=(M=n.trigger)==null?void 0:M.call(n))!=null?N:O(Qu,He({class:T,modelValue:ve.value,inputValue:me.value,multiple:e.multiple,disabled:v.value,error:R.value,loading:e.loading,allowClear:e.allowClear,allowCreate:e.allowCreate,allowSearch:!!e.allowSearch,opened:D.value,maxTagCount:e.maxTagCount,placeholder:e.placeholder,bordered:e.bordered,size:_.value,onInputValueChange:y,onRemove:p,onClear:g,onKeydown:J},r),{label:Ie,prefix:n.prefix,"arrow-icon":n["arrow-icon"],"loading-icon":n["loading-icon"],"search-icon":n["search-icon"]})]},content:Re})}});const fP=Object.assign(ws,{Option:zr,OptGroup:Ii,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+ws.name,ws),e.component(t+zr.name,zr),e.component(t+Ii.name,Ii)}}),dm=Symbol("RadioGroup");var Ai=Z({name:"Radio",components:{IconHover:yn},props:{modelValue:{type:[String,Number,Boolean],default:void 0},defaultChecked:{type:Boolean,default:!1},value:{type:[String,Number,Boolean],default:!0},type:{type:String,default:"radio"},disabled:{type:Boolean,default:!1},uninjectGroupContext:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const r=oe("radio"),{modelValue:i}=De(e),s=e.uninjectGroupContext?void 0:Me(dm,void 0),{mergedDisabled:o,eventHandlers:a}=Nn({disabled:Wi(e,"disabled")}),l=j(null),c=j(e.defaultChecked),u=h(()=>(s==null?void 0:s.name)==="ArcoRadioGroup"),d=h(()=>{var v;return(v=s==null?void 0:s.type)!=null?v:e.type}),f=h(()=>(s==null?void 0:s.disabled)||o.value),m=h(()=>{var v,R;return u.value?(s==null?void 0:s.value)===((v=e.value)!=null?v:!0):pn(e.modelValue)?c.value:e.modelValue===((R=e.value)!=null?R:!0)});Oe(i,v=>{(pn(v)||qt(v))&&(c.value=!1)}),Oe(m,(v,R)=>{v!==R&&(c.value=v,l.value&&(l.value.checked=v))});const S=v=>{var R,b;(b=(R=a.value)==null?void 0:R.onFocus)==null||b.call(R,v)},E=v=>{var R,b;(b=(R=a.value)==null?void 0:R.onBlur)==null||b.call(R,v)},P=v=>{v.stopPropagation()},k=v=>{var R,b,C,w,x;c.value=!0,u.value?s==null||s.handleChange((R=e.value)!=null?R:!0,v):(n("update:modelValue",(b=e.value)!=null?b:!0),n("change",(C=e.value)!=null?C:!0,v),(x=(w=a.value)==null?void 0:w.onChange)==null||x.call(w,v)),Fe(()=>{l.value&&l.value.checked!==m.value&&(l.value.checked=m.value)})},T=h(()=>[`${d.value==="button"?`${r}-button`:r}`,{[`${r}-checked`]:m.value,[`${r}-disabled`]:f.value}]),_=()=>O(Ke,null,[O(ae("icon-hover"),{class:`${r}-icon-hover`,disabled:f.value||m.value},{default:()=>[O("span",{class:`${r}-icon`},null)]}),t.default&&O("span",{class:`${r}-label`},[t.default()])]);return()=>{var v,R,b,C;return O("label",{class:T.value},[O("input",{ref:l,type:"radio",checked:m.value,value:e.value,class:`${r}-target`,disabled:f.value,onClick:P,onChange:k,onFocus:S,onBlur:E},null),d.value==="radio"?(C=(b=(R=t.radio)!=null?R:(v=s==null?void 0:s.slots)==null?void 0:v.radio)==null?void 0:b({checked:m.value,disabled:f.value}))!=null?C:_():O("span",{class:`${r}-button-content`},[t.default&&t.default()])])}}}),Bi=Z({name:"RadioGroup",props:{modelValue:{type:[String,Number,Boolean],default:void 0},defaultValue:{type:[String,Number,Boolean],default:""},type:{type:String,default:"radio"},size:{type:String},options:{type:Array},direction:{type:String,default:"horizontal"},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const r=oe("radio-group"),{size:i,type:s,disabled:o,modelValue:a}=De(e),{mergedDisabled:l,mergedSize:c,eventHandlers:u}=Nn({size:i,disabled:o}),d=j(e.defaultValue),f=h(()=>{var k;return(k=e.modelValue)!=null?k:d.value}),m=h(()=>{var k;return((k=e.options)!=null?k:[]).map(T=>Cn(T)||_e(T)?{label:T,value:T}:T)});fn(dm,We({name:"ArcoRadioGroup",value:f,size:c,type:s,disabled:l,slots:t,handleChange:(k,T)=>{var _,v;d.value=k,n("update:modelValue",k),n("change",k,T),(v=(_=u.value)==null?void 0:_.onChange)==null||v.call(_,T)}})),Oe(f,k=>{d.value!==k&&(d.value=k)}),Oe(a,k=>{(pn(k)||qt(k))&&(d.value="")});const E=h(()=>[`${r}${e.type==="button"?"-button":""}`,`${r}-size-${c.value}`,`${r}-direction-${e.direction}`,{[`${r}-disabled`]:l.value}]),P=()=>m.value.map(k=>O(Ai,{key:k.value,value:k.value,disabled:k.disabled,modelValue:f.value===k.value},{default:()=>[t.label?t.label({data:k}):Xe(k.label)?k.label():k.label]}));return()=>{var k;return O("span",{class:E.value},[m.value.length>0?P():(k=t.default)==null?void 0:k.call(t)])}}});const pP=Object.assign(Ai,{Group:Bi,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Ai.name,Ai),e.component(t+Bi.name,Bi)}}),mP=Z({name:"IconLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-left`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),vP=["stroke-width","stroke-linecap","stroke-linejoin"],gP=le("path",{d:"M32 8.4 16.444 23.956 32 39.513"},null,-1),hP=[gP];function bP(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},hP,14,vP)}var xs=he(mP,[["render",bP]]);const yP=Object.assign(xs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+xs.name,xs)}}),fm=Symbol("collapseCtx"),SP=Z({name:"Collapse",props:{activeKey:{type:Array,default:void 0},defaultActiveKey:{type:Array,default:()=>[]},accordion:{type:Boolean,default:!1},showExpandIcon:{type:Boolean,default:void 0},expandIconPosition:{type:String,default:"left"},bordered:{type:Boolean,default:!0},destroyOnHide:{type:Boolean,default:!1}},emits:{"update:activeKey":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const{expandIconPosition:r,destroyOnHide:i,showExpandIcon:s}=De(e),o=oe("collapse"),a=j(e.defaultActiveKey),l=h(()=>{var d;const f=(d=e.activeKey)!=null?d:a.value;return dn(f)?f:[f]});fn(fm,We({activeKeys:l,slots:t,showExpandIcon:s,expandIconPosition:r,destroyOnHide:i,handleClick:(d,f)=>{let m=[];if(e.accordion)l.value.includes(d)||(m=[d]),a.value=m;else{m=[...l.value];const S=m.indexOf(d);S>-1?m.splice(S,1):e.accordion?m=[d]:m.push(d),a.value=m}n("update:activeKey",m),n("change",m,f)}}));const u=h(()=>[o,{[`${o}-borderless`]:!e.bordered}]);return{prefixCls:o,cls:u}}});function EP(e,n,t,r,i,s){return B(),X("div",{class:z(e.cls)},[de(e.$slots,"default")],2)}var Is=he(SP,[["render",EP]]);const _P=Z({name:"IconCaretRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-caret-right`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),kP=["stroke-width","stroke-linecap","stroke-linejoin"],TP=le("path",{d:"M34.829 23.063c.6.48.6 1.394 0 1.874L17.949 38.44c-.785.629-1.949.07-1.949-.937V10.497c0-1.007 1.164-1.566 1.95-.937l16.879 13.503Z",fill:"currentColor",stroke:"none"},null,-1),OP=[TP];function PP(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},OP,14,kP)}var As=he(_P,[["render",PP]]);const CP=Object.assign(As,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+As.name,As)}}),LP=Z({name:"IconCaretLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-caret-left`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),RP=["stroke-width","stroke-linecap","stroke-linejoin"],wP=le("path",{d:"M13.171 24.937a1.2 1.2 0 0 1 0-1.874L30.051 9.56c.785-.629 1.949-.07 1.949.937v27.006c0 1.006-1.164 1.566-1.95.937L13.171 24.937Z",fill:"currentColor",stroke:"none"},null,-1),xP=[wP];function IP(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},xP,14,RP)}var Bs=he(LP,[["render",IP]]);const AP=Object.assign(Bs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Bs.name,Bs)}});var Ni=Z({name:"CollapseItem",components:{IconHover:yn,IconCaretRight:CP,IconCaretLeft:AP},props:{key:[String,Number],header:String,disabled:{type:Boolean,default:!1},showExpandIcon:{type:Boolean,default:!0},destroyOnHide:{type:Boolean,default:!1}},setup(e,{slots:n}){var t;const r=Tt(),i=oe("collapse-item"),s=Me(fm,{}),o=r&&_e(r==null?void 0:r.vnode.key)?r.vnode.key:String((t=r==null?void 0:r.vnode.key)!=null?t:""),a=h(()=>{var v;return(v=s.activeKeys)==null?void 0:v.includes(o)}),l=h(()=>s.destroyOnHide||e.destroyOnHide),c=h(()=>{var v;return(v=s==null?void 0:s.showExpandIcon)!=null?v:e.showExpandIcon}),u=j(l.value?a.value:!0),d=h(()=>{var v;return(v=s==null?void 0:s.expandIconPosition)!=null?v:"left"}),f=v=>{var R;e.disabled||(R=s.handleClick)==null||R.call(s,o,v)};Oe(a,v=>{v&&!u.value&&(u.value=!0)});const m={onEnter:v=>{v.style.height=`${v.scrollHeight}px`},onAfterEnter:v=>{v.style.height="auto"},onBeforeLeave:v=>{v.style.height=`${v.scrollHeight}px`},onLeave:v=>{v.style.height="0"},onAfterLeave:()=>{l.value&&(u.value=!1)}},S=h(()=>[i,{[`${i}-active`]:a.value}]),E=h(()=>[`${i}-header`,`${i}-header-${s==null?void 0:s.expandIconPosition}`,{[`${i}-header-disabled`]:e.disabled}]),P=h(()=>[{[`${i}-icon-right`]:(s==null?void 0:s.expandIconPosition)==="right"}]),k=h(()=>[`${i}-content`,{[`${i}-content-expend`]:a.value}]),T=()=>d.value==="right"?O(ae("icon-caret-left"),{class:`${i}-expand-icon`},null):O(ae("icon-caret-right"),{class:`${i}-expand-icon`},null),_=()=>c.value&&O(ae("icon-hover"),{prefix:i,class:P.value,disabled:e.disabled},{default:()=>{var v,R,b,C;return[(C=(b=(R=n["expand-icon"])!=null?R:(v=s==null?void 0:s.slots)==null?void 0:v["expand-icon"])==null?void 0:b({active:a.value,disabled:e.disabled,position:d.value}))!=null?C:T()]}});return()=>{var v,R,b;return O("div",{class:S.value},[O("div",{role:"button","aria-disabled":e.disabled,"aria-expanded":a.value,tabindex:"0",class:E.value,onClick:f},[_(),O("div",{class:`${i}-header-title`},[(R=(v=n.header)==null?void 0:v.call(n))!=null?R:e.header]),n.extra&&O("div",{class:`${i}-header-extra`},[(b=n.extra)==null?void 0:b.call(n)])]),O(Wn,He({name:"collapse-slider"},m),{default:()=>{var C;return[jn(O("div",{role:"region",class:k.value},[u.value&&O("div",{ref:"contentBoxRef",class:`${i}-content-box`},[(C=n.default)==null?void 0:C.call(n)])]),[[Ht,a.value]])]}})])}}});const BP=Object.assign(Is,{Item:Ni,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Is.name,Is),e.component(t+Ni.name,Ni)}});function NP(e,n,t){return h(()=>!!(e[t]||n[t]))}const DP=Z({name:"IconLink",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-link`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),$P=["stroke-width","stroke-linecap","stroke-linejoin"],HP=le("path",{d:"m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"},null,-1),MP=[HP];function jP(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},MP,14,$P)}var Ns=he(DP,[["render",jP]]);const FP=Object.assign(Ns,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ns.name,Ns)}}),KP=Z({name:"Link",components:{IconLink:FP,IconLoading:Ot},props:{href:String,status:{type:String,default:"normal"},hoverable:{type:Boolean,default:!0},icon:Boolean,loading:Boolean,disabled:Boolean},emits:{click:e=>!0},setup(e,{slots:n,emit:t}){const r=oe("link"),i=NP(e,n,"icon"),s=a=>{if(e.disabled||e.loading){a.preventDefault();return}t("click",a)};return{cls:h(()=>[r,`${r}-status-${e.status}`,{[`${r}-disabled`]:e.disabled,[`${r}-loading`]:e.loading,[`${r}-hoverless`]:!e.hoverable,[`${r}-with-icon`]:e.loading||i.value}]),prefixCls:r,showIcon:i,handleClick:s}}}),WP=["href"];function zP(e,n,t,r,i,s){const o=ae("icon-loading"),a=ae("icon-link");return B(),X("a",{href:e.disabled?void 0:e.href,class:z(e.cls),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[e.loading||e.showIcon?(B(),X("span",{key:0,class:z(`${e.prefixCls}-icon`)},[e.loading?(B(),pe(o,{key:0})):de(e.$slots,"icon",{key:1},()=>[O(a)])],2)):Ee("v-if",!0),de(e.$slots,"default")],10,WP)}var Ds=he(KP,[["render",zP]]);const VP=Object.assign(Ds,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Ds.name,Ds)}}),rd=(e,n)=>{if(!e||!n)return;n=n.replace(/\[(\w+)\]/g,".$1");const t=n.split(".");if(t.length===0)return;let r=e;for(let i=0;i<t.length;i++){if(!Je(r)&&!dn(r)||!t[i])return;if(i!==t.length-1)r=r[t[i]];else return r[t[i]]}},id=(e,n,t,{addPath:r}={})=>{if(!e||!n)return;n=n.replace(/\[(\w+)\]/g,".$1");const i=n.split(".");if(i.length===0)return;let s=e;for(let o=0;o<i.length;o++){if(!Je(s)&&!dn(s)||!i[o])return;o!==i.length-1?(r&&pn(s[i[o]])&&(s[i[o]]={}),s=s[i[o]]):s[i[o]]=t}};var UP=Object.defineProperty,qP=Object.defineProperties,GP=Object.getOwnPropertyDescriptors,od=Object.getOwnPropertySymbols,JP=Object.prototype.hasOwnProperty,ZP=Object.prototype.propertyIsEnumerable,sd=(e,n,t)=>n in e?UP(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,YP=(e,n)=>{for(var t in n||(n={}))JP.call(n,t)&&sd(e,t,n[t]);if(od)for(var t of od(n))ZP.call(n,t)&&sd(e,t,n[t]);return e},XP=(e,n)=>qP(e,GP(n));const Xi=["xxl","xl","lg","md","sm","xs"],ki={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};let wt=[],QP=-1,Ti={};const ad={matchHandlers:{},dispatch(e,n){return Ti=e,wt.length<1?!1:(wt.forEach(t=>{t.func(Ti,n)}),!0)},subscribe(e){wt.length===0&&this.register();const n=(++QP).toString();return wt.push({token:n,func:e}),e(Ti,null),n},unsubscribe(e){wt=wt.filter(n=>n.token!==e),wt.length===0&&this.unregister()},unregister(){Object.keys(ki).forEach(e=>{const n=ki[e];if(!n)return;const t=this.matchHandlers[n];t&&t.mql&&t.listener&&(t.mql.removeEventListener?t.mql.removeEventListener("change",t.listener):t.mql.removeListener(t.listener))})},register(){Object.keys(ki).forEach(e=>{const n=ki[e];if(!n)return;const t=({matches:i})=>{this.dispatch(XP(YP({},Ti),{[e]:i}),e)},r=window.matchMedia(n);r.addEventListener?r.addEventListener("change",t):r.addListener(t),this.matchHandlers[n]={mql:r,listener:t},t(r)})}};function ld(e){return Je(e)}function $a(e,n,t=!1){const r=j({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),i=h(()=>{let o=n;if(ld(e.value))for(let a=0;a<Xi.length;a++){const l=Xi[a];if((r.value[l]||l==="xs"&&t)&&e.value[l]!==void 0){o=e.value[l];break}}else o=e.value;return o});let s="";return Ze(()=>{s=ad.subscribe(o=>{ld(e.value)&&(r.value=o)})}),kt(()=>{s&&ad.unsubscribe(s)}),i}const eC=e=>{const n=j(!1),t={overflow:"",width:"",boxSizing:""};return{setOverflowHidden:()=>{if(e.value){const s=e.value;if(!n.value&&s.style.overflow!=="hidden"){const o=u_(s);(o>0||c_(s))&&(t.overflow=s.style.overflow,t.width=s.style.width,t.boxSizing=s.style.boxSizing,s.style.overflow="hidden",s.style.width=`${s.offsetWidth-o}px`,s.style.boxSizing="border-box",n.value=!0)}}},resetOverflow:()=>{if(e.value&&n.value){const s=e.value;s.style.overflow=t.overflow,s.style.width=t.width,s.style.boxSizing=t.boxSizing,n.value=!1}}}};function pm(e){return e===Object(e)&&Object.keys(e).length!==0}function nC(e,n){n===void 0&&(n="auto");var t="scrollBehavior"in document.body.style;e.forEach(function(r){var i=r.el,s=r.top,o=r.left;i.scroll&&t?i.scroll({top:s,left:o,behavior:n}):(i.scrollTop=s,i.scrollLeft=o)})}function tC(e){return e===!1?{block:"end",inline:"nearest"}:pm(e)?e:{block:"start",inline:"nearest"}}function rC(e,n){var t=e.isConnected||e.ownerDocument.documentElement.contains(e);if(pm(n)&&typeof n.behavior=="function")return n.behavior(t?Eu(e,n):[]);if(t){var r=tC(n);return nC(Eu(e,r),r.behavior)}}const cd=["success","warning","error","validating"],iC=e=>{let n="";for(const t of Object.keys(e)){const r=e[t];r&&(!n||cd.indexOf(r)>cd.indexOf(n))&&(n=e[t])}return n},oC=e=>{const n=[];for(const t of Object.keys(e)){const r=e[t];r&&n.push(r)}return n},mm=(e,n)=>{const t=n.replace(/[[.]/g,"_").replace(/\]/g,"");return e?`${e}-${t}`:`${t}`};var sC=Object.defineProperty,ud=Object.getOwnPropertySymbols,aC=Object.prototype.hasOwnProperty,lC=Object.prototype.propertyIsEnumerable,dd=(e,n,t)=>n in e?sC(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,cC=(e,n)=>{for(var t in n||(n={}))aC.call(n,t)&&dd(e,t,n[t]);if(ud)for(var t of ud(n))lC.call(n,t)&&dd(e,t,n[t]);return e};const uC=Z({name:"Form",props:{model:{type:Object,required:!0},layout:{type:String,default:"horizontal"},size:{type:String},labelColProps:{type:Object,default:()=>({span:5,offset:0})},wrapperColProps:{type:Object,default:()=>({span:19,offset:0})},labelColStyle:Object,wrapperColStyle:Object,labelAlign:{type:String,default:"right"},disabled:{type:Boolean,default:void 0},rules:{type:Object},autoLabelWidth:{type:Boolean,default:!1},id:{type:String},scrollToFirstError:{type:Boolean,default:!1}},emits:{submit:(e,n)=>!0,submitSuccess:(e,n)=>!0,submitFailed:(e,n)=>!0},setup(e,{emit:n}){const t=oe("form"),r=j(),{id:i,model:s,layout:o,disabled:a,labelAlign:l,labelColProps:c,wrapperColProps:u,labelColStyle:d,wrapperColStyle:f,size:m,rules:S}=De(e),{mergedSize:E}=Pt(m),P=h(()=>e.layout==="horizontal"&&e.autoLabelWidth),k=[],T=[],_=We({}),v=h(()=>Math.max(...Object.values(_))),R=U=>{U&&U.field&&k.push(U)},b=U=>{U&&U.field&&k.splice(k.indexOf(U),1)},C=U=>{k.forEach(ge=>{U[ge.field]&&ge.setField(U[ge.field])})},w=(U,ge)=>{ge&&_[ge]!==U&&(_[ge]=U)},x=U=>{U&&delete _[U]},I=U=>{const ge=U?[].concat(U):[];k.forEach(q=>{(ge.length===0||ge.includes(q.field))&&q.resetField()})},H=U=>{const ge=U?[].concat(U):[];k.forEach(q=>{(ge.length===0||ge.includes(q.field))&&q.clearValidate()})},D=(U,ge)=>{const se=(r.value||document.body).querySelector(`#${mm(e.id,U)}`);se&&rC(se,cC({behavior:"smooth",block:"nearest",scrollMode:"if-needed"},ge))},F=U=>{const ge=St(e.scrollToFirstError)?void 0:e.scrollToFirstError;D(U,ge)},ie=U=>{const ge=[];return k.forEach(q=>{ge.push(q.validate())}),Promise.all(ge).then(q=>{const se={};let fe=!1;return q.forEach(Ce=>{Ce&&(fe=!0,se[Ce.field]=Ce)}),fe&&e.scrollToFirstError&&F(Object.keys(se)[0]),Xe(U)&&U(fe?se:void 0),fe?se:void 0})},ce=(U,ge)=>{const q=[];for(const se of k)(dn(U)&&U.includes(se.field)||U===se.field)&&q.push(se.validate());return Promise.all(q).then(se=>{const fe={};let Ce=!1;return se.forEach(Ne=>{Ne&&(Ce=!0,fe[Ne.field]=Ne)}),Ce&&e.scrollToFirstError&&F(Object.keys(fe)[0]),Xe(ge)&&ge(Ce?fe:void 0),Ce?fe:void 0})},te=U=>{const ge=[];k.forEach(q=>{ge.push(q.validate())}),Promise.all(ge).then(q=>{const se={};let fe=!1;q.forEach(Ce=>{Ce&&(fe=!0,se[Ce.field]=Ce)}),fe?(e.scrollToFirstError&&F(Object.keys(se)[0]),n("submitFailed",{values:s.value,errors:se},U)):n("submitSuccess",s.value,U),n("submit",{values:s.value,errors:fe?se:void 0},U)})};return fn(Nl,We({id:i,layout:o,disabled:a,labelAlign:l,labelColProps:c,wrapperColProps:u,labelColStyle:d,wrapperColStyle:f,model:s,size:E,rules:S,fields:k,touchedFields:T,addField:R,removeField:b,validateField:ce,setLabelWidth:w,removeLabelWidth:x,maxLabelWidth:v,autoLabelWidth:P})),{cls:h(()=>[t,`${t}-layout-${e.layout}`,`${t}-size-${E.value}`,{[`${t}-auto-label-width`]:e.autoLabelWidth}]),formRef:r,handleSubmit:te,innerValidate:ie,innerValidateField:ce,innerResetFields:I,innerClearValidate:H,innerSetFields:C,innerScrollToField:D}},methods:{validate(e){return this.innerValidate(e)},validateField(e,n){return this.innerValidateField(e,n)},resetFields(e){return this.innerResetFields(e)},clearValidate(e){return this.innerClearValidate(e)},setFields(e){return this.innerSetFields(e)},scrollToField(e){return this.innerScrollToField(e)}}});function dC(e,n,t,r,i,s){return B(),X("form",{ref:"formRef",class:z(e.cls),onSubmit:n[0]||(n[0]=Xn((...o)=>e.handleSubmit&&e.handleSubmit(...o),["prevent"]))},[de(e.$slots,"default")],34)}var $s=he(uC,[["render",dC]]),Tr=Object.prototype.toString;function Ao(e){return Tr.call(e)==="[object Array]"}function Yn(e){return Tr.call(e)==="[object Object]"}function Ha(e){return Tr.call(e)==="[object String]"}function fC(e){return Tr.call(e)==="[object Number]"&&e===e}function pC(e){return Tr.call(e)==="[object Boolean]"}function Ma(e){return Tr.call(e)==="[object Function]"}function mC(e){return Yn(e)&&Object.keys(e).length===0}function It(e){return e==null||e===""}function vm(e){return Ao(e)&&!e.length}var jl=function(e,n){if(typeof e!="object"||typeof n!="object")return e===n;if(Ma(e)&&Ma(n))return e===n||e.toString()===n.toString();if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e){var r=jl(e[t],n[t]);if(!r)return!1}return!0},Fl=function(e,n){var t=Object.assign({},e);return Object.keys(n||{}).forEach(function(r){var i=t[r],s=n==null?void 0:n[r];t[r]=Yn(i)?Object.assign(Object.assign({},i),s):s||i}),t},vC=function(e,n){for(var t=n.split("."),r=e,i=0;i<t.length;i++)if(r=r&&r[t[i]],r===void 0)return r;return r},ot="#{field} is not a #{type} type",gC={required:"#{field} is required",type:{ip:ot,email:ot,url:ot,string:ot,number:ot,array:ot,object:ot,boolean:ot},number:{min:"`#{value}` is not greater than `#{min}`",max:"`#{value}` is not less than `#{max}`",equal:"`#{value}` is not equal to `#{equal}`",range:"`#{value}` is not in range `#{min} ~ #{max}`",positive:"`#{value}` is not a positive number",negative:"`#{value}` is not a negative number"},string:{maxLength:"#{field} cannot be longer than #{maxLength} characters",minLength:"#{field} must be at least #{minLength} characters",length:"#{field} must be exactly #{length} characters",match:"`#{value}` does not match pattern #{pattern}",uppercase:"`#{value}` must be all uppercase",lowercase:"`#{value}` must be all lowercased"},array:{length:"#{field} must be exactly #{length} in length",minLength:"#{field} cannot be less than #{minLength} in length",maxLength:"#{field} cannot be greater than #{maxLength} in length",includes:"#{field} is not includes #{includes}",deepEqual:"#{field} is not deep equal with #{deepEqual}",empty:"#{field} is not an empty array"},object:{deepEqual:"#{field} is not deep equal to expected value",hasKeys:"#{field} does not contain required fields",empty:"#{field} is not an empty object"},boolean:{true:"Expect true but got `#{value}`",false:"Expect false but got `#{value}`"}},Dn=function(n,t){var r=this;this.getValidateMsg=function(i,s){s===void 0&&(s={});var o=Object.assign(Object.assign({},s),{value:r.obj,field:r.field,type:r.type}),a=vC(r.validateMessages,i);return Ma(a)?a(o):Ha(a)?a.replace(/\#\{.+?\}/g,function(l){var c=l.slice(2,-1);if(c in o){if(Yn(o[c])||Ao(o[c]))try{return JSON.stringify(o[c])}catch{return o[c]}return String(o[c])}return l}):a},Yn(t)&&Ha(n)&&t.trim?this.obj=n.trim():Yn(t)&&t.ignoreEmptyString&&n===""?this.obj=void 0:this.obj=n,this.message=t.message,this.type=t.type,this.error=null,this.field=t.field||t.type,this.validateMessages=Fl(gC,t.validateMessages)},Bo={not:{configurable:!0},isRequired:{configurable:!0},end:{configurable:!0}};Bo.not.get=function(){return this._not=!this._not,this};Bo.isRequired.get=function(){if(It(this.obj)||vm(this.obj)){var e=this.getValidateMsg("required");this.error={value:this.obj,type:this.type,requiredError:!0,message:this.message||(Yn(e)?e:(this._not?"[NOT MODE]:":"")+e)}}return this};Bo.end.get=function(){return this.error};Dn.prototype.addError=function(n){!this.error&&n&&(this.error={value:this.obj,type:this.type,message:this.message||(Yn(n)?n:(this._not?"[NOT MODE]:":"")+n)})};Dn.prototype.validate=function(n,t){var r=this._not?n:!n;return r&&this.addError(t),this};Dn.prototype.collect=function(n){n&&n(this.error)};Object.defineProperties(Dn.prototype,Bo);var hC=function(e){function n(r,i){e.call(this,r,Object.assign(Object.assign({},i),{type:"string"})),this.validate(i&&i.strict?Ha(this.obj):!0,this.getValidateMsg("type.string"))}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={uppercase:{configurable:!0},lowercase:{configurable:!0}};return n.prototype.maxLength=function(i){return this.obj?this.validate(this.obj.length<=i,this.getValidateMsg("string.maxLength",{maxLength:i})):this},n.prototype.minLength=function(i){return this.obj?this.validate(this.obj.length>=i,this.getValidateMsg("string.minLength",{minLength:i})):this},n.prototype.length=function(i){return this.obj?this.validate(this.obj.length===i,this.getValidateMsg("string.length",{length:i})):this},n.prototype.match=function(i){var s=i instanceof RegExp;return s&&(i.lastIndex=0),this.validate(this.obj===void 0||s&&i.test(this.obj),this.getValidateMsg("string.match",{pattern:i}))},t.uppercase.get=function(){return this.obj?this.validate(this.obj.toUpperCase()===this.obj,this.getValidateMsg("string.uppercase")):this},t.lowercase.get=function(){return this.obj?this.validate(this.obj.toLowerCase()===this.obj,this.getValidateMsg("string.lowercase")):this},Object.defineProperties(n.prototype,t),n}(Dn),bC=function(e){function n(r,i){e.call(this,r,Object.assign(Object.assign({},i),{type:"number"})),this.validate(i&&i.strict?fC(this.obj):!0,this.getValidateMsg("type.number"))}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={positive:{configurable:!0},negative:{configurable:!0}};return n.prototype.min=function(i){return It(this.obj)?this:this.validate(this.obj>=i,this.getValidateMsg("number.min",{min:i}))},n.prototype.max=function(i){return It(this.obj)?this:this.validate(this.obj<=i,this.getValidateMsg("number.max",{max:i}))},n.prototype.equal=function(i){return It(this.obj)?this:this.validate(this.obj===i,this.getValidateMsg("number.equal",{equal:i}))},n.prototype.range=function(i,s){return It(this.obj)?this:this.validate(this.obj>=i&&this.obj<=s,this.getValidateMsg("number.range",{min:i,max:s}))},t.positive.get=function(){return It(this.obj)?this:this.validate(this.obj>0,this.getValidateMsg("number.positive"))},t.negative.get=function(){return It(this.obj)?this:this.validate(this.obj<0,this.getValidateMsg("number.negative"))},Object.defineProperties(n.prototype,t),n}(Dn),yC=function(e){function n(r,i){e.call(this,r,Object.assign(Object.assign({},i),{type:"array"})),this.validate(i&&i.strict?Ao(this.obj):!0,this.getValidateMsg("type.array",{value:this.obj,type:this.type}))}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={empty:{configurable:!0}};return n.prototype.length=function(i){return this.obj?this.validate(this.obj.length===i,this.getValidateMsg("array.length",{value:this.obj,length:i})):this},n.prototype.minLength=function(i){return this.obj?this.validate(this.obj.length>=i,this.getValidateMsg("array.minLength",{value:this.obj,minLength:i})):this},n.prototype.maxLength=function(i){return this.obj?this.validate(this.obj.length<=i,this.getValidateMsg("array.maxLength",{value:this.obj,maxLength:i})):this},n.prototype.includes=function(i){var s=this;return this.obj?this.validate(i.every(function(o){return s.obj.indexOf(o)!==-1}),this.getValidateMsg("array.includes",{value:this.obj,includes:i})):this},n.prototype.deepEqual=function(i){return this.obj?this.validate(jl(this.obj,i),this.getValidateMsg("array.deepEqual",{value:this.obj,deepEqual:i})):this},t.empty.get=function(){return this.validate(vm(this.obj),this.getValidateMsg("array.empty",{value:this.obj}))},Object.defineProperties(n.prototype,t),n}(Dn),SC=function(e){function n(r,i){e.call(this,r,Object.assign(Object.assign({},i),{type:"object"})),this.validate(i&&i.strict?Yn(this.obj):!0,this.getValidateMsg("type.object"))}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={empty:{configurable:!0}};return n.prototype.deepEqual=function(i){return this.obj?this.validate(jl(this.obj,i),this.getValidateMsg("object.deepEqual",{deepEqual:i})):this},n.prototype.hasKeys=function(i){var s=this;return this.obj?this.validate(i.every(function(o){return s.obj[o]}),this.getValidateMsg("object.hasKeys",{keys:i})):this},t.empty.get=function(){return this.validate(mC(this.obj),this.getValidateMsg("object.empty"))},Object.defineProperties(n.prototype,t),n}(Dn),EC=function(e){function n(r,i){e.call(this,r,Object.assign(Object.assign({},i),{type:"boolean"})),this.validate(i&&i.strict?pC(this.obj):!0,this.getValidateMsg("type.boolean"))}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={true:{configurable:!0},false:{configurable:!0}};return t.true.get=function(){return this.validate(this.obj===!0,this.getValidateMsg("boolean.true"))},t.false.get=function(){return this.validate(this.obj===!1,this.getValidateMsg("boolean.false"))},Object.defineProperties(n.prototype,t),n}(Dn),_C=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,kC=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),TC=/^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/,OC=function(e){function n(r,i){e.call(this,r,Object.assign(Object.assign({},i),{type:"type"}))}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={email:{configurable:!0},url:{configurable:!0},ip:{configurable:!0}};return t.email.get=function(){return this.type="email",this.validate(this.obj===void 0||_C.test(this.obj),this.getValidateMsg("type.email"))},t.url.get=function(){return this.type="url",this.validate(this.obj===void 0||kC.test(this.obj),this.getValidateMsg("type.url"))},t.ip.get=function(){return this.type="ip",this.validate(this.obj===void 0||TC.test(this.obj),this.getValidateMsg("type.ip"))},Object.defineProperties(n.prototype,t),n}(Dn),PC=function(e){function n(r,i){e.call(this,r,Object.assign(Object.assign({},i),{type:"custom"}))}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={validate:{configurable:!0}};return t.validate.get=function(){var r=this;return function(i,s){var o;if(i)return o=i(r.obj,r.addError.bind(r)),o&&o.then?(s&&o.then(function(){s&&s(r.error)},function(a){}),[o,r]):(s&&s(r.error),r.error)}},Object.defineProperties(n.prototype,t),n}(Dn),Qi=function(e,n){return new gm(e,Object.assign({field:"value"},n))};Qi.globalConfig={};Qi.setGlobalConfig=function(e){Qi.globalConfig=e||{}};var gm=function(n,t){var r=Qi.globalConfig,i=Object.assign(Object.assign(Object.assign({},r),t),{validateMessages:Fl(r.validateMessages,t.validateMessages)});this.string=new hC(n,i),this.number=new bC(n,i),this.array=new yC(n,i),this.object=new SC(n,i),this.boolean=new EC(n,i),this.type=new OC(n,i),this.custom=new PC(n,i)},Kl=function(n,t){t===void 0&&(t={}),this.schema=n,this.options=t};Kl.prototype.messages=function(n){this.options=Object.assign(Object.assign({},this.options),{validateMessages:Fl(this.options.validateMessages,n)})};Kl.prototype.validate=function(n,t){var r=this;if(!Yn(n))return;var i=[],s=null;function o(a,l){s||(s={}),(!s[a]||l.requiredError)&&(s[a]=l)}this.schema&&Object.keys(this.schema).forEach(function(a){if(Ao(r.schema[a]))for(var l=function(d){var f=r.schema[a][d],m=f.type,S=f.message;if(!m&&!f.validator)throw"You must specify a type to field "+a+"!";var E=Object.assign(Object.assign({},r.options),{message:S,field:a});"ignoreEmptyString"in f&&(E.ignoreEmptyString=f.ignoreEmptyString),"strict"in f&&(E.strict=f.strict);var P=new gm(n[a],E),k=P.type[m]||null;if(!k)if(f.validator){k=P.custom.validate(f.validator),Object.prototype.toString.call(k)==="[object Array]"&&k[0].then?i.push({function:k[0],_this:k[1],key:a}):k&&o(a,k);return}else k=P[m];if(Object.keys(f).forEach(function(T){f.required&&(k=k.isRequired),T!=="message"&&k[T]&&f[T]&&typeof k[T]=="object"&&(k=k[T]),k[T]&&f[T]!==void 0&&typeof k[T]=="function"&&(k=k[T](f[T]))}),k.collect(function(T){T&&o(a,T)}),s)return"break"},c=0;c<r.schema[a].length;c++){var u=l(c);if(u==="break")break}}),i.length>0?Promise.all(i.map(function(a){return a.function})).then(function(){i.forEach(function(a){a._this.error&&o(a.key,a._this.error)}),t&&t(s)}):t&&t(s)};const hm=Symbol("RowContextInjectionKey"),CC=Z({name:"Row",props:{gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start"},align:{type:String,default:"start"},div:{type:Boolean},wrap:{type:Boolean,default:!0}},setup(e){const{gutter:n,align:t,justify:r,div:i,wrap:s}=De(e),o=oe("row"),a=h(()=>({[`${o}`]:!i.value,[`${o}-nowrap`]:!s.value,[`${o}-align-${t.value}`]:t.value,[`${o}-justify-${r.value}`]:r.value})),l=h(()=>Array.isArray(n.value)?n.value[0]:n.value),c=h(()=>Array.isArray(n.value)?n.value[1]:0),u=$a(l,0),d=$a(c,0),f=h(()=>{const S={};if((u.value||d.value)&&!i.value){const E=-u.value/2,P=-d.value/2;E&&(S.marginLeft=`${E}px`,S.marginRight=`${E}px`),P&&(S.marginTop=`${P}px`,S.marginBottom=`${P}px`)}return S}),m=h(()=>[u.value,d.value]);return fn(hm,We({gutter:m,div:i})),{classNames:a,styles:f}}});function LC(e,n,t,r,i,s){return B(),X("div",{class:z(e.classNames),style:we(e.styles)},[de(e.$slots,"default")],6)}var bm=he(CC,[["render",LC]]);function RC(e){return h(()=>{const{val:t,key:r,xs:i,sm:s,md:o,lg:a,xl:l,xxl:c}=e.value;if(!i&&!s&&!o&&!a&&!l&&!c)return t;const u={};return Xi.forEach(d=>{const f=e.value[d];_e(f)?u[d]=f:Je(f)&&_e(f[r])&&(u[d]=f[r])}),u})}var wC=Object.defineProperty,fd=Object.getOwnPropertySymbols,xC=Object.prototype.hasOwnProperty,IC=Object.prototype.propertyIsEnumerable,pd=(e,n,t)=>n in e?wC(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Hs=(e,n)=>{for(var t in n||(n={}))xC.call(n,t)&&pd(e,t,n[t]);if(fd)for(var t of fd(n))IC.call(n,t)&&pd(e,t,n[t]);return e};function AC(e){if(Cn(e)&&(["initial","auto","none"].includes(e)||/^\d+$/.test(e))||_e(e))return e;if(Cn(e)&&/^\d+(px|em|rem|%)$/.test(e))return`0 0 ${e}`}const BC=Z({name:"Col",props:{span:{type:Number,default:24},offset:{type:Number},order:{type:Number},xs:{type:[Number,Object]},sm:{type:[Number,Object]},md:{type:[Number,Object]},lg:{type:[Number,Object]},xl:{type:[Number,Object]},xxl:{type:[Number,Object]},flex:{type:[Number,String]}},setup(e){const n=oe("col"),t=Me(hm,{}),r=h(()=>AC(e.flex)),i=h(()=>{const{div:d}=t,{span:f,offset:m,order:S,xs:E,sm:P,md:k,lg:T,xl:_,xxl:v}=e,R={[`${n}`]:!d,[`${n}-order-${S}`]:S,[`${n}-${f}`]:!d&&!E&&!P&&!k&&!T&&!_&&!v,[`${n}-offset-${m}`]:m&&m>0},b={xs:E,sm:P,md:k,lg:T,xl:_,xxl:v};return Object.keys(b).forEach(C=>{const w=b[C];w&&_e(w)?R[`${n}-${C}-${w}`]=!0:w&&Je(w)&&(R[`${n}-${C}-${w.span}`]=w.span,R[`${n}-${C}-offset-${w.offset}`]=w.offset,R[`${n}-${C}-order-${w.order}`]=w.order)}),R}),s=h(()=>r.value?n:i.value),o=h(()=>{const{gutter:d,div:f}=t,m={};if(Array.isArray(d)&&!f){const S=d[0]&&d[0]/2||0,E=d[1]&&d[1]/2||0;S&&(m.paddingLeft=`${S}px`,m.paddingRight=`${S}px`),E&&(m.paddingTop=`${E}px`,m.paddingBottom=`${E}px`)}return m}),a=h(()=>r.value?{flex:r.value}:{}),l=h(()=>li(e,Xi)),c=RC(h(()=>Hs({val:e.span,key:"span"},l.value))),u=$a(c,24,!0);return{visible:h(()=>!!u.value),classNames:s,styles:h(()=>Hs(Hs({},o.value),a.value))}}});function NC(e,n,t,r,i,s){return e.visible?(B(),X("div",{key:0,class:z(e.classNames),style:we(e.styles)},[de(e.$slots,"default")],6)):Ee("v-if",!0)}var ym=he(BC,[["render",NC]]),DC=Object.defineProperty,md=Object.getOwnPropertySymbols,$C=Object.prototype.hasOwnProperty,HC=Object.prototype.propertyIsEnumerable,vd=(e,n,t)=>n in e?DC(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,gd=(e,n)=>{for(var t in n||(n={}))$C.call(n,t)&&vd(e,t,n[t]);if(md)for(var t of md(n))HC.call(n,t)&&vd(e,t,n[t]);return e};const MC=Z({name:"Tooltip",components:{Trigger:pr},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},content:String,position:{type:String,default:"top"},mini:{type:Boolean,default:!1},backgroundColor:{type:String},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const t=oe("tooltip"),r=j(e.defaultPopupVisible),i=h(()=>{var u;return(u=e.popupVisible)!=null?u:r.value}),s=u=>{r.value=u,n("update:popupVisible",u),n("popupVisibleChange",u)},o=h(()=>[`${t}-content`,e.contentClass,{[`${t}-mini`]:e.mini}]),a=h(()=>{if(e.backgroundColor||e.contentStyle)return gd({backgroundColor:e.backgroundColor},e.contentStyle)}),l=h(()=>[`${t}-popup-arrow`,e.arrowClass]),c=h(()=>{if(e.backgroundColor||e.arrowStyle)return gd({backgroundColor:e.backgroundColor},e.arrowStyle)});return{prefixCls:t,computedPopupVisible:i,contentCls:o,computedContentStyle:a,arrowCls:l,computedArrowStyle:c,handlePopupVisibleChange:s}}});function jC(e,n,t,r,i,s){const o=ae("Trigger");return B(),pe(o,{class:z(e.prefixCls),trigger:"hover",position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"show-arrow":"","content-class":e.contentCls,"content-style":e.computedContentStyle,"arrow-class":e.arrowCls,"arrow-style":e.computedArrowStyle,"popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",role:"tooltip",onPopupVisibleChange:e.handlePopupVisibleChange},{content:K(()=>[de(e.$slots,"content",{},()=>[Ae(ze(e.content),1)])]),default:K(()=>[de(e.$slots,"default")]),_:3},8,["class","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var Ms=he(MC,[["render",jC]]);const Wl=Object.assign(Ms,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Ms.name,Ms)}}),FC=Z({name:"IconQuestionCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-question-circle`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),KC=["stroke-width","stroke-linecap","stroke-linejoin"],WC=le("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),zC=le("path",{d:"M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"},null,-1),VC=[WC,zC];function UC(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},VC,14,KC)}var js=he(FC,[["render",UC]]);const qC=Object.assign(js,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+js.name,js)}}),GC=Z({name:"FormItemLabel",components:{ResizeObserver:Yi,Tooltip:Wl,IconQuestionCircle:qC},props:{required:{type:Boolean,default:!1},showColon:{type:Boolean,default:!1},component:{type:String,default:"label"},asteriskPosition:{type:String,default:"start"},tooltip:{type:String},attrs:Object},setup(){const e=oe("form-item-label"),n=Me(Nl,void 0),t=Tt(),r=j(),i=()=>{r.value&&_e(r.value.offsetWidth)&&(n==null||n.setLabelWidth(r.value.offsetWidth,t==null?void 0:t.uid))};return Ze(()=>{r.value&&_e(r.value.offsetWidth)&&(n==null||n.setLabelWidth(r.value.offsetWidth,t==null?void 0:t.uid))}),Rn(()=>{n==null||n.removeLabelWidth(t==null?void 0:t.uid)}),{prefixCls:e,labelRef:r,handleResize:i}}}),JC=le("svg",{fill:"currentColor",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[le("path",{d:"M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"})],-1),ZC=[JC],YC=le("svg",{fill:"currentColor",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[le("path",{d:"M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"})],-1),XC=[YC];function QC(e,n,t,r,i,s){const o=ae("icon-question-circle"),a=ae("Tooltip"),l=ae("ResizeObserver");return B(),pe(l,{onResize:e.handleResize},{default:K(()=>[(B(),pe(Zn(e.component),He({ref:"labelRef",class:e.prefixCls},e.attrs),{default:K(()=>[e.required&&e.asteriskPosition==="start"?(B(),X("strong",{key:0,class:z(`${e.prefixCls}-required-symbol`)},ZC,2)):Ee("v-if",!0),de(e.$slots,"default"),e.tooltip?(B(),pe(a,{key:1,content:e.tooltip},{default:K(()=>[O(o,{class:z(`${e.prefixCls}-tooltip`)},null,8,["class"])]),_:1},8,["content"])):Ee("v-if",!0),e.required&&e.asteriskPosition==="end"?(B(),X("strong",{key:2,class:z(`${e.prefixCls}-required-symbol`)},XC,2)):Ee("v-if",!0),Ae(" "+ze(e.showColon?":":""),1)]),_:3},16,["class"]))]),_:3},8,["onResize"])}var eL=he(GC,[["render",QC]]);const nL=Z({name:"FormItemMessage",props:{error:{type:Array,default:()=>[]},help:String},setup(){return{prefixCls:oe("form-item-message")}}});function tL(e,n,t,r,i,s){return e.error.length>0?(B(!0),X(Ke,{key:0},ai(e.error,o=>(B(),pe(Wn,{key:o,name:"form-blink",appear:""},{default:K(()=>[le("div",{role:"alert",class:z([e.prefixCls])},ze(o),3)]),_:2},1024))),128)):e.help||e.$slots.help?(B(),pe(Wn,{key:1,name:"form-blink",appear:""},{default:K(()=>[le("div",{class:z([e.prefixCls,`${e.prefixCls}-help`])},[de(e.$slots,"help",{},()=>[Ae(ze(e.help),1)])],2)]),_:3})):Ee("v-if",!0)}var rL=he(nL,[["render",tL]]),iL=Object.defineProperty,eo=Object.getOwnPropertySymbols,Sm=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,hd=(e,n,t)=>n in e?iL(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,bd=(e,n)=>{for(var t in n||(n={}))Sm.call(n,t)&&hd(e,t,n[t]);if(eo)for(var t of eo(n))Em.call(n,t)&&hd(e,t,n[t]);return e},oL=(e,n)=>{var t={};for(var r in e)Sm.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&eo)for(var r of eo(e))n.indexOf(r)<0&&Em.call(e,r)&&(t[r]=e[r]);return t};const sL=Z({name:"FormItem",components:{ArcoRow:bm,ArcoCol:ym,FormItemLabel:eL,FormItemMessage:rL},props:{field:{type:String,default:""},label:String,tooltip:{type:String},showColon:{type:Boolean,default:!1},noStyle:{type:Boolean,default:!1},disabled:{type:Boolean,default:void 0},help:String,extra:String,required:{type:Boolean,default:!1},asteriskPosition:{type:String,default:"start"},rules:{type:[Object,Array]},validateStatus:{type:String},validateTrigger:{type:[String,Array],default:"change"},labelColProps:Object,wrapperColProps:Object,hideLabel:{type:Boolean,default:!1},hideAsterisk:{type:Boolean,default:!1},labelColStyle:Object,wrapperColStyle:Object,rowProps:Object,rowClass:[String,Array,Object],contentClass:[String,Array,Object],contentFlex:{type:Boolean,default:!0},mergeProps:{type:[Boolean,Function],default:!0},labelColFlex:{type:[Number,String]},feedback:{type:Boolean,default:!1},labelComponent:{type:String,default:"label"},labelAttrs:Object},setup(e){const n=oe("form-item"),{field:t}=De(e),r=Me(Nl,{}),{autoLabelWidth:i,layout:s}=De(r),{i18nMessage:o}=Po(),a=h(()=>{var q;const se=bd({},(q=e.labelColProps)!=null?q:r.labelColProps);return e.labelColFlex?se.flex=e.labelColFlex:r.autoLabelWidth&&(se.flex=`${r.maxLabelWidth}px`),se}),l=h(()=>{var q;const se=bd({},(q=e.wrapperColProps)!=null?q:r.wrapperColProps);return t.value&&(se.id=mm(r.id,t.value)),(e.labelColFlex||r.autoLabelWidth)&&(se.flex="auto"),se}),c=h(()=>{var q;return(q=e.labelColStyle)!=null?q:r.labelColStyle}),u=h(()=>{var q;return(q=e.wrapperColStyle)!=null?q:r.wrapperColStyle}),d=rd(r.model,e.field),f=We({}),m=We({}),S=h(()=>iC(f)),E=h(()=>oC(m)),P=j(!1),k=h(()=>rd(r.model,e.field)),T=h(()=>{var q;return!!((q=e.disabled)!=null?q:r!=null&&r.disabled)}),_=h(()=>{var q;return(q=e.validateStatus)!=null?q:S.value}),v=h(()=>_.value==="error"),R=h(()=>{var q,se,fe;const Ce=[].concat((fe=(se=e.rules)!=null?se:(q=r==null?void 0:r.rules)==null?void 0:q[e.field])!=null?fe:[]),Ne=Ce.some(Te=>Te.required);return e.required&&!Ne?[{required:!0}].concat(Ce):Ce}),b=h(()=>R.value.some(q=>q.required)),C=e.noStyle?Me(Ba,void 0):void 0,w=(q,{status:se,message:fe})=>{f[q]=se,m[q]=fe,e.noStyle&&(C==null||C.updateValidateState(q,{status:se,message:fe}))},x=h(()=>e.feedback&&_.value?_.value:void 0),I=()=>{var q;if(P.value)return Promise.resolve();const se=R.value;if(!t.value||se.length===0)return S.value&&F(),Promise.resolve();const fe=t.value,Ce=k.value;w(fe,{status:"",message:""});const Ne=new Kl({[fe]:se.map(Te=>{var me=oL(Te,[]);return!me.type&&!me.validator&&(me.type="string"),me})},{ignoreEmptyString:!0,validateMessages:(q=o.value.form)==null?void 0:q.validateMessages});return new Promise(Te=>{Ne.validate({[fe]:Ce},me=>{var $;const Y=!!(me!=null&&me[fe]);w(fe,{status:Y?"error":"",message:($=me==null?void 0:me[fe].message)!=null?$:""});const G=Y?{label:e.label,field:t.value,value:me[fe].value,type:me[fe].type,isRequiredError:!!me[fe].requiredError,message:me[fe].message}:void 0;Te(G)})})},H=h(()=>[].concat(e.validateTrigger)),D=h(()=>H.value.reduce((q,se)=>{switch(se){case"change":return q.onChange=()=>{I()},q;case"input":return q.onInput=()=>{Fe(()=>{I()})},q;case"focus":return q.onFocus=()=>{I()},q;case"blur":return q.onBlur=()=>{I()},q;default:return q}},{}));fn(Ba,We({eventHandlers:D,size:r&&Wi(r,"size"),disabled:T,error:v,feedback:x,updateValidateState:w}));const F=()=>{t.value&&w(t.value,{status:"",message:""})},te=We({field:t,disabled:T,error:v,validate:I,clearValidate:F,resetField:()=>{F(),P.value=!0,r!=null&&r.model&&t.value&&id(r.model,t.value,d),Fe(()=>{P.value=!1})},setField:q=>{var se,fe;t.value&&(P.value=!0,"value"in q&&(r!=null&&r.model)&&t.value&&id(r.model,t.value,q.value),(q.status||q.message)&&w(t.value,{status:(se=q.status)!=null?se:"",message:(fe=q.message)!=null?fe:""}),Fe(()=>{P.value=!1}))}});Ze(()=>{var q;te.field&&((q=r.addField)==null||q.call(r,te))}),Rn(()=>{var q;te.field&&((q=r.removeField)==null||q.call(r,te))});const re=h(()=>[n,`${n}-layout-${r.layout}`,{[`${n}-error`]:v.value,[`${n}-status-${_.value}`]:!!_.value},e.rowClass]),U=h(()=>[`${n}-label-col`,{[`${n}-label-col-left`]:r.labelAlign==="left",[`${n}-label-col-flex`]:r.autoLabelWidth||e.labelColFlex}]),ge=h(()=>[`${n}-wrapper-col`,{[`${n}-wrapper-col-flex`]:!l.value}]);return{prefixCls:n,cls:re,isRequired:b,isError:v,finalMessage:E,mergedLabelCol:a,mergedWrapperCol:l,labelColCls:U,autoLabelWidth:i,layout:s,mergedLabelStyle:c,wrapperColCls:ge,mergedWrapperStyle:u}}});function aL(e,n,t,r,i,s){var o;const a=ae("FormItemLabel"),l=ae("ArcoCol"),c=ae("FormItemMessage"),u=ae("ArcoRow");return e.noStyle?de(e.$slots,"default",{key:0}):(B(),pe(u,He({key:1,class:[e.cls,{[`${e.prefixCls}-has-help`]:!!((o=e.$slots.help)!=null?o:e.help)}],wrap:!(e.labelColFlex||e.autoLabelWidth),div:e.layout!=="horizontal"||e.hideLabel},e.rowProps),{default:K(()=>[e.hideLabel?Ee("v-if",!0):(B(),pe(l,He({key:0,class:e.labelColCls,style:e.mergedLabelStyle},e.mergedLabelCol),{default:K(()=>[O(a,{required:e.hideAsterisk?!1:e.isRequired,"show-colon":e.showColon,"asterisk-position":e.asteriskPosition,component:e.labelComponent,attrs:e.labelAttrs,tooltip:e.tooltip},{default:K(()=>[e.$slots.label||e.label?de(e.$slots,"label",{key:0},()=>[Ae(ze(e.label),1)]):Ee("v-if",!0)]),_:3},8,["required","show-colon","asterisk-position","component","attrs","tooltip"])]),_:3},16,["class","style"])),O(l,He({class:e.wrapperColCls,style:e.mergedWrapperStyle},e.mergedWrapperCol),{default:K(()=>[le("div",{class:z(`${e.prefixCls}-content-wrapper`)},[le("div",{class:z([`${e.prefixCls}-content`,{[`${e.prefixCls}-content-flex`]:e.contentFlex},e.contentClass])},[de(e.$slots,"default")],2)],2),e.isError||e.$slots.help||e.help?(B(),pe(c,{key:0,error:e.finalMessage,help:e.help},Xr({_:2},[e.$slots.help?{name:"help",fn:K(()=>[de(e.$slots,"help")])}:void 0]),1032,["error","help"])):Ee("v-if",!0),e.$slots.extra||e.extra?(B(),X("div",{key:1,class:z(`${e.prefixCls}-extra`)},[de(e.$slots,"extra",{},()=>[Ae(ze(e.extra),1)])],2)):Ee("v-if",!0)]),_:3},16,["class","style"])]),_:3},16,["class","wrap","div"]))}var Di=he(sL,[["render",aL]]);const lL=Object.assign($s,{Item:Di,install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+$s.name,$s),e.component(t+Di.name,Di)}}),cL=Z({name:"IconPlus",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-plus`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),uL=["stroke-width","stroke-linecap","stroke-linejoin"],dL=le("path",{d:"M5 24h38M24 5v38"},null,-1),fL=[dL];function pL(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},fL,14,uL)}var Fs=he(cL,[["render",pL]]);const mL=Object.assign(Fs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Fs.name,Fs)}}),vL=Z({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-drag-dot`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),gL=["stroke-width","stroke-linecap","stroke-linejoin"],hL=le("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),bL=le("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),yL=[hL,bL];function SL(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},yL,14,gL)}var Ks=he(vL,[["render",SL]]);const EL=Object.assign(Ks,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ks.name,Ks)}}),_L=Z({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-drag-dot-vertical`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),kL=["stroke-width","stroke-linecap","stroke-linejoin"],TL=le("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),OL=le("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),PL=[TL,OL];function CL(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},PL,14,kL)}var Ws=he(_L,[["render",CL]]);const LL=Object.assign(Ws,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ws.name,Ws)}});var RL=Z({name:"ResizeTrigger",components:{ResizeObserver:Rl,IconDragDot:EL,IconDragDotVertical:LL},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:n}){const{direction:t,prefixCls:r}=De(e),i=h(()=>(t==null?void 0:t.value)==="horizontal");return{classNames:h(()=>[r.value,{[`${r.value}-horizontal`]:i.value,[`${r.value}-vertical`]:!i.value}]),onResize:a=>{n("resize",a)},isHorizontal:i}}});function wL(e,n,t,r,i,s){const o=ae("IconDragDot"),a=ae("IconDragDotVertical"),l=ae("ResizeObserver");return B(),pe(l,{onResize:e.onResize},{default:K(()=>[le("div",{class:z(e.classNames)},[Ee(" @slot 自定义内容 "),de(e.$slots,"default",{},()=>[le("div",{class:z(`${e.prefixCls}-icon-wrapper`)},[Ee(" @slot 自定义 icon "),de(e.$slots,"icon",{},()=>[e.isHorizontal?(B(),pe(o,{key:0,class:z(`${e.prefixCls}-icon`)},null,8,["class"])):(B(),pe(a,{key:1,class:z(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var xL=he(RL,[["render",wL]]);const IL=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],AL=e=>{const n={};return IL.forEach(t=>{n[t]=e.getPropertyValue(t)}),n},BL=Z({name:"Textarea",components:{ResizeObserver:Rl,IconHover:yn,IconClose:Jt},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,n)=>!0,change:(e,n)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:n,attrs:t}){const{disabled:r,error:i,modelValue:s}=De(e),o=oe("textarea"),{mergedDisabled:a,mergedError:l,eventHandlers:c}=Nn({disabled:r,error:i}),u=j(),d=j(),f=j(),m=j(),S=j(e.defaultValue),E=h(()=>{var p;return(p=s.value)!=null?p:S.value}),[P,k]=Zp(u);Oe(s,p=>{(pn(p)||qt(p))&&(S.value="")});const T=h(()=>Je(e.maxLength)&&!!e.maxLength.errorOnly),_=h(()=>Je(e.maxLength)?e.maxLength.length:e.maxLength),v=p=>{var g;return Xe(e.wordLength)?e.wordLength(p):(g=p.length)!=null?g:0},R=h(()=>v(E.value)),b=h(()=>l.value||!!(_.value&&T.value&&R.value>_.value)),C=j(!1),w=j(!1),x=h(()=>e.allowClear&&!a.value&&E.value),I=j(!1),H=j(""),D=()=>{P(),Fe(()=>{u.value&&E.value!==u.value.value&&(u.value.value=E.value,k())})},F=(p,g=!0)=>{var L,A;_.value&&!T.value&&v(p)>_.value&&(p=(A=(L=e.wordSlice)==null?void 0:L.call(e,p,_.value))!=null?A:p.slice(0,_.value)),S.value=p,g&&n("update:modelValue",p),D()};let ie=E.value;const ce=(p,g)=>{var L,A;p!==ie&&(ie=p,n("change",p,g),(A=(L=c.value)==null?void 0:L.onChange)==null||A.call(L,g))},te=p=>{var g,L;w.value=!0,ie=E.value,n("focus",p),(L=(g=c.value)==null?void 0:g.onFocus)==null||L.call(g,p)},re=p=>{var g,L;w.value=!1,n("blur",p),(L=(g=c.value)==null?void 0:g.onBlur)==null||L.call(g,p),ce(E.value,p)},U=p=>{var g,L;const{value:A}=p.target;if(p.type==="compositionend"){if(I.value=!1,H.value="",_.value&&!T.value&&E.value.length>=_.value&&v(A)>_.value){D();return}n("input",A,p),F(A),(L=(g=c.value)==null?void 0:g.onInput)==null||L.call(g,p)}else I.value=!0},ge=p=>{var g,L;const{value:A}=p.target;if(I.value)H.value=A;else{if(_.value&&!T.value&&E.value.length>=_.value&&v(A)>_.value&&p.inputType==="insertText"){D();return}n("input",A,p),F(A),(L=(g=c.value)==null?void 0:g.onInput)==null||L.call(g,p)}},q=p=>{F(""),ce("",p),n("clear",p)};Oe(s,p=>{p!==E.value&&F(p??"",!1)});const se=p=>kr(t,Et),fe=p=>li(t,Et),Ce=h(()=>[`${o}-wrapper`,{[`${o}-focus`]:w.value,[`${o}-disabled`]:a.value,[`${o}-error`]:b.value,[`${o}-scroll`]:C.value}]);let Ne;const Te=j(0),me=j(0),$=h(()=>!Je(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*Te.value+me.value),Y=h(()=>!Je(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*Te.value+me.value),G=()=>{const p=AL(Ne);Te.value=Number.parseInt(p["line-height"]||0,10),me.value=Number.parseInt(p["border-width"]||0,10)*2+Number.parseInt(p["padding-top"]||0,10)+Number.parseInt(p["padding-bottom"]||0,10),m.value=p,Fe(()=>{var g;const L=(g=f.value)==null?void 0:g.offsetHeight;let A=L??0,W="hidden";$.value&&A<$.value&&(A=$.value),Y.value&&A>Y.value&&(A=Y.value,W="auto"),d.value={height:`${A}px`,resize:"none",overflow:W}})};Ze(()=>{u.value&&(Ne=window.getComputedStyle(u.value),e.autoSize&&G()),y()});const ue=()=>{e.autoSize&&f.value&&G(),y()},Le=p=>{u.value&&p.target!==u.value&&(p.preventDefault(),u.value.focus())},y=()=>{u.value&&(u.value.scrollHeight>u.value.offsetHeight?C.value||(C.value=!0):C.value&&(C.value=!1))};return Oe(E,()=>{e.autoSize&&f.value&&G(),y()}),{prefixCls:o,wrapperCls:Ce,textareaRef:u,textareaStyle:d,mirrorRef:f,mirrorStyle:m,computedValue:E,showClearBtn:x,valueLength:R,computedMaxLength:_,mergedDisabled:a,getWrapperAttrs:se,getTextareaAttrs:fe,handleInput:ge,handleFocus:te,handleBlur:re,handleComposition:U,handleClear:q,handleResize:ue,handleMousedown:Le}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),NL=["disabled","value","placeholder"];function DL(e,n,t,r,i,s){const o=ae("resize-observer"),a=ae("icon-close"),l=ae("icon-hover");return B(),X("div",He(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:n[7]||(n[7]=(...c)=>e.handleMousedown&&e.handleMousedown(...c))}),[e.autoSize?(B(),X("div",{key:0,ref:"mirrorRef",class:z(`${e.prefixCls}-mirror`),style:we(e.mirrorStyle)},ze(`${e.computedValue}
`),7)):Ee("v-if",!0),O(o,{onResize:e.handleResize},{default:K(()=>[le("textarea",He({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:n[0]||(n[0]=(...c)=>e.handleInput&&e.handleInput(...c)),onFocus:n[1]||(n[1]=(...c)=>e.handleFocus&&e.handleFocus(...c)),onBlur:n[2]||(n[2]=(...c)=>e.handleBlur&&e.handleBlur(...c)),onCompositionstart:n[3]||(n[3]=(...c)=>e.handleComposition&&e.handleComposition(...c)),onCompositionupdate:n[4]||(n[4]=(...c)=>e.handleComposition&&e.handleComposition(...c)),onCompositionend:n[5]||(n[5]=(...c)=>e.handleComposition&&e.handleComposition(...c))}),null,16,NL)]),_:1},8,["onResize"]),de(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(B(),X("div",{key:1,class:z(`${e.prefixCls}-word-limit`)},ze(e.valueLength)+"/"+ze(e.computedMaxLength),3)):Ee("v-if",!0),e.showClearBtn?(B(),X("div",{key:2,class:z(`${e.prefixCls}-clear-btn`),onClick:n[6]||(n[6]=(...c)=>e.handleClear&&e.handleClear(...c))},[O(l,null,{default:K(()=>[O(a)]),_:1})],2)):Ee("v-if",!0)],16)}var zs=he(BL,[["render",DL]]);const $L=Object.assign(zs,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+zs.name,zs)}}),HL=Z({name:"Message",components:{AIconHover:yn,IconInfoCircleFill:Il,IconCheckCircleFill:Lo,IconExclamationCircleFill:Ro,IconCloseCircleFill:wo,IconClose:Jt,IconLoading:Ot},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:n}){const t=oe("message");let r=0;const i=()=>{n("close")},s=()=>{e.duration>0&&(r=window.setTimeout(i,e.duration))},o=()=>{r&&(window.clearTimeout(r),r=0)};return Ze(()=>{s()}),_t(()=>{e.resetOnUpdate&&(o(),s())}),kt(()=>{o()}),{handleMouseEnter:()=>{e.resetOnHover&&o()},handleMouseLeave:()=>{e.resetOnHover&&s()},prefixCls:t,handleClose:i}}});function ML(e,n,t,r,i,s){const o=ae("icon-info-circle-fill"),a=ae("icon-check-circle-fill"),l=ae("icon-exclamation-circle-fill"),c=ae("icon-close-circle-fill"),u=ae("icon-loading"),d=ae("icon-close"),f=ae("a-icon-hover");return B(),X("li",{role:"alert",class:z([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:n[1]||(n[1]=(...m)=>e.handleMouseEnter&&e.handleMouseEnter(...m)),onMouseleave:n[2]||(n[2]=(...m)=>e.handleMouseLeave&&e.handleMouseLeave(...m))},[e.showIcon&&!(e.type==="normal"&&!e.$slots.icon)?(B(),X("span",{key:0,class:z(`${e.prefixCls}-icon`)},[de(e.$slots,"icon",{},()=>[e.type==="info"?(B(),pe(o,{key:0})):e.type==="success"?(B(),pe(a,{key:1})):e.type==="warning"?(B(),pe(l,{key:2})):e.type==="error"?(B(),pe(c,{key:3})):e.type==="loading"?(B(),pe(u,{key:4})):Ee("v-if",!0)])],2)):Ee("v-if",!0),le("span",{class:z(`${e.prefixCls}-content`)},[de(e.$slots,"default")],2),e.closable?(B(),X("span",{key:1,class:z(`${e.prefixCls}-close-btn`),onClick:n[0]||(n[0]=(...m)=>e.handleClose&&e.handleClose(...m))},[O(f,null,{default:K(()=>[O(d)]),_:1})],2)):Ee("v-if",!0)],34)}var jL=he(HL,[["render",ML]]);function FL(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!jt(e)}var KL=Z({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,n){const t=oe("message-list"),{zIndex:r}=Dl("message",{runOnMounted:!0});return()=>{let i;return O(bl,{class:[t,`${t}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:r.value},onAfterLeave:()=>n.emit("afterClose")},FL(i=e.messages.map(s=>{const o={default:Kr(s.content),icon:Kr(s.icon)};return O(jL,{key:s.id,type:s.type,duration:s.duration,closable:s.closable,resetOnUpdate:s.resetOnUpdate,resetOnHover:s.resetOnHover,onClose:()=>n.emit("close",s.id)},o)}))?i:{default:()=>[i]})}}}),WL=Object.defineProperty,zL=Object.defineProperties,VL=Object.getOwnPropertyDescriptors,yd=Object.getOwnPropertySymbols,UL=Object.prototype.hasOwnProperty,qL=Object.prototype.propertyIsEnumerable,Sd=(e,n,t)=>n in e?WL(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,no=(e,n)=>{for(var t in n||(n={}))UL.call(n,t)&&Sd(e,t,n[t]);if(yd)for(var t of yd(n))qL.call(n,t)&&Sd(e,t,n[t]);return e},_m=(e,n)=>zL(e,VL(n));class GL{constructor(n,t){this.messageCount=0,this.add=s=>{var o;this.messageCount++;const a=(o=s.id)!=null?o:`__arco_message_${this.messageCount}`;if(this.messageIds.has(a))return this.update(a,s);const l=We(no({id:a},s));return this.messages.value.push(l),this.messageIds.add(a),{close:()=>this.remove(a)}},this.update=(s,o)=>{for(let a=0;a<this.messages.value.length;a++)if(this.messages.value[a].id===s){const l=!pn(o.duration);Object.assign(this.messages.value[a],_m(no({},o),{id:s,resetOnUpdate:l}));break}return{close:()=>this.remove(s)}},this.remove=s=>{for(let o=0;o<this.messages.value.length;o++){const a=this.messages.value[o];if(a.id===s){Xe(a.onClose)&&a.onClose(s),this.messages.value.splice(o,1),this.messageIds.delete(s);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{this.messages.value.length===0&&this.container&&(qi(null,this.container),document.body.removeChild(this.container),this.container=null,ir[this.position]=void 0)};const{position:r="top"}=n;this.container=Gp("message"),this.messageIds=new Set,this.messages=j([]),this.position=r;const i=O(KL,{messages:this.messages.value,position:r,onClose:this.remove,onAfterClose:this.destroy});(t??In._context)&&(i.appContext=t??In._context),qi(i,this.container),document.body.appendChild(this.container)}}const ir={},km=[...Jp,"loading","normal"],$i=km.reduce((e,n)=>(e[n]=(t,r)=>{Cn(t)&&(t={content:t});const i=no({type:n},t),{position:s="top"}=i;return ir[s]||(ir[s]=new GL(i,r)),ir[s].add(i)},e),{});$i.clear=e=>{var n;e?(n=ir[e])==null||n.clear():Object.values(ir).forEach(t=>t==null?void 0:t.clear())};const In=_m(no({},$i),{install:e=>{const n={clear:$i.clear};for(const t of km)n[t]=(r,i=e._context)=>$i[t](r,i);e.config.globalProperties.$message=n},_context:null}),JL=({modalRef:e,wrapperRef:n,draggable:t,alignCenter:r})=>{const i=j(!1),s=j([0,0]),o=j([0,0]),a=j(),l=j([0,0]),c=j([0,0]),u=()=>{var S,E,P;if(n.value&&e.value){const{top:k,left:T}=n.value.getBoundingClientRect(),{clientWidth:_,clientHeight:v}=n.value,{top:R,left:b,width:C,height:w}=e.value.getBoundingClientRect(),x=r.value?0:(S=e.value)==null?void 0:S.offsetTop,I=b-T,H=R-k-x;(I!==((E=o.value)==null?void 0:E[0])||H!==((P=o.value)==null?void 0:P[1]))&&(o.value=[I,H]);const D=_>C?_-C:0,F=v>w?v-w-x:0;(D!==c.value[0]||F!==c.value[1])&&(c.value=[D,F]),x&&(l.value=[0,0-x])}},d=S=>{t.value&&(S.preventDefault(),i.value=!0,u(),s.value=[S.x,S.y],hn(window,"mousemove",f),hn(window,"mouseup",m),hn(window,"contextmenu",m))},f=S=>{if(i.value){const E=S.x-s.value[0],P=S.y-s.value[1];let k=o.value[0]+E,T=o.value[1]+P;k<l.value[0]&&(k=l.value[0]),k>c.value[0]&&(k=c.value[0]),T<l.value[1]&&(T=l.value[1]),T>c.value[1]&&(T=c.value[1]),a.value=[k,T]}},m=()=>{i.value=!1,Fn(window,"mousemove",f),Fn(window,"mouseup",m)};return{position:a,handleMoveDown:d}};var ZL=Object.defineProperty,Ed=Object.getOwnPropertySymbols,YL=Object.prototype.hasOwnProperty,XL=Object.prototype.propertyIsEnumerable,_d=(e,n,t)=>n in e?ZL(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,QL=(e,n)=>{for(var t in n||(n={}))YL.call(n,t)&&_d(e,t,n[t]);if(Ed)for(var t of Ed(n))XL.call(n,t)&&_d(e,t,n[t]);return e},eR=Z({name:"Modal",components:{ClientOnly:nm,ArcoButton:nt,IconHover:yn,IconClose:Jt,IconInfoCircleFill:Il,IconCheckCircleFill:Lo,IconExclamationCircleFill:Ro,IconCloseCircleFill:wo},inheritAttrs:!1,props:{visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},width:{type:[Number,String]},top:{type:[Number,String]},mask:{type:Boolean,default:!0},title:{type:String},titleAlign:{type:String,default:"center"},alignCenter:{type:Boolean,default:!0},unmountOnClose:Boolean,maskClosable:{type:Boolean,default:!0},hideCancel:{type:Boolean,default:!1},simple:{type:Boolean,default:e=>e.notice},closable:{type:Boolean,default:!0},okText:String,cancelText:String,okLoading:{type:Boolean,default:!1},okButtonProps:{type:Object},cancelButtonProps:{type:Object},footer:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},popupContainer:{type:[String,Object],default:"body"},maskStyle:{type:Object},modalClass:{type:[String,Array]},modalStyle:{type:Object},onBeforeOk:{type:Function},onBeforeCancel:{type:Function},escToClose:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},maskAnimationName:{type:String,default:e=>e.fullscreen?"fade-in-standard":"fade-modal"},modalAnimationName:{type:String,default:e=>e.fullscreen?"zoom-in":"zoom-modal"},bodyClass:{type:[String,Array]},bodyStyle:{type:[String,Object,Array]},messageType:{type:String},hideTitle:{type:Boolean,default:!1}},emits:{"update:visible":e=>!0,ok:e=>!0,cancel:e=>!0,open:()=>!0,close:()=>!0,beforeOpen:()=>!0,beforeClose:()=>!0},setup(e,{emit:n}){const{fullscreen:t,popupContainer:r,alignCenter:i}=De(e),s=oe("modal"),{t:o}=Po(),a=j(),l=j(),c=j(e.defaultVisible),u=h(()=>{var Te;return(Te=e.visible)!=null?Te:c.value}),d=j(!1),f=h(()=>e.okLoading||d.value),m=h(()=>e.draggable&&!e.fullscreen),{teleportContainer:S,containerRef:E}=tm({popupContainer:r,visible:u}),P=j(u.value),k=h(()=>e.okText||o("modal.okText")),T=h(()=>e.cancelText||o("modal.cancelText")),{zIndex:_,isLastDialog:v}=Dl("dialog",{visible:u});let R=!1;const b=Te=>{e.escToClose&&Te.key===Nr.ESC&&v()&&ie(Te)},C=()=>{e.escToClose&&!R&&(R=!0,hn(document.documentElement,"keydown",b))},w=()=>{R=!1,Fn(document.documentElement,"keydown",b)};let x=0;const{position:I,handleMoveDown:H}=JL({wrapperRef:a,modalRef:l,draggable:m,alignCenter:i}),D=()=>{x++,d.value&&(d.value=!1),c.value=!1,n("update:visible",!1)},F=async Te=>{const me=x,$=await new Promise(async Y=>{var G;if(Xe(e.onBeforeOk)){let ue=e.onBeforeOk((Le=!0)=>Y(Le));if((Gi(ue)||!St(ue))&&(d.value=!0),Gi(ue))try{ue=(G=await ue)!=null?G:!0}catch{ue=!1}St(ue)&&Y(ue)}else Y(!0)});me===x&&($?(n("ok",Te),D()):d.value&&(d.value=!1))},ie=Te=>{var me;let $=!0;Xe(e.onBeforeCancel)&&($=(me=e.onBeforeCancel())!=null?me:!1),$&&(n("cancel",Te),D())},ce=j(!1),te=Te=>{Te.target===a.value&&(ce.value=!0)},re=Te=>{e.mask&&e.maskClosable&&ce.value&&ie(Te)},U=()=>{u.value&&(!s_(a.value,document.activeElement)&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n("open"))},ge=()=>{u.value||(m.value&&(I.value=void 0),P.value=!1,se(),n("close"))},{setOverflowHidden:q,resetOverflow:se}=eC(E);Ze(()=>{E.value=Aa(e.popupContainer),u.value&&(q(),e.escToClose&&C())}),Rn(()=>{se(),w()}),Oe(u,Te=>{c.value!==Te&&(c.value=Te),Te?(n("beforeOpen"),P.value=!0,ce.value=!1,q(),C()):(n("beforeClose"),w())}),Oe(t,()=>{I.value&&(I.value=void 0)});const fe=h(()=>[`${s}-wrapper`,{[`${s}-wrapper-align-center`]:e.alignCenter&&!e.fullscreen,[`${s}-wrapper-moved`]:!!I.value}]),Ce=h(()=>[`${s}`,e.modalClass,{[`${s}-simple`]:e.simple,[`${s}-draggable`]:m.value,[`${s}-fullscreen`]:e.fullscreen}]),Ne=h(()=>{var Te;const me=QL({},(Te=e.modalStyle)!=null?Te:{});return e.width&&!e.fullscreen&&(me.width=_e(e.width)?`${e.width}px`:e.width),!e.alignCenter&&e.top&&(me.top=_e(e.top)?`${e.top}px`:e.top),I.value&&(me.transform=`translate(${I.value[0]}px, ${I.value[1]}px)`),me});return{prefixCls:s,mounted:P,computedVisible:u,containerRef:E,wrapperRef:a,mergedModalStyle:Ne,okDisplayText:k,cancelDisplayText:T,zIndex:_,handleOk:F,handleCancel:ie,handleMaskClick:re,handleMaskMouseDown:te,handleOpen:U,handleClose:ge,mergedOkLoading:f,modalRef:l,wrapperCls:fe,modalCls:Ce,teleportContainer:S,handleMoveDown:H}}});function nR(e,n,t,r,i,s){const o=ae("icon-info-circle-fill"),a=ae("icon-check-circle-fill"),l=ae("icon-exclamation-circle-fill"),c=ae("icon-close-circle-fill"),u=ae("icon-close"),d=ae("icon-hover"),f=ae("arco-button"),m=ae("client-only");return B(),pe(m,null,{default:K(()=>[(B(),pe(zf,{to:e.teleportContainer,disabled:!e.renderToBody},[!e.unmountOnClose||e.computedVisible||e.mounted?jn((B(),X("div",He({key:0,class:`${e.prefixCls}-container`,style:{zIndex:e.zIndex}},e.$attrs),[O(Wn,{name:e.maskAnimationName,appear:""},{default:K(()=>[e.mask?jn((B(),X("div",{key:0,ref:"maskRef",class:z(`${e.prefixCls}-mask`),style:we(e.maskStyle)},null,6)),[[Ht,e.computedVisible]]):Ee("v-if",!0)]),_:1},8,["name"]),le("div",{ref:"wrapperRef",class:z(e.wrapperCls),onClick:n[2]||(n[2]=Xn((...S)=>e.handleMaskClick&&e.handleMaskClick(...S),["self"])),onMousedown:n[3]||(n[3]=Xn((...S)=>e.handleMaskMouseDown&&e.handleMaskMouseDown(...S),["self"]))},[O(Wn,{name:e.modalAnimationName,appear:"",onAfterEnter:e.handleOpen,onAfterLeave:e.handleClose},{default:K(()=>[jn(le("div",{ref:"modalRef",class:z(e.modalCls),style:we(e.mergedModalStyle)},[!e.hideTitle&&(e.$slots.title||e.title||e.closable)?(B(),X("div",{key:0,class:z(`${e.prefixCls}-header`),onMousedown:n[1]||(n[1]=(...S)=>e.handleMoveDown&&e.handleMoveDown(...S))},[e.$slots.title||e.title?(B(),X("div",{key:0,class:z([`${e.prefixCls}-title`,`${e.prefixCls}-title-align-${e.titleAlign}`])},[e.messageType?(B(),X("div",{key:0,class:z(`${e.prefixCls}-title-icon`)},[e.messageType==="info"?(B(),pe(o,{key:0})):Ee("v-if",!0),e.messageType==="success"?(B(),pe(a,{key:1})):Ee("v-if",!0),e.messageType==="warning"?(B(),pe(l,{key:2})):Ee("v-if",!0),e.messageType==="error"?(B(),pe(c,{key:3})):Ee("v-if",!0)],2)):Ee("v-if",!0),de(e.$slots,"title",{},()=>[Ae(ze(e.title),1)])],2)):Ee("v-if",!0),!e.simple&&e.closable?(B(),X("div",{key:1,tabindex:"-1",role:"button","aria-label":"Close",class:z(`${e.prefixCls}-close-btn`),onClick:n[0]||(n[0]=(...S)=>e.handleCancel&&e.handleCancel(...S))},[O(d,null,{default:K(()=>[O(u)]),_:1})],2)):Ee("v-if",!0)],34)):Ee("v-if",!0),le("div",{class:z([`${e.prefixCls}-body`,e.bodyClass]),style:we(e.bodyStyle)},[de(e.$slots,"default")],6),e.footer?(B(),X("div",{key:1,class:z(`${e.prefixCls}-footer`)},[de(e.$slots,"footer",{},()=>[e.hideCancel?Ee("v-if",!0):(B(),pe(f,He({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:K(()=>[Ae(ze(e.cancelDisplayText),1)]),_:1},16,["onClick"])),O(f,He({type:"primary"},e.okButtonProps,{loading:e.mergedOkLoading,onClick:e.handleOk}),{default:K(()=>[Ae(ze(e.okDisplayText),1)]),_:1},16,["loading","onClick"])])],2)):Ee("v-if",!0)],6),[[Ht,e.computedVisible]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],34)],16)),[[Ht,e.computedVisible||e.mounted]]):Ee("v-if",!0)],8,["to","disabled"]))]),_:3})}var Hi=he(eR,[["render",nR]]),tR=Object.defineProperty,rR=Object.defineProperties,iR=Object.getOwnPropertyDescriptors,kd=Object.getOwnPropertySymbols,oR=Object.prototype.hasOwnProperty,sR=Object.prototype.propertyIsEnumerable,Td=(e,n,t)=>n in e?tR(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Mt=(e,n)=>{for(var t in n||(n={}))oR.call(n,t)&&Td(e,t,n[t]);if(kd)for(var t of kd(n))sR.call(n,t)&&Td(e,t,n[t]);return e},aR=(e,n)=>rR(e,iR(n));const Vs=(e,n)=>{let t=Gp("modal");const r=()=>{c.component&&(c.component.props.visible=!1),Xe(e.onOk)&&e.onOk()},i=()=>{c.component&&(c.component.props.visible=!1),Xe(e.onCancel)&&e.onCancel()},s=async()=>{await Fe(),t&&(qi(null,t),document.body.removeChild(t)),t=null,Xe(e.onClose)&&e.onClose()},o=()=>{c.component&&(c.component.props.visible=!1)},a=u=>{c.component&&Object.entries(u).forEach(([d,f])=>{c.component.props[d]=f})},c=O(Hi,Mt(Mt(Mt({},{visible:!0,renderToBody:!1,unmountOnClose:!0,onOk:r,onCancel:i,onClose:s}),kr(e,["content","title","footer","visible","unmountOnClose","onOk","onCancel","onClose"])),{footer:typeof e.footer=="boolean"?e.footer:void 0}),{default:Kr(e.content),title:Kr(e.title),footer:typeof e.footer!="boolean"?Kr(e.footer):void 0});return(n??ja._context)&&(c.appContext=n??ja._context),qi(c,t),document.body.appendChild(t),{close:o,update:a}},Us=Mt({open:Vs,confirm:(e,n)=>{const t=Mt({simple:!0,messageType:"warning"},e);return Vs(t,n)}},Jp.reduce((e,n)=>(e[n]=(t,r)=>{const i=Mt({simple:!0,hideCancel:!0,messageType:n},t);return Vs(i,r)},e),{})),ja=Object.assign(Hi,aR(Mt({},Us),{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Hi.name,Hi);const r={};for(const i of Object.keys(Us))r[i]=(s,o=e._context)=>Us[i](s,o);e.config.globalProperties.$modal=r},_context:null})),lR=Z({name:"Popconfirm",components:{ArcoButton:nt,Trigger:pr,IconInfoCircleFill:Il,IconCheckCircleFill:Lo,IconExclamationCircleFill:Ro,IconCloseCircleFill:wo},props:{content:String,position:{type:String,default:"top"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},type:{type:String,default:"info"},okText:String,cancelText:String,okLoading:{type:Boolean,default:!1},okButtonProps:{type:Object},cancelButtonProps:{type:Object},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]},onBeforeOk:{type:Function},onBeforeCancel:{type:Function}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,ok:()=>!0,cancel:()=>!0},setup(e,{emit:n}){const t=oe("popconfirm"),{t:r}=Po(),i=j(e.defaultPopupVisible),s=h(()=>{var E;return(E=e.popupVisible)!=null?E:i.value}),o=j(!1),a=h(()=>e.okLoading||o.value);let l=0;const c=()=>{l++,o.value&&(o.value=!1),i.value=!1,n("update:popupVisible",!1),n("popupVisibleChange",!1)},u=E=>{E?(i.value=E,n("update:popupVisible",E),n("popupVisibleChange",E)):c()},d=async()=>{const E=l,P=await new Promise(async k=>{var T;if(Xe(e.onBeforeOk)){let _=e.onBeforeOk((v=!0)=>k(v));if((Gi(_)||!St(_))&&(o.value=!0),Gi(_))try{_=(T=await _)!=null?T:!0}catch{_=!1}St(_)&&k(_)}else k(!0)});E===l&&(P?(n("ok"),c()):o.value&&(o.value=!1))},f=()=>{var E;let P=!0;Xe(e.onBeforeCancel)&&(P=(E=e.onBeforeCancel())!=null?E:!1),P&&(n("cancel"),c())},m=h(()=>[`${t}-popup-content`,e.contentClass]),S=h(()=>[`${t}-popup-arrow`,e.arrowClass]);return{prefixCls:t,contentCls:m,arrowCls:S,computedPopupVisible:s,mergedOkLoading:a,handlePopupVisibleChange:u,handleOk:d,handleCancel:f,t:r}}});function cR(e,n,t,r,i,s){const o=ae("icon-info-circle-fill"),a=ae("icon-check-circle-fill"),l=ae("icon-exclamation-circle-fill"),c=ae("icon-close-circle-fill"),u=ae("arco-button"),d=ae("trigger");return B(),pe(d,{class:z(e.prefixCls),trigger:"click",position:e.position,"show-arrow":"","popup-visible":e.computedPopupVisible,"popup-offset":10,"popup-container":e.popupContainer,"content-class":e.contentCls,"content-style":e.contentStyle,"arrow-class":e.arrowCls,"arrow-style":e.arrowStyle,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",onPopupVisibleChange:e.handlePopupVisibleChange},{content:K(()=>[le("div",{class:z(`${e.prefixCls}-body`)},[le("span",{class:z(`${e.prefixCls}-icon`)},[de(e.$slots,"icon",{},()=>[e.type==="info"?(B(),pe(o,{key:0})):e.type==="success"?(B(),pe(a,{key:1})):e.type==="warning"?(B(),pe(l,{key:2})):e.type==="error"?(B(),pe(c,{key:3})):Ee("v-if",!0)])],2),le("span",{class:z(`${e.prefixCls}-content`)},[de(e.$slots,"content",{},()=>[Ae(ze(e.content),1)])],2)],2),le("div",{class:z(`${e.prefixCls}-footer`)},[O(u,He({size:"mini"},e.cancelButtonProps,{onClick:e.handleCancel}),{default:K(()=>[Ae(ze(e.cancelText||e.t("popconfirm.cancelText")),1)]),_:1},16,["onClick"]),O(u,He({type:"primary",size:"mini"},e.okButtonProps,{loading:e.mergedOkLoading,onClick:e.handleOk}),{default:K(()=>[Ae(ze(e.okText||e.t("popconfirm.okText")),1)]),_:1},16,["loading","onClick"])],2)]),default:K(()=>[de(e.$slots,"default")]),_:3},8,["class","position","popup-visible","popup-container","content-class","content-style","arrow-class","arrow-style","onPopupVisibleChange"])}var qs=he(lR,[["render",cR]]);const uR=Object.assign(qs,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+qs.name,qs)}});function Tm(e){const n=Cn(e)?parseFloat(e):e;let t="";return _e(e)||String(n)===e?t=n>1?"px":"%":t="px",{size:n,unit:t,isPx:t==="px"}}function Oi({size:e,defaultSize:n,containerSize:t}){const r=Tm(e??n);return r.isPx?r.size:r.size*t}function dR(e,n){return parseFloat(e)/parseFloat(n)}const fR=Z({name:"Split",components:{ResizeTrigger:xL},props:{component:{type:String,default:"div"},direction:{type:String,default:"horizontal"},size:{type:[Number,String],default:void 0},defaultSize:{type:[Number,String],default:.5},min:{type:[Number,String]},max:{type:[Number,String]},disabled:{type:Boolean,default:!1}},emits:{moveStart:e=>!0,moving:e=>!0,moveEnd:e=>!0,"update:size":e=>!0},setup(e,{emit:n}){const{direction:t,size:r,defaultSize:i,min:s,max:o}=De(e),a=j(0),l=j(),c=oe("split"),[u,d]=Qp(i.value,We({value:r})),f=h(()=>Tm(u.value)),m=h(()=>t.value==="horizontal"),S=h(()=>[c,{[`${c}-horizontal`]:m.value,[`${c}-vertical`]:!m.value}]),E=h(()=>{const{size:x,unit:I,isPx:H}=f.value;return{flex:`0 0 calc(${H?x:x*100}${I} - ${a.value/2}px)`}}),P={startPageX:0,startPageY:0,startContainerSize:0,startSize:0};async function k(){const x=()=>{var I,H;return m.value?(I=l.value)==null?void 0:I.clientWidth:((H=l.value)==null?void 0:H.clientHeight)||0};return(!l.value||x())&&await Fe(),x()}function T(x,I){if(!I)return;const H=f.value.isPx?`${x}px`:dR(x,I);u.value!==H&&(d(H),n("update:size",H))}function _(x,I){const H=Oi({size:x,containerSize:I}),D=Oi({size:s.value,defaultSize:"0px",containerSize:I}),F=Oi({size:o.value,defaultSize:`${I}px`,containerSize:I});let ie=H;return ie=Math.max(ie,D),ie=Math.min(ie,F),ie}function v({startContainerSize:x,startSize:I,startPosition:H,endPosition:D}){const F=Oi({size:I,containerSize:x});return _(`${F+(D-H)}px`,x)}function R(x){n("moving",x);const I=m.value?v({startContainerSize:P.startContainerSize,startSize:P.startSize,startPosition:P.startPageX,endPosition:x.pageX}):v({startContainerSize:P.startContainerSize,startSize:P.startSize,startPosition:P.startPageY,endPosition:x.pageY});T(I,P.startContainerSize)}function b(x){Fn(window,"mousemove",R),Fn(window,"mouseup",b),Fn(window,"contextmenu",b),document.body.style.cursor="default",n("moveEnd",x)}async function C(x){n("moveStart",x),P.startPageX=x.pageX,P.startPageY=x.pageY,P.startContainerSize=await k(),P.startSize=u.value,hn(window,"mousemove",R),hn(window,"mouseup",b),hn(window,"contextmenu",b),document.body.style.cursor=m.value?"col-resize":"row-resize"}function w(x){const{width:I,height:H}=x.contentRect;a.value=m.value?I:H}return Ze(async()=>{const x=await k(),I=_(u.value,x);T(I,x)}),{prefixCls:c,classNames:S,isHorizontal:m,wrapperRef:l,onMoveStart:C,onTriggerResize:w,firstPaneStyles:E}}});function pR(e,n,t,r,i,s){const o=ae("ResizeTrigger");return B(),pe(Zn(e.component),{ref:"wrapperRef",class:z(e.classNames)},{default:K(()=>[le("div",{class:z([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-first`]),style:we(e.firstPaneStyles)},[de(e.$slots,"first")],6),e.disabled?Ee("v-if",!0):(B(),pe(o,{key:0,"prefix-cls":`${e.prefixCls}-trigger`,direction:e.isHorizontal?"vertical":"horizontal",onMousedown:e.onMoveStart,onResize:e.onTriggerResize},{default:K(()=>[de(e.$slots,"resize-trigger")]),icon:K(()=>[de(e.$slots,"resize-trigger-icon")]),_:3},8,["prefix-cls","direction","onMousedown","onResize"])),le("div",{class:z([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-second`])},[de(e.$slots,"second")],2)]),_:3},8,["class"])}var Gs=he(fR,[["render",pR]]);const mR=Object.assign(Gs,{install:(e,n)=>{nn(e,n);const t=en(n);e.component(t+Gs.name,Gs)}}),vR=Z({name:"IconDelete",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-delete`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),gR=["stroke-width","stroke-linecap","stroke-linejoin"],hR=le("path",{d:"M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15"},null,-1),bR=[hR];function yR(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},bR,14,gR)}var Js=he(vR,[["render",yR]]);const SR=Object.assign(Js,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Js.name,Js)}}),ER=Z({name:"IconFile",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-file`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),_R=["stroke-width","stroke-linecap","stroke-linejoin"],kR=le("path",{d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"},null,-1),TR=[kR];function OR(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},TR,14,_R)}var Zs=he(ER,[["render",OR]]);const PR=Object.assign(Zs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Zs.name,Zs)}}),CR=Z({name:"IconCopy",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-copy`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),LR=["stroke-width","stroke-linecap","stroke-linejoin"],RR=le("path",{d:"M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"},null,-1),wR=[RR];function xR(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},wR,14,LR)}var Ys=he(CR,[["render",xR]]);const IR=Object.assign(Ys,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ys.name,Ys)}}),AR=Z({name:"IconEdit",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-edit`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),BR=["stroke-width","stroke-linecap","stroke-linejoin"],NR=le("path",{d:"m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"},null,-1),DR=[NR];function $R(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},DR,14,BR)}var Xs=he(AR,[["render",$R]]);const HR=Object.assign(Xs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Xs.name,Xs)}});function kn(e,n){const t=JSON.stringify(n);if(Ln)return utools.dbStorage.setItem(e,t);localStorage.setItem(e,t)}function wn(e){if(Ln){const n=utools.dbStorage.getItem(e);return n?JSON.parse(n):null}else{const n=localStorage.getItem(e);return n?JSON.parse(n):null}}function or(e){(Ln?utools.dbStorage:localStorage).removeItem(e)}function Om(e){if(Ln)return utools.db.allDocs(e).map(t=>({...t,value:JSON.parse(t.value)}));const n=[];if(!localStorage.length)return n;for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);if(!(e&&r&&!r.startsWith(e))&&r){const i=localStorage.getItem(r);n.push({value:i?JSON.parse(i):null,_id:r})}}return n}function Od(e){return e===null?"Null":e===void 0?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}function MR(e){const n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate(),s=n.getHours(),o=n.getMinutes(),a=n.getSeconds(),l=c=>{const u=c.toString();return u[1]?u:"0"+u};return`${t}年${l(r)}月${l(i)}日 ${l(s)}:${l(o)}:${l(a)}`}function jR(e){try{if(navigator.clipboard)navigator.clipboard.writeText(e);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=e,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}return!0}catch{return!1}}function FR(e){let n="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=t.length;for(let i=0;i<e;i++)n+=t.charAt(Math.floor(Math.random()*r));return n}const Ln=window&&typeof(window==null?void 0:window.utools)<"u";function Qs(e){return Ln?utools.shellOpenExternal(e):window.open(e)}const KR="modulepreload",WR=function(e,n){return new URL(e,n).href},Pd={},Mi=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link");i=Promise.all(t.map(o=>{if(o=WR(o,r),o in Pd)return;Pd[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":KR,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>n()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var ht;(function(e){e.start="/**",e.nostart="/***",e.delim="*",e.end="*/"})(ht=ht||(ht={}));function zR(e){return/^\s+$/.test(e)}function VR(e){const n=e.match(/\r+$/);return n==null?["",e]:[e.slice(-n[0].length),e.slice(0,-n[0].length)]}function sr(e){const n=e.match(/^\s+/);return n==null?["",e]:[e.slice(0,n[0].length),e.slice(n[0].length)]}function UR(e){return e.split(/\n/)}function qR(e={}){return Object.assign({tag:"",name:"",type:"",optional:!1,description:"",problems:[],source:[]},e)}function GR(e={}){return Object.assign({start:"",delimiter:"",postDelimiter:"",tag:"",postTag:"",name:"",postName:"",type:"",postType:"",description:"",end:"",lineEnd:""},e)}const JR=/^@\S+/;function ZR({fence:e="```"}={}){const n=YR(e),t=(r,i)=>n(r)?!i:i;return function(i){const s=[[]];let o=!1;for(const a of i)JR.test(a.tokens.description)&&!o?s.push([a]):s[s.length-1].push(a),o=t(a.tokens.description,o);return s}}function YR(e){return typeof e=="string"?n=>n.split(e).length%2===0:e}function XR({startLine:e=0,markers:n=ht}={}){let t=null,r=e;return function(s){let o=s;const a=GR();if([a.lineEnd,o]=VR(o),[a.start,o]=sr(o),t===null&&o.startsWith(n.start)&&!o.startsWith(n.nostart)&&(t=[],a.delimiter=o.slice(0,n.start.length),o=o.slice(n.start.length),[a.postDelimiter,o]=sr(o)),t===null)return r++,null;const l=o.trimRight().endsWith(n.end);if(a.delimiter===""&&o.startsWith(n.delim)&&!o.startsWith(n.end)&&(a.delimiter=n.delim,o=o.slice(n.delim.length),[a.postDelimiter,o]=sr(o)),l){const c=o.trimRight();a.end=o.slice(c.length-n.end.length),o=c.slice(0,-n.end.length)}if(a.description=o,t.push({number:r,source:s,tokens:a}),r++,l){const c=t.slice();return t=null,c}return null}}function QR({tokenizers:e}){return function(t){var r;let i=qR({source:t});for(const s of e)if(i=s(i),!((r=i.problems[i.problems.length-1])===null||r===void 0)&&r.critical)break;return i}}function ew(){return e=>{const{tokens:n}=e.source[0],t=n.description.match(/\s*(@(\S+))(\s*)/);return t===null?(e.problems.push({code:"spec:tag:prefix",message:'tag should start with "@" symbol',line:e.source[0].number,critical:!0}),e):(n.tag=t[1],n.postTag=t[3],n.description=n.description.slice(t[0].length),e.tag=t[2],e)}}function nw(e="compact"){const n=rw(e);return t=>{let r=0,i=[];for(const[a,{tokens:l}]of t.source.entries()){let c="";if(a===0&&l.description[0]!=="{")return t;for(const u of l.description)if(u==="{"&&r++,u==="}"&&r--,c+=u,r===0)break;if(i.push([l,c]),r===0)break}if(r!==0)return t.problems.push({code:"spec:type:unpaired-curlies",message:"unpaired curlies",line:t.source[0].number,critical:!0}),t;const s=[],o=i[0][0].postDelimiter.length;for(const[a,[l,c]]of i.entries())l.type=c,a>0&&(l.type=l.postDelimiter.slice(o)+c,l.postDelimiter=l.postDelimiter.slice(0,o)),[l.postType,l.description]=sr(l.description.slice(c.length)),s.push(l.type);return s[0]=s[0].slice(1),s[s.length-1]=s[s.length-1].slice(0,-1),t.type=n(s),t}}const tw=e=>e.trim();function rw(e){return e==="compact"?n=>n.map(tw).join(""):e==="preserve"?n=>n.join(`
`):e}const iw=e=>e&&e.startsWith('"')&&e.endsWith('"');function ow(){const e=(n,{tokens:t},r)=>t.type===""?n:r;return n=>{const{tokens:t}=n.source[n.source.reduce(e,0)],r=t.description.trimLeft(),i=r.split('"');if(i.length>1&&i[0]===""&&i.length%2===1)return n.name=i[1],t.name=`"${i[1]}"`,[t.postName,t.description]=sr(r.slice(t.name.length)),n;let s=0,o="",a=!1,l;for(const u of r){if(s===0&&zR(u))break;u==="["&&s++,u==="]"&&s--,o+=u}if(s!==0)return n.problems.push({code:"spec:name:unpaired-brackets",message:"unpaired brackets",line:n.source[0].number,critical:!0}),n;const c=o;if(o[0]==="["&&o[o.length-1]==="]"){a=!0,o=o.slice(1,-1);const u=o.split("=");if(o=u[0].trim(),u[1]!==void 0&&(l=u.slice(1).join("=").trim()),o==="")return n.problems.push({code:"spec:name:empty-name",message:"empty name",line:n.source[0].number,critical:!0}),n;if(l==="")return n.problems.push({code:"spec:name:empty-default",message:"empty default value",line:n.source[0].number,critical:!0}),n;if(!iw(l)&&/=(?!>)/.test(l))return n.problems.push({code:"spec:name:invalid-default",message:"invalid default value syntax",line:n.source[0].number,critical:!0}),n}return n.optional=a,n.name=o,t.name=c,l!==void 0&&(n.default=l),[t.postName,t.description]=sr(r.slice(t.name.length)),n}}function sw(e="compact",n=ht){const t=Pm(e);return r=>(r.description=t(r.source,n),r)}function Pm(e){return e==="compact"?aw:e==="preserve"?uw:e}function aw(e,n=ht){return e.map(({tokens:{description:t}})=>t.trim()).filter(t=>t!=="").join(" ")}const lw=(e,{tokens:n},t)=>n.type===""?e:t,cw=({tokens:e})=>(e.delimiter===""?e.start:e.postDelimiter.slice(1))+e.description;function uw(e,n=ht){if(e.length===0)return"";e[0].tokens.description===""&&e[0].tokens.delimiter===n.start&&(e=e.slice(1));const t=e[e.length-1];return t!==void 0&&t.tokens.description===""&&t.tokens.end.endsWith(n.end)&&(e=e.slice(0,-1)),e=e.slice(e.reduce(lw,0)),e.map(cw).join(`
`)}function dw({startLine:e=0,fence:n="```",spacing:t="compact",markers:r=ht,tokenizers:i=[ew(),nw(t),ow(),sw(t)]}={}){if(e<0||e%1>0)throw new Error("Invalid startLine");const s=XR({startLine:e,markers:r}),o=ZR({fence:n}),a=QR({tokenizers:i}),l=Pm(t);return function(c){const u=[];for(const d of UR(c)){const f=s(d);if(f===null)continue;const m=o(f),S=m.slice(1).map(a);u.push({description:l(m[0],r),tags:S,source:f,problems:S.reduce((E,P)=>E.concat(P.problems),[])})}return u}}function fw(e,n={}){return dw(n)(e)}const Fa=vw();async function pw(e,n){const{electron:t,Buffer:r,require:i,vm:s}=await Mi(()=>Promise.resolve().then(()=>B0),void 0,import.meta.url),o={console:Cm(n),fetch:fetch.bind(window),utools:Fa,electron:t,Buffer:r,require:i};try{s.createContext(o),s.runInContext(`(async function(){
      ${e}
    })()`,o).catch(a=>{n&&n(null,[a])})}catch(a){n&&n(null,[a])}}function mw(e,n){try{const t=new Function("console","utools","globalThis",`(async function(){
try{
        ${e}
      }catch(error){console.error(error)}
})()`),r=Object.assign({},globalThis);r.utools=Fa,t(Cm(n),Fa,r)}catch(t){n&&n(null,[t])}}function Cm(e){return{log:(...n)=>e&&e(n),error:(...n)=>e&&e(null,n),warn:(...n)=>e&&e(null,null,n),info:(...n)=>e&&e(null,null,null,n)}}function vw(){if(!Ln)return{};const e=Object.assign({},SE(utools));return EE(["db","dbStorage","removeFeature","setFeature","onDbPull"],["fetchUserServerTemporaryToken","openPayment","fetchUserPayments"],["onPluginEnter","onPluginOut","createBrowserWindow"]).forEach(i=>{delete e[i]}),Object.freeze(e),e}function Lm(e){const n=fw(e);if(n.length){const t=n[0];return t.tags.length?t.tags.map(i=>({name:t.description?t.description:i.tag==="name"?[i.name,i.description].join(" "):"",description:i.tag==="description"?[i.name,i.description].join(" "):""}))[0]:{name:t.description||""}}return null}const Ka=Eo("history",{state:()=>({historys:[]}),actions:{loadHistorys(){const e=Om("code/");!e||!e.length||(e.sort((n,t)=>parseInt(t._id.split("/")[1])-parseInt(n._id.split("/")[1])),this.historys=e.map(n=>{var i;const t=n.value,r=((i=Lm(t))==null?void 0:i.name)||(t.startsWith("//")?t.split(`
`)[0].slice(2).trim():"");return{id:n._id,timeStamp:parseInt(n._id.split("/")[1],10),code:n.value,name:r}}))},deleteHistory(e){const n=this.historys.findIndex(t=>t.timeStamp===e);this.historys.splice(n,1),or(`code/${e}`),In.success("删除成功"),this.historys.length?to().readHistory(this.historys[0].timeStamp):to().newCode()}}}),to=Eo("CodeSrore",{state:()=>({id:0,code:"",messages:[],env:Ln?wn("env")||"node":"browser",mode:wn("mode")||"ontime",readonly:wn("readonly")||!1,execState:!1}),getters:{codeWithId:e=>`code/${e.id}`,currentEnv:e=>e.env==="browser"?"浏览器":"Node.js",currentMode:e=>e.mode==="ontime"?"即时执行":"手动触发",currentReadonly:e=>e.readonly?"只读":"可编辑"},actions:{init(){const e=wn("lastCodeId")||0;this.loadCode(e),Ka().loadHistorys()},newCode(){this.id!==0&&In.success("成功创建新代码片段"),this.id=new Date().getTime(),this.code=wn("lastCodeId")?"":'console.log("Hello, World!")',kn(this.codeWithId,this.code),kn("lastCodeId",this.id),Ka().loadHistorys()},loadCode(e){const n=wn(`code/${e}`);if(n===null){this.newCode();return}this.id=e,this.code=n},handleCodeChange(e){this.code=e,kn(this.codeWithId,this.code),this.mode==="ontime"&&this.execCode()},pushMessage(e){e&&this.messages.push(e)},clearConsole(){this.messages=[]},changeEnv(){if(!Ln)return In.warning("当前环境不支持切换运行环境");this.env=this.env==="browser"?"node":"browser",this.env==="browser"?kn("env","browser"):or("env")},changeMode(){this.mode=this.mode==="manual"?"ontime":"manual",this.mode==="manual"?kn("mode","manual"):or("mode")},changeReadonly(){this.readonly=!this.readonly,this.readonly?kn("readonly",!0):or("readonly")},readHistory(e){this.loadCode(e),kn("lastCodeId",this.id)},execCode(){if(!this.code)return;const e=(n,t)=>{const r=PE(),i=new Date().getTime();n&&(n!=null&&n.length)&&this.pushMessage({id:r,timeStamp:i,type:"log",content:n}),t&&this.pushMessage({id:r,timeStamp:i,type:"error",content:t})};this.env==="browser"?mw(this.code,e):pw(this.code,e),this.execState=!0,setTimeout(()=>{this.execState=!1})}}});function Wa(e){const n=window.matchMedia(e),t=j(n.matches),r=i=>{t.value=i.matches};return n.addEventListener("change",r),kt(()=>{n.removeEventListener("change",r)}),t}function gw(e){const n=Wa("(prefers-color-scheme: dark)"),t=Wa("(prefers-color-scheme: light)");return Ze(()=>ro(n.value?"dark":"light")),Oe(n,r=>{ro(r?"dark":"light"),e&&e(r?"dark":"light")}),[n,t]}function ro(e){if(e==="dark")document.body.classList.add("dark"),document.body.setAttribute("arco-theme","dark");else if(e==="light")document.body.classList.remove("dark"),document.body.removeAttribute("arco-theme");else{const[n]=gw();ro(n.value?"dark":"light")}return null}const hw=`interface UBrowser {
  /**
   * 设置 User-Agent
   */
  useragent(userAgent: string): this
  /**
   * 前往
   * @param url 链接地址,支持 http 或 file 协议
   * @param headers 请求头参数
   * @param timeout 加载超时,默认 60000 ms(60秒)
   */
  goto(url: string, headers?: { Referer: string; userAgent: string }, timeout?: number): this
  /**
   * 页面大小
   */
  viewport(width: number, height: number): this
  /**
   * 隐藏 ubrowser 窗口
   */
  hide(): this
  /**
   * 显示 ubrowser 窗口
   */
  show(): this
  /**
   * 注入样式
   */
  css(css: string): this
  /**
   * 键盘按键
   */
  press(
    key: string,
    ...modifier: ('control' | 'ctrl' | 'shift' | 'meta' | 'alt' | 'command' | 'cmd')[]
  ): this
  /**
   * 粘贴
   * @param text 如果是图片的base64编码字符串，粘贴图片，为空只执行粘贴动作
   */
  paste(text?: string): this
  /**
   * 页面截图
   * @param arg 1.字符串 - 要截取的DOM元素， 2.对象 - 截图位置和大小， 3.空 - 为截取整个窗口
   * @param savePath 截图保存路径，可以是文件夹 或 .png文件完全路径, 默认保存临时目录
   */
  screenshot(
    arg: string | { x: number; y: number; width: number; height: number },
    savePath?: string
  ): this
  /**
   * 保存为PDF
   * @param options 选项
   * @param savePath PDF保存路径，可以是文件夹 或 .pdf文件完全路径, 默认保存临时目录
   */
  pdf(
    options?: {
      marginsType: 0 | 1 | 2
      pageSize:
        | ('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid')
        | { width: number; height: number }
    },
    savePath?: string
  ): this
  /**
   * 模拟设备
   */
  device(
    arg:
      | (
          | 'iPhone 11'
          | 'iPhone X'
          | 'iPad'
          | 'iPhone 6/7/8 Plus'
          | 'iPhone 6/7/8'
          | 'iPhone 5/SE'
          | 'HUAWEI Mate10'
          | 'HUAWEI Mate20'
          | 'HUAWEI Mate30'
          | 'HUAWEI Mate30 Pro'
        )
      | { size: { width: number; height: number }; useragent: string }
  ): this
  /**
   * 获取 cookie
   * @param name 为空获取全部cookie
   */
  cookies(name?: string): this
  /**
   * 设置Cookie
   */
  setCookies(name: string, value: string): this
  /**
   * 设置Cookie
   */
  setCookies(cookies: { name: string; value: string }[]): this
  /**
   * 删除 cookie
   */
  removeCookies(name: string): this
  /**
   * 清空cookie
   * @param url 在执行"goto"前执行 url参数必需
   */
  clearCookies(url?: string): this
  /**
   * 打开开发者工具
   */
  devTools(mode?: 'right' | 'bottom' | 'undocked' | 'detach'): this
  /**
   * 执行JS计算 并获得结果
   * @param func 在目标网页中执行
   * @param params 传到 func 中的参数
   */
  evaluate(func: (...params: any[]) => any, ...params: any[]): this
  /**
   * 等待时间
   * @param ms 毫秒
   */
  wait(ms: number): this
  /**
   * 等待元素出现
   * @param selector DOM元素
   * @param timeout 超时 默认60000 ms(60秒)
   */
  wait(selector: string, timeout?: number): this
  /**
   * 等待 JS函数 执行返回 true
   * @param func 执行的JS函数
   * @param timeout 超时 默认60000 ms(60秒)
   * @param params 传到 func 中的参数
   */
  wait(func: (...params: any[]) => boolean, timeout?: number, ...params: any[]): this
  /**
   * 当元素存在时执行直到碰到 end
   * @param selector DOM元素
   */
  when(selector: string): this
  /**
   * 当 JS函数执行返回 true 时执行直到碰到 end
   * @param func 执行的JS函数
   * @param params 传到 func 中的参数
   */
  when(func: (...params: any[]) => boolean, ...params: any[]): this
  /**
   * 配合 when 使用
   */
  end(): this
  /**
   * 单击元素
   */
  click(selector: string): this
  /**
   * 元素触发按下鼠标左键
   */
  mousedown(selector: string): this
  /**
   * 元素触发释放鼠标左键
   */
  mouseup(selector: string): this
  /**
   * 赋值 file input
   * @param selector <input type='file' /> 元素
   * @param payload 1. string - 文件路径 或 图片的base64编码，2. string[] - 文件路径集合，3. Uint8Array[]
   */
  file(selector: string, payload: string | string[] | Uint8Array): this
  /**
   * input textarea select 等元素赋值并触发 input 或 change事件
   */
  value(selector: string, value: string): this
  /**
   * checkbox radio 元素选中或取消选中
   */
  check(selector: string, checked: boolean): this
  /**
   * 元素获得焦点
   */
  focus(selector: string): this
  /**
   * 滚动到元素位置
   */
  scroll(selector: string): this
  /**
   * Y轴滚动
   */
  scroll(y: number): this
  /**
   * X轴和Y轴滚动
   */
  scroll(x: number, y: number): this
  /**
   * 运行在闲置的 ubrowser 上
   * @param ubrowserId utools.getIdleUBrowsers() 中获得
   */
  run(ubrowserId: number): Promise<any[]>
  /**
   * 启动一个 ubrowser 运行
   * 当运行结束后，窗口如果为隐藏状态将自动销毁窗口
   * @param options
   */
  run(options: {
    show?: boolean
    width?: number
    height?: number
    x?: number
    y?: number
    center?: boolean
    minWidth?: number
    minHeight?: number
    maxWidth?: number
    maxHeight?: number
    resizable?: boolean
    movable?: boolean
    minimizable?: boolean
    maximizable?: boolean
    alwaysOnTop?: boolean
    fullscreen?: boolean
    fullscreenable?: boolean
    enableLargerThanScreen?: boolean
    opacity?: number
  }): Promise<any[]>
}

interface Display {
  accelerometerSupport: 'available' | 'unavailable' | 'unknown'
  bounds: { x: number; y: number; width: number; height: number }
  colorDepth: number
  colorSpace: string
  depthPerComponent: number
  id: number
  internal: boolean
  monochrome: boolean
  rotation: number
  scaleFactor: number
  size: { width: number; height: number }
  touchSupport: 'available' | 'unavailable' | 'unknown'
  workArea: { x: number; y: number; width: number; height: number }
  workAreaSize: { width: number; height: number }
}

interface DbDoc {
  _id: string
  _rev?: string
  [key: string]: any
}

interface DbReturn {
  id: string
  rev?: string
  ok?: boolean
  error?: boolean
  name?: string
  message?: string
}

interface UToolsApi {
  /**
   * 插件应用进入时触发
   */
  // onPluginEnter(callback: (action: { code: string; type: string; payload: any }) => void): void
  /**
   * 插件应用隐藏后台或完全退出时触发
   */
  // onPluginOut(callback: (processExit: boolean) => void): void
  /**
   * 插件应用分离时触发
   */
  // onPluginDetach(callback: () => void): void
  /**
   * 插件应用从云端拉取到数据时触发
   */
  // onDbPull(callback: (docs: { _id: string; _rev: string }[]) => void): void
  /**
   * 隐藏主窗口
   * @param isRestorePreWindow 是否焦点回归到前面的活动窗口，默认 true
   */
  hideMainWindow(isRestorePreWindow?: boolean): boolean
  /**
   * 显示主窗口
   */
  showMainWindow(): boolean
  /**
   * 设置插件应用自身高度
   */
  setExpendHeight(height: number): boolean
  /**
   * 设置子输入框
   * @param onChange 修改时触发
   * @param placeholder 占位符， 默认为空
   * @param isFocus 是否获得焦点，默认为 true
   */
  setSubInput(onChange: (text: string) => void, placeholder?: string, isFocus?: boolean): boolean
  /**
   * 移除子输入框
   */
  removeSubInput(): boolean
  /**
   * 赋值子输入框
   */
  setSubInputValue(value: string): boolean
  /**
   * 子输入框获得焦点
   */
  subInputFocus(): boolean
  /**
   * 子输入框获得焦点并选中
   */
  subInputSelect(): boolean
  /**
   * 子输入框失去焦点，插件应用获得焦点
   */
  subInputBlur(): boolean
  /**
   * 创建独立窗口
   * @param url 相对路径 html 文件
   * @param options 参考 https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions
   * @param callback url 加载完成时的回调
   */
  // createBrowserWindow(
  //   url: string,
  //   options: { width?: number; height?: number },
  //   callback?: () => void
  // ): { id: number; [key: string]: any; webContents: { id: number; [key: string]: any } }
  /**
   * 隐藏插件应用到后台
   */
  outPlugin(): boolean
  /**
   * 是否深色模式
   */
  isDarkColors(): boolean
  /**
   * 获取用户
   */
  getUser(): { avatar: string; nickname: string; type: string } | null
  /**
   * 获取用户服务端临时令牌
   */
  // fetchUserServerTemporaryToken(): Promise<{ token: string; expiredAt: number }>
  /**
   * 打开支付
   * @param callback 支付成功触发
   */
  // openPayment(
  //   options: {
  //     /**
  //      * 商品ID，在 “uTools 开发者工具” 插件应用中创建
  //      */
  //     goodsId: string
  //     /**
  //      * 第三方服务生成的订单号(可选)
  //      */
  //     outOrderId?: string
  //     /**
  //      * 第三方服务附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用(可选)
  //      */
  //     attach?: string
  //   },
  //   callback?: () => void
  // ): void
  /**
   * 获取用户支付记录
   */
  // fetchUserPayments(): Promise<
  //   {
  //     order_id: string
  //     total_fee: number
  //     body: string
  //     attach: string
  //     goods_id: string
  //     out_order_id: string
  //     paid_at: string
  //   }[]
  // >
  /**
   * 设置插件应用动态功能
   */
  // setFeature(feature: {
  //   code: string
  //   explain: string
  //   platform: ('darwin' | 'win32' | 'linux') | Array<'darwin' | 'win32' | 'linux'>
  //   icon?: string
  //   cmds: (
  //     | string
  //     | {
  //         type: 'img' | 'files' | 'regex' | 'over' | 'window'
  //         label: string
  //       }
  //   )[]
  // }): boolean
  /**
   * 移除插件应用动态功能
   */
  // removeFeature(code: string): boolean
  /**
   * 获取插件应用动态功能，参数为空获取所有动态功能
   */
  // getFeatures(codes?: string[]): {
  //   code: string
  //   explain: string
  //   platform: ('darwin' | 'win32' | 'linux') | Array<'darwin' | 'win32' | 'linux'>
  //   icon?: string
  //   cmds:
  //     | string
  //     | {
  //         type: 'img' | 'files' | 'regex' | 'over' | 'window'
  //         label: string
  //       }[]
  // }[]
  /**
   * 插件应用间跳转
   */
  redirect(label: string, payload: string | { type: 'text' | 'img' | 'files'; data: any }): void
  /**
   * 获取闲置的 ubrowser
   */
  getIdleUBrowsers(): { id: number; title: string; url: string }[]
  /**
   * 设置 ubrowser 代理 https://www.electronjs.org/docs/api/session#sessetproxyconfig
   */
  setUBrowserProxy(config: {
    pacScript?: string
    proxyRules?: string
    proxyBypassRules?: string
  }): boolean
  /**
   * 清空 ubrowser 缓存
   */
  clearUBrowserCache(): boolean
  /**
   * 显示系统通知
   */
  showNotification(body: string): void
  /**
   * 弹出文件选择框
   */
  showOpenDialog(options: {
    title?: string
    defaultPath?: string
    buttonLabel?: string
    filters?: { name: string; extensions: string[] }[]
    properties?: Array<
      | 'openFile'
      | 'openDirectory'
      | 'multiSelections'
      | 'showHiddenFiles'
      | 'createDirectory'
      | 'promptToCreate'
      | 'noResolveAliases'
      | 'treatPackageAsDirectory'
      | 'dontAddToRecent'
    >
    message?: string
    securityScopedBookmarks?: boolean
  }): string[] | undefined
  /**
   * 弹出文件保存框
   */
  showSaveDialog(options: {
    title?: string
    defaultPath?: string
    buttonLabel?: string
    filters?: { name: string; extensions: string[] }[]
    message?: string
    nameFieldLabel?: string
    showsTagField?: string
    properties?: Array<
      | 'showHiddenFiles'
      | 'createDirectory'
      | 'treatPackageAsDirectory'
      | 'showOverwriteConfirmation'
      | 'dontAddToRecent'
    >
    securityScopedBookmarks?: boolean
  }): string | undefined
  /**
   * 插件应用页面中查找
   */
  findInPage(
    text: string,
    options?: {
      forward?: boolean
      findNext?: boolean
      matchCase?: boolean
      wordStart?: boolean
      medialCapitalAsWordStart?: boolean
    }
  ): void
  /**
   * 停止插件应用页面中查找
   */
  stopFindInPage(action: 'clearSelection' | 'keepSelection' | 'activateSelection'): void
  /**
   * 拖拽文件
   */
  startDrag(file: string | string[]): void
  /**
   * 屏幕取色
   */
  screenColorPick(callback: (color: { hex: string; rgb: string }) => void): void
  /**
   * 屏幕截图
   */
  screenCapture(callback: (imgBase64: string) => void): void
  /**
   * 获取本地 ID
   */
  getNativeId(): string
  /**
   * 获取软件版本
   */
  getAppVersion(): string
  /**
   * 获取路径
   */
  getPath(
    name:
      | 'home'
      | 'appData'
      | 'userData'
      | 'cache'
      | 'temp'
      | 'exe'
      | 'module'
      | 'desktop'
      | 'documents'
      | 'downloads'
      | 'music'
      | 'pictures'
      | 'videos'
      | 'logs'
      | 'pepperFlashSystemPlugin'
  ): string
  /**
   * 获取文件图标
   */
  getFileIcon(filePath: string): string
  /**
   * 复制文件到剪贴板
   */
  copyFile(file: string | string[]): boolean
  /**
   * 复制图片到剪贴板
   * @param img base64、buffer、图片路径
   */
  copyImage(img: string | Uint8Array): boolean
  /**
   * 复制文本到剪贴板
   */
  copyText(text: string): boolean
  /**
   * 获取复制的文件或文件夹
   */
  getCopyedFiles(): { isFile: boolean; isDirectory: boolean; name: string; path: string }[]
  /**
   * 读取当前文件管理器路径(linux 不支持)
   */
  readCurrentFolderPath(): Promise<string>
  /**
   * 读取当前浏览器窗口的URL(linux 不支持)
   * MacOs 支持浏览器 Safari、Chrome、Opera、Vivaldi、Brave
   * Windows 支持浏览器 Chrome、Firefox、Edge、IE、Opera、Brave
   * Linux 不支持
   */
  readCurrentBrowserUrl(): Promise<string>
  /**
   * 默认方式打开给定的文件
   */
  shellOpenPath(fullPath: string): void
  /**
   * 在文件管理器中显示给定的文件
   */
  shellShowItemInFolder(fullPath: string): void
  /**
   * 系统默认的协议打开URL
   */
  shellOpenExternal(url: string): void
  /**
   * 播放哔哔声
   */
  shellBeep(): void
  /*
   * 隐藏主窗口并键入字符串
   */
  hideMainWindowTypeString(str: string): void
  /**
   * 模拟键盘按键
   */
  simulateKeyboardTap(
    key: string,
    ...modifier: ('control' | 'ctrl' | 'shift' | 'option' | 'alt' | 'command' | 'super')[]
  ): void
  /**
   * 模拟鼠标单击
   */
  simulateMouseClick(x?: number, y?: number): void
  /**
   * 模拟鼠标右击
   */
  simulateMouseRightClick(x?: number, y?: number): void
  /**
   * 模拟鼠标双击
   */
  simulateMouseDoubleClick(x?: number, y?: number): void
  /**
   * 模拟鼠标移动
   */
  simulateMouseMove(x: number, y: number): void
  /**
   * 获取鼠标绝对位置
   */
  getCursorScreenPoint(): { x: number; y: number }
  /**
   * 获取主显示器
   */
  getPrimaryDisplay(): Display
  /**
   * 获取所有显示器
   */
  getAllDisplays(): Display[]
  /**
   * 获取位置所在的显示器
   */
  getDisplayNearestPoint(point: { x: number; y: number }): Display
  /**
   * 获取矩形所在的显示器
   */
  getDisplayMatching(rect: { x: number; y: number; width: number; height: number }): Display
  /**
   * 录屏源
   */
  desktopCaptureSources(options: {
    types: string[]
    thumbnailSize?: { width: number; height: number }
    fetchWindowIcons?: boolean
  }): Promise<{ appIcon: {}; display_id: string; id: string; name: string; thumbnail: {} }>
  /**
   * 是否开发中
   */
  isDev(): boolean
  /**
   * 是否 MacOs 操作系统
   */
  isMacOS(): boolean
  /**
   * 是否 Windows 操作系统
   */
  isWindows(): boolean
  /**
   * 是否 Linux 操作系统
   */
  isLinux(): boolean

  // db: {
  //   /**
  //    * 创建/更新文档
  //    */
  //   put(doc: DbDoc): DbReturn
  //   /**
  //    * 获取文档
  //    */
  //   get(id: string): DbDoc | null
  //   /**
  //    * 删除文档
  //    */
  //   remove(doc: string | DbDoc): DbReturn
  //   /**
  //    * 批量操作文档(新增、修改、删除)
  //    */
  //   bulkDocs(docs: DbDoc[]): DbReturn[]
  //   /**
  //    * 获取所有文档 可根据文档id前缀查找
  //    */
  //   allDocs(key?: string): DbDoc[]
  //   /**
  //    * 存储附件到新文档
  //    * @param docId 文档ID
  //    * @param attachment 附件 buffer
  //    * @param type 附件类型，示例：image/png, text/plain
  //    */
  //   postAttachment(docId: string, attachment: Uint8Array, type: string): DbReturn
  //   /**
  //    * 获取附件
  //    * @param docId 文档ID
  //    */
  //   getAttachment(docId: string): Uint8Array | null
  //   /**
  //    * 获取附件类型
  //    * @param docId 文档ID
  //    */
  //   getAttachmentType(docId: string): string | null
  //   /**
  //    * 云端复制数据状态 (null: 未开启数据同步、0: 已完成复制、1：复制中)
  //    */
  //   replicateStateFromCloud(): null | 0 | 1
  //   /**
  //    * 异步
  //    */
  //   promises: {
  //     /**
  //      * 创建/更新文档
  //      */
  //     put(doc: DbDoc): Promise<DbReturn>
  //     /**
  //      * 获取文档
  //      */
  //     get(id: string): Promise<DbDoc | null>
  //     /**
  //      * 删除文档
  //      */
  //     remove(doc: string | DbDoc): Promise<DbReturn>
  //     /**
  //      * 批量操作文档(新增、修改、删除)
  //      */
  //     bulkDocs(docs: DbDoc[]): Promise<DbReturn[]>
  //     /**
  //      * 获取所有文档 可根据文档id前缀查找
  //      */
  //     allDocs(key?: string): Promise<DbDoc[]>
  //     /**
  //      * 存储附件到新文档
  //      * @param docId 文档ID
  //      * @param attachment 附件 buffer
  //      * @param type 附件类型，示例：image/png, text/plain
  //      */
  //     postAttachment(docId: string, attachment: Uint8Array, type: string): Promise<DbReturn>
  //     /**
  //      * 获取附件
  //      * @param docId 文档ID
  //      */
  //     getAttachment(docId: string): Promise<Uint8Array | null>
  //     /**
  //      * 获取附件类型
  //      * @param docId 文档ID
  //      */
  //     getAttachmentType(docId: string): Promise<string | null>
  //     /**
  //      * 云端复制数据状态 (null: 未开启数据同步、0: 已完成复制、1：复制中)
  //      */
  //     replicateStateFromCloud(): Promise<null | 0 | 1>
  //   }
  // }

  // dbStorage: {
  //   /**
  //    * 键值对存储，如果键名存在，则更新其对应的值
  //    * @param key 键名(同时为文档ID)
  //    * @param value 键值
  //    */
  //   setItem(key: string, value: any): void
  //   /**
  //    * 获取键名对应的值
  //    */
  //   getItem(key: string): any
  //   /**
  //    * 删除键值对(删除文档)
  //    */
  //   removeItem(key: string): void
  // }

  ubrowser: UBrowser
}

declare var utools: UToolsApi
`,bw=`declare module 'assert' {
    function assert(value: unknown, message?: string | Error): asserts value;
    namespace assert {
        class AssertionError extends Error {
            actual: unknown;
            expected: unknown;
            operator: string;
            generatedMessage: boolean;
            code: 'ERR_ASSERTION';
            constructor(options?: {
                message?: string | undefined;
                actual?: unknown | undefined;
                expected?: unknown | undefined;
                operator?: string | undefined;
                stackStartFn?: Function | undefined;
            });
        }
        class CallTracker {
            calls(exact?: number): () => void;
            calls<Func extends (...args: any[]) => any>(fn?: Func, exact?: number): Func;
            report(): CallTrackerReportInformation[];
            verify(): void;
        }
        interface CallTrackerReportInformation {
            message: string;
            actual: number;
            expected: number;
            operator: string;
            stack: object;
        }
        type AssertPredicate = RegExp | (new () => object) | ((thrown: unknown) => boolean) | object | Error;
        function fail(message?: string | Error): never;
        function fail(
            actual: unknown,
            expected: unknown,
            message?: string | Error,
            operator?: string,
            stackStartFn?: Function
        ): never;
        function ok(value: unknown, message?: string | Error): asserts value;
        function equal(actual: unknown, expected: unknown, message?: string | Error): void;
        function notEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        function deepEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        function notDeepEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        function strictEqual<T>(actual: unknown, expected: T, message?: string | Error): asserts actual is T;
        function notStrictEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        function deepStrictEqual<T>(actual: unknown, expected: T, message?: string | Error): asserts actual is T;
        function notDeepStrictEqual(actual: unknown, expected: unknown, message?: string | Error): void;
        function throws(block: () => unknown, message?: string | Error): void;
        function throws(block: () => unknown, error: AssertPredicate, message?: string | Error): void;
        function doesNotThrow(block: () => unknown, message?: string | Error): void;
        function doesNotThrow(block: () => unknown, error: AssertPredicate, message?: string | Error): void;
        function ifError(value: unknown): asserts value is null | undefined;
        function rejects(block: (() => Promise<unknown>) | Promise<unknown>, message?: string | Error): Promise<void>;
        function rejects(block: (() => Promise<unknown>) | Promise<unknown>, error: AssertPredicate, message?: string | Error): Promise<void>;
        function doesNotReject(block: (() => Promise<unknown>) | Promise<unknown>, message?: string | Error): Promise<void>;
        function doesNotReject(block: (() => Promise<unknown>) | Promise<unknown>, error: AssertPredicate, message?: string | Error): Promise<void>;
        function match(value: string, regExp: RegExp, message?: string | Error): void;
        function doesNotMatch(value: string, regExp: RegExp, message?: string | Error): void;
        const strict: Omit<typeof assert, 'equal' | 'notEqual' | 'deepEqual' | 'notDeepEqual' | 'ok' | 'strictEqual' | 'deepStrictEqual' | 'ifError' | 'strict'> & {
            (value: unknown, message?: string | Error): asserts value;
            equal: typeof strictEqual;
            notEqual: typeof notStrictEqual;
            deepEqual: typeof deepStrictEqual;
            notDeepEqual: typeof notDeepStrictEqual;
            ok: typeof ok;
            strictEqual: typeof strictEqual;
            deepStrictEqual: typeof deepStrictEqual;
            ifError: typeof ifError;
            strict: typeof strict;
        };
    }
    export = assert;
}
declare module 'node:assert' {
    import assert = require('assert');
    export = assert;
}
declare module 'async_hooks' {
    function executionAsyncId(): number;
    function executionAsyncResource(): object;
    function triggerAsyncId(): number;
    interface HookCallbacks {
        init?(asyncId: number, type: string, triggerAsyncId: number, resource: object): void;
        before?(asyncId: number): void;
        after?(asyncId: number): void;
        promiseResolve?(asyncId: number): void;
        destroy?(asyncId: number): void;
    }
    interface AsyncHook {
        enable(): this;
        disable(): this;
    }
    function createHook(callbacks: HookCallbacks): AsyncHook;
    interface AsyncResourceOptions {
        triggerAsyncId?: number | undefined;
        requireManualDestroy?: boolean | undefined;
    }
    class AsyncResource {
        constructor(type: string, triggerAsyncId?: number | AsyncResourceOptions);
        static bind<Func extends (this: ThisArg, ...args: any[]) => any, ThisArg>(
            fn: Func,
            type?: string,
            thisArg?: ThisArg
        ): Func & {
            asyncResource: AsyncResource;
        };
        bind<Func extends (...args: any[]) => any>(
            fn: Func
        ): Func & {
            asyncResource: AsyncResource;
        };
        runInAsyncScope<This, Result>(fn: (this: This, ...args: any[]) => Result, thisArg?: This, ...args: any[]): Result;
        emitDestroy(): this;
        asyncId(): number;
        triggerAsyncId(): number;
    }
    class AsyncLocalStorage<T> {
        disable(): void;
        getStore(): T | undefined;
        run<R, TArgs extends any[]>(store: T, callback: (...args: TArgs) => R, ...args: TArgs): R;
        exit<R, TArgs extends any[]>(callback: (...args: TArgs) => R, ...args: TArgs): R;
        enterWith(store: T): void;
    }
}
declare module 'node:async_hooks' {
    export * from 'async_hooks';
}
declare module 'buffer' {
    import { BinaryLike } from 'node:crypto';
    export const INSPECT_MAX_BYTES: number;
    export const kMaxLength: number;
    export const kStringMaxLength: number;
    export const constants: {
        MAX_LENGTH: number;
        MAX_STRING_LENGTH: number;
    };
    export type TranscodeEncoding = 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'latin1' | 'binary';
    export function transcode(source: Uint8Array, fromEnc: TranscodeEncoding, toEnc: TranscodeEncoding): Buffer;
    export const SlowBuffer: {
        new (size: number): Buffer;
        prototype: Buffer;
    };
    export function resolveObjectURL(id: string): Blob | undefined;
    export { Buffer };
    export interface BlobOptions {
        encoding?: BufferEncoding | undefined;
        type?: string | undefined;
    }
    export class Blob {
        readonly size: number;
        readonly type: string;
        constructor(sources: Array<BinaryLike | Blob>, options?: BlobOptions);
        arrayBuffer(): Promise<ArrayBuffer>;
        slice(start?: number, end?: number, type?: string): Blob;
        text(): Promise<string>;
        stream(): unknown;
    }
    export import atob = globalThis.atob;
    export import btoa = globalThis.btoa;
    global {
        type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex';
        type WithImplicitCoercion<T> =
            | T
            | {
                  valueOf(): T;
              };
        interface BufferConstructor {
            new (str: string, encoding?: BufferEncoding): Buffer;
            new (size: number): Buffer;
            new (array: Uint8Array): Buffer;
            new (arrayBuffer: ArrayBuffer | SharedArrayBuffer): Buffer;
            new (array: ReadonlyArray<any>): Buffer;
            new (buffer: Buffer): Buffer;
            from(arrayBuffer: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>, byteOffset?: number, length?: number): Buffer;
            from(data: Uint8Array | ReadonlyArray<number>): Buffer;
            from(data: WithImplicitCoercion<Uint8Array | ReadonlyArray<number> | string>): Buffer;
            from(
                str:
                    | WithImplicitCoercion<string>
                    | {
                          [Symbol.toPrimitive](hint: 'string'): string;
                      },
                encoding?: BufferEncoding
            ): Buffer;
            of(...items: number[]): Buffer;
            isBuffer(obj: any): obj is Buffer;
            isEncoding(encoding: string): encoding is BufferEncoding;
            byteLength(string: string | NodeJS.ArrayBufferView | ArrayBuffer | SharedArrayBuffer, encoding?: BufferEncoding): number;
            concat(list: ReadonlyArray<Uint8Array>, totalLength?: number): Buffer;
            compare(buf1: Uint8Array, buf2: Uint8Array): -1 | 0 | 1;
            alloc(size: number, fill?: string | Buffer | number, encoding?: BufferEncoding): Buffer;
            allocUnsafe(size: number): Buffer;
            allocUnsafeSlow(size: number): Buffer;
            poolSize: number;
        }
        interface Buffer extends Uint8Array {
            write(string: string, encoding?: BufferEncoding): number;
            write(string: string, offset: number, encoding?: BufferEncoding): number;
            write(string: string, offset: number, length: number, encoding?: BufferEncoding): number;
            toString(encoding?: BufferEncoding, start?: number, end?: number): string;
            toJSON(): {
                type: 'Buffer';
                data: number[];
            };
            equals(otherBuffer: Uint8Array): boolean;
            compare(target: Uint8Array, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number): -1 | 0 | 1;
            copy(target: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
            slice(start?: number, end?: number): Buffer;
            subarray(start?: number, end?: number): Buffer;
            writeBigInt64BE(value: bigint, offset?: number): number;
            writeBigInt64LE(value: bigint, offset?: number): number;
            writeBigUInt64BE(value: bigint, offset?: number): number;
            writeBigUint64BE(value: bigint, offset?: number): number;
            writeBigUInt64LE(value: bigint, offset?: number): number;
            writeBigUint64LE(value: bigint, offset?: number): number;
            writeUIntLE(value: number, offset: number, byteLength: number): number;
            writeUintLE(value: number, offset: number, byteLength: number): number;
            writeUIntBE(value: number, offset: number, byteLength: number): number;
            writeUintBE(value: number, offset: number, byteLength: number): number;
            writeIntLE(value: number, offset: number, byteLength: number): number;
            writeIntBE(value: number, offset: number, byteLength: number): number;
            readBigUInt64BE(offset?: number): bigint;
            readBigUint64BE(offset?: number): bigint;
            readBigUInt64LE(offset?: number): bigint;
            readBigUint64LE(offset?: number): bigint;
            readBigInt64BE(offset?: number): bigint;
            readBigInt64LE(offset?: number): bigint;
            readUIntLE(offset: number, byteLength: number): number;
            readUintLE(offset: number, byteLength: number): number;
            readUIntBE(offset: number, byteLength: number): number;
            readUintBE(offset: number, byteLength: number): number;
            readIntLE(offset: number, byteLength: number): number;
            readIntBE(offset: number, byteLength: number): number;
            readUInt8(offset?: number): number;
            readUint8(offset?: number): number;
            readUInt16LE(offset?: number): number;
            readUint16LE(offset?: number): number;
            readUInt16BE(offset?: number): number;
            readUint16BE(offset?: number): number;
            readUInt32LE(offset?: number): number;
            readUint32LE(offset?: number): number;
            readUInt32BE(offset?: number): number;
            readUint32BE(offset?: number): number;
            readInt8(offset?: number): number;
            readInt16LE(offset?: number): number;
            readInt16BE(offset?: number): number;
            readInt32LE(offset?: number): number;
            readInt32BE(offset?: number): number;
            readFloatLE(offset?: number): number;
            readFloatBE(offset?: number): number;
            readDoubleLE(offset?: number): number;
            readDoubleBE(offset?: number): number;
            reverse(): this;
            swap16(): Buffer;
            swap32(): Buffer;
            swap64(): Buffer;
            writeUInt8(value: number, offset?: number): number;
            writeUint8(value: number, offset?: number): number;
            writeUInt16LE(value: number, offset?: number): number;
            writeUint16LE(value: number, offset?: number): number;
            writeUInt16BE(value: number, offset?: number): number;
            writeUint16BE(value: number, offset?: number): number;
            writeUInt32LE(value: number, offset?: number): number;
            writeUint32LE(value: number, offset?: number): number;
            writeUInt32BE(value: number, offset?: number): number;
            writeUint32BE(value: number, offset?: number): number;
            writeInt8(value: number, offset?: number): number;
            writeInt16LE(value: number, offset?: number): number;
            writeInt16BE(value: number, offset?: number): number;
            writeInt32LE(value: number, offset?: number): number;
            writeInt32BE(value: number, offset?: number): number;
            writeFloatLE(value: number, offset?: number): number;
            writeFloatBE(value: number, offset?: number): number;
            writeDoubleLE(value: number, offset?: number): number;
            writeDoubleBE(value: number, offset?: number): number;
            fill(value: string | Uint8Array | number, offset?: number, end?: number, encoding?: BufferEncoding): this;
            indexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
            lastIndexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
            entries(): IterableIterator<[number, number]>;
            includes(value: string | number | Buffer, byteOffset?: number, encoding?: BufferEncoding): boolean;
            keys(): IterableIterator<number>;
            values(): IterableIterator<number>;
        }
        var Buffer: BufferConstructor;
        function atob(data: string): string;
        function btoa(data: string): string;
    }
}
declare module 'node:buffer' {
    export * from 'buffer';
}
declare module 'child_process' {
    import { ObjectEncodingOptions } from 'node:fs';
    import { EventEmitter, Abortable } from 'node:events';
    import * as net from 'node:net';
    import { Writable, Readable, Stream, Pipe } from 'node:stream';
    import { URL } from 'node:url';
    type Serializable = string | object | number | boolean | bigint;
    type SendHandle = net.Socket | net.Server;
    class ChildProcess extends EventEmitter {
        stdin: Writable | null;
        stdout: Readable | null;
        stderr: Readable | null;
        readonly channel?: Pipe | null | undefined;
        readonly stdio: [
            Writable | null,
            Readable | null,
            Readable | null,
            Readable | Writable | null | undefined,
            Readable | Writable | null | undefined
        ];
        readonly killed: boolean;
        readonly pid?: number | undefined;
        readonly connected: boolean;
        readonly exitCode: number | null;
        readonly signalCode: NodeJS.Signals | null;
        readonly spawnargs: string[];
        readonly spawnfile: string;
        kill(signal?: NodeJS.Signals | number): boolean;
        send(message: Serializable, callback?: (error: Error | null) => void): boolean;
        send(message: Serializable, sendHandle?: SendHandle, callback?: (error: Error | null) => void): boolean;
        send(message: Serializable, sendHandle?: SendHandle, options?: MessageOptions, callback?: (error: Error | null) => void): boolean;
        disconnect(): void;
        unref(): void;
        ref(): void;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'close', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        addListener(event: 'disconnect', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'exit', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        addListener(event: 'message', listener: (message: Serializable, sendHandle: SendHandle) => void): this;
        addListener(event: 'spawn', listener: () => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'close', code: number | null, signal: NodeJS.Signals | null): boolean;
        emit(event: 'disconnect'): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'exit', code: number | null, signal: NodeJS.Signals | null): boolean;
        emit(event: 'message', message: Serializable, sendHandle: SendHandle): boolean;
        emit(event: 'spawn', listener: () => void): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        on(event: 'disconnect', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'exit', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        on(event: 'message', listener: (message: Serializable, sendHandle: SendHandle) => void): this;
        on(event: 'spawn', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        once(event: 'disconnect', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'exit', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        once(event: 'message', listener: (message: Serializable, sendHandle: SendHandle) => void): this;
        once(event: 'spawn', listener: () => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        prependListener(event: 'disconnect', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'exit', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        prependListener(event: 'message', listener: (message: Serializable, sendHandle: SendHandle) => void): this;
        prependListener(event: 'spawn', listener: () => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        prependOnceListener(event: 'disconnect', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'exit', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this;
        prependOnceListener(event: 'message', listener: (message: Serializable, sendHandle: SendHandle) => void): this;
        prependOnceListener(event: 'spawn', listener: () => void): this;
    }
    interface ChildProcessWithoutNullStreams extends ChildProcess {
        stdin: Writable;
        stdout: Readable;
        stderr: Readable;
        readonly stdio: [
            Writable,
            Readable,
            Readable,
            Readable | Writable | null | undefined,
            Readable | Writable | null | undefined
        ];
    }
    interface ChildProcessByStdio<I extends null | Writable, O extends null | Readable, E extends null | Readable> extends ChildProcess {
        stdin: I;
        stdout: O;
        stderr: E;
        readonly stdio: [
            I,
            O,
            E,
            Readable | Writable | null | undefined,
            Readable | Writable | null | undefined
        ];
    }
    interface MessageOptions {
        keepOpen?: boolean | undefined;
    }
    type IOType = 'overlapped' | 'pipe' | 'ignore' | 'inherit';
    type StdioOptions = IOType | Array<IOType | 'ipc' | Stream | number | null | undefined>;
    type SerializationType = 'json' | 'advanced';
    interface MessagingOptions extends Abortable {
        serialization?: SerializationType | undefined;
        killSignal?: NodeJS.Signals | number | undefined;
        timeout?: number | undefined;
    }
    interface ProcessEnvOptions {
        uid?: number | undefined;
        gid?: number | undefined;
        cwd?: string | URL | undefined;
        env?: NodeJS.ProcessEnv | undefined;
    }
    interface CommonOptions extends ProcessEnvOptions {
        windowsHide?: boolean | undefined;
        timeout?: number | undefined;
    }
    interface CommonSpawnOptions extends CommonOptions, MessagingOptions, Abortable {
        argv0?: string | undefined;
        stdio?: StdioOptions | undefined;
        shell?: boolean | string | undefined;
        windowsVerbatimArguments?: boolean | undefined;
    }
    interface SpawnOptions extends CommonSpawnOptions {
        detached?: boolean | undefined;
    }
    interface SpawnOptionsWithoutStdio extends SpawnOptions {
        stdio?: StdioPipeNamed | StdioPipe[] | undefined;
    }
    type StdioNull = 'inherit' | 'ignore' | Stream;
    type StdioPipeNamed = 'pipe' | 'overlapped';
    type StdioPipe = undefined | null | StdioPipeNamed;
    interface SpawnOptionsWithStdioTuple<Stdin extends StdioNull | StdioPipe, Stdout extends StdioNull | StdioPipe, Stderr extends StdioNull | StdioPipe> extends SpawnOptions {
        stdio: [Stdin, Stdout, Stderr];
    }
    function spawn(command: string, options?: SpawnOptionsWithoutStdio): ChildProcessWithoutNullStreams;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioPipe>): ChildProcessByStdio<Writable, Readable, Readable>;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioNull>): ChildProcessByStdio<Writable, Readable, null>;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioPipe>): ChildProcessByStdio<Writable, null, Readable>;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>): ChildProcessByStdio<null, Readable, Readable>;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioNull>): ChildProcessByStdio<Writable, null, null>;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioNull>): ChildProcessByStdio<null, Readable, null>;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioPipe>): ChildProcessByStdio<null, null, Readable>;
    function spawn(command: string, options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioNull>): ChildProcessByStdio<null, null, null>;
    function spawn(command: string, options: SpawnOptions): ChildProcess;
    function spawn(command: string, args?: ReadonlyArray<string>, options?: SpawnOptionsWithoutStdio): ChildProcessWithoutNullStreams;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioPipe>): ChildProcessByStdio<Writable, Readable, Readable>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioNull>): ChildProcessByStdio<Writable, Readable, null>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioPipe>): ChildProcessByStdio<Writable, null, Readable>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>): ChildProcessByStdio<null, Readable, Readable>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioNull>): ChildProcessByStdio<Writable, null, null>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioNull>): ChildProcessByStdio<null, Readable, null>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioPipe>): ChildProcessByStdio<null, null, Readable>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioNull>): ChildProcessByStdio<null, null, null>;
    function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptions): ChildProcess;
    interface ExecOptions extends CommonOptions {
        shell?: string | undefined;
        signal?: AbortSignal | undefined;
        maxBuffer?: number | undefined;
        killSignal?: NodeJS.Signals | number | undefined;
    }
    interface ExecOptionsWithStringEncoding extends ExecOptions {
        encoding: BufferEncoding;
    }
    interface ExecOptionsWithBufferEncoding extends ExecOptions {
        encoding: BufferEncoding | null;
    }
    interface ExecException extends Error {
        cmd?: string | undefined;
        killed?: boolean | undefined;
        code?: number | undefined;
        signal?: NodeJS.Signals | undefined;
    }
    function exec(command: string, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;
    function exec(
        command: string,
        options: {
            encoding: 'buffer' | null;
        } & ExecOptions,
        callback?: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void
    ): ChildProcess;
    function exec(
        command: string,
        options: {
            encoding: BufferEncoding;
        } & ExecOptions,
        callback?: (error: ExecException | null, stdout: string, stderr: string) => void
    ): ChildProcess;
    function exec(
        command: string,
        options: {
            encoding: BufferEncoding;
        } & ExecOptions,
        callback?: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void
    ): ChildProcess;
    function exec(command: string, options: ExecOptions, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;
    function exec(
        command: string,
        options: (ObjectEncodingOptions & ExecOptions) | undefined | null,
        callback?: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void
    ): ChildProcess;
    interface PromiseWithChild<T> extends Promise<T> {
        child: ChildProcess;
    }
    namespace exec {
        function __promisify__(command: string): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            command: string,
            options: {
                encoding: 'buffer' | null;
            } & ExecOptions
        ): PromiseWithChild<{
            stdout: Buffer;
            stderr: Buffer;
        }>;
        function __promisify__(
            command: string,
            options: {
                encoding: BufferEncoding;
            } & ExecOptions
        ): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            command: string,
            options: ExecOptions
        ): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            command: string,
            options?: (ObjectEncodingOptions & ExecOptions) | null
        ): PromiseWithChild<{
            stdout: string | Buffer;
            stderr: string | Buffer;
        }>;
    }
    interface ExecFileOptions extends CommonOptions, Abortable {
        maxBuffer?: number | undefined;
        killSignal?: NodeJS.Signals | number | undefined;
        windowsVerbatimArguments?: boolean | undefined;
        shell?: boolean | string | undefined;
        signal?: AbortSignal | undefined;
    }
    interface ExecFileOptionsWithStringEncoding extends ExecFileOptions {
        encoding: BufferEncoding;
    }
    interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
        encoding: 'buffer' | null;
    }
    interface ExecFileOptionsWithOtherEncoding extends ExecFileOptions {
        encoding: BufferEncoding;
    }
    type ExecFileException = ExecException & NodeJS.ErrnoException;
    function execFile(file: string): ChildProcess;
    function execFile(file: string, options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null): ChildProcess;
    function execFile(file: string, args?: ReadonlyArray<string> | null): ChildProcess;
    function execFile(file: string, args: ReadonlyArray<string> | undefined | null, options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null): ChildProcess;
    function execFile(file: string, callback: (error: ExecFileException | null, stdout: string, stderr: string) => void): ChildProcess;
    function execFile(file: string, args: ReadonlyArray<string> | undefined | null, callback: (error: ExecFileException | null, stdout: string, stderr: string) => void): ChildProcess;
    function execFile(file: string, options: ExecFileOptionsWithBufferEncoding, callback: (error: ExecFileException | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
    function execFile(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: ExecFileOptionsWithBufferEncoding,
        callback: (error: ExecFileException | null, stdout: Buffer, stderr: Buffer) => void
    ): ChildProcess;
    function execFile(file: string, options: ExecFileOptionsWithStringEncoding, callback: (error: ExecFileException | null, stdout: string, stderr: string) => void): ChildProcess;
    function execFile(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: ExecFileOptionsWithStringEncoding,
        callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
    ): ChildProcess;
    function execFile(file: string, options: ExecFileOptionsWithOtherEncoding, callback: (error: ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess;
    function execFile(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: ExecFileOptionsWithOtherEncoding,
        callback: (error: ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void
    ): ChildProcess;
    function execFile(file: string, options: ExecFileOptions, callback: (error: ExecFileException | null, stdout: string, stderr: string) => void): ChildProcess;
    function execFile(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: ExecFileOptions,
        callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
    ): ChildProcess;
    function execFile(
        file: string,
        options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null,
        callback: ((error: ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null
    ): ChildProcess;
    function execFile(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null,
        callback: ((error: ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null
    ): ChildProcess;
    namespace execFile {
        function __promisify__(file: string): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            file: string,
            args: ReadonlyArray<string> | undefined | null
        ): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            file: string,
            options: ExecFileOptionsWithBufferEncoding
        ): PromiseWithChild<{
            stdout: Buffer;
            stderr: Buffer;
        }>;
        function __promisify__(
            file: string,
            args: ReadonlyArray<string> | undefined | null,
            options: ExecFileOptionsWithBufferEncoding
        ): PromiseWithChild<{
            stdout: Buffer;
            stderr: Buffer;
        }>;
        function __promisify__(
            file: string,
            options: ExecFileOptionsWithStringEncoding
        ): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            file: string,
            args: ReadonlyArray<string> | undefined | null,
            options: ExecFileOptionsWithStringEncoding
        ): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            file: string,
            options: ExecFileOptionsWithOtherEncoding
        ): PromiseWithChild<{
            stdout: string | Buffer;
            stderr: string | Buffer;
        }>;
        function __promisify__(
            file: string,
            args: ReadonlyArray<string> | undefined | null,
            options: ExecFileOptionsWithOtherEncoding
        ): PromiseWithChild<{
            stdout: string | Buffer;
            stderr: string | Buffer;
        }>;
        function __promisify__(
            file: string,
            options: ExecFileOptions
        ): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            file: string,
            args: ReadonlyArray<string> | undefined | null,
            options: ExecFileOptions
        ): PromiseWithChild<{
            stdout: string;
            stderr: string;
        }>;
        function __promisify__(
            file: string,
            options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null
        ): PromiseWithChild<{
            stdout: string | Buffer;
            stderr: string | Buffer;
        }>;
        function __promisify__(
            file: string,
            args: ReadonlyArray<string> | undefined | null,
            options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null
        ): PromiseWithChild<{
            stdout: string | Buffer;
            stderr: string | Buffer;
        }>;
    }
    interface ForkOptions extends ProcessEnvOptions, MessagingOptions, Abortable {
        execPath?: string | undefined;
        execArgv?: string[] | undefined;
        silent?: boolean | undefined;
        stdio?: StdioOptions | undefined;
        detached?: boolean | undefined;
        windowsVerbatimArguments?: boolean | undefined;
    }
    function fork(modulePath: string, options?: ForkOptions): ChildProcess;
    function fork(modulePath: string, args?: ReadonlyArray<string>, options?: ForkOptions): ChildProcess;
    interface SpawnSyncOptions extends CommonSpawnOptions {
        input?: string | NodeJS.ArrayBufferView | undefined;
        maxBuffer?: number | undefined;
        encoding?: BufferEncoding | 'buffer' | null | undefined;
    }
    interface SpawnSyncOptionsWithStringEncoding extends SpawnSyncOptions {
        encoding: BufferEncoding;
    }
    interface SpawnSyncOptionsWithBufferEncoding extends SpawnSyncOptions {
        encoding?: 'buffer' | null | undefined;
    }
    interface SpawnSyncReturns<T> {
        pid: number;
        output: Array<T | null>;
        stdout: T;
        stderr: T;
        status: number | null;
        signal: NodeJS.Signals | null;
        error?: Error | undefined;
    }
    function spawnSync(command: string): SpawnSyncReturns<Buffer>;
    function spawnSync(command: string, options: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    function spawnSync(command: string, options: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<string | Buffer>;
    function spawnSync(command: string, args: ReadonlyArray<string>): SpawnSyncReturns<Buffer>;
    function spawnSync(command: string, args: ReadonlyArray<string>, options: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    function spawnSync(command: string, args: ReadonlyArray<string>, options: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    function spawnSync(command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptions): SpawnSyncReturns<string | Buffer>;
    interface CommonExecOptions extends CommonOptions {
        input?: string | NodeJS.ArrayBufferView | undefined;
        stdio?: StdioOptions | undefined;
        killSignal?: NodeJS.Signals | number | undefined;
        maxBuffer?: number | undefined;
        encoding?: BufferEncoding | 'buffer' | null | undefined;
    }
    interface ExecSyncOptions extends CommonExecOptions {
        shell?: string | undefined;
    }
    interface ExecSyncOptionsWithStringEncoding extends ExecSyncOptions {
        encoding: BufferEncoding;
    }
    interface ExecSyncOptionsWithBufferEncoding extends ExecSyncOptions {
        encoding?: 'buffer' | null | undefined;
    }
    function execSync(command: string): Buffer;
    function execSync(command: string, options: ExecSyncOptionsWithStringEncoding): string;
    function execSync(command: string, options: ExecSyncOptionsWithBufferEncoding): Buffer;
    function execSync(command: string, options?: ExecSyncOptions): string | Buffer;
    interface ExecFileSyncOptions extends CommonExecOptions {
        shell?: boolean | string | undefined;
    }
    interface ExecFileSyncOptionsWithStringEncoding extends ExecFileSyncOptions {
        encoding: BufferEncoding;
    }
    interface ExecFileSyncOptionsWithBufferEncoding extends ExecFileSyncOptions {
        encoding?: 'buffer' | null;
    }
    function execFileSync(file: string): Buffer;
    function execFileSync(file: string, options: ExecFileSyncOptionsWithStringEncoding): string;
    function execFileSync(file: string, options: ExecFileSyncOptionsWithBufferEncoding): Buffer;
    function execFileSync(file: string, options?: ExecFileSyncOptions): string | Buffer;
    function execFileSync(file: string, args: ReadonlyArray<string>): Buffer;
    function execFileSync(file: string, args: ReadonlyArray<string>, options: ExecFileSyncOptionsWithStringEncoding): string;
    function execFileSync(file: string, args: ReadonlyArray<string>, options: ExecFileSyncOptionsWithBufferEncoding): Buffer;
    function execFileSync(file: string, args?: ReadonlyArray<string>, options?: ExecFileSyncOptions): string | Buffer;
}
declare module 'node:child_process' {
    export * from 'child_process';
}
declare module 'cluster' {
    import * as child from 'node:child_process';
    import EventEmitter = require('node:events');
    import * as net from 'node:net';
    export interface ClusterSettings {
        execArgv?: string[] | undefined;
        exec?: string | undefined;
        args?: string[] | undefined;
        silent?: boolean | undefined;
        stdio?: any[] | undefined;
        uid?: number | undefined;
        gid?: number | undefined;
        inspectPort?: number | (() => number) | undefined;
    }
    export interface Address {
        address: string;
        port: number;
        addressType: number | 'udp4' | 'udp6';
    }
    export class Worker extends EventEmitter {
        id: number;
        process: child.ChildProcess;
        send(message: child.Serializable, callback?: (error: Error | null) => void): boolean;
        send(message: child.Serializable, sendHandle: child.SendHandle, callback?: (error: Error | null) => void): boolean;
        send(message: child.Serializable, sendHandle: child.SendHandle, options?: child.MessageOptions, callback?: (error: Error | null) => void): boolean;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
        isConnected(): boolean;
        isDead(): boolean;
        exitedAfterDisconnect: boolean;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'disconnect', listener: () => void): this;
        addListener(event: 'error', listener: (error: Error) => void): this;
        addListener(event: 'exit', listener: (code: number, signal: string) => void): this;
        addListener(event: 'listening', listener: (address: Address) => void): this;
        addListener(event: 'message', listener: (message: any, handle: net.Socket | net.Server) => void): this;
        addListener(event: 'online', listener: () => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'disconnect'): boolean;
        emit(event: 'error', error: Error): boolean;
        emit(event: 'exit', code: number, signal: string): boolean;
        emit(event: 'listening', address: Address): boolean;
        emit(event: 'message', message: any, handle: net.Socket | net.Server): boolean;
        emit(event: 'online'): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'disconnect', listener: () => void): this;
        on(event: 'error', listener: (error: Error) => void): this;
        on(event: 'exit', listener: (code: number, signal: string) => void): this;
        on(event: 'listening', listener: (address: Address) => void): this;
        on(event: 'message', listener: (message: any, handle: net.Socket | net.Server) => void): this;
        on(event: 'online', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'disconnect', listener: () => void): this;
        once(event: 'error', listener: (error: Error) => void): this;
        once(event: 'exit', listener: (code: number, signal: string) => void): this;
        once(event: 'listening', listener: (address: Address) => void): this;
        once(event: 'message', listener: (message: any, handle: net.Socket | net.Server) => void): this;
        once(event: 'online', listener: () => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'disconnect', listener: () => void): this;
        prependListener(event: 'error', listener: (error: Error) => void): this;
        prependListener(event: 'exit', listener: (code: number, signal: string) => void): this;
        prependListener(event: 'listening', listener: (address: Address) => void): this;
        prependListener(event: 'message', listener: (message: any, handle: net.Socket | net.Server) => void): this;
        prependListener(event: 'online', listener: () => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'disconnect', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (error: Error) => void): this;
        prependOnceListener(event: 'exit', listener: (code: number, signal: string) => void): this;
        prependOnceListener(event: 'listening', listener: (address: Address) => void): this;
        prependOnceListener(event: 'message', listener: (message: any, handle: net.Socket | net.Server) => void): this;
        prependOnceListener(event: 'online', listener: () => void): this;
    }
    export interface Cluster extends EventEmitter {
        disconnect(callback?: () => void): void;
        fork(env?: any): Worker;
        readonly isMaster: boolean;
        readonly isPrimary: boolean;
        readonly isWorker: boolean;
        schedulingPolicy: number;
        readonly settings: ClusterSettings;
        setupMaster(settings?: ClusterSettings): void;
        setupPrimary(settings?: ClusterSettings): void;
        readonly worker?: Worker | undefined;
        readonly workers?: NodeJS.Dict<Worker> | undefined;
        readonly SCHED_NONE: number;
        readonly SCHED_RR: number;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'disconnect', listener: (worker: Worker) => void): this;
        addListener(event: 'exit', listener: (worker: Worker, code: number, signal: string) => void): this;
        addListener(event: 'fork', listener: (worker: Worker) => void): this;
        addListener(event: 'listening', listener: (worker: Worker, address: Address) => void): this;
        addListener(event: 'message', listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;
        addListener(event: 'online', listener: (worker: Worker) => void): this;
        addListener(event: 'setup', listener: (settings: ClusterSettings) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'disconnect', worker: Worker): boolean;
        emit(event: 'exit', worker: Worker, code: number, signal: string): boolean;
        emit(event: 'fork', worker: Worker): boolean;
        emit(event: 'listening', worker: Worker, address: Address): boolean;
        emit(event: 'message', worker: Worker, message: any, handle: net.Socket | net.Server): boolean;
        emit(event: 'online', worker: Worker): boolean;
        emit(event: 'setup', settings: ClusterSettings): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'disconnect', listener: (worker: Worker) => void): this;
        on(event: 'exit', listener: (worker: Worker, code: number, signal: string) => void): this;
        on(event: 'fork', listener: (worker: Worker) => void): this;
        on(event: 'listening', listener: (worker: Worker, address: Address) => void): this;
        on(event: 'message', listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;
        on(event: 'online', listener: (worker: Worker) => void): this;
        on(event: 'setup', listener: (settings: ClusterSettings) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'disconnect', listener: (worker: Worker) => void): this;
        once(event: 'exit', listener: (worker: Worker, code: number, signal: string) => void): this;
        once(event: 'fork', listener: (worker: Worker) => void): this;
        once(event: 'listening', listener: (worker: Worker, address: Address) => void): this;
        once(event: 'message', listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;
        once(event: 'online', listener: (worker: Worker) => void): this;
        once(event: 'setup', listener: (settings: ClusterSettings) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'disconnect', listener: (worker: Worker) => void): this;
        prependListener(event: 'exit', listener: (worker: Worker, code: number, signal: string) => void): this;
        prependListener(event: 'fork', listener: (worker: Worker) => void): this;
        prependListener(event: 'listening', listener: (worker: Worker, address: Address) => void): this;
        prependListener(event: 'message', listener: (worker: Worker, message: any, handle?: net.Socket | net.Server) => void): this;
        prependListener(event: 'online', listener: (worker: Worker) => void): this;
        prependListener(event: 'setup', listener: (settings: ClusterSettings) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'disconnect', listener: (worker: Worker) => void): this;
        prependOnceListener(event: 'exit', listener: (worker: Worker, code: number, signal: string) => void): this;
        prependOnceListener(event: 'fork', listener: (worker: Worker) => void): this;
        prependOnceListener(event: 'listening', listener: (worker: Worker, address: Address) => void): this;
        prependOnceListener(event: 'message', listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;
        prependOnceListener(event: 'online', listener: (worker: Worker) => void): this;
        prependOnceListener(event: 'setup', listener: (settings: ClusterSettings) => void): this;
    }
    const cluster: Cluster;
    export default cluster;
}
declare module 'node:cluster' {
    export * from 'cluster';
    export { default as default } from 'cluster';
}
declare module 'constants' {
    import { constants as osConstants, SignalConstants } from 'node:os';
    import { constants as cryptoConstants } from 'node:crypto';
    import { constants as fsConstants } from 'node:fs';
    const exp: typeof osConstants.errno &
        typeof osConstants.priority &
        SignalConstants &
        typeof cryptoConstants &
        typeof fsConstants;
    export = exp;
}
declare module 'node:constants' {
    import constants = require('constants');
    export = constants;
}
declare module 'crypto' {
    import * as stream from 'node:stream';
    import { PeerCertificate } from 'node:tls';
    interface Certificate {
        exportChallenge(spkac: BinaryLike): Buffer;
        exportPublicKey(spkac: BinaryLike, encoding?: string): Buffer;
        verifySpkac(spkac: NodeJS.ArrayBufferView): boolean;
    }
    const Certificate: Certificate & {
        new (): Certificate;
        (): Certificate;
        exportChallenge(spkac: BinaryLike): Buffer;
        exportPublicKey(spkac: BinaryLike, encoding?: string): Buffer;
        verifySpkac(spkac: NodeJS.ArrayBufferView): boolean;
    };
    namespace constants {
        const OPENSSL_VERSION_NUMBER: number;
        const SSL_OP_ALL: number;
        const SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
        const SSL_OP_CIPHER_SERVER_PREFERENCE: number;
        const SSL_OP_CISCO_ANYCONNECT: number;
        const SSL_OP_COOKIE_EXCHANGE: number;
        const SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
        const SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
        const SSL_OP_EPHEMERAL_RSA: number;
        const SSL_OP_LEGACY_SERVER_CONNECT: number;
        const SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
        const SSL_OP_MICROSOFT_SESS_ID_BUG: number;
        const SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
        const SSL_OP_NETSCAPE_CA_DN_BUG: number;
        const SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
        const SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
        const SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
        const SSL_OP_NO_COMPRESSION: number;
        const SSL_OP_NO_QUERY_MTU: number;
        const SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
        const SSL_OP_NO_SSLv2: number;
        const SSL_OP_NO_SSLv3: number;
        const SSL_OP_NO_TICKET: number;
        const SSL_OP_NO_TLSv1: number;
        const SSL_OP_NO_TLSv1_1: number;
        const SSL_OP_NO_TLSv1_2: number;
        const SSL_OP_PKCS1_CHECK_1: number;
        const SSL_OP_PKCS1_CHECK_2: number;
        const SSL_OP_SINGLE_DH_USE: number;
        const SSL_OP_SINGLE_ECDH_USE: number;
        const SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
        const SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
        const SSL_OP_TLS_BLOCK_PADDING_BUG: number;
        const SSL_OP_TLS_D5_BUG: number;
        const SSL_OP_TLS_ROLLBACK_BUG: number;
        const ENGINE_METHOD_RSA: number;
        const ENGINE_METHOD_DSA: number;
        const ENGINE_METHOD_DH: number;
        const ENGINE_METHOD_RAND: number;
        const ENGINE_METHOD_EC: number;
        const ENGINE_METHOD_CIPHERS: number;
        const ENGINE_METHOD_DIGESTS: number;
        const ENGINE_METHOD_PKEY_METHS: number;
        const ENGINE_METHOD_PKEY_ASN1_METHS: number;
        const ENGINE_METHOD_ALL: number;
        const ENGINE_METHOD_NONE: number;
        const DH_CHECK_P_NOT_SAFE_PRIME: number;
        const DH_CHECK_P_NOT_PRIME: number;
        const DH_UNABLE_TO_CHECK_GENERATOR: number;
        const DH_NOT_SUITABLE_GENERATOR: number;
        const ALPN_ENABLED: number;
        const RSA_PKCS1_PADDING: number;
        const RSA_SSLV23_PADDING: number;
        const RSA_NO_PADDING: number;
        const RSA_PKCS1_OAEP_PADDING: number;
        const RSA_X931_PADDING: number;
        const RSA_PKCS1_PSS_PADDING: number;
        const RSA_PSS_SALTLEN_DIGEST: number;
        const RSA_PSS_SALTLEN_MAX_SIGN: number;
        const RSA_PSS_SALTLEN_AUTO: number;
        const POINT_CONVERSION_COMPRESSED: number;
        const POINT_CONVERSION_UNCOMPRESSED: number;
        const POINT_CONVERSION_HYBRID: number;
        const defaultCoreCipherList: string;
        const defaultCipherList: string;
    }
    interface HashOptions extends stream.TransformOptions {
        outputLength?: number | undefined;
    }
    const fips: boolean;
    function createHash(algorithm: string, options?: HashOptions): Hash;
    function createHmac(algorithm: string, key: BinaryLike | KeyObject, options?: stream.TransformOptions): Hmac;
    type BinaryToTextEncoding = 'base64' | 'base64url' | 'hex' | 'binary';
    type CharacterEncoding = 'utf8' | 'utf-8' | 'utf16le' | 'latin1';
    type LegacyCharacterEncoding = 'ascii' | 'binary' | 'ucs2' | 'ucs-2';
    type Encoding = BinaryToTextEncoding | CharacterEncoding | LegacyCharacterEncoding;
    type ECDHKeyFormat = 'compressed' | 'uncompressed' | 'hybrid';
    class Hash extends stream.Transform {
        private constructor();
        copy(options?: stream.TransformOptions): Hash;
        update(data: BinaryLike): Hash;
        update(data: string, inputEncoding: Encoding): Hash;
        digest(): Buffer;
        digest(encoding: BinaryToTextEncoding): string;
    }
    class Hmac extends stream.Transform {
        private constructor();
        update(data: BinaryLike): Hmac;
        update(data: string, inputEncoding: Encoding): Hmac;
        digest(): Buffer;
        digest(encoding: BinaryToTextEncoding): string;
    }
    type KeyObjectType = 'secret' | 'public' | 'private';
    interface KeyExportOptions<T extends KeyFormat> {
        type: 'pkcs1' | 'spki' | 'pkcs8' | 'sec1';
        format: T;
        cipher?: string | undefined;
        passphrase?: string | Buffer | undefined;
    }
    interface JwkKeyExportOptions {
        format: 'jwk';
    }
    interface JsonWebKey {
        crv?: string | undefined;
        d?: string | undefined;
        dp?: string | undefined;
        dq?: string | undefined;
        e?: string | undefined;
        k?: string | undefined;
        kty?: string | undefined;
        n?: string | undefined;
        p?: string | undefined;
        q?: string | undefined;
        qi?: string | undefined;
        x?: string | undefined;
        y?: string | undefined;
        [key: string]: unknown;
    }
    interface AsymmetricKeyDetails {
        modulusLength?: number | undefined;
        publicExponent?: bigint | undefined;
        hashAlgorithm?: string | undefined;
        mgf1HashAlgorithm?: string | undefined;
        saltLength?: number | undefined;
        divisorLength?: number | undefined;
        namedCurve?: string | undefined;
    }
    interface JwkKeyExportOptions {
        format: 'jwk';
    }
    class KeyObject {
        private constructor();
        static from(key: webcrypto.CryptoKey): KeyObject;
        asymmetricKeyType?: KeyType | undefined;
        asymmetricKeySize?: number | undefined;
        asymmetricKeyDetails?: AsymmetricKeyDetails | undefined;
        export(options: KeyExportOptions<'pem'>): string | Buffer;
        export(options?: KeyExportOptions<'der'>): Buffer;
        export(options?: JwkKeyExportOptions): JsonWebKey;
        symmetricKeySize?: number | undefined;
        type: KeyObjectType;
    }
    type CipherCCMTypes = 'aes-128-ccm' | 'aes-192-ccm' | 'aes-256-ccm' | 'chacha20-poly1305';
    type CipherGCMTypes = 'aes-128-gcm' | 'aes-192-gcm' | 'aes-256-gcm';
    type BinaryLike = string | NodeJS.ArrayBufferView;
    type CipherKey = BinaryLike | KeyObject;
    interface CipherCCMOptions extends stream.TransformOptions {
        authTagLength: number;
    }
    interface CipherGCMOptions extends stream.TransformOptions {
        authTagLength?: number | undefined;
    }
    function createCipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): CipherCCM;
    function createCipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): CipherGCM;
    function createCipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Cipher;
    function createCipheriv(algorithm: CipherCCMTypes, key: CipherKey, iv: BinaryLike | null, options: CipherCCMOptions): CipherCCM;
    function createCipheriv(algorithm: CipherGCMTypes, key: CipherKey, iv: BinaryLike | null, options?: CipherGCMOptions): CipherGCM;
    function createCipheriv(algorithm: string, key: CipherKey, iv: BinaryLike | null, options?: stream.TransformOptions): Cipher;
    class Cipher extends stream.Transform {
        private constructor();
        update(data: BinaryLike): Buffer;
        update(data: string, inputEncoding: Encoding): Buffer;
        update(data: NodeJS.ArrayBufferView, inputEncoding: undefined, outputEncoding: Encoding): string;
        update(data: string, inputEncoding: Encoding | undefined, outputEncoding: Encoding): string;
        final(): Buffer;
        final(outputEncoding: BufferEncoding): string;
        setAutoPadding(autoPadding?: boolean): this;
    }
    interface CipherCCM extends Cipher {
        setAAD(
            buffer: NodeJS.ArrayBufferView,
            options: {
                plaintextLength: number;
            }
        ): this;
        getAuthTag(): Buffer;
    }
    interface CipherGCM extends Cipher {
        setAAD(
            buffer: NodeJS.ArrayBufferView,
            options?: {
                plaintextLength: number;
            }
        ): this;
        getAuthTag(): Buffer;
    }
    function createDecipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): DecipherCCM;
    function createDecipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): DecipherGCM;
    function createDecipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Decipher;
    function createDecipheriv(algorithm: CipherCCMTypes, key: CipherKey, iv: BinaryLike | null, options: CipherCCMOptions): DecipherCCM;
    function createDecipheriv(algorithm: CipherGCMTypes, key: CipherKey, iv: BinaryLike | null, options?: CipherGCMOptions): DecipherGCM;
    function createDecipheriv(algorithm: string, key: CipherKey, iv: BinaryLike | null, options?: stream.TransformOptions): Decipher;
    class Decipher extends stream.Transform {
        private constructor();
        update(data: NodeJS.ArrayBufferView): Buffer;
        update(data: string, inputEncoding: Encoding): Buffer;
        update(data: NodeJS.ArrayBufferView, inputEncoding: undefined, outputEncoding: Encoding): string;
        update(data: string, inputEncoding: Encoding | undefined, outputEncoding: Encoding): string;
        final(): Buffer;
        final(outputEncoding: BufferEncoding): string;
        setAutoPadding(auto_padding?: boolean): this;
    }
    interface DecipherCCM extends Decipher {
        setAuthTag(buffer: NodeJS.ArrayBufferView): this;
        setAAD(
            buffer: NodeJS.ArrayBufferView,
            options: {
                plaintextLength: number;
            }
        ): this;
    }
    interface DecipherGCM extends Decipher {
        setAuthTag(buffer: NodeJS.ArrayBufferView): this;
        setAAD(
            buffer: NodeJS.ArrayBufferView,
            options?: {
                plaintextLength: number;
            }
        ): this;
    }
    interface PrivateKeyInput {
        key: string | Buffer;
        format?: KeyFormat | undefined;
        type?: 'pkcs1' | 'pkcs8' | 'sec1' | undefined;
        passphrase?: string | Buffer | undefined;
    }
    interface PublicKeyInput {
        key: string | Buffer;
        format?: KeyFormat | undefined;
        type?: 'pkcs1' | 'spki' | undefined;
    }
    function generateKey(
        type: 'hmac' | 'aes',
        options: {
            length: number;
        },
        callback: (err: Error | null, key: KeyObject) => void
    ): void;
    function generateKeySync(
        type: 'hmac' | 'aes',
        options: {
            length: number;
        }
    ): KeyObject;
    interface JsonWebKeyInput {
        key: JsonWebKey;
        format: 'jwk';
    }
    function createPrivateKey(key: PrivateKeyInput | string | Buffer | JsonWebKeyInput): KeyObject;
    function createPublicKey(key: PublicKeyInput | string | Buffer | KeyObject | JsonWebKeyInput): KeyObject;
    function createSecretKey(key: NodeJS.ArrayBufferView): KeyObject;
    function createSecretKey(key: string, encoding: BufferEncoding): KeyObject;
    function createSign(algorithm: string, options?: stream.WritableOptions): Sign;
    type DSAEncoding = 'der' | 'ieee-p1363';
    interface SigningOptions {
        padding?: number | undefined;
        saltLength?: number | undefined;
        dsaEncoding?: DSAEncoding | undefined;
    }
    interface SignPrivateKeyInput extends PrivateKeyInput, SigningOptions {}
    interface SignKeyObjectInput extends SigningOptions {
        key: KeyObject;
    }
    interface VerifyPublicKeyInput extends PublicKeyInput, SigningOptions {}
    interface VerifyKeyObjectInput extends SigningOptions {
        key: KeyObject;
    }
    type KeyLike = string | Buffer | KeyObject;
    class Sign extends stream.Writable {
        private constructor();
        update(data: BinaryLike): this;
        update(data: string, inputEncoding: Encoding): this;
        sign(privateKey: KeyLike | SignKeyObjectInput | SignPrivateKeyInput): Buffer;
        sign(privateKey: KeyLike | SignKeyObjectInput | SignPrivateKeyInput, outputFormat: BinaryToTextEncoding): string;
    }
    function createVerify(algorithm: string, options?: stream.WritableOptions): Verify;
    class Verify extends stream.Writable {
        private constructor();
        update(data: BinaryLike): Verify;
        update(data: string, inputEncoding: Encoding): Verify;
        verify(object: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput, signature: NodeJS.ArrayBufferView): boolean;
        verify(object: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput, signature: string, signature_format?: BinaryToTextEncoding): boolean;
    }
    function createDiffieHellman(primeLength: number, generator?: number | NodeJS.ArrayBufferView): DiffieHellman;
    function createDiffieHellman(prime: NodeJS.ArrayBufferView): DiffieHellman;
    function createDiffieHellman(prime: string, primeEncoding: BinaryToTextEncoding): DiffieHellman;
    function createDiffieHellman(prime: string, primeEncoding: BinaryToTextEncoding, generator: number | NodeJS.ArrayBufferView): DiffieHellman;
    function createDiffieHellman(prime: string, primeEncoding: BinaryToTextEncoding, generator: string, generatorEncoding: BinaryToTextEncoding): DiffieHellman;
    class DiffieHellman {
        private constructor();
        generateKeys(): Buffer;
        generateKeys(encoding: BinaryToTextEncoding): string;
        computeSecret(otherPublicKey: NodeJS.ArrayBufferView): Buffer;
        computeSecret(otherPublicKey: string, inputEncoding: BinaryToTextEncoding): Buffer;
        computeSecret(otherPublicKey: NodeJS.ArrayBufferView, outputEncoding: BinaryToTextEncoding): string;
        computeSecret(otherPublicKey: string, inputEncoding: BinaryToTextEncoding, outputEncoding: BinaryToTextEncoding): string;
        getPrime(): Buffer;
        getPrime(encoding: BinaryToTextEncoding): string;
        getGenerator(): Buffer;
        getGenerator(encoding: BinaryToTextEncoding): string;
        getPublicKey(): Buffer;
        getPublicKey(encoding: BinaryToTextEncoding): string;
        getPrivateKey(): Buffer;
        getPrivateKey(encoding: BinaryToTextEncoding): string;
        setPublicKey(publicKey: NodeJS.ArrayBufferView): void;
        setPublicKey(publicKey: string, encoding: BufferEncoding): void;
        setPrivateKey(privateKey: NodeJS.ArrayBufferView): void;
        setPrivateKey(privateKey: string, encoding: BufferEncoding): void;
        verifyError: number;
    }
    function getDiffieHellman(groupName: string): DiffieHellman;
    function pbkdf2(password: BinaryLike, salt: BinaryLike, iterations: number, keylen: number, digest: string, callback: (err: Error | null, derivedKey: Buffer) => void): void;
    function pbkdf2Sync(password: BinaryLike, salt: BinaryLike, iterations: number, keylen: number, digest: string): Buffer;
    function randomBytes(size: number): Buffer;
    function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
    function pseudoRandomBytes(size: number): Buffer;
    function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
    function randomInt(max: number): number;
    function randomInt(min: number, max: number): number;
    function randomInt(max: number, callback: (err: Error | null, value: number) => void): void;
    function randomInt(min: number, max: number, callback: (err: Error | null, value: number) => void): void;
    function randomFillSync<T extends NodeJS.ArrayBufferView>(buffer: T, offset?: number, size?: number): T;
    function randomFill<T extends NodeJS.ArrayBufferView>(buffer: T, callback: (err: Error | null, buf: T) => void): void;
    function randomFill<T extends NodeJS.ArrayBufferView>(buffer: T, offset: number, callback: (err: Error | null, buf: T) => void): void;
    function randomFill<T extends NodeJS.ArrayBufferView>(buffer: T, offset: number, size: number, callback: (err: Error | null, buf: T) => void): void;
    interface ScryptOptions {
        cost?: number | undefined;
        blockSize?: number | undefined;
        parallelization?: number | undefined;
        N?: number | undefined;
        r?: number | undefined;
        p?: number | undefined;
        maxmem?: number | undefined;
    }
    function scrypt(password: BinaryLike, salt: BinaryLike, keylen: number, callback: (err: Error | null, derivedKey: Buffer) => void): void;
    function scrypt(password: BinaryLike, salt: BinaryLike, keylen: number, options: ScryptOptions, callback: (err: Error | null, derivedKey: Buffer) => void): void;
    function scryptSync(password: BinaryLike, salt: BinaryLike, keylen: number, options?: ScryptOptions): Buffer;
    interface RsaPublicKey {
        key: KeyLike;
        padding?: number | undefined;
    }
    interface RsaPrivateKey {
        key: KeyLike;
        passphrase?: string | undefined;
        oaepHash?: string | undefined;
        oaepLabel?: NodeJS.TypedArray | undefined;
        padding?: number | undefined;
    }
    function publicEncrypt(key: RsaPublicKey | RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function publicDecrypt(key: RsaPublicKey | RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function privateDecrypt(privateKey: RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function privateEncrypt(privateKey: RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function getCiphers(): string[];
    function getCurves(): string[];
    function getFips(): 1 | 0;
    function getHashes(): string[];
    class ECDH {
        private constructor();
        static convertKey(
            key: BinaryLike,
            curve: string,
            inputEncoding?: BinaryToTextEncoding,
            outputEncoding?: 'latin1' | 'hex' | 'base64' | 'base64url',
            format?: 'uncompressed' | 'compressed' | 'hybrid'
        ): Buffer | string;
        generateKeys(): Buffer;
        generateKeys(encoding: BinaryToTextEncoding, format?: ECDHKeyFormat): string;
        computeSecret(otherPublicKey: NodeJS.ArrayBufferView): Buffer;
        computeSecret(otherPublicKey: string, inputEncoding: BinaryToTextEncoding): Buffer;
        computeSecret(otherPublicKey: NodeJS.ArrayBufferView, outputEncoding: BinaryToTextEncoding): string;
        computeSecret(otherPublicKey: string, inputEncoding: BinaryToTextEncoding, outputEncoding: BinaryToTextEncoding): string;
        getPrivateKey(): Buffer;
        getPrivateKey(encoding: BinaryToTextEncoding): string;
        getPublicKey(): Buffer;
        getPublicKey(encoding: BinaryToTextEncoding, format?: ECDHKeyFormat): string;
        setPrivateKey(privateKey: NodeJS.ArrayBufferView): void;
        setPrivateKey(privateKey: string, encoding: BinaryToTextEncoding): void;
    }
    function createECDH(curveName: string): ECDH;
    function timingSafeEqual(a: NodeJS.ArrayBufferView, b: NodeJS.ArrayBufferView): boolean;
    const DEFAULT_ENCODING: BufferEncoding;
    type KeyType = 'rsa' | 'rsa-pss' | 'dsa' | 'ec' | 'ed25519' | 'ed448' | 'x25519' | 'x448';
    type KeyFormat = 'pem' | 'der';
    interface BasePrivateKeyEncodingOptions<T extends KeyFormat> {
        format: T;
        cipher?: string | undefined;
        passphrase?: string | undefined;
    }
    interface KeyPairKeyObjectResult {
        publicKey: KeyObject;
        privateKey: KeyObject;
    }
    interface ED25519KeyPairKeyObjectOptions {}
    interface ED448KeyPairKeyObjectOptions {}
    interface X25519KeyPairKeyObjectOptions {}
    interface X448KeyPairKeyObjectOptions {}
    interface ECKeyPairKeyObjectOptions {
        namedCurve: string;
    }
    interface RSAKeyPairKeyObjectOptions {
        modulusLength: number;
        publicExponent?: number | undefined;
    }
    interface RSAPSSKeyPairKeyObjectOptions {
        modulusLength: number;
        publicExponent?: number | undefined;
        hashAlgorithm?: string;
        mgf1HashAlgorithm?: string;
        saltLength?: string;
    }
    interface DSAKeyPairKeyObjectOptions {
        modulusLength: number;
        divisorLength: number;
    }
    interface RSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        modulusLength: number;
        publicExponent?: number | undefined;
        publicKeyEncoding: {
            type: 'pkcs1' | 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs1' | 'pkcs8';
        };
    }
    interface RSAPSSKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        modulusLength: number;
        publicExponent?: number | undefined;
        hashAlgorithm?: string;
        mgf1HashAlgorithm?: string;
        saltLength?: string;
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }
    interface DSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        modulusLength: number;
        divisorLength: number;
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }
    interface ECKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        namedCurve: string;
        publicKeyEncoding: {
            type: 'pkcs1' | 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'sec1' | 'pkcs8';
        };
    }
    interface ED25519KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }
    interface ED448KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }
    interface X25519KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }
    interface X448KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }
    interface KeyPairSyncResult<T1 extends string | Buffer, T2 extends string | Buffer> {
        publicKey: T1;
        privateKey: T2;
    }
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPairSync(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'rsa-pss', options: RSAPSSKeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPairSync(type: 'ed25519', options: ED25519KeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'ed25519', options: ED25519KeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'ed25519', options: ED25519KeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'ed25519', options: ED25519KeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'ed25519', options?: ED25519KeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPairSync(type: 'ed448', options: ED448KeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'ed448', options: ED448KeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'ed448', options: ED448KeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'ed448', options: ED448KeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'ed448', options?: ED448KeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPairSync(type: 'x25519', options: X25519KeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'x25519', options: X25519KeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'x25519', options: X25519KeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'x25519', options: X25519KeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'x25519', options?: X25519KeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPairSync(type: 'x448', options: X448KeyPairOptions<'pem', 'pem'>): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(type: 'x448', options: X448KeyPairOptions<'pem', 'der'>): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(type: 'x448', options: X448KeyPairOptions<'der', 'pem'>): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(type: 'x448', options: X448KeyPairOptions<'der', 'der'>): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'x448', options?: X448KeyPairKeyObjectOptions): KeyPairKeyObjectResult;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'rsa', options: RSAKeyPairKeyObjectOptions, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    function generateKeyPair(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'rsa-pss', options: RSAPSSKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'rsa-pss', options: RSAPSSKeyPairKeyObjectOptions, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'dsa', options: DSAKeyPairKeyObjectOptions, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'ec', options: ECKeyPairKeyObjectOptions, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    function generateKeyPair(type: 'ed25519', options: ED25519KeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'ed25519', options: ED25519KeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'ed25519', options: ED25519KeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'ed25519', options: ED25519KeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'ed25519', options: ED25519KeyPairKeyObjectOptions | undefined, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    function generateKeyPair(type: 'ed448', options: ED448KeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'ed448', options: ED448KeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'ed448', options: ED448KeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'ed448', options: ED448KeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'ed448', options: ED448KeyPairKeyObjectOptions | undefined, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    function generateKeyPair(type: 'x25519', options: X25519KeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'x25519', options: X25519KeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'x25519', options: X25519KeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'x25519', options: X25519KeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'x25519', options: X25519KeyPairKeyObjectOptions | undefined, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    function generateKeyPair(type: 'x448', options: X448KeyPairOptions<'pem', 'pem'>, callback: (err: Error | null, publicKey: string, privateKey: string) => void): void;
    function generateKeyPair(type: 'x448', options: X448KeyPairOptions<'pem', 'der'>, callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'x448', options: X448KeyPairOptions<'der', 'pem'>, callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void): void;
    function generateKeyPair(type: 'x448', options: X448KeyPairOptions<'der', 'der'>, callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void): void;
    function generateKeyPair(type: 'x448', options: X448KeyPairKeyObjectOptions | undefined, callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void): void;
    namespace generateKeyPair {
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'rsa', options: RSAKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
        function __promisify__(
            type: 'rsa-pss',
            options: RSAPSSKeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'rsa-pss',
            options: RSAPSSKeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'rsa-pss',
            options: RSAPSSKeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'rsa-pss',
            options: RSAPSSKeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'rsa-pss', options: RSAPSSKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'dsa', options: DSAKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'ec', options: ECKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'ed25519', options?: ED25519KeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'ed448', options?: ED448KeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'x25519', options?: X25519KeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'pem', 'pem'>
        ): Promise<{
            publicKey: string;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'pem', 'der'>
        ): Promise<{
            publicKey: string;
            privateKey: Buffer;
        }>;
        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'der', 'pem'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: string;
        }>;
        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'der', 'der'>
        ): Promise<{
            publicKey: Buffer;
            privateKey: Buffer;
        }>;
        function __promisify__(type: 'x448', options?: X448KeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
    }
    function sign(algorithm: string | null | undefined, data: NodeJS.ArrayBufferView, key: KeyLike | SignKeyObjectInput | SignPrivateKeyInput): Buffer;
    function sign(
        algorithm: string | null | undefined,
        data: NodeJS.ArrayBufferView,
        key: KeyLike | SignKeyObjectInput | SignPrivateKeyInput,
        callback: (error: Error | null, data: Buffer) => void
    ): void;
    function verify(algorithm: string | null | undefined, data: NodeJS.ArrayBufferView, key: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput, signature: NodeJS.ArrayBufferView): boolean;
    function verify(
        algorithm: string | null | undefined,
        data: NodeJS.ArrayBufferView,
        key: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
        signature: NodeJS.ArrayBufferView,
        callback: (error: Error | null, result: boolean) => void
    ): void;
    function diffieHellman(options: { privateKey: KeyObject; publicKey: KeyObject }): Buffer;
    type CipherMode = 'cbc' | 'ccm' | 'cfb' | 'ctr' | 'ecb' | 'gcm' | 'ocb' | 'ofb' | 'stream' | 'wrap' | 'xts';
    interface CipherInfoOptions {
        keyLength?: number | undefined;
        ivLength?: number | undefined;
    }
    interface CipherInfo {
        name: string;
        nid: number;
        blockSize?: number | undefined;
        ivLength?: number | undefined;
        keyLength: number;
        mode: CipherMode;
    }
    function getCipherInfo(nameOrNid: string | number, options?: CipherInfoOptions): CipherInfo | undefined;
    function hkdf(digest: string, irm: BinaryLike | KeyObject, salt: BinaryLike, info: BinaryLike, keylen: number, callback: (err: Error | null, derivedKey: ArrayBuffer) => void): void;
    function hkdfSync(digest: string, ikm: BinaryLike | KeyObject, salt: BinaryLike, info: BinaryLike, keylen: number): ArrayBuffer;
    interface SecureHeapUsage {
        total: number;
        min: number;
        used: number;
        utilization: number;
    }
    function secureHeapUsed(): SecureHeapUsage;
    interface RandomUUIDOptions {
        disableEntropyCache?: boolean | undefined;
    }
    function randomUUID(options?: RandomUUIDOptions): string;
    interface X509CheckOptions {
        subject: 'always' | 'never';
        wildcards: boolean;
        partialWildcards: boolean;
        multiLabelWildcards: boolean;
        singleLabelSubdomains: boolean;
    }
    class X509Certificate {
        readonly ca: boolean;
        readonly fingerprint: string;
        readonly fingerprint256: string;
        readonly subject: string;
        readonly subjectAltName: string;
        readonly infoAccess: string;
        readonly keyUsage: string[];
        readonly issuer: string;
        readonly issuerCertificate?: X509Certificate | undefined;
        readonly publicKey: KeyObject;
        readonly raw: Buffer;
        readonly serialNumber: string;
        readonly validFrom: string;
        readonly validTo: string;
        constructor(buffer: BinaryLike);
        checkEmail(email: string, options?: X509CheckOptions): string | undefined;
        checkHost(name: string, options?: X509CheckOptions): string | undefined;
        checkIP(ip: string, options?: X509CheckOptions): string | undefined;
        checkIssued(otherCert: X509Certificate): boolean;
        checkPrivateKey(privateKey: KeyObject): boolean;
        toJSON(): string;
        toLegacyObject(): PeerCertificate;
        toString(): string;
        verify(publicKey: KeyObject): boolean;
    }
    type LargeNumberLike = NodeJS.ArrayBufferView | SharedArrayBuffer | ArrayBuffer | bigint;
    interface GeneratePrimeOptions {
        add?: LargeNumberLike | undefined;
        rem?: LargeNumberLike | undefined;
        safe?: boolean | undefined;
        bigint?: boolean | undefined;
    }
    interface GeneratePrimeOptionsBigInt extends GeneratePrimeOptions {
        bigint: true;
    }
    interface GeneratePrimeOptionsArrayBuffer extends GeneratePrimeOptions {
        bigint?: false | undefined;
    }
    function generatePrime(size: number, callback: (err: Error | null, prime: ArrayBuffer) => void): void;
    function generatePrime(size: number, options: GeneratePrimeOptionsBigInt, callback: (err: Error | null, prime: bigint) => void): void;
    function generatePrime(size: number, options: GeneratePrimeOptionsArrayBuffer, callback: (err: Error | null, prime: ArrayBuffer) => void): void;
    function generatePrime(size: number, options: GeneratePrimeOptions, callback: (err: Error | null, prime: ArrayBuffer | bigint) => void): void;
    function generatePrimeSync(size: number): ArrayBuffer;
    function generatePrimeSync(size: number, options: GeneratePrimeOptionsBigInt): bigint;
    function generatePrimeSync(size: number, options: GeneratePrimeOptionsArrayBuffer): ArrayBuffer;
    function generatePrimeSync(size: number, options: GeneratePrimeOptions): ArrayBuffer | bigint;
    interface CheckPrimeOptions {
        checks?: number | undefined;
    }
    function checkPrime(value: LargeNumberLike, callback: (err: Error | null, result: boolean) => void): void;
    function checkPrime(value: LargeNumberLike, options: CheckPrimeOptions, callback: (err: Error | null, result: boolean) => void): void;
    function checkPrimeSync(candidate: LargeNumberLike, options?: CheckPrimeOptions): boolean;
    namespace webcrypto {
        class CryptoKey {}
    }
}
declare module 'node:crypto' {
    export * from 'crypto';
}
declare module 'dgram' {
    import { AddressInfo } from 'node:net';
    import * as dns from 'node:dns';
    import { EventEmitter, Abortable } from 'node:events';
    interface RemoteInfo {
        address: string;
        family: 'IPv4' | 'IPv6';
        port: number;
        size: number;
    }
    interface BindOptions {
        port?: number | undefined;
        address?: string | undefined;
        exclusive?: boolean | undefined;
        fd?: number | undefined;
    }
    type SocketType = 'udp4' | 'udp6';
    interface SocketOptions extends Abortable {
        type: SocketType;
        reuseAddr?: boolean | undefined;
        ipv6Only?: boolean | undefined;
        recvBufferSize?: number | undefined;
        sendBufferSize?: number | undefined;
        lookup?: ((hostname: string, options: dns.LookupOneOptions, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void) => void) | undefined;
    }
    function createSocket(type: SocketType, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;
    function createSocket(options: SocketOptions, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;
    class Socket extends EventEmitter {
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        address(): AddressInfo;
        bind(port?: number, address?: string, callback?: () => void): this;
        bind(port?: number, callback?: () => void): this;
        bind(callback?: () => void): this;
        bind(options: BindOptions, callback?: () => void): this;
        close(callback?: () => void): this;
        connect(port: number, address?: string, callback?: () => void): void;
        connect(port: number, callback: () => void): void;
        disconnect(): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
        getRecvBufferSize(): number;
        getSendBufferSize(): number;
        ref(): this;
        remoteAddress(): AddressInfo;
        send(msg: string | Uint8Array | ReadonlyArray<any>, port?: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array | ReadonlyArray<any>, port?: number, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array | ReadonlyArray<any>, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array, offset: number, length: number, port?: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array, offset: number, length: number, port?: number, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array, offset: number, length: number, callback?: (error: Error | null, bytes: number) => void): void;
        setBroadcast(flag: boolean): void;
        setMulticastInterface(multicastInterface: string): void;
        setMulticastLoopback(flag: boolean): boolean;
        setMulticastTTL(ttl: number): number;
        setRecvBufferSize(size: number): void;
        setSendBufferSize(size: number): void;
        setTTL(ttl: number): number;
        unref(): this;
        addSourceSpecificMembership(sourceAddress: string, groupAddress: string, multicastInterface?: string): void;
        dropSourceSpecificMembership(sourceAddress: string, groupAddress: string, multicastInterface?: string): void;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'connect', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'listening', listener: () => void): this;
        addListener(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'connect'): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'listening'): boolean;
        emit(event: 'message', msg: Buffer, rinfo: RemoteInfo): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'connect', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'listening', listener: () => void): this;
        on(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'connect', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'listening', listener: () => void): this;
        once(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'connect', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'listening', listener: () => void): this;
        prependListener(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'connect', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'listening', listener: () => void): this;
        prependOnceListener(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this;
    }
}
declare module 'node:dgram' {
    export * from 'dgram';
}
declare module 'diagnostics_channel' {
    function hasSubscribers(name: string): boolean;
    function channel(name: string): Channel;
    type ChannelListener = (name: string, message: unknown) => void;
    class Channel {
        readonly name: string;
        readonly hasSubscribers: boolean;
        private constructor(name: string);
        subscribe(onMessage: ChannelListener): void;
        unsubscribe(onMessage: ChannelListener): void;
    }
}
declare module 'node:diagnostics_channel' {
    export * from 'diagnostics_channel';
}
declare module 'dns' {
    import * as dnsPromises from 'node:dns/promises';
    export const ADDRCONFIG: number;
    export const V4MAPPED: number;
    export const ALL: number;
    export interface LookupOptions {
        family?: number | undefined;
        hints?: number | undefined;
        all?: boolean | undefined;
        verbatim?: boolean | undefined;
    }
    export interface LookupOneOptions extends LookupOptions {
        all?: false | undefined;
    }
    export interface LookupAllOptions extends LookupOptions {
        all: true;
    }
    export interface LookupAddress {
        address: string;
        family: number;
    }
    export function lookup(hostname: string, family: number, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void): void;
    export function lookup(hostname: string, options: LookupOneOptions, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void): void;
    export function lookup(hostname: string, options: LookupAllOptions, callback: (err: NodeJS.ErrnoException | null, addresses: LookupAddress[]) => void): void;
    export function lookup(hostname: string, options: LookupOptions, callback: (err: NodeJS.ErrnoException | null, address: string | LookupAddress[], family: number) => void): void;
    export function lookup(hostname: string, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void): void;
    export namespace lookup {
        function __promisify__(hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>;
        function __promisify__(hostname: string, options?: LookupOneOptions | number): Promise<LookupAddress>;
        function __promisify__(hostname: string, options: LookupOptions): Promise<LookupAddress | LookupAddress[]>;
    }
    export function lookupService(address: string, port: number, callback: (err: NodeJS.ErrnoException | null, hostname: string, service: string) => void): void;
    export namespace lookupService {
        function __promisify__(
            address: string,
            port: number
        ): Promise<{
            hostname: string;
            service: string;
        }>;
    }
    export interface ResolveOptions {
        ttl: boolean;
    }
    export interface ResolveWithTtlOptions extends ResolveOptions {
        ttl: true;
    }
    export interface RecordWithTtl {
        address: string;
        ttl: number;
    }
    export type AnyRecordWithTtl = AnyARecord | AnyAaaaRecord;
    export interface AnyARecord extends RecordWithTtl {
        type: 'A';
    }
    export interface AnyAaaaRecord extends RecordWithTtl {
        type: 'AAAA';
    }
    export interface CaaRecord {
        critial: number;
        issue?: string | undefined;
        issuewild?: string | undefined;
        iodef?: string | undefined;
        contactemail?: string | undefined;
        contactphone?: string | undefined;
    }
    export interface MxRecord {
        priority: number;
        exchange: string;
    }
    export interface AnyMxRecord extends MxRecord {
        type: 'MX';
    }
    export interface NaptrRecord {
        flags: string;
        service: string;
        regexp: string;
        replacement: string;
        order: number;
        preference: number;
    }
    export interface AnyNaptrRecord extends NaptrRecord {
        type: 'NAPTR';
    }
    export interface SoaRecord {
        nsname: string;
        hostmaster: string;
        serial: number;
        refresh: number;
        retry: number;
        expire: number;
        minttl: number;
    }
    export interface AnySoaRecord extends SoaRecord {
        type: 'SOA';
    }
    export interface SrvRecord {
        priority: number;
        weight: number;
        port: number;
        name: string;
    }
    export interface AnySrvRecord extends SrvRecord {
        type: 'SRV';
    }
    export interface AnyTxtRecord {
        type: 'TXT';
        entries: string[];
    }
    export interface AnyNsRecord {
        type: 'NS';
        value: string;
    }
    export interface AnyPtrRecord {
        type: 'PTR';
        value: string;
    }
    export interface AnyCnameRecord {
        type: 'CNAME';
        value: string;
    }
    export type AnyRecord = AnyARecord | AnyAaaaRecord | AnyCnameRecord | AnyMxRecord | AnyNaptrRecord | AnyNsRecord | AnyPtrRecord | AnySoaRecord | AnySrvRecord | AnyTxtRecord;
    export function resolve(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: 'A', callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: 'AAAA', callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: 'ANY', callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void): void;
    export function resolve(hostname: string, rrtype: 'CNAME', callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: 'MX', callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void): void;
    export function resolve(hostname: string, rrtype: 'NAPTR', callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void): void;
    export function resolve(hostname: string, rrtype: 'NS', callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: 'PTR', callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: 'SOA', callback: (err: NodeJS.ErrnoException | null, addresses: SoaRecord) => void): void;
    export function resolve(hostname: string, rrtype: 'SRV', callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void): void;
    export function resolve(hostname: string, rrtype: 'TXT', callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void): void;
    export function resolve(
        hostname: string,
        rrtype: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]) => void
    ): void;
    export namespace resolve {
        function __promisify__(hostname: string, rrtype?: 'A' | 'AAAA' | 'CNAME' | 'NS' | 'PTR'): Promise<string[]>;
        function __promisify__(hostname: string, rrtype: 'ANY'): Promise<AnyRecord[]>;
        function __promisify__(hostname: string, rrtype: 'MX'): Promise<MxRecord[]>;
        function __promisify__(hostname: string, rrtype: 'NAPTR'): Promise<NaptrRecord[]>;
        function __promisify__(hostname: string, rrtype: 'SOA'): Promise<SoaRecord>;
        function __promisify__(hostname: string, rrtype: 'SRV'): Promise<SrvRecord[]>;
        function __promisify__(hostname: string, rrtype: 'TXT'): Promise<string[][]>;
        function __promisify__(hostname: string, rrtype: string): Promise<string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]>;
    }
    export function resolve4(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve4(hostname: string, options: ResolveWithTtlOptions, callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void): void;
    export function resolve4(hostname: string, options: ResolveOptions, callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void): void;
    export namespace resolve4 {
        function __promisify__(hostname: string): Promise<string[]>;
        function __promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
        function __promisify__(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
    }
    export function resolve6(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export function resolve6(hostname: string, options: ResolveWithTtlOptions, callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void): void;
    export function resolve6(hostname: string, options: ResolveOptions, callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void): void;
    export namespace resolve6 {
        function __promisify__(hostname: string): Promise<string[]>;
        function __promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
        function __promisify__(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
    }
    export function resolveCname(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export namespace resolveCname {
        function __promisify__(hostname: string): Promise<string[]>;
    }
    export function resolveCaa(hostname: string, callback: (err: NodeJS.ErrnoException | null, records: CaaRecord[]) => void): void;
    export namespace resolveCaa {
        function __promisify__(hostname: string): Promise<CaaRecord[]>;
    }
    export function resolveMx(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void): void;
    export namespace resolveMx {
        function __promisify__(hostname: string): Promise<MxRecord[]>;
    }
    export function resolveNaptr(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void): void;
    export namespace resolveNaptr {
        function __promisify__(hostname: string): Promise<NaptrRecord[]>;
    }
    export function resolveNs(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export namespace resolveNs {
        function __promisify__(hostname: string): Promise<string[]>;
    }
    export function resolvePtr(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void): void;
    export namespace resolvePtr {
        function __promisify__(hostname: string): Promise<string[]>;
    }
    export function resolveSoa(hostname: string, callback: (err: NodeJS.ErrnoException | null, address: SoaRecord) => void): void;
    export namespace resolveSoa {
        function __promisify__(hostname: string): Promise<SoaRecord>;
    }
    export function resolveSrv(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void): void;
    export namespace resolveSrv {
        function __promisify__(hostname: string): Promise<SrvRecord[]>;
    }
    export function resolveTxt(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void): void;
    export namespace resolveTxt {
        function __promisify__(hostname: string): Promise<string[][]>;
    }
    export function resolveAny(hostname: string, callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void): void;
    export namespace resolveAny {
        function __promisify__(hostname: string): Promise<AnyRecord[]>;
    }
    export function reverse(ip: string, callback: (err: NodeJS.ErrnoException | null, hostnames: string[]) => void): void;
    export function setServers(servers: ReadonlyArray<string>): void;
    export function getServers(): string[];
    export function setDefaultResultOrder(order: 'ipv4first' | 'verbatim'): void;
    export const NODATA: string;
    export const FORMERR: string;
    export const SERVFAIL: string;
    export const NOTFOUND: string;
    export const NOTIMP: string;
    export const REFUSED: string;
    export const BADQUERY: string;
    export const BADNAME: string;
    export const BADFAMILY: string;
    export const BADRESP: string;
    export const CONNREFUSED: string;
    export const TIMEOUT: string;
    export const EOF: string;
    export const FILE: string;
    export const NOMEM: string;
    export const DESTRUCTION: string;
    export const BADSTR: string;
    export const BADFLAGS: string;
    export const NONAME: string;
    export const BADHINTS: string;
    export const NOTINITIALIZED: string;
    export const LOADIPHLPAPI: string;
    export const ADDRGETNETWORKPARAMS: string;
    export const CANCELLED: string;
    export interface ResolverOptions {
        timeout?: number | undefined;
        tries?: number;
    }
    export class Resolver {
        constructor(options?: ResolverOptions);
        cancel(): void;
        getServers: typeof getServers;
        resolve: typeof resolve;
        resolve4: typeof resolve4;
        resolve6: typeof resolve6;
        resolveAny: typeof resolveAny;
        resolveCname: typeof resolveCname;
        resolveMx: typeof resolveMx;
        resolveNaptr: typeof resolveNaptr;
        resolveNs: typeof resolveNs;
        resolvePtr: typeof resolvePtr;
        resolveSoa: typeof resolveSoa;
        resolveSrv: typeof resolveSrv;
        resolveTxt: typeof resolveTxt;
        reverse: typeof reverse;
        setLocalAddress(ipv4?: string, ipv6?: string): void;
        setServers: typeof setServers;
    }
    export { dnsPromises as promises };
}
declare module 'node:dns' {
    export * from 'dns';
}
declare module 'domain' {
    import EventEmitter = require('node:events');
    class Domain extends EventEmitter {
        members: Array<EventEmitter | NodeJS.Timer>;
        enter(): void;
        exit(): void;
        run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
        add(emitter: EventEmitter | NodeJS.Timer): void;
        remove(emitter: EventEmitter | NodeJS.Timer): void;
        bind<T extends Function>(callback: T): T;
        intercept<T extends Function>(callback: T): T;
    }
    function create(): Domain;
}
declare module 'node:domain' {
    export * from 'domain';
}
declare module 'events' {
    interface EventEmitterOptions {
        captureRejections?: boolean | undefined;
    }
    interface NodeEventTarget {
        once(eventName: string | symbol, listener: (...args: any[]) => void): this;
    }
    interface DOMEventTarget {
        addEventListener(
            eventName: string,
            listener: (...args: any[]) => void,
            opts?: {
                once: boolean;
            },
        ): any;
    }
    interface StaticEventEmitterOptions {
        signal?: AbortSignal | undefined;
    }
    interface EventEmitter extends NodeJS.EventEmitter {}
    class EventEmitter {
        constructor(options?: EventEmitterOptions);
        static once(
            emitter: NodeEventTarget,
            eventName: string | symbol,
            options?: StaticEventEmitterOptions,
        ): Promise<any[]>;
        static once(emitter: DOMEventTarget, eventName: string, options?: StaticEventEmitterOptions): Promise<any[]>;
        static on(
            emitter: NodeJS.EventEmitter,
            eventName: string,
            options?: StaticEventEmitterOptions,
        ): AsyncIterableIterator<any>;
        static listenerCount(emitter: NodeJS.EventEmitter, eventName: string | symbol): number;
        static getEventListeners(emitter: DOMEventTarget | NodeJS.EventEmitter, name: string | symbol): Function[];
        static setMaxListeners(n?: number, ...eventTargets: Array<DOMEventTarget | NodeJS.EventEmitter>): void;
        static readonly errorMonitor: unique symbol;
        static readonly captureRejectionSymbol: unique symbol;
        static captureRejections: boolean;
        static defaultMaxListeners: number;
    }
    import internal = require('node:events');
    namespace EventEmitter {
        export { internal as EventEmitter };
        export interface Abortable {
            signal?: AbortSignal | undefined;
        }
    }
    global {
        namespace NodeJS {
            interface EventEmitter {
                addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
                on(eventName: string | symbol, listener: (...args: any[]) => void): this;
                once(eventName: string | symbol, listener: (...args: any[]) => void): this;
                removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
                off(eventName: string | symbol, listener: (...args: any[]) => void): this;
                removeAllListeners(event?: string | symbol): this;
                setMaxListeners(n: number): this;
                getMaxListeners(): number;
                listeners(eventName: string | symbol): Function[];
                rawListeners(eventName: string | symbol): Function[];
                emit(eventName: string | symbol, ...args: any[]): boolean;
                listenerCount(eventName: string | symbol): number;
                prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
                prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
                eventNames(): Array<string | symbol>;
            }
        }
    }
    export = EventEmitter;
}
declare module 'node:events' {
    import events = require('events');
    export = events;
}
declare module 'fs' {
    import * as stream from 'node:stream';
    import { Abortable, EventEmitter } from 'node:events';
    import { URL } from 'node:url';
    import * as promises from 'node:fs/promises';
    export { promises };
    export type PathLike = string | Buffer | URL;
    export type PathOrFileDescriptor = PathLike | number;
    export type TimeLike = string | number | Date;
    export type NoParamCallback = (err: NodeJS.ErrnoException | null) => void;
    export type BufferEncodingOption =
        | 'buffer'
        | {
              encoding: 'buffer';
          };
    export interface ObjectEncodingOptions {
        encoding?: BufferEncoding | null | undefined;
    }
    export type EncodingOption = ObjectEncodingOptions | BufferEncoding | undefined | null;
    export type OpenMode = number | string;
    export type Mode = number | string;
    export interface StatsBase<T> {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: T;
        ino: T;
        mode: T;
        nlink: T;
        uid: T;
        gid: T;
        rdev: T;
        size: T;
        blksize: T;
        blocks: T;
        atimeMs: T;
        mtimeMs: T;
        ctimeMs: T;
        birthtimeMs: T;
        atime: Date;
        mtime: Date;
        ctime: Date;
        birthtime: Date;
    }
    export interface Stats extends StatsBase<number> {}
    export class Stats {}
    export class Dirent {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        name: string;
    }
    export class Dir implements AsyncIterable<Dirent> {
        readonly path: string;
        [Symbol.asyncIterator](): AsyncIterableIterator<Dirent>;
        close(): Promise<void>;
        close(cb: NoParamCallback): void;
        closeSync(): void;
        read(): Promise<Dirent | null>;
        read(cb: (err: NodeJS.ErrnoException | null, dirEnt: Dirent | null) => void): void;
        readSync(): Dirent | null;
    }
    export interface StatWatcher extends EventEmitter {
        ref(): this;
        unref(): this;
    }
    export interface FSWatcher extends EventEmitter {
        close(): void;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'change', listener: (eventType: string, filename: string | Buffer) => void): this;
        addListener(event: 'error', listener: (error: Error) => void): this;
        addListener(event: 'close', listener: () => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'change', listener: (eventType: string, filename: string | Buffer) => void): this;
        on(event: 'error', listener: (error: Error) => void): this;
        on(event: 'close', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'change', listener: (eventType: string, filename: string | Buffer) => void): this;
        once(event: 'error', listener: (error: Error) => void): this;
        once(event: 'close', listener: () => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'change', listener: (eventType: string, filename: string | Buffer) => void): this;
        prependListener(event: 'error', listener: (error: Error) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'change', listener: (eventType: string, filename: string | Buffer) => void): this;
        prependOnceListener(event: 'error', listener: (error: Error) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
    }
    export class ReadStream extends stream.Readable {
        close(callback?: (err?: NodeJS.ErrnoException | null) => void): void;
        bytesRead: number;
        path: string | Buffer;
        pending: boolean;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        addListener(event: 'end', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'open', listener: (fd: number) => void): this;
        addListener(event: 'pause', listener: () => void): this;
        addListener(event: 'readable', listener: () => void): this;
        addListener(event: 'ready', listener: () => void): this;
        addListener(event: 'resume', listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'data', listener: (chunk: Buffer | string) => void): this;
        on(event: 'end', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'open', listener: (fd: number) => void): this;
        on(event: 'pause', listener: () => void): this;
        on(event: 'readable', listener: () => void): this;
        on(event: 'ready', listener: () => void): this;
        on(event: 'resume', listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'data', listener: (chunk: Buffer | string) => void): this;
        once(event: 'end', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'open', listener: (fd: number) => void): this;
        once(event: 'pause', listener: () => void): this;
        once(event: 'readable', listener: () => void): this;
        once(event: 'ready', listener: () => void): this;
        once(event: 'resume', listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        prependListener(event: 'end', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'open', listener: (fd: number) => void): this;
        prependListener(event: 'pause', listener: () => void): this;
        prependListener(event: 'readable', listener: () => void): this;
        prependListener(event: 'ready', listener: () => void): this;
        prependListener(event: 'resume', listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        prependOnceListener(event: 'end', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'open', listener: (fd: number) => void): this;
        prependOnceListener(event: 'pause', listener: () => void): this;
        prependOnceListener(event: 'readable', listener: () => void): this;
        prependOnceListener(event: 'ready', listener: () => void): this;
        prependOnceListener(event: 'resume', listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export class WriteStream extends stream.Writable {
        close(callback?: (err?: NodeJS.ErrnoException | null) => void): void;
        bytesWritten: number;
        path: string | Buffer;
        pending: boolean;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'drain', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'finish', listener: () => void): this;
        addListener(event: 'open', listener: (fd: number) => void): this;
        addListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        addListener(event: 'ready', listener: () => void): this;
        addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'drain', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'finish', listener: () => void): this;
        on(event: 'open', listener: (fd: number) => void): this;
        on(event: 'pipe', listener: (src: stream.Readable) => void): this;
        on(event: 'ready', listener: () => void): this;
        on(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'drain', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'finish', listener: () => void): this;
        once(event: 'open', listener: (fd: number) => void): this;
        once(event: 'pipe', listener: (src: stream.Readable) => void): this;
        once(event: 'ready', listener: () => void): this;
        once(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'drain', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'finish', listener: () => void): this;
        prependListener(event: 'open', listener: (fd: number) => void): this;
        prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: 'ready', listener: () => void): this;
        prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'drain', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'finish', listener: () => void): this;
        prependOnceListener(event: 'open', listener: (fd: number) => void): this;
        prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: 'ready', listener: () => void): this;
        prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export function rename(oldPath: PathLike, newPath: PathLike, callback: NoParamCallback): void;
    export namespace rename {
        function __promisify__(oldPath: PathLike, newPath: PathLike): Promise<void>;
    }
    export function renameSync(oldPath: PathLike, newPath: PathLike): void;
    export function truncate(path: PathLike, len: number | undefined | null, callback: NoParamCallback): void;
    export function truncate(path: PathLike, callback: NoParamCallback): void;
    export namespace truncate {
        function __promisify__(path: PathLike, len?: number | null): Promise<void>;
    }
    export function truncateSync(path: PathLike, len?: number | null): void;
    export function ftruncate(fd: number, len: number | undefined | null, callback: NoParamCallback): void;
    export function ftruncate(fd: number, callback: NoParamCallback): void;
    export namespace ftruncate {
        function __promisify__(fd: number, len?: number | null): Promise<void>;
    }
    export function ftruncateSync(fd: number, len?: number | null): void;
    export function chown(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void;
    export namespace chown {
        function __promisify__(path: PathLike, uid: number, gid: number): Promise<void>;
    }
    export function chownSync(path: PathLike, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number, callback: NoParamCallback): void;
    export namespace fchown {
        function __promisify__(fd: number, uid: number, gid: number): Promise<void>;
    }
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void;
    export namespace lchown {
        function __promisify__(path: PathLike, uid: number, gid: number): Promise<void>;
    }
    export function lchownSync(path: PathLike, uid: number, gid: number): void;
    export function lutimes(path: PathLike, atime: TimeLike, mtime: TimeLike, callback: NoParamCallback): void;
    export namespace lutimes {
        function __promisify__(path: PathLike, atime: TimeLike, mtime: TimeLike): Promise<void>;
    }
    export function lutimesSync(path: PathLike, atime: TimeLike, mtime: TimeLike): void;
    export function chmod(path: PathLike, mode: Mode, callback: NoParamCallback): void;
    export namespace chmod {
        function __promisify__(path: PathLike, mode: Mode): Promise<void>;
    }
    export function chmodSync(path: PathLike, mode: Mode): void;
    export function fchmod(fd: number, mode: Mode, callback: NoParamCallback): void;
    export namespace fchmod {
        function __promisify__(fd: number, mode: Mode): Promise<void>;
    }
    export function fchmodSync(fd: number, mode: Mode): void;
    export function lchmod(path: PathLike, mode: Mode, callback: NoParamCallback): void;
    export namespace lchmod {
        function __promisify__(path: PathLike, mode: Mode): Promise<void>;
    }
    export function lchmodSync(path: PathLike, mode: Mode): void;
    export function stat(path: PathLike, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;
    export function stat(
        path: PathLike,
        options:
            | (StatOptions & {
                  bigint?: false | undefined;
              })
            | undefined,
        callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
    ): void;
    export function stat(
        path: PathLike,
        options: StatOptions & {
            bigint: true;
        },
        callback: (err: NodeJS.ErrnoException | null, stats: BigIntStats) => void
    ): void;
    export function stat(path: PathLike, options: StatOptions | undefined, callback: (err: NodeJS.ErrnoException | null, stats: Stats | BigIntStats) => void): void;
    export namespace stat {
        function __promisify__(
            path: PathLike,
            options?: StatOptions & {
                bigint?: false | undefined;
            }
        ): Promise<Stats>;
        function __promisify__(
            path: PathLike,
            options: StatOptions & {
                bigint: true;
            }
        ): Promise<BigIntStats>;
        function __promisify__(path: PathLike, options?: StatOptions): Promise<Stats | BigIntStats>;
    }
    export interface StatSyncFn extends Function {
        (path: PathLike, options?: undefined): Stats;
        (
            path: PathLike,
            options?: StatSyncOptions & {
                bigint?: false | undefined;
                throwIfNoEntry: false;
            }
        ): Stats | undefined;
        (
            path: PathLike,
            options: StatSyncOptions & {
                bigint: true;
                throwIfNoEntry: false;
            }
        ): BigIntStats | undefined;
        (
            path: PathLike,
            options?: StatSyncOptions & {
                bigint?: false | undefined;
            }
        ): Stats;
        (
            path: PathLike,
            options: StatSyncOptions & {
                bigint: true;
            }
        ): BigIntStats;
        (
            path: PathLike,
            options: StatSyncOptions & {
                bigint: boolean;
                throwIfNoEntry?: false | undefined;
            }
        ): Stats | BigIntStats;
        (path: PathLike, options?: StatSyncOptions): Stats | BigIntStats | undefined;
    }
    export const statSync: StatSyncFn;
    export function fstat(fd: number, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;
    export function fstat(
        fd: number,
        options:
            | (StatOptions & {
                  bigint?: false | undefined;
              })
            | undefined,
        callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
    ): void;
    export function fstat(
        fd: number,
        options: StatOptions & {
            bigint: true;
        },
        callback: (err: NodeJS.ErrnoException | null, stats: BigIntStats) => void
    ): void;
    export function fstat(fd: number, options: StatOptions | undefined, callback: (err: NodeJS.ErrnoException | null, stats: Stats | BigIntStats) => void): void;
    export namespace fstat {
        function __promisify__(
            fd: number,
            options?: StatOptions & {
                bigint?: false | undefined;
            }
        ): Promise<Stats>;
        function __promisify__(
            fd: number,
            options: StatOptions & {
                bigint: true;
            }
        ): Promise<BigIntStats>;
        function __promisify__(fd: number, options?: StatOptions): Promise<Stats | BigIntStats>;
    }
    export function fstatSync(
        fd: number,
        options?: StatOptions & {
            bigint?: false | undefined;
        }
    ): Stats;
    export function fstatSync(
        fd: number,
        options: StatOptions & {
            bigint: true;
        }
    ): BigIntStats;
    export function fstatSync(fd: number, options?: StatOptions): Stats | BigIntStats;
    export function lstat(path: PathLike, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;
    export function lstat(
        path: PathLike,
        options:
            | (StatOptions & {
                  bigint?: false | undefined;
              })
            | undefined,
        callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
    ): void;
    export function lstat(
        path: PathLike,
        options: StatOptions & {
            bigint: true;
        },
        callback: (err: NodeJS.ErrnoException | null, stats: BigIntStats) => void
    ): void;
    export function lstat(path: PathLike, options: StatOptions | undefined, callback: (err: NodeJS.ErrnoException | null, stats: Stats | BigIntStats) => void): void;
    export namespace lstat {
        function __promisify__(
            path: PathLike,
            options?: StatOptions & {
                bigint?: false | undefined;
            }
        ): Promise<Stats>;
        function __promisify__(
            path: PathLike,
            options: StatOptions & {
                bigint: true;
            }
        ): Promise<BigIntStats>;
        function __promisify__(path: PathLike, options?: StatOptions): Promise<Stats | BigIntStats>;
    }
    export const lstatSync: StatSyncFn;
    export function link(existingPath: PathLike, newPath: PathLike, callback: NoParamCallback): void;
    export namespace link {
        function __promisify__(existingPath: PathLike, newPath: PathLike): Promise<void>;
    }
    export function linkSync(existingPath: PathLike, newPath: PathLike): void;
    export function symlink(target: PathLike, path: PathLike, type: symlink.Type | undefined | null, callback: NoParamCallback): void;
    export function symlink(target: PathLike, path: PathLike, callback: NoParamCallback): void;
    export namespace symlink {
        function __promisify__(target: PathLike, path: PathLike, type?: string | null): Promise<void>;
        type Type = 'dir' | 'file' | 'junction';
    }
    export function symlinkSync(target: PathLike, path: PathLike, type?: symlink.Type | null): void;
    export function readlink(path: PathLike, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, linkString: string) => void): void;
    export function readlink(path: PathLike, options: BufferEncodingOption, callback: (err: NodeJS.ErrnoException | null, linkString: Buffer) => void): void;
    export function readlink(path: PathLike, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, linkString: string | Buffer) => void): void;
    export function readlink(path: PathLike, callback: (err: NodeJS.ErrnoException | null, linkString: string) => void): void;
    export namespace readlink {
        function __promisify__(path: PathLike, options?: EncodingOption): Promise<string>;
        function __promisify__(path: PathLike, options: BufferEncodingOption): Promise<Buffer>;
        function __promisify__(path: PathLike, options?: EncodingOption): Promise<string | Buffer>;
    }
    export function readlinkSync(path: PathLike, options?: EncodingOption): string;
    export function readlinkSync(path: PathLike, options: BufferEncodingOption): Buffer;
    export function readlinkSync(path: PathLike, options?: EncodingOption): string | Buffer;
    export function realpath(path: PathLike, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void): void;
    export function realpath(path: PathLike, options: BufferEncodingOption, callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void): void;
    export function realpath(path: PathLike, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string | Buffer) => void): void;
    export function realpath(path: PathLike, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void): void;
    export namespace realpath {
        function __promisify__(path: PathLike, options?: EncodingOption): Promise<string>;
        function __promisify__(path: PathLike, options: BufferEncodingOption): Promise<Buffer>;
        function __promisify__(path: PathLike, options?: EncodingOption): Promise<string | Buffer>;
        function native(path: PathLike, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void): void;
        function native(path: PathLike, options: BufferEncodingOption, callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void): void;
        function native(path: PathLike, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string | Buffer) => void): void;
        function native(path: PathLike, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void): void;
    }
    export function realpathSync(path: PathLike, options?: EncodingOption): string;
    export function realpathSync(path: PathLike, options: BufferEncodingOption): Buffer;
    export function realpathSync(path: PathLike, options?: EncodingOption): string | Buffer;
    export namespace realpathSync {
        function native(path: PathLike, options?: EncodingOption): string;
        function native(path: PathLike, options: BufferEncodingOption): Buffer;
        function native(path: PathLike, options?: EncodingOption): string | Buffer;
    }
    export function unlink(path: PathLike, callback: NoParamCallback): void;
    export namespace unlink {
        function __promisify__(path: PathLike): Promise<void>;
    }
    export function unlinkSync(path: PathLike): void;
    export interface RmDirOptions {
        maxRetries?: number | undefined;
        recursive?: boolean | undefined;
        retryDelay?: number | undefined;
    }
    export function rmdir(path: PathLike, callback: NoParamCallback): void;
    export function rmdir(path: PathLike, options: RmDirOptions, callback: NoParamCallback): void;
    export namespace rmdir {
        function __promisify__(path: PathLike, options?: RmDirOptions): Promise<void>;
    }
    export function rmdirSync(path: PathLike, options?: RmDirOptions): void;
    export interface RmOptions {
        force?: boolean | undefined;
        maxRetries?: number | undefined;
        recursive?: boolean | undefined;
        retryDelay?: number | undefined;
    }
    export function rm(path: PathLike, callback: NoParamCallback): void;
    export function rm(path: PathLike, options: RmOptions, callback: NoParamCallback): void;
    export namespace rm {
        function __promisify__(path: PathLike, options?: RmOptions): Promise<void>;
    }
    export function rmSync(path: PathLike, options?: RmOptions): void;
    export interface MakeDirectoryOptions {
        recursive?: boolean | undefined;
        mode?: Mode | undefined;
    }
    export function mkdir(
        path: PathLike,
        options: MakeDirectoryOptions & {
            recursive: true;
        },
        callback: (err: NodeJS.ErrnoException | null, path?: string) => void
    ): void;
    export function mkdir(
        path: PathLike,
        options:
            | Mode
            | (MakeDirectoryOptions & {
                  recursive?: false | undefined;
              })
            | null
            | undefined,
        callback: NoParamCallback
    ): void;
    export function mkdir(path: PathLike, options: Mode | MakeDirectoryOptions | null | undefined, callback: (err: NodeJS.ErrnoException | null, path?: string) => void): void;
    export function mkdir(path: PathLike, callback: NoParamCallback): void;
    export namespace mkdir {
        function __promisify__(
            path: PathLike,
            options: MakeDirectoryOptions & {
                recursive: true;
            }
        ): Promise<string | undefined>;
        function __promisify__(
            path: PathLike,
            options?:
                | Mode
                | (MakeDirectoryOptions & {
                      recursive?: false | undefined;
                  })
                | null
        ): Promise<void>;
        function __promisify__(path: PathLike, options?: Mode | MakeDirectoryOptions | null): Promise<string | undefined>;
    }
    export function mkdirSync(
        path: PathLike,
        options: MakeDirectoryOptions & {
            recursive: true;
        }
    ): string | undefined;
    export function mkdirSync(
        path: PathLike,
        options?:
            | Mode
            | (MakeDirectoryOptions & {
                  recursive?: false | undefined;
              })
            | null
    ): void;
    export function mkdirSync(path: PathLike, options?: Mode | MakeDirectoryOptions | null): string | undefined;
    export function mkdtemp(prefix: string, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, folder: string) => void): void;
    export function mkdtemp(
        prefix: string,
        options:
            | 'buffer'
            | {
                  encoding: 'buffer';
              },
        callback: (err: NodeJS.ErrnoException | null, folder: Buffer) => void
    ): void;
    export function mkdtemp(prefix: string, options: EncodingOption, callback: (err: NodeJS.ErrnoException | null, folder: string | Buffer) => void): void;
    export function mkdtemp(prefix: string, callback: (err: NodeJS.ErrnoException | null, folder: string) => void): void;
    export namespace mkdtemp {
        function __promisify__(prefix: string, options?: EncodingOption): Promise<string>;
        function __promisify__(prefix: string, options: BufferEncodingOption): Promise<Buffer>;
        function __promisify__(prefix: string, options?: EncodingOption): Promise<string | Buffer>;
    }
    export function mkdtempSync(prefix: string, options?: EncodingOption): string;
    export function mkdtempSync(prefix: string, options: BufferEncodingOption): Buffer;
    export function mkdtempSync(prefix: string, options?: EncodingOption): string | Buffer;
    export function readdir(
        path: PathLike,
        options:
            | {
                  encoding: BufferEncoding | null;
                  withFileTypes?: false | undefined;
              }
            | BufferEncoding
            | undefined
            | null,
        callback: (err: NodeJS.ErrnoException | null, files: string[]) => void
    ): void;
    export function readdir(
        path: PathLike,
        options:
            | {
                  encoding: 'buffer';
                  withFileTypes?: false | undefined;
              }
            | 'buffer',
        callback: (err: NodeJS.ErrnoException | null, files: Buffer[]) => void
    ): void;
    export function readdir(
        path: PathLike,
        options:
            | (ObjectEncodingOptions & {
                  withFileTypes?: false | undefined;
              })
            | BufferEncoding
            | undefined
            | null,
        callback: (err: NodeJS.ErrnoException | null, files: string[] | Buffer[]) => void
    ): void;
    export function readdir(path: PathLike, callback: (err: NodeJS.ErrnoException | null, files: string[]) => void): void;
    export function readdir(
        path: PathLike,
        options: ObjectEncodingOptions & {
            withFileTypes: true;
        },
        callback: (err: NodeJS.ErrnoException | null, files: Dirent[]) => void
    ): void;
    export namespace readdir {
        function __promisify__(
            path: PathLike,
            options?:
                | {
                      encoding: BufferEncoding | null;
                      withFileTypes?: false | undefined;
                  }
                | BufferEncoding
                | null
        ): Promise<string[]>;
        function __promisify__(
            path: PathLike,
            options:
                | 'buffer'
                | {
                      encoding: 'buffer';
                      withFileTypes?: false | undefined;
                  }
        ): Promise<Buffer[]>;
        function __promisify__(
            path: PathLike,
            options?:
                | (ObjectEncodingOptions & {
                      withFileTypes?: false | undefined;
                  })
                | BufferEncoding
                | null
        ): Promise<string[] | Buffer[]>;
        function __promisify__(
            path: PathLike,
            options: ObjectEncodingOptions & {
                withFileTypes: true;
            }
        ): Promise<Dirent[]>;
    }
    export function readdirSync(
        path: PathLike,
        options?:
            | {
                  encoding: BufferEncoding | null;
                  withFileTypes?: false | undefined;
              }
            | BufferEncoding
            | null
    ): string[];
    export function readdirSync(
        path: PathLike,
        options:
            | {
                  encoding: 'buffer';
                  withFileTypes?: false | undefined;
              }
            | 'buffer'
    ): Buffer[];
    export function readdirSync(
        path: PathLike,
        options?:
            | (ObjectEncodingOptions & {
                  withFileTypes?: false | undefined;
              })
            | BufferEncoding
            | null
    ): string[] | Buffer[];
    export function readdirSync(
        path: PathLike,
        options: ObjectEncodingOptions & {
            withFileTypes: true;
        }
    ): Dirent[];
    export function close(fd: number, callback?: NoParamCallback): void;
    export namespace close {
        function __promisify__(fd: number): Promise<void>;
    }
    export function closeSync(fd: number): void;
    export function open(path: PathLike, flags: OpenMode, mode: Mode | undefined | null, callback: (err: NodeJS.ErrnoException | null, fd: number) => void): void;
    export function open(path: PathLike, flags: OpenMode, callback: (err: NodeJS.ErrnoException | null, fd: number) => void): void;
    export namespace open {
        function __promisify__(path: PathLike, flags: OpenMode, mode?: Mode | null): Promise<number>;
    }
    export function openSync(path: PathLike, flags: OpenMode, mode?: Mode | null): number;
    export function utimes(path: PathLike, atime: TimeLike, mtime: TimeLike, callback: NoParamCallback): void;
    export namespace utimes {
        function __promisify__(path: PathLike, atime: TimeLike, mtime: TimeLike): Promise<void>;
    }
    export function utimesSync(path: PathLike, atime: TimeLike, mtime: TimeLike): void;
    export function futimes(fd: number, atime: TimeLike, mtime: TimeLike, callback: NoParamCallback): void;
    export namespace futimes {
        function __promisify__(fd: number, atime: TimeLike, mtime: TimeLike): Promise<void>;
    }
    export function futimesSync(fd: number, atime: TimeLike, mtime: TimeLike): void;
    export function fsync(fd: number, callback: NoParamCallback): void;
    export namespace fsync {
        function __promisify__(fd: number): Promise<void>;
    }
    export function fsyncSync(fd: number): void;
    export function write<TBuffer extends NodeJS.ArrayBufferView>(
        fd: number,
        buffer: TBuffer,
        offset: number | undefined | null,
        length: number | undefined | null,
        position: number | undefined | null,
        callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
    ): void;
    export function write<TBuffer extends NodeJS.ArrayBufferView>(
        fd: number,
        buffer: TBuffer,
        offset: number | undefined | null,
        length: number | undefined | null,
        callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
    ): void;
    export function write<TBuffer extends NodeJS.ArrayBufferView>(
        fd: number,
        buffer: TBuffer,
        offset: number | undefined | null,
        callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
    ): void;
    export function write<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void): void;
    export function write(
        fd: number,
        string: string,
        position: number | undefined | null,
        encoding: BufferEncoding | undefined | null,
        callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void
    ): void;
    export function write(fd: number, string: string, position: number | undefined | null, callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void): void;
    export function write(fd: number, string: string, callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void): void;
    export namespace write {
        function __promisify__<TBuffer extends NodeJS.ArrayBufferView>(
            fd: number,
            buffer?: TBuffer,
            offset?: number,
            length?: number,
            position?: number | null
        ): Promise<{
            bytesWritten: number;
            buffer: TBuffer;
        }>;
        function __promisify__(
            fd: number,
            string: string,
            position?: number | null,
            encoding?: BufferEncoding | null
        ): Promise<{
            bytesWritten: number;
            buffer: string;
        }>;
    }
    export function writeSync(fd: number, buffer: NodeJS.ArrayBufferView, offset?: number | null, length?: number | null, position?: number | null): number;
    export function writeSync(fd: number, string: string, position?: number | null, encoding?: BufferEncoding | null): number;
    export type ReadPosition = number | bigint;
    export interface ReadSyncOptions {
        offset?: number | undefined;
        length?: number | undefined;
        position?: ReadPosition | null | undefined;
    }
    export interface ReadAsyncOptions<TBuffer extends NodeJS.ArrayBufferView> extends ReadSyncOptions {
        buffer?: TBuffer;
    }
    export function read<TBuffer extends NodeJS.ArrayBufferView>(
        fd: number,
        buffer: TBuffer,
        offset: number,
        length: number,
        position: ReadPosition | null,
        callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: TBuffer) => void
    ): void;
    export function read<TBuffer extends NodeJS.ArrayBufferView>(
        fd: number,
        options: ReadAsyncOptions<TBuffer>,
        callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: TBuffer) => void
    ): void;
    export function read(
        fd: number,
        callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: NodeJS.ArrayBufferView) => void
    ): void;
    export namespace read {
        function __promisify__<TBuffer extends NodeJS.ArrayBufferView>(
            fd: number,
            buffer: TBuffer,
            offset: number,
            length: number,
            position: number | null
        ): Promise<{
            bytesRead: number;
            buffer: TBuffer;
        }>;
        function __promisify__<TBuffer extends NodeJS.ArrayBufferView>(
            fd: number,
            options: ReadAsyncOptions<TBuffer>
        ): Promise<{
            bytesRead: number;
            buffer: TBuffer;
        }>;
        function __promisify__(
            fd: number
        ): Promise<{
            bytesRead: number;
            buffer: NodeJS.ArrayBufferView;
        }>;
    }
    export function readSync(fd: number, buffer: NodeJS.ArrayBufferView, offset: number, length: number, position: ReadPosition | null): number;
    export function readSync(fd: number, buffer: NodeJS.ArrayBufferView, opts?: ReadSyncOptions): number;
    export function readFile(
        path: PathOrFileDescriptor,
        options:
            | ({
                  encoding?: null | undefined;
                  flag?: string | undefined;
              } & Abortable)
            | undefined
            | null,
        callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
    ): void;
    export function readFile(
        path: PathOrFileDescriptor,
        options:
            | ({
                  encoding: BufferEncoding;
                  flag?: string | undefined;
              } & Abortable)
            | BufferEncoding,
        callback: (err: NodeJS.ErrnoException | null, data: string) => void
    ): void;
    export function readFile(
        path: PathOrFileDescriptor,
        options:
            | (ObjectEncodingOptions & {
                  flag?: string | undefined;
              } & Abortable)
            | BufferEncoding
            | undefined
            | null,
        callback: (err: NodeJS.ErrnoException | null, data: string | Buffer) => void
    ): void;
    export function readFile(path: PathOrFileDescriptor, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void;
    export namespace readFile {
        function __promisify__(
            path: PathOrFileDescriptor,
            options?: {
                encoding?: null | undefined;
                flag?: string | undefined;
            } | null
        ): Promise<Buffer>;
        function __promisify__(
            path: PathOrFileDescriptor,
            options:
                | {
                      encoding: BufferEncoding;
                      flag?: string | undefined;
                  }
                | BufferEncoding
        ): Promise<string>;
        function __promisify__(
            path: PathOrFileDescriptor,
            options?:
                | (ObjectEncodingOptions & {
                      flag?: string | undefined;
                  })
                | BufferEncoding
                | null
        ): Promise<string | Buffer>;
    }
    export function readFileSync(
        path: PathOrFileDescriptor,
        options?: {
            encoding?: null | undefined;
            flag?: string | undefined;
        } | null
    ): Buffer;
    export function readFileSync(
        path: PathOrFileDescriptor,
        options:
            | {
                  encoding: BufferEncoding;
                  flag?: string | undefined;
              }
            | BufferEncoding
    ): string;
    export function readFileSync(
        path: PathOrFileDescriptor,
        options?:
            | (ObjectEncodingOptions & {
                  flag?: string | undefined;
              })
            | BufferEncoding
            | null
    ): string | Buffer;
    export type WriteFileOptions =
        | (ObjectEncodingOptions &
              Abortable & {
                  mode?: Mode | undefined;
                  flag?: string | undefined;
              })
        | BufferEncoding
        | null;
    export function writeFile(file: PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options: WriteFileOptions, callback: NoParamCallback): void;
    export function writeFile(path: PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, callback: NoParamCallback): void;
    export namespace writeFile {
        function __promisify__(path: PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: WriteFileOptions): Promise<void>;
    }
    export function writeFileSync(file: PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: WriteFileOptions): void;
    export function appendFile(path: PathOrFileDescriptor, data: string | Uint8Array, options: WriteFileOptions, callback: NoParamCallback): void;
    export function appendFile(file: PathOrFileDescriptor, data: string | Uint8Array, callback: NoParamCallback): void;
    export namespace appendFile {
        function __promisify__(file: PathOrFileDescriptor, data: string | Uint8Array, options?: WriteFileOptions): Promise<void>;
    }
    export function appendFileSync(path: PathOrFileDescriptor, data: string | Uint8Array, options?: WriteFileOptions): void;
    export interface WatchFileOptions {
        bigint?: boolean | undefined;
        persistent?: boolean | undefined;
        interval?: number | undefined;
    }
    export function watchFile(
        filename: PathLike,
        options:
            | (WatchFileOptions & {
                  bigint?: false | undefined;
              })
            | undefined,
        listener: (curr: Stats, prev: Stats) => void
    ): StatWatcher;
    export function watchFile(
        filename: PathLike,
        options:
            | (WatchFileOptions & {
                  bigint: true;
              })
            | undefined,
        listener: (curr: BigIntStats, prev: BigIntStats) => void
    ): StatWatcher;
    export function watchFile(filename: PathLike, listener: (curr: Stats, prev: Stats) => void): StatWatcher;
    export function unwatchFile(filename: PathLike, listener?: (curr: Stats, prev: Stats) => void): void;
    export interface WatchOptions extends Abortable {
        encoding?: BufferEncoding | 'buffer' | undefined;
        persistent?: boolean | undefined;
        recursive?: boolean | undefined;
    }
    export type WatchEventType = 'rename' | 'change';
    export type WatchListener<T> = (event: WatchEventType, filename: T) => void;
    export function watch(
        filename: PathLike,
        options:
            | (WatchOptions & {
                  encoding: 'buffer';
              })
            | 'buffer',
        listener?: WatchListener<Buffer>
    ): FSWatcher;
    export function watch(filename: PathLike, options?: WatchOptions | BufferEncoding | null, listener?: WatchListener<string>): FSWatcher;
    export function watch(filename: PathLike, options: WatchOptions | string, listener?: WatchListener<string | Buffer>): FSWatcher;
    export function watch(filename: PathLike, listener?: WatchListener<string>): FSWatcher;
    export function exists(path: PathLike, callback: (exists: boolean) => void): void;
    export namespace exists {
        function __promisify__(path: PathLike): Promise<boolean>;
    }
    export function existsSync(path: PathLike): boolean;
    export namespace constants {
        const F_OK: number;
        const R_OK: number;
        const W_OK: number;
        const X_OK: number;
        const COPYFILE_EXCL: number;
        const COPYFILE_FICLONE: number;
        const COPYFILE_FICLONE_FORCE: number;
        const O_RDONLY: number;
        const O_WRONLY: number;
        const O_RDWR: number;
        const O_CREAT: number;
        const O_EXCL: number;
        const O_NOCTTY: number;
        const O_TRUNC: number;
        const O_APPEND: number;
        const O_DIRECTORY: number;
        const O_NOATIME: number;
        const O_NOFOLLOW: number;
        const O_SYNC: number;
        const O_DSYNC: number;
        const O_SYMLINK: number;
        const O_DIRECT: number;
        const O_NONBLOCK: number;
        const S_IFMT: number;
        const S_IFREG: number;
        const S_IFDIR: number;
        const S_IFCHR: number;
        const S_IFBLK: number;
        const S_IFIFO: number;
        const S_IFLNK: number;
        const S_IFSOCK: number;
        const S_IRWXU: number;
        const S_IRUSR: number;
        const S_IWUSR: number;
        const S_IXUSR: number;
        const S_IRWXG: number;
        const S_IRGRP: number;
        const S_IWGRP: number;
        const S_IXGRP: number;
        const S_IRWXO: number;
        const S_IROTH: number;
        const S_IWOTH: number;
        const S_IXOTH: number;
        const UV_FS_O_FILEMAP: number;
    }
    export function access(path: PathLike, mode: number | undefined, callback: NoParamCallback): void;
    export function access(path: PathLike, callback: NoParamCallback): void;
    export namespace access {
        function __promisify__(path: PathLike, mode?: number): Promise<void>;
    }
    export function accessSync(path: PathLike, mode?: number): void;
    interface StreamOptions {
        flags?: string | undefined;
        encoding?: BufferEncoding | undefined;
        fd?: number | promises.FileHandle | undefined;
        mode?: number | undefined;
        autoClose?: boolean | undefined;
        emitClose?: boolean | undefined;
        start?: number | undefined;
        highWaterMark?: number | undefined;
    }
    interface ReadStreamOptions extends StreamOptions {
        end?: number | undefined;
    }
    export function createReadStream(path: PathLike, options?: BufferEncoding | ReadStreamOptions): ReadStream;
    export function createWriteStream(path: PathLike, options?: BufferEncoding | StreamOptions): WriteStream;
    export function fdatasync(fd: number, callback: NoParamCallback): void;
    export namespace fdatasync {
        function __promisify__(fd: number): Promise<void>;
    }
    export function fdatasyncSync(fd: number): void;
    export function copyFile(src: PathLike, dest: PathLike, callback: NoParamCallback): void;
    export function copyFile(src: PathLike, dest: PathLike, mode: number, callback: NoParamCallback): void;
    export namespace copyFile {
        function __promisify__(src: PathLike, dst: PathLike, mode?: number): Promise<void>;
    }
    export function copyFileSync(src: PathLike, dest: PathLike, mode?: number): void;
    export function writev(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, cb: (err: NodeJS.ErrnoException | null, bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void): void;
    export function writev(
        fd: number,
        buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
        position: number,
        cb: (err: NodeJS.ErrnoException | null, bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void
    ): void;
    export interface WriteVResult {
        bytesWritten: number;
        buffers: NodeJS.ArrayBufferView[];
    }
    export namespace writev {
        function __promisify__(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position?: number): Promise<WriteVResult>;
    }
    export function writevSync(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position?: number): number;
    export function readv(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, cb: (err: NodeJS.ErrnoException | null, bytesRead: number, buffers: NodeJS.ArrayBufferView[]) => void): void;
    export function readv(
        fd: number,
        buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
        position: number,
        cb: (err: NodeJS.ErrnoException | null, bytesRead: number, buffers: NodeJS.ArrayBufferView[]) => void
    ): void;
    export interface ReadVResult {
        bytesRead: number;
        buffers: NodeJS.ArrayBufferView[];
    }
    export namespace readv {
        function __promisify__(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position?: number): Promise<ReadVResult>;
    }
    export function readvSync(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position?: number): number;
    export interface OpenDirOptions {
        encoding?: BufferEncoding | undefined;
        bufferSize?: number | undefined;
    }
    export function opendirSync(path: PathLike, options?: OpenDirOptions): Dir;
    export function opendir(path: PathLike, cb: (err: NodeJS.ErrnoException | null, dir: Dir) => void): void;
    export function opendir(path: PathLike, options: OpenDirOptions, cb: (err: NodeJS.ErrnoException | null, dir: Dir) => void): void;
    export namespace opendir {
        function __promisify__(path: PathLike, options?: OpenDirOptions): Promise<Dir>;
    }
    export interface BigIntStats extends StatsBase<bigint> {
        atimeNs: bigint;
        mtimeNs: bigint;
        ctimeNs: bigint;
        birthtimeNs: bigint;
    }
    export interface BigIntOptions {
        bigint: true;
    }
    export interface StatOptions {
        bigint?: boolean | undefined;
    }
    export interface StatSyncOptions extends StatOptions {
        throwIfNoEntry?: boolean | undefined;
    }
    export interface CopyOptions {
        dereference?: boolean;
        errorOnExist?: boolean;
        filter?(source: string, destination: string): boolean;
        force?: boolean;
        preserveTimestamps?: boolean;
        recursive?: boolean;
    }
    export function cp(source: string, destination: string, callback: (err: NodeJS.ErrnoException | null) => void): void;
    export function cp(source: string, destination: string, opts: CopyOptions, callback: (err: NodeJS.ErrnoException | null) => void): void;
    export function cpSync(source: string, destination: string, opts?: CopyOptions): void;
}
declare module 'node:fs' {
    export * from 'fs';
}
declare module 'http' {
    import * as stream from 'node:stream';
    import { URL } from 'node:url';
    import { TcpSocketConnectOpts, Socket, Server as NetServer, LookupFunction } from 'node:net';
    interface IncomingHttpHeaders extends NodeJS.Dict<string | string[]> {
        accept?: string | undefined;
        'accept-language'?: string | undefined;
        'accept-patch'?: string | undefined;
        'accept-ranges'?: string | undefined;
        'access-control-allow-credentials'?: string | undefined;
        'access-control-allow-headers'?: string | undefined;
        'access-control-allow-methods'?: string | undefined;
        'access-control-allow-origin'?: string | undefined;
        'access-control-expose-headers'?: string | undefined;
        'access-control-max-age'?: string | undefined;
        'access-control-request-headers'?: string | undefined;
        'access-control-request-method'?: string | undefined;
        age?: string | undefined;
        allow?: string | undefined;
        'alt-svc'?: string | undefined;
        authorization?: string | undefined;
        'cache-control'?: string | undefined;
        connection?: string | undefined;
        'content-disposition'?: string | undefined;
        'content-encoding'?: string | undefined;
        'content-language'?: string | undefined;
        'content-length'?: string | undefined;
        'content-location'?: string | undefined;
        'content-range'?: string | undefined;
        'content-type'?: string | undefined;
        cookie?: string | undefined;
        date?: string | undefined;
        etag?: string | undefined;
        expect?: string | undefined;
        expires?: string | undefined;
        forwarded?: string | undefined;
        from?: string | undefined;
        host?: string | undefined;
        'if-match'?: string | undefined;
        'if-modified-since'?: string | undefined;
        'if-none-match'?: string | undefined;
        'if-unmodified-since'?: string | undefined;
        'last-modified'?: string | undefined;
        location?: string | undefined;
        origin?: string | undefined;
        pragma?: string | undefined;
        'proxy-authenticate'?: string | undefined;
        'proxy-authorization'?: string | undefined;
        'public-key-pins'?: string | undefined;
        range?: string | undefined;
        referer?: string | undefined;
        'retry-after'?: string | undefined;
        'sec-websocket-accept'?: string | undefined;
        'sec-websocket-extensions'?: string | undefined;
        'sec-websocket-key'?: string | undefined;
        'sec-websocket-protocol'?: string | undefined;
        'sec-websocket-version'?: string | undefined;
        'set-cookie'?: string[] | undefined;
        'strict-transport-security'?: string | undefined;
        tk?: string | undefined;
        trailer?: string | undefined;
        'transfer-encoding'?: string | undefined;
        upgrade?: string | undefined;
        'user-agent'?: string | undefined;
        vary?: string | undefined;
        via?: string | undefined;
        warning?: string | undefined;
        'www-authenticate'?: string | undefined;
    }
    type OutgoingHttpHeader = number | string | string[];
    interface OutgoingHttpHeaders extends NodeJS.Dict<OutgoingHttpHeader> {}
    interface ClientRequestArgs {
        signal?: AbortSignal | undefined;
        protocol?: string | null | undefined;
        host?: string | null | undefined;
        hostname?: string | null | undefined;
        family?: number | undefined;
        port?: number | string | null | undefined;
        defaultPort?: number | string | undefined;
        localAddress?: string | undefined;
        socketPath?: string | undefined;
        maxHeaderSize?: number | undefined;
        method?: string | undefined;
        path?: string | null | undefined;
        headers?: OutgoingHttpHeaders | undefined;
        auth?: string | null | undefined;
        agent?: Agent | boolean | undefined;
        _defaultAgent?: Agent | undefined;
        timeout?: number | undefined;
        setHost?: boolean | undefined;
        createConnection?: ((options: ClientRequestArgs, oncreate: (err: Error, socket: Socket) => void) => Socket) | undefined;
        lookup?: LookupFunction | undefined;
    }
    interface ServerOptions {
        IncomingMessage?: typeof IncomingMessage | undefined;
        ServerResponse?: typeof ServerResponse | undefined;
        maxHeaderSize?: number | undefined;
        insecureHTTPParser?: boolean | undefined;
    }
    type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;
    class Server extends NetServer {
        constructor(requestListener?: RequestListener);
        constructor(options: ServerOptions, requestListener?: RequestListener);
        setTimeout(msecs?: number, callback?: () => void): this;
        setTimeout(callback: () => void): this;
        maxHeadersCount: number | null;
        maxRequestsPerSocket: number | null;
        timeout: number;
        headersTimeout: number;
        keepAliveTimeout: number;
        requestTimeout: number;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'connection', listener: (socket: Socket) => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'listening', listener: () => void): this;
        addListener(event: 'checkContinue', listener: RequestListener): this;
        addListener(event: 'checkExpectation', listener: RequestListener): this;
        addListener(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this;
        addListener(event: 'connect', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        addListener(event: 'request', listener: RequestListener): this;
        addListener(event: 'upgrade', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        emit(event: string, ...args: any[]): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'connection', socket: Socket): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'listening'): boolean;
        emit(event: 'checkContinue', req: IncomingMessage, res: ServerResponse): boolean;
        emit(event: 'checkExpectation', req: IncomingMessage, res: ServerResponse): boolean;
        emit(event: 'clientError', err: Error, socket: stream.Duplex): boolean;
        emit(event: 'connect', req: IncomingMessage, socket: stream.Duplex, head: Buffer): boolean;
        emit(event: 'request', req: IncomingMessage, res: ServerResponse): boolean;
        emit(event: 'upgrade', req: IncomingMessage, socket: stream.Duplex, head: Buffer): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'connection', listener: (socket: Socket) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'listening', listener: () => void): this;
        on(event: 'checkContinue', listener: RequestListener): this;
        on(event: 'checkExpectation', listener: RequestListener): this;
        on(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this;
        on(event: 'connect', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        on(event: 'request', listener: RequestListener): this;
        on(event: 'upgrade', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'connection', listener: (socket: Socket) => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'listening', listener: () => void): this;
        once(event: 'checkContinue', listener: RequestListener): this;
        once(event: 'checkExpectation', listener: RequestListener): this;
        once(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this;
        once(event: 'connect', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        once(event: 'request', listener: RequestListener): this;
        once(event: 'upgrade', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'connection', listener: (socket: Socket) => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'listening', listener: () => void): this;
        prependListener(event: 'checkContinue', listener: RequestListener): this;
        prependListener(event: 'checkExpectation', listener: RequestListener): this;
        prependListener(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this;
        prependListener(event: 'connect', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        prependListener(event: 'request', listener: RequestListener): this;
        prependListener(event: 'upgrade', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'connection', listener: (socket: Socket) => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'listening', listener: () => void): this;
        prependOnceListener(event: 'checkContinue', listener: RequestListener): this;
        prependOnceListener(event: 'checkExpectation', listener: RequestListener): this;
        prependOnceListener(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this;
        prependOnceListener(event: 'connect', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
        prependOnceListener(event: 'request', listener: RequestListener): this;
        prependOnceListener(event: 'upgrade', listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void): this;
    }
    class OutgoingMessage extends stream.Writable {
        readonly req: IncomingMessage;
        chunkedEncoding: boolean;
        shouldKeepAlive: boolean;
        useChunkedEncodingByDefault: boolean;
        sendDate: boolean;
        finished: boolean;
        readonly headersSent: boolean;
        readonly connection: Socket | null;
        readonly socket: Socket | null;
        constructor();
        setTimeout(msecs: number, callback?: () => void): this;
        setHeader(name: string, value: number | string | ReadonlyArray<string>): this;
        getHeader(name: string): number | string | string[] | undefined;
        getHeaders(): OutgoingHttpHeaders;
        getHeaderNames(): string[];
        hasHeader(name: string): boolean;
        removeHeader(name: string): void;
        addTrailers(headers: OutgoingHttpHeaders | ReadonlyArray<[string, string]>): void;
        flushHeaders(): void;
    }
    class ServerResponse extends OutgoingMessage {
        statusCode: number;
        statusMessage: string;
        constructor(req: IncomingMessage);
        assignSocket(socket: Socket): void;
        detachSocket(socket: Socket): void;
        writeContinue(callback?: () => void): void;
        writeHead(statusCode: number, statusMessage?: string, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]): this;
        writeHead(statusCode: number, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]): this;
        writeProcessing(): void;
    }
    interface InformationEvent {
        statusCode: number;
        statusMessage: string;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        headers: IncomingHttpHeaders;
        rawHeaders: string[];
    }
    class ClientRequest extends OutgoingMessage {
        aborted: boolean;
        host: string;
        protocol: string;
        reusedSocket: boolean;
        maxHeadersCount: number;
        constructor(url: string | URL | ClientRequestArgs, cb?: (res: IncomingMessage) => void);
        method: string;
        path: string;
        abort(): void;
        onSocket(socket: Socket): void;
        setTimeout(timeout: number, callback?: () => void): this;
        setNoDelay(noDelay?: boolean): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
        getRawHeaderNames(): string[];
        addListener(event: 'abort', listener: () => void): this;
        addListener(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        addListener(event: 'continue', listener: () => void): this;
        addListener(event: 'information', listener: (info: InformationEvent) => void): this;
        addListener(event: 'response', listener: (response: IncomingMessage) => void): this;
        addListener(event: 'socket', listener: (socket: Socket) => void): this;
        addListener(event: 'timeout', listener: () => void): this;
        addListener(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'drain', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'finish', listener: () => void): this;
        addListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        on(event: 'abort', listener: () => void): this;
        on(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        on(event: 'continue', listener: () => void): this;
        on(event: 'information', listener: (info: InformationEvent) => void): this;
        on(event: 'response', listener: (response: IncomingMessage) => void): this;
        on(event: 'socket', listener: (socket: Socket) => void): this;
        on(event: 'timeout', listener: () => void): this;
        on(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'drain', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'finish', listener: () => void): this;
        on(event: 'pipe', listener: (src: stream.Readable) => void): this;
        on(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'abort', listener: () => void): this;
        once(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        once(event: 'continue', listener: () => void): this;
        once(event: 'information', listener: (info: InformationEvent) => void): this;
        once(event: 'response', listener: (response: IncomingMessage) => void): this;
        once(event: 'socket', listener: (socket: Socket) => void): this;
        once(event: 'timeout', listener: () => void): this;
        once(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'drain', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'finish', listener: () => void): this;
        once(event: 'pipe', listener: (src: stream.Readable) => void): this;
        once(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'abort', listener: () => void): this;
        prependListener(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        prependListener(event: 'continue', listener: () => void): this;
        prependListener(event: 'information', listener: (info: InformationEvent) => void): this;
        prependListener(event: 'response', listener: (response: IncomingMessage) => void): this;
        prependListener(event: 'socket', listener: (socket: Socket) => void): this;
        prependListener(event: 'timeout', listener: () => void): this;
        prependListener(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'drain', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'finish', listener: () => void): this;
        prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'abort', listener: () => void): this;
        prependOnceListener(event: 'connect', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        prependOnceListener(event: 'continue', listener: () => void): this;
        prependOnceListener(event: 'information', listener: (info: InformationEvent) => void): this;
        prependOnceListener(event: 'response', listener: (response: IncomingMessage) => void): this;
        prependOnceListener(event: 'socket', listener: (socket: Socket) => void): this;
        prependOnceListener(event: 'timeout', listener: () => void): this;
        prependOnceListener(event: 'upgrade', listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'drain', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'finish', listener: () => void): this;
        prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    class IncomingMessage extends stream.Readable {
        constructor(socket: Socket);
        aborted: boolean;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        complete: boolean;
        connection: Socket;
        socket: Socket;
        headers: IncomingHttpHeaders;
        rawHeaders: string[];
        trailers: NodeJS.Dict<string>;
        rawTrailers: string[];
        setTimeout(msecs: number, callback?: () => void): this;
        method?: string | undefined;
        url?: string | undefined;
        statusCode?: number | undefined;
        statusMessage?: string | undefined;
        destroy(error?: Error): this;
    }
    interface AgentOptions extends Partial<TcpSocketConnectOpts> {
        keepAlive?: boolean | undefined;
        keepAliveMsecs?: number | undefined;
        maxSockets?: number | undefined;
        maxTotalSockets?: number | undefined;
        maxFreeSockets?: number | undefined;
        timeout?: number | undefined;
        scheduling?: 'fifo' | 'lifo' | undefined;
    }
    class Agent {
        maxFreeSockets: number;
        maxSockets: number;
        maxTotalSockets: number;
        readonly freeSockets: NodeJS.ReadOnlyDict<Socket[]>;
        readonly sockets: NodeJS.ReadOnlyDict<Socket[]>;
        readonly requests: NodeJS.ReadOnlyDict<IncomingMessage[]>;
        constructor(opts?: AgentOptions);
        destroy(): void;
    }
    const METHODS: string[];
    const STATUS_CODES: {
        [errorCode: number]: string | undefined;
        [errorCode: string]: string | undefined;
    };
    function createServer(requestListener?: RequestListener): Server;
    function createServer(options: ServerOptions, requestListener?: RequestListener): Server;
    interface RequestOptions extends ClientRequestArgs {}
    function request(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
    function request(url: string | URL, options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
    function get(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
    function get(url: string | URL, options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
    let globalAgent: Agent;
    const maxHeaderSize: number;
}
declare module 'node:http' {
    export * from 'http';
}
declare module 'http2' {
    import EventEmitter = require('node:events');
    import * as fs from 'node:fs';
    import * as net from 'node:net';
    import * as stream from 'node:stream';
    import * as tls from 'node:tls';
    import * as url from 'node:url';
    import { IncomingHttpHeaders as Http1IncomingHttpHeaders, OutgoingHttpHeaders, IncomingMessage, ServerResponse } from 'node:http';
    export { OutgoingHttpHeaders } from 'node:http';
    export interface IncomingHttpStatusHeader {
        ':status'?: number | undefined;
    }
    export interface IncomingHttpHeaders extends Http1IncomingHttpHeaders {
        ':path'?: string | undefined;
        ':method'?: string | undefined;
        ':authority'?: string | undefined;
        ':scheme'?: string | undefined;
    }
    export interface StreamPriorityOptions {
        exclusive?: boolean | undefined;
        parent?: number | undefined;
        weight?: number | undefined;
        silent?: boolean | undefined;
    }
    export interface StreamState {
        localWindowSize?: number | undefined;
        state?: number | undefined;
        localClose?: number | undefined;
        remoteClose?: number | undefined;
        sumDependencyWeight?: number | undefined;
        weight?: number | undefined;
    }
    export interface ServerStreamResponseOptions {
        endStream?: boolean | undefined;
        waitForTrailers?: boolean | undefined;
    }
    export interface StatOptions {
        offset: number;
        length: number;
    }
    export interface ServerStreamFileResponseOptions {
        statCheck?(stats: fs.Stats, headers: OutgoingHttpHeaders, statOptions: StatOptions): void | boolean;
        waitForTrailers?: boolean | undefined;
        offset?: number | undefined;
        length?: number | undefined;
    }
    export interface ServerStreamFileResponseOptionsWithError extends ServerStreamFileResponseOptions {
        onError?(err: NodeJS.ErrnoException): void;
    }
    export interface Http2Stream extends stream.Duplex {
        readonly aborted: boolean;
        readonly bufferSize: number;
        readonly closed: boolean;
        readonly destroyed: boolean;
        readonly endAfterHeaders: boolean;
        readonly id?: number | undefined;
        readonly pending: boolean;
        readonly rstCode: number;
        readonly sentHeaders: OutgoingHttpHeaders;
        readonly sentInfoHeaders?: OutgoingHttpHeaders[] | undefined;
        readonly sentTrailers?: OutgoingHttpHeaders | undefined;
        readonly session: Http2Session;
        readonly state: StreamState;
        close(code?: number, callback?: () => void): void;
        priority(options: StreamPriorityOptions): void;
        setTimeout(msecs: number, callback?: () => void): void;
        sendTrailers(headers: OutgoingHttpHeaders): void;
        addListener(event: 'aborted', listener: () => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        addListener(event: 'drain', listener: () => void): this;
        addListener(event: 'end', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'finish', listener: () => void): this;
        addListener(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this;
        addListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        addListener(event: 'streamClosed', listener: (code: number) => void): this;
        addListener(event: 'timeout', listener: () => void): this;
        addListener(event: 'trailers', listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(event: 'wantTrailers', listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'aborted'): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'data', chunk: Buffer | string): boolean;
        emit(event: 'drain'): boolean;
        emit(event: 'end'): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'finish'): boolean;
        emit(event: 'frameError', frameType: number, errorCode: number): boolean;
        emit(event: 'pipe', src: stream.Readable): boolean;
        emit(event: 'unpipe', src: stream.Readable): boolean;
        emit(event: 'streamClosed', code: number): boolean;
        emit(event: 'timeout'): boolean;
        emit(event: 'trailers', trailers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: 'wantTrailers'): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'aborted', listener: () => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'data', listener: (chunk: Buffer | string) => void): this;
        on(event: 'drain', listener: () => void): this;
        on(event: 'end', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'finish', listener: () => void): this;
        on(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this;
        on(event: 'pipe', listener: (src: stream.Readable) => void): this;
        on(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        on(event: 'streamClosed', listener: (code: number) => void): this;
        on(event: 'timeout', listener: () => void): this;
        on(event: 'trailers', listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        on(event: 'wantTrailers', listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'aborted', listener: () => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'data', listener: (chunk: Buffer | string) => void): this;
        once(event: 'drain', listener: () => void): this;
        once(event: 'end', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'finish', listener: () => void): this;
        once(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this;
        once(event: 'pipe', listener: (src: stream.Readable) => void): this;
        once(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        once(event: 'streamClosed', listener: (code: number) => void): this;
        once(event: 'timeout', listener: () => void): this;
        once(event: 'trailers', listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        once(event: 'wantTrailers', listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'aborted', listener: () => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        prependListener(event: 'drain', listener: () => void): this;
        prependListener(event: 'end', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'finish', listener: () => void): this;
        prependListener(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this;
        prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: 'streamClosed', listener: (code: number) => void): this;
        prependListener(event: 'timeout', listener: () => void): this;
        prependListener(event: 'trailers', listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        prependListener(event: 'wantTrailers', listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'aborted', listener: () => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        prependOnceListener(event: 'drain', listener: () => void): this;
        prependOnceListener(event: 'end', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'finish', listener: () => void): this;
        prependOnceListener(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this;
        prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: 'streamClosed', listener: (code: number) => void): this;
        prependOnceListener(event: 'timeout', listener: () => void): this;
        prependOnceListener(event: 'trailers', listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        prependOnceListener(event: 'wantTrailers', listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface ClientHttp2Stream extends Http2Stream {
        addListener(event: 'continue', listener: () => {}): this;
        addListener(event: 'headers', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        addListener(event: 'push', listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(event: 'response', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'continue'): boolean;
        emit(event: 'headers', headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number): boolean;
        emit(event: 'push', headers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: 'response', headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'continue', listener: () => {}): this;
        on(event: 'headers', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        on(event: 'push', listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        on(event: 'response', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'continue', listener: () => {}): this;
        once(event: 'headers', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        once(event: 'push', listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        once(event: 'response', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'continue', listener: () => {}): this;
        prependListener(event: 'headers', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        prependListener(event: 'push', listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        prependListener(event: 'response', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'continue', listener: () => {}): this;
        prependOnceListener(event: 'headers', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        prependOnceListener(event: 'push', listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        prependOnceListener(event: 'response', listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface ServerHttp2Stream extends Http2Stream {
        readonly headersSent: boolean;
        readonly pushAllowed: boolean;
        additionalHeaders(headers: OutgoingHttpHeaders): void;
        pushStream(headers: OutgoingHttpHeaders, callback?: (err: Error | null, pushStream: ServerHttp2Stream, headers: OutgoingHttpHeaders) => void): void;
        pushStream(headers: OutgoingHttpHeaders, options?: StreamPriorityOptions, callback?: (err: Error | null, pushStream: ServerHttp2Stream, headers: OutgoingHttpHeaders) => void): void;
        respond(headers?: OutgoingHttpHeaders, options?: ServerStreamResponseOptions): void;
        respondWithFD(fd: number | fs.promises.FileHandle, headers?: OutgoingHttpHeaders, options?: ServerStreamFileResponseOptions): void;
        respondWithFile(path: string, headers?: OutgoingHttpHeaders, options?: ServerStreamFileResponseOptionsWithError): void;
    }
    export interface Settings {
        headerTableSize?: number | undefined;
        enablePush?: boolean | undefined;
        initialWindowSize?: number | undefined;
        maxFrameSize?: number | undefined;
        maxConcurrentStreams?: number | undefined;
        maxHeaderListSize?: number | undefined;
        enableConnectProtocol?: boolean | undefined;
    }
    export interface ClientSessionRequestOptions {
        endStream?: boolean | undefined;
        exclusive?: boolean | undefined;
        parent?: number | undefined;
        weight?: number | undefined;
        waitForTrailers?: boolean | undefined;
    }
    export interface SessionState {
        effectiveLocalWindowSize?: number | undefined;
        effectiveRecvDataLength?: number | undefined;
        nextStreamID?: number | undefined;
        localWindowSize?: number | undefined;
        lastProcStreamID?: number | undefined;
        remoteWindowSize?: number | undefined;
        outboundQueueSize?: number | undefined;
        deflateDynamicTableSize?: number | undefined;
        inflateDynamicTableSize?: number | undefined;
    }
    export interface Http2Session extends EventEmitter {
        readonly alpnProtocol?: string | undefined;
        readonly closed: boolean;
        readonly connecting: boolean;
        readonly destroyed: boolean;
        readonly encrypted?: boolean | undefined;
        readonly localSettings: Settings;
        readonly originSet?: string[] | undefined;
        readonly pendingSettingsAck: boolean;
        readonly remoteSettings: Settings;
        readonly socket: net.Socket | tls.TLSSocket;
        readonly state: SessionState;
        readonly type: number;
        close(callback?: () => void): void;
        destroy(error?: Error, code?: number): void;
        goaway(code?: number, lastStreamID?: number, opaqueData?: NodeJS.ArrayBufferView): void;
        ping(callback: (err: Error | null, duration: number, payload: Buffer) => void): boolean;
        ping(payload: NodeJS.ArrayBufferView, callback: (err: Error | null, duration: number, payload: Buffer) => void): boolean;
        ref(): void;
        setLocalWindowSize(windowSize: number): void;
        setTimeout(msecs: number, callback?: () => void): void;
        settings(settings: Settings): void;
        unref(): void;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'frameError', listener: (frameType: number, errorCode: number, streamID: number) => void): this;
        addListener(event: 'goaway', listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this;
        addListener(event: 'localSettings', listener: (settings: Settings) => void): this;
        addListener(event: 'ping', listener: () => void): this;
        addListener(event: 'remoteSettings', listener: (settings: Settings) => void): this;
        addListener(event: 'timeout', listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'close'): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'frameError', frameType: number, errorCode: number, streamID: number): boolean;
        emit(event: 'goaway', errorCode: number, lastStreamID: number, opaqueData: Buffer): boolean;
        emit(event: 'localSettings', settings: Settings): boolean;
        emit(event: 'ping'): boolean;
        emit(event: 'remoteSettings', settings: Settings): boolean;
        emit(event: 'timeout'): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'close', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'frameError', listener: (frameType: number, errorCode: number, streamID: number) => void): this;
        on(event: 'goaway', listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this;
        on(event: 'localSettings', listener: (settings: Settings) => void): this;
        on(event: 'ping', listener: () => void): this;
        on(event: 'remoteSettings', listener: (settings: Settings) => void): this;
        on(event: 'timeout', listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'frameError', listener: (frameType: number, errorCode: number, streamID: number) => void): this;
        once(event: 'goaway', listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this;
        once(event: 'localSettings', listener: (settings: Settings) => void): this;
        once(event: 'ping', listener: () => void): this;
        once(event: 'remoteSettings', listener: (settings: Settings) => void): this;
        once(event: 'timeout', listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'frameError', listener: (frameType: number, errorCode: number, streamID: number) => void): this;
        prependListener(event: 'goaway', listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this;
        prependListener(event: 'localSettings', listener: (settings: Settings) => void): this;
        prependListener(event: 'ping', listener: () => void): this;
        prependListener(event: 'remoteSettings', listener: (settings: Settings) => void): this;
        prependListener(event: 'timeout', listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'frameError', listener: (frameType: number, errorCode: number, streamID: number) => void): this;
        prependOnceListener(event: 'goaway', listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void): this;
        prependOnceListener(event: 'localSettings', listener: (settings: Settings) => void): this;
        prependOnceListener(event: 'ping', listener: () => void): this;
        prependOnceListener(event: 'remoteSettings', listener: (settings: Settings) => void): this;
        prependOnceListener(event: 'timeout', listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface ClientHttp2Session extends Http2Session {
        request(headers?: OutgoingHttpHeaders, options?: ClientSessionRequestOptions): ClientHttp2Stream;
        addListener(event: 'altsvc', listener: (alt: string, origin: string, stream: number) => void): this;
        addListener(event: 'origin', listener: (origins: string[]) => void): this;
        addListener(event: 'connect', listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        addListener(event: 'stream', listener: (stream: ClientHttp2Stream, headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'altsvc', alt: string, origin: string, stream: number): boolean;
        emit(event: 'origin', origins: ReadonlyArray<string>): boolean;
        emit(event: 'connect', session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket): boolean;
        emit(event: 'stream', stream: ClientHttp2Stream, headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'altsvc', listener: (alt: string, origin: string, stream: number) => void): this;
        on(event: 'origin', listener: (origins: string[]) => void): this;
        on(event: 'connect', listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        on(event: 'stream', listener: (stream: ClientHttp2Stream, headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'altsvc', listener: (alt: string, origin: string, stream: number) => void): this;
        once(event: 'origin', listener: (origins: string[]) => void): this;
        once(event: 'connect', listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        once(event: 'stream', listener: (stream: ClientHttp2Stream, headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'altsvc', listener: (alt: string, origin: string, stream: number) => void): this;
        prependListener(event: 'origin', listener: (origins: string[]) => void): this;
        prependListener(event: 'connect', listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        prependListener(event: 'stream', listener: (stream: ClientHttp2Stream, headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'altsvc', listener: (alt: string, origin: string, stream: number) => void): this;
        prependOnceListener(event: 'origin', listener: (origins: string[]) => void): this;
        prependOnceListener(event: 'connect', listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        prependOnceListener(event: 'stream', listener: (stream: ClientHttp2Stream, headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface AlternativeServiceOptions {
        origin: number | string | url.URL;
    }
    export interface ServerHttp2Session extends Http2Session {
        readonly server: Http2Server | Http2SecureServer;
        altsvc(alt: string, originOrStream: number | string | url.URL | AlternativeServiceOptions): void;
        origin(
            ...origins: Array<
                | string
                | url.URL
                | {
                      origin: string;
                  }
            >
        ): void;
        addListener(event: 'connect', listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        addListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'connect', session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket): boolean;
        emit(event: 'stream', stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'connect', listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        on(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'connect', listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        once(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'connect', listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        prependListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'connect', listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        prependOnceListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface SessionOptions {
        maxDeflateDynamicTableSize?: number | undefined;
        maxSessionMemory?: number | undefined;
        maxHeaderListPairs?: number | undefined;
        maxOutstandingPings?: number | undefined;
        maxSendHeaderBlockLength?: number | undefined;
        paddingStrategy?: number | undefined;
        peerMaxConcurrentStreams?: number | undefined;
        settings?: Settings | undefined;
        unknownProtocolTimeout?: number | undefined;
        selectPadding?(frameLen: number, maxFrameLen: number): number;
        createConnection?(authority: url.URL, option: SessionOptions): stream.Duplex;
    }
    export interface ClientSessionOptions extends SessionOptions {
        maxReservedRemoteStreams?: number | undefined;
        createConnection?: ((authority: url.URL, option: SessionOptions) => stream.Duplex) | undefined;
        protocol?: 'http:' | 'https:' | undefined;
    }
    export interface ServerSessionOptions extends SessionOptions {
        Http1IncomingMessage?: typeof IncomingMessage | undefined;
        Http1ServerResponse?: typeof ServerResponse | undefined;
        Http2ServerRequest?: typeof Http2ServerRequest | undefined;
        Http2ServerResponse?: typeof Http2ServerResponse | undefined;
    }
    export interface SecureClientSessionOptions extends ClientSessionOptions, tls.ConnectionOptions {}
    export interface SecureServerSessionOptions extends ServerSessionOptions, tls.TlsOptions {}
    export interface ServerOptions extends ServerSessionOptions {}
    export interface SecureServerOptions extends SecureServerSessionOptions {
        allowHTTP1?: boolean | undefined;
        origins?: string[] | undefined;
    }
    interface HTTP2ServerCommon {
        setTimeout(msec?: number, callback?: () => void): this;
        updateSettings(settings: Settings): void;
    }
    export interface Http2Server extends net.Server, HTTP2ServerCommon {
        addListener(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        addListener(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        addListener(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        addListener(event: 'sessionError', listener: (err: Error) => void): this;
        addListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(event: 'timeout', listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'checkContinue', request: Http2ServerRequest, response: Http2ServerResponse): boolean;
        emit(event: 'request', request: Http2ServerRequest, response: Http2ServerResponse): boolean;
        emit(event: 'session', session: ServerHttp2Session): boolean;
        emit(event: 'sessionError', err: Error): boolean;
        emit(event: 'stream', stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: 'timeout'): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        on(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        on(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        on(event: 'sessionError', listener: (err: Error) => void): this;
        on(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        on(event: 'timeout', listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        once(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        once(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        once(event: 'sessionError', listener: (err: Error) => void): this;
        once(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        once(event: 'timeout', listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependListener(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependListener(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        prependListener(event: 'sessionError', listener: (err: Error) => void): this;
        prependListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        prependListener(event: 'timeout', listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependOnceListener(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependOnceListener(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        prependOnceListener(event: 'sessionError', listener: (err: Error) => void): this;
        prependOnceListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        prependOnceListener(event: 'timeout', listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface Http2SecureServer extends tls.Server, HTTP2ServerCommon {
        addListener(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        addListener(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        addListener(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        addListener(event: 'sessionError', listener: (err: Error) => void): this;
        addListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(event: 'timeout', listener: () => void): this;
        addListener(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'checkContinue', request: Http2ServerRequest, response: Http2ServerResponse): boolean;
        emit(event: 'request', request: Http2ServerRequest, response: Http2ServerResponse): boolean;
        emit(event: 'session', session: ServerHttp2Session): boolean;
        emit(event: 'sessionError', err: Error): boolean;
        emit(event: 'stream', stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: 'timeout'): boolean;
        emit(event: 'unknownProtocol', socket: tls.TLSSocket): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        on(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        on(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        on(event: 'sessionError', listener: (err: Error) => void): this;
        on(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        on(event: 'timeout', listener: () => void): this;
        on(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        once(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        once(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        once(event: 'sessionError', listener: (err: Error) => void): this;
        once(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        once(event: 'timeout', listener: () => void): this;
        once(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependListener(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependListener(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        prependListener(event: 'sessionError', listener: (err: Error) => void): this;
        prependListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        prependListener(event: 'timeout', listener: () => void): this;
        prependListener(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'checkContinue', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependOnceListener(event: 'request', listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void): this;
        prependOnceListener(event: 'session', listener: (session: ServerHttp2Session) => void): this;
        prependOnceListener(event: 'sessionError', listener: (err: Error) => void): this;
        prependOnceListener(event: 'stream', listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void): this;
        prependOnceListener(event: 'timeout', listener: () => void): this;
        prependOnceListener(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export class Http2ServerRequest extends stream.Readable {
        constructor(stream: ServerHttp2Stream, headers: IncomingHttpHeaders, options: stream.ReadableOptions, rawHeaders: ReadonlyArray<string>);
        readonly aborted: boolean;
        readonly authority: string;
        readonly connection: net.Socket | tls.TLSSocket;
        readonly complete: boolean;
        readonly headers: IncomingHttpHeaders;
        readonly httpVersion: string;
        readonly httpVersionMinor: number;
        readonly httpVersionMajor: number;
        readonly method: string;
        readonly rawHeaders: string[];
        readonly rawTrailers: string[];
        readonly scheme: string;
        readonly socket: net.Socket | tls.TLSSocket;
        readonly stream: ServerHttp2Stream;
        readonly trailers: IncomingHttpHeaders;
        url: string;
        setTimeout(msecs: number, callback?: () => void): void;
        read(size?: number): Buffer | string | null;
        addListener(event: 'aborted', listener: (hadError: boolean, code: number) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        addListener(event: 'end', listener: () => void): this;
        addListener(event: 'readable', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'aborted', hadError: boolean, code: number): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'data', chunk: Buffer | string): boolean;
        emit(event: 'end'): boolean;
        emit(event: 'readable'): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'aborted', listener: (hadError: boolean, code: number) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'data', listener: (chunk: Buffer | string) => void): this;
        on(event: 'end', listener: () => void): this;
        on(event: 'readable', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'aborted', listener: (hadError: boolean, code: number) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'data', listener: (chunk: Buffer | string) => void): this;
        once(event: 'end', listener: () => void): this;
        once(event: 'readable', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'aborted', listener: (hadError: boolean, code: number) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        prependListener(event: 'end', listener: () => void): this;
        prependListener(event: 'readable', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'aborted', listener: (hadError: boolean, code: number) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
        prependOnceListener(event: 'end', listener: () => void): this;
        prependOnceListener(event: 'readable', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export class Http2ServerResponse extends stream.Writable {
        constructor(stream: ServerHttp2Stream);
        readonly connection: net.Socket | tls.TLSSocket;
        readonly finished: boolean;
        readonly headersSent: boolean;
        readonly req: Http2ServerRequest;
        readonly socket: net.Socket | tls.TLSSocket;
        readonly stream: ServerHttp2Stream;
        sendDate: boolean;
        statusCode: number;
        statusMessage: '';
        addTrailers(trailers: OutgoingHttpHeaders): void;
        end(callback?: () => void): this;
        end(data: string | Uint8Array, callback?: () => void): this;
        end(data: string | Uint8Array, encoding: BufferEncoding, callback?: () => void): this;
        getHeader(name: string): string;
        getHeaderNames(): string[];
        getHeaders(): OutgoingHttpHeaders;
        hasHeader(name: string): boolean;
        removeHeader(name: string): void;
        setHeader(name: string, value: number | string | ReadonlyArray<string>): void;
        setTimeout(msecs: number, callback?: () => void): void;
        write(chunk: string | Uint8Array, callback?: (err: Error) => void): boolean;
        write(chunk: string | Uint8Array, encoding: BufferEncoding, callback?: (err: Error) => void): boolean;
        writeContinue(): void;
        writeHead(statusCode: number, headers?: OutgoingHttpHeaders): this;
        writeHead(statusCode: number, statusMessage: string, headers?: OutgoingHttpHeaders): this;
        createPushResponse(headers: OutgoingHttpHeaders, callback: (err: Error | null, res: Http2ServerResponse) => void): void;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'drain', listener: () => void): this;
        addListener(event: 'error', listener: (error: Error) => void): this;
        addListener(event: 'finish', listener: () => void): this;
        addListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'close'): boolean;
        emit(event: 'drain'): boolean;
        emit(event: 'error', error: Error): boolean;
        emit(event: 'finish'): boolean;
        emit(event: 'pipe', src: stream.Readable): boolean;
        emit(event: 'unpipe', src: stream.Readable): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'close', listener: () => void): this;
        on(event: 'drain', listener: () => void): this;
        on(event: 'error', listener: (error: Error) => void): this;
        on(event: 'finish', listener: () => void): this;
        on(event: 'pipe', listener: (src: stream.Readable) => void): this;
        on(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'drain', listener: () => void): this;
        once(event: 'error', listener: (error: Error) => void): this;
        once(event: 'finish', listener: () => void): this;
        once(event: 'pipe', listener: (src: stream.Readable) => void): this;
        once(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'drain', listener: () => void): this;
        prependListener(event: 'error', listener: (error: Error) => void): this;
        prependListener(event: 'finish', listener: () => void): this;
        prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'drain', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (error: Error) => void): this;
        prependOnceListener(event: 'finish', listener: () => void): this;
        prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export namespace constants {
        const NGHTTP2_SESSION_SERVER: number;
        const NGHTTP2_SESSION_CLIENT: number;
        const NGHTTP2_STREAM_STATE_IDLE: number;
        const NGHTTP2_STREAM_STATE_OPEN: number;
        const NGHTTP2_STREAM_STATE_RESERVED_LOCAL: number;
        const NGHTTP2_STREAM_STATE_RESERVED_REMOTE: number;
        const NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: number;
        const NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: number;
        const NGHTTP2_STREAM_STATE_CLOSED: number;
        const NGHTTP2_NO_ERROR: number;
        const NGHTTP2_PROTOCOL_ERROR: number;
        const NGHTTP2_INTERNAL_ERROR: number;
        const NGHTTP2_FLOW_CONTROL_ERROR: number;
        const NGHTTP2_SETTINGS_TIMEOUT: number;
        const NGHTTP2_STREAM_CLOSED: number;
        const NGHTTP2_FRAME_SIZE_ERROR: number;
        const NGHTTP2_REFUSED_STREAM: number;
        const NGHTTP2_CANCEL: number;
        const NGHTTP2_COMPRESSION_ERROR: number;
        const NGHTTP2_CONNECT_ERROR: number;
        const NGHTTP2_ENHANCE_YOUR_CALM: number;
        const NGHTTP2_INADEQUATE_SECURITY: number;
        const NGHTTP2_HTTP_1_1_REQUIRED: number;
        const NGHTTP2_ERR_FRAME_SIZE_ERROR: number;
        const NGHTTP2_FLAG_NONE: number;
        const NGHTTP2_FLAG_END_STREAM: number;
        const NGHTTP2_FLAG_END_HEADERS: number;
        const NGHTTP2_FLAG_ACK: number;
        const NGHTTP2_FLAG_PADDED: number;
        const NGHTTP2_FLAG_PRIORITY: number;
        const DEFAULT_SETTINGS_HEADER_TABLE_SIZE: number;
        const DEFAULT_SETTINGS_ENABLE_PUSH: number;
        const DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: number;
        const DEFAULT_SETTINGS_MAX_FRAME_SIZE: number;
        const MAX_MAX_FRAME_SIZE: number;
        const MIN_MAX_FRAME_SIZE: number;
        const MAX_INITIAL_WINDOW_SIZE: number;
        const NGHTTP2_DEFAULT_WEIGHT: number;
        const NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: number;
        const NGHTTP2_SETTINGS_ENABLE_PUSH: number;
        const NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: number;
        const NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: number;
        const NGHTTP2_SETTINGS_MAX_FRAME_SIZE: number;
        const NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: number;
        const PADDING_STRATEGY_NONE: number;
        const PADDING_STRATEGY_MAX: number;
        const PADDING_STRATEGY_CALLBACK: number;
        const HTTP2_HEADER_STATUS: string;
        const HTTP2_HEADER_METHOD: string;
        const HTTP2_HEADER_AUTHORITY: string;
        const HTTP2_HEADER_SCHEME: string;
        const HTTP2_HEADER_PATH: string;
        const HTTP2_HEADER_ACCEPT_CHARSET: string;
        const HTTP2_HEADER_ACCEPT_ENCODING: string;
        const HTTP2_HEADER_ACCEPT_LANGUAGE: string;
        const HTTP2_HEADER_ACCEPT_RANGES: string;
        const HTTP2_HEADER_ACCEPT: string;
        const HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: string;
        const HTTP2_HEADER_AGE: string;
        const HTTP2_HEADER_ALLOW: string;
        const HTTP2_HEADER_AUTHORIZATION: string;
        const HTTP2_HEADER_CACHE_CONTROL: string;
        const HTTP2_HEADER_CONNECTION: string;
        const HTTP2_HEADER_CONTENT_DISPOSITION: string;
        const HTTP2_HEADER_CONTENT_ENCODING: string;
        const HTTP2_HEADER_CONTENT_LANGUAGE: string;
        const HTTP2_HEADER_CONTENT_LENGTH: string;
        const HTTP2_HEADER_CONTENT_LOCATION: string;
        const HTTP2_HEADER_CONTENT_MD5: string;
        const HTTP2_HEADER_CONTENT_RANGE: string;
        const HTTP2_HEADER_CONTENT_TYPE: string;
        const HTTP2_HEADER_COOKIE: string;
        const HTTP2_HEADER_DATE: string;
        const HTTP2_HEADER_ETAG: string;
        const HTTP2_HEADER_EXPECT: string;
        const HTTP2_HEADER_EXPIRES: string;
        const HTTP2_HEADER_FROM: string;
        const HTTP2_HEADER_HOST: string;
        const HTTP2_HEADER_IF_MATCH: string;
        const HTTP2_HEADER_IF_MODIFIED_SINCE: string;
        const HTTP2_HEADER_IF_NONE_MATCH: string;
        const HTTP2_HEADER_IF_RANGE: string;
        const HTTP2_HEADER_IF_UNMODIFIED_SINCE: string;
        const HTTP2_HEADER_LAST_MODIFIED: string;
        const HTTP2_HEADER_LINK: string;
        const HTTP2_HEADER_LOCATION: string;
        const HTTP2_HEADER_MAX_FORWARDS: string;
        const HTTP2_HEADER_PREFER: string;
        const HTTP2_HEADER_PROXY_AUTHENTICATE: string;
        const HTTP2_HEADER_PROXY_AUTHORIZATION: string;
        const HTTP2_HEADER_RANGE: string;
        const HTTP2_HEADER_REFERER: string;
        const HTTP2_HEADER_REFRESH: string;
        const HTTP2_HEADER_RETRY_AFTER: string;
        const HTTP2_HEADER_SERVER: string;
        const HTTP2_HEADER_SET_COOKIE: string;
        const HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: string;
        const HTTP2_HEADER_TRANSFER_ENCODING: string;
        const HTTP2_HEADER_TE: string;
        const HTTP2_HEADER_UPGRADE: string;
        const HTTP2_HEADER_USER_AGENT: string;
        const HTTP2_HEADER_VARY: string;
        const HTTP2_HEADER_VIA: string;
        const HTTP2_HEADER_WWW_AUTHENTICATE: string;
        const HTTP2_HEADER_HTTP2_SETTINGS: string;
        const HTTP2_HEADER_KEEP_ALIVE: string;
        const HTTP2_HEADER_PROXY_CONNECTION: string;
        const HTTP2_METHOD_ACL: string;
        const HTTP2_METHOD_BASELINE_CONTROL: string;
        const HTTP2_METHOD_BIND: string;
        const HTTP2_METHOD_CHECKIN: string;
        const HTTP2_METHOD_CHECKOUT: string;
        const HTTP2_METHOD_CONNECT: string;
        const HTTP2_METHOD_COPY: string;
        const HTTP2_METHOD_DELETE: string;
        const HTTP2_METHOD_GET: string;
        const HTTP2_METHOD_HEAD: string;
        const HTTP2_METHOD_LABEL: string;
        const HTTP2_METHOD_LINK: string;
        const HTTP2_METHOD_LOCK: string;
        const HTTP2_METHOD_MERGE: string;
        const HTTP2_METHOD_MKACTIVITY: string;
        const HTTP2_METHOD_MKCALENDAR: string;
        const HTTP2_METHOD_MKCOL: string;
        const HTTP2_METHOD_MKREDIRECTREF: string;
        const HTTP2_METHOD_MKWORKSPACE: string;
        const HTTP2_METHOD_MOVE: string;
        const HTTP2_METHOD_OPTIONS: string;
        const HTTP2_METHOD_ORDERPATCH: string;
        const HTTP2_METHOD_PATCH: string;
        const HTTP2_METHOD_POST: string;
        const HTTP2_METHOD_PRI: string;
        const HTTP2_METHOD_PROPFIND: string;
        const HTTP2_METHOD_PROPPATCH: string;
        const HTTP2_METHOD_PUT: string;
        const HTTP2_METHOD_REBIND: string;
        const HTTP2_METHOD_REPORT: string;
        const HTTP2_METHOD_SEARCH: string;
        const HTTP2_METHOD_TRACE: string;
        const HTTP2_METHOD_UNBIND: string;
        const HTTP2_METHOD_UNCHECKOUT: string;
        const HTTP2_METHOD_UNLINK: string;
        const HTTP2_METHOD_UNLOCK: string;
        const HTTP2_METHOD_UPDATE: string;
        const HTTP2_METHOD_UPDATEREDIRECTREF: string;
        const HTTP2_METHOD_VERSION_CONTROL: string;
        const HTTP_STATUS_CONTINUE: number;
        const HTTP_STATUS_SWITCHING_PROTOCOLS: number;
        const HTTP_STATUS_PROCESSING: number;
        const HTTP_STATUS_OK: number;
        const HTTP_STATUS_CREATED: number;
        const HTTP_STATUS_ACCEPTED: number;
        const HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: number;
        const HTTP_STATUS_NO_CONTENT: number;
        const HTTP_STATUS_RESET_CONTENT: number;
        const HTTP_STATUS_PARTIAL_CONTENT: number;
        const HTTP_STATUS_MULTI_STATUS: number;
        const HTTP_STATUS_ALREADY_REPORTED: number;
        const HTTP_STATUS_IM_USED: number;
        const HTTP_STATUS_MULTIPLE_CHOICES: number;
        const HTTP_STATUS_MOVED_PERMANENTLY: number;
        const HTTP_STATUS_FOUND: number;
        const HTTP_STATUS_SEE_OTHER: number;
        const HTTP_STATUS_NOT_MODIFIED: number;
        const HTTP_STATUS_USE_PROXY: number;
        const HTTP_STATUS_TEMPORARY_REDIRECT: number;
        const HTTP_STATUS_PERMANENT_REDIRECT: number;
        const HTTP_STATUS_BAD_REQUEST: number;
        const HTTP_STATUS_UNAUTHORIZED: number;
        const HTTP_STATUS_PAYMENT_REQUIRED: number;
        const HTTP_STATUS_FORBIDDEN: number;
        const HTTP_STATUS_NOT_FOUND: number;
        const HTTP_STATUS_METHOD_NOT_ALLOWED: number;
        const HTTP_STATUS_NOT_ACCEPTABLE: number;
        const HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: number;
        const HTTP_STATUS_REQUEST_TIMEOUT: number;
        const HTTP_STATUS_CONFLICT: number;
        const HTTP_STATUS_GONE: number;
        const HTTP_STATUS_LENGTH_REQUIRED: number;
        const HTTP_STATUS_PRECONDITION_FAILED: number;
        const HTTP_STATUS_PAYLOAD_TOO_LARGE: number;
        const HTTP_STATUS_URI_TOO_LONG: number;
        const HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: number;
        const HTTP_STATUS_RANGE_NOT_SATISFIABLE: number;
        const HTTP_STATUS_EXPECTATION_FAILED: number;
        const HTTP_STATUS_TEAPOT: number;
        const HTTP_STATUS_MISDIRECTED_REQUEST: number;
        const HTTP_STATUS_UNPROCESSABLE_ENTITY: number;
        const HTTP_STATUS_LOCKED: number;
        const HTTP_STATUS_FAILED_DEPENDENCY: number;
        const HTTP_STATUS_UNORDERED_COLLECTION: number;
        const HTTP_STATUS_UPGRADE_REQUIRED: number;
        const HTTP_STATUS_PRECONDITION_REQUIRED: number;
        const HTTP_STATUS_TOO_MANY_REQUESTS: number;
        const HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: number;
        const HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: number;
        const HTTP_STATUS_INTERNAL_SERVER_ERROR: number;
        const HTTP_STATUS_NOT_IMPLEMENTED: number;
        const HTTP_STATUS_BAD_GATEWAY: number;
        const HTTP_STATUS_SERVICE_UNAVAILABLE: number;
        const HTTP_STATUS_GATEWAY_TIMEOUT: number;
        const HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: number;
        const HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: number;
        const HTTP_STATUS_INSUFFICIENT_STORAGE: number;
        const HTTP_STATUS_LOOP_DETECTED: number;
        const HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: number;
        const HTTP_STATUS_NOT_EXTENDED: number;
        const HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: number;
    }
    export const sensitiveHeaders: symbol;
    export function getDefaultSettings(): Settings;
    export function getPackedSettings(settings: Settings): Buffer;
    export function getUnpackedSettings(buf: Uint8Array): Settings;
    export function createServer(onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2Server;
    export function createServer(options: ServerOptions, onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2Server;
    export function createSecureServer(onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2SecureServer;
    export function createSecureServer(options: SecureServerOptions, onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void): Http2SecureServer;
    export function connect(authority: string | url.URL, listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): ClientHttp2Session;
    export function connect(
        authority: string | url.URL,
        options?: ClientSessionOptions | SecureClientSessionOptions,
        listener?: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): ClientHttp2Session;
}
declare module 'node:http2' {
    export * from 'http2';
}
declare module 'https' {
    import { Duplex } from 'node:stream';
    import * as tls from 'node:tls';
    import * as http from 'node:http';
    import { URL } from 'node:url';
    type ServerOptions = tls.SecureContextOptions & tls.TlsOptions & http.ServerOptions;
    type RequestOptions = http.RequestOptions &
        tls.SecureContextOptions & {
            rejectUnauthorized?: boolean | undefined;
            servername?: string | undefined;
        };
    interface AgentOptions extends http.AgentOptions, tls.ConnectionOptions {
        rejectUnauthorized?: boolean | undefined;
        maxCachedSessions?: number | undefined;
    }
    class Agent extends http.Agent {
        constructor(options?: AgentOptions);
        options: AgentOptions;
    }
    interface Server extends http.Server {}
    class Server extends tls.Server {
        constructor(requestListener?: http.RequestListener);
        constructor(options: ServerOptions, requestListener?: http.RequestListener);
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        addListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        addListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        addListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'connection', listener: (socket: Duplex) => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'listening', listener: () => void): this;
        addListener(event: 'checkContinue', listener: http.RequestListener): this;
        addListener(event: 'checkExpectation', listener: http.RequestListener): this;
        addListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        addListener(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        addListener(event: 'request', listener: http.RequestListener): this;
        addListener(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        emit(event: string, ...args: any[]): boolean;
        emit(event: 'keylog', line: Buffer, tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'newSession', sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void): boolean;
        emit(event: 'OCSPRequest', certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void): boolean;
        emit(event: 'resumeSession', sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void): boolean;
        emit(event: 'secureConnection', tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'tlsClientError', err: Error, tlsSocket: tls.TLSSocket): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'connection', socket: Duplex): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'listening'): boolean;
        emit(event: 'checkContinue', req: http.IncomingMessage, res: http.ServerResponse): boolean;
        emit(event: 'checkExpectation', req: http.IncomingMessage, res: http.ServerResponse): boolean;
        emit(event: 'clientError', err: Error, socket: Duplex): boolean;
        emit(event: 'connect', req: http.IncomingMessage, socket: Duplex, head: Buffer): boolean;
        emit(event: 'request', req: http.IncomingMessage, res: http.ServerResponse): boolean;
        emit(event: 'upgrade', req: http.IncomingMessage, socket: Duplex, head: Buffer): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        on(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        on(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        on(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'connection', listener: (socket: Duplex) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'listening', listener: () => void): this;
        on(event: 'checkContinue', listener: http.RequestListener): this;
        on(event: 'checkExpectation', listener: http.RequestListener): this;
        on(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        on(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        on(event: 'request', listener: http.RequestListener): this;
        on(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        once(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        once(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        once(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'connection', listener: (socket: Duplex) => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'listening', listener: () => void): this;
        once(event: 'checkContinue', listener: http.RequestListener): this;
        once(event: 'checkExpectation', listener: http.RequestListener): this;
        once(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        once(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        once(event: 'request', listener: http.RequestListener): this;
        once(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        prependListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        prependListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'connection', listener: (socket: Duplex) => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'listening', listener: () => void): this;
        prependListener(event: 'checkContinue', listener: http.RequestListener): this;
        prependListener(event: 'checkExpectation', listener: http.RequestListener): this;
        prependListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        prependListener(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependListener(event: 'request', listener: http.RequestListener): this;
        prependListener(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependOnceListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        prependOnceListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        prependOnceListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'connection', listener: (socket: Duplex) => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'listening', listener: () => void): this;
        prependOnceListener(event: 'checkContinue', listener: http.RequestListener): this;
        prependOnceListener(event: 'checkExpectation', listener: http.RequestListener): this;
        prependOnceListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this;
        prependOnceListener(event: 'connect', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
        prependOnceListener(event: 'request', listener: http.RequestListener): this;
        prependOnceListener(event: 'upgrade', listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void): this;
    }
    function createServer(requestListener?: http.RequestListener): Server;
    function createServer(options: ServerOptions, requestListener?: http.RequestListener): Server;
    function request(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function request(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    function get(url: string | URL, options: RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
    let globalAgent: Agent;
}
declare module 'node:https' {
    export * from 'https';
}
declare module 'inspector' {
    import EventEmitter = require('node:events');
    interface InspectorNotification<T> {
        method: string;
        params: T;
    }
    namespace Schema {
        interface Domain {
            name: string;
            version: string;
        }
        interface GetDomainsReturnType {
            domains: Domain[];
        }
    }
    namespace Runtime {
        type ScriptId = string;
        type RemoteObjectId = string;
        type UnserializableValue = string;
        interface RemoteObject {
            type: string;
            subtype?: string | undefined;
            className?: string | undefined;
            value?: any;
            unserializableValue?: UnserializableValue | undefined;
            description?: string | undefined;
            objectId?: RemoteObjectId | undefined;
            preview?: ObjectPreview | undefined;
            customPreview?: CustomPreview | undefined;
        }
        interface CustomPreview {
            header: string;
            hasBody: boolean;
            formatterObjectId: RemoteObjectId;
            bindRemoteObjectFunctionId: RemoteObjectId;
            configObjectId?: RemoteObjectId | undefined;
        }
        interface ObjectPreview {
            type: string;
            subtype?: string | undefined;
            description?: string | undefined;
            overflow: boolean;
            properties: PropertyPreview[];
            entries?: EntryPreview[] | undefined;
        }
        interface PropertyPreview {
            name: string;
            type: string;
            value?: string | undefined;
            valuePreview?: ObjectPreview | undefined;
            subtype?: string | undefined;
        }
        interface EntryPreview {
            key?: ObjectPreview | undefined;
            value: ObjectPreview;
        }
        interface PropertyDescriptor {
            name: string;
            value?: RemoteObject | undefined;
            writable?: boolean | undefined;
            get?: RemoteObject | undefined;
            set?: RemoteObject | undefined;
            configurable: boolean;
            enumerable: boolean;
            wasThrown?: boolean | undefined;
            isOwn?: boolean | undefined;
            symbol?: RemoteObject | undefined;
        }
        interface InternalPropertyDescriptor {
            name: string;
            value?: RemoteObject | undefined;
        }
        interface CallArgument {
            value?: any;
            unserializableValue?: UnserializableValue | undefined;
            objectId?: RemoteObjectId | undefined;
        }
        type ExecutionContextId = number;
        interface ExecutionContextDescription {
            id: ExecutionContextId;
            origin: string;
            name: string;
            auxData?: {} | undefined;
        }
        interface ExceptionDetails {
            exceptionId: number;
            text: string;
            lineNumber: number;
            columnNumber: number;
            scriptId?: ScriptId | undefined;
            url?: string | undefined;
            stackTrace?: StackTrace | undefined;
            exception?: RemoteObject | undefined;
            executionContextId?: ExecutionContextId | undefined;
        }
        type Timestamp = number;
        interface CallFrame {
            functionName: string;
            scriptId: ScriptId;
            url: string;
            lineNumber: number;
            columnNumber: number;
        }
        interface StackTrace {
            description?: string | undefined;
            callFrames: CallFrame[];
            parent?: StackTrace | undefined;
            parentId?: StackTraceId | undefined;
        }
        type UniqueDebuggerId = string;
        interface StackTraceId {
            id: string;
            debuggerId?: UniqueDebuggerId | undefined;
        }
        interface EvaluateParameterType {
            expression: string;
            objectGroup?: string | undefined;
            includeCommandLineAPI?: boolean | undefined;
            silent?: boolean | undefined;
            contextId?: ExecutionContextId | undefined;
            returnByValue?: boolean | undefined;
            generatePreview?: boolean | undefined;
            userGesture?: boolean | undefined;
            awaitPromise?: boolean | undefined;
        }
        interface AwaitPromiseParameterType {
            promiseObjectId: RemoteObjectId;
            returnByValue?: boolean | undefined;
            generatePreview?: boolean | undefined;
        }
        interface CallFunctionOnParameterType {
            functionDeclaration: string;
            objectId?: RemoteObjectId | undefined;
            arguments?: CallArgument[] | undefined;
            silent?: boolean | undefined;
            returnByValue?: boolean | undefined;
            generatePreview?: boolean | undefined;
            userGesture?: boolean | undefined;
            awaitPromise?: boolean | undefined;
            executionContextId?: ExecutionContextId | undefined;
            objectGroup?: string | undefined;
        }
        interface GetPropertiesParameterType {
            objectId: RemoteObjectId;
            ownProperties?: boolean | undefined;
            accessorPropertiesOnly?: boolean | undefined;
            generatePreview?: boolean | undefined;
        }
        interface ReleaseObjectParameterType {
            objectId: RemoteObjectId;
        }
        interface ReleaseObjectGroupParameterType {
            objectGroup: string;
        }
        interface SetCustomObjectFormatterEnabledParameterType {
            enabled: boolean;
        }
        interface CompileScriptParameterType {
            expression: string;
            sourceURL: string;
            persistScript: boolean;
            executionContextId?: ExecutionContextId | undefined;
        }
        interface RunScriptParameterType {
            scriptId: ScriptId;
            executionContextId?: ExecutionContextId | undefined;
            objectGroup?: string | undefined;
            silent?: boolean | undefined;
            includeCommandLineAPI?: boolean | undefined;
            returnByValue?: boolean | undefined;
            generatePreview?: boolean | undefined;
            awaitPromise?: boolean | undefined;
        }
        interface QueryObjectsParameterType {
            prototypeObjectId: RemoteObjectId;
        }
        interface GlobalLexicalScopeNamesParameterType {
            executionContextId?: ExecutionContextId | undefined;
        }
        interface EvaluateReturnType {
            result: RemoteObject;
            exceptionDetails?: ExceptionDetails | undefined;
        }
        interface AwaitPromiseReturnType {
            result: RemoteObject;
            exceptionDetails?: ExceptionDetails | undefined;
        }
        interface CallFunctionOnReturnType {
            result: RemoteObject;
            exceptionDetails?: ExceptionDetails | undefined;
        }
        interface GetPropertiesReturnType {
            result: PropertyDescriptor[];
            internalProperties?: InternalPropertyDescriptor[] | undefined;
            exceptionDetails?: ExceptionDetails | undefined;
        }
        interface CompileScriptReturnType {
            scriptId?: ScriptId | undefined;
            exceptionDetails?: ExceptionDetails | undefined;
        }
        interface RunScriptReturnType {
            result: RemoteObject;
            exceptionDetails?: ExceptionDetails | undefined;
        }
        interface QueryObjectsReturnType {
            objects: RemoteObject;
        }
        interface GlobalLexicalScopeNamesReturnType {
            names: string[];
        }
        interface ExecutionContextCreatedEventDataType {
            context: ExecutionContextDescription;
        }
        interface ExecutionContextDestroyedEventDataType {
            executionContextId: ExecutionContextId;
        }
        interface ExceptionThrownEventDataType {
            timestamp: Timestamp;
            exceptionDetails: ExceptionDetails;
        }
        interface ExceptionRevokedEventDataType {
            reason: string;
            exceptionId: number;
        }
        interface ConsoleAPICalledEventDataType {
            type: string;
            args: RemoteObject[];
            executionContextId: ExecutionContextId;
            timestamp: Timestamp;
            stackTrace?: StackTrace | undefined;
            context?: string | undefined;
        }
        interface InspectRequestedEventDataType {
            object: RemoteObject;
            hints: {};
        }
    }
    namespace Debugger {
        type BreakpointId = string;
        type CallFrameId = string;
        interface Location {
            scriptId: Runtime.ScriptId;
            lineNumber: number;
            columnNumber?: number | undefined;
        }
        interface ScriptPosition {
            lineNumber: number;
            columnNumber: number;
        }
        interface CallFrame {
            callFrameId: CallFrameId;
            functionName: string;
            functionLocation?: Location | undefined;
            location: Location;
            url: string;
            scopeChain: Scope[];
            this: Runtime.RemoteObject;
            returnValue?: Runtime.RemoteObject | undefined;
        }
        interface Scope {
            type: string;
            object: Runtime.RemoteObject;
            name?: string | undefined;
            startLocation?: Location | undefined;
            endLocation?: Location | undefined;
        }
        interface SearchMatch {
            lineNumber: number;
            lineContent: string;
        }
        interface BreakLocation {
            scriptId: Runtime.ScriptId;
            lineNumber: number;
            columnNumber?: number | undefined;
            type?: string | undefined;
        }
        interface SetBreakpointsActiveParameterType {
            active: boolean;
        }
        interface SetSkipAllPausesParameterType {
            skip: boolean;
        }
        interface SetBreakpointByUrlParameterType {
            lineNumber: number;
            url?: string | undefined;
            urlRegex?: string | undefined;
            scriptHash?: string | undefined;
            columnNumber?: number | undefined;
            condition?: string | undefined;
        }
        interface SetBreakpointParameterType {
            location: Location;
            condition?: string | undefined;
        }
        interface RemoveBreakpointParameterType {
            breakpointId: BreakpointId;
        }
        interface GetPossibleBreakpointsParameterType {
            start: Location;
            end?: Location | undefined;
            restrictToFunction?: boolean | undefined;
        }
        interface ContinueToLocationParameterType {
            location: Location;
            targetCallFrames?: string | undefined;
        }
        interface PauseOnAsyncCallParameterType {
            parentStackTraceId: Runtime.StackTraceId;
        }
        interface StepIntoParameterType {
            breakOnAsyncCall?: boolean | undefined;
        }
        interface GetStackTraceParameterType {
            stackTraceId: Runtime.StackTraceId;
        }
        interface SearchInContentParameterType {
            scriptId: Runtime.ScriptId;
            query: string;
            caseSensitive?: boolean | undefined;
            isRegex?: boolean | undefined;
        }
        interface SetScriptSourceParameterType {
            scriptId: Runtime.ScriptId;
            scriptSource: string;
            dryRun?: boolean | undefined;
        }
        interface RestartFrameParameterType {
            callFrameId: CallFrameId;
        }
        interface GetScriptSourceParameterType {
            scriptId: Runtime.ScriptId;
        }
        interface SetPauseOnExceptionsParameterType {
            state: string;
        }
        interface EvaluateOnCallFrameParameterType {
            callFrameId: CallFrameId;
            expression: string;
            objectGroup?: string | undefined;
            includeCommandLineAPI?: boolean | undefined;
            silent?: boolean | undefined;
            returnByValue?: boolean | undefined;
            generatePreview?: boolean | undefined;
            throwOnSideEffect?: boolean | undefined;
        }
        interface SetVariableValueParameterType {
            scopeNumber: number;
            variableName: string;
            newValue: Runtime.CallArgument;
            callFrameId: CallFrameId;
        }
        interface SetReturnValueParameterType {
            newValue: Runtime.CallArgument;
        }
        interface SetAsyncCallStackDepthParameterType {
            maxDepth: number;
        }
        interface SetBlackboxPatternsParameterType {
            patterns: string[];
        }
        interface SetBlackboxedRangesParameterType {
            scriptId: Runtime.ScriptId;
            positions: ScriptPosition[];
        }
        interface EnableReturnType {
            debuggerId: Runtime.UniqueDebuggerId;
        }
        interface SetBreakpointByUrlReturnType {
            breakpointId: BreakpointId;
            locations: Location[];
        }
        interface SetBreakpointReturnType {
            breakpointId: BreakpointId;
            actualLocation: Location;
        }
        interface GetPossibleBreakpointsReturnType {
            locations: BreakLocation[];
        }
        interface GetStackTraceReturnType {
            stackTrace: Runtime.StackTrace;
        }
        interface SearchInContentReturnType {
            result: SearchMatch[];
        }
        interface SetScriptSourceReturnType {
            callFrames?: CallFrame[] | undefined;
            stackChanged?: boolean | undefined;
            asyncStackTrace?: Runtime.StackTrace | undefined;
            asyncStackTraceId?: Runtime.StackTraceId | undefined;
            exceptionDetails?: Runtime.ExceptionDetails | undefined;
        }
        interface RestartFrameReturnType {
            callFrames: CallFrame[];
            asyncStackTrace?: Runtime.StackTrace | undefined;
            asyncStackTraceId?: Runtime.StackTraceId | undefined;
        }
        interface GetScriptSourceReturnType {
            scriptSource: string;
        }
        interface EvaluateOnCallFrameReturnType {
            result: Runtime.RemoteObject;
            exceptionDetails?: Runtime.ExceptionDetails | undefined;
        }
        interface ScriptParsedEventDataType {
            scriptId: Runtime.ScriptId;
            url: string;
            startLine: number;
            startColumn: number;
            endLine: number;
            endColumn: number;
            executionContextId: Runtime.ExecutionContextId;
            hash: string;
            executionContextAuxData?: {} | undefined;
            isLiveEdit?: boolean | undefined;
            sourceMapURL?: string | undefined;
            hasSourceURL?: boolean | undefined;
            isModule?: boolean | undefined;
            length?: number | undefined;
            stackTrace?: Runtime.StackTrace | undefined;
        }
        interface ScriptFailedToParseEventDataType {
            scriptId: Runtime.ScriptId;
            url: string;
            startLine: number;
            startColumn: number;
            endLine: number;
            endColumn: number;
            executionContextId: Runtime.ExecutionContextId;
            hash: string;
            executionContextAuxData?: {} | undefined;
            sourceMapURL?: string | undefined;
            hasSourceURL?: boolean | undefined;
            isModule?: boolean | undefined;
            length?: number | undefined;
            stackTrace?: Runtime.StackTrace | undefined;
        }
        interface BreakpointResolvedEventDataType {
            breakpointId: BreakpointId;
            location: Location;
        }
        interface PausedEventDataType {
            callFrames: CallFrame[];
            reason: string;
            data?: {} | undefined;
            hitBreakpoints?: string[] | undefined;
            asyncStackTrace?: Runtime.StackTrace | undefined;
            asyncStackTraceId?: Runtime.StackTraceId | undefined;
            asyncCallStackTraceId?: Runtime.StackTraceId | undefined;
        }
    }
    namespace Console {
        interface ConsoleMessage {
            source: string;
            level: string;
            text: string;
            url?: string | undefined;
            line?: number | undefined;
            column?: number | undefined;
        }
        interface MessageAddedEventDataType {
            message: ConsoleMessage;
        }
    }
    namespace Profiler {
        interface ProfileNode {
            id: number;
            callFrame: Runtime.CallFrame;
            hitCount?: number | undefined;
            children?: number[] | undefined;
            deoptReason?: string | undefined;
            positionTicks?: PositionTickInfo[] | undefined;
        }
        interface Profile {
            nodes: ProfileNode[];
            startTime: number;
            endTime: number;
            samples?: number[] | undefined;
            timeDeltas?: number[] | undefined;
        }
        interface PositionTickInfo {
            line: number;
            ticks: number;
        }
        interface CoverageRange {
            startOffset: number;
            endOffset: number;
            count: number;
        }
        interface FunctionCoverage {
            functionName: string;
            ranges: CoverageRange[];
            isBlockCoverage: boolean;
        }
        interface ScriptCoverage {
            scriptId: Runtime.ScriptId;
            url: string;
            functions: FunctionCoverage[];
        }
        interface TypeObject {
            name: string;
        }
        interface TypeProfileEntry {
            offset: number;
            types: TypeObject[];
        }
        interface ScriptTypeProfile {
            scriptId: Runtime.ScriptId;
            url: string;
            entries: TypeProfileEntry[];
        }
        interface SetSamplingIntervalParameterType {
            interval: number;
        }
        interface StartPreciseCoverageParameterType {
            callCount?: boolean | undefined;
            detailed?: boolean | undefined;
        }
        interface StopReturnType {
            profile: Profile;
        }
        interface TakePreciseCoverageReturnType {
            result: ScriptCoverage[];
        }
        interface GetBestEffortCoverageReturnType {
            result: ScriptCoverage[];
        }
        interface TakeTypeProfileReturnType {
            result: ScriptTypeProfile[];
        }
        interface ConsoleProfileStartedEventDataType {
            id: string;
            location: Debugger.Location;
            title?: string | undefined;
        }
        interface ConsoleProfileFinishedEventDataType {
            id: string;
            location: Debugger.Location;
            profile: Profile;
            title?: string | undefined;
        }
    }
    namespace HeapProfiler {
        type HeapSnapshotObjectId = string;
        interface SamplingHeapProfileNode {
            callFrame: Runtime.CallFrame;
            selfSize: number;
            children: SamplingHeapProfileNode[];
        }
        interface SamplingHeapProfile {
            head: SamplingHeapProfileNode;
        }
        interface StartTrackingHeapObjectsParameterType {
            trackAllocations?: boolean | undefined;
        }
        interface StopTrackingHeapObjectsParameterType {
            reportProgress?: boolean | undefined;
        }
        interface TakeHeapSnapshotParameterType {
            reportProgress?: boolean | undefined;
        }
        interface GetObjectByHeapObjectIdParameterType {
            objectId: HeapSnapshotObjectId;
            objectGroup?: string | undefined;
        }
        interface AddInspectedHeapObjectParameterType {
            heapObjectId: HeapSnapshotObjectId;
        }
        interface GetHeapObjectIdParameterType {
            objectId: Runtime.RemoteObjectId;
        }
        interface StartSamplingParameterType {
            samplingInterval?: number | undefined;
        }
        interface GetObjectByHeapObjectIdReturnType {
            result: Runtime.RemoteObject;
        }
        interface GetHeapObjectIdReturnType {
            heapSnapshotObjectId: HeapSnapshotObjectId;
        }
        interface StopSamplingReturnType {
            profile: SamplingHeapProfile;
        }
        interface GetSamplingProfileReturnType {
            profile: SamplingHeapProfile;
        }
        interface AddHeapSnapshotChunkEventDataType {
            chunk: string;
        }
        interface ReportHeapSnapshotProgressEventDataType {
            done: number;
            total: number;
            finished?: boolean | undefined;
        }
        interface LastSeenObjectIdEventDataType {
            lastSeenObjectId: number;
            timestamp: number;
        }
        interface HeapStatsUpdateEventDataType {
            statsUpdate: number[];
        }
    }
    namespace NodeTracing {
        interface TraceConfig {
            recordMode?: string;
            includedCategories: string[];
        }
        interface StartParameterType {
            traceConfig: TraceConfig;
        }
        interface GetCategoriesReturnType {
            categories: string[];
        }
        interface DataCollectedEventDataType {
            value: Array<{}>;
        }
    }
    namespace NodeWorker {
        type WorkerID = string;
        type SessionID = string;
        interface WorkerInfo {
            workerId: WorkerID;
            type: string;
            title: string;
            url: string;
        }
        interface SendMessageToWorkerParameterType {
            message: string;
            sessionId: SessionID;
        }
        interface EnableParameterType {
            waitForDebuggerOnStart: boolean;
        }
        interface DetachParameterType {
            sessionId: SessionID;
        }
        interface AttachedToWorkerEventDataType {
            sessionId: SessionID;
            workerInfo: WorkerInfo;
            waitingForDebugger: boolean;
        }
        interface DetachedFromWorkerEventDataType {
            sessionId: SessionID;
        }
        interface ReceivedMessageFromWorkerEventDataType {
            sessionId: SessionID;
            message: string;
        }
    }
    namespace NodeRuntime {
        interface NotifyWhenWaitingForDisconnectParameterType {
            enabled: boolean;
        }
    }
    class Session extends EventEmitter {
        constructor();
        connect(): void;
        connectToMainThread(): void;
        disconnect(): void;
        post(method: string, params?: {}, callback?: (err: Error | null, params?: {}) => void): void;
        post(method: string, callback?: (err: Error | null, params?: {}) => void): void;
        post(method: 'Schema.getDomains', callback?: (err: Error | null, params: Schema.GetDomainsReturnType) => void): void;
        post(method: 'Runtime.evaluate', params?: Runtime.EvaluateParameterType, callback?: (err: Error | null, params: Runtime.EvaluateReturnType) => void): void;
        post(method: 'Runtime.evaluate', callback?: (err: Error | null, params: Runtime.EvaluateReturnType) => void): void;
        post(method: 'Runtime.awaitPromise', params?: Runtime.AwaitPromiseParameterType, callback?: (err: Error | null, params: Runtime.AwaitPromiseReturnType) => void): void;
        post(method: 'Runtime.awaitPromise', callback?: (err: Error | null, params: Runtime.AwaitPromiseReturnType) => void): void;
        post(method: 'Runtime.callFunctionOn', params?: Runtime.CallFunctionOnParameterType, callback?: (err: Error | null, params: Runtime.CallFunctionOnReturnType) => void): void;
        post(method: 'Runtime.callFunctionOn', callback?: (err: Error | null, params: Runtime.CallFunctionOnReturnType) => void): void;
        post(method: 'Runtime.getProperties', params?: Runtime.GetPropertiesParameterType, callback?: (err: Error | null, params: Runtime.GetPropertiesReturnType) => void): void;
        post(method: 'Runtime.getProperties', callback?: (err: Error | null, params: Runtime.GetPropertiesReturnType) => void): void;
        post(method: 'Runtime.releaseObject', params?: Runtime.ReleaseObjectParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.releaseObject', callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.releaseObjectGroup', params?: Runtime.ReleaseObjectGroupParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.releaseObjectGroup', callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.runIfWaitingForDebugger', callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.enable', callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.disable', callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.discardConsoleEntries', callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.setCustomObjectFormatterEnabled', params?: Runtime.SetCustomObjectFormatterEnabledParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.setCustomObjectFormatterEnabled', callback?: (err: Error | null) => void): void;
        post(method: 'Runtime.compileScript', params?: Runtime.CompileScriptParameterType, callback?: (err: Error | null, params: Runtime.CompileScriptReturnType) => void): void;
        post(method: 'Runtime.compileScript', callback?: (err: Error | null, params: Runtime.CompileScriptReturnType) => void): void;
        post(method: 'Runtime.runScript', params?: Runtime.RunScriptParameterType, callback?: (err: Error | null, params: Runtime.RunScriptReturnType) => void): void;
        post(method: 'Runtime.runScript', callback?: (err: Error | null, params: Runtime.RunScriptReturnType) => void): void;
        post(method: 'Runtime.queryObjects', params?: Runtime.QueryObjectsParameterType, callback?: (err: Error | null, params: Runtime.QueryObjectsReturnType) => void): void;
        post(method: 'Runtime.queryObjects', callback?: (err: Error | null, params: Runtime.QueryObjectsReturnType) => void): void;
        post(
            method: 'Runtime.globalLexicalScopeNames',
            params?: Runtime.GlobalLexicalScopeNamesParameterType,
            callback?: (err: Error | null, params: Runtime.GlobalLexicalScopeNamesReturnType) => void
        ): void;
        post(method: 'Runtime.globalLexicalScopeNames', callback?: (err: Error | null, params: Runtime.GlobalLexicalScopeNamesReturnType) => void): void;
        post(method: 'Debugger.enable', callback?: (err: Error | null, params: Debugger.EnableReturnType) => void): void;
        post(method: 'Debugger.disable', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setBreakpointsActive', params?: Debugger.SetBreakpointsActiveParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setBreakpointsActive', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setSkipAllPauses', params?: Debugger.SetSkipAllPausesParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setSkipAllPauses', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setBreakpointByUrl', params?: Debugger.SetBreakpointByUrlParameterType, callback?: (err: Error | null, params: Debugger.SetBreakpointByUrlReturnType) => void): void;
        post(method: 'Debugger.setBreakpointByUrl', callback?: (err: Error | null, params: Debugger.SetBreakpointByUrlReturnType) => void): void;
        post(method: 'Debugger.setBreakpoint', params?: Debugger.SetBreakpointParameterType, callback?: (err: Error | null, params: Debugger.SetBreakpointReturnType) => void): void;
        post(method: 'Debugger.setBreakpoint', callback?: (err: Error | null, params: Debugger.SetBreakpointReturnType) => void): void;
        post(method: 'Debugger.removeBreakpoint', params?: Debugger.RemoveBreakpointParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.removeBreakpoint', callback?: (err: Error | null) => void): void;
        post(
            method: 'Debugger.getPossibleBreakpoints',
            params?: Debugger.GetPossibleBreakpointsParameterType,
            callback?: (err: Error | null, params: Debugger.GetPossibleBreakpointsReturnType) => void
        ): void;
        post(method: 'Debugger.getPossibleBreakpoints', callback?: (err: Error | null, params: Debugger.GetPossibleBreakpointsReturnType) => void): void;
        post(method: 'Debugger.continueToLocation', params?: Debugger.ContinueToLocationParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.continueToLocation', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.pauseOnAsyncCall', params?: Debugger.PauseOnAsyncCallParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.pauseOnAsyncCall', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.stepOver', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.stepInto', params?: Debugger.StepIntoParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.stepInto', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.stepOut', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.pause', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.scheduleStepIntoAsync', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.resume', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.getStackTrace', params?: Debugger.GetStackTraceParameterType, callback?: (err: Error | null, params: Debugger.GetStackTraceReturnType) => void): void;
        post(method: 'Debugger.getStackTrace', callback?: (err: Error | null, params: Debugger.GetStackTraceReturnType) => void): void;
        post(method: 'Debugger.searchInContent', params?: Debugger.SearchInContentParameterType, callback?: (err: Error | null, params: Debugger.SearchInContentReturnType) => void): void;
        post(method: 'Debugger.searchInContent', callback?: (err: Error | null, params: Debugger.SearchInContentReturnType) => void): void;
        post(method: 'Debugger.setScriptSource', params?: Debugger.SetScriptSourceParameterType, callback?: (err: Error | null, params: Debugger.SetScriptSourceReturnType) => void): void;
        post(method: 'Debugger.setScriptSource', callback?: (err: Error | null, params: Debugger.SetScriptSourceReturnType) => void): void;
        post(method: 'Debugger.restartFrame', params?: Debugger.RestartFrameParameterType, callback?: (err: Error | null, params: Debugger.RestartFrameReturnType) => void): void;
        post(method: 'Debugger.restartFrame', callback?: (err: Error | null, params: Debugger.RestartFrameReturnType) => void): void;
        post(method: 'Debugger.getScriptSource', params?: Debugger.GetScriptSourceParameterType, callback?: (err: Error | null, params: Debugger.GetScriptSourceReturnType) => void): void;
        post(method: 'Debugger.getScriptSource', callback?: (err: Error | null, params: Debugger.GetScriptSourceReturnType) => void): void;
        post(method: 'Debugger.setPauseOnExceptions', params?: Debugger.SetPauseOnExceptionsParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setPauseOnExceptions', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.evaluateOnCallFrame', params?: Debugger.EvaluateOnCallFrameParameterType, callback?: (err: Error | null, params: Debugger.EvaluateOnCallFrameReturnType) => void): void;
        post(method: 'Debugger.evaluateOnCallFrame', callback?: (err: Error | null, params: Debugger.EvaluateOnCallFrameReturnType) => void): void;
        post(method: 'Debugger.setVariableValue', params?: Debugger.SetVariableValueParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setVariableValue', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setReturnValue', params?: Debugger.SetReturnValueParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setReturnValue', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setAsyncCallStackDepth', params?: Debugger.SetAsyncCallStackDepthParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setAsyncCallStackDepth', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setBlackboxPatterns', params?: Debugger.SetBlackboxPatternsParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setBlackboxPatterns', callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setBlackboxedRanges', params?: Debugger.SetBlackboxedRangesParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Debugger.setBlackboxedRanges', callback?: (err: Error | null) => void): void;
        post(method: 'Console.enable', callback?: (err: Error | null) => void): void;
        post(method: 'Console.disable', callback?: (err: Error | null) => void): void;
        post(method: 'Console.clearMessages', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.enable', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.disable', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.setSamplingInterval', params?: Profiler.SetSamplingIntervalParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.setSamplingInterval', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.start', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.stop', callback?: (err: Error | null, params: Profiler.StopReturnType) => void): void;
        post(method: 'Profiler.startPreciseCoverage', params?: Profiler.StartPreciseCoverageParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.startPreciseCoverage', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.stopPreciseCoverage', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.takePreciseCoverage', callback?: (err: Error | null, params: Profiler.TakePreciseCoverageReturnType) => void): void;
        post(method: 'Profiler.getBestEffortCoverage', callback?: (err: Error | null, params: Profiler.GetBestEffortCoverageReturnType) => void): void;
        post(method: 'Profiler.startTypeProfile', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.stopTypeProfile', callback?: (err: Error | null) => void): void;
        post(method: 'Profiler.takeTypeProfile', callback?: (err: Error | null, params: Profiler.TakeTypeProfileReturnType) => void): void;
        post(method: 'HeapProfiler.enable', callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.disable', callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.startTrackingHeapObjects', params?: HeapProfiler.StartTrackingHeapObjectsParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.startTrackingHeapObjects', callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.stopTrackingHeapObjects', params?: HeapProfiler.StopTrackingHeapObjectsParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.stopTrackingHeapObjects', callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.takeHeapSnapshot', params?: HeapProfiler.TakeHeapSnapshotParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.takeHeapSnapshot', callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.collectGarbage', callback?: (err: Error | null) => void): void;
        post(
            method: 'HeapProfiler.getObjectByHeapObjectId',
            params?: HeapProfiler.GetObjectByHeapObjectIdParameterType,
            callback?: (err: Error | null, params: HeapProfiler.GetObjectByHeapObjectIdReturnType) => void
        ): void;
        post(method: 'HeapProfiler.getObjectByHeapObjectId', callback?: (err: Error | null, params: HeapProfiler.GetObjectByHeapObjectIdReturnType) => void): void;
        post(method: 'HeapProfiler.addInspectedHeapObject', params?: HeapProfiler.AddInspectedHeapObjectParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.addInspectedHeapObject', callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.getHeapObjectId', params?: HeapProfiler.GetHeapObjectIdParameterType, callback?: (err: Error | null, params: HeapProfiler.GetHeapObjectIdReturnType) => void): void;
        post(method: 'HeapProfiler.getHeapObjectId', callback?: (err: Error | null, params: HeapProfiler.GetHeapObjectIdReturnType) => void): void;
        post(method: 'HeapProfiler.startSampling', params?: HeapProfiler.StartSamplingParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.startSampling', callback?: (err: Error | null) => void): void;
        post(method: 'HeapProfiler.stopSampling', callback?: (err: Error | null, params: HeapProfiler.StopSamplingReturnType) => void): void;
        post(method: 'HeapProfiler.getSamplingProfile', callback?: (err: Error | null, params: HeapProfiler.GetSamplingProfileReturnType) => void): void;
        post(method: 'NodeTracing.getCategories', callback?: (err: Error | null, params: NodeTracing.GetCategoriesReturnType) => void): void;
        post(method: 'NodeTracing.start', params?: NodeTracing.StartParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'NodeTracing.start', callback?: (err: Error | null) => void): void;
        post(method: 'NodeTracing.stop', callback?: (err: Error | null) => void): void;
        post(method: 'NodeWorker.sendMessageToWorker', params?: NodeWorker.SendMessageToWorkerParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'NodeWorker.sendMessageToWorker', callback?: (err: Error | null) => void): void;
        post(method: 'NodeWorker.enable', params?: NodeWorker.EnableParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'NodeWorker.enable', callback?: (err: Error | null) => void): void;
        post(method: 'NodeWorker.disable', callback?: (err: Error | null) => void): void;
        post(method: 'NodeWorker.detach', params?: NodeWorker.DetachParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'NodeWorker.detach', callback?: (err: Error | null) => void): void;
        post(method: 'NodeRuntime.notifyWhenWaitingForDisconnect', params?: NodeRuntime.NotifyWhenWaitingForDisconnectParameterType, callback?: (err: Error | null) => void): void;
        post(method: 'NodeRuntime.notifyWhenWaitingForDisconnect', callback?: (err: Error | null) => void): void;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'inspectorNotification', listener: (message: InspectorNotification<{}>) => void): this;
        addListener(event: 'Runtime.executionContextCreated', listener: (message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>) => void): this;
        addListener(event: 'Runtime.executionContextDestroyed', listener: (message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>) => void): this;
        addListener(event: 'Runtime.executionContextsCleared', listener: () => void): this;
        addListener(event: 'Runtime.exceptionThrown', listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void): this;
        addListener(event: 'Runtime.exceptionRevoked', listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void): this;
        addListener(event: 'Runtime.consoleAPICalled', listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void): this;
        addListener(event: 'Runtime.inspectRequested', listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void): this;
        addListener(event: 'Debugger.scriptParsed', listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void): this;
        addListener(event: 'Debugger.scriptFailedToParse', listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void): this;
        addListener(event: 'Debugger.breakpointResolved', listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void): this;
        addListener(event: 'Debugger.paused', listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void): this;
        addListener(event: 'Debugger.resumed', listener: () => void): this;
        addListener(event: 'Console.messageAdded', listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void): this;
        addListener(event: 'Profiler.consoleProfileStarted', listener: (message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>) => void): this;
        addListener(event: 'Profiler.consoleProfileFinished', listener: (message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>) => void): this;
        addListener(event: 'HeapProfiler.addHeapSnapshotChunk', listener: (message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>) => void): this;
        addListener(event: 'HeapProfiler.resetProfiles', listener: () => void): this;
        addListener(event: 'HeapProfiler.reportHeapSnapshotProgress', listener: (message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>) => void): this;
        addListener(event: 'HeapProfiler.lastSeenObjectId', listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void): this;
        addListener(event: 'HeapProfiler.heapStatsUpdate', listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void): this;
        addListener(event: 'NodeTracing.dataCollected', listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void): this;
        addListener(event: 'NodeTracing.tracingComplete', listener: () => void): this;
        addListener(event: 'NodeWorker.attachedToWorker', listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void): this;
        addListener(event: 'NodeWorker.detachedFromWorker', listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void): this;
        addListener(event: 'NodeWorker.receivedMessageFromWorker', listener: (message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>) => void): this;
        addListener(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'inspectorNotification', message: InspectorNotification<{}>): boolean;
        emit(event: 'Runtime.executionContextCreated', message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>): boolean;
        emit(event: 'Runtime.executionContextDestroyed', message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>): boolean;
        emit(event: 'Runtime.executionContextsCleared'): boolean;
        emit(event: 'Runtime.exceptionThrown', message: InspectorNotification<Runtime.ExceptionThrownEventDataType>): boolean;
        emit(event: 'Runtime.exceptionRevoked', message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>): boolean;
        emit(event: 'Runtime.consoleAPICalled', message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>): boolean;
        emit(event: 'Runtime.inspectRequested', message: InspectorNotification<Runtime.InspectRequestedEventDataType>): boolean;
        emit(event: 'Debugger.scriptParsed', message: InspectorNotification<Debugger.ScriptParsedEventDataType>): boolean;
        emit(event: 'Debugger.scriptFailedToParse', message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>): boolean;
        emit(event: 'Debugger.breakpointResolved', message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>): boolean;
        emit(event: 'Debugger.paused', message: InspectorNotification<Debugger.PausedEventDataType>): boolean;
        emit(event: 'Debugger.resumed'): boolean;
        emit(event: 'Console.messageAdded', message: InspectorNotification<Console.MessageAddedEventDataType>): boolean;
        emit(event: 'Profiler.consoleProfileStarted', message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>): boolean;
        emit(event: 'Profiler.consoleProfileFinished', message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>): boolean;
        emit(event: 'HeapProfiler.addHeapSnapshotChunk', message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>): boolean;
        emit(event: 'HeapProfiler.resetProfiles'): boolean;
        emit(event: 'HeapProfiler.reportHeapSnapshotProgress', message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>): boolean;
        emit(event: 'HeapProfiler.lastSeenObjectId', message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>): boolean;
        emit(event: 'HeapProfiler.heapStatsUpdate', message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>): boolean;
        emit(event: 'NodeTracing.dataCollected', message: InspectorNotification<NodeTracing.DataCollectedEventDataType>): boolean;
        emit(event: 'NodeTracing.tracingComplete'): boolean;
        emit(event: 'NodeWorker.attachedToWorker', message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>): boolean;
        emit(event: 'NodeWorker.detachedFromWorker', message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>): boolean;
        emit(event: 'NodeWorker.receivedMessageFromWorker', message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>): boolean;
        emit(event: 'NodeRuntime.waitingForDisconnect'): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'inspectorNotification', listener: (message: InspectorNotification<{}>) => void): this;
        on(event: 'Runtime.executionContextCreated', listener: (message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>) => void): this;
        on(event: 'Runtime.executionContextDestroyed', listener: (message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>) => void): this;
        on(event: 'Runtime.executionContextsCleared', listener: () => void): this;
        on(event: 'Runtime.exceptionThrown', listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void): this;
        on(event: 'Runtime.exceptionRevoked', listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void): this;
        on(event: 'Runtime.consoleAPICalled', listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void): this;
        on(event: 'Runtime.inspectRequested', listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void): this;
        on(event: 'Debugger.scriptParsed', listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void): this;
        on(event: 'Debugger.scriptFailedToParse', listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void): this;
        on(event: 'Debugger.breakpointResolved', listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void): this;
        on(event: 'Debugger.paused', listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void): this;
        on(event: 'Debugger.resumed', listener: () => void): this;
        on(event: 'Console.messageAdded', listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void): this;
        on(event: 'Profiler.consoleProfileStarted', listener: (message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>) => void): this;
        on(event: 'Profiler.consoleProfileFinished', listener: (message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>) => void): this;
        on(event: 'HeapProfiler.addHeapSnapshotChunk', listener: (message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>) => void): this;
        on(event: 'HeapProfiler.resetProfiles', listener: () => void): this;
        on(event: 'HeapProfiler.reportHeapSnapshotProgress', listener: (message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>) => void): this;
        on(event: 'HeapProfiler.lastSeenObjectId', listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void): this;
        on(event: 'HeapProfiler.heapStatsUpdate', listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void): this;
        on(event: 'NodeTracing.dataCollected', listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void): this;
        on(event: 'NodeTracing.tracingComplete', listener: () => void): this;
        on(event: 'NodeWorker.attachedToWorker', listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void): this;
        on(event: 'NodeWorker.detachedFromWorker', listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void): this;
        on(event: 'NodeWorker.receivedMessageFromWorker', listener: (message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>) => void): this;
        on(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'inspectorNotification', listener: (message: InspectorNotification<{}>) => void): this;
        once(event: 'Runtime.executionContextCreated', listener: (message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>) => void): this;
        once(event: 'Runtime.executionContextDestroyed', listener: (message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>) => void): this;
        once(event: 'Runtime.executionContextsCleared', listener: () => void): this;
        once(event: 'Runtime.exceptionThrown', listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void): this;
        once(event: 'Runtime.exceptionRevoked', listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void): this;
        once(event: 'Runtime.consoleAPICalled', listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void): this;
        once(event: 'Runtime.inspectRequested', listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void): this;
        once(event: 'Debugger.scriptParsed', listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void): this;
        once(event: 'Debugger.scriptFailedToParse', listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void): this;
        once(event: 'Debugger.breakpointResolved', listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void): this;
        once(event: 'Debugger.paused', listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void): this;
        once(event: 'Debugger.resumed', listener: () => void): this;
        once(event: 'Console.messageAdded', listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void): this;
        once(event: 'Profiler.consoleProfileStarted', listener: (message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>) => void): this;
        once(event: 'Profiler.consoleProfileFinished', listener: (message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>) => void): this;
        once(event: 'HeapProfiler.addHeapSnapshotChunk', listener: (message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>) => void): this;
        once(event: 'HeapProfiler.resetProfiles', listener: () => void): this;
        once(event: 'HeapProfiler.reportHeapSnapshotProgress', listener: (message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>) => void): this;
        once(event: 'HeapProfiler.lastSeenObjectId', listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void): this;
        once(event: 'HeapProfiler.heapStatsUpdate', listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void): this;
        once(event: 'NodeTracing.dataCollected', listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void): this;
        once(event: 'NodeTracing.tracingComplete', listener: () => void): this;
        once(event: 'NodeWorker.attachedToWorker', listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void): this;
        once(event: 'NodeWorker.detachedFromWorker', listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void): this;
        once(event: 'NodeWorker.receivedMessageFromWorker', listener: (message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>) => void): this;
        once(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'inspectorNotification', listener: (message: InspectorNotification<{}>) => void): this;
        prependListener(event: 'Runtime.executionContextCreated', listener: (message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>) => void): this;
        prependListener(event: 'Runtime.executionContextDestroyed', listener: (message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>) => void): this;
        prependListener(event: 'Runtime.executionContextsCleared', listener: () => void): this;
        prependListener(event: 'Runtime.exceptionThrown', listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void): this;
        prependListener(event: 'Runtime.exceptionRevoked', listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void): this;
        prependListener(event: 'Runtime.consoleAPICalled', listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void): this;
        prependListener(event: 'Runtime.inspectRequested', listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void): this;
        prependListener(event: 'Debugger.scriptParsed', listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void): this;
        prependListener(event: 'Debugger.scriptFailedToParse', listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void): this;
        prependListener(event: 'Debugger.breakpointResolved', listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void): this;
        prependListener(event: 'Debugger.paused', listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void): this;
        prependListener(event: 'Debugger.resumed', listener: () => void): this;
        prependListener(event: 'Console.messageAdded', listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void): this;
        prependListener(event: 'Profiler.consoleProfileStarted', listener: (message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>) => void): this;
        prependListener(event: 'Profiler.consoleProfileFinished', listener: (message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>) => void): this;
        prependListener(event: 'HeapProfiler.addHeapSnapshotChunk', listener: (message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>) => void): this;
        prependListener(event: 'HeapProfiler.resetProfiles', listener: () => void): this;
        prependListener(event: 'HeapProfiler.reportHeapSnapshotProgress', listener: (message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>) => void): this;
        prependListener(event: 'HeapProfiler.lastSeenObjectId', listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void): this;
        prependListener(event: 'HeapProfiler.heapStatsUpdate', listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void): this;
        prependListener(event: 'NodeTracing.dataCollected', listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void): this;
        prependListener(event: 'NodeTracing.tracingComplete', listener: () => void): this;
        prependListener(event: 'NodeWorker.attachedToWorker', listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void): this;
        prependListener(event: 'NodeWorker.detachedFromWorker', listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void): this;
        prependListener(event: 'NodeWorker.receivedMessageFromWorker', listener: (message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>) => void): this;
        prependListener(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'inspectorNotification', listener: (message: InspectorNotification<{}>) => void): this;
        prependOnceListener(event: 'Runtime.executionContextCreated', listener: (message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>) => void): this;
        prependOnceListener(event: 'Runtime.executionContextDestroyed', listener: (message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>) => void): this;
        prependOnceListener(event: 'Runtime.executionContextsCleared', listener: () => void): this;
        prependOnceListener(event: 'Runtime.exceptionThrown', listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void): this;
        prependOnceListener(event: 'Runtime.exceptionRevoked', listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void): this;
        prependOnceListener(event: 'Runtime.consoleAPICalled', listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void): this;
        prependOnceListener(event: 'Runtime.inspectRequested', listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void): this;
        prependOnceListener(event: 'Debugger.scriptParsed', listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void): this;
        prependOnceListener(event: 'Debugger.scriptFailedToParse', listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void): this;
        prependOnceListener(event: 'Debugger.breakpointResolved', listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void): this;
        prependOnceListener(event: 'Debugger.paused', listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void): this;
        prependOnceListener(event: 'Debugger.resumed', listener: () => void): this;
        prependOnceListener(event: 'Console.messageAdded', listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void): this;
        prependOnceListener(event: 'Profiler.consoleProfileStarted', listener: (message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>) => void): this;
        prependOnceListener(event: 'Profiler.consoleProfileFinished', listener: (message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>) => void): this;
        prependOnceListener(event: 'HeapProfiler.addHeapSnapshotChunk', listener: (message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>) => void): this;
        prependOnceListener(event: 'HeapProfiler.resetProfiles', listener: () => void): this;
        prependOnceListener(event: 'HeapProfiler.reportHeapSnapshotProgress', listener: (message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>) => void): this;
        prependOnceListener(event: 'HeapProfiler.lastSeenObjectId', listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void): this;
        prependOnceListener(event: 'HeapProfiler.heapStatsUpdate', listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void): this;
        prependOnceListener(event: 'NodeTracing.dataCollected', listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void): this;
        prependOnceListener(event: 'NodeTracing.tracingComplete', listener: () => void): this;
        prependOnceListener(event: 'NodeWorker.attachedToWorker', listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void): this;
        prependOnceListener(event: 'NodeWorker.detachedFromWorker', listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void): this;
        prependOnceListener(event: 'NodeWorker.receivedMessageFromWorker', listener: (message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>) => void): this;
        prependOnceListener(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this;
    }
    function open(port?: number, host?: string, wait?: boolean): void;
    function close(): void;
    function url(): string | undefined;
    function waitForDebugger(): void;
}
declare module 'node:inspector' {
    import EventEmitter = require('inspector');
    export = EventEmitter;
}
declare module 'module' {
    import { URL } from 'node:url';
    namespace Module {
        function syncBuiltinESMExports(): void;
        function findSourceMap(path: string, error?: Error): SourceMap;
        interface SourceMapPayload {
            file: string;
            version: number;
            sources: string[];
            sourcesContent: string[];
            names: string[];
            mappings: string;
            sourceRoot: string;
        }
        interface SourceMapping {
            generatedLine: number;
            generatedColumn: number;
            originalSource: string;
            originalLine: number;
            originalColumn: number;
        }
        class SourceMap {
            readonly payload: SourceMapPayload;
            constructor(payload: SourceMapPayload);
            findEntry(line: number, column: number): SourceMapping;
        }
    }
    interface Module extends NodeModule {}
    class Module {
        static runMain(): void;
        static wrap(code: string): string;
        static createRequire(path: string | URL): NodeRequire;
        static builtinModules: string[];
        static Module: typeof Module;
        constructor(id: string, parent?: Module);
    }
    global {
        interface ImportMeta {
            url: string;
            resolve?(specified: string, parent?: string | URL): Promise<string>;
        }
    }
    export = Module;
}
declare module 'node:module' {
    import module = require('module');
    export = module;
}
declare module 'net' {
    import * as stream from 'node:stream';
    import { Abortable, EventEmitter } from 'node:events';
    import * as dns from 'node:dns';
    type LookupFunction = (hostname: string, options: dns.LookupOneOptions, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void) => void;
    interface AddressInfo {
        address: string;
        family: string;
        port: number;
    }
    interface SocketConstructorOpts {
        fd?: number | undefined;
        allowHalfOpen?: boolean | undefined;
        readable?: boolean | undefined;
        writable?: boolean | undefined;
        signal?: AbortSignal;
    }
    interface OnReadOpts {
        buffer: Uint8Array | (() => Uint8Array);
        callback(bytesWritten: number, buf: Uint8Array): boolean;
    }
    interface ConnectOpts {
        onread?: OnReadOpts | undefined;
    }
    interface TcpSocketConnectOpts extends ConnectOpts {
        port: number;
        host?: string | undefined;
        localAddress?: string | undefined;
        localPort?: number | undefined;
        hints?: number | undefined;
        family?: number | undefined;
        lookup?: LookupFunction | undefined;
    }
    interface IpcSocketConnectOpts extends ConnectOpts {
        path: string;
    }
    type SocketConnectOpts = TcpSocketConnectOpts | IpcSocketConnectOpts;
    class Socket extends stream.Duplex {
        constructor(options?: SocketConstructorOpts);
        write(buffer: Uint8Array | string, cb?: (err?: Error) => void): boolean;
        write(str: Uint8Array | string, encoding?: BufferEncoding, cb?: (err?: Error) => void): boolean;
        connect(options: SocketConnectOpts, connectionListener?: () => void): this;
        connect(port: number, host: string, connectionListener?: () => void): this;
        connect(port: number, connectionListener?: () => void): this;
        connect(path: string, connectionListener?: () => void): this;
        setEncoding(encoding?: BufferEncoding): this;
        pause(): this;
        resume(): this;
        setTimeout(timeout: number, callback?: () => void): this;
        setNoDelay(noDelay?: boolean): this;
        setKeepAlive(enable?: boolean, initialDelay?: number): this;
        address(): AddressInfo | {};
        unref(): this;
        ref(): this;
        readonly bufferSize: number;
        readonly bytesRead: number;
        readonly bytesWritten: number;
        readonly connecting: boolean;
        readonly destroyed: boolean;
        readonly localAddress?: string;
        readonly localPort?: number;
        readonly remoteAddress?: string | undefined;
        readonly remoteFamily?: string | undefined;
        readonly remotePort?: number | undefined;
        end(callback?: () => void): this;
        end(buffer: Uint8Array | string, callback?: () => void): this;
        end(str: Uint8Array | string, encoding?: BufferEncoding, callback?: () => void): this;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'close', listener: (hadError: boolean) => void): this;
        addListener(event: 'connect', listener: () => void): this;
        addListener(event: 'data', listener: (data: Buffer) => void): this;
        addListener(event: 'drain', listener: () => void): this;
        addListener(event: 'end', listener: () => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        addListener(event: 'ready', listener: () => void): this;
        addListener(event: 'timeout', listener: () => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'close', hadError: boolean): boolean;
        emit(event: 'connect'): boolean;
        emit(event: 'data', data: Buffer): boolean;
        emit(event: 'drain'): boolean;
        emit(event: 'end'): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'lookup', err: Error, address: string, family: string | number, host: string): boolean;
        emit(event: 'ready'): boolean;
        emit(event: 'timeout'): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: (hadError: boolean) => void): this;
        on(event: 'connect', listener: () => void): this;
        on(event: 'data', listener: (data: Buffer) => void): this;
        on(event: 'drain', listener: () => void): this;
        on(event: 'end', listener: () => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        on(event: 'ready', listener: () => void): this;
        on(event: 'timeout', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: (hadError: boolean) => void): this;
        once(event: 'connect', listener: () => void): this;
        once(event: 'data', listener: (data: Buffer) => void): this;
        once(event: 'drain', listener: () => void): this;
        once(event: 'end', listener: () => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        once(event: 'ready', listener: () => void): this;
        once(event: 'timeout', listener: () => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: (hadError: boolean) => void): this;
        prependListener(event: 'connect', listener: () => void): this;
        prependListener(event: 'data', listener: (data: Buffer) => void): this;
        prependListener(event: 'drain', listener: () => void): this;
        prependListener(event: 'end', listener: () => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        prependListener(event: 'ready', listener: () => void): this;
        prependListener(event: 'timeout', listener: () => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: (hadError: boolean) => void): this;
        prependOnceListener(event: 'connect', listener: () => void): this;
        prependOnceListener(event: 'data', listener: (data: Buffer) => void): this;
        prependOnceListener(event: 'drain', listener: () => void): this;
        prependOnceListener(event: 'end', listener: () => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'lookup', listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        prependOnceListener(event: 'ready', listener: () => void): this;
        prependOnceListener(event: 'timeout', listener: () => void): this;
    }
    interface ListenOptions extends Abortable {
        port?: number | undefined;
        host?: string | undefined;
        backlog?: number | undefined;
        path?: string | undefined;
        exclusive?: boolean | undefined;
        readableAll?: boolean | undefined;
        writableAll?: boolean | undefined;
        ipv6Only?: boolean | undefined;
    }
    interface ServerOpts {
        allowHalfOpen?: boolean | undefined;
        pauseOnConnect?: boolean | undefined;
    }
    class Server extends EventEmitter {
        constructor(connectionListener?: (socket: Socket) => void);
        constructor(options?: ServerOpts, connectionListener?: (socket: Socket) => void);
        listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): this;
        listen(port?: number, hostname?: string, listeningListener?: () => void): this;
        listen(port?: number, backlog?: number, listeningListener?: () => void): this;
        listen(port?: number, listeningListener?: () => void): this;
        listen(path: string, backlog?: number, listeningListener?: () => void): this;
        listen(path: string, listeningListener?: () => void): this;
        listen(options: ListenOptions, listeningListener?: () => void): this;
        listen(handle: any, backlog?: number, listeningListener?: () => void): this;
        listen(handle: any, listeningListener?: () => void): this;
        close(callback?: (err?: Error) => void): this;
        address(): AddressInfo | string | null;
        getConnections(cb: (error: Error | null, count: number) => void): void;
        ref(): this;
        unref(): this;
        maxConnections: number;
        connections: number;
        listening: boolean;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'connection', listener: (socket: Socket) => void): this;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'listening', listener: () => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'connection', socket: Socket): boolean;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'listening'): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'connection', listener: (socket: Socket) => void): this;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'listening', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'connection', listener: (socket: Socket) => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'listening', listener: () => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'connection', listener: (socket: Socket) => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'listening', listener: () => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'connection', listener: (socket: Socket) => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'listening', listener: () => void): this;
    }
    type IPVersion = 'ipv4' | 'ipv6';
    class BlockList {
        addAddress(address: string, type?: IPVersion): void;
        addAddress(address: SocketAddress): void;
        addRange(start: string, end: string, type?: IPVersion): void;
        addRange(start: SocketAddress, end: SocketAddress): void;
        addSubnet(net: SocketAddress, prefix: number): void;
        addSubnet(net: string, prefix: number, type?: IPVersion): void;
        check(address: SocketAddress): boolean;
        check(address: string, type?: IPVersion): boolean;
    }
    interface TcpNetConnectOpts extends TcpSocketConnectOpts, SocketConstructorOpts {
        timeout?: number | undefined;
    }
    interface IpcNetConnectOpts extends IpcSocketConnectOpts, SocketConstructorOpts {
        timeout?: number | undefined;
    }
    type NetConnectOpts = TcpNetConnectOpts | IpcNetConnectOpts;
    function createServer(connectionListener?: (socket: Socket) => void): Server;
    function createServer(options?: ServerOpts, connectionListener?: (socket: Socket) => void): Server;
    function connect(options: NetConnectOpts, connectionListener?: () => void): Socket;
    function connect(port: number, host?: string, connectionListener?: () => void): Socket;
    function connect(path: string, connectionListener?: () => void): Socket;
    function createConnection(options: NetConnectOpts, connectionListener?: () => void): Socket;
    function createConnection(port: number, host?: string, connectionListener?: () => void): Socket;
    function createConnection(path: string, connectionListener?: () => void): Socket;
    function isIP(input: string): number;
    function isIPv4(input: string): boolean;
    function isIPv6(input: string): boolean;
    interface SocketAddressInitOptions {
        address?: string | undefined;
        family?: IPVersion | undefined;
        flowlabel?: number | undefined;
        port?: number | undefined;
    }
    class SocketAddress {
        constructor(options: SocketAddressInitOptions);
        readonly address: string;
        readonly family: IPVersion;
        readonly port: number;
        readonly flowlabel: number;
    }
}
declare module 'node:net' {
    export * from 'net';
}
declare module 'os' {
    interface CpuInfo {
        model: string;
        speed: number;
        times: {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        };
    }
    interface NetworkInterfaceBase {
        address: string;
        netmask: string;
        mac: string;
        internal: boolean;
        cidr: string | null;
    }
    interface NetworkInterfaceInfoIPv4 extends NetworkInterfaceBase {
        family: 'IPv4';
    }
    interface NetworkInterfaceInfoIPv6 extends NetworkInterfaceBase {
        family: 'IPv6';
        scopeid: number;
    }
    interface UserInfo<T> {
        username: T;
        uid: number;
        gid: number;
        shell: T;
        homedir: T;
    }
    type NetworkInterfaceInfo = NetworkInterfaceInfoIPv4 | NetworkInterfaceInfoIPv6;
    function hostname(): string;
    function loadavg(): number[];
    function uptime(): number;
    function freemem(): number;
    function totalmem(): number;
    function cpus(): CpuInfo[];
    function type(): string;
    function release(): string;
    function networkInterfaces(): NodeJS.Dict<NetworkInterfaceInfo[]>;
    function homedir(): string;
    function userInfo(options: { encoding: 'buffer' }): UserInfo<Buffer>;
    function userInfo(options?: { encoding: BufferEncoding }): UserInfo<string>;
    type SignalConstants = {
        [key in NodeJS.Signals]: number;
    };
    namespace constants {
        const UV_UDP_REUSEADDR: number;
        namespace signals {}
        const signals: SignalConstants;
        namespace errno {
            const E2BIG: number;
            const EACCES: number;
            const EADDRINUSE: number;
            const EADDRNOTAVAIL: number;
            const EAFNOSUPPORT: number;
            const EAGAIN: number;
            const EALREADY: number;
            const EBADF: number;
            const EBADMSG: number;
            const EBUSY: number;
            const ECANCELED: number;
            const ECHILD: number;
            const ECONNABORTED: number;
            const ECONNREFUSED: number;
            const ECONNRESET: number;
            const EDEADLK: number;
            const EDESTADDRREQ: number;
            const EDOM: number;
            const EDQUOT: number;
            const EEXIST: number;
            const EFAULT: number;
            const EFBIG: number;
            const EHOSTUNREACH: number;
            const EIDRM: number;
            const EILSEQ: number;
            const EINPROGRESS: number;
            const EINTR: number;
            const EINVAL: number;
            const EIO: number;
            const EISCONN: number;
            const EISDIR: number;
            const ELOOP: number;
            const EMFILE: number;
            const EMLINK: number;
            const EMSGSIZE: number;
            const EMULTIHOP: number;
            const ENAMETOOLONG: number;
            const ENETDOWN: number;
            const ENETRESET: number;
            const ENETUNREACH: number;
            const ENFILE: number;
            const ENOBUFS: number;
            const ENODATA: number;
            const ENODEV: number;
            const ENOENT: number;
            const ENOEXEC: number;
            const ENOLCK: number;
            const ENOLINK: number;
            const ENOMEM: number;
            const ENOMSG: number;
            const ENOPROTOOPT: number;
            const ENOSPC: number;
            const ENOSR: number;
            const ENOSTR: number;
            const ENOSYS: number;
            const ENOTCONN: number;
            const ENOTDIR: number;
            const ENOTEMPTY: number;
            const ENOTSOCK: number;
            const ENOTSUP: number;
            const ENOTTY: number;
            const ENXIO: number;
            const EOPNOTSUPP: number;
            const EOVERFLOW: number;
            const EPERM: number;
            const EPIPE: number;
            const EPROTO: number;
            const EPROTONOSUPPORT: number;
            const EPROTOTYPE: number;
            const ERANGE: number;
            const EROFS: number;
            const ESPIPE: number;
            const ESRCH: number;
            const ESTALE: number;
            const ETIME: number;
            const ETIMEDOUT: number;
            const ETXTBSY: number;
            const EWOULDBLOCK: number;
            const EXDEV: number;
            const WSAEINTR: number;
            const WSAEBADF: number;
            const WSAEACCES: number;
            const WSAEFAULT: number;
            const WSAEINVAL: number;
            const WSAEMFILE: number;
            const WSAEWOULDBLOCK: number;
            const WSAEINPROGRESS: number;
            const WSAEALREADY: number;
            const WSAENOTSOCK: number;
            const WSAEDESTADDRREQ: number;
            const WSAEMSGSIZE: number;
            const WSAEPROTOTYPE: number;
            const WSAENOPROTOOPT: number;
            const WSAEPROTONOSUPPORT: number;
            const WSAESOCKTNOSUPPORT: number;
            const WSAEOPNOTSUPP: number;
            const WSAEPFNOSUPPORT: number;
            const WSAEAFNOSUPPORT: number;
            const WSAEADDRINUSE: number;
            const WSAEADDRNOTAVAIL: number;
            const WSAENETDOWN: number;
            const WSAENETUNREACH: number;
            const WSAENETRESET: number;
            const WSAECONNABORTED: number;
            const WSAECONNRESET: number;
            const WSAENOBUFS: number;
            const WSAEISCONN: number;
            const WSAENOTCONN: number;
            const WSAESHUTDOWN: number;
            const WSAETOOMANYREFS: number;
            const WSAETIMEDOUT: number;
            const WSAECONNREFUSED: number;
            const WSAELOOP: number;
            const WSAENAMETOOLONG: number;
            const WSAEHOSTDOWN: number;
            const WSAEHOSTUNREACH: number;
            const WSAENOTEMPTY: number;
            const WSAEPROCLIM: number;
            const WSAEUSERS: number;
            const WSAEDQUOT: number;
            const WSAESTALE: number;
            const WSAEREMOTE: number;
            const WSASYSNOTREADY: number;
            const WSAVERNOTSUPPORTED: number;
            const WSANOTINITIALISED: number;
            const WSAEDISCON: number;
            const WSAENOMORE: number;
            const WSAECANCELLED: number;
            const WSAEINVALIDPROCTABLE: number;
            const WSAEINVALIDPROVIDER: number;
            const WSAEPROVIDERFAILEDINIT: number;
            const WSASYSCALLFAILURE: number;
            const WSASERVICE_NOT_FOUND: number;
            const WSATYPE_NOT_FOUND: number;
            const WSA_E_NO_MORE: number;
            const WSA_E_CANCELLED: number;
            const WSAEREFUSED: number;
        }
        namespace priority {
            const PRIORITY_LOW: number;
            const PRIORITY_BELOW_NORMAL: number;
            const PRIORITY_NORMAL: number;
            const PRIORITY_ABOVE_NORMAL: number;
            const PRIORITY_HIGH: number;
            const PRIORITY_HIGHEST: number;
        }
    }
    const devNull: string;
    const EOL: string;
    function arch(): string;
    function version(): string;
    function platform(): NodeJS.Platform;
    function tmpdir(): string;
    function endianness(): 'BE' | 'LE';
    function getPriority(pid?: number): number;
    function setPriority(priority: number): void;
    function setPriority(pid: number, priority: number): void;
}
declare module 'node:os' {
    export * from 'os';
}
declare module 'path/posix' {
    import path = require('path');
    export = path;
}
declare module 'path/win32' {
    import path = require('path');
    export = path;
}
declare module 'path' {
    namespace path {
        interface ParsedPath {
            root: string;
            dir: string;
            base: string;
            ext: string;
            name: string;
        }
        interface FormatInputPathObject {
            root?: string | undefined;
            dir?: string | undefined;
            base?: string | undefined;
            ext?: string | undefined;
            name?: string | undefined;
        }
        interface PlatformPath {
            normalize(p: string): string;
            join(...paths: string[]): string;
            resolve(...pathSegments: string[]): string;
            isAbsolute(p: string): boolean;
            relative(from: string, to: string): string;
            dirname(p: string): string;
            basename(p: string, ext?: string): string;
            extname(p: string): string;
            readonly sep: string;
            readonly delimiter: string;
            parse(p: string): ParsedPath;
            format(pP: FormatInputPathObject): string;
            toNamespacedPath(path: string): string;
            readonly posix: PlatformPath;
            readonly win32: PlatformPath;
        }
    }
    const path: path.PlatformPath;
    export = path;
}
declare module 'node:path' {
    import path = require('path');
    export = path;
}
declare module 'node:path/posix' {
    import path = require('path/posix');
    export = path;
}
declare module 'node:path/win32' {
    import path = require('path/win32');
    export = path;
}
declare module 'perf_hooks' {
    import { AsyncResource } from 'node:async_hooks';
    type EntryType = 'node' | 'mark' | 'measure' | 'gc' | 'function' | 'http2' | 'http';
    interface NodeGCPerformanceDetail {
        readonly kind?: number | undefined;
        readonly flags?: number | undefined;
    }
    class PerformanceEntry {
        protected constructor();
        readonly duration: number;
        readonly name: string;
        readonly startTime: number;
        readonly entryType: EntryType;
        readonly detail?: NodeGCPerformanceDetail | unknown | undefined;
    }
    class PerformanceNodeTiming extends PerformanceEntry {
        readonly bootstrapComplete: number;
        readonly environment: number;
        readonly idleTime: number;
        readonly loopExit: number;
        readonly loopStart: number;
        readonly v8Start: number;
    }
    interface EventLoopUtilization {
        idle: number;
        active: number;
        utilization: number;
    }
    type EventLoopUtilityFunction = (util1?: EventLoopUtilization, util2?: EventLoopUtilization) => EventLoopUtilization;
    interface MarkOptions {
        detail?: unknown | undefined;
        startTime?: number | undefined;
    }
    interface MeasureOptions {
        detail?: unknown | undefined;
        duration?: number | undefined;
        end?: number | string | undefined;
        start?: number | string | undefined;
    }
    interface TimerifyOptions {
        histogram?: RecordableHistogram | undefined;
    }
    interface Performance {
        clearMarks(name?: string): void;
        mark(name?: string, options?: MarkOptions): void;
        measure(name: string, startMark?: string, endMark?: string): void;
        measure(name: string, options: MeasureOptions): void;
        readonly nodeTiming: PerformanceNodeTiming;
        now(): number;
        readonly timeOrigin: number;
        timerify<T extends (...params: any[]) => any>(fn: T, options?: TimerifyOptions): T;
        eventLoopUtilization: EventLoopUtilityFunction;
    }
    interface PerformanceObserverEntryList {
        getEntries(): PerformanceEntry[];
        getEntriesByName(name: string, type?: EntryType): PerformanceEntry[];
        getEntriesByType(type: EntryType): PerformanceEntry[];
    }
    type PerformanceObserverCallback = (list: PerformanceObserverEntryList, observer: PerformanceObserver) => void;
    class PerformanceObserver extends AsyncResource {
        constructor(callback: PerformanceObserverCallback);
        disconnect(): void;
        observe(
            options:
                | {
                      entryTypes: ReadonlyArray<EntryType>;
                      buffered?: boolean | undefined;
                  }
                | {
                      type: EntryType;
                      buffered?: boolean | undefined;
                  }
        ): void;
    }
    namespace constants {
        const NODE_PERFORMANCE_GC_MAJOR: number;
        const NODE_PERFORMANCE_GC_MINOR: number;
        const NODE_PERFORMANCE_GC_INCREMENTAL: number;
        const NODE_PERFORMANCE_GC_WEAKCB: number;
        const NODE_PERFORMANCE_GC_FLAGS_NO: number;
        const NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: number;
        const NODE_PERFORMANCE_GC_FLAGS_FORCED: number;
        const NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: number;
        const NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: number;
    }
    const performance: Performance;
    interface EventLoopMonitorOptions {
        resolution?: number | undefined;
    }
    interface Histogram {
        readonly percentiles: Map<number, number>;
        readonly exceeds: number;
        readonly min: number;
        readonly max: number;
        readonly mean: number;
        readonly stddev: number;
        reset(): void;
        percentile(percentile: number): number;
    }
    interface IntervalHistogram extends Histogram {
        enable(): boolean;
        disable(): boolean;
    }
    interface RecordableHistogram extends Histogram {
        record(val: number | bigint): void;
        recordDelta(): void;
    }
    function monitorEventLoopDelay(options?: EventLoopMonitorOptions): IntervalHistogram;
    interface CreateHistogramOptions {
        min?: number | bigint | undefined;
        max?: number | bigint | undefined;
        figures?: number | undefined;
    }
    function createHistogram(options?: CreateHistogramOptions): RecordableHistogram;
}
declare module 'node:perf_hooks' {
    export * from 'perf_hooks';
}
declare module 'punycode' {
    function decode(string: string): string;
    function encode(string: string): string;
    function toUnicode(domain: string): string;
    function toASCII(domain: string): string;
    const ucs2: ucs2;
    interface ucs2 {
        decode(string: string): number[];
        encode(codePoints: ReadonlyArray<number>): string;
    }
    const version: string;
}
declare module 'node:punycode' {
    export * from 'punycode';
}
declare module 'querystring' {
    interface StringifyOptions {
        encodeURIComponent?: ((str: string) => string) | undefined;
    }
    interface ParseOptions {
        maxKeys?: number | undefined;
        decodeURIComponent?: ((str: string) => string) | undefined;
    }
    interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> {}
    interface ParsedUrlQueryInput extends NodeJS.Dict<string | number | boolean | ReadonlyArray<string> | ReadonlyArray<number> | ReadonlyArray<boolean> | null> {}
    function stringify(obj?: ParsedUrlQueryInput, sep?: string, eq?: string, options?: StringifyOptions): string;
    function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): ParsedUrlQuery;
    const encode: typeof stringify;
    const decode: typeof parse;
    function escape(str: string): string;
    function unescape(str: string): string;
}
declare module 'node:querystring' {
    export * from 'querystring';
}
declare module 'readline' {
    import { Abortable, EventEmitter } from 'node:events';
    interface Key {
        sequence?: string | undefined;
        name?: string | undefined;
        ctrl?: boolean | undefined;
        meta?: boolean | undefined;
        shift?: boolean | undefined;
    }
    class Interface extends EventEmitter {
        readonly terminal: boolean;
        readonly line: string;
        readonly cursor: number;
        protected constructor(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean);
        protected constructor(options: ReadLineOptions);
        getPrompt(): string;
        setPrompt(prompt: string): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: (answer: string) => void): void;
        question(query: string, options: Abortable, callback: (answer: string) => void): void;
        pause(): this;
        resume(): this;
        close(): void;
        write(data: string | Buffer, key?: Key): void;
        write(data: undefined | null | string | Buffer, key: Key): void;
        getCursorPos(): CursorPos;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'line', listener: (input: string) => void): this;
        addListener(event: 'pause', listener: () => void): this;
        addListener(event: 'resume', listener: () => void): this;
        addListener(event: 'SIGCONT', listener: () => void): this;
        addListener(event: 'SIGINT', listener: () => void): this;
        addListener(event: 'SIGTSTP', listener: () => void): this;
        addListener(event: 'history', listener: (history: string[]) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'line', input: string): boolean;
        emit(event: 'pause'): boolean;
        emit(event: 'resume'): boolean;
        emit(event: 'SIGCONT'): boolean;
        emit(event: 'SIGINT'): boolean;
        emit(event: 'SIGTSTP'): boolean;
        emit(event: 'history', history: string[]): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'line', listener: (input: string) => void): this;
        on(event: 'pause', listener: () => void): this;
        on(event: 'resume', listener: () => void): this;
        on(event: 'SIGCONT', listener: () => void): this;
        on(event: 'SIGINT', listener: () => void): this;
        on(event: 'SIGTSTP', listener: () => void): this;
        on(event: 'history', listener: (history: string[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'line', listener: (input: string) => void): this;
        once(event: 'pause', listener: () => void): this;
        once(event: 'resume', listener: () => void): this;
        once(event: 'SIGCONT', listener: () => void): this;
        once(event: 'SIGINT', listener: () => void): this;
        once(event: 'SIGTSTP', listener: () => void): this;
        once(event: 'history', listener: (history: string[]) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'line', listener: (input: string) => void): this;
        prependListener(event: 'pause', listener: () => void): this;
        prependListener(event: 'resume', listener: () => void): this;
        prependListener(event: 'SIGCONT', listener: () => void): this;
        prependListener(event: 'SIGINT', listener: () => void): this;
        prependListener(event: 'SIGTSTP', listener: () => void): this;
        prependListener(event: 'history', listener: (history: string[]) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'line', listener: (input: string) => void): this;
        prependOnceListener(event: 'pause', listener: () => void): this;
        prependOnceListener(event: 'resume', listener: () => void): this;
        prependOnceListener(event: 'SIGCONT', listener: () => void): this;
        prependOnceListener(event: 'SIGINT', listener: () => void): this;
        prependOnceListener(event: 'SIGTSTP', listener: () => void): this;
        prependOnceListener(event: 'history', listener: (history: string[]) => void): this;
        [Symbol.asyncIterator](): AsyncIterableIterator<string>;
    }
    type ReadLine = Interface;
    type Completer = (line: string) => CompleterResult;
    type AsyncCompleter = (line: string, callback: (err?: null | Error, result?: CompleterResult) => void) => void;
    type CompleterResult = [string[], string];
    interface ReadLineOptions {
        input: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream | undefined;
        completer?: Completer | AsyncCompleter | undefined;
        terminal?: boolean | undefined;
        history?: string[] | undefined;
        historySize?: number | undefined;
        prompt?: string | undefined;
        crlfDelay?: number | undefined;
        removeHistoryDuplicates?: boolean | undefined;
        escapeCodeTimeout?: number | undefined;
        tabSize?: number | undefined;
    }
    function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean): Interface;
    function createInterface(options: ReadLineOptions): Interface;
    function emitKeypressEvents(stream: NodeJS.ReadableStream, readlineInterface?: Interface): void;
    type Direction = -1 | 0 | 1;
    interface CursorPos {
        rows: number;
        cols: number;
    }
    function clearLine(stream: NodeJS.WritableStream, dir: Direction, callback?: () => void): boolean;
    function clearScreenDown(stream: NodeJS.WritableStream, callback?: () => void): boolean;
    function cursorTo(stream: NodeJS.WritableStream, x: number, y?: number, callback?: () => void): boolean;
    function moveCursor(stream: NodeJS.WritableStream, dx: number, dy: number, callback?: () => void): boolean;
}
declare module 'node:readline' {
    export * from 'readline';
}
declare module 'repl' {
    import { Interface, Completer, AsyncCompleter } from 'node:readline';
    import { Context } from 'node:vm';
    import { InspectOptions } from 'node:util';
    interface ReplOptions {
        prompt?: string | undefined;
        input?: NodeJS.ReadableStream | undefined;
        output?: NodeJS.WritableStream | undefined;
        terminal?: boolean | undefined;
        eval?: REPLEval | undefined;
        preview?: boolean | undefined;
        useColors?: boolean | undefined;
        useGlobal?: boolean | undefined;
        ignoreUndefined?: boolean | undefined;
        writer?: REPLWriter | undefined;
        completer?: Completer | AsyncCompleter | undefined;
        replMode?: typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT | undefined;
        breakEvalOnSigint?: boolean | undefined;
    }
    type REPLEval = (this: REPLServer, evalCmd: string, context: Context, file: string, cb: (err: Error | null, result: any) => void) => void;
    type REPLWriter = (this: REPLServer, obj: any) => string;
    const writer: REPLWriter & {
        options: InspectOptions;
    };
    type REPLCommandAction = (this: REPLServer, text: string) => void;
    interface REPLCommand {
        help?: string | undefined;
        action: REPLCommandAction;
    }
    class REPLServer extends Interface {
        readonly context: Context;
        readonly inputStream: NodeJS.ReadableStream;
        readonly outputStream: NodeJS.WritableStream;
        readonly input: NodeJS.ReadableStream;
        readonly output: NodeJS.WritableStream;
        readonly commands: NodeJS.ReadOnlyDict<REPLCommand>;
        readonly editorMode: boolean;
        readonly underscoreAssigned: boolean;
        readonly last: any;
        readonly underscoreErrAssigned: boolean;
        readonly lastError: any;
        readonly eval: REPLEval;
        readonly useColors: boolean;
        readonly useGlobal: boolean;
        readonly ignoreUndefined: boolean;
        readonly writer: REPLWriter;
        readonly completer: Completer | AsyncCompleter;
        readonly replMode: typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT;
        private constructor();
        defineCommand(keyword: string, cmd: REPLCommandAction | REPLCommand): void;
        displayPrompt(preserveCursor?: boolean): void;
        clearBufferedCommand(): void;
        setupHistory(path: string, callback: (err: Error | null, repl: this) => void): void;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'line', listener: (input: string) => void): this;
        addListener(event: 'pause', listener: () => void): this;
        addListener(event: 'resume', listener: () => void): this;
        addListener(event: 'SIGCONT', listener: () => void): this;
        addListener(event: 'SIGINT', listener: () => void): this;
        addListener(event: 'SIGTSTP', listener: () => void): this;
        addListener(event: 'exit', listener: () => void): this;
        addListener(event: 'reset', listener: (context: Context) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'close'): boolean;
        emit(event: 'line', input: string): boolean;
        emit(event: 'pause'): boolean;
        emit(event: 'resume'): boolean;
        emit(event: 'SIGCONT'): boolean;
        emit(event: 'SIGINT'): boolean;
        emit(event: 'SIGTSTP'): boolean;
        emit(event: 'exit'): boolean;
        emit(event: 'reset', context: Context): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'close', listener: () => void): this;
        on(event: 'line', listener: (input: string) => void): this;
        on(event: 'pause', listener: () => void): this;
        on(event: 'resume', listener: () => void): this;
        on(event: 'SIGCONT', listener: () => void): this;
        on(event: 'SIGINT', listener: () => void): this;
        on(event: 'SIGTSTP', listener: () => void): this;
        on(event: 'exit', listener: () => void): this;
        on(event: 'reset', listener: (context: Context) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'line', listener: (input: string) => void): this;
        once(event: 'pause', listener: () => void): this;
        once(event: 'resume', listener: () => void): this;
        once(event: 'SIGCONT', listener: () => void): this;
        once(event: 'SIGINT', listener: () => void): this;
        once(event: 'SIGTSTP', listener: () => void): this;
        once(event: 'exit', listener: () => void): this;
        once(event: 'reset', listener: (context: Context) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'line', listener: (input: string) => void): this;
        prependListener(event: 'pause', listener: () => void): this;
        prependListener(event: 'resume', listener: () => void): this;
        prependListener(event: 'SIGCONT', listener: () => void): this;
        prependListener(event: 'SIGINT', listener: () => void): this;
        prependListener(event: 'SIGTSTP', listener: () => void): this;
        prependListener(event: 'exit', listener: () => void): this;
        prependListener(event: 'reset', listener: (context: Context) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'line', listener: (input: string) => void): this;
        prependOnceListener(event: 'pause', listener: () => void): this;
        prependOnceListener(event: 'resume', listener: () => void): this;
        prependOnceListener(event: 'SIGCONT', listener: () => void): this;
        prependOnceListener(event: 'SIGINT', listener: () => void): this;
        prependOnceListener(event: 'SIGTSTP', listener: () => void): this;
        prependOnceListener(event: 'exit', listener: () => void): this;
        prependOnceListener(event: 'reset', listener: (context: Context) => void): this;
    }
    const REPL_MODE_SLOPPY: unique symbol;
    const REPL_MODE_STRICT: unique symbol;
    function start(options?: string | ReplOptions): REPLServer;
    class Recoverable extends SyntaxError {
        err: Error;
        constructor(err: Error);
    }
}
declare module 'node:repl' {
    export * from 'repl';
}
declare module 'stream' {
    import { EventEmitter, Abortable } from 'node:events';
    import * as streamPromises from 'node:stream/promises';
    import * as streamConsumers from 'node:stream/consumers';
    class internal extends EventEmitter {
        pipe<T extends NodeJS.WritableStream>(
            destination: T,
            options?: {
                end?: boolean | undefined;
            }
        ): T;
    }
    namespace internal {
        class Stream extends internal {
            constructor(opts?: ReadableOptions);
        }
        interface StreamOptions<T extends Stream> extends Abortable {
            emitClose?: boolean | undefined;
            highWaterMark?: number | undefined;
            objectMode?: boolean | undefined;
            construct?(this: T, callback: (error?: Error | null) => void): void;
            destroy?(this: T, error: Error | null, callback: (error: Error | null) => void): void;
            autoDestroy?: boolean | undefined;
        }
        interface ReadableOptions extends StreamOptions<Readable> {
            encoding?: BufferEncoding | undefined;
            read?(this: Readable, size: number): void;
        }
        class Readable extends Stream implements NodeJS.ReadableStream {
            static from(iterable: Iterable<any> | AsyncIterable<any>, options?: ReadableOptions): Readable;
            static isDisturbed(stream: Readable | NodeJS.ReadableStream): boolean;
            readonly readableAborted: boolean;
            readable: boolean;
            readonly readableDidRead: boolean;
            readonly readableEncoding: BufferEncoding | null;
            readonly readableEnded: boolean;
            readonly readableFlowing: boolean | null;
            readonly readableHighWaterMark: number;
            readonly readableLength: number;
            readonly readableObjectMode: boolean;
            destroyed: boolean;
            constructor(opts?: ReadableOptions);
            _construct?(callback: (error?: Error | null) => void): void;
            _read(size: number): void;
            read(size?: number): any;
            setEncoding(encoding: BufferEncoding): this;
            pause(): this;
            resume(): this;
            isPaused(): boolean;
            unpipe(destination?: NodeJS.WritableStream): this;
            unshift(chunk: any, encoding?: BufferEncoding): void;
            wrap(stream: NodeJS.ReadableStream): this;
            push(chunk: any, encoding?: BufferEncoding): boolean;
            _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
            destroy(error?: Error): this;
            addListener(event: 'close', listener: () => void): this;
            addListener(event: 'data', listener: (chunk: any) => void): this;
            addListener(event: 'end', listener: () => void): this;
            addListener(event: 'error', listener: (err: Error) => void): this;
            addListener(event: 'pause', listener: () => void): this;
            addListener(event: 'readable', listener: () => void): this;
            addListener(event: 'resume', listener: () => void): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;
            emit(event: 'close'): boolean;
            emit(event: 'data', chunk: any): boolean;
            emit(event: 'end'): boolean;
            emit(event: 'error', err: Error): boolean;
            emit(event: 'pause'): boolean;
            emit(event: 'readable'): boolean;
            emit(event: 'resume'): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;
            on(event: 'close', listener: () => void): this;
            on(event: 'data', listener: (chunk: any) => void): this;
            on(event: 'end', listener: () => void): this;
            on(event: 'error', listener: (err: Error) => void): this;
            on(event: 'pause', listener: () => void): this;
            on(event: 'readable', listener: () => void): this;
            on(event: 'resume', listener: () => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;
            once(event: 'close', listener: () => void): this;
            once(event: 'data', listener: (chunk: any) => void): this;
            once(event: 'end', listener: () => void): this;
            once(event: 'error', listener: (err: Error) => void): this;
            once(event: 'pause', listener: () => void): this;
            once(event: 'readable', listener: () => void): this;
            once(event: 'resume', listener: () => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;
            prependListener(event: 'close', listener: () => void): this;
            prependListener(event: 'data', listener: (chunk: any) => void): this;
            prependListener(event: 'end', listener: () => void): this;
            prependListener(event: 'error', listener: (err: Error) => void): this;
            prependListener(event: 'pause', listener: () => void): this;
            prependListener(event: 'readable', listener: () => void): this;
            prependListener(event: 'resume', listener: () => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
            prependOnceListener(event: 'close', listener: () => void): this;
            prependOnceListener(event: 'data', listener: (chunk: any) => void): this;
            prependOnceListener(event: 'end', listener: () => void): this;
            prependOnceListener(event: 'error', listener: (err: Error) => void): this;
            prependOnceListener(event: 'pause', listener: () => void): this;
            prependOnceListener(event: 'readable', listener: () => void): this;
            prependOnceListener(event: 'resume', listener: () => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
            removeListener(event: 'close', listener: () => void): this;
            removeListener(event: 'data', listener: (chunk: any) => void): this;
            removeListener(event: 'end', listener: () => void): this;
            removeListener(event: 'error', listener: (err: Error) => void): this;
            removeListener(event: 'pause', listener: () => void): this;
            removeListener(event: 'readable', listener: () => void): this;
            removeListener(event: 'resume', listener: () => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
            [Symbol.asyncIterator](): AsyncIterableIterator<any>;
        }
        interface WritableOptions extends StreamOptions<Writable> {
            decodeStrings?: boolean | undefined;
            defaultEncoding?: BufferEncoding | undefined;
            write?(this: Writable, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(
                this: Writable,
                chunks: Array<{
                    chunk: any;
                    encoding: BufferEncoding;
                }>,
                callback: (error?: Error | null) => void
            ): void;
            final?(this: Writable, callback: (error?: Error | null) => void): void;
        }
        class Writable extends Stream implements NodeJS.WritableStream {
            readonly writable: boolean;
            readonly writableEnded: boolean;
            readonly writableFinished: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            readonly writableObjectMode: boolean;
            readonly writableCorked: number;
            destroyed: boolean;
            constructor(opts?: WritableOptions);
            _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            _writev?(
                chunks: Array<{
                    chunk: any;
                    encoding: BufferEncoding;
                }>,
                callback: (error?: Error | null) => void
            ): void;
            _construct?(callback: (error?: Error | null) => void): void;
            _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: any, callback?: (error: Error | null | undefined) => void): boolean;
            write(chunk: any, encoding: BufferEncoding, callback?: (error: Error | null | undefined) => void): boolean;
            setDefaultEncoding(encoding: BufferEncoding): this;
            end(cb?: () => void): this;
            end(chunk: any, cb?: () => void): this;
            end(chunk: any, encoding: BufferEncoding, cb?: () => void): this;
            cork(): void;
            uncork(): void;
            destroy(error?: Error): this;
            addListener(event: 'close', listener: () => void): this;
            addListener(event: 'drain', listener: () => void): this;
            addListener(event: 'error', listener: (err: Error) => void): this;
            addListener(event: 'finish', listener: () => void): this;
            addListener(event: 'pipe', listener: (src: Readable) => void): this;
            addListener(event: 'unpipe', listener: (src: Readable) => void): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;
            emit(event: 'close'): boolean;
            emit(event: 'drain'): boolean;
            emit(event: 'error', err: Error): boolean;
            emit(event: 'finish'): boolean;
            emit(event: 'pipe', src: Readable): boolean;
            emit(event: 'unpipe', src: Readable): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;
            on(event: 'close', listener: () => void): this;
            on(event: 'drain', listener: () => void): this;
            on(event: 'error', listener: (err: Error) => void): this;
            on(event: 'finish', listener: () => void): this;
            on(event: 'pipe', listener: (src: Readable) => void): this;
            on(event: 'unpipe', listener: (src: Readable) => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;
            once(event: 'close', listener: () => void): this;
            once(event: 'drain', listener: () => void): this;
            once(event: 'error', listener: (err: Error) => void): this;
            once(event: 'finish', listener: () => void): this;
            once(event: 'pipe', listener: (src: Readable) => void): this;
            once(event: 'unpipe', listener: (src: Readable) => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;
            prependListener(event: 'close', listener: () => void): this;
            prependListener(event: 'drain', listener: () => void): this;
            prependListener(event: 'error', listener: (err: Error) => void): this;
            prependListener(event: 'finish', listener: () => void): this;
            prependListener(event: 'pipe', listener: (src: Readable) => void): this;
            prependListener(event: 'unpipe', listener: (src: Readable) => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
            prependOnceListener(event: 'close', listener: () => void): this;
            prependOnceListener(event: 'drain', listener: () => void): this;
            prependOnceListener(event: 'error', listener: (err: Error) => void): this;
            prependOnceListener(event: 'finish', listener: () => void): this;
            prependOnceListener(event: 'pipe', listener: (src: Readable) => void): this;
            prependOnceListener(event: 'unpipe', listener: (src: Readable) => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
            removeListener(event: 'close', listener: () => void): this;
            removeListener(event: 'drain', listener: () => void): this;
            removeListener(event: 'error', listener: (err: Error) => void): this;
            removeListener(event: 'finish', listener: () => void): this;
            removeListener(event: 'pipe', listener: (src: Readable) => void): this;
            removeListener(event: 'unpipe', listener: (src: Readable) => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
        }
        interface DuplexOptions extends ReadableOptions, WritableOptions {
            allowHalfOpen?: boolean | undefined;
            readableObjectMode?: boolean | undefined;
            writableObjectMode?: boolean | undefined;
            readableHighWaterMark?: number | undefined;
            writableHighWaterMark?: number | undefined;
            writableCorked?: number | undefined;
            construct?(this: Duplex, callback: (error?: Error | null) => void): void;
            read?(this: Duplex, size: number): void;
            write?(this: Duplex, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(
                this: Duplex,
                chunks: Array<{
                    chunk: any;
                    encoding: BufferEncoding;
                }>,
                callback: (error?: Error | null) => void
            ): void;
            final?(this: Duplex, callback: (error?: Error | null) => void): void;
            destroy?(this: Duplex, error: Error | null, callback: (error: Error | null) => void): void;
        }
        class Duplex extends Readable implements Writable {
            readonly writable: boolean;
            readonly writableEnded: boolean;
            readonly writableFinished: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            readonly writableObjectMode: boolean;
            readonly writableCorked: number;
            allowHalfOpen: boolean;
            constructor(opts?: DuplexOptions);
            static from(src: Stream | Blob | ArrayBuffer | string | Iterable<any> | AsyncIterable<any> | AsyncGeneratorFunction | Promise<any> | Object): Duplex;
            _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            _writev?(
                chunks: Array<{
                    chunk: any;
                    encoding: BufferEncoding;
                }>,
                callback: (error?: Error | null) => void
            ): void;
            _destroy(error: Error | null, callback: (error: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: any, encoding?: BufferEncoding, cb?: (error: Error | null | undefined) => void): boolean;
            write(chunk: any, cb?: (error: Error | null | undefined) => void): boolean;
            setDefaultEncoding(encoding: BufferEncoding): this;
            end(cb?: () => void): this;
            end(chunk: any, cb?: () => void): this;
            end(chunk: any, encoding?: BufferEncoding, cb?: () => void): this;
            cork(): void;
            uncork(): void;
        }
        type TransformCallback = (error?: Error | null, data?: any) => void;
        interface TransformOptions extends DuplexOptions {
            construct?(this: Transform, callback: (error?: Error | null) => void): void;
            read?(this: Transform, size: number): void;
            write?(this: Transform, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(
                this: Transform,
                chunks: Array<{
                    chunk: any;
                    encoding: BufferEncoding;
                }>,
                callback: (error?: Error | null) => void
            ): void;
            final?(this: Transform, callback: (error?: Error | null) => void): void;
            destroy?(this: Transform, error: Error | null, callback: (error: Error | null) => void): void;
            transform?(this: Transform, chunk: any, encoding: BufferEncoding, callback: TransformCallback): void;
            flush?(this: Transform, callback: TransformCallback): void;
        }
        class Transform extends Duplex {
            constructor(opts?: TransformOptions);
            _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void;
            _flush(callback: TransformCallback): void;
        }
        class PassThrough extends Transform {}
        function addAbortSignal<T extends Stream>(signal: AbortSignal, stream: T): T;
        interface FinishedOptions extends Abortable {
            error?: boolean | undefined;
            readable?: boolean | undefined;
            writable?: boolean | undefined;
        }
        function finished(stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream, options: FinishedOptions, callback: (err?: NodeJS.ErrnoException | null) => void): () => void;
        function finished(stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream, callback: (err?: NodeJS.ErrnoException | null) => void): () => void;
        namespace finished {
            function __promisify__(stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream, options?: FinishedOptions): Promise<void>;
        }
        type PipelineSourceFunction<T> = () => Iterable<T> | AsyncIterable<T>;
        type PipelineSource<T> = Iterable<T> | AsyncIterable<T> | NodeJS.ReadableStream | PipelineSourceFunction<T>;
        type PipelineTransform<S extends PipelineTransformSource<any>, U> =
            | NodeJS.ReadWriteStream
            | ((source: S extends (...args: any[]) => Iterable<infer ST> | AsyncIterable<infer ST> ? AsyncIterable<ST> : S) => AsyncIterable<U>);
        type PipelineTransformSource<T> = PipelineSource<T> | PipelineTransform<any, T>;
        type PipelineDestinationIterableFunction<T> = (source: AsyncIterable<T>) => AsyncIterable<any>;
        type PipelineDestinationPromiseFunction<T, P> = (source: AsyncIterable<T>) => Promise<P>;
        type PipelineDestination<S extends PipelineTransformSource<any>, P> = S extends PipelineTransformSource<infer ST>
            ? NodeJS.WritableStream | PipelineDestinationIterableFunction<ST> | PipelineDestinationPromiseFunction<ST, P>
            : never;
        type PipelineCallback<S extends PipelineDestination<any, any>> = S extends PipelineDestinationPromiseFunction<any, infer P>
            ? (err: NodeJS.ErrnoException | null, value: P) => void
            : (err: NodeJS.ErrnoException | null) => void;
        type PipelinePromise<S extends PipelineDestination<any, any>> = S extends PipelineDestinationPromiseFunction<any, infer P> ? Promise<P> : Promise<void>;
        interface PipelineOptions {
            signal: AbortSignal;
        }
        function pipeline<A extends PipelineSource<any>, B extends PipelineDestination<A, any>>(
            source: A,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<A extends PipelineSource<any>, T1 extends PipelineTransform<A, any>, B extends PipelineDestination<T1, any>>(
            source: A,
            transform1: T1,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<A extends PipelineSource<any>, T1 extends PipelineTransform<A, any>, T2 extends PipelineTransform<T1, any>, B extends PipelineDestination<T2, any>>(
            source: A,
            transform1: T1,
            transform2: T2,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<
            A extends PipelineSource<any>,
            T1 extends PipelineTransform<A, any>,
            T2 extends PipelineTransform<T1, any>,
            T3 extends PipelineTransform<T2, any>,
            B extends PipelineDestination<T3, any>
        >(source: A, transform1: T1, transform2: T2, transform3: T3, destination: B, callback?: PipelineCallback<B>): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<
            A extends PipelineSource<any>,
            T1 extends PipelineTransform<A, any>,
            T2 extends PipelineTransform<T1, any>,
            T3 extends PipelineTransform<T2, any>,
            T4 extends PipelineTransform<T3, any>,
            B extends PipelineDestination<T4, any>
        >(source: A, transform1: T1, transform2: T2, transform3: T3, transform4: T4, destination: B, callback?: PipelineCallback<B>): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline(
            streams: ReadonlyArray<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>,
            callback?: (err: NodeJS.ErrnoException | null) => void
        ): NodeJS.WritableStream;
        function pipeline(
            stream1: NodeJS.ReadableStream,
            stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
            ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream | ((err: NodeJS.ErrnoException | null) => void)>
        ): NodeJS.WritableStream;
        namespace pipeline {
            function __promisify__<A extends PipelineSource<any>, B extends PipelineDestination<A, any>>(source: A, destination: B, options?: PipelineOptions): PipelinePromise<B>;
            function __promisify__<A extends PipelineSource<any>, T1 extends PipelineTransform<A, any>, B extends PipelineDestination<T1, any>>(
                source: A,
                transform1: T1,
                destination: B,
                options?: PipelineOptions
            ): PipelinePromise<B>;
            function __promisify__<A extends PipelineSource<any>, T1 extends PipelineTransform<A, any>, T2 extends PipelineTransform<T1, any>, B extends PipelineDestination<T2, any>>(
                source: A,
                transform1: T1,
                transform2: T2,
                destination: B,
                options?: PipelineOptions
            ): PipelinePromise<B>;
            function __promisify__<
                A extends PipelineSource<any>,
                T1 extends PipelineTransform<A, any>,
                T2 extends PipelineTransform<T1, any>,
                T3 extends PipelineTransform<T2, any>,
                B extends PipelineDestination<T3, any>
            >(source: A, transform1: T1, transform2: T2, transform3: T3, destination: B, options?: PipelineOptions): PipelinePromise<B>;
            function __promisify__<
                A extends PipelineSource<any>,
                T1 extends PipelineTransform<A, any>,
                T2 extends PipelineTransform<T1, any>,
                T3 extends PipelineTransform<T2, any>,
                T4 extends PipelineTransform<T3, any>,
                B extends PipelineDestination<T4, any>
            >(source: A, transform1: T1, transform2: T2, transform3: T3, transform4: T4, destination: B, options?: PipelineOptions): PipelinePromise<B>;
            function __promisify__(streams: ReadonlyArray<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>, options?: PipelineOptions): Promise<void>;
            function __promisify__(
                stream1: NodeJS.ReadableStream,
                stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
                ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream | PipelineOptions>
            ): Promise<void>;
        }
        interface Pipe {
            close(): void;
            hasRef(): boolean;
            ref(): void;
            unref(): void;
        }
        const promises: typeof streamPromises;
        const consumers: typeof streamConsumers;
    }
    export = internal;
}
declare module 'node:stream' {
    import stream = require('stream');
    export = stream;
}
declare module 'string_decoder' {
    class StringDecoder {
        constructor(encoding?: BufferEncoding);
        write(buffer: Buffer): string;
        end(buffer?: Buffer): string;
    }
}
declare module 'node:string_decoder' {
    export * from 'string_decoder';
}
declare module 'tls' {
    import { X509Certificate } from 'node:crypto';
    import * as net from 'node:net';
    import * as stream from 'stream';
    const CLIENT_RENEG_LIMIT: number;
    const CLIENT_RENEG_WINDOW: number;
    interface Certificate {
        C: string;
        ST: string;
        L: string;
        O: string;
        OU: string;
        CN: string;
    }
    interface PeerCertificate {
        subject: Certificate;
        issuer: Certificate;
        subjectaltname: string;
        infoAccess: NodeJS.Dict<string[]>;
        modulus: string;
        exponent: string;
        valid_from: string;
        valid_to: string;
        fingerprint: string;
        fingerprint256: string;
        ext_key_usage: string[];
        serialNumber: string;
        raw: Buffer;
    }
    interface DetailedPeerCertificate extends PeerCertificate {
        issuerCertificate: DetailedPeerCertificate;
    }
    interface CipherNameAndProtocol {
        name: string;
        version: string;
        standardName: string;
    }
    interface EphemeralKeyInfo {
        type: string;
        name?: string | undefined;
        size: number;
    }
    interface KeyObject {
        pem: string | Buffer;
        passphrase?: string | undefined;
    }
    interface PxfObject {
        buf: string | Buffer;
        passphrase?: string | undefined;
    }
    interface TLSSocketOptions extends SecureContextOptions, CommonConnectionOptions {
        isServer?: boolean | undefined;
        server?: net.Server | undefined;
        session?: Buffer | undefined;
        requestOCSP?: boolean | undefined;
    }
    class TLSSocket extends net.Socket {
        constructor(socket: net.Socket, options?: TLSSocketOptions);
        authorized: boolean;
        authorizationError: Error;
        encrypted: boolean;
        alpnProtocol: string | false | null;
        getCertificate(): PeerCertificate | object | null;
        getCipher(): CipherNameAndProtocol;
        getEphemeralKeyInfo(): EphemeralKeyInfo | object | null;
        getFinished(): Buffer | undefined;
        getPeerCertificate(detailed: true): DetailedPeerCertificate;
        getPeerCertificate(detailed?: false): PeerCertificate;
        getPeerCertificate(detailed?: boolean): PeerCertificate | DetailedPeerCertificate;
        getPeerFinished(): Buffer | undefined;
        getProtocol(): string | null;
        getSession(): Buffer | undefined;
        getSharedSigalgs(): string[];
        getTLSTicket(): Buffer | undefined;
        isSessionReused(): boolean;
        renegotiate(
            options: {
                rejectUnauthorized?: boolean | undefined;
                requestCert?: boolean | undefined;
            },
            callback: (err: Error | null) => void
        ): undefined | boolean;
        setMaxSendFragment(size: number): boolean;
        disableRenegotiation(): void;
        enableTrace(): void;
        getPeerX509Certificate(): X509Certificate | undefined;
        getX509Certificate(): X509Certificate | undefined;
        exportKeyingMaterial(length: number, label: string, context: Buffer): Buffer;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'OCSPResponse', listener: (response: Buffer) => void): this;
        addListener(event: 'secureConnect', listener: () => void): this;
        addListener(event: 'session', listener: (session: Buffer) => void): this;
        addListener(event: 'keylog', listener: (line: Buffer) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'OCSPResponse', response: Buffer): boolean;
        emit(event: 'secureConnect'): boolean;
        emit(event: 'session', session: Buffer): boolean;
        emit(event: 'keylog', line: Buffer): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'OCSPResponse', listener: (response: Buffer) => void): this;
        on(event: 'secureConnect', listener: () => void): this;
        on(event: 'session', listener: (session: Buffer) => void): this;
        on(event: 'keylog', listener: (line: Buffer) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'OCSPResponse', listener: (response: Buffer) => void): this;
        once(event: 'secureConnect', listener: () => void): this;
        once(event: 'session', listener: (session: Buffer) => void): this;
        once(event: 'keylog', listener: (line: Buffer) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'OCSPResponse', listener: (response: Buffer) => void): this;
        prependListener(event: 'secureConnect', listener: () => void): this;
        prependListener(event: 'session', listener: (session: Buffer) => void): this;
        prependListener(event: 'keylog', listener: (line: Buffer) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'OCSPResponse', listener: (response: Buffer) => void): this;
        prependOnceListener(event: 'secureConnect', listener: () => void): this;
        prependOnceListener(event: 'session', listener: (session: Buffer) => void): this;
        prependOnceListener(event: 'keylog', listener: (line: Buffer) => void): this;
    }
    interface CommonConnectionOptions {
        secureContext?: SecureContext | undefined;
        enableTrace?: boolean | undefined;
        requestCert?: boolean | undefined;
        ALPNProtocols?: string[] | Uint8Array[] | Uint8Array | undefined;
        SNICallback?: ((servername: string, cb: (err: Error | null, ctx?: SecureContext) => void) => void) | undefined;
        rejectUnauthorized?: boolean | undefined;
    }
    interface TlsOptions extends SecureContextOptions, CommonConnectionOptions, net.ServerOpts {
        handshakeTimeout?: number | undefined;
        sessionTimeout?: number | undefined;
        ticketKeys?: Buffer | undefined;
        pskCallback?(socket: TLSSocket, identity: string): DataView | NodeJS.TypedArray | null;
        pskIdentityHint?: string | undefined;
    }
    interface PSKCallbackNegotation {
        psk: DataView | NodeJS.TypedArray;
        identity: string;
    }
    interface ConnectionOptions extends SecureContextOptions, CommonConnectionOptions {
        host?: string | undefined;
        port?: number | undefined;
        path?: string | undefined;
        socket?: stream.Duplex | undefined;
        checkServerIdentity?: typeof checkServerIdentity | undefined;
        servername?: string | undefined;
        session?: Buffer | undefined;
        minDHSize?: number | undefined;
        lookup?: net.LookupFunction | undefined;
        timeout?: number | undefined;
        pskCallback?(hint: string | null): PSKCallbackNegotation | null;
    }
    class Server extends net.Server {
        constructor(secureConnectionListener?: (socket: TLSSocket) => void);
        constructor(options: TlsOptions, secureConnectionListener?: (socket: TLSSocket) => void);
        addContext(hostname: string, context: SecureContextOptions): void;
        getTicketKeys(): Buffer;
        setSecureContext(options: SecureContextOptions): void;
        setTicketKeys(keys: Buffer): void;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        addListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        addListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        addListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        addListener(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this;
        addListener(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'tlsClientError', err: Error, tlsSocket: TLSSocket): boolean;
        emit(event: 'newSession', sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void): boolean;
        emit(event: 'OCSPRequest', certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void): boolean;
        emit(event: 'resumeSession', sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void): boolean;
        emit(event: 'secureConnection', tlsSocket: TLSSocket): boolean;
        emit(event: 'keylog', line: Buffer, tlsSocket: TLSSocket): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        on(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        on(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        on(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        on(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this;
        on(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        once(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        once(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        once(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        once(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this;
        once(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        prependListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        prependListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        prependListener(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this;
        prependListener(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        prependOnceListener(event: 'newSession', listener: (sessionId: Buffer, sessionData: Buffer, callback: (err: Error, resp: Buffer) => void) => void): this;
        prependOnceListener(event: 'OCSPRequest', listener: (certificate: Buffer, issuer: Buffer, callback: (err: Error | null, resp: Buffer) => void) => void): this;
        prependOnceListener(event: 'resumeSession', listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void): this;
        prependOnceListener(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this;
        prependOnceListener(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this;
    }
    interface SecurePair {
        encrypted: TLSSocket;
        cleartext: TLSSocket;
    }
    type SecureVersion = 'TLSv1.3' | 'TLSv1.2' | 'TLSv1.1' | 'TLSv1';
    interface SecureContextOptions {
        ca?: string | Buffer | Array<string | Buffer> | undefined;
        cert?: string | Buffer | Array<string | Buffer> | undefined;
        sigalgs?: string | undefined;
        ciphers?: string | undefined;
        clientCertEngine?: string | undefined;
        crl?: string | Buffer | Array<string | Buffer> | undefined;
        dhparam?: string | Buffer | undefined;
        ecdhCurve?: string | undefined;
        honorCipherOrder?: boolean | undefined;
        key?: string | Buffer | Array<string | Buffer | KeyObject> | undefined;
        privateKeyEngine?: string | undefined;
        privateKeyIdentifier?: string | undefined;
        maxVersion?: SecureVersion | undefined;
        minVersion?: SecureVersion | undefined;
        passphrase?: string | undefined;
        pfx?: string | Buffer | Array<string | Buffer | PxfObject> | undefined;
        secureOptions?: number | undefined;
        secureProtocol?: string | undefined;
        sessionIdContext?: string | undefined;
        ticketKeys?: Buffer | undefined;
        sessionTimeout?: number | undefined;
    }
    interface SecureContext {
        context: any;
    }
    function checkServerIdentity(hostname: string, cert: PeerCertificate): Error | undefined;
    function createServer(secureConnectionListener?: (socket: TLSSocket) => void): Server;
    function createServer(options: TlsOptions, secureConnectionListener?: (socket: TLSSocket) => void): Server;
    function connect(options: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    function createSecurePair(context?: SecureContext, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
    function createSecureContext(options?: SecureContextOptions): SecureContext;
    function getCiphers(): string[];
    let DEFAULT_ECDH_CURVE: string;
    let DEFAULT_MAX_VERSION: SecureVersion;
    let DEFAULT_MIN_VERSION: SecureVersion;
    const rootCertificates: ReadonlyArray<string>;
}
declare module 'node:tls' {
    export * from 'tls';
}
declare module 'trace_events' {
    interface Tracing {
        readonly categories: string;
        disable(): void;
        enable(): void;
        readonly enabled: boolean;
    }
    interface CreateTracingOptions {
        categories: string[];
    }
    function createTracing(options: CreateTracingOptions): Tracing;
    function getEnabledCategories(): string | undefined;
}
declare module 'node:trace_events' {
    export * from 'trace_events';
}
declare module 'tty' {
    import * as net from 'node:net';
    function isatty(fd: number): boolean;
    class ReadStream extends net.Socket {
        constructor(fd: number, options?: net.SocketConstructorOpts);
        isRaw: boolean;
        setRawMode(mode: boolean): this;
        isTTY: boolean;
    }
    type Direction = -1 | 0 | 1;
    class WriteStream extends net.Socket {
        constructor(fd: number);
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: 'resize', listener: () => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: 'resize'): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: 'resize', listener: () => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: 'resize', listener: () => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: 'resize', listener: () => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'resize', listener: () => void): this;
        clearLine(dir: Direction, callback?: () => void): boolean;
        clearScreenDown(callback?: () => void): boolean;
        cursorTo(x: number, y?: number, callback?: () => void): boolean;
        cursorTo(x: number, callback: () => void): boolean;
        moveCursor(dx: number, dy: number, callback?: () => void): boolean;
        getColorDepth(env?: object): number;
        hasColors(count?: number): boolean;
        hasColors(env?: object): boolean;
        hasColors(count: number, env?: object): boolean;
        getWindowSize(): [number, number];
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}
declare module 'node:tty' {
    export * from 'tty';
}
declare module 'url' {
    import { Blob } from 'node:buffer';
    import { ClientRequestArgs } from 'node:http';
    import { ParsedUrlQuery, ParsedUrlQueryInput } from 'node:querystring';
    interface UrlObject {
        auth?: string | null | undefined;
        hash?: string | null | undefined;
        host?: string | null | undefined;
        hostname?: string | null | undefined;
        href?: string | null | undefined;
        pathname?: string | null | undefined;
        protocol?: string | null | undefined;
        search?: string | null | undefined;
        slashes?: boolean | null | undefined;
        port?: string | number | null | undefined;
        query?: string | null | ParsedUrlQueryInput | undefined;
    }
    interface Url {
        auth: string | null;
        hash: string | null;
        host: string | null;
        hostname: string | null;
        href: string;
        path: string | null;
        pathname: string | null;
        protocol: string | null;
        search: string | null;
        slashes: boolean | null;
        port: string | null;
        query: string | null | ParsedUrlQuery;
    }
    interface UrlWithParsedQuery extends Url {
        query: ParsedUrlQuery;
    }
    interface UrlWithStringQuery extends Url {
        query: string | null;
    }
    function parse(urlString: string): UrlWithStringQuery;
    function parse(urlString: string, parseQueryString: false | undefined, slashesDenoteHost?: boolean): UrlWithStringQuery;
    function parse(urlString: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery;
    function parse(urlString: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url;
    function format(urlObject: URL, options?: URLFormatOptions): string;
    function format(urlObject: UrlObject | string): string;
    function resolve(from: string, to: string): string;
    function domainToASCII(domain: string): string;
    function domainToUnicode(domain: string): string;
    function fileURLToPath(url: string | URL): string;
    function pathToFileURL(path: string): URL;
    function urlToHttpOptions(url: URL): ClientRequestArgs;
    interface URLFormatOptions {
        auth?: boolean | undefined;
        fragment?: boolean | undefined;
        search?: boolean | undefined;
        unicode?: boolean | undefined;
    }
    class URL {
        static createObjectURL(blob: Blob): string;
        static revokeObjectURL(objectUrl: string): void;
        constructor(input: string, base?: string | URL);
        hash: string;
        host: string;
        hostname: string;
        href: string;
        readonly origin: string;
        password: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        readonly searchParams: URLSearchParams;
        username: string;
        toString(): string;
        toJSON(): string;
    }
    class URLSearchParams implements Iterable<[string, string]> {
        constructor(init?: URLSearchParams | string | Record<string, string | ReadonlyArray<string>> | Iterable<[string, string]> | ReadonlyArray<[string, string]>);
        append(name: string, value: string): void;
        delete(name: string): void;
        entries(): IterableIterator<[string, string]>;
        forEach<TThis = this>(callback: (this: TThis, value: string, name: string, searchParams: URLSearchParams) => void, thisArg?: TThis): void;
        get(name: string): string | null;
        getAll(name: string): string[];
        has(name: string): boolean;
        keys(): IterableIterator<string>;
        set(name: string, value: string): void;
        sort(): void;
        toString(): string;
        values(): IterableIterator<string>;
        [Symbol.iterator](): IterableIterator<[string, string]>;
    }
    import { URL as _URL, URLSearchParams as _URLSearchParams } from 'url';
    global {
        interface URLSearchParams extends _URLSearchParams {}
        interface URL extends _URL {}
        interface Global {
            URL: typeof _URL;
            URLSearchParams: typeof _URLSearchParams;
        }
        var URL:
            typeof globalThis extends { onmessage: any, URL: infer URL }
                ? URL
                : typeof _URL;
        var URLSearchParams:
            typeof globalThis extends { onmessage: any, URLSearchParams: infer URLSearchParams }
                ? URLSearchParams
                : typeof _URLSearchParams;
    }
}
declare module 'node:url' {
    export * from 'url';
}
declare module 'util' {
    import * as types from 'node:util/types';
    export interface InspectOptions {
        getters?: 'get' | 'set' | boolean | undefined;
        showHidden?: boolean | undefined;
        depth?: number | null | undefined;
        colors?: boolean | undefined;
        customInspect?: boolean | undefined;
        showProxy?: boolean | undefined;
        maxArrayLength?: number | null | undefined;
        maxStringLength?: number | null | undefined;
        breakLength?: number | undefined;
        compact?: boolean | number | undefined;
        sorted?: boolean | ((a: string, b: string) => number) | undefined;
    }
    export type Style = 'special' | 'number' | 'bigint' | 'boolean' | 'undefined' | 'null' | 'string' | 'symbol' | 'date' | 'regexp' | 'module';
    export type CustomInspectFunction = (depth: number, options: InspectOptionsStylized) => string;
    export interface InspectOptionsStylized extends InspectOptions {
        stylize(text: string, styleType: Style): string;
    }
    export function format(format?: any, ...param: any[]): string;
    export function formatWithOptions(inspectOptions: InspectOptions, format?: any, ...param: any[]): string;
    export function getSystemErrorName(err: number): string;
    export function getSystemErrorMap(): Map<number, [string, string]>;
    export function log(string: string): void;
    export function toUSVString(string: string): string;
    export function inspect(object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string;
    export function inspect(object: any, options?: InspectOptions): string;
    export namespace inspect {
        let colors: NodeJS.Dict<[number, number]>;
        let styles: {
            [K in Style]: string;
        };
        let defaultOptions: InspectOptions;
        let replDefaults: InspectOptions;
        const custom: unique symbol;
    }
    export function isArray(object: unknown): object is unknown[];
    export function isRegExp(object: unknown): object is RegExp;
    export function isDate(object: unknown): object is Date;
    export function isError(object: unknown): object is Error;
    export function inherits(constructor: unknown, superConstructor: unknown): void;
    export type DebugLoggerFunction = (msg: string, ...param: unknown[]) => void;
    export interface DebugLogger extends DebugLoggerFunction {
        enabled: boolean;
    }
    export function debuglog(section: string, callback?: (fn: DebugLoggerFunction) => void): DebugLogger;
    export const debug: typeof debuglog;
    export function isBoolean(object: unknown): object is boolean;
    export function isBuffer(object: unknown): object is Buffer;
    export function isFunction(object: unknown): boolean;
    export function isNull(object: unknown): object is null;
    export function isNullOrUndefined(object: unknown): object is null | undefined;
    export function isNumber(object: unknown): object is number;
    export function isObject(object: unknown): boolean;
    export function isPrimitive(object: unknown): boolean;
    export function isString(object: unknown): object is string;
    export function isSymbol(object: unknown): object is symbol;
    export function isUndefined(object: unknown): object is undefined;
    export function deprecate<T extends Function>(fn: T, msg: string, code?: string): T;
    export function isDeepStrictEqual(val1: unknown, val2: unknown): boolean;
    export function stripVTControlCharacters(str: string): string;
    export function callbackify(fn: () => Promise<void>): (callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<TResult>(fn: () => Promise<TResult>): (callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
    export function callbackify<T1>(fn: (arg1: T1) => Promise<void>): (arg1: T1, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, TResult>(fn: (arg1: T1) => Promise<TResult>): (arg1: T1, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
    export function callbackify<T1, T2>(fn: (arg1: T1, arg2: T2) => Promise<void>): (arg1: T1, arg2: T2, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2) => Promise<TResult>): (arg1: T1, arg2: T2, callback: (err: NodeJS.ErrnoException | null, result: TResult) => void) => void;
    export function callbackify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, T3, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>
    ): (arg1: T1, arg2: T2, arg3: T3, callback: (err: NodeJS.ErrnoException | null, result: TResult) => void) => void;
    export function callbackify<T1, T2, T3, T4>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, T3, T4, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: NodeJS.ErrnoException | null, result: TResult) => void) => void;
    export function callbackify<T1, T2, T3, T4, T5>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, T3, T4, T5, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: NodeJS.ErrnoException | null, result: TResult) => void) => void;
    export function callbackify<T1, T2, T3, T4, T5, T6>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, T3, T4, T5, T6, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<TResult>
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: NodeJS.ErrnoException | null, result: TResult) => void) => void;
    export interface CustomPromisifyLegacy<TCustom extends Function> extends Function {
        __promisify__: TCustom;
    }
    export interface CustomPromisifySymbol<TCustom extends Function> extends Function {
        [promisify.custom]: TCustom;
    }
    export type CustomPromisify<TCustom extends Function> = CustomPromisifySymbol<TCustom> | CustomPromisifyLegacy<TCustom>;
    export function promisify<TCustom extends Function>(fn: CustomPromisify<TCustom>): TCustom;
    export function promisify<TResult>(fn: (callback: (err: any, result: TResult) => void) => void): () => Promise<TResult>;
    export function promisify(fn: (callback: (err?: any) => void) => void): () => Promise<void>;
    export function promisify<T1, TResult>(fn: (arg1: T1, callback: (err: any, result: TResult) => void) => void): (arg1: T1) => Promise<TResult>;
    export function promisify<T1>(fn: (arg1: T1, callback: (err?: any) => void) => void): (arg1: T1) => Promise<void>;
    export function promisify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2, callback: (err: any, result: TResult) => void) => void): (arg1: T1, arg2: T2) => Promise<TResult>;
    export function promisify<T1, T2>(fn: (arg1: T1, arg2: T2, callback: (err?: any) => void) => void): (arg1: T1, arg2: T2) => Promise<void>;
    export function promisify<T1, T2, T3, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
    export function promisify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: any) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
    export function promisify<T1, T2, T3, T4, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: any, result: TResult) => void) => void
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
    export function promisify<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: any) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
    export function promisify<T1, T2, T3, T4, T5, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: any, result: TResult) => void) => void
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
    export function promisify<T1, T2, T3, T4, T5>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: any) => void) => void
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
    export function promisify(fn: Function): Function;
    export namespace promisify {
        const custom: unique symbol;
    }
    export class TextDecoder {
        readonly encoding: string;
        readonly fatal: boolean;
        readonly ignoreBOM: boolean;
        constructor(
            encoding?: string,
            options?: {
                fatal?: boolean | undefined;
                ignoreBOM?: boolean | undefined;
            }
        );
        decode(
            input?: NodeJS.ArrayBufferView | ArrayBuffer | null,
            options?: {
                stream?: boolean | undefined;
            }
        ): string;
    }
    export interface EncodeIntoResult {
        read: number;
        written: number;
    }
    export { types };
    export class TextEncoder {
        readonly encoding: string;
        encode(input?: string): Uint8Array;
        encodeInto(src: string, dest: Uint8Array): EncodeIntoResult;
    }
}
declare module 'util/types' {
    export * from 'util/types';
}
declare module 'util/types' {
    import { KeyObject, webcrypto } from 'node:crypto';
    function isAnyArrayBuffer(object: unknown): object is ArrayBufferLike;
    function isArgumentsObject(object: unknown): object is IArguments;
    function isArrayBuffer(object: unknown): object is ArrayBuffer;
    function isArrayBufferView(object: unknown): object is NodeJS.ArrayBufferView;
    function isAsyncFunction(object: unknown): boolean;
    function isBigInt64Array(value: unknown): value is BigInt64Array;
    function isBigUint64Array(value: unknown): value is BigUint64Array;
    function isBooleanObject(object: unknown): object is Boolean;
    function isBoxedPrimitive(object: unknown): object is String | Number | BigInt | Boolean | Symbol;
    function isDataView(object: unknown): object is DataView;
    function isDate(object: unknown): object is Date;
    function isExternal(object: unknown): boolean;
    function isFloat32Array(object: unknown): object is Float32Array;
    function isFloat64Array(object: unknown): object is Float64Array;
    function isGeneratorFunction(object: unknown): object is GeneratorFunction;
    function isGeneratorObject(object: unknown): object is Generator;
    function isInt8Array(object: unknown): object is Int8Array;
    function isInt16Array(object: unknown): object is Int16Array;
    function isInt32Array(object: unknown): object is Int32Array;
    function isMap<T>(object: T | {}): object is T extends ReadonlyMap<any, any> ? (unknown extends T ? never : ReadonlyMap<any, any>) : Map<unknown, unknown>;
    function isMapIterator(object: unknown): boolean;
    function isModuleNamespaceObject(value: unknown): boolean;
    function isNativeError(object: unknown): object is Error;
    function isNumberObject(object: unknown): object is Number;
    function isPromise(object: unknown): object is Promise<unknown>;
    function isProxy(object: unknown): boolean;
    function isRegExp(object: unknown): object is RegExp;
    function isSet<T>(object: T | {}): object is T extends ReadonlySet<any> ? (unknown extends T ? never : ReadonlySet<any>) : Set<unknown>;
    function isSetIterator(object: unknown): boolean;
    function isSharedArrayBuffer(object: unknown): object is SharedArrayBuffer;
    function isStringObject(object: unknown): object is String;
    function isSymbolObject(object: unknown): object is Symbol;
    function isTypedArray(object: unknown): object is NodeJS.TypedArray;
    function isUint8Array(object: unknown): object is Uint8Array;
    function isUint8ClampedArray(object: unknown): object is Uint8ClampedArray;
    function isUint16Array(object: unknown): object is Uint16Array;
    function isUint32Array(object: unknown): object is Uint32Array;
    function isWeakMap(object: unknown): object is WeakMap<object, unknown>;
    function isWeakSet(object: unknown): object is WeakSet<object>;
    function isKeyObject(object: unknown): object is KeyObject;
    function isCryptoKey(object: unknown): object is webcrypto.CryptoKey;
}
declare module 'node:util' {
    export * from 'util';
}
declare module 'node:util/types' {
    export * from 'util/types';
}
declare module 'v8' {
    import { Readable } from 'node:stream';
    interface HeapSpaceInfo {
        space_name: string;
        space_size: number;
        space_used_size: number;
        space_available_size: number;
        physical_space_size: number;
    }
    type DoesZapCodeSpaceFlag = 0 | 1;
    interface HeapInfo {
        total_heap_size: number;
        total_heap_size_executable: number;
        total_physical_size: number;
        total_available_size: number;
        used_heap_size: number;
        heap_size_limit: number;
        malloced_memory: number;
        peak_malloced_memory: number;
        does_zap_garbage: DoesZapCodeSpaceFlag;
        number_of_native_contexts: number;
        number_of_detached_contexts: number;
    }
    interface HeapCodeStatistics {
        code_and_metadata_size: number;
        bytecode_and_metadata_size: number;
        external_script_source_size: number;
    }
    function cachedDataVersionTag(): number;
    function getHeapStatistics(): HeapInfo;
    function getHeapSpaceStatistics(): HeapSpaceInfo[];
    function setFlagsFromString(flags: string): void;
    function getHeapSnapshot(): Readable;
    function writeHeapSnapshot(filename?: string): string;
    function getHeapCodeStatistics(): HeapCodeStatistics;
    class Serializer {
        writeHeader(): void;
        writeValue(val: any): boolean;
        releaseBuffer(): Buffer;
        transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void;
        writeUint32(value: number): void;
        writeUint64(hi: number, lo: number): void;
        writeDouble(value: number): void;
        writeRawBytes(buffer: NodeJS.TypedArray): void;
    }
    class DefaultSerializer extends Serializer {}
    class Deserializer {
        constructor(data: NodeJS.TypedArray);
        readHeader(): boolean;
        readValue(): any;
        transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void;
        getWireFormatVersion(): number;
        readUint32(): number;
        readUint64(): [number, number];
        readDouble(): number;
        readRawBytes(length: number): Buffer;
    }
    class DefaultDeserializer extends Deserializer {}
    function serialize(value: any): Buffer;
    function deserialize(buffer: NodeJS.TypedArray): any;
    function takeCoverage(): void;
    function stopCoverage(): void;
}
declare module 'node:v8' {
    export * from 'v8';
}
declare module 'wasi' {
    interface WASIOptions {
        args?: string[] | undefined;
        env?: object | undefined;
        preopens?: NodeJS.Dict<string> | undefined;
        returnOnExit?: boolean | undefined;
        stdin?: number | undefined;
        stdout?: number | undefined;
        stderr?: number | undefined;
    }
    class WASI {
        constructor(options?: WASIOptions);
        start(instance: object): void;
        initialize(instance: object): void;
        readonly wasiImport: NodeJS.Dict<any>;
    }
}
declare module 'node:wasi' {
    export * from 'wasi';
}
declare module 'worker_threads' {
    import { Blob } from 'node:buffer';
    import { Context } from 'node:vm';
    import { EventEmitter } from 'node:events';
    import { EventLoopUtilityFunction } from 'node:perf_hooks';
    import { FileHandle } from 'node:fs/promises';
    import { Readable, Writable } from 'node:stream';
    import { URL } from 'node:url';
    import { X509Certificate } from 'node:crypto';
    const isMainThread: boolean;
    const parentPort: null | MessagePort;
    const resourceLimits: ResourceLimits;
    const SHARE_ENV: unique symbol;
    const threadId: number;
    const workerData: any;
    class MessageChannel {
        readonly port1: MessagePort;
        readonly port2: MessagePort;
    }
    interface WorkerPerformance {
        eventLoopUtilization: EventLoopUtilityFunction;
    }
    type TransferListItem = ArrayBuffer | MessagePort | FileHandle | X509Certificate | Blob;
    class MessagePort extends EventEmitter {
        close(): void;
        postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void;
        ref(): void;
        unref(): void;
        start(): void;
        addListener(event: 'close', listener: () => void): this;
        addListener(event: 'message', listener: (value: any) => void): this;
        addListener(event: 'messageerror', listener: (error: Error) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'close'): boolean;
        emit(event: 'message', value: any): boolean;
        emit(event: 'messageerror', error: Error): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'close', listener: () => void): this;
        on(event: 'message', listener: (value: any) => void): this;
        on(event: 'messageerror', listener: (error: Error) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'close', listener: () => void): this;
        once(event: 'message', listener: (value: any) => void): this;
        once(event: 'messageerror', listener: (error: Error) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'close', listener: () => void): this;
        prependListener(event: 'message', listener: (value: any) => void): this;
        prependListener(event: 'messageerror', listener: (error: Error) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'close', listener: () => void): this;
        prependOnceListener(event: 'message', listener: (value: any) => void): this;
        prependOnceListener(event: 'messageerror', listener: (error: Error) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
        removeListener(event: 'close', listener: () => void): this;
        removeListener(event: 'message', listener: (value: any) => void): this;
        removeListener(event: 'messageerror', listener: (error: Error) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
        off(event: 'close', listener: () => void): this;
        off(event: 'message', listener: (value: any) => void): this;
        off(event: 'messageerror', listener: (error: Error) => void): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    interface WorkerOptions {
        argv?: any[] | undefined;
        env?: NodeJS.Dict<string> | typeof SHARE_ENV | undefined;
        eval?: boolean | undefined;
        workerData?: any;
        stdin?: boolean | undefined;
        stdout?: boolean | undefined;
        stderr?: boolean | undefined;
        execArgv?: string[] | undefined;
        resourceLimits?: ResourceLimits | undefined;
        transferList?: TransferListItem[] | undefined;
        trackUnmanagedFds?: boolean | undefined;
    }
    interface ResourceLimits {
        maxYoungGenerationSizeMb?: number | undefined;
        maxOldGenerationSizeMb?: number | undefined;
        codeRangeSizeMb?: number | undefined;
        stackSizeMb?: number | undefined;
    }
    class Worker extends EventEmitter {
        readonly stdin: Writable | null;
        readonly stdout: Readable;
        readonly stderr: Readable;
        readonly threadId: number;
        readonly resourceLimits?: ResourceLimits | undefined;
        readonly performance: WorkerPerformance;
        constructor(filename: string | URL, options?: WorkerOptions);
        postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void;
        ref(): void;
        unref(): void;
        terminate(): Promise<number>;
        getHeapSnapshot(): Promise<Readable>;
        addListener(event: 'error', listener: (err: Error) => void): this;
        addListener(event: 'exit', listener: (exitCode: number) => void): this;
        addListener(event: 'message', listener: (value: any) => void): this;
        addListener(event: 'messageerror', listener: (error: Error) => void): this;
        addListener(event: 'online', listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: 'error', err: Error): boolean;
        emit(event: 'exit', exitCode: number): boolean;
        emit(event: 'message', value: any): boolean;
        emit(event: 'messageerror', error: Error): boolean;
        emit(event: 'online'): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: 'error', listener: (err: Error) => void): this;
        on(event: 'exit', listener: (exitCode: number) => void): this;
        on(event: 'message', listener: (value: any) => void): this;
        on(event: 'messageerror', listener: (error: Error) => void): this;
        on(event: 'online', listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: 'error', listener: (err: Error) => void): this;
        once(event: 'exit', listener: (exitCode: number) => void): this;
        once(event: 'message', listener: (value: any) => void): this;
        once(event: 'messageerror', listener: (error: Error) => void): this;
        once(event: 'online', listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: 'error', listener: (err: Error) => void): this;
        prependListener(event: 'exit', listener: (exitCode: number) => void): this;
        prependListener(event: 'message', listener: (value: any) => void): this;
        prependListener(event: 'messageerror', listener: (error: Error) => void): this;
        prependListener(event: 'online', listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: 'error', listener: (err: Error) => void): this;
        prependOnceListener(event: 'exit', listener: (exitCode: number) => void): this;
        prependOnceListener(event: 'message', listener: (value: any) => void): this;
        prependOnceListener(event: 'messageerror', listener: (error: Error) => void): this;
        prependOnceListener(event: 'online', listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
        removeListener(event: 'error', listener: (err: Error) => void): this;
        removeListener(event: 'exit', listener: (exitCode: number) => void): this;
        removeListener(event: 'message', listener: (value: any) => void): this;
        removeListener(event: 'messageerror', listener: (error: Error) => void): this;
        removeListener(event: 'online', listener: () => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
        off(event: 'error', listener: (err: Error) => void): this;
        off(event: 'exit', listener: (exitCode: number) => void): this;
        off(event: 'message', listener: (value: any) => void): this;
        off(event: 'messageerror', listener: (error: Error) => void): this;
        off(event: 'online', listener: () => void): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    interface BroadcastChannel extends NodeJS.RefCounted {}
    class BroadcastChannel {
        readonly name: string;
        onmessage: (message: unknown) => void;
        onmessageerror: (message: unknown) => void;
        constructor(name: string);
        close(): void;
        postMessage(message: unknown): void;
    }
    function markAsUntransferable(object: object): void;
    function moveMessagePortToContext(port: MessagePort, contextifiedSandbox: Context): MessagePort;
    function receiveMessageOnPort(port: MessagePort):
        | {
              message: any;
          }
        | undefined;
    type Serializable = string | object | number | boolean | bigint;
    function getEnvironmentData(key: Serializable): Serializable;
    function setEnvironmentData(key: Serializable, value: Serializable): void;
}
declare module 'node:worker_threads' {
    export * from 'worker_threads';
}
declare module 'zlib' {
    import * as stream from 'node:stream';
    interface ZlibOptions {
        flush?: number | undefined;
        finishFlush?: number | undefined;
        chunkSize?: number | undefined;
        windowBits?: number | undefined;
        level?: number | undefined;
        memLevel?: number | undefined;
        strategy?: number | undefined;
        dictionary?: NodeJS.ArrayBufferView | ArrayBuffer | undefined;
        info?: boolean | undefined;
        maxOutputLength?: number | undefined;
    }
    interface BrotliOptions {
        flush?: number | undefined;
        finishFlush?: number | undefined;
        chunkSize?: number | undefined;
        params?:
            | {
                  [key: number]: boolean | number;
              }
            | undefined;
        maxOutputLength?: number | undefined;
    }
    interface Zlib {
        readonly bytesRead: number;
        readonly bytesWritten: number;
        shell?: boolean | string | undefined;
        close(callback?: () => void): void;
        flush(kind?: number, callback?: () => void): void;
        flush(callback?: () => void): void;
    }
    interface ZlibParams {
        params(level: number, strategy: number, callback: () => void): void;
    }
    interface ZlibReset {
        reset(): void;
    }
    interface BrotliCompress extends stream.Transform, Zlib {}
    interface BrotliDecompress extends stream.Transform, Zlib {}
    interface Gzip extends stream.Transform, Zlib {}
    interface Gunzip extends stream.Transform, Zlib {}
    interface Deflate extends stream.Transform, Zlib, ZlibReset, ZlibParams {}
    interface Inflate extends stream.Transform, Zlib, ZlibReset {}
    interface DeflateRaw extends stream.Transform, Zlib, ZlibReset, ZlibParams {}
    interface InflateRaw extends stream.Transform, Zlib, ZlibReset {}
    interface Unzip extends stream.Transform, Zlib {}
    function createBrotliCompress(options?: BrotliOptions): BrotliCompress;
    function createBrotliDecompress(options?: BrotliOptions): BrotliDecompress;
    function createGzip(options?: ZlibOptions): Gzip;
    function createGunzip(options?: ZlibOptions): Gunzip;
    function createDeflate(options?: ZlibOptions): Deflate;
    function createInflate(options?: ZlibOptions): Inflate;
    function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    function createInflateRaw(options?: ZlibOptions): InflateRaw;
    function createUnzip(options?: ZlibOptions): Unzip;
    type InputType = string | ArrayBuffer | NodeJS.ArrayBufferView;
    type CompressCallback = (error: Error | null, result: Buffer) => void;
    function brotliCompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
    function brotliCompress(buf: InputType, callback: CompressCallback): void;
    namespace brotliCompress {
        function __promisify__(buffer: InputType, options?: BrotliOptions): Promise<Buffer>;
    }
    function brotliCompressSync(buf: InputType, options?: BrotliOptions): Buffer;
    function brotliDecompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void;
    function brotliDecompress(buf: InputType, callback: CompressCallback): void;
    namespace brotliDecompress {
        function __promisify__(buffer: InputType, options?: BrotliOptions): Promise<Buffer>;
    }
    function brotliDecompressSync(buf: InputType, options?: BrotliOptions): Buffer;
    function deflate(buf: InputType, callback: CompressCallback): void;
    function deflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace deflate {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }
    function deflateSync(buf: InputType, options?: ZlibOptions): Buffer;
    function deflateRaw(buf: InputType, callback: CompressCallback): void;
    function deflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace deflateRaw {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }
    function deflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
    function gzip(buf: InputType, callback: CompressCallback): void;
    function gzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace gzip {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }
    function gzipSync(buf: InputType, options?: ZlibOptions): Buffer;
    function gunzip(buf: InputType, callback: CompressCallback): void;
    function gunzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace gunzip {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }
    function gunzipSync(buf: InputType, options?: ZlibOptions): Buffer;
    function inflate(buf: InputType, callback: CompressCallback): void;
    function inflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace inflate {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }
    function inflateSync(buf: InputType, options?: ZlibOptions): Buffer;
    function inflateRaw(buf: InputType, callback: CompressCallback): void;
    function inflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace inflateRaw {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }
    function inflateRawSync(buf: InputType, options?: ZlibOptions): Buffer;
    function unzip(buf: InputType, callback: CompressCallback): void;
    function unzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void;
    namespace unzip {
        function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>;
    }
    function unzipSync(buf: InputType, options?: ZlibOptions): Buffer;
    namespace constants {
        const BROTLI_DECODE: number;
        const BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: number;
        const BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: number;
        const BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: number;
        const BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: number;
        const BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: number;
        const BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: number;
        const BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: number;
        const BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: number;
        const BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: number;
        const BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: number;
        const BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: number;
        const BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: number;
        const BROTLI_DECODER_ERROR_FORMAT_DISTANCE: number;
        const BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: number;
        const BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: number;
        const BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: number;
        const BROTLI_DECODER_ERROR_FORMAT_PADDING_1: number;
        const BROTLI_DECODER_ERROR_FORMAT_PADDING_2: number;
        const BROTLI_DECODER_ERROR_FORMAT_RESERVED: number;
        const BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: number;
        const BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: number;
        const BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: number;
        const BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: number;
        const BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: number;
        const BROTLI_DECODER_ERROR_UNREACHABLE: number;
        const BROTLI_DECODER_NEEDS_MORE_INPUT: number;
        const BROTLI_DECODER_NEEDS_MORE_OUTPUT: number;
        const BROTLI_DECODER_NO_ERROR: number;
        const BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: number;
        const BROTLI_DECODER_PARAM_LARGE_WINDOW: number;
        const BROTLI_DECODER_RESULT_ERROR: number;
        const BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: number;
        const BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: number;
        const BROTLI_DECODER_RESULT_SUCCESS: number;
        const BROTLI_DECODER_SUCCESS: number;
        const BROTLI_DEFAULT_MODE: number;
        const BROTLI_DEFAULT_QUALITY: number;
        const BROTLI_DEFAULT_WINDOW: number;
        const BROTLI_ENCODE: number;
        const BROTLI_LARGE_MAX_WINDOW_BITS: number;
        const BROTLI_MAX_INPUT_BLOCK_BITS: number;
        const BROTLI_MAX_QUALITY: number;
        const BROTLI_MAX_WINDOW_BITS: number;
        const BROTLI_MIN_INPUT_BLOCK_BITS: number;
        const BROTLI_MIN_QUALITY: number;
        const BROTLI_MIN_WINDOW_BITS: number;
        const BROTLI_MODE_FONT: number;
        const BROTLI_MODE_GENERIC: number;
        const BROTLI_MODE_TEXT: number;
        const BROTLI_OPERATION_EMIT_METADATA: number;
        const BROTLI_OPERATION_FINISH: number;
        const BROTLI_OPERATION_FLUSH: number;
        const BROTLI_OPERATION_PROCESS: number;
        const BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: number;
        const BROTLI_PARAM_LARGE_WINDOW: number;
        const BROTLI_PARAM_LGBLOCK: number;
        const BROTLI_PARAM_LGWIN: number;
        const BROTLI_PARAM_MODE: number;
        const BROTLI_PARAM_NDIRECT: number;
        const BROTLI_PARAM_NPOSTFIX: number;
        const BROTLI_PARAM_QUALITY: number;
        const BROTLI_PARAM_SIZE_HINT: number;
        const DEFLATE: number;
        const DEFLATERAW: number;
        const GUNZIP: number;
        const GZIP: number;
        const INFLATE: number;
        const INFLATERAW: number;
        const UNZIP: number;
        const Z_NO_FLUSH: number;
        const Z_PARTIAL_FLUSH: number;
        const Z_SYNC_FLUSH: number;
        const Z_FULL_FLUSH: number;
        const Z_FINISH: number;
        const Z_BLOCK: number;
        const Z_TREES: number;
        const Z_OK: number;
        const Z_STREAM_END: number;
        const Z_NEED_DICT: number;
        const Z_ERRNO: number;
        const Z_STREAM_ERROR: number;
        const Z_DATA_ERROR: number;
        const Z_MEM_ERROR: number;
        const Z_BUF_ERROR: number;
        const Z_VERSION_ERROR: number;
        const Z_NO_COMPRESSION: number;
        const Z_BEST_SPEED: number;
        const Z_BEST_COMPRESSION: number;
        const Z_DEFAULT_COMPRESSION: number;
        const Z_FILTERED: number;
        const Z_HUFFMAN_ONLY: number;
        const Z_RLE: number;
        const Z_FIXED: number;
        const Z_DEFAULT_STRATEGY: number;
        const Z_DEFAULT_WINDOWBITS: number;
        const Z_MIN_WINDOWBITS: number;
        const Z_MAX_WINDOWBITS: number;
        const Z_MIN_CHUNK: number;
        const Z_MAX_CHUNK: number;
        const Z_DEFAULT_CHUNK: number;
        const Z_MIN_MEMLEVEL: number;
        const Z_MAX_MEMLEVEL: number;
        const Z_DEFAULT_MEMLEVEL: number;
        const Z_MIN_LEVEL: number;
        const Z_MAX_LEVEL: number;
        const Z_DEFAULT_LEVEL: number;
        const ZLIB_VERNUM: number;
    }
    const Z_NO_FLUSH: number;
    const Z_PARTIAL_FLUSH: number;
    const Z_SYNC_FLUSH: number;
    const Z_FULL_FLUSH: number;
    const Z_FINISH: number;
    const Z_BLOCK: number;
    const Z_TREES: number;
    const Z_OK: number;
    const Z_STREAM_END: number;
    const Z_NEED_DICT: number;
    const Z_ERRNO: number;
    const Z_STREAM_ERROR: number;
    const Z_DATA_ERROR: number;
    const Z_MEM_ERROR: number;
    const Z_BUF_ERROR: number;
    const Z_VERSION_ERROR: number;
    const Z_NO_COMPRESSION: number;
    const Z_BEST_SPEED: number;
    const Z_BEST_COMPRESSION: number;
    const Z_DEFAULT_COMPRESSION: number;
    const Z_FILTERED: number;
    const Z_HUFFMAN_ONLY: number;
    const Z_RLE: number;
    const Z_FIXED: number;
    const Z_DEFAULT_STRATEGY: number;
    const Z_BINARY: number;
    const Z_TEXT: number;
    const Z_ASCII: number;
    const Z_UNKNOWN: number;
    const Z_DEFLATED: number;
}
declare module 'node:zlib' {
    export * from 'zlib';
}
interface ErrorConstructor {
  captureStackTrace(targetObject: object, constructorOpt?: Function): void;
  prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
  stackTraceLimit: number;
}
interface NodeRequire extends NodeJS.Require { }
interface RequireResolve extends NodeJS.RequireResolve { }
interface NodeModule extends NodeJS.Module { }
declare var require: NodeRequire;
declare var module: NodeModule;
declare var exports: any;
declare var gc: undefined | (() => void);
interface AbortController {
  readonly signal: AbortSignal;
  abort(): void;
}
interface AbortSignal {
  readonly aborted: boolean;
}
declare var AbortController: {
  prototype: AbortController;
  new(): AbortController;
};
declare var AbortSignal: {
  prototype: AbortSignal;
  new(): AbortSignal;
};
interface RelativeIndexable<T> {
  at(index: number): T | undefined;
}
interface String extends RelativeIndexable<string> {}
interface Array<T> extends RelativeIndexable<T> {}
interface Int8Array extends RelativeIndexable<number> {}
interface Uint8Array extends RelativeIndexable<number> {}
interface Uint8ClampedArray extends RelativeIndexable<number> {}
interface Int16Array extends RelativeIndexable<number> {}
interface Uint16Array extends RelativeIndexable<number> {}
interface Int32Array extends RelativeIndexable<number> {}
interface Uint32Array extends RelativeIndexable<number> {}
interface Float32Array extends RelativeIndexable<number> {}
interface Float64Array extends RelativeIndexable<number> {}
interface BigInt64Array extends RelativeIndexable<bigint> {}
interface BigUint64Array extends RelativeIndexable<bigint> {}
declare namespace NodeJS {
  interface CallSite {
      getThis(): unknown;
      getTypeName(): string | null;
      getFunction(): Function | undefined;
      getFunctionName(): string | null;
      getMethodName(): string | null;
      getFileName(): string | null;
      getLineNumber(): number | null;
      getColumnNumber(): number | null;
      getEvalOrigin(): string | undefined;
      isToplevel(): boolean;
      isEval(): boolean;
      isNative(): boolean;
      isConstructor(): boolean;
  }
  interface ErrnoException extends Error {
      errno?: number | undefined;
      code?: string | undefined;
      path?: string | undefined;
      syscall?: string | undefined;
  }
  interface ReadableStream extends EventEmitter {
      readable: boolean;
      read(size?: number): string | Buffer;
      setEncoding(encoding: BufferEncoding): this;
      pause(): this;
      resume(): this;
      isPaused(): boolean;
      pipe<T extends WritableStream>(destination: T, options?: { end?: boolean | undefined; }): T;
      unpipe(destination?: WritableStream): this;
      unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void;
      wrap(oldStream: ReadableStream): this;
      [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer>;
  }
  interface WritableStream extends EventEmitter {
      writable: boolean;
      write(buffer: Uint8Array | string, cb?: (err?: Error | null) => void): boolean;
      write(str: string, encoding?: BufferEncoding, cb?: (err?: Error | null) => void): boolean;
      end(cb?: () => void): this;
      end(data: string | Uint8Array, cb?: () => void): this;
      end(str: string, encoding?: BufferEncoding, cb?: () => void): this;
  }
  interface ReadWriteStream extends ReadableStream, WritableStream { }
  interface RefCounted {
      ref(): this;
      unref(): this;
  }
  type TypedArray =
      | Uint8Array
      | Uint8ClampedArray
      | Uint16Array
      | Uint32Array
      | Int8Array
      | Int16Array
      | Int32Array
      | BigUint64Array
      | BigInt64Array
      | Float32Array
      | Float64Array;
  type ArrayBufferView = TypedArray | DataView;
  interface Require {
      (id: string): any;
      resolve: RequireResolve;
      cache: Dict<NodeModule>;
      extensions: RequireExtensions;
      main: Module | undefined;
  }
  interface RequireResolve {
      (id: string, options?: { paths?: string[] | undefined; }): string;
      paths(request: string): string[] | null;
  }
  interface RequireExtensions extends Dict<(m: Module, filename: string) => any> {
      '.js': (m: Module, filename: string) => any;
      '.json': (m: Module, filename: string) => any;
      '.node': (m: Module, filename: string) => any;
  }
  interface Module {
      isPreloading: boolean;
      exports: any;
      require: Require;
      id: string;
      filename: string;
      loaded: boolean;
      parent: Module | null | undefined;
      children: Module[];
      path: string;
      paths: string[];
  }
  interface Dict<T> {
      [key: string]: T | undefined;
  }
  interface ReadOnlyDict<T> {
      readonly [key: string]: T | undefined;
  }
}
`,yw=`interface Clipboard {

    // Docs: https://electronjs.org/docs/api/clipboard

    /**
     * An array of supported formats for the clipboard \`type\`.
     */
    availableFormats(type?: 'selection' | 'clipboard'): string[];
    /**
     * Clears the clipboard content.
     */
    clear(type?: 'selection' | 'clipboard'): void;
    /**
     * Whether the clipboard supports the specified \`format\`.
     *
     * @experimental
     */
    has(format: string, type?: 'selection' | 'clipboard'): boolean;
    /**
     * Reads \`format\` type from the clipboard.
     *
     * \`format\` should contain valid ASCII characters and have \`/\` separator. \`a/c\`,
     * \`a/bc\` are valid formats while \`/abc\`, \`abc/\`, \`a/\`, \`/a\`, \`a\` are not valid.
     *
     * @experimental
     */
    read(format: string): string;
    /**
     * * \`title\` string
     * * \`url\` string
     *
     * Returns an Object containing \`title\` and \`url\` keys representing the bookmark in
     * the clipboard. The \`title\` and \`url\` values will be empty strings when the
     * bookmark is unavailable.  The \`title\` value will always be empty on Windows.
     *
     * @platform darwin,win32
     */
    readBookmark(): ReadBookmark;
    /**
     * Reads \`format\` type from the clipboard.
     *
     * @experimental
     */
    readBuffer(format: string): Buffer;
    /**
     * The text on the find pasteboard, which is the pasteboard that holds information
     * about the current state of the active application’s find panel.
     *
     * This method uses synchronous IPC when called from the renderer process. The
     * cached value is reread from the find pasteboard whenever the application is
     * activated.
     *
     * @platform darwin
     */
    readFindText(): string;
    /**
     * The content in the clipboard as markup.
     */
    readHTML(type?: 'selection' | 'clipboard'): string;
    /**
     * The image content in the clipboard.
     */
    readImage(type?: 'selection' | 'clipboard'): NativeImage;
    /**
     * The content in the clipboard as RTF.
     */
    readRTF(type?: 'selection' | 'clipboard'): string;
    /**
     * The content in the clipboard as plain text.
     */
    readText(type?: 'selection' | 'clipboard'): string;
    /**
     * Writes \`data\` to the clipboard.
     */
    write(data: Data, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the \`title\` (macOS only) and \`url\` into the clipboard as a bookmark.
     *
     * **Note:** Most apps on Windows don't support pasting bookmarks into them so you
     * can use \`clipboard.write\` to write both a bookmark and fallback text to the
     * clipboard.
     *
     * @platform darwin,win32
     */
    writeBookmark(title: string, url: string, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the \`buffer\` into the clipboard as \`format\`.
     *
     * @experimental
     */
    writeBuffer(format: string, buffer: Buffer, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the \`text\` into the find pasteboard (the pasteboard that holds
     * information about the current state of the active application’s find panel) as
     * plain text. This method uses synchronous IPC when called from the renderer
     * process.
     *
     * @platform darwin
     */
    writeFindText(text: string): void;
    /**
     * Writes \`markup\` to the clipboard.
     */
    writeHTML(markup: string, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes \`image\` to the clipboard.
     */
    writeImage(image: NativeImage, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the \`text\` into the clipboard in RTF.
     */
    writeRTF(text: string, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the \`text\` into the clipboard as plain text.
     */
    writeText(text: string, type?: 'selection' | 'clipboard'): void;
}
interface ContextBridge {

    // Docs: https://electronjs.org/docs/api/context-bridge

    exposeInMainWorld(apiKey: string, api: any): void;
}
interface CrashReporter {

    // Docs: https://electronjs.org/docs/api/crash-reporter

    /**
     * Set an extra parameter to be sent with the crash report. The values specified
     * here will be sent in addition to any values set via the \`extra\` option when
     * \`start\` was called.
     *
     * Parameters added in this fashion (or via the \`extra\` parameter to
     * \`crashReporter.start\`) are specific to the calling process. Adding extra
     * parameters in the main process will not cause those parameters to be sent along
     * with crashes from renderer or other child processes. Similarly, adding extra
     * parameters in a renderer process will not result in those parameters being sent
     * with crashes that occur in other renderer processes or in the main process.
     *
     * **Note:** Parameters have limits on the length of the keys and values. Key names
     * must be no longer than 39 bytes, and values must be no longer than 20320 bytes.
     * Keys with names longer than the maximum will be silently ignored. Key values
     * longer than the maximum length will be truncated.
     */
    addExtraParameter(key: string, value: string): void;
    /**
     * The date and ID of the last crash report. Only crash reports that have been
     * uploaded will be returned; even if a crash report is present on disk it will not
     * be returned until it is uploaded. In the case that there are no uploaded
     * reports, \`null\` is returned.
     *
     * **Note:** This method is only available in the main process.
     */
    getLastCrashReport(): CrashReport;
    /**
     * The current 'extra' parameters of the crash reporter.
     */
    getParameters(): Record<string, string>;
    /**
     * Returns all uploaded crash reports. Each report contains the date and uploaded
     * ID.
     *
     * **Note:** This method is only available in the main process.
     */
    getUploadedReports(): CrashReport[];
    /**
     * Whether reports should be submitted to the server. Set through the \`start\`
     * method or \`setUploadToServer\`.
     *
     * **Note:** This method is only available in the main process.
     */
    getUploadToServer(): boolean;
    /**
     * Remove an extra parameter from the current set of parameters. Future crashes
     * will not include this parameter.
     */
    removeExtraParameter(key: string): void;
    /**
     * This would normally be controlled by user preferences. This has no effect if
     * called before \`start\` is called.
     *
     * **Note:** This method is only available in the main process.
     */
    setUploadToServer(uploadToServer: boolean): void;
    /**
     * This method must be called before using any other \`crashReporter\` APIs. Once
     * initialized this way, the crashpad handler collects crashes from all
     * subsequently created processes. The crash reporter cannot be disabled once
     * started.
     *
     * This method should be called as early as possible in app startup, preferably
     * before \`app.on('ready')\`. If the crash reporter is not initialized at the time a
     * renderer process is created, then that renderer process will not be monitored by
     * the crash reporter.
     *
     * **Note:** You can test out the crash reporter by generating a crash using
     * \`process.crash()\`.
     *
     * **Note:** If you need to send additional/updated \`extra\` parameters after your
     * first call \`start\` you can call \`addExtraParameter\`.
     *
     * **Note:** Parameters passed in \`extra\`, \`globalExtra\` or set with
     * \`addExtraParameter\` have limits on the length of the keys and values. Key names
     * must be at most 39 bytes long, and values must be no longer than 127 bytes. Keys
     * with names longer than the maximum will be silently ignored. Key values longer
     * than the maximum length will be truncated.
     *
     * **Note:** This method is only available in the main process.
     */
    start(options: CrashReporterStartOptions): void;
}
interface IpcRenderer extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/ipc-renderer

    /**
     * Resolves with the response from the main process.
     *
     * Send a message to the main process via \`channel\` and expect a result
     * asynchronously. Arguments will be serialized with the Structured Clone
     * Algorithm, just like \`window.postMessage\`, so prototype chains will not be
     * included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw
     * an exception.
     *
     * > **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
     * Electron objects will throw an exception.
     *
     * Since the main process does not have support for DOM objects such as
     * \`ImageBitmap\`, \`File\`, \`DOMMatrix\` and so on, such objects cannot be sent over
     * Electron's IPC to the main process, as the main process would have no way to
     * decode them. Attempting to send such objects over IPC will result in an error.
     *
     * The main process should listen for \`channel\` with \`ipcMain.handle()\`.
     *
     * For example:
     *
     * If you need to transfer a \`MessagePort\` to the main process, use
     * \`ipcRenderer.postMessage\`.
     *
     * If you do not need a response to the message, consider using \`ipcRenderer.send\`.
     */
    invoke(channel: string, ...args: any[]): Promise<any>;
    /**
     * Listens to \`channel\`, when a new message arrives \`listener\` would be called with
     * \`listener(event, args...)\`.
     */
    on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    /**
     * Adds a one time \`listener\` function for the event. This \`listener\` is invoked
     * only the next time a message is sent to \`channel\`, after which it is removed.
     */
    once(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    /**
     * Send a message to the main process, optionally transferring ownership of zero or
     * more \`MessagePort\` objects.
     *
     * The transferred \`MessagePort\` objects will be available in the main process as
     * \`MessagePortMain\` objects by accessing the \`ports\` property of the emitted
     * event.
     *
     * For example:
     *
     * For more information on using \`MessagePort\` and \`MessageChannel\`, see the MDN
     * documentation.
     */
    postMessage(channel: string, message: any, transfer?: MessagePort[]): void;
    /**
     * Removes all listeners, or those of the specified \`channel\`.
     */
    removeAllListeners(channel: string): this;
    /**
     * Removes the specified \`listener\` from the listener array for the specified
     * \`channel\`.
     */
    removeListener(channel: string, listener: (...args: any[]) => void): this;
    /**
     * Send an asynchronous message to the main process via \`channel\`, along with
     * arguments. Arguments will be serialized with the Structured Clone Algorithm,
     * just like \`window.postMessage\`, so prototype chains will not be included.
     * Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an
     * exception.
     *
     * > **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
     * Electron objects will throw an exception.
     *
     * Since the main process does not have support for DOM objects such as
     * \`ImageBitmap\`, \`File\`, \`DOMMatrix\` and so on, such objects cannot be sent over
     * Electron's IPC to the main process, as the main process would have no way to
     * decode them. Attempting to send such objects over IPC will result in an error.
     *
     * The main process handles it by listening for \`channel\` with the \`ipcMain\`
     * module.
     *
     * If you need to transfer a \`MessagePort\` to the main process, use
     * \`ipcRenderer.postMessage\`.
     *
     * If you want to receive a single response from the main process, like the result
     * of a method call, consider using \`ipcRenderer.invoke\`.
     */
    send(channel: string, ...args: any[]): void;
    /**
     * The value sent back by the \`ipcMain\` handler.
     *
     * Send a message to the main process via \`channel\` and expect a result
     * synchronously. Arguments will be serialized with the Structured Clone Algorithm,
     * just like \`window.postMessage\`, so prototype chains will not be included.
     * Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an
     * exception.
     *
     * > **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
     * Electron objects will throw an exception.
     *
     * Since the main process does not have support for DOM objects such as
     * \`ImageBitmap\`, \`File\`, \`DOMMatrix\` and so on, such objects cannot be sent over
     * Electron's IPC to the main process, as the main process would have no way to
     * decode them. Attempting to send such objects over IPC will result in an error.
     *
     * The main process handles it by listening for \`channel\` with \`ipcMain\` module,
     * and replies by setting \`event.returnValue\`.
     *
     * > :warning: **WARNING**: Sending a synchronous message will block the whole
     * renderer process until the reply is received, so use this method only as a last
     * resort. It's much better to use the asynchronous version, \`invoke()\`.
     */
    sendSync(channel: string, ...args: any[]): any;
    /**
     * Sends a message to a window with \`webContentsId\` via \`channel\`.
     */
    sendTo(webContentsId: number, channel: string, ...args: any[]): void;
    /**
     * Like \`ipcRenderer.send\` but the event will be sent to the \`<webview>\` element in
     * the host page instead of the main process.
     */
    sendToHost(channel: string, ...args: any[]): void;
}

interface IpcRendererEvent extends Event {

    // Docs: https://electronjs.org/docs/api/structures/ipc-renderer-event

    /**
     * A list of MessagePorts that were transferred with this message
     */
    ports: MessagePort[];
    /**
     * The \`IpcRenderer\` instance that emitted the event originally
     */
    sender: IpcRenderer;
    /**
     * The \`webContents.id\` that sent the message, you can call
     * \`event.sender.sendTo(event.senderId, ...)\` to reply to the message, see
     * ipcRenderer.sendTo for more information. This only applies to messages sent from
     * a different renderer. Messages sent directly from the main process set
     * \`event.senderId\` to \`0\`.
     */
    senderId: number;
}
class NativeImage {

    // Docs: https://electronjs.org/docs/api/native-image

    /**
     * Creates an empty \`NativeImage\` instance.
     */
    static createEmpty(): NativeImage;
    /**
     * Creates a new \`NativeImage\` instance from \`buffer\` that contains the raw bitmap
     * pixel data returned by \`toBitmap()\`. The specific format is platform-dependent.
     */
    static createFromBitmap(buffer: Buffer, options: CreateFromBitmapOptions): NativeImage;
    /**
     * Creates a new \`NativeImage\` instance from \`buffer\`. Tries to decode as PNG or
     * JPEG first.
     */
    static createFromBuffer(buffer: Buffer, options?: CreateFromBufferOptions): NativeImage;
    /**
     * Creates a new \`NativeImage\` instance from \`dataURL\`.
     */
    static createFromDataURL(dataURL: string): NativeImage;
    /**
     * Creates a new \`NativeImage\` instance from the NSImage that maps to the given
     * image name. See \`System Icons\` for a list of possible values.
     *
     * The \`hslShift\` is applied to the image with the following rules:
     *
     * * \`hsl_shift[0]\` (hue): The absolute hue value for the image - 0 and 1 map to 0
     * and 360 on the hue color wheel (red).
     * * \`hsl_shift[1]\` (saturation): A saturation shift for the image, with the
     * following key values: 0 = remove all color. 0.5 = leave unchanged. 1 = fully
     * saturate the image.
     * * \`hsl_shift[2]\` (lightness): A lightness shift for the image, with the
     * following key values: 0 = remove all lightness (make all pixels black). 0.5 =
     * leave unchanged. 1 = full lightness (make all pixels white).
     *
     * This means that \`[-1, 0, 1]\` will make the image completely white and \`[-1, 1,
     * 0]\` will make the image completely black.
     *
     * In some cases, the \`NSImageName\` doesn't match its string representation; one
     * example of this is \`NSFolderImageName\`, whose string representation would
     * actually be \`NSFolder\`. Therefore, you'll need to determine the correct string
     * representation for your image before passing it in. This can be done with the
     * following:
     *
     * \`echo -e '#import <Cocoa/Cocoa.h>\\nint main() { NSLog(@"%@", SYSTEM_IMAGE_NAME);
     * }' | clang -otest -x objective-c -framework Cocoa - && ./test\`
     *
     * where \`SYSTEM_IMAGE_NAME\` should be replaced with any value from this list.
     *
     * @platform darwin
     */
    static createFromNamedImage(imageName: string, hslShift?: number[]): NativeImage;
    /**
     * Creates a new \`NativeImage\` instance from a file located at \`path\`. This method
     * returns an empty image if the \`path\` does not exist, cannot be read, or is not a
     * valid image.
     */
    static createFromPath(path: string): NativeImage;
    /**
     * fulfilled with the file's thumbnail preview image, which is a NativeImage.
     *
     * @platform darwin,win32
     */
    static createThumbnailFromPath(path: string, maxSize: Size): Promise<Electron.NativeImage>;
    /**
     * Add an image representation for a specific scale factor. This can be used to
     * explicitly add different scale factor representations to an image. This can be
     * called on empty images.
     */
    addRepresentation(options: AddRepresentationOptions): void;
    /**
     * The cropped image.
     */
    crop(rect: Rectangle): NativeImage;
    /**
     * The image's aspect ratio.
     *
     * If \`scaleFactor\` is passed, this will return the aspect ratio corresponding to
     * the image representation most closely matching the passed value.
     */
    getAspectRatio(scaleFactor?: number): number;
    /**
     * A Buffer that contains the image's raw bitmap pixel data.
     *
     * The difference between \`getBitmap()\` and \`toBitmap()\` is that \`getBitmap()\` does
     * not copy the bitmap data, so you have to use the returned Buffer immediately in
     * current event loop tick; otherwise the data might be changed or destroyed.
     */
    getBitmap(options?: BitmapOptions): Buffer;
    /**
     * A Buffer that stores C pointer to underlying native handle of the image. On
     * macOS, a pointer to \`NSImage\` instance would be returned.
     *
     * Notice that the returned pointer is a weak pointer to the underlying native
     * image instead of a copy, so you _must_ ensure that the associated \`nativeImage\`
     * instance is kept around.
     *
     * @platform darwin
     */
    getNativeHandle(): Buffer;
    /**
     * An array of all scale factors corresponding to representations for a given
     * nativeImage.
     */
    getScaleFactors(): number[];
    /**
     * If \`scaleFactor\` is passed, this will return the size corresponding to the image
     * representation most closely matching the passed value.
     */
    getSize(scaleFactor?: number): Size;
    /**
     * Whether the image is empty.
     */
    isEmpty(): boolean;
    /**
     * Whether the image is a template image.
     */
    isTemplateImage(): boolean;
    /**
     * The resized image.
     *
     * If only the \`height\` or the \`width\` are specified then the current aspect ratio
     * will be preserved in the resized image.
     */
    resize(options: ResizeOptions): NativeImage;
    /**
     * Marks the image as a template image.
     */
    setTemplateImage(option: boolean): void;
    /**
     * A Buffer that contains a copy of the image's raw bitmap pixel data.
     */
    toBitmap(options?: ToBitmapOptions): Buffer;
    /**
     * The data URL of the image.
     */
    toDataURL(options?: ToDataURLOptions): string;
    /**
     * A Buffer that contains the image's \`JPEG\` encoded data.
     */
    toJPEG(quality: number): Buffer;
    /**
     * A Buffer that contains the image's \`PNG\` encoded data.
     */
    toPNG(options?: ToPNGOptions): Buffer;
    /**
     * A \`boolean\` property that determines whether the image is considered a template
     * image.
     *
     * Please note that this property only has an effect on macOS.
     *
     * @platform darwin
     */
    isMacTemplateImage: boolean;
}

interface Shell {

    // Docs: https://electronjs.org/docs/api/shell

    /**
     * Play the beep sound.
     */
    beep(): void;
    /**
     * Open the given external protocol URL in the desktop's default manner. (For
     * example, mailto: URLs in the user's default mail agent).
     */
    openExternal(url: string, options?: OpenExternalOptions): Promise<void>;
    /**
     * Resolves with a string containing the error message corresponding to the failure
     * if a failure occurred, otherwise "".
     *
     * Open the given file in the desktop's default manner.
     */
    openPath(path: string): Promise<string>;
    /**
     * Resolves the shortcut link at \`shortcutPath\`.
     *
     * An exception will be thrown when any error happens.
     *
     * @platform win32
     */
    readShortcutLink(shortcutPath: string): ShortcutDetails;
    /**
     * Show the given file in a file manager. If possible, select the file.
     */
    showItemInFolder(fullPath: string): void;
    /**
     * Resolves when the operation has been completed. Rejects if there was an error
     * while deleting the requested item.
     *
     * This moves a path to the OS-specific trash location (Trash on macOS, Recycle Bin
     * on Windows, and a desktop-environment-specific location on Linux).
     */
    trashItem(path: string): Promise<void>;
    /**
     * Whether the shortcut was created successfully.
     *
     * Creates or updates a shortcut link at \`shortcutPath\`.
     *
     * @platform win32
     */
    writeShortcutLink(shortcutPath: string, operation: 'create' | 'update' | 'replace', options: ShortcutDetails): boolean;
    /**
     * Whether the shortcut was created successfully.
     *
     * Creates or updates a shortcut link at \`shortcutPath\`.
     *
     * @platform win32
     */
    writeShortcutLink(shortcutPath: string, options: ShortcutDetails): boolean;
}
interface WebFrame extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/web-frame

    /**
     * Attempts to free memory that is no longer being used (like images from a
     * previous navigation).
     *
     * Note that blindly calling this method probably makes Electron slower since it
     * will have to refill these emptied caches, you should only call it if an event in
     * your app has occurred that makes you think your page is actually using less
     * memory (i.e. you have navigated from a super heavy page to a mostly empty one,
     * and intend to stay there).
     */
    clearCache(): void;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * execution throws or results in a rejected promise.
     *
     * Evaluates \`code\` in page.
     *
     * In the browser window some HTML APIs like \`requestFullScreen\` can only be
     * invoked by a gesture from the user. Setting \`userGesture\` to \`true\` will remove
     * this limitation.
     */
    executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any, error: Error) => void): Promise<any>;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * execution could not start.
     *
     * Works like \`executeJavaScript\` but evaluates \`scripts\` in an isolated context.
     *
     * Note that when the execution of script fails, the returned promise will not
     * reject and the \`result\` would be \`undefined\`. This is because Chromium does not
     * dispatch errors of isolated worlds to foreign worlds.
     */
    executeJavaScriptInIsolatedWorld(worldId: number, scripts: WebSource[], userGesture?: boolean, callback?: (result: any, error: Error) => void): Promise<any>;
    /**
     * A child of \`webFrame\` with the supplied \`name\`, \`null\` would be returned if
     * there's no such frame or if the frame is not in the current renderer process.
     */
    findFrameByName(name: string): WebFrame;
    /**
     * that has the supplied \`routingId\`, \`null\` if not found.
     */
    findFrameByRoutingId(routingId: number): WebFrame;
    /**
     * The frame element in \`webFrame's\` document selected by \`selector\`, \`null\` would
     * be returned if \`selector\` does not select a frame or if the frame is not in the
     * current renderer process.
     */
    getFrameForSelector(selector: string): WebFrame;
    /**
     * * \`images\` MemoryUsageDetails
     * * \`scripts\` MemoryUsageDetails
     * * \`cssStyleSheets\` MemoryUsageDetails
     * * \`xslStyleSheets\` MemoryUsageDetails
     * * \`fonts\` MemoryUsageDetails
     * * \`other\` MemoryUsageDetails
     *
     * Returns an object describing usage information of Blink's internal memory
     * caches.
     *
     * This will generate:
     */
    getResourceUsage(): ResourceUsage;
    /**
     * A list of suggested words for a given word. If the word is spelled correctly,
     * the result will be empty.
     */
    getWordSuggestions(word: string): string[];
    /**
     * The current zoom factor.
     */
    getZoomFactor(): number;
    /**
     * The current zoom level.
     */
    getZoomLevel(): number;
    /**
     * A key for the inserted CSS that can later be used to remove the CSS via
     * \`webFrame.removeInsertedCSS(key)\`.
     *
     * Injects CSS into the current web page and returns a unique key for the inserted
     * stylesheet.
     */
    insertCSS(css: string, options?: InsertCSSOptions): string;
    /**
     * Inserts \`text\` to the focused element.
     */
    insertText(text: string): void;
    /**
     * True if the word is misspelled according to the built in spellchecker, false
     * otherwise. If no dictionary is loaded, always return false.
     */
    isWordMisspelled(word: string): boolean;
    /**
     * Removes the inserted CSS from the current web page. The stylesheet is identified
     * by its key, which is returned from \`webFrame.insertCSS(css)\`.
     */
    removeInsertedCSS(key: string): void;
    /**
     * Set the security origin, content security policy and name of the isolated world.
     * Note: If the \`csp\` is specified, then the \`securityOrigin\` also has to be
     * specified.
     */
    setIsolatedWorldInfo(worldId: number, info: Info): void;
    setSpellCheckProvider(language: string, provider: Provider): void;
    /**
     * Sets the maximum and minimum pinch-to-zoom level.
     *
     * > **NOTE**: Visual zoom is disabled by default in Electron. To re-enable it,
     * call:
     *
     * > **NOTE**: Visual zoom only applies to pinch-to-zoom behavior. Cmd+/-/0 zoom
     * shortcuts are controlled by the 'zoomIn', 'zoomOut', and 'resetZoom' MenuItem
     * roles in the application Menu. To disable shortcuts, manually define the Menu
     * and omit zoom roles from the definition.
     */
    setVisualZoomLevelLimits(minimumLevel: number, maximumLevel: number): void;
    /**
     * Changes the zoom factor to the specified factor. Zoom factor is zoom percent
     * divided by 100, so 300% = 3.0.
     *
     * The factor must be greater than 0.0.
     */
    setZoomFactor(factor: number): void;
    /**
     * Changes the zoom level to the specified level. The original size is 0 and each
     * increment above or below represents zooming 20% larger or smaller to default
     * limits of 300% and 50% of original size, respectively.
     *
     * > **NOTE**: The zoom policy at the Chromium level is same-origin, meaning that
     * the zoom level for a specific domain propagates across all instances of windows
     * with the same domain. Differentiating the window URLs will make zoom work
     * per-window.
     */
    setZoomLevel(level: number): void;
    /**
     * A \`WebFrame | null\` representing the first child frame of \`webFrame\`, the
     * property would be \`null\` if \`webFrame\` has no children or if first child is not
     * in the current renderer process.
     *
     */
    readonly firstChild: (WebFrame) | (null);
    /**
     * A \`WebFrame | null\` representing next sibling frame, the property would be
     * \`null\` if \`webFrame\` is the last frame in its parent or if the next sibling is
     * not in the current renderer process.
     *
     */
    readonly nextSibling: (WebFrame) | (null);
    /**
     * A \`WebFrame | null\` representing the frame which opened \`webFrame\`, the property
     * would be \`null\` if there's no opener or opener is not in the current renderer
     * process.
     *
     */
    readonly opener: (WebFrame) | (null);
    /**
     * A \`WebFrame | null\` representing parent frame of \`webFrame\`, the property would
     * be \`null\` if \`webFrame\` is top or parent is not in the current renderer process.
     *
     */
    readonly parent: (WebFrame) | (null);
    /**
     * An \`Integer\` representing the unique frame id in the current renderer process.
     * Distinct WebFrame instances that refer to the same underlying frame will have
     * the same \`routingId\`.
     *
     */
    readonly routingId: number;
    /**
     * A \`WebFrame | null\` representing top frame in frame hierarchy to which
     * \`webFrame\` belongs, the property would be \`null\` if top frame is not in the
     * current renderer process.
     *
     */
    readonly top: (WebFrame) | (null);
}

declare var electron: {
    clipboard: Clipboard
    contextBridge: ContextBridge
    crashReporter: CrashReporter
    ipcRenderer: IpcRenderer
    nativeImage: NativeImage
    shell: Shell
    webFrame: WebFrame
}
`;self.MonacoEnvironment={getWorker(e,n){return n==="typescript"||n==="javascript"?new Um:n==="json"?new qm:new Gm}};Gn.typescript.javascriptDefaults.addExtraLib(hw,"utools.api.d.ts");Gn.typescript.javascriptDefaults.addExtraLib(bw,"node.api.d.ts");Gn.typescript.javascriptDefaults.addExtraLib(yw,"electron.api.d.ts");Gn.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});Gn.typescript.javascriptDefaults.setCompilerOptions({target:Gn.typescript.ScriptTarget.ES2016,allowNonTsExtensions:!0,allowJs:!0});const zl=Eo("setting",{state:()=>({theme:wn("setting/theme")||"default",snippets:[],codeChangeDebounce:wn("setting/codeChangeDebounce")||300,indentType:wn("setting/indentType")||"space",indentSize:wn("setting/indentSize")||2}),actions:{init(){this.setTheme(this.theme),this.snippets=this.loadSnippets(),Gn.registerCompletionItemProvider("javascript",{provideCompletionItems:()=>({suggestions:this.snippets.map(e=>({...e,kind:Gn.CompletionItemKind.Snippet,insertTextRules:Gn.CompletionItemInsertTextRule.InsertAsSnippet}))})})},setTheme(e){this.theme=e,e==="default"?or("setting/theme"):kn("setting/theme",e),ro(e)},update(e){return n=>{this.$state[e]=n,kn(`setting/${e}`,n)}},loadSnippets(){const e=Om("setting/snippet");return e.length?e.map(n=>({...n.value,id:n._id.split("setting/snippet/")[1]})):[{id:new Date().getTime().toString(),label:"clg",insertText:"console.log(${1})",documentation:"Print to Console"}]},newSnippet(){const e={id:new Date().getTime().toString(),label:"",insertText:"",documentation:""};this.snippets.push(e),In.success("新建成功")},removeSnippet(e){this.snippets=this.snippets.filter(n=>n.id!==e),or(`setting/snippet/${e}`),In.success("删除成功")}}});Eo("script",{state:()=>({name:"",description:"",tags:[]}),actions:{newScript(e){const n=FR(8);return kn(`script/${n}`,{name:this.name,description:this.description,code:e}),In.success("保存成功"),!0},parseCommentBlock(e){const n=Lm(e);this.$patch(n||{})}}});const Rm=Symbol("IS_DARK"),Sw=Symbol("EVENT_FOCUS_EDITOR"),Ew=Z({__name:"App",setup(e){const n=zl();n.init();const t=h(()=>{const r=Wa("(prefers-color-scheme: dark)");return n.theme==="dark"||n.theme==="default"&&r.value});return fn(Rm,t),(r,i)=>{const s=ae("router-view");return B(),pe(s,null,{default:K(({Component:o})=>[(B(),pe(og,{include:["Runner"]},[(B(),pe(Zn(o)))],1024))]),_:1})}}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof window<"u";function _w(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const je=Object.assign;function ea(e,n){const t={};for(const r in n){const i=n[r];t[r]=An(i)?i.map(e):e(i)}return t}const Ur=()=>{},An=Array.isArray,kw=/\/$/,Tw=e=>e.replace(kw,"");function na(e,n,t="/"){let r,i={},s="",o="";const a=n.indexOf("#");let l=n.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,a>-1?a:n.length),i=e(s)),a>-1&&(r=r||n.slice(0,a),o=n.slice(a,n.length)),r=Lw(r??n,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Ow(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Cd(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Pw(e,n,t){const r=n.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&mr(n.matched[r],t.matched[i])&&wm(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function mr(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function wm(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Cw(e[t],n[t]))return!1;return!0}function Cw(e,n){return An(e)?Ld(e,n):An(n)?Ld(n,e):e===n}function Ld(e,n){return An(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Lw(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var oi;(function(e){e.pop="pop",e.push="push"})(oi||(oi={}));var qr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(qr||(qr={}));function Rw(e){if(!e)if(Xt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tw(e)}const ww=/^[^#]+#/;function xw(e,n){return e.replace(ww,"#")+n}function Iw(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const No=()=>({left:window.pageXOffset,top:window.pageYOffset});function Aw(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=Iw(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Rd(e,n){return(history.state?history.state.position-n:-1)+e}const za=new Map;function Bw(e,n){za.set(e,n)}function Nw(e){const n=za.get(e);return za.delete(e),n}let Dw=()=>location.protocol+"//"+location.host;function xm(e,n){const{pathname:t,search:r,hash:i}=n,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Cd(l,"")}return Cd(t,e)+r+i}function $w(e,n,t,r){let i=[],s=[],o=null;const a=({state:f})=>{const m=xm(e,location),S=t.value,E=n.value;let P=0;if(f){if(t.value=m,n.value=f,o&&o===S){o=null;return}P=E?f.position-E.position:0}else r(m);i.forEach(k=>{k(t.value,S,{delta:P,type:oi.pop,direction:P?P>0?qr.forward:qr.back:qr.unknown})})};function l(){o=t.value}function c(f){i.push(f);const m=()=>{const S=i.indexOf(f);S>-1&&i.splice(S,1)};return s.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(je({},f.state,{scroll:No()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function wd(e,n,t,r=!1,i=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:i?No():null}}function Hw(e){const{history:n,location:t}=window,r={value:xm(e,t)},i={value:n.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=e.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:Dw()+e+l;try{n[u?"replaceState":"pushState"](c,"",f),i.value=c}catch{t[u?"replace":"assign"](f)}}function o(l,c){const u=je({},n.state,wd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=je({},i.value,n.state,{forward:l,scroll:No()});s(u.current,u,!0);const d=je({},wd(r.value,l,null),{position:u.position+1},c);s(l,d,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Mw(e){e=Rw(e);const n=Hw(e),t=$w(e,n.state,n.location,n.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=je({location:"",base:e,go:r,createHref:xw.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function jw(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Mw(e)}function Fw(e){return typeof e=="string"||e&&typeof e=="object"}function Im(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Am=Symbol("");var xd;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(xd||(xd={}));function vr(e,n){return je(new Error,{type:e,[Am]:!0},n)}function Vn(e,n){return e instanceof Error&&Am in e&&(n==null||!!(e.type&n))}const Id="[^/]+?",Kw={sensitive:!1,strict:!1,start:!0,end:!0},Ww=/[.+*?^${}()[\]/\\]/g;function zw(e,n){const t=je({},Kw,n),r=[];let i=t.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(t.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(Ww,"\\$&"),m+=40;else if(f.type===1){const{value:S,repeatable:E,optional:P,regexp:k}=f;s.push({name:S,repeatable:E,optional:P});const T=k||Id;if(T!==Id){m+=10;try{new RegExp(`(${T})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${S}" (${T}): `+v.message)}}let _=E?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(_=P&&c.length<2?`(?:/${_})`:"/"+_),P&&(_+="?"),i+=_,m+=20,P&&(m+=-8),E&&(m+=-20),T===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",S=s[f-1];d[S.name]=m&&S.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:S,repeatable:E,optional:P}=m,k=S in c?c[S]:"";if(An(k)&&!E)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const T=An(k)?k.join("/"):k;if(!T)if(P)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);u+=T}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function Vw(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===80?-1:1:e.length>n.length?n.length===1&&n[0]===80?1:-1:0}function Uw(e,n){let t=0;const r=e.score,i=n.score;for(;t<r.length&&t<i.length;){const s=Vw(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(Ad(r))return 1;if(Ad(i))return-1}return i.length-r.length}function Ad(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const qw={type:0,value:""},Gw=/[a-zA-Z0-9_]/;function Jw(e){if(!e)return[[]];if(e==="/")return[[qw]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:Gw.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function Zw(e,n,t){const r=zw(Jw(e.path),t),i=je(r,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function Yw(e,n){const t=[],r=new Map;n=Dd({strict:!1,end:!0,sensitive:!1},n);function i(u){return r.get(u)}function s(u,d,f){const m=!f,S=Xw(u);S.aliasOf=f&&f.record;const E=Dd(n,u),P=[S];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of _)P.push(je({},S,{components:f?f.record.components:S.components,path:v,aliasOf:f?f.record:S}))}let k,T;for(const _ of P){const{path:v}=_;if(d&&v[0]!=="/"){const R=d.record.path,b=R[R.length-1]==="/"?"":"/";_.path=d.record.path+(v&&b+v)}if(k=Zw(_,d,E),f?f.alias.push(k):(T=T||k,T!==k&&T.alias.push(k),m&&u.name&&!Nd(k)&&o(u.name)),S.children){const R=S.children;for(let b=0;b<R.length;b++)s(R[b],k,f&&f.children[b])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return T?()=>{o(T)}:Ur}function o(u){if(Im(u)){const d=r.get(u);d&&(r.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let d=0;for(;d<t.length&&Uw(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Bm(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!Nd(u)&&r.set(u.record.name,u)}function c(u,d){let f,m={},S,E;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw vr(1,{location:u});E=f.record.name,m=je(Bd(d.params,f.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&Bd(u.params,f.keys.map(T=>T.name))),S=f.stringify(m)}else if("path"in u)S=u.path,f=t.find(T=>T.re.test(S)),f&&(m=f.parse(S),E=f.record.name);else{if(f=d.name?r.get(d.name):t.find(T=>T.re.test(d.path)),!f)throw vr(1,{location:u,currentLocation:d});E=f.record.name,m=je({},d.params,u.params),S=f.stringify(m)}const P=[];let k=f;for(;k;)P.unshift(k.record),k=k.parent;return{name:E,path:S,params:m,matched:P,meta:ex(P)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Bd(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function Xw(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qw(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Qw(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function Nd(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ex(e){return e.reduce((n,t)=>je(n,t.meta),{})}function Dd(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function Bm(e,n){return n.children.some(t=>t===e||Bm(e,t))}const Nm=/#/g,nx=/&/g,tx=/\//g,rx=/=/g,ix=/\?/g,Dm=/\+/g,ox=/%5B/g,sx=/%5D/g,$m=/%5E/g,ax=/%60/g,Hm=/%7B/g,lx=/%7C/g,Mm=/%7D/g,cx=/%20/g;function Vl(e){return encodeURI(""+e).replace(lx,"|").replace(ox,"[").replace(sx,"]")}function ux(e){return Vl(e).replace(Hm,"{").replace(Mm,"}").replace($m,"^")}function Va(e){return Vl(e).replace(Dm,"%2B").replace(cx,"+").replace(Nm,"%23").replace(nx,"%26").replace(ax,"`").replace(Hm,"{").replace(Mm,"}").replace($m,"^")}function dx(e){return Va(e).replace(rx,"%3D")}function fx(e){return Vl(e).replace(Nm,"%23").replace(ix,"%3F")}function px(e){return e==null?"":fx(e).replace(tx,"%2F")}function io(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function mx(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Dm," "),o=s.indexOf("="),a=io(o<0?s:s.slice(0,o)),l=o<0?null:io(s.slice(o+1));if(a in n){let c=n[a];An(c)||(c=n[a]=[c]),c.push(l)}else n[a]=l}return n}function $d(e){let n="";for(let t in e){const r=e[t];if(t=dx(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(An(r)?r.map(s=>s&&Va(s)):[r&&Va(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function vx(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=An(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return n}const gx=Symbol(""),Hd=Symbol(""),Do=Symbol(""),jm=Symbol(""),Ua=Symbol("");function Rr(){let e=[];function n(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function ft(e,n,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(vr(4,{from:t,to:n})):d instanceof Error?a(d):Fw(d)?a(vr(2,{from:n,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),o())},c=e.call(r&&r.instances[i],n,t,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function ta(e,n,t,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(n!=="beforeRouteEnter"&&!s.instances[o]))if(hx(a)){const c=(a.__vccOpts||a)[n];c&&i.push(ft(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=_w(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[n];return f&&ft(f,t,r,s,o)()}))}}return i}function hx(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Md(e){const n=Me(Do),t=Me(jm),r=h(()=>n.resolve(ke(e.to))),i=h(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(mr.bind(null,u));if(f>-1)return f;const m=jd(l[c-2]);return c>1&&jd(u)===m&&d[d.length-1].path!==m?d.findIndex(mr.bind(null,l[c-2])):f}),s=h(()=>i.value>-1&&Ex(t.params,r.value.params)),o=h(()=>i.value>-1&&i.value===t.matched.length-1&&wm(t.params,r.value.params));function a(l={}){return Sx(l)?n[ke(e.replace)?"replace":"push"](ke(e.to)).catch(Ur):Promise.resolve()}return{route:r,href:h(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const bx=Z({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Md,setup(e,{slots:n}){const t=We(Md(e)),{options:r}=Me(Do),i=h(()=>({[Fd(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Fd(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=n.default&&n.default(t);return e.custom?s:ni("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),yx=bx;function Sx(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Ex(e,n){for(const t in n){const r=n[t],i=e[t];if(typeof r=="string"){if(r!==i)return!1}else if(!An(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function jd(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Fd=(e,n,t)=>e??n??t,_x=Z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=Me(Ua),i=h(()=>e.route||r.value),s=Me(Hd,0),o=h(()=>{let c=ke(s);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=h(()=>i.value.matched[o.value]);fn(Hd,h(()=>o.value+1)),fn(gx,a),fn(Ua,i);const l=j();return Oe(()=>[l.value,a.value,e.name],([c,u,d],[f,m,S])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!mr(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return Kd(t.default,{Component:f,route:c});const m=d.props[u],S=m?m===!0?c.params:typeof m=="function"?m(c):m:null,P=ni(f,je({},S,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Kd(t.default,{Component:P,route:c})||P}}});function Kd(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const kx=_x;function Tx(e){const n=Yw(e.routes,e),t=e.parseQuery||mx,r=e.stringifyQuery||$d,i=e.history,s=Rr(),o=Rr(),a=Rr(),l=Av(st);let c=st;Xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ea.bind(null,$=>""+$),d=ea.bind(null,px),f=ea.bind(null,io);function m($,Y){let G,ue;return Im($)?(G=n.getRecordMatcher($),ue=Y):ue=$,n.addRoute(ue,G)}function S($){const Y=n.getRecordMatcher($);Y&&n.removeRoute(Y)}function E(){return n.getRoutes().map($=>$.record)}function P($){return!!n.getRecordMatcher($)}function k($,Y){if(Y=je({},Y||l.value),typeof $=="string"){const g=na(t,$,Y.path),L=n.resolve({path:g.path},Y),A=i.createHref(g.fullPath);return je(g,L,{params:f(L.params),hash:io(g.hash),redirectedFrom:void 0,href:A})}let G;if("path"in $)G=je({},$,{path:na(t,$.path,Y.path).path});else{const g=je({},$.params);for(const L in g)g[L]==null&&delete g[L];G=je({},$,{params:d(g)}),Y.params=d(Y.params)}const ue=n.resolve(G,Y),Le=$.hash||"";ue.params=u(f(ue.params));const y=Ow(r,je({},$,{hash:ux(Le),path:ue.path})),p=i.createHref(y);return je({fullPath:y,hash:Le,query:r===$d?vx($.query):$.query||{}},ue,{redirectedFrom:void 0,href:p})}function T($){return typeof $=="string"?na(t,$,l.value.path):je({},$)}function _($,Y){if(c!==$)return vr(8,{from:Y,to:$})}function v($){return C($)}function R($){return v(je(T($),{replace:!0}))}function b($){const Y=$.matched[$.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let ue=typeof G=="function"?G($):G;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=T(ue):{path:ue},ue.params={}),je({query:$.query,hash:$.hash,params:"path"in ue?{}:$.params},ue)}}function C($,Y){const G=c=k($),ue=l.value,Le=$.state,y=$.force,p=$.replace===!0,g=b(G);if(g)return C(je(T(g),{state:typeof g=="object"?je({},Le,g.state):Le,force:y,replace:p}),Y||G);const L=G;L.redirectedFrom=Y;let A;return!y&&Pw(r,ue,G)&&(A=vr(16,{to:L,from:ue}),se(ue,ue,!0,!1)),(A?Promise.resolve(A):I(L,ue)).catch(W=>Vn(W)?Vn(W,2)?W:q(W):U(W,L,ue)).then(W=>{if(W){if(Vn(W,2))return C(je({replace:p},T(W.to),{state:typeof W.to=="object"?je({},Le,W.to.state):Le,force:y}),Y||L)}else W=D(L,ue,!0,p,Le);return H(L,ue,W),W})}function w($,Y){const G=_($,Y);return G?Promise.reject(G):Promise.resolve()}function x($){const Y=Ne.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext($):$()}function I($,Y){let G;const[ue,Le,y]=Ox($,Y);G=ta(ue.reverse(),"beforeRouteLeave",$,Y);for(const g of ue)g.leaveGuards.forEach(L=>{G.push(ft(L,$,Y))});const p=w.bind(null,$,Y);return G.push(p),me(G).then(()=>{G=[];for(const g of s.list())G.push(ft(g,$,Y));return G.push(p),me(G)}).then(()=>{G=ta(Le,"beforeRouteUpdate",$,Y);for(const g of Le)g.updateGuards.forEach(L=>{G.push(ft(L,$,Y))});return G.push(p),me(G)}).then(()=>{G=[];for(const g of y)if(g.beforeEnter)if(An(g.beforeEnter))for(const L of g.beforeEnter)G.push(ft(L,$,Y));else G.push(ft(g.beforeEnter,$,Y));return G.push(p),me(G)}).then(()=>($.matched.forEach(g=>g.enterCallbacks={}),G=ta(y,"beforeRouteEnter",$,Y),G.push(p),me(G))).then(()=>{G=[];for(const g of o.list())G.push(ft(g,$,Y));return G.push(p),me(G)}).catch(g=>Vn(g,8)?g:Promise.reject(g))}function H($,Y,G){a.list().forEach(ue=>x(()=>ue($,Y,G)))}function D($,Y,G,ue,Le){const y=_($,Y);if(y)return y;const p=Y===st,g=Xt?history.state:{};G&&(ue||p?i.replace($.fullPath,je({scroll:p&&g&&g.scroll},Le)):i.push($.fullPath,Le)),l.value=$,se($,Y,G,p),q()}let F;function ie(){F||(F=i.listen(($,Y,G)=>{if(!Te.listening)return;const ue=k($),Le=b(ue);if(Le){C(je(Le,{replace:!0}),ue).catch(Ur);return}c=ue;const y=l.value;Xt&&Bw(Rd(y.fullPath,G.delta),No()),I(ue,y).catch(p=>Vn(p,12)?p:Vn(p,2)?(C(p.to,ue).then(g=>{Vn(g,20)&&!G.delta&&G.type===oi.pop&&i.go(-1,!1)}).catch(Ur),Promise.reject()):(G.delta&&i.go(-G.delta,!1),U(p,ue,y))).then(p=>{p=p||D(ue,y,!1),p&&(G.delta&&!Vn(p,8)?i.go(-G.delta,!1):G.type===oi.pop&&Vn(p,20)&&i.go(-1,!1)),H(ue,y,p)}).catch(Ur)}))}let ce=Rr(),te=Rr(),re;function U($,Y,G){q($);const ue=te.list();return ue.length&&ue.forEach(Le=>Le($,Y,G)),Promise.reject($)}function ge(){return re&&l.value!==st?Promise.resolve():new Promise(($,Y)=>{ce.add([$,Y])})}function q($){return re||(re=!$,ie(),ce.list().forEach(([Y,G])=>$?G($):Y()),ce.reset()),$}function se($,Y,G,ue){const{scrollBehavior:Le}=e;if(!Xt||!Le)return Promise.resolve();const y=!G&&Nw(Rd($.fullPath,0))||(ue||!G)&&history.state&&history.state.scroll||null;return Fe().then(()=>Le($,Y,y)).then(p=>p&&Aw(p)).catch(p=>U(p,$,Y))}const fe=$=>i.go($);let Ce;const Ne=new Set,Te={currentRoute:l,listening:!0,addRoute:m,removeRoute:S,hasRoute:P,getRoutes:E,resolve:k,options:e,push:v,replace:R,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:ge,install($){const Y=this;$.component("RouterLink",yx),$.component("RouterView",kx),$.config.globalProperties.$router=Y,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(l)}),Xt&&!Ce&&l.value===st&&(Ce=!0,v(i.location).catch(Le=>{}));const G={};for(const Le in st)Object.defineProperty(G,Le,{get:()=>l.value[Le],enumerable:!0});$.provide(Do,Y),$.provide(jm,vf(G)),$.provide(Ua,l);const ue=$.unmount;Ne.add($),$.unmount=function(){Ne.delete($),Ne.size<1&&(c=st,F&&F(),F=null,l.value=st,Ce=!1,re=!1),ue()}}};function me($){return $.reduce((Y,G)=>Y.then(()=>x(G)),Promise.resolve())}return Te}function Ox(e,n){const t=[],r=[],i=[],s=Math.max(n.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=n.matched[o];a&&(e.matched.find(c=>mr(c,a))?r.push(a):t.push(a));const l=e.matched[o];l&&(n.matched.find(c=>mr(c,l))||i.push(l))}return[t,r,i]}function Px(){return Me(Do)}const Cx=Tx({history:jw(),routes:[{path:"/",redirect:"/runner"},{path:"/runner",component:()=>Mi(()=>Promise.resolve().then(()=>lI),void 0,import.meta.url)},{path:"/setting",component:()=>Mi(()=>Promise.resolve().then(()=>mI),void 0,import.meta.url)},{path:"/about",component:()=>Mi(()=>Promise.resolve().then(()=>kI),void 0,import.meta.url)}]});function Lx(e){e.directive("zoom",(n,t)=>{t.value&&(n.style.transform="scale(1.6)",n.style.transition="transform 0.2s",setTimeout(()=>{n.style.transform="scale(1.0)"},200))})}const Rx=Z({name:"IconCloseCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-close-circle`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),wx=["stroke-width","stroke-linecap","stroke-linejoin"],xx=le("path",{d:"m17.643 17.643 6.364 6.364m0 0 6.364 6.364m-6.364-6.364 6.364-6.364m-6.364 6.364-6.364 6.364M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),Ix=[xx];function Ax(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Ix,14,wx)}var ra=he(Rx,[["render",Ax]]);const Bx=Object.assign(ra,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ra.name,ra)}}),Nx=Z({name:"IconInfoCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-info-circle`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Dx=["stroke-width","stroke-linecap","stroke-linejoin"],$x=le("path",{d:"M24 20v14m0-16v-4m18 10c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),Hx=[$x];function Mx(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Hx,14,Dx)}var ia=he(Nx,[["render",Mx]]);const jx=Object.assign(ia,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ia.name,ia)}}),Fx=Z({name:"IconSettings",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-settings`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Kx=["stroke-width","stroke-linecap","stroke-linejoin"],Wx=le("path",{d:"M18.797 6.732A1 1 0 0 1 19.76 6h8.48a1 1 0 0 1 .964.732l1.285 4.628a1 1 0 0 0 1.213.7l4.651-1.2a1 1 0 0 1 1.116.468l4.24 7.344a1 1 0 0 1-.153 1.2L38.193 23.3a1 1 0 0 0 0 1.402l3.364 3.427a1 1 0 0 1 .153 1.2l-4.24 7.344a1 1 0 0 1-1.116.468l-4.65-1.2a1 1 0 0 0-1.214.7l-1.285 4.628a1 1 0 0 1-.964.732h-8.48a1 1 0 0 1-.963-.732L17.51 36.64a1 1 0 0 0-1.213-.7l-4.65 1.2a1 1 0 0 1-1.116-.468l-4.24-7.344a1 1 0 0 1 .153-1.2L9.809 24.7a1 1 0 0 0 0-1.402l-3.364-3.427a1 1 0 0 1-.153-1.2l4.24-7.344a1 1 0 0 1 1.116-.468l4.65 1.2a1 1 0 0 0 1.213-.7l1.286-4.628Z"},null,-1),zx=le("path",{d:"M30 24a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"},null,-1),Vx=[Wx,zx];function Ux(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Vx,14,Kx)}var oa=he(Fx,[["render",Ux]]);const qx=Object.assign(oa,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+oa.name,oa)}}),Gx=Z({name:"IconShareAlt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-share-alt`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Jx=["stroke-width","stroke-linecap","stroke-linejoin"],Zx=le("path",{d:"M32.442 21.552a4.5 4.5 0 1 1 .065 4.025m-.065-4.025-16.884-8.104m16.884 8.104A4.483 4.483 0 0 0 32 23.5c0 .75.183 1.455.507 2.077m-16.95-12.13a4.5 4.5 0 1 1-8.113-3.895 4.5 4.5 0 0 1 8.114 3.896Zm-.064 20.977A4.5 4.5 0 1 0 11.5 41c3.334-.001 5.503-3.68 3.993-6.578Zm0 0 17.014-8.847"},null,-1),Yx=[Zx];function Xx(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Yx,14,Jx)}var sa=he(Gx,[["render",Xx]]);const Qx=Object.assign(sa,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+sa.name,sa)}}),e0=Z({name:"IconCommand",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-command`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),n0=["stroke-width","stroke-linecap","stroke-linejoin"],t0=le("path",{d:"M29 19v-6a6 6 0 1 1 6 6h-6Zm0 0v10m0-10H19m10 10v6a6 6 0 1 0 6-6h-6Zm0 0H19m0-10v10m0-10v-6a6 6 0 1 0-6 6h6Zm0 10v6a6 6 0 1 1-6-6h6Z"},null,-1),r0=[t0];function i0(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},r0,14,n0)}var aa=he(e0,[["render",i0]]);const o0=Object.assign(aa,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+aa.name,aa)}}),s0=Z({name:"IconLock",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-lock`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),a0=["stroke-width","stroke-linecap","stroke-linejoin"],l0=le("rect",{x:"7",y:"21",width:"34",height:"20",rx:"1"},null,-1),c0=le("path",{d:"M15 21v-6a9 9 0 1 1 18 0v6M24 35v-8"},null,-1),u0=[l0,c0];function d0(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},u0,14,a0)}var la=he(s0,[["render",d0]]);const f0=Object.assign(la,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+la.name,la)}}),p0=Z({name:"IconThunderbolt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-thunderbolt`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),m0=["stroke-width","stroke-linecap","stroke-linejoin"],v0=le("path",{d:"M27.824 5.203A.1.1 0 0 1 28 5.27V21h10.782a.1.1 0 0 1 .075.165L20.176 42.797A.1.1 0 0 1 20 42.73V27H9.219a.1.1 0 0 1-.076-.165L27.824 5.203Z"},null,-1),g0=[v0];function h0(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},g0,14,m0)}var ca=he(p0,[["render",h0]]);const b0=Object.assign(ca,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ca.name,ca)}}),y0=Z({name:"IconUnlock",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=oe("icon"),r=h(()=>[t,`${t}-unlock`,{[`${t}-spin`]:e.spin}]),i=h(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),S0=["stroke-width","stroke-linecap","stroke-linejoin"],E0=le("rect",{x:"7",y:"21",width:"34",height:"20",rx:"1"},null,-1),_0=le("path",{d:"M44 15a9 9 0 1 0-18 0v6M24 35v-8"},null,-1),k0=[E0,_0];function T0(e,n,t,r,i,s){return B(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:z(e.cls),style:we(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},k0,14,S0)}var ua=he(y0,[["render",T0]]);const O0=Object.assign(ua,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ua.name,ua)}}),P0=[IR,PR,jx,mL,b0,qx,Bx,cm,HR,o0,Xp,SR,Qx,f0,O0];function C0(e){for(const n of P0)e.component(n.name,n)}function L0(){Ln&&utools.db.replicateStateFromCloud()&&In.warning({content:"数据可能不完整，还在从云端复制中"})}try{kh(Ew).use(Cx).use(Ch()).use(Lx).use(C0).mount("#app"),L0()}catch(e){Ln&&utools.showNotification("初始化失败: "+e)}const R0=()=>null;var Wd;const w0=((Wd=window==null?void 0:window.preload)==null?void 0:Wd.electron)||{};var zd;const x0=((zd=window==null?void 0:window.preload)==null?void 0:zd.Buffer)||{};var Vd;const I0=((Vd=window==null?void 0:window.preload)==null?void 0:Vd.require)||R0;var Ud;const A0=((Ud=window==null?void 0:window.preload)==null?void 0:Ud.vm)||{},B0=Object.freeze(Object.defineProperty({__proto__:null,Buffer:x0,electron:w0,require:I0,vm:A0},Symbol.toStringTag,{value:"Module"}));function N0(e){return Ya()?(tf(e),!0):!1}function Fm(e){return typeof e=="function"?e():ke(e)}const Km=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const D0=Object.prototype.toString,$0=e=>D0.call(e)==="[object Object]",H0=()=>{};function M0(e){var n;const t=Fm(e);return(n=t==null?void 0:t.$el)!=null?n:t}const j0=Km?window:void 0,Wm=Km?window.document:void 0;function zm(...e){let n,t,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,i]=e,n=j0):[n,t,r,i]=e,!n)return H0;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,d,f,m)=>(u.addEventListener(d,f,m),()=>u.removeEventListener(d,f,m)),l=Oe(()=>[M0(n),Fm(i)],([u,d])=>{if(o(),!u)return;const f=$0(d)?{...d}:d;s.push(...t.flatMap(m=>r.map(S=>a(u,m,S,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return N0(c),c}function F0(){const{activeElement:e,body:n}=document;if(!e||e===n)return!1;switch(e.tagName){case"INPUT":case"TEXTAREA":return!0}return e.hasAttribute("contenteditable")}function K0({keyCode:e,metaKey:n,ctrlKey:t,altKey:r}){return n||t||r?!1:e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122}function W0(e,n={}){const{document:t=Wm}=n;t&&zm(t,"keydown",i=>{!F0()&&K0(i)&&e(i)},{passive:!0})}function z0(e={}){const{document:n=Wm}=e;if(!n)return j("visible");const t=j(n.visibilityState);return zm(n,"visibilitychange",()=>{t.value=n.visibilityState}),t}function V0(e,n){const t=e.addCommand(0,(r,i)=>{const s=r.get(Jm);i(s)});e.addAction({id:"quickInput",label:"Quick Input",contextMenuGroupId:"buildin-action",run:(r,{list:i,callback:s,options:o})=>{r.trigger("",t,a=>{a.pick(i,o).then(l=>{s(l)})})}}),e.addAction({id:"run",label:"Run",keybindings:[tt.CtrlCmd|Zt.KeyR],contextMenuGroupId:"buildin-action",run:()=>n("action","runCode")}),e.addAction({id:"newCode",label:"New Code",keybindings:[tt.CtrlCmd|Zt.KeyN],contextMenuGroupId:"buildin-action",run:()=>n("action","newCode")}),e.addAction({id:"clearConsole",label:"Clear Console",keybindings:[tt.CtrlCmd|Zt.KeyQ],contextMenuGroupId:"buildin-action",run:()=>n("action","clearConsole")}),e.addAction({id:"toggleReadonly",label:"Toggle Readonly",keybindings:[tt.CtrlCmd|Zt.KeyE],contextMenuGroupId:"buildin-action",run:()=>n("action","toggleReadonly")}),e.addAction({id:"showCommands",label:"Show Commands",keybindings:[tt.CtrlCmd|tt.Shift|Zt.KeyP],contextMenuGroupId:"buildin-action",run:()=>n("action","showCommands")}),e.addAction({id:"listHistory",label:"List History",keybindings:[tt.CtrlCmd|tt.Shift|Zt.KeyL],contextMenuGroupId:"buildin-action",run:()=>{n("action","listHistory")}})}var Ul={exports:{}};function ql(){}ql.prototype={on:function(e,n,t){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:n,ctx:t}),this},once:function(e,n,t){var r=this;function i(){r.off(e,i),n.apply(t,arguments)}return i._=n,this.on(e,i,t)},emit:function(e){var n=[].slice.call(arguments,1),t=((this.e||(this.e={}))[e]||[]).slice(),r=0,i=t.length;for(r;r<i;r++)t[r].fn.apply(t[r].ctx,n);return this},off:function(e,n){var t=this.e||(this.e={}),r=t[e],i=[];if(r&&n)for(var s=0,o=r.length;s<o;s++)r[s].fn!==n&&r[s].fn._!==n&&i.push(r[s]);return i.length?t[e]=i:delete t[e],this}};Ul.exports=ql;Ul.exports.TinyEmitter=ql;var U0=Ul.exports,q0=U0,G0=new q0;const J0=MO(G0),Z0=(e,...n)=>J0.on(e,...n),Y0=Z({__name:"Editor",props:{code:{default:""},language:{default:"javascript"},readonly:{type:Boolean,default:!1},debounceInterval:{default:500},indentType:{default:"space"},indentSize:{default:2}},emits:["codeChange","action"],setup(e,{expose:n,emit:t}){const r=e,i=t,s=j(null);let o=null,a=null;const l=Me(Rm),c=z0();Oe(()=>r.code,f=>{o&&f!==(o==null?void 0:o.getValue())&&o.setValue(f)}),Oe(()=>r.readonly,f=>{Fe(()=>{o==null||o.updateOptions({readOnly:f})})},{immediate:!0}),Oe(()=>r.debounceInterval,f=>{var m;a&&(a.dispose(),a=((m=o==null?void 0:o.getModel())==null?void 0:m.onDidChangeContent(du(()=>{i("codeChange",o.getValue())},f)))||null)},{immediate:!0}),Oe(()=>r.indentType,f=>{Fe(()=>{o==null||o.updateOptions({insertSpaces:f==="space"})})}),Oe(()=>r.indentSize,f=>{Fe(()=>{o==null||o.updateOptions({tabSize:f})})}),Oe(()=>l==null?void 0:l.value,f=>{Fe(()=>{Yl.setTheme(f?"vs-dark":"vs")})},{immediate:!0}),Oe(c,f=>{f&&(o==null||o.focus())}),Z0(Sw,()=>{o==null||o.focus()}),Ze(()=>{u()}),kt(()=>{d()}),W0(()=>{o==null||o.focus()});function u(){var f;o&&d(),o=Yl.create(s.value,{value:r.code,language:r.language,theme:l!=null&&l.value?"vs-dark":"vs",tabSize:r.indentSize,insertSpaces:r.indentType==="space",detectIndentation:!1,minimap:{enabled:!1},automaticLayout:!0}),V0(o,i),a=((f=o.getModel())==null?void 0:f.onDidChangeContent(du(()=>{i("codeChange",o.getValue())},r.debounceInterval)))||null,o.focus()}function d(){o==null||o.dispose(),o=null}return n({editor:h(()=>o)}),(f,m)=>(B(),X("div",{class:"editor",ref_key:"editorRef",ref:s},null,512))}}),ci=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},X0=ci(Y0,[["__scopeId","data-v-1f3f3f7f"]]),Q0={class:"console"},eI={key:0,class:"empty-tip"},nI={class:"content"},tI=Z({__name:"Console",props:{messages:{}},setup(e){const n=e,t=j(null);Oe(()=>n.messages.length,()=>{var c,u;const o=t.value;if(!o)return;const a=o[o.length-1],l=(u=(c=a==null?void 0:a.parentElement)==null?void 0:c.parentElement)==null?void 0:u.parentElement;a&&l&&Fe(()=>l.scrollTop=a.offsetTop)});function r(o){return Be(o).map(a=>{const l=Od(a);if(["Array","Object"].includes(l)){const c=()=>{const u=new WeakSet;return(d,f)=>{if(typeof f=="object"&&f!==null){if(u.has(f))return d;u.add(f)}return f}};try{return JSON.stringify(a,c())}catch{return`[${l}]`}}else{if(l==="String")return`"${a}"`;if(["Null","Undefined"].includes(l))return l.toLowerCase();if(l==="Symbol")return a.toString()}return a}).join(`
`)}function i(o){jR(String(o))?In.success("复制成功"):In.error("复制失败")}function s(o){Ln&&utools.redirect("Json",JSON.stringify(o))}return(o,a)=>{const l=nt,c=Wl;return B(),X("div",Q0,[O(Wn,{name:"emerge",mode:"out-in"},{default:K(()=>[o.messages.length?(B(),pe(bl,{key:1,name:"emerge",tag:"div"},{default:K(()=>[(B(!0),X(Ke,null,ai(o.messages,u=>(B(),X("div",{ref_for:!0,ref_key:"msgContainerRef",ref:t,key:u.id,class:z({message:!0,log:!u.type||u.type==="log",warn:u.type==="warn",error:u.type==="error",info:u.type==="info"})},[O(c,{content:u.timeStamp.toString()},{default:K(()=>[O(l,{class:"status",size:"mini",type:"text",onClick:d=>i(u.timeStamp)},{default:K(()=>[Ae(ze(ke(MR)(u.timeStamp).split(" ")[1]),1)]),_:2},1032,["onClick"])]),_:2},1032,["content"]),O(l,{class:"handler",size:"mini",type:"text",status:"success",onClick:d=>i(r(u.content))},{default:K(()=>[Ae(" COPY ")]),_:2},1032,["onClick"]),ke(Ln)&&["Array","Object"].includes(ke(Od)(u.content[0]))?(B(),pe(l,{key:0,class:"handler",size:"mini",type:"text",status:"warning",onClick:d=>s(u.content[0])},{default:K(()=>[Ae(" JSON ")]),_:2},1032,["onClick"])):Ee("",!0),le("div",nI,ze(r(u.content)),1)],2))),128))]),_:1})):(B(),X("div",eI,"控制台为空"))]),_:1})])}}}),rI=ci(tI,[["__scopeId","data-v-418eaa93"]]),iI={class:"runner"},oI={class:"btns"},sI=Z({__name:"Runner",setup(e){const n=j(null),t=j(wn("size")||.75),r=to(),i=zl(),s=Ka();r.init(),Oe(t,l=>kn("size",l));function o(){ja.confirm({title:"确认删除",content:"确认删除该历史记录？",onOk:()=>{s.deleteHistory(r.id)}})}function a(l){var c,u,d,f,m,S;switch(l){case"runCode":r.execCode();break;case"newCode":r.newCode();break;case"clearConsole":r.clearConsole();break;case"toggleReadonly":r.changeReadonly();break;case"showCommands":(u=(c=n.value)==null?void 0:c.editor)==null||u.trigger("","editor.action.quickCommand",null);break;case"listHistory":s.loadHistorys();const E=s.historys.map(P=>({type:"item",id:P.timeStamp,label:`${P.name||"Untitled"} - ${new Date(P.timeStamp).toLocaleString()} - ${P.code}`}));(f=(d=n.value)==null?void 0:d.editor)==null||f.focus(),(S=(m=n.value)==null?void 0:m.editor)==null||S.trigger("","quickInput",{list:E,options:{activeItem:E[E.findIndex(P=>P.id===r.id)]},callback:P=>{P&&to().loadCode(P.id)}});break}}return(l,c)=>{const u=ae("icon-plus"),d=nt,f=ae("icon-thunderbolt"),m=ae("icon-lock"),S=ae("icon-unlock"),E=ae("icon-settings"),P=ae("icon-info-circle"),k=ae("icon-delete"),T=Vr,_=HO,v=mR,R=Zv("zoom");return B(),X("div",iI,[le("div",oI,[O(d,{onClick:ke(r).newCode},{default:K(()=>[O(u)]),_:1},8,["onClick"]),O(d,{onClick:ke(r).execCode},{default:K(()=>[jn(O(f,null,null,512),[[R,ke(r).execState]])]),_:1},8,["onClick"]),O(d,{onClick:ke(r).changeReadonly},{default:K(()=>[ke(r).readonly?jn((B(),pe(m,{key:0},null,512)),[[R,ke(r).readonly]]):jn((B(),pe(S,{key:1},null,512)),[[R,!ke(r).readonly]])]),_:1},8,["onClick"]),O(d,{onClick:c[0]||(c[0]=b=>l.$router.push("/setting"))},{default:K(()=>[O(E)]),_:1}),O(d,{onClick:c[1]||(c[1]=b=>l.$router.push("/about"))},{default:K(()=>[O(P)]),_:1}),O(d,{onClick:o},{default:K(()=>[O(k)]),_:1}),O(d,{class:"width-80",onClick:ke(r).changeEnv},{default:K(()=>[Ae(ze(ke(r).currentEnv),1)]),_:1},8,["onClick"]),O(d,{class:"width-80",onClick:ke(r).changeMode},{default:K(()=>[Ae(ze(ke(r).currentMode),1)]),_:1},8,["onClick"]),O(d,{onClick:c[2]||(c[2]=b=>a("listHistory")),style:{flex:"1"}},{default:K(()=>[Ae(" 代码历史回溯 ("+ze(ke(s).historys.length)+") ",1)]),_:1})]),O(v,{size:ke(t),"onUpdate:size":c[3]||(c[3]=b=>Qe(t)?t.value=b:null),min:.1,max:.8},{first:K(()=>[O(X0,{ref_key:"editorRef",ref:n,code:ke(r).code,language:"javascript",readonly:ke(r).readonly,"debounce-interval":ke(i).codeChangeDebounce,"indent-type":ke(i).indentType,"indent-size":ke(i).indentSize,onCodeChange:ke(r).handleCodeChange,onAction:a},null,8,["code","readonly","debounce-interval","indent-type","indent-size","onCodeChange"])]),second:K(()=>[O(_,{trigger:["contextMenu"],alignPoint:""},{content:K(()=>[O(T,{onClick:ke(r).clearConsole},{default:K(()=>[Ae(" 清空控制台 ")]),_:1},8,["onClick"])]),default:K(()=>[O(rI,{messages:ke(r).messages,onAction:a},null,8,["messages"])]),_:1})]),_:1},8,["size"])])}}}),aI=ci(sI,[["__scopeId","data-v-382bde42"]]),lI=Object.freeze(Object.defineProperty({__proto__:null,default:aI},Symbol.toStringTag,{value:"Module"}));function cI(e,n,t,r){Ze(()=>{e.addEventListener(n,t,r)}),kt(()=>{e.removeEventListener(n,t,r)})}function Vm(){const e=Px(),n=()=>e.back();return cI(document,"keydown",t=>{t.key==="Escape"&&(n(),t.stopPropagation())}),{BackButton:()=>ni(nt,{onClick:n,shape:"circle",style:{position:"fixed !important",top:"10px",left:"10px"}},()=>ni(yP))}}const uI={class:"setting-content"},wr=Z({__name:"SettingContent",props:{title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(n,t)=>{const r=ae("icon-info-circle"),i=Wl;return B(),X("div",uI,[le("h3",null,ze(e.title),1),e.desc?(B(),pe(i,{key:0,content:e.desc},{default:K(()=>[O(r)]),_:1},8,["content"])):Ee("",!0),de(n.$slots,"default")])}}}),dI={class:"setting"},fI=Z({__name:"Setting",setup(e){const n=zl(),{BackButton:t}=Vm();return Rn(()=>{for(const r of n.snippets)kn("setting/snippet/"+r.id,r)}),(r,i)=>{const s=zr,o=fP,a=pP,l=Bi,c=Lk,u=Di,d=ym,f=bm,m=$L,S=lL,E=ae("icon-delete"),P=nt,k=uR,T=Ni,_=BP;return B(),X("div",dI,[O(ke(t)),O(wr,{title:"保存时间"},{default:K(()=>[O(o,{modelValue:ke(n).codeChangeDebounce,"onUpdate:modelValue":i[0]||(i[0]=v=>ke(n).codeChangeDebounce=v),onChange:i[1]||(i[1]=v=>ke(n).update("codeChangeDebounce")(v))},{default:K(()=>[O(s,{value:300},{default:K(()=>[Ae("0.3秒")]),_:1}),O(s,{value:500},{default:K(()=>[Ae("0.5秒")]),_:1}),O(s,{value:1e3},{default:K(()=>[Ae("1秒")]),_:1})]),_:1},8,["modelValue"])]),_:1}),O(wr,{title:"代码缩进"},{default:K(()=>[O(l,{modelValue:ke(n).indentType,"onUpdate:modelValue":i[2]||(i[2]=v=>ke(n).indentType=v),onChange:i[3]||(i[3]=v=>ke(n).update("indentType")(v))},{default:K(()=>[O(a,{value:"space"},{default:K(()=>[Ae("Space")]),_:1}),O(a,{value:"tab"},{default:K(()=>[Ae("Tab")]),_:1})]),_:1},8,["modelValue"])]),_:1}),O(wr,{title:"缩进尺寸"},{default:K(()=>[O(o,{modelValue:ke(n).indentSize,"onUpdate:modelValue":i[4]||(i[4]=v=>ke(n).indentSize=v),onChange:i[5]||(i[5]=v=>ke(n).update("indentSize")(v))},{default:K(()=>[O(s,{value:2},{default:K(()=>[Ae("2")]),_:1}),O(s,{value:4},{default:K(()=>[Ae("4")]),_:1}),O(s,{value:6},{default:K(()=>[Ae("6")]),_:1}),O(s,{value:8},{default:K(()=>[Ae("8")]),_:1})]),_:1},8,["modelValue"])]),_:1}),O(wr,{title:"自定义代码片段"},{default:K(()=>[ke(n).snippets.length?(B(),pe(_,{key:0},{default:K(()=>[(B(!0),X(Ke,null,ai(ke(n).snippets,v=>(B(),pe(T,{key:v.id,header:`Snippet: ${v.label} - ${v.documentation}`},{extra:K(()=>[O(k,{content:"确定删除吗？",onOk:R=>ke(n).removeSnippet(v.id)},{default:K(()=>[O(P,{onClick:i[6]||(i[6]=Xn(R=>r.void,["stop"])),status:"danger",shape:"circle"},{default:K(()=>[O(E)]),_:1})]),_:2},1032,["onOk"])]),default:K(()=>[O(S,{model:v,layout:"vertical"},{default:K(()=>[O(f,null,{default:K(()=>[O(d,{span:12},{default:K(()=>[O(u,{field:"label",label:"提示词",required:""},{default:K(()=>[O(c,{modelValue:v.label,"onUpdate:modelValue":R=>v.label=R,placeholder:"label"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),O(d,{span:12},{default:K(()=>[O(u,{field:"documentation",label:"说明"},{default:K(()=>[O(c,{modelValue:v.documentation,"onUpdate:modelValue":R=>v.documentation=R,placeholder:"documentation"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),O(f,null,{default:K(()=>[O(d,{span:24},{default:K(()=>[O(u,{field:"insertText",label:"代码内容",required:""},{default:K(()=>[O(m,{modelValue:v.insertText,"onUpdate:modelValue":R=>v.insertText=R,placeholder:"insertText"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["model"])]),_:2},1032,["header"]))),128))]),_:1})):Ee("",!0),O(P,{type:"outline",onClick:Xn(ke(n).newSnippet,["stop"]),style:{"margin-top":"10px"},long:""},{default:K(()=>[Ae(" 新建 ")]),_:1},8,["onClick"])]),_:1}),O(wr,{title:"插件主题"},{default:K(()=>[O(l,{modelValue:ke(n).theme,"onUpdate:modelValue":i[7]||(i[7]=v=>ke(n).theme=v),onChange:ke(n).setTheme},{default:K(()=>[O(a,{value:"default"},{default:K(()=>[Ae("跟随系统")]),_:1}),O(a,{value:"dark"},{default:K(()=>[Ae("深色模式")]),_:1}),O(a,{value:"light"},{default:K(()=>[Ae("浅色模式")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})])}}}),pI=ci(fI,[["__scopeId","data-v-023ecf2d"]]),mI=Object.freeze(Object.defineProperty({__proto__:null,default:pI},Symbol.toStringTag,{value:"Module"})),vI=""+new URL("../logo.png",import.meta.url).href,Gl=e=>(Wv("data-v-e7551b4b"),e=e(),zv(),e),gI={class:"about"},hI=Gl(()=>le("img",{class:"bg-icon",src:vI,alt:"logo"},null,-1)),bI=Gl(()=>le("h1",{class:"title"},"超级JavaScript",-1)),yI={class:"footer-btns"},SI=Gl(()=>le("div",{class:"footer-tip"},"Copyright © 2024 ZiuChen",-1)),EI=Z({__name:"About",setup(e){const n=[{text:"插件主页",url:"https://ziuchen.gitee.io/project/JSRunner/"},{text:"开源地址",url:"https://github.com/ZiuChen/JSRunner",badge:{text:"Star Me"}},{text:"体验在线版",url:"https://ziuchen.github.io/JSRunner/"},{text:"更新日志",url:"https://ziuchen.gitee.io/project/JSRunner/log/"}],{BackButton:t}=Vm();return(r,i)=>{const s=VP,o=nt,a=aO;return B(),X("div",gI,[hI,bI,O(s,{onClick:i[0]||(i[0]=l=>ke(Qs)("https://github.com/ZiuChen"))},{default:K(()=>[Ae("ZiuChen")]),_:1}),le("div",yI,[(B(),X(Ke,null,ai(n,l=>(B(),X(Ke,null,[l!=null&&l.badge?(B(),pe(a,lv(He({key:0},l.badge)),{default:K(()=>[O(o,{onClick:c=>ke(Qs)(l.url)},{default:K(()=>[Ae(ze(l.text),1)]),_:2},1032,["onClick"])]),_:2},1040)):(B(),pe(o,{key:1,onClick:c=>ke(Qs)(l.url)},{default:K(()=>[Ae(ze(l.text),1)]),_:2},1032,["onClick"]))],64))),64))]),SI,O(ke(t))])}}}),_I=ci(EI,[["__scopeId","data-v-e7551b4b"]]),kI=Object.freeze(Object.defineProperty({__proto__:null,default:_I},Symbol.toStringTag,{value:"Module"}));export{Mi as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}