(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const f of t)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const f={};return t.integrity&&(f.integrity=t.integrity),t.referrerpolicy&&(f.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?f.credentials="include":t.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(t){if(t.ep)return;t.ep=!0;const f=r(t);fetch(t.href,f)}})();function N(e,n){let r=e.toString(10);for(;r.length<n;)r="0"+r;return r}function Fe(e){let n=e;return(r,o)=>{if(o){n=r;return}else return n}}var X;(function(e){e[e.AllowHexSpecifier=512]="AllowHexSpecifier"})(X||(X={}));const L=Symbol("numeric");function se(e){return typeof e=="number"||(e==null?void 0:e[L])}function we(e,n){return typeof e=="number"?e<n?-1:e>n?1:0:e.CompareTo(n)}function be(e,n){return typeof e=="number"?e*n:e[L]().multiply(n)}function he(e,n){return typeof e=="number"?e.toFixed(n):e[L]().toFixed(n)}function K(e,n){return typeof e=="number"?e.toPrecision(n):e[L]().toPrecision(n)}function J(e,n){return typeof e=="number"?e.toExponential(n):e[L]().toExponential(n)}function Q(e){return typeof e=="number"?(Number(e)>>>0).toString(16):e[L]().toHex()}var m=null;try{m=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function E(e,n,r){this.low=e|0,this.high=n|0,this.unsigned=!!r}E.prototype.GetHashCode=function(){let e=this.unsigned?1:0;return e=(e<<5)+e^this.high,e=(e<<5)+e^this.low,e};E.prototype.Equals=function(e){return h(this,e)};E.prototype.CompareTo=function(e){return G(this,e)};E.prototype.toString=function(e){return A(this,e)};E.prototype.toJSON=function(){return A(this)};E.prototype[L]=function(){const e=this;return{multiply:n=>T(e,n),toPrecision:n=>String(e)+0 .toPrecision(n).substr(1),toExponential:n=>String(e)+0 .toExponential(n).substr(1),toFixed:n=>String(e)+0 .toFixed(n).substr(1),toHex:()=>A(e.unsigned?e:Le(Me(e),!0),16)}};E.prototype.__isLong__;Object.defineProperty(E.prototype,"__isLong__",{value:!0});function x(e){return(e&&e.__isLong__)===!0}var B={},$={};function k(e,n){var r,o,t;return n?(e>>>=0,(t=0<=e&&e<256)&&(o=$[e],o)?o:(r=F(e,(e|0)<0?-1:0,!0),t&&($[e]=r),r)):(e|=0,(t=-128<=e&&e<128)&&(o=B[e],o)?o:(r=F(e,e<0?-1:0,!1),t&&(B[e]=r),r))}function y(e,n){if(isNaN(e))return n?M:O;if(n){if(e<0)return M;if(e>=le)return Oe}else{if(e<=-ne)return S;if(e+1>=ne)return ye}return e<0?s(y(-e,n)):F(e%P|0,e/P|0,n)}function F(e,n,r){return new E(e,n,r)}var j=Math.pow;function ce(e,n,r){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return O;if(typeof n=="number"?(r=n,n=!1):n=!!n,r=r||10,r<2||36<r)throw RangeError("radix");var o=e.indexOf("-");if(o>0)throw Error("interior hyphen");if(o===0)return s(ce(e.substring(1),n,r));for(var t=y(j(r,8)),f=O,u=0;u<e.length;u+=8){var i=Math.min(8,e.length-u),l=parseInt(e.substring(u,u+i),r);if(i<8){var g=y(j(r,i));f=C(T(f,g),y(l))}else f=T(f,t),f=C(f,y(l))}return f.unsigned=n,f}function W(e,n){return typeof e=="number"?y(e,n):typeof e=="string"?ce(e,n):F(e.low,e.high,typeof n=="boolean"?n:e.unsigned)}var ee=1<<16,_e=1<<24,P=ee*ee,le=P*P,ne=le/2,re=k(_e),O=k(0),M=k(0,!0),H=k(1),Se=k(1,!0),te=k(-1),ye=F(-1,2147483647,!1),Oe=F(-1,-1,!0),S=F(0,-2147483648,!1);function p(e){return e.unsigned?e.low>>>0:e.low}function q(e){return e.unsigned?(e.high>>>0)*P+(e.low>>>0):e.high*P+(e.low>>>0)}function A(e,n){if(n=n||10,n<2||36<n)throw RangeError("radix");if(v(e))return"0";if(_(e))if(h(e,S)){var r=y(n),o=U(e,r),t=d(T(o,r),e);return A(o,n)+p(t).toString(n)}else return"-"+A(s(e),n);for(var f=y(j(n,6),e.unsigned),u=e,i="";;){var l=U(u,f),g=p(d(u,T(l,f)))>>>0,c=g.toString(n);if(u=l,v(u))return c+i;for(;c.length<6;)c="0"+c;i=""+c+i}}function v(e){return e.high===0&&e.low===0}function _(e){return!e.unsigned&&e.high<0}function oe(e){return(e.low&1)===1}function h(e,n){return x(n)||(n=W(n)),e.unsigned!==n.unsigned&&e.high>>>31===1&&n.high>>>31===1?!1:e.high===n.high&&e.low===n.low}function fe(e,n){return G(e,n)<0}function V(e,n){return G(e,n)>0}function Te(e,n){return G(e,n)>=0}function G(e,n){if(x(n)||(n=W(n)),h(e,n))return 0;var r=_(e),o=_(n);return r&&!o?-1:!r&&o?1:e.unsigned?n.high>>>0>e.high>>>0||n.high===e.high&&n.low>>>0>e.low>>>0?-1:1:_(d(e,n))?-1:1}function s(e){return!e.unsigned&&h(e,S)?S:C(Ee(e),H)}function C(e,n){x(n)||(n=W(n));var r=e.high>>>16,o=e.high&65535,t=e.low>>>16,f=e.low&65535,u=n.high>>>16,i=n.high&65535,l=n.low>>>16,g=n.low&65535,c=0,b=0,a=0,w=0;return w+=f+g,a+=w>>>16,w&=65535,a+=t+l,b+=a>>>16,a&=65535,b+=o+i,c+=b>>>16,b&=65535,c+=r+u,c&=65535,F(a<<16|w,c<<16|b,e.unsigned)}function d(e,n){return x(n)||(n=W(n)),C(e,s(n))}function T(e,n){if(v(e))return e.unsigned?M:O;if(x(n)||(n=W(n)),m){var r=m.mul(e.low,e.high,n.low,n.high);return F(r,m.get_high(),e.unsigned)}if(v(n))return e.unsigned?M:O;if(h(e,S))return oe(n)?S:O;if(h(n,S))return oe(e)?S:O;if(_(e))return _(n)?T(s(e),s(n)):s(T(s(e),n));if(_(n))return s(T(e,s(n)));if(fe(e,re)&&fe(n,re))return y(q(e)*q(n),e.unsigned);var o=e.high>>>16,t=e.high&65535,f=e.low>>>16,u=e.low&65535,i=n.high>>>16,l=n.high&65535,g=n.low>>>16,c=n.low&65535,b=0,a=0,w=0,I=0;return I+=u*c,w+=I>>>16,I&=65535,w+=f*c,a+=w>>>16,w&=65535,w+=u*g,a+=w>>>16,w&=65535,a+=t*c,b+=a>>>16,a&=65535,a+=f*g,b+=a>>>16,a&=65535,a+=u*l,b+=a>>>16,a&=65535,b+=o*c+t*g+f*l+u*i,b&=65535,F(w<<16|I,b<<16|a,e.unsigned)}function U(e,n){if(x(n)||(n=W(n)),v(n))throw Error("division by zero");if(m){if(!e.unsigned&&e.high===-2147483648&&n.low===-1&&n.high===-1)return e;var r=(e.unsigned?m.div_u:m.div_s)(e.low,e.high,n.low,n.high);return F(r,m.get_high(),e.unsigned)}if(v(e))return e.unsigned?M:O;var o,t,f;if(e.unsigned){if(n.unsigned||(n=me(n)),V(n,e))return M;if(V(n,Ie(e,1)))return Se;f=M}else{if(h(e,S)){if(h(n,H)||h(n,te))return S;if(h(n,S))return H;var u=xe(e,1);return o=Ne(U(u,n),1),h(o,O)?_(n)?H:te:(t=d(e,T(n,o)),f=C(o,U(t,n)),f)}else if(h(n,S))return e.unsigned?M:O;if(_(e))return _(n)?U(s(e),s(n)):s(U(s(e),n));if(_(n))return s(U(e,s(n)));f=O}for(t=e;Te(t,n);){o=Math.max(1,Math.floor(q(t)/q(n)));for(var i=Math.ceil(Math.log(o)/Math.LN2),l=i<=48?1:j(2,i-48),g=y(o),c=T(g,n);_(c)||V(c,t);)o-=l,g=y(o,e.unsigned),c=T(g,n);v(g)&&(g=H),f=C(f,g),t=d(t,c)}return f}function Ee(e){return F(~e.low,~e.high,e.unsigned)}function Ne(e,n){return x(n)&&(n=p(n)),(n&=63)===0?e:n<32?F(e.low<<n,e.high<<n|e.low>>>32-n,e.unsigned):F(0,e.low<<n-32,e.unsigned)}function xe(e,n){return x(n)&&(n=p(n)),(n&=63)===0?e:n<32?F(e.low>>>n|e.high<<32-n,e.high>>n,e.unsigned):F(e.high>>n-32,e.high>=0?0:-1,e.unsigned)}function Ie(e,n){if(x(n)&&(n=p(n)),n&=63,n===0)return e;var r=e.high;if(n<32){var o=e.low;return F(o>>>n|r<<32-n,r>>>n,e.unsigned)}else return F(n===32?r:r>>>n-32,0,e.unsigned)}function me(e){return e.unsigned?e:F(e.low,e.high,!0)}function Me(e,n){return n?Ue(e):ve(e)}function Ue(e){var n=e.high,r=e.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,n&255,n>>>8&255,n>>>16&255,n>>>24]}function ve(e){var n=e.high,r=e.low;return[n>>>24,n>>>16&255,n>>>8&255,n&255,r>>>24,r>>>16&255,r>>>8&255,r&255]}function Le(e,n,r){return r?Pe(e,n):Ce(e,n)}function Pe(e,n){return new E(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,n)}function Ce(e,n){return new E(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],n)}function z(e){const n=e<0;e=Math.abs(e);const r=~~(e/36e5),o=e%36e5/6e4;return(n?"-":"+")+N(r,2)+":"+N(o,2)}function R(e,n){const r=e.toISOString();return n==="first"?r.substring(0,r.indexOf("T")):r.substring(r.indexOf("T")+1,r.length-1)}function ke(e,n){if(n)return e.toISOString();{const r=e.kind==null?!0:e.kind===2;return N(e.getFullYear(),4)+"-"+N(e.getMonth()+1,2)+"-"+N(e.getDate(),2)+"T"+N(e.getHours(),2)+":"+N(e.getMinutes(),2)+":"+N(e.getSeconds(),2)+"."+N(e.getMilliseconds(),3)+(r?z(e.getTimezoneOffset()*-6e4):"")}}function We(e,n){const r=e.toISOString();return r.substring(0,r.length-1)+z(n)}function ge(e,n,r){return n.replace(/(\w)\1*/g,o=>{let t=Number.NaN;switch(o.substring(0,1)){case"y":const f=r?e.getUTCFullYear():e.getFullYear();t=o.length<4?f%100:f;break;case"M":t=(r?e.getUTCMonth():e.getMonth())+1;break;case"d":t=r?e.getUTCDate():e.getDate();break;case"H":t=r?e.getUTCHours():e.getHours();break;case"h":const u=r?e.getUTCHours():e.getHours();t=u>12?u%12:u;break;case"m":t=r?e.getUTCMinutes():e.getMinutes();break;case"s":t=r?e.getUTCSeconds():e.getSeconds();break;case"f":t=r?e.getUTCMilliseconds():e.getMilliseconds();break}return Number.isNaN(t)?o:t<10&&o.length>1?"0"+t:""+t})}function De(e,n){var r,o,t;const f=new Date(e.getTime()+((r=e.offset)!==null&&r!==void 0?r:0));if(typeof n!="string")return f.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+z((o=e.offset)!==null&&o!==void 0?o:0);if(n.length===1)switch(n){case"D":case"d":return R(f,"first");case"T":case"t":return R(f,"second");case"O":case"o":return We(f,(t=e.offset)!==null&&t!==void 0?t:0);default:throw new Error("Unrecognized Date print format")}else return ge(f,n,!0)}function He(e,n){const r=e.kind===1;if(typeof n!="string")return r?e.toUTCString():e.toLocaleString();if(n.length===1)switch(n){case"D":case"d":return r?R(e,"first"):e.toLocaleDateString();case"T":case"t":return r?R(e,"second"):e.toLocaleTimeString();case"O":case"o":return ke(e,r);default:throw new Error("Unrecognized Date print format")}else return ge(e,n,r)}function pe(e,n,r){return e.offset!=null?De(e,n):He(e,n)}function Ae(e){let n=0,r="[";for(const o of e){if(n===0)r+=Z(o);else if(n===100){r+="; ...";break}else r+="; "+Z(o);n++}return r+"]"}function Z(e,n=0){var r,o;if(e!=null&&typeof e=="object"){if(typeof e.toString=="function")return e.toString();if(Symbol.iterator in e)return Ae(e);{const t=(r=Object.getPrototypeOf(e))===null||r===void 0?void 0:r.constructor;return t===Object&&n<10?"{ "+Object.entries(e).map(([f,u])=>f+" = "+Z(u,n+1)).join(`
  `)+" }":(o=t==null?void 0:t.name)!==null&&o!==void 0?o:""}}return String(e)}const D=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function de(e,n){return we(e,n)<0}function je(e){return{input:e,cont:Ge(e)}}function qe(e,n){return typeof n=="string"?e(n):n.cont(e)}function Re(e){return qe(n=>n,e)}function Ze(e,n,r,o,t){let f="";if(n=n||"",t=t||"",se(e))switch(t.toLowerCase()!=="x"&&(de(e,0)?(e=be(e,-1),f="-"):n.indexOf(" ")>=0?f=" ":n.indexOf("+")>=0&&(f="+")),o=o==null?null:parseInt(o,10),t){case"f":case"F":o=o??6,e=he(e,o);break;case"g":case"G":e=o!=null?K(e,o):K(e);break;case"e":case"E":e=o!=null?J(e,o):J(e);break;case"x":e=Q(e);break;case"X":e=Q(e).toUpperCase();break;default:e=String(e);break}else e instanceof Date?e=pe(e):e=Z(e);if(r=typeof r=="number"?r:parseInt(r,10),isNaN(r))e=f+e;else{const u=n.indexOf("0")>=0,i=n.indexOf("-")>=0,l=i||!u?" ":"0";l==="0"?(e=ue(e,r-f.length,l,i),e=f+e):e=ue(f+e,r,l,i)}return e}function ae(e,n,r,o="",t=-1){return(...f)=>{let u=o;const i=n.slice(),l=r.slice();for(const g of f){const[,,c,b,a,w]=l[0];let I=b;if(t>=0)I=t,t=-1;else if(I==="*"){if(g<0)throw new Error("Non-negative number required");t=g;continue}u+=i[0],u+=Ze(g,c,I,a,w),i.splice(0,1),l.splice(0,1)}return l.length===0?(u+=i[0],e(u)):ae(e,i,l,u,t)}}function Ge(e){return n=>{D.lastIndex=0;const r=[],o=[];let t=0,f=D.exec(e);for(;f;){const u=f.index+(f[1]||"").length;r.push(e.substring(t,u).replace(/%%/g,"%")),o.push(f),t=D.lastIndex,D.lastIndex-=1,f=D.exec(e)}return r.length===0?n(e.replace(/%%/g,"%")):(r.push(e.substring(t).replace(/%%/g,"%")),ae(n,r,o))}}function ue(e,n,r,o){r=r||" ",n=n-e.length;for(let t=0;t<n;t++)e=o?e+r:r+e;return e}let Y=Fe(0);const ie=document.querySelector(".my-button");ie.onclick=e=>{let n;Y(Y()+1,!0),ie.innerText=(n=Y()|0,Re(je("You clicked: %i time(s)"))(n))};
//# sourceMappingURL=index-89d98877.js.map