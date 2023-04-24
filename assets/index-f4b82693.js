import{W as Lm,a as xm,l as cr,e as Im,K as wm,b as Am}from"./monaco-3078993e.js";import"./index-f4b82693.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Ia(e,n){const t=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)t[r[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}function Be(e){if(ce(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],o=Ge(r)?Hm(r):Be(r);if(o)for(const i in o)n[i]=o[i]}return n}else{if(Ge(e))return e;if(je(e))return e}}const Nm=/;(?![^(]*\))/g,Dm=/:([^]+)/,Bm=/\/\*.*?\*\//gs;function Hm(e){const n={};return e.replace(Bm,"").split(Nm).forEach(t=>{if(t){const r=t.split(Dm);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function X(e){let n="";if(Ge(e))n=e;else if(ce(e))for(let t=0;t<e.length;t++){const r=X(e[t]);r&&(n+=r+" ")}else if(je(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Mm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fm=Ia(Mm);function su(e){return!!e||e===""}const bt=e=>Ge(e)?e:e==null?"":ce(e)||je(e)&&(e.toString===du||!fe(e.toString))?JSON.stringify(e,au,2):String(e),au=(e,n)=>n&&n.__v_isRef?au(e,n.value):ir(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,o])=>(t[`${r} =>`]=o,t),{})}:lu(n)?{[`Set(${n.size})`]:[...n.values()]}:je(n)&&!ce(n)&&!uu(n)?String(n):n,Fe={},or=[],In=()=>{},$m=()=>!1,jm=/^on[^a-z]/,mi=e=>jm.test(e),wa=e=>e.startsWith("onUpdate:"),nn=Object.assign,Aa=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Km=Object.prototype.hasOwnProperty,ke=(e,n)=>Km.call(e,n),ce=Array.isArray,ir=e=>gi(e)==="[object Map]",lu=e=>gi(e)==="[object Set]",fe=e=>typeof e=="function",Ge=e=>typeof e=="string",Na=e=>typeof e=="symbol",je=e=>e!==null&&typeof e=="object",cu=e=>je(e)&&fe(e.then)&&fe(e.catch),du=Object.prototype.toString,gi=e=>du.call(e),Um=e=>gi(e).slice(8,-1),uu=e=>gi(e)==="[object Object]",Da=e=>Ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Uo=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vi=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Wm=/-(\w)/g,Gn=vi(e=>e.replace(Wm,(n,t)=>t?t.toUpperCase():"")),zm=/\B([A-Z])/g,Sr=vi(e=>e.replace(zm,"-$1").toLowerCase()),hi=vi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yi=vi(e=>e?`on${hi(e)}`:""),no=(e,n)=>!Object.is(e,n),Xi=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Qo=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Gm=e=>{const n=parseFloat(e);return isNaN(n)?e:n},qm=e=>{const n=Ge(e)?Number(e):NaN;return isNaN(n)?e:n};let Hl;const Vm=()=>Hl||(Hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yn;class pu{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yn,!n&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=yn;try{return yn=this,n()}finally{yn=t}}}on(){yn=this}off(){yn=this.parent}stop(n){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function fu(e){return new pu(e)}function Jm(e,n=yn){n&&n.active&&n.effects.push(e)}function mu(){return yn}function Zm(e){yn&&yn.cleanups.push(e)}const Ba=e=>{const n=new Set(e);return n.w=0,n.n=0,n},gu=e=>(e.w&Pt)>0,vu=e=>(e.n&Pt)>0,Ym=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Pt},Xm=e=>{const{deps:n}=e;if(n.length){let t=0;for(let r=0;r<n.length;r++){const o=n[r];gu(o)&&!vu(o)?o.delete(e):n[t++]=o,o.w&=~Pt,o.n&=~Pt}n.length=t}},ei=new WeakMap;let $r=0,Pt=1;const Vs=30;let Cn;const jt=Symbol(""),Js=Symbol("");class Ha{constructor(n,t=null,r){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Jm(this,r)}run(){if(!this.active)return this.fn();let n=Cn,t=yt;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Cn,Cn=this,yt=!0,Pt=1<<++$r,$r<=Vs?Ym(this):Ml(this),this.fn()}finally{$r<=Vs&&Xm(this),Pt=1<<--$r,Cn=this.parent,yt=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Cn===this?this.deferStop=!0:this.active&&(Ml(this),this.onStop&&this.onStop(),this.active=!1)}}function Ml(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let yt=!0;const hu=[];function Er(){hu.push(yt),yt=!1}function Tr(){const e=hu.pop();yt=e===void 0?!0:e}function gn(e,n,t){if(yt&&Cn){let r=ei.get(e);r||ei.set(e,r=new Map);let o=r.get(t);o||r.set(t,o=Ba()),bu(o)}}function bu(e,n){let t=!1;$r<=Vs?vu(e)||(e.n|=Pt,t=!gu(e)):t=!e.has(Cn),t&&(e.add(Cn),Cn.deps.push(e))}function ot(e,n,t,r,o,i){const s=ei.get(e);if(!s)return;let a=[];if(n==="clear")a=[...s.values()];else if(t==="length"&&ce(e)){const l=Number(r);s.forEach((d,c)=>{(c==="length"||c>=l)&&a.push(d)})}else switch(t!==void 0&&a.push(s.get(t)),n){case"add":ce(e)?Da(t)&&a.push(s.get("length")):(a.push(s.get(jt)),ir(e)&&a.push(s.get(Js)));break;case"delete":ce(e)||(a.push(s.get(jt)),ir(e)&&a.push(s.get(Js)));break;case"set":ir(e)&&a.push(s.get(jt));break}if(a.length===1)a[0]&&Zs(a[0]);else{const l=[];for(const d of a)d&&l.push(...d);Zs(Ba(l))}}function Zs(e,n){const t=ce(e)?e:[...e];for(const r of t)r.computed&&Fl(r);for(const r of t)r.computed||Fl(r)}function Fl(e,n){(e!==Cn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Qm(e,n){var t;return(t=ei.get(e))===null||t===void 0?void 0:t.get(n)}const eg=Ia("__proto__,__v_isRef,__isVue"),yu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Na)),ng=Ma(),tg=Ma(!1,!0),rg=Ma(!0),$l=og();function og(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const r=be(this);for(let i=0,s=this.length;i<s;i++)gn(r,"get",i+"");const o=r[n](...t);return o===-1||o===!1?r[n](...t.map(be)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Er();const r=be(this)[n].apply(this,t);return Tr(),r}}),e}function ig(e){const n=be(this);return gn(n,"has",e),n.hasOwnProperty(e)}function Ma(e=!1,n=!1){return function(r,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&i===(e?n?Eg:Pu:n?_u:Tu).get(r))return r;const s=ce(r);if(!e){if(s&&ke($l,o))return Reflect.get($l,o,i);if(o==="hasOwnProperty")return ig}const a=Reflect.get(r,o,i);return(Na(o)?yu.has(o):eg(o))||(e||gn(r,"get",o),n)?a:We(a)?s&&Da(o)?a:a.value:je(a)?e?ja(a):Pn(a):a}}const sg=Su(),ag=Su(!0);function Su(e=!1){return function(t,r,o,i){let s=t[r];if(dr(s)&&We(s)&&!We(o))return!1;if(!e&&(!ni(o)&&!dr(o)&&(s=be(s),o=be(o)),!ce(t)&&We(s)&&!We(o)))return s.value=o,!0;const a=ce(t)&&Da(r)?Number(r)<t.length:ke(t,r),l=Reflect.set(t,r,o,i);return t===be(i)&&(a?no(o,s)&&ot(t,"set",r,o):ot(t,"add",r,o)),l}}function lg(e,n){const t=ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&t&&ot(e,"delete",n,void 0),r}function cg(e,n){const t=Reflect.has(e,n);return(!Na(n)||!yu.has(n))&&gn(e,"has",n),t}function dg(e){return gn(e,"iterate",ce(e)?"length":jt),Reflect.ownKeys(e)}const Eu={get:ng,set:sg,deleteProperty:lg,has:cg,ownKeys:dg},ug={get:rg,set(e,n){return!0},deleteProperty(e,n){return!0}},pg=nn({},Eu,{get:tg,set:ag}),Fa=e=>e,bi=e=>Reflect.getPrototypeOf(e);function Ro(e,n,t=!1,r=!1){e=e.__v_raw;const o=be(e),i=be(n);t||(n!==i&&gn(o,"get",n),gn(o,"get",i));const{has:s}=bi(o),a=r?Fa:t?Ua:to;if(s.call(o,n))return a(e.get(n));if(s.call(o,i))return a(e.get(i));e!==o&&e.get(n)}function Co(e,n=!1){const t=this.__v_raw,r=be(t),o=be(e);return n||(e!==o&&gn(r,"has",e),gn(r,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function Lo(e,n=!1){return e=e.__v_raw,!n&&gn(be(e),"iterate",jt),Reflect.get(e,"size",e)}function jl(e){e=be(e);const n=be(this);return bi(n).has.call(n,e)||(n.add(e),ot(n,"add",e,e)),this}function Kl(e,n){n=be(n);const t=be(this),{has:r,get:o}=bi(t);let i=r.call(t,e);i||(e=be(e),i=r.call(t,e));const s=o.call(t,e);return t.set(e,n),i?no(n,s)&&ot(t,"set",e,n):ot(t,"add",e,n),this}function Ul(e){const n=be(this),{has:t,get:r}=bi(n);let o=t.call(n,e);o||(e=be(e),o=t.call(n,e)),r&&r.call(n,e);const i=n.delete(e);return o&&ot(n,"delete",e,void 0),i}function Wl(){const e=be(this),n=e.size!==0,t=e.clear();return n&&ot(e,"clear",void 0,void 0),t}function xo(e,n){return function(r,o){const i=this,s=i.__v_raw,a=be(s),l=n?Fa:e?Ua:to;return!e&&gn(a,"iterate",jt),s.forEach((d,c)=>r.call(o,l(d),l(c),i))}}function Io(e,n,t){return function(...r){const o=this.__v_raw,i=be(o),s=ir(i),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,d=o[e](...r),c=t?Fa:n?Ua:to;return!n&&gn(i,"iterate",l?Js:jt),{next(){const{value:p,done:f}=d.next();return f?{value:p,done:f}:{value:a?[c(p[0]),c(p[1])]:c(p),done:f}},[Symbol.iterator](){return this}}}}function ct(e){return function(...n){return e==="delete"?!1:this}}function fg(){const e={get(i){return Ro(this,i)},get size(){return Lo(this)},has:Co,add:jl,set:Kl,delete:Ul,clear:Wl,forEach:xo(!1,!1)},n={get(i){return Ro(this,i,!1,!0)},get size(){return Lo(this)},has:Co,add:jl,set:Kl,delete:Ul,clear:Wl,forEach:xo(!1,!0)},t={get(i){return Ro(this,i,!0)},get size(){return Lo(this,!0)},has(i){return Co.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:xo(!0,!1)},r={get(i){return Ro(this,i,!0,!0)},get size(){return Lo(this,!0)},has(i){return Co.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Io(i,!1,!1),t[i]=Io(i,!0,!1),n[i]=Io(i,!1,!0),r[i]=Io(i,!0,!0)}),[e,t,n,r]}const[mg,gg,vg,hg]=fg();function $a(e,n){const t=n?e?hg:vg:e?gg:mg;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ke(t,o)&&o in r?t:r,o,i)}const bg={get:$a(!1,!1)},yg={get:$a(!1,!0)},Sg={get:$a(!0,!1)},Tu=new WeakMap,_u=new WeakMap,Pu=new WeakMap,Eg=new WeakMap;function Tg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _g(e){return e.__v_skip||!Object.isExtensible(e)?0:Tg(Um(e))}function Pn(e){return dr(e)?e:Ka(e,!1,Eu,bg,Tu)}function Pg(e){return Ka(e,!1,pg,yg,_u)}function ja(e){return Ka(e,!0,ug,Sg,Pu)}function Ka(e,n,t,r,o){if(!je(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=_g(e);if(s===0)return e;const a=new Proxy(e,s===2?r:t);return o.set(e,a),a}function St(e){return dr(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function dr(e){return!!(e&&e.__v_isReadonly)}function ni(e){return!!(e&&e.__v_isShallow)}function ku(e){return St(e)||dr(e)}function be(e){const n=e&&e.__v_raw;return n?be(n):e}function ur(e){return Qo(e,"__v_skip",!0),e}const to=e=>je(e)?Pn(e):e,Ua=e=>je(e)?ja(e):e;function Ou(e){yt&&Cn&&(e=be(e),bu(e.dep||(e.dep=Ba())))}function Ru(e,n){e=be(e);const t=e.dep;t&&Zs(t)}function We(e){return!!(e&&e.__v_isRef===!0)}function le(e){return Cu(e,!1)}function kg(e){return Cu(e,!0)}function Cu(e,n){return We(e)?e:new Og(e,n)}class Og{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:be(n),this._value=t?n:to(n)}get value(){return Ou(this),this._value}set value(n){const t=this.__v_isShallow||ni(n)||dr(n);n=t?n:be(n),no(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:to(n),Ru(this))}}function Ie(e){return We(e)?e.value:e}const Rg={get:(e,n,t)=>Ie(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const o=e[n];return We(o)&&!We(t)?(o.value=t,!0):Reflect.set(e,n,t,r)}};function Lu(e){return St(e)?e:new Proxy(e,Rg)}function Zn(e){const n=ce(e)?new Array(e.length):{};for(const t in e)n[t]=Ys(e,t);return n}class Cg{constructor(n,t,r){this._object=n,this._key=t,this._defaultValue=r,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Qm(be(this._object),this._key)}}function Ys(e,n,t){const r=e[n];return We(r)?r:new Cg(e,n,t)}var xu;class Lg{constructor(n,t,r,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[xu]=!1,this._dirty=!0,this.effect=new Ha(n,()=>{this._dirty||(this._dirty=!0,Ru(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const n=be(this);return Ou(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}xu="__v_isReadonly";function xg(e,n,t=!1){let r,o;const i=fe(e);return i?(r=e,o=In):(r=e.get,o=e.set),new Lg(r,o,i||!o,t)}function Et(e,n,t,r){let o;try{o=r?e(...r):e()}catch(i){yi(i,n,t)}return o}function Tn(e,n,t,r){if(fe(e)){const i=Et(e,n,t,r);return i&&cu(i)&&i.catch(s=>{yi(s,n,t)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Tn(e[i],n,t,r));return o}function yi(e,n,t,r=!0){const o=n?n.vnode:null;if(n){let i=n.parent;const s=n.proxy,a=t;for(;i;){const d=i.ec;if(d){for(let c=0;c<d.length;c++)if(d[c](e,s,a)===!1)return}i=i.parent}const l=n.appContext.config.errorHandler;if(l){Et(l,null,10,[e,s,a]);return}}}let ro=!1,Xs=!1;const on=[];let Kn=0;const sr=[];let et=null,Bt=0;const Iu=Promise.resolve();let Wa=null;function zt(e){const n=Wa||Iu;return e?n.then(this?e.bind(this):e):n}function Ig(e){let n=Kn+1,t=on.length;for(;n<t;){const r=n+t>>>1;oo(on[r])<e?n=r+1:t=r}return n}function za(e){(!on.length||!on.includes(e,ro&&e.allowRecurse?Kn+1:Kn))&&(e.id==null?on.push(e):on.splice(Ig(e.id),0,e),wu())}function wu(){!ro&&!Xs&&(Xs=!0,Wa=Iu.then(Nu))}function wg(e){const n=on.indexOf(e);n>Kn&&on.splice(n,1)}function Ag(e){ce(e)?sr.push(...e):(!et||!et.includes(e,e.allowRecurse?Bt+1:Bt))&&sr.push(e),wu()}function zl(e,n=ro?Kn+1:0){for(;n<on.length;n++){const t=on[n];t&&t.pre&&(on.splice(n,1),n--,t())}}function Au(e){if(sr.length){const n=[...new Set(sr)];if(sr.length=0,et){et.push(...n);return}for(et=n,et.sort((t,r)=>oo(t)-oo(r)),Bt=0;Bt<et.length;Bt++)et[Bt]();et=null,Bt=0}}const oo=e=>e.id==null?1/0:e.id,Ng=(e,n)=>{const t=oo(e)-oo(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Nu(e){Xs=!1,ro=!0,on.sort(Ng);const n=In;try{for(Kn=0;Kn<on.length;Kn++){const t=on[Kn];t&&t.active!==!1&&Et(t,null,14)}}finally{Kn=0,on.length=0,Au(),ro=!1,Wa=null,(on.length||sr.length)&&Nu()}}function Dg(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||Fe;let o=t;const i=n.startsWith("update:"),s=i&&n.slice(7);if(s&&s in r){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:p,trim:f}=r[c]||Fe;f&&(o=t.map(m=>Ge(m)?m.trim():m)),p&&(o=t.map(Gm))}let a,l=r[a=Yi(n)]||r[a=Yi(Gn(n))];!l&&i&&(l=r[a=Yi(Sr(n))]),l&&Tn(l,e,6,o);const d=r[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Tn(d,e,6,o)}}function Du(e,n,t=!1){const r=n.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let s={},a=!1;if(!fe(e)){const l=d=>{const c=Du(d,n,!0);c&&(a=!0,nn(s,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(je(e)&&r.set(e,null),null):(ce(i)?i.forEach(l=>s[l]=null):nn(s,i),je(e)&&r.set(e,s),s)}function Si(e,n){return!e||!mi(n)?!1:(n=n.slice(2).replace(/Once$/,""),ke(e,n[0].toLowerCase()+n.slice(1))||ke(e,Sr(n))||ke(e,n))}let rn=null,Ei=null;function ti(e){const n=rn;return rn=e,Ei=e&&e.type.__scopeId||null,n}function Bg(e){Ei=e}function Hg(){Ei=null}function ee(e,n=rn,t){if(!n||e._n)return e;const r=(...o)=>{r._d&&tc(-1);const i=ti(n);let s;try{s=e(...o)}finally{ti(i),r._d&&tc(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Qi(e){const{type:n,vnode:t,proxy:r,withProxy:o,props:i,propsOptions:[s],slots:a,attrs:l,emit:d,render:c,renderCache:p,data:f,setupState:m,ctx:h,inheritAttrs:S}=e;let b,y;const _=ti(e);try{if(t.shapeFlag&4){const A=o||r;b=jn(c.call(A,A,p,i,m,f,h)),y=l}else{const A=n;b=jn(A.length>1?A(i,{attrs:l,slots:a,emit:d}):A(i,null)),y=n.props?l:Mg(l)}}catch(A){qr.length=0,yi(A,e,1),b=G(_n)}let k=b;if(y&&S!==!1){const A=Object.keys(y),{shapeFlag:R}=k;A.length&&R&7&&(s&&A.some(wa)&&(y=Fg(y,s)),k=qn(k,y))}return t.dirs&&(k=qn(k),k.dirs=k.dirs?k.dirs.concat(t.dirs):t.dirs),t.transition&&(k.transition=t.transition),b=k,ti(_),b}const Mg=e=>{let n;for(const t in e)(t==="class"||t==="style"||mi(t))&&((n||(n={}))[t]=e[t]);return n},Fg=(e,n)=>{const t={};for(const r in e)(!wa(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function $g(e,n,t){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:l}=n,d=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Gl(r,s,d):!!s;if(l&8){const c=n.dynamicProps;for(let p=0;p<c.length;p++){const f=c[p];if(s[f]!==r[f]&&!Si(d,f))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?Gl(r,s,d):!0:!!s;return!1}function Gl(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(n[i]!==e[i]&&!Si(t,i))return!0}return!1}function jg({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Kg=e=>e.__isSuspense;function Ug(e,n){n&&n.pendingBranch?ce(e)?n.effects.push(...e):n.effects.push(e):Ag(e)}function Tt(e,n){if(Ve){let t=Ve.provides;const r=Ve.parent&&Ve.parent.provides;r===t&&(t=Ve.provides=Object.create(r)),t[e]=n}}function ze(e,n,t=!1){const r=Ve||rn;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&fe(n)?n.call(r.proxy):n}}const wo={};function en(e,n,t){return Bu(e,n,t)}function Bu(e,n,{immediate:t,deep:r,flush:o,onTrack:i,onTrigger:s}=Fe){const a=mu()===(Ve==null?void 0:Ve.scope)?Ve:null;let l,d=!1,c=!1;if(We(e)?(l=()=>e.value,d=ni(e)):St(e)?(l=()=>e,r=!0):ce(e)?(c=!0,d=e.some(k=>St(k)||ni(k)),l=()=>e.map(k=>{if(We(k))return k.value;if(St(k))return Ft(k);if(fe(k))return Et(k,a,2)})):fe(e)?n?l=()=>Et(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),Tn(e,a,3,[f])}:l=In,n&&r){const k=l;l=()=>Ft(k())}let p,f=k=>{p=y.onStop=()=>{Et(k,a,4)}},m;if(co)if(f=In,n?t&&Tn(n,a,3,[l(),c?[]:void 0,f]):l(),o==="sync"){const k=Dv();m=k.__watcherHandles||(k.__watcherHandles=[])}else return In;let h=c?new Array(e.length).fill(wo):wo;const S=()=>{if(y.active)if(n){const k=y.run();(r||d||(c?k.some((A,R)=>no(A,h[R])):no(k,h)))&&(p&&p(),Tn(n,a,3,[k,h===wo?void 0:c&&h[0]===wo?[]:h,f]),h=k)}else y.run()};S.allowRecurse=!!n;let b;o==="sync"?b=S:o==="post"?b=()=>un(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),b=()=>za(S));const y=new Ha(l,b);n?t?S():h=y.run():o==="post"?un(y.run.bind(y),a&&a.suspense):y.run();const _=()=>{y.stop(),a&&a.scope&&Aa(a.scope.effects,y)};return m&&m.push(_),_}function Wg(e,n,t){const r=this.proxy,o=Ge(e)?e.includes(".")?Hu(r,e):()=>r[e]:e.bind(r,r);let i;fe(n)?i=n:(i=n.handler,t=n);const s=Ve;pr(this);const a=Bu(o,i.bind(r),t);return s?pr(s):Kt(),a}function Hu(e,n){const t=n.split(".");return()=>{let r=e;for(let o=0;o<t.length&&r;o++)r=r[t[o]];return r}}function Ft(e,n){if(!je(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),We(e))Ft(e.value,n);else if(ce(e))for(let t=0;t<e.length;t++)Ft(e[t],n);else if(lu(e)||ir(e))e.forEach(t=>{Ft(t,n)});else if(uu(e))for(const t in e)Ft(e[t],n);return e}function Mu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dn(()=>{e.isMounted=!0}),ho(()=>{e.isUnmounting=!0}),e}const Sn=[Function,Array],zg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},setup(e,{slots:n}){const t=Oi(),r=Mu();let o;return()=>{const i=n.default&&Ga(n.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const S of i)if(S.type!==_n){s=S;break}}const a=be(e),{mode:l}=a;if(r.isLeaving)return es(s);const d=ql(s);if(!d)return es(s);const c=io(d,a,r,t);so(d,c);const p=t.subTree,f=p&&ql(p);let m=!1;const{getTransitionKey:h}=d.type;if(h){const S=h();o===void 0?o=S:S!==o&&(o=S,m=!0)}if(f&&f.type!==_n&&(!Ht(d,f)||m)){const S=io(f,a,r,t);if(so(f,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},es(s);l==="in-out"&&d.type!==_n&&(S.delayLeave=(b,y,_)=>{const k=$u(r,f);k[String(f.key)]=f,b._leaveCb=()=>{y(),b._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=_})}return s}}},Fu=zg;function $u(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function io(e,n,t,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:d,onEnterCancelled:c,onBeforeLeave:p,onLeave:f,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:S,onAppear:b,onAfterAppear:y,onAppearCancelled:_}=n,k=String(e.key),A=$u(t,e),R=(x,w)=>{x&&Tn(x,r,9,w)},D=(x,w)=>{const $=w[1];R(x,w),ce(x)?x.every(Z=>Z.length<=1)&&$():x.length<=1&&$()},F={mode:i,persisted:s,beforeEnter(x){let w=a;if(!t.isMounted)if(o)w=S||a;else return;x._leaveCb&&x._leaveCb(!0);const $=A[k];$&&Ht(e,$)&&$.el._leaveCb&&$.el._leaveCb(),R(w,[x])},enter(x){let w=l,$=d,Z=c;if(!t.isMounted)if(o)w=b||l,$=y||d,Z=_||c;else return;let j=!1;const de=x._enterCb=Q=>{j||(j=!0,Q?R(Z,[x]):R($,[x]),F.delayedLeave&&F.delayedLeave(),x._enterCb=void 0)};w?D(w,[x,de]):de()},leave(x,w){const $=String(e.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return w();R(p,[x]);let Z=!1;const j=x._leaveCb=de=>{Z||(Z=!0,w(),de?R(h,[x]):R(m,[x]),x._leaveCb=void 0,A[$]===e&&delete A[$])};A[$]=e,f?D(f,[x,j]):j()},clone(x){return io(x,n,t,r)}};return F}function es(e){if(Ti(e))return e=qn(e),e.children=null,e}function ql(e){return Ti(e)?e.children?e.children[0]:void 0:e}function so(e,n){e.shapeFlag&6&&e.component?so(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Ga(e,n=!1,t){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=t==null?s.key:String(t)+String(s.key!=null?s.key:i);s.type===Qe?(s.patchFlag&128&&o++,r=r.concat(Ga(s.children,n,a))):(n||s.type!==_n)&&r.push(a!=null?qn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function re(e){return fe(e)?{setup:e,name:e.name}:e}const Wr=e=>!!e.type.__asyncLoader,Ti=e=>e.type.__isKeepAlive;function Gg(e,n){Ku(e,"a",n)}function ju(e,n){Ku(e,"da",n)}function Ku(e,n,t=Ve){const r=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(_i(n,r,t),t){let o=t.parent;for(;o&&o.parent;)Ti(o.parent.vnode)&&qg(r,n,t,o),o=o.parent}}function qg(e,n,t,r){const o=_i(n,e,r,!0);qt(()=>{Aa(r[n],o)},t)}function _i(e,n,t=Ve,r=!1){if(t){const o=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...s)=>{if(t.isUnmounted)return;Er(),pr(t);const a=Tn(n,t,e,s);return Kt(),Tr(),a});return r?o.unshift(i):o.push(i),i}}const at=e=>(n,t=Ve)=>(!co||e==="sp")&&_i(e,(...r)=>n(...r),t),Vg=at("bm"),dn=at("m"),Jg=at("bu"),_r=at("u"),ho=at("bum"),qt=at("um"),Zg=at("sp"),Yg=at("rtg"),Xg=at("rtc");function Qg(e,n=Ve){_i("ec",e,n)}function ev(e,n){const t=rn;if(t===null)return e;const r=Ri(t)||t.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[s,a,l,d=Fe]=n[i];s&&(fe(s)&&(s={mounted:s,updated:s}),s.deep&&Ft(a),o.push({dir:s,instance:r,value:a,oldValue:void 0,arg:l,modifiers:d}))}return e}function xt(e,n,t,r){const o=e.dirs,i=n&&n.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[r];l&&(Er(),Tn(l,t,8,[e.el,a,e,n]),Tr())}}const qa="components";function ye(e,n){return Wu(qa,e,!0,n)||e}const Uu=Symbol();function nv(e){return Ge(e)?Wu(qa,e,!1)||e:e||Uu}function Wu(e,n,t=!0,r=!1){const o=rn||Ve;if(o){const i=o.type;if(e===qa){const a=wv(i,!1);if(a&&(a===n||a===Gn(n)||a===hi(Gn(n))))return i}const s=Vl(o[e]||i[e],n)||Vl(o.appContext[e],n);return!s&&r?i:s}}function Vl(e,n){return e&&(e[n]||e[Gn(n)]||e[hi(Gn(n))])}function Va(e,n,t,r){let o;const i=t&&t[r];if(ce(e)||Ge(e)){o=new Array(e.length);for(let s=0,a=e.length;s<a;s++)o[s]=n(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,i&&i[s])}else if(je(e))if(e[Symbol.iterator])o=Array.from(e,(s,a)=>n(s,a,void 0,i&&i[a]));else{const s=Object.keys(e);o=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const d=s[a];o[a]=n(e[d],d,a,i&&i[a])}}else o=[];return t&&(t[r]=o),o}function Qs(e,n){for(let t=0;t<n.length;t++){const r=n[t];if(ce(r))for(let o=0;o<r.length;o++)e[r[o].name]=r[o].fn;else r&&(e[r.name]=r.key?(...o)=>{const i=r.fn(...o);return i&&(i.key=r.key),i}:r.fn)}return e}function ve(e,n,t={},r,o){if(rn.isCE||rn.parent&&Wr(rn.parent)&&rn.parent.isCE)return n!=="default"&&(t.name=n),G("slot",t,r&&r());let i=e[n];i&&i._c&&(i._d=!1),q();const s=i&&zu(i(t)),a=$e(Qe,{key:t.key||s&&s.key||`_${n}`},s||(r?r():[]),s&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function zu(e){return e.some(n=>lo(n)?!(n.type===_n||n.type===Qe&&!zu(n.children)):!0)?e:null}const ea=e=>e?tp(e)?Ri(e)||e.proxy:ea(e.parent):null,zr=nn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>Ja(e),$forceUpdate:e=>e.f||(e.f=()=>za(e.update)),$nextTick:e=>e.n||(e.n=zt.bind(e.proxy)),$watch:e=>Wg.bind(e)}),ns=(e,n)=>e!==Fe&&!e.__isScriptSetup&&ke(e,n),tv={get({_:e},n){const{ctx:t,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:l}=e;let d;if(n[0]!=="$"){const m=s[n];if(m!==void 0)switch(m){case 1:return r[n];case 2:return o[n];case 4:return t[n];case 3:return i[n]}else{if(ns(r,n))return s[n]=1,r[n];if(o!==Fe&&ke(o,n))return s[n]=2,o[n];if((d=e.propsOptions[0])&&ke(d,n))return s[n]=3,i[n];if(t!==Fe&&ke(t,n))return s[n]=4,t[n];na&&(s[n]=0)}}const c=zr[n];let p,f;if(c)return n==="$attrs"&&gn(e,"get",n),c(e);if((p=a.__cssModules)&&(p=p[n]))return p;if(t!==Fe&&ke(t,n))return s[n]=4,t[n];if(f=l.config.globalProperties,ke(f,n))return f[n]},set({_:e},n,t){const{data:r,setupState:o,ctx:i}=e;return ns(o,n)?(o[n]=t,!0):r!==Fe&&ke(r,n)?(r[n]=t,!0):ke(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!t[s]||e!==Fe&&ke(e,s)||ns(n,s)||(a=i[0])&&ke(a,s)||ke(r,s)||ke(zr,s)||ke(o.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ke(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let na=!0;function rv(e){const n=Ja(e),t=e.proxy,r=e.ctx;na=!1,n.beforeCreate&&Jl(n.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:d,created:c,beforeMount:p,mounted:f,beforeUpdate:m,updated:h,activated:S,deactivated:b,beforeDestroy:y,beforeUnmount:_,destroyed:k,unmounted:A,render:R,renderTracked:D,renderTriggered:F,errorCaptured:x,serverPrefetch:w,expose:$,inheritAttrs:Z,components:j,directives:de,filters:Q}=n;if(d&&ov(d,r,null,e.appContext.config.unwrapInjectedRef),s)for(const Ee in s){const oe=s[Ee];fe(oe)&&(r[Ee]=oe.bind(t))}if(o){const Ee=o.call(t,t);je(Ee)&&(e.data=Pn(Ee))}if(na=!0,i)for(const Ee in i){const oe=i[Ee],ge=fe(oe)?oe.bind(t,t):fe(oe.get)?oe.get.bind(t,t):In,_e=!fe(oe)&&fe(oe.set)?oe.set.bind(t):In,Re=N({get:ge,set:_e});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Te=>Re.value=Te})}if(a)for(const Ee in a)Gu(a[Ee],r,t,Ee);if(l){const Ee=fe(l)?l.call(t):l;Reflect.ownKeys(Ee).forEach(oe=>{Tt(oe,Ee[oe])})}c&&Jl(c,e,"c");function Oe(Ee,oe){ce(oe)?oe.forEach(ge=>Ee(ge.bind(t))):oe&&Ee(oe.bind(t))}if(Oe(Vg,p),Oe(dn,f),Oe(Jg,m),Oe(_r,h),Oe(Gg,S),Oe(ju,b),Oe(Qg,x),Oe(Xg,D),Oe(Yg,F),Oe(ho,_),Oe(qt,A),Oe(Zg,w),ce($))if($.length){const Ee=e.exposed||(e.exposed={});$.forEach(oe=>{Object.defineProperty(Ee,oe,{get:()=>t[oe],set:ge=>t[oe]=ge})})}else e.exposed||(e.exposed={});R&&e.render===In&&(e.render=R),Z!=null&&(e.inheritAttrs=Z),j&&(e.components=j),de&&(e.directives=de)}function ov(e,n,t=In,r=!1){ce(e)&&(e=ta(e));for(const o in e){const i=e[o];let s;je(i)?"default"in i?s=ze(i.from||o,i.default,!0):s=ze(i.from||o):s=ze(i),We(s)&&r?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):n[o]=s}}function Jl(e,n,t){Tn(ce(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Gu(e,n,t,r){const o=r.includes(".")?Hu(t,r):()=>t[r];if(Ge(e)){const i=n[e];fe(i)&&en(o,i)}else if(fe(e))en(o,e.bind(t));else if(je(e))if(ce(e))e.forEach(i=>Gu(i,n,t,r));else{const i=fe(e.handler)?e.handler.bind(t):n[e.handler];fe(i)&&en(o,i,e)}}function Ja(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(n);let l;return a?l=a:!o.length&&!t&&!r?l=n:(l={},o.length&&o.forEach(d=>ri(l,d,s,!0)),ri(l,n,s)),je(n)&&i.set(n,l),l}function ri(e,n,t,r=!1){const{mixins:o,extends:i}=n;i&&ri(e,i,t,!0),o&&o.forEach(s=>ri(e,s,t,!0));for(const s in n)if(!(r&&s==="expose")){const a=iv[s]||t&&t[s];e[s]=a?a(e[s],n[s]):n[s]}return e}const iv={data:Zl,props:At,emits:At,methods:At,computed:At,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:At,directives:At,watch:av,provide:Zl,inject:sv};function Zl(e,n){return n?e?function(){return nn(fe(e)?e.call(this,this):e,fe(n)?n.call(this,this):n)}:n:e}function sv(e,n){return At(ta(e),ta(n))}function ta(e){if(ce(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function sn(e,n){return e?[...new Set([].concat(e,n))]:n}function At(e,n){return e?nn(nn(Object.create(null),e),n):n}function av(e,n){if(!e)return n;if(!n)return e;const t=nn(Object.create(null),e);for(const r in n)t[r]=sn(e[r],n[r]);return t}function lv(e,n,t,r=!1){const o={},i={};Qo(i,ki,1),e.propsDefaults=Object.create(null),qu(e,n,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);t?e.props=r?o:Pg(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function cv(e,n,t,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,a=be(o),[l]=e.propsOptions;let d=!1;if((r||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let f=c[p];if(Si(e.emitsOptions,f))continue;const m=n[f];if(l)if(ke(i,f))m!==i[f]&&(i[f]=m,d=!0);else{const h=Gn(f);o[h]=ra(l,a,h,m,e,!1)}else m!==i[f]&&(i[f]=m,d=!0)}}}else{qu(e,n,o,i)&&(d=!0);let c;for(const p in a)(!n||!ke(n,p)&&((c=Sr(p))===p||!ke(n,c)))&&(l?t&&(t[p]!==void 0||t[c]!==void 0)&&(o[p]=ra(l,a,p,void 0,e,!0)):delete o[p]);if(i!==a)for(const p in i)(!n||!ke(n,p))&&(delete i[p],d=!0)}d&&ot(e,"set","$attrs")}function qu(e,n,t,r){const[o,i]=e.propsOptions;let s=!1,a;if(n)for(let l in n){if(Uo(l))continue;const d=n[l];let c;o&&ke(o,c=Gn(l))?!i||!i.includes(c)?t[c]=d:(a||(a={}))[c]=d:Si(e.emitsOptions,l)||(!(l in r)||d!==r[l])&&(r[l]=d,s=!0)}if(i){const l=be(t),d=a||Fe;for(let c=0;c<i.length;c++){const p=i[c];t[p]=ra(o,l,p,d[p],e,!ke(d,p))}}return s}function ra(e,n,t,r,o,i){const s=e[t];if(s!=null){const a=ke(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&fe(l)){const{propsDefaults:d}=o;t in d?r=d[t]:(pr(o),r=d[t]=l.call(null,n),Kt())}else r=l}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===Sr(t))&&(r=!0))}return r}function Vu(e,n,t=!1){const r=n.propsCache,o=r.get(e);if(o)return o;const i=e.props,s={},a=[];let l=!1;if(!fe(e)){const c=p=>{l=!0;const[f,m]=Vu(p,n,!0);nn(s,f),m&&a.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return je(e)&&r.set(e,or),or;if(ce(i))for(let c=0;c<i.length;c++){const p=Gn(i[c]);Yl(p)&&(s[p]=Fe)}else if(i)for(const c in i){const p=Gn(c);if(Yl(p)){const f=i[c],m=s[p]=ce(f)||fe(f)?{type:f}:Object.assign({},f);if(m){const h=ec(Boolean,m.type),S=ec(String,m.type);m[0]=h>-1,m[1]=S<0||h<S,(h>-1||ke(m,"default"))&&a.push(p)}}}const d=[s,a];return je(e)&&r.set(e,d),d}function Yl(e){return e[0]!=="$"}function Xl(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function Ql(e,n){return Xl(e)===Xl(n)}function ec(e,n){return ce(n)?n.findIndex(t=>Ql(t,e)):fe(n)&&Ql(n,e)?0:-1}const Ju=e=>e[0]==="_"||e==="$stable",Za=e=>ce(e)?e.map(jn):[jn(e)],dv=(e,n,t)=>{if(n._n)return n;const r=ee((...o)=>Za(n(...o)),t);return r._c=!1,r},Zu=(e,n,t)=>{const r=e._ctx;for(const o in e){if(Ju(o))continue;const i=e[o];if(fe(i))n[o]=dv(o,i,r);else if(i!=null){const s=Za(i);n[o]=()=>s}}},Yu=(e,n)=>{const t=Za(n);e.slots.default=()=>t},uv=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=be(n),Qo(n,"_",t)):Zu(n,e.slots={})}else e.slots={},n&&Yu(e,n);Qo(e.slots,ki,1)},pv=(e,n,t)=>{const{vnode:r,slots:o}=e;let i=!0,s=Fe;if(r.shapeFlag&32){const a=n._;a?t&&a===1?i=!1:(nn(o,n),!t&&a===1&&delete o._):(i=!n.$stable,Zu(n,o)),s=n}else n&&(Yu(e,n),s={default:1});if(i)for(const a in o)!Ju(a)&&!(a in s)&&delete o[a]};function Xu(){return{app:null,config:{isNativeTag:$m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fv=0;function mv(e,n){return function(r,o=null){fe(r)||(r=Object.assign({},r)),o!=null&&!je(o)&&(o=null);const i=Xu(),s=new Set;let a=!1;const l=i.app={_uid:fv++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Bv,get config(){return i.config},set config(d){},use(d,...c){return s.has(d)||(d&&fe(d.install)?(s.add(d),d.install(l,...c)):fe(d)&&(s.add(d),d(l,...c))),l},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),l},component(d,c){return c?(i.components[d]=c,l):i.components[d]},directive(d,c){return c?(i.directives[d]=c,l):i.directives[d]},mount(d,c,p){if(!a){const f=G(r,o);return f.appContext=i,c&&n?n(f,d):e(f,d,p),a=!0,l._container=d,d.__vue_app__=l,Ri(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(d,c){return i.provides[d]=c,l}};return l}}function oa(e,n,t,r,o=!1){if(ce(e)){e.forEach((f,m)=>oa(f,n&&(ce(n)?n[m]:n),t,r,o));return}if(Wr(r)&&!o)return;const i=r.shapeFlag&4?Ri(r.component)||r.component.proxy:r.el,s=o?null:i,{i:a,r:l}=e,d=n&&n.r,c=a.refs===Fe?a.refs={}:a.refs,p=a.setupState;if(d!=null&&d!==l&&(Ge(d)?(c[d]=null,ke(p,d)&&(p[d]=null)):We(d)&&(d.value=null)),fe(l))Et(l,a,12,[s,c]);else{const f=Ge(l),m=We(l);if(f||m){const h=()=>{if(e.f){const S=f?ke(p,l)?p[l]:c[l]:l.value;o?ce(S)&&Aa(S,i):ce(S)?S.includes(i)||S.push(i):f?(c[l]=[i],ke(p,l)&&(p[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else f?(c[l]=s,ke(p,l)&&(p[l]=s)):m&&(l.value=s,e.k&&(c[e.k]=s))};s?(h.id=-1,un(h,t)):h()}}}const un=Ug;function gv(e){return vv(e)}function vv(e,n){const t=Vm();t.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:d,setElementText:c,parentNode:p,nextSibling:f,setScopeId:m=In,insertStaticContent:h}=e,S=(g,v,E,O=null,C=null,M=null,z=!1,B=null,W=!!v.dynamicChildren)=>{if(g===v)return;g&&!Ht(g,v)&&(O=H(g),Te(g,C,M,!0),g=null),v.patchFlag===-2&&(W=!1,v.dynamicChildren=null);const{type:I,ref:P,shapeFlag:L}=v;switch(I){case Pi:b(g,v,E,O);break;case _n:y(g,v,E,O);break;case ts:g==null&&_(v,E,O,z);break;case Qe:j(g,v,E,O,C,M,z,B,W);break;default:L&1?R(g,v,E,O,C,M,z,B,W):L&6?de(g,v,E,O,C,M,z,B,W):(L&64||L&128)&&I.process(g,v,E,O,C,M,z,B,W,ne)}P!=null&&C&&oa(P,g&&g.ref,M,v||g,!v)},b=(g,v,E,O)=>{if(g==null)r(v.el=a(v.children),E,O);else{const C=v.el=g.el;v.children!==g.children&&d(C,v.children)}},y=(g,v,E,O)=>{g==null?r(v.el=l(v.children||""),E,O):v.el=g.el},_=(g,v,E,O)=>{[g.el,g.anchor]=h(g.children,v,E,O,g.el,g.anchor)},k=({el:g,anchor:v},E,O)=>{let C;for(;g&&g!==v;)C=f(g),r(g,E,O),g=C;r(v,E,O)},A=({el:g,anchor:v})=>{let E;for(;g&&g!==v;)E=f(g),o(g),g=E;o(v)},R=(g,v,E,O,C,M,z,B,W)=>{z=z||v.type==="svg",g==null?D(v,E,O,C,M,z,B,W):w(g,v,C,M,z,B,W)},D=(g,v,E,O,C,M,z,B)=>{let W,I;const{type:P,props:L,shapeFlag:J,transition:te,dirs:pe}=g;if(W=g.el=s(g.type,M,L&&L.is,L),J&8?c(W,g.children):J&16&&x(g.children,W,null,O,C,M&&P!=="foreignObject",z,B),pe&&xt(g,null,O,"created"),F(W,g,g.scopeId,z,O),L){for(const Ae in L)Ae!=="value"&&!Uo(Ae)&&i(W,Ae,null,L[Ae],M,g.children,O,C,K);"value"in L&&i(W,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Fn(I,O,g)}pe&&xt(g,null,O,"beforeMount");const Le=(!C||C&&!C.pendingBranch)&&te&&!te.persisted;Le&&te.beforeEnter(W),r(W,v,E),((I=L&&L.onVnodeMounted)||Le||pe)&&un(()=>{I&&Fn(I,O,g),Le&&te.enter(W),pe&&xt(g,null,O,"mounted")},C)},F=(g,v,E,O,C)=>{if(E&&m(g,E),O)for(let M=0;M<O.length;M++)m(g,O[M]);if(C){let M=C.subTree;if(v===M){const z=C.vnode;F(g,z,z.scopeId,z.slotScopeIds,C.parent)}}},x=(g,v,E,O,C,M,z,B,W=0)=>{for(let I=W;I<g.length;I++){const P=g[I]=B?ft(g[I]):jn(g[I]);S(null,P,v,E,O,C,M,z,B)}},w=(g,v,E,O,C,M,z)=>{const B=v.el=g.el;let{patchFlag:W,dynamicChildren:I,dirs:P}=v;W|=g.patchFlag&16;const L=g.props||Fe,J=v.props||Fe;let te;E&&It(E,!1),(te=J.onVnodeBeforeUpdate)&&Fn(te,E,v,g),P&&xt(v,g,E,"beforeUpdate"),E&&It(E,!0);const pe=C&&v.type!=="foreignObject";if(I?$(g.dynamicChildren,I,B,E,O,pe,M):z||oe(g,v,B,null,E,O,pe,M,!1),W>0){if(W&16)Z(B,v,L,J,E,O,C);else if(W&2&&L.class!==J.class&&i(B,"class",null,J.class,C),W&4&&i(B,"style",L.style,J.style,C),W&8){const Le=v.dynamicProps;for(let Ae=0;Ae<Le.length;Ae++){const Ye=Le[Ae],kn=L[Ye],Yt=J[Ye];(Yt!==kn||Ye==="value")&&i(B,Ye,kn,Yt,C,g.children,E,O,K)}}W&1&&g.children!==v.children&&c(B,v.children)}else!z&&I==null&&Z(B,v,L,J,E,O,C);((te=J.onVnodeUpdated)||P)&&un(()=>{te&&Fn(te,E,v,g),P&&xt(v,g,E,"updated")},O)},$=(g,v,E,O,C,M,z)=>{for(let B=0;B<v.length;B++){const W=g[B],I=v[B],P=W.el&&(W.type===Qe||!Ht(W,I)||W.shapeFlag&70)?p(W.el):E;S(W,I,P,null,O,C,M,z,!0)}},Z=(g,v,E,O,C,M,z)=>{if(E!==O){if(E!==Fe)for(const B in E)!Uo(B)&&!(B in O)&&i(g,B,E[B],null,z,v.children,C,M,K);for(const B in O){if(Uo(B))continue;const W=O[B],I=E[B];W!==I&&B!=="value"&&i(g,B,I,W,z,v.children,C,M,K)}"value"in O&&i(g,"value",E.value,O.value)}},j=(g,v,E,O,C,M,z,B,W)=>{const I=v.el=g?g.el:a(""),P=v.anchor=g?g.anchor:a("");let{patchFlag:L,dynamicChildren:J,slotScopeIds:te}=v;te&&(B=B?B.concat(te):te),g==null?(r(I,E,O),r(P,E,O),x(v.children,E,P,C,M,z,B,W)):L>0&&L&64&&J&&g.dynamicChildren?($(g.dynamicChildren,J,E,C,M,z,B),(v.key!=null||C&&v===C.subTree)&&Ya(g,v,!0)):oe(g,v,E,P,C,M,z,B,W)},de=(g,v,E,O,C,M,z,B,W)=>{v.slotScopeIds=B,g==null?v.shapeFlag&512?C.ctx.activate(v,E,O,z,W):Q(v,E,O,C,M,z,W):xe(g,v,W)},Q=(g,v,E,O,C,M,z)=>{const B=g.component=Rv(g,O,C);if(Ti(g)&&(B.ctx.renderer=ne),Cv(B),B.asyncDep){if(C&&C.registerDep(B,Oe),!g.el){const W=B.subTree=G(_n);y(null,W,v,E)}return}Oe(B,g,v,E,C,M,z)},xe=(g,v,E)=>{const O=v.component=g.component;if($g(g,v,E))if(O.asyncDep&&!O.asyncResolved){Ee(O,v,E);return}else O.next=v,wg(O.update),O.update();else v.el=g.el,O.vnode=v},Oe=(g,v,E,O,C,M,z)=>{const B=()=>{if(g.isMounted){let{next:P,bu:L,u:J,parent:te,vnode:pe}=g,Le=P,Ae;It(g,!1),P?(P.el=pe.el,Ee(g,P,z)):P=pe,L&&Xi(L),(Ae=P.props&&P.props.onVnodeBeforeUpdate)&&Fn(Ae,te,P,pe),It(g,!0);const Ye=Qi(g),kn=g.subTree;g.subTree=Ye,S(kn,Ye,p(kn.el),H(kn),g,C,M),P.el=Ye.el,Le===null&&jg(g,Ye.el),J&&un(J,C),(Ae=P.props&&P.props.onVnodeUpdated)&&un(()=>Fn(Ae,te,P,pe),C)}else{let P;const{el:L,props:J}=v,{bm:te,m:pe,parent:Le}=g,Ae=Wr(v);if(It(g,!1),te&&Xi(te),!Ae&&(P=J&&J.onVnodeBeforeMount)&&Fn(P,Le,v),It(g,!0),L&&me){const Ye=()=>{g.subTree=Qi(g),me(L,g.subTree,g,C,null)};Ae?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ye()):Ye()}else{const Ye=g.subTree=Qi(g);S(null,Ye,E,O,g,C,M),v.el=Ye.el}if(pe&&un(pe,C),!Ae&&(P=J&&J.onVnodeMounted)){const Ye=v;un(()=>Fn(P,Le,Ye),C)}(v.shapeFlag&256||Le&&Wr(Le.vnode)&&Le.vnode.shapeFlag&256)&&g.a&&un(g.a,C),g.isMounted=!0,v=E=O=null}},W=g.effect=new Ha(B,()=>za(I),g.scope),I=g.update=()=>W.run();I.id=g.uid,It(g,!0),I()},Ee=(g,v,E)=>{v.component=g;const O=g.vnode.props;g.vnode=v,g.next=null,cv(g,v.props,O,E),pv(g,v.children,E),Er(),zl(),Tr()},oe=(g,v,E,O,C,M,z,B,W=!1)=>{const I=g&&g.children,P=g?g.shapeFlag:0,L=v.children,{patchFlag:J,shapeFlag:te}=v;if(J>0){if(J&128){_e(I,L,E,O,C,M,z,B,W);return}else if(J&256){ge(I,L,E,O,C,M,z,B,W);return}}te&8?(P&16&&K(I,C,M),L!==I&&c(E,L)):P&16?te&16?_e(I,L,E,O,C,M,z,B,W):K(I,C,M,!0):(P&8&&c(E,""),te&16&&x(L,E,O,C,M,z,B,W))},ge=(g,v,E,O,C,M,z,B,W)=>{g=g||or,v=v||or;const I=g.length,P=v.length,L=Math.min(I,P);let J;for(J=0;J<L;J++){const te=v[J]=W?ft(v[J]):jn(v[J]);S(g[J],te,E,null,C,M,z,B,W)}I>P?K(g,C,M,!0,!1,L):x(v,E,O,C,M,z,B,W,L)},_e=(g,v,E,O,C,M,z,B,W)=>{let I=0;const P=v.length;let L=g.length-1,J=P-1;for(;I<=L&&I<=J;){const te=g[I],pe=v[I]=W?ft(v[I]):jn(v[I]);if(Ht(te,pe))S(te,pe,E,null,C,M,z,B,W);else break;I++}for(;I<=L&&I<=J;){const te=g[L],pe=v[J]=W?ft(v[J]):jn(v[J]);if(Ht(te,pe))S(te,pe,E,null,C,M,z,B,W);else break;L--,J--}if(I>L){if(I<=J){const te=J+1,pe=te<P?v[te].el:O;for(;I<=J;)S(null,v[I]=W?ft(v[I]):jn(v[I]),E,pe,C,M,z,B,W),I++}}else if(I>J)for(;I<=L;)Te(g[I],C,M,!0),I++;else{const te=I,pe=I,Le=new Map;for(I=pe;I<=J;I++){const hn=v[I]=W?ft(v[I]):jn(v[I]);hn.key!=null&&Le.set(hn.key,I)}let Ae,Ye=0;const kn=J-pe+1;let Yt=!1,Nl=0;const Nr=new Array(kn);for(I=0;I<kn;I++)Nr[I]=0;for(I=te;I<=L;I++){const hn=g[I];if(Ye>=kn){Te(hn,C,M,!0);continue}let Mn;if(hn.key!=null)Mn=Le.get(hn.key);else for(Ae=pe;Ae<=J;Ae++)if(Nr[Ae-pe]===0&&Ht(hn,v[Ae])){Mn=Ae;break}Mn===void 0?Te(hn,C,M,!0):(Nr[Mn-pe]=I+1,Mn>=Nl?Nl=Mn:Yt=!0,S(hn,v[Mn],E,null,C,M,z,B,W),Ye++)}const Dl=Yt?hv(Nr):or;for(Ae=Dl.length-1,I=kn-1;I>=0;I--){const hn=pe+I,Mn=v[hn],Bl=hn+1<P?v[hn+1].el:O;Nr[I]===0?S(null,Mn,E,Bl,C,M,z,B,W):Yt&&(Ae<0||I!==Dl[Ae]?Re(Mn,E,Bl,2):Ae--)}}},Re=(g,v,E,O,C=null)=>{const{el:M,type:z,transition:B,children:W,shapeFlag:I}=g;if(I&6){Re(g.component.subTree,v,E,O);return}if(I&128){g.suspense.move(v,E,O);return}if(I&64){z.move(g,v,E,ne);return}if(z===Qe){r(M,v,E);for(let L=0;L<W.length;L++)Re(W[L],v,E,O);r(g.anchor,v,E);return}if(z===ts){k(g,v,E);return}if(O!==2&&I&1&&B)if(O===0)B.beforeEnter(M),r(M,v,E),un(()=>B.enter(M),C);else{const{leave:L,delayLeave:J,afterLeave:te}=B,pe=()=>r(M,v,E),Le=()=>{L(M,()=>{pe(),te&&te()})};J?J(M,pe,Le):Le()}else r(M,v,E)},Te=(g,v,E,O=!1,C=!1)=>{const{type:M,props:z,ref:B,children:W,dynamicChildren:I,shapeFlag:P,patchFlag:L,dirs:J}=g;if(B!=null&&oa(B,null,E,g,!0),P&256){v.ctx.deactivate(g);return}const te=P&1&&J,pe=!Wr(g);let Le;if(pe&&(Le=z&&z.onVnodeBeforeUnmount)&&Fn(Le,v,g),P&6)T(g.component,E,O);else{if(P&128){g.suspense.unmount(E,O);return}te&&xt(g,null,v,"beforeUnmount"),P&64?g.type.remove(g,v,E,C,ne,O):I&&(M!==Qe||L>0&&L&64)?K(I,v,E,!1,!0):(M===Qe&&L&384||!C&&P&16)&&K(W,v,E),O&&Ke(g)}(pe&&(Le=z&&z.onVnodeUnmounted)||te)&&un(()=>{Le&&Fn(Le,v,g),te&&xt(g,null,v,"unmounted")},E)},Ke=g=>{const{type:v,el:E,anchor:O,transition:C}=g;if(v===Qe){He(E,O);return}if(v===ts){A(g);return}const M=()=>{o(E),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(g.shapeFlag&1&&C&&!C.persisted){const{leave:z,delayLeave:B}=C,W=()=>z(E,M);B?B(g.el,M,W):W()}else M()},He=(g,v)=>{let E;for(;g!==v;)E=f(g),o(g),g=E;o(v)},T=(g,v,E)=>{const{bum:O,scope:C,update:M,subTree:z,um:B}=g;O&&Xi(O),C.stop(),M&&(M.active=!1,Te(z,g,v,E)),B&&un(B,v),un(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},K=(g,v,E,O=!1,C=!1,M=0)=>{for(let z=M;z<g.length;z++)Te(g[z],v,E,O,C)},H=g=>g.shapeFlag&6?H(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),Y=(g,v,E)=>{g==null?v._vnode&&Te(v._vnode,null,null,!0):S(v._vnode||null,g,v,null,null,null,E),zl(),Au(),v._vnode=g},ne={p:S,um:Te,m:Re,r:Ke,mt:Q,mc:x,pc:oe,pbc:$,n:H,o:e};let Ce,me;return n&&([Ce,me]=n(ne)),{render:Y,hydrate:Ce,createApp:mv(Y,Ce)}}function It({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Ya(e,n,t=!1){const r=e.children,o=n.children;if(ce(r)&&ce(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=ft(o[i]),a.el=s.el),t||Ya(s,a)),a.type===Pi&&(a.el=s.el)}}function hv(e){const n=e.slice(),t=[0];let r,o,i,s,a;const l=e.length;for(r=0;r<l;r++){const d=e[r];if(d!==0){if(o=t[t.length-1],e[o]<d){n[r]=o,t.push(r);continue}for(i=0,s=t.length-1;i<s;)a=i+s>>1,e[t[a]]<d?i=a+1:s=a;d<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=n[s];return t}const bv=e=>e.__isTeleport,Gr=e=>e&&(e.disabled||e.disabled===""),nc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ia=(e,n)=>{const t=e&&e.to;return Ge(t)?n?n(t):null:t},yv={__isTeleport:!0,process(e,n,t,r,o,i,s,a,l,d){const{mc:c,pc:p,pbc:f,o:{insert:m,querySelector:h,createText:S,createComment:b}}=d,y=Gr(n.props);let{shapeFlag:_,children:k,dynamicChildren:A}=n;if(e==null){const R=n.el=S(""),D=n.anchor=S("");m(R,t,r),m(D,t,r);const F=n.target=ia(n.props,h),x=n.targetAnchor=S("");F&&(m(x,F),s=s||nc(F));const w=($,Z)=>{_&16&&c(k,$,Z,o,i,s,a,l)};y?w(t,D):F&&w(F,x)}else{n.el=e.el;const R=n.anchor=e.anchor,D=n.target=e.target,F=n.targetAnchor=e.targetAnchor,x=Gr(e.props),w=x?t:D,$=x?R:F;if(s=s||nc(D),A?(f(e.dynamicChildren,A,w,o,i,s,a),Ya(e,n,!0)):l||p(e,n,w,$,o,i,s,a,!1),y)x||Ao(n,t,R,d,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Z=n.target=ia(n.props,h);Z&&Ao(n,Z,null,d,0)}else x&&Ao(n,D,F,d,1)}Qu(n)},remove(e,n,t,r,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:l,anchor:d,targetAnchor:c,target:p,props:f}=e;if(p&&i(c),(s||!Gr(f))&&(i(d),a&16))for(let m=0;m<l.length;m++){const h=l[m];o(h,n,t,!0,!!h.dynamicChildren)}},move:Ao,hydrate:Sv};function Ao(e,n,t,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,n,t);const{el:s,anchor:a,shapeFlag:l,children:d,props:c}=e,p=i===2;if(p&&r(s,n,t),(!p||Gr(c))&&l&16)for(let f=0;f<d.length;f++)o(d[f],n,t,2);p&&r(a,n,t)}function Sv(e,n,t,r,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l}},d){const c=n.target=ia(n.props,l);if(c){const p=c._lpa||c.firstChild;if(n.shapeFlag&16)if(Gr(n.props))n.anchor=d(s(e),n,a(e),t,r,o,i),n.targetAnchor=p;else{n.anchor=s(e);let f=p;for(;f;)if(f=s(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,c._lpa=n.targetAnchor&&s(n.targetAnchor);break}d(p,n,c,t,r,o,i)}Qu(n)}return n.anchor&&s(n.anchor)}const Ev=yv;function Qu(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Qe=Symbol(void 0),Pi=Symbol(void 0),_n=Symbol(void 0),ts=Symbol(void 0),qr=[];let xn=null;function q(e=!1){qr.push(xn=e?null:[])}function Tv(){qr.pop(),xn=qr[qr.length-1]||null}let ao=1;function tc(e){ao+=e}function ep(e){return e.dynamicChildren=ao>0?xn||or:null,Tv(),ao>0&&xn&&xn.push(e),e}function se(e,n,t,r,o,i){return ep(ue(e,n,t,r,o,i,!0))}function $e(e,n,t,r,o){return ep(G(e,n,t,r,o,!0))}function lo(e){return e?e.__v_isVNode===!0:!1}function Ht(e,n){return e.type===n.type&&e.key===n.key}const ki="__vInternal",np=({key:e})=>e??null,Wo=({ref:e,ref_key:n,ref_for:t})=>e!=null?Ge(e)||We(e)||fe(e)?{i:rn,r:e,k:n,f:!!t}:e:null;function ue(e,n=null,t=null,r=0,o=null,i=e===Qe?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&np(n),ref:n&&Wo(n),scopeId:Ei,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:rn};return a?(Xa(l,t),i&128&&e.normalize(l)):t&&(l.shapeFlag|=Ge(t)?8:16),ao>0&&!s&&xn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xn.push(l),l}const G=_v;function _v(e,n=null,t=null,r=0,o=null,i=!1){if((!e||e===Uu)&&(e=_n),lo(e)){const a=qn(e,n,!0);return t&&Xa(a,t),ao>0&&!i&&xn&&(a.shapeFlag&6?xn[xn.indexOf(e)]=a:xn.push(a)),a.patchFlag|=-2,a}if(Av(e)&&(e=e.__vccOpts),n){n=Pv(n);let{class:a,style:l}=n;a&&!Ge(a)&&(n.class=X(a)),je(l)&&(ku(l)&&!ce(l)&&(l=nn({},l)),n.style=Be(l))}const s=Ge(e)?1:Kg(e)?128:bv(e)?64:je(e)?4:fe(e)?2:0;return ue(e,n,t,r,o,s,i,!0)}function Pv(e){return e?ku(e)||ki in e?nn({},e):e:null}function qn(e,n,t=!1){const{props:r,ref:o,patchFlag:i,children:s}=e,a=n?bo(r||{},n):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&np(a),ref:n&&n.ref?t&&o?ce(o)?o.concat(Wo(n)):[o,Wo(n)]:Wo(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Qe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qn(e.ssContent),ssFallback:e.ssFallback&&qn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ln(e=" ",n=0){return G(Pi,null,e,n)}function ln(e="",n=!1){return n?(q(),$e(_n,null,e)):G(_n,null,e)}function jn(e){return e==null||typeof e=="boolean"?G(_n):ce(e)?G(Qe,null,e.slice()):typeof e=="object"?ft(e):G(Pi,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qn(e)}function Xa(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ce(n))t=16;else if(typeof n=="object")if(r&65){const o=n.default;o&&(o._c&&(o._d=!1),Xa(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(ki in n)?n._ctx=rn:o===3&&rn&&(rn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else fe(n)?(n={default:n,_ctx:rn},t=32):(n=String(n),r&64?(t=16,n=[Ln(n)]):t=8);e.children=n,e.shapeFlag|=t}function bo(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const o in r)if(o==="class")n.class!==r.class&&(n.class=X([n.class,r.class]));else if(o==="style")n.style=Be([n.style,r.style]);else if(mi(o)){const i=n[o],s=r[o];s&&i!==s&&!(ce(i)&&i.includes(s))&&(n[o]=i?[].concat(i,s):s)}else o!==""&&(n[o]=r[o])}return n}function Fn(e,n,t,r=null){Tn(e,n,7,[t,r])}const kv=Xu();let Ov=0;function Rv(e,n,t){const r=e.type,o=(n?n.appContext:e.appContext)||kv,i={uid:Ov++,vnode:e,type:r,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vu(r,o),emitsOptions:Du(r,o),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Dg.bind(null,i),e.ce&&e.ce(i),i}let Ve=null;const Oi=()=>Ve||rn,pr=e=>{Ve=e,e.scope.on()},Kt=()=>{Ve&&Ve.scope.off(),Ve=null};function tp(e){return e.vnode.shapeFlag&4}let co=!1;function Cv(e,n=!1){co=n;const{props:t,children:r}=e.vnode,o=tp(e);lv(e,t,o,n),uv(e,r);const i=o?Lv(e,n):void 0;return co=!1,i}function Lv(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=ur(new Proxy(e.ctx,tv));const{setup:r}=t;if(r){const o=e.setupContext=r.length>1?Iv(e):null;pr(e),Er();const i=Et(r,e,0,[e.props,o]);if(Tr(),Kt(),cu(i)){if(i.then(Kt,Kt),n)return i.then(s=>{rc(e,s,n)}).catch(s=>{yi(s,e,0)});e.asyncDep=i}else rc(e,i,n)}else rp(e,n)}function rc(e,n,t){fe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:je(n)&&(e.setupState=Lu(n)),rp(e,t)}let oc;function rp(e,n,t){const r=e.type;if(!e.render){if(!n&&oc&&!r.render){const o=r.template||Ja(e).template;if(o){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,d=nn(nn({isCustomElement:i,delimiters:a},s),l);r.render=oc(o,d)}}e.render=r.render||In}pr(e),Er(),rv(e),Tr(),Kt()}function xv(e){return new Proxy(e.attrs,{get(n,t){return gn(e,"get","$attrs"),n[t]}})}function Iv(e){const n=r=>{e.exposed=r||{}};let t;return{get attrs(){return t||(t=xv(e))},slots:e.slots,emit:e.emit,expose:n}}function Ri(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Lu(ur(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in zr)return zr[t](e)},has(n,t){return t in n||t in zr}}))}function wv(e,n=!0){return fe(e)?e.displayName||e.name:e.name||n&&e.__name}function Av(e){return fe(e)&&"__vccOpts"in e}const N=(e,n)=>xg(e,n,co);function uo(e,n,t){const r=arguments.length;return r===2?je(n)&&!ce(n)?lo(n)?G(e,null,[n]):G(e,n):G(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&lo(t)&&(t=[t]),G(e,n,t))}const Nv=Symbol(""),Dv=()=>ze(Nv),Bv="3.2.47",Hv="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,ic=Mt&&Mt.createElement("template"),Mv={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const o=n?Mt.createElementNS(Hv,e):Mt.createElement(e,t?{is:t}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,o,i){const s=t?t.previousSibling:n.lastChild;if(o&&(o===i||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===i||!(o=o.nextSibling)););else{ic.innerHTML=r?`<svg>${e}</svg>`:e;const a=ic.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Fv(e,n,t){const r=e._vtc;r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function $v(e,n,t){const r=e.style,o=Ge(t);if(t&&!o){if(n&&!Ge(n))for(const i in n)t[i]==null&&sa(r,i,"");for(const i in t)sa(r,i,t[i])}else{const i=r.display;o?n!==t&&(r.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const sc=/\s*!important$/;function sa(e,n,t){if(ce(t))t.forEach(r=>sa(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=jv(e,n);sc.test(t)?e.setProperty(Sr(r),t.replace(sc,""),"important"):e[r]=t}}const ac=["Webkit","Moz","ms"],rs={};function jv(e,n){const t=rs[n];if(t)return t;let r=Gn(n);if(r!=="filter"&&r in e)return rs[n]=r;r=hi(r);for(let o=0;o<ac.length;o++){const i=ac[o]+r;if(i in e)return rs[n]=i}return n}const lc="http://www.w3.org/1999/xlink";function Kv(e,n,t,r,o){if(r&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(lc,n.slice(6,n.length)):e.setAttributeNS(lc,n,t);else{const i=Fm(n);t==null||i&&!su(t)?e.removeAttribute(n):e.setAttribute(n,i?"":t)}}function Uv(e,n,t,r,o,i,s){if(n==="innerHTML"||n==="textContent"){r&&s(r,o,i),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let a=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=su(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(n)}function Wv(e,n,t,r){e.addEventListener(n,t,r)}function zv(e,n,t,r){e.removeEventListener(n,t,r)}function Gv(e,n,t,r,o=null){const i=e._vei||(e._vei={}),s=i[n];if(r&&s)s.value=r;else{const[a,l]=qv(n);if(r){const d=i[n]=Zv(r,o);Wv(e,a,d,l)}else s&&(zv(e,a,s,l),i[n]=void 0)}}const cc=/(?:Once|Passive|Capture)$/;function qv(e){let n;if(cc.test(e)){n={};let r;for(;r=e.match(cc);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Sr(e.slice(2)),n]}let os=0;const Vv=Promise.resolve(),Jv=()=>os||(Vv.then(()=>os=0),os=Date.now());function Zv(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Tn(Yv(r,t.value),n,5,[r])};return t.value=e,t.attached=Jv(),t}function Yv(e,n){if(ce(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>o=>!o._stopped&&r&&r(o))}else return n}const dc=/^on[a-z]/,Xv=(e,n,t,r,o=!1,i,s,a,l)=>{n==="class"?Fv(e,r,o):n==="style"?$v(e,t,r):mi(n)?wa(n)||Gv(e,n,t,r,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Qv(e,n,r,o))?Uv(e,n,r,i,s,a,l):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Kv(e,n,r,o))};function Qv(e,n,t,r){return r?!!(n==="innerHTML"||n==="textContent"||n in e&&dc.test(n)&&fe(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||dc.test(n)&&Ge(t)?!1:n in e}const dt="transition",Dr="animation",yo=(e,{slots:n})=>uo(Fu,ip(e),n);yo.displayName="Transition";const op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eh=yo.props=nn({},Fu.props,op),wt=(e,n=[])=>{ce(e)?e.forEach(t=>t(...n)):e&&e(...n)},uc=e=>e?ce(e)?e.some(n=>n.length>1):e.length>1:!1;function ip(e){const n={};for(const j in e)j in op||(n[j]=e[j]);if(e.css===!1)return n;const{name:t="v",type:r,duration:o,enterFromClass:i=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=i,appearActiveClass:d=s,appearToClass:c=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=e,h=nh(o),S=h&&h[0],b=h&&h[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:k,onLeave:A,onLeaveCancelled:R,onBeforeAppear:D=y,onAppear:F=_,onAppearCancelled:x=k}=n,w=(j,de,Q)=>{pt(j,de?c:a),pt(j,de?d:s),Q&&Q()},$=(j,de)=>{j._isLeaving=!1,pt(j,p),pt(j,m),pt(j,f),de&&de()},Z=j=>(de,Q)=>{const xe=j?F:_,Oe=()=>w(de,j,Q);wt(xe,[de,Oe]),pc(()=>{pt(de,j?l:i),Qn(de,j?c:a),uc(xe)||fc(de,r,S,Oe)})};return nn(n,{onBeforeEnter(j){wt(y,[j]),Qn(j,i),Qn(j,s)},onBeforeAppear(j){wt(D,[j]),Qn(j,l),Qn(j,d)},onEnter:Z(!1),onAppear:Z(!0),onLeave(j,de){j._isLeaving=!0;const Q=()=>$(j,de);Qn(j,p),ap(),Qn(j,f),pc(()=>{j._isLeaving&&(pt(j,p),Qn(j,m),uc(A)||fc(j,r,b,Q))}),wt(A,[j,Q])},onEnterCancelled(j){w(j,!1),wt(k,[j])},onAppearCancelled(j){w(j,!0),wt(x,[j])},onLeaveCancelled(j){$(j),wt(R,[j])}})}function nh(e){if(e==null)return null;if(je(e))return[is(e.enter),is(e.leave)];{const n=is(e);return[n,n]}}function is(e){return qm(e)}function Qn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function pt(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function pc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let th=0;function fc(e,n,t,r){const o=e._endId=++th,i=()=>{o===e._endId&&r()};if(t)return setTimeout(i,t);const{type:s,timeout:a,propCount:l}=sp(e,n);if(!s)return r();const d=s+"end";let c=0;const p=()=>{e.removeEventListener(d,f),i()},f=m=>{m.target===e&&++c>=l&&p()};setTimeout(()=>{c<l&&p()},a+1),e.addEventListener(d,f)}function sp(e,n){const t=window.getComputedStyle(e),r=h=>(t[h]||"").split(", "),o=r(`${dt}Delay`),i=r(`${dt}Duration`),s=mc(o,i),a=r(`${Dr}Delay`),l=r(`${Dr}Duration`),d=mc(a,l);let c=null,p=0,f=0;n===dt?s>0&&(c=dt,p=s,f=i.length):n===Dr?d>0&&(c=Dr,p=d,f=l.length):(p=Math.max(s,d),c=p>0?s>d?dt:Dr:null,f=c?c===dt?i.length:l.length:0);const m=c===dt&&/\b(transform|all)(,|$)/.test(r(`${dt}Property`).toString());return{type:c,timeout:p,propCount:f,hasTransform:m}}function mc(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>gc(t)+gc(e[r])))}function gc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ap(){return document.body.offsetHeight}const lp=new WeakMap,cp=new WeakMap,dp={name:"TransitionGroup",props:nn({},eh,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Oi(),r=Mu();let o,i;return _r(()=>{if(!o.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!ah(o[0].el,t.vnode.el,s))return;o.forEach(oh),o.forEach(ih);const a=o.filter(sh);ap(),a.forEach(l=>{const d=l.el,c=d.style;Qn(d,s),c.transform=c.webkitTransform=c.transitionDuration="";const p=d._moveCb=f=>{f&&f.target!==d||(!f||/transform$/.test(f.propertyName))&&(d.removeEventListener("transitionend",p),d._moveCb=null,pt(d,s))};d.addEventListener("transitionend",p)})}),()=>{const s=be(e),a=ip(s);let l=s.tag||Qe;o=i,i=n.default?Ga(n.default()):[];for(let d=0;d<i.length;d++){const c=i[d];c.key!=null&&so(c,io(c,a,r,t))}if(o)for(let d=0;d<o.length;d++){const c=o[d];so(c,io(c,a,r,t)),lp.set(c,c.el.getBoundingClientRect())}return G(l,null,i)}}},rh=e=>delete e.mode;dp.props;const up=dp;function oh(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function ih(e){cp.set(e,e.el.getBoundingClientRect())}function sh(e){const n=lp.get(e),t=cp.get(e),r=n.left-t.left,o=n.top-t.top;if(r||o){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${o}px)`,i.transitionDuration="0s",e}}function ah(e,n,t){const r=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),t.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(r);const{hasTransform:i}=sp(r);return o.removeChild(r),i}const lh=["ctrl","shift","alt","meta"],ch={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>lh.some(t=>e[`${t}Key`]&&!n.includes(t))},dh=(e,n)=>(t,...r)=>{for(let o=0;o<n.length;o++){const i=ch[n[o]];if(i&&i(t,n))return}return e(t,...r)},uh={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Br(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),Br(e,!0),r.enter(e)):r.leave(e,()=>{Br(e,!1)}):Br(e,n))},beforeUnmount(e,{value:n}){Br(e,n)}};function Br(e,n){e.style.display=n?e._vod:"none"}const ph=nn({patchProp:Xv},Mv);let vc;function pp(){return vc||(vc=gv(ph))}const hc=(...e)=>{pp().render(...e)},fh=(...e)=>{const n=pp().createApp(...e),{mount:t}=n;return n.mount=r=>{const o=mh(r);if(!o)return;const i=n._component;!fe(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},n};function mh(e){return Ge(e)?document.querySelector(e):e}function gh(e){const n=window.matchMedia(e),t=le(n.matches),r=o=>{t.value=o.matches};return n.addEventListener("change",r),qt(()=>{n.removeEventListener("change",r)}),t}function vh(){const e=gh("(prefers-color-scheme: dark)");return dn(()=>{e.value?(document.body.classList.add("dark"),document.body.setAttribute("arco-theme","dark")):(document.body.classList.remove("dark"),document.body.removeAttribute("arco-theme"))}),en(e,n=>{n?(document.body.classList.add("dark"),document.body.setAttribute("arco-theme","dark")):(document.body.classList.remove("dark"),document.body.removeAttribute("arco-theme"))}),e}const fp=Symbol("IS_DARK"),hh=re({__name:"App",setup(e){const n=vh();return Tt(fp,n),(t,r)=>{const o=ye("router-view");return q(),$e(o)}}}),bh="modulepreload",yh=function(e,n){return new URL(e,n).href},bc={},ss=function(n,t,r){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=yh(i,r),i in bc)return;bc[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let c=o.length-1;c>=0;c--){const p=o[c];if(p.href===i&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":bh,s||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),s)return new Promise((c,p)=>{d.addEventListener("load",c),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rr=typeof window<"u";function Sh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const we=Object.assign;function as(e,n){const t={};for(const r in n){const o=n[r];t[r]=An(o)?o.map(e):e(o)}return t}const Vr=()=>{},An=Array.isArray,Eh=/\/$/,Th=e=>e.replace(Eh,"");function ls(e,n,t="/"){let r,o={},i="",s="";const a=n.indexOf("#");let l=n.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=n.slice(0,l),i=n.slice(l+1,a>-1?a:n.length),o=e(i)),a>-1&&(r=r||n.slice(0,a),s=n.slice(a,n.length)),r=Oh(r??n,t),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function _h(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function yc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Ph(e,n,t){const r=n.matched.length-1,o=t.matched.length-1;return r>-1&&r===o&&fr(n.matched[r],t.matched[o])&&mp(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function fr(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function mp(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!kh(e[t],n[t]))return!1;return!0}function kh(e,n){return An(e)?Sc(e,n):An(n)?Sc(n,e):e===n}function Sc(e,n){return An(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Oh(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/");let o=t.length-1,i,s;for(i=0;i<r.length;i++)if(s=r[i],s!==".")if(s==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var po;(function(e){e.pop="pop",e.push="push"})(po||(po={}));var Jr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Jr||(Jr={}));function Rh(e){if(!e)if(rr){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Th(e)}const Ch=/^[^#]+#/;function Lh(e,n){return e.replace(Ch,"#")+n}function xh(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Ci=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ih(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=xh(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ec(e,n){return(history.state?history.state.position-n:-1)+e}const aa=new Map;function wh(e,n){aa.set(e,n)}function Ah(e){const n=aa.get(e);return aa.delete(e),n}let Nh=()=>location.protocol+"//"+location.host;function gp(e,n){const{pathname:t,search:r,hash:o}=n,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),yc(l,"")}return yc(t,e)+r+o}function Dh(e,n,t,r){let o=[],i=[],s=null;const a=({state:f})=>{const m=gp(e,location),h=t.value,S=n.value;let b=0;if(f){if(t.value=m,n.value=f,s&&s===h){s=null;return}b=S?f.position-S.position:0}else r(m);o.forEach(y=>{y(t.value,h,{delta:b,type:po.pop,direction:b?b>0?Jr.forward:Jr.back:Jr.unknown})})};function l(){s=t.value}function d(f){o.push(f);const m=()=>{const h=o.indexOf(f);h>-1&&o.splice(h,1)};return i.push(m),m}function c(){const{history:f}=window;f.state&&f.replaceState(we({},f.state,{scroll:Ci()}),"")}function p(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:d,destroy:p}}function Tc(e,n,t,r=!1,o=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:o?Ci():null}}function Bh(e){const{history:n,location:t}=window,r={value:gp(e,t)},o={value:n.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(l,d,c){const p=e.indexOf("#"),f=p>-1?(t.host&&document.querySelector("base")?e:e.slice(p))+l:Nh()+e+l;try{n[c?"replaceState":"pushState"](d,"",f),o.value=d}catch{t[c?"replace":"assign"](f)}}function s(l,d){const c=we({},n.state,Tc(o.value.back,l,o.value.forward,!0),d,{position:o.value.position});i(l,c,!0),r.value=l}function a(l,d){const c=we({},o.value,n.state,{forward:l,scroll:Ci()});i(c.current,c,!0);const p=we({},Tc(r.value,l,null),{position:c.position+1},d);i(l,p,!1),r.value=l}return{location:r,state:o,push:a,replace:s}}function Hh(e){e=Rh(e);const n=Bh(e),t=Dh(e,n.state,n.location,n.replace);function r(i,s=!0){s||t.pauseListeners(),history.go(i)}const o=we({location:"",base:e,go:r,createHref:Lh.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function Mh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Hh(e)}function Fh(e){return typeof e=="string"||e&&typeof e=="object"}function vp(e){return typeof e=="string"||typeof e=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hp=Symbol("");var _c;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_c||(_c={}));function mr(e,n){return we(new Error,{type:e,[hp]:!0},n)}function Xn(e,n){return e instanceof Error&&hp in e&&(n==null||!!(e.type&n))}const Pc="[^/]+?",$h={sensitive:!1,strict:!1,start:!0,end:!0},jh=/[.+*?^${}()[\]/\\]/g;function Kh(e,n){const t=we({},$h,n),r=[];let o=t.start?"^":"";const i=[];for(const d of e){const c=d.length?[]:[90];t.strict&&!d.length&&(o+="/");for(let p=0;p<d.length;p++){const f=d[p];let m=40+(t.sensitive?.25:0);if(f.type===0)p||(o+="/"),o+=f.value.replace(jh,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:S,optional:b,regexp:y}=f;i.push({name:h,repeatable:S,optional:b});const _=y||Pc;if(_!==Pc){m+=10;try{new RegExp(`(${_})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${h}" (${_}): `+A.message)}}let k=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;p||(k=b&&d.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),o+=k,m+=20,b&&(m+=-8),S&&(m+=-20),_===".*"&&(m+=-50)}c.push(m)}r.push(c)}if(t.strict&&t.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&(o+="(?:/|$)");const s=new RegExp(o,t.sensitive?"":"i");function a(d){const c=d.match(s),p={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",h=i[f-1];p[h.name]=m&&h.repeatable?m.split("/"):m}return p}function l(d){let c="",p=!1;for(const f of e){(!p||!c.endsWith("/"))&&(c+="/"),p=!1;for(const m of f)if(m.type===0)c+=m.value;else if(m.type===1){const{value:h,repeatable:S,optional:b}=m,y=h in d?d[h]:"";if(An(y)&&!S)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const _=An(y)?y.join("/"):y;if(!_)if(b)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):p=!0);else throw new Error(`Missing required param "${h}"`);c+=_}}return c||"/"}return{re:s,score:r,keys:i,parse:a,stringify:l}}function Uh(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Wh(e,n){let t=0;const r=e.score,o=n.score;for(;t<r.length&&t<o.length;){const i=Uh(r[t],o[t]);if(i)return i;t++}if(Math.abs(o.length-r.length)===1){if(kc(r))return 1;if(kc(o))return-1}return o.length-r.length}function kc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const zh={type:0,value:""},Gh=/[a-zA-Z0-9_]/;function qh(e){if(!e)return[[]];if(e==="/")return[[zh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${t})/"${d}": ${m}`)}let t=0,r=t;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,d="",c="";function p(){d&&(t===0?i.push({type:0,value:d}):t===1||t===2||t===3?(i.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),d="")}function f(){d+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(d&&p(),s()):l===":"?(p(),t=1):f();break;case 4:f(),t=r;break;case 1:l==="("?t=2:Gh.test(l)?f():(p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=3:c+=l;break;case 3:p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${d}"`),p(),s(),o}function Vh(e,n,t){const r=Kh(qh(e.path),t),o=we(r,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function Jh(e,n){const t=[],r=new Map;n=Cc({strict:!1,end:!0,sensitive:!1},n);function o(c){return r.get(c)}function i(c,p,f){const m=!f,h=Zh(c);h.aliasOf=f&&f.record;const S=Cc(n,c),b=[h];if("alias"in c){const k=typeof c.alias=="string"?[c.alias]:c.alias;for(const A of k)b.push(we({},h,{components:f?f.record.components:h.components,path:A,aliasOf:f?f.record:h}))}let y,_;for(const k of b){const{path:A}=k;if(p&&A[0]!=="/"){const R=p.record.path,D=R[R.length-1]==="/"?"":"/";k.path=p.record.path+(A&&D+A)}if(y=Vh(k,p,S),f?f.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),m&&c.name&&!Rc(y)&&s(c.name)),h.children){const R=h.children;for(let D=0;D<R.length;D++)i(R[D],y,f&&f.children[D])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return _?()=>{s(_)}:Vr}function s(c){if(vp(c)){const p=r.get(c);p&&(r.delete(c),t.splice(t.indexOf(p),1),p.children.forEach(s),p.alias.forEach(s))}else{const p=t.indexOf(c);p>-1&&(t.splice(p,1),c.record.name&&r.delete(c.record.name),c.children.forEach(s),c.alias.forEach(s))}}function a(){return t}function l(c){let p=0;for(;p<t.length&&Wh(c,t[p])>=0&&(c.record.path!==t[p].record.path||!bp(c,t[p]));)p++;t.splice(p,0,c),c.record.name&&!Rc(c)&&r.set(c.record.name,c)}function d(c,p){let f,m={},h,S;if("name"in c&&c.name){if(f=r.get(c.name),!f)throw mr(1,{location:c});S=f.record.name,m=we(Oc(p.params,f.keys.filter(_=>!_.optional).map(_=>_.name)),c.params&&Oc(c.params,f.keys.map(_=>_.name))),h=f.stringify(m)}else if("path"in c)h=c.path,f=t.find(_=>_.re.test(h)),f&&(m=f.parse(h),S=f.record.name);else{if(f=p.name?r.get(p.name):t.find(_=>_.re.test(p.path)),!f)throw mr(1,{location:c,currentLocation:p});S=f.record.name,m=we({},p.params,c.params),h=f.stringify(m)}const b=[];let y=f;for(;y;)b.unshift(y.record),y=y.parent;return{name:S,path:h,params:m,matched:b,meta:Xh(b)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:d,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function Oc(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function Zh(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Yh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Yh(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="boolean"?t:t[r];return n}function Rc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xh(e){return e.reduce((n,t)=>we(n,t.meta),{})}function Cc(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}function bp(e,n){return n.children.some(t=>t===e||bp(e,t))}const yp=/#/g,Qh=/&/g,eb=/\//g,nb=/=/g,tb=/\?/g,Sp=/\+/g,rb=/%5B/g,ob=/%5D/g,Ep=/%5E/g,ib=/%60/g,Tp=/%7B/g,sb=/%7C/g,_p=/%7D/g,ab=/%20/g;function Qa(e){return encodeURI(""+e).replace(sb,"|").replace(rb,"[").replace(ob,"]")}function lb(e){return Qa(e).replace(Tp,"{").replace(_p,"}").replace(Ep,"^")}function la(e){return Qa(e).replace(Sp,"%2B").replace(ab,"+").replace(yp,"%23").replace(Qh,"%26").replace(ib,"`").replace(Tp,"{").replace(_p,"}").replace(Ep,"^")}function cb(e){return la(e).replace(nb,"%3D")}function db(e){return Qa(e).replace(yp,"%23").replace(tb,"%3F")}function ub(e){return e==null?"":db(e).replace(eb,"%2F")}function oi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function pb(e){const n={};if(e===""||e==="?")return n;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Sp," "),s=i.indexOf("="),a=oi(s<0?i:i.slice(0,s)),l=s<0?null:oi(i.slice(s+1));if(a in n){let d=n[a];An(d)||(d=n[a]=[d]),d.push(l)}else n[a]=l}return n}function Lc(e){let n="";for(let t in e){const r=e[t];if(t=cb(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(An(r)?r.map(i=>i&&la(i)):[r&&la(r)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+t,i!=null&&(n+="="+i))})}return n}function fb(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=An(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return n}const mb=Symbol(""),xc=Symbol(""),Li=Symbol(""),Pp=Symbol(""),ca=Symbol("");function Hr(){let e=[];function n(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function mt(e,n,t,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const l=p=>{p===!1?a(mr(4,{from:t,to:n})):p instanceof Error?a(p):Fh(p)?a(mr(2,{from:n,to:p})):(i&&r.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),s())},d=e.call(r&&r.instances[o],n,t,l);let c=Promise.resolve(d);e.length<3&&(c=c.then(l)),c.catch(p=>a(p))})}function cs(e,n,t,r){const o=[];for(const i of e)for(const s in i.components){let a=i.components[s];if(!(n!=="beforeRouteEnter"&&!i.instances[s]))if(gb(a)){const d=(a.__vccOpts||a)[n];d&&o.push(mt(d,t,r,i,s))}else{let l=a();o.push(()=>l.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const c=Sh(d)?d.default:d;i.components[s]=c;const f=(c.__vccOpts||c)[n];return f&&mt(f,t,r,i,s)()}))}}return o}function gb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ic(e){const n=ze(Li),t=ze(Pp),r=N(()=>n.resolve(Ie(e.to))),o=N(()=>{const{matched:l}=r.value,{length:d}=l,c=l[d-1],p=t.matched;if(!c||!p.length)return-1;const f=p.findIndex(fr.bind(null,c));if(f>-1)return f;const m=wc(l[d-2]);return d>1&&wc(c)===m&&p[p.length-1].path!==m?p.findIndex(fr.bind(null,l[d-2])):f}),i=N(()=>o.value>-1&&yb(t.params,r.value.params)),s=N(()=>o.value>-1&&o.value===t.matched.length-1&&mp(t.params,r.value.params));function a(l={}){return bb(l)?n[Ie(e.replace)?"replace":"push"](Ie(e.to)).catch(Vr):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:i,isExactActive:s,navigate:a}}const vb=re({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ic,setup(e,{slots:n}){const t=Pn(Ic(e)),{options:r}=ze(Li),o=N(()=>({[Ac(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Ac(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=n.default&&n.default(t);return e.custom?i:uo("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},i)}}}),hb=vb;function bb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function yb(e,n){for(const t in n){const r=n[t],o=e[t];if(typeof r=="string"){if(r!==o)return!1}else if(!An(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function wc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ac=(e,n,t)=>e??n??t,Sb=re({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=ze(ca),o=N(()=>e.route||r.value),i=ze(xc,0),s=N(()=>{let d=Ie(i);const{matched:c}=o.value;let p;for(;(p=c[d])&&!p.components;)d++;return d}),a=N(()=>o.value.matched[s.value]);Tt(xc,N(()=>s.value+1)),Tt(mb,a),Tt(ca,o);const l=le();return en(()=>[l.value,a.value,e.name],([d,c,p],[f,m,h])=>{c&&(c.instances[p]=d,m&&m!==c&&d&&d===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),d&&c&&(!m||!fr(c,m)||!f)&&(c.enterCallbacks[p]||[]).forEach(S=>S(d))},{flush:"post"}),()=>{const d=o.value,c=e.name,p=a.value,f=p&&p.components[c];if(!f)return Nc(t.default,{Component:f,route:d});const m=p.props[c],h=m?m===!0?d.params:typeof m=="function"?m(d):m:null,b=uo(f,we({},h,n,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(p.instances[c]=null)},ref:l}));return Nc(t.default,{Component:b,route:d})||b}}});function Nc(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Eb=Sb;function Tb(e){const n=Jh(e.routes,e),t=e.parseQuery||pb,r=e.stringifyQuery||Lc,o=e.history,i=Hr(),s=Hr(),a=Hr(),l=kg(ut);let d=ut;rr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=as.bind(null,T=>""+T),p=as.bind(null,ub),f=as.bind(null,oi);function m(T,K){let H,Y;return vp(T)?(H=n.getRecordMatcher(T),Y=K):Y=T,n.addRoute(Y,H)}function h(T){const K=n.getRecordMatcher(T);K&&n.removeRoute(K)}function S(){return n.getRoutes().map(T=>T.record)}function b(T){return!!n.getRecordMatcher(T)}function y(T,K){if(K=we({},K||l.value),typeof T=="string"){const g=ls(t,T,K.path),v=n.resolve({path:g.path},K),E=o.createHref(g.fullPath);return we(g,v,{params:f(v.params),hash:oi(g.hash),redirectedFrom:void 0,href:E})}let H;if("path"in T)H=we({},T,{path:ls(t,T.path,K.path).path});else{const g=we({},T.params);for(const v in g)g[v]==null&&delete g[v];H=we({},T,{params:p(T.params)}),K.params=p(K.params)}const Y=n.resolve(H,K),ne=T.hash||"";Y.params=c(f(Y.params));const Ce=_h(r,we({},T,{hash:lb(ne),path:Y.path})),me=o.createHref(Ce);return we({fullPath:Ce,hash:ne,query:r===Lc?fb(T.query):T.query||{}},Y,{redirectedFrom:void 0,href:me})}function _(T){return typeof T=="string"?ls(t,T,l.value.path):we({},T)}function k(T,K){if(d!==T)return mr(8,{from:K,to:T})}function A(T){return F(T)}function R(T){return A(we(_(T),{replace:!0}))}function D(T){const K=T.matched[T.matched.length-1];if(K&&K.redirect){const{redirect:H}=K;let Y=typeof H=="function"?H(T):H;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=_(Y):{path:Y},Y.params={}),we({query:T.query,hash:T.hash,params:"path"in Y?{}:T.params},Y)}}function F(T,K){const H=d=y(T),Y=l.value,ne=T.state,Ce=T.force,me=T.replace===!0,g=D(H);if(g)return F(we(_(g),{state:typeof g=="object"?we({},ne,g.state):ne,force:Ce,replace:me}),K||H);const v=H;v.redirectedFrom=K;let E;return!Ce&&Ph(r,Y,H)&&(E=mr(16,{to:v,from:Y}),_e(Y,Y,!0,!1)),(E?Promise.resolve(E):w(v,Y)).catch(O=>Xn(O)?Xn(O,2)?O:ge(O):Ee(O,v,Y)).then(O=>{if(O){if(Xn(O,2))return F(we({replace:me},_(O.to),{state:typeof O.to=="object"?we({},ne,O.to.state):ne,force:Ce}),K||v)}else O=Z(v,Y,!0,me,ne);return $(v,Y,O),O})}function x(T,K){const H=k(T,K);return H?Promise.reject(H):Promise.resolve()}function w(T,K){let H;const[Y,ne,Ce]=_b(T,K);H=cs(Y.reverse(),"beforeRouteLeave",T,K);for(const g of Y)g.leaveGuards.forEach(v=>{H.push(mt(v,T,K))});const me=x.bind(null,T,K);return H.push(me),Xt(H).then(()=>{H=[];for(const g of i.list())H.push(mt(g,T,K));return H.push(me),Xt(H)}).then(()=>{H=cs(ne,"beforeRouteUpdate",T,K);for(const g of ne)g.updateGuards.forEach(v=>{H.push(mt(v,T,K))});return H.push(me),Xt(H)}).then(()=>{H=[];for(const g of T.matched)if(g.beforeEnter&&!K.matched.includes(g))if(An(g.beforeEnter))for(const v of g.beforeEnter)H.push(mt(v,T,K));else H.push(mt(g.beforeEnter,T,K));return H.push(me),Xt(H)}).then(()=>(T.matched.forEach(g=>g.enterCallbacks={}),H=cs(Ce,"beforeRouteEnter",T,K),H.push(me),Xt(H))).then(()=>{H=[];for(const g of s.list())H.push(mt(g,T,K));return H.push(me),Xt(H)}).catch(g=>Xn(g,8)?g:Promise.reject(g))}function $(T,K,H){for(const Y of a.list())Y(T,K,H)}function Z(T,K,H,Y,ne){const Ce=k(T,K);if(Ce)return Ce;const me=K===ut,g=rr?history.state:{};H&&(Y||me?o.replace(T.fullPath,we({scroll:me&&g&&g.scroll},ne)):o.push(T.fullPath,ne)),l.value=T,_e(T,K,H,me),ge()}let j;function de(){j||(j=o.listen((T,K,H)=>{if(!He.listening)return;const Y=y(T),ne=D(Y);if(ne){F(we(ne,{replace:!0}),Y).catch(Vr);return}d=Y;const Ce=l.value;rr&&wh(Ec(Ce.fullPath,H.delta),Ci()),w(Y,Ce).catch(me=>Xn(me,12)?me:Xn(me,2)?(F(me.to,Y).then(g=>{Xn(g,20)&&!H.delta&&H.type===po.pop&&o.go(-1,!1)}).catch(Vr),Promise.reject()):(H.delta&&o.go(-H.delta,!1),Ee(me,Y,Ce))).then(me=>{me=me||Z(Y,Ce,!1),me&&(H.delta&&!Xn(me,8)?o.go(-H.delta,!1):H.type===po.pop&&Xn(me,20)&&o.go(-1,!1)),$(Y,Ce,me)}).catch(Vr)}))}let Q=Hr(),xe=Hr(),Oe;function Ee(T,K,H){ge(T);const Y=xe.list();return Y.length&&Y.forEach(ne=>ne(T,K,H)),Promise.reject(T)}function oe(){return Oe&&l.value!==ut?Promise.resolve():new Promise((T,K)=>{Q.add([T,K])})}function ge(T){return Oe||(Oe=!T,de(),Q.list().forEach(([K,H])=>T?H(T):K()),Q.reset()),T}function _e(T,K,H,Y){const{scrollBehavior:ne}=e;if(!rr||!ne)return Promise.resolve();const Ce=!H&&Ah(Ec(T.fullPath,0))||(Y||!H)&&history.state&&history.state.scroll||null;return zt().then(()=>ne(T,K,Ce)).then(me=>me&&Ih(me)).catch(me=>Ee(me,T,K))}const Re=T=>o.go(T);let Te;const Ke=new Set,He={currentRoute:l,listening:!0,addRoute:m,removeRoute:h,hasRoute:b,getRoutes:S,resolve:y,options:e,push:A,replace:R,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:xe.add,isReady:oe,install(T){const K=this;T.component("RouterLink",hb),T.component("RouterView",Eb),T.config.globalProperties.$router=K,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(l)}),rr&&!Te&&l.value===ut&&(Te=!0,A(o.location).catch(ne=>{}));const H={};for(const ne in ut)H[ne]=N(()=>l.value[ne]);T.provide(Li,K),T.provide(Pp,Pn(H)),T.provide(ca,l);const Y=T.unmount;Ke.add(T),T.unmount=function(){Ke.delete(T),Ke.size<1&&(d=ut,j&&j(),j=null,l.value=ut,Te=!1,Oe=!1),Y()}}};return He}function Xt(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function _b(e,n){const t=[],r=[],o=[],i=Math.max(n.matched.length,e.matched.length);for(let s=0;s<i;s++){const a=n.matched[s];a&&(e.matched.find(d=>fr(d,a))?r.push(a):t.push(a));const l=e.matched[s];l&&(n.matched.find(d=>fr(d,l))||o.push(l))}return[t,r,o]}function Pb(){return ze(Li)}const kb=Tb({history:Mh(),routes:[{path:"/",redirect:"/runner"},{path:"/runner",component:()=>ss(()=>Promise.resolve().then(()=>Sx),void 0,import.meta.url)},{path:"/setting",component:()=>ss(()=>Promise.resolve().then(()=>Px),void 0,import.meta.url)},{path:"/about",component:()=>ss(()=>Promise.resolve().then(()=>Ax),void 0,import.meta.url)}]});var Ob=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let kp;const xi=e=>kp=e,Op=Symbol();function da(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Zr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Zr||(Zr={}));function Rb(){const e=fu(!0),n=e.run(()=>le({}));let t=[],r=[];const o=ur({install(i){xi(o),o._a=i,i.provide(Op,o),i.config.globalProperties.$pinia=o,r.forEach(s=>t.push(s)),r=[]},use(i){return!this._a&&!Ob?r.push(i):t.push(i),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const Rp=()=>{};function Dc(e,n,t,r=Rp){e.push(n);const o=()=>{const i=e.indexOf(n);i>-1&&(e.splice(i,1),r())};return!t&&mu()&&Zm(o),o}function Qt(e,...n){e.slice().forEach(t=>{t(...n)})}function ua(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,r)=>e.set(r,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const r=n[t],o=e[t];da(o)&&da(r)&&e.hasOwnProperty(t)&&!We(r)&&!St(r)?e[t]=ua(o,r):e[t]=r}return e}const Cb=Symbol();function Lb(e){return!da(e)||!e.hasOwnProperty(Cb)}const{assign:gt}=Object;function xb(e){return!!(We(e)&&e.effect)}function Ib(e,n,t,r){const{state:o,actions:i,getters:s}=n,a=t.state.value[e];let l;function d(){a||(t.state.value[e]=o?o():{});const c=Zn(t.state.value[e]);return gt(c,i,Object.keys(s||{}).reduce((p,f)=>(p[f]=ur(N(()=>{xi(t);const m=t._s.get(e);return s[f].call(m,m)})),p),{}))}return l=Cp(e,d,n,t,r,!0),l.$reset=function(){const p=o?o():{};this.$patch(f=>{gt(f,p)})},l}function Cp(e,n,t={},r,o,i){let s;const a=gt({actions:{}},t),l={deep:!0};let d,c,p=ur([]),f=ur([]),m;const h=r.state.value[e];!i&&!h&&(r.state.value[e]={}),le({});let S;function b(F){let x;d=c=!1,typeof F=="function"?(F(r.state.value[e]),x={type:Zr.patchFunction,storeId:e,events:m}):(ua(r.state.value[e],F),x={type:Zr.patchObject,payload:F,storeId:e,events:m});const w=S=Symbol();zt().then(()=>{S===w&&(d=!0)}),c=!0,Qt(p,x,r.state.value[e])}const y=Rp;function _(){s.stop(),p=[],f=[],r._s.delete(e)}function k(F,x){return function(){xi(r);const w=Array.from(arguments),$=[],Z=[];function j(xe){$.push(xe)}function de(xe){Z.push(xe)}Qt(f,{args:w,name:F,store:R,after:j,onError:de});let Q;try{Q=x.apply(this&&this.$id===e?this:R,w)}catch(xe){throw Qt(Z,xe),xe}return Q instanceof Promise?Q.then(xe=>(Qt($,xe),xe)).catch(xe=>(Qt(Z,xe),Promise.reject(xe))):(Qt($,Q),Q)}}const A={_p:r,$id:e,$onAction:Dc.bind(null,f),$patch:b,$reset:y,$subscribe(F,x={}){const w=Dc(p,F,x.detached,()=>$()),$=s.run(()=>en(()=>r.state.value[e],Z=>{(x.flush==="sync"?c:d)&&F({storeId:e,type:Zr.direct,events:m},Z)},gt({},l,x)));return w},$dispose:_},R=Pn(A);r._s.set(e,R);const D=r._e.run(()=>(s=fu(),s.run(()=>n())));for(const F in D){const x=D[F];if(We(x)&&!xb(x)||St(x))i||(h&&Lb(x)&&(We(x)?x.value=h[F]:ua(x,h[F])),r.state.value[e][F]=x);else if(typeof x=="function"){const w=k(F,x);D[F]=w,a.actions[F]=x}}return gt(R,D),gt(be(R),D),Object.defineProperty(R,"$state",{get:()=>r.state.value[e],set:F=>{b(x=>{gt(x,F)})}}),r._p.forEach(F=>{gt(R,s.run(()=>F({store:R,app:r._a,pinia:r,options:a})))}),h&&i&&t.hydrate&&t.hydrate(R.$state,h),d=!0,c=!0,R}function wb(e,n,t){let r,o;const i=typeof n=="function";typeof e=="string"?(r=e,o=i?t:n):(o=e,r=e.id);function s(a,l){const d=Oi();return a=a||d&&ze(Op,null),a&&xi(a),a=kp,a._s.has(r)||(i?Cp(r,n,o,a):Ib(r,o,a)),a._s.get(r)}return s.$id=r,s}const So=Symbol("ArcoConfigProvider");var Ab=Object.defineProperty,Nb=Object.defineProperties,Db=Object.getOwnPropertyDescriptors,Bc=Object.getOwnPropertySymbols,Bb=Object.prototype.hasOwnProperty,Hb=Object.prototype.propertyIsEnumerable,Hc=(e,n,t)=>n in e?Ab(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Mb=(e,n)=>{for(var t in n||(n={}))Bb.call(n,t)&&Hc(e,t,n[t]);if(Bc)for(var t of Bc(n))Hb.call(n,t)&&Hc(e,t,n[t]);return e},Fb=(e,n)=>Nb(e,Db(n));const $b="A",jb="arco",pa="$arco",Ct=e=>{var n;return(n=e==null?void 0:e.componentPrefix)!=null?n:$b},Lt=(e,n)=>{var t;n&&n.classPrefix&&(e.config.globalProperties[pa]=Fb(Mb({},(t=e.config.globalProperties[pa])!=null?t:{}),{classPrefix:n.classPrefix}))},he=e=>{var n,t,r;const o=Oi(),i=ze(So,void 0),s=(r=(t=i==null?void 0:i.prefixCls)!=null?t:(n=o==null?void 0:o.appContext.config.globalProperties[pa])==null?void 0:n.classPrefix)!=null?r:jb;return e?`${s}-${e}`:s},Ii=Object.prototype.toString;function el(e){return Ii.call(e)==="[object Array]"}function Kb(e){return Ii.call(e)==="[object Object]"}function Eo(e){return Ii.call(e)==="[object String]"}function Ze(e){return Ii.call(e)==="[object Number]"&&e===e}function zo(e){return e===void 0}function wi(e){return typeof e=="function"}const Ub=e=>(e==null?void 0:e.$)!==void 0;var Se=(e,n)=>{for(const[t,r]of n)e[t]=r;return e};const Wb=re({name:"IconLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-left`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),zb=["stroke-width","stroke-linecap","stroke-linejoin"],Gb=ue("path",{d:"M32 8.4 16.444 23.956 32 39.513"},null,-1),qb=[Gb];function Vb(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},qb,14,zb)}var ds=Se(Wb,[["render",Vb]]);const Jb=Object.assign(ds,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ds.name,ds)}}),Zb=re({name:"IconRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-right`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),Yb=["stroke-width","stroke-linecap","stroke-linejoin"],Xb=ue("path",{d:"m16 39.513 15.556-15.557L16 8.4"},null,-1),Qb=[Xb];function ey(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Qb,14,Yb)}var us=Se(Zb,[["render",ey]]);const ny=Object.assign(us,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+us.name,us)}}),ty=re({name:"IconCheckCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-check-circle-fill`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),ry=["stroke-width","stroke-linecap","stroke-linejoin"],oy=ue("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",fill:"currentColor",stroke:"none"},null,-1),iy=[oy];function sy(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},iy,14,ry)}var ps=Se(ty,[["render",sy]]);const ay=Object.assign(ps,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ps.name,ps)}}),ly=re({name:"IconCloseCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-close-circle-fill`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),cy=["stroke-width","stroke-linecap","stroke-linejoin"],dy=ue("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",fill:"currentColor",stroke:"none"},null,-1),uy=[dy];function py(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},uy,14,cy)}var fs=Se(ly,[["render",py]]);const fy=Object.assign(fs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+fs.name,fs)}}),my=re({name:"IconExclamationCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-exclamation-circle-fill`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),gy=["stroke-width","stroke-linecap","stroke-linejoin"],vy=ue("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",fill:"currentColor",stroke:"none"},null,-1),hy=[vy];function by(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},hy,14,gy)}var ms=Se(my,[["render",by]]);const yy=Object.assign(ms,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ms.name,ms)}}),Sy=re({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-info-circle-fill`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),Ey=["stroke-width","stroke-linecap","stroke-linejoin"],Ty=ue("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),_y=[Ty];function Py(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},_y,14,Ey)}var gs=Se(Sy,[["render",Py]]);const ky=Object.assign(gs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+gs.name,gs)}}),Oy=re({name:"IconClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-close`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),Ry=["stroke-width","stroke-linecap","stroke-linejoin"],Cy=ue("path",{d:"M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"},null,-1),Ly=[Cy];function xy(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Ly,14,Ry)}var vs=Se(Oy,[["render",xy]]);const Iy=Object.assign(vs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+vs.name,vs)}}),wy=re({name:"IconInfoCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-info-circle`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),Ay=["stroke-width","stroke-linecap","stroke-linejoin"],Ny=ue("path",{d:"M24 20v14m0-16v-4m18 10c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),Dy=[Ny];function By(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},Dy,14,Ay)}var hs=Se(wy,[["render",By]]);const Hy=Object.assign(hs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+hs.name,hs)}}),My=re({name:"IconPlus",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-plus`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),Fy=["stroke-width","stroke-linecap","stroke-linejoin"],$y=ue("path",{d:"M5 24h38M24 5v38"},null,-1),jy=[$y];function Ky(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},jy,14,Fy)}var bs=Se(My,[["render",Ky]]);const Uy=Object.assign(bs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+bs.name,bs)}}),Wy=re({name:"IconStop",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-stop`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),zy=["stroke-width","stroke-linecap","stroke-linejoin"],Gy=ue("path",{d:"M36.728 36.728c7.03-7.03 7.03-18.427 0-25.456-7.03-7.03-18.427-7.03-25.456 0m25.456 25.456c-7.03 7.03-18.427 7.03-25.456 0-7.03-7.03-7.03-18.427 0-25.456m25.456 25.456L11.272 11.272"},null,-1),qy=[Gy];function Vy(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},qy,14,zy)}var ys=Se(Wy,[["render",Vy]]);const Jy=Object.assign(ys,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ys.name,ys)}}),Zy=re({name:"IconMore",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-more`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),Yy=["stroke-width","stroke-linecap","stroke-linejoin"],Xy=ue("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",fill:"currentColor",stroke:"none"},null,-1),Qy=ue("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"},null,-1),eS=[Xy,Qy];function nS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},eS,14,Yy)}var Ss=Se(Zy,[["render",nS]]);const tS=Object.assign(Ss,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ss.name,Ss)}}),rS=re({name:"IconCopy",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-copy`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),oS=["stroke-width","stroke-linecap","stroke-linejoin"],iS=ue("path",{d:"M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"},null,-1),sS=[iS];function aS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},sS,14,oS)}var Es=Se(rS,[["render",aS]]);const lS=Object.assign(Es,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Es.name,Es)}}),cS=re({name:"IconLink",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-link`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),dS=["stroke-width","stroke-linecap","stroke-linejoin"],uS=ue("path",{d:"m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"},null,-1),pS=[uS];function fS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},pS,14,dS)}var Ts=Se(cS,[["render",fS]]);const mS=Object.assign(Ts,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ts.name,Ts)}}),gS=re({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-drag-dot-vertical`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),vS=["stroke-width","stroke-linecap","stroke-linejoin"],hS=ue("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),bS=ue("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),yS=[hS,bS];function SS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},yS,14,vS)}var _s=Se(gS,[["render",SS]]);const ES=Object.assign(_s,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+_s.name,_s)}}),TS=re({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-drag-dot`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),_S=["stroke-width","stroke-linecap","stroke-linejoin"],PS=ue("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),kS=ue("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),OS=[PS,kS];function RS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},OS,14,_S)}var Ps=Se(TS,[["render",RS]]);const CS=Object.assign(Ps,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Ps.name,Ps)}}),LS=re({name:"IconEmpty",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-empty`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),xS=["stroke-width","stroke-linecap","stroke-linejoin"],IS=ue("path",{d:"M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"},null,-1),wS=[IS];function AS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},wS,14,xS)}var ks=Se(LS,[["render",AS]]);const NS=Object.assign(ks,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+ks.name,ks)}}),DS=re({name:"IconFile",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-file`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),BS=["stroke-width","stroke-linecap","stroke-linejoin"],HS=ue("path",{d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"},null,-1),MS=[HS];function FS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},MS,14,BS)}var Os=Se(DS,[["render",FS]]);const $S=Object.assign(Os,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Os.name,Os)}}),jS=re({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-loading`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),KS=["stroke-width","stroke-linecap","stroke-linejoin"],US=ue("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),WS=[US];function zS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},WS,14,KS)}var Rs=Se(jS,[["render",zS]]);const nl=Object.assign(Rs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Rs.name,Rs)}}),GS=re({name:"IconThunderbolt",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("icon"),r=N(()=>[t,`${t}-thunderbolt`,{[`${t}-spin`]:e.spin}]),o=N(()=>{const s={};return e.size&&(s.fontSize=Ze(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{n("click",s)}}}}),qS=["stroke-width","stroke-linecap","stroke-linejoin"],VS=ue("path",{d:"M27.824 5.203A.1.1 0 0 1 28 5.27V21h10.782a.1.1 0 0 1 .075.165L20.176 42.797A.1.1 0 0 1 20 42.73V27H9.219a.1.1 0 0 1-.076-.165L27.824 5.203Z"},null,-1),JS=[VS];function ZS(e,n,t,r,o,i){return q(),se("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:X(e.cls),style:Be(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...s)=>e.onClick&&e.onClick(...s))},JS,14,qS)}var Cs=Se(GS,[["render",ZS]]);const YS=Object.assign(Cs,{install:(e,n)=>{var t;const r=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(r+Cs.name,Cs)}}),XS=[$S,Uy,YS,Jy,lS,Hy];function QS(e){for(const n of XS)e.component(n.name,n)}const Ls={formatYear:"YYYY 年",formatMonth:"YYYY 年 MM 月",today:"今天",view:{month:"月",year:"年",week:"周",day:"日"},month:{long:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"},short:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"}},week:{long:{self:"周",monday:"周一",tuesday:"周二",wednesday:"周三",thursday:"周四",friday:"周五",saturday:"周六",sunday:"周日"},short:{self:"周",monday:"一",tuesday:"二",wednesday:"三",thursday:"四",friday:"五",saturday:"六",sunday:"日"}}},eE={locale:"zh-CN",empty:{description:"暂无数据"},drawer:{okText:"确定",cancelText:"取消"},popconfirm:{okText:"确定",cancelText:"取消"},modal:{okText:"确定",cancelText:"取消"},pagination:{goto:"前往",page:"页",countPerPage:"条/页",total:"共 {0} 条"},table:{okText:"确定",resetText:"重置"},upload:{start:"开始",cancel:"取消",delete:"删除",retry:"点击重试",buttonText:"点击上传",preview:"预览",drag:"点击或拖拽文件到此处上传",dragHover:"释放文件并开始上传",error:"上传失败"},datePicker:{view:Ls.view,month:Ls.month,week:Ls.week,placeholder:{date:"请选择日期",week:"请选择周",month:"请选择月份",year:"请选择年份",quarter:"请选择季度",time:"请选择时间"},rangePlaceholder:{date:["开始日期","结束日期"],week:["开始周","结束周"],month:["开始月份","结束月份"],year:["开始年份","结束年份"],quarter:["开始季度","结束季度"],time:["开始时间","结束时间"]},selectTime:"选择时间",today:"今天",now:"此刻",ok:"确定"},image:{loading:"加载中"},imagePreview:{fullScreen:"全屏",rotateRight:"向右旋转",rotateLeft:"向左旋转",zoomIn:"放大",zoomOut:"缩小",originalSize:"原始尺寸"},typography:{copied:"已复制",copy:"复制",expand:"展开",collapse:"折叠",edit:"编辑"}},nE=le("zh-CN"),tE=Pn({"zh-CN":eE}),rE=()=>{const e=ze(So,void 0),n=N(()=>{var o;return(o=e==null?void 0:e.locale)!=null?o:tE[nE.value]});return{locale:N(()=>n.value.locale),t:(o,...i)=>{const s=o.split(".");let a=n.value;for(const l of s){if(!a[l])return o;a=a[l]}return Eo(a)&&i.length>0?a.replace(/{(\d+)}/g,(l,d)=>{var c;return(c=i[d])!=null?c:l}):a}}};var Lp=function(){if(typeof Map<"u")return Map;function e(n,t){var r=-1;return n.some(function(o,i){return o[0]===t?(r=i,!0):!1}),r}return function(){function n(){this.__entries__=[]}return Object.defineProperty(n.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),n.prototype.get=function(t){var r=e(this.__entries__,t),o=this.__entries__[r];return o&&o[1]},n.prototype.set=function(t,r){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=r:this.__entries__.push([t,r])},n.prototype.delete=function(t){var r=this.__entries__,o=e(r,t);~o&&r.splice(o,1)},n.prototype.has=function(t){return!!~e(this.__entries__,t)},n.prototype.clear=function(){this.__entries__.splice(0)},n.prototype.forEach=function(t,r){r===void 0&&(r=null);for(var o=0,i=this.__entries__;o<i.length;o++){var s=i[o];t.call(r,s[1],s[0])}},n}()}(),fa=typeof window<"u"&&typeof document<"u"&&window.document===document,ii=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),oE=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ii):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),iE=2;function sE(e,n){var t=!1,r=!1,o=0;function i(){t&&(t=!1,e()),r&&a()}function s(){oE(i)}function a(){var l=Date.now();if(t){if(l-o<iE)return;r=!0}else t=!0,r=!1,setTimeout(s,n);o=l}return a}var aE=20,lE=["top","right","bottom","left","width","height","size","weight"],cE=typeof MutationObserver<"u",dE=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=sE(this.refresh.bind(this),aE)}return e.prototype.addObserver=function(n){~this.observers_.indexOf(n)||this.observers_.push(n),this.connected_||this.connect_()},e.prototype.removeObserver=function(n){var t=this.observers_,r=t.indexOf(n);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var n=this.updateObservers_();n&&this.refresh()},e.prototype.updateObservers_=function(){var n=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return n.forEach(function(t){return t.broadcastActive()}),n.length>0},e.prototype.connect_=function(){!fa||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),cE?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!fa||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(n){var t=n.propertyName,r=t===void 0?"":t,o=lE.some(function(i){return!!~r.indexOf(i)});o&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),xp=function(e,n){for(var t=0,r=Object.keys(n);t<r.length;t++){var o=r[t];Object.defineProperty(e,o,{value:n[o],enumerable:!1,writable:!1,configurable:!0})}return e},gr=function(e){var n=e&&e.ownerDocument&&e.ownerDocument.defaultView;return n||ii},Ip=Ai(0,0,0,0);function si(e){return parseFloat(e)||0}function Mc(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];return n.reduce(function(r,o){var i=e["border-"+o+"-width"];return r+si(i)},0)}function uE(e){for(var n=["top","right","bottom","left"],t={},r=0,o=n;r<o.length;r++){var i=o[r],s=e["padding-"+i];t[i]=si(s)}return t}function pE(e){var n=e.getBBox();return Ai(0,0,n.width,n.height)}function fE(e){var n=e.clientWidth,t=e.clientHeight;if(!n&&!t)return Ip;var r=gr(e).getComputedStyle(e),o=uE(r),i=o.left+o.right,s=o.top+o.bottom,a=si(r.width),l=si(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+i)!==n&&(a-=Mc(r,"left","right")+i),Math.round(l+s)!==t&&(l-=Mc(r,"top","bottom")+s)),!gE(e)){var d=Math.round(a+i)-n,c=Math.round(l+s)-t;Math.abs(d)!==1&&(a-=d),Math.abs(c)!==1&&(l-=c)}return Ai(o.left,o.top,a,l)}var mE=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof gr(e).SVGGraphicsElement}:function(e){return e instanceof gr(e).SVGElement&&typeof e.getBBox=="function"}}();function gE(e){return e===gr(e).document.documentElement}function vE(e){return fa?mE(e)?pE(e):fE(e):Ip}function hE(e){var n=e.x,t=e.y,r=e.width,o=e.height,i=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(i.prototype);return xp(s,{x:n,y:t,width:r,height:o,top:t,right:n+r,bottom:o+t,left:n}),s}function Ai(e,n,t,r){return{x:e,y:n,width:t,height:r}}var bE=function(){function e(n){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ai(0,0,0,0),this.target=n}return e.prototype.isActive=function(){var n=vE(this.target);return this.contentRect_=n,n.width!==this.broadcastWidth||n.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var n=this.contentRect_;return this.broadcastWidth=n.width,this.broadcastHeight=n.height,n},e}(),yE=function(){function e(n,t){var r=hE(t);xp(this,{target:n,contentRect:r})}return e}(),SE=function(){function e(n,t,r){if(this.activeObservations_=[],this.observations_=new Lp,typeof n!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=n,this.controller_=t,this.callbackCtx_=r}return e.prototype.observe=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof gr(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)||(t.set(n,new bE(n)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(n){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(n instanceof gr(n).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(n)&&(t.delete(n),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var n=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&n.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var n=this.callbackCtx_,t=this.activeObservations_.map(function(r){return new yE(r.target,r.broadcastRect())});this.callback_.call(n,t,n),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),wp=typeof WeakMap<"u"?new WeakMap:new Lp,Ap=function(){function e(n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=dE.getInstance(),r=new SE(n,t,this);wp.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Ap.prototype[e]=function(){var n;return(n=wp.get(this))[e].apply(n,arguments)}});var tl=function(){return typeof ii.ResizeObserver<"u"?ii.ResizeObserver:Ap}(),Fc;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(Fc||(Fc={}));var $c;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})($c||($c={}));const rl=e=>Boolean(e&&e.shapeFlag&1),ol=(e,n)=>Boolean(e&&e.shapeFlag&6),Np=(e,n)=>Boolean(e&&e.shapeFlag&16),EE=(e,n)=>Boolean(e&&e.shapeFlag&32),Go=e=>{var n,t;if(e)for(const r of e){if(rl(r)||ol(r))return r;if(Np(r,r.children)){const o=Go(r.children);if(o)return o}else if(EE(r,r.children)){const o=(t=(n=r.children).default)==null?void 0:t.call(n);if(o){const i=Go(o);if(i)return i}}else if(el(r)){const o=Go(r);if(o)return o}}},TE=e=>{if(!e)return!0;for(const n of e)if(n.children)return!1;return!0},Dp=(e,n)=>{if(e&&e.length>0)for(let t=0;t<e.length;t++){const r=e[t];if(rl(r)||ol(r)){const i=wi(n)?n(r):n;return e[t]=qn(r,i,!0),!0}const o=Bp(r);if(o&&o.length>0&&Dp(o,n))return!0}return!1},Bp=e=>{if(Np(e,e.children))return e.children;if(el(e))return e},Hp=e=>{var n,t;if(rl(e))return e.el;if(ol(e)){if(((n=e.el)==null?void 0:n.nodeType)===1)return e.el;if((t=e.component)!=null&&t.subTree){const r=Hp(e.component.subTree);if(r)return r}}else{const r=Bp(e);return Mp(r)}},Mp=e=>{if(e&&e.length>0)for(const n of e){const t=Hp(n);if(t)return t}},jc=e=>{if(e)return wi(e)?e:()=>e};var _E=re({name:"ResizeObserver",emits:["resize"],setup(e,{emit:n,slots:t}){let r;const o=le(),i=N(()=>Ub(o.value)?o.value.$el:o.value),s=l=>{l&&(r=new tl(d=>{const c=d[0];n("resize",c)}),r.observe(l))},a=()=>{r&&(r.disconnect(),r=null)};return en(i,l=>{r&&a(),l&&s(l)}),dn(()=>{i.value&&s(i.value)}),qt(()=>{a()}),()=>{var l,d;const c=Go((d=(l=t.default)==null?void 0:l.call(t))!=null?d:[]);return c?qn(c,{ref:o},!0):null}}});const Fp=typeof window>"u"?global:window,PE=Fp.requestAnimationFrame,Kc=Fp.cancelAnimationFrame;function kE(e){let n=0;const t=(...r)=>{n&&Kc(n),n=PE(()=>{e(...r),n=0})};return t.cancel=()=>{Kc(n),n=0},t}const il=()=>{},sl=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),_t=(()=>sl?il:(e,n,t,r=!1)=>{e.addEventListener(n,t,r)})(),ar=(()=>sl?il:(e,n,t,r=!1)=>{e.removeEventListener(n,t,r)})(),OE=e=>{const n=document.createElement("div");return n.setAttribute("class",`arco-overlay arco-overlay-${e}`),n},RE=(e,n)=>{var t;return sl?il():(t=(n??document).querySelector(e))!=null?t:void 0},Uc=(e,n)=>{if(Eo(e)){const t=e[0]==="#"?`[id='${e.slice(1)}']`:e;return RE(t,n)}return e},CE=re({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:he("icon-hover")}}});function LE(e,n,t,r,o,i){return q(),se("span",{class:X([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[ve(e.$slots,"default")],2)}var xE=Se(CE,[["render",LE]]);const IE=["info","success","warning","error"];var wE=Object.defineProperty,Wc=Object.getOwnPropertySymbols,AE=Object.prototype.hasOwnProperty,NE=Object.prototype.propertyIsEnumerable,zc=(e,n,t)=>n in e?wE(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,DE=(e,n)=>{for(var t in n||(n={}))AE.call(n,t)&&zc(e,t,n[t]);if(Wc)for(var t of Wc(n))NE.call(n,t)&&zc(e,t,n[t]);return e};const BE=(e,n)=>{const t=DE({},e);for(const r of n)r in t&&delete t[r];return t},HE=Symbol("ArcoFormItemContext"),ME=({size:e,disabled:n,error:t,uninject:r}={})=>{const o=r?{}:ze(HE,{}),i=N(()=>{var c;return(c=e==null?void 0:e.value)!=null?c:o.size}),s=N(()=>(n==null?void 0:n.value)||o.disabled),a=N(()=>(t==null?void 0:t.value)||o.error),l=Ys(o,"feedback"),d=Ys(o,"eventHandlers");return{formItemCtx:o,mergedSize:i,mergedDisabled:s,mergedError:a,feedback:l,eventHandlers:d}},FE=(e,{defaultValue:n="medium"}={})=>{const t=ze(So,void 0);return{mergedSize:N(()=>{var o,i;return(i=(o=e==null?void 0:e.value)!=null?o:t==null?void 0:t.size)!=null?i:n})}},$p=Symbol("ArcoButtonGroup"),$E=re({name:"Button",components:{IconLoading:nl},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:n}){const{size:t,disabled:r}=Zn(e),o=he("btn"),i=ze($p,void 0),s=N(()=>{var m;return(m=t.value)!=null?m:i==null?void 0:i.size}),a=N(()=>Boolean(r.value||(i==null?void 0:i.disabled))),{mergedSize:l,mergedDisabled:d}=ME({size:s,disabled:a}),{mergedSize:c}=FE(l),p=N(()=>{var m,h,S,b,y,_;return[o,`${o}-${(h=(m=e.type)!=null?m:i==null?void 0:i.type)!=null?h:"secondary"}`,`${o}-shape-${(b=(S=e.shape)!=null?S:i==null?void 0:i.shape)!=null?b:"square"}`,`${o}-size-${c.value}`,`${o}-status-${(_=(y=e.status)!=null?y:i==null?void 0:i.status)!=null?_:"normal"}`,{[`${o}-long`]:e.long,[`${o}-loading`]:e.loading,[`${o}-disabled`]:d.value,[`${o}-link`]:Eo(e.href)}]});return{prefixCls:o,cls:p,mergedDisabled:d,handleClick:m=>{if(e.disabled||e.loading){m.preventDefault();return}n("click",m)}}}}),jE=["href"],KE=["type","disabled"];function UE(e,n,t,r,o,i){const s=ye("icon-loading");return e.href?(q(),se("a",{key:0,class:X([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:n[0]||(n[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(q(),se("span",{key:0,class:X(`${e.prefixCls}-icon`)},[e.loading?(q(),$e(s,{key:0,spin:"true"})):ve(e.$slots,"icon",{key:1})],2)):ln("v-if",!0),ve(e.$slots,"default")],10,jE)):(q(),se("button",{key:1,class:X([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:n[1]||(n[1]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.loading||e.$slots.icon?(q(),se("span",{key:0,class:X(`${e.prefixCls}-icon`)},[e.loading?(q(),$e(s,{key:0,spin:!0})):ve(e.$slots,"icon",{key:1})],2)):ln("v-if",!0),ve(e.$slots,"default")],10,KE))}var xs=Se($E,[["render",UE]]);const WE=re({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:n,size:t,status:r,disabled:o,shape:i}=Zn(e),s=he("btn-group");return Tt($p,Pn({type:n,size:t,shape:i,status:r,disabled:o})),{prefixCls:s}}});function zE(e,n,t,r,o,i){return q(),se("div",{class:X(e.prefixCls)},[ve(e.$slots,"default")],2)}var qo=Se(WE,[["render",zE]]);const To=Object.assign(xs,{Group:qo,install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+xs.name,xs),e.component(t+qo.name,qo)}});var GE=Object.defineProperty,Gc=Object.getOwnPropertySymbols,qE=Object.prototype.hasOwnProperty,VE=Object.prototype.propertyIsEnumerable,qc=(e,n,t)=>n in e?GE(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,jr=(e,n)=>{for(var t in n||(n={}))qE.call(n,t)&&qc(e,t,n[t]);if(Gc)for(var t of Gc(n))VE.call(n,t)&&qc(e,t,n[t]);return e};const JE=()=>({width:document.documentElement.clientWidth||window.innerWidth,height:document.documentElement.clientHeight||window.innerHeight}),Vc=(e,n)=>{var t,r;const o=e.getBoundingClientRect();return{top:o.top,bottom:o.bottom,left:o.left,right:o.right,scrollTop:o.top-n.top,scrollBottom:o.bottom-n.top,scrollLeft:o.left-n.left,scrollRight:o.right-n.left,width:(t=e.offsetWidth)!=null?t:e.clientWidth,height:(r=e.offsetHeight)!=null?r:e.clientHeight}},ZE=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},No=(e,n)=>{switch(n){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},YE=(e,n,{containerRect:t,triggerRect:r,popupRect:o,offset:i,translate:s})=>{const a=ZE(e),l=JE(),d={top:t.top+n.top,bottom:l.height-(t.top+n.top+o.height),left:t.left+n.left,right:l.width-(t.left+n.left+o.width)};let c=e;if(a==="top"&&d.top<0)if(r.top>o.height)n.top=-t.top;else{const p=Kr("bottom",r,o,{offset:i,translate:s});l.height-(t.top+p.top+o.height)>0&&(c=No(e,"bottom"),n.top=p.top)}if(a==="bottom"&&d.bottom<0)if(l.height-r.bottom>o.height)n.top=-t.top+(l.height-o.height);else{const p=Kr("top",r,o,{offset:i,translate:s});t.top+p.top>0&&(c=No(e,"top"),n.top=p.top)}if(a==="left"&&d.left<0)if(r.left>o.width)n.left=-t.left;else{const p=Kr("right",r,o,{offset:i,translate:s});l.width-(t.left+p.left+o.width)>0&&(c=No(e,"right"),n.left=p.left)}if(a==="right"&&d.right<0)if(l.width-r.right>o.width)n.left=-t.left+(l.width-o.width);else{const p=Kr("left",r,o,{offset:i,translate:s});t.left+p.left>0&&(c=No(e,"left"),n.left=p.left)}return(a==="top"||a==="bottom")&&(d.left<0?n.left=-t.left:d.right<0&&(n.left=-t.left+(l.width-o.width))),(a==="left"||a==="right")&&(d.top<0?n.top=-t.top:d.bottom<0&&(n.top=-t.top+(l.height-o.height))),{popupPosition:n,position:c}},Kr=(e,n,t,{offset:r=0,translate:o=[0,0]}={})=>{var i;const s=(i=el(o)?o:o[e])!=null?i:[0,0];switch(e){case"top":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+s[0],top:n.scrollTop-t.height-r+s[1]};case"tl":return{left:n.scrollLeft+s[0],top:n.scrollTop-t.height-r+s[1]};case"tr":return{left:n.scrollRight-t.width+s[0],top:n.scrollTop-t.height-r+s[1]};case"bottom":return{left:n.scrollLeft+Math.round(n.width/2)-Math.round(t.width/2)+s[0],top:n.scrollBottom+r+s[1]};case"bl":return{left:n.scrollLeft+s[0],top:n.scrollBottom+r+s[1]};case"br":return{left:n.scrollRight-t.width+s[0],top:n.scrollBottom+r+s[1]};case"left":return{left:n.scrollLeft-t.width-r+s[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+s[1]};case"lt":return{left:n.scrollLeft-t.width-r+s[0],top:n.scrollTop+s[1]};case"lb":return{left:n.scrollLeft-t.width-r+s[0],top:n.scrollBottom-t.height+s[1]};case"right":return{left:n.scrollRight+r+s[0],top:n.scrollTop+Math.round(n.height/2)-Math.round(t.height/2)+s[1]};case"rt":return{left:n.scrollRight+r+s[0],top:n.scrollTop+s[1]};case"rb":return{left:n.scrollRight+r+s[0],top:n.scrollBottom-t.height+s[1]};default:return{left:0,top:0}}},XE=e=>{let n="0";["top","bottom"].includes(e)?n="50%":["left","lt","lb","tr","br"].includes(e)&&(n="100%");let t="0";return["left","right"].includes(e)?t="50%":["top","tl","tr","lt","rt"].includes(e)&&(t="100%"),`${n} ${t}`},QE=(e,n,t,r,{offset:o=0,translate:i=[0,0],customStyle:s={},autoFitPosition:a=!1}={})=>{let l=e,d=Kr(e,t,r,{offset:o,translate:i});if(a){const p=YE(e,d,{containerRect:n,popupRect:r,triggerRect:t,offset:o,translate:i});d=p.popupPosition,l=p.position}return{style:jr({left:`${d.left}px`,top:`${d.top}px`},s),position:l}},eT=(e,n,t,{customStyle:r={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let i=Math.abs(n.scrollLeft+n.width/2-t.scrollLeft);return i>t.width-8&&(n.width>t.width?i=t.width/2:i=t.width-8),["top","tl","tr"].includes(e)?jr({left:`${i}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},r):jr({left:`${i}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)}let o=Math.abs(n.scrollTop+n.height/2-t.scrollTop);return o>t.height-8&&(n.height>t.height?o=t.height/2:o=t.height-8),["left","lt","lb"].includes(e)?jr({top:`${o}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},r):jr({top:`${o}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},r)},nT=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,Jc=e=>{var n;const t=[];let r=e;for(;r&&r!==document.documentElement;)nT(r)&&t.push(r),r=(n=r.parentElement)!=null?n:void 0;return t},jp=()=>{const e={},n=le(),t=()=>{const r=Mp(e.value);r!==n.value&&(n.value=r)};return dn(()=>t()),_r(()=>t()),{children:e,firstElement:n}};var ma=re({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:n,slots:t}){const{children:r,firstElement:o}=jp();let i;const s=l=>{l&&(i=new tl(d=>{const c=d[0];n("resize",c)}),i.observe(l))},a=()=>{i&&(i.disconnect(),i=null)};return en(o,l=>{i&&a(),l&&s(l)}),ho(()=>{i&&a()}),()=>{var l;return r.value=(l=t.default)==null?void 0:l.call(t),r.value}}});function tT(e,n){const t=le(e[n]);return _r(()=>{const r=e[n];t.value!==r&&(t.value=r)}),t}const Zc=Symbol("ArcoTrigger"),rT=1e3,oT=5e3,iT=1;class sT{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=n=>(n==="message"?Array.from(this.popupStack.message).pop()||oT:Array.from(this.popupStack.popup).pop()||rT)+iT,this.add=n=>{const t=this.getNextZIndex(n);return this.popupStack[n].add(t),n==="dialog"&&this.popupStack.popup.add(t),t},this.delete=(n,t)=>{this.popupStack[t].delete(n),t==="dialog"&&this.popupStack.popup.delete(n)},this.isLastDialog=n=>this.popupStack.dialog.size>1?n===Array.from(this.popupStack.dialog).pop():!0}}const Is=new sT;function Kp(e,{visible:n,runOnMounted:t}={}){const r=le(0),o=()=>{r.value=Is.add(e)},i=()=>{Is.delete(r.value,e)},s=()=>e==="dialog"?Is.isLastDialog(r.value):!1;return en(()=>n==null?void 0:n.value,a=>{a?o():i()},{immediate:!0}),t&&(dn(()=>{o()}),ho(()=>{i()})),{zIndex:ja(r),open:o,close:i,isLastDialog:s}}const aT=({elementRef:e,onResize:n})=>{let t;return{createResizeObserver:()=>{e.value&&(t=new tl(i=>{const s=i[0];wi(n)&&n(s)}),t.observe(e.value))},destroyResizeObserver:()=>{t&&(t.disconnect(),t=null)}}};var lT=re({name:"ClientOnly",setup(e,{slots:n}){const t=le(!1);return dn(()=>t.value=!0),()=>{var r;return t.value?(r=n.default)==null?void 0:r.call(n):null}}});const cT=({popupContainer:e,visible:n,defaultContainer:t="body",documentContainer:r})=>{const o=le(e.value),i=le(),s=()=>{const a=Uc(e.value),l=a?e.value:t,d=a??(r?document.documentElement:Uc(t));l!==o.value&&(o.value=l),d!==i.value&&(i.value=d)};return dn(()=>s()),en(n,a=>{o.value!==e.value&&a&&s()}),{teleportContainer:o,containerRef:i}};var dT=Object.defineProperty,uT=Object.defineProperties,pT=Object.getOwnPropertyDescriptors,Yc=Object.getOwnPropertySymbols,fT=Object.prototype.hasOwnProperty,mT=Object.prototype.propertyIsEnumerable,Xc=(e,n,t)=>n in e?dT(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,gT=(e,n)=>{for(var t in n||(n={}))fT.call(n,t)&&Xc(e,t,n[t]);if(Yc)for(var t of Yc(n))mT.call(n,t)&&Xc(e,t,n[t]);return e},vT=(e,n)=>uT(e,pT(n));const hT=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var ws=re({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:n,slots:t,attrs:r}){const{popupContainer:o}=Zn(e),i=he("trigger"),s=N(()=>BE(r,hT)),a=ze(So,void 0),l=N(()=>[].concat(e.trigger)),d=new Set,c=ze(Zc,void 0),{children:p,firstElement:f}=jp(),m=le(),h=le(e.defaultPopupVisible),S=le(e.position),b=le({}),y=le({}),_=le({}),k=le(),A=le({top:0,left:0}),R=N(()=>{var P;return(P=e.popupVisible)!=null?P:h.value}),{teleportContainer:D,containerRef:F}=cT({popupContainer:o,visible:R,documentContainer:!0}),{zIndex:x}=Kp("popup",{visible:R});let w=0,$=!1;const Z=()=>{w&&(window.clearTimeout(w),w=0)},j=P=>{if(e.alignPoint){const{pageX:L,pageY:J}=P;A.value={top:J,left:L}}},de=()=>{if(!f.value||!m.value||!F.value)return;const P=F.value.getBoundingClientRect(),L=e.alignPoint?{top:A.value.top,bottom:A.value.top,left:A.value.left,right:A.value.left,scrollTop:A.value.top,scrollBottom:A.value.top,scrollLeft:A.value.left,scrollRight:A.value.left,width:0,height:0}:Vc(f.value,P),J=()=>Vc(m.value,P),te=J(),{style:pe,position:Le}=QE(e.position,P,L,te,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(y.value={transformOrigin:XE(Le)}),e.autoFitPopupMinWidth?pe.minWidth=`${L.width}px`:e.autoFitPopupWidth&&(pe.width=`${L.width}px`),S.value!==Le&&(S.value=Le),b.value=pe,e.showArrow&&zt(()=>{_.value=eT(Le,L,J(),{customStyle:e.arrowStyle})})},Q=(P,L)=>{if(P===R.value&&w===0)return;const J=()=>{h.value=P,n("update:popupVisible",P),n("popupVisibleChange",P),P&&zt(()=>{de()})};L?(Z(),P!==R.value&&(w=window.setTimeout(J,L))):J()},xe=P=>{var L;(L=r.onClick)==null||L.call(r,P),!(e.disabled||R.value&&!e.clickToClose)&&(l.value.includes("click")?(j(P),Q(!R.value)):l.value.includes("contextMenu")&&R.value&&Q(!1))},Oe=P=>{var L;(L=r.onMouseenter)==null||L.call(r,P),!(e.disabled||!l.value.includes("hover"))&&(j(P),Q(!0,e.mouseEnterDelay))},Ee=P=>{c==null||c.onMouseenter(P),Oe(P)},oe=P=>{var L;(L=r.onMouseleave)==null||L.call(r,P),!(e.disabled||!l.value.includes("hover"))&&Q(!1,e.mouseLeaveDelay)},ge=P=>{c==null||c.onMouseleave(P),oe(P)},_e=P=>{var L;(L=r.onFocusin)==null||L.call(r,P),!(e.disabled||!l.value.includes("focus"))&&Q(!0,e.focusDelay)},Re=P=>{var L;(L=r.onFocusout)==null||L.call(r,P),!(e.disabled||!l.value.includes("focus"))&&e.blurToClose&&Q(!1)},Te=P=>{var L;(L=r.onContextmenu)==null||L.call(r,P),!(e.disabled||!l.value.includes("contextMenu")||R.value&&!e.clickToClose)&&(j(P),Q(!R.value),P.preventDefault())};Tt(Zc,Pn({onMouseenter:Ee,onMouseleave:ge,addChildRef:P=>{d.add(P),c==null||c.addChildRef(P)},removeChildRef:P=>{d.delete(P),c==null||c.removeChildRef(P)}}));const T=()=>{ar(document.documentElement,"mousedown",Y),$=!1},K=tT(t,"content"),H=N(()=>{var P;return e.hideEmpty&&TE((P=K.value)==null?void 0:P.call(K))}),Y=P=>{var L,J,te;if(!((L=f.value)!=null&&L.contains(P.target)||(J=m.value)!=null&&J.contains(P.target))){for(const pe of d)if((te=pe.value)!=null&&te.contains(P.target))return;T(),Q(!1)}},ne=kE(()=>{R.value&&de()}),Ce=()=>{R.value&&de()},me=()=>{Ce(),n("resize")},g=P=>{e.preventFocus&&P.preventDefault()};c==null||c.addChildRef(m);const v=N(()=>R.value?e.openedClass:void 0);let E;en(R,P=>{if(e.clickOutsideToClose&&(!P&&$?T():P&&!$&&(_t(document.documentElement,"mousedown",Y),$=!0)),e.updateAtScroll||a!=null&&a.updateAtScroll){if(P){E=Jc(f.value);for(const L of E)L.addEventListener("scroll",ne)}else if(E){for(const L of E)L.removeEventListener("scroll",ne);E=void 0}}P&&(M.value=!0)}),en(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{R.value&&de()});const{createResizeObserver:O,destroyResizeObserver:C}=aT({elementRef:F,onResize:Ce});dn(()=>{if(O(),R.value&&(de(),e.clickOutsideToClose&&!$&&(_t(document.documentElement,"mousedown",Y),$=!0),e.updateAtScroll||a!=null&&a.updateAtScroll)){E=Jc(f.value);for(const P of E)P.addEventListener("scroll",ne)}}),_r(()=>{R.value&&de()}),ju(()=>{Q(!1)}),ho(()=>{if(c==null||c.removeChildRef(m),C(),$&&T(),E){for(const P of E)P.removeEventListener("scroll",ne);E=void 0}});const M=le(R.value),z=le(!1),B=()=>{z.value=!0},W=()=>{z.value=!1,R.value&&n("show")},I=()=>{z.value=!1,R.value||(M.value=!1,n("hide"))};return()=>{var P,L;return p.value=(L=(P=t.default)==null?void 0:P.call(t))!=null?L:[],Dp(p.value,{class:v.value,onClick:xe,onMouseenter:Oe,onMouseleave:oe,onFocusin:_e,onFocusout:Re,onContextmenu:Te}),G(Qe,null,[e.autoFixPosition?G(ma,{onResize:me},{default:()=>[p.value]}):p.value,G(lT,null,{default:()=>[G(Ev,{to:D.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||R.value||M.value)&&!H.value&&G(ma,{onResize:Ce},{default:()=>[G("div",bo({ref:m,class:[`${i}-popup`,`${i}-position-${S.value}`],style:vT(gT({},b.value),{zIndex:x.value,pointerEvents:z.value?"none":"auto"}),"trigger-placement":S.value,onMouseenter:Ee,onMouseleave:ge,onMousedown:g},s.value),[G(yo,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:B,onAfterEnter:W,onBeforeLeave:B,onAfterLeave:I},{default:()=>{var J;return[ev(G("div",{class:`${i}-popup-wrapper`,style:y.value},[G("div",{class:[`${i}-content`,e.contentClass],style:e.contentStyle},[(J=t.content)==null?void 0:J.call(t)]),e.showArrow&&G("div",{ref:k,class:[`${i}-arrow`,e.arrowClass],style:_.value},null)]),[[uh,R.value]])]}})])]})]})]})])}}});const al=Object.assign(ws,{install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+ws.name,ws)}});var As=re({name:"Empty",props:{description:String,imgSrc:String},setup(e,{slots:n}){const t=he("empty"),{t:r}=rE(),o=ze(So,void 0);return()=>{var i,s,a,l;return o!=null&&o.slots.empty&&!(n.image||e.imgSrc)?o.slots.empty():G("div",{class:t},[G("div",{class:`${t}-image`},[(s=(i=n.image)==null?void 0:i.call(n))!=null?s:e.imgSrc?G("img",{src:e.imgSrc,alt:e.description||"empty"},null):G(NS,null,null)]),G("div",{class:`${t}-description`},[(l=(a=n.default)==null?void 0:a.call(n))!=null?l:e.description||r("empty.description")])])}}});const bT=Object.assign(As,{install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+As.name,As)}}),yT=re({name:"Thumb",props:{data:{type:Object},direction:{type:String,default:"horizontal"},alwaysShow:{type:Boolean,default:!1},both:{type:Boolean,default:!1}},emits:["scroll"],setup(e,{emit:n}){const t=he("scrollbar"),r=le(!1),o=le(),i=le(),s=N(()=>e.direction==="horizontal"?{size:"width",direction:"left",offset:"offsetWidth",client:"clientX"}:{size:"height",direction:"top",offset:"offsetHeight",client:"clientY"}),a=le(0),l=le(!1),d=le(0),c=N(()=>{var _,k;return{[s.value.size]:`${(k=(_=e.data)==null?void 0:_.thumbSize)!=null?k:0}px`,[s.value.direction]:`${a.value}px`}}),p=_=>{_.preventDefault(),i.value&&(d.value=_[s.value.client]-i.value.getBoundingClientRect()[s.value.direction],l.value=!0,_t(window,"mousemove",h),_t(window,"mouseup",S),_t(window,"contextmenu",S))},f=_=>{var k,A,R,D;if(_.preventDefault(),i.value){const F=m(_[s.value.client]>i.value.getBoundingClientRect()[s.value.direction]?a.value+((A=(k=e.data)==null?void 0:k.thumbSize)!=null?A:0):a.value-((D=(R=e.data)==null?void 0:R.thumbSize)!=null?D:0));F!==a.value&&(a.value=F,n("scroll",F))}},m=_=>_<0?0:e.data&&_>e.data.max?e.data.max:_,h=_=>{if(o.value&&i.value){const k=m(_[s.value.client]-o.value.getBoundingClientRect()[s.value.direction]-d.value);k!==a.value&&(a.value=k,n("scroll",k))}},S=()=>{l.value=!1,ar(window,"mousemove",h),ar(window,"mouseup",S)},b=_=>{l.value||(_=m(_),_!==a.value&&(a.value=_))},y=N(()=>[`${t}-thumb`,`${t}-thumb-direction-${e.direction}`,{[`${t}-thumb-dragging`]:l.value}]);return{visible:r,trackRef:o,thumbRef:i,prefixCls:t,thumbCls:y,thumbStyle:c,handleThumbMouseDown:p,handleTrackClick:f,setOffset:b}}});function ST(e,n,t,r,o,i){return q(),$e(yo,null,{default:ee(()=>[ue("div",{ref:"trackRef",class:X([`${e.prefixCls}-track`,`${e.prefixCls}-track-direction-${e.direction}`]),onMousedown:n[1]||(n[1]=dh((...s)=>e.handleTrackClick&&e.handleTrackClick(...s),["self"]))},[ue("div",{ref:"thumbRef",class:X(e.thumbCls),style:Be(e.thumbStyle),onMousedown:n[0]||(n[0]=(...s)=>e.handleThumbMouseDown&&e.handleThumbMouseDown(...s))},[ue("div",{class:X(`${e.prefixCls}-thumb-bar`)},null,2)],38)],34)]),_:1})}var ET=Se(yT,[["render",ST]]);const Qc=20,Do=15,TT=re({name:"Scrollbar",components:{ResizeObserver:ma,Thumb:ET},inheritAttrs:!1,props:{type:{type:String,default:"embed"},outerClass:[String,Object,Array],outerStyle:{type:[String,Object,Array]},hide:{type:Boolean,default:!1},disableHorizontal:{type:Boolean,default:!1},disableVertical:{type:Boolean,default:!1}},emits:{scroll:e=>!0},setup(e,{emit:n}){const t=he("scrollbar"),r=le(),o=le(),i=le(),s=le(),a=le(),l=le(!1),d=le(!1),c=N(()=>l.value&&!e.disableHorizontal),p=N(()=>d.value&&!e.disableVertical),f=le(!1),m=()=>{var A,R,D,F,x,w;if(r.value){const{clientWidth:$,clientHeight:Z,offsetWidth:j,offsetHeight:de,scrollWidth:Q,scrollHeight:xe,scrollTop:Oe,scrollLeft:Ee}=r.value;l.value=Q>$,d.value=xe>Z,f.value=c.value&&p.value;const oe=e.type==="embed"&&f.value?j-Do:j,ge=e.type==="embed"&&f.value?de-Do:de,_e=Math.round(oe/Math.min(Q/$,oe/Qc)),Re=oe-_e,Te=(Q-$)/Re,Ke=Math.round(ge/Math.min(xe/Z,ge/Qc)),He=ge-Ke,T=(xe-Z)/He;if(o.value={ratio:Te,thumbSize:_e,max:Re},i.value={ratio:T,thumbSize:Ke,max:He},Oe>0){const K=Math.round(Oe/((R=(A=i.value)==null?void 0:A.ratio)!=null?R:1));(D=a.value)==null||D.setOffset(K)}if(Ee>0){const K=Math.round(Ee/((x=(F=i.value)==null?void 0:F.ratio)!=null?x:1));(w=s.value)==null||w.setOffset(K)}}};dn(()=>{m()});const h=()=>{m()},S=A=>{var R,D,F,x,w,$;if(r.value){if(c.value&&!e.disableHorizontal){const Z=Math.round(r.value.scrollLeft/((D=(R=o.value)==null?void 0:R.ratio)!=null?D:1));(F=s.value)==null||F.setOffset(Z)}if(p.value&&!e.disableVertical){const Z=Math.round(r.value.scrollTop/((w=(x=i.value)==null?void 0:x.ratio)!=null?w:1));($=a.value)==null||$.setOffset(Z)}}n("scroll",A)},b=A=>{var R,D;r.value&&r.value.scrollTo({left:A*((D=(R=o.value)==null?void 0:R.ratio)!=null?D:1)})},y=A=>{var R,D;r.value&&r.value.scrollTo({top:A*((D=(R=i.value)==null?void 0:R.ratio)!=null?D:1)})},_=N(()=>{const A={};return e.type==="track"&&(c.value&&(A.paddingBottom=`${Do}px`),p.value&&(A.paddingRight=`${Do}px`)),[A,e.outerStyle]}),k=N(()=>[`${t}`,`${t}-type-${e.type}`,{[`${t}-both`]:f.value},e.outerClass]);return{prefixCls:t,cls:k,style:_,containerRef:r,horizontalThumbRef:s,verticalThumbRef:a,horizontalData:o,verticalData:i,isBoth:f,hasHorizontalScrollbar:c,hasVerticalScrollbar:p,handleResize:h,handleScroll:S,handleHorizontalScroll:b,handleVerticalScroll:y}},methods:{scrollTo(e,n){var t,r;Kb(e)?(t=this.$refs.containerRef)==null||t.scrollTo(e):(e||n)&&((r=this.$refs.containerRef)==null||r.scrollTo(e,n))},scrollTop(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({top:e})},scrollLeft(e){var n;(n=this.$refs.containerRef)==null||n.scrollTo({left:e})}}});function _T(e,n,t,r,o,i){const s=ye("ResizeObserver"),a=ye("thumb");return q(),se("div",{class:X(e.cls),style:Be(e.style)},[G(s,{onResize:e.handleResize},{default:ee(()=>[ue("div",bo({ref:"containerRef",class:`${e.prefixCls}-container`},e.$attrs,{onScroll:n[0]||(n[0]=(...l)=>e.handleScroll&&e.handleScroll(...l))}),[G(s,{onResize:e.handleResize},{default:ee(()=>[ve(e.$slots,"default")]),_:3},8,["onResize"])],16)]),_:3},8,["onResize"]),!e.hide&&e.hasHorizontalScrollbar?(q(),$e(a,{key:0,ref:"horizontalThumbRef",data:e.horizontalData,direction:"horizontal",both:e.isBoth,onScroll:e.handleHorizontalScroll},null,8,["data","both","onScroll"])):ln("v-if",!0),!e.hide&&e.hasVerticalScrollbar?(q(),$e(a,{key:1,ref:"verticalThumbRef",data:e.verticalData,direction:"vertical",both:e.isBoth,onScroll:e.handleVerticalScroll},null,8,["data","both","onScroll"])):ln("v-if",!0)],6)}var Ns=Se(TT,[["render",_T]]);const PT=Object.assign(Ns,{install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+Ns.name,Ns)}}),ll=Symbol("ArcoDropdown"),kT=re({name:"DropdownPanel",components:{Scrollbar:PT,Empty:bT},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:n,slots:t}){const r=he("dropdown"),o=ze(ll,{}),i=le(),s=d=>{const{scrollTop:c,scrollHeight:p,offsetHeight:f}=d.target;p-(c+f)<=e.bottomOffset&&n("reachBottom",d),n("scroll",d)},a=N(()=>{if(Ze(o.popupMaxHeight))return{maxHeight:`${o.popupMaxHeight}px`};if(!o.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),l=N(()=>[r,{[`${r}-has-footer`]:Boolean(t.footer)}]);return{prefixCls:r,cls:l,style:a,wrapperRef:i,handleScroll:s}}});function OT(e,n,t,r,o,i){const s=ye("empty"),a=ye("Scrollbar");return q(),se("div",{class:X(e.cls)},[e.isEmpty?(q(),se("div",{key:0,class:X(`${e.prefixCls}-empty`)},[ve(e.$slots,"empty",{},()=>[G(s)])],2)):ln("v-if",!0),G(a,{ref:"wrapperRef",class:X(`${e.prefixCls}-list-wrapper`),style:Be(e.style),onScroll:e.handleScroll},{default:ee(()=>[ue("ul",{class:X(`${e.prefixCls}-list`)},[ve(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(q(),se("div",{key:1,class:X(`${e.prefixCls}-footer`)},[ve(e.$slots,"footer")],2)):ln("v-if",!0)],2)}var Up=Se(kT,[["render",OT]]);const cl=({popupVisible:e,defaultPopupVisible:n,emit:t})=>{var r;const o=le((r=n==null?void 0:n.value)!=null?r:!1),i=N(()=>{var a;return(a=e==null?void 0:e.value)!=null?a:o.value}),s=a=>{a!==i.value&&(o.value=a,t("update:popupVisible",a),t("popupVisibleChange",a))};return en(i,a=>{o.value!==a&&(o.value=a)}),{computedPopupVisible:i,handlePopupVisibleChange:s}},RT=re({name:"Dropdown",components:{Trigger:al,DropdownPanel:Up},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r,popupMaxHeight:o}=Zn(e),i=he("dropdown"),{computedPopupVisible:s,handlePopupVisibleChange:a}=cl({defaultPopupVisible:t,popupVisible:r,emit:n});return Tt(ll,Pn({popupMaxHeight:o,onOptionClick:(d,c)=>{n("select",d,c),e.hideOnSelect&&a(!1)}})),{prefixCls:i,computedPopupVisible:s,handlePopupVisibleChange:a}}});function CT(e,n,t,r,o,i){const s=ye("DropdownPanel"),a=ye("Trigger");return q(),$e(a,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:ee(()=>[G(s,null,Qs({default:ee(()=>[ve(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:ee(()=>[ve(e.$slots,"footer")])}:void 0]),1024)]),default:ee(()=>[ve(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var Vo=Se(RT,[["render",CT]]);const LT=re({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=he("dropdown-option"),r=le(),o=N(()=>{var l,d,c;return(c=(d=e.value)!=null?d:(l=r.value)==null?void 0:l.textContent)!=null?c:void 0}),i=e.uninjectContext?void 0:ze(ll,void 0),s=l=>{e.disabled||(n("click",l),i==null||i.onOptionClick(o.value,l))},a=N(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:a,liRef:r,handleClick:s}}});function xT(e,n,t,r,o,i){return q(),se("li",{ref:"liRef",class:X([e.cls,{[`${e.prefixCls}-has-suffix`]:Boolean(e.$slots.suffix)}]),onClick:n[0]||(n[0]=(...s)=>e.handleClick&&e.handleClick(...s))},[e.$slots.icon?(q(),se("span",{key:0,class:X(`${e.prefixCls}-icon`)},[ve(e.$slots,"icon")],2)):ln("v-if",!0),ue("span",{class:X(`${e.prefixCls}-content`)},[ve(e.$slots,"default")],2),e.$slots.suffix?(q(),se("span",{key:1,class:X(`${e.prefixCls}-suffix`)},[ve(e.$slots,"suffix")],2)):ln("v-if",!0)],2)}var Yr=Se(LT,[["render",xT]]);const IT=re({name:"Dgroup",props:{title:String},setup(){return{prefixCls:he("dropdown-group")}}});function wT(e,n,t,r,o,i){return q(),se(Qe,null,[ue("li",{class:X(`${e.prefixCls}-title`)},[ve(e.$slots,"title",{},()=>[Ln(bt(e.title),1)])],2),ve(e.$slots,"default")],64)}var Ds=Se(IT,[["render",wT]]);const AT=re({name:"Dsubmenu",components:{Trigger:al,DropdownPanel:Up,DropdownOption:Yr,IconRight:ny},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=Zn(e),o=he("dropdown"),{computedPopupVisible:i,handlePopupVisibleChange:s}=cl({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:o,computedPopupVisible:i,handlePopupVisibleChange:s}}});function NT(e,n,t,r,o,i){const s=ye("IconRight"),a=ye("dropdown-option"),l=ye("dropdown-panel"),d=ye("Trigger");return q(),$e(d,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:ee(()=>[G(l,{class:X(`${e.prefixCls}-submenu`)},Qs({default:ee(()=>[ve(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:ee(()=>[ve(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:ee(()=>[G(a,bo(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),Qs({suffix:ee(()=>[ve(e.$slots,"suffix",{},()=>[G(s)])]),default:ee(()=>[ve(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:ee(()=>[ve(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var Bs=Se(AT,[["render",NT]]);const DT=re({name:"DropdownButton",components:{IconMore:tS,Button:To,ButtonGroup:qo,Dropdown:Vo},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,n)=>!0},setup(e,{emit:n}){const{defaultPopupVisible:t,popupVisible:r}=Zn(e),o=he("dropdown"),{computedPopupVisible:i,handlePopupVisibleChange:s}=cl({defaultPopupVisible:t,popupVisible:r,emit:n});return{prefixCls:o,computedPopupVisible:i,handleClick:d=>{n("click",d)},handleSelect:(d,c)=>{n("select",d,c)},handlePopupVisibleChange:s}}});function BT(e,n,t,r,o,i){const s=ye("Button"),a=ye("IconMore"),l=ye("Dropdown"),d=ye("ButtonGroup");return q(),$e(d,null,{default:ee(()=>[G(s,bo({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:ee(()=>[ve(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),G(l,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:ee(()=>[ve(e.$slots,"content")]),default:ee(()=>[G(s,{size:e.size,type:e.type,disabled:e.disabled},{icon:ee(()=>[ve(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[G(a)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var Hs=Se(DT,[["render",BT]]);const HT=Object.assign(Vo,{Option:Yr,Group:Ds,Submenu:Bs,Button:Hs,install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+Vo.name,Vo),e.component(t+Yr.name,Yr),e.component(t+Ds.name,Ds),e.component(t+Bs.name,Bs),e.component(t+Hs.name,Hs)}});function MT(e,n,t){return N(()=>Boolean(e[t]||n[t]))}function FT(e){const n=le(e);return[n,r=>{n.value=r}]}function $T(e,n){const{value:t}=Zn(n),[r,o]=FT(zo(t.value)?e:t.value);return en(t,s=>{zo(s)&&o(void 0)}),[N(()=>zo(t.value)?r.value:t.value),o,r]}const jT=re({name:"Link",components:{IconLink:mS,IconLoading:nl},props:{href:String,status:{type:String,default:"normal"},hoverable:{type:Boolean,default:!0},icon:Boolean,loading:Boolean,disabled:Boolean},emits:{click:e=>!0},setup(e,{slots:n,emit:t}){const r=he("link"),o=MT(e,n,"icon"),i=a=>{if(e.disabled||e.loading){a.preventDefault();return}t("click",a)};return{cls:N(()=>[r,`${r}-status-${e.status}`,{[`${r}-disabled`]:e.disabled,[`${r}-loading`]:e.loading,[`${r}-hoverless`]:!e.hoverable,[`${r}-with-icon`]:e.loading||o.value}]),prefixCls:r,showIcon:o,handleClick:i}}}),KT=["href"];function UT(e,n,t,r,o,i){const s=ye("icon-loading"),a=ye("icon-link");return q(),se("a",{href:e.disabled?void 0:e.href,class:X(e.cls),onClick:n[0]||(n[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[e.loading||e.showIcon?(q(),se("span",{key:0,class:X(`${e.prefixCls}-icon`)},[e.loading?(q(),$e(s,{key:0})):ve(e.$slots,"icon",{key:1},()=>[G(a)])],2)):ln("v-if",!0),ve(e.$slots,"default")],10,KT)}var Ms=Se(jT,[["render",UT]]);const WT=Object.assign(Ms,{install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+Ms.name,Ms)}});var zT=Object.defineProperty,ed=Object.getOwnPropertySymbols,GT=Object.prototype.hasOwnProperty,qT=Object.prototype.propertyIsEnumerable,nd=(e,n,t)=>n in e?zT(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,td=(e,n)=>{for(var t in n||(n={}))GT.call(n,t)&&nd(e,t,n[t]);if(ed)for(var t of ed(n))qT.call(n,t)&&nd(e,t,n[t]);return e};const VT=re({name:"Tooltip",components:{Trigger:al},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},content:String,position:{type:String,default:"top"},mini:{type:Boolean,default:!1},backgroundColor:{type:String},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:n}){const t=he("tooltip"),r=le(e.defaultPopupVisible),o=N(()=>{var c;return(c=e.popupVisible)!=null?c:r.value}),i=c=>{r.value=c,n("update:popupVisible",c),n("popupVisibleChange",c)},s=N(()=>[`${t}-content`,e.contentClass,{[`${t}-mini`]:e.mini}]),a=N(()=>{if(e.backgroundColor||e.contentStyle)return td({backgroundColor:e.backgroundColor},e.contentStyle)}),l=N(()=>[`${t}-popup-arrow`,e.arrowClass]),d=N(()=>{if(e.backgroundColor||e.arrowStyle)return td({backgroundColor:e.backgroundColor},e.arrowStyle)});return{prefixCls:t,computedPopupVisible:o,contentCls:s,computedContentStyle:a,arrowCls:l,computedArrowStyle:d,handlePopupVisibleChange:i}}});function JT(e,n,t,r,o,i){const s=ye("Trigger");return q(),$e(s,{class:X(e.prefixCls),trigger:"hover",position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"show-arrow":"","content-class":e.contentCls,"content-style":e.computedContentStyle,"arrow-class":e.arrowCls,"arrow-style":e.computedArrowStyle,"popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",role:"tooltip",onPopupVisibleChange:e.handlePopupVisibleChange},{content:ee(()=>[ve(e.$slots,"content",{},()=>[Ln(bt(e.content),1)])]),default:ee(()=>[ve(e.$slots,"default")]),_:3},8,["class","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var Fs=Se(VT,[["render",JT]]);const ZT=Object.assign(Fs,{install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+Fs.name,Fs)}});var YT=re({name:"ResizeTrigger",components:{ResizeObserver:_E,IconDragDot:CS,IconDragDotVertical:ES},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:n}){const{direction:t,prefixCls:r}=Zn(e),o=N(()=>(t==null?void 0:t.value)==="horizontal");return{classNames:N(()=>[r.value,{[`${r.value}-horizontal`]:o.value,[`${r.value}-vertical`]:!o.value}]),onResize:a=>{n("resize",a)},isHorizontal:o}}});function XT(e,n,t,r,o,i){const s=ye("IconDragDot"),a=ye("IconDragDotVertical"),l=ye("ResizeObserver");return q(),$e(l,{onResize:e.onResize},{default:ee(()=>[ue("div",{class:X(e.classNames)},[ln(" @slot 自定义内容 "),ve(e.$slots,"default",{},()=>[ue("div",{class:X(`${e.prefixCls}-icon-wrapper`)},[ln(" @slot 自定义 icon "),ve(e.$slots,"icon",{},()=>[e.isHorizontal?(q(),$e(s,{key:0,class:X(`${e.prefixCls}-icon`)},null,8,["class"])):(q(),$e(a,{key:1,class:X(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var QT=Se(YT,[["render",XT]]);const e_=re({name:"Message",components:{AIconHover:xE,IconInfoCircleFill:ky,IconCheckCircleFill:ay,IconExclamationCircleFill:yy,IconCloseCircleFill:fy,IconClose:Iy,IconLoading:nl},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:n}){const t=he("message");let r=0;const o=()=>{n("close")},i=()=>{e.duration>0&&(r=window.setTimeout(o,e.duration))},s=()=>{r&&(window.clearTimeout(r),r=0)};return dn(()=>{i()}),_r(()=>{e.resetOnUpdate&&(s(),i())}),qt(()=>{s()}),{handleMouseEnter:()=>{e.resetOnHover&&s()},handleMouseLeave:()=>{e.resetOnHover&&i()},prefixCls:t,handleClose:o}}});function n_(e,n,t,r,o,i){const s=ye("icon-info-circle-fill"),a=ye("icon-check-circle-fill"),l=ye("icon-exclamation-circle-fill"),d=ye("icon-close-circle-fill"),c=ye("icon-loading"),p=ye("icon-close"),f=ye("a-icon-hover");return q(),se("li",{role:"alert",class:X([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:n[1]||(n[1]=(...m)=>e.handleMouseEnter&&e.handleMouseEnter(...m)),onMouseleave:n[2]||(n[2]=(...m)=>e.handleMouseLeave&&e.handleMouseLeave(...m))},[e.showIcon&&!(e.type==="normal"&&!e.$slots.icon)?(q(),se("span",{key:0,class:X(`${e.prefixCls}-icon`)},[ve(e.$slots,"icon",{},()=>[e.type==="info"?(q(),$e(s,{key:0})):e.type==="success"?(q(),$e(a,{key:1})):e.type==="warning"?(q(),$e(l,{key:2})):e.type==="error"?(q(),$e(d,{key:3})):e.type==="loading"?(q(),$e(c,{key:4})):ln("v-if",!0)])],2)):ln("v-if",!0),ue("span",{class:X(`${e.prefixCls}-content`)},[ve(e.$slots,"default")],2),e.closable?(q(),se("span",{key:1,class:X(`${e.prefixCls}-close-btn`),onClick:n[0]||(n[0]=(...m)=>e.handleClose&&e.handleClose(...m))},[G(f,null,{default:ee(()=>[G(p)]),_:1})],2)):ln("v-if",!0)],34)}var t_=Se(e_,[["render",n_]]);function r_(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!lo(e)}var o_=re({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,n){const t=he("message-list"),{zIndex:r}=Kp("message",{runOnMounted:!0});return()=>{let o;return G(up,{class:[t,`${t}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:r.value},onAfterLeave:()=>n.emit("afterClose")},r_(o=e.messages.map(i=>{const s={default:jc(i.content),icon:jc(i.icon)};return G(t_,{key:i.id,type:i.type,duration:i.duration,closable:i.closable,resetOnUpdate:i.resetOnUpdate,resetOnHover:i.resetOnHover,onClose:()=>n.emit("close",i.id)},s)}))?o:{default:()=>[o]})}}}),i_=Object.defineProperty,s_=Object.defineProperties,a_=Object.getOwnPropertyDescriptors,rd=Object.getOwnPropertySymbols,l_=Object.prototype.hasOwnProperty,c_=Object.prototype.propertyIsEnumerable,od=(e,n,t)=>n in e?i_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ai=(e,n)=>{for(var t in n||(n={}))l_.call(n,t)&&od(e,t,n[t]);if(rd)for(var t of rd(n))c_.call(n,t)&&od(e,t,n[t]);return e},Wp=(e,n)=>s_(e,a_(n));class d_{constructor(n,t){this.messageCount=0,this.add=i=>{var s;this.messageCount++;const a=(s=i.id)!=null?s:`__arco_message_${this.messageCount}`;if(this.messageIds.has(a))return this.update(a,i);const l=Pn(ai({id:a},i));return this.messages.value.push(l),this.messageIds.add(a),{close:()=>this.remove(a)}},this.update=(i,s)=>{for(let a=0;a<this.messages.value.length;a++)if(this.messages.value[a].id===i){const l=!zo(s.duration);Object.assign(this.messages.value[a],Wp(ai({},s),{id:i,resetOnUpdate:l}));break}return{close:()=>this.remove(i)}},this.remove=i=>{for(let s=0;s<this.messages.value.length;s++){const a=this.messages.value[s];if(a.id===i){wi(a.onClose)&&a.onClose(i),this.messages.value.splice(s,1),this.messageIds.delete(i);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{this.messages.value.length===0&&this.container&&(hc(null,this.container),document.body.removeChild(this.container),this.container=null,lr[this.position]=void 0)};const{position:r="top"}=n;this.container=OE("message"),this.messageIds=new Set,this.messages=le([]),this.position=r;const o=G(o_,{messages:this.messages.value,position:r,onClose:this.remove,onAfterClose:this.destroy});(t??rt._context)&&(o.appContext=t??rt._context),hc(o,this.container),document.body.appendChild(this.container)}}const lr={},zp=[...IE,"loading","normal"],Jo=zp.reduce((e,n)=>(e[n]=(t,r)=>{Eo(t)&&(t={content:t});const o=ai({type:n},t),{position:i="top"}=o;return lr[i]||(lr[i]=new d_(o,r)),lr[i].add(o)},e),{});Jo.clear=e=>{var n;e?(n=lr[e])==null||n.clear():Object.values(lr).forEach(t=>t==null?void 0:t.clear())};const rt=Wp(ai({},Jo),{install:e=>{const n={clear:Jo.clear};for(const t of zp)n[t]=(r,o=e._context)=>Jo[t](r,o);e.config.globalProperties.$message=n},_context:null});function Gp(e){const n=Eo(e)?parseFloat(e):e;let t="";return Ze(e)||String(n)===e?t=n>1?"px":"%":t="px",{size:n,unit:t,isPx:t==="px"}}function Bo({size:e,defaultSize:n,containerSize:t}){const r=Gp(e??n);return r.isPx?r.size:r.size*t}function u_(e,n){return parseFloat(e)/parseFloat(n)}const p_=re({name:"Split",components:{ResizeTrigger:QT},props:{component:{type:String,default:"div"},direction:{type:String,default:"horizontal"},size:{type:[Number,String],default:void 0},defaultSize:{type:[Number,String],default:.5},min:{type:[Number,String]},max:{type:[Number,String]},disabled:{type:Boolean,default:!1}},emits:{moveStart:e=>!0,moving:e=>!0,moveEnd:e=>!0,"update:size":e=>!0},setup(e,{emit:n}){const{direction:t,size:r,defaultSize:o,min:i,max:s}=Zn(e),a=le(0),l=le(),d=he("split"),[c,p]=$T(o.value,Pn({value:r})),f=N(()=>Gp(c.value)),m=N(()=>t.value==="horizontal"),h=N(()=>[d,{[`${d}-horizontal`]:m.value,[`${d}-vertical`]:!m.value}]),S=N(()=>{const{size:w,unit:$,isPx:Z}=f.value;return{flex:`0 0 calc(${Z?w:w*100}${$} - ${a.value/2}px)`}}),b={startPageX:0,startPageY:0,startContainerSize:0,startSize:0};async function y(){const w=()=>{var $,Z;return m.value?($=l.value)==null?void 0:$.clientWidth:((Z=l.value)==null?void 0:Z.clientHeight)||0};return(!l.value||w())&&await zt(),w()}function _(w,$){if(!$)return;const Z=f.value.isPx?`${w}px`:u_(w,$);c.value!==Z&&(p(Z),n("update:size",Z))}function k(w,$){const Z=Bo({size:w,containerSize:$}),j=Bo({size:i.value,defaultSize:"0px",containerSize:$}),de=Bo({size:s.value,defaultSize:`${$}px`,containerSize:$});let Q=Z;return Q=Math.max(Q,j),Q=Math.min(Q,de),Q}function A({startContainerSize:w,startSize:$,startPosition:Z,endPosition:j}){const de=Bo({size:$,containerSize:w});return k(`${de+(j-Z)}px`,w)}function R(w){n("moving",w);const $=m.value?A({startContainerSize:b.startContainerSize,startSize:b.startSize,startPosition:b.startPageX,endPosition:w.pageX}):A({startContainerSize:b.startContainerSize,startSize:b.startSize,startPosition:b.startPageY,endPosition:w.pageY});_($,b.startContainerSize)}function D(w){ar(window,"mousemove",R),ar(window,"mouseup",D),ar(window,"contextmenu",D),document.body.style.cursor="default",n("moveEnd",w)}async function F(w){n("moveStart",w),b.startPageX=w.pageX,b.startPageY=w.pageY,b.startContainerSize=await y(),b.startSize=c.value,_t(window,"mousemove",R),_t(window,"mouseup",D),_t(window,"contextmenu",D),document.body.style.cursor=m.value?"col-resize":"row-resize"}function x(w){const{width:$,height:Z}=w.contentRect;a.value=m.value?$:Z}return dn(async()=>{const w=await y(),$=k(c.value,w);_($,w)}),{prefixCls:d,classNames:h,isHorizontal:m,wrapperRef:l,onMoveStart:F,onTriggerResize:x,firstPaneStyles:S}}});function f_(e,n,t,r,o,i){const s=ye("ResizeTrigger");return q(),$e(nv(e.component),{ref:"wrapperRef",class:X(e.classNames)},{default:ee(()=>[ue("div",{class:X([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-first`]),style:Be(e.firstPaneStyles)},[ve(e.$slots,"first")],6),e.disabled?ln("v-if",!0):(q(),$e(s,{key:0,"prefix-cls":`${e.prefixCls}-trigger`,direction:e.isHorizontal?"vertical":"horizontal",onMousedown:e.onMoveStart,onResize:e.onTriggerResize},{default:ee(()=>[ve(e.$slots,"resize-trigger")]),icon:ee(()=>[ve(e.$slots,"resize-trigger-icon")]),_:3},8,["prefix-cls","direction","onMousedown","onResize"])),ue("div",{class:X([`${e.prefixCls}-pane`,`${e.prefixCls}-pane-second`])},[ve(e.$slots,"second")],2)]),_:3},8,["class"])}var $s=Se(p_,[["render",f_]]);const m_=Object.assign($s,{install:(e,n)=>{Lt(e,n);const t=Ct(n);e.component(t+$s.name,$s)}});function Nt(e,n){const t=JSON.stringify(n);if(Vn)return utools.dbStorage.setItem(e,t);localStorage.setItem(e,t)}function vt(e){if(Vn){const n=utools.dbStorage.getItem(e);return n?JSON.parse(n):null}else{const n=localStorage.getItem(e);return n?JSON.parse(n):null}}function Ho(e){(Vn?utools.dbStorage:localStorage).removeItem(e)}function id(e){if(Vn)return utools.db.allDocs(e);{const n=[];for(let t=0;t<localStorage.length;t++){if(e){const r=localStorage.key(t);r&&r.includes(e)&&n.push({_id:r,data:vt(r)});continue}n.push({_id:localStorage.key(t),data:vt(localStorage.key(t))})}return n}}function Zo(e){return e===null?"Null":e===void 0?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}function qp(e){const n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1,o=n.getDate(),i=n.getHours(),s=n.getMinutes(),a=n.getSeconds(),l=d=>{const c=d.toString();return c[1]?c:"0"+c};return`${t}年${l(r)}月${l(o)}日 ${l(i)}:${l(s)}:${l(a)}`}function g_(e){try{if(navigator.clipboard)navigator.clipboard.writeText(e);else{var n=document.createElement("textarea");document.body.appendChild(n),n.style.position="fixed",n.style.clip="rect(0 0 0 0)",n.style.top="10px",n.value=e,n.select(),document.execCommand("copy",!0),document.body.removeChild(n)}return!0}catch{return!1}}const Vn=window&&typeof(window==null?void 0:window.utools)<"u";function sd(e){return Vn?utools.shellOpenExternal(e):window.open(e)}const ie=globalThis,{Array:v_,Date:Mo,FinalizationRegistry:vr,Float32Array:h_,JSON:b_,Map:Wn,Math:y_,Number:Vp,Object:dl,Promise:S_,Proxy:Ni,Reflect:E_,RegExp:ht,Set:Pr,String:vn,WeakMap:Dn,WeakSet:kr}=globalThis,{Error:bn,RangeError:T_,ReferenceError:Ut,SyntaxError:_o,TypeError:V}=globalThis,{assign:Po,create:Xe,defineProperties:qe,entries:fn,freeze:U,getOwnPropertyDescriptor:Nn,getOwnPropertyDescriptors:Vt,getOwnPropertyNames:fo,getPrototypeOf:an,is:Di,isFrozen:Bx,isSealed:Hx,isExtensible:Mx,keys:__,prototype:Jp,seal:Fx,preventExtensions:P_,setPrototypeOf:Zp,values:Yp,fromEntries:Bi}=dl,{species:ad,toStringTag:ga,iterator:Hi,matchAll:Xp,unscopables:k_,keyFor:O_,for:$x}=Symbol,{isInteger:R_}=Vp,{stringify:Qp}=b_,{defineProperty:C_}=dl,Ue=(e,n,t)=>{const r=C_(e,n,t);if(r!==e)throw V(`Please report that the original defineProperty silently failed to set ${Qp(vn(n))}. (SES_DEFINE_PROPERTY_FAILED_SILENTLY)`);return r},{apply:it,construct:li,get:L_,getOwnPropertyDescriptor:x_,has:ef,isExtensible:I_,ownKeys:Or,preventExtensions:w_,set:nf}=E_,{isArray:Xr,prototype:Bn}=v_,{prototype:Rr}=Wn,{prototype:Mi}=RegExp,{prototype:ko}=Pr,{prototype:Yn}=vn,{prototype:Fi}=Dn,{prototype:ul}=kr,{prototype:pl}=Function,{prototype:tf}=S_,A_=an(Uint8Array.prototype),{bind:ld}=pl,ae=ld.bind(ld.call),mn=ae(Jp.hasOwnProperty),kt=ae(Bn.filter),Wt=ae(Bn.forEach),$i=ae(Bn.includes),Cr=ae(Bn.join),wn=ae(Bn.map),va=ae(Bn.pop),cn=ae(Bn.push),N_=ae(Bn.slice),D_=ae(Bn.some),B_=ae(Bn.sort),H_=ae(Bn[Hi]),zn=ae(Rr.set),st=ae(Rr.get),ji=ae(Rr.has),M_=ae(Rr.delete),F_=ae(Rr.entries),$_=ae(Rr[Hi]),Ki=ae(ko.add);ae(ko.delete);const cd=ae(ko.forEach),fl=ae(ko.has),j_=ae(ko[Hi]),rf=ae(Mi.test),ml=ae(Mi.exec),K_=ae(Mi[Xp]),of=ae(Yn.endsWith),U_=ae(Yn.includes),W_=ae(Yn.indexOf);ae(Yn.match);const ci=ae(Yn.replace),z_=ae(Yn.search),gl=ae(Yn.slice),sf=ae(Yn.split),af=ae(Yn.startsWith),G_=ae(Yn[Hi]),q_=ae(Fi.delete),Ne=ae(Fi.get),vl=ae(Fi.has),pn=ae(Fi.set),Ui=ae(ul.add);ae(ul.get);const Oo=ae(ul.has),V_=ae(pl.toString),J_=ae(tf.catch),hl=ae(tf.then),Z_=vr&&ae(vr.prototype.register);vr&&ae(vr.prototype.unregister);const bl=U(Xe(null)),Ot=e=>dl(e)===e,yl=e=>e instanceof bn,lf=eval,En=Function,Y_=()=>{throw new V('Cannot eval with evalTaming set to "noEval" (SES_NO_EVAL)')},X_=") { [native code] }";let js;const cf=()=>{if(js===void 0){const e=new kr;Ue(pl,"toString",{value:{toString(){const t=V_(this,[]);return of(t,X_)||!Oo(e,this)?t:`function ${this.name}() { [native code] }`}}.toString}),js=U(t=>Ui(e,t))}return js},df={Infinity:1/0,NaN:NaN,undefined:void 0},uf={isFinite:"isFinite",isNaN:"isNaN",parseFloat:"parseFloat",parseInt:"parseInt",decodeURI:"decodeURI",decodeURIComponent:"decodeURIComponent",encodeURI:"encodeURI",encodeURIComponent:"encodeURIComponent",Array:"Array",ArrayBuffer:"ArrayBuffer",BigInt:"BigInt",BigInt64Array:"BigInt64Array",BigUint64Array:"BigUint64Array",Boolean:"Boolean",DataView:"DataView",EvalError:"EvalError",Float32Array:"Float32Array",Float64Array:"Float64Array",Int8Array:"Int8Array",Int16Array:"Int16Array",Int32Array:"Int32Array",Map:"Map",Number:"Number",Object:"Object",Promise:"Promise",Proxy:"Proxy",RangeError:"RangeError",ReferenceError:"ReferenceError",Set:"Set",String:"String",Symbol:"Symbol",SyntaxError:"SyntaxError",TypeError:"TypeError",Uint8Array:"Uint8Array",Uint8ClampedArray:"Uint8ClampedArray",Uint16Array:"Uint16Array",Uint32Array:"Uint32Array",URIError:"URIError",WeakMap:"WeakMap",WeakSet:"WeakSet",JSON:"JSON",Reflect:"Reflect",escape:"escape",unescape:"unescape",lockdown:"lockdown",harden:"harden",HandledPromise:"HandledPromise"},Q_={Date:"%InitialDate%",Error:"%InitialError%",RegExp:"%InitialRegExp%",Math:"%InitialMath%",getStackString:"%InitialGetStackString%"},pf={Date:"%SharedDate%",Error:"%SharedError%",RegExp:"%SharedRegExp%",Math:"%SharedMath%"},eP=[EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError],ha={"[[Proto]]":"%FunctionPrototype%",length:"number",name:"string"},nP={"[[Proto]]":"%AsyncFunctionPrototype%"},u=ha,dd=nP,Pe={get:u,set:"undefined"},$n={get:u,set:u},ud=e=>e===Pe||e===$n;function er(e){return{"[[Proto]]":"%SharedError%",prototype:e}}function nr(e){return{"[[Proto]]":"%ErrorPrototype%",constructor:e,message:"string",name:"string",toString:!1,cause:!1}}function On(e){return{"[[Proto]]":"%TypedArray%",BYTES_PER_ELEMENT:"number",prototype:e}}function Rn(e){return{"[[Proto]]":"%TypedArrayPrototype%",BYTES_PER_ELEMENT:"number",constructor:e}}const pd={E:"number",LN10:"number",LN2:"number",LOG10E:"number",LOG2E:"number",PI:"number",SQRT1_2:"number",SQRT2:"number","@@toStringTag":"string",abs:u,acos:u,acosh:u,asin:u,asinh:u,atan:u,atanh:u,atan2:u,cbrt:u,ceil:u,clz32:u,cos:u,cosh:u,exp:u,expm1:u,floor:u,fround:u,hypot:u,imul:u,log:u,log1p:u,log10:u,log2:u,max:u,min:u,pow:u,round:u,sign:u,sin:u,sinh:u,sqrt:u,tan:u,tanh:u,trunc:u,idiv:!1,idivmod:!1,imod:!1,imuldiv:!1,irem:!1,mod:!1},di={"[[Proto]]":null,"%ThrowTypeError%":u,Infinity:"number",NaN:"number",undefined:"undefined","%UniqueEval%":u,isFinite:u,isNaN:u,parseFloat:u,parseInt:u,decodeURI:u,decodeURIComponent:u,encodeURI:u,encodeURIComponent:u,Object:{"[[Proto]]":"%FunctionPrototype%",assign:u,create:u,defineProperties:u,defineProperty:u,entries:u,freeze:u,fromEntries:u,getOwnPropertyDescriptor:u,getOwnPropertyDescriptors:u,getOwnPropertyNames:u,getOwnPropertySymbols:u,getPrototypeOf:u,hasOwn:u,is:u,isExtensible:u,isFrozen:u,isSealed:u,keys:u,preventExtensions:u,prototype:"%ObjectPrototype%",seal:u,setPrototypeOf:u,values:u},"%ObjectPrototype%":{"[[Proto]]":null,constructor:"Object",hasOwnProperty:u,isPrototypeOf:u,propertyIsEnumerable:u,toLocaleString:u,toString:u,valueOf:u,"--proto--":$n,__defineGetter__:u,__defineSetter__:u,__lookupGetter__:u,__lookupSetter__:u},"%UniqueFunction%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%FunctionPrototype%"},"%InertFunction%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%FunctionPrototype%"},"%FunctionPrototype%":{apply:u,bind:u,call:u,constructor:"%InertFunction%",toString:u,"@@hasInstance":u,caller:!1,arguments:!1},Boolean:{"[[Proto]]":"%FunctionPrototype%",prototype:"%BooleanPrototype%"},"%BooleanPrototype%":{constructor:"Boolean",toString:u,valueOf:u},Symbol:{"[[Proto]]":"%FunctionPrototype%",asyncIterator:"symbol",for:u,hasInstance:"symbol",isConcatSpreadable:"symbol",iterator:"symbol",keyFor:u,match:"symbol",matchAll:"symbol",prototype:"%SymbolPrototype%",replace:"symbol",search:"symbol",species:"symbol",split:"symbol",toPrimitive:"symbol",toStringTag:"symbol",unscopables:"symbol"},"%SymbolPrototype%":{constructor:"Symbol",description:Pe,toString:u,valueOf:u,"@@toPrimitive":u,"@@toStringTag":"string"},"%InitialError%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%ErrorPrototype%",captureStackTrace:u,stackTraceLimit:$n,prepareStackTrace:$n},"%SharedError%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%ErrorPrototype%",captureStackTrace:u,stackTraceLimit:$n,prepareStackTrace:$n},"%ErrorPrototype%":{constructor:"%SharedError%",message:"string",name:"string",toString:u,at:!1,stack:$n,cause:!1},EvalError:er("%EvalErrorPrototype%"),RangeError:er("%RangeErrorPrototype%"),ReferenceError:er("%ReferenceErrorPrototype%"),SyntaxError:er("%SyntaxErrorPrototype%"),TypeError:er("%TypeErrorPrototype%"),URIError:er("%URIErrorPrototype%"),"%EvalErrorPrototype%":nr("EvalError"),"%RangeErrorPrototype%":nr("RangeError"),"%ReferenceErrorPrototype%":nr("ReferenceError"),"%SyntaxErrorPrototype%":nr("SyntaxError"),"%TypeErrorPrototype%":nr("TypeError"),"%URIErrorPrototype%":nr("URIError"),Number:{"[[Proto]]":"%FunctionPrototype%",EPSILON:"number",isFinite:u,isInteger:u,isNaN:u,isSafeInteger:u,MAX_SAFE_INTEGER:"number",MAX_VALUE:"number",MIN_SAFE_INTEGER:"number",MIN_VALUE:"number",NaN:"number",NEGATIVE_INFINITY:"number",parseFloat:u,parseInt:u,POSITIVE_INFINITY:"number",prototype:"%NumberPrototype%"},"%NumberPrototype%":{constructor:"Number",toExponential:u,toFixed:u,toLocaleString:u,toPrecision:u,toString:u,valueOf:u},BigInt:{"[[Proto]]":"%FunctionPrototype%",asIntN:u,asUintN:u,prototype:"%BigIntPrototype%",bitLength:!1,fromArrayBuffer:!1},"%BigIntPrototype%":{constructor:"BigInt",toLocaleString:u,toString:u,valueOf:u,"@@toStringTag":"string"},"%InitialMath%":{...pd,random:u},"%SharedMath%":pd,"%InitialDate%":{"[[Proto]]":"%FunctionPrototype%",now:u,parse:u,prototype:"%DatePrototype%",UTC:u},"%SharedDate%":{"[[Proto]]":"%FunctionPrototype%",now:u,parse:u,prototype:"%DatePrototype%",UTC:u},"%DatePrototype%":{constructor:"%SharedDate%",getDate:u,getDay:u,getFullYear:u,getHours:u,getMilliseconds:u,getMinutes:u,getMonth:u,getSeconds:u,getTime:u,getTimezoneOffset:u,getUTCDate:u,getUTCDay:u,getUTCFullYear:u,getUTCHours:u,getUTCMilliseconds:u,getUTCMinutes:u,getUTCMonth:u,getUTCSeconds:u,setDate:u,setFullYear:u,setHours:u,setMilliseconds:u,setMinutes:u,setMonth:u,setSeconds:u,setTime:u,setUTCDate:u,setUTCFullYear:u,setUTCHours:u,setUTCMilliseconds:u,setUTCMinutes:u,setUTCMonth:u,setUTCSeconds:u,toDateString:u,toISOString:u,toJSON:u,toLocaleDateString:u,toLocaleString:u,toLocaleTimeString:u,toString:u,toTimeString:u,toUTCString:u,valueOf:u,"@@toPrimitive":u,getYear:u,setYear:u,toGMTString:u},String:{"[[Proto]]":"%FunctionPrototype%",fromCharCode:u,fromCodePoint:u,prototype:"%StringPrototype%",raw:u,fromArrayBuffer:!1},"%StringPrototype%":{length:"number",at:u,charAt:u,charCodeAt:u,codePointAt:u,concat:u,constructor:"String",endsWith:u,includes:u,indexOf:u,lastIndexOf:u,localeCompare:u,match:u,matchAll:u,normalize:u,padEnd:u,padStart:u,repeat:u,replace:u,replaceAll:u,search:u,slice:u,split:u,startsWith:u,substring:u,toLocaleLowerCase:u,toLocaleUpperCase:u,toLowerCase:u,toString:u,toUpperCase:u,trim:u,trimEnd:u,trimStart:u,valueOf:u,"@@iterator":u,substr:u,anchor:u,big:u,blink:u,bold:u,fixed:u,fontcolor:u,fontsize:u,italics:u,link:u,small:u,strike:u,sub:u,sup:u,trimLeft:u,trimRight:u,compare:!1},"%StringIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:u,"@@toStringTag":"string"},"%InitialRegExp%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%RegExpPrototype%","@@species":Pe,input:!1,$_:!1,lastMatch:!1,"$&":!1,lastParen:!1,"$+":!1,leftContext:!1,"$`":!1,rightContext:!1,"$'":!1,$1:!1,$2:!1,$3:!1,$4:!1,$5:!1,$6:!1,$7:!1,$8:!1,$9:!1},"%SharedRegExp%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%RegExpPrototype%","@@species":Pe},"%RegExpPrototype%":{constructor:"%SharedRegExp%",exec:u,dotAll:Pe,flags:Pe,global:Pe,ignoreCase:Pe,"@@match":u,"@@matchAll":u,multiline:Pe,"@@replace":u,"@@search":u,source:Pe,"@@split":u,sticky:Pe,test:u,toString:u,unicode:Pe,compile:!1,hasIndices:!1},"%RegExpStringIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:u,"@@toStringTag":"string"},Array:{"[[Proto]]":"%FunctionPrototype%",from:u,isArray:u,of:u,prototype:"%ArrayPrototype%","@@species":Pe,at:u},"%ArrayPrototype%":{at:u,length:"number",concat:u,constructor:"Array",copyWithin:u,entries:u,every:u,fill:u,filter:u,find:u,findIndex:u,flat:u,flatMap:u,forEach:u,includes:u,indexOf:u,join:u,keys:u,lastIndexOf:u,map:u,pop:u,push:u,reduce:u,reduceRight:u,reverse:u,shift:u,slice:u,some:u,sort:u,splice:u,toLocaleString:u,toString:u,unshift:u,values:u,"@@iterator":u,"@@unscopables":{"[[Proto]]":null,copyWithin:"boolean",entries:"boolean",fill:"boolean",find:"boolean",findIndex:"boolean",flat:"boolean",flatMap:"boolean",includes:"boolean",keys:"boolean",values:"boolean",at:!1,findLast:"boolean",findLastIndex:"boolean"},findLast:u,findLastIndex:u},"%ArrayIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:u,"@@toStringTag":"string"},"%TypedArray%":{"[[Proto]]":"%FunctionPrototype%",from:u,of:u,prototype:"%TypedArrayPrototype%","@@species":Pe},"%TypedArrayPrototype%":{at:u,buffer:Pe,byteLength:Pe,byteOffset:Pe,constructor:"%TypedArray%",copyWithin:u,entries:u,every:u,fill:u,filter:u,find:u,findIndex:u,forEach:u,includes:u,indexOf:u,join:u,keys:u,lastIndexOf:u,length:Pe,map:u,reduce:u,reduceRight:u,reverse:u,set:u,slice:u,some:u,sort:u,subarray:u,toLocaleString:u,toString:u,values:u,"@@iterator":u,"@@toStringTag":Pe,findLast:u,findLastIndex:u},BigInt64Array:On("%BigInt64ArrayPrototype%"),BigUint64Array:On("%BigUint64ArrayPrototype%"),Float32Array:On("%Float32ArrayPrototype%"),Float64Array:On("%Float64ArrayPrototype%"),Int16Array:On("%Int16ArrayPrototype%"),Int32Array:On("%Int32ArrayPrototype%"),Int8Array:On("%Int8ArrayPrototype%"),Uint16Array:On("%Uint16ArrayPrototype%"),Uint32Array:On("%Uint32ArrayPrototype%"),Uint8Array:On("%Uint8ArrayPrototype%"),Uint8ClampedArray:On("%Uint8ClampedArrayPrototype%"),"%BigInt64ArrayPrototype%":Rn("BigInt64Array"),"%BigUint64ArrayPrototype%":Rn("BigUint64Array"),"%Float32ArrayPrototype%":Rn("Float32Array"),"%Float64ArrayPrototype%":Rn("Float64Array"),"%Int16ArrayPrototype%":Rn("Int16Array"),"%Int32ArrayPrototype%":Rn("Int32Array"),"%Int8ArrayPrototype%":Rn("Int8Array"),"%Uint16ArrayPrototype%":Rn("Uint16Array"),"%Uint32ArrayPrototype%":Rn("Uint32Array"),"%Uint8ArrayPrototype%":Rn("Uint8Array"),"%Uint8ClampedArrayPrototype%":Rn("Uint8ClampedArray"),Map:{"[[Proto]]":"%FunctionPrototype%","@@species":Pe,prototype:"%MapPrototype%"},"%MapPrototype%":{clear:u,constructor:"Map",delete:u,entries:u,forEach:u,get:u,has:u,keys:u,set:u,size:Pe,values:u,"@@iterator":u,"@@toStringTag":"string"},"%MapIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:u,"@@toStringTag":"string"},Set:{"[[Proto]]":"%FunctionPrototype%",prototype:"%SetPrototype%","@@species":Pe},"%SetPrototype%":{add:u,clear:u,constructor:"Set",delete:u,entries:u,forEach:u,has:u,keys:u,size:Pe,values:u,"@@iterator":u,"@@toStringTag":"string"},"%SetIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:u,"@@toStringTag":"string"},WeakMap:{"[[Proto]]":"%FunctionPrototype%",prototype:"%WeakMapPrototype%"},"%WeakMapPrototype%":{constructor:"WeakMap",delete:u,get:u,has:u,set:u,"@@toStringTag":"string"},WeakSet:{"[[Proto]]":"%FunctionPrototype%",prototype:"%WeakSetPrototype%"},"%WeakSetPrototype%":{add:u,constructor:"WeakSet",delete:u,has:u,"@@toStringTag":"string"},ArrayBuffer:{"[[Proto]]":"%FunctionPrototype%",isView:u,prototype:"%ArrayBufferPrototype%","@@species":Pe,fromString:!1,fromBigInt:!1},"%ArrayBufferPrototype%":{byteLength:Pe,constructor:"ArrayBuffer",slice:u,"@@toStringTag":"string",concat:!1,transfer:u,resize:u,resizable:Pe,maxByteLength:Pe},SharedArrayBuffer:!1,"%SharedArrayBufferPrototype%":!1,DataView:{"[[Proto]]":"%FunctionPrototype%",BYTES_PER_ELEMENT:"number",prototype:"%DataViewPrototype%"},"%DataViewPrototype%":{buffer:Pe,byteLength:Pe,byteOffset:Pe,constructor:"DataView",getBigInt64:u,getBigUint64:u,getFloat32:u,getFloat64:u,getInt8:u,getInt16:u,getInt32:u,getUint8:u,getUint16:u,getUint32:u,setBigInt64:u,setBigUint64:u,setFloat32:u,setFloat64:u,setInt8:u,setInt16:u,setInt32:u,setUint8:u,setUint16:u,setUint32:u,"@@toStringTag":"string"},Atomics:!1,JSON:{parse:u,stringify:u,"@@toStringTag":"string"},"%IteratorPrototype%":{"@@iterator":u},"%AsyncIteratorPrototype%":{"@@asyncIterator":u},"%InertGeneratorFunction%":{"[[Proto]]":"%InertFunction%",prototype:"%Generator%"},"%Generator%":{"[[Proto]]":"%FunctionPrototype%",constructor:"%InertGeneratorFunction%",prototype:"%GeneratorPrototype%","@@toStringTag":"string"},"%InertAsyncGeneratorFunction%":{"[[Proto]]":"%InertFunction%",prototype:"%AsyncGenerator%"},"%AsyncGenerator%":{"[[Proto]]":"%FunctionPrototype%",constructor:"%InertAsyncGeneratorFunction%",prototype:"%AsyncGeneratorPrototype%",length:"number","@@toStringTag":"string"},"%GeneratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",constructor:"%Generator%",next:u,return:u,throw:u,"@@toStringTag":"string"},"%AsyncGeneratorPrototype%":{"[[Proto]]":"%AsyncIteratorPrototype%",constructor:"%AsyncGenerator%",next:u,return:u,throw:u,"@@toStringTag":"string"},HandledPromise:{"[[Proto]]":"Promise",applyFunction:u,applyFunctionSendOnly:u,applyMethod:u,applyMethodSendOnly:u,get:u,getSendOnly:u,prototype:"%PromisePrototype%",resolve:u},Promise:{"[[Proto]]":"%FunctionPrototype%",all:u,allSettled:u,any:!1,prototype:"%PromisePrototype%",race:u,reject:u,resolve:u,"@@species":Pe},"%PromisePrototype%":{catch:u,constructor:"Promise",finally:u,then:u,"@@toStringTag":"string","UniqueSymbol(async_id_symbol)":$n,"UniqueSymbol(trigger_async_id_symbol)":$n,"UniqueSymbol(destroyed)":$n},"%InertAsyncFunction%":{"[[Proto]]":"%InertFunction%",prototype:"%AsyncFunctionPrototype%"},"%AsyncFunctionPrototype%":{"[[Proto]]":"%FunctionPrototype%",constructor:"%InertAsyncFunction%",length:"number","@@toStringTag":"string"},Reflect:{apply:u,construct:u,defineProperty:u,deleteProperty:u,get:u,getOwnPropertyDescriptor:u,getPrototypeOf:u,has:u,isExtensible:u,ownKeys:u,preventExtensions:u,set:u,setPrototypeOf:u,"@@toStringTag":"string"},Proxy:{"[[Proto]]":"%FunctionPrototype%",revocable:u},escape:u,unescape:u,"%UniqueCompartment%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%CompartmentPrototype%",toString:u},"%InertCompartment%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%CompartmentPrototype%",toString:u},"%CompartmentPrototype%":{constructor:"%InertCompartment%",evaluate:u,globalThis:Pe,name:Pe,toString:u,import:dd,load:dd,importNow:u,module:u},lockdown:u,harden:{...u,isFake:"boolean"},"%InitialGetStackString%":u},tP=e=>typeof e=="function";function rP(e,n,t){if(mn(e,n)){const r=Nn(e,n);if(!Di(r.value,t.value)||r.get!==t.get||r.set!==t.set||r.writable!==t.writable||r.enumerable!==t.enumerable||r.configurable!==t.configurable)throw new V(`Conflicting definitions of ${n}`)}Ue(e,n,t)}function oP(e,n){for(const[t,r]of fn(n))rP(e,t,r)}function ff(e,n){const t={__proto__:null};for(const[r,o]of fn(n))mn(e,r)&&(t[o]=e[r]);return t}const mf=()=>{const e={__proto__:null};let n;const t=a=>{oP(e,Vt(a))};U(t);const r=()=>{for(const[a,l]of fn(e)){if(!Ot(l)||!mn(l,"prototype"))continue;const d=di[a];if(typeof d!="object")throw new V(`Expected permit object at whitelist.${a}`);const c=d.prototype;if(!c)throw new V(`${a}.prototype property not whitelisted`);if(typeof c!="string"||!mn(di,c))throw new V(`Unrecognized ${a}.prototype whitelist entry`);const p=l.prototype;if(mn(e,c)){if(e[c]!==p)throw new V(`Conflicting bindings of ${c}`);continue}e[c]=p}};U(r);const o=()=>(U(e),n=new kr(kt(Yp(e),tP)),e);U(o);const i=a=>{if(!n)throw new V("isPseudoNative can only be called after finalIntrinsics");return Oo(n,a)};U(i);const s={addIntrinsics:t,completePrototypes:r,finalIntrinsics:o,isPseudoNative:i};return U(s),t(df),t(ff(ie,uf)),s},iP=e=>{const{addIntrinsics:n,finalIntrinsics:t}=mf();return n(ff(e,pf)),t()};const ui=e=>(e=`${e}`,e.length>=1&&U_("aeiouAEIOU",e[0])?`an ${e}`:`a ${e}`);U(ui);const gf=(e,n=void 0)=>{const t=new Pr,r=(o,i)=>{switch(typeof i){case"object":return i===null?null:fl(t,i)?"[Seen]":(Ki(t,i),yl(i)?`[${i.name}: ${i.message}]`:ga in i?`[${i[ga]}]`:i);case"function":return`[Function ${i.name||"<anon>"}]`;case"string":return af(i,"[")?`[${i}]`:i;case"undefined":case"symbol":return`[${vn(i)}]`;case"bigint":return`[${i}n]`;case"number":return Di(i,NaN)?"[NaN]":i===1/0?"[Infinity]":i===-1/0?"[-Infinity]":i;default:return i}};try{return Qp(e,r,n)}catch{return"[Something that failed to stringify]"}};U(gf);const{freeze:Un}=Object,{isSafeInteger:vf}=Number,fd=e=>{const t={next:void 0,prev:void 0,data:e};return t.next=t,t.prev=t,t},md=(e,n)=>{if(e===n)throw TypeError("Cannot splice a cell into itself");if(n.next!==n||n.prev!==n)throw TypeError("Expected self-linked cell");const t=n,r=e.next;return t.prev=e,t.next=r,e.next=t,r.prev=t,t},Ks=e=>{const{prev:n,next:t}=e;n.next=t,t.prev=n,e.prev=e,e.next=e},hf=e=>{if(!vf(e)||e<0)throw new TypeError("keysBudget must be a safe non-negative integer number");const n=new WeakMap;let t=0;const r=fd(void 0),o=c=>{const p=n.get(c);if(!(p===void 0||p.data===void 0))return Ks(p),md(r,p),p},i=c=>o(c)!==void 0;Un(i);const s=c=>{const p=o(c);return p&&p.data&&p.data.get(c)};Un(s);const a=(c,p)=>{if(e<1)return d;let f=o(c);if(f===void 0&&(f=fd(void 0),md(r,f)),!f.data)for(t+=1,f.data=new WeakMap,n.set(c,f);t>e;){const m=r.prev;Ks(m),m.data=void 0,t-=1}return f.data.set(c,p),d};Un(a);const l=c=>{const p=n.get(c);return p===void 0||(Ks(p),n.delete(c),p.data===void 0)?!1:(p.data=void 0,t-=1,!0)};Un(l);const d=Un({has:i,get:s,set:a,delete:l,[Symbol.toStringTag]:"LRUCacheMap"});return d};Un(hf);const sP=1e3,aP=100,bf=(e=sP,n=aP)=>{if(!vf(n)||n<1)throw new TypeError("argsPerErrorBudget must be a safe positive integer number");const t=hf(e),r=(i,s)=>{const a=t.get(i);a!==void 0?(a.length>=n&&a.shift(),a.push(s)):t.set(i,[s])};Un(r);const o=i=>{const s=t.get(i);return t.delete(i),s};return Un(o),Un({addLogArgs:r,takeLogArgsArray:o})};Un(bf);const mo=new Dn,hr=(e,n=void 0)=>{const t=U({toString:U(()=>gf(e,n))});return pn(mo,t,e),t};U(hr);const Wi=new Dn,yf=({template:e,args:n})=>{const t=[e[0]];for(let r=0;r<n.length;r+=1){const o=n[r];let i;vl(mo,o)?i=`${o}`:yl(o)?i=`(${ui(o.name)})`:i=`(${ui(typeof o)})`,cn(t,i,e[r+1])}return Cr(t,"")},Sf=U({toString(){const e=Ne(Wi,this);return e===void 0?"[Not a DetailsToken]":yf(e)}});U(Sf.toString);const br=(e,...n)=>{const t=U({__proto__:Sf});return pn(Wi,t,{template:e,args:n}),t};U(br);const Ef=(e,...n)=>(n=wn(n,t=>vl(mo,t)?t:hr(t)),br(e,...n));U(Ef);const Tf=({template:e,args:n})=>{const t=[e[0]];for(let r=0;r<n.length;r+=1){let o=n[r];vl(mo,o)&&(o=Ne(mo,o));const i=ci(va(t)||"",/ $/,"");i!==""&&cn(t,i);const s=ci(e[r+1],/^ /,"");cn(t,o,s)}return t[t.length-1]===""&&va(t),t},Yo=new Dn;let ba=0;const gd=new Dn,_f=(e,n=e.name)=>{let t=Ne(gd,e);return t!==void 0||(ba+=1,t=`${n}#${ba}`,pn(gd,e,t)),t},ya=(e=br`Assert failed`,n=ie.Error,{errorName:t=void 0}={})=>{typeof e=="string"&&(e=br([e]));const r=Ne(Wi,e);if(r===void 0)throw new V(`unrecognized details ${hr(e)}`);const o=yf(r),i=new n(o);return pn(Yo,i,Tf(r)),t!==void 0&&_f(i,t),i};U(ya);const{addLogArgs:lP,takeLogArgsArray:cP}=bf(),Sa=new Dn,Pf=(e,n)=>{typeof n=="string"&&(n=br([n]));const t=Ne(Wi,n);if(t===void 0)throw new V(`unrecognized details ${hr(n)}`);const r=Tf(t),o=Ne(Sa,e);if(o!==void 0)for(const i of o)i(e,r);else lP(e,r)};U(Pf);const dP=e=>{if(!("stack"in e))return"";const n=`${e.stack}`,t=W_(n,`
`);return af(n," ")||t===-1?n:gl(n,t+1)},Ea={getStackString:ie.getStackString||dP,tagError:e=>_f(e),resetErrorTagNum:()=>{ba=0},getMessageLogArgs:e=>Ne(Yo,e),takeMessageLogArgs:e=>{const n=Ne(Yo,e);return q_(Yo,e),n},takeNoteLogArgsArray:(e,n)=>{const t=cP(e);if(n!==void 0){const r=Ne(Sa,e);r?cn(r,n):pn(Sa,e,[n])}return t||[]}};U(Ea);const zi=(e=void 0,n=!1)=>{const t=n?Ef:br,r=t`Check failed`,o=(p=r,f=ie.Error)=>{const m=ya(p,f);throw e!==void 0&&e(m),m};U(o);const i=(p,...f)=>o(t(p,...f));function s(p,f=void 0,m=void 0){p||o(f,m)}const a=(p,f,m=void 0,h=void 0)=>{Di(p,f)||o(m||t`Expected ${p} is same as ${f}`,h||T_)};U(a);const l=(p,f,m)=>{typeof p!==f&&(typeof f=="string"||i`${hr(f)} must be a string`,m===void 0&&(m=t(["",` must be ${ui(f)}`],p)),o(m,V))};U(l);const c=Po(s,{error:ya,fail:o,equal:a,typeof:l,string:(p,f=void 0)=>l(p,"string",f),note:Pf,details:t,Fail:i,quote:hr,makeAssert:zi});return U(c)};U(zi);const Je=zi(),kf=Nn(A_,ga);Je(kf);const Of=kf.get;Je(Of);const uP=e=>it(Of,e,[])!==void 0,pP=e=>{const n=+vn(e);return R_(n)&&vn(n)===e},fP=e=>{P_(e),Wt(Or(e),n=>{const t=Nn(e,n);Je(t),pP(n)||Ue(e,n,{...t,writable:!1,configurable:!1})})},mP=()=>{const e=new kr,{harden:n}={harden(t){const r=new Pr,o=new Dn;function i(c,p=void 0){if(!Ot(c))return;const f=typeof c;if(f!=="object"&&f!=="function")throw new V(`Unexpected typeof: ${f}`);Oo(e,c)||fl(r,c)||(Ki(r,c),pn(o,c,p))}function s(c){uP(c)?fP(c):U(c);const p=Ne(o,c)||"unknown",f=Vt(c),m=an(c);i(m,`${p}.__proto__`),Wt(Or(f),h=>{const S=`${p}.${vn(h)}`,b=f[h];mn(b,"value")?i(b.value,`${S}`):(i(b.get,`${S}(get)`),i(b.set,`${S}(set)`))})}function a(){cd(r,s)}function l(c){Ui(e,c)}function d(){cd(r,l)}return i(t),a(),d(),t}};return n};function gP(e,n){const t=["undefined","boolean","number","string","symbol"],r=new Wn(e.Symbol?wn(kt(fn(di.Symbol),([c,p])=>p==="symbol"&&typeof e.Symbol[c]=="symbol"),([c])=>[e.Symbol[c],`@@${c}`]):[]);function o(c,p){if(typeof p=="string")return p;const f=st(r,p);if(typeof p=="symbol"){if(f)return f;{const m=O_(p);return m!==void 0?`RegisteredSymbol(${m})`:`Unique${vn(p)}`}}throw new V(`Unexpected property name type ${c} ${p}`)}function i(c,p,f){if(!Ot(p))throw new V(`Object expected: ${c}, ${p}, ${f}`);const m=an(p);if(!(m===null&&f===null)){if(f!==void 0&&typeof f!="string")throw new V(`Malformed whitelist permit ${c}.__proto__`);if(m!==e[f||"%ObjectPrototype%"])throw new V(`Unexpected intrinsic ${c}.__proto__ at ${f}`)}}function s(c,p,f,m){if(typeof m=="object")return d(c,p,m),!0;if(m===!1)return!1;if(typeof m=="string"){if(f==="prototype"||f==="constructor"){if(mn(e,m)){if(p!==e[m])throw new V(`Does not match whitelist ${c}`);return!0}}else if($i(t,m)){if(typeof p!==m)throw new V(`At ${c} expected ${m} not ${typeof p}`);return!0}}throw new V(`Unexpected whitelist permit ${m} at ${c}`)}function a(c,p,f,m){const h=Nn(p,f);if(mn(h,"value")){if(ud(m))throw new V(`Accessor expected at ${c}`);return s(c,h.value,f,m)}if(!ud(m))throw new V(`Accessor not expected at ${c}`);return s(`${c}<get>`,h.get,f,m.get)&&s(`${c}<set>`,h.set,f,m.set)}function l(c,p,f){const m=f==="__proto__"?"--proto--":f;if(mn(p,m))return p[m];if(typeof c=="function"&&(n(c),mn(ha,m)))return ha[m]}function d(c,p,f){if(p===void 0)return;const m=f["[[Proto]]"];i(c,p,m);for(const h of Or(p)){const S=o(c,h),b=`${c}.${S}`,y=l(p,f,S);if(!y||!a(b,p,h,y))try{delete p[h]}catch(_){if(h in p&&typeof p=="function"&&h==="prototype"&&(p.prototype=void 0,p.prototype===void 0))continue;throw _}}}d("intrinsics",e,di)}function vP(){try{En.prototype.constructor("return 1")}catch{return U({})}const e={};function n(t,r,o){let i;try{i=(0,eval)(o)}catch(l){if(l instanceof _o)return;throw l}const s=an(i),a=function(){throw new V("Function.prototype.constructor is not a valid constructor.")};qe(a,{prototype:{value:s},name:{value:t,writable:!1,enumerable:!1,configurable:!0}}),qe(s,{constructor:{value:a}}),a!==En.prototype.constructor&&Zp(a,En.prototype.constructor),e[r]=a}return n("Function","%InertFunction%","(function(){})"),n("GeneratorFunction","%InertGeneratorFunction%","(function*(){})"),n("AsyncFunction","%InertAsyncFunction%","(async function(){})"),n("AsyncGeneratorFunction","%InertAsyncGeneratorFunction%","(async function*(){})"),e}function hP(e="safe"){if(e!=="safe"&&e!=="unsafe")throw new V(`unrecognized dateTaming ${e}`);const n=Mo,t=n.prototype,r={now(){return NaN}},o=({powers:a="none"}={})=>{let l;return a==="original"?l=function(...c){return new.target===void 0?it(n,void 0,c):li(n,c,new.target)}:l=function(...c){return new.target===void 0?"Invalid Date":(c.length===0&&(c=[NaN]),li(n,c,new.target))},qe(l,{length:{value:7},prototype:{value:t,writable:!1,enumerable:!1,configurable:!1},parse:{value:Mo.parse,writable:!0,enumerable:!1,configurable:!0},UTC:{value:Mo.UTC,writable:!0,enumerable:!1,configurable:!0}}),l},i=o({powers:"original"}),s=o({powers:"none"});return qe(i,{now:{value:Mo.now,writable:!0,enumerable:!1,configurable:!0}}),qe(s,{now:{value:r.now,writable:!0,enumerable:!1,configurable:!0}}),qe(t,{constructor:{value:s}}),{"%InitialDate%":i,"%SharedDate%":s}}function bP(e="safe"){if(e!=="safe"&&e!=="unsafe")throw new V(`unrecognized mathTaming ${e}`);const n=y_,t=n,{random:r,...o}=Vt(n),i=Xe(Jp,o);return{"%InitialMath%":t,"%SharedMath%":i}}function yP(e="safe"){if(e!=="safe"&&e!=="unsafe")throw new V(`unrecognized regExpTaming ${e}`);const n=ht.prototype,t=(i={})=>{const s=function(...l){return new.target===void 0?ht(...l):li(ht,l,new.target)};return qe(s,{length:{value:2},prototype:{value:n,writable:!1,enumerable:!1,configurable:!1},[ad]:Nn(ht,ad)}),s},r=t(),o=t();return e!=="unsafe"&&delete n.compile,qe(n,{constructor:{value:o}}),{"%InitialRegExp%":r,"%SharedRegExp%":o}}const SP={"%ObjectPrototype%":{toString:!0},"%FunctionPrototype%":{toString:!0},"%ErrorPrototype%":{name:!0}},Rf={"%ObjectPrototype%":{toString:!0,valueOf:!0},"%ArrayPrototype%":{toString:!0,push:!0},"%FunctionPrototype%":{constructor:!0,bind:!0,toString:!0},"%ErrorPrototype%":{constructor:!0,message:!0,name:!0,toString:!0},"%TypeErrorPrototype%":{constructor:!0,message:!0,name:!0},"%SyntaxErrorPrototype%":{message:!0,name:!0},"%RangeErrorPrototype%":{message:!0,name:!0},"%URIErrorPrototype%":{message:!0,name:!0},"%EvalErrorPrototype%":{message:!0,name:!0},"%ReferenceErrorPrototype%":{message:!0,name:!0},"%PromisePrototype%":{constructor:!0},"%TypedArrayPrototype%":"*","%Generator%":{constructor:!0,name:!0,toString:!0},"%IteratorPrototype%":{toString:!0}},EP={...Rf,"%ObjectPrototype%":"*","%TypedArrayPrototype%":"*","%MapPrototype%":"*","%SetPrototype%":"*"};function TP(e,n,t=[]){const r=new Pr(t);function o(d,c,p,f){if("value"in f&&f.configurable){let h=function(){return m},b=function(y){if(c===this)throw new V(`Cannot assign to read only property '${vn(p)}' of '${d}'`);mn(this,p)?this[p]=y:Ue(this,p,{value:y,writable:!0,enumerable:!0,configurable:!0})};const{value:m}=f;Ue(h,"originalValue",{value:m,writable:!1,enumerable:!1,configurable:!1});const S=fl(r,p);Ue(c,p,{get:h,set:b,enumerable:f.enumerable,configurable:f.configurable})}}function i(d,c,p){const f=Nn(c,p);f&&o(d,c,p,f)}function s(d,c){const p=Vt(c);p&&Wt(Or(p),f=>o(d,c,f,p[f]))}function a(d,c,p){for(const f of fo(p)){const m=Nn(c,f);if(!m||m.get||m.set)continue;const h=`${d}.${vn(f)}`,S=p[f];if(S===!0)i(h,c,f);else if(S==="*")s(h,m.value);else if(Ot(S))a(h,m.value,S);else throw new V(`Unexpected override enablement plan ${h}`)}}let l;switch(n){case"min":{l=SP;break}case"moderate":{l=Rf;break}case"severe":{l=EP;break}default:throw new V(`unrecognized overrideTaming ${n}`)}a("root",e,l)}const{Fail:Ta,quote:pi}=Je,_P=/^(\w*[a-z])Locale([A-Z]\w*)$/,Cf={localeCompare(e){if(this===null||this===void 0)throw new V('Cannot localeCompare with null or undefined "this" value');const n=`${this}`,t=`${e}`;return n<t?-1:n>t?1:(n===t||Ta`expected ${pi(n)} and ${pi(t)} to compare`,0)},toString(){return`${this}`}},PP=Cf.localeCompare,kP=Cf.toString;function OP(e,n="safe"){if(n!=="safe"&&n!=="unsafe")throw new V(`unrecognized localeTaming ${n}`);if(n!=="unsafe"){Ue(vn.prototype,"localeCompare",{value:PP});for(const t of fo(e)){const r=e[t];if(Ot(r))for(const o of fo(r)){const i=ml(_P,o);if(i){typeof r[o]=="function"||Ta`expected ${pi(o)} to be a function`;const s=`${i[1]}${i[2]}`,a=r[s];typeof a=="function"||Ta`function ${pi(s)} not found`,Ue(r,o,{value:a})}}}Ue(Vp.prototype,"toLocaleString",{value:kP})}}const RP=e=>({eval(t){return typeof t!="string"?t:e(t)}}).eval,{Fail:vd}=Je,CP=e=>{const n=function(r){const o=`${va(arguments)||""}`,i=`${Cr(arguments,",")}`;new En(i,""),new En(o);const s=`(function anonymous(${i}
) {
${o}
})`;return e(s)};return qe(n,{prototype:{value:En.prototype,writable:!1,enumerable:!1,configurable:!1}}),an(En)===En.prototype||vd`Function prototype is the same accross compartments`,an(n)===En.prototype||vd`Function constructor prototype is the same accross compartments`,n},LP=e=>{Ue(e,k_,U(Po(Xe(null),{set:U(()=>{throw new V("Cannot set Symbol.unscopables of a Compartment's globalThis")}),enumerable:!1,configurable:!1})))},Lf=e=>{for(const[n,t]of fn(df))Ue(e,n,{value:t,writable:!1,enumerable:!1,configurable:!1})},xf=(e,{intrinsics:n,newGlobalPropertyNames:t,makeCompartmentConstructor:r,markVirtualizedNativeFunction:o})=>{for(const[s,a]of fn(uf))mn(n,a)&&Ue(e,s,{value:n[a],writable:!0,enumerable:!1,configurable:!0});for(const[s,a]of fn(t))mn(n,a)&&Ue(e,s,{value:n[a],writable:!0,enumerable:!1,configurable:!0});const i={globalThis:e};i.Compartment=r(r,n,o);for(const[s,a]of fn(i))Ue(e,s,{value:a,writable:!0,enumerable:!1,configurable:!0}),typeof a=="function"&&o(a)},_a=(e,n,t)=>{{const r=RP(n);t(r),Ue(e,"eval",{value:r,writable:!0,enumerable:!1,configurable:!0})}{const r=CP(n);t(r),Ue(e,"Function",{value:r,writable:!0,enumerable:!1,configurable:!0})}},{Fail:xP,quote:If}=Je,wf=new Ni(bl,U({get(e,n){xP`Please report unexpected scope handler trap: ${If(vn(n))}`}})),IP={get(e,n){},set(e,n,t){throw new Ut(`${vn(n)} is not defined`)},has(e,n){return n in ie},getPrototypeOf(){return null},getOwnPropertyDescriptor(e,n){const t=If(vn(n))}},Af=U(Xe(wf,Vt(IP))),wP=new Ni(bl,Af),Nf=e=>{const n={...Af,set(o,i,s){return nf(e,i,s)},has(o,i){return!0}},t=U(Xe(wf,Vt(n)));return new Ni(bl,t)};U(Nf);const{Fail:AP}=Je,NP=()=>{const e=Xe(null),n=U({eval:{get(){return delete e.eval,lf},enumerable:!1,configurable:!0}}),t={evalScope:e,allowNextEvalToBeUnsafe(){t.revoked!==null&&AP`a handler did not reset allowNextEvalToBeUnsafe ${this.revoked.err}`,qe(e,n)},revoked:null};return t},hd="\\s*[@#]\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*=\\s*([^\\s\\*]*)",DP=new ht(`(?:\\s*//${hd}|/\\*${hd}\\s*\\*/)\\s*$`),Sl=e=>{let n="<unknown>";for(;e.length>0;){const t=ml(DP,e);if(t===null)break;e=gl(e,0,e.length-t[0].length),t[3]==="sourceURL"?n=t[4]:t[1]==="sourceURL"&&(n=t[2])}return n};function El(e,n){const t=z_(e,n);if(t<0)return-1;const r=e[t]===`
`?1:0;return sf(gl(e,0,t),`
`).length+r}const Df=new ht("(?:<!--|-->)","g"),Bf=e=>{const n=El(e,Df);if(n<0)return e;const t=Sl(e);throw new _o(`Possible HTML comment rejected at ${t}:${n}. (SES_HTML_COMMENT_REJECTED)`)},Hf=e=>ci(e,Df,t=>t[0]==="<"?"< ! --":"-- >"),Mf=new ht("(^|[^.])\\bimport(\\s*(?:\\(|/[/*]))","g"),Ff=e=>{const n=El(e,Mf);if(n<0)return e;const t=Sl(e);throw new _o(`Possible import expression rejected at ${t}:${n}. (SES_IMPORT_REJECTED)`)},$f=e=>ci(e,Mf,(t,r,o)=>`${r}__import__${o}`),BP=new ht("(^|[^.])\\beval(\\s*\\()","g"),jf=e=>{const n=El(e,BP);if(n<0)return e;const t=Sl(e);throw new _o(`Possible direct eval expression rejected at ${t}:${n}. (SES_EVAL_REJECTED)`)},Kf=e=>(e=Bf(e),e=Ff(e),e),Uf=(e,n)=>{for(const t of n)e=t(e);return e};U({rejectHtmlComments:U(Bf),evadeHtmlCommentTest:U(Hf),rejectImportExpressions:U(Ff),evadeImportExpressionTest:U($f),rejectSomeDirectEvalExpressions:U(jf),mandatoryTransforms:U(Kf),applyTransforms:U(Uf)});const HP=["await","break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","let","static","enum","implements","package","protected","interface","private","public","await","null","true","false","this","arguments"],MP=/^[a-zA-Z_$][\w$]*$/,bd=e=>e!=="eval"&&!$i(HP,e)&&rf(MP,e);function yd(e,n){const t=Nn(e,n);return t.configurable===!1&&t.writable===!1&&mn(t,"value")}const FP=(e,n={})=>{const t=fo(e),r=fo(n),o=kt(r,s=>bd(s)&&yd(n,s));return{globalObjectConstants:kt(t,s=>!$i(r,s)&&bd(s)&&yd(e,s)),moduleLexicalConstants:o}};function Sd(e,n){return e.length===0?"":`const {${Cr(e,",")}} = this.${n};`}const $P=e=>{const{globalObjectConstants:n,moduleLexicalConstants:t}=FP(e.globalObject,e.moduleLexicals),r=Sd(n,"globalObject"),o=Sd(t,"moduleLexicals"),i=En(`
    with (this.scopeTerminator) {
      with (this.globalObject) {
        with (this.moduleLexicals) {
          with (this.evalScope) {
            ${r}
            ${o}
            return function() {
              'use strict';
              return eval(arguments[0]);
            };
          }
        }
      }
    }
  `);return it(i,e,[])},{Fail:jP}=Je,Tl=({globalObject:e,moduleLexicals:n={},globalTransforms:t=[],sloppyGlobalsMode:r=!1}={})=>{const o=r?Nf(e):wP,i=NP(),{evalScope:s}=i,a=U({evalScope:s,moduleLexicals:n,globalObject:e,scopeTerminator:o});let l;const d=()=>{l||(l=$P(a))};return{safeEvaluate:(p,{localTransforms:f=[]}={})=>{d(),p=Uf(p,[...f,...t,Kf]);let m;try{return i.allowNextEvalToBeUnsafe(),it(l,e,[p])}catch(h){throw m=h,h}finally{const h="eval"in s;delete s.eval,h&&(i.revoked={err:m},jP`handler did not reset allowNextEvalToBeUnsafe ${m}`)}}}};function KP(e="safe"){if(e!=="safe"&&e!=="unsafe")throw new V(`unrecognized domainTaming ${e}`);if(e!=="unsafe"&&typeof ie.process=="object"&&ie.process!==null){const n=Nn(ie.process,"domain");if(n!==void 0&&n.get!==void 0)throw new V("SES failed to lockdown, Node.js domains have been initialized (SES_NO_DOMAINS)");Ue(ie.process,"domain",{value:null,configurable:!1,writable:!1,enumerable:!1})}}const Wf=U([["debug","debug"],["log","log"],["info","info"],["warn","warn"],["error","error"],["trace","log"],["dirxml","log"],["group","log"],["groupCollapsed","log"]]),zf=U([["assert","error"],["timeLog","log"],["clear",void 0],["count","info"],["countReset",void 0],["dir","log"],["groupEnd","log"],["table","log"],["time","info"],["timeEnd","info"],["profile",void 0],["profileEnd",void 0],["timeStamp",void 0]]),Gf=U([...Wf,...zf]),UP=(e,{shouldResetForDebugging:n=!1}={})=>{n&&e.resetErrorTagNum();let t=[];const r=Bi(wn(Gf,([s,a])=>{const l=(...d)=>{cn(t,[s,...d])};return Ue(l,"name",{value:s}),[s,U(l)]}));U(r);const o=()=>{const s=U(t);return t=[],s};return U(o),U({loggingConsole:r,takeLog:o})};U(UP);const Ur={NOTE:"ERROR_NOTE:",MESSAGE:"ERROR_MESSAGE:"};U(Ur);const qf=(e,n)=>{const{getStackString:t,tagError:r,takeMessageLogArgs:o,takeNoteLogArgsArray:i}=n,s=(b,y)=>wn(b,k=>yl(k)?(cn(y,k),`(${r(k)})`):k),a=(b,y,_,k,A)=>{const R=r(y),D=_===Ur.MESSAGE?`${R}:`:`${R} ${_}`,F=s(k,A);e[b](D,...F)},l=(b,y,_=void 0)=>{if(y.length===0)return;if(y.length===1&&_===void 0){p(b,y[0]);return}let k;y.length===1?k="Nested error":k=`Nested ${y.length} errors`,_!==void 0&&(k=`${k} under ${_}`),e.group(k);try{for(const A of y)p(b,A)}finally{e.groupEnd()}},d=new kr,c=b=>(y,_)=>{const k=[];a(b,y,Ur.NOTE,_,k),l(b,k,r(y))},p=(b,y)=>{if(Oo(d,y))return;const _=r(y);Ui(d,y);const k=[],A=o(y),R=i(y,c(b));A===void 0?e[b](`${_}:`,y.message):a(b,y,Ur.MESSAGE,A,k);let D=t(y);typeof D=="string"&&D.length>=1&&!of(D,`
`)&&(D+=`
`),e[b](D);for(const F of R)a(b,y,Ur.NOTE,F,k);l(b,k,_)},f=wn(Wf,([b,y])=>{const _=(...k)=>{const A=[],R=s(k,A);e[b](...R),l(b,A)};return Ue(_,"name",{value:b}),[b,U(_)]}),m=kt(zf,([b,y])=>b in e),h=wn(m,([b,y])=>{const _=(...k)=>{e[b](...k)};return Ue(_,"name",{value:b}),[b,U(_)]}),S=Bi([...f,...h]);return U(S)};U(qf);const WP=(e,n,t=void 0)=>{const r=kt(Gf,([s,a])=>s in e),o=wn(r,([s,a])=>[s,U((...d)=>{(a===void 0||n.canLog(a))&&e[s](...d)})]),i=Bi(o);return U(i)};U(WP);const Ed=e=>{if(vr===void 0)return;let n=0;const t=new Wn,r=c=>{M_(t,c)},o=new Dn,i=c=>{if(ji(t,c)){const p=st(t,c);r(c),e(p)}},s=new vr(i);return{rejectionHandledHandler:c=>{const p=Ne(o,c);r(p)},unhandledRejectionHandler:(c,p)=>{n+=1;const f=n;zn(t,f,c),pn(o,p,f),Z_(s,p,f,p)},processTerminationHandler:()=>{for(const[c,p]of F_(t))r(c),e(p)}}},Td=console,zP=(e="safe",n="platform",t="report",r=void 0)=>{if(e!=="safe"&&e!=="unsafe")throw new V(`unrecognized consoleTaming ${e}`);let o;r===void 0?o=Ea:o={...Ea,getStackString:r};const i=e==="unsafe"?Td:qf(Td,o);if(n!=="none"&&ie.process!==void 0&&ie.process.on("uncaughtException",s=>{i.error(s),n==="platform"||n==="exit"?ie.process.exit(ie.process.exitCode||-1):n==="abort"&&ie.process.abort()}),t!=="none"&&ie.process!==void 0){const a=Ed(l=>{i.error("SES_UNHANDLED_REJECTION:",l)});a&&(ie.process.on("unhandledRejection",a.unhandledRejectionHandler),ie.process.on("rejectionHandled",a.rejectionHandledHandler),ie.process.on("exit",a.processTerminationHandler))}if(n!=="none"&&ie.window!==void 0&&ie.window.addEventListener!==void 0&&ie.window.addEventListener("error",s=>{s.preventDefault(),i.error(s.error),(n==="exit"||n==="abort")&&(ie.window.location.href="about:blank")}),t!=="none"&&ie.window!==void 0&&ie.window.addEventListener!==void 0){const a=Ed(l=>{i.error("SES_UNHANDLED_REJECTION:",l)});a&&(ie.window.addEventListener("unhandledrejection",l=>{l.preventDefault(),a.unhandledRejectionHandler(l.reason,l.promise)}),ie.window.addEventListener("rejectionhandled",l=>{l.preventDefault(),a.rejectionHandledHandler(l.promise)}),ie.window.addEventListener("beforeunload",l=>{a.processTerminationHandler()}))}return{console:i}},GP=["getTypeName","getFunctionName","getMethodName","getFileName","getLineNumber","getColumnNumber","getEvalOrigin","isToplevel","isEval","isNative","isConstructor","isAsync","getPosition","getScriptNameOrSourceURL","toString"],qP=e=>{const t=Bi(wn(GP,r=>{const o=e[r];return[r,()=>it(o,e,[])]}));return Xe(t,{})},VP=e=>wn(e,qP),JP=/\/node_modules\//,ZP=/^(?:node:)?internal\//,YP=/\/packages\/ses\/src\/error\/assert.js$/,XP=/\/packages\/eventual-send\/src\//,QP=[JP,ZP,YP,XP],ek=e=>{if(!e)return!0;for(const n of QP)if(rf(n,e))return!1;return!0},nk=/^((?:.*[( ])?)[:/\w_-]*\/\.\.\.\/(.+)$/,tk=/^((?:.*[( ])?)[:/\w_-]*\/(packages\/.+)$/,rk=[nk,tk],ok=e=>{for(const n of rk){const t=ml(n,e);if(t)return Cr(N_(t,1),"")}return e},ik=(e,n,t,r)=>{const o=e.captureStackTrace,i=m=>r==="verbose"?!0:ek(m.getFileName()),s=m=>{let h=`${m}`;return r==="concise"&&(h=ok(h)),`
  at ${h}`},a=(m,h)=>Cr(wn(kt(h,i),s),""),l=new Dn,d={captureStackTrace(m,h=d.captureStackTrace){if(typeof o=="function"){it(o,e,[m,h]);return}nf(m,"stack","")},getStackString(m){let h=Ne(l,m);if(h===void 0&&(m.stack,h=Ne(l,m),h||(h={stackString:""},pn(l,m,h))),h.stackString!==void 0)return h.stackString;const S=a(m,h.callSites);return pn(l,m,{stackString:S}),S},prepareStackTrace(m,h){if(t==="unsafe"){const S=a(m,h);return pn(l,m,{stackString:S}),`${m}${S}`}else return pn(l,m,{callSites:h}),""}},c=d.prepareStackTrace;e.prepareStackTrace=c;const p=new kr([c]),f=m=>{if(Oo(p,m))return m;const h={prepareStackTrace(S,b){return pn(l,S,{callSites:b}),m(S,VP(b))}};return Ui(p,h.prepareStackTrace),h.prepareStackTrace};return qe(n,{captureStackTrace:{value:d.captureStackTrace,writable:!0,enumerable:!1,configurable:!0},prepareStackTrace:{get(){return e.prepareStackTrace},set(m){if(typeof m=="function"){const h=f(m);e.prepareStackTrace=h}else e.prepareStackTrace=c},enumerable:!1,configurable:!0}}),d.getStackString},_d=Nn(bn.prototype,"stack"),Pd=_d&&_d.get,sk={getStackString(e){return typeof Pd=="function"?it(Pd,e,[]):"stack"in e?`${e.stack}`:""}};function ak(e="safe",n="concise"){if(e!=="safe"&&e!=="unsafe")throw new V(`unrecognized errorTaming ${e}`);if(n!=="concise"&&n!=="verbose")throw new V(`unrecognized stackFiltering ${n}`);const t=bn.prototype,r=typeof bn.captureStackTrace=="function"?"v8":"unknown",{captureStackTrace:o}=bn,i=(d={})=>{const c=function(...f){let m;return new.target===void 0?m=it(bn,this,f):m=li(bn,f,new.target),r==="v8"&&it(o,bn,[m,c]),m};return qe(c,{length:{value:1},prototype:{value:t,writable:!1,enumerable:!1,configurable:!1}}),c},s=i({powers:"original"}),a=i({powers:"none"});qe(t,{constructor:{value:a}});for(const d of eP)Zp(d,a);qe(s,{stackTraceLimit:{get(){if(typeof bn.stackTraceLimit=="number")return bn.stackTraceLimit},set(d){if(typeof d=="number"&&typeof bn.stackTraceLimit=="number"){bn.stackTraceLimit=d;return}},enumerable:!1,configurable:!0}}),qe(a,{stackTraceLimit:{get(){},set(d){},enumerable:!1,configurable:!0}}),r==="v8"&&qe(a,{prepareStackTrace:{get(){return()=>""},set(d){},enumerable:!1,configurable:!0},captureStackTrace:{value:(d,c)=>{Ue(d,"stack",{value:""})},writable:!1,enumerable:!1,configurable:!0}});let l=sk.getStackString;return r==="v8"?l=ik(bn,s,e,n):e==="unsafe"?qe(t,{stack:{get(){return l(this)},set(d){qe(this,{stack:{value:d,writable:!0,enumerable:!0,configurable:!0}})}}}):qe(t,{stack:{get(){return`${this}`},set(d){qe(this,{stack:{value:d,writable:!0,enumerable:!0,configurable:!0}})}}}),{"%InitialGetStackString%":l,"%InitialError%":s,"%SharedError%":a}}const{Fail:Fo,quote:Mr}=Je,Vf=e=>{const n=[],t=(o,i)=>{typeof o=="string"||Fo`Environment option name ${Mr(o)} must be a string.`,typeof i=="string"||Fo`Environment option default setting ${Mr(i)} must be a string.`;let s=i;const a=e.process;if(a&&typeof a=="object"){const l=a.env;if(l&&typeof l=="object"&&o in l){cn(n,o);const d=l[o];typeof d=="string"||Fo`Environment option named ${Mr(o)}, if present, must have a corresponding string value, got ${Mr(d)}`,s=d}}return s===void 0||typeof s=="string"||Fo`Environment option value ${Mr(s)}, if present, must be a string.`,s};U(t);const r=()=>U([...n]);return U(r),U({getEnvironmentOption:t,getCapturedEnvironmentOptionNames:r})};U(Vf);const{Fail:lk,details:Pa,quote:tt}=Je,Jf=()=>{},ck=(e,n)=>U({compartment:e,specifier:n}),dk=(e,n,t)=>{const r=Xe(null);for(const o of e){const i=n(o,t);r[o]=i}return U(r)},kd=(e,n,t,r,o,i,s,a,l)=>{const{resolveHook:d,moduleRecords:c}=Ne(e,t),p=dk(o.imports,d,r),f=U({compartment:t,staticModuleRecord:o,moduleSpecifier:r,resolvedImports:p,importMeta:l});for(const m of Yp(p)){const h=fi(e,n,t,m,i,s,a);Ki(i,hl(h,Jf,S=>{cn(a,S)}))}return zn(c,r,f),f},uk=async(e,n,t,r,o,i,s)=>{const{importHook:a,moduleMap:l,moduleMapHook:d,moduleRecords:c}=Ne(e,t);let p=l[r];if(p===void 0&&d!==void 0&&(p=d(r)),typeof p=="string")Je.fail(Pa`Cannot map module ${tt(r)} to ${tt(p)} in parent compartment, not yet implemented`,V);else if(p!==void 0){const m=Ne(n,p);m===void 0&&Je.fail(Pa`Cannot map module ${tt(r)} because the value is not a module exports namespace, or is from another realm`,Ut);const h=await fi(e,n,m.compartment,m.specifier,o,i,s);return zn(c,r,h),h}if(ji(c,r))return st(c,r);const f=await a(r);if((f===null||typeof f!="object")&&lk`importHook must return a promise for an object, for module ${tt(r)} in compartment ${tt(t.name)}`,f.specifier!==void 0){if(f.record!==void 0){if(f.compartment!==void 0)throw new V("Cannot redirect to an explicit record with a specified compartment");const{compartment:m=t,specifier:h=r,record:S,importMeta:b}=f,y=kd(e,n,m,h,S,o,i,s,b);return zn(c,r,y),y}if(f.compartment!==void 0){if(f.importMeta!==void 0)throw new V("Cannot redirect to an implicit record with a specified importMeta");const m=await fi(e,n,f.compartment,f.specifier,o,i,s);return zn(c,r,m),m}throw new V("Unnexpected RedirectStaticModuleInterface record shape")}return kd(e,n,t,r,f,o,i,s)},fi=async(e,n,t,r,o,i,s)=>{const{name:a}=Ne(e,t);let l=st(i,t);l===void 0&&(l=new Wn,zn(i,t,l));let d=st(l,r);return d!==void 0||(d=J_(uk(e,n,t,r,o,i,s),c=>{throw Je.note(c,Pa`${c.message}, loading ${tt(r)} in compartment ${tt(a)}`),c}),zn(l,r,d)),d},Od=async(e,n,t,r)=>{const{name:o}=Ne(e,t),i=new Pr,s=new Wn,a=[],l=fi(e,n,t,r,i,s,a);Ki(i,hl(l,Jf,d=>{cn(a,d)}));for(const d of i)await d;if(a.length>0)throw new V(`Failed to load module ${tt(r)} in package ${tt(o)} (${a.length} underlying failures: ${Cr(wn(a,d=>d.message),", ")}`)},{quote:tr}=Je,pk=()=>{let e=!1;const n=Xe(null);return U({activate(){e=!0},proxiedExports:n,exportsProxy:new Ni(n,{get(t,r,o){if(!e)throw new V(`Cannot get property ${tr(r)} of module exports namespace, the module has not yet begun to execute`);return L_(n,r,o)},set(t,r,o){throw new V(`Cannot set property ${tr(r)} of module exports namespace`)},has(t,r){if(!e)throw new V(`Cannot check property ${tr(r)}, the module has not yet begun to execute`);return ef(n,r)},deleteProperty(t,r){throw new V(`Cannot delete property ${tr(r)}s of module exports namespace`)},ownKeys(t){if(!e)throw new V("Cannot enumerate keys, the module has not yet begun to execute");return Or(n)},getOwnPropertyDescriptor(t,r){if(!e)throw new V(`Cannot get own property descriptor ${tr(r)}, the module has not yet begun to execute`);return x_(n,r)},preventExtensions(t){if(!e)throw new V("Cannot prevent extensions of module exports namespace, the module has not yet begun to execute");return w_(n)},isExtensible(){if(!e)throw new V("Cannot check extensibility of module exports namespace, the module has not yet begun to execute");return I_(n)},getPrototypeOf(t){return null},setPrototypeOf(t,r){throw new V("Cannot set prototype of module exports namespace")},defineProperty(t,r,o){throw new V(`Cannot define property ${tr(r)} of module exports namespace`)},apply(t,r,o){throw new V("Cannot call module exports namespace, it is not a function")},construct(t,r){throw new V("Cannot construct module exports namespace, it is not a constructor")}})})},_l=(e,n,t,r)=>{const{deferredExports:o}=n;if(!ji(o,r)){const i=pk();pn(t,i.exportsProxy,ck(e,r)),zn(o,r,i)}return st(o,r)},fk=(e,n)=>{const{sloppyGlobalsMode:t=!1,__moduleShimLexicals__:r=void 0}=n;let o;if(r===void 0&&!t)({safeEvaluate:o}=e);else{let{globalTransforms:i}=e;const{globalObject:s}=e;let a;r!==void 0&&(i=void 0,a=Xe(null,Vt(r))),{safeEvaluate:o}=Tl({globalObject:s,moduleLexicals:a,globalTransforms:i,sloppyGlobalsMode:t})}return{safeEvaluate:o}},Zf=(e,n,t)=>{if(typeof n!="string")throw new V("first argument of evaluate() must be a string");const{transforms:r=[],__evadeHtmlCommentTest__:o=!1,__evadeImportExpressionTest__:i=!1,__rejectSomeDirectEvalExpressions__:s=!0}=t,a=[...r];o===!0&&cn(a,Hf),i===!0&&cn(a,$f),s===!0&&cn(a,jf);const{safeEvaluate:l}=fk(e,t);return l(n,{localTransforms:a})},{quote:$o}=Je,mk=(e,n,t,r,o,i)=>{const{exportsProxy:s,proxiedExports:a,activate:l}=_l(t,Ne(e,t),r,o),d=Xe(null);if(n.exports){if(!Xr(n.exports)||D_(n.exports,p=>typeof p!="string"))throw new V(`SES third-party static module record "exports" property must be an array of strings for module ${o}`);Wt(n.exports,p=>{let f=a[p];const m=[];Ue(a,p,{get:()=>f,set:b=>{f=b;for(const y of m)y(b)},enumerable:!0,configurable:!1}),d[p]=b=>{cn(m,b),b(f)}}),d["*"]=p=>{p(a)}}const c={activated:!1};return U({notifiers:d,exportsProxy:s,execute(){if(ef(c,"errorFromExecute"))throw c.errorFromExecute;if(!c.activated){l(),c.activated=!0;try{n.execute(a,t,i)}catch(p){throw c.errorFromExecute=p,p}}}})},gk=(e,n,t,r)=>{const{compartment:o,moduleSpecifier:i,staticModuleRecord:s,importMeta:a}=t,{reexports:l=[],__syncModuleProgram__:d,__fixedExportMap__:c={},__liveExportMap__:p={},__reexportMap__:f={},__needsImportMeta__:m=!1,__syncModuleFunctor__:h}=s,S=Ne(e,o),{__shimTransforms__:b,importMetaHook:y}=S,{exportsProxy:_,proxiedExports:k,activate:A}=_l(o,S,n,i),R=Xe(null),D=Xe(null),F=Xe(null),x=Xe(null),w=Xe(null);a&&Po(w,a),m&&y&&y(i,w);const $=Xe(null),Z=Xe(null);Wt(fn(c),([oe,[ge]])=>{let _e=$[ge];if(!_e){let Re,Te=!0,Ke=[];const He=()=>{if(Te)throw new Ut(`binding ${$o(ge)} not yet initialized`);return Re},T=U(H=>{if(!Te)throw new V(`Internal: binding ${$o(ge)} already initialized`);Re=H;const Y=Ke;Ke=null,Te=!1;for(const ne of Y)ne(H);return H});_e={get:He,notify:H=>{H!==T&&(Te?cn(Ke,H):H(Re))}},$[ge]=_e,F[ge]=T}R[oe]={get:_e.get,set:void 0,enumerable:!0,configurable:!1},Z[oe]=_e.notify}),Wt(fn(p),([oe,[ge,_e]])=>{let Re=$[ge];if(!Re){let Te,Ke=!0;const He=[],T=()=>{if(Ke)throw new Ut(`binding ${$o(oe)} not yet initialized`);return Te},K=U(ne=>{Te=ne,Ke=!1;for(const Ce of He)Ce(ne)}),H=ne=>{if(Ke)throw new Ut(`binding ${$o(ge)} not yet initialized`);Te=ne;for(const Ce of He)Ce(ne)};Re={get:T,notify:ne=>{ne!==K&&(cn(He,ne),Ke||ne(Te))}},$[ge]=Re,_e&&Ue(D,ge,{get:T,set:H,enumerable:!0,configurable:!1}),x[ge]=K}R[oe]={get:Re.get,set:void 0,enumerable:!0,configurable:!1},Z[oe]=Re.notify});const j=oe=>{oe(k)};Z["*"]=j;function de(oe){const ge=Xe(null);ge.default=!1;for(const[_e,Re]of oe){const Te=st(r,_e);Te.execute();const{notifiers:Ke}=Te;for(const[He,T]of Re){const K=Ke[He];if(!K)throw _o(`The requested module '${_e}' does not provide an export named '${He}'`);for(const H of T)K(H)}if($i(l,_e))for(const[He,T]of fn(Ke))ge[He]===void 0?ge[He]=T:ge[He]=!1;if(f[_e])for(const[He,T]of f[_e])ge[T]=Ke[He]}for(const[_e,Re]of fn(ge))if(!Z[_e]&&Re!==!1){Z[_e]=Re;let Te;Re(He=>Te=He),R[_e]={get(){return Te},set:void 0,enumerable:!0,configurable:!1}}Wt(B_(__(R)),_e=>Ue(k,_e,R[_e])),U(k),A()}let Q;h!==void 0?Q=h:Q=Zf(S,d,{globalObject:o.globalThis,transforms:b,__moduleShimLexicals__:D});let xe=!1,Oe;function Ee(){if(Q){const oe=Q;Q=null;try{oe(U({imports:U(de),onceVar:U(F),liveVar:U(x),importMeta:w}))}catch(ge){xe=!0,Oe=ge}}if(xe)throw Oe}return U({notifiers:Z,exportsProxy:_,execute:Ee})},{Fail:$t,quote:tn}=Je,Yf=(e,n,t,r)=>{const{name:o,moduleRecords:i}=Ne(e,t),s=st(i,r);if(s===void 0)throw new Ut(`Missing link to module ${tn(r)} from compartment ${tn(o)}`);return Ek(e,n,s)};function vk(e){return typeof e.__syncModuleProgram__=="string"}function hk(e,n){const{__fixedExportMap__:t,__liveExportMap__:r}=e;Ot(t)||$t`Property '__fixedExportMap__' of a precompiled module record must be an object, got ${tn(t)}, for module ${tn(n)}`,Ot(r)||$t`Property '__liveExportMap__' of a precompiled module record must be an object, got ${tn(r)}, for module ${tn(n)}`}function bk(e){return typeof e.execute=="function"}function yk(e,n){const{exports:t}=e;Xr(t)||$t`Property 'exports' of a third-party static module record must be an array, got ${tn(t)}, for module ${tn(n)}`}function Sk(e,n){Ot(e)||$t`Static module records must be of type object, got ${tn(e)}, for module ${tn(n)}`;const{imports:t,exports:r,reexports:o=[]}=e;Xr(t)||$t`Property 'imports' of a static module record must be an array, got ${tn(t)}, for module ${tn(n)}`,Xr(r)||$t`Property 'exports' of a precompiled module record must be an array, got ${tn(r)}, for module ${tn(n)}`,Xr(o)||$t`Property 'reexports' of a precompiled module record must be an array if present, got ${tn(o)}, for module ${tn(n)}`}const Ek=(e,n,t)=>{const{compartment:r,moduleSpecifier:o,resolvedImports:i,staticModuleRecord:s}=t,{instances:a}=Ne(e,r);if(ji(a,o))return st(a,o);Sk(s,o);const l=new Wn;let d;if(vk(s))hk(s,o),d=gk(e,n,t,l);else if(bk(s))yk(s,o),d=mk(e,s,r,n,o,i);else throw new V(`importHook must return a static module record, got ${tn(s)}`);zn(a,o,d);for(const[c,p]of fn(i)){const f=Yf(e,n,r,p);zn(l,c,f)}return d},{quote:Us}=Je,Qr=new Dn,nt=new Dn,jo=e=>{const{importHook:n,resolveHook:t}=Ne(nt,e);if(typeof n!="function"||typeof t!="function")throw new V("Compartment must be constructed with an importHook and a resolveHook for it to be able to load modules")},Pl=function(n={},t={},r={}){throw new V("Compartment.prototype.constructor is not a valid constructor.")},Rd=(e,n)=>{const{execute:t,exportsProxy:r}=Yf(nt,Qr,e,n);return t(),r},Xf={constructor:Pl,get globalThis(){return Ne(nt,this).globalObject},get name(){return Ne(nt,this).name},evaluate(e,n={}){const t=Ne(nt,this);return Zf(t,e,n)},toString(){return"[object Compartment]"},module(e){if(typeof e!="string")throw new V("first argument of module() must be a string");jo(this);const{exportsProxy:n}=_l(this,Ne(nt,this),Qr,e);return n},async import(e){if(typeof e!="string")throw new V("first argument of import() must be a string");return jo(this),hl(Od(nt,Qr,this,e),()=>({namespace:Rd(this,e)}))},async load(e){if(typeof e!="string")throw new V("first argument of load() must be a string");return jo(this),Od(nt,Qr,this,e)},importNow(e){if(typeof e!="string")throw new V("first argument of importNow() must be a string");return jo(this),Rd(this,e)}};qe(Pl,{prototype:{value:Xf}});const ka=(e,n,t)=>{function r(o={},i={},s={}){if(new.target===void 0)throw new V("Class constructor Compartment cannot be invoked without 'new'");const{name:a="<unknown>",transforms:l=[],__shimTransforms__:d=[],resolveHook:c,importHook:p,moduleMapHook:f,importMetaHook:m}=s,h=[...l,...d],S=new Wn,b=new Wn,y=new Wn;for(const[A,R]of fn(i||{})){if(typeof R=="string")throw new V(`Cannot map module ${Us(A)} to ${Us(R)} in parent compartment`);if(Ne(Qr,R)===void 0)throw Ut(`Cannot map module ${Us(A)} because it has no known compartment in this realm`)}const _={};LP(_),Lf(_);const{safeEvaluate:k}=Tl({globalObject:_,globalTransforms:h,sloppyGlobalsMode:!1});xf(_,{intrinsics:n,newGlobalPropertyNames:pf,makeCompartmentConstructor:e,markVirtualizedNativeFunction:t}),_a(_,k,t),Po(_,o),pn(nt,this,{name:`${a}`,globalTransforms:h,globalObject:_,safeEvaluate:k,resolveHook:c,importHook:p,moduleMap:i,moduleMapHook:f,importMetaHook:m,moduleRecords:S,__shimTransforms__:d,deferredExports:y,instances:b})}return r.prototype=Xf,r};function Ws(e){return an(e).constructor}function Tk(){return arguments}const _k=()=>{const e=En.prototype.constructor,n=Nn(Tk(),"callee").get,t=G_(new vn),r=an(t),o=Mi[Xp]&&K_(/./),i=o&&an(o),s=H_([]),a=an(s),l=an(h_),d=$_(new Wn),c=an(d),p=j_(new Pr),f=an(p),m=an(a);function*h(){}const S=Ws(h),b=S.prototype;async function*y(){}const _=Ws(y),k=_.prototype,A=k.prototype,R=an(A);async function D(){}const F=Ws(D);return{"%InertFunction%":e,"%ArrayIteratorPrototype%":a,"%InertAsyncFunction%":F,"%AsyncGenerator%":k,"%InertAsyncGeneratorFunction%":_,"%AsyncGeneratorPrototype%":A,"%AsyncIteratorPrototype%":R,"%Generator%":b,"%InertGeneratorFunction%":S,"%IteratorPrototype%":m,"%MapIteratorPrototype%":c,"%RegExpStringIteratorPrototype%":i,"%SetIteratorPrototype%":f,"%StringIteratorPrototype%":r,"%ThrowTypeError%":n,"%TypedArray%":l,"%InertCompartment%":Pl}},Qf=(e,n)=>{if(n!=="safe"&&n!=="unsafe")throw new V(`unrecognized fakeHardenOption ${n}`);if(n==="safe")return e;Object.isExtensible=()=>!1,Object.isFrozen=()=>!0,Object.isSealed=()=>!0,Reflect.isExtensible=()=>!1;const t=r=>r;return t.isFake=!0,U(t)};U(Qf);const{Fail:Cd,details:Pk,quote:Ld}=Je;let Ko;const kk=mP(),Ok=()=>{let e=!1;try{e=En("eval","SES_changed",`        eval("SES_changed = true");
        return SES_changed;
      `)(lf,!1),e||delete ie.SES_changed}catch{e=!0}if(!e)throw new V("SES cannot initialize unless 'eval' is the original intrinsic 'eval', suitable for direct-eval (dynamically scoped eval) (SES_DIRECT_EVAL)")},Rk=(e={})=>{const{getEnvironmentOption:n,getCapturedEnvironmentOptionNames:t}=Vf(ie),{errorTaming:r=n("LOCKDOWN_ERROR_TAMING","safe"),errorTrapping:o=n("LOCKDOWN_ERROR_TRAPPING","platform"),unhandledRejectionTrapping:i=n("LOCKDOWN_UNHANDLED_REJECTION_TRAPPING","report"),regExpTaming:s=n("LOCKDOWN_REGEXP_TAMING","safe"),localeTaming:a=n("LOCKDOWN_LOCALE_TAMING","safe"),consoleTaming:l=n("LOCKDOWN_CONSOLE_TAMING","safe"),overrideTaming:d=n("LOCKDOWN_OVERRIDE_TAMING","moderate"),stackFiltering:c=n("LOCKDOWN_STACK_FILTERING","concise"),domainTaming:p=n("LOCKDOWN_DOMAIN_TAMING","safe"),evalTaming:f=n("LOCKDOWN_EVAL_TAMING","safeEval"),overrideDebug:m=kt(sf(n("LOCKDOWN_OVERRIDE_DEBUG",""),","),Q=>Q!==""),__hardenTaming__:h=n("LOCKDOWN_HARDEN_TAMING","safe"),dateTaming:S="safe",mathTaming:b="safe",...y}=e;t().length>0,f==="unsafeEval"||f==="safeEval"||f==="noEval"||Cd`lockdown(): non supported option evalTaming: ${Ld(f)}`;const k=Or(y);if(k.length===0||Cd`lockdown(): non supported option ${Ld(k)}`,Ko===void 0||Je.fail(Pk`Already locked down at ${Ko} (SES_ALREADY_LOCKED_DOWN)`,V),Ko=new V("Prior lockdown (SES_ALREADY_LOCKED_DOWN)"),Ko.stack,Ok(),(()=>ie.Function.prototype.constructor!==ie.Function&&typeof ie.harden=="function"&&typeof ie.lockdown=="function"&&ie.Date.prototype.constructor!==ie.Date&&typeof ie.Date.now=="function"&&Di(ie.Date.prototype.constructor.now(),NaN))())throw new V("Already locked down but not by this SES instance (SES_MULTIPLE_INSTANCES)");KP(p);const{addIntrinsics:R,completePrototypes:D,finalIntrinsics:F}=mf(),x=Qf(kk,h);R({harden:x}),R(vP()),R(hP(S)),R(ak(r,c)),R(bP(b)),R(yP(s)),R(_k()),D();const w=F();let $;r!=="unsafe"&&($=w["%InitialGetStackString%"]);const Z=zP(l,o,i,$);ie.console=Z.console,r==="unsafe"&&ie.assert===Je&&(ie.assert=zi(void 0,!0)),OP(w,a);const j=cf();if(gP(w,j),Lf(ie),xf(ie,{intrinsics:w,newGlobalPropertyNames:Q_,makeCompartmentConstructor:ka,markVirtualizedNativeFunction:j}),f==="noEval")_a(ie,Y_,j);else if(f==="safeEval"){const{safeEvaluate:Q}=Tl({globalObject:ie});_a(ie,Q,j)}function de(){return TP(w,d,m),x(w),ie.harden=x,!0}return de},Ck=(e={})=>{Rk(e)()};function Lk(){return this}if(Lk())throw new V("SES failed to initialize, sloppy mode (SES_NO_SLOPPY)");const xk=cf(),Ik=ka(ka,iP(ie),xk);Po(ie,{lockdown:Ck,Compartment:Ik,assert:Je});function kl(){return new Function}var ru;const wk=((ru=window.preload)==null?void 0:ru.electron)||kl();var ou;const Ak=((ou=window.preload)==null?void 0:ou.Buffer)||kl();var iu;const Nk=((iu=window.preload)==null?void 0:iu.require)||kl();var Dk=typeof global=="object"&&global&&global.Object===Object&&global;const em=Dk;var Bk=typeof self=="object"&&self&&self.Object===Object&&self,Hk=em||Bk||Function("return this")();const Hn=Hk;var Mk=Hn.Symbol;const Jn=Mk;var nm=Object.prototype,Fk=nm.hasOwnProperty,$k=nm.toString,Fr=Jn?Jn.toStringTag:void 0;function jk(e){var n=Fk.call(e,Fr),t=e[Fr];try{e[Fr]=void 0;var r=!0}catch{}var o=$k.call(e);return r&&(n?e[Fr]=t:delete e[Fr]),o}var Kk=Object.prototype,Uk=Kk.toString;function Wk(e){return Uk.call(e)}var zk="[object Null]",Gk="[object Undefined]",xd=Jn?Jn.toStringTag:void 0;function Lr(e){return e==null?e===void 0?Gk:zk:xd&&xd in Object(e)?jk(e):Wk(e)}function xr(e){return e!=null&&typeof e=="object"}var qk="[object Symbol]";function tm(e){return typeof e=="symbol"||xr(e)&&Lr(e)==qk}function Vk(e,n){for(var t=-1,r=e==null?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o}var Jk=Array.isArray;const Ir=Jk;var Zk=1/0,Id=Jn?Jn.prototype:void 0,wd=Id?Id.toString:void 0;function rm(e){if(typeof e=="string")return e;if(Ir(e))return Vk(e,rm)+"";if(tm(e))return wd?wd.call(e):"";var n=e+"";return n=="0"&&1/e==-Zk?"-0":n}var Yk=/\s/;function Xk(e){for(var n=e.length;n--&&Yk.test(e.charAt(n)););return n}var Qk=/^\s+/;function eO(e){return e&&e.slice(0,Xk(e)+1).replace(Qk,"")}function Rt(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var Ad=0/0,nO=/^[-+]0x[0-9a-f]+$/i,tO=/^0b[01]+$/i,rO=/^0o[0-7]+$/i,oO=parseInt;function Nd(e){if(typeof e=="number")return e;if(tm(e))return Ad;if(Rt(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Rt(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=eO(e);var t=tO.test(e);return t||rO.test(e)?oO(e.slice(2),t?2:8):nO.test(e)?Ad:+e}var iO="[object AsyncFunction]",sO="[object Function]",aO="[object GeneratorFunction]",lO="[object Proxy]";function om(e){if(!Rt(e))return!1;var n=Lr(e);return n==sO||n==aO||n==iO||n==lO}var cO=Hn["__core-js_shared__"];const zs=cO;var Dd=function(){var e=/[^.]+$/.exec(zs&&zs.keys&&zs.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function dO(e){return!!Dd&&Dd in e}var uO=Function.prototype,pO=uO.toString;function Jt(e){if(e!=null){try{return pO.call(e)}catch{}try{return e+""}catch{}}return""}var fO=/[\\^$.*+?()[\]{}|]/g,mO=/^\[object .+?Constructor\]$/,gO=Function.prototype,vO=Object.prototype,hO=gO.toString,bO=vO.hasOwnProperty,yO=RegExp("^"+hO.call(bO).replace(fO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function SO(e){if(!Rt(e)||dO(e))return!1;var n=om(e)?yO:mO;return n.test(Jt(e))}function EO(e,n){return e==null?void 0:e[n]}function Zt(e,n){var t=EO(e,n);return SO(t)?t:void 0}var TO=Zt(Hn,"WeakMap");const Oa=TO;var Bd=Object.create,_O=function(){function e(){}return function(n){if(!Rt(n))return{};if(Bd)return Bd(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const PO=_O;function im(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var kO=function(){try{var e=Zt(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Hd=kO;function OO(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var RO=9007199254740991,CO=/^(?:0|[1-9]\d*)$/;function LO(e,n){var t=typeof e;return n=n??RO,!!n&&(t=="number"||t!="symbol"&&CO.test(e))&&e>-1&&e%1==0&&e<n}function sm(e,n,t){n=="__proto__"&&Hd?Hd(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}function am(e,n){return e===n||e!==e&&n!==n}var xO=Object.prototype,IO=xO.hasOwnProperty;function lm(e,n,t){var r=e[n];(!(IO.call(e,n)&&am(r,t))||t===void 0&&!(n in e))&&sm(e,n,t)}function Gi(e,n,t,r){var o=!t;t||(t={});for(var i=-1,s=n.length;++i<s;){var a=n[i],l=r?r(t[a],e[a],a,t,e):void 0;l===void 0&&(l=e[a]),o?sm(t,a,l):lm(t,a,l)}return t}var wO=9007199254740991;function cm(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=wO}function dm(e){return e!=null&&cm(e.length)&&!om(e)}var AO=Object.prototype;function Ol(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||AO;return e===t}function NO(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var DO="[object Arguments]";function Md(e){return xr(e)&&Lr(e)==DO}var um=Object.prototype,BO=um.hasOwnProperty,HO=um.propertyIsEnumerable,MO=Md(function(){return arguments}())?Md:function(e){return xr(e)&&BO.call(e,"callee")&&!HO.call(e,"callee")};const pm=MO;function FO(){return!1}var fm=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Fd=fm&&typeof module=="object"&&module&&!module.nodeType&&module,$O=Fd&&Fd.exports===fm,$d=$O?Hn.Buffer:void 0,jO=$d?$d.isBuffer:void 0,KO=jO||FO;const mm=KO;var UO="[object Arguments]",WO="[object Array]",zO="[object Boolean]",GO="[object Date]",qO="[object Error]",VO="[object Function]",JO="[object Map]",ZO="[object Number]",YO="[object Object]",XO="[object RegExp]",QO="[object Set]",eR="[object String]",nR="[object WeakMap]",tR="[object ArrayBuffer]",rR="[object DataView]",oR="[object Float32Array]",iR="[object Float64Array]",sR="[object Int8Array]",aR="[object Int16Array]",lR="[object Int32Array]",cR="[object Uint8Array]",dR="[object Uint8ClampedArray]",uR="[object Uint16Array]",pR="[object Uint32Array]",Me={};Me[oR]=Me[iR]=Me[sR]=Me[aR]=Me[lR]=Me[cR]=Me[dR]=Me[uR]=Me[pR]=!0;Me[UO]=Me[WO]=Me[tR]=Me[zO]=Me[rR]=Me[GO]=Me[qO]=Me[VO]=Me[JO]=Me[ZO]=Me[YO]=Me[XO]=Me[QO]=Me[eR]=Me[nR]=!1;function fR(e){return xr(e)&&cm(e.length)&&!!Me[Lr(e)]}function Rl(e){return function(n){return e(n)}}var gm=typeof exports=="object"&&exports&&!exports.nodeType&&exports,eo=gm&&typeof module=="object"&&module&&!module.nodeType&&module,mR=eo&&eo.exports===gm,Gs=mR&&em.process,gR=function(){try{var e=eo&&eo.require&&eo.require("util").types;return e||Gs&&Gs.binding&&Gs.binding("util")}catch{}}();const yr=gR;var jd=yr&&yr.isTypedArray,vR=jd?Rl(jd):fR;const hR=vR;var bR=Object.prototype,yR=bR.hasOwnProperty;function vm(e,n){var t=Ir(e),r=!t&&pm(e),o=!t&&!r&&mm(e),i=!t&&!r&&!o&&hR(e),s=t||r||o||i,a=s?NO(e.length,String):[],l=a.length;for(var d in e)(n||yR.call(e,d))&&!(s&&(d=="length"||o&&(d=="offset"||d=="parent")||i&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||LO(d,l)))&&a.push(d);return a}function hm(e,n){return function(t){return e(n(t))}}var SR=hm(Object.keys,Object);const ER=SR;var TR=Object.prototype,_R=TR.hasOwnProperty;function PR(e){if(!Ol(e))return ER(e);var n=[];for(var t in Object(e))_R.call(e,t)&&t!="constructor"&&n.push(t);return n}function Cl(e){return dm(e)?vm(e):PR(e)}function kR(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var OR=Object.prototype,RR=OR.hasOwnProperty;function CR(e){if(!Rt(e))return kR(e);var n=Ol(e),t=[];for(var r in e)r=="constructor"&&(n||!RR.call(e,r))||t.push(r);return t}function Ll(e){return dm(e)?vm(e,!0):CR(e)}var LR=Zt(Object,"create");const go=LR;function xR(){this.__data__=go?go(null):{},this.size=0}function IR(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var wR="__lodash_hash_undefined__",AR=Object.prototype,NR=AR.hasOwnProperty;function DR(e){var n=this.__data__;if(go){var t=n[e];return t===wR?void 0:t}return NR.call(n,e)?n[e]:void 0}var BR=Object.prototype,HR=BR.hasOwnProperty;function MR(e){var n=this.__data__;return go?n[e]!==void 0:HR.call(n,e)}var FR="__lodash_hash_undefined__";function $R(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=go&&n===void 0?FR:n,this}function Gt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Gt.prototype.clear=xR;Gt.prototype.delete=IR;Gt.prototype.get=DR;Gt.prototype.has=MR;Gt.prototype.set=$R;function jR(){this.__data__=[],this.size=0}function qi(e,n){for(var t=e.length;t--;)if(am(e[t][0],n))return t;return-1}var KR=Array.prototype,UR=KR.splice;function WR(e){var n=this.__data__,t=qi(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():UR.call(n,t,1),--this.size,!0}function zR(e){var n=this.__data__,t=qi(n,e);return t<0?void 0:n[t][1]}function GR(e){return qi(this.__data__,e)>-1}function qR(e,n){var t=this.__data__,r=qi(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}function lt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}lt.prototype.clear=jR;lt.prototype.delete=WR;lt.prototype.get=zR;lt.prototype.has=GR;lt.prototype.set=qR;var VR=Zt(Hn,"Map");const vo=VR;function JR(){this.size=0,this.__data__={hash:new Gt,map:new(vo||lt),string:new Gt}}function ZR(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Vi(e,n){var t=e.__data__;return ZR(n)?t[typeof n=="string"?"string":"hash"]:t.map}function YR(e){var n=Vi(this,e).delete(e);return this.size-=n?1:0,n}function XR(e){return Vi(this,e).get(e)}function QR(e){return Vi(this,e).has(e)}function eC(e,n){var t=Vi(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}function wr(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}wr.prototype.clear=JR;wr.prototype.delete=YR;wr.prototype.get=XR;wr.prototype.has=QR;wr.prototype.set=eC;function nC(e){return e==null?"":rm(e)}function Ji(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var Kd=Jn?Jn.isConcatSpreadable:void 0;function tC(e){return Ir(e)||pm(e)||!!(Kd&&e&&e[Kd])}function bm(e,n,t,r,o){var i=-1,s=e.length;for(t||(t=tC),o||(o=[]);++i<s;){var a=e[i];n>0&&t(a)?n>1?bm(a,n-1,t,r,o):Ji(o,a):r||(o[o.length]=a)}return o}var rC=hm(Object.getPrototypeOf,Object);const ym=rC;function oC(){this.__data__=new lt,this.size=0}function iC(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}function sC(e){return this.__data__.get(e)}function aC(e){return this.__data__.has(e)}var lC=200;function cC(e,n){var t=this.__data__;if(t instanceof lt){var r=t.__data__;if(!vo||r.length<lC-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new wr(r)}return t.set(e,n),this.size=t.size,this}function Ar(e){var n=this.__data__=new lt(e);this.size=n.size}Ar.prototype.clear=oC;Ar.prototype.delete=iC;Ar.prototype.get=sC;Ar.prototype.has=aC;Ar.prototype.set=cC;function dC(e,n){return e&&Gi(n,Cl(n),e)}function uC(e,n){return e&&Gi(n,Ll(n),e)}var Sm=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ud=Sm&&typeof module=="object"&&module&&!module.nodeType&&module,pC=Ud&&Ud.exports===Sm,Wd=pC?Hn.Buffer:void 0,zd=Wd?Wd.allocUnsafe:void 0;function fC(e,n){if(n)return e.slice();var t=e.length,r=zd?zd(t):new e.constructor(t);return e.copy(r),r}function mC(e,n){for(var t=-1,r=e==null?0:e.length,o=0,i=[];++t<r;){var s=e[t];n(s,t,e)&&(i[o++]=s)}return i}function Em(){return[]}var gC=Object.prototype,vC=gC.propertyIsEnumerable,Gd=Object.getOwnPropertySymbols,hC=Gd?function(e){return e==null?[]:(e=Object(e),mC(Gd(e),function(n){return vC.call(e,n)}))}:Em;const xl=hC;function bC(e,n){return Gi(e,xl(e),n)}var yC=Object.getOwnPropertySymbols,SC=yC?function(e){for(var n=[];e;)Ji(n,xl(e)),e=ym(e);return n}:Em;const Tm=SC;function EC(e,n){return Gi(e,Tm(e),n)}function _m(e,n,t){var r=n(e);return Ir(e)?r:Ji(r,t(e))}function TC(e){return _m(e,Cl,xl)}function _C(e){return _m(e,Ll,Tm)}var PC=Zt(Hn,"DataView");const Ra=PC;var kC=Zt(Hn,"Promise");const Ca=kC;var OC=Zt(Hn,"Set");const La=OC;var qd="[object Map]",RC="[object Object]",Vd="[object Promise]",Jd="[object Set]",Zd="[object WeakMap]",Yd="[object DataView]",CC=Jt(Ra),LC=Jt(vo),xC=Jt(Ca),IC=Jt(La),wC=Jt(Oa),Dt=Lr;(Ra&&Dt(new Ra(new ArrayBuffer(1)))!=Yd||vo&&Dt(new vo)!=qd||Ca&&Dt(Ca.resolve())!=Vd||La&&Dt(new La)!=Jd||Oa&&Dt(new Oa)!=Zd)&&(Dt=function(e){var n=Lr(e),t=n==RC?e.constructor:void 0,r=t?Jt(t):"";if(r)switch(r){case CC:return Yd;case LC:return qd;case xC:return Vd;case IC:return Jd;case wC:return Zd}return n});const Il=Dt;var AC=Object.prototype,NC=AC.hasOwnProperty;function DC(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&NC.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var BC=Hn.Uint8Array;const Xd=BC;function wl(e){var n=new e.constructor(e.byteLength);return new Xd(n).set(new Xd(e)),n}function HC(e,n){var t=n?wl(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var MC=/\w*$/;function FC(e){var n=new e.constructor(e.source,MC.exec(e));return n.lastIndex=e.lastIndex,n}var Qd=Jn?Jn.prototype:void 0,eu=Qd?Qd.valueOf:void 0;function $C(e){return eu?Object(eu.call(e)):{}}function jC(e,n){var t=n?wl(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var KC="[object Boolean]",UC="[object Date]",WC="[object Map]",zC="[object Number]",GC="[object RegExp]",qC="[object Set]",VC="[object String]",JC="[object Symbol]",ZC="[object ArrayBuffer]",YC="[object DataView]",XC="[object Float32Array]",QC="[object Float64Array]",eL="[object Int8Array]",nL="[object Int16Array]",tL="[object Int32Array]",rL="[object Uint8Array]",oL="[object Uint8ClampedArray]",iL="[object Uint16Array]",sL="[object Uint32Array]";function aL(e,n,t){var r=e.constructor;switch(n){case ZC:return wl(e);case KC:case UC:return new r(+e);case YC:return HC(e,t);case XC:case QC:case eL:case nL:case tL:case rL:case oL:case iL:case sL:return jC(e,t);case WC:return new r;case zC:case VC:return new r(e);case GC:return FC(e);case qC:return new r;case JC:return $C(e)}}function lL(e){return typeof e.constructor=="function"&&!Ol(e)?PO(ym(e)):{}}var cL="[object Map]";function dL(e){return xr(e)&&Il(e)==cL}var nu=yr&&yr.isMap,uL=nu?Rl(nu):dL;const pL=uL;var fL="[object Set]";function mL(e){return xr(e)&&Il(e)==fL}var tu=yr&&yr.isSet,gL=tu?Rl(tu):mL;const vL=gL;var hL=1,bL=2,yL=4,Pm="[object Arguments]",SL="[object Array]",EL="[object Boolean]",TL="[object Date]",_L="[object Error]",km="[object Function]",PL="[object GeneratorFunction]",kL="[object Map]",OL="[object Number]",Om="[object Object]",RL="[object RegExp]",CL="[object Set]",LL="[object String]",xL="[object Symbol]",IL="[object WeakMap]",wL="[object ArrayBuffer]",AL="[object DataView]",NL="[object Float32Array]",DL="[object Float64Array]",BL="[object Int8Array]",HL="[object Int16Array]",ML="[object Int32Array]",FL="[object Uint8Array]",$L="[object Uint8ClampedArray]",jL="[object Uint16Array]",KL="[object Uint32Array]",De={};De[Pm]=De[SL]=De[wL]=De[AL]=De[EL]=De[TL]=De[NL]=De[DL]=De[BL]=De[HL]=De[ML]=De[kL]=De[OL]=De[Om]=De[RL]=De[CL]=De[LL]=De[xL]=De[FL]=De[$L]=De[jL]=De[KL]=!0;De[_L]=De[km]=De[IL]=!1;function Xo(e,n,t,r,o,i){var s,a=n&hL,l=n&bL,d=n&yL;if(t&&(s=o?t(e,r,o,i):t(e)),s!==void 0)return s;if(!Rt(e))return e;var c=Ir(e);if(c){if(s=DC(e),!a)return im(e,s)}else{var p=Il(e),f=p==km||p==PL;if(mm(e))return fC(e,a);if(p==Om||p==Pm||f&&!o){if(s=l||f?{}:lL(e),!a)return l?EC(e,uC(s,e)):bC(e,dC(s,e))}else{if(!De[p])return o?e:{};s=aL(e,p,a)}}i||(i=new Ar);var m=i.get(e);if(m)return m;i.set(e,s),vL(e)?e.forEach(function(b){s.add(Xo(b,n,t,b,e,i))}):pL(e)&&e.forEach(function(b,y){s.set(y,Xo(b,n,t,y,e,i))});var h=d?l?_C:TC:l?Ll:Cl,S=c?void 0:h(e);return OO(S||e,function(b,y){S&&(y=b,b=e[y]),lm(s,y,Xo(b,n,t,y,e,i))}),s}var UL=1,WL=4;function zL(e){return Xo(e,UL|WL)}function GL(){var e=arguments.length;if(!e)return[];for(var n=Array(e-1),t=arguments[0],r=e;r--;)n[r-1]=arguments[r];return Ji(Ir(t)?im(t):[t],bm(n,1))}var qL=function(){return Hn.Date.now()};const qs=qL;var VL="Expected a function",JL=Math.max,ZL=Math.min;function YL(e,n,t){var r,o,i,s,a,l,d=0,c=!1,p=!1,f=!0;if(typeof e!="function")throw new TypeError(VL);n=Nd(n)||0,Rt(t)&&(c=!!t.leading,p="maxWait"in t,i=p?JL(Nd(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f);function m(D){var F=r,x=o;return r=o=void 0,d=D,s=e.apply(x,F),s}function h(D){return d=D,a=setTimeout(y,n),c?m(D):s}function S(D){var F=D-l,x=D-d,w=n-F;return p?ZL(w,i-x):w}function b(D){var F=D-l,x=D-d;return l===void 0||F>=n||F<0||p&&x>=i}function y(){var D=qs();if(b(D))return _(D);a=setTimeout(y,S(D))}function _(D){return a=void 0,f&&r?m(D):(r=o=void 0,s)}function k(){a!==void 0&&clearTimeout(a),d=0,r=l=o=a=void 0}function A(){return a===void 0?s:_(qs())}function R(){var D=qs(),F=b(D);if(r=arguments,o=this,l=D,F){if(a===void 0)return h(l);if(p)return clearTimeout(a),a=setTimeout(y,n),m(l)}return a===void 0&&(a=setTimeout(y,n)),s}return R.cancel=k,R.flush=A,R}var XL=0;function QL(e){var n=++XL;return nC(e)+n}const xa=tx();function ex(e,n){try{new Compartment({console:Rm(n),fetch:fetch.bind(window),utools:xa,electron:wk,Buffer:Ak,require:Nk}).evaluate(e)}catch(t){n&&n(null,[t])}}function nx(e,n){try{const t=new Function("console","utools","globalThis",`(function(){
${e}
})()`),r=Object.assign({},globalThis);r.utools=xa,t(Rm(n),xa,r)}catch(t){n&&n(null,[t])}}function Rm(e){return{log:(...n)=>e&&e(n),error:(...n)=>e&&e(null,n),warn:(...n)=>e&&e(null,null,n),info:(...n)=>e&&e(null,null,null,n)}}function tx(){if(!Vn)return{};const e=Object.assign({},zL(utools));return GL(["db","dbStorage","removeFeature","setFeature","onDbPull"],["fetchUserServerTemporaryToken","openPayment","fetchUserPayments"],["onPluginEnter","onPluginOut","createBrowserWindow"]).forEach(o=>{delete e[o]}),Object.freeze(e),e}function rx(){Vn&&(utools.onPluginEnter(({code:e,type:n,payload:t})=>{}),utools.db.replicateStateFromCloud()&&rt.warning({content:"数据可能不完整，还在从云端复制中"}))}try{fh(hh).use(kb).use(Rb()).use(QS).mount("#app"),rx()}catch(e){Vn&&utools.showNotification("初始化失败: "+e)}const ox=`interface UBrowser {
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
`,ix=`declare module 'assert' {
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
`,sx=`interface Clipboard {

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
`;self.MonacoEnvironment={getWorker(e,n){return n==="typescript"||n==="javascript"?new Lm:new xm}};cr.typescript.javascriptDefaults.addExtraLib(ox,"utools.api.d.ts");cr.typescript.javascriptDefaults.addExtraLib(ix,"node.api.d.ts");cr.typescript.javascriptDefaults.addExtraLib(sx,"electron.api.d.ts");cr.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1});cr.typescript.javascriptDefaults.setCompilerOptions({target:cr.typescript.ScriptTarget.ES2016,allowNonTsExtensions:!0,allowJs:!0});const ax={class:"editor"},lx=re({__name:"Editor",props:{code:{type:String,default:""}},emits:["codeChange","runCode"],setup(e,{emit:n}){const t=e,r=ze(fp),o=le(null);let i=null;en(()=>r==null?void 0:r.value,()=>s()),en(()=>t.code,()=>{(i==null?void 0:i.getValue())!==t.code&&(i==null||i.setValue(t.code))}),dn(()=>{s()}),qt(()=>{i==null||i.dispose()});function s(){var a;i&&(i.dispose(),i=null),i=Im.create(o.value,{value:t.code,language:"javascript",theme:r!=null&&r.value?"vs-dark":"vs",tabSize:2,minimap:{enabled:!1},automaticLayout:!0}),i.addAction({id:"run",label:"Run",keybindings:[wm.CtrlCmd|Am.KeyR],contextMenuGroupId:"navigation",run:()=>n("runCode")}),(a=i.getModel())==null||a.onDidChangeContent(YL(()=>{n("codeChange",i.getValue())},500)),i.focus()}return(a,l)=>(q(),se("div",ax,[ue("div",{class:"instance",ref_key:"editorRef",ref:o},null,512)]))}});const Zi=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},cx=Zi(lx,[["__scopeId","data-v-b69e3a49"]]),dx={class:"console"},ux={key:0,class:"empty-tip"},px=["onClick"],fx=re({__name:"Console",props:{messages:null},setup(e){const n=e,t=le(null);en(()=>n.messages.length,()=>{var l,d;const i=t.value;if(!i)return;const s=i[i.length-1],a=(d=(l=s==null?void 0:s.parentElement)==null?void 0:l.parentElement)==null?void 0:d.parentElement;s&&a&&zt(()=>a.scrollTop=s.offsetTop)});function r(i){return be(i).map(s=>Zo(s)==="Array"||Zo(s)==="Object"?JSON.stringify(s):Zo(s)==="String"?`"${s}"`:s).join(`
`)}function o(i){g_(String(i))?rt.success("复制成功"):rt.error("复制失败")}return(i,s)=>{const a=To;return q(),se("div",dx,[G(yo,{name:"emerge",mode:"out-in"},{default:ee(()=>[e.messages.length?(q(),$e(up,{key:1,name:"emerge",tag:"div"},{default:ee(()=>[(q(!0),se(Qe,null,Va(e.messages,l=>(q(),se("div",{ref_for:!0,ref_key:"msgContainerRef",ref:t,key:l.id,class:X({message:!0,"message-log":!l.type||l.type==="log","message-warn":l.type==="warn","message-error":l.type==="error","message-info":l.type==="info"})},[G(a,{class:"time-status",size:"mini",type:"text",onClick:d=>o(l.timeStamp)},{default:ee(()=>[Ln(bt(Ie(qp)(l.timeStamp).split(" ")[1]),1)]),_:2},1032,["onClick"]),ue("div",{class:"content",onClick:d=>o(r(l.content))},bt(r(l.content)),9,px)],2))),128))]),_:1})):(q(),se("div",ux,"控制台为空"))]),_:1})])}}});const mx=Zi(fx,[["__scopeId","data-v-3b378378"]]),gx=wb("CodeSrore",{state:()=>({id:0,code:"",messages:[],env:Vn?vt("env")||"node":"browser",historys:[],mode:vt("mode")||"ontime"}),getters:{codeWithId:e=>`code/${e.id}`,currentEnv:e=>e.env==="browser"?"浏览器":"Node.js",currentMode:e=>e.mode==="ontime"?"即时执行":"手动触发"},actions:{newCode(){this.id!==0&&rt.success("成功创建新代码片段"),this.clearMessages(),this.id=new Date().getTime(),this.code=vt("lastCodeId")?"":'console.log("Hello, World!")',Nt(this.codeWithId,this.code),Nt("lastCodeId",this.id)},loadCode(e){this.clearMessages();const n=vt(`code/${e}`);if(Zo(n)==="Null")return this.newCode();this.id=e,this.code=n},handleCodeChange(e){this.code=e,Nt(this.codeWithId,this.code),this.mode==="ontime"&&this.execCode()},pushMessage(e){e&&this.messages.push(e)},clearMessages(){this.messages=[]},changeEnv(){if(!Vn)return rt.warning("当前环境不支持切换运行环境");this.env=this.env==="browser"?"node":"browser",this.env==="browser"?Nt("env","browser"):Ho("env")},changeMode(){this.mode=this.mode==="manual"?"ontime":"manual",this.mode==="ontime"?(Nt("mode","ontime"),this.execCode()):Ho("mode")},loadHistorys(){const e=id("code/");if(!e||!e.length)return;e.sort((t,r)=>parseInt(t._id.split("/")[1])-parseInt(r._id.split("/")[1])),e.splice(0,e.length-25).forEach(t=>Ho(t._id)),this.historys=e.map(t=>({id:t._id,timeStamp:parseInt(t._id.split("/")[1]),code:t.data}))},readHistory(e){this.loadCode(e),Nt("lastCodeId",this.id)},emptyHistory(){this.historys=this.historys.filter(e=>(e.id,this.codeWithId,e.id===this.codeWithId)),id("code/").forEach(e=>e._id!==this.codeWithId&&Ho(e._id)),rt.success("清空历史记录成功")},execCode(){if(!this.code)return rt.warning("当前代码为空");const e=(n,t)=>{const r=QL(),o=new Date().getTime();n&&(n!=null&&n.length)&&this.pushMessage({id:r,timeStamp:o,type:"log",content:n}),t&&this.pushMessage({id:r,timeStamp:o,type:"error",content:t})};this.env==="browser"?nx(this.code,e):ex(this.code,e)}}}),vx={class:"runner"},hx={class:"btns"},bx=re({__name:"Runner",setup(e){const n=le(vt("size")||.75),t=gx(),r=vt("lastCodeId")||0;return en(n,o=>Nt("size",o)),dn(()=>t.loadCode(r)),(o,i)=>{const s=ye("icon-plus"),a=To,l=ZT,d=ye("icon-thunderbolt"),c=ye("icon-stop"),p=ye("icon-info-circle"),f=ye("icon-file"),m=Yr,h=HT,S=m_;return q(),se("div",vx,[ue("div",hx,[G(l,{content:"创建新代码片段"},{default:ee(()=>[G(a,{onClick:Ie(t).newCode},{default:ee(()=>[G(s)]),_:1},8,["onClick"])]),_:1}),G(l,{content:"运行代码"},{default:ee(()=>[G(a,{onClick:Ie(t).execCode},{default:ee(()=>[G(d)]),_:1},8,["onClick"])]),_:1}),G(l,{content:"清空控制台"},{default:ee(()=>[G(a,{onClick:Ie(t).clearMessages},{default:ee(()=>[G(c)]),_:1},8,["onClick"])]),_:1}),G(l,{content:"关于"},{default:ee(()=>[G(a,{onClick:i[0]||(i[0]=b=>o.$router.push("/about"))},{default:ee(()=>[G(p)]),_:1})]),_:1}),G(a,{class:"width-80",onClick:Ie(t).changeEnv},{default:ee(()=>[Ln(bt(Ie(t).currentEnv),1)]),_:1},8,["onClick"]),G(a,{class:"width-80",onClick:Ie(t).changeMode},{default:ee(()=>[Ln(bt(Ie(t).currentMode),1)]),_:1},8,["onClick"]),G(h,{"popup-max-height":!1},{content:ee(()=>[(q(!0),se(Qe,null,Va(Ie(t).historys,b=>(q(),$e(m,{class:X({"active-option":b.id===Ie(t).codeWithId}),onClick:y=>Ie(t).readHistory(b.timeStamp)},{icon:ee(()=>[G(f)]),default:ee(()=>[Ln(" "+bt(Ie(qp)(b.timeStamp)),1)]),_:2},1032,["class","onClick"]))),256))]),footer:ee(()=>[G(m,{onClick:Ie(t).emptyHistory},{default:ee(()=>[Ln("清空代码历史")]),_:1},8,["onClick"])]),default:ee(()=>[G(a,{class:"flex-fill",onClick:Ie(t).loadHistorys},{default:ee(()=>[Ln("代码历史回溯")]),_:1},8,["onClick"])]),_:1})]),G(S,{size:Ie(n),"onUpdate:size":i[1]||(i[1]=b=>We(n)?n.value=b:null),min:.1,max:.8},{first:ee(()=>[G(cx,{code:Ie(t).code,onCodeChange:Ie(t).handleCodeChange,onRunCode:Ie(t).execCode},null,8,["code","onCodeChange","onRunCode"])]),second:ee(()=>[G(mx,{messages:Ie(t).messages},null,8,["messages"])]),_:1},8,["size","min","max"])])}}});const yx=Zi(bx,[["__scopeId","data-v-8417b993"]]),Sx=Object.freeze(Object.defineProperty({__proto__:null,default:yx},Symbol.toStringTag,{value:"Module"}));function Ex(e,n,t,r){dn(()=>{e.addEventListener(n,t,r)}),qt(()=>{e.removeEventListener(n,t,r)})}function Cm(){const e=Pb(),n=()=>e.back();return Ex(document,"keydown",t=>{t.key==="Escape"&&(n(),t.stopPropagation())}),{BackButton:()=>uo(To,{class:"back",onClick:n,shape:"circle"},()=>uo(Jb))}}const Tx={class:"setting"},_x=re({__name:"Setting",setup(e){const{BackButton:n}=Cm();return(t,r)=>(q(),se("div",Tx,[G(Ie(n))]))}}),Px=Object.freeze(Object.defineProperty({__proto__:null,default:_x},Symbol.toStringTag,{value:"Module"}));const kx=""+new URL("../logo.png",import.meta.url).href,Al=e=>(Bg("data-v-a4fe1dd1"),e=e(),Hg(),e),Ox={class:"about"},Rx=Al(()=>ue("img",{class:"bg-icon",src:kx,alt:"logo"},null,-1)),Cx=Al(()=>ue("h1",{class:"title"},"超级JavaScript",-1)),Lx={class:"footer-btns"},xx=Al(()=>ue("div",{class:"footer-tip"},"Copyright © 2019-present ZiuChen",-1)),Ix=re({__name:"About",setup(e){const n=[{text:"插件主页",url:"https://ziuchen.gitee.io/project/JSRunner/"},{text:"开源地址",url:"https://github.com/ZiuChen/JSRunner"},{text:"更新日志",url:"https://ziuchen.gitee.io/project/JSRunner/log/"}],{BackButton:t}=Cm();return(r,o)=>{const i=WT,s=To;return q(),se("div",Ox,[Rx,Cx,G(i,{onClick:o[0]||(o[0]=a=>Ie(sd)("https://github.com/ZiuChen"))},{default:ee(()=>[Ln("ZiuChen")]),_:1}),ue("div",Lx,[(q(),se(Qe,null,Va(n,a=>G(s,{onClick:l=>Ie(sd)(a.url)},{default:ee(()=>[Ln(bt(a.text),1)]),_:2},1032,["onClick"])),64))]),xx,G(Ie(t))])}}});const wx=Zi(Ix,[["__scopeId","data-v-a4fe1dd1"]]),Ax=Object.freeze(Object.defineProperty({__proto__:null,default:wx},Symbol.toStringTag,{value:"Module"}));export{ss as _};
