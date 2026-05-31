import{r as e,t}from"./rolldown-runtime-QTnfLwEv.js";import{$ as n,At as r,B as i,Bt as a,Ct as o,Dt as s,F as c,G as l,Ht as u,It as d,K as f,L as p,Pt as m,Q as h,R as ee,St as g,U as te,Ut as _,Vt as ne,X as v,Y as y,Z as b,_ as x,_t as S,a as C,at as w,bt as T,dt as E,et as D,ft as O,g as re,gt as k,jt as A,kt as j,lt as M,mt as N,nt as P,ot as ie,q as F,rt as ae,st as I,tt as L,ut as oe,v as se,xt as R,yt as ce,zt as le}from"./arco-DanDg0-s.js";import{a as ue,c as de,o as fe,s as pe}from"./vendor-C2zXIWWk.js";import{n as me,t as z}from"./_plugin-vue_export-helper-DPaLQ2Pt.js";import{a as he,c as ge,d as B,f as _e,g as ve,i as ye,m as be,n as xe,o as Se,p as Ce,r as we,s as V,t as Te,u as H}from"./monaco-D9RRwyKR.js";import{_ as U,a as Ee,c as De,d as Oe,f as ke,g as Ae,h as je,i as Me,l as Ne,m as Pe,n as Fe,o as Ie,p as Le,r as Re,s as ze,t as Be,u as Ve,v as He}from"./index-CQIeIgtz.js";import{t as Ue}from"./babel-ZK5olXK7.js";var We=Array.isArray,Ge=`[object AsyncFunction]`,Ke=`[object Function]`,qe=`[object GeneratorFunction]`,Je=`[object Proxy]`;function Ye(e){if(!Le(e))return!1;var t=je(e);return t==Ke||t==qe||t==Ge||t==Je}var Xe=U[`__core-js_shared__`],Ze=function(){var e=/[^.]+$/.exec(Xe&&Xe.keys&&Xe.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function Qe(e){return!!Ze&&Ze in e}var $e=Function.prototype.toString;function W(e){if(e!=null){try{return $e.call(e)}catch{}try{return e+``}catch{}}return``}var et=/[\\^$.*+?()[\]{}|]/g,tt=/^\[object .+?Constructor\]$/,nt=Function.prototype,rt=Object.prototype,it=nt.toString,at=rt.hasOwnProperty,ot=RegExp(`^`+it.call(at).replace(et,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function st(e){return!Le(e)||Qe(e)?!1:(Ye(e)?ot:tt).test(W(e))}function ct(e,t){return e?.[t]}function G(e,t){var n=ct(e,t);return st(n)?n:void 0}var lt=G(U,`WeakMap`),ut=Object.create,dt=function(){function e(){}return function(t){if(!Le(t))return{};if(ut)return ut(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function ft(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}var pt=function(){try{var e=G(Object,`defineProperty`);return e({},``,{}),e}catch{}}();function mt(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var ht=9007199254740991,gt=/^(?:0|[1-9]\d*)$/;function _t(e,t){var n=typeof e;return t??=ht,!!t&&(n==`number`||n!=`symbol`&&gt.test(e))&&e>-1&&e%1==0&&e<t}function vt(e,t,n){t==`__proto__`&&pt?pt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function yt(e,t){return e===t||e!==e&&t!==t}var bt=Object.prototype.hasOwnProperty;function xt(e,t,n){var r=e[t];(!(bt.call(e,t)&&yt(r,n))||n===void 0&&!(t in e))&&vt(e,t,n)}function St(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?vt(n,s,c):xt(n,s,c)}return n}var Ct=9007199254740991;function wt(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=Ct}function Tt(e){return e!=null&&wt(e.length)&&!Ye(e)}var Et=Object.prototype;function Dt(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||Et)}function Ot(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var kt=`[object Arguments]`;function At(e){return Pe(e)&&je(e)==kt}var jt=Object.prototype,Mt=jt.hasOwnProperty,Nt=jt.propertyIsEnumerable,Pt=At(function(){return arguments}())?At:function(e){return Pe(e)&&Mt.call(e,`callee`)&&!Nt.call(e,`callee`)};function Ft(){return!1}var It=typeof exports==`object`&&exports&&!exports.nodeType&&exports,Lt=It&&typeof module==`object`&&module&&!module.nodeType&&module,Rt=Lt&&Lt.exports===It?U.Buffer:void 0,zt=(Rt?Rt.isBuffer:void 0)||Ft,Bt=`[object Arguments]`,Vt=`[object Array]`,Ht=`[object Boolean]`,Ut=`[object Date]`,Wt=`[object Error]`,Gt=`[object Function]`,Kt=`[object Map]`,qt=`[object Number]`,Jt=`[object Object]`,Yt=`[object RegExp]`,Xt=`[object Set]`,Zt=`[object String]`,Qt=`[object WeakMap]`,$t=`[object ArrayBuffer]`,en=`[object DataView]`,tn=`[object Float32Array]`,nn=`[object Float64Array]`,rn=`[object Int8Array]`,an=`[object Int16Array]`,on=`[object Int32Array]`,sn=`[object Uint8Array]`,cn=`[object Uint8ClampedArray]`,ln=`[object Uint16Array]`,un=`[object Uint32Array]`,K={};K[tn]=K[nn]=K[rn]=K[an]=K[on]=K[sn]=K[cn]=K[ln]=K[un]=!0,K[Bt]=K[Vt]=K[$t]=K[Ht]=K[en]=K[Ut]=K[Wt]=K[Gt]=K[Kt]=K[qt]=K[Jt]=K[Yt]=K[Xt]=K[Zt]=K[Qt]=!1;function dn(e){return Pe(e)&&wt(e.length)&&!!K[je(e)]}function fn(e){return function(t){return e(t)}}var pn=typeof exports==`object`&&exports&&!exports.nodeType&&exports,mn=pn&&typeof module==`object`&&module&&!module.nodeType&&module,hn=mn&&mn.exports===pn&&He.process,q=function(){try{return mn&&mn.require&&mn.require(`util`).types||hn&&hn.binding&&hn.binding(`util`)}catch{}}(),gn=q&&q.isTypedArray,_n=gn?fn(gn):dn,vn=Object.prototype.hasOwnProperty;function yn(e,t){var n=We(e),r=!n&&Pt(e),i=!n&&!r&&zt(e),a=!n&&!r&&!i&&_n(e),o=n||r||i||a,s=o?Ot(e.length,String):[],c=s.length;for(var l in e)(t||vn.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||_t(l,c)))&&s.push(l);return s}function bn(e,t){return function(n){return e(t(n))}}var xn=bn(Object.keys,Object),Sn=Object.prototype.hasOwnProperty;function Cn(e){if(!Dt(e))return xn(e);var t=[];for(var n in Object(e))Sn.call(e,n)&&n!=`constructor`&&t.push(n);return t}function wn(e){return Tt(e)?yn(e):Cn(e)}function Tn(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var En=Object.prototype.hasOwnProperty;function Dn(e){if(!Le(e))return Tn(e);var t=Dt(e),n=[];for(var r in e)r==`constructor`&&(t||!En.call(e,r))||n.push(r);return n}function On(e){return Tt(e)?yn(e,!0):Dn(e)}var kn=G(Object,`create`);function An(){this.__data__=kn?kn(null):{},this.size=0}function jn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var Mn=`__lodash_hash_undefined__`,Nn=Object.prototype.hasOwnProperty;function Pn(e){var t=this.__data__;if(kn){var n=t[e];return n===Mn?void 0:n}return Nn.call(t,e)?t[e]:void 0}var Fn=Object.prototype.hasOwnProperty;function In(e){var t=this.__data__;return kn?t[e]!==void 0:Fn.call(t,e)}var Ln=`__lodash_hash_undefined__`;function Rn(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=kn&&t===void 0?Ln:t,this}function J(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}J.prototype.clear=An,J.prototype.delete=jn,J.prototype.get=Pn,J.prototype.has=In,J.prototype.set=Rn;function zn(){this.__data__=[],this.size=0}function Bn(e,t){for(var n=e.length;n--;)if(yt(e[n][0],t))return n;return-1}var Vn=Array.prototype.splice;function Hn(e){var t=this.__data__,n=Bn(t,e);return n<0?!1:(n==t.length-1?t.pop():Vn.call(t,n,1),--this.size,!0)}function Un(e){var t=this.__data__,n=Bn(t,e);return n<0?void 0:t[n][1]}function Wn(e){return Bn(this.__data__,e)>-1}function Gn(e,t){var n=this.__data__,r=Bn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Y(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Y.prototype.clear=zn,Y.prototype.delete=Hn,Y.prototype.get=Un,Y.prototype.has=Wn,Y.prototype.set=Gn;var Kn=G(U,`Map`);function qn(){this.size=0,this.__data__={hash:new J,map:new(Kn||Y),string:new J}}function Jn(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Yn(e,t){var n=e.__data__;return Jn(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Xn(e){var t=Yn(this,e).delete(e);return this.size-=+!!t,t}function Zn(e){return Yn(this,e).get(e)}function Qn(e){return Yn(this,e).has(e)}function $n(e,t){var n=Yn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function X(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}X.prototype.clear=qn,X.prototype.delete=Xn,X.prototype.get=Zn,X.prototype.has=Qn,X.prototype.set=$n;function er(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var tr=Ae?Ae.isConcatSpreadable:void 0;function nr(e){return We(e)||Pt(e)||!!(tr&&e&&e[tr])}function rr(e,t,n,r,i){var a=-1,o=e.length;for(n||=nr,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?rr(s,t-1,n,r,i):er(i,s):r||(i[i.length]=s)}return i}var ir=bn(Object.getPrototypeOf,Object);function ar(){this.__data__=new Y,this.size=0}function or(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function sr(e){return this.__data__.get(e)}function cr(e){return this.__data__.has(e)}var lr=200;function ur(e,t){var n=this.__data__;if(n instanceof Y){var r=n.__data__;if(!Kn||r.length<lr-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new X(r)}return n.set(e,t),this.size=n.size,this}function Z(e){var t=this.__data__=new Y(e);this.size=t.size}Z.prototype.clear=ar,Z.prototype.delete=or,Z.prototype.get=sr,Z.prototype.has=cr,Z.prototype.set=ur;function dr(e,t){return e&&St(t,wn(t),e)}function fr(e,t){return e&&St(t,On(t),e)}var pr=typeof exports==`object`&&exports&&!exports.nodeType&&exports,mr=pr&&typeof module==`object`&&module&&!module.nodeType&&module,hr=mr&&mr.exports===pr?U.Buffer:void 0,gr=hr?hr.allocUnsafe:void 0;function _r(e,t){if(t)return e.slice();var n=e.length,r=gr?gr(n):new e.constructor(n);return e.copy(r),r}function vr(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function yr(){return[]}var br=Object.prototype.propertyIsEnumerable,xr=Object.getOwnPropertySymbols,Sr=xr?function(e){return e==null?[]:(e=Object(e),vr(xr(e),function(t){return br.call(e,t)}))}:yr;function Cr(e,t){return St(e,Sr(e),t)}var wr=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)er(t,Sr(e)),e=ir(e);return t}:yr;function Tr(e,t){return St(e,wr(e),t)}function Er(e,t,n){var r=t(e);return We(e)?r:er(r,n(e))}function Dr(e){return Er(e,wn,Sr)}function Or(e){return Er(e,On,wr)}var kr=G(U,`DataView`),Ar=G(U,`Promise`),jr=G(U,`Set`),Mr=`[object Map]`,Nr=`[object Object]`,Pr=`[object Promise]`,Fr=`[object Set]`,Ir=`[object WeakMap]`,Lr=`[object DataView]`,Rr=W(kr),zr=W(Kn),Br=W(Ar),Vr=W(jr),Hr=W(lt),Q=je;(kr&&Q(new kr(new ArrayBuffer(1)))!=Lr||Kn&&Q(new Kn)!=Mr||Ar&&Q(Ar.resolve())!=Pr||jr&&Q(new jr)!=Fr||lt&&Q(new lt)!=Ir)&&(Q=function(e){var t=je(e),n=t==Nr?e.constructor:void 0,r=n?W(n):``;if(r)switch(r){case Rr:return Lr;case zr:return Mr;case Br:return Pr;case Vr:return Fr;case Hr:return Ir}return t});var Ur=Q,Wr=Object.prototype.hasOwnProperty;function Gr(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&Wr.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}var Kr=U.Uint8Array;function qr(e){var t=new e.constructor(e.byteLength);return new Kr(t).set(new Kr(e)),t}function Jr(e,t){var n=t?qr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Yr=/\w*$/;function Xr(e){var t=new e.constructor(e.source,Yr.exec(e));return t.lastIndex=e.lastIndex,t}var Zr=Ae?Ae.prototype:void 0,Qr=Zr?Zr.valueOf:void 0;function $r(e){return Qr?Object(Qr.call(e)):{}}function ei(e,t){var n=t?qr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var ti=`[object Boolean]`,ni=`[object Date]`,ri=`[object Map]`,ii=`[object Number]`,ai=`[object RegExp]`,oi=`[object Set]`,si=`[object String]`,ci=`[object Symbol]`,li=`[object ArrayBuffer]`,ui=`[object DataView]`,di=`[object Float32Array]`,fi=`[object Float64Array]`,pi=`[object Int8Array]`,mi=`[object Int16Array]`,hi=`[object Int32Array]`,gi=`[object Uint8Array]`,_i=`[object Uint8ClampedArray]`,vi=`[object Uint16Array]`,yi=`[object Uint32Array]`;function bi(e,t,n){var r=e.constructor;switch(t){case li:return qr(e);case ti:case ni:return new r(+e);case ui:return Jr(e,n);case di:case fi:case pi:case mi:case hi:case gi:case _i:case vi:case yi:return ei(e,n);case ri:return new r;case ii:case si:return new r(e);case ai:return Xr(e);case oi:return new r;case ci:return $r(e)}}function xi(e){return typeof e.constructor==`function`&&!Dt(e)?dt(ir(e)):{}}var Si=`[object Map]`;function Ci(e){return Pe(e)&&Ur(e)==Si}var wi=q&&q.isMap,Ti=wi?fn(wi):Ci,Ei=`[object Set]`;function Di(e){return Pe(e)&&Ur(e)==Ei}var Oi=q&&q.isSet,ki=Oi?fn(Oi):Di,Ai=1,ji=2,Mi=4,Ni=`[object Arguments]`,Pi=`[object Array]`,Fi=`[object Boolean]`,Ii=`[object Date]`,Li=`[object Error]`,Ri=`[object Function]`,zi=`[object GeneratorFunction]`,Bi=`[object Map]`,Vi=`[object Number]`,Hi=`[object Object]`,Ui=`[object RegExp]`,Wi=`[object Set]`,Gi=`[object String]`,Ki=`[object Symbol]`,qi=`[object WeakMap]`,Ji=`[object ArrayBuffer]`,Yi=`[object DataView]`,Xi=`[object Float32Array]`,Zi=`[object Float64Array]`,Qi=`[object Int8Array]`,$i=`[object Int16Array]`,ea=`[object Int32Array]`,ta=`[object Uint8Array]`,na=`[object Uint8ClampedArray]`,ra=`[object Uint16Array]`,ia=`[object Uint32Array]`,$={};$[Ni]=$[Pi]=$[Ji]=$[Yi]=$[Fi]=$[Ii]=$[Xi]=$[Zi]=$[Qi]=$[$i]=$[ea]=$[Bi]=$[Vi]=$[Hi]=$[Ui]=$[Wi]=$[Gi]=$[Ki]=$[ta]=$[na]=$[ra]=$[ia]=!0,$[Li]=$[Ri]=$[qi]=!1;function aa(e,t,n,r,i,a){var o,s=t&Ai,c=t&ji,l=t&Mi;if(n&&(o=i?n(e,r,i,a):n(e)),o!==void 0)return o;if(!Le(e))return e;var u=We(e);if(u){if(o=Gr(e),!s)return ft(e,o)}else{var d=Ur(e),f=d==Ri||d==zi;if(zt(e))return _r(e,s);if(d==Hi||d==Ni||f&&!i){if(o=c||f?{}:xi(e),!s)return c?Tr(e,fr(o,e)):Cr(e,dr(o,e))}else{if(!$[d])return i?e:{};o=bi(e,d,s)}}a||=new Z;var p=a.get(e);if(p)return p;a.set(e,o),ki(e)?e.forEach(function(r){o.add(aa(r,t,n,r,e,a))}):Ti(e)&&e.forEach(function(r,i){o.set(i,aa(r,t,n,i,e,a))});var m=u?void 0:(l?c?Or:Dr:c?On:wn)(e);return mt(m||e,function(r,i){m&&(i=r,r=e[i]),xt(o,i,aa(r,t,n,i,e,a))}),o}var oa=1,sa=4;function ca(e){return aa(e,oa|sa)}function la(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return er(We(n)?ft(n):[n],rr(t,1))}var ua=`type Sharp = sharp.Sharp
type SharpOptions = sharp.SharpOptions

interface UtoolsAiModel {
  id: string
  label: string
  description: string
  icon: string
  cost: number
}
interface UtoolsAiResult<T> extends Promise<T> {
  abort(): void
}

interface UtoolsAiMessage {
  role: 'system' | 'user' | 'assistant'
  content?: string
  reasoning_content?: string
}

interface UtoolsAiTool {
  type: 'function'
  function?: {
    name: string
    description: string
    parameters: {
      type: 'object'
      properties: Record<string, any>
    }
    required?: string[]
  }
}

interface UtoolsAiOption {
  model?: string
  messages: UtoolsAiMessage[]
  tools?: UtoolsAiTool[]
}

interface CookieFilter {
  url?: string
  name?: string
  domain?: string
  path?: string
  secure?: boolean
  session?: boolean
  httpOnly?: boolean
}

interface UBrowser {
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
  press(key: string, ...modifier: ('ctrl' | 'shift' | 'alt' | 'meta')[]): this
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
   * 转为 markdown 文本
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   */
  markdown(selector?: string): this
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
  device(arg: { size: { width: number; height: number }; useragent: string }): this
  /**
   * 获取当前 URL 的 Cookie。
   * @param name 可选，指定 Cookie 名称。如果未传入，则返回当前 URL 的所有 Cookie。
   */
  cookies(name?: string): this
  /**
   * 根据条件获取 Cookie。
   * @param filter 条件过滤对象，例如 { name: string, domain?: string }。
   */
  cookies(filter: CookieFilter): this
  /**
   * 设置单个 Cookie。
   * @param name Cookie 名称
   * @param value Cookie 值
   */
  setCookies(name: string, value: string): this
  /**
   * 批量设置 Cookie。
   * @param cookies Cookie 数组，每个元素包含 name 和 value。
   */
  setCookies(cookies: { name: string; value: string }[]): this
  /**
   * 删除指定 Cookie。
   * @param name Cookie 名称
   */
  removeCookies(name: string): this
  /**
   * 清空 Cookie。
   * @param url 可选，指定 URL。若在执行 "goto" 前调用，url 参数必填。
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
  evaluate<T extends any[]>(func: (...params: T) => any, ...params: T): this
  /**
   * 等待指定的时间。
   * @param ms 等待时长（毫秒）
   */
  wait(ms: number): this
  /**
   * 等待元素满足条件。
   *
   * 默认行为：等待元素出现。
   *
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param options 等待选项
   *  - result: true 等待出现，false 等待消失（默认 true）
   *  - timeout: 超时时间，默认 60000 ms
   *  - interval: 轮询间隔（毫秒），默认 500 ms
   */
  wait(selector: string, options?: { result?: boolean; timeout?: number; interval?: number }): this
  /**
   * 等待元素满足条件（简写形式）。
   *
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param result 为 true 等待出现，为 false 等待消失（默认 true）
   */
  wait(selector: string, result?: boolean): this
  /**
   * 等待元素出现，指定超时时间（简写形式）。
   *
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param timeout 超时时间（毫秒）
   */
  wait(selector: string, timeout?: number): this
  /**
   * 等待 JS 函数执行结果为 true。
   *
   * 该函数将被周期性执行，直到返回 true 或超时。
   *
   * @param func 判定函数，返回 true 表示条件满足
   * @param timeout 超时时间，默认 60000 ms
   * @param params 传递给 func 的参数
   */
  wait<T extends any[]>(func: (...params: T) => boolean, timeout?: number, ...params: T): this
  /**
   * 等待 JS 函数执行结果为 true。
   *
   * 该函数将被周期性执行，直到返回 true 或超时。
   *
   * @param func 判定函数，返回 true 表示条件满足
   * @param options 等待选项
   *  - timeout: 超时时间，默认 60000 ms
   *  - interval: 轮询间隔（毫秒），默认 500 ms
   * @param params 传递给 func 的参数
   */
  wait<T extends any[]>(
    func: (...params: T) => boolean,
    options?: { timeout?: number; interval?: number },
    ...params: T
  ): this
  /**
   * 当元素满足条件时，直到碰到 end
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param result 可选，为 true 表示当元素存在时，为 false 表示当元素不存在时（默认 true）
   */
  when(selector: string, result?: boolean): this
  /**
   * 当 JS 函数执行返回 true 时，直到碰到 end
   * @param func 执行的JS函数
   * @param params 传到 func 中的参数
   */
  when<T extends any[]>(func: (...params: T) => boolean, ...params: T): this
  /**
   * 配合 when 使用
   */
  end(): this
  /**
   * 单击指定元素
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param button 可选，鼠标按键；当设置该参数时，将以物理方式执行操作
   */
  click(selector: string, button?: 'left' | 'middle' | 'right'): this
  /**
   * 单击坐标位置
   * @param x 窗口 X 坐标
   * @param y 窗口 Y 坐标
   * @param button 可选，鼠标按键，默认为 'left'
   */
  click(x: number, y: number, button?: 'left' | 'middle' | 'right'): this
  /**
   * 双击指定元素
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param button 可选，鼠标按键；当设置该参数时，将以物理方式执行操作
   */
  dblclick(selector: string, button?: 'left' | 'middle' | 'right'): this
  /**
   * 双击坐标位置
   * @param x 窗口 X 坐标
   * @param y 窗口 Y 坐标
   * @param button 可选，鼠标按键，默认为 'left'
   */
  dblclick(x: number, y: number, button?: 'left' | 'middle' | 'right'): this
  /**
   * 在指定元素按下鼠标键（mousedown）
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param button 可选，鼠标按键；当设置该参数时，将以物理方式执行操作
   */
  mousedown(selector: string, button?: 'left' | 'middle' | 'right'): this
  /**
   * 在坐标位置按下鼠标键
   * @param x 窗口 X 坐标
   * @param y 窗口 Y 坐标
   * @param button 可选，鼠标按键，默认为 'left'
   */
  mousedown(x: number, y: number, button?: 'left' | 'middle' | 'right'): this
  /**
   * 在指定元素释放鼠标键（mouseup）
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param button 可选，鼠标按键；当设置该参数时，将以物理方式执行操作
   */
  mouseup(selector: string, button?: 'left' | 'middle' | 'right'): this
  /**
   * 在坐标位置释放鼠标键
   * @param x 窗口 X 坐标
   * @param y 窗口 Y 坐标
   * @param button 可选，鼠标按键，默认为 'left'
   */
  mouseup(x: number, y: number, button?: 'left' | 'middle' | 'right'): this
  /**
   * 移动鼠标到元素
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   */
  hover(selector: string): this
  /**
   * 移动鼠标到坐标。
   * @param x 窗口 X 坐标
   * @param y 窗口 Y 坐标
   */
  hover(x: number, y: number): this
  /**
   * 上传文件（必须为 input[type=file]）
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param payload 文件内容，可为以下类型：
   *  - string：文件路径或图像的 base64 Data URL
   *  - string[]：多个文件路径
   *  - Uint8Array[]：文件 Buffer
   */
  file(selector: string, payload: string | string[] | Uint8Array): this
  /**
   * 拖放文件到指定元素
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param payload 文件内容，可为以下类型：
   *  - string：文件路径或图像的 base64 Data URL
   *  - string[]：多个文件路径
   *  - Uint8Array[]：文件 Buffer
   */
  drop(selector: string, payload: string | string[] | Uint8Array): this
  /**
   * 拖放文件到指定坐标
   * @param x 窗口 X 坐标
   * @param y 窗口 Y 坐标
   * @param payload 文件内容，可为以下类型：
   *  - string：文件路径或图像的 base64 Data URL
   *  - string[]：多个文件路径
   *  - Uint8Array[]：多个文件的二进制数据
   */
  drop(x: number, y: number, payload: string | string[] | Uint8Array): this
  /**
   * 输入文本，模拟输入法输入，不触发键盘按键事件
   * @param text 字符串文本
   */
  input(text: string): this
  /**
   * 元素获得焦点后，输入文本，模拟输入法输入，不触发键盘按键事件
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param text 字符串文本
   */
  input(selector: string, text: string): this
  /**
   * input、textarea、select 等元素赋值
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param value 元素的值
   */
  value(selector: string, value: string): this
  /**
   * checkbox radio 元素选中或取消选中
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   */
  check(selector: string, checked: boolean): this
  /**
   * 元素获得焦点
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   */
  focus(selector: string): this
  /**
   * 滚动到指定元素位置
   *
   * @param selector CSS 或 XPath 选择器，支持使用 \`>>\` 进行 iframe 嵌套
   * @param options 可选参数：
   *  - boolean：是否执行滚动（默认 true）
   *  - object：滚动行为与条件配置
   */
  scroll(
    selector: string,
    optional?:
      | boolean
      | {
          behavior?: 'auto' | 'smooth'
          block?: 'start' | 'center' | 'end' | 'nearest'
          inline?: 'start' | 'center' | 'end' | 'nearest'
        }
  ): this
  /**
   * Y轴滚动
   */
  scroll(y: number): this
  /**
   * X轴和Y轴滚动
   */
  scroll(x: number, y: number): this
  /**
   * 下载文件
   *
   * @param url 需要下载的文件地址。
   * @param savePath 可选，文件保存路径或保存目录，未传时将保存到下载目录
   */
  download(url: string, savePath?: string): this
  /**
   * 下载文件（动态生成的下载地址）
   *
   * @param func 返回下载地址的函数。该函数将在 ubrowser 运行环境中执行。
   * @param savePath 可选，文件保存路径或保存目录，未传时将保存到下载目录
   * @param params 传递给 func 的参数列表
   */
  download(func: (...params: any[]) => string, savePath: string | null, ...params: any[]): this
  /**
   * 启动一个新的 ubrowser 实例运行。
   *
   * 当执行结束后：
   * - 若窗口为隐藏状态（show = false），将自动销毁该窗口
   * - 若窗口仍处于显示状态，则保留实例并返回其 ID
   *
   * @param options 窗口及运行配置项
   */
  run<T extends any = any[]>(options: {
    /** 是否显示窗口，默认 false */
    show?: boolean

    /** 窗口宽度 */
    width?: number
    /** 窗口高度 */
    height?: number

    /** 窗口 X 坐标 */
    x?: number
    /** 窗口 Y 坐标 */
    y?: number

    /** 是否居中显示 */
    center?: boolean

    /** 最小宽度 */
    minWidth?: number
    /** 最小高度 */
    minHeight?: number

    /** 最大宽度 */
    maxWidth?: number
    /** 最大高度 */
    maxHeight?: number

    /** 是否允许调整大小 */
    resizable?: boolean
    /** 是否允许移动 */
    movable?: boolean

    /** 是否允许最小化 */
    minimizable?: boolean
    /** 是否允许最大化 */
    maximizable?: boolean

    /** 是否置顶 */
    alwaysOnTop?: boolean

    /** 是否全屏 */
    fullscreen?: boolean
    /** 是否允许进入全屏 */
    fullscreenable?: boolean

    /** 是否允许窗口尺寸大于屏幕 */
    enableLargerThanScreen?: boolean

    /** 窗口透明度（0 ~ 1） */
    opacity?: number

    /** 是否显示窗口边框 */
    frame?: boolean

    /** 是否允许关闭 */
    closable?: boolean
    /** 是否可获取焦点 */
    focusable?: boolean

    /** 是否在任务栏显示 */
    skipTaskbar?: boolean

    /** 窗口背景色 */
    backgroundColor?: string

    /** 是否显示阴影 */
    hasShadow?: boolean

    /** 是否透明窗口 */
    transparent?: boolean

    /** 标题栏样式（平台相关） */
    titleBarStyle?: string

    /** 是否使用系统厚边框（Windows） */
    thickFrame?: boolean
  }): Promise<T>

  /**
   * 在一个闲置的 ubrowser 实例上运行。
   *
   * @param ubrowserId ubrowser 实例 ID：
   * - 可由 \`run(options)\` 在窗口未销毁时返回
   * - 或通过 \`utools.getIdleUBrowsers()\` 获取
   */
  run<T extends any = any[]>(ubrowserId: number): Promise<T>
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

type DbDoc<T extends {} = Record<string, any>> = {
  _id: string
  _rev?: string
} & T

interface DbReturn {
  id: string
  rev?: string
  ok?: boolean
  error?: boolean
  name?: string
  message?: string
}

interface PluginFeature {
  code: string
  explain?: string
  platform?: ('darwin' | 'win32' | 'linux') | Array<'darwin' | 'win32' | 'linux'>
  icon?: string
  cmds: (
    | string
    | {
        type: 'img' | 'files' | 'regex' | 'over' | 'window'
        label: string
      }
  )[]
  mainHide?: boolean
  mainPush?: boolean
}

type PluginEnterFrom = 'main' | 'panel' | 'hotkey' | 'redirect'

interface FfmpegRunProgress {
  bitrate: string
  fps: number
  frame: number
  percent?: number
  q: number | string
  size: string
  speed: string
  time: string
}

interface FfmpegPromise extends Promise<void> {
  kill(): void
  quit(): void
}

interface MainPushResult {
  icon?: string
  text: string
  title?: string
}

type MainPushResultList = MainPushResult[] | Promise<MainPushResult[]>

interface UToolsApi {
  /**
   * 插件应用进入时触发
   */
  onPluginEnter<T = any, L = any>(
    callback: (action: {
      code: string
      type: string
      payload: T
      option: L
      from?: PluginEnterFrom
    }) => void
  ): void
  /**
   * 向搜索面板推送消息
   */
  onMainPush<T = any>(
    callback: (action: { code: string; type: string; payload: T }) => MainPushResultList,
    selectCallback: (action: {
      code: string
      type: string
      payload: any
      option: MainPushResult
    }) => void
  ): void
  /**
   * 插件应用隐藏后台或完全退出时触发
   */
  onPluginOut(callback: (processExit: boolean) => void): void
  /**
   * 插件应用分离时触发
   */
  onPluginDetach(callback: () => void): void
  /**
   * 插件应用从云端拉取到数据时触发
   */
  onDbPull<T extends {} = Record<string, any>>(callback: (docs: DbDoc<T>[]) => void): void
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
  setSubInput(
    onChange: (input: { text: string }) => void,
    placeholder?: string,
    isFocus?: boolean
  ): boolean
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
  createBrowserWindow(
    url: string,
    options: BrowserWindow.InitOptions,
    callback?: () => void
  ): BrowserWindow.WindowInstance
  /**
   * 发送消息到父窗口
   * **仅在 \`createBrowserWindow\` 创建的窗口中使用有效**
   * @param channel 通道名
   * @param params 发送的数据
   */
  sendToParent(channel: string, ...params: any[]): void
  /**
   * 隐藏插件应用到后台
   * @param {boolean|undefined} isKill 设置为 \`true\` 时，会将插件进程杀死
   */
  outPlugin(isKill?: boolean): boolean
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
  fetchUserServerTemporaryToken(): Promise<{ token: string; expiredAt: number }>
  /**
   * 是否插件应用的付费用户
   */
  isPurchasedUser(): boolean
  /**
   * 打开付费 (软件付费)
   * @param callback 购买成功触发
   */
  openPurchase(
    options: {
      /**
       * 商品 ID，在「开发者工具」插件应用中创建
       */
      goodsId: string
      /**
       * 第三方服务生成的订单号(可选)
       */
      outOrderId?: string
      /**
       * 第三方服务附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用(可选)
       */
      attach?: string
    },
    callback?: () => void
  ): void
  /**
   * 打开支付 (付费)
   * @param callback 支付成功触发
   */
  openPayment(
    options: {
      /**
       * 商品 ID，在「开发者工具」插件应用中创建
       */
      goodsId: string
      /**
       * 第三方服务生成的订单号(可选)
       */
      outOrderId?: string
      /**
       * 第三方服务附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用(可选)
       */
      attach?: string
    },
    callback?: () => void
  ): void
  /**
   * 获取用户支付记录
   */
  fetchUserPayments(): Promise<
    {
      order_id: string
      total_fee: number
      body: string
      attach: string
      goods_id: string
      out_order_id: string
      paid_at: string
    }[]
  >
  /**
   * 设置插件应用动态功能
   */
  setFeature(feature: PluginFeature): boolean
  /**
   * 移除插件应用动态功能
   */
  removeFeature(code: string): boolean
  /**
   * 获取插件应用动态功能，参数为空获取所有动态功能
   */
  getFeatures(codes?: string[]): PluginFeature[]
  /**
   * 插件应用间跳转
   */
  redirect(
    label: string | string[],
    payload: string | { type: 'text' | 'img' | 'files'; data: any }
  ): boolean
  /**
   * 跳转(前往) uTools 设置界面，引导用户配置指令全局快捷键
   * @param cmdLabel 指令名称
   * @param autocopy 是否自动复制，默认为 false
   */
  redirectHotKeySetting(cmdLabel: string, autocopy?: boolean): void
  /**
   * 跳转(前往) uTools 自定义 AI 模型设置界面，引导用户配置自定义 AI 模型
   */
  redirectAiModelsSetting(): void
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
  showNotification(body: string, featureName?: string): void
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
   * 获取软件名称
   */
  getAppName(): string
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
   * 获取当前窗口类型, 'main' 主窗口 | 'detach' 分离窗口 | 'browser' 由 createBrowserWindow 创建的窗口
   */
  getWindowType(): 'main' | 'detach' | 'browser'
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
   * 删除文件到回收站
   */
  shellTrashItem(filename: string): Promise<void>
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
   * 键入字符串
   */
  hideMainWindowTypeString(str: string): void
  /*
   * 粘贴文件
   */
  hideMainWindowPasteFile(file: string | string[]): void
  /*
   * 粘贴图像
   */
  hideMainWindowPasteImage(img: string | Uint8Array): void
  /*
   * 粘贴文本
   */
  hideMainWindowPasteText(text: string): void
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
   * 屏幕物理坐标转 DIP 坐标
   */
  screenToDipPoint(point: { x: number; y: number }): { x: number; y: number }
  /**
   * 屏幕 DIP 坐标转物理坐标
   */
  dipToScreenPoint(point: { x: number; y: number }): { x: number; y: number }
  /**
   * 屏幕物理区域转 DIP 区域
   */
  screenToDipRect(rect: { x: number; y: number; width: number; height: number }): {
    x: number
    y: number
    width: number
    height: number
  }
  /**
   * 屏幕 DIP 区域转物理区域
   */
  dipToScreenRect(rect: { x: number; y: number; width: number; height: number }): {
    x: number
    y: number
    width: number
    height: number
  }
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

  db: {
    /**
     * 创建/更新文档
     */
    put(doc: DbDoc): DbReturn
    /**
     * 获取文档
     */
    get<T extends {} = Record<string, any>>(id: string): DbDoc<T> | null
    /**
     * 删除文档
     */
    remove(doc: string | DbDoc): DbReturn
    /**
     * 批量操作文档(新增、修改、删除)
     */
    bulkDocs(docs: DbDoc[]): DbReturn[]
    /**
     * 获取所有文档 可根据文档id前缀查找
     */
    allDocs<T extends {} = Record<string, any>>(key?: string): DbDoc<T>[]
    /**
     * 存储附件到新文档
     * @param docId 文档ID
     * @param attachment 附件 buffer
     * @param type 附件类型，示例：image/png, text/plain
     */
    postAttachment(docId: string, attachment: Uint8Array, type: string): DbReturn
    /**
     * 获取附件
     * @param docId 文档ID
     */
    getAttachment(docId: string): Uint8Array | null
    /**
     * 获取附件类型
     * @param docId 文档ID
     */
    getAttachmentType(docId: string): string | null
    /**
     * 云端复制数据状态 (null: 未开启数据同步、0: 已完成复制、1：复制中)
     */
    replicateStateFromCloud(): null | 0 | 1
    /**
     * 异步
     */
    promises: {
      /**
       * 创建/更新文档
       */
      put(doc: DbDoc): Promise<DbReturn>
      /**
       * 获取文档
       */
      get(id: string): Promise<DbDoc | null>
      /**
       * 删除文档
       */
      remove(doc: string | DbDoc): Promise<DbReturn>
      /**
       * 批量操作文档(新增、修改、删除)
       */
      bulkDocs(docs: DbDoc[]): Promise<DbReturn[]>
      /**
       * 获取所有文档 可根据文档id前缀查找
       */
      allDocs(key?: string): Promise<DbDoc[]>
      /**
       * 存储附件到新文档
       * @param docId 文档ID
       * @param attachment 附件 buffer
       * @param type 附件类型，示例：image/png, text/plain
       */
      postAttachment(docId: string, attachment: Uint8Array, type: string): Promise<DbReturn>
      /**
       * 获取附件
       * @param docId 文档ID
       */
      getAttachment(docId: string): Promise<Uint8Array | null>
      /**
       * 获取附件类型
       * @param docId 文档ID
       */
      getAttachmentType(docId: string): Promise<string | null>
      /**
       * 云端复制数据状态 (null: 未开启数据同步、0: 已完成复制、1：复制中)
       */
      replicateStateFromCloud(): Promise<null | 0 | 1>
    }
  }

  dbStorage: {
    /**
     * 键值对存储，如果键名存在，则更新其对应的值
     * @param key 键名(同时为文档ID)
     * @param value 键值
     */
    setItem(key: string, value: any): void
    /**
     * 获取键名对应的值
     */
    getItem<T = any>(key: string): T
    /**
     * 删除键值对(删除文档)
     */
    removeItem(key: string): void
  }

  dbCryptoStorage: {
    /**
     * 键值对加密存储，如果键名存在，则更新其对应的值
     * @param key 键名(同时为文档ID)
     * @param value 键值
     */
    setItem(key: string, value: any): void
    /**
     * 获取键名对应的值
     */
    getItem<T = any>(key: string): T
    /**
     * 删除键值对(删除文档)
     */
    removeItem(key: string): void
  }

  ubrowser: UBrowser

  sharp: (
    input?:
      | Buffer
      | Uint8Array
      | Uint8ClampedArray
      | Int8Array
      | Uint16Array
      | Int16Array
      | Uint32Array
      | Int32Array
      | Float32Array
      | Float64Array
      | string,
    options?: SharpOptions
  ) => Sharp

  /**
   * 运行 ffmpeg
   * @param args ffmpeg 命令行参数
   * @param onProgress 进度回调
   */
  runFFmpeg(args: string[], onProgress?: (progress: FfmpegRunProgress) => void): FfmpegPromise

  /**
   * 获取所有 AI 模型
   */
  allAiModels(): Promise<UtoolsAiModel[]>

  /**
   * 流式调用 AI
   * @param option 选项参数
   * @param option.model 模型
   * @param option.messages 消息
   * @param option.tools 工具集合，使用 function calling 配置
   * @param streamCallback 流式回调
   */
  ai(option: UtoolsAiOption, streamCallback: (chunk: UtoolsAiMessage) => void): UtoolsAiResult<void>
  /**
   * 非流式调用 AI
   * @param option 选项参数
   */
  ai(option: UtoolsAiOption): UtoolsAiResult<UtoolsAiMessage>
}

declare var utools: UToolsApi
`,da=`declare module 'assert' {
  function assert(value: unknown, message?: string | Error): asserts value
  namespace assert {
    class AssertionError extends Error {
      actual: unknown
      expected: unknown
      operator: string
      generatedMessage: boolean
      code: 'ERR_ASSERTION'
      constructor(options?: {
        message?: string | undefined
        actual?: unknown | undefined
        expected?: unknown | undefined
        operator?: string | undefined
        stackStartFn?: Function | undefined
      })
    }
    class CallTracker {
      calls(exact?: number): () => void
      calls<Func extends (...args: any[]) => any>(fn?: Func, exact?: number): Func
      report(): CallTrackerReportInformation[]
      verify(): void
    }
    interface CallTrackerReportInformation {
      message: string
      actual: number
      expected: number
      operator: string
      stack: object
    }
    type AssertPredicate =
      | RegExp
      | (new () => object)
      | ((thrown: unknown) => boolean)
      | object
      | Error
    function fail(message?: string | Error): never
    function fail(
      actual: unknown,
      expected: unknown,
      message?: string | Error,
      operator?: string,
      stackStartFn?: Function
    ): never
    function ok(value: unknown, message?: string | Error): asserts value
    function equal(actual: unknown, expected: unknown, message?: string | Error): void
    function notEqual(actual: unknown, expected: unknown, message?: string | Error): void
    function deepEqual(actual: unknown, expected: unknown, message?: string | Error): void
    function notDeepEqual(actual: unknown, expected: unknown, message?: string | Error): void
    function strictEqual<T>(
      actual: unknown,
      expected: T,
      message?: string | Error
    ): asserts actual is T
    function notStrictEqual(actual: unknown, expected: unknown, message?: string | Error): void
    function deepStrictEqual<T>(
      actual: unknown,
      expected: T,
      message?: string | Error
    ): asserts actual is T
    function notDeepStrictEqual(actual: unknown, expected: unknown, message?: string | Error): void
    function throws(block: () => unknown, message?: string | Error): void
    function throws(block: () => unknown, error: AssertPredicate, message?: string | Error): void
    function doesNotThrow(block: () => unknown, message?: string | Error): void
    function doesNotThrow(
      block: () => unknown,
      error: AssertPredicate,
      message?: string | Error
    ): void
    function ifError(value: unknown): asserts value is null | undefined
    function rejects(
      block: (() => Promise<unknown>) | Promise<unknown>,
      message?: string | Error
    ): Promise<void>
    function rejects(
      block: (() => Promise<unknown>) | Promise<unknown>,
      error: AssertPredicate,
      message?: string | Error
    ): Promise<void>
    function doesNotReject(
      block: (() => Promise<unknown>) | Promise<unknown>,
      message?: string | Error
    ): Promise<void>
    function doesNotReject(
      block: (() => Promise<unknown>) | Promise<unknown>,
      error: AssertPredicate,
      message?: string | Error
    ): Promise<void>
    function match(value: string, regExp: RegExp, message?: string | Error): void
    function doesNotMatch(value: string, regExp: RegExp, message?: string | Error): void
    const strict: Omit<
      typeof assert,
      | 'equal'
      | 'notEqual'
      | 'deepEqual'
      | 'notDeepEqual'
      | 'ok'
      | 'strictEqual'
      | 'deepStrictEqual'
      | 'ifError'
      | 'strict'
    > & {
      (value: unknown, message?: string | Error): asserts value
      equal: typeof strictEqual
      notEqual: typeof notStrictEqual
      deepEqual: typeof deepStrictEqual
      notDeepEqual: typeof notDeepStrictEqual
      ok: typeof ok
      strictEqual: typeof strictEqual
      deepStrictEqual: typeof deepStrictEqual
      ifError: typeof ifError
      strict: typeof strict
    }
  }
  export = assert
}
declare module 'node:assert' {
  import assert = require('assert')
  export = assert
}
declare module 'async_hooks' {
  function executionAsyncId(): number
  function executionAsyncResource(): object
  function triggerAsyncId(): number
  interface HookCallbacks {
    init?(asyncId: number, type: string, triggerAsyncId: number, resource: object): void
    before?(asyncId: number): void
    after?(asyncId: number): void
    promiseResolve?(asyncId: number): void
    destroy?(asyncId: number): void
  }
  interface AsyncHook {
    enable(): this
    disable(): this
  }
  function createHook(callbacks: HookCallbacks): AsyncHook
  interface AsyncResourceOptions {
    triggerAsyncId?: number | undefined
    requireManualDestroy?: boolean | undefined
  }
  class AsyncResource {
    constructor(type: string, triggerAsyncId?: number | AsyncResourceOptions)
    static bind<Func extends (this: ThisArg, ...args: any[]) => any, ThisArg>(
      fn: Func,
      type?: string,
      thisArg?: ThisArg
    ): Func & {
      asyncResource: AsyncResource
    }
    bind<Func extends (...args: any[]) => any>(
      fn: Func
    ): Func & {
      asyncResource: AsyncResource
    }
    runInAsyncScope<This, Result>(
      fn: (this: This, ...args: any[]) => Result,
      thisArg?: This,
      ...args: any[]
    ): Result
    emitDestroy(): this
    asyncId(): number
    triggerAsyncId(): number
  }
  class AsyncLocalStorage<T> {
    disable(): void
    getStore(): T | undefined
    run<R, TArgs extends any[]>(store: T, callback: (...args: TArgs) => R, ...args: TArgs): R
    exit<R, TArgs extends any[]>(callback: (...args: TArgs) => R, ...args: TArgs): R
    enterWith(store: T): void
  }
}
declare module 'node:async_hooks' {
  export * from 'async_hooks'
}
declare module 'buffer' {
  import { BinaryLike } from 'node:crypto'
  export const INSPECT_MAX_BYTES: number
  export const kMaxLength: number
  export const kStringMaxLength: number
  export const constants: {
    MAX_LENGTH: number
    MAX_STRING_LENGTH: number
  }
  export type TranscodeEncoding = 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'latin1' | 'binary'
  export function transcode(
    source: Uint8Array,
    fromEnc: TranscodeEncoding,
    toEnc: TranscodeEncoding
  ): Buffer
  export const SlowBuffer: {
    new (size: number): Buffer
    prototype: Buffer
  }
  export function resolveObjectURL(id: string): Blob | undefined
  export { Buffer }
  export interface BlobOptions {
    encoding?: BufferEncoding | undefined
    type?: string | undefined
  }
  export class Blob {
    readonly size: number
    readonly type: string
    constructor(sources: Array<BinaryLike | Blob>, options?: BlobOptions)
    arrayBuffer(): Promise<ArrayBuffer>
    slice(start?: number, end?: number, type?: string): Blob
    text(): Promise<string>
    stream(): unknown
  }
  export import atob = globalThis.atob
  export import btoa = globalThis.btoa
  global {
    type BufferEncoding =
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'base64url'
      | 'latin1'
      | 'binary'
      | 'hex'
    type WithImplicitCoercion<T> =
      | T
      | {
          valueOf(): T
        }
    interface BufferConstructor {
      new (str: string, encoding?: BufferEncoding): Buffer
      new (size: number): Buffer
      new (array: Uint8Array): Buffer
      new (arrayBuffer: ArrayBuffer | SharedArrayBuffer): Buffer
      new (array: ReadonlyArray<any>): Buffer
      new (buffer: Buffer): Buffer
      from(
        arrayBuffer: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>,
        byteOffset?: number,
        length?: number
      ): Buffer
      from(data: Uint8Array | ReadonlyArray<number>): Buffer
      from(data: WithImplicitCoercion<Uint8Array | ReadonlyArray<number> | string>): Buffer
      from(
        str:
          | WithImplicitCoercion<string>
          | {
              [Symbol.toPrimitive](hint: 'string'): string
            },
        encoding?: BufferEncoding
      ): Buffer
      of(...items: number[]): Buffer
      isBuffer(obj: any): obj is Buffer
      isEncoding(encoding: string): encoding is BufferEncoding
      byteLength(
        string: string | NodeJS.ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
        encoding?: BufferEncoding
      ): number
      concat(list: ReadonlyArray<Uint8Array>, totalLength?: number): Buffer
      compare(buf1: Uint8Array, buf2: Uint8Array): -1 | 0 | 1
      alloc(size: number, fill?: string | Buffer | number, encoding?: BufferEncoding): Buffer
      allocUnsafe(size: number): Buffer
      allocUnsafeSlow(size: number): Buffer
      poolSize: number
    }
    interface Buffer extends Uint8Array {
      write(string: string, encoding?: BufferEncoding): number
      write(string: string, offset: number, encoding?: BufferEncoding): number
      write(string: string, offset: number, length: number, encoding?: BufferEncoding): number
      toString(encoding?: BufferEncoding, start?: number, end?: number): string
      toJSON(): {
        type: 'Buffer'
        data: number[]
      }
      equals(otherBuffer: Uint8Array): boolean
      compare(
        target: Uint8Array,
        targetStart?: number,
        targetEnd?: number,
        sourceStart?: number,
        sourceEnd?: number
      ): -1 | 0 | 1
      copy(
        target: Uint8Array,
        targetStart?: number,
        sourceStart?: number,
        sourceEnd?: number
      ): number
      slice(start?: number, end?: number): Buffer
      subarray(start?: number, end?: number): Buffer
      writeBigInt64BE(value: bigint, offset?: number): number
      writeBigInt64LE(value: bigint, offset?: number): number
      writeBigUInt64BE(value: bigint, offset?: number): number
      writeBigUint64BE(value: bigint, offset?: number): number
      writeBigUInt64LE(value: bigint, offset?: number): number
      writeBigUint64LE(value: bigint, offset?: number): number
      writeUIntLE(value: number, offset: number, byteLength: number): number
      writeUintLE(value: number, offset: number, byteLength: number): number
      writeUIntBE(value: number, offset: number, byteLength: number): number
      writeUintBE(value: number, offset: number, byteLength: number): number
      writeIntLE(value: number, offset: number, byteLength: number): number
      writeIntBE(value: number, offset: number, byteLength: number): number
      readBigUInt64BE(offset?: number): bigint
      readBigUint64BE(offset?: number): bigint
      readBigUInt64LE(offset?: number): bigint
      readBigUint64LE(offset?: number): bigint
      readBigInt64BE(offset?: number): bigint
      readBigInt64LE(offset?: number): bigint
      readUIntLE(offset: number, byteLength: number): number
      readUintLE(offset: number, byteLength: number): number
      readUIntBE(offset: number, byteLength: number): number
      readUintBE(offset: number, byteLength: number): number
      readIntLE(offset: number, byteLength: number): number
      readIntBE(offset: number, byteLength: number): number
      readUInt8(offset?: number): number
      readUint8(offset?: number): number
      readUInt16LE(offset?: number): number
      readUint16LE(offset?: number): number
      readUInt16BE(offset?: number): number
      readUint16BE(offset?: number): number
      readUInt32LE(offset?: number): number
      readUint32LE(offset?: number): number
      readUInt32BE(offset?: number): number
      readUint32BE(offset?: number): number
      readInt8(offset?: number): number
      readInt16LE(offset?: number): number
      readInt16BE(offset?: number): number
      readInt32LE(offset?: number): number
      readInt32BE(offset?: number): number
      readFloatLE(offset?: number): number
      readFloatBE(offset?: number): number
      readDoubleLE(offset?: number): number
      readDoubleBE(offset?: number): number
      reverse(): this
      swap16(): Buffer
      swap32(): Buffer
      swap64(): Buffer
      writeUInt8(value: number, offset?: number): number
      writeUint8(value: number, offset?: number): number
      writeUInt16LE(value: number, offset?: number): number
      writeUint16LE(value: number, offset?: number): number
      writeUInt16BE(value: number, offset?: number): number
      writeUint16BE(value: number, offset?: number): number
      writeUInt32LE(value: number, offset?: number): number
      writeUint32LE(value: number, offset?: number): number
      writeUInt32BE(value: number, offset?: number): number
      writeUint32BE(value: number, offset?: number): number
      writeInt8(value: number, offset?: number): number
      writeInt16LE(value: number, offset?: number): number
      writeInt16BE(value: number, offset?: number): number
      writeInt32LE(value: number, offset?: number): number
      writeInt32BE(value: number, offset?: number): number
      writeFloatLE(value: number, offset?: number): number
      writeFloatBE(value: number, offset?: number): number
      writeDoubleLE(value: number, offset?: number): number
      writeDoubleBE(value: number, offset?: number): number
      fill(
        value: string | Uint8Array | number,
        offset?: number,
        end?: number,
        encoding?: BufferEncoding
      ): this
      indexOf(
        value: string | number | Uint8Array,
        byteOffset?: number,
        encoding?: BufferEncoding
      ): number
      lastIndexOf(
        value: string | number | Uint8Array,
        byteOffset?: number,
        encoding?: BufferEncoding
      ): number
      entries(): IterableIterator<[number, number]>
      includes(
        value: string | number | Buffer,
        byteOffset?: number,
        encoding?: BufferEncoding
      ): boolean
      keys(): IterableIterator<number>
      values(): IterableIterator<number>
    }
    var Buffer: BufferConstructor
    function atob(data: string): string
    function btoa(data: string): string
  }
}
declare module 'node:buffer' {
  export * from 'buffer'
}
declare module 'child_process' {
  import { ObjectEncodingOptions } from 'node:fs'
  import { EventEmitter, Abortable } from 'node:events'
  import * as net from 'node:net'
  import { Writable, Readable, Stream, Pipe } from 'node:stream'
  import { URL } from 'node:url'
  type Serializable = string | object | number | boolean | bigint
  type SendHandle = net.Socket | net.Server
  class ChildProcess extends EventEmitter {
    stdin: Writable | null
    stdout: Readable | null
    stderr: Readable | null
    readonly channel?: Pipe | null | undefined
    readonly stdio: [
      Writable | null,
      Readable | null,
      Readable | null,
      Readable | Writable | null | undefined,
      Readable | Writable | null | undefined
    ]
    readonly killed: boolean
    readonly pid?: number | undefined
    readonly connected: boolean
    readonly exitCode: number | null
    readonly signalCode: NodeJS.Signals | null
    readonly spawnargs: string[]
    readonly spawnfile: string
    kill(signal?: NodeJS.Signals | number): boolean
    send(message: Serializable, callback?: (error: Error | null) => void): boolean
    send(
      message: Serializable,
      sendHandle?: SendHandle,
      callback?: (error: Error | null) => void
    ): boolean
    send(
      message: Serializable,
      sendHandle?: SendHandle,
      options?: MessageOptions,
      callback?: (error: Error | null) => void
    ): boolean
    disconnect(): void
    unref(): void
    ref(): void
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(
      event: 'close',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    addListener(event: 'disconnect', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(
      event: 'exit',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    addListener(
      event: 'message',
      listener: (message: Serializable, sendHandle: SendHandle) => void
    ): this
    addListener(event: 'spawn', listener: () => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'close', code: number | null, signal: NodeJS.Signals | null): boolean
    emit(event: 'disconnect'): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'exit', code: number | null, signal: NodeJS.Signals | null): boolean
    emit(event: 'message', message: Serializable, sendHandle: SendHandle): boolean
    emit(event: 'spawn', listener: () => void): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'close', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this
    on(event: 'disconnect', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'exit', listener: (code: number | null, signal: NodeJS.Signals | null) => void): this
    on(event: 'message', listener: (message: Serializable, sendHandle: SendHandle) => void): this
    on(event: 'spawn', listener: () => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(
      event: 'close',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    once(event: 'disconnect', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(
      event: 'exit',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    once(event: 'message', listener: (message: Serializable, sendHandle: SendHandle) => void): this
    once(event: 'spawn', listener: () => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(
      event: 'close',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    prependListener(event: 'disconnect', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(
      event: 'exit',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    prependListener(
      event: 'message',
      listener: (message: Serializable, sendHandle: SendHandle) => void
    ): this
    prependListener(event: 'spawn', listener: () => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'close',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    prependOnceListener(event: 'disconnect', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(
      event: 'exit',
      listener: (code: number | null, signal: NodeJS.Signals | null) => void
    ): this
    prependOnceListener(
      event: 'message',
      listener: (message: Serializable, sendHandle: SendHandle) => void
    ): this
    prependOnceListener(event: 'spawn', listener: () => void): this
  }
  interface ChildProcessWithoutNullStreams extends ChildProcess {
    stdin: Writable
    stdout: Readable
    stderr: Readable
    readonly stdio: [
      Writable,
      Readable,
      Readable,
      Readable | Writable | null | undefined,
      Readable | Writable | null | undefined
    ]
  }
  interface ChildProcessByStdio<
    I extends null | Writable,
    O extends null | Readable,
    E extends null | Readable
  > extends ChildProcess {
    stdin: I
    stdout: O
    stderr: E
    readonly stdio: [
      I,
      O,
      E,
      Readable | Writable | null | undefined,
      Readable | Writable | null | undefined
    ]
  }
  interface MessageOptions {
    keepOpen?: boolean | undefined
  }
  type IOType = 'overlapped' | 'pipe' | 'ignore' | 'inherit'
  type StdioOptions = IOType | Array<IOType | 'ipc' | Stream | number | null | undefined>
  type SerializationType = 'json' | 'advanced'
  interface MessagingOptions extends Abortable {
    serialization?: SerializationType | undefined
    killSignal?: NodeJS.Signals | number | undefined
    timeout?: number | undefined
  }
  interface ProcessEnvOptions {
    uid?: number | undefined
    gid?: number | undefined
    cwd?: string | URL | undefined
    env?: NodeJS.ProcessEnv | undefined
  }
  interface CommonOptions extends ProcessEnvOptions {
    windowsHide?: boolean | undefined
    timeout?: number | undefined
  }
  interface CommonSpawnOptions extends CommonOptions, MessagingOptions, Abortable {
    argv0?: string | undefined
    stdio?: StdioOptions | undefined
    shell?: boolean | string | undefined
    windowsVerbatimArguments?: boolean | undefined
  }
  interface SpawnOptions extends CommonSpawnOptions {
    detached?: boolean | undefined
  }
  interface SpawnOptionsWithoutStdio extends SpawnOptions {
    stdio?: StdioPipeNamed | StdioPipe[] | undefined
  }
  type StdioNull = 'inherit' | 'ignore' | Stream
  type StdioPipeNamed = 'pipe' | 'overlapped'
  type StdioPipe = undefined | null | StdioPipeNamed
  interface SpawnOptionsWithStdioTuple<
    Stdin extends StdioNull | StdioPipe,
    Stdout extends StdioNull | StdioPipe,
    Stderr extends StdioNull | StdioPipe
  > extends SpawnOptions {
    stdio: [Stdin, Stdout, Stderr]
  }
  function spawn(
    command: string,
    options?: SpawnOptionsWithoutStdio
  ): ChildProcessWithoutNullStreams
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioPipe>
  ): ChildProcessByStdio<Writable, Readable, Readable>
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioNull>
  ): ChildProcessByStdio<Writable, Readable, null>
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioPipe>
  ): ChildProcessByStdio<Writable, null, Readable>
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>
  ): ChildProcessByStdio<null, Readable, Readable>
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioNull>
  ): ChildProcessByStdio<Writable, null, null>
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioNull>
  ): ChildProcessByStdio<null, Readable, null>
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioPipe>
  ): ChildProcessByStdio<null, null, Readable>
  function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioNull>
  ): ChildProcessByStdio<null, null, null>
  function spawn(command: string, options: SpawnOptions): ChildProcess
  function spawn(
    command: string,
    args?: ReadonlyArray<string>,
    options?: SpawnOptionsWithoutStdio
  ): ChildProcessWithoutNullStreams
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioPipe>
  ): ChildProcessByStdio<Writable, Readable, Readable>
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioNull>
  ): ChildProcessByStdio<Writable, Readable, null>
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioPipe>
  ): ChildProcessByStdio<Writable, null, Readable>
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>
  ): ChildProcessByStdio<null, Readable, Readable>
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioNull>
  ): ChildProcessByStdio<Writable, null, null>
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioNull>
  ): ChildProcessByStdio<null, Readable, null>
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioPipe>
  ): ChildProcessByStdio<null, null, Readable>
  function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioNull>
  ): ChildProcessByStdio<null, null, null>
  function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptions): ChildProcess
  interface ExecOptions extends CommonOptions {
    shell?: string | undefined
    signal?: AbortSignal | undefined
    maxBuffer?: number | undefined
    killSignal?: NodeJS.Signals | number | undefined
  }
  interface ExecOptionsWithStringEncoding extends ExecOptions {
    encoding: BufferEncoding
  }
  interface ExecOptionsWithBufferEncoding extends ExecOptions {
    encoding: BufferEncoding | null
  }
  interface ExecException extends Error {
    cmd?: string | undefined
    killed?: boolean | undefined
    code?: number | undefined
    signal?: NodeJS.Signals | undefined
  }
  function exec(
    command: string,
    callback?: (error: ExecException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function exec(
    command: string,
    options: {
      encoding: 'buffer' | null
    } & ExecOptions,
    callback?: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void
  ): ChildProcess
  function exec(
    command: string,
    options: {
      encoding: BufferEncoding
    } & ExecOptions,
    callback?: (error: ExecException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function exec(
    command: string,
    options: {
      encoding: BufferEncoding
    } & ExecOptions,
    callback?: (
      error: ExecException | null,
      stdout: string | Buffer,
      stderr: string | Buffer
    ) => void
  ): ChildProcess
  function exec(
    command: string,
    options: ExecOptions,
    callback?: (error: ExecException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function exec(
    command: string,
    options: (ObjectEncodingOptions & ExecOptions) | undefined | null,
    callback?: (
      error: ExecException | null,
      stdout: string | Buffer,
      stderr: string | Buffer
    ) => void
  ): ChildProcess
  interface PromiseWithChild<T> extends Promise<T> {
    child: ChildProcess
  }
  namespace exec {
    function __promisify__(command: string): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      command: string,
      options: {
        encoding: 'buffer' | null
      } & ExecOptions
    ): PromiseWithChild<{
      stdout: Buffer
      stderr: Buffer
    }>
    function __promisify__(
      command: string,
      options: {
        encoding: BufferEncoding
      } & ExecOptions
    ): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      command: string,
      options: ExecOptions
    ): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      command: string,
      options?: (ObjectEncodingOptions & ExecOptions) | null
    ): PromiseWithChild<{
      stdout: string | Buffer
      stderr: string | Buffer
    }>
  }
  interface ExecFileOptions extends CommonOptions, Abortable {
    maxBuffer?: number | undefined
    killSignal?: NodeJS.Signals | number | undefined
    windowsVerbatimArguments?: boolean | undefined
    shell?: boolean | string | undefined
    signal?: AbortSignal | undefined
  }
  interface ExecFileOptionsWithStringEncoding extends ExecFileOptions {
    encoding: BufferEncoding
  }
  interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
    encoding: 'buffer' | null
  }
  interface ExecFileOptionsWithOtherEncoding extends ExecFileOptions {
    encoding: BufferEncoding
  }
  type ExecFileException = ExecException & NodeJS.ErrnoException
  function execFile(file: string): ChildProcess
  function execFile(
    file: string,
    options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null
  ): ChildProcess
  function execFile(file: string, args?: ReadonlyArray<string> | null): ChildProcess
  function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null
  ): ChildProcess
  function execFile(
    file: string,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function execFile(
    file: string,
    options: ExecFileOptionsWithBufferEncoding,
    callback: (error: ExecFileException | null, stdout: Buffer, stderr: Buffer) => void
  ): ChildProcess
  function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptionsWithBufferEncoding,
    callback: (error: ExecFileException | null, stdout: Buffer, stderr: Buffer) => void
  ): ChildProcess
  function execFile(
    file: string,
    options: ExecFileOptionsWithStringEncoding,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptionsWithStringEncoding,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function execFile(
    file: string,
    options: ExecFileOptionsWithOtherEncoding,
    callback: (
      error: ExecFileException | null,
      stdout: string | Buffer,
      stderr: string | Buffer
    ) => void
  ): ChildProcess
  function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptionsWithOtherEncoding,
    callback: (
      error: ExecFileException | null,
      stdout: string | Buffer,
      stderr: string | Buffer
    ) => void
  ): ChildProcess
  function execFile(
    file: string,
    options: ExecFileOptions,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptions,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void
  ): ChildProcess
  function execFile(
    file: string,
    options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null,
    callback:
      | ((
          error: ExecFileException | null,
          stdout: string | Buffer,
          stderr: string | Buffer
        ) => void)
      | undefined
      | null
  ): ChildProcess
  function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null,
    callback:
      | ((
          error: ExecFileException | null,
          stdout: string | Buffer,
          stderr: string | Buffer
        ) => void)
      | undefined
      | null
  ): ChildProcess
  namespace execFile {
    function __promisify__(file: string): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      file: string,
      args: ReadonlyArray<string> | undefined | null
    ): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      file: string,
      options: ExecFileOptionsWithBufferEncoding
    ): PromiseWithChild<{
      stdout: Buffer
      stderr: Buffer
    }>
    function __promisify__(
      file: string,
      args: ReadonlyArray<string> | undefined | null,
      options: ExecFileOptionsWithBufferEncoding
    ): PromiseWithChild<{
      stdout: Buffer
      stderr: Buffer
    }>
    function __promisify__(
      file: string,
      options: ExecFileOptionsWithStringEncoding
    ): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      file: string,
      args: ReadonlyArray<string> | undefined | null,
      options: ExecFileOptionsWithStringEncoding
    ): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      file: string,
      options: ExecFileOptionsWithOtherEncoding
    ): PromiseWithChild<{
      stdout: string | Buffer
      stderr: string | Buffer
    }>
    function __promisify__(
      file: string,
      args: ReadonlyArray<string> | undefined | null,
      options: ExecFileOptionsWithOtherEncoding
    ): PromiseWithChild<{
      stdout: string | Buffer
      stderr: string | Buffer
    }>
    function __promisify__(
      file: string,
      options: ExecFileOptions
    ): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      file: string,
      args: ReadonlyArray<string> | undefined | null,
      options: ExecFileOptions
    ): PromiseWithChild<{
      stdout: string
      stderr: string
    }>
    function __promisify__(
      file: string,
      options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null
    ): PromiseWithChild<{
      stdout: string | Buffer
      stderr: string | Buffer
    }>
    function __promisify__(
      file: string,
      args: ReadonlyArray<string> | undefined | null,
      options: (ObjectEncodingOptions & ExecFileOptions) | undefined | null
    ): PromiseWithChild<{
      stdout: string | Buffer
      stderr: string | Buffer
    }>
  }
  interface ForkOptions extends ProcessEnvOptions, MessagingOptions, Abortable {
    execPath?: string | undefined
    execArgv?: string[] | undefined
    silent?: boolean | undefined
    stdio?: StdioOptions | undefined
    detached?: boolean | undefined
    windowsVerbatimArguments?: boolean | undefined
  }
  function fork(modulePath: string, options?: ForkOptions): ChildProcess
  function fork(
    modulePath: string,
    args?: ReadonlyArray<string>,
    options?: ForkOptions
  ): ChildProcess
  interface SpawnSyncOptions extends CommonSpawnOptions {
    input?: string | NodeJS.ArrayBufferView | undefined
    maxBuffer?: number | undefined
    encoding?: BufferEncoding | 'buffer' | null | undefined
  }
  interface SpawnSyncOptionsWithStringEncoding extends SpawnSyncOptions {
    encoding: BufferEncoding
  }
  interface SpawnSyncOptionsWithBufferEncoding extends SpawnSyncOptions {
    encoding?: 'buffer' | null | undefined
  }
  interface SpawnSyncReturns<T> {
    pid: number
    output: Array<T | null>
    stdout: T
    stderr: T
    status: number | null
    signal: NodeJS.Signals | null
    error?: Error | undefined
  }
  function spawnSync(command: string): SpawnSyncReturns<Buffer>
  function spawnSync(
    command: string,
    options: SpawnSyncOptionsWithStringEncoding
  ): SpawnSyncReturns<string>
  function spawnSync(
    command: string,
    options: SpawnSyncOptionsWithBufferEncoding
  ): SpawnSyncReturns<Buffer>
  function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<string | Buffer>
  function spawnSync(command: string, args: ReadonlyArray<string>): SpawnSyncReturns<Buffer>
  function spawnSync(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnSyncOptionsWithStringEncoding
  ): SpawnSyncReturns<string>
  function spawnSync(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnSyncOptionsWithBufferEncoding
  ): SpawnSyncReturns<Buffer>
  function spawnSync(
    command: string,
    args?: ReadonlyArray<string>,
    options?: SpawnSyncOptions
  ): SpawnSyncReturns<string | Buffer>
  interface CommonExecOptions extends CommonOptions {
    input?: string | NodeJS.ArrayBufferView | undefined
    stdio?: StdioOptions | undefined
    killSignal?: NodeJS.Signals | number | undefined
    maxBuffer?: number | undefined
    encoding?: BufferEncoding | 'buffer' | null | undefined
  }
  interface ExecSyncOptions extends CommonExecOptions {
    shell?: string | undefined
  }
  interface ExecSyncOptionsWithStringEncoding extends ExecSyncOptions {
    encoding: BufferEncoding
  }
  interface ExecSyncOptionsWithBufferEncoding extends ExecSyncOptions {
    encoding?: 'buffer' | null | undefined
  }
  function execSync(command: string): Buffer
  function execSync(command: string, options: ExecSyncOptionsWithStringEncoding): string
  function execSync(command: string, options: ExecSyncOptionsWithBufferEncoding): Buffer
  function execSync(command: string, options?: ExecSyncOptions): string | Buffer
  interface ExecFileSyncOptions extends CommonExecOptions {
    shell?: boolean | string | undefined
  }
  interface ExecFileSyncOptionsWithStringEncoding extends ExecFileSyncOptions {
    encoding: BufferEncoding
  }
  interface ExecFileSyncOptionsWithBufferEncoding extends ExecFileSyncOptions {
    encoding?: 'buffer' | null
  }
  function execFileSync(file: string): Buffer
  function execFileSync(file: string, options: ExecFileSyncOptionsWithStringEncoding): string
  function execFileSync(file: string, options: ExecFileSyncOptionsWithBufferEncoding): Buffer
  function execFileSync(file: string, options?: ExecFileSyncOptions): string | Buffer
  function execFileSync(file: string, args: ReadonlyArray<string>): Buffer
  function execFileSync(
    file: string,
    args: ReadonlyArray<string>,
    options: ExecFileSyncOptionsWithStringEncoding
  ): string
  function execFileSync(
    file: string,
    args: ReadonlyArray<string>,
    options: ExecFileSyncOptionsWithBufferEncoding
  ): Buffer
  function execFileSync(
    file: string,
    args?: ReadonlyArray<string>,
    options?: ExecFileSyncOptions
  ): string | Buffer
}
declare module 'node:child_process' {
  export * from 'child_process'
}
declare module 'cluster' {
  import * as child from 'node:child_process'
  import EventEmitter = require('node:events')
  import * as net from 'node:net'
  export interface ClusterSettings {
    execArgv?: string[] | undefined
    exec?: string | undefined
    args?: string[] | undefined
    silent?: boolean | undefined
    stdio?: any[] | undefined
    uid?: number | undefined
    gid?: number | undefined
    inspectPort?: number | (() => number) | undefined
  }
  export interface Address {
    address: string
    port: number
    addressType: number | 'udp4' | 'udp6'
  }
  export class Worker extends EventEmitter {
    id: number
    process: child.ChildProcess
    send(message: child.Serializable, callback?: (error: Error | null) => void): boolean
    send(
      message: child.Serializable,
      sendHandle: child.SendHandle,
      callback?: (error: Error | null) => void
    ): boolean
    send(
      message: child.Serializable,
      sendHandle: child.SendHandle,
      options?: child.MessageOptions,
      callback?: (error: Error | null) => void
    ): boolean
    kill(signal?: string): void
    destroy(signal?: string): void
    disconnect(): void
    isConnected(): boolean
    isDead(): boolean
    exitedAfterDisconnect: boolean
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'disconnect', listener: () => void): this
    addListener(event: 'error', listener: (error: Error) => void): this
    addListener(event: 'exit', listener: (code: number, signal: string) => void): this
    addListener(event: 'listening', listener: (address: Address) => void): this
    addListener(
      event: 'message',
      listener: (message: any, handle: net.Socket | net.Server) => void
    ): this
    addListener(event: 'online', listener: () => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'disconnect'): boolean
    emit(event: 'error', error: Error): boolean
    emit(event: 'exit', code: number, signal: string): boolean
    emit(event: 'listening', address: Address): boolean
    emit(event: 'message', message: any, handle: net.Socket | net.Server): boolean
    emit(event: 'online'): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'disconnect', listener: () => void): this
    on(event: 'error', listener: (error: Error) => void): this
    on(event: 'exit', listener: (code: number, signal: string) => void): this
    on(event: 'listening', listener: (address: Address) => void): this
    on(event: 'message', listener: (message: any, handle: net.Socket | net.Server) => void): this
    on(event: 'online', listener: () => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'disconnect', listener: () => void): this
    once(event: 'error', listener: (error: Error) => void): this
    once(event: 'exit', listener: (code: number, signal: string) => void): this
    once(event: 'listening', listener: (address: Address) => void): this
    once(event: 'message', listener: (message: any, handle: net.Socket | net.Server) => void): this
    once(event: 'online', listener: () => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'disconnect', listener: () => void): this
    prependListener(event: 'error', listener: (error: Error) => void): this
    prependListener(event: 'exit', listener: (code: number, signal: string) => void): this
    prependListener(event: 'listening', listener: (address: Address) => void): this
    prependListener(
      event: 'message',
      listener: (message: any, handle: net.Socket | net.Server) => void
    ): this
    prependListener(event: 'online', listener: () => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'disconnect', listener: () => void): this
    prependOnceListener(event: 'error', listener: (error: Error) => void): this
    prependOnceListener(event: 'exit', listener: (code: number, signal: string) => void): this
    prependOnceListener(event: 'listening', listener: (address: Address) => void): this
    prependOnceListener(
      event: 'message',
      listener: (message: any, handle: net.Socket | net.Server) => void
    ): this
    prependOnceListener(event: 'online', listener: () => void): this
  }
  export interface Cluster extends EventEmitter {
    disconnect(callback?: () => void): void
    fork(env?: any): Worker
    readonly isMaster: boolean
    readonly isPrimary: boolean
    readonly isWorker: boolean
    schedulingPolicy: number
    readonly settings: ClusterSettings
    setupMaster(settings?: ClusterSettings): void
    setupPrimary(settings?: ClusterSettings): void
    readonly worker?: Worker | undefined
    readonly workers?: NodeJS.Dict<Worker> | undefined
    readonly SCHED_NONE: number
    readonly SCHED_RR: number
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'disconnect', listener: (worker: Worker) => void): this
    addListener(
      event: 'exit',
      listener: (worker: Worker, code: number, signal: string) => void
    ): this
    addListener(event: 'fork', listener: (worker: Worker) => void): this
    addListener(event: 'listening', listener: (worker: Worker, address: Address) => void): this
    addListener(
      event: 'message',
      listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
    ): this
    addListener(event: 'online', listener: (worker: Worker) => void): this
    addListener(event: 'setup', listener: (settings: ClusterSettings) => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'disconnect', worker: Worker): boolean
    emit(event: 'exit', worker: Worker, code: number, signal: string): boolean
    emit(event: 'fork', worker: Worker): boolean
    emit(event: 'listening', worker: Worker, address: Address): boolean
    emit(event: 'message', worker: Worker, message: any, handle: net.Socket | net.Server): boolean
    emit(event: 'online', worker: Worker): boolean
    emit(event: 'setup', settings: ClusterSettings): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'disconnect', listener: (worker: Worker) => void): this
    on(event: 'exit', listener: (worker: Worker, code: number, signal: string) => void): this
    on(event: 'fork', listener: (worker: Worker) => void): this
    on(event: 'listening', listener: (worker: Worker, address: Address) => void): this
    on(
      event: 'message',
      listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
    ): this
    on(event: 'online', listener: (worker: Worker) => void): this
    on(event: 'setup', listener: (settings: ClusterSettings) => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'disconnect', listener: (worker: Worker) => void): this
    once(event: 'exit', listener: (worker: Worker, code: number, signal: string) => void): this
    once(event: 'fork', listener: (worker: Worker) => void): this
    once(event: 'listening', listener: (worker: Worker, address: Address) => void): this
    once(
      event: 'message',
      listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
    ): this
    once(event: 'online', listener: (worker: Worker) => void): this
    once(event: 'setup', listener: (settings: ClusterSettings) => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'disconnect', listener: (worker: Worker) => void): this
    prependListener(
      event: 'exit',
      listener: (worker: Worker, code: number, signal: string) => void
    ): this
    prependListener(event: 'fork', listener: (worker: Worker) => void): this
    prependListener(event: 'listening', listener: (worker: Worker, address: Address) => void): this
    prependListener(
      event: 'message',
      listener: (worker: Worker, message: any, handle?: net.Socket | net.Server) => void
    ): this
    prependListener(event: 'online', listener: (worker: Worker) => void): this
    prependListener(event: 'setup', listener: (settings: ClusterSettings) => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'disconnect', listener: (worker: Worker) => void): this
    prependOnceListener(
      event: 'exit',
      listener: (worker: Worker, code: number, signal: string) => void
    ): this
    prependOnceListener(event: 'fork', listener: (worker: Worker) => void): this
    prependOnceListener(
      event: 'listening',
      listener: (worker: Worker, address: Address) => void
    ): this
    prependOnceListener(
      event: 'message',
      listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void
    ): this
    prependOnceListener(event: 'online', listener: (worker: Worker) => void): this
    prependOnceListener(event: 'setup', listener: (settings: ClusterSettings) => void): this
  }
  const cluster: Cluster
  export default cluster
}
declare module 'node:cluster' {
  export * from 'cluster'
  export { default as default } from 'cluster'
}
declare module 'constants' {
  import { constants as osConstants, SignalConstants } from 'node:os'
  import { constants as cryptoConstants } from 'node:crypto'
  import { constants as fsConstants } from 'node:fs'
  const exp: typeof osConstants.errno &
    typeof osConstants.priority &
    SignalConstants &
    typeof cryptoConstants &
    typeof fsConstants
  export = exp
}
declare module 'node:constants' {
  import constants = require('constants')
  export = constants
}
declare module 'crypto' {
  import * as stream from 'node:stream'
  import { PeerCertificate } from 'node:tls'
  interface Certificate {
    exportChallenge(spkac: BinaryLike): Buffer
    exportPublicKey(spkac: BinaryLike, encoding?: string): Buffer
    verifySpkac(spkac: NodeJS.ArrayBufferView): boolean
  }
  const Certificate: Certificate & {
    new (): Certificate
    (): Certificate
    exportChallenge(spkac: BinaryLike): Buffer
    exportPublicKey(spkac: BinaryLike, encoding?: string): Buffer
    verifySpkac(spkac: NodeJS.ArrayBufferView): boolean
  }
  namespace constants {
    const OPENSSL_VERSION_NUMBER: number
    const SSL_OP_ALL: number
    const SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number
    const SSL_OP_CIPHER_SERVER_PREFERENCE: number
    const SSL_OP_CISCO_ANYCONNECT: number
    const SSL_OP_COOKIE_EXCHANGE: number
    const SSL_OP_CRYPTOPRO_TLSEXT_BUG: number
    const SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number
    const SSL_OP_EPHEMERAL_RSA: number
    const SSL_OP_LEGACY_SERVER_CONNECT: number
    const SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number
    const SSL_OP_MICROSOFT_SESS_ID_BUG: number
    const SSL_OP_MSIE_SSLV2_RSA_PADDING: number
    const SSL_OP_NETSCAPE_CA_DN_BUG: number
    const SSL_OP_NETSCAPE_CHALLENGE_BUG: number
    const SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number
    const SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number
    const SSL_OP_NO_COMPRESSION: number
    const SSL_OP_NO_QUERY_MTU: number
    const SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number
    const SSL_OP_NO_SSLv2: number
    const SSL_OP_NO_SSLv3: number
    const SSL_OP_NO_TICKET: number
    const SSL_OP_NO_TLSv1: number
    const SSL_OP_NO_TLSv1_1: number
    const SSL_OP_NO_TLSv1_2: number
    const SSL_OP_PKCS1_CHECK_1: number
    const SSL_OP_PKCS1_CHECK_2: number
    const SSL_OP_SINGLE_DH_USE: number
    const SSL_OP_SINGLE_ECDH_USE: number
    const SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number
    const SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number
    const SSL_OP_TLS_BLOCK_PADDING_BUG: number
    const SSL_OP_TLS_D5_BUG: number
    const SSL_OP_TLS_ROLLBACK_BUG: number
    const ENGINE_METHOD_RSA: number
    const ENGINE_METHOD_DSA: number
    const ENGINE_METHOD_DH: number
    const ENGINE_METHOD_RAND: number
    const ENGINE_METHOD_EC: number
    const ENGINE_METHOD_CIPHERS: number
    const ENGINE_METHOD_DIGESTS: number
    const ENGINE_METHOD_PKEY_METHS: number
    const ENGINE_METHOD_PKEY_ASN1_METHS: number
    const ENGINE_METHOD_ALL: number
    const ENGINE_METHOD_NONE: number
    const DH_CHECK_P_NOT_SAFE_PRIME: number
    const DH_CHECK_P_NOT_PRIME: number
    const DH_UNABLE_TO_CHECK_GENERATOR: number
    const DH_NOT_SUITABLE_GENERATOR: number
    const ALPN_ENABLED: number
    const RSA_PKCS1_PADDING: number
    const RSA_SSLV23_PADDING: number
    const RSA_NO_PADDING: number
    const RSA_PKCS1_OAEP_PADDING: number
    const RSA_X931_PADDING: number
    const RSA_PKCS1_PSS_PADDING: number
    const RSA_PSS_SALTLEN_DIGEST: number
    const RSA_PSS_SALTLEN_MAX_SIGN: number
    const RSA_PSS_SALTLEN_AUTO: number
    const POINT_CONVERSION_COMPRESSED: number
    const POINT_CONVERSION_UNCOMPRESSED: number
    const POINT_CONVERSION_HYBRID: number
    const defaultCoreCipherList: string
    const defaultCipherList: string
  }
  interface HashOptions extends stream.TransformOptions {
    outputLength?: number | undefined
  }
  const fips: boolean
  function createHash(algorithm: string, options?: HashOptions): Hash
  function createHmac(
    algorithm: string,
    key: BinaryLike | KeyObject,
    options?: stream.TransformOptions
  ): Hmac
  type BinaryToTextEncoding = 'base64' | 'base64url' | 'hex' | 'binary'
  type CharacterEncoding = 'utf8' | 'utf-8' | 'utf16le' | 'latin1'
  type LegacyCharacterEncoding = 'ascii' | 'binary' | 'ucs2' | 'ucs-2'
  type Encoding = BinaryToTextEncoding | CharacterEncoding | LegacyCharacterEncoding
  type ECDHKeyFormat = 'compressed' | 'uncompressed' | 'hybrid'
  class Hash extends stream.Transform {
    private constructor()
    copy(options?: stream.TransformOptions): Hash
    update(data: BinaryLike): Hash
    update(data: string, inputEncoding: Encoding): Hash
    digest(): Buffer
    digest(encoding: BinaryToTextEncoding): string
  }
  class Hmac extends stream.Transform {
    private constructor()
    update(data: BinaryLike): Hmac
    update(data: string, inputEncoding: Encoding): Hmac
    digest(): Buffer
    digest(encoding: BinaryToTextEncoding): string
  }
  type KeyObjectType = 'secret' | 'public' | 'private'
  interface KeyExportOptions<T extends KeyFormat> {
    type: 'pkcs1' | 'spki' | 'pkcs8' | 'sec1'
    format: T
    cipher?: string | undefined
    passphrase?: string | Buffer | undefined
  }
  interface JwkKeyExportOptions {
    format: 'jwk'
  }
  interface JsonWebKey {
    crv?: string | undefined
    d?: string | undefined
    dp?: string | undefined
    dq?: string | undefined
    e?: string | undefined
    k?: string | undefined
    kty?: string | undefined
    n?: string | undefined
    p?: string | undefined
    q?: string | undefined
    qi?: string | undefined
    x?: string | undefined
    y?: string | undefined
    [key: string]: unknown
  }
  interface AsymmetricKeyDetails {
    modulusLength?: number | undefined
    publicExponent?: bigint | undefined
    hashAlgorithm?: string | undefined
    mgf1HashAlgorithm?: string | undefined
    saltLength?: number | undefined
    divisorLength?: number | undefined
    namedCurve?: string | undefined
  }
  interface JwkKeyExportOptions {
    format: 'jwk'
  }
  class KeyObject {
    private constructor()
    static from(key: webcrypto.CryptoKey): KeyObject
    asymmetricKeyType?: KeyType | undefined
    asymmetricKeySize?: number | undefined
    asymmetricKeyDetails?: AsymmetricKeyDetails | undefined
    export(options: KeyExportOptions<'pem'>): string | Buffer
    export(options?: KeyExportOptions<'der'>): Buffer
    export(options?: JwkKeyExportOptions): JsonWebKey
    symmetricKeySize?: number | undefined
    type: KeyObjectType
  }
  type CipherCCMTypes = 'aes-128-ccm' | 'aes-192-ccm' | 'aes-256-ccm' | 'chacha20-poly1305'
  type CipherGCMTypes = 'aes-128-gcm' | 'aes-192-gcm' | 'aes-256-gcm'
  type BinaryLike = string | NodeJS.ArrayBufferView
  type CipherKey = BinaryLike | KeyObject
  interface CipherCCMOptions extends stream.TransformOptions {
    authTagLength: number
  }
  interface CipherGCMOptions extends stream.TransformOptions {
    authTagLength?: number | undefined
  }
  function createCipher(
    algorithm: CipherCCMTypes,
    password: BinaryLike,
    options: CipherCCMOptions
  ): CipherCCM
  function createCipher(
    algorithm: CipherGCMTypes,
    password: BinaryLike,
    options?: CipherGCMOptions
  ): CipherGCM
  function createCipher(
    algorithm: string,
    password: BinaryLike,
    options?: stream.TransformOptions
  ): Cipher
  function createCipheriv(
    algorithm: CipherCCMTypes,
    key: CipherKey,
    iv: BinaryLike | null,
    options: CipherCCMOptions
  ): CipherCCM
  function createCipheriv(
    algorithm: CipherGCMTypes,
    key: CipherKey,
    iv: BinaryLike | null,
    options?: CipherGCMOptions
  ): CipherGCM
  function createCipheriv(
    algorithm: string,
    key: CipherKey,
    iv: BinaryLike | null,
    options?: stream.TransformOptions
  ): Cipher
  class Cipher extends stream.Transform {
    private constructor()
    update(data: BinaryLike): Buffer
    update(data: string, inputEncoding: Encoding): Buffer
    update(data: NodeJS.ArrayBufferView, inputEncoding: undefined, outputEncoding: Encoding): string
    update(data: string, inputEncoding: Encoding | undefined, outputEncoding: Encoding): string
    final(): Buffer
    final(outputEncoding: BufferEncoding): string
    setAutoPadding(autoPadding?: boolean): this
  }
  interface CipherCCM extends Cipher {
    setAAD(
      buffer: NodeJS.ArrayBufferView,
      options: {
        plaintextLength: number
      }
    ): this
    getAuthTag(): Buffer
  }
  interface CipherGCM extends Cipher {
    setAAD(
      buffer: NodeJS.ArrayBufferView,
      options?: {
        plaintextLength: number
      }
    ): this
    getAuthTag(): Buffer
  }
  function createDecipher(
    algorithm: CipherCCMTypes,
    password: BinaryLike,
    options: CipherCCMOptions
  ): DecipherCCM
  function createDecipher(
    algorithm: CipherGCMTypes,
    password: BinaryLike,
    options?: CipherGCMOptions
  ): DecipherGCM
  function createDecipher(
    algorithm: string,
    password: BinaryLike,
    options?: stream.TransformOptions
  ): Decipher
  function createDecipheriv(
    algorithm: CipherCCMTypes,
    key: CipherKey,
    iv: BinaryLike | null,
    options: CipherCCMOptions
  ): DecipherCCM
  function createDecipheriv(
    algorithm: CipherGCMTypes,
    key: CipherKey,
    iv: BinaryLike | null,
    options?: CipherGCMOptions
  ): DecipherGCM
  function createDecipheriv(
    algorithm: string,
    key: CipherKey,
    iv: BinaryLike | null,
    options?: stream.TransformOptions
  ): Decipher
  class Decipher extends stream.Transform {
    private constructor()
    update(data: NodeJS.ArrayBufferView): Buffer
    update(data: string, inputEncoding: Encoding): Buffer
    update(data: NodeJS.ArrayBufferView, inputEncoding: undefined, outputEncoding: Encoding): string
    update(data: string, inputEncoding: Encoding | undefined, outputEncoding: Encoding): string
    final(): Buffer
    final(outputEncoding: BufferEncoding): string
    setAutoPadding(auto_padding?: boolean): this
  }
  interface DecipherCCM extends Decipher {
    setAuthTag(buffer: NodeJS.ArrayBufferView): this
    setAAD(
      buffer: NodeJS.ArrayBufferView,
      options: {
        plaintextLength: number
      }
    ): this
  }
  interface DecipherGCM extends Decipher {
    setAuthTag(buffer: NodeJS.ArrayBufferView): this
    setAAD(
      buffer: NodeJS.ArrayBufferView,
      options?: {
        plaintextLength: number
      }
    ): this
  }
  interface PrivateKeyInput {
    key: string | Buffer
    format?: KeyFormat | undefined
    type?: 'pkcs1' | 'pkcs8' | 'sec1' | undefined
    passphrase?: string | Buffer | undefined
  }
  interface PublicKeyInput {
    key: string | Buffer
    format?: KeyFormat | undefined
    type?: 'pkcs1' | 'spki' | undefined
  }
  function generateKey(
    type: 'hmac' | 'aes',
    options: {
      length: number
    },
    callback: (err: Error | null, key: KeyObject) => void
  ): void
  function generateKeySync(
    type: 'hmac' | 'aes',
    options: {
      length: number
    }
  ): KeyObject
  interface JsonWebKeyInput {
    key: JsonWebKey
    format: 'jwk'
  }
  function createPrivateKey(key: PrivateKeyInput | string | Buffer | JsonWebKeyInput): KeyObject
  function createPublicKey(
    key: PublicKeyInput | string | Buffer | KeyObject | JsonWebKeyInput
  ): KeyObject
  function createSecretKey(key: NodeJS.ArrayBufferView): KeyObject
  function createSecretKey(key: string, encoding: BufferEncoding): KeyObject
  function createSign(algorithm: string, options?: stream.WritableOptions): Sign
  type DSAEncoding = 'der' | 'ieee-p1363'
  interface SigningOptions {
    padding?: number | undefined
    saltLength?: number | undefined
    dsaEncoding?: DSAEncoding | undefined
  }
  interface SignPrivateKeyInput extends PrivateKeyInput, SigningOptions {}
  interface SignKeyObjectInput extends SigningOptions {
    key: KeyObject
  }
  interface VerifyPublicKeyInput extends PublicKeyInput, SigningOptions {}
  interface VerifyKeyObjectInput extends SigningOptions {
    key: KeyObject
  }
  type KeyLike = string | Buffer | KeyObject
  class Sign extends stream.Writable {
    private constructor()
    update(data: BinaryLike): this
    update(data: string, inputEncoding: Encoding): this
    sign(privateKey: KeyLike | SignKeyObjectInput | SignPrivateKeyInput): Buffer
    sign(
      privateKey: KeyLike | SignKeyObjectInput | SignPrivateKeyInput,
      outputFormat: BinaryToTextEncoding
    ): string
  }
  function createVerify(algorithm: string, options?: stream.WritableOptions): Verify
  class Verify extends stream.Writable {
    private constructor()
    update(data: BinaryLike): Verify
    update(data: string, inputEncoding: Encoding): Verify
    verify(
      object: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
      signature: NodeJS.ArrayBufferView
    ): boolean
    verify(
      object: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
      signature: string,
      signature_format?: BinaryToTextEncoding
    ): boolean
  }
  function createDiffieHellman(
    primeLength: number,
    generator?: number | NodeJS.ArrayBufferView
  ): DiffieHellman
  function createDiffieHellman(prime: NodeJS.ArrayBufferView): DiffieHellman
  function createDiffieHellman(prime: string, primeEncoding: BinaryToTextEncoding): DiffieHellman
  function createDiffieHellman(
    prime: string,
    primeEncoding: BinaryToTextEncoding,
    generator: number | NodeJS.ArrayBufferView
  ): DiffieHellman
  function createDiffieHellman(
    prime: string,
    primeEncoding: BinaryToTextEncoding,
    generator: string,
    generatorEncoding: BinaryToTextEncoding
  ): DiffieHellman
  class DiffieHellman {
    private constructor()
    generateKeys(): Buffer
    generateKeys(encoding: BinaryToTextEncoding): string
    computeSecret(otherPublicKey: NodeJS.ArrayBufferView): Buffer
    computeSecret(otherPublicKey: string, inputEncoding: BinaryToTextEncoding): Buffer
    computeSecret(
      otherPublicKey: NodeJS.ArrayBufferView,
      outputEncoding: BinaryToTextEncoding
    ): string
    computeSecret(
      otherPublicKey: string,
      inputEncoding: BinaryToTextEncoding,
      outputEncoding: BinaryToTextEncoding
    ): string
    getPrime(): Buffer
    getPrime(encoding: BinaryToTextEncoding): string
    getGenerator(): Buffer
    getGenerator(encoding: BinaryToTextEncoding): string
    getPublicKey(): Buffer
    getPublicKey(encoding: BinaryToTextEncoding): string
    getPrivateKey(): Buffer
    getPrivateKey(encoding: BinaryToTextEncoding): string
    setPublicKey(publicKey: NodeJS.ArrayBufferView): void
    setPublicKey(publicKey: string, encoding: BufferEncoding): void
    setPrivateKey(privateKey: NodeJS.ArrayBufferView): void
    setPrivateKey(privateKey: string, encoding: BufferEncoding): void
    verifyError: number
  }
  function getDiffieHellman(groupName: string): DiffieHellman
  function pbkdf2(
    password: BinaryLike,
    salt: BinaryLike,
    iterations: number,
    keylen: number,
    digest: string,
    callback: (err: Error | null, derivedKey: Buffer) => void
  ): void
  function pbkdf2Sync(
    password: BinaryLike,
    salt: BinaryLike,
    iterations: number,
    keylen: number,
    digest: string
  ): Buffer
  function randomBytes(size: number): Buffer
  function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void
  function pseudoRandomBytes(size: number): Buffer
  function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void
  function randomInt(max: number): number
  function randomInt(min: number, max: number): number
  function randomInt(max: number, callback: (err: Error | null, value: number) => void): void
  function randomInt(
    min: number,
    max: number,
    callback: (err: Error | null, value: number) => void
  ): void
  function randomFillSync<T extends NodeJS.ArrayBufferView>(
    buffer: T,
    offset?: number,
    size?: number
  ): T
  function randomFill<T extends NodeJS.ArrayBufferView>(
    buffer: T,
    callback: (err: Error | null, buf: T) => void
  ): void
  function randomFill<T extends NodeJS.ArrayBufferView>(
    buffer: T,
    offset: number,
    callback: (err: Error | null, buf: T) => void
  ): void
  function randomFill<T extends NodeJS.ArrayBufferView>(
    buffer: T,
    offset: number,
    size: number,
    callback: (err: Error | null, buf: T) => void
  ): void
  interface ScryptOptions {
    cost?: number | undefined
    blockSize?: number | undefined
    parallelization?: number | undefined
    N?: number | undefined
    r?: number | undefined
    p?: number | undefined
    maxmem?: number | undefined
  }
  function scrypt(
    password: BinaryLike,
    salt: BinaryLike,
    keylen: number,
    callback: (err: Error | null, derivedKey: Buffer) => void
  ): void
  function scrypt(
    password: BinaryLike,
    salt: BinaryLike,
    keylen: number,
    options: ScryptOptions,
    callback: (err: Error | null, derivedKey: Buffer) => void
  ): void
  function scryptSync(
    password: BinaryLike,
    salt: BinaryLike,
    keylen: number,
    options?: ScryptOptions
  ): Buffer
  interface RsaPublicKey {
    key: KeyLike
    padding?: number | undefined
  }
  interface RsaPrivateKey {
    key: KeyLike
    passphrase?: string | undefined
    oaepHash?: string | undefined
    oaepLabel?: NodeJS.TypedArray | undefined
    padding?: number | undefined
  }
  function publicEncrypt(
    key: RsaPublicKey | RsaPrivateKey | KeyLike,
    buffer: NodeJS.ArrayBufferView
  ): Buffer
  function publicDecrypt(
    key: RsaPublicKey | RsaPrivateKey | KeyLike,
    buffer: NodeJS.ArrayBufferView
  ): Buffer
  function privateDecrypt(
    privateKey: RsaPrivateKey | KeyLike,
    buffer: NodeJS.ArrayBufferView
  ): Buffer
  function privateEncrypt(
    privateKey: RsaPrivateKey | KeyLike,
    buffer: NodeJS.ArrayBufferView
  ): Buffer
  function getCiphers(): string[]
  function getCurves(): string[]
  function getFips(): 1 | 0
  function getHashes(): string[]
  class ECDH {
    private constructor()
    static convertKey(
      key: BinaryLike,
      curve: string,
      inputEncoding?: BinaryToTextEncoding,
      outputEncoding?: 'latin1' | 'hex' | 'base64' | 'base64url',
      format?: 'uncompressed' | 'compressed' | 'hybrid'
    ): Buffer | string
    generateKeys(): Buffer
    generateKeys(encoding: BinaryToTextEncoding, format?: ECDHKeyFormat): string
    computeSecret(otherPublicKey: NodeJS.ArrayBufferView): Buffer
    computeSecret(otherPublicKey: string, inputEncoding: BinaryToTextEncoding): Buffer
    computeSecret(
      otherPublicKey: NodeJS.ArrayBufferView,
      outputEncoding: BinaryToTextEncoding
    ): string
    computeSecret(
      otherPublicKey: string,
      inputEncoding: BinaryToTextEncoding,
      outputEncoding: BinaryToTextEncoding
    ): string
    getPrivateKey(): Buffer
    getPrivateKey(encoding: BinaryToTextEncoding): string
    getPublicKey(): Buffer
    getPublicKey(encoding: BinaryToTextEncoding, format?: ECDHKeyFormat): string
    setPrivateKey(privateKey: NodeJS.ArrayBufferView): void
    setPrivateKey(privateKey: string, encoding: BinaryToTextEncoding): void
  }
  function createECDH(curveName: string): ECDH
  function timingSafeEqual(a: NodeJS.ArrayBufferView, b: NodeJS.ArrayBufferView): boolean
  const DEFAULT_ENCODING: BufferEncoding
  type KeyType = 'rsa' | 'rsa-pss' | 'dsa' | 'ec' | 'ed25519' | 'ed448' | 'x25519' | 'x448'
  type KeyFormat = 'pem' | 'der'
  interface BasePrivateKeyEncodingOptions<T extends KeyFormat> {
    format: T
    cipher?: string | undefined
    passphrase?: string | undefined
  }
  interface KeyPairKeyObjectResult {
    publicKey: KeyObject
    privateKey: KeyObject
  }
  interface ED25519KeyPairKeyObjectOptions {}
  interface ED448KeyPairKeyObjectOptions {}
  interface X25519KeyPairKeyObjectOptions {}
  interface X448KeyPairKeyObjectOptions {}
  interface ECKeyPairKeyObjectOptions {
    namedCurve: string
  }
  interface RSAKeyPairKeyObjectOptions {
    modulusLength: number
    publicExponent?: number | undefined
  }
  interface RSAPSSKeyPairKeyObjectOptions {
    modulusLength: number
    publicExponent?: number | undefined
    hashAlgorithm?: string
    mgf1HashAlgorithm?: string
    saltLength?: string
  }
  interface DSAKeyPairKeyObjectOptions {
    modulusLength: number
    divisorLength: number
  }
  interface RSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    modulusLength: number
    publicExponent?: number | undefined
    publicKeyEncoding: {
      type: 'pkcs1' | 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'pkcs1' | 'pkcs8'
    }
  }
  interface RSAPSSKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    modulusLength: number
    publicExponent?: number | undefined
    hashAlgorithm?: string
    mgf1HashAlgorithm?: string
    saltLength?: string
    publicKeyEncoding: {
      type: 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'pkcs8'
    }
  }
  interface DSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    modulusLength: number
    divisorLength: number
    publicKeyEncoding: {
      type: 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'pkcs8'
    }
  }
  interface ECKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    namedCurve: string
    publicKeyEncoding: {
      type: 'pkcs1' | 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'sec1' | 'pkcs8'
    }
  }
  interface ED25519KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    publicKeyEncoding: {
      type: 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'pkcs8'
    }
  }
  interface ED448KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    publicKeyEncoding: {
      type: 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'pkcs8'
    }
  }
  interface X25519KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    publicKeyEncoding: {
      type: 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'pkcs8'
    }
  }
  interface X448KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
    publicKeyEncoding: {
      type: 'spki'
      format: PubF
    }
    privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
      type: 'pkcs8'
    }
  }
  interface KeyPairSyncResult<T1 extends string | Buffer, T2 extends string | Buffer> {
    publicKey: T1
    privateKey: T2
  }
  function generateKeyPairSync(
    type: 'rsa',
    options: RSAKeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'rsa',
    options: RSAKeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'rsa',
    options: RSAKeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'rsa',
    options: RSAKeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'rsa',
    options: RSAKeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPairSync(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'rsa-pss',
    options: RSAPSSKeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPairSync(
    type: 'dsa',
    options: DSAKeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'dsa',
    options: DSAKeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'dsa',
    options: DSAKeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'dsa',
    options: DSAKeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'dsa',
    options: DSAKeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPairSync(
    type: 'ec',
    options: ECKeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'ec',
    options: ECKeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'ec',
    options: ECKeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'ec',
    options: ECKeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'ec',
    options: ECKeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPairSync(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'ed25519',
    options?: ED25519KeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPairSync(
    type: 'ed448',
    options: ED448KeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'ed448',
    options: ED448KeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'ed448',
    options: ED448KeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'ed448',
    options: ED448KeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'ed448',
    options?: ED448KeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPairSync(
    type: 'x25519',
    options: X25519KeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'x25519',
    options: X25519KeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'x25519',
    options: X25519KeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'x25519',
    options: X25519KeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'x25519',
    options?: X25519KeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPairSync(
    type: 'x448',
    options: X448KeyPairOptions<'pem', 'pem'>
  ): KeyPairSyncResult<string, string>
  function generateKeyPairSync(
    type: 'x448',
    options: X448KeyPairOptions<'pem', 'der'>
  ): KeyPairSyncResult<string, Buffer>
  function generateKeyPairSync(
    type: 'x448',
    options: X448KeyPairOptions<'der', 'pem'>
  ): KeyPairSyncResult<Buffer, string>
  function generateKeyPairSync(
    type: 'x448',
    options: X448KeyPairOptions<'der', 'der'>
  ): KeyPairSyncResult<Buffer, Buffer>
  function generateKeyPairSync(
    type: 'x448',
    options?: X448KeyPairKeyObjectOptions
  ): KeyPairKeyObjectResult
  function generateKeyPair(
    type: 'rsa',
    options: RSAKeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'rsa',
    options: RSAKeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'rsa',
    options: RSAKeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'rsa',
    options: RSAKeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'rsa',
    options: RSAKeyPairKeyObjectOptions,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  function generateKeyPair(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'rsa-pss',
    options: RSAPSSKeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'rsa-pss',
    options: RSAPSSKeyPairKeyObjectOptions,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  function generateKeyPair(
    type: 'dsa',
    options: DSAKeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'dsa',
    options: DSAKeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'dsa',
    options: DSAKeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'dsa',
    options: DSAKeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'dsa',
    options: DSAKeyPairKeyObjectOptions,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  function generateKeyPair(
    type: 'ec',
    options: ECKeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'ec',
    options: ECKeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'ec',
    options: ECKeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'ec',
    options: ECKeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'ec',
    options: ECKeyPairKeyObjectOptions,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  function generateKeyPair(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'ed25519',
    options: ED25519KeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'ed25519',
    options: ED25519KeyPairKeyObjectOptions | undefined,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  function generateKeyPair(
    type: 'ed448',
    options: ED448KeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'ed448',
    options: ED448KeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'ed448',
    options: ED448KeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'ed448',
    options: ED448KeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'ed448',
    options: ED448KeyPairKeyObjectOptions | undefined,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  function generateKeyPair(
    type: 'x25519',
    options: X25519KeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'x25519',
    options: X25519KeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'x25519',
    options: X25519KeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'x25519',
    options: X25519KeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'x25519',
    options: X25519KeyPairKeyObjectOptions | undefined,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  function generateKeyPair(
    type: 'x448',
    options: X448KeyPairOptions<'pem', 'pem'>,
    callback: (err: Error | null, publicKey: string, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'x448',
    options: X448KeyPairOptions<'pem', 'der'>,
    callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'x448',
    options: X448KeyPairOptions<'der', 'pem'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void
  ): void
  function generateKeyPair(
    type: 'x448',
    options: X448KeyPairOptions<'der', 'der'>,
    callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void
  ): void
  function generateKeyPair(
    type: 'x448',
    options: X448KeyPairKeyObjectOptions | undefined,
    callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void
  ): void
  namespace generateKeyPair {
    function __promisify__(
      type: 'rsa',
      options: RSAKeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'rsa',
      options: RSAKeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'rsa',
      options: RSAKeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'rsa',
      options: RSAKeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'rsa',
      options: RSAKeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
    function __promisify__(
      type: 'rsa-pss',
      options: RSAPSSKeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'rsa-pss',
      options: RSAPSSKeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'rsa-pss',
      options: RSAPSSKeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'rsa-pss',
      options: RSAPSSKeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'rsa-pss',
      options: RSAPSSKeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
    function __promisify__(
      type: 'dsa',
      options: DSAKeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'dsa',
      options: DSAKeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'dsa',
      options: DSAKeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'dsa',
      options: DSAKeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'dsa',
      options: DSAKeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
    function __promisify__(
      type: 'ec',
      options: ECKeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'ec',
      options: ECKeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'ec',
      options: ECKeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'ec',
      options: ECKeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'ec',
      options: ECKeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
    function __promisify__(
      type: 'ed25519',
      options: ED25519KeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'ed25519',
      options: ED25519KeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'ed25519',
      options: ED25519KeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'ed25519',
      options: ED25519KeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'ed25519',
      options?: ED25519KeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
    function __promisify__(
      type: 'ed448',
      options: ED448KeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'ed448',
      options: ED448KeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'ed448',
      options: ED448KeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'ed448',
      options: ED448KeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'ed448',
      options?: ED448KeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
    function __promisify__(
      type: 'x25519',
      options: X25519KeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'x25519',
      options: X25519KeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'x25519',
      options: X25519KeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'x25519',
      options: X25519KeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'x25519',
      options?: X25519KeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
    function __promisify__(
      type: 'x448',
      options: X448KeyPairOptions<'pem', 'pem'>
    ): Promise<{
      publicKey: string
      privateKey: string
    }>
    function __promisify__(
      type: 'x448',
      options: X448KeyPairOptions<'pem', 'der'>
    ): Promise<{
      publicKey: string
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'x448',
      options: X448KeyPairOptions<'der', 'pem'>
    ): Promise<{
      publicKey: Buffer
      privateKey: string
    }>
    function __promisify__(
      type: 'x448',
      options: X448KeyPairOptions<'der', 'der'>
    ): Promise<{
      publicKey: Buffer
      privateKey: Buffer
    }>
    function __promisify__(
      type: 'x448',
      options?: X448KeyPairKeyObjectOptions
    ): Promise<KeyPairKeyObjectResult>
  }
  function sign(
    algorithm: string | null | undefined,
    data: NodeJS.ArrayBufferView,
    key: KeyLike | SignKeyObjectInput | SignPrivateKeyInput
  ): Buffer
  function sign(
    algorithm: string | null | undefined,
    data: NodeJS.ArrayBufferView,
    key: KeyLike | SignKeyObjectInput | SignPrivateKeyInput,
    callback: (error: Error | null, data: Buffer) => void
  ): void
  function verify(
    algorithm: string | null | undefined,
    data: NodeJS.ArrayBufferView,
    key: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
    signature: NodeJS.ArrayBufferView
  ): boolean
  function verify(
    algorithm: string | null | undefined,
    data: NodeJS.ArrayBufferView,
    key: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
    signature: NodeJS.ArrayBufferView,
    callback: (error: Error | null, result: boolean) => void
  ): void
  function diffieHellman(options: { privateKey: KeyObject; publicKey: KeyObject }): Buffer
  type CipherMode =
    | 'cbc'
    | 'ccm'
    | 'cfb'
    | 'ctr'
    | 'ecb'
    | 'gcm'
    | 'ocb'
    | 'ofb'
    | 'stream'
    | 'wrap'
    | 'xts'
  interface CipherInfoOptions {
    keyLength?: number | undefined
    ivLength?: number | undefined
  }
  interface CipherInfo {
    name: string
    nid: number
    blockSize?: number | undefined
    ivLength?: number | undefined
    keyLength: number
    mode: CipherMode
  }
  function getCipherInfo(
    nameOrNid: string | number,
    options?: CipherInfoOptions
  ): CipherInfo | undefined
  function hkdf(
    digest: string,
    irm: BinaryLike | KeyObject,
    salt: BinaryLike,
    info: BinaryLike,
    keylen: number,
    callback: (err: Error | null, derivedKey: ArrayBuffer) => void
  ): void
  function hkdfSync(
    digest: string,
    ikm: BinaryLike | KeyObject,
    salt: BinaryLike,
    info: BinaryLike,
    keylen: number
  ): ArrayBuffer
  interface SecureHeapUsage {
    total: number
    min: number
    used: number
    utilization: number
  }
  function secureHeapUsed(): SecureHeapUsage
  interface RandomUUIDOptions {
    disableEntropyCache?: boolean | undefined
  }
  function randomUUID(options?: RandomUUIDOptions): string
  interface X509CheckOptions {
    subject: 'always' | 'never'
    wildcards: boolean
    partialWildcards: boolean
    multiLabelWildcards: boolean
    singleLabelSubdomains: boolean
  }
  class X509Certificate {
    readonly ca: boolean
    readonly fingerprint: string
    readonly fingerprint256: string
    readonly subject: string
    readonly subjectAltName: string
    readonly infoAccess: string
    readonly keyUsage: string[]
    readonly issuer: string
    readonly issuerCertificate?: X509Certificate | undefined
    readonly publicKey: KeyObject
    readonly raw: Buffer
    readonly serialNumber: string
    readonly validFrom: string
    readonly validTo: string
    constructor(buffer: BinaryLike)
    checkEmail(email: string, options?: X509CheckOptions): string | undefined
    checkHost(name: string, options?: X509CheckOptions): string | undefined
    checkIP(ip: string, options?: X509CheckOptions): string | undefined
    checkIssued(otherCert: X509Certificate): boolean
    checkPrivateKey(privateKey: KeyObject): boolean
    toJSON(): string
    toLegacyObject(): PeerCertificate
    toString(): string
    verify(publicKey: KeyObject): boolean
  }
  type LargeNumberLike = NodeJS.ArrayBufferView | SharedArrayBuffer | ArrayBuffer | bigint
  interface GeneratePrimeOptions {
    add?: LargeNumberLike | undefined
    rem?: LargeNumberLike | undefined
    safe?: boolean | undefined
    bigint?: boolean | undefined
  }
  interface GeneratePrimeOptionsBigInt extends GeneratePrimeOptions {
    bigint: true
  }
  interface GeneratePrimeOptionsArrayBuffer extends GeneratePrimeOptions {
    bigint?: false | undefined
  }
  function generatePrime(
    size: number,
    callback: (err: Error | null, prime: ArrayBuffer) => void
  ): void
  function generatePrime(
    size: number,
    options: GeneratePrimeOptionsBigInt,
    callback: (err: Error | null, prime: bigint) => void
  ): void
  function generatePrime(
    size: number,
    options: GeneratePrimeOptionsArrayBuffer,
    callback: (err: Error | null, prime: ArrayBuffer) => void
  ): void
  function generatePrime(
    size: number,
    options: GeneratePrimeOptions,
    callback: (err: Error | null, prime: ArrayBuffer | bigint) => void
  ): void
  function generatePrimeSync(size: number): ArrayBuffer
  function generatePrimeSync(size: number, options: GeneratePrimeOptionsBigInt): bigint
  function generatePrimeSync(size: number, options: GeneratePrimeOptionsArrayBuffer): ArrayBuffer
  function generatePrimeSync(size: number, options: GeneratePrimeOptions): ArrayBuffer | bigint
  interface CheckPrimeOptions {
    checks?: number | undefined
  }
  function checkPrime(
    value: LargeNumberLike,
    callback: (err: Error | null, result: boolean) => void
  ): void
  function checkPrime(
    value: LargeNumberLike,
    options: CheckPrimeOptions,
    callback: (err: Error | null, result: boolean) => void
  ): void
  function checkPrimeSync(candidate: LargeNumberLike, options?: CheckPrimeOptions): boolean
  namespace webcrypto {
    class CryptoKey {}
  }
}
declare module 'node:crypto' {
  export * from 'crypto'
}
declare module 'dgram' {
  import { AddressInfo } from 'node:net'
  import * as dns from 'node:dns'
  import { EventEmitter, Abortable } from 'node:events'
  interface RemoteInfo {
    address: string
    family: 'IPv4' | 'IPv6'
    port: number
    size: number
  }
  interface BindOptions {
    port?: number | undefined
    address?: string | undefined
    exclusive?: boolean | undefined
    fd?: number | undefined
  }
  type SocketType = 'udp4' | 'udp6'
  interface SocketOptions extends Abortable {
    type: SocketType
    reuseAddr?: boolean | undefined
    ipv6Only?: boolean | undefined
    recvBufferSize?: number | undefined
    sendBufferSize?: number | undefined
    lookup?:
      | ((
          hostname: string,
          options: dns.LookupOneOptions,
          callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
        ) => void)
      | undefined
  }
  function createSocket(
    type: SocketType,
    callback?: (msg: Buffer, rinfo: RemoteInfo) => void
  ): Socket
  function createSocket(
    options: SocketOptions,
    callback?: (msg: Buffer, rinfo: RemoteInfo) => void
  ): Socket
  class Socket extends EventEmitter {
    addMembership(multicastAddress: string, multicastInterface?: string): void
    address(): AddressInfo
    bind(port?: number, address?: string, callback?: () => void): this
    bind(port?: number, callback?: () => void): this
    bind(callback?: () => void): this
    bind(options: BindOptions, callback?: () => void): this
    close(callback?: () => void): this
    connect(port: number, address?: string, callback?: () => void): void
    connect(port: number, callback: () => void): void
    disconnect(): void
    dropMembership(multicastAddress: string, multicastInterface?: string): void
    getRecvBufferSize(): number
    getSendBufferSize(): number
    ref(): this
    remoteAddress(): AddressInfo
    send(
      msg: string | Uint8Array | ReadonlyArray<any>,
      port?: number,
      address?: string,
      callback?: (error: Error | null, bytes: number) => void
    ): void
    send(
      msg: string | Uint8Array | ReadonlyArray<any>,
      port?: number,
      callback?: (error: Error | null, bytes: number) => void
    ): void
    send(
      msg: string | Uint8Array | ReadonlyArray<any>,
      callback?: (error: Error | null, bytes: number) => void
    ): void
    send(
      msg: string | Uint8Array,
      offset: number,
      length: number,
      port?: number,
      address?: string,
      callback?: (error: Error | null, bytes: number) => void
    ): void
    send(
      msg: string | Uint8Array,
      offset: number,
      length: number,
      port?: number,
      callback?: (error: Error | null, bytes: number) => void
    ): void
    send(
      msg: string | Uint8Array,
      offset: number,
      length: number,
      callback?: (error: Error | null, bytes: number) => void
    ): void
    setBroadcast(flag: boolean): void
    setMulticastInterface(multicastInterface: string): void
    setMulticastLoopback(flag: boolean): boolean
    setMulticastTTL(ttl: number): number
    setRecvBufferSize(size: number): void
    setSendBufferSize(size: number): void
    setTTL(ttl: number): number
    unref(): this
    addSourceSpecificMembership(
      sourceAddress: string,
      groupAddress: string,
      multicastInterface?: string
    ): void
    dropSourceSpecificMembership(
      sourceAddress: string,
      groupAddress: string,
      multicastInterface?: string
    ): void
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'connect', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'listening', listener: () => void): this
    addListener(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'close'): boolean
    emit(event: 'connect'): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'listening'): boolean
    emit(event: 'message', msg: Buffer, rinfo: RemoteInfo): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'connect', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'listening', listener: () => void): this
    on(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'connect', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'listening', listener: () => void): this
    once(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'connect', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'listening', listener: () => void): this
    prependListener(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'connect', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'listening', listener: () => void): this
    prependOnceListener(event: 'message', listener: (msg: Buffer, rinfo: RemoteInfo) => void): this
  }
}
declare module 'node:dgram' {
  export * from 'dgram'
}
declare module 'diagnostics_channel' {
  function hasSubscribers(name: string): boolean
  function channel(name: string): Channel
  type ChannelListener = (name: string, message: unknown) => void
  class Channel {
    readonly name: string
    readonly hasSubscribers: boolean
    private constructor(name: string)
    subscribe(onMessage: ChannelListener): void
    unsubscribe(onMessage: ChannelListener): void
  }
}
declare module 'node:diagnostics_channel' {
  export * from 'diagnostics_channel'
}
declare module 'dns' {
  import * as dnsPromises from 'node:dns/promises'
  export const ADDRCONFIG: number
  export const V4MAPPED: number
  export const ALL: number
  export interface LookupOptions {
    family?: number | undefined
    hints?: number | undefined
    all?: boolean | undefined
    verbatim?: boolean | undefined
  }
  export interface LookupOneOptions extends LookupOptions {
    all?: false | undefined
  }
  export interface LookupAllOptions extends LookupOptions {
    all: true
  }
  export interface LookupAddress {
    address: string
    family: number
  }
  export function lookup(
    hostname: string,
    family: number,
    callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
  ): void
  export function lookup(
    hostname: string,
    options: LookupOneOptions,
    callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
  ): void
  export function lookup(
    hostname: string,
    options: LookupAllOptions,
    callback: (err: NodeJS.ErrnoException | null, addresses: LookupAddress[]) => void
  ): void
  export function lookup(
    hostname: string,
    options: LookupOptions,
    callback: (
      err: NodeJS.ErrnoException | null,
      address: string | LookupAddress[],
      family: number
    ) => void
  ): void
  export function lookup(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
  ): void
  export namespace lookup {
    function __promisify__(hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>
    function __promisify__(
      hostname: string,
      options?: LookupOneOptions | number
    ): Promise<LookupAddress>
    function __promisify__(
      hostname: string,
      options: LookupOptions
    ): Promise<LookupAddress | LookupAddress[]>
  }
  export function lookupService(
    address: string,
    port: number,
    callback: (err: NodeJS.ErrnoException | null, hostname: string, service: string) => void
  ): void
  export namespace lookupService {
    function __promisify__(
      address: string,
      port: number
    ): Promise<{
      hostname: string
      service: string
    }>
  }
  export interface ResolveOptions {
    ttl: boolean
  }
  export interface ResolveWithTtlOptions extends ResolveOptions {
    ttl: true
  }
  export interface RecordWithTtl {
    address: string
    ttl: number
  }
  export type AnyRecordWithTtl = AnyARecord | AnyAaaaRecord
  export interface AnyARecord extends RecordWithTtl {
    type: 'A'
  }
  export interface AnyAaaaRecord extends RecordWithTtl {
    type: 'AAAA'
  }
  export interface CaaRecord {
    critial: number
    issue?: string | undefined
    issuewild?: string | undefined
    iodef?: string | undefined
    contactemail?: string | undefined
    contactphone?: string | undefined
  }
  export interface MxRecord {
    priority: number
    exchange: string
  }
  export interface AnyMxRecord extends MxRecord {
    type: 'MX'
  }
  export interface NaptrRecord {
    flags: string
    service: string
    regexp: string
    replacement: string
    order: number
    preference: number
  }
  export interface AnyNaptrRecord extends NaptrRecord {
    type: 'NAPTR'
  }
  export interface SoaRecord {
    nsname: string
    hostmaster: string
    serial: number
    refresh: number
    retry: number
    expire: number
    minttl: number
  }
  export interface AnySoaRecord extends SoaRecord {
    type: 'SOA'
  }
  export interface SrvRecord {
    priority: number
    weight: number
    port: number
    name: string
  }
  export interface AnySrvRecord extends SrvRecord {
    type: 'SRV'
  }
  export interface AnyTxtRecord {
    type: 'TXT'
    entries: string[]
  }
  export interface AnyNsRecord {
    type: 'NS'
    value: string
  }
  export interface AnyPtrRecord {
    type: 'PTR'
    value: string
  }
  export interface AnyCnameRecord {
    type: 'CNAME'
    value: string
  }
  export type AnyRecord =
    | AnyARecord
    | AnyAaaaRecord
    | AnyCnameRecord
    | AnyMxRecord
    | AnyNaptrRecord
    | AnyNsRecord
    | AnyPtrRecord
    | AnySoaRecord
    | AnySrvRecord
    | AnyTxtRecord
  export function resolve(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'A',
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'AAAA',
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'ANY',
    callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'CNAME',
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'MX',
    callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'NAPTR',
    callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'NS',
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'PTR',
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'SOA',
    callback: (err: NodeJS.ErrnoException | null, addresses: SoaRecord) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'SRV',
    callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: 'TXT',
    callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void
  ): void
  export function resolve(
    hostname: string,
    rrtype: string,
    callback: (
      err: NodeJS.ErrnoException | null,
      addresses:
        | string[]
        | MxRecord[]
        | NaptrRecord[]
        | SoaRecord
        | SrvRecord[]
        | string[][]
        | AnyRecord[]
    ) => void
  ): void
  export namespace resolve {
    function __promisify__(
      hostname: string,
      rrtype?: 'A' | 'AAAA' | 'CNAME' | 'NS' | 'PTR'
    ): Promise<string[]>
    function __promisify__(hostname: string, rrtype: 'ANY'): Promise<AnyRecord[]>
    function __promisify__(hostname: string, rrtype: 'MX'): Promise<MxRecord[]>
    function __promisify__(hostname: string, rrtype: 'NAPTR'): Promise<NaptrRecord[]>
    function __promisify__(hostname: string, rrtype: 'SOA'): Promise<SoaRecord>
    function __promisify__(hostname: string, rrtype: 'SRV'): Promise<SrvRecord[]>
    function __promisify__(hostname: string, rrtype: 'TXT'): Promise<string[][]>
    function __promisify__(
      hostname: string,
      rrtype: string
    ): Promise<
      string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]
    >
  }
  export function resolve4(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve4(
    hostname: string,
    options: ResolveWithTtlOptions,
    callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void
  ): void
  export function resolve4(
    hostname: string,
    options: ResolveOptions,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void
  ): void
  export namespace resolve4 {
    function __promisify__(hostname: string): Promise<string[]>
    function __promisify__(
      hostname: string,
      options: ResolveWithTtlOptions
    ): Promise<RecordWithTtl[]>
    function __promisify__(
      hostname: string,
      options?: ResolveOptions
    ): Promise<string[] | RecordWithTtl[]>
  }
  export function resolve6(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export function resolve6(
    hostname: string,
    options: ResolveWithTtlOptions,
    callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void
  ): void
  export function resolve6(
    hostname: string,
    options: ResolveOptions,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void
  ): void
  export namespace resolve6 {
    function __promisify__(hostname: string): Promise<string[]>
    function __promisify__(
      hostname: string,
      options: ResolveWithTtlOptions
    ): Promise<RecordWithTtl[]>
    function __promisify__(
      hostname: string,
      options?: ResolveOptions
    ): Promise<string[] | RecordWithTtl[]>
  }
  export function resolveCname(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export namespace resolveCname {
    function __promisify__(hostname: string): Promise<string[]>
  }
  export function resolveCaa(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, records: CaaRecord[]) => void
  ): void
  export namespace resolveCaa {
    function __promisify__(hostname: string): Promise<CaaRecord[]>
  }
  export function resolveMx(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void
  ): void
  export namespace resolveMx {
    function __promisify__(hostname: string): Promise<MxRecord[]>
  }
  export function resolveNaptr(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void
  ): void
  export namespace resolveNaptr {
    function __promisify__(hostname: string): Promise<NaptrRecord[]>
  }
  export function resolveNs(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export namespace resolveNs {
    function __promisify__(hostname: string): Promise<string[]>
  }
  export function resolvePtr(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
  ): void
  export namespace resolvePtr {
    function __promisify__(hostname: string): Promise<string[]>
  }
  export function resolveSoa(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, address: SoaRecord) => void
  ): void
  export namespace resolveSoa {
    function __promisify__(hostname: string): Promise<SoaRecord>
  }
  export function resolveSrv(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void
  ): void
  export namespace resolveSrv {
    function __promisify__(hostname: string): Promise<SrvRecord[]>
  }
  export function resolveTxt(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void
  ): void
  export namespace resolveTxt {
    function __promisify__(hostname: string): Promise<string[][]>
  }
  export function resolveAny(
    hostname: string,
    callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void
  ): void
  export namespace resolveAny {
    function __promisify__(hostname: string): Promise<AnyRecord[]>
  }
  export function reverse(
    ip: string,
    callback: (err: NodeJS.ErrnoException | null, hostnames: string[]) => void
  ): void
  export function setServers(servers: ReadonlyArray<string>): void
  export function getServers(): string[]
  export function setDefaultResultOrder(order: 'ipv4first' | 'verbatim'): void
  export const NODATA: string
  export const FORMERR: string
  export const SERVFAIL: string
  export const NOTFOUND: string
  export const NOTIMP: string
  export const REFUSED: string
  export const BADQUERY: string
  export const BADNAME: string
  export const BADFAMILY: string
  export const BADRESP: string
  export const CONNREFUSED: string
  export const TIMEOUT: string
  export const EOF: string
  export const FILE: string
  export const NOMEM: string
  export const DESTRUCTION: string
  export const BADSTR: string
  export const BADFLAGS: string
  export const NONAME: string
  export const BADHINTS: string
  export const NOTINITIALIZED: string
  export const LOADIPHLPAPI: string
  export const ADDRGETNETWORKPARAMS: string
  export const CANCELLED: string
  export interface ResolverOptions {
    timeout?: number | undefined
    tries?: number
  }
  export class Resolver {
    constructor(options?: ResolverOptions)
    cancel(): void
    getServers: typeof getServers
    resolve: typeof resolve
    resolve4: typeof resolve4
    resolve6: typeof resolve6
    resolveAny: typeof resolveAny
    resolveCname: typeof resolveCname
    resolveMx: typeof resolveMx
    resolveNaptr: typeof resolveNaptr
    resolveNs: typeof resolveNs
    resolvePtr: typeof resolvePtr
    resolveSoa: typeof resolveSoa
    resolveSrv: typeof resolveSrv
    resolveTxt: typeof resolveTxt
    reverse: typeof reverse
    setLocalAddress(ipv4?: string, ipv6?: string): void
    setServers: typeof setServers
  }
  export { dnsPromises as promises }
}
declare module 'node:dns' {
  export * from 'dns'
}
declare module 'domain' {
  import EventEmitter = require('node:events')
  class Domain extends EventEmitter {
    members: Array<EventEmitter | NodeJS.Timer>
    enter(): void
    exit(): void
    run<T>(fn: (...args: any[]) => T, ...args: any[]): T
    add(emitter: EventEmitter | NodeJS.Timer): void
    remove(emitter: EventEmitter | NodeJS.Timer): void
    bind<T extends Function>(callback: T): T
    intercept<T extends Function>(callback: T): T
  }
  function create(): Domain
}
declare module 'node:domain' {
  export * from 'domain'
}
declare module 'events' {
  interface EventEmitterOptions {
    captureRejections?: boolean | undefined
  }
  interface NodeEventTarget {
    once(eventName: string | symbol, listener: (...args: any[]) => void): this
  }
  interface DOMEventTarget {
    addEventListener(
      eventName: string,
      listener: (...args: any[]) => void,
      opts?: {
        once: boolean
      }
    ): any
  }
  interface StaticEventEmitterOptions {
    signal?: AbortSignal | undefined
  }
  interface EventEmitter extends NodeJS.EventEmitter {}
  class EventEmitter {
    constructor(options?: EventEmitterOptions)
    static once(
      emitter: NodeEventTarget,
      eventName: string | symbol,
      options?: StaticEventEmitterOptions
    ): Promise<any[]>
    static once(
      emitter: DOMEventTarget,
      eventName: string,
      options?: StaticEventEmitterOptions
    ): Promise<any[]>
    static on(
      emitter: NodeJS.EventEmitter,
      eventName: string,
      options?: StaticEventEmitterOptions
    ): AsyncIterableIterator<any>
    static listenerCount(emitter: NodeJS.EventEmitter, eventName: string | symbol): number
    static getEventListeners(
      emitter: DOMEventTarget | NodeJS.EventEmitter,
      name: string | symbol
    ): Function[]
    static setMaxListeners(
      n?: number,
      ...eventTargets: Array<DOMEventTarget | NodeJS.EventEmitter>
    ): void
    static readonly errorMonitor: unique symbol
    static readonly captureRejectionSymbol: unique symbol
    static captureRejections: boolean
    static defaultMaxListeners: number
  }
  import internal = require('node:events')
  namespace EventEmitter {
    export { internal as EventEmitter }
    export interface Abortable {
      signal?: AbortSignal | undefined
    }
  }
  global {
    namespace NodeJS {
      interface EventEmitter {
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): this
        on(eventName: string | symbol, listener: (...args: any[]) => void): this
        once(eventName: string | symbol, listener: (...args: any[]) => void): this
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this
        off(eventName: string | symbol, listener: (...args: any[]) => void): this
        removeAllListeners(event?: string | symbol): this
        setMaxListeners(n: number): this
        getMaxListeners(): number
        listeners(eventName: string | symbol): Function[]
        rawListeners(eventName: string | symbol): Function[]
        emit(eventName: string | symbol, ...args: any[]): boolean
        listenerCount(eventName: string | symbol): number
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this
        eventNames(): Array<string | symbol>
      }
    }
  }
  export = EventEmitter
}
declare module 'node:events' {
  import events = require('events')
  export = events
}
declare module 'fs' {
  import * as stream from 'node:stream'
  import { Abortable, EventEmitter } from 'node:events'
  import { URL } from 'node:url'
  import * as promises from 'node:fs/promises'
  export { promises }
  export type PathLike = string | Buffer | URL
  export type PathOrFileDescriptor = PathLike | number
  export type TimeLike = string | number | Date
  export type NoParamCallback = (err: NodeJS.ErrnoException | null) => void
  export type BufferEncodingOption =
    | 'buffer'
    | {
        encoding: 'buffer'
      }
  export interface ObjectEncodingOptions {
    encoding?: BufferEncoding | null | undefined
  }
  export type EncodingOption = ObjectEncodingOptions | BufferEncoding | undefined | null
  export type OpenMode = number | string
  export type Mode = number | string
  export interface StatsBase<T> {
    isFile(): boolean
    isDirectory(): boolean
    isBlockDevice(): boolean
    isCharacterDevice(): boolean
    isSymbolicLink(): boolean
    isFIFO(): boolean
    isSocket(): boolean
    dev: T
    ino: T
    mode: T
    nlink: T
    uid: T
    gid: T
    rdev: T
    size: T
    blksize: T
    blocks: T
    atimeMs: T
    mtimeMs: T
    ctimeMs: T
    birthtimeMs: T
    atime: Date
    mtime: Date
    ctime: Date
    birthtime: Date
  }
  export interface Stats extends StatsBase<number> {}
  export class Stats {}
  export class Dirent {
    isFile(): boolean
    isDirectory(): boolean
    isBlockDevice(): boolean
    isCharacterDevice(): boolean
    isSymbolicLink(): boolean
    isFIFO(): boolean
    isSocket(): boolean
    name: string
  }
  export class Dir implements AsyncIterable<Dirent> {
    readonly path: string;
    [Symbol.asyncIterator](): AsyncIterableIterator<Dirent>
    close(): Promise<void>
    close(cb: NoParamCallback): void
    closeSync(): void
    read(): Promise<Dirent | null>
    read(cb: (err: NodeJS.ErrnoException | null, dirEnt: Dirent | null) => void): void
    readSync(): Dirent | null
  }
  export interface StatWatcher extends EventEmitter {
    ref(): this
    unref(): this
  }
  export interface FSWatcher extends EventEmitter {
    close(): void
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(
      event: 'change',
      listener: (eventType: string, filename: string | Buffer) => void
    ): this
    addListener(event: 'error', listener: (error: Error) => void): this
    addListener(event: 'close', listener: () => void): this
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'change', listener: (eventType: string, filename: string | Buffer) => void): this
    on(event: 'error', listener: (error: Error) => void): this
    on(event: 'close', listener: () => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'change', listener: (eventType: string, filename: string | Buffer) => void): this
    once(event: 'error', listener: (error: Error) => void): this
    once(event: 'close', listener: () => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(
      event: 'change',
      listener: (eventType: string, filename: string | Buffer) => void
    ): this
    prependListener(event: 'error', listener: (error: Error) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'change',
      listener: (eventType: string, filename: string | Buffer) => void
    ): this
    prependOnceListener(event: 'error', listener: (error: Error) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
  }
  export class ReadStream extends stream.Readable {
    close(callback?: (err?: NodeJS.ErrnoException | null) => void): void
    bytesRead: number
    path: string | Buffer
    pending: boolean
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    addListener(event: 'end', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'open', listener: (fd: number) => void): this
    addListener(event: 'pause', listener: () => void): this
    addListener(event: 'readable', listener: () => void): this
    addListener(event: 'ready', listener: () => void): this
    addListener(event: 'resume', listener: () => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'data', listener: (chunk: Buffer | string) => void): this
    on(event: 'end', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'open', listener: (fd: number) => void): this
    on(event: 'pause', listener: () => void): this
    on(event: 'readable', listener: () => void): this
    on(event: 'ready', listener: () => void): this
    on(event: 'resume', listener: () => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'data', listener: (chunk: Buffer | string) => void): this
    once(event: 'end', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'open', listener: (fd: number) => void): this
    once(event: 'pause', listener: () => void): this
    once(event: 'readable', listener: () => void): this
    once(event: 'ready', listener: () => void): this
    once(event: 'resume', listener: () => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    prependListener(event: 'end', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'open', listener: (fd: number) => void): this
    prependListener(event: 'pause', listener: () => void): this
    prependListener(event: 'readable', listener: () => void): this
    prependListener(event: 'ready', listener: () => void): this
    prependListener(event: 'resume', listener: () => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    prependOnceListener(event: 'end', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'open', listener: (fd: number) => void): this
    prependOnceListener(event: 'pause', listener: () => void): this
    prependOnceListener(event: 'readable', listener: () => void): this
    prependOnceListener(event: 'ready', listener: () => void): this
    prependOnceListener(event: 'resume', listener: () => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export class WriteStream extends stream.Writable {
    close(callback?: (err?: NodeJS.ErrnoException | null) => void): void
    bytesWritten: number
    path: string | Buffer
    pending: boolean
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'drain', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'finish', listener: () => void): this
    addListener(event: 'open', listener: (fd: number) => void): this
    addListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    addListener(event: 'ready', listener: () => void): this
    addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'drain', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'finish', listener: () => void): this
    on(event: 'open', listener: (fd: number) => void): this
    on(event: 'pipe', listener: (src: stream.Readable) => void): this
    on(event: 'ready', listener: () => void): this
    on(event: 'unpipe', listener: (src: stream.Readable) => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'drain', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'finish', listener: () => void): this
    once(event: 'open', listener: (fd: number) => void): this
    once(event: 'pipe', listener: (src: stream.Readable) => void): this
    once(event: 'ready', listener: () => void): this
    once(event: 'unpipe', listener: (src: stream.Readable) => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'drain', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'finish', listener: () => void): this
    prependListener(event: 'open', listener: (fd: number) => void): this
    prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependListener(event: 'ready', listener: () => void): this
    prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'drain', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'finish', listener: () => void): this
    prependOnceListener(event: 'open', listener: (fd: number) => void): this
    prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: 'ready', listener: () => void): this
    prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export function rename(oldPath: PathLike, newPath: PathLike, callback: NoParamCallback): void
  export namespace rename {
    function __promisify__(oldPath: PathLike, newPath: PathLike): Promise<void>
  }
  export function renameSync(oldPath: PathLike, newPath: PathLike): void
  export function truncate(
    path: PathLike,
    len: number | undefined | null,
    callback: NoParamCallback
  ): void
  export function truncate(path: PathLike, callback: NoParamCallback): void
  export namespace truncate {
    function __promisify__(path: PathLike, len?: number | null): Promise<void>
  }
  export function truncateSync(path: PathLike, len?: number | null): void
  export function ftruncate(
    fd: number,
    len: number | undefined | null,
    callback: NoParamCallback
  ): void
  export function ftruncate(fd: number, callback: NoParamCallback): void
  export namespace ftruncate {
    function __promisify__(fd: number, len?: number | null): Promise<void>
  }
  export function ftruncateSync(fd: number, len?: number | null): void
  export function chown(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void
  export namespace chown {
    function __promisify__(path: PathLike, uid: number, gid: number): Promise<void>
  }
  export function chownSync(path: PathLike, uid: number, gid: number): void
  export function fchown(fd: number, uid: number, gid: number, callback: NoParamCallback): void
  export namespace fchown {
    function __promisify__(fd: number, uid: number, gid: number): Promise<void>
  }
  export function fchownSync(fd: number, uid: number, gid: number): void
  export function lchown(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void
  export namespace lchown {
    function __promisify__(path: PathLike, uid: number, gid: number): Promise<void>
  }
  export function lchownSync(path: PathLike, uid: number, gid: number): void
  export function lutimes(
    path: PathLike,
    atime: TimeLike,
    mtime: TimeLike,
    callback: NoParamCallback
  ): void
  export namespace lutimes {
    function __promisify__(path: PathLike, atime: TimeLike, mtime: TimeLike): Promise<void>
  }
  export function lutimesSync(path: PathLike, atime: TimeLike, mtime: TimeLike): void
  export function chmod(path: PathLike, mode: Mode, callback: NoParamCallback): void
  export namespace chmod {
    function __promisify__(path: PathLike, mode: Mode): Promise<void>
  }
  export function chmodSync(path: PathLike, mode: Mode): void
  export function fchmod(fd: number, mode: Mode, callback: NoParamCallback): void
  export namespace fchmod {
    function __promisify__(fd: number, mode: Mode): Promise<void>
  }
  export function fchmodSync(fd: number, mode: Mode): void
  export function lchmod(path: PathLike, mode: Mode, callback: NoParamCallback): void
  export namespace lchmod {
    function __promisify__(path: PathLike, mode: Mode): Promise<void>
  }
  export function lchmodSync(path: PathLike, mode: Mode): void
  export function stat(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void
  export function stat(
    path: PathLike,
    options:
      | (StatOptions & {
          bigint?: false | undefined
        })
      | undefined,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void
  export function stat(
    path: PathLike,
    options: StatOptions & {
      bigint: true
    },
    callback: (err: NodeJS.ErrnoException | null, stats: BigIntStats) => void
  ): void
  export function stat(
    path: PathLike,
    options: StatOptions | undefined,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats | BigIntStats) => void
  ): void
  export namespace stat {
    function __promisify__(
      path: PathLike,
      options?: StatOptions & {
        bigint?: false | undefined
      }
    ): Promise<Stats>
    function __promisify__(
      path: PathLike,
      options: StatOptions & {
        bigint: true
      }
    ): Promise<BigIntStats>
    function __promisify__(path: PathLike, options?: StatOptions): Promise<Stats | BigIntStats>
  }
  export interface StatSyncFn extends Function {
    (path: PathLike, options?: undefined): Stats
    (
      path: PathLike,
      options?: StatSyncOptions & {
        bigint?: false | undefined
        throwIfNoEntry: false
      }
    ): Stats | undefined
    (
      path: PathLike,
      options: StatSyncOptions & {
        bigint: true
        throwIfNoEntry: false
      }
    ): BigIntStats | undefined
    (
      path: PathLike,
      options?: StatSyncOptions & {
        bigint?: false | undefined
      }
    ): Stats
    (
      path: PathLike,
      options: StatSyncOptions & {
        bigint: true
      }
    ): BigIntStats
    (
      path: PathLike,
      options: StatSyncOptions & {
        bigint: boolean
        throwIfNoEntry?: false | undefined
      }
    ): Stats | BigIntStats
    (path: PathLike, options?: StatSyncOptions): Stats | BigIntStats | undefined
  }
  export const statSync: StatSyncFn
  export function fstat(
    fd: number,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void
  export function fstat(
    fd: number,
    options:
      | (StatOptions & {
          bigint?: false | undefined
        })
      | undefined,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void
  export function fstat(
    fd: number,
    options: StatOptions & {
      bigint: true
    },
    callback: (err: NodeJS.ErrnoException | null, stats: BigIntStats) => void
  ): void
  export function fstat(
    fd: number,
    options: StatOptions | undefined,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats | BigIntStats) => void
  ): void
  export namespace fstat {
    function __promisify__(
      fd: number,
      options?: StatOptions & {
        bigint?: false | undefined
      }
    ): Promise<Stats>
    function __promisify__(
      fd: number,
      options: StatOptions & {
        bigint: true
      }
    ): Promise<BigIntStats>
    function __promisify__(fd: number, options?: StatOptions): Promise<Stats | BigIntStats>
  }
  export function fstatSync(
    fd: number,
    options?: StatOptions & {
      bigint?: false | undefined
    }
  ): Stats
  export function fstatSync(
    fd: number,
    options: StatOptions & {
      bigint: true
    }
  ): BigIntStats
  export function fstatSync(fd: number, options?: StatOptions): Stats | BigIntStats
  export function lstat(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void
  export function lstat(
    path: PathLike,
    options:
      | (StatOptions & {
          bigint?: false | undefined
        })
      | undefined,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void
  export function lstat(
    path: PathLike,
    options: StatOptions & {
      bigint: true
    },
    callback: (err: NodeJS.ErrnoException | null, stats: BigIntStats) => void
  ): void
  export function lstat(
    path: PathLike,
    options: StatOptions | undefined,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats | BigIntStats) => void
  ): void
  export namespace lstat {
    function __promisify__(
      path: PathLike,
      options?: StatOptions & {
        bigint?: false | undefined
      }
    ): Promise<Stats>
    function __promisify__(
      path: PathLike,
      options: StatOptions & {
        bigint: true
      }
    ): Promise<BigIntStats>
    function __promisify__(path: PathLike, options?: StatOptions): Promise<Stats | BigIntStats>
  }
  export const lstatSync: StatSyncFn
  export function link(existingPath: PathLike, newPath: PathLike, callback: NoParamCallback): void
  export namespace link {
    function __promisify__(existingPath: PathLike, newPath: PathLike): Promise<void>
  }
  export function linkSync(existingPath: PathLike, newPath: PathLike): void
  export function symlink(
    target: PathLike,
    path: PathLike,
    type: symlink.Type | undefined | null,
    callback: NoParamCallback
  ): void
  export function symlink(target: PathLike, path: PathLike, callback: NoParamCallback): void
  export namespace symlink {
    function __promisify__(target: PathLike, path: PathLike, type?: string | null): Promise<void>
    type Type = 'dir' | 'file' | 'junction'
  }
  export function symlinkSync(target: PathLike, path: PathLike, type?: symlink.Type | null): void
  export function readlink(
    path: PathLike,
    options: EncodingOption,
    callback: (err: NodeJS.ErrnoException | null, linkString: string) => void
  ): void
  export function readlink(
    path: PathLike,
    options: BufferEncodingOption,
    callback: (err: NodeJS.ErrnoException | null, linkString: Buffer) => void
  ): void
  export function readlink(
    path: PathLike,
    options: EncodingOption,
    callback: (err: NodeJS.ErrnoException | null, linkString: string | Buffer) => void
  ): void
  export function readlink(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, linkString: string) => void
  ): void
  export namespace readlink {
    function __promisify__(path: PathLike, options?: EncodingOption): Promise<string>
    function __promisify__(path: PathLike, options: BufferEncodingOption): Promise<Buffer>
    function __promisify__(path: PathLike, options?: EncodingOption): Promise<string | Buffer>
  }
  export function readlinkSync(path: PathLike, options?: EncodingOption): string
  export function readlinkSync(path: PathLike, options: BufferEncodingOption): Buffer
  export function readlinkSync(path: PathLike, options?: EncodingOption): string | Buffer
  export function realpath(
    path: PathLike,
    options: EncodingOption,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
  ): void
  export function realpath(
    path: PathLike,
    options: BufferEncodingOption,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void
  ): void
  export function realpath(
    path: PathLike,
    options: EncodingOption,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string | Buffer) => void
  ): void
  export function realpath(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
  ): void
  export namespace realpath {
    function __promisify__(path: PathLike, options?: EncodingOption): Promise<string>
    function __promisify__(path: PathLike, options: BufferEncodingOption): Promise<Buffer>
    function __promisify__(path: PathLike, options?: EncodingOption): Promise<string | Buffer>
    function native(
      path: PathLike,
      options: EncodingOption,
      callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
    ): void
    function native(
      path: PathLike,
      options: BufferEncodingOption,
      callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void
    ): void
    function native(
      path: PathLike,
      options: EncodingOption,
      callback: (err: NodeJS.ErrnoException | null, resolvedPath: string | Buffer) => void
    ): void
    function native(
      path: PathLike,
      callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
    ): void
  }
  export function realpathSync(path: PathLike, options?: EncodingOption): string
  export function realpathSync(path: PathLike, options: BufferEncodingOption): Buffer
  export function realpathSync(path: PathLike, options?: EncodingOption): string | Buffer
  export namespace realpathSync {
    function native(path: PathLike, options?: EncodingOption): string
    function native(path: PathLike, options: BufferEncodingOption): Buffer
    function native(path: PathLike, options?: EncodingOption): string | Buffer
  }
  export function unlink(path: PathLike, callback: NoParamCallback): void
  export namespace unlink {
    function __promisify__(path: PathLike): Promise<void>
  }
  export function unlinkSync(path: PathLike): void
  export interface RmDirOptions {
    maxRetries?: number | undefined
    recursive?: boolean | undefined
    retryDelay?: number | undefined
  }
  export function rmdir(path: PathLike, callback: NoParamCallback): void
  export function rmdir(path: PathLike, options: RmDirOptions, callback: NoParamCallback): void
  export namespace rmdir {
    function __promisify__(path: PathLike, options?: RmDirOptions): Promise<void>
  }
  export function rmdirSync(path: PathLike, options?: RmDirOptions): void
  export interface RmOptions {
    force?: boolean | undefined
    maxRetries?: number | undefined
    recursive?: boolean | undefined
    retryDelay?: number | undefined
  }
  export function rm(path: PathLike, callback: NoParamCallback): void
  export function rm(path: PathLike, options: RmOptions, callback: NoParamCallback): void
  export namespace rm {
    function __promisify__(path: PathLike, options?: RmOptions): Promise<void>
  }
  export function rmSync(path: PathLike, options?: RmOptions): void
  export interface MakeDirectoryOptions {
    recursive?: boolean | undefined
    mode?: Mode | undefined
  }
  export function mkdir(
    path: PathLike,
    options: MakeDirectoryOptions & {
      recursive: true
    },
    callback: (err: NodeJS.ErrnoException | null, path?: string) => void
  ): void
  export function mkdir(
    path: PathLike,
    options:
      | Mode
      | (MakeDirectoryOptions & {
          recursive?: false | undefined
        })
      | null
      | undefined,
    callback: NoParamCallback
  ): void
  export function mkdir(
    path: PathLike,
    options: Mode | MakeDirectoryOptions | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, path?: string) => void
  ): void
  export function mkdir(path: PathLike, callback: NoParamCallback): void
  export namespace mkdir {
    function __promisify__(
      path: PathLike,
      options: MakeDirectoryOptions & {
        recursive: true
      }
    ): Promise<string | undefined>
    function __promisify__(
      path: PathLike,
      options?:
        | Mode
        | (MakeDirectoryOptions & {
            recursive?: false | undefined
          })
        | null
    ): Promise<void>
    function __promisify__(
      path: PathLike,
      options?: Mode | MakeDirectoryOptions | null
    ): Promise<string | undefined>
  }
  export function mkdirSync(
    path: PathLike,
    options: MakeDirectoryOptions & {
      recursive: true
    }
  ): string | undefined
  export function mkdirSync(
    path: PathLike,
    options?:
      | Mode
      | (MakeDirectoryOptions & {
          recursive?: false | undefined
        })
      | null
  ): void
  export function mkdirSync(
    path: PathLike,
    options?: Mode | MakeDirectoryOptions | null
  ): string | undefined
  export function mkdtemp(
    prefix: string,
    options: EncodingOption,
    callback: (err: NodeJS.ErrnoException | null, folder: string) => void
  ): void
  export function mkdtemp(
    prefix: string,
    options:
      | 'buffer'
      | {
          encoding: 'buffer'
        },
    callback: (err: NodeJS.ErrnoException | null, folder: Buffer) => void
  ): void
  export function mkdtemp(
    prefix: string,
    options: EncodingOption,
    callback: (err: NodeJS.ErrnoException | null, folder: string | Buffer) => void
  ): void
  export function mkdtemp(
    prefix: string,
    callback: (err: NodeJS.ErrnoException | null, folder: string) => void
  ): void
  export namespace mkdtemp {
    function __promisify__(prefix: string, options?: EncodingOption): Promise<string>
    function __promisify__(prefix: string, options: BufferEncodingOption): Promise<Buffer>
    function __promisify__(prefix: string, options?: EncodingOption): Promise<string | Buffer>
  }
  export function mkdtempSync(prefix: string, options?: EncodingOption): string
  export function mkdtempSync(prefix: string, options: BufferEncodingOption): Buffer
  export function mkdtempSync(prefix: string, options?: EncodingOption): string | Buffer
  export function readdir(
    path: PathLike,
    options:
      | {
          encoding: BufferEncoding | null
          withFileTypes?: false | undefined
        }
      | BufferEncoding
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, files: string[]) => void
  ): void
  export function readdir(
    path: PathLike,
    options:
      | {
          encoding: 'buffer'
          withFileTypes?: false | undefined
        }
      | 'buffer',
    callback: (err: NodeJS.ErrnoException | null, files: Buffer[]) => void
  ): void
  export function readdir(
    path: PathLike,
    options:
      | (ObjectEncodingOptions & {
          withFileTypes?: false | undefined
        })
      | BufferEncoding
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, files: string[] | Buffer[]) => void
  ): void
  export function readdir(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, files: string[]) => void
  ): void
  export function readdir(
    path: PathLike,
    options: ObjectEncodingOptions & {
      withFileTypes: true
    },
    callback: (err: NodeJS.ErrnoException | null, files: Dirent[]) => void
  ): void
  export namespace readdir {
    function __promisify__(
      path: PathLike,
      options?:
        | {
            encoding: BufferEncoding | null
            withFileTypes?: false | undefined
          }
        | BufferEncoding
        | null
    ): Promise<string[]>
    function __promisify__(
      path: PathLike,
      options:
        | 'buffer'
        | {
            encoding: 'buffer'
            withFileTypes?: false | undefined
          }
    ): Promise<Buffer[]>
    function __promisify__(
      path: PathLike,
      options?:
        | (ObjectEncodingOptions & {
            withFileTypes?: false | undefined
          })
        | BufferEncoding
        | null
    ): Promise<string[] | Buffer[]>
    function __promisify__(
      path: PathLike,
      options: ObjectEncodingOptions & {
        withFileTypes: true
      }
    ): Promise<Dirent[]>
  }
  export function readdirSync(
    path: PathLike,
    options?:
      | {
          encoding: BufferEncoding | null
          withFileTypes?: false | undefined
        }
      | BufferEncoding
      | null
  ): string[]
  export function readdirSync(
    path: PathLike,
    options:
      | {
          encoding: 'buffer'
          withFileTypes?: false | undefined
        }
      | 'buffer'
  ): Buffer[]
  export function readdirSync(
    path: PathLike,
    options?:
      | (ObjectEncodingOptions & {
          withFileTypes?: false | undefined
        })
      | BufferEncoding
      | null
  ): string[] | Buffer[]
  export function readdirSync(
    path: PathLike,
    options: ObjectEncodingOptions & {
      withFileTypes: true
    }
  ): Dirent[]
  export function close(fd: number, callback?: NoParamCallback): void
  export namespace close {
    function __promisify__(fd: number): Promise<void>
  }
  export function closeSync(fd: number): void
  export function open(
    path: PathLike,
    flags: OpenMode,
    mode: Mode | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, fd: number) => void
  ): void
  export function open(
    path: PathLike,
    flags: OpenMode,
    callback: (err: NodeJS.ErrnoException | null, fd: number) => void
  ): void
  export namespace open {
    function __promisify__(path: PathLike, flags: OpenMode, mode?: Mode | null): Promise<number>
  }
  export function openSync(path: PathLike, flags: OpenMode, mode?: Mode | null): number
  export function utimes(
    path: PathLike,
    atime: TimeLike,
    mtime: TimeLike,
    callback: NoParamCallback
  ): void
  export namespace utimes {
    function __promisify__(path: PathLike, atime: TimeLike, mtime: TimeLike): Promise<void>
  }
  export function utimesSync(path: PathLike, atime: TimeLike, mtime: TimeLike): void
  export function futimes(
    fd: number,
    atime: TimeLike,
    mtime: TimeLike,
    callback: NoParamCallback
  ): void
  export namespace futimes {
    function __promisify__(fd: number, atime: TimeLike, mtime: TimeLike): Promise<void>
  }
  export function futimesSync(fd: number, atime: TimeLike, mtime: TimeLike): void
  export function fsync(fd: number, callback: NoParamCallback): void
  export namespace fsync {
    function __promisify__(fd: number): Promise<void>
  }
  export function fsyncSync(fd: number): void
  export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | undefined | null,
    length: number | undefined | null,
    position: number | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
  ): void
  export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | undefined | null,
    length: number | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
  ): void
  export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
  ): void
  export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
  ): void
  export function write(
    fd: number,
    string: string,
    position: number | undefined | null,
    encoding: BufferEncoding | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void
  ): void
  export function write(
    fd: number,
    string: string,
    position: number | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void
  ): void
  export function write(
    fd: number,
    string: string,
    callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void
  ): void
  export namespace write {
    function __promisify__<TBuffer extends NodeJS.ArrayBufferView>(
      fd: number,
      buffer?: TBuffer,
      offset?: number,
      length?: number,
      position?: number | null
    ): Promise<{
      bytesWritten: number
      buffer: TBuffer
    }>
    function __promisify__(
      fd: number,
      string: string,
      position?: number | null,
      encoding?: BufferEncoding | null
    ): Promise<{
      bytesWritten: number
      buffer: string
    }>
  }
  export function writeSync(
    fd: number,
    buffer: NodeJS.ArrayBufferView,
    offset?: number | null,
    length?: number | null,
    position?: number | null
  ): number
  export function writeSync(
    fd: number,
    string: string,
    position?: number | null,
    encoding?: BufferEncoding | null
  ): number
  export type ReadPosition = number | bigint
  export interface ReadSyncOptions {
    offset?: number | undefined
    length?: number | undefined
    position?: ReadPosition | null | undefined
  }
  export interface ReadAsyncOptions<TBuffer extends NodeJS.ArrayBufferView>
    extends ReadSyncOptions {
    buffer?: TBuffer
  }
  export function read<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: ReadPosition | null,
    callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: TBuffer) => void
  ): void
  export function read<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    options: ReadAsyncOptions<TBuffer>,
    callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: TBuffer) => void
  ): void
  export function read(
    fd: number,
    callback: (
      err: NodeJS.ErrnoException | null,
      bytesRead: number,
      buffer: NodeJS.ArrayBufferView
    ) => void
  ): void
  export namespace read {
    function __promisify__<TBuffer extends NodeJS.ArrayBufferView>(
      fd: number,
      buffer: TBuffer,
      offset: number,
      length: number,
      position: number | null
    ): Promise<{
      bytesRead: number
      buffer: TBuffer
    }>
    function __promisify__<TBuffer extends NodeJS.ArrayBufferView>(
      fd: number,
      options: ReadAsyncOptions<TBuffer>
    ): Promise<{
      bytesRead: number
      buffer: TBuffer
    }>
    function __promisify__(fd: number): Promise<{
      bytesRead: number
      buffer: NodeJS.ArrayBufferView
    }>
  }
  export function readSync(
    fd: number,
    buffer: NodeJS.ArrayBufferView,
    offset: number,
    length: number,
    position: ReadPosition | null
  ): number
  export function readSync(
    fd: number,
    buffer: NodeJS.ArrayBufferView,
    opts?: ReadSyncOptions
  ): number
  export function readFile(
    path: PathOrFileDescriptor,
    options:
      | ({
          encoding?: null | undefined
          flag?: string | undefined
        } & Abortable)
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void
  export function readFile(
    path: PathOrFileDescriptor,
    options:
      | ({
          encoding: BufferEncoding
          flag?: string | undefined
        } & Abortable)
      | BufferEncoding,
    callback: (err: NodeJS.ErrnoException | null, data: string) => void
  ): void
  export function readFile(
    path: PathOrFileDescriptor,
    options:
      | (ObjectEncodingOptions & {
          flag?: string | undefined
        } & Abortable)
      | BufferEncoding
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, data: string | Buffer) => void
  ): void
  export function readFile(
    path: PathOrFileDescriptor,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void
  export namespace readFile {
    function __promisify__(
      path: PathOrFileDescriptor,
      options?: {
        encoding?: null | undefined
        flag?: string | undefined
      } | null
    ): Promise<Buffer>
    function __promisify__(
      path: PathOrFileDescriptor,
      options:
        | {
            encoding: BufferEncoding
            flag?: string | undefined
          }
        | BufferEncoding
    ): Promise<string>
    function __promisify__(
      path: PathOrFileDescriptor,
      options?:
        | (ObjectEncodingOptions & {
            flag?: string | undefined
          })
        | BufferEncoding
        | null
    ): Promise<string | Buffer>
  }
  export function readFileSync(
    path: PathOrFileDescriptor,
    options?: {
      encoding?: null | undefined
      flag?: string | undefined
    } | null
  ): Buffer
  export function readFileSync(
    path: PathOrFileDescriptor,
    options:
      | {
          encoding: BufferEncoding
          flag?: string | undefined
        }
      | BufferEncoding
  ): string
  export function readFileSync(
    path: PathOrFileDescriptor,
    options?:
      | (ObjectEncodingOptions & {
          flag?: string | undefined
        })
      | BufferEncoding
      | null
  ): string | Buffer
  export type WriteFileOptions =
    | (ObjectEncodingOptions &
        Abortable & {
          mode?: Mode | undefined
          flag?: string | undefined
        })
    | BufferEncoding
    | null
  export function writeFile(
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options: WriteFileOptions,
    callback: NoParamCallback
  ): void
  export function writeFile(
    path: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    callback: NoParamCallback
  ): void
  export namespace writeFile {
    function __promisify__(
      path: PathOrFileDescriptor,
      data: string | NodeJS.ArrayBufferView,
      options?: WriteFileOptions
    ): Promise<void>
  }
  export function writeFileSync(
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?: WriteFileOptions
  ): void
  export function appendFile(
    path: PathOrFileDescriptor,
    data: string | Uint8Array,
    options: WriteFileOptions,
    callback: NoParamCallback
  ): void
  export function appendFile(
    file: PathOrFileDescriptor,
    data: string | Uint8Array,
    callback: NoParamCallback
  ): void
  export namespace appendFile {
    function __promisify__(
      file: PathOrFileDescriptor,
      data: string | Uint8Array,
      options?: WriteFileOptions
    ): Promise<void>
  }
  export function appendFileSync(
    path: PathOrFileDescriptor,
    data: string | Uint8Array,
    options?: WriteFileOptions
  ): void
  export interface WatchFileOptions {
    bigint?: boolean | undefined
    persistent?: boolean | undefined
    interval?: number | undefined
  }
  export function watchFile(
    filename: PathLike,
    options:
      | (WatchFileOptions & {
          bigint?: false | undefined
        })
      | undefined,
    listener: (curr: Stats, prev: Stats) => void
  ): StatWatcher
  export function watchFile(
    filename: PathLike,
    options:
      | (WatchFileOptions & {
          bigint: true
        })
      | undefined,
    listener: (curr: BigIntStats, prev: BigIntStats) => void
  ): StatWatcher
  export function watchFile(
    filename: PathLike,
    listener: (curr: Stats, prev: Stats) => void
  ): StatWatcher
  export function unwatchFile(
    filename: PathLike,
    listener?: (curr: Stats, prev: Stats) => void
  ): void
  export interface WatchOptions extends Abortable {
    encoding?: BufferEncoding | 'buffer' | undefined
    persistent?: boolean | undefined
    recursive?: boolean | undefined
  }
  export type WatchEventType = 'rename' | 'change'
  export type WatchListener<T> = (event: WatchEventType, filename: T) => void
  export function watch(
    filename: PathLike,
    options:
      | (WatchOptions & {
          encoding: 'buffer'
        })
      | 'buffer',
    listener?: WatchListener<Buffer>
  ): FSWatcher
  export function watch(
    filename: PathLike,
    options?: WatchOptions | BufferEncoding | null,
    listener?: WatchListener<string>
  ): FSWatcher
  export function watch(
    filename: PathLike,
    options: WatchOptions | string,
    listener?: WatchListener<string | Buffer>
  ): FSWatcher
  export function watch(filename: PathLike, listener?: WatchListener<string>): FSWatcher
  export function exists(path: PathLike, callback: (exists: boolean) => void): void
  export namespace exists {
    function __promisify__(path: PathLike): Promise<boolean>
  }
  export function existsSync(path: PathLike): boolean
  export namespace constants {
    const F_OK: number
    const R_OK: number
    const W_OK: number
    const X_OK: number
    const COPYFILE_EXCL: number
    const COPYFILE_FICLONE: number
    const COPYFILE_FICLONE_FORCE: number
    const O_RDONLY: number
    const O_WRONLY: number
    const O_RDWR: number
    const O_CREAT: number
    const O_EXCL: number
    const O_NOCTTY: number
    const O_TRUNC: number
    const O_APPEND: number
    const O_DIRECTORY: number
    const O_NOATIME: number
    const O_NOFOLLOW: number
    const O_SYNC: number
    const O_DSYNC: number
    const O_SYMLINK: number
    const O_DIRECT: number
    const O_NONBLOCK: number
    const S_IFMT: number
    const S_IFREG: number
    const S_IFDIR: number
    const S_IFCHR: number
    const S_IFBLK: number
    const S_IFIFO: number
    const S_IFLNK: number
    const S_IFSOCK: number
    const S_IRWXU: number
    const S_IRUSR: number
    const S_IWUSR: number
    const S_IXUSR: number
    const S_IRWXG: number
    const S_IRGRP: number
    const S_IWGRP: number
    const S_IXGRP: number
    const S_IRWXO: number
    const S_IROTH: number
    const S_IWOTH: number
    const S_IXOTH: number
    const UV_FS_O_FILEMAP: number
  }
  export function access(path: PathLike, mode: number | undefined, callback: NoParamCallback): void
  export function access(path: PathLike, callback: NoParamCallback): void
  export namespace access {
    function __promisify__(path: PathLike, mode?: number): Promise<void>
  }
  export function accessSync(path: PathLike, mode?: number): void
  interface StreamOptions {
    flags?: string | undefined
    encoding?: BufferEncoding | undefined
    fd?: number | promises.FileHandle | undefined
    mode?: number | undefined
    autoClose?: boolean | undefined
    emitClose?: boolean | undefined
    start?: number | undefined
    highWaterMark?: number | undefined
  }
  interface ReadStreamOptions extends StreamOptions {
    end?: number | undefined
  }
  export function createReadStream(
    path: PathLike,
    options?: BufferEncoding | ReadStreamOptions
  ): ReadStream
  export function createWriteStream(
    path: PathLike,
    options?: BufferEncoding | StreamOptions
  ): WriteStream
  export function fdatasync(fd: number, callback: NoParamCallback): void
  export namespace fdatasync {
    function __promisify__(fd: number): Promise<void>
  }
  export function fdatasyncSync(fd: number): void
  export function copyFile(src: PathLike, dest: PathLike, callback: NoParamCallback): void
  export function copyFile(
    src: PathLike,
    dest: PathLike,
    mode: number,
    callback: NoParamCallback
  ): void
  export namespace copyFile {
    function __promisify__(src: PathLike, dst: PathLike, mode?: number): Promise<void>
  }
  export function copyFileSync(src: PathLike, dest: PathLike, mode?: number): void
  export function writev(
    fd: number,
    buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
    cb: (
      err: NodeJS.ErrnoException | null,
      bytesWritten: number,
      buffers: NodeJS.ArrayBufferView[]
    ) => void
  ): void
  export function writev(
    fd: number,
    buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
    position: number,
    cb: (
      err: NodeJS.ErrnoException | null,
      bytesWritten: number,
      buffers: NodeJS.ArrayBufferView[]
    ) => void
  ): void
  export interface WriteVResult {
    bytesWritten: number
    buffers: NodeJS.ArrayBufferView[]
  }
  export namespace writev {
    function __promisify__(
      fd: number,
      buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
      position?: number
    ): Promise<WriteVResult>
  }
  export function writevSync(
    fd: number,
    buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
    position?: number
  ): number
  export function readv(
    fd: number,
    buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
    cb: (
      err: NodeJS.ErrnoException | null,
      bytesRead: number,
      buffers: NodeJS.ArrayBufferView[]
    ) => void
  ): void
  export function readv(
    fd: number,
    buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
    position: number,
    cb: (
      err: NodeJS.ErrnoException | null,
      bytesRead: number,
      buffers: NodeJS.ArrayBufferView[]
    ) => void
  ): void
  export interface ReadVResult {
    bytesRead: number
    buffers: NodeJS.ArrayBufferView[]
  }
  export namespace readv {
    function __promisify__(
      fd: number,
      buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
      position?: number
    ): Promise<ReadVResult>
  }
  export function readvSync(
    fd: number,
    buffers: ReadonlyArray<NodeJS.ArrayBufferView>,
    position?: number
  ): number
  export interface OpenDirOptions {
    encoding?: BufferEncoding | undefined
    bufferSize?: number | undefined
  }
  export function opendirSync(path: PathLike, options?: OpenDirOptions): Dir
  export function opendir(
    path: PathLike,
    cb: (err: NodeJS.ErrnoException | null, dir: Dir) => void
  ): void
  export function opendir(
    path: PathLike,
    options: OpenDirOptions,
    cb: (err: NodeJS.ErrnoException | null, dir: Dir) => void
  ): void
  export namespace opendir {
    function __promisify__(path: PathLike, options?: OpenDirOptions): Promise<Dir>
  }
  export interface BigIntStats extends StatsBase<bigint> {
    atimeNs: bigint
    mtimeNs: bigint
    ctimeNs: bigint
    birthtimeNs: bigint
  }
  export interface BigIntOptions {
    bigint: true
  }
  export interface StatOptions {
    bigint?: boolean | undefined
  }
  export interface StatSyncOptions extends StatOptions {
    throwIfNoEntry?: boolean | undefined
  }
  export interface CopyOptions {
    dereference?: boolean
    errorOnExist?: boolean
    filter?(source: string, destination: string): boolean
    force?: boolean
    preserveTimestamps?: boolean
    recursive?: boolean
  }
  export function cp(
    source: string,
    destination: string,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void
  export function cp(
    source: string,
    destination: string,
    opts: CopyOptions,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void
  export function cpSync(source: string, destination: string, opts?: CopyOptions): void
}
declare module 'node:fs' {
  export * from 'fs'
}
declare module 'fs/promises' {
  export * from 'node:fs/promises'
}
declare module 'node:fs/promises' {
  import { Abortable } from 'node:events'
  import { Stream } from 'node:stream'
  import { ReadableStream } from 'node:stream/web'
  import * as fs from 'node:fs'

  interface FileHandle {
    readonly fd: number
    appendFile(
      data: string | Uint8Array,
      options?:
        | (fs.ObjectEncodingOptions & {
            mode?: fs.Mode | undefined
            flag?: fs.OpenMode | undefined
          })
        | BufferEncoding
        | null
    ): Promise<void>
    chmod(mode: fs.Mode): Promise<void>
    chown(uid: number, gid: number): Promise<void>
    close(): Promise<void>
    datasync(): Promise<void>
    read<T extends NodeJS.ArrayBufferView>(
      buffer: T,
      offset?: number | null,
      length?: number | null,
      position?: number | null
    ): Promise<{ bytesRead: number; buffer: T }>
    read<T extends NodeJS.ArrayBufferView = Buffer>(options?: {
      buffer?: T
      offset?: number
      length?: number
      position?: number
    }): Promise<{ bytesRead: number; buffer: T }>
    readFile(options?: { encoding?: null; flag?: fs.OpenMode } | null): Promise<Buffer>
    readFile(
      options: { encoding: BufferEncoding; flag?: fs.OpenMode } | BufferEncoding
    ): Promise<string>
    readFile(
      options?: (fs.ObjectEncodingOptions & { flag?: fs.OpenMode }) | BufferEncoding | null
    ): Promise<string | Buffer>
    readLines(options?: {
      encoding?: BufferEncoding
      autoClose?: boolean
      emitClose?: boolean
      start?: number
      end?: number
      highWaterMark?: number
    }): ReadableStream
    readv(
      buffers: readonly NodeJS.ArrayBufferView[],
      position?: number
    ): Promise<{ bytesRead: number; buffers: NodeJS.ArrayBufferView[] }>
    stat(opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats>
    stat(opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats>
    stat(opts?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats>
    sync(): Promise<void>
    truncate(len?: number): Promise<void>
    utimes(atime: fs.TimeLike, mtime: fs.TimeLike): Promise<void>
    write<TBuffer extends Uint8Array>(
      buffer: TBuffer,
      offset?: number | null,
      length?: number | null,
      position?: number | null
    ): Promise<{ bytesWritten: number; buffer: TBuffer }>
    write(
      data: string,
      position?: number | null,
      encoding?: BufferEncoding | null
    ): Promise<{ bytesWritten: number; buffer: string }>
    writeFile(
      data: string | Uint8Array,
      options?:
        | (fs.ObjectEncodingOptions & { mode?: fs.Mode; flag?: fs.OpenMode } & Abortable)
        | BufferEncoding
        | null
    ): Promise<void>
    writev(
      buffers: readonly NodeJS.ArrayBufferView[],
      position?: number
    ): Promise<{ bytesWritten: number; buffers: NodeJS.ArrayBufferView[] }>
  }

  function access(path: fs.PathLike, mode?: number): Promise<void>
  function appendFile(
    path: fs.PathOrFileDescriptor,
    data: string | Uint8Array,
    options?:
      | (fs.ObjectEncodingOptions & { mode?: fs.Mode; flag?: fs.OpenMode })
      | BufferEncoding
      | null
  ): Promise<void>
  function chmod(path: fs.PathLike, mode: fs.Mode): Promise<void>
  function chown(path: fs.PathLike, uid: number, gid: number): Promise<void>
  function copyFile(src: fs.PathLike, dest: fs.PathLike, mode?: number): Promise<void>
  function lchmod(path: fs.PathLike, mode: fs.Mode): Promise<void>
  function lchown(path: fs.PathLike, uid: number, gid: number): Promise<void>
  function lutimes(path: fs.PathLike, atime: fs.TimeLike, mtime: fs.TimeLike): Promise<void>
  function link(existingPath: fs.PathLike, newPath: fs.PathLike): Promise<void>
  function lstat(path: fs.PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats>
  function lstat(
    path: fs.PathLike,
    opts: fs.StatOptions & { bigint: true }
  ): Promise<fs.BigIntStats>
  function lstat(path: fs.PathLike, opts?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats>
  function mkdir(
    path: fs.PathLike,
    options?: fs.Mode | (fs.MakeDirectoryOptions & { recursive?: false }) | null
  ): Promise<void>
  function mkdir(
    path: fs.PathLike,
    options: fs.Mode | (fs.MakeDirectoryOptions & { recursive: true })
  ): Promise<string | undefined>
  function mkdir(
    path: fs.PathLike,
    options?: fs.Mode | fs.MakeDirectoryOptions | null
  ): Promise<string | undefined>
  function mkdtemp(
    prefix: string,
    options?: fs.ObjectEncodingOptions | BufferEncoding | null
  ): Promise<string>
  function mkdtemp(prefix: string, options: fs.BufferEncodingOption): Promise<Buffer>
  function mkdtemp(
    prefix: string,
    options?: fs.ObjectEncodingOptions | BufferEncoding | null
  ): Promise<string | Buffer>
  function open(path: fs.PathLike, flags?: string | number, mode?: fs.Mode): Promise<FileHandle>
  function opendir(path: fs.PathLike, options?: fs.OpenDirOptions): Promise<fs.Dir>
  function readdir(
    path: fs.PathLike,
    options?:
      | (fs.ObjectEncodingOptions & { withFileTypes?: false; recursive?: boolean })
      | BufferEncoding
      | null
  ): Promise<string[]>
  function readdir(
    path: fs.PathLike,
    options:
      | (fs.ObjectEncodingOptions & { withFileTypes: true; recursive?: boolean })
      | fs.BufferEncodingOption
  ): Promise<fs.Dirent[]>
  function readdir(
    path: fs.PathLike,
    options?:
      | (fs.ObjectEncodingOptions & { withFileTypes?: boolean; recursive?: boolean })
      | BufferEncoding
      | null
  ): Promise<string[] | fs.Dirent[]>
  function readFile(
    path: fs.PathOrFileDescriptor,
    options?: { encoding?: null; flag?: fs.OpenMode } | null
  ): Promise<Buffer>
  function readFile(
    path: fs.PathOrFileDescriptor,
    options: { encoding: BufferEncoding; flag?: fs.OpenMode } | BufferEncoding
  ): Promise<string>
  function readFile(
    path: fs.PathOrFileDescriptor,
    options?: (fs.ObjectEncodingOptions & { flag?: fs.OpenMode }) | BufferEncoding | null
  ): Promise<string | Buffer>
  function readlink(
    path: fs.PathLike,
    options?: fs.ObjectEncodingOptions | BufferEncoding | null
  ): Promise<string>
  function readlink(path: fs.PathLike, options: fs.BufferEncodingOption): Promise<Buffer>
  function readlink(
    path: fs.PathLike,
    options?: fs.ObjectEncodingOptions | BufferEncoding | null
  ): Promise<string | Buffer>
  function realpath(
    path: fs.PathLike,
    options?: fs.ObjectEncodingOptions | BufferEncoding | null
  ): Promise<string>
  function realpath(path: fs.PathLike, options: fs.BufferEncodingOption): Promise<Buffer>
  function realpath(
    path: fs.PathLike,
    options?: fs.ObjectEncodingOptions | BufferEncoding | null
  ): Promise<string | Buffer>
  function rename(oldPath: fs.PathLike, newPath: fs.PathLike): Promise<void>
  function rmdir(path: fs.PathLike, options?: fs.RmDirOptions): Promise<void>
  function rm(path: fs.PathLike, options?: fs.RmOptions): Promise<void>
  function stat(path: fs.PathLike, opts?: fs.StatOptions & { bigint?: false }): Promise<fs.Stats>
  function stat(path: fs.PathLike, opts: fs.StatOptions & { bigint: true }): Promise<fs.BigIntStats>
  function stat(path: fs.PathLike, opts?: fs.StatOptions): Promise<fs.Stats | fs.BigIntStats>
  function symlink(target: fs.PathLike, path: fs.PathLike, type?: string | null): Promise<void>
  function truncate(path: fs.PathLike, len?: number): Promise<void>
  function unlink(path: fs.PathLike): Promise<void>
  function utimes(path: fs.PathLike, atime: fs.TimeLike, mtime: fs.TimeLike): Promise<void>
  function watch(
    filename: fs.PathLike,
    options?: (fs.WatchOptions & { encoding?: BufferEncoding }) | BufferEncoding
  ): AsyncIterable<fs.WatchEventType>
  function writeFile(
    file: fs.PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?:
      | (fs.ObjectEncodingOptions & { mode?: fs.Mode; flag?: fs.OpenMode })
      | BufferEncoding
      | null
  ): Promise<void>

  const constants: typeof fs.constants
}
declare module 'http' {
  import * as stream from 'node:stream'
  import { URL } from 'node:url'
  import { TcpSocketConnectOpts, Socket, Server as NetServer, LookupFunction } from 'node:net'
  interface IncomingHttpHeaders extends NodeJS.Dict<string | string[]> {
    accept?: string | undefined
    'accept-language'?: string | undefined
    'accept-patch'?: string | undefined
    'accept-ranges'?: string | undefined
    'access-control-allow-credentials'?: string | undefined
    'access-control-allow-headers'?: string | undefined
    'access-control-allow-methods'?: string | undefined
    'access-control-allow-origin'?: string | undefined
    'access-control-expose-headers'?: string | undefined
    'access-control-max-age'?: string | undefined
    'access-control-request-headers'?: string | undefined
    'access-control-request-method'?: string | undefined
    age?: string | undefined
    allow?: string | undefined
    'alt-svc'?: string | undefined
    authorization?: string | undefined
    'cache-control'?: string | undefined
    connection?: string | undefined
    'content-disposition'?: string | undefined
    'content-encoding'?: string | undefined
    'content-language'?: string | undefined
    'content-length'?: string | undefined
    'content-location'?: string | undefined
    'content-range'?: string | undefined
    'content-type'?: string | undefined
    cookie?: string | undefined
    date?: string | undefined
    etag?: string | undefined
    expect?: string | undefined
    expires?: string | undefined
    forwarded?: string | undefined
    from?: string | undefined
    host?: string | undefined
    'if-match'?: string | undefined
    'if-modified-since'?: string | undefined
    'if-none-match'?: string | undefined
    'if-unmodified-since'?: string | undefined
    'last-modified'?: string | undefined
    location?: string | undefined
    origin?: string | undefined
    pragma?: string | undefined
    'proxy-authenticate'?: string | undefined
    'proxy-authorization'?: string | undefined
    'public-key-pins'?: string | undefined
    range?: string | undefined
    referer?: string | undefined
    'retry-after'?: string | undefined
    'sec-websocket-accept'?: string | undefined
    'sec-websocket-extensions'?: string | undefined
    'sec-websocket-key'?: string | undefined
    'sec-websocket-protocol'?: string | undefined
    'sec-websocket-version'?: string | undefined
    'set-cookie'?: string[] | undefined
    'strict-transport-security'?: string | undefined
    tk?: string | undefined
    trailer?: string | undefined
    'transfer-encoding'?: string | undefined
    upgrade?: string | undefined
    'user-agent'?: string | undefined
    vary?: string | undefined
    via?: string | undefined
    warning?: string | undefined
    'www-authenticate'?: string | undefined
  }
  type OutgoingHttpHeader = number | string | string[]
  interface OutgoingHttpHeaders extends NodeJS.Dict<OutgoingHttpHeader> {}
  interface ClientRequestArgs {
    signal?: AbortSignal | undefined
    protocol?: string | null | undefined
    host?: string | null | undefined
    hostname?: string | null | undefined
    family?: number | undefined
    port?: number | string | null | undefined
    defaultPort?: number | string | undefined
    localAddress?: string | undefined
    socketPath?: string | undefined
    maxHeaderSize?: number | undefined
    method?: string | undefined
    path?: string | null | undefined
    headers?: OutgoingHttpHeaders | undefined
    auth?: string | null | undefined
    agent?: Agent | boolean | undefined
    _defaultAgent?: Agent | undefined
    timeout?: number | undefined
    setHost?: boolean | undefined
    createConnection?:
      | ((options: ClientRequestArgs, oncreate: (err: Error, socket: Socket) => void) => Socket)
      | undefined
    lookup?: LookupFunction | undefined
  }
  interface ServerOptions {
    IncomingMessage?: typeof IncomingMessage | undefined
    ServerResponse?: typeof ServerResponse | undefined
    maxHeaderSize?: number | undefined
    insecureHTTPParser?: boolean | undefined
  }
  type RequestListener = (req: IncomingMessage, res: ServerResponse) => void
  class Server extends NetServer {
    constructor(requestListener?: RequestListener)
    constructor(options: ServerOptions, requestListener?: RequestListener)
    setTimeout(msecs?: number, callback?: () => void): this
    setTimeout(callback: () => void): this
    maxHeadersCount: number | null
    maxRequestsPerSocket: number | null
    timeout: number
    headersTimeout: number
    keepAliveTimeout: number
    requestTimeout: number
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'connection', listener: (socket: Socket) => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'listening', listener: () => void): this
    addListener(event: 'checkContinue', listener: RequestListener): this
    addListener(event: 'checkExpectation', listener: RequestListener): this
    addListener(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this
    addListener(
      event: 'connect',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    addListener(event: 'request', listener: RequestListener): this
    addListener(
      event: 'upgrade',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    emit(event: string, ...args: any[]): boolean
    emit(event: 'close'): boolean
    emit(event: 'connection', socket: Socket): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'listening'): boolean
    emit(event: 'checkContinue', req: IncomingMessage, res: ServerResponse): boolean
    emit(event: 'checkExpectation', req: IncomingMessage, res: ServerResponse): boolean
    emit(event: 'clientError', err: Error, socket: stream.Duplex): boolean
    emit(event: 'connect', req: IncomingMessage, socket: stream.Duplex, head: Buffer): boolean
    emit(event: 'request', req: IncomingMessage, res: ServerResponse): boolean
    emit(event: 'upgrade', req: IncomingMessage, socket: stream.Duplex, head: Buffer): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'connection', listener: (socket: Socket) => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'listening', listener: () => void): this
    on(event: 'checkContinue', listener: RequestListener): this
    on(event: 'checkExpectation', listener: RequestListener): this
    on(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this
    on(
      event: 'connect',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    on(event: 'request', listener: RequestListener): this
    on(
      event: 'upgrade',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'connection', listener: (socket: Socket) => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'listening', listener: () => void): this
    once(event: 'checkContinue', listener: RequestListener): this
    once(event: 'checkExpectation', listener: RequestListener): this
    once(event: 'clientError', listener: (err: Error, socket: stream.Duplex) => void): this
    once(
      event: 'connect',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    once(event: 'request', listener: RequestListener): this
    once(
      event: 'upgrade',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'connection', listener: (socket: Socket) => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'listening', listener: () => void): this
    prependListener(event: 'checkContinue', listener: RequestListener): this
    prependListener(event: 'checkExpectation', listener: RequestListener): this
    prependListener(
      event: 'clientError',
      listener: (err: Error, socket: stream.Duplex) => void
    ): this
    prependListener(
      event: 'connect',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    prependListener(event: 'request', listener: RequestListener): this
    prependListener(
      event: 'upgrade',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'connection', listener: (socket: Socket) => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'listening', listener: () => void): this
    prependOnceListener(event: 'checkContinue', listener: RequestListener): this
    prependOnceListener(event: 'checkExpectation', listener: RequestListener): this
    prependOnceListener(
      event: 'clientError',
      listener: (err: Error, socket: stream.Duplex) => void
    ): this
    prependOnceListener(
      event: 'connect',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
    prependOnceListener(event: 'request', listener: RequestListener): this
    prependOnceListener(
      event: 'upgrade',
      listener: (req: IncomingMessage, socket: stream.Duplex, head: Buffer) => void
    ): this
  }
  class OutgoingMessage extends stream.Writable {
    readonly req: IncomingMessage
    chunkedEncoding: boolean
    shouldKeepAlive: boolean
    useChunkedEncodingByDefault: boolean
    sendDate: boolean
    finished: boolean
    readonly headersSent: boolean
    readonly connection: Socket | null
    readonly socket: Socket | null
    constructor()
    setTimeout(msecs: number, callback?: () => void): this
    setHeader(name: string, value: number | string | ReadonlyArray<string>): this
    getHeader(name: string): number | string | string[] | undefined
    getHeaders(): OutgoingHttpHeaders
    getHeaderNames(): string[]
    hasHeader(name: string): boolean
    removeHeader(name: string): void
    addTrailers(headers: OutgoingHttpHeaders | ReadonlyArray<[string, string]>): void
    flushHeaders(): void
  }
  class ServerResponse extends OutgoingMessage {
    statusCode: number
    statusMessage: string
    constructor(req: IncomingMessage)
    assignSocket(socket: Socket): void
    detachSocket(socket: Socket): void
    writeContinue(callback?: () => void): void
    writeHead(
      statusCode: number,
      statusMessage?: string,
      headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]
    ): this
    writeHead(statusCode: number, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[]): this
    writeProcessing(): void
  }
  interface InformationEvent {
    statusCode: number
    statusMessage: string
    httpVersion: string
    httpVersionMajor: number
    httpVersionMinor: number
    headers: IncomingHttpHeaders
    rawHeaders: string[]
  }
  class ClientRequest extends OutgoingMessage {
    aborted: boolean
    host: string
    protocol: string
    reusedSocket: boolean
    maxHeadersCount: number
    constructor(url: string | URL | ClientRequestArgs, cb?: (res: IncomingMessage) => void)
    method: string
    path: string
    abort(): void
    onSocket(socket: Socket): void
    setTimeout(timeout: number, callback?: () => void): this
    setNoDelay(noDelay?: boolean): void
    setSocketKeepAlive(enable?: boolean, initialDelay?: number): void
    getRawHeaderNames(): string[]
    addListener(event: 'abort', listener: () => void): this
    addListener(
      event: 'connect',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    addListener(event: 'continue', listener: () => void): this
    addListener(event: 'information', listener: (info: InformationEvent) => void): this
    addListener(event: 'response', listener: (response: IncomingMessage) => void): this
    addListener(event: 'socket', listener: (socket: Socket) => void): this
    addListener(event: 'timeout', listener: () => void): this
    addListener(
      event: 'upgrade',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'drain', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'finish', listener: () => void): this
    addListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    on(event: 'abort', listener: () => void): this
    on(
      event: 'connect',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    on(event: 'continue', listener: () => void): this
    on(event: 'information', listener: (info: InformationEvent) => void): this
    on(event: 'response', listener: (response: IncomingMessage) => void): this
    on(event: 'socket', listener: (socket: Socket) => void): this
    on(event: 'timeout', listener: () => void): this
    on(
      event: 'upgrade',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    on(event: 'close', listener: () => void): this
    on(event: 'drain', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'finish', listener: () => void): this
    on(event: 'pipe', listener: (src: stream.Readable) => void): this
    on(event: 'unpipe', listener: (src: stream.Readable) => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'abort', listener: () => void): this
    once(
      event: 'connect',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    once(event: 'continue', listener: () => void): this
    once(event: 'information', listener: (info: InformationEvent) => void): this
    once(event: 'response', listener: (response: IncomingMessage) => void): this
    once(event: 'socket', listener: (socket: Socket) => void): this
    once(event: 'timeout', listener: () => void): this
    once(
      event: 'upgrade',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    once(event: 'close', listener: () => void): this
    once(event: 'drain', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'finish', listener: () => void): this
    once(event: 'pipe', listener: (src: stream.Readable) => void): this
    once(event: 'unpipe', listener: (src: stream.Readable) => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'abort', listener: () => void): this
    prependListener(
      event: 'connect',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    prependListener(event: 'continue', listener: () => void): this
    prependListener(event: 'information', listener: (info: InformationEvent) => void): this
    prependListener(event: 'response', listener: (response: IncomingMessage) => void): this
    prependListener(event: 'socket', listener: (socket: Socket) => void): this
    prependListener(event: 'timeout', listener: () => void): this
    prependListener(
      event: 'upgrade',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'drain', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'finish', listener: () => void): this
    prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'abort', listener: () => void): this
    prependOnceListener(
      event: 'connect',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    prependOnceListener(event: 'continue', listener: () => void): this
    prependOnceListener(event: 'information', listener: (info: InformationEvent) => void): this
    prependOnceListener(event: 'response', listener: (response: IncomingMessage) => void): this
    prependOnceListener(event: 'socket', listener: (socket: Socket) => void): this
    prependOnceListener(event: 'timeout', listener: () => void): this
    prependOnceListener(
      event: 'upgrade',
      listener: (response: IncomingMessage, socket: Socket, head: Buffer) => void
    ): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'drain', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'finish', listener: () => void): this
    prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  class IncomingMessage extends stream.Readable {
    constructor(socket: Socket)
    aborted: boolean
    httpVersion: string
    httpVersionMajor: number
    httpVersionMinor: number
    complete: boolean
    connection: Socket
    socket: Socket
    headers: IncomingHttpHeaders
    rawHeaders: string[]
    trailers: NodeJS.Dict<string>
    rawTrailers: string[]
    setTimeout(msecs: number, callback?: () => void): this
    method?: string | undefined
    url?: string | undefined
    statusCode?: number | undefined
    statusMessage?: string | undefined
    destroy(error?: Error): this
  }
  interface AgentOptions extends Partial<TcpSocketConnectOpts> {
    keepAlive?: boolean | undefined
    keepAliveMsecs?: number | undefined
    maxSockets?: number | undefined
    maxTotalSockets?: number | undefined
    maxFreeSockets?: number | undefined
    timeout?: number | undefined
    scheduling?: 'fifo' | 'lifo' | undefined
  }
  class Agent {
    maxFreeSockets: number
    maxSockets: number
    maxTotalSockets: number
    readonly freeSockets: NodeJS.ReadOnlyDict<Socket[]>
    readonly sockets: NodeJS.ReadOnlyDict<Socket[]>
    readonly requests: NodeJS.ReadOnlyDict<IncomingMessage[]>
    constructor(opts?: AgentOptions)
    destroy(): void
  }
  const METHODS: string[]
  const STATUS_CODES: {
    [errorCode: number]: string | undefined
    [errorCode: string]: string | undefined
  }
  function createServer(requestListener?: RequestListener): Server
  function createServer(options: ServerOptions, requestListener?: RequestListener): Server
  interface RequestOptions extends ClientRequestArgs {}
  function request(
    options: RequestOptions | string | URL,
    callback?: (res: IncomingMessage) => void
  ): ClientRequest
  function request(
    url: string | URL,
    options: RequestOptions,
    callback?: (res: IncomingMessage) => void
  ): ClientRequest
  function get(
    options: RequestOptions | string | URL,
    callback?: (res: IncomingMessage) => void
  ): ClientRequest
  function get(
    url: string | URL,
    options: RequestOptions,
    callback?: (res: IncomingMessage) => void
  ): ClientRequest
  let globalAgent: Agent
  const maxHeaderSize: number
}
declare module 'node:http' {
  export * from 'http'
}
declare module 'http2' {
  import EventEmitter = require('node:events')
  import * as fs from 'node:fs'
  import * as net from 'node:net'
  import * as stream from 'node:stream'
  import * as tls from 'node:tls'
  import * as url from 'node:url'
  import {
    IncomingHttpHeaders as Http1IncomingHttpHeaders,
    OutgoingHttpHeaders,
    IncomingMessage,
    ServerResponse
  } from 'node:http'
  export { OutgoingHttpHeaders } from 'node:http'
  export interface IncomingHttpStatusHeader {
    ':status'?: number | undefined
  }
  export interface IncomingHttpHeaders extends Http1IncomingHttpHeaders {
    ':path'?: string | undefined
    ':method'?: string | undefined
    ':authority'?: string | undefined
    ':scheme'?: string | undefined
  }
  export interface StreamPriorityOptions {
    exclusive?: boolean | undefined
    parent?: number | undefined
    weight?: number | undefined
    silent?: boolean | undefined
  }
  export interface StreamState {
    localWindowSize?: number | undefined
    state?: number | undefined
    localClose?: number | undefined
    remoteClose?: number | undefined
    sumDependencyWeight?: number | undefined
    weight?: number | undefined
  }
  export interface ServerStreamResponseOptions {
    endStream?: boolean | undefined
    waitForTrailers?: boolean | undefined
  }
  export interface StatOptions {
    offset: number
    length: number
  }
  export interface ServerStreamFileResponseOptions {
    statCheck?(
      stats: fs.Stats,
      headers: OutgoingHttpHeaders,
      statOptions: StatOptions
    ): void | boolean
    waitForTrailers?: boolean | undefined
    offset?: number | undefined
    length?: number | undefined
  }
  export interface ServerStreamFileResponseOptionsWithError
    extends ServerStreamFileResponseOptions {
    onError?(err: NodeJS.ErrnoException): void
  }
  export interface Http2Stream extends stream.Duplex {
    readonly aborted: boolean
    readonly bufferSize: number
    readonly closed: boolean
    readonly destroyed: boolean
    readonly endAfterHeaders: boolean
    readonly id?: number | undefined
    readonly pending: boolean
    readonly rstCode: number
    readonly sentHeaders: OutgoingHttpHeaders
    readonly sentInfoHeaders?: OutgoingHttpHeaders[] | undefined
    readonly sentTrailers?: OutgoingHttpHeaders | undefined
    readonly session: Http2Session
    readonly state: StreamState
    close(code?: number, callback?: () => void): void
    priority(options: StreamPriorityOptions): void
    setTimeout(msecs: number, callback?: () => void): void
    sendTrailers(headers: OutgoingHttpHeaders): void
    addListener(event: 'aborted', listener: () => void): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    addListener(event: 'drain', listener: () => void): this
    addListener(event: 'end', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'finish', listener: () => void): this
    addListener(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this
    addListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    addListener(event: 'streamClosed', listener: (code: number) => void): this
    addListener(event: 'timeout', listener: () => void): this
    addListener(
      event: 'trailers',
      listener: (trailers: IncomingHttpHeaders, flags: number) => void
    ): this
    addListener(event: 'wantTrailers', listener: () => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'aborted'): boolean
    emit(event: 'close'): boolean
    emit(event: 'data', chunk: Buffer | string): boolean
    emit(event: 'drain'): boolean
    emit(event: 'end'): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'finish'): boolean
    emit(event: 'frameError', frameType: number, errorCode: number): boolean
    emit(event: 'pipe', src: stream.Readable): boolean
    emit(event: 'unpipe', src: stream.Readable): boolean
    emit(event: 'streamClosed', code: number): boolean
    emit(event: 'timeout'): boolean
    emit(event: 'trailers', trailers: IncomingHttpHeaders, flags: number): boolean
    emit(event: 'wantTrailers'): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'aborted', listener: () => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'data', listener: (chunk: Buffer | string) => void): this
    on(event: 'drain', listener: () => void): this
    on(event: 'end', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'finish', listener: () => void): this
    on(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this
    on(event: 'pipe', listener: (src: stream.Readable) => void): this
    on(event: 'unpipe', listener: (src: stream.Readable) => void): this
    on(event: 'streamClosed', listener: (code: number) => void): this
    on(event: 'timeout', listener: () => void): this
    on(event: 'trailers', listener: (trailers: IncomingHttpHeaders, flags: number) => void): this
    on(event: 'wantTrailers', listener: () => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'aborted', listener: () => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'data', listener: (chunk: Buffer | string) => void): this
    once(event: 'drain', listener: () => void): this
    once(event: 'end', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'finish', listener: () => void): this
    once(event: 'frameError', listener: (frameType: number, errorCode: number) => void): this
    once(event: 'pipe', listener: (src: stream.Readable) => void): this
    once(event: 'unpipe', listener: (src: stream.Readable) => void): this
    once(event: 'streamClosed', listener: (code: number) => void): this
    once(event: 'timeout', listener: () => void): this
    once(event: 'trailers', listener: (trailers: IncomingHttpHeaders, flags: number) => void): this
    once(event: 'wantTrailers', listener: () => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'aborted', listener: () => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    prependListener(event: 'drain', listener: () => void): this
    prependListener(event: 'end', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'finish', listener: () => void): this
    prependListener(
      event: 'frameError',
      listener: (frameType: number, errorCode: number) => void
    ): this
    prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependListener(event: 'streamClosed', listener: (code: number) => void): this
    prependListener(event: 'timeout', listener: () => void): this
    prependListener(
      event: 'trailers',
      listener: (trailers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependListener(event: 'wantTrailers', listener: () => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'aborted', listener: () => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    prependOnceListener(event: 'drain', listener: () => void): this
    prependOnceListener(event: 'end', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'finish', listener: () => void): this
    prependOnceListener(
      event: 'frameError',
      listener: (frameType: number, errorCode: number) => void
    ): this
    prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: 'streamClosed', listener: (code: number) => void): this
    prependOnceListener(event: 'timeout', listener: () => void): this
    prependOnceListener(
      event: 'trailers',
      listener: (trailers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependOnceListener(event: 'wantTrailers', listener: () => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export interface ClientHttp2Stream extends Http2Stream {
    addListener(event: 'continue', listener: () => {}): this
    addListener(
      event: 'headers',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    addListener(
      event: 'push',
      listener: (headers: IncomingHttpHeaders, flags: number) => void
    ): this
    addListener(
      event: 'response',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'continue'): boolean
    emit(
      event: 'headers',
      headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
      flags: number
    ): boolean
    emit(event: 'push', headers: IncomingHttpHeaders, flags: number): boolean
    emit(
      event: 'response',
      headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
      flags: number
    ): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'continue', listener: () => {}): this
    on(
      event: 'headers',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    on(event: 'push', listener: (headers: IncomingHttpHeaders, flags: number) => void): this
    on(
      event: 'response',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'continue', listener: () => {}): this
    once(
      event: 'headers',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    once(event: 'push', listener: (headers: IncomingHttpHeaders, flags: number) => void): this
    once(
      event: 'response',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'continue', listener: () => {}): this
    prependListener(
      event: 'headers',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    prependListener(
      event: 'push',
      listener: (headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependListener(
      event: 'response',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'continue', listener: () => {}): this
    prependOnceListener(
      event: 'headers',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    prependOnceListener(
      event: 'push',
      listener: (headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependOnceListener(
      event: 'response',
      listener: (headers: IncomingHttpHeaders & IncomingHttpStatusHeader, flags: number) => void
    ): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export interface ServerHttp2Stream extends Http2Stream {
    readonly headersSent: boolean
    readonly pushAllowed: boolean
    additionalHeaders(headers: OutgoingHttpHeaders): void
    pushStream(
      headers: OutgoingHttpHeaders,
      callback?: (
        err: Error | null,
        pushStream: ServerHttp2Stream,
        headers: OutgoingHttpHeaders
      ) => void
    ): void
    pushStream(
      headers: OutgoingHttpHeaders,
      options?: StreamPriorityOptions,
      callback?: (
        err: Error | null,
        pushStream: ServerHttp2Stream,
        headers: OutgoingHttpHeaders
      ) => void
    ): void
    respond(headers?: OutgoingHttpHeaders, options?: ServerStreamResponseOptions): void
    respondWithFD(
      fd: number | fs.promises.FileHandle,
      headers?: OutgoingHttpHeaders,
      options?: ServerStreamFileResponseOptions
    ): void
    respondWithFile(
      path: string,
      headers?: OutgoingHttpHeaders,
      options?: ServerStreamFileResponseOptionsWithError
    ): void
  }
  export interface Settings {
    headerTableSize?: number | undefined
    enablePush?: boolean | undefined
    initialWindowSize?: number | undefined
    maxFrameSize?: number | undefined
    maxConcurrentStreams?: number | undefined
    maxHeaderListSize?: number | undefined
    enableConnectProtocol?: boolean | undefined
  }
  export interface ClientSessionRequestOptions {
    endStream?: boolean | undefined
    exclusive?: boolean | undefined
    parent?: number | undefined
    weight?: number | undefined
    waitForTrailers?: boolean | undefined
  }
  export interface SessionState {
    effectiveLocalWindowSize?: number | undefined
    effectiveRecvDataLength?: number | undefined
    nextStreamID?: number | undefined
    localWindowSize?: number | undefined
    lastProcStreamID?: number | undefined
    remoteWindowSize?: number | undefined
    outboundQueueSize?: number | undefined
    deflateDynamicTableSize?: number | undefined
    inflateDynamicTableSize?: number | undefined
  }
  export interface Http2Session extends EventEmitter {
    readonly alpnProtocol?: string | undefined
    readonly closed: boolean
    readonly connecting: boolean
    readonly destroyed: boolean
    readonly encrypted?: boolean | undefined
    readonly localSettings: Settings
    readonly originSet?: string[] | undefined
    readonly pendingSettingsAck: boolean
    readonly remoteSettings: Settings
    readonly socket: net.Socket | tls.TLSSocket
    readonly state: SessionState
    readonly type: number
    close(callback?: () => void): void
    destroy(error?: Error, code?: number): void
    goaway(code?: number, lastStreamID?: number, opaqueData?: NodeJS.ArrayBufferView): void
    ping(callback: (err: Error | null, duration: number, payload: Buffer) => void): boolean
    ping(
      payload: NodeJS.ArrayBufferView,
      callback: (err: Error | null, duration: number, payload: Buffer) => void
    ): boolean
    ref(): void
    setLocalWindowSize(windowSize: number): void
    setTimeout(msecs: number, callback?: () => void): void
    settings(settings: Settings): void
    unref(): void
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(
      event: 'frameError',
      listener: (frameType: number, errorCode: number, streamID: number) => void
    ): this
    addListener(
      event: 'goaway',
      listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void
    ): this
    addListener(event: 'localSettings', listener: (settings: Settings) => void): this
    addListener(event: 'ping', listener: () => void): this
    addListener(event: 'remoteSettings', listener: (settings: Settings) => void): this
    addListener(event: 'timeout', listener: () => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'close'): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'frameError', frameType: number, errorCode: number, streamID: number): boolean
    emit(event: 'goaway', errorCode: number, lastStreamID: number, opaqueData: Buffer): boolean
    emit(event: 'localSettings', settings: Settings): boolean
    emit(event: 'ping'): boolean
    emit(event: 'remoteSettings', settings: Settings): boolean
    emit(event: 'timeout'): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'close', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(
      event: 'frameError',
      listener: (frameType: number, errorCode: number, streamID: number) => void
    ): this
    on(
      event: 'goaway',
      listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void
    ): this
    on(event: 'localSettings', listener: (settings: Settings) => void): this
    on(event: 'ping', listener: () => void): this
    on(event: 'remoteSettings', listener: (settings: Settings) => void): this
    on(event: 'timeout', listener: () => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(
      event: 'frameError',
      listener: (frameType: number, errorCode: number, streamID: number) => void
    ): this
    once(
      event: 'goaway',
      listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void
    ): this
    once(event: 'localSettings', listener: (settings: Settings) => void): this
    once(event: 'ping', listener: () => void): this
    once(event: 'remoteSettings', listener: (settings: Settings) => void): this
    once(event: 'timeout', listener: () => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(
      event: 'frameError',
      listener: (frameType: number, errorCode: number, streamID: number) => void
    ): this
    prependListener(
      event: 'goaway',
      listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void
    ): this
    prependListener(event: 'localSettings', listener: (settings: Settings) => void): this
    prependListener(event: 'ping', listener: () => void): this
    prependListener(event: 'remoteSettings', listener: (settings: Settings) => void): this
    prependListener(event: 'timeout', listener: () => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(
      event: 'frameError',
      listener: (frameType: number, errorCode: number, streamID: number) => void
    ): this
    prependOnceListener(
      event: 'goaway',
      listener: (errorCode: number, lastStreamID: number, opaqueData: Buffer) => void
    ): this
    prependOnceListener(event: 'localSettings', listener: (settings: Settings) => void): this
    prependOnceListener(event: 'ping', listener: () => void): this
    prependOnceListener(event: 'remoteSettings', listener: (settings: Settings) => void): this
    prependOnceListener(event: 'timeout', listener: () => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export interface ClientHttp2Session extends Http2Session {
    request(headers?: OutgoingHttpHeaders, options?: ClientSessionRequestOptions): ClientHttp2Stream
    addListener(
      event: 'altsvc',
      listener: (alt: string, origin: string, stream: number) => void
    ): this
    addListener(event: 'origin', listener: (origins: string[]) => void): this
    addListener(
      event: 'connect',
      listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    addListener(
      event: 'stream',
      listener: (
        stream: ClientHttp2Stream,
        headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
        flags: number
      ) => void
    ): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'altsvc', alt: string, origin: string, stream: number): boolean
    emit(event: 'origin', origins: ReadonlyArray<string>): boolean
    emit(event: 'connect', session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket): boolean
    emit(
      event: 'stream',
      stream: ClientHttp2Stream,
      headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
      flags: number
    ): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'altsvc', listener: (alt: string, origin: string, stream: number) => void): this
    on(event: 'origin', listener: (origins: string[]) => void): this
    on(
      event: 'connect',
      listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    on(
      event: 'stream',
      listener: (
        stream: ClientHttp2Stream,
        headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
        flags: number
      ) => void
    ): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'altsvc', listener: (alt: string, origin: string, stream: number) => void): this
    once(event: 'origin', listener: (origins: string[]) => void): this
    once(
      event: 'connect',
      listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    once(
      event: 'stream',
      listener: (
        stream: ClientHttp2Stream,
        headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
        flags: number
      ) => void
    ): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(
      event: 'altsvc',
      listener: (alt: string, origin: string, stream: number) => void
    ): this
    prependListener(event: 'origin', listener: (origins: string[]) => void): this
    prependListener(
      event: 'connect',
      listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    prependListener(
      event: 'stream',
      listener: (
        stream: ClientHttp2Stream,
        headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
        flags: number
      ) => void
    ): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'altsvc',
      listener: (alt: string, origin: string, stream: number) => void
    ): this
    prependOnceListener(event: 'origin', listener: (origins: string[]) => void): this
    prependOnceListener(
      event: 'connect',
      listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    prependOnceListener(
      event: 'stream',
      listener: (
        stream: ClientHttp2Stream,
        headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
        flags: number
      ) => void
    ): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export interface AlternativeServiceOptions {
    origin: number | string | url.URL
  }
  export interface ServerHttp2Session extends Http2Session {
    readonly server: Http2Server | Http2SecureServer
    altsvc(alt: string, originOrStream: number | string | url.URL | AlternativeServiceOptions): void
    origin(
      ...origins: Array<
        | string
        | url.URL
        | {
            origin: string
          }
      >
    ): void
    addListener(
      event: 'connect',
      listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    addListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'connect', session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket): boolean
    emit(
      event: 'stream',
      stream: ServerHttp2Stream,
      headers: IncomingHttpHeaders,
      flags: number
    ): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(
      event: 'connect',
      listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    on(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(
      event: 'connect',
      listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    once(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(
      event: 'connect',
      listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    prependListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'connect',
      listener: (session: ServerHttp2Session, socket: net.Socket | tls.TLSSocket) => void
    ): this
    prependOnceListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export interface SessionOptions {
    maxDeflateDynamicTableSize?: number | undefined
    maxSessionMemory?: number | undefined
    maxHeaderListPairs?: number | undefined
    maxOutstandingPings?: number | undefined
    maxSendHeaderBlockLength?: number | undefined
    paddingStrategy?: number | undefined
    peerMaxConcurrentStreams?: number | undefined
    settings?: Settings | undefined
    unknownProtocolTimeout?: number | undefined
    selectPadding?(frameLen: number, maxFrameLen: number): number
    createConnection?(authority: url.URL, option: SessionOptions): stream.Duplex
  }
  export interface ClientSessionOptions extends SessionOptions {
    maxReservedRemoteStreams?: number | undefined
    createConnection?: ((authority: url.URL, option: SessionOptions) => stream.Duplex) | undefined
    protocol?: 'http:' | 'https:' | undefined
  }
  export interface ServerSessionOptions extends SessionOptions {
    Http1IncomingMessage?: typeof IncomingMessage | undefined
    Http1ServerResponse?: typeof ServerResponse | undefined
    Http2ServerRequest?: typeof Http2ServerRequest | undefined
    Http2ServerResponse?: typeof Http2ServerResponse | undefined
  }
  export interface SecureClientSessionOptions extends ClientSessionOptions, tls.ConnectionOptions {}
  export interface SecureServerSessionOptions extends ServerSessionOptions, tls.TlsOptions {}
  export interface ServerOptions extends ServerSessionOptions {}
  export interface SecureServerOptions extends SecureServerSessionOptions {
    allowHTTP1?: boolean | undefined
    origins?: string[] | undefined
  }
  interface HTTP2ServerCommon {
    setTimeout(msec?: number, callback?: () => void): this
    updateSettings(settings: Settings): void
  }
  export interface Http2Server extends net.Server, HTTP2ServerCommon {
    addListener(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    addListener(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    addListener(event: 'session', listener: (session: ServerHttp2Session) => void): this
    addListener(event: 'sessionError', listener: (err: Error) => void): this
    addListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    addListener(event: 'timeout', listener: () => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(
      event: 'checkContinue',
      request: Http2ServerRequest,
      response: Http2ServerResponse
    ): boolean
    emit(event: 'request', request: Http2ServerRequest, response: Http2ServerResponse): boolean
    emit(event: 'session', session: ServerHttp2Session): boolean
    emit(event: 'sessionError', err: Error): boolean
    emit(
      event: 'stream',
      stream: ServerHttp2Stream,
      headers: IncomingHttpHeaders,
      flags: number
    ): boolean
    emit(event: 'timeout'): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    on(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    on(event: 'session', listener: (session: ServerHttp2Session) => void): this
    on(event: 'sessionError', listener: (err: Error) => void): this
    on(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    on(event: 'timeout', listener: () => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    once(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    once(event: 'session', listener: (session: ServerHttp2Session) => void): this
    once(event: 'sessionError', listener: (err: Error) => void): this
    once(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    once(event: 'timeout', listener: () => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependListener(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependListener(event: 'session', listener: (session: ServerHttp2Session) => void): this
    prependListener(event: 'sessionError', listener: (err: Error) => void): this
    prependListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependListener(event: 'timeout', listener: () => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependOnceListener(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependOnceListener(event: 'session', listener: (session: ServerHttp2Session) => void): this
    prependOnceListener(event: 'sessionError', listener: (err: Error) => void): this
    prependOnceListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependOnceListener(event: 'timeout', listener: () => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export interface Http2SecureServer extends tls.Server, HTTP2ServerCommon {
    addListener(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    addListener(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    addListener(event: 'session', listener: (session: ServerHttp2Session) => void): this
    addListener(event: 'sessionError', listener: (err: Error) => void): this
    addListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    addListener(event: 'timeout', listener: () => void): this
    addListener(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(
      event: 'checkContinue',
      request: Http2ServerRequest,
      response: Http2ServerResponse
    ): boolean
    emit(event: 'request', request: Http2ServerRequest, response: Http2ServerResponse): boolean
    emit(event: 'session', session: ServerHttp2Session): boolean
    emit(event: 'sessionError', err: Error): boolean
    emit(
      event: 'stream',
      stream: ServerHttp2Stream,
      headers: IncomingHttpHeaders,
      flags: number
    ): boolean
    emit(event: 'timeout'): boolean
    emit(event: 'unknownProtocol', socket: tls.TLSSocket): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    on(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    on(event: 'session', listener: (session: ServerHttp2Session) => void): this
    on(event: 'sessionError', listener: (err: Error) => void): this
    on(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    on(event: 'timeout', listener: () => void): this
    on(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    once(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    once(event: 'session', listener: (session: ServerHttp2Session) => void): this
    once(event: 'sessionError', listener: (err: Error) => void): this
    once(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    once(event: 'timeout', listener: () => void): this
    once(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependListener(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependListener(event: 'session', listener: (session: ServerHttp2Session) => void): this
    prependListener(event: 'sessionError', listener: (err: Error) => void): this
    prependListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependListener(event: 'timeout', listener: () => void): this
    prependListener(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'checkContinue',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependOnceListener(
      event: 'request',
      listener: (request: Http2ServerRequest, response: Http2ServerResponse) => void
    ): this
    prependOnceListener(event: 'session', listener: (session: ServerHttp2Session) => void): this
    prependOnceListener(event: 'sessionError', listener: (err: Error) => void): this
    prependOnceListener(
      event: 'stream',
      listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void
    ): this
    prependOnceListener(event: 'timeout', listener: () => void): this
    prependOnceListener(event: 'unknownProtocol', listener: (socket: tls.TLSSocket) => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export class Http2ServerRequest extends stream.Readable {
    constructor(
      stream: ServerHttp2Stream,
      headers: IncomingHttpHeaders,
      options: stream.ReadableOptions,
      rawHeaders: ReadonlyArray<string>
    )
    readonly aborted: boolean
    readonly authority: string
    readonly connection: net.Socket | tls.TLSSocket
    readonly complete: boolean
    readonly headers: IncomingHttpHeaders
    readonly httpVersion: string
    readonly httpVersionMinor: number
    readonly httpVersionMajor: number
    readonly method: string
    readonly rawHeaders: string[]
    readonly rawTrailers: string[]
    readonly scheme: string
    readonly socket: net.Socket | tls.TLSSocket
    readonly stream: ServerHttp2Stream
    readonly trailers: IncomingHttpHeaders
    url: string
    setTimeout(msecs: number, callback?: () => void): void
    read(size?: number): Buffer | string | null
    addListener(event: 'aborted', listener: (hadError: boolean, code: number) => void): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    addListener(event: 'end', listener: () => void): this
    addListener(event: 'readable', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'aborted', hadError: boolean, code: number): boolean
    emit(event: 'close'): boolean
    emit(event: 'data', chunk: Buffer | string): boolean
    emit(event: 'end'): boolean
    emit(event: 'readable'): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'aborted', listener: (hadError: boolean, code: number) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'data', listener: (chunk: Buffer | string) => void): this
    on(event: 'end', listener: () => void): this
    on(event: 'readable', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'aborted', listener: (hadError: boolean, code: number) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'data', listener: (chunk: Buffer | string) => void): this
    once(event: 'end', listener: () => void): this
    once(event: 'readable', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'aborted', listener: (hadError: boolean, code: number) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    prependListener(event: 'end', listener: () => void): this
    prependListener(event: 'readable', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'aborted', listener: (hadError: boolean, code: number) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'data', listener: (chunk: Buffer | string) => void): this
    prependOnceListener(event: 'end', listener: () => void): this
    prependOnceListener(event: 'readable', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export class Http2ServerResponse extends stream.Writable {
    constructor(stream: ServerHttp2Stream)
    readonly connection: net.Socket | tls.TLSSocket
    readonly finished: boolean
    readonly headersSent: boolean
    readonly req: Http2ServerRequest
    readonly socket: net.Socket | tls.TLSSocket
    readonly stream: ServerHttp2Stream
    sendDate: boolean
    statusCode: number
    statusMessage: ''
    addTrailers(trailers: OutgoingHttpHeaders): void
    end(callback?: () => void): this
    end(data: string | Uint8Array, callback?: () => void): this
    end(data: string | Uint8Array, encoding: BufferEncoding, callback?: () => void): this
    getHeader(name: string): string
    getHeaderNames(): string[]
    getHeaders(): OutgoingHttpHeaders
    hasHeader(name: string): boolean
    removeHeader(name: string): void
    setHeader(name: string, value: number | string | ReadonlyArray<string>): void
    setTimeout(msecs: number, callback?: () => void): void
    write(chunk: string | Uint8Array, callback?: (err: Error) => void): boolean
    write(
      chunk: string | Uint8Array,
      encoding: BufferEncoding,
      callback?: (err: Error) => void
    ): boolean
    writeContinue(): void
    writeHead(statusCode: number, headers?: OutgoingHttpHeaders): this
    writeHead(statusCode: number, statusMessage: string, headers?: OutgoingHttpHeaders): this
    createPushResponse(
      headers: OutgoingHttpHeaders,
      callback: (err: Error | null, res: Http2ServerResponse) => void
    ): void
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'drain', listener: () => void): this
    addListener(event: 'error', listener: (error: Error) => void): this
    addListener(event: 'finish', listener: () => void): this
    addListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    addListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'close'): boolean
    emit(event: 'drain'): boolean
    emit(event: 'error', error: Error): boolean
    emit(event: 'finish'): boolean
    emit(event: 'pipe', src: stream.Readable): boolean
    emit(event: 'unpipe', src: stream.Readable): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'close', listener: () => void): this
    on(event: 'drain', listener: () => void): this
    on(event: 'error', listener: (error: Error) => void): this
    on(event: 'finish', listener: () => void): this
    on(event: 'pipe', listener: (src: stream.Readable) => void): this
    on(event: 'unpipe', listener: (src: stream.Readable) => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'drain', listener: () => void): this
    once(event: 'error', listener: (error: Error) => void): this
    once(event: 'finish', listener: () => void): this
    once(event: 'pipe', listener: (src: stream.Readable) => void): this
    once(event: 'unpipe', listener: (src: stream.Readable) => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'drain', listener: () => void): this
    prependListener(event: 'error', listener: (error: Error) => void): this
    prependListener(event: 'finish', listener: () => void): this
    prependListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'drain', listener: () => void): this
    prependOnceListener(event: 'error', listener: (error: Error) => void): this
    prependOnceListener(event: 'finish', listener: () => void): this
    prependOnceListener(event: 'pipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: 'unpipe', listener: (src: stream.Readable) => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
  }
  export namespace constants {
    const NGHTTP2_SESSION_SERVER: number
    const NGHTTP2_SESSION_CLIENT: number
    const NGHTTP2_STREAM_STATE_IDLE: number
    const NGHTTP2_STREAM_STATE_OPEN: number
    const NGHTTP2_STREAM_STATE_RESERVED_LOCAL: number
    const NGHTTP2_STREAM_STATE_RESERVED_REMOTE: number
    const NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: number
    const NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: number
    const NGHTTP2_STREAM_STATE_CLOSED: number
    const NGHTTP2_NO_ERROR: number
    const NGHTTP2_PROTOCOL_ERROR: number
    const NGHTTP2_INTERNAL_ERROR: number
    const NGHTTP2_FLOW_CONTROL_ERROR: number
    const NGHTTP2_SETTINGS_TIMEOUT: number
    const NGHTTP2_STREAM_CLOSED: number
    const NGHTTP2_FRAME_SIZE_ERROR: number
    const NGHTTP2_REFUSED_STREAM: number
    const NGHTTP2_CANCEL: number
    const NGHTTP2_COMPRESSION_ERROR: number
    const NGHTTP2_CONNECT_ERROR: number
    const NGHTTP2_ENHANCE_YOUR_CALM: number
    const NGHTTP2_INADEQUATE_SECURITY: number
    const NGHTTP2_HTTP_1_1_REQUIRED: number
    const NGHTTP2_ERR_FRAME_SIZE_ERROR: number
    const NGHTTP2_FLAG_NONE: number
    const NGHTTP2_FLAG_END_STREAM: number
    const NGHTTP2_FLAG_END_HEADERS: number
    const NGHTTP2_FLAG_ACK: number
    const NGHTTP2_FLAG_PADDED: number
    const NGHTTP2_FLAG_PRIORITY: number
    const DEFAULT_SETTINGS_HEADER_TABLE_SIZE: number
    const DEFAULT_SETTINGS_ENABLE_PUSH: number
    const DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: number
    const DEFAULT_SETTINGS_MAX_FRAME_SIZE: number
    const MAX_MAX_FRAME_SIZE: number
    const MIN_MAX_FRAME_SIZE: number
    const MAX_INITIAL_WINDOW_SIZE: number
    const NGHTTP2_DEFAULT_WEIGHT: number
    const NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: number
    const NGHTTP2_SETTINGS_ENABLE_PUSH: number
    const NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: number
    const NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: number
    const NGHTTP2_SETTINGS_MAX_FRAME_SIZE: number
    const NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: number
    const PADDING_STRATEGY_NONE: number
    const PADDING_STRATEGY_MAX: number
    const PADDING_STRATEGY_CALLBACK: number
    const HTTP2_HEADER_STATUS: string
    const HTTP2_HEADER_METHOD: string
    const HTTP2_HEADER_AUTHORITY: string
    const HTTP2_HEADER_SCHEME: string
    const HTTP2_HEADER_PATH: string
    const HTTP2_HEADER_ACCEPT_CHARSET: string
    const HTTP2_HEADER_ACCEPT_ENCODING: string
    const HTTP2_HEADER_ACCEPT_LANGUAGE: string
    const HTTP2_HEADER_ACCEPT_RANGES: string
    const HTTP2_HEADER_ACCEPT: string
    const HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: string
    const HTTP2_HEADER_AGE: string
    const HTTP2_HEADER_ALLOW: string
    const HTTP2_HEADER_AUTHORIZATION: string
    const HTTP2_HEADER_CACHE_CONTROL: string
    const HTTP2_HEADER_CONNECTION: string
    const HTTP2_HEADER_CONTENT_DISPOSITION: string
    const HTTP2_HEADER_CONTENT_ENCODING: string
    const HTTP2_HEADER_CONTENT_LANGUAGE: string
    const HTTP2_HEADER_CONTENT_LENGTH: string
    const HTTP2_HEADER_CONTENT_LOCATION: string
    const HTTP2_HEADER_CONTENT_MD5: string
    const HTTP2_HEADER_CONTENT_RANGE: string
    const HTTP2_HEADER_CONTENT_TYPE: string
    const HTTP2_HEADER_COOKIE: string
    const HTTP2_HEADER_DATE: string
    const HTTP2_HEADER_ETAG: string
    const HTTP2_HEADER_EXPECT: string
    const HTTP2_HEADER_EXPIRES: string
    const HTTP2_HEADER_FROM: string
    const HTTP2_HEADER_HOST: string
    const HTTP2_HEADER_IF_MATCH: string
    const HTTP2_HEADER_IF_MODIFIED_SINCE: string
    const HTTP2_HEADER_IF_NONE_MATCH: string
    const HTTP2_HEADER_IF_RANGE: string
    const HTTP2_HEADER_IF_UNMODIFIED_SINCE: string
    const HTTP2_HEADER_LAST_MODIFIED: string
    const HTTP2_HEADER_LINK: string
    const HTTP2_HEADER_LOCATION: string
    const HTTP2_HEADER_MAX_FORWARDS: string
    const HTTP2_HEADER_PREFER: string
    const HTTP2_HEADER_PROXY_AUTHENTICATE: string
    const HTTP2_HEADER_PROXY_AUTHORIZATION: string
    const HTTP2_HEADER_RANGE: string
    const HTTP2_HEADER_REFERER: string
    const HTTP2_HEADER_REFRESH: string
    const HTTP2_HEADER_RETRY_AFTER: string
    const HTTP2_HEADER_SERVER: string
    const HTTP2_HEADER_SET_COOKIE: string
    const HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: string
    const HTTP2_HEADER_TRANSFER_ENCODING: string
    const HTTP2_HEADER_TE: string
    const HTTP2_HEADER_UPGRADE: string
    const HTTP2_HEADER_USER_AGENT: string
    const HTTP2_HEADER_VARY: string
    const HTTP2_HEADER_VIA: string
    const HTTP2_HEADER_WWW_AUTHENTICATE: string
    const HTTP2_HEADER_HTTP2_SETTINGS: string
    const HTTP2_HEADER_KEEP_ALIVE: string
    const HTTP2_HEADER_PROXY_CONNECTION: string
    const HTTP2_METHOD_ACL: string
    const HTTP2_METHOD_BASELINE_CONTROL: string
    const HTTP2_METHOD_BIND: string
    const HTTP2_METHOD_CHECKIN: string
    const HTTP2_METHOD_CHECKOUT: string
    const HTTP2_METHOD_CONNECT: string
    const HTTP2_METHOD_COPY: string
    const HTTP2_METHOD_DELETE: string
    const HTTP2_METHOD_GET: string
    const HTTP2_METHOD_HEAD: string
    const HTTP2_METHOD_LABEL: string
    const HTTP2_METHOD_LINK: string
    const HTTP2_METHOD_LOCK: string
    const HTTP2_METHOD_MERGE: string
    const HTTP2_METHOD_MKACTIVITY: string
    const HTTP2_METHOD_MKCALENDAR: string
    const HTTP2_METHOD_MKCOL: string
    const HTTP2_METHOD_MKREDIRECTREF: string
    const HTTP2_METHOD_MKWORKSPACE: string
    const HTTP2_METHOD_MOVE: string
    const HTTP2_METHOD_OPTIONS: string
    const HTTP2_METHOD_ORDERPATCH: string
    const HTTP2_METHOD_PATCH: string
    const HTTP2_METHOD_POST: string
    const HTTP2_METHOD_PRI: string
    const HTTP2_METHOD_PROPFIND: string
    const HTTP2_METHOD_PROPPATCH: string
    const HTTP2_METHOD_PUT: string
    const HTTP2_METHOD_REBIND: string
    const HTTP2_METHOD_REPORT: string
    const HTTP2_METHOD_SEARCH: string
    const HTTP2_METHOD_TRACE: string
    const HTTP2_METHOD_UNBIND: string
    const HTTP2_METHOD_UNCHECKOUT: string
    const HTTP2_METHOD_UNLINK: string
    const HTTP2_METHOD_UNLOCK: string
    const HTTP2_METHOD_UPDATE: string
    const HTTP2_METHOD_UPDATEREDIRECTREF: string
    const HTTP2_METHOD_VERSION_CONTROL: string
    const HTTP_STATUS_CONTINUE: number
    const HTTP_STATUS_SWITCHING_PROTOCOLS: number
    const HTTP_STATUS_PROCESSING: number
    const HTTP_STATUS_OK: number
    const HTTP_STATUS_CREATED: number
    const HTTP_STATUS_ACCEPTED: number
    const HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: number
    const HTTP_STATUS_NO_CONTENT: number
    const HTTP_STATUS_RESET_CONTENT: number
    const HTTP_STATUS_PARTIAL_CONTENT: number
    const HTTP_STATUS_MULTI_STATUS: number
    const HTTP_STATUS_ALREADY_REPORTED: number
    const HTTP_STATUS_IM_USED: number
    const HTTP_STATUS_MULTIPLE_CHOICES: number
    const HTTP_STATUS_MOVED_PERMANENTLY: number
    const HTTP_STATUS_FOUND: number
    const HTTP_STATUS_SEE_OTHER: number
    const HTTP_STATUS_NOT_MODIFIED: number
    const HTTP_STATUS_USE_PROXY: number
    const HTTP_STATUS_TEMPORARY_REDIRECT: number
    const HTTP_STATUS_PERMANENT_REDIRECT: number
    const HTTP_STATUS_BAD_REQUEST: number
    const HTTP_STATUS_UNAUTHORIZED: number
    const HTTP_STATUS_PAYMENT_REQUIRED: number
    const HTTP_STATUS_FORBIDDEN: number
    const HTTP_STATUS_NOT_FOUND: number
    const HTTP_STATUS_METHOD_NOT_ALLOWED: number
    const HTTP_STATUS_NOT_ACCEPTABLE: number
    const HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: number
    const HTTP_STATUS_REQUEST_TIMEOUT: number
    const HTTP_STATUS_CONFLICT: number
    const HTTP_STATUS_GONE: number
    const HTTP_STATUS_LENGTH_REQUIRED: number
    const HTTP_STATUS_PRECONDITION_FAILED: number
    const HTTP_STATUS_PAYLOAD_TOO_LARGE: number
    const HTTP_STATUS_URI_TOO_LONG: number
    const HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: number
    const HTTP_STATUS_RANGE_NOT_SATISFIABLE: number
    const HTTP_STATUS_EXPECTATION_FAILED: number
    const HTTP_STATUS_TEAPOT: number
    const HTTP_STATUS_MISDIRECTED_REQUEST: number
    const HTTP_STATUS_UNPROCESSABLE_ENTITY: number
    const HTTP_STATUS_LOCKED: number
    const HTTP_STATUS_FAILED_DEPENDENCY: number
    const HTTP_STATUS_UNORDERED_COLLECTION: number
    const HTTP_STATUS_UPGRADE_REQUIRED: number
    const HTTP_STATUS_PRECONDITION_REQUIRED: number
    const HTTP_STATUS_TOO_MANY_REQUESTS: number
    const HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: number
    const HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: number
    const HTTP_STATUS_INTERNAL_SERVER_ERROR: number
    const HTTP_STATUS_NOT_IMPLEMENTED: number
    const HTTP_STATUS_BAD_GATEWAY: number
    const HTTP_STATUS_SERVICE_UNAVAILABLE: number
    const HTTP_STATUS_GATEWAY_TIMEOUT: number
    const HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: number
    const HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: number
    const HTTP_STATUS_INSUFFICIENT_STORAGE: number
    const HTTP_STATUS_LOOP_DETECTED: number
    const HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: number
    const HTTP_STATUS_NOT_EXTENDED: number
    const HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: number
  }
  export const sensitiveHeaders: symbol
  export function getDefaultSettings(): Settings
  export function getPackedSettings(settings: Settings): Buffer
  export function getUnpackedSettings(buf: Uint8Array): Settings
  export function createServer(
    onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void
  ): Http2Server
  export function createServer(
    options: ServerOptions,
    onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void
  ): Http2Server
  export function createSecureServer(
    onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void
  ): Http2SecureServer
  export function createSecureServer(
    options: SecureServerOptions,
    onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void
  ): Http2SecureServer
  export function connect(
    authority: string | url.URL,
    listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
  ): ClientHttp2Session
  export function connect(
    authority: string | url.URL,
    options?: ClientSessionOptions | SecureClientSessionOptions,
    listener?: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void
  ): ClientHttp2Session
}
declare module 'node:http2' {
  export * from 'http2'
}
declare module 'https' {
  import { Duplex } from 'node:stream'
  import * as tls from 'node:tls'
  import * as http from 'node:http'
  import { URL } from 'node:url'
  type ServerOptions = tls.SecureContextOptions & tls.TlsOptions & http.ServerOptions
  type RequestOptions = http.RequestOptions &
    tls.SecureContextOptions & {
      rejectUnauthorized?: boolean | undefined
      servername?: string | undefined
    }
  interface AgentOptions extends http.AgentOptions, tls.ConnectionOptions {
    rejectUnauthorized?: boolean | undefined
    maxCachedSessions?: number | undefined
  }
  class Agent extends http.Agent {
    constructor(options?: AgentOptions)
    options: AgentOptions
  }
  interface Server extends http.Server {}
  class Server extends tls.Server {
    constructor(requestListener?: http.RequestListener)
    constructor(options: ServerOptions, requestListener?: http.RequestListener)
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this
    addListener(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    addListener(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    addListener(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    addListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this
    addListener(
      event: 'tlsClientError',
      listener: (err: Error, tlsSocket: tls.TLSSocket) => void
    ): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'connection', listener: (socket: Duplex) => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'listening', listener: () => void): this
    addListener(event: 'checkContinue', listener: http.RequestListener): this
    addListener(event: 'checkExpectation', listener: http.RequestListener): this
    addListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this
    addListener(
      event: 'connect',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    addListener(event: 'request', listener: http.RequestListener): this
    addListener(
      event: 'upgrade',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    emit(event: string, ...args: any[]): boolean
    emit(event: 'keylog', line: Buffer, tlsSocket: tls.TLSSocket): boolean
    emit(
      event: 'newSession',
      sessionId: Buffer,
      sessionData: Buffer,
      callback: (err: Error, resp: Buffer) => void
    ): boolean
    emit(
      event: 'OCSPRequest',
      certificate: Buffer,
      issuer: Buffer,
      callback: (err: Error | null, resp: Buffer) => void
    ): boolean
    emit(
      event: 'resumeSession',
      sessionId: Buffer,
      callback: (err: Error, sessionData: Buffer) => void
    ): boolean
    emit(event: 'secureConnection', tlsSocket: tls.TLSSocket): boolean
    emit(event: 'tlsClientError', err: Error, tlsSocket: tls.TLSSocket): boolean
    emit(event: 'close'): boolean
    emit(event: 'connection', socket: Duplex): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'listening'): boolean
    emit(event: 'checkContinue', req: http.IncomingMessage, res: http.ServerResponse): boolean
    emit(event: 'checkExpectation', req: http.IncomingMessage, res: http.ServerResponse): boolean
    emit(event: 'clientError', err: Error, socket: Duplex): boolean
    emit(event: 'connect', req: http.IncomingMessage, socket: Duplex, head: Buffer): boolean
    emit(event: 'request', req: http.IncomingMessage, res: http.ServerResponse): boolean
    emit(event: 'upgrade', req: http.IncomingMessage, socket: Duplex, head: Buffer): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this
    on(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    on(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    on(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    on(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this
    on(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'connection', listener: (socket: Duplex) => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'listening', listener: () => void): this
    on(event: 'checkContinue', listener: http.RequestListener): this
    on(event: 'checkExpectation', listener: http.RequestListener): this
    on(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this
    on(
      event: 'connect',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    on(event: 'request', listener: http.RequestListener): this
    on(
      event: 'upgrade',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'keylog', listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void): this
    once(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    once(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    once(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    once(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this
    once(event: 'tlsClientError', listener: (err: Error, tlsSocket: tls.TLSSocket) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'connection', listener: (socket: Duplex) => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'listening', listener: () => void): this
    once(event: 'checkContinue', listener: http.RequestListener): this
    once(event: 'checkExpectation', listener: http.RequestListener): this
    once(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this
    once(
      event: 'connect',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    once(event: 'request', listener: http.RequestListener): this
    once(
      event: 'upgrade',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(
      event: 'keylog',
      listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void
    ): this
    prependListener(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    prependListener(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    prependListener(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    prependListener(event: 'secureConnection', listener: (tlsSocket: tls.TLSSocket) => void): this
    prependListener(
      event: 'tlsClientError',
      listener: (err: Error, tlsSocket: tls.TLSSocket) => void
    ): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'connection', listener: (socket: Duplex) => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'listening', listener: () => void): this
    prependListener(event: 'checkContinue', listener: http.RequestListener): this
    prependListener(event: 'checkExpectation', listener: http.RequestListener): this
    prependListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this
    prependListener(
      event: 'connect',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    prependListener(event: 'request', listener: http.RequestListener): this
    prependListener(
      event: 'upgrade',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'keylog',
      listener: (line: Buffer, tlsSocket: tls.TLSSocket) => void
    ): this
    prependOnceListener(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    prependOnceListener(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    prependOnceListener(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    prependOnceListener(
      event: 'secureConnection',
      listener: (tlsSocket: tls.TLSSocket) => void
    ): this
    prependOnceListener(
      event: 'tlsClientError',
      listener: (err: Error, tlsSocket: tls.TLSSocket) => void
    ): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'connection', listener: (socket: Duplex) => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'listening', listener: () => void): this
    prependOnceListener(event: 'checkContinue', listener: http.RequestListener): this
    prependOnceListener(event: 'checkExpectation', listener: http.RequestListener): this
    prependOnceListener(event: 'clientError', listener: (err: Error, socket: Duplex) => void): this
    prependOnceListener(
      event: 'connect',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
    prependOnceListener(event: 'request', listener: http.RequestListener): this
    prependOnceListener(
      event: 'upgrade',
      listener: (req: http.IncomingMessage, socket: Duplex, head: Buffer) => void
    ): this
  }
  function createServer(requestListener?: http.RequestListener): Server
  function createServer(options: ServerOptions, requestListener?: http.RequestListener): Server
  function request(
    options: RequestOptions | string | URL,
    callback?: (res: http.IncomingMessage) => void
  ): http.ClientRequest
  function request(
    url: string | URL,
    options: RequestOptions,
    callback?: (res: http.IncomingMessage) => void
  ): http.ClientRequest
  function get(
    options: RequestOptions | string | URL,
    callback?: (res: http.IncomingMessage) => void
  ): http.ClientRequest
  function get(
    url: string | URL,
    options: RequestOptions,
    callback?: (res: http.IncomingMessage) => void
  ): http.ClientRequest
  let globalAgent: Agent
}
declare module 'node:https' {
  export * from 'https'
}
declare module 'inspector' {
  import EventEmitter = require('node:events')
  interface InspectorNotification<T> {
    method: string
    params: T
  }
  namespace Schema {
    interface Domain {
      name: string
      version: string
    }
    interface GetDomainsReturnType {
      domains: Domain[]
    }
  }
  namespace Runtime {
    type ScriptId = string
    type RemoteObjectId = string
    type UnserializableValue = string
    interface RemoteObject {
      type: string
      subtype?: string | undefined
      className?: string | undefined
      value?: any
      unserializableValue?: UnserializableValue | undefined
      description?: string | undefined
      objectId?: RemoteObjectId | undefined
      preview?: ObjectPreview | undefined
      customPreview?: CustomPreview | undefined
    }
    interface CustomPreview {
      header: string
      hasBody: boolean
      formatterObjectId: RemoteObjectId
      bindRemoteObjectFunctionId: RemoteObjectId
      configObjectId?: RemoteObjectId | undefined
    }
    interface ObjectPreview {
      type: string
      subtype?: string | undefined
      description?: string | undefined
      overflow: boolean
      properties: PropertyPreview[]
      entries?: EntryPreview[] | undefined
    }
    interface PropertyPreview {
      name: string
      type: string
      value?: string | undefined
      valuePreview?: ObjectPreview | undefined
      subtype?: string | undefined
    }
    interface EntryPreview {
      key?: ObjectPreview | undefined
      value: ObjectPreview
    }
    interface PropertyDescriptor {
      name: string
      value?: RemoteObject | undefined
      writable?: boolean | undefined
      get?: RemoteObject | undefined
      set?: RemoteObject | undefined
      configurable: boolean
      enumerable: boolean
      wasThrown?: boolean | undefined
      isOwn?: boolean | undefined
      symbol?: RemoteObject | undefined
    }
    interface InternalPropertyDescriptor {
      name: string
      value?: RemoteObject | undefined
    }
    interface CallArgument {
      value?: any
      unserializableValue?: UnserializableValue | undefined
      objectId?: RemoteObjectId | undefined
    }
    type ExecutionContextId = number
    interface ExecutionContextDescription {
      id: ExecutionContextId
      origin: string
      name: string
      auxData?: {} | undefined
    }
    interface ExceptionDetails {
      exceptionId: number
      text: string
      lineNumber: number
      columnNumber: number
      scriptId?: ScriptId | undefined
      url?: string | undefined
      stackTrace?: StackTrace | undefined
      exception?: RemoteObject | undefined
      executionContextId?: ExecutionContextId | undefined
    }
    type Timestamp = number
    interface CallFrame {
      functionName: string
      scriptId: ScriptId
      url: string
      lineNumber: number
      columnNumber: number
    }
    interface StackTrace {
      description?: string | undefined
      callFrames: CallFrame[]
      parent?: StackTrace | undefined
      parentId?: StackTraceId | undefined
    }
    type UniqueDebuggerId = string
    interface StackTraceId {
      id: string
      debuggerId?: UniqueDebuggerId | undefined
    }
    interface EvaluateParameterType {
      expression: string
      objectGroup?: string | undefined
      includeCommandLineAPI?: boolean | undefined
      silent?: boolean | undefined
      contextId?: ExecutionContextId | undefined
      returnByValue?: boolean | undefined
      generatePreview?: boolean | undefined
      userGesture?: boolean | undefined
      awaitPromise?: boolean | undefined
    }
    interface AwaitPromiseParameterType {
      promiseObjectId: RemoteObjectId
      returnByValue?: boolean | undefined
      generatePreview?: boolean | undefined
    }
    interface CallFunctionOnParameterType {
      functionDeclaration: string
      objectId?: RemoteObjectId | undefined
      arguments?: CallArgument[] | undefined
      silent?: boolean | undefined
      returnByValue?: boolean | undefined
      generatePreview?: boolean | undefined
      userGesture?: boolean | undefined
      awaitPromise?: boolean | undefined
      executionContextId?: ExecutionContextId | undefined
      objectGroup?: string | undefined
    }
    interface GetPropertiesParameterType {
      objectId: RemoteObjectId
      ownProperties?: boolean | undefined
      accessorPropertiesOnly?: boolean | undefined
      generatePreview?: boolean | undefined
    }
    interface ReleaseObjectParameterType {
      objectId: RemoteObjectId
    }
    interface ReleaseObjectGroupParameterType {
      objectGroup: string
    }
    interface SetCustomObjectFormatterEnabledParameterType {
      enabled: boolean
    }
    interface CompileScriptParameterType {
      expression: string
      sourceURL: string
      persistScript: boolean
      executionContextId?: ExecutionContextId | undefined
    }
    interface RunScriptParameterType {
      scriptId: ScriptId
      executionContextId?: ExecutionContextId | undefined
      objectGroup?: string | undefined
      silent?: boolean | undefined
      includeCommandLineAPI?: boolean | undefined
      returnByValue?: boolean | undefined
      generatePreview?: boolean | undefined
      awaitPromise?: boolean | undefined
    }
    interface QueryObjectsParameterType {
      prototypeObjectId: RemoteObjectId
    }
    interface GlobalLexicalScopeNamesParameterType {
      executionContextId?: ExecutionContextId | undefined
    }
    interface EvaluateReturnType {
      result: RemoteObject
      exceptionDetails?: ExceptionDetails | undefined
    }
    interface AwaitPromiseReturnType {
      result: RemoteObject
      exceptionDetails?: ExceptionDetails | undefined
    }
    interface CallFunctionOnReturnType {
      result: RemoteObject
      exceptionDetails?: ExceptionDetails | undefined
    }
    interface GetPropertiesReturnType {
      result: PropertyDescriptor[]
      internalProperties?: InternalPropertyDescriptor[] | undefined
      exceptionDetails?: ExceptionDetails | undefined
    }
    interface CompileScriptReturnType {
      scriptId?: ScriptId | undefined
      exceptionDetails?: ExceptionDetails | undefined
    }
    interface RunScriptReturnType {
      result: RemoteObject
      exceptionDetails?: ExceptionDetails | undefined
    }
    interface QueryObjectsReturnType {
      objects: RemoteObject
    }
    interface GlobalLexicalScopeNamesReturnType {
      names: string[]
    }
    interface ExecutionContextCreatedEventDataType {
      context: ExecutionContextDescription
    }
    interface ExecutionContextDestroyedEventDataType {
      executionContextId: ExecutionContextId
    }
    interface ExceptionThrownEventDataType {
      timestamp: Timestamp
      exceptionDetails: ExceptionDetails
    }
    interface ExceptionRevokedEventDataType {
      reason: string
      exceptionId: number
    }
    interface ConsoleAPICalledEventDataType {
      type: string
      args: RemoteObject[]
      executionContextId: ExecutionContextId
      timestamp: Timestamp
      stackTrace?: StackTrace | undefined
      context?: string | undefined
    }
    interface InspectRequestedEventDataType {
      object: RemoteObject
      hints: {}
    }
  }
  namespace Debugger {
    type BreakpointId = string
    type CallFrameId = string
    interface Location {
      scriptId: Runtime.ScriptId
      lineNumber: number
      columnNumber?: number | undefined
    }
    interface ScriptPosition {
      lineNumber: number
      columnNumber: number
    }
    interface CallFrame {
      callFrameId: CallFrameId
      functionName: string
      functionLocation?: Location | undefined
      location: Location
      url: string
      scopeChain: Scope[]
      this: Runtime.RemoteObject
      returnValue?: Runtime.RemoteObject | undefined
    }
    interface Scope {
      type: string
      object: Runtime.RemoteObject
      name?: string | undefined
      startLocation?: Location | undefined
      endLocation?: Location | undefined
    }
    interface SearchMatch {
      lineNumber: number
      lineContent: string
    }
    interface BreakLocation {
      scriptId: Runtime.ScriptId
      lineNumber: number
      columnNumber?: number | undefined
      type?: string | undefined
    }
    interface SetBreakpointsActiveParameterType {
      active: boolean
    }
    interface SetSkipAllPausesParameterType {
      skip: boolean
    }
    interface SetBreakpointByUrlParameterType {
      lineNumber: number
      url?: string | undefined
      urlRegex?: string | undefined
      scriptHash?: string | undefined
      columnNumber?: number | undefined
      condition?: string | undefined
    }
    interface SetBreakpointParameterType {
      location: Location
      condition?: string | undefined
    }
    interface RemoveBreakpointParameterType {
      breakpointId: BreakpointId
    }
    interface GetPossibleBreakpointsParameterType {
      start: Location
      end?: Location | undefined
      restrictToFunction?: boolean | undefined
    }
    interface ContinueToLocationParameterType {
      location: Location
      targetCallFrames?: string | undefined
    }
    interface PauseOnAsyncCallParameterType {
      parentStackTraceId: Runtime.StackTraceId
    }
    interface StepIntoParameterType {
      breakOnAsyncCall?: boolean | undefined
    }
    interface GetStackTraceParameterType {
      stackTraceId: Runtime.StackTraceId
    }
    interface SearchInContentParameterType {
      scriptId: Runtime.ScriptId
      query: string
      caseSensitive?: boolean | undefined
      isRegex?: boolean | undefined
    }
    interface SetScriptSourceParameterType {
      scriptId: Runtime.ScriptId
      scriptSource: string
      dryRun?: boolean | undefined
    }
    interface RestartFrameParameterType {
      callFrameId: CallFrameId
    }
    interface GetScriptSourceParameterType {
      scriptId: Runtime.ScriptId
    }
    interface SetPauseOnExceptionsParameterType {
      state: string
    }
    interface EvaluateOnCallFrameParameterType {
      callFrameId: CallFrameId
      expression: string
      objectGroup?: string | undefined
      includeCommandLineAPI?: boolean | undefined
      silent?: boolean | undefined
      returnByValue?: boolean | undefined
      generatePreview?: boolean | undefined
      throwOnSideEffect?: boolean | undefined
    }
    interface SetVariableValueParameterType {
      scopeNumber: number
      variableName: string
      newValue: Runtime.CallArgument
      callFrameId: CallFrameId
    }
    interface SetReturnValueParameterType {
      newValue: Runtime.CallArgument
    }
    interface SetAsyncCallStackDepthParameterType {
      maxDepth: number
    }
    interface SetBlackboxPatternsParameterType {
      patterns: string[]
    }
    interface SetBlackboxedRangesParameterType {
      scriptId: Runtime.ScriptId
      positions: ScriptPosition[]
    }
    interface EnableReturnType {
      debuggerId: Runtime.UniqueDebuggerId
    }
    interface SetBreakpointByUrlReturnType {
      breakpointId: BreakpointId
      locations: Location[]
    }
    interface SetBreakpointReturnType {
      breakpointId: BreakpointId
      actualLocation: Location
    }
    interface GetPossibleBreakpointsReturnType {
      locations: BreakLocation[]
    }
    interface GetStackTraceReturnType {
      stackTrace: Runtime.StackTrace
    }
    interface SearchInContentReturnType {
      result: SearchMatch[]
    }
    interface SetScriptSourceReturnType {
      callFrames?: CallFrame[] | undefined
      stackChanged?: boolean | undefined
      asyncStackTrace?: Runtime.StackTrace | undefined
      asyncStackTraceId?: Runtime.StackTraceId | undefined
      exceptionDetails?: Runtime.ExceptionDetails | undefined
    }
    interface RestartFrameReturnType {
      callFrames: CallFrame[]
      asyncStackTrace?: Runtime.StackTrace | undefined
      asyncStackTraceId?: Runtime.StackTraceId | undefined
    }
    interface GetScriptSourceReturnType {
      scriptSource: string
    }
    interface EvaluateOnCallFrameReturnType {
      result: Runtime.RemoteObject
      exceptionDetails?: Runtime.ExceptionDetails | undefined
    }
    interface ScriptParsedEventDataType {
      scriptId: Runtime.ScriptId
      url: string
      startLine: number
      startColumn: number
      endLine: number
      endColumn: number
      executionContextId: Runtime.ExecutionContextId
      hash: string
      executionContextAuxData?: {} | undefined
      isLiveEdit?: boolean | undefined
      sourceMapURL?: string | undefined
      hasSourceURL?: boolean | undefined
      isModule?: boolean | undefined
      length?: number | undefined
      stackTrace?: Runtime.StackTrace | undefined
    }
    interface ScriptFailedToParseEventDataType {
      scriptId: Runtime.ScriptId
      url: string
      startLine: number
      startColumn: number
      endLine: number
      endColumn: number
      executionContextId: Runtime.ExecutionContextId
      hash: string
      executionContextAuxData?: {} | undefined
      sourceMapURL?: string | undefined
      hasSourceURL?: boolean | undefined
      isModule?: boolean | undefined
      length?: number | undefined
      stackTrace?: Runtime.StackTrace | undefined
    }
    interface BreakpointResolvedEventDataType {
      breakpointId: BreakpointId
      location: Location
    }
    interface PausedEventDataType {
      callFrames: CallFrame[]
      reason: string
      data?: {} | undefined
      hitBreakpoints?: string[] | undefined
      asyncStackTrace?: Runtime.StackTrace | undefined
      asyncStackTraceId?: Runtime.StackTraceId | undefined
      asyncCallStackTraceId?: Runtime.StackTraceId | undefined
    }
  }
  namespace Console {
    interface ConsoleMessage {
      source: string
      level: string
      text: string
      url?: string | undefined
      line?: number | undefined
      column?: number | undefined
    }
    interface MessageAddedEventDataType {
      message: ConsoleMessage
    }
  }
  namespace Profiler {
    interface ProfileNode {
      id: number
      callFrame: Runtime.CallFrame
      hitCount?: number | undefined
      children?: number[] | undefined
      deoptReason?: string | undefined
      positionTicks?: PositionTickInfo[] | undefined
    }
    interface Profile {
      nodes: ProfileNode[]
      startTime: number
      endTime: number
      samples?: number[] | undefined
      timeDeltas?: number[] | undefined
    }
    interface PositionTickInfo {
      line: number
      ticks: number
    }
    interface CoverageRange {
      startOffset: number
      endOffset: number
      count: number
    }
    interface FunctionCoverage {
      functionName: string
      ranges: CoverageRange[]
      isBlockCoverage: boolean
    }
    interface ScriptCoverage {
      scriptId: Runtime.ScriptId
      url: string
      functions: FunctionCoverage[]
    }
    interface TypeObject {
      name: string
    }
    interface TypeProfileEntry {
      offset: number
      types: TypeObject[]
    }
    interface ScriptTypeProfile {
      scriptId: Runtime.ScriptId
      url: string
      entries: TypeProfileEntry[]
    }
    interface SetSamplingIntervalParameterType {
      interval: number
    }
    interface StartPreciseCoverageParameterType {
      callCount?: boolean | undefined
      detailed?: boolean | undefined
    }
    interface StopReturnType {
      profile: Profile
    }
    interface TakePreciseCoverageReturnType {
      result: ScriptCoverage[]
    }
    interface GetBestEffortCoverageReturnType {
      result: ScriptCoverage[]
    }
    interface TakeTypeProfileReturnType {
      result: ScriptTypeProfile[]
    }
    interface ConsoleProfileStartedEventDataType {
      id: string
      location: Debugger.Location
      title?: string | undefined
    }
    interface ConsoleProfileFinishedEventDataType {
      id: string
      location: Debugger.Location
      profile: Profile
      title?: string | undefined
    }
  }
  namespace HeapProfiler {
    type HeapSnapshotObjectId = string
    interface SamplingHeapProfileNode {
      callFrame: Runtime.CallFrame
      selfSize: number
      children: SamplingHeapProfileNode[]
    }
    interface SamplingHeapProfile {
      head: SamplingHeapProfileNode
    }
    interface StartTrackingHeapObjectsParameterType {
      trackAllocations?: boolean | undefined
    }
    interface StopTrackingHeapObjectsParameterType {
      reportProgress?: boolean | undefined
    }
    interface TakeHeapSnapshotParameterType {
      reportProgress?: boolean | undefined
    }
    interface GetObjectByHeapObjectIdParameterType {
      objectId: HeapSnapshotObjectId
      objectGroup?: string | undefined
    }
    interface AddInspectedHeapObjectParameterType {
      heapObjectId: HeapSnapshotObjectId
    }
    interface GetHeapObjectIdParameterType {
      objectId: Runtime.RemoteObjectId
    }
    interface StartSamplingParameterType {
      samplingInterval?: number | undefined
    }
    interface GetObjectByHeapObjectIdReturnType {
      result: Runtime.RemoteObject
    }
    interface GetHeapObjectIdReturnType {
      heapSnapshotObjectId: HeapSnapshotObjectId
    }
    interface StopSamplingReturnType {
      profile: SamplingHeapProfile
    }
    interface GetSamplingProfileReturnType {
      profile: SamplingHeapProfile
    }
    interface AddHeapSnapshotChunkEventDataType {
      chunk: string
    }
    interface ReportHeapSnapshotProgressEventDataType {
      done: number
      total: number
      finished?: boolean | undefined
    }
    interface LastSeenObjectIdEventDataType {
      lastSeenObjectId: number
      timestamp: number
    }
    interface HeapStatsUpdateEventDataType {
      statsUpdate: number[]
    }
  }
  namespace NodeTracing {
    interface TraceConfig {
      recordMode?: string
      includedCategories: string[]
    }
    interface StartParameterType {
      traceConfig: TraceConfig
    }
    interface GetCategoriesReturnType {
      categories: string[]
    }
    interface DataCollectedEventDataType {
      value: Array<{}>
    }
  }
  namespace NodeWorker {
    type WorkerID = string
    type SessionID = string
    interface WorkerInfo {
      workerId: WorkerID
      type: string
      title: string
      url: string
    }
    interface SendMessageToWorkerParameterType {
      message: string
      sessionId: SessionID
    }
    interface EnableParameterType {
      waitForDebuggerOnStart: boolean
    }
    interface DetachParameterType {
      sessionId: SessionID
    }
    interface AttachedToWorkerEventDataType {
      sessionId: SessionID
      workerInfo: WorkerInfo
      waitingForDebugger: boolean
    }
    interface DetachedFromWorkerEventDataType {
      sessionId: SessionID
    }
    interface ReceivedMessageFromWorkerEventDataType {
      sessionId: SessionID
      message: string
    }
  }
  namespace NodeRuntime {
    interface NotifyWhenWaitingForDisconnectParameterType {
      enabled: boolean
    }
  }
  class Session extends EventEmitter {
    constructor()
    connect(): void
    connectToMainThread(): void
    disconnect(): void
    post(method: string, params?: {}, callback?: (err: Error | null, params?: {}) => void): void
    post(method: string, callback?: (err: Error | null, params?: {}) => void): void
    post(
      method: 'Schema.getDomains',
      callback?: (err: Error | null, params: Schema.GetDomainsReturnType) => void
    ): void
    post(
      method: 'Runtime.evaluate',
      params?: Runtime.EvaluateParameterType,
      callback?: (err: Error | null, params: Runtime.EvaluateReturnType) => void
    ): void
    post(
      method: 'Runtime.evaluate',
      callback?: (err: Error | null, params: Runtime.EvaluateReturnType) => void
    ): void
    post(
      method: 'Runtime.awaitPromise',
      params?: Runtime.AwaitPromiseParameterType,
      callback?: (err: Error | null, params: Runtime.AwaitPromiseReturnType) => void
    ): void
    post(
      method: 'Runtime.awaitPromise',
      callback?: (err: Error | null, params: Runtime.AwaitPromiseReturnType) => void
    ): void
    post(
      method: 'Runtime.callFunctionOn',
      params?: Runtime.CallFunctionOnParameterType,
      callback?: (err: Error | null, params: Runtime.CallFunctionOnReturnType) => void
    ): void
    post(
      method: 'Runtime.callFunctionOn',
      callback?: (err: Error | null, params: Runtime.CallFunctionOnReturnType) => void
    ): void
    post(
      method: 'Runtime.getProperties',
      params?: Runtime.GetPropertiesParameterType,
      callback?: (err: Error | null, params: Runtime.GetPropertiesReturnType) => void
    ): void
    post(
      method: 'Runtime.getProperties',
      callback?: (err: Error | null, params: Runtime.GetPropertiesReturnType) => void
    ): void
    post(
      method: 'Runtime.releaseObject',
      params?: Runtime.ReleaseObjectParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Runtime.releaseObject', callback?: (err: Error | null) => void): void
    post(
      method: 'Runtime.releaseObjectGroup',
      params?: Runtime.ReleaseObjectGroupParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Runtime.releaseObjectGroup', callback?: (err: Error | null) => void): void
    post(method: 'Runtime.runIfWaitingForDebugger', callback?: (err: Error | null) => void): void
    post(method: 'Runtime.enable', callback?: (err: Error | null) => void): void
    post(method: 'Runtime.disable', callback?: (err: Error | null) => void): void
    post(method: 'Runtime.discardConsoleEntries', callback?: (err: Error | null) => void): void
    post(
      method: 'Runtime.setCustomObjectFormatterEnabled',
      params?: Runtime.SetCustomObjectFormatterEnabledParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'Runtime.setCustomObjectFormatterEnabled',
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'Runtime.compileScript',
      params?: Runtime.CompileScriptParameterType,
      callback?: (err: Error | null, params: Runtime.CompileScriptReturnType) => void
    ): void
    post(
      method: 'Runtime.compileScript',
      callback?: (err: Error | null, params: Runtime.CompileScriptReturnType) => void
    ): void
    post(
      method: 'Runtime.runScript',
      params?: Runtime.RunScriptParameterType,
      callback?: (err: Error | null, params: Runtime.RunScriptReturnType) => void
    ): void
    post(
      method: 'Runtime.runScript',
      callback?: (err: Error | null, params: Runtime.RunScriptReturnType) => void
    ): void
    post(
      method: 'Runtime.queryObjects',
      params?: Runtime.QueryObjectsParameterType,
      callback?: (err: Error | null, params: Runtime.QueryObjectsReturnType) => void
    ): void
    post(
      method: 'Runtime.queryObjects',
      callback?: (err: Error | null, params: Runtime.QueryObjectsReturnType) => void
    ): void
    post(
      method: 'Runtime.globalLexicalScopeNames',
      params?: Runtime.GlobalLexicalScopeNamesParameterType,
      callback?: (err: Error | null, params: Runtime.GlobalLexicalScopeNamesReturnType) => void
    ): void
    post(
      method: 'Runtime.globalLexicalScopeNames',
      callback?: (err: Error | null, params: Runtime.GlobalLexicalScopeNamesReturnType) => void
    ): void
    post(
      method: 'Debugger.enable',
      callback?: (err: Error | null, params: Debugger.EnableReturnType) => void
    ): void
    post(method: 'Debugger.disable', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.setBreakpointsActive',
      params?: Debugger.SetBreakpointsActiveParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setBreakpointsActive', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.setSkipAllPauses',
      params?: Debugger.SetSkipAllPausesParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setSkipAllPauses', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.setBreakpointByUrl',
      params?: Debugger.SetBreakpointByUrlParameterType,
      callback?: (err: Error | null, params: Debugger.SetBreakpointByUrlReturnType) => void
    ): void
    post(
      method: 'Debugger.setBreakpointByUrl',
      callback?: (err: Error | null, params: Debugger.SetBreakpointByUrlReturnType) => void
    ): void
    post(
      method: 'Debugger.setBreakpoint',
      params?: Debugger.SetBreakpointParameterType,
      callback?: (err: Error | null, params: Debugger.SetBreakpointReturnType) => void
    ): void
    post(
      method: 'Debugger.setBreakpoint',
      callback?: (err: Error | null, params: Debugger.SetBreakpointReturnType) => void
    ): void
    post(
      method: 'Debugger.removeBreakpoint',
      params?: Debugger.RemoveBreakpointParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.removeBreakpoint', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.getPossibleBreakpoints',
      params?: Debugger.GetPossibleBreakpointsParameterType,
      callback?: (err: Error | null, params: Debugger.GetPossibleBreakpointsReturnType) => void
    ): void
    post(
      method: 'Debugger.getPossibleBreakpoints',
      callback?: (err: Error | null, params: Debugger.GetPossibleBreakpointsReturnType) => void
    ): void
    post(
      method: 'Debugger.continueToLocation',
      params?: Debugger.ContinueToLocationParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.continueToLocation', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.pauseOnAsyncCall',
      params?: Debugger.PauseOnAsyncCallParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.pauseOnAsyncCall', callback?: (err: Error | null) => void): void
    post(method: 'Debugger.stepOver', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.stepInto',
      params?: Debugger.StepIntoParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.stepInto', callback?: (err: Error | null) => void): void
    post(method: 'Debugger.stepOut', callback?: (err: Error | null) => void): void
    post(method: 'Debugger.pause', callback?: (err: Error | null) => void): void
    post(method: 'Debugger.scheduleStepIntoAsync', callback?: (err: Error | null) => void): void
    post(method: 'Debugger.resume', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.getStackTrace',
      params?: Debugger.GetStackTraceParameterType,
      callback?: (err: Error | null, params: Debugger.GetStackTraceReturnType) => void
    ): void
    post(
      method: 'Debugger.getStackTrace',
      callback?: (err: Error | null, params: Debugger.GetStackTraceReturnType) => void
    ): void
    post(
      method: 'Debugger.searchInContent',
      params?: Debugger.SearchInContentParameterType,
      callback?: (err: Error | null, params: Debugger.SearchInContentReturnType) => void
    ): void
    post(
      method: 'Debugger.searchInContent',
      callback?: (err: Error | null, params: Debugger.SearchInContentReturnType) => void
    ): void
    post(
      method: 'Debugger.setScriptSource',
      params?: Debugger.SetScriptSourceParameterType,
      callback?: (err: Error | null, params: Debugger.SetScriptSourceReturnType) => void
    ): void
    post(
      method: 'Debugger.setScriptSource',
      callback?: (err: Error | null, params: Debugger.SetScriptSourceReturnType) => void
    ): void
    post(
      method: 'Debugger.restartFrame',
      params?: Debugger.RestartFrameParameterType,
      callback?: (err: Error | null, params: Debugger.RestartFrameReturnType) => void
    ): void
    post(
      method: 'Debugger.restartFrame',
      callback?: (err: Error | null, params: Debugger.RestartFrameReturnType) => void
    ): void
    post(
      method: 'Debugger.getScriptSource',
      params?: Debugger.GetScriptSourceParameterType,
      callback?: (err: Error | null, params: Debugger.GetScriptSourceReturnType) => void
    ): void
    post(
      method: 'Debugger.getScriptSource',
      callback?: (err: Error | null, params: Debugger.GetScriptSourceReturnType) => void
    ): void
    post(
      method: 'Debugger.setPauseOnExceptions',
      params?: Debugger.SetPauseOnExceptionsParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setPauseOnExceptions', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.evaluateOnCallFrame',
      params?: Debugger.EvaluateOnCallFrameParameterType,
      callback?: (err: Error | null, params: Debugger.EvaluateOnCallFrameReturnType) => void
    ): void
    post(
      method: 'Debugger.evaluateOnCallFrame',
      callback?: (err: Error | null, params: Debugger.EvaluateOnCallFrameReturnType) => void
    ): void
    post(
      method: 'Debugger.setVariableValue',
      params?: Debugger.SetVariableValueParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setVariableValue', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.setReturnValue',
      params?: Debugger.SetReturnValueParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setReturnValue', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.setAsyncCallStackDepth',
      params?: Debugger.SetAsyncCallStackDepthParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setAsyncCallStackDepth', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.setBlackboxPatterns',
      params?: Debugger.SetBlackboxPatternsParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setBlackboxPatterns', callback?: (err: Error | null) => void): void
    post(
      method: 'Debugger.setBlackboxedRanges',
      params?: Debugger.SetBlackboxedRangesParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Debugger.setBlackboxedRanges', callback?: (err: Error | null) => void): void
    post(method: 'Console.enable', callback?: (err: Error | null) => void): void
    post(method: 'Console.disable', callback?: (err: Error | null) => void): void
    post(method: 'Console.clearMessages', callback?: (err: Error | null) => void): void
    post(method: 'Profiler.enable', callback?: (err: Error | null) => void): void
    post(method: 'Profiler.disable', callback?: (err: Error | null) => void): void
    post(
      method: 'Profiler.setSamplingInterval',
      params?: Profiler.SetSamplingIntervalParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Profiler.setSamplingInterval', callback?: (err: Error | null) => void): void
    post(method: 'Profiler.start', callback?: (err: Error | null) => void): void
    post(
      method: 'Profiler.stop',
      callback?: (err: Error | null, params: Profiler.StopReturnType) => void
    ): void
    post(
      method: 'Profiler.startPreciseCoverage',
      params?: Profiler.StartPreciseCoverageParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'Profiler.startPreciseCoverage', callback?: (err: Error | null) => void): void
    post(method: 'Profiler.stopPreciseCoverage', callback?: (err: Error | null) => void): void
    post(
      method: 'Profiler.takePreciseCoverage',
      callback?: (err: Error | null, params: Profiler.TakePreciseCoverageReturnType) => void
    ): void
    post(
      method: 'Profiler.getBestEffortCoverage',
      callback?: (err: Error | null, params: Profiler.GetBestEffortCoverageReturnType) => void
    ): void
    post(method: 'Profiler.startTypeProfile', callback?: (err: Error | null) => void): void
    post(method: 'Profiler.stopTypeProfile', callback?: (err: Error | null) => void): void
    post(
      method: 'Profiler.takeTypeProfile',
      callback?: (err: Error | null, params: Profiler.TakeTypeProfileReturnType) => void
    ): void
    post(method: 'HeapProfiler.enable', callback?: (err: Error | null) => void): void
    post(method: 'HeapProfiler.disable', callback?: (err: Error | null) => void): void
    post(
      method: 'HeapProfiler.startTrackingHeapObjects',
      params?: HeapProfiler.StartTrackingHeapObjectsParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'HeapProfiler.startTrackingHeapObjects',
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'HeapProfiler.stopTrackingHeapObjects',
      params?: HeapProfiler.StopTrackingHeapObjectsParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'HeapProfiler.stopTrackingHeapObjects',
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'HeapProfiler.takeHeapSnapshot',
      params?: HeapProfiler.TakeHeapSnapshotParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'HeapProfiler.takeHeapSnapshot', callback?: (err: Error | null) => void): void
    post(method: 'HeapProfiler.collectGarbage', callback?: (err: Error | null) => void): void
    post(
      method: 'HeapProfiler.getObjectByHeapObjectId',
      params?: HeapProfiler.GetObjectByHeapObjectIdParameterType,
      callback?: (err: Error | null, params: HeapProfiler.GetObjectByHeapObjectIdReturnType) => void
    ): void
    post(
      method: 'HeapProfiler.getObjectByHeapObjectId',
      callback?: (err: Error | null, params: HeapProfiler.GetObjectByHeapObjectIdReturnType) => void
    ): void
    post(
      method: 'HeapProfiler.addInspectedHeapObject',
      params?: HeapProfiler.AddInspectedHeapObjectParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'HeapProfiler.addInspectedHeapObject',
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'HeapProfiler.getHeapObjectId',
      params?: HeapProfiler.GetHeapObjectIdParameterType,
      callback?: (err: Error | null, params: HeapProfiler.GetHeapObjectIdReturnType) => void
    ): void
    post(
      method: 'HeapProfiler.getHeapObjectId',
      callback?: (err: Error | null, params: HeapProfiler.GetHeapObjectIdReturnType) => void
    ): void
    post(
      method: 'HeapProfiler.startSampling',
      params?: HeapProfiler.StartSamplingParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'HeapProfiler.startSampling', callback?: (err: Error | null) => void): void
    post(
      method: 'HeapProfiler.stopSampling',
      callback?: (err: Error | null, params: HeapProfiler.StopSamplingReturnType) => void
    ): void
    post(
      method: 'HeapProfiler.getSamplingProfile',
      callback?: (err: Error | null, params: HeapProfiler.GetSamplingProfileReturnType) => void
    ): void
    post(
      method: 'NodeTracing.getCategories',
      callback?: (err: Error | null, params: NodeTracing.GetCategoriesReturnType) => void
    ): void
    post(
      method: 'NodeTracing.start',
      params?: NodeTracing.StartParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'NodeTracing.start', callback?: (err: Error | null) => void): void
    post(method: 'NodeTracing.stop', callback?: (err: Error | null) => void): void
    post(
      method: 'NodeWorker.sendMessageToWorker',
      params?: NodeWorker.SendMessageToWorkerParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'NodeWorker.sendMessageToWorker', callback?: (err: Error | null) => void): void
    post(
      method: 'NodeWorker.enable',
      params?: NodeWorker.EnableParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'NodeWorker.enable', callback?: (err: Error | null) => void): void
    post(method: 'NodeWorker.disable', callback?: (err: Error | null) => void): void
    post(
      method: 'NodeWorker.detach',
      params?: NodeWorker.DetachParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(method: 'NodeWorker.detach', callback?: (err: Error | null) => void): void
    post(
      method: 'NodeRuntime.notifyWhenWaitingForDisconnect',
      params?: NodeRuntime.NotifyWhenWaitingForDisconnectParameterType,
      callback?: (err: Error | null) => void
    ): void
    post(
      method: 'NodeRuntime.notifyWhenWaitingForDisconnect',
      callback?: (err: Error | null) => void
    ): void
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(
      event: 'inspectorNotification',
      listener: (message: InspectorNotification<{}>) => void
    ): this
    addListener(
      event: 'Runtime.executionContextCreated',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>
      ) => void
    ): this
    addListener(
      event: 'Runtime.executionContextDestroyed',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>
      ) => void
    ): this
    addListener(event: 'Runtime.executionContextsCleared', listener: () => void): this
    addListener(
      event: 'Runtime.exceptionThrown',
      listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void
    ): this
    addListener(
      event: 'Runtime.exceptionRevoked',
      listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void
    ): this
    addListener(
      event: 'Runtime.consoleAPICalled',
      listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void
    ): this
    addListener(
      event: 'Runtime.inspectRequested',
      listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void
    ): this
    addListener(
      event: 'Debugger.scriptParsed',
      listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void
    ): this
    addListener(
      event: 'Debugger.scriptFailedToParse',
      listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void
    ): this
    addListener(
      event: 'Debugger.breakpointResolved',
      listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void
    ): this
    addListener(
      event: 'Debugger.paused',
      listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void
    ): this
    addListener(event: 'Debugger.resumed', listener: () => void): this
    addListener(
      event: 'Console.messageAdded',
      listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void
    ): this
    addListener(
      event: 'Profiler.consoleProfileStarted',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>
      ) => void
    ): this
    addListener(
      event: 'Profiler.consoleProfileFinished',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>
      ) => void
    ): this
    addListener(
      event: 'HeapProfiler.addHeapSnapshotChunk',
      listener: (
        message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>
      ) => void
    ): this
    addListener(event: 'HeapProfiler.resetProfiles', listener: () => void): this
    addListener(
      event: 'HeapProfiler.reportHeapSnapshotProgress',
      listener: (
        message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>
      ) => void
    ): this
    addListener(
      event: 'HeapProfiler.lastSeenObjectId',
      listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void
    ): this
    addListener(
      event: 'HeapProfiler.heapStatsUpdate',
      listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void
    ): this
    addListener(
      event: 'NodeTracing.dataCollected',
      listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void
    ): this
    addListener(event: 'NodeTracing.tracingComplete', listener: () => void): this
    addListener(
      event: 'NodeWorker.attachedToWorker',
      listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void
    ): this
    addListener(
      event: 'NodeWorker.detachedFromWorker',
      listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void
    ): this
    addListener(
      event: 'NodeWorker.receivedMessageFromWorker',
      listener: (
        message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>
      ) => void
    ): this
    addListener(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'inspectorNotification', message: InspectorNotification<{}>): boolean
    emit(
      event: 'Runtime.executionContextCreated',
      message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>
    ): boolean
    emit(
      event: 'Runtime.executionContextDestroyed',
      message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>
    ): boolean
    emit(event: 'Runtime.executionContextsCleared'): boolean
    emit(
      event: 'Runtime.exceptionThrown',
      message: InspectorNotification<Runtime.ExceptionThrownEventDataType>
    ): boolean
    emit(
      event: 'Runtime.exceptionRevoked',
      message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>
    ): boolean
    emit(
      event: 'Runtime.consoleAPICalled',
      message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>
    ): boolean
    emit(
      event: 'Runtime.inspectRequested',
      message: InspectorNotification<Runtime.InspectRequestedEventDataType>
    ): boolean
    emit(
      event: 'Debugger.scriptParsed',
      message: InspectorNotification<Debugger.ScriptParsedEventDataType>
    ): boolean
    emit(
      event: 'Debugger.scriptFailedToParse',
      message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>
    ): boolean
    emit(
      event: 'Debugger.breakpointResolved',
      message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>
    ): boolean
    emit(
      event: 'Debugger.paused',
      message: InspectorNotification<Debugger.PausedEventDataType>
    ): boolean
    emit(event: 'Debugger.resumed'): boolean
    emit(
      event: 'Console.messageAdded',
      message: InspectorNotification<Console.MessageAddedEventDataType>
    ): boolean
    emit(
      event: 'Profiler.consoleProfileStarted',
      message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>
    ): boolean
    emit(
      event: 'Profiler.consoleProfileFinished',
      message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>
    ): boolean
    emit(
      event: 'HeapProfiler.addHeapSnapshotChunk',
      message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>
    ): boolean
    emit(event: 'HeapProfiler.resetProfiles'): boolean
    emit(
      event: 'HeapProfiler.reportHeapSnapshotProgress',
      message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>
    ): boolean
    emit(
      event: 'HeapProfiler.lastSeenObjectId',
      message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>
    ): boolean
    emit(
      event: 'HeapProfiler.heapStatsUpdate',
      message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>
    ): boolean
    emit(
      event: 'NodeTracing.dataCollected',
      message: InspectorNotification<NodeTracing.DataCollectedEventDataType>
    ): boolean
    emit(event: 'NodeTracing.tracingComplete'): boolean
    emit(
      event: 'NodeWorker.attachedToWorker',
      message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>
    ): boolean
    emit(
      event: 'NodeWorker.detachedFromWorker',
      message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>
    ): boolean
    emit(
      event: 'NodeWorker.receivedMessageFromWorker',
      message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>
    ): boolean
    emit(event: 'NodeRuntime.waitingForDisconnect'): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'inspectorNotification', listener: (message: InspectorNotification<{}>) => void): this
    on(
      event: 'Runtime.executionContextCreated',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>
      ) => void
    ): this
    on(
      event: 'Runtime.executionContextDestroyed',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>
      ) => void
    ): this
    on(event: 'Runtime.executionContextsCleared', listener: () => void): this
    on(
      event: 'Runtime.exceptionThrown',
      listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void
    ): this
    on(
      event: 'Runtime.exceptionRevoked',
      listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void
    ): this
    on(
      event: 'Runtime.consoleAPICalled',
      listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void
    ): this
    on(
      event: 'Runtime.inspectRequested',
      listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void
    ): this
    on(
      event: 'Debugger.scriptParsed',
      listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void
    ): this
    on(
      event: 'Debugger.scriptFailedToParse',
      listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void
    ): this
    on(
      event: 'Debugger.breakpointResolved',
      listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void
    ): this
    on(
      event: 'Debugger.paused',
      listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void
    ): this
    on(event: 'Debugger.resumed', listener: () => void): this
    on(
      event: 'Console.messageAdded',
      listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void
    ): this
    on(
      event: 'Profiler.consoleProfileStarted',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>
      ) => void
    ): this
    on(
      event: 'Profiler.consoleProfileFinished',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>
      ) => void
    ): this
    on(
      event: 'HeapProfiler.addHeapSnapshotChunk',
      listener: (
        message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>
      ) => void
    ): this
    on(event: 'HeapProfiler.resetProfiles', listener: () => void): this
    on(
      event: 'HeapProfiler.reportHeapSnapshotProgress',
      listener: (
        message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>
      ) => void
    ): this
    on(
      event: 'HeapProfiler.lastSeenObjectId',
      listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void
    ): this
    on(
      event: 'HeapProfiler.heapStatsUpdate',
      listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void
    ): this
    on(
      event: 'NodeTracing.dataCollected',
      listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void
    ): this
    on(event: 'NodeTracing.tracingComplete', listener: () => void): this
    on(
      event: 'NodeWorker.attachedToWorker',
      listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void
    ): this
    on(
      event: 'NodeWorker.detachedFromWorker',
      listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void
    ): this
    on(
      event: 'NodeWorker.receivedMessageFromWorker',
      listener: (
        message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>
      ) => void
    ): this
    on(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(
      event: 'inspectorNotification',
      listener: (message: InspectorNotification<{}>) => void
    ): this
    once(
      event: 'Runtime.executionContextCreated',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>
      ) => void
    ): this
    once(
      event: 'Runtime.executionContextDestroyed',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>
      ) => void
    ): this
    once(event: 'Runtime.executionContextsCleared', listener: () => void): this
    once(
      event: 'Runtime.exceptionThrown',
      listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void
    ): this
    once(
      event: 'Runtime.exceptionRevoked',
      listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void
    ): this
    once(
      event: 'Runtime.consoleAPICalled',
      listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void
    ): this
    once(
      event: 'Runtime.inspectRequested',
      listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void
    ): this
    once(
      event: 'Debugger.scriptParsed',
      listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void
    ): this
    once(
      event: 'Debugger.scriptFailedToParse',
      listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void
    ): this
    once(
      event: 'Debugger.breakpointResolved',
      listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void
    ): this
    once(
      event: 'Debugger.paused',
      listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void
    ): this
    once(event: 'Debugger.resumed', listener: () => void): this
    once(
      event: 'Console.messageAdded',
      listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void
    ): this
    once(
      event: 'Profiler.consoleProfileStarted',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>
      ) => void
    ): this
    once(
      event: 'Profiler.consoleProfileFinished',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>
      ) => void
    ): this
    once(
      event: 'HeapProfiler.addHeapSnapshotChunk',
      listener: (
        message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>
      ) => void
    ): this
    once(event: 'HeapProfiler.resetProfiles', listener: () => void): this
    once(
      event: 'HeapProfiler.reportHeapSnapshotProgress',
      listener: (
        message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>
      ) => void
    ): this
    once(
      event: 'HeapProfiler.lastSeenObjectId',
      listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void
    ): this
    once(
      event: 'HeapProfiler.heapStatsUpdate',
      listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void
    ): this
    once(
      event: 'NodeTracing.dataCollected',
      listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void
    ): this
    once(event: 'NodeTracing.tracingComplete', listener: () => void): this
    once(
      event: 'NodeWorker.attachedToWorker',
      listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void
    ): this
    once(
      event: 'NodeWorker.detachedFromWorker',
      listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void
    ): this
    once(
      event: 'NodeWorker.receivedMessageFromWorker',
      listener: (
        message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>
      ) => void
    ): this
    once(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(
      event: 'inspectorNotification',
      listener: (message: InspectorNotification<{}>) => void
    ): this
    prependListener(
      event: 'Runtime.executionContextCreated',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>
      ) => void
    ): this
    prependListener(
      event: 'Runtime.executionContextDestroyed',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>
      ) => void
    ): this
    prependListener(event: 'Runtime.executionContextsCleared', listener: () => void): this
    prependListener(
      event: 'Runtime.exceptionThrown',
      listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void
    ): this
    prependListener(
      event: 'Runtime.exceptionRevoked',
      listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void
    ): this
    prependListener(
      event: 'Runtime.consoleAPICalled',
      listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void
    ): this
    prependListener(
      event: 'Runtime.inspectRequested',
      listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void
    ): this
    prependListener(
      event: 'Debugger.scriptParsed',
      listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void
    ): this
    prependListener(
      event: 'Debugger.scriptFailedToParse',
      listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void
    ): this
    prependListener(
      event: 'Debugger.breakpointResolved',
      listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void
    ): this
    prependListener(
      event: 'Debugger.paused',
      listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void
    ): this
    prependListener(event: 'Debugger.resumed', listener: () => void): this
    prependListener(
      event: 'Console.messageAdded',
      listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void
    ): this
    prependListener(
      event: 'Profiler.consoleProfileStarted',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>
      ) => void
    ): this
    prependListener(
      event: 'Profiler.consoleProfileFinished',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>
      ) => void
    ): this
    prependListener(
      event: 'HeapProfiler.addHeapSnapshotChunk',
      listener: (
        message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>
      ) => void
    ): this
    prependListener(event: 'HeapProfiler.resetProfiles', listener: () => void): this
    prependListener(
      event: 'HeapProfiler.reportHeapSnapshotProgress',
      listener: (
        message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>
      ) => void
    ): this
    prependListener(
      event: 'HeapProfiler.lastSeenObjectId',
      listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void
    ): this
    prependListener(
      event: 'HeapProfiler.heapStatsUpdate',
      listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void
    ): this
    prependListener(
      event: 'NodeTracing.dataCollected',
      listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void
    ): this
    prependListener(event: 'NodeTracing.tracingComplete', listener: () => void): this
    prependListener(
      event: 'NodeWorker.attachedToWorker',
      listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void
    ): this
    prependListener(
      event: 'NodeWorker.detachedFromWorker',
      listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void
    ): this
    prependListener(
      event: 'NodeWorker.receivedMessageFromWorker',
      listener: (
        message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>
      ) => void
    ): this
    prependListener(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'inspectorNotification',
      listener: (message: InspectorNotification<{}>) => void
    ): this
    prependOnceListener(
      event: 'Runtime.executionContextCreated',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextCreatedEventDataType>
      ) => void
    ): this
    prependOnceListener(
      event: 'Runtime.executionContextDestroyed',
      listener: (
        message: InspectorNotification<Runtime.ExecutionContextDestroyedEventDataType>
      ) => void
    ): this
    prependOnceListener(event: 'Runtime.executionContextsCleared', listener: () => void): this
    prependOnceListener(
      event: 'Runtime.exceptionThrown',
      listener: (message: InspectorNotification<Runtime.ExceptionThrownEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Runtime.exceptionRevoked',
      listener: (message: InspectorNotification<Runtime.ExceptionRevokedEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Runtime.consoleAPICalled',
      listener: (message: InspectorNotification<Runtime.ConsoleAPICalledEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Runtime.inspectRequested',
      listener: (message: InspectorNotification<Runtime.InspectRequestedEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Debugger.scriptParsed',
      listener: (message: InspectorNotification<Debugger.ScriptParsedEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Debugger.scriptFailedToParse',
      listener: (message: InspectorNotification<Debugger.ScriptFailedToParseEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Debugger.breakpointResolved',
      listener: (message: InspectorNotification<Debugger.BreakpointResolvedEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Debugger.paused',
      listener: (message: InspectorNotification<Debugger.PausedEventDataType>) => void
    ): this
    prependOnceListener(event: 'Debugger.resumed', listener: () => void): this
    prependOnceListener(
      event: 'Console.messageAdded',
      listener: (message: InspectorNotification<Console.MessageAddedEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'Profiler.consoleProfileStarted',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileStartedEventDataType>
      ) => void
    ): this
    prependOnceListener(
      event: 'Profiler.consoleProfileFinished',
      listener: (
        message: InspectorNotification<Profiler.ConsoleProfileFinishedEventDataType>
      ) => void
    ): this
    prependOnceListener(
      event: 'HeapProfiler.addHeapSnapshotChunk',
      listener: (
        message: InspectorNotification<HeapProfiler.AddHeapSnapshotChunkEventDataType>
      ) => void
    ): this
    prependOnceListener(event: 'HeapProfiler.resetProfiles', listener: () => void): this
    prependOnceListener(
      event: 'HeapProfiler.reportHeapSnapshotProgress',
      listener: (
        message: InspectorNotification<HeapProfiler.ReportHeapSnapshotProgressEventDataType>
      ) => void
    ): this
    prependOnceListener(
      event: 'HeapProfiler.lastSeenObjectId',
      listener: (message: InspectorNotification<HeapProfiler.LastSeenObjectIdEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'HeapProfiler.heapStatsUpdate',
      listener: (message: InspectorNotification<HeapProfiler.HeapStatsUpdateEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'NodeTracing.dataCollected',
      listener: (message: InspectorNotification<NodeTracing.DataCollectedEventDataType>) => void
    ): this
    prependOnceListener(event: 'NodeTracing.tracingComplete', listener: () => void): this
    prependOnceListener(
      event: 'NodeWorker.attachedToWorker',
      listener: (message: InspectorNotification<NodeWorker.AttachedToWorkerEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'NodeWorker.detachedFromWorker',
      listener: (message: InspectorNotification<NodeWorker.DetachedFromWorkerEventDataType>) => void
    ): this
    prependOnceListener(
      event: 'NodeWorker.receivedMessageFromWorker',
      listener: (
        message: InspectorNotification<NodeWorker.ReceivedMessageFromWorkerEventDataType>
      ) => void
    ): this
    prependOnceListener(event: 'NodeRuntime.waitingForDisconnect', listener: () => void): this
  }
  function open(port?: number, host?: string, wait?: boolean): void
  function close(): void
  function url(): string | undefined
  function waitForDebugger(): void
}
declare module 'node:inspector' {
  import EventEmitter = require('inspector')
  export = EventEmitter
}
declare module 'module' {
  import { URL } from 'node:url'
  namespace Module {
    function syncBuiltinESMExports(): void
    function findSourceMap(path: string, error?: Error): SourceMap
    interface SourceMapPayload {
      file: string
      version: number
      sources: string[]
      sourcesContent: string[]
      names: string[]
      mappings: string
      sourceRoot: string
    }
    interface SourceMapping {
      generatedLine: number
      generatedColumn: number
      originalSource: string
      originalLine: number
      originalColumn: number
    }
    class SourceMap {
      readonly payload: SourceMapPayload
      constructor(payload: SourceMapPayload)
      findEntry(line: number, column: number): SourceMapping
    }
  }
  interface Module extends NodeModule {}
  class Module {
    static runMain(): void
    static wrap(code: string): string
    static createRequire(path: string | URL): NodeRequire
    static builtinModules: string[]
    static Module: typeof Module
    constructor(id: string, parent?: Module)
  }
  global {
    interface ImportMeta {
      url: string
      resolve?(specified: string, parent?: string | URL): Promise<string>
    }
  }
  export = Module
}
declare module 'node:module' {
  import module = require('module')
  export = module
}
declare module 'net' {
  import * as stream from 'node:stream'
  import { Abortable, EventEmitter } from 'node:events'
  import * as dns from 'node:dns'
  type LookupFunction = (
    hostname: string,
    options: dns.LookupOneOptions,
    callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
  ) => void
  interface AddressInfo {
    address: string
    family: string
    port: number
  }
  interface SocketConstructorOpts {
    fd?: number | undefined
    allowHalfOpen?: boolean | undefined
    readable?: boolean | undefined
    writable?: boolean | undefined
    signal?: AbortSignal
  }
  interface OnReadOpts {
    buffer: Uint8Array | (() => Uint8Array)
    callback(bytesWritten: number, buf: Uint8Array): boolean
  }
  interface ConnectOpts {
    onread?: OnReadOpts | undefined
  }
  interface TcpSocketConnectOpts extends ConnectOpts {
    port: number
    host?: string | undefined
    localAddress?: string | undefined
    localPort?: number | undefined
    hints?: number | undefined
    family?: number | undefined
    lookup?: LookupFunction | undefined
  }
  interface IpcSocketConnectOpts extends ConnectOpts {
    path: string
  }
  type SocketConnectOpts = TcpSocketConnectOpts | IpcSocketConnectOpts
  class Socket extends stream.Duplex {
    constructor(options?: SocketConstructorOpts)
    write(buffer: Uint8Array | string, cb?: (err?: Error) => void): boolean
    write(str: Uint8Array | string, encoding?: BufferEncoding, cb?: (err?: Error) => void): boolean
    connect(options: SocketConnectOpts, connectionListener?: () => void): this
    connect(port: number, host: string, connectionListener?: () => void): this
    connect(port: number, connectionListener?: () => void): this
    connect(path: string, connectionListener?: () => void): this
    setEncoding(encoding?: BufferEncoding): this
    pause(): this
    resume(): this
    setTimeout(timeout: number, callback?: () => void): this
    setNoDelay(noDelay?: boolean): this
    setKeepAlive(enable?: boolean, initialDelay?: number): this
    address(): AddressInfo | {}
    unref(): this
    ref(): this
    readonly bufferSize: number
    readonly bytesRead: number
    readonly bytesWritten: number
    readonly connecting: boolean
    readonly destroyed: boolean
    readonly localAddress?: string
    readonly localPort?: number
    readonly remoteAddress?: string | undefined
    readonly remoteFamily?: string | undefined
    readonly remotePort?: number | undefined
    end(callback?: () => void): this
    end(buffer: Uint8Array | string, callback?: () => void): this
    end(str: Uint8Array | string, encoding?: BufferEncoding, callback?: () => void): this
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'close', listener: (hadError: boolean) => void): this
    addListener(event: 'connect', listener: () => void): this
    addListener(event: 'data', listener: (data: Buffer) => void): this
    addListener(event: 'drain', listener: () => void): this
    addListener(event: 'end', listener: () => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(
      event: 'lookup',
      listener: (err: Error, address: string, family: string | number, host: string) => void
    ): this
    addListener(event: 'ready', listener: () => void): this
    addListener(event: 'timeout', listener: () => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'close', hadError: boolean): boolean
    emit(event: 'connect'): boolean
    emit(event: 'data', data: Buffer): boolean
    emit(event: 'drain'): boolean
    emit(event: 'end'): boolean
    emit(event: 'error', err: Error): boolean
    emit(
      event: 'lookup',
      err: Error,
      address: string,
      family: string | number,
      host: string
    ): boolean
    emit(event: 'ready'): boolean
    emit(event: 'timeout'): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'close', listener: (hadError: boolean) => void): this
    on(event: 'connect', listener: () => void): this
    on(event: 'data', listener: (data: Buffer) => void): this
    on(event: 'drain', listener: () => void): this
    on(event: 'end', listener: () => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(
      event: 'lookup',
      listener: (err: Error, address: string, family: string | number, host: string) => void
    ): this
    on(event: 'ready', listener: () => void): this
    on(event: 'timeout', listener: () => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'close', listener: (hadError: boolean) => void): this
    once(event: 'connect', listener: () => void): this
    once(event: 'data', listener: (data: Buffer) => void): this
    once(event: 'drain', listener: () => void): this
    once(event: 'end', listener: () => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(
      event: 'lookup',
      listener: (err: Error, address: string, family: string | number, host: string) => void
    ): this
    once(event: 'ready', listener: () => void): this
    once(event: 'timeout', listener: () => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: (hadError: boolean) => void): this
    prependListener(event: 'connect', listener: () => void): this
    prependListener(event: 'data', listener: (data: Buffer) => void): this
    prependListener(event: 'drain', listener: () => void): this
    prependListener(event: 'end', listener: () => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(
      event: 'lookup',
      listener: (err: Error, address: string, family: string | number, host: string) => void
    ): this
    prependListener(event: 'ready', listener: () => void): this
    prependListener(event: 'timeout', listener: () => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: (hadError: boolean) => void): this
    prependOnceListener(event: 'connect', listener: () => void): this
    prependOnceListener(event: 'data', listener: (data: Buffer) => void): this
    prependOnceListener(event: 'drain', listener: () => void): this
    prependOnceListener(event: 'end', listener: () => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(
      event: 'lookup',
      listener: (err: Error, address: string, family: string | number, host: string) => void
    ): this
    prependOnceListener(event: 'ready', listener: () => void): this
    prependOnceListener(event: 'timeout', listener: () => void): this
  }
  interface ListenOptions extends Abortable {
    port?: number | undefined
    host?: string | undefined
    backlog?: number | undefined
    path?: string | undefined
    exclusive?: boolean | undefined
    readableAll?: boolean | undefined
    writableAll?: boolean | undefined
    ipv6Only?: boolean | undefined
  }
  interface ServerOpts {
    allowHalfOpen?: boolean | undefined
    pauseOnConnect?: boolean | undefined
  }
  class Server extends EventEmitter {
    constructor(connectionListener?: (socket: Socket) => void)
    constructor(options?: ServerOpts, connectionListener?: (socket: Socket) => void)
    listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): this
    listen(port?: number, hostname?: string, listeningListener?: () => void): this
    listen(port?: number, backlog?: number, listeningListener?: () => void): this
    listen(port?: number, listeningListener?: () => void): this
    listen(path: string, backlog?: number, listeningListener?: () => void): this
    listen(path: string, listeningListener?: () => void): this
    listen(options: ListenOptions, listeningListener?: () => void): this
    listen(handle: any, backlog?: number, listeningListener?: () => void): this
    listen(handle: any, listeningListener?: () => void): this
    close(callback?: (err?: Error) => void): this
    address(): AddressInfo | string | null
    getConnections(cb: (error: Error | null, count: number) => void): void
    ref(): this
    unref(): this
    maxConnections: number
    connections: number
    listening: boolean
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'connection', listener: (socket: Socket) => void): this
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'listening', listener: () => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'close'): boolean
    emit(event: 'connection', socket: Socket): boolean
    emit(event: 'error', err: Error): boolean
    emit(event: 'listening'): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'connection', listener: (socket: Socket) => void): this
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'listening', listener: () => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'connection', listener: (socket: Socket) => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'listening', listener: () => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'connection', listener: (socket: Socket) => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'listening', listener: () => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'connection', listener: (socket: Socket) => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'listening', listener: () => void): this
  }
  type IPVersion = 'ipv4' | 'ipv6'
  class BlockList {
    addAddress(address: string, type?: IPVersion): void
    addAddress(address: SocketAddress): void
    addRange(start: string, end: string, type?: IPVersion): void
    addRange(start: SocketAddress, end: SocketAddress): void
    addSubnet(net: SocketAddress, prefix: number): void
    addSubnet(net: string, prefix: number, type?: IPVersion): void
    check(address: SocketAddress): boolean
    check(address: string, type?: IPVersion): boolean
  }
  interface TcpNetConnectOpts extends TcpSocketConnectOpts, SocketConstructorOpts {
    timeout?: number | undefined
  }
  interface IpcNetConnectOpts extends IpcSocketConnectOpts, SocketConstructorOpts {
    timeout?: number | undefined
  }
  type NetConnectOpts = TcpNetConnectOpts | IpcNetConnectOpts
  function createServer(connectionListener?: (socket: Socket) => void): Server
  function createServer(options?: ServerOpts, connectionListener?: (socket: Socket) => void): Server
  function connect(options: NetConnectOpts, connectionListener?: () => void): Socket
  function connect(port: number, host?: string, connectionListener?: () => void): Socket
  function connect(path: string, connectionListener?: () => void): Socket
  function createConnection(options: NetConnectOpts, connectionListener?: () => void): Socket
  function createConnection(port: number, host?: string, connectionListener?: () => void): Socket
  function createConnection(path: string, connectionListener?: () => void): Socket
  function isIP(input: string): number
  function isIPv4(input: string): boolean
  function isIPv6(input: string): boolean
  interface SocketAddressInitOptions {
    address?: string | undefined
    family?: IPVersion | undefined
    flowlabel?: number | undefined
    port?: number | undefined
  }
  class SocketAddress {
    constructor(options: SocketAddressInitOptions)
    readonly address: string
    readonly family: IPVersion
    readonly port: number
    readonly flowlabel: number
  }
}
declare module 'node:net' {
  export * from 'net'
}
declare module 'os' {
  interface CpuInfo {
    model: string
    speed: number
    times: {
      user: number
      nice: number
      sys: number
      idle: number
      irq: number
    }
  }
  interface NetworkInterfaceBase {
    address: string
    netmask: string
    mac: string
    internal: boolean
    cidr: string | null
  }
  interface NetworkInterfaceInfoIPv4 extends NetworkInterfaceBase {
    family: 'IPv4'
  }
  interface NetworkInterfaceInfoIPv6 extends NetworkInterfaceBase {
    family: 'IPv6'
    scopeid: number
  }
  interface UserInfo<T> {
    username: T
    uid: number
    gid: number
    shell: T
    homedir: T
  }
  type NetworkInterfaceInfo = NetworkInterfaceInfoIPv4 | NetworkInterfaceInfoIPv6
  function hostname(): string
  function loadavg(): number[]
  function uptime(): number
  function freemem(): number
  function totalmem(): number
  function cpus(): CpuInfo[]
  function type(): string
  function release(): string
  function networkInterfaces(): NodeJS.Dict<NetworkInterfaceInfo[]>
  function homedir(): string
  function userInfo(options: { encoding: 'buffer' }): UserInfo<Buffer>
  function userInfo(options?: { encoding: BufferEncoding }): UserInfo<string>
  type SignalConstants = {
    [key in NodeJS.Signals]: number
  }
  namespace constants {
    const UV_UDP_REUSEADDR: number
    namespace signals {}
    const signals: SignalConstants
    namespace errno {
      const E2BIG: number
      const EACCES: number
      const EADDRINUSE: number
      const EADDRNOTAVAIL: number
      const EAFNOSUPPORT: number
      const EAGAIN: number
      const EALREADY: number
      const EBADF: number
      const EBADMSG: number
      const EBUSY: number
      const ECANCELED: number
      const ECHILD: number
      const ECONNABORTED: number
      const ECONNREFUSED: number
      const ECONNRESET: number
      const EDEADLK: number
      const EDESTADDRREQ: number
      const EDOM: number
      const EDQUOT: number
      const EEXIST: number
      const EFAULT: number
      const EFBIG: number
      const EHOSTUNREACH: number
      const EIDRM: number
      const EILSEQ: number
      const EINPROGRESS: number
      const EINTR: number
      const EINVAL: number
      const EIO: number
      const EISCONN: number
      const EISDIR: number
      const ELOOP: number
      const EMFILE: number
      const EMLINK: number
      const EMSGSIZE: number
      const EMULTIHOP: number
      const ENAMETOOLONG: number
      const ENETDOWN: number
      const ENETRESET: number
      const ENETUNREACH: number
      const ENFILE: number
      const ENOBUFS: number
      const ENODATA: number
      const ENODEV: number
      const ENOENT: number
      const ENOEXEC: number
      const ENOLCK: number
      const ENOLINK: number
      const ENOMEM: number
      const ENOMSG: number
      const ENOPROTOOPT: number
      const ENOSPC: number
      const ENOSR: number
      const ENOSTR: number
      const ENOSYS: number
      const ENOTCONN: number
      const ENOTDIR: number
      const ENOTEMPTY: number
      const ENOTSOCK: number
      const ENOTSUP: number
      const ENOTTY: number
      const ENXIO: number
      const EOPNOTSUPP: number
      const EOVERFLOW: number
      const EPERM: number
      const EPIPE: number
      const EPROTO: number
      const EPROTONOSUPPORT: number
      const EPROTOTYPE: number
      const ERANGE: number
      const EROFS: number
      const ESPIPE: number
      const ESRCH: number
      const ESTALE: number
      const ETIME: number
      const ETIMEDOUT: number
      const ETXTBSY: number
      const EWOULDBLOCK: number
      const EXDEV: number
      const WSAEINTR: number
      const WSAEBADF: number
      const WSAEACCES: number
      const WSAEFAULT: number
      const WSAEINVAL: number
      const WSAEMFILE: number
      const WSAEWOULDBLOCK: number
      const WSAEINPROGRESS: number
      const WSAEALREADY: number
      const WSAENOTSOCK: number
      const WSAEDESTADDRREQ: number
      const WSAEMSGSIZE: number
      const WSAEPROTOTYPE: number
      const WSAENOPROTOOPT: number
      const WSAEPROTONOSUPPORT: number
      const WSAESOCKTNOSUPPORT: number
      const WSAEOPNOTSUPP: number
      const WSAEPFNOSUPPORT: number
      const WSAEAFNOSUPPORT: number
      const WSAEADDRINUSE: number
      const WSAEADDRNOTAVAIL: number
      const WSAENETDOWN: number
      const WSAENETUNREACH: number
      const WSAENETRESET: number
      const WSAECONNABORTED: number
      const WSAECONNRESET: number
      const WSAENOBUFS: number
      const WSAEISCONN: number
      const WSAENOTCONN: number
      const WSAESHUTDOWN: number
      const WSAETOOMANYREFS: number
      const WSAETIMEDOUT: number
      const WSAECONNREFUSED: number
      const WSAELOOP: number
      const WSAENAMETOOLONG: number
      const WSAEHOSTDOWN: number
      const WSAEHOSTUNREACH: number
      const WSAENOTEMPTY: number
      const WSAEPROCLIM: number
      const WSAEUSERS: number
      const WSAEDQUOT: number
      const WSAESTALE: number
      const WSAEREMOTE: number
      const WSASYSNOTREADY: number
      const WSAVERNOTSUPPORTED: number
      const WSANOTINITIALISED: number
      const WSAEDISCON: number
      const WSAENOMORE: number
      const WSAECANCELLED: number
      const WSAEINVALIDPROCTABLE: number
      const WSAEINVALIDPROVIDER: number
      const WSAEPROVIDERFAILEDINIT: number
      const WSASYSCALLFAILURE: number
      const WSASERVICE_NOT_FOUND: number
      const WSATYPE_NOT_FOUND: number
      const WSA_E_NO_MORE: number
      const WSA_E_CANCELLED: number
      const WSAEREFUSED: number
    }
    namespace priority {
      const PRIORITY_LOW: number
      const PRIORITY_BELOW_NORMAL: number
      const PRIORITY_NORMAL: number
      const PRIORITY_ABOVE_NORMAL: number
      const PRIORITY_HIGH: number
      const PRIORITY_HIGHEST: number
    }
  }
  const devNull: string
  const EOL: string
  function arch(): string
  function version(): string
  function platform(): NodeJS.Platform
  function tmpdir(): string
  function endianness(): 'BE' | 'LE'
  function getPriority(pid?: number): number
  function setPriority(priority: number): void
  function setPriority(pid: number, priority: number): void
}
declare module 'node:os' {
  export * from 'os'
}
declare module 'path/posix' {
  import path = require('path')
  export = path
}
declare module 'path/win32' {
  import path = require('path')
  export = path
}
declare module 'path' {
  namespace path {
    interface ParsedPath {
      root: string
      dir: string
      base: string
      ext: string
      name: string
    }
    interface FormatInputPathObject {
      root?: string | undefined
      dir?: string | undefined
      base?: string | undefined
      ext?: string | undefined
      name?: string | undefined
    }
    interface PlatformPath {
      normalize(p: string): string
      join(...paths: string[]): string
      resolve(...pathSegments: string[]): string
      isAbsolute(p: string): boolean
      relative(from: string, to: string): string
      dirname(p: string): string
      basename(p: string, ext?: string): string
      extname(p: string): string
      readonly sep: string
      readonly delimiter: string
      parse(p: string): ParsedPath
      format(pP: FormatInputPathObject): string
      toNamespacedPath(path: string): string
      readonly posix: PlatformPath
      readonly win32: PlatformPath
    }
  }
  const path: path.PlatformPath
  export = path
}
declare module 'node:path' {
  import path = require('path')
  export = path
}
declare module 'node:path/posix' {
  import path = require('path/posix')
  export = path
}
declare module 'node:path/win32' {
  import path = require('path/win32')
  export = path
}
declare module 'perf_hooks' {
  import { AsyncResource } from 'node:async_hooks'
  type EntryType = 'node' | 'mark' | 'measure' | 'gc' | 'function' | 'http2' | 'http'
  interface NodeGCPerformanceDetail {
    readonly kind?: number | undefined
    readonly flags?: number | undefined
  }
  class PerformanceEntry {
    protected constructor()
    readonly duration: number
    readonly name: string
    readonly startTime: number
    readonly entryType: EntryType
    readonly detail?: NodeGCPerformanceDetail | unknown | undefined
  }
  class PerformanceNodeTiming extends PerformanceEntry {
    readonly bootstrapComplete: number
    readonly environment: number
    readonly idleTime: number
    readonly loopExit: number
    readonly loopStart: number
    readonly v8Start: number
  }
  interface EventLoopUtilization {
    idle: number
    active: number
    utilization: number
  }
  type EventLoopUtilityFunction = (
    util1?: EventLoopUtilization,
    util2?: EventLoopUtilization
  ) => EventLoopUtilization
  interface MarkOptions {
    detail?: unknown | undefined
    startTime?: number | undefined
  }
  interface MeasureOptions {
    detail?: unknown | undefined
    duration?: number | undefined
    end?: number | string | undefined
    start?: number | string | undefined
  }
  interface TimerifyOptions {
    histogram?: RecordableHistogram | undefined
  }
  interface Performance {
    clearMarks(name?: string): void
    mark(name?: string, options?: MarkOptions): void
    measure(name: string, startMark?: string, endMark?: string): void
    measure(name: string, options: MeasureOptions): void
    readonly nodeTiming: PerformanceNodeTiming
    now(): number
    readonly timeOrigin: number
    timerify<T extends (...params: any[]) => any>(fn: T, options?: TimerifyOptions): T
    eventLoopUtilization: EventLoopUtilityFunction
  }
  interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntry[]
    getEntriesByName(name: string, type?: EntryType): PerformanceEntry[]
    getEntriesByType(type: EntryType): PerformanceEntry[]
  }
  type PerformanceObserverCallback = (
    list: PerformanceObserverEntryList,
    observer: PerformanceObserver
  ) => void
  class PerformanceObserver extends AsyncResource {
    constructor(callback: PerformanceObserverCallback)
    disconnect(): void
    observe(
      options:
        | {
            entryTypes: ReadonlyArray<EntryType>
            buffered?: boolean | undefined
          }
        | {
            type: EntryType
            buffered?: boolean | undefined
          }
    ): void
  }
  namespace constants {
    const NODE_PERFORMANCE_GC_MAJOR: number
    const NODE_PERFORMANCE_GC_MINOR: number
    const NODE_PERFORMANCE_GC_INCREMENTAL: number
    const NODE_PERFORMANCE_GC_WEAKCB: number
    const NODE_PERFORMANCE_GC_FLAGS_NO: number
    const NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: number
    const NODE_PERFORMANCE_GC_FLAGS_FORCED: number
    const NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: number
    const NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: number
    const NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: number
    const NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: number
  }
  const performance: Performance
  interface EventLoopMonitorOptions {
    resolution?: number | undefined
  }
  interface Histogram {
    readonly percentiles: Map<number, number>
    readonly exceeds: number
    readonly min: number
    readonly max: number
    readonly mean: number
    readonly stddev: number
    reset(): void
    percentile(percentile: number): number
  }
  interface IntervalHistogram extends Histogram {
    enable(): boolean
    disable(): boolean
  }
  interface RecordableHistogram extends Histogram {
    record(val: number | bigint): void
    recordDelta(): void
  }
  function monitorEventLoopDelay(options?: EventLoopMonitorOptions): IntervalHistogram
  interface CreateHistogramOptions {
    min?: number | bigint | undefined
    max?: number | bigint | undefined
    figures?: number | undefined
  }
  function createHistogram(options?: CreateHistogramOptions): RecordableHistogram
}
declare module 'node:perf_hooks' {
  export * from 'perf_hooks'
}
declare module 'punycode' {
  function decode(string: string): string
  function encode(string: string): string
  function toUnicode(domain: string): string
  function toASCII(domain: string): string
  const ucs2: ucs2
  interface ucs2 {
    decode(string: string): number[]
    encode(codePoints: ReadonlyArray<number>): string
  }
  const version: string
}
declare module 'node:punycode' {
  export * from 'punycode'
}
declare module 'querystring' {
  interface StringifyOptions {
    encodeURIComponent?: ((str: string) => string) | undefined
  }
  interface ParseOptions {
    maxKeys?: number | undefined
    decodeURIComponent?: ((str: string) => string) | undefined
  }
  interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> {}
  interface ParsedUrlQueryInput
    extends NodeJS.Dict<
      | string
      | number
      | boolean
      | ReadonlyArray<string>
      | ReadonlyArray<number>
      | ReadonlyArray<boolean>
      | null
    > {}
  function stringify(
    obj?: ParsedUrlQueryInput,
    sep?: string,
    eq?: string,
    options?: StringifyOptions
  ): string
  function parse(str: string, sep?: string, eq?: string, options?: ParseOptions): ParsedUrlQuery
  const encode: typeof stringify
  const decode: typeof parse
  function escape(str: string): string
  function unescape(str: string): string
}
declare module 'node:querystring' {
  export * from 'querystring'
}
declare module 'readline' {
  import { Abortable, EventEmitter } from 'node:events'
  interface Key {
    sequence?: string | undefined
    name?: string | undefined
    ctrl?: boolean | undefined
    meta?: boolean | undefined
    shift?: boolean | undefined
  }
  class Interface extends EventEmitter {
    readonly terminal: boolean
    readonly line: string
    readonly cursor: number
    protected constructor(
      input: NodeJS.ReadableStream,
      output?: NodeJS.WritableStream,
      completer?: Completer | AsyncCompleter,
      terminal?: boolean
    )
    protected constructor(options: ReadLineOptions)
    getPrompt(): string
    setPrompt(prompt: string): void
    prompt(preserveCursor?: boolean): void
    question(query: string, callback: (answer: string) => void): void
    question(query: string, options: Abortable, callback: (answer: string) => void): void
    pause(): this
    resume(): this
    close(): void
    write(data: string | Buffer, key?: Key): void
    write(data: undefined | null | string | Buffer, key: Key): void
    getCursorPos(): CursorPos
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'line', listener: (input: string) => void): this
    addListener(event: 'pause', listener: () => void): this
    addListener(event: 'resume', listener: () => void): this
    addListener(event: 'SIGCONT', listener: () => void): this
    addListener(event: 'SIGINT', listener: () => void): this
    addListener(event: 'SIGTSTP', listener: () => void): this
    addListener(event: 'history', listener: (history: string[]) => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'close'): boolean
    emit(event: 'line', input: string): boolean
    emit(event: 'pause'): boolean
    emit(event: 'resume'): boolean
    emit(event: 'SIGCONT'): boolean
    emit(event: 'SIGINT'): boolean
    emit(event: 'SIGTSTP'): boolean
    emit(event: 'history', history: string[]): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'line', listener: (input: string) => void): this
    on(event: 'pause', listener: () => void): this
    on(event: 'resume', listener: () => void): this
    on(event: 'SIGCONT', listener: () => void): this
    on(event: 'SIGINT', listener: () => void): this
    on(event: 'SIGTSTP', listener: () => void): this
    on(event: 'history', listener: (history: string[]) => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'line', listener: (input: string) => void): this
    once(event: 'pause', listener: () => void): this
    once(event: 'resume', listener: () => void): this
    once(event: 'SIGCONT', listener: () => void): this
    once(event: 'SIGINT', listener: () => void): this
    once(event: 'SIGTSTP', listener: () => void): this
    once(event: 'history', listener: (history: string[]) => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'line', listener: (input: string) => void): this
    prependListener(event: 'pause', listener: () => void): this
    prependListener(event: 'resume', listener: () => void): this
    prependListener(event: 'SIGCONT', listener: () => void): this
    prependListener(event: 'SIGINT', listener: () => void): this
    prependListener(event: 'SIGTSTP', listener: () => void): this
    prependListener(event: 'history', listener: (history: string[]) => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'line', listener: (input: string) => void): this
    prependOnceListener(event: 'pause', listener: () => void): this
    prependOnceListener(event: 'resume', listener: () => void): this
    prependOnceListener(event: 'SIGCONT', listener: () => void): this
    prependOnceListener(event: 'SIGINT', listener: () => void): this
    prependOnceListener(event: 'SIGTSTP', listener: () => void): this
    prependOnceListener(event: 'history', listener: (history: string[]) => void): this
    [Symbol.asyncIterator](): AsyncIterableIterator<string>
  }
  type ReadLine = Interface
  type Completer = (line: string) => CompleterResult
  type AsyncCompleter = (
    line: string,
    callback: (err?: null | Error, result?: CompleterResult) => void
  ) => void
  type CompleterResult = [string[], string]
  interface ReadLineOptions {
    input: NodeJS.ReadableStream
    output?: NodeJS.WritableStream | undefined
    completer?: Completer | AsyncCompleter | undefined
    terminal?: boolean | undefined
    history?: string[] | undefined
    historySize?: number | undefined
    prompt?: string | undefined
    crlfDelay?: number | undefined
    removeHistoryDuplicates?: boolean | undefined
    escapeCodeTimeout?: number | undefined
    tabSize?: number | undefined
  }
  function createInterface(
    input: NodeJS.ReadableStream,
    output?: NodeJS.WritableStream,
    completer?: Completer | AsyncCompleter,
    terminal?: boolean
  ): Interface
  function createInterface(options: ReadLineOptions): Interface
  function emitKeypressEvents(stream: NodeJS.ReadableStream, readlineInterface?: Interface): void
  type Direction = -1 | 0 | 1
  interface CursorPos {
    rows: number
    cols: number
  }
  function clearLine(stream: NodeJS.WritableStream, dir: Direction, callback?: () => void): boolean
  function clearScreenDown(stream: NodeJS.WritableStream, callback?: () => void): boolean
  function cursorTo(
    stream: NodeJS.WritableStream,
    x: number,
    y?: number,
    callback?: () => void
  ): boolean
  function moveCursor(
    stream: NodeJS.WritableStream,
    dx: number,
    dy: number,
    callback?: () => void
  ): boolean
}
declare module 'node:readline' {
  export * from 'readline'
}
declare module 'repl' {
  import { Interface, Completer, AsyncCompleter } from 'node:readline'
  import { Context } from 'node:vm'
  import { InspectOptions } from 'node:util'
  interface ReplOptions {
    prompt?: string | undefined
    input?: NodeJS.ReadableStream | undefined
    output?: NodeJS.WritableStream | undefined
    terminal?: boolean | undefined
    eval?: REPLEval | undefined
    preview?: boolean | undefined
    useColors?: boolean | undefined
    useGlobal?: boolean | undefined
    ignoreUndefined?: boolean | undefined
    writer?: REPLWriter | undefined
    completer?: Completer | AsyncCompleter | undefined
    replMode?: typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT | undefined
    breakEvalOnSigint?: boolean | undefined
  }
  type REPLEval = (
    this: REPLServer,
    evalCmd: string,
    context: Context,
    file: string,
    cb: (err: Error | null, result: any) => void
  ) => void
  type REPLWriter = (this: REPLServer, obj: any) => string
  const writer: REPLWriter & {
    options: InspectOptions
  }
  type REPLCommandAction = (this: REPLServer, text: string) => void
  interface REPLCommand {
    help?: string | undefined
    action: REPLCommandAction
  }
  class REPLServer extends Interface {
    readonly context: Context
    readonly inputStream: NodeJS.ReadableStream
    readonly outputStream: NodeJS.WritableStream
    readonly input: NodeJS.ReadableStream
    readonly output: NodeJS.WritableStream
    readonly commands: NodeJS.ReadOnlyDict<REPLCommand>
    readonly editorMode: boolean
    readonly underscoreAssigned: boolean
    readonly last: any
    readonly underscoreErrAssigned: boolean
    readonly lastError: any
    readonly eval: REPLEval
    readonly useColors: boolean
    readonly useGlobal: boolean
    readonly ignoreUndefined: boolean
    readonly writer: REPLWriter
    readonly completer: Completer | AsyncCompleter
    readonly replMode: typeof REPL_MODE_SLOPPY | typeof REPL_MODE_STRICT
    private constructor()
    defineCommand(keyword: string, cmd: REPLCommandAction | REPLCommand): void
    displayPrompt(preserveCursor?: boolean): void
    clearBufferedCommand(): void
    setupHistory(path: string, callback: (err: Error | null, repl: this) => void): void
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'line', listener: (input: string) => void): this
    addListener(event: 'pause', listener: () => void): this
    addListener(event: 'resume', listener: () => void): this
    addListener(event: 'SIGCONT', listener: () => void): this
    addListener(event: 'SIGINT', listener: () => void): this
    addListener(event: 'SIGTSTP', listener: () => void): this
    addListener(event: 'exit', listener: () => void): this
    addListener(event: 'reset', listener: (context: Context) => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'close'): boolean
    emit(event: 'line', input: string): boolean
    emit(event: 'pause'): boolean
    emit(event: 'resume'): boolean
    emit(event: 'SIGCONT'): boolean
    emit(event: 'SIGINT'): boolean
    emit(event: 'SIGTSTP'): boolean
    emit(event: 'exit'): boolean
    emit(event: 'reset', context: Context): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'close', listener: () => void): this
    on(event: 'line', listener: (input: string) => void): this
    on(event: 'pause', listener: () => void): this
    on(event: 'resume', listener: () => void): this
    on(event: 'SIGCONT', listener: () => void): this
    on(event: 'SIGINT', listener: () => void): this
    on(event: 'SIGTSTP', listener: () => void): this
    on(event: 'exit', listener: () => void): this
    on(event: 'reset', listener: (context: Context) => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'line', listener: (input: string) => void): this
    once(event: 'pause', listener: () => void): this
    once(event: 'resume', listener: () => void): this
    once(event: 'SIGCONT', listener: () => void): this
    once(event: 'SIGINT', listener: () => void): this
    once(event: 'SIGTSTP', listener: () => void): this
    once(event: 'exit', listener: () => void): this
    once(event: 'reset', listener: (context: Context) => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'line', listener: (input: string) => void): this
    prependListener(event: 'pause', listener: () => void): this
    prependListener(event: 'resume', listener: () => void): this
    prependListener(event: 'SIGCONT', listener: () => void): this
    prependListener(event: 'SIGINT', listener: () => void): this
    prependListener(event: 'SIGTSTP', listener: () => void): this
    prependListener(event: 'exit', listener: () => void): this
    prependListener(event: 'reset', listener: (context: Context) => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'line', listener: (input: string) => void): this
    prependOnceListener(event: 'pause', listener: () => void): this
    prependOnceListener(event: 'resume', listener: () => void): this
    prependOnceListener(event: 'SIGCONT', listener: () => void): this
    prependOnceListener(event: 'SIGINT', listener: () => void): this
    prependOnceListener(event: 'SIGTSTP', listener: () => void): this
    prependOnceListener(event: 'exit', listener: () => void): this
    prependOnceListener(event: 'reset', listener: (context: Context) => void): this
  }
  const REPL_MODE_SLOPPY: unique symbol
  const REPL_MODE_STRICT: unique symbol
  function start(options?: string | ReplOptions): REPLServer
  class Recoverable extends SyntaxError {
    err: Error
    constructor(err: Error)
  }
}
declare module 'node:repl' {
  export * from 'repl'
}
declare module 'stream' {
  import { EventEmitter, Abortable } from 'node:events'
  import * as streamPromises from 'node:stream/promises'
  import * as streamConsumers from 'node:stream/consumers'
  class internal extends EventEmitter {
    pipe<T extends NodeJS.WritableStream>(
      destination: T,
      options?: {
        end?: boolean | undefined
      }
    ): T
  }
  namespace internal {
    class Stream extends internal {
      constructor(opts?: ReadableOptions)
    }
    interface StreamOptions<T extends Stream> extends Abortable {
      emitClose?: boolean | undefined
      highWaterMark?: number | undefined
      objectMode?: boolean | undefined
      construct?(this: T, callback: (error?: Error | null) => void): void
      destroy?(this: T, error: Error | null, callback: (error: Error | null) => void): void
      autoDestroy?: boolean | undefined
    }
    interface ReadableOptions extends StreamOptions<Readable> {
      encoding?: BufferEncoding | undefined
      read?(this: Readable, size: number): void
    }
    class Readable extends Stream implements NodeJS.ReadableStream {
      static from(iterable: Iterable<any> | AsyncIterable<any>, options?: ReadableOptions): Readable
      static isDisturbed(stream: Readable | NodeJS.ReadableStream): boolean
      readonly readableAborted: boolean
      readable: boolean
      readonly readableDidRead: boolean
      readonly readableEncoding: BufferEncoding | null
      readonly readableEnded: boolean
      readonly readableFlowing: boolean | null
      readonly readableHighWaterMark: number
      readonly readableLength: number
      readonly readableObjectMode: boolean
      destroyed: boolean
      constructor(opts?: ReadableOptions)
      _construct?(callback: (error?: Error | null) => void): void
      _read(size: number): void
      read(size?: number): any
      setEncoding(encoding: BufferEncoding): this
      pause(): this
      resume(): this
      isPaused(): boolean
      unpipe(destination?: NodeJS.WritableStream): this
      unshift(chunk: any, encoding?: BufferEncoding): void
      wrap(stream: NodeJS.ReadableStream): this
      push(chunk: any, encoding?: BufferEncoding): boolean
      _destroy(error: Error | null, callback: (error?: Error | null) => void): void
      destroy(error?: Error): this
      addListener(event: 'close', listener: () => void): this
      addListener(event: 'data', listener: (chunk: any) => void): this
      addListener(event: 'end', listener: () => void): this
      addListener(event: 'error', listener: (err: Error) => void): this
      addListener(event: 'pause', listener: () => void): this
      addListener(event: 'readable', listener: () => void): this
      addListener(event: 'resume', listener: () => void): this
      addListener(event: string | symbol, listener: (...args: any[]) => void): this
      emit(event: 'close'): boolean
      emit(event: 'data', chunk: any): boolean
      emit(event: 'end'): boolean
      emit(event: 'error', err: Error): boolean
      emit(event: 'pause'): boolean
      emit(event: 'readable'): boolean
      emit(event: 'resume'): boolean
      emit(event: string | symbol, ...args: any[]): boolean
      on(event: 'close', listener: () => void): this
      on(event: 'data', listener: (chunk: any) => void): this
      on(event: 'end', listener: () => void): this
      on(event: 'error', listener: (err: Error) => void): this
      on(event: 'pause', listener: () => void): this
      on(event: 'readable', listener: () => void): this
      on(event: 'resume', listener: () => void): this
      on(event: string | symbol, listener: (...args: any[]) => void): this
      once(event: 'close', listener: () => void): this
      once(event: 'data', listener: (chunk: any) => void): this
      once(event: 'end', listener: () => void): this
      once(event: 'error', listener: (err: Error) => void): this
      once(event: 'pause', listener: () => void): this
      once(event: 'readable', listener: () => void): this
      once(event: 'resume', listener: () => void): this
      once(event: string | symbol, listener: (...args: any[]) => void): this
      prependListener(event: 'close', listener: () => void): this
      prependListener(event: 'data', listener: (chunk: any) => void): this
      prependListener(event: 'end', listener: () => void): this
      prependListener(event: 'error', listener: (err: Error) => void): this
      prependListener(event: 'pause', listener: () => void): this
      prependListener(event: 'readable', listener: () => void): this
      prependListener(event: 'resume', listener: () => void): this
      prependListener(event: string | symbol, listener: (...args: any[]) => void): this
      prependOnceListener(event: 'close', listener: () => void): this
      prependOnceListener(event: 'data', listener: (chunk: any) => void): this
      prependOnceListener(event: 'end', listener: () => void): this
      prependOnceListener(event: 'error', listener: (err: Error) => void): this
      prependOnceListener(event: 'pause', listener: () => void): this
      prependOnceListener(event: 'readable', listener: () => void): this
      prependOnceListener(event: 'resume', listener: () => void): this
      prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
      removeListener(event: 'close', listener: () => void): this
      removeListener(event: 'data', listener: (chunk: any) => void): this
      removeListener(event: 'end', listener: () => void): this
      removeListener(event: 'error', listener: (err: Error) => void): this
      removeListener(event: 'pause', listener: () => void): this
      removeListener(event: 'readable', listener: () => void): this
      removeListener(event: 'resume', listener: () => void): this
      removeListener(event: string | symbol, listener: (...args: any[]) => void): this
      [Symbol.asyncIterator](): AsyncIterableIterator<any>
    }
    interface WritableOptions extends StreamOptions<Writable> {
      decodeStrings?: boolean | undefined
      defaultEncoding?: BufferEncoding | undefined
      write?(
        this: Writable,
        chunk: any,
        encoding: BufferEncoding,
        callback: (error?: Error | null) => void
      ): void
      writev?(
        this: Writable,
        chunks: Array<{
          chunk: any
          encoding: BufferEncoding
        }>,
        callback: (error?: Error | null) => void
      ): void
      final?(this: Writable, callback: (error?: Error | null) => void): void
    }
    class Writable extends Stream implements NodeJS.WritableStream {
      readonly writable: boolean
      readonly writableEnded: boolean
      readonly writableFinished: boolean
      readonly writableHighWaterMark: number
      readonly writableLength: number
      readonly writableObjectMode: boolean
      readonly writableCorked: number
      destroyed: boolean
      constructor(opts?: WritableOptions)
      _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void
      _writev?(
        chunks: Array<{
          chunk: any
          encoding: BufferEncoding
        }>,
        callback: (error?: Error | null) => void
      ): void
      _construct?(callback: (error?: Error | null) => void): void
      _destroy(error: Error | null, callback: (error?: Error | null) => void): void
      _final(callback: (error?: Error | null) => void): void
      write(chunk: any, callback?: (error: Error | null | undefined) => void): boolean
      write(
        chunk: any,
        encoding: BufferEncoding,
        callback?: (error: Error | null | undefined) => void
      ): boolean
      setDefaultEncoding(encoding: BufferEncoding): this
      end(cb?: () => void): this
      end(chunk: any, cb?: () => void): this
      end(chunk: any, encoding: BufferEncoding, cb?: () => void): this
      cork(): void
      uncork(): void
      destroy(error?: Error): this
      addListener(event: 'close', listener: () => void): this
      addListener(event: 'drain', listener: () => void): this
      addListener(event: 'error', listener: (err: Error) => void): this
      addListener(event: 'finish', listener: () => void): this
      addListener(event: 'pipe', listener: (src: Readable) => void): this
      addListener(event: 'unpipe', listener: (src: Readable) => void): this
      addListener(event: string | symbol, listener: (...args: any[]) => void): this
      emit(event: 'close'): boolean
      emit(event: 'drain'): boolean
      emit(event: 'error', err: Error): boolean
      emit(event: 'finish'): boolean
      emit(event: 'pipe', src: Readable): boolean
      emit(event: 'unpipe', src: Readable): boolean
      emit(event: string | symbol, ...args: any[]): boolean
      on(event: 'close', listener: () => void): this
      on(event: 'drain', listener: () => void): this
      on(event: 'error', listener: (err: Error) => void): this
      on(event: 'finish', listener: () => void): this
      on(event: 'pipe', listener: (src: Readable) => void): this
      on(event: 'unpipe', listener: (src: Readable) => void): this
      on(event: string | symbol, listener: (...args: any[]) => void): this
      once(event: 'close', listener: () => void): this
      once(event: 'drain', listener: () => void): this
      once(event: 'error', listener: (err: Error) => void): this
      once(event: 'finish', listener: () => void): this
      once(event: 'pipe', listener: (src: Readable) => void): this
      once(event: 'unpipe', listener: (src: Readable) => void): this
      once(event: string | symbol, listener: (...args: any[]) => void): this
      prependListener(event: 'close', listener: () => void): this
      prependListener(event: 'drain', listener: () => void): this
      prependListener(event: 'error', listener: (err: Error) => void): this
      prependListener(event: 'finish', listener: () => void): this
      prependListener(event: 'pipe', listener: (src: Readable) => void): this
      prependListener(event: 'unpipe', listener: (src: Readable) => void): this
      prependListener(event: string | symbol, listener: (...args: any[]) => void): this
      prependOnceListener(event: 'close', listener: () => void): this
      prependOnceListener(event: 'drain', listener: () => void): this
      prependOnceListener(event: 'error', listener: (err: Error) => void): this
      prependOnceListener(event: 'finish', listener: () => void): this
      prependOnceListener(event: 'pipe', listener: (src: Readable) => void): this
      prependOnceListener(event: 'unpipe', listener: (src: Readable) => void): this
      prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
      removeListener(event: 'close', listener: () => void): this
      removeListener(event: 'drain', listener: () => void): this
      removeListener(event: 'error', listener: (err: Error) => void): this
      removeListener(event: 'finish', listener: () => void): this
      removeListener(event: 'pipe', listener: (src: Readable) => void): this
      removeListener(event: 'unpipe', listener: (src: Readable) => void): this
      removeListener(event: string | symbol, listener: (...args: any[]) => void): this
    }
    interface DuplexOptions extends ReadableOptions, WritableOptions {
      allowHalfOpen?: boolean | undefined
      readableObjectMode?: boolean | undefined
      writableObjectMode?: boolean | undefined
      readableHighWaterMark?: number | undefined
      writableHighWaterMark?: number | undefined
      writableCorked?: number | undefined
      construct?(this: Duplex, callback: (error?: Error | null) => void): void
      read?(this: Duplex, size: number): void
      write?(
        this: Duplex,
        chunk: any,
        encoding: BufferEncoding,
        callback: (error?: Error | null) => void
      ): void
      writev?(
        this: Duplex,
        chunks: Array<{
          chunk: any
          encoding: BufferEncoding
        }>,
        callback: (error?: Error | null) => void
      ): void
      final?(this: Duplex, callback: (error?: Error | null) => void): void
      destroy?(this: Duplex, error: Error | null, callback: (error: Error | null) => void): void
    }
    class Duplex extends Readable implements Writable {
      readonly writable: boolean
      readonly writableEnded: boolean
      readonly writableFinished: boolean
      readonly writableHighWaterMark: number
      readonly writableLength: number
      readonly writableObjectMode: boolean
      readonly writableCorked: number
      allowHalfOpen: boolean
      constructor(opts?: DuplexOptions)
      static from(
        src:
          | Stream
          | Blob
          | ArrayBuffer
          | string
          | Iterable<any>
          | AsyncIterable<any>
          | AsyncGeneratorFunction
          | Promise<any>
          | Object
      ): Duplex
      _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void
      _writev?(
        chunks: Array<{
          chunk: any
          encoding: BufferEncoding
        }>,
        callback: (error?: Error | null) => void
      ): void
      _destroy(error: Error | null, callback: (error: Error | null) => void): void
      _final(callback: (error?: Error | null) => void): void
      write(
        chunk: any,
        encoding?: BufferEncoding,
        cb?: (error: Error | null | undefined) => void
      ): boolean
      write(chunk: any, cb?: (error: Error | null | undefined) => void): boolean
      setDefaultEncoding(encoding: BufferEncoding): this
      end(cb?: () => void): this
      end(chunk: any, cb?: () => void): this
      end(chunk: any, encoding?: BufferEncoding, cb?: () => void): this
      cork(): void
      uncork(): void
    }
    type TransformCallback = (error?: Error | null, data?: any) => void
    interface TransformOptions extends DuplexOptions {
      construct?(this: Transform, callback: (error?: Error | null) => void): void
      read?(this: Transform, size: number): void
      write?(
        this: Transform,
        chunk: any,
        encoding: BufferEncoding,
        callback: (error?: Error | null) => void
      ): void
      writev?(
        this: Transform,
        chunks: Array<{
          chunk: any
          encoding: BufferEncoding
        }>,
        callback: (error?: Error | null) => void
      ): void
      final?(this: Transform, callback: (error?: Error | null) => void): void
      destroy?(this: Transform, error: Error | null, callback: (error: Error | null) => void): void
      transform?(
        this: Transform,
        chunk: any,
        encoding: BufferEncoding,
        callback: TransformCallback
      ): void
      flush?(this: Transform, callback: TransformCallback): void
    }
    class Transform extends Duplex {
      constructor(opts?: TransformOptions)
      _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void
      _flush(callback: TransformCallback): void
    }
    class PassThrough extends Transform {}
    function addAbortSignal<T extends Stream>(signal: AbortSignal, stream: T): T
    interface FinishedOptions extends Abortable {
      error?: boolean | undefined
      readable?: boolean | undefined
      writable?: boolean | undefined
    }
    function finished(
      stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream,
      options: FinishedOptions,
      callback: (err?: NodeJS.ErrnoException | null) => void
    ): () => void
    function finished(
      stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream,
      callback: (err?: NodeJS.ErrnoException | null) => void
    ): () => void
    namespace finished {
      function __promisify__(
        stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream,
        options?: FinishedOptions
      ): Promise<void>
    }
    type PipelineSourceFunction<T> = () => Iterable<T> | AsyncIterable<T>
    type PipelineSource<T> =
      | Iterable<T>
      | AsyncIterable<T>
      | NodeJS.ReadableStream
      | PipelineSourceFunction<T>
    type PipelineTransform<S extends PipelineTransformSource<any>, U> =
      | NodeJS.ReadWriteStream
      | ((
          source: S extends (...args: any[]) => Iterable<infer ST> | AsyncIterable<infer ST>
            ? AsyncIterable<ST>
            : S
        ) => AsyncIterable<U>)
    type PipelineTransformSource<T> = PipelineSource<T> | PipelineTransform<any, T>
    type PipelineDestinationIterableFunction<T> = (source: AsyncIterable<T>) => AsyncIterable<any>
    type PipelineDestinationPromiseFunction<T, P> = (source: AsyncIterable<T>) => Promise<P>
    type PipelineDestination<
      S extends PipelineTransformSource<any>,
      P
    > = S extends PipelineTransformSource<infer ST>
      ?
          | NodeJS.WritableStream
          | PipelineDestinationIterableFunction<ST>
          | PipelineDestinationPromiseFunction<ST, P>
      : never
    type PipelineCallback<S extends PipelineDestination<any, any>> =
      S extends PipelineDestinationPromiseFunction<any, infer P>
        ? (err: NodeJS.ErrnoException | null, value: P) => void
        : (err: NodeJS.ErrnoException | null) => void
    type PipelinePromise<S extends PipelineDestination<any, any>> =
      S extends PipelineDestinationPromiseFunction<any, infer P> ? Promise<P> : Promise<void>
    interface PipelineOptions {
      signal: AbortSignal
    }
    function pipeline<A extends PipelineSource<any>, B extends PipelineDestination<A, any>>(
      source: A,
      destination: B,
      callback?: PipelineCallback<B>
    ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream
    function pipeline<
      A extends PipelineSource<any>,
      T1 extends PipelineTransform<A, any>,
      B extends PipelineDestination<T1, any>
    >(
      source: A,
      transform1: T1,
      destination: B,
      callback?: PipelineCallback<B>
    ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream
    function pipeline<
      A extends PipelineSource<any>,
      T1 extends PipelineTransform<A, any>,
      T2 extends PipelineTransform<T1, any>,
      B extends PipelineDestination<T2, any>
    >(
      source: A,
      transform1: T1,
      transform2: T2,
      destination: B,
      callback?: PipelineCallback<B>
    ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream
    function pipeline<
      A extends PipelineSource<any>,
      T1 extends PipelineTransform<A, any>,
      T2 extends PipelineTransform<T1, any>,
      T3 extends PipelineTransform<T2, any>,
      B extends PipelineDestination<T3, any>
    >(
      source: A,
      transform1: T1,
      transform2: T2,
      transform3: T3,
      destination: B,
      callback?: PipelineCallback<B>
    ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream
    function pipeline<
      A extends PipelineSource<any>,
      T1 extends PipelineTransform<A, any>,
      T2 extends PipelineTransform<T1, any>,
      T3 extends PipelineTransform<T2, any>,
      T4 extends PipelineTransform<T3, any>,
      B extends PipelineDestination<T4, any>
    >(
      source: A,
      transform1: T1,
      transform2: T2,
      transform3: T3,
      transform4: T4,
      destination: B,
      callback?: PipelineCallback<B>
    ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream
    function pipeline(
      streams: ReadonlyArray<
        NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream
      >,
      callback?: (err: NodeJS.ErrnoException | null) => void
    ): NodeJS.WritableStream
    function pipeline(
      stream1: NodeJS.ReadableStream,
      stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
      ...streams: Array<
        | NodeJS.ReadWriteStream
        | NodeJS.WritableStream
        | ((err: NodeJS.ErrnoException | null) => void)
      >
    ): NodeJS.WritableStream
    namespace pipeline {
      function __promisify__<A extends PipelineSource<any>, B extends PipelineDestination<A, any>>(
        source: A,
        destination: B,
        options?: PipelineOptions
      ): PipelinePromise<B>
      function __promisify__<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        B extends PipelineDestination<T1, any>
      >(source: A, transform1: T1, destination: B, options?: PipelineOptions): PipelinePromise<B>
      function __promisify__<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        B extends PipelineDestination<T2, any>
      >(
        source: A,
        transform1: T1,
        transform2: T2,
        destination: B,
        options?: PipelineOptions
      ): PipelinePromise<B>
      function __promisify__<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        B extends PipelineDestination<T3, any>
      >(
        source: A,
        transform1: T1,
        transform2: T2,
        transform3: T3,
        destination: B,
        options?: PipelineOptions
      ): PipelinePromise<B>
      function __promisify__<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        T4 extends PipelineTransform<T3, any>,
        B extends PipelineDestination<T4, any>
      >(
        source: A,
        transform1: T1,
        transform2: T2,
        transform3: T3,
        transform4: T4,
        destination: B,
        options?: PipelineOptions
      ): PipelinePromise<B>
      function __promisify__(
        streams: ReadonlyArray<
          NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream
        >,
        options?: PipelineOptions
      ): Promise<void>
      function __promisify__(
        stream1: NodeJS.ReadableStream,
        stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
        ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream | PipelineOptions>
      ): Promise<void>
    }
    interface Pipe {
      close(): void
      hasRef(): boolean
      ref(): void
      unref(): void
    }
    const promises: typeof streamPromises
    const consumers: typeof streamConsumers
  }
  export = internal
}
declare module 'node:stream' {
  import stream = require('stream')
  export = stream
}
declare module 'string_decoder' {
  class StringDecoder {
    constructor(encoding?: BufferEncoding)
    write(buffer: Buffer): string
    end(buffer?: Buffer): string
  }
}
declare module 'node:string_decoder' {
  export * from 'string_decoder'
}
declare module 'tls' {
  import { X509Certificate } from 'node:crypto'
  import * as net from 'node:net'
  import * as stream from 'stream'
  const CLIENT_RENEG_LIMIT: number
  const CLIENT_RENEG_WINDOW: number
  interface Certificate {
    C: string
    ST: string
    L: string
    O: string
    OU: string
    CN: string
  }
  interface PeerCertificate {
    subject: Certificate
    issuer: Certificate
    subjectaltname: string
    infoAccess: NodeJS.Dict<string[]>
    modulus: string
    exponent: string
    valid_from: string
    valid_to: string
    fingerprint: string
    fingerprint256: string
    ext_key_usage: string[]
    serialNumber: string
    raw: Buffer
  }
  interface DetailedPeerCertificate extends PeerCertificate {
    issuerCertificate: DetailedPeerCertificate
  }
  interface CipherNameAndProtocol {
    name: string
    version: string
    standardName: string
  }
  interface EphemeralKeyInfo {
    type: string
    name?: string | undefined
    size: number
  }
  interface KeyObject {
    pem: string | Buffer
    passphrase?: string | undefined
  }
  interface PxfObject {
    buf: string | Buffer
    passphrase?: string | undefined
  }
  interface TLSSocketOptions extends SecureContextOptions, CommonConnectionOptions {
    isServer?: boolean | undefined
    server?: net.Server | undefined
    session?: Buffer | undefined
    requestOCSP?: boolean | undefined
  }
  class TLSSocket extends net.Socket {
    constructor(socket: net.Socket, options?: TLSSocketOptions)
    authorized: boolean
    authorizationError: Error
    encrypted: boolean
    alpnProtocol: string | false | null
    getCertificate(): PeerCertificate | object | null
    getCipher(): CipherNameAndProtocol
    getEphemeralKeyInfo(): EphemeralKeyInfo | object | null
    getFinished(): Buffer | undefined
    getPeerCertificate(detailed: true): DetailedPeerCertificate
    getPeerCertificate(detailed?: false): PeerCertificate
    getPeerCertificate(detailed?: boolean): PeerCertificate | DetailedPeerCertificate
    getPeerFinished(): Buffer | undefined
    getProtocol(): string | null
    getSession(): Buffer | undefined
    getSharedSigalgs(): string[]
    getTLSTicket(): Buffer | undefined
    isSessionReused(): boolean
    renegotiate(
      options: {
        rejectUnauthorized?: boolean | undefined
        requestCert?: boolean | undefined
      },
      callback: (err: Error | null) => void
    ): undefined | boolean
    setMaxSendFragment(size: number): boolean
    disableRenegotiation(): void
    enableTrace(): void
    getPeerX509Certificate(): X509Certificate | undefined
    getX509Certificate(): X509Certificate | undefined
    exportKeyingMaterial(length: number, label: string, context: Buffer): Buffer
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'OCSPResponse', listener: (response: Buffer) => void): this
    addListener(event: 'secureConnect', listener: () => void): this
    addListener(event: 'session', listener: (session: Buffer) => void): this
    addListener(event: 'keylog', listener: (line: Buffer) => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'OCSPResponse', response: Buffer): boolean
    emit(event: 'secureConnect'): boolean
    emit(event: 'session', session: Buffer): boolean
    emit(event: 'keylog', line: Buffer): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'OCSPResponse', listener: (response: Buffer) => void): this
    on(event: 'secureConnect', listener: () => void): this
    on(event: 'session', listener: (session: Buffer) => void): this
    on(event: 'keylog', listener: (line: Buffer) => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'OCSPResponse', listener: (response: Buffer) => void): this
    once(event: 'secureConnect', listener: () => void): this
    once(event: 'session', listener: (session: Buffer) => void): this
    once(event: 'keylog', listener: (line: Buffer) => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'OCSPResponse', listener: (response: Buffer) => void): this
    prependListener(event: 'secureConnect', listener: () => void): this
    prependListener(event: 'session', listener: (session: Buffer) => void): this
    prependListener(event: 'keylog', listener: (line: Buffer) => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'OCSPResponse', listener: (response: Buffer) => void): this
    prependOnceListener(event: 'secureConnect', listener: () => void): this
    prependOnceListener(event: 'session', listener: (session: Buffer) => void): this
    prependOnceListener(event: 'keylog', listener: (line: Buffer) => void): this
  }
  interface CommonConnectionOptions {
    secureContext?: SecureContext | undefined
    enableTrace?: boolean | undefined
    requestCert?: boolean | undefined
    ALPNProtocols?: string[] | Uint8Array[] | Uint8Array | undefined
    SNICallback?:
      | ((servername: string, cb: (err: Error | null, ctx?: SecureContext) => void) => void)
      | undefined
    rejectUnauthorized?: boolean | undefined
  }
  interface TlsOptions extends SecureContextOptions, CommonConnectionOptions, net.ServerOpts {
    handshakeTimeout?: number | undefined
    sessionTimeout?: number | undefined
    ticketKeys?: Buffer | undefined
    pskCallback?(socket: TLSSocket, identity: string): DataView | NodeJS.TypedArray | null
    pskIdentityHint?: string | undefined
  }
  interface PSKCallbackNegotation {
    psk: DataView | NodeJS.TypedArray
    identity: string
  }
  interface ConnectionOptions extends SecureContextOptions, CommonConnectionOptions {
    host?: string | undefined
    port?: number | undefined
    path?: string | undefined
    socket?: stream.Duplex | undefined
    checkServerIdentity?: typeof checkServerIdentity | undefined
    servername?: string | undefined
    session?: Buffer | undefined
    minDHSize?: number | undefined
    lookup?: net.LookupFunction | undefined
    timeout?: number | undefined
    pskCallback?(hint: string | null): PSKCallbackNegotation | null
  }
  class Server extends net.Server {
    constructor(secureConnectionListener?: (socket: TLSSocket) => void)
    constructor(options: TlsOptions, secureConnectionListener?: (socket: TLSSocket) => void)
    addContext(hostname: string, context: SecureContextOptions): void
    getTicketKeys(): Buffer
    setSecureContext(options: SecureContextOptions): void
    setTicketKeys(keys: Buffer): void
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this
    addListener(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    addListener(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    addListener(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    addListener(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this
    addListener(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'tlsClientError', err: Error, tlsSocket: TLSSocket): boolean
    emit(
      event: 'newSession',
      sessionId: Buffer,
      sessionData: Buffer,
      callback: (err: Error, resp: Buffer) => void
    ): boolean
    emit(
      event: 'OCSPRequest',
      certificate: Buffer,
      issuer: Buffer,
      callback: (err: Error | null, resp: Buffer) => void
    ): boolean
    emit(
      event: 'resumeSession',
      sessionId: Buffer,
      callback: (err: Error, sessionData: Buffer) => void
    ): boolean
    emit(event: 'secureConnection', tlsSocket: TLSSocket): boolean
    emit(event: 'keylog', line: Buffer, tlsSocket: TLSSocket): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this
    on(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    on(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    on(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    on(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this
    on(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'tlsClientError', listener: (err: Error, tlsSocket: TLSSocket) => void): this
    once(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    once(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    once(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    once(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this
    once(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(
      event: 'tlsClientError',
      listener: (err: Error, tlsSocket: TLSSocket) => void
    ): this
    prependListener(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    prependListener(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    prependListener(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    prependListener(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this
    prependListener(event: 'keylog', listener: (line: Buffer, tlsSocket: TLSSocket) => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(
      event: 'tlsClientError',
      listener: (err: Error, tlsSocket: TLSSocket) => void
    ): this
    prependOnceListener(
      event: 'newSession',
      listener: (
        sessionId: Buffer,
        sessionData: Buffer,
        callback: (err: Error, resp: Buffer) => void
      ) => void
    ): this
    prependOnceListener(
      event: 'OCSPRequest',
      listener: (
        certificate: Buffer,
        issuer: Buffer,
        callback: (err: Error | null, resp: Buffer) => void
      ) => void
    ): this
    prependOnceListener(
      event: 'resumeSession',
      listener: (sessionId: Buffer, callback: (err: Error, sessionData: Buffer) => void) => void
    ): this
    prependOnceListener(event: 'secureConnection', listener: (tlsSocket: TLSSocket) => void): this
    prependOnceListener(
      event: 'keylog',
      listener: (line: Buffer, tlsSocket: TLSSocket) => void
    ): this
  }
  interface SecurePair {
    encrypted: TLSSocket
    cleartext: TLSSocket
  }
  type SecureVersion = 'TLSv1.3' | 'TLSv1.2' | 'TLSv1.1' | 'TLSv1'
  interface SecureContextOptions {
    ca?: string | Buffer | Array<string | Buffer> | undefined
    cert?: string | Buffer | Array<string | Buffer> | undefined
    sigalgs?: string | undefined
    ciphers?: string | undefined
    clientCertEngine?: string | undefined
    crl?: string | Buffer | Array<string | Buffer> | undefined
    dhparam?: string | Buffer | undefined
    ecdhCurve?: string | undefined
    honorCipherOrder?: boolean | undefined
    key?: string | Buffer | Array<string | Buffer | KeyObject> | undefined
    privateKeyEngine?: string | undefined
    privateKeyIdentifier?: string | undefined
    maxVersion?: SecureVersion | undefined
    minVersion?: SecureVersion | undefined
    passphrase?: string | undefined
    pfx?: string | Buffer | Array<string | Buffer | PxfObject> | undefined
    secureOptions?: number | undefined
    secureProtocol?: string | undefined
    sessionIdContext?: string | undefined
    ticketKeys?: Buffer | undefined
    sessionTimeout?: number | undefined
  }
  interface SecureContext {
    context: any
  }
  function checkServerIdentity(hostname: string, cert: PeerCertificate): Error | undefined
  function createServer(secureConnectionListener?: (socket: TLSSocket) => void): Server
  function createServer(
    options: TlsOptions,
    secureConnectionListener?: (socket: TLSSocket) => void
  ): Server
  function connect(options: ConnectionOptions, secureConnectListener?: () => void): TLSSocket
  function connect(
    port: number,
    host?: string,
    options?: ConnectionOptions,
    secureConnectListener?: () => void
  ): TLSSocket
  function connect(
    port: number,
    options?: ConnectionOptions,
    secureConnectListener?: () => void
  ): TLSSocket
  function createSecurePair(
    context?: SecureContext,
    isServer?: boolean,
    requestCert?: boolean,
    rejectUnauthorized?: boolean
  ): SecurePair
  function createSecureContext(options?: SecureContextOptions): SecureContext
  function getCiphers(): string[]
  let DEFAULT_ECDH_CURVE: string
  let DEFAULT_MAX_VERSION: SecureVersion
  let DEFAULT_MIN_VERSION: SecureVersion
  const rootCertificates: ReadonlyArray<string>
}
declare module 'node:tls' {
  export * from 'tls'
}
declare module 'trace_events' {
  interface Tracing {
    readonly categories: string
    disable(): void
    enable(): void
    readonly enabled: boolean
  }
  interface CreateTracingOptions {
    categories: string[]
  }
  function createTracing(options: CreateTracingOptions): Tracing
  function getEnabledCategories(): string | undefined
}
declare module 'node:trace_events' {
  export * from 'trace_events'
}
declare module 'tty' {
  import * as net from 'node:net'
  function isatty(fd: number): boolean
  class ReadStream extends net.Socket {
    constructor(fd: number, options?: net.SocketConstructorOpts)
    isRaw: boolean
    setRawMode(mode: boolean): this
    isTTY: boolean
  }
  type Direction = -1 | 0 | 1
  class WriteStream extends net.Socket {
    constructor(fd: number)
    addListener(event: string, listener: (...args: any[]) => void): this
    addListener(event: 'resize', listener: () => void): this
    emit(event: string | symbol, ...args: any[]): boolean
    emit(event: 'resize'): boolean
    on(event: string, listener: (...args: any[]) => void): this
    on(event: 'resize', listener: () => void): this
    once(event: string, listener: (...args: any[]) => void): this
    once(event: 'resize', listener: () => void): this
    prependListener(event: string, listener: (...args: any[]) => void): this
    prependListener(event: 'resize', listener: () => void): this
    prependOnceListener(event: string, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'resize', listener: () => void): this
    clearLine(dir: Direction, callback?: () => void): boolean
    clearScreenDown(callback?: () => void): boolean
    cursorTo(x: number, y?: number, callback?: () => void): boolean
    cursorTo(x: number, callback: () => void): boolean
    moveCursor(dx: number, dy: number, callback?: () => void): boolean
    getColorDepth(env?: object): number
    hasColors(count?: number): boolean
    hasColors(env?: object): boolean
    hasColors(count: number, env?: object): boolean
    getWindowSize(): [number, number]
    columns: number
    rows: number
    isTTY: boolean
  }
}
declare module 'node:tty' {
  export * from 'tty'
}
declare module 'url' {
  import { Blob } from 'node:buffer'
  import { ClientRequestArgs } from 'node:http'
  import { ParsedUrlQuery, ParsedUrlQueryInput } from 'node:querystring'
  interface UrlObject {
    auth?: string | null | undefined
    hash?: string | null | undefined
    host?: string | null | undefined
    hostname?: string | null | undefined
    href?: string | null | undefined
    pathname?: string | null | undefined
    protocol?: string | null | undefined
    search?: string | null | undefined
    slashes?: boolean | null | undefined
    port?: string | number | null | undefined
    query?: string | null | ParsedUrlQueryInput | undefined
  }
  interface Url {
    auth: string | null
    hash: string | null
    host: string | null
    hostname: string | null
    href: string
    path: string | null
    pathname: string | null
    protocol: string | null
    search: string | null
    slashes: boolean | null
    port: string | null
    query: string | null | ParsedUrlQuery
  }
  interface UrlWithParsedQuery extends Url {
    query: ParsedUrlQuery
  }
  interface UrlWithStringQuery extends Url {
    query: string | null
  }
  function parse(urlString: string): UrlWithStringQuery
  function parse(
    urlString: string,
    parseQueryString: false | undefined,
    slashesDenoteHost?: boolean
  ): UrlWithStringQuery
  function parse(
    urlString: string,
    parseQueryString: true,
    slashesDenoteHost?: boolean
  ): UrlWithParsedQuery
  function parse(urlString: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url
  function format(urlObject: URL, options?: URLFormatOptions): string
  function format(urlObject: UrlObject | string): string
  function resolve(from: string, to: string): string
  function domainToASCII(domain: string): string
  function domainToUnicode(domain: string): string
  function fileURLToPath(url: string | URL): string
  function pathToFileURL(path: string): URL
  function urlToHttpOptions(url: URL): ClientRequestArgs
  interface URLFormatOptions {
    auth?: boolean | undefined
    fragment?: boolean | undefined
    search?: boolean | undefined
    unicode?: boolean | undefined
  }
  class URL {
    static createObjectURL(blob: Blob): string
    static revokeObjectURL(objectUrl: string): void
    constructor(input: string, base?: string | URL)
    hash: string
    host: string
    hostname: string
    href: string
    readonly origin: string
    password: string
    pathname: string
    port: string
    protocol: string
    search: string
    readonly searchParams: URLSearchParams
    username: string
    toString(): string
    toJSON(): string
  }
  class URLSearchParams implements Iterable<[string, string]> {
    constructor(
      init?:
        | URLSearchParams
        | string
        | Record<string, string | ReadonlyArray<string>>
        | Iterable<[string, string]>
        | ReadonlyArray<[string, string]>
    )
    append(name: string, value: string): void
    delete(name: string): void
    entries(): IterableIterator<[string, string]>
    forEach<TThis = this>(
      callback: (this: TThis, value: string, name: string, searchParams: URLSearchParams) => void,
      thisArg?: TThis
    ): void
    get(name: string): string | null
    getAll(name: string): string[]
    has(name: string): boolean
    keys(): IterableIterator<string>
    set(name: string, value: string): void
    sort(): void
    toString(): string
    values(): IterableIterator<string>
    [Symbol.iterator](): IterableIterator<[string, string]>
  }
  import { URL as _URL, URLSearchParams as _URLSearchParams } from 'url'
  global {
    interface URLSearchParams extends _URLSearchParams {}
    interface URL extends _URL {}
    interface Global {
      URL: typeof _URL
      URLSearchParams: typeof _URLSearchParams
    }
    var URL: typeof globalThis extends { onmessage: any; URL: infer URL } ? URL : typeof _URL
    var URLSearchParams: typeof globalThis extends {
      onmessage: any
      URLSearchParams: infer URLSearchParams
    }
      ? URLSearchParams
      : typeof _URLSearchParams
  }
}
declare module 'node:url' {
  export * from 'url'
}
declare module 'util' {
  import * as types from 'node:util/types'
  export interface InspectOptions {
    getters?: 'get' | 'set' | boolean | undefined
    showHidden?: boolean | undefined
    depth?: number | null | undefined
    colors?: boolean | undefined
    customInspect?: boolean | undefined
    showProxy?: boolean | undefined
    maxArrayLength?: number | null | undefined
    maxStringLength?: number | null | undefined
    breakLength?: number | undefined
    compact?: boolean | number | undefined
    sorted?: boolean | ((a: string, b: string) => number) | undefined
  }
  export type Style =
    | 'special'
    | 'number'
    | 'bigint'
    | 'boolean'
    | 'undefined'
    | 'null'
    | 'string'
    | 'symbol'
    | 'date'
    | 'regexp'
    | 'module'
  export type CustomInspectFunction = (depth: number, options: InspectOptionsStylized) => string
  export interface InspectOptionsStylized extends InspectOptions {
    stylize(text: string, styleType: Style): string
  }
  export function format(format?: any, ...param: any[]): string
  export function formatWithOptions(
    inspectOptions: InspectOptions,
    format?: any,
    ...param: any[]
  ): string
  export function getSystemErrorName(err: number): string
  export function getSystemErrorMap(): Map<number, [string, string]>
  export function log(string: string): void
  export function toUSVString(string: string): string
  export function inspect(
    object: any,
    showHidden?: boolean,
    depth?: number | null,
    color?: boolean
  ): string
  export function inspect(object: any, options?: InspectOptions): string
  export namespace inspect {
    let colors: NodeJS.Dict<[number, number]>
    let styles: {
      [K in Style]: string
    }
    let defaultOptions: InspectOptions
    let replDefaults: InspectOptions
    const custom: unique symbol
  }
  export function isArray(object: unknown): object is unknown[]
  export function isRegExp(object: unknown): object is RegExp
  export function isDate(object: unknown): object is Date
  export function isError(object: unknown): object is Error
  export function inherits(constructor: unknown, superConstructor: unknown): void
  export type DebugLoggerFunction = (msg: string, ...param: unknown[]) => void
  export interface DebugLogger extends DebugLoggerFunction {
    enabled: boolean
  }
  export function debuglog(
    section: string,
    callback?: (fn: DebugLoggerFunction) => void
  ): DebugLogger
  export const debug: typeof debuglog
  export function isBoolean(object: unknown): object is boolean
  export function isBuffer(object: unknown): object is Buffer
  export function isFunction(object: unknown): boolean
  export function isNull(object: unknown): object is null
  export function isNullOrUndefined(object: unknown): object is null | undefined
  export function isNumber(object: unknown): object is number
  export function isObject(object: unknown): boolean
  export function isPrimitive(object: unknown): boolean
  export function isString(object: unknown): object is string
  export function isSymbol(object: unknown): object is symbol
  export function isUndefined(object: unknown): object is undefined
  export function deprecate<T extends Function>(fn: T, msg: string, code?: string): T
  export function isDeepStrictEqual(val1: unknown, val2: unknown): boolean
  export function stripVTControlCharacters(str: string): string
  export function callbackify(
    fn: () => Promise<void>
  ): (callback: (err: NodeJS.ErrnoException) => void) => void
  export function callbackify<TResult>(
    fn: () => Promise<TResult>
  ): (callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void
  export function callbackify<T1>(
    fn: (arg1: T1) => Promise<void>
  ): (arg1: T1, callback: (err: NodeJS.ErrnoException) => void) => void
  export function callbackify<T1, TResult>(
    fn: (arg1: T1) => Promise<TResult>
  ): (arg1: T1, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void
  export function callbackify<T1, T2>(
    fn: (arg1: T1, arg2: T2) => Promise<void>
  ): (arg1: T1, arg2: T2, callback: (err: NodeJS.ErrnoException) => void) => void
  export function callbackify<T1, T2, TResult>(
    fn: (arg1: T1, arg2: T2) => Promise<TResult>
  ): (
    arg1: T1,
    arg2: T2,
    callback: (err: NodeJS.ErrnoException | null, result: TResult) => void
  ) => void
  export function callbackify<T1, T2, T3>(
    fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>
  ): (arg1: T1, arg2: T2, arg3: T3, callback: (err: NodeJS.ErrnoException) => void) => void
  export function callbackify<T1, T2, T3, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>
  ): (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    callback: (err: NodeJS.ErrnoException | null, result: TResult) => void
  ) => void
  export function callbackify<T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>
  ): (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    callback: (err: NodeJS.ErrnoException) => void
  ) => void
  export function callbackify<T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>
  ): (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    callback: (err: NodeJS.ErrnoException | null, result: TResult) => void
  ) => void
  export function callbackify<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>
  ): (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    callback: (err: NodeJS.ErrnoException) => void
  ) => void
  export function callbackify<T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>
  ): (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    callback: (err: NodeJS.ErrnoException | null, result: TResult) => void
  ) => void
  export function callbackify<T1, T2, T3, T4, T5, T6>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>
  ): (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6,
    callback: (err: NodeJS.ErrnoException) => void
  ) => void
  export function callbackify<T1, T2, T3, T4, T5, T6, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<TResult>
  ): (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6,
    callback: (err: NodeJS.ErrnoException | null, result: TResult) => void
  ) => void
  export interface CustomPromisifyLegacy<TCustom extends Function> extends Function {
    __promisify__: TCustom
  }
  export interface CustomPromisifySymbol<TCustom extends Function> extends Function {
    [promisify.custom]: TCustom
  }
  export type CustomPromisify<TCustom extends Function> =
    | CustomPromisifySymbol<TCustom>
    | CustomPromisifyLegacy<TCustom>
  export function promisify<TCustom extends Function>(fn: CustomPromisify<TCustom>): TCustom
  export function promisify<TResult>(
    fn: (callback: (err: any, result: TResult) => void) => void
  ): () => Promise<TResult>
  export function promisify(fn: (callback: (err?: any) => void) => void): () => Promise<void>
  export function promisify<T1, TResult>(
    fn: (arg1: T1, callback: (err: any, result: TResult) => void) => void
  ): (arg1: T1) => Promise<TResult>
  export function promisify<T1>(
    fn: (arg1: T1, callback: (err?: any) => void) => void
  ): (arg1: T1) => Promise<void>
  export function promisify<T1, T2, TResult>(
    fn: (arg1: T1, arg2: T2, callback: (err: any, result: TResult) => void) => void
  ): (arg1: T1, arg2: T2) => Promise<TResult>
  export function promisify<T1, T2>(
    fn: (arg1: T1, arg2: T2, callback: (err?: any) => void) => void
  ): (arg1: T1, arg2: T2) => Promise<void>
  export function promisify<T1, T2, T3, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: TResult) => void) => void
  ): (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>
  export function promisify<T1, T2, T3>(
    fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: any) => void) => void
  ): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>
  export function promisify<T1, T2, T3, T4, TResult>(
    fn: (
      arg1: T1,
      arg2: T2,
      arg3: T3,
      arg4: T4,
      callback: (err: any, result: TResult) => void
    ) => void
  ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>
  export function promisify<T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: any) => void) => void
  ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>
  export function promisify<T1, T2, T3, T4, T5, TResult>(
    fn: (
      arg1: T1,
      arg2: T2,
      arg3: T3,
      arg4: T4,
      arg5: T5,
      callback: (err: any, result: TResult) => void
    ) => void
  ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>
  export function promisify<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: any) => void) => void
  ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>
  export function promisify(fn: Function): Function
  export namespace promisify {
    const custom: unique symbol
  }
  export class TextDecoder {
    readonly encoding: string
    readonly fatal: boolean
    readonly ignoreBOM: boolean
    constructor(
      encoding?: string,
      options?: {
        fatal?: boolean | undefined
        ignoreBOM?: boolean | undefined
      }
    )
    decode(
      input?: NodeJS.ArrayBufferView | ArrayBuffer | null,
      options?: {
        stream?: boolean | undefined
      }
    ): string
  }
  export interface EncodeIntoResult {
    read: number
    written: number
  }
  export { types }
  export class TextEncoder {
    readonly encoding: string
    encode(input?: string): Uint8Array
    encodeInto(src: string, dest: Uint8Array): EncodeIntoResult
  }
}
declare module 'util/types' {
  export * from 'util/types'
}
declare module 'util/types' {
  import { KeyObject, webcrypto } from 'node:crypto'
  function isAnyArrayBuffer(object: unknown): object is ArrayBufferLike
  function isArgumentsObject(object: unknown): object is IArguments
  function isArrayBuffer(object: unknown): object is ArrayBuffer
  function isArrayBufferView(object: unknown): object is NodeJS.ArrayBufferView
  function isAsyncFunction(object: unknown): boolean
  function isBigInt64Array(value: unknown): value is BigInt64Array
  function isBigUint64Array(value: unknown): value is BigUint64Array
  function isBooleanObject(object: unknown): object is Boolean
  function isBoxedPrimitive(object: unknown): object is String | Number | BigInt | Boolean | Symbol
  function isDataView(object: unknown): object is DataView
  function isDate(object: unknown): object is Date
  function isExternal(object: unknown): boolean
  function isFloat32Array(object: unknown): object is Float32Array
  function isFloat64Array(object: unknown): object is Float64Array
  function isGeneratorFunction(object: unknown): object is GeneratorFunction
  function isGeneratorObject(object: unknown): object is Generator
  function isInt8Array(object: unknown): object is Int8Array
  function isInt16Array(object: unknown): object is Int16Array
  function isInt32Array(object: unknown): object is Int32Array
  function isMap<T>(
    object: T | {}
  ): object is T extends ReadonlyMap<any, any>
    ? unknown extends T
      ? never
      : ReadonlyMap<any, any>
    : Map<unknown, unknown>
  function isMapIterator(object: unknown): boolean
  function isModuleNamespaceObject(value: unknown): boolean
  function isNativeError(object: unknown): object is Error
  function isNumberObject(object: unknown): object is Number
  function isPromise(object: unknown): object is Promise<unknown>
  function isProxy(object: unknown): boolean
  function isRegExp(object: unknown): object is RegExp
  function isSet<T>(
    object: T | {}
  ): object is T extends ReadonlySet<any>
    ? unknown extends T
      ? never
      : ReadonlySet<any>
    : Set<unknown>
  function isSetIterator(object: unknown): boolean
  function isSharedArrayBuffer(object: unknown): object is SharedArrayBuffer
  function isStringObject(object: unknown): object is String
  function isSymbolObject(object: unknown): object is Symbol
  function isTypedArray(object: unknown): object is NodeJS.TypedArray
  function isUint8Array(object: unknown): object is Uint8Array
  function isUint8ClampedArray(object: unknown): object is Uint8ClampedArray
  function isUint16Array(object: unknown): object is Uint16Array
  function isUint32Array(object: unknown): object is Uint32Array
  function isWeakMap(object: unknown): object is WeakMap<object, unknown>
  function isWeakSet(object: unknown): object is WeakSet<object>
  function isKeyObject(object: unknown): object is KeyObject
  function isCryptoKey(object: unknown): object is webcrypto.CryptoKey
}
declare module 'node:util' {
  export * from 'util'
}
declare module 'node:util/types' {
  export * from 'util/types'
}
declare module 'v8' {
  import { Readable } from 'node:stream'
  interface HeapSpaceInfo {
    space_name: string
    space_size: number
    space_used_size: number
    space_available_size: number
    physical_space_size: number
  }
  type DoesZapCodeSpaceFlag = 0 | 1
  interface HeapInfo {
    total_heap_size: number
    total_heap_size_executable: number
    total_physical_size: number
    total_available_size: number
    used_heap_size: number
    heap_size_limit: number
    malloced_memory: number
    peak_malloced_memory: number
    does_zap_garbage: DoesZapCodeSpaceFlag
    number_of_native_contexts: number
    number_of_detached_contexts: number
  }
  interface HeapCodeStatistics {
    code_and_metadata_size: number
    bytecode_and_metadata_size: number
    external_script_source_size: number
  }
  function cachedDataVersionTag(): number
  function getHeapStatistics(): HeapInfo
  function getHeapSpaceStatistics(): HeapSpaceInfo[]
  function setFlagsFromString(flags: string): void
  function getHeapSnapshot(): Readable
  function writeHeapSnapshot(filename?: string): string
  function getHeapCodeStatistics(): HeapCodeStatistics
  class Serializer {
    writeHeader(): void
    writeValue(val: any): boolean
    releaseBuffer(): Buffer
    transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void
    writeUint32(value: number): void
    writeUint64(hi: number, lo: number): void
    writeDouble(value: number): void
    writeRawBytes(buffer: NodeJS.TypedArray): void
  }
  class DefaultSerializer extends Serializer {}
  class Deserializer {
    constructor(data: NodeJS.TypedArray)
    readHeader(): boolean
    readValue(): any
    transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void
    getWireFormatVersion(): number
    readUint32(): number
    readUint64(): [number, number]
    readDouble(): number
    readRawBytes(length: number): Buffer
  }
  class DefaultDeserializer extends Deserializer {}
  function serialize(value: any): Buffer
  function deserialize(buffer: NodeJS.TypedArray): any
  function takeCoverage(): void
  function stopCoverage(): void
}
declare module 'node:v8' {
  export * from 'v8'
}
declare module 'wasi' {
  interface WASIOptions {
    args?: string[] | undefined
    env?: object | undefined
    preopens?: NodeJS.Dict<string> | undefined
    returnOnExit?: boolean | undefined
    stdin?: number | undefined
    stdout?: number | undefined
    stderr?: number | undefined
  }
  class WASI {
    constructor(options?: WASIOptions)
    start(instance: object): void
    initialize(instance: object): void
    readonly wasiImport: NodeJS.Dict<any>
  }
}
declare module 'node:wasi' {
  export * from 'wasi'
}
declare module 'worker_threads' {
  import { Blob } from 'node:buffer'
  import { Context } from 'node:vm'
  import { EventEmitter } from 'node:events'
  import { EventLoopUtilityFunction } from 'node:perf_hooks'
  import { FileHandle } from 'node:fs/promises'
  import { Readable, Writable } from 'node:stream'
  import { URL } from 'node:url'
  import { X509Certificate } from 'node:crypto'
  const isMainThread: boolean
  const parentPort: null | MessagePort
  const resourceLimits: ResourceLimits
  const SHARE_ENV: unique symbol
  const threadId: number
  const workerData: any
  class MessageChannel {
    readonly port1: MessagePort
    readonly port2: MessagePort
  }
  interface WorkerPerformance {
    eventLoopUtilization: EventLoopUtilityFunction
  }
  type TransferListItem = ArrayBuffer | MessagePort | FileHandle | X509Certificate | Blob
  class MessagePort extends EventEmitter {
    close(): void
    postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void
    ref(): void
    unref(): void
    start(): void
    addListener(event: 'close', listener: () => void): this
    addListener(event: 'message', listener: (value: any) => void): this
    addListener(event: 'messageerror', listener: (error: Error) => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'close'): boolean
    emit(event: 'message', value: any): boolean
    emit(event: 'messageerror', error: Error): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'close', listener: () => void): this
    on(event: 'message', listener: (value: any) => void): this
    on(event: 'messageerror', listener: (error: Error) => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'close', listener: () => void): this
    once(event: 'message', listener: (value: any) => void): this
    once(event: 'messageerror', listener: (error: Error) => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'close', listener: () => void): this
    prependListener(event: 'message', listener: (value: any) => void): this
    prependListener(event: 'messageerror', listener: (error: Error) => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'close', listener: () => void): this
    prependOnceListener(event: 'message', listener: (value: any) => void): this
    prependOnceListener(event: 'messageerror', listener: (error: Error) => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
    removeListener(event: 'close', listener: () => void): this
    removeListener(event: 'message', listener: (value: any) => void): this
    removeListener(event: 'messageerror', listener: (error: Error) => void): this
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this
    off(event: 'close', listener: () => void): this
    off(event: 'message', listener: (value: any) => void): this
    off(event: 'messageerror', listener: (error: Error) => void): this
    off(event: string | symbol, listener: (...args: any[]) => void): this
  }
  interface WorkerOptions {
    argv?: any[] | undefined
    env?: NodeJS.Dict<string> | typeof SHARE_ENV | undefined
    eval?: boolean | undefined
    workerData?: any
    stdin?: boolean | undefined
    stdout?: boolean | undefined
    stderr?: boolean | undefined
    execArgv?: string[] | undefined
    resourceLimits?: ResourceLimits | undefined
    transferList?: TransferListItem[] | undefined
    trackUnmanagedFds?: boolean | undefined
  }
  interface ResourceLimits {
    maxYoungGenerationSizeMb?: number | undefined
    maxOldGenerationSizeMb?: number | undefined
    codeRangeSizeMb?: number | undefined
    stackSizeMb?: number | undefined
  }
  class Worker extends EventEmitter {
    readonly stdin: Writable | null
    readonly stdout: Readable
    readonly stderr: Readable
    readonly threadId: number
    readonly resourceLimits?: ResourceLimits | undefined
    readonly performance: WorkerPerformance
    constructor(filename: string | URL, options?: WorkerOptions)
    postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void
    ref(): void
    unref(): void
    terminate(): Promise<number>
    getHeapSnapshot(): Promise<Readable>
    addListener(event: 'error', listener: (err: Error) => void): this
    addListener(event: 'exit', listener: (exitCode: number) => void): this
    addListener(event: 'message', listener: (value: any) => void): this
    addListener(event: 'messageerror', listener: (error: Error) => void): this
    addListener(event: 'online', listener: () => void): this
    addListener(event: string | symbol, listener: (...args: any[]) => void): this
    emit(event: 'error', err: Error): boolean
    emit(event: 'exit', exitCode: number): boolean
    emit(event: 'message', value: any): boolean
    emit(event: 'messageerror', error: Error): boolean
    emit(event: 'online'): boolean
    emit(event: string | symbol, ...args: any[]): boolean
    on(event: 'error', listener: (err: Error) => void): this
    on(event: 'exit', listener: (exitCode: number) => void): this
    on(event: 'message', listener: (value: any) => void): this
    on(event: 'messageerror', listener: (error: Error) => void): this
    on(event: 'online', listener: () => void): this
    on(event: string | symbol, listener: (...args: any[]) => void): this
    once(event: 'error', listener: (err: Error) => void): this
    once(event: 'exit', listener: (exitCode: number) => void): this
    once(event: 'message', listener: (value: any) => void): this
    once(event: 'messageerror', listener: (error: Error) => void): this
    once(event: 'online', listener: () => void): this
    once(event: string | symbol, listener: (...args: any[]) => void): this
    prependListener(event: 'error', listener: (err: Error) => void): this
    prependListener(event: 'exit', listener: (exitCode: number) => void): this
    prependListener(event: 'message', listener: (value: any) => void): this
    prependListener(event: 'messageerror', listener: (error: Error) => void): this
    prependListener(event: 'online', listener: () => void): this
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this
    prependOnceListener(event: 'error', listener: (err: Error) => void): this
    prependOnceListener(event: 'exit', listener: (exitCode: number) => void): this
    prependOnceListener(event: 'message', listener: (value: any) => void): this
    prependOnceListener(event: 'messageerror', listener: (error: Error) => void): this
    prependOnceListener(event: 'online', listener: () => void): this
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this
    removeListener(event: 'error', listener: (err: Error) => void): this
    removeListener(event: 'exit', listener: (exitCode: number) => void): this
    removeListener(event: 'message', listener: (value: any) => void): this
    removeListener(event: 'messageerror', listener: (error: Error) => void): this
    removeListener(event: 'online', listener: () => void): this
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this
    off(event: 'error', listener: (err: Error) => void): this
    off(event: 'exit', listener: (exitCode: number) => void): this
    off(event: 'message', listener: (value: any) => void): this
    off(event: 'messageerror', listener: (error: Error) => void): this
    off(event: 'online', listener: () => void): this
    off(event: string | symbol, listener: (...args: any[]) => void): this
  }
  interface BroadcastChannel extends NodeJS.RefCounted {}
  class BroadcastChannel {
    readonly name: string
    onmessage: (message: unknown) => void
    onmessageerror: (message: unknown) => void
    constructor(name: string)
    close(): void
    postMessage(message: unknown): void
  }
  function markAsUntransferable(object: object): void
  function moveMessagePortToContext(port: MessagePort, contextifiedSandbox: Context): MessagePort
  function receiveMessageOnPort(port: MessagePort):
    | {
        message: any
      }
    | undefined
  type Serializable = string | object | number | boolean | bigint
  function getEnvironmentData(key: Serializable): Serializable
  function setEnvironmentData(key: Serializable, value: Serializable): void
}
declare module 'node:worker_threads' {
  export * from 'worker_threads'
}
declare module 'zlib' {
  import * as stream from 'node:stream'
  interface ZlibOptions {
    flush?: number | undefined
    finishFlush?: number | undefined
    chunkSize?: number | undefined
    windowBits?: number | undefined
    level?: number | undefined
    memLevel?: number | undefined
    strategy?: number | undefined
    dictionary?: NodeJS.ArrayBufferView | ArrayBuffer | undefined
    info?: boolean | undefined
    maxOutputLength?: number | undefined
  }
  interface BrotliOptions {
    flush?: number | undefined
    finishFlush?: number | undefined
    chunkSize?: number | undefined
    params?:
      | {
          [key: number]: boolean | number
        }
      | undefined
    maxOutputLength?: number | undefined
  }
  interface Zlib {
    readonly bytesRead: number
    readonly bytesWritten: number
    shell?: boolean | string | undefined
    close(callback?: () => void): void
    flush(kind?: number, callback?: () => void): void
    flush(callback?: () => void): void
  }
  interface ZlibParams {
    params(level: number, strategy: number, callback: () => void): void
  }
  interface ZlibReset {
    reset(): void
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
  function createBrotliCompress(options?: BrotliOptions): BrotliCompress
  function createBrotliDecompress(options?: BrotliOptions): BrotliDecompress
  function createGzip(options?: ZlibOptions): Gzip
  function createGunzip(options?: ZlibOptions): Gunzip
  function createDeflate(options?: ZlibOptions): Deflate
  function createInflate(options?: ZlibOptions): Inflate
  function createDeflateRaw(options?: ZlibOptions): DeflateRaw
  function createInflateRaw(options?: ZlibOptions): InflateRaw
  function createUnzip(options?: ZlibOptions): Unzip
  type InputType = string | ArrayBuffer | NodeJS.ArrayBufferView
  type CompressCallback = (error: Error | null, result: Buffer) => void
  function brotliCompress(buf: InputType, options: BrotliOptions, callback: CompressCallback): void
  function brotliCompress(buf: InputType, callback: CompressCallback): void
  namespace brotliCompress {
    function __promisify__(buffer: InputType, options?: BrotliOptions): Promise<Buffer>
  }
  function brotliCompressSync(buf: InputType, options?: BrotliOptions): Buffer
  function brotliDecompress(
    buf: InputType,
    options: BrotliOptions,
    callback: CompressCallback
  ): void
  function brotliDecompress(buf: InputType, callback: CompressCallback): void
  namespace brotliDecompress {
    function __promisify__(buffer: InputType, options?: BrotliOptions): Promise<Buffer>
  }
  function brotliDecompressSync(buf: InputType, options?: BrotliOptions): Buffer
  function deflate(buf: InputType, callback: CompressCallback): void
  function deflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void
  namespace deflate {
    function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>
  }
  function deflateSync(buf: InputType, options?: ZlibOptions): Buffer
  function deflateRaw(buf: InputType, callback: CompressCallback): void
  function deflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void
  namespace deflateRaw {
    function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>
  }
  function deflateRawSync(buf: InputType, options?: ZlibOptions): Buffer
  function gzip(buf: InputType, callback: CompressCallback): void
  function gzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void
  namespace gzip {
    function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>
  }
  function gzipSync(buf: InputType, options?: ZlibOptions): Buffer
  function gunzip(buf: InputType, callback: CompressCallback): void
  function gunzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void
  namespace gunzip {
    function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>
  }
  function gunzipSync(buf: InputType, options?: ZlibOptions): Buffer
  function inflate(buf: InputType, callback: CompressCallback): void
  function inflate(buf: InputType, options: ZlibOptions, callback: CompressCallback): void
  namespace inflate {
    function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>
  }
  function inflateSync(buf: InputType, options?: ZlibOptions): Buffer
  function inflateRaw(buf: InputType, callback: CompressCallback): void
  function inflateRaw(buf: InputType, options: ZlibOptions, callback: CompressCallback): void
  namespace inflateRaw {
    function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>
  }
  function inflateRawSync(buf: InputType, options?: ZlibOptions): Buffer
  function unzip(buf: InputType, callback: CompressCallback): void
  function unzip(buf: InputType, options: ZlibOptions, callback: CompressCallback): void
  namespace unzip {
    function __promisify__(buffer: InputType, options?: ZlibOptions): Promise<Buffer>
  }
  function unzipSync(buf: InputType, options?: ZlibOptions): Buffer
  namespace constants {
    const BROTLI_DECODE: number
    const BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: number
    const BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: number
    const BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: number
    const BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: number
    const BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: number
    const BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: number
    const BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: number
    const BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: number
    const BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: number
    const BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: number
    const BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: number
    const BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: number
    const BROTLI_DECODER_ERROR_FORMAT_DISTANCE: number
    const BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: number
    const BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: number
    const BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: number
    const BROTLI_DECODER_ERROR_FORMAT_PADDING_1: number
    const BROTLI_DECODER_ERROR_FORMAT_PADDING_2: number
    const BROTLI_DECODER_ERROR_FORMAT_RESERVED: number
    const BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: number
    const BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: number
    const BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: number
    const BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: number
    const BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: number
    const BROTLI_DECODER_ERROR_UNREACHABLE: number
    const BROTLI_DECODER_NEEDS_MORE_INPUT: number
    const BROTLI_DECODER_NEEDS_MORE_OUTPUT: number
    const BROTLI_DECODER_NO_ERROR: number
    const BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: number
    const BROTLI_DECODER_PARAM_LARGE_WINDOW: number
    const BROTLI_DECODER_RESULT_ERROR: number
    const BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: number
    const BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: number
    const BROTLI_DECODER_RESULT_SUCCESS: number
    const BROTLI_DECODER_SUCCESS: number
    const BROTLI_DEFAULT_MODE: number
    const BROTLI_DEFAULT_QUALITY: number
    const BROTLI_DEFAULT_WINDOW: number
    const BROTLI_ENCODE: number
    const BROTLI_LARGE_MAX_WINDOW_BITS: number
    const BROTLI_MAX_INPUT_BLOCK_BITS: number
    const BROTLI_MAX_QUALITY: number
    const BROTLI_MAX_WINDOW_BITS: number
    const BROTLI_MIN_INPUT_BLOCK_BITS: number
    const BROTLI_MIN_QUALITY: number
    const BROTLI_MIN_WINDOW_BITS: number
    const BROTLI_MODE_FONT: number
    const BROTLI_MODE_GENERIC: number
    const BROTLI_MODE_TEXT: number
    const BROTLI_OPERATION_EMIT_METADATA: number
    const BROTLI_OPERATION_FINISH: number
    const BROTLI_OPERATION_FLUSH: number
    const BROTLI_OPERATION_PROCESS: number
    const BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: number
    const BROTLI_PARAM_LARGE_WINDOW: number
    const BROTLI_PARAM_LGBLOCK: number
    const BROTLI_PARAM_LGWIN: number
    const BROTLI_PARAM_MODE: number
    const BROTLI_PARAM_NDIRECT: number
    const BROTLI_PARAM_NPOSTFIX: number
    const BROTLI_PARAM_QUALITY: number
    const BROTLI_PARAM_SIZE_HINT: number
    const DEFLATE: number
    const DEFLATERAW: number
    const GUNZIP: number
    const GZIP: number
    const INFLATE: number
    const INFLATERAW: number
    const UNZIP: number
    const Z_NO_FLUSH: number
    const Z_PARTIAL_FLUSH: number
    const Z_SYNC_FLUSH: number
    const Z_FULL_FLUSH: number
    const Z_FINISH: number
    const Z_BLOCK: number
    const Z_TREES: number
    const Z_OK: number
    const Z_STREAM_END: number
    const Z_NEED_DICT: number
    const Z_ERRNO: number
    const Z_STREAM_ERROR: number
    const Z_DATA_ERROR: number
    const Z_MEM_ERROR: number
    const Z_BUF_ERROR: number
    const Z_VERSION_ERROR: number
    const Z_NO_COMPRESSION: number
    const Z_BEST_SPEED: number
    const Z_BEST_COMPRESSION: number
    const Z_DEFAULT_COMPRESSION: number
    const Z_FILTERED: number
    const Z_HUFFMAN_ONLY: number
    const Z_RLE: number
    const Z_FIXED: number
    const Z_DEFAULT_STRATEGY: number
    const Z_DEFAULT_WINDOWBITS: number
    const Z_MIN_WINDOWBITS: number
    const Z_MAX_WINDOWBITS: number
    const Z_MIN_CHUNK: number
    const Z_MAX_CHUNK: number
    const Z_DEFAULT_CHUNK: number
    const Z_MIN_MEMLEVEL: number
    const Z_MAX_MEMLEVEL: number
    const Z_DEFAULT_MEMLEVEL: number
    const Z_MIN_LEVEL: number
    const Z_MAX_LEVEL: number
    const Z_DEFAULT_LEVEL: number
    const ZLIB_VERNUM: number
  }
  const Z_NO_FLUSH: number
  const Z_PARTIAL_FLUSH: number
  const Z_SYNC_FLUSH: number
  const Z_FULL_FLUSH: number
  const Z_FINISH: number
  const Z_BLOCK: number
  const Z_TREES: number
  const Z_OK: number
  const Z_STREAM_END: number
  const Z_NEED_DICT: number
  const Z_ERRNO: number
  const Z_STREAM_ERROR: number
  const Z_DATA_ERROR: number
  const Z_MEM_ERROR: number
  const Z_BUF_ERROR: number
  const Z_VERSION_ERROR: number
  const Z_NO_COMPRESSION: number
  const Z_BEST_SPEED: number
  const Z_BEST_COMPRESSION: number
  const Z_DEFAULT_COMPRESSION: number
  const Z_FILTERED: number
  const Z_HUFFMAN_ONLY: number
  const Z_RLE: number
  const Z_FIXED: number
  const Z_DEFAULT_STRATEGY: number
  const Z_BINARY: number
  const Z_TEXT: number
  const Z_ASCII: number
  const Z_UNKNOWN: number
  const Z_DEFLATED: number
}
declare module 'node:zlib' {
  export * from 'zlib'
}
interface ErrorConstructor {
  captureStackTrace(targetObject: object, constructorOpt?: Function): void
  prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined
  stackTraceLimit: number
}
interface NodeRequire extends NodeJS.Require {}
interface RequireResolve extends NodeJS.RequireResolve {}
interface NodeModule extends NodeJS.Module {}
declare var require: NodeRequire
declare var module: NodeModule
declare var exports: any
declare var gc: undefined | (() => void)
interface AbortController {
  readonly signal: AbortSignal
  abort(): void
}
interface AbortSignal {
  readonly aborted: boolean
}
declare var AbortController: {
  prototype: AbortController
  new (): AbortController
}
declare var AbortSignal: {
  prototype: AbortSignal
  new (): AbortSignal
}
interface RelativeIndexable<T> {
  at(index: number): T | undefined
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
    getThis(): unknown
    getTypeName(): string | null
    getFunction(): Function | undefined
    getFunctionName(): string | null
    getMethodName(): string | null
    getFileName(): string | null
    getLineNumber(): number | null
    getColumnNumber(): number | null
    getEvalOrigin(): string | undefined
    isToplevel(): boolean
    isEval(): boolean
    isNative(): boolean
    isConstructor(): boolean
  }
  interface ErrnoException extends Error {
    errno?: number | undefined
    code?: string | undefined
    path?: string | undefined
    syscall?: string | undefined
  }
  interface ReadableStream extends EventEmitter {
    readable: boolean
    read(size?: number): string | Buffer
    setEncoding(encoding: BufferEncoding): this
    pause(): this
    resume(): this
    isPaused(): boolean
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean | undefined }): T
    unpipe(destination?: WritableStream): this
    unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void
    wrap(oldStream: ReadableStream): this
    [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer>
  }
  interface WritableStream extends EventEmitter {
    writable: boolean
    write(buffer: Uint8Array | string, cb?: (err?: Error | null) => void): boolean
    write(str: string, encoding?: BufferEncoding, cb?: (err?: Error | null) => void): boolean
    end(cb?: () => void): this
    end(data: string | Uint8Array, cb?: () => void): this
    end(str: string, encoding?: BufferEncoding, cb?: () => void): this
  }
  interface ReadWriteStream extends ReadableStream, WritableStream {}
  interface RefCounted {
    ref(): this
    unref(): this
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
    | Float64Array
  type ArrayBufferView = TypedArray | DataView
  interface Require {
    (id: string): any
    resolve: RequireResolve
    cache: Dict<NodeModule>
    extensions: RequireExtensions
    main: Module | undefined
  }
  interface RequireResolve {
    (id: string, options?: { paths?: string[] | undefined }): string
    paths(request: string): string[] | null
  }
  interface RequireExtensions extends Dict<(m: Module, filename: string) => any> {
    '.js': (m: Module, filename: string) => any
    '.json': (m: Module, filename: string) => any
    '.node': (m: Module, filename: string) => any
  }
  interface Module {
    isPreloading: boolean
    exports: any
    require: Require
    id: string
    filename: string
    loaded: boolean
    parent: Module | null | undefined
    children: Module[]
    path: string
    paths: string[]
  }
  interface Dict<T> {
    [key: string]: T | undefined
  }
  interface ReadOnlyDict<T> {
    readonly [key: string]: T | undefined
  }
}
`,fa=`declare module "electron" {
  type ClipboardType = 'selection' | 'clipboard'
  module clipboard {
    function availableFormats(type?: ClipboardType): void
    function clear(type?: ClipboardType): void
    function has(fmt: string, type?: ClipboardType): boolean
    function read(fmt: string): string
    function readBookmark(): {
      title: string
      url: string
    }

    function readBuffer(fmt: string): Uint8Array
    function readHTML(type?: ClipboardType): string
    function readImage(type?: ClipboardType): BrowserWindow.NativeImage
    function readRTF(type?: ClipboardType): string
    function readText(type?: ClipboardType): string
    function write(data: {
      text?: string
      html?: string
      image?: BrowserWindow.NativeImage
      rtf?: string
      bookmark?: string
    }, type?: ClipboardType): void
    function writeBookmark(title: string, url: string, type?: ClipboardType): void
    function writeBuffer(fmt: string, buffer: Uint8Array, type?: ClipboardType): void
    function writeHTML(markup: string, type?: ClipboardType): void
    function writeImage(img: BrowserWindow.NativeImage, type?: ClipboardType): void
    function writeRTF(text: string, type?: ClipboardType): void
    function writeText(text: string, type?: ClipboardType): void
  }
  interface UIpcSendEventInit {
    senderId: number
  }
  type UIpcSendEventListener<T extends any[]> = (event: UIpcSendEventInit, ...args: T) => void
  module ipcRenderer {
    function on<T extends any[] = any[]>(channel: string, listener: UIpcSendEventListener<T>): void
    function once<T extends any[] = any[]>(channel: string, listener: UIpcSendEventListener<T>): void
    function off<T extends any[] = any[]>(channel: string, listener: UIpcSendEventListener<T>): void
    function sendTo<T extends any[] = any[]>(id: number, channel: string, ...args: T): void
  }

  module contextBridge { }

  module webFrame { }

  module shell { }

  module nativeImage {
    type NativeImage = BrowserWindow.NativeImage
    function createEmpty(): NativeImage
    function createFromPath(path: string): NativeImage
    function createFromBitmap(buffer: Uint8Array, options: {
      width: number
      height: number
      scaleFator?: number
    }): NativeImage
    function createFromBuffer(buffer: Uint8Array, options?: {
      width?: number
      height?: number
      scaleFator?: number
    }): NativeImage
    function createFromDataURL(dataURL: string): NativeImage

  }
}
`,pa=`declare module BrowserWindow {
  interface WebPreferences {
    devTools?: boolean
    preload?: string
    zoomFactor: number
    [key: string]: any
  }

  interface InitOptions {
    width?: number
    height?: number
    webPreferences: WebPreferences
    show?: boolean
    title?: string
    x?: number
    y?: number
    center?: boolean
    resizable?: boolean
    fullscreen?: boolean
    fullscreenable?: boolean
    skipTaskbar?: true
    closable?: boolean
    frame?: boolean
    alwayOnTop?: boolean
    [key: string]: any
  }

  interface NativeImage {
    toPng: (options?: { scaleFator?: number }) => Uint8Array
    toJPEG: (options?: { quality?: number }) => Uint8Array
    isEmpty: () => boolean
    [key: string]: any
  }

  interface PrinterSync {
    description: string
    displayName: string
    isDefault: boolean
    status: number
    options?: {
      'printer-location'?: string
      'printer-make-and-model'?: string
      system_driverinfo?: string
    }
  }

  type WebRTCIPHandlingPolicy =
    | 'default'
    | 'default_public_interface_only'
    | 'default_public_and_private_interfaces'
    | 'disable_non_proxied_udp'

  interface WebContents {
    id: number
    capturePage: () => Promise<NativeImage>
    closeDevTools: () => void
    copy: () => void
    copyImageAt: (x: number, y: number) => void
    cut: () => void
    /**
     * @deprecated
     */
    decrementCapturerCount: () => any
    delete: () => void
    disableDeviceEmulation: () => void
    enableDeviceEmulation: () => void
    executeJavaScript: <T>(code: string, userGesture?: boolean) => Promise<T>
    findInPage: (
      text: string,
      options?: {
        forward?: boolean
        findNext?: boolean
        matchCase?: boolean
      }
    ) => number
    focus: () => void
    getBackgroundThrottling: () => boolean
    getFrameRate: () => number
    getOSProcessId: () => number
    getPrinters: () => PrinterSync[]
    getProcessId: () => number
    getUserAgent: () => string
    getWebRTCIPHandlingPolicy: () => WebRTCIPHandlingPolicy
    getZoomFactor: () => number
    /**
     * @deprecated
     */
    incrementCapturerCount: () => any
    insertCSS: (
      css: string,
      options?: {
        /**
         * @default 'author'
         */
        cssOrigin?: 'user' | 'author'
      }
    ) => Promise<string>
    insertText: (text: string) => Promise<void>
    invalidate: () => void
    isAudioMuted: () => boolean
    isBeingCaptured: () => boolean
    isCrashed: () => boolean
    isCurrentlyAudible: () => boolean
    isDestroyed: () => boolean
    isDevToolsFocused: () => boolean
    isDevToolsOpened: () => boolean
    isFocused: () => boolean
    isLoading: () => boolean
    isLoadingMainFrame: () => boolean
    isOffscreen: () => boolean
    isPainting: () => void
    isWaitingForResponse: () => boolean
    openDevTools: (options?: {
      mode: 'left' | 'right' | 'bottom' | 'undocked' | 'detach'
      activate?: boolean
      title?: string
    }) => void
    paste: () => void
    pasteAndMatchStyle: () => void
    print: (
      options?: Record<string, any>,
      callback?: (success: boolean, errorType?: string) => void
    ) => void
    printToPDF: (options: Record<string, any>) => Promise<Uint8Array>
    redo: () => void
    removeInsertedCSS: (key: string) => Promise<void>
    replace: (text: string) => void
    replaceMisspelling: (text: string) => void
    savePage: (fullPath: string, saveType: 'HTMLOnly' | 'HTMLComplete' | 'MHTML') => Promise<void>
    selectAll: () => void
    sendInputEvent: (e: any) => void
    setAudioMuted: (muted: boolean) => void
    setBackgroundThrottling: (allowed: boolean) => void
    setFrameRate: (fps: number) => void
    setIgnoreMenuShortcuts: (ignore: boolean) => void
    setUserAgent: (userAgent: string) => void
    setWebRTCIPHandlingPolicy: (policy: WebRTCIPHandlingPolicy) => void
    setZoomFactor: (factor: number) => void
    startPainting: () => void
    stopFindInPage: (action: 'clearSelection' | 'keepSelection' | 'activateSelection') => void
    stopPainting: () => void
    takeHeapSnapshot: (filePath: string) => Promise<void>
    toggleDevTools: () => void
    undo: () => void
    unselect: () => void

    [key: string]: any
  }

  interface Rectangle {
    x: number
    y: number
    width: number
    height: number
  }

  interface WindowInstance {
    id: number
    webContents: WebContents
    show: () => void
    hide: () => void
    destory: () => void
    close: () => void
    isFocused: () => boolean
    isDestroyed: () => boolean
    setResizable: (resizable: boolean) => void
    setSize: (width: number, height: number) => void
    getSize: () => [width: number, height: number]
    isVisible: () => boolean
    maximize: () => void
    unmaximize: () => void
    isMaximized: () => void
    minimize: () => void
    restore: () => void
    isMinimized: () => boolean
    setFullScreen: (flag: boolean) => void
    isFullScreen: () => boolean
    isNormal: () => boolean
    setAspectRatio: (aspectiRotio: number) => void
    setBackgroundColor: (backgroundColor: string) => void
    getBounds: () => Rectangle
    getBackgroundColor: () => string
    setContentBounds: (bounds: Rectangle) => void
    getContentBounds: () => Rectangle
    getNormalBounds: () => Rectangle
    setEnabled: (enable: boolean) => void
    isEnabled: () => boolean
    setContentSize: (width: number, height: number) => void
    getContentSize: () => [width: number, height: number]
    setMinimumSize: (width: number, height: number) => void
    getMinimumSize: () => [width: number, height: number]
    setMaximumSize: (width: number, height: number) => void
    getMaximumSize: () => [width: number, height: number]
    isResizable: () => boolean
    setFullScreenable: (fullscreenable: boolean) => void
    isFullScreenable: () => boolean
    setClosable: (closable: boolean) => void
    isClosable: () => boolean
    setAlwaysOnTop: (flag: boolean) => void
    isAlwaysOnTop: () => boolean
    moveTop: () => void
    setPosition: (x: number, y: number) => void
    getPosition: () => [x: number, y: number]
    setTitle: (title: string) => void
    getTitle: () => string
    flashFrame: (flag: boolean) => void
    setKiosk: (flag: boolean) => void
    isKiosk: () => boolean
    focusOnWebView: () => void
    blurWebView: () => void
    capturePage: (
      rect?: Rectangle,
      options?: {
        stayHidden?: boolean
        stayAwake?: boolean
      }
    ) => Promise<NativeImage>
    reload: () => void

    [key: string]: any
  }
}
`,ma=`// Type definitions for sharp 0.31
// Project: https://github.com/lovell/sharp
// Definitions by: Wooseop Kim <https://github.com/wooseopkim>
//                 Bradley Odell <https://github.com/BTOdell>
//                 Jamie Woodbury <https://github.com/JamieWoodbury>
//                 Floris de Bijl <https://github.com/Fdebijl>
//                 Billy Kwok <https://github.com/billykwok>
//                 Espen Hovlandsdal <https://github.com/rexxars>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

//#region Constructor functions

/**
 * Creates a sharp instance from an image
 * @param input Buffer containing JPEG, PNG, WebP, AVIF, GIF, SVG, TIFF or raw pixel image data, or String containing the path to an JPEG, PNG, WebP, AVIF, GIF, SVG or TIFF image file.
 * @param options Object with optional attributes.
 * @throws {Error} Invalid parameters
 * @returns A sharp instance that can be used to chain operations
 */
declare function sharp(options?: sharp.SharpOptions): sharp.Sharp
declare function sharp(
  input?:
    | Buffer
    | Uint8Array
    | Uint8ClampedArray
    | Int8Array
    | Uint16Array
    | Int16Array
    | Uint32Array
    | Int32Array
    | Float32Array
    | Float64Array
    | string,
  options?: sharp.SharpOptions
): sharp.Sharp

declare namespace sharp {
  /** Object containing nested boolean values representing the available input and output formats/methods. */
  const format: FormatEnum

  /** An Object containing the version numbers of libvips and its dependencies. */
  const versions: {
    vips: string
    cairo?: string | undefined
    croco?: string | undefined
    exif?: string | undefined
    expat?: string | undefined
    ffi?: string | undefined
    fontconfig?: string | undefined
    freetype?: string | undefined
    gdkpixbuf?: string | undefined
    gif?: string | undefined
    glib?: string | undefined
    gsf?: string | undefined
    harfbuzz?: string | undefined
    jpeg?: string | undefined
    lcms?: string | undefined
    orc?: string | undefined
    pango?: string | undefined
    pixman?: string | undefined
    png?: string | undefined
    svg?: string | undefined
    tiff?: string | undefined
    webp?: string | undefined
    avif?: string | undefined
    heif?: string | undefined
    xml?: string | undefined
    zlib?: string | undefined
  }

  /** An Object containing the platform and architecture of the current and installed vendored binaries. */
  const vendor: {
    current: string
    installed: string[]
  }

  /** An Object containing the available interpolators and their proper values */
  const interpolators: Interpolators

  /** An EventEmitter that emits a change event when a task is either queued, waiting for libuv to provide a worker thread, complete */
  const queue: NodeJS.EventEmitter

  //#endregion

  //#region Utility functions

  /**
   * Gets or, when options are provided, sets the limits of libvips' operation cache.
   * Existing entries in the cache will be trimmed after any change in limits.
   * This method always returns cache statistics, useful for determining how much working memory is required for a particular task.
   * @param options Object with the following attributes, or Boolean where true uses default cache settings and false removes all caching (optional, default true)
   * @returns The cache results.
   */
  function cache(options?: boolean | CacheOptions): CacheResult

  /**
   * Gets or sets the number of threads libvips' should create to process each image.
   * The default value is the number of CPU cores. A value of 0 will reset to this default.
   * The maximum number of images that can be processed in parallel is limited by libuv's UV_THREADPOOL_SIZE environment variable.
   * @param concurrency The new concurrency value.
   * @returns The current concurrency value.
   */
  function concurrency(concurrency?: number): number

  /**
   * Provides access to internal task counters.
   * @returns Object containing task counters
   */
  function counters(): SharpCounters

  /**
   * Get and set use of SIMD vector unit instructions. Requires libvips to have been compiled with liborc support.
   * Improves the performance of resize, blur and sharpen operations by taking advantage of the SIMD vector unit of the CPU, e.g. Intel SSE and ARM NEON.
   * @param enable enable or disable use of SIMD vector unit instructions
   * @returns true if usage of SIMD vector unit instructions is enabled
   */
  function simd(enable?: boolean): boolean

  //#endregion

  const gravity: GravityEnum
  const strategy: StrategyEnum
  const kernel: KernelEnum
  const fit: FitEnum
  const bool: BoolEnum

  interface Sharp extends stream.Duplex {
    //#region Channel functions

    /**
     * Remove alpha channel, if any. This is a no-op if the image does not have an alpha channel.
     * @returns A sharp instance that can be used to chain operations
     */
    removeAlpha(): Sharp

    /**
     * Ensure alpha channel, if missing. The added alpha channel will be fully opaque. This is a no-op if the image already has an alpha channel.
     * @param alpha transparency level (0=fully-transparent, 1=fully-opaque) (optional, default 1).
     * @returns A sharp instance that can be used to chain operations
     */
    ensureAlpha(alpha?: number): Sharp

    /**
     * Extract a single channel from a multi-channel image.
     * @param channel zero-indexed channel/band number to extract, or red, green, blue or alpha.
     * @throws {Error} Invalid channel
     * @returns A sharp instance that can be used to chain operations
     */
    extractChannel(channel: 0 | 1 | 2 | 3 | 'red' | 'green' | 'blue' | 'alpha'): Sharp

    /**
     * Join one or more channels to the image. The meaning of the added channels depends on the output colourspace, set with toColourspace().
     * By default the output image will be web-friendly sRGB, with additional channels interpreted as alpha channels. Channel ordering follows vips convention:
     *  - sRGB: 0: Red, 1: Green, 2: Blue, 3: Alpha.
     *  - CMYK: 0: Magenta, 1: Cyan, 2: Yellow, 3: Black, 4: Alpha.
     *
     * Buffers may be any of the image formats supported by sharp.
     * For raw pixel input, the options object should contain a raw attribute, which follows the format of the attribute of the same name in the sharp() constructor.
     * @param images one or more images (file paths, Buffers).
     * @param options image options, see sharp() constructor.
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    joinChannel(images: string | Buffer | ArrayLike<string | Buffer>, options?: SharpOptions): Sharp

    /**
     * Perform a bitwise boolean operation on all input image channels (bands) to produce a single channel output image.
     * @param boolOp one of "and", "or" or "eor" to perform that bitwise operation, like the C logic operators &, | and ^ respectively.
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    bandbool(boolOp: keyof BoolEnum): Sharp

    //#endregion

    //#region Color functions

    /**
     * Tint the image using the provided chroma while preserving the image luminance.
     * An alpha channel may be present and will be unchanged by the operation.
     * @param rgb Parsed by the color module to extract chroma values.
     * @returns A sharp instance that can be used to chain operations
     */
    tint(rgb: Color): Sharp

    /**
     * Convert to 8-bit greyscale; 256 shades of grey.
     * This is a linear operation.
     * If the input image is in a non-linear colour space such as sRGB, use gamma() with greyscale() for the best results.
     * By default the output image will be web-friendly sRGB and contain three (identical) color channels.
     * This may be overridden by other sharp operations such as toColourspace('b-w'), which will produce an output image containing one color channel.
     * An alpha channel may be present, and will be unchanged by the operation.
     * @param greyscale true to enable and false to disable (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    greyscale(greyscale?: boolean): Sharp

    /**
     * Alternative spelling of greyscale().
     * @param grayscale true to enable and false to disable (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    grayscale(grayscale?: boolean): Sharp

    /**
     * Set the pipeline colourspace.
     * The input image will be converted to the provided colourspace at the start of the pipeline.
     * All operations will use this colourspace before converting to the output colourspace, as defined by toColourspace.
     * This feature is experimental and has not yet been fully-tested with all operations.
     *
     * @param colourspace pipeline colourspace e.g. rgb16, scrgb, lab, grey16 ...
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    pipelineColourspace(colourspace?: string): Sharp

    /**
     * Alternative spelling of pipelineColourspace
     * @param colorspace pipeline colourspace e.g. rgb16, scrgb, lab, grey16 ...
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    pipelineColorspace(colorspace?: string): Sharp

    /**
     * Set the output colourspace.
     * By default output image will be web-friendly sRGB, with additional channels interpreted as alpha channels.
     * @param colourspace output colourspace e.g. srgb, rgb, cmyk, lab, b-w ...
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    toColourspace(colourspace?: string): Sharp

    /**
     * Alternative spelling of toColourspace().
     * @param colorspace output colorspace e.g. srgb, rgb, cmyk, lab, b-w ...
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    toColorspace(colorspace: string): Sharp

    //#endregion

    //#region Composite functions

    /**
     * Composite image(s) over the processed (resized, extracted etc.) image.
     *
     * The images to composite must be the same size or smaller than the processed image.
     * If both \`top\` and \`left\` options are provided, they take precedence over \`gravity\`.
     * @param images - Ordered list of images to composite
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    composite(images: OverlayOptions[]): Sharp

    //#endregion

    //#region Input functions

    /**
     * Take a "snapshot" of the Sharp instance, returning a new instance.
     * Cloned instances inherit the input of their parent instance.
     * This allows multiple output Streams and therefore multiple processing pipelines to share a single input Stream.
     * @returns A sharp instance that can be used to chain operations
     */
    clone(): Sharp

    /**
     * Fast access to (uncached) image metadata without decoding any compressed image data.
     * @returns A sharp instance that can be used to chain operations
     */
    metadata(callback: (err: Error, metadata: Metadata) => void): Sharp

    /**
     * Fast access to (uncached) image metadata without decoding any compressed image data.
     * @returns A promise that resolves with a metadata object
     */
    metadata(): Promise<Metadata>

    /**
     * Access to pixel-derived image statistics for every channel in the image.
     * @returns A sharp instance that can be used to chain operations
     */
    stats(callback: (err: Error, stats: Stats) => void): Sharp

    /**
     * Access to pixel-derived image statistics for every channel in the image.
     * @returns A promise that resolves with a stats object
     */
    stats(): Promise<Stats>

    //#endregion

    //#region Operation functions

    /**
     * Rotate the output image by either an explicit angle or auto-orient based on the EXIF Orientation tag.
     *
     * If an angle is provided, it is converted to a valid positive degree rotation. For example, -450 will produce a 270deg rotation.
     *
     * When rotating by an angle other than a multiple of 90, the background colour can be provided with the background option.
     *
     * If no angle is provided, it is determined from the EXIF data. Mirroring is supported and may infer the use of a flip operation.
     *
     * The use of rotate implies the removal of the EXIF Orientation tag, if any.
     *
     * Method order is important when both rotating and extracting regions, for example rotate(x).extract(y) will produce a different result to extract(y).rotate(x).
     * @param angle angle of rotation. (optional, default auto)
     * @param options if present, is an Object with optional attributes.
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    rotate(angle?: number, options?: RotateOptions): Sharp

    /**
     * Flip the image about the vertical Y axis. This always occurs after rotation, if any.
     * The use of flip implies the removal of the EXIF Orientation tag, if any.
     * @param flip true to enable and false to disable (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    flip(flip?: boolean): Sharp

    /**
     * Flop the image about the horizontal X axis. This always occurs after rotation, if any.
     * The use of flop implies the removal of the EXIF Orientation tag, if any.
     * @param flop true to enable and false to disable (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    flop(flop?: boolean): Sharp

    /**
     * Perform an affine transform on an image. This operation will always occur after resizing, extraction and rotation, if any.
     * You must provide an array of length 4 or a 2x2 affine transformation matrix.
     * By default, new pixels are filled with a black background. You can provide a background color with the \`background\` option.
     * A particular interpolator may also be specified. Set the \`interpolator\` option to an attribute of the \`sharp.interpolator\` Object e.g. \`sharp.interpolator.nohalo\`.
     *
     * In the case of a 2x2 matrix, the transform is:
     * X = matrix[0, 0] * (x + idx) + matrix[0, 1] * (y + idy) + odx
     * Y = matrix[1, 0] * (x + idx) + matrix[1, 1] * (y + idy) + ody
     *
     * where:
     *
     * x and y are the coordinates in input image.
     * X and Y are the coordinates in output image.
     * (0,0) is the upper left corner.
     *
     * @param matrix Affine transformation matrix, may either by a array of length four or a 2x2 matrix array
     * @param options if present, is an Object with optional attributes.
     *
     * @returns A sharp instance that can be used to chain operations
     */
    affine(matrix: [number, number, number, number] | Matrix2x2, options?: AffineOptions): Sharp

    /**
     * Sharpen the image.
     * When used without parameters, performs a fast, mild sharpen of the output image.
     * When a sigma is provided, performs a slower, more accurate sharpen of the L channel in the LAB colour space.
     * Fine-grained control over the level of sharpening in "flat" (m1) and "jagged" (m2) areas is available.
     * @param options if present, is an Object with optional attributes
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    sharpen(options?: SharpenOptions): Sharp

    /**
     * Sharpen the image.
     * When used without parameters, performs a fast, mild sharpen of the output image.
     * When a sigma is provided, performs a slower, more accurate sharpen of the L channel in the LAB colour space.
     * Fine-grained control over the level of sharpening in "flat" (m1) and "jagged" (m2) areas is available.
     * @param sigma the sigma of the Gaussian mask, where sigma = 1 + radius / 2.
     * @param flat the level of sharpening to apply to "flat" areas. (optional, default 1.0)
     * @param jagged the level of sharpening to apply to "jagged" areas. (optional, default 2.0)
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     *
     * @deprecated Use the object parameter \`sharpen({sigma, m1, m2, x1, y2, y3})\` instead
     */
    sharpen(sigma?: number, flat?: number, jagged?: number): Sharp

    /**
     * Apply median filter. When used without parameters the default window is 3x3.
     * @param size square mask size: size x size (optional, default 3)
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    median(size?: number): Sharp

    /**
     * Blur the image.
     * When used without parameters, performs a fast, mild blur of the output image.
     * When a sigma is provided, performs a slower, more accurate Gaussian blur.
     * When a boolean sigma is provided, ether blur mild or disable blur
     * @param sigma a value between 0.3 and 1000 representing the sigma of the Gaussian mask, where sigma = 1 + radius / 2.
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    blur(sigma?: number | boolean): Sharp

    /**
     * Merge alpha transparency channel, if any, with background.
     * @param flatten true to enable and false to disable (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    flatten(flatten?: boolean | FlattenOptions): Sharp

    /**
     * Apply a gamma correction by reducing the encoding (darken) pre-resize at a factor of 1/gamma then increasing the encoding (brighten) post-resize at a factor of gamma.
     * This can improve the perceived brightness of a resized image in non-linear colour spaces.
     * JPEG and WebP input images will not take advantage of the shrink-on-load performance optimisation when applying a gamma correction.
     * Supply a second argument to use a different output gamma value, otherwise the first value is used in both cases.
     * @param gamma value between 1.0 and 3.0. (optional, default 2.2)
     * @param gammaOut value between 1.0 and 3.0. (optional, defaults to same as gamma)
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    gamma(gamma?: number, gammaOut?: number): Sharp

    /**
     * Produce the "negative" of the image.
     * @param negate true to enable and false to disable, or an object of options (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    negate(negate?: boolean | NegateOptions): Sharp

    /**
     * Enhance output image contrast by stretching its luminance to cover the full dynamic range.
     * @param normalise true to enable and false to disable (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    normalise(normalise?: boolean): Sharp

    /**
     * Alternative spelling of normalise.
     * @param normalize true to enable and false to disable (defaults to true)
     * @returns A sharp instance that can be used to chain operations
     */
    normalize(normalize?: boolean): Sharp

    /**
     * Perform contrast limiting adaptive histogram equalization (CLAHE)
     *
     * This will, in general, enhance the clarity of the image by bringing out
     * darker details. Please read more about CLAHE here:
     * https://en.wikipedia.org/wiki/Adaptive_histogram_equalization#Contrast_Limited_AHE
     *
     * @param options clahe options
     */
    clahe(options: ClaheOptions): Sharp

    /**
     * Convolve the image with the specified kernel.
     * @param kernel the specified kernel
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    convolve(kernel: Kernel): Sharp

    /**
     * Any pixel value greather than or equal to the threshold value will be set to 255, otherwise it will be set to 0.
     * @param threshold a value in the range 0-255 representing the level at which the threshold will be applied. (optional, default 128)
     * @param options threshold options
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    threshold(threshold?: number, options?: ThresholdOptions): Sharp

    /**
     * Perform a bitwise boolean operation with operand image.
     * This operation creates an output image where each pixel is the result of the selected bitwise boolean operation between the corresponding pixels of the input images.
     * @param operand Buffer containing image data or String containing the path to an image file.
     * @param operator one of "and", "or" or "eor" to perform that bitwise operation, like the C logic operators &, | and ^ respectively.
     * @param options describes operand when using raw pixel data.
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    boolean(operand: string | Buffer, operator: keyof BoolEnum, options?: { raw: Raw }): Sharp

    /**
     * Apply the linear formula a * input + b to the image (levels adjustment)
     * @param a multiplier (optional, default 1.0)
     * @param b offset (optional, default 0.0)
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    linear(a?: number | number[] | null, b?: number | number[]): Sharp

    /**
     * Recomb the image with the specified matrix.
     * @param inputMatrix 3x3 Recombination matrix
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    recomb(inputMatrix: Matrix3x3): Sharp

    /**
     * Transforms the image using brightness, saturation, hue rotation and lightness.
     * Brightness and lightness both operate on luminance, with the difference being that brightness is multiplicative whereas lightness is additive.
     * @param options describes the modulation
     * @returns A sharp instance that can be used to chain operations
     */
    modulate(options?: {
      brightness?: number | undefined
      saturation?: number | undefined
      hue?: number | undefined
      lightness?: number | undefined
    }): Sharp

    //#endregion

    //#region Output functions

    /**
     * Write output image data to a file.
     * If an explicit output format is not selected, it will be inferred from the extension, with JPEG, PNG, WebP, AVIF, TIFF, DZI, and libvips' V format supported.
     * Note that raw pixel data is only supported for buffer output.
     * @param fileOut The path to write the image data to.
     * @param callback Callback function called on completion with two arguments (err, info).  info contains the output image format, size (bytes), width, height and channels.
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    toFile(fileOut: string, callback: (err: Error, info: OutputInfo) => void): Sharp

    /**
     * Write output image data to a file.
     * @param fileOut The path to write the image data to.
     * @throws {Error} Invalid parameters
     * @returns A promise that fulfills with an object containing information on the resulting file
     */
    toFile(fileOut: string): Promise<OutputInfo>

    /**
     * Write output to a Buffer. JPEG, PNG, WebP, AVIF, TIFF, GIF and RAW output are supported.
     * By default, the format will match the input image, except SVG input which becomes PNG output.
     * @param callback Callback function called on completion with three arguments (err, buffer, info).
     * @returns A sharp instance that can be used to chain operations
     */
    toBuffer(callback: (err: Error, buffer: Buffer, info: OutputInfo) => void): Sharp

    /**
     * Write output to a Buffer. JPEG, PNG, WebP, AVIF, TIFF, GIF and RAW output are supported.
     * By default, the format will match the input image, except SVG input which becomes PNG output.
     * @param options resolve options
     * @param options.resolveWithObject Resolve the Promise with an Object containing data and info properties instead of resolving only with data.
     * @returns A promise that resolves with the Buffer data.
     */
    toBuffer(options?: { resolveWithObject: false }): Promise<Buffer>

    /**
     * Write output to a Buffer. JPEG, PNG, WebP, AVIF, TIFF, GIF and RAW output are supported.
     * By default, the format will match the input image, except SVG input which becomes PNG output.
     * @param options resolve options
     * @param options.resolveWithObject Resolve the Promise with an Object containing data and info properties instead of resolving only with data.
     * @returns A promise that resolves with an object containing the Buffer data and an info object containing the output image format, size (bytes), width, height and channels
     */
    toBuffer(options: { resolveWithObject: true }): Promise<{ data: Buffer; info: OutputInfo }>

    /**
     * Include all metadata (EXIF, XMP, IPTC) from the input image in the output image.
     * The default behaviour, when withMetadata is not used, is to strip all metadata and convert to the device-independent sRGB colour space.
     * This will also convert to and add a web-friendly sRGB ICC profile.
     * @param withMetadata
     * @throws {Error} Invalid parameters.
     */
    withMetadata(withMetadata?: WriteableMetadata): Sharp

    /**
     * Use these JPEG options for output image.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    jpeg(options?: JpegOptions): Sharp

    /**
     * Use these JP2 (JPEG 2000) options for output image.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    jp2(options?: Jp2Options): Sharp

    /**
     * Use these JPEG-XL (JXL) options for output image.
     * This feature is experimental, please do not use in production systems.
     * Requires libvips compiled with support for libjxl.
     * The prebuilt binaries do not include this.
     * Image metadata (EXIF, XMP) is unsupported.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    jxl(options?: JxlOptions): Sharp

    /**
     * Use these PNG options for output image.
     * PNG output is always full colour at 8 or 16 bits per pixel.
     * Indexed PNG input at 1, 2 or 4 bits per pixel is converted to 8 bits per pixel.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    png(options?: PngOptions): Sharp

    /**
     * Use these WebP options for output image.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    webp(options?: WebpOptions): Sharp

    /**
     * Use these GIF options for output image.
     * Requires libvips compiled with support for ImageMagick or GraphicsMagick. The prebuilt binaries do not include this - see installing a custom libvips.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    gif(options?: GifOptions): Sharp

    /**
     * Use these AVIF options for output image.
     * Whilst it is possible to create AVIF images smaller than 16x16 pixels, most web browsers do not display these properly.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    avif(options?: AvifOptions): Sharp

    /**
     * Use these HEIF options for output image.
     * Support for patent-encumbered HEIC images requires the use of a globally-installed libvips compiled with support for libheif, libde265 and x265.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    heif(options?: HeifOptions): Sharp

    /**
     * Use these TIFF options for output image.
     * @param options Output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    tiff(options?: TiffOptions): Sharp

    /**
     * Force output to be raw, uncompressed uint8 pixel data.
     * @param options Raw output options.
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    raw(options?: RawOptions): Sharp

    /**
     * Force output to a given format.
     * @param format a String or an Object with an 'id' attribute
     * @param options output options
     * @throws {Error} Unsupported format or options
     * @returns A sharp instance that can be used to chain operations
     */
    toFormat(
      format: keyof FormatEnum | AvailableFormatInfo,
      options?:
        | OutputOptions
        | JpegOptions
        | PngOptions
        | WebpOptions
        | AvifOptions
        | HeifOptions
        | JxlOptions
        | GifOptions
        | Jp2Options
        | TiffOptions
    ): Sharp

    /**
     * Use tile-based deep zoom (image pyramid) output.
     * Set the format and options for tile images via the toFormat, jpeg, png or webp functions.
     * Use a .zip or .szi file extension with toFile to write to a compressed archive file format.
     *
     * Warning: multiple sharp instances concurrently producing tile output can expose a possible race condition in some versions of libgsf.
     * @param tile tile options
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    tile(tile?: TileOptions): Sharp

    /**
     * Set a timeout for processing, in seconds. Use a value of zero to continue processing indefinitely, the default behaviour.
     * The clock starts when libvips opens an input image for processing. Time spent waiting for a libuv thread to become available is not included.
     * @param options Object with a \`seconds\` attribute between 0 and 3600 (number)
     * @throws {Error} Invalid options
     * @returns A sharp instance that can be used to chain operations
     */
    timeout(options: TimeoutOptions): Sharp

    //#endregion

    //#region Resize functions

    /**
     * Resize image to width, height or width x height.
     *
     * When both a width and height are provided, the possible methods by which the image should fit these are:
     *  - cover: Crop to cover both provided dimensions (the default).
     *  - contain: Embed within both provided dimensions.
     *  - fill: Ignore the aspect ratio of the input and stretch to both provided dimensions.
     *  - inside: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
     *  - outside: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
     *             Some of these values are based on the object-fit CSS property.
     *
     * When using a fit of cover or contain, the default position is centre. Other options are:
     *  - sharp.position: top, right top, right, right bottom, bottom, left bottom, left, left top.
     *  - sharp.gravity: north, northeast, east, southeast, south, southwest, west, northwest, center or centre.
     *  - sharp.strategy: cover only, dynamically crop using either the entropy or attention strategy. Some of these values are based on the object-position CSS property.
     *
     * The experimental strategy-based approach resizes so one dimension is at its target length then repeatedly ranks edge regions,
     * discarding the edge with the lowest score based on the selected strategy.
     *  - entropy: focus on the region with the highest Shannon entropy.
     *  - attention: focus on the region with the highest luminance frequency, colour saturation and presence of skin tones.
     *
     * Possible interpolation kernels are:
     *  - nearest: Use nearest neighbour interpolation.
     *  - cubic: Use a Catmull-Rom spline.
     *  - lanczos2: Use a Lanczos kernel with a=2.
     *  - lanczos3: Use a Lanczos kernel with a=3 (the default).
     *
     * @param width pixels wide the resultant image should be. Use null or undefined to auto-scale the width to match the height.
     * @param height pixels high the resultant image should be. Use null or undefined to auto-scale the height to match the width.
     * @param options resize options
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    resize(width?: number | null, height?: number | null, options?: ResizeOptions): Sharp

    /**
     * Shorthand for resize(null, null, options);
     *
     * @param options resize options
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    resize(options: ResizeOptions): Sharp

    /**
     * Extends/pads the edges of the image with the provided background colour.
     * This operation will always occur after resizing and extraction, if any.
     * @param extend single pixel count to add to all edges or an Object with per-edge counts
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    extend(extend: number | ExtendOptions): Sharp

    /**
     * Extract a region of the image.
     *  - Use extract() before resize() for pre-resize extraction.
     *  - Use extract() after resize() for post-resize extraction.
     *  - Use extract() before and after for both.
     *
     * @param region The region to extract
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    extract(region: Region): Sharp

    /**
     * Trim pixels from all edges that contain values similar to the given background colour, which defaults to that of the top-left pixel.
     * Images with an alpha channel will use the combined bounding box of alpha and non-alpha channels.
     * The info response Object will contain trimOffsetLeft and trimOffsetTop properties.
     * @param trim The specific background colour to trim, the threshold for doing so or an Object with both.
     * @throws {Error} Invalid parameters
     * @returns A sharp instance that can be used to chain operations
     */
    trim(trim?: string | number | TrimOptions): Sharp

    //#endregion
  }

  interface SharpOptions {
    /**
     *  When to abort processing of invalid pixel data, one of (in order of sensitivity):
     *  'none' (least), 'truncated', 'error' or 'warning' (most), highers level imply lower levels, invalid metadata will always abort. (optional, default 'warning')
     */
    failOn?: FailOnOptions | undefined
    /**
     * By default halt processing and raise an error when loading invalid images.
     * Set this flag to false if you'd rather apply a "best effort" to decode images,
     * even if the data is corrupt or invalid. (optional, default true)
     *
     * @deprecated Use \`failOn\` instead
     */
    failOnError?: boolean | undefined
    /**
     * Do not process input images where the number of pixels (width x height) exceeds this limit.
     * Assumes image dimensions contained in the input metadata can be trusted.
     * An integral Number of pixels, zero or false to remove limit, true to use default limit of 268402689 (0x3FFF x 0x3FFF). (optional, default 268402689)
     */
    limitInputPixels?: number | boolean | undefined
    /** Set this to true to remove safety features that help prevent memory exhaustion (SVG, PNG). (optional, default false) */
    unlimited?: boolean | undefined
    /** Set this to true to use sequential rather than random access where possible. This can reduce memory usage and might improve performance on some systems. (optional, default false) */
    sequentialRead?: boolean | undefined
    /** Number representing the DPI for vector images in the range 1 to 100000. (optional, default 72) */
    density?: number | undefined
    /** Number of pages to extract for multi-page input (GIF, TIFF, PDF), use -1 for all pages */
    pages?: number | undefined
    /** Page number to start extracting from for multi-page input (GIF, TIFF, PDF), zero based. (optional, default 0) */
    page?: number | undefined
    /** subIFD (Sub Image File Directory) to extract for OME-TIFF, defaults to main image. (optional, default -1) */
    subifd?: number | undefined
    /** Level to extract from a multi-level input (OpenSlide), zero based. (optional, default 0) */
    level?: number | undefined
    /** Set to \`true\` to read all frames/pages of an animated image (equivalent of setting \`pages\` to \`-1\`). (optional, default false) */
    animated?: boolean | undefined
    /** Describes raw pixel input image data. See raw() for pixel ordering. */
    raw?: CreateRaw | undefined
    /** Describes a new image to be created. */
    create?: Create | undefined
    /** Describes a new text image to be created. */
    text?: CreateText | undefined
  }

  interface CacheOptions {
    /** Is the maximum memory in MB to use for this cache (optional, default 50) */
    memory?: number | undefined
    /** Is the maximum number of files to hold open (optional, default 20) */
    files?: number | undefined
    /** Is the maximum number of operations to cache (optional, default 100) */
    items?: number | undefined
  }

  interface TimeoutOptions {
    /** Number of seconds after which processing will be stopped (default 0, eg disabled) */
    seconds: number
  }

  interface SharpCounters {
    /** The number of tasks this module has queued waiting for libuv to provide a worker thread from its pool. */
    queue: number
    /** The number of resize tasks currently being processed. */
    process: number
  }

  interface Raw {
    width: number
    height: number
    channels: 1 | 2 | 3 | 4
  }

  interface CreateRaw extends Raw {
    /** Specifies that the raw input has already been premultiplied, set to true to avoid sharp premultiplying the image. (optional, default false) */
    premultiplied?: boolean | undefined
  }

  interface Create {
    /** Number of pixels wide. */
    width: number
    /** Number of pixels high. */
    height: number
    /** Number of bands e.g. 3 for RGB, 4 for RGBA */
    channels: Channels
    /** Parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha. */
    background: Color
    /** Describes a noise to be created. */
    noise?: Noise | undefined
  }

  interface CreateText {
    /** Text to render as a UTF-8 string. It can contain Pango markup, for example \`<i>Le</i>Monde\`. */
    text: string
    /** Font name to render with. */
    font?: string
    /** Absolute filesystem path to a font file that can be used by \`font\`. */
    fontfile?: string
    /** Integral number of pixels to word-wrap at. Lines of text wider than this will be broken at word boundaries. (optional, default \`0\`) */
    width?: number
    /**
     * Integral number of pixels high. When defined, \`dpi\` will be ignored and the text will automatically fit the pixel resolution
     * defined by \`width\` and \`height\`. Will be ignored if \`width\` is not specified or set to 0. (optional, default \`0\`)
     */
    height?: number
    /** Text alignment ('left', 'centre', 'center', 'right'). (optional, default 'left') */
    align?: TextAlign
    /** Set this to true to apply justification to the text. (optional, default \`false\`) */
    justify?: boolean
    /** The resolution (size) at which to render the text. Does not take effect if \`height\` is specified. (optional, default \`72\`) */
    dpi?: number
    /**
     * Set this to true to enable RGBA output. This is useful for colour emoji rendering,
     * or support for pango markup features like \`<span foreground="red">Red!</span>\`. (optional, default \`false\`)
     */
    rgba?: boolean
    /** Text line height in points. Will use the font line height if none is specified. (optional, default \`0\`) */
    spacing?: number
  }

  interface WriteableMetadata {
    /** Value between 1 and 8, used to update the EXIF Orientation tag. */
    orientation?: number | undefined
    /** Filesystem path to output ICC profile, defaults to sRGB. */
    icc?: string | undefined
    /** Object keyed by IFD0, IFD1 etc. of key/value string pairs to write as EXIF data. (optional, default {}) */
    exif?: Record<string, any> | undefined
    /** Number of pixels per inch (DPI) */
    density?: number | undefined
  }

  interface Metadata {
    /** Number value of the EXIF Orientation header, if present */
    orientation?: number | undefined
    /** Name of decoder used to decompress image data e.g. jpeg, png, webp, gif, svg */
    format?: keyof FormatEnum | undefined
    /** Total size of image in bytes, for Stream and Buffer input only */
    size?: number | undefined
    /** Number of pixels wide (EXIF orientation is not taken into consideration) */
    width?: number | undefined
    /** Number of pixels high (EXIF orientation is not taken into consideration) */
    height?: number | undefined
    /** Name of colour space interpretation */
    space?: keyof ColourspaceEnum | undefined
    /** Number of bands e.g. 3 for sRGB, 4 for CMYK */
    channels?: Channels | undefined
    /** Name of pixel depth format e.g. uchar, char, ushort, float ... */
    depth?: string | undefined
    /** Number of pixels per inch (DPI), if present */
    density?: number | undefined
    /** String containing JPEG chroma subsampling, 4:2:0 or 4:4:4 for RGB, 4:2:0:4 or 4:4:4:4 for CMYK */
    chromaSubsampling: string
    /** Boolean indicating whether the image is interlaced using a progressive scan */
    isProgressive?: boolean | undefined
    /** Number of pages/frames contained within the image, with support for TIFF, HEIF, PDF, animated GIF and animated WebP */
    pages?: number | undefined
    /** Number of pixels high each page in a multi-page image will be. */
    pageHeight?: number | undefined
    /** Number of times to loop an animated image, zero refers to a continuous loop. */
    loop?: number | undefined
    /** Delay in ms between each page in an animated image, provided as an array of integers. */
    delay?: number[] | undefined
    /**  Number of the primary page in a HEIF image */
    pagePrimary?: number | undefined
    /** Boolean indicating the presence of an embedded ICC profile */
    hasProfile?: boolean | undefined
    /** Boolean indicating the presence of an alpha transparency channel */
    hasAlpha?: boolean | undefined
    /** Buffer containing raw EXIF data, if present */
    exif?: Buffer | undefined
    /** Buffer containing raw ICC profile data, if present */
    icc?: Buffer | undefined
    /** Buffer containing raw IPTC data, if present */
    iptc?: Buffer | undefined
    /** Buffer containing raw XMP data, if present */
    xmp?: Buffer | undefined
    /** Buffer containing raw TIFFTAG_PHOTOSHOP data, if present */
    tifftagPhotoshop?: Buffer | undefined
    /** The encoder used to compress an HEIF file, \`av1\` (AVIF) or \`hevc\` (HEIC) */
    compression?: 'av1' | 'hevc'
    /** Default background colour, if present, for PNG (bKGD) and GIF images, either an RGB Object or a single greyscale value */
    background?: { r: number; g: number; b: number } | number
    /** Details of each level in a multi-level image provided as an array of objects, requires libvips compiled with support for OpenSlide */
    levels?: LevelMetadata[] | undefined
    /** Number of Sub Image File Directories in an OME-TIFF image */
    subifds?: number | undefined
    /** The unit of resolution (density) */
    resolutionUnit?: 'inch' | 'cm' | undefined
  }

  interface LevelMetadata {
    width: number
    height: number
  }

  interface Stats {
    /** Array of channel statistics for each channel in the image. */
    channels: ChannelStats[]
    /** Value to identify if the image is opaque or transparent, based on the presence and use of alpha channel */
    isOpaque: boolean
    /** Histogram-based estimation of greyscale entropy, discarding alpha channel if any (experimental) */
    entropy: number
    /** Estimation of greyscale sharpness based on the standard deviation of a Laplacian convolution, discarding alpha channel if any (experimental) */
    sharpness: number
    /** Object containing most dominant sRGB colour based on a 4096-bin 3D histogram (experimental) */
    dominant: { r: number; g: number; b: number }
  }

  interface ChannelStats {
    /** minimum value in the channel */
    min: number
    /** maximum value in the channel */
    max: number
    /** sum of all values in a channel */
    sum: number
    /** sum of squared values in a channel */
    squaresSum: number
    /** mean of the values in a channel */
    mean: number
    /** standard deviation for the values in a channel */
    stdev: number
    /** x-coordinate of one of the pixel where the minimum lies */
    minX: number
    /** y-coordinate of one of the pixel where the minimum lies */
    minY: number
    /** x-coordinate of one of the pixel where the maximum lies */
    maxX: number
    /** y-coordinate of one of the pixel where the maximum lies */
    maxY: number
  }

  interface OutputOptions {
    /** Force format output, otherwise attempt to use input format (optional, default true) */
    force?: boolean | undefined
  }

  interface JpegOptions extends OutputOptions {
    /** Quality, integer 1-100 (optional, default 80) */
    quality?: number | undefined
    /** Use progressive (interlace) scan (optional, default false) */
    progressive?: boolean | undefined
    /** Set to '4:4:4' to prevent chroma subsampling when quality <= 90 (optional, default '4:2:0') */
    chromaSubsampling?: string | undefined
    /** Apply trellis quantisation (optional, default  false) */
    trellisQuantisation?: boolean | undefined
    /** Apply overshoot deringing (optional, default  false) */
    overshootDeringing?: boolean | undefined
    /** Optimise progressive scans, forces progressive (optional, default false) */
    optimiseScans?: boolean | undefined
    /** Alternative spelling of optimiseScans (optional, default false) */
    optimizeScans?: boolean | undefined
    /** Optimise Huffman coding tables (optional, default true) */
    optimiseCoding?: boolean | undefined
    /** Alternative spelling of optimiseCoding (optional, default true) */
    optimizeCoding?: boolean | undefined
    /** Quantization table to use, integer 0-8 (optional, default 0) */
    quantisationTable?: number | undefined
    /** Alternative spelling of quantisationTable (optional, default 0) */
    quantizationTable?: number | undefined
    /** Use mozjpeg defaults (optional, default false) */
    mozjpeg?: boolean | undefined
  }

  interface Jp2Options extends OutputOptions {
    /** Quality, integer 1-100 (optional, default 80) */
    quality?: number
    /** Use lossless compression mode (optional, default false) */
    lossless?: boolean
    /** Horizontal tile size (optional, default 512) */
    tileWidth?: number
    /** Vertical tile size (optional, default 512) */
    tileHeight?: number
    /** Set to '4:2:0' to enable chroma subsampling (optional, default '4:4:4') */
    chromaSubsampling?: '4:4:4' | '4:2:0'
  }

  interface JxlOptions extends OutputOptions {
    /** Maximum encoding error, between 0 (highest quality) and 15 (lowest quality) (optional, default 1.0) */
    distance?: number
    /** Calculate distance based on JPEG-like quality, between 1 and 100, overrides distance if specified */
    quality?: number
    /** Target decode speed tier, between 0 (highest quality) and 4 (lowest quality) (optional, default 0) */
    decodingTier?: number
    /** Use lossless compression (optional, default false) */
    lossless?: boolean
    /** CPU effort, between 3 (fastest) and 9 (slowest) (optional, default 7) */
    effort?: number | undefined
  }

  interface WebpOptions extends OutputOptions, AnimationOptions {
    /** Quality, integer 1-100 (optional, default 80) */
    quality?: number | undefined
    /** Quality of alpha layer, number from 0-100 (optional, default 100) */
    alphaQuality?: number | undefined
    /** Use lossless compression mode (optional, default false) */
    lossless?: boolean | undefined
    /** Use near_lossless compression mode (optional, default false) */
    nearLossless?: boolean | undefined
    /** Use high quality chroma subsampling (optional, default false) */
    smartSubsample?: boolean | undefined
    /** Level of CPU effort to reduce file size, integer 0-6 (optional, default 4) */
    effort?: number | undefined
    /** Prevent use of animation key frames to minimise file size (slow) (optional, default false) */
    minSize?: number
    /** Allow mixture of lossy and lossless animation frames (slow) (optional, default false) */
    mixed?: boolean
  }

  interface AvifOptions extends OutputOptions {
    /** quality, integer 1-100 (optional, default 50) */
    quality?: number | undefined
    /** use lossless compression (optional, default false) */
    lossless?: boolean | undefined
    /** Level of CPU effort to reduce file size, between 0 (fastest) and 9 (slowest) (optional, default 4) */
    effort?: number | undefined
    /** set to '4:2:0' to use chroma subsampling, requires libvips v8.11.0 (optional, default '4:4:4') */
    chromaSubsampling?: string | undefined
  }

  interface HeifOptions extends OutputOptions {
    /** quality, integer 1-100 (optional, default 50) */
    quality?: number | undefined
    /** compression format: av1, hevc (optional, default 'av1') */
    compression?: 'av1' | 'hevc' | undefined
    /** use lossless compression (optional, default false) */
    lossless?: boolean | undefined
    /** Level of CPU effort to reduce file size, between 0 (fastest) and 9 (slowest) (optional, default 4) */
    effort?: number | undefined
    /** set to '4:2:0' to use chroma subsampling (optional, default '4:4:4') */
    chromaSubsampling?: string | undefined
  }

  interface GifOptions extends OutputOptions, AnimationOptions {
    /** Always generate new palettes (slow), re-use existing by default (optional, default false) */
    reoptimise?: boolean | undefined
    /** Alternative spelling of "reoptimise" (optional, default false) */
    reoptimize?: boolean | undefined
    /** Maximum number of palette entries, including transparency, between 2 and 256 (optional, default 256) */
    colours?: number | undefined
    /** Alternative spelling of "colours". Maximum number of palette entries, including transparency, between 2 and 256 (optional, default 256) */
    colors?: number | undefined
    /** Level of CPU effort to reduce file size, between 1 (fastest) and 10 (slowest) (optional, default 7) */
    effort?: number | undefined
    /** Level of Floyd-Steinberg error diffusion, between 0 (least) and 1 (most) (optional, default 1.0) */
    dither?: number | undefined
    /** Maximum inter-frame error for transparency, between 0 (lossless) and 32 (optional, default 0) */
    interFrameMaxError?: number
    /** Maximum inter-palette error for palette reuse, between 0 and 256 (optional, default 3) */
    interPaletteMaxError?: number
  }

  interface TiffOptions extends OutputOptions {
    /** Quality, integer 1-100 (optional, default 80) */
    quality?: number | undefined
    /** Compression options: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k (optional, default 'jpeg') */
    compression?: string | undefined
    /** Compression predictor options: none, horizontal, float (optional, default 'horizontal') */
    predictor?: string | undefined
    /** Write an image pyramid (optional, default false) */
    pyramid?: boolean | undefined
    /** Write a tiled tiff (optional, default false) */
    tile?: boolean | undefined
    /** Horizontal tile size (optional, default 256) */
    tileWidth?: number | undefined
    /** Vertical tile size (optional, default 256) */
    tileHeight?: number | undefined
    /** Horizontal resolution in pixels/mm (optional, default 1.0) */
    xres?: number | undefined
    /** Vertical resolution in pixels/mm (optional, default 1.0) */
    yres?: number | undefined
    /** Reduce bitdepth to 1, 2 or 4 bit (optional, default 8) */
    bitdepth?: 1 | 2 | 4 | 8 | undefined
    /** Resolution unit options: inch, cm (optional, default 'inch') */
    resolutionUnit?: 'inch' | 'cm' | undefined
  }

  interface PngOptions extends OutputOptions {
    /** Use progressive (interlace) scan (optional, default false) */
    progressive?: boolean | undefined
    /** zlib compression level, 0-9 (optional, default 6) */
    compressionLevel?: number | undefined
    /** Use adaptive row filtering (optional, default false) */
    adaptiveFiltering?: boolean | undefined
    /** Use the lowest number of colours needed to achieve given quality (optional, default \`100\`) */
    quality?: number | undefined
    /** Level of CPU effort to reduce file size, between 1 (fastest) and 10 (slowest), sets palette to true (optional, default 7) */
    effort?: number | undefined
    /** Quantise to a palette-based image with alpha transparency support (optional, default false) */
    palette?: boolean | undefined
    /** Maximum number of palette entries (optional, default 256) */
    colours?: number | undefined
    /** Alternative Spelling of "colours". Maximum number of palette entries (optional, default 256) */
    colors?: number | undefined
    /**  Level of Floyd-Steinberg error diffusion (optional, default 1.0) */
    dither?: number | undefined
  }

  interface RotateOptions {
    /** parsed by the color module to extract values for red, green, blue and alpha. (optional, default "#000000") */
    background?: Color | undefined
  }

  interface FlattenOptions {
    /** background colour, parsed by the color module, defaults to black. (optional, default {r:0,g:0,b:0}) */
    background?: Color | undefined
  }

  interface NegateOptions {
    /** whether or not to negate any alpha channel. (optional, default true) */
    alpha?: boolean | undefined
  }

  interface ResizeOptions {
    /** Alternative means of specifying width. If both are present this takes priority. */
    width?: number | undefined
    /** Alternative means of specifying height. If both are present this takes priority. */
    height?: number | undefined
    /** How the image should be resized to fit both provided dimensions, one of cover, contain, fill, inside or outside. (optional, default 'cover') */
    fit?: keyof FitEnum | undefined
    /** Position, gravity or strategy to use when fit is cover or contain. (optional, default 'centre') */
    position?: number | string | undefined
    /** Background colour when using a fit of contain, parsed by the color module, defaults to black without transparency. (optional, default {r:0,g:0,b:0,alpha:1}) */
    background?: Color | undefined
    /** The kernel to use for image reduction. (optional, default 'lanczos3') */
    kernel?: keyof KernelEnum | undefined
    /** Do not enlarge if the width or height are already less than the specified dimensions, equivalent to GraphicsMagick's > geometry option. (optional, default false) */
    withoutEnlargement?: boolean | undefined
    /** Do not reduce if the width or height are already greater than the specified dimensions, equivalent to GraphicsMagick's < geometry option. (optional, default false) */
    withoutReduction?: boolean | undefined
    /** Take greater advantage of the JPEG and WebP shrink-on-load feature, which can lead to a slight moiré pattern on some images. (optional, default true) */
    fastShrinkOnLoad?: boolean | undefined
  }

  interface Region {
    /** zero-indexed offset from left edge */
    left: number
    /** zero-indexed offset from top edge */
    top: number
    /** dimension of extracted image */
    width: number
    /** dimension of extracted image */
    height: number
  }

  interface Noise {
    /** type of generated noise, currently only gaussian is supported. */
    type?: 'gaussian' | undefined
    /** mean of pixels in generated noise. */
    mean?: number | undefined
    /** standard deviation of pixels in generated noise. */
    sigma?: number | undefined
  }

  interface ExtendOptions {
    /** single pixel count to top edge (optional, default 0) */
    top?: number | undefined
    /** single pixel count to left edge (optional, default 0) */
    left?: number | undefined
    /** single pixel count to bottom edge (optional, default 0) */
    bottom?: number | undefined
    /** single pixel count to right edge (optional, default 0) */
    right?: number | undefined
    /** background colour, parsed by the color module, defaults to black without transparency. (optional, default {r:0,g:0,b:0,alpha:1}) */
    background?: Color | undefined
  }

  interface TrimOptions {
    /** background colour, parsed by the color module, defaults to that of the top-left pixel. (optional) */
    background?: Color | undefined
    /** the allowed difference from the above colour, a positive number. (optional, default \`10\`) */
    threshold?: number | undefined
  }

  interface RawOptions {
    depth?:
      | 'char'
      | 'uchar'
      | 'short'
      | 'ushort'
      | 'int'
      | 'uint'
      | 'float'
      | 'complex'
      | 'double'
      | 'dpcomplex'
  }

  /** 3 for sRGB, 4 for CMYK */
  type Channels = 3 | 4

  interface RGBA {
    r?: number | undefined
    g?: number | undefined
    b?: number | undefined
    alpha?: number | undefined
  }

  type Color = string | RGBA

  interface Kernel {
    /** width of the kernel in pixels. */
    width: number
    /** height of the kernel in pixels. */
    height: number
    /** Array of length width*height containing the kernel values. */
    kernel: ArrayLike<number>
    /** the scale of the kernel in pixels. (optional, default sum) */
    scale?: number | undefined
    /** the offset of the kernel in pixels. (optional, default 0) */
    offset?: number | undefined
  }

  interface ClaheOptions {
    /** width of the region */
    width: number
    /** height of the region */
    height: number
    /** max slope of the cumulative contrast. A value of 0 disables contrast limiting. Valid values are integers in the range 0-100 (inclusive) (optional, default 3) */
    maxSlope?: number | undefined
  }

  interface ThresholdOptions {
    /** convert to single channel greyscale. (optional, default true) */
    greyscale?: boolean | undefined
    /** alternative spelling for greyscale. (optional, default true) */
    grayscale?: boolean | undefined
  }

  interface OverlayOptions {
    /** Buffer containing image data, String containing the path to an image file, or Create object  */
    input?: string | Buffer | { create: Create } | { text: CreateText } | undefined
    /** how to blend this image with the image below. (optional, default \`'over'\`) */
    blend?: Blend | undefined
    /** gravity at which to place the overlay. (optional, default 'centre') */
    gravity?: Gravity | undefined
    /** the pixel offset from the top edge. */
    top?: number | undefined
    /** the pixel offset from the left edge. */
    left?: number | undefined
    /** set to true to repeat the overlay image across the entire image with the given  gravity. (optional, default false) */
    tile?: boolean | undefined
    /** number representing the DPI for vector overlay image. (optional, default 72) */
    density?: number | undefined
    /** describes overlay when using raw pixel data. */
    raw?: Raw | undefined
    /** Set to true to avoid premultipling the image below. Equivalent to the --premultiplied vips option. */
    premultiplied?: boolean | undefined
    /** Set to true to read all frames/pages of an animated image. (optional, default false). */
    animated?: boolean | undefined
    /**
     *  When to abort processing of invalid pixel data, one of (in order of sensitivity):
     *  'none' (least), 'truncated', 'error' or 'warning' (most), highers level imply lower levels, invalid metadata will always abort. (optional, default 'warning')
     */
    failOn?: FailOnOptions | undefined
    /**
     * Do not process input images where the number of pixels (width x height) exceeds this limit.
     * Assumes image dimensions contained in the input metadata can be trusted.
     * An integral Number of pixels, zero or false to remove limit, true to use default limit of 268402689 (0x3FFF x 0x3FFF). (optional, default 268402689)
     */
    limitInputPixels?: number | boolean | undefined
  }

  interface TileOptions {
    /** Tile size in pixels, a value between 1 and 8192. (optional, default 256) */
    size?: number | undefined
    /** Tile overlap in pixels, a value between 0 and 8192. (optional, default 0) */
    overlap?: number | undefined
    /** Tile angle of rotation, must be a multiple of 90. (optional, default 0) */
    angle?: number | undefined
    /** background colour, parsed by the color module, defaults to white without transparency. (optional, default {r:255,g:255,b:255,alpha:1}) */
    background?: string | RGBA | undefined
    /** How deep to make the pyramid, possible values are "onepixel", "onetile" or "one" (default based on layout) */
    depth?: string | undefined
    /** Threshold to skip tile generation, a value 0 - 255 for 8-bit images or 0 - 65535 for 16-bit images */
    skipBlanks?: number | undefined
    /** Tile container, with value fs (filesystem) or zip (compressed file). (optional, default 'fs') */
    container?: TileContainer | undefined
    /** Filesystem layout, possible values are dz, iiif, iiif3, zoomify or google. (optional, default 'dz') */
    layout?: TileLayout | undefined
    /** Centre image in tile. (optional, default false) */
    centre?: boolean | undefined
    /** Alternative spelling of centre. (optional, default false) */
    center?: boolean | undefined
    /** When layout is iiif/iiif3, sets the @id/id attribute of info.json (optional, default 'https://example.com/iiif') */
    id?: string | undefined
    /** The name of the directory within the zip file when container is \`zip\`. */
    basename?: string | undefined
  }

  interface AnimationOptions {
    /** Number of animation iterations, a value between 0 and 65535. Use 0 for infinite animation. (optional, default 0) */
    loop?: number | undefined
    /** delay(s) between animation frames (in milliseconds), each value between 0 and 65535. (optional) */
    delay?: number | number[] | undefined
  }

  interface SharpenOptions {
    /** The sigma of the Gaussian mask, where sigma = 1 + radius / 2, between 0.000001 and 10000 */
    sigma: number
    /** The level of sharpening to apply to "flat" areas, between 0 and 1000000 (optional, default 1.0) */
    m1?: number | undefined
    /** The level of sharpening to apply to "jagged" areas, between 0 and 1000000 (optional, default 2.0) */
    m2?: number | undefined
    /** Threshold between "flat" and "jagged", between 0 and 1000000 (optional, default 2.0) */
    x1?: number | undefined
    /** Maximum amount of brightening, between 0 and 1000000 (optional, default 10.0) */
    y2?: number | undefined
    /** Maximum amount of darkening, between 0 and 1000000 (optional, default 20.0) */
    y3?: number | undefined
  }

  interface AffineOptions {
    /** Parsed by the color module to extract values for red, green, blue and alpha. (optional, default "#000000") */
    background?: string | object | undefined
    /** Input horizontal offset (optional, default 0) */
    idx?: number | undefined
    /** Input vertical offset (optional, default 0) */
    idy?: number | undefined
    /** Output horizontal offset (optional, default 0) */
    odx?: number | undefined
    /** Output horizontal offset (optional, default 0) */
    ody?: number | undefined
    /** Interpolator (optional, default sharp.interpolators.bicubic) */
    interpolator?: Interpolators[keyof Interpolators] | undefined
  }

  interface OutputInfo {
    format: string
    size: number
    width: number
    height: number
    channels: 1 | 2 | 3 | 4
    /** indicating if premultiplication was used */
    premultiplied: boolean
    /** Only defined when using a crop strategy */
    cropOffsetLeft?: number | undefined
    /** Only defined when using a crop strategy */
    cropOffsetTop?: number | undefined
    /** Only defined when using a trim method */
    trimOffsetLeft?: number | undefined
    /** Only defined when using a trim method */
    trimOffsetTop?: number | undefined
    /** DPI the font was rendered at, only defined when using \`text\` input */
    textAutofitDpi?: number | undefined
  }

  interface AvailableFormatInfo {
    id: string
    input: { file: boolean; buffer: boolean; stream: boolean; fileSuffix?: string[] }
    output: { file: boolean; buffer: boolean; stream: boolean; alias?: string[] }
  }

  interface FitEnum {
    contain: 'contain'
    cover: 'cover'
    fill: 'fill'
    inside: 'inside'
    outside: 'outside'
  }

  interface KernelEnum {
    nearest: 'nearest'
    cubic: 'cubic'
    mitchell: 'mitchell'
    lanczos2: 'lanczos2'
    lanczos3: 'lanczos3'
  }

  interface BoolEnum {
    and: 'and'
    or: 'or'
    eor: 'eor'
  }

  interface ColourspaceEnum {
    multiband: string
    'b-w': string
    bw: string
    cmyk: string
    srgb: string
  }

  type FailOnOptions = 'none' | 'truncated' | 'error' | 'warning'

  type TextAlign = 'left' | 'centre' | 'center' | 'right'

  type TileContainer = 'fs' | 'zip'

  type TileLayout = 'dz' | 'iiif' | 'iiif3' | 'zoomify' | 'google'

  type Blend =
    | 'clear'
    | 'source'
    | 'over'
    | 'in'
    | 'out'
    | 'atop'
    | 'dest'
    | 'dest-over'
    | 'dest-in'
    | 'dest-out'
    | 'dest-atop'
    | 'xor'
    | 'add'
    | 'saturate'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'colour-dodge'
    | 'color-burn'
    | 'colour-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'

  type Gravity = number | string

  interface GravityEnum {
    north: number
    northeast: number
    southeast: number
    south: number
    southwest: number
    west: number
    northwest: number
    east: number
    center: number
    centre: number
  }

  interface StrategyEnum {
    entropy: number
    attention: number
  }

  interface FormatEnum {
    avif: AvailableFormatInfo
    dz: AvailableFormatInfo
    fits: AvailableFormatInfo
    gif: AvailableFormatInfo
    heif: AvailableFormatInfo
    input: AvailableFormatInfo
    jpeg: AvailableFormatInfo
    jpg: AvailableFormatInfo
    jp2: AvailableFormatInfo
    jxl: AvailableFormatInfo
    magick: AvailableFormatInfo
    openslide: AvailableFormatInfo
    pdf: AvailableFormatInfo
    png: AvailableFormatInfo
    ppm: AvailableFormatInfo
    raw: AvailableFormatInfo
    svg: AvailableFormatInfo
    tiff: AvailableFormatInfo
    tif: AvailableFormatInfo
    v: AvailableFormatInfo
    webp: AvailableFormatInfo
  }

  interface CacheResult {
    memory: { current: number; high: number; max: number }
    files: { current: number; max: number }
    items: { current: number; max: number }
  }

  interface Interpolators {
    /** [Nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation). Suitable for image enlargement only. */
    nearest: 'nearest'
    /** [Bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). Faster than bicubic but with less smooth results. */
    bilinear: 'bilinear'
    /** [Bicubic interpolation](http://en.wikipedia.org/wiki/Bicubic_interpolation) (the default). */
    bicubic: 'bicubic'
    /**
     * [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100).
     * Prevents some "[acutance](http://en.wikipedia.org/wiki/Acutance)" but typically reduces performance by a factor of 2.
     */
    locallyBoundedBicubic: 'lbb'
    /** [Nohalo interpolation](http://eprints.soton.ac.uk/268086/). Prevents acutance but typically reduces performance by a factor of 3. */
    nohalo: 'nohalo'
    /** [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48). Prevents "staircasing" when enlarging. */
    vertexSplitQuadraticBasisSpline: 'vsqbs'
  }

  type Matrix2x2 = [[number, number], [number, number]]
  type Matrix3x3 = [[number, number, number], [number, number, number], [number, number, number]]
}
`;self.MonacoEnvironment={getWorker(e,t){return t===`typescript`||t===`javascript`?new xe:t===`json`?new Te:new we}};var ha={target:Se.ES2016,allowNonTsExtensions:!0,allowJs:!1,moduleResolution:he.NodeJs,module:ye.CommonJS,esModuleInterop:!1,allowSyntheticDefaultImports:!0};[`javascriptDefaults`,`typescriptDefaults`].forEach(e=>{V[e].addExtraLib(da,`node.api.d.ts`),V[e].addExtraLib(fa,`electron.api.d.ts`),V[e].addExtraLib(ma,`sharp.d.ts`),V[e].addExtraLib(pa,`ubw.d.ts`),V[e].addExtraLib(ua,`utools.api.d.ts`),V[e].setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1}),V[e].setCompilerOptions(ha)}),ge.setDiagnosticsOptions({validate:!0,schemas:[{uri:`http://myschema/dependencies.json`,fileMatch:[`*`],schema:{type:`object`,additionalProperties:{type:`string`},propertyNames:{type:`string`,pattern:`^[a-zA-Z][a-zA-Z0-9-_]*$`},minProperties:1,patternProperties:{"^.*$":{type:`string`,format:`uri`}}}}]});function ga(e,t){let n=e.addCommand(0,(e,t)=>{t(e.get(ve))});e.addAction({id:`quickInput`,label:`Quick Input`,contextMenuGroupId:`buildin-action`,run:(e,{list:t,callback:r,options:i})=>{e.trigger(``,n,e=>{e.pick(t,i).then(e=>{r(e)})})}}),e.addAction({id:`run`,label:`Run`,keybindings:[B.CtrlCmd|H.KeyR,H.F5],contextMenuGroupId:`buildin-action`,run:()=>t(`action`,`runCode`)}),e.addAction({id:`newCode`,label:`New Code`,keybindings:[B.CtrlCmd|H.KeyN],contextMenuGroupId:`buildin-action`,run:()=>t(`action`,`newCode`)}),e.addAction({id:`clearConsole`,label:`Clear Console`,keybindings:[B.CtrlCmd|H.KeyK],contextMenuGroupId:`buildin-action`,run:()=>t(`action`,`clearConsole`)}),e.addAction({id:`toggleReadonly`,label:`Toggle Readonly`,keybindings:[B.CtrlCmd|H.KeyE],contextMenuGroupId:`buildin-action`,run:()=>t(`action`,`toggleReadonly`)}),e.addAction({id:`showCommands`,label:`Show Commands`,keybindings:[B.CtrlCmd|B.Shift|H.KeyP],contextMenuGroupId:`buildin-action`,run:()=>t(`action`,`showCommands`)}),e.addAction({id:`listHistory`,label:`List History`,keybindings:[B.CtrlCmd|B.Shift|H.KeyL],contextMenuGroupId:`buildin-action`,run:()=>{t(`action`,`listHistory`)}})}var _a=t(((e,t)=>{function n(){}n.prototype={on:function(e,t,n){var r=this.e||={};return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function i(){r.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||={})[e]||[]).slice(),r=0,i=n.length;r<i;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||={},r=n[e],i=[];if(r&&t)for(var a=0,o=r.length;a<o;a++)r[a].fn!==t&&r[a].fn._!==t&&i.push(r[a]);return i.length?n[e]=i:delete n[e],this}},t.exports=n,t.exports.TinyEmitter=n})),va=e(t(((e,t)=>{t.exports=new(_a())}))()),ya=(e,...t)=>va.default.on(e,...t),ba=(e,...t)=>va.default.emit(e,...t),xa=z(P({__name:`Editor`,props:ie({language:{default:`javascript`},readonly:{type:Boolean,default:!1},indentType:{default:`space`},indentSize:{default:2},wordWrap:{default:`on`}},{code:{type:String,required:!0},codeModifiers:{}}),emits:ie([`action`],[`update:code`]),setup(e,{expose:t,emit:r}){let i=r,a=ce(e,`code`),o=T(`editorRef`),s=m(null),c=w(ze),l=ue(),u=A(!1),d=null,f=null;R(a,e=>{s.value&&e!==s.value?.getValue()&&s.value.setValue(e)}),R(()=>e.readonly,e=>{I(()=>{s.value?.updateOptions({readOnly:e})})},{immediate:!0}),R(()=>e.indentType,e=>{I(()=>{s.value?.updateOptions({insertSpaces:e===`space`})})}),R(()=>e.indentSize,e=>{I(()=>{s.value?.updateOptions({tabSize:e})})}),R(()=>e.wordWrap,e=>{I(()=>{s.value?.updateOptions({wordWrap:e})})}),R(()=>c?.value,e=>{I(()=>{be.setTheme(e?`vs-dark`:`vs`)})},{immediate:!0}),R(l,e=>{e&&s.value?.focus()}),ya(Ee,()=>{s.value?.focus()}),ya(Ie,(e,t)=>{s.value?.setPosition({lineNumber:e,column:t})}),M(async()=>{await p()}),oe(()=>{h()}),R(()=>e.language,e=>{let t=s.value?.getModel();t&&be.setModelLanguage(t,e)},{deep:!0});async function p(){s.value&&h(),s.value=be.create(o.value,{value:a.value,language:e.language,theme:c?.value?`vs-dark`:`vs`,tabSize:e.indentSize,insertSpaces:e.indentType===`space`,wordWrap:e.wordWrap,minimap:{enabled:!1},automaticLayout:!0}),ga(s.value,i);let t=()=>{if(!ke)return;let e=s.value?.getSelection();!e||e.isEmpty()||e.getDirection?.()===Ce.RTL&&s.value?.setSelection(new _e(e.startLineNumber,e.startColumn,e.endLineNumber,e.endColumn))};d=s.value.onMouseUp(()=>t()),f=e=>{if(!ke)return;let n=e.inputType||``;(n.startsWith(`insert`)||n.startsWith(`delete`)||n===`historyUndo`||n===`historyRedo`)&&t()},o.value?.addEventListener(`beforeinput`,f,!0),s.value.getModel()?.onDidChangeContent(()=>{a.value=s.value?.getValue()??``}),u.value=!0,s.value.focus()}function h(){f&&=(o.value?.removeEventListener(`beforeinput`,f,!0),null),d?.dispose(),d=null,s.value?.dispose(),s.value=null}return t({editor:y(()=>s.value)}),(e,t)=>(O(),n(`div`,{class:`editor`,ref_key:`editorRef`,ref:o},null,512))}}),[[`__scopeId`,`data-v-2762e08a`]]),Sa={class:`console`},Ca={class:`top-bar`},wa={class:`log-icon`},Ta={class:`log-content`},Ea=[`onClick`],Da={key:1,class:`empty-state`},Oa=z(P({__name:`Console`,setup(e,{expose:t}){let o=m([]),s=r({}),c=r({}),l=A(``),d=T(`logsContainerRef`),f=A(!0),x=A(0),S=(e,t=4,n=new WeakSet)=>{if(e===null)return`null`;if(e===void 0)return`undefined`;if(typeof e==`string`)return`'${e}'`;if(typeof e==`number`||typeof e==`boolean`)return String(e);if(typeof e==`bigint`)return`${e}n`;if(typeof e==`symbol`)return e.toString();if(typeof e==`function`)return`[Function: ${e.name||`anonymous`}]`;if(typeof e!=`object`)return String(e);if(n.has(e))return`[Circular]`;if(n.add(e),e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(e instanceof Map)return`Map(${e.size}) { ${[...e.entries()].map(([e,r])=>`${S(e,t-1,n)} => ${S(r,t-1,n)}`).join(`, `)} }`;if(e instanceof Set)return`Set(${e.size}) { ${[...e].map(e=>S(e,t-1,n)).join(`, `)} }`;if(e instanceof WeakMap)return`WeakMap { <items unknown> }`;if(e instanceof WeakSet)return`WeakSet { <items unknown> }`;if(e instanceof Promise)return`Promise { <pending> }`;if(t<=0)return Array.isArray(e)?`[Array]`:`[Object]`;if(Array.isArray(e))return e.length===0?`[]`:`[ ${e.map(e=>S(e,t-1,n)).join(`, `)} ]`;let r=Object.entries(e);if(r.length===0)return`{}`;let i=e.constructor?.name;return`${i&&i!==`Object`?`${i} `:``}{ ${r.map(([e,r])=>`${e}: ${S(r,t-1,n)}`).join(`, `)} }`},w=(...e)=>e.map(e=>typeof e==`string`?e:S(e)).join(` `),D=e=>{let t=e.split(`
`).filter(e=>e.trim().startsWith(`at`)),n=/at\s(?:\w+\s)?\(?(.+?)(?::(\d+):(\d+))?\)?$/.exec(t[0]);if(!n)return``;let[,,r,i]=n;return t[0].includes(`at eval`)?`${parseInt(r)-2}:${i}`:`${r}:${i}`},re=y(()=>{let e=l.value.toLowerCase();return o.value.filter(t=>e?t.content.toLowerCase().includes(e):!0)}),j=(e,...t)=>{e!==`group`&&e!==`groupEnd`&&e!==`groupCollapsed`&&(console[e]?.(...t)||console.log(...t));let n,r;if(e===`error`&&t.length===1&&t[0]instanceof Error){let e=t[0];n=`${e.name}: ${e.message}`,r=e.stack}else n=w(...t);o.value.push({type:e,content:n,timestamp:Date.now(),stack:r,groupLevel:x.value}),le(o)},P=(...e)=>j(`log`,...e),ie=(...e)=>j(`debug`,...e),ae=(...e)=>j(`error`,...e),oe=(...e)=>j(`warn`,...e),se=(...e)=>j(`info`,...e),R=(...e)=>j(`dir`,...e),ce=(...e)=>j(`table`,...e),ue=(e=`default`)=>{j(`group`,e),x.value++},fe=(e=`default`)=>{j(`groupCollapsed`,e),x.value++},me=()=>{x.value>0&&x.value--},z=()=>{o.value=[],Object.keys(s).forEach(e=>delete s[e]),Object.keys(c).forEach(e=>delete c[e]),x.value=0},he=(e=`default`)=>{s[e]=(s[e]||0)+1,j(`count`,`${e}: ${s[e]}`)},ge=(e=`default`)=>{s[e]=0},B=(e=`default`)=>{c[e]=Date.now()},_e=(e=`default`)=>{let t=c[e];if(!t){j(`error`,`Timer '${e}' does not exist`);return}j(`time`,`${e}: ${Date.now()-t}ms`),delete c[e]},ve=e=>{let[t,n]=e.split(`:`).map(e=>parseInt(e));ba(Ie,t,n),I(()=>{ba(Ee)})},{start:ye,stop:be}=de(()=>{f.value=!0},2e3);return pe(d,`wheel`,()=>{f.value=!1,be(),ye()}),M(()=>{ya(Me,e=>{j(e.type,...e.args)})}),E(()=>{I(()=>{f.value&&d.value&&(d.value.scrollTop=d.value.scrollHeight)})}),t({log:P,debug:ie,error:ae,warn:oe,info:se,dir:R,table:ce,group:ue,groupCollapsed:fe,groupEnd:me,clear:z,count:he,countReset:ge,time:B,timeEnd:_e}),(e,t)=>{let r=k(`icon-filter`),o=ee,s=k(`icon-delete`),c=i,f=k(`icon-close-circle-fill`),m=k(`icon-exclamation-circle-fill`),y=p;return O(),n(`div`,Sa,[v(`div`,Ca,[L(o,{"model-value":l.value,"onUpdate:modelValue":t[0]||=e=>l.value=e,"allow-clear":``,placeholder:`Filter`},{prefix:g(()=>[L(r)]),_:1},8,[`model-value`]),L(c,{onClick:z,title:`清空控制台`},{default:g(()=>[L(s)]),_:1})]),re.value.length?(O(),n(`div`,{key:0,class:`logs`,ref_key:`logsContainerRef`,ref:d},[(O(!0),n(F,null,N(re.value,(e,t)=>(O(),n(`div`,{key:t,class:ne([`log-entry`,e.type]),style:u({paddingLeft:`${(e.groupLevel||0)*16+8}px`})},[v(`span`,wa,[e.type===`error`?(O(),b(f,{key:0})):e.type===`warn`?(O(),b(m,{key:1})):e.type===`info`?(O(),b(a(te),{key:2})):e.type===`debug`?(O(),b(a(C),{key:3})):h(``,!0)]),v(`span`,Ta,_(e.content),1),e.stack?(O(),n(`span`,{key:0,class:`stack`,onClick:t=>ve(D(e.stack))},_(D(e.stack)),9,Ea)):h(``,!0)],6))),128))],512)):(O(),n(`div`,Da,[L(y,{description:`暂无日志`})]))])}}}),[[`__scopeId`,`data-v-e734bde8`]]),ka={class:`shortcut-table`},Aa=z(P({__name:`ShortcutGuide`,setup(e){let t=[{id:`run`,label:`运行`,keybindings:[`Ctrl+R`,`F5`],description:`运行代码`},{id:`newCode`,label:`新建代码`,keybindings:[`Ctrl+N`],description:`创建新的代码文件`},{id:`clearConsole`,label:`清空控制台`,keybindings:[`Ctrl+K`],description:`清空控制台输出`},{id:`toggleReadonly`,label:`只读模式切换`,keybindings:[`Ctrl+E`],description:`切换只读模式`},{id:`showCommands`,label:`显示命令`,keybindings:[`Ctrl+Shift+P`],description:`显示命令面板`},{id:`listHistory`,label:`历史记录`,keybindings:[`Ctrl+Shift+L`],description:`显示历史记录`}];return Oe===`darwin`&&t.forEach(e=>{e.keybindings=e.keybindings.map(e=>e.replace(`Ctrl`,`⌘`))}),(e,r)=>(O(),n(`table`,ka,[r[0]||=v(`thead`,null,[v(`tr`,null,[v(`th`,null,`快捷键`),v(`th`,null,`描述`)])],-1),v(`tbody`,null,[(O(),n(F,null,N(t,e=>v(`tr`,{key:e.id},[v(`td`,null,[(O(!0),n(F,null,N(e.keybindings,(e,t)=>(O(),n(`span`,{key:t,class:`keybinding`},_(e),1))),128))]),v(`td`,null,_(e.description),1)])),64))])]))}}),[[`__scopeId`,`data-v-7e1b1ae4`]]),ja={class:`importmap`},Ma=[`data-warning`],Na=z(P({__name:`Importmap`,setup(e){let t=A(Ne(`setting/importmap`)||JSON.stringify({axios:`https://cdn.jsdelivr.net/npm/axios/+esm`,jquery:`https://cdn.jsdelivr.net/npm/jquery/+esm`,lodash:`https://cdn.jsdelivr.net/npm/lodash/+esm`},null,2)),r=y(()=>{try{return JSON.parse(t.value),!1}catch{return!0}});return R(t,e=>{try{JSON.parse(e),Ve(`setting/importmap`,e)}catch{}}),(e,i)=>(O(),n(`div`,ja,[L(xa,{code:t.value,"onUpdate:code":i[0]||=e=>t.value=e,readonly:!1,"indent-size":2,language:`json`,X:``,"indent-type":`space`,"word-wrap":`on`,"data-warning":a(r)},null,8,[`code`,`data-warning`]),v(`div`,{class:`desc`,"data-warning":a(r)},_(a(r)?`JSON 格式有误，请修改后重试`:`可以在浏览器环境中使用 ES Module 的方式引入第三方库`),9,Ma)]))}}),[[`__scopeId`,`data-v-e19b5dfa`]]),Pa=`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ASSETS_BASE}}/modern-normalize.css" rel="stylesheet" />
    <script async src="{{ASSETS_BASE}}/es-module-shims.js"><\/script>
    <style>
      html,
      body {
        position: relative;
        width: 100%;
        height: 100%;
      }

      body {
        color: #333;
        margin: 0;
        padding: 8px;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
          Cantarell, 'Helvetica Neue', sans-serif;
        max-width: 100%;
      }

      .dark body {
        color: #e5e7eb;
      }

      .dark {
        color-scheme: dark;
      }

      input,
      button,
      select,
      textarea {
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 2px;
      }

      button {
        color: #333;
        background-color: #f4f4f4;
        outline: none;
      }

      button:disabled {
        color: #999;
      }

      button:not(:disabled):active {
        background-color: #ddd;
      }

      button:focus {
        border-color: #666;
      }
    </style>
    <script type="importmap">
      {{IMPORT_MAP}}
    <\/script>
    <script type="module">
      // 序列化参数用于发送到主 frame
      function serializeArg(arg, depth = 0) {
        if (depth > 5) return '[Max depth reached]'

        if (arg === null) return null
        if (arg === undefined) return undefined
        if (typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean') {
          return arg
        }
        if (typeof arg === 'bigint') return arg.toString() + 'n'
        if (typeof arg === 'symbol') return arg.toString()
        if (typeof arg === 'function') return \`ƒ \${arg.name || 'anonymous'}()\`

        if (arg instanceof Error) {
          return {
            __type: 'Error',
            name: arg.name,
            message: arg.message,
            stack: arg.stack
          }
        }

        if (arg instanceof Date) return { __type: 'Date', value: arg.toISOString() }
        if (arg instanceof RegExp) return { __type: 'RegExp', value: arg.toString() }
        if (arg instanceof Map) {
          return {
            __type: 'Map',
            entries: Array.from(arg.entries()).map(([k, v]) => [
              serializeArg(k, depth + 1),
              serializeArg(v, depth + 1)
            ])
          }
        }
        if (arg instanceof Set) {
          return { __type: 'Set', values: Array.from(arg).map((v) => serializeArg(v, depth + 1)) }
        }

        if (Array.isArray(arg)) {
          return arg.slice(0, 100).map((item) => serializeArg(item, depth + 1))
        }

        if (typeof arg === 'object') {
          const result = {}
          const keys = Object.keys(arg).slice(0, 50)
          for (const key of keys) {
            try {
              result[key] = serializeArg(arg[key], depth + 1)
            } catch {
              result[key] = '[Cannot serialize]'
            }
          }
          if (arg.constructor && arg.constructor.name !== 'Object') {
            result.__type = arg.constructor.name
          }
          return result
        }

        return String(arg)
      }

      // 发送日志到主 frame
      function sendLog(type, args) {
        const serializedArgs = args.map((arg) => serializeArg(arg))
        window.parent.postMessage(
          {
            event: 'CONSOLE_LOG',
            type: type,
            args: serializedArgs
          },
          '*'
        )
      }

      // 拦截 console 方法
      const originalConsole = { ...console }
      const consoleMethods = ['log', 'debug', 'info', 'warn', 'error', 'dir', 'table']

      consoleMethods.forEach((method) => {
        console[method] = function (...args) {
          originalConsole[method]?.apply(console, args)
          sendLog(method, args)
        }
      })

      // 拦截 console.count
      const counters = {}
      console.count = function (label = 'default') {
        counters[label] = (counters[label] || 0) + 1
        sendLog('count', [\`\${label}: \${counters[label]}\`])
      }

      console.countReset = function (label = 'default') {
        counters[label] = 0
      }

      // 拦截 console.time/timeEnd
      const timers = {}
      console.time = function (label = 'default') {
        timers[label] = performance.now()
      }

      console.timeEnd = function (label = 'default') {
        if (timers[label]) {
          const duration = performance.now() - timers[label]
          sendLog('time', [\`\${label}: \${duration.toFixed(2)}ms\`])
          delete timers[label]
        } else {
          sendLog('error', [\`Timer '\${label}' does not exist\`])
        }
      }

      // 拦截 console.clear
      console.clear = function () {
        sendLog('clear', [])
      }

      // 拦截全局错误
      window.addEventListener('error', (event) => {
        sendLog('error', [
          {
            __type: 'Error',
            name: 'Error',
            message: event.message,
            stack: \`at \${event.filename}:\${event.lineno}:\${event.colno}\`
          }
        ])
      })

      window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason
        if (reason instanceof Error) {
          sendLog('error', [
            {
              __type: 'Error',
              name: reason.name,
              message: reason.message,
              stack: reason.stack
            }
          ])
        } else {
          sendLog('error', ['Unhandled Promise rejection:', reason])
        }
      })

      let finisher = undefined
      window.addEventListener('message', ({ data }) => {
        const { event, value } = data

        if (event !== 'CODE_UPDATE') return

        const next = () => {
          window.dispose?.()
          window.dispose = undefined

          if (document.getElementById('app')) document.getElementById('app').innerHTML = ''

          console.clear()

          document.getElementById('appsrc')?.remove()
          const script = document.createElement('script')
          script.id = 'appsrc'
          script.type = 'module'
          finisher = () => {}
          script.onload = () => {
            if (finisher) finisher()
            finisher = undefined
          }
          script.src = value
          document.body.appendChild(script)

          const load = document.getElementById('load')
          if (load) load.remove()
        }
        if (finisher !== undefined) {
          finisher = next
        } else {
          next()
        }
      })
    <\/script>
  </head>
  <body>
    <div
      id="load"
      style="display: flex; height: 80vh; align-items: center; justify-content: center"
    >
      <p style="font-size: 1.5rem">Welcome to the playground!</p>
    </div>
    <div id="app"></div>
    <script id="appsrc" type="module"><\/script>
  </body>
</html>
`,Fa=()=>null,Ia=window?.preload?.electron||{},La=window?.preload?.Buffer||{},Ra=window?.preload?.require||Fa,za=window?.preload?.vm||{};window?.preload?.fs,window?.preload?.path;var Ba=window?.preload?.__dirname||``;function Va(e){let t=d(e.sandboxIframe),n=A(!1),r=y(()=>{let e=Pa.replaceAll(`{{IMPORT_MAP}}`,JSON.stringify({imports:Ua()})).replaceAll(`{{ASSETS_BASE}}`,Ha());return URL.createObjectURL(new Blob([e],{type:`text/html`}))});return pe(t,`load`,()=>{n.value=!0}),j(()=>{try{URL.revokeObjectURL(r.value)}catch(e){console.error(`Failed to revoke URL`,e)}}),{sandboxURL:r,sandboxLoaded:n}}function Ha(){return ke?`file://${Ba}/third_party`:`${location.origin}/third_party`}function Ua(){let e={axios:`https://cdn.jsdelivr.net/npm/axios/+esm`,jquery:`https://cdn.jsdelivr.net/npm/jquery/+esm`,lodash:`https://cdn.jsdelivr.net/npm/lodash/+esm`,cheerio:`https://cdn.jsdelivr.net/npm/cheerio/+esm`};try{let t=JSON.parse(Ne(`setting/importmap`));return Object.assign(e,t)}catch(t){return console.error(`Failed to parse import map from storage:`,t),e}}function Wa(){let e=A(!1);function t(){e.value=!0}function n(){}function r(){e.value=!1}return{isMoving:e,onMoveStart:t,onMoving:n,onMoveEnd:r}}function Ga(){return{name:`iife-wrap`,visitor:{Program:{exit(e){if(e.get(`body`).length===0)return;let t=e.node.body;e.node.body=[{type:`ExpressionStatement`,expression:{type:`CallExpression`,callee:{type:`FunctionExpression`,id:null,params:[],body:{type:`BlockStatement`,body:t}},arguments:[]}}]}}}}}var Ka=Ue();(0,Ka.registerPlugin)(`babel-plugin-transform-remove-strict-mode`,()=>({visitor:{Directive(e){e.node.value.value===`use strict`&&e.remove()}}})),(0,Ka.registerPlugin)(`babel-plugin-iife-wrap`,Ga);function qa(e,t){return(0,Ka.transform)(e,{filename:`compiled.ts`,presets:[`typescript`],plugins:[`transform-modules-commonjs`,`babel-plugin-transform-remove-strict-mode`],...t}).code}var Ja=null;function Ya(){if(!ke)return null;if(Ja)return Ja;let e=Object.assign({},ca(utools));return la([`db`,`dbStorage`,`dbCryptoStorage`,`removeFeature`,`setFeature`,`onDbPull`],[`fetchUserServerTemporaryToken`,`isPurchasedUser`,`openPurchase`,`getUserServerTemporaryToken`,`openPayment`,`fetchUserPayments`],[`onPluginEnter`,`onPluginOut`,`onMainPush`,`onPluginDetach`]).forEach(t=>{delete e[t]}),Object.freeze(e),Ja=e,Ja}function Xa(e){return e===`browser`?{utools:Ya()}:{fetch:fetch.bind(window),utools:Ya(),electron:Ia,Buffer:La,require:Ra,console:void 0}}var Za={class:`runner`},Qa=[`src`,`data-moving`],$a={class:`btns`},eo=z(P({__name:`Runner`,setup(e){let t=T(`editorRef`),r=T(`sandboxRef`),u=T(`consoleRef`),{sandboxURL:d,sandboxLoaded:p}=Va({sandboxIframe:r}),{isMoving:m,onMoveStart:ee,onMoving:te,onMoveEnd:ne}=Wa(),y=A(Ne(`size`)||.75),C=Fe(),w=Be(),E=De(),j=fe(Re),M=null;pe(window,`message`,e=>{if(e.source!==r.value?.contentWindow)return;let{event:t,type:n,args:i}=e.data;if(t===`CONSOLE_LOG`){let e=i.map(N);n===`clear`?u.value?.clear():ba(Me,{type:n,args:e})}});function N(e){if(typeof e!=`object`||!e)return e;if(e.__type===`Error`){let t=Error(e.message);return t.name=e.name,t.stack=e.stack,t}if(e.__type===`Date`)return new Date(e.value);if(e.__type===`RegExp`){let t=e.value.match(/^\/(.*)\/([gimsuy]*)$/);return t?new RegExp(t[1],t[2]):e.value}if(e.__type===`Map`)return new Map(e.entries.map(([e,t])=>[N(e),N(t)]));if(e.__type===`Set`)return new Set(e.values.map(N));if(Array.isArray(e))return e.map(N);let t={};for(let[n,r]of Object.entries(e))n!==`__type`&&(t[n]=N(r));return t}j.on(e=>{if(w.clearConsoleBeforeRun&&u.value?.clear(),C.env===`node`){try{let t=Xa(`node`);t.console=P(),za.createContext(t);let n=qa(e);za.runInContext(`${n}`,t,{timeout:5e3})}catch(e){u.value?.error(e)}return}if(!p.value){u.value?.warn(`Sandbox iframe 未加载完成，无法运行代码`);return}let t=qa(e);if(!t){u.value?.warn(`代码编译失败，无法运行代码`);return}M&&URL.revokeObjectURL(M),M=URL.createObjectURL(new Blob([t],{type:`text/javascript`})),r.value?.contentWindow.postMessage({event:`CODE_UPDATE`,value:M},`*`)});function P(){return{log:(...e)=>u.value?.log(...e),debug:(...e)=>u.value?.debug(...e),info:(...e)=>u.value?.info(...e),warn:(...e)=>u.value?.warn(...e),error:(...e)=>u.value?.error(...e),dir:(...e)=>u.value?.dir(...e),table:(...e)=>u.value?.table(...e),count:e=>u.value?.count(e),countReset:e=>u.value?.countReset(e),time:e=>u.value?.time(e),timeEnd:e=>u.value?.timeEnd(e),clear:()=>u.value?.clear(),group:e=>u.value?.group(e),groupCollapsed:e=>u.value?.groupCollapsed(e),groupEnd:()=>u.value?.groupEnd()}}C.init(),R(y,e=>Ve(`size`,e));function ie(){se.open({title:`常用快捷键`,titleAlign:`start`,content:()=>ae(Aa),okButtonProps:{style:{display:`none`}}})}function F(e){switch(e){case`runCode`:C.execCode();break;case`newCode`:C.newCode();break;case`clearConsole`:u.value?.clear();break;case`toggleReadonly`:C.changeReadonly();break;case`showCommands`:t.value?.editor?.trigger(``,`editor.action.quickCommand`,null);break;case`listHistory`:E.loadHistorys();let e=E.historys.map(e=>({type:`item`,id:e.timeStamp,label:`${e.name||`Untitled`} - ${new Date(e.timeStamp).toLocaleString()} - ${e.code}`}));t.value?.editor?.focus(),t.value?.editor?.trigger(``,`quickInput`,{list:e,options:{activeItem:e[e.findIndex(e=>e.id===C.id)]},callback:e=>{e&&Fe().loadCode(e.id)}});break;default:break}}return(e,p)=>{let T=re,A=k(`icon-plus`),j=i,M=k(`icon-thunderbolt`),N=k(`icon-lock`),P=k(`icon-unlock`),ae=k(`icon-settings`),I=k(`icon-delete`),oe=x,se=k(`icon-question-circle`),R=c,ce=S(`zoom`);return O(),n(`div`,Za,[L(T,{size:a(y),"onUpdate:size":p[0]||=e=>s(y)?y.value=e:null,min:0,max:.95,onMoveStart:a(ee),onMoving:a(te),onMoveEnd:a(ne)},{first:g(()=>[L(xa,{ref_key:`editorRef`,ref:t,code:a(C).code,language:a(C).language,readonly:a(C).readonly,"indent-type":a(w).indentType,"indent-size":a(w).indentSize,"word-wrap":a(w).wordWrap,"onUpdate:code":a(C).handleCodeChange,onAction:F},null,8,[`code`,`language`,`readonly`,`indent-type`,`indent-size`,`word-wrap`,`onUpdate:code`])]),second:g(()=>[L(Oa,{ref_key:`consoleRef`,ref:u},null,512),a(C).env===`browser`?o((O(),n(`iframe`,{key:0,class:`iframe-sandbox`,ref_key:`sandboxRef`,ref:r,src:a(d),sandbox:`allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin`,"data-moving":a(m)},null,8,Qa)),[[l,!1]]):h(``,!0)]),_:1},8,[`size`,`onMoveStart`,`onMoving`,`onMoveEnd`]),v(`div`,$a,[v(`div`,null,[L(j,{title:`新建代码`,onClick:a(C).newCode},{default:g(()=>[L(A)]),_:1},8,[`onClick`]),L(j,{title:`运行代码`,onClick:p[1]||=()=>a(C).execCode()},{default:g(()=>[o(L(M,null,null,512),[[ce,a(C).execState]])]),_:1}),L(j,{title:`切换只读`,onClick:a(C).changeReadonly},{default:g(()=>[a(C).readonly?o((O(),b(N,{key:0},null,512)),[[ce,a(C).readonly]]):o((O(),b(P,{key:1},null,512)),[[ce,!a(C).readonly]])]),_:1},8,[`onClick`]),L(j,{title:`设置`,onClick:p[2]||=t=>e.$router.push(`/setting`)},{default:g(()=>[L(ae)]),_:1}),L(oe,{content:`确定删除当前代码片段吗？`,onOk:p[3]||=e=>a(E).deleteHistory(a(C).id)},{default:g(()=>[L(j,{title:`删除`,onClick:f(a(me),[`stop`])},{default:g(()=>[L(I)]),_:1},8,[`onClick`])]),_:1}),L(j,{title:`常用快捷键`,onClick:ie},{default:g(()=>[L(se)]),_:1})]),v(`div`,null,[L(R,{trigger:`click`},{content:g(()=>[L(Na)]),default:g(()=>[a(C).env===`browser`?(O(),b(j,{key:0},{default:g(()=>[...p[5]||=[D(` Importmap `,-1)]]),_:1})):h(``,!0)]),_:1}),a(ke)?(O(),b(j,{key:0,class:`width-80`,onClick:a(C).changeEnv},{default:g(()=>[D(_(a(C).currentEnv),1)]),_:1},8,[`onClick`])):h(``,!0),L(j,{class:`width-80`,onClick:a(C).changeMode},{default:g(()=>[D(_(a(C).currentMode),1)]),_:1},8,[`onClick`]),L(j,{class:`width-80`,onClick:a(C).changeLanguage},{default:g(()=>[D(_(a(C).currentLanguage),1)]),_:1},8,[`onClick`]),L(j,{onClick:p[4]||=e=>F(`listHistory`)},{default:g(()=>[D(` 历史 (`+_(a(E).historys.length)+`) `,1)]),_:1})])])])}}}),[[`__scopeId`,`data-v-aeaa766f`]]);export{eo as default};