import{C as e,S as t,_ as n,a as r,b as i,c as a,d as o,f as s,g as c,h as l,i as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y,v as b,x,y as S}from"./enterprise-Bq2O-k7O.js";var C=1e3,w=1001,T=1002,E=1003,D=1004,O=1005,ee=1006,k=1007,A=1008,te=1009,ne=1010,re=1011,ie=1012,j=1013,ae=1014,oe=1015,se=1016,ce=1017,le=1018,ue=1020,de=35902,fe=35899,pe=1021,me=1022,he=1023,ge=1026,_e=1027,ve=1028,ye=1029,be=1030,xe=1031,Se=1033,Ce=33776,we=33777,Te=33778,Ee=33779,De=35840,Oe=35841,ke=35842,Ae=35843,je=36196,Me=37492,Ne=37496,Pe=37488,Fe=37489,Ie=37490,Le=37491,M=37808,Re=37809,ze=37810,Be=37811,N=37812,Ve=37813,P=37814,He=37815,Ue=37816,We=37817,Ge=37818,Ke=37819,qe=37820,Je=37821,Ye=36492,Xe=36494,Ze=36495,Qe=36283,$e=36284,et=36285,tt=36286,nt=2300,rt=2301,it=2302,at=2303,ot=2400,st=2401,ct=2402,lt=3200,ut=`srgb`,dt=`srgb-linear`,ft=`linear`,pt=`srgb`,mt=7680,ht=35044,gt=35048,_t=2e3;function vt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function yt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function bt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function xt(){let e=bt(`canvas`);return e.style.display=`block`,e}var St={};function Ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function wt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function F(...e){e=wt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function I(...e){e=wt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Tt(...e){let t=e.join(` `);t in St||(St[t]=!0,F(...e))}function Et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Dt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ot=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},kt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),At=1234567,jt=Math.PI/180,Mt=180/Math.PI;function Nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kt[e&255]+kt[e>>8&255]+kt[e>>16&255]+kt[e>>24&255]+`-`+kt[t&255]+kt[t>>8&255]+`-`+kt[t>>16&15|64]+kt[t>>24&255]+`-`+kt[n&63|128]+kt[n>>8&255]+`-`+kt[n>>16&255]+kt[n>>24&255]+kt[r&255]+kt[r>>8&255]+kt[r>>16&255]+kt[r>>24&255]).toLowerCase()}function Pt(e,t,n){return Math.max(t,Math.min(n,e))}function Ft(e,t){return(e%t+t)%t}function It(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Lt(e,t,n){return e===t?0:(n-e)/(t-e)}function Rt(e,t,n){return(1-n)*e+n*t}function zt(e,t,n,r){return Rt(e,t,1-Math.exp(-n*r))}function Bt(e,t=1){return t-Math.abs(Ft(e,t*2)-t)}function Vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ut(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Wt(e,t){return e+Math.random()*(t-e)}function Gt(e){return e*(.5-Math.random())}function Kt(e){e!==void 0&&(At=e);let t=At+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qt(e){return e*jt}function Jt(e){return e*Mt}function Yt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Xt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Zt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Qt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:F(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function $t(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function en(e,t){if(t.constructor===Float32Array)return e;let n=$t(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function tn(e,t){if(t.constructor===Float32Array)return e;let n=$t(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var nn={DEG2RAD:jt,RAD2DEG:Mt,generateUUID:Nt,clamp:Pt,euclideanModulo:Ft,mapLinear:It,inverseLerp:Lt,lerp:Rt,damp:zt,pingpong:Bt,smoothstep:Vt,smootherstep:Ht,randInt:Ut,randFloat:Wt,randFloatSpread:Gt,seededRandom:Kt,degToRad:qt,radToDeg:Jt,isPowerOfTwo:Yt,ceilPowerOfTwo:Xt,floorPowerOfTwo:Zt,setQuaternionFromProperEuler:Qt,normalize:tn,denormalize:en},rn=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:F(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return on.copy(this).projectOnVector(e),this.sub(on)}reflect(e){return this.sub(on.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},on=new L,sn=new an,cn=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ln.makeScale(e,t)),this}rotate(e){return Tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ln.makeRotation(-e)),this}translate(e,t){return Tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ln.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ln=new cn,un=new cn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dn=new cn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fn(){let e={enabled:!0,workingColorSpace:dt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=mn(e.r),e.g=mn(e.g),e.b=mn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=hn(e.r),e.g=hn(e.g),e.b=hn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ft:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[dt]:{primaries:t,whitePoint:r,transfer:ft,toXYZ:un,fromXYZ:dn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:t,whitePoint:r,transfer:pt,toXYZ:un,fromXYZ:dn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),e}var pn=fn();function mn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function hn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var gn,_n=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gn===void 0&&(gn=bt(`canvas`)),gn.width=e.width,gn.height=e.height;let t=gn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=gn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=bt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=mn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(mn(t[e]/255)*255):t[e]=mn(t[e]);return{data:t,width:e.width,height:e.height}}return F(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},vn=0,yn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=Nt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(bn(r[t].image)):e.push(bn(r[t]))}else e=bn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function bn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?_n.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(F(`Texture: Unable to serialize Texture.`),{})}var xn=0,Sn=new L,Cn=class e extends Ot{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=w,i=w,a=ee,o=A,s=he,c=te,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xn++}),this.uuid=Nt(),this.name=``,this.source=new yn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new rn(0,0),this.repeat=new rn(1,1),this.center=new rn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sn).x}get height(){return this.source.getSize(Sn).y}get depth(){return this.source.getSize(Sn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){F(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?F(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case C:e.x-=Math.floor(e.x);break;case w:e.x=e.x<0?0:1;break;case T:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case C:e.y-=Math.floor(e.y);break;case w:e.y=e.y<0?0:1;break;case T:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null,Cn.DEFAULT_MAPPING=300,Cn.DEFAULT_ANISOTROPY=1;var wn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tn=class extends Ot{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wn(0,0,e,t),this.scissorTest=!1,this.viewport=new wn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Cn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ee,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new yn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},En=class extends Tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dn=class extends Cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},On=class extends Cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=E,this.minFilter=E,this.wrapR=w,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},kn=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/An.setFromMatrixColumn(e,0).length(),i=1/An.setFromMatrixColumn(e,1).length(),a=1/An.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mn,e,Nn)}lookAt(e,t,n){let r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Pn.crossVectors(n,In),Pn.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Pn.crossVectors(n,In)),Pn.normalize(),Fn.crossVectors(In,Pn),r[0]=Pn.x,r[4]=Fn.x,r[8]=In.x,r[1]=Pn.y,r[5]=Fn.y,r[9]=In.y,r[2]=Pn.z,r[6]=Fn.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],te=r[14],ne=r[3],re=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*ne,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*A+c*ie,i[12]=a*w+o*O+s*te+c*j,i[1]=l*x+u*T+d*ee+f*ne,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*A+f*ie,i[13]=l*w+u*O+d*te+f*j,i[2]=p*x+m*T+h*ee+g*ne,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*A+g*ie,i[14]=p*w+m*O+h*te+g*j,i[3]=_*x+v*T+y*ee+b*ne,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*A+b*ie,i[15]=_*w+v*O+y*te+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=An.set(r[0],r[1],r[2]).length(),o=An.set(r[4],r[5],r[6]).length(),s=An.set(r[8],r[9],r[10]).length();i<0&&(a=-a),jn.copy(this);let c=1/a,l=1/o,u=1/s;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=l,jn.elements[5]*=l,jn.elements[6]*=l,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=_t,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=_t,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},An=new L,jn=new kn,Mn=new L(0,0,0),Nn=new L(1,1,1),Pn=new L,Fn=new L,In=new L,Ln=new kn,Rn=new an,zn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:F(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rn.setFromEuler(this),this.setFromQuaternion(Rn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER=`XYZ`;var Bn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Vn=0,Hn=new L,Un=new an,Wn=new kn,Gn=new L,Kn=new L,qn=new L,Jn=new an,Yn=new L(1,0,0),Xn=new L(0,1,0),Zn=new L(0,0,1),Qn={type:`added`},$n={type:`removed`},er={type:`childadded`,child:null},tr={type:`childremoved`,child:null},nr=class e extends Ot{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vn++}),this.uuid=Nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new zn,r=new an,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kn},normalMatrix:{value:new cn}}),this.matrix=new kn,this.matrixWorld=new kn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(Yn,e)}rotateY(e){return this.rotateOnAxis(Xn,e)}rotateZ(e){return this.rotateOnAxis(Zn,e)}translateOnAxis(e,t){return Hn.copy(e).applyQuaternion(this.quaternion),this.position.add(Hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yn,e)}translateY(e){return this.translateOnAxis(Xn,e)}translateZ(e){return this.translateOnAxis(Zn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gn.copy(e):Gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Kn,Gn,this.up):Wn.lookAt(Gn,Kn,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Un.setFromRotationMatrix(Wn),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(I(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qn),er.child=e,this.dispatchEvent(er),er.child=null):I(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($n),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qn),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,qn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Jn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};nr.DEFAULT_UP=new L(0,1,0),nr.DEFAULT_MATRIX_AUTO_UPDATE=!0,nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rr=class extends nr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ir={type:`move`},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ir)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},or={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},cr={h:0,s:0,l:0};function lr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var R=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=pn.workingColorSpace){return this.r=e,this.g=t,this.b=n,pn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=pn.workingColorSpace){if(e=Ft(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=lr(i,r,e+1/3),this.g=lr(i,r,e),this.b=lr(i,r,e-1/3)}return pn.colorSpaceToWorking(this,r),this}setStyle(e,t=ut){function n(t){t!==void 0&&parseFloat(t)<1&&F(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:F(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);F(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=or[e.toLowerCase()];return n===void 0?F(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return pn.workingToColorSpace(ur.copy(this),e),Math.round(Pt(ur.r*255,0,255))*65536+Math.round(Pt(ur.g*255,0,255))*256+Math.round(Pt(ur.b*255,0,255))}getHexString(e=ut){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pn.workingColorSpace){pn.workingToColorSpace(ur.copy(this),t);let n=ur.r,r=ur.g,i=ur.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=pn.workingColorSpace){return pn.workingToColorSpace(ur.copy(this),t),e.r=ur.r,e.g=ur.g,e.b=ur.b,e}getStyle(e=ut){pn.workingToColorSpace(ur.copy(this),e);let t=ur.r,n=ur.g,r=ur.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(cr);let n=Rt(sr.h,cr.h,t),r=Rt(sr.s,cr.s,t),i=Rt(sr.l,cr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ur=new R;R.NAMES=or;var dr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new R(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fr=class extends nr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pr=new L,mr=new L,hr=new L,gr=new L,_r=new L,vr=new L,yr=new L,br=new L,xr=new L,Sr=new L,Cr=new wn,wr=new wn,Tr=new wn,Er=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pr.subVectors(e,t),r.cross(pr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){pr.subVectors(r,t),mr.subVectors(n,t),hr.subVectors(e,t);let a=pr.dot(pr),o=pr.dot(mr),s=pr.dot(hr),c=mr.dot(mr),l=mr.dot(hr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gr)!==null&&gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,gr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,gr.x),s.addScaledVector(a,gr.y),s.addScaledVector(o,gr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Cr.setScalar(0),wr.setScalar(0),Tr.setScalar(0),Cr.fromBufferAttribute(e,t),wr.fromBufferAttribute(e,n),Tr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Cr,i.x),a.addScaledVector(wr,i.y),a.addScaledVector(Tr,i.z),a}static isFrontFacing(e,t,n,r){return pr.subVectors(n,t),mr.subVectors(e,t),pr.cross(mr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),pr.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;_r.subVectors(r,n),vr.subVectors(i,n),br.subVectors(e,n);let s=_r.dot(br),c=vr.dot(br);if(s<=0&&c<=0)return t.copy(n);xr.subVectors(e,r);let l=_r.dot(xr),u=vr.dot(xr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(_r,a);Sr.subVectors(e,i);let f=_r.dot(Sr),p=vr.dot(Sr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(vr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return yr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(yr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(_r,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,kr):kr.fromBufferAttribute(r,t),kr.applyMatrix4(e.matrixWorld),this.expandByPoint(kr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kr),kr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Rr.subVectors(this.max,Lr),jr.subVectors(e.a,Lr),Mr.subVectors(e.b,Lr),Nr.subVectors(e.c,Lr),Pr.subVectors(Mr,jr),Fr.subVectors(Nr,Mr),Ir.subVectors(jr,Nr);let t=[0,-Pr.z,Pr.y,0,-Fr.z,Fr.y,0,-Ir.z,Ir.y,Pr.z,0,-Pr.x,Fr.z,0,-Fr.x,Ir.z,0,-Ir.x,-Pr.y,Pr.x,0,-Fr.y,Fr.x,0,-Ir.y,Ir.x,0];return!Vr(t,jr,Mr,Nr,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,jr,Mr,Nr,Rr))?!1:(zr.crossVectors(Pr,Fr),t=[zr.x,zr.y,zr.z],Vr(t,jr,Mr,Nr,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Or)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Or=[new L,new L,new L,new L,new L,new L,new L,new L],kr=new L,Ar=new Dr,jr=new L,Mr=new L,Nr=new L,Pr=new L,Fr=new L,Ir=new L,Lr=new L,Rr=new L,zr=new L,Br=new L;function Vr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Br.fromArray(e,a);let o=i.x*Math.abs(Br.x)+i.y*Math.abs(Br.y)+i.z*Math.abs(Br.z),s=t.dot(Br),c=n.dot(Br),l=r.dot(Br);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Hr=new L,Ur=new rn,Wr=0,Gr=class extends Ot{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ht,this.updateRanges=[],this.gpuType=oe,this.version=0,this._normalizationScale=e===void 0?void 0:$t(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix4(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyNormalMatrix(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.transformDirection(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?en(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?tn(e,this.array):Math.round(e*t)}},Kr=class extends Gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},qr=class extends Gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Jr=class extends Gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yr=new Dr,Xr=new L,Zr=new L,Qr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Yr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Zr)),this.expandByPoint(Xr.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$r=0,ei=new kn,ti=new nr,ni=new L,ri=new Dr,ii=new Dr,ai=new L,oi=class e extends Ot{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=Nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(vt(e)?qr:Kr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new cn().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return ti.lookAt(e),ti.updateMatrix(),this.applyMatrix4(ti.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Jr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&F(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)I(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ri.setFromBufferAttribute(n),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)I(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);else if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ii.setFromBufferAttribute(n),this.morphTargetsRelative?(ai.addVectors(ri.min,ii.min),ri.expandByPoint(ai),ai.addVectors(ri.max,ii.max),ri.expandByPoint(ai)):(ri.expandByPoint(ii.min),ri.expandByPoint(ii.max))}ri.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ai.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ai));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ai.fromBufferAttribute(a,t),o&&(ni.fromBufferAttribute(e,t),ai.add(ni)),r=Math.max(r,n.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let l=new L,u=new L,d=new L,f=new rn,p=new rn,m=new rn,h=new L,g=new L;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new L,b=new L,x=new L,S=new L;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Gr(a,r,i)}if(this.index===null)return F(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},si=new L,ci=new L,li=new cn,ui=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=si.subVectors(n,t).cross(ci.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(si),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||li.getNormalMatrix(e),r=this.coplanarPoint(si).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},di=0,fi=class extends Ot{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:di++}),this.uuid=Nt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new R(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mt,this.stencilZFail=mt,this.stencilZPass=mt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){F(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?F(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new R().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ui().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new rn().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rn().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},pi=new L,mi=new L,hi=new L,gi=new L,_i=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mi.copy(e).add(t).multiplyScalar(.5),hi.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(mi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(hi),o=gi.dot(this.direction),s=-gi.dot(hi),c=gi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mi).addScaledVector(hi,d),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),r=pi.dot(pi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,A,te,ne;if(y>=b&&y>=x?(w=s,D=u,k=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,A=_,te=v):(S=l,C=c,T=f,E=d,O=h,ee=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,A=v,te=g):(S=s,C=l,T=u,E=f,O=p,ee=h,A=g,te=v)):(w=l,D=f,k=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,A=g,te=_):(S=c,C=s,T=d,E=u,O=m,ee=p,A=_,te=g)),w===0)return null;let re=S/w,ie=C/w,j=1/w,ae=T-re*D,oe=E-ie*D,se=O-re*k,ce=ee-ie*k,le=A-re*ne,ue=te-ie*ne,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=j*(de*D+fe*k+pe*ne);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new R(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yi=new kn,bi=new _i,xi=new Qr,Si=new L,Ci=new L,wi=new L,Ti=new L,Ei=new L,Di=new L,Oi=new L,ki=new L,Ai=class extends nr{constructor(e=new oi,t=new vi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Di.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ei.fromBufferAttribute(s,e),a?Di.addScaledVector(Ei,r):Di.addScaledVector(Ei.sub(t),r))}t.add(Di)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere),xi.applyMatrix4(i),bi.copy(e.ray).recast(e.near),xi.containsPoint(bi.origin)===!1&&(bi.intersectSphere(xi,Si)===null||bi.origin.distanceToSquared(Si)>(e.far-e.near)**2)||(yi.copy(i).invert(),bi.copy(e.ray).applyMatrix4(yi),(n.boundingBox===null||bi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Mi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Mi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Mi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Mi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ji(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ki.copy(s),ki.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ki);return l<n.near||l>n.far?null:{distance:l,point:ki.clone(),object:e}}function Mi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ci),e.getVertexPosition(c,wi),e.getVertexPosition(l,Ti);let u=ji(e,t,n,r,Ci,wi,Ti,Oi);if(u){let e=new L;Er.getBarycoord(Oi,Ci,wi,Ti,e),i&&(u.uv=Er.getInterpolatedAttribute(i,s,c,l,e,new rn)),a&&(u.uv1=Er.getInterpolatedAttribute(a,s,c,l,e,new rn)),o&&(u.normal=Er.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};Er.getNormal(Ci,wi,Ti,t.normal),u.face=t,u.barycoord=e}return u}var Ni=class extends Cn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=E,l=E,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pi=class extends Gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fi=new kn,Ii=new kn,Li=[],Ri=new Dr,zi=new kn,Bi=new Ai,Vi=new Qr,Hi=class extends Ai{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,zi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Ri.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Ri)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Vi.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Fi),Ii.multiplyMatrices(n,Fi),Bi.matrixWorld=Ii,Bi.raycast(e,Li);for(let e=0,n=Li.length;e<n;e++){let n=Li[e];n.instanceId=i,n.object=this,t.push(n)}Li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ni(new Float32Array(r*this.count),r,this.count,ve,oe));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new Qr,Wi=new rn(.5,.5),Gi=new L,Ki=class{constructor(e=new ui,t=new ui,n=new ui,r=new ui,i=new ui,a=new ui){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_t,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476+Wi.distanceTo(e.center),Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gi.x=r.normal.x>0?e.max.x:e.min.x,Gi.y=r.normal.y>0?e.max.y:e.min.y,Gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qi=new kn,Ji=class e{constructor(){this.coordinateSystem=_t,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];qi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Ki),n[e].setFromProjectionMatrix(qi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ki),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Yi=class extends Cn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xi=class extends Cn{constructor(e,t,n=ae,r,i,a,o=E,s=E,c,l=ge,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zi=class extends Xi{constructor(e,t=ae,n=301,r,i,a=E,o=E,s,c=ge){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qi=class extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$i=class e extends oi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Jr(c,3)),this.setAttribute(`normal`,new Jr(l,3)),this.setAttribute(`uv`,new Jr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ea=class e extends oi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Jr(p,3)),this.setAttribute(`normal`,new Jr(m,3)),this.setAttribute(`uv`,new Jr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ta=class e extends oi{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new rn;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Jr(s,3)),this.setAttribute(`normal`,new Jr(c,3)),this.setAttribute(`uv`,new Jr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},na=class e extends oi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Jr(p,3)),this.setAttribute(`normal`,new Jr(m,3)),this.setAttribute(`uv`,new Jr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ra(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(aa(i))i.isRenderTargetTexture?(F(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(aa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ia(e){let t={};for(let n=0;n<e.length;n++){let r=ra(e[n]);for(let e in r)t[e]=r[e]}return t}function aa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function oa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function sa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pn.workingColorSpace}var ca={clone:ra,merge:ia},la=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ua=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,da=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=la,this.fragmentShader=ua,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=oa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new R().setHex(r.value);break;case`v2`:this.uniforms[n].value=new rn().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new wn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new cn().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new kn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fa=class extends da{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},pa=class extends fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new R(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new R(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new rn(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ma=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=lt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ga(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function _a(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var va=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ya=class extends va{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ot,endingEnd:ot}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case st:i=e,o=2*t-n;break;case ct:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case st:a=e,s=2*n-t;break;case ct:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ba=class extends va{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},xa=class extends va{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Sa=class extends va{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ta(n,t,g,y,r);i[p]=Ca(x,o,_,b,m)}return i}};function Ca(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function wa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ta(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ca(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=wa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ea=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ga(t,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ga(e.times,Array),values:ga(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),_a(e.settings)&&(n.settings={inTangents:ga(e.settings.inTangents,Array),outTangents:ga(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case nt:t=this.InterpolantFactoryMethodDiscrete;break;case rt:t=this.InterpolantFactoryMethodLinear;break;case it:t=this.InterpolantFactoryMethodSmooth;break;case at:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return F(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nt;case this.InterpolantFactoryMethodLinear:return rt;case this.InterpolantFactoryMethodSmooth:return it;case this.InterpolantFactoryMethodBezier:return at}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;_a(this.settings)&&(Da(this.settings.inTangents,e),Da(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;_a(this.settings)&&(Oa(this.settings.inTangents,e),Oa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(I(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){I(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){I(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&yt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){I(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===it,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,_a(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Da(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Oa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ea.prototype.ValueTypeName=``,Ea.prototype.TimeBufferType=Float32Array,Ea.prototype.ValueBufferType=Float32Array,Ea.prototype.DefaultInterpolation=rt;var ka=class extends Ea{constructor(e,t,n){super(e,t,n)}};ka.prototype.ValueTypeName=`bool`,ka.prototype.ValueBufferType=Array,ka.prototype.DefaultInterpolation=nt,ka.prototype.InterpolantFactoryMethodLinear=void 0,ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};Aa.prototype.ValueTypeName=`color`;var ja=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};ja.prototype.ValueTypeName=`number`;var Ma=class extends va{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)an.slerpFlat(i,0,a,c-o,a,c,s);return i}},Na=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}};Na.prototype.ValueTypeName=`quaternion`,Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Ea{constructor(e,t,n){super(e,t,n)}};Pa.prototype.ValueTypeName=`string`,Pa.prototype.ValueBufferType=Array,Pa.prototype.DefaultInterpolation=nt,Pa.prototype.InterpolantFactoryMethodLinear=void 0,Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};Fa.prototype.ValueTypeName=`vector`;var Ia=class extends nr{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new R(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},La=class extends Ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(nr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new R(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ra=new kn,za=new L,Ba=new L,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rn(512,512),this.mapType=te,this.map=null,this.mapPass=null,this.matrix=new kn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new rn(1,1),this._viewportCount=1,this._viewports=[new wn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;za.setFromMatrixPosition(e.matrixWorld),t.position.copy(za),Ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ba),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ra,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ha=new L,Ua=new an,Wa=new L,Ga=class extends nr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new kn,this.projectionMatrix=new kn,this.projectionMatrixInverse=new kn,this.coordinateSystem=_t,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,Ua,Wa),Wa.x===1&&Wa.y===1&&Wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ua,Wa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ha,Ua,Wa),Wa.x===1&&Wa.y===1&&Wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ua,Wa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ka=new L,qa=new rn,Ja=new rn,Ya=class extends Ga{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mt*2*Math.atan(Math.tan(jt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,t){return this.getViewBounds(e,qa,Ja),t.subVectors(Ja,qa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xa=class extends Va{constructor(){super(new Ya(90,1,.5,500)),this.isPointLightShadow=!0}},Za=class extends Ia{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Xa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qa=class extends Ga{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$a=class extends Va{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(nr.DEFAULT_UP),this.updateMatrix(),this.target=new nr,this.shadow=new $a}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},to=-90,no=1,ro=class extends nr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ya(to,no,e,t);r.layers=this.layers,this.add(r);let i=new Ya(to,no,e,t);i.layers=this.layers,this.add(i);let a=new Ya(to,no,e,t);a.layers=this.layers,this.add(a);let o=new Ya(to,no,e,t);o.layers=this.layers,this.add(o);let s=new Ya(to,no,e,t);s.layers=this.layers,this.add(s);let c=new Ya(to,no,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},io=class extends Ya{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ao=`\\[\\]\\.:\\/`,oo=RegExp(`[\\[\\]\\.:\\/]`,`g`),so=`[^\\[\\]\\.:\\/]`,co=`[^`+ao.replace(`\\.`,``)+`]`,lo=`((?:WC+[\\/:])*)`.replace(`WC`,so),uo=`(WCOD+)?`.replace(`WCOD`,co),fo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,so),po=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,so),mo=RegExp(`^`+lo+uo+fo+po+`$`),ho=[`material`,`materials`,`bones`,`map`],go=class{constructor(e,t,n){let r=n||_o.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_o=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(oo,``)}static parseTrackName(e){let t=mo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ho.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){F(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){I(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){I(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){I(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){I(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){I(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;I(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_o.Composite=go,_o.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_o.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_o.prototype.GetterByBindingType=[_o.prototype._getValue_direct,_o.prototype._getValue_array,_o.prototype._getValue_arrayElement,_o.prototype._getValue_toArray],_o.prototype.SetterByBindingTypeAndVersioning=[[_o.prototype._setValue_direct,_o.prototype._setValue_direct_setNeedsUpdate,_o.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_o.prototype._setValue_array,_o.prototype._setValue_array_setNeedsUpdate,_o.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_o.prototype._setValue_arrayElement,_o.prototype._setValue_arrayElement_setNeedsUpdate,_o.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_o.prototype._setValue_fromArray,_o.prototype._setValue_fromArray_setNeedsUpdate,_o.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vo=new kn,yo=class{constructor(e,t,n=0,r=1/0){this.ray=new _i(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Bn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):I(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return vo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vo),this}intersectObject(e,t=!0,n=[]){return xo(e,this,n,t),n.sort(bo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)xo(e[r],this,n,t);return n.sort(bo),n}};function bo(e,t){return e.distance-t.distance}function xo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)xo(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function So(e,t,n,r){let i=Co(r);switch(n){case pe:return e*t;case ve:return e*t/i.components*i.byteLength;case ye:return e*t/i.components*i.byteLength;case be:return e*t*2/i.components*i.byteLength;case xe:return e*t*2/i.components*i.byteLength;case me:return e*t*3/i.components*i.byteLength;case he:return e*t*4/i.components*i.byteLength;case Se:return e*t*4/i.components*i.byteLength;case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Te:case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oe:case Ae:return Math.max(e,16)*Math.max(t,8)/4;case De:case ke:return Math.max(e,8)*Math.max(t,8)/2;case je:case Me:case Pe:case Fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ne:case Ie:case Le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Re:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ze:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Be:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case N:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case P:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case He:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ue:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case We:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ge:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ke:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case qe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Je:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ye:case Xe:case Ze:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Qe:case $e:return Math.ceil(e/4)*Math.ceil(t/4)*8;case et:case tt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Co(e){switch(e){case te:case ne:return{byteLength:1,components:1};case ie:case re:case se:return{byteLength:2,components:1};case ce:case le:return{byteLength:2,components:4};case ae:case j:case oe:return{byteLength:4,components:1};case de:case fe:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?F(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function wo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function To(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Eo={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},z={common:{diffuse:{value:new R(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new cn},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new cn}},envmap:{envMap:{value:null},envMapRotation:{value:new cn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new cn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new cn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new cn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new cn},normalScale:{value:new rn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new cn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new cn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new cn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new cn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new R(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new R(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new R(16777215)},opacity:{value:1},center:{value:new rn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new cn},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0}}},Do={basic:{uniforms:ia([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.fog]),vertexShader:Eo.meshbasic_vert,fragmentShader:Eo.meshbasic_frag},lambert:{uniforms:ia([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.fog,z.lights,{emissive:{value:new R(0)},envMapIntensity:{value:1}}]),vertexShader:Eo.meshlambert_vert,fragmentShader:Eo.meshlambert_frag},phong:{uniforms:ia([z.common,z.specularmap,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.fog,z.lights,{emissive:{value:new R(0)},specular:{value:new R(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Eo.meshphong_vert,fragmentShader:Eo.meshphong_frag},standard:{uniforms:ia([z.common,z.envmap,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.roughnessmap,z.metalnessmap,z.fog,z.lights,{emissive:{value:new R(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Eo.meshphysical_vert,fragmentShader:Eo.meshphysical_frag},toon:{uniforms:ia([z.common,z.aomap,z.lightmap,z.emissivemap,z.bumpmap,z.normalmap,z.displacementmap,z.gradientmap,z.fog,z.lights,{emissive:{value:new R(0)}}]),vertexShader:Eo.meshtoon_vert,fragmentShader:Eo.meshtoon_frag},matcap:{uniforms:ia([z.common,z.bumpmap,z.normalmap,z.displacementmap,z.fog,{matcap:{value:null}}]),vertexShader:Eo.meshmatcap_vert,fragmentShader:Eo.meshmatcap_frag},points:{uniforms:ia([z.points,z.fog]),vertexShader:Eo.points_vert,fragmentShader:Eo.points_frag},dashed:{uniforms:ia([z.common,z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Eo.linedashed_vert,fragmentShader:Eo.linedashed_frag},depth:{uniforms:ia([z.common,z.displacementmap]),vertexShader:Eo.depth_vert,fragmentShader:Eo.depth_frag},normal:{uniforms:ia([z.common,z.bumpmap,z.normalmap,z.displacementmap,{opacity:{value:1}}]),vertexShader:Eo.meshnormal_vert,fragmentShader:Eo.meshnormal_frag},sprite:{uniforms:ia([z.sprite,z.fog]),vertexShader:Eo.sprite_vert,fragmentShader:Eo.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Eo.background_vert,fragmentShader:Eo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new cn}},vertexShader:Eo.backgroundCube_vert,fragmentShader:Eo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Eo.cube_vert,fragmentShader:Eo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Eo.equirect_vert,fragmentShader:Eo.equirect_frag},distance:{uniforms:ia([z.common,z.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Eo.distance_vert,fragmentShader:Eo.distance_frag},shadow:{uniforms:ia([z.lights,z.fog,{color:{value:new R(0)},opacity:{value:1}}]),vertexShader:Eo.shadow_vert,fragmentShader:Eo.shadow_frag}};Do.physical={uniforms:ia([Do.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new cn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new cn},clearcoatNormalScale:{value:new rn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new cn},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new cn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new cn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new cn},sheen:{value:0},sheenColor:{value:new R(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new cn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new cn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new cn},transmissionSamplerSize:{value:new rn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new cn},attenuationDistance:{value:0},attenuationColor:{value:new R(0)},specularColor:{value:new R(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new cn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new cn},anisotropyVector:{value:new rn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new cn}}]),vertexShader:Eo.meshphysical_vert,fragmentShader:Eo.meshphysical_frag};var Oo={r:0,b:0,g:0},ko=new kn,Ao=new cn;Ao.set(-1,0,0,0,1,0,0,0,1);function jo(e,t,n,r,i,a){let o=new R(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Ai(new $i(1,1,1),new da({name:`BackgroundCubeMaterial`,uniforms:ra(Do.backgroundCube.uniforms),vertexShader:Do.backgroundCube.vertexShader,fragmentShader:Do.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ko.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ao),l.material.toneMapped=pn.getTransfer(i.colorSpace)!==pt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ai(new ea(2,2),new da({name:`BackgroundMaterial`,uniforms:ra(Do.background.uniforms),vertexShader:Do.background.vertexShader,fragmentShader:Do.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=pn.getTransfer(i.colorSpace)!==pt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Oo,sa(e)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Mo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function No(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Po(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(F(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&F(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&F(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Fo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ui,s=new cn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Io=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $i(5,5,5),i=new da({name:`CubemapFromEquirect`,uniforms:ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ai(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ee),new ro(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Lo=256,Ro=3,zo=20,Bo=256,Vo=16,Ho=3,Uo=new L,Wo=new R,Go=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ro(1,10,null),this._boxMesh=new Ai(new $i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Uo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Wo));let h=new ro(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lo,Zt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Lo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ko(e,!1,!1),n=Math.log2(e)-Ro;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ko(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Jo(),this._integrationMaterial=Yo());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Vo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ho)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Bo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Xo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Ko(e,t,n){return new Io(e,{minFilter:A,generateMipmaps:t,type:se,colorSpace:dt,depthBuffer:n})}function qo(e,t,n){return new da({name:e,uniforms:t,vertexShader:Eo.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Jo(){return qo(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bo}u

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
	`)}function Yo(){return qo(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vo}},`

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
	`)}function Xo(){return qo(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zo}
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
	`)}function Zo(){return qo(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function Qo(){return qo(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $o(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Io(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Go(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Go(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function es(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ts(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?qr:Kr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ns(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function is(e,t,n){let r=new WeakMap,i=new wn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Dn(h,p,m,u);g.type=oe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new rn(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function as(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var os={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ss(e,t,n,r,i,a){let o=new En(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new oi;u.setAttribute(`position`,new Jr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Jr([0,2,0,0,2,0],2));let d=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ai(u,d),p=new Qa(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new En(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}),c=new En(t,n,{type:se,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Xi(t,n),a===!0&&(l.format=_e,l.type=ue)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},pn.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=os[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var cs=new Cn,ls=new Xi(1,1),us=new Zi(1),ds=new Dn,fs=new On,ps=new Yi,ms=[],hs=[],gs=new Float32Array(16),_s=new Float32Array(9),vs=new Float32Array(4);function ys(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ms[i];if(a===void 0&&(a=new Float32Array(i),ms[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function bs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ss(e,t){let n=hs[t];n===void 0&&(n=new Int32Array(t),hs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2fv(this.addr,t),xs(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bs(n,t))return;e.uniform3fv(this.addr,t),xs(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4fv(this.addr,t),xs(n,t)}}function Ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;vs.set(r),e.uniformMatrix2fv(this.addr,!1,vs),xs(n,r)}}function Os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;_s.set(r),e.uniformMatrix3fv(this.addr,!1,_s),xs(n,r)}}function ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;gs.set(r),e.uniformMatrix4fv(this.addr,!1,gs),xs(n,r)}}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2iv(this.addr,t),xs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3iv(this.addr,t),xs(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4iv(this.addr,t),xs(n,t)}}function Ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2uiv(this.addr,t),xs(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3uiv(this.addr,t),xs(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4uiv(this.addr,t),xs(n,t)}}function Rs(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Rs(ls):cs,n.setTexture2D(t||a,i)}function Bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fs,i)}function Vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Rs(us):ps,n.setTextureCube(t||a,i)}function Hs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ds,i)}function Us(e){switch(e){case 5126:return Cs;case 35664:return ws;case 35665:return Ts;case 35666:return Es;case 35674:return Ds;case 35675:return Os;case 35676:return ks;case 5124:case 35670:return As;case 35667:case 35671:return js;case 35668:case 35672:return Ms;case 35669:case 35673:return Ns;case 5125:return Ps;case 36294:return Fs;case 36295:return Is;case 36296:return Ls;case 35678:case 36198:case 36298:case 36306:case 35682:return zs;case 35679:case 36299:case 36307:return Bs;case 35680:case 36300:case 36308:case 36293:return Vs;case 36289:case 36303:case 36311:case 36292:return Hs}}function Ws(e,t){e.uniform1fv(this.addr,t)}function Gs(e,t){let n=ys(t,this.size,2);e.uniform2fv(this.addr,n)}function Ks(e,t){let n=ys(t,this.size,3);e.uniform3fv(this.addr,n)}function qs(e,t){let n=ys(t,this.size,4);e.uniform4fv(this.addr,n)}function Js(e,t){let n=ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ys(e,t){let n=ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xs(e,t){let n=ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Zs(e,t){e.uniform1iv(this.addr,t)}function Qs(e,t){e.uniform2iv(this.addr,t)}function $s(e,t){e.uniform3iv(this.addr,t)}function ec(e,t){e.uniform4iv(this.addr,t)}function tc(e,t){e.uniform1uiv(this.addr,t)}function nc(e,t){e.uniform2uiv(this.addr,t)}function rc(e,t){e.uniform3uiv(this.addr,t)}function ic(e,t){e.uniform4uiv(this.addr,t)}function ac(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Rs(ls):cs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function oc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fs,a[e])}function sc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Rs(us):ps;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function cc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ds,a[e])}function lc(e){switch(e){case 5126:return Ws;case 35664:return Gs;case 35665:return Ks;case 35666:return qs;case 35674:return Js;case 35675:return Ys;case 35676:return Xs;case 5124:case 35670:return Zs;case 35667:case 35671:return Qs;case 35668:case 35672:return $s;case 35669:case 35673:return ec;case 5125:return tc;case 36294:return nc;case 36295:return rc;case 36296:return ic;case 35678:case 36198:case 36298:case 36306:case 35682:return ac;case 35679:case 36299:case 36307:return oc;case 35680:case 36300:case 36308:case 36293:return sc;case 36289:case 36303:case 36311:case 36292:return cc}}var uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Us(t.type)}},dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lc(t.type)}},fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function mc(e,t){e.seq.push(t),e.map[t.id]=t}function hc(e,t,n){let r=e.name,i=r.length;for(pc.lastIndex=0;;){let a=pc.exec(r),o=pc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mc(n,l===void 0?new uc(s,e,t):new dc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fc(s),mc(n,e)),n=e}}}var gc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);hc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _c(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vc=37297,yc=0;function bc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xc=new cn;function Sc(e){pn._getMatrix(xc,pn.workingColorSpace,e);let t=`mat3( ${xc.elements.map(e=>e.toFixed(4))} )`;switch(pn.getTransfer(e)){case ft:return[t,`LinearTransferOETF`];case pt:return[t,`sRGBTransferOETF`];default:return F(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Cc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bc(e.getShaderSource(t),r)}return i}function wc(e,t){let n=Sc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Tc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ec(e,t){let n=Tc[t];return n===void 0?(F(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Dc=new L;function Oc(){return pn.getLuminanceCoefficients(Dc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Dc.x.toFixed(4)}, ${Dc.y.toFixed(4)}, ${Dc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function kc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Mc).join(`
`)}function Ac(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function jc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mc(e){return e!==``}function Nc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(e){return e.replace(Fc,Lc)}function Lc(e,t){let n=Eo[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ic(n)}var Rc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(e){return e.replace(Rc,Bc)}function Bc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Vc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Hc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Uc(e){return Hc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Wc={302:`ENVMAP_MODE_REFRACTION`};function Gc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Wc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Kc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function qc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Kc[e.combine]||`ENVMAP_BLENDING_NONE`}function Jc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Uc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Gc(n),d=qc(n),f=kc(n),p=Ac(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Mc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Mc).join(`
`),g.length>0&&(g+=`
`)):(h=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Mc).join(`
`),g=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Eo.tonemapping_pars_fragment,n.toneMapping===0?``:Ec(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Eo.colorspace_pars_fragment,wc(`linearToOutputTexel`,n.outputColorSpace),Oc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Mc).join(`
`)),o=Ic(o),o=Nc(o,n),o=Pc(o,n),s=Ic(s),s=Nc(s,n),s=Pc(s,n),o=zc(o),s=zc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=_c(i,i.VERTEX_SHADER,v),x=_c(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Cc(i,b,`vertex`),n=Cc(i,x,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):F(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new gc(i,m),w=jc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,vc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Yc=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zc(e),t.set(e,n)),n}},Zc=class{constructor(e){this.id=Yc++,this.code=e,this.usedTimes=0}};function Qc(e){return e===1030||e===37490||e===36285}function $c(e,t,n,r,i,a){let o=new Bn,s=new Xc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&F(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(x){let e=Do[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,ee=t.id}let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,j=!!b,ae=j&&b.isPMREMTexture===!0,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.diffuseRoughness>0,_e=i.dispersion>0,ve=i.retroreflectivity>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=me&&!!i.anisotropyMap,Ce=he&&!!i.clearcoatMap,we=he&&!!i.clearcoatNormalMap,Te=he&&!!i.clearcoatRoughnessMap,Ee=ge&&!!i.diffuseRoughnessMap,De=ye&&!!i.iridescenceMap,Oe=ye&&!!i.iridescenceThicknessMap,ke=be&&!!i.sheenColorMap,Ae=be&&!!i.sheenRoughnessMap,je=!!i.specularMap,Me=!!i.specularColorMap,Ne=!!i.specularIntensityMap,Pe=xe&&!!i.transmissionMap,Fe=xe&&!!i.thicknessMap,Ie=!!i.gradientMap,Le=!!i.alphaMap,M=i.alphaTest>0,Re=!!i.alphaHash,ze=!!i.extensions,Be=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Be=e.toneMapping);let N=ae?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ve={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:pn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:j,envMapMode:j&&b.mapping,envMapPMREM:ae,envMapMaxLod:ae?N.length-1:null,envMapSize:ae?N[0].width:null,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Qc(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:Se,clearcoat:he,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,diffuseRoughness:ge,diffuseRoughnessMap:Ee,dispersion:_e,retroreflection:ve,iridescence:ye,iridescenceMap:De,iridescenceThicknessMap:Oe,sheen:be,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:je,specularColorMap:Me,specularIntensityMap:Ne,transmission:xe,transmissionMap:Pe,thicknessMap:Fe,gradientMap:Ie,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Le,alphaTest:M,alphaHash:Re,combine:i.combine,mapUv:re&&p(i.map.channel),aoMapUv:oe&&p(i.aoMap.channel),lightMapUv:se&&p(i.lightMap.channel),bumpMapUv:ce&&p(i.bumpMap.channel),normalMapUv:le&&p(i.normalMap.channel),displacementMapUv:ue&&p(i.displacementMap.channel),emissiveMapUv:de&&p(i.emissiveMap.channel),metalnessMapUv:fe&&p(i.metalnessMap.channel),roughnessMapUv:pe&&p(i.roughnessMap.channel),anisotropyMapUv:Se&&p(i.anisotropyMap.channel),clearcoatMapUv:Ce&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:De&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(i.sheenRoughnessMap.channel),specularMapUv:je&&p(i.specularMap.channel),specularColorMapUv:Me&&p(i.specularColorMap.channel),specularIntensityMapUv:Ne&&p(i.specularIntensityMap.channel),transmissionMapUv:Pe&&p(i.transmissionMap.channel),thicknessMapUv:Fe&&p(i.thicknessMap.channel),alphaMapUv:Le&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(le||me),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(re||Le),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Be,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&pn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&pn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ze&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ze&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Do[t];n=ca.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Jc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function el(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function tl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function rl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||tl),r.length>1&&r.sort(t||nl),i.length>1&&i.sort(t||nl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function il(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new rl,e.set(t,[i])):n>=r.length?(i=new rl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function al(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new R};break;case`SpotLight`:n={position:new L,direction:new L,color:new R,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new R,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new R,groundColor:new R};break;case`RectAreaLight`:n={color:new R,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function ol(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rn};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rn};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rn,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var sl=0;function cl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ll(e){let t=new al,n=ol(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new kn,o=new kn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(cl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=z.LTC_FLOAT_1,r.rectAreaLTC2=z.LTC_FLOAT_2):(r.rectAreaLTC1=z.LTC_HALF_1,r.rectAreaLTC2=z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=sl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ul(e){let t=new ll(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function dl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ul(e),t.set(n,[a])):r>=i.length?(a=new ul(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var fl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pl=`uniform sampler2D shadow_pass;
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
}`,ml=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],hl=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],gl=new kn,_l=new L,vl=new L;function yl(e,t,n){let r=new Ki,i=new rn,a=new rn,o=new wn,s=new ma,c=new ha,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rn},radius:{value:4}},vertexShader:fl,fragmentShader:pl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new oi;m.setAttribute(`position`,new Gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ai(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(F(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){F(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){F(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new En(i.x,i.y,{format:be,type:se,minFilter:ee,magFilter:ee,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Xi(i.x,i.y,oe),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ge,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E}else l.isPointLight?(d.map=new Io(i.x),d.map.depthTexture=new Zi(i.x,ae)):(d.map=new En(i.x,i.y),d.map.depthTexture=new Xi(i.x,i.y,ae)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ge,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ee,d.map.depthTexture.magFilter=ee):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),_l.setFromMatrixPosition(l.matrixWorld),e.position.copy(_l),vl.copy(e.position),vl.add(ml[t]),e.up.copy(hl[t]),e.lookAt(vl),e.updateMatrixWorld(),n.makeTranslation(-_l.x,-_l.y,-_l.z),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(gl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new En(i.x,i.y,{format:be,type:se}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function bl(e,t){function n(){let t=!1,n=new wn,r=null,i=new wn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Dt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new R(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=re>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new wn().fromArray(oe),le=new wn().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==ee&&(ne&&e.lineWidth(t),ee=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+te-1),j!==t&&(e.activeTexture(t),j=t)}function De(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+te-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Oe(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Le(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function M(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Be(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function N(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function P(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new R(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:M,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:P,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:Be,viewport:N,reset:He}}function xl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rn,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):bt(`canvas`)}function v(e,t,n){let r=1,i=He(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),F(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&F(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];F(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||F(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ft:pn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,F(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function ie(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function j(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,j),ie(e),le(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),ie(e),de(e)}function ce(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}m.clear(),d.clear()}function le(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ue(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function ue(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function de(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&oe(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let fe=0;function pe(){fe=0}function me(){return fe}function he(e){fe=e}function ge(){let e=fe;return e>=i.maxTextures&&F(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),fe+=1,e}function ve(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ye(t,i){let a=r.get(t);if(t.isVideoTexture&&Ve(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)F(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)F(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ae(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function be(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ae(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function xe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ae(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function Se(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?je(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let Ce={[C]:e.REPEAT,[w]:e.CLAMP_TO_EDGE,[T]:e.MIRRORED_REPEAT},we={[E]:e.NEAREST,[D]:e.NEAREST_MIPMAP_NEAREST,[O]:e.NEAREST_MIPMAP_LINEAR,[ee]:e.LINEAR,[k]:e.LINEAR_MIPMAP_NEAREST,[A]:e.LINEAR_MIPMAP_LINEAR},Te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Ee(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&F(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,Ce[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,Ce[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,Ce[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,we[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,we[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function De(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j),re(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ve(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ue(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Oe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ke(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Oe(n.start,r.width,4),c=Oe(t.start,r.width,4);n.start<=i+1&&a===c&&Oe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ae(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=De(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=pn.getPrimaries(pn.workingColorSpace),r=o.colorSpace===``?null:pn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=P(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);Ee(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,C=u.dataReady,w=ne(o,t);if(o.isDepthTexture)m=te(o.format===_e,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,w,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height),C&&ke(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(C){if(o.layerUpdates.size>0){let t=So(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,w,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,w,m,t.width,t.height,t.depth),C){if(o.layerUpdates.size>0){let i=So(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,w,m,t.width,t.height,t.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<w;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=He(g[0]);n.texStorage2D(e.TEXTURE_2D,w,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=He(t);n.texStorage2D(e.TEXTURE_2D,w,m,r.width,r.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function je(t,o,s){if(o.image.length!==6)return;let c=De(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=pn.getPrimaries(pn.workingColorSpace),r=o.colorSpace===``?null:pn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=P(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,w=u.__version===void 0||c===!0,T=l.dataReady,E=ne(o,h);Ee(e.TEXTURE_CUBE_MAP,o);let D;if(o.isDepthTexture){if(x=te(o.format===_e,o.type),w){if(C)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){C&&w&&n.texStorage2D(e.TEXTURE_CUBE_MAP,E,x,h.width,h.height);for(let t=0;t<6;t++){D=m[t].mipmaps;for(let r=0;r<D.length;r++){let i=D[r];o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(D=o.mipmaps,C&&w){D.length>0&&E++;let t=He(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,E,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<D.length;r++){let i=D[r].image[t].image;C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<D.length;r++){let i=D[r];C?T&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Be(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Pe(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?Se(i.depthTexture,0):ye(i.depthTexture,0);let u=c.__webglTexture,d=Be(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Pe(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Pe(i.__webglFramebuffer[0],t,0):Pe(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ne(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ne(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(t,n,i){let a=r.get(t);n!==void 0&&Me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Fe(t)}function Le(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ae),re(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&N(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Be(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ne(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Ee(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Ee(c,a),Me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Ee(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Fe(t)}function M(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Re=[];function ze(t){if(t.samples>0){if(N(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Re.length=0,Re.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Re.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Be(e){return Math.min(i.maxSamples,e.samples)}function N(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ve(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function P(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(pn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&F(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function He(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ge,this.resetTextureUnits=pe,this.getTextureUnits=me,this.setTextureUnits=he,this.setTexture2D=ye,this.setTexture2DArray=be,this.setTexture3D=xe,this.setTextureCube=Se,this.rebindTextures=Ie,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=N,this.dispose=ce}function Sl(e,t){function n(n,r=``){let i,a=pn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Cl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wl=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new da({vertexShader:Cl,fragmentShader:wl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ai(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},El=class extends Ot{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Tl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new rn,C=null,w=null,T=new Ya;T.viewport=new wn;let E=new Ya;E.viewport=new wn;let D=[T,E],O=new io,ee=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ar,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ar,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ar,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,k=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?_e:ge,a=_.stencil?ue:ae);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new En(d.textureWidth,d.textureHeight,{format:he,type:te,depthTexture:new Xi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new En(f.framebufferWidth,f.framebufferHeight,{format:he,type:te,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,k=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),j(e,O,i)};function j(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Mt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Ya,o.layers.enable(n),o.viewport=new wn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Qi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new wo;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},Dl=new kn,Ol=new cn;Ol.set(-1,0,0,0,1,0,0,0,1);function kl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,sa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Dl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ol),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Al(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?F(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):F(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var jl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ml=null;function Nl(){return Ml===null&&(Ml=new Ni(jl,16,16,be,se),Ml.name=`DFG_LUT`,Ml.minFilter=ee,Ml.magFilter=ee,Ml.wrapS=w,Ml.wrapT=w,Ml.generateMipmaps=!1,Ml.needsUpdate=!0),Ml}var Pl=class{constructor(e={}){let{canvas:t=xt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=te}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Se,xe,ye]),g=new Set([te,ae,ie,ue,ce,le]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,k=null;this._outputColorSpace=ut;let ne=0,re=0,j=null,oe=-1,de=null,fe=new wn,pe=new wn,me=null,he=new R(0),ge=0,_e=t.width,ve=t.height,be=1,Ce=null,we=null,Te=new wn(0,0,_e,ve),Ee=new wn(0,0,_e,ve),De=!1,Oe=new Ki,ke=new Ji,Ae=!1,je=!1,Me=new kn,Ne=new L,Pe=new wn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Le(){return j===null?be:1}let M=n;function Re(e,n){return t.getContext(e,n)}let ze,Be,N,Ve,P,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),M===null){let t=`webgl2`;if(M=Re(t,e),M===null)throw Re(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),I(`WebGLRenderer: `+e.message),e}function ot(){ze=new es(M),ze.init(),rt=new Sl(M,ze),Be=new Po(M,ze,e,rt),N=new bl(M,ze),Be.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),O=M.createFramebuffer(),ee=M.createFramebuffer(),k=M.createFramebuffer(),Ve=new rs(M),P=new el,He=new xl(M,ze,N,P,Be,rt,Ve),Ue=new $o(T),We=new To(M),it=new Mo(M,We),Ge=new ts(M,We,Ve,it),Ke=new as(M,Ge,We,it,Ve),et=new is(M,Be,He),Ze=new Fo(P),qe=new $c(T,Ue,ze,Be,it,Ze),Je=new kl(T,P),Ye=new il,Xe=new dl(ze),$e=new jo(T,Ue,N,Ke,p,s),Qe=new yl(T,Ke,Be),at=new Al(M,Ve,Be,N),tt=new No(M,ze,Ve),nt=new ns(M,ze,Ve),Ve.programs=qe.programs,T.capabilities=Be,T.extensions=ze,T.properties=P,T.renderLists=Ye,T.shadowMap=Qe,T.state=N,T.info=Ve}m!==1009&&(w=new ss(m,t.width,t.height,o,r,i));let st=new El(T,M);this.xr=st,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){st.isPresenting?F(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*be,ve*be).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){F(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(fe.copy(Te).multiplyScalar(Le()).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(pe.copy(Ee).multiplyScalar(Le()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),$e.dispose(),Ye.dispose(),Xe.dispose(),He.dispose(),P.dispose(),Ue.dispose(),Ke.dispose(),Ge.dispose(),it.dispose(),at.dispose(),qe.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,yt),st.removeEventListener(`sessionend`,bt),St.stop()};function ct(e){e.preventDefault(),Ct(`WebGLRenderer: Context Lost.`),E=!0}function lt(){Ct(`WebGLRenderer: Context Restored.`),E=!1;let e=Ve.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;ot(),Ve.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function dt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),P.remove(e)}function mt(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ft(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=We.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Le()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Le()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(ze.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),Ae===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,jt(e,t,r),e.side=0,e.needsUpdate=!0,jt(e,t,r),e.side=2):jt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Xe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),je=this.localClippingEnabled,Ae=Ze.init(this.clippingPlanes,je),Ae===!0&&Ze.setGlobalState(this.clippingPlanes,t),D!==null&&Qe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=P.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ze.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function vt(e){gt&&gt(e)}function yt(){St.stop()}function bt(){St.start()}let St=new wo;St.setAnimationLoop(vt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){gt=e,st.setAnimationLoop(e),e===null?St.stop():St.start()},st.addEventListener(`sessionstart`,yt),st.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=Xe.get(e,C.length),x.init(t),x.state.textureUnits=He.getTextureUnits(),C.push(x),Me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ke.setFromArrayCamera(t):Oe.setFromProjectionMatrix(Me,_t,t.reversedDepth),je=this.localClippingEnabled,Ae=Ze.init(this.clippingPlanes,je),b=Ye.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,T.sortObjects)}wt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(Ce,we),Ie=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ie&&$e.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Ze.beginShadows();let i=x.state.shadowsArray;if(Qe.render(i,e,t),Ae===!0&&Ze.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Ie&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(b,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Ie&&$e.render(e),Tt(b,e,t)}j!==null&&re===0&&(He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),it.resetDefaultState(),oe=-1,de=null,C.pop(),C.length>0?(x=C[C.length-1],He.setTextureUnits(x.state.textureUnits),Ae===!0&&Ze.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ke:Oe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Me);let i=Ke.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Pe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ke:Oe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Pe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Pe.copy(e.boundingSphere.center)),Pe.applyMatrix4(e.matrixWorld).applyMatrix4(Me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Pe.z,s,t)}}else a.visible&&b.push(e,i,a,n,Pe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ae===!0&&Ze.setGlobalState(T.clippingPlanes,n),r&&N.viewport(fe.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ze.has(`EXT_color_buffer_half_float`)||ze.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new En(1,1,{generateMipmaps:!0,type:e?se:te,minFilter:A,samples:Math.max(4,Be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(he),ge=T.getClearAlpha(),ge<1&&T.setClearColor(16777215,.5),T.clear(),Ie&&$e.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ae===!0&&Ze.setGlobalState(T.clippingPlanes,r),Ot(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),ze.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(he,ge),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function At(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function jt(e,t,n){t.isScene!==!0&&(t=Fe);let r=P.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Pt(e,s),d}else s.uniforms=qe.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),Pt(e,s),r.needsLights=Lt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=At(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Mt(e,t,n,r,i){let a=P.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=jt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Nt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=gc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Pt(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ft(e,t,n,r,i){t.isScene!==!0&&(t=Fe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:pn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),b=x.state.lights;if(Ae===!0&&(je===!0||e!==de)){let t=e===de&&r.id===oe;Ze.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===At(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?Mt(r,t,i,s,h):jt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,ee=!1,k=w.getUniforms(),A=v.uniforms;if(N.useProgram(w.program)&&(E=!0,O=!0,ee=!0),r.id!==oe&&(oe=r.id,O=!0),E||de!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(M,`projectionMatrix`,e.projectionMatrix),k.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(M,Ne.setFromMatrixPosition(e.matrixWorld)),Be.logarithmicDepthBuffer&&k.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,O=!0,ee=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&k.setValue(M,`sunShadowMap`,b.state.sunShadowMap,He),b.state.directionalShadowMap.length>0&&k.setValue(M,`directionalShadowMap`,b.state.directionalShadowMap,He),b.state.spotShadowMap.length>0&&k.setValue(M,`spotShadowMap`,b.state.spotShadowMap,He),b.state.pointShadowMap.length>0&&k.setValue(M,`pointShadowMap`,b.state.pointShadowMap,He)),i.isSkinnedMesh){k.setOptional(M,i,`bindMatrix`),k.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(M,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(k.setOptional(M,i,`batchingTexture`),k.setValue(M,`batchingTexture`,i._matricesTexture,He),k.setOptional(M,i,`batchingIdTexture`),k.setValue(M,`batchingIdTexture`,i._indirectTexture,He),k.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(M,`batchingColorTexture`,i._colorsTexture,He));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&et.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=Nl()),O){if(k.setValue(M,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&It(A,ee),a&&r.fog===!0&&Je.refreshFogUniforms(A,a),Je.refreshMaterialUniforms(A,r,be,ve,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;A.probesSH.value=e.textures,A.probesMin.value=e.min,A.probesMax.value=e.max,A.probesResolution.value=e.resolution}gc.upload(M,Nt(v),A,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(gc.upload(M,Nt(v),A,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(M,`center`,i.center),k.setValue(M,`modelViewMatrix`,i.modelViewMatrix),k.setValue(M,`normalMatrix`,i.normalMatrix),k.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,w),at.bind(n,w)}}return w}function It(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Lt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,N.viewport(fe),N.scissor(pe),N.setScissorTest(me),oe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Te).multiplyScalar(be).floor(),pe.copy(Ee).multiplyScalar(be).floor(),me=De;if(n!==0&&(r=O),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(fe),N.scissor(pe),N.setScissorTest(me),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Rt(e){let t=P.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Be.textureFormatReadable(e.format),t.__typeReadable=Be.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=Rt(o);if(u.__formatReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=Rt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Et(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,ee),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,k);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ne=0,re=0,j=null,N.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return _t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pn._getDrawingBufferColorSpace(e),t.unpackColorSpace=pn._getUnpackColorSpace()}},Fl=new Qa(-1,1,1,-1,0,1),Il=new class extends oi{constructor(){super(),this.setAttribute(`position`,new Jr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Jr([0,2,0,0,2,0],2))}},Ll=class{constructor(e){this._mesh=new Ai(Il,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fl)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Rl=1024,zl=2048,Bl=4194304,Vl=(e,t,n)=>e+Rl+(t+Rl)*zl+(n+Rl)*Bl,Hl=new Float32Array(256);for(let e=0;e<256;e++){let t=e/255;Hl[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function B(e,t,n,r=0){let i=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,2147483629)^Math.imul(r|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Ul(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Wl=e=>e<0?0:e>255?255:e|0,Gl=new Map;function Kl(e){if(typeof e==`number`)return[e>>16&255,e>>8&255,e&255];let t=Gl.get(e);if(!t){let n=parseInt(e.slice(1),16);t=[n>>16&255,n>>8&255,n&255],Gl.set(e,t)}return t}function ql(e,t){let[n,r,i]=Kl(e);return Wl(n*t)<<16|Wl(r*t)<<8|Wl(i*t)}function Jl(e,t,n){let r=Kl(e),i=Kl(t);return Wl(r[0]+(i[0]-r[0])*n)<<16|Wl(r[1]+(i[1]-r[1])*n)<<8|Wl(r[2]+(i[2]-r[2])*n)}function Yl(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=B(r,0,i,n),u=B(r+1,0,i,n),d=B(r,0,i+1,n),f=B(r+1,0,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}var Xl=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],Zl=[[0,0],[1,0],[1,1],[0,1]],Ql=[.58,.74,.88,1],V=class{constructor(){this.v=new Map}set(e,t,n,r,i=.06){e=Math.round(e),t=Math.round(t),n=Math.round(n);let[a,o,s]=Kl(r);if(i){let r=1+(B(e,t,n,11)-.5)*2*i;a=Wl(a*r),o=Wl(o*r),s=Wl(s*r)}this.v.set(Vl(e,t,n),a<<16|o<<8|s)}has(e,t,n){return this.v.has(Vl(e,t,n))}del(e,t,n){this.v.delete(Vl(Math.round(e),Math.round(t),Math.round(n)))}box(e,t,n,r,i,a,o,s=.06){let c=typeof o==`function`;for(let l=e;l<r;l++)for(let e=t;e<i;e++)for(let t=n;t<a;t++){let n=c?o(l,e,t):o;n!=null&&this.set(l,e,t,n,s)}}delBox(e,t,n,r,i,a){for(let o=e;o<r;o++)for(let e=t;e<i;e++)for(let t=n;t<a;t++)this.v.delete(Vl(o,e,t))}sphereShell(e,t,n,r,i,a,o=.08,s=1){let c=Math.ceil(r)+1;for(let l=-c;l<=c;l++)for(let u=-c;u<=c;u++)for(let d=-c;d<=c;d++){let c=Math.sqrt(l*l+u/s*(u/s)+d*d);if(c<=r&&c>r-i){let i=e+l,s=t+u,f=n+d,p=a(i,s,f,c/r);p!=null&&this.set(i,s,f,p,o)}}}get size(){return this.v.size}build(e,t=[0,0,0],n=this.v){let r=[],i=[],a=[],o=[],s=(e,t,n)=>this.v.has(e+Rl+(t+Rl)*zl+(n+Rl)*Bl),c=[0,0,0,0];for(let[l,u]of n){let n=l%zl-Rl,d=Math.floor(l/zl)%zl-Rl,f=Math.floor(l/Bl)-Rl,p=Hl[u>>16&255],m=Hl[u>>8&255],h=Hl[u&255];for(let l=0;l<6;l++){let u=Xl[l],[g,_,v]=u.n;if(s(n+g,d+_,f+v))continue;let[y,b,x]=u.t1,[S,C,w]=u.t2,T=+(g>0),E=+(_>0),D=+(v>0),O=n+g,ee=d+_,k=f+v,A=r.length/3;for(let o=0;o<4;o++){let l=Zl[o][0],u=Zl[o][1],A=l?1:-1,te=u?1:-1,ne=+!!s(O+A*y,ee+A*b,k+A*x),re=+!!s(O+te*S,ee+te*C,k+te*w),ie=+!!s(O+A*y+te*S,ee+A*b+te*C,k+A*x+te*w),j=ne&&re?0:3-(ne+re+ie);c[o]=j;let ae=Ql[j];r.push((n+T+l*y+u*S-t[0])*e,(d+E+l*b+u*C-t[1])*e,(f+D+l*x+u*w-t[2])*e),i.push(g,_,v),a.push(p*ae,m*ae,h*ae)}c[0]+c[2]<c[1]+c[3]?o.push(A,A+1,A+3,A+1,A+2,A+3):o.push(A,A+1,A+2,A,A+2,A+3)}}let l=new oi;return l.setAttribute(`position`,new Jr(r,3)),l.setAttribute(`normal`,new Jr(i,3)),l.setAttribute(`color`,new Jr(a,3)),l.setIndex(new qr(o,1)),l.computeBoundingSphere(),l.computeBoundingBox(),l}};V.prototype.buildChunks=function(e,t=[0,0,0],n=64){let r=new Map;for(let e of this.v){let t=e[0],i=t%zl-Rl,a=Math.floor(t/Bl)-Rl,o=Math.floor(i/n)*4096+Math.floor(a/n),s=r.get(o);s||r.set(o,s=[]),s.push(e)}return[...r.values()].map(n=>this.build(e,t,n))};var $l=new pa({vertexColors:!0});function eu(e,t,n=[0,0,0],r=$l,i=!0){let a=new Ai(e.build(t,n),r);return a.castShadow=i,a.receiveShadow=!0,a}function tu(e,t,n=[0,0,0],r=$l,i=!0,a=64){return e.buildChunks(t,n,a).map(e=>{let t=new Ai(e,r);return t.castShadow=i,t.receiveShadow=!0,t})}var nu=.058,H={skin:15247211,skinD:13667157,skinL:15906940,blush:15374960,hair:4926232,hair2:6437665,brow:3809040,green:[4877104,5666874,4349739],greenD:3624991,cuff:7049029,hat:[5205296,5929527,4480809],hatBand:3097632,hatBrim:[6982202,6455862,7574591],pocket:3426591,leaf:9685082,leafD:7316031,boot:[8145703,7225631,9066288],bootD:5058071,sole:3547667,lace:13214826,gold:15317566,teeth:16315626,mouth:8006186,tongue:14248042},ru=(e,t,n,r,i=0)=>e[Math.floor(B(t,n,r,i)*e.length)],iu=(e,t,n)=>ru(H.green,e,t,n,3),au=[{key:`skin`,label:`SKIN`},{key:`hair`,label:`HAIR`},{key:`hat`,label:`HAT`},{key:`shirt`,label:`SHIRT`},{key:`overalls`,label:`OVERALLS`},{key:`boots`,label:`BOOTS`}],ou={skin:`tan`,hair:`brown`,hat:`green`,shirt:`red`,overalls:`green`,boots:`brown`},su={skin:[{id:`fair`,name:`FAIR`,skin:15976352,skinD:14725258,skinL:16767160,blush:15769744},{id:`tan`,name:`TAN`,skin:15247211,skinD:13667157,skinL:15906940,blush:15374960},{id:`olive`,name:`OLIVE`,skin:12882530,skinD:11040328,skinL:13935988,blush:12876392},{id:`brown`,name:`BROWN`,skin:9263676,skinD:7555120,skinL:10512970,blush:10510416},{id:`deep`,name:`DEEP`,skin:6044202,skinD:4861474,skinL:7227444,blush:8011832}],hair:[{id:`brown`,name:`BROWN`,hair:4926232,hair2:6437665,brow:3809040},{id:`black`,name:`BLACK`,hair:1840143,hair2:2759958,brow:1183244},{id:`blonde`,name:`BLONDE`,hair:15123818,hair2:15783050,brow:9071152},{id:`auburn`,name:`AUBURN`,hair:9058850,hair2:11028528,brow:6038548},{id:`purple`,name:`PURPLE`,hair:5913208,hair2:7228560,brow:3810392}],hat:[{id:`green`,name:`GREEN`,hat:[5205296,5929527,4480809],band:3097632,brim:[6982202,6455862,7574591]},{id:`black`,name:`BLACK`,hat:[2764328,3422258,2237983],band:1711128,brim:[3817016,3027500,4738118]},{id:`tan`,name:`TAN`,hat:[12886890,11570258,13939834],band:7229488,brim:[13939834,12886890,14730378]},{id:`purple`,name:`PURPLE`,hat:[5913976,6966410,4862056],band:3022400,brim:[8019098,6966410,9071786]},{id:`red`,name:`RED`,hat:[9317934,10697272,7611428],band:3806228,brim:[11684420,9317934,12868178]}],shirt:[{id:`red`,name:`RED`,a:11677230,b:8331042,c:3557419,cuff:10101800,cuffD:6953500},{id:`blue`,name:`BLUE`,a:3034762,b:1979487,c:2767400,cuff:3826340,cuffD:1979487},{id:`gold`,name:`GOLD`,a:12882478,b:9070616,c:3815972,cuff:13936714,cuffD:9070616},{id:`purple`,name:`PURPLE`,a:6961802,b:4860004,c:2761784,cuff:8014490,cuffD:4860004},{id:`forest`,name:`FOREST`,a:3107386,b:1985064,c:2371612,cuff:3832392,cuffD:1985064}],overalls:[{id:`green`,name:`GREEN`,green:[4877104,5666874,4349739],greenD:3624991,cuff:7049029,pocket:3426591},{id:`denim`,name:`DENIM`,green:[3822200,4612232,3032168],greenD:2372688,cuff:5927056,pocket:2372688},{id:`brown`,name:`BROWN`,green:[7227952,8149048,6045224],greenD:4074012,cuff:9070664,pocket:4863012},{id:`black`,name:`BLACK`,green:[2895920,3685436,2237990],greenD:1447960,cuff:4870224,pocket:1843232}],boots:[{id:`brown`,name:`BROWN`,boot:[8145703,7225631,9066288],bootD:5058071,sole:3547667,lace:13214826},{id:`black`,name:`BLACK`,boot:[2763306,2236962,3421236],bootD:1315860,sole:1052688,lace:13222576},{id:`red`,name:`RED`,boot:[9055790,7611428,10107448],bootD:4855318,sole:2756624,lace:15786176}]},cu=11677230,lu=8331042,uu=3557419,du=10101800,fu=6953500,pu={...ou};function mu(e,t,n){let r=e+n,i=(Math.floor(r/2)%3+3)%3,a=(Math.floor(t/2)%3+3)%3;return i===0&&a===0?uu:i===0||a===0?lu:cu}function hu(e,t){return su[e].find(e=>e.id===t)||su[e][0]}function gu(e){let t={...ou};if(!e)return t;for(let{key:n}of au)su[n].some(t=>t.id===e[n])&&(t[n]=e[n]);return t}function _u(e){pu=gu(e);let t=hu(`skin`,pu.skin),n=hu(`hair`,pu.hair),r=hu(`hat`,pu.hat),i=hu(`shirt`,pu.shirt),a=hu(`overalls`,pu.overalls),o=hu(`boots`,pu.boots);return H.skin=t.skin,H.skinD=t.skinD,H.skinL=t.skinL,H.blush=t.blush,H.hair=n.hair,H.hair2=n.hair2,H.brow=n.brow,H.greenD=a.greenD,H.cuff=a.cuff,H.pocket=a.pocket,H.hatBand=r.band,H.bootD=o.bootD,H.sole=o.sole,H.lace=o.lace,H.green.splice(0,H.green.length,...a.green),H.hat.splice(0,H.hat.length,...r.hat),H.hatBrim.splice(0,H.hatBrim.length,...r.brim),H.boot.splice(0,H.boot.length,...o.boot),cu=i.a,lu=i.b,uu=i.c,du=i.cuff,fu=i.cuffD,{...pu}}var vu=[`..XX..`,`X.XX.X`,`XXXXXX`,`.XXXX.`,`..XX..`];function yu(e){let t=e<0?-6:1,n=t+5,r=new V;r.box(t,9,-2,n,13,3,iu,.02);let i=e<0?t-1:t,a=e<0?n:n+1;r.box(i,6,-3,a,9,4,(e,t,n)=>t===8?ql(H.cuff,.85):H.cuff,.05);let o=(e,t,n)=>ru(H.boot,e,t,n,5);r.box(t,1,-2,n,6,3,o,.03),r.box(i,1,-3,a,5,6,o,.03),r.delBox(i,4,5,a,5,6),r.box(i,1,4,a,4,6,(e,t,n)=>ql(ru(H.boot,e,t,n,6),1.14),.03),r.box(i,0,-3,a,1,6,H.sole,.03),r.box(i,1,-3,a,2,-2,H.bootD,.02),r.box(i,1,3,a,2,6,H.bootD,.02);for(let e=1;e<5;e+=2)r.box(i+1,4,e,a-1,5,e+1,H.lace,.02);return r}function bu(){let e=new V;e.box(-6,13,-3,6,25,3,mu,0),e.box(-6,13,-3,6,17,3,iu,.02),e.box(-4,17,2,4,24,4,iu,.02),e.box(-4,17,-3,4,20,-2,iu,.02);for(let t of[-4,2])e.box(t,24,-3,t+2,25,4,H.green[1],.03),e.box(t,20,-3,t+2,24,-2,H.green[1],.03),e.box(t,24,3,t+2,25,4,H.green[1],.03);e.box(-3,17,4,3,22,5,H.pocket,.03);for(let t=0;t<vu.length;t++)for(let n=0;n<6;n++)vu[t][n]===`X`&&e.set(n-3,21-t,4,t===0||n===0||n===5?8830798:11066474,.03);return e.box(-4,22,4,-2,24,5,H.gold,.03),e.box(2,22,4,4,24,5,H.gold,.03),e.set(-3,23,5,ql(H.gold,1.2),0),e.set(2,23,5,ql(H.gold,1.2),0),e.box(-3,25,-3,3,26,3,(e,t,n)=>ql(mu(e,t,n),1),0),e.delBox(-2,25,-2,2,26,2),e.delBox(-1,25,2,1,26,3),e.box(-1,24,2,1,25,3,H.skinD,.02),e}function xu(){let e=new V;e.box(-2,24,-2,2,26,2,H.skinD,.03),e.box(-7,26,-6,7,41,6,(e,t,n)=>t===26?H.skinD:H.skin,.025),e.box(-8,29,-1,-7,34,3,H.skinD,.02),e.box(7,29,-1,8,34,3,H.skinD,.02),e.box(-8,30,0,-7,33,2,ql(H.skinD,.85),0),e.box(7,30,0,8,33,2,ql(H.skinD,.85),0),e.box(-6,28,5,-4,31,6,H.blush,.03),e.box(4,28,5,6,31,6,H.blush,.03),e.box(-7,28,-6,7,36,-3,(e,t,n)=>ru([H.hair,H.hair2],e,t,n,7),.05),e.box(-7,31,-6,-5,38,2,(e,t,n)=>ru([H.hair,H.hair2],e,t,n,8),.05),e.box(5,31,-6,7,38,2,(e,t,n)=>ru([H.hair,H.hair2],e,t,n,9),.05),e.box(-7,36,-6,7,41,6,(e,t,n)=>ru([H.hair,H.hair2],e,t,n,10),.05),e.box(-7,35,2,7,36,6,(e,t,n)=>ru([H.hair,H.hair2],e,t,n,12),.05);for(let t of[-7,-4,-3,0,3,6])e.box(t,34,3,t+1,35,6,H.hair,.05);e.box(-1,30,6,1,32,7,H.skinD,.03),e.set(-1,30,6,ql(H.skinD,.9),0),e.set(0,30,6,ql(H.skinD,.9),0);let t=t=>{for(let n=0;n<4;n++){e.set(t+n,33,5,2760984,0);let r=n===0||n===3;e.set(t+n,32,5,r?16645624:n===1?3115578:2783797,0),e.set(t+n,31,5,r?15790312:n===1?4037959:3510338,0)}};t(-5),t(1),e.set(-4,32,5,1320463,0),e.set(2,32,5,1320463,0),e.set(-4,32,6,16777215,0),e.set(2,32,6,16777215,0),e.delBox(-4,32,6,-3,33,7),e.delBox(2,32,6,3,33,7);let n=[34,35,35,35,34];for(let t=0;t<5;t++)e.set(-5+t,n[t],6,H.brow,.03),e.set(1+t,n[4-t],6,H.brow,.03),e.set(-5+t,34,6,H.brow,.03),e.set(1+t,34,6,H.brow,.03);let r=[];for(let e=-4;e<4;e++)r.push([e,28]);for(let e=-3;e<3;e++)r.push([e,27]);r.push([-4,29],[3,29]);for(let[t,n]of r)e.del(t,n,5),e.set(t,n,4,H.skinD,0);let i=6956068;for(let t=-3;t<3;t++)e.set(t,28,4,H.teeth,0);e.set(-4,28,4,i,0),e.set(3,28,4,i,0),e.set(-4,29,4,i,0),e.set(3,29,4,i,0),e.set(-3,27,4,i,0),e.set(2,27,4,i,0);for(let t=-2;t<2;t++)e.set(t,27,4,H.tongue,0);return e.set(-1,27,4,ql(H.tongue,1.1),0),e.set(0,27,4,ql(H.tongue,1.1),0),Su(e),e}function Su(e){let t=(e,t)=>ru(H.hatBrim,e,0,t,21);for(let n=-12;n<=11;n++)for(let r=-12;r<=11;r++){let i=Math.hypot(n+.5,r+.5),a=r>=0?10.4:11.4;i>a||(i>a-2.5?(e.set(n,39,r,ql(t(n,r),.62),.03),e.set(n,40,r,t(n,r),.03)):(e.set(n,40,r,ql(t(n,r),.8),.03),e.set(n,41,r,t(n,r),.03)))}let n=[8.3,8.3,8.3,8.1,7.7,7.1,6.1,4.8],r=(e,t,r)=>{let i=n[t-41];return Math.abs(e+.5)**3+Math.abs(r+.5)**3<=i**3};for(let t=41;t<=48;t++)for(let n=-9;n<=8;n++)for(let i=-9;i<=8;i++){if(!r(n,t,i))continue;let a=!r(n+1,t,i)||!r(n-1,t,i)||!r(n,t,i+1)||!r(n,t,i-1)||t===48,o;o=t<=42?ql(H.hatBand,.92+B(n,t,i,2)*.2):ru(H.hat,n,t,i,31),t>=47&&a&&(o=ql(o,1.12)),e.set(n,t,i,o,.03)}let i=[`...XX...`,`X..XX..X`,`XX.XX.XX`,`.XXXXXX.`,`..XXXX..`,`...XX...`];for(let t=0;t<i.length;t++){let n=47-t;for(let a=0;a<8;a++){if(i[t][a]!==`X`)continue;let o=a-4,s=9;for(;s>-9&&!r(o,n,s);)s--;e.set(o,n,s+1,t===5?H.leafD:a===0||a===7||t===0?10802538:12117628,.03)}}}function Cu(e){let t=new V,n=e<0?-10:6,r=n+4,i=e<0?n-1:n,a=e<0?r:r+1;t.box(n,20,-2,r,25,2,mu,0),t.box(i,17,-3,a,20,3,(e,t,n)=>t===17?fu:du,.05),t.box(n,13,-2,r,17,2,H.skin,.025),t.box(i,9,-2,a,13,3,H.skin,.025),t.box(i,9,2,a,13,3,(e,t)=>t%2==0?H.skinD:H.skin,.02),t.box(i,9,-2,a,10,3,H.skinD,.02);let o=e<0?a-1:i;return t.box(o,11,3,o+1,13,4,H.skinL,.02),t}function wu(){let e=new V;return e.box(6,8,4,12,14,10,5211832,.04),e.box(6,13,4,12,14,10,7644884,.03),e.box(8,12,10,10,13,14,5211832,.03),e.box(8,13,12,10,14,16,5211832,.03),e.box(8,14,15,10,15,17,10142952,.03),e.box(11,14,5,12,17,9,4091546,.03),e}function Tu(e){_u(e);let t=new rr,n=new rr;t.add(n);let r=nu,i=(e,t,n,i=[0,0,0],a=!0)=>{let o=new rr;o.position.set((t[0]-i[0])*r,(t[1]-i[1])*r,(t[2]-i[2])*r);let s=eu(e,r,t,void 0,a);return o.add(s),o.userData.mesh=s,o.userData.pivot=t,n.add(o),o};function a(e,t){let n=e.userData.mesh;n&&(e.remove(n),n.geometry.dispose());let i=eu(t,r,e.userData.pivot);e.add(i),e.userData.mesh=i}let o=[0,13,0],s=i(yu(-1),[-3.5,13,0],n),c=i(yu(1),[3.5,13,0],n),l=i(bu(),o,n),u=i(xu(),[0,25,0],l,o),d=i(Cu(-1),[-8,24,0],l,o),f=i(Cu(1),[8,24,0],l,o),p=eu(wu(),r,[8,24,0]);p.visible=!1,f.add(p);let m={phase:0,action:0,actionKind:`none`,blend:0,idle:0,lookT:0};function h(e){m.action=1,m.actionKind=e,p.visible=e===`water`}function g(e){return _u(e),a(s,yu(-1)),a(c,yu(1)),a(l,bu()),a(u,xu()),a(d,Cu(-1)),a(f,Cu(1)),{...pu}}function _(e,t){m.idle+=e,m.phase+=e*(5+t*5),m.blend+=(t-m.blend)*Math.min(1,e*12);let i=m.blend,a=Math.sin(m.phase)*.75*i;s.rotation.x=a,c.rotation.x=-a,d.rotation.x=-a*.9,f.rotation.x=a*.9,d.rotation.z=-.1,f.rotation.z=.1;let o=Math.abs(Math.cos(m.phase))*.045*i,h=Math.sin(m.idle*2.2)*.012*(1-i);if(l.position.y=13*r+o+h,l.rotation.x=.08*i,l.rotation.y=Math.sin(m.phase)*.09*i,u.rotation.x=-.04*i+Math.sin(m.idle*1.3)*.015,u.rotation.y=-l.rotation.y*.6,n.position.y=0,n.scale.set(1,1,1),m.action>0){m.action=Math.max(0,m.action-e/.75);let t=1-m.action,n=Math.sin(Math.min(1,t)*Math.PI);if(m.actionKind===`water`)f.rotation.x=-1.35*n+f.rotation.x*(1-n),f.rotation.z=.1*(1-n),p.rotation.x=.5*n,l.rotation.x+=.12*n;else{let e=n;l.rotation.x+=.45*e,l.position.y-=.16*e,s.rotation.x=-.5*e,c.rotation.x=-.5*e,u.rotation.x=-.3*e,d.rotation.x=-1.2*e+d.rotation.x*(1-e),f.rotation.x=-1.2*e+f.rotation.x*(1-e)}m.action===0&&(p.visible=!1)}}return{root:t,rig:n,update:_,playAction:h,head:u,torso:l,setLook:g,getLook:()=>({...pu})}}var Eu={bd:{id:`bd`,name:`BLUE DREAM`,short:`BD`,kind:`HYBRID`,weeks:9,flower:1,veg:1,stature:1,frost:1,seed:0,bud:[9225035,6134319,12050544],leafDark:2845226,leafLight:6270526,stem:4160046,stemD:3500074},gdp:{id:`gdp`,name:`GRANDDADDY PURPLE`,short:`GDP`,kind:`INDICA`,weeks:9,flower:1,veg:1,stature:1,frost:1.1,seed:2,bud:[10321094,7098266,13019624],leafDark:3811925,leafLight:7164044,stem:4864552,stemD:3812386},gc:{id:`gc`,name:`GREEN CRACK`,short:`GC`,kind:`SATIVA`,weeks:8,flower:8/9,veg:1.15,stature:.96,frost:1.15,seed:4,bud:[9428538,5154840,13956458],leafDark:1993252,leafLight:8311882,stem:3963436,stemD:3039780,hair:{cream:16179888,orange:15759384,amber:13784336}},gg:{id:`gg`,name:`GORILLA GLUE #4`,short:`GG4`,kind:`INDICA`,weeks:9.5,flower:9.5/9,veg:1.05,stature:1.04,frost:1.7,seed:6,bud:[7244348,4479016,11057258],leafDark:2373142,leafLight:5932084,stem:4864040,stemD:3812382,hair:{cream:15258288,orange:12868130,amber:10699798}},lis:{id:`lis`,name:`LONG ISLAND SKUNK`,short:`LIS`,kind:`HYBRID`,weeks:9,flower:1,veg:1,stature:1.05,frost:1.05,seed:8,bud:[3108402,1920548,5939290],leafDark:1591328,leafLight:4099134,stem:3828266,stemD:2905120,hair:{cream:15782048,orange:13912096,amber:11546648}},uw:{id:`uw`,name:`UW PURPLE`,short:`UW`,kind:`INDICA`,weeks:8,flower:8/9,veg:.9,stature:.9,frost:1.25,seed:10,bud:[8011432,4857976,13672680],leafDark:2775602,leafLight:8018088,stem:4863016,stemD:3811358,hair:{cream:15784128,orange:12871728,amber:11030560}},bb:{id:`bb`,name:`DJ SHORT BLUEBERRY`,short:`BB`,kind:`INDICA`,weeks:7.5,flower:7.5/9,veg:.85,stature:.92,frost:1.3,seed:12,bud:[6973640,3815544,11580654],leafDark:3291240,leafLight:6972068,stem:5913186,stemD:4466760,hair:{cream:15786192,orange:13660224,amber:11554864}}},Du=[`bd`,`gdp`,`gc`,`gg`,`lis`,`uw`,`bb`],Ou={bd:10,gdp:10,gc:4,gg:4,lis:4,uw:4,bb:4};function U(e){return e&&Eu[e]?Eu[e]:typeof e==`number`?Eu[Du[Math.abs(e)%Du.length]]:Eu.bd}function ku(e,t){let n=U(e);return t===2?n.veg||1:t>=3&&n.flower||1}function Au(){return{...Ou}}function ju(e){return Du.reduce((t,n)=>t+(e?.[n]|0||0),0)}var Mu=[...Du],Nu=0;function Pu(e,t){let n=n=>Math.round(((e>>>n&255)+(t>>>n&255))/2);return n(16)<<16|n(8)<<8|n(0)}function Fu(e){if(!e||typeof e!=`object`)return null;let t=String(e.id||``);if(!/^hyb\d+$/.test(t))return null;let n=Array.isArray(e.parents)?e.parents.slice(0,2).map(e=>Eu[e]?e:`bd`):[`bd`,`gdp`],r=U(n[0]),i=U(n[1]),a=Number(t.slice(3))||1,o=(t,n=1)=>{let a=Number(e[t]);return Number.isFinite(a)?Math.max(.65,Math.min(1.8,a)):(r[t]+i[t])/2||n},s={id:t,name:String(e.name||`${r.name} × ${i.name}`).slice(0,64),short:String(e.short||`${r.short.slice(0,2)}×${i.short.slice(0,2)}`).slice(0,8),kind:`HYBRID`,weeks:Number(e.weeks)||(r.weeks+i.weeks)/2,flower:o(`flower`),veg:o(`veg`),stature:o(`stature`),frost:o(`frost`),seed:Number.isFinite(Number(e.seed))?Number(e.seed):(r.seed+i.seed)/2,bud:((t,n)=>{let r=e[t];return Array.isArray(r)&&r.length>=3?r.slice(0,3).map(e=>Number(e)>>>0):n})(`bud`,r.bud.map((e,t)=>Pu(e,i.bud[t]))),leafDark:Number(e.leafDark)>>>0||Pu(r.leafDark,i.leafDark),leafLight:Number(e.leafLight)>>>0||Pu(r.leafLight,i.leafLight),stem:Number(e.stem)>>>0||Pu(r.stem,i.stem),stemD:Number(e.stemD)>>>0||Pu(r.stemD,i.stemD),parents:n,hybrid:!0};return e.hair&&typeof e.hair==`object`&&(s.hair={...e.hair}),Eu[t]=s,Du.includes(t)||Du.push(t),Nu=Math.max(Nu,a),s}function Iu(e,t){let n=U(e),r=U(t);if(n.id===r.id)return null;let i=`hyb${++Nu}`,a=e=>(Number(n[e])+Number(r[e]))/2,o=n.hair||r.hair;return Fu({id:i,parents:[n.id,r.id],name:`${n.name} × ${r.name}`,short:`${n.short.slice(0,2)}×${r.short.slice(0,2)}`,weeks:(n.weeks+r.weeks)/2,flower:a(`flower`),veg:a(`veg`),stature:a(`stature`),frost:a(`frost`),seed:a(`seed`),bud:n.bud.map((e,t)=>Pu(e,r.bud[t])),leafDark:Pu(n.leafDark,r.leafDark),leafLight:Pu(n.leafLight,r.leafLight),stem:Pu(n.stem,r.stem),stemD:Pu(n.stemD,r.stemD),...o?{hair:{...o}}:{}})}function Lu(){return Du.filter(e=>Eu[e]?.hybrid).map(e=>{let{hybrid:t,...n}=Eu[e];return{...n,parents:[...n.parents],bud:[...n.bud],...n.hair?{hair:{...n.hair}}:{}}})}function Ru(){for(let e of Du.filter(e=>!Mu.includes(e)))delete Eu[e];Du.splice(0,Du.length,...Mu),Nu=0}var zu=.05,Bu=1.5,Vu=.06/Bu,W=1.55,Hu=1,Uu={1:[{a:0,l:1}],3:[{a:-.7,l:.68},{a:0,l:1},{a:.7,l:.68}],5:[{a:-1.22,l:.44},{a:-.62,l:.74},{a:0,l:1},{a:.62,l:.74},{a:1.22,l:.44}],7:[{a:-1.62,l:.34},{a:-1.12,l:.54},{a:-.56,l:.78},{a:0,l:1},{a:.56,l:.78},{a:1.12,l:.54},{a:1.62,l:.34}],9:[{a:-1.86,l:.26},{a:-1.46,l:.4},{a:-1.04,l:.58},{a:-.52,l:.8},{a:0,l:1},{a:.52,l:.8},{a:1.04,l:.58},{a:1.46,l:.4},{a:1.86,l:.26}]},Wu=16052192,Gu=14907424,Ku=12867092,qu=16251886,Ju=13939034;function Yu(e,t,n,r,i,a=.02){if(Hu!==1){let o=Hu/2-1e-6,s=t*Hu,c=n*Hu,l=r*Hu;if(c<-o||c>180||Math.abs(s)>150||Math.abs(l)>150)return;for(let t=Math.ceil(s-o);t<=Math.floor(s+o);t++)for(let n=Math.ceil(c-o);n<=Math.floor(c+o);n++)for(let r=Math.ceil(l-o);r<=Math.floor(l+o);r++)n>=0&&e.set(t,n,r,i,a);return}let o=Math.round(n);if(o<0||o>96)return;let s=Math.round(t),c=Math.round(r);Math.abs(s)>64||Math.abs(c)>64||e.set(s,o,c,i,a)}function Xu(e,t,n,r,i,a=.02){n<0||e.set(t,n,r,i,a)}function Zu(e,t,n,r,i,a=.02){Hu===1?Yu(e,t,n,r,i,a):Xu(e,Math.round(t*Hu),Math.round(n*Hu),Math.round(r*Hu),i,a)}function Qu(e,t,n,r,i){let a=Jl(n,15391140,i?.2:.4);if(Hu!==1){let o=Math.round(t*Hu);for(let t=0;t<=o;t++){let s=t/o;if(Xu(e,0,t,0,t%3==0?n:a,.02),i&&((s<.9||t%2==0)&&(Xu(e,1,t,0,t%4<2?r:n,.02),Xu(e,-1,t,0,n,.02),Xu(e,0,t,1,t%4<2?n:r,.02),Xu(e,0,t,-1,r,.02)),s<.12))for(let[n,i]of[[1,1],[-1,-1],[1,-1],[-1,1]])Xu(e,n,t,i,r,.02)}}else{for(let o=0;o<=t;o++)Yu(e,0,o,0,a,.02),i&&(Yu(e,1,o,0,r,.02),Yu(e,-1,o,0,n,.02),Yu(e,0,o,1,o%2==0?r:n,.02),Yu(e,0,o,-1,o%2==0?n:r,.02),t>18&&o%2==0&&(Yu(e,1,o,1,r,.02),Yu(e,-1,o,-1,ql(n,.88),.02)));Yu(e,1,0,0,r,.02),Yu(e,-1,0,0,r,.02),Yu(e,0,0,1,r,.02),Yu(e,0,0,-1,r,.02)}}function $u(e,t,n,r,i,a,o,s,c,l){let u=Math.cos(i),d=Math.sin(i),f=-d,p=u,m=Math.max(4,a),h=Hu!==1,g=h?Hu*1:1,_=h?Hu*.72:1,v=(m>=18?1.5:m>=12?1.55:m>=7?1.4:1.25)*g,y=Jl(s,15201956,.55),b=Jl(o,s,.42),x=h?m*Hu:m,S=h?t*Hu:t,C=h?n*Hu:n,w=h?r*Hu:r,T=Math.ceil(x+v+2),E=Math.round(S),D=Math.round(w),O=Math.max(1.15,m*.11)*(h?Hu:1),ee=h?.62:.7,k=h?.8:.55,A=3.05*_,te=(t,n,r,i,a)=>{if(h){let o=Math.round(n);o>=0&&e.set(Math.round(t),o,Math.round(r),i,a)}else Yu(e,t,n,r,i,a)};for(let e=E-T;e<=E+T;e++)for(let t=D-T;t<=D+T;t++){let n=(e-S)*u+(t-w)*d,r=(e-S)*f+(t-w)*p;if(n<.15||n>x+.35)continue;let i=Math.min(1,n/x),a=Math.sin(Math.PI*i**.7)*v,s=(n%A+A)%A,m=s/A,g=i>.9?Math.max(.42,a*.32):a*(.12+.88*m);if(a<.2||Math.abs(r)>g)continue;let _=C+Math.sin(i*Math.PI)*O*.62-c*i*i*O-Math.min(.9*(h?1.4:1),Math.abs(r)*.42),T=Math.abs(r)<=ee,E=Math.abs(r)>=g-k,D=!T&&s<A*.4&&Math.abs(r)>.5&&i>.14&&i<.86,ne=T?y:E?o:D?Jl(y,b,.4):b;l&&i>.58&&(ne=Jl(ne,Ju,(i-.58)/.42)),te(e,_,t,ne,.012),T&&i>.08&&i<.9&&te(e,_+1,t,y,.01)}let ne=C-c*O;te(S+u*(x+.9),ne,w+d*(x+.9),l?Ju:o,.01)}function ed(e,t,n,r,i,a,o,s,c,l,u,d){let f=Math.cos(i),p=Math.sin(i),m=Math.max(2,Math.round(a*.4)),h=Jl(u,l,.62),g=-p,_=f,v=Hu===1?1:Hu*1.6,y=Math.max(2,Math.round(m*v)),b=n;for(let i=1;i<=y;i++){let o=i/y*m;b=n+Math.sin(o/m*Math.PI)*Math.max(.85,a*.13)+o*.06,Zu(e,t+f*o,b,r+p*o,o>=m-.01?l:h,.02),a>8&&(Hu===1||i%2==0)&&Zu(e,t+f*o+g*.7,b,r+p*o+_*.7,h,.02)}let x=t+f*m,S=r+p*m;for(let t of Uu[o]||Uu[5])$u(e,x,b,S,i+t.a,Math.max(3,a*t.l),c,l,s+Math.abs(t.a)*.32,d)}function td(e,t,n,r,i,a,o,s,c){ed(e,0,t,0,n,r,i,a,o,s,c,!1),ed(e,0,t,0,n+Math.PI,r*.96,i,a,o,s,c,!1)}function nd(e,t,n,r,i,a,o,s,c){let l=Math.cos(i),u=Math.sin(i),d=Math.max(2,Math.round(a)),f=Hu===1?1:Hu*1.6,p=Math.round(d*f),m=t,h=n,g=r;for(let i=1;i<=p;i++){let a=i/p;m=t+l*d*a,h=n+o*a,g=r+u*d*a,Zu(e,m,h,g,s,.02),(Hu===1||i%2==0)&&Zu(e,m,h-(Hu===1?1:.5),g,c,.02)}return{x:m,y:h,z:g}}function rd(e){let t;return t=e<.18?.55+e/.18*.45:e<.5?1:(1-(e-.5)/.5)**.8,Math.max(.28,t)}function id(e,t,n,r,i,a,o,s){let c=s?.cream??Wu,l=s?.orange??Gu,u=s?.amber??Ku,d=a>.72?l:a>.32?Jl(c,l,(a-.32)/.4):c,f=o?2:3,p=o?1:a>.55?1.15:1.45,m=Hu===1?1:Hu*1.4,h=Math.max(1,Math.round(f*m)),g=i;for(let i=1;i<=h;i++){let s=i/h*f;g+=(o?.22:a>.65?.4:.12)/m;let l=o?.4:a>.7?.28:.48,_=i===h&&a>.78?u:i>h*.5?d:Jl(c,d,.5);Zu(e,t+Math.cos(g)*s*p,n+s*l,r+Math.sin(g)*s*p,_,0)}}function ad(e,t,n,r,i,a,o,s){let c=Math.cos(i),l=Math.sin(i),u=-l,d=c,f=s()<o;Yu(e,t,n,r,a[0],.03),Yu(e,t+u,n+.4,r+d,a[1],.03),Yu(e,t-u,n+.35,r-d,a[1],.03),Yu(e,t+c,n+.8,r+l,a[0],.03),Yu(e,t+c*1.5+u*.65,n+1.2,r+l*1.5+d*.65,a[2],.02),Yu(e,t+c*1.5-u*.65,n+1.1,r+l*1.5-d*.65,a[0],.02),Yu(e,t+c*1.7,n+1.45,r+l*1.7,a[0],.02);let p=t+c*2.35,m=n+2.05,h=r+l*2.35;return Yu(e,p,m,h,f?Jl(a[2],qu,.88):a[2],.02),{x:p,y:m,z:h}}function od(e,t,n,r,i,a,o,s,c){let l=Math.max(4,Math.round(i));for(let i=0;i<l;i++){let u=i/(l-1),d=Math.max(.75,a*rd(u)),f=t+(c.leanX||0)*u*3,p=n+i,m=r+(c.leanZ||0)*u*3,h=Math.ceil(d);for(let t=-h;t<=h;t++)for(let n=-h;n<=h;n++){let r=Math.hypot(t,n);if(r>d)continue;let a=r>d-.95,l=a?o[2]:(t+i+n)%4==0?o[1]:o[0];a&&s()<c.frost&&(l=Jl(o[2],qu,.8)),Yu(e,f+t,p,m+n,l,.03)}}let u=Math.max(5,Math.round(l*.7));for(let i=0;i<u;i++){let d=(i+.35)/u,f=n+d*(l-1),p=i*2.513+(c.spin||0),m=Math.max(1.1,a*rd(d)*.85),h=ad(e,t+(c.leanX||0)*d*3+Math.cos(p)*m,f,r+(c.leanZ||0)*d*3+Math.sin(p)*m,p,o,c.frost||0,s),g=c.pistil??1;g>.2&&id(e,h.x,h.y,h.z,p+.5,c.late,!!c.shortHair,c.hair),g>.45&&id(e,h.x,h.y,h.z,p-.5,c.late,!!c.shortHair,c.hair)}if(c.crown!==!1)for(let i=0;i<5;i++)id(e,t,n+l-1,r,i*1.256+(c.spin||0),c.late,!!c.shortHair,c.hair);let d=c.sugarLen||5,f=c.sugars|0;for(let i=0;i<f;i++){let o=(i+.4)/f,s=n+1+o*(l-3),u=i*2.513+(c.spin||0),p=Math.max(1,a*rd(o)*.65);$u(e,t+Math.cos(u)*p,s,r+Math.sin(u)*p,u,d,c.leafD,c.leafL,.28+o*.25,!!c.fade)}}function sd(e,t,n,r,i,a=0){let o=Hu,s=Math.cos(t),c=Math.sin(t),l=-c,u=s,d=Jl(9618508,13482837,a),f=Jl(11983980,15392668,a),p=Jl(6265398,10127924,a),m=Jl(13953944,16116912,a),h=r*o;for(let t=0;t<=h;t++){let r=t/h,a=Math.sin(Math.PI*Math.max(.04,r)**.7)*(h*.64),g=(n+i*r)*o-Math.sin(r*Math.PI)*0,_=1.2*o+t,v=Math.ceil(a);for(let t=-v;t<=v;t++){if(Math.abs(t)>a+.05)continue;let n=s*_+l*t,i=c*_+u*t,o=Math.abs(t)>a-.9,h=Math.abs(t)<.6,v=Math.round(g+(o?.6:0));Xu(e,Math.round(n),v,Math.round(i),o?p:h?m:d,.02),Xu(e,Math.round(n),v-1,Math.round(i),o?p:ql(d,.86),.02),r>.2&&r<.88&&!o&&Xu(e,Math.round(n),v+1,Math.round(i),f,.015)}}}function cd(e,t,n,r){let i=Math.cos(t),a=Math.sin(t),o=-a,s=i;for(let t=0;t<2;t++){let c=r+t*.8,l=.7+t*.45;Yu(e,i*c+o*l,n+.9,a*c+s*l,t===0?9069124:3811615,.02),Yu(e,i*c-o*l,n+.45,a*c-s*l,7031604,.02)}}function ld(e,t,n,r){if(Hu!==1)for(let i=0;i<8;i++){let a=i/8*Math.PI*2+.4;Xu(e,Math.round(Math.cos(a)*2.1),Math.round(t*Hu),Math.round(Math.sin(a)*2.1),i%2?r:n,.02)}else for(let i=0;i<6;i++){let a=i/6*Math.PI*2+.4;Yu(e,Math.cos(a)*2.15,t,Math.sin(a)*2.15,i%2?r:n,.02)}}function ud(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=nd(e,Math.cos(n)*1.25,t+.4,Math.sin(n)*1.25,n,r,i,s,c);return ed(e,p.x,p.y,p.z,n,u,l,d,a,o,s,f),p}function dd(e,t,n,r,i,a,o,s){let c=Hu,l=Math.max(1.35,i)*c,u=Math.round(t*c),d=Math.round(n*c),f=Math.round(r*c),p=-Math.max(1,Math.round(l*.42)),m=Math.max(2,Math.round(l*.72));for(let t=p;t<=m;t++){let n=t/(l*.85),r=l*Math.sqrt(Math.max(0,1-n*n)),i=Math.ceil(r);for(let n=-i;n<=i;n++)for(let l=-i;l<=i;l++){let i=Math.hypot(n,l);if(i>r)continue;let p=i>r-.85*(c>1?1.2:1),m=p?a[2]:(n+t+l)%3==0?a[1]:a[0];p&&o()<s&&(m=Jl(a[2],qu,.62)),Xu(e,u+n,d+t,f+l,m,.03)}}}function fd(e){return e<.3?.76+e/.3*.24:1-.62*((e-.3)/.7)**1.15}function pd(e,t,n,r,i,a,o,s,c,l,u,d){let f=Math.hypot(i,a,o)||1;i/=f,a/=f,o/=f;let p=-o,m=i,h=Math.hypot(p,m)||1;p/=h,m/=h;let g=Math.max(2,s|0),_=Math.max(2.1,c*.82);for(let s=0;s<g;s++){let f=g===1?0:s/(g-1),h=c*fd(f),v=s*2.15+(d.spin||0),y=c*.2,b=t+i*s*_+Math.cos(v)*p*y,x=n+a*s*_,S=r+o*s*_+Math.sin(v)*m*y;if(dd(e,b,x,S,h,l,u,d.frost||0),h>1.6)for(let t=0;t<2;t++){let n=v+t*Math.PI+.8,r=h*.58;dd(e,b+Math.cos(n)*h*.78,x-h*.12,S+Math.sin(n)*h*.78,r,l,u,d.frost||0)}let C=d.hairs??4;for(let t=0;t<C;t++){let n=v+t/C*Math.PI*2;id(e,b+Math.cos(n)*h*.7,x+h*.25,S+Math.sin(n)*h*.7,n,d.late,!0,d.hair)}d.leafD!=null&&(s%2==0||h>2)&&$u(e,b+Math.cos(v+.6)*h*.6,x+.4,S+Math.sin(v+.6)*h*.6,v+.6,(d.sugarLen||4)*(.8+.4*(1-f)),d.leafD,d.leafL,.3,!!d.fade)}dd(e,t+i*g*_,n+a*g*_,r+o*g*_,Math.max(1.4,c*.34),l,u,d.frost||0)}function md(e,t,n,r){let i=r?Jl(6965796,t.stem,.2):Jl(t.stem,14149544,.16),a=r?3811348:t.stemD,o=t.leafDark,s=t.leafLight,c=[15251530,12093480,15914346],l=t.bud.map((e,t)=>Jl(e,c[t],r?.14:.04)),u=r?.88:.05,d=(r?.08:.02)*(t.frost||1),f=r?{cream:15983280,orange:14455872,amber:12085306}:t.hair||{cream:16052706,orange:16249830,amber:15200460},p=r?[{y:8,fan:18,fingers:9,droop:.5,arms:4,reach:14,rise:6,buds:6,girth:3.15},{y:15,fan:16,fingers:9,droop:.36,arms:4,reach:11,rise:6,buds:5,girth:2.9},{y:22,fan:13,fingers:7,droop:.22,arms:4,reach:8,rise:5,buds:5,girth:2.65},{y:28,fan:10,fingers:5,droop:.12,arms:4,reach:6,rise:4,buds:4,girth:2.4},{y:33,fan:7,fingers:5,droop:.06,arms:0}]:[{y:7,fan:13,fingers:9,droop:.5,arms:4,reach:8,rise:4,buds:5,girth:2.55},{y:13,fan:11,fingers:7,droop:.28,arms:4,reach:6,rise:4,buds:4,girth:2.35},{y:19,fan:8,fingers:5,droop:.12,arms:4,reach:5,rise:3,buds:4,girth:2.15},{y:24,fan:6,fingers:5,droop:.04,arms:0}],m=p[p.length-1].y;Qu(e,m+(r?18:8),i,a,!0);for(let t=0;t<=7;t++){let n=2.35-t*.16;for(let r=0;r<8;r++){let o=r/8*Math.PI*2+.2;Yu(e,Math.cos(o)*n,t,Math.sin(o)*n,r%2?a:i,.02)}}let h=(t,i,a,c,p,m)=>{pd(e,t,i,a,Math.cos(m)*.38,.92,Math.sin(m)*.38,c,p,l,n,{frost:d,late:u,hair:f,hairs:r?4:1,spin:m,leafD:o,leafL:s,sugarLen:r?4.4:3.2,fade:r})},g=.22+t.seed%5*.18;for(let t of p){if(ld(e,t.y,i,a),td(e,t.y,g,t.fan,t.fingers,t.droop,o,s,i),t.fan>=11&&td(e,t.y+1,g+Math.PI/4,t.fan*.72,t.fingers,t.droop+.08,o,s,i),r&&t.fan>=16&&td(e,t.y+2,g+Math.PI/8,t.fan*.62,5,t.droop+.16,o,s,i),t.arms)for(let n=0;n<t.arms;n++){let r=g+.4+n*Math.PI*2/t.arms,c=nd(e,Math.cos(r)*1.6,t.y+.5,Math.sin(r)*1.6,r,t.reach,t.rise,i,a);ed(e,Math.cos(r)*(1.6+t.reach*.42),t.y+.5+t.rise*.42,Math.sin(r)*(1.6+t.reach*.42),r+.6,Math.max(5,t.fan*.5),t.fan>11?7:5,t.droop+.12,o,s,i,!1),h(c.x,c.y+.6,c.z,t.buds,t.girth,r)}g+=Math.PI/2}pd(e,0,r?20:15,0,0,1,0,r?11:9,r?3.45:2.7,l,n,{frost:d,late:u,hair:f,hairs:r?5:1,spin:.4,leafD:o,leafL:s,sugarLen:r?5.2:3.4,fade:r})}function hd(e,t,n,r){md(e,n,r,t===4)}function gd(e,t){let n=t.stem,r=t.stemD,i=t.leafDark,a=t.leafLight;Qu(e,21*W,n,r,!0);let o=[{y:3*W,fingers:5,size:9*W,droop:.6,ax:4*W},{y:6.5*W,fingers:7,size:12*W,droop:.42,ax:3.4*W},{y:10*W,fingers:9,size:13*W,droop:.3,ax:2.6*W},{y:13.5*W,fingers:9,size:12*W,droop:.2,ax:0},{y:17*W,fingers:7,size:9.5*W,droop:.1,ax:0},{y:19.6*W,fingers:5,size:7*W,droop:.06,ax:0}],s=.2+t.seed%5*.18;for(let t of o){ld(e,t.y,n,r);let o=t.y<8*W?Jl(a,i,.3):a;if(td(e,t.y,s,t.size,t.fingers,t.droop,i,o,n),t.ax)for(let o of[0,Math.PI])ud(e,t.y,s+o+1.2,t.ax,t.ax*.6,i,a,n,r,5,Math.max(6,t.size*.55),.42,!1);s+=Math.PI/2+.18}td(e,21.4*W,s,4.6*W,3,-.5,i,a,n),ed(e,0,22*W,0,s+Math.PI/2,3.4*W,3,-.8,i,a,n,!1)}function _d(e,t){let n=Jl(14151342,t.leafLight,.28),r=ql(n,.78),i=t.leafDark,a=t.leafLight;Qu(e,12*W,n,r,!1),sd(e,.12,2.3*W,4.4*W,1.1*W,.16),sd(e,Math.PI+.04,2.3*W,3.5*W,.8*W,.26),ld(e,6*W,n,r),ed(e,0,6*W,0,Math.PI/2,9*W,1,.25,i,a,n,!1),ed(e,0,6*W,0,-Math.PI/2,8*W,1,.3,i,a,n,!1),ld(e,9*W,n,r),td(e,9.2*W,.06,10*W,3,-.1,i,a,n),td(e,12*W,Math.PI/2,4*W,1,-1.35,i,a,n)}function vd(e,t){let n=Jl(15201988,t.leafLight,.12);for(let t=0;t<=6*W;t++)Yu(e,t>4*W?(t-4*W)*.8:0,t,0,t<2*W?Jl(n,13154424,.4):n,.02);sd(e,.16,4.5*W,4.2*W,3.5*W,.04),sd(e,Math.PI-.06,4.5*W,3.3*W,2.8*W,.12),ed(e,.3*W,6.1*W,0,Math.PI/2,6.4*W,1,-.3,t.leafDark,t.leafLight,n,!1),ed(e,.3*W,6.1*W,0,-Math.PI/2,5.3*W,1,-.15,t.leafDark,t.leafLight,n,!1),cd(e,.16,7.4*W,4.8*W)}function yd(e,t){let n=U(t),r=Ul(e*977+n.seed*131+7),i=new V;Hu=Bu;try{e<=0?vd(i,n):e===1?_d(i,n):e===2?gd(i,n):hd(i,e,n,r)}finally{Hu=1}return i}function bd(e){let t=U(e),n=new V,r=t.seed*.85;for(let e=-8;e<=8;e++){let i=(e- -8)/16,a;a=i<.28?Math.sqrt(Math.max(0,1-((.28-i)/.28)**2)):Math.cos((i-.28)/.72*Math.PI/2)**.62;let o=5.4*a,s=3.15*a;for(let i=Math.floor(-o-.2);i<=Math.ceil(o+.2);i++)for(let a=Math.floor(-s-.2);a<=Math.ceil(s+.2);a++){if(o<.45||s<.45)continue;let c=i/o,l=a/s;if(c*c+l*l>1)continue;let u=a>=s*.35,d=Math.sin(e*.72+r),f=d>.38,p=!f&&d>.12,m=u?14468258:10910802;p&&(m=u?9267268:6965810),f&&(m=3811615),!f&&B(e,a,i,t.seed+5)>.93&&(m=2365458),u&&!f&&a>s*.55&&i<0&&(m=15786694),n.set(e,a,i,m,.03)}if(i>.14&&i<.9&&o>1.2){let t=Math.round(o);n.set(e,1,t,2365458,.02),n.set(e,2,t+1,12886136,.02)}}return n.set(9,0,0,2759700,.02),n.set(-8,-1,0,4864040,.02),n.set(-7,-1,0,6047286,.02),n}function xd(e){let t=U(e),n=new V,r=Ul(99+t.seed*17);od(n,0,0,0,7,2.15,t.bud,r,{stem:Jl(6983474,t.stem,.45),late:.92,pistil:.85,frost:.34*(t.frost||1),sugars:0,sugarLen:2,fade:!1,shortHair:!0,leafD:t.leafDark,leafL:t.leafLight,hair:t.hair||null,spin:.5});for(let e=8;e<=12;e++)Yu(n,0,e,0,13220234,.02);return n}var Sd={n:4,cost:16},Cd={mother:80,tube:70,vegWest:140,vegCenter:140,bed:80},wd={A:4,AA:6,AAA:9,AAAA:14};function Td(){let e=new V,t=e=>{let t=Math.cos(e),n=Math.sin(e),r=3902719,i=11619327;return t>=0?Jl(n>=0?r:i,3073748,t):Jl(6957286,n>=0?r:i,Math.abs(n)*.85)};for(let n=-17;n<=17;n++)for(let r=-17;r<=17;r++){let i=Math.hypot(n,r);if(i>16.4||i<13.3)continue;let a=t(Math.atan2(n,r));e.set(n,r,-1,Jl(a,2363482,.4),.02),e.set(n,r,0,a,.015)}let n=[[5,7,5],[7,5,5],[7,2,2],[2,7,5],[7,5,7],[6,5,3],[7,4,7],[5,7,2],[3,5,6],[7,1,7]];for(let r=0;r<16;r++){let i=r/16*Math.PI*2,a=14.75,o=Math.sin(i)*a,s=Math.cos(i)*a,c=Math.cos(i),l=-Math.sin(i),u=Math.sin(i),d=Math.cos(i),f=n[r%n.length],p=Jl(8058602,t(i),.22);f.forEach((t,n)=>{for(let r=0;r<3;r++){if(!(t&1<<2-r))continue;let i=(r-1)*1.15,a=(1-n)*1.15,f=Math.round(o+c*i+u*a),m=Math.round(s+l*i+d*a);Math.hypot(f,m)<12.9||e.set(f,m,1,p,0)}})}let r=(t,n,r)=>{for(let i=0;i<=2;i++)e.set(t,n,i,i===2?r:Jl(r,879400,.5),.012)},i=(e,t,n)=>{let i=Math.sin(e),a=Math.cos(e),o=Math.cos(e),s=-Math.sin(e);for(let e=0;e<=t;e+=.25){let c=e/t;if(e<1.8){r(Math.round(i*e),Math.round(a*e)-2,3129157);continue}let l=Math.sin(Math.PI*((e-1.2)/(t-1.2))**.85)*n*(Math.floor(e*1.6)%2==0?.45:1);for(let t=-Math.ceil(l);t<=Math.ceil(l);t++){if(Math.abs(t)>l+.05)continue;let n=Math.round(i*e+o*t),u=Math.round(a*e+s*t)-2,d=t===0,f=Math.abs(t)>=l-.45;r(n,u,d?11989098:c>.86?8317020:f?1407536:3129160)}}};[[0,11.4,1.55],[.72,9.4,1.35],[-.72,9.4,1.35],[1.28,7.3,1.15],[-1.28,7.3,1.15],[1.9,5.1,.95],[-1.9,5.1,.95]].forEach(([e,t,n])=>i(e,t,n));for(let e=-8;e<=0;e++)r(0,e,e<-5?4641365:4050764);return e}var Ed={x:30,z:0,hx:7,hz:5.5},Dd={half:16.45,back:-23.2,front:-14.4,walkX:15.6,walkZ:-22.45},Od={y:3.62,x0:-16.15,x1:16.15,zFront:-14.5,zBack:-23.05},kd={x0:-16.02,x1:-14.22,z0:-19.15,z1:-15.05,y0:.75,y1:Od.y},Ad=[{id:`bd`,name:`BLUE DREAM`,detail:`4 SEEDS · HYBRID · 9 WK`,cost:12,kind:`seed`,strain:`bd`,n:4},{id:`gdp`,name:`GRANDDADDY PURPLE`,detail:`4 SEEDS · INDICA · 9 WK`,cost:12,kind:`seed`,strain:`gdp`,n:4},{id:`gc`,name:`GREEN CRACK`,detail:`4 SEEDS · SATIVA · 8 WK`,cost:12,kind:`seed`,strain:`gc`,n:4},{id:`gg`,name:`GORILLA GLUE #4`,detail:`4 SEEDS · INDICA · 9.5 WK`,cost:14,kind:`seed`,strain:`gg`,n:4},{id:`lis`,name:`LONG ISLAND SKUNK`,detail:`4 SEEDS · HYBRID · 9 WK`,cost:12,kind:`seed`,strain:`lis`,n:4},{id:`uw`,name:`UW PURPLE`,detail:`4 SEEDS · INDICA · 8 WK`,cost:12,kind:`seed`,strain:`uw`,n:4},{id:`bb`,name:`DJ SHORT BLUEBERRY`,detail:`4 SEEDS · INDICA · 7.5 WK`,cost:14,kind:`seed`,strain:`bb`,n:4},{id:`feed`,name:`NUTRIENTS`,detail:`FEEDS MOTHERS AND VEG`,cost:8,kind:`nutrient`,n:1},{id:`cubes`,name:`ROOT CUBES`,detail:`2 CUBES, SPEEDS TUBES`,cost:10,kind:`cube`,n:2}];function jd(e){let t=(e-kd.z0)/(kd.z1-kd.z0),n=Math.min(1,Math.max(0,t));return kd.y0+(kd.y1-kd.y0)*n}function Md(e,t,n=null){return e>kd.x0+.14&&e<kd.x1-.14&&t>=kd.z0-.08&&t<=kd.z1+.06?n==null||Math.abs(n-jd(t))<.9:!1}function Nd(e,t){return e<=Od.x0+.12||e>=Od.x1-.12||t>=Od.zFront-.05||t<=Od.zBack+.08?!1:!Md(e,t)}var Pd={M:[`10001`,`11011`,`10101`,`10001`,`10001`,`10001`,`10001`],O:[`01110`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],T:[`11111`,`00100`,`00100`,`00100`,`00100`,`00100`,`00100`],A:[`01110`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],B:[`11110`,`10001`,`10001`,`11110`,`10001`,`10001`,`11110`],P:[`11110`,`10001`,`10001`,`11110`,`10000`,`10000`,`10000`],H:[`10001`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],E:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`11111`],R:[`11110`,`10001`,`10001`,`11110`,`10100`,`10010`,`10001`],C:[`01111`,`10000`,`10000`,`10000`,`10000`,`10000`,`01111`],L:[`10000`,`10000`,`10000`,`10000`,`10000`,`10000`,`11111`],N:[`10001`,`11001`,`10101`,`10011`,`10001`,`10001`,`10001`],V:[`10001`,`10001`,`10001`,`10001`,`01010`,`01010`,`00100`],G:[`01111`,`10000`,`10000`,`10111`,`10001`,`10001`,`01111`],W:[`10001`,`10001`,`10001`,`10101`,`10101`,`01010`,`01010`],U:[`10001`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],S:[`01111`,`10000`,`10000`,`01110`,`00001`,`00001`,`11110`],D:[`11110`,`10001`,`10001`,`10001`,`10001`,`10001`,`11110`],F:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`10000`],Y:[`10001`,`10001`,`01010`,`00100`,`00100`,`00100`,`00100`],5:[`11111`,`10000`,`11110`,`00001`,`00001`,`10001`,`01110`],2:[`01110`,`10001`,`00001`,`00010`,`00100`,`01000`,`11111`],0:[`01110`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`]," ":[`000`,`000`,`000`,`000`,`000`,`000`,`000`]};function Fd(e,t,n,r,i,a,o=0,s,c=!0){let l=eu(t,n,[0,0,0],s,c);return l.position.set(r,i,a),l.rotation.y=o,e.add(l),l}function Id(e,t){let n=0;for(let r of e)n+=((Pd[r]||Pd[` `])[0].length+1)*t;return{w:n-t,h:7*t}}function Ld(e,t,n,r,i,a,o){let{w:s,h:c}=Id(t,a),l=Math.round(n-s/2),u=Math.round(r-c/2);for(let n of t){let t=Pd[n]||Pd[` `];for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++)if(t[n][r]===`1`)for(let t=0;t<a;t++)for(let s=0;s<a;s++)e.set(l+r*a+s,i,u+n*a+t,o,.02);l+=(t[0].length+1)*a}}function Rd(e,t,n,r,i,a,o){let{w:s,h:c}=Id(t,a),l=Math.round(n-s/2),u=Math.round(r+c/2);for(let n of t){let t=Pd[n]||Pd[` `];for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++)if(t[n][r]===`1`)for(let t=0;t<a;t++)for(let s=0;s<a;s++)e.set(l+r*a+s,u-n*a-t,i,o,.02);l+=(t[0].length+1)*a}}function zd(){let e=new V;return e.box(0,0,-1,18,26,1,(e,t)=>e%5==0?5913893:B(e,t,1,9)>.5?8017462:7162928,.03),e.box(3,2,1,8,11,2,9267268,.03),e.box(10,2,1,16,11,2,9267268,.03),e.box(3,13,1,8,23,2,9267268,.03),e.box(10,13,1,16,23,2,9267268,.03),e.box(14,11,1,16,15,3,15317566,.02),e}function Bd(e){let t=new V,n=e?7:5,r=e?9:7;return t.box(-n-3,0,-n-3,n+3,2,n+3,7224108,.03),t.box(-n-2,2,-n-2,n+2,3,n+2,9063992,.03),t.box(-n,2,-n,n,r,n,(e,t)=>t%3==0?12082228:12739898,.05),t.box(-n-1,r,-n-1,n+1,r+2,n+1,13792586,.04),t.box(-n+1,r+2,-n+1,n-1,r+3,n-1,4928548,.05),t}function Vd(){let e=new V;return e.box(-1,0,0,2,10,2,6045744,.03),e.box(-6,8,1,7,12,4,2892824,.02),e.box(-5,9,3,6,11,6,16774084,.01),e}function Hd(){let e=new V;return e.box(-2,0,-2,2,4,2,3817542,.03),e.box(-1,4,-1,1,30,1,4871248,.03),e.box(-12,28,-3,12,32,3,2366484,.02),e.box(-10,29,2,10,31,5,16774864,.01),e}function Ud(){let e=new V;return e.box(-4,0,-3,4,6,4,4034410,.03),e.box(-2,6,-2,2,8,2,3112778,.02),e.box(3,3,0,9,5,2,3112778,.02),e.box(-6,4,-1,-3,8,1,2382902,.02),e}function Wd(){let e=new V;return e.box(-3,0,-3,-1,6,-1,6045744,.03),e.box(1,0,-3,3,6,-1,6045744,.03),e.box(-3,0,1,-1,6,3,6045744,.03),e.box(1,0,1,3,6,3,6045744,.03),e.box(-4,6,-4,4,8,4,7229488,.02),e.box(-4,8,-4,4,16,-2,7229488,.02),e}function Gd(){let e=new V;return e.box(-12,0,-3,12,2,3,7029800,.03),e.box(-12,10,-3,12,12,3,7029800,.03),e.box(-12,20,-3,12,22,3,7029800,.03),Xd(e,-10,2,-2),e.box(-3,2,-2,3,7,2,15317566,.02),e.box(4,2,-2,10,8,2,3829416,.02),e.box(-8,12,-2,-1,18,2,13038954,.02),e.box(1,12,-2,8,17,2,11745842,.02),e}var Kd=4,qd=22;function Jd(e,t,n,r){e.box(t-2,n,r-2,t+3,n+3,r+3,6983493,.02),e.delBox(t-1,n+1,r-1,t+2,n+3,r+2)}function Yd(){let e=new V;return Jd(e,0,0,0),e}function Xd(e,t,n,r){e.box(t,n,r,t+6,n+6,r+4,4034410,.02),e.box(t+2,n+6,r+1,t+4,n+8,r+3,3112778,.02)}function Zd(){let e=new V;return Xd(e,0,0,0),e}function Qd(){let e=new V;return e.box(-8,0,-7,8,2,7,3817542,.03),e.box(-9,2,-8,9,12,8,2765110,.03),e.box(-7,8,-6,7,11,6,4114112,.01),e.box(-8,12,-7,8,14,7,1844264,.02),e.delBox(-6,12,-5,6,14,5),e.box(-6,11,-5,6,12,5,8317151,.01),e.box(3,14,-3,8,20,3,5068382,.03),e.box(4,17,-1,7,19,2,9685082,.01),e.box(8,9,-2,16,12,2,14015446,.02),e}function $d(){let e=new V,t=[];for(let e=0;e<Kd;e++)t.push(Math.round(-33+e*qd));for(let n=-44;n<44;n++){for(let r=0;r<=8;r++)for(let i=-4;i<=4;i++){let a=r-4,o=Math.hypot(a,i);if(o>4.15||o<2.55)continue;let s=t.reduce((e,t)=>Math.min(e,Math.abs(n-t)),99);a>1.4&&Math.abs(i)<=1&&s<3||e.set(n,r,i,i>1?16251639:13686481,.02)}e.set(n,2,0,4114112,0),e.set(n,2,1,2199434,0)}e.box(-45,1,-3,-42,7,4,12962758,.02),e.box(42,1,-3,45,7,4,12962758,.02);for(let n of t)e.box(n-3,7,-3,n+4,10,4,1845528,.03),Jd(e,n,9,0);for(let t of[-36,-2,34])e.box(t,-5,-1,t+2,1,2,9278360,.03);return{model:e,centers:t}}function ef(){let e=new V;return e.box(-12,0,-6,12,8,7,6045744,.03),e.box(-14,8,-7,14,10,8,12886122,.02),e.box(-7,10,-6,7,22,-3,1448980,.02),e.box(-6,11,-3,6,21,-2,10354538,.01),e.box(-1,10,-3,1,12,-1,2763306,.02),e.box(-6,10,1,6,11,5,2368548,.02),e.box(8,10,-5,13,20,1,2896696,.02),e.box(9,15,1,12,17,2,8257386,.01),e}function tf(){let e=new V,t=e=>Math.round(e*16),n=t(kd.x0),r=t(kd.x1);for(let i=0;i<11;i++){let a=i/11,o=(i+1)/11,s=t(kd.z0+(kd.z1-kd.z0)*a),c=t(kd.z0+(kd.z1-kd.z0)*o),l=t(kd.y0+(kd.y1-kd.y0)*o),u=Math.max(t(.7),l-4);e.box(n+2,u,s,r-2,l,c,i%2?13807738:12093784,.03)}let i=(n,r)=>{e.box(n,t(kd.y0+.15),t(kd.z0),n+3,t(kd.y1+.85),t(r),15985884,.02),e.box(n,t(kd.y1+.85),t(kd.z0),n+3,t(kd.y1+1.05),t(r),16774879,.02)};return i(n,kd.z1),i(r-3,-16.25),e}function nf(e,t,n){let r=new V,i=e=>Math.round(e*16),a=15195332,o=(e,t,n)=>t<16?7230520:t>46&&t<50?13351058:B(e,t,n,2)>.9?ql(a,.93):a,s=Dd.back-.05,c=-Dd.half+.1,l=Dd.half-.1,u=-5.48,d=5.32,f=(e,t,n)=>{r.box(i(e),8,i(s+.15),i(t),12,i(-14.2),(e,t,r)=>Math.floor(r/4)%2==0?n:ql(n,.9),.04)};f(c,u,4152372),f(u,d,14015956),f(d,l,12884578);let p=(e,t,n,a)=>r.box(i(e),12,i(t),i(n),i(3.34),i(a),o,.03);p(c,Dd.back-.2,l,s),p(-Dd.half-.05,Dd.back-.2,c,-14.25),p(l,Dd.back-.2,Dd.half+.05,-14.25);let m=e=>{p(e,s,e+.28,-19.7),p(e,-17.3,e+.28,-14.4),r.box(i(e),i(2.7),i(s),i(e+.28),i(2.95),i(-14.4),3097632,.02),r.box(i(e)-2,12,i(-19.78),i(e+.28)+2,i(2.5),i(-19.52),9267268,.02),r.box(i(e)-2,12,i(-17.48),i(e+.28)+2,i(2.5),i(-17.22),9267268,.02)};m(u),m(d),Rd(r,`MOTHER`,i(-11),36,i(s)-1,2,15984560),Rd(r,`CLONE`,i(0),36,i(s)-1,2,1334890),Rd(r,`VEG`,i(11),36,i(s)-1,2,15984560),r.box(i(9.6),12,i(-20.3),i(12.4),13,i(-19.6),3817528,.02),Fd(e,r,1/16,0,0,0);for(let t of[-14.6,.1,14.4])Fd(e,Vd(),1/16,t,1.55,-22.55);Fd(e,Hd(),1/16,6.35,.75,-16.35),Fd(e,Ud(),1/16,-6.4,.75,-16.55);let h=e=>t.push(e);h({x0:c,x1:l,z0:Dd.back-.25,z1:s}),h({x0:-Dd.half-.1,x1:c,z0:Dd.back-.2,z1:-14.3}),h({x0:l,x1:Dd.half+.1,z0:Dd.back-.2,z1:-14.3}),h({x0:c,x1:-1.2,z0:-14.48,z1:-13.92}),h({x0:1.2,x1:l,z0:-14.48,z1:-13.92});for(let e of[u,d])h({x0:e,x1:e+.28,z0:s,z1:-19.7,floor:0}),h({x0:e,x1:e+.28,z0:-17.3,z1:-14.4,floor:0});let g=new rr;g.add(eu(zd(),1/8)),g.position.set(-9/8,.75,-13.9),e.add(g);let _=Bd(!0),v=Bd(!1);Fd(e,Qd(),1/16,-3.85,.75,-20.2),h({x0:-4.45,x1:-3.15,z0:-20.75,z1:-19.6});let y=[{x:-13.7,z:-21.55},{x:-8.15,z:-21.55}].map((t,n)=>{Fd(e,_,1/14,t.x,.75,t.z);let r=eu(yd(0,`bd`),Vu);return r.position.set(t.x,1.53,t.z),r.scale.setScalar(.55),r.visible=!1,r.castShadow=!0,e.add(r),{...t,state:`empty`,strain:null,stage:0,prog:0,water:1,cool:0,plant:r,locked:n===0}}),b=$d(),x=b.model.build(1/16),S=[-21.35,-19.15].flatMap((t,n)=>{let r=new Ai(x,$l);return r.position.set(.35,1.0625,t),r.castShadow=!0,e.add(r),b.centers.map(r=>{let i=.35+r/16,a=eu(yd(0,`bd`),Vu);return a.position.set(i,1.7825,t),a.scale.setScalar(.48),a.visible=!1,a.castShadow=!0,e.add(a),{x:i,z:t,state:`empty`,t:0,strain:null,plant:a,locked:n===0}})}),C=[[8.15,-21.55],[13.7,-21.55],[8.15,-18.85],[13.7,-18.85]].map(([t,n])=>rf(e,v,t,n,.75));Fd(e,tf(),1/16,0,0,0),h({x0:kd.x0-.02,x1:kd.x0+.18,z0:kd.z0,z1:kd.z1}),h({x0:kd.x1-.18,x1:kd.x1+.02,z0:kd.z0,z1:-16.25}),h({x0:kd.x0+.18,x1:kd.x1-.18,z0:-16.9,z1:kd.z1,floor:0});let w=af(e,h);return C.push(...w.veg),{roof:n.roof,facade:n.facade,door:g,open:!1,doorBlock:{x0:-1.15,x1:1.2,z0:-14.25,z1:-13.72},mothers:y,trays:S,veg:C,upper:w.upper,computer:w.computer,breeder:w.breeder,loftY:Od.y,mother2:!1,tube2:!1,vegWest:!1,vegCenter:!1,onStair:Md,onLoft:Nd,stairHeight:jd,contains(e,t){return e>-Dd.half+.4&&e<Dd.half-.4&&t<-14.25&&t>Dd.back+.32}}}function rf(e,t,n,r,i){Fd(e,t,1/15,n,i,r);let a=eu(yd(2,`bd`),Vu);return a.position.set(n,i+.62,r),a.scale.setScalar(.78),a.visible=!1,a.castShadow=!0,e.add(a),{x:n,z:r,y:i,up:i>2,state:`empty`,t:0,strain:null,plant:a}}function af(e,t){let n=new rr;n.visible=!1,e.add(n);let r=new V,i=e=>Math.round(e*16),a=i(3.36),o=i(Od.y),s=i(Od.x0),c=i(Od.x1),l=i(Od.zBack),u=i(Od.zFront),d=i(-5.48),f=i(5.32);r.box(s,a,l,c,o,u,(e,t,n)=>{if(t===a)return 14997696;let r=(Math.floor(e/8)+Math.floor(n/8))%2;return e<f?r?12884578:11896912:Math.floor(e/4)%2?9267781:11043672},.04),r.delBox(i(kd.x0-.04),a-2,i(kd.z0),i(kd.x1+.04),o+2,i(kd.z1+.05));let p=o+i(2.2),m=(e,t,n)=>t<o+4?7230520:t>p-6?13351058:B(e,t,n,2)>.9?ql(15195332,.93):15195332,h=i(-19.7),g=i(-17.3),_=e=>{r.box(e,o,l,e+4,p,h,m,.03),r.box(e,o,g,e+4,p,u,m,.03),r.box(e,p-4,h,e+4,p,g,3097632,.02),r.box(e-2,o,h-3,e+6,o+i(1.7),h,9267268,.02),r.box(e-2,o,g,e+6,o+i(1.7),g+3,9267268,.02)};_(d),_(f);let v=(e,t,n,i)=>r.box(e,o,t,n,p,i,m,.03);v(s,l,c,l+5),v(s,l,s+5,u),v(c-5,l,c,u),v(s,u-5,c,u),Ld(r,`VEG`,i(-10.4),i(-16.15),o,2,15984560),Ld(r,`BREED`,i(0),i(-16.15),o,2,13038954),Ld(r,`SHOP`,i(11.2),i(-16.15),o,2,13038954),r.box(i(9.2),o,i(-17.6),i(14.2),o+1,i(-15.7),3829416,.02),Fd(n,r,1/16,0,0,0);let y=Bd(!1),b=[[-13.2,-21.7],[-8.5,-21.7],[-13.2,-20.05],[-8.5,-20.05],[-2.6,-21.55],[2.6,-21.55],[-2.6,-18.85],[2.6,-18.85]].map(([e,t])=>{let r=rf(n,y,e,t,Od.y);return r.room=e<-5.4?`west`:`center`,r});Fd(n,Hd(),1/16,-6.3,Od.y,-16.45),Fd(n,Hd(),1/16,4.4,Od.y,-16.45);for(let e of[-14.8,-.2,14.2])Fd(n,Vd(),1/16,e,Od.y+.85,-22.4);let x={x:11.6,z:-20.15,floorY:Od.y};Fd(n,ef(),1/16,x.x,Od.y,-21.35);let S={x:0,z:-16.25,floorY:Od.y},C=new V;C.box(-20,0,-8,20,13,8,(e,t)=>t%4==0?7229488:9068086,.03),C.box(-22,13,-10,22,16,10,3887424,.02),C.box(-12,16,-7,12,25,-5,2374453,.02),C.box(-10,18,-4,10,23,-3,8837300,.01),C.box(-3,16,0,3,19,5,13038954,.02),Rd(C,`DNA`,0,34,9,1,13038954),Fd(n,C,1/16,S.x,Od.y,-16.25),Fd(n,Wd(),1/16,13.5,Od.y,-19.85),Fd(n,Gd(),1/16,14.55,Od.y,-18.15);let w=e=>t({...e,floor:1});w({x0:kd.x0-.05,x1:kd.x1+.05,z0:kd.z0-.45,z1:kd.z0+.08});for(let e of[-5.48,5.32])w({x0:e,x1:e+.28,z0:Od.zBack,z1:-19.7}),w({x0:e,x1:e+.28,z0:-17.3,z1:Od.zFront});return w({x0:10.5,x1:13.4,z0:-22.6,z1:-20.75}),w({x0:13.7,x1:15.45,z0:-18.85,z1:-17.45}),{upper:n,computer:x,breeder:S,veg:b}}function of(){let e=new V;return e.box(-12,0,-7,12,14,7,(e,t)=>t%4==0?7229488:9068086,.04),e.box(-13,14,-8,13,16,8,14135410,.03),e.box(-12,0,-7,-9,30,-4,15985884,.02),e.box(9,0,-7,12,30,-4,15985884,.02),e.box(-14,28,-9,14,31,8,3112778,.03),e.box(-14,31,-9,14,33,-6,4168280,.02),e.box(-9,17,6,9,26,8,1913624,.02),Rd(e,`MOTA`,0,21,8,1,15984560),e.box(-2,16,2,2,17,6,15317566,.02),e}function sf(){let e=new V;return e.box(-3,0,-2,1,20,2,8016432,.04),e.box(18,0,-2,22,20,2,8016432,.04),e.box(-6,16,-1,26,46,3,(e,t)=>t<18||t>44||e<-4||e>24?6111012:3097632,.02),Rd(e,`WAREHOUSE`,10,38,3,1,15984560),Rd(e,`520 MOTA`,10,26,3,1,16770666),e}function cf(){let e=new V;return e.box(-1,0,1,2,24,38,(e,t,n)=>t%5==0?7229488:B(e,t,n,4)>.5?9068086:8082735,.04),e.box(-2,4,2,3,7,36,13213802,.03),e.box(-2,14,2,3,17,36,13213802,.03),e.box(0,9,30,3,13,34,15317566,.02),e}function lf(){let e=new V;return e.box(-1,0,1,2,32,32,(e,t)=>t%3==0?12963027:9345443,.03),e.box(-2,14,14,3,20,20,15317566,.02),e}function uf(){let e=new V,t=new V,n=new V,r=Ed.hx*12,i=Ed.hz*12,a=(e,t,n)=>t%5==0?6713466:(Math.floor(e/6)+Math.floor(n/6))%2==0?9147550:8029326;e.box(-r+2,0,-i+2,r-2,2,i-2,(e,t,n)=>(e+n)%8==0?9343896:10725549,.03);let o=(e,t,n)=>t>6&&t<10?3112778:a(e,t,n);e.box(-r,0,-i,-r+3,48,i,o,.03),e.box(r-3,0,-i,r,48,i,o,.03),e.box(-r,0,-i,r,48,-i+3,o,.03),e.box(-r,0,i-3,r,48,i,o,.03),e.delBox(-r-1,0,-16,-r+4,32,16),e.delBox(-r-1,18,24,-r+4,34,46),e.delBox(-r-1,18,-46,-r+4,34,-24),e.delBox(-20,18,i-4,20,34,i+1),n.box(-r+1,18,24,-r+2,34,46,12969974,.01),n.box(-r+1,18,-46,-r+2,34,-24,12969974,.01),n.box(-20,18,i-2,20,34,i-1,12969974,.01);for(let t of[-38,0,38])e.box(-50,2,t-9,44,6,t+9,4871248,.03);Rd(e,`WAREHOUSE`,0,30,i,2,15984560),t.box(-r-3,47,-i-3,r+3,50,i+3,3818576,.03),t.box(-r-1,50,-3,r+1,53,3,3112778,.02);for(let e=-r;e<=r;e+=18)t.box(e,44,-i,e+2,48,i,2897216,.02);let s=new V;for(let e of[-38,0,38])s.box(-46,37,e-1,40,40,e+2,16777215,0);let c=new V;return c.box(-80,14,22,-77,24,28,2896428,.02),c.box(-77,17,24,-76,21,26,15196884,.01),{shell:e,roof:t,glass:n,bulbs:s,sw:c}}function df(){let e=new V;return e.box(-28,0,0,28,12,2,1913624,.02),Rd(e,`FOR SALE`,0,6,2,1,16770666),e}function ff(e,t){let n=uf();Fd(e,n.shell,1/12,Ed.x,0,Ed.z);let r=Fd(e,n.roof,1/12,Ed.x,0,Ed.z),i=new pa({vertexColors:!0,transparent:!0,opacity:.32,depthWrite:!1}),a=Fd(e,n.glass,1/12,Ed.x,0,Ed.z,0,i,!1);a.renderOrder=2;let o=new pa({vertexColors:!0,color:11832575}),s=Fd(e,n.bulbs,1/12,Ed.x,0,Ed.z,0,o,!1);Fd(e,n.sw,1/12,Ed.x,0,Ed.z);let c=Fd(e,df(),1/14,Ed.x,1.15,Ed.z+Ed.hz+.08),l=new rr;l.add(eu(lf(),1/12)),l.position.set(Ed.x-Ed.hx+.02,0,-1.28),e.add(l);let u=new rr;u.add(eu(cf(),1/16)),u.position.set(20.02,0,-1.2),e.add(u);let d=Ed.x,f=Ed.hz,p=d-Ed.hx,m=d+Ed.hx;t.push({x0:p-.12,x1:p+.32,z0:-f,z1:-1.4},{x0:p-.12,x1:p+.32,z0:1.4,z1:f},{x0:m-.32,x1:m+.12,z0:-f,z1:f},{x0:p,x1:m,z0:f-.32,z1:f+.12},{x0:p,x1:m,z0:-f-.12,z1:-f+.32},{x0:23.38,x1:23.62,z0:1.9,z1:2.35});let h=[];for(let e of[-3.5,-.3,2.9])for(let t of[-3.15,0,3.15])h.push({x:d+e,z:t,y:.72});return{roof:r,door:l,gate:u,forSale:c,open:!1,owned:!1,gateOpen:!1,lights:`veg`,bulbMat:o,bulbs:s,lightSwitch:{x:24.05,z:2.1},slots:h,doorBlock:{x0:p-.05,x1:p+.4,z0:-1.35,z1:1.35},gateBlock:{x0:19.7,x1:20.4,z0:-1.25,z1:1.25},contains(e,t){return e>p+.45&&e<m-.4&&t>-f+.45&&t<f-.45}}}function pf(e,t,n){let r=nf(e,t,n),i=Fd(e,of(),1/16,-3.55,.75,-12.65);t.push({x0:-4.4,x1:-2.7,z0:-13.15,z1:-12.15});let a={x:-3.55,z:-11.45,mesh:i},o=Fd(e,sf(),1/16,16.15,0,-1.85);return t.push({x0:15.7,x1:17.7,z0:-2.15,z1:-1.55}),{house:r,stand:a,lot:{x:16.4,z:-1.05,mesh:o},warehouse:ff(e,t)}}var mf=new vi({vertexColors:!0}),G=16;function hf(e,t,n,r,i,a,o=0,s=$l,c=!0){let l=eu(t,n,[0,0,0],s,c);return l.position.set(r,i,a),l.rotation.y=o,c||(l.castShadow=!1),e.add(l),l}function gf(e,t,n,r,i){e.push({x0:t-r,x1:t+r,z0:n-i,z1:n+i})}var _f={0:[`111`,`101`,`101`,`101`,`111`],1:[`010`,`110`,`010`,`010`,`111`],2:[`111`,`001`,`111`,`100`,`111`],3:[`111`,`001`,`111`,`001`,`111`],4:[`101`,`101`,`111`,`001`,`001`],5:[`111`,`100`,`111`,`001`,`111`],6:[`111`,`100`,`111`,`101`,`111`],7:[`111`,`001`,`010`,`010`,`010`],8:[`111`,`101`,`111`,`101`,`111`],9:[`111`,`101`,`111`,`001`,`111`],F:[`111`,`100`,`110`,`100`,`100`],H:[`101`,`101`,`111`,`101`,`101`],V:[`101`,`101`,`101`,`101`,`010`],E:[`111`,`100`,`110`,`100`,`111`],G:[`111`,`100`,`101`,`101`,`111`],B:[`110`,`101`,`110`,`101`,`110`],U:[`101`,`101`,`101`,`101`,`111`],D:[`110`,`101`,`101`,`101`,`110`],O:[`111`,`101`,`101`,`101`,`111`],P:[`110`,`101`,`110`,`100`,`100`],N:[`101`,`111`,`111`,`101`,`101`],"/":[`001`,`001`,`010`,`100`,`100`]," ":[`0`,`0`,`0`,`0`,`0`]};function vf(e,t,n,r,i,a,o=2){let s=n;for(let n of t){let t=_f[n]||_f[` `],c=t[0].length;for(let n=0;n<t.length;n++)for(let l=0;l<c;l++)if(t[n][l]===`1`)for(let t=0;t<o;t++)for(let c=0;c<o;c++)e.set(s+l*o+c,r-n*o-t,i,a,0);s+=(c+1)*o}}function yf(e,t,n){let r=new rr,i=new V;i.box(-2,-2,-1,34,28,1,1844252,.03),i.box(-1,-1,0,33,27,1,1185810,.02);let a=new V;return a.box(0,0,1,32,24,2,463884,0),vf(a,e,2,20,2,n,2),vf(a,t,2,9,2,15204312,2),a.box(2,2,2,12,5,3,n,0),a.box(14,2,2,22,4,3,3497024,0),r.add(eu(i,1/G)),r.add(eu(a,1/G,[0,0,0],mf,!1)),r}function bf(e,t,n){let r=new rr,i=new V;i.box(-e-2,0,-t-2,e+2,2,t+2,2366484,.02),i.delBox(-e,0,-t,e,2,t),r.add(eu(i,1/G));let a=new V;a.box(-e,0,-t,e,1,t,16774884,0);let o=new vi({vertexColors:!0,color:n});return r.add(eu(a,1/G,[0,0,0],o,!1)),r}function xf(e,t,n,r,i,a,o){let s=bf(i,a,o);return s.position.set(t,n,r),e.add(s),s}function Sf(){let e=new rr,t=new V;t.box(-2,0,-2,2,3,2,3817542,.03),t.box(-1,3,-1,1,16,1,4871248,.03),t.box(-7,14,-1,7,17,2,2304038,.02),e.add(eu(t,1/G));let n=new V;n.box(-1,-1,0,2,2,2,15262420,0),n.box(-9,-1,1,-1,1,2,14015446,0),n.box(2,-1,1,10,1,2,14015446,0),n.box(-1,-9,1,1,-1,2,14015446,0),n.box(-1,2,1,1,10,2,14015446,0);let r=eu(n,1/G,[0,0,0],$l,!1);return r.position.set(0,15.5/G,0),e.add(r),e.userData.blades=r,e}function Cf(e,t,n,r,i,a){let o=Sf();o.position.set(n,r,i),o.rotation.y=a,e.add(o),t.push(o.userData.blades)}function wf(e,t,n,r,i,a,o,s){let c=new V,l=Math.round((t-r/2)*G),u=Math.round((t+r/2)*G),d=Math.round((n-i/2)*G),f=Math.round((n+i/2)*G);for(let e=l;e<u;e++)for(let t=d;t<f;t++){let n=e===l||t===d||e===u-1||t===f-1,r=Math.floor((t-d)/3)%2;c.set(e,a,t,n?2761752:r?o:s,.02)}hf(e,c,1/G,0,0,0,0,$l,!1)}function Tf(e,t){let n=new V;for(let[e,r,i,a,o,s]of t)n.box(Math.round(e*G),Math.round(r*G),Math.round(i*G),Math.round((e+a)*G),Math.round((r+o)*G),Math.round((i+s)*G),(e,t,n)=>B(e,t,n,4)>.45?16251644:12964056,.03);hf(e,n,1/G,0,0,0,0,$l,!1)}function Ef(){let e=new V;e.box(-2,0,-2,2,22,2,6045744,.04),e.box(-4,21,-4,4,23,4,2892824,.02),e.box(-4,28,-4,4,30,4,2892824,.02);let t=new V;return t.box(-3,23,-3,3,28,3,16774084,0),{post:e,glow:t}}function Df(){let e=new V;e.box(-1,0,0,2,6,2,6045744,.03),e.box(-4,4,1,4,7,3,2892824,.02);let t=new V;return t.box(-3,1,3,3,4,5,16773570,0),{wood:e,glow:t}}function Of(){let e=new V;return e.box(0,3,0,1,6,1,2893340,0),e.box(-1,0,-1,2,3,2,16774856,0),e.set(0,-1,0,16766314,0),e}function kf(){let e=new V;return e.box(-4,0,-4,-2,6,-2,15985884,.02),e.box(2,0,-4,4,6,-2,15985884,.02),e.box(-4,0,2,-2,6,4,15985884,.02),e.box(2,0,2,4,6,4,15985884,.02),e.box(-5,6,-5,5,8,5,3107386,.03),e.box(-5,8,-5,5,16,-3,16250090,.02),e.box(-4,10,-4,4,14,-3,4160074,.02),e}function Af(){let e=new V;return e.box(-5,0,-3,4,4,3,12876346,.04),e.box(-2,3,2,3,7,6,13666888,.03),e.box(-3,6,3,-1,8,5,12876346,.03),e.box(1,6,3,3,8,5,12876346,.03),e.set(-1,5,6,1840140,0),e.set(1,5,6,1840140,0),e.set(0,4,6,15909536,0),e.box(3,1,-1,8,3,1,12876346,.04),e.box(6,3,-1,8,6,1,13666888,.03),e}function jf(){let e=new V;return e.box(-5,0,-5,5,6,5,12739898,.04),e.box(-6,6,-6,6,8,6,13792586,.03),e.box(-4,7,-4,4,9,4,4928548,.04),e.box(-2,8,-2,2,14,2,4164138,.05),e.set(-3,11,0,16184298,0),e.set(2,12,1,15764144,0),e.set(0,14,-1,16110919,0),e}function Mf(){let e=new V;return e.box(-8,0,-5,8,1,5,(e,t,n)=>Math.abs(e)>6||Math.abs(n)>3?7029800:e+n&1?9267268:12886122,.02),e}function Nf(){let e=new V;e.box(-36,0,-3,-32,40,3,15985884,.02),e.box(32,0,-3,36,40,3,15985884,.02);for(let t=0;t<=24;t++){let n=t/24*Math.PI,r=Math.round(Math.cos(n)*34),i=36+Math.round(Math.sin(n)*12);e.box(r-2,i,-2,r+2,i+4,2,15985884,.02),t%3==0&&(e.set(r,i+4,0,4164138,.04),e.set(r,i+5,1,t%2?15764144:16184298,0))}return e}function Pf(){let e=new V,t=new V;for(let n=-10;n<=10;n++)for(let r=-10;r<=10;r++){let i=Math.hypot(n,r);if(i<9.2&&i>5.6){let t=B(n,0,r,2)>.55?9278360:6976120;e.set(n,0,r,t,.04),e.set(n,1,r,10133668,.03),e.set(n,2,r,11581114,.03)}i<=5&&t.set(n,0,r,B(n,1,r,3)>.72?16769162:B(n,2,r,4)>.4?16738858:12859932,0)}return e.box(-16,0,-3,-9,3,2,7030056,.04),e.box(9,0,-2,16,3,3,6044449,.04),e.box(-2,0,9,3,3,15,7030056,.04),{ring:e,ember:t}}function Ff(){let e=new V;return e.box(-2,0,-2,2,10,2,10133668,.03),e.box(-7,10,-7,7,12,7,14672870,.02),e.box(-5,12,-5,5,13,5,8304344,.02),e.box(2,12,-1,6,15,2,16052454,.02),e.box(5,13,-1,8,15,1,16173130,.02),e.set(3,14,2,1840140,0),e}function If(){let e=new V;return e.box(-1,0,-1,2,16,2,7029800,.03),e.box(-5,14,-3,6,20,4,3829685,.03),e.box(-5,18,-3,6,21,4,15001840,.02),e.box(6,16,-1,10,18,1,12859950,.02),e}function Lf(){let e=new V;e.box(-18,8,-6,18,11,6,9068086,.03);for(let t of[-16,12])for(let n of[-4,3])e.box(t,0,n,t+3,8,n+3,6045744,.03);return e.box(-14,11,-3,-6,16,2,13214282,.02),e.box(-4,11,-2,2,14,2,4034410,.02),e.box(5,11,-4,14,13,3,7229488,.03),e}function Rf(){let e=new V;return e.box(-10,0,0,10,14,1,7029800,.03),e.box(-7,2,1,-5,12,2,12041410,.02),e.box(2,3,1,4,12,2,9067056,.03),e.box(1,10,1,7,12,2,14015446,.02),e}function zf(){let e=new V;return e.box(-1,4,0,1,10,1,6045744,.02),e.box(-3,0,-3,3,3,3,9067056,.03),e.box(-2,3,-2,2,8,2,4164138,.05),e.set(-3,2,1,15764144,0),e.set(2,4,0,16184298,0),e}function Bf(){let e=new V;for(let t=0;t<20;t++){let n=3+t%3,r=Math.round(Math.cos(t*.85)*n),i=Math.round(Math.sin(t*.85)*n);e.set(r,0,i,t%2?3112778:4034410,.02),e.set(r,1,i,2382902,.02)}return e}function Vf(){let e=new V;return e.box(-4,0,-3,4,6,4,4034410,.03),e.box(-2,6,-2,2,8,2,3112778,.02),e.box(3,3,0,9,5,2,3112778,.02),e.box(-7,4,-1,-3,8,1,2382902,.02),e}function Hf(){let e=new V;e.box(0,10,0,22,12,12,12886122,.03);for(let t of[1,18])for(let n of[1,9])e.box(t,0,n,t+2,10,n+2,9080980,.03);return e.box(2,12,2,8,14,7,7229488,.03),e.box(10,12,3,15,15,7,14131786,.03),e.box(16,12,2,20,16,5,14015446,.02),e}function Uf(){let e=new V;for(let t=-36;t<=36;t++)for(let n=-3;n<=3;n++)for(let r=-3;r<=3;r++){let i=Math.hypot(n,r);i>3.1||i<1.8||e.set(n,r,t,t&7?12042440:8226446,.02)}return e}function Wf(){let e=new V;for(let t=0;t<8;t++)e.box(t*2,0,0,t*2+2,1,14,t%2?16110919:1710618,0);return e}function Gf(e,t){let n=new V;return n.box(0,0,0,8,6,6,e,.04),n.box(3,0,0,5,6,6,t,0),n}function Kf(){let e=new V;return e.box(0,0,0,14,18,1,16052194,.02),e.box(2,2,1,12,16,2,2179100,.02),e.box(6,4,2,8,14,3,9685082,0),e.box(3,8,2,11,11,3,7316031,0),e.box(4,6,2,6,9,3,9359706,0),e.box(8,6,2,10,9,3,9359706,0),e}function qf(e,t,n,r,i,a,o,s,c=8){let l=Math.max(8,Math.ceil(Math.hypot(r-t,i-n)*c));for(let u=0;u<=l;u++){let d=u/l,f=t+(r-t)*d,p=n+(i-n)*d,m=a-Math.sin(Math.PI*d)*o;e.set(Math.round(f*c),Math.round(m*c),Math.round(p*c),s,0)}}function Jf(){let e=new V;return e.box(-3,0,-3,3,6,3,7229488,.04),e.box(-2,5,-2,2,16,2,10134440,.02),e.box(-3,14,-3,3,17,3,12963024,.02),e.box(-1,13,2,1,16,10,14015456,.02),e.box(-1,8,8,1,14,11,3837904,.02),e.box(-4,15,-7,4,18,-3,3108799,.02),e.box(-1,16,-3,1,17,-1,9081496,.02),e}function Yf(e,t,n,r,i){let a=new Za(16762218,0,7,2);a.position.set(n,r,i),e.add(a),t.push(a)}function Xf(e,t,n,r,i){let a=Ef();for(let[n,i]of[[-2.55,-8.7],[2.55,-8.7],[-2.55,.4],[2.55,.4],[-2.55,12.3],[2.55,12.3]])hf(e,a.post,1/G,n,0,i),hf(e,a.glow,1/G,n,0,i,0,mf,!1),Yf(e,r,n,1.72,i),gf(t,n,i,.18,.18);let o=new V,s=[[-2.55,-8.7,-2.55,.4],[-2.55,.4,-2.55,12.3],[2.55,-8.7,2.55,.4],[2.55,.4,2.55,12.3],[-2.55,-8.7,2.55,-8.7],[-2.55,12.3,2.55,12.3]];for(let[e,t,n,r]of s)qf(o,e,t,n,r,2.55,.28,2761756,8);hf(e,o,1/8,0,0,0,0,$l,!1);let c=Of();for(let[t,r,i,a]of s)for(let o of[.28,.62]){let s=t+(i-t)*o,l=r+(a-r)*o,u=2.55-Math.sin(Math.PI*o)*.28-.22;n.push(hf(e,c,1/12,s,u,l,0,mf,!1))}let l=Df();for(let t of[-2.35,2.35])hf(e,l.wood,1/G,t,1.55,-13.92),hf(e,l.glow,1/G,t,1.55,-13.92,0,mf,!1),Yf(e,r,t,1.85,-13.55);let u=Jf();i.forEach((n,r)=>{let i=n.x>0?1:-1,a=n.x-i*3.25;hf(e,u,1/G,a,0,n.z,i>0?-Math.PI/2:Math.PI/2),gf(t,a,n.z,.22,.22),n.x=a,n.bed=r});let d=kf();hf(e,d,1/G,-3.55,.78,-12.55),hf(e,d,1/G,3.55,.78,-12.55),gf(t,-3.55,-12.55,.38,.38),gf(t,3.55,-12.55,.38,.38),hf(e,Af(),1/G,-4.35,.78,-13.45,.4),gf(t,-4.35,-13.45,.28,.22),hf(e,Mf(),1/G,0,.78,-13.45,0,$l,!1);let f=jf();hf(e,f,1/G,-6.55,0,-12.85),hf(e,f,1/G,6.55,0,-12.85),gf(t,-6.55,-12.85,.42,.42),gf(t,6.55,-12.85,.42,.42),hf(e,Nf(),1/G,0,0,9.15),gf(t,-2.15,9.15,.18,.2),gf(t,2.15,9.15,.18,.2);let p=Pf();hf(e,p.ring,1/G,6.55,0,10.45),n.push(hf(e,p.ember,1/G,6.55,.02,10.45,0,mf,!1)),gf(t,6.55,10.45,.7,.7),hf(e,Ff(),1/G,-8.7,0,9.35),gf(t,-8.7,9.35,.42,.42),hf(e,If(),1/G,4.85,0,12.15),gf(t,4.85,12.15,.32,.28),hf(e,Vf(),1/G,10.85,0,-5.35,.6),gf(t,10.85,-5.35,.28,.24);let m=new V,h=[16184298,16110919,15764144,11832296,16744287],g=(e,t)=>{let n=Math.round(e*8),r=Math.round(t*8);m.set(n,0,r,4164138,.04),m.set(n,1,r,4889136,.04),m.set(n,2,r,h[Math.abs(n+r)%h.length],.02)};for(let e=-8.2;e<=12.2;e+=.85)g(-1.75,e),g(1.75,e);for(let e=6.6;e<=14.6;e+=.7)g(e,-13.15),g(-e,-13.15);hf(e,m,1/8,0,0,0,0,$l,!1)}function Zf(e,t){xf(e,-11,3.05,-19.15,12,6,15783844),xf(e,.35,2.55,-20.3,18,5,10474724),xf(e,10.9,3.08,-20.2,12,5,15983280);let n=yf(`76F`,`60H`,16773312);n.position.set(-16.15,1.2,-20.3),n.rotation.y=Math.PI/2,e.add(n);let r=yf(`78F`,`75H`,10153215);r.position.set(-2.2,1.25,-23.05),e.add(r);let i=yf(`18/6`,`VEG`,16774868);i.position.set(16.15,1.2,-21.6),i.rotation.y=-Math.PI/2,e.add(i),Tf(e,[[-15.2,1.15,-23.12,.22,1.35,.06],[-13.4,1.15,-23.12,.22,1.35,.06],[-11.5,1.15,-23.12,.22,1.35,.06],[-9.4,1.15,-23.12,.22,1.35,.06],[7.1,1.15,-23.12,.22,1.35,.06],[9.2,1.15,-23.12,.22,1.35,.06],[11.4,1.15,-23.12,.22,1.35,.06],[13.5,1.15,-23.12,.22,1.35,.06]]),wf(e,-11,-19.6,1.15,2.6,12,7229488,12886122),wf(e,10.9,-20.2,1.2,1.15,12,9070660,12886122),Cf(e,t,-15.85,.78,-18.4,Math.PI/2),Cf(e,t,4.55,.78,-16.7,Math.PI),Cf(e,t,15.55,.78,-16.7,-Math.PI/2)}function Qf(e,t){let n=Od.y;xf(e,-10.9,n+1.72,-21.55,8,3,15983280),xf(e,0,n+1.72,-21.45,8,3,15983280);let r=yf(`18/6`,`VEG`,16774868);r.position.set(-14.8,n+.55,-20.6),r.rotation.y=Math.PI/2,e.add(r);let i=yf(`18/6`,`VEG`,16774868);i.position.set(-1.6,n+.85,-22.85),e.add(i),Tf(e,[[-14.6,n+.45,-22.85,.2,1.15,.06],[-12.2,n+.45,-22.85,.2,1.15,.06],[-9.6,n+.45,-22.85,.2,1.15,.06],[-3.5,n+.45,-22.85,.2,1.15,.06],[-1.1,n+.45,-22.85,.2,1.15,.06],[1.3,n+.45,-22.85,.2,1.15,.06]]),wf(e,-10.9,-20.9,1.05,1.5,58,9070660,12886122),wf(e,0,-20.2,1.15,1.2,58,9070660,12886122),wf(e,12.2,-17.6,1.8,1.15,58,2372648,3228724),Cf(e,t,-15.7,n,-17.2,Math.PI/2),Cf(e,t,4.7,n,-16.8,-Math.PI/2);let a=new V;a.box(0,0,0,28,12,2,1316884,.02);let o=new V;vf(o,`OPEN`,2,9,3,16777215,2);let s=new rr;s.add(eu(a,1/G)),s.add(eu(o,1/G,[0,0,0],new vi({vertexColors:!0,color:11992938}),!1)),s.position.set(8.4,n+1.2,-22.85),e.add(s),hf(e,Kf(),1/G,14.15,n+.7,-22.9),hf(e,Gf(12886122,15984560),1/G,15.15,n,-16.85),hf(e,Gf(9068086,4034410),1/G,15.05,n+.4,-16.7,.2)}function $f(e,t,n,r){hf(e,Uf(),1/12,24.7,3.55,0,0,$l,!1),hf(e,Wf(),1/G,24.15,.22,-.55,0,$l,!1),hf(e,Hf(),1/G,34.85,0,3.45),gf(t,35.55,3.85,.72,.42),Cf(e,r,28.2,0,4.35,Math.PI),Tf(e,[[36.35,.7,-2.6,.08,1.5,.35],[36.35,.7,-.4,.08,1.5,.35],[36.35,.7,1.8,.08,1.5,.35]]);let i=yf(`18/6`,`VEG`,14207231),a=yf(`12/12`,`BUD`,16762218);for(let t of[i,a])t.position.set(23.72,1.15,2.55),t.rotation.y=Math.PI/2,e.add(t);a.visible=n.lights===`flower`,i.visible=n.lights!==`flower`,n.vegScreen=i,n.flowerScreen=a}function ep(e,t){hf(e,Lf(),1/G,16,0,-11.95),hf(e,Rf(),1/G,16.1,1.15,-12.08),Cf(e,t,18.25,0,-7.6,-Math.PI/2)}function tp(e){hf(e,zf(),1/G,-17.35,1.35,-10.35),hf(e,zf(),1/G,-14.55,1.45,-7.7),hf(e,Bf(),1/G,-14.35,.15,-10.55),xf(e,-16,1.85,-9.7,8,3,13231823)}function np(e){let t=new V;for(let[e,n,r,i]of[[-18,16,-6,8],[10,17,8,7],[26,15,-14,6],[-28,16,12,7],[4,18,20,5]])t.sphereShell(Math.round(e*2),Math.round(n*2),Math.round(r*2),i,3,()=>16054527,.03,.42);let n=eu(t,.5,[0,0,0],$l,!1);n.castShadow=!1,e.add(n)}function rp(e,t,n,r){let i=[],a=[],o=[],s={down:new Za(16773324,0,14,2),loft:new Za(16774880,0,12,2),wh:new Za(13219583,0,16,2)};return s.down.position.set(-1.5,2.45,-19.4),s.loft.position.set(0,Od.y+1.35,-19.6),s.wh.position.set(Ed.x,2.8,0),e.add(s.down,s.wh),n.house.upper.add(s.loft),Xf(e,t,i,o,r),Zf(e,a),Qf(n.house.upper,a),$f(e,t,n.warehouse,a),ep(e,a),tp(e),np(e),{lamps:s,fans:a,bulbs:i,night:o,spigots:r}}var ip={x:20,z:14},ap={w:5.6,d:4.9},op=[];for(let e of[-7.5,7.5])for(let t of[-6.5,-.5,5.5])op.push({x:e,z:t});var sp=[[-1.4,-1.2],[1.4,-1.2],[-1.4,1.2],[1.4,1.2]],cp=7/16,lp=[11962968,11370832,12555106,11041610],up=(e,t,n,r,i=0)=>e[Math.floor(B(t,n,r,i)*e.length)];function dp(e,t,n,r,i,a,o=0,s=[0,0,0],c,l=!0){let u=eu(t,n,s,c,l);return u.position.set(r,i,a),u.rotation.y=o,e.add(u),u}function fp(e,t,n,r=!0,i=64){let a=new rr;for(let e of tu(t,n,[0,0,0],void 0,r,i))a.add(e);return e.add(a),a}function pp(e,t,n,r,i,a,o,s,c=1,l=.04){let u=Math.ceil(Math.max(Math.abs(i-t),Math.abs(a-n),Math.abs(o-r)))+1;for(let d=0;d<=u;d++){let f=d/u,p=Math.round(t+(i-t)*f),m=Math.round(n+(a-n)*f),h=Math.round(r+(o-r)*f);e.box(p,m,h,p+c,m+c,h+c,s,l)}}var mp=8;function hp(e,t){let n=Math.floor((t+4e3)/6),r=n%2*6,i=Math.floor((e+r+4e3)/12),a=(e+r+4e3)%12,o=(t+4e3)%6,s=B(i,n,0,77);return{grout:a===0||o===0,color:s<.33?10132116:s<.66?9276808:10921373}}function gp(e,t,n,r=0){return e>n.x0-r&&e<n.x1+r&&t>n.z0-r&&t<n.z1+r}function _p(e){let t=new V,n=op.map(e=>({x0:e.x-ap.w/2,x1:e.x+ap.w/2,z0:e.z-ap.d/2,z1:e.z+ap.d/2})),r=[16184298,16110919,15764144,11832296,16744287,9423090];for(let e=-ip.x*mp-8;e<ip.x*mp+8;e++)for(let i=-(ip.z+1)*mp;i<(ip.z+1)*mp;i++){let a=(e+.5)/mp,o=(i+.5)/mp,s=n.some(e=>gp(a,o,e,.3+Yl(a*3,o*3,5)*.2)),c=1.3+(Yl(o*1.7,0,9)-.5)*.25,l=Math.abs(a)<c&&o>-9.8&&o<ip.z+.5,u=o>-9.9&&o<-7.6&&Math.abs(a)<4.2-(o>-8.4?(o+8.4)*-0:0),d=a>14.2&&a<ip.x+.8&&Math.abs(o)<1.55;if(a>12.95&&a<19.15&&o<-2.25&&o>-12.3){t.set(e,-1,i,3811868,.04);continue}if(l||u||d){let n=hp(e,i);n.grout?t.set(e,-1,i,5062707,.06):(t.set(e,-1,i,5917242,0),t.set(e,0,i,n.color,.05));continue}if(s){t.set(e,-1,i,up([8018492,7229492,8741954],e,0,i,3),.08),B(e,1,i,4)>.9&&t.set(e,0,i,6966322,.1);continue}let f=Math.floor((a+20)/2.5)&1,p=(Yl(a*.4,o*.4,2)-.5)*.14,m=f?7189572:6465083;m=ql(m,1+p),t.set(e,-1,i,m,.07);let h=B(e,2,i,8),g=Math.min(ip.x-Math.abs(a),ip.z-Math.abs(o)),_=Math.abs(a)<c+.5&&o>-9.8;if(h>.9-(g<2.5?.04:0)){let n=B(e,3,i,9)>.78,r=up([5808178,8111180,5148460,9359706],e,0,i,6);t.set(e,0,i,r,.05),n&&(t.set(e,1,i,ql(r,1.18),.04),B(e,6,i,10)>.45&&t.set(e+(B(e,7,i,11)>.5?1:-1),0,i,ql(r,.9),.04))}else if(h<.014+(g<3?.03:0)&&!_&&g>.6){let n=r[Math.floor(B(Math.floor(e/6),0,Math.floor(i/6),14)*r.length)];t.set(e,0,i,4164138,.04),t.set(e,1,i,4889136,.04),t.set(e,2,i,n,.03),B(e,5,i,15)>.5&&(t.set(e+1,2,i,n,.03),t.set(e-1,2,i,n,.03),t.set(e,2,i+1,n,.03),t.set(e,2,i-1,n,.03),t.set(e,3,i,16110919,0),t.del(e,2,i),t.set(e,2,i,16110919,0))}}return t}function vp(e,t,n,r,i){let a=[4164146,4889144,3504684,5679168];e.sphereShell(t,Math.round(r*.35),n,r,2.2,(e,t,n,r)=>t<0?null:i&&B(e,t,n,41)>.9?i:ql(up(a,e,t,n,42),.85+r*.3),.06,.8)}function yp(){let e=new V;for(let t=-176;t<176;t++)for(let n=-152;n<136;n++){let r=(t+.5)/4,i=(n+.5)/4;if(r>-ip.x-1&&r<ip.x+1&&i>-ip.z-1&&i<ip.z+1)continue;if(r>20.2&&r<39.2&&i>-7.6&&i<7.6||r>18.4&&r<24&&Math.abs(i)<1.8){let r=B(t,0,n,81)<.5?9275520:10130572;e.set(t,-1,n,6051663,.04),(t+n)%5!=0&&e.set(t,0,n,r,.05);continue}let a=(Yl(r*.18,i*.18,4)-.5)*.3;e.set(t,-1,n,ql(5082933,1+a),.09);let o=B(t,2,n,8);if(o>.9)e.set(t,0,n,ql(up([4161324,5939004,3501862],t,0,n,6),1),.06);else if(o<.015){let r=up([16184298,16110919,15764144,11832296],Math.floor(t/4),0,Math.floor(n/4),3);e.set(t,0,n,r,.03)}}return{m:e,S:4}}function bp(){let e=new V,t=Ul(2024),n=[];for(let e=-30;e<=20;e+=5.2)n.push([-25-t()*7,e+t()*2]),n.push([25+t()*7,e+t()*2]);for(let e=-32;e<=32;e+=7)n.push([e+t()*2,-30-t()*6]);for(let[r,i]of n){if(r>17.5&&r<48&&i>-12&&i<12)continue;let n=Math.round(r*4),a=Math.round(i*4),o=14+Math.floor(t()*8),s=[7030056,6044449,7950382];for(let t=0;t<o;t++){let r=t<3?3:2;for(let i=0;i<r;i++)for(let o=0;o<r;o++)e.set(n+i-+(r===3),t,a+o-+(r===3),up(s,i,t,o,4),.05)}let c=t()>.75?[8041792,9226316,6988344]:[4164146,5217850,3439147,5941826],l=4+Math.floor(t()*2);for(let r=0;r<l;r++){let i=r/l*Math.PI*2+t(),s=r===0?0:5+t()*4,u=8+t()*4,d=n+Math.round(Math.cos(i)*s),f=a+Math.round(Math.sin(i)*s),p=o+4+Math.round(t()*5)+(r===0?3:0);e.sphereShell(d,p,f,u,2.4,(e,t,n,r)=>{let i=(t-(o-2))/22;return ql(up(c,e,t,n,51),.78+i*.35+r*.08)},.07,.85)}}return e}function xp(){let e=new V,t=[[-15.2,13.55],[-11.6,13.45],[-4.2,13.6],[4.1,13.55],[11.5,13.5],[15.1,13.55],[-19.25,-7.2],[-19.35,-4.4],[-19.25,4.2],[-19.25,7.1],[19.25,-7.1],[19.3,-4.1],[19.25,4.1],[19.2,7]],n=[16184298,16110919,15764144,11832296,16750704];return t.forEach(([t,r],i)=>{let a=Math.round(t*mp),o=Math.round(r*mp);for(let t=0;t<4;t++){let n=Math.round((B(i,t,1,311)-.5)*10),r=Math.round((B(i,t,2,312)-.5)*10),s=up([10132364,11643537,7831408],i,t,0,313);e.box(a+n,0,o+r,a+n+2,1,o+r+2,s,.035)}for(let t=0;t<3;t++){let n=Math.round((B(i,t,3,314)-.5)*13),r=Math.round((B(i,t,4,315)-.5)*12),s=up([4164146,5874491,7978312],i,t,0,316);e.set(a+n,0,o+r,s,.04),e.set(a+n+(t-1),1+ +(t===1),o+r,ql(s,1.12),.03)}let s=a+Math.round((B(i,0,5,317)-.5)*8),c=o+Math.round((B(i,0,6,318)-.5)*8),l=n[i%n.length];e.set(s,0,c,4164146,.03),e.set(s,1,c,5874491,.03),e.set(s,2,c,l,.015),i%3==0&&(e.set(s+1,2,c,l,.015),e.set(s,2,c+1,l,.015))}),e}function Sp(e,t=!1){let n=Math.round(e*16),r=new V,i=-n/2,a=Math.floor(n/6),o=a*6,s=Math.round(i+(n-o)/2);for(let e of[4,14])r.box(Math.round(i),e,-2,Math.round(i)+n,e+3,0,(e,t,n)=>up([9068343,8279344,9726013],e,t,n,61),.04);for(let e=0;e<a;e++){let t=s+e*6,n=.9+B(e,0,0,62)*.2,i=B(e,1,0,63)<.12?-1:0,a=up(lp,e,0,0,64);for(let o=0;o<22+i;o++){let s=o>=21+i,c=o===0&&B(e,5,0,65)<.4;for(let e=+!!s;e<(s?3:4);e++){let i=ql(a,n*(e%2?.96:1.02)*(o>18?1.06:1));c&&(i=Jl(i,5933626,.55)),r.set(t+e,o,0,i,.035),r.set(t+e,o,1,ql(i,.95),.035)}}}let c=[],l=Math.max(1,Math.round(n/64));for(let e=0;e<=l;e++)c.push(Math.round(i+n*e/l));for(let e of c){let n=t&&(e===c[0]||e===c[c.length-1]),i=n?34:27;r.box(e-3,0,-3,e+3,i,3,(e,t,n)=>up([8016432,7293483,8608309],e,t,n,66),.04),r.box(e-4,i,-4,e+4,i+2,4,13146722,.04),r.box(e-2,i+2,-2,e+2,i+3,2,14199408,.03),n&&(r.box(e-2,i+3,-2,e+2,i+8,2,16765802,.02),r.box(e-3,i+8,-3,e+3,i+9,3,3815994,.02),r.box(e-1,i+9,-1,e+1,i+10,1,3815994,.02))}return r}function Cp(e){let t=(t,n,r,i,a)=>dp(e,Sp(t,a),1/16,n,0,r,i),n=2.4;t(ip.x-n,-(ip.x+n)/2,ip.z,0,!0),t(ip.x-n,(ip.x+n)/2,ip.z,0,!0);let r=Dd.half+.7;t(ip.x-r,-(ip.x+r)/2,-ip.z,Math.PI),t(ip.x-r,(ip.x+r)/2,-ip.z,Math.PI);let i=1.25,a=ip.z-i;t(a,ip.x,-(ip.z+i)/2,Math.PI/2),t(a,ip.x,(ip.z+i)/2,Math.PI/2),t(ip.z*2,-ip.x,0,-Math.PI/2)}function wp(e,t,n,r,i,a,o){let s=r/2;e.delBox(t-s,n,a-2,t+s,n+i,a),e.box(t-s,n,a-1,t+s,n+i,a,(e,t)=>{let r=(e+t)%11<2||(e+t)%11==5,a=(t-n)/i;return r?14019831:Jl(7317192,10275808,a)},.02);let c=15985884;e.box(t-s-1,n-1,a-1,t+s+1,n+1,a+1,c,.02),e.box(t-s-1,n+i-1,a-1,t+s+1,n+i+1,a+1,c,.02),e.box(t-s-1,n,a-1,t-s+1,n+i,a+1,c,.02),e.box(t+s-1,n,a-1,t+s+1,n+i,a+1,c,.02),e.box(t-1,n,a-1,t+1,n+i,a+1,c,.02),e.box(t-s,n+i/2-1,a-1,t+s,n+i/2+1,a+1,c,.02),e.box(t-s-3,n-3,a,t+s+3,n-1,a+3,13616816,.03),e.box(t-s-2,n+i+1,a,t+s+2,n+i+3,a+1,c,.02);for(let r of[-1,1]){let o=r<0?t-s-7:t+s+1;e.box(o,n-1,a,o+6,n+i+1,a+1,(e,t)=>t%3==0?3104570:4160074,.03)}}function Tp(){let e=new V,t=new V,n=new V,r=-Math.round(Dd.half*8),i=Math.round(Dd.half*8),a=-112,o=Math.round(Dd.back*8)-8,s=15128752;t.box(r,6,-114,i,96,a,(e,t,n)=>t%4==3?ql(s,.86):ql(s,1+(e>>4)%2*0),.025),t.box(r,0,-114,i,6,a,(e,t,n)=>up([9211536,8158848,10132636],e>>2,t>>1,n,91),.05),t.box(r-1,94,-114,i+1,96,-111,15985884,.02);for(let e of[-112,-78,-42,42,78,112])wp(t,e,24,18,26,a,s);t.box(r-1,58,-114,i+1,62,-111,15985884,.02);for(let e of[-112,-70,70,112])wp(t,e,68,16,18,a,s);t.delBox(-9,6,-114,9,42,a),t.box(-8,32,-113,8,40,a,(e,t)=>(e+t)%7<2?14019831:7317192,.02),t.box(-9,30,-113,9,32,-111,15985884,.02);let c=15985884;t.box(-11,6,-113,-9,44,-111,c,.02),t.box(9,6,-113,11,44,-111,c,.02),t.box(-11,42,-113,11,44,-111,c,.02);let l=-153,u=e=>{let t=99+Math.round((a-Math.max(e,l))*.62);return e>=l?t:t+Math.round((l-e)*.28)};for(let e=o;e<=-100;e++){let t=u(e),a=Math.floor((-100-e)/3);for(let o=r-6;o<=i+6;o++){let r=B(Math.floor((o+a%2*4)/8),a,0,95),i=r<.33?8208181:r<.66?9390651:7288623;(o+a%2*4)%8==0&&(i=ql(i,.82)),(-100-e)%3==0&&(i=ql(i,.86));for(let r=t-3;r<=t;r++)n.set(o,r,e,r===t?i:ql(i,.7),.02)}if(e>=o&&e<o+3)for(let a=r-6;a<=i+6;a++)n.set(a,t+1,e,11622982,.03)}for(let e=o+1;e<a;e++){let t=u(e)-4;for(let a of[r-3,i+2])for(let r=96;r<=t;r++)n.set(a,r,e,s,.03)}n.box(56,92,-146,72,136,-130,(e,t,n)=>t%4==0||(e+Math.floor(t/4)%2*3)%6==0?13352872:up([10505532,9650994,11557445],e,t,n,97),.03),n.box(54,136,-148,74,140,-128,9079434,.04),n.delBox(58,137,-146,70,140,-132),n.box(58,137,-146,70,138,-132,3026478,.02),e.box(-40,0,a,40,6,-88,(e,t,n)=>{if(t<5)return 9267778;let r=Math.floor((n+200)/4);return(n+200)%4==0?7229488:ql(up([12160606,12950120,11437140],r,0,0,98),1)},.03),e.box(-32,0,-88,32,4,-83,(e,t,n)=>(n+200)%5==0?7229488:11831639,.03),e.box(-32,0,-83,32,2,-78,(e,t,n)=>(n+200)%5==0?7229488:11437140,.03);let d=15854296,f=(t,n)=>{e.box(t-1,6,n-1,t+2,26,n+2,d,.02),e.box(t-2,26,n-2,t+3,27,n+3,16775400,.02)},p=t=>{f(t,-111),f(t,-89),e.box(t,21,-109,t+1,23,-89,d,.02),e.box(t,8,-109,t+1,10,-89,d,.02);for(let n=-106;n<-91;n+=6)e.box(t,10,n,t+1,21,n+1,d,.02)};p(-40),p(39);for(let[t,n]of[[-40,-33],[33,40]]){f(t===-40?-40:38,-89),e.box(t,21,-90,n,23,-89,d,.02),e.box(t,8,-90,n,10,-89,d,.02);for(let r=t+2;r<n;r+=6)e.box(r,10,-90,r+1,21,-89,d,.02)}f(-33,-89),f(32,-89);for(let t of[-46,-30,28,44])e.box(t,34,-108,t+3,36,-90,15985884,.02);e.box(-48,34,-108,-16,37,-105,7229488,.02),e.box(16,34,-108,48,37,-105,7229488,.02),e.box(-48,34,-93,-16,37,-90,7229488,.02),e.box(16,34,-93,48,37,-90,7229488,.02);for(let t of[-46,42])e.box(t,6,-92,t+4,36,-88,15985884,.02);let m=(e,t,n)=>{if(t<7)return up([9211536,8158848,10132636],e>>2,t,n>>2,91);if(t%5==4)return ql(s,.74);let r=Math.floor(e/10)+Math.floor(n/10)&1;return ql(s,r?1:.9)},h=(e,n,r,i)=>{t.box(e,0,n,r,140,i,(e,t,n)=>{let r=u(n)-4;return t>=r?null:t>56&&t<60||t>r-3?15985884:m(e,t,n)},.02)};h(-133,-188,-132,-111),h(132,-188,133,-111),h(-132,-188,132,-187);let g=[16184298,16110919,15764144,11832296,16744287],_=(e,n,r,i,a,o)=>{for(let o=n;o<r;o++)for(let n=i;n<i+a;n++){t.del(e,n,o);let r=(o+n)%8<2?14151416:Jl(7317192,12969204,(n-i)/a);t.set(e,n,o,r,.01)}let s=15985884;t.box(o,i-1,n-1,o+1,i+1,r+1,s,.02),t.box(o,i+a-1,n-1,o+1,i+a+1,r+1,s,.02),t.box(o,i,n-1,o+1,i+a,n+1,s,.02),t.box(o,i,r-1,o+1,i+a,r+1,s,.02),t.box(o,i-3,n,o+1,i-1,r,13616816,.02)},v=(e,n,r,i,a,o)=>{let s=n-(a>>1),c=n+(a>>1),l=o<0?e-1:e+1;if(_(e,s,c,r,i,l),t.box(l,r,s-4,l+1,r+i,s-1,3104570,.03),t.box(l,r,c+1,l+1,r+i,c+4,4160074,.03),r<40)for(let n=s;n<c;n+=2)t.set(l,r-2,n,4164138,.04),t.set(l,r-1,n,up(g,n,r,e,7),.02)};for(let[e,t]of[[-133,-1],[132,1]])v(e,-164,26,22,14,t),v(e,-136,26,22,14,t),v(e,-150,68,16,12,t);let y=e=>{let n=e-7,r=e+7,i=-188;for(let e=n;e<r;e++)for(let n=28;n<48;n++)t.del(e,n,i),t.set(e,n,i,(e+n)%8<2?14151416:9420764,.01);t.box(n-1,27,-189,r+1,29,i,15985884,.02),t.box(n-1,47,-189,r+1,49,i,15985884,.02),t.box(n-1,28,-189,n+1,48,i,15985884,.02),t.box(r-1,28,-189,r+1,48,i,15985884,.02)};y(-48),y(48);for(let e=8;e<78;e++){let n=-158+Math.round(Math.sin(e*.35)*2);t.set(-134,e,n,e%4==0?4889144:3107368,.05),t.set(134,e,n+6,e%4==0?4889144:3107368,.05)}return{shell:e,roof:n,facade:t}}function Ep(){let e=new V;e.box(-42,0,-36,42,7,36,(e,t,n)=>up([4928548,4140063,5652524],e,t,n,101),.06);for(let t=-42;t<42;t++)for(let n=-36;n<36;n++)B(t,9,n,102)>.93&&e.set(t,6,n,7033400,.08);let t=(t,n,r,i)=>{e.box(t,0,n,r,8,i,(e,t,n)=>{let r=t<4?0:1,i=.92+B(Math.floor(e/10),r,Math.floor(n/10),103)*.18;return ql(11039812,t===3||t===4?.7:i*(e%3==0&&n%3==0?.96:1))},.035)};t(-45,-39,45,-36),t(-45,36,45,39),t(-45,-36,-42,36),t(42,-36,45,36);for(let[t,n]of[[-46,-40],[42,-40],[-46,36],[42,36]])e.box(t,0,n,t+4,11,n+4,9067056,.04),e.box(t-1,11,n-1,t+5,12,n+5,13146722,.04);return e}function Dp(){let e=new V;for(let t=-14;t<=14;t++)for(let n=-14;n<=14;n++){let r=Math.hypot(t+.5,n+.5);if(r>14)continue;let i=r<4.2?4:r<14*.55?3:r<14*.8?2:1;for(let r=0;r<i;r++)e.set(t,r,n,up([7230008,6441008,8019008],t,r,n,111),.1)}return e}var Op={x:16,z:-9.5},kp=16,Ap={x0:-48,x1:48,z0:-40,z1:116,door0:-38,door1:-6,beams:[24,-4,-28],pegs:[-26,-14,12,24]},jp=e=>Op.x+e/kp,Mp=e=>Op.z+e/kp;function Np(){let e=new V,{x0:t,x1:n,z0:r,z1:i,door0:a,door1:o}=Ap,s=(e,t,n)=>(e+n+100)%8==0?7244894:up([8824180,8363630,9218682],e>>3,0,n,121),c=(e,t,n)=>(n+100)%8==0?7244894:8824180;e.box(t-1,0,r-1,n+1,3,i+1,(e,t,n)=>up([9211536,8158848],e>>2,0,n>>2,122),.05),e.box(t,3,i-2,n,54,i,s,.03),e.box(t,3,r,n,54,r+2,s,.03),e.box(t,3,r,t+2,54,i,c,.03),e.box(n-2,3,r,n,54,i,c,.03),e.delBox(a,3,i-3,o,44,i+1);let l=5059360;e.box(a-1,3,i-1,a+1,46,i+1,l,.02),e.box(o-1,3,i-1,o+1,46,i+1,l,.02),e.box(a-1,44,i-1,o+1,46,i+1,l,.02);let u=(t,n,r,i,a,o)=>{e.delBox(t,n,a,r,i,o),e.box(t,n,a,r,i,o,(e,t)=>(e+t)%9<2?14019831:7645382,.02);let s=15985884;e.box(t-1,n-1,a,r+1,n+1,o+1,s,.02),e.box(t-1,i-1,a,r+1,i+1,o+1,s,.02),e.box(t-1,n,a,t+1,i,o+1,s,.02),e.box(r-1,n,a,r+1,i,o+1,s,.02),e.box(t+(r-t)/2-1,n,a,t+(r-t)/2+1,i,o+1,s,.02),e.box(t,n+(i-n)/2-1,a,r,n+(i-n)/2+1,o+1,s,.02)};u(22,20,42,38,i-2,i),u(n-2,18,n,36,36,54),u(n-2,18,n,36,-22,-4),e.box(20,14,i,44,19,i+3,9067056,.04),e.box(21,17,i+1,43,19,i+2,4928548,.05);let d=[15764144,16110919,16184298,11832296];for(let t=22;t<43;t+=2)e.set(t,19,i+2,4164138,.05),e.set(t,20,i+2,up(d,t,0,0,124),.03),e.set(t,19,i+3,4889136,.05);e.box(t+2,0,r+2,n-2,1,i-2,3811868,.05);let f=new V,p=e=>54+Math.round((1-Math.min(1,Math.abs(e)/48))*22);for(let e=r-6;e<=i+6;e++){let t=Math.floor((e-r)/3);for(let n=-54;n<=54;n++){let r=p(n),i=B(Math.floor((e+t%2*4)/8),t,+(n<0),125)<.5?10177082:9059889;(e+t%2*4)%8==0&&(i=ql(i,.82)),Math.abs(n)%3==0&&(i=ql(i,.9));for(let t=r-2;t<=r;t++)f.set(n,t,e,t===r?i:ql(i,.7),.02)}if(Math.abs(e%28)<=1)for(let t=-54;t<=54;t++)f.set(t,p(t)+1,e,12081736,.03)}for(let e of[r,i-2])for(let r=t;r<n;r++){let t=p(r);for(let n=52;n<=t;n++)f.set(r,n,e,8824180,.03);f.set(r,t,e+1,7244894,.03)}return{shell:e,roof:f}}function Pp(e){let t=new V,n=e>0?1:-16,r=e>0?16:-1;t.box(n,3,-1,r,44,1,(e,t)=>Math.abs(e)%6==0?5913893:up([8017462,7162928],e,t,0,123),.03),pp(t,e>0?2:-2,8,0,e>0?13:-13,40,0,5059360,2);let i=e>0?12:-14;return t.box(i,20,1,i+2,27,2,15317566,.02),t}function Fp(){let e=new V,t=(e,t,n,r)=>r?(e+t+n)%3==0?15661302:12970980:null,n=(e,t,n)=>(e+t*2+n)%5==0?14131786:(e+n)%2==0?8372037:6068786;for(let r=0;r<=11;r++){let i=3.15;r<=1?i=2.7:r===8?i=2.45:r===9?i=1.85:r>=10&&(i=2.55);for(let a=-4;a<=4;a++)for(let o=-4;o<=4;o++){let s=Math.hypot(a,o);if(!(s>i)){if(r===0)e.set(a,r,o,7229492,.02);else if(r>=10)e.set(a,r,o,r===11?13214282:15189354,.02);else if(s>i-1.05)e.set(a,r,o,t(a,r,o,!0),.015);else if(r<8){let t=r===7&&s<1.2?14907424:n(a,r,o);e.set(a,r,o,t,.03)}}}}return e}function Ip(){let e=new V,t=9068086;for(let n of Ap.beams){e.box(-34,22,n-1,34,24,n+1,t,.03);for(let t of Ap.pegs)e.box(t,12,n-1,t+1,24,n+1,13220234,.02)}e.box(-40,8,50,-31,10,104,t,.03),e.box(31,8,50,40,10,104,t,.03);for(let n of[50,76,102])e.box(-42,0,n,-40,10,n+2,t,.03),e.box(40,0,n,42,10,n+2,t,.03);return e}function Lp(){let e=new V,t=new V,n=15790830;e.box(-48,0,-48,48,8,48,(e,t,n)=>up([10119740,9330741,10777663],e>>3,t>>2,n>>3,131),.04),e.delBox(-46,6,-46,46,8,46),e.box(-46,0,-46,46,6,46,4928548,.05);for(let t of[-48,45])for(let r of[-48,45])e.box(t,8,r,t+3,37,r+3,n,.01);let r=e=>36+Math.round((48-Math.abs(e))*.5);for(let t of[-48,45]){e.box(-48,35,t,48,37,t+3,n,.01),e.box(-48,8,t,48,10,t+3,n,.01);for(let r=-24;r<46;r+=24)e.box(r-1,8,t,r+1,36,t+3,n,.01)}for(let t of[-48,45]){e.box(t,35,-48,t+3,37,48,n,.01),e.box(t,8,-48,t+3,10,48,n,.01);for(let r=-24;r<46;r+=24)e.box(t,8,r-1,t+3,36,r+1,n,.01)}for(let t=-48;t<48;t+=16)for(let i=-48;i<48;i++){let a=r(i);e.box(t,a,i,t+2,a+2,i+1,n,.01)}e.box(-48,60,-2,48,62,2,n,.01);for(let t=-48;t<=48;t++){let i=r(t);for(let r of[-48,45])e.box(r,36,t,r+3,i,t+1,(e,t,r)=>t===i-1?n:null,.01)}e.delBox(-10,8,45,10,36,48),e.box(-11,8,45,-9,36,48,n,.01),e.box(9,8,45,11,36,48,n,.01),e.box(-11,33,45,11,35,48,n,.01),e.box(-1,8,45,1,33,48,n,.01);let i=(e,t)=>(e+t)%13<2?14874354:Jl(10936536,12447462,t*7%10/10),a=(e,t,n,r)=>(r+1e3)%24!=0&&(r+1001)%24!=0;for(let e of[-47,46])t.box(-45,10,e,45,35,e+1,(t,n)=>e===46&&Math.abs(t)<11?null:a(t,n,e,t+48)?i(t,n):null,0);for(let e of[-47,46])t.box(e,10,-45,e+1,35,45,(e,t,n)=>a(e,t,n,n+48)?i(n,t):null,0);for(let e=-48;e<48;e++){let n=r(e);for(let r=-45;r<45;r++)(r+48)%16<2||t.set(r,n-1,e,i(r,e),0)}for(let e of[-47,46])for(let n=-45;n<45;n++)if(!(e===46&&Math.abs(n)<11))for(let a=35;a<r(e)-0;a++)(e===-47||e===46)&&t.set(n,a,e,i(n,a),0);e.box(-36,14,-40,36,17,-22,10119740,.04);for(let t of[-34,33])e.box(t,0,-40,t+2,14,-22,9067056,.04);return{frame:e,glass:t}}function Rp(){let e=new V;for(let t=0;t<26;t++){let n=9+Math.sin(t/26*Math.PI)*1.4;for(let r=-12;r<=12;r++)for(let i=-12;i<=12;i++){let a=Math.hypot(r+.5,i+.5);if(a>n)continue;let o=Math.floor((Math.atan2(i,r)+Math.PI)/(Math.PI/6)),s=t===3||t===4||t===13||t===14||t===22||t===23;if(t===24&&a<n-1.5)e.set(r,t,i,B(r,t,i,5)>.8?10146028:6266828,.03);else if(t>=24&&a<n-1.5)continue;else(a>n-1.2||t===0)&&e.set(r,t,i,s?7238262:up([9067056,8015658,9724470],o,0,0,151),.04)}}return e}function zp(){let e=new V,t=(e,t,n)=>t%5==4?6111270:up([10119740,9068086,10777663],e>>3,t,n>>3,161);e.box(-24,0,-20,24,26,-17,t,.04),e.box(-24,0,-20,-21,26,20,t,.04),e.box(21,0,-20,24,26,20,t,.04),e.box(-24,0,17,-21,26,20,7227946,.04),e.box(21,0,17,24,26,20,7227946,.04);for(let t=-20;t<20;t++)for(let n=-16;n<18;n++){let r=Math.hypot(t/20,(n-1)/17);if(r>1)continue;let i=Math.round(6+(1-r)*14+B(t,0,n,162)*2);for(let r=0;r<i;r++)e.set(t,r,n,B(t,r,n,163)>.9?up([8106058,14271338,11553338],t,r,n,164):up([3023128,3811868,4863268],t,r,n,165),.06)}return e}function Bp(){let e=new V,t=4168280;e.box(-9,8,-14,9,10,10,t,.03);for(let n=-14;n<=12;n++){let r=Math.max(0,n-4)*.6,i=9+(n+14)*.15;for(let a of[-1,1])e.box(Math.round(a*i)-0,8,n,Math.round(a*i)+(a>0?2:-2),17+Math.round(r),n+1,t,.03)}e.box(-9,17,-14,9,18,-12,8375440,.02),e.box(-8,10,-12,8,15,8,(e,t,n)=>up([4928548,5652524,4140063],e,t,n,171),.07),pp(e,-7,8,-14,-6,14,-34,9067056,3),pp(e,6,8,-14,5,14,-34,9067056,3),e.box(-4,0,14,4,8,17,11580600,.03);for(let t=-7;t<=7;t++)for(let n=0;n<=14;n++){let r=Math.hypot(t+.5,n-6.5);r<7.5&&r>3.5&&e.set(t,n,15,r>6?2763306:3815996,.03)}e.box(-1,5,14,2,8,18,15317566,.02);for(let t of[-8,6])e.box(t,0,-22,t+3,8,-19,9067056,.04);return e}function Vp(){let e=new V,t=9068086;for(let n of[-40,38])for(let r of[-8,6])e.box(n,0,r,n+3,50,r+3,t,.04);for(let n of[-40,38])e.box(n,46,-8,n+3,49,9,t,.04),pp(e,n+1,12,-8,n+1,40,0,t,2);for(let t of[47,36])e.box(-40,t,-2,41,t+2,1,10119740,.04);let n=[[9225035,6134319],[6464326,4094508],[10321094,7098266],[11777612,8817713]],r=0;for(let t=-34;t<=34;t+=8,r++){let i=r%2?36:47,a=n[r%4],o=13+r%3*2;e.box(t,i-4,-1,t+1,i,0,13220234,.03);for(let n=0;n<o;n++){let r=n/o,s=1+Math.sin(Math.min(1,(1-r)*1.1+.05)*Math.PI)*3.2;for(let r=-4;r<=4;r++)for(let o=-4;o<=4;o++){if(Math.hypot(r,o)>s+(B(r+t,n,o,181)-.5))continue;let c=B(r+t,n,o,182)>.5?a[0]:a[1];e.set(t+r,i-4-n,o,B(r,n,o+t,183)>.9?15764014:c,.06)}}}return e}function Hp(){let e=new V;e.box(-4,0,-3,-1,3,4,3811868,.03),e.box(1,0,-3,4,3,4,3811868,.03),e.box(-4,3,-3,4,11,3,(e,t,n)=>up([3829685,4159680],e,t,n,191),.04),e.box(-3,6,3,3,11,5,16052454,.03),e.box(-2,4,3,2,6,5,15262938,.03),e.box(-3,3,3,3,4,4,2763306,.02),e.box(-1,8,5,1,10,7,15247211,.03),e.box(-5,6,-1,-4,10,1,3829685,.03),e.box(4,6,-1,5,10,1,3829685,.03),e.box(-3,11,-3,3,13,3,15247211,.02);for(let t=0;t<14;t++){let n=Math.max(0,4.5-t*.33);for(let r=-5;r<=5;r++)for(let i=-5;i<=5;i++)Math.hypot(r+.5,i+.5)<n+.5&&e.set(r,13+t,i,(r+t)%5==0?14240314:12859950,.04)}return e}var Up={M:[`10001`,`11011`,`10101`,`10001`,`10001`,`10001`,`10001`],O:[`01110`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],T:[`11111`,`00100`,`00100`,`00100`,`00100`,`00100`,`00100`],A:[`01110`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],Y:[`10001`,`10001`,`01010`,`00100`,`00100`,`00100`,`00100`],H:[`10001`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],E:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`11111`]," ":[`000`,`000`,`000`,`000`,`000`,`000`,`000`]};function Wp(){let e=new V,t=`MOTA MAYHEM`,n=0;for(let e of t)n+=Up[e][0].length+1;--n;let r=n+8,i=-Math.floor(r/2);for(let t of[i+3,i+r-6])e.box(t,0,-2,t+3,17,1,8016432,.04);e.box(i,7,1,i+r,18,4,(e,t)=>t===7||t===17||e===i||e===i+r-1?6111012:up([11962968,11370832,12555106],e>>3,t>>1,0,201),.03),e.box(i+1,8,4,i+r-1,17,5,3097632,.02);let a=i+4;for(let n of t){let t=Up[n],r=t[0].length;for(let n=0;n<7;n++)for(let i=0;i<r;i++)t[n][i]===`1`&&e.set(a+i,15-n,5,15984560,.03);a+=r+1}return e.box(i+r-8,18,1,i+r-5,19,4,6111012,0),e}function Gp(){let e=new V;e.box(-46,0,-42,46,1,42,3425371,.03),e.box(-40,1,-36,40,2,36,5398906,.025);for(let t=-34;t<=34;t+=17)for(let n=-28;n<=28;n+=14)e.box(t-5,2,n-4,t+5,3,n+4,2635597,.03),e.box(t-3,3,n-2,t+3,4,n+2,7439002,.02);e.box(-13,2,-13,13,5,13,2504011,.04),e.box(-10,5,-10,10,6,10,7439002,.02),e.box(-8,6,-8,8,7,8,7522520,.015),e.box(-5,7,-5,5,8,5,11792368,.01),e.box(-2,8,-31,2,47,-29,10204626,.025),e.box(-20,43,-31,20,47,-29,10204626,.025),e.box(-20,24,-31,-16,43,-29,10204626,.025),e.box(16,24,-31,20,43,-29,10204626,.025),e.box(-16,20,-31,-11,25,-29,9426911,.02),e.box(11,20,-31,16,25,-29,9426911,.02);for(let[t,n]of[[-34,-24],[34,-24],[-34,24],[34,24]])e.box(t-2,2,n-2,t+2,18,n+2,3425371,.03),e.box(t-4,18,n-4,t+4,22,n+4,9426911,.02),e.box(t-2,22,n-2,t+2,25,n+2,14153453,.01);let t=[10194920,8571360,14145791,7715236];for(let n=0;n<18;n++){let r=Math.round((B(n,1,2,744)-.5)*72),i=Math.round((B(n,3,4,745)-.5)*58);Math.abs(r)<15&&Math.abs(i)<15||(e.box(r-2,2,i-2,r+2,4,i+2,3562837,.03),e.set(r,5,i,t[n%t.length],.015),e.set(r+1,5,i,t[(n+1)%t.length],.015))}return e}function Kp(){let e=new rr,t=[];fp(e,_p(),1/mp,!1,64);let n=new V;for(let[e,t,r,i]of[[-15,-13.2,1.5,15764144],[-17.5,-12.8,1.2,16184298],[15.5,-13.2,1.6,11832296],[18,-12.6,1.2,16184298],[-12.2,-13.4,1.3,16110919],[12.2,-13.4,1.3,15764144],[-19,2,1.4,16184298],[19,0,1.3,15764144],[-19,9,1.5,11832296],[19,9,1.4,16110919],[-9,13,1.2,16184298],[9.5,13,1.3,15764144],[-17,12.5,1.5,16110919],[17.5,12.5,1.4,16184298]])vp(n,Math.round(e*mp),Math.round(t*mp),Math.round(r*mp),i);fp(e,n,1/mp,!0,64),fp(e,xp(),1/mp,!0,48);let r=yp();fp(e,r.m,1/r.S,!1,48);let i=new Ai(new ea(900,900),new pa({color:new R(4885043)}));i.rotation.x=-Math.PI/2,i.position.y=-.27,i.receiveShadow=!0,e.add(i),fp(e,bp(),.25,!0,40),Cp(e);let a=Tp();fp(e,a.shell,1/8,!0,64);let o=fp(e,a.roof,1/8,!0,64),s=fp(e,a.facade,1/8,!0,64),c=Ep(),l=Dp(),u=[];op.forEach((n,r)=>{dp(e,c,1/16,n.x,0,n.z),t.push({x0:n.x-ap.w/2+.05,x1:n.x+ap.w/2-.05,z0:n.z-ap.d/2+.05,z1:n.z+ap.d/2-.05}),sp.forEach(([t,i],a)=>{let o=new pa({vertexColors:!0}),s=dp(e,l,zu,n.x+t,cp,n.z+i,0,[0,0,0],o,!1);s.castShadow=!1,u.push({x:n.x+t,z:n.z+i,y:cp,bed:r,index:u.length,patch:s,patchMat:o})})});let d=Np(),f=1/kp;dp(e,d.shell,f,Op.x,0,Op.z);let p=dp(e,d.roof,f,Op.x,0,Op.z),m=Mp(Ap.z1)+.06,h=new rr;h.add(eu(Pp(1),f)),h.position.set(jp(Ap.door0),0,m),e.add(h);let g=new rr;g.add(eu(Pp(-1),f)),g.position.set(jp(Ap.door1),0,m),e.add(g),dp(e,Ip(),f,Op.x,0,Op.z);let _={};for(let e of Du)_[e]=xd(e).build(f);let v=_.bd,y=Fp().build(f),b=[];for(let e of Ap.beams)for(let t of Ap.pegs)b.push([jp(t+.5),Mp(e)]);let x=b.map(([t,n])=>{let r=new Ai(v,$l);return r.position.set(t,1.05,n),r.scale.setScalar(1.45),r.castShadow=!0,r.visible=!1,e.add(r),{x:t,z:n,y:0,mesh:r,item:null,nug:!0}}),S=[-3.35,-3.9,-4.45,-5,-5.55,-6.1],C=[13.95,18.05].flatMap(e=>S.map(t=>[e,t])).map(([t,n])=>{let r=new Ai(y,$l);return r.position.set(t,.62,n),r.scale.setScalar(1.4),r.castShadow=!0,r.visible=!1,e.add(r),{x:t,z:n,y:.62,mesh:r,item:null}});t.push({x0:12.85,x1:19.2,z0:-12.35,z1:-11.55},{x0:12.85,x1:13.42,z0:-12.2,z1:-2.15},{x0:18.62,x1:19.2,z0:-12.2,z1:-2.15},{x0:12.85,x1:13.55,z0:-2.55,z1:-2.15},{x0:15.72,x1:19.2,z0:-2.55,z1:-2.15});let w={roof:p,doorL:h,doorR:g,open:!1,door:{x:14.62,z:-1.62},doorBlocks:[{x0:13.68,x1:15.68,z0:-2.7,z1:-1.9}],hooks:x,cureJars:C,nugGeo:_,contains(e,t){return e>13.5&&e<18.5&&t<-2.6&&t>-11.5}},T=Lp();dp(e,T.frame,1/16,-16,0,-9);let E=new pa({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1}),D=dp(e,T.glass,1/16,-16,0,-9,0,[0,0,0],E,!1);D.renderOrder=2;let O={x0:-19.1,x1:-12.9,z0:-12.1,z1:-5.9},ee=[{x0:-19.1,x1:-18.45,z0:-12.1,z1:-5.9},{x0:-13.55,x1:-12.9,z0:-12.1,z1:-5.9},{x0:-18.45,x1:-13.55,z0:-12.1,z1:-11.5},{x0:-18.45,x1:-16.7,z0:-6.55,z1:-5.9},{x0:-15.3,x1:-13.55,z0:-6.55,z1:-5.9}],k=[],A=new V;A.box(-8,0,-8,8,5,8,10185276,.05),A.box(-9,5,-9,9,7,9,12683856,.04),A.box(-7,7,-7,7,8,7,4928548,.04);let te=Dp();for(let[t,n]of[[-17.55,-10],[-14.45,-10],[-17.55,-7.85],[-14.45,-7.85]]){dp(e,A,1/16,t,0,n);let r=new pa({vertexColors:!0}),i=dp(e,te,zu,t,8/16,n,0,[0,0,0],r,!1);i.castShadow=!1,k.push({x:t,z:n,y:8/16,bed:-1,index:u.length+k.length,patch:i,patchMat:r,where:`gh`})}u.push(...k);let ne=new V;ne.box(-12,0,-2,12,28,2,7357730,.04),ne.box(-15,24,-3,15,34,3,16768882,.04);let re={owned:!1,forSale:dp(e,ne,1/16,-13.75,0,-5.15),block:O,walls:ee,slots:k,door:{x:-16,z:-5.65},contains(e,t){return e>-18.65&&e<-13.35&&t>-11.55&&t<-6.25}};dp(e,Gp(),1/16,-16.5,0,6.5);let ie=new Za(9426911,0,8,2);ie.position.set(-16.5,1.25,6.5),e.add(ie),t.push({x0:-17.4,x1:-15.6,z0:5.6,z1:7.4},{x0:-17.9,x1:-17.3,z0:4.45,z1:4.85},{x0:-16.7,x1:-16.3,z0:4.45,z1:4.85},{x0:-15.7,x1:-15.1,z0:4.45,z1:4.85},{x0:-18.85,x1:-18.35,z0:4.75,z1:5.25},{x0:-14.65,x1:-14.15,z0:4.75,z1:5.25},{x0:-18.85,x1:-18.35,z0:7.75,z1:8.25},{x0:-14.65,x1:-14.15,z0:7.75,z1:8.25});let j=new V;j.box(-12,0,-2,12,28,2,3490908,.03),j.box(-17,24,-3,17,35,3,10148837,.02),j.set(-5,30,4,2635597,0),j.set(-3,32,4,2635597,0),j.set(-1,34,4,2635597,0);let ae=dp(e,j,1/16,-13.15,0,6.5);dp(e,Rp(),1/16,12,0,-6.2),t.push({x0:11.4,x1:12.6,z0:-6.8,z1:-5.6}),dp(e,zp(),1/16,16.5,0,11),t.push({x0:15,x1:18,z0:9.7,z1:12.4}),dp(e,Bp(),1/16,-12.6,0,3.8,-.5),t.push({x0:-13.6,x1:-11.6,z0:2.4,z1:5.4}),dp(e,Vp(),1/16,16.5,0,3.2),t.push({x0:13.8,x1:19.2,z0:2.4,z1:3.9}),dp(e,Hp(),.06,-11.5,0,9.5,.4),t.push({x0:-11.8,x1:-11.2,z0:9.2,z1:9.8}),dp(e,Wp(),3/32,-6.5,0,11.6),t.push({x0:-9.2,x1:-3.8,z0:11.4,z1:11.8});let oe=pf(e,t,{roof:o,facade:s}),se=rp(e,t,oe,op.map(e=>({x:e.x,z:e.z,bed:0}))),ce=new L(66/8,140/8,-139/8);function le(e,t,n=0){let r=oe.house;if(r.onStair(e,t,n))return r.stairHeight(t);if(n>2.2&&r.onLoft(e,t))return Od.y;let i=oe.warehouse;if(i.contains(e,t)||i.owned&&i.open&&Math.abs(t)<1.35&&e>22.2&&e<24.4)return 2/12;if(Math.abs(e)<Dd.half-.25&&t<=-14.15&&t>Dd.back-.15||Math.abs(e)<5&&t<-11&&t>-14.2)return 6/8;if(Math.abs(e)<4){if(t>=-11&&t<-10.375)return 4/8;if(t>=-10.375&&t<-9.75)return 2/8}return 0}return{group:e,colliders:t,slots:u,groundHeight:le,smokeAt:ce,shed:w,scenery:se,greenhouse:re,moonGarden:{owned:!1,forSale:ae,glow:ie,station:{x:-13.1,z:6.5}},...oe}}var qp=class{constructor(e,t=900){this.max=t,this.list=[];let n=new $i(1,1,1),r=new vi({color:16777215,depthWrite:!1});this.mesh=new Hi(n,r,t),this.mesh.instanceMatrix.setUsage(gt),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=3,this.mesh.setColorAt(0,new R(1,1,1)),e.add(this.mesh),this.tmp=new nr,this.col=new R}emit(e){this.list.length>=this.max&&this.list.shift(),this.list.push({x:e.x,y:e.y,z:e.z,vx:e.vx||0,vy:e.vy||0,vz:e.vz||0,g:e.g===void 0?-9:e.g,life:e.life||.6,age:0,size:e.size||.08,grow:e.grow||0,color:e.color===void 0?16777215:e.color,color2:e.color2===void 0?null:new R(e.color2),drag:e.drag||0})}update(e){let t=this.list,n=0;for(let r=0;r<t.length;r++){let i=t[r];if(i.age+=e,i.age>=i.life)continue;if(i.vy+=i.g*e,i.drag){let t=Math.max(0,1-i.drag*e);i.vx*=t,i.vz*=t}i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.y<.02&&i.g<0&&(i.y=.02,i.vy*=-.2,i.vx*=.6,i.vz*=.6);let a=i.age/i.life,o=i.size*(1+i.grow*a);a>.7&&(o*=Math.max(0,1-(a-.7)/.3)),this.tmp.position.set(i.x,i.y,i.z),this.tmp.scale.setScalar(o),this.tmp.updateMatrix(),this.mesh.setMatrixAt(n,this.tmp.matrix),this.col.set(i.color),i.color2&&this.col.lerp(i.color2,a),this.mesh.setColorAt(n,this.col),t[n]=i,n++}t.length=n,this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},Jp=[[16751150,2759184],[16316142,9079434],[16769098,3811856],[7321599,1845834]],Yp=class{constructor(e,t=7){this.items=[];for(let n=0;n<t;n++){let[t,r]=Jp[n%Jp.length],i=new V;i.box(0,0,-2,4,1,3,(e,n,i)=>e===3||i===-2?r:t,0),i.box(0,0,3,3,1,5,t,0);let a=[0,0,0],o=new V;o.box(-1,0,-3,1,1,4,2760728,0);let s=new rr,c=eu(o,.034,[0,0,0],void 0,!1);s.add(c);let l=new rr,u=new rr,d=eu(i,.034,a,void 0,!1);d.scale.x=-1,l.add(d),u.add(eu(i,.034,a,void 0,!1)),l.position.x=-.03,u.position.x=.03,s.add(l,u),e.add(s),this.items.push({g:s,wl:l,wr:u,cx:(Math.random()-.5)*30,cz:(Math.random()-.5)*20,r1:2+Math.random()*4,r2:1.5+Math.random()*3,s1:.15+Math.random()*.2,s2:.2+Math.random()*.2,ph:Math.random()*10,h:1+Math.random()*.8})}}pos(e,t){let n=t*e.s1+e.ph,r=t*e.s2+e.ph*2;return[e.cx+Math.cos(n)*e.r1+Math.sin(r*1.7)*.8,e.h+Math.sin(t*1.3+e.ph)*.35,e.cz+Math.sin(n*1.3)*e.r2+Math.cos(r)*.6]}update(e){for(let t of this.items){let[n,r,i]=this.pos(t,e),[a,,o]=this.pos(t,e+.05);t.g.position.set(n,r,i),t.g.rotation.y=Math.atan2(a-n,o-i);let s=Math.sin(e*22+t.ph)*.9+.3;t.wl.rotation.z=-s,t.wr.rotation.z=s}}},Xp=`mm-save-v1`,Zp=null;function Qp(e=Zp){return e?`${Xp}:${e}`:Xp}function $p(e){try{let t=JSON.parse(localStorage.getItem(e)||`null`);return!t||t.v!==1?null:t}catch{return null}}function em(){return $p(Qp())}function tm(e){Zp=e;let t=$p(Qp(e));if(t)return{note:`loaded`,save:t};let n=$p(Xp);if(n){try{localStorage.setItem(Qp(e),JSON.stringify(n)),localStorage.removeItem(Xp)}catch{}return{note:`claimed`,save:n}}return{note:`new`,save:null}}function nm(){Zp=null}function rm(e,t=!0){let n={v:1,...e};(t||!Number.isFinite(Number(n.savedAt)))&&(n.savedAt=Date.now());try{return localStorage.setItem(Qp(),JSON.stringify(n)),n}catch{return null}}var im=[`A`,`AA`,`AAA`,`AAAA`];function am(e={},t=null){let n=t&&!t.claimed&&im.includes(t.grade)?t.grade:null,r=n?Math.max(0,Math.floor(Number(t.count)||0)):0;return Object.fromEntries(im.map(t=>{let i=Math.max(0,Math.floor(Number(e?.[t])||0));return[t,i-(t===n?Math.min(i,r):0)]}))}function om(e){if(!e||e.sealed||!e.needsBurp||e.burped||e.missed)return null;let t=Number(e.cure);if(!Number.isFinite(t)||t<.4||t>=.62)return null;let n=t<=.46,r=im.indexOf(e.grade),i=n&&r>=0&&r<im.length-1;return i&&(e.grade=im[r+1]),e.burped=!0,e.needsBurp=!1,{perfect:n,upgraded:i}}var sm=`mm-sound-v1`,cm=null,lm=null;function um(){try{return localStorage.getItem(sm)!==`off`}catch{return!0}}function dm(e){try{localStorage.setItem(sm,e?`on`:`off`)}catch{}return!!e}function fm(){return typeof window>`u`||!window.AudioContext?null:(cm||(cm=new window.AudioContext,lm=cm.createGain(),lm.gain.value=.16,lm.connect(cm.destination)),cm.state===`suspended`&&cm.resume().catch(()=>{}),cm)}function pm({frequency:e,endFrequency:t=e,duration:n=.12,wave:r=`sine`,volume:i=.6,delay:a=0}){let o=fm();if(!o||!lm)return;let s=o.currentTime+a,c=o.createOscillator(),l=o.createGain();c.type=r,c.frequency.setValueAtTime(Math.max(35,e),s),c.frequency.exponentialRampToValueAtTime(Math.max(35,t),s+n),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),s+Math.min(.018,n*.2)),l.gain.exponentialRampToValueAtTime(1e-4,s+n),c.connect(l),l.connect(lm),c.start(s),c.stop(s+n+.015)}var mm={plant:[{frequency:420,endFrequency:620,duration:.09,wave:`triangle`},{frequency:680,endFrequency:840,duration:.07,delay:.07,volume:.42}],water:[{frequency:720,endFrequency:360,duration:.2,volume:.38},{frequency:510,endFrequency:300,duration:.16,wave:`triangle`,delay:.06,volume:.25}],harvest:[{frequency:520,endFrequency:760,duration:.13,wave:`triangle`},{frequency:780,endFrequency:1040,duration:.17,delay:.1}],success:[{frequency:620,duration:.1},{frequency:780,duration:.12,delay:.09},{frequency:980,duration:.18,delay:.19}],unlock:[{frequency:380,endFrequency:520,duration:.13,wave:`triangle`},{frequency:520,endFrequency:820,duration:.18,wave:`triangle`,delay:.12}],ui:[{frequency:420,endFrequency:470,duration:.045,volume:.25}],error:[{frequency:220,endFrequency:160,duration:.13,wave:`square`,volume:.22}]};function hm(e){if(!um()||!mm[e]||!fm())return!1;for(let t of mm[e])pm(t);return!0}var gm=[{id:`spring`,name:`SPRING`,description:`NEW GROWTH · BALANCED MOISTURE`,growth:1.08,water:.94,market:1.03,color:`#a9dc82`,events:[{name:`SEED EXCHANGE`,detail:`Local growers trade rare genetics. Seedling growth and buyer demand rise.`,growth:1.04,water:1,market:1.1},{name:`POLLINATOR BLOOM`,detail:`The yard is alive with pollinators. Outdoor growth gets a gentle boost.`,growth:1.1,water:1,market:1},{name:`RAIN GARDEN WEEK`,detail:`Soft spring weather keeps the soil damp for longer.`,growth:1.02,water:.88,market:1.02},{name:`GARDEN SHOWCASE`,detail:`The co-op is scouting standout cultivars. Buyer offers improve.`,growth:1,water:1,market:1.18}],weather:[{id:`clear`,label:`CLEAR`,detail:`BRIGHT SKIES`,waterUse:1,growth:1},{id:`cloudy`,label:`CLOUDY`,detail:`SOFT LIGHT · SLOWER DRYING`,waterUse:.92,growth:.98},{id:`showers`,label:`SHOWERS`,detail:`RAIN AT DAWN · SLOWER DRYING`,waterUse:.82,growth:1,rain:!0},{id:`breezy`,label:`BREEZY`,detail:`FRESH AIR · FASTER DRYING`,waterUse:1.1,growth:1.02},{id:`fog`,label:`MORNING FOG`,detail:`COOL AIR · LOW EVAPORATION`,waterUse:.86,growth:.96},{id:`showers`,label:`SHOWERS`,detail:`RAIN AT DAWN · SLOWER DRYING`,waterUse:.82,growth:1,rain:!0},{id:`warm`,label:`WARM`,detail:`MILD SUN · SOIL DRIES FASTER`,waterUse:1.15,growth:1.04}]},{id:`summer`,name:`SUMMER`,description:`LONG DAYS · HIGH WATER DEMAND`,growth:1.04,water:1.1,market:1.1,color:`#ffd27c`,events:[{name:`LONG DAYS`,detail:`Extended daylight helps outdoor plants push through growth.`,growth:1.08,water:1,market:1},{name:`HEAT WATCH`,detail:`The grower co-op warns of heat stress. Watch outdoor soil closely.`,growth:.96,water:1.08,market:1.02},{name:`NIGHT MARKET`,detail:`Late-night buyers pay a premium for carefully cured jars.`,growth:1,water:1,market:1.2},{name:`SOLSTICE FAIR`,detail:`The biggest summer gathering brings strong buyer demand.`,growth:1.04,water:1,market:1.16}],weather:[{id:`clear`,label:`CLEAR`,detail:`STRONG SUN · SOIL DRIES FASTER`,waterUse:1.12,growth:1.04},{id:`warm`,label:`HOT`,detail:`HIGH HEAT · CHECK OUTDOOR WATER`,waterUse:1.2,growth:1.02},{id:`heatwave`,label:`HEATWAVE`,detail:`INTENSE SUN · RAPID WATER LOSS`,waterUse:1.22,growth:.94},{id:`clear`,label:`CLEAR`,detail:`STRONG SUN · SOIL DRIES FASTER`,waterUse:1.12,growth:1.04},{id:`breezy`,label:`BREEZY`,detail:`WARM WIND · FASTER DRYING`,waterUse:1.18,growth:1},{id:`showers`,label:`SHOWERS`,detail:`SUMMER RAIN AT DAWN`,waterUse:.9,growth:1,rain:!0},{id:`haze`,label:`SUN HAZE`,detail:`DRY AIR · ELEVATED WATER USE`,waterUse:1.22,growth:.98}]},{id:`autumn`,name:`AUTUMN`,description:`COOLER NIGHTS · PREMIUM HARVEST SEASON`,growth:.97,water:.92,market:1.16,color:`#e9a36c`,events:[{name:`CULTIVAR SHOW`,detail:`Collectors are comparing genetics. Well-finished jars attract attention.`,growth:1,water:1,market:1.12},{name:`HARVEST RUSH`,detail:`The regional harvest brings a surge in buyer demand.`,growth:1,water:1,market:1.22},{name:`GOLDEN WEEK`,detail:`Mild days and cool nights create steady outdoor conditions.`,growth:1.04,water:.96,market:1.02},{name:`CO-OP SHOWCASE`,detail:`The grower co-op rewards consistent quality and careful curing.`,growth:1,water:1,market:1.16}],weather:[{id:`cloudy`,label:`OVERCAST`,detail:`COOL SKIES · SLOWER DRYING`,waterUse:.92,growth:.98},{id:`fog`,label:`VALLEY FOG`,detail:`COOL AIR · LOW EVAPORATION`,waterUse:.84,growth:.94},{id:`showers`,label:`SHOWERS`,detail:`AUTUMN RAIN AT DAWN`,waterUse:.78,growth:.98,rain:!0},{id:`breezy`,label:`BREEZY`,detail:`COOL WIND · FASTER DRYING`,waterUse:1.08,growth:.98},{id:`storm`,label:`THUNDERSTORMS`,detail:`HEAVY RAIN AT DAWN`,waterUse:.8,growth:.92,rain:!0},{id:`cloudy`,label:`OVERCAST`,detail:`COOL SKIES · SLOWER DRYING`,waterUse:.92,growth:.98},{id:`clear`,label:`CRISP CLEAR`,detail:`COOL NIGHTS · GENTLE SUN`,waterUse:.9,growth:1}]},{id:`winter`,name:`WINTER`,description:`SHORT DAYS · INDOOR GARDENS SHINE`,growth:.9,water:.78,market:1.12,color:`#a9c9f2`,events:[{name:`FROST WATCH`,detail:`Cold nights slow outdoor growth. Indoor rooms stay climate-controlled.`,growth:.94,water:.92,market:1.02},{name:`AURORA NIGHTS`,detail:`A rare sky show draws collectors to the night market.`,growth:1,water:1,market:1.1},{name:`QUIET SEASON`,detail:`Fewer buyers are in town. Patient growers plan their next cycle.`,growth:1,water:1,market:.96},{name:`NEW YEAR EXCHANGE`,detail:`The season closes with a premium genetics and harvest exchange.`,growth:1,water:1,market:1.24}],weather:[{id:`cloudy`,label:`COLD CLOUDS`,detail:`SHORT DAYS · SLOW OUTDOOR GROWTH`,waterUse:.8,growth:.94},{id:`frost`,label:`FROST`,detail:`COLD MORNING · PROTECT OUTDOOR PLOTS`,waterUse:.7,growth:.82},{id:`snow`,label:`LIGHT SNOW`,detail:`FROZEN AIR · VERY SLOW OUTDOOR GROWTH`,waterUse:.72,growth:.78},{id:`clear`,label:`WINTER SUN`,detail:`CLEAR SKIES · SHORT DAYLIGHT`,waterUse:.76,growth:.95},{id:`frost`,label:`FROST`,detail:`COLD MORNING · PROTECT OUTDOOR PLOTS`,waterUse:.7,growth:.82},{id:`storm`,label:`WINTER STORM`,detail:`WET WEATHER AT DAWN`,waterUse:.68,growth:.84,rain:!0},{id:`aurora`,label:`AURORA`,detail:`CLEAR NIGHT SKIES · RARE LIGHTS`,waterUse:.74,growth:.96}]}],_m=28,vm=_m*gm.length;function ym(e=1){let t=Number(e),n=Number.isFinite(t)?Math.max(1,Math.floor(t)):1,r=Math.floor((n-1)/vm)+1,i=(n-1)%vm+1,a=gm[Math.floor((i-1)/_m)],o=(i-1)%_m+1,s=Math.floor((o-1)/7)+1,c=a.events[s-1];return{id:a.id,name:a.name,description:a.description,color:a.color,year:r,dayOfYear:i,dayInSeason:o,week:s,dayInWeek:(o-1)%7+1,growth:a.growth*c.growth,water:a.water*c.water,market:a.market*c.market,event:{name:c.name,detail:c.detail}}}function bm(e=1){let t=ym(e),n=gm.find(e=>e.id===t.id),r=(t.dayOfYear-1)%7;return{...n.weather[r],waterUse:n.weather[r].waterUse*t.water,growth:n.weather[r].growth*t.growth}}function xm(e=1,t=3){let n=Number(e),r=Number.isFinite(n)?Math.max(1,Math.floor(n)):1,i=Number.isFinite(Number(t))?Math.max(1,Math.min(7,Math.floor(Number(t)))):3;return Array.from({length:i},(e,t)=>{let n=r+t,i=ym(n),a=bm(n);return{day:n,season:i.name,year:i.year,event:i.event.name,eventDetail:i.event.detail,market:i.market,weather:a}})}function Sm(e=1){return ym(e).market}var Cm=e((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bech32m=e.bech32=void 0;var t=`qpzry9x8gf2tvdw0s3jn54khce6mua7l`,n={};for(let e=0;e<32;e++){let r=t.charAt(e);n[r]=e}function r(e){let t=e>>25;return(e&33554431)<<5^-((t|0)&1)&996825010^-(t>>1&1)&642813549^-(t>>2&1)&513874426^-(t>>3&1)&1027748829^-(t>>4&1)&705979059}function i(e){let t=1;for(let n=0;n<e.length;++n){let i=e.charCodeAt(n);if(i<33||i>126)return`Invalid prefix (`+e+`)`;t=r(t)^i>>5}t=r(t);for(let n=0;n<e.length;++n){let i=e.charCodeAt(n);t=r(t)^i&31}return t}function a(e,t,n,r){let i=0,a=0,o=(1<<n)-1,s=[];for(let r=0;r<e.length;++r)for(i=i<<t|e[r],a+=t;a>=n;)a-=n,s.push(i>>a&o);if(r)a>0&&s.push(i<<n-a&o);else{if(a>=t)return`Excess padding`;if(i<<n-a&o)return`Non-zero padding`}return s}function o(e){return a(e,8,5,!0)}function s(e){let t=a(e,5,8,!1);if(Array.isArray(t))return t}function c(e){let t=a(e,5,8,!1);if(Array.isArray(t))return t;throw Error(t)}function l(e){let a;a=e===`bech32`?1:734539939;function l(e,n,o){if(o||=90,e.length+7+n.length>o)throw TypeError(`Exceeds length limit`);e=e.toLowerCase();let s=i(e);if(typeof s==`string`)throw Error(s);let c=e+`1`;for(let e=0;e<n.length;++e){let i=n[e];if(i>>5)throw Error(`Non 5-bit word`);s=r(s)^i,c+=t.charAt(i)}for(let e=0;e<6;++e)s=r(s);s^=a;for(let e=0;e<6;++e){let n=s>>(5-e)*5&31;c+=t.charAt(n)}return c}function u(e,t){if(t||=90,e.length<8)return e+` too short`;if(e.length>t)return`Exceeds length limit`;let o=e.toLowerCase(),s=e.toUpperCase();if(e!==o&&e!==s)return`Mixed-case string `+e;e=o;let c=e.lastIndexOf(`1`);if(c===-1)return`No separator character for `+e;if(c===0)return`Missing prefix for `+e;let l=e.slice(0,c),u=e.slice(c+1);if(u.length<6)return`Data too short`;let d=i(l);if(typeof d==`string`)return d;let f=[];for(let e=0;e<u.length;++e){let t=u.charAt(e),i=n[t];if(i===void 0)return`Unknown character `+t;d=r(d)^i,e+6>=u.length||f.push(i)}return d===a?{prefix:l,words:f}:`Invalid checksum for `+e}function d(e,t){let n=u(e,t);if(typeof n==`object`)return n}function f(e,t){let n=u(e,t);if(typeof n==`object`)return n;throw Error(n)}return{decodeUnsafe:d,decode:f,encode:l,toWords:o,fromWordsUnsafe:s,fromWords:c}}e.bech32=l(`bech32`),e.bech32m=l(`bech32m`)}))(),wm=Object.freeze,Tm=57896044618658097711785492504343953926634992332820282019728792003956564819949n,Em=7237005577332262213973186563042994240857116359379907606001950938285454250989n,Dm=37095705934669439343138083508754565189542113879843219016388785533085940283555n,Om=15112221349535400772501151409588531511454012693041857206046113283949847762202n,km=46316835694926478169428394003475163141307993866256225615783033603165251855960n,Am=Tm-1n,jm=wm({p:Tm,n:Em,h:8n,a:Am,d:Dm,Gx:Om,Gy:km}),Mm=32,Nm=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&e.BYTES_PER_ELEMENT===1,Pm=(e,t,n=``)=>{if(Nm(e)&&(t===void 0||e.length===t))return e;let r=Nm(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=(n?`"${n}" `:``)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)},Fm=(e,t=``,n)=>Uint8Array.from(Pm(e,n,t)),Im=(e,t)=>e.toString(16).padStart(t,`0`),Lm=e=>{let t=``;for(let n of Pm(e))t+=Im(n,2);return t},Rm=e=>{let t=`hex invalid`;if(typeof e!=`string`)throw TypeError(t);if(e.length%2||!/^[\da-f]*$/i.test(e))throw RangeError(t);let n=new Uint8Array(e.length/2);for(let t=0,r=0;t<n.length;t++,r+=2){let i=e.charCodeAt(r),a=e.charCodeAt(r+1);n[t]=((i&15)+(i>>6)*9)*16+(a&15)+(a>>6)*9}return n},zm=(...e)=>{let t=0;for(let n of e)t+=Pm(n).length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n},Bm=(e,t,n,r=`bad number: out of range`)=>{if(typeof e!=`bigint`)throw TypeError(r);if(t<=e&&e<n)return e;throw RangeError(r)},Vm=(e,t=Tm)=>(e%=t)>=0n?e:t+e,Hm=(1n<<255n)-1n,K=e=>{if(e<0n)throw RangeError(`negative coordinate`);let t=(e>>255n)*19n+(e&Hm);return t=(t>>255n)*19n+(t&Hm),t%Tm},Um=e=>Vm(e,Em),Wm=(e,t)=>{if(e===0n)throw Error(`invert: expected non-zero number`);if(t<=1n)throw Error(`invert: expected modulus > 1, got `+t);let n=Vm(e,t),r=t,i=0n,a=1n;for(;n!==0n;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==1n)throw Error(`invert: does not exist`);return Vm(i,t)},Gm=e=>{let t=lh[e];if(typeof t!=`function`)throw Error(`hashes.`+e+` not set`);return t},Km=(e,...t)=>Pm(Gm(e)(zm(...t)),64,`digest`),qm=e=>{if(e instanceof Ym)return e;throw TypeError(`Point expected`)},Jm=2n**256n,Ym=class e{static BASE;static ZERO;X;Y;Z;T;constructor(e,t,n,r){let i=Jm;this.X=Bm(e,0n,i),this.Y=Bm(t,0n,i),this.Z=Bm(n,1n,i),this.T=Bm(r,0n,i),wm(this)}static CURVE(){return jm}static fromAffine(t){return new e(t.x,t.y,1n,K(t.x*t.y))}static fromBytes(t,n=!1){let r=Fm(t,`point`,Mm),i=r[31];r[31]=i&-129;let a=$m(r);n||Bm(a,0n,Tm);let o=K(a*a),{isValid:s,value:c}=rh(Vm(o-1n),K(Dm*o+1n));if(!s)throw Error(`bad point: y not sqrt`);let l=!!(i&128);if(!n&&c===0n&&l)throw Error(`bad point: x==0, isLastByteOdd`);return l!==!!(c&1n)&&(c=Vm(-c)),new e(c,a,1n,K(c*a))}static fromHex(t,n){return e.fromBytes(Rm(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){let e=Am,t=Dm,n=this;if(n.is0())throw Error(`bad point: ZERO`);let{X:r,Y:i,Z:a,T:o}=n,s=K(r*r),c=K(i*i),l=K(a*a),u=K(l*l);if(K(l*(K(s*e)+c))!==Vm(u+K(t*K(s*c))))throw Error(`bad point: equation left != right (1)`);if(K(r*i)!==K(a*o))throw Error(`bad point: equation left != right (2)`);return this}equals(e){let{X:t,Y:n,Z:r}=this,{X:i,Y:a,Z:o}=qm(e);return K(t*o)===K(i*r)&&K(n*o)===K(a*r)}is0(){return this.equals(Zm)}negate(){return new e(Vm(-this.X),this.Y,this.Z,Vm(-this.T))}double(){let{X:t,Y:n,Z:r}=this,i=Am,a=K(t*t),o=K(n*n),s=K(2n*r*r),c=K(i*a),l=Vm(t+n),u=Vm(K(l*l)-a-o),d=Vm(c+o),f=Vm(d-s),p=Vm(c-o),m=K(u*f),h=K(d*p),g=K(u*p),_=K(f*d);return new e(m,h,_,g)}add(t){let{X:n,Y:r,Z:i,T:a}=this,{X:o,Y:s,Z:c,T:l}=qm(t),u=Am,d=Dm,f=K(n*o),p=K(r*s),m=K(K(a*d)*l),h=K(i*c),g=Vm(K(Vm(n+r)*Vm(o+s))-f-p),_=Vm(h-m),v=Vm(h+m),y=Vm(p-K(u*f)),b=K(g*_),x=K(v*y),S=K(g*y),C=K(_*v);return new e(b,x,C,S)}subtract(e){return this.add(qm(e).negate())}multiply(e,t=!0){if(!t&&e===0n||(Bm(e,1n,Em),!t&&this.is0()))return Zm;if(e===1n)return this;if(this.equals(Xm))return ph(e).p;let n=Zm,r=Xm,i=this;for(let a=0;t?a<256:e>0n;a++)e&1n?n=n.add(i):t&&(r=r.add(i)),i=i.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:n}=this;if(this.equals(Zm))return{x:0n,y:1n};let r=Wm(n,Tm);if(K(n*r)!==1n)throw Error(`invalid inverse`);return{x:K(e*r),y:K(t*r)}}toBytes(){let{x:e,y:t}=this.toAffine(),n=Qm(t);return n[31]|=e&1n?128:0,n}toHex(){return Lm(this.toBytes())}clearCofactor(){return this.multiply(8n,!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return this.multiply(Em/2n,!1).double().add(this).is0()}},Xm=new Ym(Om,km,1n,Vm(Om*km)),Zm=new Ym(0n,1n,1n,0n);Ym.BASE=Xm,Ym.ZERO=Zm;var Qm=e=>Rm(Im(Bm(e,0n,Jm),64)).reverse(),$m=e=>BigInt(`0x`+Lm(Uint8Array.from(Pm(e)).reverse())),eh=(e,t)=>{let n=e;for(;t-->0;)n=K(n*n);return n},th=e=>{let t=K(K(e*e)*e),n=K(eh(K(eh(t,2)*t),1)*e),r=K(eh(n,5)*n),i=K(eh(r,10)*r),a=K(eh(i,20)*i),o=K(eh(a,40)*a);return K(eh(K(eh(K(eh(K(eh(o,80)*o),80)*o),10)*r),2)*e)},nh=19681161376707505956807079304988542015446066515923890162744021073123829784752n,rh=(e,t)=>{let n=K(t*K(t*t)),r=K(e*K(n*th(K(e*K(K(n*n)*t))))),i=K(t*K(r*r)),a=r,o=K(r*nh),s=i===e,c=i===Vm(-e),l=i===Vm(-e*nh);return s&&(r=a),(c||l)&&(r=o),(Vm(r)&1n)==1n&&(r=Vm(-r)),{isValid:s||c,value:r}},ih=e=>Um($m(e)),ah=e=>e[1](Km(`sha512`,e[0])),oh=e=>{if(typeof e!=`object`||!e)throw TypeError(`expected valid options object`);return e.zip215??!0},sh=(e,t,n,r)=>{e=Pm(e,64,`signature`),t=Pm(t,void 0,`message`),n=Pm(n,Mm,`publicKey`);let i=oh(r),a=e.subarray(0,Mm),o=$m(e.subarray(Mm,64)),s,c,l,u=Uint8Array.of(),d=!1;try{s=Ym.fromBytes(n,i),c=Ym.fromBytes(a,i),l=Xm.multiply(o,!1),u=zm(a,n,t),d=!0}catch{}return[u,e=>{if(!d||!i&&s.isSmallOrder())return!1;let t=ih(e);return c.add(s.multiply(t,!1)).subtract(l).clearCofactor().is0()}]},ch=(e,t,n,r={})=>ah(sh(e,t,n,r)),lh={sha512Async:async e=>{let t=globalThis?.crypto?.subtle;if(!t)throw Error(`crypto.subtle must be defined, consider polyfill`);return new Uint8Array(await t.digest(`SHA-512`,zm(e)))},sha512:void 0},uh=()=>{let e=[],t=Xm,n;for(let r=0;r<33;r++){n=t,e.push(n);for(let r=1;r<128;r++)n=n.add(t),e.push(n);t=n.double()}return e},dh=void 0,fh=(e,t)=>{let n=t.negate();return e?n:t},ph=e=>{let t=dh||=uh(),n=Zm,r=Xm;for(let i=0;i<33;i++){let a=Number(e&255n);e>>=8n,a>128&&(a-=256,e+=1n);let o=i*128,s=o+Math.abs(a)-1,c=i%2!=0,l=a<0;a===0?r=r.add(fh(c,t[o])):n=n.add(fh(l,t[s]))}if(e!==0n)throw Error(`invalid wnaf`);return{p:n,f:r}},mh=BigInt(2**32-1),hh=BigInt(32);function gh(e,t=!1){return t?{h:Number(e&mh),l:Number(e>>hh&mh)}:{h:Number(e>>hh&mh)|0,l:Number(e&mh)|0}}function _h(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=gh(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}var vh=e=>e/2**32|0,yh=e=>e>>>0;function bh(e,t,n,r){let i=vh(n),a=yh(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}var xh=(e,t,n)=>e>>>n,Sh=(e,t,n)=>e<<32-n|t>>>n,Ch=(e,t,n)=>e>>>n|t<<32-n,wh=(e,t,n)=>e<<32-n|t>>>n,Th=(e,t,n)=>e<<64-n|t>>>n-32,Eh=(e,t,n)=>e>>>n-32|t<<64-n;function Dh(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}var Oh=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),kh=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,Ah=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),jh=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,Mh=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),Nh=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function Ph(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}var Fh=e=>e?`"${e}" `:``;function Ih(e,t=``){if(typeof e!=`number`)throw TypeError(Fh(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(Fh(t)+`expected integer >= 0, got `+e);return e}function Lh(e,t=``){if(typeof e!=`boolean`)throw TypeError(Fh(t)+`expected boolean, got type=`+typeof e);return e}function Rh(e,t,n=``){if(Ph(e)&&(t===void 0||e.length===t))return e;t!==void 0&&Ih(t,`length`);let r=Ph(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=Fh(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}var zh=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},Bh=(e,t)=>{zh(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function Vh(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function Hh(e,t){Rh(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function Uh(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function Wh(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function Gh(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}var Kh=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function qh(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}function Jh(e){for(let t=0;t<e.length;t++)e[t]=qh(e[t]);return e}var Yh=Kh?e=>e:Jh;function Xh(e,t,n=`opts`){return Bh(e,`defaults`),t!==void 0&&Bh(t,n),Object.assign(Object.create(null),e,t)}function Zh(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=Xh({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}var Qh=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])}),$h=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=Gh(this.buffer)}update(e){Vh(this),Rh(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=Gh(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){Vh(this),Hh(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),bh(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:Gh(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}},eg=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),tg=_h(`0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`).map(e=>BigInt(e))),ng=tg[0],rg=tg[1],ig=new Uint32Array(80),ag=new Uint32Array(80),og=class extends $h{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)ig[n]=e.getUint32(t),ag[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=ig[e-15]|0,n=ag[e-15]|0,r=Ch(t,n,1)^Ch(t,n,8)^xh(t,n,7),i=wh(t,n,1)^wh(t,n,8)^Sh(t,n,7),a=ig[e-2]|0,o=ag[e-2]|0,s=Ch(a,o,19)^Th(a,o,61)^xh(a,o,6),c=Ah(i,wh(a,o,19)^Eh(a,o,61)^Sh(a,o,6),ag[e-7],ag[e-16]),l=jh(c,r,s,ig[e-7],ig[e-16]);ig[e]=l|0,ag[e]=c|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=Ch(u,d,14)^Ch(u,d,18)^Th(u,d,41),v=wh(u,d,14)^wh(u,d,18)^Eh(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=Mh(_,v,b,rg[e],ag[e]),S=Nh(x,g,t,y,ng[e],ig[e]),C=x|0,w=Ch(n,r,28)^Th(n,r,34)^Th(n,r,39),T=wh(n,r,28)^Eh(n,r,34)^Eh(n,r,39),E=n&i^n&o^i&o,D=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=Dh(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let O=Oh(C,T,D);n=kh(O,S,w,E),r=O|0}({h:n,l:r}=Dh(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=Dh(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=Dh(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=Dh(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=Dh(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=Dh(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=Dh(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=Dh(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){Wh(ig,ag)}destroy(){this.destroyed=!0,Wh(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},sg=class extends og{constructor(){super(64,eg)}},cg=Zh(()=>new sg,Qh(3)),lg=BigInt(0),ug=BigInt(1),dg=BigInt(2),fg=BigInt(7),pg=BigInt(256),mg=BigInt(113),hg=[],gg=[],_g=[];for(let e=0,t=ug,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],hg.push(2*(5*r+n)),gg.push((e+1)*(e+2)/2%64);let i=lg;for(let e=0;e<7;e++)t=(t<<ug^(t>>fg)*mg)%pg,t&dg&&(i^=ug<<(ug<<BigInt(e))-ug);_g.push(i)}var vg=_h(_g,!0),yg=vg[0],bg=vg[1],xg=(e,t,n)=>e<<n|t>>>32-n,Sg=(e,t,n)=>t<<n|e>>>32-n,Cg=(e,t,n)=>t<<n-32|e>>>64-n,wg=(e,t,n)=>e<<n-32|t>>>64-n,Tg=(e,t,n)=>n>32?Cg(e,t,n):xg(e,t,n),Eg=(e,t,n)=>n>32?wg(e,t,n):Sg(e,t,n),Dg=new Uint32Array(10);function Og(e,t=24){if(!(e instanceof Uint32Array))throw TypeError(`"s" expected Uint32Array(50), got type=`+typeof e);if(e.length!==50)throw RangeError(`"s" expected Uint32Array(50), got length=`+e.length);if(Ih(t,`rounds`),t<1||t>24)throw Error(`"rounds" expected integer 1..24`);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)Dg[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,r=(t+2)%10,i=Dg[r],a=Dg[r+1],o=Tg(i,a,1)^Dg[n],s=Eg(i,a,1)^Dg[n+1];for(let n=0;n<50;n+=10)e[t+n]^=o,e[t+n+1]^=s}let t=e[2],r=e[3];for(let n=0;n<24;n++){let i=gg[n],a=Tg(t,r,i),o=Eg(t,r,i),s=hg[n];t=e[s],r=e[s+1],e[s]=a,e[s+1]=o}for(let t=0;t<50;t+=10){let n=e[t],r=e[t+1],i=e[t+2],a=e[t+3];e[t]^=~e[t+2]&e[t+4],e[t+1]^=~e[t+3]&e[t+5],e[t+2]^=~e[t+4]&e[t+6],e[t+3]^=~e[t+5]&e[t+7],e[t+4]^=~e[t+6]&e[t+8],e[t+5]^=~e[t+7]&e[t+9],e[t+6]^=~e[t+8]&n,e[t+7]^=~e[t+9]&r,e[t+8]^=~n&i,e[t+9]^=~r&a}e[0]^=yg[n],e[1]^=bg[n]}Wh(Dg)}var kg=class e{state;pos=0;posOut=0;finished=!1;state32;destroyed=!1;blockLen;suffix;outputLen;canXOF;enableXOF=!1;rounds;constructor(e,t,n,r=!1,i=24){if(Ih(e,`blockLen`),Ih(t,`suffix`),Ih(i,`rounds`),Lh(r,`enableXOF`),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=r,this.canXOF=r,this.rounds=i,Ih(n,`outputLen`),!(0<e&&e<200))throw Error(`"blockLen" must be 1..199`);this.state=new Uint8Array(200),this.state32=Uh(this.state)}clone(){return this._cloneInto()}keccak(){Yh(this.state32),Og(this.state32,this.rounds),Yh(this.state32),this.posOut=0,this.pos=0}update(e){Vh(this),Rh(e);let{blockLen:t,state:n,state32:r}=this,i=e.length,a=t%4==0&&e.byteOffset%4==0,o=t/4,s=a&&i>=t?Uh(e):void 0;for(let a=0;a<i;){if(s!==void 0&&this.pos===0&&a%4==0&&i-a>=t){for(let e=0,t=a/4;e<o;e++)r[e]^=s[t+e];a+=t,this.pos=t,this.keccak();continue}let c=Math.min(t-this.pos,i-a);for(let t=0;t<c;t++)n[this.pos++]^=e[a++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:n,blockLen:r}=this;e[n]^=t,t&128&&n===r-1&&this.keccak(),e[r-1]^=128,this.keccak()}writeInto(e){Vh(this,!1),Rh(e),this.finish();let t=this.state,{blockLen:n}=this;for(let r=0,i=e.length;r<i;){this.posOut>=n&&this.keccak();let a=Math.min(n-this.posOut,i-r);e.set(t.subarray(this.posOut,this.posOut+a),r),this.posOut+=a,r+=a}return e}xofInto(e){if(!this.enableXOF)throw Error(`XOF is not enabled`);return this.writeInto(e)}xof(e){return Ih(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Hh(e,this),this.finished)throw Error(`digest() was already called`);this.writeInto(e.length===this.outputLen?e:e.subarray(0,this.outputLen)),this.destroy()}digest(){let e=new Uint8Array(this.outputLen);return this.digestInto(e),e}destroy(){this.destroyed=!0,Wh(this.state)}_cloneInto(t){let{blockLen:n,suffix:r,outputLen:i,rounds:a,enableXOF:o}=this;return t||=new e(n,r,i,o,a),t.blockLen=n,t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=a,t.suffix=r,t.outputLen=i,t.enableXOF=o,t.canXOF=this.canXOF,t.destroyed=this.destroyed,t}},Ag=((e,t,n,r={})=>Zh(()=>new kg(t,e,n),r))(1,136,32);lh.sha512=cg;var jg=`Klever Signed Message:
`;function Mg(e){if(typeof e!=`string`||!e.startsWith(`klv1`))return null;let t;try{t=Cm.bech32.decode(e,120)}catch{return null}if(t.prefix!==`klv`)return null;let n=Uint8Array.from(Cm.bech32.fromWords(t.words));return n.length===32?n:null}function Ng(e){let t=String(e),n=new TextEncoder().encode(jg),r=new TextEncoder().encode(String(t.length)),i=new TextEncoder().encode(t),a=new Uint8Array(n.length+r.length+i.length);return a.set(n,0),a.set(r,n.length),a.set(i,n.length+r.length),Ag(a)}function Pg(e){let t=e==null?``:String(e).trim().replace(/^0x/i,``);if(/^[0-9a-fA-F]+$/.test(t)&&t.length%2==0){let e=new Uint8Array(t.length/2);for(let n=0;n<e.length;n++)e[n]=Number.parseInt(t.slice(n*2,n*2+2),16);return e}try{let e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);if(n.length===128){let e=String.fromCharCode(...n);if(/^[0-9a-fA-F]{128}$/.test(e)){let t=new Uint8Array(64);for(let n=0;n<t.length;n++)t[n]=Number.parseInt(e.slice(n*2,n*2+2),16);return t}}return n}catch{return new Uint8Array}}function Fg(e,t,n){let r=Mg(n),i=Pg(t);if(!r||i.length<64)return!1;let a=i.length===64?i:i.slice(0,64),o=Ng(e);try{return ch(a,o,r)?!0:ch(a,new TextEncoder().encode(String(e)),r)}catch{return!1}}var Ig=`mm-klever-session`,Lg=`mm-klever-prompt-lock`,Rg=9e4,zg=`https://chromewebstore.google.com/detail/klever-wallet/ifclboecfhkjbpmhgehodcjpciihhmif`,Bg=`https://play.google.com/store/apps/details?id=finance.klever.bitcoin.wallet`,Vg=`https://apps.apple.com/app/klever-wallet-bitcoin-crypto/id1615064243`,Hg=/^klv1[02-9ac-hj-np-z]{20,}$/,Ug=!1;function Wg(){let e=navigator.userAgent||``;return/Android|iPhone|iPad|iPod/i.test(e)?!0:navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function Gg(e){return!e||e.length<16?e||``:`${e.slice(0,8)}…${e.slice(-6)}`}function Kg(){let e=new URL(location.href);return e.searchParams.set(`klever`,`1`),e.hash=``,e.toString()}function qg(e,t){let n=Error(t);return n.code=e,n}function Jg(e,t=0,n=!0){if(e==null||t>8)return``;if(typeof e==`string`){let r=e.trim();if(r.startsWith(`{`)||r.startsWith(`[`))try{return Jg(JSON.parse(r),t+1,!1)}catch{return``}return n?r:``}if(ArrayBuffer.isView(e)&&e.byteLength===64)return[...new Uint8Array(e.buffer,e.byteOffset,e.byteLength)].map(e=>e.toString(16).padStart(2,`0`)).join(``);if(Array.isArray(e)){if(e.length===64&&e.every(e=>Number.isInteger(e)&&e>=0&&e<=255))return e.map(e=>e.toString(16).padStart(2,`0`)).join(``);for(let n of e){let e=Jg(n,t+1);if(e)return e}return``}if(typeof e!=`object`)return``;for(let n of[`signature`,`sig`,`hex`,`bytes`])if(e[n]!=null){let r=Jg(e[n],t+1,!0);if(r)return r}if(typeof e.toHex==`function`){let n=Jg(e.toHex(),t+1,!0);if(n)return n}for(let n of[`result`,`data`,`response`,`payload`])if(e[n]!=null){let r=Jg(e[n],t+1,!1);if(r)return r}return``}function Yg(){try{let e=Number(localStorage.getItem(Lg)||0);return Number.isFinite(e)&&Date.now()-e<Rg}catch{return!1}}function Xg(){try{localStorage.setItem(Lg,String(Date.now()))}catch{}}function Zg(){let e=`${Math.round(window.innerHeight)}px`;document.documentElement.style.setProperty(`--sign-lock-h`,e),document.documentElement.classList.add(`wallet-signing`)}function Qg(){document.documentElement.classList.remove(`wallet-signing`),document.documentElement.style.removeProperty(`--sign-lock-h`)}function $g(e){let t=window.kleverWallet,n=window.kleverWalletEvents;return typeof t?.handleTransaction!=`function`||typeof n?.createEvent!=`function`||typeof n.addEventListener!=`function`?null:new Promise((r,i)=>{let a=n.createEvent({chain:`KLEVER`,type:`SIGN_MESSAGE`,transactionInfo:{siteUrl:location.href,hostname:location.hostname},preTransaction:e});n.addEventListener(a.id,e=>{e?.data?.status===`ACCEPTED`?r(e):i(qg(`rejected`,`The Klever app closed the sign-in request.`))}),t.handleTransaction(JSON.stringify(a))})}async function e_(e,t){if(typeof e?.signMessage==`function`)return e.signMessage(t);let n=$g(t);if(n)return n;let r=window.__kleverBrowser__?.bridge;if(typeof r==`function`)return r({type:`SIGN_IN_MESSAGE`,network:`KLV`,chainId:`38`,data:t,url:location.href});throw qg(`unsupported`,`This Klever Wallet version does not support message signing. Please update Klever Wallet and try again.`)}function t_(e=2e3){let t=performance.now();return new Promise(n=>{let r=()=>{window.kleverWeb?n(window.kleverWeb):performance.now()-t>=e?n(null):setTimeout(r,80)};r()})}async function n_(e,t){try{window.kleverHub&&typeof window.kleverHub.initialize==`function`?await window.kleverHub.initialize():typeof e.initialize==`function`&&await e.initialize()}catch{}let n=typeof e.getWalletAddress==`function`?e.getWalletAddress():e.address;if(!Hg.test(n||``))throw qg(`no-account`,t?`Choose a Klever account in the app, then connect again.`:`Open the Klever extension, choose an account, then connect again.`);return n}async function r_(){let e=Wg(),t=await t_(e?p_()?4e3:900:2500);if(!t)throw qg(e?`mobile-app`:`extension`,e?`Open this page in the Klever Wallet app. The app will ask you to approve the connection.`:`Install the Klever Wallet extension, then press Connect wallet in Settings.`);return{kw:t,address:await n_(t,e),mobile:e}}function i_(e,t,n){return[`Mota Mayhem wants you to connect your Klever wallet.`,`This does not send any coins.`,`Address: ${e}`,`Nonce: ${t}`,`Issued: ${n}`].join(`
`)}async function a_(e,t,n,r=Wg()){if(Ug)throw qg(`busy`,`A Klever signature request is already in progress. Please wait for it to finish.`);Ug=!0,Zg();try{let i=i_(t,e,new Date().toISOString()),a;try{document.activeElement&&document.activeElement!==document.body&&document.activeElement.blur(),a=await e_(n,i)}catch(e){throw e?.code===`rejected`||e?.code===`unsupported`?e:qg(`rejected`,r?`The Klever app closed the connection request.`:`The Klever extension closed the connection request.`)}let o=Jg(a);if(!o)throw qg(`bad-signature`,`Klever returned an empty signature. Please try again.`);if(!Fg(i,o,t))throw qg(`bad-signature`,`The signature does not match this Klever address.`);return{address:t,message:i,signature:o,nonce:e}}finally{Qg(),Ug=!1}}async function o_(){let{kw:e,address:t,mobile:n}=await r_(),r=await a_([...crypto.getRandomValues(new Uint8Array(16))].map(e=>e.toString(16).padStart(2,`0`)).join(``),t,e,n),i={address:r.address,message:r.message,signature:r.signature,at:Date.now()};return s_(i),i}function s_(e){let t=JSON.stringify(e);for(let e of[sessionStorage,localStorage])try{e.setItem(Ig,t)}catch{}}function c_(){for(let e of[sessionStorage,localStorage])try{e.removeItem(Ig)}catch{}}function l_(){c_();for(let e of[sessionStorage,localStorage])try{e.removeItem(Lg)}catch{}}var u_=`finance.klever.bitcoin.wallet`;function d_(e,t){let n=encodeURIComponent(e);return t?`intent://dp/browser?link=${n}#Intent;scheme=klever-wallet;package=${u_};end`:`klever-wallet://dp/browser?link=${n}`}function f_(){let e=/Android/i.test(navigator.userAgent),t=/iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1;return!e&&!t?!1:(location.href=d_(Kg(),e),!0)}function p_(){if(window.kleverWeb||/Klever/i.test(navigator.userAgent||``))return!0;try{return new URLSearchParams(location.search).get(`klever`)===`1`}catch{return!1}}async function m_(){let e=Kg();try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`input`);t.value=e,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch{n=!1}return t.remove(),n}}function h_(e,t){let n=document.createElement(`button`);return n.type=`button`,n.className=`wallet-mini`,n.textContent=e,n.addEventListener(`click`,t),n}function g_(e,t){let n=document.createElement(`a`);return n.className=`wallet-mini`,n.href=e,n.target=`_blank`,n.rel=`noopener noreferrer`,n.textContent=t,n}function __(e,t){e.replaceChildren(),e.classList.remove(`hidden`);let n=document.createElement(`p`),r=document.createElement(`div`);r.className=`wallet-actions`,t===`mobile-app`?(n.textContent=`Connect wallet opens the Klever Wallet installed on this phone and asks you to approve the signature there. Install the app below only if it is not on this phone.`,Wg()&&r.append(h_(`Open Klever Wallet`,()=>f_())),r.append(h_(`Copy page link`,async e=>{let t=await m_();e.currentTarget.textContent=t?`Link copied`:`Copy failed`}),g_(Bg,`Google Play`),g_(Vg,`App Store`))):(n.textContent=`On a computer, the Klever Wallet extension asks you to approve the connection. Install it, refresh this page, and press Connect wallet again.`,r.append(g_(zg,`Install the Klever extension`))),e.append(n,r)}var q=e=>document.getElementById(e),v_=new URLSearchParams(location.search),y_=matchMedia(`(pointer: coarse)`).matches;function b_(e){try{return localStorage.getItem(e)}catch{return null}}function x_(e,t){try{return localStorage.setItem(e,String(t)),!0}catch{return!1}}var S_=new Pl({antialias:!0,powerPreference:`high-performance`,preserveDrawingBuffer:v_.has(`shot`)});S_.shadowMap.enabled=!0,S_.shadowMap.type=2,S_.toneMapping=0,q(`stage`).appendChild(S_.domElement);var C_=Number(v_.get(`px`))||Number(b_(`mm-pixel`))||0,w_=()=>Math.max(2,Math.round(k_().h/440)),T_=new rn,E_=null,D_=new da({uniforms:{tColor:{value:null},tDepth:{value:null},res:{value:new rn(1,1)},near:{value:1},far:{value:280},horizon:{value:new R(12051656)},zenith:{value:new R(8304868)}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
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
      col = mix(vec3(luma), col, 1.16);
      // A restrained warm lift and contrast curve make the voxel palette feel richer.
      col = (col - 0.5) * 1.06 + 0.5;
      col += vec3(0.006, 0.005, 0.002);
      col = mix(col, col * vec3(0.28, 0.32, 0.36), edge * 0.4);
      vec3 skyCol = mix(horizon, zenith, clamp(vUv.y * 1.2, 0.0, 1.0));
      col = mix(col, skyCol, smoothstep(far * 0.84, far * 0.995, d));
      vec2 q = vUv - 0.5;
      col *= 1.0 - dot(q, q) * 0.18;
      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }
  `,depthTest:!1,depthWrite:!1}),O_=new Ll(D_);function k_(){let e=window.visualViewport;return{w:Math.max(1,Math.floor(e?.width||window.innerWidth)),h:Math.max(1,Math.floor(e?.height||window.innerHeight))}}function A_(){let e=k_(),t=C_>1,n=t?1:Math.min(window.devicePixelRatio||1,y_?1.25:1.5),r=t?C_:1,i=Math.max(64,Math.floor(e.w/r)),a=Math.max(64,Math.floor(e.h/r));S_.setPixelRatio(n),S_.setSize(i,a,!1),S_.domElement.style.width=`100%`,S_.domElement.style.height=`100%`,S_.domElement.style.imageRendering=t?`pixelated`:`auto`,S_.getDrawingBufferSize(T_),E_&&E_.dispose();let o=t?E:ee;E_=new En(T_.x,T_.y,{minFilter:o,magFilter:o,samples:t?0:y_?2:4,depthTexture:new Xi(T_.x,T_.y)}),D_.uniforms.res.value.set(T_.x,T_.y),M_.aspect=i/a,M_.updateProjectionMatrix()}var j_=new fr;j_.background=new R(8304868),j_.fog=new dr(12051656,96,190);var M_=new Ya(33,16/9,1,280),N_=new La(15201535,8231506,1.43);j_.add(N_);var P_=new eo(16773327,2.35);P_.position.set(-18,34,14),P_.target.position.set(0,0,-3),P_.castShadow=!0,P_.shadow.mapSize.set(y_?1024:2048,y_?1024:2048),P_.shadow.radius=y_?2:3.5;var F_=P_.shadow.camera;F_.left=-36,F_.right=46,F_.top=26,F_.bottom=-34,F_.near=5,F_.far=110,P_.shadow.bias=-35e-5,P_.shadow.normalBias=.04,j_.add(P_,P_.target);var I_=new eo(13230847,.72);I_.position.set(22,14,-18),j_.add(I_);var J={mode:`loading`,seeds:Au(),clones:[],genetics:[],hybrids:[],nutrients:0,cubes:0,mota:0,jars:{AAAA:0,AAA:0,AA:0,A:0},grams:0,harvested:0,reputation:0,leagueWeek:1,leagueScore:0,leaguePaidWeek:0,wet:[],buyerOrder:null,look:null,strainPick:`bd`,returnMode:`title`},Y,L_,R_,z_,B_=[],V_=[],H_=[],U_=[],W_=new Map,G_=new rr,K_=6,q_=[7,11,15,15].map(e=>e*K_),J_=120,Y_=110,X_=84,Z_=96,Q_=60,$_=72,ev=96,tv=[8,10].map(e=>e*K_),nv=[`SPROUT`,`SEEDLING`,`VEGETATIVE`,`FLOWERING`,`READY`];function rv(e){return e<.34?{id:`clear`,label:`TRICHOMES CLEAR`,pick:!1}:e<.72?{id:`cloudy`,label:`TRICHOMES CLOUDY`,pick:!0}:e<.88?{id:`milky`,label:`CLOUDY + AMBER`,pick:!0}:{id:`amber`,label:`TRICHOMES AMBER`,pick:!1}}function iv(e=Y?.warehouse){if(!e?.bulbMat)return;let t=e.lights===`flower`,n=t?16762218:11832575;e.bulbMat.color.setHex(n);for(let t of e.barMats||[])t.color.setHex(n);e.vegScreen&&(e.vegScreen.visible=!t),e.flowerScreen&&(e.flowerScreen.visible=t);let r=Y?.scenery?.lamps?.wh;r&&r.color.setHex(n)}function av(e,t){let n=U(t).id,r=e+`:`+n,i=W_.get(r);return i||(i=yd(e,n).build(Vu,[0,0,0]),W_.set(r,i)),i}var ov=!1,sv=0,cv=0,lv=!1;function X(){ov=!0,lv=!0}function uv(){let e=Eu[J.strainPick]?J.strainPick:`bd`,t=U(e);return(J.seeds[e]|0)>0?{id:e,text:`PLANT ${t.name}`,ok:!0}:ju(J.seeds)>0?{id:e,text:`NO ${t.short} SEEDS`,ok:!1}:{id:e,text:`NO SEEDS`,ok:!1}}function dv(){let e=new V;for(let t of[-1,1])for(let n of[-1,1]){let r=t<0?-38:37,i=n<0?-38:37;for(let a=0;a<6;a++)e.set(t<0?-38+a:37-a,0,i,16770666,0),e.set(r,0,n<0?-38+a:37-a,16770666,0)}let t=eu(e,zu,[0,0,0],new vi({vertexColors:!0}),!1);G_.add(t),G_.visible=!1,j_.add(G_)}var fv=[];function pv(){let e=eu(Td(),.052,[0,0,0],new vi({vertexColors:!0,side:2}),!1),t=e.geometry,n=e.material,r=(e,r,i,a,o,s)=>{let c=new Ai(t,n);c.position.set(e,r,i),c.scale.setScalar(s),c.name=`mota-token`,c.castShadow=!1,c.receiveShadow=!1,a.add(c),fv.push({mesh:c,y:r,phase:fv.length*.7,show:o})};for(let e of Y.house.mothers)e.locked&&r(e.x,2.85,e.z,j_,()=>!Vy(e),1.05);let i=Y.house.trays.filter(e=>e.locked);i.length&&r(i.reduce((e,t)=>e+t.x,0)/i.length,2.7,i[0].z,j_,()=>!Hy(i[0]),1.05);let a=Y.house.veg.filter(e=>e.room===`west`);if(a.length){let e=a.reduce((e,t)=>e+t.x,0)/a.length,t=a.reduce((e,t)=>e+t.z,0)/a.length;r(e,a[0].y+1.65,t,Y.house.upper,()=>!Uy(a[0]),1.05)}let o=Y.house.veg.filter(e=>e.room===`center`);o.length&&r(0,o[0].y+1.65,-20.1,Y.house.upper,()=>!Y.house.vegCenter,1.05),op.forEach((e,t)=>r(e.x,2.55,e.z,j_,()=>!!B_[t*4]?.locked,1.45))}function mv(e){for(let t of fv){let n=t.show();t.mesh.visible=n,n&&(t.mesh.position.y=t.y+Math.sin(e*2.2+t.phase)*.12,t.mesh.lookAt(M_.position.x,t.mesh.position.y,M_.position.z),t.mesh.rotateZ(Math.sin(e*1.3+t.phase)*.16))}}var hv=new Set,gv=new Set,_v={x:0,y:0,run:!1,cam:0},vv=y_,yv=!1,bv=new Map,xv=null,Sv=0;function Cv(){return matchMedia(`(pointer: coarse)`).matches||matchMedia(`(max-width: 820px)`).matches}function wv(e){vv=e,document.body.classList.toggle(`touch-ui`,e),e&&J.mode===`play`?q(`touch`).classList.remove(`hidden`):e||q(`touch`).classList.add(`hidden`)}var Tv=null,Ev=!1,Dv=``,Ov=`off`,kv=!1,Av=!1;function jv(){return!!Tv?.address&&!Ev&&!kv}addEventListener(`keydown`,e=>{e.code===`Escape`&&!q(`weather-forecast`)?.classList.contains(`hidden`)?(q(`weather-forecast`).classList.add(`hidden`),q(`weather`)?.setAttribute(`aria-expanded`,`false`),q(`weather`)?.focus({preventScroll:!0}),e.preventDefault()):e.code===`Escape`&&bb?(Tb(!1),q(`tasks-toggle`)?.focus({preventScroll:!0}),e.preventDefault()):(e.code===`Space`||e.code===`Enter`)&&e.target?.closest?.(`button, a, input, textarea, select, [role="button"], [contenteditable="true"]`)||e.target?.closest?.(`input, textarea, select, [contenteditable="true"]`)||(e.code!==`Space`&&e.code!==`Enter`||J.mode!==`play`&&J.mode!==`shop`&&J.mode!==`dress`&&J.mode!==`settings`||zx(),(e.code===`Space`||e.code===`Enter`)&&J.mode===`title`&&Vx(),e.code===`KeyI`&&!e.repeat&&J.mode===`play`&&yS(q(`inv`).classList.contains(`hidden`)),[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),hv.has(e.code)||gv.add(e.code),hv.add(e.code))}),addEventListener(`keyup`,e=>hv.delete(e.code)),addEventListener(`blur`,()=>{hv.clear(),_v.x=0,_v.y=0,_v.run=!1,_v.cam=0}),addEventListener(`contextmenu`,e=>e.preventDefault());var Z={yaw:0,yawT:0,pitch:.85,dist:30,distT:28,target:new L(0,.8,-3),t:0};addEventListener(`wheel`,e=>{Z.distT=nn.clamp(Z.distT+Math.sign(e.deltaY)*2.2,12,72)},{passive:!0});function Mv(){let e=[...bv.values()];return e.length<2?0:Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}function Nv(e){e.cancelable&&e.preventDefault(),e.stopPropagation()}var Pv=0;addEventListener(`touchstart`,()=>{Pv=performance.now()},{passive:!0});function Fv(e){return e.touches||e.changedTouches||e.pointerType===`touch`?!1:performance.now()-Pv<800}function Iv(e,t){if(e.changedTouches)for(let n=0;n<e.changedTouches.length;n++){let r=e.changedTouches[n];t({id:`t`+r.identifier,x:r.clientX,y:r.clientY,touch:!0})}else e.pointerType!==`touch`&&t({id:`p`+(e.pointerId??1),x:e.clientX,y:e.clientY,touch:!1})}function Lv(e){return!!e?.closest?.(`#touch, #hud, #dress, #shop, #enterprise, #settings, #strains, .title-actions, .wallet-box, button, .tbtn`)}function Rv(e){e.button&&e.button!==0||Fv(e)||Lv(e.target)||(J.mode===`title`?((e.touches||e.pointerType===`touch`)&&wv(!0),Vx(),yv=!0):yv||J.mode!==`play`||Iv(e,e=>{e.touch&&wv(!0),bv.set(e.id,{x:e.x,y:e.y}),bv.size===1&&(xv={id:e.id,x:e.x,y:e.y,moved:!1}),bv.size===2&&(xv=null,Sv=Mv())}))}function zv(e){Iv(e,e=>{let t=bv.get(e.id);if(!t)return;if(t.x=e.x,t.y=e.y,bv.size>=2&&Sv){let e=Mv();Z.distT=nn.clamp(Z.distT+(Sv-e)*.055,12,72),Sv=e;return}if(!xv||xv.id!==e.id)return;let n=e.x-xv.x;!xv.moved&&Math.abs(n)<8||(xv.moved=!0,Z.yawT-=n*.006,xv.x=e.x,xv.y=e.y)})}function Bv(e){Iv(e,e=>{let t=xv&&xv.id===e.id?xv:null;bv.delete(e.id),t&&(xv=null,t.moved||Hb(e.x,e.y))}),bv.size<2&&(Sv=0),yv=!1}function Vv(){let e=e=>{J.mode===`title`&&(Lv(e.target)||e.target.closest?.(`#help`)||((e.touches||e.pointerType===`touch`)&&wv(!0),Vx(),yv=!0))};q(`title`).addEventListener(`touchstart`,e,{passive:!0}),q(`title`).addEventListener(`pointerdown`,t=>{t.pointerType===`touch`||Fv(t)||e(t)})}function Hv(e,{down:t,up:n,move:r}){e.addEventListener(`touchstart`,e=>{Nv(e),Iv(e,t)},{passive:!1}),r&&addEventListener(`touchmove`,e=>{let t=!1;Iv(e,n=>{r(n,e)&&(t=!0)}),t&&e.cancelable&&e.preventDefault()},{passive:!1});let i=e=>Iv(e,n);addEventListener(`touchend`,i),addEventListener(`touchcancel`,i),e.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`||Fv(e)||(Nv(e),Iv(e,t))}),r&&addEventListener(`pointermove`,e=>{e.pointerType===`touch`||Fv(e)||Iv(e,t=>r(t,e))});let a=e=>{e.pointerType===`touch`||Fv(e)||Iv(e,n)};addEventListener(`pointerup`,a),addEventListener(`pointercancel`,a)}q(`title`).addEventListener(`touchstart`,()=>wv(!0),{passive:!0}),S_.domElement.addEventListener(`pointerdown`,Rv),S_.domElement.addEventListener(`touchstart`,Rv,{passive:!0}),addEventListener(`pointermove`,zv),addEventListener(`touchmove`,zv,{passive:!0}),addEventListener(`pointerup`,Bv),addEventListener(`pointercancel`,Bv),addEventListener(`touchend`,Bv),addEventListener(`touchcancel`,Bv);function Uv(e,t,n){let r=null,i=!1;e.addEventListener(`keydown`,n=>{(n.code===`Space`||n.code===`Enter`)&&(n.preventDefault(),i||n.repeat||(i=!0,e.classList.add(`held`),t()))});let a=()=>{i&&(i=!1,e.classList.remove(`held`),n?.())};e.addEventListener(`keyup`,e=>{(e.code===`Space`||e.code===`Enter`)&&a()}),e.addEventListener(`blur`,a),Hv(e,{down:n=>{r??(r=n.id,e.classList.add(`held`),t())},up:t=>{r===t.id&&(r=null,e.classList.remove(`held`),n?.())}})}function Wv(){let e=q(`stick`),t=q(`stick-knob`),n=null,r=n=>{let r=e.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=n.x-i,s=n.y-a,c=Math.max(16,e.clientWidth*.5-8),l=Math.hypot(o,s)||1;l>c&&(o*=c/l,s*=c/l),t.style.transform=`translate(${o}px, ${s}px)`,_v.x=o/c,_v.y=s/c},i=()=>{n=null,_v.x=0,_v.y=0,t.style.transform=`translate(0,0)`};Hv(e,{down:e=>{n=e.id,r(e)},move:e=>e.id===n&&(r(e),!0),up:e=>{e.id===n&&i()}})}function Gv(e,t){e.addEventListener(`click`,e=>{e.detail===0&&t()}),Hv(e,{down:()=>t(),up:()=>{}})}function Kv(){Vv(),Wv(),Uv(q(`btn-run`),()=>_v.run=!0,()=>_v.run=!1),Uv(q(`btn-cam-l`),()=>_v.cam=-1,()=>_v.cam=0),Uv(q(`btn-cam-r`),()=>_v.cam=1,()=>_v.cam=0),Gv(q(`btn-act`),()=>{J.mode===`play`&&wy()}),Gv(q(`btn-help`),()=>Bb()),qv()}function qv(){let e=q(`prompt`),t=t=>{J.mode===`play`&&e.style.display!==`none`&&(Nv(t),wy())};e.addEventListener(`touchstart`,t,{passive:!1}),e.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`||Fv(e)||t(e)}),e.addEventListener(`click`,e=>{e.detail===0&&t(e)}),e.addEventListener(`keydown`,e=>{(e.code===`Space`||e.code===`Enter`)&&(e.preventDefault(),e.repeat||t(e))})}var Q={x:0,z:-6.3,y:0,facing:0,speed:0,cool:0,dust:0},Jv=.42;function Yv(){let e=Y.house,t=Y.warehouse,n=e.contains(Q.x,Q.z),r=e.open&&Math.abs(Q.x)<1.65&&Q.z<-12.4&&Q.z>-15.2;if(n||r){let e={x0:-19.1,x1:19.1,z0:Dd.walkZ,z1:13.3};return Q.z<-14.05&&(e.x0=-Dd.walkX,e.x1=Dd.walkX),e}if(Y.greenhouse.owned&&Y.greenhouse.contains(Q.x,Q.z))return{x0:-18.65,x1:-13.35,z0:-11.55,z1:-6.25};let i=t.contains(Q.x,Q.z),a=Math.abs(Q.z)<1.35&&Q.x>20.8&&Q.x<24.6;if(i||t.owned&&t.open&&a){let e={x0:23.72,x1:36.32,z0:-4.82,z1:4.82};return t.open&&Math.abs(Q.z)<1.35&&Q.x<24.4&&(e.x0=20.4,e.z0=-1.35,e.z1=1.35),e}return t.gateOpen&&Q.x>16.2&&Q.x<23.3&&Math.abs(Q.z)<1.8?{x0:-19.1,x1:22.95,z0:-1.3,z1:1.3}:{x0:-19.1,x1:19.1,z0:-13.4,z1:13.3}}function Xv(){let e=Yv();Q.x=nn.clamp(Q.x,e.x0,e.x1),Q.z=nn.clamp(Q.z,e.z0,e.z1);let t=Y.colliders.slice();Y.shed.open||t.push(...Y.shed.doorBlocks),Y.house.open||t.push(Y.house.doorBlock),Y.warehouse.gateOpen||t.push(Y.warehouse.gateBlock),Y.warehouse.owned&&!Y.warehouse.open&&t.push(Y.warehouse.doorBlock),Y.greenhouse.owned?t.push(...Y.greenhouse.walls):t.push(Y.greenhouse.block);let n=Q.y>1.85;for(let e=0;e<3;e++)for(let e of t){if(e.floor===1&&!n||e.floor===0&&n)continue;let t=nn.clamp(Q.x,e.x0,e.x1),r=nn.clamp(Q.z,e.z0,e.z1),i=Q.x-t,a=Q.z-r,o=i*i+a*a;if(o>=Jv*Jv)continue;if(o<1e-6){let t=Q.x-e.x0,n=e.x1-Q.x,r=Q.z-e.z0,i=e.z1-Q.z,a=Math.min(t,n,r,i);a===t?Q.x=e.x0-Jv:a===n?Q.x=e.x1+Jv:Q.z=a===r?e.z0-Jv:e.z1+Jv;continue}let s=Math.sqrt(o);i/=s,a/=s,Q.x=t+i*Jv,Q.z=r+a*Jv}}function Zv(e){let t=0,n=0;J.mode===`play`&&((hv.has(`KeyW`)||hv.has(`ArrowUp`))&&--n,(hv.has(`KeyS`)||hv.has(`ArrowDown`))&&(n+=1),(hv.has(`KeyA`)||hv.has(`ArrowLeft`))&&--t,(hv.has(`KeyD`)||hv.has(`ArrowRight`))&&(t+=1),(Math.abs(_v.x)>.12||Math.abs(_v.y)>.12)&&(t+=_v.x,n+=_v.y));let r=Math.hypot(t,n),i=!1;if(r>0&&Q.cool<=.35){t/=r,n/=r;let a=Math.sin(Z.yaw),o=Math.cos(Z.yaw),s=t*o+n*a,c=-t*a+n*o,l=hv.has(`ShiftLeft`)||hv.has(`ShiftRight`)||_v.run,u=l?8:5;Q.x+=s*u*e,Q.z+=c*u*e;let d=Math.atan2(s,c)-Q.facing;if(d=Math.atan2(Math.sin(d),Math.cos(d)),Q.facing+=d*Math.min(1,e*16),i=!0,Q.speed+=((l?1.5:1)-Q.speed)*Math.min(1,e*10),Q.dust-=e,Q.dust<=0){Q.dust=l?.07:.11;let e=Math.abs(Q.x)<1.4&&Q.z>-9;R_.emit({x:Q.x-s*.2,y:Q.y+.05,z:Q.z-c*.2,vx:-s*.6+(Math.random()-.5)*.6,vy:.9+Math.random()*.6,vz:-c*.6+(Math.random()-.5)*.6,life:.45,size:.07,color:e?12104354:7910986,g:-7})}}else Q.speed+=(0-Q.speed)*Math.min(1,e*10);Xv();let a=Y.groundHeight(Q.x,Q.z,Q.y),o=Q.y>2.2;if(Q.y+=(a-Q.y)*Math.min(1,e*18),Y.house){let e=Q.y>1.45||Y.house.onStair(Q.x,Q.z,Q.y);Y.house.upper.visible=e,e&&!o&&Q.y>2.2&&(Z.distT=Math.min(Math.max(Z.distT,16),22)),!e&&o&&(Z.distT=Math.max(Z.distT,24))}Q.cool=Math.max(0,Q.cool-e),L_.root.position.set(Q.x,Q.y,Q.z),L_.root.rotation.y=Q.facing,L_.update(e,i?Q.speed:0)}function Qv(){Y.slots.forEach((e,t)=>{let n={state:`empty`,stage:0,prog:0,water:0,waterVis:0,stress:0,age:0,strain:`bd`,pop:1,rot:t*2654435761%628/100,fromClone:!1,locked:!!(t/4|0)};B_.push(n);let r=new Ai(av(0,n.strain),$l);r.castShadow=!0,r.receiveShadow=!0,r.position.set(e.x,e.y+.1,e.z),r.rotation.y=n.rot,r.visible=!1,j_.add(r),cy(r),V_.push(r)})}function $v(){Y.warehouse.slots.forEach((e,t)=>{let n={state:`empty`,stage:0,prog:0,water:0,stress:0,age:0,strain:`bd`,pop:1,fromClone:!1};H_.push(n);let r=new Ai(av(0,n.strain),$l);r.castShadow=!0,r.receiveShadow=!0,r.position.set(e.x,e.y,e.z),r.visible=!1,j_.add(r),cy(r),U_.push(r)})}function ey(e,t){let n=B_[e];n.stage=t,n.prog=0,n.pop=0,n.holdVeg=!1,V_[e].geometry=av(t,n.strain),t>=4&&(n.state=`ripening`,n.ripe=0)}function ty(e,t,n){let r=e.stage+1;n&&r===3&&Y.warehouse.lights!==`flower`?(e.holdVeg=!0,e.prog=0,e.pop=0):(e.stage=r,e.prog=0,e.pop=0,e.holdVeg=!1,r>=4&&(e.state=`ripening`,e.ripe=0),t.geometry=av(e.stage,e.strain))}function ny(e){let t=Math.max(0,1-e.stress/Math.max(1,e.age)*1.6);return t>=.94?`AAAA`:t>=.8?`AAA`:t>=.55?`AA`:`A`}function ry(e){return e===`AAAA`?9:e===`AAA`?7:e===`AA`?5:3}var iy=520,ay=360,oy=[.82,1.36,1.78,2.26,3.28],sy={frostGeo:new na(.07,6,4),ringGeo:new ta(.18,.36,6),ringMat:new vi({color:15188602,side:2}),postGeo:new $i(.07,.58,.07),woodMat:new vi({color:9263666})};function cy(e){e.material=$l.clone();let t=new vi({color:16251886}),n=new rr;for(let[e,r]of[[.16,0],[-.12,.12],[.02,-.16],[.14,.14]]){let i=new Ai(sy.frostGeo,t);i.position.set(e,0,r),n.add(i)}n.visible=!1,e.add(n);let r=new Ai(sy.ringGeo,sy.ringMat);r.rotation.x=-Math.PI/2,r.visible=!1,j_.add(r);let i=[-.5,.5].map(e=>{let t=new Ai(sy.postGeo,sy.woodMat);return t.visible=!1,t.userData.ox=e,j_.add(t),t});e.userData.rig={frost:n,frostMat:t,ring:r,posts:i}}function ly(e){let t=e.userData.rig;if(t){t.frost.visible=!1,t.ring.visible=!1;for(let e of t.posts)e.visible=!1}}function uy(e){let t=e.water<=0,n=e.water<=.7,r=e.stress/Math.max(1,e.age);if(t)return 11569496;if(n)return 15192994;if(e.state===`ripening`){let t=rv(e.ripe||0);return t.id===`clear`?16056312:t.id===`cloudy`?16250090:t.id===`milky`?16773058:16760954}return r>.45?15783050:16777215}function dy(e,t,n,r,i,a){t.pop=Math.min(1,t.pop+i*2.4);let o=(.2+.8*(1+2.70158*(t.pop-1)**3+1.70158*(t.pop-1)**2))*(U(t.strain).stature||1),s=t.topped?1.5:1,c=t.topped?.6:1,l=t.lollipop?.76:1;e.scale.set(o*s*l,o*c,o*s*l);let u=Math.sin(r*1.4+n*1.7)*.022*(.4+t.stage*.3),d=t.water<=0,f=t.water<=.7;e.rotation.z=u+(t.trained?.62:0),e.rotation.x=Math.cos(r*1.1+n)*.015*(.4+t.stage*.3)+(d?.58:f?.24:0),e.material.color.setHex(uy(t));let p=e.userData.rig;if(!p)return;let m=oy[t.stage]||.8,h=t.state===`ripening`;if(p.frost.visible=h,h){let e=rv(t.ripe||0),i=e.id===`clear`?15269876:e.id===`cloudy`?16251886:e.id===`milky`?16769162:14708768;p.frostMat.color.setHex(i);let a=1+Math.sin(r*3+n)*.15;p.frost.position.set(0,m+.06,0),p.frost.scale.setScalar(a)}p.ring.visible=!!t.lollipop,p.ring.position.set(a.x,a.y+.08,a.z);let g=!!t.trained;for(let e of p.posts)e.visible=g,g&&e.position.set(a.x+e.userData.ox*.7,a.y+.29,a.z)}function fy(e,t,n,r=1){if(e.stage>=4)return!1;e.water=Math.max(0,e.water-t/Y_*r);let i=e.water<=0;return e.age+=t,i&&(e.stress+=t*(e.fromClone?.7:1)),e.prog+=t*(i?.35:1)*n/(q_[e.stage]*ku(e.strain,e.stage)),e.prog>=1}function py(e,t){let n=bm(Math.floor(rx)+1),r=n.waterUse,i=n.growth;B_.forEach((n,a)=>{let o=V_[a],s=Y.slots[a];if(s.where===`gh`&&!Y.greenhouse.owned)o.visible=!1;else if(n.state===`empty`?(o.visible=!1,ly(o)):(o.visible=!0,n.state===`ripening`?(n.water=Math.max(0,n.water-e/Y_*(s.where===`gh`?Y.moonGarden.owned?.68:.74:r)),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1)),n.ripe=Math.min(1.25,(n.ripe||0)+e*(s.where===`gh`?Y.moonGarden.owned?1.15:1.05:i)/(J_*ku(n.strain,4)))):n.state===`growing`&&fy(n,e,s.where===`gh`?Y.moonGarden.owned?1.15:1.05:i,s.where===`gh`?Y.moonGarden.owned?.68:.74:r)&&(ty(n,o,!1),my(s,n.state===`ripening`?16774048:12576906)),dy(o,n,a,t,e,s)),n.waterVis+=(Math.min(1,n.water*3)-n.waterVis)*Math.min(1,e*4),n.state===`empty`)s.patchMat.color.setRGB(1,1,1);else if(n.water<=0)s.patchMat.color.setHex(14135418);else{let e=n.waterVis;s.patchMat.color.setRGB(1-.62*e,1-.48*e,1-.22*e)}}),Y.warehouse.owned&&H_.forEach((n,r)=>{let i=U_[r],a=Y.warehouse.slots[r];if(n.state===`empty`)i.visible=!1,ly(i);else{i.visible=!0;let o=Y.warehouse.lights===`flower`;n.holdVeg?(n.water=Math.max(0,n.water-e/Y_),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1)),o&&(n.holdVeg=!1,n.stage=3,n.prog=0,n.pop=0,i.geometry=av(3,n.strain),my(a,14136575))):n.state===`ripening`?o&&(n.water=Math.max(0,n.water-e/Y_),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1)),n.ripe=Math.min(1.25,(n.ripe||0)+e/(J_/1.15*ku(n.strain,4)))):n.state===`growing`&&n.stage>=3&&!o?(n.water=Math.max(0,n.water-e/Y_),n.age+=e,n.water<=0&&(n.stress+=e*(n.fromClone?.7:1))):n.state===`growing`&&fy(n,e,1.35)&&(ty(n,i,!0),my(a,n.state===`ripening`?16774048:14136575)),dy(i,n,r+40,t,e,a)}})}function my(e,t){for(let n=0;n<14;n++)R_.emit({x:e.x,y:e.y+.4,z:e.z,vx:(Math.random()-.5)*2.4,vy:1.5+Math.random()*2,vz:(Math.random()-.5)*2.4,life:.8,size:.07,color:t,g:-6})}function hy(){let e=Q.x+Math.sin(Q.facing)*.95,t=Q.z+Math.cos(Q.facing)*.95,n=null,r=3.61,i=(i,a,o,s=0)=>{(o!==`wh`||Y.warehouse.owned&&(Y.warehouse.open||Y.warehouse.contains(Q.x,Q.z)))&&(o!==`gh`||Y.greenhouse.owned&&Y.greenhouse.contains(Q.x,Q.z))&&i.forEach((i,c)=>{let l=(i.x-e)**2+(i.z-t)**2;l<r&&(r=l,n={where:o,i:c+s,s:i,d:a[c],d2:(i.x-Q.x)**2+(i.z-Q.z)**2})})},a=Y.slots.filter(e=>e.where!==`gh`);return i(a,B_.slice(0,a.length),`yard`),i(Y.greenhouse.slots,B_.slice(a.length),`gh`,a.length),i(Y.warehouse.slots,H_,`wh`),n}var gy=[];function _y(e,t){gy.push({t:e,fn:t})}function $(e,t=``){let n=document.createElement(`div`);n.className=`toast `+t,n.textContent=e,q(`toasts`).appendChild(n),setTimeout(()=>n.remove(),2600)}function vy(e){return e.where===`wh`?U_[e.i]:V_[e.i]}function yy(e,t,n,r){let{d:i,i:a,where:o}=e;if(i.state=`growing`,i.fromClone=n,i.strain=U(r).id,i.water=n?.9:.6,i.stress=0,i.age=0,i.ripe=0,i.holdVeg=!1,i.topped=!1,i.trained=!1,i.lollipop=!1,o===`yard`)ey(a,t);else{i.stage=t,i.prog=0,i.pop=0;let n=vy(e);n.geometry=av(t,i.strain),n.visible=!0}X()}function by(e){return e.stage===2&&!e.topped?`top`:(e.stage===2||e.stage===3)&&e.topped&&!e.trained?`train`:e.stage===3&&!e.lollipop?`lolli`:``}function xy(e){return!!(e.topped&&e.trained&&e.lollipop)}function Sy(e){let t=Ty.indexOf(e);return Ty[Math.min(Ty.length-1,Math.max(0,t)+1)]||e}function Cy(e){let{d:t,s:n}=e,r=vy(e);if(e.where===`yard`&&t.locked)return Wy(n.bed);if(e.where===`gh`&&t.locked)return $(`UNLOCK THE GLASSHOUSE FIRST`);if(Math.hypot(n.x-Q.x,n.z-Q.z)>.3&&(Q.facing=Math.atan2(n.x-Q.x,n.z-Q.z)),t.state===`empty`){if(J.clones.length){let t=J.clones.shift();yy(e,2,!0,t.strain),$(`${U(t.strain).name} CLONE PLANTED`,`good`),hm(`plant`)}else{let t=uv();if(!t.ok)return $(ju(J.seeds)?t.text:`NO SEEDS OR CLONES`);J.seeds[t.id]--,yy(e,0,!1,t.id),$(`${U(t.id).name} PLANTED`,`good`),hm(`plant`)}Q.cool=.6,L_.playAction(`plant`),_y(.25,()=>{for(let e=0;e<12;e++)R_.emit({x:n.x,y:n.y+.15,z:n.z,vx:(Math.random()-.5)*2,vy:1+Math.random()*1.4,vz:(Math.random()-.5)*2,life:.55,size:.08,color:7229492,g:-9})}),Db()}else if((t.state===`growing`||t.state===`ripening`)&&t.water<=.7){t.water=1,Q.cool=.75,L_.playAction(`water`),hm(`water`),$(t.state===`ripening`?`FLOWER WATERED — RIPENING CONTINUES`:`PLANT WATERED`,`good`),X();for(let e=0;e<26;e++)_y(.2+e*.016,()=>R_.emit({x:Q.x+Math.sin(Q.facing)*.95+(Math.random()-.5)*.15,y:1.25,z:Q.z+Math.cos(Q.facing)*.95+(Math.random()-.5)*.15,vx:Math.sin(Q.facing)*.5,vy:-.5,vz:Math.cos(Q.facing)*.5,life:.5,size:.065,color:8308978,color2:4163272,g:-9}));return}else if(t.state===`growing`){if(t.holdVeg&&!by(t))return $(`FLIP THE WAREHOUSE TO 12/12`);let e=by(t);if(e===`top`){t.topped=!0,t.pop=.3,Q.cool=.45,L_.playAction(`harvest`),$(`TOPPED — THE CANOPY BUSHES OUT`,`good`),X();return}if(e===`train`){t.trained=!0,t.pop=.3,Q.cool=.45,L_.playAction(`plant`),$(`TRAINED — BRANCHES TIED OUT`,`good`),X();return}if(e===`lolli`){t.lollipop=!0,t.pop=.3,Q.cool=.45,L_.playAction(`harvest`),$(`LOLLIPOPPED — LOW GROWTH CLEARED`,`good`),X();return}if(t.stage>=3&&J.nutrients>0){J.nutrients--,t.water=1,t.stress=Math.max(0,t.stress-Math.max(1,t.age)*.15),Q.cool=.45,L_.playAction(`water`),$(`BLOOM FEED — FLOWER STRESS EASED`,`good`),Db(),X();return}return $(xy(t)?`CANOPY SET`:`PLANT IS WELL WATERED`)}else if(t.state===`ready`||t.state===`ripening`){let e=ny(t),i=[];if(xy(t)){let t=Sy(e);t!==e&&(e=t),i.push(`CANOPY`)}if(t.state===`ripening`){let n=rv(t.ripe||0),r=n.pick?e:Ey(e);i.push(n.label),r!==e&&(e=r,i.push(`GRADE DROPPED`))}let a=ry(e);if(J.wet.length>=12)return $(`HANDS ARE FULL — HANG IT IN THE SHED`);let o=U(t.strain).id;J.wet.push({grade:e,grams:a,strain:o,trimmed:!1}),J.harvested++,_x(e),cx({A:8,AA:12,AAA:18,AAAA:26}[e]||8,`${e} HARVEST`),J.seeds[o]=(J.seeds[o]|0)+1,J.genetics.includes(o)||(J.genetics.push(o),_y(.42,()=>$(`GENETICS READ: ${U(o).name}`,`good`))),X(),Q.cool=.7,L_.playAction(`harvest`),hm(`harvest`),t.state=`empty`,t.water=0,t.ripe=0,t.holdVeg=!1,t.fromClone=!1,t.topped=!1,t.trained=!1,t.lollipop=!1,r.visible=!1,_y(.3,()=>{for(let e=0;e<34;e++)R_.emit({x:n.x,y:n.y+.7,z:n.z,vx:(Math.random()-.5)*3,vy:2+Math.random()*3,vz:(Math.random()-.5)*3,life:1,size:.08,color:e%3==0?15764014:16055270,g:-5});let t=i.length?` — ${i.join(` — `)}`:``;$(`${U(o).short} ${e} WET FLOWER${t} — TRIM IT IN THE SHED`,i.includes(`GRADE DROPPED`)?``:`good`)}),Db()}}function wy(e=-1){if(J.mode!==`play`||Q.cool>0)return;let t=null;if(e&&typeof e==`object`?t=e:e>=0&&(t={where:`yard`,i:e,s:Y.slots[e],d:B_[e],d2:0}),!t){let e=ky(),n=hy();if(e&&(!n||e.d2+.12<n.d2))return Ay(e);t=n}if(!t)return Y.house.contains(Q.x,Q.z)?$(Q.y>2.2?`WALK TO A VEG POT, GENETICS LAB, OR COMPUTER`:`WALK TO A MOTHER, HYDRO TUBE, OR VEG POT`):Y.warehouse.contains(Q.x,Q.z)?$(`WALK TO A GROW POT`):$(`WALK TO A GARDEN BED`);Cy(t)}var Ty=[`A`,`AA`,`AAA`,`AAAA`];function Ey(e){let t=Ty.indexOf(e);return Ty[Math.max(0,t-1)]||e}function Dy(e){let t=Ey(e.grade);return!t||t===e.grade?!1:(e.grade=t,e.grams=ry(t),!0)}function Oy(){J.grams=Ty.reduce((e,t)=>e+(J.jars[t]|0)*ry(t),0)}function ky(){if(!Y?.shed)return null;let e=null,t=(t,n,r,i,a=1.55,o=.08,s=0)=>{let c=(t-Q.x)**2+(n-Q.z)**2;c>a*a||(!e||s>e.priority||s===e.priority&&c<e.d2)&&(e={kind:r,ref:i,x:t,z:n,d2:c,y:o,priority:s})},n=Y.shed;if(t(n.door.x,n.door.z,`shed-door`,null,1.9),n.open||n.contains(Q.x,Q.z)){for(let e of n.hooks)t(e.x,e.z+.4,`hook`,e,1.35);for(let e of n.cureJars){if(!e.item)continue;let n=!(!e.item.needsBurp||e.item.burped||e.item.missed),r=!!(e.item.missed&&(e.item.cure||0)<1)&&J.wet.length===0;t(e.x+.55,e.z,`jar`,e,n?2.4:r?2.2:1.2,.08,n?2:+!!r)}}let r=Y.house;if(t(0,-13.15,`house-door`,null,1.7),r.open||r.contains(Q.x,Q.z)){if(Q.y>2.2){t(r.computer.x,r.computer.z,`computer`,r.computer,1.45,Od.y+.08),t(r.breeder.x,r.breeder.z,`breeder`,r.breeder,1.55,Od.y+.08,1);for(let e of r.veg)e.up&&(e.room===`center`?t(e.x,e.z+.75,`breed-pot`,e,1.05,Od.y+.08):t(e.x,e.z+.75,`veg`,e,1.05,Od.y+.08))}else{for(let e of r.mothers)t(e.x,e.z+.85,`mother`,e,1.25);for(let e of r.trays)t(e.x,e.z+.55,`tray`,e,1.05);for(let e of r.veg)e.up||t(e.x,e.z+.75,`veg`,e,1.05)}}t(Y.stand.x,Y.stand.z,`stand`,null,1.55);for(let e of Y.scenery?.spigots||[])t(e.x,e.z,`spigot`,e,1.35);return t(Y.greenhouse.door.x,Y.greenhouse.door.z,`greenhouse`,null,1.9,.08,1),t(Y.moonGarden.station.x,Y.moonGarden.station.z,`moon-garden`,null,1.9,.08,2),Y.warehouse.owned?(t(23.05,0,`wh-door`,null,1.85,.08,2),(Y.warehouse.open||Y.warehouse.contains(Q.x,Q.z))&&t(Y.warehouse.lightSwitch.x,Y.warehouse.lightSwitch.z,`wh-lights`,null,1.55,1.15,1)):t(Y.lot.x,Y.lot.z,`lot`,null,1.7),e}function Ay(e){Q.facing=Math.atan2(e.x-Q.x,e.z-Q.z);let t=Y.shed,n=Y.house;if(e.kind===`shed-door`)return t.open=!t.open,Q.cool=.3,$(t.open?`SHED DOOR OPEN`:`SHED DOOR CLOSED`),!0;if(e.kind===`house-door`)return n.open=!n.open,Q.cool=.3,$(n.open?`HOUSE OPEN — MOTHERS, CLONES, VEG`:`HOUSE DOOR CLOSED`),!0;if(e.kind===`wh-door`)return Y.warehouse.owned?(Y.warehouse.open=!Y.warehouse.open,Q.cool=.3,$(Y.warehouse.open?`WAREHOUSE OPEN`:`WAREHOUSE CLOSED`),!0):$(`BUY THE WAREHOUSE FIRST`);if(e.kind===`mother`)return Ky(e.ref);if(e.kind===`tray`)return Jy(e.ref);if(e.kind===`veg`)return Xy(e.ref);if(e.kind===`breed-pot`)return Yy(e.ref);if(e.kind===`breeder`)return Y.house.vegCenter?jS():Gy(`vegCenter`,Cd.vegCenter,`BREEDING LAB`);if(e.kind===`computer`)return FS();if(e.kind===`stand`)return Zy();if(e.kind===`spigot`)return $y(e.ref);if(e.kind===`lot`)return nb();if(e.kind===`greenhouse`)return eb();if(e.kind===`moon-garden`)return tb();if(e.kind===`wh-lights`){let e=Y.warehouse;e.lights=e.lights===`flower`?`veg`:`flower`,iv(e),Q.cool=.35;let t=H_.some(e=>e.holdVeg);return $(e.lights===`flower`?t?`12/12 — FLOWER STARTED`:`12/12 — FLOWERING LIGHTS`:`18/6 — VEG LIGHTS`,`good`),X(),!0}if(e.kind===`hook`){let n=e.ref;if(!n.item){if(!J.wet.length)return $(`HARVEST A PLANT FIRST`),!0;let e=J.wet[0];return e.trimmed?(J.wet.shift(),n.item={...e,t:0,dry:0,hold:0,dropped:!1},n.mesh.geometry=Y.shed.nugGeo[U(e.strain).id]||Y.shed.nugGeo.bd,n.mesh.visible=!0,n.mesh.scale.setScalar(1),Q.cool=.4,L_.playAction(`harvest`),$(`${e.grade} HUNG TO DRY`),Db(),X(),!0):(e.trimmed=!0,Q.cool=.35,L_.playAction(`harvest`),$(`HAND TRIMMED — TRICHOMES KEPT`,`good`),X(),!0)}if(n.item.dry<1)return $(`STILL DRYING`),!0;let r=t.cureJars.find(e=>!e.item);return r?(r.item={grade:n.item.grade,grams:ry(n.item.grade),strain:n.item.strain||`bd`,t:0,cure:0,burped:!1,missed:!1,needsBurp:!1,sealed:!1},r.mesh.visible=!0,n.item=null,n.mesh.visible=!1,Q.cool=.4,$(`JARRED — BURP IT WHILE IT CURES`,`good`),Db(),X(),!0):($(`CURE JARS ARE FULL`),!0)}let r=e.ref.item;if(r?.needsBurp&&!r.burped&&!r.missed){let e=om(r);return e?(e.upgraded&&(r.grams=ry(r.grade)),Q.cool=.3,$(e.perfect?e.upgraded?`PERFECT BURP — GRADE BOOSTED TO ${r.grade}`:`PERFECT BURP — TOP GRADE LOCKED`:`BURPED — CURE STAYS ON TRACK`,`good`),X(),!0):$(`WAIT FOR THE BURP WINDOW`)}return r?.missed?$(`BURP MISSED — LET IT FINISH`):($(r?.burped?`CURING`:`WAIT TO BURP`),!0)}var jy=null;function My(e){return q(e)?.value?.trim()||``}function Ny(e,t=``){let n=q(`enterprise-status`);n&&(n.textContent=e,n.dataset.kind=t)}function Py(e,t){let n=q(e);n&&(n.value=t||``)}function Fy(e,t,n){if(e.replaceChildren(),!t.length)return;let r=document.createElement(`h3`);r.textContent=`SUBMISSION STATUS`,e.append(r);for(let r of t){let t=document.createElement(`p`);t.className=`enterprise-submission`;let i=document.createElement(`b`);i.textContent=r[n]||`Submission`;let a=document.createElement(`span`);a.textContent=String(r.status||`pending`).toUpperCase(),a.dataset.status=r.status||`pending`,t.append(i,a),e.append(t)}}async function Iy(){let e=q(`enterprise-application-form`),t=q(`enterprise-dashboard`),n=Tv?.provider===`email`&&!!Tv.address;if(jy=null,q(`enterprise-adult-check`).checked=v(),q(`btn-enterprise-adult`).textContent=v()?`DISABLE`:`ENABLE`,!n)e.hidden=!0,t.hidden=!0,Ny(`Sign in with an email account on the title screen to apply. Wallet-only accounts can add an email login first.`);else{Ny(`Loading your Enterprise account…`);try{let n=await p(Tv);jy=n;let r=n.application;if(!r||r.status===`rejected`){e.hidden=!1,t.hidden=!0,Ny(r?`Your application was declined. Update the details and submit it again.`:`Apply to join the Mota Mayhem genetics company network.`),r&&(Py(`enterprise-company`,r.company_name),Py(`enterprise-legal`,r.legal_name),Py(`enterprise-contact`,r.contact_name),Py(`enterprise-email`,r.business_email),Py(`enterprise-website`,r.website),Py(`enterprise-jurisdiction`,r.jurisdiction),Py(`enterprise-license`,r.license_reference),q(`enterprise-age-attest`).checked=!!r.age_attested,q(`enterprise-rights-attest`).checked=!!r.rights_attested,q(`enterprise-compliance-attest`).checked=!!r.compliance_attested);return}if(e.hidden=!0,t.hidden=!1,q(`enterprise-application-status`).textContent=r.status===`pending`?`APPLICATION PENDING — your company details are private while they are reviewed.`:`ENTERPRISE ACCOUNT APPROVED — continue building your public brand presence.`,r.status===`pending`){q(`enterprise-brand-form`).hidden=!0,q(`enterprise-brand-status`).textContent=`Your public company profile unlocks after the application is approved.`,q(`enterprise-strain-form`).hidden=!0,q(`enterprise-campaign-form`).hidden=!0,q(`enterprise-strain-list`).replaceChildren(),q(`enterprise-campaign-list`).replaceChildren();return}let i=n.brands[0]||null,a=n.brands.find(e=>e.status===`approved`)||null,o=q(`enterprise-brand-form`);o.hidden=!r||r.status!==`approved`||!!i&&i.status===`approved`,i&&i.status!==`approved`&&(o.hidden=!1,Py(`enterprise-brand-name`,i.display_name),Py(`enterprise-brand-slug`,i.slug),Py(`enterprise-brand-tagline`,i.tagline),Py(`enterprise-brand-about`,i.about),Py(`enterprise-brand-website`,i.website),Py(`enterprise-brand-logo`,i.logo_url),Py(`enterprise-brand-jurisdiction`,i.jurisdiction)),q(`enterprise-brand-status`).textContent=i?`BRAND PROFILE: ${String(i.status).toUpperCase()}`:`Create the public company profile that will appear in the real-world brand directory.`;let s=!!a;q(`enterprise-strain-form`).hidden=!s,q(`enterprise-campaign-form`).hidden=!s||!n.strains.some(e=>e.status===`approved`),Fy(q(`enterprise-strain-list`),n.strains,`name`);let c=q(`enterprise-campaign-strain`);c.replaceChildren();for(let e of n.strains.filter(e=>e.status===`approved`)){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.name,c.append(t)}Fy(q(`enterprise-campaign-list`),n.campaigns,`headline`),i&&i.status===`pending`&&(q(`enterprise-brand-status`).textContent=`BRAND PROFILE PENDING REVIEW — you can still update this submission; strain submissions unlock after approval.`),i&&i.status===`rejected`&&(q(`enterprise-brand-status`).textContent=`BRAND PROFILE DECLINED — update it and submit again.`)}catch(n){e.hidden=!0,t.hidden=!0,Ny(n.message||`Could not load your Enterprise account.`)}}}function Ly(){return J.mode===`shop`&&(J.mode=`enterprise`,q(`shop`).classList.add(`hidden`),q(`enterprise`).classList.remove(`hidden`),q(`touch`).classList.add(`hidden`),kb.style.display=`none`,Iy(),!0)}function Ry(){J.mode===`enterprise`&&(q(`enterprise`).classList.add(`hidden`),J.mode=`shop`,q(`shop`).classList.remove(`hidden`),PS())}async function zy(){let e=q(`enterprise-ad`);if(!e||!v())e?.classList.add(`hidden`);else try{let t=await g();if(!t.campaigns.length){e.classList.add(`hidden`);return}let n=Math.floor(Date.now()/864e5),r=t.campaigns[n%t.campaigns.length],i=r.brand,a=r.strain;q(`enterprise-ad-brand`).textContent=i.display_name,q(`enterprise-ad-headline`).textContent=r.headline,q(`enterprise-ad-message`).textContent=r.message,q(`enterprise-ad-strain`).textContent=a.name;let o=q(`enterprise-ad-link`);o.href=u(r.destination_url)||u(i.website)||`./brands.html`,e.classList.remove(`hidden`)}catch{e.classList.add(`hidden`)}}function By(){q(`btn-enterprise-open`).addEventListener(`click`,e=>{Nv(e),Ly()}),q(`btn-enterprise-close`).addEventListener(`click`,e=>{Nv(e),Ry()}),q(`btn-enterprise-adult`).addEventListener(`click`,e=>{Nv(e);let t=q(`enterprise-adult-check`).checked;if(!d(t))return Ny(`Browser storage is unavailable. Enable site storage before changing this preference.`);q(`btn-enterprise-adult`).textContent=t?`DISABLE`:`ENABLE`,t?zy():q(`enterprise-ad`).classList.add(`hidden`),Ny(t?`21+ self-attestation saved. Approved sponsored placements may now appear.`:`Sponsored brand content disabled.`)}),q(`enterprise-application-form`).addEventListener(`submit`,async e=>{if(e.preventDefault(),!Tv||!jy)return Ny(`Sign in again before submitting.`);let t=u(My(`enterprise-website`));if(!t)return Ny(`Company website must be a valid HTTPS URL.`);let n={company_name:My(`enterprise-company`),legal_name:My(`enterprise-legal`),contact_name:My(`enterprise-contact`),business_email:My(`enterprise-email`).toLowerCase(),website:t,jurisdiction:My(`enterprise-jurisdiction`),license_reference:My(`enterprise-license`),age_attested:q(`enterprise-age-attest`).checked,rights_attested:q(`enterprise-rights-attest`).checked,compliance_attested:q(`enterprise-compliance-attest`).checked};if(!n.age_attested||!n.rights_attested||!n.compliance_attested)return Ny(`Confirm all three statements before submitting.`);let i=e.submitter;i&&(i.disabled=!0),Ny(`Submitting your application…`);try{await r(Tv,jy.application,n),await Iy(),Ny(`APPLICATION SUBMITTED — status is pending manual review.`)}catch(e){Ny(e.message||`Application submission failed.`)}finally{i&&(i.disabled=!1)}}),q(`enterprise-brand-form`).addEventListener(`submit`,async e=>{e.preventDefault();let t=jy?.application;if(!t||t.status!==`approved`)return Ny(`Your Enterprise application must be approved first.`);let n=u(My(`enterprise-brand-website`)),r=u(My(`enterprise-brand-logo`),!0),i=y(My(`enterprise-brand-slug`)||My(`enterprise-brand-name`));if(!n||i.length<3||!My(`enterprise-brand-about`))return Ny(`Enter a valid HTTPS website, a 3+ character profile slug, and company details.`);let a=jy.brands[0]||null,o={slug:i,display_name:My(`enterprise-brand-name`),tagline:My(`enterprise-brand-tagline`),about:My(`enterprise-brand-about`),website:n,logo_url:r,jurisdiction:My(`enterprise-brand-jurisdiction`)},s=e.submitter;s&&(s.disabled=!0);try{await m(Tv,t,a,o),await Iy(),Ny(`BRAND PROFILE SUBMITTED — pending review.`)}catch(e){Ny(e.message||`Brand profile submission failed.`)}finally{s&&(s.disabled=!1)}}),q(`enterprise-strain-form`).addEventListener(`submit`,async e=>{e.preventDefault();let t=jy?.brands.find(e=>e.status===`approved`);if(!t)return Ny(`Your public brand profile must be approved first.`);let n=u(My(`enterprise-strain-image`),!0),r=u(My(`enterprise-strain-url`),!0);if(My(`enterprise-strain-image`)&&!n||My(`enterprise-strain-url`)&&!r)return Ny(`Optional strain links must be valid HTTPS URLs.`);let i={name:My(`enterprise-strain-name`),lineage:My(`enterprise-strain-lineage`),description:My(`enterprise-strain-description`),image_url:n,official_url:r},o=e.submitter;o&&(o.disabled=!0);try{await a(Tv,t,i),e.target.reset(),await Iy(),Ny(`STRAIN SUBMITTED — it will appear in-game and in the public directory only after approval.`)}catch(e){Ny(e.message||`Strain submission failed.`)}finally{o&&(o.disabled=!1)}}),q(`enterprise-campaign-form`).addEventListener(`submit`,async e=>{e.preventDefault();let t=jy?.brands.find(e=>e.status===`approved`),n=jy?.strains.find(e=>e.id===q(`enterprise-campaign-strain`).value&&e.status===`approved`),r=u(My(`enterprise-campaign-url`));if(!t||!n)return Ny(`Choose an approved company strain first.`);if(!r)return Ny(`Campaign destination must be an HTTPS company information page.`);let i={headline:My(`enterprise-campaign-headline`),message:My(`enterprise-campaign-message`),destination_url:r},a=e.submitter;a&&(a.disabled=!0);try{await _(Tv,t,n,i),e.target.reset(),await Iy(),Ny(`CAMPAIGN SUBMITTED — pending manual advertising and compliance review.`)}catch(e){Ny(e.message||`Campaign submission failed.`)}finally{a&&(a.disabled=!1)}}),q(`enterprise-ad-close`).addEventListener(`click`,()=>q(`enterprise-ad`).classList.add(`hidden`))}function Vy(e){return!e.locked||Y.house.mother2}function Hy(e){return!e.locked||Y.house.tube2}function Uy(e){return e.up?e.room===`west`?Y.house.vegWest:Y.house.vegCenter:!0}function Wy(e){return B_.some((t,n)=>(n/4|0)===e&&t.locked)?J.mota<Cd.bed?($(`NEED ${Cd.bed} MOTA — GROW BOX`),!0):(J.mota-=Cd.bed,B_.forEach((t,n)=>{(n/4|0)===e&&(t.locked=!1)}),Q.cool=.4,$(`GROW BOX UNLOCKED`,`good`),Db(),X(),!0):!1}function Gy(e,t,n){return Y.house[e]?!1:J.mota<t?($(`NEED ${t} MOTA — ${n}`),!0):(J.mota-=t,Y.house[e]=!0,Q.cool=.4,$(`${n} UNLOCKED`,`good`),Db(),X(),!0)}function Ky(e){if(!Vy(e))return Gy(`mother2`,Cd.mother,`2ND MOTHER`);if(!e.state||e.state===`empty`){let t=uv();return t.ok?(J.seeds[t.id]--,e.state=`growing`,e.strain=t.id,e.stage=0,e.prog=0,e.water=.9,e.cool=0,e.plant.visible=!0,e.plant.geometry=av(0,t.id),e.plant.scale.setScalar(.5),Q.cool=.55,L_.playAction(`plant`),$(`${U(t.id).name} PLANTED AS A MOTHER`,`good`),Db(),X(),!0):$(t.text)}if(e.state===`growing`){if(e.water<.45)return e.water=1,Q.cool=.55,L_.playAction(`water`),$(`MOTHER WATERED`),X(),!0;if(J.nutrients>0)return qy(e);let t=Math.round(((e.stage||0)+(e.prog||0))/2*100);return $(`${U(e.strain).short} MOTHER ${t}%`)}if(e.water<.4)return e.water=1,Q.cool=.55,L_.playAction(`water`),$(`MOTHER WATERED`),X(),!0;if(e.cool>0)return J.nutrients>0?qy(e):$(`MOTHER IS RESTING`);let t=Y.house.trays.find(e=>e.state===`empty`&&Hy(e));return t?(e.cool=8,e.water=Math.max(0,e.water-.22),t.state=`rooting`,t.t=0,t.strain=e.strain||`bd`,t.plant.geometry=av(0,t.strain),t.plant.visible=!0,t.plant.scale.setScalar(.48),Q.cool=.45,L_.playAction(`harvest`),$(`${U(t.strain).short} CUTTING IS IN THE TUBE`),X(),!0):$(Y.house.tube2?`HYDRO TUBES ARE FULL`:`TUBES ARE FULL — UNLOCK THE BACK ROW`)}function qy(e){return J.nutrients<=0?$(`BUY NUTRIENTS UPSTAIRS`):(J.nutrients--,e.water=1,e.cool=0,e.state===`growing`&&(e.prog=Math.min(.92,(e.prog||0)+.4)),Q.cool=.4,L_.playAction(`water`),$(`MOTHER FED`,`good`),Db(),X(),!0)}function Jy(e){if(!Hy(e))return Gy(`tube2`,Cd.tube,`BACK TUBE ROW`);if(e.state===`empty`)return $(`TAKE A CUTTING FROM A MOTHER`);if(e.state===`rooting`)return J.cubes>0?(J.cubes--,e.t+=$_*.65,Q.cool=.35,$(`ROOT CUBE IN THE TUBE`,`good`),Db(),X(),!0):J.nutrients>0?(J.nutrients--,e.t+=$_*.45,Q.cool=.35,$(`TUBE FED`,`good`),Db(),X(),!0):$(`STILL ROOTING`);if(e.state!==`ready`)return $(`STILL ROOTING`);let t=Y.house.veg.find(e=>e.room!==`center`&&e.state===`empty`&&Uy(e));return t?(t.state=`veg`,t.t=0,t.strain=e.strain||`bd`,t.plant.geometry=av(2,t.strain),t.plant.visible=!0,e.state=`empty`,e.t=0,e.strain=null,e.plant.visible=!1,Q.cool=.4,$(`${U(t.strain).short} MOVED INTO A VEG ROOM`),X(),!0):$(Y.house.vegWest?`VEG POTS ARE FULL — THE CENTER ROOM IS NOW THE BREEDING LAB`:`DOWNSTAIRS VEG IS FULL — UNLOCK WEST VEG UPSTAIRS`)}function Yy(e){if(!Uy(e))return J.mota<Cd.vegCenter?$(`NEED ${Cd.vegCenter} MOTA — BREEDING LAB`):Gy(`vegCenter`,Cd.vegCenter,`BREEDING LAB`);if(e.state===`empty`){let t=uv();return t.ok?U(t.id).hybrid?(J.seeds[t.id]=Math.max(0,(J.seeds[t.id]|0)-1),e.state=`growing`,e.t=0,e.strain=t.id,e.plant.geometry=av(2,t.id),e.plant.visible=!0,e.plant.scale.setScalar(.72),Q.cool=.45,L_.playAction(`plant`),$(`${U(t.id).short} SEED CROP STARTED`,`good`),Db(),X(),!0):$(`CROSS TWO GENETICS FIRST — THE LAB GROWS HYBRIDS`):$(t.text)}if(e.state===`growing`)return J.nutrients>0?(J.nutrients--,e.t=Math.min(ev,e.t+ev*.5),e.t>=ev?(e.state=`ready`,e.plant.scale.setScalar(.9*(U(e.strain).stature||1)),$(`SEED CROP READY — COLLECT THE SEEDS`,`good`)):$(`SEED CROP FED`,`good`),Db(),X(),!0):$(`${U(e.strain).short} SEED CROP ${Math.round(Math.min(1,e.t/ev)*100)}%`);let t=U(e.strain).id;return J.seeds[t]=(J.seeds[t]|0)+4,J.genetics.includes(t)||J.genetics.push(t),e.state=`empty`,e.t=0,e.strain=null,e.plant.visible=!1,Q.cool=.4,L_.playAction(`harvest`),$(`+4 ${U(t).short} SEEDS — GENETICS BANKED`,`good`),cx(16,`HYBRID SEED CROP`),J.strainPick=t,Db(),X(),!0}function Xy(e){if(e.room===`center`)return Yy(e);if(!Uy(e)){let t=e.room===`west`;return Gy(t?`vegWest`:`vegCenter`,t?Cd.vegWest:Cd.vegCenter,t?`WEST VEG ROOM`:`CENTER VEG ROOM`)}if(e.state===`empty`)return $(`BRING A ROOTED CLONE`);if(e.state===`veg`&&J.nutrients>0)return J.nutrients--,e.t+=ev*.5,Q.cool=.35,L_.playAction(`water`),$(`VEG POT FED`,`good`),Db(),X(),!0;if(e.state!==`ready`)return $(`STILL VEGETATING`);if(J.clones.length>=8)return $(`HANDS ARE FULL OF CLONES`);let t=e.strain||`bd`;return J.clones.push({strain:t}),e.state=`empty`,e.strain=null,e.plant.visible=!1,Q.cool=.35,$(`${U(t).name} CLONE READY TO PLANT`,`good`),Db(),X(),!0}function Zy(){Sx(),Q.cool=.35;let e=J.buyerOrder;if(e&&!e.claimed&&(J.jars[e.grade]|0)>=e.count){J.jars[e.grade]-=e.count,Oy();let t=Math.round(e.count*ry(e.grade)*wd[e.grade]*Sm(e.day))+e.bonus;return e.claimed=!0,J.mota+=t,cx(35,`BUYER ORDER`),$(`BUYER ORDER FILLED — +${t} MOTA (${e.bonus} BONUS)`,`good`),X(),Db(),!0}let t=am(J.jars,e),n=Ty.reduce((e,n)=>{let r=t[n]|0;return e.n+=r,e.mota+=Math.round(r*ry(n)*wd[n]*Sm(Math.floor(rx)+1)),e},{n:0,mota:0});if(n.n>0){for(let e of Ty)J.jars[e]=Math.max(0,(J.jars[e]|0)-(t[e]|0));Oy(),J.mota+=n.mota;let r=e&&!e.claimed?Math.min(J.jars[e.grade]|0,e.count|0):0,i=r?` · ${r}/${e.count} ${e.grade} SAVED FOR ORDER`:``;return $(`+${n.mota} MOTA${i}`,`good`),X(),Db(),!0}if(e&&!e.claimed&&(J.jars[e.grade]|0)>0)return $(`SAVING ${Math.min(J.jars[e.grade]|0,e.count|0)}/${e.count} ${e.grade} FOR BUYER ORDER`),!0;if(ju(J.seeds)<4){if(J.mota<Sd.cost)return $(`NEED ${Sd.cost} MOTA FOR SEEDS`);J.mota-=Sd.cost;let e=Du.slice().sort((e,t)=>(J.seeds[e]|0)-(J.seeds[t]|0)||Du.indexOf(e)-Du.indexOf(t)).slice(0,Sd.n);for(let t of e)J.seeds[t]=(J.seeds[t]|0)+1;return $(`+1 ${e.map(e=>U(e).short).join(`  +1 `)}`,`good`),Db(),X(),!0}return $(`CURE JARS, THEN SELL THEM FOR MOTA`),!0}var Qy=[`W HOUSE`,`W MID`,`W GATE`,`E HOUSE`,`E MID`,`E GATE`];function $y(e){let t=e.bed;if(B_[t*4]?.locked)return Wy(t);let n=0,r=0;for(let e=0;e<4;e++){let i=B_[t*4+e];(i.state===`growing`||i.state===`ready`||i.state===`ripening`)&&(i.state===`growing`&&n++,i.state===`growing`&&i.water<=.7&&(i.water=1,r++))}Q.cool=.45,L_.playAction(`water`);let i=Math.sign(op[t].x-e.x)||1;for(let t=0;t<18;t++)_y(t*.028,()=>R_.emit({x:e.x+i*.25,y:.95,z:e.z,vx:i*(1.1+Math.random()*.8),vy:1.3+Math.random()*.7,vz:(Math.random()-.5)*.9,life:.55,size:.07,color:8308978,color2:4163272,g:-9}));return r?($(r>1?`WATERED ${r}`:`PLANT WATERED`,`good`),X(),Db(),!0):$(n?`BED IS WATERED`:`NOTHING TO WATER`)}function eb(){let e=Y.greenhouse;if(e.owned)return $(`GLASSHOUSE OPEN · FOUR EXTRA GROW POTS`);if(J.mota<iy)return $(`NEED ${iy} MOTA — GLASSHOUSE`);J.mota-=iy,e.owned=!0,e.forSale.visible=!1;let t=Y.slots.length-e.slots.length;for(let n=0;n<e.slots.length;n++)B_[t+n].locked=!1;return Q.cool=.4,$(`GLASSHOUSE UNLOCKED — FOUR NEW GROW POTS`,`good`),Db(),X(),!0}function tb(){let e=Y.moonGarden;return e.owned?$(Y.greenhouse.owned?`MOON GARDEN BONUS ACTIVE`:`MOON GARDEN BONUS READY WHEN GLASSHOUSE IS UNLOCKED`):J.mota<ay?$(`NEED ${ay} MOTA — MOON GARDEN`):(J.mota-=ay,e.owned=!0,e.forSale.visible=!1,Q.cool=.4,$(Y.greenhouse.owned?`MOON GARDEN UNLOCKED — GLASSHOUSE +10% GROWTH`:`MOON GARDEN UNLOCKED — GLASSHOUSE BONUS READY`,`good`),Db(),X(),!0)}function nb(){return Y.warehouse.owned?!0:J.mota<520?$(`NEED 520 MOTA`):(J.mota-=520,Y.warehouse.owned=!0,Y.warehouse.gateOpen=!0,Y.lot.mesh.visible=!1,Y.warehouse.forSale.visible=!1,Q.cool=.4,$(`WAREHOUSE IS YOURS — EAST GATE IS OPEN`,`good`),Db(),X(),!0)}function rb(e){let t=Y?.shed;if(!t)return;let n=t.open?1.35:0,r=1-Math.exp(-e*14);t.doorL.rotation.y+=(n-t.doorL.rotation.y)*r,t.doorR.rotation.y+=(-n-t.doorR.rotation.y)*r;let i=(t.door.x-Q.x)**2+(t.door.z-Q.z)**2<2.8*2.8;t.roof.visible=!(t.open&&(t.contains(Q.x,Q.z)||i));for(let n of t.hooks){let t=n.item;if(!t)continue;t.dry<1?(t.t+=e,t.dry=Math.min(1,t.t/X_)):(t.hold+=e,t.hold>Q_&&!t.dropped&&(t.dropped=!0,Dy(t)&&$(`OVERDRIED — GRADE DROPPED`),X()));let r=Math.sin(Z.t*1.6+n.x)*.04;n.mesh.rotation.z=r,n.mesh.scale.setScalar(1.2+.35*(1-t.dry))}for(let n of t.cureJars){let t=n.item;if(t&&!t.sealed&&(t.t+=e,t.cure=Math.min(1,t.t/Z_),t.cure>=.4&&t.cure<.62&&!t.burped&&!t.missed&&(t.needsBurp=!0),t.cure>=.62&&t.needsBurp&&!t.burped&&(t.missed=!0,t.needsBurp=!1,Dy(t)&&$(`MISSED THE BURP — GRADE DROPPED`),X()),t.cure>=1)){t.sealed=!0;let e=t.grade;J.jars[e]=(J.jars[e]|0)+1,Oy(),$(`+${ry(e)}G  ${e} CURED`,`good`),n.mesh.visible=!1,n.item=null,Db(),X()}}let a=Y.house,o=Y.warehouse,s=1-Math.exp(-e*10);a.door.rotation.y+=((a.open?-1.15:0)-a.door.rotation.y)*s;let c=a.open&&Math.abs(Q.x)<4&&Q.z<-11.4&&Q.z>-15.4,l=!(a.open&&(a.contains(Q.x,Q.z)||c));a.roof.visible=l,a.facade.visible=l;for(let t of a.mothers){if(t.state===`growing`){t.water=Math.max(0,t.water-e/Y_);let n=t.water<=0?.35:1;t.prog+=e*n/(tv[Math.min(t.stage,1)]*ku(t.strain,2)),t.prog>=1&&(t.prog=0,t.stage+=1,t.stage>=2&&(t.state=`mother`,t.stage=2,t.water=Math.max(t.water,.8),$(`${U(t.strain).short} MOTHER IS READY`,`good`),X()),t.plant.geometry=av(t.stage,t.strain)),t.plant.scale.setScalar((t.state===`mother`?1.2:.5+t.stage*.28+t.prog*.1)*(U(t.strain).stature||1))}else t.state===`mother`&&(t.water=Math.max(0,t.water-e/(Y_*1.25)),t.cool=Math.max(0,t.cool-e));t.plant.visible&&(t.plant.rotation.z=Math.sin(Z.t*1.3+t.x)*.03)}for(let t of a.trays)t.state===`rooting`&&(t.t+=e,t.t>=$_&&(t.state=`ready`,t.plant.geometry=av(1,t.strain||`bd`),$(`${U(t.strain).short} CLONE ROOTED — MOVE IT TO VEG`,`good`),X()));for(let t of a.veg)if(t.room===`center`){if(t.state!==`growing`)continue;t.t+=e/ku(t.strain,2),t.plant.scale.setScalar((.72+.18*Math.min(1,t.t/ev))*(U(t.strain).stature||1)),t.t>=ev&&(t.state=`ready`,t.plant.scale.setScalar(.9*(U(t.strain).stature||1)),$(`${U(t.strain).short} SEED CROP READY — COLLECT SEEDS`,`good`),X())}else t.state===`veg`&&(t.t+=e/ku(t.strain,2),t.plant.scale.setScalar((.72+.18*Math.min(1,t.t/ev))*(U(t.strain).stature||1)),t.t>=ev&&(t.state=`ready`,$(`${U(t.strain).short} VEG DONE — POT IT UP`,`good`),X()));o.gate.rotation.y+=((o.gateOpen?1.15:0)-o.gate.rotation.y)*s,o.door.rotation.y+=((o.open?1.25:0)-o.door.rotation.y)*s;let u=o.owned&&o.open&&Math.abs(Q.z)<2.1&&Q.x>20.4&&Q.x<25.2;o.roof.visible=!(o.owned&&(o.contains(Q.x,Q.z)||o.open&&u)),o.forSale.visible=!o.owned,Y.lot.mesh.visible=!o.owned;let d=Y.scenery;if(d){let t=a.contains(Q.x,Q.z);d.lamps.down.intensity=t&&Q.y<2.15?6.5:0,d.lamps.loft.intensity=t&&Q.y>1.55?5.5:0,d.lamps.wh.intensity=o.owned&&o.contains(Q.x,Q.z)?7:0;let n=performance.now()/1e3;for(let t of d.fans)t.rotation.z+=e*9;d.bulbs.forEach((e,t)=>{e.scale.setScalar(.9+Math.sin(n*2.4+t*1.7)*.1)})}}function ib(e){return`#`+(e>>>0).toString(16).padStart(6,`0`)}var ab=[],ob=null,sb=Zd().build(.08),cb=Yd().build(.08),lb=new Map;sb.computeBoundingBox(),cb.computeBoundingBox();function ub(e){let t=lb.get(e);return t||(t=bd(e).build(.05),t.computeBoundingBox(),lb.set(e,t)),t}function db(){if(ob)return ob;let e=new Pl({antialias:!1,alpha:!0,preserveDrawingBuffer:!0});e.setPixelRatio(1),e.setSize(80,80,!1),e.setClearColor(0,0);let t=new fr;t.add(new La(16774880,2372380,1.2));let n=new eo(16774098,1.45);n.position.set(2.4,4.2,3.2),t.add(n);let r=new Ai(new oi,$l);r.frustumCulled=!1;let i=new rr;return i.add(r),t.add(i),ob={renderer:e,scene:t,mesh:r,pivot:i,camera:new Qa(-1,1,1,-1,.01,50)},ob}function fb(e,t=1.16){e.boundingBox||e.computeBoundingBox();let n=e.boundingBox,r=n.getCenter(new L),i=n.getSize(new L),a=Math.max(i.x,i.y,i.z,.05)*.7,o=new L(a*.75,a*1.45,a*.9),s=new Ya;s.position.copy(o),s.lookAt(0,0,0),s.updateMatrixWorld();let c=new L(1,0,0).applyQuaternion(s.quaternion),l=new L(0,1,0).applyQuaternion(s.quaternion),u=.001;for(let e of[n.min.x,n.max.x])for(let t of[n.min.y,n.max.y])for(let i of[n.min.z,n.max.z]){let n=new L(e-r.x,t-r.y,i-r.z);u=Math.max(u,Math.abs(n.dot(c)),Math.abs(n.dot(l)))}return{center:r,cam:o,half:u*t}}var pb=`all`;function mb(e){let t=J.clones.map(e=>e.strain).join(`,`),n=J.wet.map(e=>`${e.strain}:${e.grade}`).join(`,`),r=Du.map(e=>J.seeds[e]|0).join(`,`),i=Ty.map(e=>J.jars[e]|0).join(`,`);return[e,pb,r,t,n,i,J.nutrients|0,J.cubes|0].join(`|`)}function hb(e,t){if(pb!==`all`&&t.category!==pb)return;let n=document.createElement(t.select?`button`:`div`);t.select&&(n.type=`button`),n.className=`bag-slot`+(t.on?` on`:``);let r=document.createElement(`canvas`);r.width=80,r.height=80;let i=document.createElement(`span`);i.textContent=t.label;let a=document.createElement(`b`);a.textContent=String(t.count),n.append(r,i,a),t.select&&n.addEventListener(`click`,e=>{Nv(e),J.strainPick=t.id,q(`bag-grid`).dataset.sig=``,X(),Db()}),e.append(n);let o=fb(t.geo,t.pad);ab.push({canvas:r,ctx:r.getContext(`2d`),geo:t.geo,frame:o,phase:ab.length*.7,rock:!!t.rock})}function gb(e){let t=q(`bag-grid`);if(!t)return;let n=mb(e);if(t.dataset.sig===n)return;t.dataset.sig=n,t.replaceChildren(),ab.length=0;for(let n of Du){let r=J.seeds[n]|0;r&&hb(t,{category:`seeds`,select:!0,id:n,label:U(n).short,count:r,geo:ub(n),on:n===e,rock:!0,pad:1.04})}let r=new Map;for(let e of J.clones)r.set(e.strain,(r.get(e.strain)||0)+1);for(let[e,n]of r)hb(t,{category:`seeds`,label:`${U(e).short} CLONE`,count:n,geo:av(2,e)});let i=new Map;for(let e of J.wet){let t=`${e.strain}:${e.grade}`;i.set(t,(i.get(t)||0)+1)}for(let[e,n]of i){let[r,i]=e.split(`:`),a=Y?.shed?.nugGeo?.[r];a&&hb(t,{category:`harvest`,label:`${U(r).short} ${i}`,count:n,geo:a})}let a=Y?.shed?.cureJars?.[0]?.mesh?.geometry;if(a)for(let e of[`AAAA`,`AAA`,`AA`,`A`]){let n=J.jars[e]|0;n&&hb(t,{category:`harvest`,label:e,count:n,geo:a})}if(J.nutrients>0&&hb(t,{category:`supplies`,label:`FEED`,count:J.nutrients|0,geo:sb}),J.cubes>0&&hb(t,{category:`supplies`,label:`CUBE`,count:J.cubes|0,geo:cb}),!t.childElementCount){let e=document.createElement(`p`);e.className=`bag-empty`,e.textContent=`BAG IS EMPTY`,t.append(e)}}function _b(e){if(!ab.length||q(`inv`).classList.contains(`hidden`))return;let t=db();for(let n of ab){t.mesh.geometry=n.geo,t.mesh.position.copy(n.frame.center).multiplyScalar(-1),t.pivot.rotation.y=n.rock?Math.sin(e*.7+n.phase)*.4:e*.55+n.phase,t.camera.position.copy(n.frame.cam);let r=n.frame.half;t.camera.left=-r,t.camera.right=r,t.camera.top=r,t.camera.bottom=-r,t.camera.lookAt(0,0,0),t.camera.updateProjectionMatrix(),t.renderer.render(t.scene,t.camera),n.ctx.clearRect(0,0,80,80),n.ctx.drawImage(t.renderer.domElement,0,0)}}var vb=new Map,yb=``,bb=!1;function xb(e,t,n,r=1){let i=vb.get(t);i||vb.set(t,i={rank:e,verb:t,places:new Map}),i.rank=Math.min(i.rank,e),i.places.set(n,(i.places.get(n)||0)+r)}function Sb(e){let t=[];for(let[n,r]of e)t.push(r>1?`${n} ×${r}`:n);return t.join(` · `)}function Cb(){vb.clear();let e=Y.house,t=Y.shed,n=(e,t,n)=>{for(let r of e){if(!r||r.locked||r.state===`empty`)continue;if(r.state===`ready`||r.state===`ripening`){let e=r.state===`ripening`?rv(r.ripe||0):null;!e||e.pick?xb(1,`HARVEST`,t):xb(4,e.id===`amber`?`HARVEST LATE`:`HARVEST EARLY`,t);continue}if(r.state!==`growing`)continue;if(r.water<=.7){n||xb(r.water<=0?0:2,`WATER`,t);continue}let e=by(r);e===`top`?xb(3,`TOP`,t):e===`train`?xb(3,`TRAIN`,t):e===`lolli`?xb(3,`LOLLIPOP`,t):r.holdVeg||t===`WAREHOUSE`&&r.stage>=3&&Y.warehouse.lights!==`flower`?xb(3,`FLIP 12/12`,`WAREHOUSE`):r.stage>=3&&J.nutrients>0&&xb(6,`BLOOM FEED`,t)}},r=B_.length-Y.greenhouse.slots.length;n(B_.slice(0,r),`YARD`,!0),Y.greenhouse.owned&&n(B_.slice(r),`GLASSHOUSE`,!1),Y.warehouse.owned&&n(H_,`WAREHOUSE`,!1),op.forEach((e,t)=>{let n=0,r=!1;for(let e=0;e<4;e++){let i=B_[t*4+e];!i||i.locked||i.state!==`growing`||i.water>.7||(n++,i.water<=0&&(r=!0))}n&&xb(r?0:2,`WATER BED`,Qy[t],n)});for(let t of e.mothers){if(!Vy(t)||!t.state||t.state===`empty`)continue;let n=t.state===`growing`?t.water<.45:t.water<.4,r=U(t.strain).short;n?xb(t.water<=0?0:2,`WATER`,`MOTHER`):J.nutrients>0&&(t.state===`growing`||t.cool>0)?xb(6,`FEED`,`MOTHER`):t.state===`mother`&&t.cool<=0&&(e.trays.some(e=>e.state===`empty`&&Hy(e))?xb(5,`TAKE CUTTING`,r):!e.tube2&&J.mota>=Cd.tube&&xb(7,`UNLOCK TUBES`,`${Cd.tube} MOTA`))}let i=0;for(let t of e.trays){if(!Hy(t))continue;let e=U(t.strain).short;t.state===`ready`?i++:t.state===`rooting`&&J.cubes>0?xb(5,`ROOT CUBE`,e):t.state===`rooting`&&J.nutrients>0&&xb(6,`FEED`,`TUBE`)}i&&(e.veg.some(e=>e.room!==`center`&&Uy(e)&&e.state===`empty`)?xb(4,`MOVE TO VEG`,`HOUSE`,i):!e.vegWest&&J.mota>=Cd.vegWest?xb(4,`UNLOCK VEG`,`WEST`):xb(4,`MOVE TO VEG`,`POTS FULL`,i));for(let t of e.veg)Uy(t)&&(t.room===`center`?t.state===`ready`?xb(1,`COLLECT SEEDS`,U(t.strain).short):t.state===`growing`&&J.nutrients>0?xb(6,`FEED SEED CROP`,U(t.strain).short):t.state===`empty`&&Du.some(e=>Eu[e]?.hybrid&&(J.seeds[e]|0)>0)&&xb(4,`PLANT HYBRID`,`BREEDING LAB`):t.state===`ready`&&J.clones.length<8?xb(4,`TAKE CLONE`,U(t.strain).short):t.state===`veg`&&J.nutrients>0&&xb(6,`FEED`,`VEG`));e.vegCenter&&J.genetics.length>=2&&xb(5,`CROSS GENETICS`,`BREEDING LAB`);let a=J.buyerOrder;if(a&&!a.claimed){let e=J.jars[a.grade]|0;xb(e>=a.count?1:5,`FILL BUYER ORDER`,`${Math.min(e,a.count)}/${a.count} ${a.grade} · STAND`)}let o=0,s=0;for(let e of J.wet)e.trimmed?s++:o++;o&&xb(3,`TRIM`,`SHED`,o),s&&xb(3,t.hooks.some(e=>!e.item)?`HANG`:`FREE A HOOK`,`SHED`,s);let c=t.hooks.filter(e=>e.item&&e.item.dry>=1).length;c&&xb(1,`JAR`,`SHED`,c);let l=t.cureJars.filter(e=>e.item?.needsBurp&&!e.item.burped&&!e.item.missed).length;l&&xb(0,`BURP`,`SHED`,l);let u=motaInJars();u.n>0&&xb(5,`SELL`,`STAND`,u.n);let d=0,f=0,p=0,m=B_.length-Y.greenhouse.slots.length;for(let e of B_.slice(0,m))!e.locked&&e.state===`empty`&&d++;if(Y.greenhouse.owned)for(let e of B_.slice(m))e.state===`empty`&&f++;if(Y.warehouse.owned)for(let e of H_)e.state===`empty`&&p++;return(d||f||p)&&(J.clones.length?xb(5,`PLANT`,`CLONE`,Math.min(J.clones.length,d+f+p)):ju(J.seeds)>0?(d&&xb(8,`PLANT`,`YARD`,d),f&&xb(8,`PLANT`,`GLASSHOUSE`,f),p&&xb(8,`PLANT`,`WAREHOUSE`,p)):J.mota>=Sd.cost&&xb(8,`BUY SEEDS`,`STAND`)),B_.slice(0,-Y.greenhouse.slots.length).some(e=>e.locked)&&J.mota>=Cd.bed&&xb(7,`UNLOCK BOX`,`${Cd.bed} MOTA`),!Y.greenhouse.owned&&J.mota>=iy&&xb(7,`UNLOCK GLASSHOUSE`,`${iy} MOTA`),!e.mother2&&J.mota>=Cd.mother&&xb(7,`UNLOCK MOTHER`,`${Cd.mother} MOTA`),!e.tube2&&J.mota>=Cd.tube&&!vb.has(`UNLOCK TUBES`)&&xb(7,`UNLOCK TUBES`,`${Cd.tube} MOTA`),!e.vegWest&&J.mota>=Cd.vegWest&&!vb.has(`UNLOCK VEG`)&&xb(7,`UNLOCK VEG`,`WEST`),!e.vegCenter&&J.mota>=Cd.vegCenter&&xb(7,`UNLOCK BREEDING LAB`,`${Cd.vegCenter} MOTA`),!Y.warehouse.owned&&J.mota>=520&&xb(7,`BUY WAREHOUSE`,`520 MOTA`),[...vb.values()].sort((e,t)=>e.rank-t.rank||e.verb.localeCompare(t.verb))}function wb(e){let t=0;for(let n of e)for(let e of n.places.values())t+=e;return t}function Tb(e){bb=e,q(`tasks`).classList.toggle(`open`,e),q(`tasks-menu`).classList.toggle(`hidden`,!e),q(`tasks-toggle`).setAttribute(`aria-expanded`,e?`true`:`false`)}function Eb(){if(!Y||J.mode!==`play`&&J.mode!==`shop`&&J.mode!==`dress`)return;let e=Cb(),t=e.map(e=>`${e.rank}|${e.verb}|${Sb(e.places)}`).join(`
`);if(t===yb)return;yb=t;let n=q(`tasks-list`);n.replaceChildren();let r=wb(e);if(q(`tasks-count`).textContent=String(r),q(`tasks-lead`).textContent=e.length?e[0].verb:`CLEAR`,q(`tasks-toggle`).classList.toggle(`hot`,e.some(e=>e.rank<=1)),!e.length){let e=document.createElement(`li`);e.className=`idle`,e.textContent=`NOTHING TO DO`,n.appendChild(e)}else for(let t of e){let e=document.createElement(`li`);t.rank<=1&&(e.className=`hot`);let r=document.createElement(`b`);r.textContent=t.verb;let i=document.createElement(`span`);i.textContent=Sb(t.places),e.append(r,i),n.appendChild(e)}}function Db(){fx(),xx(),sx(),yx();let e=Eu[J.strainPick]?J.strainPick:`bd`,t=U(e);q(`mota`).textContent=J.mota,q(`strain-label`).textContent=t.short,q(`strain-count`).textContent=J.seeds[e]|0,q(`strain-swatch`).style.background=ib(t.bud[0]),q(`clones`).textContent=J.clones.length,q(`nuts`).textContent=J.nutrients|0,q(`grams`).textContent=J.grams,q(`wet`).textContent=J.wet.length,gb(e)}var Ob=q(`tip`),kb=q(`prompt`),Ab=new L,jb=new yo,Mb=new rn,Nb=new ui(new L(0,1,0),-.4375),Pb=new L;function Fb(e){let t=q(`btn-act`);t&&t.textContent!==e&&(t.textContent=e)}function Ib(e){let t=e.startsWith(`SPACE  `)?`SPACE`:e.startsWith(`TAP  `)?`TAP`:``;q(`prompt-key`).textContent=t,q(`prompt-label`).textContent=t?e.slice(t.length).trim():e,kb.style.display=`flex`}function Lb(){let e=q(`welcome`);e&&J.mode===`play`&&(e.classList.remove(`hidden`),q(`welcome-close`)?.focus({preventScroll:!0}))}function Rb(){let e=q(`welcome`);if(e){e.classList.add(`hidden`);try{localStorage.setItem(`mm-guide-v1`,`seen`)}catch{}q(`btn-help-hud`)?.focus({preventScroll:!0})}}function zb(){let e=!1;try{e=localStorage.getItem(`mm-guide-v1`)===`seen`}catch{}e||Lb()}function Bb(e){let t=q(`help`),n=typeof e==`boolean`?e:t.classList.contains(`hidden`);t.classList.toggle(`hidden`,!n),vS(q(`btn-help-hud`),n)}function Vb(e,t){if(!Y)return null;let n=S_.domElement.getBoundingClientRect();if(!n.width||!n.height)return null;Mb.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),jb.setFromCamera(Mb,M_);let r=Y.warehouse.owned&&(Y.warehouse.contains(Q.x,Q.z)||Q.x>22),i=Y.greenhouse.owned&&Y.greenhouse.contains(Q.x,Q.z);if(Nb.constant=r?-.55:-.4375,!jb.ray.intersectPlane(Nb,Pb))return null;let a=Y.slots.filter(e=>e.where!==`gh`),o=r?Y.warehouse.slots:i?Y.greenhouse.slots:a,s=r?H_:i?B_.slice(a.length):B_.slice(0,a.length),c=-1,l=1.5625;if(o.forEach((e,t)=>{let n=(e.x-Pb.x)**2+(e.z-Pb.z)**2;n<l&&(l=n,c=t)}),c<0)return null;let u=o[c];return{where:r?`wh`:i?`gh`:`yard`,i:i?c+a.length:c,s:u,d:s[c],d2:0}}function Hb(e,t){if(J.mode!==`play`)return;let n=Vb(e,t);if(n){if(Math.hypot(n.s.x-Q.x,n.s.z-Q.z)>3.1)return $(`WALK CLOSER`);wy(n)}}var Ub=[],Wb=``;function Gb(e){return e.state===`ready`?1:e.state===`ripening`?Math.min(1,(e.ripe||0)/.88):e.holdVeg?.5:Math.min(1,(e.stage+e.prog)/4)}function Kb(e,t){let n=by(e),r=t&&e.state===`ripening`&&Y.warehouse.lights!==`flower`,i=``,a=``;if(e.water<=0)i=`DRY`,a=`dry`;else if(e.state===`ripening`){let t=rv(e.ripe||0);i=t.id===`clear`?`CLEAR`:t.id===`cloudy`?`CLOUDY`:t.id===`milky`?`PEAK`:`LATE`,a=t.id}else n===`top`?(i=`TOP`,a=`next`):n===`train`?(i=`TIE`,a=`next`):n===`lolli`?(i=`LOLLI`,a=`next`):xy(e)&&(i=`SET`,a=`set`);let o=r?`HOLD`:e.holdVeg?`18/6`:``,s=r||e.holdVeg?`hold`:``;return{label:i,kind:a,extra:o,extraKind:s,step:n}}function qb(e,t){let n=e.querySelector(`.badge-row`);n&&n.classList.toggle(`hide-marks`,t.stage<2);let r=by(t);for(let n of[`top`,`train`,`lolli`]){let i=e.querySelector(`.mark.`+n);if(!i)continue;let a=n===`top`?!!t.topped:n===`train`?!!t.trained:!!t.lollipop;i.classList.toggle(`on`,a),i.classList.toggle(`next`,!a&&r===n)}}function Jb(e,t,n){let{el:r}=e,i=Kb(t,n);r.querySelector(`.h2o i`).style.width=Math.round(Math.max(0,t.water)*100)+`%`,r.querySelector(`.h2o`).classList.toggle(`dry`,t.water<=0),r.querySelector(`.h2o`).classList.toggle(`thirst`,t.water>0&&t.water<=.7);let a=r.querySelector(`.grow`);a.querySelector(`i`).style.width=Math.round(Gb(t)*100)+`%`,a.className=`grow `+(t.state===`ripening`?rv(t.ripe||0).id:``);let o=r.querySelector(`.grade`),s=t.stage>=3||t.state===`ripening`||t.state===`ready`;o.textContent=s?ny(t):``,o.className=`grade `+(s?ny(t):``),qb(r,t);let c=r.querySelector(`.tag`);c.textContent=i.label,c.className=`tag `+i.kind;let l=r.querySelector(`.extra`);l.textContent=i.extra&&i.extra!==i.label?i.extra:``,l.className=`tag extra `+i.extraKind}function Yb(){let e=document.createElement(`div`);return e.className=`plant-badge`,e.innerHTML=`<div class="badge-top"><span class="h2o"><i></i></span><span class="grow"><i></i></span><b class="grade"></b></div><div class="badge-row"><span class="pair"><b>T</b><i class="mark top"></i></span><span class="pair"><b>R</b><i class="mark train"></i></span><span class="pair"><b>L</b><i class="mark lolli"></i></span><span class="tag"></span><span class="tag extra"></span></div>`,e.style.display=`none`,q(`badges`).appendChild(e),e}function Xb(){Y.slots.forEach((e,t)=>{let n=e.where===`gh`?`gh`:`yard`,r=Yb();n===`gh`&&(r.dataset.zone=`gh`),Ub.push({el:r,where:n,i:t,s:e,data:B_})}),Y.warehouse.slots.forEach((e,t)=>Ub.push({el:Yb(),where:`wh`,i:t,s:e,data:H_}))}function Zb(e,t,n,r){if(Ab.set(t,n,r).project(M_),Ab.z>1){e.style.display=`none`;return}let i=k_().w,a=k_().h,o=(Ab.x*.5+.5)*i,s=(-Ab.y*.5+.5)*a;o<-80||s<-40||o>i+80||s>a+40?e.style.display=`none`:(e.style.display=`flex`,e.style.transform=`translate(${o}px, ${s}px) translate(-50%, -120%)`)}function Qb(){let e=J.mode===`play`,t=Y.warehouse.contains(Q.x,Q.z),n=Y.greenhouse.owned&&Y.greenhouse.contains(Q.x,Q.z),r=t||n||Y.house.contains(Q.x,Q.z);for(let i of Ub){let a=i.data[i.i];if(!(e&&a&&a.state!==`empty`&&Wb!==i.where+`:`+i.i&&(i.where===`wh`?t:i.where===`gh`?n:!r))){i.el.style.display=`none`;continue}Jb(i,a,i.where===`wh`);let o=(oy[a.stage]||.7)+.55;Zb(i.el,i.s.x,i.s.y+o,i.s.z)}}function $b(){if(Wb=``,J.mode!==`play`)return G_.visible=!1,Ob.style.display=`none`,kb.style.display=`none`,ES(!1),-1;let e=ky(),t=hy(),n=t?t.d2:1/0,r=e&&e.d2+.12<n;if(ES(r?e.kind===`mother`&&Vy(e.ref)&&(!e.ref.state||e.ref.state===`empty`):!(!t||t.d.state!==`empty`||t.d.locked||J.clones.length!==0)),r)return ex(e),-1;if(!t)return G_.visible=!1,Ob.style.display=`none`,kb.style.display=`none`,Fb(`ACT`),-1;let i=t.s,a=t.d;G_.visible=!0,G_.position.set(i.x,i.y+.06+Math.sin(Z.t*5)*.02,i.z);let o=1+Math.sin(Z.t*5)*.03;G_.scale.set(o,1,o);let s=vv?`TAP`:`SPACE`,c,l=`ACT`;if(t.where===`yard`&&a.locked){let e=J.mota<Cd.bed;c=e?`GROW BOX  ${J.mota}/${Cd.bed} MOTA`:`${s}  UNLOCK GROW BOX  ${Cd.bed} MOTA`,l=e?`ACT`:`BUY`}else if(a.state===`empty`){if(J.clones.length){let e=J.clones[0];c=`${s}  PLANT ${U(e.strain).short} CLONE`,l=`CLONE`}else{let e=uv();c=e.ok?`${s}  ${e.text}`:e.text,l=e.ok?`PLANT`:`ACT`}}else if(a.state===`ripening`&&a.water<=.7)c=`${s}  WATER — KEEP FLOWER HEALTHY`,l=`WATER`;else if(a.state===`ripening`){let e=rv(a.ripe||0);c=`${s}  HARVEST — ${e.label}`,l=e.pick?`PICK`:e.id===`amber`?`LATE`:`EARLY`}else a.state===`ready`?(c=`${s}  HARVEST`,l=`PICK`):a.water<=.7?(c=`${s}  WATER`,l=`WATER`):by(a)===`top`?(c=`${s}  TOP`,l=`TOP`):by(a)===`train`?(c=`${s}  TRAIN BRANCHES`,l=`TRAIN`):by(a)===`lolli`?(c=`${s}  LOLLIPOP`,l=`LOLLI`):a.holdVeg?(c=`WAITING FOR 12/12`,l=`ACT`):a.stage>=3&&J.nutrients>0?(c=`${s}  BLOOM FEED`,l=`FEED`):c=xy(a)?`CANOPY SET`:`WELL WATERED`;if(Fb(l),Ib(c),a.state===`empty`||a.locked)Ob.style.display=`none`;else{Ab.set(i.x,i.y+.4+a.stage*.35+.8,i.z).project(M_),Ob.style.display=`block`,Ob.style.left=((Ab.x*.5+.5)*100).toFixed(2)+`%`,Ob.style.top=((-Ab.y*.5+.5)*100).toFixed(2)+`%`;let e=a.state===`ripening`?rv(a.ripe||0):null,n=U(a.strain),r=Kb(a,t.where===`wh`);q(`tip-name`).textContent=`${n.short} ${a.holdVeg?`VEGETATIVE`:nv[a.stage]}`,q(`tip-water`).style.width=Math.round(a.water*100)+`%`,q(`tip-water`).style.background=a.water>0?`#58b4ee`:`#d9534f`,q(`tip-grow`).style.width=Math.round(Gb(a)*100)+`%`;let o=e?e.label:a.holdVeg&&!by(a)?`18/6`:a.state===`ready`?ny(a):by(a)===`top`?`TOP THE VEG`:by(a)===`train`?`TRAIN THE VEG`:by(a)===`lolli`?`LOLLIPOP`:xy(a)?`CANOPY SET`:`${n.kind} ${n.weeks}WK`;q(`tip-grade`).textContent=r.extra&&!o.includes(r.extra)?`${o} · ${r.extra}`:o,qb(q(`tip-marks`),a),q(`tip-marks`).style.display=a.stage>=2?`flex`:`none`,Wb=t.where+`:`+t.i}return t.i}function ex(e){G_.visible=!0,G_.position.set(e.x,(e.y||.08)+Math.sin(Z.t*5)*.02,e.z);let t=1+Math.sin(Z.t*5)*.03;G_.scale.set(t,1,t);let n=tx(e,vv?`TAP`:`SPACE`);Fb(n.btn),Ib(n.text),n.tip?(Ab.set(e.x,(e.y||.08)+1.5,e.z).project(M_),Ob.style.display=`block`,Ob.style.left=((Ab.x*.5+.5)*100).toFixed(2)+`%`,Ob.style.top=((-Ab.y*.5+.5)*100).toFixed(2)+`%`,q(`tip-name`).textContent=n.tip.name,q(`tip-water`).style.width=n.tip.water,q(`tip-water`).style.background=n.tip.wet?`#58b4ee`:`#d9534f`,q(`tip-grow`).style.width=n.tip.grow,q(`tip-grade`).textContent=n.tip.grade||``):Ob.style.display=`none`}function tx(e,t){if(e.kind===`greenhouse`)return Y.greenhouse.owned?{text:`GLASSHOUSE OPEN · FOUR GROW POTS`,btn:`ENTER`}:{text:J.mota<iy?`GLASSHOUSE  ${J.mota}/${iy} MOTA`:`${t}  UNLOCK GLASSHOUSE  ${iy} MOTA`,btn:J.mota<iy?`LOCKED`:`BUY`};if(e.kind===`moon-garden`)return Y.moonGarden.owned?{text:Y.greenhouse.owned?`MOON GARDEN OWNED · GLASSHOUSE +10% GROWTH`:`MOON GARDEN OWNED · BONUS WHEN GLASSHOUSE UNLOCKED`,btn:`OWNED`}:{text:J.mota<ay?`MOON GARDEN  ${J.mota}/${ay} MOTA`:`${t}  UNLOCK MOON GARDEN  ${ay} MOTA`,btn:J.mota<ay?`LOCKED`:`BUY`};if(e.kind===`shed-door`){let e=Y.shed.open;return{text:e?`${t}  CLOSE SHED`:`${t}  OPEN SHED`,btn:e?`CLOSE`:`OPEN`}}if(e.kind===`house-door`){let e=Y.house.open;return{text:e?`${t}  CLOSE HOUSE`:`${t}  OPEN HOUSE`,btn:e?`CLOSE`:`OPEN`}}if(e.kind===`wh-door`){let e=Y.warehouse.open;return{text:e?`${t}  CLOSE WAREHOUSE`:`${t}  OPEN WAREHOUSE`,btn:e?`CLOSE`:`OPEN`}}if(e.kind===`spigot`){let n=e.ref.bed;if(B_[n*4]?.locked){let e=J.mota<Cd.bed;return{text:e?`GROW BOX  ${J.mota}/${Cd.bed} MOTA`:`${t}  UNLOCK GROW BOX  ${Cd.bed} MOTA`,btn:e?`ACT`:`BUY`}}let r=0,i=0;for(let e=0;e<4;e++){let t=B_[n*4+e];t.state===`growing`&&r++,t.state===`growing`&&t.water<=.7&&i++}return r?i?{text:`${t}  WATER BED  ${i}`,btn:`WATER`}:{text:`BED IS WATERED`,btn:`ACT`}:{text:`NOTHING TO WATER`,btn:`ACT`}}if(e.kind===`wh-lights`){let e=Y.warehouse.lights===`flower`;return{text:e?`${t}  FLIP TO 18/6`:`${t}  FLIP TO 12/12`,btn:e?`18/6`:`12/12`}}if(e.kind===`hook`){let n=e.ref.item,r=J.wet[0];if(!n&&r&&!r.trimmed)return{text:`${t}  HAND TRIM ${r.grade}`,btn:`TRIM`};if(!n)return{text:r?`${t}  HANG ${r.grade}`:`HARVEST FIRST`,btn:r?`HANG`:`ACT`};if(n.dry<1)return{text:`DRYING ${Math.round(n.dry*100)}%  ${n.grade}`,btn:`ACT`};let i=Math.max(0,Math.ceil(Q_-(n.hold||0)));return{text:`${t}  JAR ${n.grade} · ${i}s`,btn:`JAR`}}if(e.kind===`jar`){let n=e.ref.item,r=Math.round((n?.cure||0)*100);return n?.needsBurp&&!n.burped&&!n.missed?{text:(n?.cure||0)<=.46?`${t}  BURP NOW · PERFECT WINDOW`:`${t}  BURP JAR`,btn:`BURP`}:n?.missed?{text:`BURP MISSED · CURING ${r}%`,btn:`ACT`}:!n?.burped&&(n?.cure||0)>=.2?{text:`CURING ${r}% · BURP SOON`,btn:`ACT`}:{text:`CURING ${r}%`,btn:`ACT`}}if(e.kind===`mother`){let n=e.ref;if(!Vy(n)){let e=J.mota<Cd.mother;return{text:e?`2ND MOTHER  ${J.mota}/${Cd.mother} MOTA`:`${t}  UNLOCK 2ND MOTHER  ${Cd.mother} MOTA`,btn:e?`ACT`:`BUY`}}if(!n.state||n.state===`empty`){let e=uv();return{text:e.ok?`${t}  ${e.text}`:e.text,btn:e.ok?`PLANT`:`ACT`}}if(n.state===`growing`){let e=n.water<.45,r=Math.round(((n.stage||0)+(n.prog||0))/2*100),i=U(n.strain).short,a=!e&&J.nutrients>0;return{text:e?`${t}  WATER MOTHER`:a?`${t}  FEED MOTHER`:`${i} MOTHER ${r}%`,btn:e?`WATER`:a?`FEED`:`ACT`,tip:{name:i,water:Math.round(n.water*100)+`%`,grow:r+`%`,wet:n.water>.15,grade:`GROWING`}}}let r=n.water<.4,i=U(n.strain).name;return{text:r?`${t}  WATER MOTHER`:n.cool>0?J.nutrients>0?`${t}  FEED MOTHER`:`MOTHER IS RESTING`:`${t}  TAKE ${U(n.strain).short} CLONE`,btn:r?`WATER`:n.cool>0?J.nutrients>0?`FEED`:`ACT`:`CLONE`,tip:{name:i,water:Math.round(n.water*100)+`%`,grow:n.cool>0?Math.round((1-n.cool/8)*100)+`%`:`100%`,wet:n.water>.15,grade:r?`THIRSTY`:`MOTHER`}}}if(e.kind===`tray`){let n=e.ref;if(!Hy(n)){let e=J.mota<Cd.tube;return{text:e?`BACK TUBE ROW  ${J.mota}/${Cd.tube} MOTA`:`${t}  UNLOCK BACK TUBE  ${Cd.tube} MOTA`,btn:e?`ACT`:`BUY`}}let r=U(n.strain).short;if(n.state===`empty`)return{text:`EMPTY TUBE`,btn:`ACT`};if(n.state===`rooting`){let e=Math.round(Math.min(1,n.t/$_)*100);return{text:J.cubes>0?`${t}  ADD ROOT CUBE`:J.nutrients>0?`${t}  FEED TUBE`:`${r} ROOTING ${e}%`,btn:J.cubes>0?`CUBE`:J.nutrients>0?`FEED`:`ACT`,tip:{name:r,water:`100%`,grow:e+`%`,wet:!0,grade:`HYDRO`}}}return{text:`${t}  MOVE ${r} TO VEG`,btn:`VEG`,tip:{name:r,water:`100%`,grow:`100%`,wet:!0,grade:`READY`}}}if(e.kind===`veg`){let n=e.ref;if(!Uy(n)){let e=n.room===`west`,r=e?Cd.vegWest:Cd.vegCenter,i=e?`WEST VEG ROOM`:`CENTER VEG ROOM`,a=J.mota<r;return{text:a?`${i}  ${J.mota}/${r} MOTA`:`${t}  UNLOCK ${i}  ${r} MOTA`,btn:a?`ACT`:`BUY`}}let r=U(n.strain).short;if(n.state===`empty`)return{text:`EMPTY VEG POT`,btn:`ACT`};if(n.state===`veg`){let e=Math.round(Math.min(1,n.t/ev)*100);return{text:J.nutrients>0?`${t}  FEED VEG`:`${r} VEG ${e}%`,btn:J.nutrients>0?`FEED`:`ACT`,tip:{name:r,water:`100%`,grow:e+`%`,wet:!0,grade:``}}}return{text:`${t}  TAKE ${r} CLONE`,btn:`TAKE`,tip:{name:r,water:`100%`,grow:`100%`,wet:!0,grade:`PLANT IT`}}}if(e.kind===`stand`){let e=motaInJars();return e.n>0?{text:`${t}  SELL ${e.n} JAR${e.n>1?`S`:``}  +${e.mota} MOTA`,btn:`SELL`}:ju(J.seeds)<4?{text:`${t}  BUY ${Sd.n} SEEDS  ${Sd.cost} MOTA`,btn:`BUY`}:{text:`BRING CURED JARS`,btn:`ACT`}}if(e.kind===`computer`)return{text:`${t}  USE COMPUTER`,btn:`SHOP`};if(e.kind===`breeder`){if(!Y.house.vegCenter){let e=J.mota<Cd.vegCenter;return{text:e?`BREEDING LAB  ${J.mota}/${Cd.vegCenter} MOTA`:`${t}  UNLOCK BREEDING LAB  ${Cd.vegCenter} MOTA`,btn:e?`ACT`:`UNLOCK`}}return{text:`${t}  OPEN GENETICS LAB`,btn:`BREED`}}if(e.kind===`breed-pot`){let n=e.ref,r=U(n.strain).short;if(!Uy(n)){let e=J.mota<Cd.vegCenter;return{text:e?`BREEDING LAB  ${J.mota}/${Cd.vegCenter} MOTA`:`${t}  UNLOCK BREEDING LAB  ${Cd.vegCenter} MOTA`,btn:e?`ACT`:`BUY`}}if(n.state===`empty`){let e=uv();return{text:e.ok?`${t}  PLANT ${e.text} FOR SEEDS`:`SELECT A SEED IN YOUR BAG`,btn:e.ok?`PLANT`:`ACT`}}if(n.state===`growing`){let e=Math.round(Math.min(1,n.t/ev)*100);return{text:J.nutrients>0?`${t}  FEED SEED CROP`:`${r} SEED CROP ${e}%`,btn:J.nutrients>0?`FEED`:`ACT`,tip:{name:r,water:`100%`,grow:e+`%`,wet:!0,grade:`SEED CROP`}}}return{text:`${t}  COLLECT 4 ${r} SEEDS`,btn:`COLLECT`,tip:{name:r,water:`100%`,grow:`100%`,wet:!0,grade:`SEEDS READY`}}}let n=J.mota<520;return{text:n?`WAREHOUSE  ${J.mota}/520 MOTA`:`${t}  BUY WAREHOUSE  520 MOTA`,btn:n?`ACT`:`BUY`}}function nx(e){Z.t+=e;let t=1-Math.exp(-e*5);if(J.mode===`title`)Z.yawT=Math.sin(Z.t*.22)*.55,Z.distT=25,Z.pitch=.74,Z.target.lerp(Ab.set(0,1.2,-4.2),t);else if(J.mode===`dress`){let e=k_().w<820;Z.pitch+=((e?.72:.46)-Z.pitch)*t,Z.yawT=.62,Z.distT=e?6.6:8.8,Z.target.lerp(Ab.set(Q.x,Q.y+(e?.35:.95),Q.z),t)}else if(J.mode===`play`){let n=Y.warehouse,r=n.contains(Q.x,Q.z)||n.owned&&n.open&&Math.abs(Q.z)<1.35&&Q.x>22.2&&Q.x<24.8,i=Q.z<-13.8||r;Z.pitch+=((i?1.08:.85)-Z.pitch)*t;let a=-11,o=Q.x>10?18:11,s=Q.z<-8?-12:-9,c=7;Q.z<-13.6&&(a=-Dd.half,o=Dd.half,s=Dd.back-.4),Q.x>18&&(a=16,o=36,s=-7,c=7);let l=nn.clamp(Q.x,a,o),u=nn.clamp(Q.z,s,c),d=Ab.set(l*.85+Q.x*.15,.9+Q.y,u*.85+Q.z*.15);Z.free||Z.target.lerp(d,1-Math.exp(-e*4)),(hv.has(`KeyQ`)||_v.cam<0)&&(Z.yawT+=e*1.6),(hv.has(`KeyE`)||_v.cam>0)&&(Z.yawT-=e*1.6),Z.yawT=nn.clamp(Z.yawT,-1.3,1.3)}Z.yaw+=(Z.yawT-Z.yaw)*(1-Math.exp(-e*8)),Z.dist+=(Z.distT-Z.dist)*(1-Math.exp(-e*6));let n=Math.cos(Z.pitch);M_.position.set(Z.target.x+Math.sin(Z.yaw)*n*Z.dist,Z.target.y+Math.sin(Z.pitch)*Z.dist,Z.target.z+Math.cos(Z.yaw)*n*Z.dist),M_.lookAt(Z.target)}var rx=.32,ix=240,ax=[{name:`SEEDLING`,at:0},{name:`CULTIVATOR`,at:100},{name:`CRAFT GROWER`,at:260},{name:`MASTER GROWER`,at:460},{name:`MOTA LEGEND`,at:720}];function ox(e=J.reputation|0){let t=0;for(let n=1;n<ax.length;n++)e>=ax[n].at&&(t=n);return{...ax[t],index:t,next:ax[t+1]||null}}function sx(){let e=ox(),t=Math.max(0,J.reputation|0),n=e.at,r=e.next?.at??e.at,i=e.next?Math.max(0,Math.min(100,(t-n)/(r-n)*100)):100,a=q(`reputation-rank`),o=q(`reputation-copy`),s=q(`reputation-fill`),c=q(`reputation`);c&&a&&o&&s&&(a.textContent=e.name,o.textContent=e.next?`${t} REP · ${Math.max(0,e.next.at-t)} TO NEXT`:`${t} REP · MAX RANK`,s.style.width=`${i}%`,c.setAttribute(`aria-valuenow`,String(t)),c.setAttribute(`aria-valuemax`,String(e.next?.at??e.at)),c.setAttribute(`aria-label`,`${e.name}, ${t} reputation${e.next?`, ${e.next.at-t} to ${e.next.name}`:`, maximum rank`}`),c.classList.toggle(`max-rank`,!e.next))}function cx(e,t=`GROWER PROGRESS`){let n=ox().index;J.reputation=Math.max(0,(J.reputation|0)+Math.max(0,e|0));let r=ox().index;if(r>n){let e=0;for(let t=n+1;t<=r;t++)e+=35+t*25;J.mota+=e,$(`RANK UP — ${ox().name} · +${e} MOTA`,`good`),q(`reputation`)?.classList.add(`rank-up`),setTimeout(()=>q(`reputation`)?.classList.remove(`rank-up`),1200)}else $(`+${e} REP · ${t}`,`good`);sx(),X()}var lx=[{at:0,name:`LOCAL SHOP`,short:`LOCAL`,multiplier:1,color:`#c9d6b5`},{at:100,name:`GREENHOUSE CO-OP`,short:`CO-OP`,multiplier:1.15,color:`#a9db86`},{at:260,name:`CRAFT COLLECTIVE`,short:`CRAFT`,multiplier:1.3,color:`#8ed8d0`},{at:460,name:`NIGHT MARKET`,short:`NIGHT`,multiplier:1.5,color:`#c4a6ff`},{at:720,name:`ROYAL RESERVE`,short:`ROYAL`,multiplier:1.75,color:`#ffe66a`}];function ux(e=J.reputation|0){let t=lx[0];for(let n of lx)e>=n.at&&(t=n);return t}function dx(e,t=J.reputation|0){let n=[`A`,`AA`,`AAA`,`AAAA`],r=n[(Math.max(1,e)-1)%n.length],i=e%3==0?2:1,a=ux(t),o=Math.min(180,30+e*12);return{day:e,grade:r,count:i,customer:a.name,customerTier:a.short,customerColor:a.color,bonus:Math.round(o*a.multiplier*Sm(e)),claimed:!1}}function fx(){let e=q(`buyer-order-copy`),t=q(`buyer-order`);if(!e||!t)return;let n=J.buyerOrder;if(!n){e.textContent=`BUYER ORDER LOADING`,t.classList.remove(`complete`,`ready`);return}let r=q(`buyer-tier`);if(r&&(r.textContent=n.customerTier||ux().short,r.style.color=n.customerColor||ux().color,r.title=n.customer||`Daily buyer`),n.claimed){e.textContent=`D${n.day} COMPLETE · NEXT ORDER AT DAWN`,t.classList.add(`complete`),t.classList.remove(`ready`);return}let i=J.jars[n.grade]|0,a=i>=n.count;e.textContent=`D${n.day} · ${n.grade} ×${n.count} · ${Math.min(i,n.count)}/${n.count} · +${n.bonus} BONUS`,t.classList.toggle(`ready`,a),t.classList.remove(`complete`)}var px=120,mx=[{name:`MOSSY MILES`,style:`STEADY HAND`,base:54},{name:`JUNEBUG`,style:`QUALITY FIRST`,base:68},{name:`THE NIGHT OWL`,style:`LATE BLOOMER`,base:82}];function hx(e,t){let n=(t*(e.base+17)+e.name.length*13)%31-15;return Math.max(24,e.base+n)}function gx(e=J.leagueWeek||1){return[{name:`YOU`,style:`YOUR GARDEN`,score:J.leagueScore|0,player:!0},...mx.map(t=>({name:t.name,style:t.style,score:hx(t,e),player:!1}))].sort((e,t)=>t.score-e.score)}function _x(e){let t={A:12,AA:20,AAA:30,AAAA:42}[e]||12;J.leagueScore=Math.max(0,(J.leagueScore|0)+t),X(),yx()}function vx(e){let t=J.leagueWeek||1;if(t>(J.leaguePaidWeek|0)){let e=gx(t).findIndex(e=>e.player)+1,n=e===1?180:e===2?90:e===3?35:0,r=(J.leagueScore|0)>=px?60:0,i=n+r;J.mota+=i,J.leaguePaidWeek=t,J.mode===`play`&&$(i?`WEEK ${t} LEAGUE · PLACE #${e} · +${i} MOTA${r?` · HARVEST GOAL +60`:``}`:`WEEK ${t} LEAGUE · PLACE #${e} · OUTSIDE THE PODIUM`,i?`good`:``)}J.leagueWeek=e,J.leagueScore=0,X(),yx()}function yx(){let e=q(`league-panel`),t=q(`league-standings`);if(!e||!t)return;let n=J.leagueWeek||1,r=(Math.floor(rx)+1-1)%7+1;q(`league-week`).textContent=`WEEK ${n}`,q(`league-day`).textContent=`DAY ${r}/7`;let i=J.leagueScore|0;q(`league-score`).textContent=String(i);let a=q(`league-goal-fill`),o=q(`league-goal-score`),s=q(`league-goal-copy`);a&&(a.style.width=`${Math.min(100,i/px*100)}%`),o&&(o.textContent=`${Math.min(i,px)}/${px}`),s&&(s.textContent=i>=px?`HARVEST GOAL COMPLETE · +60 MOTA`:`WEEKLY HARVEST GOAL · +60 MOTA`),a&&(a.parentElement?.setAttribute(`aria-label`,`Weekly harvest goal: ${i} of ${px} points`),a.parentElement?.setAttribute(`aria-valuenow`,String(Math.min(i,px))));let c=gx(n);t.replaceChildren(),c.forEach((e,n)=>{let r=document.createElement(`li`);e.player&&(r.className=`you`);let i=document.createElement(`b`);i.textContent=String(n+1).padStart(2,`0`);let a=document.createElement(`span`);a.textContent=e.name;let o=document.createElement(`i`);o.textContent=String(e.score),r.append(i,a,o),t.appendChild(r)});let l=c.findIndex(e=>e.player)+1,u=l===1?180:l===2?90:l===3?35:0,d=i>=px?60:0;q(`league-prize`).textContent=`${l===1?`1ST`:l===2?`2ND`:l===3?`3RD`:`OUTSIDE TOP 3`} · ${u+d} MOTA TOTAL${d?` (GOAL BONUS)`:``}`,q(`league-panel`).setAttribute(`aria-label`,`Weekly league standings, you are in place ${l}`)}function bx(e=Math.floor(rx)+1){let t=q(`weather-forecast-days`);if(t){t.replaceChildren();for(let n of xm(e,3)){let e=document.createElement(`article`);e.className=`forecast-day`;let r=document.createElement(`div`);r.className=`forecast-day-head`;let i=document.createElement(`b`);i.textContent=`DAY ${n.day} · ${n.season}`;let a=document.createElement(`strong`);a.textContent=n.weather.label,r.append(i,a);let o=document.createElement(`p`);o.textContent=n.weather.detail;let s=document.createElement(`small`);s.textContent=`OUTDOOR GROWTH ${Math.round(n.weather.growth*100)}% · WATER USE ${Math.round(n.weather.waterUse*100)}% · MARKET ${Math.round(n.market*100)}%`;let c=document.createElement(`small`);c.className=`forecast-event`,c.textContent=`${n.event} — ${n.eventDetail}`,e.append(r,o,s,c),t.append(e)}}}function xx(e=Math.floor(rx)+1){let t=q(`weather`);if(!t)return;let n=ym(e),r=bm(e),i=q(`clock-day`);i&&(i.textContent=`D${e} · ${n.name}`,i.title=`${n.name} · YEAR ${n.year} · DAY ${n.dayInSeason}/28 · WEEK ${n.week}/4\n${n.event.name}: ${n.event.detail}\nOutdoor growth ${Math.round(r.growth*100)}% · outdoor water use ${Math.round(r.waterUse*100)}% · market ${Math.round(Sm(e)*100)}%`,i.setAttribute(`aria-label`,`Day ${e}, ${n.name}, year ${n.year}. ${n.event.name}: ${n.event.detail}`)),t.textContent=`${r.label} · ${r.detail}`,q(`weather-forecast`)?.classList.contains(`hidden`)||bx(e),t.dataset.weather=r.id,t.title=`${r.detail}. ${n.event.name}: ${n.event.detail} Outdoor growth multiplier ${r.growth.toFixed(2)}; outdoor water use multiplier ${r.waterUse.toFixed(2)}. Greenhouse and warehouse growing conditions are climate controlled.`,t.setAttribute(`aria-label`,`Day ${e} weather: ${r.label}. ${r.detail}. ${n.name}, ${n.event.name}.`)}function Sx(){let e=Math.floor(rx)+1,t=Math.floor((e-1)/7)+1;if(t>(J.leagueWeek|0)&&vx(t),J.buyerOrder?.day===e)return!1;if(J.buyerOrder=dx(e),yb=``,bm(e).rain&&e>1){let e=0;for(let t=0;t<B_.length;t++){let n=B_[t];!n||Y.slots[t]?.where===`gh`||n.locked||n.state!==`growing`&&n.state!==`ripening`||(n.water<1&&e++,n.water=1)}$(e?`MORNING SHOWERS — ${e} OUTDOOR PLANT${e===1?``:`S`} WATERED`:`MORNING SHOWERS — THE YARD IS FRESH`,`good`)}if(X(),fx(),xx(e),Eb(),J.mode===`play`){let t=ym(e);t.dayInSeason===1?$(`NEW SEASON — ${t.name} · YEAR ${t.year}`,`good`):t.dayInSeason%7==1?$(`${t.event.name} — ${t.event.detail}`,`good`):e>1&&$(`NEW DAY ${e} — BUYER WANTS ${J.buyerOrder.count} ${J.buyerOrder.grade} JAR${J.buyerOrder.count>1?`S`:``}`,`good`)}return!0}var Cx=``,wx=new R(8304868),Tx=new R(1054764),Ex=new R(12051656),Dx=new R(15770474),Ox=new R(1712184),kx={spring:new R(14282716),summer:new R(16768946),autumn:new R(15253667),winter:new R(12900591)},Ax={spring:new R(13231288),summer:new R(15843726),autumn:new R(14064248),winter:new R(11059678)},jx={spring:new R(8955998),summer:new R(10986589),autumn:new R(10123600),winter:new R(7637402)};function Mx(e){if(!Y||J.mode===`loading`)return;rx+=e/ix,Sx();let t=ym(Math.floor(rx)+1),n=rx%1,r=Math.sin(n*Math.PI*2),i=n*Math.PI*2+Math.PI,a=1-nn.smoothstep(r,-.12,.18),o=Math.cos(n*Math.PI*2)>0,s=Math.max(0,1-Math.abs(r)/.4)*(1-a);P_.position.set(Math.cos(i)*40,6+Math.max(r,0)*36,Math.sin(i)*28),P_.intensity=nn.lerp(2.35,.22,a),P_.color.setHex(s>.45?16756858:a>.6?10401501:16773327),N_.intensity=nn.lerp(1.35,.5,a),N_.color.setHex(a>.55?2372700:15201535),N_.groundColor.setHex(a>.55?1713172:8231506).lerp(jx[t.id],.16),I_.intensity=nn.lerp(.62,.12,a),D_.uniforms.zenith.value.copy(wx).lerp(Tx,a).lerp(kx[t.id],.12),D_.uniforms.horizon.value.copy(Ex).lerp(Dx,s*.85).lerp(Ox,a).lerp(Ax[t.id],.12),j_.background.copy(D_.uniforms.zenith.value),j_.fog.color.copy(D_.uniforms.horizon.value);let c=nn.smoothstep(a,.2,.75);for(let e of Y.scenery?.night||[])e.intensity=c*2.3;Y.moonGarden?.glow&&(Y.moonGarden.glow.intensity=c*1.45);let l=`DAY`;r<-.02?l=`NIGHT`:r<.45&&o?l=`DAWN`:r<.45&&(l=`DUSK`);let u=`${l}|${1+Math.floor(rx)}`;if(u===Cx)return;Cx=u;let d=q(`clock`);d&&(q(`clock-phase`).textContent=l,q(`clock-day`).textContent=`D${1+Math.floor(rx)}`,xx(1+Math.floor(rx)),d.classList.toggle(`night`,l===`NIGHT`),d.classList.toggle(`dusk`,l===`DAWN`||l===`DUSK`))}var Nx=performance.now(),Px=0,Fx=0;function Ix(e){requestAnimationFrame(Ix);let t=Math.min(.05,(e-Nx)/1e3);if(Nx=e,!Y)return;let n=e/1e3;if(J.mode===`title`&&(gv.has(`Space`)||gv.has(`Enter`))&&Vx(),gv.has(`Escape`)&&J.mode===`dress`&&xS(),gv.has(`Escape`)&&J.mode===`shop`&&IS(),gv.has(`Escape`)&&J.mode===`breeding`&&MS(),gv.has(`Escape`)&&J.mode===`settings`&&Jx(),gv.has(`KeyT`)&&J.mode!==`dress`&&J.mode!==`shop`&&J.mode!==`breeding`&&J.mode!==`loading`&&(J.mode===`settings`?Jx():qx()),gv.has(`KeyC`)&&J.mode!==`dress`&&J.mode!==`shop`&&J.mode!==`breeding`&&J.mode!==`settings`&&J.mode!==`loading`&&bS(),J.mode===`play`&&(gv.has(`Digit1`)||gv.has(`Numpad1`)||gv.has(`Digit2`)||gv.has(`Numpad2`))){let e=gv.has(`Digit2`)||gv.has(`Numpad2`)?1:-1;J.strainPick=Du[(Math.max(0,Du.indexOf(J.strainPick))+e+Du.length)%Du.length],X(),Db()}if(gv.has(`KeyH`)&&J.mode===`play`&&Bb(),gv.has(`BracketLeft`)||gv.has(`BracketRight`)){let e=C_||w_();C_=nn.clamp(e+(gv.has(`BracketRight`)?1:-1),1,5),x_(`mm-pixel`,C_),A_()}J.mode===`play`&&(gv.has(`Space`)||gv.has(`KeyF`))&&wy(),gv.clear();for(let e=gy.length-1;e>=0;e--)if(gy[e].t-=t,gy[e].t<=0){let t=gy[e].fn;gy.splice(e,1),t()}if(Zv(t),py(t,n),rb(t),Mx(t),z_.update(n),Px-=t,Px<=0&&Y.house.roof.visible){Px=.32;let e=Y.smokeAt;R_.emit({x:e.x+(Math.random()-.5)*.5,y:e.y,z:e.z+(Math.random()-.5)*.5,vx:.45+Math.random()*.2,vy:.9+Math.random()*.3,vz:.25,life:4,size:.34,grow:1.6,color:15331058,color2:12178406,g:0})}if(Fx-=t,Fx<=0&&J.mode!==`loading`){Fx=.28;let e=q(`clock`)?.classList.contains(`night`);R_.emit({x:(Math.random()-.5)*34,y:.55+Math.random()*2.35,z:-8.5+Math.random()*21,vx:(Math.random()-.5)*.12,vy:.025+Math.random()*.035,vz:(Math.random()-.5)*.1,life:4.8+Math.random()*2,size:.025+Math.random()*.018,color:e?13234075:16773296,color2:e?9428113:16777215,g:0,drag:.02})}R_.update(t),nx(t),mv(n),$b(),Qb(),Eb(),_b(n),cv+=t,(J.mode===`play`||J.mode===`dress`||J.mode===`shop`||J.mode===`breeding`||J.mode===`settings`&&J.returnMode===`play`)&&cv>4&&(cv=0,ov=!0),ov&&(sv+=t,sv>.25&&sS()),S_.setRenderTarget(E_),S_.render(j_,M_),S_.setRenderTarget(null),D_.uniforms.tColor.value=E_.texture,D_.uniforms.tDepth.value=E_.depthTexture,O_.render(S_)}function Lx(){try{let e=window.top&&window.top.document;if(e&&(e.fullscreenElement||e.webkitFullscreenElement))return!0}catch{}return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}var Rx=0;function zx(){if(Lx()||performance.now()-Rx<900)return;Rx=performance.now();let e=[];try{window.top&&window.top.document&&window.top.document.documentElement&&e.push(window.top.document.documentElement)}catch{}e.push(document.documentElement,document.body,S_.domElement);let t=new Set;for(let n of e){if(!n||t.has(n))continue;t.add(n);let e=n.requestFullscreen||n.webkitRequestFullscreen||n.mozRequestFullScreen||n.msRequestFullscreen;if(typeof e==`function`)try{let t=e.call(n);t&&typeof t.catch==`function`&&t.catch(()=>{});return}catch{}}}function Bx(){J.mode!==`play`&&J.mode!==`dress`&&J.mode!==`loading`&&(v_.has(`autostart`)||Tv?.address)&&(zx(),J.mode=`play`,q(`title`).classList.add(`gone`),q(`title`).classList.remove(`dressing`),q(`dress`).classList.add(`hidden`),q(`hud`).classList.remove(`hidden`),yS(!1),vS(q(`btn-you`),!1),vv&&(q(`touch`).classList.remove(`hidden`),Bb(!1)),Db(),Z.yawT=0,Z.distT=27,lv=!0,sS(),mS(),zb())}function Vx(){J.mode!==`title`||Ev||jv()&&Bx()}function Hx(){return C_?C_<=1?`FINE`:`X${C_}`:`AUTO`}function Ux(e){let t=C_||w_();C_=nn.clamp(t+e,1,5),x_(`mm-pixel`,C_),A_(),Gx()}function Wx(){if(!Tv||Tv.provider!==`email`||Ev)return;n(Tv,``);let e=rm({...em()||{v:1,...oS()},wallet:``});e&&Av&&x(Tv,e),q(`set-unlink-ask`)?.classList.add(`hidden`),Yx()}function Gx(){let e=Tv?.provider===`email`&&!!Tv.address,t=e&&!!Tv.wallet;q(`set-account`)&&(q(`set-account`).textContent=e?o(Tv):`NOT SIGNED IN`),q(`btn-set-out`)?.classList.toggle(`hidden`,!e);let n=q(`set-wallet-copy`);n&&(n.textContent=e?t?`This Klever wallet is linked to the account. The garden stays with the email.`:`Connect the Klever extension or app, then approve the signature. This does not send any coins.`:`Sign in with email on the title screen. The wallet connects here.`);let r=q(`set-wallet-who`);r&&!Ev&&(r.textContent=t?`Linked ${Gg(Tv.wallet)}`:e?`No Klever wallet is linked to this account.`:``);let i=q(`btn-set-wallet`);i&&(i.classList.toggle(`hidden`,!e||t),i.disabled=Ev),q(`btn-set-unlink`)?.classList.toggle(`hidden`,!t),t||q(`set-unlink-ask`)?.classList.add(`hidden`);let a=q(`set-wallet-help`);a&&!Ev&&a.classList.add(`hidden`),q(`set-px`)&&(q(`set-px`).textContent=Hx());let s=q(`set-sound`);s&&(s.textContent=um()?`ON`:`OFF`,s.setAttribute(`aria-pressed`,String(um()))),q(`set-fs`)&&(q(`set-fs`).textContent=Lx()?`WINDOW`:`FULL`)}function Kx(){J.mode===`settings`?Jx():qx()}function qx(){L_&&J.mode!==`loading`&&J.mode!==`settings`&&J.mode!==`dress`&&J.mode!==`shop`&&J.mode!==`breeding`&&(J.returnMode=J.mode===`play`?`play`:`title`,J.mode=`settings`,q(`settings`).classList.remove(`hidden`),J.returnMode===`title`?q(`title`).classList.add(`dressing`):(q(`touch`).classList.add(`hidden`),Bb(!1),yS(!1)),vS(q(`btn-settings`),!0),vS(q(`btn-settings-title`),!0),q(`set-wallet-err`)&&(q(`set-wallet-err`).textContent=``),Gx())}function Jx(){if(J.mode!==`settings`)return;q(`settings`).classList.add(`hidden`),q(`title`).classList.remove(`dressing`);let e=J.returnMode===`play`?`play`:`title`;J.mode=e,vS(q(`btn-settings`),!1),vS(q(`btn-settings-title`),!1),e===`play`&&vv&&q(`touch`).classList.remove(`hidden`)}function Yx(){let e=q(`wallet-status`),t=q(`account-form`),n=q(`btn-wallet-switch`),r=Tv?.provider===`email`&&!!Tv.address;if(t?.classList.toggle(`hidden`,r),n?.classList.toggle(`hidden`,!r),q(`press-line`)?.classList.toggle(`hidden`,!r||kv),!e)return;if(!r){e.textContent=`Create an account with email and a password. Your garden is saved to that account.`;let t=document.querySelector(`#dress .dress-note`);t&&(t.textContent=`SAVED ON THIS DEVICE`),Gx();return}e.replaceChildren();let i=document.createElement(`b`);i.textContent=o(Tv);let a=Dv===`new`?`New garden saved to `:Dv===`claimed`?`Your garden is now saved to `:`Welcome back. This garden belongs to `,s=kv?`. Opening the garden saved to this account…`:Ov===`on`?`. It is saved to this account.`:Ov===`error`?`. Saved on this browser. The garden record could not be reached.`:`. It stays on this browser under that account.`;e.append(a,i,s);let c=document.querySelector(`#dress .dress-note`);c&&(c.textContent=`SAVED TO THIS ACCOUNT`),Gx()}function Xx(){let e=q(`btn-set-wallet`),t=q(`set-wallet-who`);e&&(e.disabled=!0),t&&(t.textContent=`Opening Klever Wallet…`),f_();let n=()=>{if(Ev=!1,e&&(e.disabled=!1),Tv?.wallet){Gx();return}let n=q(`set-wallet-help`);n&&__(n,`mobile-app`),t&&(t.textContent=`Klever Wallet is open. Tap Connect wallet, then approve the signature.`)};window.setTimeout(()=>{if(!document.hidden){n();return}let e=()=>{document.hidden||(document.removeEventListener(`visibilitychange`,e),n())};document.addEventListener(`visibilitychange`,e)},1500)}async function Zx(e=!1){if(Ev||Tv?.provider!==`email`||e&&(Tv.wallet||Yg()))return;if(J.mode!==`settings`){if(J.mode===`dress`||J.mode===`shop`||J.mode===`loading`)return;qx()}if(J.mode!==`settings`)return;if(Wg()&&!window.kleverWeb&&!p_()){Xg(),Ev=!0,Xx();return}Xg(),Ev=!0;let t=q(`btn-set-wallet`),r=q(`set-wallet-who`),i=q(`set-wallet-err`);t&&(t.disabled=!0),i&&(i.textContent=``),r&&(r.textContent=Wg()?`Confirm the signature in the Klever Wallet app…`:`Confirm the signature in the Klever extension…`);let a=``,o=``;try{await l(Tv);let e=await o_();n(Tv,e.address),c_();let t=rm({...em()||{v:1,...oS()},wallet:Tv.wallet});t&&Av&&x(Tv,t),Yx()}catch(e){a=e.message||`The wallet could not be connected.`,(e.code===`mobile-app`||e.code===`extension`)&&(o=e.code)}finally{Ev=!1,Gx(),a&&q(`set-wallet-err`)&&(q(`set-wallet-err`).textContent=a);let e=q(`set-wallet-help`);e&&o&&__(e,o)}}async function Qx(e){e.provider===`email`?c_():h(),Tv=e,Av=!1;let r=tm(e.address);Dv=r.note,r.note===`new`?fS():r.save&&pS(r.save),kv=!0,Ov=`off`,Yx();let i={open:!0},a=em(),o=!a&&e.provider===`email`&&Y&&L_?{v:1,...oS()}:null;try{let r=await Promise.race([t(e,a,i,o).catch(()=>({state:`error`,replaced:!1,garden:null})),new Promise((e,t)=>setTimeout(()=>{i.open=!1,t(Error(`timeout`))},8e3))]);if(Ov=r.state,r.replaced&&r.garden){Dv=`loaded`,rm(r.garden,!1);let e=em();e&&pS(e)}else r.seeded&&r.garden&&rm(r.garden,!1);if(Av=r.state===`on`,e.provider===`email`){let t=r.replaced?r.garden?.wallet:em()?.wallet||e.wallet;n(e,t||``)}}catch{Ov=`error`}kv=!1,Yx(),mS(),$x()}function $x(){let e=window.kleverHub;!$x.bound&&e&&typeof e.onAccountChanged==`function`&&($x.bound=!0,e.onAccountChanged(e=>{let t=e?.address;t&&Tv?.provider===`email`&&Tv.wallet&&t!==Tv.wallet&&(n(Tv,``),Yx())}))}async function eS(e){if(Ev||J.mode===`play`)return;let t=q(`account-email`)?.value||``,n=q(`account-password`)?.value||``,r=q(`wallet-status`),i=s(t,n);if(i){r&&(r.textContent=i);return}Ev=!0;let a=[q(`btn-email-in`),q(`btn-email-new`),q(`account-email`),q(`account-password`)];for(let e of a)e&&(e.disabled=!0);r&&(r.textContent=e===`new`?`Creating the account…`:`Signing in…`);try{let i=e===`new`?await f(t,n):await b(t,n),a=q(`account-password`);if(a&&(a.value=``),!i){r&&(r.textContent=`Check that email for a confirmation, then sign in.`);return}await Qx(i),Tv?.provider===`email`&&!Tv.wallet&&v_.get(`klever`)===`1`&&(Ev=!1,await Zx(!0))}catch(e){r&&(r.textContent=e.message||`The account could not be opened.`)}finally{Ev=!1;for(let e of a)e&&(e.disabled=!1)}}function tS(){let e=J.mode===`play`||J.mode===`settings`||J.returnMode===`play`;J.mode===`settings`&&Jx(),sS(),i(),l_(),h(),S(),nm(),Tv=null,Dv=``,Ov=`off`,Av=!1;let t=q(`account-password`);t&&(t.value=``),e&&(J.mode=`title`,q(`title`).classList.remove(`gone`,`dressing`),q(`hud`).classList.add(`hidden`),q(`touch`).classList.add(`hidden`)),Yx(),mS()}function nS(){q(`account-form`)?.addEventListener(`submit`,e=>{e.preventDefault(),eS(`in`)}),q(`btn-email-new`)?.addEventListener(`click`,()=>eS(`new`)),q(`btn-wallet-switch`)?.addEventListener(`click`,()=>tS()),q(`btn-set-wallet`)?.addEventListener(`click`,()=>Zx()),q(`btn-set-unlink`)?.addEventListener(`click`,()=>{q(`set-unlink-ask`)?.classList.remove(`hidden`),q(`set-wallet-err`)&&(q(`set-wallet-err`).textContent=``)}),q(`btn-set-unlink-no`)?.addEventListener(`click`,()=>q(`set-unlink-ask`)?.classList.add(`hidden`)),q(`btn-set-unlink-yes`)?.addEventListener(`click`,()=>Wx()),q(`btn-set-out`)?.addEventListener(`click`,()=>tS()),q(`btn-settings`)?.addEventListener(`click`,e=>{Nv(e),Kx()}),q(`btn-settings-title`)?.addEventListener(`click`,e=>{Nv(e),Kx()}),q(`btn-settings-close`)?.addEventListener(`click`,e=>{Nv(e),Jx()}),q(`set-sound`)?.addEventListener(`click`,()=>{let e=dm(!um());Gx(),e&&hm(`ui`)}),q(`set-px-down`)?.addEventListener(`click`,()=>Ux(-1)),q(`set-px-up`)?.addEventListener(`click`,()=>Ux(1)),q(`set-fs`)?.addEventListener(`click`,()=>{Lx()?document.exitFullscreen?.():zx(),setTimeout(Gx,200)})}var rS=[`...XX...`,`X..XX..X`,`XX.XX.XX`,`.XXXXXX.`,`X.XXXX.X`,`..XXXX..`,`...XX...`,`...XX...`,`...XX...`,`...XX...`];for(let e of[`leaf-icon`,`leaf-logo`]){let t=q(e),n=t.getContext(`2d`);t.width=8,t.height=10,rS.forEach((e,t)=>[...e].forEach((e,r)=>{e===`X`&&(n.fillStyle=t>6?`#6fa23f`:(r+t)%3==0?`#7fb44a`:`#93c85a`,n.fillRect(r,t,1,1))}))}function iS(e){return{state:e.state,stage:e.stage,prog:e.prog,water:e.water,stress:e.stress,age:e.age,strain:e.strain||`bd`,fromClone:!!e.fromClone,ripe:e.ripe||0,holdVeg:!!e.holdVeg,topped:!!e.topped,trained:!!e.trained,lollipop:!!e.lollipop}}function aS(e){return e?{strain:e.strain||`bd`,grade:e.grade,grams:e.grams|0,t:e.t||0,dry:e.dry||0,hold:e.hold||0,dropped:!!e.dropped,cure:e.cure||0,burped:!!e.burped,missed:!!e.missed,needsBurp:!!e.needsBurp}:null}function oS(){return{dayClock:rx,leagueWeek:J.leagueWeek|0,leagueScore:J.leagueScore|0,leaguePaidWeek:J.leaguePaidWeek|0,buyerOrder:J.buyerOrder?{...J.buyerOrder}:null,look:J.look||L_.getLook(),mota:J.mota|0,grams:J.grams|0,harvested:J.harvested|0,reputation:J.reputation|0,jars:{AAAA:J.jars.AAAA|0,AAA:J.jars.AAA|0,AA:J.jars.AA|0,A:J.jars.A|0},wet:J.wet.slice(0,12).map(e=>({grade:e.grade,grams:e.grams|0,strain:e.strain||`bd`,trimmed:!!e.trimmed})),hybrids:Lu(),genetics:[...new Set(J.genetics)].filter(e=>!!Eu[e]),seeds:Object.fromEntries(Du.map(e=>[e,J.seeds[e]|0])),clones:J.clones.slice(0,8).map(e=>({strain:U(e.strain).id})),nutrients:J.nutrients|0,cubes:J.cubes|0,strainPick:Eu[J.strainPick]?J.strainPick:`bd`,px:Q.x,py:Q.y,pz:Q.z,facing:Q.facing,warehouse:!!Y.warehouse.owned,greenhouse:!!Y.greenhouse.owned,moonGarden:!!Y.moonGarden.owned,lights:Y.warehouse.lights===`flower`?`flower`:`veg`,plots:B_.map(iS),wh:H_.map(iS),mothers:Y.house.mothers.map(e=>({state:e.state||`empty`,strain:e.strain,stage:e.stage|0,prog:e.prog||0,water:e.water,cool:e.cool||0})),trays:Y.house.trays.map(e=>({state:e.state,strain:e.strain,t:e.t||0})),veg:Y.house.veg.filter(e=>e.room!==`center`).map(e=>({state:e.state,strain:e.strain,t:e.t||0})),breed:Y.house.veg.filter(e=>e.room===`center`).map(e=>({state:e.state,strain:e.strain,t:e.t||0})),hooks:Y.shed.hooks.map(e=>aS(e.item)),cure:Y.shed.cureJars.map(e=>aS(e.item)),unlocks:{mother2:!!Y.house.mother2,tube2:!!Y.house.tube2,vegWest:!!Y.house.vegWest,vegCenter:!!Y.house.vegCenter,beds:op.map((e,t)=>!B_[t*4]?.locked)},...Tv?.provider===`email`&&Tv.email?{accountEmail:Tv.email}:{},...Tv?.wallet?{wallet:Tv.wallet}:{}}}function sS(){if(!lv||!Y||!L_)return;ov=!1,sv=0;let e=rm(oS());e&&Av&&Tv&&x(Tv,e,e=>{e?.conflict&&(Av=!1)})}function cS(e,t,n){e.state=n.state===`growing`||n.state===`ready`||n.state===`ripening`?n.state:`empty`,e.stage=Math.max(0,Math.min(4,n.stage|0)),e.prog=Number(n.prog)||0,e.water=Number(n.water)||0,e.stress=Number(n.stress)||0,e.age=Number(n.age)||0,e.ripe=Number(n.ripe)||0,e.holdVeg=!!n.holdVeg&&e.state===`growing`,e.strain=U(n.strain).id,e.fromClone=!!n.fromClone,e.topped=!!n.topped,e.trained=!!n.trained,e.lollipop=!!n.lollipop,e.pop=0,t.geometry=av(e.state===`empty`?0:e.stage,e.strain),t.visible=e.state!==`empty`}function lS(e,t){!t||!Ty.includes(t.grade)?(e.item=null,e.mesh.visible=!1):(e.item={strain:U(t.strain).id,grade:t.grade,grams:t.grams|0,t:Number(t.t)||0,dry:Number(t.dry)||0,hold:Number(t.hold)||0,dropped:!!t.dropped,cure:Number(t.cure)||0,burped:!!t.burped,missed:!!t.missed,needsBurp:!!t.needsBurp,sealed:!1},e.nug&&(e.mesh.geometry=Y.shed.nugGeo[e.item.strain]||Y.shed.nugGeo.bd),e.mesh.visible=!0)}function uS(){for(let e of Y.house.mothers){let t=e.state===`growing`||e.state===`mother`;if(e.plant.visible=t,!t)continue;let n=e.state===`mother`?2:e.stage||0;e.plant.geometry=av(n,e.strain||`bd`),e.plant.scale.setScalar(e.state===`mother`?1.2:.5+n*.3)}for(let e of Y.house.trays){let t=e.state===`rooting`||e.state===`ready`;e.plant.visible=t,t&&(e.plant.geometry=av(+(e.state===`ready`),e.strain||`bd`),e.plant.scale.setScalar(.48))}for(let e of Y.house.veg){let t=e.state===`veg`||e.state===`growing`||e.state===`ready`;e.plant.visible=t,t&&(e.plant.geometry=av(2,e.strain||`bd`),e.plant.scale.setScalar(e.state===`ready`?.9:.72+.18*Math.min(1,(e.t||0)/ev)))}}function dS(e,t){e.forEach((e,n)=>{e.state=`empty`,e.stage=0,e.prog=0,e.water=0,e.stress=0,e.age=0,e.strain=`bd`,e.ripe=0,e.holdVeg=!1,e.fromClone=!1,e.topped=!1,e.trained=!1,e.lollipop=!1,e.pop=0,t[n].visible=!1,t[n].geometry=av(0,`bd`)})}function fS(){rx=.32,yb=``,J.seeds=Au(),J.clones=[],J.nutrients=0,J.cubes=0,J.mota=0,J.jars={AAAA:0,AAA:0,AA:0,A:0},J.grams=0,J.harvested=0,J.reputation=0,J.leagueWeek=1,J.leagueScore=0,J.leaguePaidWeek=0,J.buyerOrder=dx(1),xx(1),J.wet=[],J.genetics=[],J.hybrids=[],Ru(),J.strainPick=`bd`,Q.x=0,Q.z=-6.3,Q.y=0,Y.house.upper.visible=!1,Q.facing=J.mode===`dress`?.62:0,dS(B_,V_),B_.forEach((e,t)=>{e.locked=t>=Y.slots.length-Y.greenhouse.slots.length||!!(t/4|0)}),dS(H_,U_),Y.greenhouse.owned=!1,Y.greenhouse.forSale.visible=!0,Y.moonGarden.owned=!1,Y.moonGarden.forSale.visible=!0;let e=Y.slots.length-Y.greenhouse.slots.length;for(let t=0;t<Y.greenhouse.slots.length;t++)B_[e+t].locked=!0;let t=Y.warehouse;t.owned=!1,t.gateOpen=!1,t.open=!1,t.lights=`veg`,iv(t),t.forSale.visible=!0,Y.lot.mesh.visible=!0,Y.house.open=!1,Y.shed.open=!1,Y.house.mother2=!1,Y.house.tube2=!1,Y.house.vegWest=!1,Y.house.vegCenter=!1;for(let e of Y.house.mothers)Object.assign(e,{state:`empty`,strain:null,stage:0,prog:0,water:1,cool:0});for(let e of Y.house.trays)Object.assign(e,{state:`empty`,strain:null,t:0});for(let e of Y.house.veg)Object.assign(e,{state:`empty`,strain:null,t:0});for(let e of Y.shed.hooks)e.item=null,e.mesh.visible=!1;for(let e of Y.shed.cureJars)e.item=null,e.mesh.visible=!1;uS()}function pS(e){rx=Number.isFinite(e.dayClock)?Math.max(0,e.dayClock):.32;let t=Math.floor(rx)+1,n=e.buyerOrder;yb=``,Ru();for(let t of Array.isArray(e.hybrids)?e.hybrids:[])Fu(t);J.hybrids=Lu(),J.genetics=Array.isArray(e.genetics)?[...new Set(e.genetics.filter(e=>Eu[e]))]:[],J.mota=e.mota|0,J.harvested=e.harvested|0,J.reputation=Math.max(0,Math.min(1e7,e.reputation|0)),J.leagueWeek=Math.max(1,e.leagueWeek|0||Math.floor(rx/7)+1),J.leagueScore=Math.max(0,Math.min(1e6,e.leagueScore|0)),J.leaguePaidWeek=Math.max(0,e.leaguePaidWeek|0),J.leagueWeek<Math.floor(rx/7)+1&&(J.leagueWeek=Math.floor(rx/7)+1,J.leagueScore=0);let r=dx(t);J.buyerOrder=n&&n.day===t&&Ty.includes(n.grade)?{...r,...n,customer:typeof n.customer==`string`?n.customer:r.customer,customerTier:typeof n.customerTier==`string`?n.customerTier:r.customerTier,customerColor:typeof n.customerColor==`string`?n.customerColor:r.customerColor,bonus:Number.isFinite(n.bonus)?Math.max(0,n.bonus|0):r.bonus,claimed:!!n.claimed}:r;for(let t of Ty)J.jars[t]=Math.max(0,e.jars?.[t]|0);Oy(),J.wet=Array.isArray(e.wet)?e.wet.slice(0,12).map(e=>({grade:Ty.includes(e.grade)?e.grade:`A`,grams:e.grams|0,strain:U(e.strain).id,trimmed:e.trimmed===void 0||!!e.trimmed})):[],J.seeds=Object.fromEntries(Du.map(t=>[t,Math.max(0,e.seeds?.[t]|0)])),J.clones=Array.isArray(e.clones)?e.clones.slice(0,8).map(e=>({strain:U(e.strain||e).id})):[],J.nutrients=Math.max(0,e.nutrients|0),J.cubes=Math.max(0,e.cubes|0),J.strainPick=Eu[e.strainPick]?e.strainPick:`bd`,J.look=gu(e.look),L_.setLook(J.look),Number.isFinite(e.px)&&(Q.x=e.px),Number.isFinite(e.py)&&(Q.y=e.py),Number.isFinite(e.pz)&&(Q.z=e.pz),Number.isFinite(e.facing)&&(Q.facing=e.facing),Array.isArray(e.plots)&&e.plots.forEach((e,t)=>B_[t]&&e&&cS(B_[t],V_[t],e)),Array.isArray(e.wh)&&e.wh.forEach((e,t)=>H_[t]&&e&&cS(H_[t],U_[t],e)),Y.house.mothers.forEach((t,n)=>{let r=e.mothers?.[n];if(!r)return;let i=r.state===`growing`||r.state===`mother`;t.state=i?r.state:`empty`,t.strain=i?U(r.strain).id:null,t.stage=i?Math.max(0,Math.min(2,r.stage|0)):0,t.prog=Number(r.prog)||0,t.water=Number.isFinite(r.water)?r.water:1,t.cool=Number(r.cool)||0}),Y.house.trays.forEach((t,n)=>{let r=e.trays?.[n];if(!r)return;let i=r.state===`rooting`||r.state===`ready`;t.state=i?r.state:`empty`,t.strain=i?U(r.strain).id:null,t.t=Number(r.t)||0});let i=Y.house.veg.filter(e=>e.room!==`center`),a=Y.house.veg.filter(e=>e.room===`center`);Y.house.veg.forEach((t,n)=>{let r=t.room===`center`?e.breed?.[a.indexOf(t)]||e.veg?.[n]:e.veg?.[i.indexOf(t)]||e.veg?.[n];if(!r)return;let o=t.room===`center`?[`growing`,`veg`,`ready`].includes(r.state):[`veg`,`ready`].includes(r.state);t.state=o?t.room===`center`?r.state===`ready`?`ready`:`growing`:r.state:`empty`,t.strain=o?U(r.strain).id:null,t.t=Number(r.t)||0});let o=e.unlocks,s=!o;Y.house.mother2=s?!0:!!o.mother2,Y.house.tube2=s?!0:!!o.tube2,Y.house.vegWest=s?!0:!!o.vegWest,Y.house.vegCenter=s?!0:!!o.vegCenter;let c=!s&&Array.isArray(o.beds)?o.beds:null;B_.forEach((e,t)=>{e.locked=c?c[t/4|0]===!1:!1}),Y.shed.hooks.forEach((t,n)=>lS(t,e.hooks?.[n])),Y.shed.cureJars.forEach((t,n)=>lS(t,e.cure?.[n]));let l=!!e.greenhouse;Y.greenhouse.owned=l,Y.greenhouse.forSale.visible=!l,Y.moonGarden.owned=!!e.moonGarden,Y.moonGarden.forSale.visible=!Y.moonGarden.owned;let u=Y.slots.length-Y.greenhouse.slots.length;for(let e=0;e<Y.greenhouse.slots.length;e++)B_[u+e].locked=!l;let d=!!e.warehouse;Y.warehouse.owned=d,Y.warehouse.gateOpen=d,Y.warehouse.open=!1,Y.warehouse.forSale.visible=!d,Y.warehouse.lights=e.lights===`flower`?`flower`:`veg`,iv(Y.warehouse),Y.lot.mesh.visible=!d,Y.house.open=!1,Y.shed.open=!1,Y.shed.contains(Q.x,Q.z)&&(Y.shed.open=!0),Y.house.contains(Q.x,Q.z)&&(Y.house.open=!0),Y.house.upper.visible=Q.y>1.45||Y.house.onStair(Q.x,Q.z,Q.y),d&&Y.warehouse.contains(Q.x,Q.z)&&(Y.warehouse.open=!0),uS()}function mS(){let e=!!Tv?.address,t=e&&!!em();q(`press-desk`).textContent=t?`CLICK OR SPACE TO CONTINUE`:`CLICK OR SPACE TO START`,q(`press-touch`).textContent=t?`TAP TO CONTINUE`:`TAP TO START`,q(`btn-new`).classList.toggle(`hidden`,!t),q(`press-line`)?.classList.toggle(`hidden`,!e||kv),Yx()}var hS=0,gS=0;function _S(){let e=q(`dress-rows`);e.replaceChildren();for(let{key:t,label:n}of au){let r=su[t],i=r.find(e=>e.id===J.look?.[t])||r[0],a=document.createElement(`div`);a.className=`dress-row`;let o=document.createElement(`span`);o.textContent=n;let s=document.createElement(`button`);s.type=`button`,s.className=`tbtn`,s.dataset.k=t,s.dataset.d=`-1`,s.setAttribute(`aria-label`,`Previous ${n}`),s.textContent=`<`;let c=document.createElement(`b`);c.textContent=i.name;let l=document.createElement(`button`);l.type=`button`,l.className=`tbtn`,l.dataset.k=t,l.dataset.d=`1`,l.setAttribute(`aria-label`,`Next ${n}`),l.textContent=`>`,a.append(o,s,c,l),e.append(a)}}function vS(e,t){e&&(e.classList.toggle(`on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`))}function yS(e){q(`inv`).classList.toggle(`hidden`,!e),vS(q(`btn-inv`),e)}function bS(){L_&&J.mode!==`loading`&&J.mode!==`dress`&&J.mode!==`shop`&&J.mode!==`settings`&&J.mode!==`breeding`&&(J.returnMode=J.mode===`play`?`play`:`title`,J.mode=`dress`,hS=Q.facing,Q.facing=.62,q(`dress`).classList.remove(`hidden`),q(`title`).classList.add(`dressing`),Bb(!1),yS(!1),vS(q(`btn-character`),!0),J.returnMode===`play`&&(q(`brand`).classList.add(`hidden`),q(`btn-inv`).classList.add(`hidden`),q(`touch`).classList.add(`hidden`),vS(q(`btn-you`),!0)),_S())}function xS(){if(J.mode!==`dress`)return;q(`dress`).classList.add(`hidden`),q(`title`).classList.remove(`dressing`),Q.facing=hS;let e=J.returnMode===`play`?`play`:`title`;J.mode=e,vS(q(`btn-character`),!1),vS(q(`btn-you`),!1),q(`brand`).classList.remove(`hidden`),q(`btn-inv`).classList.remove(`hidden`),e===`play`&&(q(`hud`).classList.remove(`hidden`),vv&&q(`touch`).classList.remove(`hidden`),Z.distT=27,Z.yawT=0),lv=!0,sS(),mS()}function SS(e,t){let n=su[e];if(!n)return;let r=n[(Math.max(0,n.findIndex(t=>t.id===J.look[e]))+t+n.length)%n.length];J.look={...J.look,[e]:r.id},L_.setLook(J.look),_S(),X()}function CS(){lv=!0;let e={...J.look||L_.getLook()};fS(),J.look=e,L_.setLook(e),J.mode===`dress`&&(Q.facing=.62),sS(),mS(),Db(),$(`NEW GROW — ONE MOTHER, ONE TUBE, ONE GROW BOX`,`good`)}function wS(e){gS>performance.now()?(gS=0,e.textContent=`NEW GROW`,CS()):(gS=performance.now()+4e3,e.textContent=`CONFIRM`,setTimeout(()=>{e.textContent===`CONFIRM`&&(e.textContent=`NEW GROW`)},4e3))}function TS(e,t,n){let r=U(t);e.className=`chip`+(n?` on`:``),e.replaceChildren();let i=document.createElement(`i`);i.style.background=ib(r.bud[0]),e.append(i,document.createTextNode(`${r.short} ${J.seeds[t]|0}`))}function ES(e){let t=q(`strains`);if(!e){t.classList.add(`hidden`);return}t.classList.remove(`hidden`);let n=Eu[J.strainPick]?J.strainPick:`bd`;if(t.dataset.pick===n&&t.childElementCount===Du.length)Du.forEach((e,r)=>TS(t.children[r],e,e===n));else{t.dataset.pick=n,t.replaceChildren();for(let e of Du){let r=document.createElement(`button`);r.type=`button`,TS(r,e,e===n),r.dataset.strain=e,r.addEventListener(`pointerdown`,n=>{Nv(n),J.strainPick=e,t.dataset.pick=``,ES(!0),X(),Db()}),t.append(r)}}}function DS(e){let t=U(e);return`${t.short}  FLOWER ${Math.round(t.flower*100)}% · VEG ${Math.round(t.veg*100)}% · SIZE ${Math.round(t.stature*100)}% · FROST ${Math.round(t.frost*100)}%`}function OS(){let e=q(`breed-parent-a`),t=q(`breed-parent-b`),n=e.value,r=t.value,i=J.genetics.filter(e=>!!Eu[e]);for(let n of[e,t])if(n.replaceChildren(),!i.length){let e=document.createElement(`option`);e.value=``,e.textContent=`NO GENETICS READ YET`,n.append(e)}else for(let e of i){let t=document.createElement(`option`);t.value=e,t.textContent=U(e).name,n.append(t)}i.includes(n)?e.value=n:i[0]&&(e.value=i[0]),i.includes(r)?t.value=r:i[1]?t.value=i[1]:i[0]&&(t.value=i[0]),kS()}function kS(){let e=q(`breed-parent-a`).value,t=q(`breed-parent-b`).value,n=!!e&&!!t&&e!==t&&!!Eu[e]&&!!Eu[t];q(`breed-parent-a-readout`).textContent=e?DS(e):`HARVEST A PLANT TO READ ITS GENETICS`,q(`breed-parent-b-readout`).textContent=t?DS(t):`A SECOND DISTINCT GENETIC READING IS REQUIRED`;let r=q(`breed-offspring-readout`);if(n){let n=U(e),i=U(t),a=e=>Math.round((n[e]+i[e])/2*100);r.textContent=`OFFSPRING PREVIEW  FLOWER ${a(`flower`)}% · VEG ${a(`veg`)}% · SIZE ${a(`stature`)}% · FROST ${a(`frost`)}% · FINISH ${((n.weeks+i.weeks)/2).toFixed(1)} WK`}else r.textContent=`CHOOSE TWO DISTINCT READINGS TO PREVIEW THEIR BLENDED TRAITS.`;let i=q(`btn-breed-cross`);i.disabled=!n,q(`breed-status`).textContent=J.genetics.length<2?`HARVEST TWO DIFFERENT CULTIVARS TO BUILD YOUR GENETICS LIBRARY.`:n?`READY TO CROSS. OFFSPRING INHERITS BLENDED PARENT TRAITS.`:`CHOOSE TWO DIFFERENT PARENTS.`}function AS(){let e=q(`breed-parent-a`).value,t=q(`breed-parent-b`).value;if(!e||!t||e===t)return $(`CHOOSE TWO DIFFERENT PARENTS`);let n=Iu(e,t);if(!n)return $(`COULD NOT CREATE THAT CROSS`);J.hybrids=Lu(),J.seeds[n.id]=(J.seeds[n.id]|0)+1,J.strainPick=n.id,q(`breed-status`).textContent=`NEW CROSS: ${n.name}. ONE TRIAL SEED ADDED TO YOUR BAG.`,$(`${n.short} HYBRID CREATED — PLANT THE TRIAL SEED IN A BREEDING POT`,`good`),cx(24,`NEW HYBRID`),Db(),X()}function jS(){return J.mode===`play`?Y.house.vegCenter?(J.mode=`breeding`,Q.cool=.25,q(`breeding`).classList.remove(`hidden`),q(`touch`).classList.add(`hidden`),kb.style.display=`none`,OS(),q(`breed-parent-a`)?.focus({preventScroll:!0}),!0):Gy(`vegCenter`,Cd.vegCenter,`BREEDING LAB`):!0}function MS(){J.mode===`breeding`&&(q(`breeding`).classList.add(`hidden`),J.mode=`play`,vv&&q(`touch`).classList.remove(`hidden`))}function NS(){q(`btn-breeding-close`).addEventListener(`click`,e=>{Nv(e),MS()}),q(`btn-breed-cross`).addEventListener(`click`,e=>{Nv(e),AS()}),q(`breed-parent-a`).addEventListener(`change`,kS),q(`breed-parent-b`).addEventListener(`change`,kS)}function PS(){q(`shop-mota`).textContent=String(J.mota|0);let e=q(`shop-rows`);e.replaceChildren();for(let t of Ad){let n=document.createElement(`div`);n.className=`shop-row`;let r=document.createElement(`div`);r.className=`shop-name`;let i=document.createElement(`b`);i.textContent=t.name;let a=document.createElement(`span`);a.textContent=t.detail,r.append(i,a);let o=document.createElement(`b`);o.className=`shop-cost`,o.textContent=`${t.cost}`;let s=document.createElement(`button`);s.type=`button`,s.className=`tbtn`,s.dataset.buy=t.id,s.textContent=J.mota>=t.cost?`BUY`:`NEED`,n.append(r,o,s),e.append(n)}}function FS(){return J.mode===`play`&&(J.mode=`shop`,Q.cool=.25,q(`shop`).classList.remove(`hidden`),q(`touch`).classList.add(`hidden`),kb.style.display=`none`,PS()),!0}function IS(){J.mode===`shop`&&(q(`shop`).classList.add(`hidden`),J.mode=`play`,vv&&q(`touch`).classList.remove(`hidden`))}function LS(e){let t=Ad.find(t=>t.id===e);if(t){if(J.mota<t.cost)return $(`NEED ${t.cost} MOTA`);J.mota-=t.cost,t.kind===`seed`?J.seeds[t.strain]=(J.seeds[t.strain]|0)+t.n:t.kind===`nutrient`?J.nutrients+=t.n:J.cubes+=t.n,$(`${t.name} BOUGHT`,`good`),Db(),PS(),X()}}function RS(){q(`btn-shop-close`).addEventListener(`click`,e=>{Nv(e),IS()}),q(`shop-rows`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-buy]`);t&&(Nv(e),LS(t.dataset.buy))})}function zS(){let e=e=>{Nv(e),J.mode===`dress`?xS():bS()};q(`btn-character`).addEventListener(`click`,e),q(`btn-you`).addEventListener(`click`,e),q(`btn-inv`).addEventListener(`click`,e=>{Nv(e),J.mode===`play`&&yS(q(`inv`).classList.contains(`hidden`))}),q(`strain-now`).addEventListener(`click`,e=>{Nv(e),J.mode===`play`&&(J.strainPick=Du[(Math.max(0,Du.indexOf(J.strainPick))+1)%Du.length],X(),Db())});let t=e=>{Nv(e),J.mode===`play`&&Bb()};q(`bag-filters`)?.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-bag-filter]`);if(!t)return;let n=t.dataset.bagFilter;if([`all`,`seeds`,`harvest`,`supplies`].includes(n)&&n!==pb){pb=n,q(`bag-grid`).dataset.sig=``;for(let e of q(`bag-filters`).querySelectorAll(`button[data-bag-filter]`)){let n=e===t;e.setAttribute(`aria-pressed`,n?`true`:`false`),e.classList.toggle(`on`,n)}gb(J.strainPick)}}),q(`weather`).addEventListener(`click`,e=>{Nv(e);let t=q(`weather-forecast`),n=t.classList.contains(`hidden`);t.classList.toggle(`hidden`,!n),q(`weather`).setAttribute(`aria-expanded`,n?`true`:`false`),n&&bx()}),q(`weather-forecast-close`).addEventListener(`click`,e=>{Nv(e),q(`weather-forecast`).classList.add(`hidden`),q(`weather`).setAttribute(`aria-expanded`,`false`),q(`weather`).focus({preventScroll:!0})}),addEventListener(`pointerdown`,e=>{e.target.closest?.(`#weather-forecast, #weather`)||(q(`weather-forecast`)?.classList.add(`hidden`),q(`weather`)?.setAttribute(`aria-expanded`,`false`))}),q(`tasks-toggle`).addEventListener(`click`,()=>{Tb(!bb)}),q(`btn-league`)?.addEventListener(`click`,()=>{let e=q(`league-panel`),t=e.classList.contains(`hidden`);e.classList.toggle(`hidden`,!t),q(`btn-league`).setAttribute(`aria-expanded`,t?`true`:`false`),t&&yx()}),addEventListener(`pointerdown`,e=>{e.target.closest?.(`#league-panel, #btn-league`)||(q(`league-panel`)?.classList.add(`hidden`),q(`btn-league`)?.setAttribute(`aria-expanded`,`false`))}),addEventListener(`pointerdown`,e=>{bb&&!e.target.closest?.(`#tasks`)&&Tb(!1)}),q(`btn-help-hud`).addEventListener(`click`,t),q(`btn-help-close`).addEventListener(`click`,t),q(`btn-dress-done`).addEventListener(`click`,e=>{Nv(e),xS()}),q(`btn-new`).addEventListener(`click`,e=>{Nv(e),wS(q(`btn-new`))}),q(`btn-dress-new`).addEventListener(`click`,e=>{Nv(e),wS(q(`btn-dress-new`))}),q(`dress-rows`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-k]`);t&&(Nv(e),SS(t.dataset.k,Number(t.dataset.d)||1))})}function BS(){let e=em();lv=!!e,Y=Kp(),j_.add(Y.group),L_=Tu(e?.look),J.look=L_.getLook(),j_.add(L_.root),R_=new qp(j_),z_=new Yp(j_),dv(),Qv(),$v(),Xb(),pv(),e&&pS(e),A_(),addEventListener(`resize`,A_),visualViewport?.addEventListener(`resize`,A_),addEventListener(`fullscreenchange`,A_),addEventListener(`webkitfullscreenchange`,A_);let t=e=>{(J.mode===`play`||J.mode===`shop`||J.mode===`dress`||J.mode===`settings`||J.mode===`breeding`||J.mode===`enterprise`)&&zx()};addEventListener(`pointerdown`,t,!0),addEventListener(`touchend`,t,!0),addEventListener(`orientationchange`,()=>setTimeout(A_,120)),q(`welcome-close`)?.addEventListener(`click`,Rb),q(`welcome-help`)?.addEventListener(`click`,()=>{Rb(),Bb(!0)}),q(`welcome`)?.addEventListener(`keydown`,e=>{if(e.key===`Escape`){e.preventDefault(),Rb();return}if(e.key!==`Tab`)return;let t=[...q(`welcome`).querySelectorAll(`button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])`)];if(!t.length)return;let n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}),q(`btn-guide-open`)?.addEventListener(`click`,Lb),Kv(),zS(),RS(),By(),NS(),nS(),wv(Cv());let n=()=>wv(Cv());matchMedia(`(max-width: 820px)`).addEventListener(`change`,n),matchMedia(`(pointer: coarse)`).addEventListener(`change`,n),J.mode=`title`,document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&(sS(),i())}),addEventListener(`pagehide`,()=>{sS(),i()}),window.__mm={scene:j_,renderer:S_,state:J,cam:Z,P:Q,slotsData:B_,whData:H_,world:Y,camera:M_,player:L_,startGame:Bx,act:wy,setStage:ey,plantMeshes:V_,whMeshes:U_,stick:_v,openDress:bS,closeDress:xS,openShop:FS,closeShop:IS,openEnterprise:Ly,closeEnterprise:Ry,loadSponsoredCampaign:zy,buySupply:LS,newGrow:CS,flushSave:sS,loadSave:em,onWallet:Zx,openSettings:qx,closeSettings:Jx,get day(){return rx},set day(e){rx=e}},VS()}async function VS(){let e=c();e?await Qx(e):Yx(),mS(),Db(),v()&&zy(),q(`loading`).classList.add(`gone`),v_.has(`autostart`)?Bx():e?.provider===`email`&&!e.wallet&&v_.get(`klever`)===`1`&&!Yg()&&setTimeout(()=>Zx(!0),600)}requestAnimationFrame(()=>setTimeout(BS,30)),requestAnimationFrame(Ix);