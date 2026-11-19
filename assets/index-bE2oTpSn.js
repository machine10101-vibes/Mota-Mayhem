var e=Object.defineProperty,t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,ee=1023,D=1026,O=1027,k=1028,A=1029,j=1030,te=1031,M=1033,ne=33776,N=33777,re=33778,ie=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,ke=37821,Ae=36492,je=36494,Me=36495,Ne=36283,Pe=36284,Fe=36285,P=36286,Ie=2300,Le=2301,Re=2302,F=2303,ze=2400,I=2401,Be=2402,Ve=3200,He=`srgb`,Ue=`srgb-linear`,We=`linear`,Ge=`srgb`,Ke=7680,qe=35044,Je=35048,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={};function tt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=nt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rt(...e){let t=e.join(` `);t in et||(et[t]=!0,L(...e))}function it(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var at={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},st=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ct=1234567,lt=Math.PI/180,ut=180/Math.PI;function dt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(st[e&255]+st[e>>8&255]+st[e>>16&255]+st[e>>24&255]+`-`+st[t&255]+st[t>>8&255]+`-`+st[t>>16&15|64]+st[t>>24&255]+`-`+st[n&63|128]+st[n>>8&255]+`-`+st[n>>16&255]+st[n>>24&255]+st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]).toLowerCase()}function ft(e,t,n){return Math.max(t,Math.min(n,e))}function pt(e,t){return(e%t+t)%t}function mt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ht(e,t,n){return e===t?0:(n-e)/(t-e)}function gt(e,t,n){return(1-n)*e+n*t}function _t(e,t,n,r){return gt(e,t,1-Math.exp(-n*r))}function vt(e,t=1){return t-Math.abs(pt(e,t*2)-t)}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function St(e,t){return e+Math.random()*(t-e)}function Ct(e){return e*(.5-Math.random())}function wt(e){e!==void 0&&(ct=e);let t=ct+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tt(e){return e*lt}function Et(e){return e*ut}function Dt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ot(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function kt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function At(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function jt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Mt(e,t){if(t.constructor===Float32Array)return e;let n=jt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Nt(e,t){if(t.constructor===Float32Array)return e;let n=jt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Pt={DEG2RAD:lt,RAD2DEG:ut,generateUUID:dt,clamp:ft,euclideanModulo:pt,mapLinear:mt,inverseLerp:ht,lerp:gt,damp:_t,pingpong:vt,smoothstep:yt,smootherstep:bt,randInt:xt,randFloat:St,randFloatSpread:Ct,seededRandom:wt,degToRad:Tt,radToDeg:Et,isPowerOfTwo:Dt,ceilPowerOfTwo:Ot,floorPowerOfTwo:kt,setQuaternionFromProperEuler:At,normalize:Nt,denormalize:Mt},Ft=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lt.copy(this).projectOnVector(e),this.sub(Lt)}reflect(e){return this.sub(Lt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lt=new z,Rt=new It,zt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return rt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Bt.makeScale(e,t)),this}rotate(e){return rt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Bt.makeRotation(-e)),this}translate(e,t){return rt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Bt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bt=new zt,Vt=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ht=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ut(){let e={enabled:!0,workingColorSpace:Ue,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?We:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ue]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Vt,fromXYZ:Ht,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Vt,fromXYZ:Ht,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),e}var Wt=Ut();function Gt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Kt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var qt,Jt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qt===void 0&&(qt=Qe(`canvas`)),qt.width=e.width,qt.height=e.height;let t=qt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=qt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Gt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Gt(t[e]/255)*255):t[e]=Gt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Yt=0,Xt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=dt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Zt(r[t].image)):e.push(Zt(r[t]))}else e=Zt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Zt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Jt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Qt=0,$t=new z,en=class e extends ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=ee,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=dt(),this.name=``,this.source=new Xt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($t).x}get height(){return this.source.getSize($t).y}get depth(){return this.source.getSize($t).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null,en.DEFAULT_MAPPING=300,en.DEFAULT_ANISOTROPY=1;var tn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nn=class extends ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new en({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Xt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},rn=class extends nn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},an=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},on=class extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},sn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/cn.setFromMatrixColumn(e,0).length(),i=1/cn.setFromMatrixColumn(e,1).length(),a=1/cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(un,e,dn)}lookAt(e,t,n){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),fn.crossVectors(n,mn),fn.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),fn.crossVectors(n,mn)),fn.normalize(),pn.crossVectors(mn,fn),r[0]=fn.x,r[4]=pn.x,r[8]=mn.x,r[1]=fn.y,r[5]=pn.y,r[9]=mn.y,r[2]=fn.z,r[6]=pn.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],ee=r[9],D=r[13],O=r[2],k=r[6],A=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*O+c*te,i[4]=a*S+o*E+s*k+c*M,i[8]=a*C+o*ee+s*A+c*ne,i[12]=a*w+o*D+s*j+c*N,i[1]=l*x+u*T+d*O+f*te,i[5]=l*S+u*E+d*k+f*M,i[9]=l*C+u*ee+d*A+f*ne,i[13]=l*w+u*D+d*j+f*N,i[2]=p*x+m*T+h*O+g*te,i[6]=p*S+m*E+h*k+g*M,i[10]=p*C+m*ee+h*A+g*ne,i[14]=p*w+m*D+h*j+g*N,i[3]=_*x+v*T+y*O+b*te,i[7]=_*S+v*E+y*k+b*M,i[11]=_*C+v*ee+y*A+b*ne,i[15]=_*w+v*D+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,ee=u*g-f*m,D=d*g-f*h,O=_*D-v*ee+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*D-s*ee+c*E)*k,e[1]=(r*ee-n*D-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*D-c*w)*k,e[5]=(t*D-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*ee-o*T+c*C)*k,e[9]=(n*T-t*ee-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=cn.set(r[0],r[1],r[2]).length(),o=cn.set(r[4],r[5],r[6]).length(),s=cn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ln.copy(this);let c=1/a,l=1/o,u=1/s;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cn=new z,ln=new sn,un=new z(0,0,0),dn=new z(1,1,1),fn=new z,pn=new z,mn=new z,hn=new sn,gn=new It,_n=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ft(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gn.setFromEuler(this),this.setFromQuaternion(gn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER=`XYZ`;var vn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},yn=0,bn=new z,xn=new It,Sn=new sn,Cn=new z,wn=new z,Tn=new z,En=new It,Dn=new z(1,0,0),On=new z(0,1,0),kn=new z(0,0,1),An={type:`added`},jn={type:`removed`},Mn={type:`childadded`,child:null},Nn={type:`childremoved`,child:null},Pn=class e extends ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=dt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new _n,r=new It,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new sn},normalMatrix:{value:new zt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.multiply(xn),this}rotateOnWorldAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.premultiply(xn),this}rotateX(e){return this.rotateOnAxis(Dn,e)}rotateY(e){return this.rotateOnAxis(On,e)}rotateZ(e){return this.rotateOnAxis(kn,e)}translateOnAxis(e,t){return bn.copy(e).applyQuaternion(this.quaternion),this.position.add(bn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dn,e)}translateY(e){return this.translateOnAxis(On,e)}translateZ(e){return this.translateOnAxis(kn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cn.copy(e):Cn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(wn,Cn,this.up):Sn.lookAt(Cn,wn,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),xn.setFromRotationMatrix(Sn),this.quaternion.premultiply(xn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,e,Tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,En,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Pn.DEFAULT_UP=new z(0,1,0),Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends Pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},In={type:`move`},Ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(In)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function Vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Wt.workingColorSpace){if(e=pt(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Vn(i,r,e+1/3),this.g=Vn(i,r,e),this.b=Vn(i,r,e-1/3)}return Wt.colorSpaceToWorking(this,r),this}setStyle(e,t=He){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){let n=Rn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}copyLinearToSRGB(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Wt.workingToColorSpace(Hn.copy(this),e),Math.round(ft(Hn.r*255,0,255))*65536+Math.round(ft(Hn.g*255,0,255))*256+Math.round(ft(Hn.b*255,0,255))}getHexString(e=He){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,r=Hn.g,i=Hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=He){Wt.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,r=Hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Bn);let n=gt(zn.h,Bn.h,t),r=gt(zn.s,Bn.s,t),i=gt(zn.l,Bn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new B;B.NAMES=Rn;var Un=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wn=class extends Pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new z,Kn=new z,qn=new z,Jn=new z,Yn=new z,Xn=new z,Zn=new z,Qn=new z,$n=new z,er=new z,tr=new tn,nr=new tn,rr=new tn,ir=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gn.subVectors(e,t),r.cross(Gn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Gn.subVectors(r,t),Kn.subVectors(n,t),qn.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(Kn),s=Gn.dot(qn),c=Kn.dot(Kn),l=Kn.dot(qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)!==null&&Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Jn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Jn.x),s.addScaledVector(a,Jn.y),s.addScaledVector(o,Jn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return tr.setScalar(0),nr.setScalar(0),rr.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tr,i.x),a.addScaledVector(nr,i.y),a.addScaledVector(rr,i.z),a}static isFrontFacing(e,t,n,r){return Gn.subVectors(n,t),Kn.subVectors(e,t),Gn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Gn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Yn.subVectors(r,n),Xn.subVectors(i,n),Qn.subVectors(e,n);let s=Yn.dot(Qn),c=Xn.dot(Qn);if(s<=0&&c<=0)return t.copy(n);$n.subVectors(e,r);let l=Yn.dot($n),u=Xn.dot($n);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Yn,a);er.subVectors(e,i);let f=Yn.dot(er),p=Xn.dot(er);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Yn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ar=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,sr):sr.fromBufferAttribute(r,t),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),gr.subVectors(this.max,hr),lr.subVectors(e.a,hr),ur.subVectors(e.b,hr),dr.subVectors(e.c,hr),fr.subVectors(ur,lr),pr.subVectors(dr,ur),mr.subVectors(lr,dr);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-mr.z,mr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,mr.z,0,-mr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-mr.y,mr.x,0];return!yr(t,lr,ur,dr,gr)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,lr,ur,dr,gr))?!1:(_r.crossVectors(fr,pr),t=[_r.x,_r.y,_r.z],yr(t,lr,ur,dr,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new z,new z,new z,new z,new z,new z,new z,new z],sr=new z,cr=new ar,lr=new z,ur=new z,dr=new z,fr=new z,pr=new z,mr=new z,hr=new z,gr=new z,_r=new z,vr=new z;function yr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){vr.fromArray(e,a);let o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),s=t.dot(vr),c=n.dot(vr),l=r.dot(vr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var br=new z,xr=new Ft,Sr=0,Cr=class extends ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=qe,this.updateRanges=[],this.gpuType=v,this.version=0,this._normalizationScale=e===void 0?void 0:jt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Mt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Nt(e,this.array):Math.round(e*t)}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new ar,Or=new z,kr=new z,Ar=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new sn,Nr=new Pn,Pr=new z,Fr=new ar,Ir=new ar,Lr=new z,Rr=class e extends ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=dt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new zt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let l=new z,u=new z,d=new z,f=new Ft,p=new Ft,m=new Ft,h=new z,g=new z;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new z,b=new z,x=new z,S=new z;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=new z,Br=new z,Vr=new zt,Hr=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=zr.subVectors(n,t).cross(Br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(zr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vr.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ur=0,Wr=class extends ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=dt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ke,this.stencilZFail=Ke,this.stencilZPass=Ke,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Hr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Ft().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Gr=new z,Kr=new z,qr=new z,Jr=new z,Yr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gr.copy(this.origin).addScaledVector(this.direction,t),Gr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kr.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Kr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Jr.dot(this.direction),s=-Jr.dot(qr),c=Jr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Kr).addScaledVector(qr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Gr.subVectors(e.center,this.origin);let n=Gr.dot(this.direction),r=Gr.dot(Gr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,ee,D,O,k,A,j,te;if(y>=b&&y>=x?(w=s,ee=u,k=p,te=g,s>=0?(S=c,C=l,T=d,E=f,D=m,O=h,A=_,j=v):(S=l,C=c,T=f,E=d,D=h,O=m,A=v,j=_)):b>=x?(w=c,ee=d,k=m,te=_,c>=0?(S=l,C=s,T=f,E=u,D=h,O=p,A=v,j=g):(S=s,C=l,T=u,E=f,D=p,O=h,A=g,j=v)):(w=l,ee=f,k=h,te=v,l>=0?(S=s,C=c,T=u,E=d,D=p,O=m,A=g,j=_):(S=c,C=s,T=d,E=u,D=m,O=p,A=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*ee,ie=E-ne*ee,ae=D-M*k,oe=O-ne*k,se=A-M*te,ce=j-ne*te,le=se*oe-ce*ae,ue=re*ce-ie*se,de=ae*ie-oe*re;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=N*(le*ee+ue*k+de*te);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xr=class extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zr=new sn,Qr=new Yr,$r=new Ar,ei=new z,ti=new z,ni=new z,ri=new z,ii=new z,ai=new z,oi=new z,si=new z,ci=class extends Pn{constructor(e=new Rr,t=new Xr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ii.fromBufferAttribute(s,e),a?ai.addScaledVector(ii,r):ai.addScaledVector(ii.sub(t),r))}t.add(ai)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),Qr.copy(e.ray).recast(e.near),$r.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere($r,ei)===null||Qr.origin.distanceToSquared(ei)>(e.far-e.near)**2)||(Zr.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Zr),(n.boundingBox===null||Qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ui(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ui(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ui(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ui(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function li(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;si.copy(s),si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(si);return l<n.near||l>n.far?null:{distance:l,point:si.clone(),object:e}}function ui(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ti),e.getVertexPosition(c,ni),e.getVertexPosition(l,ri);let u=li(e,t,n,r,ti,ni,ri,oi);if(u){let e=new z;ir.getBarycoord(oi,ti,ni,ri,e),i&&(u.uv=ir.getInterpolatedAttribute(i,s,c,l,e,new Ft)),a&&(u.uv1=ir.getInterpolatedAttribute(a,s,c,l,e,new Ft)),o&&(u.normal=ir.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};ir.getNormal(ti,ni,ri,t.normal),u.face=t,u.barycoord=e}return u}var di=class extends en{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fi=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pi=new sn,mi=new sn,hi=[],gi=new ar,_i=new sn,vi=new ci,yi=new Ar,bi=class extends ci{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,_i)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),gi.copy(e.boundingBox).applyMatrix4(pi),this.boundingBox.union(gi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pi),yi.copy(e.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(yi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(vi.geometry=this.geometry,vi.material=this.material,vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yi.copy(this.boundingSphere),yi.applyMatrix4(n),e.ray.intersectsSphere(yi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,pi),mi.multiplyMatrices(n,pi),vi.matrixWorld=mi,vi.raycast(e,hi);for(let e=0,n=hi.length;e<n;e++){let n=hi[e];n.instanceId=i,n.object=this,t.push(n)}hi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new di(new Float32Array(r*this.count),r,this.count,k,v));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new Ar,Si=new Ft(.5,.5),Ci=new z,wi=class{constructor(e=new Hr,t=new Hr,n=new Hr,r=new Hr,i=new Hr,a=new Hr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476+Si.distanceTo(e.center),xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ci.x=r.normal.x>0?e.max.x:e.min.x,Ci.y=r.normal.y>0?e.max.y:e.min.y,Ci.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ti=new sn,Ei=class e{constructor(){this.coordinateSystem=Ye,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Ti.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new wi),n[e].setFromProjectionMatrix(Ti,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new wi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Di=class extends en{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oi=class extends en{constructor(e,t,n=_,r,i,a,s=o,c=o,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ki=class extends Oi{constructor(e,t=_,n=301,r,i,a=o,s=o,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ai=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,ee=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)ee[e]=(s*v-b)*r,ee[t]=o*i,ee[n]=S,c.push(ee.x,ee.y,ee.z),ee[e]=0,ee[t]=0,ee[n]=m>0?1:-1,l.push(ee.x,ee.y,ee.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mi=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ni=class e extends Rr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new z,p=new Ft;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Er(s,3)),this.setAttribute(`normal`,new Er(c,3)),this.setAttribute(`uv`,new Er(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Pi=class e extends Rr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Fi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Li(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Li(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ii(e){let t={};for(let n=0;n<e.length;n++){let r=Fi(e[n]);for(let e in r)t[e]=r[e]}return t}function Li(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ri(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Bi={clone:Fi,merge:Ii},Vi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ui=class extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vi,this.fragmentShader=Hi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Ri(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Ft().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new tn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new zt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new sn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wi=class extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Gi=class extends Wr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ki=class extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ve,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qi=class extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ji(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Yi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Xi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Zi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case I:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case I:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Qi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},$i=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ea=class extends Xi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ra(n,t,g,y,r);i[p]=ta(x,o,_,b,m)}return i}};function ta(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function na(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ra(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ta(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=na(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ia=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Yi(e.settings)&&(n.settings={inTangents:Ji(e.settings.inTangents,Array),outTangents:Ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $i(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break;case F:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re;case this.InterpolantFactoryMethodBezier:return F}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Yi(this.settings)&&(aa(this.settings.inTangents,e),aa(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Yi(this.settings)&&(oa(this.settings.inTangents,e),oa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Yi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function aa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function oa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ia.prototype.ValueTypeName=``,ia.prototype.TimeBufferType=Float32Array,ia.prototype.ValueBufferType=Float32Array,ia.prototype.DefaultInterpolation=Le;var sa=class extends ia{constructor(e,t,n){super(e,t,n)}};sa.prototype.ValueTypeName=`bool`,sa.prototype.ValueBufferType=Array,sa.prototype.DefaultInterpolation=Ie,sa.prototype.InterpolantFactoryMethodLinear=void 0,sa.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};ca.prototype.ValueTypeName=`color`;var la=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};la.prototype.ValueTypeName=`number`;var ua=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)It.slerpFlat(i,0,a,c-o,a,c,s);return i}},da=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}};da.prototype.ValueTypeName=`quaternion`,da.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends ia{constructor(e,t,n){super(e,t,n)}};fa.prototype.ValueTypeName=`string`,fa.prototype.ValueBufferType=Array,fa.prototype.DefaultInterpolation=Ie,fa.prototype.InterpolantFactoryMethodLinear=void 0,fa.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};pa.prototype.ValueTypeName=`vector`;var ma=class extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ha=class extends ma{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ga=new sn,_a=new z,va=new z,ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=f,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_a.setFromMatrixPosition(e.matrixWorld),t.position.copy(_a),va.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(va),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ga,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ba=new z,xa=new It,Sa=new z,Ca=class extends Pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ba,xa,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,Sa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ba,xa,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wa=new z,Ta=new Ft,Ea=new Ft,Da=class extends Ca{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ut*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ut*2*Math.atan(Math.tan(lt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,t){return this.getViewBounds(e,Ta,Ea),t.subVectors(Ea,Ta)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oa=class extends ya{constructor(){super(new Da(90,1,.5,500)),this.isPointLightShadow=!0}},ka=class extends ma{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Oa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Aa=class extends Ca{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ja=class extends ya{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new ja}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Na=-90,Pa=1,Fa=class extends Pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Da(Na,Pa,e,t);r.layers=this.layers,this.add(r);let i=new Da(Na,Pa,e,t);i.layers=this.layers,this.add(i);let a=new Da(Na,Pa,e,t);a.layers=this.layers,this.add(a);let o=new Da(Na,Pa,e,t);o.layers=this.layers,this.add(o);let s=new Da(Na,Pa,e,t);s.layers=this.layers,this.add(s);let c=new Da(Na,Pa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ia=class extends Da{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},La=`\\[\\]\\.:\\/`,Ra=RegExp(`[\\[\\]\\.:\\/]`,`g`),za=`[^\\[\\]\\.:\\/]`,Ba=`[^`+La.replace(`\\.`,``)+`]`,Va=`((?:WC+[\\/:])*)`.replace(`WC`,za),Ha=`(WCOD+)?`.replace(`WCOD`,Ba),Ua=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,za),Wa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,za),Ga=RegExp(`^`+Va+Ha+Ua+Wa+`$`),Ka=[`material`,`materials`,`bones`,`map`],qa=class{constructor(e,t,n){let r=n||Ja.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ja=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ra,``)}static parseTrackName(e){let t=Ga.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ka.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ja.Composite=qa,Ja.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ja.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ja.prototype.GetterByBindingType=[Ja.prototype._getValue_direct,Ja.prototype._getValue_array,Ja.prototype._getValue_arrayElement,Ja.prototype._getValue_toArray],Ja.prototype.SetterByBindingTypeAndVersioning=[[Ja.prototype._setValue_direct,Ja.prototype._setValue_direct_setNeedsUpdate,Ja.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ja.prototype._setValue_array,Ja.prototype._setValue_array_setNeedsUpdate,Ja.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ja.prototype._setValue_arrayElement,Ja.prototype._setValue_arrayElement_setNeedsUpdate,Ja.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ja.prototype._setValue_fromArray,Ja.prototype._setValue_fromArray_setNeedsUpdate,Ja.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ya=new sn,Xa=class{constructor(e,t,n=0,r=1/0){this.ray=new Yr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new vn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ya.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ya),this}intersectObject(e,t=!0,n=[]){return Qa(e,this,n,t),n.sort(Za),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Qa(e[r],this,n,t);return n.sort(Za),n}};function Za(e,t){return e.distance-t.distance}function Qa(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Qa(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function $a(e,t,n,r){let i=eo(r);switch(n){case T:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case E:return e*t*3/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case ne:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ae:case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case P:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function eo(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function to(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function no(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ro={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},V={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},io={basic:{uniforms:Ii([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.fog]),vertexShader:ro.meshbasic_vert,fragmentShader:ro.meshbasic_frag},lambert:{uniforms:Ii([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:ro.meshlambert_vert,fragmentShader:ro.meshlambert_frag},phong:{uniforms:Ii([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ro.meshphong_vert,fragmentShader:ro.meshphong_frag},standard:{uniforms:Ii([V.common,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.roughnessmap,V.metalnessmap,V.fog,V.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ro.meshphysical_vert,fragmentShader:ro.meshphysical_frag},toon:{uniforms:Ii([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.gradientmap,V.fog,V.lights,{emissive:{value:new B(0)}}]),vertexShader:ro.meshtoon_vert,fragmentShader:ro.meshtoon_frag},matcap:{uniforms:Ii([V.common,V.bumpmap,V.normalmap,V.displacementmap,V.fog,{matcap:{value:null}}]),vertexShader:ro.meshmatcap_vert,fragmentShader:ro.meshmatcap_frag},points:{uniforms:Ii([V.points,V.fog]),vertexShader:ro.points_vert,fragmentShader:ro.points_frag},dashed:{uniforms:Ii([V.common,V.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ro.linedashed_vert,fragmentShader:ro.linedashed_frag},depth:{uniforms:Ii([V.common,V.displacementmap]),vertexShader:ro.depth_vert,fragmentShader:ro.depth_frag},normal:{uniforms:Ii([V.common,V.bumpmap,V.normalmap,V.displacementmap,{opacity:{value:1}}]),vertexShader:ro.meshnormal_vert,fragmentShader:ro.meshnormal_frag},sprite:{uniforms:Ii([V.sprite,V.fog]),vertexShader:ro.sprite_vert,fragmentShader:ro.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ro.background_vert,fragmentShader:ro.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:ro.backgroundCube_vert,fragmentShader:ro.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ro.cube_vert,fragmentShader:ro.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ro.equirect_vert,fragmentShader:ro.equirect_frag},distance:{uniforms:Ii([V.common,V.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ro.distance_vert,fragmentShader:ro.distance_frag},shadow:{uniforms:Ii([V.lights,V.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:ro.shadow_vert,fragmentShader:ro.shadow_frag}};io.physical={uniforms:Ii([io.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:ro.meshphysical_vert,fragmentShader:ro.meshphysical_frag};var ao={r:0,b:0,g:0},oo=new sn,so=new zt;so.set(-1,0,0,0,1,0,0,0,1);function co(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ci(new ji(1,1,1),new Ui({name:`BackgroundCubeMaterial`,uniforms:Fi(io.backgroundCube.uniforms),vertexShader:io.backgroundCube.vertexShader,fragmentShader:io.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(oo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(so),l.material.toneMapped=Wt.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ci(new Mi(2,2),new Ui({name:`BackgroundMaterial`,uniforms:Fi(io.background.uniforms),vertexShader:io.background.vertexShader,fragmentShader:io.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ao,zi(e)),n.buffers.color.setClear(ao.r,ao.g,ao.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function lo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function uo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&L(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function po(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Hr,s=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var mo=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Di(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),i=new Ui({name:`CubemapFromEquirect`,uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ci(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new Fa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ho=256,go=3,_o=20,vo=256,yo=16,bo=3,xo=new z,So=new B,Co=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fa(1,10,null),this._boxMesh=new ci(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(So));let h=new Fa(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ho,kt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ho:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wo(e,!1,!1),n=Math.log2(e)-go;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ao()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ko()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Eo(),this._integrationMaterial=Do());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/yo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-bo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(vo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Oo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function wo(e,t,n){return new mo(e,{minFilter:d,generateMipmaps:t,type:y,colorSpace:Ue,depthBuffer:n})}function To(e,t,n){return new Ui({name:e,uniforms:t,vertexShader:ro.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Eo(){return To(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Do(){return To(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Oo(){return To(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_o}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ko(){return To(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ao(){return To(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new mo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Co(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Co(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Mo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&rt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function No(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Tr:wr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Po(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Io(e,t,n){let r=new WeakMap,i=new tn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new an(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Ft(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Lo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ro={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zo(e,t,n,r,i,a){let o=new rn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Rr;u.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let d=new Wi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ci(u,d),p=new Aa(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,b=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<b.length;n++){let r=b[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){b=e,x=b.length>0&&b[0].isRenderPass===!0;let t=o.width,n=o.height;b.length>0&&s===null&&(s=new rn(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new rn(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&b.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Oi(t,n),a===!0&&(l.format=O,l.type=S)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<b.length;e++){let i=b[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&b.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<b.length;i++){let a=b[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Wt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ro[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Bo=new en,Vo=new Oi(1,1),Ho=new ki(1),Uo=new an,Wo=new on,Go=new Di,Ko=[],qo=[],Jo=new Float32Array(16),Yo=new Float32Array(9),Xo=new Float32Array(4);function Zo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ko[i];if(a===void 0&&(a=new Float32Array(i),Ko[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $o(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function es(e,t){let n=qo[t];n===void 0&&(n=new Int32Array(t),qo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ts(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qo(n,t))return;e.uniform2fv(this.addr,t),$o(n,t)}}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qo(n,t))return;e.uniform3fv(this.addr,t),$o(n,t)}}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qo(n,t))return;e.uniform4fv(this.addr,t),$o(n,t)}}function as(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$o(n,t)}else{if(Qo(n,r))return;Xo.set(r),e.uniformMatrix2fv(this.addr,!1,Xo),$o(n,r)}}function os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$o(n,t)}else{if(Qo(n,r))return;Yo.set(r),e.uniformMatrix3fv(this.addr,!1,Yo),$o(n,r)}}function ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$o(n,t)}else{if(Qo(n,r))return;Jo.set(r),e.uniformMatrix4fv(this.addr,!1,Jo),$o(n,r)}}function cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qo(n,t))return;e.uniform2iv(this.addr,t),$o(n,t)}}function us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qo(n,t))return;e.uniform3iv(this.addr,t),$o(n,t)}}function ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qo(n,t))return;e.uniform4iv(this.addr,t),$o(n,t)}}function fs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qo(n,t))return;e.uniform2uiv(this.addr,t),$o(n,t)}}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qo(n,t))return;e.uniform3uiv(this.addr,t),$o(n,t)}}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qo(n,t))return;e.uniform4uiv(this.addr,t),$o(n,t)}}function gs(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function _s(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?gs(Vo):Bo,n.setTexture2D(t||a,i)}function vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Wo,i)}function ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?gs(Ho):Go,n.setTextureCube(t||a,i)}function bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Uo,i)}function xs(e){switch(e){case 5126:return ts;case 35664:return ns;case 35665:return rs;case 35666:return is;case 35674:return as;case 35675:return os;case 35676:return ss;case 5124:case 35670:return cs;case 35667:case 35671:return ls;case 35668:case 35672:return us;case 35669:case 35673:return ds;case 5125:return fs;case 36294:return ps;case 36295:return ms;case 36296:return hs;case 35678:case 36198:case 36298:case 36306:case 35682:return _s;case 35679:case 36299:case 36307:return vs;case 35680:case 36300:case 36308:case 36293:return ys;case 36289:case 36303:case 36311:case 36292:return bs}}function Ss(e,t){e.uniform1fv(this.addr,t)}function Cs(e,t){let n=Zo(t,this.size,2);e.uniform2fv(this.addr,n)}function ws(e,t){let n=Zo(t,this.size,3);e.uniform3fv(this.addr,n)}function Ts(e,t){let n=Zo(t,this.size,4);e.uniform4fv(this.addr,n)}function Es(e,t){let n=Zo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ds(e,t){let n=Zo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Os(e,t){let n=Zo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ks(e,t){e.uniform1iv(this.addr,t)}function As(e,t){e.uniform2iv(this.addr,t)}function js(e,t){e.uniform3iv(this.addr,t)}function Ms(e,t){e.uniform4iv(this.addr,t)}function Ns(e,t){e.uniform1uiv(this.addr,t)}function Ps(e,t){e.uniform2uiv(this.addr,t)}function Fs(e,t){e.uniform3uiv(this.addr,t)}function Is(e,t){e.uniform4uiv(this.addr,t)}function Ls(e,t,n){let r=this.cache,i=t.length,a=es(n,i);Qo(r,a)||(e.uniform1iv(this.addr,a),$o(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gs(Vo):Bo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Rs(e,t,n){let r=this.cache,i=t.length,a=es(n,i);Qo(r,a)||(e.uniform1iv(this.addr,a),$o(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Wo,a[e])}function zs(e,t,n){let r=this.cache,i=t.length,a=es(n,i);Qo(r,a)||(e.uniform1iv(this.addr,a),$o(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?gs(Ho):Go;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Bs(e,t,n){let r=this.cache,i=t.length,a=es(n,i);Qo(r,a)||(e.uniform1iv(this.addr,a),$o(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Uo,a[e])}function Vs(e){switch(e){case 5126:return Ss;case 35664:return Cs;case 35665:return ws;case 35666:return Ts;case 35674:return Es;case 35675:return Ds;case 35676:return Os;case 5124:case 35670:return ks;case 35667:case 35671:return As;case 35668:case 35672:return js;case 35669:case 35673:return Ms;case 5125:return Ns;case 36294:return Ps;case 36295:return Fs;case 36296:return Is;case 35678:case 36198:case 36298:case 36306:case 35682:return Ls;case 35679:case 36299:case 36307:return Rs;case 35680:case 36300:case 36308:case 36293:return zs;case 36289:case 36303:case 36311:case 36292:return Bs}}var Hs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xs(t.type)}},Us=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vs(t.type)}},Ws=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Gs=/(\w+)(\])?(\[|\.)?/g;function Ks(e,t){e.seq.push(t),e.map[t.id]=t}function qs(e,t,n){let r=e.name,i=r.length;for(Gs.lastIndex=0;;){let a=Gs.exec(r),o=Gs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ks(n,l===void 0?new Hs(s,e,t):new Us(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ws(s),Ks(n,e)),n=e}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);qs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ys(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Xs=37297,Zs=0;function Qs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var $s=new zt;function ec(e){Wt._getMatrix($s,Wt.workingColorSpace,e);let t=`mat3( ${$s.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function tc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Qs(e.getShaderSource(t),r)}return i}function nc(e,t){let n=ec(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var rc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ic(e,t){let n=rc[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ac=new z;function oc(){return Wt.getLuminanceCoefficients(ac),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ac.x.toFixed(4)}, ${ac.y.toFixed(4)}, ${ac.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function sc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(uc).join(`
`)}function cc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function lc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function uc(e){return e!==``}function dc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pc=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(e){return e.replace(pc,hc)}function hc(e,t){let n=ro[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return mc(n)}var gc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(e){return e.replace(gc,vc)}function vc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function yc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var bc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function xc(e){return bc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Sc={302:`ENVMAP_MODE_REFRACTION`};function Cc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Sc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Tc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wc[e.combine]||`ENVMAP_BLENDING_NONE`}function Ec(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=xc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Cc(n),d=Tc(n),f=sc(n),p=cc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uc).join(`
`),g.length>0&&(g+=`
`)):(h=[yc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(uc).join(`
`),g=[yc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ro.tonemapping_pars_fragment,n.toneMapping===0?``:ic(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ro.colorspace_pars_fragment,nc(`linearToOutputTexel`,n.outputColorSpace),oc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(uc).join(`
`)),o=mc(o),o=dc(o,n),o=fc(o,n),s=mc(s),s=dc(s,n),s=fc(s,n),o=_c(o),s=_c(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Ys(i,i.VERTEX_SHADER,v),x=Ys(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=tc(i,b,`vertex`),n=tc(i,x,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Js(i,m),w=lc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Xs)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zs++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Dc=0,Oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kc(e),t.set(e,n)),n}},kc=class{constructor(e){this.id=Dc++,this.code=e,this.usedTimes=0}};function Ac(e){return e===1030||e===37490||e===36285}function jc(e,t,n,r,i,a){let o=new vn,s=new Oc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,ee,D,O;if(x){let e=io[x];E=e.vertexShader,ee=e.fragmentShader}else{E=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),D=e.id,O=t.id}let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:ee,defines:i.defines,customVertexShaderID:D,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?F.length-1:null,envMapSize:re?F[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Ac(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:ue&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Wt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=io[t];n=Bi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ec(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Mc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nc),r.length>1&&r.sort(t||Pc),i.length>1&&i.sort(t||Pc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ic(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fc,e.set(t,[i])):n>=r.length?(i=new Fc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new B};break;case`SpotLight`:n={position:new z,direction:new z,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function Rc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zc=0;function Bc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vc(e){let t=new Lc,n=Rc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new sn,o=new sn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=V.LTC_FLOAT_1,r.rectAreaLTC2=V.LTC_FLOAT_2):(r.rectAreaLTC1=V.LTC_HALF_1,r.rectAreaLTC2=V.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hc(e){let t=new Vc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Uc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hc(e),t.set(n,[a])):r>=i.length?(a=new Hc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kc=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],qc=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Jc=new sn,Yc=new z,Xc=new z;function Zc(e,t,n){let r=new wi,i=new Ft,a=new Ft,s=new tn,c=new Ki,u=new qi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Wc,fragmentShader:Gc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Rr;g.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ci(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new rn(i.x,i.y,{format:j,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Oi(i.x,i.y,v),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o}else d.isPointLight?(p.map=new mo(i.x),p.map.depthTexture=new ki(i.x,_)):(p.map=new rn(i.x,i.y),p.map.depthTexture=new Oi(i.x,i.y,_)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,c);let S=p.camera.layers.mask&4294967294?p.camera.layers:c.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Yc),Xc.copy(e.position),Xc.add(Kc[t]),e.up.copy(qc[t]),e.lookAt(Xc),e.updateMatrixWorld(),n.makeTranslation(-Yc.x,-Yc.y,-Yc.z),Jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Jc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,c,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new rn(i.x,i.y,{format:j,type:y}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qc(e,t){function n(){let t=!1,n=new tn,r=null,i=new tn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=at[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,ee=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new tn().fromArray(ie),se=new tn().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){ee!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),ee=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function xe(t){t!==O&&(te&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function Te(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Ee(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function F(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,ee=null,D=null,O=null,k=null,A=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:Be}}function $c(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Ft,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Qe(`canvas`)}function ee(e,t,n){let r=1,i=Be(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?We:Wt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function N(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function re(e){ae(e.target)}function ie(e){oe(e.target)}function ae(e){e.removeEventListener(`dispose`,re),N(e),ce(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function oe(e){e.removeEventListener(`dispose`,ie),N(e),ue(e)}function se(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?oe(t):ae(t))}C.clear(),b.clear()}function ce(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&le(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function le(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ue(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&ae(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let de=0;function fe(){de=0}function pe(){return de}function me(e){de=e}function he(){let e=de;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),de+=1,e}function ge(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function _e(t,r){let i=f.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(i,t,r);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function ve(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?Oe(i,t,r):(t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r))}function ye(t,r){let i=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version?Oe(i,t,r):n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function be(t,r){let i=f.get(t);t.version>0&&i.__version!==t.version?ke(i,t,r):n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let xe={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},Se={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},Ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,xe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,xe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,xe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,Se[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,Se[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Ce[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re),ne(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ge(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&le(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ee(n.start,r.width,4),c=Ee(t.start,r.width,4);n.start<=i+1&&a===c&&Ee(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Oe(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=Te(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){if(n.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=Wt.getPrimaries(Wt.workingColorSpace),i=r.colorSpace===``?null:Wt.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=ee(r.image,!1,p.maxTextureSize);t=I(r,t);let l=m.convert(r.format,r.colorSpace),u=m.convert(r.type),d=j(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);we(a,r);let f,h=r.mipmaps,g=r.isVideoTexture!==!0,_=c.__version===void 0||o===!0,v=s.dataReady,y=M(r,t);if(r.isDepthTexture)d=te(r.format===O,r.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(r.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data);r.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&De(r,t,l,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(f=h[i],r.format!==1023){if(l!==null){if(g){if(v){if(r.layerUpdates.size>0){let t=$a(f.width,f.height,r.format,r.type);for(let a of r.layerUpdates){let r=f.data.subarray(a*t/f.data.BYTES_PER_ELEMENT,(a+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,f.width,f.height,1,l,r)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,f.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,l,u,f.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],r.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data):l===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(r.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(r.layerUpdates.size>0){let i=$a(t.width,t.height,r.format,r.type);for(let a of r.layerUpdates){let r=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data)}else if(r.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let r=t.width,i=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,r,i,0,l,u,null),r>>=1,i>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Be(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,f):n.texImage2D(e.TEXTURE_2D,t,d,l,u,f);r.generateMipmaps=!1}else if(g){if(_){let r=Be(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,l,u,t);D(r)&&r.mipmapsAutoUpdate===!0&&k(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function ke(t,r,i){if(r.image.length!==6)return;let a=Te(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=Wt.getPrimaries(Wt.workingColorSpace),c=r.colorSpace===``?null:Wt.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=ee(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=I(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=j(r.internalFormat,g,_,r.normalized,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=M(r,h);we(e.TEXTURE_CUBE_MAP,r);let C;if(r.isDepthTexture){if(v=te(r.format===O,r.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=Be(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}D(r)&&r.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function Ae(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=j(i.internalFormat,c,l,i.normalized,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Re(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=j(a.internalFormat,o,s,a.normalized,a.colorSpace);F(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let o=f.get(r.depthTexture);o.__renderTarget=r;let s=a?r.depthTexture.image[0]:r.depthTexture.image;o.__webglTexture&&s.width===r.width&&s.height===r.height||(s.width=r.width,s.height=r.height,r.depthTexture.needsUpdate=!0),a?be(r.depthTexture,0):_e(r.depthTexture,0);let c=o.__webglTexture,l=Re(r),u=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,d=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)F(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(r.depthTexture.format===1027)F(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(i)for(let e=0;e<6;e++)Me(r.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(r.__webglFramebuffer[0],t,0):Me(r.__webglFramebuffer,t,0)}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),je(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),je(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,r){let i=f.get(t);n!==void 0&&Ae(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Ne(t)}function Fe(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,ie),ne(t);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&F(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=j(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),je(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),we(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)Ae(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else Ae(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);D(r)?k(e.TEXTURE_CUBE_MAP):r.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),we(c,a),Ae(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,c,0),D(a)&&k(c)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),we(o,r),r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)Ae(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else Ae(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);D(r)?k(o):r.mipmaps.length>0&&e.texParameteri(o,e.TEXTURE_MAX_LEVEL,r.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(D(i)&&i.mipmapsAutoUpdate===!0){let t=A(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),k(t),n.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(s),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(p.maxSamples,e.samples)}function F(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Wt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=he,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=ye,this.setTextureCube=be,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=se}function el(e,t){function n(n,r=``){let i,a=Wt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ai(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ui({vertexShader:tl,fragmentShader:nl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ci(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},il=class extends ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new rl,v={},y=t.getContextAttributes(),b=null,x=null,C=[],w=[],T=new Ft,E=null,k=null,A=new Da;A.viewport=new tn;let j=new Da;j.viewport=new tn;let te=[A,j],M=new Ia,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Ln,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Ln,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Ln,C[e]=t),t.getHandSpace()};function re(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ne=null,N=null,g.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new rn(d.textureWidth,d.textureHeight,{format:ee,type:f,depthTexture:new Oi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new rn(p.framebufferWidth,p.framebufferHeight,{format:ee,type:f,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;oe(M,i);for(let e=0;e<a.length;e++)oe(a[e],i);M.projectionMatrix.copy(A.projectionMatrix),M.projectionMatrixInverse.copy(A.projectionMatrixInverse),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),se(e,M,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null||p!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=te[n];o===void 0&&(o=new Da,o.layers.enable(n),o.viewport=new tn,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ai,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ue=new to;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},al=new sn,ol=new zt;ol.set(-1,0,0,0,1,0,0,0,1);function sl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,zi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(al.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ol),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var ll=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ul=null;function dl(){return ul===null&&(ul=new di(ll,16,16,j,y),ul.name=`DFG_LUT`,ul.minFilter=l,ul.magFilter=l,ul.wrapS=i,ul.wrapT=i,ul.generateMipmaps=!1,ul.needsUpdate=!0),ul}var fl=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=f}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let v=m,C=new Set([M,te,A]),w=new Set([f,_,h,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),ee={textures:[],min:[],max:[],resolution:[]},D=null,O=null,k=[],j=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=He;let ce=0,le=0,ue=null,de=-1,fe=null,pe=new tn,me=new tn,he=null,ge=new B(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new tn(0,0,ve,ye),we=new tn(0,0,ve,ye),Te=!1,Ee=new wi,De=new Ei,Oe=!1,ke=!1,Ae=new sn,je=new z,Me=new tn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return ue===null?be:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,Be,Ve,Ue,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,nt,rt,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,dt,!1),t.addEventListener(`webglcontextrestored`,ft,!1),t.addEventListener(`webglcontextcreationerror`,pt,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),R(`WebGLRenderer: `+e.message),e}function lt(){Le=new Mo(P),Le.init(),ot=new el(P,Le),Re=new fo(P,Le,e,ot),F=new Qc(P,Le),Re.reversedDepthBuffer&&p&&F.buffers.depth.setReversed(!0),ae=P.createFramebuffer(),oe=P.createFramebuffer(),se=P.createFramebuffer(),ze=new Fo(P),I=new Mc,Be=new $c(P,Le,F,I,Re,ot,ze),Ve=new jo(N),Ue=new no(P),st=new lo(P,Ue),We=new No(P,Ue,ze,st),Ge=new Lo(P,We,Ue,st,ze),nt=new Io(P,Re,Be),Ze=new po(I),Ke=new jc(N,Ve,Le,Re,st,Ze),qe=new sl(N,I),Je=new Ic,Xe=new Uc(Le),et=new co(N,Ve,F,Ge,g,s),Qe=new Zc(N,Ge,Re),ct=new cl(P,ze,Re,F),rt=new uo(P,Le,ze),at=new Po(P,Le,ze),ze.programs=Ke.programs,N.capabilities=Re,N.extensions=Le,N.properties=I,N.renderLists=Je,N.shadowMap=Qe,N.state=F,N.info=ze}v!==1009&&(ne=new zo(v,t.width,t.height,o,r,i));let ut=new il(N,P);this.xr=ut,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){ut.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(ue!==null){let t=ue.texture.format;e=C.has(t)}if(e){let e=ue.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),et.dispose(),Je.dispose(),Xe.dispose(),Be.dispose(),I.dispose(),Ve.dispose(),Ge.dispose(),We.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,bt),ut.removeEventListener(`sessionend`,xt),St.stop()};function dt(e){e.preventDefault(),tt(`WebGLRenderer: Context Lost.`),re=!0}function ft(){tt(`WebGLRenderer: Context Restored.`),re=!1;let e=ze.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;lt(),ze.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function pt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){gt(e),I.remove(e)}function gt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),Oe===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),O=Xe.get(n),O.init(t),j.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),ie!==null&&ie.updateLights(O.state.lightsArray),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),Oe===!0&&Ze.setGlobalState(this.clippingPlanes,t),ie!==null&&Qe.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];_t(o,n,t,e),r.add(o)}else _t(i,n,t,e),r.add(i)}}),O=j.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new to;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,ut.setAnimationLoop(e),e===null?St.stop():St.start()},ut.addEventListener(`sessionstart`,bt),ut.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ne!==null&&(ue===null||n)&&ne.begin(N,ue);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,ue),O=Xe.get(e,j.length),O.init(t),O.state.textureUnits=Be.getTextureUnits(),j.push(O),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):Ee.setFromProjectionMatrix(Ae,Ye,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),D=Je.get(e,k.length),D.init(),k.push(D),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,N.sortObjects)}Ct(e,t,0,N.sortObjects),D.finish(),ie!==null&&ie.updateLights(O.state.lightsArray),N.sortObjects===!0&&D.sort(xe,Se),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&et.addToRenderList(D,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ze.beginShadows();let i=O.state.shadowsArray;if(Qe.render(i,e,t),Oe===!0&&Ze.endShadows(),(r&&ne.hasRenderPass())===!1){let n=D.opaque,r=D.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Pe&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(D,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Pe&&et.render(e),wt(D,e,t)}ue!==null&&le===0&&(Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),st.resetDefaultState(),de=-1,fe=null,j.pop(),j.length>0?(O=j[j.length-1],Be.setTextureUnits(O.state.textureUnits),Oe===!0&&Ze.setGlobalState(N.clippingPlanes,O.state.camera)):O=null,k.pop(),D=k.length>0?k[k.length-1]:null,ie!==null&&ie.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&D.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&D.push(e,i,c,n,Me.z,s,t)}}else a.visible&&D.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),Oe===!0&&Ze.setGlobalState(N.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new rn(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(ge),_e=N.getClearAlpha(),_e<1&&N.setClearColor(16777215,.5),N.clear(),Pe&&et.render(n);let u=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),Oe===!0&&Ze.setGlobalState(N.clippingPlanes,r),Et(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(ge,_e),p!==void 0&&(r.viewport=p),N.toneMapping=u}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Ot(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function kt(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Ke.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Mt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Ot(O.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function At(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=kt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Js.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=ue===null?N.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Wt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=O.state.lights;if(Oe===!0&&(ke===!0||e!==fe)){let t=e===fe&&r.id===de;Ze.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Ot(O.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?At(r,t,i,s,h):kt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==de&&(de=r.id,w=!0),C||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(P,`projectionMatrix`,e.projectionMatrix),E.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&E.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(P,i,`bindMatrix`),E.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(P,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(P,i,`batchingTexture`),E.setValue(P,`batchingTexture`,i._matricesTexture,Be),E.setOptional(P,i,`batchingIdTexture`),E.setValue(P,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(P,`batchingColorTexture`,i._colorsTexture,Be));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&nt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=dl()),w){if(E.setValue(P,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Pt(D,T),a&&r.fog===!0&&qe.refreshFogUniforms(D,a),qe.refreshMaterialUniforms(D,r,be,ye,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=ee,t=0;for(let n of O.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;D.probesSH.value=e.textures,D.probesMin.value=e.min,D.probesMax.value=e.max,D.probesResolution.value=e.resolution}Js.upload(P,jt(v),D,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Js.upload(P,jt(v),D,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(P,`center`,i.center),E.setValue(P,`modelViewMatrix`,i.modelViewMatrix),E.setValue(P,`normalMatrix`,i.normalMatrix),E.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,S),ct.bind(n,S)}}return S}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){ue=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=ae),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function It(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=ue===null?null:I.get(ue).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=ue===null?null:I.get(ue).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await it(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,oe),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){ce=0,le=0,ue=null,F.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}},pl=new Aa(-1,1,1,-1,0,1),ml=new class extends Rr{constructor(){super(),this.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Er([0,2,0,0,2,0],2))}},hl=class{constructor(e){this._mesh=new ci(ml,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pl)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},gl=1024,_l=2048,vl=4194304,yl=(e,t,n)=>e+gl+(t+gl)*_l+(n+gl)*vl,bl=new Float32Array(256);for(let e=0;e<256;e++){let t=e/255;bl[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function xl(e,t,n,r=0){let i=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,2147483629)^Math.imul(r|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Sl(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Cl=e=>e<0?0:e>255?255:e|0,wl=new Map;function Tl(e){if(typeof e==`number`)return[e>>16&255,e>>8&255,e&255];let t=wl.get(e);if(!t){let n=parseInt(e.slice(1),16);t=[n>>16&255,n>>8&255,n&255],wl.set(e,t)}return t}function El(e,t){let[n,r,i]=Tl(e);return Cl(n*t)<<16|Cl(r*t)<<8|Cl(i*t)}function Dl(e,t,n){let r=Tl(e),i=Tl(t);return Cl(r[0]+(i[0]-r[0])*n)<<16|Cl(r[1]+(i[1]-r[1])*n)<<8|Cl(r[2]+(i[2]-r[2])*n)}function Ol(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=xl(r,0,i,n),u=xl(r+1,0,i,n),d=xl(r,0,i+1,n),f=xl(r+1,0,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}var kl=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],Al=[[0,0],[1,0],[1,1],[0,1]],jl=[.58,.74,.88,1],H=class{constructor(){this.v=new Map}set(e,t,n,r,i=.06){e=Math.round(e),t=Math.round(t),n=Math.round(n);let[a,o,s]=Tl(r);if(i){let r=1+(xl(e,t,n,11)-.5)*2*i;a=Cl(a*r),o=Cl(o*r),s=Cl(s*r)}this.v.set(yl(e,t,n),a<<16|o<<8|s)}has(e,t,n){return this.v.has(yl(e,t,n))}del(e,t,n){this.v.delete(yl(Math.round(e),Math.round(t),Math.round(n)))}box(e,t,n,r,i,a,o,s=.06){let c=typeof o==`function`;for(let l=e;l<r;l++)for(let e=t;e<i;e++)for(let t=n;t<a;t++){let n=c?o(l,e,t):o;n!=null&&this.set(l,e,t,n,s)}}delBox(e,t,n,r,i,a){for(let o=e;o<r;o++)for(let e=t;e<i;e++)for(let t=n;t<a;t++)this.v.delete(yl(o,e,t))}sphereShell(e,t,n,r,i,a,o=.08,s=1){let c=Math.ceil(r)+1;for(let l=-c;l<=c;l++)for(let u=-c;u<=c;u++)for(let d=-c;d<=c;d++){let c=Math.sqrt(l*l+u/s*(u/s)+d*d);if(c<=r&&c>r-i){let i=e+l,s=t+u,f=n+d,p=a(i,s,f,c/r);p!=null&&this.set(i,s,f,p,o)}}}get size(){return this.v.size}build(e,t=[0,0,0],n=this.v){let r=[],i=[],a=[],o=[],s=(e,t,n)=>this.v.has(e+gl+(t+gl)*_l+(n+gl)*vl),c=[0,0,0,0];for(let[l,u]of n){let n=l%_l-gl,d=Math.floor(l/_l)%_l-gl,f=Math.floor(l/vl)-gl,p=bl[u>>16&255],m=bl[u>>8&255],h=bl[u&255];for(let l=0;l<6;l++){let u=kl[l],[g,_,v]=u.n;if(s(n+g,d+_,f+v))continue;let[y,b,x]=u.t1,[S,C,w]=u.t2,T=+(g>0),E=+(_>0),ee=+(v>0),D=n+g,O=d+_,k=f+v,A=r.length/3;for(let o=0;o<4;o++){let l=Al[o][0],u=Al[o][1],A=l?1:-1,j=u?1:-1,te=+!!s(D+A*y,O+A*b,k+A*x),M=+!!s(D+j*S,O+j*C,k+j*w),ne=+!!s(D+A*y+j*S,O+A*b+j*C,k+A*x+j*w),N=te&&M?0:3-(te+M+ne);c[o]=N;let re=jl[N];r.push((n+T+l*y+u*S-t[0])*e,(d+E+l*b+u*C-t[1])*e,(f+ee+l*x+u*w-t[2])*e),i.push(g,_,v),a.push(p*re,m*re,h*re)}c[0]+c[2]<c[1]+c[3]?o.push(A,A+1,A+3,A+1,A+2,A+3):o.push(A,A+1,A+2,A,A+2,A+3)}}let l=new Rr;return l.setAttribute(`position`,new Er(r,3)),l.setAttribute(`normal`,new Er(i,3)),l.setAttribute(`color`,new Er(a,3)),l.setIndex(new Tr(o,1)),l.computeBoundingSphere(),l.computeBoundingBox(),l}};H.prototype.buildChunks=function(e,t=[0,0,0],n=64){let r=new Map;for(let e of this.v){let t=e[0],i=t%_l-gl,a=Math.floor(t/vl)-gl,o=Math.floor(i/n)*4096+Math.floor(a/n),s=r.get(o);s||r.set(o,s=[]),s.push(e)}return[...r.values()].map(n=>this.build(e,t,n))};var Ml=new Gi({vertexColors:!0});function Nl(e,t,n=[0,0,0],r=Ml,i=!0){let a=new ci(e.build(t,n),r);return a.castShadow=i,a.receiveShadow=!0,a}function Pl(e,t,n=[0,0,0],r=Ml,i=!0,a=64){return e.buildChunks(t,n,a).map(e=>{let t=new ci(e,r);return t.castShadow=i,t.receiveShadow=!0,t})}var Fl=.058,U={skin:15247211,skinD:13667157,skinL:15906940,blush:15374960,hair:4926232,hair2:6437665,brow:3809040,green:[4877104,5666874,4349739],greenD:3624991,cuff:7049029,hat:[5205296,5929527,4480809],hatBand:3097632,hatBrim:[6982202,6455862,7574591],pocket:3426591,leaf:9685082,leafD:7316031,boot:[8145703,7225631,9066288],bootD:5058071,sole:3547667,lace:13214826,gold:15317566,teeth:16315626,mouth:8006186,tongue:14248042},Il=(e,t,n,r,i=0)=>e[Math.floor(xl(t,n,r,i)*e.length)],Ll=(e,t,n)=>Il(U.green,e,t,n,3),Rl=[{key:`skin`,label:`SKIN`},{key:`hair`,label:`HAIR`},{key:`hat`,label:`HAT`},{key:`shirt`,label:`SHIRT`},{key:`overalls`,label:`OVERALLS`},{key:`boots`,label:`BOOTS`}],zl={skin:`tan`,hair:`brown`,hat:`green`,shirt:`red`,overalls:`green`,boots:`brown`},Bl={skin:[{id:`fair`,name:`FAIR`,skin:15976352,skinD:14725258,skinL:16767160,blush:15769744},{id:`tan`,name:`TAN`,skin:15247211,skinD:13667157,skinL:15906940,blush:15374960},{id:`olive`,name:`OLIVE`,skin:12882530,skinD:11040328,skinL:13935988,blush:12876392},{id:`brown`,name:`BROWN`,skin:9263676,skinD:7555120,skinL:10512970,blush:10510416},{id:`deep`,name:`DEEP`,skin:6044202,skinD:4861474,skinL:7227444,blush:8011832}],hair:[{id:`brown`,name:`BROWN`,hair:4926232,hair2:6437665,brow:3809040},{id:`black`,name:`BLACK`,hair:1840143,hair2:2759958,brow:1183244},{id:`blonde`,name:`BLONDE`,hair:15123818,hair2:15783050,brow:9071152},{id:`auburn`,name:`AUBURN`,hair:9058850,hair2:11028528,brow:6038548},{id:`purple`,name:`PURPLE`,hair:5913208,hair2:7228560,brow:3810392}],hat:[{id:`green`,name:`GREEN`,hat:[5205296,5929527,4480809],band:3097632,brim:[6982202,6455862,7574591]},{id:`black`,name:`BLACK`,hat:[2764328,3422258,2237983],band:1711128,brim:[3817016,3027500,4738118]},{id:`tan`,name:`TAN`,hat:[12886890,11570258,13939834],band:7229488,brim:[13939834,12886890,14730378]},{id:`purple`,name:`PURPLE`,hat:[5913976,6966410,4862056],band:3022400,brim:[8019098,6966410,9071786]},{id:`red`,name:`RED`,hat:[9317934,10697272,7611428],band:3806228,brim:[11684420,9317934,12868178]}],shirt:[{id:`red`,name:`RED`,a:11677230,b:8331042,c:3557419,cuff:10101800,cuffD:6953500},{id:`blue`,name:`BLUE`,a:3034762,b:1979487,c:2767400,cuff:3826340,cuffD:1979487},{id:`gold`,name:`GOLD`,a:12882478,b:9070616,c:3815972,cuff:13936714,cuffD:9070616},{id:`purple`,name:`PURPLE`,a:6961802,b:4860004,c:2761784,cuff:8014490,cuffD:4860004},{id:`forest`,name:`FOREST`,a:3107386,b:1985064,c:2371612,cuff:3832392,cuffD:1985064}],overalls:[{id:`green`,name:`GREEN`,green:[4877104,5666874,4349739],greenD:3624991,cuff:7049029,pocket:3426591},{id:`denim`,name:`DENIM`,green:[3822200,4612232,3032168],greenD:2372688,cuff:5927056,pocket:2372688},{id:`brown`,name:`BROWN`,green:[7227952,8149048,6045224],greenD:4074012,cuff:9070664,pocket:4863012},{id:`black`,name:`BLACK`,green:[2895920,3685436,2237990],greenD:1447960,cuff:4870224,pocket:1843232}],boots:[{id:`brown`,name:`BROWN`,boot:[8145703,7225631,9066288],bootD:5058071,sole:3547667,lace:13214826},{id:`black`,name:`BLACK`,boot:[2763306,2236962,3421236],bootD:1315860,sole:1052688,lace:13222576},{id:`red`,name:`RED`,boot:[9055790,7611428,10107448],bootD:4855318,sole:2756624,lace:15786176}]},Vl=11677230,Hl=8331042,Ul=3557419,Wl=10101800,Gl=6953500,Kl={...zl};function ql(e,t,n){let r=e+n,i=(Math.floor(r/2)%3+3)%3,a=(Math.floor(t/2)%3+3)%3;return i===0&&a===0?Ul:i===0||a===0?Hl:Vl}function Jl(e,t){return Bl[e].find(e=>e.id===t)||Bl[e][0]}function Yl(e){let t={...zl};if(!e)return t;for(let{key:n}of Rl)Bl[n].some(t=>t.id===e[n])&&(t[n]=e[n]);return t}function Xl(e){Kl=Yl(e);let t=Jl(`skin`,Kl.skin),n=Jl(`hair`,Kl.hair),r=Jl(`hat`,Kl.hat),i=Jl(`shirt`,Kl.shirt),a=Jl(`overalls`,Kl.overalls),o=Jl(`boots`,Kl.boots);return U.skin=t.skin,U.skinD=t.skinD,U.skinL=t.skinL,U.blush=t.blush,U.hair=n.hair,U.hair2=n.hair2,U.brow=n.brow,U.greenD=a.greenD,U.cuff=a.cuff,U.pocket=a.pocket,U.hatBand=r.band,U.bootD=o.bootD,U.sole=o.sole,U.lace=o.lace,U.green.splice(0,U.green.length,...a.green),U.hat.splice(0,U.hat.length,...r.hat),U.hatBrim.splice(0,U.hatBrim.length,...r.brim),U.boot.splice(0,U.boot.length,...o.boot),Vl=i.a,Hl=i.b,Ul=i.c,Wl=i.cuff,Gl=i.cuffD,{...Kl}}var Zl=[`..XX..`,`X.XX.X`,`XXXXXX`,`.XXXX.`,`..XX..`];function Ql(e){let t=e<0?-6:1,n=t+5,r=new H;r.box(t,9,-2,n,13,3,Ll,.02);let i=e<0?t-1:t,a=e<0?n:n+1;r.box(i,6,-3,a,9,4,(e,t,n)=>t===8?El(U.cuff,.85):U.cuff,.05);let o=(e,t,n)=>Il(U.boot,e,t,n,5);r.box(t,1,-2,n,6,3,o,.03),r.box(i,1,-3,a,5,6,o,.03),r.delBox(i,4,5,a,5,6),r.box(i,1,4,a,4,6,(e,t,n)=>El(Il(U.boot,e,t,n,6),1.14),.03),r.box(i,0,-3,a,1,6,U.sole,.03),r.box(i,1,-3,a,2,-2,U.bootD,.02),r.box(i,1,3,a,2,6,U.bootD,.02);for(let e=1;e<5;e+=2)r.box(i+1,4,e,a-1,5,e+1,U.lace,.02);return r}function $l(){let e=new H;e.box(-6,13,-3,6,25,3,ql,0),e.box(-6,13,-3,6,17,3,Ll,.02),e.box(-4,17,2,4,24,4,Ll,.02),e.box(-4,17,-3,4,20,-2,Ll,.02);for(let t of[-4,2])e.box(t,24,-3,t+2,25,4,U.green[1],.03),e.box(t,20,-3,t+2,24,-2,U.green[1],.03),e.box(t,24,3,t+2,25,4,U.green[1],.03);e.box(-3,17,4,3,22,5,U.pocket,.03);for(let t=0;t<Zl.length;t++)for(let n=0;n<6;n++)Zl[t][n]===`X`&&e.set(n-3,21-t,4,t===0||n===0||n===5?8830798:11066474,.03);return e.box(-4,22,4,-2,24,5,U.gold,.03),e.box(2,22,4,4,24,5,U.gold,.03),e.set(-3,23,5,El(U.gold,1.2),0),e.set(2,23,5,El(U.gold,1.2),0),e.box(-3,25,-3,3,26,3,(e,t,n)=>El(ql(e,t,n),1),0),e.delBox(-2,25,-2,2,26,2),e.delBox(-1,25,2,1,26,3),e.box(-1,24,2,1,25,3,U.skinD,.02),e}function eu(){let e=new H;e.box(-2,24,-2,2,26,2,U.skinD,.03),e.box(-7,26,-6,7,41,6,(e,t,n)=>t===26?U.skinD:U.skin,.025),e.box(-8,29,-1,-7,34,3,U.skinD,.02),e.box(7,29,-1,8,34,3,U.skinD,.02),e.box(-8,30,0,-7,33,2,El(U.skinD,.85),0),e.box(7,30,0,8,33,2,El(U.skinD,.85),0),e.box(-6,28,5,-4,31,6,U.blush,.03),e.box(4,28,5,6,31,6,U.blush,.03),e.box(-7,28,-6,7,36,-3,(e,t,n)=>Il([U.hair,U.hair2],e,t,n,7),.05),e.box(-7,31,-6,-5,38,2,(e,t,n)=>Il([U.hair,U.hair2],e,t,n,8),.05),e.box(5,31,-6,7,38,2,(e,t,n)=>Il([U.hair,U.hair2],e,t,n,9),.05),e.box(-7,36,-6,7,41,6,(e,t,n)=>Il([U.hair,U.hair2],e,t,n,10),.05),e.box(-7,35,2,7,36,6,(e,t,n)=>Il([U.hair,U.hair2],e,t,n,12),.05);for(let t of[-7,-4,-3,0,3,6])e.box(t,34,3,t+1,35,6,U.hair,.05);e.box(-1,30,6,1,32,7,U.skinD,.03),e.set(-1,30,6,El(U.skinD,.9),0),e.set(0,30,6,El(U.skinD,.9),0);let t=t=>{for(let n=0;n<4;n++){e.set(t+n,33,5,2760984,0);let r=n===0||n===3;e.set(t+n,32,5,r?16645624:n===1?3115578:2783797,0),e.set(t+n,31,5,r?15790312:n===1?4037959:3510338,0)}};t(-5),t(1),e.set(-4,32,5,1320463,0),e.set(2,32,5,1320463,0),e.set(-4,32,6,16777215,0),e.set(2,32,6,16777215,0),e.delBox(-4,32,6,-3,33,7),e.delBox(2,32,6,3,33,7);let n=[34,35,35,35,34];for(let t=0;t<5;t++)e.set(-5+t,n[t],6,U.brow,.03),e.set(1+t,n[4-t],6,U.brow,.03),e.set(-5+t,34,6,U.brow,.03),e.set(1+t,34,6,U.brow,.03);let r=[];for(let e=-4;e<4;e++)r.push([e,28]);for(let e=-3;e<3;e++)r.push([e,27]);r.push([-4,29],[3,29]);for(let[t,n]of r)e.del(t,n,5),e.set(t,n,4,U.skinD,0);let i=6956068;for(let t=-3;t<3;t++)e.set(t,28,4,U.teeth,0);e.set(-4,28,4,i,0),e.set(3,28,4,i,0),e.set(-4,29,4,i,0),e.set(3,29,4,i,0),e.set(-3,27,4,i,0),e.set(2,27,4,i,0);for(let t=-2;t<2;t++)e.set(t,27,4,U.tongue,0);return e.set(-1,27,4,El(U.tongue,1.1),0),e.set(0,27,4,El(U.tongue,1.1),0),tu(e),e}function tu(e){let t=(e,t)=>Il(U.hatBrim,e,0,t,21);for(let n=-12;n<=11;n++)for(let r=-12;r<=11;r++){let i=Math.hypot(n+.5,r+.5),a=r>=0?10.4:11.4;i>a||(i>a-2.5?(e.set(n,39,r,El(t(n,r),.62),.03),e.set(n,40,r,t(n,r),.03)):(e.set(n,40,r,El(t(n,r),.8),.03),e.set(n,41,r,t(n,r),.03)))}let n=[8.3,8.3,8.3,8.1,7.7,7.1,6.1,4.8],r=(e,t,r)=>{let i=n[t-41];return Math.abs(e+.5)**3+Math.abs(r+.5)**3<=i**3};for(let t=41;t<=48;t++)for(let n=-9;n<=8;n++)for(let i=-9;i<=8;i++){if(!r(n,t,i))continue;let a=!r(n+1,t,i)||!r(n-1,t,i)||!r(n,t,i+1)||!r(n,t,i-1)||t===48,o;o=t<=42?El(U.hatBand,.92+xl(n,t,i,2)*.2):Il(U.hat,n,t,i,31),t>=47&&a&&(o=El(o,1.12)),e.set(n,t,i,o,.03)}let i=[`...XX...`,`X..XX..X`,`XX.XX.XX`,`.XXXXXX.`,`..XXXX..`,`...XX...`];for(let t=0;t<i.length;t++){let n=47-t;for(let a=0;a<8;a++){if(i[t][a]!==`X`)continue;let o=a-4,s=9;for(;s>-9&&!r(o,n,s);)s--;e.set(o,n,s+1,t===5?U.leafD:a===0||a===7||t===0?10802538:12117628,.03)}}}function nu(e){let t=new H,n=e<0?-10:6,r=n+4,i=e<0?n-1:n,a=e<0?r:r+1;t.box(n,20,-2,r,25,2,ql,0),t.box(i,17,-3,a,20,3,(e,t,n)=>t===17?Gl:Wl,.05),t.box(n,13,-2,r,17,2,U.skin,.025),t.box(i,9,-2,a,13,3,U.skin,.025),t.box(i,9,2,a,13,3,(e,t)=>t%2==0?U.skinD:U.skin,.02),t.box(i,9,-2,a,10,3,U.skinD,.02);let o=e<0?a-1:i;return t.box(o,11,3,o+1,13,4,U.skinL,.02),t}function ru(){let e=new H;return e.box(6,8,4,12,14,10,5211832,.04),e.box(6,13,4,12,14,10,7644884,.03),e.box(8,12,10,10,13,14,5211832,.03),e.box(8,13,12,10,14,16,5211832,.03),e.box(8,14,15,10,15,17,10142952,.03),e.box(11,14,5,12,17,9,4091546,.03),e}function iu(e){Xl(e);let t=new Fn,n=new Fn;t.add(n);let r=Fl,i=(e,t,n,i=[0,0,0],a=!0)=>{let o=new Fn;o.position.set((t[0]-i[0])*r,(t[1]-i[1])*r,(t[2]-i[2])*r);let s=Nl(e,r,t,void 0,a);return o.add(s),o.userData.mesh=s,o.userData.pivot=t,n.add(o),o};function a(e,t){let n=e.userData.mesh;n&&(e.remove(n),n.geometry.dispose());let i=Nl(t,r,e.userData.pivot);e.add(i),e.userData.mesh=i}let o=[0,13,0],s=i(Ql(-1),[-3.5,13,0],n),c=i(Ql(1),[3.5,13,0],n),l=i($l(),o,n),u=i(eu(),[0,25,0],l,o),d=i(nu(-1),[-8,24,0],l,o),f=i(nu(1),[8,24,0],l,o),p=Nl(ru(),r,[8,24,0]);p.visible=!1,f.add(p);let m={phase:0,action:0,actionKind:`none`,blend:0,idle:0,lookT:0};function h(e){m.action=1,m.actionKind=e,p.visible=e===`water`}function g(e){return Xl(e),a(s,Ql(-1)),a(c,Ql(1)),a(l,$l()),a(u,eu()),a(d,nu(-1)),a(f,nu(1)),{...Kl}}function _(e,t){m.idle+=e,m.phase+=e*(5+t*5),m.blend+=(t-m.blend)*Math.min(1,e*12);let i=m.blend,a=Math.sin(m.phase)*.75*i;s.rotation.x=a,c.rotation.x=-a,d.rotation.x=-a*.9,f.rotation.x=a*.9,d.rotation.z=-.1,f.rotation.z=.1;let o=Math.abs(Math.cos(m.phase))*.045*i,h=Math.sin(m.idle*2.2)*.012*(1-i);if(l.position.y=13*r+o+h,l.rotation.x=.08*i,l.rotation.y=Math.sin(m.phase)*.09*i,u.rotation.x=-.04*i+Math.sin(m.idle*1.3)*.015,u.rotation.y=-l.rotation.y*.6,n.position.y=0,n.scale.set(1,1,1),m.action>0){m.action=Math.max(0,m.action-e/.75);let t=1-m.action,n=Math.sin(Math.min(1,t)*Math.PI);if(m.actionKind===`water`)f.rotation.x=-1.35*n+f.rotation.x*(1-n),f.rotation.z=.1*(1-n),p.rotation.x=.5*n,l.rotation.x+=.12*n;else{let e=n;l.rotation.x+=.45*e,l.position.y-=.16*e,s.rotation.x=-.5*e,c.rotation.x=-.5*e,u.rotation.x=-.3*e,d.rotation.x=-1.2*e+d.rotation.x*(1-e),f.rotation.x=-1.2*e+f.rotation.x*(1-e)}m.action===0&&(p.visible=!1)}}return{root:t,rig:n,update:_,playAction:h,head:u,torso:l,setLook:g,getLook:()=>({...Kl})}}var au={bd:{id:`bd`,name:`BLUE DREAM`,short:`BD`,kind:`HYBRID`,weeks:9,flower:1,veg:1,stature:1,frost:1,seed:0,bud:[9225035,6134319,12050544],leafDark:2845226,leafLight:6270526,stem:4160046,stemD:3500074},gdp:{id:`gdp`,name:`GRANDDADDY PURPLE`,short:`GDP`,kind:`INDICA`,weeks:9,flower:1,veg:1,stature:1,frost:1.1,seed:2,bud:[10321094,7098266,13019624],leafDark:3811925,leafLight:7164044,stem:4864552,stemD:3812386},gc:{id:`gc`,name:`GREEN CRACK`,short:`GC`,kind:`SATIVA`,weeks:8,flower:8/9,veg:1.15,stature:.96,frost:1.15,seed:4,bud:[9428538,5154840,13956458],leafDark:1993252,leafLight:8311882,stem:3963436,stemD:3039780,hair:{cream:16179888,orange:15759384,amber:13784336}},gg:{id:`gg`,name:`GORILLA GLUE #4`,short:`GG4`,kind:`INDICA`,weeks:9.5,flower:9.5/9,veg:1.05,stature:1.04,frost:1.7,seed:6,bud:[7244348,4479016,11057258],leafDark:2373142,leafLight:5932084,stem:4864040,stemD:3812382,hair:{cream:15258288,orange:12868130,amber:10699798}},lis:{id:`lis`,name:`LONG ISLAND SKUNK`,short:`LIS`,kind:`HYBRID`,weeks:9,flower:1,veg:1,stature:1.05,frost:1.05,seed:8,bud:[3108402,1920548,5939290],leafDark:1591328,leafLight:4099134,stem:3828266,stemD:2905120,hair:{cream:15782048,orange:13912096,amber:11546648}},uw:{id:`uw`,name:`UW PURPLE`,short:`UW`,kind:`INDICA`,weeks:8,flower:8/9,veg:.9,stature:.9,frost:1.25,seed:10,bud:[8011432,4857976,13672680],leafDark:2775602,leafLight:8018088,stem:4863016,stemD:3811358,hair:{cream:15784128,orange:12871728,amber:11030560}},bb:{id:`bb`,name:`DJ SHORT BLUEBERRY`,short:`BB`,kind:`INDICA`,weeks:7.5,flower:7.5/9,veg:.85,stature:.92,frost:1.3,seed:12,bud:[6973640,3815544,11580654],leafDark:3291240,leafLight:6972068,stem:5913186,stemD:4466760,hair:{cream:15786192,orange:13660224,amber:11554864}}},ou=[`bd`,`gdp`,`gc`,`gg`,`lis`,`uw`,`bb`],su={bd:10,gdp:10,gc:4,gg:4,lis:4,uw:4,bb:4};function W(e){return e&&au[e]?au[e]:typeof e==`number`?au[ou[Math.abs(e)%ou.length]]:au.bd}function cu(e,t){let n=W(e);return t===2?n.veg||1:t>=3&&n.flower||1}function lu(){return{...su}}function uu(e){return ou.reduce((t,n)=>t+(e?.[n]|0||0),0)}var du=[...ou],fu=0;function pu(e,t){let n=n=>Math.round(((e>>>n&255)+(t>>>n&255))/2);return n(16)<<16|n(8)<<8|n(0)}function mu(e){if(!e||typeof e!=`object`)return null;let t=String(e.id||``);if(!/^hyb\d+$/.test(t))return null;let n=Array.isArray(e.parents)?e.parents.slice(0,2).map(e=>au[e]?e:`bd`):[`bd`,`gdp`],r=W(n[0]),i=W(n[1]),a=Number(t.slice(3))||1,o=(t,n=1)=>{let a=Number(e[t]);return Number.isFinite(a)?Math.max(.65,Math.min(1.8,a)):(r[t]+i[t])/2||n},s={id:t,name:String(e.name||`${r.name} × ${i.name}`).slice(0,64),short:String(e.short||`${r.short.slice(0,2)}×${i.short.slice(0,2)}`).slice(0,8),kind:`HYBRID`,weeks:Number(e.weeks)||(r.weeks+i.weeks)/2,flower:o(`flower`),veg:o(`veg`),stature:o(`stature`),frost:o(`frost`),seed:Number.isFinite(Number(e.seed))?Number(e.seed):(r.seed+i.seed)/2,bud:((t,n)=>{let r=e[t];return Array.isArray(r)&&r.length>=3?r.slice(0,3).map(e=>Number(e)>>>0):n})(`bud`,r.bud.map((e,t)=>pu(e,i.bud[t]))),leafDark:Number(e.leafDark)>>>0||pu(r.leafDark,i.leafDark),leafLight:Number(e.leafLight)>>>0||pu(r.leafLight,i.leafLight),stem:Number(e.stem)>>>0||pu(r.stem,i.stem),stemD:Number(e.stemD)>>>0||pu(r.stemD,i.stemD),parents:n,hybrid:!0};return e.hair&&typeof e.hair==`object`&&(s.hair={...e.hair}),au[t]=s,ou.includes(t)||ou.push(t),fu=Math.max(fu,a),s}function hu(e,t){let n=W(e),r=W(t);if(n.id===r.id)return null;let i=`hyb${++fu}`,a=e=>(Number(n[e])+Number(r[e]))/2,o=n.hair||r.hair;return mu({id:i,parents:[n.id,r.id],name:`${n.name} × ${r.name}`,short:`${n.short.slice(0,2)}×${r.short.slice(0,2)}`,weeks:(n.weeks+r.weeks)/2,flower:a(`flower`),veg:a(`veg`),stature:a(`stature`),frost:a(`frost`),seed:a(`seed`),bud:n.bud.map((e,t)=>pu(e,r.bud[t])),leafDark:pu(n.leafDark,r.leafDark),leafLight:pu(n.leafLight,r.leafLight),stem:pu(n.stem,r.stem),stemD:pu(n.stemD,r.stemD),...o?{hair:{...o}}:{}})}function gu(){return ou.filter(e=>au[e]?.hybrid).map(e=>{let{hybrid:t,...n}=au[e];return{...n,parents:[...n.parents],bud:[...n.bud],...n.hair?{hair:{...n.hair}}:{}}})}function _u(){for(let e of ou.filter(e=>!du.includes(e)))delete au[e];ou.splice(0,ou.length,...du),fu=0}var vu=.05,yu=1.5,bu=.06/yu,G=1.55,xu=1,Su={1:[{a:0,l:1}],3:[{a:-.7,l:.68},{a:0,l:1},{a:.7,l:.68}],5:[{a:-1.22,l:.44},{a:-.62,l:.74},{a:0,l:1},{a:.62,l:.74},{a:1.22,l:.44}],7:[{a:-1.62,l:.34},{a:-1.12,l:.54},{a:-.56,l:.78},{a:0,l:1},{a:.56,l:.78},{a:1.12,l:.54},{a:1.62,l:.34}],9:[{a:-1.86,l:.26},{a:-1.46,l:.4},{a:-1.04,l:.58},{a:-.52,l:.8},{a:0,l:1},{a:.52,l:.8},{a:1.04,l:.58},{a:1.46,l:.4},{a:1.86,l:.26}]},Cu=16052192,wu=14907424,Tu=12867092,Eu=16251886,Du=13939034;function Ou(e,t,n,r,i,a=.02){if(xu!==1){let o=xu/2-1e-6,s=t*xu,c=n*xu,l=r*xu;if(c<-o||c>180||Math.abs(s)>150||Math.abs(l)>150)return;for(let t=Math.ceil(s-o);t<=Math.floor(s+o);t++)for(let n=Math.ceil(c-o);n<=Math.floor(c+o);n++)for(let r=Math.ceil(l-o);r<=Math.floor(l+o);r++)n>=0&&e.set(t,n,r,i,a);return}let o=Math.round(n);if(o<0||o>96)return;let s=Math.round(t),c=Math.round(r);Math.abs(s)>64||Math.abs(c)>64||e.set(s,o,c,i,a)}function ku(e,t,n,r,i,a=.02){n<0||e.set(t,n,r,i,a)}function Au(e,t,n,r,i,a=.02){xu===1?Ou(e,t,n,r,i,a):ku(e,Math.round(t*xu),Math.round(n*xu),Math.round(r*xu),i,a)}function ju(e,t,n,r,i){let a=Dl(n,15391140,i?.2:.4);if(xu!==1){let o=Math.round(t*xu);for(let t=0;t<=o;t++){let s=t/o;if(ku(e,0,t,0,t%3==0?n:a,.02),i&&((s<.9||t%2==0)&&(ku(e,1,t,0,t%4<2?r:n,.02),ku(e,-1,t,0,n,.02),ku(e,0,t,1,t%4<2?n:r,.02),ku(e,0,t,-1,r,.02)),s<.12))for(let[n,i]of[[1,1],[-1,-1],[1,-1],[-1,1]])ku(e,n,t,i,r,.02)}}else{for(let o=0;o<=t;o++)Ou(e,0,o,0,a,.02),i&&(Ou(e,1,o,0,r,.02),Ou(e,-1,o,0,n,.02),Ou(e,0,o,1,o%2==0?r:n,.02),Ou(e,0,o,-1,o%2==0?n:r,.02),t>18&&o%2==0&&(Ou(e,1,o,1,r,.02),Ou(e,-1,o,-1,El(n,.88),.02)));Ou(e,1,0,0,r,.02),Ou(e,-1,0,0,r,.02),Ou(e,0,0,1,r,.02),Ou(e,0,0,-1,r,.02)}}function Mu(e,t,n,r,i,a,o,s,c,l){let u=Math.cos(i),d=Math.sin(i),f=-d,p=u,m=Math.max(4,a),h=xu!==1,g=h?xu*1:1,_=h?xu*.72:1,v=(m>=18?1.5:m>=12?1.55:m>=7?1.4:1.25)*g,y=Dl(s,15201956,.55),b=Dl(o,s,.42),x=h?m*xu:m,S=h?t*xu:t,C=h?n*xu:n,w=h?r*xu:r,T=Math.ceil(x+v+2),E=Math.round(S),ee=Math.round(w),D=Math.max(1.15,m*.11)*(h?xu:1),O=h?.62:.7,k=h?.8:.55,A=3.05*_,j=(t,n,r,i,a)=>{if(h){let o=Math.round(n);o>=0&&e.set(Math.round(t),o,Math.round(r),i,a)}else Ou(e,t,n,r,i,a)};for(let e=E-T;e<=E+T;e++)for(let t=ee-T;t<=ee+T;t++){let n=(e-S)*u+(t-w)*d,r=(e-S)*f+(t-w)*p;if(n<.15||n>x+.35)continue;let i=Math.min(1,n/x),a=Math.sin(Math.PI*i**.7)*v,s=(n%A+A)%A,m=s/A,g=i>.9?Math.max(.42,a*.32):a*(.12+.88*m);if(a<.2||Math.abs(r)>g)continue;let _=C+Math.sin(i*Math.PI)*D*.62-c*i*i*D-Math.min(.9*(h?1.4:1),Math.abs(r)*.42),T=Math.abs(r)<=O,E=Math.abs(r)>=g-k,ee=!T&&s<A*.4&&Math.abs(r)>.5&&i>.14&&i<.86,te=T?y:E?o:ee?Dl(y,b,.4):b;l&&i>.58&&(te=Dl(te,Du,(i-.58)/.42)),j(e,_,t,te,.012),T&&i>.08&&i<.9&&j(e,_+1,t,y,.01)}let te=C-c*D;j(S+u*(x+.9),te,w+d*(x+.9),l?Du:o,.01)}function Nu(e,t,n,r,i,a,o,s,c,l,u,d){let f=Math.cos(i),p=Math.sin(i),m=Math.max(2,Math.round(a*.4)),h=Dl(u,l,.62),g=-p,_=f,v=xu===1?1:xu*1.6,y=Math.max(2,Math.round(m*v)),b=n;for(let i=1;i<=y;i++){let o=i/y*m;b=n+Math.sin(o/m*Math.PI)*Math.max(.85,a*.13)+o*.06,Au(e,t+f*o,b,r+p*o,o>=m-.01?l:h,.02),a>8&&(xu===1||i%2==0)&&Au(e,t+f*o+g*.7,b,r+p*o+_*.7,h,.02)}let x=t+f*m,S=r+p*m;for(let t of Su[o]||Su[5])Mu(e,x,b,S,i+t.a,Math.max(3,a*t.l),c,l,s+Math.abs(t.a)*.32,d)}function Pu(e,t,n,r,i,a,o,s,c){Nu(e,0,t,0,n,r,i,a,o,s,c,!1),Nu(e,0,t,0,n+Math.PI,r*.96,i,a,o,s,c,!1)}function Fu(e,t,n,r,i,a,o,s,c){let l=Math.cos(i),u=Math.sin(i),d=Math.max(2,Math.round(a)),f=xu===1?1:xu*1.6,p=Math.round(d*f),m=t,h=n,g=r;for(let i=1;i<=p;i++){let a=i/p;m=t+l*d*a,h=n+o*a,g=r+u*d*a,Au(e,m,h,g,s,.02),(xu===1||i%2==0)&&Au(e,m,h-(xu===1?1:.5),g,c,.02)}return{x:m,y:h,z:g}}function Iu(e){let t;return t=e<.18?.55+e/.18*.45:e<.5?1:(1-(e-.5)/.5)**.8,Math.max(.28,t)}function Lu(e,t,n,r,i,a,o,s){let c=s?.cream??Cu,l=s?.orange??wu,u=s?.amber??Tu,d=a>.72?l:a>.32?Dl(c,l,(a-.32)/.4):c,f=o?2:3,p=o?1:a>.55?1.15:1.45,m=xu===1?1:xu*1.4,h=Math.max(1,Math.round(f*m)),g=i;for(let i=1;i<=h;i++){let s=i/h*f;g+=(o?.22:a>.65?.4:.12)/m;let l=o?.4:a>.7?.28:.48,_=i===h&&a>.78?u:i>h*.5?d:Dl(c,d,.5);Au(e,t+Math.cos(g)*s*p,n+s*l,r+Math.sin(g)*s*p,_,0)}}function Ru(e,t,n,r,i,a,o,s){let c=Math.cos(i),l=Math.sin(i),u=-l,d=c,f=s()<o;Ou(e,t,n,r,a[0],.03),Ou(e,t+u,n+.4,r+d,a[1],.03),Ou(e,t-u,n+.35,r-d,a[1],.03),Ou(e,t+c,n+.8,r+l,a[0],.03),Ou(e,t+c*1.5+u*.65,n+1.2,r+l*1.5+d*.65,a[2],.02),Ou(e,t+c*1.5-u*.65,n+1.1,r+l*1.5-d*.65,a[0],.02),Ou(e,t+c*1.7,n+1.45,r+l*1.7,a[0],.02);let p=t+c*2.35,m=n+2.05,h=r+l*2.35;return Ou(e,p,m,h,f?Dl(a[2],Eu,.88):a[2],.02),{x:p,y:m,z:h}}function zu(e,t,n,r,i,a,o,s,c){let l=Math.max(4,Math.round(i));for(let i=0;i<l;i++){let u=i/(l-1),d=Math.max(.75,a*Iu(u)),f=t+(c.leanX||0)*u*3,p=n+i,m=r+(c.leanZ||0)*u*3,h=Math.ceil(d);for(let t=-h;t<=h;t++)for(let n=-h;n<=h;n++){let r=Math.hypot(t,n);if(r>d)continue;let a=r>d-.95,l=a?o[2]:(t+i+n)%4==0?o[1]:o[0];a&&s()<c.frost&&(l=Dl(o[2],Eu,.8)),Ou(e,f+t,p,m+n,l,.03)}}let u=Math.max(5,Math.round(l*.7));for(let i=0;i<u;i++){let d=(i+.35)/u,f=n+d*(l-1),p=i*2.513+(c.spin||0),m=Math.max(1.1,a*Iu(d)*.85),h=Ru(e,t+(c.leanX||0)*d*3+Math.cos(p)*m,f,r+(c.leanZ||0)*d*3+Math.sin(p)*m,p,o,c.frost||0,s),g=c.pistil??1;g>.2&&Lu(e,h.x,h.y,h.z,p+.5,c.late,!!c.shortHair,c.hair),g>.45&&Lu(e,h.x,h.y,h.z,p-.5,c.late,!!c.shortHair,c.hair)}if(c.crown!==!1)for(let i=0;i<5;i++)Lu(e,t,n+l-1,r,i*1.256+(c.spin||0),c.late,!!c.shortHair,c.hair);let d=c.sugarLen||5,f=c.sugars|0;for(let i=0;i<f;i++){let o=(i+.4)/f,s=n+1+o*(l-3),u=i*2.513+(c.spin||0),p=Math.max(1,a*Iu(o)*.65);Mu(e,t+Math.cos(u)*p,s,r+Math.sin(u)*p,u,d,c.leafD,c.leafL,.28+o*.25,!!c.fade)}}function Bu(e,t,n,r,i,a=0){let o=xu,s=Math.cos(t),c=Math.sin(t),l=-c,u=s,d=Dl(9618508,13482837,a),f=Dl(11983980,15392668,a),p=Dl(6265398,10127924,a),m=Dl(13953944,16116912,a),h=r*o;for(let t=0;t<=h;t++){let r=t/h,a=Math.sin(Math.PI*Math.max(.04,r)**.7)*(h*.64),g=(n+i*r)*o-Math.sin(r*Math.PI)*0,_=1.2*o+t,v=Math.ceil(a);for(let t=-v;t<=v;t++){if(Math.abs(t)>a+.05)continue;let n=s*_+l*t,i=c*_+u*t,o=Math.abs(t)>a-.9,h=Math.abs(t)<.6,v=Math.round(g+(o?.6:0));ku(e,Math.round(n),v,Math.round(i),o?p:h?m:d,.02),ku(e,Math.round(n),v-1,Math.round(i),o?p:El(d,.86),.02),r>.2&&r<.88&&!o&&ku(e,Math.round(n),v+1,Math.round(i),f,.015)}}}function Vu(e,t,n,r){let i=Math.cos(t),a=Math.sin(t),o=-a,s=i;for(let t=0;t<2;t++){let c=r+t*.8,l=.7+t*.45;Ou(e,i*c+o*l,n+.9,a*c+s*l,t===0?9069124:3811615,.02),Ou(e,i*c-o*l,n+.45,a*c-s*l,7031604,.02)}}function Hu(e,t,n,r){if(xu!==1)for(let i=0;i<8;i++){let a=i/8*Math.PI*2+.4;ku(e,Math.round(Math.cos(a)*2.1),Math.round(t*xu),Math.round(Math.sin(a)*2.1),i%2?r:n,.02)}else for(let i=0;i<6;i++){let a=i/6*Math.PI*2+.4;Ou(e,Math.cos(a)*2.15,t,Math.sin(a)*2.15,i%2?r:n,.02)}}function Uu(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=Fu(e,Math.cos(n)*1.25,t+.4,Math.sin(n)*1.25,n,r,i,s,c);return Nu(e,p.x,p.y,p.z,n,u,l,d,a,o,s,f),p}function Wu(e,t,n,r,i,a,o,s){let c=xu,l=Math.max(1.35,i)*c,u=Math.round(t*c),d=Math.round(n*c),f=Math.round(r*c),p=-Math.max(1,Math.round(l*.42)),m=Math.max(2,Math.round(l*.72));for(let t=p;t<=m;t++){let n=t/(l*.85),r=l*Math.sqrt(Math.max(0,1-n*n)),i=Math.ceil(r);for(let n=-i;n<=i;n++)for(let l=-i;l<=i;l++){let i=Math.hypot(n,l);if(i>r)continue;let p=i>r-.85*(c>1?1.2:1),m=p?a[2]:(n+t+l)%3==0?a[1]:a[0];p&&o()<s&&(m=Dl(a[2],Eu,.62)),ku(e,u+n,d+t,f+l,m,.03)}}}function Gu(e){return e<.3?.76+e/.3*.24:1-.62*((e-.3)/.7)**1.15}function Ku(e,t,n,r,i,a,o,s,c,l,u,d){let f=Math.hypot(i,a,o)||1;i/=f,a/=f,o/=f;let p=-o,m=i,h=Math.hypot(p,m)||1;p/=h,m/=h;let g=Math.max(2,s|0),_=Math.max(2.1,c*.82);for(let s=0;s<g;s++){let f=g===1?0:s/(g-1),h=c*Gu(f),v=s*2.15+(d.spin||0),y=c*.2,b=t+i*s*_+Math.cos(v)*p*y,x=n+a*s*_,S=r+o*s*_+Math.sin(v)*m*y;if(Wu(e,b,x,S,h,l,u,d.frost||0),h>1.6)for(let t=0;t<2;t++){let n=v+t*Math.PI+.8,r=h*.58;Wu(e,b+Math.cos(n)*h*.78,x-h*.12,S+Math.sin(n)*h*.78,r,l,u,d.frost||0)}let C=d.hairs??4;for(let t=0;t<C;t++){let n=v+t/C*Math.PI*2;Lu(e,b+Math.cos(n)*h*.7,x+h*.25,S+Math.sin(n)*h*.7,n,d.late,!0,d.hair)}d.leafD!=null&&(s%2==0||h>2)&&Mu(e,b+Math.cos(v+.6)*h*.6,x+.4,S+Math.sin(v+.6)*h*.6,v+.6,(d.sugarLen||4)*(.8+.4*(1-f)),d.leafD,d.leafL,.3,!!d.fade)}Wu(e,t+i*g*_,n+a*g*_,r+o*g*_,Math.max(1.4,c*.34),l,u,d.frost||0)}function qu(e,t,n,r){let i=r?Dl(6965796,t.stem,.2):Dl(t.stem,14149544,.16),a=r?3811348:t.stemD,o=t.leafDark,s=t.leafLight,c=[15251530,12093480,15914346],l=t.bud.map((e,t)=>Dl(e,c[t],r?.14:.04)),u=r?.88:.05,d=(r?.08:.02)*(t.frost||1),f=r?{cream:15983280,orange:14455872,amber:12085306}:t.hair||{cream:16052706,orange:16249830,amber:15200460},p=r?[{y:8,fan:18,fingers:9,droop:.5,arms:4,reach:14,rise:6,buds:6,girth:3.15},{y:15,fan:16,fingers:9,droop:.36,arms:4,reach:11,rise:6,buds:5,girth:2.9},{y:22,fan:13,fingers:7,droop:.22,arms:4,reach:8,rise:5,buds:5,girth:2.65},{y:28,fan:10,fingers:5,droop:.12,arms:4,reach:6,rise:4,buds:4,girth:2.4},{y:33,fan:7,fingers:5,droop:.06,arms:0}]:[{y:7,fan:13,fingers:9,droop:.5,arms:4,reach:8,rise:4,buds:5,girth:2.55},{y:13,fan:11,fingers:7,droop:.28,arms:4,reach:6,rise:4,buds:4,girth:2.35},{y:19,fan:8,fingers:5,droop:.12,arms:4,reach:5,rise:3,buds:4,girth:2.15},{y:24,fan:6,fingers:5,droop:.04,arms:0}],m=p[p.length-1].y;ju(e,m+(r?18:8),i,a,!0);for(let t=0;t<=7;t++){let n=2.35-t*.16;for(let r=0;r<8;r++){let o=r/8*Math.PI*2+.2;Ou(e,Math.cos(o)*n,t,Math.sin(o)*n,r%2?a:i,.02)}}let h=(t,i,a,c,p,m)=>{Ku(e,t,i,a,Math.cos(m)*.38,.92,Math.sin(m)*.38,c,p,l,n,{frost:d,late:u,hair:f,hairs:r?4:1,spin:m,leafD:o,leafL:s,sugarLen:r?4.4:3.2,fade:r})},g=.22+t.seed%5*.18;for(let t of p){if(Hu(e,t.y,i,a),Pu(e,t.y,g,t.fan,t.fingers,t.droop,o,s,i),t.fan>=11&&Pu(e,t.y+1,g+Math.PI/4,t.fan*.72,t.fingers,t.droop+.08,o,s,i),r&&t.fan>=16&&Pu(e,t.y+2,g+Math.PI/8,t.fan*.62,5,t.droop+.16,o,s,i),t.arms)for(let n=0;n<t.arms;n++){let r=g+.4+n*Math.PI*2/t.arms,c=Fu(e,Math.cos(r)*1.6,t.y+.5,Math.sin(r)*1.6,r,t.reach,t.rise,i,a);Nu(e,Math.cos(r)*(1.6+t.reach*.42),t.y+.5+t.rise*.42,Math.sin(r)*(1.6+t.reach*.42),r+.6,Math.max(5,t.fan*.5),t.fan>11?7:5,t.droop+.12,o,s,i,!1),h(c.x,c.y+.6,c.z,t.buds,t.girth,r)}g+=Math.PI/2}Ku(e,0,r?20:15,0,0,1,0,r?11:9,r?3.45:2.7,l,n,{frost:d,late:u,hair:f,hairs:r?5:1,spin:.4,leafD:o,leafL:s,sugarLen:r?5.2:3.4,fade:r})}function Ju(e,t,n,r){qu(e,n,r,t===4)}function Yu(e,t){let n=t.stem,r=t.stemD,i=t.leafDark,a=t.leafLight;ju(e,21*G,n,r,!0);let o=[{y:3*G,fingers:5,size:9*G,droop:.6,ax:4*G},{y:6.5*G,fingers:7,size:12*G,droop:.42,ax:3.4*G},{y:10*G,fingers:9,size:13*G,droop:.3,ax:2.6*G},{y:13.5*G,fingers:9,size:12*G,droop:.2,ax:0},{y:17*G,fingers:7,size:9.5*G,droop:.1,ax:0},{y:19.6*G,fingers:5,size:7*G,droop:.06,ax:0}],s=.2+t.seed%5*.18;for(let t of o){Hu(e,t.y,n,r);let o=t.y<8*G?Dl(a,i,.3):a;if(Pu(e,t.y,s,t.size,t.fingers,t.droop,i,o,n),t.ax)for(let o of[0,Math.PI])Uu(e,t.y,s+o+1.2,t.ax,t.ax*.6,i,a,n,r,5,Math.max(6,t.size*.55),.42,!1);s+=Math.PI/2+.18}Pu(e,21.4*G,s,4.6*G,3,-.5,i,a,n),Nu(e,0,22*G,0,s+Math.PI/2,3.4*G,3,-.8,i,a,n,!1)}function Xu(e,t){let n=Dl(14151342,t.leafLight,.28),r=El(n,.78),i=t.leafDark,a=t.leafLight;ju(e,12*G,n,r,!1),Bu(e,.12,2.3*G,4.4*G,1.1*G,.16),Bu(e,Math.PI+.04,2.3*G,3.5*G,.8*G,.26),Hu(e,6*G,n,r),Nu(e,0,6*G,0,Math.PI/2,9*G,1,.25,i,a,n,!1),Nu(e,0,6*G,0,-Math.PI/2,8*G,1,.3,i,a,n,!1),Hu(e,9*G,n,r),Pu(e,9.2*G,.06,10*G,3,-.1,i,a,n),Pu(e,12*G,Math.PI/2,4*G,1,-1.35,i,a,n)}function Zu(e,t){let n=Dl(15201988,t.leafLight,.12);for(let t=0;t<=6*G;t++)Ou(e,t>4*G?(t-4*G)*.8:0,t,0,t<2*G?Dl(n,13154424,.4):n,.02);Bu(e,.16,4.5*G,4.2*G,3.5*G,.04),Bu(e,Math.PI-.06,4.5*G,3.3*G,2.8*G,.12),Nu(e,.3*G,6.1*G,0,Math.PI/2,6.4*G,1,-.3,t.leafDark,t.leafLight,n,!1),Nu(e,.3*G,6.1*G,0,-Math.PI/2,5.3*G,1,-.15,t.leafDark,t.leafLight,n,!1),Vu(e,.16,7.4*G,4.8*G)}function Qu(e,t){let n=W(t),r=Sl(e*977+n.seed*131+7),i=new H;xu=yu;try{e<=0?Zu(i,n):e===1?Xu(i,n):e===2?Yu(i,n):Ju(i,e,n,r)}finally{xu=1}return i}function $u(e){let t=W(e),n=new H,r=t.seed*.85;for(let e=-8;e<=8;e++){let i=(e- -8)/16,a;a=i<.28?Math.sqrt(Math.max(0,1-((.28-i)/.28)**2)):Math.cos((i-.28)/.72*Math.PI/2)**.62;let o=5.4*a,s=3.15*a;for(let i=Math.floor(-o-.2);i<=Math.ceil(o+.2);i++)for(let a=Math.floor(-s-.2);a<=Math.ceil(s+.2);a++){if(o<.45||s<.45)continue;let c=i/o,l=a/s;if(c*c+l*l>1)continue;let u=a>=s*.35,d=Math.sin(e*.72+r),f=d>.38,p=!f&&d>.12,m=u?14468258:10910802;p&&(m=u?9267268:6965810),f&&(m=3811615),!f&&xl(e,a,i,t.seed+5)>.93&&(m=2365458),u&&!f&&a>s*.55&&i<0&&(m=15786694),n.set(e,a,i,m,.03)}if(i>.14&&i<.9&&o>1.2){let t=Math.round(o);n.set(e,1,t,2365458,.02),n.set(e,2,t+1,12886136,.02)}}return n.set(9,0,0,2759700,.02),n.set(-8,-1,0,4864040,.02),n.set(-7,-1,0,6047286,.02),n}function ed(e){let t=W(e),n=new H,r=Sl(99+t.seed*17);zu(n,0,0,0,7,2.15,t.bud,r,{stem:Dl(6983474,t.stem,.45),late:.92,pistil:.85,frost:.34*(t.frost||1),sugars:0,sugarLen:2,fade:!1,shortHair:!0,leafD:t.leafDark,leafL:t.leafLight,hair:t.hair||null,spin:.5});for(let e=8;e<=12;e++)Ou(n,0,e,0,13220234,.02);return n}var td={n:4,cost:16},nd={mother:80,tube:70,vegWest:140,vegCenter:140,bed:80},rd={A:4,AA:6,AAA:9,AAAA:14};function id(){let e=new H,t=e=>{let t=Math.cos(e),n=Math.sin(e),r=3902719,i=11619327;return t>=0?Dl(n>=0?r:i,3073748,t):Dl(6957286,n>=0?r:i,Math.abs(n)*.85)};for(let n=-17;n<=17;n++)for(let r=-17;r<=17;r++){let i=Math.hypot(n,r);if(i>16.4||i<13.3)continue;let a=t(Math.atan2(n,r));e.set(n,r,-1,Dl(a,2363482,.4),.02),e.set(n,r,0,a,.015)}let n=[[5,7,5],[7,5,5],[7,2,2],[2,7,5],[7,5,7],[6,5,3],[7,4,7],[5,7,2],[3,5,6],[7,1,7]];for(let r=0;r<16;r++){let i=r/16*Math.PI*2,a=14.75,o=Math.sin(i)*a,s=Math.cos(i)*a,c=Math.cos(i),l=-Math.sin(i),u=Math.sin(i),d=Math.cos(i),f=n[r%n.length],p=Dl(8058602,t(i),.22);f.forEach((t,n)=>{for(let r=0;r<3;r++){if(!(t&1<<2-r))continue;let i=(r-1)*1.15,a=(1-n)*1.15,f=Math.round(o+c*i+u*a),m=Math.round(s+l*i+d*a);Math.hypot(f,m)<12.9||e.set(f,m,1,p,0)}})}let r=(t,n,r)=>{for(let i=0;i<=2;i++)e.set(t,n,i,i===2?r:Dl(r,879400,.5),.012)},i=(e,t,n)=>{let i=Math.sin(e),a=Math.cos(e),o=Math.cos(e),s=-Math.sin(e);for(let e=0;e<=t;e+=.25){let c=e/t;if(e<1.8){r(Math.round(i*e),Math.round(a*e)-2,3129157);continue}let l=Math.sin(Math.PI*((e-1.2)/(t-1.2))**.85)*n*(Math.floor(e*1.6)%2==0?.45:1);for(let t=-Math.ceil(l);t<=Math.ceil(l);t++){if(Math.abs(t)>l+.05)continue;let n=Math.round(i*e+o*t),u=Math.round(a*e+s*t)-2,d=t===0,f=Math.abs(t)>=l-.45;r(n,u,d?11989098:c>.86?8317020:f?1407536:3129160)}}};[[0,11.4,1.55],[.72,9.4,1.35],[-.72,9.4,1.35],[1.28,7.3,1.15],[-1.28,7.3,1.15],[1.9,5.1,.95],[-1.9,5.1,.95]].forEach(([e,t,n])=>i(e,t,n));for(let e=-8;e<=0;e++)r(0,e,e<-5?4641365:4050764);return e}var ad={x:30,z:0,hx:7,hz:5.5},od={half:16.45,back:-23.2,front:-14.4,walkX:15.6,walkZ:-22.45},sd={y:3.62,x0:-16.15,x1:16.15,zFront:-14.5,zBack:-23.05},cd={x0:-16.02,x1:-14.22,z0:-19.15,z1:-15.05,y0:.75,y1:sd.y},ld=[{id:`bd`,name:`BLUE DREAM`,detail:`4 SEEDS · HYBRID · 9 WK`,cost:12,kind:`seed`,strain:`bd`,n:4},{id:`gdp`,name:`GRANDDADDY PURPLE`,detail:`4 SEEDS · INDICA · 9 WK`,cost:12,kind:`seed`,strain:`gdp`,n:4},{id:`gc`,name:`GREEN CRACK`,detail:`4 SEEDS · SATIVA · 8 WK`,cost:12,kind:`seed`,strain:`gc`,n:4},{id:`gg`,name:`GORILLA GLUE #4`,detail:`4 SEEDS · INDICA · 9.5 WK`,cost:14,kind:`seed`,strain:`gg`,n:4},{id:`lis`,name:`LONG ISLAND SKUNK`,detail:`4 SEEDS · HYBRID · 9 WK`,cost:12,kind:`seed`,strain:`lis`,n:4},{id:`uw`,name:`UW PURPLE`,detail:`4 SEEDS · INDICA · 8 WK`,cost:12,kind:`seed`,strain:`uw`,n:4},{id:`bb`,name:`DJ SHORT BLUEBERRY`,detail:`4 SEEDS · INDICA · 7.5 WK`,cost:14,kind:`seed`,strain:`bb`,n:4},{id:`feed`,name:`NUTRIENTS`,detail:`FEEDS MOTHERS AND VEG`,cost:8,kind:`nutrient`,n:1},{id:`cubes`,name:`ROOT CUBES`,detail:`2 CUBES, SPEEDS TUBES`,cost:10,kind:`cube`,n:2}];function ud(e){let t=(e-cd.z0)/(cd.z1-cd.z0),n=Math.min(1,Math.max(0,t));return cd.y0+(cd.y1-cd.y0)*n}function dd(e,t,n=null){return e>cd.x0+.14&&e<cd.x1-.14&&t>=cd.z0-.08&&t<=cd.z1+.06?n==null||Math.abs(n-ud(t))<.9:!1}function fd(e,t){return e<=sd.x0+.12||e>=sd.x1-.12||t>=sd.zFront-.05||t<=sd.zBack+.08?!1:!dd(e,t)}var pd={M:[`10001`,`11011`,`10101`,`10001`,`10001`,`10001`,`10001`],O:[`01110`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],T:[`11111`,`00100`,`00100`,`00100`,`00100`,`00100`,`00100`],A:[`01110`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],B:[`11110`,`10001`,`10001`,`11110`,`10001`,`10001`,`11110`],P:[`11110`,`10001`,`10001`,`11110`,`10000`,`10000`,`10000`],H:[`10001`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],E:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`11111`],R:[`11110`,`10001`,`10001`,`11110`,`10100`,`10010`,`10001`],C:[`01111`,`10000`,`10000`,`10000`,`10000`,`10000`,`01111`],L:[`10000`,`10000`,`10000`,`10000`,`10000`,`10000`,`11111`],N:[`10001`,`11001`,`10101`,`10011`,`10001`,`10001`,`10001`],V:[`10001`,`10001`,`10001`,`10001`,`01010`,`01010`,`00100`],G:[`01111`,`10000`,`10000`,`10111`,`10001`,`10001`,`01111`],W:[`10001`,`10001`,`10001`,`10101`,`10101`,`01010`,`01010`],U:[`10001`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],S:[`01111`,`10000`,`10000`,`01110`,`00001`,`00001`,`11110`],D:[`11110`,`10001`,`10001`,`10001`,`10001`,`10001`,`11110`],F:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`10000`],Y:[`10001`,`10001`,`01010`,`00100`,`00100`,`00100`,`00100`],5:[`11111`,`10000`,`11110`,`00001`,`00001`,`10001`,`01110`],2:[`01110`,`10001`,`00001`,`00010`,`00100`,`01000`,`11111`],0:[`01110`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`]," ":[`000`,`000`,`000`,`000`,`000`,`000`,`000`]};function md(e,t,n,r,i,a,o=0,s,c=!0){let l=Nl(t,n,[0,0,0],s,c);return l.position.set(r,i,a),l.rotation.y=o,e.add(l),l}function hd(e,t){let n=0;for(let r of e)n+=((pd[r]||pd[` `])[0].length+1)*t;return{w:n-t,h:7*t}}function gd(e,t,n,r,i,a,o){let{w:s,h:c}=hd(t,a),l=Math.round(n-s/2),u=Math.round(r-c/2);for(let n of t){let t=pd[n]||pd[` `];for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++)if(t[n][r]===`1`)for(let t=0;t<a;t++)for(let s=0;s<a;s++)e.set(l+r*a+s,i,u+n*a+t,o,.02);l+=(t[0].length+1)*a}}function _d(e,t,n,r,i,a,o){let{w:s,h:c}=hd(t,a),l=Math.round(n-s/2),u=Math.round(r+c/2);for(let n of t){let t=pd[n]||pd[` `];for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++)if(t[n][r]===`1`)for(let t=0;t<a;t++)for(let s=0;s<a;s++)e.set(l+r*a+s,u-n*a-t,i,o,.02);l+=(t[0].length+1)*a}}function vd(){let e=new H;return e.box(0,0,-1,18,26,1,(e,t)=>e%5==0?5913893:xl(e,t,1,9)>.5?8017462:7162928,.03),e.box(3,2,1,8,11,2,9267268,.03),e.box(10,2,1,16,11,2,9267268,.03),e.box(3,13,1,8,23,2,9267268,.03),e.box(10,13,1,16,23,2,9267268,.03),e.box(14,11,1,16,15,3,15317566,.02),e}function yd(e){let t=new H,n=e?7:5,r=e?9:7;return t.box(-n-3,0,-n-3,n+3,2,n+3,7224108,.03),t.box(-n-2,2,-n-2,n+2,3,n+2,9063992,.03),t.box(-n,2,-n,n,r,n,(e,t)=>t%3==0?12082228:12739898,.05),t.box(-n-1,r,-n-1,n+1,r+2,n+1,13792586,.04),t.box(-n+1,r+2,-n+1,n-1,r+3,n-1,4928548,.05),t}function bd(){let e=new H;return e.box(-1,0,0,2,10,2,6045744,.03),e.box(-6,8,1,7,12,4,2892824,.02),e.box(-5,9,3,6,11,6,16774084,.01),e}function xd(){let e=new H;return e.box(-2,0,-2,2,4,2,3817542,.03),e.box(-1,4,-1,1,30,1,4871248,.03),e.box(-12,28,-3,12,32,3,2366484,.02),e.box(-10,29,2,10,31,5,16774864,.01),e}function Sd(){let e=new H;return e.box(-4,0,-3,4,6,4,4034410,.03),e.box(-2,6,-2,2,8,2,3112778,.02),e.box(3,3,0,9,5,2,3112778,.02),e.box(-6,4,-1,-3,8,1,2382902,.02),e}function Cd(){let e=new H;return e.box(-3,0,-3,-1,6,-1,6045744,.03),e.box(1,0,-3,3,6,-1,6045744,.03),e.box(-3,0,1,-1,6,3,6045744,.03),e.box(1,0,1,3,6,3,6045744,.03),e.box(-4,6,-4,4,8,4,7229488,.02),e.box(-4,8,-4,4,16,-2,7229488,.02),e}function wd(){let e=new H;return e.box(-12,0,-3,12,2,3,7029800,.03),e.box(-12,10,-3,12,12,3,7029800,.03),e.box(-12,20,-3,12,22,3,7029800,.03),kd(e,-10,2,-2),e.box(-3,2,-2,3,7,2,15317566,.02),e.box(4,2,-2,10,8,2,3829416,.02),e.box(-8,12,-2,-1,18,2,13038954,.02),e.box(1,12,-2,8,17,2,11745842,.02),e}var Td=4,Ed=22;function Dd(e,t,n,r){e.box(t-2,n,r-2,t+3,n+3,r+3,6983493,.02),e.delBox(t-1,n+1,r-1,t+2,n+3,r+2)}function Od(){let e=new H;return Dd(e,0,0,0),e}function kd(e,t,n,r){e.box(t,n,r,t+6,n+6,r+4,4034410,.02),e.box(t+2,n+6,r+1,t+4,n+8,r+3,3112778,.02)}function Ad(){let e=new H;return kd(e,0,0,0),e}function jd(){let e=new H;return e.box(-8,0,-7,8,2,7,3817542,.03),e.box(-9,2,-8,9,12,8,2765110,.03),e.box(-7,8,-6,7,11,6,4114112,.01),e.box(-8,12,-7,8,14,7,1844264,.02),e.delBox(-6,12,-5,6,14,5),e.box(-6,11,-5,6,12,5,8317151,.01),e.box(3,14,-3,8,20,3,5068382,.03),e.box(4,17,-1,7,19,2,9685082,.01),e.box(8,9,-2,16,12,2,14015446,.02),e}function Md(){let e=new H,t=[];for(let e=0;e<Td;e++)t.push(Math.round(-33+e*Ed));for(let n=-44;n<44;n++){for(let r=0;r<=8;r++)for(let i=-4;i<=4;i++){let a=r-4,o=Math.hypot(a,i);if(o>4.15||o<2.55)continue;let s=t.reduce((e,t)=>Math.min(e,Math.abs(n-t)),99);a>1.4&&Math.abs(i)<=1&&s<3||e.set(n,r,i,i>1?16251639:13686481,.02)}e.set(n,2,0,4114112,0),e.set(n,2,1,2199434,0)}e.box(-45,1,-3,-42,7,4,12962758,.02),e.box(42,1,-3,45,7,4,12962758,.02);for(let n of t)e.box(n-3,7,-3,n+4,10,4,1845528,.03),Dd(e,n,9,0);for(let t of[-36,-2,34])e.box(t,-5,-1,t+2,1,2,9278360,.03);return{model:e,centers:t}}function Nd(){let e=new H;return e.box(-12,0,-6,12,8,7,6045744,.03),e.box(-14,8,-7,14,10,8,12886122,.02),e.box(-7,10,-6,7,22,-3,1448980,.02),e.box(-6,11,-3,6,21,-2,10354538,.01),e.box(-1,10,-3,1,12,-1,2763306,.02),e.box(-6,10,1,6,11,5,2368548,.02),e.box(8,10,-5,13,20,1,2896696,.02),e.box(9,15,1,12,17,2,8257386,.01),e}function Pd(){let e=new H,t=e=>Math.round(e*16),n=t(cd.x0),r=t(cd.x1);for(let i=0;i<11;i++){let a=i/11,o=(i+1)/11,s=t(cd.z0+(cd.z1-cd.z0)*a),c=t(cd.z0+(cd.z1-cd.z0)*o),l=t(cd.y0+(cd.y1-cd.y0)*o),u=Math.max(t(.7),l-4);e.box(n+2,u,s,r-2,l,c,i%2?13807738:12093784,.03)}let i=(n,r)=>{e.box(n,t(cd.y0+.15),t(cd.z0),n+3,t(cd.y1+.85),t(r),15985884,.02),e.box(n,t(cd.y1+.85),t(cd.z0),n+3,t(cd.y1+1.05),t(r),16774879,.02)};return i(n,cd.z1),i(r-3,-16.25),e}function Fd(e,t,n){let r=new H,i=e=>Math.round(e*16),a=15195332,o=(e,t,n)=>t<16?7230520:t>46&&t<50?13351058:xl(e,t,n,2)>.9?El(a,.93):a,s=od.back-.05,c=-od.half+.1,l=od.half-.1,u=-5.48,d=5.32,f=(e,t,n)=>{r.box(i(e),8,i(s+.15),i(t),12,i(-14.2),(e,t,r)=>Math.floor(r/4)%2==0?n:El(n,.9),.04)};f(c,u,4152372),f(u,d,14015956),f(d,l,12884578);let p=(e,t,n,a)=>r.box(i(e),12,i(t),i(n),i(3.34),i(a),o,.03);p(c,od.back-.2,l,s),p(-od.half-.05,od.back-.2,c,-14.25),p(l,od.back-.2,od.half+.05,-14.25);let m=e=>{p(e,s,e+.28,-19.7),p(e,-17.3,e+.28,-14.4),r.box(i(e),i(2.7),i(s),i(e+.28),i(2.95),i(-14.4),3097632,.02),r.box(i(e)-2,12,i(-19.78),i(e+.28)+2,i(2.5),i(-19.52),9267268,.02),r.box(i(e)-2,12,i(-17.48),i(e+.28)+2,i(2.5),i(-17.22),9267268,.02)};m(u),m(d),_d(r,`MOTHER`,i(-11),36,i(s)-1,2,15984560),_d(r,`CLONE`,i(0),36,i(s)-1,2,1334890),_d(r,`VEG`,i(11),36,i(s)-1,2,15984560),r.box(i(9.6),12,i(-20.3),i(12.4),13,i(-19.6),3817528,.02),md(e,r,1/16,0,0,0);for(let t of[-14.6,.1,14.4])md(e,bd(),1/16,t,1.55,-22.55);md(e,xd(),1/16,6.35,.75,-16.35),md(e,Sd(),1/16,-6.4,.75,-16.55);let h=e=>t.push(e);h({x0:c,x1:l,z0:od.back-.25,z1:s}),h({x0:-od.half-.1,x1:c,z0:od.back-.2,z1:-14.3}),h({x0:l,x1:od.half+.1,z0:od.back-.2,z1:-14.3}),h({x0:c,x1:-1.2,z0:-14.48,z1:-13.92}),h({x0:1.2,x1:l,z0:-14.48,z1:-13.92});for(let e of[u,d])h({x0:e,x1:e+.28,z0:s,z1:-19.7,floor:0}),h({x0:e,x1:e+.28,z0:-17.3,z1:-14.4,floor:0});let g=new Fn;g.add(Nl(vd(),1/8)),g.position.set(-9/8,.75,-13.9),e.add(g);let _=yd(!0),v=yd(!1);md(e,jd(),1/16,-3.85,.75,-20.2),h({x0:-4.45,x1:-3.15,z0:-20.75,z1:-19.6});let y=[{x:-13.7,z:-21.55},{x:-8.15,z:-21.55}].map((t,n)=>{md(e,_,1/14,t.x,.75,t.z);let r=Nl(Qu(0,`bd`),bu);return r.position.set(t.x,1.53,t.z),r.scale.setScalar(.55),r.visible=!1,r.castShadow=!0,e.add(r),{...t,state:`empty`,strain:null,stage:0,prog:0,water:1,cool:0,plant:r,locked:n===0}}),b=Md(),x=b.model.build(1/16),S=[-21.35,-19.15].flatMap((t,n)=>{let r=new ci(x,Ml);return r.position.set(.35,1.0625,t),r.castShadow=!0,e.add(r),b.centers.map(r=>{let i=.35+r/16,a=Nl(Qu(0,`bd`),bu);return a.position.set(i,1.7825,t),a.scale.setScalar(.48),a.visible=!1,a.castShadow=!0,e.add(a),{x:i,z:t,state:`empty`,t:0,strain:null,plant:a,locked:n===0}})}),C=[[8.15,-21.55],[13.7,-21.55],[8.15,-18.85],[13.7,-18.85]].map(([t,n])=>Id(e,v,t,n,.75));md(e,Pd(),1/16,0,0,0),h({x0:cd.x0-.02,x1:cd.x0+.18,z0:cd.z0,z1:cd.z1}),h({x0:cd.x1-.18,x1:cd.x1+.02,z0:cd.z0,z1:-16.25}),h({x0:cd.x0+.18,x1:cd.x1-.18,z0:-16.9,z1:cd.z1,floor:0});let w=Ld(e,h);return C.push(...w.veg),{roof:n.roof,facade:n.facade,door:g,open:!1,doorBlock:{x0:-1.15,x1:1.2,z0:-14.25,z1:-13.72},mothers:y,trays:S,veg:C,upper:w.upper,computer:w.computer,breeder:w.breeder,loftY:sd.y,mother2:!1,tube2:!1,vegWest:!1,vegCenter:!1,onStair:dd,onLoft:fd,stairHeight:ud,contains(e,t){return e>-od.half+.4&&e<od.half-.4&&t<-14.25&&t>od.back+.32}}}function Id(e,t,n,r,i){md(e,t,1/15,n,i,r);let a=Nl(Qu(2,`bd`),bu);return a.position.set(n,i+.62,r),a.scale.setScalar(.78),a.visible=!1,a.castShadow=!0,e.add(a),{x:n,z:r,y:i,up:i>2,state:`empty`,t:0,strain:null,plant:a}}function Ld(e,t){let n=new Fn;n.visible=!1,e.add(n);let r=new H,i=e=>Math.round(e*16),a=i(3.36),o=i(sd.y),s=i(sd.x0),c=i(sd.x1),l=i(sd.zBack),u=i(sd.zFront),d=i(-5.48),f=i(5.32);r.box(s,a,l,c,o,u,(e,t,n)=>{if(t===a)return 14997696;let r=(Math.floor(e/8)+Math.floor(n/8))%2;return e<f?r?12884578:11896912:Math.floor(e/4)%2?9267781:11043672},.04),r.delBox(i(cd.x0-.04),a-2,i(cd.z0),i(cd.x1+.04),o+2,i(cd.z1+.05));let p=o+i(2.2),m=(e,t,n)=>t<o+4?7230520:t>p-6?13351058:xl(e,t,n,2)>.9?El(15195332,.93):15195332,h=i(-19.7),g=i(-17.3),_=e=>{r.box(e,o,l,e+4,p,h,m,.03),r.box(e,o,g,e+4,p,u,m,.03),r.box(e,p-4,h,e+4,p,g,3097632,.02),r.box(e-2,o,h-3,e+6,o+i(1.7),h,9267268,.02),r.box(e-2,o,g,e+6,o+i(1.7),g+3,9267268,.02)};_(d),_(f);let v=(e,t,n,i)=>r.box(e,o,t,n,p,i,m,.03);v(s,l,c,l+5),v(s,l,s+5,u),v(c-5,l,c,u),v(s,u-5,c,u),gd(r,`VEG`,i(-10.4),i(-16.15),o,2,15984560),gd(r,`BREED`,i(0),i(-16.15),o,2,13038954),gd(r,`SHOP`,i(11.2),i(-16.15),o,2,13038954),r.box(i(9.2),o,i(-17.6),i(14.2),o+1,i(-15.7),3829416,.02),md(n,r,1/16,0,0,0);let y=yd(!1),b=[[-13.2,-21.7],[-8.5,-21.7],[-13.2,-20.05],[-8.5,-20.05],[-2.6,-21.55],[2.6,-21.55],[-2.6,-18.85],[2.6,-18.85]].map(([e,t])=>{let r=Id(n,y,e,t,sd.y);return r.room=e<-5.4?`west`:`center`,r});md(n,xd(),1/16,-6.3,sd.y,-16.45),md(n,xd(),1/16,4.4,sd.y,-16.45);for(let e of[-14.8,-.2,14.2])md(n,bd(),1/16,e,sd.y+.85,-22.4);let x={x:11.6,z:-20.15,floorY:sd.y};md(n,Nd(),1/16,x.x,sd.y,-21.35);let S={x:0,z:-16.25,floorY:sd.y},C=new H;C.box(-20,0,-8,20,13,8,(e,t)=>t%4==0?7229488:9068086,.03),C.box(-22,13,-10,22,16,10,3887424,.02),C.box(-12,16,-7,12,25,-5,2374453,.02),C.box(-10,18,-4,10,23,-3,8837300,.01),C.box(-3,16,0,3,19,5,13038954,.02),_d(C,`DNA`,0,34,9,1,13038954),md(n,C,1/16,S.x,sd.y,-16.25),md(n,Cd(),1/16,13.5,sd.y,-19.85),md(n,wd(),1/16,14.55,sd.y,-18.15);let w=e=>t({...e,floor:1});w({x0:cd.x0-.05,x1:cd.x1+.05,z0:cd.z0-.45,z1:cd.z0+.08});for(let e of[-5.48,5.32])w({x0:e,x1:e+.28,z0:sd.zBack,z1:-19.7}),w({x0:e,x1:e+.28,z0:-17.3,z1:sd.zFront});return w({x0:10.5,x1:13.4,z0:-22.6,z1:-20.75}),w({x0:13.7,x1:15.45,z0:-18.85,z1:-17.45}),{upper:n,computer:x,breeder:S,veg:b}}function Rd(){let e=new H;return e.box(-12,0,-7,12,14,7,(e,t)=>t%4==0?7229488:9068086,.04),e.box(-13,14,-8,13,16,8,14135410,.03),e.box(-12,0,-7,-9,30,-4,15985884,.02),e.box(9,0,-7,12,30,-4,15985884,.02),e.box(-14,28,-9,14,31,8,3112778,.03),e.box(-14,31,-9,14,33,-6,4168280,.02),e.box(-9,17,6,9,26,8,1913624,.02),_d(e,`MOTA`,0,21,8,1,15984560),e.box(-2,16,2,2,17,6,15317566,.02),e}function zd(){let e=new H;return e.box(-3,0,-2,1,20,2,8016432,.04),e.box(18,0,-2,22,20,2,8016432,.04),e.box(-6,16,-1,26,46,3,(e,t)=>t<18||t>44||e<-4||e>24?6111012:3097632,.02),_d(e,`WAREHOUSE`,10,38,3,1,15984560),_d(e,`520 MOTA`,10,26,3,1,16770666),e}function Bd(){let e=new H;return e.box(-1,0,1,2,24,38,(e,t,n)=>t%5==0?7229488:xl(e,t,n,4)>.5?9068086:8082735,.04),e.box(-2,4,2,3,7,36,13213802,.03),e.box(-2,14,2,3,17,36,13213802,.03),e.box(0,9,30,3,13,34,15317566,.02),e}function Vd(){let e=new H;return e.box(-1,0,1,2,32,32,(e,t)=>t%3==0?12963027:9345443,.03),e.box(-2,14,14,3,20,20,15317566,.02),e}function Hd(){let e=new H,t=new H,n=new H,r=ad.hx*12,i=ad.hz*12,a=(e,t,n)=>t%5==0?6713466:(Math.floor(e/6)+Math.floor(n/6))%2==0?9147550:8029326;e.box(-r+2,0,-i+2,r-2,2,i-2,(e,t,n)=>(e+n)%8==0?9343896:10725549,.03);let o=(e,t,n)=>t>6&&t<10?3112778:a(e,t,n);e.box(-r,0,-i,-r+3,48,i,o,.03),e.box(r-3,0,-i,r,48,i,o,.03),e.box(-r,0,-i,r,48,-i+3,o,.03),e.box(-r,0,i-3,r,48,i,o,.03),e.delBox(-r-1,0,-16,-r+4,32,16),e.delBox(-r-1,18,24,-r+4,34,46),e.delBox(-r-1,18,-46,-r+4,34,-24),e.delBox(-20,18,i-4,20,34,i+1),n.box(-r+1,18,24,-r+2,34,46,12969974,.01),n.box(-r+1,18,-46,-r+2,34,-24,12969974,.01),n.box(-20,18,i-2,20,34,i-1,12969974,.01);for(let t of[-38,0,38])e.box(-50,2,t-9,44,6,t+9,4871248,.03);_d(e,`WAREHOUSE`,0,30,i,2,15984560),t.box(-r-3,47,-i-3,r+3,50,i+3,3818576,.03),t.box(-r-1,50,-3,r+1,53,3,3112778,.02);for(let e=-r;e<=r;e+=18)t.box(e,44,-i,e+2,48,i,2897216,.02);let s=new H;for(let e of[-38,0,38])s.box(-46,37,e-1,40,40,e+2,16777215,0);let c=new H;return c.box(-80,14,22,-77,24,28,2896428,.02),c.box(-77,17,24,-76,21,26,15196884,.01),{shell:e,roof:t,glass:n,bulbs:s,sw:c}}function Ud(){let e=new H;return e.box(-28,0,0,28,12,2,1913624,.02),_d(e,`FOR SALE`,0,6,2,1,16770666),e}function Wd(e,t){let n=Hd();md(e,n.shell,1/12,ad.x,0,ad.z);let r=md(e,n.roof,1/12,ad.x,0,ad.z),i=new Gi({vertexColors:!0,transparent:!0,opacity:.32,depthWrite:!1}),a=md(e,n.glass,1/12,ad.x,0,ad.z,0,i,!1);a.renderOrder=2;let o=new Gi({vertexColors:!0,color:11832575}),s=md(e,n.bulbs,1/12,ad.x,0,ad.z,0,o,!1);md(e,n.sw,1/12,ad.x,0,ad.z);let c=md(e,Ud(),1/14,ad.x,1.15,ad.z+ad.hz+.08),l=new Fn;l.add(Nl(Vd(),1/12)),l.position.set(ad.x-ad.hx+.02,0,-1.28),e.add(l);let u=new Fn;u.add(Nl(Bd(),1/16)),u.position.set(20.02,0,-1.2),e.add(u);let d=ad.x,f=ad.hz,p=d-ad.hx,m=d+ad.hx;t.push({x0:p-.12,x1:p+.32,z0:-f,z1:-1.4},{x0:p-.12,x1:p+.32,z0:1.4,z1:f},{x0:m-.32,x1:m+.12,z0:-f,z1:f},{x0:p,x1:m,z0:f-.32,z1:f+.12},{x0:p,x1:m,z0:-f-.12,z1:-f+.32},{x0:23.38,x1:23.62,z0:1.9,z1:2.35});let h=[];for(let e of[-3.5,-.3,2.9])for(let t of[-3.15,0,3.15])h.push({x:d+e,z:t,y:.72});return{roof:r,door:l,gate:u,forSale:c,open:!1,owned:!1,gateOpen:!1,lights:`veg`,bulbMat:o,bulbs:s,lightSwitch:{x:24.05,z:2.1},slots:h,doorBlock:{x0:p-.05,x1:p+.4,z0:-1.35,z1:1.35},gateBlock:{x0:19.7,x1:20.4,z0:-1.25,z1:1.25},contains(e,t){return e>p+.45&&e<m-.4&&t>-f+.45&&t<f-.45}}}function Gd(e,t,n){let r=Fd(e,t,n),i=md(e,Rd(),1/16,-3.55,.75,-12.65);t.push({x0:-4.4,x1:-2.7,z0:-13.15,z1:-12.15});let a={x:-3.55,z:-11.45,mesh:i},o=md(e,zd(),1/16,16.15,0,-1.85);return t.push({x0:15.7,x1:17.7,z0:-2.15,z1:-1.55}),{house:r,stand:a,lot:{x:16.4,z:-1.05,mesh:o},warehouse:Wd(e,t)}}var Kd=new Xr({vertexColors:!0}),K=16;function qd(e,t,n,r,i,a,o=0,s=Ml,c=!0){let l=Nl(t,n,[0,0,0],s,c);return l.position.set(r,i,a),l.rotation.y=o,c||(l.castShadow=!1),e.add(l),l}function Jd(e,t,n,r,i){e.push({x0:t-r,x1:t+r,z0:n-i,z1:n+i})}var Yd={0:[`111`,`101`,`101`,`101`,`111`],1:[`010`,`110`,`010`,`010`,`111`],2:[`111`,`001`,`111`,`100`,`111`],3:[`111`,`001`,`111`,`001`,`111`],4:[`101`,`101`,`111`,`001`,`001`],5:[`111`,`100`,`111`,`001`,`111`],6:[`111`,`100`,`111`,`101`,`111`],7:[`111`,`001`,`010`,`010`,`010`],8:[`111`,`101`,`111`,`101`,`111`],9:[`111`,`101`,`111`,`001`,`111`],F:[`111`,`100`,`110`,`100`,`100`],H:[`101`,`101`,`111`,`101`,`101`],V:[`101`,`101`,`101`,`101`,`010`],E:[`111`,`100`,`110`,`100`,`111`],G:[`111`,`100`,`101`,`101`,`111`],B:[`110`,`101`,`110`,`101`,`110`],U:[`101`,`101`,`101`,`101`,`111`],D:[`110`,`101`,`101`,`101`,`110`],O:[`111`,`101`,`101`,`101`,`111`],P:[`110`,`101`,`110`,`100`,`100`],N:[`101`,`111`,`111`,`101`,`101`],"/":[`001`,`001`,`010`,`100`,`100`]," ":[`0`,`0`,`0`,`0`,`0`]};function Xd(e,t,n,r,i,a,o=2){let s=n;for(let n of t){let t=Yd[n]||Yd[` `],c=t[0].length;for(let n=0;n<t.length;n++)for(let l=0;l<c;l++)if(t[n][l]===`1`)for(let t=0;t<o;t++)for(let c=0;c<o;c++)e.set(s+l*o+c,r-n*o-t,i,a,0);s+=(c+1)*o}}function Zd(e,t,n){let r=new Fn,i=new H;i.box(-2,-2,-1,34,28,1,1844252,.03),i.box(-1,-1,0,33,27,1,1185810,.02);let a=new H;return a.box(0,0,1,32,24,2,463884,0),Xd(a,e,2,20,2,n,2),Xd(a,t,2,9,2,15204312,2),a.box(2,2,2,12,5,3,n,0),a.box(14,2,2,22,4,3,3497024,0),r.add(Nl(i,1/K)),r.add(Nl(a,1/K,[0,0,0],Kd,!1)),r}function Qd(e,t,n){let r=new Fn,i=new H;i.box(-e-2,0,-t-2,e+2,2,t+2,2366484,.02),i.delBox(-e,0,-t,e,2,t),r.add(Nl(i,1/K));let a=new H;a.box(-e,0,-t,e,1,t,16774884,0);let o=new Xr({vertexColors:!0,color:n});return r.add(Nl(a,1/K,[0,0,0],o,!1)),r}function $d(e,t,n,r,i,a,o){let s=Qd(i,a,o);return s.position.set(t,n,r),e.add(s),s}function ef(){let e=new Fn,t=new H;t.box(-2,0,-2,2,3,2,3817542,.03),t.box(-1,3,-1,1,16,1,4871248,.03),t.box(-7,14,-1,7,17,2,2304038,.02),e.add(Nl(t,1/K));let n=new H;n.box(-1,-1,0,2,2,2,15262420,0),n.box(-9,-1,1,-1,1,2,14015446,0),n.box(2,-1,1,10,1,2,14015446,0),n.box(-1,-9,1,1,-1,2,14015446,0),n.box(-1,2,1,1,10,2,14015446,0);let r=Nl(n,1/K,[0,0,0],Ml,!1);return r.position.set(0,15.5/K,0),e.add(r),e.userData.blades=r,e}function tf(e,t,n,r,i,a){let o=ef();o.position.set(n,r,i),o.rotation.y=a,e.add(o),t.push(o.userData.blades)}function nf(e,t,n,r,i,a,o,s){let c=new H,l=Math.round((t-r/2)*K),u=Math.round((t+r/2)*K),d=Math.round((n-i/2)*K),f=Math.round((n+i/2)*K);for(let e=l;e<u;e++)for(let t=d;t<f;t++){let n=e===l||t===d||e===u-1||t===f-1,r=Math.floor((t-d)/3)%2;c.set(e,a,t,n?2761752:r?o:s,.02)}qd(e,c,1/K,0,0,0,0,Ml,!1)}function rf(e,t){let n=new H;for(let[e,r,i,a,o,s]of t)n.box(Math.round(e*K),Math.round(r*K),Math.round(i*K),Math.round((e+a)*K),Math.round((r+o)*K),Math.round((i+s)*K),(e,t,n)=>xl(e,t,n,4)>.45?16251644:12964056,.03);qd(e,n,1/K,0,0,0,0,Ml,!1)}function af(){let e=new H;e.box(-2,0,-2,2,22,2,6045744,.04),e.box(-4,21,-4,4,23,4,2892824,.02),e.box(-4,28,-4,4,30,4,2892824,.02);let t=new H;return t.box(-3,23,-3,3,28,3,16774084,0),{post:e,glow:t}}function of(){let e=new H;e.box(-1,0,0,2,6,2,6045744,.03),e.box(-4,4,1,4,7,3,2892824,.02);let t=new H;return t.box(-3,1,3,3,4,5,16773570,0),{wood:e,glow:t}}function sf(){let e=new H;return e.box(0,3,0,1,6,1,2893340,0),e.box(-1,0,-1,2,3,2,16774856,0),e.set(0,-1,0,16766314,0),e}function cf(){let e=new H;return e.box(-4,0,-4,-2,6,-2,15985884,.02),e.box(2,0,-4,4,6,-2,15985884,.02),e.box(-4,0,2,-2,6,4,15985884,.02),e.box(2,0,2,4,6,4,15985884,.02),e.box(-5,6,-5,5,8,5,3107386,.03),e.box(-5,8,-5,5,16,-3,16250090,.02),e.box(-4,10,-4,4,14,-3,4160074,.02),e}function lf(){let e=new H;return e.box(-5,0,-3,4,4,3,12876346,.04),e.box(-2,3,2,3,7,6,13666888,.03),e.box(-3,6,3,-1,8,5,12876346,.03),e.box(1,6,3,3,8,5,12876346,.03),e.set(-1,5,6,1840140,0),e.set(1,5,6,1840140,0),e.set(0,4,6,15909536,0),e.box(3,1,-1,8,3,1,12876346,.04),e.box(6,3,-1,8,6,1,13666888,.03),e}function uf(){let e=new H;return e.box(-5,0,-5,5,6,5,12739898,.04),e.box(-6,6,-6,6,8,6,13792586,.03),e.box(-4,7,-4,4,9,4,4928548,.04),e.box(-2,8,-2,2,14,2,4164138,.05),e.set(-3,11,0,16184298,0),e.set(2,12,1,15764144,0),e.set(0,14,-1,16110919,0),e}function df(){let e=new H;return e.box(-8,0,-5,8,1,5,(e,t,n)=>Math.abs(e)>6||Math.abs(n)>3?7029800:e+n&1?9267268:12886122,.02),e}function ff(){let e=new H;e.box(-36,0,-3,-32,40,3,15985884,.02),e.box(32,0,-3,36,40,3,15985884,.02);for(let t=0;t<=24;t++){let n=t/24*Math.PI,r=Math.round(Math.cos(n)*34),i=36+Math.round(Math.sin(n)*12);e.box(r-2,i,-2,r+2,i+4,2,15985884,.02),t%3==0&&(e.set(r,i+4,0,4164138,.04),e.set(r,i+5,1,t%2?15764144:16184298,0))}return e}function pf(){let e=new H,t=new H;for(let n=-10;n<=10;n++)for(let r=-10;r<=10;r++){let i=Math.hypot(n,r);if(i<9.2&&i>5.6){let t=xl(n,0,r,2)>.55?9278360:6976120;e.set(n,0,r,t,.04),e.set(n,1,r,10133668,.03),e.set(n,2,r,11581114,.03)}i<=5&&t.set(n,0,r,xl(n,1,r,3)>.72?16769162:xl(n,2,r,4)>.4?16738858:12859932,0)}return e.box(-16,0,-3,-9,3,2,7030056,.04),e.box(9,0,-2,16,3,3,6044449,.04),e.box(-2,0,9,3,3,15,7030056,.04),{ring:e,ember:t}}function mf(){let e=new H;return e.box(-2,0,-2,2,10,2,10133668,.03),e.box(-7,10,-7,7,12,7,14672870,.02),e.box(-5,12,-5,5,13,5,8304344,.02),e.box(2,12,-1,6,15,2,16052454,.02),e.box(5,13,-1,8,15,1,16173130,.02),e.set(3,14,2,1840140,0),e}function hf(){let e=new H;return e.box(-1,0,-1,2,16,2,7029800,.03),e.box(-5,14,-3,6,20,4,3829685,.03),e.box(-5,18,-3,6,21,4,15001840,.02),e.box(6,16,-1,10,18,1,12859950,.02),e}function gf(){let e=new H;e.box(-18,8,-6,18,11,6,9068086,.03);for(let t of[-16,12])for(let n of[-4,3])e.box(t,0,n,t+3,8,n+3,6045744,.03);return e.box(-14,11,-3,-6,16,2,13214282,.02),e.box(-4,11,-2,2,14,2,4034410,.02),e.box(5,11,-4,14,13,3,7229488,.03),e}function _f(){let e=new H;return e.box(-10,0,0,10,14,1,7029800,.03),e.box(-7,2,1,-5,12,2,12041410,.02),e.box(2,3,1,4,12,2,9067056,.03),e.box(1,10,1,7,12,2,14015446,.02),e}function vf(){let e=new H;return e.box(-1,4,0,1,10,1,6045744,.02),e.box(-3,0,-3,3,3,3,9067056,.03),e.box(-2,3,-2,2,8,2,4164138,.05),e.set(-3,2,1,15764144,0),e.set(2,4,0,16184298,0),e}function yf(){let e=new H;for(let t=0;t<20;t++){let n=3+t%3,r=Math.round(Math.cos(t*.85)*n),i=Math.round(Math.sin(t*.85)*n);e.set(r,0,i,t%2?3112778:4034410,.02),e.set(r,1,i,2382902,.02)}return e}function bf(){let e=new H;return e.box(-4,0,-3,4,6,4,4034410,.03),e.box(-2,6,-2,2,8,2,3112778,.02),e.box(3,3,0,9,5,2,3112778,.02),e.box(-7,4,-1,-3,8,1,2382902,.02),e}function xf(){let e=new H;e.box(0,10,0,22,12,12,12886122,.03);for(let t of[1,18])for(let n of[1,9])e.box(t,0,n,t+2,10,n+2,9080980,.03);return e.box(2,12,2,8,14,7,7229488,.03),e.box(10,12,3,15,15,7,14131786,.03),e.box(16,12,2,20,16,5,14015446,.02),e}function Sf(){let e=new H;for(let t=-36;t<=36;t++)for(let n=-3;n<=3;n++)for(let r=-3;r<=3;r++){let i=Math.hypot(n,r);i>3.1||i<1.8||e.set(n,r,t,t&7?12042440:8226446,.02)}return e}function Cf(){let e=new H;for(let t=0;t<8;t++)e.box(t*2,0,0,t*2+2,1,14,t%2?16110919:1710618,0);return e}function wf(e,t){let n=new H;return n.box(0,0,0,8,6,6,e,.04),n.box(3,0,0,5,6,6,t,0),n}function Tf(){let e=new H;return e.box(0,0,0,14,18,1,16052194,.02),e.box(2,2,1,12,16,2,2179100,.02),e.box(6,4,2,8,14,3,9685082,0),e.box(3,8,2,11,11,3,7316031,0),e.box(4,6,2,6,9,3,9359706,0),e.box(8,6,2,10,9,3,9359706,0),e}function Ef(e,t,n,r,i,a,o,s,c=8){let l=Math.max(8,Math.ceil(Math.hypot(r-t,i-n)*c));for(let u=0;u<=l;u++){let d=u/l,f=t+(r-t)*d,p=n+(i-n)*d,m=a-Math.sin(Math.PI*d)*o;e.set(Math.round(f*c),Math.round(m*c),Math.round(p*c),s,0)}}function Df(){let e=new H;return e.box(-3,0,-3,3,6,3,7229488,.04),e.box(-2,5,-2,2,16,2,10134440,.02),e.box(-3,14,-3,3,17,3,12963024,.02),e.box(-1,13,2,1,16,10,14015456,.02),e.box(-1,8,8,1,14,11,3837904,.02),e.box(-4,15,-7,4,18,-3,3108799,.02),e.box(-1,16,-3,1,17,-1,9081496,.02),e}function Of(e,t,n,r,i){let a=new ka(16762218,0,7,2);a.position.set(n,r,i),e.add(a),t.push(a)}function kf(e,t,n,r,i){let a=af();for(let[n,i]of[[-2.55,-8.7],[2.55,-8.7],[-2.55,.4],[2.55,.4],[-2.55,12.3],[2.55,12.3]])qd(e,a.post,1/K,n,0,i),qd(e,a.glow,1/K,n,0,i,0,Kd,!1),Of(e,r,n,1.72,i),Jd(t,n,i,.18,.18);let o=new H,s=[[-2.55,-8.7,-2.55,.4],[-2.55,.4,-2.55,12.3],[2.55,-8.7,2.55,.4],[2.55,.4,2.55,12.3],[-2.55,-8.7,2.55,-8.7],[-2.55,12.3,2.55,12.3]];for(let[e,t,n,r]of s)Ef(o,e,t,n,r,2.55,.28,2761756,8);qd(e,o,1/8,0,0,0,0,Ml,!1);let c=sf();for(let[t,r,i,a]of s)for(let o of[.28,.62]){let s=t+(i-t)*o,l=r+(a-r)*o,u=2.55-Math.sin(Math.PI*o)*.28-.22;n.push(qd(e,c,1/12,s,u,l,0,Kd,!1))}let l=of();for(let t of[-2.35,2.35])qd(e,l.wood,1/K,t,1.55,-13.92),qd(e,l.glow,1/K,t,1.55,-13.92,0,Kd,!1),Of(e,r,t,1.85,-13.55);let u=Df();i.forEach((n,r)=>{let i=n.x>0?1:-1,a=n.x-i*3.25;qd(e,u,1/K,a,0,n.z,i>0?-Math.PI/2:Math.PI/2),Jd(t,a,n.z,.22,.22),n.x=a,n.bed=r});let d=cf();qd(e,d,1/K,-3.55,.78,-12.55),qd(e,d,1/K,3.55,.78,-12.55),Jd(t,-3.55,-12.55,.38,.38),Jd(t,3.55,-12.55,.38,.38),qd(e,lf(),1/K,-4.35,.78,-13.45,.4),Jd(t,-4.35,-13.45,.28,.22),qd(e,df(),1/K,0,.78,-13.45,0,Ml,!1);let f=uf();qd(e,f,1/K,-6.55,0,-12.85),qd(e,f,1/K,6.55,0,-12.85),Jd(t,-6.55,-12.85,.42,.42),Jd(t,6.55,-12.85,.42,.42),qd(e,ff(),1/K,0,0,9.15),Jd(t,-2.15,9.15,.18,.2),Jd(t,2.15,9.15,.18,.2);let p=pf();qd(e,p.ring,1/K,6.55,0,10.45),n.push(qd(e,p.ember,1/K,6.55,.02,10.45,0,Kd,!1)),Jd(t,6.55,10.45,.7,.7),qd(e,mf(),1/K,-8.7,0,9.35),Jd(t,-8.7,9.35,.42,.42),qd(e,hf(),1/K,4.85,0,12.15),Jd(t,4.85,12.15,.32,.28),qd(e,bf(),1/K,10.85,0,-5.35,.6),Jd(t,10.85,-5.35,.28,.24);let m=new H,h=[16184298,16110919,15764144,11832296,16744287],g=(e,t)=>{let n=Math.round(e*8),r=Math.round(t*8);m.set(n,0,r,4164138,.04),m.set(n,1,r,4889136,.04),m.set(n,2,r,h[Math.abs(n+r)%h.length],.02)};for(let e=-8.2;e<=12.2;e+=.85)g(-1.75,e),g(1.75,e);for(let e=6.6;e<=14.6;e+=.7)g(e,-13.15),g(-e,-13.15);qd(e,m,1/8,0,0,0,0,Ml,!1)}function Af(e,t){$d(e,-11,3.05,-19.15,12,6,15783844),$d(e,.35,2.55,-20.3,18,5,10474724),$d(e,10.9,3.08,-20.2,12,5,15983280);let n=Zd(`76F`,`60H`,16773312);n.position.set(-16.15,1.2,-20.3),n.rotation.y=Math.PI/2,e.add(n);let r=Zd(`78F`,`75H`,10153215);r.position.set(-2.2,1.25,-23.05),e.add(r);let i=Zd(`18/6`,`VEG`,16774868);i.position.set(16.15,1.2,-21.6),i.rotation.y=-Math.PI/2,e.add(i),rf(e,[[-15.2,1.15,-23.12,.22,1.35,.06],[-13.4,1.15,-23.12,.22,1.35,.06],[-11.5,1.15,-23.12,.22,1.35,.06],[-9.4,1.15,-23.12,.22,1.35,.06],[7.1,1.15,-23.12,.22,1.35,.06],[9.2,1.15,-23.12,.22,1.35,.06],[11.4,1.15,-23.12,.22,1.35,.06],[13.5,1.15,-23.12,.22,1.35,.06]]),nf(e,-11,-19.6,1.15,2.6,12,7229488,12886122),nf(e,10.9,-20.2,1.2,1.15,12,9070660,12886122),tf(e,t,-15.85,.78,-18.4,Math.PI/2),tf(e,t,4.55,.78,-16.7,Math.PI),tf(e,t,15.55,.78,-16.7,-Math.PI/2)}function jf(e,t){let n=sd.y;$d(e,-10.9,n+1.72,-21.55,8,3,15983280),$d(e,0,n+1.72,-21.45,8,3,15983280);let r=Zd(`18/6`,`VEG`,16774868);r.position.set(-14.8,n+.55,-20.6),r.rotation.y=Math.PI/2,e.add(r);let i=Zd(`18/6`,`VEG`,16774868);i.position.set(-1.6,n+.85,-22.85),e.add(i),rf(e,[[-14.6,n+.45,-22.85,.2,1.15,.06],[-12.2,n+.45,-22.85,.2,1.15,.06],[-9.6,n+.45,-22.85,.2,1.15,.06],[-3.5,n+.45,-22.85,.2,1.15,.06],[-1.1,n+.45,-22.85,.2,1.15,.06],[1.3,n+.45,-22.85,.2,1.15,.06]]),nf(e,-10.9,-20.9,1.05,1.5,58,9070660,12886122),nf(e,0,-20.2,1.15,1.2,58,9070660,12886122),nf(e,12.2,-17.6,1.8,1.15,58,2372648,3228724),tf(e,t,-15.7,n,-17.2,Math.PI/2),tf(e,t,4.7,n,-16.8,-Math.PI/2);let a=new H;a.box(0,0,0,28,12,2,1316884,.02);let o=new H;Xd(o,`OPEN`,2,9,3,16777215,2);let s=new Fn;s.add(Nl(a,1/K)),s.add(Nl(o,1/K,[0,0,0],new Xr({vertexColors:!0,color:11992938}),!1)),s.position.set(8.4,n+1.2,-22.85),e.add(s),qd(e,Tf(),1/K,14.15,n+.7,-22.9),qd(e,wf(12886122,15984560),1/K,15.15,n,-16.85),qd(e,wf(9068086,4034410),1/K,15.05,n+.4,-16.7,.2)}function Mf(e,t,n,r){qd(e,Sf(),1/12,24.7,3.55,0,0,Ml,!1),qd(e,Cf(),1/K,24.15,.22,-.55,0,Ml,!1),qd(e,xf(),1/K,34.85,0,3.45),Jd(t,35.55,3.85,.72,.42),tf(e,r,28.2,0,4.35,Math.PI),rf(e,[[36.35,.7,-2.6,.08,1.5,.35],[36.35,.7,-.4,.08,1.5,.35],[36.35,.7,1.8,.08,1.5,.35]]);let i=Zd(`18/6`,`VEG`,14207231),a=Zd(`12/12`,`BUD`,16762218);for(let t of[i,a])t.position.set(23.72,1.15,2.55),t.rotation.y=Math.PI/2,e.add(t);a.visible=n.lights===`flower`,i.visible=n.lights!==`flower`,n.vegScreen=i,n.flowerScreen=a}function Nf(e,t){qd(e,gf(),1/K,16,0,-11.95),qd(e,_f(),1/K,16.1,1.15,-12.08),tf(e,t,18.25,0,-7.6,-Math.PI/2)}function Pf(e){qd(e,vf(),1/K,-17.35,1.35,-10.35),qd(e,vf(),1/K,-14.55,1.45,-7.7),qd(e,yf(),1/K,-14.35,.15,-10.55),$d(e,-16,1.85,-9.7,8,3,13231823)}function Ff(e){let t=new H;for(let[e,n,r,i]of[[-18,16,-6,8],[10,17,8,7],[26,15,-14,6],[-28,16,12,7],[4,18,20,5]])t.sphereShell(Math.round(e*2),Math.round(n*2),Math.round(r*2),i,3,()=>16054527,.03,.42);let n=Nl(t,.5,[0,0,0],Ml,!1);n.castShadow=!1,e.add(n)}function If(e,t,n,r){let i=[],a=[],o=[],s={down:new ka(16773324,0,14,2),loft:new ka(16774880,0,12,2),wh:new ka(13219583,0,16,2)};return s.down.position.set(-1.5,2.45,-19.4),s.loft.position.set(0,sd.y+1.35,-19.6),s.wh.position.set(ad.x,2.8,0),e.add(s.down,s.wh),n.house.upper.add(s.loft),kf(e,t,i,o,r),Af(e,a),jf(n.house.upper,a),Mf(e,t,n.warehouse,a),Nf(e,a),Pf(e),Ff(e),{lamps:s,fans:a,bulbs:i,night:o,spigots:r}}var Lf={x:20,z:14},Rf={w:5.6,d:4.9},zf=[];for(let e of[-7.5,7.5])for(let t of[-6.5,-.5,5.5])zf.push({x:e,z:t});var Bf=[[-1.4,-1.2],[1.4,-1.2],[-1.4,1.2],[1.4,1.2]],Vf=7/16,Hf=[11962968,11370832,12555106,11041610],Uf=(e,t,n,r,i=0)=>e[Math.floor(xl(t,n,r,i)*e.length)];function Wf(e,t,n,r,i,a,o=0,s=[0,0,0],c,l=!0){let u=Nl(t,n,s,c,l);return u.position.set(r,i,a),u.rotation.y=o,e.add(u),u}function Gf(e,t,n,r=!0,i=64){let a=new Fn;for(let e of Pl(t,n,[0,0,0],void 0,r,i))a.add(e);return e.add(a),a}function Kf(e,t,n,r,i,a,o,s,c=1,l=.04){let u=Math.ceil(Math.max(Math.abs(i-t),Math.abs(a-n),Math.abs(o-r)))+1;for(let d=0;d<=u;d++){let f=d/u,p=Math.round(t+(i-t)*f),m=Math.round(n+(a-n)*f),h=Math.round(r+(o-r)*f);e.box(p,m,h,p+c,m+c,h+c,s,l)}}var qf=8;function Jf(e,t){let n=Math.floor((t+4e3)/6),r=n%2*6,i=Math.floor((e+r+4e3)/12),a=(e+r+4e3)%12,o=(t+4e3)%6,s=xl(i,n,0,77);return{grout:a===0||o===0,color:s<.33?10132116:s<.66?9276808:10921373}}function Yf(e,t,n,r=0){return e>n.x0-r&&e<n.x1+r&&t>n.z0-r&&t<n.z1+r}function Xf(e){let t=new H,n=zf.map(e=>({x0:e.x-Rf.w/2,x1:e.x+Rf.w/2,z0:e.z-Rf.d/2,z1:e.z+Rf.d/2})),r=[16184298,16110919,15764144,11832296,16744287,9423090];for(let e=-Lf.x*qf-8;e<Lf.x*qf+8;e++)for(let i=-(Lf.z+1)*qf;i<(Lf.z+1)*qf;i++){let a=(e+.5)/qf,o=(i+.5)/qf,s=n.some(e=>Yf(a,o,e,.3+Ol(a*3,o*3,5)*.2)),c=1.3+(Ol(o*1.7,0,9)-.5)*.25,l=Math.abs(a)<c&&o>-9.8&&o<Lf.z+.5,u=o>-9.9&&o<-7.6&&Math.abs(a)<4.2-(o>-8.4?(o+8.4)*-0:0),d=a>14.2&&a<Lf.x+.8&&Math.abs(o)<1.55;if(a>12.95&&a<19.15&&o<-2.25&&o>-12.3){t.set(e,-1,i,3811868,.04);continue}if(l||u||d){let n=Jf(e,i);n.grout?t.set(e,-1,i,5062707,.06):(t.set(e,-1,i,5917242,0),t.set(e,0,i,n.color,.05));continue}if(s){t.set(e,-1,i,Uf([8018492,7229492,8741954],e,0,i,3),.08),xl(e,1,i,4)>.9&&t.set(e,0,i,6966322,.1);continue}let f=Math.floor((a+20)/2.5)&1,p=(Ol(a*.4,o*.4,2)-.5)*.14,m=f?7189572:6465083;m=El(m,1+p),t.set(e,-1,i,m,.07);let h=xl(e,2,i,8),g=Math.min(Lf.x-Math.abs(a),Lf.z-Math.abs(o)),_=Math.abs(a)<c+.5&&o>-9.8;if(h>.9-(g<2.5?.04:0)){let n=xl(e,3,i,9)>.78,r=Uf([5808178,8111180,5148460,9359706],e,0,i,6);t.set(e,0,i,r,.05),n&&(t.set(e,1,i,El(r,1.18),.04),xl(e,6,i,10)>.45&&t.set(e+(xl(e,7,i,11)>.5?1:-1),0,i,El(r,.9),.04))}else if(h<.014+(g<3?.03:0)&&!_&&g>.6){let n=r[Math.floor(xl(Math.floor(e/6),0,Math.floor(i/6),14)*r.length)];t.set(e,0,i,4164138,.04),t.set(e,1,i,4889136,.04),t.set(e,2,i,n,.03),xl(e,5,i,15)>.5&&(t.set(e+1,2,i,n,.03),t.set(e-1,2,i,n,.03),t.set(e,2,i+1,n,.03),t.set(e,2,i-1,n,.03),t.set(e,3,i,16110919,0),t.del(e,2,i),t.set(e,2,i,16110919,0))}}return t}function Zf(e,t,n,r,i){let a=[4164146,4889144,3504684,5679168];e.sphereShell(t,Math.round(r*.35),n,r,2.2,(e,t,n,r)=>t<0?null:i&&xl(e,t,n,41)>.9?i:El(Uf(a,e,t,n,42),.85+r*.3),.06,.8)}function Qf(){let e=new H;for(let t=-176;t<176;t++)for(let n=-152;n<136;n++){let r=(t+.5)/4,i=(n+.5)/4;if(r>-Lf.x-1&&r<Lf.x+1&&i>-Lf.z-1&&i<Lf.z+1)continue;if(r>20.2&&r<39.2&&i>-7.6&&i<7.6||r>18.4&&r<24&&Math.abs(i)<1.8){let r=xl(t,0,n,81)<.5?9275520:10130572;e.set(t,-1,n,6051663,.04),(t+n)%5!=0&&e.set(t,0,n,r,.05);continue}let a=(Ol(r*.18,i*.18,4)-.5)*.3;e.set(t,-1,n,El(5082933,1+a),.09);let o=xl(t,2,n,8);if(o>.9)e.set(t,0,n,El(Uf([4161324,5939004,3501862],t,0,n,6),1),.06);else if(o<.015){let r=Uf([16184298,16110919,15764144,11832296],Math.floor(t/4),0,Math.floor(n/4),3);e.set(t,0,n,r,.03)}}return{m:e,S:4}}function $f(){let e=new H,t=Sl(2024),n=[];for(let e=-30;e<=20;e+=5.2)n.push([-25-t()*7,e+t()*2]),n.push([25+t()*7,e+t()*2]);for(let e=-32;e<=32;e+=7)n.push([e+t()*2,-30-t()*6]);for(let[r,i]of n){if(r>17.5&&r<48&&i>-12&&i<12)continue;let n=Math.round(r*4),a=Math.round(i*4),o=14+Math.floor(t()*8),s=[7030056,6044449,7950382];for(let t=0;t<o;t++){let r=t<3?3:2;for(let i=0;i<r;i++)for(let o=0;o<r;o++)e.set(n+i-+(r===3),t,a+o-+(r===3),Uf(s,i,t,o,4),.05)}let c=t()>.75?[8041792,9226316,6988344]:[4164146,5217850,3439147,5941826],l=4+Math.floor(t()*2);for(let r=0;r<l;r++){let i=r/l*Math.PI*2+t(),s=r===0?0:5+t()*4,u=8+t()*4,d=n+Math.round(Math.cos(i)*s),f=a+Math.round(Math.sin(i)*s),p=o+4+Math.round(t()*5)+(r===0?3:0);e.sphereShell(d,p,f,u,2.4,(e,t,n,r)=>{let i=(t-(o-2))/22;return El(Uf(c,e,t,n,51),.78+i*.35+r*.08)},.07,.85)}}return e}function ep(e,t=!1){let n=Math.round(e*16),r=new H,i=-n/2,a=Math.floor(n/6),o=a*6,s=Math.round(i+(n-o)/2);for(let e of[4,14])r.box(Math.round(i),e,-2,Math.round(i)+n,e+3,0,(e,t,n)=>Uf([9068343,8279344,9726013],e,t,n,61),.04);for(let e=0;e<a;e++){let t=s+e*6,n=.9+xl(e,0,0,62)*.2,i=xl(e,1,0,63)<.12?-1:0,a=Uf(Hf,e,0,0,64);for(let o=0;o<22+i;o++){let s=o>=21+i,c=o===0&&xl(e,5,0,65)<.4;for(let e=+!!s;e<(s?3:4);e++){let i=El(a,n*(e%2?.96:1.02)*(o>18?1.06:1));c&&(i=Dl(i,5933626,.55)),r.set(t+e,o,0,i,.035),r.set(t+e,o,1,El(i,.95),.035)}}}let c=[],l=Math.max(1,Math.round(n/64));for(let e=0;e<=l;e++)c.push(Math.round(i+n*e/l));for(let e of c){let n=t&&(e===c[0]||e===c[c.length-1]),i=n?34:27;r.box(e-3,0,-3,e+3,i,3,(e,t,n)=>Uf([8016432,7293483,8608309],e,t,n,66),.04),r.box(e-4,i,-4,e+4,i+2,4,13146722,.04),r.box(e-2,i+2,-2,e+2,i+3,2,14199408,.03),n&&(r.box(e-2,i+3,-2,e+2,i+8,2,16765802,.02),r.box(e-3,i+8,-3,e+3,i+9,3,3815994,.02),r.box(e-1,i+9,-1,e+1,i+10,1,3815994,.02))}return r}function tp(e){let t=(t,n,r,i,a)=>Wf(e,ep(t,a),1/16,n,0,r,i),n=2.4;t(Lf.x-n,-(Lf.x+n)/2,Lf.z,0,!0),t(Lf.x-n,(Lf.x+n)/2,Lf.z,0,!0);let r=od.half+.7;t(Lf.x-r,-(Lf.x+r)/2,-Lf.z,Math.PI),t(Lf.x-r,(Lf.x+r)/2,-Lf.z,Math.PI);let i=1.25,a=Lf.z-i;t(a,Lf.x,-(Lf.z+i)/2,Math.PI/2),t(a,Lf.x,(Lf.z+i)/2,Math.PI/2),t(Lf.z*2,-Lf.x,0,-Math.PI/2)}function np(e,t,n,r,i,a,o){let s=r/2;e.delBox(t-s,n,a-2,t+s,n+i,a),e.box(t-s,n,a-1,t+s,n+i,a,(e,t)=>{let r=(e+t)%11<2||(e+t)%11==5,a=(t-n)/i;return r?14019831:Dl(7317192,10275808,a)},.02);let c=15985884;e.box(t-s-1,n-1,a-1,t+s+1,n+1,a+1,c,.02),e.box(t-s-1,n+i-1,a-1,t+s+1,n+i+1,a+1,c,.02),e.box(t-s-1,n,a-1,t-s+1,n+i,a+1,c,.02),e.box(t+s-1,n,a-1,t+s+1,n+i,a+1,c,.02),e.box(t-1,n,a-1,t+1,n+i,a+1,c,.02),e.box(t-s,n+i/2-1,a-1,t+s,n+i/2+1,a+1,c,.02),e.box(t-s-3,n-3,a,t+s+3,n-1,a+3,13616816,.03),e.box(t-s-2,n+i+1,a,t+s+2,n+i+3,a+1,c,.02);for(let r of[-1,1]){let o=r<0?t-s-7:t+s+1;e.box(o,n-1,a,o+6,n+i+1,a+1,(e,t)=>t%3==0?3104570:4160074,.03)}}function rp(){let e=new H,t=new H,n=new H,r=-Math.round(od.half*8),i=Math.round(od.half*8),a=-112,o=Math.round(od.back*8)-8,s=15128752;t.box(r,6,-114,i,96,a,(e,t,n)=>t%4==3?El(s,.86):El(s,1+(e>>4)%2*0),.025),t.box(r,0,-114,i,6,a,(e,t,n)=>Uf([9211536,8158848,10132636],e>>2,t>>1,n,91),.05),t.box(r-1,94,-114,i+1,96,-111,15985884,.02);for(let e of[-112,-78,-42,42,78,112])np(t,e,24,18,26,a,s);t.box(r-1,58,-114,i+1,62,-111,15985884,.02);for(let e of[-112,-70,70,112])np(t,e,68,16,18,a,s);t.delBox(-9,6,-114,9,42,a),t.box(-8,32,-113,8,40,a,(e,t)=>(e+t)%7<2?14019831:7317192,.02),t.box(-9,30,-113,9,32,-111,15985884,.02);let c=15985884;t.box(-11,6,-113,-9,44,-111,c,.02),t.box(9,6,-113,11,44,-111,c,.02),t.box(-11,42,-113,11,44,-111,c,.02);let l=-153,u=e=>{let t=99+Math.round((a-Math.max(e,l))*.62);return e>=l?t:t+Math.round((l-e)*.28)};for(let e=o;e<=-100;e++){let t=u(e),a=Math.floor((-100-e)/3);for(let o=r-6;o<=i+6;o++){let r=xl(Math.floor((o+a%2*4)/8),a,0,95),i=r<.33?8208181:r<.66?9390651:7288623;(o+a%2*4)%8==0&&(i=El(i,.82)),(-100-e)%3==0&&(i=El(i,.86));for(let r=t-3;r<=t;r++)n.set(o,r,e,r===t?i:El(i,.7),.02)}if(e>=o&&e<o+3)for(let a=r-6;a<=i+6;a++)n.set(a,t+1,e,11622982,.03)}for(let e=o+1;e<a;e++){let t=u(e)-4;for(let a of[r-3,i+2])for(let r=96;r<=t;r++)n.set(a,r,e,s,.03)}n.box(56,92,-146,72,136,-130,(e,t,n)=>t%4==0||(e+Math.floor(t/4)%2*3)%6==0?13352872:Uf([10505532,9650994,11557445],e,t,n,97),.03),n.box(54,136,-148,74,140,-128,9079434,.04),n.delBox(58,137,-146,70,140,-132),n.box(58,137,-146,70,138,-132,3026478,.02),e.box(-40,0,a,40,6,-88,(e,t,n)=>{if(t<5)return 9267778;let r=Math.floor((n+200)/4);return(n+200)%4==0?7229488:El(Uf([12160606,12950120,11437140],r,0,0,98),1)},.03),e.box(-32,0,-88,32,4,-83,(e,t,n)=>(n+200)%5==0?7229488:11831639,.03),e.box(-32,0,-83,32,2,-78,(e,t,n)=>(n+200)%5==0?7229488:11437140,.03);let d=15854296,f=(t,n)=>{e.box(t-1,6,n-1,t+2,26,n+2,d,.02),e.box(t-2,26,n-2,t+3,27,n+3,16775400,.02)},p=t=>{f(t,-111),f(t,-89),e.box(t,21,-109,t+1,23,-89,d,.02),e.box(t,8,-109,t+1,10,-89,d,.02);for(let n=-106;n<-91;n+=6)e.box(t,10,n,t+1,21,n+1,d,.02)};p(-40),p(39);for(let[t,n]of[[-40,-33],[33,40]]){f(t===-40?-40:38,-89),e.box(t,21,-90,n,23,-89,d,.02),e.box(t,8,-90,n,10,-89,d,.02);for(let r=t+2;r<n;r+=6)e.box(r,10,-90,r+1,21,-89,d,.02)}f(-33,-89),f(32,-89);for(let t of[-46,-30,28,44])e.box(t,34,-108,t+3,36,-90,15985884,.02);e.box(-48,34,-108,-16,37,-105,7229488,.02),e.box(16,34,-108,48,37,-105,7229488,.02),e.box(-48,34,-93,-16,37,-90,7229488,.02),e.box(16,34,-93,48,37,-90,7229488,.02);for(let t of[-46,42])e.box(t,6,-92,t+4,36,-88,15985884,.02);let m=(e,t,n)=>{if(t<7)return Uf([9211536,8158848,10132636],e>>2,t,n>>2,91);if(t%5==4)return El(s,.74);let r=Math.floor(e/10)+Math.floor(n/10)&1;return El(s,r?1:.9)},h=(e,n,r,i)=>{t.box(e,0,n,r,140,i,(e,t,n)=>{let r=u(n)-4;return t>=r?null:t>56&&t<60||t>r-3?15985884:m(e,t,n)},.02)};h(-133,-188,-132,-111),h(132,-188,133,-111),h(-132,-188,132,-187);let g=[16184298,16110919,15764144,11832296,16744287],_=(e,n,r,i,a,o)=>{for(let o=n;o<r;o++)for(let n=i;n<i+a;n++){t.del(e,n,o);let r=(o+n)%8<2?14151416:Dl(7317192,12969204,(n-i)/a);t.set(e,n,o,r,.01)}let s=15985884;t.box(o,i-1,n-1,o+1,i+1,r+1,s,.02),t.box(o,i+a-1,n-1,o+1,i+a+1,r+1,s,.02),t.box(o,i,n-1,o+1,i+a,n+1,s,.02),t.box(o,i,r-1,o+1,i+a,r+1,s,.02),t.box(o,i-3,n,o+1,i-1,r,13616816,.02)},v=(e,n,r,i,a,o)=>{let s=n-(a>>1),c=n+(a>>1),l=o<0?e-1:e+1;if(_(e,s,c,r,i,l),t.box(l,r,s-4,l+1,r+i,s-1,3104570,.03),t.box(l,r,c+1,l+1,r+i,c+4,4160074,.03),r<40)for(let n=s;n<c;n+=2)t.set(l,r-2,n,4164138,.04),t.set(l,r-1,n,Uf(g,n,r,e,7),.02)};for(let[e,t]of[[-133,-1],[132,1]])v(e,-164,26,22,14,t),v(e,-136,26,22,14,t),v(e,-150,68,16,12,t);let y=e=>{let n=e-7,r=e+7,i=-188;for(let e=n;e<r;e++)for(let n=28;n<48;n++)t.del(e,n,i),t.set(e,n,i,(e+n)%8<2?14151416:9420764,.01);t.box(n-1,27,-189,r+1,29,i,15985884,.02),t.box(n-1,47,-189,r+1,49,i,15985884,.02),t.box(n-1,28,-189,n+1,48,i,15985884,.02),t.box(r-1,28,-189,r+1,48,i,15985884,.02)};y(-48),y(48);for(let e=8;e<78;e++){let n=-158+Math.round(Math.sin(e*.35)*2);t.set(-134,e,n,e%4==0?4889144:3107368,.05),t.set(134,e,n+6,e%4==0?4889144:3107368,.05)}return{shell:e,roof:n,facade:t}}function ip(){let e=new H;e.box(-42,0,-36,42,7,36,(e,t,n)=>Uf([4928548,4140063,5652524],e,t,n,101),.06);for(let t=-42;t<42;t++)for(let n=-36;n<36;n++)xl(t,9,n,102)>.93&&e.set(t,6,n,7033400,.08);let t=(t,n,r,i)=>{e.box(t,0,n,r,8,i,(e,t,n)=>{let r=t<4?0:1,i=.92+xl(Math.floor(e/10),r,Math.floor(n/10),103)*.18;return El(11039812,t===3||t===4?.7:i*(e%3==0&&n%3==0?.96:1))},.035)};t(-45,-39,45,-36),t(-45,36,45,39),t(-45,-36,-42,36),t(42,-36,45,36);for(let[t,n]of[[-46,-40],[42,-40],[-46,36],[42,36]])e.box(t,0,n,t+4,11,n+4,9067056,.04),e.box(t-1,11,n-1,t+5,12,n+5,13146722,.04);return e}function ap(){let e=new H;for(let t=-14;t<=14;t++)for(let n=-14;n<=14;n++){let r=Math.hypot(t+.5,n+.5);if(r>14)continue;let i=r<4.2?4:r<14*.55?3:r<14*.8?2:1;for(let r=0;r<i;r++)e.set(t,r,n,Uf([7230008,6441008,8019008],t,r,n,111),.1)}return e}var op={x:16,z:-9.5},sp=16,cp={x0:-48,x1:48,z0:-40,z1:116,door0:-38,door1:-6,beams:[24,-4,-28],pegs:[-26,-14,12,24]},lp=e=>op.x+e/sp,up=e=>op.z+e/sp;function dp(){let e=new H,{x0:t,x1:n,z0:r,z1:i,door0:a,door1:o}=cp,s=(e,t,n)=>(e+n+100)%8==0?7244894:Uf([8824180,8363630,9218682],e>>3,0,n,121),c=(e,t,n)=>(n+100)%8==0?7244894:8824180;e.box(t-1,0,r-1,n+1,3,i+1,(e,t,n)=>Uf([9211536,8158848],e>>2,0,n>>2,122),.05),e.box(t,3,i-2,n,54,i,s,.03),e.box(t,3,r,n,54,r+2,s,.03),e.box(t,3,r,t+2,54,i,c,.03),e.box(n-2,3,r,n,54,i,c,.03),e.delBox(a,3,i-3,o,44,i+1);let l=5059360;e.box(a-1,3,i-1,a+1,46,i+1,l,.02),e.box(o-1,3,i-1,o+1,46,i+1,l,.02),e.box(a-1,44,i-1,o+1,46,i+1,l,.02);let u=(t,n,r,i,a,o)=>{e.delBox(t,n,a,r,i,o),e.box(t,n,a,r,i,o,(e,t)=>(e+t)%9<2?14019831:7645382,.02);let s=15985884;e.box(t-1,n-1,a,r+1,n+1,o+1,s,.02),e.box(t-1,i-1,a,r+1,i+1,o+1,s,.02),e.box(t-1,n,a,t+1,i,o+1,s,.02),e.box(r-1,n,a,r+1,i,o+1,s,.02),e.box(t+(r-t)/2-1,n,a,t+(r-t)/2+1,i,o+1,s,.02),e.box(t,n+(i-n)/2-1,a,r,n+(i-n)/2+1,o+1,s,.02)};u(22,20,42,38,i-2,i),u(n-2,18,n,36,36,54),u(n-2,18,n,36,-22,-4),e.box(20,14,i,44,19,i+3,9067056,.04),e.box(21,17,i+1,43,19,i+2,4928548,.05);let d=[15764144,16110919,16184298,11832296];for(let t=22;t<43;t+=2)e.set(t,19,i+2,4164138,.05),e.set(t,20,i+2,Uf(d,t,0,0,124),.03),e.set(t,19,i+3,4889136,.05);e.box(t+2,0,r+2,n-2,1,i-2,3811868,.05);let f=new H,p=e=>54+Math.round((1-Math.min(1,Math.abs(e)/48))*22);for(let e=r-6;e<=i+6;e++){let t=Math.floor((e-r)/3);for(let n=-54;n<=54;n++){let r=p(n),i=xl(Math.floor((e+t%2*4)/8),t,+(n<0),125)<.5?10177082:9059889;(e+t%2*4)%8==0&&(i=El(i,.82)),Math.abs(n)%3==0&&(i=El(i,.9));for(let t=r-2;t<=r;t++)f.set(n,t,e,t===r?i:El(i,.7),.02)}if(Math.abs(e%28)<=1)for(let t=-54;t<=54;t++)f.set(t,p(t)+1,e,12081736,.03)}for(let e of[r,i-2])for(let r=t;r<n;r++){let t=p(r);for(let n=52;n<=t;n++)f.set(r,n,e,8824180,.03);f.set(r,t,e+1,7244894,.03)}return{shell:e,roof:f}}function fp(e){let t=new H,n=e>0?1:-16,r=e>0?16:-1;t.box(n,3,-1,r,44,1,(e,t)=>Math.abs(e)%6==0?5913893:Uf([8017462,7162928],e,t,0,123),.03),Kf(t,e>0?2:-2,8,0,e>0?13:-13,40,0,5059360,2);let i=e>0?12:-14;return t.box(i,20,1,i+2,27,2,15317566,.02),t}function pp(){let e=new H,t=(e,t,n,r)=>r?(e+t+n)%3==0?15661302:12970980:null,n=(e,t,n)=>(e+t*2+n)%5==0?14131786:(e+n)%2==0?8372037:6068786;for(let r=0;r<=11;r++){let i=3.15;r<=1?i=2.7:r===8?i=2.45:r===9?i=1.85:r>=10&&(i=2.55);for(let a=-4;a<=4;a++)for(let o=-4;o<=4;o++){let s=Math.hypot(a,o);if(!(s>i)){if(r===0)e.set(a,r,o,7229492,.02);else if(r>=10)e.set(a,r,o,r===11?13214282:15189354,.02);else if(s>i-1.05)e.set(a,r,o,t(a,r,o,!0),.015);else if(r<8){let t=r===7&&s<1.2?14907424:n(a,r,o);e.set(a,r,o,t,.03)}}}}return e}function mp(){let e=new H,t=9068086;for(let n of cp.beams){e.box(-34,22,n-1,34,24,n+1,t,.03);for(let t of cp.pegs)e.box(t,12,n-1,t+1,24,n+1,13220234,.02)}e.box(-40,8,50,-31,10,104,t,.03),e.box(31,8,50,40,10,104,t,.03);for(let n of[50,76,102])e.box(-42,0,n,-40,10,n+2,t,.03),e.box(40,0,n,42,10,n+2,t,.03);return e}function hp(){let e=new H,t=new H,n=15790830;e.box(-48,0,-48,48,8,48,(e,t,n)=>Uf([10119740,9330741,10777663],e>>3,t>>2,n>>3,131),.04),e.delBox(-46,6,-46,46,8,46),e.box(-46,0,-46,46,6,46,4928548,.05);for(let t of[-48,45])for(let r of[-48,45])e.box(t,8,r,t+3,37,r+3,n,.01);let r=e=>36+Math.round((48-Math.abs(e))*.5);for(let t of[-48,45]){e.box(-48,35,t,48,37,t+3,n,.01),e.box(-48,8,t,48,10,t+3,n,.01);for(let r=-24;r<46;r+=24)e.box(r-1,8,t,r+1,36,t+3,n,.01)}for(let t of[-48,45]){e.box(t,35,-48,t+3,37,48,n,.01),e.box(t,8,-48,t+3,10,48,n,.01);for(let r=-24;r<46;r+=24)e.box(t,8,r-1,t+3,36,r+1,n,.01)}for(let t=-48;t<48;t+=16)for(let i=-48;i<48;i++){let a=r(i);e.box(t,a,i,t+2,a+2,i+1,n,.01)}e.box(-48,60,-2,48,62,2,n,.01);for(let t=-48;t<=48;t++){let i=r(t);for(let r of[-48,45])e.box(r,36,t,r+3,i,t+1,(e,t,r)=>t===i-1?n:null,.01)}e.delBox(-10,8,45,10,36,48),e.box(-11,8,45,-9,36,48,n,.01),e.box(9,8,45,11,36,48,n,.01),e.box(-11,33,45,11,35,48,n,.01),e.box(-1,8,45,1,33,48,n,.01);let i=(e,t)=>(e+t)%13<2?14874354:Dl(10936536,12447462,t*7%10/10),a=(e,t,n,r)=>(r+1e3)%24!=0&&(r+1001)%24!=0;for(let e of[-47,46])t.box(-45,10,e,45,35,e+1,(t,n)=>e===46&&Math.abs(t)<11?null:a(t,n,e,t+48)?i(t,n):null,0);for(let e of[-47,46])t.box(e,10,-45,e+1,35,45,(e,t,n)=>a(e,t,n,n+48)?i(n,t):null,0);for(let e=-48;e<48;e++){let n=r(e);for(let r=-45;r<45;r++)(r+48)%16<2||t.set(r,n-1,e,i(r,e),0)}for(let e of[-47,46])for(let n=-45;n<45;n++)if(!(e===46&&Math.abs(n)<11))for(let a=35;a<r(e)-0;a++)(e===-47||e===46)&&t.set(n,a,e,i(n,a),0);e.box(-36,14,-40,36,17,-22,10119740,.04);for(let t of[-34,33])e.box(t,0,-40,t+2,14,-22,9067056,.04);return{frame:e,glass:t}}function gp(){let e=new H,t=(e,t,n)=>Uf([11567184,10843720,12290648],e>>2,t,n>>2,141);for(let n=0;n<4;n++)e.box(-22,18,-13+n*7,22,21,-7+n*7,t,.03);for(let n of[-1,1]){let r=n<0?-31:19;e.box(-22,9,r,22,12,r+12,t,.03);for(let t of[-15,12])Kf(e,t,18,n*8,t,0,n*26,9068086,3)}return e.box(-22,9,-2,22,12,2,10119740,.03),e.box(-4,21,-3,4,22,3,15262416,.02),e.box(-2,22,-1,2,26,1,16052448,.02),e}function _p(){let e=new H;for(let t=0;t<26;t++){let n=9+Math.sin(t/26*Math.PI)*1.4;for(let r=-12;r<=12;r++)for(let i=-12;i<=12;i++){let a=Math.hypot(r+.5,i+.5);if(a>n)continue;let o=Math.floor((Math.atan2(i,r)+Math.PI)/(Math.PI/6)),s=t===3||t===4||t===13||t===14||t===22||t===23;if(t===24&&a<n-1.5)e.set(r,t,i,xl(r,t,i,5)>.8?10146028:6266828,.03);else if(t>=24&&a<n-1.5)continue;else(a>n-1.2||t===0)&&e.set(r,t,i,s?7238262:Uf([9067056,8015658,9724470],o,0,0,151),.04)}}return e}function vp(){let e=new H,t=(e,t,n)=>t%5==4?6111270:Uf([10119740,9068086,10777663],e>>3,t,n>>3,161);e.box(-24,0,-20,24,26,-17,t,.04),e.box(-24,0,-20,-21,26,20,t,.04),e.box(21,0,-20,24,26,20,t,.04),e.box(-24,0,17,-21,26,20,7227946,.04),e.box(21,0,17,24,26,20,7227946,.04);for(let t=-20;t<20;t++)for(let n=-16;n<18;n++){let r=Math.hypot(t/20,(n-1)/17);if(r>1)continue;let i=Math.round(6+(1-r)*14+xl(t,0,n,162)*2);for(let r=0;r<i;r++)e.set(t,r,n,xl(t,r,n,163)>.9?Uf([8106058,14271338,11553338],t,r,n,164):Uf([3023128,3811868,4863268],t,r,n,165),.06)}return e}function yp(){let e=new H,t=4168280;e.box(-9,8,-14,9,10,10,t,.03);for(let n=-14;n<=12;n++){let r=Math.max(0,n-4)*.6,i=9+(n+14)*.15;for(let a of[-1,1])e.box(Math.round(a*i)-0,8,n,Math.round(a*i)+(a>0?2:-2),17+Math.round(r),n+1,t,.03)}e.box(-9,17,-14,9,18,-12,8375440,.02),e.box(-8,10,-12,8,15,8,(e,t,n)=>Uf([4928548,5652524,4140063],e,t,n,171),.07),Kf(e,-7,8,-14,-6,14,-34,9067056,3),Kf(e,6,8,-14,5,14,-34,9067056,3),e.box(-4,0,14,4,8,17,11580600,.03);for(let t=-7;t<=7;t++)for(let n=0;n<=14;n++){let r=Math.hypot(t+.5,n-6.5);r<7.5&&r>3.5&&e.set(t,n,15,r>6?2763306:3815996,.03)}e.box(-1,5,14,2,8,18,15317566,.02);for(let t of[-8,6])e.box(t,0,-22,t+3,8,-19,9067056,.04);return e}function bp(){let e=new H,t=9068086;for(let n of[-40,38])for(let r of[-8,6])e.box(n,0,r,n+3,50,r+3,t,.04);for(let n of[-40,38])e.box(n,46,-8,n+3,49,9,t,.04),Kf(e,n+1,12,-8,n+1,40,0,t,2);for(let t of[47,36])e.box(-40,t,-2,41,t+2,1,10119740,.04);let n=[[9225035,6134319],[6464326,4094508],[10321094,7098266],[11777612,8817713]],r=0;for(let t=-34;t<=34;t+=8,r++){let i=r%2?36:47,a=n[r%4],o=13+r%3*2;e.box(t,i-4,-1,t+1,i,0,13220234,.03);for(let n=0;n<o;n++){let r=n/o,s=1+Math.sin(Math.min(1,(1-r)*1.1+.05)*Math.PI)*3.2;for(let r=-4;r<=4;r++)for(let o=-4;o<=4;o++){if(Math.hypot(r,o)>s+(xl(r+t,n,o,181)-.5))continue;let c=xl(r+t,n,o,182)>.5?a[0]:a[1];e.set(t+r,i-4-n,o,xl(r,n,o+t,183)>.9?15764014:c,.06)}}}return e}function xp(){let e=new H;e.box(-4,0,-3,-1,3,4,3811868,.03),e.box(1,0,-3,4,3,4,3811868,.03),e.box(-4,3,-3,4,11,3,(e,t,n)=>Uf([3829685,4159680],e,t,n,191),.04),e.box(-3,6,3,3,11,5,16052454,.03),e.box(-2,4,3,2,6,5,15262938,.03),e.box(-3,3,3,3,4,4,2763306,.02),e.box(-1,8,5,1,10,7,15247211,.03),e.box(-5,6,-1,-4,10,1,3829685,.03),e.box(4,6,-1,5,10,1,3829685,.03),e.box(-3,11,-3,3,13,3,15247211,.02);for(let t=0;t<14;t++){let n=Math.max(0,4.5-t*.33);for(let r=-5;r<=5;r++)for(let i=-5;i<=5;i++)Math.hypot(r+.5,i+.5)<n+.5&&e.set(r,13+t,i,(r+t)%5==0?14240314:12859950,.04)}return e}var Sp={M:[`10001`,`11011`,`10101`,`10001`,`10001`,`10001`,`10001`],O:[`01110`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],T:[`11111`,`00100`,`00100`,`00100`,`00100`,`00100`,`00100`],A:[`01110`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],Y:[`10001`,`10001`,`01010`,`00100`,`00100`,`00100`,`00100`],H:[`10001`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],E:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`11111`]," ":[`000`,`000`,`000`,`000`,`000`,`000`,`000`]};function Cp(){let e=new H,t=`MOTA MAYHEM`,n=0;for(let e of t)n+=Sp[e][0].length+1;--n;let r=n+8,i=-Math.floor(r/2);for(let t of[i+3,i+r-6])e.box(t,0,-2,t+3,17,1,8016432,.04);e.box(i,7,1,i+r,18,4,(e,t)=>t===7||t===17||e===i||e===i+r-1?6111012:Uf([11962968,11370832,12555106],e>>3,t>>1,0,201),.03),e.box(i+1,8,4,i+r-1,17,5,3097632,.02);let a=i+4;for(let n of t){let t=Sp[n],r=t[0].length;for(let n=0;n<7;n++)for(let i=0;i<r;i++)t[n][i]===`1`&&e.set(a+i,15-n,5,15984560,.03);a+=r+1}return e.box(i+r-8,18,1,i+r-5,19,4,6111012,0),e}function wp(){let e=new Fn,t=[];Gf(e,Xf(),1/qf,!1,64);let n=new H;for(let[e,t,r,i]of[[-15,-13.2,1.5,15764144],[-17.5,-12.8,1.2,16184298],[15.5,-13.2,1.6,11832296],[18,-12.6,1.2,16184298],[-12.2,-13.4,1.3,16110919],[12.2,-13.4,1.3,15764144],[-19,2,1.4,16184298],[19,0,1.3,15764144],[-19,9,1.5,11832296],[19,9,1.4,16110919],[-9,13,1.2,16184298],[9.5,13,1.3,15764144],[-17,12.5,1.5,16110919],[17.5,12.5,1.4,16184298]])Zf(n,Math.round(e*qf),Math.round(t*qf),Math.round(r*qf),i);Gf(e,n,1/qf,!0,64);let r=Qf();Gf(e,r.m,1/r.S,!1,48);let i=new ci(new Mi(900,900),new Gi({color:new B(4885043)}));i.rotation.x=-Math.PI/2,i.position.y=-.27,i.receiveShadow=!0,e.add(i),Gf(e,$f(),.25,!0,40),tp(e);let a=rp();Gf(e,a.shell,1/8,!0,64);let o=Gf(e,a.roof,1/8,!0,64),s=Gf(e,a.facade,1/8,!0,64),c=ip(),l=ap(),u=[];zf.forEach((n,r)=>{Wf(e,c,1/16,n.x,0,n.z),t.push({x0:n.x-Rf.w/2+.05,x1:n.x+Rf.w/2-.05,z0:n.z-Rf.d/2+.05,z1:n.z+Rf.d/2-.05}),Bf.forEach(([t,i],a)=>{let o=new Gi({vertexColors:!0}),s=Wf(e,l,vu,n.x+t,Vf,n.z+i,0,[0,0,0],o,!1);s.castShadow=!1,u.push({x:n.x+t,z:n.z+i,y:Vf,bed:r,index:u.length,patch:s,patchMat:o})})});let d=dp(),f=1/sp;Wf(e,d.shell,f,op.x,0,op.z);let p=Wf(e,d.roof,f,op.x,0,op.z),m=up(cp.z1)+.06,h=new Fn;h.add(Nl(fp(1),f)),h.position.set(lp(cp.door0),0,m),e.add(h);let g=new Fn;g.add(Nl(fp(-1),f)),g.position.set(lp(cp.door1),0,m),e.add(g),Wf(e,mp(),f,op.x,0,op.z);let _={};for(let e of ou)_[e]=ed(e).build(f);let v=_.bd,y=pp().build(f),b=[];for(let e of cp.beams)for(let t of cp.pegs)b.push([lp(t+.5),up(e)]);let x=b.map(([t,n])=>{let r=new ci(v,Ml);return r.position.set(t,1.05,n),r.scale.setScalar(1.45),r.castShadow=!0,r.visible=!1,e.add(r),{x:t,z:n,y:0,mesh:r,item:null,nug:!0}}),S=[-3.35,-3.9,-4.45,-5,-5.55,-6.1],C=[13.95,18.05].flatMap(e=>S.map(t=>[e,t])).map(([t,n])=>{let r=new ci(y,Ml);return r.position.set(t,.62,n),r.scale.setScalar(1.4),r.castShadow=!0,r.visible=!1,e.add(r),{x:t,z:n,y:.62,mesh:r,item:null}});t.push({x0:12.85,x1:19.2,z0:-12.35,z1:-11.55},{x0:12.85,x1:13.42,z0:-12.2,z1:-2.15},{x0:18.62,x1:19.2,z0:-12.2,z1:-2.15},{x0:12.85,x1:13.55,z0:-2.55,z1:-2.15},{x0:15.72,x1:19.2,z0:-2.55,z1:-2.15});let w={roof:p,doorL:h,doorR:g,open:!1,door:{x:14.62,z:-1.62},doorBlocks:[{x0:13.68,x1:15.68,z0:-2.7,z1:-1.9}],hooks:x,cureJars:C,nugGeo:_,contains(e,t){return e>13.5&&e<18.5&&t<-2.6&&t>-11.5}},T=hp();Wf(e,T.frame,1/16,-16,0,-9);let E=new Gi({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1}),ee=Wf(e,T.glass,1/16,-16,0,-9,0,[0,0,0],E,!1);ee.renderOrder=2,t.push({x0:-19.1,x1:-12.9,z0:-12.1,z1:-5.9});let D=new H;D.box(-4,0,-4,4,6,4,12739898,.05),D.box(-5,6,-5,5,8,5,13792586,.05),D.box(-4,8,-4,4,9,4,4928548,.05),[-1.7,-.55,.6,1.75].forEach((t,n)=>{Wf(e,D,1/16,-16+t,17/16,-10.8);let r=Nl(Qu(1+n%2,ou[n%ou.length]),bu);r.position.set(-16+t,1.625,-10.8),r.scale.setScalar(.5),e.add(r)}),Wf(e,gp(),1/16,-16.5,0,6.5,.15),t.push({x0:-19.2,x1:-13.8,z0:4.4,z1:8.9}),Wf(e,_p(),1/16,12,0,-6.2),t.push({x0:11.4,x1:12.6,z0:-6.8,z1:-5.6}),Wf(e,vp(),1/16,16.5,0,11),t.push({x0:15,x1:18,z0:9.7,z1:12.4}),Wf(e,yp(),1/16,-12.6,0,3.8,-.5),t.push({x0:-13.6,x1:-11.6,z0:2.4,z1:5.4}),Wf(e,bp(),1/16,16.5,0,3.2),t.push({x0:13.8,x1:19.2,z0:2.4,z1:3.9}),Wf(e,xp(),.06,-11.5,0,9.5,.4),t.push({x0:-11.8,x1:-11.2,z0:9.2,z1:9.8}),Wf(e,Cp(),3/32,-6.5,0,11.6),t.push({x0:-9.2,x1:-3.8,z0:11.4,z1:11.8});let O=Gd(e,t,{roof:o,facade:s}),k=If(e,t,O,zf.map(e=>({x:e.x,z:e.z,bed:0}))),A=new z(66/8,140/8,-139/8);function j(e,t,n=0){let r=O.house;if(r.onStair(e,t,n))return r.stairHeight(t);if(n>2.2&&r.onLoft(e,t))return sd.y;let i=O.warehouse;if(i.contains(e,t)||i.owned&&i.open&&Math.abs(t)<1.35&&e>22.2&&e<24.4)return 2/12;if(Math.abs(e)<od.half-.25&&t<=-14.15&&t>od.back-.15||Math.abs(e)<5&&t<-11&&t>-14.2)return 6/8;if(Math.abs(e)<4){if(t>=-11&&t<-10.375)return 4/8;if(t>=-10.375&&t<-9.75)return 2/8}return 0}return{group:e,colliders:t,slots:u,groundHeight:j,smokeAt:A,shed:w,scenery:k,...O}}var Tp=class{constructor(e,t=900){this.max=t,this.list=[];let n=new ji(1,1,1),r=new Xr({color:16777215,depthWrite:!1});this.mesh=new bi(n,r,t),this.mesh.instanceMatrix.setUsage(Je),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=3,this.mesh.setColorAt(0,new B(1,1,1)),e.add(this.mesh),this.tmp=new Pn,this.col=new B}emit(e){this.list.length>=this.max&&this.list.shift(),this.list.push({x:e.x,y:e.y,z:e.z,vx:e.vx||0,vy:e.vy||0,vz:e.vz||0,g:e.g===void 0?-9:e.g,life:e.life||.6,age:0,size:e.size||.08,grow:e.grow||0,color:e.color===void 0?16777215:e.color,color2:e.color2,drag:e.drag||0})}update(e){let t=this.list,n=0;for(let r=0;r<t.length;r++){let i=t[r];if(i.age+=e,i.age>=i.life)continue;if(i.vy+=i.g*e,i.drag){let t=Math.max(0,1-i.drag*e);i.vx*=t,i.vz*=t}i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.y<.02&&i.g<0&&(i.y=.02,i.vy*=-.2,i.vx*=.6,i.vz*=.6);let a=i.age/i.life,o=i.size*(1+i.grow*a);a>.7&&(o*=Math.max(0,1-(a-.7)/.3)),this.tmp.position.set(i.x,i.y,i.z),this.tmp.scale.setScalar(o),this.tmp.updateMatrix(),this.mesh.setMatrixAt(n,this.tmp.matrix),this.col.set(i.color),i.color2!==void 0&&this.col.lerp(new B(i.color2),a),this.mesh.setColorAt(n,this.col),t[n]=i,n++}t.length=n,this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},Ep=[[16751150,2759184],[16316142,9079434],[16769098,3811856],[7321599,1845834]],Dp=class{constructor(e,t=7){this.items=[];for(let n=0;n<t;n++){let[t,r]=Ep[n%Ep.length],i=new H;i.box(0,0,-2,4,1,3,(e,n,i)=>e===3||i===-2?r:t,0),i.box(0,0,3,3,1,5,t,0);let a=[0,0,0],o=new H;o.box(-1,0,-3,1,1,4,2760728,0);let s=new Fn,c=Nl(o,.034,[0,0,0],void 0,!1);s.add(c);let l=new Fn,u=new Fn,d=Nl(i,.034,a,void 0,!1);d.scale.x=-1,l.add(d),u.add(Nl(i,.034,a,void 0,!1)),l.position.x=-.03,u.position.x=.03,s.add(l,u),e.add(s),this.items.push({g:s,wl:l,wr:u,cx:(Math.random()-.5)*30,cz:(Math.random()-.5)*20,r1:2+Math.random()*4,r2:1.5+Math.random()*3,s1:.15+Math.random()*.2,s2:.2+Math.random()*.2,ph:Math.random()*10,h:1+Math.random()*.8})}}pos(e,t){let n=t*e.s1+e.ph,r=t*e.s2+e.ph*2;return[e.cx+Math.cos(n)*e.r1+Math.sin(r*1.7)*.8,e.h+Math.sin(t*1.3+e.ph)*.35,e.cz+Math.sin(n*1.3)*e.r2+Math.cos(r)*.6]}update(e){for(let t of this.items){let[n,r,i]=this.pos(t,e),[a,,o]=this.pos(t,e+.05);t.g.position.set(n,r,i),t.g.rotation.y=Math.atan2(a-n,o-i);let s=Math.sin(e*22+t.ph)*.9+.3;t.wl.rotation.z=-s,t.wr.rotation.z=s}}},Op=`mm-save-v1`,kp=null;function Ap(e=kp){return e?`${Op}:${e}`:Op}function jp(e){try{let t=JSON.parse(localStorage.getItem(e)||`null`);return!t||t.v!==1?null:t}catch{return null}}function Mp(){return jp(Ap())}function Np(e){kp=e;let t=jp(Ap(e));if(t)return{note:`loaded`,save:t};let n=jp(Op);if(n){try{localStorage.setItem(Ap(e),JSON.stringify(n)),localStorage.removeItem(Op)}catch{}return{note:`claimed`,save:n}}return{note:`new`,save:null}}function Pp(){kp=null}function Fp(e,t=!0){let n={v:1,...e};(t||!Number.isFinite(Number(n.savedAt)))&&(n.savedAt=Date.now());try{return localStorage.setItem(Ap(),JSON.stringify(n)),n}catch{return null}}var Ip=t((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bech32m=e.bech32=void 0;var t=`qpzry9x8gf2tvdw0s3jn54khce6mua7l`,n={};for(let e=0;e<32;e++){let r=t.charAt(e);n[r]=e}function r(e){let t=e>>25;return(e&33554431)<<5^-((t|0)&1)&996825010^-(t>>1&1)&642813549^-(t>>2&1)&513874426^-(t>>3&1)&1027748829^-(t>>4&1)&705979059}function i(e){let t=1;for(let n=0;n<e.length;++n){let i=e.charCodeAt(n);if(i<33||i>126)return`Invalid prefix (`+e+`)`;t=r(t)^i>>5}t=r(t);for(let n=0;n<e.length;++n){let i=e.charCodeAt(n);t=r(t)^i&31}return t}function a(e,t,n,r){let i=0,a=0,o=(1<<n)-1,s=[];for(let r=0;r<e.length;++r)for(i=i<<t|e[r],a+=t;a>=n;)a-=n,s.push(i>>a&o);if(r)a>0&&s.push(i<<n-a&o);else{if(a>=t)return`Excess padding`;if(i<<n-a&o)return`Non-zero padding`}return s}function o(e){return a(e,8,5,!0)}function s(e){let t=a(e,5,8,!1);if(Array.isArray(t))return t}function c(e){let t=a(e,5,8,!1);if(Array.isArray(t))return t;throw Error(t)}function l(e){let a;a=e===`bech32`?1:734539939;function l(e,n,o){if(o||=90,e.length+7+n.length>o)throw TypeError(`Exceeds length limit`);e=e.toLowerCase();let s=i(e);if(typeof s==`string`)throw Error(s);let c=e+`1`;for(let e=0;e<n.length;++e){let i=n[e];if(i>>5)throw Error(`Non 5-bit word`);s=r(s)^i,c+=t.charAt(i)}for(let e=0;e<6;++e)s=r(s);s^=a;for(let e=0;e<6;++e){let n=s>>(5-e)*5&31;c+=t.charAt(n)}return c}function u(e,t){if(t||=90,e.length<8)return e+` too short`;if(e.length>t)return`Exceeds length limit`;let o=e.toLowerCase(),s=e.toUpperCase();if(e!==o&&e!==s)return`Mixed-case string `+e;e=o;let c=e.lastIndexOf(`1`);if(c===-1)return`No separator character for `+e;if(c===0)return`Missing prefix for `+e;let l=e.slice(0,c),u=e.slice(c+1);if(u.length<6)return`Data too short`;let d=i(l);if(typeof d==`string`)return d;let f=[];for(let e=0;e<u.length;++e){let t=u.charAt(e),i=n[t];if(i===void 0)return`Unknown character `+t;d=r(d)^i,e+6>=u.length||f.push(i)}return d===a?{prefix:l,words:f}:`Invalid checksum for `+e}function d(e,t){let n=u(e,t);if(typeof n==`object`)return n}function f(e,t){let n=u(e,t);if(typeof n==`object`)return n;throw Error(n)}return{decodeUnsafe:d,decode:f,encode:l,toWords:o,fromWordsUnsafe:s,fromWords:c}}e.bech32=l(`bech32`),e.bech32m=l(`bech32m`)}))(),Lp=Object.freeze,Rp=57896044618658097711785492504343953926634992332820282019728792003956564819949n,zp=7237005577332262213973186563042994240857116359379907606001950938285454250989n,Bp=37095705934669439343138083508754565189542113879843219016388785533085940283555n,Vp=15112221349535400772501151409588531511454012693041857206046113283949847762202n,Hp=46316835694926478169428394003475163141307993866256225615783033603165251855960n,Up=Rp-1n,Wp=Lp({p:Rp,n:zp,h:8n,a:Up,d:Bp,Gx:Vp,Gy:Hp}),Gp=32,Kp=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&e.BYTES_PER_ELEMENT===1,qp=(e,t,n=``)=>{if(Kp(e)&&(t===void 0||e.length===t))return e;let r=Kp(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=(n?`"${n}" `:``)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)},Jp=(e,t=``,n)=>Uint8Array.from(qp(e,n,t)),Yp=(e,t)=>e.toString(16).padStart(t,`0`),Xp=e=>{let t=``;for(let n of qp(e))t+=Yp(n,2);return t},Zp=e=>{let t=`hex invalid`;if(typeof e!=`string`)throw TypeError(t);if(e.length%2||!/^[\da-f]*$/i.test(e))throw RangeError(t);let n=new Uint8Array(e.length/2);for(let t=0,r=0;t<n.length;t++,r+=2){let i=e.charCodeAt(r),a=e.charCodeAt(r+1);n[t]=((i&15)+(i>>6)*9)*16+(a&15)+(a>>6)*9}return n},Qp=(...e)=>{let t=0;for(let n of e)t+=qp(n).length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n},$p=(e,t,n,r=`bad number: out of range`)=>{if(typeof e!=`bigint`)throw TypeError(r);if(t<=e&&e<n)return e;throw RangeError(r)},em=(e,t=Rp)=>(e%=t)>=0n?e:t+e,tm=(1n<<255n)-1n,q=e=>{if(e<0n)throw RangeError(`negative coordinate`);let t=(e>>255n)*19n+(e&tm);return t=(t>>255n)*19n+(t&tm),t%Rp},nm=e=>em(e,zp),rm=(e,t)=>{if(e===0n)throw Error(`invert: expected non-zero number`);if(t<=1n)throw Error(`invert: expected modulus > 1, got `+t);let n=em(e,t),r=t,i=0n,a=1n;for(;n!==0n;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==1n)throw Error(`invert: does not exist`);return em(i,t)},im=e=>{let t=Sm[e];if(typeof t!=`function`)throw Error(`hashes.`+e+` not set`);return t},am=(e,...t)=>qp(im(e)(Qp(...t)),64,`digest`),om=e=>{if(e instanceof cm)return e;throw TypeError(`Point expected`)},sm=2n**256n,cm=class e{static BASE;static ZERO;X;Y;Z;T;constructor(e,t,n,r){let i=sm;this.X=$p(e,0n,i),this.Y=$p(t,0n,i),this.Z=$p(n,1n,i),this.T=$p(r,0n,i),Lp(this)}static CURVE(){return Wp}static fromAffine(t){return new e(t.x,t.y,1n,q(t.x*t.y))}static fromBytes(t,n=!1){let r=Jp(t,`point`,Gp),i=r[31];r[31]=i&-129;let a=fm(r);n||$p(a,0n,Rp);let o=q(a*a),{isValid:s,value:c}=gm(em(o-1n),q(Bp*o+1n));if(!s)throw Error(`bad point: y not sqrt`);let l=!!(i&128);if(!n&&c===0n&&l)throw Error(`bad point: x==0, isLastByteOdd`);return l!==!!(c&1n)&&(c=em(-c)),new e(c,a,1n,q(c*a))}static fromHex(t,n){return e.fromBytes(Zp(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){let e=Up,t=Bp,n=this;if(n.is0())throw Error(`bad point: ZERO`);let{X:r,Y:i,Z:a,T:o}=n,s=q(r*r),c=q(i*i),l=q(a*a),u=q(l*l);if(q(l*(q(s*e)+c))!==em(u+q(t*q(s*c))))throw Error(`bad point: equation left != right (1)`);if(q(r*i)!==q(a*o))throw Error(`bad point: equation left != right (2)`);return this}equals(e){let{X:t,Y:n,Z:r}=this,{X:i,Y:a,Z:o}=om(e);return q(t*o)===q(i*r)&&q(n*o)===q(a*r)}is0(){return this.equals(um)}negate(){return new e(em(-this.X),this.Y,this.Z,em(-this.T))}double(){let{X:t,Y:n,Z:r}=this,i=Up,a=q(t*t),o=q(n*n),s=q(2n*r*r),c=q(i*a),l=em(t+n),u=em(q(l*l)-a-o),d=em(c+o),f=em(d-s),p=em(c-o),m=q(u*f),h=q(d*p),g=q(u*p),_=q(f*d);return new e(m,h,_,g)}add(t){let{X:n,Y:r,Z:i,T:a}=this,{X:o,Y:s,Z:c,T:l}=om(t),u=Up,d=Bp,f=q(n*o),p=q(r*s),m=q(q(a*d)*l),h=q(i*c),g=em(q(em(n+r)*em(o+s))-f-p),_=em(h-m),v=em(h+m),y=em(p-q(u*f)),b=q(g*_),x=q(v*y),S=q(g*y),C=q(_*v);return new e(b,x,C,S)}subtract(e){return this.add(om(e).negate())}multiply(e,t=!0){if(!t&&e===0n||($p(e,1n,zp),!t&&this.is0()))return um;if(e===1n)return this;if(this.equals(lm))return Em(e).p;let n=um,r=lm,i=this;for(let a=0;t?a<256:e>0n;a++)e&1n?n=n.add(i):t&&(r=r.add(i)),i=i.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:n}=this;if(this.equals(um))return{x:0n,y:1n};let r=rm(n,Rp);if(q(n*r)!==1n)throw Error(`invalid inverse`);return{x:q(e*r),y:q(t*r)}}toBytes(){let{x:e,y:t}=this.toAffine(),n=dm(t);return n[31]|=e&1n?128:0,n}toHex(){return Xp(this.toBytes())}clearCofactor(){return this.multiply(8n,!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return this.multiply(zp/2n,!1).double().add(this).is0()}},lm=new cm(Vp,Hp,1n,em(Vp*Hp)),um=new cm(0n,1n,1n,0n);cm.BASE=lm,cm.ZERO=um;var dm=e=>Zp(Yp($p(e,0n,sm),64)).reverse(),fm=e=>BigInt(`0x`+Xp(Uint8Array.from(qp(e)).reverse())),pm=(e,t)=>{let n=e;for(;t-->0;)n=q(n*n);return n},mm=e=>{let t=q(q(e*e)*e),n=q(pm(q(pm(t,2)*t),1)*e),r=q(pm(n,5)*n),i=q(pm(r,10)*r),a=q(pm(i,20)*i),o=q(pm(a,40)*a);return q(pm(q(pm(q(pm(q(pm(o,80)*o),80)*o),10)*r),2)*e)},hm=19681161376707505956807079304988542015446066515923890162744021073123829784752n,gm=(e,t)=>{let n=q(t*q(t*t)),r=q(e*q(n*mm(q(e*q(q(n*n)*t))))),i=q(t*q(r*r)),a=r,o=q(r*hm),s=i===e,c=i===em(-e),l=i===em(-e*hm);return s&&(r=a),(c||l)&&(r=o),(em(r)&1n)==1n&&(r=em(-r)),{isValid:s||c,value:r}},_m=e=>nm(fm(e)),vm=e=>e[1](am(`sha512`,e[0])),ym=e=>{if(typeof e!=`object`||!e)throw TypeError(`expected valid options object`);return e.zip215??!0},bm=(e,t,n,r)=>{e=qp(e,64,`signature`),t=qp(t,void 0,`message`),n=qp(n,Gp,`publicKey`);let i=ym(r),a=e.subarray(0,Gp),o=fm(e.subarray(Gp,64)),s,c,l,u=Uint8Array.of(),d=!1;try{s=cm.fromBytes(n,i),c=cm.fromBytes(a,i),l=lm.multiply(o,!1),u=Qp(a,n,t),d=!0}catch{}return[u,e=>{if(!d||!i&&s.isSmallOrder())return!1;let t=_m(e);return c.add(s.multiply(t,!1)).subtract(l).clearCofactor().is0()}]},xm=(e,t,n,r={})=>vm(bm(e,t,n,r)),Sm={sha512Async:async e=>{let t=globalThis?.crypto?.subtle;if(!t)throw Error(`crypto.subtle must be defined, consider polyfill`);return new Uint8Array(await t.digest(`SHA-512`,Qp(e)))},sha512:void 0},Cm=()=>{let e=[],t=lm,n;for(let r=0;r<33;r++){n=t,e.push(n);for(let r=1;r<128;r++)n=n.add(t),e.push(n);t=n.double()}return e},wm=void 0,Tm=(e,t)=>{let n=t.negate();return e?n:t},Em=e=>{let t=wm||=Cm(),n=um,r=lm;for(let i=0;i<33;i++){let a=Number(e&255n);e>>=8n,a>128&&(a-=256,e+=1n);let o=i*128,s=o+Math.abs(a)-1,c=i%2!=0,l=a<0;a===0?r=r.add(Tm(c,t[o])):n=n.add(Tm(l,t[s]))}if(e!==0n)throw Error(`invalid wnaf`);return{p:n,f:r}},Dm=BigInt(2**32-1),Om=BigInt(32);function km(e,t=!1){return t?{h:Number(e&Dm),l:Number(e>>Om&Dm)}:{h:Number(e>>Om&Dm)|0,l:Number(e&Dm)|0}}function Am(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=km(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var jm=e=>e/2**32|0,Mm=e=>e>>>0;function Nm(e,t,n,r){let i=jm(n),a=Mm(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var Pm=(e,t,n)=>e>>>n,Fm=(e,t,n)=>e<<32-n|t>>>n,Im=(e,t,n)=>e>>>n|t<<32-n,Lm=(e,t,n)=>e<<32-n|t>>>n,Rm=(e,t,n)=>e<<64-n|t>>>n-32,zm=(e,t,n)=>e>>>n-32|t<<64-n;function Bm(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var Vm=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),Hm=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,Um=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),Wm=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,Gm=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),Km=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function qm(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var Jm=e=>e?`"${e}" `:``;function Ym(e,t=``){if(typeof e!=`number`)throw TypeError(Jm(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(Jm(t)+`expected integer >= 0, got `+e);return e}function Xm(e,t=``){if(typeof e!=`boolean`)throw TypeError(Jm(t)+`expected boolean, got type=`+typeof e);return e}function Zm(e,t,n=``){if(qm(e)&&(t===void 0||e.length===t))return e;t!==void 0&&Ym(t,`length`);let r=qm(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=Jm(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}var Qm=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},$m=(e,t)=>{Qm(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function eh(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function th(e,t){Zm(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function nh(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function rh(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function ih(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}var ah=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function oh(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}function sh(e){for(let t=0;t<e.length;t++)e[t]=oh(e[t]);return e}var ch=ah?e=>e:sh;function lh(e,t,n=`opts`){return $m(e,`defaults`),t!==void 0&&$m(t,n),Object.assign(Object.create(null),e,t)}function uh(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=lh({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}var dh=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])}),fh=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=ih(this.buffer)}update(e){eh(this),Zm(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=ih(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){eh(this),th(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),Nm(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:ih(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},ph=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),mh=Am(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),hh=mh[0],gh=mh[1],_h=new Uint32Array(80),vh=new Uint32Array(80),yh=class extends fh{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)_h[n]=e.getUint32(t),vh[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=_h[e-15]|0,n=vh[e-15]|0,r=Im(t,n,1)^Im(t,n,8)^Pm(t,n,7),i=Lm(t,n,1)^Lm(t,n,8)^Fm(t,n,7),a=_h[e-2]|0,o=vh[e-2]|0,s=Im(a,o,19)^Rm(a,o,61)^Pm(a,o,6),c=Um(i,Lm(a,o,19)^zm(a,o,61)^Fm(a,o,6),vh[e-7],vh[e-16]),l=Wm(c,r,s,_h[e-7],_h[e-16]);_h[e]=l|0,vh[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=Im(u,d,14)^Im(u,d,18)^Rm(u,d,41),v=Lm(u,d,14)^Lm(u,d,18)^zm(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=Gm(_,v,b,gh[e],vh[e]),S=Km(x,g,t,y,hh[e],_h[e]),C=x|0,w=Im(n,r,28)^Rm(n,r,34)^Rm(n,r,39),T=Lm(n,r,28)^zm(n,r,34)^zm(n,r,39),E=n&i^n&o^i&o,ee=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=Bm(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let D=Vm(C,T,ee);n=Hm(D,S,w,E),r=D|0}({h:n,l:r}=Bm(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=Bm(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=Bm(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=Bm(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=Bm(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=Bm(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=Bm(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=Bm(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){rh(_h,vh)}destroy(){this.destroyed=!0,rh(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},bh=class extends yh{constructor(){super(64,ph)}},xh=uh(()=>new bh,dh(3)),Sh=BigInt(0),Ch=BigInt(1),wh=BigInt(2),Th=BigInt(7),Eh=BigInt(256),Dh=BigInt(113),Oh=[],kh=[],Ah=[];for(let e=0,t=Ch,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],Oh.push(2*(5*r+n)),kh.push((e+1)*(e+2)/2%64);let i=Sh;for(let e=0;e<7;e++)t=(t<<Ch^(t>>Th)*Dh)%Eh,t&wh&&(i^=Ch<<(Ch<<BigInt(e))-Ch);Ah.push(i)}var jh=Am(Ah,!0),Mh=jh[0],Nh=jh[1],Ph=(e,t,n)=>e<<n|t>>>32-n,Fh=(e,t,n)=>t<<n|e>>>32-n,Ih=(e,t,n)=>t<<n-32|e>>>64-n,Lh=(e,t,n)=>e<<n-32|t>>>64-n,Rh=(e,t,n)=>n>32?Ih(e,t,n):Ph(e,t,n),zh=(e,t,n)=>n>32?Lh(e,t,n):Fh(e,t,n),Bh=new Uint32Array(10);function Vh(e,t=24){if(!(e instanceof Uint32Array))throw TypeError(`"s" expected Uint32Array(50), got type=`+typeof e);if(e.length!==50)throw RangeError(`"s" expected Uint32Array(50), got length=`+e.length);if(Ym(t,`rounds`),t<1||t>24)throw Error(`"rounds" expected integer 1..24`);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)Bh[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,r=(t+2)%10,i=Bh[r],a=Bh[r+1],o=Rh(i,a,1)^Bh[n],s=zh(i,a,1)^Bh[n+1];for(let n=0;n<50;n+=10)e[t+n]^=o,e[t+n+1]^=s}let t=e[2],r=e[3];for(let n=0;n<24;n++){let i=kh[n],a=Rh(t,r,i),o=zh(t,r,i),s=Oh[n];t=e[s],r=e[s+1],e[s]=a,e[s+1]=o}for(let t=0;t<50;t+=10){let n=e[t],r=e[t+1],i=e[t+2],a=e[t+3];e[t]^=~e[t+2]&e[t+4],e[t+1]^=~e[t+3]&e[t+5],e[t+2]^=~e[t+4]&e[t+6],e[t+3]^=~e[t+5]&e[t+7],e[t+4]^=~e[t+6]&e[t+8],e[t+5]^=~e[t+7]&e[t+9],e[t+6]^=~e[t+8]&n,e[t+7]^=~e[t+9]&r,e[t+8]^=~n&i,e[t+9]^=~r&a}e[0]^=Mh[n],e[1]^=Nh[n]}rh(Bh)}var Hh=class e{state;pos=0;posOut=0;finished=!1;state32;destroyed=!1;blockLen;suffix;outputLen;canXOF;enableXOF=!1;rounds;constructor(e,t,n,r=!1,i=24){if(Ym(e,`blockLen`),Ym(t,`suffix`),Ym(i,`rounds`),Xm(r,`enableXOF`),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=r,this.canXOF=r,this.rounds=i,Ym(n,`outputLen`),!(0<e&&e<200))throw Error(`"blockLen" must be 1..199`);this.state=new Uint8Array(200),this.state32=nh(this.state)}clone(){return this._cloneInto()}keccak(){ch(this.state32),Vh(this.state32,this.rounds),ch(this.state32),this.posOut=0,this.pos=0}update(e){eh(this),Zm(e);let{blockLen:t,state:n,state32:r}=this,i=e.length,a=t%4==0&&e.byteOffset%4==0,o=t/4,s=a&&i>=t?nh(e):void 0;for(let a=0;a<i;){if(s!==void 0&&this.pos===0&&a%4==0&&i-a>=t){for(let e=0,t=a/4;e<o;e++)r[e]^=s[t+e];a+=t,this.pos=t,this.keccak();continue}let c=Math.min(t-this.pos,i-a);for(let t=0;t<c;t++)n[this.pos++]^=e[a++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:n,blockLen:r}=this;e[n]^=t,t&128&&n===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){eh(this,!1),Zm(e),this.finish();let t=this.state,{blockLen:n}=this;for(let r=0,i=e.length;r<i;){this.posOut>=n&&this.keccak();let a=Math.min(n-this.posOut,i-r);e.set(t.subarray(this.posOut,this.posOut+a),r),this.posOut+=a,r+=a}return e}xofInto(e){if(!this.enableXOF)throw Error(`XOF is not enabled`);return this.writeInto(e)}xof(e){return Ym(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(th(e,this),this.finished)throw Error(`digest() was already called`);this.writeInto(e.length===this.outputLen?e:e.subarray(0,this.outputLen)),this.destroy()}digest(){let e=new Uint8Array(this.outputLen);return this.digestInto(e),e}destroy(){this.destroyed=!0,rh(this.state)}_cloneInto(t){let{blockLen:n,suffix:r,outputLen:i,rounds:a,enableXOF:o}=this;return t||=new e(n,r,i,o,a),t.blockLen=n,t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=a,t.suffix=r,t.outputLen=i,t.enableXOF=o,t.canXOF=this.canXOF,t.destroyed=this.destroyed,t}},Uh=((e,t,n,r={})=>uh(()=>new Hh(t,e,n),r))(1,136,32);Sm.sha512=xh;var Wh=`Klever Signed Message:
`;function Gh(e){if(typeof e!=`string`||!e.startsWith(`klv1`))return null;let t;try{t=Ip.bech32.decode(e,120)}catch{return null}if(t.prefix!==`klv`)return null;let n=Uint8Array.from(Ip.bech32.fromWords(t.words));return n.length===32?n:null}function Kh(e){let t=String(e),n=new TextEncoder().encode(Wh),r=new TextEncoder().encode(String(t.length)),i=new TextEncoder().encode(t),a=new Uint8Array(n.length+r.length+i.length);return a.set(n,0),a.set(r,n.length),a.set(i,n.length+r.length),Uh(a)}function qh(e){let t=e==null?``:String(e).trim().replace(/^0x/i,``);if(/^[0-9a-fA-F]+$/.test(t)&&t.length%2==0){let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++)e[n]=Number.parseInt(t.slice(n*2,n*2+2),16);return e}try{let e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);if(n.length===128){let e=String.fromCharCode(...n);if(/^[0-9a-fA-F]{128}$/.test(e)){let t=new Uint8Array(64);for(let n=0;n<t.length;n++)t[n]=Number.parseInt(e.slice(n*2,n*2+2),16);return t}}return n}catch{return new Uint8Array}}function Jh(e,t,n){let r=Gh(n),i=qh(t);if(!r||i.length<64)return!1;let a=i.length===64?i:i.slice(0,64),o=Kh(e);try{return xm(a,o,r)?!0:xm(a,new TextEncoder().encode(String(e)),r)}catch{return!1}}var Yh=`mm-klever-session`,Xh=`mm-klever-prompt-lock`,Zh=9e4,Qh=`https://chromewebstore.google.com/detail/klever-wallet/ifclboecfhkjbpmhgehodcjpciihhmif`,$h=`https://play.google.com/store/apps/details?id=finance.klever.bitcoin.wallet`,eg=`https://apps.apple.com/app/klever-wallet-bitcoin-crypto/id1615064243`,tg=/^klv1[02-9ac-hj-np-z]{20,}$/,ng=!1;function rg(){let e=navigator.userAgent||``;return/Android|iPhone|iPad|iPod/i.test(e)?!0:navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function ig(e){return!e||e.length<16?e||``:`${e.slice(0,8)}…${e.slice(-6)}`}function ag(){let e=new URL(location.href);return e.searchParams.set(`klever`,`1`),e.hash=``,e.toString()}function og(e,t){let n=Error(t);return n.code=e,n}function sg(e,t=0,n=!0){if(e==null||t>8)return``;if(typeof e==`string`){let r=e.trim();if(r.startsWith(`{`)||r.startsWith(`[`))try{return sg(JSON.parse(r),t+1,!1)}catch{return``}return n?r:``}if(ArrayBuffer.isView(e)&&e.byteLength===64)return[...new Uint8Array(e.buffer,e.byteOffset,e.byteLength)].map(e=>e.toString(16).padStart(2,`0`)).join(``);if(Array.isArray(e)){if(e.length===64&&e.every(e=>Number.isInteger(e)&&e>=0&&e<=255))return e.map(e=>e.toString(16).padStart(2,`0`)).join(``);for(let n of e){let e=sg(n,t+1);if(e)return e}return``}if(typeof e!=`object`)return``;for(let n of[`signature`,`sig`,`hex`,`bytes`])if(e[n]!=null){let r=sg(e[n],t+1,!0);if(r)return r}if(typeof e.toHex==`function`){let n=sg(e.toHex(),t+1,!0);if(n)return n}for(let n of[`result`,`data`,`response`,`payload`])if(e[n]!=null){let r=sg(e[n],t+1,!1);if(r)return r}return``}function cg(){try{let e=Number(localStorage.getItem(Xh)||0);return Number.isFinite(e)&&Date.now()-e<Zh}catch{return!1}}function lg(){try{localStorage.setItem(Xh,String(Date.now()))}catch{}}function ug(){let e=`${Math.round(window.innerHeight)}px`;document.documentElement.style.setProperty(`--sign-lock-h`,e),document.documentElement.classList.add(`wallet-signing`)}function dg(){document.documentElement.classList.remove(`wallet-signing`),document.documentElement.style.removeProperty(`--sign-lock-h`)}function fg(e){let t=window.kleverWallet,n=window.kleverWalletEvents;return typeof t?.handleTransaction!=`function`||typeof n?.createEvent!=`function`||typeof n.addEventListener!=`function`?null:new Promise((r,i)=>{let a=n.createEvent({chain:`KLEVER`,type:`SIGN_MESSAGE`,transactionInfo:{siteUrl:location.href,hostname:location.hostname},preTransaction:e});n.addEventListener(a.id,e=>{e?.data?.status===`ACCEPTED`?r(e):i(og(`rejected`,`The Klever app closed the sign-in request.`))}),t.handleTransaction(JSON.stringify(a))})}async function pg(e,t){if(typeof e?.signMessage==`function`)return e.signMessage(t);let n=fg(t);if(n)return n;let r=window.__kleverBrowser__?.bridge;if(typeof r==`function`)return r({type:`SIGN_IN_MESSAGE`,network:`KLV`,chainId:`38`,data:t,url:location.href});throw og(`unsupported`,`This Klever Wallet version does not support message signing. Please update Klever Wallet and try again.`)}function mg(e=2e3){let t=performance.now();return new Promise(n=>{let r=()=>{window.kleverWeb?n(window.kleverWeb):performance.now()-t>=e?n(null):setTimeout(r,80)};r()})}async function hg(e,t){try{window.kleverHub&&typeof window.kleverHub.initialize==`function`?await window.kleverHub.initialize():typeof e.initialize==`function`&&await e.initialize()}catch{}let n=typeof e.getWalletAddress==`function`?e.getWalletAddress():e.address;if(!tg.test(n||``))throw og(`no-account`,t?`Choose a Klever account in the app, then connect again.`:`Open the Klever extension, choose an account, then connect again.`);return n}async function gg(){let e=rg(),t=await mg(e?Eg()?4e3:900:2500);if(!t)throw og(e?`mobile-app`:`extension`,e?`Open this page in the Klever Wallet app. The app will ask you to approve the connection.`:`Install the Klever Wallet extension, then press Connect wallet in Settings.`);return{kw:t,address:await hg(t,e),mobile:e}}function _g(e,t,n){return[`Mota Mayhem wants you to connect your Klever wallet.`,`This does not send any coins.`,`Address: ${e}`,`Nonce: ${t}`,`Issued: ${n}`].join(`
`)}async function vg(e,t,n,r=rg()){if(ng)throw og(`busy`,`A Klever signature request is already in progress. Please wait for it to finish.`);ng=!0,ug();try{let i=_g(t,e,new Date().toISOString()),a;try{document.activeElement&&document.activeElement!==document.body&&document.activeElement.blur(),a=await pg(n,i)}catch(e){throw e?.code===`rejected`||e?.code===`unsupported`?e:og(`rejected`,r?`The Klever app closed the connection request.`:`The Klever extension closed the connection request.`)}let o=sg(a);if(!o)throw og(`bad-signature`,`Klever returned an empty signature. Please try again.`);if(!Jh(i,o,t))throw og(`bad-signature`,`The signature does not match this Klever address.`);return{address:t,message:i,signature:o,nonce:e}}finally{dg(),ng=!1}}async function yg(){let{kw:e,address:t,mobile:n}=await gg(),r=await vg([...crypto.getRandomValues(new Uint8Array(16))].map(e=>e.toString(16).padStart(2,`0`)).join(``),t,e,n),i={address:r.address,message:r.message,signature:r.signature,at:Date.now()};return bg(i),i}function bg(e){let t=JSON.stringify(e);for(let e of[sessionStorage,localStorage])try{e.setItem(Yh,t)}catch{}}function xg(){for(let e of[sessionStorage,localStorage])try{e.removeItem(Yh)}catch{}}function Sg(){xg();for(let e of[sessionStorage,localStorage])try{e.removeItem(Xh)}catch{}}var Cg=`finance.klever.bitcoin.wallet`;function wg(e,t){let n=encodeURIComponent(e);return t?`intent://dp/browser?link=${n}#Intent;scheme=klever-wallet;package=${Cg};end`:`klever-wallet://dp/browser?link=${n}`}function Tg(){let e=/Android/i.test(navigator.userAgent),t=/iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;return!e&&!t?!1:(location.href=wg(ag(),e),!0)}function Eg(){if(window.kleverWeb||/Klever/i.test(navigator.userAgent||``))return!0;try{return new URLSearchParams(location.search).get(`klever`)===`1`}catch{return!1}}async function Dg(){let e=ag();try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`input`);t.value=e,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch{n=!1}return t.remove(),n}}function Og(e,t){let n=document.createElement(`button`);return n.type=`button`,n.className=`wallet-mini`,n.textContent=e,n.addEventListener(`click`,t),n}function kg(e,t){let n=document.createElement(`a`);return n.className=`wallet-mini`,n.href=e,n.target=`_blank`,n.rel=`noopener noreferrer`,n.textContent=t,n}function Ag(e,t){e.replaceChildren(),e.classList.remove(`hidden`);let n=document.createElement(`p`),r=document.createElement(`div`);r.className=`wallet-actions`,t===`mobile-app`?(n.textContent=`Connect wallet opens the Klever Wallet installed on this phone and asks you to approve the signature there. Install the app below only if it is not on this phone.`,rg()&&r.append(Og(`Open Klever Wallet`,()=>Tg())),r.append(Og(`Copy page link`,async e=>{let t=await Dg();e.currentTarget.textContent=t?`Link copied`:`Copy failed`}),kg($h,`Google Play`),kg(eg,`App Store`))):(n.textContent=`On a computer, the Klever Wallet extension asks you to approve the connection. Install it, refresh this page, and press Connect wallet again.`,r.append(kg(Qh,`Install the Klever extension`))),e.append(n,r)}var jg=`modulepreload`,Mg=function(e){return`/Mota-Mayhem/`+e},Ng={},Pg=function(e){return e.pathname.endsWith(`.css`)},Fg=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Ig=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Mg(t,n);let r=s(t),i=Pg(r);return Fg(Ng,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:jg,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Lg=`mm-cloud-token`,Rg=null,zg=0,Bg=null;function Vg(e){let t={BASE_URL:`/Mota-Mayhem/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1};return t&&typeof t[e]==`string`?t[e].trim():``}function Hg(e){return/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(e)||/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(e)}async function Ug(e){try{let t=await fetch(e,{cache:`no-store`});if(!t.ok||(t.headers.get(`content-type`)||``).includes(`text/html`))return null;let n=await t.json(),r=String(n?.url||``).trim().replace(/\/$/,``),i=String(n?.key||n?.anonKey||``).trim();return!r||!i||!Hg(r)?null:{url:r,key:i}}catch{return null}}async function Wg(){let e=Vg(`VITE_SUPABASE_URL`).replace(/\/$/,``),t=Vg(`VITE_SUPABASE_ANON_KEY`);if(e&&t&&Hg(e))return{url:e,key:t};let n=[new URL(`supabase.json`,document.baseURI).href];typeof window<`u`&&n.push(new URL(`/supabase.json`,window.location.origin).href);for(let e of n){let t=await Ug(e);if(t)return t}return{url:``,key:``}}function Gg(){return Rg||=Wg(),Rg}function Kg(e){try{let t=JSON.parse(sessionStorage.getItem(Lg)||`null`);if(t?.address===e&&typeof t.token==`string`&&Date.parse(t.expiresAt)>Date.now()+6e4)return t.token}catch{}return``}function qg(e,t,n){try{sessionStorage.setItem(Lg,JSON.stringify({address:e,token:t,expiresAt:n}))}catch{}}function Jg(){try{sessionStorage.removeItem(Lg)}catch{}}async function Yg(e,t=!1){let n=await Gg();if(!n.url||!n.key)return null;let r=await fetch(`${n.url}/functions/v1/grower`,{method:`POST`,keepalive:t,headers:{"content-type":`application/json`,apikey:n.key,authorization:`Bearer ${n.key}`},body:JSON.stringify(e)}),i=await r.json().catch(()=>({}));return{status:r.status,json:i}}async function Xg(e){let t=Kg(e.address);if(t)return t;let n;if(e.provider===`email`){let{freshAccessToken:t}=await Ig(async()=>{let{freshAccessToken:e}=await Promise.resolve().then(()=>i_);return{freshAccessToken:e}},void 0);n={op:`auth`,provider:`email`,accessToken:await t(e)}}else n={op:`auth`,address:e.address,message:e.message,signature:e.signature};let r=await Yg(n);if(!r||r.status!==200||typeof r.json.token!=`string`)throw Error(r?.json?.error||`The garden could not be opened.`);return qg(e.address,r.json.token,r.json.expiresAt),r.json.token}async function Zg(e,t,n){let r=await Xg(e),i=await Yg({...t,token:r},n);if(i?.status===401){Jg();let r=await Xg(e);i=await Yg({...t,token:r},n)}return i}function Qg(e){let t={...e};return Number.isFinite(Number(t.savedAt))||(t.savedAt=Date.now()),t}async function $g(e){let t=await Zg(e,{op:`load`},!1);if(!t||t.status!==200)throw Error(t?.json?.error||`The garden could not be opened.`);return t.json.garden?{garden:t.json.garden,revision:Number(t.json.revision)||0,savedAt:Number(t.json.savedAt)||0}:null}async function e_(e,t,n=!1){let r=Qg(t);r!==t&&(t.savedAt=r.savedAt);let i=await Zg(e,{op:`save`,garden:r},n);if(i?.status===409)return{conflict:!0,garden:i.json.garden,revision:Number(i.json.revision)||0,savedAt:Number(i.json.savedAt)||0};if(!i||i.status!==200)throw Error(i?.json?.error||`The garden could not be saved.`);return{revision:Number(i.json.revision)||0,savedAt:Number(i.json.savedAt)||0}}async function t_(e,t,n={open:!0},r=null){let i=await Gg();if(!i.url||!i.key)return{state:`off`,replaced:!1,garden:null};let a=await $g(e);if(!n.open)return{state:`error`,replaced:!1,garden:null};let o=Number(t?.savedAt)||0,s=Number(a?.savedAt)||0;if(a&&s>o)return{state:`on`,replaced:!0,garden:a.garden,revision:a.revision||0,savedAt:s};let c=t||(a?null:r);if(!c)return{state:`on`,replaced:!1,garden:null,revision:a?.revision||0,savedAt:s};let l=await e_(e,c);return n.open?l.conflict&&l.garden?{state:`on`,replaced:!0,garden:l.garden,revision:l.revision||0,savedAt:Number(l.savedAt)||0}:{state:`on`,replaced:!1,seeded:!t,garden:c,revision:l.revision||0,savedAt:Number(l.savedAt)||Number(c.savedAt)||o}:{state:`error`,replaced:!1,garden:null}}function n_(e,t,n){Bg={session:e,data:JSON.parse(JSON.stringify(t)),onDone:n},clearTimeout(zg),zg=setTimeout(()=>{r_()},1500)}function r_(){let e=Bg;return Bg=null,clearTimeout(zg),zg=0,e?e_(e.session,e.data,!0).then(t=>{e.onDone?.(t)}).catch(()=>{e.onDone?.({error:!0})}):Promise.resolve()}var i_=n({freshAccessToken:()=>S_}),a_=`mm-account-session`,o_=/^klv1[02-9ac-hj-np-z]{58}$/,s_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function c_(e){let t=String(e||``).trim().toLowerCase();return s_.test(t)?`g:${t}`:``}function l_(e){let t=Error(e);return t.code=`account`,t}function u_(e,t){let n=String(e||``).trim(),r=String(t||``);return!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||n.length>120?`Enter the email for this account.`:r.length<6?`Use at least 6 characters for the password.`:r.length>72?`That password is too long.`:``}function d_(e){let t=e?.msg||e?.error_description||e?.message||e?.error||``,n=String(t).replace(/\+/g,` `).trim();return/rate limit/i.test(n)?`Wait a moment, then try the account again.`:/already registered|already exists/i.test(n)?`That email already has an account. Sign in.`:/invalid login/i.test(n)?`That email and password do not match.`:/not confirmed/i.test(n)?`Confirm that email, then sign in.`:n&&n.length<160&&!/[<>]/.test(n)?n:`The account could not be opened.`}async function f_(){let e=await Gg();if(!e.url||!e.key)throw l_(`Email sign-in needs this game connected to its Supabase project.`);return e}function p_(e){try{localStorage.setItem(a_,JSON.stringify(e))}catch{}}function m_(){try{let e=JSON.parse(localStorage.getItem(a_)||`null`);if(!e||e.provider!==`email`)return null;let t=c_(String(e.address||``).slice(2));return!t||e.address!==t||typeof e.accessToken!=`string`?null:e}catch{return null}}function h_(){try{localStorage.removeItem(a_)}catch{}}function g_(e,t){return!e||e.provider!==`email`||(e.wallet=o_.test(t||``)?t:``,p_(e)),e}function __(e){return!e||e.provider!==`email`?``:e.email||`Email account`}async function v_(e,t,n){let r=await fetch(`${e.url}/auth/v1/token?grant_type=${t}`,{method:`POST`,headers:{"content-type":`application/json`,apikey:e.key,authorization:`Bearer ${e.key}`},body:JSON.stringify(n)}),i=await r.json().catch(()=>({}));if(!r.ok)throw l_(d_(i));return i}function y_(e,t=null){let n=e?.user||{},r=c_(n.id);if(!r||typeof e?.access_token!=`string`)throw l_(`The account could not be opened.`);return{provider:`email`,address:r,email:typeof n.email==`string`?n.email:t?.email||``,accessToken:e.access_token,refreshToken:typeof e.refresh_token==`string`&&e.refresh_token?e.refresh_token:t?.refreshToken||``,expiresAt:Date.now()+(Number(e.expires_in)||3600)*1e3,wallet:o_.test(t?.wallet||``)?t.wallet:``}}async function b_(e,t){let n=await f_(),r=await fetch(`${n.url}/auth/v1/signup`,{method:`POST`,headers:{"content-type":`application/json`,apikey:n.key,authorization:`Bearer ${n.key}`},body:JSON.stringify({email:e.trim(),password:t})}),i=await r.json().catch(()=>({}));if(!r.ok)throw l_(d_(i));if(typeof i.access_token!=`string`)return null;let a=y_(i);return p_(a),a}async function x_(e,t){let n=y_(await v_(await f_(),`password`,{email:e.trim(),password:t}));return p_(n),n}async function S_(e){if(!e||e.provider!==`email`)return``;if(e.accessToken&&Number(e.expiresAt)>Date.now()+6e4)return e.accessToken;if(!e.refreshToken)throw l_(`Sign in again.`);let t=y_(await v_(await f_(),`refresh_token`,{refresh_token:e.refreshToken}),e);return p_(t),e.accessToken=t.accessToken,e.refreshToken=t.refreshToken,e.expiresAt=t.expiresAt,t.email&&(e.email=t.email),t.accessToken}var J=e=>document.getElementById(e),C_=new URLSearchParams(location.search),w_=matchMedia(`(pointer: coarse)`).matches,T_=new fl({antialias:!0,powerPreference:`high-performance`,preserveDrawingBuffer:C_.has(`shot`)});T_.shadowMap.enabled=!0,T_.shadowMap.type=2,T_.toneMapping=0,J(`stage`).appendChild(T_.domElement);var E_=Number(C_.get(`px`))||Number(localStorage.getItem(`mm-pixel`))||0,D_=()=>Math.max(2,Math.round(M_().h/440)),O_=new Ft,k_=null,A_=new Ui({uniforms:{tColor:{value:null},tDepth:{value:null},res:{value:new Ft(1,1)},near:{value:1},far:{value:220},horizon:{value:new B(12051656)},zenith:{value:new B(8304868)}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
    uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 res; uniform float near; uniform float far;
    uniform vec3 horizon; uniform vec3 zenith;
    varying vec2 vUv;
    float lin(float d){ float z = d * 2.0 - 1.0; return (2.0 * near * far) / (far + near - z * (far - near)); }
    float L(vec2 o){ return lin(texture2D(tDepth, vUv + o / res).x); }
    void main(){
      vec4 c = texture2D(tColor, vUv);
      float d = L(vec2(0.0));
      float e = max(max(d - L(vec2(-1.0, 0.0)), d - L(vec2(1.0, 0.0))), max(d - L(vec2(0.0, 1.0)), d - L(vec2(0.0, -1.0))));
      float edge = smoothstep(0.03 * d + 0.45, 0.03 * d + 1.35, e);
      vec3 col = c.rgb;
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, 1.08);
      col = mix(col, col * vec3(0.28, 0.32, 0.36), edge * 0.4);
      vec3 skyCol = mix(horizon, zenith, clamp(vUv.y * 1.2, 0.0, 1.0));
      col = mix(col, skyCol, smoothstep(far * 0.84, far * 0.995, d));
      vec2 q = vUv - 0.5;
      col *= 1.0 - dot(q, q) * 0.18;
      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }
  `,depthTest:!1,depthWrite:!1}),j_=new hl(A_);function M_(){let e=window.visualViewport;return{w:Math.max(1,Math.floor(e?.width||window.innerWidth)),h:Math.max(1,Math.floor(e?.height||window.innerHeight))}}function N_(){let e=M_(),t=E_>1,n=t?1:Math.min(window.devicePixelRatio||1,w_?1.25:1.5),r=t?E_:1,i=Math.max(64,Math.floor(e.w/r)),a=Math.max(64,Math.floor(e.h/r));T_.setPixelRatio(n),T_.setSize(i,a,!1),T_.domElement.style.width=`100%`,T_.domElement.style.height=`100%`,T_.domElement.style.imageRendering=t?`pixelated`:`auto`,T_.getDrawingBufferSize(O_),k_&&k_.dispose();let s=t?o:l;k_=new rn(O_.x,O_.y,{minFilter:s,magFilter:s,samples:t?0:w_?2:4,depthTexture:new Oi(O_.x,O_.y)}),A_.uniforms.res.value.set(O_.x,O_.y),F_.aspect=i/a,F_.updateProjectionMatrix()}var P_=new Wn;P_.background=new B(8304868),P_.fog=new Un(12051656,62,138);var F_=new Da(33,16/9,1,220),I_=new ha(15201535,8231506,1.35);P_.add(I_);var L_=new Ma(16773327,2.35);L_.position.set(-18,34,14),L_.target.position.set(0,0,-3),L_.castShadow=!0,L_.shadow.mapSize.set(w_?1024:2048,w_?1024:2048),L_.shadow.radius=w_?2:3.5;var R_=L_.shadow.camera;R_.left=-36,R_.right=46,R_.top=26,R_.bottom=-34,R_.near=5,R_.far=110,L_.shadow.bias=-35e-5,L_.shadow.normalBias=.04,P_.add(L_,L_.target);var z_=new Ma(13230847,.62);z_.position.set(22,14,-18),P_.add(z_);var Y={mode:`loading`,seeds:lu(),clones:[],genetics:[],hybrids:[],nutrients:0,cubes:0,mota:0,jars:{AAAA:0,AAA:0,AA:0,A:0},grams:0,harvested:0,wet:[],look:null,strainPick:`bd`,returnMode:`title`},X,B_,V_,H_,U_=[],W_=[],G_=[],K_=[],q_=new Map,J_=new Fn,Y_=6,X_=[7,11,15,15].map(e=>e*Y_),Z_=120,Q_=110,$_=84,ev=96,tv=60,nv=72,rv=96,iv=[8,10].map(e=>e*Y_),av=[`SPROUT`,`SEEDLING`,`VEGETATIVE`,`FLOWERING`,`READY`];function ov(e){return e<.34?{id:`clear`,label:`TRICHOMES CLEAR`,pick:!1}:e<.72?{id:`cloudy`,label:`TRICHOMES CLOUDY`,pick:!0}:e<.88?{id:`milky`,label:`CLOUDY + AMBER`,pick:!0}:{id:`amber`,label:`TRICHOMES AMBER`,pick:!1}}function sv(e=X?.warehouse){if(!e?.bulbMat)return;let t=e.lights===`flower`,n=t?16762218:11832575;e.bulbMat.color.setHex(n);for(let t of e.barMats||[])t.color.setHex(n);e.vegScreen&&(e.vegScreen.visible=!t),e.flowerScreen&&(e.flowerScreen.visible=t);let r=X?.scenery?.lamps?.wh;r&&r.color.setHex(n)}function cv(e,t){let n=W(t).id,r=e+`:`+n,i=q_.get(r);return i||(i=Qu(e,n).build(bu,[0,0,0]),q_.set(r,i)),i}var lv=!1,uv=0,dv=0,fv=!1;function pv(){lv=!0,fv=!0}function mv(){let e=au[Y.strainPick]?Y.strainPick:`bd`,t=W(e);return(Y.seeds[e]|0)>0?{id:e,text:`PLANT ${t.name}`,ok:!0}:uu(Y.seeds)>0?{id:e,text:`NO ${t.short} SEEDS`,ok:!1}:{id:e,text:`NO SEEDS`,ok:!1}}function hv(){let e=new H;for(let t of[-1,1])for(let n of[-1,1]){let r=t<0?-38:37,i=n<0?-38:37;for(let a=0;a<6;a++)e.set(t<0?-38+a:37-a,0,i,16770666,0),e.set(r,0,n<0?-38+a:37-a,16770666,0)}let t=Nl(e,vu,[0,0,0],new Xr({vertexColors:!0}),!1);J_.add(t),J_.visible=!1,P_.add(J_)}var gv=[];function _v(){let e=Nl(id(),.052,[0,0,0],new Xr({vertexColors:!0,side:2}),!1),t=e.geometry,n=e.material,r=(e,r,i,a,o,s)=>{let c=new ci(t,n);c.position.set(e,r,i),c.scale.setScalar(s),c.name=`mota-token`,c.castShadow=!1,c.receiveShadow=!1,a.add(c),gv.push({mesh:c,y:r,phase:gv.length*.7,show:o})};for(let e of X.house.mothers)e.locked&&r(e.x,2.85,e.z,P_,()=>!Py(e),1.05);let i=X.house.trays.filter(e=>e.locked);i.length&&r(i.reduce((e,t)=>e+t.x,0)/i.length,2.7,i[0].z,P_,()=>!Fy(i[0]),1.05);let a=X.house.veg.filter(e=>e.room===`west`);if(a.length){let e=a.reduce((e,t)=>e+t.x,0)/a.length,t=a.reduce((e,t)=>e+t.z,0)/a.length;r(e,a[0].y+1.65,t,X.house.upper,()=>!Iy(a[0]),1.05)}let o=X.house.veg.filter(e=>e.room===`center`);o.length&&r(0,o[0].y+1.65,-20.1,X.house.upper,()=>!X.house.vegCenter,1.05),zf.forEach((e,t)=>r(e.x,2.55,e.z,P_,()=>!!U_[t*4]?.locked,1.45))}function vv(e){for(let t of gv){let n=t.show();t.mesh.visible=n,n&&(t.mesh.position.y=t.y+Math.sin(e*2.2+t.phase)*.12,t.mesh.lookAt(F_.position.x,t.mesh.position.y,F_.position.z),t.mesh.rotateZ(Math.sin(e*1.3+t.phase)*.16))}}var yv=new Set,bv=new Set,xv={x:0,y:0,run:!1,cam:0},Sv=w_,Cv=!1,wv=new Map,Tv=null,Ev=0;function Dv(){return matchMedia(`(pointer: coarse)`).matches||matchMedia(`(max-width: 820px)`).matches}function Ov(e){Sv=e,document.body.classList.toggle(`touch-ui`,e),e&&Y.mode===`play`?J(`touch`).classList.remove(`hidden`):e||J(`touch`).classList.add(`hidden`)}var kv=null,Av=!1,jv=``,Mv=`off`,Nv=!1,Pv=!1;function Fv(){return!!kv?.address&&!Av&&!Nv}addEventListener(`keydown`,e=>{e.code===`Escape`&&ub?(hb(!1),J(`tasks-toggle`)?.focus({preventScroll:!0}),e.preventDefault()):e.target?.closest?.(`input, textarea`)||(e.code!==`Space`&&e.code!==`Enter`||Y.mode!==`play`&&Y.mode!==`shop`&&Y.mode!==`dress`&&Y.mode!==`settings`||sx(),(e.code===`Space`||e.code===`Enter`)&&Y.mode===`title`&&lx(),e.code===`KeyI`&&!e.repeat&&Y.mode===`play`&&Vx(J(`inv`).classList.contains(`hidden`)),[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),yv.has(e.code)||bv.add(e.code),yv.add(e.code))}),addEventListener(`keyup`,e=>yv.delete(e.code)),addEventListener(`blur`,()=>{yv.clear(),xv.x=0,xv.y=0,xv.run=!1,xv.cam=0}),addEventListener(`contextmenu`,e=>e.preventDefault());var Z={yaw:0,yawT:0,pitch:.85,dist:30,distT:28,target:new z(0,.8,-3),t:0};addEventListener(`wheel`,e=>{Z.distT=Pt.clamp(Z.distT+Math.sign(e.deltaY)*1.6,12,36)},{passive:!0});function Iv(){let e=[...wv.values()];return e.length<2?0:Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}function Lv(e){e.cancelable&&e.preventDefault(),e.stopPropagation()}var Rv=0;addEventListener(`touchstart`,()=>{Rv=performance.now()},{passive:!0});function zv(e){return e.touches||e.changedTouches||e.pointerType===`touch`?!1:performance.now()-Rv<800}function Bv(e,t){if(e.changedTouches)for(let n=0;n<e.changedTouches.length;n++){let r=e.changedTouches[n];t({id:`t`+r.identifier,x:r.clientX,y:r.clientY,touch:!0})}else e.pointerType!==`touch`&&t({id:`p`+(e.pointerId??1),x:e.clientX,y:e.clientY,touch:!1})}function Vv(e){return!!e?.closest?.(`#touch, #hud, #dress, #shop, #settings, #strains, .title-actions, .wallet-box, button, .tbtn`)}function Hv(e){e.button&&e.button!==0||zv(e)||Vv(e.target)||(Y.mode===`title`?((e.touches||e.pointerType===`touch`)&&Ov(!0),lx(),Cv=!0):Cv||Y.mode!==`play`||Bv(e,e=>{e.touch&&Ov(!0),wv.set(e.id,{x:e.x,y:e.y}),wv.size===1&&(Tv={id:e.id,x:e.x,y:e.y,moved:!1}),wv.size===2&&(Tv=null,Ev=Iv())}))}function Uv(e){Bv(e,e=>{let t=wv.get(e.id);if(!t)return;if(t.x=e.x,t.y=e.y,wv.size>=2&&Ev){let e=Iv();Z.distT=Pt.clamp(Z.distT+(Ev-e)*.04,12,36),Ev=e;return}if(!Tv||Tv.id!==e.id)return;let n=e.x-Tv.x;!Tv.moved&&Math.abs(n)<8||(Tv.moved=!0,Z.yawT-=n*.006,Tv.x=e.x,Tv.y=e.y)})}function Wv(e){Bv(e,e=>{let t=Tv&&Tv.id===e.id?Tv:null;wv.delete(e.id),t&&(Tv=null,t.moved||Mb(e.x,e.y))}),wv.size<2&&(Ev=0),Cv=!1}function Gv(){let e=e=>{Y.mode===`title`&&(Vv(e.target)||e.target.closest?.(`#help`)||((e.touches||e.pointerType===`touch`)&&Ov(!0),lx(),Cv=!0))};J(`title`).addEventListener(`touchstart`,e,{passive:!0}),J(`title`).addEventListener(`pointerdown`,t=>{t.pointerType===`touch`||zv(t)||e(t)})}function Kv(e,{down:t,up:n,move:r}){e.addEventListener(`touchstart`,e=>{Lv(e),Bv(e,t)},{passive:!1}),r&&addEventListener(`touchmove`,e=>{let t=!1;Bv(e,n=>{r(n,e)&&(t=!0)}),t&&e.cancelable&&e.preventDefault()},{passive:!1});let i=e=>Bv(e,n);addEventListener(`touchend`,i),addEventListener(`touchcancel`,i),e.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`||zv(e)||(Lv(e),Bv(e,t))}),r&&addEventListener(`pointermove`,e=>{e.pointerType===`touch`||zv(e)||Bv(e,t=>r(t,e))});let a=e=>{e.pointerType===`touch`||zv(e)||Bv(e,n)};addEventListener(`pointerup`,a),addEventListener(`pointercancel`,a)}J(`title`).addEventListener(`touchstart`,()=>Ov(!0),{passive:!0}),T_.domElement.addEventListener(`pointerdown`,Hv),T_.domElement.addEventListener(`touchstart`,Hv,{passive:!0}),addEventListener(`pointermove`,Uv),addEventListener(`touchmove`,Uv,{passive:!0}),addEventListener(`pointerup`,Wv),addEventListener(`pointercancel`,Wv),addEventListener(`touchend`,Wv),addEventListener(`touchcancel`,Wv);function qv(e,t,n){let r=null;Kv(e,{down:n=>{r??(r=n.id,e.classList.add(`held`),t())},up:t=>{r===t.id&&(r=null,e.classList.remove(`held`),n?.())}})}function Jv(){let e=J(`stick`),t=J(`stick-knob`),n=null,r=n=>{let r=e.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=n.x-i,s=n.y-a,c=Math.max(16,e.clientWidth*.5-8),l=Math.hypot(o,s)||1;l>c&&(o*=c/l,s*=c/l),t.style.transform=`translate(${o}px, ${s}px)`,xv.x=o/c,xv.y=s/c},i=()=>{n=null,xv.x=0,xv.y=0,t.style.transform=`translate(0,0)`};Kv(e,{down:e=>{n=e.id,r(e)},move:e=>e.id===n&&(r(e),!0),up:e=>{e.id===n&&i()}})}function Yv(e,t){Kv(e,{down:()=>t(),up:()=>{}})}function Xv(){Gv(),Jv(),qv(J(`btn-run`),()=>xv.run=!0,()=>xv.run=!1),qv(J(`btn-cam-l`),()=>xv.cam=-1,()=>xv.cam=0),qv(J(`btn-cam-r`),()=>xv.cam=1,()=>xv.cam=0),Yv(J(`btn-act`),()=>{Y.mode===`play`&&Ey()}),Yv(J(`btn-help`),()=>Ab()),Zv()}function Zv(){let e=J(`prompt`),t=t=>{Y.mode===`play`&&e.style.display!==`none`&&(Lv(t),Ey())};e.addEventListener(`touchstart`,t,{passive:!1}),e.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`||zv(e)||t(e)})}var Q={x:0,z:-6.3,y:0,facing:0,speed:0,cool:0,dust:0},Qv=.42;function $v(){let e=X.house,t=X.warehouse,n=e.contains(Q.x,Q.z),r=e.open&&Math.abs(Q.x)<1.65&&Q.z<-12.4&&Q.z>-15.2;if(n||r){let e={x0:-19.1,x1:19.1,z0:od.walkZ,z1:13.3};return Q.z<-14.05&&(e.x0=-od.walkX,e.x1=od.walkX),e}let i=t.contains(Q.x,Q.z),a=Math.abs(Q.z)<1.35&&Q.x>20.8&&Q.x<24.6;if(i||t.owned&&t.open&&a){let e={x0:23.72,x1:36.32,z0:-4.82,z1:4.82};return t.open&&Math.abs(Q.z)<1.35&&Q.x<24.4&&(e.x0=20.4,e.z0=-1.35,e.z1=1.35),e}return t.gateOpen&&Q.x>16.2&&Q.x<23.3&&Math.abs(Q.z)<1.8?{x0:-19.1,x1:22.95,z0:-1.3,z1:1.3}:{x0:-19.1,x1:19.1,z0:-13.4,z1:13.3}}function ey(){let e=$v();Q.x=Pt.clamp(Q.x,e.x0,e.x1),Q.z=Pt.clamp(Q.z,e.z0,e.z1);let t=X.colliders.slice();X.shed.open||t.push(...X.shed.doorBlocks),X.house.open||t.push(X.house.doorBlock),X.warehouse.gateOpen||t.push(X.warehouse.gateBlock),X.warehouse.owned&&!X.warehouse.open&&t.push(X.warehouse.doorBlock);let n=Q.y>1.85;for(let e=0;e<3;e++)for(let e of t){if(e.floor===1&&!n||e.floor===0&&n)continue;let t=Pt.clamp(Q.x,e.x0,e.x1),r=Pt.clamp(Q.z,e.z0,e.z1),i=Q.x-t,a=Q.z-r,o=i*i+a*a;if(o>=Qv*Qv)continue;if(o<1e-6){let t=Q.x-e.x0,n=e.x1-Q.x,r=Q.z-e.z0,i=e.z1-Q.z,a=Math.min(t,n,r,i);a===t?Q.x=e.x0-Qv:a===n?Q.x=e.x1+Qv:Q.z=a===r?e.z0-Qv:e.z1+Qv;continue}let s=Math.sqrt(o);i/=s,a/=s,Q.x=t+i*Qv,Q.z=r+a*Qv}}function ty(e){let t=0,n=0;Y.mode===`play`&&((yv.has(`KeyW`)||yv.has(`ArrowUp`))&&--n,(yv.has(`KeyS`)||yv.has(`ArrowDown`))&&(n+=1),(yv.has(`KeyA`)||yv.has(`ArrowLeft`))&&--t,(yv.has(`KeyD`)||yv.has(`ArrowRight`))&&(t+=1),(Math.abs(xv.x)>.12||Math.abs(xv.y)>.12)&&(t+=xv.x,n+=xv.y));let r=Math.hypot(t,n),i=!1;if(r>0&&Q.cool<=.35){t/=r,n/=r;let a=Math.sin(Z.yaw),o=Math.cos(Z.yaw),s=t*o+n*a,c=-t*a+n*o,l=yv.has(`ShiftLeft`)||yv.has(`ShiftRight`)||xv.run,u=l?8:5;Q.x+=s*u*e,Q.z+=c*u*e;let d=Math.atan2(s,c)-Q.facing;if(d=Math.atan2(Math.sin(d),Math.cos(d)),Q.facing+=d*Math.min(1,e*16),i=!0,Q.speed+=((l?1.5:1)-Q.speed)*Math.min(1,e*10),Q.dust-=e,Q.dust<=0){Q.dust=l?.07:.11;let e=Math.abs(Q.x)<1.4&&Q.z>-9;V_.emit({x:Q.x-s*.2,y:Q.y+.05,z:Q.z-c*.2,vx:-s*.6+(Math.random()-.5)*.6,vy:.9+Math.random()*.6,vz:-c*.6+(Math.random()-.5)*.6,life:.45,size:.07,color:e?12104354:7910986,g:-7})}}else Q.speed+=(0-Q.speed)*Math.min(1,e*10);ey();let a=X.groundHeight(Q.x,Q.z,Q.y),o=Q.y>2.2;if(Q.y+=(a-Q.y)*Math.min(1,e*18),X.house){let e=Q.y>1.45||X.house.onStair(Q.x,Q.z,Q.y);X.house.upper.visible=e,e&&!o&&Q.y>2.2&&(Z.distT=Math.min(Math.max(Z.distT,16),22)),!e&&o&&(Z.distT=Math.max(Z.distT,24))}Q.cool=Math.max(0,Q.cool-e),B_.root.position.set(Q.x,Q.y,Q.z),B_.root.rotation.y=Q.facing,B_.update(e,i?Q.speed:0)}function ny(){X.slots.forEach((e,t)=>{let n={state:`empty`,stage:0,prog:0,water:0,waterVis:0,stress:0,age:0,strain:`bd`,pop:1,rot:t*2654435761%628/100,fromClone:!1,locked:!!(t/4|0)};U_.push(n);let r=new ci(cv(0,n.strain),Ml);r.castShadow=!0,r.receiveShadow=!0,r.position.set(e.x,e.y+.1,e.z),r.rotation.y=n.rot,r.visible=!1,P_.add(r),uy(r),W_.push(r)})}function ry(){X.warehouse.slots.forEach((e,t)=>{let n={state:`empty`,stage:0,prog:0,water:0,stress:0,age:0,strain:`bd`,pop:1,fromClone:!1};G_.push(n);let r=new ci(cv(0,n.strain),Ml);r.castShadow=!0,r.receiveShadow=!0,r.position.set(e.x,e.y,e.z),r.visible=!1,P_.add(r),uy(r),K_.push(r)})}function iy(e,t){let n=U_[e];n.stage=t,n.prog=0,n.pop=0,n.holdVeg=!1,W_[e].geometry=cv(t,n.strain),t>=4&&(n.state=`ripening`,n.ripe=0)}function ay(e,t,n){let r=e.stage+1;n&&r===3&&X.warehouse.lights!==`flower`?(e.holdVeg=!0,e.prog=0,e.pop=0):(e.stage=r,e.prog=0,e.pop=0,e.holdVeg=!1,r>=4&&(e.state=`ripening`,e.ripe=0),t.geometry=cv(e.stage,e.strain))}function oy(e){let t=Math.max(0,1-e.stress/Math.max(1,e.age)*1.6);return t>=.94?`AAAA`:t>=.8?`AAA`:t>=.55?`AA`:`A`}function sy(e){return e===`AAAA`?9:e===`AAA`?7:e===`AA`?5:3}var cy=[.82,1.36,1.78,2.26,3.28],ly={frostGeo:new Pi(.07,6,4),ringGeo:new Ni(.18,.36,6),ringMat:new Xr({color:15188602,side:2}),postGeo:new ji(.07,.58,.07),woodMat:new Xr({color:9263666})};function uy(e){e.material=Ml.clone();let t=new Xr({color:16251886}),n=new Fn;for(let[e,r]of[[.16,0],[-.12,.12],[.02,-.16],[.14,.14]]){let i=new ci(ly.frostGeo,t);i.position.set(e,0,r),n.add(i)}n.visible=!1,e.add(n);let r=new ci(ly.ringGeo,ly.ringMat);r.rotation.x=-Math.PI/2,r.visible=!1,P_.add(r);let i=[-.5,.5].map(e=>{let t=new ci(ly.postGeo,ly.woodMat);return t.visible=!1,t.userData.ox=e,P_.add(t),t});e.userData.rig={frost:n,frostMat:t,ring:r,posts:i}}function dy(e){let t=e.userData.rig;if(t){t.frost.visible=!1,t.ring.visible=!1;for(let e of t.posts)e.visible=!1}}function fy(e){let t=e.water<=0,n=e.water<=.7,r=e.stress/Math.max(1,e.age);if(t)return 11569496;if(n)return 15192994;if(e.state===`ripening`){let t=ov(e.ripe||0);return t.id===`clear`?16056312:t.id===`cloudy`?16250090:t.id===`milky`?16773058:16760954}return r>.45?15783050:16777215}function py(e,t,n,r,i,a){t.pop=Math.min(1,t.pop+i*2.4);let o=(.2+.8*(1+2.70158*(t.pop-1)**3+1.70158*(t.pop-1)**2))*(W(t.strain).stature||1),s=t.topped?1.5:1,c=t.topped?.6:1,l=t.lollipop?.76:1;e.scale.set(o*s*l,o*c,o*s*l);let u=Math.sin(r*1.4+n*1.7)*.022*(.4+t.stage*.3),d=t.water<=0,f=t.water<=.7;e.rotation.z=u+(t.trained?.62:0),e.rotation.x=Math.cos(r*1.1+n)*.015*(.4+t.stage*.3)+(d?.58:f?.24:0),e.material.color.setHex(fy(t));let p=e.userData.rig;if(!p)return;let m=cy[t.stage]||.8,h=t.state===`ripening`;if(p.frost.visible=h,h){let e=ov(t.ripe||0),i=e.id===`clear`?15269876:e.id===`cloudy`?16251886:e.id===`milky`?16769162:14708768;p.frostMat.color.setHex(i);let a=1+Math.sin(r*3+n)*.15;p.frost.position.set(0,m+.06,0),p.frost.scale.setScalar(a)}p.ring.visible=!!t.lollipop,p.ring.position.set(a.x,a.y+.08,a.z);let g=!!t.trained;for(let e of p.posts)e.visible=g,g&&e.position.set(a.x+e.userData.ox*.7,a.y+.29,a.z)}function my(e,t,n){if(e.stage>=4)return!1;e.water=Math.max(0,e.water-t/Q_);let r=e.water<=0;return e.age+=t,r&&(e.stress+=t*(e.fromClone?.7:1)),e.prog+=t*(r?.35:1)*n/(X_[e.stage]*cu(e.strain,e.stage)),e.prog>=1}function hy(e,t){U_.forEach((n,r)=>{let i=W_[r],a=X.slots[r];if(n.state===`empty`?(i.visible=!1,dy(i)):(i.visible=!0,n.state===`ripening`?(n.water=Math.max(0,n.water-e/Q_),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1)),n.ripe=Math.min(1.25,(n.ripe||0)+e/(Z_*cu(n.strain,4)))):n.state===`growing`&&my(n,e,1)&&(ay(n,i,!1),gy(a,n.state===`ripening`?16774048:12576906)),py(i,n,r,t,e,a)),n.waterVis+=(Math.min(1,n.water*3)-n.waterVis)*Math.min(1,e*4),n.state===`empty`)a.patchMat.color.setRGB(1,1,1);else if(n.water<=0)a.patchMat.color.setHex(14135418);else{let e=n.waterVis;a.patchMat.color.setRGB(1-.62*e,1-.48*e,1-.22*e)}}),X.warehouse.owned&&G_.forEach((n,r)=>{let i=K_[r],a=X.warehouse.slots[r];if(n.state===`empty`)i.visible=!1,dy(i);else{i.visible=!0;let o=X.warehouse.lights===`flower`;n.holdVeg?(n.water=Math.max(0,n.water-e/Q_),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1)),o&&(n.holdVeg=!1,n.stage=3,n.prog=0,n.pop=0,i.geometry=cv(3,n.strain),gy(a,14136575))):n.state===`ripening`?o&&(n.water=Math.max(0,n.water-e/Q_),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1)),n.ripe=Math.min(1.25,(n.ripe||0)+e/(Z_/1.15*cu(n.strain,4)))):n.state===`growing`&&n.stage>=3&&!o?(n.water=Math.max(0,n.water-e/Q_),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1))):n.state===`growing`&&my(n,e,1.35)&&(ay(n,i,!0),gy(a,n.state===`ripening`?16774048:14136575)),py(i,n,r+40,t,e,a)}})}function gy(e,t){for(let n=0;n<14;n++)V_.emit({x:e.x,y:e.y+.4,z:e.z,vx:(Math.random()-.5)*2.4,vy:1.5+Math.random()*2,vz:(Math.random()-.5)*2.4,life:.8,size:.07,color:t,g:-6})}function _y(){let e=Q.x+Math.sin(Q.facing)*.95,t=Q.z+Math.cos(Q.facing)*.95,n=null,r=3.61,i=(i,a,o)=>{(o!==`wh`||X.warehouse.owned&&(X.warehouse.open||X.warehouse.contains(Q.x,Q.z)))&&i.forEach((i,s)=>{let c=(i.x-e)**2+(i.z-t)**2;c<r&&(r=c,n={where:o,i:s,s:i,d:a[s],d2:(i.x-Q.x)**2+(i.z-Q.z)**2})})};return i(X.slots,U_,`yard`),i(X.warehouse.slots,G_,`wh`),n}var vy=[];function yy(e,t){vy.push({t:e,fn:t})}function $(e,t=``){let n=document.createElement(`div`);n.className=`toast `+t,n.textContent=e,J(`toasts`).appendChild(n),setTimeout(()=>n.remove(),2600)}function by(e){return e.where===`wh`?K_[e.i]:W_[e.i]}function xy(e,t,n,r){let{d:i,i:a,where:o}=e;if(i.state=`growing`,i.fromClone=n,i.strain=W(r).id,i.water=n?.9:.6,i.stress=0,i.age=0,i.ripe=0,i.holdVeg=!1,i.topped=!1,i.trained=!1,i.lollipop=!1,o===`yard`)iy(a,t);else{i.stage=t,i.prog=0,i.pop=0;let n=by(e);n.geometry=cv(t,i.strain),n.visible=!0}pv()}function Sy(e){return e.stage===2&&!e.topped?`top`:(e.stage===2||e.stage===3)&&e.topped&&!e.trained?`train`:e.stage===3&&!e.lollipop?`lolli`:``}function Cy(e){return!!(e.topped&&e.trained&&e.lollipop)}function wy(e){let t=Dy.indexOf(e);return Dy[Math.min(Dy.length-1,Math.max(0,t)+1)]||e}function Ty(e){let{d:t,s:n}=e,r=by(e);if(e.where===`yard`&&t.locked)return Ly(n.bed);if(Math.hypot(n.x-Q.x,n.z-Q.z)>.3&&(Q.facing=Math.atan2(n.x-Q.x,n.z-Q.z)),t.state===`empty`){if(Y.clones.length){let t=Y.clones.shift();xy(e,2,!0,t.strain),$(`${W(t.strain).name} CLONE PLANTED`,`good`)}else{let t=mv();if(!t.ok)return $(uu(Y.seeds)?t.text:`NO SEEDS OR CLONES`);Y.seeds[t.id]--,xy(e,0,!1,t.id),$(`${W(t.id).name} PLANTED`,`good`)}Q.cool=.6,B_.playAction(`plant`),yy(.25,()=>{for(let e=0;e<12;e++)V_.emit({x:n.x,y:n.y+.15,z:n.z,vx:(Math.random()-.5)*2,vy:1+Math.random()*1.4,vz:(Math.random()-.5)*2,life:.55,size:.08,color:7229492,g:-9})}),_b()}else if(t.state===`growing`){if(t.water<=.7){t.water=1,Q.cool=.75,B_.playAction(`water`),pv();for(let e=0;e<26;e++)yy(.2+e*.016,()=>V_.emit({x:Q.x+Math.sin(Q.facing)*.95+(Math.random()-.5)*.15,y:1.25,z:Q.z+Math.cos(Q.facing)*.95+(Math.random()-.5)*.15,vx:Math.sin(Q.facing)*.5,vy:-.5,vz:Math.cos(Q.facing)*.5,life:.5,size:.065,color:8308978,color2:4163272,g:-9}));return}if(t.holdVeg&&!Sy(t))return $(`FLIP THE WAREHOUSE TO 12/12`);let e=Sy(t);if(e===`top`){t.topped=!0,t.pop=.3,Q.cool=.45,B_.playAction(`harvest`),$(`TOPPED — THE CANOPY BUSHES OUT`,`good`),pv();return}if(e===`train`){t.trained=!0,t.pop=.3,Q.cool=.45,B_.playAction(`plant`),$(`TRAINED — BRANCHES TIED OUT`,`good`),pv();return}if(e===`lolli`){t.lollipop=!0,t.pop=.3,Q.cool=.45,B_.playAction(`harvest`),$(`LOLLIPOPPED — LOW GROWTH CLEARED`,`good`),pv();return}if(t.stage>=3&&Y.nutrients>0){Y.nutrients--,t.water=1,t.stress=Math.max(0,t.stress-Math.max(1,t.age)*.15),Q.cool=.45,B_.playAction(`water`),$(`BLOOM FEED — FLOWER STRESS EASED`,`good`),_b(),pv();return}return $(Cy(t)?`CANOPY SET`:`PLANT IS WELL WATERED`)}else if(t.state===`ready`||t.state===`ripening`){let e=oy(t),i=[];if(Cy(t)){let t=wy(e);t!==e&&(e=t),i.push(`CANOPY`)}if(t.state===`ripening`){let n=ov(t.ripe||0),r=n.pick?e:Oy(e);i.push(n.label),r!==e&&(e=r,i.push(`GRADE DROPPED`))}let a=sy(e);if(Y.wet.length>=12)return $(`HANDS ARE FULL — HANG IT IN THE SHED`);let o=W(t.strain).id;Y.wet.push({grade:e,grams:a,strain:o,trimmed:!1}),Y.harvested++,Y.seeds[o]=(Y.seeds[o]|0)+1,Y.genetics.includes(o)||(Y.genetics.push(o),yy(.42,()=>$(`GENETICS READ: ${W(o).name}`,`good`))),pv(),Q.cool=.7,B_.playAction(`harvest`),t.state=`empty`,t.water=0,t.ripe=0,t.holdVeg=!1,t.fromClone=!1,t.topped=!1,t.trained=!1,t.lollipop=!1,r.visible=!1,yy(.3,()=>{for(let e=0;e<34;e++)V_.emit({x:n.x,y:n.y+.7,z:n.z,vx:(Math.random()-.5)*3,vy:2+Math.random()*3,vz:(Math.random()-.5)*3,life:1,size:.08,color:e%3==0?15764014:16055270,g:-5});let t=i.length?` — ${i.join(` — `)}`:``;$(`${W(o).short} ${e} WET FLOWER${t} — TRIM IT IN THE SHED`,i.includes(`GRADE DROPPED`)?``:`good`)}),_b()}}function Ey(e=-1){if(Y.mode!==`play`||Q.cool>0)return;let t=null;if(e&&typeof e==`object`?t=e:e>=0&&(t={where:`yard`,i:e,s:X.slots[e],d:U_[e],d2:0}),!t){let e=jy(),n=_y();if(e&&(!n||e.d2+.12<n.d2))return Ny(e);t=n}if(!t)return X.house.contains(Q.x,Q.z)?$(Q.y>2.2?`WALK TO A VEG POT, GENETICS LAB, OR COMPUTER`:`WALK TO A MOTHER, HYDRO TUBE, OR VEG POT`):X.warehouse.contains(Q.x,Q.z)?$(`WALK TO A GROW POT`):$(`WALK TO A GARDEN BED`);Ty(t)}var Dy=[`A`,`AA`,`AAA`,`AAAA`];function Oy(e){let t=Dy.indexOf(e);return Dy[Math.max(0,t-1)]||e}function ky(e){let t=Oy(e.grade);return!t||t===e.grade?!1:(e.grade=t,e.grams=sy(t),!0)}function Ay(){Y.grams=Dy.reduce((e,t)=>e+(Y.jars[t]|0)*sy(t),0)}function jy(){if(!X?.shed)return null;let e=null,t=(t,n,r,i,a=1.55,o=.08,s=0)=>{let c=(t-Q.x)**2+(n-Q.z)**2;c>a*a||(!e||s>e.priority||s===e.priority&&c<e.d2)&&(e={kind:r,ref:i,x:t,z:n,d2:c,y:o,priority:s})},n=X.shed;if(t(n.door.x,n.door.z,`shed-door`,null,1.9),n.open||n.contains(Q.x,Q.z)){for(let e of n.hooks)t(e.x,e.z+.4,`hook`,e,1.35);for(let e of n.cureJars){if(!e.item)continue;let n=!(!e.item.needsBurp||e.item.burped||e.item.missed),r=!!(e.item.missed&&(e.item.cure||0)<1)&&Y.wet.length===0;t(e.x+.55,e.z,`jar`,e,n?2.4:r?2.2:1.2,.08,n?2:+!!r)}}let r=X.house;if(t(0,-13.15,`house-door`,null,1.7),r.open||r.contains(Q.x,Q.z)){if(Q.y>2.2){t(r.computer.x,r.computer.z,`computer`,r.computer,1.45,sd.y+.08),t(r.breeder.x,r.breeder.z,`breeder`,r.breeder,1.55,sd.y+.08,1);for(let e of r.veg)e.up&&(e.room===`center`?t(e.x,e.z+.75,`breed-pot`,e,1.05,sd.y+.08):t(e.x,e.z+.75,`veg`,e,1.05,sd.y+.08))}else{for(let e of r.mothers)t(e.x,e.z+.85,`mother`,e,1.25);for(let e of r.trays)t(e.x,e.z+.55,`tray`,e,1.05);for(let e of r.veg)e.up||t(e.x,e.z+.75,`veg`,e,1.05)}}t(X.stand.x,X.stand.z,`stand`,null,1.55);for(let e of X.scenery?.spigots||[])t(e.x,e.z,`spigot`,e,1.35);return X.warehouse.owned?(t(23.05,0,`wh-door`,null,1.85,.08,2),(X.warehouse.open||X.warehouse.contains(Q.x,Q.z))&&t(X.warehouse.lightSwitch.x,X.warehouse.lightSwitch.z,`wh-lights`,null,1.55,1.15,1)):t(X.lot.x,X.lot.z,`lot`,null,1.7),e}function My(){let e=0,t=0;for(let n of Dy)e+=Y.jars[n],t+=Y.jars[n]*sy(n)*rd[n];return{n:e,mota:t}}function Ny(e){Q.facing=Math.atan2(e.x-Q.x,e.z-Q.z);let t=X.shed,n=X.house;if(e.kind===`shed-door`)return t.open=!t.open,Q.cool=.3,$(t.open?`SHED DOOR OPEN`:`SHED DOOR CLOSED`),!0;if(e.kind===`house-door`)return n.open=!n.open,Q.cool=.3,$(n.open?`HOUSE OPEN — MOTHERS, CLONES, VEG`:`HOUSE DOOR CLOSED`),!0;if(e.kind===`wh-door`)return X.warehouse.owned?(X.warehouse.open=!X.warehouse.open,Q.cool=.3,$(X.warehouse.open?`WAREHOUSE OPEN`:`WAREHOUSE CLOSED`),!0):$(`BUY THE WAREHOUSE FIRST`);if(e.kind===`mother`)return zy(e.ref);if(e.kind===`tray`)return Vy(e.ref);if(e.kind===`veg`)return Uy(e.ref);if(e.kind===`breed-pot`)return Hy(e.ref);if(e.kind===`breeder`)return X.house.vegCenter?$x():Ry(`vegCenter`,nd.vegCenter,`BREEDING LAB`);if(e.kind===`computer`)return rS();if(e.kind===`stand`)return Wy();if(e.kind===`spigot`)return Ky(e.ref);if(e.kind===`lot`)return qy();if(e.kind===`wh-lights`){let e=X.warehouse;e.lights=e.lights===`flower`?`veg`:`flower`,sv(e),Q.cool=.35;let t=G_.some(e=>e.holdVeg);return $(e.lights===`flower`?t?`12/12 — FLOWER STARTED`:`12/12 — FLOWERING LIGHTS`:`18/6 — VEG LIGHTS`,`good`),pv(),!0}if(e.kind===`hook`){let n=e.ref;if(!n.item){if(!Y.wet.length)return $(`HARVEST A PLANT FIRST`),!0;let e=Y.wet[0];return e.trimmed?(Y.wet.shift(),n.item={...e,t:0,dry:0,hold:0,dropped:!1},n.mesh.geometry=X.shed.nugGeo[W(e.strain).id]||X.shed.nugGeo.bd,n.mesh.visible=!0,n.mesh.scale.setScalar(1),Q.cool=.4,B_.playAction(`harvest`),$(`${e.grade} HUNG TO DRY`),_b(),pv(),!0):(e.trimmed=!0,Q.cool=.35,B_.playAction(`harvest`),$(`HAND TRIMMED — TRICHOMES KEPT`,`good`),pv(),!0)}if(n.item.dry<1)return $(`STILL DRYING`),!0;let r=t.cureJars.find(e=>!e.item);return r?(r.item={grade:n.item.grade,grams:sy(n.item.grade),strain:n.item.strain||`bd`,t:0,cure:0,burped:!1,missed:!1,needsBurp:!1,sealed:!1},r.mesh.visible=!0,n.item=null,n.mesh.visible=!1,Q.cool=.4,$(`JARRED — BURP IT WHILE IT CURES`,`good`),_b(),pv(),!0):($(`CURE JARS ARE FULL`),!0)}let r=e.ref.item;return r?.needsBurp&&!r.burped&&!r.missed?(r.burped=!0,r.needsBurp=!1,Q.cool=.3,$(`BURPED — CURE STAYS ON TRACK`,`good`),pv(),!0):r?.missed?$(`BURP MISSED — LET IT FINISH`):($(r?.burped?`CURING`:`WAIT TO BURP`),!0)}function Py(e){return!e.locked||X.house.mother2}function Fy(e){return!e.locked||X.house.tube2}function Iy(e){return e.up?e.room===`west`?X.house.vegWest:X.house.vegCenter:!0}function Ly(e){return U_.some((t,n)=>(n/4|0)===e&&t.locked)?Y.mota<nd.bed?($(`NEED ${nd.bed} MOTA — GROW BOX`),!0):(Y.mota-=nd.bed,U_.forEach((t,n)=>{(n/4|0)===e&&(t.locked=!1)}),Q.cool=.4,$(`GROW BOX UNLOCKED`,`good`),_b(),pv(),!0):!1}function Ry(e,t,n){return X.house[e]?!1:Y.mota<t?($(`NEED ${t} MOTA — ${n}`),!0):(Y.mota-=t,X.house[e]=!0,Q.cool=.4,$(`${n} UNLOCKED`,`good`),_b(),pv(),!0)}function zy(e){if(!Py(e))return Ry(`mother2`,nd.mother,`2ND MOTHER`);if(!e.state||e.state===`empty`){let t=mv();return t.ok?(Y.seeds[t.id]--,e.state=`growing`,e.strain=t.id,e.stage=0,e.prog=0,e.water=.9,e.cool=0,e.plant.visible=!0,e.plant.geometry=cv(0,t.id),e.plant.scale.setScalar(.5),Q.cool=.55,B_.playAction(`plant`),$(`${W(t.id).name} PLANTED AS A MOTHER`,`good`),_b(),pv(),!0):$(t.text)}if(e.state===`growing`){if(e.water<.45)return e.water=1,Q.cool=.55,B_.playAction(`water`),$(`MOTHER WATERED`),pv(),!0;if(Y.nutrients>0)return By(e);let t=Math.round(((e.stage||0)+(e.prog||0))/2*100);return $(`${W(e.strain).short} MOTHER ${t}%`)}if(e.water<.4)return e.water=1,Q.cool=.55,B_.playAction(`water`),$(`MOTHER WATERED`),pv(),!0;if(e.cool>0)return Y.nutrients>0?By(e):$(`MOTHER IS RESTING`);let t=X.house.trays.find(e=>e.state===`empty`&&Fy(e));return t?(e.cool=8,e.water=Math.max(0,e.water-.22),t.state=`rooting`,t.t=0,t.strain=e.strain||`bd`,t.plant.geometry=cv(0,t.strain),t.plant.visible=!0,t.plant.scale.setScalar(.48),Q.cool=.45,B_.playAction(`harvest`),$(`${W(t.strain).short} CUTTING IS IN THE TUBE`),pv(),!0):$(X.house.tube2?`HYDRO TUBES ARE FULL`:`TUBES ARE FULL — UNLOCK THE BACK ROW`)}function By(e){return Y.nutrients<=0?$(`BUY NUTRIENTS UPSTAIRS`):(Y.nutrients--,e.water=1,e.cool=0,e.state===`growing`&&(e.prog=Math.min(.92,(e.prog||0)+.4)),Q.cool=.4,B_.playAction(`water`),$(`MOTHER FED`,`good`),_b(),pv(),!0)}function Vy(e){if(!Fy(e))return Ry(`tube2`,nd.tube,`BACK TUBE ROW`);if(e.state===`empty`)return $(`TAKE A CUTTING FROM A MOTHER`);if(e.state===`rooting`)return Y.cubes>0?(Y.cubes--,e.t+=nv*.65,Q.cool=.35,$(`ROOT CUBE IN THE TUBE`,`good`),_b(),pv(),!0):Y.nutrients>0?(Y.nutrients--,e.t+=nv*.45,Q.cool=.35,$(`TUBE FED`,`good`),_b(),pv(),!0):$(`STILL ROOTING`);if(e.state!==`ready`)return $(`STILL ROOTING`);let t=X.house.veg.find(e=>e.room!==`center`&&e.state===`empty`&&Iy(e));return t?(t.state=`veg`,t.t=0,t.strain=e.strain||`bd`,t.plant.geometry=cv(2,t.strain),t.plant.visible=!0,e.state=`empty`,e.t=0,e.strain=null,e.plant.visible=!1,Q.cool=.4,$(`${W(t.strain).short} MOVED INTO A VEG ROOM`),pv(),!0):$(X.house.vegWest?`VEG POTS ARE FULL — THE CENTER ROOM IS NOW THE BREEDING LAB`:`DOWNSTAIRS VEG IS FULL — UNLOCK WEST VEG UPSTAIRS`)}function Hy(e){if(!Iy(e))return Y.mota<nd.vegCenter?$(`NEED ${nd.vegCenter} MOTA — BREEDING LAB`):Ry(`vegCenter`,nd.vegCenter,`BREEDING LAB`);if(e.state===`empty`){let t=mv();return t.ok?W(t.id).hybrid?(Y.seeds[t.id]=Math.max(0,(Y.seeds[t.id]|0)-1),e.state=`growing`,e.t=0,e.strain=t.id,e.plant.geometry=cv(2,t.id),e.plant.visible=!0,e.plant.scale.setScalar(.72),Q.cool=.45,B_.playAction(`plant`),$(`${W(t.id).short} SEED CROP STARTED`,`good`),_b(),pv(),!0):$(`CROSS TWO GENETICS FIRST — THE LAB GROWS HYBRIDS`):$(t.text)}if(e.state===`growing`)return Y.nutrients>0?(Y.nutrients--,e.t=Math.min(rv,e.t+rv*.5),e.t>=rv?(e.state=`ready`,e.plant.scale.setScalar(.9*(W(e.strain).stature||1)),$(`SEED CROP READY — COLLECT THE SEEDS`,`good`)):$(`SEED CROP FED`,`good`),_b(),pv(),!0):$(`${W(e.strain).short} SEED CROP ${Math.round(Math.min(1,e.t/rv)*100)}%`);let t=W(e.strain).id;return Y.seeds[t]=(Y.seeds[t]|0)+4,Y.genetics.includes(t)||Y.genetics.push(t),e.state=`empty`,e.t=0,e.strain=null,e.plant.visible=!1,Q.cool=.4,B_.playAction(`harvest`),$(`+4 ${W(t).short} SEEDS — GENETICS BANKED`,`good`),Y.strainPick=t,_b(),pv(),!0}function Uy(e){if(e.room===`center`)return Hy(e);if(!Iy(e)){let t=e.room===`west`;return Ry(t?`vegWest`:`vegCenter`,t?nd.vegWest:nd.vegCenter,t?`WEST VEG ROOM`:`CENTER VEG ROOM`)}if(e.state===`empty`)return $(`BRING A ROOTED CLONE`);if(e.state===`veg`&&Y.nutrients>0)return Y.nutrients--,e.t+=rv*.5,Q.cool=.35,B_.playAction(`water`),$(`VEG POT FED`,`good`),_b(),pv(),!0;if(e.state!==`ready`)return $(`STILL VEGETATING`);if(Y.clones.length>=8)return $(`HANDS ARE FULL OF CLONES`);let t=e.strain||`bd`;return Y.clones.push({strain:t}),e.state=`empty`,e.strain=null,e.plant.visible=!1,Q.cool=.35,$(`${W(t).name} CLONE READY TO PLANT`,`good`),_b(),pv(),!0}function Wy(){let e=My();if(Q.cool=.35,e.n>0){for(let e of Dy)Y.jars[e]=0;return Ay(),Y.mota+=e.mota,$(`+${e.mota} MOTA`,`good`),pv(),_b(),!0}if(uu(Y.seeds)<4){if(Y.mota<td.cost)return $(`NEED ${td.cost} MOTA FOR SEEDS`);Y.mota-=td.cost;let e=ou.slice().sort((e,t)=>(Y.seeds[e]|0)-(Y.seeds[t]|0)||ou.indexOf(e)-ou.indexOf(t)).slice(0,td.n);for(let t of e)Y.seeds[t]=(Y.seeds[t]|0)+1;return $(`+1 ${e.map(e=>W(e).short).join(`  +1 `)}`,`good`),_b(),pv(),!0}return $(`CURE JARS, THEN SELL THEM FOR MOTA`),!0}var Gy=[`W HOUSE`,`W MID`,`W GATE`,`E HOUSE`,`E MID`,`E GATE`];function Ky(e){let t=e.bed;if(U_[t*4]?.locked)return Ly(t);let n=0,r=0;for(let e=0;e<4;e++){let i=U_[t*4+e];(i.state===`growing`||i.state===`ready`||i.state===`ripening`)&&(i.state===`growing`&&n++,i.state===`growing`&&i.water<=.7&&(i.water=1,r++))}Q.cool=.45,B_.playAction(`water`);let i=Math.sign(zf[t].x-e.x)||1;for(let t=0;t<18;t++)yy(t*.028,()=>V_.emit({x:e.x+i*.25,y:.95,z:e.z,vx:i*(1.1+Math.random()*.8),vy:1.3+Math.random()*.7,vz:(Math.random()-.5)*.9,life:.55,size:.07,color:8308978,color2:4163272,g:-9}));return r?($(r>1?`WATERED ${r}`:`PLANT WATERED`,`good`),pv(),_b(),!0):$(n?`BED IS WATERED`:`NOTHING TO WATER`)}function qy(){return X.warehouse.owned?!0:Y.mota<520?$(`NEED 520 MOTA`):(Y.mota-=520,X.warehouse.owned=!0,X.warehouse.gateOpen=!0,X.lot.mesh.visible=!1,X.warehouse.forSale.visible=!1,Q.cool=.4,$(`WAREHOUSE IS YOURS — EAST GATE IS OPEN`,`good`),_b(),pv(),!0)}function Jy(e){let t=X?.shed;if(!t)return;let n=t.open?1.35:0,r=1-Math.exp(-e*14);t.doorL.rotation.y+=(n-t.doorL.rotation.y)*r,t.doorR.rotation.y+=(-n-t.doorR.rotation.y)*r;let i=(t.door.x-Q.x)**2+(t.door.z-Q.z)**2<2.8*2.8;t.roof.visible=!(t.open&&(t.contains(Q.x,Q.z)||i));for(let n of t.hooks){let t=n.item;if(!t)continue;t.dry<1?(t.t+=e,t.dry=Math.min(1,t.t/$_)):(t.hold+=e,t.hold>tv&&!t.dropped&&(t.dropped=!0,ky(t)&&$(`OVERDRIED — GRADE DROPPED`),pv()));let r=Math.sin(Z.t*1.6+n.x)*.04;n.mesh.rotation.z=r,n.mesh.scale.setScalar(1.2+.35*(1-t.dry))}for(let n of t.cureJars){let t=n.item;if(t&&!t.sealed&&(t.t+=e,t.cure=Math.min(1,t.t/ev),t.cure>=.4&&t.cure<.62&&!t.burped&&!t.missed&&(t.needsBurp=!0),t.cure>=.62&&t.needsBurp&&!t.burped&&(t.missed=!0,t.needsBurp=!1,ky(t)&&$(`MISSED THE BURP — GRADE DROPPED`),pv()),t.cure>=1)){t.sealed=!0;let e=t.grade;Y.jars[e]=(Y.jars[e]|0)+1,Ay(),$(`+${sy(e)}G  ${e} CURED`,`good`),n.mesh.visible=!1,n.item=null,_b(),pv()}}let a=X.house,o=X.warehouse,s=1-Math.exp(-e*10);a.door.rotation.y+=((a.open?-1.15:0)-a.door.rotation.y)*s;let c=a.open&&Math.abs(Q.x)<4&&Q.z<-11.4&&Q.z>-15.4,l=!(a.open&&(a.contains(Q.x,Q.z)||c));a.roof.visible=l,a.facade.visible=l;for(let t of a.mothers){if(t.state===`growing`){t.water=Math.max(0,t.water-e/Q_);let n=t.water<=0?.35:1;t.prog+=e*n/(iv[Math.min(t.stage,1)]*cu(t.strain,2)),t.prog>=1&&(t.prog=0,t.stage+=1,t.stage>=2&&(t.state=`mother`,t.stage=2,t.water=Math.max(t.water,.8),$(`${W(t.strain).short} MOTHER IS READY`,`good`),pv()),t.plant.geometry=cv(t.stage,t.strain)),t.plant.scale.setScalar((t.state===`mother`?1.2:.5+t.stage*.28+t.prog*.1)*(W(t.strain).stature||1))}else t.state===`mother`&&(t.water=Math.max(0,t.water-e/(Q_*1.25)),t.cool=Math.max(0,t.cool-e));t.plant.visible&&(t.plant.rotation.z=Math.sin(Z.t*1.3+t.x)*.03)}for(let t of a.trays)t.state===`rooting`&&(t.t+=e,t.t>=nv&&(t.state=`ready`,t.plant.geometry=cv(1,t.strain||`bd`),$(`${W(t.strain).short} CLONE ROOTED — MOVE IT TO VEG`,`good`),pv()));for(let t of a.veg)if(t.room===`center`){if(t.state!==`growing`)continue;t.t+=e/cu(t.strain,2),t.plant.scale.setScalar((.72+.18*Math.min(1,t.t/rv))*(W(t.strain).stature||1)),t.t>=rv&&(t.state=`ready`,t.plant.scale.setScalar(.9*(W(t.strain).stature||1)),$(`${W(t.strain).short} SEED CROP READY — COLLECT SEEDS`,`good`),pv())}else t.state===`veg`&&(t.t+=e/cu(t.strain,2),t.plant.scale.setScalar((.72+.18*Math.min(1,t.t/rv))*(W(t.strain).stature||1)),t.t>=rv&&(t.state=`ready`,$(`${W(t.strain).short} VEG DONE — POT IT UP`,`good`),pv()));o.gate.rotation.y+=((o.gateOpen?1.15:0)-o.gate.rotation.y)*s,o.door.rotation.y+=((o.open?1.25:0)-o.door.rotation.y)*s;let u=o.owned&&o.open&&Math.abs(Q.z)<2.1&&Q.x>20.4&&Q.x<25.2;o.roof.visible=!(o.owned&&(o.contains(Q.x,Q.z)||o.open&&u)),o.forSale.visible=!o.owned,X.lot.mesh.visible=!o.owned;let d=X.scenery;if(d){let t=a.contains(Q.x,Q.z);d.lamps.down.intensity=t&&Q.y<2.15?6.5:0,d.lamps.loft.intensity=t&&Q.y>1.55?5.5:0,d.lamps.wh.intensity=o.owned&&o.contains(Q.x,Q.z)?7:0;let n=performance.now()/1e3;for(let t of d.fans)t.rotation.z+=e*9;d.bulbs.forEach((e,t)=>{e.scale.setScalar(.9+Math.sin(n*2.4+t*1.7)*.1)})}}function Yy(e){return`#`+(e>>>0).toString(16).padStart(6,`0`)}var Xy=[],Zy=null,Qy=Ad().build(.08),$y=Od().build(.08),eb=new Map;Qy.computeBoundingBox(),$y.computeBoundingBox();function tb(e){let t=eb.get(e);return t||(t=$u(e).build(.05),t.computeBoundingBox(),eb.set(e,t)),t}function nb(){if(Zy)return Zy;let e=new fl({antialias:!1,alpha:!0,preserveDrawingBuffer:!0});e.setPixelRatio(1),e.setSize(80,80,!1),e.setClearColor(0,0);let t=new Wn;t.add(new ha(16774880,2372380,1.2));let n=new Ma(16774098,1.45);n.position.set(2.4,4.2,3.2),t.add(n);let r=new ci(new Rr,Ml);r.frustumCulled=!1;let i=new Fn;return i.add(r),t.add(i),Zy={renderer:e,scene:t,mesh:r,pivot:i,camera:new Aa(-1,1,1,-1,.01,50)},Zy}function rb(e,t=1.16){e.boundingBox||e.computeBoundingBox();let n=e.boundingBox,r=n.getCenter(new z),i=n.getSize(new z),a=Math.max(i.x,i.y,i.z,.05)*.7,o=new z(a*.75,a*1.45,a*.9),s=new Da;s.position.copy(o),s.lookAt(0,0,0),s.updateMatrixWorld();let c=new z(1,0,0).applyQuaternion(s.quaternion),l=new z(0,1,0).applyQuaternion(s.quaternion),u=.001;for(let e of[n.min.x,n.max.x])for(let t of[n.min.y,n.max.y])for(let i of[n.min.z,n.max.z]){let n=new z(e-r.x,t-r.y,i-r.z);u=Math.max(u,Math.abs(n.dot(c)),Math.abs(n.dot(l)))}return{center:r,cam:o,half:u*t}}function ib(e){let t=Y.clones.map(e=>e.strain).join(`,`),n=Y.wet.map(e=>`${e.strain}:${e.grade}`).join(`,`);return[e,ou.map(e=>Y.seeds[e]|0).join(`,`),t,n,Dy.map(e=>Y.jars[e]|0).join(`,`),Y.nutrients|0,Y.cubes|0].join(`|`)}function ab(e,t){let n=document.createElement(t.select?`button`:`div`);t.select&&(n.type=`button`),n.className=`bag-slot`+(t.on?` on`:``);let r=document.createElement(`canvas`);r.width=80,r.height=80;let i=document.createElement(`span`);i.textContent=t.label;let a=document.createElement(`b`);a.textContent=String(t.count),n.append(r,i,a),t.select&&n.addEventListener(`pointerdown`,e=>{Lv(e),Y.strainPick=t.id,J(`bag-grid`).dataset.sig=``,pv(),_b()}),e.append(n);let o=rb(t.geo,t.pad);Xy.push({canvas:r,ctx:r.getContext(`2d`),geo:t.geo,frame:o,phase:Xy.length*.7,rock:!!t.rock})}function ob(e){let t=J(`bag-grid`);if(!t)return;let n=ib(e);if(t.dataset.sig===n)return;t.dataset.sig=n,t.replaceChildren(),Xy.length=0;for(let n of ou){let r=Y.seeds[n]|0;r&&ab(t,{select:!0,id:n,label:W(n).short,count:r,geo:tb(n),on:n===e,rock:!0,pad:1.04})}let r=new Map;for(let e of Y.clones)r.set(e.strain,(r.get(e.strain)||0)+1);for(let[e,n]of r)ab(t,{label:`${W(e).short} CLONE`,count:n,geo:cv(2,e)});let i=new Map;for(let e of Y.wet){let t=`${e.strain}:${e.grade}`;i.set(t,(i.get(t)||0)+1)}for(let[e,n]of i){let[r,i]=e.split(`:`),a=X?.shed?.nugGeo?.[r];a&&ab(t,{label:`${W(r).short} ${i}`,count:n,geo:a})}let a=X?.shed?.cureJars?.[0]?.mesh?.geometry;if(a)for(let e of[`AAAA`,`AAA`,`AA`,`A`]){let n=Y.jars[e]|0;n&&ab(t,{label:e,count:n,geo:a})}if(Y.nutrients>0&&ab(t,{label:`FEED`,count:Y.nutrients|0,geo:Qy}),Y.cubes>0&&ab(t,{label:`CUBE`,count:Y.cubes|0,geo:$y}),!t.childElementCount){let e=document.createElement(`p`);e.className=`bag-empty`,e.textContent=`BAG IS EMPTY`,t.append(e)}}function sb(e){if(!Xy.length||J(`inv`).classList.contains(`hidden`))return;let t=nb();for(let n of Xy){t.mesh.geometry=n.geo,t.mesh.position.copy(n.frame.center).multiplyScalar(-1),t.pivot.rotation.y=n.rock?Math.sin(e*.7+n.phase)*.4:e*.55+n.phase,t.camera.position.copy(n.frame.cam);let r=n.frame.half;t.camera.left=-r,t.camera.right=r,t.camera.top=r,t.camera.bottom=-r,t.camera.lookAt(0,0,0),t.camera.updateProjectionMatrix(),t.renderer.render(t.scene,t.camera),n.ctx.clearRect(0,0,80,80),n.ctx.drawImage(t.renderer.domElement,0,0)}}var cb=new Map,lb=``,ub=!1;function db(e,t,n,r=1){let i=cb.get(t);i||cb.set(t,i={rank:e,verb:t,places:new Map}),i.rank=Math.min(i.rank,e),i.places.set(n,(i.places.get(n)||0)+r)}function fb(e){let t=[];for(let[n,r]of e)t.push(r>1?`${n} ×${r}`:n);return t.join(` · `)}function pb(){cb.clear();let e=X.house,t=X.shed,n=(e,t,n)=>{for(let r of e){if(!r||r.locked||r.state===`empty`)continue;if(r.state===`ready`||r.state===`ripening`){let e=r.state===`ripening`?ov(r.ripe||0):null;!e||e.pick?db(1,`HARVEST`,t):db(4,e.id===`amber`?`HARVEST LATE`:`HARVEST EARLY`,t);continue}if(r.state!==`growing`)continue;if(r.water<=.7){n||db(r.water<=0?0:2,`WATER`,t);continue}let e=Sy(r);e===`top`?db(3,`TOP`,t):e===`train`?db(3,`TRAIN`,t):e===`lolli`?db(3,`LOLLIPOP`,t):r.holdVeg||t===`WAREHOUSE`&&r.stage>=3&&X.warehouse.lights!==`flower`?db(3,`FLIP 12/12`,`WAREHOUSE`):r.stage>=3&&Y.nutrients>0&&db(6,`BLOOM FEED`,t)}};n(U_,`YARD`,!0),X.warehouse.owned&&n(G_,`WAREHOUSE`,!1),zf.forEach((e,t)=>{let n=0,r=!1;for(let e=0;e<4;e++){let i=U_[t*4+e];!i||i.locked||i.state!==`growing`||i.water>.7||(n++,i.water<=0&&(r=!0))}n&&db(r?0:2,`WATER BED`,Gy[t],n)});for(let t of e.mothers){if(!Py(t)||!t.state||t.state===`empty`)continue;let n=t.state===`growing`?t.water<.45:t.water<.4,r=W(t.strain).short;n?db(t.water<=0?0:2,`WATER`,`MOTHER`):Y.nutrients>0&&(t.state===`growing`||t.cool>0)?db(6,`FEED`,`MOTHER`):t.state===`mother`&&t.cool<=0&&(e.trays.some(e=>e.state===`empty`&&Fy(e))?db(5,`TAKE CUTTING`,r):!e.tube2&&Y.mota>=nd.tube&&db(7,`UNLOCK TUBES`,`${nd.tube} MOTA`))}let r=0;for(let t of e.trays){if(!Fy(t))continue;let e=W(t.strain).short;t.state===`ready`?r++:t.state===`rooting`&&Y.cubes>0?db(5,`ROOT CUBE`,e):t.state===`rooting`&&Y.nutrients>0&&db(6,`FEED`,`TUBE`)}r&&(e.veg.some(e=>e.room!==`center`&&Iy(e)&&e.state===`empty`)?db(4,`MOVE TO VEG`,`HOUSE`,r):!e.vegWest&&Y.mota>=nd.vegWest?db(4,`UNLOCK VEG`,`WEST`):db(4,`MOVE TO VEG`,`POTS FULL`,r));for(let t of e.veg)Iy(t)&&(t.room===`center`?t.state===`ready`?db(1,`COLLECT SEEDS`,W(t.strain).short):t.state===`growing`&&Y.nutrients>0?db(6,`FEED SEED CROP`,W(t.strain).short):t.state===`empty`&&ou.some(e=>au[e]?.hybrid&&(Y.seeds[e]|0)>0)&&db(4,`PLANT HYBRID`,`BREEDING LAB`):t.state===`ready`&&Y.clones.length<8?db(4,`TAKE CLONE`,W(t.strain).short):t.state===`veg`&&Y.nutrients>0&&db(6,`FEED`,`VEG`));e.vegCenter&&Y.genetics.length>=2&&db(5,`CROSS GENETICS`,`BREEDING LAB`);let i=0,a=0;for(let e of Y.wet)e.trimmed?a++:i++;i&&db(3,`TRIM`,`SHED`,i),a&&db(3,t.hooks.some(e=>!e.item)?`HANG`:`FREE A HOOK`,`SHED`,a);let o=t.hooks.filter(e=>e.item&&e.item.dry>=1).length;o&&db(1,`JAR`,`SHED`,o);let s=t.cureJars.filter(e=>e.item?.needsBurp&&!e.item.burped&&!e.item.missed).length;s&&db(0,`BURP`,`SHED`,s);let c=My();c.n>0&&db(5,`SELL`,`STAND`,c.n);let l=0,u=0;for(let e of U_)!e.locked&&e.state===`empty`&&l++;if(X.warehouse.owned)for(let e of G_)e.state===`empty`&&u++;return(l||u)&&(Y.clones.length?db(5,`PLANT`,`CLONE`,Math.min(Y.clones.length,l+u)):uu(Y.seeds)>0?(l&&db(8,`PLANT`,`YARD`,l),u&&db(8,`PLANT`,`WAREHOUSE`,u)):Y.mota>=td.cost&&db(8,`BUY SEEDS`,`STAND`)),U_.some(e=>e.locked)&&Y.mota>=nd.bed&&db(7,`UNLOCK BOX`,`${nd.bed} MOTA`),!e.mother2&&Y.mota>=nd.mother&&db(7,`UNLOCK MOTHER`,`${nd.mother} MOTA`),!e.tube2&&Y.mota>=nd.tube&&!cb.has(`UNLOCK TUBES`)&&db(7,`UNLOCK TUBES`,`${nd.tube} MOTA`),!e.vegWest&&Y.mota>=nd.vegWest&&!cb.has(`UNLOCK VEG`)&&db(7,`UNLOCK VEG`,`WEST`),!e.vegCenter&&Y.mota>=nd.vegCenter&&db(7,`UNLOCK BREEDING LAB`,`${nd.vegCenter} MOTA`),!X.warehouse.owned&&Y.mota>=520&&db(7,`BUY WAREHOUSE`,`520 MOTA`),[...cb.values()].sort((e,t)=>e.rank-t.rank||e.verb.localeCompare(t.verb))}function mb(e){let t=0;for(let n of e)for(let e of n.places.values())t+=e;return t}function hb(e){ub=e,J(`tasks`).classList.toggle(`open`,e),J(`tasks-menu`).classList.toggle(`hidden`,!e),J(`tasks-toggle`).setAttribute(`aria-expanded`,e?`true`:`false`)}function gb(){if(!X||Y.mode!==`play`&&Y.mode!==`shop`&&Y.mode!==`dress`)return;let e=pb(),t=e.map(e=>`${e.rank}|${e.verb}|${fb(e.places)}`).join(`
`);if(t===lb)return;lb=t;let n=J(`tasks-list`);n.replaceChildren();let r=mb(e);if(J(`tasks-count`).textContent=String(r),J(`tasks-lead`).textContent=e.length?e[0].verb:`CLEAR`,J(`tasks-toggle`).classList.toggle(`hot`,e.some(e=>e.rank<=1)),!e.length){let e=document.createElement(`li`);e.className=`idle`,e.textContent=`NOTHING TO DO`,n.appendChild(e)}else for(let t of e){let e=document.createElement(`li`);t.rank<=1&&(e.className=`hot`);let r=document.createElement(`b`);r.textContent=t.verb;let i=document.createElement(`span`);i.textContent=fb(t.places),e.append(r,i),n.appendChild(e)}}function _b(){let e=au[Y.strainPick]?Y.strainPick:`bd`,t=W(e);J(`mota`).textContent=Y.mota,J(`strain-label`).textContent=t.short,J(`strain-count`).textContent=Y.seeds[e]|0,J(`strain-swatch`).style.background=Yy(t.bud[0]),J(`clones`).textContent=Y.clones.length,J(`nuts`).textContent=Y.nutrients|0,J(`grams`).textContent=Y.grams,J(`wet`).textContent=Y.wet.length,ob(e)}var vb=J(`tip`),yb=J(`prompt`),bb=new z,xb=new Xa,Sb=new Ft,Cb=new Hr(new z(0,1,0),-.4375),wb=new z;function Tb(e){let t=J(`btn-act`);t&&t.textContent!==e&&(t.textContent=e)}function Eb(e){let t=e.startsWith(`SPACE  `)?`SPACE`:e.startsWith(`TAP  `)?`TAP`:``;J(`prompt-key`).textContent=t,J(`prompt-label`).textContent=t?e.slice(t.length).trim():e,yb.style.display=`flex`}function Db(){let e=J(`welcome`);e&&Y.mode===`play`&&(e.classList.remove(`hidden`),J(`welcome-close`)?.focus({preventScroll:!0}))}function Ob(){let e=J(`welcome`);if(e){e.classList.add(`hidden`);try{localStorage.setItem(`mm-guide-v1`,`seen`)}catch{}J(`btn-help-hud`)?.focus({preventScroll:!0})}}function kb(){let e=!1;try{e=localStorage.getItem(`mm-guide-v1`)===`seen`}catch{}e||Db()}function Ab(e){let t=J(`help`),n=typeof e==`boolean`?e:t.classList.contains(`hidden`);t.classList.toggle(`hidden`,!n),Bx(J(`btn-help-hud`),n)}function jb(e,t){if(!X)return null;let n=T_.domElement.getBoundingClientRect();if(!n.width||!n.height)return null;Sb.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),xb.setFromCamera(Sb,F_);let r=X.warehouse.owned&&(X.warehouse.contains(Q.x,Q.z)||Q.x>22);if(Cb.constant=r?-.55:-.4375,!xb.ray.intersectPlane(Cb,wb))return null;let i=r?X.warehouse.slots:X.slots,a=r?G_:U_,o=-1,s=1.5625;if(i.forEach((e,t)=>{let n=(e.x-wb.x)**2+(e.z-wb.z)**2;n<s&&(s=n,o=t)}),o<0)return null;let c=i[o];return{where:r?`wh`:`yard`,i:o,s:c,d:a[o],d2:0}}function Mb(e,t){if(Y.mode!==`play`)return;let n=jb(e,t);if(n){if(Math.hypot(n.s.x-Q.x,n.s.z-Q.z)>3.1)return $(`WALK CLOSER`);Ey(n)}}var Nb=[],Pb=``;function Fb(e){return e.state===`ready`?1:e.state===`ripening`?Math.min(1,(e.ripe||0)/.88):e.holdVeg?.5:Math.min(1,(e.stage+e.prog)/4)}function Ib(e,t){let n=Sy(e),r=t&&e.state===`ripening`&&X.warehouse.lights!==`flower`,i=``,a=``;if(e.water<=0)i=`DRY`,a=`dry`;else if(e.state===`ripening`){let t=ov(e.ripe||0);i=t.id===`clear`?`CLEAR`:t.id===`cloudy`?`CLOUDY`:t.id===`milky`?`PEAK`:`LATE`,a=t.id}else n===`top`?(i=`TOP`,a=`next`):n===`train`?(i=`TIE`,a=`next`):n===`lolli`?(i=`LOLLI`,a=`next`):Cy(e)&&(i=`SET`,a=`set`);let o=r?`HOLD`:e.holdVeg?`18/6`:``,s=r||e.holdVeg?`hold`:``;return{label:i,kind:a,extra:o,extraKind:s,step:n}}function Lb(e,t){let n=e.querySelector(`.badge-row`);n&&n.classList.toggle(`hide-marks`,t.stage<2);let r=Sy(t);for(let n of[`top`,`train`,`lolli`]){let i=e.querySelector(`.mark.`+n);if(!i)continue;let a=n===`top`?!!t.topped:n===`train`?!!t.trained:!!t.lollipop;i.classList.toggle(`on`,a),i.classList.toggle(`next`,!a&&r===n)}}function Rb(e,t,n){let{el:r}=e,i=Ib(t,n);r.querySelector(`.h2o i`).style.width=Math.round(Math.max(0,t.water)*100)+`%`,r.querySelector(`.h2o`).classList.toggle(`dry`,t.water<=0),r.querySelector(`.h2o`).classList.toggle(`thirst`,t.water>0&&t.water<=.7);let a=r.querySelector(`.grow`);a.querySelector(`i`).style.width=Math.round(Fb(t)*100)+`%`,a.className=`grow `+(t.state===`ripening`?ov(t.ripe||0).id:``);let o=r.querySelector(`.grade`),s=t.stage>=3||t.state===`ripening`||t.state===`ready`;o.textContent=s?oy(t):``,o.className=`grade `+(s?oy(t):``),Lb(r,t);let c=r.querySelector(`.tag`);c.textContent=i.label,c.className=`tag `+i.kind;let l=r.querySelector(`.extra`);l.textContent=i.extra&&i.extra!==i.label?i.extra:``,l.className=`tag extra `+i.extraKind}function zb(){let e=document.createElement(`div`);return e.className=`plant-badge`,e.innerHTML=`<div class="badge-top"><span class="h2o"><i></i></span><span class="grow"><i></i></span><b class="grade"></b></div><div class="badge-row"><span class="pair"><b>T</b><i class="mark top"></i></span><span class="pair"><b>R</b><i class="mark train"></i></span><span class="pair"><b>L</b><i class="mark lolli"></i></span><span class="tag"></span><span class="tag extra"></span></div>`,e.style.display=`none`,J(`badges`).appendChild(e),e}function Bb(){X.slots.forEach((e,t)=>Nb.push({el:zb(),where:`yard`,i:t,s:e,data:U_})),X.warehouse.slots.forEach((e,t)=>Nb.push({el:zb(),where:`wh`,i:t,s:e,data:G_}))}function Vb(e,t,n,r){if(bb.set(t,n,r).project(F_),bb.z>1){e.style.display=`none`;return}let i=M_().w,a=M_().h,o=(bb.x*.5+.5)*i,s=(-bb.y*.5+.5)*a;o<-80||s<-40||o>i+80||s>a+40?e.style.display=`none`:(e.style.display=`flex`,e.style.transform=`translate(${o}px, ${s}px) translate(-50%, -120%)`)}function Hb(){let e=Y.mode===`play`,t=X.warehouse.contains(Q.x,Q.z),n=t||X.house.contains(Q.x,Q.z);for(let r of Nb){let i=r.data[r.i];if(!(e&&i&&i.state!==`empty`&&Pb!==r.where+`:`+r.i&&(r.where===`wh`?t:!n))){r.el.style.display=`none`;continue}Rb(r,i,r.where===`wh`);let a=(cy[i.stage]||.7)+.55;Vb(r.el,r.s.x,r.s.y+a,r.s.z)}}function Ub(){if(Pb=``,Y.mode!==`play`)return J_.visible=!1,vb.style.display=`none`,yb.style.display=`none`,Jx(!1),-1;let e=jy(),t=_y(),n=t?t.d2:1/0,r=e&&e.d2+.12<n;if(Jx(r?e.kind===`mother`&&Py(e.ref)&&(!e.ref.state||e.ref.state===`empty`):!(!t||t.d.state!==`empty`||t.d.locked||Y.clones.length!==0)),r)return Wb(e),-1;if(!t)return J_.visible=!1,vb.style.display=`none`,yb.style.display=`none`,Tb(`ACT`),-1;let i=t.s,a=t.d;J_.visible=!0,J_.position.set(i.x,i.y+.06+Math.sin(Z.t*5)*.02,i.z);let o=1+Math.sin(Z.t*5)*.03;J_.scale.set(o,1,o);let s=Sv?`TAP`:`SPACE`,c,l=`ACT`;if(t.where===`yard`&&a.locked){let e=Y.mota<nd.bed;c=e?`GROW BOX  ${Y.mota}/${nd.bed} MOTA`:`${s}  UNLOCK GROW BOX  ${nd.bed} MOTA`,l=e?`ACT`:`BUY`}else if(a.state===`empty`){if(Y.clones.length){let e=Y.clones[0];c=`${s}  PLANT ${W(e.strain).short} CLONE`,l=`CLONE`}else{let e=mv();c=e.ok?`${s}  ${e.text}`:e.text,l=e.ok?`PLANT`:`ACT`}}else if(a.state===`ripening`){let e=ov(a.ripe||0);c=`${s}  HARVEST — ${e.label}`,l=e.pick?`PICK`:e.id===`amber`?`LATE`:`EARLY`}else a.state===`ready`?(c=`${s}  HARVEST`,l=`PICK`):a.water<=.7?(c=`${s}  WATER`,l=`WATER`):Sy(a)===`top`?(c=`${s}  TOP`,l=`TOP`):Sy(a)===`train`?(c=`${s}  TRAIN BRANCHES`,l=`TRAIN`):Sy(a)===`lolli`?(c=`${s}  LOLLIPOP`,l=`LOLLI`):a.holdVeg?(c=`WAITING FOR 12/12`,l=`ACT`):a.stage>=3&&Y.nutrients>0?(c=`${s}  BLOOM FEED`,l=`FEED`):c=Cy(a)?`CANOPY SET`:`WELL WATERED`;if(Tb(l),Eb(c),a.state===`empty`||a.locked)vb.style.display=`none`;else{bb.set(i.x,i.y+.4+a.stage*.35+.8,i.z).project(F_),vb.style.display=`block`,vb.style.left=((bb.x*.5+.5)*100).toFixed(2)+`%`,vb.style.top=((-bb.y*.5+.5)*100).toFixed(2)+`%`;let e=a.state===`ripening`?ov(a.ripe||0):null,n=W(a.strain),r=Ib(a,t.where===`wh`);J(`tip-name`).textContent=`${n.short} ${a.holdVeg?`VEGETATIVE`:av[a.stage]}`,J(`tip-water`).style.width=Math.round(a.water*100)+`%`,J(`tip-water`).style.background=a.water>0?`#58b4ee`:`#d9534f`,J(`tip-grow`).style.width=Math.round(Fb(a)*100)+`%`;let o=e?e.label:a.holdVeg&&!Sy(a)?`18/6`:a.state===`ready`?oy(a):Sy(a)===`top`?`TOP THE VEG`:Sy(a)===`train`?`TRAIN THE VEG`:Sy(a)===`lolli`?`LOLLIPOP`:Cy(a)?`CANOPY SET`:`${n.kind} ${n.weeks}WK`;J(`tip-grade`).textContent=r.extra&&!o.includes(r.extra)?`${o} · ${r.extra}`:o,Lb(J(`tip-marks`),a),J(`tip-marks`).style.display=a.stage>=2?`flex`:`none`,Pb=t.where+`:`+t.i}return t.i}function Wb(e){J_.visible=!0,J_.position.set(e.x,(e.y||.08)+Math.sin(Z.t*5)*.02,e.z);let t=1+Math.sin(Z.t*5)*.03;J_.scale.set(t,1,t);let n=Gb(e,Sv?`TAP`:`SPACE`);Tb(n.btn),Eb(n.text),n.tip?(bb.set(e.x,(e.y||.08)+1.5,e.z).project(F_),vb.style.display=`block`,vb.style.left=((bb.x*.5+.5)*100).toFixed(2)+`%`,vb.style.top=((-bb.y*.5+.5)*100).toFixed(2)+`%`,J(`tip-name`).textContent=n.tip.name,J(`tip-water`).style.width=n.tip.water,J(`tip-water`).style.background=n.tip.wet?`#58b4ee`:`#d9534f`,J(`tip-grow`).style.width=n.tip.grow,J(`tip-grade`).textContent=n.tip.grade||``):vb.style.display=`none`}function Gb(e,t){if(e.kind===`shed-door`){let e=X.shed.open;return{text:e?`${t}  CLOSE SHED`:`${t}  OPEN SHED`,btn:e?`CLOSE`:`OPEN`}}if(e.kind===`house-door`){let e=X.house.open;return{text:e?`${t}  CLOSE HOUSE`:`${t}  OPEN HOUSE`,btn:e?`CLOSE`:`OPEN`}}if(e.kind===`wh-door`){let e=X.warehouse.open;return{text:e?`${t}  CLOSE WAREHOUSE`:`${t}  OPEN WAREHOUSE`,btn:e?`CLOSE`:`OPEN`}}if(e.kind===`spigot`){let n=e.ref.bed;if(U_[n*4]?.locked){let e=Y.mota<nd.bed;return{text:e?`GROW BOX  ${Y.mota}/${nd.bed} MOTA`:`${t}  UNLOCK GROW BOX  ${nd.bed} MOTA`,btn:e?`ACT`:`BUY`}}let r=0,i=0;for(let e=0;e<4;e++){let t=U_[n*4+e];t.state===`growing`&&r++,t.state===`growing`&&t.water<=.7&&i++}return r?i?{text:`${t}  WATER BED  ${i}`,btn:`WATER`}:{text:`BED IS WATERED`,btn:`ACT`}:{text:`NOTHING TO WATER`,btn:`ACT`}}if(e.kind===`wh-lights`){let e=X.warehouse.lights===`flower`;return{text:e?`${t}  FLIP TO 18/6`:`${t}  FLIP TO 12/12`,btn:e?`18/6`:`12/12`}}if(e.kind===`hook`){let n=e.ref.item,r=Y.wet[0];if(!n&&r&&!r.trimmed)return{text:`${t}  HAND TRIM ${r.grade}`,btn:`TRIM`};if(!n)return{text:r?`${t}  HANG ${r.grade}`:`HARVEST FIRST`,btn:r?`HANG`:`ACT`};if(n.dry<1)return{text:`DRYING ${Math.round(n.dry*100)}%  ${n.grade}`,btn:`ACT`};let i=Math.max(0,Math.ceil(tv-(n.hold||0)));return{text:`${t}  JAR ${n.grade} · ${i}s`,btn:`JAR`}}if(e.kind===`jar`){let n=e.ref.item,r=Math.round((n?.cure||0)*100);return n?.needsBurp&&!n.burped&&!n.missed?{text:`${t}  BURP JAR`,btn:`BURP`}:n?.missed?{text:`BURP MISSED · CURING ${r}%`,btn:`ACT`}:!n?.burped&&(n?.cure||0)>=.2?{text:`CURING ${r}% · BURP SOON`,btn:`ACT`}:{text:`CURING ${r}%`,btn:`ACT`}}if(e.kind===`mother`){let n=e.ref;if(!Py(n)){let e=Y.mota<nd.mother;return{text:e?`2ND MOTHER  ${Y.mota}/${nd.mother} MOTA`:`${t}  UNLOCK 2ND MOTHER  ${nd.mother} MOTA`,btn:e?`ACT`:`BUY`}}if(!n.state||n.state===`empty`){let e=mv();return{text:e.ok?`${t}  ${e.text}`:e.text,btn:e.ok?`PLANT`:`ACT`}}if(n.state===`growing`){let e=n.water<.45,r=Math.round(((n.stage||0)+(n.prog||0))/2*100),i=W(n.strain).short,a=!e&&Y.nutrients>0;return{text:e?`${t}  WATER MOTHER`:a?`${t}  FEED MOTHER`:`${i} MOTHER ${r}%`,btn:e?`WATER`:a?`FEED`:`ACT`,tip:{name:i,water:Math.round(n.water*100)+`%`,grow:r+`%`,wet:n.water>.15,grade:`GROWING`}}}let r=n.water<.4,i=W(n.strain).name;return{text:r?`${t}  WATER MOTHER`:n.cool>0?Y.nutrients>0?`${t}  FEED MOTHER`:`MOTHER IS RESTING`:`${t}  TAKE ${W(n.strain).short} CLONE`,btn:r?`WATER`:n.cool>0?Y.nutrients>0?`FEED`:`ACT`:`CLONE`,tip:{name:i,water:Math.round(n.water*100)+`%`,grow:n.cool>0?Math.round((1-n.cool/8)*100)+`%`:`100%`,wet:n.water>.15,grade:r?`THIRSTY`:`MOTHER`}}}if(e.kind===`tray`){let n=e.ref;if(!Fy(n)){let e=Y.mota<nd.tube;return{text:e?`BACK TUBE ROW  ${Y.mota}/${nd.tube} MOTA`:`${t}  UNLOCK BACK TUBE  ${nd.tube} MOTA`,btn:e?`ACT`:`BUY`}}let r=W(n.strain).short;if(n.state===`empty`)return{text:`EMPTY TUBE`,btn:`ACT`};if(n.state===`rooting`){let e=Math.round(Math.min(1,n.t/nv)*100);return{text:Y.cubes>0?`${t}  ADD ROOT CUBE`:Y.nutrients>0?`${t}  FEED TUBE`:`${r} ROOTING ${e}%`,btn:Y.cubes>0?`CUBE`:Y.nutrients>0?`FEED`:`ACT`,tip:{name:r,water:`100%`,grow:e+`%`,wet:!0,grade:`HYDRO`}}}return{text:`${t}  MOVE ${r} TO VEG`,btn:`VEG`,tip:{name:r,water:`100%`,grow:`100%`,wet:!0,grade:`READY`}}}if(e.kind===`veg`){let n=e.ref;if(!Iy(n)){let e=n.room===`west`,r=e?nd.vegWest:nd.vegCenter,i=e?`WEST VEG ROOM`:`CENTER VEG ROOM`,a=Y.mota<r;return{text:a?`${i}  ${Y.mota}/${r} MOTA`:`${t}  UNLOCK ${i}  ${r} MOTA`,btn:a?`ACT`:`BUY`}}let r=W(n.strain).short;if(n.state===`empty`)return{text:`EMPTY VEG POT`,btn:`ACT`};if(n.state===`veg`){let e=Math.round(Math.min(1,n.t/rv)*100);return{text:Y.nutrients>0?`${t}  FEED VEG`:`${r} VEG ${e}%`,btn:Y.nutrients>0?`FEED`:`ACT`,tip:{name:r,water:`100%`,grow:e+`%`,wet:!0,grade:``}}}return{text:`${t}  TAKE ${r} CLONE`,btn:`TAKE`,tip:{name:r,water:`100%`,grow:`100%`,wet:!0,grade:`PLANT IT`}}}if(e.kind===`stand`){let e=My();return e.n>0?{text:`${t}  SELL ${e.n} JAR${e.n>1?`S`:``}  +${e.mota} MOTA`,btn:`SELL`}:uu(Y.seeds)<4?{text:`${t}  BUY ${td.n} SEEDS  ${td.cost} MOTA`,btn:`BUY`}:{text:`BRING CURED JARS`,btn:`ACT`}}if(e.kind===`computer`)return{text:`${t}  USE COMPUTER`,btn:`SHOP`};if(e.kind===`breeder`){if(!X.house.vegCenter){let e=Y.mota<nd.vegCenter;return{text:e?`BREEDING LAB  ${Y.mota}/${nd.vegCenter} MOTA`:`${t}  UNLOCK BREEDING LAB  ${nd.vegCenter} MOTA`,btn:e?`ACT`:`UNLOCK`}}return{text:`${t}  OPEN GENETICS LAB`,btn:`BREED`}}if(e.kind===`breed-pot`){let n=e.ref,r=W(n.strain).short;if(!Iy(n)){let e=Y.mota<nd.vegCenter;return{text:e?`BREEDING LAB  ${Y.mota}/${nd.vegCenter} MOTA`:`${t}  UNLOCK BREEDING LAB  ${nd.vegCenter} MOTA`,btn:e?`ACT`:`BUY`}}if(n.state===`empty`){let e=mv();return{text:e.ok?`${t}  PLANT ${e.text} FOR SEEDS`:`SELECT A SEED IN YOUR BAG`,btn:e.ok?`PLANT`:`ACT`}}if(n.state===`growing`){let e=Math.round(Math.min(1,n.t/rv)*100);return{text:Y.nutrients>0?`${t}  FEED SEED CROP`:`${r} SEED CROP ${e}%`,btn:Y.nutrients>0?`FEED`:`ACT`,tip:{name:r,water:`100%`,grow:e+`%`,wet:!0,grade:`SEED CROP`}}}return{text:`${t}  COLLECT 4 ${r} SEEDS`,btn:`COLLECT`,tip:{name:r,water:`100%`,grow:`100%`,wet:!0,grade:`SEEDS READY`}}}let n=Y.mota<520;return{text:n?`WAREHOUSE  ${Y.mota}/520 MOTA`:`${t}  BUY WAREHOUSE  520 MOTA`,btn:n?`ACT`:`BUY`}}function Kb(e){Z.t+=e;let t=1-Math.exp(-e*5);if(Y.mode===`title`)Z.yawT=Math.sin(Z.t*.22)*.55,Z.distT=25,Z.pitch=.74,Z.target.lerp(bb.set(0,1.2,-4.2),t);else if(Y.mode===`dress`){let e=M_().w<820;Z.pitch+=((e?.72:.46)-Z.pitch)*t,Z.yawT=.62,Z.distT=e?6.6:8.8,Z.target.lerp(bb.set(Q.x,Q.y+(e?.35:.95),Q.z),t)}else if(Y.mode===`play`){let n=X.warehouse,r=n.contains(Q.x,Q.z)||n.owned&&n.open&&Math.abs(Q.z)<1.35&&Q.x>22.2&&Q.x<24.8,i=Q.z<-13.8||r;Z.pitch+=((i?1.08:.85)-Z.pitch)*t;let a=-11,o=Q.x>10?18:11,s=Q.z<-8?-12:-9,c=7;Q.z<-13.6&&(a=-od.half,o=od.half,s=od.back-.4),Q.x>18&&(a=16,o=36,s=-7,c=7);let l=Pt.clamp(Q.x,a,o),u=Pt.clamp(Q.z,s,c),d=bb.set(l*.85+Q.x*.15,.9+Q.y,u*.85+Q.z*.15);Z.free||Z.target.lerp(d,1-Math.exp(-e*4)),(yv.has(`KeyQ`)||xv.cam<0)&&(Z.yawT+=e*1.6),(yv.has(`KeyE`)||xv.cam>0)&&(Z.yawT-=e*1.6),Z.yawT=Pt.clamp(Z.yawT,-1.3,1.3)}Z.yaw+=(Z.yawT-Z.yaw)*(1-Math.exp(-e*8)),Z.dist+=(Z.distT-Z.dist)*(1-Math.exp(-e*6));let n=Math.cos(Z.pitch);F_.position.set(Z.target.x+Math.sin(Z.yaw)*n*Z.dist,Z.target.y+Math.sin(Z.pitch)*Z.dist,Z.target.z+Math.cos(Z.yaw)*n*Z.dist),F_.lookAt(Z.target)}var qb=.32,Jb=240,Yb=``,Xb=new B(8304868),Zb=new B(1054764),Qb=new B(12051656),$b=new B(15770474),ex=new B(1712184);function tx(e){if(!X||Y.mode===`loading`)return;qb+=e/Jb;let t=qb%1,n=Math.sin(t*Math.PI*2),r=t*Math.PI*2+Math.PI,i=1-Pt.smoothstep(n,-.12,.18),a=Math.cos(t*Math.PI*2)>0,o=Math.max(0,1-Math.abs(n)/.4)*(1-i);L_.position.set(Math.cos(r)*40,6+Math.max(n,0)*36,Math.sin(r)*28),L_.intensity=Pt.lerp(2.35,.22,i),L_.color.setHex(o>.45?16756858:i>.6?10401501:16773327),I_.intensity=Pt.lerp(1.35,.5,i),I_.color.setHex(i>.55?2372700:15201535),I_.groundColor.setHex(i>.55?1713172:8231506),z_.intensity=Pt.lerp(.62,.12,i),A_.uniforms.zenith.value.copy(Xb).lerp(Zb,i),A_.uniforms.horizon.value.copy(Qb).lerp($b,o*.85).lerp(ex,i),P_.background.copy(A_.uniforms.zenith.value),P_.fog.color.copy(A_.uniforms.horizon.value);let s=Pt.smoothstep(i,.2,.75);for(let e of X.scenery?.night||[])e.intensity=s*2.3;let c=`DAY`;n<-.02?c=`NIGHT`:n<.45&&a?c=`DAWN`:n<.45&&(c=`DUSK`);let l=`${c}|${1+Math.floor(qb)}`;if(l===Yb)return;Yb=l;let u=J(`clock`);u&&(J(`clock-phase`).textContent=c,J(`clock-day`).textContent=`D${1+Math.floor(qb)}`,u.classList.toggle(`night`,c===`NIGHT`),u.classList.toggle(`dusk`,c===`DAWN`||c===`DUSK`))}var nx=performance.now(),rx=0;function ix(e){requestAnimationFrame(ix);let t=Math.min(.05,(e-nx)/1e3);if(nx=e,!X)return;let n=e/1e3;if(Y.mode===`title`&&(bv.has(`Space`)||bv.has(`Enter`))&&lx(),bv.has(`Escape`)&&Y.mode===`dress`&&Ux(),bv.has(`Escape`)&&Y.mode===`shop`&&iS(),bv.has(`Escape`)&&Y.mode===`breeding`&&eS(),bv.has(`Escape`)&&Y.mode===`settings`&&gx(),bv.has(`KeyT`)&&Y.mode!==`dress`&&Y.mode!==`shop`&&Y.mode!==`breeding`&&Y.mode!==`loading`&&(Y.mode===`settings`?gx():hx()),bv.has(`KeyC`)&&Y.mode!==`dress`&&Y.mode!==`shop`&&Y.mode!==`breeding`&&Y.mode!==`settings`&&Y.mode!==`loading`&&Hx(),Y.mode===`play`&&(bv.has(`Digit1`)||bv.has(`Numpad1`)||bv.has(`Digit2`)||bv.has(`Numpad2`))){let e=bv.has(`Digit2`)||bv.has(`Numpad2`)?1:-1;Y.strainPick=ou[(Math.max(0,ou.indexOf(Y.strainPick))+e+ou.length)%ou.length],pv(),_b()}if(bv.has(`KeyH`)&&Y.mode===`play`&&Ab(),bv.has(`BracketLeft`)||bv.has(`BracketRight`)){let e=E_||D_();E_=Pt.clamp(e+(bv.has(`BracketRight`)?1:-1),1,5),localStorage.setItem(`mm-pixel`,E_),N_()}Y.mode===`play`&&(bv.has(`Space`)||bv.has(`KeyF`))&&Ey(),bv.clear();for(let e=vy.length-1;e>=0;e--)if(vy[e].t-=t,vy[e].t<=0){let t=vy[e].fn;vy.splice(e,1),t()}if(ty(t),hy(t,n),Jy(t),tx(t),H_.update(n),rx-=t,rx<=0&&X.house.roof.visible){rx=.32;let e=X.smokeAt;V_.emit({x:e.x+(Math.random()-.5)*.5,y:e.y,z:e.z+(Math.random()-.5)*.5,vx:.45+Math.random()*.2,vy:.9+Math.random()*.3,vz:.25,life:4,size:.34,grow:1.6,color:15331058,color2:12178406,g:0})}V_.update(t),Kb(t),vv(n),Ub(),Hb(),gb(),sb(n),dv+=t,(Y.mode===`play`||Y.mode===`dress`||Y.mode===`shop`||Y.mode===`breeding`||Y.mode===`settings`&&Y.returnMode===`play`)&&dv>4&&(dv=0,lv=!0),lv&&(uv+=t,uv>.25&&kx()),T_.setRenderTarget(k_),T_.render(P_,F_),T_.setRenderTarget(null),A_.uniforms.tColor.value=k_.texture,A_.uniforms.tDepth.value=k_.depthTexture,j_.render(T_)}function ax(){try{let e=window.top&&window.top.document;if(e&&(e.fullscreenElement||e.webkitFullscreenElement))return!0}catch{}return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}var ox=0;function sx(){if(ax()||performance.now()-ox<900)return;ox=performance.now();let e=[];try{window.top&&window.top.document&&window.top.document.documentElement&&e.push(window.top.document.documentElement)}catch{}e.push(document.documentElement,document.body,T_.domElement);let t=new Set;for(let n of e){if(!n||t.has(n))continue;t.add(n);let e=n.requestFullscreen||n.webkitRequestFullscreen||n.mozRequestFullScreen||n.msRequestFullscreen;if(typeof e==`function`)try{let t=e.call(n);t&&typeof t.catch==`function`&&t.catch(()=>{});return}catch{}}}function cx(){Y.mode!==`play`&&Y.mode!==`dress`&&Y.mode!==`loading`&&(C_.has(`autostart`)||kv?.address)&&(sx(),Y.mode=`play`,J(`title`).classList.add(`gone`),J(`title`).classList.remove(`dressing`),J(`dress`).classList.add(`hidden`),J(`hud`).classList.remove(`hidden`),Vx(!1),Bx(J(`btn-you`),!1),Sv&&(J(`touch`).classList.remove(`hidden`),Ab(!1)),_b(),Z.yawT=0,Z.distT=27,fv=!0,kx(),Ix(),kb())}function lx(){Y.mode!==`title`||Av||Fv()&&cx()}function ux(){return E_?E_<=1?`FINE`:`X${E_}`:`AUTO`}function dx(e){let t=E_||D_();E_=Pt.clamp(t+e,1,5),localStorage.setItem(`mm-pixel`,String(E_)),N_(),px()}function fx(){if(!kv||kv.provider!==`email`||Av)return;g_(kv,``);let e=Fp({...Mp()||{v:1,...Ox()},wallet:``});e&&Pv&&n_(kv,e),J(`set-unlink-ask`)?.classList.add(`hidden`),_x()}function px(){let e=kv?.provider===`email`&&!!kv.address,t=e&&!!kv.wallet;J(`set-account`)&&(J(`set-account`).textContent=e?__(kv):`NOT SIGNED IN`),J(`btn-set-out`)?.classList.toggle(`hidden`,!e);let n=J(`set-wallet-copy`);n&&(n.textContent=e?t?`This Klever wallet is linked to the account. The garden stays with the email.`:`Connect the Klever extension or app, then approve the signature. This does not send any coins.`:`Sign in with email on the title screen. The wallet connects here.`);let r=J(`set-wallet-who`);r&&!Av&&(r.textContent=t?`Linked ${ig(kv.wallet)}`:e?`No Klever wallet is linked to this account.`:``);let i=J(`btn-set-wallet`);i&&(i.classList.toggle(`hidden`,!e||t),i.disabled=Av),J(`btn-set-unlink`)?.classList.toggle(`hidden`,!t),t||J(`set-unlink-ask`)?.classList.add(`hidden`);let a=J(`set-wallet-help`);a&&!Av&&a.classList.add(`hidden`),J(`set-px`)&&(J(`set-px`).textContent=ux()),J(`set-fs`)&&(J(`set-fs`).textContent=ax()?`WINDOW`:`FULL`)}function mx(){Y.mode===`settings`?gx():hx()}function hx(){B_&&Y.mode!==`loading`&&Y.mode!==`settings`&&Y.mode!==`dress`&&Y.mode!==`shop`&&Y.mode!==`breeding`&&(Y.returnMode=Y.mode===`play`?`play`:`title`,Y.mode=`settings`,J(`settings`).classList.remove(`hidden`),Y.returnMode===`title`?J(`title`).classList.add(`dressing`):(J(`touch`).classList.add(`hidden`),Ab(!1),Vx(!1)),Bx(J(`btn-settings`),!0),Bx(J(`btn-settings-title`),!0),J(`set-wallet-err`)&&(J(`set-wallet-err`).textContent=``),px())}function gx(){if(Y.mode!==`settings`)return;J(`settings`).classList.add(`hidden`),J(`title`).classList.remove(`dressing`);let e=Y.returnMode===`play`?`play`:`title`;Y.mode=e,Bx(J(`btn-settings`),!1),Bx(J(`btn-settings-title`),!1),e===`play`&&Sv&&J(`touch`).classList.remove(`hidden`)}function _x(){let e=J(`wallet-status`),t=J(`account-form`),n=J(`btn-wallet-switch`),r=kv?.provider===`email`&&!!kv.address;if(t?.classList.toggle(`hidden`,r),n?.classList.toggle(`hidden`,!r),J(`press-line`)?.classList.toggle(`hidden`,!r||Nv),!e)return;if(!r){e.textContent=`Create an account with email and a password. Your garden is saved to that account.`;let t=document.querySelector(`#dress .dress-note`);t&&(t.textContent=`SAVED ON THIS DEVICE`),px();return}e.replaceChildren();let i=document.createElement(`b`);i.textContent=__(kv);let a=jv===`new`?`New garden saved to `:jv===`claimed`?`Your garden is now saved to `:`Welcome back. This garden belongs to `,o=Nv?`. Opening the garden saved to this account…`:Mv===`on`?`. It is saved to this account.`:Mv===`error`?`. Saved on this browser. The garden record could not be reached.`:`. It stays on this browser under that account.`;e.append(a,i,o);let s=document.querySelector(`#dress .dress-note`);s&&(s.textContent=`SAVED TO THIS ACCOUNT`),px()}function vx(){let e=J(`btn-set-wallet`),t=J(`set-wallet-who`);e&&(e.disabled=!0),t&&(t.textContent=`Opening Klever Wallet…`),Tg();let n=()=>{if(Av=!1,e&&(e.disabled=!1),kv?.wallet){px();return}let n=J(`set-wallet-help`);n&&Ag(n,`mobile-app`),t&&(t.textContent=`Klever Wallet is open. Tap Connect wallet, then approve the signature.`)};window.setTimeout(()=>{if(!document.hidden){n();return}let e=()=>{document.hidden||(document.removeEventListener(`visibilitychange`,e),n())};document.addEventListener(`visibilitychange`,e)},1500)}async function yx(e=!1){if(Av||kv?.provider!==`email`||e&&(kv.wallet||cg()))return;if(Y.mode!==`settings`){if(Y.mode===`dress`||Y.mode===`shop`||Y.mode===`loading`)return;hx()}if(Y.mode!==`settings`)return;if(rg()&&!window.kleverWeb&&!Eg()){lg(),Av=!0,vx();return}lg(),Av=!0;let t=J(`btn-set-wallet`),n=J(`set-wallet-who`),r=J(`set-wallet-err`);t&&(t.disabled=!0),r&&(r.textContent=``),n&&(n.textContent=rg()?`Confirm the signature in the Klever Wallet app…`:`Confirm the signature in the Klever extension…`);let i=``,a=``;try{await S_(kv);let e=await yg();g_(kv,e.address),xg();let t=Fp({...Mp()||{v:1,...Ox()},wallet:kv.wallet});t&&Pv&&n_(kv,t),_x()}catch(e){i=e.message||`The wallet could not be connected.`,(e.code===`mobile-app`||e.code===`extension`)&&(a=e.code)}finally{Av=!1,px(),i&&J(`set-wallet-err`)&&(J(`set-wallet-err`).textContent=i);let e=J(`set-wallet-help`);e&&a&&Ag(e,a)}}async function bx(e){e.provider===`email`?xg():h_(),kv=e,Pv=!1;let t=Np(e.address);jv=t.note,t.note===`new`?Px():t.save&&Fx(t.save),Nv=!0,Mv=`off`,_x();let n={open:!0},r=Mp(),i=!r&&e.provider===`email`&&X&&B_?{v:1,...Ox()}:null;try{let t=await Promise.race([t_(e,r,n,i).catch(()=>({state:`error`,replaced:!1,garden:null})),new Promise((e,t)=>setTimeout(()=>{n.open=!1,t(Error(`timeout`))},8e3))]);if(Mv=t.state,t.replaced&&t.garden){jv=`loaded`,Fp(t.garden,!1);let e=Mp();e&&Fx(e)}else t.seeded&&t.garden&&Fp(t.garden,!1);Pv=t.state===`on`,e.provider===`email`&&g_(e,(t.replaced?t.garden?.wallet:Mp()?.wallet||e.wallet)||``)}catch{Mv=`error`}Nv=!1,_x(),Ix(),xx()}function xx(){let e=window.kleverHub;!xx.bound&&e&&typeof e.onAccountChanged==`function`&&(xx.bound=!0,e.onAccountChanged(e=>{let t=e?.address;t&&kv?.provider===`email`&&kv.wallet&&t!==kv.wallet&&(g_(kv,``),_x())}))}async function Sx(e){if(Av||Y.mode===`play`)return;let t=J(`account-email`)?.value||``,n=J(`account-password`)?.value||``,r=J(`wallet-status`),i=u_(t,n);if(i){r&&(r.textContent=i);return}Av=!0;let a=[J(`btn-email-in`),J(`btn-email-new`),J(`account-email`),J(`account-password`)];for(let e of a)e&&(e.disabled=!0);r&&(r.textContent=e===`new`?`Creating the account…`:`Signing in…`);try{let i=e===`new`?await b_(t,n):await x_(t,n),a=J(`account-password`);if(a&&(a.value=``),!i){r&&(r.textContent=`Check that email for a confirmation, then sign in.`);return}await bx(i),kv?.provider===`email`&&!kv.wallet&&C_.get(`klever`)===`1`&&(Av=!1,await yx(!0))}catch(e){r&&(r.textContent=e.message||`The account could not be opened.`)}finally{Av=!1;for(let e of a)e&&(e.disabled=!1)}}function Cx(){let e=Y.mode===`play`||Y.mode===`settings`||Y.returnMode===`play`;Y.mode===`settings`&&gx(),kx(),r_(),Sg(),h_(),Jg(),Pp(),kv=null,jv=``,Mv=`off`,Pv=!1;let t=J(`account-password`);t&&(t.value=``),e&&(Y.mode=`title`,J(`title`).classList.remove(`gone`,`dressing`),J(`hud`).classList.add(`hidden`),J(`touch`).classList.add(`hidden`)),_x(),Ix()}function wx(){J(`account-form`)?.addEventListener(`submit`,e=>{e.preventDefault(),Sx(`in`)}),J(`btn-email-new`)?.addEventListener(`click`,()=>Sx(`new`)),J(`btn-wallet-switch`)?.addEventListener(`click`,()=>Cx()),J(`btn-set-wallet`)?.addEventListener(`click`,()=>yx()),J(`btn-set-unlink`)?.addEventListener(`click`,()=>{J(`set-unlink-ask`)?.classList.remove(`hidden`),J(`set-wallet-err`)&&(J(`set-wallet-err`).textContent=``)}),J(`btn-set-unlink-no`)?.addEventListener(`click`,()=>J(`set-unlink-ask`)?.classList.add(`hidden`)),J(`btn-set-unlink-yes`)?.addEventListener(`click`,()=>fx()),J(`btn-set-out`)?.addEventListener(`click`,()=>Cx()),J(`btn-settings`)?.addEventListener(`pointerdown`,e=>{Lv(e),mx()}),J(`btn-settings-title`)?.addEventListener(`pointerdown`,e=>{Lv(e),mx()}),J(`btn-settings-close`)?.addEventListener(`pointerdown`,e=>{Lv(e),gx()}),J(`set-px-down`)?.addEventListener(`click`,()=>dx(-1)),J(`set-px-up`)?.addEventListener(`click`,()=>dx(1)),J(`set-fs`)?.addEventListener(`click`,()=>{ax()?document.exitFullscreen?.():sx(),setTimeout(px,200)})}var Tx=[`...XX...`,`X..XX..X`,`XX.XX.XX`,`.XXXXXX.`,`X.XXXX.X`,`..XXXX..`,`...XX...`,`...XX...`,`...XX...`,`...XX...`];for(let e of[`leaf-icon`,`leaf-logo`]){let t=J(e),n=t.getContext(`2d`);t.width=8,t.height=10,Tx.forEach((e,t)=>[...e].forEach((e,r)=>{e===`X`&&(n.fillStyle=t>6?`#6fa23f`:(r+t)%3==0?`#7fb44a`:`#93c85a`,n.fillRect(r,t,1,1))}))}function Ex(e){return{state:e.state,stage:e.stage,prog:e.prog,water:e.water,stress:e.stress,age:e.age,strain:e.strain||`bd`,fromClone:!!e.fromClone,ripe:e.ripe||0,holdVeg:!!e.holdVeg,topped:!!e.topped,trained:!!e.trained,lollipop:!!e.lollipop}}function Dx(e){return e?{strain:e.strain||`bd`,grade:e.grade,grams:e.grams|0,t:e.t||0,dry:e.dry||0,hold:e.hold||0,dropped:!!e.dropped,cure:e.cure||0,burped:!!e.burped,missed:!!e.missed,needsBurp:!!e.needsBurp}:null}function Ox(){return{look:Y.look||B_.getLook(),mota:Y.mota|0,grams:Y.grams|0,harvested:Y.harvested|0,jars:{AAAA:Y.jars.AAAA|0,AAA:Y.jars.AAA|0,AA:Y.jars.AA|0,A:Y.jars.A|0},wet:Y.wet.slice(0,12).map(e=>({grade:e.grade,grams:e.grams|0,strain:e.strain||`bd`,trimmed:!!e.trimmed})),hybrids:gu(),genetics:[...new Set(Y.genetics)].filter(e=>!!au[e]),seeds:Object.fromEntries(ou.map(e=>[e,Y.seeds[e]|0])),clones:Y.clones.slice(0,8).map(e=>({strain:W(e.strain).id})),nutrients:Y.nutrients|0,cubes:Y.cubes|0,strainPick:au[Y.strainPick]?Y.strainPick:`bd`,px:Q.x,py:Q.y,pz:Q.z,facing:Q.facing,warehouse:!!X.warehouse.owned,lights:X.warehouse.lights===`flower`?`flower`:`veg`,plots:U_.map(Ex),wh:G_.map(Ex),mothers:X.house.mothers.map(e=>({state:e.state||`empty`,strain:e.strain,stage:e.stage|0,prog:e.prog||0,water:e.water,cool:e.cool||0})),trays:X.house.trays.map(e=>({state:e.state,strain:e.strain,t:e.t||0})),veg:X.house.veg.filter(e=>e.room!==`center`).map(e=>({state:e.state,strain:e.strain,t:e.t||0})),breed:X.house.veg.filter(e=>e.room===`center`).map(e=>({state:e.state,strain:e.strain,t:e.t||0})),hooks:X.shed.hooks.map(e=>Dx(e.item)),cure:X.shed.cureJars.map(e=>Dx(e.item)),unlocks:{mother2:!!X.house.mother2,tube2:!!X.house.tube2,vegWest:!!X.house.vegWest,vegCenter:!!X.house.vegCenter,beds:zf.map((e,t)=>!U_[t*4]?.locked)},...kv?.provider===`email`&&kv.email?{accountEmail:kv.email}:{},...kv?.wallet?{wallet:kv.wallet}:{}}}function kx(){if(!fv||!X||!B_)return;lv=!1,uv=0;let e=Fp(Ox());e&&Pv&&kv&&n_(kv,e,e=>{e?.conflict&&(Pv=!1)})}function Ax(e,t,n){e.state=n.state===`growing`||n.state===`ready`||n.state===`ripening`?n.state:`empty`,e.stage=Math.max(0,Math.min(4,n.stage|0)),e.prog=Number(n.prog)||0,e.water=Number(n.water)||0,e.stress=Number(n.stress)||0,e.age=Number(n.age)||0,e.ripe=Number(n.ripe)||0,e.holdVeg=!!n.holdVeg&&e.state===`growing`,e.strain=W(n.strain).id,e.fromClone=!!n.fromClone,e.topped=!!n.topped,e.trained=!!n.trained,e.lollipop=!!n.lollipop,e.pop=0,t.geometry=cv(e.state===`empty`?0:e.stage,e.strain),t.visible=e.state!==`empty`}function jx(e,t){!t||!Dy.includes(t.grade)?(e.item=null,e.mesh.visible=!1):(e.item={strain:W(t.strain).id,grade:t.grade,grams:t.grams|0,t:Number(t.t)||0,dry:Number(t.dry)||0,hold:Number(t.hold)||0,dropped:!!t.dropped,cure:Number(t.cure)||0,burped:!!t.burped,missed:!!t.missed,needsBurp:!!t.needsBurp,sealed:!1},e.nug&&(e.mesh.geometry=X.shed.nugGeo[e.item.strain]||X.shed.nugGeo.bd),e.mesh.visible=!0)}function Mx(){for(let e of X.house.mothers){let t=e.state===`growing`||e.state===`mother`;if(e.plant.visible=t,!t)continue;let n=e.state===`mother`?2:e.stage||0;e.plant.geometry=cv(n,e.strain||`bd`),e.plant.scale.setScalar(e.state===`mother`?1.2:.5+n*.3)}for(let e of X.house.trays){let t=e.state===`rooting`||e.state===`ready`;e.plant.visible=t,t&&(e.plant.geometry=cv(+(e.state===`ready`),e.strain||`bd`),e.plant.scale.setScalar(.48))}for(let e of X.house.veg){let t=e.state===`veg`||e.state===`growing`||e.state===`ready`;e.plant.visible=t,t&&(e.plant.geometry=cv(2,e.strain||`bd`),e.plant.scale.setScalar(e.state===`ready`?.9:.72+.18*Math.min(1,(e.t||0)/rv)))}}function Nx(e,t){e.forEach((e,n)=>{e.state=`empty`,e.stage=0,e.prog=0,e.water=0,e.stress=0,e.age=0,e.strain=`bd`,e.ripe=0,e.holdVeg=!1,e.fromClone=!1,e.topped=!1,e.trained=!1,e.lollipop=!1,e.pop=0,t[n].visible=!1,t[n].geometry=cv(0,`bd`)})}function Px(){Y.seeds=lu(),Y.clones=[],Y.nutrients=0,Y.cubes=0,Y.mota=0,Y.jars={AAAA:0,AAA:0,AA:0,A:0},Y.grams=0,Y.harvested=0,Y.wet=[],Y.genetics=[],Y.hybrids=[],_u(),Y.strainPick=`bd`,Q.x=0,Q.z=-6.3,Q.y=0,X.house.upper.visible=!1,Q.facing=Y.mode===`dress`?.62:0,Nx(U_,W_),U_.forEach((e,t)=>{e.locked=!!(t/4|0)}),Nx(G_,K_);let e=X.warehouse;e.owned=!1,e.gateOpen=!1,e.open=!1,e.lights=`veg`,sv(e),e.forSale.visible=!0,X.lot.mesh.visible=!0,X.house.open=!1,X.shed.open=!1,X.house.mother2=!1,X.house.tube2=!1,X.house.vegWest=!1,X.house.vegCenter=!1;for(let e of X.house.mothers)Object.assign(e,{state:`empty`,strain:null,stage:0,prog:0,water:1,cool:0});for(let e of X.house.trays)Object.assign(e,{state:`empty`,strain:null,t:0});for(let e of X.house.veg)Object.assign(e,{state:`empty`,strain:null,t:0});for(let e of X.shed.hooks)e.item=null,e.mesh.visible=!1;for(let e of X.shed.cureJars)e.item=null,e.mesh.visible=!1;Mx()}function Fx(e){_u();for(let t of Array.isArray(e.hybrids)?e.hybrids:[])mu(t);Y.hybrids=gu(),Y.genetics=Array.isArray(e.genetics)?[...new Set(e.genetics.filter(e=>au[e]))]:[],Y.mota=e.mota|0,Y.harvested=e.harvested|0;for(let t of Dy)Y.jars[t]=Math.max(0,e.jars?.[t]|0);Ay(),Y.wet=Array.isArray(e.wet)?e.wet.slice(0,12).map(e=>({grade:Dy.includes(e.grade)?e.grade:`A`,grams:e.grams|0,strain:W(e.strain).id,trimmed:e.trimmed===void 0||!!e.trimmed})):[],Y.seeds=Object.fromEntries(ou.map(t=>[t,Math.max(0,e.seeds?.[t]|0)])),Y.clones=Array.isArray(e.clones)?e.clones.slice(0,8).map(e=>({strain:W(e.strain||e).id})):[],Y.nutrients=Math.max(0,e.nutrients|0),Y.cubes=Math.max(0,e.cubes|0),Y.strainPick=au[e.strainPick]?e.strainPick:`bd`,Y.look=Yl(e.look),B_.setLook(Y.look),Number.isFinite(e.px)&&(Q.x=e.px),Number.isFinite(e.py)&&(Q.y=e.py),Number.isFinite(e.pz)&&(Q.z=e.pz),Number.isFinite(e.facing)&&(Q.facing=e.facing),Array.isArray(e.plots)&&e.plots.forEach((e,t)=>U_[t]&&e&&Ax(U_[t],W_[t],e)),Array.isArray(e.wh)&&e.wh.forEach((e,t)=>G_[t]&&e&&Ax(G_[t],K_[t],e)),X.house.mothers.forEach((t,n)=>{let r=e.mothers?.[n];if(!r)return;let i=r.state===`growing`||r.state===`mother`;t.state=i?r.state:`empty`,t.strain=i?W(r.strain).id:null,t.stage=i?Math.max(0,Math.min(2,r.stage|0)):0,t.prog=Number(r.prog)||0,t.water=Number.isFinite(r.water)?r.water:1,t.cool=Number(r.cool)||0}),X.house.trays.forEach((t,n)=>{let r=e.trays?.[n];if(!r)return;let i=r.state===`rooting`||r.state===`ready`;t.state=i?r.state:`empty`,t.strain=i?W(r.strain).id:null,t.t=Number(r.t)||0});let t=X.house.veg.filter(e=>e.room!==`center`),n=X.house.veg.filter(e=>e.room===`center`);X.house.veg.forEach((r,i)=>{let a=r.room===`center`?e.breed?.[n.indexOf(r)]||e.veg?.[i]:e.veg?.[t.indexOf(r)]||e.veg?.[i];if(!a)return;let o=r.room===`center`?[`growing`,`veg`,`ready`].includes(a.state):[`veg`,`ready`].includes(a.state);r.state=o?r.room===`center`?a.state===`ready`?`ready`:`growing`:a.state:`empty`,r.strain=o?W(a.strain).id:null,r.t=Number(a.t)||0});let r=e.unlocks,i=!r;X.house.mother2=i?!0:!!r.mother2,X.house.tube2=i?!0:!!r.tube2,X.house.vegWest=i?!0:!!r.vegWest,X.house.vegCenter=i?!0:!!r.vegCenter;let a=!i&&Array.isArray(r.beds)?r.beds:null;U_.forEach((e,t)=>{e.locked=a?a[t/4|0]===!1:!1}),X.shed.hooks.forEach((t,n)=>jx(t,e.hooks?.[n])),X.shed.cureJars.forEach((t,n)=>jx(t,e.cure?.[n]));let o=!!e.warehouse;X.warehouse.owned=o,X.warehouse.gateOpen=o,X.warehouse.open=!1,X.warehouse.forSale.visible=!o,X.warehouse.lights=e.lights===`flower`?`flower`:`veg`,sv(X.warehouse),X.lot.mesh.visible=!o,X.house.open=!1,X.shed.open=!1,X.shed.contains(Q.x,Q.z)&&(X.shed.open=!0),X.house.contains(Q.x,Q.z)&&(X.house.open=!0),X.house.upper.visible=Q.y>1.45||X.house.onStair(Q.x,Q.z,Q.y),o&&X.warehouse.contains(Q.x,Q.z)&&(X.warehouse.open=!0),Mx()}function Ix(){let e=!!kv?.address,t=e&&!!Mp();J(`press-desk`).textContent=t?`CLICK OR SPACE TO CONTINUE`:`CLICK OR SPACE TO START`,J(`press-touch`).textContent=t?`TAP TO CONTINUE`:`TAP TO START`,J(`btn-new`).classList.toggle(`hidden`,!t),J(`press-line`)?.classList.toggle(`hidden`,!e||Nv),_x()}var Lx=0,Rx=0;function zx(){let e=J(`dress-rows`);e.replaceChildren();for(let{key:t,label:n}of Rl){let r=Bl[t],i=r.find(e=>e.id===Y.look?.[t])||r[0],a=document.createElement(`div`);a.className=`dress-row`;let o=document.createElement(`span`);o.textContent=n;let s=document.createElement(`button`);s.type=`button`,s.className=`tbtn`,s.dataset.k=t,s.dataset.d=`-1`,s.setAttribute(`aria-label`,`Previous ${n}`),s.textContent=`<`;let c=document.createElement(`b`);c.textContent=i.name;let l=document.createElement(`button`);l.type=`button`,l.className=`tbtn`,l.dataset.k=t,l.dataset.d=`1`,l.setAttribute(`aria-label`,`Next ${n}`),l.textContent=`>`,a.append(o,s,c,l),e.append(a)}}function Bx(e,t){e&&(e.classList.toggle(`on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`))}function Vx(e){J(`inv`).classList.toggle(`hidden`,!e),Bx(J(`btn-inv`),e)}function Hx(){B_&&Y.mode!==`loading`&&Y.mode!==`dress`&&Y.mode!==`shop`&&Y.mode!==`settings`&&Y.mode!==`breeding`&&(Y.returnMode=Y.mode===`play`?`play`:`title`,Y.mode=`dress`,Lx=Q.facing,Q.facing=.62,J(`dress`).classList.remove(`hidden`),J(`title`).classList.add(`dressing`),Ab(!1),Vx(!1),Bx(J(`btn-character`),!0),Y.returnMode===`play`&&(J(`brand`).classList.add(`hidden`),J(`btn-inv`).classList.add(`hidden`),J(`touch`).classList.add(`hidden`),Bx(J(`btn-you`),!0)),zx())}function Ux(){if(Y.mode!==`dress`)return;J(`dress`).classList.add(`hidden`),J(`title`).classList.remove(`dressing`),Q.facing=Lx;let e=Y.returnMode===`play`?`play`:`title`;Y.mode=e,Bx(J(`btn-character`),!1),Bx(J(`btn-you`),!1),J(`brand`).classList.remove(`hidden`),J(`btn-inv`).classList.remove(`hidden`),e===`play`&&(J(`hud`).classList.remove(`hidden`),Sv&&J(`touch`).classList.remove(`hidden`),Z.distT=27,Z.yawT=0),fv=!0,kx(),Ix()}function Wx(e,t){let n=Bl[e];if(!n)return;let r=n[(Math.max(0,n.findIndex(t=>t.id===Y.look[e]))+t+n.length)%n.length];Y.look={...Y.look,[e]:r.id},B_.setLook(Y.look),zx(),pv()}function Gx(){fv=!0;let e={...Y.look||B_.getLook()};Px(),Y.look=e,B_.setLook(e),Y.mode===`dress`&&(Q.facing=.62),kx(),Ix(),_b(),$(`NEW GROW — ONE MOTHER, ONE TUBE, ONE GROW BOX`,`good`)}function Kx(e){Rx>performance.now()?(Rx=0,e.textContent=`NEW GROW`,Gx()):(Rx=performance.now()+4e3,e.textContent=`CONFIRM`,setTimeout(()=>{e.textContent===`CONFIRM`&&(e.textContent=`NEW GROW`)},4e3))}function qx(e,t,n){let r=W(t);e.className=`chip`+(n?` on`:``),e.replaceChildren();let i=document.createElement(`i`);i.style.background=Yy(r.bud[0]),e.append(i,document.createTextNode(`${r.short} ${Y.seeds[t]|0}`))}function Jx(e){let t=J(`strains`);if(!e){t.classList.add(`hidden`);return}t.classList.remove(`hidden`);let n=au[Y.strainPick]?Y.strainPick:`bd`;if(t.dataset.pick===n&&t.childElementCount===ou.length)ou.forEach((e,r)=>qx(t.children[r],e,e===n));else{t.dataset.pick=n,t.replaceChildren();for(let e of ou){let r=document.createElement(`button`);r.type=`button`,qx(r,e,e===n),r.dataset.strain=e,r.addEventListener(`pointerdown`,n=>{Lv(n),Y.strainPick=e,t.dataset.pick=``,Jx(!0),pv(),_b()}),t.append(r)}}}function Yx(e){let t=W(e);return`${t.short}  FLOWER ${Math.round(t.flower*100)}% · VEG ${Math.round(t.veg*100)}% · SIZE ${Math.round(t.stature*100)}% · FROST ${Math.round(t.frost*100)}%`}function Xx(){let e=J(`breed-parent-a`),t=J(`breed-parent-b`),n=e.value,r=t.value,i=Y.genetics.filter(e=>!!au[e]);for(let n of[e,t])if(n.replaceChildren(),!i.length){let e=document.createElement(`option`);e.value=``,e.textContent=`NO GENETICS READ YET`,n.append(e)}else for(let e of i){let t=document.createElement(`option`);t.value=e,t.textContent=W(e).name,n.append(t)}i.includes(n)?e.value=n:i[0]&&(e.value=i[0]),i.includes(r)?t.value=r:i[1]?t.value=i[1]:i[0]&&(t.value=i[0]),Zx()}function Zx(){let e=J(`breed-parent-a`).value,t=J(`breed-parent-b`).value,n=!!e&&!!t&&e!==t&&!!au[e]&&!!au[t];J(`breed-parent-a-readout`).textContent=e?Yx(e):`HARVEST A PLANT TO READ ITS GENETICS`,J(`breed-parent-b-readout`).textContent=t?Yx(t):`A SECOND DISTINCT GENETIC READING IS REQUIRED`;let r=J(`breed-offspring-readout`);if(n){let n=W(e),i=W(t),a=e=>Math.round((n[e]+i[e])/2*100);r.textContent=`OFFSPRING PREVIEW  FLOWER ${a(`flower`)}% · VEG ${a(`veg`)}% · SIZE ${a(`stature`)}% · FROST ${a(`frost`)}% · FINISH ${((n.weeks+i.weeks)/2).toFixed(1)} WK`}else r.textContent=`CHOOSE TWO DISTINCT READINGS TO PREVIEW THEIR BLENDED TRAITS.`;let i=J(`btn-breed-cross`);i.disabled=!n,J(`breed-status`).textContent=Y.genetics.length<2?`HARVEST TWO DIFFERENT CULTIVARS TO BUILD YOUR GENETICS LIBRARY.`:n?`READY TO CROSS. OFFSPRING INHERITS BLENDED PARENT TRAITS.`:`CHOOSE TWO DIFFERENT PARENTS.`}function Qx(){let e=J(`breed-parent-a`).value,t=J(`breed-parent-b`).value;if(!e||!t||e===t)return $(`CHOOSE TWO DIFFERENT PARENTS`);let n=hu(e,t);if(!n)return $(`COULD NOT CREATE THAT CROSS`);Y.hybrids=gu(),Y.seeds[n.id]=(Y.seeds[n.id]|0)+1,Y.strainPick=n.id,J(`breed-status`).textContent=`NEW CROSS: ${n.name}. ONE TRIAL SEED ADDED TO YOUR BAG.`,$(`${n.short} HYBRID CREATED — PLANT THE TRIAL SEED IN A BREEDING POT`,`good`),_b(),pv()}function $x(){return Y.mode===`play`?X.house.vegCenter?(Y.mode=`breeding`,Q.cool=.25,J(`breeding`).classList.remove(`hidden`),J(`touch`).classList.add(`hidden`),yb.style.display=`none`,Xx(),J(`breed-parent-a`)?.focus({preventScroll:!0}),!0):Ry(`vegCenter`,nd.vegCenter,`BREEDING LAB`):!0}function eS(){Y.mode===`breeding`&&(J(`breeding`).classList.add(`hidden`),Y.mode=`play`,Sv&&J(`touch`).classList.remove(`hidden`))}function tS(){J(`btn-breeding-close`).addEventListener(`pointerdown`,e=>{Lv(e),eS()}),J(`btn-breed-cross`).addEventListener(`pointerdown`,e=>{Lv(e),Qx()}),J(`breed-parent-a`).addEventListener(`change`,Zx),J(`breed-parent-b`).addEventListener(`change`,Zx)}function nS(){J(`shop-mota`).textContent=String(Y.mota|0);let e=J(`shop-rows`);e.replaceChildren();for(let t of ld){let n=document.createElement(`div`);n.className=`shop-row`;let r=document.createElement(`div`);r.className=`shop-name`;let i=document.createElement(`b`);i.textContent=t.name;let a=document.createElement(`span`);a.textContent=t.detail,r.append(i,a);let o=document.createElement(`b`);o.className=`shop-cost`,o.textContent=`${t.cost}`;let s=document.createElement(`button`);s.type=`button`,s.className=`tbtn`,s.dataset.buy=t.id,s.textContent=Y.mota>=t.cost?`BUY`:`NEED`,n.append(r,o,s),e.append(n)}}function rS(){return Y.mode===`play`&&(Y.mode=`shop`,Q.cool=.25,J(`shop`).classList.remove(`hidden`),J(`touch`).classList.add(`hidden`),yb.style.display=`none`,nS()),!0}function iS(){Y.mode===`shop`&&(J(`shop`).classList.add(`hidden`),Y.mode=`play`,Sv&&J(`touch`).classList.remove(`hidden`))}function aS(e){let t=ld.find(t=>t.id===e);if(t){if(Y.mota<t.cost)return $(`NEED ${t.cost} MOTA`);Y.mota-=t.cost,t.kind===`seed`?Y.seeds[t.strain]=(Y.seeds[t.strain]|0)+t.n:t.kind===`nutrient`?Y.nutrients+=t.n:Y.cubes+=t.n,$(`${t.name} BOUGHT`,`good`),_b(),nS(),pv()}}function oS(){J(`btn-shop-close`).addEventListener(`pointerdown`,e=>{Lv(e),iS()}),J(`shop-rows`).addEventListener(`pointerdown`,e=>{let t=e.target.closest(`button[data-buy]`);t&&(Lv(e),aS(t.dataset.buy))})}function sS(){let e=e=>{Lv(e),Y.mode===`dress`?Ux():Hx()};J(`btn-character`).addEventListener(`pointerdown`,e),J(`btn-you`).addEventListener(`pointerdown`,e),J(`btn-inv`).addEventListener(`pointerdown`,e=>{Lv(e),Y.mode===`play`&&Vx(J(`inv`).classList.contains(`hidden`))}),J(`strain-now`).addEventListener(`pointerdown`,e=>{Lv(e),Y.mode===`play`&&(Y.strainPick=ou[(Math.max(0,ou.indexOf(Y.strainPick))+1)%ou.length],pv(),_b())});let t=e=>{Lv(e),Y.mode===`play`&&Ab()};J(`tasks-toggle`).addEventListener(`click`,()=>{hb(!ub)}),addEventListener(`pointerdown`,e=>{ub&&!e.target.closest?.(`#tasks`)&&hb(!1)}),J(`btn-help-hud`).addEventListener(`pointerdown`,t),J(`btn-help-close`).addEventListener(`pointerdown`,t),J(`btn-dress-done`).addEventListener(`pointerdown`,e=>{Lv(e),Ux()}),J(`btn-new`).addEventListener(`pointerdown`,e=>{Lv(e),Kx(J(`btn-new`))}),J(`btn-dress-new`).addEventListener(`pointerdown`,e=>{Lv(e),Kx(J(`btn-dress-new`))}),J(`dress-rows`).addEventListener(`pointerdown`,e=>{let t=e.target.closest(`button[data-k]`);t&&(Lv(e),Wx(t.dataset.k,Number(t.dataset.d)||1))})}function cS(){let e=Mp();fv=!!e,X=wp(),P_.add(X.group),B_=iu(e?.look),Y.look=B_.getLook(),P_.add(B_.root),V_=new Tp(P_),H_=new Dp(P_),hv(),ny(),ry(),Bb(),_v(),e&&Fx(e),N_(),addEventListener(`resize`,N_),visualViewport?.addEventListener(`resize`,N_),addEventListener(`fullscreenchange`,N_),addEventListener(`webkitfullscreenchange`,N_);let t=e=>{(Y.mode===`play`||Y.mode===`shop`||Y.mode===`dress`||Y.mode===`settings`||Y.mode===`breeding`)&&sx()};addEventListener(`pointerdown`,t,!0),addEventListener(`touchend`,t,!0),addEventListener(`orientationchange`,()=>setTimeout(N_,120)),J(`welcome-close`)?.addEventListener(`click`,Ob),J(`welcome-help`)?.addEventListener(`click`,()=>{Ob(),Ab(!0)}),J(`welcome`)?.addEventListener(`keydown`,e=>{if(e.key===`Escape`){e.preventDefault(),Ob();return}if(e.key!==`Tab`)return;let t=[...J(`welcome`).querySelectorAll(`button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])`)];if(!t.length)return;let n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}),J(`btn-guide-open`)?.addEventListener(`click`,Db),Xv(),sS(),oS(),tS(),wx(),Ov(Dv()),matchMedia(`(max-width: 820px)`).addEventListener(`change`,()=>Ov(Dv()||Sv)),Y.mode=`title`,addEventListener(`pagehide`,()=>{kx(),r_()}),window.__mm={scene:P_,renderer:T_,state:Y,cam:Z,P:Q,slotsData:U_,whData:G_,world:X,camera:F_,player:B_,startGame:cx,act:Ey,setStage:iy,plantMeshes:W_,whMeshes:K_,stick:xv,openDress:Hx,closeDress:Ux,openShop:rS,closeShop:iS,buySupply:aS,newGrow:Gx,flushSave:kx,loadSave:Mp,onWallet:yx,openSettings:hx,closeSettings:gx,get day(){return qb},set day(e){qb=e}},lS()}async function lS(){let e=m_();e?await bx(e):_x(),Ix(),_b(),J(`loading`).classList.add(`gone`),C_.has(`autostart`)?cx():e?.provider===`email`&&!e.wallet&&C_.get(`klever`)===`1`&&!cg()&&setTimeout(()=>yx(!0),600)}requestAnimationFrame(()=>setTimeout(cS,30)),requestAnimationFrame(ix);