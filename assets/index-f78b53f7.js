(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="151",ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vc=0,Do=1,Wc=2,Ll=1,qc=2,qi=3,vn=0,vt=1,rn=2,xn=0,bi=1,Io=2,Uo=3,Oo=4,Xc=5,Mi=100,jc=101,Yc=102,No=103,Fo=104,$c=200,Kc=201,Zc=202,Jc=203,Rl=204,Dl=205,Qc=206,eu=207,tu=208,nu=209,iu=210,ru=0,su=1,ou=2,js=3,au=4,lu=5,cu=6,uu=7,Il=0,hu=1,fu=2,sn=0,du=1,pu=2,mu=3,gu=4,_u=5,Ul=300,Ci=301,Pi=302,Ys=303,$s=304,qr=306,Ks=1e3,kt=1001,Zs=1002,_t=1003,zo=1004,cs=1005,Dt=1006,xu=1007,$i=1008,qn=1009,vu=1010,Mu=1011,Ol=1012,Su=1013,Nn=1014,Fn=1015,Ki=1016,yu=1017,bu=1018,wi=1020,wu=1021,Gt=1023,Eu=1024,Tu=1025,Bn=1026,Li=1027,Au=1028,Cu=1029,Pu=1030,Lu=1031,Ru=1033,us=33776,hs=33777,fs=33778,ds=33779,Bo=35840,ko=35841,Go=35842,Ho=35843,Du=36196,Vo=37492,Wo=37496,qo=37808,Xo=37809,jo=37810,Yo=37811,$o=37812,Ko=37813,Zo=37814,Jo=37815,Qo=37816,ea=37817,ta=37818,na=37819,ia=37820,ra=37821,ps=36492,Iu=36283,sa=36284,oa=36285,aa=36286,Xn=3e3,Ve=3001,Uu=3200,Ou=3201,Nu=0,Fu=1,qt="srgb",Zi="srgb-linear",Nl="display-p3",ms=7680,zu=519,la=35044,ca="300 es",Js=1035;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,Qs=180/Math.PI;function ir(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Bu(i,e){return(i%e+e)%e}function _s(i,e,t){return(1-t)*i+t*e}function ua(i){return(i&i-1)===0&&i!==0}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],h=r[6],E=r[1],b=r[4],v=r[7],x=r[2],C=r[5],L=r[8];return s[0]=a*_+o*E+c*x,s[3]=a*m+o*b+c*C,s[6]=a*h+o*v+c*L,s[1]=l*_+u*E+f*x,s[4]=l*m+u*b+f*C,s[7]=l*h+u*v+f*L,s[2]=d*_+p*E+g*x,s[5]=d*m+p*b+g*C,s[8]=d*h+p*v+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=t*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new Ie;function Fl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Gu=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Hu=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Vu(i){return i.convertSRGBToLinear().applyMatrix3(Hu)}function Wu(i){return i.applyMatrix3(Gu).convertLinearToSRGB()}const qu={[Zi]:i=>i,[qt]:i=>i.convertSRGBToLinear(),[Nl]:Vu},Xu={[Zi]:i=>i,[qt]:i=>i.convertLinearToSRGB(),[Nl]:Wu},bt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Zi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=qu[e],r=Xu[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ni;class zl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Ji("canvas")),ni.width=e.width,ni.height=e.height;const n=ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ei(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Bl{constructor(e=null){this.isSource=!0,this.uuid=ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ms(r[a].image)):s.push(Ms(r[a]))}else s=Ms(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ju=0;class Mt extends Zn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=kt,r=kt,s=Dt,a=$i,o=Gt,c=qn,l=Mt.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ir(),this.name="",this.source=new Bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Ul;Mt.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,n=0,r=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,v=(p+1)/2,x=(h+1)/2,C=(u+d)/4,L=(f+_)/4,N=(g+m)/4;return b>v&&b>x?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=C/n,s=L/n):v>x?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=C/r,s=N/r):x<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),n=L/s,r=N/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jn extends Zn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kl extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yu extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==p||u!==g){let m=1-o;const h=c*d+l*p+u*g+f*_,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const x=Math.sqrt(b),C=Math.atan2(x,h*E);m=Math.sin(m*C)/x,o=Math.sin(o*C)/x}const v=o*E;if(c=c*m+d*v,l=l*m+p*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-o*p,e[t+2]=l*g+u*p+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*r-o*n,u=c*n+o*t-s*r,f=c*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=l*c+d*-s+u*-o-f*-a,this.y=u*c+d*-a+f*-s-l*-o,this.z=f*c+d*-o+l*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new R,ha=new Yn;class rr{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ii.copy(e.boundingBox),ii.applyMatrix4(e.matrixWorld),this.union(ii);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Jt.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Jt)}else r.boundingBox===null&&r.computeBoundingBox(),ii.copy(r.boundingBox),ii.applyMatrix4(e.matrixWorld),this.union(ii)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),fr.subVectors(this.max,ki),ri.subVectors(e.a,ki),si.subVectors(e.b,ki),oi.subVectors(e.c,ki),dn.subVectors(si,ri),pn.subVectors(oi,si),Ln.subVectors(ri,oi);let t=[0,-dn.z,dn.y,0,-pn.z,pn.y,0,-Ln.z,Ln.y,dn.z,0,-dn.x,pn.z,0,-pn.x,Ln.z,0,-Ln.x,-dn.y,dn.x,0,-pn.y,pn.x,0,-Ln.y,Ln.x,0];return!ys(t,ri,si,oi,fr)||(t=[1,0,0,0,1,0,0,0,1],!ys(t,ri,si,oi,fr))?!1:(dr.crossVectors(dn,pn),t=[dr.x,dr.y,dr.z],ys(t,ri,si,oi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new R,new R,new R,new R,new R,new R,new R,new R],Jt=new R,ii=new rr,ri=new R,si=new R,oi=new R,dn=new R,pn=new R,Ln=new R,ki=new R,fr=new R,dr=new R,Rn=new R;function ys(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rn.fromArray(i,s);const o=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),c=e.dot(Rn),l=t.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const $u=new rr,Gi=new R,bs=new R;class Xr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$u.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(bs)),this.expandByPoint(Gi.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new R,ws=new R,pr=new R,mn=new R,Es=new R,mr=new R,Ts=new R;class Gl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ws.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(ws);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=mn.dot(this.direction),c=-mn.dot(pr),l=mn.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ws).addScaledVector(pr,d),p}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),r=Qt.dot(Qt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,r,s){Es.subVectors(t,e),mr.subVectors(n,e),Ts.crossVectors(Es,mr);let a=this.direction.dot(Ts),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,e);const c=o*this.direction.dot(mr.crossVectors(mn,mr));if(c<0)return null;const l=o*this.direction.dot(Es.cross(mn));if(l<0||c+l>a)return null;const u=-o*mn.dot(Ts);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,c,l,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,Zu)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),gn.crossVectors(n,wt),gn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),gn.crossVectors(n,wt)),gn.normalize(),gr.crossVectors(wt,gn),r[0]=gn.x,r[4]=gr.x,r[8]=wt.x,r[1]=gn.y,r[5]=gr.y,r[9]=wt.y,r[2]=gn.z,r[6]=gr.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],E=n[3],b=n[7],v=n[11],x=n[15],C=r[0],L=r[4],N=r[8],S=r[12],T=r[1],Y=r[5],W=r[9],D=r[13],U=r[2],B=r[6],Z=r[10],K=r[14],X=r[3],ne=r[7],J=r[11],Me=r[15];return s[0]=a*C+o*T+c*U+l*X,s[4]=a*L+o*Y+c*B+l*ne,s[8]=a*N+o*W+c*Z+l*J,s[12]=a*S+o*D+c*K+l*Me,s[1]=u*C+f*T+d*U+p*X,s[5]=u*L+f*Y+d*B+p*ne,s[9]=u*N+f*W+d*Z+p*J,s[13]=u*S+f*D+d*K+p*Me,s[2]=g*C+_*T+m*U+h*X,s[6]=g*L+_*Y+m*B+h*ne,s[10]=g*N+_*W+m*Z+h*J,s[14]=g*S+_*D+m*K+h*Me,s[3]=E*C+b*T+v*U+x*X,s[7]=E*L+b*Y+v*B+x*ne,s[11]=E*N+b*W+v*Z+x*J,s[15]=E*S+b*D+v*K+x*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*p-n*c*p)+_*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+t*l*f-t*o*p-s*a*f+n*a*p+s*o*u-n*l*u)+h*(-r*o*u-t*c*f+t*o*d+r*a*f-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],E=f*m*l-_*d*l+_*c*p-o*m*p-f*c*h+o*d*h,b=g*d*l-u*m*l-g*c*p+a*m*p+u*c*h-a*d*h,v=u*_*l-g*f*l+g*o*p-a*_*p-u*o*h+a*f*h,x=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,C=t*E+n*b+r*v+s*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=E*L,e[1]=(_*d*s-f*m*s-_*r*p+n*m*p+f*r*h-n*d*h)*L,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*h+n*c*h)*L,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*p-n*c*p)*L,e[4]=b*L,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*L,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*h-t*c*h)*L,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*p+t*c*p)*L,e[8]=v*L,e[9]=(g*f*s-u*_*s-g*n*p+t*_*p+u*n*h-t*f*h)*L,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*h+t*o*h)*L,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*p-t*o*p)*L,e[12]=x*L,e[13]=(u*_*r-g*f*r+g*n*d-t*_*d-u*n*m+t*f*m)*L,e[14]=(g*o*r-a*_*r-g*n*c+t*_*c+a*n*m-t*o*m)*L,e[15]=(a*f*r-u*o*r+u*n*c-t*f*c-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,g=s*f,_=a*u,m=a*f,h=o*f,E=c*l,b=c*u,v=c*f,x=n.x,C=n.y,L=n.z;return r[0]=(1-(_+h))*x,r[1]=(p+v)*x,r[2]=(g-b)*x,r[3]=0,r[4]=(p-v)*C,r[5]=(1-(d+h))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(g+b)*L,r[9]=(m-E)*L,r[10]=(1-(d+_))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nt.copy(this);const l=1/s,u=1/a,f=1/o;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=u,Nt.elements[5]*=u,Nt.elements[6]*=u,Nt.elements[8]*=f,Nt.elements[9]*=f,Nt.elements[10]*=f,t.setFromRotationMatrix(Nt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-s),f=(t+e)*c,d=(n+r)*l,p=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new R,Nt=new Qe,Ku=new R(0,0,0),Zu=new R(1,1,1),gn=new R,gr=new R,wt=new R,fa=new Qe,da=new Yn;class jr{constructor(e=0,t=0,n=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return da.setFromEuler(this),this.setFromQuaternion(da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const pa=new R,li=new Yn,en=new Qe,_r=new R,Hi=new R,Qu=new R,eh=new Yn,ma=new R(1,0,0),ga=new R(0,1,0),_a=new R(0,0,1),th={type:"added"},xa={type:"removed"};class lt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new R,t=new jr,n=new Yn,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ie}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(_a,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(_a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Hi,_r,this.up):en.lookAt(_r,Hi,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),li.setFromRotationMatrix(en),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,eh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}lt.DEFAULT_UP=new R(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new R,tn=new R,As=new R,nn=new R,ci=new R,ui=new R,va=new R,Cs=new R,Ps=new R,Ls=new R;let xr=!1;class Bt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ft.subVectors(e,t),r.cross(Ft);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ft.subVectors(r,t),tn.subVectors(n,t),As.subVectors(e,t);const a=Ft.dot(Ft),o=Ft.dot(tn),c=Ft.dot(As),l=tn.dot(tn),u=tn.dot(As),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,r,s,a,o,c){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(e,t,n,r,s,a,o,c)}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,nn),c.setScalar(0),c.addScaledVector(s,nn.x),c.addScaledVector(a,nn.y),c.addScaledVector(o,nn.z),c}static isFrontFacing(e,t,n,r){return Ft.subVectors(n,t),tn.subVectors(e,t),Ft.cross(tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ft.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ci.subVectors(r,n),ui.subVectors(s,n),Cs.subVectors(e,n);const c=ci.dot(Cs),l=ui.dot(Cs);if(c<=0&&l<=0)return t.copy(n);Ps.subVectors(e,r);const u=ci.dot(Ps),f=ui.dot(Ps);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ci,a);Ls.subVectors(e,s);const p=ci.dot(Ls),g=ui.dot(Ls);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ui,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return va.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(va,o);const h=1/(m+_+d);return a=_*h,o=d*h,t.copy(n).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nh=0;class sr extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=bi,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rl,this.blendDst=Dl,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zt={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Rs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=Bu(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Rs(a,s,e+1/3),this.g=Rs(a,s,e),this.b=Rs(a,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return bt.fromWorkingColorSpace(ft.copy(this),e),xt(ft.r*255,0,255)<<16^xt(ft.g*255,0,255)<<8^xt(ft.b*255,0,255)<<0}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,r=ft.g,s=ft.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=qt){bt.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,r=ft.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(zt),zt.h+=e,zt.s+=t,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zt),e.getHSL(vr);const n=_s(zt.h,vr.h,t),r=_s(zt.s,vr.s,t),s=_s(zt.l,vr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new Be;Be.NAMES=Vl;class Wl extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new R,Mr=new Pe;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ql extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xl extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kn extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ih=0;const Rt=new Qe,Ds=new lt,hi=new R,Et=new rr,Vi=new rr,at=new R;class an extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?Xl:ql)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Ds.lookAt(e),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Et.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(Et.min,Vi.min),Et.expandByPoint(at),at.addVectors(Et.max,Vi.max),Et.expandByPoint(at)):(Et.expandByPoint(Vi.min),Et.expandByPoint(Vi.max))}Et.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)at.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(at));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)at.fromBufferAttribute(o,l),c&&(hi.fromBufferAttribute(e,l),at.add(hi)),r=Math.max(r,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<o;T++)l[T]=new R,u[T]=new R;const f=new R,d=new R,p=new R,g=new Pe,_=new Pe,m=new Pe,h=new R,E=new R;function b(T,Y,W){f.fromArray(r,T*3),d.fromArray(r,Y*3),p.fromArray(r,W*3),g.fromArray(a,T*2),_.fromArray(a,Y*2),m.fromArray(a,W*2),d.sub(f),p.sub(f),_.sub(g),m.sub(g);const D=1/(_.x*m.y-m.x*_.y);isFinite(D)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(D),E.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(D),l[T].add(h),l[Y].add(h),l[W].add(h),u[T].add(E),u[Y].add(E),u[W].add(E))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,Y=v.length;T<Y;++T){const W=v[T],D=W.start,U=W.count;for(let B=D,Z=D+U;B<Z;B+=3)b(n[B+0],n[B+1],n[B+2])}const x=new R,C=new R,L=new R,N=new R;function S(T){L.fromArray(s,T*3),N.copy(L);const Y=l[T];x.copy(Y),x.sub(L.multiplyScalar(L.dot(Y))).normalize(),C.crossVectors(N,Y);const D=C.dot(u[T])<0?-1:1;c[T*4]=x.x,c[T*4+1]=x.y,c[T*4+2]=x.z,c[T*4+3]=D}for(let T=0,Y=v.length;T<Y;++T){const W=v[T],D=W.start,U=W.count;for(let B=D,Z=D+U;B<Z;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new R,s=new R,a=new R,o=new R,c=new R,l=new R,u=new R,f=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new At(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new Qe,Wt=new Gl,Sr=new Xr,Sa=new R,fi=new R,di=new R,pi=new R,Is=new R,yr=new R,br=new Pe,wr=new Pe,Er=new Pe,ya=new R,ba=new R,wa=new R,Tr=new R,Ar=new R;class _n extends lt{constructor(e=new an,t=new Wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Is.fromBufferAttribute(f,e),a?yr.addScaledVector(Is,u):yr.addScaledVector(Is.sub(t),u))}t.add(yr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Wt.copy(e.ray).recast(e.near),Sr.containsPoint(Wt.origin)===!1&&(Wt.intersectSphere(Sr,Sa)===null||Wt.origin.distanceToSquared(Sa)>(e.far-e.near)**2))||(Ma.copy(s).invert(),Wt.copy(e.ray).applyMatrix4(Ma),n.boundingBox!==null&&Wt.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,d=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=r[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,x=b;v<x;v+=3){const C=o.getX(v),L=o.getX(v+1),N=o.getX(v+2);a=Cr(this,h,e,Wt,l,u,f,C,L,N),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const E=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);a=Cr(this,r,e,Wt,l,u,f,E,b,v),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=r[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,x=b;v<x;v+=3){const C=v,L=v+1,N=v+2;a=Cr(this,h,e,Wt,l,u,f,C,L,N),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const E=m,b=m+1,v=m+2;a=Cr(this,r,e,Wt,l,u,f,E,b,v),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function rh(i,e,t,n,r,s,a,o){let c;if(e.side===vt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===vn,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ar);return l<t.near||l>t.far?null:{distance:l,point:Ar.clone(),object:i}}function Cr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,fi),i.getVertexPosition(c,di),i.getVertexPosition(l,pi);const u=rh(i,e,t,n,fi,di,pi,Tr);if(u){r&&(br.fromBufferAttribute(r,o),wr.fromBufferAttribute(r,c),Er.fromBufferAttribute(r,l),u.uv=Bt.getInterpolation(Tr,fi,di,pi,br,wr,Er,new Pe)),s&&(br.fromBufferAttribute(s,o),wr.fromBufferAttribute(s,c),Er.fromBufferAttribute(s,l),u.uv2=Bt.getInterpolation(Tr,fi,di,pi,br,wr,Er,new Pe)),a&&(ya.fromBufferAttribute(a,o),ba.fromBufferAttribute(a,c),wa.fromBufferAttribute(a,l),u.normal=Bt.getInterpolation(Tr,fi,di,pi,ya,ba,wa,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};Bt.getNormal(fi,di,pi,f.normal),u.face=f}return u}class or extends an{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new kn(l,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(f,2));function g(_,m,h,E,b,v,x,C,L,N,S){const T=v/L,Y=x/N,W=v/2,D=x/2,U=C/2,B=L+1,Z=N+1;let K=0,X=0;const ne=new R;for(let J=0;J<Z;J++){const Me=J*Y-D;for(let ie=0;ie<B;ie++){const G=ie*T-W;ne[_]=G*E,ne[m]=Me*b,ne[h]=U,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[h]=C>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(ie/L),f.push(1-J/N),K+=1}}for(let J=0;J<N;J++)for(let Me=0;Me<L;Me++){const ie=d+Me+B*J,G=d+Me+B*(J+1),$=d+(Me+1)+B*(J+1),oe=d+(Me+1)+B*J;c.push(ie,G,oe),c.push(G,$,oe),X+=6}o.addGroup(p,X,S),p+=X,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function gt(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const r in n)e[r]=n[r]}return e}function sh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jl(i){return i.getRenderTarget()===null&&i.outputEncoding===Ve?qt:Zi}const oh={clone:Ri,merge:gt};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=sh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yl extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class ch extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Tt(mi,gi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Tt(mi,gi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Tt(mi,gi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Tt(mi,gi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Tt(mi,gi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Tt(mi,gi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=sn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class $l extends Mt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uh extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $l(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new or(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:xn});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=Dt),new ch(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Us=new R,hh=new R,fh=new Ie;class In{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Us.subVectors(n,t).cross(hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fh.getNormalMatrix(e),r=this.coplanarPoint(Us).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Xr,Pr=new R;class go{constructor(e=new In,t=new In,n=new In,r=new In,s=new In,a=new In){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],f=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],h=n[13],E=n[14],b=n[15];return t[0].setComponents(o-r,f-c,_-d,b-m).normalize(),t[1].setComponents(o+r,f+c,_+d,b+m).normalize(),t[2].setComponents(o+s,f+l,_+p,b+h).normalize(),t[3].setComponents(o-s,f-l,_-p,b-h).normalize(),t[4].setComponents(o-a,f-u,_-g,b-E).normalize(),t[5].setComponents(o+a,f+u,_+g,b+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Pr.x=r.normal.x>0?e.max.x:e.min.x,Pr.y=r.normal.y>0?e.max.y:e.min.y,Pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function dh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const f=l.array,d=l.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const d=u.array,p=u.updateRange;i.bindBuffer(f,l),p.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class _o extends an{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const E=h*d-a;for(let b=0;b<l;b++){const v=b*f-s;g.push(v,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<o;E++){const b=E+l*h,v=E+l*(h+1),x=E+1+l*(h+1),C=E+1+l*h;p.push(b,v,C),p.push(v,x,C)}this.setIndex(p),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}var ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mh="vec3 transformed = vec3( position );",Sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ih=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Oh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,id=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,sd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,od=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ad=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ld=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_d=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Hd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:ph,alphamap_pars_fragment:mh,alphatest_fragment:gh,alphatest_pars_fragment:_h,aomap_fragment:xh,aomap_pars_fragment:vh,begin_vertex:Mh,beginnormal_vertex:Sh,bsdfs:yh,iridescence_fragment:bh,bumpmap_pars_fragment:wh,clipping_planes_fragment:Eh,clipping_planes_pars_fragment:Th,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:Ch,color_fragment:Ph,color_pars_fragment:Lh,color_pars_vertex:Rh,color_vertex:Dh,common:Ih,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Oh,displacementmap_pars_vertex:Nh,displacementmap_vertex:Fh,emissivemap_fragment:zh,emissivemap_pars_fragment:Bh,encodings_fragment:kh,encodings_pars_fragment:Gh,envmap_fragment:Hh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Wh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:rf,envmap_vertex:Xh,fog_vertex:jh,fog_pars_vertex:Yh,fog_fragment:$h,fog_pars_fragment:Kh,gradientmap_pars_fragment:Zh,lightmap_fragment:Jh,lightmap_pars_fragment:Qh,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:sf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:uf,lights_fragment_begin:hf,lights_fragment_maps:ff,lights_fragment_end:df,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:xf,map_pars_fragment:vf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:bf,morphcolor_vertex:wf,morphnormal_vertex:Ef,morphtarget_pars_vertex:Tf,morphtarget_vertex:Af,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:Lf,normal_pars_vertex:Rf,normal_vertex:Df,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Ff,output_fragment:zf,packing:Bf,premultiplied_alpha_fragment:kf,project_vertex:Gf,dithering_fragment:Hf,dithering_pars_fragment:Vf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:jf,shadowmap_vertex:Yf,shadowmask_pars_fragment:$f,skinbase_vertex:Kf,skinning_pars_vertex:Zf,skinning_vertex:Jf,skinnormal_vertex:Qf,specularmap_fragment:ed,specularmap_pars_fragment:td,tonemapping_fragment:nd,tonemapping_pars_fragment:id,transmission_fragment:rd,transmission_pars_fragment:sd,uv_pars_fragment:od,uv_pars_vertex:ad,uv_vertex:ld,worldpos_vertex:cd,background_vert:ud,background_frag:hd,backgroundCube_vert:fd,backgroundCube_frag:dd,cube_vert:pd,cube_frag:md,depth_vert:gd,depth_frag:_d,distanceRGBA_vert:xd,distanceRGBA_frag:vd,equirect_vert:Md,equirect_frag:Sd,linedashed_vert:yd,linedashed_frag:bd,meshbasic_vert:wd,meshbasic_frag:Ed,meshlambert_vert:Td,meshlambert_frag:Ad,meshmatcap_vert:Cd,meshmatcap_frag:Pd,meshnormal_vert:Ld,meshnormal_frag:Rd,meshphong_vert:Dd,meshphong_frag:Id,meshphysical_vert:Ud,meshphysical_frag:Od,meshtoon_vert:Nd,meshtoon_frag:Fd,points_vert:zd,points_frag:Bd,shadow_vert:kd,shadow_frag:Gd,sprite_vert:Hd,sprite_frag:Vd},se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaTest:{value:0}}},jt={basic:{uniforms:gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:gt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:gt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:gt([se.points,se.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:gt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:gt([se.common,se.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:gt([se.sprite,se.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:gt([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:gt([se.lights,se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};jt.physical={uniforms:gt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Lr={r:0,b:0,g:0};function Wd(i,e,t,n,r,s,a){const o=new Be(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(m,h){let E=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b));const v=i.xr,x=v.getSession&&v.getSession();x&&x.environmentBlendMode==="additive"&&(b=null),b===null?_(o,c):b&&b.isColor&&(_(b,1),E=!0),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===qr)?(u===void 0&&(u=new _n(new or(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ri(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=b.encoding!==Ve,(f!==b||d!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new _n(new _o(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ri(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=b.encoding!==Ve,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,h){m.getRGB(Lr,jl(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),c=h,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function qd(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=m(null);let l=c,u=!1;function f(U,B,Z,K,X){let ne=!1;if(a){const J=_(K,Z,B);l!==J&&(l=J,p(l.object)),ne=h(U,K,Z,X),ne&&E(U,K,Z,X)}else{const J=B.wireframe===!0;(l.geometry!==K.id||l.program!==Z.id||l.wireframe!==J)&&(l.geometry=K.id,l.program=Z.id,l.wireframe=J,ne=!0)}X!==null&&t.update(X,34963),(ne||u)&&(u=!1,N(U,B,Z,K),X!==null&&i.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?i.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,B,Z){const K=Z.wireframe===!0;let X=o[U.id];X===void 0&&(X={},o[U.id]=X);let ne=X[B.id];ne===void 0&&(ne={},X[B.id]=ne);let J=ne[K];return J===void 0&&(J=m(d()),ne[K]=J),J}function m(U){const B=[],Z=[],K=[];for(let X=0;X<r;X++)B[X]=0,Z[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:K,object:U,attributes:{},index:null}}function h(U,B,Z,K){const X=l.attributes,ne=B.attributes;let J=0;const Me=Z.getAttributes();for(const ie in Me)if(Me[ie].location>=0){const $=X[ie];let oe=ne[ie];if(oe===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;J++}return l.attributesNum!==J||l.index!==K}function E(U,B,Z,K){const X={},ne=B.attributes;let J=0;const Me=Z.getAttributes();for(const ie in Me)if(Me[ie].location>=0){let $=ne[ie];$===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&($=U.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),X[ie]=oe,J++}l.attributes=X,l.attributesNum=J,l.index=K}function b(){const U=l.newAttributes;for(let B=0,Z=U.length;B<Z;B++)U[B]=0}function v(U){x(U,0)}function x(U,B){const Z=l.newAttributes,K=l.enabledAttributes,X=l.attributeDivisors;Z[U]=1,K[U]===0&&(i.enableVertexAttribArray(U),K[U]=1),X[U]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,B),X[U]=B)}function C(){const U=l.newAttributes,B=l.enabledAttributes;for(let Z=0,K=B.length;Z<K;Z++)B[Z]!==U[Z]&&(i.disableVertexAttribArray(Z),B[Z]=0)}function L(U,B,Z,K,X,ne){n.isWebGL2===!0&&(Z===5124||Z===5125)?i.vertexAttribIPointer(U,B,Z,X,ne):i.vertexAttribPointer(U,B,Z,K,X,ne)}function N(U,B,Z,K){if(n.isWebGL2===!1&&(U.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const X=K.attributes,ne=Z.getAttributes(),J=B.defaultAttributeValues;for(const Me in ne){const ie=ne[Me];if(ie.location>=0){let G=X[Me];if(G===void 0&&(Me==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),Me==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),G!==void 0){const $=G.normalized,oe=G.itemSize,ce=t.get(G);if(ce===void 0)continue;const z=ce.buffer,ye=ce.type,ve=ce.bytesPerElement;if(G.isInterleavedBufferAttribute){const re=G.data,xe=re.stride,Ne=G.offset;if(re.isInstancedInterleavedBuffer){for(let me=0;me<ie.locationSize;me++)x(ie.location+me,re.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let me=0;me<ie.locationSize;me++)v(ie.location+me);i.bindBuffer(34962,z);for(let me=0;me<ie.locationSize;me++)L(ie.location+me,oe/ie.locationSize,ye,$,xe*ve,(Ne+oe/ie.locationSize*me)*ve)}else{if(G.isInstancedBufferAttribute){for(let re=0;re<ie.locationSize;re++)x(ie.location+re,G.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let re=0;re<ie.locationSize;re++)v(ie.location+re);i.bindBuffer(34962,z);for(let re=0;re<ie.locationSize;re++)L(ie.location+re,oe/ie.locationSize,ye,$,oe*ve,oe/ie.locationSize*re*ve)}}else if(J!==void 0){const $=J[Me];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(ie.location,$);break;case 3:i.vertexAttrib3fv(ie.location,$);break;case 4:i.vertexAttrib4fv(ie.location,$);break;default:i.vertexAttrib1fv(ie.location,$)}}}}C()}function S(){W();for(const U in o){const B=o[U];for(const Z in B){const K=B[Z];for(const X in K)g(K[X].object),delete K[X];delete B[Z]}delete o[U]}}function T(U){if(o[U.id]===void 0)return;const B=o[U.id];for(const Z in B){const K=B[Z];for(const X in K)g(K[X].object),delete K[X];delete B[Z]}delete o[U.id]}function Y(U){for(const B in o){const Z=o[B];if(Z[U.id]===void 0)continue;const K=Z[U.id];for(const X in K)g(K[X].object),delete K[X];delete Z[U.id]}}function W(){D(),u=!0,l!==c&&(l=c,p(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:W,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:Y,initAttributes:b,enableAttribute:v,disableUnusedAttributes:C}}function Xd(i,e,t,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let d,p;if(r)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,l,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function jd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),d=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),_=i.getParameter(34921),m=i.getParameter(36347),h=i.getParameter(36348),E=i.getParameter(36349),b=d>0,v=a||e.has("OES_texture_float"),x=b&&v,C=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:x,maxSamples:C}}function Yd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new In,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:n,b=E*4;let v=h.clippingState||null;c.value=v,v=u(g,d,b,p);for(let x=0;x!==b;++x)v[x]=t[x];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const h=p+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,v=p;b!==_;++b,v+=4)a.copy(f[b]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $d(i){let e=new WeakMap;function t(a,o){return o===Ys?a.mapping=Ci:o===$s&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ys||o===$s)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new uh(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zl extends Yl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,Ea=[.125,.215,.35,.446,.526,.582],On=20,Os=new Zl,Ta=new Be;let Ns=null;const Un=(1+Math.sqrt(5))/2,_i=1/Un,Aa=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Un,_i),new R(0,Un,-_i),new R(_i,0,Un),new R(-_i,0,Un),new R(Un,_i,0),new R(-Un,_i,0)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ns=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=La(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns),e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ki,format:Gt,encoding:Xn,depthBuffer:!1},r=Pa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(s)),this._blurMaterial=Zd(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,Os)}_sceneToCubeUV(e,t,n,r){const o=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ta),u.toneMapping=sn,u.autoClear=!1;const p=new Wl({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),g=new _n(new or,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Ta),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):E===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const b=this._cubeSize;Rr(r,E*b,h>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ci||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=La());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Aa[(r-1)%Aa.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*On-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):On;m>On&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${On}`);const h=[];let E=0;for(let L=0;L<On;++L){const N=L/_,S=Math.exp(-N*N/2);h.push(S),L===0?E+=S:L<m&&(E+=2*S)}for(let L=0;L<h.length;L++)h[L]=h[L]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const v=this._sizeLods[r],x=3*v*(r>b-yi?r-b+yi:0),C=4*(this._cubeSize-v);Rr(t,x,C,3*v,2*v),c.setRenderTarget(t),c.render(f,Os)}}function Kd(i){const e=[],t=[],n=[];let r=i;const s=i-yi+1+Ea.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-yi?c=Ea[a-i+yi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),v=new Float32Array(h*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,N=C>2?0:-1,S=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];E.set(S,_*g*C),b.set(d,m*g*C);const T=[C,C,C,C,C,C];v.set(T,h*g*C)}const x=new an;x.setAttribute("position",new At(E,_)),x.setAttribute("uv",new At(b,m)),x.setAttribute("faceIndex",new At(v,h)),e.push(x),r>yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pa(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Zd(i,e,t){const n=new Float32Array(On),r=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function La(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ra(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ys||c===$s,u=c===Ci||c===Pi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ca(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ca(i));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Qd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ep(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],34962)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,v=E.length;b<v;b+=3){const x=E[b+0],C=E[b+1],L=E[b+2];d.push(x,C,C,L,L,x)}}else{const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const x=b+0,C=b+1,L=b+2;d.push(x,C,C,L,L,x)}}const m=new(Fl(d)?Xl:ql)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function tp(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,p){i.drawElements(s,p,o,d*c),t.update(p,s,1)}function f(d,p,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,d*c,g),t.update(p,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function np(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ip(i,e){return i[0]-e[0]}function rp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sp(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let B=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let S=0;b===!0&&(S=1),v===!0&&(S=2),x===!0&&(S=3);let T=u.attributes.position.count*S,Y=1;T>e.maxTextureSize&&(Y=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const W=new Float32Array(T*Y*4*_),D=new kl(W,T,Y,_);D.type=Fn,D.needsUpdate=!0;const U=S*4;for(let Z=0;Z<_;Z++){const K=C[Z],X=L[Z],ne=N[Z],J=T*Y*4*Z;for(let Me=0;Me<K.count;Me++){const ie=Me*U;b===!0&&(a.fromBufferAttribute(K,Me),W[J+ie+0]=a.x,W[J+ie+1]=a.y,W[J+ie+2]=a.z,W[J+ie+3]=0),v===!0&&(a.fromBufferAttribute(X,Me),W[J+ie+4]=a.x,W[J+ie+5]=a.y,W[J+ie+6]=a.z,W[J+ie+7]=0),x===!0&&(a.fromBufferAttribute(ne,Me),W[J+ie+8]=a.x,W[J+ie+9]=a.y,W[J+ie+10]=a.z,W[J+ie+11]=ne.itemSize===4?a.w:1)}}m={count:_,texture:D,size:new Pe(T,Y)},s.set(u,m),u.addEventListener("dispose",B)}let h=0;for(let b=0;b<d.length;b++)h+=d[b];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<g;v++){const x=_[v];x[0]=v,x[1]=d[v]}_.sort(rp);for(let v=0;v<8;v++)v<g&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ip);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let v=0;v<8;v++){const x=o[v],C=x[0],L=x[1];C!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+v)!==m[C]&&u.setAttribute("morphTarget"+v,m[C]),h&&u.getAttribute("morphNormal"+v)!==h[C]&&u.setAttribute("morphNormal"+v,h[C]),r[v]=L,E+=L):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),h&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const b=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function op(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Jl=new Mt,Ql=new kl,ec=new Yu,tc=new $l,Da=[],Ia=[],Ua=new Float32Array(16),Oa=new Float32Array(9),Na=new Float32Array(4);function zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Da[r];if(s===void 0&&(s=new Float32Array(r),Da[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function st(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yr(i,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2fv(this.addr,e),st(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;i.uniform3fv(this.addr,e),st(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4fv(this.addr,e),st(t,e)}}function hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Na.set(n),i.uniformMatrix2fv(this.addr,!1,Na),st(t,n)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Oa.set(n),i.uniformMatrix3fv(this.addr,!1,Oa),st(t,n)}}function dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Ua.set(n),i.uniformMatrix4fv(this.addr,!1,Ua),st(t,n)}}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2iv(this.addr,e),st(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3iv(this.addr,e),st(t,e)}}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4iv(this.addr,e),st(t,e)}}function xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2uiv(this.addr,e),st(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3uiv(this.addr,e),st(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4uiv(this.addr,e),st(t,e)}}function yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Jl,r)}function bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ec,r)}function wp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tc,r)}function Ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ql,r)}function Tp(i){switch(i){case 5126:return ap;case 35664:return lp;case 35665:return cp;case 35666:return up;case 35674:return hp;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Ap(i,e){i.uniform1fv(this.addr,e)}function Cp(i,e){const t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Pp(i,e){const t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Lp(i,e){const t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Rp(i,e){const t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dp(i,e){const t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ip(i,e){const t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Up(i,e){i.uniform1iv(this.addr,e)}function Op(i,e){i.uniform2iv(this.addr,e)}function Np(i,e){i.uniform3iv(this.addr,e)}function Fp(i,e){i.uniform4iv(this.addr,e)}function zp(i,e){i.uniform1uiv(this.addr,e)}function Bp(i,e){i.uniform2uiv(this.addr,e)}function kp(i,e){i.uniform3uiv(this.addr,e)}function Gp(i,e){i.uniform4uiv(this.addr,e)}function Hp(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Jl,s[a])}function Vp(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ec,s[a])}function Wp(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tc,s[a])}function qp(i,e,t){const n=this.cache,r=e.length,s=Yr(t,r);rt(n,s)||(i.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ql,s[a])}function Xp(i){switch(i){case 5126:return Ap;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Rp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Up;case 35667:case 35671:return Op;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return zp;case 36294:return Bp;case 36295:return kp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return qp}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Tp(t.type)}}class Yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Xp(t.type)}}class $p{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Fs=/(\w+)(\])?(\[|\.)?/g;function Fa(i,e){i.seq.push(e),i.map[e.id]=e}function Kp(i,e,t){const n=i.name,r=n.length;for(Fs.lastIndex=0;;){const s=Fs.exec(n),a=Fs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Fa(t,l===void 0?new jp(o,i,e):new Yp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new $p(o),Fa(t,f)),t=f}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Kp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function za(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Zp=0;function Jp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Qp(i){switch(i){case Xn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Ba(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jp(i.getShaderSource(e),a)}else return r}function em(i,e){const t=Qp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tm(i,e){let t;switch(e){case du:t="Linear";break;case pu:t="Reinhard";break;case mu:t="OptimizedCineon";break;case gu:t="ACESFilmic";break;case _u:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function im(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function rm(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xi(i){return i!==""}function ka(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ga(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(sm,om)}function om(i,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return eo(t)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ha(i){return i.replace(am,lm)}function lm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Va(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ll?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function um(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function fm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case hu:e="ENVMAP_BLENDING_MIX";break;case fu:e="ENVMAP_BLENDING_ADD";break}return e}function dm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=cm(t),l=um(t),u=hm(t),f=fm(t),d=dm(t),p=t.isWebGL2?"":nm(t),g=im(s),_=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),h=[p,g].filter(Xi).join(`
`),h.length>0&&(h+=`
`)):(m=[Va(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),h=[p,Va(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==sn?tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,em("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=eo(a),a=ka(a,t),a=Ga(a,t),o=eo(o),o=ka(o,t),o=Ga(o,t),a=Ha(a),o=Ha(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+m+a,v=E+h+o,x=za(r,35633,b),C=za(r,35632,v);if(r.attachShader(_,x),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),T=r.getShaderInfoLog(x).trim(),Y=r.getShaderInfoLog(C).trim();let W=!0,D=!0;if(r.getProgramParameter(_,35714)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,x,C);else{const U=Ba(r,x,"vertex"),B=Ba(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+S+`
`+U+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||Y==="")&&(D=!1);D&&(this.diagnostics={runnable:W,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(x),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Nr(r,_)),L};let N;return this.getAttributes=function(){return N===void 0&&(N=rm(r,_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=C,this}let mm=0;class gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _m(e),t.set(e,n)),n}}class _m{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}}function xm(i,e,t,n,r,s,a){const o=new Hl,c=new gm,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===1?"uv2":"uv"}function m(S,T,Y,W,D){const U=W.fog,B=D.geometry,Z=S.isMeshStandardMaterial?W.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),X=K&&K.mapping===qr?K.image.height:null,ne=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Me=J!==void 0?J.length:0;let ie=0;B.morphAttributes.position!==void 0&&(ie=1),B.morphAttributes.normal!==void 0&&(ie=2),B.morphAttributes.color!==void 0&&(ie=3);let G,$,oe,ce;if(ne){const he=jt[ne];G=he.vertexShader,$=he.fragmentShader}else G=S.vertexShader,$=S.fragmentShader,c.update(S),oe=c.getVertexShaderID(S),ce=c.getFragmentShaderID(S);const z=i.getRenderTarget(),ye=D.isInstancedMesh===!0,ve=!!S.map,re=!!S.matcap,xe=!!K,Ne=!!S.aoMap,me=!!S.lightMap,Ee=!!S.bumpMap,je=!!S.normalMap,qe=!!S.displacementMap,et=!!S.emissiveMap,Ye=!!S.metalnessMap,Oe=!!S.roughnessMap,Ge=S.clearcoat>0,ct=S.iridescence>0,w=S.sheen>0,M=S.transmission>0,k=Ge&&!!S.clearcoatMap,Q=Ge&&!!S.clearcoatNormalMap,te=Ge&&!!S.clearcoatRoughnessMap,ae=ct&&!!S.iridescenceMap,A=ct&&!!S.iridescenceThicknessMap,j=w&&!!S.sheenColorMap,F=w&&!!S.sheenRoughnessMap,le=!!S.specularMap,fe=!!S.specularColorMap,pe=!!S.specularIntensityMap,ue=M&&!!S.transmissionMap,de=M&&!!S.thicknessMap,be=!!S.gradientMap,Ce=!!S.alphaMap,$e=S.alphaTest>0,P=!!S.extensions,V=!!B.attributes.uv2;return{isWebGL2:u,shaderID:ne,shaderName:S.type,vertexShader:G,fragmentShader:$,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:ye,instancingColor:ye&&D.instanceColor!==null,supportsVertexTextures:d,outputEncoding:z===null?i.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Xn,map:ve,matcap:re,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:X,aoMap:Ne,lightMap:me,bumpMap:Ee,normalMap:je,displacementMap:d&&qe,emissiveMap:et,normalMapObjectSpace:je&&S.normalMapType===Fu,normalMapTangentSpace:je&&S.normalMapType===Nu,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&S.map.encoding===Ve,metalnessMap:Ye,roughnessMap:Oe,clearcoat:Ge,clearcoatMap:k,clearcoatNormalMap:Q,clearcoatRoughnessMap:te,iridescence:ct,iridescenceMap:ae,iridescenceThicknessMap:A,sheen:w,sheenColorMap:j,sheenRoughnessMap:F,specularMap:le,specularColorMap:fe,specularIntensityMap:pe,transmission:M,transmissionMap:ue,thicknessMap:de,gradientMap:be,opaque:S.transparent===!1&&S.blending===bi,alphaMap:Ce,alphaTest:$e,combine:S.combine,mapUv:ve&&_(S.map.channel),aoMapUv:Ne&&_(S.aoMap.channel),lightMapUv:me&&_(S.lightMap.channel),bumpMapUv:Ee&&_(S.bumpMap.channel),normalMapUv:je&&_(S.normalMap.channel),displacementMapUv:qe&&_(S.displacementMap.channel),emissiveMapUv:et&&_(S.emissiveMap.channel),metalnessMapUv:Ye&&_(S.metalnessMap.channel),roughnessMapUv:Oe&&_(S.roughnessMap.channel),clearcoatMapUv:k&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:A&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:j&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:F&&_(S.sheenRoughnessMap.channel),specularMapUv:le&&_(S.specularMap.channel),specularColorMapUv:fe&&_(S.specularColorMap.channel),specularIntensityMapUv:pe&&_(S.specularIntensityMap.channel),transmissionMapUv:ue&&_(S.transmissionMap.channel),thicknessMapUv:de&&_(S.thicknessMap.channel),alphaMapUv:Ce&&_(S.alphaMap.channel),vertexTangents:je&&!!B.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:V,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(ve||Ce),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:sn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===rn,flipSided:S.side===vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:P&&S.extensions.derivatives===!0,extensionFragDepth:P&&S.extensions.fragDepth===!0,extensionDrawBuffers:P&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:P&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)T.push(Y),T.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(E(T,S),b(T,S),T.push(i.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function E(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUvs2&&o.enable(13),T.vertexTangents&&o.enable(14),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.decodeVideoTexture&&o.enable(17),T.opaque&&o.enable(18),T.pointsUvs&&o.enable(19),S.push(o.mask)}function v(S){const T=g[S.type];let Y;if(T){const W=jt[T];Y=oh.clone(W.uniforms)}else Y=S.uniforms;return Y}function x(S,T){let Y;for(let W=0,D=l.length;W<D;W++){const U=l[W];if(U.cacheKey===T){Y=U,++Y.usedTimes;break}}return Y===void 0&&(Y=new pm(i,T,S,s),l.push(Y)),Y}function C(S){if(--S.usedTimes===0){const T=l.indexOf(S);l[T]=l[l.length-1],l.pop(),S.destroy()}}function L(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:x,releaseProgram:C,releaseShaderCache:L,programs:l,dispose:N}}function vm(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,p,g,_,m){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function o(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||Mm),n.length>1&&n.sort(d||Wa),r.length>1&&r.sort(d||Wa)}function u(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Sm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new qa,i.set(n,[a])):r>=s.length?(a=new qa,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ym(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Be};break;case"SpotLight":t={position:new R,direction:new R,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wm=0;function Em(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tm(i,e){const t=new ym,n=bm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new R);const s=new R,a=new Qe,o=new Qe;function c(u,f){let d=0,p=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,m=0,h=0,E=0,b=0,v=0,x=0,C=0,L=0,N=0;u.sort(Em);const S=f===!0?Math.PI:1;for(let Y=0,W=u.length;Y<W;Y++){const D=u[Y],U=D.color,B=D.intensity,Z=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*B*S,p+=U.g*B*S,g+=U.b*B*S;else if(D.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(D.sh.coefficients[X],B);else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const ne=D.shadow,J=n.get(D);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=K,r.directionalShadowMatrix[_]=D.shadow.matrix,v++}r.directional[_]=X,_++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(B*S),X.distance=Z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,r.spot[h]=X;const ne=D.shadow;if(D.map&&(r.spotLightMap[L]=D.map,L++,ne.updateMatrices(D),D.castShadow&&N++),r.spotLightMatrix[h]=ne.matrix,D.castShadow){const J=n.get(D);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,r.spotShadow[h]=J,r.spotShadowMap[h]=K,C++}h++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=X,E++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*S),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ne=D.shadow,J=n.get(D);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,J.shadowCameraNear=ne.camera.near,J.shadowCameraFar=ne.camera.far,r.pointShadow[m]=J,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=D.shadow.matrix,x++}r.point[m]=X,m++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(B*S),X.groundColor.copy(D.groundColor).multiplyScalar(B*S),r.hemi[b]=X,b++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==h||T.rectAreaLength!==E||T.hemiLength!==b||T.numDirectionalShadows!==v||T.numPointShadows!==x||T.numSpotShadows!==C||T.numSpotMaps!==L)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=C+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,T.directionalLength=_,T.pointLength=m,T.spotLength=h,T.rectAreaLength=E,T.hemiLength=b,T.numDirectionalShadows=v,T.numPointShadows=x,T.numSpotShadows=C,T.numSpotMaps=L,r.version=wm++)}function l(u,f){let d=0,p=0,g=0,_=0,m=0;const h=f.matrixWorldInverse;for(let E=0,b=u.length;E<b;E++){const v=u[E];if(v.isDirectionalLight){const x=r.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(h),d++}else if(v.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(h),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(h),g++}else if(v.isRectAreaLight){const x=r.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(h),o.identity(),a.copy(v.matrixWorld),a.premultiply(h),o.extractRotation(a),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=r.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(h),p++}else if(v.isHemisphereLight){const x=r.hemi[m];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(h),m++}}}return{setup:c,setupView:l,state:r}}function Xa(i,e){const t=new Tm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Am(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Xa(i,e),t.set(s,[c])):a>=o.length?(c=new Xa(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cm extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pm extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dm(i,e,t){let n=new go;const r=new Pe,s=new Pe,a=new We,o=new Cm({depthPacking:Ou}),c=new Pm,l={},u=t.maxTextureSize,f={[vn]:vt,[vt]:vn,[rn]:rn},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Lm,fragmentShader:Rm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll,this.render=function(v,x,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const L=i.getRenderTarget(),N=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),T=i.state;T.setBlending(xn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let Y=0,W=v.length;Y<W;Y++){const D=v[Y],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const B=U.getFrameExtents();if(r.multiply(B),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,U.mapSize.y=s.y)),U.map===null){const K=this.type!==qi?{minFilter:_t,magFilter:_t}:{};U.map=new jn(r.x,r.y,K),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const Z=U.getViewportCount();for(let K=0;K<Z;K++){const X=U.getViewport(K);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),T.viewport(a),U.updateMatrices(D,K),n=U.getFrustum(),b(x,C,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===qi&&h(U,C),U.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(L,N,S)};function h(v,x){const C=e.update(_);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new jn(r.x,r.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(x,null,C,d,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(x,null,C,p,_,null)}function E(v,x,C,L){let N=null;const S=C.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(S!==void 0)N=S;else if(N=C.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const T=N.uuid,Y=x.uuid;let W=l[T];W===void 0&&(W={},l[T]=W);let D=W[Y];D===void 0&&(D=N.clone(),W[Y]=D),N=D}if(N.visible=x.visible,N.wireframe=x.wireframe,L===qi?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:f[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,C.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const T=i.properties.get(N);T.light=C}return N}function b(v,x,C,L,N){if(v.visible===!1)return;if(v.layers.test(x.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&N===qi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld);const Y=e.update(v),W=v.material;if(Array.isArray(W)){const D=Y.groups;for(let U=0,B=D.length;U<B;U++){const Z=D[U],K=W[Z.materialIndex];if(K&&K.visible){const X=E(v,K,L,N);i.renderBufferDirect(C,null,Y,X,v,Z)}}}else if(W.visible){const D=E(v,W,L,N);i.renderBufferDirect(C,null,Y,D,v,null)}}const T=v.children;for(let Y=0,W=T.length;Y<W;Y++)b(T[Y],x,C,L,N)}}function Im(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const V=new We;let ee=null;const he=new We(0,0,0,0);return{setMask:function(ge){ee!==ge&&!P&&(i.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){P=ge},setClear:function(ge,He,Xe,ut,fn){fn===!0&&(ge*=ut,He*=ut,Xe*=ut),V.set(ge,He,Xe,ut),he.equals(V)===!1&&(i.clearColor(ge,He,Xe,ut),he.copy(V))},reset:function(){P=!1,ee=null,he.set(-1,0,0,0)}}}function s(){let P=!1,V=null,ee=null,he=null;return{setTest:function(ge){ge?z(2929):ye(2929)},setMask:function(ge){V!==ge&&!P&&(i.depthMask(ge),V=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case ru:i.depthFunc(512);break;case su:i.depthFunc(519);break;case ou:i.depthFunc(513);break;case js:i.depthFunc(515);break;case au:i.depthFunc(514);break;case lu:i.depthFunc(518);break;case cu:i.depthFunc(516);break;case uu:i.depthFunc(517);break;default:i.depthFunc(515)}ee=ge}},setLocked:function(ge){P=ge},setClear:function(ge){he!==ge&&(i.clearDepth(ge),he=ge)},reset:function(){P=!1,V=null,ee=null,he=null}}}function a(){let P=!1,V=null,ee=null,he=null,ge=null,He=null,Xe=null,ut=null,fn=null;return{setTest:function(Ke){P||(Ke?z(2960):ye(2960))},setMask:function(Ke){V!==Ke&&!P&&(i.stencilMask(Ke),V=Ke)},setFunc:function(Ke,Lt,Vt){(ee!==Ke||he!==Lt||ge!==Vt)&&(i.stencilFunc(Ke,Lt,Vt),ee=Ke,he=Lt,ge=Vt)},setOp:function(Ke,Lt,Vt){(He!==Ke||Xe!==Lt||ut!==Vt)&&(i.stencilOp(Ke,Lt,Vt),He=Ke,Xe=Lt,ut=Vt)},setLocked:function(Ke){P=Ke},setClear:function(Ke){fn!==Ke&&(i.clearStencil(Ke),fn=Ke)},reset:function(){P=!1,V=null,ee=null,he=null,ge=null,He=null,Xe=null,ut=null,fn=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,h=!1,E=null,b=null,v=null,x=null,C=null,L=null,N=null,S=!1,T=null,Y=null,W=null,D=null,U=null;const B=i.getParameter(35661);let Z=!1,K=0;const X=i.getParameter(7938);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=K>=2);let ne=null,J={};const Me=i.getParameter(3088),ie=i.getParameter(2978),G=new We().fromArray(Me),$=new We().fromArray(ie);function oe(P,V,ee){const he=new Uint8Array(4),ge=i.createTexture();i.bindTexture(P,ge),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let He=0;He<ee;He++)i.texImage2D(V+He,0,6408,1,1,0,6408,5121,he);return ge}const ce={};ce[3553]=oe(3553,3553,1),ce[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),z(2929),c.setFunc(js),qe(!1),et(Do),z(2884),Ee(xn);function z(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function ye(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function ve(P,V){return p[P]!==V?(i.bindFramebuffer(P,V),p[P]=V,n&&(P===36009&&(p[36160]=V),P===36160&&(p[36009]=V)),!0):!1}function re(P,V){let ee=_,he=!1;if(P)if(ee=g.get(V),ee===void 0&&(ee=[],g.set(V,ee)),P.isWebGLMultipleRenderTargets){const ge=P.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let He=0,Xe=ge.length;He<Xe;He++)ee[He]=36064+He;ee.length=ge.length,he=!0}}else ee[0]!==36064&&(ee[0]=36064,he=!0);else ee[0]!==1029&&(ee[0]=1029,he=!0);he&&(t.isWebGL2?i.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function xe(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const Ne={[Mi]:32774,[jc]:32778,[Yc]:32779};if(n)Ne[No]=32775,Ne[Fo]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ne[No]=P.MIN_EXT,Ne[Fo]=P.MAX_EXT)}const me={[$c]:0,[Kc]:1,[Zc]:768,[Rl]:770,[iu]:776,[tu]:774,[Qc]:772,[Jc]:769,[Dl]:771,[nu]:775,[eu]:773};function Ee(P,V,ee,he,ge,He,Xe,ut){if(P===xn){h===!0&&(ye(3042),h=!1);return}if(h===!1&&(z(3042),h=!0),P!==Xc){if(P!==E||ut!==S){if((b!==Mi||C!==Mi)&&(i.blendEquation(32774),b=Mi,C=Mi),ut)switch(P){case bi:i.blendFuncSeparate(1,771,1,771);break;case Io:i.blendFunc(1,1);break;case Uo:i.blendFuncSeparate(0,769,0,1);break;case Oo:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bi:i.blendFuncSeparate(770,771,1,771);break;case Io:i.blendFunc(770,1);break;case Uo:i.blendFuncSeparate(0,769,0,1);break;case Oo:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,x=null,L=null,N=null,E=P,S=ut}return}ge=ge||V,He=He||ee,Xe=Xe||he,(V!==b||ge!==C)&&(i.blendEquationSeparate(Ne[V],Ne[ge]),b=V,C=ge),(ee!==v||he!==x||He!==L||Xe!==N)&&(i.blendFuncSeparate(me[ee],me[he],me[He],me[Xe]),v=ee,x=he,L=He,N=Xe),E=P,S=!1}function je(P,V){P.side===rn?ye(2884):z(2884);let ee=P.side===vt;V&&(ee=!ee),qe(ee),P.blending===bi&&P.transparent===!1?Ee(xn):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);const he=P.stencilWrite;l.setTest(he),he&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?z(32926):ye(32926)}function qe(P){T!==P&&(P?i.frontFace(2304):i.frontFace(2305),T=P)}function et(P){P!==Vc?(z(2884),P!==Y&&(P===Do?i.cullFace(1029):P===Wc?i.cullFace(1028):i.cullFace(1032))):ye(2884),Y=P}function Ye(P){P!==W&&(Z&&i.lineWidth(P),W=P)}function Oe(P,V,ee){P?(z(32823),(D!==V||U!==ee)&&(i.polygonOffset(V,ee),D=V,U=ee)):ye(32823)}function Ge(P){P?z(3089):ye(3089)}function ct(P){P===void 0&&(P=33984+B-1),ne!==P&&(i.activeTexture(P),ne=P)}function w(P,V,ee){ee===void 0&&(ne===null?ee=33984+B-1:ee=ne);let he=J[ee];he===void 0&&(he={type:void 0,texture:void 0},J[ee]=he),(he.type!==P||he.texture!==V)&&(ne!==ee&&(i.activeTexture(ee),ne=ee),i.bindTexture(P,V||ce[P]),he.type=P,he.texture=V)}function M(){const P=J[ne];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(P){G.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),G.copy(P))}function de(P){$.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function be(P,V){let ee=f.get(V);ee===void 0&&(ee=new WeakMap,f.set(V,ee));let he=ee.get(P);he===void 0&&(he=i.getUniformBlockIndex(V,P.name),ee.set(P,he))}function Ce(P,V){const he=f.get(V).get(P);u.get(V)!==he&&(i.uniformBlockBinding(V,he,P.__bindingPointIndex),u.set(V,he))}function $e(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,J={},p={},g=new WeakMap,_=[],m=null,h=!1,E=null,b=null,v=null,x=null,C=null,L=null,N=null,S=!1,T=null,Y=null,W=null,D=null,U=null,G.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:z,disable:ye,bindFramebuffer:ve,drawBuffers:re,useProgram:xe,setBlending:Ee,setMaterial:je,setFlipSided:qe,setCullFace:et,setLineWidth:Ye,setPolygonOffset:Oe,setScissorTest:Ge,activeTexture:ct,bindTexture:w,unbindTexture:M,compressedTexImage2D:k,compressedTexImage3D:Q,texImage2D:fe,texImage3D:pe,updateUBOMapping:be,uniformBlockBinding:Ce,texStorage2D:F,texStorage3D:le,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:A,compressedTexSubImage3D:j,scissor:ue,viewport:de,reset:$e}}function Um(i,e,t,n,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,M){return h?new OffscreenCanvas(w,M):Ji("canvas")}function b(w,M,k,Q){let te=1;if((w.width>Q||w.height>Q)&&(te=Q/Math.max(w.width,w.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ae=M?ku:Math.floor,A=ae(te*w.width),j=ae(te*w.height);_===void 0&&(_=E(A,j));const F=k?E(A,j):_;return F.width=A,F.height=j,F.getContext("2d").drawImage(w,0,0,A,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+A+"x"+j+")."),F}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return ua(w.width)&&ua(w.height)}function x(w){return o?!1:w.wrapS!==kt||w.wrapT!==kt||w.minFilter!==_t&&w.minFilter!==Dt}function C(w,M){return w.generateMipmaps&&M&&w.minFilter!==_t&&w.minFilter!==Dt}function L(w){i.generateMipmap(w)}function N(w,M,k,Q,te=!1){if(o===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae=M;return M===6403&&(k===5126&&(ae=33326),k===5131&&(ae=33325),k===5121&&(ae=33321)),M===33319&&(k===5126&&(ae=33328),k===5131&&(ae=33327),k===5121&&(ae=33323)),M===6408&&(k===5126&&(ae=34836),k===5131&&(ae=34842),k===5121&&(ae=Q===Ve&&te===!1?35907:32856),k===32819&&(ae=32854),k===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function S(w,M,k){return C(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==_t&&w.minFilter!==Dt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){return w===_t||w===zo||w===cs?9728:9729}function Y(w){const M=w.target;M.removeEventListener("dispose",Y),D(M),M.isVideoTexture&&g.delete(M)}function W(w){const M=w.target;M.removeEventListener("dispose",W),B(M)}function D(w){const M=n.get(w);if(M.__webglInit===void 0)return;const k=w.source,Q=m.get(k);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(w),Object.keys(Q).length===0&&m.delete(k)}n.remove(w)}function U(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const k=w.source,Q=m.get(k);delete Q[M.__cacheKey],a.memory.textures--}function B(w){const M=w.texture,k=n.get(w),Q=n.get(M);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)i.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(i.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let te=0,ae=M.length;te<ae;te++){const A=n.get(M[te]);A.__webglTexture&&(i.deleteTexture(A.__webglTexture),a.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(w)}let Z=0;function K(){Z=0}function X(){const w=Z;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),Z+=1,w}function ne(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function J(w,M){const k=n.get(w);if(w.isVideoTexture&&Ge(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,w,M);return}}t.bindTexture(3553,k.__webglTexture,33984+M)}function Me(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ye(k,w,M);return}t.bindTexture(35866,k.__webglTexture,33984+M)}function ie(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ye(k,w,M);return}t.bindTexture(32879,k.__webglTexture,33984+M)}function G(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ve(k,w,M);return}t.bindTexture(34067,k.__webglTexture,33984+M)}const $={[Ks]:10497,[kt]:33071,[Zs]:33648},oe={[_t]:9728,[zo]:9984,[cs]:9986,[Dt]:9729,[xu]:9985,[$i]:9987};function ce(w,M,k){if(k?(i.texParameteri(w,10242,$[M.wrapS]),i.texParameteri(w,10243,$[M.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,$[M.wrapR]),i.texParameteri(w,10240,oe[M.magFilter]),i.texParameteri(w,10241,oe[M.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(M.wrapS!==kt||M.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,T(M.magFilter)),i.texParameteri(w,10241,T(M.minFilter)),M.minFilter!==_t&&M.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===_t||M.minFilter!==cs&&M.minFilter!==$i||M.type===Fn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ki&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function z(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",Y));const Q=M.source;let te=m.get(Q);te===void 0&&(te={},m.set(Q,te));const ae=ne(M);if(ae!==w.__cacheKey){te[ae]===void 0&&(te[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[ae].usedTimes++;const A=te[w.__cacheKey];A!==void 0&&(te[w.__cacheKey].usedTimes--,A.usedTimes===0&&U(M)),w.__cacheKey=ae,w.__webglTexture=te[ae].texture}return k}function ye(w,M,k){let Q=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=35866),M.isData3DTexture&&(Q=32879);const te=z(w,M),ae=M.source;t.bindTexture(Q,w.__webglTexture,33984+k);const A=n.get(ae);if(ae.version!==A.__version||te===!0){t.activeTexture(33984+k),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const j=x(M)&&v(M.image)===!1;let F=b(M.image,j,!1,u);F=ct(M,F);const le=v(F)||o,fe=s.convert(M.format,M.encoding);let pe=s.convert(M.type),ue=N(M.internalFormat,fe,pe,M.encoding,M.isVideoTexture);ce(Q,M,le);let de;const be=M.mipmaps,Ce=o&&M.isVideoTexture!==!0,$e=A.__version===void 0||te===!0,P=S(M,F,le);if(M.isDepthTexture)ue=6402,o?M.type===Fn?ue=36012:M.type===Nn?ue=33190:M.type===wi?ue=35056:ue=33189:M.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Bn&&ue===6402&&M.type!==Ol&&M.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nn,pe=s.convert(M.type)),M.format===Li&&ue===6402&&(ue=34041,M.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=wi,pe=s.convert(M.type))),$e&&(Ce?t.texStorage2D(3553,1,ue,F.width,F.height):t.texImage2D(3553,0,ue,F.width,F.height,0,fe,pe,null));else if(M.isDataTexture)if(be.length>0&&le){Ce&&$e&&t.texStorage2D(3553,P,ue,be[0].width,be[0].height);for(let V=0,ee=be.length;V<ee;V++)de=be[V],Ce?t.texSubImage2D(3553,V,0,0,de.width,de.height,fe,pe,de.data):t.texImage2D(3553,V,ue,de.width,de.height,0,fe,pe,de.data);M.generateMipmaps=!1}else Ce?($e&&t.texStorage2D(3553,P,ue,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,fe,pe,F.data)):t.texImage2D(3553,0,ue,F.width,F.height,0,fe,pe,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ce&&$e&&t.texStorage3D(35866,P,ue,be[0].width,be[0].height,F.depth);for(let V=0,ee=be.length;V<ee;V++)de=be[V],M.format!==Gt?fe!==null?Ce?t.compressedTexSubImage3D(35866,V,0,0,0,de.width,de.height,F.depth,fe,de.data,0,0):t.compressedTexImage3D(35866,V,ue,de.width,de.height,F.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage3D(35866,V,0,0,0,de.width,de.height,F.depth,fe,pe,de.data):t.texImage3D(35866,V,ue,de.width,de.height,F.depth,0,fe,pe,de.data)}else{Ce&&$e&&t.texStorage2D(3553,P,ue,be[0].width,be[0].height);for(let V=0,ee=be.length;V<ee;V++)de=be[V],M.format!==Gt?fe!==null?Ce?t.compressedTexSubImage2D(3553,V,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(3553,V,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,V,0,0,de.width,de.height,fe,pe,de.data):t.texImage2D(3553,V,ue,de.width,de.height,0,fe,pe,de.data)}else if(M.isDataArrayTexture)Ce?($e&&t.texStorage3D(35866,P,ue,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,fe,pe,F.data)):t.texImage3D(35866,0,ue,F.width,F.height,F.depth,0,fe,pe,F.data);else if(M.isData3DTexture)Ce?($e&&t.texStorage3D(32879,P,ue,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,fe,pe,F.data)):t.texImage3D(32879,0,ue,F.width,F.height,F.depth,0,fe,pe,F.data);else if(M.isFramebufferTexture){if($e)if(Ce)t.texStorage2D(3553,P,ue,F.width,F.height);else{let V=F.width,ee=F.height;for(let he=0;he<P;he++)t.texImage2D(3553,he,ue,V,ee,0,fe,pe,null),V>>=1,ee>>=1}}else if(be.length>0&&le){Ce&&$e&&t.texStorage2D(3553,P,ue,be[0].width,be[0].height);for(let V=0,ee=be.length;V<ee;V++)de=be[V],Ce?t.texSubImage2D(3553,V,0,0,fe,pe,de):t.texImage2D(3553,V,ue,fe,pe,de);M.generateMipmaps=!1}else Ce?($e&&t.texStorage2D(3553,P,ue,F.width,F.height),t.texSubImage2D(3553,0,0,0,fe,pe,F)):t.texImage2D(3553,0,ue,fe,pe,F);C(M,le)&&L(Q),A.__version=ae.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ve(w,M,k){if(M.image.length!==6)return;const Q=z(w,M),te=M.source;t.bindTexture(34067,w.__webglTexture,33984+k);const ae=n.get(te);if(te.version!==ae.__version||Q===!0){t.activeTexture(33984+k),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const A=M.isCompressedTexture||M.image[0].isCompressedTexture,j=M.image[0]&&M.image[0].isDataTexture,F=[];for(let V=0;V<6;V++)!A&&!j?F[V]=b(M.image[V],!1,!0,l):F[V]=j?M.image[V].image:M.image[V],F[V]=ct(M,F[V]);const le=F[0],fe=v(le)||o,pe=s.convert(M.format,M.encoding),ue=s.convert(M.type),de=N(M.internalFormat,pe,ue,M.encoding),be=o&&M.isVideoTexture!==!0,Ce=ae.__version===void 0||Q===!0;let $e=S(M,le,fe);ce(34067,M,fe);let P;if(A){be&&Ce&&t.texStorage2D(34067,$e,de,le.width,le.height);for(let V=0;V<6;V++){P=F[V].mipmaps;for(let ee=0;ee<P.length;ee++){const he=P[ee];M.format!==Gt?pe!==null?be?t.compressedTexSubImage2D(34069+V,ee,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(34069+V,ee,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(34069+V,ee,0,0,he.width,he.height,pe,ue,he.data):t.texImage2D(34069+V,ee,de,he.width,he.height,0,pe,ue,he.data)}}}else{P=M.mipmaps,be&&Ce&&(P.length>0&&$e++,t.texStorage2D(34067,$e,de,F[0].width,F[0].height));for(let V=0;V<6;V++)if(j){be?t.texSubImage2D(34069+V,0,0,0,F[V].width,F[V].height,pe,ue,F[V].data):t.texImage2D(34069+V,0,de,F[V].width,F[V].height,0,pe,ue,F[V].data);for(let ee=0;ee<P.length;ee++){const ge=P[ee].image[V].image;be?t.texSubImage2D(34069+V,ee+1,0,0,ge.width,ge.height,pe,ue,ge.data):t.texImage2D(34069+V,ee+1,de,ge.width,ge.height,0,pe,ue,ge.data)}}else{be?t.texSubImage2D(34069+V,0,0,0,pe,ue,F[V]):t.texImage2D(34069+V,0,de,pe,ue,F[V]);for(let ee=0;ee<P.length;ee++){const he=P[ee];be?t.texSubImage2D(34069+V,ee+1,0,0,pe,ue,he.image[V]):t.texImage2D(34069+V,ee+1,de,pe,ue,he.image[V])}}}C(M,fe)&&L(34067),ae.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function re(w,M,k,Q,te){const ae=s.convert(k.format,k.encoding),A=s.convert(k.type),j=N(k.internalFormat,ae,A,k.encoding);n.get(M).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,j,M.width,M.height,M.depth,0,ae,A,null):t.texImage2D(te,0,j,M.width,M.height,0,ae,A,null)),t.bindFramebuffer(36160,w),Oe(M)?d.framebufferTexture2DMultisampleEXT(36160,Q,te,n.get(k).__webglTexture,0,Ye(M)):(te===3553||te>=34069&&te<=34074)&&i.framebufferTexture2D(36160,Q,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function xe(w,M,k){if(i.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let Q=33189;if(k||Oe(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===Fn?Q=36012:te.type===Nn&&(Q=33190));const ae=Ye(M);Oe(M)?d.renderbufferStorageMultisampleEXT(36161,ae,Q,M.width,M.height):i.renderbufferStorageMultisample(36161,ae,Q,M.width,M.height)}else i.renderbufferStorage(36161,Q,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const Q=Ye(M);k&&Oe(M)===!1?i.renderbufferStorageMultisample(36161,Q,35056,M.width,M.height):Oe(M)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<Q.length;te++){const ae=Q[te],A=s.convert(ae.format,ae.encoding),j=s.convert(ae.type),F=N(ae.internalFormat,A,j,ae.encoding),le=Ye(M);k&&Oe(M)===!1?i.renderbufferStorageMultisample(36161,le,F,M.width,M.height):Oe(M)?d.renderbufferStorageMultisampleEXT(36161,le,F,M.width,M.height):i.renderbufferStorage(36161,F,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function Ne(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,te=Ye(M);if(M.depthTexture.format===Bn)Oe(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,te):i.framebufferTexture2D(36160,36096,3553,Q,0);else if(M.depthTexture.format===Li)Oe(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,te):i.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function me(w){const M=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=i.createRenderbuffer(),xe(M.__webglDepthbuffer[Q],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),xe(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ee(w,M,k){const Q=n.get(w);M!==void 0&&re(Q.__webglFramebuffer,w,w.texture,36064,3553),k!==void 0&&me(w)}function je(w){const M=w.texture,k=n.get(w),Q=n.get(M);w.addEventListener("dispose",W),w.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,a.memory.textures++);const te=w.isWebGLCubeRenderTarget===!0,ae=w.isWebGLMultipleRenderTargets===!0,A=v(w)||o;if(te){k.__webglFramebuffer=[];for(let j=0;j<6;j++)k.__webglFramebuffer[j]=i.createFramebuffer()}else{if(k.__webglFramebuffer=i.createFramebuffer(),ae)if(r.drawBuffers){const j=w.texture;for(let F=0,le=j.length;F<le;F++){const fe=n.get(j[F]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Oe(w)===!1){const j=ae?M:[M];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let F=0;F<j.length;F++){const le=j[F];k.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(36161,k.__webglColorRenderbuffer[F]);const fe=s.convert(le.format,le.encoding),pe=s.convert(le.type),ue=N(le.internalFormat,fe,pe,le.encoding,w.isXRRenderTarget===!0),de=Ye(w);i.renderbufferStorageMultisample(36161,de,ue,w.width,w.height),i.framebufferRenderbuffer(36160,36064+F,36161,k.__webglColorRenderbuffer[F])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Q.__webglTexture),ce(34067,M,A);for(let j=0;j<6;j++)re(k.__webglFramebuffer[j],w,M,36064,34069+j);C(M,A)&&L(34067),t.unbindTexture()}else if(ae){const j=w.texture;for(let F=0,le=j.length;F<le;F++){const fe=j[F],pe=n.get(fe);t.bindTexture(3553,pe.__webglTexture),ce(3553,fe,A),re(k.__webglFramebuffer,w,fe,36064+F,3553),C(fe,A)&&L(3553)}t.unbindTexture()}else{let j=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?j=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,Q.__webglTexture),ce(j,M,A),re(k.__webglFramebuffer,w,M,36064,j),C(M,A)&&L(j),t.unbindTexture()}w.depthBuffer&&me(w)}function qe(w){const M=v(w)||o,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0,te=k.length;Q<te;Q++){const ae=k[Q];if(C(ae,M)){const A=w.isWebGLCubeRenderTarget?34067:3553,j=n.get(ae).__webglTexture;t.bindTexture(A,j),L(A),t.unbindTexture()}}}function et(w){if(o&&w.samples>0&&Oe(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,Q=w.height;let te=16384;const ae=[],A=w.stencilBuffer?33306:36096,j=n.get(w),F=w.isWebGLMultipleRenderTargets===!0;if(F)for(let le=0;le<M.length;le++)t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,j.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,j.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,j.__webglFramebuffer);for(let le=0;le<M.length;le++){ae.push(36064+le),w.depthBuffer&&ae.push(A);const fe=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(fe===!1&&(w.depthBuffer&&(te|=256),w.stencilBuffer&&(te|=1024)),F&&i.framebufferRenderbuffer(36008,36064,36161,j.__webglColorRenderbuffer[le]),fe===!0&&(i.invalidateFramebuffer(36008,[A]),i.invalidateFramebuffer(36009,[A])),F){const pe=n.get(M[le]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,pe,0)}i.blitFramebuffer(0,0,k,Q,0,0,k,Q,te,9728),p&&i.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let le=0;le<M.length;le++){t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+le,36161,j.__webglColorRenderbuffer[le]);const fe=n.get(M[le]).__webglTexture;t.bindFramebuffer(36160,j.__webglFramebuffer),i.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,j.__webglMultisampledFramebuffer)}}function Ye(w){return Math.min(f,w.samples)}function Oe(w){const M=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(w){const M=a.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function ct(w,M){const k=w.encoding,Q=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Js||k!==Xn&&(k===Ve?o===!1?e.has("EXT_sRGB")===!0&&Q===Gt?(w.format=Js,w.minFilter=Dt,w.generateMipmaps=!1):M=zl.sRGBToLinear(M):(Q!==Gt||te!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),M}this.allocateTextureUnit=X,this.resetTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=Me,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=Ee,this.setupRenderTarget=je,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Oe}function Om(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===qn)return 5121;if(s===yu)return 32819;if(s===bu)return 32820;if(s===vu)return 5120;if(s===Mu)return 5122;if(s===Ol)return 5123;if(s===Su)return 5124;if(s===Nn)return 5125;if(s===Fn)return 5126;if(s===Ki)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===wu)return 6406;if(s===Gt)return 6408;if(s===Eu)return 6409;if(s===Tu)return 6410;if(s===Bn)return 6402;if(s===Li)return 34041;if(s===Js)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Au)return 6403;if(s===Cu)return 36244;if(s===Pu)return 33319;if(s===Lu)return 33320;if(s===Ru)return 36249;if(s===us||s===hs||s===fs||s===ds)if(a===Ve)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===us)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===us)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bo||s===ko||s===Go||s===Ho)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Bo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Go)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ho)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Du)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vo||s===Wo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Vo)return a===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qo||s===Xo||s===jo||s===Yo||s===$o||s===Ko||s===Zo||s===Jo||s===Qo||s===ea||s===ta||s===na||s===ia||s===ra)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===qo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$o)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ko)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qo)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ea)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ta)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===na)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ia)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ra)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ps)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ps)return a===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Iu||s===sa||s===oa||s===aa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ps)return o.COMPRESSED_RED_RGTC1_EXT;if(s===sa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===oa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===aa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Nm extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dr extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fm={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zm extends Mt{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:Bn,u!==Bn&&u!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bn&&(n=Nn),n===void 0&&u===Li&&(n=wi),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=c!==void 0?c:_t,this.flipY=!1,this.generateMipmaps=!1}}class Bm extends Zn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,h=null;const E=[],b=[],v=new Set,x=new Map,C=new Tt;C.layers.enable(1),C.viewport=new We;const L=new Tt;L.layers.enable(2),L.viewport=new We;const N=[C,L],S=new Nm;S.layers.enable(1),S.layers.enable(2);let T=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=E[G];return $===void 0&&($=new zs,E[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=E[G];return $===void 0&&($=new zs,E[G]=$),$.getGripSpace()},this.getHand=function(G){let $=E[G];return $===void 0&&($=new zs,E[G]=$),$.getHandSpace()};function W(G){const $=b.indexOf(G.inputSource);if($===-1)return;const oe=E[$];oe!==void 0&&oe.dispatchEvent({type:G.type,data:G.inputSource})}function D(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",U);for(let G=0;G<E.length;G++){const $=b[G];$!==null&&(b[G]=null,E[G].disconnect($))}T=null,Y=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",D),r.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:p}),h=new jn(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:qn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let $=null,oe=null,ce=null;_.depth&&(ce=_.stencil?35056:33190,$=_.stencil?Li:Bn,oe=_.stencil?wi:Nn);const z={colorFormat:32856,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(z),r.updateRenderState({layers:[d]}),h=new jn(d.textureWidth,d.textureHeight,{format:Gt,type:qn,depthTexture:new zm(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(G){for(let $=0;$<G.removed.length;$++){const oe=G.removed[$],ce=b.indexOf(oe);ce>=0&&(b[ce]=null,E[ce].disconnect(oe))}for(let $=0;$<G.added.length;$++){const oe=G.added[$];let ce=b.indexOf(oe);if(ce===-1){for(let ye=0;ye<E.length;ye++)if(ye>=b.length){b.push(oe),ce=ye;break}else if(b[ye]===null){b[ye]=oe,ce=ye;break}if(ce===-1)break}const z=E[ce];z&&z.connect(oe)}}const B=new R,Z=new R;function K(G,$,oe){B.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const ce=B.distanceTo(Z),z=$.projectionMatrix.elements,ye=oe.projectionMatrix.elements,ve=z[14]/(z[10]-1),re=z[14]/(z[10]+1),xe=(z[9]+1)/z[5],Ne=(z[9]-1)/z[5],me=(z[8]-1)/z[0],Ee=(ye[8]+1)/ye[0],je=ve*me,qe=ve*Ee,et=ce/(-me+Ee),Ye=et*-me;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ye),G.translateZ(et),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Oe=ve+et,Ge=re+et,ct=je-Ye,w=qe+(ce-Ye),M=xe*re/Ge*Oe,k=Ne*re/Ge*Oe;G.projectionMatrix.makePerspective(ct,w,M,k,Oe,Ge),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;S.near=L.near=C.near=G.near,S.far=L.far=C.far=G.far,(T!==S.near||Y!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,Y=S.far);const $=G.parent,oe=S.cameras;X(S,$);for(let ce=0;ce<oe.length;ce++)X(oe[ce],$);oe.length===2?K(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),ne(G,S,$)};function ne(G,$,oe){oe===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const ce=G.children;for(let z=0,ye=ce.length;z<ye;z++)ce[z].updateMatrixWorld(!0);G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return v};let J=null;function Me(G,$){if(u=$.getViewerPose(l||a),g=$,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ce=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let z=0;z<oe.length;z++){const ye=oe[z];let ve=null;if(p!==null)ve=p.getViewport(ye);else{const xe=f.getViewSubImage(d,ye);ve=xe.viewport,z===0&&(e.setRenderTargetTextures(h,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(h))}let re=N[z];re===void 0&&(re=new Tt,re.layers.enable(z),re.viewport=new We,N[z]=re),re.matrix.fromArray(ye.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ye.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ve.x,ve.y,ve.width,ve.height),z===0&&(S.matrix.copy(re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(re)}}for(let oe=0;oe<E.length;oe++){const ce=b[oe],z=E[oe];ce!==null&&z!==void 0&&z.update(ce,$,l||a)}if(J&&J(G,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let oe=null;for(const ce of v)$.detectedPlanes.has(ce)||(oe===null&&(oe=[]),oe.push(ce));if(oe!==null)for(const ce of oe)v.delete(ce),x.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of $.detectedPlanes)if(!v.has(ce))v.add(ce),x.set(ce,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const z=x.get(ce);ce.lastChangedTime>z&&(x.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}g=null}const ie=new Kl;ie.setAnimationLoop(Me),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}}function km(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,jl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,b,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,v)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,E,b):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===vt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===vt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,E,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gm(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function c(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function l(E,b){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",m));const x=b.program;n.updateUBOMapping(E,x);const C=e.render.frame;s[E.id]!==C&&(d(E),s[E.id]=C)}function u(E){const b=f();E.__bindingPointIndex=b;const v=i.createBuffer(),x=E.__size,C=E.usage;return i.bindBuffer(35345,v),i.bufferData(35345,x,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,v),v}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=r[E.id],v=E.uniforms,x=E.__cache;i.bindBuffer(35345,b);for(let C=0,L=v.length;C<L;C++){const N=v[C];if(p(N,C,x)===!0){const S=N.__offset,T=Array.isArray(N.value)?N.value:[N.value];let Y=0;for(let W=0;W<T.length;W++){const D=T[W],U=_(D);typeof D=="number"?(N.__data[0]=D,i.bufferSubData(35345,S+Y,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=D.elements[0],N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=D.elements[0],N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=D.elements[0]):(D.toArray(N.__data,Y),Y+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,S,N.__data)}}i.bindBuffer(35345,null)}function p(E,b,v){const x=E.value;if(v[b]===void 0){if(typeof x=="number")v[b]=x;else{const C=Array.isArray(x)?x:[x],L=[];for(let N=0;N<C.length;N++)L.push(C[N].clone());v[b]=L}return!0}else if(typeof x=="number"){if(v[b]!==x)return v[b]=x,!0}else{const C=Array.isArray(v[b])?v[b]:[v[b]],L=Array.isArray(x)?x:[x];for(let N=0;N<C.length;N++){const S=C[N];if(S.equals(L[N])===!1)return S.copy(L[N]),!0}}return!1}function g(E){const b=E.uniforms;let v=0;const x=16;let C=0;for(let L=0,N=b.length;L<N;L++){const S=b[L],T={boundary:0,storage:0},Y=Array.isArray(S.value)?S.value:[S.value];for(let W=0,D=Y.length;W<D;W++){const U=Y[W],B=_(U);T.boundary+=B.boundary,T.storage+=B.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,L>0){C=v%x;const W=x-C;C!==0&&W-T.boundary<0&&(v+=x-C,S.__offset=v)}v+=T.storage}return C=v%x,C>0&&(v+=x-C),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}function Hm(){const i=Ji("canvas");return i.style.display="block",i}class nc{constructor(e={}){const{canvas:t=Hm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Xn,this.useLegacyLights=!0,this.toneMapping=sn,this.toneMappingExposure=1;const h=this;let E=!1,b=0,v=0,x=null,C=-1,L=null;const N=new We,S=new We;let T=null,Y=t.width,W=t.height,D=1,U=null,B=null;const Z=new We(0,0,Y,W),K=new We(0,0,Y,W);let X=!1;const ne=new go;let J=!1,Me=!1,ie=null;const G=new Qe,$=new R,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return x===null?D:1}let z=n;function ye(y,O){for(let H=0;H<y.length;H++){const I=y[H],q=t.getContext(I,O);if(q!==null)return q}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&O.shift(),z=ye(O,y),z===null)throw ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ve,re,xe,Ne,me,Ee,je,qe,et,Ye,Oe,Ge,ct,w,M,k,Q,te,ae,A,j,F,le,fe;function pe(){ve=new Qd(z),re=new jd(z,ve,e),ve.init(re),F=new Om(z,ve,re),xe=new Im(z,ve,re),Ne=new np,me=new vm,Ee=new Um(z,ve,xe,me,re,F,Ne),je=new $d(h),qe=new Jd(h),et=new dh(z,re),le=new qd(z,ve,et,re),Ye=new ep(z,et,Ne,le),Oe=new op(z,Ye,et,Ne),ae=new sp(z,re,Ee),k=new Yd(me),Ge=new xm(h,je,qe,ve,re,le,k),ct=new km(h,me),w=new Sm,M=new Am(ve,re),te=new Wd(h,je,qe,xe,Oe,d,c),Q=new Dm(h,Oe,re),fe=new Gm(z,Ne,re,xe),A=new Xd(z,ve,Ne,re),j=new tp(z,ve,Ne,re),Ne.programs=Ge.programs,h.capabilities=re,h.extensions=ve,h.properties=me,h.renderLists=w,h.shadowMap=Q,h.state=xe,h.info=Ne}pe();const ue=new Bm(h,z);this.xr=ue,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const y=ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(y){y!==void 0&&(D=y,this.setSize(Y,W,!1))},this.getSize=function(y){return y.set(Y,W)},this.setSize=function(y,O,H=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,W=O,t.width=Math.floor(y*D),t.height=Math.floor(O*D),H===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Y*D,W*D).floor()},this.setDrawingBufferSize=function(y,O,H){Y=y,W=O,D=H,t.width=Math.floor(y*H),t.height=Math.floor(O*H),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(N)},this.getViewport=function(y){return y.copy(Z)},this.setViewport=function(y,O,H,I){y.isVector4?Z.set(y.x,y.y,y.z,y.w):Z.set(y,O,H,I),xe.viewport(N.copy(Z).multiplyScalar(D).floor())},this.getScissor=function(y){return y.copy(K)},this.setScissor=function(y,O,H,I){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,O,H,I),xe.scissor(S.copy(K).multiplyScalar(D).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(y){xe.setScissorTest(X=y)},this.setOpaqueSort=function(y){U=y},this.setTransparentSort=function(y){B=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(y=!0,O=!0,H=!0){let I=0;y&&(I|=16384),O&&(I|=256),H&&(I|=1024),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),w.dispose(),M.dispose(),me.dispose(),je.dispose(),qe.dispose(),Oe.dispose(),le.dispose(),fe.dispose(),Ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ge),ue.removeEventListener("sessionend",He),ie&&(ie.dispose(),ie=null),Xe.stop()};function de(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=Ne.autoReset,O=Q.enabled,H=Q.autoUpdate,I=Q.needsUpdate,q=Q.type;pe(),Ne.autoReset=y,Q.enabled=O,Q.autoUpdate=H,Q.needsUpdate=I,Q.type=q}function Ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $e(y){const O=y.target;O.removeEventListener("dispose",$e),P(O)}function P(y){V(y),me.remove(y)}function V(y){const O=me.get(y).programs;O!==void 0&&(O.forEach(function(H){Ge.releaseProgram(H)}),y.isShaderMaterial&&Ge.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,H,I,q,_e){O===null&&(O=oe);const Se=q.isMesh&&q.matrixWorld.determinant()<0,we=Bc(y,O,H,I,q);xe.setMaterial(I,Se);let Te=H.index,Le=1;I.wireframe===!0&&(Te=Ye.getWireframeAttribute(H),Le=2);const Re=H.drawRange,De=H.attributes.position;let ze=Re.start*Le,pt=(Re.start+Re.count)*Le;_e!==null&&(ze=Math.max(ze,_e.start*Le),pt=Math.min(pt,(_e.start+_e.count)*Le)),Te!==null?(ze=Math.max(ze,0),pt=Math.min(pt,Te.count)):De!=null&&(ze=Math.max(ze,0),pt=Math.min(pt,De.count));const Ot=pt-ze;if(Ot<0||Ot===1/0)return;le.setup(q,I,we,H,Te);let An,tt=A;if(Te!==null&&(An=et.get(Te),tt=j,tt.setIndex(An)),q.isMesh)I.wireframe===!0?(xe.setLineWidth(I.wireframeLinewidth*ce()),tt.setMode(1)):tt.setMode(4);else if(q.isLine){let Ue=I.linewidth;Ue===void 0&&(Ue=1),xe.setLineWidth(Ue*ce()),q.isLineSegments?tt.setMode(1):q.isLineLoop?tt.setMode(2):tt.setMode(3)}else q.isPoints?tt.setMode(0):q.isSprite&&tt.setMode(4);if(q.isInstancedMesh)tt.renderInstances(ze,Ot,q.count);else if(H.isInstancedBufferGeometry){const Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ss=Math.min(H.instanceCount,Ue);tt.renderInstances(ze,Ot,ss)}else tt.render(ze,Ot)},this.compile=function(y,O){function H(I,q,_e){I.transparent===!0&&I.side===rn&&I.forceSinglePass===!1?(I.side=vt,I.needsUpdate=!0,ur(I,q,_e),I.side=vn,I.needsUpdate=!0,ur(I,q,_e),I.side=rn):ur(I,q,_e)}g=M.get(y),g.init(),m.push(g),y.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(g.pushLight(I),I.castShadow&&g.pushShadow(I))}),g.setupLights(h.useLegacyLights),y.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let _e=0;_e<q.length;_e++){const Se=q[_e];H(Se,y,I)}else H(q,y,I)}),m.pop(),g=null};let ee=null;function he(y){ee&&ee(y)}function ge(){Xe.stop()}function He(){Xe.start()}const Xe=new Kl;Xe.setAnimationLoop(he),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(y){ee=y,ue.setAnimationLoop(y),y===null?Xe.stop():Xe.start()},ue.addEventListener("sessionstart",ge),ue.addEventListener("sessionend",He),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),y.isScene===!0&&y.onBeforeRender(h,y,O,x),g=M.get(y,m.length),g.init(),m.push(g),G.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(G),Me=this.localClippingEnabled,J=k.init(this.clippingPlanes,Me),p=w.get(y,_.length),p.init(),_.push(p),ut(y,O,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(U,B),J===!0&&k.beginShadows();const H=g.state.shadowsArray;if(Q.render(H,y,O),J===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,y),g.setupLights(h.useLegacyLights),O.isArrayCamera){const I=O.cameras;for(let q=0,_e=I.length;q<_e;q++){const Se=I[q];fn(p,y,Se,Se.viewport)}}else fn(p,y,O);x!==null&&(Ee.updateMultisampleRenderTarget(x),Ee.updateRenderTargetMipmap(x)),y.isScene===!0&&y.onAfterRender(h,y,O),le.resetDefaultState(),C=-1,L=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function ut(y,O,H,I){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)g.pushLight(y),y.castShadow&&g.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ne.intersectsSprite(y)){I&&$.setFromMatrixPosition(y.matrixWorld).applyMatrix4(G);const Se=Oe.update(y),we=y.material;we.visible&&p.push(y,Se,we,H,$.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Ne.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ne.render.frame),!y.frustumCulled||ne.intersectsObject(y))){I&&$.setFromMatrixPosition(y.matrixWorld).applyMatrix4(G);const Se=Oe.update(y),we=y.material;if(Array.isArray(we)){const Te=Se.groups;for(let Le=0,Re=Te.length;Le<Re;Le++){const De=Te[Le],ze=we[De.materialIndex];ze&&ze.visible&&p.push(y,Se,ze,H,$.z,De)}}else we.visible&&p.push(y,Se,we,H,$.z,null)}}const _e=y.children;for(let Se=0,we=_e.length;Se<we;Se++)ut(_e[Se],O,H,I)}function fn(y,O,H,I){const q=y.opaque,_e=y.transmissive,Se=y.transparent;g.setupLightsView(H),J===!0&&k.setGlobalState(h.clippingPlanes,H),_e.length>0&&Ke(q,_e,O,H),I&&xe.viewport(N.copy(I)),q.length>0&&Lt(q,O,H),_e.length>0&&Lt(_e,O,H),Se.length>0&&Lt(Se,O,H),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ke(y,O,H,I){if(ie===null){const we=re.isWebGL2;ie=new jn(1024,1024,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ki:qn,minFilter:$i,samples:we&&o===!0?4:0})}const q=h.getRenderTarget();h.setRenderTarget(ie),h.clear();const _e=h.toneMapping;h.toneMapping=sn,Lt(y,H,I),Ee.updateMultisampleRenderTarget(ie),Ee.updateRenderTargetMipmap(ie);let Se=!1;for(let we=0,Te=O.length;we<Te;we++){const Le=O[we],Re=Le.object,De=Le.geometry,ze=Le.material,pt=Le.group;if(ze.side===rn&&Re.layers.test(I.layers)){const Ot=ze.side;ze.side=vt,ze.needsUpdate=!0,Vt(Re,H,I,De,ze,pt),ze.side=Ot,ze.needsUpdate=!0,Se=!0}}Se===!0&&(Ee.updateMultisampleRenderTarget(ie),Ee.updateRenderTargetMipmap(ie)),h.setRenderTarget(q),h.toneMapping=_e}function Lt(y,O,H){const I=O.isScene===!0?O.overrideMaterial:null;for(let q=0,_e=y.length;q<_e;q++){const Se=y[q],we=Se.object,Te=Se.geometry,Le=I===null?Se.material:I,Re=Se.group;we.layers.test(H.layers)&&Vt(we,O,H,Te,Le,Re)}}function Vt(y,O,H,I,q,_e){y.onBeforeRender(h,O,H,I,q,_e),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(h,O,H,I,y,_e),q.transparent===!0&&q.side===rn&&q.forceSinglePass===!1?(q.side=vt,q.needsUpdate=!0,h.renderBufferDirect(H,O,I,q,y,_e),q.side=vn,q.needsUpdate=!0,h.renderBufferDirect(H,O,I,q,y,_e),q.side=rn):h.renderBufferDirect(H,O,I,q,y,_e),y.onAfterRender(h,O,H,I,q,_e)}function ur(y,O,H){O.isScene!==!0&&(O=oe);const I=me.get(y),q=g.state.lights,_e=g.state.shadowsArray,Se=q.state.version,we=Ge.getParameters(y,q.state,_e,O,H),Te=Ge.getProgramCacheKey(we);let Le=I.programs;I.environment=y.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(y.isMeshStandardMaterial?qe:je).get(y.envMap||I.environment),Le===void 0&&(y.addEventListener("dispose",$e),Le=new Map,I.programs=Le);let Re=Le.get(Te);if(Re!==void 0){if(I.currentProgram===Re&&I.lightsStateVersion===Se)return Po(y,we),Re}else we.uniforms=Ge.getUniforms(y),y.onBuild(H,we,h),y.onBeforeCompile(we,h),Re=Ge.acquireProgram(we,Te),Le.set(Te,Re),I.uniforms=we.uniforms;const De=I.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=k.uniform),Po(y,we),I.needsLights=Gc(y),I.lightsStateVersion=Se,I.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix);const ze=Re.getUniforms(),pt=Nr.seqWithValue(ze.seq,De);return I.currentProgram=Re,I.uniformsList=pt,Re}function Po(y,O){const H=me.get(y);H.outputEncoding=O.outputEncoding,H.instancing=O.instancing,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Bc(y,O,H,I,q){O.isScene!==!0&&(O=oe),Ee.resetTextureUnits();const _e=O.fog,Se=I.isMeshStandardMaterial?O.environment:null,we=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Xn,Te=(I.isMeshStandardMaterial?qe:je).get(I.envMap||Se),Le=I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Re=!!I.normalMap&&!!H.attributes.tangent,De=!!H.morphAttributes.position,ze=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color,Ot=I.toneMapped?h.toneMapping:sn,An=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=An!==void 0?An.length:0,Ue=me.get(I),ss=g.state.lights;if(J===!0&&(Me===!0||y!==L)){const St=y===L&&I.id===C;k.setState(I,y,St)}let ot=!1;I.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==ss.state.version||Ue.outputEncoding!==we||q.isInstancedMesh&&Ue.instancing===!1||!q.isInstancedMesh&&Ue.instancing===!0||q.isSkinnedMesh&&Ue.skinning===!1||!q.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Te||I.fog===!0&&Ue.fog!==_e||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==k.numPlanes||Ue.numIntersection!==k.numIntersection)||Ue.vertexAlphas!==Le||Ue.vertexTangents!==Re||Ue.morphTargets!==De||Ue.morphNormals!==ze||Ue.morphColors!==pt||Ue.toneMapping!==Ot||re.isWebGL2===!0&&Ue.morphTargetsCount!==tt)&&(ot=!0):(ot=!0,Ue.__version=I.version);let Cn=Ue.currentProgram;ot===!0&&(Cn=ur(I,O,q));let Lo=!1,Bi=!1,os=!1;const mt=Cn.getUniforms(),Pn=Ue.uniforms;if(xe.useProgram(Cn.program)&&(Lo=!0,Bi=!0,os=!0),I.id!==C&&(C=I.id,Bi=!0),Lo||L!==y){if(mt.setValue(z,"projectionMatrix",y.projectionMatrix),re.logarithmicDepthBuffer&&mt.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),L!==y&&(L=y,Bi=!0,os=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const St=mt.map.cameraPosition;St!==void 0&&St.setValue(z,$.setFromMatrixPosition(y.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&mt.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&mt.setValue(z,"viewMatrix",y.matrixWorldInverse)}if(q.isSkinnedMesh){mt.setOptional(z,q,"bindMatrix"),mt.setOptional(z,q,"bindMatrixInverse");const St=q.skeleton;St&&(re.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),mt.setValue(z,"boneTexture",St.boneTexture,Ee),mt.setValue(z,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const as=H.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0&&re.isWebGL2===!0)&&ae.update(q,H,Cn),(Bi||Ue.receiveShadow!==q.receiveShadow)&&(Ue.receiveShadow=q.receiveShadow,mt.setValue(z,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Pn.envMap.value=Te,Pn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Bi&&(mt.setValue(z,"toneMappingExposure",h.toneMappingExposure),Ue.needsLights&&kc(Pn,os),_e&&I.fog===!0&&ct.refreshFogUniforms(Pn,_e),ct.refreshMaterialUniforms(Pn,I,D,W,ie),Nr.upload(z,Ue.uniformsList,Pn,Ee)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Nr.upload(z,Ue.uniformsList,Pn,Ee),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&mt.setValue(z,"center",q.center),mt.setValue(z,"modelViewMatrix",q.modelViewMatrix),mt.setValue(z,"normalMatrix",q.normalMatrix),mt.setValue(z,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const St=I.uniformsGroups;for(let ls=0,Hc=St.length;ls<Hc;ls++)if(re.isWebGL2){const Ro=St[ls];fe.update(Ro,Cn),fe.bind(Ro,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function kc(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Gc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(y,O,H){me.get(y.texture).__webglTexture=O,me.get(y.depthTexture).__webglTexture=H;const I=me.get(y);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=H===void 0,I.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const H=me.get(y);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,H=0){x=y,b=O,v=H;let I=!0,q=null,_e=!1,Se=!1;if(y){const Te=me.get(y);Te.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),I=!1):Te.__webglFramebuffer===void 0?Ee.setupRenderTarget(y):Te.__hasExternalTextures&&Ee.rebindTextures(y,me.get(y.texture).__webglTexture,me.get(y.depthTexture).__webglTexture);const Le=y.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Re=me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(q=Re[O],_e=!0):re.isWebGL2&&y.samples>0&&Ee.useMultisampledRTT(y)===!1?q=me.get(y).__webglMultisampledFramebuffer:q=Re,N.copy(y.viewport),S.copy(y.scissor),T=y.scissorTest}else N.copy(Z).multiplyScalar(D).floor(),S.copy(K).multiplyScalar(D).floor(),T=X;if(xe.bindFramebuffer(36160,q)&&re.drawBuffers&&I&&xe.drawBuffers(y,q),xe.viewport(N),xe.scissor(S),xe.setScissorTest(T),_e){const Te=me.get(y.texture);z.framebufferTexture2D(36160,36064,34069+O,Te.__webglTexture,H)}else if(Se){const Te=me.get(y.texture),Le=O||0;z.framebufferTextureLayer(36160,36064,Te.__webglTexture,H||0,Le)}C=-1},this.readRenderTargetPixels=function(y,O,H,I,q,_e,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){xe.bindFramebuffer(36160,we);try{const Te=y.texture,Le=Te.format,Re=Te.type;if(Le!==Gt&&F.convert(Le)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Re===Ki&&(ve.has("EXT_color_buffer_half_float")||re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Re!==qn&&F.convert(Re)!==z.getParameter(35738)&&!(Re===Fn&&(re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-I&&H>=0&&H<=y.height-q&&z.readPixels(O,H,I,q,F.convert(Le),F.convert(Re),_e)}finally{const Te=x!==null?me.get(x).__webglFramebuffer:null;xe.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(y,O,H=0){const I=Math.pow(2,-H),q=Math.floor(O.image.width*I),_e=Math.floor(O.image.height*I);Ee.setTexture2D(O,0),z.copyTexSubImage2D(3553,H,0,0,y.x,y.y,q,_e),xe.unbindTexture()},this.copyTextureToTexture=function(y,O,H,I=0){const q=O.image.width,_e=O.image.height,Se=F.convert(H.format),we=F.convert(H.type);Ee.setTexture2D(H,0),z.pixelStorei(37440,H.flipY),z.pixelStorei(37441,H.premultiplyAlpha),z.pixelStorei(3317,H.unpackAlignment),O.isDataTexture?z.texSubImage2D(3553,I,y.x,y.y,q,_e,Se,we,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(3553,I,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):z.texSubImage2D(3553,I,y.x,y.y,Se,we,O.image),I===0&&H.generateMipmaps&&z.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(y,O,H,I,q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=y.max.x-y.min.x+1,Se=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Te=F.convert(I.format),Le=F.convert(I.type);let Re;if(I.isData3DTexture)Ee.setTexture3D(I,0),Re=32879;else if(I.isDataArrayTexture)Ee.setTexture2DArray(I,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,I.flipY),z.pixelStorei(37441,I.premultiplyAlpha),z.pixelStorei(3317,I.unpackAlignment);const De=z.getParameter(3314),ze=z.getParameter(32878),pt=z.getParameter(3316),Ot=z.getParameter(3315),An=z.getParameter(32877),tt=H.isCompressedTexture?H.mipmaps[0]:H.image;z.pixelStorei(3314,tt.width),z.pixelStorei(32878,tt.height),z.pixelStorei(3316,y.min.x),z.pixelStorei(3315,y.min.y),z.pixelStorei(32877,y.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(Re,q,O.x,O.y,O.z,_e,Se,we,Te,Le,tt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Re,q,O.x,O.y,O.z,_e,Se,we,Te,tt.data)):z.texSubImage3D(Re,q,O.x,O.y,O.z,_e,Se,we,Te,Le,tt),z.pixelStorei(3314,De),z.pixelStorei(32878,ze),z.pixelStorei(3316,pt),z.pixelStorei(3315,Ot),z.pixelStorei(32877,An),q===0&&I.generateMipmaps&&z.generateMipmap(Re),xe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Ee.setTextureCube(y,0):y.isData3DTexture?Ee.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ee.setTexture2DArray(y,0):Ee.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){b=0,v=0,x=null,xe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Vm extends nc{}Vm.prototype.isWebGL1Renderer=!0;class Wm extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class qm extends sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ja=new Qe,to=new Gl,Ir=new Xr,Ur=new R;class Xm extends lt{constructor(e=new an,t=new qm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;ja.copy(r).invert(),to.copy(e.ray).applyMatrix4(ja);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Ur.fromBufferAttribute(f,m),Ya(Ur,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Ur.fromBufferAttribute(f,g),Ya(Ur,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ya(i,e,t,n,r,s,a){const o=to.distanceSqToPoint(i);if(o<t){const c=new R;to.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}const $a={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jm{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ym=new jm;class ic{constructor(e){this.manager=e!==void 0?e:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class $m extends ic{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$a.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ji("img");function c(){u(),$a.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Km extends ic{constructor(e){super(e)}load(e,t,n,r){const s=new Mt,a=new $m(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class $r extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Zm extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bs=new Qe,Ka=new R,Za=new R;class rc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ka),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),Bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ja=new Qe,Wi=new R,ks=new R;class Jm extends rc{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),ks.copy(n.position),ks.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ks),n.updateMatrixWorld(),r.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Ja.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja)}}class Qm extends $r{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Jm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eg extends rc{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new eg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ng extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qa(){return(typeof performance>"u"?Date:performance).now()}class el{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);var rg=`uniform float time;
uniform sampler2D texture1;
varying vec2 vUv;
varying vec3 vPosition;
attribute vec3 aRandom;
attribute float aSize;
float PI = 3.141592653589793238;

vec3 getPos(float timeQuantum){
    float angle = timeQuantum * PI * 2.0;
    
    float x = sin(angle) + 2.0 * sin(2.0 * angle);
    float y = cos(angle) - 2.0 * cos(2.0 * angle);
    float z = -sin(3.0 * angle);
    return vec3(x,y,z);
}

vec3 getTangent(float timeQuantum){
    float angle = timeQuantum * PI * 2.0;
    
    float x = cos(angle) + 4.0 * cos(2.0 * angle);
    float y = -sin(angle) + 4.0 * sin(2.0 * angle);
    float z = -3.0 * cos(3.0 * angle);
    return normalize(vec3(x,y,z));
}

vec3 getNormal(float timeQuantum){ 
    float angle = timeQuantum * PI * 2.0;
    
    float x = -sin(angle) - 8.0 * sin(2.0 * angle);
    float y = -cos(angle) + 8.0 * cos(2.0 * angle);
    float z = 9.0 * sin(3.0 * angle);
    return normalize(vec3(x,y,z));
}

void main(){
    vUv = uv;
    float timeQuantum = fract(0.01*time + aRandom.x);

    float radius = 0.3 + (aRandom.z * 0.1);
    float cx = cos(aRandom.y * PI * 2.0 * time * 0.1 + aRandom.z) * radius;
    float cy = sin(aRandom.y * PI * 2.0 * time * 0.1 + aRandom.z) * radius;

    vec3 pos = getPos(timeQuantum);
    vec3 tangent = getTangent(timeQuantum);
    vec3 normal = getNormal(timeQuantum);
    vec3 binormal = normalize(cross(tangent, normal));
    pos += (normal * cx) + (binormal * cy);

    vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
    gl_PointSize = 5.0 * (1.0/-mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}`,sg=`uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;

void main(){
    vec3 color = vec3(1., 1., 1.);
    gl_FragColor = vec4(color, 1.0);
}`;const tl={type:"change"},Gs={type:"start"},nl={type:"end"};class og extends Zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ei.ROTATE,MIDDLE:ei.DOLLY,RIGHT:ei.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Ge),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ge),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tl),n.update(),s=r.NONE},this.update=function(){const A=new R,j=new Yn().setFromUnitVectors(e.up,new R(0,1,0)),F=j.clone().invert(),le=new R,fe=new Yn,pe=2*Math.PI;return function(){const de=n.object.position;A.copy(de).sub(n.target),A.applyQuaternion(j),o.setFromVector3(A),n.autoRotate&&s===r.NONE&&S(L()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let be=n.minAzimuthAngle,Ce=n.maxAzimuthAngle;return isFinite(be)&&isFinite(Ce)&&(be<-Math.PI?be+=pe:be>Math.PI&&(be-=pe),Ce<-Math.PI?Ce+=pe:Ce>Math.PI&&(Ce-=pe),be<=Ce?o.theta=Math.max(be,Math.min(Ce,o.theta)):o.theta=o.theta>(be+Ce)/2?Math.max(be,o.theta):Math.min(Ce,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(o),A.applyQuaternion(F),de.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||le.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a?(n.dispatchEvent(tl),le.copy(n.object.position),fe.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",M),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",qe),n.domElement.removeEventListener("wheel",Oe),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ge),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new el,c=new el;let l=1;const u=new R;let f=!1;const d=new Pe,p=new Pe,g=new Pe,_=new Pe,m=new Pe,h=new Pe,E=new Pe,b=new Pe,v=new Pe,x=[],C={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function N(){return Math.pow(.95,n.zoomSpeed)}function S(A){c.theta-=A}function T(A){c.phi-=A}const Y=function(){const A=new R;return function(F,le){A.setFromMatrixColumn(le,0),A.multiplyScalar(-F),u.add(A)}}(),W=function(){const A=new R;return function(F,le){n.screenSpacePanning===!0?A.setFromMatrixColumn(le,1):(A.setFromMatrixColumn(le,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(F),u.add(A)}}(),D=function(){const A=new R;return function(F,le){const fe=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;A.copy(pe).sub(n.target);let ue=A.length();ue*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*F*ue/fe.clientHeight,n.object.matrix),W(2*le*ue/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(F*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),W(le*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(A){d.set(A.clientX,A.clientY)}function K(A){E.set(A.clientX,A.clientY)}function X(A){_.set(A.clientX,A.clientY)}function ne(A){p.set(A.clientX,A.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;S(2*Math.PI*g.x/j.clientHeight),T(2*Math.PI*g.y/j.clientHeight),d.copy(p),n.update()}function J(A){b.set(A.clientX,A.clientY),v.subVectors(b,E),v.y>0?U(N()):v.y<0&&B(N()),E.copy(b),n.update()}function Me(A){m.set(A.clientX,A.clientY),h.subVectors(m,_).multiplyScalar(n.panSpeed),D(h.x,h.y),_.copy(m),n.update()}function ie(A){A.deltaY<0?B(N()):A.deltaY>0&&U(N()),n.update()}function G(A){let j=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),j=!0;break}j&&(A.preventDefault(),n.update())}function $(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),j=.5*(x[0].pageY+x[1].pageY);d.set(A,j)}}function oe(){if(x.length===1)_.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),j=.5*(x[0].pageY+x[1].pageY);_.set(A,j)}}function ce(){const A=x[0].pageX-x[1].pageX,j=x[0].pageY-x[1].pageY,F=Math.sqrt(A*A+j*j);E.set(0,F)}function z(){n.enableZoom&&ce(),n.enablePan&&oe()}function ye(){n.enableZoom&&ce(),n.enableRotate&&$()}function ve(A){if(x.length==1)p.set(A.pageX,A.pageY);else{const F=ae(A),le=.5*(A.pageX+F.x),fe=.5*(A.pageY+F.y);p.set(le,fe)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const j=n.domElement;S(2*Math.PI*g.x/j.clientHeight),T(2*Math.PI*g.y/j.clientHeight),d.copy(p)}function re(A){if(x.length===1)m.set(A.pageX,A.pageY);else{const j=ae(A),F=.5*(A.pageX+j.x),le=.5*(A.pageY+j.y);m.set(F,le)}h.subVectors(m,_).multiplyScalar(n.panSpeed),D(h.x,h.y),_.copy(m)}function xe(A){const j=ae(A),F=A.pageX-j.x,le=A.pageY-j.y,fe=Math.sqrt(F*F+le*le);b.set(0,fe),v.set(0,Math.pow(b.y/E.y,n.zoomSpeed)),U(v.y),E.copy(b)}function Ne(A){n.enableZoom&&xe(A),n.enablePan&&re(A)}function me(A){n.enableZoom&&xe(A),n.enableRotate&&ve(A)}function Ee(A){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",qe)),k(A),A.pointerType==="touch"?ct(A):et(A))}function je(A){n.enabled!==!1&&(A.pointerType==="touch"?w(A):Ye(A))}function qe(A){Q(A),x.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(nl),s=r.NONE}function et(A){let j;switch(A.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case ei.DOLLY:if(n.enableZoom===!1)return;K(A),s=r.DOLLY;break;case ei.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;X(A),s=r.PAN}else{if(n.enableRotate===!1)return;Z(A),s=r.ROTATE}break;case ei.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;Z(A),s=r.ROTATE}else{if(n.enablePan===!1)return;X(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Gs)}function Ye(A){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ne(A);break;case r.DOLLY:if(n.enableZoom===!1)return;J(A);break;case r.PAN:if(n.enablePan===!1)return;Me(A);break}}function Oe(A){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(A.preventDefault(),n.dispatchEvent(Gs),ie(A),n.dispatchEvent(nl))}function Ge(A){n.enabled===!1||n.enablePan===!1||G(A)}function ct(A){switch(te(A),x.length){case 1:switch(n.touches.ONE){case ti.ROTATE:if(n.enableRotate===!1)return;$(),s=r.TOUCH_ROTATE;break;case ti.PAN:if(n.enablePan===!1)return;oe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(),s=r.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Gs)}function w(A){switch(te(A),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(A),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;re(A),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(A),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(A),n.update();break;default:s=r.NONE}}function M(A){n.enabled!==!1&&A.preventDefault()}function k(A){x.push(A)}function Q(A){delete C[A.pointerId];for(let j=0;j<x.length;j++)if(x[j].pointerId==A.pointerId){x.splice(j,1);return}}function te(A){let j=C[A.pointerId];j===void 0&&(j=new Pe,C[A.pointerId]=j),j.set(A.pageX,A.pageY)}function ae(A){const j=A.pointerId===x[0].pointerId?x[1]:x[0];return C[j.pointerId]}n.domElement.addEventListener("contextmenu",M),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",qe),n.domElement.addEventListener("wheel",Oe,{passive:!1}),this.update()}}window.matchMedia("(max-width: 480px)").matches;const sc=document.querySelector("canvas.webgl"),Jn=new Wm;let Kr=1e4;const Zr=new an,Fr=new Float32Array(Kr*3),zr=new Float32Array(Kr*3),oc=new Float32Array(Kr);for(let i=0;i<Kr*3;i+=3)Fr[i]=(Math.random()-.5)*10,Fr[i+1]=(Math.random()-.5)*10,Fr[i+2]=(Math.random()-.5)*10,zr[i]=Math.random(),zr[i+1]=Math.random(),zr[i+2]=Math.random(),oc[i]=.5*Math.random();Zr.setAttribute("position",new At(Fr,3));Zr.setAttribute("aRandom",new At(zr,3));Zr.setAttribute("aSize",new At(oc,1));const ac=new Mn({uniforms:{time:{value:1},resolution:{value:new We},normals:{value:new Km().load("textures/normal.jpg")}},vertexShader:rg,fragmentShader:sg});ac.needsUpdate=!0;const Br=new Xm(Zr,ac);Jn.add(Br);const ag=new ng(4210752);Jn.add(ag);const lg=new tg(16777215,1);Jn.add(lg);const cg=new Zm(7619839,16711867,.5);Jn.add(cg);const lc=new Qm(7619839,1,100);lc.position.set(0,3,4);Jn.add(lc);const Yt={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Yt.width=window.innerWidth,Yt.height=window.innerHeight,Di.aspect=Yt.width/Yt.height,Di.updateProjectionMatrix(),Qi.setSize(Yt.width,Yt.height),Qi.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Di=new Tt(75,Yt.width/Yt.height);Di.position.z=10;Jn.add(Di);const Qi=new nc({canvas:sc,alpha:!0});Qi.setClearColor(0,0);Qi.setSize(Yt.width,Yt.height);const cc=new og(Di,sc);cc.enableDamping=!0;const ug=new ig,uc=()=>{const i=ug.getElapsedTime();Br.material.uniforms.time.value=i,Br.rotation.x+=.005*Math.PI,Br.rotation.y+=.005*Math.PI,cc.update(),Qi.render(Jn,Di),window.requestAnimationFrame(uc)};uc();/*! shepherd.js 12.0.2 */function hg(i){return i instanceof Element}function ar(i){return i instanceof HTMLElement}function Sn(i){return typeof i=="function"}function er(i){return typeof i=="string"}function dt(i){return i===void 0}class vo{on(e,t,n,r=!1){var s;return dt(this.bindings)&&(this.bindings={}),dt(this.bindings[e])&&(this.bindings[e]=[]),(s=this.bindings[e])==null||s.push({handler:t,ctx:n,once:r}),this}once(e,t,n){return this.on(e,t,n,!0)}off(e,t){var n;return dt(this.bindings)||dt(this.bindings[e])?this:(dt(t)?delete this.bindings[e]:(n=this.bindings[e])==null||n.forEach((r,s)=>{var a;r.handler===t&&((a=this.bindings[e])==null||a.splice(s,1))}),this)}trigger(e,...t){var n;return!dt(this.bindings)&&this.bindings[e]&&((n=this.bindings[e])==null||n.forEach((r,s)=>{var u;const{ctx:a,handler:o,once:c}=r,l=a||this;o.apply(l,t),c&&((u=this.bindings[e])==null||u.splice(s,1))})),this}}function ji(i){var e,t;function n(s,a){try{var o=i[s](a),c=o.value,l=c instanceof hc;Promise.resolve(l?c.v:c).then(function(u){if(l){var f=s==="return"?"return":"next";if(!c.k||u.done)return n(f,u);u=i[f](u).value}r(o.done?"return":"normal",u)},function(u){n("throw",u)})}catch(u){r("throw",u)}}function r(s,a){switch(s){case"return":e.resolve({value:a,done:!0});break;case"throw":e.reject(a);break;default:e.resolve({value:a,done:!1})}(e=e.next)?n(e.key,e.arg):t=null}this._invoke=function(s,a){return new Promise(function(o,c){var l={key:s,arg:a,resolve:o,reject:c,next:null};t?t=t.next=l:(e=t=l,n(s,a))})},typeof i.return!="function"&&(this.return=void 0)}ji.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},ji.prototype.next=function(i){return this._invoke("next",i)},ji.prototype.throw=function(i){return this._invoke("throw",i)},ji.prototype.return=function(i){return this._invoke("return",i)};function hc(i,e){this.v=i,this.k=e}function il(i){return new hc(i,0)}function fg(i){return function(){return new ji(i.apply(this,arguments))}}function it(){return it=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},it.apply(this,arguments)}function fc(i,e){if(i==null)return{};var t={};for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){if(e.indexOf(n)>=0)continue;t[n]=i[n]}return t}const wn={defaultMerge:Symbol("deepmerge-ts: default merge"),skip:Symbol("deepmerge-ts: skip")};wn.defaultMerge;function dg(i,e){return e}function rl(i){return typeof i!="object"||i===null?0:Array.isArray(i)?2:gg(i)?1:i instanceof Set?3:i instanceof Map?4:5}function pg(i){const e=new Set;for(const t of i)for(const n of[...Object.keys(t),...Object.getOwnPropertySymbols(t)])e.add(n);return e}function mg(i,e){return typeof i=="object"&&Object.prototype.propertyIsEnumerable.call(i,e)}function dc(i){return{*[Symbol.iterator](){for(const e of i)for(const t of e)yield t}}}const sl=new Set(["[object Object]","[object Module]"]);function gg(i){if(!sl.has(Object.prototype.toString.call(i)))return!1;const{constructor:e}=i;if(e===void 0)return!0;const t=e.prototype;return!(t===null||typeof t!="object"||!sl.has(Object.prototype.toString.call(t))||!t.hasOwnProperty("isPrototypeOf"))}function _g(i,e,t){const n={};for(const r of pg(i)){const s=[];for(const c of i)mg(c,r)&&s.push(c[r]);if(s.length===0)continue;const a=e.metaDataUpdater(t,{key:r,parents:i}),o=mc(s,e,a);o!==wn.skip&&(r==="__proto__"?Object.defineProperty(n,r,{value:o,configurable:!0,enumerable:!0,writable:!0}):n[r]=o)}return n}function xg(i){return i.flat()}function vg(i){return new Set(dc(i))}function Mg(i){return new Map(dc(i))}function pc(i){return i.at(-1)}var Hs=Object.freeze({__proto__:null,mergeArrays:xg,mergeMaps:Mg,mergeOthers:pc,mergeRecords:_g,mergeSets:vg});function Mo(...i){return Sg({})(...i)}function Sg(i,e){const t=yg(i,n);function n(...r){return mc(r,t,e)}return n}function yg(i,e){var t,n;return{defaultMergeFunctions:Hs,mergeFunctions:it({},Hs,Object.fromEntries(Object.entries(i).filter(([r,s])=>Object.hasOwn(Hs,r)).map(([r,s])=>s===!1?[r,pc]:[r,s]))),metaDataUpdater:(t=i.metaDataUpdater)!=null?t:dg,deepmerge:e,useImplicitDefaultMerging:(n=i.enableImplicitDefaultMerging)!=null?n:!1,actions:wn}}function mc(i,e,t){if(i.length===0)return;if(i.length===1)return Vs(i,e,t);const n=rl(i[0]);if(n!==0&&n!==5){for(let r=1;r<i.length;r++)if(rl(i[r])!==n)return Vs(i,e,t)}switch(n){case 1:return bg(i,e,t);case 2:return wg(i,e,t);case 3:return Eg(i,e,t);case 4:return Tg(i,e,t);default:return Vs(i,e,t)}}function bg(i,e,t){const n=e.mergeFunctions.mergeRecords(i,e,t);return n===wn.defaultMerge||e.useImplicitDefaultMerging&&n===void 0&&e.mergeFunctions.mergeRecords!==e.defaultMergeFunctions.mergeRecords?e.defaultMergeFunctions.mergeRecords(i,e,t):n}function wg(i,e,t){const n=e.mergeFunctions.mergeArrays(i,e,t);return n===wn.defaultMerge||e.useImplicitDefaultMerging&&n===void 0&&e.mergeFunctions.mergeArrays!==e.defaultMergeFunctions.mergeArrays?e.defaultMergeFunctions.mergeArrays(i):n}function Eg(i,e,t){const n=e.mergeFunctions.mergeSets(i,e,t);return n===wn.defaultMerge||e.useImplicitDefaultMerging&&n===void 0&&e.mergeFunctions.mergeSets!==e.defaultMergeFunctions.mergeSets?e.defaultMergeFunctions.mergeSets(i):n}function Tg(i,e,t){const n=e.mergeFunctions.mergeMaps(i,e,t);return n===wn.defaultMerge||e.useImplicitDefaultMerging&&n===void 0&&e.mergeFunctions.mergeMaps!==e.defaultMergeFunctions.mergeMaps?e.defaultMergeFunctions.mergeMaps(i):n}function Vs(i,e,t){const n=e.mergeFunctions.mergeOthers(i,e,t);return n===wn.defaultMerge||e.useImplicitDefaultMerging&&n===void 0&&e.mergeFunctions.mergeOthers!==e.defaultMergeFunctions.mergeOthers?e.defaultMergeFunctions.mergeOthers(i):n}function gc(i){const e=Object.getOwnPropertyNames(i.constructor.prototype);for(let t=0;t<e.length;t++){const n=e[t],r=i[n];n!=="constructor"&&typeof r=="function"&&(i[n]=r.bind(i))}return i}function Ag(i,e){return t=>{if(i.isOpen()){const n=i.el&&t.currentTarget===i.el;(!dt(e)&&t.currentTarget.matches(e)||n)&&i.tour.next()}}}function Cg(i){const{event:e,selector:t}=i.options.advanceOn||{};if(e){const n=Ag(i,t);let r=null;if(!dt(t)&&(r=document.querySelector(t),!r))return console.error(`No element was found for the selector supplied to advanceOn: ${t}`);r?(r.addEventListener(e,n),i.on("destroy",()=>r.removeEventListener(e,n))):(document.body.addEventListener(e,n,!0),i.on("destroy",()=>document.body.removeEventListener(e,n,!0)))}else return console.error("advanceOn was defined, but no event name was passed.")}class Pg{constructor(e){}}class Lg{constructor(e,t){}}function _c(i){return!er(i)||i===""?"":i.charAt(i.length-1)!=="-"?`${i}-`:i}function Rg(i){const e=i.options.attachTo||{},t=Object.assign({},e);if(Sn(t.element)&&(t.element=t.element.call(i)),er(t.element)){try{t.element=document.querySelector(t.element)}catch{}t.element||console.error(`The element for this Shepherd step was not found ${e.element}`)}return t}function xc(i){return i==null?!0:!i.element||!i.on}function vc(){let i=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(e=="x"?t:t&3|8).toString(16)})}const Ii=Math.min,Gn=Math.max,Gr=Math.round,Or=Math.floor,yn=i=>({x:i,y:i}),Dg={left:"right",right:"left",bottom:"top",top:"bottom"},Ig={start:"end",end:"start"};function no(i,e,t){return Gn(i,Ii(e,t))}function Ui(i,e){return typeof i=="function"?i(e):i}function $n(i){return i.split("-")[0]}function Jr(i){return i.split("-")[1]}function So(i){return i==="x"?"y":"x"}function yo(i){return i==="y"?"height":"width"}function Qr(i){return["top","bottom"].includes($n(i))?"y":"x"}function bo(i){return So(Qr(i))}function Ug(i,e,t){t===void 0&&(t=!1);const n=Jr(i),r=bo(i),s=yo(r);let a=r==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=Hr(a)),[a,Hr(a)]}function Og(i){const e=Hr(i);return[io(i),e,io(e)]}function io(i){return i.replace(/start|end/g,e=>Ig[e])}function Ng(i,e,t){const n=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(i){case"top":case"bottom":return t?e?r:n:e?n:r;case"left":case"right":return e?s:a;default:return[]}}function Fg(i,e,t,n){const r=Jr(i);let s=Ng($n(i),t==="start",n);return r&&(s=s.map(a=>a+"-"+r),e&&(s=s.concat(s.map(io)))),s}function Hr(i){return i.replace(/left|right|bottom|top/g,e=>Dg[e])}function zg(i){return it({top:0,right:0,bottom:0,left:0},i)}function Mc(i){return typeof i!="number"?zg(i):{top:i,right:i,bottom:i,left:i}}function Vr(i){return it({},i,{top:i.y,left:i.x,right:i.x+i.width,bottom:i.y+i.height})}const Bg=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],kg=["mainAxis","crossAxis","limiter"];function ol(i,e,t){let{reference:n,floating:r}=i;const s=Qr(e),a=bo(e),o=yo(a),c=$n(e),l=s==="y",u=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2,d=n[o]/2-r[o]/2;let p;switch(c){case"top":p={x:u,y:n.y-r.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:f};break;case"left":p={x:n.x-r.width,y:f};break;default:p={x:n.x,y:n.y}}switch(Jr(e)){case"start":p[a]-=d*(t&&l?-1:1);break;case"end":p[a]+=d*(t&&l?-1:1);break}return p}const Gg=async(i,e,t)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:a}=t,o=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let l=await a.getElementRects({reference:i,floating:e,strategy:r}),{x:u,y:f}=ol(l,n,c),d=n,p={},g=0;for(let _=0;_<o.length;_++){const{name:m,fn:h}=o[_],{x:E,y:b,data:v,reset:x}=await h({x:u,y:f,initialPlacement:n,placement:d,strategy:r,middlewareData:p,rects:l,platform:a,elements:{reference:i,floating:e}});u=E??u,f=b??f,p=it({},p,{[m]:it({},p[m],v)}),x&&g<=50&&(g++,typeof x=="object"&&(x.placement&&(d=x.placement),x.rects&&(l=x.rects===!0?await a.getElementRects({reference:i,floating:e,strategy:r}):x.rects),{x:u,y:f}=ol(l,d,c)),_=-1)}return{x:u,y:f,placement:d,strategy:r,middlewareData:p}};async function Sc(i,e){var t;e===void 0&&(e={});const{x:n,y:r,platform:s,rects:a,elements:o,strategy:c}=i,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=Ui(e,i),g=Mc(p),m=o[d?f==="floating"?"reference":"floating":f],h=Vr(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(m)))==null||t?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:l,rootBoundary:u,strategy:c})),E=f==="floating"?it({},a.floating,{x:n,y:r}):a.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),v=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},x=Vr(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:E,offsetParent:b,strategy:c}):E);return{top:(h.top-x.top+g.top)/v.y,bottom:(x.bottom-h.bottom+g.bottom)/v.y,left:(h.left-x.left+g.left)/v.x,right:(x.right-h.right+g.right)/v.x}}const Hg=i=>({name:"arrow",options:i,async fn(e){const{x:t,y:n,placement:r,rects:s,platform:a,elements:o,middlewareData:c}=e,{element:l,padding:u=0}=Ui(i,e)||{};if(l==null)return{};const f=Mc(u),d={x:t,y:n},p=bo(r),g=yo(p),_=await a.getDimensions(l),m=p==="y",h=m?"top":"left",E=m?"bottom":"right",b=m?"clientHeight":"clientWidth",v=s.reference[g]+s.reference[p]-d[p]-s.floating[g],x=d[p]-s.reference[p],C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l));let L=C?C[b]:0;(!L||!await(a.isElement==null?void 0:a.isElement(C)))&&(L=o.floating[b]||s.floating[g]);const N=v/2-x/2,S=L/2-_[g]/2-1,T=Ii(f[h],S),Y=Ii(f[E],S),W=T,D=L-_[g]-Y,U=L/2-_[g]/2+N,B=no(W,U,D),Z=!c.arrow&&Jr(r)!=null&&U!==B&&s.reference[g]/2-(U<W?T:Y)-_[g]/2<0,K=Z?U<W?U-W:U-D:0;return{[p]:d[p]+K,data:it({[p]:B,centerOffset:U-B-K},Z&&{alignmentOffset:K}),reset:Z}}}),Vg=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:s,middlewareData:a,rects:o,initialPlacement:c,platform:l,elements:u}=t,f=Ui(e,t),{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0}=f,E=fc(f,Bg);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const b=$n(s),v=$n(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(u.floating)),C=g||(v||!h?[Hr(c)]:Og(c));!g&&m!=="none"&&C.push(...Fg(c,h,m,x));const L=[c,...C],N=await Sc(t,E),S=[];let T=((r=a.flip)==null?void 0:r.overflows)||[];if(d&&S.push(N[b]),p){const U=Ug(s,o,x);S.push(N[U[0]],N[U[1]])}if(T=[...T,{placement:s,overflows:S}],!S.every(U=>U<=0)){var Y,W;const U=(((Y=a.flip)==null?void 0:Y.index)||0)+1,B=L[U];if(B)return{data:{index:U,overflows:T},reset:{placement:B}};let Z=(W=T.filter(K=>K.overflows[0]<=0).sort((K,X)=>K.overflows[1]-X.overflows[1])[0])==null?void 0:W.placement;if(!Z)switch(_){case"bestFit":{var D;const K=(D=T.map(X=>[X.placement,X.overflows.filter(ne=>ne>0).reduce((ne,J)=>ne+J,0)]).sort((X,ne)=>X[1]-ne[1])[0])==null?void 0:D[0];K&&(Z=K);break}case"initialPlacement":Z=c;break}if(s!==Z)return{reset:{placement:Z}}}return{}}}},Wg=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:s}=t,a=Ui(e,t),{mainAxis:o=!0,crossAxis:c=!1,limiter:l={fn:E=>{let{x:b,y:v}=E;return{x:b,y:v}}}}=a,u=fc(a,kg),f={x:n,y:r},d=await Sc(t,u),p=Qr($n(s)),g=So(p);let _=f[g],m=f[p];if(o){const E=g==="y"?"top":"left",b=g==="y"?"bottom":"right",v=_+d[E],x=_-d[b];_=no(v,_,x)}if(c){const E=p==="y"?"top":"left",b=p==="y"?"bottom":"right",v=m+d[E],x=m-d[b];m=no(v,m,x)}const h=l.fn(it({},t,{[g]:_,[p]:m}));return it({},h,{data:{x:h.x-n,y:h.y-r}})}}},qg=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:s,rects:a,middlewareData:o}=t,{offset:c=0,mainAxis:l=!0,crossAxis:u=!0}=Ui(e,t),f={x:n,y:r},d=Qr(s),p=So(d);let g=f[p],_=f[d];const m=Ui(c,t),h=typeof m=="number"?{mainAxis:m,crossAxis:0}:it({mainAxis:0,crossAxis:0},m);if(l){const v=p==="y"?"height":"width",x=a.reference[p]-a.floating[v]+h.mainAxis,C=a.reference[p]+a.reference[v]-h.mainAxis;g<x?g=x:g>C&&(g=C)}if(u){var E,b;const v=p==="y"?"width":"height",x=["top","left"].includes($n(s)),C=a.reference[d]-a.floating[v]+(x&&((E=o.offset)==null?void 0:E[d])||0)+(x?0:h.crossAxis),L=a.reference[d]+a.reference[v]+(x?0:((b=o.offset)==null?void 0:b[d])||0)-(x?h.crossAxis:0);_<C?_=C:_>L&&(_=L)}return{[p]:g,[d]:_}}}};function bn(i){return yc(i)?(i.nodeName||"").toLowerCase():"#document"}function Ct(i){var e;return(i==null||(e=i.ownerDocument)==null?void 0:e.defaultView)||window}function ln(i){var e;return(e=(yc(i)?i.ownerDocument:i.document)||window.document)==null?void 0:e.documentElement}function yc(i){return i instanceof Node||i instanceof Ct(i).Node}function on(i){return i instanceof Element||i instanceof Ct(i).Element}function $t(i){return i instanceof HTMLElement||i instanceof Ct(i).HTMLElement}function al(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Ct(i).ShadowRoot}function lr(i){const{overflow:e,overflowX:t,overflowY:n,display:r}=It(i);return/auto|scroll|overlay|hidden|clip/.test(e+n+t)&&!["inline","contents"].includes(r)}function Xg(i){return["table","td","th"].includes(bn(i))}function wo(i){const e=Eo(),t=It(i);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function jg(i){let e=Oi(i);for(;$t(e)&&!es(e);){if(wo(e))return e;e=Oi(e)}return null}function Eo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function es(i){return["html","body","#document"].includes(bn(i))}function It(i){return Ct(i).getComputedStyle(i)}function ts(i){return on(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function Oi(i){if(bn(i)==="html")return i;const e=i.assignedSlot||i.parentNode||al(i)&&i.host||ln(i);return al(e)?e.host:e}function bc(i){const e=Oi(i);return es(e)?i.ownerDocument?i.ownerDocument.body:i.body:$t(e)&&lr(e)?e:bc(e)}function tr(i,e,t){var n;e===void 0&&(e=[]),t===void 0&&(t=!0);const r=bc(i),s=r===((n=i.ownerDocument)==null?void 0:n.body),a=Ct(r);return s?e.concat(a,a.visualViewport||[],lr(r)?r:[],a.frameElement&&t?tr(a.frameElement):[]):e.concat(r,tr(r,[],t))}function wc(i){const e=It(i);let t=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=$t(i),s=r?i.offsetWidth:t,a=r?i.offsetHeight:n,o=Gr(t)!==s||Gr(n)!==a;return o&&(t=s,n=a),{width:t,height:n,$:o}}function To(i){return on(i)?i:i.contextElement}function Ti(i){const e=To(i);if(!$t(e))return yn(1);const t=e.getBoundingClientRect(),{width:n,height:r,$:s}=wc(e);let a=(s?Gr(t.width):t.width)/n,o=(s?Gr(t.height):t.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const Yg=yn(0);function Ec(i){const e=Ct(i);return!Eo()||!e.visualViewport?Yg:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $g(i,e,t){return e===void 0&&(e=!1),!t||e&&t!==Ct(i)?!1:e}function Kn(i,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=i.getBoundingClientRect(),s=To(i);let a=yn(1);e&&(n?on(n)&&(a=Ti(n)):a=Ti(i));const o=$g(s,t,n)?Ec(s):yn(0);let c=(r.left+o.x)/a.x,l=(r.top+o.y)/a.y,u=r.width/a.x,f=r.height/a.y;if(s){const d=Ct(s),p=n&&on(n)?Ct(n):n;let g=d,_=g.frameElement;for(;_&&n&&p!==g;){const m=Ti(_),h=_.getBoundingClientRect(),E=It(_),b=h.left+(_.clientLeft+parseFloat(E.paddingLeft))*m.x,v=h.top+(_.clientTop+parseFloat(E.paddingTop))*m.y;c*=m.x,l*=m.y,u*=m.x,f*=m.y,c+=b,l+=v,g=Ct(_),_=g.frameElement}}return Vr({width:u,height:f,x:c,y:l})}const Kg=[":popover-open",":modal"];function Tc(i){return Kg.some(e=>{try{return i.matches(e)}catch{return!1}})}function Zg(i){let{elements:e,rect:t,offsetParent:n,strategy:r}=i;const s=r==="fixed",a=ln(n),o=e?Tc(e.floating):!1;if(n===a||o&&s)return t;let c={scrollLeft:0,scrollTop:0},l=yn(1);const u=yn(0),f=$t(n);if((f||!f&&!s)&&((bn(n)!=="body"||lr(a))&&(c=ts(n)),$t(n))){const d=Kn(n);l=Ti(n),u.x=d.x+n.clientLeft,u.y=d.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-c.scrollLeft*l.x+u.x,y:t.y*l.y-c.scrollTop*l.y+u.y}}function Jg(i){return Array.from(i.getClientRects())}function Ac(i){return Kn(ln(i)).left+ts(i).scrollLeft}function Qg(i){const e=ln(i),t=ts(i),n=i.ownerDocument.body,r=Gn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=Gn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let a=-t.scrollLeft+Ac(i);const o=-t.scrollTop;return It(n).direction==="rtl"&&(a+=Gn(e.clientWidth,n.clientWidth)-r),{width:r,height:s,x:a,y:o}}function e_(i,e){const t=Ct(i),n=ln(i),r=t.visualViewport;let s=n.clientWidth,a=n.clientHeight,o=0,c=0;if(r){s=r.width,a=r.height;const l=Eo();(!l||l&&e==="fixed")&&(o=r.offsetLeft,c=r.offsetTop)}return{width:s,height:a,x:o,y:c}}function t_(i,e){const t=Kn(i,!0,e==="fixed"),n=t.top+i.clientTop,r=t.left+i.clientLeft,s=$t(i)?Ti(i):yn(1),a=i.clientWidth*s.x,o=i.clientHeight*s.y,c=r*s.x,l=n*s.y;return{width:a,height:o,x:c,y:l}}function ll(i,e,t){let n;if(e==="viewport")n=e_(i,t);else if(e==="document")n=Qg(ln(i));else if(on(e))n=t_(e,t);else{const r=Ec(i);n=it({},e,{x:e.x-r.x,y:e.y-r.y})}return Vr(n)}function Cc(i,e){const t=Oi(i);return t===e||!on(t)||es(t)?!1:It(t).position==="fixed"||Cc(t,e)}function n_(i,e){const t=e.get(i);if(t)return t;let n=tr(i,[],!1).filter(o=>on(o)&&bn(o)!=="body"),r=null;const s=It(i).position==="fixed";let a=s?Oi(i):i;for(;on(a)&&!es(a);){const o=It(a),c=wo(a);!c&&o.position==="fixed"&&(r=null),(s?!c&&!r:!c&&o.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||lr(a)&&!c&&Cc(i,a))?n=n.filter(u=>u!==a):r=o,a=Oi(a)}return e.set(i,n),n}function i_(i){let{element:e,boundary:t,rootBoundary:n,strategy:r}=i;const a=[...t==="clippingAncestors"?n_(e,this._c):[].concat(t),n],o=a[0],c=a.reduce((l,u)=>{const f=ll(e,u,r);return l.top=Gn(f.top,l.top),l.right=Ii(f.right,l.right),l.bottom=Ii(f.bottom,l.bottom),l.left=Gn(f.left,l.left),l},ll(e,o,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function r_(i){const{width:e,height:t}=wc(i);return{width:e,height:t}}function s_(i,e,t){const n=$t(e),r=ln(e),s=t==="fixed",a=Kn(i,!0,s,e);let o={scrollLeft:0,scrollTop:0};const c=yn(0);if(n||!n&&!s)if((bn(e)!=="body"||lr(r))&&(o=ts(e)),n){const f=Kn(e,!0,s,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else r&&(c.x=Ac(r));const l=a.left+o.scrollLeft-c.x,u=a.top+o.scrollTop-c.y;return{x:l,y:u,width:a.width,height:a.height}}function cl(i,e){return!$t(i)||It(i).position==="fixed"?null:e?e(i):i.offsetParent}function Pc(i,e){const t=Ct(i);if(!$t(i)||Tc(i))return t;let n=cl(i,e);for(;n&&Xg(n)&&It(n).position==="static";)n=cl(n,e);return n&&(bn(n)==="html"||bn(n)==="body"&&It(n).position==="static"&&!wo(n))?t:n||jg(i)||t}const o_=async function(e){const t=this.getOffsetParent||Pc,n=this.getDimensions;return{reference:s_(e.reference,await t(e.floating),e.strategy),floating:it({x:0,y:0},await n(e.floating))}};function a_(i){return It(i).direction==="rtl"}const l_={convertOffsetParentRelativeRectToViewportRelativeRect:Zg,getDocumentElement:ln,getClippingRect:i_,getOffsetParent:Pc,getElementRects:o_,getClientRects:Jg,getDimensions:r_,getScale:Ti,isElement:on,isRTL:a_};function c_(i,e){let t=null,n;const r=ln(i);function s(){var o;clearTimeout(n),(o=t)==null||o.disconnect(),t=null}function a(o,c){o===void 0&&(o=!1),c===void 0&&(c=1),s();const{left:l,top:u,width:f,height:d}=i.getBoundingClientRect();if(o||e(),!f||!d)return;const p=Or(u),g=Or(r.clientWidth-(l+f)),_=Or(r.clientHeight-(u+d)),m=Or(l),E={rootMargin:-p+"px "+-g+"px "+-_+"px "+-m+"px",threshold:Gn(0,Ii(1,c))||1};let b=!0;function v(x){const C=x[0].intersectionRatio;if(C!==c){if(!b)return a();C?a(!1,C):n=setTimeout(()=>{a(!1,1e-7)},100)}b=!1}try{t=new IntersectionObserver(v,it({},E,{root:r.ownerDocument}))}catch{t=new IntersectionObserver(v,E)}t.observe(i)}return a(!0),s}function u_(i,e,t,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,l=To(i),u=r||s?[...l?tr(l):[],...tr(e)]:[];u.forEach(h=>{r&&h.addEventListener("scroll",t,{passive:!0}),s&&h.addEventListener("resize",t)});const f=l&&o?c_(l,t):null;let d=-1,p=null;a&&(p=new ResizeObserver(h=>{let[E]=h;E&&E.target===l&&p&&(p.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var b;(b=p)==null||b.observe(e)})),t()}),l&&!c&&p.observe(l),p.observe(e));let g,_=c?Kn(i):null;c&&m();function m(){const h=Kn(i);_&&(h.x!==_.x||h.y!==_.y||h.width!==_.width||h.height!==_.height)&&t(),_=h,g=requestAnimationFrame(m)}return t(),()=>{var h;u.forEach(E=>{r&&E.removeEventListener("scroll",t),s&&E.removeEventListener("resize",t)}),f==null||f(),(h=p)==null||h.disconnect(),p=null,c&&cancelAnimationFrame(g)}}const h_=Wg,f_=Vg,d_=Hg,p_=qg,m_=(i,e,t)=>{const n=new Map,r=it({platform:l_},t),s=it({},r.platform,{_c:n});return Gg(i,e,it({},r,{platform:s}))};function g_(i){i.cleanup&&i.cleanup();const e=i._getResolvedAttachToOptions();let t=e.element;const n=y_(e,i),r=xc(e);return r&&(t=document.body,i.shepherdElementComponent.getElement().classList.add("shepherd-centered")),i.cleanup=u_(t,i.el,()=>{var s;if(!i.el){(s=i.cleanup)==null||s.call(i);return}v_(t,i,n,r)}),i.target=e.element,n}function __(i,e){return{floatingUIOptions:Mo(i.floatingUIOptions||{},e.floatingUIOptions||{})}}function x_(i){i.cleanup&&i.cleanup(),i.cleanup=null}function v_(i,e,t,n){return m_(i,e.el,t).then(M_(e,n)).then(r=>new Promise(s=>{setTimeout(()=>s(r),300)})).then(r=>{r!=null&&r.el&&r.el.focus({preventScroll:!0})})}function M_(i,e){return({x:t,y:n,placement:r,middlewareData:s})=>(i.el&&(e?Object.assign(i.el.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}):Object.assign(i.el.style,{position:"absolute",left:`${t}px`,top:`${n}px`}),i.el.dataset.popperPlacement=r,S_(i.el,s)),i)}function S_(i,e){const t=i.querySelector(".shepherd-arrow");if(ar(t)&&e.arrow){const{x:n,y:r}=e.arrow;Object.assign(t.style,{left:n!=null?`${n}px`:"",top:r!=null?`${r}px`:""})}}function y_(i,e){const t={strategy:"absolute"};t.middleware=[];const n=b_(e);return xc(i)||(t.middleware.push(f_(),h_({limiter:p_(),crossAxis:!0})),n&&t.middleware.push(d_({element:n})),t.placement=i.on),Mo(e.options.floatingUIOptions||{},t)}function b_(i){return i.options.arrow&&i.el?i.el.querySelector(".shepherd-arrow"):!1}function Pt(){}function w_(i,e){for(const t in e)i[t]=e[t];return i}function Lc(i){return i()}function ul(){return Object.create(null)}function cr(i){i.forEach(Lc)}function Ao(i){return typeof i=="function"}function cn(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function E_(i){return Object.keys(i).length===0}function Ni(i,e){i.appendChild(e)}function Ht(i,e,t){i.insertBefore(e,t||null)}function Ut(i){i.parentNode&&i.parentNode.removeChild(i)}function T_(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function Kt(i){return document.createElement(i)}function hl(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Rc(i){return document.createTextNode(i)}function Wr(){return Rc(" ")}function A_(){return Rc("")}function ns(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function ke(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}const C_=["width","height"];function fl(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set&&C_.indexOf(n)===-1?i[n]=e[n]:ke(i,n,e[n])}function P_(i){return Array.from(i.childNodes)}function xi(i,e,t){i.classList.toggle(e,!!t)}let nr;function Yi(i){nr=i}function Dc(){if(!nr)throw new Error("Function called outside component initialization");return nr}function L_(i){Dc().$$.on_mount.push(i)}function Co(i){Dc().$$.after_update.push(i)}const Si=[],Fi=[];let Ai=[];const dl=[],R_=Promise.resolve();let ro=!1;function D_(){ro||(ro=!0,R_.then(Ic))}function so(i){Ai.push(i)}const Ws=new Set;let vi=0;function Ic(){if(vi!==0)return;const i=nr;do{try{for(;vi<Si.length;){const e=Si[vi];vi++,Yi(e),I_(e.$$)}}catch(e){throw Si.length=0,vi=0,e}for(Yi(null),Si.length=0,vi=0;Fi.length;)Fi.pop()();for(let e=0;e<Ai.length;e+=1){const t=Ai[e];Ws.has(t)||(Ws.add(t),t())}Ai.length=0}while(Si.length);for(;dl.length;)dl.pop()();ro=!1,Ws.clear(),Yi(i)}function I_(i){if(i.fragment!==null){i.update(),cr(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(so)}}function U_(i){const e=[],t=[];Ai.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ai=e}const kr=new Set;let zn;function Hn(){zn={r:0,c:[],p:zn}}function Vn(){zn.r||cr(zn.c),zn=zn.p}function Fe(i,e){i&&i.i&&(kr.delete(i),i.i(e))}function Je(i,e,t,n){if(i&&i.o){if(kr.has(i))return;kr.add(i),zn.c.push(()=>{kr.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function pl(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function O_(i,e){const t={},n={},r={$$scope:1};let s=i.length;for(;s--;){const a=i[s],o=e[s];if(o){for(const c in a)c in o||(n[c]=1);for(const c in o)r[c]||(t[c]=o[c],r[c]=1);i[s]=o}else for(const c in a)r[c]=1}for(const a in n)a in t||(t[a]=void 0);return t}function Qn(i){i&&i.c()}function En(i,e,t){const{fragment:n,after_update:r}=i.$$;n&&n.m(e,t),so(()=>{const s=i.$$.on_mount.map(Lc).filter(Ao);i.$$.on_destroy?i.$$.on_destroy.push(...s):cr(s),i.$$.on_mount=[]}),r.forEach(so)}function Tn(i,e){const t=i.$$;t.fragment!==null&&(U_(t.after_update),cr(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function N_(i,e){i.$$.dirty[0]===-1&&(Si.push(i),D_(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function un(i,e,t,n,r,s,a=null,o=[-1]){const c=nr;Yi(i);const l=i.$$={fragment:null,ctx:[],props:s,update:Pt,not_equal:r,bound:ul(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ul(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let u=!1;if(l.ctx=t?t(i,e.props||{},(f,d,...p)=>{const g=p.length?p[0]:d;return l.ctx&&r(l.ctx[f],l.ctx[f]=g)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](g),u&&N_(i,f)),d}):[],l.update(),u=!0,cr(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const f=P_(e.target);l.fragment&&l.fragment.l(f),f.forEach(Ut)}else l.fragment&&l.fragment.c();e.intro&&Fe(i.$$.fragment),En(i,e.target,e.anchor),Ic()}Yi(c)}class hn{constructor(){this.$$=void 0,this.$$set=void 0}$destroy(){Tn(this,1),this.$destroy=Pt}$on(e,t){if(!Ao(t))return Pt;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!E_(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const F_="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(F_);function z_(i){let e,t,n,r,s;return{c(){e=Kt("button"),ke(e,"aria-label",t=i[3]?i[3]:null),ke(e,"class",n=`${i[1]||""} shepherd-button ${i[4]?"shepherd-button-secondary":""}`),e.disabled=i[2],ke(e,"tabindex","0"),ke(e,"type","button")},m(a,o){Ht(a,e,o),e.innerHTML=i[5],r||(s=ns(e,"click",function(){Ao(i[0])&&i[0].apply(this,arguments)}),r=!0)},p(a,[o]){i=a,o&32&&(e.innerHTML=i[5]),o&8&&t!==(t=i[3]?i[3]:null)&&ke(e,"aria-label",t),o&18&&n!==(n=`${i[1]||""} shepherd-button ${i[4]?"shepherd-button-secondary":""}`)&&ke(e,"class",n),o&4&&(e.disabled=i[2])},i:Pt,o:Pt,d(a){a&&Ut(e),r=!1,s()}}}function B_(i,e,t){let{config:n,step:r}=e,s,a,o,c,l,u;function f(d){return Sn(d)?d=d.call(r):d}return i.$$set=d=>{"config"in d&&t(6,n=d.config),"step"in d&&t(7,r=d.step)},i.$$.update=()=>{i.$$.dirty&192&&(t(0,s=n.action?n.action.bind(r.tour):null),t(1,a=n.classes),t(2,o=n.disabled?f(n.disabled):!1),t(3,c=n.label?f(n.label):null),t(4,l=n.secondary),t(5,u=n.text?f(n.text):null))},[s,a,o,c,l,u,n,r]}class k_ extends hn{constructor(e){super(),un(this,e,B_,z_,cn,{config:6,step:7})}}function ml(i,e,t){const n=i.slice();return n[2]=e[t],n}function gl(i){let e,t,n=pl(i[1]),r=[];for(let a=0;a<n.length;a+=1)r[a]=_l(ml(i,n,a));const s=a=>Je(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();e=A_()},m(a,o){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(a,o);Ht(a,e,o),t=!0},p(a,o){if(o&3){n=pl(a[1]);let c;for(c=0;c<n.length;c+=1){const l=ml(a,n,c);r[c]?(r[c].p(l,o),Fe(r[c],1)):(r[c]=_l(l),r[c].c(),Fe(r[c],1),r[c].m(e.parentNode,e))}for(Hn(),c=n.length;c<r.length;c+=1)s(c);Vn()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Fe(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)Je(r[o]);t=!1},d(a){a&&Ut(e),T_(r,a)}}}function _l(i){let e,t;return e=new k_({props:{config:i[2],step:i[0]}}),{c(){Qn(e.$$.fragment)},m(n,r){En(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.config=n[2]),r&1&&(s.step=n[0]),e.$set(s)},i(n){t||(Fe(e.$$.fragment,n),t=!0)},o(n){Je(e.$$.fragment,n),t=!1},d(n){Tn(e,n)}}}function G_(i){let e,t,n=i[1]&&gl(i);return{c(){e=Kt("footer"),n&&n.c(),ke(e,"class","shepherd-footer")},m(r,s){Ht(r,e,s),n&&n.m(e,null),t=!0},p(r,[s]){r[1]?n?(n.p(r,s),s&2&&Fe(n,1)):(n=gl(r),n.c(),Fe(n,1),n.m(e,null)):n&&(Hn(),Je(n,1,1,()=>{n=null}),Vn())},i(r){t||(Fe(n),t=!0)},o(r){Je(n),t=!1},d(r){r&&Ut(e),n&&n.d()}}}function H_(i,e,t){let n,{step:r}=e;return i.$$set=s=>{"step"in s&&t(0,r=s.step)},i.$$.update=()=>{i.$$.dirty&1&&t(1,n=r.options.buttons)},[r,n]}class V_ extends hn{constructor(e){super(),un(this,e,H_,G_,cn,{step:0})}}function W_(i){let e,t,n,r,s;return{c(){e=Kt("button"),t=Kt("span"),t.textContent="×",ke(t,"aria-hidden","true"),ke(e,"aria-label",n=i[0].label?i[0].label:"Close Tour"),ke(e,"class","shepherd-cancel-icon"),ke(e,"type","button")},m(a,o){Ht(a,e,o),Ni(e,t),r||(s=ns(e,"click",i[1]),r=!0)},p(a,[o]){o&1&&n!==(n=a[0].label?a[0].label:"Close Tour")&&ke(e,"aria-label",n)},i:Pt,o:Pt,d(a){a&&Ut(e),r=!1,s()}}}function q_(i,e,t){let{cancelIcon:n,step:r}=e;const s=a=>{a.preventDefault(),r.cancel()};return i.$$set=a=>{"cancelIcon"in a&&t(0,n=a.cancelIcon),"step"in a&&t(2,r=a.step)},[n,s,r]}class X_ extends hn{constructor(e){super(),un(this,e,q_,W_,cn,{cancelIcon:0,step:2})}}function j_(i){let e;return{c(){e=Kt("h3"),ke(e,"id",i[1]),ke(e,"class","shepherd-title")},m(t,n){Ht(t,e,n),i[3](e)},p(t,[n]){n&2&&ke(e,"id",t[1])},i:Pt,o:Pt,d(t){t&&Ut(e),i[3](null)}}}function Y_(i,e,t){let{labelId:n,element:r,title:s}=e;Co(()=>{Sn(s)&&t(2,s=s()),t(0,r.innerHTML=s,r)});function a(o){Fi[o?"unshift":"push"](()=>{r=o,t(0,r)})}return i.$$set=o=>{"labelId"in o&&t(1,n=o.labelId),"element"in o&&t(0,r=o.element),"title"in o&&t(2,s=o.title)},[r,n,s,a]}class $_ extends hn{constructor(e){super(),un(this,e,Y_,j_,cn,{labelId:1,element:0,title:2})}}function xl(i){let e,t;return e=new $_({props:{labelId:i[0],title:i[2]}}),{c(){Qn(e.$$.fragment)},m(n,r){En(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.labelId=n[0]),r&4&&(s.title=n[2]),e.$set(s)},i(n){t||(Fe(e.$$.fragment,n),t=!0)},o(n){Je(e.$$.fragment,n),t=!1},d(n){Tn(e,n)}}}function vl(i){let e,t;return e=new X_({props:{cancelIcon:i[3],step:i[1]}}),{c(){Qn(e.$$.fragment)},m(n,r){En(e,n,r),t=!0},p(n,r){const s={};r&8&&(s.cancelIcon=n[3]),r&2&&(s.step=n[1]),e.$set(s)},i(n){t||(Fe(e.$$.fragment,n),t=!0)},o(n){Je(e.$$.fragment,n),t=!1},d(n){Tn(e,n)}}}function K_(i){let e,t,n,r=i[2]&&xl(i),s=i[3]&&i[3].enabled&&vl(i);return{c(){e=Kt("header"),r&&r.c(),t=Wr(),s&&s.c(),ke(e,"class","shepherd-header")},m(a,o){Ht(a,e,o),r&&r.m(e,null),Ni(e,t),s&&s.m(e,null),n=!0},p(a,[o]){a[2]?r?(r.p(a,o),o&4&&Fe(r,1)):(r=xl(a),r.c(),Fe(r,1),r.m(e,t)):r&&(Hn(),Je(r,1,1,()=>{r=null}),Vn()),a[3]&&a[3].enabled?s?(s.p(a,o),o&8&&Fe(s,1)):(s=vl(a),s.c(),Fe(s,1),s.m(e,null)):s&&(Hn(),Je(s,1,1,()=>{s=null}),Vn())},i(a){n||(Fe(r),Fe(s),n=!0)},o(a){Je(r),Je(s),n=!1},d(a){a&&Ut(e),r&&r.d(),s&&s.d()}}}function Z_(i,e,t){let{labelId:n,step:r}=e,s,a;return i.$$set=o=>{"labelId"in o&&t(0,n=o.labelId),"step"in o&&t(1,r=o.step)},i.$$.update=()=>{i.$$.dirty&2&&(t(2,s=r.options.title),t(3,a=r.options.cancelIcon))},[n,r,s,a]}class J_ extends hn{constructor(e){super(),un(this,e,Z_,K_,cn,{labelId:0,step:1})}}function Q_(i){let e;return{c(){e=Kt("div"),ke(e,"class","shepherd-text"),ke(e,"id",i[1])},m(t,n){Ht(t,e,n),i[3](e)},p(t,[n]){n&2&&ke(e,"id",t[1])},i:Pt,o:Pt,d(t){t&&Ut(e),i[3](null)}}}function e0(i,e,t){let{descriptionId:n,element:r,step:s}=e;Co(()=>{let{text:o}=s.options;Sn(o)&&(o=o.call(s)),ar(o)?r.appendChild(o):t(0,r.innerHTML=o,r)});function a(o){Fi[o?"unshift":"push"](()=>{r=o,t(0,r)})}return i.$$set=o=>{"descriptionId"in o&&t(1,n=o.descriptionId),"element"in o&&t(0,r=o.element),"step"in o&&t(2,s=o.step)},[r,n,s,a]}class t0 extends hn{constructor(e){super(),un(this,e,e0,Q_,cn,{descriptionId:1,element:0,step:2})}}function Ml(i){let e,t;return e=new J_({props:{labelId:i[1],step:i[2]}}),{c(){Qn(e.$$.fragment)},m(n,r){En(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.labelId=n[1]),r&4&&(s.step=n[2]),e.$set(s)},i(n){t||(Fe(e.$$.fragment,n),t=!0)},o(n){Je(e.$$.fragment,n),t=!1},d(n){Tn(e,n)}}}function Sl(i){let e,t;return e=new t0({props:{descriptionId:i[0],step:i[2]}}),{c(){Qn(e.$$.fragment)},m(n,r){En(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.descriptionId=n[0]),r&4&&(s.step=n[2]),e.$set(s)},i(n){t||(Fe(e.$$.fragment,n),t=!0)},o(n){Je(e.$$.fragment,n),t=!1},d(n){Tn(e,n)}}}function yl(i){let e,t;return e=new V_({props:{step:i[2]}}),{c(){Qn(e.$$.fragment)},m(n,r){En(e,n,r),t=!0},p(n,r){const s={};r&4&&(s.step=n[2]),e.$set(s)},i(n){t||(Fe(e.$$.fragment,n),t=!0)},o(n){Je(e.$$.fragment,n),t=!1},d(n){Tn(e,n)}}}function n0(i){let e,t=!dt(i[2].options.title)||i[2].options.cancelIcon&&i[2].options.cancelIcon.enabled,n,r=!dt(i[2].options.text),s,a=Array.isArray(i[2].options.buttons)&&i[2].options.buttons.length,o,c=t&&Ml(i),l=r&&Sl(i),u=a&&yl(i);return{c(){e=Kt("div"),c&&c.c(),n=Wr(),l&&l.c(),s=Wr(),u&&u.c(),ke(e,"class","shepherd-content")},m(f,d){Ht(f,e,d),c&&c.m(e,null),Ni(e,n),l&&l.m(e,null),Ni(e,s),u&&u.m(e,null),o=!0},p(f,[d]){d&4&&(t=!dt(f[2].options.title)||f[2].options.cancelIcon&&f[2].options.cancelIcon.enabled),t?c?(c.p(f,d),d&4&&Fe(c,1)):(c=Ml(f),c.c(),Fe(c,1),c.m(e,n)):c&&(Hn(),Je(c,1,1,()=>{c=null}),Vn()),d&4&&(r=!dt(f[2].options.text)),r?l?(l.p(f,d),d&4&&Fe(l,1)):(l=Sl(f),l.c(),Fe(l,1),l.m(e,s)):l&&(Hn(),Je(l,1,1,()=>{l=null}),Vn()),d&4&&(a=Array.isArray(f[2].options.buttons)&&f[2].options.buttons.length),a?u?(u.p(f,d),d&4&&Fe(u,1)):(u=yl(f),u.c(),Fe(u,1),u.m(e,null)):u&&(Hn(),Je(u,1,1,()=>{u=null}),Vn())},i(f){o||(Fe(c),Fe(l),Fe(u),o=!0)},o(f){Je(c),Je(l),Je(u),o=!1},d(f){f&&Ut(e),c&&c.d(),l&&l.d(),u&&u.d()}}}function i0(i,e,t){let{descriptionId:n,labelId:r,step:s}=e;return i.$$set=a=>{"descriptionId"in a&&t(0,n=a.descriptionId),"labelId"in a&&t(1,r=a.labelId),"step"in a&&t(2,s=a.step)},[n,r,s]}class r0 extends hn{constructor(e){super(),un(this,e,i0,n0,cn,{descriptionId:0,labelId:1,step:2})}}function bl(i){let e;return{c(){e=Kt("div"),ke(e,"class","shepherd-arrow"),ke(e,"data-popper-arrow","")},m(t,n){Ht(t,e,n)},d(t){t&&Ut(e)}}}function s0(i){let e,t,n,r,s,a,o,c,l=i[4].options.arrow&&i[4].options.attachTo&&i[4].options.attachTo.element&&i[4].options.attachTo.on&&bl();n=new r0({props:{descriptionId:i[2],labelId:i[3],step:i[4]}});let u=[{"aria-describedby":r=dt(i[4].options.text)?null:i[2]},{"aria-labelledby":s=i[4].options.title?i[3]:null},i[1],{role:"dialog"},{tabindex:"0"}],f={};for(let d=0;d<u.length;d+=1)f=w_(f,u[d]);return{c(){e=Kt("div"),l&&l.c(),t=Wr(),Qn(n.$$.fragment),fl(e,f),xi(e,"shepherd-has-cancel-icon",i[5]),xi(e,"shepherd-has-title",i[6]),xi(e,"shepherd-element",!0)},m(d,p){Ht(d,e,p),l&&l.m(e,null),Ni(e,t),En(n,e,null),i[13](e),a=!0,o||(c=ns(e,"keydown",i[7]),o=!0)},p(d,[p]){d[4].options.arrow&&d[4].options.attachTo&&d[4].options.attachTo.element&&d[4].options.attachTo.on?l||(l=bl(),l.c(),l.m(e,t)):l&&(l.d(1),l=null);const g={};p&4&&(g.descriptionId=d[2]),p&8&&(g.labelId=d[3]),p&16&&(g.step=d[4]),n.$set(g),fl(e,f=O_(u,[(!a||p&20&&r!==(r=dt(d[4].options.text)?null:d[2]))&&{"aria-describedby":r},(!a||p&24&&s!==(s=d[4].options.title?d[3]:null))&&{"aria-labelledby":s},p&2&&d[1],{role:"dialog"},{tabindex:"0"}])),xi(e,"shepherd-has-cancel-icon",d[5]),xi(e,"shepherd-has-title",d[6]),xi(e,"shepherd-element",!0)},i(d){a||(Fe(n.$$.fragment,d),a=!0)},o(d){Je(n.$$.fragment,d),a=!1},d(d){d&&Ut(e),l&&l.d(),Tn(n),i[13](null),o=!1,c()}}}const o0=9,a0=27,l0=37,c0=39;function wl(i){return i.split(" ").filter(e=>!!e.length)}function u0(i,e,t){let{classPrefix:n,element:r,descriptionId:s,firstFocusableElement:a,focusableElements:o,labelId:c,lastFocusableElement:l,step:u,dataStepId:f}=e,d,p,g;const _=()=>r;L_(()=>{t(1,f={[`data-${n}shepherd-step-id`]:u.id}),t(9,o=r.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')),t(8,a=o[0]),t(10,l=o[o.length-1])}),Co(()=>{g!==u.options.classes&&m()});function m(){h(g),g=u.options.classes,E(g)}function h(x){if(er(x)){const C=wl(x);C.length&&r.classList.remove(...C)}}function E(x){if(er(x)){const C=wl(x);C.length&&r.classList.add(...C)}}const b=x=>{const{tour:C}=u;switch(x.keyCode){case o0:if(o.length===0){x.preventDefault();break}x.shiftKey?(document.activeElement===a||document.activeElement.classList.contains("shepherd-element"))&&(x.preventDefault(),l.focus()):document.activeElement===l&&(x.preventDefault(),a.focus());break;case a0:C.options.exitOnEsc&&(x.preventDefault(),x.stopPropagation(),u.cancel());break;case l0:C.options.keyboardNavigation&&(x.preventDefault(),x.stopPropagation(),C.back());break;case c0:C.options.keyboardNavigation&&(x.preventDefault(),x.stopPropagation(),C.next());break}};function v(x){Fi[x?"unshift":"push"](()=>{r=x,t(0,r)})}return i.$$set=x=>{"classPrefix"in x&&t(11,n=x.classPrefix),"element"in x&&t(0,r=x.element),"descriptionId"in x&&t(2,s=x.descriptionId),"firstFocusableElement"in x&&t(8,a=x.firstFocusableElement),"focusableElements"in x&&t(9,o=x.focusableElements),"labelId"in x&&t(3,c=x.labelId),"lastFocusableElement"in x&&t(10,l=x.lastFocusableElement),"step"in x&&t(4,u=x.step),"dataStepId"in x&&t(1,f=x.dataStepId)},i.$$.update=()=>{i.$$.dirty&16&&(t(5,d=u.options&&u.options.cancelIcon&&u.options.cancelIcon.enabled),t(6,p=u.options&&u.options.title))},[r,f,s,c,u,d,p,b,a,o,l,n,_,v]}class h0 extends hn{constructor(e){super(),un(this,e,u0,s0,cn,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}class oo extends vo{constructor(e,t={}){return super(),this.tour=e,this.classPrefix=this.tour.options?_c(this.tour.options.classPrefix):"",this.styles=e.styles,this._resolvedAttachTo=null,gc(this),this._setOptions(t),this}cancel(){this.tour.cancel(),this.trigger("cancel")}complete(){this.tour.complete(),this.trigger("complete")}destroy(){x_(this),ar(this.el)&&(this.el.remove(),this.el=null),this._updateStepTargetOnHide(),this.trigger("destroy")}getTour(){return this.tour}hide(){var e;(e=this.tour.modal)==null||e.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this._updateStepTargetOnHide(),this.trigger("hide")}_resolveAttachToOptions(){return this._resolvedAttachTo=Rg(this),this._resolvedAttachTo}_getResolvedAttachToOptions(){return this._resolvedAttachTo===null?this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return!!(this.el&&!this.el.hidden)}show(){return Sn(this.options.beforeShowPromise)?Promise.resolve(this.options.beforeShowPromise()).then(()=>this._show()):Promise.resolve(this._show())}updateStepOptions(e){Object.assign(this.options,e),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){const e=`${this.id}-description`,t=`${this.id}-label`;return this.shepherdElementComponent=new h0({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:e,labelId:t,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}_scrollTo(e){const{element:t}=this._getResolvedAttachToOptions();Sn(this.options.scrollToHandler)?this.options.scrollToHandler(t):hg(t)&&typeof t.scrollIntoView=="function"&&t.scrollIntoView(e)}_getClassOptions(e){const t=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=e.classes?e.classes:"",r=t&&t.classes?t.classes:"",s=[...n.split(" "),...r.split(" ")],a=new Set(s);return Array.from(a).join(" ").trim()}_setOptions(e={}){let t=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;t=Mo({},t||{}),this.options=Object.assign({arrow:!0},t,e,__(t,e));const{when:n}=this.options;this.options.classes=this._getClassOptions(e),this.destroy(),this.id=this.options.id||`step-${vc()}`,n&&Object.keys(n).forEach(r=>{this.on(r,n[r],this)})}_setupElements(){dt(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&Cg(this),g_(this)}_show(){var n;this.trigger("before-show"),this._resolveAttachToOptions(),this._setupElements(),this.tour.modal||this.tour.setupModal(),(n=this.tour.modal)==null||n.setupForStep(this),this._styleTargetElementForStep(this),this.el&&(this.el.hidden=!1),this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)}),this.el&&(this.el.hidden=!1);const e=this.shepherdElementComponent.getElement(),t=this.target||document.body;t.classList.add(`${this.classPrefix}shepherd-enabled`),t.classList.add(`${this.classPrefix}shepherd-target`),e.classList.add("shepherd-enabled"),this.trigger("show")}_styleTargetElementForStep(e){const t=e.target;t&&(e.options.highlightClass&&t.classList.add(e.options.highlightClass),t.classList.remove("shepherd-target-click-disabled"),e.options.canClickTarget===!1&&t.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){const e=this.target||document.body;this.options.highlightClass&&e.classList.remove(this.options.highlightClass),e.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}function f0(i){let e={};if(i.navigator){const t=i.navigator.userAgent;e={...e,$os:p0(i),$browser:Uc(t,i.navigator.vendor,!!i.opera),$referrer:i.document.referrer,$referring_domain:g0(i.document.referrer),$device:m0(t),$current_url:i.location.href,$host:i.location.host,$pathname:i.location.pathname,$browser_version:d0(t,i.navigator.vendor,!!i.opera),$screen_height:i.screen.height,$screen_width:i.screen.width,$screen_dpr:i.devicePixelRatio}}return e={...e,$lib:"js",$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:new Date().getTime()/1e3},e}function Ze(i,e){return i.indexOf(e)>=0}function Uc(i,e,t){return e=e||"",t||Ze(i," OPR/")?Ze(i,"Mini")?"Opera Mini":"Opera":/(BlackBerry|PlayBook|BB10)/i.test(i)?"BlackBerry":Ze(i,"IEMobile")||Ze(i,"WPDesktop")?"Internet Explorer Mobile":Ze(i,"SamsungBrowser/")?"Samsung Internet":Ze(i,"Edge")||Ze(i,"Edg/")?"Microsoft Edge":Ze(i,"FBIOS")?"Facebook Mobile":Ze(i,"Chrome")?"Chrome":Ze(i,"CriOS")?"Chrome iOS":Ze(i,"UCWEB")||Ze(i,"UCBrowser")?"UC Browser":Ze(i,"FxiOS")?"Firefox iOS":Ze(e,"Apple")?Ze(i,"Mobile")?"Mobile Safari":"Safari":Ze(i,"Android")?"Android Mobile":Ze(i,"Konqueror")?"Konqueror":Ze(i,"Firefox")?"Firefox":Ze(i,"MSIE")||Ze(i,"Trident/")?"Internet Explorer":Ze(i,"Gecko")?"Mozilla":""}function d0(i,e,t){const n={"Internet Explorer Mobile":/rv:(\d+(\.\d+)?)/,"Microsoft Edge":/Edge?\/(\d+(\.\d+)?)/,Chrome:/Chrome\/(\d+(\.\d+)?)/,"Chrome iOS":/CriOS\/(\d+(\.\d+)?)/,"UC Browser":/(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,Safari:/Version\/(\d+(\.\d+)?)/,"Mobile Safari":/Version\/(\d+(\.\d+)?)/,Opera:/(Opera|OPR)\/(\d+(\.\d+)?)/,Firefox:/Firefox\/(\d+(\.\d+)?)/,"Firefox iOS":/FxiOS\/(\d+(\.\d+)?)/,Konqueror:/Konqueror:(\d+(\.\d+)?)/,BlackBerry:/BlackBerry (\d+(\.\d+)?)/,"Android Mobile":/android\s(\d+(\.\d+)?)/,"Samsung Internet":/SamsungBrowser\/(\d+(\.\d+)?)/,"Internet Explorer":/(rv:|MSIE )(\d+(\.\d+)?)/,Mozilla:/rv:(\d+(\.\d+)?)/},r=Uc(i,e,t),s=n[r]||void 0;if(s===void 0)return null;const a=i.match(s);return a?parseFloat(a[a.length-2]):null}function p0(i){const e=i.navigator.userAgent;return/Windows/i.test(e)?/Phone/.test(e)||/WPDesktop/.test(e)?"Windows Phone":"Windows":/(iPhone|iPad|iPod)/.test(e)?"iOS":/Android/.test(e)?"Android":/(BlackBerry|PlayBook|BB10)/i.test(e)?"BlackBerry":/Mac/i.test(e)?"Mac OS X":/Linux/.test(e)?"Linux":/CrOS/.test(e)?"Chrome OS":""}function m0(i){return/Windows Phone/i.test(i)||/WPDesktop/.test(i)?"Windows Phone":/iPad/.test(i)?"iPad":/iPod/.test(i)?"iPod Touch":/iPhone/.test(i)?"iPhone":/(BlackBerry|PlayBook|BB10)/i.test(i)?"BlackBerry":/Android/.test(i)?"Android":""}function g0(i){const e=i.split("/");return e.length>=3?e[2]:""}function _0(i){if(i){const{steps:e}=i;e.forEach(t=>{t.options&&t.options.canClickTarget===!1&&t.options.attachTo&&ar(t.target)&&t.target.classList.remove("shepherd-target-click-disabled")})}}const ao=(i,e)=>e.some(t=>i instanceof t);let El,Tl;function x0(){return El||(El=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v0(){return Tl||(Tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,qs=new WeakMap,is=new WeakMap;function M0(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",a)},s=()=>{t(Wn(i.result)),r()},a=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",a)});return is.set(e,i),e}function S0(i){if(lo.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",a),i.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",a),i.addEventListener("abort",a)});lo.set(i,e)}let co={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return lo.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wn(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Oc(i){co=i(co)}function y0(i){return v0().includes(i)?function(...e){return i.apply(uo(this),e),Wn(this.request)}:function(...e){return Wn(i.apply(uo(this),e))}}function b0(i){return typeof i=="function"?y0(i):(i instanceof IDBTransaction&&S0(i),ao(i,x0())?new Proxy(i,co):i)}function Wn(i){if(i instanceof IDBRequest)return M0(i);if(qs.has(i))return qs.get(i);const e=b0(i);return e!==i&&(qs.set(i,e),is.set(e,i)),e}const uo=i=>is.get(i);function w0(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const a=indexedDB.open(i,e),o=Wn(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Wn(a.result),c.oldVersion,c.newVersion,Wn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const E0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],Xs=new Map;function Al(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xs.get(e))return Xs.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=T0.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||E0.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),r&&l.done]))[0]};return Xs.set(e,s),s}Oc(i=>it({},i,{get:(e,t,n)=>Al(e,t)||i.get(e,t,n),has:(e,t)=>!!Al(e,t)||i.has(e,t)}));const A0=["continue","continuePrimaryKey","advance"],Cl={},ho=new WeakMap,Nc=new WeakMap,C0={get(i,e){if(!A0.includes(e))return i[e];let t=Cl[e];return t||(t=Cl[e]=function(...n){ho.set(this,Nc.get(this)[e](...n))}),t}};function P0(){return fo.apply(this,arguments)}function fo(){return fo=fg(function*(...i){let e=this;if(e instanceof IDBCursor||(e=yield il(e.openCursor(...i))),!e)return;e=e;const t=new Proxy(e,C0);for(Nc.set(t,e),is.set(t,uo(e));e;)yield t,e=yield il(ho.get(t)||e.continue()),ho.delete(t)}),fo.apply(this,arguments)}function Pl(i,e){return e===Symbol.asyncIterator&&ao(i,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&ao(i,[IDBIndex,IDBObjectStore])}Oc(i=>it({},i,{get(e,t,n){return Pl(e,t)?P0:i.get(e,t,n)},has(e,t){return Pl(e,t)||i.has(e,t)}}));class L0{constructor(e,t,n){if(!e)throw new Error("Shepherd Pro: Missing required apiKey option.");if(!t)throw new Error("Shepherd Pro: Missing required apiPath option.");this.apiKey=e,this.apiPath=t,this.properties=n}async getTourState(){try{const e=await fetch(`${this.apiPath}/api/v1/state`,{headers:{Authorization:`ApiKey ${this.apiKey}`,"Content-Type":"application/json"},method:"GET"});if(!e.ok)throw new Error("Could not fetch state for tours 🐑");const{data:t}=await e.json();if(this.tourStateDb=await w0("TourState",1,{upgrade(n){n.createObjectStore("tours",{keyPath:"uniqueId"})}}),Array.isArray(t)&&t.length){const n=this.tourStateDb.transaction("tours","readwrite"),r=t.map(s=>n.store.put(s));await Promise.all([...r,n.done])}}catch(e){throw new Error("Error fetching data: "+(e instanceof Error?e.message:"Unknown error"))}}async sendEvents(e){e.data.properties=this.properties;try{const t=await fetch(`${this.apiPath}/api/v1/actor`,{headers:{Authorization:`ApiKey ${this.apiKey}`,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)});if(!t.ok)throw new Error("Could not create an event 🐑");const{data:n}=await t.json();return n}catch(t){throw new Error("Error fetching data: "+(t instanceof Error?t.message:"Unknown error"))}}}function R0({width:i,height:e,x:t=0,y:n=0,r=0}){const{innerWidth:s,innerHeight:a}=window,{topLeft:o=0,topRight:c=0,bottomRight:l=0,bottomLeft:u=0}=typeof r=="number"?{topLeft:r,topRight:r,bottomRight:r,bottomLeft:r}:r;return`M${s},${a}H0V0H${s}V${a}ZM${t+o},${n}a${o},${o},0,0,0-${o},${o}V${e+n-u}a${u},${u},0,0,0,${u},${u}H${i+t-l}a${l},${l},0,0,0,${l}-${l}V${n+c}a${c},${c},0,0,0-${c}-${c}Z`}function D0(i){let e,t,n,r,s;return{c(){e=hl("svg"),t=hl("path"),ke(t,"d",i[2]),ke(e,"class",n=`${i[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(a,o){Ht(a,e,o),Ni(e,t),i[11](e),r||(s=ns(e,"touchmove",i[3]),r=!0)},p(a,[o]){o&4&&ke(t,"d",a[2]),o&2&&n!==(n=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&ke(e,"class",n)},i:Pt,o:Pt,d(a){a&&Ut(e),i[11](null),r=!1,s()}}}function Fc(i){if(!i)return null;const t=i instanceof HTMLElement&&window.getComputedStyle(i).overflowY;return t!=="hidden"&&t!=="visible"&&i.scrollHeight>=i.clientHeight?i:Fc(i.parentElement)}function I0(i){let e={top:0,left:0};if(!i)return e;let t=i.ownerDocument.defaultView;for(;t!==window.top;){var n;const a=(n=t)==null?void 0:n.frameElement;if(a){var r,s;const o=a.getBoundingClientRect();e.top+=o.top+((r=o.scrollTop)!=null?r:0),e.left+=o.left+((s=o.scrollLeft)!=null?s:0)}t=t.parent}return e}function U0(i,e){const t=i.getBoundingClientRect();let n=t.y||t.top,r=t.bottom||n+t.height;if(e){const a=e.getBoundingClientRect(),o=a.y||a.top,c=a.bottom||o+a.height;n=Math.max(n,o),r=Math.min(r,c)}const s=Math.max(r-n,0);return{y:n,height:s}}function O0(i,e,t){let{element:n,openingProperties:r}=e,s=!1,a,o;l();const c=()=>n;function l(){t(4,r={width:0,height:0,x:0,y:0,r:0})}function u(){t(1,s=!1),h()}function f(v=0,x=0,C=0,L=0,N,S){if(S){const{y:T,height:Y}=U0(S,N),{x:W,width:D,left:U}=S.getBoundingClientRect();t(4,r={width:D+v*2,height:Y+v*2,x:(W||U)+C-v,y:T+L-v,r:x})}else l()}function d(v){h(),v.tour.options.useModalOverlay?(E(v),p()):u()}function p(){t(1,s=!0)}const g=v=>{v.preventDefault()},_=v=>{v.stopPropagation()};function m(){window.addEventListener("touchmove",g,{passive:!1})}function h(){a&&(cancelAnimationFrame(a),a=void 0),window.removeEventListener("touchmove",g,{passive:!1})}function E(v){const{modalOverlayOpeningPadding:x,modalOverlayOpeningRadius:C,modalOverlayOpeningXOffset:L=0,modalOverlayOpeningYOffset:N=0}=v.options,S=I0(v.target),T=Fc(v.target),Y=()=>{a=void 0,f(x,C,L+S.left,N+S.top,T,v.target),a=requestAnimationFrame(Y)};Y(),m()}function b(v){Fi[v?"unshift":"push"](()=>{n=v,t(0,n)})}return i.$$set=v=>{"element"in v&&t(0,n=v.element),"openingProperties"in v&&t(4,r=v.openingProperties)},i.$$.update=()=>{i.$$.dirty&16&&t(2,o=R0(r))},[n,s,o,_,r,c,l,u,f,d,p,b]}class N0 extends hn{constructor(e){super(),un(this,e,O0,D0,cn,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}const F0="https://shepherdpro.com",po="shepherdPro:userId";class z0 extends vo{constructor(){super(...arguments),this.isProEnabled=!1}async init(e,t,n){if(!e)throw new Error("Shepherd Pro: Missing required apiKey option.");if(this.apiKey=e,this.apiPath=t??F0,this.properties=n??{},this.properties.context=f0(window),this.apiKey){this.dataRequester=new L0(this.apiKey,this.apiPath,this.properties),this.isProEnabled=!0;const r=localStorage.getItem(po),s=[this.dataRequester.getTourState()];r||s.push(this.createNewActor()),await Promise.all(s)}}async createNewActor(){if(!this.dataRequester)return;const e=await this.dataRequester.sendEvents({data:{currentUserId:null,eventType:"setup"}});localStorage.setItem(po,String(e.actorId))}async isTourEnabled(e){var n;if(!this.dataRequester)return;const t=await((n=this.dataRequester.tourStateDb)==null?void 0:n.get("tours",e));return(t==null?void 0:t.isActive)??!0}}class B0 extends vo{constructor(e={}){super(),this.trackedEvents=["active","cancel","complete","show"],gc(this);const t={exitOnEsc:!0,keyboardNavigation:!0};this.options=Object.assign({},t,e),this.classPrefix=_c(this.options.classPrefix),this.steps=[],this.addSteps(this.options.steps),["active","cancel","complete","inactive","show","start"].map(s=>{(a=>{this.on(a,o=>{o=o||{},o.tour=this,Xt.trigger(a,o)})})(s)}),this._setTourID(e.id);const{dataRequester:r}=Xt;return r&&this.trackedEvents.forEach(s=>this.on(s,a=>{const{tour:o}=a,{id:c,steps:l}=o;let u;if(s!=="active"){const{step:d}=a;d&&(u=l.findIndex(p=>p.id===d.id)+1)}const f={currentUserId:localStorage.getItem(po),eventType:s,journeyData:{id:c,currentStep:u,numberOfSteps:l.length,tourOptions:o.options}};r.sendEvents({data:f})})),this}addStep(e,t){let n=e;return n instanceof oo?n.tour=this:n=new oo(this,n),dt(t)?this.steps.push(n):this.steps.splice(t,0,n),n}addSteps(e){return Array.isArray(e)&&e.forEach(t=>{this.addStep(t)}),this}back(){const e=this.steps.indexOf(this.currentStep);this.show(e-1,!1)}async cancel(){if(this.options.confirmCancel){const e=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?";let t;Sn(this.options.confirmCancel)?t=await this.options.confirmCancel():t=window.confirm(e),t&&this._done("cancel")}else this._done("cancel")}complete(){this._done("complete")}getById(e){return this.steps.find(t=>t.id===e)}getCurrentStep(){return this.currentStep}hide(){const e=this.getCurrentStep();if(e)return e.hide()}isActive(){return Xt.activeTour===this}next(){const e=this.steps.indexOf(this.currentStep);e===this.steps.length-1?this.complete():this.show(e+1,!0)}removeStep(e){const t=this.getCurrentStep();this.steps.some((n,r)=>{if(n.id===e)return n.isOpen()&&n.hide(),n.destroy(),this.steps.splice(r,1),!0}),t&&t.id===e&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(e=0,t=!0){const n=er(e)?this.getById(e):this.steps[e];n&&(this._updateStateBeforeShow(),Sn(n.options.showOn)&&!n.options.showOn()?this._skipStep(n,t):(this.trigger("show",{step:n,previous:this.currentStep}),this.currentStep=n,n.show()))}async start(){Xt.isProEnabled&&!await Xt.isTourEnabled(this.options.id)||(this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this.setupModal(),this._setupActiveTour(),this.next())}_done(e){const t=this.steps.indexOf(this.currentStep);if(Array.isArray(this.steps)&&this.steps.forEach(n=>n.destroy()),_0(this),this.trigger(e,{index:t}),Xt.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),(e==="cancel"||e==="complete")&&this.modal){const n=document.querySelector(".shepherd-modal-overlay-container");n&&(n.remove(),this.modal=null)}ar(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this}),Xt.activeTour=this}setupModal(){this.modal=new N0({target:this.options.modalContainer||document.body,props:{styles:this.styles}})}_skipStep(e,t){const n=this.steps.indexOf(e);if(n===this.steps.length-1)this.complete();else{const r=t?n+1:n-1;this.show(r,t)}}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}_setTourID(e){const t=this.options.tourName||"tour",n=e||vc();this.id=`${t}--${n}`}}const Xt=new z0,zc=typeof window>"u";Xt.Step=zc?Pg:oo;Xt.Tour=zc?Lg:B0;const rs=new Xt.Tour({defaultStepOptions:{cancelIcon:{enabled:!0},classes:"shadow-md bg-purple-dark",scrollTo:{behavior:"smooth",block:"center"}}});rs.addStep({title:"Welcome to 3d trefoil-knot",text:'This guide will teach you basic controls to view this 3d moving illustration. Click "Next" to continue.',attachTo:{element:".subtitle",on:"bottom"},buttons:[{action(){return this.next()},text:"Next"}],id:"step1"});rs.addStep({title:"Zoom ( Pinch out )",text:"Pinch out and in to zoom in and out or Use your mouse wheel to zoom in and out.",buttons:[{action(){return this.next()},text:"Next"}],id:"step2"});rs.addStep({title:"Rotate ( Drag )",text:"Click the cursor and drag to rotate the 3d object.",buttons:[{action(){return this.next()},text:"Exit"}],id:"step2"});rs.start();
