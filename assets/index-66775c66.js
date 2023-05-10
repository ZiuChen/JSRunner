import{W as qd,a as Gd,l as bt,e as Vd,K as Jd,b as Zd}from"./monaco-4b97a0a2.js";import"./index-66775c66.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Fo(e,n){const t=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return n?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Oe(e){if(ne(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=xe(r)?eu(r):Oe(r);if(i)for(const o in i)n[o]=i[o]}return n}else{if(xe(e))return e;if(Le(e))return e}}const Yd=/;(?![^(]*\))/g,Xd=/:([^]+)/,Qd=/\/\*.*?\*\//gs;function eu(e){const n={};return e.replace(Qd,"").split(Yd).forEach(t=>{if(t){const r=t.split(Xd);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function G(e){let n="";if(xe(e))n=e;else if(ne(e))for(let t=0;t<e.length;t++){const r=G(e[t]);r&&(n+=r+" ")}else if(Le(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function nu(e){if(!e)return null;let{class:n,style:t}=e;return n&&!xe(n)&&(e.class=G(n)),t&&(e.style=Oe(t)),e}const tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ru=Fo(tu);function Cl(e){return!!e||e===""}const kn=e=>xe(e)?e:e==null?"":ne(e)||Le(e)&&(e.toString===Al||!se(e.toString))?JSON.stringify(e,Ll,2):String(e),Ll=(e,n)=>n&&n.__v_isRef?Ll(e,n.value):mt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:xl(n)?{[`Set(${n.size})`]:[...n.values()]}:Le(n)&&!ne(n)&&!wl(n)?String(n):n,Ce={},ft=[],an=()=>{},iu=()=>!1,ou=/^on[^a-z]/,qr=e=>ou.test(e),Ko=e=>e.startsWith("onUpdate:"),Ke=Object.assign,jo=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},su=Object.prototype.hasOwnProperty,ve=(e,n)=>su.call(e,n),ne=Array.isArray,mt=e=>Gr(e)==="[object Map]",xl=e=>Gr(e)==="[object Set]",se=e=>typeof e=="function",xe=e=>typeof e=="string",$o=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Il=e=>Le(e)&&se(e.then)&&se(e.catch),Al=Object.prototype.toString,Gr=e=>Al.call(e),au=e=>Gr(e).slice(8,-1),wl=e=>Gr(e)==="[object Object]",Wo=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lr=Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},lu=/-(\w)/g,gn=Vr(e=>e.replace(lu,(n,t)=>t?t.toUpperCase():"")),cu=/\B([A-Z])/g,Pt=Vr(e=>e.replace(cu,"-$1").toLowerCase()),Jr=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),hi=Vr(e=>e?`on${Jr(e)}`:""),Qt=(e,n)=>!Object.is(e,n),bi=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Hr=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},du=e=>{const n=parseFloat(e);return isNaN(n)?e:n},uu=e=>{const n=xe(e)?Number(e):NaN;return isNaN(n)?e:n};let Ls;const pu=()=>Ls||(Ls=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ze;class Nl{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ze,!n&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Ze;try{return Ze=this,n()}finally{Ze=t}}}on(){Ze=this}off(){Ze=this.parent}stop(n){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Bl(e){return new Nl(e)}function fu(e,n=Ze){n&&n.active&&n.effects.push(e)}function Dl(){return Ze}function mu(e){Ze&&Ze.cleanups.push(e)}const Uo=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Hl=e=>(e.w&Un)>0,Ml=e=>(e.n&Un)>0,vu=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Un},gu=e=>{const{deps:n}=e;if(n.length){let t=0;for(let r=0;r<n.length;r++){const i=n[r];Hl(i)&&!Ml(i)?i.delete(e):n[t++]=i,i.w&=~Un,i.n&=~Un}n.length=t}},Mr=new WeakMap;let jt=0,Un=1;const fo=30;let on;const tt=Symbol(""),mo=Symbol("");class zo{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,fu(this,r)}run(){if(!this.active)return this.fn();let n=on,t=Fn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=on,on=this,Fn=!0,Un=1<<++jt,jt<=fo?vu(this):xs(this),this.fn()}finally{jt<=fo&&gu(this),Un=1<<--jt,on=this.parent,Fn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){on===this?this.deferStop=!0:this.active&&(xs(this),this.onStop&&this.onStop(),this.active=!1)}}function xs(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Fn=!0;const Fl=[];function Rt(){Fl.push(Fn),Fn=!1}function Ct(){const e=Fl.pop();Fn=e===void 0?!0:e}function Ve(e,n,t){if(Fn&&on){let r=Mr.get(e);r||Mr.set(e,r=new Map);let i=r.get(t);i||r.set(t,i=Uo()),Kl(i)}}function Kl(e,n){let t=!1;jt<=fo?Ml(e)||(e.n|=Un,t=!Hl(e)):t=!e.has(on),t&&(e.add(on),on.deps.push(e))}function On(e,n,t,r,i,o){const s=Mr.get(e);if(!s)return;let a=[];if(n==="clear")a=[...s.values()];else if(t==="length"&&ne(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(s.get(t)),n){case"add":ne(e)?Wo(t)&&a.push(s.get("length")):(a.push(s.get(tt)),mt(e)&&a.push(s.get(mo)));break;case"delete":ne(e)||(a.push(s.get(tt)),mt(e)&&a.push(s.get(mo)));break;case"set":mt(e)&&a.push(s.get(tt));break}if(a.length===1)a[0]&&vo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);vo(Uo(l))}}function vo(e,n){const t=ne(e)?e:[...e];for(const r of t)r.computed&&Is(r);for(const r of t)r.computed||Is(r)}function Is(e,n){(e!==on||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function hu(e,n){var t;return(t=Mr.get(e))===null||t===void 0?void 0:t.get(n)}const bu=Fo("__proto__,__v_isRef,__isVue"),jl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($o)),yu=qo(),Su=qo(!1,!0),Eu=qo(!0),As=Tu();function Tu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=ue(this);for(let o=0,s=this.length;o<s;o++)Ve(r,"get",o+"");const i=r[n](...t);return i===-1||i===!1?r[n](...t.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Rt();const r=ue(this)[n].apply(this,t);return Ct(),r}}),e}function _u(e){const n=ue(this);return Ve(n,"has",e),n.hasOwnProperty(e)}function qo(e=!1,n=!1){return function(r,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return n;if(i==="__v_raw"&&o===(e?n?Fu:ql:n?zl:Ul).get(r))return r;const s=ne(r);if(!e){if(s&&ve(As,i))return Reflect.get(As,i,o);if(i==="hasOwnProperty")return _u}const a=Reflect.get(r,i,o);return($o(i)?jl.has(i):bu(i))||(e||Ve(r,"get",i),n)?a:Ie(a)?s&&Wo(i)?a:a.value:Le(a)?e?Jo(a):tn(a):a}}const ku=$l(),Ou=$l(!0);function $l(e=!1){return function(t,r,i,o){let s=t[r];if(yt(s)&&Ie(s)&&!Ie(i))return!1;if(!e&&(!Fr(i)&&!yt(i)&&(s=ue(s),i=ue(i)),!ne(t)&&Ie(s)&&!Ie(i)))return s.value=i,!0;const a=ne(t)&&Wo(r)?Number(r)<t.length:ve(t,r),l=Reflect.set(t,r,i,o);return t===ue(o)&&(a?Qt(i,s)&&On(t,"set",r,i):On(t,"add",r,i)),l}}function Pu(e,n){const t=ve(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&On(e,"delete",n,void 0),r}function Ru(e,n){const t=Reflect.has(e,n);return(!$o(n)||!jl.has(n))&&Ve(e,"has",n),t}function Cu(e){return Ve(e,"iterate",ne(e)?"length":tt),Reflect.ownKeys(e)}const Wl={get:yu,set:ku,deleteProperty:Pu,has:Ru,ownKeys:Cu},Lu={get:Eu,set(e,n){return!0},deleteProperty(e,n){return!0}},xu=Ke({},Wl,{get:Su,set:Ou}),Go=e=>e,Zr=e=>Reflect.getPrototypeOf(e);function hr(e,n,t=!1,r=!1){e=e.__v_raw;const i=ue(e),o=ue(n);t||(n!==o&&Ve(i,"get",n),Ve(i,"get",o));const{has:s}=Zr(i),a=r?Go:t?Yo:er;if(s.call(i,n))return a(e.get(n));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(n)}function br(e,n=!1){const t=this.__v_raw,r=ue(t),i=ue(e);return n||(e!==i&&Ve(r,"has",e),Ve(r,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function yr(e,n=!1){return e=e.__v_raw,!n&&Ve(ue(e),"iterate",tt),Reflect.get(e,"size",e)}function ws(e){e=ue(e);const n=ue(this);return Zr(n).has.call(n,e)||(n.add(e),On(n,"add",e,e)),this}function Ns(e,n){n=ue(n);const t=ue(this),{has:r,get:i}=Zr(t);let o=r.call(t,e);o||(e=ue(e),o=r.call(t,e));const s=i.call(t,e);return t.set(e,n),o?Qt(n,s)&&On(t,"set",e,n):On(t,"add",e,n),this}function Bs(e){const n=ue(this),{has:t,get:r}=Zr(n);let i=t.call(n,e);i||(e=ue(e),i=t.call(n,e)),r&&r.call(n,e);const o=n.delete(e);return i&&On(n,"delete",e,void 0),o}function Ds(){const e=ue(this),n=e.size!==0,t=e.clear();return n&&On(e,"clear",void 0,void 0),t}function Sr(e,n){return function(r,i){const o=this,s=o.__v_raw,a=ue(s),l=n?Go:e?Yo:er;return!e&&Ve(a,"iterate",tt),s.forEach((c,d)=>r.call(i,l(c),l(d),o))}}function Er(e,n,t){return function(...r){const i=this.__v_raw,o=ue(i),s=mt(o),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=i[e](...r),d=t?Go:n?Yo:er;return!n&&Ve(o,"iterate",l?mo:tt),{next(){const{value:p,done:f}=c.next();return f?{value:p,done:f}:{value:a?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function In(e){return function(...n){return e==="delete"?!1:this}}function Iu(){const e={get(o){return hr(this,o)},get size(){return yr(this)},has:br,add:ws,set:Ns,delete:Bs,clear:Ds,forEach:Sr(!1,!1)},n={get(o){return hr(this,o,!1,!0)},get size(){return yr(this)},has:br,add:ws,set:Ns,delete:Bs,clear:Ds,forEach:Sr(!1,!0)},t={get(o){return hr(this,o,!0)},get size(){return yr(this,!0)},has(o){return br.call(this,o,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Sr(!0,!1)},r={get(o){return hr(this,o,!0,!0)},get size(){return yr(this,!0)},has(o){return br.call(this,o,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Er(o,!1,!1),t[o]=Er(o,!0,!1),n[o]=Er(o,!1,!0),r[o]=Er(o,!0,!0)}),[e,t,n,r]}const[Au,wu,Nu,Bu]=Iu();function Vo(e,n){const t=n?e?Bu:Nu:e?wu:Au;return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ve(t,i)&&i in r?t:r,i,o)}const Du={get:Vo(!1,!1)},Hu={get:Vo(!1,!0)},Mu={get:Vo(!0,!1)},Ul=new WeakMap,zl=new WeakMap,ql=new WeakMap,Fu=new WeakMap;function Ku(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ju(e){return e.__v_skip||!Object.isExtensible(e)?0:Ku(au(e))}function tn(e){return yt(e)?e:Zo(e,!1,Wl,Du,Ul)}function $u(e){return Zo(e,!1,xu,Hu,zl)}function Jo(e){return Zo(e,!0,Lu,Mu,ql)}function Zo(e,n,t,r,i){if(!Le(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=ju(e);if(s===0)return e;const a=new Proxy(e,s===2?r:t);return i.set(e,a),a}function Kn(e){return yt(e)?Kn(e.__v_raw):!!(e&&e.__v_isReactive)}function yt(e){return!!(e&&e.__v_isReadonly)}function Fr(e){return!!(e&&e.__v_isShallow)}function Gl(e){return Kn(e)||yt(e)}function ue(e){const n=e&&e.__v_raw;return n?ue(n):e}function St(e){return Hr(e,"__v_skip",!0),e}const er=e=>Le(e)?tn(e):e,Yo=e=>Le(e)?Jo(e):e;function Vl(e){Fn&&on&&(e=ue(e),Kl(e.dep||(e.dep=Uo())))}function Jl(e,n){e=ue(e);const t=e.dep;t&&vo(t)}function Ie(e){return!!(e&&e.__v_isRef===!0)}function ee(e){return Zl(e,!1)}function Wu(e){return Zl(e,!0)}function Zl(e,n){return Ie(e)?e:new Uu(e,n)}class Uu{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:ue(n),this._value=t?n:er(n)}get value(){return Vl(this),this._value}set value(n){const t=this.__v_isShallow||Fr(n)||yt(n);n=t?n:ue(n),Qt(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:er(n),Jl(this))}}function be(e){return Ie(e)?e.value:e}const zu={get:(e,n,t)=>be(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return Ie(i)&&!Ie(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function Yl(e){return Kn(e)?e:new Proxy(e,zu)}function cn(e){const n=ne(e)?new Array(e.length):{};for(const t in e)n[t]=go(e,t);return n}class qu{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return hu(ue(this._object),this._key)}}function go(e,n,t){const r=e[n];return Ie(r)?r:new qu(e,n,t)}var Xl;class Gu{constructor(n,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Xl]=!1,this._dirty=!0,this.effect=new zo(n,()=>{this._dirty||(this._dirty=!0,Jl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const n=ue(this);return Vl(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Xl="__v_isReadonly";function Vu(e,n,t=!1){let r,i;const o=se(e);return o?(r=e,i=an):(r=e.get,i=e.set),new Gu(r,i,o||!i,t)}function jn(e,n,t,r){let i;try{i=r?e(...r):e()}catch(o){Yr(o,n,t)}return i}function en(e,n,t,r){if(se(e)){const o=jn(e,n,t,r);return o&&Il(o)&&o.catch(s=>{Yr(s,n,t)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(en(e[o],n,t,r));return i}function Yr(e,n,t,r=!0){const i=n?n.vnode:null;if(n){let o=n.parent;const s=n.proxy,a=t;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,a)===!1)return}o=o.parent}const l=n.appContext.config.errorHandler;if(l){jn(l,null,10,[e,s,a]);return}}}let nr=!1,ho=!1;const We=[];let vn=0;const vt=[];let Tn=null,Xn=0;const Ql=Promise.resolve();let Xo=null;function it(e){const n=Xo||Ql;return e?n.then(this?e.bind(this):e):n}function Ju(e){let n=vn+1,t=We.length;for(;n<t;){const r=n+t>>>1;tr(We[r])<e?n=r+1:t=r}return n}function Qo(e){(!We.length||!We.includes(e,nr&&e.allowRecurse?vn+1:vn))&&(e.id==null?We.push(e):We.splice(Ju(e.id),0,e),ec())}function ec(){!nr&&!ho&&(ho=!0,Xo=Ql.then(tc))}function Zu(e){const n=We.indexOf(e);n>vn&&We.splice(n,1)}function Yu(e){ne(e)?vt.push(...e):(!Tn||!Tn.includes(e,e.allowRecurse?Xn+1:Xn))&&vt.push(e),ec()}function Hs(e,n=nr?vn+1:0){for(;n<We.length;n++){const t=We[n];t&&t.pre&&(We.splice(n,1),n--,t())}}function nc(e){if(vt.length){const n=[...new Set(vt)];if(vt.length=0,Tn){Tn.push(...n);return}for(Tn=n,Tn.sort((t,r)=>tr(t)-tr(r)),Xn=0;Xn<Tn.length;Xn++)Tn[Xn]();Tn=null,Xn=0}}const tr=e=>e.id==null?1/0:e.id,Xu=(e,n)=>{const t=tr(e)-tr(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function tc(e){ho=!1,nr=!0,We.sort(Xu);const n=an;try{for(vn=0;vn<We.length;vn++){const t=We[vn];t&&t.active!==!1&&jn(t,null,14)}}finally{vn=0,We.length=0,nc(),nr=!1,Xo=null,(We.length||vt.length)&&tc()}}function Qu(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Ce;let i=t;const o=n.startsWith("update:"),s=o&&n.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:p,trim:f}=r[d]||Ce;f&&(i=t.map(v=>xe(v)?v.trim():v)),p&&(i=t.map(du))}let a,l=r[a=hi(n)]||r[a=hi(gn(n))];!l&&o&&(l=r[a=hi(Pt(n))]),l&&en(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,en(c,e,6,i)}}function rc(e,n,t=!1){const r=n.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!se(e)){const l=c=>{const d=rc(c,n,!0);d&&(a=!0,Ke(s,d))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(Le(e)&&r.set(e,null),null):(ne(o)?o.forEach(l=>s[l]=null):Ke(s,o),Le(e)&&r.set(e,s),s)}function Xr(e,n){return!e||!qr(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(e,n[0].toLowerCase()+n.slice(1))||ve(e,Pt(n))||ve(e,n))}let je=null,Qr=null;function Kr(e){const n=je;return je=e,Qr=e&&e.type.__scopeId||null,n}function ep(e){Qr=e}function np(){Qr=null}function Z(e,n=je,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&Vs(-1);const o=Kr(n);let s;try{s=e(...i)}finally{Kr(o),r._d&&Vs(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function yi(e){const{type:n,vnode:t,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:l,emit:c,render:d,renderCache:p,data:f,setupState:v,ctx:y,inheritAttrs:S}=e;let k,_;const C=Kr(e);try{if(t.shapeFlag&4){const H=i||r;k=mn(d.call(H,H,p,o,v,f,y)),_=l}else{const H=n;k=mn(H.length>1?H(o,{attrs:l,slots:a,emit:c}):H(o,null)),_=n.props?l:tp(l)}}catch(H){Gt.length=0,Yr(H,e,1),k=N(nn)}let B=k;if(_&&S!==!1){const H=Object.keys(_),{shapeFlag:x}=B;H.length&&x&7&&(s&&H.some(Ko)&&(_=rp(_,s)),B=hn(B,_))}return t.dirs&&(B=hn(B),B.dirs=B.dirs?B.dirs.concat(t.dirs):t.dirs),t.transition&&(B.transition=t.transition),k=B,Kr(C),k}const tp=e=>{let n;for(const t in e)(t==="class"||t==="style"||qr(t))&&((n||(n={}))[t]=e[t]);return n},rp=(e,n)=>{const t={};for(const r in e)(!Ko(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function ip(e,n,t){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:l}=n,c=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Ms(r,s,c):!!s;if(l&8){const d=n.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(s[f]!==r[f]&&!Xr(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?Ms(r,s,c):!0:!!s;return!1}function Ms(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(n[o]!==e[o]&&!Xr(t,o))return!0}return!1}function op({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const sp=e=>e.__isSuspense;function ap(e,n){n&&n.pendingBranch?ne(e)?n.effects.push(...e):n.effects.push(e):Yu(e)}function $n(e,n){if(we){let t=we.provides;const r=we.parent&&we.parent.provides;r===t&&(t=we.provides=Object.create(r)),t[e]=n}}function Ae(e,n,t=!1){const r=we||je;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&se(n)?n.call(r.proxy):n}}const Tr={};function Fe(e,n,t){return ic(e,n,t)}function ic(e,n,{immediate:t,deep:r,flush:i,onTrack:o,onTrigger:s}=Ce){const a=Dl()===(we==null?void 0:we.scope)?we:null;let l,c=!1,d=!1;if(Ie(e)?(l=()=>e.value,c=Fr(e)):Kn(e)?(l=()=>e,r=!0):ne(e)?(d=!0,c=e.some(B=>Kn(B)||Fr(B)),l=()=>e.map(B=>{if(Ie(B))return B.value;if(Kn(B))return nt(B);if(se(B))return jn(B,a,2)})):se(e)?n?l=()=>jn(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),en(e,a,3,[f])}:l=an,n&&r){const B=l;l=()=>nt(B())}let p,f=B=>{p=_.onStop=()=>{jn(B,a,4)}},v;if(ar)if(f=an,n?t&&en(n,a,3,[l(),d?[]:void 0,f]):l(),i==="sync"){const B=Qp();v=B.__watcherHandles||(B.__watcherHandles=[])}else return an;let y=d?new Array(e.length).fill(Tr):Tr;const S=()=>{if(_.active)if(n){const B=_.run();(r||c||(d?B.some((H,x)=>Qt(H,y[x])):Qt(B,y)))&&(p&&p(),en(n,a,3,[B,y===Tr?void 0:d&&y[0]===Tr?[]:y,f]),y=B)}else _.run()};S.allowRecurse=!!n;let k;i==="sync"?k=S:i==="post"?k=()=>Ge(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),k=()=>Qo(S));const _=new zo(l,k);n?t?S():y=_.run():i==="post"?Ge(_.run.bind(_),a&&a.suspense):_.run();const C=()=>{_.stop(),a&&a.scope&&jo(a.scope.effects,_)};return v&&v.push(C),C}function lp(e,n,t){const r=this.proxy,i=xe(e)?e.includes(".")?oc(r,e):()=>r[e]:e.bind(r,r);let o;se(n)?o=n:(o=n.handler,t=n);const s=we;Et(this);const a=ic(i,o.bind(r),t);return s?Et(s):rt(),a}function oc(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function nt(e,n){if(!Le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Ie(e))nt(e.value,n);else if(ne(e))for(let t=0;t<e.length;t++)nt(e[t],n);else if(xl(e)||mt(e))e.forEach(t=>{nt(t,n)});else if(wl(e))for(const t in e)nt(e[t],n);return e}function sc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qe(()=>{e.isMounted=!0}),pr(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],cp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},setup(e,{slots:n}){const t=ii(),r=sc();let i;return()=>{const o=n.default&&es(n.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const S of o)if(S.type!==nn){s=S;break}}const a=ue(e),{mode:l}=a;if(r.isLeaving)return Si(s);const c=Fs(s);if(!c)return Si(s);const d=rr(c,a,r,t);ir(c,d);const p=t.subTree,f=p&&Fs(p);let v=!1;const{getTransitionKey:y}=c.type;if(y){const S=y();i===void 0?i=S:S!==i&&(i=S,v=!0)}if(f&&f.type!==nn&&(!Qn(c,f)||v)){const S=rr(f,a,r,t);if(ir(f,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},Si(s);l==="in-out"&&c.type!==nn&&(S.delayLeave=(k,_,C)=>{const B=lc(r,f);B[String(f.key)]=f,k._leaveCb=()=>{_(),k._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=C})}return s}}},ac=cp;function lc(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function rr(e,n,t,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:v,onLeaveCancelled:y,onBeforeAppear:S,onAppear:k,onAfterAppear:_,onAppearCancelled:C}=n,B=String(e.key),H=lc(t,e),x=(L,A)=>{L&&en(L,r,9,A)},U=(L,A)=>{const M=A[1];x(L,A),ne(L)?L.every(J=>J.length<=1)&&M():L.length<=1&&M()},z={mode:o,persisted:s,beforeEnter(L){let A=a;if(!t.isMounted)if(i)A=S||a;else return;L._leaveCb&&L._leaveCb(!0);const M=H[B];M&&Qn(e,M)&&M.el._leaveCb&&M.el._leaveCb(),x(A,[L])},enter(L){let A=l,M=c,J=d;if(!t.isMounted)if(i)A=k||l,M=_||c,J=C||d;else return;let j=!1;const oe=L._enterCb=te=>{j||(j=!0,te?x(J,[L]):x(M,[L]),z.delayedLeave&&z.delayedLeave(),L._enterCb=void 0)};A?U(A,[L,oe]):oe()},leave(L,A){const M=String(e.key);if(L._enterCb&&L._enterCb(!0),t.isUnmounting)return A();x(p,[L]);let J=!1;const j=L._leaveCb=oe=>{J||(J=!0,A(),oe?x(y,[L]):x(v,[L]),L._leaveCb=void 0,H[M]===e&&delete H[M])};H[M]=e,f?U(f,[L,j]):j()},clone(L){return rr(L,n,t,r)}};return z}function Si(e){if(ei(e))return e=hn(e),e.children=null,e}function Fs(e){return ei(e)?e.children?e.children[0]:void 0:e}function ir(e,n){e.shapeFlag&6&&e.component?ir(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function es(e,n=!1,t){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=t==null?s.key:String(t)+String(s.key!=null?s.key:o);s.type===De?(s.patchFlag&128&&i++,r=r.concat(es(s.children,n,a))):(n||s.type!==nn)&&r.push(a!=null?hn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Y(e){return se(e)?{setup:e,name:e.name}:e}const Ut=e=>!!e.type.__asyncLoader,ei=e=>e.type.__isKeepAlive;function dp(e,n){dc(e,"a",n)}function cc(e,n){dc(e,"da",n)}function dc(e,n,t=we){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ni(n,r,t),t){let i=t.parent;for(;i&&i.parent;)ei(i.parent.vnode)&&up(r,n,t,i),i=i.parent}}function up(e,n,t,r){const i=ni(n,e,r,!0);st(()=>{jo(r[n],i)},t)}function ni(e,n,t=we,r=!1){if(t){const i=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...s)=>{if(t.isUnmounted)return;Rt(),Et(t);const a=en(n,t,e,s);return rt(),Ct(),a});return r?i.unshift(o):i.push(o),o}}const Pn=e=>(n,t=we)=>(!ar||e==="sp")&&ni(e,(...r)=>n(...r),t),pp=Pn("bm"),qe=Pn("m"),fp=Pn("bu"),Lt=Pn("u"),pr=Pn("bum"),st=Pn("um"),mp=Pn("sp"),vp=Pn("rtg"),gp=Pn("rtc");function hp(e,n=we){ni("ec",e,n)}function bp(e,n){const t=je;if(t===null)return e;const r=oi(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[s,a,l,c=Ce]=n[o];s&&(se(s)&&(s={mounted:s,updated:s}),s.deep&&nt(a),i.push({dir:s,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function qn(e,n,t,r){const i=e.dirs,o=n&&n.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(Rt(),en(l,t,8,[e.el,a,e,n]),Ct())}}const ns="components";function fe(e,n){return pc(ns,e,!0,n)||e}const uc=Symbol();function yp(e){return xe(e)?pc(ns,e,!1)||e:e||uc}function pc(e,n,t=!0,r=!1){const i=je||we;if(i){const o=i.type;if(e===ns){const a=Zp(o,!1);if(a&&(a===n||a===gn(n)||a===Jr(gn(n))))return o}const s=Ks(i[e]||o[e],n)||Ks(i.appContext[e],n);return!s&&r?o:s}}function Ks(e,n){return e&&(e[n]||e[gn(n)]||e[Jr(gn(n))])}function ts(e,n,t,r){let i;const o=t&&t[r];if(ne(e)||xe(e)){i=new Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=n(e[s],s,void 0,o&&o[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=n(s+1,s,void 0,o&&o[s])}else if(Le(e))if(e[Symbol.iterator])i=Array.from(e,(s,a)=>n(s,a,void 0,o&&o[a]));else{const s=Object.keys(e);i=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];i[a]=n(e[c],c,a,o&&o[a])}}else i=[];return t&&(t[r]=i),i}function bo(e,n){for(let t=0;t<n.length;t++){const r=n[t];if(ne(r))for(let i=0;i<r.length;i++)e[r[i].name]=r[i].fn;else r&&(e[r.name]=r.key?(...i)=>{const o=r.fn(...i);return o&&(o.key=r.key),o}:r.fn)}return e}function ce(e,n,t={},r,i){if(je.isCE||je.parent&&Ut(je.parent)&&je.parent.isCE)return n!=="default"&&(t.name=n),N("slot",t,r&&r());let o=e[n];o&&o._c&&(o._d=!1),F();const s=o&&fc(o(t)),a=ke(De,{key:t.key||s&&s.key||`_${n}`},s||(r?r():[]),s&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function fc(e){return e.some(n=>sr(n)?!(n.type===nn||n.type===De&&!fc(n.children)):!0)?e:null}const yo=e=>e?kc(e)?oi(e)||e.proxy:yo(e.parent):null,zt=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yo(e.parent),$root:e=>yo(e.root),$emit:e=>e.emit,$options:e=>rs(e),$forceUpdate:e=>e.f||(e.f=()=>Qo(e.update)),$nextTick:e=>e.n||(e.n=it.bind(e.proxy)),$watch:e=>lp.bind(e)}),Ei=(e,n)=>e!==Ce&&!e.__isScriptSetup&&ve(e,n),Sp={get({_:e},n){const{ctx:t,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=e;let c;if(n[0]!=="$"){const v=s[n];if(v!==void 0)switch(v){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return o[n]}else{if(Ei(r,n))return s[n]=1,r[n];if(i!==Ce&&ve(i,n))return s[n]=2,i[n];if((c=e.propsOptions[0])&&ve(c,n))return s[n]=3,o[n];if(t!==Ce&&ve(t,n))return s[n]=4,t[n];So&&(s[n]=0)}}const d=zt[n];let p,f;if(d)return n==="$attrs"&&Ve(e,"get",n),d(e);if((p=a.__cssModules)&&(p=p[n]))return p;if(t!==Ce&&ve(t,n))return s[n]=4,t[n];if(f=l.config.globalProperties,ve(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:o}=e;return Ei(i,n)?(i[n]=t,!0):r!==Ce&&ve(r,n)?(r[n]=t,!0):ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!t[s]||e!==Ce&&ve(e,s)||Ei(n,s)||(a=o[0])&&ve(a,s)||ve(r,s)||ve(zt,s)||ve(i.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ve(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let So=!0;function Ep(e){const n=rs(e),t=e.proxy,r=e.ctx;So=!1,n.beforeCreate&&js(n.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:d,beforeMount:p,mounted:f,beforeUpdate:v,updated:y,activated:S,deactivated:k,beforeDestroy:_,beforeUnmount:C,destroyed:B,unmounted:H,render:x,renderTracked:U,renderTriggered:z,errorCaptured:L,serverPrefetch:A,expose:M,inheritAttrs:J,components:j,directives:oe,filters:te}=n;if(c&&Tp(c,r,null,e.appContext.config.unwrapInjectedRef),s)for(const ge in s){const pe=s[ge];se(pe)&&(r[ge]=pe.bind(t))}if(i){const ge=i.call(t,t);Le(ge)&&(e.data=tn(ge))}if(So=!0,o)for(const ge in o){const pe=o[ge],He=se(pe)?pe.bind(t,t):se(pe.get)?pe.get.bind(t,t):an,Ye=!se(pe)&&se(pe.set)?pe.set.bind(t):an,$e=R({get:He,set:Ye});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>$e.value,set:Me=>$e.value=Me})}if(a)for(const ge in a)mc(a[ge],r,t,ge);if(l){const ge=se(l)?l.call(t):l;Reflect.ownKeys(ge).forEach(pe=>{$n(pe,ge[pe])})}d&&js(d,e,"c");function ye(ge,pe){ne(pe)?pe.forEach(He=>ge(He.bind(t))):pe&&ge(pe.bind(t))}if(ye(pp,p),ye(qe,f),ye(fp,v),ye(Lt,y),ye(dp,S),ye(cc,k),ye(hp,L),ye(gp,U),ye(vp,z),ye(pr,C),ye(st,H),ye(mp,A),ne(M))if(M.length){const ge=e.exposed||(e.exposed={});M.forEach(pe=>{Object.defineProperty(ge,pe,{get:()=>t[pe],set:He=>t[pe]=He})})}else e.exposed||(e.exposed={});x&&e.render===an&&(e.render=x),J!=null&&(e.inheritAttrs=J),j&&(e.components=j),oe&&(e.directives=oe)}function Tp(e,n,t=an,r=!1){ne(e)&&(e=Eo(e));for(const i in e){const o=e[i];let s;Le(o)?"default"in o?s=Ae(o.from||i,o.default,!0):s=Ae(o.from||i):s=Ae(o),Ie(s)&&r?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):n[i]=s}}function js(e,n,t){en(ne(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function mc(e,n,t,r){const i=r.includes(".")?oc(t,r):()=>t[r];if(xe(e)){const o=n[e];se(o)&&Fe(i,o)}else if(se(e))Fe(i,e.bind(t));else if(Le(e))if(ne(e))e.forEach(o=>mc(o,n,t,r));else{const o=se(e.handler)?e.handler.bind(t):n[e.handler];se(o)&&Fe(i,o,e)}}function rs(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(n);let l;return a?l=a:!i.length&&!t&&!r?l=n:(l={},i.length&&i.forEach(c=>jr(l,c,s,!0)),jr(l,n,s)),Le(n)&&o.set(n,l),l}function jr(e,n,t,r=!1){const{mixins:i,extends:o}=n;o&&jr(e,o,t,!0),i&&i.forEach(s=>jr(e,s,t,!0));for(const s in n)if(!(r&&s==="expose")){const a=_p[s]||t&&t[s];e[s]=a?a(e[s],n[s]):n[s]}return e}const _p={data:$s,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Jn,directives:Jn,watch:Op,provide:$s,inject:kp};function $s(e,n){return n?e?function(){return Ke(se(e)?e.call(this,this):e,se(n)?n.call(this,this):n)}:n:e}function kp(e,n){return Jn(Eo(e),Eo(n))}function Eo(e){if(ne(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ue(e,n){return e?[...new Set([].concat(e,n))]:n}function Jn(e,n){return e?Ke(Ke(Object.create(null),e),n):n}function Op(e,n){if(!e)return n;if(!n)return e;const t=Ke(Object.create(null),e);for(const r in n)t[r]=Ue(e[r],n[r]);return t}function Pp(e,n,t,r=!1){const i={},o={};Hr(o,ri,1),e.propsDefaults=Object.create(null),vc(e,n,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);t?e.props=r?i:$u(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Rp(e,n,t,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=ue(i),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(Xr(e.emitsOptions,f))continue;const v=n[f];if(l)if(ve(o,f))v!==o[f]&&(o[f]=v,c=!0);else{const y=gn(f);i[y]=To(l,a,y,v,e,!1)}else v!==o[f]&&(o[f]=v,c=!0)}}}else{vc(e,n,i,o)&&(c=!0);let d;for(const p in a)(!n||!ve(n,p)&&((d=Pt(p))===p||!ve(n,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(i[p]=To(l,a,p,void 0,e,!0)):delete i[p]);if(o!==a)for(const p in o)(!n||!ve(n,p))&&(delete o[p],c=!0)}c&&On(e,"set","$attrs")}function vc(e,n,t,r){const[i,o]=e.propsOptions;let s=!1,a;if(n)for(let l in n){if(Lr(l))continue;const c=n[l];let d;i&&ve(i,d=gn(l))?!o||!o.includes(d)?t[d]=c:(a||(a={}))[d]=c:Xr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=ue(t),c=a||Ce;for(let d=0;d<o.length;d++){const p=o[d];t[p]=To(i,l,p,c[p],e,!ve(c,p))}}return s}function To(e,n,t,r,i,o){const s=e[t];if(s!=null){const a=ve(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&se(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(Et(i),r=c[t]=l.call(null,n),rt())}else r=l}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Pt(t))&&(r=!0))}return r}function gc(e,n,t=!1){const r=n.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},a=[];let l=!1;if(!se(e)){const d=p=>{l=!0;const[f,v]=gc(p,n,!0);Ke(s,f),v&&a.push(...v)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return Le(e)&&r.set(e,ft),ft;if(ne(o))for(let d=0;d<o.length;d++){const p=gn(o[d]);Ws(p)&&(s[p]=Ce)}else if(o)for(const d in o){const p=gn(d);if(Ws(p)){const f=o[d],v=s[p]=ne(f)||se(f)?{type:f}:Object.assign({},f);if(v){const y=qs(Boolean,v.type),S=qs(String,v.type);v[0]=y>-1,v[1]=S<0||y<S,(y>-1||ve(v,"default"))&&a.push(p)}}}const c=[s,a];return Le(e)&&r.set(e,c),c}function Ws(e){return e[0]!=="$"}function Us(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function zs(e,n){return Us(e)===Us(n)}function qs(e,n){return ne(n)?n.findIndex(t=>zs(t,e)):se(n)&&zs(n,e)?0:-1}const hc=e=>e[0]==="_"||e==="$stable",is=e=>ne(e)?e.map(mn):[mn(e)],Cp=(e,n,t)=>{if(n._n)return n;const r=Z((...i)=>is(n(...i)),t);return r._c=!1,r},bc=(e,n,t)=>{const r=e._ctx;for(const i in e){if(hc(i))continue;const o=e[i];if(se(o))n[i]=Cp(i,o,r);else if(o!=null){const s=is(o);n[i]=()=>s}}},yc=(e,n)=>{const t=is(n);e.slots.default=()=>t},Lp=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ue(n),Hr(n,"_",t)):bc(n,e.slots={})}else e.slots={},n&&yc(e,n);Hr(e.slots,ri,1)},xp=(e,n,t)=>{const{vnode:r,slots:i}=e;let o=!0,s=Ce;if(r.shapeFlag&32){const a=n._;a?t&&a===1?o=!1:(Ke(i,n),!t&&a===1&&delete i._):(o=!n.$stable,bc(n,i)),s=n}else n&&(yc(e,n),s={default:1});if(o)for(const a in i)!hc(a)&&!(a in s)&&delete i[a]};function Sc(){return{app:null,config:{isNativeTag:iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ip=0;function Ap(e,n){return function(r,i=null){se(r)||(r=Object.assign({},r)),i!=null&&!Le(i)&&(i=null);const o=Sc(),s=new Set;let a=!1;const l=o.app={_uid:Ip++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:ef,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&se(c.install)?(s.add(c),c.install(l,...d)):se(c)&&(s.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,p){if(!a){const f=N(r,i);return f.appContext=o,d&&n?n(f,c):e(f,c,p),a=!0,l._container=c,c.__vue_app__=l,oi(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l}};return l}}function _o(e,n,t,r,i=!1){if(ne(e)){e.forEach((f,v)=>_o(f,n&&(ne(n)?n[v]:n),t,r,i));return}if(Ut(r)&&!i)return;const o=r.shapeFlag&4?oi(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:l}=e,c=n&&n.r,d=a.refs===Ce?a.refs={}:a.refs,p=a.setupState;if(c!=null&&c!==l&&(xe(c)?(d[c]=null,ve(p,c)&&(p[c]=null)):Ie(c)&&(c.value=null)),se(l))jn(l,a,12,[s,d]);else{const f=xe(l),v=Ie(l);if(f||v){const y=()=>{if(e.f){const S=f?ve(p,l)?p[l]:d[l]:l.value;i?ne(S)&&jo(S,o):ne(S)?S.includes(o)||S.push(o):f?(d[l]=[o],ve(p,l)&&(p[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else f?(d[l]=s,ve(p,l)&&(p[l]=s)):v&&(l.value=s,e.k&&(d[e.k]=s))};s?(y.id=-1,Ge(y,t)):y()}}}const Ge=ap;function wp(e){return Np(e)}function Np(e,n){const t=pu();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:d,parentNode:p,nextSibling:f,setScopeId:v=an,insertStaticContent:y}=e,S=(u,m,g,b=null,T=null,w=null,K=!1,I=null,D=!!m.dynamicChildren)=>{if(u===m)return;u&&!Qn(u,m)&&(b=W(u),Me(u,T,w,!0),u=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:P,ref:h,shapeFlag:O}=m;switch(P){case ti:k(u,m,g,b);break;case nn:_(u,m,g,b);break;case Ti:u==null&&C(m,g,b,K);break;case De:j(u,m,g,b,T,w,K,I,D);break;default:O&1?x(u,m,g,b,T,w,K,I,D):O&6?oe(u,m,g,b,T,w,K,I,D):(O&64||O&128)&&P.process(u,m,g,b,T,w,K,I,D,le)}h!=null&&T&&_o(h,u&&u.ref,w,m||u,!m)},k=(u,m,g,b)=>{if(u==null)r(m.el=a(m.children),g,b);else{const T=m.el=u.el;m.children!==u.children&&c(T,m.children)}},_=(u,m,g,b)=>{u==null?r(m.el=l(m.children||""),g,b):m.el=u.el},C=(u,m,g,b)=>{[u.el,u.anchor]=y(u.children,m,g,b,u.el,u.anchor)},B=({el:u,anchor:m},g,b)=>{let T;for(;u&&u!==m;)T=f(u),r(u,g,b),u=T;r(m,g,b)},H=({el:u,anchor:m})=>{let g;for(;u&&u!==m;)g=f(u),i(u),u=g;i(m)},x=(u,m,g,b,T,w,K,I,D)=>{K=K||m.type==="svg",u==null?U(m,g,b,T,w,K,I,D):A(u,m,T,w,K,I,D)},U=(u,m,g,b,T,w,K,I)=>{let D,P;const{type:h,props:O,shapeFlag:q,transition:X,dirs:ie}=u;if(D=u.el=s(u.type,w,O&&O.is,O),q&8?d(D,u.children):q&16&&L(u.children,D,null,b,T,w&&h!=="foreignObject",K,I),ie&&qn(u,null,b,"created"),z(D,u,u.scopeId,K,b),O){for(const Ee in O)Ee!=="value"&&!Lr(Ee)&&o(D,Ee,null,O[Ee],w,u.children,b,T,$);"value"in O&&o(D,"value",null,O.value),(P=O.onVnodeBeforeMount)&&fn(P,b,u)}ie&&qn(u,null,b,"beforeMount");const he=(!T||T&&!T.pendingBranch)&&X&&!X.persisted;he&&X.beforeEnter(D),r(D,m,g),((P=O&&O.onVnodeMounted)||he||ie)&&Ge(()=>{P&&fn(P,b,u),he&&X.enter(D),ie&&qn(u,null,b,"mounted")},T)},z=(u,m,g,b,T)=>{if(g&&v(u,g),b)for(let w=0;w<b.length;w++)v(u,b[w]);if(T){let w=T.subTree;if(m===w){const K=T.vnode;z(u,K,K.scopeId,K.slotScopeIds,T.parent)}}},L=(u,m,g,b,T,w,K,I,D=0)=>{for(let P=D;P<u.length;P++){const h=u[P]=I?Dn(u[P]):mn(u[P]);S(null,h,m,g,b,T,w,K,I)}},A=(u,m,g,b,T,w,K)=>{const I=m.el=u.el;let{patchFlag:D,dynamicChildren:P,dirs:h}=m;D|=u.patchFlag&16;const O=u.props||Ce,q=m.props||Ce;let X;g&&Gn(g,!1),(X=q.onVnodeBeforeUpdate)&&fn(X,g,m,u),h&&qn(m,u,g,"beforeUpdate"),g&&Gn(g,!0);const ie=T&&m.type!=="foreignObject";if(P?M(u.dynamicChildren,P,I,g,b,ie,w):K||pe(u,m,I,null,g,b,ie,w,!1),D>0){if(D&16)J(I,m,O,q,g,b,T);else if(D&2&&O.class!==q.class&&o(I,"class",null,q.class,T),D&4&&o(I,"style",O.style,q.style,T),D&8){const he=m.dynamicProps;for(let Ee=0;Ee<he.length;Ee++){const Be=he[Ee],rn=O[Be],ct=q[Be];(ct!==rn||Be==="value")&&o(I,Be,rn,ct,T,u.children,g,b,$)}}D&1&&u.children!==m.children&&d(I,m.children)}else!K&&P==null&&J(I,m,O,q,g,b,T);((X=q.onVnodeUpdated)||h)&&Ge(()=>{X&&fn(X,g,m,u),h&&qn(m,u,g,"updated")},b)},M=(u,m,g,b,T,w,K)=>{for(let I=0;I<m.length;I++){const D=u[I],P=m[I],h=D.el&&(D.type===De||!Qn(D,P)||D.shapeFlag&70)?p(D.el):g;S(D,P,h,null,b,T,w,K,!0)}},J=(u,m,g,b,T,w,K)=>{if(g!==b){if(g!==Ce)for(const I in g)!Lr(I)&&!(I in b)&&o(u,I,g[I],null,K,m.children,T,w,$);for(const I in b){if(Lr(I))continue;const D=b[I],P=g[I];D!==P&&I!=="value"&&o(u,I,P,D,K,m.children,T,w,$)}"value"in b&&o(u,"value",g.value,b.value)}},j=(u,m,g,b,T,w,K,I,D)=>{const P=m.el=u?u.el:a(""),h=m.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:q,slotScopeIds:X}=m;X&&(I=I?I.concat(X):X),u==null?(r(P,g,b),r(h,g,b),L(m.children,g,h,T,w,K,I,D)):O>0&&O&64&&q&&u.dynamicChildren?(M(u.dynamicChildren,q,g,T,w,K,I),(m.key!=null||T&&m===T.subTree)&&os(u,m,!0)):pe(u,m,g,h,T,w,K,I,D)},oe=(u,m,g,b,T,w,K,I,D)=>{m.slotScopeIds=I,u==null?m.shapeFlag&512?T.ctx.activate(m,g,b,K,D):te(m,g,b,T,w,K,D):Te(u,m,D)},te=(u,m,g,b,T,w,K)=>{const I=u.component=zp(u,b,T);if(ei(u)&&(I.ctx.renderer=le),qp(I),I.asyncDep){if(T&&T.registerDep(I,ye),!u.el){const D=I.subTree=N(nn);_(null,D,m,g)}return}ye(I,u,m,g,T,w,K)},Te=(u,m,g)=>{const b=m.component=u.component;if(ip(u,m,g))if(b.asyncDep&&!b.asyncResolved){ge(b,m,g);return}else b.next=m,Zu(b.update),b.update();else m.el=u.el,b.vnode=m},ye=(u,m,g,b,T,w,K)=>{const I=()=>{if(u.isMounted){let{next:h,bu:O,u:q,parent:X,vnode:ie}=u,he=h,Ee;Gn(u,!1),h?(h.el=ie.el,ge(u,h,K)):h=ie,O&&bi(O),(Ee=h.props&&h.props.onVnodeBeforeUpdate)&&fn(Ee,X,h,ie),Gn(u,!0);const Be=yi(u),rn=u.subTree;u.subTree=Be,S(rn,Be,p(rn.el),W(rn),u,T,w),h.el=Be.el,he===null&&op(u,Be.el),q&&Ge(q,T),(Ee=h.props&&h.props.onVnodeUpdated)&&Ge(()=>fn(Ee,X,h,ie),T)}else{let h;const{el:O,props:q}=m,{bm:X,m:ie,parent:he}=u,Ee=Ut(m);if(Gn(u,!1),X&&bi(X),!Ee&&(h=q&&q.onVnodeBeforeMount)&&fn(h,he,m),Gn(u,!0),O&&ae){const Be=()=>{u.subTree=yi(u),ae(O,u.subTree,u,T,null)};Ee?m.type.__asyncLoader().then(()=>!u.isUnmounted&&Be()):Be()}else{const Be=u.subTree=yi(u);S(null,Be,g,b,u,T,w),m.el=Be.el}if(ie&&Ge(ie,T),!Ee&&(h=q&&q.onVnodeMounted)){const Be=m;Ge(()=>fn(h,he,Be),T)}(m.shapeFlag&256||he&&Ut(he.vnode)&&he.vnode.shapeFlag&256)&&u.a&&Ge(u.a,T),u.isMounted=!0,m=g=b=null}},D=u.effect=new zo(I,()=>Qo(P),u.scope),P=u.update=()=>D.run();P.id=u.uid,Gn(u,!0),P()},ge=(u,m,g)=>{m.component=u;const b=u.vnode.props;u.vnode=m,u.next=null,Rp(u,m.props,b,g),xp(u,m.children,g),Rt(),Hs(),Ct()},pe=(u,m,g,b,T,w,K,I,D=!1)=>{const P=u&&u.children,h=u?u.shapeFlag:0,O=m.children,{patchFlag:q,shapeFlag:X}=m;if(q>0){if(q&128){Ye(P,O,g,b,T,w,K,I,D);return}else if(q&256){He(P,O,g,b,T,w,K,I,D);return}}X&8?(h&16&&$(P,T,w),O!==P&&d(g,O)):h&16?X&16?Ye(P,O,g,b,T,w,K,I,D):$(P,T,w,!0):(h&8&&d(g,""),X&16&&L(O,g,b,T,w,K,I,D))},He=(u,m,g,b,T,w,K,I,D)=>{u=u||ft,m=m||ft;const P=u.length,h=m.length,O=Math.min(P,h);let q;for(q=0;q<O;q++){const X=m[q]=D?Dn(m[q]):mn(m[q]);S(u[q],X,g,null,T,w,K,I,D)}P>h?$(u,T,w,!0,!1,O):L(m,g,b,T,w,K,I,D,O)},Ye=(u,m,g,b,T,w,K,I,D)=>{let P=0;const h=m.length;let O=u.length-1,q=h-1;for(;P<=O&&P<=q;){const X=u[P],ie=m[P]=D?Dn(m[P]):mn(m[P]);if(Qn(X,ie))S(X,ie,g,null,T,w,K,I,D);else break;P++}for(;P<=O&&P<=q;){const X=u[O],ie=m[q]=D?Dn(m[q]):mn(m[q]);if(Qn(X,ie))S(X,ie,g,null,T,w,K,I,D);else break;O--,q--}if(P>O){if(P<=q){const X=q+1,ie=X<h?m[X].el:b;for(;P<=q;)S(null,m[P]=D?Dn(m[P]):mn(m[P]),g,ie,T,w,K,I,D),P++}}else if(P>q)for(;P<=O;)Me(u[P],T,w,!0),P++;else{const X=P,ie=P,he=new Map;for(P=ie;P<=q;P++){const Je=m[P]=D?Dn(m[P]):mn(m[P]);Je.key!=null&&he.set(Je.key,P)}let Ee,Be=0;const rn=q-ie+1;let ct=!1,Ps=0;const Dt=new Array(rn);for(P=0;P<rn;P++)Dt[P]=0;for(P=X;P<=O;P++){const Je=u[P];if(Be>=rn){Me(Je,T,w,!0);continue}let pn;if(Je.key!=null)pn=he.get(Je.key);else for(Ee=ie;Ee<=q;Ee++)if(Dt[Ee-ie]===0&&Qn(Je,m[Ee])){pn=Ee;break}pn===void 0?Me(Je,T,w,!0):(Dt[pn-ie]=P+1,pn>=Ps?Ps=pn:ct=!0,S(Je,m[pn],g,null,T,w,K,I,D),Be++)}const Rs=ct?Bp(Dt):ft;for(Ee=Rs.length-1,P=rn-1;P>=0;P--){const Je=ie+P,pn=m[Je],Cs=Je+1<h?m[Je+1].el:b;Dt[P]===0?S(null,pn,g,Cs,T,w,K,I,D):ct&&(Ee<0||P!==Rs[Ee]?$e(pn,g,Cs,2):Ee--)}}},$e=(u,m,g,b,T=null)=>{const{el:w,type:K,transition:I,children:D,shapeFlag:P}=u;if(P&6){$e(u.component.subTree,m,g,b);return}if(P&128){u.suspense.move(m,g,b);return}if(P&64){K.move(u,m,g,le);return}if(K===De){r(w,m,g);for(let O=0;O<D.length;O++)$e(D[O],m,g,b);r(u.anchor,m,g);return}if(K===Ti){B(u,m,g);return}if(b!==2&&P&1&&I)if(b===0)I.beforeEnter(w),r(w,m,g),Ge(()=>I.enter(w),T);else{const{leave:O,delayLeave:q,afterLeave:X}=I,ie=()=>r(w,m,g),he=()=>{O(w,()=>{ie(),X&&X()})};q?q(w,ie,he):he()}else r(w,m,g)},Me=(u,m,g,b=!1,T=!1)=>{const{type:w,props:K,ref:I,children:D,dynamicChildren:P,shapeFlag:h,patchFlag:O,dirs:q}=u;if(I!=null&&_o(I,null,g,u,!0),h&256){m.ctx.deactivate(u);return}const X=h&1&&q,ie=!Ut(u);let he;if(ie&&(he=K&&K.onVnodeBeforeUnmount)&&fn(he,m,u),h&6)E(u.component,g,b);else{if(h&128){u.suspense.unmount(g,b);return}X&&qn(u,null,m,"beforeUnmount"),h&64?u.type.remove(u,m,g,T,le,b):P&&(w!==De||O>0&&O&64)?$(P,m,g,!1,!0):(w===De&&O&384||!T&&h&16)&&$(D,m,g),b&&un(u)}(ie&&(he=K&&K.onVnodeUnmounted)||X)&&Ge(()=>{he&&fn(he,m,u),X&&qn(u,null,m,"unmounted")},g)},un=u=>{const{type:m,el:g,anchor:b,transition:T}=u;if(m===De){xn(g,b);return}if(m===Ti){H(u);return}const w=()=>{i(g),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(u.shapeFlag&1&&T&&!T.persisted){const{leave:K,delayLeave:I}=T,D=()=>K(g,w);I?I(u.el,w,D):D()}else w()},xn=(u,m)=>{let g;for(;u!==m;)g=f(u),i(u),u=g;i(m)},E=(u,m,g)=>{const{bum:b,scope:T,update:w,subTree:K,um:I}=u;b&&bi(b),T.stop(),w&&(w.active=!1,Me(K,u,m,g)),I&&Ge(I,m),Ge(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},$=(u,m,g,b=!1,T=!1,w=0)=>{for(let K=w;K<u.length;K++)Me(u[K],m,g,b,T)},W=u=>u.shapeFlag&6?W(u.component.subTree):u.shapeFlag&128?u.suspense.next():f(u.anchor||u.el),V=(u,m,g)=>{u==null?m._vnode&&Me(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,g),Hs(),nc(),m._vnode=u},le={p:S,um:Me,m:$e,r:un,mt:te,mc:L,pc:pe,pbc:M,n:W,o:e};let _e,ae;return n&&([_e,ae]=n(le)),{render:V,hydrate:_e,createApp:Ap(V,_e)}}function Gn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function os(e,n,t=!1){const r=e.children,i=n.children;if(ne(r)&&ne(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Dn(i[o]),a.el=s.el),t||os(s,a)),a.type===ti&&(a.el=s.el)}}function Bp(e){const n=e.slice(),t=[0];let r,i,o,s,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=t[t.length-1],e[i]<c){n[r]=i,t.push(r);continue}for(o=0,s=t.length-1;o<s;)a=o+s>>1,e[t[a]]<c?o=a+1:s=a;c<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,s=t[o-1];o-- >0;)t[o]=s,s=n[s];return t}const Dp=e=>e.__isTeleport,qt=e=>e&&(e.disabled||e.disabled===""),Gs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ko=(e,n)=>{const t=e&&e.to;return xe(t)?n?n(t):null:t},Hp={__isTeleport:!0,process(e,n,t,r,i,o,s,a,l,c){const{mc:d,pc:p,pbc:f,o:{insert:v,querySelector:y,createText:S,createComment:k}}=c,_=qt(n.props);let{shapeFlag:C,children:B,dynamicChildren:H}=n;if(e==null){const x=n.el=S(""),U=n.anchor=S("");v(x,t,r),v(U,t,r);const z=n.target=ko(n.props,y),L=n.targetAnchor=S("");z&&(v(L,z),s=s||Gs(z));const A=(M,J)=>{C&16&&d(B,M,J,i,o,s,a,l)};_?A(t,U):z&&A(z,L)}else{n.el=e.el;const x=n.anchor=e.anchor,U=n.target=e.target,z=n.targetAnchor=e.targetAnchor,L=qt(e.props),A=L?t:U,M=L?x:z;if(s=s||Gs(U),H?(f(e.dynamicChildren,H,A,i,o,s,a),os(e,n,!0)):l||p(e,n,A,M,i,o,s,a,!1),_)L||_r(n,t,x,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const J=n.target=ko(n.props,y);J&&_r(n,J,null,c,0)}else L&&_r(n,U,z,c,1)}Ec(n)},remove(e,n,t,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:d,target:p,props:f}=e;if(p&&o(d),(s||!qt(f))&&(o(c),a&16))for(let v=0;v<l.length;v++){const y=l[v];i(y,n,t,!0,!!y.dynamicChildren)}},move:_r,hydrate:Mp};function _r(e,n,t,{o:{insert:r},m:i},o=2){o===0&&r(e.targetAnchor,n,t);const{el:s,anchor:a,shapeFlag:l,children:c,props:d}=e,p=o===2;if(p&&r(s,n,t),(!p||qt(d))&&l&16)for(let f=0;f<c.length;f++)i(c[f],n,t,2);p&&r(a,n,t)}function Mp(e,n,t,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const d=n.target=ko(n.props,l);if(d){const p=d._lpa||d.firstChild;if(n.shapeFlag&16)if(qt(n.props))n.anchor=c(s(e),n,a(e),t,r,i,o),n.targetAnchor=p;else{n.anchor=s(e);let f=p;for(;f;)if(f=s(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,d._lpa=n.targetAnchor&&s(n.targetAnchor);break}c(p,n,d,t,r,i,o)}Ec(n)}return n.anchor&&s(n.anchor)}const Fp=Hp;function Ec(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const De=Symbol(void 0),ti=Symbol(void 0),nn=Symbol(void 0),Ti=Symbol(void 0),Gt=[];let sn=null;function F(e=!1){Gt.push(sn=e?null:[])}function Kp(){Gt.pop(),sn=Gt[Gt.length-1]||null}let or=1;function Vs(e){or+=e}function Tc(e){return e.dynamicChildren=or>0?sn||ft:null,Kp(),or>0&&sn&&sn.push(e),e}function Q(e,n,t,r,i,o){return Tc(re(e,n,t,r,i,o,!0))}function ke(e,n,t,r,i){return Tc(N(e,n,t,r,i,!0))}function sr(e){return e?e.__v_isVNode===!0:!1}function Qn(e,n){return e.type===n.type&&e.key===n.key}const ri="__vInternal",_c=({key:e})=>e??null,xr=({ref:e,ref_key:n,ref_for:t})=>e!=null?xe(e)||Ie(e)||se(e)?{i:je,r:e,k:n,f:!!t}:e:null;function re(e,n=null,t=null,r=0,i=null,o=e===De?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&_c(n),ref:n&&xr(n),scopeId:Qr,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return a?(ss(l,t),o&128&&e.normalize(l)):t&&(l.shapeFlag|=xe(t)?8:16),or>0&&!s&&sn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&sn.push(l),l}const N=jp;function jp(e,n=null,t=null,r=0,i=null,o=!1){if((!e||e===uc)&&(e=nn),sr(e)){const a=hn(e,n,!0);return t&&ss(a,t),or>0&&!o&&sn&&(a.shapeFlag&6?sn[sn.indexOf(e)]=a:sn.push(a)),a.patchFlag|=-2,a}if(Yp(e)&&(e=e.__vccOpts),n){n=$p(n);let{class:a,style:l}=n;a&&!xe(a)&&(n.class=G(a)),Le(l)&&(Gl(l)&&!ne(l)&&(l=Ke({},l)),n.style=Oe(l))}const s=xe(e)?1:sp(e)?128:Dp(e)?64:Le(e)?4:se(e)?2:0;return re(e,n,t,r,i,s,o,!0)}function $p(e){return e?Gl(e)||ri in e?Ke({},e):e:null}function hn(e,n,t=!1){const{props:r,ref:i,patchFlag:o,children:s}=e,a=n?xt(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&_c(a),ref:n&&n.ref?t&&i?ne(i)?i.concat(xr(n)):[i,xr(n)]:xr(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==De?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hn(e.ssContent),ssFallback:e.ssFallback&&hn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Qe(e=" ",n=0){return N(ti,null,e,n)}function ze(e="",n=!1){return n?(F(),ke(nn,null,e)):N(nn,null,e)}function mn(e){return e==null||typeof e=="boolean"?N(nn):ne(e)?N(De,null,e.slice()):typeof e=="object"?Dn(e):N(ti,null,String(e))}function Dn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:hn(e)}function ss(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ne(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),ss(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!(ri in n)?n._ctx=je:i===3&&je&&(je.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else se(n)?(n={default:n,_ctx:je},t=32):(n=String(n),r&64?(t=16,n=[Qe(n)]):t=8);e.children=n,e.shapeFlag|=t}function xt(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=G([n.class,r.class]));else if(i==="style")n.style=Oe([n.style,r.style]);else if(qr(i)){const o=n[i],s=r[i];s&&o!==s&&!(ne(o)&&o.includes(s))&&(n[i]=o?[].concat(o,s):s)}else i!==""&&(n[i]=r[i])}return n}function fn(e,n,t,r=null){en(e,n,7,[t,r])}const Wp=Sc();let Up=0;function zp(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||Wp,o={uid:Up++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gc(r,i),emitsOptions:rc(r,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Qu.bind(null,o),e.ce&&e.ce(o),o}let we=null;const ii=()=>we||je,Et=e=>{we=e,e.scope.on()},rt=()=>{we&&we.scope.off(),we=null};function kc(e){return e.vnode.shapeFlag&4}let ar=!1;function qp(e,n=!1){ar=n;const{props:t,children:r}=e.vnode,i=kc(e);Pp(e,t,i,n),Lp(e,r);const o=i?Gp(e,n):void 0;return ar=!1,o}function Gp(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=St(new Proxy(e.ctx,Sp));const{setup:r}=t;if(r){const i=e.setupContext=r.length>1?Jp(e):null;Et(e),Rt();const o=jn(r,e,0,[e.props,i]);if(Ct(),rt(),Il(o)){if(o.then(rt,rt),n)return o.then(s=>{Js(e,s,n)}).catch(s=>{Yr(s,e,0)});e.asyncDep=o}else Js(e,o,n)}else Oc(e,n)}function Js(e,n,t){se(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Le(n)&&(e.setupState=Yl(n)),Oc(e,t)}let Zs;function Oc(e,n,t){const r=e.type;if(!e.render){if(!n&&Zs&&!r.render){const i=r.template||rs(e).template;if(i){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ke(Ke({isCustomElement:o,delimiters:a},s),l);r.render=Zs(i,c)}}e.render=r.render||an}Et(e),Rt(),Ep(e),Ct(),rt()}function Vp(e){return new Proxy(e.attrs,{get(n,t){return Ve(e,"get","$attrs"),n[t]}})}function Jp(e){const n=r=>{e.exposed=r||{}};let t;return{get attrs(){return t||(t=Vp(e))},slots:e.slots,emit:e.emit,expose:n}}function oi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yl(St(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in zt)return zt[t](e)},has(n,t){return t in n||t in zt}}))}function Zp(e,n=!0){return se(e)?e.displayName||e.name:e.name||n&&e.__name}function Yp(e){return se(e)&&"__vccOpts"in e}const R=(e,n)=>Vu(e,n,ar);function lr(e,n,t){const r=arguments.length;return r===2?Le(n)&&!ne(n)?sr(n)?N(e,null,[n]):N(e,n):N(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&sr(t)&&(t=[t]),N(e,n,t))}const Xp=Symbol(""),Qp=()=>Ae(Xp),ef="3.2.47",nf="http://www.w3.org/2000/svg",et=typeof document<"u"?document:null,Ys=et&&et.createElement("template"),tf={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n?et.createElementNS(nf,e):et.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,o){const s=t?t.previousSibling:n.lastChild;if(i&&(i===o||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{Ys.innerHTML=r?`<svg>${e}</svg>`:e;const a=Ys.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function rf(e,n,t){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function of(e,n,t){const r=e.style,i=xe(t);if(t&&!i){if(n&&!xe(n))for(const o in n)t[o]==null&&Oo(r,o,"");for(const o in t)Oo(r,o,t[o])}else{const o=r.display;i?n!==t&&(r.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const Xs=/\s*!important$/;function Oo(e,n,t){if(ne(t))t.forEach(r=>Oo(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=sf(e,n);Xs.test(t)?e.setProperty(Pt(r),t.replace(Xs,""),"important"):e[r]=t}}const Qs=["Webkit","Moz","ms"],_i={};function sf(e,n){const t=_i[n];if(t)return t;let r=gn(n);if(r!=="filter"&&r in e)return _i[n]=r;r=Jr(r);for(let i=0;i<Qs.length;i++){const o=Qs[i]+r;if(o in e)return _i[n]=o}return n}const ea="http://www.w3.org/1999/xlink";function af(e,n,t,r,i){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(ea,n.slice(6,n.length)):e.setAttributeNS(ea,n,t);else{const o=ru(n);t==null||o&&!Cl(t)?e.removeAttribute(n):e.setAttribute(n,o?"":t)}}function lf(e,n,t,r,i,o,s){if(n==="innerHTML"||n==="textContent"){r&&s(r,i,o),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let a=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Cl(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(n)}function cf(e,n,t,r){e.addEventListener(n,t,r)}function df(e,n,t,r){e.removeEventListener(n,t,r)}function uf(e,n,t,r,i=null){const o=e._vei||(e._vei={}),s=o[n];if(r&&s)s.value=r;else{const[a,l]=pf(n);if(r){const c=o[n]=vf(r,i);cf(e,a,c,l)}else s&&(df(e,a,s,l),o[n]=void 0)}}const na=/(?:Once|Passive|Capture)$/;function pf(e){let n;if(na.test(e)){n={};let r;for(;r=e.match(na);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),n]}let ki=0;const ff=Promise.resolve(),mf=()=>ki||(ff.then(()=>ki=0),ki=Date.now());function vf(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;en(gf(r,t.value),n,5,[r])};return t.value=e,t.attached=mf(),t}function gf(e,n){if(ne(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const ta=/^on[a-z]/,hf=(e,n,t,r,i=!1,o,s,a,l)=>{n==="class"?rf(e,r,i):n==="style"?of(e,t,r):qr(n)?Ko(n)||uf(e,n,t,r,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):bf(e,n,r,i))?lf(e,n,r,o,s,a,l):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),af(e,n,r,i))};function bf(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&ta.test(n)&&se(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||ta.test(n)&&xe(t)?!1:n in e}const An="transition",Ht="animation",fr=(e,{slots:n})=>lr(ac,Rc(e),n);fr.displayName="Transition";const Pc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yf=fr.props=Ke({},ac.props,Pc),Vn=(e,n=[])=>{ne(e)?e.forEach(t=>t(...n)):e&&e(...n)},ra=e=>e?ne(e)?e.some(n=>n.length>1):e.length>1:!1;function Rc(e){const n={};for(const j in e)j in Pc||(n[j]=e[j]);if(e.css===!1)return n;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:d=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:v=`${t}-leave-to`}=e,y=Sf(i),S=y&&y[0],k=y&&y[1],{onBeforeEnter:_,onEnter:C,onEnterCancelled:B,onLeave:H,onLeaveCancelled:x,onBeforeAppear:U=_,onAppear:z=C,onAppearCancelled:L=B}=n,A=(j,oe,te)=>{Nn(j,oe?d:a),Nn(j,oe?c:s),te&&te()},M=(j,oe)=>{j._isLeaving=!1,Nn(j,p),Nn(j,v),Nn(j,f),oe&&oe()},J=j=>(oe,te)=>{const Te=j?z:C,ye=()=>A(oe,j,te);Vn(Te,[oe,ye]),ia(()=>{Nn(oe,j?l:o),En(oe,j?d:a),ra(Te)||oa(oe,r,S,ye)})};return Ke(n,{onBeforeEnter(j){Vn(_,[j]),En(j,o),En(j,s)},onBeforeAppear(j){Vn(U,[j]),En(j,l),En(j,c)},onEnter:J(!1),onAppear:J(!0),onLeave(j,oe){j._isLeaving=!0;const te=()=>M(j,oe);En(j,p),Lc(),En(j,f),ia(()=>{j._isLeaving&&(Nn(j,p),En(j,v),ra(H)||oa(j,r,k,te))}),Vn(H,[j,te])},onEnterCancelled(j){A(j,!1),Vn(B,[j])},onAppearCancelled(j){A(j,!0),Vn(L,[j])},onLeaveCancelled(j){M(j),Vn(x,[j])}})}function Sf(e){if(e==null)return null;if(Le(e))return[Oi(e.enter),Oi(e.leave)];{const n=Oi(e);return[n,n]}}function Oi(e){return uu(e)}function En(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function Nn(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function ia(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ef=0;function oa(e,n,t,r){const i=e._endId=++Ef,o=()=>{i===e._endId&&r()};if(t)return setTimeout(o,t);const{type:s,timeout:a,propCount:l}=Cc(e,n);if(!s)return r();const c=s+"end";let d=0;const p=()=>{e.removeEventListener(c,f),o()},f=v=>{v.target===e&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},a+1),e.addEventListener(c,f)}function Cc(e,n){const t=window.getComputedStyle(e),r=y=>(t[y]||"").split(", "),i=r(`${An}Delay`),o=r(`${An}Duration`),s=sa(i,o),a=r(`${Ht}Delay`),l=r(`${Ht}Duration`),c=sa(a,l);let d=null,p=0,f=0;n===An?s>0&&(d=An,p=s,f=o.length):n===Ht?c>0&&(d=Ht,p=c,f=l.length):(p=Math.max(s,c),d=p>0?s>c?An:Ht:null,f=d?d===An?o.length:l.length:0);const v=d===An&&/\b(transform|all)(,|$)/.test(r(`${An}Property`).toString());return{type:d,timeout:p,propCount:f,hasTransform:v}}function sa(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>aa(t)+aa(e[r])))}function aa(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Lc(){return document.body.offsetHeight}const xc=new WeakMap,Ic=new WeakMap,Ac={name:"TransitionGroup",props:Ke({},yf,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=ii(),r=sc();let i,o;return Lt(()=>{if(!i.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!Pf(i[0].el,t.vnode.el,s))return;i.forEach(_f),i.forEach(kf);const a=i.filter(Of);Lc(),a.forEach(l=>{const c=l.el,d=c.style;En(c,s),d.transform=d.webkitTransform=d.transitionDuration="";const p=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",p),c._moveCb=null,Nn(c,s))};c.addEventListener("transitionend",p)})}),()=>{const s=ue(e),a=Rc(s);let l=s.tag||De;i=o,o=n.default?es(n.default()):[];for(let c=0;c<o.length;c++){const d=o[c];d.key!=null&&ir(d,rr(d,a,r,t))}if(i)for(let c=0;c<i.length;c++){const d=i[c];ir(d,rr(d,a,r,t)),xc.set(d,d.el.getBoundingClientRect())}return N(l,null,o)}}},Tf=e=>delete e.mode;Ac.props;const wc=Ac;function _f(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function kf(e){Ic.set(e,e.el.getBoundingClientRect())}function Of(e){const n=xc.get(e),t=Ic.get(e),r=n.left-t.left,i=n.top-t.top;if(r||i){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${r}px,${i}px)`,o.transitionDuration="0s",e}}function Pf(e,n,t){const r=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),t.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(r);const{hasTransform:o}=Cc(r);return i.removeChild(r),o}const Rf=["ctrl","shift","alt","meta"],Cf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Rf.some(t=>e[`${t}Key`]&&!n.includes(t))},Lf=(e,n)=>(t,...r)=>{for(let i=0;i<n.length;i++){const o=Cf[n[i]];if(o&&o(t,n))return}return e(t,...r)},xf={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Mt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),Mt(e,!0),r.enter(e)):r.leave(e,()=>{Mt(e,!1)}):Mt(e,n))},beforeUnmount(e,{value:n}){Mt(e,n)}};function Mt(e,n){e.style.display=n?e._vod:"none"}const If=Ke({patchProp:hf},tf);let la;function Nc(){return la||(la=wp(If))}const ca=(...e)=>{Nc().render(...e)},Af=(...e)=>{const n=Nc().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=wf(r);if(!i)return;const o=n._component;!se(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},n};function wf(e){return xe(e)?document.querySelector(e):e}function Nf(e){const n=window.matchMedia(e),t=ee(n.matches),r=i=>{t.value=i.matches};return n.addEventListener("change",r),st(()=>{n.removeEventListener("change",r)}),t}function Bf(){const e=Nf("(prefers-color-scheme: dark)");return qe(()=>{e.value?(document.body.classList.add("dark"),document.body.setAttribute("arco-theme","dark")):(document.body.classList.remove("dark"),document.body.removeAttribute("arco-theme"))}),Fe(e,n=>{n?(document.body.classList.add("dark"),document.body.setAttribute("arco-theme","dark")):(document.body.classList.remove("dark"),document.body.removeAttribute("arco-theme"))}),e}const Bc=Symbol("IS_DARK"),Df=Y({__name:"App",setup(e){const n=Bf();return $n(Bc,n),(t,r)=>{const i=fe("router-view");return F(),ke(i)}}}),Hf="modulepreload",Mf=function(e,n){return new URL(e,n).href},da={},Pi=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Mf(o,r),o in da)return;da[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const p=i[d];if(p.href===o&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Hf,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const pt=typeof window<"u";function Ff(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Se=Object.assign;function Ri(e,n){const t={};for(const r in n){const i=n[r];t[r]=ln(i)?i.map(e):e(i)}return t}const Vt=()=>{},ln=Array.isArray,Kf=/\/$/,jf=e=>e.replace(Kf,"");function Ci(e,n,t="/"){let r,i={},o="",s="";const a=n.indexOf("#");let l=n.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=n.slice(0,l),o=n.slice(l+1,a>-1?a:n.length),i=e(o)),a>-1&&(r=r||n.slice(0,a),s=n.slice(a,n.length)),r=zf(r??n,t),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function $f(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function ua(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Wf(e,n,t){const r=n.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Tt(n.matched[r],t.matched[i])&&Dc(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Tt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Dc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Uf(e[t],n[t]))return!1;return!0}function Uf(e,n){return ln(e)?pa(e,n):ln(n)?pa(n,e):e===n}function pa(e,n){return ln(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function zf(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/");let i=t.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var cr;(function(e){e.pop="pop",e.push="push"})(cr||(cr={}));var Jt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Jt||(Jt={}));function qf(e){if(!e)if(pt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),jf(e)}const Gf=/^[^#]+#/;function Vf(e,n){return e.replace(Gf,"#")+n}function Jf(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const si=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zf(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=Jf(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function fa(e,n){return(history.state?history.state.position-n:-1)+e}const Po=new Map;function Yf(e,n){Po.set(e,n)}function Xf(e){const n=Po.get(e);return Po.delete(e),n}let Qf=()=>location.protocol+"//"+location.host;function Hc(e,n){const{pathname:t,search:r,hash:i}=n,o=e.indexOf("#");if(o>-1){let a=i.includes(e.slice(o))?e.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),ua(l,"")}return ua(t,e)+r+i}function em(e,n,t,r){let i=[],o=[],s=null;const a=({state:f})=>{const v=Hc(e,location),y=t.value,S=n.value;let k=0;if(f){if(t.value=v,n.value=f,s&&s===y){s=null;return}k=S?f.position-S.position:0}else r(v);i.forEach(_=>{_(t.value,y,{delta:k,type:cr.pop,direction:k?k>0?Jt.forward:Jt.back:Jt.unknown})})};function l(){s=t.value}function c(f){i.push(f);const v=()=>{const y=i.indexOf(f);y>-1&&i.splice(y,1)};return o.push(v),v}function d(){const{history:f}=window;f.state&&f.replaceState(Se({},f.state,{scroll:si()}),"")}function p(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:c,destroy:p}}function ma(e,n,t,r=!1,i=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:i?si():null}}function nm(e){const{history:n,location:t}=window,r={value:Hc(e,t)},i={value:n.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(l,c,d){const p=e.indexOf("#"),f=p>-1?(t.host&&document.querySelector("base")?e:e.slice(p))+l:Qf()+e+l;try{n[d?"replaceState":"pushState"](c,"",f),i.value=c}catch{t[d?"replace":"assign"](f)}}function s(l,c){const d=Se({},n.state,ma(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,d,!0),r.value=l}function a(l,c){const d=Se({},i.value,n.state,{forward:l,scroll:si()});o(d.current,d,!0);const p=Se({},ma(r.value,l,null),{position:d.position+1},c);o(l,p,!1),r.value=l}return{location:r,state:i,push:a,replace:s}}function tm(e){e=qf(e);const n=nm(e),t=em(e,n.state,n.location,n.replace);function r(o,s=!0){s||t.pauseListeners(),history.go(o)}const i=Se({location:"",base:e,go:r,createHref:Vf.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function rm(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tm(e)}function im(e){return typeof e=="string"||e&&typeof e=="object"}function Mc(e){return typeof e=="string"||typeof e=="symbol"}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fc=Symbol("");var va;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(va||(va={}));function _t(e,n){return Se(new Error,{type:e,[Fc]:!0},n)}function Sn(e,n){return e instanceof Error&&Fc in e&&(n==null||!!(e.type&n))}const ga="[^/]+?",om={sensitive:!1,strict:!1,start:!0,end:!0},sm=/[.+*?^${}()[\]/\\]/g;function am(e,n){const t=Se({},om,n),r=[];let i=t.start?"^":"";const o=[];for(const c of e){const d=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let p=0;p<c.length;p++){const f=c[p];let v=40+(t.sensitive?.25:0);if(f.type===0)p||(i+="/"),i+=f.value.replace(sm,"\\$&"),v+=40;else if(f.type===1){const{value:y,repeatable:S,optional:k,regexp:_}=f;o.push({name:y,repeatable:S,optional:k});const C=_||ga;if(C!==ga){v+=10;try{new RegExp(`(${C})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+H.message)}}let B=S?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;p||(B=k&&c.length<2?`(?:/${B})`:"/"+B),k&&(B+="?"),i+=B,v+=20,k&&(v+=-8),S&&(v+=-20),C===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const s=new RegExp(i,t.sensitive?"":"i");function a(c){const d=c.match(s),p={};if(!d)return null;for(let f=1;f<d.length;f++){const v=d[f]||"",y=o[f-1];p[y.name]=v&&y.repeatable?v.split("/"):v}return p}function l(c){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of f)if(v.type===0)d+=v.value;else if(v.type===1){const{value:y,repeatable:S,optional:k}=v,_=y in c?c[y]:"";if(ln(_)&&!S)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=ln(_)?_.join("/"):_;if(!C)if(k)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${y}"`);d+=C}}return d||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function lm(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function cm(e,n){let t=0;const r=e.score,i=n.score;for(;t<r.length&&t<i.length;){const o=lm(r[t],i[t]);if(o)return o;t++}if(Math.abs(i.length-r.length)===1){if(ha(r))return 1;if(ha(i))return-1}return i.length-r.length}function ha(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const dm={type:0,value:""},um=/[a-zA-Z0-9_]/;function pm(e){if(!e)return[[]];if(e==="/")return[[dm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(v){throw new Error(`ERR (${t})/"${c}": ${v}`)}let t=0,r=t;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,l,c="",d="";function p(){c&&(t===0?o.push({type:0,value:c}):t===1||t===2||t===3?(o.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&p(),s()):l===":"?(p(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:um.test(l)?f():(p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),p(),s(),i}function fm(e,n,t){const r=am(pm(e.path),t),i=Se(r,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function mm(e,n){const t=[],r=new Map;n=Sa({strict:!1,end:!0,sensitive:!1},n);function i(d){return r.get(d)}function o(d,p,f){const v=!f,y=vm(d);y.aliasOf=f&&f.record;const S=Sa(n,d),k=[y];if("alias"in d){const B=typeof d.alias=="string"?[d.alias]:d.alias;for(const H of B)k.push(Se({},y,{components:f?f.record.components:y.components,path:H,aliasOf:f?f.record:y}))}let _,C;for(const B of k){const{path:H}=B;if(p&&H[0]!=="/"){const x=p.record.path,U=x[x.length-1]==="/"?"":"/";B.path=p.record.path+(H&&U+H)}if(_=fm(B,p,S),f?f.alias.push(_):(C=C||_,C!==_&&C.alias.push(_),v&&d.name&&!ya(_)&&s(d.name)),y.children){const x=y.children;for(let U=0;U<x.length;U++)o(x[U],_,f&&f.children[U])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return C?()=>{s(C)}:Vt}function s(d){if(Mc(d)){const p=r.get(d);p&&(r.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(s),p.alias.forEach(s))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function a(){return t}function l(d){let p=0;for(;p<t.length&&cm(d,t[p])>=0&&(d.record.path!==t[p].record.path||!Kc(d,t[p]));)p++;t.splice(p,0,d),d.record.name&&!ya(d)&&r.set(d.record.name,d)}function c(d,p){let f,v={},y,S;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw _t(1,{location:d});S=f.record.name,v=Se(ba(p.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),d.params&&ba(d.params,f.keys.map(C=>C.name))),y=f.stringify(v)}else if("path"in d)y=d.path,f=t.find(C=>C.re.test(y)),f&&(v=f.parse(y),S=f.record.name);else{if(f=p.name?r.get(p.name):t.find(C=>C.re.test(p.path)),!f)throw _t(1,{location:d,currentLocation:p});S=f.record.name,v=Se({},p.params,d.params),y=f.stringify(v)}const k=[];let _=f;for(;_;)k.unshift(_.record),_=_.parent;return{name:S,path:y,params:v,matched:k,meta:hm(k)}}return e.forEach(d=>o(d)),{addRoute:o,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ba(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function vm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:gm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function gm(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="boolean"?t:t[r];return n}function ya(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hm(e){return e.reduce((n,t)=>Se(n,t.meta),{})}function Sa(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function Kc(e,n){return n.children.some(t=>t===e||Kc(e,t))}const jc=/#/g,bm=/&/g,ym=/\//g,Sm=/=/g,Em=/\?/g,$c=/\+/g,Tm=/%5B/g,_m=/%5D/g,Wc=/%5E/g,km=/%60/g,Uc=/%7B/g,Om=/%7C/g,zc=/%7D/g,Pm=/%20/g;function as(e){return encodeURI(""+e).replace(Om,"|").replace(Tm,"[").replace(_m,"]")}function Rm(e){return as(e).replace(Uc,"{").replace(zc,"}").replace(Wc,"^")}function Ro(e){return as(e).replace($c,"%2B").replace(Pm,"+").replace(jc,"%23").replace(bm,"%26").replace(km,"`").replace(Uc,"{").replace(zc,"}").replace(Wc,"^")}function Cm(e){return Ro(e).replace(Sm,"%3D")}function Lm(e){return as(e).replace(jc,"%23").replace(Em,"%3F")}function xm(e){return e==null?"":Lm(e).replace(ym,"%2F")}function $r(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Im(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace($c," "),s=o.indexOf("="),a=$r(s<0?o:o.slice(0,s)),l=s<0?null:$r(o.slice(s+1));if(a in n){let c=n[a];ln(c)||(c=n[a]=[c]),c.push(l)}else n[a]=l}return n}function Ea(e){let n="";for(let t in e){const r=e[t];if(t=Cm(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(ln(r)?r.map(o=>o&&Ro(o)):[r&&Ro(r)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function Am(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=ln(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return n}const wm=Symbol(""),Ta=Symbol(""),ai=Symbol(""),qc=Symbol(""),Co=Symbol("");function Ft(){let e=[];function n(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function Hn(e,n,t,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const l=p=>{p===!1?a(_t(4,{from:t,to:n})):p instanceof Error?a(p):im(p)?a(_t(2,{from:n,to:p})):(o&&r.enterCallbacks[i]===o&&typeof p=="function"&&o.push(p),s())},c=e.call(r&&r.instances[i],n,t,l);let d=Promise.resolve(c);e.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function Li(e,n,t,r){const i=[];for(const o of e)for(const s in o.components){let a=o.components[s];if(!(n!=="beforeRouteEnter"&&!o.instances[s]))if(Nm(a)){const c=(a.__vccOpts||a)[n];c&&i.push(Hn(c,t,r,o,s))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const d=Ff(c)?c.default:c;o.components[s]=d;const f=(d.__vccOpts||d)[n];return f&&Hn(f,t,r,o,s)()}))}}return i}function Nm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _a(e){const n=Ae(ai),t=Ae(qc),r=R(()=>n.resolve(be(e.to))),i=R(()=>{const{matched:l}=r.value,{length:c}=l,d=l[c-1],p=t.matched;if(!d||!p.length)return-1;const f=p.findIndex(Tt.bind(null,d));if(f>-1)return f;const v=ka(l[c-2]);return c>1&&ka(d)===v&&p[p.length-1].path!==v?p.findIndex(Tt.bind(null,l[c-2])):f}),o=R(()=>i.value>-1&&Mm(t.params,r.value.params)),s=R(()=>i.value>-1&&i.value===t.matched.length-1&&Dc(t.params,r.value.params));function a(l={}){return Hm(l)?n[be(e.replace)?"replace":"push"](be(e.to)).catch(Vt):Promise.resolve()}return{route:r,href:R(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}const Bm=Y({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_a,setup(e,{slots:n}){const t=tn(_a(e)),{options:r}=Ae(ai),i=R(()=>({[Oa(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Oa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&n.default(t);return e.custom?o:lr("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},o)}}}),Dm=Bm;function Hm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Mm(e,n){for(const t in n){const r=n[t],i=e[t];if(typeof r=="string"){if(r!==i)return!1}else if(!ln(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function ka(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Oa=(e,n,t)=>e??n??t,Fm=Y({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=Ae(Co),i=R(()=>e.route||r.value),o=Ae(Ta,0),s=R(()=>{let c=be(o);const{matched:d}=i.value;let p;for(;(p=d[c])&&!p.components;)c++;return c}),a=R(()=>i.value.matched[s.value]);$n(Ta,R(()=>s.value+1)),$n(wm,a),$n(Co,i);const l=ee();return Fe(()=>[l.value,a.value,e.name],([c,d,p],[f,v,y])=>{d&&(d.instances[p]=c,v&&v!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),c&&d&&(!v||!Tt(d,v)||!f)&&(d.enterCallbacks[p]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,d=e.name,p=a.value,f=p&&p.components[d];if(!f)return Pa(t.default,{Component:f,route:c});const v=p.props[d],y=v?v===!0?c.params:typeof v=="function"?v(c):v:null,k=lr(f,Se({},y,n,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Pa(t.default,{Component:k,route:c})||k}}});function Pa(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Km=Fm;function jm(e){const n=mm(e.routes,e),t=e.parseQuery||Im,r=e.stringifyQuery||Ea,i=e.history,o=Ft(),s=Ft(),a=Ft(),l=Wu(wn);let c=wn;pt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ri.bind(null,E=>""+E),p=Ri.bind(null,xm),f=Ri.bind(null,$r);function v(E,$){let W,V;return Mc(E)?(W=n.getRecordMatcher(E),V=$):V=E,n.addRoute(V,W)}function y(E){const $=n.getRecordMatcher(E);$&&n.removeRoute($)}function S(){return n.getRoutes().map(E=>E.record)}function k(E){return!!n.getRecordMatcher(E)}function _(E,$){if($=Se({},$||l.value),typeof E=="string"){const u=Ci(t,E,$.path),m=n.resolve({path:u.path},$),g=i.createHref(u.fullPath);return Se(u,m,{params:f(m.params),hash:$r(u.hash),redirectedFrom:void 0,href:g})}let W;if("path"in E)W=Se({},E,{path:Ci(t,E.path,$.path).path});else{const u=Se({},E.params);for(const m in u)u[m]==null&&delete u[m];W=Se({},E,{params:p(E.params)}),$.params=p($.params)}const V=n.resolve(W,$),le=E.hash||"";V.params=d(f(V.params));const _e=$f(r,Se({},E,{hash:Rm(le),path:V.path})),ae=i.createHref(_e);return Se({fullPath:_e,hash:le,query:r===Ea?Am(E.query):E.query||{}},V,{redirectedFrom:void 0,href:ae})}function C(E){return typeof E=="string"?Ci(t,E,l.value.path):Se({},E)}function B(E,$){if(c!==E)return _t(8,{from:$,to:E})}function H(E){return z(E)}function x(E){return H(Se(C(E),{replace:!0}))}function U(E){const $=E.matched[E.matched.length-1];if($&&$.redirect){const{redirect:W}=$;let V=typeof W=="function"?W(E):W;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=C(V):{path:V},V.params={}),Se({query:E.query,hash:E.hash,params:"path"in V?{}:E.params},V)}}function z(E,$){const W=c=_(E),V=l.value,le=E.state,_e=E.force,ae=E.replace===!0,u=U(W);if(u)return z(Se(C(u),{state:typeof u=="object"?Se({},le,u.state):le,force:_e,replace:ae}),$||W);const m=W;m.redirectedFrom=$;let g;return!_e&&Wf(r,V,W)&&(g=_t(16,{to:m,from:V}),Ye(V,V,!0,!1)),(g?Promise.resolve(g):A(m,V)).catch(b=>Sn(b)?Sn(b,2)?b:He(b):ge(b,m,V)).then(b=>{if(b){if(Sn(b,2))return z(Se({replace:ae},C(b.to),{state:typeof b.to=="object"?Se({},le,b.to.state):le,force:_e}),$||m)}else b=J(m,V,!0,ae,le);return M(m,V,b),b})}function L(E,$){const W=B(E,$);return W?Promise.reject(W):Promise.resolve()}function A(E,$){let W;const[V,le,_e]=$m(E,$);W=Li(V.reverse(),"beforeRouteLeave",E,$);for(const u of V)u.leaveGuards.forEach(m=>{W.push(Hn(m,E,$))});const ae=L.bind(null,E,$);return W.push(ae),dt(W).then(()=>{W=[];for(const u of o.list())W.push(Hn(u,E,$));return W.push(ae),dt(W)}).then(()=>{W=Li(le,"beforeRouteUpdate",E,$);for(const u of le)u.updateGuards.forEach(m=>{W.push(Hn(m,E,$))});return W.push(ae),dt(W)}).then(()=>{W=[];for(const u of E.matched)if(u.beforeEnter&&!$.matched.includes(u))if(ln(u.beforeEnter))for(const m of u.beforeEnter)W.push(Hn(m,E,$));else W.push(Hn(u.beforeEnter,E,$));return W.push(ae),dt(W)}).then(()=>(E.matched.forEach(u=>u.enterCallbacks={}),W=Li(_e,"beforeRouteEnter",E,$),W.push(ae),dt(W))).then(()=>{W=[];for(const u of s.list())W.push(Hn(u,E,$));return W.push(ae),dt(W)}).catch(u=>Sn(u,8)?u:Promise.reject(u))}function M(E,$,W){for(const V of a.list())V(E,$,W)}function J(E,$,W,V,le){const _e=B(E,$);if(_e)return _e;const ae=$===wn,u=pt?history.state:{};W&&(V||ae?i.replace(E.fullPath,Se({scroll:ae&&u&&u.scroll},le)):i.push(E.fullPath,le)),l.value=E,Ye(E,$,W,ae),He()}let j;function oe(){j||(j=i.listen((E,$,W)=>{if(!xn.listening)return;const V=_(E),le=U(V);if(le){z(Se(le,{replace:!0}),V).catch(Vt);return}c=V;const _e=l.value;pt&&Yf(fa(_e.fullPath,W.delta),si()),A(V,_e).catch(ae=>Sn(ae,12)?ae:Sn(ae,2)?(z(ae.to,V).then(u=>{Sn(u,20)&&!W.delta&&W.type===cr.pop&&i.go(-1,!1)}).catch(Vt),Promise.reject()):(W.delta&&i.go(-W.delta,!1),ge(ae,V,_e))).then(ae=>{ae=ae||J(V,_e,!1),ae&&(W.delta&&!Sn(ae,8)?i.go(-W.delta,!1):W.type===cr.pop&&Sn(ae,20)&&i.go(-1,!1)),M(V,_e,ae)}).catch(Vt)}))}let te=Ft(),Te=Ft(),ye;function ge(E,$,W){He(E);const V=Te.list();return V.length&&V.forEach(le=>le(E,$,W)),Promise.reject(E)}function pe(){return ye&&l.value!==wn?Promise.resolve():new Promise((E,$)=>{te.add([E,$])})}function He(E){return ye||(ye=!E,oe(),te.list().forEach(([$,W])=>E?W(E):$()),te.reset()),E}function Ye(E,$,W,V){const{scrollBehavior:le}=e;if(!pt||!le)return Promise.resolve();const _e=!W&&Xf(fa(E.fullPath,0))||(V||!W)&&history.state&&history.state.scroll||null;return it().then(()=>le(E,$,_e)).then(ae=>ae&&Zf(ae)).catch(ae=>ge(ae,E,$))}const $e=E=>i.go(E);let Me;const un=new Set,xn={currentRoute:l,listening:!0,addRoute:v,removeRoute:y,hasRoute:k,getRoutes:S,resolve:_,options:e,push:H,replace:x,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:Te.add,isReady:pe,install(E){const $=this;E.component("RouterLink",Dm),E.component("RouterView",Km),E.config.globalProperties.$router=$,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),pt&&!Me&&l.value===wn&&(Me=!0,H(i.location).catch(le=>{}));const W={};for(const le in wn)W[le]=R(()=>l.value[le]);E.provide(ai,$),E.provide(qc,tn(W)),E.provide(Co,l);const V=E.unmount;un.add(E),E.unmount=function(){un.delete(E),un.size<1&&(c=wn,j&&j(),j=null,l.value=wn,Me=!1,ye=!1),V()}}};return xn}function dt(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function $m(e,n){const t=[],r=[],i=[],o=Math.max(n.matched.length,e.matched.length);for(let s=0;s<o;s++){const a=n.matched[s];a&&(e.matched.find(c=>Tt(c,a))?r.push(a):t.push(a));const l=e.matched[s];l&&(n.matched.find(c=>Tt(c,l))||i.push(l))}return[t,r,i]}function Wm(){return Ae(ai)}const Um=jm({history:rm(),routes:[{path:"/",redirect:"/runner"},{path:"/runner",component:()=>Pi(()=>Promise.resolve().then(()=>Ak),void 0,import.meta.url)},{path:"/setting",component:()=>Pi(()=>Promise.resolve().then(()=>Dk),void 0,import.meta.url)},{path:"/about",component:()=>Pi(()=>Promise.resolve().then(()=>zk),void 0,import.meta.url)}]});var zm=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Gc;const li=e=>Gc=e,Vc=Symbol();function Lo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Zt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Zt||(Zt={}));function qm(){const e=Bl(!0),n=e.run(()=>ee({}));let t=[],r=[];const i=St({install(o){li(i),i._a=o,o.provide(Vc,i),o.config.globalProperties.$pinia=i,r.forEach(s=>t.push(s)),r=[]},use(o){return!this._a&&!zm?r.push(o):t.push(o),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return i}const Jc=()=>{};function Ra(e,n,t,r=Jc){e.push(n);const i=()=>{const o=e.indexOf(n);o>-1&&(e.splice(o,1),r())};return!t&&Dl()&&mu(i),i}function ut(e,...n){e.slice().forEach(t=>{t(...n)})}function xo(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,r)=>e.set(r,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],i=e[t];Lo(i)&&Lo(r)&&e.hasOwnProperty(t)&&!Ie(r)&&!Kn(r)?e[t]=xo(i,r):e[t]=r}return e}const Gm=Symbol();function Vm(e){return!Lo(e)||!e.hasOwnProperty(Gm)}const{assign:Bn}=Object;function Jm(e){return!!(Ie(e)&&e.effect)}function Zm(e,n,t,r){const{state:i,actions:o,getters:s}=n,a=t.state.value[e];let l;function c(){a||(t.state.value[e]=i?i():{});const d=cn(t.state.value[e]);return Bn(d,o,Object.keys(s||{}).reduce((p,f)=>(p[f]=St(R(()=>{li(t);const v=t._s.get(e);return s[f].call(v,v)})),p),{}))}return l=Zc(e,c,n,t,r,!0),l}function Zc(e,n,t={},r,i,o){let s;const a=Bn({actions:{}},t),l={deep:!0};let c,d,p=St([]),f=St([]),v;const y=r.state.value[e];!o&&!y&&(r.state.value[e]={}),ee({});let S;function k(z){let L;c=d=!1,typeof z=="function"?(z(r.state.value[e]),L={type:Zt.patchFunction,storeId:e,events:v}):(xo(r.state.value[e],z),L={type:Zt.patchObject,payload:z,storeId:e,events:v});const A=S=Symbol();it().then(()=>{S===A&&(c=!0)}),d=!0,ut(p,L,r.state.value[e])}const _=o?function(){const{state:L}=t,A=L?L():{};this.$patch(M=>{Bn(M,A)})}:Jc;function C(){s.stop(),p=[],f=[],r._s.delete(e)}function B(z,L){return function(){li(r);const A=Array.from(arguments),M=[],J=[];function j(Te){M.push(Te)}function oe(Te){J.push(Te)}ut(f,{args:A,name:z,store:x,after:j,onError:oe});let te;try{te=L.apply(this&&this.$id===e?this:x,A)}catch(Te){throw ut(J,Te),Te}return te instanceof Promise?te.then(Te=>(ut(M,Te),Te)).catch(Te=>(ut(J,Te),Promise.reject(Te))):(ut(M,te),te)}}const H={_p:r,$id:e,$onAction:Ra.bind(null,f),$patch:k,$reset:_,$subscribe(z,L={}){const A=Ra(p,z,L.detached,()=>M()),M=s.run(()=>Fe(()=>r.state.value[e],J=>{(L.flush==="sync"?d:c)&&z({storeId:e,type:Zt.direct,events:v},J)},Bn({},l,L)));return A},$dispose:C},x=tn(H);r._s.set(e,x);const U=r._e.run(()=>(s=Bl(),s.run(()=>n())));for(const z in U){const L=U[z];if(Ie(L)&&!Jm(L)||Kn(L))o||(y&&Vm(L)&&(Ie(L)?L.value=y[z]:xo(L,y[z])),r.state.value[e][z]=L);else if(typeof L=="function"){const A=B(z,L);U[z]=A,a.actions[z]=L}}return Bn(x,U),Bn(ue(x),U),Object.defineProperty(x,"$state",{get:()=>r.state.value[e],set:z=>{k(L=>{Bn(L,z)})}}),r._p.forEach(z=>{Bn(x,s.run(()=>z({store:x,app:r._a,pinia:r,options:a})))}),y&&o&&t.hydrate&&t.hydrate(x.$state,y),c=!0,d=!0,x}function Ym(e,n,t){let r,i;const o=typeof n=="function";typeof e=="string"?(r=e,i=o?t:n):(i=e,r=e.id);function s(a,l){const c=ii();return a=a||c&&Ae(Vc,null),a&&li(a),a=Gc,a._s.has(r)||(o?Zc(r,n,i,a):Zm(r,i,a)),a._s.get(r)}return s.$id=r,s}const mr=Symbol("ArcoConfigProvider");var Xm=Object.defineProperty,Qm=Object.defineProperties,ev=Object.getOwnPropertyDescriptors,Ca=Object.getOwnPropertySymbols,nv=Object.prototype.hasOwnProperty,tv=Object.prototype.propertyIsEnumerable,La=(e,n,t)=>n in e?Xm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,rv=(e,n)=>{for(var t in n||(n={}))nv.call(n,t)&&La(e,t,n[t]);if(Ca)for(var t of Ca(n))tv.call(n,t)&&La(e,t,n[t]);return e},iv=(e,n)=>Qm(e,ev(n));const ov="A",sv="arco",Io="$arco",Rn=e=>{var n;return(n=e==null?void 0:e.componentPrefix)!=null?n:ov},Cn=(e,n)=>{var t;n&&n.classPrefix&&(e.config.globalProperties[Io]=iv(rv({},(t=e.config.globalProperties[Io])!=null?t:{}),{classPrefix:n.classPrefix}))},de=e=>{var n,t,r;const i=ii(),o=Ae(mr,void 0),s=(r=(t=o==null?void 0:o.prefixCls)!=null?t:(n=i==null?void 0:i.appContext.config.globalProperties[Io])==null?void 0:n.classPrefix)!=null?r:sv;return e?`${s}-${e}`:s},ci=Object.prototype.toString;function ls(e){return ci.call(e)==="[object Array]"}function av(e){return ci.call(e)==="[object Object]"}function vr(e){return ci.call(e)==="[object String]"}function Ne(e){return ci.call(e)==="[object Number]"&&e===e}function Ir(e){return e===void 0}function di(e){return typeof e=="function"}const lv=e=>(e==null?void 0:e.$)!==void 0;var me=(e,n)=>{for(const[t,r]of n)e[t]=r;return e};const cv=Y({name:"IconLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-left`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),dv=["stroke-width","stroke-linecap","stroke-linejoin"],uv=re("path",{d:"M32 8.4 16.444 23.956 32 39.513"},null,-1),pv=[uv];function fv(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},pv,14,dv)}var xi=me(cv,[["render",fv]]);const mv=Object.assign(xi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+xi.name,xi)}}),vv=Y({name:"IconRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-right`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),gv=["stroke-width","stroke-linecap","stroke-linejoin"],hv=re("path",{d:"m16 39.513 15.556-15.557L16 8.4"},null,-1),bv=[hv];function yv(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},bv,14,gv)}var Ii=me(vv,[["render",yv]]);const Sv=Object.assign(Ii,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ii.name,Ii)}}),Ev=Y({name:"IconCheckCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-check-circle-fill`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Tv=["stroke-width","stroke-linecap","stroke-linejoin"],_v=re("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",fill:"currentColor",stroke:"none"},null,-1),kv=[_v];function Ov(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},kv,14,Tv)}var Ai=me(Ev,[["render",Ov]]);const Pv=Object.assign(Ai,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ai.name,Ai)}}),Rv=Y({name:"IconCloseCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-close-circle-fill`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Cv=["stroke-width","stroke-linecap","stroke-linejoin"],Lv=re("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",fill:"currentColor",stroke:"none"},null,-1),xv=[Lv];function Iv(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},xv,14,Cv)}var wi=me(Rv,[["render",Iv]]);const Av=Object.assign(wi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+wi.name,wi)}}),wv=Y({name:"IconExclamationCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-exclamation-circle-fill`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Nv=["stroke-width","stroke-linecap","stroke-linejoin"],Bv=re("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",fill:"currentColor",stroke:"none"},null,-1),Dv=[Bv];function Hv(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Dv,14,Nv)}var Ni=me(wv,[["render",Hv]]);const Mv=Object.assign(Ni,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ni.name,Ni)}}),Fv=Y({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-info-circle-fill`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Kv=["stroke-width","stroke-linecap","stroke-linejoin"],jv=re("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),$v=[jv];function Wv(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},$v,14,Kv)}var Bi=me(Fv,[["render",Wv]]);const Uv=Object.assign(Bi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Bi.name,Bi)}}),zv=Y({name:"IconClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-close`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),qv=["stroke-width","stroke-linecap","stroke-linejoin"],Gv=re("path",{d:"M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"},null,-1),Vv=[Gv];function Jv(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Vv,14,qv)}var Di=me(zv,[["render",Jv]]);const Zv=Object.assign(Di,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Di.name,Di)}}),Yv=Y({name:"IconInfoCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-info-circle`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Xv=["stroke-width","stroke-linecap","stroke-linejoin"],Qv=re("path",{d:"M24 20v14m0-16v-4m18 10c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),eg=[Qv];function ng(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},eg,14,Xv)}var Hi=me(Yv,[["render",ng]]);const tg=Object.assign(Hi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Hi.name,Hi)}}),rg=Y({name:"IconPlus",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-plus`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),ig=["stroke-width","stroke-linecap","stroke-linejoin"],og=re("path",{d:"M5 24h38M24 5v38"},null,-1),sg=[og];function ag(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},sg,14,ig)}var Mi=me(rg,[["render",ag]]);const lg=Object.assign(Mi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Mi.name,Mi)}}),cg=Y({name:"IconStop",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-stop`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),dg=["stroke-width","stroke-linecap","stroke-linejoin"],ug=re("path",{d:"M36.728 36.728c7.03-7.03 7.03-18.427 0-25.456-7.03-7.03-18.427-7.03-25.456 0m25.456 25.456c-7.03 7.03-18.427 7.03-25.456 0-7.03-7.03-7.03-18.427 0-25.456m25.456 25.456L11.272 11.272"},null,-1),pg=[ug];function fg(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},pg,14,dg)}var Fi=me(cg,[["render",fg]]);const mg=Object.assign(Fi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Fi.name,Fi)}}),vg=Y({name:"IconMore",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-more`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),gg=["stroke-width","stroke-linecap","stroke-linejoin"],hg=re("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",fill:"currentColor",stroke:"none"},null,-1),bg=re("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"},null,-1),yg=[hg,bg];function Sg(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},yg,14,gg)}var Ki=me(vg,[["render",Sg]]);const Eg=Object.assign(Ki,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ki.name,Ki)}}),Tg=Y({name:"IconCopy",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-copy`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),_g=["stroke-width","stroke-linecap","stroke-linejoin"],kg=re("path",{d:"M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"},null,-1),Og=[kg];function Pg(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Og,14,_g)}var ji=me(Tg,[["render",Pg]]);const Rg=Object.assign(ji,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ji.name,ji)}}),Cg=Y({name:"IconLink",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-link`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Lg=["stroke-width","stroke-linecap","stroke-linejoin"],xg=re("path",{d:"m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"},null,-1),Ig=[xg];function Ag(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Ig,14,Lg)}var $i=me(Cg,[["render",Ag]]);const wg=Object.assign($i,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+$i.name,$i)}}),Ng=Y({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-drag-dot-vertical`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Bg=["stroke-width","stroke-linecap","stroke-linejoin"],Dg=re("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),Hg=re("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),Mg=[Dg,Hg];function Fg(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Mg,14,Bg)}var Wi=me(Ng,[["render",Fg]]);const Kg=Object.assign(Wi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Wi.name,Wi)}}),jg=Y({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-drag-dot`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),$g=["stroke-width","stroke-linecap","stroke-linejoin"],Wg=re("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),Ug=re("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),zg=[Wg,Ug];function qg(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},zg,14,$g)}var Ui=me(jg,[["render",qg]]);const Gg=Object.assign(Ui,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ui.name,Ui)}}),Vg=Y({name:"IconEmpty",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-empty`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),Jg=["stroke-width","stroke-linecap","stroke-linejoin"],Zg=re("path",{d:"M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"},null,-1),Yg=[Zg];function Xg(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Yg,14,Jg)}var zi=me(Vg,[["render",Xg]]);const Qg=Object.assign(zi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+zi.name,zi)}}),eh=Y({name:"IconFile",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-file`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),nh=["stroke-width","stroke-linecap","stroke-linejoin"],th=re("path",{d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"},null,-1),rh=[th];function ih(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},rh,14,nh)}var qi=me(eh,[["render",ih]]);const oh=Object.assign(qi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+qi.name,qi)}}),sh=Y({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-loading`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),ah=["stroke-width","stroke-linecap","stroke-linejoin"],lh=re("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),ch=[lh];function dh(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},ch,14,ah)}var Gi=me(sh,[["render",dh]]);const cs=Object.assign(Gi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Gi.name,Gi)}}),uh=Y({name:"IconThunderbolt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("icon"),r=R(()=>[t,`${t}-thunderbolt`,{[`${t}-spin`]:e.spin}]),i=R(()=>{const s={};return e.size&&(s.fontSize=Ne(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:i,onClick:s=>{n("click",s)}}}}),ph=["stroke-width","stroke-linecap","stroke-linejoin"],fh=re("path",{d:"M27.824 5.203A.1.1 0 0 1 28 5.27V21h10.782a.1.1 0 0 1 .075.165L20.176 42.797A.1.1 0 0 1 20 42.73V27H9.219a.1.1 0 0 1-.076-.165L27.824 5.203Z"},null,-1),mh=[fh];function vh(e,n,t,r,i,o){return F(),Q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:G(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},mh,14,ph)}var Vi=me(uh,[["render",vh]]);const gh=Object.assign(Vi,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Vi.name,Vi)}}),hh=[oh,lg,gh,mg,Rg,tg];function bh(e){for(const n of hh)e.component(n.name,n)}const kr={formatYear:"YYYY 年",formatMonth:"YYYY 年 MM 月",today:"今天",view:{month:"月",year:"年",week:"周",day:"日"},month:{long:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"},short:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"}},week:{long:{self:"周",monday:"周一",tuesday:"周二",wednesday:"周三",thursday:"周四",friday:"周五",saturday:"周六",sunday:"周日"},short:{self:"周",monday:"一",tuesday:"二",wednesday:"三",thursday:"四",friday:"五",saturday:"六",sunday:"日"}}},yh={locale:"zh-CN",empty:{description:"暂无数据"},drawer:{okText:"确定",cancelText:"取消"},popconfirm:{okText:"确定",cancelText:"取消"},modal:{okText:"确定",cancelText:"取消"},pagination:{goto:"前往",page:"页",countPerPage:"条/页",total:"共 {0} 条"},table:{okText:"确定",resetText:"重置"},upload:{start:"开始",cancel:"取消",delete:"删除",retry:"点击重试",buttonText:"点击上传",preview:"预览",drag:"点击或拖拽文件到此处上传",dragHover:"释放文件并开始上传",error:"上传失败"},calendar:kr,datePicker:{view:kr.view,month:kr.month,week:kr.week,placeholder:{date:"请选择日期",week:"请选择周",month:"请选择月份",year:"请选择年份",quarter:"请选择季度",time:"请选择时间"},rangePlaceholder:{date:["开始日期","结束日期"],week:["开始周","结束周"],month:["开始月份","结束月份"],year:["开始年份","结束年份"],quarter:["开始季度","结束季度"],time:["开始时间","结束时间"]},selectTime:"选择时间",today:"今天",now:"此刻",ok:"确定"},image:{loading:"加载中"},imagePreview:{fullScreen:"全屏",rotateRight:"向右旋转",rotateLeft:"向左旋转",zoomIn:"放大",zoomOut:"缩小",originalSize:"原始尺寸"},typography:{copied:"已复制",copy:"复制",expand:"展开",collapse:"折叠",edit:"编辑"},form:{validateMessages:{required:"#{field} 是必填项",type:{string:"#{field} 不是合法的文本类型",number:"#{field} 不是合法的数字类型",boolean:"#{field} 不是合法的布尔类型",array:"#{field} 不是合法的数组类型",object:"#{field} 不是合法的对象类型",url:"#{field} 不是合法的 url 地址",email:"#{field} 不是合法的邮箱地址",ip:"#{field} 不是合法的 IP 地址"},number:{min:"`#{value}` 小于最小值 `#{min}`",max:"`#{value}` 大于最大值 `#{max}`",equal:"`#{value}` 不等于 `#{equal}`",range:"`#{value}` 不在 `#{min} ~ #{max}` 范围内",positive:"`#{value}` 不是正数",negative:"`#{value}` 不是负数"},array:{length:"`#{field}` 个数不等于 #{length}",minLength:"`#{field}` 个数最少为 #{minLength}",maxLength:"`#{field}` 个数最多为 #{maxLength}",includes:"#{field} 不包含 #{includes}",deepEqual:"#{field} 不等于 #{deepEqual}",empty:"`#{field}` 不是空数组"},string:{minLength:"字符数最少为 #{minLength}",maxLength:"字符数最多为 #{maxLength}",length:"字符数必须是 #{length}",match:"`#{value}` 不符合模式 #{pattern}",uppercase:"`#{value}` 必须全大写",lowercase:"`#{value}` 必须全小写"},object:{deepEqual:"`#{field}` 不等于期望值",hasKeys:"`#{field}` 不包含必须字段",empty:"`#{field}` 不是对象"},boolean:{true:"期望是 `true`",false:"期望是 `false`"}}}},Sh=ee("zh-CN"),Eh=tn({"zh-CN":yh}),Th=()=>{const e=Ae(mr,void 0),n=R(()=>{var i;return(i=e==null?void 0:e.locale)!=null?i:Eh[Sh.value]}),t=R(()=>n.value.locale);return{i18nMessage:n,locale:t,t:(i,...o)=>{const s=i.split(".");let a=n.value;for(const l of s){if(!a[l])return i;a=a[l]}return vr(a)&&o.length>0?a.replace(/{(\d+)}/g,(l,c)=>{var d;return(d=o[c])!=null?d:l}):a}}};var Yc=function(){if(typeof Map<"u")return Map;function e(n,t){var r=-1;return n.some(function(i,o){return i[0]===t?(r=o,!0):!1}),r}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(t){var r=e(this.__entries__,t),i=this.__entries__[r];return i&&i[1]},n.prototype.set=function(t,r){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=r:this.__entries__.push([t,r])},n.prototype.delete=function(t){var r=this.__entries__,i=e(r,t);~i&&r.splice(i,1)},n.prototype.has=function(t){return!!~e(this.__entries__,t)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];t.call(r,s[1],s[0])}},n}()}(),Ao=typeof window<"u"&&typeof document<"u"&&window.document===document,Wr=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),_h=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Wr):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),kh=2;function Oh(e,n){var t=!1,r=!1,i=0;function o(){t&&(t=!1,e()),r&&a()}function s(){_h(o)}function a(){var l=Date.now();if(t){if(l-i<kh)return;r=!0}else t=!0,r=!1,setTimeout(s,n);i=l}return a}var Ph=20,Rh=["top","right","bottom","left","width","height","size","weight"],Ch=typeof MutationObserver<"u",Lh=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Oh(this.refresh.bind(this),Ph)}return e.prototype.addObserver=function(n){~this.observers_.indexOf(n)||this.observers_.push(n),this.connected_||this.connect_()},e.prototype.removeObserver=function(n){var t=this.observers_,r=t.indexOf(n);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var n=this.updateObservers_();n&&this.refresh()},e.prototype.updateObservers_=function(){var n=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return n.forEach(function(t){return t.broadcastActive()}),n.length>0},e.prototype.connect_=function(){!Ao||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ch?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ao||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(n){var t=n.propertyName,r=t===void 0?"":t,i=Rh.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Xc=function(e,n){for(var t=0,r=Object.keys(n);t<r.length;t++){var i=r[t];Object.defineProperty(e,i,{value:n[i],enumerable:!1,writable:!1,configurable:!0})}return e},kt=function(e){var n=e&&e.ownerDocument&&e.ownerDocument.defaultView;return n||Wr},Qc=ui(0,0,0,0);function Ur(e){return parseFloat(e)||0}function xa(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return n.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+Ur(o)},0)}function xh(e){for(var n=["top","right","bottom","left"],t={},r=0,i=n;r<i.length;r++){var o=i[r],s=e["padding-"+o];t[o]=Ur(s)}return t}function Ih(e){var n=e.getBBox();return ui(0,0,n.width,n.height)}function Ah(e){var n=e.clientWidth,t=e.clientHeight;if(!n&&!t)return Qc;var r=kt(e).getComputedStyle(e),i=xh(r),o=i.left+i.right,s=i.top+i.bottom,a=Ur(r.width),l=Ur(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==n&&(a-=xa(r,"left","right")+o),Math.round(l+s)!==t&&(l-=xa(r,"top","bottom")+s)),!Nh(e)){var c=Math.round(a+o)-n,d=Math.round(l+s)-t;Math.abs(c)!==1&&(a-=c),Math.abs(d)!==1&&(l-=d)}return ui(i.left,i.top,a,l)}var wh=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof kt(e).SVGGraphicsElement}:function(e){return e instanceof kt(e).SVGElement&&typeof e.getBBox=="function"}}();function Nh(e){return e===kt(e).document.documentElement}function Bh(e){return Ao?wh(e)?Ih(e):Ah(e):Qc}function Dh(e){var n=e.x,t=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return Xc(s,{x:n,y:t,width:r,height:i,top:t,right:n+r,bottom:i+t,left:n}),s}function ui(e,n,t,r){return{x:e,y:n,width:t,height:r}}var Hh=function(){function e(n){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ui(0,0,0,0),this.target=n}return e.prototype.isActive=function(){var n=Bh(this.target);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var n=this.contentRect_;return this.broadcastWidth=n.width,this.broadcastHeight=n.height,n},e}(),Mh=function(){function e(n,t){var r=Dh(t);Xc(this,{target:n,contentRect:r})}return e}(),Fh=function(){function e(n,t,r){if(this.activeObservations_=[],this.observations_=new Yc,typeof n!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=n,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof kt(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)||(t.set(n,new Hh(n)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof kt(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)&&(t.delete(n),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var n=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&n.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var n=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new Mh(r.target,r.broadcastRect())});this.callback_.call(n,t,n),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ed=typeof WeakMap<"u"?new WeakMap:new Yc,nd=function(){function e(n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=Lh.getInstance(),r=new Fh(n,t,this);ed.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){nd.prototype[e]=function(){var n;return(n=ed.get(this))[e].apply(n,arguments)}});var ds=function(){return typeof Wr.ResizeObserver<"u"?Wr.ResizeObserver:nd}(),Ia;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(Ia||(Ia={}));var Aa;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(Aa||(Aa={}));const us=e=>!!(e&&e.shapeFlag&1),ps=(e,n)=>!!(e&&e.shapeFlag&6),td=(e,n)=>!!(e&&e.shapeFlag&16),Kh=(e,n)=>!!(e&&e.shapeFlag&32),Ar=e=>{var n,t;if(e)for(const r of e){if(us(r)||ps(r))return r;if(td(r,r.children)){const i=Ar(r.children);if(i)return i}else if(Kh(r,r.children)){const i=(t=(n=r.children).default)==null?void 0:t.call(n);if(i){const o=Ar(i);if(o)return o}}else if(ls(r)){const i=Ar(r);if(i)return i}}},jh=e=>{if(!e)return!0;for(const n of e)if(n.children)return!1;return!0},rd=(e,n)=>{if(e&&e.length>0)for(let t=0;t<e.length;t++){const r=e[t];if(us(r)||ps(r)){const o=di(n)?n(r):n;return e[t]=hn(r,o,!0),!0}const i=id(r);if(i&&i.length>0&&rd(i,n))return!0}return!1},id=e=>{if(td(e,e.children))return e.children;if(ls(e))return e},od=e=>{var n,t;if(us(e))return e.el;if(ps(e)){if(((n=e.el)==null?void 0:n.nodeType)===1)return e.el;if((t=e.component)!=null&&t.subTree){const r=od(e.component.subTree);if(r)return r}}else{const r=id(e);return sd(r)}},sd=e=>{if(e&&e.length>0)for(const n of e){const t=od(n);if(t)return t}},wa=e=>{if(e)return di(e)?e:()=>e};var $h=Y({name:"ResizeObserver",emits:["resize"],setup(e,{emit:n,slots:t}){let r;const i=ee(),o=R(()=>lv(i.value)?i.value.$el:i.value),s=l=>{l&&(r=new ds(c=>{const d=c[0];n("resize",d)}),r.observe(l))},a=()=>{r&&(r.disconnect(),r=null)};return Fe(o,l=>{r&&a(),l&&s(l)}),qe(()=>{o.value&&s(o.value)}),st(()=>{a()}),()=>{var l,c;const d=Ar((c=(l=t.default)==null?void 0:l.call(t))!=null?c:[]);return d?hn(d,{ref:i},!0):null}}});const ad=typeof window>"u"?global:window,Wh=ad.requestAnimationFrame,Na=ad.cancelAnimationFrame;function Uh(e){let n=0;const t=(...r)=>{n&&Na(n),n=Wh(()=>{e(...r),n=0})};return t.cancel=()=>{Na(n),n=0},t}const fs=()=>{},ms=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),Wn=(()=>ms?fs:(e,n,t,r=!1)=>{e.addEventListener(n,t,r)})(),gt=(()=>ms?fs:(e,n,t,r=!1)=>{e.removeEventListener(n,t,r)})(),zh=e=>{const n=document.createElement("div");return n.setAttribute("class",`arco-overlay arco-overlay-${e}`),n},qh=(e,n)=>{var t;return ms?fs():(t=(n??document).querySelector(e))!=null?t:void 0},Ba=(e,n)=>{if(vr(e)){const t=e[0]==="#"?`[id='${e.slice(1)}']`:e;return qh(t,n)}return e},Gh=Y({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:de("icon-hover")}}});function Vh(e,n,t,r,i,o){return F(),Q("span",{class:G([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[ce(e.$slots,"default")],2)}var Jh=me(Gh,[["render",Vh]]);const Zh=["info","success","warning","error"];var Yh=Object.defineProperty,Da=Object.getOwnPropertySymbols,Xh=Object.prototype.hasOwnProperty,Qh=Object.prototype.propertyIsEnumerable,Ha=(e,n,t)=>n in e?Yh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,eb=(e,n)=>{for(var t in n||(n={}))Xh.call(n,t)&&Ha(e,t,n[t]);if(Da)for(var t of Da(n))Qh.call(n,t)&&Ha(e,t,n[t]);return e};const nb=(e,n)=>{const t=eb({},e);for(const r of n)r in t&&delete t[r];return t},tb=Symbol("ArcoFormItemContext"),rb=({size:e,disabled:n,error:t,uninject:r}={})=>{const i=r?{}:Ae(tb,{}),o=R(()=>{var d;return(d=e==null?void 0:e.value)!=null?d:i.size}),s=R(()=>(n==null?void 0:n.value)||i.disabled),a=R(()=>(t==null?void 0:t.value)||i.error),l=go(i,"feedback"),c=go(i,"eventHandlers");return{formItemCtx:i,mergedSize:o,mergedDisabled:s,mergedError:a,feedback:l,eventHandlers:c}},ib=(e,{defaultValue:n="medium"}={})=>{const t=Ae(mr,void 0);return{mergedSize:R(()=>{var i,o;return(o=(i=e==null?void 0:e.value)!=null?i:t==null?void 0:t.size)!=null?o:n})}},ld=Symbol("ArcoButtonGroup"),ob=Y({name:"Button",components:{IconLoading:cs},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:n}){const{size:t,disabled:r}=cn(e),i=de("btn"),o=Ae(ld,void 0),s=R(()=>{var v;return(v=t.value)!=null?v:o==null?void 0:o.size}),a=R(()=>!!(r.value||o!=null&&o.disabled)),{mergedSize:l,mergedDisabled:c}=rb({size:s,disabled:a}),{mergedSize:d}=ib(l),p=R(()=>{var v,y,S,k,_,C;return[i,`${i}-${(y=(v=e.type)!=null?v:o==null?void 0:o.type)!=null?y:"secondary"}`,`${i}-shape-${(k=(S=e.shape)!=null?S:o==null?void 0:o.shape)!=null?k:"square"}`,`${i}-size-${d.value}`,`${i}-status-${(C=(_=e.status)!=null?_:o==null?void 0:o.status)!=null?C:"normal"}`,{[`${i}-long`]:e.long,[`${i}-loading`]:e.loading,[`${i}-disabled`]:c.value,[`${i}-link`]:vr(e.href)}]});return{prefixCls:i,cls:p,mergedDisabled:c,handleClick:v=>{if(e.disabled||e.loading){v.preventDefault();return}n("click",v)}}}}),sb=["href"],ab=["type","disabled"];function lb(e,n,t,r,i,o){const s=fe("icon-loading");return e.href?(F(),Q("a",{key:0,class:G([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:n[0]||(n[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(F(),Q("span",{key:0,class:G(`${e.prefixCls}-icon`)},[e.loading?(F(),ke(s,{key:0,spin:"true"})):ce(e.$slots,"icon",{key:1})],2)):ze("v-if",!0),ce(e.$slots,"default")],10,sb)):(F(),Q("button",{key:1,class:G([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:n[1]||(n[1]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(F(),Q("span",{key:0,class:G(`${e.prefixCls}-icon`)},[e.loading?(F(),ke(s,{key:0,spin:!0})):ce(e.$slots,"icon",{key:1})],2)):ze("v-if",!0),ce(e.$slots,"default")],10,ab))}var Ji=me(ob,[["render",lb]]);const cb=Y({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:n,size:t,status:r,disabled:i,shape:o}=cn(e),s=de("btn-group");return $n(ld,tn({type:n,size:t,shape:o,status:r,disabled:i})),{prefixCls:s}}});function db(e,n,t,r,i,o){return F(),Q("div",{class:G(e.prefixCls)},[ce(e.$slots,"default")],2)}var wr=me(cb,[["render",db]]);const gr=Object.assign(Ji,{Group:wr,install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+Ji.name,Ji),e.component(t+wr.name,wr)}});var ub=Object.defineProperty,Ma=Object.getOwnPropertySymbols,pb=Object.prototype.hasOwnProperty,fb=Object.prototype.propertyIsEnumerable,Fa=(e,n,t)=>n in e?ub(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,$t=(e,n)=>{for(var t in n||(n={}))pb.call(n,t)&&Fa(e,t,n[t]);if(Ma)for(var t of Ma(n))fb.call(n,t)&&Fa(e,t,n[t]);return e};const mb=()=>{const{body:e}=document,n=document.documentElement;let t;try{t=(window.top||window.self||window).document.body}catch{}return{height:Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight,(t==null?void 0:t.scrollHeight)||0,(t==null?void 0:t.clientHeight)||0),width:Math.max(e.scrollWidth,e.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth,(t==null?void 0:t.scrollWidth)||0,(t==null?void 0:t.clientWidth)||0)}},vb=()=>{const{height:e,width:n}=mb();return{width:Math.min(n,window.innerWidth),height:Math.min(e,window.innerHeight)}},Ka=(e,n)=>{var t,r;const i=e.getBoundingClientRect();return{top:i.top,bottom:i.bottom,left:i.left,right:i.right,scrollTop:i.top-n.top,scrollBottom:i.bottom-n.top,scrollLeft:i.left-n.left,scrollRight:i.right-n.left,width:(t=e.offsetWidth)!=null?t:e.clientWidth,height:(r=e.offsetHeight)!=null?r:e.clientHeight}},gb=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},Or=(e,n)=>{switch(n){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},hb=(e,n,{containerRect:t,triggerRect:r,popupRect:i,offset:o,translate:s})=>{const a=gb(e),l=vb(),c={top:t.top+n.top,bottom:l.height-(t.top+n.top+i.height),left:t.left+n.left,right:l.width-(t.left+n.left+i.width)};let d=e;if(a==="top"&&c.top<0)if(r.top>i.height)n.top=-t.top;else{const p=Wt("bottom",r,i,{offset:o,translate:s});l.height-(t.top+p.top+i.height)>0&&(d=Or(e,"bottom"),n.top=p.top)}if(a==="bottom"&&c.bottom<0)if(l.height-r.bottom>i.height)n.top=-t.top+(l.height-i.height);else{const p=Wt("top",r,i,{offset:o,translate:s});t.top+p.top>0&&(d=Or(e,"top"),n.top=p.top)}if(a==="left"&&c.left<0)if(r.left>i.width)n.left=-t.left;else{const p=Wt("right",r,i,{offset:o,translate:s});l.width-(t.left+p.left+i.width)>0&&(d=Or(e,"right"),n.left=p.left)}if(a==="right"&&c.right<0)if(l.width-r.right>i.width)n.left=-t.left+(l.width-i.width);else{const p=Wt("left",r,i,{offset:o,translate:s});t.left+p.left>0&&(d=Or(e,"left"),n.left=p.left)}return(a==="top"||a==="bottom")&&(c.left<0?n.left=-t.left:c.right<0&&(n.left=-t.left+(l.width-i.width))),(a==="left"||a==="right")&&(c.top<0?n.top=-t.top:c.bottom<0&&(n.top=-t.top+(l.height-i.height))),{popupPosition:n,position:d}},Wt=(e,n,t,{offset:r=0,translate:i=[0,0]}={})=>{var o;const s=(o=ls(i)?i:i[e])!=null?o:[0,0];switch(e){case"top":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+s[0],top:n.scrollTop-t.height-r+s[1]};case"tl":return{left:n.scrollLeft+s[0],top:n.scrollTop-t.height-r+s[1]};case"tr":return{left:n.scrollRight-t.width+s[0],top:n.scrollTop-t.height-r+s[1]};case"bottom":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+s[0],top:n.scrollBottom+r+s[1]};case"bl":return{left:n.scrollLeft+s[0],top:n.scrollBottom+r+s[1]};case"br":return{left:n.scrollRight-t.width+s[0],top:n.scrollBottom+r+s[1]};case"left":return{left:n.scrollLeft-t.width-r+s[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+s[1]};case"lt":return{left:n.scrollLeft-t.width-r+s[0],top:n.scrollTop+s[1]};case"lb":return{left:n.scrollLeft-t.width-r+s[0],top:n.scrollBottom-t.height+s[1]};case"right":return{left:n.scrollRight+r+s[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+s[1]};case"rt":return{left:n.scrollRight+r+s[0],top:n.scrollTop+s[1]};case"rb":return{left:n.scrollRight+r+s[0],top:n.scrollBottom-t.height+s[1]};default:return{left:0,top:0}}},bb=e=>{let n="0";["top","bottom"].includes(e)?n="50%":["left","lt","lb","tr","br"].includes(e)&&(n="100%");let t="0";return["left","right"].includes(e)?t="50%":["top","tl","tr","lt","rt"].includes(e)&&(t="100%"),`${n} ${t}`},yb=(e,n,t,r,{offset:i=0,translate:o=[0,0],customStyle:s={},autoFitPosition:a=!1}={})=>{let l=e,c=Wt(e,t,r,{offset:i,translate:o});if(a){const p=hb(e,c,{containerRect:n,popupRect:r,triggerRect:t,offset:i,translate:o});c=p.popupPosition,l=p.position}return{style:$t({left:`${c.left}px`,top:`${c.top}px`},s),position:l}},Sb=(e,n,t,{customStyle:r={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let o=Math.abs(n.scrollLeft+n.width/2-t.scrollLeft);return o>t.width-8&&(n.width>t.width?o=t.width/2:o=t.width-8),["top","tl","tr"].includes(e)?$t({left:`${o}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},r):$t({left:`${o}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)}let i=Math.abs(n.scrollTop+n.height/2-t.scrollTop);return i>t.height-8&&(n.height>t.height?i=t.height/2:i=t.height-8),["left","lt","lb"].includes(e)?$t({top:`${i}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},r):$t({top:`${i}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)},Eb=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,ja=e=>{var n;const t=[];let r=e;for(;r&&r!==document.documentElement;)Eb(r)&&t.push(r),r=(n=r.parentElement)!=null?n:void 0;return t},cd=()=>{const e={},n=ee(),t=()=>{const r=sd(e.value);r!==n.value&&(n.value=r)};return qe(()=>t()),Lt(()=>t()),{children:e,firstElement:n}};var wo=Y({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:n,slots:t}){const{children:r,firstElement:i}=cd();let o;const s=l=>{l&&(o=new ds(c=>{const d=c[0];n("resize",d)}),o.observe(l))},a=()=>{o&&(o.disconnect(),o=null)};return Fe(i,l=>{o&&a(),l&&s(l)}),pr(()=>{o&&a()}),()=>{var l;return r.value=(l=t.default)==null?void 0:l.call(t),r.value}}});function Tb(e,n){const t=ee(e[n]);return Lt(()=>{const r=e[n];t.value!==r&&(t.value=r)}),t}const $a=Symbol("ArcoTrigger"),_b=1e3,kb=5e3,Ob=1;class Pb{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=n=>(n==="message"?Array.from(this.popupStack.message).pop()||kb:Array.from(this.popupStack.popup).pop()||_b)+Ob,this.add=n=>{const t=this.getNextZIndex(n);return this.popupStack[n].add(t),n==="dialog"&&this.popupStack.popup.add(t),t},this.delete=(n,t)=>{this.popupStack[t].delete(n),t==="dialog"&&this.popupStack.popup.delete(n)},this.isLastDialog=n=>this.popupStack.dialog.size>1?n===Array.from(this.popupStack.dialog).pop():!0}}const Zi=new Pb;function dd(e,{visible:n,runOnMounted:t}={}){const r=ee(0),i=()=>{r.value=Zi.add(e)},o=()=>{Zi.delete(r.value,e)},s=()=>e==="dialog"?Zi.isLastDialog(r.value):!1;return Fe(()=>n==null?void 0:n.value,a=>{a?i():o()},{immediate:!0}),t&&(qe(()=>{i()}),pr(()=>{o()})),{zIndex:Jo(r),open:i,close:o,isLastDialog:s}}const Rb=({elementRef:e,onResize:n})=>{let t;return{createResizeObserver:()=>{e.value&&(t=new ds(o=>{const s=o[0];di(n)&&n(s)}),t.observe(e.value))},destroyResizeObserver:()=>{t&&(t.disconnect(),t=null)}}};var Cb=Y({name:"ClientOnly",setup(e,{slots:n}){const t=ee(!1);return qe(()=>t.value=!0),()=>{var r;return t.value?(r=n.default)==null?void 0:r.call(n):null}}});const Lb=({popupContainer:e,visible:n,defaultContainer:t="body",documentContainer:r})=>{const i=ee(e.value),o=ee(),s=()=>{const a=Ba(e.value),l=a?e.value:t,c=a??(r?document.documentElement:Ba(t));l!==i.value&&(i.value=l),c!==o.value&&(o.value=c)};return qe(()=>s()),Fe(n,a=>{i.value!==e.value&&a&&s()}),{teleportContainer:i,containerRef:o}};var xb=Object.defineProperty,Ib=Object.defineProperties,Ab=Object.getOwnPropertyDescriptors,Wa=Object.getOwnPropertySymbols,wb=Object.prototype.hasOwnProperty,Nb=Object.prototype.propertyIsEnumerable,Ua=(e,n,t)=>n in e?xb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Bb=(e,n)=>{for(var t in n||(n={}))wb.call(n,t)&&Ua(e,t,n[t]);if(Wa)for(var t of Wa(n))Nb.call(n,t)&&Ua(e,t,n[t]);return e},Db=(e,n)=>Ib(e,Ab(n));const Hb=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var Yi=Y({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{popupContainer:i}=cn(e),o=de("trigger"),s=R(()=>nb(r,Hb)),a=Ae(mr,void 0),l=R(()=>[].concat(e.trigger)),c=new Set,d=Ae($a,void 0),{children:p,firstElement:f}=cd(),v=ee(),y=ee(e.defaultPopupVisible),S=ee(e.position),k=ee({}),_=ee({}),C=ee({}),B=ee(),H=ee({top:0,left:0}),x=R(()=>{var h;return(h=e.popupVisible)!=null?h:y.value}),{teleportContainer:U,containerRef:z}=Lb({popupContainer:i,visible:x,documentContainer:!0}),{zIndex:L}=dd("popup",{visible:x});let A=0,M=!1;const J=()=>{A&&(window.clearTimeout(A),A=0)},j=h=>{if(e.alignPoint){const{pageX:O,pageY:q}=h;H.value={top:q,left:O}}},oe=()=>{if(!f.value||!v.value||!z.value)return;const h=z.value.getBoundingClientRect(),O=e.alignPoint?{top:H.value.top,bottom:H.value.top,left:H.value.left,right:H.value.left,scrollTop:H.value.top,scrollBottom:H.value.top,scrollLeft:H.value.left,scrollRight:H.value.left,width:0,height:0}:Ka(f.value,h),q=()=>Ka(v.value,h),X=q(),{style:ie,position:he}=yb(e.position,h,O,X,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(_.value={transformOrigin:bb(he)}),e.autoFitPopupMinWidth?ie.minWidth=`${O.width}px`:e.autoFitPopupWidth&&(ie.width=`${O.width}px`),S.value!==he&&(S.value=he),k.value=ie,e.showArrow&&it(()=>{C.value=Sb(he,O,q(),{customStyle:e.arrowStyle})})},te=(h,O)=>{if(h===x.value&&A===0)return;const q=()=>{y.value=h,n("update:popupVisible",h),n("popupVisibleChange",h),h&&it(()=>{oe()})};O?(J(),h!==x.value&&(A=window.setTimeout(q,O))):q()},Te=h=>{var O;(O=r.onClick)==null||O.call(r,h),!(e.disabled||x.value&&!e.clickToClose)&&(l.value.includes("click")?(j(h),te(!x.value)):l.value.includes("contextMenu")&&x.value&&te(!1))},ye=h=>{var O;(O=r.onMouseenter)==null||O.call(r,h),!(e.disabled||!l.value.includes("hover"))&&(j(h),te(!0,e.mouseEnterDelay))},ge=h=>{d==null||d.onMouseenter(h),ye(h)},pe=h=>{var O;(O=r.onMouseleave)==null||O.call(r,h),!(e.disabled||!l.value.includes("hover"))&&te(!1,e.mouseLeaveDelay)},He=h=>{d==null||d.onMouseleave(h),pe(h)},Ye=h=>{var O;(O=r.onFocusin)==null||O.call(r,h),!(e.disabled||!l.value.includes("focus"))&&te(!0,e.focusDelay)},$e=h=>{var O;(O=r.onFocusout)==null||O.call(r,h),!(e.disabled||!l.value.includes("focus"))&&e.blurToClose&&te(!1)},Me=h=>{var O;(O=r.onContextmenu)==null||O.call(r,h),!(e.disabled||!l.value.includes("contextMenu")||x.value&&!e.clickToClose)&&(j(h),te(!x.value),h.preventDefault())};$n($a,tn({onMouseenter:ge,onMouseleave:He,addChildRef:h=>{c.add(h),d==null||d.addChildRef(h)},removeChildRef:h=>{c.delete(h),d==null||d.removeChildRef(h)}}));const E=()=>{gt(document.documentElement,"mousedown",V),M=!1},$=Tb(t,"content"),W=R(()=>{var h;return e.hideEmpty&&jh((h=$.value)==null?void 0:h.call($))}),V=h=>{var O,q,X;if(!((O=f.value)!=null&&O.contains(h.target)||(q=v.value)!=null&&q.contains(h.target))){for(const ie of c)if((X=ie.value)!=null&&X.contains(h.target))return;E(),te(!1)}},le=Uh(()=>{x.value&&oe()}),_e=()=>{x.value&&oe()},ae=()=>{_e(),n("resize")},u=h=>{e.preventFocus&&h.preventDefault()};d==null||d.addChildRef(v);const m=R(()=>x.value?e.openedClass:void 0);let g;Fe(x,h=>{if(e.clickOutsideToClose&&(!h&&M?E():h&&!M&&(Wn(document.documentElement,"mousedown",V),M=!0)),e.updateAtScroll||a!=null&&a.updateAtScroll){if(h){g=ja(f.value);for(const O of g)O.addEventListener("scroll",le)}else if(g){for(const O of g)O.removeEventListener("scroll",le);g=void 0}}h&&(w.value=!0)}),Fe(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{x.value&&oe()});const{createResizeObserver:b,destroyResizeObserver:T}=Rb({elementRef:z,onResize:_e});qe(()=>{if(b(),x.value&&(oe(),e.clickOutsideToClose&&!M&&(Wn(document.documentElement,"mousedown",V),M=!0),e.updateAtScroll||a!=null&&a.updateAtScroll)){g=ja(f.value);for(const h of g)h.addEventListener("scroll",le)}}),Lt(()=>{x.value&&oe()}),cc(()=>{te(!1)}),pr(()=>{if(d==null||d.removeChildRef(v),T(),M&&E(),g){for(const h of g)h.removeEventListener("scroll",le);g=void 0}});const w=ee(x.value),K=ee(!1),I=()=>{K.value=!0},D=()=>{K.value=!1,x.value&&n("show")},P=()=>{K.value=!1,x.value||(w.value=!1,n("hide"))};return()=>{var h,O;return p.value=(O=(h=t.default)==null?void 0:h.call(t))!=null?O:[],rd(p.value,{class:m.value,onClick:Te,onMouseenter:ye,onMouseleave:pe,onFocusin:Ye,onFocusout:$e,onContextmenu:Me}),N(De,null,[e.autoFixPosition?N(wo,{onResize:ae},{default:()=>[p.value]}):p.value,N(Cb,null,{default:()=>[N(Fp,{to:U.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||x.value||w.value)&&!W.value&&N(wo,{onResize:_e},{default:()=>[N("div",xt({ref:v,class:[`${o}-popup`,`${o}-position-${S.value}`],style:Db(Bb({},k.value),{zIndex:L.value,pointerEvents:K.value?"none":"auto"}),"trigger-placement":S.value,onMouseenter:ge,onMouseleave:He,onMousedown:u},s.value),[N(fr,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:I,onAfterEnter:D,onBeforeLeave:I,onAfterLeave:P},{default:()=>{var q;return[bp(N("div",{class:`${o}-popup-wrapper`,style:_.value},[N("div",{class:[`${o}-content`,e.contentClass],style:e.contentStyle},[(q=t.content)==null?void 0:q.call(t)]),e.showArrow&&N("div",{ref:B,class:[`${o}-arrow`,e.arrowClass],style:C.value},null)]),[[xf,x.value]])]}})])]})]})]})])}}});const vs=Object.assign(Yi,{install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+Yi.name,Yi)}});var Xi=Y({name:"Empty",props:{description:String,imgSrc:String},setup(e,{slots:n}){const t=de("empty"),{t:r}=Th(),i=Ae(mr,void 0);return()=>{var o,s,a,l;return i!=null&&i.slots.empty&&!(n.image||e.imgSrc)?i.slots.empty():N("div",{class:t},[N("div",{class:`${t}-image`},[(s=(o=n.image)==null?void 0:o.call(n))!=null?s:e.imgSrc?N("img",{src:e.imgSrc,alt:e.description||"empty"},null):N(Qg,null,null)]),N("div",{class:`${t}-description`},[(l=(a=n.default)==null?void 0:a.call(n))!=null?l:e.description||r("empty.description")])])}}});const Mb=Object.assign(Xi,{install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+Xi.name,Xi)}}),Fb=Y({name:"Thumb",props:{data:{type:Object},direction:{type:String,default:"horizontal"},alwaysShow:{type:Boolean,default:!1},both:{type:Boolean,default:!1}},emits:["scroll"],setup(e,{emit:n}){const t=de("scrollbar"),r=ee(!1),i=ee(),o=ee(),s=R(()=>e.direction==="horizontal"?{size:"width",direction:"left",offset:"offsetWidth",client:"clientX"}:{size:"height",direction:"top",offset:"offsetHeight",client:"clientY"}),a=ee(0),l=ee(!1),c=ee(0),d=R(()=>{var C,B;return{[s.value.size]:`${(B=(C=e.data)==null?void 0:C.thumbSize)!=null?B:0}px`,[s.value.direction]:`${a.value}px`}}),p=C=>{C.preventDefault(),o.value&&(c.value=C[s.value.client]-o.value.getBoundingClientRect()[s.value.direction],l.value=!0,Wn(window,"mousemove",y),Wn(window,"mouseup",S),Wn(window,"contextmenu",S))},f=C=>{var B,H,x,U;if(C.preventDefault(),o.value){const z=v(C[s.value.client]>o.value.getBoundingClientRect()[s.value.direction]?a.value+((H=(B=e.data)==null?void 0:B.thumbSize)!=null?H:0):a.value-((U=(x=e.data)==null?void 0:x.thumbSize)!=null?U:0));z!==a.value&&(a.value=z,n("scroll",z))}},v=C=>C<0?0:e.data&&C>e.data.max?e.data.max:C,y=C=>{if(i.value&&o.value){const B=v(C[s.value.client]-i.value.getBoundingClientRect()[s.value.direction]-c.value);B!==a.value&&(a.value=B,n("scroll",B))}},S=()=>{l.value=!1,gt(window,"mousemove",y),gt(window,"mouseup",S)},k=C=>{l.value||(C=v(C),C!==a.value&&(a.value=C))},_=R(()=>[`${t}-thumb`,`${t}-thumb-direction-${e.direction}`,{[`${t}-thumb-dragging`]:l.value}]);return{visible:r,trackRef:i,thumbRef:o,prefixCls:t,thumbCls:_,thumbStyle:d,handleThumbMouseDown:p,handleTrackClick:f,setOffset:k}}});function Kb(e,n,t,r,i,o){return F(),ke(fr,null,{default:Z(()=>[re("div",{ref:"trackRef",class:G([`${e.prefixCls}-track`,`${e.prefixCls}-track-direction-${e.direction}`]),onMousedown:n[1]||(n[1]=Lf((...s)=>e.handleTrackClick&&e.handleTrackClick(...s),["self"]))},[re("div",{ref:"thumbRef",class:G(e.thumbCls),style:Oe(e.thumbStyle),onMousedown:n[0]||(n[0]=(...s)=>e.handleThumbMouseDown&&e.handleThumbMouseDown(...s))},[re("div",{class:G(`${e.prefixCls}-thumb-bar`)},null,2)],38)],34)]),_:1})}var jb=me(Fb,[["render",Kb]]);const za=20,Pr=15,$b=Y({name:"Scrollbar",components:{ResizeObserver:wo,Thumb:jb},inheritAttrs:!1,props:{type:{type:String,default:"embed"},outerClass:[String,Object,Array],outerStyle:{type:[String,Object,Array]},hide:{type:Boolean,default:!1},disableHorizontal:{type:Boolean,default:!1},disableVertical:{type:Boolean,default:!1}},emits:{scroll:e=>!0},setup(e,{emit:n}){const t=de("scrollbar"),r=ee(),i=ee(),o=ee(),s=ee(),a=ee(),l=ee(!1),c=ee(!1),d=R(()=>l.value&&!e.disableHorizontal),p=R(()=>c.value&&!e.disableVertical),f=ee(!1),v=()=>{var H,x,U,z,L,A;if(r.value){const{clientWidth:M,clientHeight:J,offsetWidth:j,offsetHeight:oe,scrollWidth:te,scrollHeight:Te,scrollTop:ye,scrollLeft:ge}=r.value;l.value=te>M,c.value=Te>J,f.value=d.value&&p.value;const pe=e.type==="embed"&&f.value?j-Pr:j,He=e.type==="embed"&&f.value?oe-Pr:oe,Ye=Math.round(pe/Math.min(te/M,pe/za)),$e=pe-Ye,Me=(te-M)/$e,un=Math.round(He/Math.min(Te/J,He/za)),xn=He-un,E=(Te-J)/xn;if(i.value={ratio:Me,thumbSize:Ye,max:$e},o.value={ratio:E,thumbSize:un,max:xn},ye>0){const $=Math.round(ye/((x=(H=o.value)==null?void 0:H.ratio)!=null?x:1));(U=a.value)==null||U.setOffset($)}if(ge>0){const $=Math.round(ge/((L=(z=o.value)==null?void 0:z.ratio)!=null?L:1));(A=s.value)==null||A.setOffset($)}}};qe(()=>{v()});const y=()=>{v()},S=H=>{var x,U,z,L,A,M;if(r.value){if(d.value&&!e.disableHorizontal){const J=Math.round(r.value.scrollLeft/((U=(x=i.value)==null?void 0:x.ratio)!=null?U:1));(z=s.value)==null||z.setOffset(J)}if(p.value&&!e.disableVertical){const J=Math.round(r.value.scrollTop/((A=(L=o.value)==null?void 0:L.ratio)!=null?A:1));(M=a.value)==null||M.setOffset(J)}}n("scroll",H)},k=H=>{var x,U;r.value&&r.value.scrollTo({left:H*((U=(x=i.value)==null?void 0:x.ratio)!=null?U:1)})},_=H=>{var x,U;r.value&&r.value.scrollTo({top:H*((U=(x=o.value)==null?void 0:x.ratio)!=null?U:1)})},C=R(()=>{const H={};return e.type==="track"&&(d.value&&(H.paddingBottom=`${Pr}px`),p.value&&(H.paddingRight=`${Pr}px`)),[H,e.outerStyle]}),B=R(()=>[`${t}`,`${t}-type-${e.type}`,{[`${t}-both`]:f.value},e.outerClass]);return{prefixCls:t,cls:B,style:C,containerRef:r,horizontalThumbRef:s,verticalThumbRef:a,horizontalData:i,verticalData:o,isBoth:f,hasHorizontalScrollbar:d,hasVerticalScrollbar:p,handleResize:y,handleScroll:S,handleHorizontalScroll:k,handleVerticalScroll:_}},methods:{scrollTo(e,n){var t,r;av(e)?(t=this.$refs.containerRef)==null||t.scrollTo(e):(e||n)&&((r=this.$refs.containerRef)==null||r.scrollTo(e,n))},scrollTop(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({top:e})},scrollLeft(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({left:e})}}});function Wb(e,n,t,r,i,o){const s=fe("ResizeObserver"),a=fe("thumb");return F(),Q("div",{class:G(e.cls),style:Oe(e.style)},[N(s,{onResize:e.handleResize},{default:Z(()=>[re("div",xt({ref:"containerRef",class:`${e.prefixCls}-container`},e.$attrs,{onScroll:n[0]||(n[0]=(...l)=>e.handleScroll&&e.handleScroll(...l))}),[N(s,{onResize:e.handleResize},{default:Z(()=>[ce(e.$slots,"default")]),_:3},8,["onResize"])],16)]),_:3},8,["onResize"]),!e.hide&&e.hasHorizontalScrollbar?(F(),ke(a,{key:0,ref:"horizontalThumbRef",data:e.horizontalData,direction:"horizontal",both:e.isBoth,onScroll:e.handleHorizontalScroll},null,8,["data","both","onScroll"])):ze("v-if",!0),!e.hide&&e.hasVerticalScrollbar?(F(),ke(a,{key:1,ref:"verticalThumbRef",data:e.verticalData,direction:"vertical",both:e.isBoth,onScroll:e.handleVerticalScroll},null,8,["data","both","onScroll"])):ze("v-if",!0)],6)}var Qi=me($b,[["render",Wb]]);const Ub=Object.assign(Qi,{install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+Qi.name,Qi)}});var zb=Object.defineProperty,qa=Object.getOwnPropertySymbols,qb=Object.prototype.hasOwnProperty,Gb=Object.prototype.propertyIsEnumerable,Ga=(e,n,t)=>n in e?zb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,eo=(e,n)=>{for(var t in n||(n={}))qb.call(n,t)&&Ga(e,t,n[t]);if(qa)for(var t of qa(n))Gb.call(n,t)&&Ga(e,t,n[t]);return e};const Vb=["red","orangered","orange","gold","lime","green","cyan","arcoblue","purple","pinkpurple","magenta","gray"],Jb=["normal","processing","success","warning","danger"];var no=Y({name:"Badge",props:{text:{type:String},dot:{type:Boolean},dotStyle:{type:Object},maxCount:{type:Number,default:99},offset:{type:Array,default:()=>[]},color:{type:String},status:{type:String,validator:e=>Jb.includes(e)},count:{type:Number}},setup(e,{slots:n}){const{status:t,color:r,dotStyle:i,offset:o,text:s,dot:a,maxCount:l,count:c}=cn(e),d=de("badge"),p=Zb(d,t==null?void 0:t.value,n==null?void 0:n.default),f=R(()=>{const y=eo({},(i==null?void 0:i.value)||{}),[S,k]=(o==null?void 0:o.value)||[];S&&(y.marginRight=`${-S}px`),k&&(y.marginTop=`${k}px`);const _=!(r!=null&&r.value)||Vb.includes(r==null?void 0:r.value)?{}:{backgroundColor:r.value};return{mergedStyle:eo(eo({},_),y),computedDotStyle:y,computedColorStyle:_}}),v=()=>{const y=s==null?void 0:s.value,S=r==null?void 0:r.value,k=t==null?void 0:t.value,_=a==null?void 0:a.value,C=Number(c==null?void 0:c.value),B=(c==null?void 0:c.value)!=null,{computedDotStyle:H,mergedStyle:x}=f.value;return n.content?N("span",{class:`${d}-custom-dot`,style:H},[n.content()]):y&&!S&&!k?N("span",{class:`${d}-text`,style:H},[y]):k||S&&!B?N("span",{class:`${d}-status-wrapper`},[N("span",{class:[`${d}-status-dot`,{[`${d}-status-${k}`]:k,[`${d}-color-${S}`]:S}],style:x},null),y&&N("span",{class:`${d}-status-text`},[y])]):(_||S)&&C>0?N("span",{class:[`${d}-dot`,{[`${d}-color-${S}`]:S}],style:x},null):C===0?null:N("span",{class:`${d}-number`,style:x},[N("span",null,[l.value&&C>l.value?`${l.value}+`:C])])};return()=>N("span",{class:p.value},[n.default&&n.default(),v()])}});const Zb=(e,n,t)=>R(()=>[e,{[`${e}-status`]:n,[`${e}-no-children`]:!t}]),Yb=Object.assign(no,{install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+no.name,no)}}),gs=Symbol("ArcoDropdown"),Xb=Y({name:"DropdownPanel",components:{Scrollbar:Ub,Empty:Mb},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:n,slots:t}){const r=de("dropdown"),i=Ae(gs,{}),o=ee(),s=c=>{const{scrollTop:d,scrollHeight:p,offsetHeight:f}=c.target;p-(d+f)<=e.bottomOffset&&n("reachBottom",c),n("scroll",c)},a=R(()=>{if(Ne(i.popupMaxHeight))return{maxHeight:`${i.popupMaxHeight}px`};if(!i.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),l=R(()=>[r,{[`${r}-has-footer`]:!!t.footer}]);return{prefixCls:r,cls:l,style:a,wrapperRef:o,handleScroll:s}}});function Qb(e,n,t,r,i,o){const s=fe("empty"),a=fe("Scrollbar");return F(),Q("div",{class:G(e.cls)},[e.isEmpty?(F(),Q("div",{key:0,class:G(`${e.prefixCls}-empty`)},[ce(e.$slots,"empty",{},()=>[N(s)])],2)):ze("v-if",!0),N(a,{ref:"wrapperRef",class:G(`${e.prefixCls}-list-wrapper`),style:Oe(e.style),onScroll:e.handleScroll},{default:Z(()=>[re("ul",{class:G(`${e.prefixCls}-list`)},[ce(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(F(),Q("div",{key:1,class:G(`${e.prefixCls}-footer`)},[ce(e.$slots,"footer")],2)):ze("v-if",!0)],2)}var ud=me(Xb,[["render",Qb]]);const hs=({popupVisible:e,defaultPopupVisible:n,emit:t})=>{var r;const i=ee((r=n==null?void 0:n.value)!=null?r:!1),o=R(()=>{var a;return(a=e==null?void 0:e.value)!=null?a:i.value}),s=a=>{a!==o.value&&(i.value=a,t("update:popupVisible",a),t("popupVisibleChange",a))};return Fe(o,a=>{i.value!==a&&(i.value=a)}),{computedPopupVisible:o,handlePopupVisibleChange:s}},ey=Y({name:"Dropdown",components:{Trigger:vs,DropdownPanel:ud},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r,popupMaxHeight:i}=cn(e),o=de("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:a}=hs({defaultPopupVisible:t,popupVisible:r,emit:n});return $n(gs,tn({popupMaxHeight:i,onOptionClick:(c,d)=>{n("select",c,d),e.hideOnSelect&&a(!1)}})),{prefixCls:o,computedPopupVisible:s,handlePopupVisibleChange:a}}});function ny(e,n,t,r,i,o){const s=fe("DropdownPanel"),a=fe("Trigger");return F(),ke(a,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:Z(()=>[N(s,null,bo({default:Z(()=>[ce(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:Z(()=>[ce(e.$slots,"footer")])}:void 0]),1024)]),default:Z(()=>[ce(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var Nr=me(ey,[["render",ny]]);const ty=Y({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=de("dropdown-option"),r=ee(),i=R(()=>{var l,c,d;return(d=(c=e.value)!=null?c:(l=r.value)==null?void 0:l.textContent)!=null?d:void 0}),o=e.uninjectContext?void 0:Ae(gs,void 0),s=l=>{e.disabled||(n("click",l),o==null||o.onOptionClick(i.value,l))},a=R(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:a,liRef:r,handleClick:s}}});function ry(e,n,t,r,i,o){return F(),Q("li",{ref:"liRef",class:G([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:n[0]||(n[0]=(...s)=>e.handleClick&&e.handleClick(...s))},[e.$slots.icon?(F(),Q("span",{key:0,class:G(`${e.prefixCls}-icon`)},[ce(e.$slots,"icon")],2)):ze("v-if",!0),re("span",{class:G(`${e.prefixCls}-content`)},[ce(e.$slots,"default")],2),e.$slots.suffix?(F(),Q("span",{key:1,class:G(`${e.prefixCls}-suffix`)},[ce(e.$slots,"suffix")],2)):ze("v-if",!0)],2)}var Yt=me(ty,[["render",ry]]);const iy=Y({name:"Dgroup",props:{title:String},setup(){return{prefixCls:de("dropdown-group")}}});function oy(e,n,t,r,i,o){return F(),Q(De,null,[re("li",{class:G(`${e.prefixCls}-title`)},[ce(e.$slots,"title",{},()=>[Qe(kn(e.title),1)])],2),ce(e.$slots,"default")],64)}var to=me(iy,[["render",oy]]);const sy=Y({name:"Dsubmenu",components:{Trigger:vs,DropdownPanel:ud,DropdownOption:Yt,IconRight:Sv},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=cn(e),i=de("dropdown"),{computedPopupVisible:o,handlePopupVisibleChange:s}=hs({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:o,handlePopupVisibleChange:s}}});function ay(e,n,t,r,i,o){const s=fe("IconRight"),a=fe("dropdown-option"),l=fe("dropdown-panel"),c=fe("Trigger");return F(),ke(c,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:Z(()=>[N(l,{class:G(`${e.prefixCls}-submenu`)},bo({default:Z(()=>[ce(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:Z(()=>[ce(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:Z(()=>[N(a,xt(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),bo({suffix:Z(()=>[ce(e.$slots,"suffix",{},()=>[N(s)])]),default:Z(()=>[ce(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:Z(()=>[ce(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var ro=me(sy,[["render",ay]]);const ly=Y({name:"DropdownButton",components:{IconMore:Eg,Button:gr,ButtonGroup:wr,Dropdown:Nr},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=cn(e),i=de("dropdown"),{computedPopupVisible:o,handlePopupVisibleChange:s}=hs({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:o,handleClick:c=>{n("click",c)},handleSelect:(c,d)=>{n("select",c,d)},handlePopupVisibleChange:s}}});function cy(e,n,t,r,i,o){const s=fe("Button"),a=fe("IconMore"),l=fe("Dropdown"),c=fe("ButtonGroup");return F(),ke(c,null,{default:Z(()=>[N(s,xt({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:Z(()=>[ce(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),N(l,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:Z(()=>[ce(e.$slots,"content")]),default:Z(()=>[N(s,{size:e.size,type:e.type,disabled:e.disabled},{icon:Z(()=>[ce(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[N(a)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var io=me(ly,[["render",cy]]);const dy=Object.assign(Nr,{Option:Yt,Group:to,Submenu:ro,Button:io,install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+Nr.name,Nr),e.component(t+Yt.name,Yt),e.component(t+to.name,to),e.component(t+ro.name,ro),e.component(t+io.name,io)}});function uy(e,n,t){return R(()=>!!(e[t]||n[t]))}function py(e){const n=ee(e);return[n,r=>{n.value=r}]}function fy(e,n){const{value:t}=cn(n),[r,i]=py(Ir(t.value)?e:t.value);return Fe(t,s=>{Ir(s)&&i(void 0)}),[R(()=>Ir(t.value)?r.value:t.value),i,r]}const my=Y({name:"Link",components:{IconLink:wg,IconLoading:cs},props:{href:String,status:{type:String,default:"normal"},hoverable:{type:Boolean,default:!0},icon:Boolean,loading:Boolean,disabled:Boolean},emits:{click:e=>!0},setup(e,{slots:n,emit:t}){const r=de("link"),i=uy(e,n,"icon"),o=a=>{if(e.disabled||e.loading){a.preventDefault();return}t("click",a)};return{cls:R(()=>[r,`${r}-status-${e.status}`,{[`${r}-disabled`]:e.disabled,[`${r}-loading`]:e.loading,[`${r}-hoverless`]:!e.hoverable,[`${r}-with-icon`]:e.loading||i.value}]),prefixCls:r,showIcon:i,handleClick:o}}}),vy=["href"];function gy(e,n,t,r,i,o){const s=fe("icon-loading"),a=fe("icon-link");return F(),Q("a",{href:e.disabled?void 0:e.href,class:G(e.cls),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[e.loading||e.showIcon?(F(),Q("span",{key:0,class:G(`${e.prefixCls}-icon`)},[e.loading?(F(),ke(s,{key:0})):ce(e.$slots,"icon",{key:1},()=>[N(a)])],2)):ze("v-if",!0),ce(e.$slots,"default")],10,vy)}var oo=me(my,[["render",gy]]);const hy=Object.assign(oo,{install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+oo.name,oo)}});var by=Object.defineProperty,Va=Object.getOwnPropertySymbols,yy=Object.prototype.hasOwnProperty,Sy=Object.prototype.propertyIsEnumerable,Ja=(e,n,t)=>n in e?by(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Za=(e,n)=>{for(var t in n||(n={}))yy.call(n,t)&&Ja(e,t,n[t]);if(Va)for(var t of Va(n))Sy.call(n,t)&&Ja(e,t,n[t]);return e};const Ey=Y({name:"Tooltip",components:{Trigger:vs},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},content:String,position:{type:String,default:"top"},mini:{type:Boolean,default:!1},backgroundColor:{type:String},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const t=de("tooltip"),r=ee(e.defaultPopupVisible),i=R(()=>{var d;return(d=e.popupVisible)!=null?d:r.value}),o=d=>{r.value=d,n("update:popupVisible",d),n("popupVisibleChange",d)},s=R(()=>[`${t}-content`,e.contentClass,{[`${t}-mini`]:e.mini}]),a=R(()=>{if(e.backgroundColor||e.contentStyle)return Za({backgroundColor:e.backgroundColor},e.contentStyle)}),l=R(()=>[`${t}-popup-arrow`,e.arrowClass]),c=R(()=>{if(e.backgroundColor||e.arrowStyle)return Za({backgroundColor:e.backgroundColor},e.arrowStyle)});return{prefixCls:t,computedPopupVisible:i,contentCls:s,computedContentStyle:a,arrowCls:l,computedArrowStyle:c,handlePopupVisibleChange:o}}});function Ty(e,n,t,r,i,o){const s=fe("Trigger");return F(),ke(s,{class:G(e.prefixCls),trigger:"hover",position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"show-arrow":"","content-class":e.contentCls,"content-style":e.computedContentStyle,"arrow-class":e.arrowCls,"arrow-style":e.computedArrowStyle,"popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",role:"tooltip",onPopupVisibleChange:e.handlePopupVisibleChange},{content:Z(()=>[ce(e.$slots,"content",{},()=>[Qe(kn(e.content),1)])]),default:Z(()=>[ce(e.$slots,"default")]),_:3},8,["class","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var so=me(Ey,[["render",Ty]]);const _y=Object.assign(so,{install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+so.name,so)}});var ky=Y({name:"ResizeTrigger",components:{ResizeObserver:$h,IconDragDot:Gg,IconDragDotVertical:Kg},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:n}){const{direction:t,prefixCls:r}=cn(e),i=R(()=>(t==null?void 0:t.value)==="horizontal");return{classNames:R(()=>[r.value,{[`${r.value}-horizontal`]:i.value,[`${r.value}-vertical`]:!i.value}]),onResize:a=>{n("resize",a)},isHorizontal:i}}});function Oy(e,n,t,r,i,o){const s=fe("IconDragDot"),a=fe("IconDragDotVertical"),l=fe("ResizeObserver");return F(),ke(l,{onResize:e.onResize},{default:Z(()=>[re("div",{class:G(e.classNames)},[ze(" @slot 自定义内容 "),ce(e.$slots,"default",{},()=>[re("div",{class:G(`${e.prefixCls}-icon-wrapper`)},[ze(" @slot 自定义 icon "),ce(e.$slots,"icon",{},()=>[e.isHorizontal?(F(),ke(s,{key:0,class:G(`${e.prefixCls}-icon`)},null,8,["class"])):(F(),ke(a,{key:1,class:G(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var Py=me(ky,[["render",Oy]]);const Ry=Y({name:"Message",components:{AIconHover:Jh,IconInfoCircleFill:Uv,IconCheckCircleFill:Pv,IconExclamationCircleFill:Mv,IconCloseCircleFill:Av,IconClose:Zv,IconLoading:cs},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:n}){const t=de("message");let r=0;const i=()=>{n("close")},o=()=>{e.duration>0&&(r=window.setTimeout(i,e.duration))},s=()=>{r&&(window.clearTimeout(r),r=0)};return qe(()=>{o()}),Lt(()=>{e.resetOnUpdate&&(s(),o())}),st(()=>{s()}),{handleMouseEnter:()=>{e.resetOnHover&&s()},handleMouseLeave:()=>{e.resetOnHover&&o()},prefixCls:t,handleClose:i}}});function Cy(e,n,t,r,i,o){const s=fe("icon-info-circle-fill"),a=fe("icon-check-circle-fill"),l=fe("icon-exclamation-circle-fill"),c=fe("icon-close-circle-fill"),d=fe("icon-loading"),p=fe("icon-close"),f=fe("a-icon-hover");return F(),Q("li",{role:"alert",class:G([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:n[1]||(n[1]=(...v)=>e.handleMouseEnter&&e.handleMouseEnter(...v)),onMouseleave:n[2]||(n[2]=(...v)=>e.handleMouseLeave&&e.handleMouseLeave(...v))},[e.showIcon&&!(e.type==="normal"&&!e.$slots.icon)?(F(),Q("span",{key:0,class:G(`${e.prefixCls}-icon`)},[ce(e.$slots,"icon",{},()=>[e.type==="info"?(F(),ke(s,{key:0})):e.type==="success"?(F(),ke(a,{key:1})):e.type==="warning"?(F(),ke(l,{key:2})):e.type==="error"?(F(),ke(c,{key:3})):e.type==="loading"?(F(),ke(d,{key:4})):ze("v-if",!0)])],2)):ze("v-if",!0),re("span",{class:G(`${e.prefixCls}-content`)},[ce(e.$slots,"default")],2),e.closable?(F(),Q("span",{key:1,class:G(`${e.prefixCls}-close-btn`),onClick:n[0]||(n[0]=(...v)=>e.handleClose&&e.handleClose(...v))},[N(f,null,{default:Z(()=>[N(p)]),_:1})],2)):ze("v-if",!0)],34)}var Ly=me(Ry,[["render",Cy]]);function xy(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!sr(e)}var Iy=Y({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,n){const t=de("message-list"),{zIndex:r}=dd("message",{runOnMounted:!0});return()=>{let i;return N(wc,{class:[t,`${t}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:r.value},onAfterLeave:()=>n.emit("afterClose")},xy(i=e.messages.map(o=>{const s={default:wa(o.content),icon:wa(o.icon)};return N(Ly,{key:o.id,type:o.type,duration:o.duration,closable:o.closable,resetOnUpdate:o.resetOnUpdate,resetOnHover:o.resetOnHover,onClose:()=>n.emit("close",o.id)},s)}))?i:{default:()=>[i]})}}}),Ay=Object.defineProperty,wy=Object.defineProperties,Ny=Object.getOwnPropertyDescriptors,Ya=Object.getOwnPropertySymbols,By=Object.prototype.hasOwnProperty,Dy=Object.prototype.propertyIsEnumerable,Xa=(e,n,t)=>n in e?Ay(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,zr=(e,n)=>{for(var t in n||(n={}))By.call(n,t)&&Xa(e,t,n[t]);if(Ya)for(var t of Ya(n))Dy.call(n,t)&&Xa(e,t,n[t]);return e},pd=(e,n)=>wy(e,Ny(n));class Hy{constructor(n,t){this.messageCount=0,this.add=o=>{var s;this.messageCount++;const a=(s=o.id)!=null?s:`__arco_message_${this.messageCount}`;if(this.messageIds.has(a))return this.update(a,o);const l=tn(zr({id:a},o));return this.messages.value.push(l),this.messageIds.add(a),{close:()=>this.remove(a)}},this.update=(o,s)=>{for(let a=0;a<this.messages.value.length;a++)if(this.messages.value[a].id===o){const l=!Ir(s.duration);Object.assign(this.messages.value[a],pd(zr({},s),{id:o,resetOnUpdate:l}));break}return{close:()=>this.remove(o)}},this.remove=o=>{for(let s=0;s<this.messages.value.length;s++){const a=this.messages.value[s];if(a.id===o){di(a.onClose)&&a.onClose(o),this.messages.value.splice(s,1),this.messageIds.delete(o);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{this.messages.value.length===0&&this.container&&(ca(null,this.container),document.body.removeChild(this.container),this.container=null,ht[this.position]=void 0)};const{position:r="top"}=n;this.container=zh("message"),this.messageIds=new Set,this.messages=ee([]),this.position=r;const i=N(Iy,{messages:this.messages.value,position:r,onClose:this.remove,onAfterClose:this.destroy});(t??_n._context)&&(i.appContext=t??_n._context),ca(i,this.container),document.body.appendChild(this.container)}}const ht={},fd=[...Zh,"loading","normal"],Br=fd.reduce((e,n)=>(e[n]=(t,r)=>{vr(t)&&(t={content:t});const i=zr({type:n},t),{position:o="top"}=i;return ht[o]||(ht[o]=new Hy(i,r)),ht[o].add(i)},e),{});Br.clear=e=>{var n;e?(n=ht[e])==null||n.clear():Object.values(ht).forEach(t=>t==null?void 0:t.clear())};const _n=pd(zr({},Br),{install:e=>{const n={clear:Br.clear};for(const t of fd)n[t]=(r,i=e._context)=>Br[t](r,i);e.config.globalProperties.$message=n},_context:null});function md(e){const n=vr(e)?parseFloat(e):e;let t="";return Ne(e)||String(n)===e?t=n>1?"px":"%":t="px",{size:n,unit:t,isPx:t==="px"}}function Rr({size:e,defaultSize:n,containerSize:t}){const r=md(e??n);return r.isPx?r.size:r.size*t}function My(e,n){return parseFloat(e)/parseFloat(n)}const Fy=Y({name:"Split",components:{ResizeTrigger:Py},props:{component:{type:String,default:"div"},direction:{type:String,default:"horizontal"},size:{type:[Number,String],default:void 0},defaultSize:{type:[Number,String],default:.5},min:{type:[Number,String]},max:{type:[Number,String]},disabled:{type:Boolean,default:!1}},emits:{moveStart:e=>!0,moving:e=>!0,moveEnd:e=>!0,"update:size":e=>!0},setup(e,{emit:n}){const{direction:t,size:r,defaultSize:i,min:o,max:s}=cn(e),a=ee(0),l=ee(),c=de("split"),[d,p]=fy(i.value,tn({value:r})),f=R(()=>md(d.value)),v=R(()=>t.value==="horizontal"),y=R(()=>[c,{[`${c}-horizontal`]:v.value,[`${c}-vertical`]:!v.value}]),S=R(()=>{const{size:A,unit:M,isPx:J}=f.value;return{flex:`0 0 calc(${J?A:A*100}${M} - ${a.value/2}px)`}}),k={startPageX:0,startPageY:0,startContainerSize:0,startSize:0};async function _(){const A=()=>{var M,J;return v.value?(M=l.value)==null?void 0:M.clientWidth:((J=l.value)==null?void 0:J.clientHeight)||0};return(!l.value||A())&&await it(),A()}function C(A,M){if(!M)return;const J=f.value.isPx?`${A}px`:My(A,M);d.value!==J&&(p(J),n("update:size",J))}function B(A,M){const J=Rr({size:A,containerSize:M}),j=Rr({size:o.value,defaultSize:"0px",containerSize:M}),oe=Rr({size:s.value,defaultSize:`${M}px`,containerSize:M});let te=J;return te=Math.max(te,j),te=Math.min(te,oe),te}function H({startContainerSize:A,startSize:M,startPosition:J,endPosition:j}){const oe=Rr({size:M,containerSize:A});return B(`${oe+(j-J)}px`,A)}function x(A){n("moving",A);const M=v.value?H({startContainerSize:k.startContainerSize,startSize:k.startSize,startPosition:k.startPageX,endPosition:A.pageX}):H({startContainerSize:k.startContainerSize,startSize:k.startSize,startPosition:k.startPageY,endPosition:A.pageY});C(M,k.startContainerSize)}function U(A){gt(window,"mousemove",x),gt(window,"mouseup",U),gt(window,"contextmenu",U),document.body.style.cursor="default",n("moveEnd",A)}async function z(A){n("moveStart",A),k.startPageX=A.pageX,k.startPageY=A.pageY,k.startContainerSize=await _(),k.startSize=d.value,Wn(window,"mousemove",x),Wn(window,"mouseup",U),Wn(window,"contextmenu",U),document.body.style.cursor=v.value?"col-resize":"row-resize"}function L(A){const{width:M,height:J}=A.contentRect;a.value=v.value?M:J}return qe(async()=>{const A=await _(),M=B(d.value,A);C(M,A)}),{prefixCls:c,classNames:y,isHorizontal:v,wrapperRef:l,onMoveStart:z,onTriggerResize:L,firstPaneStyles:S}}});function Ky(e,n,t,r,i,o){const s=fe("ResizeTrigger");return F(),ke(yp(e.component),{ref:"wrapperRef",class:G(e.classNames)},{default:Z(()=>[re("div",{class:G([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-first`]),style:Oe(e.firstPaneStyles)},[ce(e.$slots,"first")],6),e.disabled?ze("v-if",!0):(F(),ke(s,{key:0,"prefix-cls":`${e.prefixCls}-trigger`,direction:e.isHorizontal?"vertical":"horizontal",onMousedown:e.onMoveStart,onResize:e.onTriggerResize},{default:Z(()=>[ce(e.$slots,"resize-trigger")]),icon:Z(()=>[ce(e.$slots,"resize-trigger-icon")]),_:3},8,["prefix-cls","direction","onMousedown","onResize"])),re("div",{class:G([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-second`])},[ce(e.$slots,"second")],2)]),_:3},8,["class"])}var ao=me(Fy,[["render",Ky]]);const jy=Object.assign(ao,{install:(e,n)=>{Cn(e,n);const t=Rn(n);e.component(t+ao.name,ao)}});function Zn(e,n){const t=JSON.stringify(n);if(bn)return utools.dbStorage.setItem(e,t);localStorage.setItem(e,t)}function Mn(e){if(bn){const n=utools.dbStorage.getItem(e);return n?JSON.parse(n):null}else{const n=localStorage.getItem(e);return n?JSON.parse(n):null}}function Cr(e){(bn?utools.dbStorage:localStorage).removeItem(e)}function Qa(e){if(bn)return utools.db.allDocs(e);{const n=[];for(let t=0;t<localStorage.length;t++){if(e){const r=localStorage.key(t);r&&r.includes(e)&&n.push({_id:r,data:Mn(r)});continue}n.push({_id:localStorage.key(t),data:Mn(localStorage.key(t))})}return n}}function vd(e){return e===null?"Null":e===void 0?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}function gd(e){const n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate(),o=n.getHours(),s=n.getMinutes(),a=n.getSeconds(),l=c=>{const d=c.toString();return d[1]?d:"0"+d};return`${t}年${l(r)}月${l(i)}日 ${l(o)}:${l(s)}:${l(a)}`}function $y(e){try{if(navigator.clipboard)navigator.clipboard.writeText(e);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=e,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}return!0}catch{return!1}}const bn=window&&typeof(window==null?void 0:window.utools)<"u";function lo(e){return bn?utools.shellOpenExternal(e):window.open(e)}var Wy=typeof global=="object"&&global&&global.Object===Object&&global;const hd=Wy;var Uy=typeof self=="object"&&self&&self.Object===Object&&self,zy=hd||Uy||Function("return this")();const dn=zy;var qy=dn.Symbol;const yn=qy;var bd=Object.prototype,Gy=bd.hasOwnProperty,Vy=bd.toString,Kt=yn?yn.toStringTag:void 0;function Jy(e){var n=Gy.call(e,Kt),t=e[Kt];try{e[Kt]=void 0;var r=!0}catch{}var i=Vy.call(e);return r&&(n?e[Kt]=t:delete e[Kt]),i}var Zy=Object.prototype,Yy=Zy.toString;function Xy(e){return Yy.call(e)}var Qy="[object Null]",eS="[object Undefined]",el=yn?yn.toStringTag:void 0;function It(e){return e==null?e===void 0?eS:Qy:el&&el in Object(e)?Jy(e):Xy(e)}function At(e){return e!=null&&typeof e=="object"}var nS="[object Symbol]";function yd(e){return typeof e=="symbol"||At(e)&&It(e)==nS}function tS(e,n){for(var t=-1,r=e==null?0:e.length,i=Array(r);++t<r;)i[t]=n(e[t],t,e);return i}var rS=Array.isArray;const wt=rS;var iS=1/0,nl=yn?yn.prototype:void 0,tl=nl?nl.toString:void 0;function Sd(e){if(typeof e=="string")return e;if(wt(e))return tS(e,Sd)+"";if(yd(e))return tl?tl.call(e):"";var n=e+"";return n=="0"&&1/e==-iS?"-0":n}var oS=/\s/;function sS(e){for(var n=e.length;n--&&oS.test(e.charAt(n)););return n}var aS=/^\s+/;function lS(e){return e&&e.slice(0,sS(e)+1).replace(aS,"")}function zn(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var rl=0/0,cS=/^[-+]0x[0-9a-f]+$/i,dS=/^0b[01]+$/i,uS=/^0o[0-7]+$/i,pS=parseInt;function il(e){if(typeof e=="number")return e;if(yd(e))return rl;if(zn(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=zn(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=lS(e);var t=dS.test(e);return t||uS.test(e)?pS(e.slice(2),t?2:8):cS.test(e)?rl:+e}var fS="[object AsyncFunction]",mS="[object Function]",vS="[object GeneratorFunction]",gS="[object Proxy]";function Ed(e){if(!zn(e))return!1;var n=It(e);return n==mS||n==vS||n==fS||n==gS}var hS=dn["__core-js_shared__"];const co=hS;var ol=function(){var e=/[^.]+$/.exec(co&&co.keys&&co.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function bS(e){return!!ol&&ol in e}var yS=Function.prototype,SS=yS.toString;function at(e){if(e!=null){try{return SS.call(e)}catch{}try{return e+""}catch{}}return""}var ES=/[\\^$.*+?()[\]{}|]/g,TS=/^\[object .+?Constructor\]$/,_S=Function.prototype,kS=Object.prototype,OS=_S.toString,PS=kS.hasOwnProperty,RS=RegExp("^"+OS.call(PS).replace(ES,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function CS(e){if(!zn(e)||bS(e))return!1;var n=Ed(e)?RS:TS;return n.test(at(e))}function LS(e,n){return e==null?void 0:e[n]}function lt(e,n){var t=LS(e,n);return CS(t)?t:void 0}var xS=lt(dn,"WeakMap");const No=xS;var sl=Object.create,IS=function(){function e(){}return function(n){if(!zn(n))return{};if(sl)return sl(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const AS=IS;function Td(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var wS=function(){try{var e=lt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const al=wS;function NS(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var BS=9007199254740991,DS=/^(?:0|[1-9]\d*)$/;function HS(e,n){var t=typeof e;return n=n??BS,!!n&&(t=="number"||t!="symbol"&&DS.test(e))&&e>-1&&e%1==0&&e<n}function _d(e,n,t){n=="__proto__"&&al?al(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function kd(e,n){return e===n||e!==e&&n!==n}var MS=Object.prototype,FS=MS.hasOwnProperty;function Od(e,n,t){var r=e[n];(!(FS.call(e,n)&&kd(r,t))||t===void 0&&!(n in e))&&_d(e,n,t)}function pi(e,n,t,r){var i=!t;t||(t={});for(var o=-1,s=n.length;++o<s;){var a=n[o],l=r?r(t[a],e[a],a,t,e):void 0;l===void 0&&(l=e[a]),i?_d(t,a,l):Od(t,a,l)}return t}var KS=9007199254740991;function Pd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=KS}function Rd(e){return e!=null&&Pd(e.length)&&!Ed(e)}var jS=Object.prototype;function bs(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||jS;return e===t}function $S(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var WS="[object Arguments]";function ll(e){return At(e)&&It(e)==WS}var Cd=Object.prototype,US=Cd.hasOwnProperty,zS=Cd.propertyIsEnumerable,qS=ll(function(){return arguments}())?ll:function(e){return At(e)&&US.call(e,"callee")&&!zS.call(e,"callee")};const Ld=qS;function GS(){return!1}var xd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,cl=xd&&typeof module=="object"&&module&&!module.nodeType&&module,VS=cl&&cl.exports===xd,dl=VS?dn.Buffer:void 0,JS=dl?dl.isBuffer:void 0,ZS=JS||GS;const Id=ZS;var YS="[object Arguments]",XS="[object Array]",QS="[object Boolean]",eE="[object Date]",nE="[object Error]",tE="[object Function]",rE="[object Map]",iE="[object Number]",oE="[object Object]",sE="[object RegExp]",aE="[object Set]",lE="[object String]",cE="[object WeakMap]",dE="[object ArrayBuffer]",uE="[object DataView]",pE="[object Float32Array]",fE="[object Float64Array]",mE="[object Int8Array]",vE="[object Int16Array]",gE="[object Int32Array]",hE="[object Uint8Array]",bE="[object Uint8ClampedArray]",yE="[object Uint16Array]",SE="[object Uint32Array]",Re={};Re[pE]=Re[fE]=Re[mE]=Re[vE]=Re[gE]=Re[hE]=Re[bE]=Re[yE]=Re[SE]=!0;Re[YS]=Re[XS]=Re[dE]=Re[QS]=Re[uE]=Re[eE]=Re[nE]=Re[tE]=Re[rE]=Re[iE]=Re[oE]=Re[sE]=Re[aE]=Re[lE]=Re[cE]=!1;function EE(e){return At(e)&&Pd(e.length)&&!!Re[It(e)]}function ys(e){return function(n){return e(n)}}var Ad=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Xt=Ad&&typeof module=="object"&&module&&!module.nodeType&&module,TE=Xt&&Xt.exports===Ad,uo=TE&&hd.process,_E=function(){try{var e=Xt&&Xt.require&&Xt.require("util").types;return e||uo&&uo.binding&&uo.binding("util")}catch{}}();const Ot=_E;var ul=Ot&&Ot.isTypedArray,kE=ul?ys(ul):EE;const OE=kE;var PE=Object.prototype,RE=PE.hasOwnProperty;function wd(e,n){var t=wt(e),r=!t&&Ld(e),i=!t&&!r&&Id(e),o=!t&&!r&&!i&&OE(e),s=t||r||i||o,a=s?$S(e.length,String):[],l=a.length;for(var c in e)(n||RE.call(e,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||HS(c,l)))&&a.push(c);return a}function Nd(e,n){return function(t){return e(n(t))}}var CE=Nd(Object.keys,Object);const LE=CE;var xE=Object.prototype,IE=xE.hasOwnProperty;function AE(e){if(!bs(e))return LE(e);var n=[];for(var t in Object(e))IE.call(e,t)&&t!="constructor"&&n.push(t);return n}function Ss(e){return Rd(e)?wd(e):AE(e)}function wE(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var NE=Object.prototype,BE=NE.hasOwnProperty;function DE(e){if(!zn(e))return wE(e);var n=bs(e),t=[];for(var r in e)r=="constructor"&&(n||!BE.call(e,r))||t.push(r);return t}function Es(e){return Rd(e)?wd(e,!0):DE(e)}var HE=lt(Object,"create");const dr=HE;function ME(){this.__data__=dr?dr(null):{},this.size=0}function FE(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var KE="__lodash_hash_undefined__",jE=Object.prototype,$E=jE.hasOwnProperty;function WE(e){var n=this.__data__;if(dr){var t=n[e];return t===KE?void 0:t}return $E.call(n,e)?n[e]:void 0}var UE=Object.prototype,zE=UE.hasOwnProperty;function qE(e){var n=this.__data__;return dr?n[e]!==void 0:zE.call(n,e)}var GE="__lodash_hash_undefined__";function VE(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=dr&&n===void 0?GE:n,this}function ot(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ot.prototype.clear=ME;ot.prototype.delete=FE;ot.prototype.get=WE;ot.prototype.has=qE;ot.prototype.set=VE;function JE(){this.__data__=[],this.size=0}function fi(e,n){for(var t=e.length;t--;)if(kd(e[t][0],n))return t;return-1}var ZE=Array.prototype,YE=ZE.splice;function XE(e){var n=this.__data__,t=fi(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():YE.call(n,t,1),--this.size,!0}function QE(e){var n=this.__data__,t=fi(n,e);return t<0?void 0:n[t][1]}function eT(e){return fi(this.__data__,e)>-1}function nT(e,n){var t=this.__data__,r=fi(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function Ln(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Ln.prototype.clear=JE;Ln.prototype.delete=XE;Ln.prototype.get=QE;Ln.prototype.has=eT;Ln.prototype.set=nT;var tT=lt(dn,"Map");const ur=tT;function rT(){this.size=0,this.__data__={hash:new ot,map:new(ur||Ln),string:new ot}}function iT(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function mi(e,n){var t=e.__data__;return iT(n)?t[typeof n=="string"?"string":"hash"]:t.map}function oT(e){var n=mi(this,e).delete(e);return this.size-=n?1:0,n}function sT(e){return mi(this,e).get(e)}function aT(e){return mi(this,e).has(e)}function lT(e,n){var t=mi(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function Nt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Nt.prototype.clear=rT;Nt.prototype.delete=oT;Nt.prototype.get=sT;Nt.prototype.has=aT;Nt.prototype.set=lT;function cT(e){return e==null?"":Sd(e)}function vi(e,n){for(var t=-1,r=n.length,i=e.length;++t<r;)e[i+t]=n[t];return e}var pl=yn?yn.isConcatSpreadable:void 0;function dT(e){return wt(e)||Ld(e)||!!(pl&&e&&e[pl])}function Bd(e,n,t,r,i){var o=-1,s=e.length;for(t||(t=dT),i||(i=[]);++o<s;){var a=e[o];n>0&&t(a)?n>1?Bd(a,n-1,t,r,i):vi(i,a):r||(i[i.length]=a)}return i}var uT=Nd(Object.getPrototypeOf,Object);const Dd=uT;function pT(){this.__data__=new Ln,this.size=0}function fT(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function mT(e){return this.__data__.get(e)}function vT(e){return this.__data__.has(e)}var gT=200;function hT(e,n){var t=this.__data__;if(t instanceof Ln){var r=t.__data__;if(!ur||r.length<gT-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Nt(r)}return t.set(e,n),this.size=t.size,this}function Bt(e){var n=this.__data__=new Ln(e);this.size=n.size}Bt.prototype.clear=pT;Bt.prototype.delete=fT;Bt.prototype.get=mT;Bt.prototype.has=vT;Bt.prototype.set=hT;function bT(e,n){return e&&pi(n,Ss(n),e)}function yT(e,n){return e&&pi(n,Es(n),e)}var Hd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fl=Hd&&typeof module=="object"&&module&&!module.nodeType&&module,ST=fl&&fl.exports===Hd,ml=ST?dn.Buffer:void 0,vl=ml?ml.allocUnsafe:void 0;function ET(e,n){if(n)return e.slice();var t=e.length,r=vl?vl(t):new e.constructor(t);return e.copy(r),r}function TT(e,n){for(var t=-1,r=e==null?0:e.length,i=0,o=[];++t<r;){var s=e[t];n(s,t,e)&&(o[i++]=s)}return o}function Md(){return[]}var _T=Object.prototype,kT=_T.propertyIsEnumerable,gl=Object.getOwnPropertySymbols,OT=gl?function(e){return e==null?[]:(e=Object(e),TT(gl(e),function(n){return kT.call(e,n)}))}:Md;const Ts=OT;function PT(e,n){return pi(e,Ts(e),n)}var RT=Object.getOwnPropertySymbols,CT=RT?function(e){for(var n=[];e;)vi(n,Ts(e)),e=Dd(e);return n}:Md;const Fd=CT;function LT(e,n){return pi(e,Fd(e),n)}function Kd(e,n,t){var r=n(e);return wt(e)?r:vi(r,t(e))}function xT(e){return Kd(e,Ss,Ts)}function IT(e){return Kd(e,Es,Fd)}var AT=lt(dn,"DataView");const Bo=AT;var wT=lt(dn,"Promise");const Do=wT;var NT=lt(dn,"Set");const Ho=NT;var hl="[object Map]",BT="[object Object]",bl="[object Promise]",yl="[object Set]",Sl="[object WeakMap]",El="[object DataView]",DT=at(Bo),HT=at(ur),MT=at(Do),FT=at(Ho),KT=at(No),Yn=It;(Bo&&Yn(new Bo(new ArrayBuffer(1)))!=El||ur&&Yn(new ur)!=hl||Do&&Yn(Do.resolve())!=bl||Ho&&Yn(new Ho)!=yl||No&&Yn(new No)!=Sl)&&(Yn=function(e){var n=It(e),t=n==BT?e.constructor:void 0,r=t?at(t):"";if(r)switch(r){case DT:return El;case HT:return hl;case MT:return bl;case FT:return yl;case KT:return Sl}return n});const _s=Yn;var jT=Object.prototype,$T=jT.hasOwnProperty;function WT(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&$T.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var UT=dn.Uint8Array;const Tl=UT;function ks(e){var n=new e.constructor(e.byteLength);return new Tl(n).set(new Tl(e)),n}function zT(e,n){var t=n?ks(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var qT=/\w*$/;function GT(e){var n=new e.constructor(e.source,qT.exec(e));return n.lastIndex=e.lastIndex,n}var _l=yn?yn.prototype:void 0,kl=_l?_l.valueOf:void 0;function VT(e){return kl?Object(kl.call(e)):{}}function JT(e,n){var t=n?ks(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var ZT="[object Boolean]",YT="[object Date]",XT="[object Map]",QT="[object Number]",e_="[object RegExp]",n_="[object Set]",t_="[object String]",r_="[object Symbol]",i_="[object ArrayBuffer]",o_="[object DataView]",s_="[object Float32Array]",a_="[object Float64Array]",l_="[object Int8Array]",c_="[object Int16Array]",d_="[object Int32Array]",u_="[object Uint8Array]",p_="[object Uint8ClampedArray]",f_="[object Uint16Array]",m_="[object Uint32Array]";function v_(e,n,t){var r=e.constructor;switch(n){case i_:return ks(e);case ZT:case YT:return new r(+e);case o_:return zT(e,t);case s_:case a_:case l_:case c_:case d_:case u_:case p_:case f_:case m_:return JT(e,t);case XT:return new r;case QT:case t_:return new r(e);case e_:return GT(e);case n_:return new r;case r_:return VT(e)}}function g_(e){return typeof e.constructor=="function"&&!bs(e)?AS(Dd(e)):{}}var h_="[object Map]";function b_(e){return At(e)&&_s(e)==h_}var Ol=Ot&&Ot.isMap,y_=Ol?ys(Ol):b_;const S_=y_;var E_="[object Set]";function T_(e){return At(e)&&_s(e)==E_}var Pl=Ot&&Ot.isSet,__=Pl?ys(Pl):T_;const k_=__;var O_=1,P_=2,R_=4,jd="[object Arguments]",C_="[object Array]",L_="[object Boolean]",x_="[object Date]",I_="[object Error]",$d="[object Function]",A_="[object GeneratorFunction]",w_="[object Map]",N_="[object Number]",Wd="[object Object]",B_="[object RegExp]",D_="[object Set]",H_="[object String]",M_="[object Symbol]",F_="[object WeakMap]",K_="[object ArrayBuffer]",j_="[object DataView]",$_="[object Float32Array]",W_="[object Float64Array]",U_="[object Int8Array]",z_="[object Int16Array]",q_="[object Int32Array]",G_="[object Uint8Array]",V_="[object Uint8ClampedArray]",J_="[object Uint16Array]",Z_="[object Uint32Array]",Pe={};Pe[jd]=Pe[C_]=Pe[K_]=Pe[j_]=Pe[L_]=Pe[x_]=Pe[$_]=Pe[W_]=Pe[U_]=Pe[z_]=Pe[q_]=Pe[w_]=Pe[N_]=Pe[Wd]=Pe[B_]=Pe[D_]=Pe[H_]=Pe[M_]=Pe[G_]=Pe[V_]=Pe[J_]=Pe[Z_]=!0;Pe[I_]=Pe[$d]=Pe[F_]=!1;function Dr(e,n,t,r,i,o){var s,a=n&O_,l=n&P_,c=n&R_;if(t&&(s=i?t(e,r,i,o):t(e)),s!==void 0)return s;if(!zn(e))return e;var d=wt(e);if(d){if(s=WT(e),!a)return Td(e,s)}else{var p=_s(e),f=p==$d||p==A_;if(Id(e))return ET(e,a);if(p==Wd||p==jd||f&&!i){if(s=l||f?{}:g_(e),!a)return l?LT(e,yT(s,e)):PT(e,bT(s,e))}else{if(!Pe[p])return i?e:{};s=v_(e,p,a)}}o||(o=new Bt);var v=o.get(e);if(v)return v;o.set(e,s),k_(e)?e.forEach(function(k){s.add(Dr(k,n,t,k,e,o))}):S_(e)&&e.forEach(function(k,_){s.set(_,Dr(k,n,t,_,e,o))});var y=c?l?IT:xT:l?Es:Ss,S=d?void 0:y(e);return NS(S||e,function(k,_){S&&(_=k,k=e[_]),Od(s,_,Dr(k,n,t,_,e,o))}),s}var Y_=1,X_=4;function Q_(e){return Dr(e,Y_|X_)}function ek(){var e=arguments.length;if(!e)return[];for(var n=Array(e-1),t=arguments[0],r=e;r--;)n[r-1]=arguments[r];return vi(wt(t)?Td(t):[t],Bd(n,1))}var nk=function(){return dn.Date.now()};const po=nk;var tk="Expected a function",rk=Math.max,ik=Math.min;function ok(e,n,t){var r,i,o,s,a,l,c=0,d=!1,p=!1,f=!0;if(typeof e!="function")throw new TypeError(tk);n=il(n)||0,zn(t)&&(d=!!t.leading,p="maxWait"in t,o=p?rk(il(t.maxWait)||0,n):o,f="trailing"in t?!!t.trailing:f);function v(U){var z=r,L=i;return r=i=void 0,c=U,s=e.apply(L,z),s}function y(U){return c=U,a=setTimeout(_,n),d?v(U):s}function S(U){var z=U-l,L=U-c,A=n-z;return p?ik(A,o-L):A}function k(U){var z=U-l,L=U-c;return l===void 0||z>=n||z<0||p&&L>=o}function _(){var U=po();if(k(U))return C(U);a=setTimeout(_,S(U))}function C(U){return a=void 0,f&&r?v(U):(r=i=void 0,s)}function B(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function H(){return a===void 0?s:C(po())}function x(){var U=po(),z=k(U);if(r=arguments,i=this,l=U,z){if(a===void 0)return y(l);if(p)return clearTimeout(a),a=setTimeout(_,n),v(l)}return a===void 0&&(a=setTimeout(_,n)),s}return x.cancel=B,x.flush=H,x}var sk=0;function ak(e){var n=++sk;return cT(e)+n}const lk=()=>null,ck=window.preload.electron||{},dk=window.preload.Buffer||{},uk=window.preload.require||lk,Rl=window.preload.vm||{},Mo=mk();function pk(e,n){const t={console:Ud(n),fetch:fetch.bind(window),utools:Mo,electron:ck,Buffer:dk,require:uk};try{setTimeout(()=>{Rl.createContext(t),Rl.runInContext(`(async function(){
${e}
})()`,t).catch(r=>{n&&n(null,[r])})})}catch(r){n&&n(null,[r])}}function fk(e,n){try{const t=new Function("console","utools","globalThis",`(async function(){
${e}
})()`),r=Object.assign({},globalThis);r.utools=Mo,t(Ud(n),Mo,r)}catch(t){n&&n(null,[t])}}function Ud(e){return{log:(...n)=>e&&e(n),error:(...n)=>e&&e(null,n),warn:(...n)=>e&&e(null,null,n),info:(...n)=>e&&e(null,null,null,n)}}function mk(){if(!bn)return{};const e=Object.assign({},Q_(utools));return ek(["db","dbStorage","removeFeature","setFeature","onDbPull"],["fetchUserServerTemporaryToken","openPayment","fetchUserPayments"],["onPluginEnter","onPluginOut","createBrowserWindow"]).forEach(i=>{delete e[i]}),Object.freeze(e),e}function vk(){bn&&(utools.onPluginEnter(({code:e,type:n,payload:t})=>{}),utools.db.replicateStateFromCloud()&&_n.warning({content:"数据可能不完整，还在从云端复制中"}))}try{Af(Df).use(Um).use(qm()).use(bh).mount("#app"),vk()}catch(e){bn&&utools.showNotification("初始化失败: "+e)}const gk=`interface UBrowser {
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
`,hk=`declare module 'assert' {
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
`,bk=`interface Clipboard {

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
`;self.MonacoEnvironment={getWorker(e,n){return n==="typescript"||n==="javascript"?new qd:new Gd}};bt.typescript.javascriptDefaults.addExtraLib(gk,"utools.api.d.ts");bt.typescript.javascriptDefaults.addExtraLib(hk,"node.api.d.ts");bt.typescript.javascriptDefaults.addExtraLib(bk,"electron.api.d.ts");bt.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});bt.typescript.javascriptDefaults.setCompilerOptions({target:bt.typescript.ScriptTarget.ES2016,allowNonTsExtensions:!0,allowJs:!0});const yk={class:"editor"},Sk=Y({__name:"Editor",props:{code:{type:String,default:""}},emits:["codeChange","runCode"],setup(e,{emit:n}){const t=e,r=Ae(Bc),i=ee(null);let o=null;Fe(()=>r==null?void 0:r.value,()=>s()),Fe(()=>t.code,()=>{(o==null?void 0:o.getValue())!==t.code&&(o==null||o.setValue(t.code))}),qe(()=>{s()}),st(()=>{o==null||o.dispose()});function s(){var a;o&&(o.dispose(),o=null),o=Vd.create(i.value,{value:t.code,language:"javascript",theme:r!=null&&r.value?"vs-dark":"vs",tabSize:2,minimap:{enabled:!1},automaticLayout:!0}),o.addAction({id:"run",label:"Run",keybindings:[Jd.CtrlCmd|Zd.KeyR],contextMenuGroupId:"navigation",run:()=>n("runCode")}),(a=o.getModel())==null||a.onDidChangeContent(ok(()=>{n("codeChange",o.getValue())},500)),o.focus()}return(a,l)=>(F(),Q("div",yk,[re("div",{class:"instance",ref_key:"editorRef",ref:i},null,512)]))}});const gi=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},Ek=gi(Sk,[["__scopeId","data-v-a2865b6a"]]),Tk={class:"console"},_k={key:0,class:"empty-tip"},kk=["onClick"],Ok=Y({__name:"Console",props:{messages:null},setup(e){const n=e,t=ee(null);Fe(()=>n.messages.length,()=>{var l,c;const o=t.value;if(!o)return;const s=o[o.length-1],a=(c=(l=s==null?void 0:s.parentElement)==null?void 0:l.parentElement)==null?void 0:c.parentElement;s&&a&&it(()=>a.scrollTop=s.offsetTop)});function r(o){return ue(o).map(s=>{const a=vd(s);if(["Array","Object"].includes(a)){const l=()=>{const c=new WeakSet;return(d,p)=>{if(typeof p=="object"&&p!==null){if(c.has(p))return d;c.add(p)}return p}};try{return JSON.stringify(s,l())}catch{return`[${a}]`}}else{if(a==="String")return`"${s}"`;if(["Null","Undefined"].includes(a))return a.toLowerCase();if(a==="Symbol")return s.toString()}return s}).join(`
`)}function i(o){$y(String(o))?_n.success("复制成功"):_n.error("复制失败")}return(o,s)=>{const a=gr;return F(),Q("div",Tk,[N(fr,{name:"emerge",mode:"out-in"},{default:Z(()=>[e.messages.length?(F(),ke(wc,{key:1,name:"emerge",tag:"div"},{default:Z(()=>[(F(!0),Q(De,null,ts(e.messages,l=>(F(),Q("div",{ref_for:!0,ref_key:"msgContainerRef",ref:t,key:l.id,class:G({message:!0,"message-log":!l.type||l.type==="log","message-warn":l.type==="warn","message-error":l.type==="error","message-info":l.type==="info"})},[N(a,{class:"time-status",size:"mini",type:"text",onClick:c=>i(l.timeStamp)},{default:Z(()=>[Qe(kn(be(gd)(l.timeStamp).split(" ")[1]),1)]),_:2},1032,["onClick"]),re("div",{class:"content",onClick:c=>i(r(l.content))},kn(r(l.content)),9,kk)],2))),128))]),_:1})):(F(),Q("div",_k,"控制台为空"))]),_:1})])}}});const Pk=gi(Ok,[["__scopeId","data-v-c8d6608a"]]),Rk=Ym("CodeSrore",{state:()=>({id:0,code:"",messages:[],env:bn?Mn("env")||"node":"browser",historys:[],mode:Mn("mode")||"ontime"}),getters:{codeWithId:e=>`code/${e.id}`,currentEnv:e=>e.env==="browser"?"浏览器":"Node.js",currentMode:e=>e.mode==="ontime"?"即时执行":"手动触发"},actions:{newCode(){this.id!==0&&_n.success("成功创建新代码片段"),this.clearMessages(),this.id=new Date().getTime(),this.code=Mn("lastCodeId")?"":'console.log("Hello, World!")',Zn(this.codeWithId,this.code),Zn("lastCodeId",this.id)},loadCode(e){this.clearMessages();const n=Mn(`code/${e}`);if(vd(n)==="Null")return this.newCode();this.id=e,this.code=n},handleCodeChange(e){this.code=e,Zn(this.codeWithId,this.code),this.mode==="ontime"&&this.execCode()},pushMessage(e){e&&this.messages.push(e)},clearMessages(){this.messages=[]},changeEnv(){if(!bn)return _n.warning("当前环境不支持切换运行环境");this.env=this.env==="browser"?"node":"browser",this.env==="browser"?Zn("env","browser"):Cr("env")},changeMode(){this.mode=this.mode==="manual"?"ontime":"manual",this.mode==="manual"?(Zn("mode","manual"),this.execCode()):Cr("mode")},loadHistorys(){const e=Qa("code/");if(!e||!e.length)return;e.sort((t,r)=>parseInt(t._id.split("/")[1])-parseInt(r._id.split("/")[1])),e.splice(0,e.length-25).forEach(t=>Cr(t._id)),this.historys=e.map(t=>({id:t._id,timeStamp:parseInt(t._id.split("/")[1]),code:t.data}))},readHistory(e){this.loadCode(e),Zn("lastCodeId",this.id)},emptyHistory(){this.historys=this.historys.filter(e=>(e.id,this.codeWithId,e.id===this.codeWithId)),Qa("code/").forEach(e=>e._id!==this.codeWithId&&Cr(e._id)),_n.success("清空历史记录成功")},execCode(){if(!this.code)return _n.warning("当前代码为空");const e=(n,t)=>{const r=ak(),i=new Date().getTime();n&&(n!=null&&n.length)&&this.pushMessage({id:r,timeStamp:i,type:"log",content:n}),t&&this.pushMessage({id:r,timeStamp:i,type:"error",content:t})};this.env==="browser"?fk(this.code,e):pk(this.code,e)}}}),Ck={class:"runner"},Lk={class:"btns"},xk=Y({__name:"Runner",setup(e){const n=ee(Mn("size")||.75),t=Rk(),r=Mn("lastCodeId")||0;return Fe(n,i=>Zn("size",i)),qe(()=>t.loadCode(r)),(i,o)=>{const s=fe("icon-plus"),a=gr,l=_y,c=fe("icon-thunderbolt"),d=fe("icon-stop"),p=fe("icon-info-circle"),f=fe("icon-file"),v=Yt,y=dy,S=jy;return F(),Q("div",Ck,[re("div",Lk,[N(l,{content:"创建新代码片段"},{default:Z(()=>[N(a,{onClick:be(t).newCode},{default:Z(()=>[N(s)]),_:1},8,["onClick"])]),_:1}),N(l,{content:"运行代码"},{default:Z(()=>[N(a,{onClick:be(t).execCode},{default:Z(()=>[N(c)]),_:1},8,["onClick"])]),_:1}),N(l,{content:"清空控制台"},{default:Z(()=>[N(a,{onClick:be(t).clearMessages},{default:Z(()=>[N(d)]),_:1},8,["onClick"])]),_:1}),N(l,{content:"关于"},{default:Z(()=>[N(a,{onClick:o[0]||(o[0]=k=>i.$router.push("/about"))},{default:Z(()=>[N(p)]),_:1})]),_:1}),N(a,{class:"width-80",onClick:be(t).changeEnv},{default:Z(()=>[Qe(kn(be(t).currentEnv),1)]),_:1},8,["onClick"]),N(a,{class:"width-80",onClick:be(t).changeMode},{default:Z(()=>[Qe(kn(be(t).currentMode),1)]),_:1},8,["onClick"]),N(y,{"popup-max-height":!1},{content:Z(()=>[(F(!0),Q(De,null,ts(be(t).historys,k=>(F(),ke(v,{class:G({"active-option":k.id===be(t).codeWithId}),onClick:_=>be(t).readHistory(k.timeStamp)},{icon:Z(()=>[N(f)]),default:Z(()=>[Qe(" "+kn(be(gd)(k.timeStamp)),1)]),_:2},1032,["class","onClick"]))),256))]),footer:Z(()=>[N(v,{onClick:be(t).emptyHistory},{default:Z(()=>[Qe("清空代码历史")]),_:1},8,["onClick"])]),default:Z(()=>[N(a,{class:"flex-fill",onClick:be(t).loadHistorys},{default:Z(()=>[Qe("代码历史回溯")]),_:1},8,["onClick"])]),_:1})]),N(S,{size:be(n),"onUpdate:size":o[1]||(o[1]=k=>Ie(n)?n.value=k:null),min:.1,max:.8},{first:Z(()=>[N(Ek,{code:be(t).code,onCodeChange:be(t).handleCodeChange,onRunCode:be(t).execCode},null,8,["code","onCodeChange","onRunCode"])]),second:Z(()=>[N(Pk,{messages:be(t).messages},null,8,["messages"])]),_:1},8,["size","min","max"])])}}});const Ik=gi(xk,[["__scopeId","data-v-8417b993"]]),Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Ik},Symbol.toStringTag,{value:"Module"}));function wk(e,n,t,r){qe(()=>{e.addEventListener(n,t,r)}),st(()=>{e.removeEventListener(n,t,r)})}function zd(){const e=Wm(),n=()=>e.back();return wk(document,"keydown",t=>{t.key==="Escape"&&(n(),t.stopPropagation())}),{BackButton:()=>lr(gr,{class:"back",onClick:n,shape:"circle"},()=>lr(mv))}}const Nk={class:"setting"},Bk=Y({__name:"Setting",setup(e){const{BackButton:n}=zd();return(t,r)=>(F(),Q("div",Nk,[N(be(n))]))}}),Dk=Object.freeze(Object.defineProperty({__proto__:null,default:Bk},Symbol.toStringTag,{value:"Module"}));const Hk=""+new URL("../logo.png",import.meta.url).href,Os=e=>(ep("data-v-70d8ec5a"),e=e(),np(),e),Mk={class:"about"},Fk=Os(()=>re("img",{class:"bg-icon",src:Hk,alt:"logo"},null,-1)),Kk=Os(()=>re("h1",{class:"title"},"超级JavaScript",-1)),jk={class:"footer-btns"},$k=Os(()=>re("div",{class:"footer-tip"},"Copyright © 2019-present ZiuChen",-1)),Wk=Y({__name:"About",setup(e){const n=[{text:"插件主页",url:"https://ziuchen.gitee.io/project/JSRunner/"},{text:"开源地址",url:"https://github.com/ZiuChen/JSRunner",badge:{text:"Star"}},{text:"更新日志",url:"https://ziuchen.gitee.io/project/JSRunner/log/"}],{BackButton:t}=zd();return(r,i)=>{const o=hy,s=gr,a=Yb;return F(),Q("div",Mk,[Fk,Kk,N(o,{onClick:i[0]||(i[0]=l=>be(lo)("https://github.com/ZiuChen"))},{default:Z(()=>[Qe("ZiuChen")]),_:1}),re("div",jk,[(F(),Q(De,null,ts(n,l=>(F(),Q(De,null,[l!=null&&l.badge?(F(),ke(a,nu(xt({key:0},l.badge)),{default:Z(()=>[N(s,{onClick:c=>be(lo)(l.url)},{default:Z(()=>[Qe(kn(l.text),1)]),_:2},1032,["onClick"])]),_:2},1040)):(F(),ke(s,{key:1,onClick:c=>be(lo)(l.url)},{default:Z(()=>[Qe(kn(l.text),1)]),_:2},1032,["onClick"]))],64))),64))]),$k,N(be(t))])}}});const Uk=gi(Wk,[["__scopeId","data-v-70d8ec5a"]]),zk=Object.freeze(Object.defineProperty({__proto__:null,default:Uk},Symbol.toStringTag,{value:"Module"}));export{Pi as _};
