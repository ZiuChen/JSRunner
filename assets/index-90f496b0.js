import{K as Nr,a as Dr,W as Pp,b as Cp,c as Rp,l as It,e as Lp}from"./monaco-afc60444.js";import"./index-90f496b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ks(e,n){const t=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return n?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const Ie={},Pt=[],bn=()=>{},xp=()=>!1,wp=/^on[^a-z]/,Si=e=>wp.test(e),Ws=e=>e.startsWith("onUpdate:"),Fe=Object.assign,zs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ip=Object.prototype.hasOwnProperty,Te=(e,n)=>Ip.call(e,n),se=Array.isArray,Ct=e=>Ar(e)==="[object Map]",Gc=e=>Ar(e)==="[object Set]",Ap=e=>Ar(e)==="[object RegExp]",ge=e=>typeof e=="function",Ne=e=>typeof e=="string",Us=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",qc=e=>xe(e)&&ge(e.then)&&ge(e.catch),Jc=Object.prototype.toString,Ar=e=>Jc.call(e),Bp=e=>Ar(e).slice(8,-1),Zc=e=>Ar(e)==="[object Object]",Vs=e=>Ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jr=Ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Np=/-(\w)/g,Pn=Ei(e=>e.replace(Np,(n,t)=>t?t.toUpperCase():"")),Dp=/\B([A-Z])/g,jt=Ei(e=>e.replace(Dp,"-$1").toLowerCase()),_i=Ei(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zi=Ei(e=>e?`on${_i(e)}`:""),Er=(e,n)=>!Object.is(e,n),ur=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ai=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Hp=e=>{const n=parseFloat(e);return isNaN(n)?e:n},$p=e=>{const n=Ne(e)?Number(e):NaN;return isNaN(n)?e:n};let Na;const ds=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function be(e){if(se(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=Ne(r)?Kp(r):be(r);if(i)for(const s in i)n[s]=i[s]}return n}else{if(Ne(e))return e;if(xe(e))return e}}const Mp=/;(?![^(]*\))/g,Fp=/:([^]+)/,jp=/\/\*[^]*?\*\//g;function Kp(e){const n={};return e.replace(jp,"").split(Mp).forEach(t=>{if(t){const r=t.split(Fp);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function K(e){let n="";if(Ne(e))n=e;else if(se(e))for(let t=0;t<e.length;t++){const r=K(e[t]);r&&(n+=r+" ")}else if(xe(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function Wp(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Ne(n)&&(e.class=K(n)),t&&(e.style=be(t)),e}const zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Up=Ks(zp);function Yc(e){return!!e||e===""}const Ve=e=>Ne(e)?e:e==null?"":se(e)||xe(e)&&(e.toString===Jc||!ge(e.toString))?JSON.stringify(e,Xc,2):String(e),Xc=(e,n)=>n&&n.__v_isRef?Xc(e,n.value):Ct(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:Gc(n)?{[`Set(${n.size})`]:[...n.values()]}:xe(n)&&!se(n)&&!Zc(n)?String(n):n;let ln;class Qc{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ln,!n&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=ln;try{return ln=this,n()}finally{ln=t}}}on(){ln=this}off(){ln=this.parent}stop(n){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function eu(e){return new Qc(e)}function Vp(e,n=ln){n&&n.active&&n.effects.push(e)}function nu(){return ln}function Gp(e){ln&&ln.cleanups.push(e)}const Gs=e=>{const n=new Set(e);return n.w=0,n.n=0,n},tu=e=>(e.w&Qn)>0,ru=e=>(e.n&Qn)>0,qp=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Qn},Jp=e=>{const{deps:n}=e;if(n.length){let t=0;for(let r=0;r<n.length;r++){const i=n[r];tu(i)&&!ru(i)?i.delete(e):n[t++]=i,i.w&=~Qn,i.n&=~Qn}n.length=t}},li=new WeakMap;let rr=0,Qn=1;const ps=30;let gn;const at=Symbol(""),fs=Symbol("");class qs{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Vp(this,r)}run(){if(!this.active)return this.fn();let n=gn,t=Jn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=gn,gn=this,Jn=!0,Qn=1<<++rr,rr<=ps?qp(this):Da(this),this.fn()}finally{rr<=ps&&Jp(this),Qn=1<<--rr,gn=this.parent,Jn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gn===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Jn=!0;const iu=[];function Kt(){iu.push(Jn),Jn=!1}function Wt(){const e=iu.pop();Jn=e===void 0?!0:e}function rn(e,n,t){if(Jn&&gn){let r=li.get(e);r||li.set(e,r=new Map);let i=r.get(t);i||r.set(t,i=Gs()),ou(i)}}function ou(e,n){let t=!1;rr<=ps?ru(e)||(e.n|=Qn,t=!tu(e)):t=!e.has(gn),t&&(e.add(gn),gn.deps.push(e))}function Dn(e,n,t,r,i,s){const o=li.get(e);if(!o)return;let a=[];if(n==="clear")a=[...o.values()];else if(t==="length"&&se(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),n){case"add":se(e)?Vs(t)&&a.push(o.get("length")):(a.push(o.get(at)),Ct(e)&&a.push(o.get(fs)));break;case"delete":se(e)||(a.push(o.get(at)),Ct(e)&&a.push(o.get(fs)));break;case"set":Ct(e)&&a.push(o.get(at));break}if(a.length===1)a[0]&&ms(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ms(Gs(l))}}function ms(e,n){const t=se(e)?e:[...e];for(const r of t)r.computed&&Ha(r);for(const r of t)r.computed||Ha(r)}function Ha(e,n){(e!==gn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Zp(e,n){var t;return(t=li.get(e))==null?void 0:t.get(n)}const Yp=Ks("__proto__,__v_isRef,__isVue"),su=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Us)),Xp=Js(),Qp=Js(!1,!0),ef=Js(!0),$a=nf();function nf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=Se(this);for(let s=0,o=this.length;s<o;s++)rn(r,"get",s+"");const i=r[n](...t);return i===-1||i===!1?r[n](...t.map(Se)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Kt();const r=Se(this)[n].apply(this,t);return Wt(),r}}),e}function tf(e){const n=Se(this);return rn(n,"has",e),n.hasOwnProperty(e)}function Js(e=!1,n=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return n;if(i==="__v_raw"&&s===(e?n?yf:du:n?uu:cu).get(r))return r;const o=se(r);if(!e){if(o&&Te($a,i))return Reflect.get($a,i,s);if(i==="hasOwnProperty")return tf}const a=Reflect.get(r,i,s);return(Us(i)?su.has(i):Yp(i))||(e||rn(r,"get",i),n)?a:He(a)?o&&Vs(i)?a:a.value:xe(a)?e?Xs(a):on(a):a}}const rf=au(),of=au(!0);function au(e=!1){return function(t,r,i,s){let o=t[r];if(At(o)&&He(o)&&!He(i))return!1;if(!e&&(!ci(i)&&!At(i)&&(o=Se(o),i=Se(i)),!se(t)&&He(o)&&!He(i)))return o.value=i,!0;const a=se(t)&&Vs(r)?Number(r)<t.length:Te(t,r),l=Reflect.set(t,r,i,s);return t===Se(s)&&(a?Er(i,o)&&Dn(t,"set",r,i):Dn(t,"add",r,i)),l}}function sf(e,n){const t=Te(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&Dn(e,"delete",n,void 0),r}function af(e,n){const t=Reflect.has(e,n);return(!Us(n)||!su.has(n))&&rn(e,"has",n),t}function lf(e){return rn(e,"iterate",se(e)?"length":at),Reflect.ownKeys(e)}const lu={get:Xp,set:rf,deleteProperty:sf,has:af,ownKeys:lf},cf={get:ef,set(e,n){return!0},deleteProperty(e,n){return!0}},uf=Fe({},lu,{get:Qp,set:of}),Zs=e=>e,Ti=e=>Reflect.getPrototypeOf(e);function Hr(e,n,t=!1,r=!1){e=e.__v_raw;const i=Se(e),s=Se(n);t||(n!==s&&rn(i,"get",n),rn(i,"get",s));const{has:o}=Ti(i),a=r?Zs:t?ea:_r;if(o.call(i,n))return a(e.get(n));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(n)}function $r(e,n=!1){const t=this.__v_raw,r=Se(t),i=Se(e);return n||(e!==i&&rn(r,"has",e),rn(r,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function Mr(e,n=!1){return e=e.__v_raw,!n&&rn(Se(e),"iterate",at),Reflect.get(e,"size",e)}function Ma(e){e=Se(e);const n=Se(this);return Ti(n).has.call(n,e)||(n.add(e),Dn(n,"add",e,e)),this}function Fa(e,n){n=Se(n);const t=Se(this),{has:r,get:i}=Ti(t);let s=r.call(t,e);s||(e=Se(e),s=r.call(t,e));const o=i.call(t,e);return t.set(e,n),s?Er(n,o)&&Dn(t,"set",e,n):Dn(t,"add",e,n),this}function ja(e){const n=Se(this),{has:t,get:r}=Ti(n);let i=t.call(n,e);i||(e=Se(e),i=t.call(n,e)),r&&r.call(n,e);const s=n.delete(e);return i&&Dn(n,"delete",e,void 0),s}function Ka(){const e=Se(this),n=e.size!==0,t=e.clear();return n&&Dn(e,"clear",void 0,void 0),t}function Fr(e,n){return function(r,i){const s=this,o=s.__v_raw,a=Se(o),l=n?Zs:e?ea:_r;return!e&&rn(a,"iterate",at),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function jr(e,n,t){return function(...r){const i=this.__v_raw,s=Se(i),o=Ct(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=t?Zs:n?ea:_r;return!n&&rn(s,"iterate",l?fs:at),{next(){const{value:p,done:f}=c.next();return f?{value:p,done:f}:{value:a?[u(p[0]),u(p[1])]:u(p),done:f}},[Symbol.iterator](){return this}}}}function Fn(e){return function(...n){return e==="delete"?!1:this}}function df(){const e={get(s){return Hr(this,s)},get size(){return Mr(this)},has:$r,add:Ma,set:Fa,delete:ja,clear:Ka,forEach:Fr(!1,!1)},n={get(s){return Hr(this,s,!1,!0)},get size(){return Mr(this)},has:$r,add:Ma,set:Fa,delete:ja,clear:Ka,forEach:Fr(!1,!0)},t={get(s){return Hr(this,s,!0)},get size(){return Mr(this,!0)},has(s){return $r.call(this,s,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Fr(!0,!1)},r={get(s){return Hr(this,s,!0,!0)},get size(){return Mr(this,!0)},has(s){return $r.call(this,s,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=jr(s,!1,!1),t[s]=jr(s,!0,!1),n[s]=jr(s,!1,!0),r[s]=jr(s,!0,!0)}),[e,t,n,r]}const[pf,ff,mf,vf]=df();function Ys(e,n){const t=n?e?vf:mf:e?ff:pf;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Te(t,i)&&i in r?t:r,i,s)}const gf={get:Ys(!1,!1)},hf={get:Ys(!1,!0)},bf={get:Ys(!0,!1)},cu=new WeakMap,uu=new WeakMap,du=new WeakMap,yf=new WeakMap;function Sf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ef(e){return e.__v_skip||!Object.isExtensible(e)?0:Sf(Bp(e))}function on(e){return At(e)?e:Qs(e,!1,lu,gf,cu)}function _f(e){return Qs(e,!1,uf,hf,uu)}function Xs(e){return Qs(e,!0,cf,bf,du)}function Qs(e,n,t,r,i){if(!xe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Ef(e);if(o===0)return e;const a=new Proxy(e,o===2?r:t);return i.set(e,a),a}function Zn(e){return At(e)?Zn(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function ci(e){return!!(e&&e.__v_isShallow)}function pu(e){return Zn(e)||At(e)}function Se(e){const n=e&&e.__v_raw;return n?Se(n):e}function ki(e){return ai(e,"__v_skip",!0),e}const _r=e=>xe(e)?on(e):e,ea=e=>xe(e)?Xs(e):e;function fu(e){Jn&&gn&&(e=Se(e),ou(e.dep||(e.dep=Gs())))}function mu(e,n){e=Se(e);const t=e.dep;t&&ms(t)}function He(e){return!!(e&&e.__v_isRef===!0)}function V(e){return vu(e,!1)}function Tf(e){return vu(e,!0)}function vu(e,n){return He(e)?e:new kf(e,n)}class kf{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:Se(n),this._value=t?n:_r(n)}get value(){return fu(this),this._value}set value(n){const t=this.__v_isShallow||ci(n)||At(n);n=t?n:Se(n),Er(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:_r(n),mu(this))}}function ve(e){return He(e)?e.value:e}const Of={get:(e,n,t)=>ve(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return He(i)&&!He(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function gu(e){return Zn(e)?e:new Proxy(e,Of)}function Ge(e){const n=se(e)?new Array(e.length):{};for(const t in e)n[t]=hu(e,t);return n}class Pf{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Zp(Se(this._object),this._key)}}class Cf{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function vs(e,n,t){return He(e)?e:ge(e)?new Cf(e):xe(e)&&arguments.length>1?hu(e,n,t):V(e)}function hu(e,n,t){const r=e[n];return He(r)?r:new Pf(e,n,t)}class Rf{constructor(n,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new qs(n,()=>{this._dirty||(this._dirty=!0,mu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const n=Se(this);return fu(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Lf(e,n,t=!1){let r,i;const s=ge(e);return s?(r=e,i=bn):(r=e.get,i=e.set),new Rf(r,i,s||!i,t)}function Yn(e,n,t,r){let i;try{i=r?e(...r):e()}catch(s){Oi(s,n,t)}return i}function dn(e,n,t,r){if(ge(e)){const s=Yn(e,n,t,r);return s&&qc(s)&&s.catch(o=>{Oi(o,n,t)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(dn(e[s],n,t,r));return i}function Oi(e,n,t,r=!0){const i=n?n.vnode:null;if(n){let s=n.parent;const o=n.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}s=s.parent}const l=n.appContext.config.errorHandler;if(l){Yn(l,null,10,[e,o,a]);return}}}let Tr=!1,gs=!1;const Ze=[];let Tn=0;const Rt=[];let wn=null,it=0;const bu=Promise.resolve();let na=null;function mn(e){const n=na||bu;return e?n.then(this?e.bind(this):e):n}function xf(e){let n=Tn+1,t=Ze.length;for(;n<t;){const r=n+t>>>1;kr(Ze[r])<e?n=r+1:t=r}return n}function ta(e){(!Ze.length||!Ze.includes(e,Tr&&e.allowRecurse?Tn+1:Tn))&&(e.id==null?Ze.push(e):Ze.splice(xf(e.id),0,e),yu())}function yu(){!Tr&&!gs&&(gs=!0,na=bu.then(Eu))}function wf(e){const n=Ze.indexOf(e);n>Tn&&Ze.splice(n,1)}function If(e){se(e)?Rt.push(...e):(!wn||!wn.includes(e,e.allowRecurse?it+1:it))&&Rt.push(e),yu()}function Wa(e,n=Tr?Tn+1:0){for(;n<Ze.length;n++){const t=Ze[n];t&&t.pre&&(Ze.splice(n,1),n--,t())}}function Su(e){if(Rt.length){const n=[...new Set(Rt)];if(Rt.length=0,wn){wn.push(...n);return}for(wn=n,wn.sort((t,r)=>kr(t)-kr(r)),it=0;it<wn.length;it++)wn[it]();wn=null,it=0}}const kr=e=>e.id==null?1/0:e.id,Af=(e,n)=>{const t=kr(e)-kr(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Eu(e){gs=!1,Tr=!0,Ze.sort(Af);const n=bn;try{for(Tn=0;Tn<Ze.length;Tn++){const t=Ze[Tn];t&&t.active!==!1&&Yn(t,null,14)}}finally{Tn=0,Ze.length=0,Su(),Tr=!1,na=null,(Ze.length||Rt.length)&&Eu()}}function Bf(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Ie;let i=t;const s=n.startsWith("update:"),o=s&&n.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:f}=r[u]||Ie;f&&(i=t.map(g=>Ne(g)?g.trim():g)),p&&(i=t.map(Hp))}let a,l=r[a=Zi(n)]||r[a=Zi(Pn(n))];!l&&s&&(l=r[a=Zi(jt(n))]),l&&dn(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,dn(c,e,6,i)}}function _u(e,n,t=!1){const r=n.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!ge(e)){const l=c=>{const u=_u(c,n,!0);u&&(a=!0,Fe(o,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(xe(e)&&r.set(e,null),null):(se(s)?s.forEach(l=>o[l]=null):Fe(o,s),xe(e)&&r.set(e,o),o)}function Pi(e,n){return!e||!Si(n)?!1:(n=n.slice(2).replace(/Once$/,""),Te(e,n[0].toLowerCase()+n.slice(1))||Te(e,jt(n))||Te(e,n))}let Ue=null,Ci=null;function ui(e){const n=Ue;return Ue=e,Ci=e&&e.type.__scopeId||null,n}function Nf(e){Ci=e}function Df(){Ci=null}function z(e,n=Ue,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&tl(-1);const s=ui(n);let o;try{o=e(...i)}finally{ui(s),r._d&&tl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yi(e){const{type:n,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:p,data:f,setupState:g,ctx:O,inheritAttrs:_}=e;let x,k;const y=ui(e);try{if(t.shapeFlag&4){const h=i||r;x=_n(u.call(h,h,p,s,g,f,O)),k=l}else{const h=n;x=_n(h.length>1?h(s,{attrs:l,slots:a,emit:c}):h(s,null)),k=n.props?l:Hf(l)}}catch(h){fr.length=0,Oi(h,e,1),x=b(pn)}let C=x;if(k&&_!==!1){const h=Object.keys(k),{shapeFlag:P}=C;h.length&&P&7&&(o&&h.some(Ws)&&(k=$f(k,o)),C=vn(C,k))}return t.dirs&&(C=vn(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),x=C,ui(y),x}const Hf=e=>{let n;for(const t in e)(t==="class"||t==="style"||Si(t))&&((n||(n={}))[t]=e[t]);return n},$f=(e,n)=>{const t={};for(const r in e)(!Ws(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Mf(e,n,t){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=n,c=s.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,c):!!o;if(l&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const f=u[p];if(o[f]!==r[f]&&!Pi(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?za(r,o,c):!0:!!o;return!1}function za(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(n[s]!==e[s]&&!Pi(t,s))return!0}return!1}function Ff({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Tu=e=>e.__isSuspense;function jf(e,n){n&&n.pendingBranch?se(e)?n.effects.push(...e):n.effects.push(e):If(e)}const Kr={};function Ce(e,n,t){return ku(e,n,t)}function ku(e,n,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=Ie){var a;const l=nu()===((a=We)==null?void 0:a.scope)?We:null;let c,u=!1,p=!1;if(He(e)?(c=()=>e.value,u=ci(e)):Zn(e)?(c=()=>e,r=!0):se(e)?(p=!0,u=e.some(h=>Zn(h)||ci(h)),c=()=>e.map(h=>{if(He(h))return h.value;if(Zn(h))return st(h);if(ge(h))return Yn(h,l,2)})):ge(e)?n?c=()=>Yn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),dn(e,l,3,[g])}:c=bn,n&&r){const h=c;c=()=>st(h())}let f,g=h=>{f=y.onStop=()=>{Yn(h,l,4)}},O;if(Rr)if(g=bn,n?t&&dn(n,l,3,[c(),p?[]:void 0,g]):c(),i==="sync"){const h=Am();O=h.__watcherHandles||(h.__watcherHandles=[])}else return bn;let _=p?new Array(e.length).fill(Kr):Kr;const x=()=>{if(y.active)if(n){const h=y.run();(r||u||(p?h.some((P,N)=>Er(P,_[N])):Er(h,_)))&&(f&&f(),dn(n,l,3,[h,_===Kr?void 0:p&&_[0]===Kr?[]:_,g]),_=h)}else y.run()};x.allowRecurse=!!n;let k;i==="sync"?k=x:i==="post"?k=()=>qe(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),k=()=>ta(x));const y=new qs(c,k);n?t?x():_=y.run():i==="post"?qe(y.run.bind(y),l&&l.suspense):y.run();const C=()=>{y.stop(),l&&l.scope&&zs(l.scope.effects,y)};return O&&O.push(C),C}function Kf(e,n,t){const r=this.proxy,i=Ne(e)?e.includes(".")?Ou(r,e):()=>r[e]:e.bind(r,r);let s;ge(n)?s=n:(s=n.handler,t=n);const o=We;Dt(this);const a=ku(i,s.bind(r),t);return o?Dt(o):lt(),a}function Ou(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function st(e,n){if(!xe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),He(e))st(e.value,n);else if(se(e))for(let t=0;t<e.length;t++)st(e[t],n);else if(Gc(e)||Ct(e))e.forEach(t=>{st(t,n)});else if(Zc(e))for(const t in e)st(e[t],n);return e}function Zr(e,n){const t=Ue;if(t===null)return e;const r=Bi(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[o,a,l,c=Ie]=n[s];o&&(ge(o)&&(o={mounted:o,updated:o}),o.deep&&st(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function et(e,n,t,r){const i=e.dirs,s=n&&n.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Kt(),dn(l,t,8,[e.el,a,e,n]),Wt())}}function Pu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ze(()=>{e.isMounted=!0}),ft(()=>{e.isUnmounting=!0}),e}const cn=[Function,Array],Cu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},Wf={name:"BaseTransition",props:Cu,setup(e,{slots:n}){const t=Ai(),r=Pu();let i;return()=>{const s=n.default&&ra(n.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const _ of s)if(_.type!==pn){o=_;break}}const a=Se(e),{mode:l}=a;if(r.isLeaving)return Xi(o);const c=Ua(o);if(!c)return Xi(o);const u=Or(c,a,r,t);Bt(c,u);const p=t.subTree,f=p&&Ua(p);let g=!1;const{getTransitionKey:O}=c.type;if(O){const _=O();i===void 0?i=_:_!==i&&(i=_,g=!0)}if(f&&f.type!==pn&&(!Gn(c,f)||g)){const _=Or(f,a,r,t);if(Bt(f,_),l==="out-in")return r.isLeaving=!0,_.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},Xi(o);l==="in-out"&&c.type!==pn&&(_.delayLeave=(x,k,y)=>{const C=Ru(r,f);C[String(f.key)]=f,x._leaveCb=()=>{k(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return o}}},zf=Wf;function Ru(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Or(e,n,t,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:O,onBeforeAppear:_,onAppear:x,onAfterAppear:k,onAppearCancelled:y}=n,C=String(e.key),h=Ru(t,e),P=(B,w)=>{B&&dn(B,r,9,w)},N=(B,w)=>{const H=w[1];P(B,w),se(B)?B.every(X=>X.length<=1)&&H():B.length<=1&&H()},$={mode:s,persisted:o,beforeEnter(B){let w=a;if(!t.isMounted)if(i)w=_||a;else return;B._leaveCb&&B._leaveCb(!0);const H=h[C];H&&Gn(e,H)&&H.el._leaveCb&&H.el._leaveCb(),P(w,[B])},enter(B){let w=l,H=c,X=u;if(!t.isMounted)if(i)w=x||l,H=k||c,X=y||u;else return;let j=!1;const U=B._enterCb=ue=>{j||(j=!0,ue?P(X,[B]):P(H,[B]),$.delayedLeave&&$.delayedLeave(),B._enterCb=void 0)};w?N(w,[B,U]):U()},leave(B,w){const H=String(e.key);if(B._enterCb&&B._enterCb(!0),t.isUnmounting)return w();P(p,[B]);let X=!1;const j=B._leaveCb=U=>{X||(X=!0,w(),U?P(O,[B]):P(g,[B]),B._leaveCb=void 0,h[H]===e&&delete h[H])};h[H]=e,f?N(f,[B,j]):j()},clone(B){return Or(B,n,t,r)}};return $}function Xi(e){if(Ri(e))return e=vn(e),e.children=null,e}function Ua(e){return Ri(e)?e.children?e.children[0]:void 0:e}function Bt(e,n){e.shapeFlag&6&&e.component?Bt(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ra(e,n=!1,t){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Be?(o.patchFlag&128&&i++,r=r.concat(ra(o.children,n,a))):(n||o.type!==pn)&&r.push(a!=null?vn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function G(e,n){return ge(e)?(()=>Fe({name:e.name},n,{setup:e}))():e}const Lt=e=>!!e.type.__asyncLoader,Ri=e=>e.type.__isKeepAlive,Uf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=Ai(),r=t.ctx;if(!r.renderer)return()=>{const y=n.default&&n.default();return y&&y.length===1?y[0]:y};const i=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:p}}}=r,f=p("div");r.activate=(y,C,h,P,N)=>{const $=y.component;c(y,C,h,0,a),l($.vnode,y,C,h,$,a,P,y.slotScopeIds,N),qe(()=>{$.isDeactivated=!1,$.a&&ur($.a);const B=y.props&&y.props.onVnodeMounted;B&&un(B,$.parent,y)},a)},r.deactivate=y=>{const C=y.component;c(y,f,null,1,a),qe(()=>{C.da&&ur(C.da);const h=y.props&&y.props.onVnodeUnmounted;h&&un(h,C.parent,y),C.isDeactivated=!0},a)};function g(y){Qi(y),u(y,t,a,!0)}function O(y){i.forEach((C,h)=>{const P=Ts(C.type);P&&(!y||!y(P))&&_(h)})}function _(y){const C=i.get(y);!o||!Gn(C,o)?g(C):o&&Qi(o),i.delete(y),s.delete(y)}Ce(()=>[e.include,e.exclude],([y,C])=>{y&&O(h=>ir(y,h)),C&&O(h=>!ir(C,h))},{flush:"post",deep:!0});let x=null;const k=()=>{x!=null&&i.set(x,eo(t.subTree))};return ze(k),pt(k),ft(()=>{i.forEach(y=>{const{subTree:C,suspense:h}=t,P=eo(C);if(y.type===P.type&&y.key===P.key){Qi(P);const N=P.component.da;N&&qe(N,h);return}g(y)})}),()=>{if(x=null,!n.default)return null;const y=n.default(),C=y[0];if(y.length>1)return o=null,y;if(!Nt(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return o=null,C;let h=eo(C);const P=h.type,N=Ts(Lt(h)?h.type.__asyncResolved||{}:P),{include:$,exclude:B,max:w}=e;if($&&(!N||!ir($,N))||B&&N&&ir(B,N))return o=h,C;const H=h.key==null?P:h.key,X=i.get(H);return h.el&&(h=vn(h),C.shapeFlag&128&&(C.ssContent=h)),x=H,X?(h.el=X.el,h.component=X.component,h.transition&&Bt(h,h.transition),h.shapeFlag|=512,s.delete(H),s.add(H)):(s.add(H),w&&s.size>parseInt(w,10)&&_(s.values().next().value)),h.shapeFlag|=256,o=h,Tu(C.type)?C:h}}},Vf=Uf;function ir(e,n){return se(e)?e.some(t=>ir(t,n)):Ne(e)?e.split(",").includes(n):Ap(e)?e.test(n):!1}function Gf(e,n){xu(e,"a",n)}function Lu(e,n){xu(e,"da",n)}function xu(e,n,t=We){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Li(n,r,t),t){let i=t.parent;for(;i&&i.parent;)Ri(i.parent.vnode)&&qf(r,n,t,i),i=i.parent}}function qf(e,n,t,r){const i=Li(n,e,r,!0);mt(()=>{zs(r[n],i)},t)}function Qi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function eo(e){return e.shapeFlag&128?e.ssContent:e}function Li(e,n,t=We,r=!1){if(t){const i=t[e]||(t[e]=[]),s=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;Kt(),Dt(t);const a=dn(n,t,e,o);return lt(),Wt(),a});return r?i.unshift(s):i.push(s),s}}const $n=e=>(n,t=We)=>(!Rr||e==="sp")&&Li(e,(...r)=>n(...r),t),Jf=$n("bm"),ze=$n("m"),Zf=$n("bu"),pt=$n("u"),ft=$n("bum"),mt=$n("um"),Yf=$n("sp"),Xf=$n("rtg"),Qf=$n("rtc");function em(e,n=We){Li("ec",e,n)}const ia="components";function re(e,n){return Au(ia,e,!0,n)||e}const wu=Symbol.for("v-ndc");function Iu(e){return Ne(e)?Au(ia,e,!1)||e:e||wu}function Au(e,n,t=!0,r=!1){const i=Ue||We;if(i){const s=i.type;if(e===ia){const a=Ts(s,!1);if(a&&(a===n||a===Pn(n)||a===_i(Pn(n))))return s}const o=Va(i[e]||s[e],n)||Va(i.appContext[e],n);return!o&&r?s:o}}function Va(e,n){return e&&(e[n]||e[Pn(n)]||e[_i(Pn(n))])}function xi(e,n,t,r){let i;const s=t&&t[r];if(se(e)||Ne(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=n(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=n(o+1,o,void 0,s&&s[o])}else if(xe(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>n(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=n(e[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}function di(e,n){for(let t=0;t<n.length;t++){const r=n[t];if(se(r))for(let i=0;i<r.length;i++)e[r[i].name]=r[i].fn;else r&&(e[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return e}function ce(e,n,t={},r,i){if(Ue.isCE||Ue.parent&&Lt(Ue.parent)&&Ue.parent.isCE)return n!=="default"&&(t.name=n),b("slot",t,r&&r());let s=e[n];s&&s._c&&(s._d=!1),L();const o=s&&Bu(s(t)),a=fe(Be,{key:t.key||o&&o.key||`_${n}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Bu(e){return e.some(n=>Nt(n)?!(n.type===pn||n.type===Be&&!Bu(n.children)):!0)?e:null}const hs=e=>e?Vu(e)?Bi(e)||e.proxy:hs(e.parent):null,dr=Fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hs(e.parent),$root:e=>hs(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>ta(e.update)),$nextTick:e=>e.n||(e.n=mn.bind(e.proxy)),$watch:e=>Kf.bind(e)}),no=(e,n)=>e!==Ie&&!e.__isScriptSetup&&Te(e,n),nm={get({_:e},n){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if(n[0]!=="$"){const g=o[n];if(g!==void 0)switch(g){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return s[n]}else{if(no(r,n))return o[n]=1,r[n];if(i!==Ie&&Te(i,n))return o[n]=2,i[n];if((c=e.propsOptions[0])&&Te(c,n))return o[n]=3,s[n];if(t!==Ie&&Te(t,n))return o[n]=4,t[n];bs&&(o[n]=0)}}const u=dr[n];let p,f;if(u)return n==="$attrs"&&rn(e,"get",n),u(e);if((p=a.__cssModules)&&(p=p[n]))return p;if(t!==Ie&&Te(t,n))return o[n]=4,t[n];if(f=l.config.globalProperties,Te(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:s}=e;return no(i,n)?(i[n]=t,!0):r!==Ie&&Te(r,n)?(r[n]=t,!0):Te(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(s[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||e!==Ie&&Te(e,o)||no(n,o)||(a=s[0])&&Te(a,o)||Te(r,o)||Te(dr,o)||Te(i.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Te(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Ga(e){return se(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let bs=!0;function tm(e){const n=oa(e),t=e.proxy,r=e.ctx;bs=!1,n.beforeCreate&&qa(n.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:p,mounted:f,beforeUpdate:g,updated:O,activated:_,deactivated:x,beforeDestroy:k,beforeUnmount:y,destroyed:C,unmounted:h,render:P,renderTracked:N,renderTriggered:$,errorCaptured:B,serverPrefetch:w,expose:H,inheritAttrs:X,components:j,directives:U,filters:ue}=n;if(c&&rm(c,r,null),o)for(const me in o){const le=o[me];ge(le)&&(r[me]=le.bind(t))}if(i){const me=i.call(t,t);xe(me)&&(e.data=on(me))}if(bs=!0,s)for(const me in s){const le=s[me],De=ge(le)?le.bind(t,t):ge(le.get)?le.get.bind(t,t):bn,je=!ge(le)&&ge(le.set)?le.set.bind(t):bn,$e=E({get:De,set:je});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>$e.value,set:Me=>$e.value=Me})}if(a)for(const me in a)Nu(a[me],r,t,me);if(l){const me=ge(l)?l.call(t):l;Reflect.ownKeys(me).forEach(le=>{Bn(le,me[le])})}u&&qa(u,e,"c");function de(me,le){se(le)?le.forEach(De=>me(De.bind(t))):le&&me(le.bind(t))}if(de(Jf,p),de(ze,f),de(Zf,g),de(pt,O),de(Gf,_),de(Lu,x),de(em,B),de(Qf,N),de(Xf,$),de(ft,y),de(mt,h),de(Yf,w),se(H))if(H.length){const me=e.exposed||(e.exposed={});H.forEach(le=>{Object.defineProperty(me,le,{get:()=>t[le],set:De=>t[le]=De})})}else e.exposed||(e.exposed={});P&&e.render===bn&&(e.render=P),X!=null&&(e.inheritAttrs=X),j&&(e.components=j),U&&(e.directives=U)}function rm(e,n,t=bn){se(e)&&(e=ys(e));for(const r in e){const i=e[r];let s;xe(i)?"default"in i?s=Ae(i.from||r,i.default,!0):s=Ae(i.from||r):s=Ae(i),He(s)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):n[r]=s}}function qa(e,n,t){dn(se(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Nu(e,n,t,r){const i=r.includes(".")?Ou(t,r):()=>t[r];if(Ne(e)){const s=n[e];ge(s)&&Ce(i,s)}else if(ge(e))Ce(i,e.bind(t));else if(xe(e))if(se(e))e.forEach(s=>Nu(s,n,t,r));else{const s=ge(e.handler)?e.handler.bind(t):n[e.handler];ge(s)&&Ce(i,s,e)}}function oa(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(n);let l;return a?l=a:!i.length&&!t&&!r?l=n:(l={},i.length&&i.forEach(c=>pi(l,c,o,!0)),pi(l,n,o)),xe(n)&&s.set(n,l),l}function pi(e,n,t,r=!1){const{mixins:i,extends:s}=n;s&&pi(e,s,t,!0),i&&i.forEach(o=>pi(e,o,t,!0));for(const o in n)if(!(r&&o==="expose")){const a=im[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const im={data:Ja,props:Za,emits:Za,methods:or,computed:or,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:or,directives:or,watch:sm,provide:Ja,inject:om};function Ja(e,n){return n?e?function(){return Fe(ge(e)?e.call(this,this):e,ge(n)?n.call(this,this):n)}:n:e}function om(e,n){return or(ys(e),ys(n))}function ys(e){if(se(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Qe(e,n){return e?[...new Set([].concat(e,n))]:n}function or(e,n){return e?Fe(Object.create(null),e,n):n}function Za(e,n){return e?se(e)&&se(n)?[...new Set([...e,...n])]:Fe(Object.create(null),Ga(e),Ga(n??{})):n}function sm(e,n){if(!e)return n;if(!n)return e;const t=Fe(Object.create(null),e);for(const r in n)t[r]=Qe(e[r],n[r]);return t}function Du(){return{app:null,config:{isNativeTag:xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let am=0;function lm(e,n){return function(r,i=null){ge(r)||(r=Fe({},r)),i!=null&&!xe(i)&&(i=null);const s=Du(),o=new Set;let a=!1;const l=s.app={_uid:am++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Bm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ge(c.install)?(o.add(c),c.install(l,...u)):ge(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,p){if(!a){const f=b(r,i);return f.appContext=s,u&&n?n(f,c):e(f,c,p),a=!0,l._container=c,c.__vue_app__=l,Bi(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Pr=l;try{return c()}finally{Pr=null}}};return l}}let Pr=null;function Bn(e,n){if(We){let t=We.provides;const r=We.parent&&We.parent.provides;r===t&&(t=We.provides=Object.create(r)),t[e]=n}}function Ae(e,n,t=!1){const r=We||Ue;if(r||Pr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Pr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&ge(n)?n.call(r&&r.proxy):n}}function cm(){return!!(We||Ue||Pr)}function um(e,n,t,r=!1){const i={},s={};ai(s,Ii,1),e.propsDefaults=Object.create(null),Hu(e,n,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);t?e.props=r?i:_f(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function dm(e,n,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=Se(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let f=u[p];if(Pi(e.emitsOptions,f))continue;const g=n[f];if(l)if(Te(s,f))g!==s[f]&&(s[f]=g,c=!0);else{const O=Pn(f);i[O]=Ss(l,a,O,g,e,!1)}else g!==s[f]&&(s[f]=g,c=!0)}}}else{Hu(e,n,i,s)&&(c=!0);let u;for(const p in a)(!n||!Te(n,p)&&((u=jt(p))===p||!Te(n,u)))&&(l?t&&(t[p]!==void 0||t[u]!==void 0)&&(i[p]=Ss(l,a,p,void 0,e,!0)):delete i[p]);if(s!==a)for(const p in s)(!n||!Te(n,p))&&(delete s[p],c=!0)}c&&Dn(e,"set","$attrs")}function Hu(e,n,t,r){const[i,s]=e.propsOptions;let o=!1,a;if(n)for(let l in n){if(Jr(l))continue;const c=n[l];let u;i&&Te(i,u=Pn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Pi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Se(t),c=a||Ie;for(let u=0;u<s.length;u++){const p=s[u];t[p]=Ss(i,l,p,c[p],e,!Te(c,p))}}return o}function Ss(e,n,t,r,i,s){const o=e[t];if(o!=null){const a=Te(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ge(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(Dt(i),r=c[t]=l.call(null,n),lt())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===jt(t))&&(r=!0))}return r}function $u(e,n,t=!1){const r=n.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!ge(e)){const u=p=>{l=!0;const[f,g]=$u(p,n,!0);Fe(o,f),g&&a.push(...g)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return xe(e)&&r.set(e,Pt),Pt;if(se(s))for(let u=0;u<s.length;u++){const p=Pn(s[u]);Ya(p)&&(o[p]=Ie)}else if(s)for(const u in s){const p=Pn(u);if(Ya(p)){const f=s[u],g=o[p]=se(f)||ge(f)?{type:f}:Fe({},f);if(g){const O=el(Boolean,g.type),_=el(String,g.type);g[0]=O>-1,g[1]=_<0||O<_,(O>-1||Te(g,"default"))&&a.push(p)}}}const c=[o,a];return xe(e)&&r.set(e,c),c}function Ya(e){return e[0]!=="$"}function Xa(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Qa(e,n){return Xa(e)===Xa(n)}function el(e,n){return se(n)?n.findIndex(t=>Qa(t,e)):ge(n)&&Qa(n,e)?0:-1}const Mu=e=>e[0]==="_"||e==="$stable",sa=e=>se(e)?e.map(_n):[_n(e)],pm=(e,n,t)=>{if(n._n)return n;const r=z((...i)=>sa(n(...i)),t);return r._c=!1,r},Fu=(e,n,t)=>{const r=e._ctx;for(const i in e){if(Mu(i))continue;const s=e[i];if(ge(s))n[i]=pm(i,s,r);else if(s!=null){const o=sa(s);n[i]=()=>o}}},ju=(e,n)=>{const t=sa(n);e.slots.default=()=>t},fm=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=Se(n),ai(n,"_",t)):Fu(n,e.slots={})}else e.slots={},n&&ju(e,n);ai(e.slots,Ii,1)},mm=(e,n,t)=>{const{vnode:r,slots:i}=e;let s=!0,o=Ie;if(r.shapeFlag&32){const a=n._;a?t&&a===1?s=!1:(Fe(i,n),!t&&a===1&&delete i._):(s=!n.$stable,Fu(n,i)),o=n}else n&&(ju(e,n),o={default:1});if(s)for(const a in i)!Mu(a)&&!(a in o)&&delete i[a]};function Es(e,n,t,r,i=!1){if(se(e)){e.forEach((f,g)=>Es(f,n&&(se(n)?n[g]:n),t,r,i));return}if(Lt(r)&&!i)return;const s=r.shapeFlag&4?Bi(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=n&&n.r,u=a.refs===Ie?a.refs={}:a.refs,p=a.setupState;if(c!=null&&c!==l&&(Ne(c)?(u[c]=null,Te(p,c)&&(p[c]=null)):He(c)&&(c.value=null)),ge(l))Yn(l,a,12,[o,u]);else{const f=Ne(l),g=He(l);if(f||g){const O=()=>{if(e.f){const _=f?Te(p,l)?p[l]:u[l]:l.value;i?se(_)&&zs(_,s):se(_)?_.includes(s)||_.push(s):f?(u[l]=[s],Te(p,l)&&(p[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,Te(p,l)&&(p[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(O.id=-1,qe(O,t)):O()}}}const qe=jf;function vm(e){return gm(e)}function gm(e,n){const t=ds();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:p,nextSibling:f,setScopeId:g=bn,insertStaticContent:O}=e,_=(m,d,v,S=null,T=null,I=null,Z=!1,M=null,W=!!d.dynamicChildren)=>{if(m===d)return;m&&!Gn(m,d)&&(S=R(m),Me(m,T,I,!0),m=null),d.patchFlag===-2&&(W=!1,d.dynamicChildren=null);const{type:D,ref:ie,shapeFlag:ne}=d;switch(D){case wi:x(m,d,v,S);break;case pn:k(m,d,v,S);break;case to:m==null&&y(d,v,S,Z);break;case Be:j(m,d,v,S,T,I,Z,M,W);break;default:ne&1?P(m,d,v,S,T,I,Z,M,W):ne&6?U(m,d,v,S,T,I,Z,M,W):(ne&64||ne&128)&&D.process(m,d,v,S,T,I,Z,M,W,F)}ie!=null&&T&&Es(ie,m&&m.ref,I,d||m,!d)},x=(m,d,v,S)=>{if(m==null)r(d.el=a(d.children),v,S);else{const T=d.el=m.el;d.children!==m.children&&c(T,d.children)}},k=(m,d,v,S)=>{m==null?r(d.el=l(d.children||""),v,S):d.el=m.el},y=(m,d,v,S)=>{[m.el,m.anchor]=O(m.children,d,v,S,m.el,m.anchor)},C=({el:m,anchor:d},v,S)=>{let T;for(;m&&m!==d;)T=f(m),r(m,v,S),m=T;r(d,v,S)},h=({el:m,anchor:d})=>{let v;for(;m&&m!==d;)v=f(m),i(m),m=v;i(d)},P=(m,d,v,S,T,I,Z,M,W)=>{Z=Z||d.type==="svg",m==null?N(d,v,S,T,I,Z,M,W):w(m,d,T,I,Z,M,W)},N=(m,d,v,S,T,I,Z,M)=>{let W,D;const{type:ie,props:ne,shapeFlag:oe,transition:A,dirs:Y}=m;if(W=m.el=o(m.type,I,ne&&ne.is,ne),oe&8?u(W,m.children):oe&16&&B(m.children,W,null,S,T,I&&ie!=="foreignObject",Z,M),Y&&et(m,null,S,"created"),$(W,m,m.scopeId,Z,S),ne){for(const _e in ne)_e!=="value"&&!Jr(_e)&&s(W,_e,null,ne[_e],I,m.children,S,T,ke);"value"in ne&&s(W,"value",null,ne.value),(D=ne.onVnodeBeforeMount)&&un(D,S,m)}Y&&et(m,null,S,"beforeMount");const he=(!T||T&&!T.pendingBranch)&&A&&!A.persisted;he&&A.beforeEnter(W),r(W,d,v),((D=ne&&ne.onVnodeMounted)||he||Y)&&qe(()=>{D&&un(D,S,m),he&&A.enter(W),Y&&et(m,null,S,"mounted")},T)},$=(m,d,v,S,T)=>{if(v&&g(m,v),S)for(let I=0;I<S.length;I++)g(m,S[I]);if(T){let I=T.subTree;if(d===I){const Z=T.vnode;$(m,Z,Z.scopeId,Z.slotScopeIds,T.parent)}}},B=(m,d,v,S,T,I,Z,M,W=0)=>{for(let D=W;D<m.length;D++){const ie=m[D]=M?Un(m[D]):_n(m[D]);_(null,ie,d,v,S,T,I,Z,M)}},w=(m,d,v,S,T,I,Z)=>{const M=d.el=m.el;let{patchFlag:W,dynamicChildren:D,dirs:ie}=d;W|=m.patchFlag&16;const ne=m.props||Ie,oe=d.props||Ie;let A;v&&nt(v,!1),(A=oe.onVnodeBeforeUpdate)&&un(A,v,d,m),ie&&et(d,m,v,"beforeUpdate"),v&&nt(v,!0);const Y=T&&d.type!=="foreignObject";if(D?H(m.dynamicChildren,D,M,v,S,Y,I):Z||le(m,d,M,null,v,S,Y,I,!1),W>0){if(W&16)X(M,d,ne,oe,v,S,T);else if(W&2&&ne.class!==oe.class&&s(M,"class",null,oe.class,T),W&4&&s(M,"style",ne.style,oe.style,T),W&8){const he=d.dynamicProps;for(let _e=0;_e<he.length;_e++){const Re=he[_e],Je=ne[Re],Et=oe[Re];(Et!==Je||Re==="value")&&s(M,Re,Je,Et,T,m.children,v,S,ke)}}W&1&&m.children!==d.children&&u(M,d.children)}else!Z&&D==null&&X(M,d,ne,oe,v,S,T);((A=oe.onVnodeUpdated)||ie)&&qe(()=>{A&&un(A,v,d,m),ie&&et(d,m,v,"updated")},S)},H=(m,d,v,S,T,I,Z)=>{for(let M=0;M<d.length;M++){const W=m[M],D=d[M],ie=W.el&&(W.type===Be||!Gn(W,D)||W.shapeFlag&70)?p(W.el):v;_(W,D,ie,null,S,T,I,Z,!0)}},X=(m,d,v,S,T,I,Z)=>{if(v!==S){if(v!==Ie)for(const M in v)!Jr(M)&&!(M in S)&&s(m,M,v[M],null,Z,d.children,T,I,ke);for(const M in S){if(Jr(M))continue;const W=S[M],D=v[M];W!==D&&M!=="value"&&s(m,M,D,W,Z,d.children,T,I,ke)}"value"in S&&s(m,"value",v.value,S.value)}},j=(m,d,v,S,T,I,Z,M,W)=>{const D=d.el=m?m.el:a(""),ie=d.anchor=m?m.anchor:a("");let{patchFlag:ne,dynamicChildren:oe,slotScopeIds:A}=d;A&&(M=M?M.concat(A):A),m==null?(r(D,v,S),r(ie,v,S),B(d.children,v,ie,T,I,Z,M,W)):ne>0&&ne&64&&oe&&m.dynamicChildren?(H(m.dynamicChildren,oe,v,T,I,Z,M),(d.key!=null||T&&d===T.subTree)&&aa(m,d,!0)):le(m,d,v,ie,T,I,Z,M,W)},U=(m,d,v,S,T,I,Z,M,W)=>{d.slotScopeIds=M,m==null?d.shapeFlag&512?T.ctx.activate(d,v,S,Z,W):ue(d,v,S,T,I,Z,W):pe(m,d,W)},ue=(m,d,v,S,T,I,Z)=>{const M=m.component=Pm(m,S,T);if(Ri(m)&&(M.ctx.renderer=F),Cm(M),M.asyncDep){if(T&&T.registerDep(M,de),!m.el){const W=M.subTree=b(pn);k(null,W,d,v)}return}de(M,m,d,v,T,I,Z)},pe=(m,d,v)=>{const S=d.component=m.component;if(Mf(m,d,v))if(S.asyncDep&&!S.asyncResolved){me(S,d,v);return}else S.next=d,wf(S.update),S.update();else d.el=m.el,S.vnode=d},de=(m,d,v,S,T,I,Z)=>{const M=()=>{if(m.isMounted){let{next:ie,bu:ne,u:oe,parent:A,vnode:Y}=m,he=ie,_e;nt(m,!1),ie?(ie.el=Y.el,me(m,ie,Z)):ie=Y,ne&&ur(ne),(_e=ie.props&&ie.props.onVnodeBeforeUpdate)&&un(_e,A,ie,Y),nt(m,!0);const Re=Yi(m),Je=m.subTree;m.subTree=Re,_(Je,Re,p(Je.el),R(Je),m,T,I),ie.el=Re.el,he===null&&Ff(m,Re.el),oe&&qe(oe,T),(_e=ie.props&&ie.props.onVnodeUpdated)&&qe(()=>un(_e,A,ie,Y),T)}else{let ie;const{el:ne,props:oe}=d,{bm:A,m:Y,parent:he}=m,_e=Lt(d);if(nt(m,!1),A&&ur(A),!_e&&(ie=oe&&oe.onVnodeBeforeMount)&&un(ie,he,d),nt(m,!0),ne&&ye){const Re=()=>{m.subTree=Yi(m),ye(ne,m.subTree,m,T,null)};_e?d.type.__asyncLoader().then(()=>!m.isUnmounted&&Re()):Re()}else{const Re=m.subTree=Yi(m);_(null,Re,v,S,m,T,I),d.el=Re.el}if(Y&&qe(Y,T),!_e&&(ie=oe&&oe.onVnodeMounted)){const Re=d;qe(()=>un(ie,he,Re),T)}(d.shapeFlag&256||he&&Lt(he.vnode)&&he.vnode.shapeFlag&256)&&m.a&&qe(m.a,T),m.isMounted=!0,d=v=S=null}},W=m.effect=new qs(M,()=>ta(D),m.scope),D=m.update=()=>W.run();D.id=m.uid,nt(m,!0),D()},me=(m,d,v)=>{d.component=m;const S=m.vnode.props;m.vnode=d,m.next=null,dm(m,d.props,S,v),mm(m,d.children,v),Kt(),Wa(),Wt()},le=(m,d,v,S,T,I,Z,M,W=!1)=>{const D=m&&m.children,ie=m?m.shapeFlag:0,ne=d.children,{patchFlag:oe,shapeFlag:A}=d;if(oe>0){if(oe&128){je(D,ne,v,S,T,I,Z,M,W);return}else if(oe&256){De(D,ne,v,S,T,I,Z,M,W);return}}A&8?(ie&16&&ke(D,T,I),ne!==D&&u(v,ne)):ie&16?A&16?je(D,ne,v,S,T,I,Z,M,W):ke(D,T,I,!0):(ie&8&&u(v,""),A&16&&B(ne,v,S,T,I,Z,M,W))},De=(m,d,v,S,T,I,Z,M,W)=>{m=m||Pt,d=d||Pt;const D=m.length,ie=d.length,ne=Math.min(D,ie);let oe;for(oe=0;oe<ne;oe++){const A=d[oe]=W?Un(d[oe]):_n(d[oe]);_(m[oe],A,v,null,T,I,Z,M,W)}D>ie?ke(m,T,I,!0,!1,ne):B(d,v,S,T,I,Z,M,W,ne)},je=(m,d,v,S,T,I,Z,M,W)=>{let D=0;const ie=d.length;let ne=m.length-1,oe=ie-1;for(;D<=ne&&D<=oe;){const A=m[D],Y=d[D]=W?Un(d[D]):_n(d[D]);if(Gn(A,Y))_(A,Y,v,null,T,I,Z,M,W);else break;D++}for(;D<=ne&&D<=oe;){const A=m[ne],Y=d[oe]=W?Un(d[oe]):_n(d[oe]);if(Gn(A,Y))_(A,Y,v,null,T,I,Z,M,W);else break;ne--,oe--}if(D>ne){if(D<=oe){const A=oe+1,Y=A<ie?d[A].el:S;for(;D<=oe;)_(null,d[D]=W?Un(d[D]):_n(d[D]),v,Y,T,I,Z,M,W),D++}}else if(D>oe)for(;D<=ne;)Me(m[D],T,I,!0),D++;else{const A=D,Y=D,he=new Map;for(D=Y;D<=oe;D++){const an=d[D]=W?Un(d[D]):_n(d[D]);an.key!=null&&he.set(an.key,D)}let _e,Re=0;const Je=oe-Y+1;let Et=!1,Ia=0;const Xt=new Array(Je);for(D=0;D<Je;D++)Xt[D]=0;for(D=A;D<=ne;D++){const an=m[D];if(Re>=Je){Me(an,T,I,!0);continue}let En;if(an.key!=null)En=he.get(an.key);else for(_e=Y;_e<=oe;_e++)if(Xt[_e-Y]===0&&Gn(an,d[_e])){En=_e;break}En===void 0?Me(an,T,I,!0):(Xt[En-Y]=D+1,En>=Ia?Ia=En:Et=!0,_(an,d[En],v,null,T,I,Z,M,W),Re++)}const Aa=Et?hm(Xt):Pt;for(_e=Aa.length-1,D=Je-1;D>=0;D--){const an=Y+D,En=d[an],Ba=an+1<ie?d[an+1].el:S;Xt[D]===0?_(null,En,v,Ba,T,I,Z,M,W):Et&&(_e<0||D!==Aa[_e]?$e(En,v,Ba,2):_e--)}}},$e=(m,d,v,S,T=null)=>{const{el:I,type:Z,transition:M,children:W,shapeFlag:D}=m;if(D&6){$e(m.component.subTree,d,v,S);return}if(D&128){m.suspense.move(d,v,S);return}if(D&64){Z.move(m,d,v,F);return}if(Z===Be){r(I,d,v);for(let ne=0;ne<W.length;ne++)$e(W[ne],d,v,S);r(m.anchor,d,v);return}if(Z===to){C(m,d,v);return}if(S!==2&&D&1&&M)if(S===0)M.beforeEnter(I),r(I,d,v),qe(()=>M.enter(I),T);else{const{leave:ne,delayLeave:oe,afterLeave:A}=M,Y=()=>r(I,d,v),he=()=>{ne(I,()=>{Y(),A&&A()})};oe?oe(I,Y,he):he()}else r(I,d,v)},Me=(m,d,v,S=!1,T=!1)=>{const{type:I,props:Z,ref:M,children:W,dynamicChildren:D,shapeFlag:ie,patchFlag:ne,dirs:oe}=m;if(M!=null&&Es(M,null,v,m,!0),ie&256){d.ctx.deactivate(m);return}const A=ie&1&&oe,Y=!Lt(m);let he;if(Y&&(he=Z&&Z.onVnodeBeforeUnmount)&&un(he,d,m),ie&6)sn(m.component,v,S);else{if(ie&128){m.suspense.unmount(v,S);return}A&&et(m,null,d,"beforeUnmount"),ie&64?m.type.remove(m,d,v,T,F,S):D&&(I!==Be||ne>0&&ne&64)?ke(D,d,v,!1,!0):(I===Be&&ne&384||!T&&ie&16)&&ke(W,d,v),S&&Ye(m)}(Y&&(he=Z&&Z.onVnodeUnmounted)||A)&&qe(()=>{he&&un(he,d,m),A&&et(m,null,d,"unmounted")},v)},Ye=m=>{const{type:d,el:v,anchor:S,transition:T}=m;if(d===Be){Xe(v,S);return}if(d===to){h(m);return}const I=()=>{i(v),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:Z,delayLeave:M}=T,W=()=>Z(v,I);M?M(m.el,I,W):W()}else I()},Xe=(m,d)=>{let v;for(;m!==d;)v=f(m),i(m),m=v;i(d)},sn=(m,d,v)=>{const{bum:S,scope:T,update:I,subTree:Z,um:M}=m;S&&ur(S),T.stop(),I&&(I.active=!1,Me(Z,m,d,v)),M&&qe(M,d),qe(()=>{m.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ke=(m,d,v,S=!1,T=!1,I=0)=>{for(let Z=I;Z<m.length;Z++)Me(m[Z],d,v,S,T)},R=m=>m.shapeFlag&6?R(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),J=(m,d,v)=>{m==null?d._vnode&&Me(d._vnode,null,null,!0):_(d._vnode||null,m,d,null,null,null,v),Wa(),Su(),d._vnode=m},F={p:_,um:Me,m:$e,r:Ye,mt:ue,mc:B,pc:le,pbc:H,n:R,o:e};let ee,ye;return n&&([ee,ye]=n(F)),{render:J,hydrate:ee,createApp:lm(J,ee)}}function nt({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function aa(e,n,t=!1){const r=e.children,i=n.children;if(se(r)&&se(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Un(i[s]),a.el=o.el),t||aa(o,a)),a.type===wi&&(a.el=o.el)}}function hm(e){const n=e.slice(),t=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=t[t.length-1],e[i]<c){n[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,e[t[a]]<c?s=a+1:o=a;c<e[t[s]]&&(s>0&&(n[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=n[o];return t}const bm=e=>e.__isTeleport,pr=e=>e&&(e.disabled||e.disabled===""),nl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,_s=(e,n)=>{const t=e&&e.to;return Ne(t)?n?n(t):null:t},ym={__isTeleport:!0,process(e,n,t,r,i,s,o,a,l,c){const{mc:u,pc:p,pbc:f,o:{insert:g,querySelector:O,createText:_,createComment:x}}=c,k=pr(n.props);let{shapeFlag:y,children:C,dynamicChildren:h}=n;if(e==null){const P=n.el=_(""),N=n.anchor=_("");g(P,t,r),g(N,t,r);const $=n.target=_s(n.props,O),B=n.targetAnchor=_("");$&&(g(B,$),o=o||nl($));const w=(H,X)=>{y&16&&u(C,H,X,i,s,o,a,l)};k?w(t,N):$&&w($,B)}else{n.el=e.el;const P=n.anchor=e.anchor,N=n.target=e.target,$=n.targetAnchor=e.targetAnchor,B=pr(e.props),w=B?t:N,H=B?P:$;if(o=o||nl(N),h?(f(e.dynamicChildren,h,w,i,s,o,a),aa(e,n,!0)):l||p(e,n,w,H,i,s,o,a,!1),k)B||Wr(n,t,P,c,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const X=n.target=_s(n.props,O);X&&Wr(n,X,null,c,0)}else B&&Wr(n,N,$,c,1)}Wu(n)},remove(e,n,t,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:p,props:f}=e;if(p&&s(u),(o||!pr(f))&&(s(c),a&16))for(let g=0;g<l.length;g++){const O=l[g];i(O,n,t,!0,!!O.dynamicChildren)}},move:Wr,hydrate:Sm};function Wr(e,n,t,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,n,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,p=s===2;if(p&&r(o,n,t),(!p||pr(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],n,t,2);p&&r(a,n,t)}function Sm(e,n,t,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=n.target=_s(n.props,l);if(u){const p=u._lpa||u.firstChild;if(n.shapeFlag&16)if(pr(n.props))n.anchor=c(o(e),n,a(e),t,r,i,s),n.targetAnchor=p;else{n.anchor=o(e);let f=p;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,u._lpa=n.targetAnchor&&o(n.targetAnchor);break}c(p,n,u,t,r,i,s)}Wu(n)}return n.anchor&&o(n.anchor)}const Ku=ym;function Wu(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Be=Symbol.for("v-fgt"),wi=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),fr=[];let hn=null;function L(e=!1){fr.push(hn=e?null:[])}function Em(){fr.pop(),hn=fr[fr.length-1]||null}let Cr=1;function tl(e){Cr+=e}function zu(e){return e.dynamicChildren=Cr>0?hn||Pt:null,Em(),Cr>0&&hn&&hn.push(e),e}function q(e,n,t,r,i,s){return zu(Q(e,n,t,r,i,s,!0))}function fe(e,n,t,r,i){return zu(b(e,n,t,r,i,!0))}function Nt(e){return e?e.__v_isVNode===!0:!1}function Gn(e,n){return e.type===n.type&&e.key===n.key}const Ii="__vInternal",Uu=({key:e})=>e??null,Yr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Ne(e)||He(e)||ge(e)?{i:Ue,r:e,k:n,f:!!t}:e:null);function Q(e,n=null,t=null,r=0,i=null,s=e===Be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Uu(n),ref:n&&Yr(n),scopeId:Ci,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return a?(la(l,t),s&128&&e.normalize(l)):t&&(l.shapeFlag|=Ne(t)?8:16),Cr>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const b=_m;function _m(e,n=null,t=null,r=0,i=null,s=!1){if((!e||e===wu)&&(e=pn),Nt(e)){const a=vn(e,n,!0);return t&&la(a,t),Cr>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(e)]=a:hn.push(a)),a.patchFlag|=-2,a}if(wm(e)&&(e=e.__vccOpts),n){n=Tm(n);let{class:a,style:l}=n;a&&!Ne(a)&&(n.class=K(a)),xe(l)&&(pu(l)&&!se(l)&&(l=Fe({},l)),n.style=be(l))}const o=Ne(e)?1:Tu(e)?128:bm(e)?64:xe(e)?4:ge(e)?2:0;return Q(e,n,t,r,i,o,s,!0)}function Tm(e){return e?pu(e)||Ii in e?Fe({},e):e:null}function vn(e,n,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=n?en(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Uu(a),ref:n&&n.ref?t&&i?se(i)?i.concat(Yr(n)):[i,Yr(n)]:Yr(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vn(e.ssContent),ssFallback:e.ssFallback&&vn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ke(e=" ",n=0){return b(wi,null,e,n)}function Pe(e="",n=!1){return n?(L(),fe(pn,null,e)):b(pn,null,e)}function _n(e){return e==null||typeof e=="boolean"?b(pn):se(e)?b(Be,null,e.slice()):typeof e=="object"?Un(e):b(wi,null,String(e))}function Un(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vn(e)}function la(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(se(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),la(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!(Ii in n)?n._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ge(n)?(n={default:n,_ctx:Ue},t=32):(n=String(n),r&64?(t=16,n=[Ke(n)]):t=8);e.children=n,e.shapeFlag|=t}function en(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=K([n.class,r.class]));else if(i==="style")n.style=be([n.style,r.style]);else if(Si(i)){const s=n[i],o=r[i];o&&s!==o&&!(se(s)&&s.includes(o))&&(n[i]=s?[].concat(s,o):o)}else i!==""&&(n[i]=r[i])}return n}function un(e,n,t,r=null){dn(e,n,7,[t,r])}const km=Du();let Om=0;function Pm(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||km,s={uid:Om++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$u(r,i),emitsOptions:_u(r,i),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=n?n.root:s,s.emit=Bf.bind(null,s),e.ce&&e.ce(s),s}let We=null;const Ai=()=>We||Ue;let ca,_t,rl="__VUE_INSTANCE_SETTERS__";(_t=ds()[rl])||(_t=ds()[rl]=[]),_t.push(e=>We=e),ca=e=>{_t.length>1?_t.forEach(n=>n(e)):_t[0](e)};const Dt=e=>{ca(e),e.scope.on()},lt=()=>{We&&We.scope.off(),ca(null)};function Vu(e){return e.vnode.shapeFlag&4}let Rr=!1;function Cm(e,n=!1){Rr=n;const{props:t,children:r}=e.vnode,i=Vu(e);um(e,t,i,n),fm(e,r);const s=i?Rm(e,n):void 0;return Rr=!1,s}function Rm(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=ki(new Proxy(e.ctx,nm));const{setup:r}=t;if(r){const i=e.setupContext=r.length>1?xm(e):null;Dt(e),Kt();const s=Yn(r,e,0,[e.props,i]);if(Wt(),lt(),qc(s)){if(s.then(lt,lt),n)return s.then(o=>{il(e,o,n)}).catch(o=>{Oi(o,e,0)});e.asyncDep=s}else il(e,s,n)}else Gu(e,n)}function il(e,n,t){ge(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:xe(n)&&(e.setupState=gu(n)),Gu(e,t)}let ol;function Gu(e,n,t){const r=e.type;if(!e.render){if(!n&&ol&&!r.render){const i=r.template||oa(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Fe(Fe({isCustomElement:s,delimiters:a},o),l);r.render=ol(i,c)}}e.render=r.render||bn}Dt(e),Kt(),tm(e),Wt(),lt()}function Lm(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return rn(e,"get","$attrs"),n[t]}}))}function xm(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return Lm(e)},slots:e.slots,emit:e.emit,expose:n}}function Bi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(gu(ki(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in dr)return dr[t](e)},has(n,t){return t in n||t in dr}}))}function Ts(e,n=!0){return ge(e)?e.displayName||e.name:e.name||n&&e.__name}function wm(e){return ge(e)&&"__vccOpts"in e}const E=(e,n)=>Lf(e,n,Rr);function Lr(e,n,t){const r=arguments.length;return r===2?xe(n)&&!se(n)?Nt(n)?b(e,null,[n]):b(e,n):b(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Nt(t)&&(t=[t]),b(e,n,t))}const Im=Symbol.for("v-scx"),Am=()=>Ae(Im),Bm="3.3.4",Nm="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,sl=ot&&ot.createElement("template"),Dm={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n?ot.createElementNS(Nm,e):ot.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,s){const o=t?t.previousSibling:n.lastChild;if(i&&(i===s||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{sl.innerHTML=r?`<svg>${e}</svg>`:e;const a=sl.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Hm(e,n,t){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function $m(e,n,t){const r=e.style,i=Ne(t);if(t&&!i){if(n&&!Ne(n))for(const s in n)t[s]==null&&ks(r,s,"");for(const s in t)ks(r,s,t[s])}else{const s=r.display;i?n!==t&&(r.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const al=/\s*!important$/;function ks(e,n,t){if(se(t))t.forEach(r=>ks(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=Mm(e,n);al.test(t)?e.setProperty(jt(r),t.replace(al,""),"important"):e[r]=t}}const ll=["Webkit","Moz","ms"],ro={};function Mm(e,n){const t=ro[n];if(t)return t;let r=Pn(n);if(r!=="filter"&&r in e)return ro[n]=r;r=_i(r);for(let i=0;i<ll.length;i++){const s=ll[i]+r;if(s in e)return ro[n]=s}return n}const cl="http://www.w3.org/1999/xlink";function Fm(e,n,t,r,i){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(cl,n.slice(6,n.length)):e.setAttributeNS(cl,n,t);else{const s=Up(n);t==null||s&&!Yc(t)?e.removeAttribute(n):e.setAttribute(n,s?"":t)}}function jm(e,n,t,r,i,s,o){if(n==="innerHTML"||n==="textContent"){r&&o(r,i,s),e[n]=t??"";return}const a=e.tagName;if(n==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=t;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=t??"";c!==u&&(e.value=u),t==null&&e.removeAttribute(n);return}let l=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=Yc(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(n)}function Km(e,n,t,r){e.addEventListener(n,t,r)}function Wm(e,n,t,r){e.removeEventListener(n,t,r)}function zm(e,n,t,r,i=null){const s=e._vei||(e._vei={}),o=s[n];if(r&&o)o.value=r;else{const[a,l]=Um(n);if(r){const c=s[n]=qm(r,i);Km(e,a,c,l)}else o&&(Wm(e,a,o,l),s[n]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function Um(e){let n;if(ul.test(e)){n={};let r;for(;r=e.match(ul);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),n]}let io=0;const Vm=Promise.resolve(),Gm=()=>io||(Vm.then(()=>io=0),io=Date.now());function qm(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;dn(Jm(r,t.value),n,5,[r])};return t.value=e,t.attached=Gm(),t}function Jm(e,n){if(se(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>i=>!i._stopped&&r&&r(i))}else return n}const dl=/^on[a-z]/,Zm=(e,n,t,r,i=!1,s,o,a,l)=>{n==="class"?Hm(e,r,i):n==="style"?$m(e,t,r):Si(n)?Ws(n)||zm(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Ym(e,n,r,i))?jm(e,n,r,s,o,a,l):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Fm(e,n,r,i))};function Ym(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&dl.test(n)&&ge(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||dl.test(n)&&Ne(t)?!1:n in e}const jn="transition",Qt="animation",ct=(e,{slots:n})=>Lr(zf,Ju(e),n);ct.displayName="Transition";const qu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xm=ct.props=Fe({},Cu,qu),tt=(e,n=[])=>{se(e)?e.forEach(t=>t(...n)):e&&e(...n)},pl=e=>e?se(e)?e.some(n=>n.length>1):e.length>1:!1;function Ju(e){const n={};for(const j in e)j in qu||(n[j]=e[j]);if(e.css===!1)return n;const{name:t="v",type:r,duration:i,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=e,O=Qm(i),_=O&&O[0],x=O&&O[1],{onBeforeEnter:k,onEnter:y,onEnterCancelled:C,onLeave:h,onLeaveCancelled:P,onBeforeAppear:N=k,onAppear:$=y,onAppearCancelled:B=C}=n,w=(j,U,ue)=>{Wn(j,U?u:a),Wn(j,U?c:o),ue&&ue()},H=(j,U)=>{j._isLeaving=!1,Wn(j,p),Wn(j,g),Wn(j,f),U&&U()},X=j=>(U,ue)=>{const pe=j?$:y,de=()=>w(U,j,ue);tt(pe,[U,de]),fl(()=>{Wn(U,j?l:s),xn(U,j?u:a),pl(pe)||ml(U,r,_,de)})};return Fe(n,{onBeforeEnter(j){tt(k,[j]),xn(j,s),xn(j,o)},onBeforeAppear(j){tt(N,[j]),xn(j,l),xn(j,c)},onEnter:X(!1),onAppear:X(!0),onLeave(j,U){j._isLeaving=!0;const ue=()=>H(j,U);xn(j,p),Yu(),xn(j,f),fl(()=>{j._isLeaving&&(Wn(j,p),xn(j,g),pl(h)||ml(j,r,x,ue))}),tt(h,[j,ue])},onEnterCancelled(j){w(j,!1),tt(C,[j])},onAppearCancelled(j){w(j,!0),tt(B,[j])},onLeaveCancelled(j){H(j),tt(P,[j])}})}function Qm(e){if(e==null)return null;if(xe(e))return[oo(e.enter),oo(e.leave)];{const n=oo(e);return[n,n]}}function oo(e){return $p(e)}function xn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function Wn(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function fl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ev=0;function ml(e,n,t,r){const i=e._endId=++ev,s=()=>{i===e._endId&&r()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Zu(e,n);if(!o)return r();const c=o+"end";let u=0;const p=()=>{e.removeEventListener(c,f),s()},f=g=>{g.target===e&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},a+1),e.addEventListener(c,f)}function Zu(e,n){const t=window.getComputedStyle(e),r=O=>(t[O]||"").split(", "),i=r(`${jn}Delay`),s=r(`${jn}Duration`),o=vl(i,s),a=r(`${Qt}Delay`),l=r(`${Qt}Duration`),c=vl(a,l);let u=null,p=0,f=0;n===jn?o>0&&(u=jn,p=o,f=s.length):n===Qt?c>0&&(u=Qt,p=c,f=l.length):(p=Math.max(o,c),u=p>0?o>c?jn:Qt:null,f=u?u===jn?s.length:l.length:0);const g=u===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:u,timeout:p,propCount:f,hasTransform:g}}function vl(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>gl(t)+gl(e[r])))}function gl(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Yu(){return document.body.offsetHeight}const Xu=new WeakMap,Qu=new WeakMap,ed={name:"TransitionGroup",props:Fe({},Xm,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Ai(),r=Pu();let i,s;return pt(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!ov(i[0].el,t.vnode.el,o))return;i.forEach(tv),i.forEach(rv);const a=i.filter(iv);Yu(),a.forEach(l=>{const c=l.el,u=c.style;xn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const p=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",p),c._moveCb=null,Wn(c,o))};c.addEventListener("transitionend",p)})}),()=>{const o=Se(e),a=Ju(o);let l=o.tag||Be;i=s,s=n.default?ra(n.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Bt(u,Or(u,a,r,t))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Bt(u,Or(u,a,r,t)),Xu.set(u,u.el.getBoundingClientRect())}return b(l,null,s)}}},nv=e=>delete e.mode;ed.props;const nd=ed;function tv(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function rv(e){Qu.set(e,e.el.getBoundingClientRect())}function iv(e){const n=Xu.get(e),t=Qu.get(e),r=n.left-t.left,i=n.top-t.top;if(r||i){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",e}}function ov(e,n,t){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=n.nodeType===1?n:n.parentNode;i.appendChild(r);const{hasTransform:s}=Zu(r);return i.removeChild(r),s}const sv=["ctrl","shift","alt","meta"],av={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>sv.some(t=>e[`${t}Key`]&&!n.includes(t))},Os=(e,n)=>(t,...r)=>{for(let i=0;i<n.length;i++){const s=av[n[i]];if(s&&s(t,n))return}return e(t,...r)},Xr={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):er(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),er(e,!0),r.enter(e)):r.leave(e,()=>{er(e,!1)}):er(e,n))},beforeUnmount(e,{value:n}){er(e,n)}};function er(e,n){e.style.display=n?e._vod:"none"}const lv=Fe({patchProp:Zm},Dm);let hl;function td(){return hl||(hl=vm(lv))}const fi=(...e)=>{td().render(...e)},cv=(...e)=>{const n=td().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=uv(r);if(!i)return;const s=n._component;!ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},n};function uv(e){return Ne(e)?document.querySelector(e):e}var dv=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let rd;const Ni=e=>rd=e,id=Symbol();function Ps(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var mr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(mr||(mr={}));function pv(){const e=eu(!0),n=e.run(()=>V({}));let t=[],r=[];const i=ki({install(s){Ni(i),i._a=s,s.provide(id,i),s.config.globalProperties.$pinia=i,r.forEach(o=>t.push(o)),r=[]},use(s){return!this._a&&!dv?r.push(s):t.push(s),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return i}const od=()=>{};function bl(e,n,t,r=od){e.push(n);const i=()=>{const s=e.indexOf(n);s>-1&&(e.splice(s,1),r())};return!t&&nu()&&Gp(i),i}function Tt(e,...n){e.slice().forEach(t=>{t(...n)})}const fv=e=>e();function Cs(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,r)=>e.set(r,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],i=e[t];Ps(i)&&Ps(r)&&e.hasOwnProperty(t)&&!He(r)&&!Zn(r)?e[t]=Cs(i,r):e[t]=r}return e}const mv=Symbol();function vv(e){return!Ps(e)||!e.hasOwnProperty(mv)}const{assign:zn}=Object;function gv(e){return!!(He(e)&&e.effect)}function hv(e,n,t,r){const{state:i,actions:s,getters:o}=n,a=t.state.value[e];let l;function c(){a||(t.state.value[e]=i?i():{});const u=Ge(t.state.value[e]);return zn(u,s,Object.keys(o||{}).reduce((p,f)=>(p[f]=ki(E(()=>{Ni(t);const g=t._s.get(e);return o[f].call(g,g)})),p),{}))}return l=sd(e,c,n,t,r,!0),l}function sd(e,n,t={},r,i,s){let o;const a=zn({actions:{}},t),l={deep:!0};let c,u,p=[],f=[],g;const O=r.state.value[e];!s&&!O&&(r.state.value[e]={}),V({});let _;function x(B){let w;c=u=!1,typeof B=="function"?(B(r.state.value[e]),w={type:mr.patchFunction,storeId:e,events:g}):(Cs(r.state.value[e],B),w={type:mr.patchObject,payload:B,storeId:e,events:g});const H=_=Symbol();mn().then(()=>{_===H&&(c=!0)}),u=!0,Tt(p,w,r.state.value[e])}const k=s?function(){const{state:w}=t,H=w?w():{};this.$patch(X=>{zn(X,H)})}:od;function y(){o.stop(),p=[],f=[],r._s.delete(e)}function C(B,w){return function(){Ni(r);const H=Array.from(arguments),X=[],j=[];function U(de){X.push(de)}function ue(de){j.push(de)}Tt(f,{args:H,name:B,store:P,after:U,onError:ue});let pe;try{pe=w.apply(this&&this.$id===e?this:P,H)}catch(de){throw Tt(j,de),de}return pe instanceof Promise?pe.then(de=>(Tt(X,de),de)).catch(de=>(Tt(j,de),Promise.reject(de))):(Tt(X,pe),pe)}}const h={_p:r,$id:e,$onAction:bl.bind(null,f),$patch:x,$reset:k,$subscribe(B,w={}){const H=bl(p,B,w.detached,()=>X()),X=o.run(()=>Ce(()=>r.state.value[e],j=>{(w.flush==="sync"?u:c)&&B({storeId:e,type:mr.direct,events:g},j)},zn({},l,w)));return H},$dispose:y},P=on(h);r._s.set(e,P);const N=r._a&&r._a.runWithContext||fv,$=r._e.run(()=>(o=eu(),N(()=>o.run(n))));for(const B in $){const w=$[B];if(He(w)&&!gv(w)||Zn(w))s||(O&&vv(w)&&(He(w)?w.value=O[B]:Cs(w,O[B])),r.state.value[e][B]=w);else if(typeof w=="function"){const H=C(B,w);$[B]=H,a.actions[B]=w}}return zn(P,$),zn(Se(P),$),Object.defineProperty(P,"$state",{get:()=>r.state.value[e],set:B=>{x(w=>{zn(w,B)})}}),r._p.forEach(B=>{zn(P,o.run(()=>B({store:P,app:r._a,pinia:r,options:a})))}),O&&s&&t.hydrate&&t.hydrate(P.$state,O),c=!0,u=!0,P}function ua(e,n,t){let r,i;const s=typeof n=="function";typeof e=="string"?(r=e,i=s?t:n):(i=e,r=e.id);function o(a,l){const c=cm();return a=a||(c?Ae(id,null):null),a&&Ni(a),a=rd,a._s.has(r)||(s?sd(r,n,i,a):hv(r,i,a)),a._s.get(r)}return o.$id=r,o}function In(e,n){const t=JSON.stringify(n);if(Cn)return utools.dbStorage.setItem(e,t);localStorage.setItem(e,t)}function An(e){if(Cn){const n=utools.dbStorage.getItem(e);return n?JSON.parse(n):null}else{const n=localStorage.getItem(e);return n?JSON.parse(n):null}}function sr(e){(Cn?utools.dbStorage:localStorage).removeItem(e)}function Rs(e){if(Cn)return utools.db.allDocs(e).map(n=>({...n,data:n.data||n.value}));{const n=[];for(let t=0;t<localStorage.length;t++){if(e){const r=localStorage.key(t);r&&r.includes(e)&&n.push({_id:r,data:An(r)});continue}n.push({_id:localStorage.key(t),data:An(localStorage.key(t))})}return n}}function da(e){return e===null?"Null":e===void 0?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}function ad(e){const n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate(),s=n.getHours(),o=n.getMinutes(),a=n.getSeconds(),l=c=>{const u=c.toString();return u[1]?u:"0"+u};return`${t}年${l(r)}月${l(i)}日 ${l(s)}:${l(o)}:${l(a)}`}function bv(e){try{if(navigator.clipboard)navigator.clipboard.writeText(e);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=e,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}return!0}catch{return!1}}function yv(e){let n="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=t.length;for(let i=0;i<e;i++)n+=t.charAt(Math.floor(Math.random()*r));return n}const Cn=window&&typeof(window==null?void 0:window.utools)<"u",vt=Object.prototype.toString;function Di(e){return vt.call(e)==="[object Array]"}function Hi(e){return vt.call(e)==="[object Null]"}function yl(e){return vt.call(e)==="[object Boolean]"}function qn(e){return vt.call(e)==="[object Object]"}const Sl=e=>vt.call(e)==="[object Promise]";function zt(e){return vt.call(e)==="[object String]"}function Ee(e){return vt.call(e)==="[object Number]"&&e===e}function Nn(e){return e===void 0}function fn(e){return typeof e=="function"}const Sv=e=>(e==null?void 0:e.$)!==void 0,Ut=Symbol("ArcoConfigProvider"),zr={formatYear:"YYYY 年",formatMonth:"YYYY 年 MM 月",today:"今天",view:{month:"月",year:"年",week:"周",day:"日"},month:{long:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"},short:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"}},week:{long:{self:"周",monday:"周一",tuesday:"周二",wednesday:"周三",thursday:"周四",friday:"周五",saturday:"周六",sunday:"周日"},short:{self:"周",monday:"一",tuesday:"二",wednesday:"三",thursday:"四",friday:"五",saturday:"六",sunday:"日"}}},Ev={locale:"zh-CN",empty:{description:"暂无数据"},drawer:{okText:"确定",cancelText:"取消"},popconfirm:{okText:"确定",cancelText:"取消"},modal:{okText:"确定",cancelText:"取消"},pagination:{goto:"前往",page:"页",countPerPage:"条/页",total:"共 {0} 条"},table:{okText:"确定",resetText:"重置"},upload:{start:"开始",cancel:"取消",delete:"删除",retry:"点击重试",buttonText:"点击上传",preview:"预览",drag:"点击或拖拽文件到此处上传",dragHover:"释放文件并开始上传",error:"上传失败"},calendar:zr,datePicker:{view:zr.view,month:zr.month,week:zr.week,placeholder:{date:"请选择日期",week:"请选择周",month:"请选择月份",year:"请选择年份",quarter:"请选择季度",time:"请选择时间"},rangePlaceholder:{date:["开始日期","结束日期"],week:["开始周","结束周"],month:["开始月份","结束月份"],year:["开始年份","结束年份"],quarter:["开始季度","结束季度"],time:["开始时间","结束时间"]},selectTime:"选择时间",today:"今天",now:"此刻",ok:"确定"},image:{loading:"加载中"},imagePreview:{fullScreen:"全屏",rotateRight:"向右旋转",rotateLeft:"向左旋转",zoomIn:"放大",zoomOut:"缩小",originalSize:"原始尺寸"},typography:{copied:"已复制",copy:"复制",expand:"展开",collapse:"折叠",edit:"编辑"},form:{validateMessages:{required:"#{field} 是必填项",type:{string:"#{field} 不是合法的文本类型",number:"#{field} 不是合法的数字类型",boolean:"#{field} 不是合法的布尔类型",array:"#{field} 不是合法的数组类型",object:"#{field} 不是合法的对象类型",url:"#{field} 不是合法的 url 地址",email:"#{field} 不是合法的邮箱地址",ip:"#{field} 不是合法的 IP 地址"},number:{min:"`#{value}` 小于最小值 `#{min}`",max:"`#{value}` 大于最大值 `#{max}`",equal:"`#{value}` 不等于 `#{equal}`",range:"`#{value}` 不在 `#{min} ~ #{max}` 范围内",positive:"`#{value}` 不是正数",negative:"`#{value}` 不是负数"},array:{length:"`#{field}` 个数不等于 #{length}",minLength:"`#{field}` 个数最少为 #{minLength}",maxLength:"`#{field}` 个数最多为 #{maxLength}",includes:"#{field} 不包含 #{includes}",deepEqual:"#{field} 不等于 #{deepEqual}",empty:"`#{field}` 不是空数组"},string:{minLength:"字符数最少为 #{minLength}",maxLength:"字符数最多为 #{maxLength}",length:"字符数必须是 #{length}",match:"`#{value}` 不符合模式 #{pattern}",uppercase:"`#{value}` 必须全大写",lowercase:"`#{value}` 必须全小写"},object:{deepEqual:"`#{field}` 不等于期望值",hasKeys:"`#{field}` 不包含必须字段",empty:"`#{field}` 不是对象"},boolean:{true:"期望是 `true`",false:"期望是 `false`"}}}},_v=V("zh-CN"),Tv=on({"zh-CN":Ev}),ld=()=>{const e=Ae(Ut,void 0),n=E(()=>{var i;return(i=e==null?void 0:e.locale)!=null?i:Tv[_v.value]}),t=E(()=>n.value.locale);return{i18nMessage:n,locale:t,t:(i,...s)=>{const o=i.split(".");let a=n.value;for(const l of o){if(!a[l])return i;a=a[l]}return zt(a)&&s.length>0?a.replace(/{(\d+)}/g,(l,c)=>{var u;return(u=s[c])!=null?u:l}):a}}};var kv=Object.defineProperty,Ov=Object.defineProperties,Pv=Object.getOwnPropertyDescriptors,El=Object.getOwnPropertySymbols,Cv=Object.prototype.hasOwnProperty,Rv=Object.prototype.propertyIsEnumerable,_l=(e,n,t)=>n in e?kv(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Lv=(e,n)=>{for(var t in n||(n={}))Cv.call(n,t)&&_l(e,t,n[t]);if(El)for(var t of El(n))Rv.call(n,t)&&_l(e,t,n[t]);return e},xv=(e,n)=>Ov(e,Pv(n));const wv="A",Iv="arco",Ls="$arco",nn=e=>{var n;return(n=e==null?void 0:e.componentPrefix)!=null?n:wv},tn=(e,n)=>{var t;n&&n.classPrefix&&(e.config.globalProperties[Ls]=xv(Lv({},(t=e.config.globalProperties[Ls])!=null?t:{}),{classPrefix:n.classPrefix}))},te=e=>{var n,t,r;const i=Ai(),s=Ae(Ut,void 0),o=(r=(t=s==null?void 0:s.prefixCls)!=null?t:(n=i==null?void 0:i.appContext.config.globalProperties[Ls])==null?void 0:n.classPrefix)!=null?r:Iv;return e?`${o}-${e}`:o};var cd=function(){if(typeof Map<"u")return Map;function e(n,t){var r=-1;return n.some(function(i,s){return i[0]===t?(r=s,!0):!1}),r}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(t){var r=e(this.__entries__,t),i=this.__entries__[r];return i&&i[1]},n.prototype.set=function(t,r){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=r:this.__entries__.push([t,r])},n.prototype.delete=function(t){var r=this.__entries__,i=e(r,t);~i&&r.splice(i,1)},n.prototype.has=function(t){return!!~e(this.__entries__,t)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];t.call(r,o[1],o[0])}},n}()}(),xs=typeof window<"u"&&typeof document<"u"&&window.document===document,mi=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Av=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(mi):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Bv=2;function Nv(e,n){var t=!1,r=!1,i=0;function s(){t&&(t=!1,e()),r&&a()}function o(){Av(s)}function a(){var l=Date.now();if(t){if(l-i<Bv)return;r=!0}else t=!0,r=!1,setTimeout(o,n);i=l}return a}var Dv=20,Hv=["top","right","bottom","left","width","height","size","weight"],$v=typeof MutationObserver<"u",Mv=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Nv(this.refresh.bind(this),Dv)}return e.prototype.addObserver=function(n){~this.observers_.indexOf(n)||this.observers_.push(n),this.connected_||this.connect_()},e.prototype.removeObserver=function(n){var t=this.observers_,r=t.indexOf(n);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var n=this.updateObservers_();n&&this.refresh()},e.prototype.updateObservers_=function(){var n=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return n.forEach(function(t){return t.broadcastActive()}),n.length>0},e.prototype.connect_=function(){!xs||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),$v?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!xs||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(n){var t=n.propertyName,r=t===void 0?"":t,i=Hv.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ud=function(e,n){for(var t=0,r=Object.keys(n);t<r.length;t++){var i=r[t];Object.defineProperty(e,i,{value:n[i],enumerable:!1,writable:!1,configurable:!0})}return e},Ht=function(e){var n=e&&e.ownerDocument&&e.ownerDocument.defaultView;return n||mi},dd=$i(0,0,0,0);function vi(e){return parseFloat(e)||0}function Tl(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return n.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+vi(s)},0)}function Fv(e){for(var n=["top","right","bottom","left"],t={},r=0,i=n;r<i.length;r++){var s=i[r],o=e["padding-"+s];t[s]=vi(o)}return t}function jv(e){var n=e.getBBox();return $i(0,0,n.width,n.height)}function Kv(e){var n=e.clientWidth,t=e.clientHeight;if(!n&&!t)return dd;var r=Ht(e).getComputedStyle(e),i=Fv(r),s=i.left+i.right,o=i.top+i.bottom,a=vi(r.width),l=vi(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==n&&(a-=Tl(r,"left","right")+s),Math.round(l+o)!==t&&(l-=Tl(r,"top","bottom")+o)),!zv(e)){var c=Math.round(a+s)-n,u=Math.round(l+o)-t;Math.abs(c)!==1&&(a-=c),Math.abs(u)!==1&&(l-=u)}return $i(i.left,i.top,a,l)}var Wv=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Ht(e).SVGGraphicsElement}:function(e){return e instanceof Ht(e).SVGElement&&typeof e.getBBox=="function"}}();function zv(e){return e===Ht(e).document.documentElement}function Uv(e){return xs?Wv(e)?jv(e):Kv(e):dd}function Vv(e){var n=e.x,t=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return ud(o,{x:n,y:t,width:r,height:i,top:t,right:n+r,bottom:i+t,left:n}),o}function $i(e,n,t,r){return{x:e,y:n,width:t,height:r}}var Gv=function(){function e(n){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=$i(0,0,0,0),this.target=n}return e.prototype.isActive=function(){var n=Uv(this.target);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var n=this.contentRect_;return this.broadcastWidth=n.width,this.broadcastHeight=n.height,n},e}(),qv=function(){function e(n,t){var r=Vv(t);ud(this,{target:n,contentRect:r})}return e}(),Jv=function(){function e(n,t,r){if(this.activeObservations_=[],this.observations_=new cd,typeof n!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=n,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof Ht(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)||(t.set(n,new Gv(n)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof Ht(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)&&(t.delete(n),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var n=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&n.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var n=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new qv(r.target,r.broadcastRect())});this.callback_.call(n,t,n),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),pd=typeof WeakMap<"u"?new WeakMap:new cd,fd=function(){function e(n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=Mv.getInstance(),r=new Jv(n,t,this);pd.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){fd.prototype[e]=function(){var n;return(n=pd.get(this))[e].apply(n,arguments)}});var pa=function(){return typeof mi.ResizeObserver<"u"?mi.ResizeObserver:fd}(),kl;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(kl||(kl={}));var Ol;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(Ol||(Ol={}));const Mi=e=>!!(e&&e.shapeFlag&1),Fi=(e,n)=>!!(e&&e.shapeFlag&6),Zv=(e,n)=>!!(e&&e.shapeFlag&8),fa=(e,n)=>!!(e&&e.shapeFlag&16),md=(e,n)=>!!(e&&e.shapeFlag&32),vr=e=>{var n,t;if(e)for(const r of e){if(Mi(r)||Fi(r))return r;if(fa(r,r.children)){const i=vr(r.children);if(i)return i}else if(md(r,r.children)){const i=(t=(n=r.children).default)==null?void 0:t.call(n);if(i){const s=vr(i);if(s)return s}}else if(Di(r)){const i=vr(r);if(i)return i}}},Yv=e=>{if(!e)return!0;for(const n of e)if(n.children)return!1;return!0},vd=(e,n)=>{if(e&&e.length>0)for(let t=0;t<e.length;t++){const r=e[t];if(Mi(r)||Fi(r)){const s=fn(n)?n(r):n;return e[t]=vn(r,s,!0),!0}const i=gd(r);if(i&&i.length>0&&vd(i,n))return!0}return!1},gd=e=>{if(fa(e,e.children))return e.children;if(Di(e))return e},hd=e=>{var n,t;if(Mi(e))return e.el;if(Fi(e)){if(((n=e.el)==null?void 0:n.nodeType)===1)return e.el;if((t=e.component)!=null&&t.subTree){const r=hd(e.component.subTree);if(r)return r}}else{const r=gd(e);return bd(r)}},bd=e=>{if(e&&e.length>0)for(const n of e){const t=hd(n);if(t)return t}},Qr=(e,n=!1)=>{var t,r;const i=[];for(const s of e??[])Mi(s)||Fi(s)||n&&Zv(s,s.children)?i.push(s):fa(s,s.children)?i.push(...Qr(s.children,n)):md(s,s.children)?i.push(...Qr((r=(t=s.children).default)==null?void 0:r.call(t),n)):Di(s)&&i.push(...Qr(s,n));return i},Ot=e=>{if(e)return fn(e)?e:()=>e};var yd=G({name:"ResizeObserver",emits:["resize"],setup(e,{emit:n,slots:t}){let r;const i=V(),s=E(()=>Sv(i.value)?i.value.$el:i.value),o=l=>{l&&(r=new pa(c=>{const u=c[0];n("resize",u)}),r.observe(l))},a=()=>{r&&(r.disconnect(),r=null)};return Ce(s,l=>{r&&a(),l&&o(l)}),ze(()=>{s.value&&o(s.value)}),mt(()=>{a()}),()=>{var l,c;const u=vr((c=(l=t.default)==null?void 0:l.call(t))!=null?c:[]);return u?vn(u,{ref:i},!0):null}}});const Sd=typeof window>"u"?global:window,Xv=Sd.requestAnimationFrame,Pl=Sd.cancelAnimationFrame;function Cl(e){let n=0;const t=(...r)=>{n&&Pl(n),n=Xv(()=>{e(...r),n=0})};return t.cancel=()=>{Pl(n),n=0},t}const ma=()=>{},va=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),On=(()=>va?ma:(e,n,t,r=!1)=>{e.addEventListener(n,t,r)})(),Xn=(()=>va?ma:(e,n,t,r=!1)=>{e.removeEventListener(n,t,r)})(),Ed=e=>{const n=document.createElement("div");return n.setAttribute("class",`arco-overlay arco-overlay-${e}`),n},Qv=(e,n)=>{var t;return va?ma():(t=(n??document).querySelector(e))!=null?t:void 0},Rl=(e,n)=>{if(zt(e)){const t=e[0]==="#"?`[id='${e.slice(1)}']`:e;return Qv(t,n)}return e},eg=e=>e.tagName==="BODY"?document.documentElement.scrollHeight>window.innerHeight:e.scrollHeight>e.offsetHeight,ng=e=>e.tagName==="BODY"?window.innerWidth-(document.documentElement.offsetWidth||document.body.offsetWidth):e.offsetWidth-e.clientWidth;var ae=(e,n)=>{for(const[t,r]of n)e[t]=r;return e};const tg=G({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:te("icon-hover")}}});function rg(e,n,t,r,i,s){return L(),q("span",{class:K([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[ce(e.$slots,"default")],2)}var gt=ae(tg,[["render",rg]]);const ig=G({name:"IconClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-close`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),og=["stroke-width","stroke-linecap","stroke-linejoin"],sg=Q("path",{d:"M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"},null,-1),ag=[sg];function lg(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},ag,14,og)}var so=ae(ig,[["render",lg]]);const ji=Object.assign(so,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+so.name,so)}}),cg=G({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-info-circle-fill`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),ug=["stroke-width","stroke-linecap","stroke-linejoin"],dg=Q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),pg=[dg];function fg(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},pg,14,ug)}var ao=ae(cg,[["render",fg]]);const mg=Object.assign(ao,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ao.name,ao)}}),vg=G({name:"IconCheckCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-check-circle-fill`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),gg=["stroke-width","stroke-linecap","stroke-linejoin"],hg=Q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",fill:"currentColor",stroke:"none"},null,-1),bg=[hg];function yg(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},bg,14,gg)}var lo=ae(vg,[["render",yg]]);const _d=Object.assign(lo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+lo.name,lo)}}),Sg=G({name:"IconExclamationCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-exclamation-circle-fill`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Eg=["stroke-width","stroke-linecap","stroke-linejoin"],_g=Q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",fill:"currentColor",stroke:"none"},null,-1),Tg=[_g];function kg(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Tg,14,Eg)}var co=ae(Sg,[["render",kg]]);const Td=Object.assign(co,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+co.name,co)}}),Og=G({name:"IconCloseCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-close-circle-fill`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Pg=["stroke-width","stroke-linecap","stroke-linejoin"],Cg=Q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",fill:"currentColor",stroke:"none"},null,-1),Rg=[Cg];function Lg(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Rg,14,Pg)}var uo=ae(Og,[["render",Lg]]);const kd=Object.assign(uo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+uo.name,uo)}}),xg=["info","success","warning","error"],gi=["onFocus","onFocusin","onFocusout","onBlur","onChange","onBeforeinput","onInput","onReset","onSubmit","onInvalid","onKeydown","onKeypress","onKeyup","onCopy","onCut","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onSelect","autocomplete","autofocus","maxlength","minlength","name","pattern","readonly","required"],wg=G({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-loading`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Ig=["stroke-width","stroke-linecap","stroke-linejoin"],Ag=Q("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),Bg=[Ag];function Ng(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Bg,14,Ig)}var po=ae(wg,[["render",Ng]]);const Vt=Object.assign(po,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+po.name,po)}}),Dg=G({name:"FeedbackIcon",components:{IconLoading:Vt,IconCheckCircleFill:_d,IconExclamationCircleFill:Td,IconCloseCircleFill:kd},props:{type:{type:String}},setup(e){const n=te("feedback-icon");return{cls:E(()=>[n,`${n}-status-${e.type}`])}}});function Hg(e,n,t,r,i,s){const o=re("icon-loading"),a=re("icon-check-circle-fill"),l=re("icon-exclamation-circle-fill"),c=re("icon-close-circle-fill");return L(),q("span",{class:K(e.cls)},[e.type==="validating"?(L(),fe(o,{key:0})):e.type==="success"?(L(),fe(a,{key:1})):e.type==="warning"?(L(),fe(l,{key:2})):e.type==="error"?(L(),fe(c,{key:3})):Pe("v-if",!0)],2)}var $g=ae(Dg,[["render",Hg]]);const Mg={key:"Enter",code:"Enter"};var Fg=Object.defineProperty,Ll=Object.getOwnPropertySymbols,jg=Object.prototype.hasOwnProperty,Kg=Object.prototype.propertyIsEnumerable,xl=(e,n,t)=>n in e?Fg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Wg=(e,n)=>{for(var t in n||(n={}))jg.call(n,t)&&xl(e,t,n[t]);if(Ll)for(var t of Ll(n))Kg.call(n,t)&&xl(e,t,n[t]);return e};const Ki=(e,n)=>{const t=Wg({},e);for(const r of n)r in t&&delete t[r];return t};function Od(e,n){const t={};return n.forEach(r=>{const i=r;r in e&&(t[i]=e[i])}),t}const zg=Symbol("ArcoFormItemContext"),Br=({size:e,disabled:n,error:t,uninject:r}={})=>{const i=r?{}:Ae(zg,{}),s=E(()=>{var u;return(u=e==null?void 0:e.value)!=null?u:i.size}),o=E(()=>(n==null?void 0:n.value)||i.disabled),a=E(()=>(t==null?void 0:t.value)||i.error),l=vs(i,"feedback"),c=vs(i,"eventHandlers");return{formItemCtx:i,mergedSize:s,mergedDisabled:o,mergedError:a,feedback:l,eventHandlers:c}},Wi=(e,{defaultValue:n="medium"}={})=>{const t=Ae(Ut,void 0);return{mergedSize:E(()=>{var i,s;return(s=(i=e==null?void 0:e.value)!=null?i:t==null?void 0:t.size)!=null?s:n})}};function Pd(e){const n=V();function t(){if(!e.value)return;const{selectionStart:i,selectionEnd:s,value:o}=e.value;if(i==null||s==null)return;const a=o.slice(0,Math.max(0,i)),l=o.slice(Math.max(0,s));n.value={selectionStart:i,selectionEnd:s,value:o,beforeTxt:a,afterTxt:l}}function r(){if(!e.value||!n.value)return;const{value:i}=e.value,{beforeTxt:s,afterTxt:o,selectionStart:a}=n.value;if(!s||!o||!a)return;let l=i.length;if(i.endsWith(o))l=i.length-o.length;else if(i.startsWith(s))l=s.length;else{const c=s[a-1],u=i.indexOf(c,a-1);u!==-1&&(l=u+1)}e.value.setSelectionRange(l,l)}return[t,r]}var Ug=Object.defineProperty,wl=Object.getOwnPropertySymbols,Vg=Object.prototype.hasOwnProperty,Gg=Object.prototype.propertyIsEnumerable,Il=(e,n,t)=>n in e?Ug(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Al=(e,n)=>{for(var t in n||(n={}))Vg.call(n,t)&&Il(e,t,n[t]);if(wl)for(var t of wl(n))Gg.call(n,t)&&Il(e,t,n[t]);return e},gr=G({name:"Input",inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},size:{type:String},allowClear:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},placeholder:String,maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},wordLength:{type:Function},wordSlice:{type:Function},inputAttrs:{type:Object},type:{type:String,default:"text"}},emits:{"update:modelValue":e=>!0,input:(e,n)=>!0,change:(e,n)=>!0,pressEnter:e=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{size:i,disabled:s,error:o,modelValue:a}=Ge(e),l=te("input"),c=V(),{mergedSize:u,mergedDisabled:p,mergedError:f,feedback:g,eventHandlers:O}=Br({size:i,disabled:s,error:o}),{mergedSize:_}=Wi(u),[x,k]=Pd(c),y=V(e.defaultValue),C=E(()=>{var d;return(d=e.modelValue)!=null?d:y.value});Ce(a,d=>{(Nn(d)||Hi(d))&&(y.value="")});let h=C.value;const P=V(!1),N=E(()=>e.allowClear&&!p.value&&!!C.value),$=V(!1),B=V(""),w=d=>{var v;return fn(e.wordLength)?e.wordLength(d):(v=d.length)!=null?v:0},H=E(()=>w(C.value)),X=E(()=>f.value||!!(qn(e.maxLength)&&e.maxLength.errorOnly&&H.value>U.value)),j=E(()=>qn(e.maxLength)&&!!e.maxLength.errorOnly),U=E(()=>qn(e.maxLength)?e.maxLength.length:e.maxLength),ue=E(()=>{const d=w("a");return Math.floor(U.value/d)}),pe=d=>{var v,S;U.value&&!j.value&&w(d)>U.value&&(d=(S=(v=e.wordSlice)==null?void 0:v.call(e,d,U.value))!=null?S:d.slice(0,ue.value)),y.value=d,n("update:modelValue",d)},de=d=>{c.value&&d.target!==c.value&&(d.preventDefault(),c.value.focus())},me=(d,v)=>{var S,T;d!==h&&(h=d,n("change",d,v),(T=(S=O.value)==null?void 0:S.onChange)==null||T.call(S,v))},le=d=>{var v,S;P.value=!0,h=C.value,n("focus",d),(S=(v=O.value)==null?void 0:v.onFocus)==null||S.call(v,d)},De=d=>{var v,S;P.value=!1,me(C.value,d),n("blur",d),(S=(v=O.value)==null?void 0:v.onBlur)==null||S.call(v,d)},je=d=>{var v,S,T;const{value:I,selectionStart:Z,selectionEnd:M}=d.target;if(d.type==="compositionend"){if($.value=!1,B.value="",U.value&&!j.value&&H.value>=U.value&&w(I)>U.value&&Z===M){$e();return}pe(I),n("input",I,d),(S=(v=O.value)==null?void 0:v.onInput)==null||S.call(v,d),$e()}else $.value=!0,B.value=C.value+((T=d.data)!=null?T:"")},$e=()=>{x(),mn(()=>{c.value&&C.value!==c.value.value&&(c.value.value=C.value,k())})},Me=d=>{var v,S;const{value:T}=d.target;if(!$.value){if(U.value&&!j.value&&H.value>=U.value&&w(T)>U.value&&d.inputType==="insertText"){$e();return}pe(T),n("input",T,d),(S=(v=O.value)==null?void 0:v.onInput)==null||S.call(v,d),$e()}},Ye=d=>{pe(""),me("",d),n("clear",d)},Xe=d=>{const v=d.key||d.code;!$.value&&v===Mg.key&&(me(C.value,d),n("pressEnter",d))},sn=E(()=>[`${l}-outer`,`${l}-outer-size-${_.value}`,{[`${l}-outer-has-suffix`]:!!t.suffix,[`${l}-outer-disabled`]:p.value}]),ke=E(()=>[`${l}-wrapper`,{[`${l}-error`]:X.value,[`${l}-disabled`]:p.value,[`${l}-focus`]:P.value}]),R=E(()=>[l,`${l}-size-${_.value}`]),J=E(()=>Ki(r,gi)),F=E(()=>Od(r,gi)),ee=E(()=>{const d=Al(Al({},F.value),e.inputAttrs);return X.value&&(d["aria-invalid"]=!0),d}),ye=d=>{var v;return b("span",en({class:ke.value,onMousedown:de},d?void 0:J.value),[t.prefix&&b("span",{class:`${l}-prefix`},[t.prefix()]),b("input",en(ee.value,{ref:c,class:R.value,value:C.value,type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:p.value,onInput:Me,onKeydown:Xe,onFocus:le,onBlur:De,onCompositionstart:je,onCompositionupdate:je,onCompositionend:je}),null),N.value&&b(gt,{prefix:l,class:`${l}-clear-btn`,onClick:Ye},{default:()=>[b(ji,null,null)]}),(t.suffix||!!e.maxLength&&e.showWordLimit||!!g.value)&&b("span",{class:[`${l}-suffix`,{[`${l}-suffix-has-feedback`]:g.value}]},[!!e.maxLength&&e.showWordLimit&&b("span",{class:`${l}-word-limit`},[H.value,Ke("/"),U.value]),(v=t.suffix)==null?void 0:v.call(t),!!g.value&&b($g,{type:g.value},null)])])};return{inputRef:c,render:()=>t.prepend||t.append?b("span",en({class:sn.value},J.value),[t.prepend&&b("span",{class:`${l}-prepend`},[t.prepend()]),ye(!0),t.append&&b("span",{class:`${l}-append`},[t.append()])]):ye()}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}});const qg=G({name:"IconSearch",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-search`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Jg=["stroke-width","stroke-linecap","stroke-linejoin"],Zg=Q("path",{d:"M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"},null,-1),Yg=[Zg];function Xg(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Yg,14,Jg)}var fo=ae(qg,[["render",Xg]]);const Bl=Object.assign(fo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+fo.name,fo)}}),Cd=Symbol("ArcoButtonGroup"),Qg=G({name:"Button",components:{IconLoading:Vt},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:n}){const{size:t,disabled:r}=Ge(e),i=te("btn"),s=Ae(Cd,void 0),o=E(()=>{var g;return(g=t.value)!=null?g:s==null?void 0:s.size}),a=E(()=>!!(r.value||s!=null&&s.disabled)),{mergedSize:l,mergedDisabled:c}=Br({size:o,disabled:a}),{mergedSize:u}=Wi(l),p=E(()=>{var g,O,_,x,k,y;return[i,`${i}-${(O=(g=e.type)!=null?g:s==null?void 0:s.type)!=null?O:"secondary"}`,`${i}-shape-${(x=(_=e.shape)!=null?_:s==null?void 0:s.shape)!=null?x:"square"}`,`${i}-size-${u.value}`,`${i}-status-${(y=(k=e.status)!=null?k:s==null?void 0:s.status)!=null?y:"normal"}`,{[`${i}-long`]:e.long,[`${i}-loading`]:e.loading,[`${i}-disabled`]:c.value,[`${i}-link`]:zt(e.href)}]});return{prefixCls:i,cls:p,mergedDisabled:c,handleClick:g=>{if(e.disabled||e.loading){g.preventDefault();return}n("click",g)}}}}),eh=["href"],nh=["type","disabled"];function th(e,n,t,r,i,s){const o=re("icon-loading");return e.href?(L(),q("a",{key:0,class:K([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:n[0]||(n[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(L(),q("span",{key:0,class:K(`${e.prefixCls}-icon`)},[e.loading?(L(),fe(o,{key:0,spin:"true"})):ce(e.$slots,"icon",{key:1})],2)):Pe("v-if",!0),ce(e.$slots,"default")],10,eh)):(L(),q("button",{key:1,class:K([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:n[1]||(n[1]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(L(),q("span",{key:0,class:K(`${e.prefixCls}-icon`)},[e.loading?(L(),fe(o,{key:0,spin:!0})):ce(e.$slots,"icon",{key:1})],2)):Pe("v-if",!0),ce(e.$slots,"default")],10,nh))}var mo=ae(Qg,[["render",th]]);const rh=G({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:n,size:t,status:r,disabled:i,shape:s}=Ge(e),o=te("btn-group");return Bn(Cd,on({type:n,size:t,shape:s,status:r,disabled:i})),{prefixCls:o}}});function ih(e,n,t,r,i,s){return L(),q("div",{class:K(e.prefixCls)},[ce(e.$slots,"default")],2)}var ei=ae(rh,[["render",ih]]);const ht=Object.assign(mo,{Group:ei,install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+mo.name,mo),e.component(t+ei.name,ei)}});var vo=G({name:"InputSearch",props:{searchButton:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String},buttonText:{type:String},buttonProps:{type:Object}},emits:{search:(e,n)=>!0},setup(e,{emit:n,slots:t}){const{size:r}=Ge(e),i=te("input-search"),{mergedSize:s}=Wi(r),o=V(),a=p=>{o.value.inputRef&&n("search",o.value.inputRef.value,p)},l=()=>{var p;return b(Be,null,[e.loading?b(Vt,null,null):b(gt,{onClick:a},{default:()=>[b(Bl,null,null)]}),(p=t.suffix)==null?void 0:p.call(t)])},c=()=>{var p;let f={};return e.buttonText||t["button-default"]||t["button-icon"]?f={default:(p=t["button-default"])!=null?p:e.buttonText?()=>e.buttonText:void 0,icon:t["button-icon"]}:f={icon:()=>b(Bl,null,null)},b(ht,en({type:"primary",class:`${i}-btn`,disabled:e.disabled,size:s.value,loading:e.loading},e.buttonProps,{onClick:a}),f)};return{inputRef:o,render:()=>b(gr,{ref:o,class:i,size:s.value,disabled:e.disabled},{prepend:t.prepend,prefix:t.prefix,suffix:e.searchButton?t.suffix:l,append:e.searchButton?c:t.append})}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}});const oh=G({name:"IconEye",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-eye`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),sh=["stroke-width","stroke-linecap","stroke-linejoin"],ah=Q("path",{"clip-rule":"evenodd",d:"M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"},null,-1),lh=Q("path",{d:"M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"},null,-1),ch=[ah,lh];function uh(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},ch,14,sh)}var go=ae(oh,[["render",uh]]);const Rd=Object.assign(go,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+go.name,go)}}),dh=G({name:"IconEyeInvisible",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-eye-invisible`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),ph=["stroke-width","stroke-linecap","stroke-linejoin"],fh=Q("path",{d:"M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14"},null,-1),mh=Q("path",{d:"M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294"},null,-1),vh=[fh,mh];function gh(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},vh,14,ph)}var ho=ae(dh,[["render",gh]]);const hh=Object.assign(ho,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ho.name,ho)}}),bh=G({name:"InputPassword",components:{IconEye:Rd,IconEyeInvisible:hh,AIconHover:gt,AInput:gr},props:{invisibleButton:{type:Boolean,default:!0}},setup(){const e=V(),n=V(!0);return{inputRef:e,invisible:n,handleInvisible:()=>{n.value=!n.value}}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}}});function yh(e,n,t,r,i,s){const o=re("icon-eye"),a=re("icon-eye-invisible"),l=re("a-icon-hover"),c=re("a-input");return L(),fe(c,{ref:"inputRef",type:e.invisible?"password":"text"},di({_:2},[e.$slots.prepend?{name:"prepend",fn:z(()=>[ce(e.$slots,"prepend")])}:void 0,e.$slots.prefix?{name:"prefix",fn:z(()=>[ce(e.$slots,"prefix")])}:void 0,e.invisibleButton||e.$slots.suffix?{name:"suffix",fn:z(()=>[e.invisibleButton?(L(),fe(l,{key:0,onClick:e.handleInvisible,onMousedown:n[0]||(n[0]=Os(()=>{},["prevent"])),onMouseup:n[1]||(n[1]=Os(()=>{},["prevent"]))},{default:z(()=>[e.invisible?(L(),fe(a,{key:1})):(L(),fe(o,{key:0}))]),_:1},8,["onClick"])):Pe("v-if",!0),ce(e.$slots,"suffix")])}:void 0,e.$slots.append?{name:"append",fn:z(()=>[ce(e.$slots,"append")])}:void 0]),1032,["type"])}var bo=ae(bh,[["render",yh]]);const Sh=G({name:"InputGroup",setup(){return{prefixCls:te("input-group")}}});function Eh(e,n,t,r,i,s){return L(),q("div",{class:K(e.prefixCls)},[ce(e.$slots,"default")],2)}var yo=ae(Sh,[["render",Eh]]);const _h=Object.assign(gr,{Search:vo,Password:bo,Group:yo,install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+gr.name,gr),e.component(t+yo.name,yo),e.component(t+vo.name,vo),e.component(t+bo.name,bo)}});var Th=Object.defineProperty,Nl=Object.getOwnPropertySymbols,kh=Object.prototype.hasOwnProperty,Oh=Object.prototype.propertyIsEnumerable,Dl=(e,n,t)=>n in e?Th(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ar=(e,n)=>{for(var t in n||(n={}))kh.call(n,t)&&Dl(e,t,n[t]);if(Nl)for(var t of Nl(n))Oh.call(n,t)&&Dl(e,t,n[t]);return e};const Ph=()=>{const{body:e}=document,n=document.documentElement;let t;try{t=(window.top||window.self||window).document.body}catch{}return{height:Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight,(t==null?void 0:t.scrollHeight)||0,(t==null?void 0:t.clientHeight)||0),width:Math.max(e.scrollWidth,e.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth,(t==null?void 0:t.scrollWidth)||0,(t==null?void 0:t.clientWidth)||0)}},Ch=()=>{const{height:e,width:n}=Ph();return{width:Math.min(n,window.innerWidth),height:Math.min(e,window.innerHeight)}},Hl=(e,n)=>{var t,r;const i=e.getBoundingClientRect();return{top:i.top,bottom:i.bottom,left:i.left,right:i.right,scrollTop:i.top-n.top,scrollBottom:i.bottom-n.top,scrollLeft:i.left-n.left,scrollRight:i.right-n.left,width:(t=e.offsetWidth)!=null?t:e.clientWidth,height:(r=e.offsetHeight)!=null?r:e.clientHeight}},Rh=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},Ur=(e,n)=>{switch(n){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},Lh=(e,n,{containerRect:t,triggerRect:r,popupRect:i,offset:s,translate:o})=>{const a=Rh(e),l=Ch(),c={top:t.top+n.top,bottom:l.height-(t.top+n.top+i.height),left:t.left+n.left,right:l.width-(t.left+n.left+i.width)};let u=e;if(a==="top"&&c.top<0)if(r.top>i.height)n.top=-t.top;else{const p=lr("bottom",r,i,{offset:s,translate:o});l.height-(t.top+p.top+i.height)>0&&(u=Ur(e,"bottom"),n.top=p.top)}if(a==="bottom"&&c.bottom<0)if(l.height-r.bottom>i.height)n.top=-t.top+(l.height-i.height);else{const p=lr("top",r,i,{offset:s,translate:o});t.top+p.top>0&&(u=Ur(e,"top"),n.top=p.top)}if(a==="left"&&c.left<0)if(r.left>i.width)n.left=-t.left;else{const p=lr("right",r,i,{offset:s,translate:o});l.width-(t.left+p.left+i.width)>0&&(u=Ur(e,"right"),n.left=p.left)}if(a==="right"&&c.right<0)if(l.width-r.right>i.width)n.left=-t.left+(l.width-i.width);else{const p=lr("left",r,i,{offset:s,translate:o});t.left+p.left>0&&(u=Ur(e,"left"),n.left=p.left)}return(a==="top"||a==="bottom")&&(c.left<0?n.left=-t.left:c.right<0&&(n.left=-t.left+(l.width-i.width))),(a==="left"||a==="right")&&(c.top<0?n.top=-t.top:c.bottom<0&&(n.top=-t.top+(l.height-i.height))),{popupPosition:n,position:u}},lr=(e,n,t,{offset:r=0,translate:i=[0,0]}={})=>{var s;const o=(s=Di(i)?i:i[e])!=null?s:[0,0];switch(e){case"top":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+o[0],top:n.scrollTop-t.height-r+o[1]};case"tl":return{left:n.scrollLeft+o[0],top:n.scrollTop-t.height-r+o[1]};case"tr":return{left:n.scrollRight-t.width+o[0],top:n.scrollTop-t.height-r+o[1]};case"bottom":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+o[0],top:n.scrollBottom+r+o[1]};case"bl":return{left:n.scrollLeft+o[0],top:n.scrollBottom+r+o[1]};case"br":return{left:n.scrollRight-t.width+o[0],top:n.scrollBottom+r+o[1]};case"left":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+o[1]};case"lt":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollTop+o[1]};case"lb":return{left:n.scrollLeft-t.width-r+o[0],top:n.scrollBottom-t.height+o[1]};case"right":return{left:n.scrollRight+r+o[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+o[1]};case"rt":return{left:n.scrollRight+r+o[0],top:n.scrollTop+o[1]};case"rb":return{left:n.scrollRight+r+o[0],top:n.scrollBottom-t.height+o[1]};default:return{left:0,top:0}}},xh=e=>{let n="0";["top","bottom"].includes(e)?n="50%":["left","lt","lb","tr","br"].includes(e)&&(n="100%");let t="0";return["left","right"].includes(e)?t="50%":["top","tl","tr","lt","rt"].includes(e)&&(t="100%"),`${n} ${t}`},wh=(e,n,t,r,{offset:i=0,translate:s=[0,0],customStyle:o={},autoFitPosition:a=!1}={})=>{let l=e,c=lr(e,t,r,{offset:i,translate:s});if(a){const p=Lh(e,c,{containerRect:n,popupRect:r,triggerRect:t,offset:i,translate:s});c=p.popupPosition,l=p.position}return{style:ar({left:`${c.left}px`,top:`${c.top}px`},o),position:l}},Ih=(e,n,t,{customStyle:r={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let s=Math.abs(n.scrollLeft+n.width/2-t.scrollLeft);return s>t.width-8&&(n.width>t.width?s=t.width/2:s=t.width-8),["top","tl","tr"].includes(e)?ar({left:`${s}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},r):ar({left:`${s}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)}let i=Math.abs(n.scrollTop+n.height/2-t.scrollTop);return i>t.height-8&&(n.height>t.height?i=t.height/2:i=t.height-8),["left","lt","lb"].includes(e)?ar({top:`${i}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},r):ar({top:`${i}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)},Ah=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,$l=e=>{var n;const t=[];let r=e;for(;r&&r!==document.documentElement;)Ah(r)&&t.push(r),r=(n=r.parentElement)!=null?n:void 0;return t},Ld=()=>{const e={},n=V(),t=()=>{const r=bd(e.value);r!==n.value&&(n.value=r)};return ze(()=>t()),pt(()=>t()),{children:e,firstElement:n}};var ws=G({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:n,slots:t}){const{children:r,firstElement:i}=Ld();let s;const o=l=>{l&&(s=new pa(c=>{const u=c[0];n("resize",u)}),s.observe(l))},a=()=>{s&&(s.disconnect(),s=null)};return Ce(i,l=>{s&&a(),l&&o(l)}),ft(()=>{s&&a()}),()=>{var l;return r.value=(l=t.default)==null?void 0:l.call(t),r.value}}});function Bh(e,n){const t=V(e[n]);return pt(()=>{const r=e[n];t.value!==r&&(t.value=r)}),t}const Ml=Symbol("ArcoTrigger"),Nh=1e3,Dh=5e3,Hh=1;class $h{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=n=>(n==="message"?Array.from(this.popupStack.message).pop()||Dh:Array.from(this.popupStack.popup).pop()||Nh)+Hh,this.add=n=>{const t=this.getNextZIndex(n);return this.popupStack[n].add(t),n==="dialog"&&this.popupStack.popup.add(t),t},this.delete=(n,t)=>{this.popupStack[t].delete(n),t==="dialog"&&this.popupStack.popup.delete(n)},this.isLastDialog=n=>this.popupStack.dialog.size>1?n===Array.from(this.popupStack.dialog).pop():!0}}const So=new $h;function ga(e,{visible:n,runOnMounted:t}={}){const r=V(0),i=()=>{r.value=So.add(e)},s=()=>{So.delete(r.value,e)},o=()=>e==="dialog"?So.isLastDialog(r.value):!1;return Ce(()=>n==null?void 0:n.value,a=>{a?i():s()},{immediate:!0}),t&&(ze(()=>{i()}),ft(()=>{s()})),{zIndex:Xs(r),open:i,close:s,isLastDialog:o}}const Mh=({elementRef:e,onResize:n})=>{let t;return{createResizeObserver:()=>{e.value&&(t=new pa(s=>{const o=s[0];fn(n)&&n(o)}),t.observe(e.value))},destroyResizeObserver:()=>{t&&(t.disconnect(),t=null)}}};var xd=G({name:"ClientOnly",setup(e,{slots:n}){const t=V(!1);return ze(()=>t.value=!0),()=>{var r;return t.value?(r=n.default)==null?void 0:r.call(n):null}}});const wd=({popupContainer:e,visible:n,defaultContainer:t="body",documentContainer:r})=>{const i=V(e.value),s=V(),o=()=>{const a=Rl(e.value),l=a?e.value:t,c=a??(r?document.documentElement:Rl(t));l!==i.value&&(i.value=l),c!==s.value&&(s.value=c)};return ze(()=>o()),Ce(n,a=>{i.value!==e.value&&a&&o()}),{teleportContainer:i,containerRef:s}};var Fh=Object.defineProperty,jh=Object.defineProperties,Kh=Object.getOwnPropertyDescriptors,Fl=Object.getOwnPropertySymbols,Wh=Object.prototype.hasOwnProperty,zh=Object.prototype.propertyIsEnumerable,jl=(e,n,t)=>n in e?Fh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Uh=(e,n)=>{for(var t in n||(n={}))Wh.call(n,t)&&jl(e,t,n[t]);if(Fl)for(var t of Fl(n))zh.call(n,t)&&jl(e,t,n[t]);return e},Vh=(e,n)=>jh(e,Kh(n));const Gh=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var Eo=G({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1},scrollToClose:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{popupContainer:i}=Ge(e),s=te("trigger"),o=E(()=>Ki(r,Gh)),a=Ae(Ut,void 0),l=E(()=>[].concat(e.trigger)),c=new Set,u=Ae(Ml,void 0),{children:p,firstElement:f}=Ld(),g=V(),O=V(e.defaultPopupVisible),_=V(e.position),x=V({}),k=V({}),y=V({}),C=V(),h=V({top:0,left:0}),P=E(()=>{var A;return(A=e.popupVisible)!=null?A:O.value}),{teleportContainer:N,containerRef:$}=wd({popupContainer:i,visible:P,documentContainer:!0}),{zIndex:B}=ga("popup",{visible:P});let w=0,H=!1,X=!1;const j=()=>{w&&(window.clearTimeout(w),w=0)},U=A=>{if(e.alignPoint){const{pageX:Y,pageY:he}=A;h.value={top:he,left:Y}}},ue=()=>{if(!f.value||!g.value||!$.value)return;const A=$.value.getBoundingClientRect(),Y=e.alignPoint?{top:h.value.top,bottom:h.value.top,left:h.value.left,right:h.value.left,scrollTop:h.value.top,scrollBottom:h.value.top,scrollLeft:h.value.left,scrollRight:h.value.left,width:0,height:0}:Hl(f.value,A),he=()=>Hl(g.value,A),_e=he(),{style:Re,position:Je}=wh(e.position,A,Y,_e,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(k.value={transformOrigin:xh(Je)}),e.autoFitPopupMinWidth?Re.minWidth=`${Y.width}px`:e.autoFitPopupWidth&&(Re.width=`${Y.width}px`),_.value!==Je&&(_.value=Je),x.value=Re,e.showArrow&&mn(()=>{y.value=Ih(Je,Y,he(),{customStyle:e.arrowStyle})})},pe=(A,Y)=>{if(A===P.value&&w===0)return;const he=()=>{O.value=A,n("update:popupVisible",A),n("popupVisibleChange",A),A&&mn(()=>{ue()})};Y?(j(),A!==P.value&&(w=window.setTimeout(he,Y))):he()},de=A=>{var Y;(Y=r.onClick)==null||Y.call(r,A),!(e.disabled||P.value&&!e.clickToClose)&&(l.value.includes("click")?(U(A),pe(!P.value)):l.value.includes("contextMenu")&&P.value&&pe(!1))},me=A=>{var Y;(Y=r.onMouseenter)==null||Y.call(r,A),!(e.disabled||!l.value.includes("hover"))&&(U(A),pe(!0,e.mouseEnterDelay))},le=A=>{u==null||u.onMouseenter(A),me(A)},De=A=>{var Y;(Y=r.onMouseleave)==null||Y.call(r,A),!(e.disabled||!l.value.includes("hover"))&&pe(!1,e.mouseLeaveDelay)},je=A=>{u==null||u.onMouseleave(A),De(A)},$e=A=>{var Y;(Y=r.onFocusin)==null||Y.call(r,A),!(e.disabled||!l.value.includes("focus"))&&pe(!0,e.focusDelay)},Me=A=>{var Y;(Y=r.onFocusout)==null||Y.call(r,A),!(e.disabled||!l.value.includes("focus"))&&e.blurToClose&&pe(!1)},Ye=A=>{var Y;(Y=r.onContextmenu)==null||Y.call(r,A),!(e.disabled||!l.value.includes("contextMenu")||P.value&&!e.clickToClose)&&(U(A),pe(!P.value),A.preventDefault())};Bn(Ml,on({onMouseenter:le,onMouseleave:je,addChildRef:A=>{c.add(A),u==null||u.addChildRef(A)},removeChildRef:A=>{c.delete(A),u==null||u.removeChildRef(A)}}));const ke=()=>{Xn(document.documentElement,"mousedown",F),H=!1},R=Bh(t,"content"),J=E(()=>{var A;return e.hideEmpty&&Yv((A=R.value)==null?void 0:A.call(R))}),F=A=>{var Y,he,_e;if(!((Y=f.value)!=null&&Y.contains(A.target)||(he=g.value)!=null&&he.contains(A.target))){for(const Re of c)if((_e=Re.value)!=null&&_e.contains(A.target))return;ke(),pe(!1)}},ee=Cl(()=>{P.value&&(e.scrollToClose||a!=null&&a.scrollToClose?pe(!1):ue())}),ye=()=>{Xn(window,"scroll",m),X=!1},m=Cl(()=>{pe(!1),ye()}),d=()=>{P.value&&ue()},v=()=>{d(),n("resize")},S=A=>{e.preventFocus&&A.preventDefault()};u==null||u.addChildRef(g);const T=E(()=>P.value?e.openedClass:void 0);let I;Ce(P,A=>{if(e.clickOutsideToClose&&(!A&&H?ke():A&&!H&&(On(document.documentElement,"mousedown",F),H=!0)),(e.scrollToClose||a!=null&&a.scrollToClose)&&(On(window,"scroll",m),X=!0),e.updateAtScroll||a!=null&&a.updateAtScroll){if(A){I=$l(f.value);for(const Y of I)Y.addEventListener("scroll",ee)}else if(I){for(const Y of I)Y.removeEventListener("scroll",ee);I=void 0}}A&&(W.value=!0)}),Ce(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{P.value&&ue()});const{createResizeObserver:Z,destroyResizeObserver:M}=Mh({elementRef:$,onResize:d});ze(()=>{if(Z(),P.value&&(ue(),e.clickOutsideToClose&&!H&&(On(document.documentElement,"mousedown",F),H=!0),e.updateAtScroll||a!=null&&a.updateAtScroll)){I=$l(f.value);for(const A of I)A.addEventListener("scroll",ee)}}),pt(()=>{P.value&&ue()}),Lu(()=>{pe(!1)}),ft(()=>{if(u==null||u.removeChildRef(g),M(),H&&ke(),X&&ye(),I){for(const A of I)A.removeEventListener("scroll",ee);I=void 0}});const W=V(P.value),D=V(!1),ie=()=>{D.value=!0},ne=()=>{D.value=!1,P.value&&n("show")},oe=()=>{D.value=!1,P.value||(W.value=!1,n("hide"))};return()=>{var A,Y;return p.value=(Y=(A=t.default)==null?void 0:A.call(t))!=null?Y:[],vd(p.value,{class:T.value,onClick:de,onMouseenter:me,onMouseleave:De,onFocusin:$e,onFocusout:Me,onContextmenu:Ye}),b(Be,null,[e.autoFixPosition?b(ws,{onResize:v},{default:()=>[p.value]}):p.value,b(xd,null,{default:()=>[b(Ku,{to:N.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||P.value||W.value)&&!J.value&&b(ws,{onResize:d},{default:()=>[b("div",en({ref:g,class:[`${s}-popup`,`${s}-position-${_.value}`],style:Vh(Uh({},x.value),{zIndex:B.value,pointerEvents:D.value?"none":"auto"}),"trigger-placement":_.value,onMouseenter:le,onMouseleave:je,onMousedown:S},o.value),[b(ct,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:ie,onAfterEnter:ne,onBeforeLeave:ie,onAfterLeave:oe},{default:()=>{var he;return[Zr(b("div",{class:`${s}-popup-wrapper`,style:k.value},[b("div",{class:[`${s}-content`,e.contentClass],style:e.contentStyle},[(he=t.content)==null?void 0:he.call(t)]),e.showArrow&&b("div",{ref:C,class:[`${s}-arrow`,e.arrowClass],style:y.value},null)]),[[Xr,P.value]])]}})])]})]})]})])}}});const ha=Object.assign(Eo,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+Eo.name,Eo)}}),qh=G({name:"IconEmpty",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-empty`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Jh=["stroke-width","stroke-linecap","stroke-linejoin"],Zh=Q("path",{d:"M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"},null,-1),Yh=[Zh];function Xh(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Yh,14,Jh)}var _o=ae(qh,[["render",Xh]]);const Qh=Object.assign(_o,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+_o.name,_o)}});var To=G({name:"Empty",props:{description:String,imgSrc:String},setup(e,{slots:n}){const t=te("empty"),{t:r}=ld(),i=Ae(Ut,void 0);return()=>{var s,o,a,l;return i!=null&&i.slots.empty&&!(n.image||e.imgSrc)?i.slots.empty():b("div",{class:t},[b("div",{class:`${t}-image`},[(o=(s=n.image)==null?void 0:s.call(n))!=null?o:e.imgSrc?b("img",{src:e.imgSrc,alt:e.description||"empty"},null):b(Qh,null,null)]),b("div",{class:`${t}-description`},[(l=(a=n.default)==null?void 0:a.call(n))!=null?l:e.description||r("empty.description")])])}}});const eb=Object.assign(To,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+To.name,To)}}),nb=5;var tb=G({name:"DotLoading",props:{size:{type:Number}},setup(e){const n=te("dot-loading");return()=>{const t=e.size?{width:`${e.size}px`,height:`${e.size}px`}:{};return b("div",{class:n,style:{width:e.size?`${e.size*7}px`:void 0,height:e.size?`${e.size}px`:void 0}},[Array(nb).fill(1).map((r,i)=>b("div",{class:`${n}-item`,key:i,style:t},null))])}}}),ko=G({name:"Spin",props:{size:{type:Number},loading:Boolean,dot:Boolean,tip:String},setup(e,{slots:n}){const t=te("spin"),r=Ae(Ut,void 0),i=E(()=>[t,{[`${t}-loading`]:e.loading,[`${t}-with-tip`]:e.tip&&!n.default}]),s=()=>{if(n.icon){const a=vr(n.icon());if(a)return vn(a,{spin:!0})}return n.element?n.element():e.dot?b(tb,{size:e.size},null):r!=null&&r.slots.loading?r.slots.loading():b(Vt,{spin:!0,size:e.size},null)},o=()=>{const a=e.size?{fontSize:`${e.size}px`}:void 0;return b(Be,null,[b("div",{class:`${t}-icon`,style:a},[s()]),e.tip&&b("div",{class:`${t}-tip`},[e.tip])])};return()=>b("div",{class:i.value},[n.default?b(Be,null,[n.default(),e.loading&&b("div",{class:`${t}-mask`},[b("div",{class:`${t}-mask-icon`},[o()])])]):o()])}});const Kl=Object.assign(ko,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+ko.name,ko)}}),rb=G({name:"Thumb",props:{data:{type:Object},direction:{type:String,default:"horizontal"},alwaysShow:{type:Boolean,default:!1},both:{type:Boolean,default:!1}},emits:["scroll"],setup(e,{emit:n}){const t=te("scrollbar"),r=V(!1),i=V(),s=V(),o=E(()=>e.direction==="horizontal"?{size:"width",direction:"left",offset:"offsetWidth",client:"clientX"}:{size:"height",direction:"top",offset:"offsetHeight",client:"clientY"}),a=V(0),l=V(!1),c=V(0),u=E(()=>{var y,C;return{[o.value.size]:`${(C=(y=e.data)==null?void 0:y.thumbSize)!=null?C:0}px`,[o.value.direction]:`${a.value}px`}}),p=y=>{y.preventDefault(),s.value&&(c.value=y[o.value.client]-s.value.getBoundingClientRect()[o.value.direction],l.value=!0,On(window,"mousemove",O),On(window,"mouseup",_),On(window,"contextmenu",_))},f=y=>{var C,h,P,N;if(y.preventDefault(),s.value){const $=g(y[o.value.client]>s.value.getBoundingClientRect()[o.value.direction]?a.value+((h=(C=e.data)==null?void 0:C.thumbSize)!=null?h:0):a.value-((N=(P=e.data)==null?void 0:P.thumbSize)!=null?N:0));$!==a.value&&(a.value=$,n("scroll",$))}},g=y=>y<0?0:e.data&&y>e.data.max?e.data.max:y,O=y=>{if(i.value&&s.value){const C=g(y[o.value.client]-i.value.getBoundingClientRect()[o.value.direction]-c.value);C!==a.value&&(a.value=C,n("scroll",C))}},_=()=>{l.value=!1,Xn(window,"mousemove",O),Xn(window,"mouseup",_)},x=y=>{l.value||(y=g(y),y!==a.value&&(a.value=y))},k=E(()=>[`${t}-thumb`,`${t}-thumb-direction-${e.direction}`,{[`${t}-thumb-dragging`]:l.value}]);return{visible:r,trackRef:i,thumbRef:s,prefixCls:t,thumbCls:k,thumbStyle:u,handleThumbMouseDown:p,handleTrackClick:f,setOffset:x}}});function ib(e,n,t,r,i,s){return L(),fe(ct,null,{default:z(()=>[Q("div",{ref:"trackRef",class:K([`${e.prefixCls}-track`,`${e.prefixCls}-track-direction-${e.direction}`]),onMousedown:n[1]||(n[1]=Os((...o)=>e.handleTrackClick&&e.handleTrackClick(...o),["self"]))},[Q("div",{ref:"thumbRef",class:K(e.thumbCls),style:be(e.thumbStyle),onMousedown:n[0]||(n[0]=(...o)=>e.handleThumbMouseDown&&e.handleThumbMouseDown(...o))},[Q("div",{class:K(`${e.prefixCls}-thumb-bar`)},null,2)],38)],34)]),_:1})}var ob=ae(rb,[["render",ib]]);const Wl=20,Vr=15,sb=G({name:"Scrollbar",components:{ResizeObserver:ws,Thumb:ob},inheritAttrs:!1,props:{type:{type:String,default:"embed"},outerClass:[String,Object,Array],outerStyle:{type:[String,Object,Array]},hide:{type:Boolean,default:!1},disableHorizontal:{type:Boolean,default:!1},disableVertical:{type:Boolean,default:!1}},emits:{scroll:e=>!0},setup(e,{emit:n}){const t=te("scrollbar"),r=V(),i=V(),s=V(),o=V(),a=V(),l=V(!1),c=V(!1),u=E(()=>l.value&&!e.disableHorizontal),p=E(()=>c.value&&!e.disableVertical),f=V(!1),g=()=>{var h,P,N,$,B,w;if(r.value){const{clientWidth:H,clientHeight:X,offsetWidth:j,offsetHeight:U,scrollWidth:ue,scrollHeight:pe,scrollTop:de,scrollLeft:me}=r.value;l.value=ue>H,c.value=pe>X,f.value=u.value&&p.value;const le=e.type==="embed"&&f.value?j-Vr:j,De=e.type==="embed"&&f.value?U-Vr:U,je=Math.round(le/Math.min(ue/H,le/Wl)),$e=le-je,Me=(ue-H)/$e,Ye=Math.round(De/Math.min(pe/X,De/Wl)),Xe=De-Ye,sn=(pe-X)/Xe;if(i.value={ratio:Me,thumbSize:je,max:$e},s.value={ratio:sn,thumbSize:Ye,max:Xe},de>0){const ke=Math.round(de/((P=(h=s.value)==null?void 0:h.ratio)!=null?P:1));(N=a.value)==null||N.setOffset(ke)}if(me>0){const ke=Math.round(me/((B=($=s.value)==null?void 0:$.ratio)!=null?B:1));(w=o.value)==null||w.setOffset(ke)}}};ze(()=>{g()});const O=()=>{g()},_=h=>{var P,N,$,B,w,H;if(r.value){if(u.value&&!e.disableHorizontal){const X=Math.round(r.value.scrollLeft/((N=(P=i.value)==null?void 0:P.ratio)!=null?N:1));($=o.value)==null||$.setOffset(X)}if(p.value&&!e.disableVertical){const X=Math.round(r.value.scrollTop/((w=(B=s.value)==null?void 0:B.ratio)!=null?w:1));(H=a.value)==null||H.setOffset(X)}}n("scroll",h)},x=h=>{var P,N;r.value&&r.value.scrollTo({left:h*((N=(P=i.value)==null?void 0:P.ratio)!=null?N:1)})},k=h=>{var P,N;r.value&&r.value.scrollTo({top:h*((N=(P=s.value)==null?void 0:P.ratio)!=null?N:1)})},y=E(()=>{const h={};return e.type==="track"&&(u.value&&(h.paddingBottom=`${Vr}px`),p.value&&(h.paddingRight=`${Vr}px`)),[h,e.outerStyle]}),C=E(()=>[`${t}`,`${t}-type-${e.type}`,{[`${t}-both`]:f.value},e.outerClass]);return{prefixCls:t,cls:C,style:y,containerRef:r,horizontalThumbRef:o,verticalThumbRef:a,horizontalData:i,verticalData:s,isBoth:f,hasHorizontalScrollbar:u,hasVerticalScrollbar:p,handleResize:O,handleScroll:_,handleHorizontalScroll:x,handleVerticalScroll:k}},methods:{scrollTo(e,n){var t,r;qn(e)?(t=this.$refs.containerRef)==null||t.scrollTo(e):(e||n)&&((r=this.$refs.containerRef)==null||r.scrollTo(e,n))},scrollTop(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({top:e})},scrollLeft(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({left:e})}}});function ab(e,n,t,r,i,s){const o=re("ResizeObserver"),a=re("thumb");return L(),q("div",{class:K(e.cls),style:be(e.style)},[b(o,{onResize:e.handleResize},{default:z(()=>[Q("div",en({ref:"containerRef",class:`${e.prefixCls}-container`},e.$attrs,{onScroll:n[0]||(n[0]=(...l)=>e.handleScroll&&e.handleScroll(...l))}),[b(o,{onResize:e.handleResize},{default:z(()=>[ce(e.$slots,"default")]),_:3},8,["onResize"])],16)]),_:3},8,["onResize"]),!e.hide&&e.hasHorizontalScrollbar?(L(),fe(a,{key:0,ref:"horizontalThumbRef",data:e.horizontalData,direction:"horizontal",both:e.isBoth,onScroll:e.handleHorizontalScroll},null,8,["data","both","onScroll"])):Pe("v-if",!0),!e.hide&&e.hasVerticalScrollbar?(L(),fe(a,{key:1,ref:"verticalThumbRef",data:e.verticalData,direction:"vertical",both:e.isBoth,onScroll:e.handleVerticalScroll},null,8,["data","both","onScroll"])):Pe("v-if",!0)],6)}var Oo=ae(sb,[["render",ab]]);const lb=Object.assign(Oo,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+Oo.name,Oo)}}),cb={ENTER:"Enter",ESC:"Escape",BACKSPACE:"Backspace",TAB:"Tab",SPACE:" ",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight"};var ub=Object.defineProperty,zl=Object.getOwnPropertySymbols,db=Object.prototype.hasOwnProperty,pb=Object.prototype.propertyIsEnumerable,Ul=(e,n,t)=>n in e?ub(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Po=(e,n)=>{for(var t in n||(n={}))db.call(n,t)&&Ul(e,t,n[t]);if(zl)for(var t of zl(n))pb.call(n,t)&&Ul(e,t,n[t]);return e};const fb=["red","orangered","orange","gold","lime","green","cyan","arcoblue","purple","pinkpurple","magenta","gray"],mb=["normal","processing","success","warning","danger"];var Co=G({name:"Badge",props:{text:{type:String},dot:{type:Boolean},dotStyle:{type:Object},maxCount:{type:Number,default:99},offset:{type:Array,default:()=>[]},color:{type:String},status:{type:String,validator:e=>mb.includes(e)},count:{type:Number}},setup(e,{slots:n}){const{status:t,color:r,dotStyle:i,offset:s,text:o,dot:a,maxCount:l,count:c}=Ge(e),u=te("badge"),p=vb(u,t==null?void 0:t.value,n==null?void 0:n.default),f=E(()=>{const O=Po({},(i==null?void 0:i.value)||{}),[_,x]=(s==null?void 0:s.value)||[];_&&(O.marginRight=`${-_}px`),x&&(O.marginTop=`${x}px`);const k=!(r!=null&&r.value)||fb.includes(r==null?void 0:r.value)?{}:{backgroundColor:r.value};return{mergedStyle:Po(Po({},k),O),computedDotStyle:O,computedColorStyle:k}}),g=()=>{const O=o==null?void 0:o.value,_=r==null?void 0:r.value,x=t==null?void 0:t.value,k=a==null?void 0:a.value,y=Number(c==null?void 0:c.value),C=(c==null?void 0:c.value)!=null,{computedDotStyle:h,mergedStyle:P}=f.value;return n.content?b("span",{class:`${u}-custom-dot`,style:h},[n.content()]):O&&!_&&!x?b("span",{class:`${u}-text`,style:h},[O]):x||_&&!C?b("span",{class:`${u}-status-wrapper`},[b("span",{class:[`${u}-status-dot`,{[`${u}-status-${x}`]:x,[`${u}-color-${_}`]:_}],style:P},null),O&&b("span",{class:`${u}-status-text`},[O])]):(k||_)&&y>0?b("span",{class:[`${u}-dot`,{[`${u}-color-${_}`]:_}],style:P},null):y===0?null:b("span",{class:`${u}-number`,style:P},[b("span",null,[l.value&&y>l.value?`${l.value}+`:y])])};return()=>b("span",{class:p.value},[n.default&&n.default(),g()])}});const vb=(e,n,t)=>E(()=>[e,{[`${e}-status`]:n,[`${e}-no-children`]:!t}]),gb=Object.assign(Co,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+Co.name,Co)}}),hb=G({name:"IconMore",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-more`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),bb=["stroke-width","stroke-linecap","stroke-linejoin"],yb=Q("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",fill:"currentColor",stroke:"none"},null,-1),Sb=Q("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"},null,-1),Eb=[yb,Sb];function _b(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Eb,14,bb)}var Ro=ae(hb,[["render",_b]]);const Tb=Object.assign(Ro,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ro.name,Ro)}}),kb=G({name:"IconDown",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-down`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Ob=["stroke-width","stroke-linecap","stroke-linejoin"],Pb=Q("path",{d:"M39.6 17.443 24.043 33 8.487 17.443"},null,-1),Cb=[Pb];function Rb(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Cb,14,Ob)}var Lo=ae(kb,[["render",Rb]]);const Lb=Object.assign(Lo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Lo.name,Lo)}}),ba=Symbol("ArcoDropdown"),xb=G({name:"DropdownPanel",components:{Scrollbar:lb,Empty:eb},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:n,slots:t}){const r=te("dropdown"),i=Ae(ba,{}),s=V(),o=c=>{const{scrollTop:u,scrollHeight:p,offsetHeight:f}=c.target;p-(u+f)<=e.bottomOffset&&n("reachBottom",c),n("scroll",c)},a=E(()=>{if(Ee(i.popupMaxHeight))return{maxHeight:`${i.popupMaxHeight}px`};if(!i.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),l=E(()=>[r,{[`${r}-has-footer`]:!!t.footer}]);return{prefixCls:r,cls:l,style:a,wrapperRef:s,handleScroll:o}}});function wb(e,n,t,r,i,s){const o=re("empty"),a=re("Scrollbar");return L(),q("div",{class:K(e.cls)},[e.isEmpty?(L(),q("div",{key:0,class:K(`${e.prefixCls}-empty`)},[ce(e.$slots,"empty",{},()=>[b(o)])],2)):Pe("v-if",!0),b(a,{ref:"wrapperRef",class:K(`${e.prefixCls}-list-wrapper`),style:be(e.style),onScroll:e.handleScroll},{default:z(()=>[Q("ul",{class:K(`${e.prefixCls}-list`)},[ce(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(L(),q("div",{key:1,class:K(`${e.prefixCls}-footer`)},[ce(e.$slots,"footer")],2)):Pe("v-if",!0)],2)}var Id=ae(xb,[["render",wb]]);const ya=({popupVisible:e,defaultPopupVisible:n,emit:t})=>{var r;const i=V((r=n==null?void 0:n.value)!=null?r:!1),s=E(()=>{var a;return(a=e==null?void 0:e.value)!=null?a:i.value}),o=a=>{a!==s.value&&(i.value=a,t("update:popupVisible",a),t("popupVisibleChange",a))};return Ce(s,a=>{i.value!==a&&(i.value=a)}),{computedPopupVisible:s,handlePopupVisibleChange:o}},Ib=G({name:"Dropdown",components:{Trigger:ha,DropdownPanel:Id},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r,popupMaxHeight:i}=Ge(e),s=te("dropdown"),{computedPopupVisible:o,handlePopupVisibleChange:a}=ya({defaultPopupVisible:t,popupVisible:r,emit:n});return Bn(ba,on({popupMaxHeight:i,onOptionClick:(c,u)=>{n("select",c,u),e.hideOnSelect&&a(!1)}})),{prefixCls:s,computedPopupVisible:o,handlePopupVisibleChange:a}}});function Ab(e,n,t,r,i,s){const o=re("DropdownPanel"),a=re("Trigger");return L(),fe(a,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:z(()=>[b(o,null,di({default:z(()=>[ce(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:z(()=>[ce(e.$slots,"footer")])}:void 0]),1024)]),default:z(()=>[ce(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var ni=ae(Ib,[["render",Ab]]);const Bb=G({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("dropdown-option"),r=V(),i=E(()=>{var l,c,u;return(u=(c=e.value)!=null?c:(l=r.value)==null?void 0:l.textContent)!=null?u:void 0}),s=e.uninjectContext?void 0:Ae(ba,void 0),o=l=>{e.disabled||(n("click",l),s==null||s.onOptionClick(i.value,l))},a=E(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:a,liRef:r,handleClick:o}}});function Nb(e,n,t,r,i,s){return L(),q("li",{ref:"liRef",class:K([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:n[0]||(n[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[e.$slots.icon?(L(),q("span",{key:0,class:K(`${e.prefixCls}-icon`)},[ce(e.$slots,"icon")],2)):Pe("v-if",!0),Q("span",{class:K(`${e.prefixCls}-content`)},[ce(e.$slots,"default")],2),e.$slots.suffix?(L(),q("span",{key:1,class:K(`${e.prefixCls}-suffix`)},[ce(e.$slots,"suffix")],2)):Pe("v-if",!0)],2)}var hr=ae(Bb,[["render",Nb]]);const Db=G({name:"Dgroup",props:{title:String},setup(){return{prefixCls:te("dropdown-group")}}});function Hb(e,n,t,r,i,s){return L(),q(Be,null,[Q("li",{class:K(`${e.prefixCls}-title`)},[ce(e.$slots,"title",{},()=>[Ke(Ve(e.title),1)])],2),ce(e.$slots,"default")],64)}var xo=ae(Db,[["render",Hb]]);const $b=G({name:"IconRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-right`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Mb=["stroke-width","stroke-linecap","stroke-linejoin"],Fb=Q("path",{d:"m16 39.513 15.556-15.557L16 8.4"},null,-1),jb=[Fb];function Kb(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},jb,14,Mb)}var wo=ae($b,[["render",Kb]]);const Wb=Object.assign(wo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+wo.name,wo)}}),zb=G({name:"Dsubmenu",components:{Trigger:ha,DropdownPanel:Id,DropdownOption:hr,IconRight:Wb},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=Ge(e),i=te("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:o}=ya({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:s,handlePopupVisibleChange:o}}});function Ub(e,n,t,r,i,s){const o=re("IconRight"),a=re("dropdown-option"),l=re("dropdown-panel"),c=re("Trigger");return L(),fe(c,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:z(()=>[b(l,{class:K(`${e.prefixCls}-submenu`)},di({default:z(()=>[ce(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:z(()=>[ce(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:z(()=>[b(a,en(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),di({suffix:z(()=>[ce(e.$slots,"suffix",{},()=>[b(o)])]),default:z(()=>[ce(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:z(()=>[ce(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var Io=ae(zb,[["render",Ub]]);const Vb=G({name:"DropdownButton",components:{IconMore:Tb,Button:ht,ButtonGroup:ei,Dropdown:ni},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=Ge(e),i=te("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:o}=ya({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:i,computedPopupVisible:s,handleClick:c=>{n("click",c)},handleSelect:(c,u)=>{n("select",c,u)},handlePopupVisibleChange:o}}});function Gb(e,n,t,r,i,s){const o=re("Button"),a=re("IconMore"),l=re("Dropdown"),c=re("ButtonGroup");return L(),fe(c,null,{default:z(()=>[b(o,en({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:z(()=>[ce(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),b(l,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:z(()=>[ce(e.$slots,"content")]),default:z(()=>[b(o,{size:e.size,type:e.type,disabled:e.disabled},{icon:z(()=>[ce(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[b(a)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var Ao=ae(Vb,[["render",Gb]]);const qb=Object.assign(ni,{Option:hr,Group:xo,Submenu:Io,Button:Ao,install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+ni.name,ni),e.component(t+hr.name,hr),e.component(t+xo.name,xo),e.component(t+Io.name,Io),e.component(t+Ao.name,Ao)}}),Ad=Symbol("RadioGroup");var ti=G({name:"Radio",components:{IconHover:gt},props:{modelValue:{type:[String,Number,Boolean],default:void 0},defaultChecked:{type:Boolean,default:!1},value:{type:[String,Number,Boolean],default:!0},type:{type:String,default:"radio"},disabled:{type:Boolean,default:!1},uninjectGroupContext:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const r=te("radio"),{modelValue:i}=Ge(e),s=e.uninjectGroupContext?void 0:Ae(Ad,void 0),{mergedDisabled:o,eventHandlers:a}=Br({disabled:vs(e,"disabled")}),l=V(null),c=V(e.defaultChecked),u=E(()=>(s==null?void 0:s.name)==="ArcoRadioGroup"),p=E(()=>{var h;return(h=s==null?void 0:s.type)!=null?h:e.type}),f=E(()=>(s==null?void 0:s.disabled)||o.value),g=E(()=>{var h,P;return u.value?(s==null?void 0:s.value)===((h=e.value)!=null?h:!0):Nn(e.modelValue)?c.value:e.modelValue===((P=e.value)!=null?P:!0)});Ce(i,h=>{(Nn(h)||Hi(h))&&(c.value=!1)}),Ce(g,(h,P)=>{h!==P&&(c.value=h,l.value&&(l.value.checked=h))});const O=h=>{var P,N;(N=(P=a.value)==null?void 0:P.onFocus)==null||N.call(P,h)},_=h=>{var P,N;(N=(P=a.value)==null?void 0:P.onBlur)==null||N.call(P,h)},x=h=>{h.stopPropagation()},k=h=>{var P,N,$,B,w;c.value=!0,u.value?s==null||s.handleChange((P=e.value)!=null?P:!0,h):(n("update:modelValue",(N=e.value)!=null?N:!0),n("change",($=e.value)!=null?$:!0,h),(w=(B=a.value)==null?void 0:B.onChange)==null||w.call(B,h)),mn(()=>{l.value&&l.value.checked!==g.value&&(l.value.checked=g.value)})},y=E(()=>[`${p.value==="button"?`${r}-button`:r}`,{[`${r}-checked`]:g.value,[`${r}-disabled`]:f.value}]),C=()=>b(Be,null,[b(re("icon-hover"),{class:`${r}-icon-hover`,disabled:f.value||g.value},{default:()=>[b("span",{class:`${r}-icon`},null)]}),t.default&&b("span",{class:`${r}-label`},[t.default()])]);return()=>{var h,P,N,$;return b("label",{class:y.value},[b("input",{ref:l,type:"radio",checked:g.value,value:e.value,class:`${r}-target`,disabled:f.value,onClick:x,onChange:k,onFocus:O,onBlur:_},null),p.value==="radio"?($=(N=(P=t.radio)!=null?P:(h=s==null?void 0:s.slots)==null?void 0:h.radio)==null?void 0:N({checked:g.value,disabled:f.value}))!=null?$:C():b("span",{class:`${r}-button-content`},[t.default&&t.default()])])}}}),ri=G({name:"RadioGroup",props:{modelValue:{type:[String,Number,Boolean],default:void 0},defaultValue:{type:[String,Number,Boolean],default:""},type:{type:String,default:"radio"},size:{type:String},options:{type:Array},direction:{type:String,default:"horizontal"},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":e=>!0,change:(e,n)=>!0},setup(e,{emit:n,slots:t}){const r=te("radio-group"),{size:i,type:s,disabled:o,modelValue:a}=Ge(e),{mergedDisabled:l,mergedSize:c,eventHandlers:u}=Br({size:i,disabled:o}),p=V(e.defaultValue),f=E(()=>{var k;return(k=e.modelValue)!=null?k:p.value}),g=E(()=>{var k;return((k=e.options)!=null?k:[]).map(y=>zt(y)||Ee(y)?{label:y,value:y}:y)});Bn(Ad,on({name:"ArcoRadioGroup",value:f,size:c,type:s,disabled:l,slots:t,handleChange:(k,y)=>{var C,h;p.value=k,n("update:modelValue",k),n("change",k,y),(h=(C=u.value)==null?void 0:C.onChange)==null||h.call(C,y)}})),Ce(f,k=>{p.value!==k&&(p.value=k)}),Ce(a,k=>{(Nn(k)||Hi(k))&&(p.value="")});const _=E(()=>[`${r}${e.type==="button"?"-button":""}`,`${r}-size-${c.value}`,`${r}-direction-${e.direction}`,{[`${r}-disabled`]:l.value}]),x=()=>g.value.map(k=>b(ti,{key:k.value,value:k.value,disabled:k.disabled,modelValue:f.value===k.value},{default:()=>[t.label?t.label({data:k}):fn(k.label)?k.label():k.label]}));return()=>{var k;return b("span",{class:_.value},[g.value.length>0?x():(k=t.default)==null?void 0:k.call(t)])}}});const Jb=Object.assign(ti,{Group:ri,install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+ti.name,ti),e.component(t+ri.name,ri)}}),Zb=G({name:"IconLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-left`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Yb=["stroke-width","stroke-linecap","stroke-linejoin"],Xb=Q("path",{d:"M32 8.4 16.444 23.956 32 39.513"},null,-1),Qb=[Xb];function ey(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Qb,14,Yb)}var Bo=ae(Zb,[["render",ey]]);const ny=Object.assign(Bo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Bo.name,Bo)}}),Sa=Symbol("ArcoCard");var No=G({name:"Card",components:{Spin:Kl},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(e,{slots:n}){const t=te("card"),{size:r}=Ge(e),{mergedSize:i}=Wi(r),s=E(()=>i.value==="small"||i.value==="mini"?"small":"medium"),o=c=>{const u=Qr(c);return b("div",{class:`${t}-actions`},[b("div",{class:`${t}-actions-right`},[u.map((p,f)=>b("span",{key:`action-${f}`,class:`${t}-actions-item`},[p]))])])},a=on({hasMeta:!1,hasGrid:!1,slots:n,renderActions:o});Bn(Sa,a);const l=E(()=>[t,`${t}-size-${s.value}`,{[`${t}-loading`]:e.loading,[`${t}-bordered`]:e.bordered,[`${t}-hoverable`]:e.hoverable,[`${t}-contain-grid`]:a.hasGrid}]);return()=>{var c,u,p,f,g,O,_;const x=!!((c=n.title)!=null?c:e.title),k=!!((u=n.extra)!=null?u:e.extra);return b("div",{class:l.value},[(x||k)&&b("div",{class:[`${t}-header`,{[`${t}-header-no-title`]:!x}],style:e.headerStyle},[x&&b("div",{class:`${t}-header-title`},[(f=(p=n.title)==null?void 0:p.call(n))!=null?f:e.title]),k&&b("div",{class:`${t}-header-extra`},[(O=(g=n.extra)==null?void 0:g.call(n))!=null?O:e.extra])]),n.cover&&b("div",{class:`${t}-cover`},[n.cover()]),b("div",{class:`${t}-body`,style:e.bodyStyle},[e.loading?b(Kl,null,null):(_=n.default)==null?void 0:_.call(n),n.actions&&!a.hasMeta&&o(n.actions())])])}}}),Do=G({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(e,{slots:n}){const t=te("card-meta"),r=Ae(Sa);return ze(()=>{r&&(r.hasMeta=!0)}),()=>{var i,s,o,a,l,c;const u=!!((i=n.title)!=null?i:e.title),p=!!((s=n.description)!=null?s:e.description);return b("div",{class:t},[(u||p)&&b("div",{class:`${t}-content`},[u&&b("div",{class:`${t}-title`},[(a=(o=n.title)==null?void 0:o.call(n))!=null?a:e.title]),p&&b("div",{class:`${t}-description`},[(c=(l=n.description)==null?void 0:l.call(n))!=null?c:e.description])]),(n.avatar||(r==null?void 0:r.slots.actions))&&b("div",{class:[`${t}-footer `,{[`${t}-footer-only-actions`]:!n.avatar}]},[n.avatar&&b("div",{class:`${t}-avatar`},[n.avatar()]),r&&r.slots.actions&&r.renderActions(r.slots.actions())])])}}});const ty=G({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(e){const n=te("card-grid"),t=Ae(Sa);return ze(()=>{t&&(t.hasGrid=!0)}),{cls:E(()=>[n,{[`${n}-hoverable`]:e.hoverable}])}}});function ry(e,n,t,r,i,s){return L(),q("div",{class:K(e.cls)},[ce(e.$slots,"default")],2)}var Ho=ae(ty,[["render",ry]]);const iy=Object.assign(No,{Meta:Do,Grid:Ho,install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+No.name,No),e.component(t+Do.name,Do),e.component(t+Ho.name,Ho)}});function oy(e,n,t){return E(()=>!!(e[t]||n[t]))}function sy(e){const n=V(e);return[n,r=>{n.value=r}]}function ay(e,n){const{value:t}=Ge(n),[r,i]=sy(Nn(t.value)?e:t.value);return Ce(t,o=>{Nn(o)&&i(void 0)}),[E(()=>Nn(t.value)?r.value:t.value),i,r]}const ly=G({name:"IconLink",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-link`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),cy=["stroke-width","stroke-linecap","stroke-linejoin"],uy=Q("path",{d:"m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"},null,-1),dy=[uy];function py(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},dy,14,cy)}var $o=ae(ly,[["render",py]]);const fy=Object.assign($o,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+$o.name,$o)}}),my=G({name:"Link",components:{IconLink:fy,IconLoading:Vt},props:{href:String,status:{type:String,default:"normal"},hoverable:{type:Boolean,default:!0},icon:Boolean,loading:Boolean,disabled:Boolean},emits:{click:e=>!0},setup(e,{slots:n,emit:t}){const r=te("link"),i=oy(e,n,"icon"),s=a=>{if(e.disabled||e.loading){a.preventDefault();return}t("click",a)};return{cls:E(()=>[r,`${r}-status-${e.status}`,{[`${r}-disabled`]:e.disabled,[`${r}-loading`]:e.loading,[`${r}-hoverless`]:!e.hoverable,[`${r}-with-icon`]:e.loading||i.value}]),prefixCls:r,showIcon:i,handleClick:s}}}),vy=["href"];function gy(e,n,t,r,i,s){const o=re("icon-loading"),a=re("icon-link");return L(),q("a",{href:e.disabled?void 0:e.href,class:K(e.cls),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[e.loading||e.showIcon?(L(),q("span",{key:0,class:K(`${e.prefixCls}-icon`)},[e.loading?(L(),fe(o,{key:0})):ce(e.$slots,"icon",{key:1},()=>[b(a)])],2)):Pe("v-if",!0),ce(e.$slots,"default")],10,vy)}var Mo=ae(my,[["render",gy]]);const hy=Object.assign(Mo,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+Mo.name,Mo)}}),by=e=>{const n=V(!1),t={overflow:"",width:"",boxSizing:""};return{setOverflowHidden:()=>{if(e.value){const s=e.value;if(!n.value&&s.style.overflow!=="hidden"){const o=ng(s);(o>0||eg(s))&&(t.overflow=s.style.overflow,t.width=s.style.width,t.boxSizing=s.style.boxSizing,s.style.overflow="hidden",s.style.width=`${s.offsetWidth-o}px`,s.style.boxSizing="border-box",n.value=!0)}}},resetOverflow:()=>{if(e.value&&n.value){const s=e.value;s.style.overflow=t.overflow,s.style.width=t.width,s.style.boxSizing=t.boxSizing,n.value=!1}}}};var yy=Object.defineProperty,Vl=Object.getOwnPropertySymbols,Sy=Object.prototype.hasOwnProperty,Ey=Object.prototype.propertyIsEnumerable,Gl=(e,n,t)=>n in e?yy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_y=(e,n)=>{for(var t in n||(n={}))Sy.call(n,t)&&Gl(e,t,n[t]);if(Vl)for(var t of Vl(n))Ey.call(n,t)&&Gl(e,t,n[t]);return e};const Ty=["top","right","bottom","left"],ky=G({name:"Drawer",components:{ClientOnly:xd,ArcoButton:ht,IconHover:gt,IconClose:ji},inheritAttrs:!1,props:{visible:{type:Boolean,default:!1},defaultVisible:{type:Boolean,default:!1},placement:{type:String,default:"right",validator:e=>Ty.includes(e)},title:String,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closable:{type:Boolean,default:!0},okText:String,cancelText:String,okLoading:{type:Boolean,default:!1},okButtonProps:{type:Object},cancelButtonProps:{type:Object},unmountOnClose:Boolean,width:{type:[Number,String],default:250},height:{type:[Number,String],default:250},popupContainer:{type:[String,Object],default:"body"},drawerStyle:{type:Object},onBeforeOk:{type:Function},onBeforeCancel:{type:Function},escToClose:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},hideCancel:{type:Boolean,default:!1}},emits:{"update:visible":e=>!0,ok:e=>!0,cancel:e=>!0,open:()=>!0,close:()=>!0,beforeOpen:()=>!0,beforeClose:()=>!0},setup(e,{emit:n}){const{popupContainer:t}=Ge(e),r=te("drawer"),{t:i}=ld(),s=V(e.defaultVisible),o=E(()=>{var U;return(U=e.visible)!=null?U:s.value}),a=V(!1),l=E(()=>e.okLoading||a.value),{teleportContainer:c,containerRef:u}=wd({popupContainer:t,visible:o}),p=V(o.value);let f=!1;const g=U=>{e.escToClose&&U.key===cb.ESC&&k()&&N(U)},O=()=>{e.escToClose&&!f&&(f=!0,On(document.documentElement,"keydown",g))},_=()=>{f&&(f=!1,Xn(document.documentElement,"keydown",g))},{zIndex:x,isLastDialog:k}=ga("dialog",{visible:o}),y=E(()=>(u==null?void 0:u.value)===document.body);let C=0;const h=()=>{C++,a.value&&(a.value=!1),s.value=!1,n("update:visible",!1)},P=async U=>{const ue=C,pe=await new Promise(async de=>{var me;if(fn(e.onBeforeOk)){let le=e.onBeforeOk((De=!0)=>de(De));if((Sl(le)||!yl(le))&&(a.value=!0),Sl(le))try{le=(me=await le)!=null?me:!0}catch{le=!1}yl(le)&&de(le)}else de(!0)});ue===C&&(pe?(n("ok",U),h()):a.value&&(a.value=!1))},N=U=>{var ue;let pe=!0;fn(e.onBeforeCancel)&&(pe=(ue=e.onBeforeCancel())!=null?ue:!1),pe&&(n("cancel",U),h())},$=U=>{e.maskClosable&&N(U)},B=()=>{o.value&&n("open")},w=()=>{o.value||(p.value=!1,X(),n("close"))},{setOverflowHidden:H,resetOverflow:X}=by(u);ze(()=>{o.value&&(p.value=!0,H(),O())}),ft(()=>{X(),_()}),Ce(o,U=>{s.value!==U&&(s.value=U),U?(n("beforeOpen"),p.value=!0,H(),O()):(n("beforeClose"),_())});const j=E(()=>{var U;const ue=_y({[e.placement]:0},(U=e.drawerStyle)!=null?U:{});return["right","left"].includes(e.placement)?ue.width=Ee(e.width)?`${e.width}px`:e.width:ue.height=Ee(e.height)?`${e.height}px`:e.height,ue});return{prefixCls:r,style:j,t:i,mounted:p,computedVisible:o,mergedOkLoading:l,zIndex:x,handleOk:P,handleCancel:N,handleOpen:B,handleClose:w,handleMask:$,isFixed:y,teleportContainer:c}}});function Oy(e,n,t,r,i,s){const o=re("icon-close"),a=re("icon-hover"),l=re("arco-button"),c=re("client-only");return L(),fe(c,null,{default:z(()=>[(L(),fe(Ku,{to:e.teleportContainer,disabled:!e.renderToBody},[!e.unmountOnClose||e.computedVisible||e.mounted?Zr((L(),q("div",en({key:0,class:`${e.prefixCls}-container`,style:e.isFixed?{zIndex:e.zIndex}:{zIndex:"inherit",position:"absolute"}},e.$attrs),[b(ct,{name:"fade-drawer",appear:""},{default:z(()=>[e.mask?Zr((L(),q("div",{key:0,class:K(`${e.prefixCls}-mask`),onClick:n[0]||(n[0]=(...u)=>e.handleMask&&e.handleMask(...u))},null,2)),[[Xr,e.computedVisible]]):Pe("v-if",!0)]),_:1}),b(ct,{name:`slide-${e.placement}-drawer`,appear:"",onAfterEnter:e.handleOpen,onAfterLeave:e.handleClose},{default:z(()=>[Zr(Q("div",{class:K(e.prefixCls),style:be(e.style)},[e.header?(L(),q("div",{key:0,class:K(`${e.prefixCls}-header`)},[ce(e.$slots,"header",{},()=>[e.$slots.title||e.title?(L(),q("div",{key:0,class:K(`${e.prefixCls}-title`)},[ce(e.$slots,"title",{},()=>[Ke(Ve(e.title),1)])],2)):Pe("v-if",!0),e.closable?(L(),q("div",{key:1,tabindex:"-1",role:"button","aria-label":"Close",class:K(`${e.prefixCls}-close-btn`),onClick:n[1]||(n[1]=(...u)=>e.handleCancel&&e.handleCancel(...u))},[b(a,null,{default:z(()=>[b(o)]),_:1})],2)):Pe("v-if",!0)])],2)):Pe("v-if",!0),Q("div",{class:K(`${e.prefixCls}-body`)},[ce(e.$slots,"default")],2),e.footer?(L(),q("div",{key:1,class:K(`${e.prefixCls}-footer`)},[ce(e.$slots,"footer",{},()=>[e.hideCancel?Pe("v-if",!0):(L(),fe(l,en({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:z(()=>[Ke(Ve(e.cancelText||e.t("drawer.cancelText")),1)]),_:1},16,["onClick"])),b(l,en({type:"primary",loading:e.mergedOkLoading},e.okButtonProps,{onClick:e.handleOk}),{default:z(()=>[Ke(Ve(e.okText||e.t("drawer.okText")),1)]),_:1},16,["loading","onClick"])])],2)):Pe("v-if",!0)],6),[[Xr,e.computedVisible]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],16)),[[Xr,e.computedVisible||e.mounted]]):Pe("v-if",!0)],8,["to","disabled"]))]),_:3})}var ii=ae(ky,[["render",Oy]]),Py=Object.defineProperty,ql=Object.getOwnPropertySymbols,Cy=Object.prototype.hasOwnProperty,Ry=Object.prototype.propertyIsEnumerable,Jl=(e,n,t)=>n in e?Py(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Fo=(e,n)=>{for(var t in n||(n={}))Cy.call(n,t)&&Jl(e,t,n[t]);if(ql)for(var t of ql(n))Ry.call(n,t)&&Jl(e,t,n[t]);return e};const Zl=(e,n)=>{let t=Ed("drawer");const r=()=>{c.component&&(c.component.props.visible=!1),fn(e.onOk)&&e.onOk()},i=()=>{c.component&&(c.component.props.visible=!1),fn(e.onCancel)&&e.onCancel()},s=async()=>{await mn(),t&&(fi(null,t),document.body.removeChild(t)),t=null,fn(e.onClose)&&e.onClose()},o=()=>{c.component&&(c.component.props.visible=!1)},a=u=>{c.component&&Object.entries(u).forEach(([p,f])=>{c.component.props[p]=f})},c=b(ii,Fo(Fo(Fo({},{visible:!0,renderToBody:!1,unmountOnClose:!0,onOk:r,onCancel:i,onClose:s}),Ki(e,["content","title","footer","visible","unmountOnClose","onOk","onCancel","onClose"])),{header:typeof e.header=="boolean"?e.header:void 0,footer:typeof e.footer=="boolean"?e.footer:void 0}),{default:Ot(e.content),header:typeof e.header!="boolean"?Ot(e.header):void 0,title:Ot(e.title),footer:typeof e.footer!="boolean"?Ot(e.footer):void 0});return(n??Is._context)&&(c.appContext=n??Is._context),fi(c,t),document.body.appendChild(t),{close:o,update:a}},Is=Object.assign(ii,{open:Zl,install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+ii.name,ii);const r={open:(i,s=e._context)=>Zl(i,s)};e.config.globalProperties.$drawer=r},_context:null});var Ly=Object.defineProperty,Yl=Object.getOwnPropertySymbols,xy=Object.prototype.hasOwnProperty,wy=Object.prototype.propertyIsEnumerable,Xl=(e,n,t)=>n in e?Ly(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ql=(e,n)=>{for(var t in n||(n={}))xy.call(n,t)&&Xl(e,t,n[t]);if(Yl)for(var t of Yl(n))wy.call(n,t)&&Xl(e,t,n[t]);return e};const Iy=G({name:"Tooltip",components:{Trigger:ha},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},content:String,position:{type:String,default:"top"},mini:{type:Boolean,default:!1},backgroundColor:{type:String},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const t=te("tooltip"),r=V(e.defaultPopupVisible),i=E(()=>{var u;return(u=e.popupVisible)!=null?u:r.value}),s=u=>{r.value=u,n("update:popupVisible",u),n("popupVisibleChange",u)},o=E(()=>[`${t}-content`,e.contentClass,{[`${t}-mini`]:e.mini}]),a=E(()=>{if(e.backgroundColor||e.contentStyle)return Ql({backgroundColor:e.backgroundColor},e.contentStyle)}),l=E(()=>[`${t}-popup-arrow`,e.arrowClass]),c=E(()=>{if(e.backgroundColor||e.arrowStyle)return Ql({backgroundColor:e.backgroundColor},e.arrowStyle)});return{prefixCls:t,computedPopupVisible:i,contentCls:o,computedContentStyle:a,arrowCls:l,computedArrowStyle:c,handlePopupVisibleChange:s}}});function Ay(e,n,t,r,i,s){const o=re("Trigger");return L(),fe(o,{class:K(e.prefixCls),trigger:"hover",position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"show-arrow":"","content-class":e.contentCls,"content-style":e.computedContentStyle,"arrow-class":e.arrowCls,"arrow-style":e.computedArrowStyle,"popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",role:"tooltip",onPopupVisibleChange:e.handlePopupVisibleChange},{content:z(()=>[ce(e.$slots,"content",{},()=>[Ke(Ve(e.content),1)])]),default:z(()=>[ce(e.$slots,"default")]),_:3},8,["class","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var jo=ae(Iy,[["render",Ay]]);const Bd=Object.assign(jo,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+jo.name,jo)}}),By=G({name:"IconPlus",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-plus`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),Ny=["stroke-width","stroke-linecap","stroke-linejoin"],Dy=Q("path",{d:"M5 24h38M24 5v38"},null,-1),Hy=[Dy];function $y(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Hy,14,Ny)}var Ko=ae(By,[["render",$y]]);const My=Object.assign(Ko,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ko.name,Ko)}}),Fy=G({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-drag-dot`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),jy=["stroke-width","stroke-linecap","stroke-linejoin"],Ky=Q("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),Wy=Q("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),zy=[Ky,Wy];function Uy(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},zy,14,jy)}var Wo=ae(Fy,[["render",Uy]]);const Vy=Object.assign(Wo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Wo.name,Wo)}}),Gy=G({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-drag-dot-vertical`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),qy=["stroke-width","stroke-linecap","stroke-linejoin"],Jy=Q("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),Zy=Q("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),Yy=[Jy,Zy];function Xy(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},Yy,14,qy)}var zo=ae(Gy,[["render",Xy]]);const Qy=Object.assign(zo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+zo.name,zo)}});var eS=G({name:"ResizeTrigger",components:{ResizeObserver:yd,IconDragDot:Vy,IconDragDotVertical:Qy},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:n}){const{direction:t,prefixCls:r}=Ge(e),i=E(()=>(t==null?void 0:t.value)==="horizontal");return{classNames:E(()=>[r.value,{[`${r.value}-horizontal`]:i.value,[`${r.value}-vertical`]:!i.value}]),onResize:a=>{n("resize",a)},isHorizontal:i}}});function nS(e,n,t,r,i,s){const o=re("IconDragDot"),a=re("IconDragDotVertical"),l=re("ResizeObserver");return L(),fe(l,{onResize:e.onResize},{default:z(()=>[Q("div",{class:K(e.classNames)},[Pe(" @slot 自定义内容 "),ce(e.$slots,"default",{},()=>[Q("div",{class:K(`${e.prefixCls}-icon-wrapper`)},[Pe(" @slot 自定义 icon "),ce(e.$slots,"icon",{},()=>[e.isHorizontal?(L(),fe(o,{key:0,class:K(`${e.prefixCls}-icon`)},null,8,["class"])):(L(),fe(a,{key:1,class:K(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var tS=ae(eS,[["render",nS]]);const rS=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],iS=e=>{const n={};return rS.forEach(t=>{n[t]=e.getPropertyValue(t)}),n},oS=G({name:"Textarea",components:{ResizeObserver:yd,IconHover:gt,IconClose:ji},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,n)=>!0,change:(e,n)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:n,attrs:t}){const{disabled:r,error:i,modelValue:s}=Ge(e),o=te("textarea"),{mergedDisabled:a,mergedError:l,eventHandlers:c}=Br({disabled:r,error:i}),u=V(),p=V(),f=V(),g=V(),O=V(e.defaultValue),_=E(()=>{var d;return(d=s.value)!=null?d:O.value}),[x,k]=Pd(u);Ce(s,d=>{(Nn(d)||Hi(d))&&(O.value="")});const y=E(()=>qn(e.maxLength)&&!!e.maxLength.errorOnly),C=E(()=>qn(e.maxLength)?e.maxLength.length:e.maxLength),h=d=>{var v;return fn(e.wordLength)?e.wordLength(d):(v=d.length)!=null?v:0},P=E(()=>h(_.value)),N=E(()=>l.value||!!(C.value&&y.value&&P.value>C.value)),$=V(!1),B=V(!1),w=E(()=>e.allowClear&&!a.value&&_.value),H=V(!1),X=V(""),j=()=>{x(),mn(()=>{u.value&&_.value!==u.value.value&&(u.value.value=_.value,k())})},U=(d,v=!0)=>{var S,T;C.value&&!y.value&&h(d)>C.value&&(d=(T=(S=e.wordSlice)==null?void 0:S.call(e,d,C.value))!=null?T:d.slice(0,C.value)),O.value=d,v&&n("update:modelValue",d),j()};let ue=_.value;const pe=(d,v)=>{var S,T;d!==ue&&(ue=d,n("change",d,v),(T=(S=c.value)==null?void 0:S.onChange)==null||T.call(S,v))},de=d=>{var v,S;B.value=!0,ue=_.value,n("focus",d),(S=(v=c.value)==null?void 0:v.onFocus)==null||S.call(v,d)},me=d=>{var v,S;B.value=!1,n("blur",d),(S=(v=c.value)==null?void 0:v.onBlur)==null||S.call(v,d),pe(_.value,d)},le=d=>{var v,S;const{value:T}=d.target;if(d.type==="compositionend"){if(H.value=!1,X.value="",C.value&&!y.value&&_.value.length>=C.value&&h(T)>C.value){j();return}n("input",T,d),U(T),(S=(v=c.value)==null?void 0:v.onInput)==null||S.call(v,d)}else H.value=!0},De=d=>{var v,S;const{value:T}=d.target;if(H.value)X.value=T;else{if(C.value&&!y.value&&_.value.length>=C.value&&h(T)>C.value&&d.inputType==="insertText"){j();return}n("input",T,d),U(T),(S=(v=c.value)==null?void 0:v.onInput)==null||S.call(v,d)}},je=d=>{U(""),pe("",d),n("clear",d)};Ce(s,d=>{d!==_.value&&U(d??"",!1)});const $e=d=>Ki(t,gi),Me=d=>Od(t,gi),Ye=E(()=>[`${o}-wrapper`,{[`${o}-focus`]:B.value,[`${o}-disabled`]:a.value,[`${o}-error`]:N.value,[`${o}-scroll`]:$.value}]);let Xe;const sn=V(0),ke=V(0),R=E(()=>!qn(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*sn.value+ke.value),J=E(()=>!qn(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*sn.value+ke.value),F=()=>{const d=iS(Xe);sn.value=Number.parseInt(d["line-height"]||0,10),ke.value=Number.parseInt(d["border-width"]||0,10)*2+Number.parseInt(d["padding-top"]||0,10)+Number.parseInt(d["padding-bottom"]||0,10),g.value=d,mn(()=>{var v;const S=(v=f.value)==null?void 0:v.offsetHeight;let T=S??0,I="hidden";R.value&&T<R.value&&(T=R.value),J.value&&T>J.value&&(T=J.value,I="auto"),p.value={height:`${T}px`,resize:"none",overflow:I}})};ze(()=>{u.value&&(Xe=window.getComputedStyle(u.value),e.autoSize&&F()),m()});const ee=()=>{e.autoSize&&f.value&&F(),m()},ye=d=>{u.value&&d.target!==u.value&&(d.preventDefault(),u.value.focus())},m=()=>{u.value&&(u.value.scrollHeight>u.value.offsetHeight?$.value||($.value=!0):$.value&&($.value=!1))};return Ce(_,()=>{e.autoSize&&f.value&&F(),m()}),{prefixCls:o,wrapperCls:Ye,textareaRef:u,textareaStyle:p,mirrorRef:f,mirrorStyle:g,computedValue:_,showClearBtn:w,valueLength:P,computedMaxLength:C,mergedDisabled:a,getWrapperAttrs:$e,getTextareaAttrs:Me,handleInput:De,handleFocus:de,handleBlur:me,handleComposition:le,handleClear:je,handleResize:ee,handleMousedown:ye}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),sS=["disabled","value","placeholder"];function aS(e,n,t,r,i,s){const o=re("resize-observer"),a=re("icon-close"),l=re("icon-hover");return L(),q("div",en(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:n[7]||(n[7]=(...c)=>e.handleMousedown&&e.handleMousedown(...c))}),[e.autoSize?(L(),q("div",{key:0,ref:"mirrorRef",class:K(`${e.prefixCls}-mirror`),style:be(e.mirrorStyle)},Ve(`${e.computedValue}
`),7)):Pe("v-if",!0),b(o,{onResize:e.handleResize},{default:z(()=>[Q("textarea",en({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:n[0]||(n[0]=(...c)=>e.handleInput&&e.handleInput(...c)),onFocus:n[1]||(n[1]=(...c)=>e.handleFocus&&e.handleFocus(...c)),onBlur:n[2]||(n[2]=(...c)=>e.handleBlur&&e.handleBlur(...c)),onCompositionstart:n[3]||(n[3]=(...c)=>e.handleComposition&&e.handleComposition(...c)),onCompositionupdate:n[4]||(n[4]=(...c)=>e.handleComposition&&e.handleComposition(...c)),onCompositionend:n[5]||(n[5]=(...c)=>e.handleComposition&&e.handleComposition(...c))}),null,16,sS)]),_:1},8,["onResize"]),ce(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(L(),q("div",{key:1,class:K(`${e.prefixCls}-word-limit`)},Ve(e.valueLength)+"/"+Ve(e.computedMaxLength),3)):Pe("v-if",!0),e.showClearBtn?(L(),q("div",{key:2,class:K(`${e.prefixCls}-clear-btn`),onClick:n[6]||(n[6]=(...c)=>e.handleClear&&e.handleClear(...c))},[b(l,null,{default:z(()=>[b(a)]),_:1})],2)):Pe("v-if",!0)],16)}var Uo=ae(oS,[["render",aS]]);const lS=Object.assign(Uo,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+Uo.name,Uo)}}),cS=G({name:"Message",components:{AIconHover:gt,IconInfoCircleFill:mg,IconCheckCircleFill:_d,IconExclamationCircleFill:Td,IconCloseCircleFill:kd,IconClose:ji,IconLoading:Vt},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:n}){const t=te("message");let r=0;const i=()=>{n("close")},s=()=>{e.duration>0&&(r=window.setTimeout(i,e.duration))},o=()=>{r&&(window.clearTimeout(r),r=0)};return ze(()=>{s()}),pt(()=>{e.resetOnUpdate&&(o(),s())}),mt(()=>{o()}),{handleMouseEnter:()=>{e.resetOnHover&&o()},handleMouseLeave:()=>{e.resetOnHover&&s()},prefixCls:t,handleClose:i}}});function uS(e,n,t,r,i,s){const o=re("icon-info-circle-fill"),a=re("icon-check-circle-fill"),l=re("icon-exclamation-circle-fill"),c=re("icon-close-circle-fill"),u=re("icon-loading"),p=re("icon-close"),f=re("a-icon-hover");return L(),q("li",{role:"alert",class:K([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:n[1]||(n[1]=(...g)=>e.handleMouseEnter&&e.handleMouseEnter(...g)),onMouseleave:n[2]||(n[2]=(...g)=>e.handleMouseLeave&&e.handleMouseLeave(...g))},[e.showIcon&&!(e.type==="normal"&&!e.$slots.icon)?(L(),q("span",{key:0,class:K(`${e.prefixCls}-icon`)},[ce(e.$slots,"icon",{},()=>[e.type==="info"?(L(),fe(o,{key:0})):e.type==="success"?(L(),fe(a,{key:1})):e.type==="warning"?(L(),fe(l,{key:2})):e.type==="error"?(L(),fe(c,{key:3})):e.type==="loading"?(L(),fe(u,{key:4})):Pe("v-if",!0)])],2)):Pe("v-if",!0),Q("span",{class:K(`${e.prefixCls}-content`)},[ce(e.$slots,"default")],2),e.closable?(L(),q("span",{key:1,class:K(`${e.prefixCls}-close-btn`),onClick:n[0]||(n[0]=(...g)=>e.handleClose&&e.handleClose(...g))},[b(f,null,{default:z(()=>[b(p)]),_:1})],2)):Pe("v-if",!0)],34)}var dS=ae(cS,[["render",uS]]);function pS(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Nt(e)}var fS=G({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,n){const t=te("message-list"),{zIndex:r}=ga("message",{runOnMounted:!0});return()=>{let i;return b(nd,{class:[t,`${t}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:r.value},onAfterLeave:()=>n.emit("afterClose")},pS(i=e.messages.map(s=>{const o={default:Ot(s.content),icon:Ot(s.icon)};return b(dS,{key:s.id,type:s.type,duration:s.duration,closable:s.closable,resetOnUpdate:s.resetOnUpdate,resetOnHover:s.resetOnHover,onClose:()=>n.emit("close",s.id)},o)}))?i:{default:()=>[i]})}}}),mS=Object.defineProperty,vS=Object.defineProperties,gS=Object.getOwnPropertyDescriptors,ec=Object.getOwnPropertySymbols,hS=Object.prototype.hasOwnProperty,bS=Object.prototype.propertyIsEnumerable,nc=(e,n,t)=>n in e?mS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,hi=(e,n)=>{for(var t in n||(n={}))hS.call(n,t)&&nc(e,t,n[t]);if(ec)for(var t of ec(n))bS.call(n,t)&&nc(e,t,n[t]);return e},Nd=(e,n)=>vS(e,gS(n));class yS{constructor(n,t){this.messageCount=0,this.add=s=>{var o;this.messageCount++;const a=(o=s.id)!=null?o:`__arco_message_${this.messageCount}`;if(this.messageIds.has(a))return this.update(a,s);const l=on(hi({id:a},s));return this.messages.value.push(l),this.messageIds.add(a),{close:()=>this.remove(a)}},this.update=(s,o)=>{for(let a=0;a<this.messages.value.length;a++)if(this.messages.value[a].id===s){const l=!Nn(o.duration);Object.assign(this.messages.value[a],Nd(hi({},o),{id:s,resetOnUpdate:l}));break}return{close:()=>this.remove(s)}},this.remove=s=>{for(let o=0;o<this.messages.value.length;o++){const a=this.messages.value[o];if(a.id===s){fn(a.onClose)&&a.onClose(s),this.messages.value.splice(o,1),this.messageIds.delete(s);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{this.messages.value.length===0&&this.container&&(fi(null,this.container),document.body.removeChild(this.container),this.container=null,xt[this.position]=void 0)};const{position:r="top"}=n;this.container=Ed("message"),this.messageIds=new Set,this.messages=V([]),this.position=r;const i=b(fS,{messages:this.messages.value,position:r,onClose:this.remove,onAfterClose:this.destroy});(t??kn._context)&&(i.appContext=t??kn._context),fi(i,this.container),document.body.appendChild(this.container)}}const xt={},Dd=[...xg,"loading","normal"],oi=Dd.reduce((e,n)=>(e[n]=(t,r)=>{zt(t)&&(t={content:t});const i=hi({type:n},t),{position:s="top"}=i;return xt[s]||(xt[s]=new yS(i,r)),xt[s].add(i)},e),{});oi.clear=e=>{var n;e?(n=xt[e])==null||n.clear():Object.values(xt).forEach(t=>t==null?void 0:t.clear())};const kn=Nd(hi({},oi),{install:e=>{const n={clear:oi.clear};for(const t of Dd)n[t]=(r,i=e._context)=>oi[t](r,i);e.config.globalProperties.$message=n},_context:null});function Hd(e){const n=zt(e)?parseFloat(e):e;let t="";return Ee(e)||String(n)===e?t=n>1?"px":"%":t="px",{size:n,unit:t,isPx:t==="px"}}function Gr({size:e,defaultSize:n,containerSize:t}){const r=Hd(e??n);return r.isPx?r.size:r.size*t}function SS(e,n){return parseFloat(e)/parseFloat(n)}const ES=G({name:"Split",components:{ResizeTrigger:tS},props:{component:{type:String,default:"div"},direction:{type:String,default:"horizontal"},size:{type:[Number,String],default:void 0},defaultSize:{type:[Number,String],default:.5},min:{type:[Number,String]},max:{type:[Number,String]},disabled:{type:Boolean,default:!1}},emits:{moveStart:e=>!0,moving:e=>!0,moveEnd:e=>!0,"update:size":e=>!0},setup(e,{emit:n}){const{direction:t,size:r,defaultSize:i,min:s,max:o}=Ge(e),a=V(0),l=V(),c=te("split"),[u,p]=ay(i.value,on({value:r})),f=E(()=>Hd(u.value)),g=E(()=>t.value==="horizontal"),O=E(()=>[c,{[`${c}-horizontal`]:g.value,[`${c}-vertical`]:!g.value}]),_=E(()=>{const{size:w,unit:H,isPx:X}=f.value;return{flex:`0 0 calc(${X?w:w*100}${H} - ${a.value/2}px)`}}),x={startPageX:0,startPageY:0,startContainerSize:0,startSize:0};async function k(){const w=()=>{var H,X;return g.value?(H=l.value)==null?void 0:H.clientWidth:((X=l.value)==null?void 0:X.clientHeight)||0};return(!l.value||w())&&await mn(),w()}function y(w,H){if(!H)return;const X=f.value.isPx?`${w}px`:SS(w,H);u.value!==X&&(p(X),n("update:size",X))}function C(w,H){const X=Gr({size:w,containerSize:H}),j=Gr({size:s.value,defaultSize:"0px",containerSize:H}),U=Gr({size:o.value,defaultSize:`${H}px`,containerSize:H});let ue=X;return ue=Math.max(ue,j),ue=Math.min(ue,U),ue}function h({startContainerSize:w,startSize:H,startPosition:X,endPosition:j}){const U=Gr({size:H,containerSize:w});return C(`${U+(j-X)}px`,w)}function P(w){n("moving",w);const H=g.value?h({startContainerSize:x.startContainerSize,startSize:x.startSize,startPosition:x.startPageX,endPosition:w.pageX}):h({startContainerSize:x.startContainerSize,startSize:x.startSize,startPosition:x.startPageY,endPosition:w.pageY});y(H,x.startContainerSize)}function N(w){Xn(window,"mousemove",P),Xn(window,"mouseup",N),Xn(window,"contextmenu",N),document.body.style.cursor="default",n("moveEnd",w)}async function $(w){n("moveStart",w),x.startPageX=w.pageX,x.startPageY=w.pageY,x.startContainerSize=await k(),x.startSize=u.value,On(window,"mousemove",P),On(window,"mouseup",N),On(window,"contextmenu",N),document.body.style.cursor=g.value?"col-resize":"row-resize"}function B(w){const{width:H,height:X}=w.contentRect;a.value=g.value?H:X}return ze(async()=>{const w=await k(),H=C(u.value,w);y(H,w)}),{prefixCls:c,classNames:O,isHorizontal:g,wrapperRef:l,onMoveStart:$,onTriggerResize:B,firstPaneStyles:_}}});function _S(e,n,t,r,i,s){const o=re("ResizeTrigger");return L(),fe(Iu(e.component),{ref:"wrapperRef",class:K(e.classNames)},{default:z(()=>[Q("div",{class:K([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-first`]),style:be(e.firstPaneStyles)},[ce(e.$slots,"first")],6),e.disabled?Pe("v-if",!0):(L(),fe(o,{key:0,"prefix-cls":`${e.prefixCls}-trigger`,direction:e.isHorizontal?"vertical":"horizontal",onMousedown:e.onMoveStart,onResize:e.onTriggerResize},{default:z(()=>[ce(e.$slots,"resize-trigger")]),icon:z(()=>[ce(e.$slots,"resize-trigger-icon")]),_:3},8,["prefix-cls","direction","onMousedown","onResize"])),Q("div",{class:K([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-second`])},[ce(e.$slots,"second")],2)]),_:3},8,["class"])}var Vo=ae(ES,[["render",_S]]);const TS=Object.assign(Vo,{install:(e,n)=>{tn(e,n);const t=nn(n);e.component(t+Vo.name,Vo)}}),kS=G({name:"IconDelete",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-delete`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),OS=["stroke-width","stroke-linecap","stroke-linejoin"],PS=Q("path",{d:"M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15"},null,-1),CS=[PS];function RS(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},CS,14,OS)}var Go=ae(kS,[["render",RS]]);const LS=Object.assign(Go,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Go.name,Go)}}),xS=G({name:"IconFile",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-file`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),wS=["stroke-width","stroke-linecap","stroke-linejoin"],IS=Q("path",{d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"},null,-1),AS=[IS];function BS(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},AS,14,wS)}var qo=ae(xS,[["render",BS]]);const NS=Object.assign(qo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+qo.name,qo)}}),DS=G({name:"IconCopy",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-copy`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),HS=["stroke-width","stroke-linecap","stroke-linejoin"],$S=Q("path",{d:"M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"},null,-1),MS=[$S];function FS(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},MS,14,HS)}var Jo=ae(DS,[["render",FS]]);const jS=Object.assign(Jo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Jo.name,Jo)}}),KS=G({name:"IconEdit",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-edit`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),WS=["stroke-width","stroke-linecap","stroke-linejoin"],zS=Q("path",{d:"m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"},null,-1),US=[zS];function VS(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},US,14,WS)}var Zo=ae(KS,[["render",VS]]);const GS=Object.assign(Zo,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Zo.name,Zo)}});function Yo(e){return Cn?utools.shellOpenExternal(e):window.open(e)}const qS="modulepreload",JS=function(e,n){return new URL(e,n).href},tc={},cr=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=JS(s,r),s in tc)return;tc[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const p=i[u];if(p.href===s&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":qS,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,p)=>{c.addEventListener("load",u),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())};var ZS=typeof global=="object"&&global&&global.Object===Object&&global;const $d=ZS;var YS=typeof self=="object"&&self&&self.Object===Object&&self,XS=$d||YS||Function("return this")();const Sn=XS;var QS=Sn.Symbol;const Rn=QS;var Md=Object.prototype,eE=Md.hasOwnProperty,nE=Md.toString,nr=Rn?Rn.toStringTag:void 0;function tE(e){var n=eE.call(e,nr),t=e[nr];try{e[nr]=void 0;var r=!0}catch{}var i=nE.call(e);return r&&(n?e[nr]=t:delete e[nr]),i}var rE=Object.prototype,iE=rE.toString;function oE(e){return iE.call(e)}var sE="[object Null]",aE="[object Undefined]",rc=Rn?Rn.toStringTag:void 0;function Gt(e){return e==null?e===void 0?aE:sE:rc&&rc in Object(e)?tE(e):oE(e)}function qt(e){return e!=null&&typeof e=="object"}var lE="[object Symbol]";function Fd(e){return typeof e=="symbol"||qt(e)&&Gt(e)==lE}function cE(e,n){for(var t=-1,r=e==null?0:e.length,i=Array(r);++t<r;)i[t]=n(e[t],t,e);return i}var uE=Array.isArray;const Jt=uE;var dE=1/0,ic=Rn?Rn.prototype:void 0,oc=ic?ic.toString:void 0;function jd(e){if(typeof e=="string")return e;if(Jt(e))return cE(e,jd)+"";if(Fd(e))return oc?oc.call(e):"";var n=e+"";return n=="0"&&1/e==-dE?"-0":n}var pE=/\s/;function fE(e){for(var n=e.length;n--&&pE.test(e.charAt(n)););return n}var mE=/^\s+/;function vE(e){return e&&e.slice(0,fE(e)+1).replace(mE,"")}function Hn(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var sc=0/0,gE=/^[-+]0x[0-9a-f]+$/i,hE=/^0b[01]+$/i,bE=/^0o[0-7]+$/i,yE=parseInt;function ac(e){if(typeof e=="number")return e;if(Fd(e))return sc;if(Hn(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Hn(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=vE(e);var t=hE.test(e);return t||bE.test(e)?yE(e.slice(2),t?2:8):gE.test(e)?sc:+e}var SE="[object AsyncFunction]",EE="[object Function]",_E="[object GeneratorFunction]",TE="[object Proxy]";function Kd(e){if(!Hn(e))return!1;var n=Gt(e);return n==EE||n==_E||n==SE||n==TE}var kE=Sn["__core-js_shared__"];const Xo=kE;var lc=function(){var e=/[^.]+$/.exec(Xo&&Xo.keys&&Xo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function OE(e){return!!lc&&lc in e}var PE=Function.prototype,CE=PE.toString;function bt(e){if(e!=null){try{return CE.call(e)}catch{}try{return e+""}catch{}}return""}var RE=/[\\^$.*+?()[\]{}|]/g,LE=/^\[object .+?Constructor\]$/,xE=Function.prototype,wE=Object.prototype,IE=xE.toString,AE=wE.hasOwnProperty,BE=RegExp("^"+IE.call(AE).replace(RE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function NE(e){if(!Hn(e)||OE(e))return!1;var n=Kd(e)?BE:LE;return n.test(bt(e))}function DE(e,n){return e==null?void 0:e[n]}function yt(e,n){var t=DE(e,n);return NE(t)?t:void 0}var HE=yt(Sn,"WeakMap");const As=HE;var cc=Object.create,$E=function(){function e(){}return function(n){if(!Hn(n))return{};if(cc)return cc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const ME=$E;function Wd(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var FE=function(){try{var e=yt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const uc=FE;function jE(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var KE=9007199254740991,WE=/^(?:0|[1-9]\d*)$/;function zE(e,n){var t=typeof e;return n=n??KE,!!n&&(t=="number"||t!="symbol"&&WE.test(e))&&e>-1&&e%1==0&&e<n}function zd(e,n,t){n=="__proto__"&&uc?uc(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function Ud(e,n){return e===n||e!==e&&n!==n}var UE=Object.prototype,VE=UE.hasOwnProperty;function Vd(e,n,t){var r=e[n];(!(VE.call(e,n)&&Ud(r,t))||t===void 0&&!(n in e))&&zd(e,n,t)}function zi(e,n,t,r){var i=!t;t||(t={});for(var s=-1,o=n.length;++s<o;){var a=n[s],l=r?r(t[a],e[a],a,t,e):void 0;l===void 0&&(l=e[a]),i?zd(t,a,l):Vd(t,a,l)}return t}var GE=9007199254740991;function Gd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=GE}function qd(e){return e!=null&&Gd(e.length)&&!Kd(e)}var qE=Object.prototype;function Ea(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||qE;return e===t}function JE(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var ZE="[object Arguments]";function dc(e){return qt(e)&&Gt(e)==ZE}var Jd=Object.prototype,YE=Jd.hasOwnProperty,XE=Jd.propertyIsEnumerable,QE=dc(function(){return arguments}())?dc:function(e){return qt(e)&&YE.call(e,"callee")&&!XE.call(e,"callee")};const Zd=QE;function e_(){return!1}var Yd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,pc=Yd&&typeof module=="object"&&module&&!module.nodeType&&module,n_=pc&&pc.exports===Yd,fc=n_?Sn.Buffer:void 0,t_=fc?fc.isBuffer:void 0,r_=t_||e_;const Xd=r_;var i_="[object Arguments]",o_="[object Array]",s_="[object Boolean]",a_="[object Date]",l_="[object Error]",c_="[object Function]",u_="[object Map]",d_="[object Number]",p_="[object Object]",f_="[object RegExp]",m_="[object Set]",v_="[object String]",g_="[object WeakMap]",h_="[object ArrayBuffer]",b_="[object DataView]",y_="[object Float32Array]",S_="[object Float64Array]",E_="[object Int8Array]",__="[object Int16Array]",T_="[object Int32Array]",k_="[object Uint8Array]",O_="[object Uint8ClampedArray]",P_="[object Uint16Array]",C_="[object Uint32Array]",we={};we[y_]=we[S_]=we[E_]=we[__]=we[T_]=we[k_]=we[O_]=we[P_]=we[C_]=!0;we[i_]=we[o_]=we[h_]=we[s_]=we[b_]=we[a_]=we[l_]=we[c_]=we[u_]=we[d_]=we[p_]=we[f_]=we[m_]=we[v_]=we[g_]=!1;function R_(e){return qt(e)&&Gd(e.length)&&!!we[Gt(e)]}function _a(e){return function(n){return e(n)}}var Qd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,br=Qd&&typeof module=="object"&&module&&!module.nodeType&&module,L_=br&&br.exports===Qd,Qo=L_&&$d.process,x_=function(){try{var e=br&&br.require&&br.require("util").types;return e||Qo&&Qo.binding&&Qo.binding("util")}catch{}}();const $t=x_;var mc=$t&&$t.isTypedArray,w_=mc?_a(mc):R_;const I_=w_;var A_=Object.prototype,B_=A_.hasOwnProperty;function ep(e,n){var t=Jt(e),r=!t&&Zd(e),i=!t&&!r&&Xd(e),s=!t&&!r&&!i&&I_(e),o=t||r||i||s,a=o?JE(e.length,String):[],l=a.length;for(var c in e)(n||B_.call(e,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||zE(c,l)))&&a.push(c);return a}function np(e,n){return function(t){return e(n(t))}}var N_=np(Object.keys,Object);const D_=N_;var H_=Object.prototype,$_=H_.hasOwnProperty;function M_(e){if(!Ea(e))return D_(e);var n=[];for(var t in Object(e))$_.call(e,t)&&t!="constructor"&&n.push(t);return n}function Ta(e){return qd(e)?ep(e):M_(e)}function F_(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var j_=Object.prototype,K_=j_.hasOwnProperty;function W_(e){if(!Hn(e))return F_(e);var n=Ea(e),t=[];for(var r in e)r=="constructor"&&(n||!K_.call(e,r))||t.push(r);return t}function ka(e){return qd(e)?ep(e,!0):W_(e)}var z_=yt(Object,"create");const xr=z_;function U_(){this.__data__=xr?xr(null):{},this.size=0}function V_(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var G_="__lodash_hash_undefined__",q_=Object.prototype,J_=q_.hasOwnProperty;function Z_(e){var n=this.__data__;if(xr){var t=n[e];return t===G_?void 0:t}return J_.call(n,e)?n[e]:void 0}var Y_=Object.prototype,X_=Y_.hasOwnProperty;function Q_(e){var n=this.__data__;return xr?n[e]!==void 0:X_.call(n,e)}var eT="__lodash_hash_undefined__";function nT(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=xr&&n===void 0?eT:n,this}function ut(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ut.prototype.clear=U_;ut.prototype.delete=V_;ut.prototype.get=Z_;ut.prototype.has=Q_;ut.prototype.set=nT;function tT(){this.__data__=[],this.size=0}function Ui(e,n){for(var t=e.length;t--;)if(Ud(e[t][0],n))return t;return-1}var rT=Array.prototype,iT=rT.splice;function oT(e){var n=this.__data__,t=Ui(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():iT.call(n,t,1),--this.size,!0}function sT(e){var n=this.__data__,t=Ui(n,e);return t<0?void 0:n[t][1]}function aT(e){return Ui(this.__data__,e)>-1}function lT(e,n){var t=this.__data__,r=Ui(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function Mn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Mn.prototype.clear=tT;Mn.prototype.delete=oT;Mn.prototype.get=sT;Mn.prototype.has=aT;Mn.prototype.set=lT;var cT=yt(Sn,"Map");const wr=cT;function uT(){this.size=0,this.__data__={hash:new ut,map:new(wr||Mn),string:new ut}}function dT(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Vi(e,n){var t=e.__data__;return dT(n)?t[typeof n=="string"?"string":"hash"]:t.map}function pT(e){var n=Vi(this,e).delete(e);return this.size-=n?1:0,n}function fT(e){return Vi(this,e).get(e)}function mT(e){return Vi(this,e).has(e)}function vT(e,n){var t=Vi(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function Zt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Zt.prototype.clear=uT;Zt.prototype.delete=pT;Zt.prototype.get=fT;Zt.prototype.has=mT;Zt.prototype.set=vT;function gT(e){return e==null?"":jd(e)}function Gi(e,n){for(var t=-1,r=n.length,i=e.length;++t<r;)e[i+t]=n[t];return e}var vc=Rn?Rn.isConcatSpreadable:void 0;function hT(e){return Jt(e)||Zd(e)||!!(vc&&e&&e[vc])}function tp(e,n,t,r,i){var s=-1,o=e.length;for(t||(t=hT),i||(i=[]);++s<o;){var a=e[s];n>0&&t(a)?n>1?tp(a,n-1,t,r,i):Gi(i,a):r||(i[i.length]=a)}return i}var bT=np(Object.getPrototypeOf,Object);const rp=bT;function yT(){this.__data__=new Mn,this.size=0}function ST(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function ET(e){return this.__data__.get(e)}function _T(e){return this.__data__.has(e)}var TT=200;function kT(e,n){var t=this.__data__;if(t instanceof Mn){var r=t.__data__;if(!wr||r.length<TT-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Zt(r)}return t.set(e,n),this.size=t.size,this}function Yt(e){var n=this.__data__=new Mn(e);this.size=n.size}Yt.prototype.clear=yT;Yt.prototype.delete=ST;Yt.prototype.get=ET;Yt.prototype.has=_T;Yt.prototype.set=kT;function OT(e,n){return e&&zi(n,Ta(n),e)}function PT(e,n){return e&&zi(n,ka(n),e)}var ip=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gc=ip&&typeof module=="object"&&module&&!module.nodeType&&module,CT=gc&&gc.exports===ip,hc=CT?Sn.Buffer:void 0,bc=hc?hc.allocUnsafe:void 0;function RT(e,n){if(n)return e.slice();var t=e.length,r=bc?bc(t):new e.constructor(t);return e.copy(r),r}function LT(e,n){for(var t=-1,r=e==null?0:e.length,i=0,s=[];++t<r;){var o=e[t];n(o,t,e)&&(s[i++]=o)}return s}function op(){return[]}var xT=Object.prototype,wT=xT.propertyIsEnumerable,yc=Object.getOwnPropertySymbols,IT=yc?function(e){return e==null?[]:(e=Object(e),LT(yc(e),function(n){return wT.call(e,n)}))}:op;const Oa=IT;function AT(e,n){return zi(e,Oa(e),n)}var BT=Object.getOwnPropertySymbols,NT=BT?function(e){for(var n=[];e;)Gi(n,Oa(e)),e=rp(e);return n}:op;const sp=NT;function DT(e,n){return zi(e,sp(e),n)}function ap(e,n,t){var r=n(e);return Jt(e)?r:Gi(r,t(e))}function HT(e){return ap(e,Ta,Oa)}function $T(e){return ap(e,ka,sp)}var MT=yt(Sn,"DataView");const Bs=MT;var FT=yt(Sn,"Promise");const Ns=FT;var jT=yt(Sn,"Set");const Ds=jT;var Sc="[object Map]",KT="[object Object]",Ec="[object Promise]",_c="[object Set]",Tc="[object WeakMap]",kc="[object DataView]",WT=bt(Bs),zT=bt(wr),UT=bt(Ns),VT=bt(Ds),GT=bt(As),rt=Gt;(Bs&&rt(new Bs(new ArrayBuffer(1)))!=kc||wr&&rt(new wr)!=Sc||Ns&&rt(Ns.resolve())!=Ec||Ds&&rt(new Ds)!=_c||As&&rt(new As)!=Tc)&&(rt=function(e){var n=Gt(e),t=n==KT?e.constructor:void 0,r=t?bt(t):"";if(r)switch(r){case WT:return kc;case zT:return Sc;case UT:return Ec;case VT:return _c;case GT:return Tc}return n});const Pa=rt;var qT=Object.prototype,JT=qT.hasOwnProperty;function ZT(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&JT.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var YT=Sn.Uint8Array;const Oc=YT;function Ca(e){var n=new e.constructor(e.byteLength);return new Oc(n).set(new Oc(e)),n}function XT(e,n){var t=n?Ca(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var QT=/\w*$/;function ek(e){var n=new e.constructor(e.source,QT.exec(e));return n.lastIndex=e.lastIndex,n}var Pc=Rn?Rn.prototype:void 0,Cc=Pc?Pc.valueOf:void 0;function nk(e){return Cc?Object(Cc.call(e)):{}}function tk(e,n){var t=n?Ca(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var rk="[object Boolean]",ik="[object Date]",ok="[object Map]",sk="[object Number]",ak="[object RegExp]",lk="[object Set]",ck="[object String]",uk="[object Symbol]",dk="[object ArrayBuffer]",pk="[object DataView]",fk="[object Float32Array]",mk="[object Float64Array]",vk="[object Int8Array]",gk="[object Int16Array]",hk="[object Int32Array]",bk="[object Uint8Array]",yk="[object Uint8ClampedArray]",Sk="[object Uint16Array]",Ek="[object Uint32Array]";function _k(e,n,t){var r=e.constructor;switch(n){case dk:return Ca(e);case rk:case ik:return new r(+e);case pk:return XT(e,t);case fk:case mk:case vk:case gk:case hk:case bk:case yk:case Sk:case Ek:return tk(e,t);case ok:return new r;case sk:case ck:return new r(e);case ak:return ek(e);case lk:return new r;case uk:return nk(e)}}function Tk(e){return typeof e.constructor=="function"&&!Ea(e)?ME(rp(e)):{}}var kk="[object Map]";function Ok(e){return qt(e)&&Pa(e)==kk}var Rc=$t&&$t.isMap,Pk=Rc?_a(Rc):Ok;const Ck=Pk;var Rk="[object Set]";function Lk(e){return qt(e)&&Pa(e)==Rk}var Lc=$t&&$t.isSet,xk=Lc?_a(Lc):Lk;const wk=xk;var Ik=1,Ak=2,Bk=4,lp="[object Arguments]",Nk="[object Array]",Dk="[object Boolean]",Hk="[object Date]",$k="[object Error]",cp="[object Function]",Mk="[object GeneratorFunction]",Fk="[object Map]",jk="[object Number]",up="[object Object]",Kk="[object RegExp]",Wk="[object Set]",zk="[object String]",Uk="[object Symbol]",Vk="[object WeakMap]",Gk="[object ArrayBuffer]",qk="[object DataView]",Jk="[object Float32Array]",Zk="[object Float64Array]",Yk="[object Int8Array]",Xk="[object Int16Array]",Qk="[object Int32Array]",eO="[object Uint8Array]",nO="[object Uint8ClampedArray]",tO="[object Uint16Array]",rO="[object Uint32Array]",Le={};Le[lp]=Le[Nk]=Le[Gk]=Le[qk]=Le[Dk]=Le[Hk]=Le[Jk]=Le[Zk]=Le[Yk]=Le[Xk]=Le[Qk]=Le[Fk]=Le[jk]=Le[up]=Le[Kk]=Le[Wk]=Le[zk]=Le[Uk]=Le[eO]=Le[nO]=Le[tO]=Le[rO]=!0;Le[$k]=Le[cp]=Le[Vk]=!1;function si(e,n,t,r,i,s){var o,a=n&Ik,l=n&Ak,c=n&Bk;if(t&&(o=i?t(e,r,i,s):t(e)),o!==void 0)return o;if(!Hn(e))return e;var u=Jt(e);if(u){if(o=ZT(e),!a)return Wd(e,o)}else{var p=Pa(e),f=p==cp||p==Mk;if(Xd(e))return RT(e,a);if(p==up||p==lp||f&&!i){if(o=l||f?{}:Tk(e),!a)return l?DT(e,PT(o,e)):AT(e,OT(o,e))}else{if(!Le[p])return i?e:{};o=_k(e,p,a)}}s||(s=new Yt);var g=s.get(e);if(g)return g;s.set(e,o),wk(e)?e.forEach(function(x){o.add(si(x,n,t,x,e,s))}):Ck(e)&&e.forEach(function(x,k){o.set(k,si(x,n,t,k,e,s))});var O=c?l?$T:HT:l?ka:Ta,_=u?void 0:O(e);return jE(_||e,function(x,k){_&&(k=x,x=e[k]),Vd(o,k,si(x,n,t,k,e,s))}),o}var iO=1,oO=4;function sO(e){return si(e,iO|oO)}function aO(){var e=arguments.length;if(!e)return[];for(var n=Array(e-1),t=arguments[0],r=e;r--;)n[r-1]=arguments[r];return Gi(Jt(t)?Wd(t):[t],tp(n,1))}var lO=function(){return Sn.Date.now()};const es=lO;var cO="Expected a function",uO=Math.max,dO=Math.min;function dp(e,n,t){var r,i,s,o,a,l,c=0,u=!1,p=!1,f=!0;if(typeof e!="function")throw new TypeError(cO);n=ac(n)||0,Hn(t)&&(u=!!t.leading,p="maxWait"in t,s=p?uO(ac(t.maxWait)||0,n):s,f="trailing"in t?!!t.trailing:f);function g(N){var $=r,B=i;return r=i=void 0,c=N,o=e.apply(B,$),o}function O(N){return c=N,a=setTimeout(k,n),u?g(N):o}function _(N){var $=N-l,B=N-c,w=n-$;return p?dO(w,s-B):w}function x(N){var $=N-l,B=N-c;return l===void 0||$>=n||$<0||p&&B>=s}function k(){var N=es();if(x(N))return y(N);a=setTimeout(k,_(N))}function y(N){return a=void 0,f&&r?g(N):(r=i=void 0,o)}function C(){a!==void 0&&clearTimeout(a),c=0,r=l=i=a=void 0}function h(){return a===void 0?o:y(es())}function P(){var N=es(),$=x(N);if(r=arguments,i=this,l=N,$){if(a===void 0)return O(l);if(p)return clearTimeout(a),a=setTimeout(k,n),g(l)}return a===void 0&&(a=setTimeout(k,n)),o}return P.cancel=C,P.flush=h,P}var pO="Expected a function";function fO(e,n,t){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(pO);return Hn(t)&&(r="leading"in t?!!t.leading:r,i="trailing"in t?!!t.trailing:i),dp(e,n,{leading:r,maxWait:n,trailing:i})}var mO=0;function vO(e){var n=++mO;return gT(e)+n}const Hs=bO();async function gO(e,n){const{electron:t,Buffer:r,require:i,vm:s}=await cr(()=>Promise.resolve().then(()=>qC),void 0,import.meta.url),o={console:pp(n),fetch:fetch.bind(window),utools:Hs,electron:t,Buffer:r,require:i};try{s.createContext(o),s.runInContext(`(async function(){
${e}
})()`,o).catch(a=>{n&&n(null,[a])})}catch(a){n&&n(null,[a])}}function hO(e,n){try{const t=new Function("console","utools","globalThis",`(async function(){
try{${e}}catch(error){console.error(error)}
})()`),r=Object.assign({},globalThis);r.utools=Hs,t(pp(n),Hs,r)}catch(t){n&&n(null,[t])}}function pp(e){return{log:(...n)=>e&&e(n),error:(...n)=>e&&e(null,n),warn:(...n)=>e&&e(null,null,n),info:(...n)=>e&&e(null,null,null,n)}}function bO(){if(!Cn)return{};const e=Object.assign({},sO(utools));return aO(["db","dbStorage","removeFeature","setFeature","onDbPull"],["fetchUserServerTemporaryToken","openPayment","fetchUserPayments"],["onPluginEnter","onPluginOut","createBrowserWindow"]).forEach(i=>{delete e[i]}),Object.freeze(e),e}const fp=ua("CodeSrore",{state:()=>({id:0,code:"",messages:[],env:Cn?An("env")||"node":"browser",historys:[],mode:An("mode")||"ontime"}),getters:{codeWithId:e=>`code/${e.id}`,currentEnv:e=>e.env==="browser"?"浏览器":"Node.js",currentMode:e=>e.mode==="ontime"?"即时执行":"手动触发"},actions:{init(){const e=An("lastCodeId")||0;this.loadCode(e)},newCode(){this.id!==0&&kn.success("成功创建新代码片段"),this.clearMessages(),this.id=new Date().getTime(),this.code=An("lastCodeId")?"":'console.log("Hello, World!")',In(this.codeWithId,this.code),In("lastCodeId",this.id)},loadCode(e){const n=An(`code/${e}`);if(da(n)==="Null")return this.newCode();this.id=e,this.code=n},handleCodeChange(e){this.code=e,In(this.codeWithId,this.code),this.mode==="ontime"&&this.execCode()},pushMessage(e){e&&this.messages.push(e)},clearMessages(){this.messages=[]},changeEnv(){if(!Cn)return kn.warning("当前环境不支持切换运行环境");this.env=this.env==="browser"?"node":"browser",this.env==="browser"?In("env","browser"):sr("env")},changeMode(){this.mode=this.mode==="manual"?"ontime":"manual",this.mode==="manual"?In("mode","manual"):sr("mode")},loadHistorys(){const e=Rs("code/");if(!e||!e.length)return;e.sort((t,r)=>parseInt(t._id.split("/")[1])-parseInt(r._id.split("/")[1])),e.splice(0,e.length-25).forEach(t=>sr(t._id)),this.historys=e.map(t=>({id:t._id,timeStamp:parseInt(t._id.split("/")[1]),code:t.data}))},readHistory(e){this.loadCode(e),In("lastCodeId",this.id)},emptyHistory(){this.historys=this.historys.filter(e=>(e.id,this.codeWithId,e.id===this.codeWithId)),Rs("code/").forEach(e=>e._id!==this.codeWithId&&sr(e._id)),kn.success("清空历史记录成功")},execCode:fO(function(){if(!this.code)return kn.warning("当前代码为空");const e=(n,t)=>{const r=vO(),i=new Date().getTime();n&&(n!=null&&n.length)&&this.pushMessage({id:r,timeStamp:i,type:"log",content:n}),t&&this.pushMessage({id:r,timeStamp:i,type:"error",content:t})};this.env==="browser"?hO(this.code,e):gO(this.code,e)},350,{leading:!0})}});function $s(e){const n=window.matchMedia(e),t=V(n.matches),r=i=>{t.value=i.matches};return n.addEventListener("change",r),mt(()=>{n.removeEventListener("change",r)}),t}function yO(e){const n=$s("(prefers-color-scheme: dark)"),t=$s("(prefers-color-scheme: light)");return ze(()=>bi(n.value?"dark":"light")),Ce(n,r=>{bi(r?"dark":"light"),e&&e(r?"dark":"light")}),[n,t]}function bi(e){if(e==="dark")document.body.classList.add("dark"),document.body.setAttribute("arco-theme","dark");else if(e==="light")document.body.classList.remove("dark"),document.body.removeAttribute("arco-theme");else{const[n]=yO();bi(n.value?"dark":"light")}return null}const Ra=ua("setting",{state:()=>({theme:An("setting/theme")||"default"}),getters:{isDark:({theme:e})=>{const n=$s("(prefers-color-scheme: dark)");return e==="dark"||e==="default"&&n.value}},actions:{initSetting(){this.setTheme(this.theme)},setTheme(e){this.theme=e,e==="default"?sr(xc("theme")):In(xc("theme"),e),bi(e)}}});function xc(e){return`setting/${e}`}var dt;(function(e){e.start="/**",e.nostart="/***",e.delim="*",e.end="*/"})(dt||(dt={}));function SO(e){return/^\s+$/.test(e)}function EO(e){const n=e.match(/\r+$/);return n==null?["",e]:[e.slice(-n[0].length),e.slice(0,-n[0].length)]}function wt(e){const n=e.match(/^\s+/);return n==null?["",e]:[e.slice(0,n[0].length),e.slice(n[0].length)]}function _O(e){return e.split(/\n/)}function TO(e={}){return Object.assign({tag:"",name:"",type:"",optional:!1,description:"",problems:[],source:[]},e)}function kO(e={}){return Object.assign({start:"",delimiter:"",postDelimiter:"",tag:"",postTag:"",name:"",postName:"",type:"",postType:"",description:"",end:"",lineEnd:""},e)}const OO=/^@\S+/;function PO({fence:e="```"}={}){const n=CO(e),t=(r,i)=>n(r)?!i:i;return function(i){const s=[[]];let o=!1;for(const a of i)OO.test(a.tokens.description)&&!o?s.push([a]):s[s.length-1].push(a),o=t(a.tokens.description,o);return s}}function CO(e){return typeof e=="string"?n=>n.split(e).length%2===0:e}function RO({startLine:e=0,markers:n=dt}={}){let t=null,r=e;return function(s){let o=s;const a=kO();if([a.lineEnd,o]=EO(o),[a.start,o]=wt(o),t===null&&o.startsWith(n.start)&&!o.startsWith(n.nostart)&&(t=[],a.delimiter=o.slice(0,n.start.length),o=o.slice(n.start.length),[a.postDelimiter,o]=wt(o)),t===null)return r++,null;const l=o.trimRight().endsWith(n.end);if(a.delimiter===""&&o.startsWith(n.delim)&&!o.startsWith(n.end)&&(a.delimiter=n.delim,o=o.slice(n.delim.length),[a.postDelimiter,o]=wt(o)),l){const c=o.trimRight();a.end=o.slice(c.length-n.end.length),o=c.slice(0,-n.end.length)}if(a.description=o,t.push({number:r,source:s,tokens:a}),r++,l){const c=t.slice();return t=null,c}return null}}function LO({tokenizers:e}){return function(t){var r;let i=TO({source:t});for(const s of e)if(i=s(i),!((r=i.problems[i.problems.length-1])===null||r===void 0)&&r.critical)break;return i}}function xO(){return e=>{const{tokens:n}=e.source[0],t=n.description.match(/\s*(@(\S+))(\s*)/);return t===null?(e.problems.push({code:"spec:tag:prefix",message:'tag should start with "@" symbol',line:e.source[0].number,critical:!0}),e):(n.tag=t[1],n.postTag=t[3],n.description=n.description.slice(t[0].length),e.tag=t[2],e)}}function wO(e="compact"){const n=AO(e);return t=>{let r=0,i=[];for(const[a,{tokens:l}]of t.source.entries()){let c="";if(a===0&&l.description[0]!=="{")return t;for(const u of l.description)if(u==="{"&&r++,u==="}"&&r--,c+=u,r===0)break;if(i.push([l,c]),r===0)break}if(r!==0)return t.problems.push({code:"spec:type:unpaired-curlies",message:"unpaired curlies",line:t.source[0].number,critical:!0}),t;const s=[],o=i[0][0].postDelimiter.length;for(const[a,[l,c]]of i.entries())l.type=c,a>0&&(l.type=l.postDelimiter.slice(o)+c,l.postDelimiter=l.postDelimiter.slice(0,o)),[l.postType,l.description]=wt(l.description.slice(c.length)),s.push(l.type);return s[0]=s[0].slice(1),s[s.length-1]=s[s.length-1].slice(0,-1),t.type=n(s),t}}const IO=e=>e.trim();function AO(e){return e==="compact"?n=>n.map(IO).join(""):e==="preserve"?n=>n.join(`
`):e}const BO=e=>e&&e.startsWith('"')&&e.endsWith('"');function NO(){const e=(n,{tokens:t},r)=>t.type===""?n:r;return n=>{const{tokens:t}=n.source[n.source.reduce(e,0)],r=t.description.trimLeft(),i=r.split('"');if(i.length>1&&i[0]===""&&i.length%2===1)return n.name=i[1],t.name=`"${i[1]}"`,[t.postName,t.description]=wt(r.slice(t.name.length)),n;let s=0,o="",a=!1,l;for(const u of r){if(s===0&&SO(u))break;u==="["&&s++,u==="]"&&s--,o+=u}if(s!==0)return n.problems.push({code:"spec:name:unpaired-brackets",message:"unpaired brackets",line:n.source[0].number,critical:!0}),n;const c=o;if(o[0]==="["&&o[o.length-1]==="]"){a=!0,o=o.slice(1,-1);const u=o.split("=");if(o=u[0].trim(),u[1]!==void 0&&(l=u.slice(1).join("=").trim()),o==="")return n.problems.push({code:"spec:name:empty-name",message:"empty name",line:n.source[0].number,critical:!0}),n;if(l==="")return n.problems.push({code:"spec:name:empty-default",message:"empty default value",line:n.source[0].number,critical:!0}),n;if(!BO(l)&&/=(?!>)/.test(l))return n.problems.push({code:"spec:name:invalid-default",message:"invalid default value syntax",line:n.source[0].number,critical:!0}),n}return n.optional=a,n.name=o,t.name=c,l!==void 0&&(n.default=l),[t.postName,t.description]=wt(r.slice(t.name.length)),n}}function DO(e="compact",n=dt){const t=mp(e);return r=>(r.description=t(r.source,n),r)}function mp(e){return e==="compact"?HO:e==="preserve"?FO:e}function HO(e,n=dt){return e.map(({tokens:{description:t}})=>t.trim()).filter(t=>t!=="").join(" ")}const $O=(e,{tokens:n},t)=>n.type===""?e:t,MO=({tokens:e})=>(e.delimiter===""?e.start:e.postDelimiter.slice(1))+e.description;function FO(e,n=dt){if(e.length===0)return"";e[0].tokens.description===""&&e[0].tokens.delimiter===n.start&&(e=e.slice(1));const t=e[e.length-1];return t!==void 0&&t.tokens.description===""&&t.tokens.end.endsWith(n.end)&&(e=e.slice(0,-1)),e=e.slice(e.reduce($O,0)),e.map(MO).join(`
`)}function jO({startLine:e=0,fence:n="```",spacing:t="compact",markers:r=dt,tokenizers:i=[xO(),wO(t),NO(),DO(t)]}={}){if(e<0||e%1>0)throw new Error("Invalid startLine");const s=RO({startLine:e,markers:r}),o=PO({fence:n}),a=LO({tokenizers:i}),l=mp(t);return function(c){const u=[];for(const p of _O(c)){const f=s(p);if(f===null)continue;const g=o(f),O=g.slice(1).map(a);u.push({description:l(g[0],r),tags:O,source:f,problems:O.reduce((_,x)=>_.concat(x.problems),[])})}return u}}globalThis&&globalThis.__rest;globalThis&&globalThis.__rest;globalThis&&globalThis.__rest;function KO(e,n={}){return jO(n)(e)}const WO=ua("script",{state:()=>({name:"",description:"",tags:[]}),actions:{newScript(e){const n=yv(8);return In(`script/${n}`,{name:this.name,description:this.description,code:e}),kn.success("保存成功"),!0},parseCommentBlock(e){const n=KO(e);if(n.length){const t=n[0],r=t.tags.length?t.tags.map(i=>({name:t.description?t.description:i.tag==="name"?[i.name,i.description].join(" "):"",description:i.tag==="description"?[i.name,i.description].join(" "):""}))[0]:{name:t.description||""};this.$patch(r)}}}}),zO=G({__name:"App",setup(e){return Ra().initSetting(),(t,r)=>{const i=re("router-view");return L(),fe(i,null,{default:z(({Component:s})=>[(L(),fe(Vf,{include:["Console"]},[(L(),fe(Iu(s)))],1024))]),_:1})}}});/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const kt=typeof window<"u";function UO(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function ns(e,n){const t={};for(const r in n){const i=n[r];t[r]=yn(i)?i.map(e):e(i)}return t}const yr=()=>{},yn=Array.isArray,VO=/\/$/,GO=e=>e.replace(VO,"");function ts(e,n,t="/"){let r,i={},s="",o="";const a=n.indexOf("#");let l=n.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=n.slice(0,l),s=n.slice(l+1,a>-1?a:n.length),i=e(s)),a>-1&&(r=r||n.slice(0,a),o=n.slice(a,n.length)),r=YO(r??n,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function qO(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function wc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function JO(e,n,t){const r=n.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Mt(n.matched[r],t.matched[i])&&vp(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Mt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function vp(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!ZO(e[t],n[t]))return!1;return!0}function ZO(e,n){return yn(e)?Ic(e,n):yn(n)?Ic(n,e):e===n}function Ic(e,n){return yn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function YO(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ir;(function(e){e.pop="pop",e.push="push"})(Ir||(Ir={}));var Sr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Sr||(Sr={}));function XO(e){if(!e)if(kt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),GO(e)}const QO=/^[^#]+#/;function eP(e,n){return e.replace(QO,"#")+n}function nP(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const qi=()=>({left:window.pageXOffset,top:window.pageYOffset});function tP(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=nP(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ac(e,n){return(history.state?history.state.position-n:-1)+e}const Ms=new Map;function rP(e,n){Ms.set(e,n)}function iP(e){const n=Ms.get(e);return Ms.delete(e),n}let oP=()=>location.protocol+"//"+location.host;function gp(e,n){const{pathname:t,search:r,hash:i}=n,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),wc(l,"")}return wc(t,e)+r+i}function sP(e,n,t,r){let i=[],s=[],o=null;const a=({state:f})=>{const g=gp(e,location),O=t.value,_=n.value;let x=0;if(f){if(t.value=g,n.value=f,o&&o===O){o=null;return}x=_?f.position-_.position:0}else r(g);i.forEach(k=>{k(t.value,O,{delta:x,type:Ir.pop,direction:x?x>0?Sr.forward:Sr.back:Sr.unknown})})};function l(){o=t.value}function c(f){i.push(f);const g=()=>{const O=i.indexOf(f);O>-1&&i.splice(O,1)};return s.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(Oe({},f.state,{scroll:qi()}),"")}function p(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:p}}function Bc(e,n,t,r=!1,i=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:i?qi():null}}function aP(e){const{history:n,location:t}=window,r={value:gp(e,t)},i={value:n.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const p=e.indexOf("#"),f=p>-1?(t.host&&document.querySelector("base")?e:e.slice(p))+l:oP()+e+l;try{n[u?"replaceState":"pushState"](c,"",f),i.value=c}catch{t[u?"replace":"assign"](f)}}function o(l,c){const u=Oe({},n.state,Bc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=Oe({},i.value,n.state,{forward:l,scroll:qi()});s(u.current,u,!0);const p=Oe({},Bc(r.value,l,null),{position:u.position+1},c);s(l,p,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function lP(e){e=XO(e);const n=aP(e),t=sP(e,n.state,n.location,n.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Oe({location:"",base:e,go:r,createHref:eP.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function cP(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),lP(e)}function uP(e){return typeof e=="string"||e&&typeof e=="object"}function hp(e){return typeof e=="string"||typeof e=="symbol"}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bp=Symbol("");var Nc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Nc||(Nc={}));function Ft(e,n){return Oe(new Error,{type:e,[bp]:!0},n)}function Ln(e,n){return e instanceof Error&&bp in e&&(n==null||!!(e.type&n))}const Dc="[^/]+?",dP={sensitive:!1,strict:!1,start:!0,end:!0},pP=/[.+*?^${}()[\]/\\]/g;function fP(e,n){const t=Oe({},dP,n),r=[];let i=t.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let p=0;p<c.length;p++){const f=c[p];let g=40+(t.sensitive?.25:0);if(f.type===0)p||(i+="/"),i+=f.value.replace(pP,"\\$&"),g+=40;else if(f.type===1){const{value:O,repeatable:_,optional:x,regexp:k}=f;s.push({name:O,repeatable:_,optional:x});const y=k||Dc;if(y!==Dc){g+=10;try{new RegExp(`(${y})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${O}" (${y}): `+h.message)}}let C=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;p||(C=x&&c.length<2?`(?:/${C})`:"/"+C),x&&(C+="?"),i+=C,g+=20,x&&(g+=-8),_&&(g+=-20),y===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),p={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",O=s[f-1];p[O.name]=g&&O.repeatable?g.split("/"):g}return p}function l(c){let u="",p=!1;for(const f of e){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:O,repeatable:_,optional:x}=g,k=O in c?c[O]:"";if(yn(k)&&!_)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const y=yn(k)?k.join("/"):k;if(!y)if(x)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function mP(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function vP(e,n){let t=0;const r=e.score,i=n.score;for(;t<r.length&&t<i.length;){const s=mP(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(Hc(r))return 1;if(Hc(i))return-1}return i.length-r.length}function Hc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const gP={type:0,value:""},hP=/[a-zA-Z0-9_]/;function bP(e){if(!e)return[[]];if(e==="/")return[[gP]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(g){throw new Error(`ERR (${t})/"${c}": ${g}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function p(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&p(),o()):l===":"?(p(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:hP.test(l)?f():(p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${c}"`),p(),o(),i}function yP(e,n,t){const r=fP(bP(e.path),t),i=Oe(r,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function SP(e,n){const t=[],r=new Map;n=Fc({strict:!1,end:!0,sensitive:!1},n);function i(u){return r.get(u)}function s(u,p,f){const g=!f,O=EP(u);O.aliasOf=f&&f.record;const _=Fc(n,u),x=[O];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const h of C)x.push(Oe({},O,{components:f?f.record.components:O.components,path:h,aliasOf:f?f.record:O}))}let k,y;for(const C of x){const{path:h}=C;if(p&&h[0]!=="/"){const P=p.record.path,N=P[P.length-1]==="/"?"":"/";C.path=p.record.path+(h&&N+h)}if(k=yP(C,p,_),f?f.alias.push(k):(y=y||k,y!==k&&y.alias.push(k),g&&u.name&&!Mc(k)&&o(u.name)),O.children){const P=O.children;for(let N=0;N<P.length;N++)s(P[N],k,f&&f.children[N])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return y?()=>{o(y)}:yr}function o(u){if(hp(u)){const p=r.get(u);p&&(r.delete(u),t.splice(t.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=t.indexOf(u);p>-1&&(t.splice(p,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let p=0;for(;p<t.length&&vP(u,t[p])>=0&&(u.record.path!==t[p].record.path||!yp(u,t[p]));)p++;t.splice(p,0,u),u.record.name&&!Mc(u)&&r.set(u.record.name,u)}function c(u,p){let f,g={},O,_;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Ft(1,{location:u});_=f.record.name,g=Oe($c(p.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&$c(u.params,f.keys.map(y=>y.name))),O=f.stringify(g)}else if("path"in u)O=u.path,f=t.find(y=>y.re.test(O)),f&&(g=f.parse(O),_=f.record.name);else{if(f=p.name?r.get(p.name):t.find(y=>y.re.test(p.path)),!f)throw Ft(1,{location:u,currentLocation:p});_=f.record.name,g=Oe({},p.params,u.params),O=f.stringify(g)}const x=[];let k=f;for(;k;)x.unshift(k.record),k=k.parent;return{name:_,path:O,params:g,matched:x,meta:TP(x)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function $c(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function EP(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_P(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _P(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="boolean"?t:t[r];return n}function Mc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function TP(e){return e.reduce((n,t)=>Oe(n,t.meta),{})}function Fc(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function yp(e,n){return n.children.some(t=>t===e||yp(e,t))}const Sp=/#/g,kP=/&/g,OP=/\//g,PP=/=/g,CP=/\?/g,Ep=/\+/g,RP=/%5B/g,LP=/%5D/g,_p=/%5E/g,xP=/%60/g,Tp=/%7B/g,wP=/%7C/g,kp=/%7D/g,IP=/%20/g;function La(e){return encodeURI(""+e).replace(wP,"|").replace(RP,"[").replace(LP,"]")}function AP(e){return La(e).replace(Tp,"{").replace(kp,"}").replace(_p,"^")}function Fs(e){return La(e).replace(Ep,"%2B").replace(IP,"+").replace(Sp,"%23").replace(kP,"%26").replace(xP,"`").replace(Tp,"{").replace(kp,"}").replace(_p,"^")}function BP(e){return Fs(e).replace(PP,"%3D")}function NP(e){return La(e).replace(Sp,"%23").replace(CP,"%3F")}function DP(e){return e==null?"":NP(e).replace(OP,"%2F")}function yi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function HP(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Ep," "),o=s.indexOf("="),a=yi(o<0?s:s.slice(0,o)),l=o<0?null:yi(s.slice(o+1));if(a in n){let c=n[a];yn(c)||(c=n[a]=[c]),c.push(l)}else n[a]=l}return n}function jc(e){let n="";for(let t in e){const r=e[t];if(t=BP(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(yn(r)?r.map(s=>s&&Fs(s)):[r&&Fs(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function $P(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=yn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return n}const MP=Symbol(""),Kc=Symbol(""),Ji=Symbol(""),Op=Symbol(""),js=Symbol("");function tr(){let e=[];function n(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function Vn(e,n,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=p=>{p===!1?a(Ft(4,{from:t,to:n})):p instanceof Error?a(p):uP(p)?a(Ft(2,{from:n,to:p})):(s&&r.enterCallbacks[i]===s&&typeof p=="function"&&s.push(p),o())},c=e.call(r&&r.instances[i],n,t,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(p=>a(p))})}function rs(e,n,t,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(n!=="beforeRouteEnter"&&!s.instances[o]))if(FP(a)){const c=(a.__vccOpts||a)[n];c&&i.push(Vn(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=UO(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[n];return f&&Vn(f,t,r,s,o)()}))}}return i}function FP(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wc(e){const n=Ae(Ji),t=Ae(Op),r=E(()=>n.resolve(ve(e.to))),i=E(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],p=t.matched;if(!u||!p.length)return-1;const f=p.findIndex(Mt.bind(null,u));if(f>-1)return f;const g=zc(l[c-2]);return c>1&&zc(u)===g&&p[p.length-1].path!==g?p.findIndex(Mt.bind(null,l[c-2])):f}),s=E(()=>i.value>-1&&zP(t.params,r.value.params)),o=E(()=>i.value>-1&&i.value===t.matched.length-1&&vp(t.params,r.value.params));function a(l={}){return WP(l)?n[ve(e.replace)?"replace":"push"](ve(e.to)).catch(yr):Promise.resolve()}return{route:r,href:E(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const jP=G({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wc,setup(e,{slots:n}){const t=on(Wc(e)),{options:r}=Ae(Ji),i=E(()=>({[Uc(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Uc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=n.default&&n.default(t);return e.custom?s:Lr("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),KP=jP;function WP(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function zP(e,n){for(const t in n){const r=n[t],i=e[t];if(typeof r=="string"){if(r!==i)return!1}else if(!yn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function zc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Uc=(e,n,t)=>e??n??t,UP=G({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=Ae(js),i=E(()=>e.route||r.value),s=Ae(Kc,0),o=E(()=>{let c=ve(s);const{matched:u}=i.value;let p;for(;(p=u[c])&&!p.components;)c++;return c}),a=E(()=>i.value.matched[o.value]);Bn(Kc,E(()=>o.value+1)),Bn(MP,a),Bn(js,i);const l=V();return Ce(()=>[l.value,a.value,e.name],([c,u,p],[f,g,O])=>{u&&(u.instances[p]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Mt(u,g)||!f)&&(u.enterCallbacks[p]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,p=a.value,f=p&&p.components[u];if(!f)return Vc(t.default,{Component:f,route:c});const g=p.props[u],O=g?g===!0?c.params:typeof g=="function"?g(c):g:null,x=Lr(f,Oe({},O,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[u]=null)},ref:l}));return Vc(t.default,{Component:x,route:c})||x}}});function Vc(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const VP=UP;function GP(e){const n=SP(e.routes,e),t=e.parseQuery||HP,r=e.stringifyQuery||jc,i=e.history,s=tr(),o=tr(),a=tr(),l=Tf(Kn);let c=Kn;kt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ns.bind(null,R=>""+R),p=ns.bind(null,DP),f=ns.bind(null,yi);function g(R,J){let F,ee;return hp(R)?(F=n.getRecordMatcher(R),ee=J):ee=R,n.addRoute(ee,F)}function O(R){const J=n.getRecordMatcher(R);J&&n.removeRoute(J)}function _(){return n.getRoutes().map(R=>R.record)}function x(R){return!!n.getRecordMatcher(R)}function k(R,J){if(J=Oe({},J||l.value),typeof R=="string"){const v=ts(t,R,J.path),S=n.resolve({path:v.path},J),T=i.createHref(v.fullPath);return Oe(v,S,{params:f(S.params),hash:yi(v.hash),redirectedFrom:void 0,href:T})}let F;if("path"in R)F=Oe({},R,{path:ts(t,R.path,J.path).path});else{const v=Oe({},R.params);for(const S in v)v[S]==null&&delete v[S];F=Oe({},R,{params:p(v)}),J.params=p(J.params)}const ee=n.resolve(F,J),ye=R.hash||"";ee.params=u(f(ee.params));const m=qO(r,Oe({},R,{hash:AP(ye),path:ee.path})),d=i.createHref(m);return Oe({fullPath:m,hash:ye,query:r===jc?$P(R.query):R.query||{}},ee,{redirectedFrom:void 0,href:d})}function y(R){return typeof R=="string"?ts(t,R,l.value.path):Oe({},R)}function C(R,J){if(c!==R)return Ft(8,{from:J,to:R})}function h(R){return $(R)}function P(R){return h(Oe(y(R),{replace:!0}))}function N(R){const J=R.matched[R.matched.length-1];if(J&&J.redirect){const{redirect:F}=J;let ee=typeof F=="function"?F(R):F;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=y(ee):{path:ee},ee.params={}),Oe({query:R.query,hash:R.hash,params:"path"in ee?{}:R.params},ee)}}function $(R,J){const F=c=k(R),ee=l.value,ye=R.state,m=R.force,d=R.replace===!0,v=N(F);if(v)return $(Oe(y(v),{state:typeof v=="object"?Oe({},ye,v.state):ye,force:m,replace:d}),J||F);const S=F;S.redirectedFrom=J;let T;return!m&&JO(r,ee,F)&&(T=Ft(16,{to:S,from:ee}),$e(ee,ee,!0,!1)),(T?Promise.resolve(T):H(S,ee)).catch(I=>Ln(I)?Ln(I,2)?I:je(I):le(I,S,ee)).then(I=>{if(I){if(Ln(I,2))return $(Oe({replace:d},y(I.to),{state:typeof I.to=="object"?Oe({},ye,I.to.state):ye,force:m}),J||S)}else I=j(S,ee,!0,d,ye);return X(S,ee,I),I})}function B(R,J){const F=C(R,J);return F?Promise.reject(F):Promise.resolve()}function w(R){const J=Xe.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(R):R()}function H(R,J){let F;const[ee,ye,m]=qP(R,J);F=rs(ee.reverse(),"beforeRouteLeave",R,J);for(const v of ee)v.leaveGuards.forEach(S=>{F.push(Vn(S,R,J))});const d=B.bind(null,R,J);return F.push(d),ke(F).then(()=>{F=[];for(const v of s.list())F.push(Vn(v,R,J));return F.push(d),ke(F)}).then(()=>{F=rs(ye,"beforeRouteUpdate",R,J);for(const v of ye)v.updateGuards.forEach(S=>{F.push(Vn(S,R,J))});return F.push(d),ke(F)}).then(()=>{F=[];for(const v of R.matched)if(v.beforeEnter&&!J.matched.includes(v))if(yn(v.beforeEnter))for(const S of v.beforeEnter)F.push(Vn(S,R,J));else F.push(Vn(v.beforeEnter,R,J));return F.push(d),ke(F)}).then(()=>(R.matched.forEach(v=>v.enterCallbacks={}),F=rs(m,"beforeRouteEnter",R,J),F.push(d),ke(F))).then(()=>{F=[];for(const v of o.list())F.push(Vn(v,R,J));return F.push(d),ke(F)}).catch(v=>Ln(v,8)?v:Promise.reject(v))}function X(R,J,F){for(const ee of a.list())w(()=>ee(R,J,F))}function j(R,J,F,ee,ye){const m=C(R,J);if(m)return m;const d=J===Kn,v=kt?history.state:{};F&&(ee||d?i.replace(R.fullPath,Oe({scroll:d&&v&&v.scroll},ye)):i.push(R.fullPath,ye)),l.value=R,$e(R,J,F,d),je()}let U;function ue(){U||(U=i.listen((R,J,F)=>{if(!sn.listening)return;const ee=k(R),ye=N(ee);if(ye){$(Oe(ye,{replace:!0}),ee).catch(yr);return}c=ee;const m=l.value;kt&&rP(Ac(m.fullPath,F.delta),qi()),H(ee,m).catch(d=>Ln(d,12)?d:Ln(d,2)?($(d.to,ee).then(v=>{Ln(v,20)&&!F.delta&&F.type===Ir.pop&&i.go(-1,!1)}).catch(yr),Promise.reject()):(F.delta&&i.go(-F.delta,!1),le(d,ee,m))).then(d=>{d=d||j(ee,m,!1),d&&(F.delta&&!Ln(d,8)?i.go(-F.delta,!1):F.type===Ir.pop&&Ln(d,20)&&i.go(-1,!1)),X(ee,m,d)}).catch(yr)}))}let pe=tr(),de=tr(),me;function le(R,J,F){je(R);const ee=de.list();return ee.length&&ee.forEach(ye=>ye(R,J,F)),Promise.reject(R)}function De(){return me&&l.value!==Kn?Promise.resolve():new Promise((R,J)=>{pe.add([R,J])})}function je(R){return me||(me=!R,ue(),pe.list().forEach(([J,F])=>R?F(R):J()),pe.reset()),R}function $e(R,J,F,ee){const{scrollBehavior:ye}=e;if(!kt||!ye)return Promise.resolve();const m=!F&&iP(Ac(R.fullPath,0))||(ee||!F)&&history.state&&history.state.scroll||null;return mn().then(()=>ye(R,J,m)).then(d=>d&&tP(d)).catch(d=>le(d,R,J))}const Me=R=>i.go(R);let Ye;const Xe=new Set,sn={currentRoute:l,listening:!0,addRoute:g,removeRoute:O,hasRoute:x,getRoutes:_,resolve:k,options:e,push:h,replace:P,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:De,install(R){const J=this;R.component("RouterLink",KP),R.component("RouterView",VP),R.config.globalProperties.$router=J,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(l)}),kt&&!Ye&&l.value===Kn&&(Ye=!0,h(i.location).catch(ye=>{}));const F={};for(const ye in Kn)F[ye]=E(()=>l.value[ye]);R.provide(Ji,J),R.provide(Op,on(F)),R.provide(js,l);const ee=R.unmount;Xe.add(R),R.unmount=function(){Xe.delete(R),Xe.size<1&&(c=Kn,U&&U(),U=null,l.value=Kn,Ye=!1,me=!1),ee()}}};function ke(R){return R.reduce((J,F)=>J.then(()=>w(F)),Promise.resolve())}return sn}function qP(e,n){const t=[],r=[],i=[],s=Math.max(n.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=n.matched[o];a&&(e.matched.find(c=>Mt(c,a))?r.push(a):t.push(a));const l=e.matched[o];l&&(n.matched.find(c=>Mt(c,l))||i.push(l))}return[t,r,i]}function JP(){return Ae(Ji)}const ZP=GP({history:cP(),routes:[{path:"/",redirect:"/runner"},{path:"/runner",component:()=>cr(()=>Promise.resolve().then(()=>fR),void 0,import.meta.url)},{path:"/scripts",component:()=>cr(()=>Promise.resolve().then(()=>RR),void 0,import.meta.url)},{path:"/setting",component:()=>cr(()=>Promise.resolve().then(()=>NR),void 0,import.meta.url)},{path:"/about",component:()=>cr(()=>Promise.resolve().then(()=>zR),void 0,import.meta.url)}]}),YP=G({name:"IconCloseCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-close-circle`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),XP=["stroke-width","stroke-linecap","stroke-linejoin"],QP=Q("path",{d:"m17.643 17.643 6.364 6.364m0 0 6.364 6.364m-6.364-6.364 6.364-6.364m-6.364 6.364-6.364 6.364M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),eC=[QP];function nC(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},eC,14,XP)}var is=ae(YP,[["render",nC]]);const tC=Object.assign(is,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+is.name,is)}}),rC=G({name:"IconInfoCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-info-circle`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),iC=["stroke-width","stroke-linecap","stroke-linejoin"],oC=Q("path",{d:"M24 20v14m0-16v-4m18 10c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),sC=[oC];function aC(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},sC,14,iC)}var os=ae(rC,[["render",aC]]);const lC=Object.assign(os,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+os.name,os)}}),cC=G({name:"IconStop",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-stop`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),uC=["stroke-width","stroke-linecap","stroke-linejoin"],dC=Q("path",{d:"M36.728 36.728c7.03-7.03 7.03-18.427 0-25.456-7.03-7.03-18.427-7.03-25.456 0m25.456 25.456c-7.03 7.03-18.427 7.03-25.456 0-7.03-7.03-7.03-18.427 0-25.456m25.456 25.456L11.272 11.272"},null,-1),pC=[dC];function fC(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},pC,14,uC)}var ss=ae(cC,[["render",fC]]);const mC=Object.assign(ss,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ss.name,ss)}}),vC=G({name:"IconSettings",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-settings`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),gC=["stroke-width","stroke-linecap","stroke-linejoin"],hC=Q("path",{d:"M18.797 6.732A1 1 0 0 1 19.76 6h8.48a1 1 0 0 1 .964.732l1.285 4.628a1 1 0 0 0 1.213.7l4.651-1.2a1 1 0 0 1 1.116.468l4.24 7.344a1 1 0 0 1-.153 1.2L38.193 23.3a1 1 0 0 0 0 1.402l3.364 3.427a1 1 0 0 1 .153 1.2l-4.24 7.344a1 1 0 0 1-1.116.468l-4.65-1.2a1 1 0 0 0-1.214.7l-1.285 4.628a1 1 0 0 1-.964.732h-8.48a1 1 0 0 1-.963-.732L17.51 36.64a1 1 0 0 0-1.213-.7l-4.65 1.2a1 1 0 0 1-1.116-.468l-4.24-7.344a1 1 0 0 1 .153-1.2L9.809 24.7a1 1 0 0 0 0-1.402l-3.364-3.427a1 1 0 0 1-.153-1.2l4.24-7.344a1 1 0 0 1 1.116-.468l4.65 1.2a1 1 0 0 0 1.213-.7l1.286-4.628Z"},null,-1),bC=Q("path",{d:"M30 24a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"},null,-1),yC=[hC,bC];function SC(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},yC,14,gC)}var as=ae(vC,[["render",SC]]);const EC=Object.assign(as,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+as.name,as)}}),_C=G({name:"IconShareAlt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-share-alt`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),TC=["stroke-width","stroke-linecap","stroke-linejoin"],kC=Q("path",{d:"M32.442 21.552a4.5 4.5 0 1 1 .065 4.025m-.065-4.025-16.884-8.104m16.884 8.104A4.483 4.483 0 0 0 32 23.5c0 .75.183 1.455.507 2.077m-16.95-12.13a4.5 4.5 0 1 1-8.113-3.895 4.5 4.5 0 0 1 8.114 3.896Zm-.064 20.977A4.5 4.5 0 1 0 11.5 41c3.334-.001 5.503-3.68 3.993-6.578Zm0 0 17.014-8.847"},null,-1),OC=[kC];function PC(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},OC,14,TC)}var ls=ae(_C,[["render",PC]]);const CC=Object.assign(ls,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ls.name,ls)}}),RC=G({name:"IconCommand",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-command`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),LC=["stroke-width","stroke-linecap","stroke-linejoin"],xC=Q("path",{d:"M29 19v-6a6 6 0 1 1 6 6h-6Zm0 0v10m0-10H19m10 10v6a6 6 0 1 0 6-6h-6Zm0 0H19m0-10v10m0-10v-6a6 6 0 1 0-6 6h6Zm0 10v6a6 6 0 1 1-6-6h6Z"},null,-1),wC=[xC];function IC(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},wC,14,LC)}var cs=ae(RC,[["render",IC]]);const AC=Object.assign(cs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+cs.name,cs)}}),BC=G({name:"IconThunderbolt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=te("icon"),r=E(()=>[t,`${t}-thunderbolt`,{[`${t}-spin`]:e.spin}]),i=E(()=>{const o={};return e.size&&(o.fontSize=Ee(e.size)?`${e.size}px`:e.size),e.rotate&&(o.transform=`rotate(${e.rotate}deg)`),o});return{cls:r,innerStyle:i,onClick:o=>{n("click",o)}}}}),NC=["stroke-width","stroke-linecap","stroke-linejoin"],DC=Q("path",{d:"M27.824 5.203A.1.1 0 0 1 28 5.27V21h10.782a.1.1 0 0 1 .075.165L20.176 42.797A.1.1 0 0 1 20 42.73V27H9.219a.1.1 0 0 1-.076-.165L27.824 5.203Z"},null,-1),HC=[DC];function $C(e,n,t,r,i,s){return L(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...o)=>e.onClick&&e.onClick(...o))},HC,14,NC)}var us=ae(BC,[["render",$C]]);const MC=Object.assign(us,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+us.name,us)}}),FC=[jS,NS,lC,My,mC,MC,EC,tC,Lb,GS,AC,Rd,LS,CC];function jC(e){for(const n of FC)e.component(n.name,n)}function KC(){Cn&&(utools.onPluginEnter(({code:e,type:n,payload:t})=>{}),utools.db.replicateStateFromCloud()&&kn.warning({content:"数据可能不完整，还在从云端复制中"}))}try{cv(zO).use(ZP).use(pv()).use(jC).mount("#app"),KC()}catch(e){Cn&&utools.showNotification("初始化失败: "+e)}const WC=()=>null,zC=window.preload.electron||{},UC=window.preload.Buffer||{},VC=window.preload.require||WC,GC=window.preload.vm||{},qC=Object.freeze(Object.defineProperty({__proto__:null,Buffer:UC,electron:zC,require:VC,vm:GC},Symbol.toStringTag,{value:"Module"}));const JC={class:"feature"},ZC=G({__name:"Feature",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:n}){const t=WO(),r=fp();function i(u){u.key==="Escape"&&(n("close"),u.stopPropagation())}function s(){t.$reset()}function o(){t.parseCommentBlock(r.code),document.addEventListener("keydown",i)}function a(){document.removeEventListener("keydown",i)}function l(){t.newScript(r.code)&&n("close")}function c(){n("close")}return(u,p)=>{const f=_h,g=lS,O=Is;return L(),q("div",JC,[b(O,{width:"80%",visible:u.visible,"ok-text":"保存",onBeforeOpen:s,onOpen:o,onClose:a,onOk:l,onCancel:c,"unmount-on-close":""},{title:z(()=>[Ke(" 保存代码片段 ")]),default:z(()=>[b(f,{class:"name",modelValue:ve(t).name,"onUpdate:modelValue":p[0]||(p[0]=_=>ve(t).name=_),"max-length":25,placeholder:"请输入代码片段名称","allow-clear":"","show-word-limit":""},null,8,["modelValue"]),b(g,{class:"description",modelValue:ve(t).description,"onUpdate:modelValue":p[1]||(p[1]=_=>ve(t).description=_),"max-length":50,placeholder:"请输入代码片段描述","auto-size":"","allow-clear":"","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["visible"])])}}});const St=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},YC=St(ZC,[["__scopeId","data-v-04146b22"]]);const XC={class:"console"},QC={key:0,class:"empty-tip"},eR=["onClick"],nR=G({__name:"Console",props:{messages:{}},setup(e){const n=e,t=V(null);Ce(()=>n.messages.length,()=>{var l,c;const s=t.value;if(!s)return;const o=s[s.length-1],a=(c=(l=o==null?void 0:o.parentElement)==null?void 0:l.parentElement)==null?void 0:c.parentElement;o&&a&&mn(()=>a.scrollTop=o.offsetTop)});function r(s){return Se(s).map(o=>{const a=da(o);if(["Array","Object"].includes(a)){const l=()=>{const c=new WeakSet;return(u,p)=>{if(typeof p=="object"&&p!==null){if(c.has(p))return u;c.add(p)}return p}};try{return JSON.stringify(o,l())}catch{return`[${a}]`}}else{if(a==="String")return`"${o}"`;if(["Null","Undefined"].includes(a))return a.toLowerCase();if(a==="Symbol")return o.toString()}return o}).join(`
`)}function i(s){bv(String(s))?kn.success("复制成功"):kn.error("复制失败")}return(s,o)=>{const a=ht;return L(),q("div",XC,[b(ct,{name:"emerge",mode:"out-in"},{default:z(()=>[s.messages.length?(L(),fe(nd,{key:1,name:"emerge",tag:"div"},{default:z(()=>[(L(!0),q(Be,null,xi(s.messages,l=>(L(),q("div",{ref_for:!0,ref_key:"msgContainerRef",ref:t,key:l.id,class:K({message:!0,"message-log":!l.type||l.type==="log","message-warn":l.type==="warn","message-error":l.type==="error","message-info":l.type==="info"})},[b(a,{class:"time-status",size:"mini",type:"text",onClick:c=>i(l.timeStamp)},{default:z(()=>[Ke(Ve(ve(ad)(l.timeStamp).split(" ")[1]),1)]),_:2},1032,["onClick"]),Q("div",{class:"content",onClick:c=>i(r(l.content))},Ve(r(l.content)),9,eR)],2))),128))]),_:1})):(L(),q("div",QC,"控制台为空"))]),_:1})])}}});const tR=St(nR,[["__scopeId","data-v-c8d6608a"]]),rR=`interface UBrowser {
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
`,iR=`declare module 'assert' {
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
`,oR=`interface Clipboard {

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
`;function sR(e,n){e.addAction({id:"run",label:"Run",keybindings:[Nr.CtrlCmd|Dr.KeyR],contextMenuGroupId:"navigation",run:()=>n("runCode")}),e.addAction({id:"newCode",label:"New Code",keybindings:[Nr.CtrlCmd|Dr.KeyN],contextMenuGroupId:"navigation",run:()=>n("newCode")}),e.addAction({id:"clearMessages",label:"Clear Messages",keybindings:[Nr.CtrlCmd|Dr.KeyQ],contextMenuGroupId:"navigation",run:()=>n("clearMessages")}),e.addAction({id:"saveScript",label:"Save Script",keybindings:[Nr.CtrlCmd|Dr.KeyS],contextMenuGroupId:"navigation",run:()=>n("saveScript")})}self.MonacoEnvironment={getWorker(e,n){return n==="typescript"||n==="javascript"?new Pp:n==="json"?new Cp:new Rp}};It.typescript.javascriptDefaults.addExtraLib(rR,"utools.api.d.ts");It.typescript.javascriptDefaults.addExtraLib(iR,"node.api.d.ts");It.typescript.javascriptDefaults.addExtraLib(oR,"electron.api.d.ts");It.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});It.typescript.javascriptDefaults.setCompilerOptions({target:It.typescript.ScriptTarget.ES2016,allowNonTsExtensions:!0,allowJs:!0});const aR=G({__name:"Editor",props:{code:{default:""},language:{default:"javascript"}},emits:["codeChange","runCode","newCode","clearMessages","saveScript"],setup(e,{expose:n,emit:t}){const r=e,i=Ra(),s=V(null);let o=null;Ce(()=>i.isDark,()=>a()),Ce(()=>r.code,l=>{o&&l!==(o==null?void 0:o.getValue())&&o.setValue(l)}),ze(()=>{a()}),mt(()=>{o==null||o.dispose()}),n({editor:E(()=>o)});function a(){var l;o&&(o.dispose(),o=null),o=Lp.create(s.value,{value:r.code,language:r.language,theme:i.isDark?"vs-dark":"vs",tabSize:2,minimap:{enabled:!1},automaticLayout:!0}),sR(o,t),(l=o.getModel())==null||l.onDidChangeContent(dp(()=>{t("codeChange",o.getValue())},350)),o.focus()}return(l,c)=>(L(),q("div",{class:"editor",ref_key:"editorRef",ref:s},null,512))}});const lR=St(aR,[["__scopeId","data-v-3efb8018"]]);const cR={class:"runner"},uR={class:"btns"},dR=G({__name:"Runner",setup(e){const n=V(),t=V(An("size")||.75),r=V(!1),i=fp();i.init(),Ce(t,o=>In("size",o));function s(){r.value=!1,n.value.editor.focus()}return(o,a)=>{const l=re("icon-plus"),c=ht,u=Bd,p=re("icon-thunderbolt"),f=re("icon-stop"),g=re("icon-settings"),O=re("icon-info-circle"),_=re("icon-command"),x=re("icon-file"),k=hr,y=qb,C=lR,h=tR,P=TS,N=YC;return L(),q("div",cR,[Q("div",uR,[b(u,{content:"创建新代码片段"},{default:z(()=>[b(c,{onClick:ve(i).newCode},{default:z(()=>[b(l)]),_:1},8,["onClick"])]),_:1}),b(u,{content:"运行代码"},{default:z(()=>[b(c,{onClick:ve(i).execCode},{default:z(()=>[b(p)]),_:1},8,["onClick"])]),_:1}),b(u,{content:"清空控制台"},{default:z(()=>[b(c,{onClick:ve(i).clearMessages},{default:z(()=>[b(f)]),_:1},8,["onClick"])]),_:1}),b(u,{content:"设置"},{default:z(()=>[b(c,{onClick:a[0]||(a[0]=$=>o.$router.push("/setting"))},{default:z(()=>[b(g)]),_:1})]),_:1}),b(u,{content:"关于"},{default:z(()=>[b(c,{onClick:a[1]||(a[1]=$=>o.$router.push("/about"))},{default:z(()=>[b(O)]),_:1})]),_:1}),b(u,{content:"快捷脚本"},{default:z(()=>[b(c,{onClick:a[2]||(a[2]=$=>o.$router.push("/scripts"))},{default:z(()=>[b(_)]),_:1})]),_:1}),b(c,{class:"width-80",onClick:ve(i).changeEnv},{default:z(()=>[Ke(Ve(ve(i).currentEnv),1)]),_:1},8,["onClick"]),b(c,{class:"width-80",onClick:ve(i).changeMode},{default:z(()=>[Ke(Ve(ve(i).currentMode),1)]),_:1},8,["onClick"]),b(y,{"popup-max-height":!1},{content:z(()=>[(L(!0),q(Be,null,xi(ve(i).historys,$=>(L(),fe(k,{class:K({"active-option":$.id===ve(i).codeWithId}),onClick:B=>ve(i).readHistory($.timeStamp)},{icon:z(()=>[b(x)]),default:z(()=>[Ke(" "+Ve(ve(ad)($.timeStamp)),1)]),_:2},1032,["class","onClick"]))),256))]),footer:z(()=>[b(k,{onClick:ve(i).emptyHistory},{default:z(()=>[Ke("清空代码历史")]),_:1},8,["onClick"])]),default:z(()=>[b(c,{class:"flex-fill",onClick:ve(i).loadHistorys},{default:z(()=>[Ke("代码历史回溯")]),_:1},8,["onClick"])]),_:1})]),b(P,{size:ve(t),"onUpdate:size":a[4]||(a[4]=$=>He(t)?t.value=$:null),min:.1,max:.8},{first:z(()=>[b(C,{ref_key:"editorRef",ref:n,code:ve(i).code,language:"javascript",onCodeChange:ve(i).handleCodeChange,onRunCode:ve(i).execCode,onNewCode:ve(i).newCode,onClearMessages:ve(i).clearMessages,onSaveScript:a[3]||(a[3]=$=>r.value=!0)},null,8,["code","onCodeChange","onRunCode","onNewCode","onClearMessages"])]),second:z(()=>[b(h,{messages:ve(i).messages},null,8,["messages"])]),_:1},8,["size"]),b(N,{visible:ve(r),onClose:s},null,8,["visible"])])}}});const pR=St(dR,[["__scopeId","data-v-f5450a7f"]]),fR=Object.freeze(Object.defineProperty({__proto__:null,default:pR},Symbol.toStringTag,{value:"Module"}));function mR(e,n,t,r){ze(()=>{e.addEventListener(n,t,r)}),mt(()=>{e.removeEventListener(n,t,r)})}function xa(){const e=JP(),n=()=>e.back();return mR(document,"keydown",t=>{t.key==="Escape"&&(n(),t.stopPropagation())}),{BackButton:()=>Lr(ht,{class:"back",onClick:n,shape:"circle"},()=>Lr(ny))}}const vR={class:"scripts"},gR={class:"script__content"},hR=["src"],bR={class:"script__info"},yR=["title"],SR=["title"],ER={class:"script__actions"},_R={class:"icon-hover"},TR={class:"icon-hover"},kR={class:"icon-hover"},OR={class:"icon-hover"},qr=18,PR=G({__name:"Scripts",setup(e){const n=V(Rs("script/").map(r=>da(r.data)==="String"?JSON.parse(r.data):r.data)),{BackButton:t}=xa();return(r,i)=>{const s=re("icon-eye"),o=re("icon-edit"),a=re("icon-delete"),l=re("icon-share-alt"),c=iy;return L(),q("div",vR,[(L(!0),q(Be,null,xi(ve(n),u=>(L(),fe(c,{key:u.id,class:"script",hoverable:""},{default:z(()=>[Q("div",gR,[Q("img",{class:"script__logo",src:u.logo||"logo.png",alt:"logo",draggable:"false"},null,8,hR),Q("div",bR,[Q("span",{class:"script__name",title:u.name},Ve(u.name),9,yR),Q("span",{class:"script__description",title:u.description},Ve(u.description),9,SR)])]),Q("div",ER,[Q("span",_R,[b(s,{size:qr})]),Q("span",TR,[b(o,{size:qr})]),Q("span",kR,[b(a,{size:qr})]),Q("span",OR,[b(l,{size:qr})])])]),_:2},1024))),128)),b(ve(t))])}}});const CR=St(PR,[["__scopeId","data-v-18bd60ad"]]),RR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),LR={class:"setting-content"},xR=G({__name:"SettingContent",props:{title:{type:String,required:!0},desc:{type:String,default:""}},setup(e){return(n,t)=>{const r=re("icon-info-circle"),i=Bd;return L(),q("div",LR,[Q("h3",null,[Q("span",null,Ve(e.title),1),e.desc?(L(),fe(i,{key:0,content:e.desc},{default:z(()=>[b(r)]),_:1},8,["content"])):Pe("",!0)]),ce(n.$slots,"default")])}}});const wR=G({__name:"ThemeSetting",setup(e){const n=Ra();return(t,r)=>{const i=Jb,s=ri,o=xR;return L(),fe(o,{title:"插件主题"},{default:z(()=>[b(s,{modelValue:ve(n).theme,"onUpdate:modelValue":r[0]||(r[0]=a=>ve(n).theme=a),onChange:ve(n).setTheme},{default:z(()=>[b(i,{value:"default"},{default:z(()=>[Ke("跟随系统")]),_:1}),b(i,{value:"dark"},{default:z(()=>[Ke("深色模式")]),_:1}),b(i,{value:"light"},{default:z(()=>[Ke("浅色模式")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})}}}),IR={class:"setting"},AR=G({__name:"Setting",setup(e){const{BackButton:n}=xa();return(t,r)=>{const i=wR;return L(),q("div",IR,[b(ve(n)),b(i)])}}});const BR=St(AR,[["__scopeId","data-v-9732a011"]]),NR=Object.freeze(Object.defineProperty({__proto__:null,default:BR},Symbol.toStringTag,{value:"Module"}));const DR=""+new URL("../logo.png",import.meta.url).href,wa=e=>(Nf("data-v-70d8ec5a"),e=e(),Df(),e),HR={class:"about"},$R=wa(()=>Q("img",{class:"bg-icon",src:DR,alt:"logo"},null,-1)),MR=wa(()=>Q("h1",{class:"title"},"超级JavaScript",-1)),FR={class:"footer-btns"},jR=wa(()=>Q("div",{class:"footer-tip"},"Copyright © 2019-present ZiuChen",-1)),KR=G({__name:"About",setup(e){const n=[{text:"插件主页",url:"https://ziuchen.gitee.io/project/JSRunner/"},{text:"开源地址",url:"https://github.com/ZiuChen/JSRunner",badge:{text:"Star"}},{text:"更新日志",url:"https://ziuchen.gitee.io/project/JSRunner/log/"}],{BackButton:t}=xa();return(r,i)=>{const s=hy,o=ht,a=gb;return L(),q("div",HR,[$R,MR,b(s,{onClick:i[0]||(i[0]=l=>ve(Yo)("https://github.com/ZiuChen"))},{default:z(()=>[Ke("ZiuChen")]),_:1}),Q("div",FR,[(L(),q(Be,null,xi(n,l=>(L(),q(Be,null,[l!=null&&l.badge?(L(),fe(a,Wp(en({key:0},l.badge)),{default:z(()=>[b(o,{onClick:c=>ve(Yo)(l.url)},{default:z(()=>[Ke(Ve(l.text),1)]),_:2},1032,["onClick"])]),_:2},1040)):(L(),fe(o,{key:1,onClick:c=>ve(Yo)(l.url)},{default:z(()=>[Ke(Ve(l.text),1)]),_:2},1032,["onClick"]))],64))),64))]),jR,b(ve(t))])}}});const WR=St(KR,[["__scopeId","data-v-70d8ec5a"]]),zR=Object.freeze(Object.defineProperty({__proto__:null,default:WR},Symbol.toStringTag,{value:"Module"}));export{cr as _};
