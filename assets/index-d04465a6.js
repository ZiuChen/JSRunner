import{K as Pi,a as Ci,W as Fu,b as $u,c as ju,l as Ln,e as Ku}from"./monaco-b6e11bf6.js";import"./index-d04465a6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ds(e,n){const t=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return n?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Le={},bt=[],pn=()=>{},Wu=()=>!1,Uu=/^on[^a-z]/,ii=e=>Uu.test(e),us=e=>e.startsWith("onUpdate:"),Be=Object.assign,ps=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},zu=Object.prototype.hasOwnProperty,Se=(e,n)=>zu.call(e,n),re=Array.isArray,yt=e=>Sr(e)==="[object Map]",mc=e=>Sr(e)==="[object Set]",Vu=e=>Sr(e)==="[object RegExp]",ae=e=>typeof e=="function",Ie=e=>typeof e=="string",fs=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",vc=e=>Ce(e)&&ae(e.then)&&ae(e.catch),gc=Object.prototype.toString,Sr=e=>gc.call(e),qu=e=>Sr(e).slice(8,-1),hc=e=>Sr(e)==="[object Object]",ms=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mr=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oi=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Gu=/-(\w)/g,Sn=oi(e=>e.replace(Gu,(n,t)=>t?t.toUpperCase():"")),Ju=/\B([A-Z])/g,At=oi(e=>e.replace(Ju,"-$1").toLowerCase()),si=oi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ri=oi(e=>e?`on${si(e)}`:""),lr=(e,n)=>!Object.is(e,n),Qt=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Gr=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Zu=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Yu=e=>{const n=Ie(e)?Number(e):NaN;return isNaN(n)?e:n};let aa;const Ao=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ve(e){if(re(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=Ie(r)?np(r):ve(r);if(i)for(const s in i)n[s]=i[s]}return n}else{if(Ie(e))return e;if(Ce(e))return e}}const Xu=/;(?![^(]*\))/g,Qu=/:([^]+)/,ep=/\/\*[^]*?\*\//g;function np(e){const n={};return e.replace(ep,"").split(Xu).forEach(t=>{if(t){const r=t.split(Qu);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function V(e){let n="";if(Ie(e))n=e;else if(re(e))for(let t=0;t<e.length;t++){const r=V(e[t]);r&&(n+=r+" ")}else if(Ce(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function tp(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Ie(n)&&(e.class=V(n)),t&&(e.style=ve(t)),e}const rp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ip=ds(rp);function bc(e){return!!e||e===""}const dn=e=>Ie(e)?e:e==null?"":re(e)||Ce(e)&&(e.toString===gc||!ae(e.toString))?JSON.stringify(e,yc,2):String(e),yc=(e,n)=>n&&n.__v_isRef?yc(e,n.value):yt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:mc(n)?{[`Set(${n.size})`]:[...n.values()]}:Ce(n)&&!re(n)&&!hc(n)?String(n):n;let Xe;class Sc{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xe,!n&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Xe;try{return Xe=this,n()}finally{Xe=t}}}on(){Xe=this}off(){Xe=this.parent}stop(n){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ec(e){return new Sc(e)}function op(e,n=Xe){n&&n.active&&n.effects.push(e)}function Tc(){return Xe}function sp(e){Xe&&Xe.cleanups.push(e)}const vs=e=>{const n=new Set(e);return n.w=0,n.n=0,n},_c=e=>(e.w&Gn)>0,kc=e=>(e.n&Gn)>0,ap=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Gn},lp=e=>{const{deps:n}=e;if(n.length){let t=0;for(let r=0;r<n.length;r++){const i=n[r];_c(i)&&!kc(i)?i.delete(e):n[t++]=i,i.w&=~Gn,i.n&=~Gn}n.length=t}},Jr=new WeakMap;let Gt=0,Gn=1;const wo=30;let cn;const rt=Symbol(""),No=Symbol("");class gs{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,op(this,r)}run(){if(!this.active)return this.fn();let n=cn,t=Un;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=cn,cn=this,Un=!0,Gn=1<<++Gt,Gt<=wo?ap(this):la(this),this.fn()}finally{Gt<=wo&&lp(this),Gn=1<<--Gt,cn=this.parent,Un=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(la(this),this.onStop&&this.onStop(),this.active=!1)}}function la(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Un=!0;const Oc=[];function wt(){Oc.push(Un),Un=!1}function Nt(){const e=Oc.pop();Un=e===void 0?!0:e}function Ze(e,n,t){if(Un&&cn){let r=Jr.get(e);r||Jr.set(e,r=new Map);let i=r.get(t);i||r.set(t,i=vs()),Pc(i)}}function Pc(e,n){let t=!1;Gt<=wo?kc(e)||(e.n|=Gn,t=!_c(e)):t=!e.has(cn),t&&(e.add(cn),cn.deps.push(e))}function In(e,n,t,r,i,s){const o=Jr.get(e);if(!o)return;let a=[];if(n==="clear")a=[...o.values()];else if(t==="length"&&re(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),n){case"add":re(e)?ms(t)&&a.push(o.get("length")):(a.push(o.get(rt)),yt(e)&&a.push(o.get(No)));break;case"delete":re(e)||(a.push(o.get(rt)),yt(e)&&a.push(o.get(No)));break;case"set":yt(e)&&a.push(o.get(rt));break}if(a.length===1)a[0]&&Bo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Bo(vs(l))}}function Bo(e,n){const t=re(e)?e:[...e];for(const r of t)r.computed&&ca(r);for(const r of t)r.computed||ca(r)}function ca(e,n){(e!==cn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function cp(e,n){var t;return(t=Jr.get(e))==null?void 0:t.get(n)}const dp=ds("__proto__,__v_isRef,__isVue"),Cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fs)),up=hs(),pp=hs(!1,!0),fp=hs(!0),da=mp();function mp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=me(this);for(let s=0,o=this.length;s<o;s++)Ze(r,"get",s+"");const i=r[n](...t);return i===-1||i===!1?r[n](...t.map(me)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){wt();const r=me(this)[n].apply(this,t);return Nt(),r}}),e}function vp(e){const n=me(this);return Ze(n,"has",e),n.hasOwnProperty(e)}function hs(e=!1,n=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return n;if(i==="__v_raw"&&s===(e?n?Ip:Ac:n?Ic:xc).get(r))return r;const o=re(r);if(!e){if(o&&Se(da,i))return Reflect.get(da,i,s);if(i==="hasOwnProperty")return vp}const a=Reflect.get(r,i,s);return(fs(i)?Cc.has(i):dp(i))||(e||Ze(r,"get",i),n)?a:Ae(a)?o&&ms(i)?a:a.value:Ce(a)?e?Ss(a):Qe(a):a}}const gp=Rc(),hp=Rc(!0);function Rc(e=!1){return function(t,r,i,s){let o=t[r];if(kt(o)&&Ae(o)&&!Ae(i))return!1;if(!e&&(!Zr(i)&&!kt(i)&&(o=me(o),i=me(i)),!re(t)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const a=re(t)&&ms(r)?Number(r)<t.length:Se(t,r),l=Reflect.set(t,r,i,s);return t===me(s)&&(a?lr(i,o)&&In(t,"set",r,i):In(t,"add",r,i)),l}}function bp(e,n){const t=Se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&In(e,"delete",n,void 0),r}function yp(e,n){const t=Reflect.has(e,n);return(!fs(n)||!Cc.has(n))&&Ze(e,"has",n),t}function Sp(e){return Ze(e,"iterate",re(e)?"length":rt),Reflect.ownKeys(e)}const Lc={get:up,set:gp,deleteProperty:bp,has:yp,ownKeys:Sp},Ep={get:fp,set(e,n){return!0},deleteProperty(e,n){return!0}},Tp=Be({},Lc,{get:pp,set:hp}),bs=e=>e,ai=e=>Reflect.getPrototypeOf(e);function Cr(e,n,t=!1,r=!1){e=e.__v_raw;const i=me(e),s=me(n);t||(n!==s&&Ze(i,"get",n),Ze(i,"get",s));const{has:o}=ai(i),a=r?bs:t?Ts:cr;if(o.call(i,n))return a(e.get(n));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(n)}function Rr(e,n=!1){const t=this.__v_raw,r=me(t),i=me(e);return n||(e!==i&&Ze(r,"has",e),Ze(r,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function Lr(e,n=!1){return e=e.__v_raw,!n&&Ze(me(e),"iterate",rt),Reflect.get(e,"size",e)}function ua(e){e=me(e);const n=me(this);return ai(n).has.call(n,e)||(n.add(e),In(n,"add",e,e)),this}function pa(e,n){n=me(n);const t=me(this),{has:r,get:i}=ai(t);let s=r.call(t,e);s||(e=me(e),s=r.call(t,e));const o=i.call(t,e);return t.set(e,n),s?lr(n,o)&&In(t,"set",e,n):In(t,"add",e,n),this}function fa(e){const n=me(this),{has:t,get:r}=ai(n);let i=t.call(n,e);i||(e=me(e),i=t.call(n,e)),r&&r.call(n,e);const s=n.delete(e);return i&&In(n,"delete",e,void 0),s}function ma(){const e=me(this),n=e.size!==0,t=e.clear();return n&&In(e,"clear",void 0,void 0),t}function xr(e,n){return function(r,i){const s=this,o=s.__v_raw,a=me(o),l=n?bs:e?Ts:cr;return!e&&Ze(a,"iterate",rt),o.forEach((c,d)=>r.call(i,l(c),l(d),s))}}function Ir(e,n,t){return function(...r){const i=this.__v_raw,s=me(i),o=yt(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),d=t?bs:n?Ts:cr;return!n&&Ze(s,"iterate",l?No:rt),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:a?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Dn(e){return function(...n){return e==="delete"?!1:this}}function _p(){const e={get(s){return Cr(this,s)},get size(){return Lr(this)},has:Rr,add:ua,set:pa,delete:fa,clear:ma,forEach:xr(!1,!1)},n={get(s){return Cr(this,s,!1,!0)},get size(){return Lr(this)},has:Rr,add:ua,set:pa,delete:fa,clear:ma,forEach:xr(!1,!0)},t={get(s){return Cr(this,s,!0)},get size(){return Lr(this,!0)},has(s){return Rr.call(this,s,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:xr(!0,!1)},r={get(s){return Cr(this,s,!0,!0)},get size(){return Lr(this,!0)},has(s){return Rr.call(this,s,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ir(s,!1,!1),t[s]=Ir(s,!0,!1),n[s]=Ir(s,!1,!0),r[s]=Ir(s,!0,!0)}),[e,t,n,r]}const[kp,Op,Pp,Cp]=_p();function ys(e,n){const t=n?e?Cp:Pp:e?Op:kp;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Se(t,i)&&i in r?t:r,i,s)}const Rp={get:ys(!1,!1)},Lp={get:ys(!1,!0)},xp={get:ys(!0,!1)},xc=new WeakMap,Ic=new WeakMap,Ac=new WeakMap,Ip=new WeakMap;function Ap(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wp(e){return e.__v_skip||!Object.isExtensible(e)?0:Ap(qu(e))}function Qe(e){return kt(e)?e:Es(e,!1,Lc,Rp,xc)}function Np(e){return Es(e,!1,Tp,Lp,Ic)}function Ss(e){return Es(e,!0,Ep,xp,Ac)}function Es(e,n,t,r,i){if(!Ce(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=wp(e);if(o===0)return e;const a=new Proxy(e,o===2?r:t);return i.set(e,a),a}function zn(e){return kt(e)?zn(e.__v_raw):!!(e&&e.__v_isReactive)}function kt(e){return!!(e&&e.__v_isReadonly)}function Zr(e){return!!(e&&e.__v_isShallow)}function wc(e){return zn(e)||kt(e)}function me(e){const n=e&&e.__v_raw;return n?me(n):e}function li(e){return Gr(e,"__v_skip",!0),e}const cr=e=>Ce(e)?Qe(e):e,Ts=e=>Ce(e)?Ss(e):e;function Nc(e){Un&&cn&&(e=me(e),Pc(e.dep||(e.dep=vs())))}function Bc(e,n){e=me(e);const t=e.dep;t&&Bo(t)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function te(e){return Dc(e,!1)}function Bp(e){return Dc(e,!0)}function Dc(e,n){return Ae(e)?e:new Dp(e,n)}class Dp{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:me(n),this._value=t?n:cr(n)}get value(){return Nc(this),this._value}set value(n){const t=this.__v_isShallow||Zr(n)||kt(n);n=t?n:me(n),lr(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:cr(n),Bc(this))}}function le(e){return Ae(e)?e.value:e}const Hp={get:(e,n,t)=>le(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return Ae(i)&&!Ae(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function Hc(e){return zn(e)?e:new Proxy(e,Hp)}function en(e){const n=re(e)?new Array(e.length):{};for(const t in e)n[t]=Mc(e,t);return n}class Mp{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return cp(me(this._object),this._key)}}class Fp{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Do(e,n,t){return Ae(e)?e:ae(e)?new Fp(e):Ce(e)&&arguments.length>1?Mc(e,n,t):te(e)}function Mc(e,n,t){const r=e[n];return Ae(r)?r:new Mp(e,n,t)}class $p{constructor(n,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new gs(n,()=>{this._dirty||(this._dirty=!0,Bc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const n=me(this);return Nc(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function jp(e,n,t=!1){let r,i;const s=ae(e);return s?(r=e,i=pn):(r=e.get,i=e.set),new $p(r,i,s||!i,t)}function Vn(e,n,t,r){let i;try{i=r?e(...r):e()}catch(s){ci(s,n,t)}return i}function on(e,n,t,r){if(ae(e)){const s=Vn(e,n,t,r);return s&&vc(s)&&s.catch(o=>{ci(o,n,t)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(on(e[s],n,t,r));return i}function ci(e,n,t,r=!0){const i=n?n.vnode:null;if(n){let s=n.parent;const o=n.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,a)===!1)return}s=s.parent}const l=n.appContext.config.errorHandler;if(l){Vn(l,null,10,[e,o,a]);return}}}let dr=!1,Ho=!1;const Ue=[];let yn=0;const St=[];let Pn=null,et=0;const Fc=Promise.resolve();let _s=null;function An(e){const n=_s||Fc;return e?n.then(this?e.bind(this):e):n}function Kp(e){let n=yn+1,t=Ue.length;for(;n<t;){const r=n+t>>>1;ur(Ue[r])<e?n=r+1:t=r}return n}function ks(e){(!Ue.length||!Ue.includes(e,dr&&e.allowRecurse?yn+1:yn))&&(e.id==null?Ue.push(e):Ue.splice(Kp(e.id),0,e),$c())}function $c(){!dr&&!Ho&&(Ho=!0,_s=Fc.then(Kc))}function Wp(e){const n=Ue.indexOf(e);n>yn&&Ue.splice(n,1)}function Up(e){re(e)?St.push(...e):(!Pn||!Pn.includes(e,e.allowRecurse?et+1:et))&&St.push(e),$c()}function va(e,n=dr?yn+1:0){for(;n<Ue.length;n++){const t=Ue[n];t&&t.pre&&(Ue.splice(n,1),n--,t())}}function jc(e){if(St.length){const n=[...new Set(St)];if(St.length=0,Pn){Pn.push(...n);return}for(Pn=n,Pn.sort((t,r)=>ur(t)-ur(r)),et=0;et<Pn.length;et++)Pn[et]();Pn=null,et=0}}const ur=e=>e.id==null?1/0:e.id,zp=(e,n)=>{const t=ur(e)-ur(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Kc(e){Ho=!1,dr=!0,Ue.sort(zp);const n=pn;try{for(yn=0;yn<Ue.length;yn++){const t=Ue[yn];t&&t.active!==!1&&Vn(t,null,14)}}finally{yn=0,Ue.length=0,jc(),dr=!1,_s=null,(Ue.length||St.length)&&Kc()}}function Vp(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Le;let i=t;const s=n.startsWith("update:"),o=s&&n.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[d]||Le;p&&(i=t.map(v=>Ie(v)?v.trim():v)),u&&(i=t.map(Zu))}let a,l=r[a=Ri(n)]||r[a=Ri(Sn(n))];!l&&s&&(l=r[a=Ri(At(n))]),l&&on(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,on(c,e,6,i)}}function Wc(e,n,t=!1){const r=n.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!ae(e)){const l=c=>{const d=Wc(c,n,!0);d&&(a=!0,Be(o,d))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(Ce(e)&&r.set(e,null),null):(re(s)?s.forEach(l=>o[l]=null):Be(o,s),Ce(e)&&r.set(e,o),o)}function di(e,n){return!e||!ii(n)?!1:(n=n.slice(2).replace(/Once$/,""),Se(e,n[0].toLowerCase()+n.slice(1))||Se(e,At(n))||Se(e,n))}let Fe=null,ui=null;function Yr(e){const n=Fe;return Fe=e,ui=e&&e.type.__scopeId||null,n}function qp(e){ui=e}function Gp(){ui=null}function q(e,n=Fe,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&Ra(-1);const s=Yr(n);let o;try{o=e(...i)}finally{Yr(s),r._d&&Ra(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Li(e){const{type:n,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:p,setupState:v,ctx:T,inheritAttrs:_}=e;let R,S;const b=Yr(e);try{if(t.shapeFlag&4){const h=i||r;R=bn(d.call(h,h,u,s,v,p,T)),S=l}else{const h=n;R=bn(h.length>1?h(s,{attrs:l,slots:a,emit:c}):h(s,null)),S=n.props?l:Jp(l)}}catch(h){tr.length=0,ci(h,e,1),R=I(sn)}let A=R;if(S&&_!==!1){const h=Object.keys(S),{shapeFlag:y}=A;h.length&&y&7&&(o&&h.some(us)&&(S=Zp(S,o)),A=fn(A,S))}return t.dirs&&(A=fn(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),R=A,Yr(b),R}const Jp=e=>{let n;for(const t in e)(t==="class"||t==="style"||ii(t))&&((n||(n={}))[t]=e[t]);return n},Zp=(e,n)=>{const t={};for(const r in e)(!us(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Yp(e,n,t){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=n,c=s.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?ga(r,o,c):!!o;if(l&8){const d=n.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==r[p]&&!di(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ga(r,o,c):!0:!!o;return!1}function ga(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(n[s]!==e[s]&&!di(t,s))return!0}return!1}function Xp({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Uc=e=>e.__isSuspense;function Qp(e,n){n&&n.pendingBranch?re(e)?n.effects.push(...e):n.effects.push(e):Up(e)}const Ar={};function we(e,n,t){return zc(e,n,t)}function zc(e,n,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=Le){var a;const l=Tc()===((a=He)==null?void 0:a.scope)?He:null;let c,d=!1,u=!1;if(Ae(e)?(c=()=>e.value,d=Zr(e)):zn(e)?(c=()=>e,r=!0):re(e)?(u=!0,d=e.some(h=>zn(h)||Zr(h)),c=()=>e.map(h=>{if(Ae(h))return h.value;if(zn(h))return tt(h);if(ae(h))return Vn(h,l,2)})):ae(e)?n?c=()=>Vn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),on(e,l,3,[v])}:c=pn,n&&r){const h=c;c=()=>tt(h())}let p,v=h=>{p=b.onStop=()=>{Vn(h,l,4)}},T;if(vr)if(v=pn,n?t&&on(n,l,3,[c(),u?[]:void 0,v]):c(),i==="sync"){const h=Jf();T=h.__watcherHandles||(h.__watcherHandles=[])}else return pn;let _=u?new Array(e.length).fill(Ar):Ar;const R=()=>{if(b.active)if(n){const h=b.run();(r||d||(u?h.some((y,B)=>lr(y,_[B])):lr(h,_)))&&(p&&p(),on(n,l,3,[h,_===Ar?void 0:u&&_[0]===Ar?[]:_,v]),_=h)}else b.run()};R.allowRecurse=!!n;let S;i==="sync"?S=R:i==="post"?S=()=>$e(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),S=()=>ks(R));const b=new gs(c,S);n?t?R():_=b.run():i==="post"?$e(b.run.bind(b),l&&l.suspense):b.run();const A=()=>{b.stop(),l&&l.scope&&ps(l.scope.effects,b)};return T&&T.push(A),A}function ef(e,n,t){const r=this.proxy,i=Ie(e)?e.includes(".")?Vc(r,e):()=>r[e]:e.bind(r,r);let s;ae(n)?s=n:(s=n.handler,t=n);const o=He;Ct(this);const a=zc(i,s.bind(r),t);return o?Ct(o):it(),a}function Vc(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function tt(e,n){if(!Ce(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ae(e))tt(e.value,n);else if(re(e))for(let t=0;t<e.length;t++)tt(e[t],n);else if(mc(e)||yt(e))e.forEach(t=>{tt(t,n)});else if(hc(e))for(const t in e)tt(e[t],n);return e}function qc(e,n){const t=Fe;if(t===null)return e;const r=hi(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[o,a,l,c=Le]=n[s];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&tt(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Zn(e,n,t,r){const i=e.dirs,s=n&&n.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(wt(),on(l,t,8,[e.el,a,e,n]),Nt())}}function Gc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ge(()=>{e.isMounted=!0}),Bt(()=>{e.isUnmounting=!0}),e}const nn=[Function,Array],Jc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},nf={name:"BaseTransition",props:Jc,setup(e,{slots:n}){const t=gi(),r=Gc();let i;return()=>{const s=n.default&&Os(n.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const _ of s)if(_.type!==sn){o=_;break}}const a=me(e),{mode:l}=a;if(r.isLeaving)return xi(o);const c=ha(o);if(!c)return xi(o);const d=pr(c,a,r,t);Ot(c,d);const u=t.subTree,p=u&&ha(u);let v=!1;const{getTransitionKey:T}=c.type;if(T){const _=T();i===void 0?i=_:_!==i&&(i=_,v=!0)}if(p&&p.type!==sn&&(!Wn(c,p)||v)){const _=pr(p,a,r,t);if(Ot(p,_),l==="out-in")return r.isLeaving=!0,_.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},xi(o);l==="in-out"&&c.type!==sn&&(_.delayLeave=(R,S,b)=>{const A=Zc(r,p);A[String(p.key)]=p,R._leaveCb=()=>{S(),R._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=b})}return o}}},tf=nf;function Zc(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function pr(e,n,t,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:p,onAfterLeave:v,onLeaveCancelled:T,onBeforeAppear:_,onAppear:R,onAfterAppear:S,onAppearCancelled:b}=n,A=String(e.key),h=Zc(t,e),y=(N,L)=>{N&&on(N,r,9,L)},B=(N,L)=>{const M=L[1];y(N,L),re(N)?N.every(G=>G.length<=1)&&M():N.length<=1&&M()},W={mode:s,persisted:o,beforeEnter(N){let L=a;if(!t.isMounted)if(i)L=_||a;else return;N._leaveCb&&N._leaveCb(!0);const M=h[A];M&&Wn(e,M)&&M.el._leaveCb&&M.el._leaveCb(),y(L,[N])},enter(N){let L=l,M=c,G=d;if(!t.isMounted)if(i)L=R||l,M=S||c,G=b||d;else return;let K=!1;const se=N._enterCb=ge=>{K||(K=!0,ge?y(G,[N]):y(M,[N]),W.delayedLeave&&W.delayedLeave(),N._enterCb=void 0)};L?B(L,[N,se]):se()},leave(N,L){const M=String(e.key);if(N._enterCb&&N._enterCb(!0),t.isUnmounting)return L();y(u,[N]);let G=!1;const K=N._leaveCb=se=>{G||(G=!0,L(),se?y(T,[N]):y(v,[N]),N._leaveCb=void 0,h[M]===e&&delete h[M])};h[M]=e,p?B(p,[N,K]):K()},clone(N){return pr(N,n,t,r)}};return W}function xi(e){if(pi(e))return e=fn(e),e.children=null,e}function ha(e){return pi(e)?e.children?e.children[0]:void 0:e}function Ot(e,n){e.shapeFlag&6&&e.component?Ot(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Os(e,n=!1,t){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===De?(o.patchFlag&128&&i++,r=r.concat(Os(o.children,n,a))):(n||o.type!==sn)&&r.push(a!=null?fn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Z(e,n){return ae(e)?(()=>Be({name:e.name},n,{setup:e}))():e}const Et=e=>!!e.type.__asyncLoader,pi=e=>e.type.__isKeepAlive,rf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=gi(),r=t.ctx;if(!r.renderer)return()=>{const b=n.default&&n.default();return b&&b.length===1?b[0]:b};const i=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:d,o:{createElement:u}}}=r,p=u("div");r.activate=(b,A,h,y,B)=>{const W=b.component;c(b,A,h,0,a),l(W.vnode,b,A,h,W,a,y,b.slotScopeIds,B),$e(()=>{W.isDeactivated=!1,W.a&&Qt(W.a);const N=b.props&&b.props.onVnodeMounted;N&&tn(N,W.parent,b)},a)},r.deactivate=b=>{const A=b.component;c(b,p,null,1,a),$e(()=>{A.da&&Qt(A.da);const h=b.props&&b.props.onVnodeUnmounted;h&&tn(h,A.parent,b),A.isDeactivated=!0},a)};function v(b){Ii(b),d(b,t,a,!0)}function T(b){i.forEach((A,h)=>{const y=zo(A.type);y&&(!b||!b(y))&&_(h)})}function _(b){const A=i.get(b);!o||!Wn(A,o)?v(A):o&&Ii(o),i.delete(b),s.delete(b)}we(()=>[e.include,e.exclude],([b,A])=>{b&&T(h=>Jt(b,h)),A&&T(h=>!Jt(A,h))},{flush:"post",deep:!0});let R=null;const S=()=>{R!=null&&i.set(R,Ai(t.subTree))};return Ge(S),ct(S),Bt(()=>{i.forEach(b=>{const{subTree:A,suspense:h}=t,y=Ai(A);if(b.type===y.type&&b.key===y.key){Ii(y);const B=y.component.da;B&&$e(B,h);return}v(b)})}),()=>{if(R=null,!n.default)return null;const b=n.default(),A=b[0];if(b.length>1)return o=null,b;if(!Pt(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return o=null,A;let h=Ai(A);const y=h.type,B=zo(Et(h)?h.type.__asyncResolved||{}:y),{include:W,exclude:N,max:L}=e;if(W&&(!B||!Jt(W,B))||N&&B&&Jt(N,B))return o=h,A;const M=h.key==null?y:h.key,G=i.get(M);return h.el&&(h=fn(h),A.shapeFlag&128&&(A.ssContent=h)),R=M,G?(h.el=G.el,h.component=G.component,h.transition&&Ot(h,h.transition),h.shapeFlag|=512,s.delete(M),s.add(M)):(s.add(M),L&&s.size>parseInt(L,10)&&_(s.values().next().value)),h.shapeFlag|=256,o=h,Uc(A.type)?A:h}}},of=rf;function Jt(e,n){return re(e)?e.some(t=>Jt(t,n)):Ie(e)?e.split(",").includes(n):Vu(e)?e.test(n):!1}function sf(e,n){Xc(e,"a",n)}function Yc(e,n){Xc(e,"da",n)}function Xc(e,n,t=He){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(fi(n,r,t),t){let i=t.parent;for(;i&&i.parent;)pi(i.parent.vnode)&&af(r,n,t,i),i=i.parent}}function af(e,n,t,r){const i=fi(n,e,r,!0);dt(()=>{ps(r[n],i)},t)}function Ii(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ai(e){return e.shapeFlag&128?e.ssContent:e}function fi(e,n,t=He,r=!1){if(t){const i=t[e]||(t[e]=[]),s=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;wt(),Ct(t);const a=on(n,t,e,o);return it(),Nt(),a});return r?i.unshift(s):i.push(s),s}}const Nn=e=>(n,t=He)=>(!vr||e==="sp")&&fi(e,(...r)=>n(...r),t),lf=Nn("bm"),Ge=Nn("m"),cf=Nn("bu"),ct=Nn("u"),Bt=Nn("bum"),dt=Nn("um"),df=Nn("sp"),uf=Nn("rtg"),pf=Nn("rtc");function ff(e,n=He){fi("ec",e,n)}const Ps="components",mf="directives";function ue(e,n){return Cs(Ps,e,!0,n)||e}const Qc=Symbol.for("v-ndc");function ed(e){return Ie(e)?Cs(Ps,e,!1)||e:e||Qc}function vf(e){return Cs(mf,e)}function Cs(e,n,t=!0,r=!1){const i=Fe||He;if(i){const s=i.type;if(e===Ps){const a=zo(s,!1);if(a&&(a===n||a===Sn(n)||a===si(Sn(n))))return s}const o=ba(i[e]||s[e],n)||ba(i.appContext[e],n);return!o&&r?s:o}}function ba(e,n){return e&&(e[n]||e[Sn(n)]||e[si(Sn(n))])}function Rs(e,n,t,r){let i;const s=t&&t[r];if(re(e)||Ie(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=n(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=n(o+1,o,void 0,s&&s[o])}else if(Ce(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>n(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=n(e[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function Mo(e,n){for(let t=0;t<n.length;t++){const r=n[t];if(re(r))for(let i=0;i<r.length;i++)e[r[i].name]=r[i].fn;else r&&(e[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return e}function pe(e,n,t={},r,i){if(Fe.isCE||Fe.parent&&Et(Fe.parent)&&Fe.parent.isCE)return n!=="default"&&(t.name=n),I("slot",t,r&&r());let s=e[n];s&&s._c&&(s._d=!1),D();const o=s&&nd(s(t)),a=Ee(De,{key:t.key||o&&o.key||`_${n}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function nd(e){return e.some(n=>Pt(n)?!(n.type===sn||n.type===De&&!nd(n.children)):!0)?e:null}const Fo=e=>e?pd(e)?hi(e)||e.proxy:Fo(e.parent):null,er=Be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fo(e.parent),$root:e=>Fo(e.root),$emit:e=>e.emit,$options:e=>Ls(e),$forceUpdate:e=>e.f||(e.f=()=>ks(e.update)),$nextTick:e=>e.n||(e.n=An.bind(e.proxy)),$watch:e=>ef.bind(e)}),wi=(e,n)=>e!==Le&&!e.__isScriptSetup&&Se(e,n),gf={get({_:e},n){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if(n[0]!=="$"){const v=o[n];if(v!==void 0)switch(v){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return s[n]}else{if(wi(r,n))return o[n]=1,r[n];if(i!==Le&&Se(i,n))return o[n]=2,i[n];if((c=e.propsOptions[0])&&Se(c,n))return o[n]=3,s[n];if(t!==Le&&Se(t,n))return o[n]=4,t[n];$o&&(o[n]=0)}}const d=er[n];let u,p;if(d)return n==="$attrs"&&Ze(e,"get",n),d(e);if((u=a.__cssModules)&&(u=u[n]))return u;if(t!==Le&&Se(t,n))return o[n]=4,t[n];if(p=l.config.globalProperties,Se(p,n))return p[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:s}=e;return wi(i,n)?(i[n]=t,!0):r!==Le&&Se(r,n)?(r[n]=t,!0):Se(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(s[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||e!==Le&&Se(e,o)||wi(n,o)||(a=s[0])&&Se(a,o)||Se(r,o)||Se(er,o)||Se(i.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Se(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function ya(e){return re(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let $o=!0;function hf(e){const n=Ls(e),t=e.proxy,r=e.ctx;$o=!1,n.beforeCreate&&Sa(n.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:v,updated:T,activated:_,deactivated:R,beforeDestroy:S,beforeUnmount:b,destroyed:A,unmounted:h,render:y,renderTracked:B,renderTriggered:W,errorCaptured:N,serverPrefetch:L,expose:M,inheritAttrs:G,components:K,directives:se,filters:ge}=n;if(c&&bf(c,r,null),o)for(const he in o){const fe=o[he];ae(fe)&&(r[he]=fe.bind(t))}if(i){const he=i.call(t,t);Ce(he)&&(e.data=Qe(he))}if($o=!0,s)for(const he in s){const fe=s[he],Ke=ae(fe)?fe.bind(t,t):ae(fe.get)?fe.get.bind(t,t):pn,Je=!ae(fe)&&ae(fe.set)?fe.set.bind(t):pn,Ve=k({get:Ke,set:Je});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Me=>Ve.value=Me})}if(a)for(const he in a)td(a[he],r,t,he);if(l){const he=ae(l)?l.call(t):l;Reflect.ownKeys(he).forEach(fe=>{qn(fe,he[fe])})}d&&Sa(d,e,"c");function de(he,fe){re(fe)?fe.forEach(Ke=>he(Ke.bind(t))):fe&&he(fe.bind(t))}if(de(lf,u),de(Ge,p),de(cf,v),de(ct,T),de(sf,_),de(Yc,R),de(ff,N),de(pf,B),de(uf,W),de(Bt,b),de(dt,h),de(df,L),re(M))if(M.length){const he=e.exposed||(e.exposed={});M.forEach(fe=>{Object.defineProperty(he,fe,{get:()=>t[fe],set:Ke=>t[fe]=Ke})})}else e.exposed||(e.exposed={});y&&e.render===pn&&(e.render=y),G!=null&&(e.inheritAttrs=G),K&&(e.components=K),se&&(e.directives=se)}function bf(e,n,t=pn){re(e)&&(e=jo(e));for(const r in e){const i=e[r];let s;Ce(i)?"default"in i?s=Ne(i.from||r,i.default,!0):s=Ne(i.from||r):s=Ne(i),Ae(s)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):n[r]=s}}function Sa(e,n,t){on(re(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function td(e,n,t,r){const i=r.includes(".")?Vc(t,r):()=>t[r];if(Ie(e)){const s=n[e];ae(s)&&we(i,s)}else if(ae(e))we(i,e.bind(t));else if(Ce(e))if(re(e))e.forEach(s=>td(s,n,t,r));else{const s=ae(e.handler)?e.handler.bind(t):n[e.handler];ae(s)&&we(i,s,e)}}function Ls(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(n);let l;return a?l=a:!i.length&&!t&&!r?l=n:(l={},i.length&&i.forEach(c=>Xr(l,c,o,!0)),Xr(l,n,o)),Ce(n)&&s.set(n,l),l}function Xr(e,n,t,r=!1){const{mixins:i,extends:s}=n;s&&Xr(e,s,t,!0),i&&i.forEach(o=>Xr(e,o,t,!0));for(const o in n)if(!(r&&o==="expose")){const a=yf[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const yf={data:Ea,props:Ta,emits:Ta,methods:Zt,computed:Zt,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:Zt,directives:Zt,watch:Ef,provide:Ea,inject:Sf};function Ea(e,n){return n?e?function(){return Be(ae(e)?e.call(this,this):e,ae(n)?n.call(this,this):n)}:n:e}function Sf(e,n){return Zt(jo(e),jo(n))}function jo(e){if(re(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function qe(e,n){return e?[...new Set([].concat(e,n))]:n}function Zt(e,n){return e?Be(Object.create(null),e,n):n}function Ta(e,n){return e?re(e)&&re(n)?[...new Set([...e,...n])]:Be(Object.create(null),ya(e),ya(n??{})):n}function Ef(e,n){if(!e)return n;if(!n)return e;const t=Be(Object.create(null),e);for(const r in n)t[r]=qe(e[r],n[r]);return t}function rd(){return{app:null,config:{isNativeTag:Wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tf=0;function _f(e,n){return function(r,i=null){ae(r)||(r=Be({},r)),i!=null&&!Ce(i)&&(i=null);const s=rd(),o=new Set;let a=!1;const l=s.app={_uid:Tf++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Zf,get config(){return s.config},set config(c){},use(c,...d){return o.has(c)||(c&&ae(c.install)?(o.add(c),c.install(l,...d)):ae(c)&&(o.add(c),c(l,...d))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,d){return d?(s.components[c]=d,l):s.components[c]},directive(c,d){return d?(s.directives[c]=d,l):s.directives[c]},mount(c,d,u){if(!a){const p=I(r,i);return p.appContext=s,d&&n?n(p,c):e(p,c,u),a=!0,l._container=c,c.__vue_app__=l,hi(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return s.provides[c]=d,l},runWithContext(c){fr=l;try{return c()}finally{fr=null}}};return l}}let fr=null;function qn(e,n){if(He){let t=He.provides;const r=He.parent&&He.parent.provides;r===t&&(t=He.provides=Object.create(r)),t[e]=n}}function Ne(e,n,t=!1){const r=He||Fe;if(r||fr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&ae(n)?n.call(r&&r.proxy):n}}function kf(){return!!(He||Fe||fr)}function Of(e,n,t,r=!1){const i={},s={};Gr(s,vi,1),e.propsDefaults=Object.create(null),id(e,n,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);t?e.props=r?i:Np(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Pf(e,n,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=me(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(di(e.emitsOptions,p))continue;const v=n[p];if(l)if(Se(s,p))v!==s[p]&&(s[p]=v,c=!0);else{const T=Sn(p);i[T]=Ko(l,a,T,v,e,!1)}else v!==s[p]&&(s[p]=v,c=!0)}}}else{id(e,n,i,s)&&(c=!0);let d;for(const u in a)(!n||!Se(n,u)&&((d=At(u))===u||!Se(n,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(i[u]=Ko(l,a,u,void 0,e,!0)):delete i[u]);if(s!==a)for(const u in s)(!n||!Se(n,u))&&(delete s[u],c=!0)}c&&In(e,"set","$attrs")}function id(e,n,t,r){const[i,s]=e.propsOptions;let o=!1,a;if(n)for(let l in n){if(Mr(l))continue;const c=n[l];let d;i&&Se(i,d=Sn(l))?!s||!s.includes(d)?t[d]=c:(a||(a={}))[d]=c:di(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=me(t),c=a||Le;for(let d=0;d<s.length;d++){const u=s[d];t[u]=Ko(i,l,u,c[u],e,!Se(c,u))}}return o}function Ko(e,n,t,r,i,s){const o=e[t];if(o!=null){const a=Se(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ae(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(Ct(i),r=c[t]=l.call(null,n),it())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===At(t))&&(r=!0))}return r}function od(e,n,t=!1){const r=n.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!ae(e)){const d=u=>{l=!0;const[p,v]=od(u,n,!0);Be(o,p),v&&a.push(...v)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!l)return Ce(e)&&r.set(e,bt),bt;if(re(s))for(let d=0;d<s.length;d++){const u=Sn(s[d]);_a(u)&&(o[u]=Le)}else if(s)for(const d in s){const u=Sn(d);if(_a(u)){const p=s[d],v=o[u]=re(p)||ae(p)?{type:p}:Be({},p);if(v){const T=Pa(Boolean,v.type),_=Pa(String,v.type);v[0]=T>-1,v[1]=_<0||T<_,(T>-1||Se(v,"default"))&&a.push(u)}}}const c=[o,a];return Ce(e)&&r.set(e,c),c}function _a(e){return e[0]!=="$"}function ka(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Oa(e,n){return ka(e)===ka(n)}function Pa(e,n){return re(n)?n.findIndex(t=>Oa(t,e)):ae(n)&&Oa(n,e)?0:-1}const sd=e=>e[0]==="_"||e==="$stable",xs=e=>re(e)?e.map(bn):[bn(e)],Cf=(e,n,t)=>{if(n._n)return n;const r=q((...i)=>xs(n(...i)),t);return r._c=!1,r},ad=(e,n,t)=>{const r=e._ctx;for(const i in e){if(sd(i))continue;const s=e[i];if(ae(s))n[i]=Cf(i,s,r);else if(s!=null){const o=xs(s);n[i]=()=>o}}},ld=(e,n)=>{const t=xs(n);e.slots.default=()=>t},Rf=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=me(n),Gr(n,"_",t)):ad(n,e.slots={})}else e.slots={},n&&ld(e,n);Gr(e.slots,vi,1)},Lf=(e,n,t)=>{const{vnode:r,slots:i}=e;let s=!0,o=Le;if(r.shapeFlag&32){const a=n._;a?t&&a===1?s=!1:(Be(i,n),!t&&a===1&&delete i._):(s=!n.$stable,ad(n,i)),o=n}else n&&(ld(e,n),o={default:1});if(s)for(const a in i)!sd(a)&&!(a in o)&&delete i[a]};function Wo(e,n,t,r,i=!1){if(re(e)){e.forEach((p,v)=>Wo(p,n&&(re(n)?n[v]:n),t,r,i));return}if(Et(r)&&!i)return;const s=r.shapeFlag&4?hi(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=n&&n.r,d=a.refs===Le?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Ie(c)?(d[c]=null,Se(u,c)&&(u[c]=null)):Ae(c)&&(c.value=null)),ae(l))Vn(l,a,12,[o,d]);else{const p=Ie(l),v=Ae(l);if(p||v){const T=()=>{if(e.f){const _=p?Se(u,l)?u[l]:d[l]:l.value;i?re(_)&&ps(_,s):re(_)?_.includes(s)||_.push(s):p?(d[l]=[s],Se(u,l)&&(u[l]=d[l])):(l.value=[s],e.k&&(d[e.k]=l.value))}else p?(d[l]=o,Se(u,l)&&(u[l]=o)):v&&(l.value=o,e.k&&(d[e.k]=o))};o?(T.id=-1,$e(T,t)):T()}}}const $e=Qp;function xf(e){return If(e)}function If(e,n){const t=Ao();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:v=pn,insertStaticContent:T}=e,_=(f,m,g,E=null,P=null,x=null,U=!1,H=null,F=!!m.dynamicChildren)=>{if(f===m)return;f&&!Wn(f,m)&&(E=O(f),Me(f,P,x,!0),f=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:w,ref:Q,shapeFlag:J}=m;switch(w){case mi:R(f,m,g,E);break;case sn:S(f,m,g,E);break;case Ni:f==null&&b(m,g,E,U);break;case De:K(f,m,g,E,P,x,U,H,F);break;default:J&1?y(f,m,g,E,P,x,U,H,F):J&6?se(f,m,g,E,P,x,U,H,F):(J&64||J&128)&&w.process(f,m,g,E,P,x,U,H,F,$)}Q!=null&&P&&Wo(Q,f&&f.ref,x,m||f,!m)},R=(f,m,g,E)=>{if(f==null)r(m.el=a(m.children),g,E);else{const P=m.el=f.el;m.children!==f.children&&c(P,m.children)}},S=(f,m,g,E)=>{f==null?r(m.el=l(m.children||""),g,E):m.el=f.el},b=(f,m,g,E)=>{[f.el,f.anchor]=T(f.children,m,g,E,f.el,f.anchor)},A=({el:f,anchor:m},g,E)=>{let P;for(;f&&f!==m;)P=p(f),r(f,g,E),f=P;r(m,g,E)},h=({el:f,anchor:m})=>{let g;for(;f&&f!==m;)g=p(f),i(f),f=g;i(m)},y=(f,m,g,E,P,x,U,H,F)=>{U=U||m.type==="svg",f==null?B(m,g,E,P,x,U,H,F):L(f,m,P,x,U,H,F)},B=(f,m,g,E,P,x,U,H)=>{let F,w;const{type:Q,props:J,shapeFlag:ee,transition:C,dirs:j}=f;if(F=f.el=o(f.type,x,J&&J.is,J),ee&8?d(F,f.children):ee&16&&N(f.children,F,null,E,P,x&&Q!=="foreignObject",U,H),j&&Zn(f,null,E,"created"),W(F,f,f.scopeId,U,E),J){for(const ye in J)ye!=="value"&&!Mr(ye)&&s(F,ye,null,J[ye],x,f.children,E,P,xe);"value"in J&&s(F,"value",null,J.value),(w=J.onVnodeBeforeMount)&&tn(w,E,f)}j&&Zn(f,null,E,"beforeMount");const ce=(!P||P&&!P.pendingBranch)&&C&&!C.persisted;ce&&C.beforeEnter(F),r(F,m,g),((w=J&&J.onVnodeMounted)||ce||j)&&$e(()=>{w&&tn(w,E,f),ce&&C.enter(F),j&&Zn(f,null,E,"mounted")},P)},W=(f,m,g,E,P)=>{if(g&&v(f,g),E)for(let x=0;x<E.length;x++)v(f,E[x]);if(P){let x=P.subTree;if(m===x){const U=P.vnode;W(f,U,U.scopeId,U.slotScopeIds,P.parent)}}},N=(f,m,g,E,P,x,U,H,F=0)=>{for(let w=F;w<f.length;w++){const Q=f[w]=H?jn(f[w]):bn(f[w]);_(null,Q,m,g,E,P,x,U,H)}},L=(f,m,g,E,P,x,U)=>{const H=m.el=f.el;let{patchFlag:F,dynamicChildren:w,dirs:Q}=m;F|=f.patchFlag&16;const J=f.props||Le,ee=m.props||Le;let C;g&&Yn(g,!1),(C=ee.onVnodeBeforeUpdate)&&tn(C,g,m,f),Q&&Zn(m,f,g,"beforeUpdate"),g&&Yn(g,!0);const j=P&&m.type!=="foreignObject";if(w?M(f.dynamicChildren,w,H,g,E,j,x):U||fe(f,m,H,null,g,E,j,x,!1),F>0){if(F&16)G(H,m,J,ee,g,E,P);else if(F&2&&J.class!==ee.class&&s(H,"class",null,ee.class,P),F&4&&s(H,"style",J.style,ee.style,P),F&8){const ce=m.dynamicProps;for(let ye=0;ye<ce.length;ye++){const Oe=ce[ye],We=J[Oe],ft=ee[Oe];(ft!==We||Oe==="value")&&s(H,Oe,We,ft,P,f.children,g,E,xe)}}F&1&&f.children!==m.children&&d(H,m.children)}else!U&&w==null&&G(H,m,J,ee,g,E,P);((C=ee.onVnodeUpdated)||Q)&&$e(()=>{C&&tn(C,g,m,f),Q&&Zn(m,f,g,"updated")},E)},M=(f,m,g,E,P,x,U)=>{for(let H=0;H<m.length;H++){const F=f[H],w=m[H],Q=F.el&&(F.type===De||!Wn(F,w)||F.shapeFlag&70)?u(F.el):g;_(F,w,Q,null,E,P,x,U,!0)}},G=(f,m,g,E,P,x,U)=>{if(g!==E){if(g!==Le)for(const H in g)!Mr(H)&&!(H in E)&&s(f,H,g[H],null,U,m.children,P,x,xe);for(const H in E){if(Mr(H))continue;const F=E[H],w=g[H];F!==w&&H!=="value"&&s(f,H,w,F,U,m.children,P,x,xe)}"value"in E&&s(f,"value",g.value,E.value)}},K=(f,m,g,E,P,x,U,H,F)=>{const w=m.el=f?f.el:a(""),Q=m.anchor=f?f.anchor:a("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:C}=m;C&&(H=H?H.concat(C):C),f==null?(r(w,g,E),r(Q,g,E),N(m.children,g,Q,P,x,U,H,F)):J>0&&J&64&&ee&&f.dynamicChildren?(M(f.dynamicChildren,ee,g,P,x,U,H),(m.key!=null||P&&m===P.subTree)&&Is(f,m,!0)):fe(f,m,g,Q,P,x,U,H,F)},se=(f,m,g,E,P,x,U,H,F)=>{m.slotScopeIds=H,f==null?m.shapeFlag&512?P.ctx.activate(m,g,E,U,F):ge(m,g,E,P,x,U,F):Te(f,m,F)},ge=(f,m,g,E,P,x,U)=>{const H=f.component=Kf(f,E,P);if(pi(f)&&(H.ctx.renderer=$),Wf(H),H.asyncDep){if(P&&P.registerDep(H,de),!f.el){const F=H.subTree=I(sn);S(null,F,m,g)}return}de(H,f,m,g,P,x,U)},Te=(f,m,g)=>{const E=m.component=f.component;if(Yp(f,m,g))if(E.asyncDep&&!E.asyncResolved){he(E,m,g);return}else E.next=m,Wp(E.update),E.update();else m.el=f.el,E.vnode=m},de=(f,m,g,E,P,x,U)=>{const H=()=>{if(f.isMounted){let{next:Q,bu:J,u:ee,parent:C,vnode:j}=f,ce=Q,ye;Yn(f,!1),Q?(Q.el=j.el,he(f,Q,U)):Q=j,J&&Qt(J),(ye=Q.props&&Q.props.onVnodeBeforeUpdate)&&tn(ye,C,Q,j),Yn(f,!0);const Oe=Li(f),We=f.subTree;f.subTree=Oe,_(We,Oe,u(We.el),O(We),f,P,x),Q.el=Oe.el,ce===null&&Xp(f,Oe.el),ee&&$e(ee,P),(ye=Q.props&&Q.props.onVnodeUpdated)&&$e(()=>tn(ye,C,Q,j),P)}else{let Q;const{el:J,props:ee}=m,{bm:C,m:j,parent:ce}=f,ye=Et(m);if(Yn(f,!1),C&&Qt(C),!ye&&(Q=ee&&ee.onVnodeBeforeMount)&&tn(Q,ce,m),Yn(f,!0),J&&be){const Oe=()=>{f.subTree=Li(f),be(J,f.subTree,f,P,null)};ye?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Oe()):Oe()}else{const Oe=f.subTree=Li(f);_(null,Oe,g,E,f,P,x),m.el=Oe.el}if(j&&$e(j,P),!ye&&(Q=ee&&ee.onVnodeMounted)){const Oe=m;$e(()=>tn(Q,ce,Oe),P)}(m.shapeFlag&256||ce&&Et(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&$e(f.a,P),f.isMounted=!0,m=g=E=null}},F=f.effect=new gs(H,()=>ks(w),f.scope),w=f.update=()=>F.run();w.id=f.uid,Yn(f,!0),w()},he=(f,m,g)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,Pf(f,m.props,E,g),Lf(f,m.children,g),wt(),va(),Nt()},fe=(f,m,g,E,P,x,U,H,F=!1)=>{const w=f&&f.children,Q=f?f.shapeFlag:0,J=m.children,{patchFlag:ee,shapeFlag:C}=m;if(ee>0){if(ee&128){Je(w,J,g,E,P,x,U,H,F);return}else if(ee&256){Ke(w,J,g,E,P,x,U,H,F);return}}C&8?(Q&16&&xe(w,P,x),J!==w&&d(g,J)):Q&16?C&16?Je(w,J,g,E,P,x,U,H,F):xe(w,P,x,!0):(Q&8&&d(g,""),C&16&&N(J,g,E,P,x,U,H,F))},Ke=(f,m,g,E,P,x,U,H,F)=>{f=f||bt,m=m||bt;const w=f.length,Q=m.length,J=Math.min(w,Q);let ee;for(ee=0;ee<J;ee++){const C=m[ee]=F?jn(m[ee]):bn(m[ee]);_(f[ee],C,g,null,P,x,U,H,F)}w>Q?xe(f,P,x,!0,!1,J):N(m,g,E,P,x,U,H,F,J)},Je=(f,m,g,E,P,x,U,H,F)=>{let w=0;const Q=m.length;let J=f.length-1,ee=Q-1;for(;w<=J&&w<=ee;){const C=f[w],j=m[w]=F?jn(m[w]):bn(m[w]);if(Wn(C,j))_(C,j,g,null,P,x,U,H,F);else break;w++}for(;w<=J&&w<=ee;){const C=f[J],j=m[ee]=F?jn(m[ee]):bn(m[ee]);if(Wn(C,j))_(C,j,g,null,P,x,U,H,F);else break;J--,ee--}if(w>J){if(w<=ee){const C=ee+1,j=C<Q?m[C].el:E;for(;w<=ee;)_(null,m[w]=F?jn(m[w]):bn(m[w]),g,j,P,x,U,H,F),w++}}else if(w>ee)for(;w<=J;)Me(f[w],P,x,!0),w++;else{const C=w,j=w,ce=new Map;for(w=j;w<=ee;w++){const Ye=m[w]=F?jn(m[w]):bn(m[w]);Ye.key!=null&&ce.set(Ye.key,w)}let ye,Oe=0;const We=ee-j+1;let ft=!1,ia=0;const Wt=new Array(We);for(w=0;w<We;w++)Wt[w]=0;for(w=C;w<=J;w++){const Ye=f[w];if(Oe>=We){Me(Ye,P,x,!0);continue}let hn;if(Ye.key!=null)hn=ce.get(Ye.key);else for(ye=j;ye<=ee;ye++)if(Wt[ye-j]===0&&Wn(Ye,m[ye])){hn=ye;break}hn===void 0?Me(Ye,P,x,!0):(Wt[hn-j]=w+1,hn>=ia?ia=hn:ft=!0,_(Ye,m[hn],g,null,P,x,U,H,F),Oe++)}const oa=ft?Af(Wt):bt;for(ye=oa.length-1,w=We-1;w>=0;w--){const Ye=j+w,hn=m[Ye],sa=Ye+1<Q?m[Ye+1].el:E;Wt[w]===0?_(null,hn,g,sa,P,x,U,H,F):ft&&(ye<0||w!==oa[ye]?Ve(hn,g,sa,2):ye--)}}},Ve=(f,m,g,E,P=null)=>{const{el:x,type:U,transition:H,children:F,shapeFlag:w}=f;if(w&6){Ve(f.component.subTree,m,g,E);return}if(w&128){f.suspense.move(m,g,E);return}if(w&64){U.move(f,m,g,$);return}if(U===De){r(x,m,g);for(let J=0;J<F.length;J++)Ve(F[J],m,g,E);r(f.anchor,m,g);return}if(U===Ni){A(f,m,g);return}if(E!==2&&w&1&&H)if(E===0)H.beforeEnter(x),r(x,m,g),$e(()=>H.enter(x),P);else{const{leave:J,delayLeave:ee,afterLeave:C}=H,j=()=>r(x,m,g),ce=()=>{J(x,()=>{j(),C&&C()})};ee?ee(x,j,ce):ce()}else r(x,m,g)},Me=(f,m,g,E=!1,P=!1)=>{const{type:x,props:U,ref:H,children:F,dynamicChildren:w,shapeFlag:Q,patchFlag:J,dirs:ee}=f;if(H!=null&&Wo(H,null,g,f,!0),Q&256){m.ctx.deactivate(f);return}const C=Q&1&&ee,j=!Et(f);let ce;if(j&&(ce=U&&U.onVnodeBeforeUnmount)&&tn(ce,m,f),Q&6)Jn(f.component,g,E);else{if(Q&128){f.suspense.unmount(g,E);return}C&&Zn(f,null,m,"beforeUnmount"),Q&64?f.type.remove(f,m,g,P,$,E):w&&(x!==De||J>0&&J&64)?xe(w,m,g,!1,!0):(x===De&&J&384||!P&&Q&16)&&xe(F,m,g),E&&ln(f)}(j&&(ce=U&&U.onVnodeUnmounted)||C)&&$e(()=>{ce&&tn(ce,m,f),C&&Zn(f,null,m,"unmounted")},g)},ln=f=>{const{type:m,el:g,anchor:E,transition:P}=f;if(m===De){gn(g,E);return}if(m===Ni){h(f);return}const x=()=>{i(g),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(f.shapeFlag&1&&P&&!P.persisted){const{leave:U,delayLeave:H}=P,F=()=>U(g,x);H?H(f.el,x,F):F()}else x()},gn=(f,m)=>{let g;for(;f!==m;)g=p(f),i(f),f=g;i(m)},Jn=(f,m,g)=>{const{bum:E,scope:P,update:x,subTree:U,um:H}=f;E&&Qt(E),P.stop(),x&&(x.active=!1,Me(U,f,m,g)),H&&$e(H,m),$e(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},xe=(f,m,g,E=!1,P=!1,x=0)=>{for(let U=x;U<f.length;U++)Me(f[U],m,g,E,P)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),z=(f,m,g)=>{f==null?m._vnode&&Me(m._vnode,null,null,!0):_(m._vnode||null,f,m,null,null,null,g),va(),jc(),m._vnode=f},$={p:_,um:Me,m:Ve,r:ln,mt:ge,mc:N,pc:fe,pbc:M,n:O,o:e};let Y,be;return n&&([Y,be]=n($)),{render:z,hydrate:Y,createApp:_f(z,Y)}}function Yn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Is(e,n,t=!1){const r=e.children,i=n.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=jn(i[s]),a.el=o.el),t||Is(o,a)),a.type===mi&&(a.el=o.el)}}function Af(e){const n=e.slice(),t=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=t[t.length-1],e[i]<c){n[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,e[t[a]]<c?s=a+1:o=a;c<e[t[s]]&&(s>0&&(n[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=n[o];return t}const wf=e=>e.__isTeleport,nr=e=>e&&(e.disabled||e.disabled===""),Ca=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Uo=(e,n)=>{const t=e&&e.to;return Ie(t)?n?n(t):null:t},Nf={__isTeleport:!0,process(e,n,t,r,i,s,o,a,l,c){const{mc:d,pc:u,pbc:p,o:{insert:v,querySelector:T,createText:_,createComment:R}}=c,S=nr(n.props);let{shapeFlag:b,children:A,dynamicChildren:h}=n;if(e==null){const y=n.el=_(""),B=n.anchor=_("");v(y,t,r),v(B,t,r);const W=n.target=Uo(n.props,T),N=n.targetAnchor=_("");W&&(v(N,W),o=o||Ca(W));const L=(M,G)=>{b&16&&d(A,M,G,i,s,o,a,l)};S?L(t,B):W&&L(W,N)}else{n.el=e.el;const y=n.anchor=e.anchor,B=n.target=e.target,W=n.targetAnchor=e.targetAnchor,N=nr(e.props),L=N?t:B,M=N?y:W;if(o=o||Ca(B),h?(p(e.dynamicChildren,h,L,i,s,o,a),Is(e,n,!0)):l||u(e,n,L,M,i,s,o,a,!1),S)N||wr(n,t,y,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const G=n.target=Uo(n.props,T);G&&wr(n,G,null,c,0)}else N&&wr(n,B,W,c,1)}cd(n)},remove(e,n,t,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:d,target:u,props:p}=e;if(u&&s(d),(o||!nr(p))&&(s(c),a&16))for(let v=0;v<l.length;v++){const T=l[v];i(T,n,t,!0,!!T.dynamicChildren)}},move:wr,hydrate:Bf};function wr(e,n,t,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,n,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:d}=e,u=s===2;if(u&&r(o,n,t),(!u||nr(d))&&l&16)for(let p=0;p<c.length;p++)i(c[p],n,t,2);u&&r(a,n,t)}function Bf(e,n,t,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const d=n.target=Uo(n.props,l);if(d){const u=d._lpa||d.firstChild;if(n.shapeFlag&16)if(nr(n.props))n.anchor=c(o(e),n,a(e),t,r,i,s),n.targetAnchor=u;else{n.anchor=o(e);let p=u;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){n.targetAnchor=p,d._lpa=n.targetAnchor&&o(n.targetAnchor);break}c(u,n,d,t,r,i,s)}cd(n)}return n.anchor&&o(n.anchor)}const Df=Nf;function cd(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const De=Symbol.for("v-fgt"),mi=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),Ni=Symbol.for("v-stc"),tr=[];let un=null;function D(e=!1){tr.push(un=e?null:[])}function Hf(){tr.pop(),un=tr[tr.length-1]||null}let mr=1;function Ra(e){mr+=e}function dd(e){return e.dynamicChildren=mr>0?un||bt:null,Hf(),mr>0&&un&&un.push(e),e}function X(e,n,t,r,i,s){return dd(ne(e,n,t,r,i,s,!0))}function Ee(e,n,t,r,i){return dd(I(e,n,t,r,i,!0))}function Pt(e){return e?e.__v_isVNode===!0:!1}function Wn(e,n){return e.type===n.type&&e.key===n.key}const vi="__vInternal",ud=({key:e})=>e??null,Fr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Ie(e)||Ae(e)||ae(e)?{i:Fe,r:e,k:n,f:!!t}:e:null);function ne(e,n=null,t=null,r=0,i=null,s=e===De?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ud(n),ref:n&&Fr(n),scopeId:ui,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return a?(As(l,t),s&128&&e.normalize(l)):t&&(l.shapeFlag|=Ie(t)?8:16),mr>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const I=Mf;function Mf(e,n=null,t=null,r=0,i=null,s=!1){if((!e||e===Qc)&&(e=sn),Pt(e)){const a=fn(e,n,!0);return t&&As(a,t),mr>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(e)]=a:un.push(a)),a.patchFlag|=-2,a}if(qf(e)&&(e=e.__vccOpts),n){n=Ff(n);let{class:a,style:l}=n;a&&!Ie(a)&&(n.class=V(a)),Ce(l)&&(wc(l)&&!re(l)&&(l=Be({},l)),n.style=ve(l))}const o=Ie(e)?1:Uc(e)?128:wf(e)?64:Ce(e)?4:ae(e)?2:0;return ne(e,n,t,r,i,o,s,!0)}function Ff(e){return e?wc(e)||vi in e?Be({},e):e:null}function fn(e,n,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=n?Dt(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ud(a),ref:n&&n.ref?t&&i?re(i)?i.concat(Fr(n)):[i,Fr(n)]:Fr(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==De?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ze(e=" ",n=0){return I(mi,null,e,n)}function je(e="",n=!1){return n?(D(),Ee(sn,null,e)):I(sn,null,e)}function bn(e){return e==null||typeof e=="boolean"?I(sn):re(e)?I(De,null,e.slice()):typeof e=="object"?jn(e):I(mi,null,String(e))}function jn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fn(e)}function As(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(re(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),As(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!(vi in n)?n._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ae(n)?(n={default:n,_ctx:Fe},t=32):(n=String(n),r&64?(t=16,n=[ze(n)]):t=8);e.children=n,e.shapeFlag|=t}function Dt(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=V([n.class,r.class]));else if(i==="style")n.style=ve([n.style,r.style]);else if(ii(i)){const s=n[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(n[i]=s?[].concat(s,o):o)}else i!==""&&(n[i]=r[i])}return n}function tn(e,n,t,r=null){on(e,n,7,[t,r])}const $f=rd();let jf=0;function Kf(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||$f,s={uid:jf++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:od(r,i),emitsOptions:Wc(r,i),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Vp.bind(null,s),e.ce&&e.ce(s),s}let He=null;const gi=()=>He||Fe;let ws,mt,La="__VUE_INSTANCE_SETTERS__";(mt=Ao()[La])||(mt=Ao()[La]=[]),mt.push(e=>He=e),ws=e=>{mt.length>1?mt.forEach(n=>n(e)):mt[0](e)};const Ct=e=>{ws(e),e.scope.on()},it=()=>{He&&He.scope.off(),ws(null)};function pd(e){return e.vnode.shapeFlag&4}let vr=!1;function Wf(e,n=!1){vr=n;const{props:t,children:r}=e.vnode,i=pd(e);Of(e,t,i,n),Rf(e,r);const s=i?Uf(e,n):void 0;return vr=!1,s}function Uf(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=li(new Proxy(e.ctx,gf));const{setup:r}=t;if(r){const i=e.setupContext=r.length>1?Vf(e):null;Ct(e),wt();const s=Vn(r,e,0,[e.props,i]);if(Nt(),it(),vc(s)){if(s.then(it,it),n)return s.then(o=>{xa(e,o,n)}).catch(o=>{ci(o,e,0)});e.asyncDep=s}else xa(e,s,n)}else fd(e,n)}function xa(e,n,t){ae(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ce(n)&&(e.setupState=Hc(n)),fd(e,t)}let Ia;function fd(e,n,t){const r=e.type;if(!e.render){if(!n&&Ia&&!r.render){const i=r.template||Ls(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Be(Be({isCustomElement:s,delimiters:a},o),l);r.render=Ia(i,c)}}e.render=r.render||pn}Ct(e),wt(),hf(e),Nt(),it()}function zf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return Ze(e,"get","$attrs"),n[t]}}))}function Vf(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return zf(e)},slots:e.slots,emit:e.emit,expose:n}}function hi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hc(li(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in er)return er[t](e)},has(n,t){return t in n||t in er}}))}function zo(e,n=!0){return ae(e)?e.displayName||e.name:e.name||n&&e.__name}function qf(e){return ae(e)&&"__vccOpts"in e}const k=(e,n)=>jp(e,n,vr);function gr(e,n,t){const r=arguments.length;return r===2?Ce(n)&&!re(n)?Pt(n)?I(e,null,[n]):I(e,n):I(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Pt(t)&&(t=[t]),I(e,n,t))}const Gf=Symbol.for("v-scx"),Jf=()=>Ne(Gf),Zf="3.3.4",Yf="http://www.w3.org/2000/svg",nt=typeof document<"u"?document:null,Aa=nt&&nt.createElement("template"),Xf={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n?nt.createElementNS(Yf,e):nt.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,s){const o=t?t.previousSibling:n.lastChild;if(i&&(i===s||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Aa.innerHTML=r?`<svg>${e}</svg>`:e;const a=Aa.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Qf(e,n,t){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function em(e,n,t){const r=e.style,i=Ie(t);if(t&&!i){if(n&&!Ie(n))for(const s in n)t[s]==null&&Vo(r,s,"");for(const s in t)Vo(r,s,t[s])}else{const s=r.display;i?n!==t&&(r.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const wa=/\s*!important$/;function Vo(e,n,t){if(re(t))t.forEach(r=>Vo(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=nm(e,n);wa.test(t)?e.setProperty(At(r),t.replace(wa,""),"important"):e[r]=t}}const Na=["Webkit","Moz","ms"],Bi={};function nm(e,n){const t=Bi[n];if(t)return t;let r=Sn(n);if(r!=="filter"&&r in e)return Bi[n]=r;r=si(r);for(let i=0;i<Na.length;i++){const s=Na[i]+r;if(s in e)return Bi[n]=s}return n}const Ba="http://www.w3.org/1999/xlink";function tm(e,n,t,r,i){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Ba,n.slice(6,n.length)):e.setAttributeNS(Ba,n,t);else{const s=ip(n);t==null||s&&!bc(t)?e.removeAttribute(n):e.setAttribute(n,s?"":t)}}function rm(e,n,t,r,i,s,o){if(n==="innerHTML"||n==="textContent"){r&&o(r,i,s),e[n]=t??"";return}const a=e.tagName;if(n==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=t;const c=a==="OPTION"?e.getAttribute("value"):e.value,d=t??"";c!==d&&(e.value=d),t==null&&e.removeAttribute(n);return}let l=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=bc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(n)}function im(e,n,t,r){e.addEventListener(n,t,r)}function om(e,n,t,r){e.removeEventListener(n,t,r)}function sm(e,n,t,r,i=null){const s=e._vei||(e._vei={}),o=s[n];if(r&&o)o.value=r;else{const[a,l]=am(n);if(r){const c=s[n]=dm(r,i);im(e,a,c,l)}else o&&(om(e,a,o,l),s[n]=void 0)}}const Da=/(?:Once|Passive|Capture)$/;function am(e){let n;if(Da.test(e)){n={};let r;for(;r=e.match(Da);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):At(e.slice(2)),n]}let Di=0;const lm=Promise.resolve(),cm=()=>Di||(lm.then(()=>Di=0),Di=Date.now());function dm(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;on(um(r,t.value),n,5,[r])};return t.value=e,t.attached=cm(),t}function um(e,n){if(re(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const Ha=/^on[a-z]/,pm=(e,n,t,r,i=!1,s,o,a,l)=>{n==="class"?Qf(e,r,i):n==="style"?em(e,t,r):ii(n)?us(n)||sm(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):fm(e,n,r,i))?rm(e,n,r,s,o,a,l):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),tm(e,n,r,i))};function fm(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&Ha.test(n)&&ae(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Ha.test(n)&&Ie(t)?!1:n in e}const Hn="transition",Ut="animation",Er=(e,{slots:n})=>gr(tf,vd(e),n);Er.displayName="Transition";const md={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mm=Er.props=Be({},Jc,md),Xn=(e,n=[])=>{re(e)?e.forEach(t=>t(...n)):e&&e(...n)},Ma=e=>e?re(e)?e.some(n=>n.length>1):e.length>1:!1;function vd(e){const n={};for(const K in e)K in md||(n[K]=e[K]);if(e.css===!1)return n;const{name:t="v",type:r,duration:i,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:d=a,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:v=`${t}-leave-to`}=e,T=vm(i),_=T&&T[0],R=T&&T[1],{onBeforeEnter:S,onEnter:b,onEnterCancelled:A,onLeave:h,onLeaveCancelled:y,onBeforeAppear:B=S,onAppear:W=b,onAppearCancelled:N=A}=n,L=(K,se,ge)=>{Fn(K,se?d:a),Fn(K,se?c:o),ge&&ge()},M=(K,se)=>{K._isLeaving=!1,Fn(K,u),Fn(K,v),Fn(K,p),se&&se()},G=K=>(se,ge)=>{const Te=K?W:b,de=()=>L(se,K,ge);Xn(Te,[se,de]),Fa(()=>{Fn(se,K?l:s),On(se,K?d:a),Ma(Te)||$a(se,r,_,de)})};return Be(n,{onBeforeEnter(K){Xn(S,[K]),On(K,s),On(K,o)},onBeforeAppear(K){Xn(B,[K]),On(K,l),On(K,c)},onEnter:G(!1),onAppear:G(!0),onLeave(K,se){K._isLeaving=!0;const ge=()=>M(K,se);On(K,u),hd(),On(K,p),Fa(()=>{K._isLeaving&&(Fn(K,u),On(K,v),Ma(h)||$a(K,r,R,ge))}),Xn(h,[K,ge])},onEnterCancelled(K){L(K,!1),Xn(A,[K])},onAppearCancelled(K){L(K,!0),Xn(N,[K])},onLeaveCancelled(K){M(K),Xn(y,[K])}})}function vm(e){if(e==null)return null;if(Ce(e))return[Hi(e.enter),Hi(e.leave)];{const n=Hi(e);return[n,n]}}function Hi(e){return Yu(e)}function On(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function Fn(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function Fa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gm=0;function $a(e,n,t,r){const i=e._endId=++gm,s=()=>{i===e._endId&&r()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=gd(e,n);if(!o)return r();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),s()},p=v=>{v.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},a+1),e.addEventListener(c,p)}function gd(e,n){const t=window.getComputedStyle(e),r=T=>(t[T]||"").split(", "),i=r(`${Hn}Delay`),s=r(`${Hn}Duration`),o=ja(i,s),a=r(`${Ut}Delay`),l=r(`${Ut}Duration`),c=ja(a,l);let d=null,u=0,p=0;n===Hn?o>0&&(d=Hn,u=o,p=s.length):n===Ut?c>0&&(d=Ut,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?Hn:Ut:null,p=d?d===Hn?s.length:l.length:0);const v=d===Hn&&/\b(transform|all)(,|$)/.test(r(`${Hn}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:v}}function ja(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>Ka(t)+Ka(e[r])))}function Ka(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function hd(){return document.body.offsetHeight}const bd=new WeakMap,yd=new WeakMap,Sd={name:"TransitionGroup",props:Be({},mm,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=gi(),r=Gc();let i,s;return ct(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Em(i[0].el,t.vnode.el,o))return;i.forEach(bm),i.forEach(ym);const a=i.filter(Sm);hd(),a.forEach(l=>{const c=l.el,d=c.style;On(c,o),d.transform=d.webkitTransform=d.transitionDuration="";const u=c._moveCb=p=>{p&&p.target!==c||(!p||/transform$/.test(p.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,Fn(c,o))};c.addEventListener("transitionend",u)})}),()=>{const o=me(e),a=vd(o);let l=o.tag||De;i=s,s=n.default?Os(n.default()):[];for(let c=0;c<s.length;c++){const d=s[c];d.key!=null&&Ot(d,pr(d,a,r,t))}if(i)for(let c=0;c<i.length;c++){const d=i[c];Ot(d,pr(d,a,r,t)),bd.set(d,d.el.getBoundingClientRect())}return I(l,null,s)}}},hm=e=>delete e.mode;Sd.props;const Ed=Sd;function bm(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function ym(e){yd.set(e,e.el.getBoundingClientRect())}function Sm(e){const n=bd.get(e),t=yd.get(e),r=n.left-t.left,i=n.top-t.top;if(r||i){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",e}}function Em(e,n,t){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(r);const{hasTransform:s}=gd(r);return i.removeChild(r),s}const Tm=["ctrl","shift","alt","meta"],_m={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Tm.some(t=>e[`${t}Key`]&&!n.includes(t))},Td=(e,n)=>(t,...r)=>{for(let i=0;i<n.length;i++){const s=_m[n[i]];if(s&&s(t,n))return}return e(t,...r)},km={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):zt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),zt(e,!0),r.enter(e)):r.leave(e,()=>{zt(e,!1)}):zt(e,n))},beforeUnmount(e,{value:n}){zt(e,n)}};function zt(e,n){e.style.display=n?e._vod:"none"}const Om=Be({patchProp:pm},Xf);let Wa;function _d(){return Wa||(Wa=xf(Om))}const Ua=(...e)=>{_d().render(...e)},Pm=(...e)=>{const n=_d().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=Cm(r);if(!i)return;const s=n._component;!ae(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},n};function Cm(e){return Ie(e)?document.querySelector(e):e}var Rm=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let kd;const bi=e=>kd=e,Od=Symbol();function qo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var rr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(rr||(rr={}));function Lm(){const e=Ec(!0),n=e.run(()=>te({}));let t=[],r=[];const i=li({install(s){bi(i),i._a=s,s.provide(Od,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!Rm?r.push(s):t.push(s),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return i}const Pd=()=>{};function za(e,n,t,r=Pd){e.push(n);const i=()=>{const s=e.indexOf(n);s>-1&&(e.splice(s,1),r())};return!t&&Tc()&&sp(i),i}function vt(e,...n){e.slice().forEach(t=>{t(...n)})}const xm=e=>e();function Go(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,r)=>e.set(r,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],i=e[t];qo(i)&&qo(r)&&e.hasOwnProperty(t)&&!Ae(r)&&!zn(r)?e[t]=Go(i,r):e[t]=r}return e}const Im=Symbol();function Am(e){return!qo(e)||!e.hasOwnProperty(Im)}const{assign:$n}=Object;function wm(e){return!!(Ae(e)&&e.effect)}function Nm(e,n,t,r){const{state:i,actions:s,getters:o}=n,a=t.state.value[e];let l;function c(){a||(t.state.value[e]=i?i():{});const d=en(t.state.value[e]);return $n(d,s,Object.keys(o||{}).reduce((u,p)=>(u[p]=li(k(()=>{bi(t);const v=t._s.get(e);return o[p].call(v,v)})),u),{}))}return l=Cd(e,c,n,t,r,!0),l}function Cd(e,n,t={},r,i,s){let o;const a=$n({actions:{}},t),l={deep:!0};let c,d,u=[],p=[],v;const T=r.state.value[e];!s&&!T&&(r.state.value[e]={}),te({});let _;function R(N){let L;c=d=!1,typeof N=="function"?(N(r.state.value[e]),L={type:rr.patchFunction,storeId:e,events:v}):(Go(r.state.value[e],N),L={type:rr.patchObject,payload:N,storeId:e,events:v});const M=_=Symbol();An().then(()=>{_===M&&(c=!0)}),d=!0,vt(u,L,r.state.value[e])}const S=s?function(){const{state:L}=t,M=L?L():{};this.$patch(G=>{$n(G,M)})}:Pd;function b(){o.stop(),u=[],p=[],r._s.delete(e)}function A(N,L){return function(){bi(r);const M=Array.from(arguments),G=[],K=[];function se(de){G.push(de)}function ge(de){K.push(de)}vt(p,{args:M,name:N,store:y,after:se,onError:ge});let Te;try{Te=L.apply(this&&this.$id===e?this:y,M)}catch(de){throw vt(K,de),de}return Te instanceof Promise?Te.then(de=>(vt(G,de),de)).catch(de=>(vt(K,de),Promise.reject(de))):(vt(G,Te),Te)}}const h={_p:r,$id:e,$onAction:za.bind(null,p),$patch:R,$reset:S,$subscribe(N,L={}){const M=za(u,N,L.detached,()=>G()),G=o.run(()=>we(()=>r.state.value[e],K=>{(L.flush==="sync"?d:c)&&N({storeId:e,type:rr.direct,events:v},K)},$n({},l,L)));return M},$dispose:b},y=Qe(h);r._s.set(e,y);const B=r._a&&r._a.runWithContext||xm,W=r._e.run(()=>(o=Ec(),B(()=>o.run(n))));for(const N in W){const L=W[N];if(Ae(L)&&!wm(L)||zn(L))s||(T&&Am(L)&&(Ae(L)?L.value=T[N]:Go(L,T[N])),r.state.value[e][N]=L);else if(typeof L=="function"){const M=A(N,L);W[N]=M,a.actions[N]=L}}return $n(y,W),$n(me(y),W),Object.defineProperty(y,"$state",{get:()=>r.state.value[e],set:N=>{R(L=>{$n(L,N)})}}),r._p.forEach(N=>{$n(y,o.run(()=>N({store:y,app:r._a,pinia:r,options:a})))}),T&&s&&t.hydrate&&t.hydrate(y.$state,T),c=!0,d=!0,y}function Ns(e,n,t){let r,i;const s=typeof n=="function";typeof e=="string"?(r=e,i=s?t:n):(i=e,r=e.id);function o(a,l){const c=kf();return a=a||(c?Ne(Od,null):null),a&&bi(a),a=kd,a._s.has(r)||(s?Cd(r,n,i,a):Nm(r,i,a)),a._s.get(r)}return o.$id=r,o}function Cn(e,n){const t=JSON.stringify(n);if(an)return utools.dbStorage.setItem(e,t);localStorage.setItem(e,t)}function Rn(e){if(an){const n=utools.dbStorage.getItem(e);return n?JSON.parse(n):null}else{const n=localStorage.getItem(e);return n?JSON.parse(n):null}}function gt(e){(an?utools.dbStorage:localStorage).removeItem(e)}function Va(e){if(an)return utools.db.allDocs(e).map(n=>({...n,data:n.data||n.value}));{const n=[];for(let t=0;t<localStorage.length;t++){if(e){const r=localStorage.key(t);r&&r.includes(e)&&n.push({_id:r,data:Rn(r)});continue}n.push({_id:localStorage.key(t),data:Rn(localStorage.key(t))})}return n}}function Jo(e){return e===null?"Null":e===void 0?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}function Zo(e){const n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate(),s=n.getHours(),o=n.getMinutes(),a=n.getSeconds(),l=c=>{const d=c.toString();return d[1]?d:"0"+d};return`${t}年${l(r)}月${l(i)}日 ${l(s)}:${l(o)}:${l(a)}`}function Bm(e){try{if(navigator.clipboard)navigator.clipboard.writeText(e);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=e,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}return!0}catch{return!1}}function Dm(e){let n="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=t.length;for(let i=0;i<e;i++)n+=t.charAt(Math.floor(Math.random()*r));return n}const an=window&&typeof(window==null?void 0:window.utools)<"u",Tr=Object.prototype.toString;function Bs(e){return Tr.call(e)==="[object Array]"}function Rd(e){return Tr.call(e)==="[object Null]"}function Hm(e){return Tr.call(e)==="[object Object]"}function Ht(e){return Tr.call(e)==="[object String]"}function _e(e){return Tr.call(e)==="[object Number]"&&e===e}function ot(e){return e===void 0}function _r(e){return typeof e=="function"}const Mm=e=>(e==null?void 0:e.$)!==void 0,kr=Symbol("ArcoConfigProvider"),Nr={formatYear:"YYYY 年",formatMonth:"YYYY 年 MM 月",today:"今天",view:{month:"月",year:"年",week:"周",day:"日"},month:{long:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"},short:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"}},week:{long:{self:"周",monday:"周一",tuesday:"周二",wednesday:"周三",thursday:"周四",friday:"周五",saturday:"周六",sunday:"周日"},short:{self:"周",monday:"一",tuesday:"二",wednesday:"三",thursday:"四",friday:"五",saturday:"六",sunday:"日"}}},Fm={locale:"zh-CN",empty:{description:"暂无数据"},drawer:{okText:"确定",cancelText:"取消"},popconfirm:{okText:"确定",cancelText:"取消"},modal:{okText:"确定",cancelText:"取消"},pagination:{goto:"前往",page:"页",countPerPage:"条/页",total:"共 {0} 条"},table:{okText:"确定",resetText:"重置"},upload:{start:"开始",cancel:"取消",delete:"删除",retry:"点击重试",buttonText:"点击上传",preview:"预览",drag:"点击或拖拽文件到此处上传",dragHover:"释放文件并开始上传",error:"上传失败"},calendar:Nr,datePicker:{view:Nr.view,month:Nr.month,week:Nr.week,placeholder:{date:"请选择日期",week:"请选择周",month:"请选择月份",year:"请选择年份",quarter:"请选择季度",time:"请选择时间"},rangePlaceholder:{date:["开始日期","结束日期"],week:["开始周","结束周"],month:["开始月份","结束月份"],year:["开始年份","结束年份"],quarter:["开始季度","结束季度"],time:["开始时间","结束时间"]},selectTime:"选择时间",today:"今天",now:"此刻",ok:"确定"},image:{loading:"加载中"},imagePreview:{fullScreen:"全屏",rotateRight:"向右旋转",rotateLeft:"向左旋转",zoomIn:"放大",zoomOut:"缩小",originalSize:"原始尺寸"},typography:{copied:"已复制",copy:"复制",expand:"展开",collapse:"折叠",edit:"编辑"},form:{validateMessages:{required:"#{field} 是必填项",type:{string:"#{field} 不是合法的文本类型",number:"#{field} 不是合法的数字类型",boolean:"#{field} 不是合法的布尔类型",array:"#{field} 不是合法的数组类型",object:"#{field} 不是合法的对象类型",url:"#{field} 不是合法的 url 地址",email:"#{field} 不是合法的邮箱地址",ip:"#{field} 不是合法的 IP 地址"},number:{min:"`#{value}` 小于最小值 `#{min}`",max:"`#{value}` 大于最大值 `#{max}`",equal:"`#{value}` 不等于 `#{equal}`",range:"`#{value}` 不在 `#{min} ~ #{max}` 范围内",positive:"`#{value}` 不是正数",negative:"`#{value}` 不是负数"},array:{length:"`#{field}` 个数不等于 #{length}",minLength:"`#{field}` 个数最少为 #{minLength}",maxLength:"`#{field}` 个数最多为 #{maxLength}",includes:"#{field} 不包含 #{includes}",deepEqual:"#{field} 不等于 #{deepEqual}",empty:"`#{field}` 不是空数组"},string:{minLength:"字符数最少为 #{minLength}",maxLength:"字符数最多为 #{maxLength}",length:"字符数必须是 #{length}",match:"`#{value}` 不符合模式 #{pattern}",uppercase:"`#{value}` 必须全大写",lowercase:"`#{value}` 必须全小写"},object:{deepEqual:"`#{field}` 不等于期望值",hasKeys:"`#{field}` 不包含必须字段",empty:"`#{field}` 不是对象"},boolean:{true:"期望是 `true`",false:"期望是 `false`"}}}},$m=te("zh-CN"),jm=Qe({"zh-CN":Fm}),Km=()=>{const e=Ne(kr,void 0),n=k(()=>{var i;return(i=e==null?void 0:e.locale)!=null?i:jm[$m.value]}),t=k(()=>n.value.locale);return{i18nMessage:n,locale:t,t:(i,...s)=>{const o=i.split(".");let a=n.value;for(const l of o){if(!a[l])return i;a=a[l]}return Ht(a)&&s.length>0?a.replace(/{(\d+)}/g,(l,c)=>{var d;return(d=s[c])!=null?d:l}):a}}};var Wm=Object.defineProperty,Um=Object.defineProperties,zm=Object.getOwnPropertyDescriptors,qa=Object.getOwnPropertySymbols,Vm=Object.prototype.hasOwnProperty,qm=Object.prototype.propertyIsEnumerable,Ga=(e,n,t)=>n in e?Wm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Gm=(e,n)=>{for(var t in n||(n={}))Vm.call(n,t)&&Ga(e,t,n[t]);if(qa)for(var t of qa(n))qm.call(n,t)&&Ga(e,t,n[t]);return e},Jm=(e,n)=>Um(e,zm(n));const Zm="A",Ym="arco",Yo="$arco",Tn=e=>{var n;return(n=e==null?void 0:e.componentPrefix)!=null?n:Zm},_n=(e,n)=>{var t;n&&n.classPrefix&&(e.config.globalProperties[Yo]=Jm(Gm({},(t=e.config.globalProperties[Yo])!=null?t:{}),{classPrefix:n.classPrefix}))},ie=e=>{var n,t,r;const i=gi(),s=Ne(kr,void 0),o=(r=(t=s==null?void 0:s.prefixCls)!=null?t:(n=i==null?void 0:i.appContext.config.globalProperties[Yo])==null?void 0:n.classPrefix)!=null?r:Ym;return e?`${o}-${e}`:o};var Ld=function(){if(typeof Map<"u")return Map;function e(n,t){var r=-1;return n.some(function(i,s){return i[0]===t?(r=s,!0):!1}),r}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(t){var r=e(this.__entries__,t),i=this.__entries__[r];return i&&i[1]},n.prototype.set=function(t,r){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=r:this.__entries__.push([t,r])},n.prototype.delete=function(t){var r=this.__entries__,i=e(r,t);~i&&r.splice(i,1)},n.prototype.has=function(t){return!!~e(this.__entries__,t)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];t.call(r,o[1],o[0])}},n}()}(),Xo=typeof window<"u"&&typeof document<"u"&&window.document===document,Qr=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Xm=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Qr):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Qm=2;function ev(e,n){var t=!1,r=!1,i=0;function s(){t&&(t=!1,e()),r&&a()}function o(){Xm(s)}function a(){var l=Date.now();if(t){if(l-i<Qm)return;r=!0}else t=!0,r=!1,setTimeout(o,n);i=l}return a}var nv=20,tv=["top","right","bottom","left","width","height","size","weight"],rv=typeof MutationObserver<"u",iv=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ev(this.refresh.bind(this),nv)}return e.prototype.addObserver=function(n){~this.observers_.indexOf(n)||this.observers_.push(n),this.connected_||this.connect_()},e.prototype.removeObserver=function(n){var t=this.observers_,r=t.indexOf(n);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var n=this.updateObservers_();n&&this.refresh()},e.prototype.updateObservers_=function(){var n=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return n.forEach(function(t){return t.broadcastActive()}),n.length>0},e.prototype.connect_=function(){!Xo||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),rv?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Xo||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(n){var t=n.propertyName,r=t===void 0?"":t,i=tv.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),xd=function(e,n){for(var t=0,r=Object.keys(n);t<r.length;t++){var i=r[t];Object.defineProperty(e,i,{value:n[i],enumerable:!1,writable:!1,configurable:!0})}return e},Rt=function(e){var n=e&&e.ownerDocument&&e.ownerDocument.defaultView;return n||Qr},Id=yi(0,0,0,0);function ei(e){return parseFloat(e)||0}function Ja(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return n.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+ei(s)},0)}function ov(e){for(var n=["top","right","bottom","left"],t={},r=0,i=n;r<i.length;r++){var s=i[r],o=e["padding-"+s];t[s]=ei(o)}return t}function sv(e){var n=e.getBBox();return yi(0,0,n.width,n.height)}function av(e){var n=e.clientWidth,t=e.clientHeight;if(!n&&!t)return Id;var r=Rt(e).getComputedStyle(e),i=ov(r),s=i.left+i.right,o=i.top+i.bottom,a=ei(r.width),l=ei(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==n&&(a-=Ja(r,"left","right")+s),Math.round(l+o)!==t&&(l-=Ja(r,"top","bottom")+o)),!cv(e)){var c=Math.round(a+s)-n,d=Math.round(l+o)-t;Math.abs(c)!==1&&(a-=c),Math.abs(d)!==1&&(l-=d)}return yi(i.left,i.top,a,l)}var lv=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Rt(e).SVGGraphicsElement}:function(e){return e instanceof Rt(e).SVGElement&&typeof e.getBBox=="function"}}();function cv(e){return e===Rt(e).document.documentElement}function dv(e){return Xo?lv(e)?sv(e):av(e):Id}function uv(e){var n=e.x,t=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return xd(o,{x:n,y:t,width:r,height:i,top:t,right:n+r,bottom:i+t,left:n}),o}function yi(e,n,t,r){return{x:e,y:n,width:t,height:r}}var pv=function(){function e(n){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=yi(0,0,0,0),this.target=n}return e.prototype.isActive=function(){var n=dv(this.target);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var n=this.contentRect_;return this.broadcastWidth=n.width,this.broadcastHeight=n.height,n},e}(),fv=function(){function e(n,t){var r=uv(t);xd(this,{target:n,contentRect:r})}return e}(),mv=function(){function e(n,t,r){if(this.activeObservations_=[],this.observations_=new Ld,typeof n!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=n,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof Rt(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)||(t.set(n,new pv(n)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof Rt(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)&&(t.delete(n),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var n=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&n.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var n=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new fv(r.target,r.broadcastRect())});this.callback_.call(n,t,n),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Ad=typeof WeakMap<"u"?new WeakMap:new Ld,wd=function(){function e(n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=iv.getInstance(),r=new mv(n,t,this);Ad.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){wd.prototype[e]=function(){var n;return(n=Ad.get(this))[e].apply(n,arguments)}});var Ds=function(){return typeof Qr.ResizeObserver<"u"?Qr.ResizeObserver:wd}(),Za;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(Za||(Za={}));var Ya;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(Ya||(Ya={}));const Hs=e=>!!(e&&e.shapeFlag&1),Ms=(e,n)=>!!(e&&e.shapeFlag&6),Nd=(e,n)=>!!(e&&e.shapeFlag&16),vv=(e,n)=>!!(e&&e.shapeFlag&32),$r=e=>{var n,t;if(e)for(const r of e){if(Hs(r)||Ms(r))return r;if(Nd(r,r.children)){const i=$r(r.children);if(i)return i}else if(vv(r,r.children)){const i=(t=(n=r.children).default)==null?void 0:t.call(n);if(i){const s=$r(i);if(s)return s}}else if(Bs(r)){const i=$r(r);if(i)return i}}},gv=e=>{if(!e)return!0;for(const n of e)if(n.children)return!1;return!0},Bd=(e,n)=>{if(e&&e.length>0)for(let t=0;t<e.length;t++){const r=e[t];if(Hs(r)||Ms(r)){const s=_r(n)?n(r):n;return e[t]=fn(r,s,!0),!0}const i=Dd(r);if(i&&i.length>0&&Bd(i,n))return!0}return!1},Dd=e=>{if(Nd(e,e.children))return e.children;if(Bs(e))return e},Hd=e=>{var n,t;if(Hs(e))return e.el;if(Ms(e)){if(((n=e.el)==null?void 0:n.nodeType)===1)return e.el;if((t=e.component)!=null&&t.subTree){const r=Hd(e.component.subTree);if(r)return r}}else{const r=Dd(e);return Md(r)}},Md=e=>{if(e&&e.length>0)for(const n of e){const t=Hd(n);if(t)return t}},Xa=e=>{if(e)return _r(e)?e:()=>e};var hv=Z({name:"ResizeObserver",emits:["resize"],setup(e,{emit:n,slots:t}){let r;const i=te(),s=k(()=>Mm(i.value)?i.value.$el:i.value),o=l=>{l&&(r=new Ds(c=>{const d=c[0];n("resize",d)}),r.observe(l))},a=()=>{r&&(r.disconnect(),r=null)};return we(s,l=>{r&&a(),l&&o(l)}),Ge(()=>{s.value&&o(s.value)}),dt(()=>{a()}),()=>{var l,c;const d=$r((c=(l=t.default)==null?void 0:l.call(t))!=null?c:[]);return d?fn(d,{ref:i},!0):null}}});const Fd=typeof window>"u"?global:window,bv=Fd.requestAnimationFrame,Qa=Fd.cancelAnimationFrame;function el(e){let n=0;const t=(...r)=>{n&&Qa(n),n=bv(()=>{e(...r),n=0})};return t.cancel=()=>{Qa(n),n=0},t}const Fs=()=>{},$s=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),xn=(()=>$s?Fs:(e,n,t,r=!1)=>{e.addEventListener(n,t,r)})(),st=(()=>$s?Fs:(e,n,t,r=!1)=>{e.removeEventListener(n,t,r)})(),yv=e=>{const n=document.createElement("div");return n.setAttribute("class",`arco-overlay arco-overlay-${e}`),n},Sv=(e,n)=>{var t;return $s?Fs():(t=(n??document).querySelector(e))!=null?t:void 0},nl=(e,n)=>{if(Ht(e)){const t=e[0]==="#"?`[id='${e.slice(1)}']`:e;return Sv(t,n)}return e};var oe=(e,n)=>{for(const[t,r]of n)e[t]=r;return e};const Ev=Z({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:ie("icon-hover")}}});function Tv(e,n,t,r,i,s){return D(),X("span",{class:V([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[pe(e.$slots,"default")],2)}var $d=oe(Ev,[["render",Tv]]);const _v=Z({name:"IconClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-close`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),kv=["stroke-width","stroke-linecap","stroke-linejoin"],Ov=ne("path",{d:"M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"},null,-1),Pv=[Ov];function Cv(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Pv,14,kv)}var Mi=oe(_v,[["render",Cv]]);const Rv=Object.assign(Mi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Mi.name,Mi)}}),Lv=Z({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-info-circle-fill`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),xv=["stroke-width","stroke-linecap","stroke-linejoin"],Iv=ne("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),Av=[Iv];function wv(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Av,14,xv)}var Fi=oe(Lv,[["render",wv]]);const Nv=Object.assign(Fi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Fi.name,Fi)}}),Bv=Z({name:"IconCheckCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-check-circle-fill`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Dv=["stroke-width","stroke-linecap","stroke-linejoin"],Hv=ne("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",fill:"currentColor",stroke:"none"},null,-1),Mv=[Hv];function Fv(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Mv,14,Dv)}var $i=oe(Bv,[["render",Fv]]);const $v=Object.assign($i,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+$i.name,$i)}}),jv=Z({name:"IconExclamationCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-exclamation-circle-fill`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Kv=["stroke-width","stroke-linecap","stroke-linejoin"],Wv=ne("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",fill:"currentColor",stroke:"none"},null,-1),Uv=[Wv];function zv(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Uv,14,Kv)}var ji=oe(jv,[["render",zv]]);const Vv=Object.assign(ji,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ji.name,ji)}}),qv=Z({name:"IconCloseCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-close-circle-fill`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Gv=["stroke-width","stroke-linecap","stroke-linejoin"],Jv=ne("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",fill:"currentColor",stroke:"none"},null,-1),Zv=[Jv];function Yv(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Zv,14,Gv)}var Ki=oe(qv,[["render",Yv]]);const Xv=Object.assign(Ki,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ki.name,Ki)}}),Qv=["info","success","warning","error"],eg=Z({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-loading`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),ng=["stroke-width","stroke-linecap","stroke-linejoin"],tg=ne("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),rg=[tg];function ig(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},rg,14,ng)}var Wi=oe(eg,[["render",ig]]);const js=Object.assign(Wi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Wi.name,Wi)}});var og=Object.defineProperty,tl=Object.getOwnPropertySymbols,sg=Object.prototype.hasOwnProperty,ag=Object.prototype.propertyIsEnumerable,rl=(e,n,t)=>n in e?og(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,lg=(e,n)=>{for(var t in n||(n={}))sg.call(n,t)&&rl(e,t,n[t]);if(tl)for(var t of tl(n))ag.call(n,t)&&rl(e,t,n[t]);return e};const cg=(e,n)=>{const t=lg({},e);for(const r of n)r in t&&delete t[r];return t},dg=Symbol("ArcoFormItemContext"),Ks=({size:e,disabled:n,error:t,uninject:r}={})=>{const i=r?{}:Ne(dg,{}),s=k(()=>{var d;return(d=e==null?void 0:e.value)!=null?d:i.size}),o=k(()=>(n==null?void 0:n.value)||i.disabled),a=k(()=>(t==null?void 0:t.value)||i.error),l=Do(i,"feedback"),c=Do(i,"eventHandlers");return{formItemCtx:i,mergedSize:s,mergedDisabled:o,mergedError:a,feedback:l,eventHandlers:c}},ug=(e,{defaultValue:n="medium"}={})=>{const t=Ne(kr,void 0);return{mergedSize:k(()=>{var i,s;return(s=(i=e==null?void 0:e.value)!=null?i:t==null?void 0:t.size)!=null?s:n})}},jd=Symbol("ArcoButtonGroup"),pg=Z({name:"Button",components:{IconLoading:js},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:n}){const{size:t,disabled:r}=en(e),i=ie("btn"),s=Ne(jd,void 0),o=k(()=>{var v;return(v=t.value)!=null?v:s==null?void 0:s.size}),a=k(()=>!!(r.value||s!=null&&s.disabled)),{mergedSize:l,mergedDisabled:c}=Ks({size:o,disabled:a}),{mergedSize:d}=ug(l),u=k(()=>{var v,T,_,R,S,b;return[i,`${i}-${(T=(v=e.type)!=null?v:s==null?void 0:s.type)!=null?T:"secondary"}`,`${i}-shape-${(R=(_=e.shape)!=null?_:s==null?void 0:s.shape)!=null?R:"square"}`,`${i}-size-${d.value}`,`${i}-status-${(b=(S=e.status)!=null?S:s==null?void 0:s.status)!=null?b:"normal"}`,{[`${i}-long`]:e.long,[`${i}-loading`]:e.loading,[`${i}-disabled`]:c.value,[`${i}-link`]:Ht(e.href)}]});return{prefixCls:i,cls:u,mergedDisabled:c,handleClick:v=>{if(e.disabled||e.loading){v.preventDefault();return}n("click",v)}}}}),fg=["href"],mg=["type","disabled"];function vg(e,n,t,r,i,s){const o=ue("icon-loading");return e.href?(D(),X("a",{key:0,class:V([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:n[0]||(n[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(D(),X("span",{key:0,class:V(`${e.prefixCls}-icon`)},[e.loading?(D(),Ee(o,{key:0,spin:"true"})):pe(e.$slots,"icon",{key:1})],2)):je("v-if",!0),pe(e.$slots,"default")],10,fg)):(D(),X("button",{key:1,class:V([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:n[1]||(n[1]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(D(),X("span",{key:0,class:V(`${e.prefixCls}-icon`)},[e.loading?(D(),Ee(o,{key:0,spin:!0})):pe(e.$slots,"icon",{key:1})],2)):je("v-if",!0),pe(e.$slots,"default")],10,mg))}var Ui=oe(pg,[["render",vg]]);const gg=Z({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:n,size:t,status:r,disabled:i,shape:s}=en(e),o=ie("btn-group");return qn(jd,Qe({type:n,size:t,shape:s,status:r,disabled:i})),{prefixCls:o}}});function hg(e,n,t,r,i,s){return D(),X("div",{class:V(e.prefixCls)},[pe(e.$slots,"default")],2)}var jr=oe(gg,[["render",hg]]);const Or=Object.assign(Ui,{Group:jr,install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+Ui.name,Ui),e.component(t+jr.name,jr)}}),bg=Z({name:"IconEye",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-eye`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),yg=["stroke-width","stroke-linecap","stroke-linejoin"],Sg=ne("path",{"clip-rule":"evenodd",d:"M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"},null,-1),Eg=ne("path",{d:"M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"},null,-1),Tg=[Sg,Eg];function _g(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Tg,14,yg)}var zi=oe(bg,[["render",_g]]);const kg=Object.assign(zi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+zi.name,zi)}});var Og=Object.defineProperty,il=Object.getOwnPropertySymbols,Pg=Object.prototype.hasOwnProperty,Cg=Object.prototype.propertyIsEnumerable,ol=(e,n,t)=>n in e?Og(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Yt=(e,n)=>{for(var t in n||(n={}))Pg.call(n,t)&&ol(e,t,n[t]);if(il)for(var t of il(n))Cg.call(n,t)&&ol(e,t,n[t]);return e};const Rg=()=>{const{body:e}=document,n=document.documentElement;let t;try{t=(window.top||window.self||window).document.body}catch{}return{height:Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight,(t==null?void 0:t.scrollHeight)||0,(t==null?void 0:t.clientHeight)||0),width:Math.max(e.scrollWidth,e.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth,(t==null?void 0:t.scrollWidth)||0,(t==null?void 0:t.clientWidth)||0)}},Lg=()=>{const{height:e,width:n}=Rg();return{width:Math.min(n,window.innerWidth),height:Math.min(e,window.innerHeight)}},sl=(e,n)=>{var t,r;const i=e.getBoundingClientRect();return{top:i.top,bottom:i.bottom,left:i.left,right:i.right,scrollTop:i.top-n.top,scrollBottom:i.bottom-n.top,scrollLeft:i.left-n.left,scrollRight:i.right-n.left,width:(t=e.offsetWidth)!=null?t:e.clientWidth,height:(r=e.offsetHeight)!=null?r:e.clientHeight}},xg=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},Br=(e,n)=>{switch(n){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},Ig=(e,n,{containerRect:t,triggerRect:r,popupRect:i,offset:s,translate:o})=>{const a=xg(e),l=Lg(),c={top:t.top+n.top,bottom:l.height-(t.top+n.top+i.height),left:t.left+n.left,right:l.width-(t.left+n.left+i.width)};let d=e;if(a==="top"&&c.top<0)if(r.top>i.height)n.top=-t.top;else{const u=Xt("bottom",r,i,{offset:s,translate:o});l.height-(t.top+u.top+i.height)>0&&(d=Br(e,"bottom"),n.top=u.top)}if(a==="bottom"&&c.bottom<0)if(l.height-r.bottom>i.height)n.top=-t.top+(l.height-i.height);else{const u=Xt("top",r,i,{offset:s,translate:o});t.top+u.top>0&&(d=Br(e,"top"),n.top=u.top)}if(a==="left"&&c.left<0)if(r.left>i.width)n.left=-t.left;else{const u=Xt("right",r,i,{offset:s,translate:o});l.width-(t.left+u.left+i.width)>0&&(d=Br(e,"right"),n.left=u.left)}if(a==="right"&&c.right<0)if(l.width-r.right>i.width)n.left=-t.left+(l.width-i.width);else{const u=Xt("left",r,i,{offset:s,translate:o});t.left+u.left>0&&(d=Br(e,"left"),n.left=u.left)}return(a==="top"||a==="bottom")&&(c.left<0?n.left=-t.left:c.right<0&&(n.left=-t.left+(l.width-i.width))),(a==="left"||a==="right")&&(c.top<0?n.top=-t.top:c.bottom<0&&(n.top=-t.top+(l.height-i.height))),{popupPosition:n,position:d}},Xt=(e,n,t,{offset:r=0,translate:i=[0,0]}={})=>{var s;const o=(s=Bs(i)?i:i[e])!=null?s:[0,0];switch(e){case"top":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+o[0],top:n.scrollTop-t.height-r+o[1]};case"tl":return{left:n.scrollLeft+o[0],top:n.scrollTop-t.height-r+o[1]};case"tr":return{left:n.scrollRight-t.width+o[0],top:n.scrollTop-t.height-r+o[1]};case"bottom":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+o[0],top:n.scrollBottom+r+o[1]};case"bl":return{left:n.scrollLeft+o[0],top:n.scrollBottom+r+o[1]};case"br":return{left:n.scrollRight-t.width+o[0],top:n.scrollBottom+r+o[1]};case"left":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+o[1]};case"lt":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollTop+o[1]};case"lb":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollBottom-t.height+o[1]};case"right":return{left:n.scrollRight+r+o[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+o[1]};case"rt":return{left:n.scrollRight+r+o[0],top:n.scrollTop+o[1]};case"rb":return{left:n.scrollRight+r+o[0],top:n.scrollBottom-t.height+o[1]};default:return{left:0,top:0}}},Ag=e=>{let n="0";["top","bottom"].includes(e)?n="50%":["left","lt","lb","tr","br"].includes(e)&&(n="100%");let t="0";return["left","right"].includes(e)?t="50%":["top","tl","tr","lt","rt"].includes(e)&&(t="100%"),`${n} ${t}`},wg=(e,n,t,r,{offset:i=0,translate:s=[0,0],customStyle:o={},autoFitPosition:a=!1}={})=>{let l=e,c=Xt(e,t,r,{offset:i,translate:s});if(a){const u=Ig(e,c,{containerRect:n,popupRect:r,triggerRect:t,offset:i,translate:s});c=u.popupPosition,l=u.position}return{style:Yt({left:`${c.left}px`,top:`${c.top}px`},o),position:l}},Ng=(e,n,t,{customStyle:r={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let s=Math.abs(n.scrollLeft+n.width/2-t.scrollLeft);return s>t.width-8&&(n.width>t.width?s=t.width/2:s=t.width-8),["top","tl","tr"].includes(e)?Yt({left:`${s}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},r):Yt({left:`${s}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)}let i=Math.abs(n.scrollTop+n.height/2-t.scrollTop);return i>t.height-8&&(n.height>t.height?i=t.height/2:i=t.height-8),["left","lt","lb"].includes(e)?Yt({top:`${i}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},r):Yt({top:`${i}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)},Bg=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,al=e=>{var n;const t=[];let r=e;for(;r&&r!==document.documentElement;)Bg(r)&&t.push(r),r=(n=r.parentElement)!=null?n:void 0;return t},Kd=()=>{const e={},n=te(),t=()=>{const r=Md(e.value);r!==n.value&&(n.value=r)};return Ge(()=>t()),ct(()=>t()),{children:e,firstElement:n}};var Qo=Z({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:n,slots:t}){const{children:r,firstElement:i}=Kd();let s;const o=l=>{l&&(s=new Ds(c=>{const d=c[0];n("resize",d)}),s.observe(l))},a=()=>{s&&(s.disconnect(),s=null)};return we(i,l=>{s&&a(),l&&o(l)}),Bt(()=>{s&&a()}),()=>{var l;return r.value=(l=t.default)==null?void 0:l.call(t),r.value}}});function Dg(e,n){const t=te(e[n]);return ct(()=>{const r=e[n];t.value!==r&&(t.value=r)}),t}const ll=Symbol("ArcoTrigger"),Hg=1e3,Mg=5e3,Fg=1;class $g{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=n=>(n==="message"?Array.from(this.popupStack.message).pop()||Mg:Array.from(this.popupStack.popup).pop()||Hg)+Fg,this.add=n=>{const t=this.getNextZIndex(n);return this.popupStack[n].add(t),n==="dialog"&&this.popupStack.popup.add(t),t},this.delete=(n,t)=>{this.popupStack[t].delete(n),t==="dialog"&&this.popupStack.popup.delete(n)},this.isLastDialog=n=>this.popupStack.dialog.size>1?n===Array.from(this.popupStack.dialog).pop():!0}}const Vi=new $g;function Wd(e,{visible:n,runOnMounted:t}={}){const r=te(0),i=()=>{r.value=Vi.add(e)},s=()=>{Vi.delete(r.value,e)},o=()=>e==="dialog"?Vi.isLastDialog(r.value):!1;return we(()=>n==null?void 0:n.value,a=>{a?i():s()},{immediate:!0}),t&&(Ge(()=>{i()}),Bt(()=>{s()})),{zIndex:Ss(r),open:i,close:s,isLastDialog:o}}const jg=({elementRef:e,onResize:n})=>{let t;return{createResizeObserver:()=>{e.value&&(t=new Ds(s=>{const o=s[0];_r(n)&&n(o)}),t.observe(e.value))},destroyResizeObserver:()=>{t&&(t.disconnect(),t=null)}}};var Kg=Z({name:"ClientOnly",setup(e,{slots:n}){const t=te(!1);return Ge(()=>t.value=!0),()=>{var r;return t.value?(r=n.default)==null?void 0:r.call(n):null}}});const Wg=({popupContainer:e,visible:n,defaultContainer:t="body",documentContainer:r})=>{const i=te(e.value),s=te(),o=()=>{const a=nl(e.value),l=a?e.value:t,c=a??(r?document.documentElement:nl(t));l!==i.value&&(i.value=l),c!==s.value&&(s.value=c)};return Ge(()=>o()),we(n,a=>{i.value!==e.value&&a&&o()}),{teleportContainer:i,containerRef:s}};var Ug=Object.defineProperty,zg=Object.defineProperties,Vg=Object.getOwnPropertyDescriptors,cl=Object.getOwnPropertySymbols,qg=Object.prototype.hasOwnProperty,Gg=Object.prototype.propertyIsEnumerable,dl=(e,n,t)=>n in e?Ug(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Jg=(e,n)=>{for(var t in n||(n={}))qg.call(n,t)&&dl(e,t,n[t]);if(cl)for(var t of cl(n))Gg.call(n,t)&&dl(e,t,n[t]);return e},Zg=(e,n)=>zg(e,Vg(n));const Yg=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var qi=Z({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1},scrollToClose:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{popupContainer:i}=en(e),s=ie("trigger"),o=k(()=>cg(r,Yg)),a=Ne(kr,void 0),l=k(()=>[].concat(e.trigger)),c=new Set,d=Ne(ll,void 0),{children:u,firstElement:p}=Kd(),v=te(),T=te(e.defaultPopupVisible),_=te(e.position),R=te({}),S=te({}),b=te({}),A=te(),h=te({top:0,left:0}),y=k(()=>{var C;return(C=e.popupVisible)!=null?C:T.value}),{teleportContainer:B,containerRef:W}=Wg({popupContainer:i,visible:y,documentContainer:!0}),{zIndex:N}=Wd("popup",{visible:y});let L=0,M=!1,G=!1;const K=()=>{L&&(window.clearTimeout(L),L=0)},se=C=>{if(e.alignPoint){const{pageX:j,pageY:ce}=C;h.value={top:ce,left:j}}},ge=()=>{if(!p.value||!v.value||!W.value)return;const C=W.value.getBoundingClientRect(),j=e.alignPoint?{top:h.value.top,bottom:h.value.top,left:h.value.left,right:h.value.left,scrollTop:h.value.top,scrollBottom:h.value.top,scrollLeft:h.value.left,scrollRight:h.value.left,width:0,height:0}:sl(p.value,C),ce=()=>sl(v.value,C),ye=ce(),{style:Oe,position:We}=wg(e.position,C,j,ye,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(S.value={transformOrigin:Ag(We)}),e.autoFitPopupMinWidth?Oe.minWidth=`${j.width}px`:e.autoFitPopupWidth&&(Oe.width=`${j.width}px`),_.value!==We&&(_.value=We),R.value=Oe,e.showArrow&&An(()=>{b.value=Ng(We,j,ce(),{customStyle:e.arrowStyle})})},Te=(C,j)=>{if(C===y.value&&L===0)return;const ce=()=>{T.value=C,n("update:popupVisible",C),n("popupVisibleChange",C),C&&An(()=>{ge()})};j?(K(),C!==y.value&&(L=window.setTimeout(ce,j))):ce()},de=C=>{var j;(j=r.onClick)==null||j.call(r,C),!(e.disabled||y.value&&!e.clickToClose)&&(l.value.includes("click")?(se(C),Te(!y.value)):l.value.includes("contextMenu")&&y.value&&Te(!1))},he=C=>{var j;(j=r.onMouseenter)==null||j.call(r,C),!(e.disabled||!l.value.includes("hover"))&&(se(C),Te(!0,e.mouseEnterDelay))},fe=C=>{d==null||d.onMouseenter(C),he(C)},Ke=C=>{var j;(j=r.onMouseleave)==null||j.call(r,C),!(e.disabled||!l.value.includes("hover"))&&Te(!1,e.mouseLeaveDelay)},Je=C=>{d==null||d.onMouseleave(C),Ke(C)},Ve=C=>{var j;(j=r.onFocusin)==null||j.call(r,C),!(e.disabled||!l.value.includes("focus"))&&Te(!0,e.focusDelay)},Me=C=>{var j;(j=r.onFocusout)==null||j.call(r,C),!(e.disabled||!l.value.includes("focus"))&&e.blurToClose&&Te(!1)},ln=C=>{var j;(j=r.onContextmenu)==null||j.call(r,C),!(e.disabled||!l.value.includes("contextMenu")||y.value&&!e.clickToClose)&&(se(C),Te(!y.value),C.preventDefault())};qn(ll,Qe({onMouseenter:fe,onMouseleave:Je,addChildRef:C=>{c.add(C),d==null||d.addChildRef(C)},removeChildRef:C=>{c.delete(C),d==null||d.removeChildRef(C)}}));const xe=()=>{st(document.documentElement,"mousedown",$),M=!1},O=Dg(t,"content"),z=k(()=>{var C;return e.hideEmpty&&gv((C=O.value)==null?void 0:C.call(O))}),$=C=>{var j,ce,ye;if(!((j=p.value)!=null&&j.contains(C.target)||(ce=v.value)!=null&&ce.contains(C.target))){for(const Oe of c)if((ye=Oe.value)!=null&&ye.contains(C.target))return;xe(),Te(!1)}},Y=el(()=>{y.value&&(e.scrollToClose||a!=null&&a.scrollToClose?Te(!1):ge())}),be=()=>{st(window,"scroll",f),G=!1},f=el(()=>{Te(!1),be()}),m=()=>{y.value&&ge()},g=()=>{m(),n("resize")},E=C=>{e.preventFocus&&C.preventDefault()};d==null||d.addChildRef(v);const P=k(()=>y.value?e.openedClass:void 0);let x;we(y,C=>{if(e.clickOutsideToClose&&(!C&&M?xe():C&&!M&&(xn(document.documentElement,"mousedown",$),M=!0)),(e.scrollToClose||a!=null&&a.scrollToClose)&&(xn(window,"scroll",f),G=!0),e.updateAtScroll||a!=null&&a.updateAtScroll){if(C){x=al(p.value);for(const j of x)j.addEventListener("scroll",Y)}else if(x){for(const j of x)j.removeEventListener("scroll",Y);x=void 0}}C&&(F.value=!0)}),we(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{y.value&&ge()});const{createResizeObserver:U,destroyResizeObserver:H}=jg({elementRef:W,onResize:m});Ge(()=>{if(U(),y.value&&(ge(),e.clickOutsideToClose&&!M&&(xn(document.documentElement,"mousedown",$),M=!0),e.updateAtScroll||a!=null&&a.updateAtScroll)){x=al(p.value);for(const C of x)C.addEventListener("scroll",Y)}}),ct(()=>{y.value&&ge()}),Yc(()=>{Te(!1)}),Bt(()=>{if(d==null||d.removeChildRef(v),H(),M&&xe(),G&&be(),x){for(const C of x)C.removeEventListener("scroll",Y);x=void 0}});const F=te(y.value),w=te(!1),Q=()=>{w.value=!0},J=()=>{w.value=!1,y.value&&n("show")},ee=()=>{w.value=!1,y.value||(F.value=!1,n("hide"))};return()=>{var C,j;return u.value=(j=(C=t.default)==null?void 0:C.call(t))!=null?j:[],Bd(u.value,{class:P.value,onClick:de,onMouseenter:he,onMouseleave:Ke,onFocusin:Ve,onFocusout:Me,onContextmenu:ln}),I(De,null,[e.autoFixPosition?I(Qo,{onResize:g},{default:()=>[u.value]}):u.value,I(Kg,null,{default:()=>[I(Df,{to:B.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||y.value||F.value)&&!z.value&&I(Qo,{onResize:m},{default:()=>[I("div",Dt({ref:v,class:[`${s}-popup`,`${s}-position-${_.value}`],style:Zg(Jg({},R.value),{zIndex:N.value,pointerEvents:w.value?"none":"auto"}),"trigger-placement":_.value,onMouseenter:fe,onMouseleave:Je,onMousedown:E},o.value),[I(Er,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:Q,onAfterEnter:J,onBeforeLeave:Q,onAfterLeave:ee},{default:()=>{var ce;return[qc(I("div",{class:`${s}-popup-wrapper`,style:S.value},[I("div",{class:[`${s}-content`,e.contentClass],style:e.contentStyle},[(ce=t.content)==null?void 0:ce.call(t)]),e.showArrow&&I("div",{ref:A,class:[`${s}-arrow`,e.arrowClass],style:b.value},null)]),[[km,y.value]])]}})])]})]})]})])}}});const Ws=Object.assign(qi,{install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+qi.name,qi)}}),Xg=Z({name:"IconEmpty",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-empty`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Qg=["stroke-width","stroke-linecap","stroke-linejoin"],eh=ne("path",{d:"M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"},null,-1),nh=[eh];function th(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},nh,14,Qg)}var Gi=oe(Xg,[["render",th]]);const rh=Object.assign(Gi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Gi.name,Gi)}});var Ji=Z({name:"Empty",props:{description:String,imgSrc:String,inConfigProvider:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=ie("empty"),{t:r}=Km(),i=Ne(kr,void 0);return()=>{var s,o,a,l;return!e.inConfigProvider&&(i!=null&&i.slots.empty)&&!(n.image||e.imgSrc||e.description)?i.slots.empty({component:"empty"}):I("div",{class:t},[I("div",{class:`${t}-image`},[(o=(s=n.image)==null?void 0:s.call(n))!=null?o:e.imgSrc?I("img",{src:e.imgSrc,alt:e.description||"empty"},null):I(rh,null,null)]),I("div",{class:`${t}-description`},[(l=(a=n.default)==null?void 0:a.call(n))!=null?l:e.description||r("empty.description")])])}}});const ih=Object.assign(Ji,{install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+Ji.name,Ji)}}),oh=Z({name:"Thumb",props:{data:{type:Object},direction:{type:String,default:"horizontal"},alwaysShow:{type:Boolean,default:!1},both:{type:Boolean,default:!1}},emits:["scroll"],setup(e,{emit:n}){const t=ie("scrollbar"),r=te(!1),i=te(),s=te(),o=k(()=>e.direction==="horizontal"?{size:"width",direction:"left",offset:"offsetWidth",client:"clientX"}:{size:"height",direction:"top",offset:"offsetHeight",client:"clientY"}),a=te(0),l=te(!1),c=te(0),d=k(()=>{var b,A;return{[o.value.size]:`${(A=(b=e.data)==null?void 0:b.thumbSize)!=null?A:0}px`,[o.value.direction]:`${a.value}px`}}),u=b=>{b.preventDefault(),s.value&&(c.value=b[o.value.client]-s.value.getBoundingClientRect()[o.value.direction],l.value=!0,xn(window,"mousemove",T),xn(window,"mouseup",_),xn(window,"contextmenu",_))},p=b=>{var A,h,y,B;if(b.preventDefault(),s.value){const W=v(b[o.value.client]>s.value.getBoundingClientRect()[o.value.direction]?a.value+((h=(A=e.data)==null?void 0:A.thumbSize)!=null?h:0):a.value-((B=(y=e.data)==null?void 0:y.thumbSize)!=null?B:0));W!==a.value&&(a.value=W,n("scroll",W))}},v=b=>b<0?0:e.data&&b>e.data.max?e.data.max:b,T=b=>{if(i.value&&s.value){const A=v(b[o.value.client]-i.value.getBoundingClientRect()[o.value.direction]-c.value);A!==a.value&&(a.value=A,n("scroll",A))}},_=()=>{l.value=!1,st(window,"mousemove",T),st(window,"mouseup",_)},R=b=>{l.value||(b=v(b),b!==a.value&&(a.value=b))},S=k(()=>[`${t}-thumb`,`${t}-thumb-direction-${e.direction}`,{[`${t}-thumb-dragging`]:l.value}]);return{visible:r,trackRef:i,thumbRef:s,prefixCls:t,thumbCls:S,thumbStyle:d,handleThumbMouseDown:u,handleTrackClick:p,setOffset:R}}});function sh(e,n,t,r,i,s){return D(),Ee(Er,null,{default:q(()=>[ne("div",{ref:"trackRef",class:V([`${e.prefixCls}-track`,`${e.prefixCls}-track-direction-${e.direction}`]),onMousedown:n[1]||(n[1]=Td((...o)=>e.handleTrackClick&&e.handleTrackClick(...o),["self"]))},[ne("div",{ref:"thumbRef",class:V(e.thumbCls),style:ve(e.thumbStyle),onMousedown:n[0]||(n[0]=(...o)=>e.handleThumbMouseDown&&e.handleThumbMouseDown(...o))},[ne("div",{class:V(`${e.prefixCls}-thumb-bar`)},null,2)],38)],34)]),_:1})}var ah=oe(oh,[["render",sh]]);const ul=20,Dr=15,lh=Z({name:"Scrollbar",components:{ResizeObserver:Qo,Thumb:ah},inheritAttrs:!1,props:{type:{type:String,default:"embed"},outerClass:[String,Object,Array],outerStyle:{type:[String,Object,Array]},hide:{type:Boolean,default:!1},disableHorizontal:{type:Boolean,default:!1},disableVertical:{type:Boolean,default:!1}},emits:{scroll:e=>!0},setup(e,{emit:n}){const t=ie("scrollbar"),r=te(),i=te(),s=te(),o=te(),a=te(),l=te(!1),c=te(!1),d=k(()=>l.value&&!e.disableHorizontal),u=k(()=>c.value&&!e.disableVertical),p=te(!1),v=()=>{var h,y,B,W,N,L;if(r.value){const{clientWidth:M,clientHeight:G,offsetWidth:K,offsetHeight:se,scrollWidth:ge,scrollHeight:Te,scrollTop:de,scrollLeft:he}=r.value;l.value=ge>M,c.value=Te>G,p.value=d.value&&u.value;const fe=e.type==="embed"&&p.value?K-Dr:K,Ke=e.type==="embed"&&p.value?se-Dr:se,Je=Math.round(fe/Math.min(ge/M,fe/ul)),Ve=fe-Je,Me=(ge-M)/Ve,ln=Math.round(Ke/Math.min(Te/G,Ke/ul)),gn=Ke-ln,Jn=(Te-G)/gn;if(i.value={ratio:Me,thumbSize:Je,max:Ve},s.value={ratio:Jn,thumbSize:ln,max:gn},de>0){const xe=Math.round(de/((y=(h=s.value)==null?void 0:h.ratio)!=null?y:1));(B=a.value)==null||B.setOffset(xe)}if(he>0){const xe=Math.round(he/((N=(W=s.value)==null?void 0:W.ratio)!=null?N:1));(L=o.value)==null||L.setOffset(xe)}}};Ge(()=>{v()});const T=()=>{v()},_=h=>{var y,B,W,N,L,M;if(r.value){if(d.value&&!e.disableHorizontal){const G=Math.round(r.value.scrollLeft/((B=(y=i.value)==null?void 0:y.ratio)!=null?B:1));(W=o.value)==null||W.setOffset(G)}if(u.value&&!e.disableVertical){const G=Math.round(r.value.scrollTop/((L=(N=s.value)==null?void 0:N.ratio)!=null?L:1));(M=a.value)==null||M.setOffset(G)}}n("scroll",h)},R=h=>{var y,B;r.value&&r.value.scrollTo({left:h*((B=(y=i.value)==null?void 0:y.ratio)!=null?B:1)})},S=h=>{var y,B;r.value&&r.value.scrollTo({top:h*((B=(y=s.value)==null?void 0:y.ratio)!=null?B:1)})},b=k(()=>{const h={};return e.type==="track"&&(d.value&&(h.paddingBottom=`${Dr}px`),u.value&&(h.paddingRight=`${Dr}px`)),[h,e.outerStyle]}),A=k(()=>[`${t}`,`${t}-type-${e.type}`,{[`${t}-both`]:p.value},e.outerClass]);return{prefixCls:t,cls:A,style:b,containerRef:r,horizontalThumbRef:o,verticalThumbRef:a,horizontalData:i,verticalData:s,isBoth:p,hasHorizontalScrollbar:d,hasVerticalScrollbar:u,handleResize:T,handleScroll:_,handleHorizontalScroll:R,handleVerticalScroll:S}},methods:{scrollTo(e,n){var t,r;Hm(e)?(t=this.$refs.containerRef)==null||t.scrollTo(e):(e||n)&&((r=this.$refs.containerRef)==null||r.scrollTo(e,n))},scrollTop(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({top:e})},scrollLeft(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({left:e})}}});function ch(e,n,t,r,i,s){const o=ue("ResizeObserver"),a=ue("thumb");return D(),X("div",{class:V(e.cls),style:ve(e.style)},[I(o,{onResize:e.handleResize},{default:q(()=>[ne("div",Dt({ref:"containerRef",class:`${e.prefixCls}-container`},e.$attrs,{onScroll:n[0]||(n[0]=(...l)=>e.handleScroll&&e.handleScroll(...l))}),[I(o,{onResize:e.handleResize},{default:q(()=>[pe(e.$slots,"default")]),_:3},8,["onResize"])],16)]),_:3},8,["onResize"]),!e.hide&&e.hasHorizontalScrollbar?(D(),Ee(a,{key:0,ref:"horizontalThumbRef",data:e.horizontalData,direction:"horizontal",both:e.isBoth,onScroll:e.handleHorizontalScroll},null,8,["data","both","onScroll"])):je("v-if",!0),!e.hide&&e.hasVerticalScrollbar?(D(),Ee(a,{key:1,ref:"verticalThumbRef",data:e.verticalData,direction:"vertical",both:e.isBoth,onScroll:e.handleVerticalScroll},null,8,["data","both","onScroll"])):je("v-if",!0)],6)}var Zi=oe(lh,[["render",ch]]);const dh=Object.assign(Zi,{install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+Zi.name,Zi)}});var uh=Object.defineProperty,pl=Object.getOwnPropertySymbols,ph=Object.prototype.hasOwnProperty,fh=Object.prototype.propertyIsEnumerable,fl=(e,n,t)=>n in e?uh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Yi=(e,n)=>{for(var t in n||(n={}))ph.call(n,t)&&fl(e,t,n[t]);if(pl)for(var t of pl(n))fh.call(n,t)&&fl(e,t,n[t]);return e};const mh=["red","orangered","orange","gold","lime","green","cyan","arcoblue","purple","pinkpurple","magenta","gray"],vh=["normal","processing","success","warning","danger"];var Xi=Z({name:"Badge",props:{text:{type:String},dot:{type:Boolean},dotStyle:{type:Object},maxCount:{type:Number,default:99},offset:{type:Array,default:()=>[]},color:{type:String},status:{type:String,validator:e=>vh.includes(e)},count:{type:Number}},setup(e,{slots:n}){const{status:t,color:r,dotStyle:i,offset:s,text:o,dot:a,maxCount:l,count:c}=en(e),d=ie("badge"),u=gh(d,t==null?void 0:t.value,n==null?void 0:n.default),p=k(()=>{const T=Yi({},(i==null?void 0:i.value)||{}),[_,R]=(s==null?void 0:s.value)||[];_&&(T.marginRight=`${-_}px`),R&&(T.marginTop=`${R}px`);const S=!(r!=null&&r.value)||mh.includes(r==null?void 0:r.value)?{}:{backgroundColor:r.value};return{mergedStyle:Yi(Yi({},S),T),computedDotStyle:T,computedColorStyle:S}}),v=()=>{const T=o==null?void 0:o.value,_=r==null?void 0:r.value,R=t==null?void 0:t.value,S=a==null?void 0:a.value,b=Number(c==null?void 0:c.value),A=(c==null?void 0:c.value)!=null,{computedDotStyle:h,mergedStyle:y}=p.value;return n.content?I("span",{class:`${d}-custom-dot`,style:h},[n.content()]):T&&!_&&!R?I("span",{class:`${d}-text`,style:h},[T]):R||_&&!A?I("span",{class:`${d}-status-wrapper`},[I("span",{class:[`${d}-status-dot`,{[`${d}-status-${R}`]:R,[`${d}-color-${_}`]:_}],style:y},null),T&&I("span",{class:`${d}-status-text`},[T])]):(S||_)&&b>0?I("span",{class:[`${d}-dot`,{[`${d}-color-${_}`]:_}],style:y},null):b===0?null:I("span",{class:`${d}-number`,style:y},[I("span",null,[l.value&&b>l.value?`${l.value}+`:b])])};return()=>I("span",{class:u.value},[n.default&&n.default(),v()])}});const gh=(e,n,t)=>k(()=>[e,{[`${e}-status`]:n,[`${e}-no-children`]:!t}]),hh=Object.assign(Xi,{install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+Xi.name,Xi)}}),bh=Z({name:"IconMore",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-more`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),yh=["stroke-width","stroke-linecap","stroke-linejoin"],Sh=ne("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",fill:"currentColor",stroke:"none"},null,-1),Eh=ne("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"},null,-1),Th=[Sh,Eh];function _h(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Th,14,yh)}var Qi=oe(bh,[["render",_h]]);const kh=Object.assign(Qi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Qi.name,Qi)}}),Oh=Z({name:"IconDown",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-down`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Ph=["stroke-width","stroke-linecap","stroke-linejoin"],Ch=ne("path",{d:"M39.6 17.443 24.043 33 8.487 17.443"},null,-1),Rh=[Ch];function Lh(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Rh,14,Ph)}var eo=oe(Oh,[["render",Lh]]);const xh=Object.assign(eo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+eo.name,eo)}}),Us=Symbol("ArcoDropdown"),Ih=Z({name:"DropdownPanel",components:{Scrollbar:dh,Empty:ih},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:n,slots:t}){const r=ie("dropdown"),i=Ne(Us,{}),s=te(),o=c=>{const{scrollTop:d,scrollHeight:u,offsetHeight:p}=c.target;u-(d+p)<=e.bottomOffset&&n("reachBottom",c),n("scroll",c)},a=k(()=>{if(_e(i.popupMaxHeight))return{maxHeight:`${i.popupMaxHeight}px`};if(!i.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),l=k(()=>[r,{[`${r}-has-footer`]:!!t.footer}]);return{prefixCls:r,cls:l,style:a,wrapperRef:s,handleScroll:o}}});function Ah(e,n,t,r,i,s){const o=ue("empty"),a=ue("Scrollbar");return D(),X("div",{class:V(e.cls)},[e.isEmpty?(D(),X("div",{key:0,class:V(`${e.prefixCls}-empty`)},[pe(e.$slots,"empty",{},()=>[I(o)])],2)):je("v-if",!0),I(a,{ref:"wrapperRef",class:V(`${e.prefixCls}-list-wrapper`),style:ve(e.style),onScroll:e.handleScroll},{default:q(()=>[ne("ul",{class:V(`${e.prefixCls}-list`)},[pe(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(D(),X("div",{key:1,class:V(`${e.prefixCls}-footer`)},[pe(e.$slots,"footer")],2)):je("v-if",!0)],2)}var Ud=oe(Ih,[["render",Ah]]);const zs=({popupVisible:e,defaultPopupVisible:n,emit:t})=>{var r;const i=te((r=n==null?void 0:n.value)!=null?r:!1),s=k(()=>{var a;return(a=e==null?void 0:e.value)!=null?a:i.value}),o=a=>{a!==s.value&&(i.value=a,t("update:popupVisible",a),t("popupVisibleChange",a))};return we(s,a=>{i.value!==a&&(i.value=a)}),{computedPopupVisible:s,handlePopupVisibleChange:o}},wh=Z({name:"Dropdown",components:{Trigger:Ws,DropdownPanel:Ud},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r,popupMaxHeight:i}=en(e),s=ie("dropdown"),{computedPopupVisible:o,handlePopupVisibleChange:a}=zs({defaultPopupVisible:t,popupVisible:r,emit:n});return qn(Us,Qe({popupMaxHeight:i,onOptionClick:(c,d)=>{n("select",c,d),e.hideOnSelect&&a(!1)}})),{prefixCls:s,computedPopupVisible:o,handlePopupVisibleChange:a}}});function Nh(e,n,t,r,i,s){const o=ue("DropdownPanel"),a=ue("Trigger");return D(),Ee(a,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:q(()=>[I(o,null,Mo({default:q(()=>[pe(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:q(()=>[pe(e.$slots,"footer")])}:void 0]),1024)]),default:q(()=>[pe(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var Kr=oe(wh,[["render",Nh]]);const Bh=Z({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("dropdown-option"),r=te(),i=k(()=>{var l,c,d;return(d=(c=e.value)!=null?c:(l=r.value)==null?void 0:l.textContent)!=null?d:void 0}),s=e.uninjectContext?void 0:Ne(Us,void 0),o=l=>{e.disabled||(n("click",l),s==null||s.onOptionClick(i.value,l))},a=k(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:a,liRef:r,handleClick:o}}});function Dh(e,n,t,r,i,s){return D(),X("li",{ref:"liRef",class:V([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:n[0]||(n[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[e.$slots.icon?(D(),X("span",{key:0,class:V(`${e.prefixCls}-icon`)},[pe(e.$slots,"icon")],2)):je("v-if",!0),ne("span",{class:V(`${e.prefixCls}-content`)},[pe(e.$slots,"default")],2),e.$slots.suffix?(D(),X("span",{key:1,class:V(`${e.prefixCls}-suffix`)},[pe(e.$slots,"suffix")],2)):je("v-if",!0)],2)}var ir=oe(Bh,[["render",Dh]]);const Hh=Z({name:"Dgroup",props:{title:String},setup(){return{prefixCls:ie("dropdown-group")}}});function Mh(e,n,t,r,i,s){return D(),X(De,null,[ne("li",{class:V(`${e.prefixCls}-title`)},[pe(e.$slots,"title",{},()=>[ze(dn(e.title),1)])],2),pe(e.$slots,"default")],64)}var no=oe(Hh,[["render",Mh]]);const Fh=Z({name:"IconRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-right`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),$h=["stroke-width","stroke-linecap","stroke-linejoin"],jh=ne("path",{d:"m16 39.513 15.556-15.557L16 8.4"},null,-1),Kh=[jh];function Wh(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Kh,14,$h)}var to=oe(Fh,[["render",Wh]]);const Uh=Object.assign(to,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+to.name,to)}}),zh=Z({name:"Dsubmenu",components:{Trigger:Ws,DropdownPanel:Ud,DropdownOption:ir,IconRight:Uh},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=en(e),i=ie("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:o}=zs({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:s,handlePopupVisibleChange:o}}});function Vh(e,n,t,r,i,s){const o=ue("IconRight"),a=ue("dropdown-option"),l=ue("dropdown-panel"),c=ue("Trigger");return D(),Ee(c,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:q(()=>[I(l,{class:V(`${e.prefixCls}-submenu`)},Mo({default:q(()=>[pe(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:q(()=>[pe(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:q(()=>[I(a,Dt(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),Mo({suffix:q(()=>[pe(e.$slots,"suffix",{},()=>[I(o)])]),default:q(()=>[pe(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:q(()=>[pe(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var ro=oe(zh,[["render",Vh]]);const qh=Z({name:"DropdownButton",components:{IconMore:kh,Button:Or,ButtonGroup:jr,Dropdown:Kr},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=en(e),i=ie("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:o}=zs({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:s,handleClick:c=>{n("click",c)},handleSelect:(c,d)=>{n("select",c,d)},handlePopupVisibleChange:o}}});function Gh(e,n,t,r,i,s){const o=ue("Button"),a=ue("IconMore"),l=ue("Dropdown"),c=ue("ButtonGroup");return D(),Ee(c,null,{default:q(()=>[I(o,Dt({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:q(()=>[pe(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),I(l,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:q(()=>[pe(e.$slots,"content")]),default:q(()=>[I(o,{size:e.size,type:e.type,disabled:e.disabled},{icon:q(()=>[pe(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[I(a)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var io=oe(qh,[["render",Gh]]);const Jh=Object.assign(Kr,{Option:ir,Group:no,Submenu:ro,Button:io,install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+Kr.name,Kr),e.component(t+ir.name,ir),e.component(t+no.name,no),e.component(t+ro.name,ro),e.component(t+io.name,io)}}),zd=Symbol("RadioGroup");var Wr=Z({name:"Radio",components:{IconHover:$d},props:{modelValue:{type:[String,Number,Boolean],default:void 0},defaultChecked:{type:Boolean,default:!1},value:{type:[String,Number,Boolean],default:!0},type:{type:String,default:"radio"},disabled:{type:Boolean,default:!1},uninjectGroupContext:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const r=ie("radio"),{modelValue:i}=en(e),s=e.uninjectGroupContext?void 0:Ne(zd,void 0),{mergedDisabled:o,eventHandlers:a}=Ks({disabled:Do(e,"disabled")}),l=te(null),c=te(e.defaultChecked),d=k(()=>(s==null?void 0:s.name)==="ArcoRadioGroup"),u=k(()=>{var h;return(h=s==null?void 0:s.type)!=null?h:e.type}),p=k(()=>(s==null?void 0:s.disabled)||o.value),v=k(()=>{var h,y;return d.value?(s==null?void 0:s.value)===((h=e.value)!=null?h:!0):ot(e.modelValue)?c.value:e.modelValue===((y=e.value)!=null?y:!0)});we(i,h=>{(ot(h)||Rd(h))&&(c.value=!1)}),we(v,(h,y)=>{h!==y&&(c.value=h,l.value&&(l.value.checked=h))});const T=h=>{var y,B;(B=(y=a.value)==null?void 0:y.onFocus)==null||B.call(y,h)},_=h=>{var y,B;(B=(y=a.value)==null?void 0:y.onBlur)==null||B.call(y,h)},R=h=>{h.stopPropagation()},S=h=>{var y,B,W,N,L;c.value=!0,d.value?s==null||s.handleChange((y=e.value)!=null?y:!0,h):(n("update:modelValue",(B=e.value)!=null?B:!0),n("change",(W=e.value)!=null?W:!0,h),(L=(N=a.value)==null?void 0:N.onChange)==null||L.call(N,h)),An(()=>{l.value&&l.value.checked!==v.value&&(l.value.checked=v.value)})},b=k(()=>[`${u.value==="button"?`${r}-button`:r}`,{[`${r}-checked`]:v.value,[`${r}-disabled`]:p.value}]),A=()=>I(De,null,[I(ue("icon-hover"),{class:`${r}-icon-hover`,disabled:p.value||v.value},{default:()=>[I("span",{class:`${r}-icon`},null)]}),t.default&&I("span",{class:`${r}-label`},[t.default()])]);return()=>{var h,y,B,W;return I("label",{class:b.value},[I("input",{ref:l,type:"radio",checked:v.value,value:e.value,class:`${r}-target`,disabled:p.value,onClick:R,onChange:S,onFocus:T,onBlur:_},null),u.value==="radio"?(W=(B=(y=t.radio)!=null?y:(h=s==null?void 0:s.slots)==null?void 0:h.radio)==null?void 0:B({checked:v.value,disabled:p.value}))!=null?W:A():I("span",{class:`${r}-button-content`},[t.default&&t.default()])])}}}),Ur=Z({name:"RadioGroup",props:{modelValue:{type:[String,Number,Boolean],default:void 0},defaultValue:{type:[String,Number,Boolean],default:""},type:{type:String,default:"radio"},size:{type:String},options:{type:Array},direction:{type:String,default:"horizontal"},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const r=ie("radio-group"),{size:i,type:s,disabled:o,modelValue:a}=en(e),{mergedDisabled:l,mergedSize:c,eventHandlers:d}=Ks({size:i,disabled:o}),u=te(e.defaultValue),p=k(()=>{var S;return(S=e.modelValue)!=null?S:u.value}),v=k(()=>{var S;return((S=e.options)!=null?S:[]).map(b=>Ht(b)||_e(b)?{label:b,value:b}:b)});qn(zd,Qe({name:"ArcoRadioGroup",value:p,size:c,type:s,disabled:l,slots:t,handleChange:(S,b)=>{var A,h;u.value=S,n("update:modelValue",S),n("change",S,b),(h=(A=d.value)==null?void 0:A.onChange)==null||h.call(A,b)}})),we(p,S=>{u.value!==S&&(u.value=S)}),we(a,S=>{(ot(S)||Rd(S))&&(u.value="")});const _=k(()=>[`${r}${e.type==="button"?"-button":""}`,`${r}-size-${c.value}`,`${r}-direction-${e.direction}`,{[`${r}-disabled`]:l.value}]),R=()=>v.value.map(S=>I(Wr,{key:S.value,value:S.value,disabled:S.disabled,modelValue:p.value===S.value},{default:()=>[t.label?t.label({data:S}):_r(S.label)?S.label():S.label]}));return()=>{var S;return I("span",{class:_.value},[v.value.length>0?R():(S=t.default)==null?void 0:S.call(t)])}}});const Zh=Object.assign(Wr,{Group:Ur,install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+Wr.name,Wr),e.component(t+Ur.name,Ur)}}),Yh=Z({name:"IconLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-left`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Xh=["stroke-width","stroke-linecap","stroke-linejoin"],Qh=ne("path",{d:"M32 8.4 16.444 23.956 32 39.513"},null,-1),eb=[Qh];function nb(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},eb,14,Xh)}var oo=oe(Yh,[["render",nb]]);const tb=Object.assign(oo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+oo.name,oo)}});function rb(e,n,t){return k(()=>!!(e[t]||n[t]))}function ib(e){const n=te(e);return[n,r=>{n.value=r}]}function ob(e,n){const{value:t}=en(n),[r,i]=ib(ot(t.value)?e:t.value);return we(t,o=>{ot(o)&&i(void 0)}),[k(()=>ot(t.value)?r.value:t.value),i,r]}const sb=Z({name:"IconLink",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-link`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),ab=["stroke-width","stroke-linecap","stroke-linejoin"],lb=ne("path",{d:"m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"},null,-1),cb=[lb];function db(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},cb,14,ab)}var so=oe(sb,[["render",db]]);const ub=Object.assign(so,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+so.name,so)}}),pb=Z({name:"Link",components:{IconLink:ub,IconLoading:js},props:{href:String,status:{type:String,default:"normal"},hoverable:{type:Boolean,default:!0},icon:Boolean,loading:Boolean,disabled:Boolean},emits:{click:e=>!0},setup(e,{slots:n,emit:t}){const r=ie("link"),i=rb(e,n,"icon"),s=a=>{if(e.disabled||e.loading){a.preventDefault();return}t("click",a)};return{cls:k(()=>[r,`${r}-status-${e.status}`,{[`${r}-disabled`]:e.disabled,[`${r}-loading`]:e.loading,[`${r}-hoverless`]:!e.hoverable,[`${r}-with-icon`]:e.loading||i.value}]),prefixCls:r,showIcon:i,handleClick:s}}}),fb=["href"];function mb(e,n,t,r,i,s){const o=ue("icon-loading"),a=ue("icon-link");return D(),X("a",{href:e.disabled?void 0:e.href,class:V(e.cls),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[e.loading||e.showIcon?(D(),X("span",{key:0,class:V(`${e.prefixCls}-icon`)},[e.loading?(D(),Ee(o,{key:0})):pe(e.$slots,"icon",{key:1},()=>[I(a)])],2)):je("v-if",!0),pe(e.$slots,"default")],10,fb)}var ao=oe(pb,[["render",mb]]);const vb=Object.assign(ao,{install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+ao.name,ao)}});var gb=Object.defineProperty,ml=Object.getOwnPropertySymbols,hb=Object.prototype.hasOwnProperty,bb=Object.prototype.propertyIsEnumerable,vl=(e,n,t)=>n in e?gb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,gl=(e,n)=>{for(var t in n||(n={}))hb.call(n,t)&&vl(e,t,n[t]);if(ml)for(var t of ml(n))bb.call(n,t)&&vl(e,t,n[t]);return e};const yb=Z({name:"Tooltip",components:{Trigger:Ws},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},content:String,position:{type:String,default:"top"},mini:{type:Boolean,default:!1},backgroundColor:{type:String},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const t=ie("tooltip"),r=te(e.defaultPopupVisible),i=k(()=>{var d;return(d=e.popupVisible)!=null?d:r.value}),s=d=>{r.value=d,n("update:popupVisible",d),n("popupVisibleChange",d)},o=k(()=>[`${t}-content`,e.contentClass,{[`${t}-mini`]:e.mini}]),a=k(()=>{if(e.backgroundColor||e.contentStyle)return gl({backgroundColor:e.backgroundColor},e.contentStyle)}),l=k(()=>[`${t}-popup-arrow`,e.arrowClass]),c=k(()=>{if(e.backgroundColor||e.arrowStyle)return gl({backgroundColor:e.backgroundColor},e.arrowStyle)});return{prefixCls:t,computedPopupVisible:i,contentCls:o,computedContentStyle:a,arrowCls:l,computedArrowStyle:c,handlePopupVisibleChange:s}}});function Sb(e,n,t,r,i,s){const o=ue("Trigger");return D(),Ee(o,{class:V(e.prefixCls),trigger:"hover",position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"show-arrow":"","content-class":e.contentCls,"content-style":e.computedContentStyle,"arrow-class":e.arrowCls,"arrow-style":e.computedArrowStyle,"popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",role:"tooltip",onPopupVisibleChange:e.handlePopupVisibleChange},{content:q(()=>[pe(e.$slots,"content",{},()=>[ze(dn(e.content),1)])]),default:q(()=>[pe(e.$slots,"default")]),_:3},8,["class","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var lo=oe(yb,[["render",Sb]]);const Vs=Object.assign(lo,{install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+lo.name,lo)}}),Eb=Z({name:"IconPlus",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-plus`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Tb=["stroke-width","stroke-linecap","stroke-linejoin"],_b=ne("path",{d:"M5 24h38M24 5v38"},null,-1),kb=[_b];function Ob(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},kb,14,Tb)}var co=oe(Eb,[["render",Ob]]);const Pb=Object.assign(co,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+co.name,co)}}),Cb=Z({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-drag-dot`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Rb=["stroke-width","stroke-linecap","stroke-linejoin"],Lb=ne("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),xb=ne("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),Ib=[Lb,xb];function Ab(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Ib,14,Rb)}var uo=oe(Cb,[["render",Ab]]);const wb=Object.assign(uo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+uo.name,uo)}}),Nb=Z({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-drag-dot-vertical`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Bb=["stroke-width","stroke-linecap","stroke-linejoin"],Db=ne("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),Hb=ne("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),Mb=[Db,Hb];function Fb(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Mb,14,Bb)}var po=oe(Nb,[["render",Fb]]);const $b=Object.assign(po,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+po.name,po)}});var jb=Z({name:"ResizeTrigger",components:{ResizeObserver:hv,IconDragDot:wb,IconDragDotVertical:$b},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:n}){const{direction:t,prefixCls:r}=en(e),i=k(()=>(t==null?void 0:t.value)==="horizontal");return{classNames:k(()=>[r.value,{[`${r.value}-horizontal`]:i.value,[`${r.value}-vertical`]:!i.value}]),onResize:a=>{n("resize",a)},isHorizontal:i}}});function Kb(e,n,t,r,i,s){const o=ue("IconDragDot"),a=ue("IconDragDotVertical"),l=ue("ResizeObserver");return D(),Ee(l,{onResize:e.onResize},{default:q(()=>[ne("div",{class:V(e.classNames)},[je(" @slot 自定义内容 "),pe(e.$slots,"default",{},()=>[ne("div",{class:V(`${e.prefixCls}-icon-wrapper`)},[je(" @slot 自定义 icon "),pe(e.$slots,"icon",{},()=>[e.isHorizontal?(D(),Ee(o,{key:0,class:V(`${e.prefixCls}-icon`)},null,8,["class"])):(D(),Ee(a,{key:1,class:V(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var Wb=oe(jb,[["render",Kb]]);const Ub=Z({name:"Message",components:{AIconHover:$d,IconInfoCircleFill:Nv,IconCheckCircleFill:$v,IconExclamationCircleFill:Vv,IconCloseCircleFill:Xv,IconClose:Rv,IconLoading:js},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:n}){const t=ie("message");let r=0;const i=()=>{n("close")},s=()=>{e.duration>0&&(r=window.setTimeout(i,e.duration))},o=()=>{r&&(window.clearTimeout(r),r=0)};return Ge(()=>{s()}),ct(()=>{e.resetOnUpdate&&(o(),s())}),dt(()=>{o()}),{handleMouseEnter:()=>{e.resetOnHover&&o()},handleMouseLeave:()=>{e.resetOnHover&&s()},prefixCls:t,handleClose:i}}});function zb(e,n,t,r,i,s){const o=ue("icon-info-circle-fill"),a=ue("icon-check-circle-fill"),l=ue("icon-exclamation-circle-fill"),c=ue("icon-close-circle-fill"),d=ue("icon-loading"),u=ue("icon-close"),p=ue("a-icon-hover");return D(),X("li",{role:"alert",class:V([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:n[1]||(n[1]=(...v)=>e.handleMouseEnter&&e.handleMouseEnter(...v)),onMouseleave:n[2]||(n[2]=(...v)=>e.handleMouseLeave&&e.handleMouseLeave(...v))},[e.showIcon&&!(e.type==="normal"&&!e.$slots.icon)?(D(),X("span",{key:0,class:V(`${e.prefixCls}-icon`)},[pe(e.$slots,"icon",{},()=>[e.type==="info"?(D(),Ee(o,{key:0})):e.type==="success"?(D(),Ee(a,{key:1})):e.type==="warning"?(D(),Ee(l,{key:2})):e.type==="error"?(D(),Ee(c,{key:3})):e.type==="loading"?(D(),Ee(d,{key:4})):je("v-if",!0)])],2)):je("v-if",!0),ne("span",{class:V(`${e.prefixCls}-content`)},[pe(e.$slots,"default")],2),e.closable?(D(),X("span",{key:1,class:V(`${e.prefixCls}-close-btn`),onClick:n[0]||(n[0]=(...v)=>e.handleClose&&e.handleClose(...v))},[I(p,null,{default:q(()=>[I(u)]),_:1})],2)):je("v-if",!0)],34)}var Vb=oe(Ub,[["render",zb]]);function qb(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Pt(e)}var Gb=Z({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,n){const t=ie("message-list"),{zIndex:r}=Wd("message",{runOnMounted:!0});return()=>{let i;return I(Ed,{class:[t,`${t}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:r.value},onAfterLeave:()=>n.emit("afterClose")},qb(i=e.messages.map(s=>{const o={default:Xa(s.content),icon:Xa(s.icon)};return I(Vb,{key:s.id,type:s.type,duration:s.duration,closable:s.closable,resetOnUpdate:s.resetOnUpdate,resetOnHover:s.resetOnHover,onClose:()=>n.emit("close",s.id)},o)}))?i:{default:()=>[i]})}}}),Jb=Object.defineProperty,Zb=Object.defineProperties,Yb=Object.getOwnPropertyDescriptors,hl=Object.getOwnPropertySymbols,Xb=Object.prototype.hasOwnProperty,Qb=Object.prototype.propertyIsEnumerable,bl=(e,n,t)=>n in e?Jb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ni=(e,n)=>{for(var t in n||(n={}))Xb.call(n,t)&&bl(e,t,n[t]);if(hl)for(var t of hl(n))Qb.call(n,t)&&bl(e,t,n[t]);return e},Vd=(e,n)=>Zb(e,Yb(n));class ey{constructor(n,t){this.messageCount=0,this.add=s=>{var o;this.messageCount++;const a=(o=s.id)!=null?o:`__arco_message_${this.messageCount}`;if(this.messageIds.has(a))return this.update(a,s);const l=Qe(ni({id:a},s));return this.messages.value.push(l),this.messageIds.add(a),{close:()=>this.remove(a)}},this.update=(s,o)=>{for(let a=0;a<this.messages.value.length;a++)if(this.messages.value[a].id===s){const l=!ot(o.duration);Object.assign(this.messages.value[a],Vd(ni({},o),{id:s,resetOnUpdate:l}));break}return{close:()=>this.remove(s)}},this.remove=s=>{for(let o=0;o<this.messages.value.length;o++){const a=this.messages.value[o];if(a.id===s){_r(a.onClose)&&a.onClose(s),this.messages.value.splice(o,1),this.messageIds.delete(s);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{this.messages.value.length===0&&this.container&&(Ua(null,this.container),document.body.removeChild(this.container),this.container=null,Tt[this.position]=void 0)};const{position:r="top"}=n;this.container=yv("message"),this.messageIds=new Set,this.messages=te([]),this.position=r;const i=I(Gb,{messages:this.messages.value,position:r,onClose:this.remove,onAfterClose:this.destroy});(t??rn._context)&&(i.appContext=t??rn._context),Ua(i,this.container),document.body.appendChild(this.container)}}const Tt={},qd=[...Qv,"loading","normal"],zr=qd.reduce((e,n)=>(e[n]=(t,r)=>{Ht(t)&&(t={content:t});const i=ni({type:n},t),{position:s="top"}=i;return Tt[s]||(Tt[s]=new ey(i,r)),Tt[s].add(i)},e),{});zr.clear=e=>{var n;e?(n=Tt[e])==null||n.clear():Object.values(Tt).forEach(t=>t==null?void 0:t.clear())};const rn=Vd(ni({},zr),{install:e=>{const n={clear:zr.clear};for(const t of qd)n[t]=(r,i=e._context)=>zr[t](r,i);e.config.globalProperties.$message=n},_context:null});function Gd(e){const n=Ht(e)?parseFloat(e):e;let t="";return _e(e)||String(n)===e?t=n>1?"px":"%":t="px",{size:n,unit:t,isPx:t==="px"}}function Hr({size:e,defaultSize:n,containerSize:t}){const r=Gd(e??n);return r.isPx?r.size:r.size*t}function ny(e,n){return parseFloat(e)/parseFloat(n)}const ty=Z({name:"Split",components:{ResizeTrigger:Wb},props:{component:{type:String,default:"div"},direction:{type:String,default:"horizontal"},size:{type:[Number,String],default:void 0},defaultSize:{type:[Number,String],default:.5},min:{type:[Number,String]},max:{type:[Number,String]},disabled:{type:Boolean,default:!1}},emits:{moveStart:e=>!0,moving:e=>!0,moveEnd:e=>!0,"update:size":e=>!0},setup(e,{emit:n}){const{direction:t,size:r,defaultSize:i,min:s,max:o}=en(e),a=te(0),l=te(),c=ie("split"),[d,u]=ob(i.value,Qe({value:r})),p=k(()=>Gd(d.value)),v=k(()=>t.value==="horizontal"),T=k(()=>[c,{[`${c}-horizontal`]:v.value,[`${c}-vertical`]:!v.value}]),_=k(()=>{const{size:L,unit:M,isPx:G}=p.value;return{flex:`0 0 calc(${G?L:L*100}${M} - ${a.value/2}px)`}}),R={startPageX:0,startPageY:0,startContainerSize:0,startSize:0};async function S(){const L=()=>{var M,G;return v.value?(M=l.value)==null?void 0:M.clientWidth:((G=l.value)==null?void 0:G.clientHeight)||0};return(!l.value||L())&&await An(),L()}function b(L,M){if(!M)return;const G=p.value.isPx?`${L}px`:ny(L,M);d.value!==G&&(u(G),n("update:size",G))}function A(L,M){const G=Hr({size:L,containerSize:M}),K=Hr({size:s.value,defaultSize:"0px",containerSize:M}),se=Hr({size:o.value,defaultSize:`${M}px`,containerSize:M});let ge=G;return ge=Math.max(ge,K),ge=Math.min(ge,se),ge}function h({startContainerSize:L,startSize:M,startPosition:G,endPosition:K}){const se=Hr({size:M,containerSize:L});return A(`${se+(K-G)}px`,L)}function y(L){n("moving",L);const M=v.value?h({startContainerSize:R.startContainerSize,startSize:R.startSize,startPosition:R.startPageX,endPosition:L.pageX}):h({startContainerSize:R.startContainerSize,startSize:R.startSize,startPosition:R.startPageY,endPosition:L.pageY});b(M,R.startContainerSize)}function B(L){st(window,"mousemove",y),st(window,"mouseup",B),st(window,"contextmenu",B),document.body.style.cursor="default",n("moveEnd",L)}async function W(L){n("moveStart",L),R.startPageX=L.pageX,R.startPageY=L.pageY,R.startContainerSize=await S(),R.startSize=d.value,xn(window,"mousemove",y),xn(window,"mouseup",B),xn(window,"contextmenu",B),document.body.style.cursor=v.value?"col-resize":"row-resize"}function N(L){const{width:M,height:G}=L.contentRect;a.value=v.value?M:G}return Ge(async()=>{const L=await S(),M=A(d.value,L);b(M,L)}),{prefixCls:c,classNames:T,isHorizontal:v,wrapperRef:l,onMoveStart:W,onTriggerResize:N,firstPaneStyles:_}}});function ry(e,n,t,r,i,s){const o=ue("ResizeTrigger");return D(),Ee(ed(e.component),{ref:"wrapperRef",class:V(e.classNames)},{default:q(()=>[ne("div",{class:V([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-first`]),style:ve(e.firstPaneStyles)},[pe(e.$slots,"first")],6),e.disabled?je("v-if",!0):(D(),Ee(o,{key:0,"prefix-cls":`${e.prefixCls}-trigger`,direction:e.isHorizontal?"vertical":"horizontal",onMousedown:e.onMoveStart,onResize:e.onTriggerResize},{default:q(()=>[pe(e.$slots,"resize-trigger")]),icon:q(()=>[pe(e.$slots,"resize-trigger-icon")]),_:3},8,["prefix-cls","direction","onMousedown","onResize"])),ne("div",{class:V([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-second`])},[pe(e.$slots,"second")],2)]),_:3},8,["class"])}var fo=oe(ty,[["render",ry]]);const iy=Object.assign(fo,{install:(e,n)=>{_n(e,n);const t=Tn(n);e.component(t+fo.name,fo)}}),oy=Z({name:"IconDelete",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-delete`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),sy=["stroke-width","stroke-linecap","stroke-linejoin"],ay=ne("path",{d:"M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15"},null,-1),ly=[ay];function cy(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},ly,14,sy)}var mo=oe(oy,[["render",cy]]);const dy=Object.assign(mo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+mo.name,mo)}}),uy=Z({name:"IconFile",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-file`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),py=["stroke-width","stroke-linecap","stroke-linejoin"],fy=ne("path",{d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"},null,-1),my=[fy];function vy(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},my,14,py)}var vo=oe(uy,[["render",vy]]);const gy=Object.assign(vo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+vo.name,vo)}}),hy=Z({name:"IconCopy",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-copy`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),by=["stroke-width","stroke-linecap","stroke-linejoin"],yy=ne("path",{d:"M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"},null,-1),Sy=[yy];function Ey(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Sy,14,by)}var go=oe(hy,[["render",Ey]]);const Ty=Object.assign(go,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+go.name,go)}}),_y=Z({name:"IconEdit",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-edit`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),ky=["stroke-width","stroke-linecap","stroke-linejoin"],Oy=ne("path",{d:"m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"},null,-1),Py=[Oy];function Cy(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Py,14,ky)}var ho=oe(_y,[["render",Cy]]);const Ry=Object.assign(ho,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ho.name,ho)}});function bo(e){return an?utools.shellOpenExternal(e):window.open(e)}const Ly="modulepreload",xy=function(e,n){return new URL(e,n).href},yl={},Vr=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=xy(s,r),s in yl)return;yl[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const u=i[d];if(u.href===s&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ly,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())};var Iy=typeof global=="object"&&global&&global.Object===Object&&global;const Jd=Iy;var Ay=typeof self=="object"&&self&&self.Object===Object&&self,wy=Jd||Ay||Function("return this")();const vn=wy;var Ny=vn.Symbol;const En=Ny;var Zd=Object.prototype,By=Zd.hasOwnProperty,Dy=Zd.toString,Vt=En?En.toStringTag:void 0;function Hy(e){var n=By.call(e,Vt),t=e[Vt];try{e[Vt]=void 0;var r=!0}catch{}var i=Dy.call(e);return r&&(n?e[Vt]=t:delete e[Vt]),i}var My=Object.prototype,Fy=My.toString;function $y(e){return Fy.call(e)}var jy="[object Null]",Ky="[object Undefined]",Sl=En?En.toStringTag:void 0;function Mt(e){return e==null?e===void 0?Ky:jy:Sl&&Sl in Object(e)?Hy(e):$y(e)}function Ft(e){return e!=null&&typeof e=="object"}var Wy="[object Symbol]";function Yd(e){return typeof e=="symbol"||Ft(e)&&Mt(e)==Wy}function Uy(e,n){for(var t=-1,r=e==null?0:e.length,i=Array(r);++t<r;)i[t]=n(e[t],t,e);return i}var zy=Array.isArray;const $t=zy;var Vy=1/0,El=En?En.prototype:void 0,Tl=El?El.toString:void 0;function Xd(e){if(typeof e=="string")return e;if($t(e))return Uy(e,Xd)+"";if(Yd(e))return Tl?Tl.call(e):"";var n=e+"";return n=="0"&&1/e==-Vy?"-0":n}var qy=/\s/;function Gy(e){for(var n=e.length;n--&&qy.test(e.charAt(n)););return n}var Jy=/^\s+/;function Zy(e){return e&&e.slice(0,Gy(e)+1).replace(Jy,"")}function wn(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var _l=0/0,Yy=/^[-+]0x[0-9a-f]+$/i,Xy=/^0b[01]+$/i,Qy=/^0o[0-7]+$/i,eS=parseInt;function kl(e){if(typeof e=="number")return e;if(Yd(e))return _l;if(wn(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=wn(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Zy(e);var t=Xy.test(e);return t||Qy.test(e)?eS(e.slice(2),t?2:8):Yy.test(e)?_l:+e}var nS="[object AsyncFunction]",tS="[object Function]",rS="[object GeneratorFunction]",iS="[object Proxy]";function Qd(e){if(!wn(e))return!1;var n=Mt(e);return n==tS||n==rS||n==nS||n==iS}var oS=vn["__core-js_shared__"];const yo=oS;var Ol=function(){var e=/[^.]+$/.exec(yo&&yo.keys&&yo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function sS(e){return!!Ol&&Ol in e}var aS=Function.prototype,lS=aS.toString;function ut(e){if(e!=null){try{return lS.call(e)}catch{}try{return e+""}catch{}}return""}var cS=/[\\^$.*+?()[\]{}|]/g,dS=/^\[object .+?Constructor\]$/,uS=Function.prototype,pS=Object.prototype,fS=uS.toString,mS=pS.hasOwnProperty,vS=RegExp("^"+fS.call(mS).replace(cS,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function gS(e){if(!wn(e)||sS(e))return!1;var n=Qd(e)?vS:dS;return n.test(ut(e))}function hS(e,n){return e==null?void 0:e[n]}function pt(e,n){var t=hS(e,n);return gS(t)?t:void 0}var bS=pt(vn,"WeakMap");const es=bS;var Pl=Object.create,yS=function(){function e(){}return function(n){if(!wn(n))return{};if(Pl)return Pl(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const SS=yS;function eu(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var ES=function(){try{var e=pt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Cl=ES;function TS(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var _S=9007199254740991,kS=/^(?:0|[1-9]\d*)$/;function OS(e,n){var t=typeof e;return n=n??_S,!!n&&(t=="number"||t!="symbol"&&kS.test(e))&&e>-1&&e%1==0&&e<n}function nu(e,n,t){n=="__proto__"&&Cl?Cl(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function tu(e,n){return e===n||e!==e&&n!==n}var PS=Object.prototype,CS=PS.hasOwnProperty;function ru(e,n,t){var r=e[n];(!(CS.call(e,n)&&tu(r,t))||t===void 0&&!(n in e))&&nu(e,n,t)}function Si(e,n,t,r){var i=!t;t||(t={});for(var s=-1,o=n.length;++s<o;){var a=n[s],l=r?r(t[a],e[a],a,t,e):void 0;l===void 0&&(l=e[a]),i?nu(t,a,l):ru(t,a,l)}return t}var RS=9007199254740991;function iu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=RS}function ou(e){return e!=null&&iu(e.length)&&!Qd(e)}var LS=Object.prototype;function qs(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||LS;return e===t}function xS(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var IS="[object Arguments]";function Rl(e){return Ft(e)&&Mt(e)==IS}var su=Object.prototype,AS=su.hasOwnProperty,wS=su.propertyIsEnumerable,NS=Rl(function(){return arguments}())?Rl:function(e){return Ft(e)&&AS.call(e,"callee")&&!wS.call(e,"callee")};const au=NS;function BS(){return!1}var lu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ll=lu&&typeof module=="object"&&module&&!module.nodeType&&module,DS=Ll&&Ll.exports===lu,xl=DS?vn.Buffer:void 0,HS=xl?xl.isBuffer:void 0,MS=HS||BS;const cu=MS;var FS="[object Arguments]",$S="[object Array]",jS="[object Boolean]",KS="[object Date]",WS="[object Error]",US="[object Function]",zS="[object Map]",VS="[object Number]",qS="[object Object]",GS="[object RegExp]",JS="[object Set]",ZS="[object String]",YS="[object WeakMap]",XS="[object ArrayBuffer]",QS="[object DataView]",eE="[object Float32Array]",nE="[object Float64Array]",tE="[object Int8Array]",rE="[object Int16Array]",iE="[object Int32Array]",oE="[object Uint8Array]",sE="[object Uint8ClampedArray]",aE="[object Uint16Array]",lE="[object Uint32Array]",Re={};Re[eE]=Re[nE]=Re[tE]=Re[rE]=Re[iE]=Re[oE]=Re[sE]=Re[aE]=Re[lE]=!0;Re[FS]=Re[$S]=Re[XS]=Re[jS]=Re[QS]=Re[KS]=Re[WS]=Re[US]=Re[zS]=Re[VS]=Re[qS]=Re[GS]=Re[JS]=Re[ZS]=Re[YS]=!1;function cE(e){return Ft(e)&&iu(e.length)&&!!Re[Mt(e)]}function Gs(e){return function(n){return e(n)}}var du=typeof exports=="object"&&exports&&!exports.nodeType&&exports,or=du&&typeof module=="object"&&module&&!module.nodeType&&module,dE=or&&or.exports===du,So=dE&&Jd.process,uE=function(){try{var e=or&&or.require&&or.require("util").types;return e||So&&So.binding&&So.binding("util")}catch{}}();const Lt=uE;var Il=Lt&&Lt.isTypedArray,pE=Il?Gs(Il):cE;const fE=pE;var mE=Object.prototype,vE=mE.hasOwnProperty;function uu(e,n){var t=$t(e),r=!t&&au(e),i=!t&&!r&&cu(e),s=!t&&!r&&!i&&fE(e),o=t||r||i||s,a=o?xS(e.length,String):[],l=a.length;for(var c in e)(n||vE.call(e,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||OS(c,l)))&&a.push(c);return a}function pu(e,n){return function(t){return e(n(t))}}var gE=pu(Object.keys,Object);const hE=gE;var bE=Object.prototype,yE=bE.hasOwnProperty;function SE(e){if(!qs(e))return hE(e);var n=[];for(var t in Object(e))yE.call(e,t)&&t!="constructor"&&n.push(t);return n}function Js(e){return ou(e)?uu(e):SE(e)}function EE(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var TE=Object.prototype,_E=TE.hasOwnProperty;function kE(e){if(!wn(e))return EE(e);var n=qs(e),t=[];for(var r in e)r=="constructor"&&(n||!_E.call(e,r))||t.push(r);return t}function Zs(e){return ou(e)?uu(e,!0):kE(e)}var OE=pt(Object,"create");const hr=OE;function PE(){this.__data__=hr?hr(null):{},this.size=0}function CE(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var RE="__lodash_hash_undefined__",LE=Object.prototype,xE=LE.hasOwnProperty;function IE(e){var n=this.__data__;if(hr){var t=n[e];return t===RE?void 0:t}return xE.call(n,e)?n[e]:void 0}var AE=Object.prototype,wE=AE.hasOwnProperty;function NE(e){var n=this.__data__;return hr?n[e]!==void 0:wE.call(n,e)}var BE="__lodash_hash_undefined__";function DE(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=hr&&n===void 0?BE:n,this}function at(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}at.prototype.clear=PE;at.prototype.delete=CE;at.prototype.get=IE;at.prototype.has=NE;at.prototype.set=DE;function HE(){this.__data__=[],this.size=0}function Ei(e,n){for(var t=e.length;t--;)if(tu(e[t][0],n))return t;return-1}var ME=Array.prototype,FE=ME.splice;function $E(e){var n=this.__data__,t=Ei(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():FE.call(n,t,1),--this.size,!0}function jE(e){var n=this.__data__,t=Ei(n,e);return t<0?void 0:n[t][1]}function KE(e){return Ei(this.__data__,e)>-1}function WE(e,n){var t=this.__data__,r=Ei(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function Bn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Bn.prototype.clear=HE;Bn.prototype.delete=$E;Bn.prototype.get=jE;Bn.prototype.has=KE;Bn.prototype.set=WE;var UE=pt(vn,"Map");const br=UE;function zE(){this.size=0,this.__data__={hash:new at,map:new(br||Bn),string:new at}}function VE(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Ti(e,n){var t=e.__data__;return VE(n)?t[typeof n=="string"?"string":"hash"]:t.map}function qE(e){var n=Ti(this,e).delete(e);return this.size-=n?1:0,n}function GE(e){return Ti(this,e).get(e)}function JE(e){return Ti(this,e).has(e)}function ZE(e,n){var t=Ti(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function jt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}jt.prototype.clear=zE;jt.prototype.delete=qE;jt.prototype.get=GE;jt.prototype.has=JE;jt.prototype.set=ZE;function YE(e){return e==null?"":Xd(e)}function _i(e,n){for(var t=-1,r=n.length,i=e.length;++t<r;)e[i+t]=n[t];return e}var Al=En?En.isConcatSpreadable:void 0;function XE(e){return $t(e)||au(e)||!!(Al&&e&&e[Al])}function fu(e,n,t,r,i){var s=-1,o=e.length;for(t||(t=XE),i||(i=[]);++s<o;){var a=e[s];n>0&&t(a)?n>1?fu(a,n-1,t,r,i):_i(i,a):r||(i[i.length]=a)}return i}var QE=pu(Object.getPrototypeOf,Object);const mu=QE;function eT(){this.__data__=new Bn,this.size=0}function nT(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function tT(e){return this.__data__.get(e)}function rT(e){return this.__data__.has(e)}var iT=200;function oT(e,n){var t=this.__data__;if(t instanceof Bn){var r=t.__data__;if(!br||r.length<iT-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new jt(r)}return t.set(e,n),this.size=t.size,this}function Kt(e){var n=this.__data__=new Bn(e);this.size=n.size}Kt.prototype.clear=eT;Kt.prototype.delete=nT;Kt.prototype.get=tT;Kt.prototype.has=rT;Kt.prototype.set=oT;function sT(e,n){return e&&Si(n,Js(n),e)}function aT(e,n){return e&&Si(n,Zs(n),e)}var vu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wl=vu&&typeof module=="object"&&module&&!module.nodeType&&module,lT=wl&&wl.exports===vu,Nl=lT?vn.Buffer:void 0,Bl=Nl?Nl.allocUnsafe:void 0;function cT(e,n){if(n)return e.slice();var t=e.length,r=Bl?Bl(t):new e.constructor(t);return e.copy(r),r}function dT(e,n){for(var t=-1,r=e==null?0:e.length,i=0,s=[];++t<r;){var o=e[t];n(o,t,e)&&(s[i++]=o)}return s}function gu(){return[]}var uT=Object.prototype,pT=uT.propertyIsEnumerable,Dl=Object.getOwnPropertySymbols,fT=Dl?function(e){return e==null?[]:(e=Object(e),dT(Dl(e),function(n){return pT.call(e,n)}))}:gu;const Ys=fT;function mT(e,n){return Si(e,Ys(e),n)}var vT=Object.getOwnPropertySymbols,gT=vT?function(e){for(var n=[];e;)_i(n,Ys(e)),e=mu(e);return n}:gu;const hu=gT;function hT(e,n){return Si(e,hu(e),n)}function bu(e,n,t){var r=n(e);return $t(e)?r:_i(r,t(e))}function bT(e){return bu(e,Js,Ys)}function yT(e){return bu(e,Zs,hu)}var ST=pt(vn,"DataView");const ns=ST;var ET=pt(vn,"Promise");const ts=ET;var TT=pt(vn,"Set");const rs=TT;var Hl="[object Map]",_T="[object Object]",Ml="[object Promise]",Fl="[object Set]",$l="[object WeakMap]",jl="[object DataView]",kT=ut(ns),OT=ut(br),PT=ut(ts),CT=ut(rs),RT=ut(es),Qn=Mt;(ns&&Qn(new ns(new ArrayBuffer(1)))!=jl||br&&Qn(new br)!=Hl||ts&&Qn(ts.resolve())!=Ml||rs&&Qn(new rs)!=Fl||es&&Qn(new es)!=$l)&&(Qn=function(e){var n=Mt(e),t=n==_T?e.constructor:void 0,r=t?ut(t):"";if(r)switch(r){case kT:return jl;case OT:return Hl;case PT:return Ml;case CT:return Fl;case RT:return $l}return n});const Xs=Qn;var LT=Object.prototype,xT=LT.hasOwnProperty;function IT(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&xT.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var AT=vn.Uint8Array;const Kl=AT;function Qs(e){var n=new e.constructor(e.byteLength);return new Kl(n).set(new Kl(e)),n}function wT(e,n){var t=n?Qs(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var NT=/\w*$/;function BT(e){var n=new e.constructor(e.source,NT.exec(e));return n.lastIndex=e.lastIndex,n}var Wl=En?En.prototype:void 0,Ul=Wl?Wl.valueOf:void 0;function DT(e){return Ul?Object(Ul.call(e)):{}}function HT(e,n){var t=n?Qs(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var MT="[object Boolean]",FT="[object Date]",$T="[object Map]",jT="[object Number]",KT="[object RegExp]",WT="[object Set]",UT="[object String]",zT="[object Symbol]",VT="[object ArrayBuffer]",qT="[object DataView]",GT="[object Float32Array]",JT="[object Float64Array]",ZT="[object Int8Array]",YT="[object Int16Array]",XT="[object Int32Array]",QT="[object Uint8Array]",e_="[object Uint8ClampedArray]",n_="[object Uint16Array]",t_="[object Uint32Array]";function r_(e,n,t){var r=e.constructor;switch(n){case VT:return Qs(e);case MT:case FT:return new r(+e);case qT:return wT(e,t);case GT:case JT:case ZT:case YT:case XT:case QT:case e_:case n_:case t_:return HT(e,t);case $T:return new r;case jT:case UT:return new r(e);case KT:return BT(e);case WT:return new r;case zT:return DT(e)}}function i_(e){return typeof e.constructor=="function"&&!qs(e)?SS(mu(e)):{}}var o_="[object Map]";function s_(e){return Ft(e)&&Xs(e)==o_}var zl=Lt&&Lt.isMap,a_=zl?Gs(zl):s_;const l_=a_;var c_="[object Set]";function d_(e){return Ft(e)&&Xs(e)==c_}var Vl=Lt&&Lt.isSet,u_=Vl?Gs(Vl):d_;const p_=u_;var f_=1,m_=2,v_=4,yu="[object Arguments]",g_="[object Array]",h_="[object Boolean]",b_="[object Date]",y_="[object Error]",Su="[object Function]",S_="[object GeneratorFunction]",E_="[object Map]",T_="[object Number]",Eu="[object Object]",__="[object RegExp]",k_="[object Set]",O_="[object String]",P_="[object Symbol]",C_="[object WeakMap]",R_="[object ArrayBuffer]",L_="[object DataView]",x_="[object Float32Array]",I_="[object Float64Array]",A_="[object Int8Array]",w_="[object Int16Array]",N_="[object Int32Array]",B_="[object Uint8Array]",D_="[object Uint8ClampedArray]",H_="[object Uint16Array]",M_="[object Uint32Array]",Pe={};Pe[yu]=Pe[g_]=Pe[R_]=Pe[L_]=Pe[h_]=Pe[b_]=Pe[x_]=Pe[I_]=Pe[A_]=Pe[w_]=Pe[N_]=Pe[E_]=Pe[T_]=Pe[Eu]=Pe[__]=Pe[k_]=Pe[O_]=Pe[P_]=Pe[B_]=Pe[D_]=Pe[H_]=Pe[M_]=!0;Pe[y_]=Pe[Su]=Pe[C_]=!1;function qr(e,n,t,r,i,s){var o,a=n&f_,l=n&m_,c=n&v_;if(t&&(o=i?t(e,r,i,s):t(e)),o!==void 0)return o;if(!wn(e))return e;var d=$t(e);if(d){if(o=IT(e),!a)return eu(e,o)}else{var u=Xs(e),p=u==Su||u==S_;if(cu(e))return cT(e,a);if(u==Eu||u==yu||p&&!i){if(o=l||p?{}:i_(e),!a)return l?hT(e,aT(o,e)):mT(e,sT(o,e))}else{if(!Pe[u])return i?e:{};o=r_(e,u,a)}}s||(s=new Kt);var v=s.get(e);if(v)return v;s.set(e,o),p_(e)?e.forEach(function(R){o.add(qr(R,n,t,R,e,s))}):l_(e)&&e.forEach(function(R,S){o.set(S,qr(R,n,t,S,e,s))});var T=c?l?yT:bT:l?Zs:Js,_=d?void 0:T(e);return TS(_||e,function(R,S){_&&(S=R,R=e[S]),ru(o,S,qr(R,n,t,S,e,s))}),o}var F_=1,$_=4;function j_(e){return qr(e,F_|$_)}function K_(){var e=arguments.length;if(!e)return[];for(var n=Array(e-1),t=arguments[0],r=e;r--;)n[r-1]=arguments[r];return _i($t(t)?eu(t):[t],fu(n,1))}var W_=function(){return vn.Date.now()};const Eo=W_;var U_="Expected a function",z_=Math.max,V_=Math.min;function Tu(e,n,t){var r,i,s,o,a,l,c=0,d=!1,u=!1,p=!0;if(typeof e!="function")throw new TypeError(U_);n=kl(n)||0,wn(t)&&(d=!!t.leading,u="maxWait"in t,s=u?z_(kl(t.maxWait)||0,n):s,p="trailing"in t?!!t.trailing:p);function v(B){var W=r,N=i;return r=i=void 0,c=B,o=e.apply(N,W),o}function T(B){return c=B,a=setTimeout(S,n),d?v(B):o}function _(B){var W=B-l,N=B-c,L=n-W;return u?V_(L,s-N):L}function R(B){var W=B-l,N=B-c;return l===void 0||W>=n||W<0||u&&N>=s}function S(){var B=Eo();if(R(B))return b(B);a=setTimeout(S,_(B))}function b(B){return a=void 0,p&&r?v(B):(r=i=void 0,o)}function A(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function h(){return a===void 0?o:b(Eo())}function y(){var B=Eo(),W=R(B);if(r=arguments,i=this,l=B,W){if(a===void 0)return T(l);if(u)return clearTimeout(a),a=setTimeout(S,n),v(l)}return a===void 0&&(a=setTimeout(S,n)),o}return y.cancel=A,y.flush=h,y}var q_="Expected a function";function G_(e,n,t){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(q_);return wn(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),Tu(e,n,{leading:r,maxWait:n,trailing:i})}var J_=0;function Z_(e){var n=++J_;return YE(e)+n}var lt;(function(e){e.start="/**",e.nostart="/***",e.delim="*",e.end="*/"})(lt||(lt={}));function Y_(e){return/^\s+$/.test(e)}function X_(e){const n=e.match(/\r+$/);return n==null?["",e]:[e.slice(-n[0].length),e.slice(0,-n[0].length)]}function _t(e){const n=e.match(/^\s+/);return n==null?["",e]:[e.slice(0,n[0].length),e.slice(n[0].length)]}function Q_(e){return e.split(/\n/)}function ek(e={}){return Object.assign({tag:"",name:"",type:"",optional:!1,description:"",problems:[],source:[]},e)}function nk(e={}){return Object.assign({start:"",delimiter:"",postDelimiter:"",tag:"",postTag:"",name:"",postName:"",type:"",postType:"",description:"",end:"",lineEnd:""},e)}const tk=/^@\S+/;function rk({fence:e="```"}={}){const n=ik(e),t=(r,i)=>n(r)?!i:i;return function(i){const s=[[]];let o=!1;for(const a of i)tk.test(a.tokens.description)&&!o?s.push([a]):s[s.length-1].push(a),o=t(a.tokens.description,o);return s}}function ik(e){return typeof e=="string"?n=>n.split(e).length%2===0:e}function ok({startLine:e=0,markers:n=lt}={}){let t=null,r=e;return function(s){let o=s;const a=nk();if([a.lineEnd,o]=X_(o),[a.start,o]=_t(o),t===null&&o.startsWith(n.start)&&!o.startsWith(n.nostart)&&(t=[],a.delimiter=o.slice(0,n.start.length),o=o.slice(n.start.length),[a.postDelimiter,o]=_t(o)),t===null)return r++,null;const l=o.trimRight().endsWith(n.end);if(a.delimiter===""&&o.startsWith(n.delim)&&!o.startsWith(n.end)&&(a.delimiter=n.delim,o=o.slice(n.delim.length),[a.postDelimiter,o]=_t(o)),l){const c=o.trimRight();a.end=o.slice(c.length-n.end.length),o=c.slice(0,-n.end.length)}if(a.description=o,t.push({number:r,source:s,tokens:a}),r++,l){const c=t.slice();return t=null,c}return null}}function sk({tokenizers:e}){return function(t){var r;let i=ek({source:t});for(const s of e)if(i=s(i),!((r=i.problems[i.problems.length-1])===null||r===void 0)&&r.critical)break;return i}}function ak(){return e=>{const{tokens:n}=e.source[0],t=n.description.match(/\s*(@(\S+))(\s*)/);return t===null?(e.problems.push({code:"spec:tag:prefix",message:'tag should start with "@" symbol',line:e.source[0].number,critical:!0}),e):(n.tag=t[1],n.postTag=t[3],n.description=n.description.slice(t[0].length),e.tag=t[2],e)}}function lk(e="compact"){const n=dk(e);return t=>{let r=0,i=[];for(const[a,{tokens:l}]of t.source.entries()){let c="";if(a===0&&l.description[0]!=="{")return t;for(const d of l.description)if(d==="{"&&r++,d==="}"&&r--,c+=d,r===0)break;if(i.push([l,c]),r===0)break}if(r!==0)return t.problems.push({code:"spec:type:unpaired-curlies",message:"unpaired curlies",line:t.source[0].number,critical:!0}),t;const s=[],o=i[0][0].postDelimiter.length;for(const[a,[l,c]]of i.entries())l.type=c,a>0&&(l.type=l.postDelimiter.slice(o)+c,l.postDelimiter=l.postDelimiter.slice(0,o)),[l.postType,l.description]=_t(l.description.slice(c.length)),s.push(l.type);return s[0]=s[0].slice(1),s[s.length-1]=s[s.length-1].slice(0,-1),t.type=n(s),t}}const ck=e=>e.trim();function dk(e){return e==="compact"?n=>n.map(ck).join(""):e==="preserve"?n=>n.join(`
`):e}const uk=e=>e&&e.startsWith('"')&&e.endsWith('"');function pk(){const e=(n,{tokens:t},r)=>t.type===""?n:r;return n=>{const{tokens:t}=n.source[n.source.reduce(e,0)],r=t.description.trimLeft(),i=r.split('"');if(i.length>1&&i[0]===""&&i.length%2===1)return n.name=i[1],t.name=`"${i[1]}"`,[t.postName,t.description]=_t(r.slice(t.name.length)),n;let s=0,o="",a=!1,l;for(const d of r){if(s===0&&Y_(d))break;d==="["&&s++,d==="]"&&s--,o+=d}if(s!==0)return n.problems.push({code:"spec:name:unpaired-brackets",message:"unpaired brackets",line:n.source[0].number,critical:!0}),n;const c=o;if(o[0]==="["&&o[o.length-1]==="]"){a=!0,o=o.slice(1,-1);const d=o.split("=");if(o=d[0].trim(),d[1]!==void 0&&(l=d.slice(1).join("=").trim()),o==="")return n.problems.push({code:"spec:name:empty-name",message:"empty name",line:n.source[0].number,critical:!0}),n;if(l==="")return n.problems.push({code:"spec:name:empty-default",message:"empty default value",line:n.source[0].number,critical:!0}),n;if(!uk(l)&&/=(?!>)/.test(l))return n.problems.push({code:"spec:name:invalid-default",message:"invalid default value syntax",line:n.source[0].number,critical:!0}),n}return n.optional=a,n.name=o,t.name=c,l!==void 0&&(n.default=l),[t.postName,t.description]=_t(r.slice(t.name.length)),n}}function fk(e="compact",n=lt){const t=_u(e);return r=>(r.description=t(r.source,n),r)}function _u(e){return e==="compact"?mk:e==="preserve"?hk:e}function mk(e,n=lt){return e.map(({tokens:{description:t}})=>t.trim()).filter(t=>t!=="").join(" ")}const vk=(e,{tokens:n},t)=>n.type===""?e:t,gk=({tokens:e})=>(e.delimiter===""?e.start:e.postDelimiter.slice(1))+e.description;function hk(e,n=lt){if(e.length===0)return"";e[0].tokens.description===""&&e[0].tokens.delimiter===n.start&&(e=e.slice(1));const t=e[e.length-1];return t!==void 0&&t.tokens.description===""&&t.tokens.end.endsWith(n.end)&&(e=e.slice(0,-1)),e=e.slice(e.reduce(vk,0)),e.map(gk).join(`
`)}function bk({startLine:e=0,fence:n="```",spacing:t="compact",markers:r=lt,tokenizers:i=[ak(),lk(t),pk(),fk(t)]}={}){if(e<0||e%1>0)throw new Error("Invalid startLine");const s=ok({startLine:e,markers:r}),o=rk({fence:n}),a=sk({tokenizers:i}),l=_u(t);return function(c){const d=[];for(const u of Q_(c)){const p=s(u);if(p===null)continue;const v=o(p),T=v.slice(1).map(a);d.push({description:l(v[0],r),tags:T,source:p,problems:T.reduce((_,R)=>_.concat(R.problems),[])})}return d}}globalThis&&globalThis.__rest;globalThis&&globalThis.__rest;globalThis&&globalThis.__rest;function yk(e,n={}){return bk(n)(e)}const is=Tk();async function Sk(e,n){const{electron:t,Buffer:r,require:i,vm:s}=await Vr(()=>Promise.resolve().then(()=>LP),void 0,import.meta.url),o={console:ku(n),fetch:fetch.bind(window),utools:is,electron:t,Buffer:r,require:i};try{s.createContext(o),s.runInContext(`(async function(){
${e}
})()`,o).catch(a=>{n&&n(null,[a])})}catch(a){n&&n(null,[a])}}function Ek(e,n){try{const t=new Function("console","utools","globalThis",`(async function(){
try{${e}}catch(error){console.error(error)}
})()`),r=Object.assign({},globalThis);r.utools=is,t(ku(n),is,r)}catch(t){n&&n(null,[t])}}function ku(e){return{log:(...n)=>e&&e(n),error:(...n)=>e&&e(null,n),warn:(...n)=>e&&e(null,null,n),info:(...n)=>e&&e(null,null,null,n)}}function Tk(){if(!an)return{};const e=Object.assign({},j_(utools));return K_(["db","dbStorage","removeFeature","setFeature","onDbPull"],["fetchUserServerTemporaryToken","openPayment","fetchUserPayments"],["onPluginEnter","onPluginOut","createBrowserWindow"]).forEach(i=>{delete e[i]}),Object.freeze(e),e}function Ou(e){const n=yk(e);if(n.length){const t=n[0];return t.tags.length?t.tags.map(i=>({name:t.description?t.description:i.tag==="name"?[i.name,i.description].join(" "):"",description:i.tag==="description"?[i.name,i.description].join(" "):""}))[0]:{name:t.description||""}}return null}const _k=Ns("CodeSrore",{state:()=>({id:0,code:"",messages:[],env:an?Rn("env")||"node":"browser",historys:[],mode:Rn("mode")||"ontime",execState:!1}),getters:{codeWithId:e=>`code/${e.id}`,currentEnv:e=>e.env==="browser"?"浏览器":"Node.js",currentMode:e=>e.mode==="ontime"?"即时执行":"手动触发"},actions:{init(){const e=Rn("lastCodeId")||0;this.loadCode(e),this.loadHistorys()},newCode(){if(this.id!==0&&rn.success("成功创建新代码片段"),this.historys.length===99)return rn.error("创建失败 代码历史已达到上限 请删除部分代码历史后继续操作");this.clearMessages(),this.id=new Date().getTime(),this.code=Rn("lastCodeId")?"":'console.log("Hello, World!")',Cn(this.codeWithId,this.code),Cn("lastCodeId",this.id),this.loadHistorys()},loadCode(e){const n=Rn(`code/${e}`);if(Jo(n)==="Null")return this.newCode();this.id=e,this.code=n},handleCodeChange(e){this.code=e,Cn(this.codeWithId,this.code),this.mode==="ontime"&&this.execCode()},pushMessage(e){e&&this.messages.push(e)},clearMessages(){this.messages=[]},changeEnv(){if(!an)return rn.warning("当前环境不支持切换运行环境");this.env=this.env==="browser"?"node":"browser",this.env==="browser"?Cn("env","browser"):gt("env")},changeMode(){this.mode=this.mode==="manual"?"ontime":"manual",this.mode==="manual"?Cn("mode","manual"):gt("mode")},loadHistorys(){const e=Va("code/");if(!e||!e.length)return;e.sort((t,r)=>parseInt(r._id.split("/")[1])-parseInt(t._id.split("/")[1])),e.splice(0,e.length-99).forEach(t=>gt(t._id)),this.historys=e.map(t=>{var s;const r=t.data.replace(/\\n/g,`
`).replace(/\\r/g,"\r").replace(/\\t/g,"	").slice(1).slice(0,-1),i=((s=Ou(r))==null?void 0:s.name)||(r.startsWith("//")?r.split(`
`)[0].slice(2).trim():"");return{id:t._id,timeStamp:parseInt(t._id.split("/")[1],10),code:t.data,name:i}})},readHistory(e){this.loadCode(e),Cn("lastCodeId",this.id)},deleteHistory(e){const n=this.historys.findIndex(t=>t.timeStamp===e);this.historys.splice(n,1),gt(`code/${e}`),rn.success("删除成功"),this.historys.length?this.readHistory(this.historys[0].timeStamp):this.newCode()},emptyHistory(){this.historys=this.historys.filter(e=>(e.id,this.codeWithId,e.id===this.codeWithId)),Va("code/").forEach(e=>e._id!==this.codeWithId&&gt(e._id)),rn.success("清空历史记录成功")},execCode:G_(function(){if(!this.code)return rn.warning("当前代码为空");const e=(n,t)=>{const r=Z_(),i=new Date().getTime();n&&(n!=null&&n.length)&&this.pushMessage({id:r,timeStamp:i,type:"log",content:n}),t&&this.pushMessage({id:r,timeStamp:i,type:"error",content:t})};this.env==="browser"?Ek(this.code,e):Sk(this.code,e),this.execState=!0,setTimeout(()=>{this.execState=!1})},350,{leading:!0})}});function os(e){const n=window.matchMedia(e),t=te(n.matches),r=i=>{t.value=i.matches};return n.addEventListener("change",r),dt(()=>{n.removeEventListener("change",r)}),t}function kk(e){const n=os("(prefers-color-scheme: dark)"),t=os("(prefers-color-scheme: light)");return Ge(()=>ti(n.value?"dark":"light")),we(n,r=>{ti(r?"dark":"light"),e&&e(r?"dark":"light")}),[n,t]}function ti(e){if(e==="dark")document.body.classList.add("dark"),document.body.setAttribute("arco-theme","dark");else if(e==="light")document.body.classList.remove("dark"),document.body.removeAttribute("arco-theme");else{const[n]=kk();ti(n.value?"dark":"light")}return null}const ea=Ns("setting",{state:()=>({theme:Rn("setting/theme")||"default"}),getters:{isDark:({theme:e})=>{const n=os("(prefers-color-scheme: dark)");return e==="dark"||e==="default"&&n.value}},actions:{initSetting(){this.setTheme(this.theme)},setTheme(e){this.theme=e,e==="default"?gt(ql("theme")):Cn(ql("theme"),e),ti(e)}}});function ql(e){return`setting/${e}`}Ns("script",{state:()=>({name:"",description:"",tags:[]}),actions:{newScript(e){const n=Dm(8);return Cn(`script/${n}`,{name:this.name,description:this.description,code:e}),rn.success("保存成功"),!0},parseCommentBlock(e){const n=Ou(e);this.$patch(n||{})}}});const Ok=Z({__name:"App",setup(e){return ea().initSetting(),(t,r)=>{const i=ue("router-view");return D(),Ee(i,null,{default:q(({Component:s})=>[(D(),Ee(of,{include:["Runner"]},[(D(),Ee(ed(s)))],1024))]),_:1})}}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ht=typeof window<"u";function Pk(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ke=Object.assign;function To(e,n){const t={};for(const r in n){const i=n[r];t[r]=mn(i)?i.map(e):e(i)}return t}const sr=()=>{},mn=Array.isArray,Ck=/\/$/,Rk=e=>e.replace(Ck,"");function _o(e,n,t="/"){let r,i={},s="",o="";const a=n.indexOf("#");let l=n.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,a>-1?a:n.length),i=e(s)),a>-1&&(r=r||n.slice(0,a),o=n.slice(a,n.length)),r=Ak(r??n,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Lk(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Gl(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function xk(e,n,t){const r=n.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&xt(n.matched[r],t.matched[i])&&Pu(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function xt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Pu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Ik(e[t],n[t]))return!1;return!0}function Ik(e,n){return mn(e)?Jl(e,n):mn(n)?Jl(n,e):e===n}function Jl(e,n){return mn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Ak(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var yr;(function(e){e.pop="pop",e.push="push"})(yr||(yr={}));var ar;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ar||(ar={}));function wk(e){if(!e)if(ht){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Rk(e)}const Nk=/^[^#]+#/;function Bk(e,n){return e.replace(Nk,"#")+n}function Dk(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const ki=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hk(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=Dk(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Zl(e,n){return(history.state?history.state.position-n:-1)+e}const ss=new Map;function Mk(e,n){ss.set(e,n)}function Fk(e){const n=ss.get(e);return ss.delete(e),n}let $k=()=>location.protocol+"//"+location.host;function Cu(e,n){const{pathname:t,search:r,hash:i}=n,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Gl(l,"")}return Gl(t,e)+r+i}function jk(e,n,t,r){let i=[],s=[],o=null;const a=({state:p})=>{const v=Cu(e,location),T=t.value,_=n.value;let R=0;if(p){if(t.value=v,n.value=p,o&&o===T){o=null;return}R=_?p.position-_.position:0}else r(v);i.forEach(S=>{S(t.value,T,{delta:R,type:yr.pop,direction:R?R>0?ar.forward:ar.back:ar.unknown})})};function l(){o=t.value}function c(p){i.push(p);const v=()=>{const T=i.indexOf(p);T>-1&&i.splice(T,1)};return s.push(v),v}function d(){const{history:p}=window;p.state&&p.replaceState(ke({},p.state,{scroll:ki()}),"")}function u(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:c,destroy:u}}function Yl(e,n,t,r=!1,i=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:i?ki():null}}function Kk(e){const{history:n,location:t}=window,r={value:Cu(e,t)},i={value:n.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,c,d){const u=e.indexOf("#"),p=u>-1?(t.host&&document.querySelector("base")?e:e.slice(u))+l:$k()+e+l;try{n[d?"replaceState":"pushState"](c,"",p),i.value=c}catch{t[d?"replace":"assign"](p)}}function o(l,c){const d=ke({},n.state,Yl(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,d,!0),r.value=l}function a(l,c){const d=ke({},i.value,n.state,{forward:l,scroll:ki()});s(d.current,d,!0);const u=ke({},Yl(r.value,l,null),{position:d.position+1},c);s(l,u,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Wk(e){e=wk(e);const n=Kk(e),t=jk(e,n.state,n.location,n.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=ke({location:"",base:e,go:r,createHref:Bk.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function Uk(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Wk(e)}function zk(e){return typeof e=="string"||e&&typeof e=="object"}function Ru(e){return typeof e=="string"||typeof e=="symbol"}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lu=Symbol("");var Xl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Xl||(Xl={}));function It(e,n){return ke(new Error,{type:e,[Lu]:!0},n)}function kn(e,n){return e instanceof Error&&Lu in e&&(n==null||!!(e.type&n))}const Ql="[^/]+?",Vk={sensitive:!1,strict:!1,start:!0,end:!0},qk=/[.+*?^${}()[\]/\\]/g;function Gk(e,n){const t=ke({},Vk,n),r=[];let i=t.start?"^":"";const s=[];for(const c of e){const d=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const p=c[u];let v=40+(t.sensitive?.25:0);if(p.type===0)u||(i+="/"),i+=p.value.replace(qk,"\\$&"),v+=40;else if(p.type===1){const{value:T,repeatable:_,optional:R,regexp:S}=p;s.push({name:T,repeatable:_,optional:R});const b=S||Ql;if(b!==Ql){v+=10;try{new RegExp(`(${b})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${T}" (${b}): `+h.message)}}let A=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;u||(A=R&&c.length<2?`(?:/${A})`:"/"+A),R&&(A+="?"),i+=A,v+=20,R&&(v+=-8),_&&(v+=-20),b===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const v=d[p]||"",T=s[p-1];u[T.name]=v&&T.repeatable?v.split("/"):v}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const v of p)if(v.type===0)d+=v.value;else if(v.type===1){const{value:T,repeatable:_,optional:R}=v,S=T in c?c[T]:"";if(mn(S)&&!_)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const b=mn(S)?S.join("/"):S;if(!b)if(R)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${T}"`);d+=b}}return d||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function Jk(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Zk(e,n){let t=0;const r=e.score,i=n.score;for(;t<r.length&&t<i.length;){const s=Jk(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(ec(r))return 1;if(ec(i))return-1}return i.length-r.length}function ec(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Yk={type:0,value:""},Xk=/[a-zA-Z0-9_]/;function Qk(e){if(!e)return[[]];if(e==="/")return[[Yk]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${t})/"${c}": ${v}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",d="";function u(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):p();break;case 4:p(),t=r;break;case 1:l==="("?t=2:Xk.test(l)?p():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),u(),o(),i}function eO(e,n,t){const r=Gk(Qk(e.path),t),i=ke(r,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function nO(e,n){const t=[],r=new Map;n=rc({strict:!1,end:!0,sensitive:!1},n);function i(d){return r.get(d)}function s(d,u,p){const v=!p,T=tO(d);T.aliasOf=p&&p.record;const _=rc(n,d),R=[T];if("alias"in d){const A=typeof d.alias=="string"?[d.alias]:d.alias;for(const h of A)R.push(ke({},T,{components:p?p.record.components:T.components,path:h,aliasOf:p?p.record:T}))}let S,b;for(const A of R){const{path:h}=A;if(u&&h[0]!=="/"){const y=u.record.path,B=y[y.length-1]==="/"?"":"/";A.path=u.record.path+(h&&B+h)}if(S=eO(A,u,_),p?p.alias.push(S):(b=b||S,b!==S&&b.alias.push(S),v&&d.name&&!tc(S)&&o(d.name)),T.children){const y=T.children;for(let B=0;B<y.length;B++)s(y[B],S,p&&p.children[B])}p=p||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return b?()=>{o(b)}:sr}function o(d){if(Ru(d)){const u=r.get(d);u&&(r.delete(d),t.splice(t.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=t.indexOf(d);u>-1&&(t.splice(u,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){let u=0;for(;u<t.length&&Zk(d,t[u])>=0&&(d.record.path!==t[u].record.path||!xu(d,t[u]));)u++;t.splice(u,0,d),d.record.name&&!tc(d)&&r.set(d.record.name,d)}function c(d,u){let p,v={},T,_;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw It(1,{location:d});_=p.record.name,v=ke(nc(u.params,p.keys.filter(b=>!b.optional).map(b=>b.name)),d.params&&nc(d.params,p.keys.map(b=>b.name))),T=p.stringify(v)}else if("path"in d)T=d.path,p=t.find(b=>b.re.test(T)),p&&(v=p.parse(T),_=p.record.name);else{if(p=u.name?r.get(u.name):t.find(b=>b.re.test(u.path)),!p)throw It(1,{location:d,currentLocation:u});_=p.record.name,v=ke({},u.params,d.params),T=p.stringify(v)}const R=[];let S=p;for(;S;)R.unshift(S.record),S=S.parent;return{name:_,path:T,params:v,matched:R,meta:iO(R)}}return e.forEach(d=>s(d)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function nc(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function tO(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:rO(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function rO(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="boolean"?t:t[r];return n}function tc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function iO(e){return e.reduce((n,t)=>ke(n,t.meta),{})}function rc(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function xu(e,n){return n.children.some(t=>t===e||xu(e,t))}const Iu=/#/g,oO=/&/g,sO=/\//g,aO=/=/g,lO=/\?/g,Au=/\+/g,cO=/%5B/g,dO=/%5D/g,wu=/%5E/g,uO=/%60/g,Nu=/%7B/g,pO=/%7C/g,Bu=/%7D/g,fO=/%20/g;function na(e){return encodeURI(""+e).replace(pO,"|").replace(cO,"[").replace(dO,"]")}function mO(e){return na(e).replace(Nu,"{").replace(Bu,"}").replace(wu,"^")}function as(e){return na(e).replace(Au,"%2B").replace(fO,"+").replace(Iu,"%23").replace(oO,"%26").replace(uO,"`").replace(Nu,"{").replace(Bu,"}").replace(wu,"^")}function vO(e){return as(e).replace(aO,"%3D")}function gO(e){return na(e).replace(Iu,"%23").replace(lO,"%3F")}function hO(e){return e==null?"":gO(e).replace(sO,"%2F")}function ri(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function bO(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Au," "),o=s.indexOf("="),a=ri(o<0?s:s.slice(0,o)),l=o<0?null:ri(s.slice(o+1));if(a in n){let c=n[a];mn(c)||(c=n[a]=[c]),c.push(l)}else n[a]=l}return n}function ic(e){let n="";for(let t in e){const r=e[t];if(t=vO(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(mn(r)?r.map(s=>s&&as(s)):[r&&as(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function yO(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=mn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return n}const SO=Symbol(""),oc=Symbol(""),Oi=Symbol(""),Du=Symbol(""),ls=Symbol("");function qt(){let e=[];function n(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function Kn(e,n,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(It(4,{from:t,to:n})):u instanceof Error?a(u):zk(u)?a(It(2,{from:n,to:u})):(s&&r.enterCallbacks[i]===s&&typeof u=="function"&&s.push(u),o())},c=e.call(r&&r.instances[i],n,t,l);let d=Promise.resolve(c);e.length<3&&(d=d.then(l)),d.catch(u=>a(u))})}function ko(e,n,t,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(n!=="beforeRouteEnter"&&!s.instances[o]))if(EO(a)){const c=(a.__vccOpts||a)[n];c&&i.push(Kn(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const d=Pk(c)?c.default:c;s.components[o]=d;const p=(d.__vccOpts||d)[n];return p&&Kn(p,t,r,s,o)()}))}}return i}function EO(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function sc(e){const n=Ne(Oi),t=Ne(Du),r=k(()=>n.resolve(le(e.to))),i=k(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],u=t.matched;if(!d||!u.length)return-1;const p=u.findIndex(xt.bind(null,d));if(p>-1)return p;const v=ac(l[c-2]);return c>1&&ac(d)===v&&u[u.length-1].path!==v?u.findIndex(xt.bind(null,l[c-2])):p}),s=k(()=>i.value>-1&&OO(t.params,r.value.params)),o=k(()=>i.value>-1&&i.value===t.matched.length-1&&Pu(t.params,r.value.params));function a(l={}){return kO(l)?n[le(e.replace)?"replace":"push"](le(e.to)).catch(sr):Promise.resolve()}return{route:r,href:k(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const TO=Z({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sc,setup(e,{slots:n}){const t=Qe(sc(e)),{options:r}=Ne(Oi),i=k(()=>({[lc(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[lc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=n.default&&n.default(t);return e.custom?s:gr("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),_O=TO;function kO(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function OO(e,n){for(const t in n){const r=n[t],i=e[t];if(typeof r=="string"){if(r!==i)return!1}else if(!mn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function ac(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lc=(e,n,t)=>e??n??t,PO=Z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=Ne(ls),i=k(()=>e.route||r.value),s=Ne(oc,0),o=k(()=>{let c=le(s);const{matched:d}=i.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),a=k(()=>i.value.matched[o.value]);qn(oc,k(()=>o.value+1)),qn(SO,a),qn(ls,i);const l=te();return we(()=>[l.value,a.value,e.name],([c,d,u],[p,v,T])=>{d&&(d.instances[u]=c,v&&v!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),c&&d&&(!v||!xt(d,v)||!p)&&(d.enterCallbacks[u]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,d=e.name,u=a.value,p=u&&u.components[d];if(!p)return cc(t.default,{Component:p,route:c});const v=u.props[d],T=v?v===!0?c.params:typeof v=="function"?v(c):v:null,R=gr(p,ke({},T,n,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return cc(t.default,{Component:R,route:c})||R}}});function cc(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const CO=PO;function RO(e){const n=nO(e.routes,e),t=e.parseQuery||bO,r=e.stringifyQuery||ic,i=e.history,s=qt(),o=qt(),a=qt(),l=Bp(Mn);let c=Mn;ht&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=To.bind(null,O=>""+O),u=To.bind(null,hO),p=To.bind(null,ri);function v(O,z){let $,Y;return Ru(O)?($=n.getRecordMatcher(O),Y=z):Y=O,n.addRoute(Y,$)}function T(O){const z=n.getRecordMatcher(O);z&&n.removeRoute(z)}function _(){return n.getRoutes().map(O=>O.record)}function R(O){return!!n.getRecordMatcher(O)}function S(O,z){if(z=ke({},z||l.value),typeof O=="string"){const g=_o(t,O,z.path),E=n.resolve({path:g.path},z),P=i.createHref(g.fullPath);return ke(g,E,{params:p(E.params),hash:ri(g.hash),redirectedFrom:void 0,href:P})}let $;if("path"in O)$=ke({},O,{path:_o(t,O.path,z.path).path});else{const g=ke({},O.params);for(const E in g)g[E]==null&&delete g[E];$=ke({},O,{params:u(g)}),z.params=u(z.params)}const Y=n.resolve($,z),be=O.hash||"";Y.params=d(p(Y.params));const f=Lk(r,ke({},O,{hash:mO(be),path:Y.path})),m=i.createHref(f);return ke({fullPath:f,hash:be,query:r===ic?yO(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:m})}function b(O){return typeof O=="string"?_o(t,O,l.value.path):ke({},O)}function A(O,z){if(c!==O)return It(8,{from:z,to:O})}function h(O){return W(O)}function y(O){return h(ke(b(O),{replace:!0}))}function B(O){const z=O.matched[O.matched.length-1];if(z&&z.redirect){const{redirect:$}=z;let Y=typeof $=="function"?$(O):$;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=b(Y):{path:Y},Y.params={}),ke({query:O.query,hash:O.hash,params:"path"in Y?{}:O.params},Y)}}function W(O,z){const $=c=S(O),Y=l.value,be=O.state,f=O.force,m=O.replace===!0,g=B($);if(g)return W(ke(b(g),{state:typeof g=="object"?ke({},be,g.state):be,force:f,replace:m}),z||$);const E=$;E.redirectedFrom=z;let P;return!f&&xk(r,Y,$)&&(P=It(16,{to:E,from:Y}),Ve(Y,Y,!0,!1)),(P?Promise.resolve(P):M(E,Y)).catch(x=>kn(x)?kn(x,2)?x:Je(x):fe(x,E,Y)).then(x=>{if(x){if(kn(x,2))return W(ke({replace:m},b(x.to),{state:typeof x.to=="object"?ke({},be,x.to.state):be,force:f}),z||E)}else x=K(E,Y,!0,m,be);return G(E,Y,x),x})}function N(O,z){const $=A(O,z);return $?Promise.reject($):Promise.resolve()}function L(O){const z=gn.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(O):O()}function M(O,z){let $;const[Y,be,f]=LO(O,z);$=ko(Y.reverse(),"beforeRouteLeave",O,z);for(const g of Y)g.leaveGuards.forEach(E=>{$.push(Kn(E,O,z))});const m=N.bind(null,O,z);return $.push(m),xe($).then(()=>{$=[];for(const g of s.list())$.push(Kn(g,O,z));return $.push(m),xe($)}).then(()=>{$=ko(be,"beforeRouteUpdate",O,z);for(const g of be)g.updateGuards.forEach(E=>{$.push(Kn(E,O,z))});return $.push(m),xe($)}).then(()=>{$=[];for(const g of O.matched)if(g.beforeEnter&&!z.matched.includes(g))if(mn(g.beforeEnter))for(const E of g.beforeEnter)$.push(Kn(E,O,z));else $.push(Kn(g.beforeEnter,O,z));return $.push(m),xe($)}).then(()=>(O.matched.forEach(g=>g.enterCallbacks={}),$=ko(f,"beforeRouteEnter",O,z),$.push(m),xe($))).then(()=>{$=[];for(const g of o.list())$.push(Kn(g,O,z));return $.push(m),xe($)}).catch(g=>kn(g,8)?g:Promise.reject(g))}function G(O,z,$){for(const Y of a.list())L(()=>Y(O,z,$))}function K(O,z,$,Y,be){const f=A(O,z);if(f)return f;const m=z===Mn,g=ht?history.state:{};$&&(Y||m?i.replace(O.fullPath,ke({scroll:m&&g&&g.scroll},be)):i.push(O.fullPath,be)),l.value=O,Ve(O,z,$,m),Je()}let se;function ge(){se||(se=i.listen((O,z,$)=>{if(!Jn.listening)return;const Y=S(O),be=B(Y);if(be){W(ke(be,{replace:!0}),Y).catch(sr);return}c=Y;const f=l.value;ht&&Mk(Zl(f.fullPath,$.delta),ki()),M(Y,f).catch(m=>kn(m,12)?m:kn(m,2)?(W(m.to,Y).then(g=>{kn(g,20)&&!$.delta&&$.type===yr.pop&&i.go(-1,!1)}).catch(sr),Promise.reject()):($.delta&&i.go(-$.delta,!1),fe(m,Y,f))).then(m=>{m=m||K(Y,f,!1),m&&($.delta&&!kn(m,8)?i.go(-$.delta,!1):$.type===yr.pop&&kn(m,20)&&i.go(-1,!1)),G(Y,f,m)}).catch(sr)}))}let Te=qt(),de=qt(),he;function fe(O,z,$){Je(O);const Y=de.list();return Y.length&&Y.forEach(be=>be(O,z,$)),Promise.reject(O)}function Ke(){return he&&l.value!==Mn?Promise.resolve():new Promise((O,z)=>{Te.add([O,z])})}function Je(O){return he||(he=!O,ge(),Te.list().forEach(([z,$])=>O?$(O):z()),Te.reset()),O}function Ve(O,z,$,Y){const{scrollBehavior:be}=e;if(!ht||!be)return Promise.resolve();const f=!$&&Fk(Zl(O.fullPath,0))||(Y||!$)&&history.state&&history.state.scroll||null;return An().then(()=>be(O,z,f)).then(m=>m&&Hk(m)).catch(m=>fe(m,O,z))}const Me=O=>i.go(O);let ln;const gn=new Set,Jn={currentRoute:l,listening:!0,addRoute:v,removeRoute:T,hasRoute:R,getRoutes:_,resolve:S,options:e,push:h,replace:y,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:Ke,install(O){const z=this;O.component("RouterLink",_O),O.component("RouterView",CO),O.config.globalProperties.$router=z,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>le(l)}),ht&&!ln&&l.value===Mn&&(ln=!0,h(i.location).catch(be=>{}));const $={};for(const be in Mn)$[be]=k(()=>l.value[be]);O.provide(Oi,z),O.provide(Du,Qe($)),O.provide(ls,l);const Y=O.unmount;gn.add(O),O.unmount=function(){gn.delete(O),gn.size<1&&(c=Mn,se&&se(),se=null,l.value=Mn,ln=!1,he=!1),Y()}}};function xe(O){return O.reduce((z,$)=>z.then(()=>L($)),Promise.resolve())}return Jn}function LO(e,n){const t=[],r=[],i=[],s=Math.max(n.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=n.matched[o];a&&(e.matched.find(c=>xt(c,a))?r.push(a):t.push(a));const l=e.matched[o];l&&(n.matched.find(c=>xt(c,l))||i.push(l))}return[t,r,i]}function xO(){return Ne(Oi)}const ta=new CustomEvent("editor-focus"),Hu=RO({history:Uk(),routes:[{path:"/",redirect:"/runner"},{path:"/runner",component:()=>Vr(()=>Promise.resolve().then(()=>VP),void 0,import.meta.url)},{path:"/setting",component:()=>Vr(()=>Promise.resolve().then(()=>QP),void 0,import.meta.url)},{path:"/about",component:()=>Vr(()=>Promise.resolve().then(()=>lC),void 0,import.meta.url)}]});Hu.afterEach((e,n,t)=>{e.path==="/runner"&&An(()=>window.dispatchEvent(ta))});function IO(e){e.directive("zoom",(n,t)=>{t.value&&(n.style.transform="scale(1.6)",n.style.transition="transform 0.2s",setTimeout(()=>{n.style.transform="scale(1.0)"},200))})}const AO=Z({name:"IconCloseCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-close-circle`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),wO=["stroke-width","stroke-linecap","stroke-linejoin"],NO=ne("path",{d:"m17.643 17.643 6.364 6.364m0 0 6.364 6.364m-6.364-6.364 6.364-6.364m-6.364 6.364-6.364 6.364M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),BO=[NO];function DO(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},BO,14,wO)}var Oo=oe(AO,[["render",DO]]);const HO=Object.assign(Oo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Oo.name,Oo)}}),MO=Z({name:"IconInfoCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-info-circle`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),FO=["stroke-width","stroke-linecap","stroke-linejoin"],$O=ne("path",{d:"M24 20v14m0-16v-4m18 10c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),jO=[$O];function KO(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},jO,14,FO)}var Po=oe(MO,[["render",KO]]);const WO=Object.assign(Po,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Po.name,Po)}}),UO=Z({name:"IconStop",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-stop`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),zO=["stroke-width","stroke-linecap","stroke-linejoin"],VO=ne("path",{d:"M36.728 36.728c7.03-7.03 7.03-18.427 0-25.456-7.03-7.03-18.427-7.03-25.456 0m25.456 25.456c-7.03 7.03-18.427 7.03-25.456 0-7.03-7.03-7.03-18.427 0-25.456m25.456 25.456L11.272 11.272"},null,-1),qO=[VO];function GO(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},qO,14,zO)}var Co=oe(UO,[["render",GO]]);const JO=Object.assign(Co,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Co.name,Co)}}),ZO=Z({name:"IconSettings",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-settings`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),YO=["stroke-width","stroke-linecap","stroke-linejoin"],XO=ne("path",{d:"M18.797 6.732A1 1 0 0 1 19.76 6h8.48a1 1 0 0 1 .964.732l1.285 4.628a1 1 0 0 0 1.213.7l4.651-1.2a1 1 0 0 1 1.116.468l4.24 7.344a1 1 0 0 1-.153 1.2L38.193 23.3a1 1 0 0 0 0 1.402l3.364 3.427a1 1 0 0 1 .153 1.2l-4.24 7.344a1 1 0 0 1-1.116.468l-4.65-1.2a1 1 0 0 0-1.214.7l-1.285 4.628a1 1 0 0 1-.964.732h-8.48a1 1 0 0 1-.963-.732L17.51 36.64a1 1 0 0 0-1.213-.7l-4.65 1.2a1 1 0 0 1-1.116-.468l-4.24-7.344a1 1 0 0 1 .153-1.2L9.809 24.7a1 1 0 0 0 0-1.402l-3.364-3.427a1 1 0 0 1-.153-1.2l4.24-7.344a1 1 0 0 1 1.116-.468l4.65 1.2a1 1 0 0 0 1.213-.7l1.286-4.628Z"},null,-1),QO=ne("path",{d:"M30 24a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"},null,-1),eP=[XO,QO];function nP(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},eP,14,YO)}var Ro=oe(ZO,[["render",nP]]);const tP=Object.assign(Ro,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ro.name,Ro)}}),rP=Z({name:"IconShareAlt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-share-alt`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),iP=["stroke-width","stroke-linecap","stroke-linejoin"],oP=ne("path",{d:"M32.442 21.552a4.5 4.5 0 1 1 .065 4.025m-.065-4.025-16.884-8.104m16.884 8.104A4.483 4.483 0 0 0 32 23.5c0 .75.183 1.455.507 2.077m-16.95-12.13a4.5 4.5 0 1 1-8.113-3.895 4.5 4.5 0 0 1 8.114 3.896Zm-.064 20.977A4.5 4.5 0 1 0 11.5 41c3.334-.001 5.503-3.68 3.993-6.578Zm0 0 17.014-8.847"},null,-1),sP=[oP];function aP(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},sP,14,iP)}var Lo=oe(rP,[["render",aP]]);const lP=Object.assign(Lo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Lo.name,Lo)}}),cP=Z({name:"IconCommand",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-command`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),dP=["stroke-width","stroke-linecap","stroke-linejoin"],uP=ne("path",{d:"M29 19v-6a6 6 0 1 1 6 6h-6Zm0 0v10m0-10H19m10 10v6a6 6 0 1 0 6-6h-6Zm0 0H19m0-10v10m0-10v-6a6 6 0 1 0-6 6h6Zm0 10v6a6 6 0 1 1-6-6h6Z"},null,-1),pP=[uP];function fP(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},pP,14,dP)}var xo=oe(cP,[["render",fP]]);const mP=Object.assign(xo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+xo.name,xo)}}),vP=Z({name:"IconThunderbolt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=ie("icon"),r=k(()=>[t,`${t}-thunderbolt`,{[`${t}-spin`]:e.spin}]),i=k(()=>{const o={};return e.size&&(o.fontSize=_e(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),gP=["stroke-width","stroke-linecap","stroke-linejoin"],hP=ne("path",{d:"M27.824 5.203A.1.1 0 0 1 28 5.27V21h10.782a.1.1 0 0 1 .075.165L20.176 42.797A.1.1 0 0 1 20 42.73V27H9.219a.1.1 0 0 1-.076-.165L27.824 5.203Z"},null,-1),bP=[hP];function yP(e,n,t,r,i,s){return D(),X("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:ve(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},bP,14,gP)}var Io=oe(vP,[["render",yP]]);const SP=Object.assign(Io,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Io.name,Io)}}),EP=[Ty,gy,WO,Pb,JO,SP,tP,HO,xh,Ry,mP,kg,dy,lP];function TP(e){for(const n of EP)e.component(n.name,n)}function _P(){an&&(utools.onPluginEnter(({code:e,type:n,payload:t})=>{window.dispatchEvent(ta)}),utools.db.replicateStateFromCloud()&&rn.warning({content:"数据可能不完整，还在从云端复制中"}))}try{Pm(Ok).use(Hu).use(Lm()).use(IO).use(TP).mount("#app"),_P()}catch(e){an&&utools.showNotification("初始化失败: "+e)}const kP=()=>null;var dc;const OP=((dc=window==null?void 0:window.preload)==null?void 0:dc.electron)||{};var uc;const PP=((uc=window==null?void 0:window.preload)==null?void 0:uc.Buffer)||{};var pc;const CP=((pc=window==null?void 0:window.preload)==null?void 0:pc.require)||kP;var fc;const RP=((fc=window==null?void 0:window.preload)==null?void 0:fc.vm)||{},LP=Object.freeze(Object.defineProperty({__proto__:null,Buffer:PP,electron:OP,require:CP,vm:RP},Symbol.toStringTag,{value:"Module"}));const xP={class:"console"},IP={key:0,class:"empty-tip"},AP=["onClick"],wP=Z({__name:"Console",props:{messages:{}},setup(e){const n=e,t=te(null);we(()=>n.messages.length,()=>{var c,d;const o=t.value;if(!o)return;const a=o[o.length-1],l=(d=(c=a==null?void 0:a.parentElement)==null?void 0:c.parentElement)==null?void 0:d.parentElement;a&&l&&An(()=>l.scrollTop=a.offsetTop)});function r(o){return me(o).map(a=>{const l=Jo(a);if(["Array","Object"].includes(l)){const c=()=>{const d=new WeakSet;return(u,p)=>{if(typeof p=="object"&&p!==null){if(d.has(p))return u;d.add(p)}return p}};try{return JSON.stringify(a,c())}catch{return`[${l}]`}}else{if(l==="String")return`"${a}"`;if(["Null","Undefined"].includes(l))return l.toLowerCase();if(l==="Symbol")return a.toString()}return a}).join(`
`)}function i(o){Bm(String(o))?rn.success("复制成功"):rn.error("复制失败")}function s(o){an&&utools.redirect("Json",JSON.stringify(o))}return(o,a)=>{const l=Or,c=Vs;return D(),X("div",xP,[I(Er,{name:"emerge",mode:"out-in"},{default:q(()=>[o.messages.length?(D(),Ee(Ed,{key:1,name:"emerge",tag:"div"},{default:q(()=>[(D(!0),X(De,null,Rs(o.messages,d=>(D(),X("div",{ref_for:!0,ref_key:"msgContainerRef",ref:t,key:d.id,class:V({message:!0,"message-log":!d.type||d.type==="log","message-warn":d.type==="warn","message-error":d.type==="error","message-info":d.type==="info"})},[I(c,{content:"复制时间戳"},{default:q(()=>[I(l,{class:"status",size:"mini",type:"text",onClick:u=>i(d.timeStamp)},{default:q(()=>[ze(dn(le(Zo)(d.timeStamp).split(" ")[1]),1)]),_:2},1032,["onClick"])]),_:2},1024),I(c,{content:"JSON编辑器"},{default:q(()=>[le(an)&&["Array","Object"].includes(le(Jo)(d.content[0]))?(D(),Ee(l,{key:0,class:"status",size:"mini",type:"text",status:"warning",onClick:u=>s(d.content[0])},{default:q(()=>[ze(" JSON ")]),_:2},1032,["onClick"])):je("",!0)]),_:2},1024),ne("div",{class:"content",onClick:u=>i(r(d.content))},dn(r(d.content)),9,AP)],2))),128))]),_:1})):(D(),X("div",IP,"控制台为空"))]),_:1})])}}});const Pr=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},NP=Pr(wP,[["__scopeId","data-v-9c841429"]]),BP=`interface UBrowser {
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
`,DP=`declare module 'assert' {
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
`,HP=`interface Clipboard {

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
`;function MP(e,n){e.addAction({id:"run",label:"Run",keybindings:[Pi.CtrlCmd|Ci.KeyR],contextMenuGroupId:"navigation",run:()=>n("runCode")}),e.addAction({id:"newCode",label:"New Code",keybindings:[Pi.CtrlCmd|Ci.KeyN],contextMenuGroupId:"navigation",run:()=>n("newCode")}),e.addAction({id:"clearMessages",label:"Clear Messages",keybindings:[Pi.CtrlCmd|Ci.KeyQ],contextMenuGroupId:"navigation",run:()=>n("clearMessages")})}self.MonacoEnvironment={getWorker(e,n){return n==="typescript"||n==="javascript"?new Fu:n==="json"?new $u:new ju}};Ln.typescript.javascriptDefaults.addExtraLib(BP,"utools.api.d.ts");Ln.typescript.javascriptDefaults.addExtraLib(DP,"node.api.d.ts");Ln.typescript.javascriptDefaults.addExtraLib(HP,"electron.api.d.ts");Ln.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});Ln.typescript.javascriptDefaults.setCompilerOptions({target:Ln.typescript.ScriptTarget.ES2016,allowNonTsExtensions:!0,allowJs:!0});Ln.registerCompletionItemProvider("javascript",{provideCompletionItems:function(){return{suggestions:[{label:"clg",kind:Ln.CompletionItemKind.Snippet,insertText:"console.log(${1})",insertTextRules:Ln.CompletionItemInsertTextRule.InsertAsSnippet,documentation:"Print to Console"}]}}});function cs(e,n,t,r){Ge(()=>{e.addEventListener(n,t,r)}),dt(()=>{e.removeEventListener(n,t,r)})}const FP=Z({__name:"Editor",props:{code:{default:""},language:{default:"javascript"}},emits:["codeChange","runCode","newCode","clearMessages"],setup(e,{expose:n,emit:t}){const r=e,i=ea(),s=te(null);let o=null;we(()=>i.isDark,()=>a()),we(()=>r.code,l=>{o&&l!==(o==null?void 0:o.getValue())&&o.setValue(l)}),Ge(()=>{a()}),dt(()=>{o==null||o.dispose()}),n({editor:k(()=>o)}),cs(window,ta.type,()=>{o==null||o.focus()}),cs(window,"focus",()=>{o==null||o.focus()});function a(){var l;o&&(o.dispose(),o=null),o=Ku.create(s.value,{value:r.code,language:r.language,theme:i.isDark?"vs-dark":"vs",tabSize:2,minimap:{enabled:!1},automaticLayout:!0}),MP(o,t),(l=o.getModel())==null||l.onDidChangeContent(Tu(()=>{t("codeChange",o.getValue())},350)),o.focus()}return(l,c)=>(D(),X("div",{class:"editor",ref_key:"editorRef",ref:s},null,512))}});const $P=Pr(FP,[["__scopeId","data-v-ae51f845"]]);const jP={class:"runner"},KP={class:"btns"},WP=["onClick"],UP=Z({__name:"Runner",setup(e){const n=te(),t=te(Rn("size")||.75),r=_k();return r.init(),we(t,i=>Cn("size",i)),(i,s)=>{const o=ue("icon-plus"),a=Or,l=Vs,c=ue("icon-thunderbolt"),d=ue("icon-stop"),u=ue("icon-settings"),p=ue("icon-info-circle"),v=ue("icon-file"),T=ue("icon-delete"),_=ir,R=Jh,S=$P,b=NP,A=iy,h=vf("zoom");return D(),X("div",jP,[ne("div",KP,[I(l,{content:"创建新代码片段"},{default:q(()=>[I(a,{onClick:le(r).newCode},{default:q(()=>[I(o)]),_:1},8,["onClick"])]),_:1}),I(l,{content:"运行代码"},{default:q(()=>[I(a,{onClick:le(r).execCode},{default:q(()=>[qc(I(c,null,null,512),[[h,le(r).execState]])]),_:1},8,["onClick"])]),_:1}),I(l,{content:"清空控制台"},{default:q(()=>[I(a,{onClick:le(r).clearMessages},{default:q(()=>[I(d)]),_:1},8,["onClick"])]),_:1}),I(l,{content:"设置"},{default:q(()=>[I(a,{onClick:s[0]||(s[0]=y=>i.$router.push("/setting"))},{default:q(()=>[I(u)]),_:1})]),_:1}),I(l,{content:"关于"},{default:q(()=>[I(a,{onClick:s[1]||(s[1]=y=>i.$router.push("/about"))},{default:q(()=>[I(p)]),_:1})]),_:1}),I(a,{class:"width-80",onClick:le(r).changeEnv},{default:q(()=>[ze(dn(le(r).currentEnv),1)]),_:1},8,["onClick"]),I(a,{class:"width-80",onClick:le(r).changeMode},{default:q(()=>[ze(dn(le(r).currentMode),1)]),_:1},8,["onClick"]),I(R,{onPopupVisibleChange:s[2]||(s[2]=y=>y&&le(r).loadHistorys())},{content:q(()=>[(D(!0),X(De,null,Rs(le(r).historys,y=>(D(),Ee(_,{class:V({"active-option":y.id===le(r).codeWithId}),onClick:B=>le(r).readHistory(y.timeStamp)},{icon:q(()=>[I(v)]),default:q(()=>[ze(" "+dn(y!=null&&y.name?`${y==null?void 0:y.name} ${le(Zo)(y.timeStamp)}`:le(Zo)(y.timeStamp))+" ",1),ne("span",{class:"history-delete",onClick:Td(B=>le(r).deleteHistory(y.timeStamp),["stop"])},[I(T)],8,WP)]),_:2},1032,["class","onClick"]))),256))]),footer:q(()=>[I(_,{onClick:le(r).emptyHistory},{default:q(()=>[ze("清空代码历史")]),_:1},8,["onClick"])]),default:q(()=>[I(a,{class:"flex-fill"},{default:q(()=>[ze("代码历史回溯 ("+dn(le(r).historys.length)+"/99)",1)]),_:1})]),_:1})]),I(A,{size:le(t),"onUpdate:size":s[3]||(s[3]=y=>Ae(t)?t.value=y:null),min:.1,max:.8},{first:q(()=>[I(S,{ref_key:"editorRef",ref:n,code:le(r).code,language:"javascript",onCodeChange:le(r).handleCodeChange,onRunCode:le(r).execCode,onNewCode:le(r).newCode,onClearMessages:le(r).clearMessages},null,8,["code","onCodeChange","onRunCode","onNewCode","onClearMessages"])]),second:q(()=>[I(b,{messages:le(r).messages},null,8,["messages"])]),_:1},8,["size"])])}}});const zP=Pr(UP,[["__scopeId","data-v-554c0fa3"]]),VP=Object.freeze(Object.defineProperty({__proto__:null,default:zP},Symbol.toStringTag,{value:"Module"})),qP={class:"setting-content"},GP=Z({__name:"SettingContent",props:{title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(n,t)=>{const r=ue("icon-info-circle"),i=Vs;return D(),X("div",qP,[ne("h3",null,[ne("span",null,dn(e.title),1),e.desc?(D(),Ee(i,{key:0,content:e.desc},{default:q(()=>[I(r)]),_:1},8,["content"])):je("",!0)]),pe(n.$slots,"default")])}}});const JP=Z({__name:"ThemeSetting",setup(e){const n=ea();return(t,r)=>{const i=Zh,s=Ur,o=GP;return D(),Ee(o,{title:"插件主题"},{default:q(()=>[I(s,{modelValue:le(n).theme,"onUpdate:modelValue":r[0]||(r[0]=a=>le(n).theme=a),onChange:le(n).setTheme},{default:q(()=>[I(i,{value:"default"},{default:q(()=>[ze("跟随系统")]),_:1}),I(i,{value:"dark"},{default:q(()=>[ze("深色模式")]),_:1}),I(i,{value:"light"},{default:q(()=>[ze("浅色模式")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})}}});function Mu(){const e=xO(),n=()=>e.back();return cs(document,"keydown",t=>{t.key==="Escape"&&(n(),t.stopPropagation())}),{BackButton:()=>gr(Or,{class:"back",onClick:n,shape:"circle"},()=>gr(tb))}}const ZP={class:"setting"},YP=Z({__name:"Setting",setup(e){const{BackButton:n}=Mu();return(t,r)=>{const i=JP;return D(),X("div",ZP,[I(le(n)),I(i)])}}});const XP=Pr(YP,[["__scopeId","data-v-9732a011"]]),QP=Object.freeze(Object.defineProperty({__proto__:null,default:XP},Symbol.toStringTag,{value:"Module"}));const eC=""+new URL("../logo.png",import.meta.url).href,ra=e=>(qp("data-v-70d8ec5a"),e=e(),Gp(),e),nC={class:"about"},tC=ra(()=>ne("img",{class:"bg-icon",src:eC,alt:"logo"},null,-1)),rC=ra(()=>ne("h1",{class:"title"},"超级JavaScript",-1)),iC={class:"footer-btns"},oC=ra(()=>ne("div",{class:"footer-tip"},"Copyright © 2019-present ZiuChen",-1)),sC=Z({__name:"About",setup(e){const n=[{text:"插件主页",url:"https://ziuchen.gitee.io/project/JSRunner/"},{text:"开源地址",url:"https://github.com/ZiuChen/JSRunner",badge:{text:"Star"}},{text:"更新日志",url:"https://ziuchen.gitee.io/project/JSRunner/log/"}],{BackButton:t}=Mu();return(r,i)=>{const s=vb,o=Or,a=hh;return D(),X("div",nC,[tC,rC,I(s,{onClick:i[0]||(i[0]=l=>le(bo)("https://github.com/ZiuChen"))},{default:q(()=>[ze("ZiuChen")]),_:1}),ne("div",iC,[(D(),X(De,null,Rs(n,l=>(D(),X(De,null,[l!=null&&l.badge?(D(),Ee(a,tp(Dt({key:0},l.badge)),{default:q(()=>[I(o,{onClick:c=>le(bo)(l.url)},{default:q(()=>[ze(dn(l.text),1)]),_:2},1032,["onClick"])]),_:2},1040)):(D(),Ee(o,{key:1,onClick:c=>le(bo)(l.url)},{default:q(()=>[ze(dn(l.text),1)]),_:2},1032,["onClick"]))],64))),64))]),oC,I(le(t))])}}});const aC=Pr(sC,[["__scopeId","data-v-70d8ec5a"]]),lC=Object.freeze(Object.defineProperty({__proto__:null,default:aC},Symbol.toStringTag,{value:"Module"}));export{Vr as _};
