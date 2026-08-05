(()=>{var Qf=0,tu=1,tp=2;var go=1,gc=2,os=3,Pn=0,qe=1,un=2,ti=0,fr=1,eu=2,nu=3,iu=4,ep=5;var Oi=100,np=101,ip=102,rp=103,sp=104,op=200,ap=201,cp=202,lp=203,Ta=204,Ea=205,hp=206,up=207,dp=208,fp=209,pp=210,mp=211,gp=212,xp=213,_p=214,Ca=0,Ra=1,Ia=2,pr=3,Pa=4,Da=5,La=6,Na=7,ru=0,yp=1,vp=2,On=0,su=1,ou=2,au=3,cu=4,lu=5,hu=6,uu=7;var du=300,Xi=301,xr=302,xc=303,_c=304,xo=306,Ua=1e3,Zn=1001,Ba=1002,Ne=1003,bp=1004;var _o=1005;var Xe=1006,yc=1007;var qi=1008;var on=1009,vc=1010,bc=1011,_r=1012,yo=1013,An=1014,ln=1015,ei=1016,Mc=1017,Sc=1018,as=1020,fu=35902,pu=35899,mu=1021,gu=1022,sn=1023,Jn=1026,Yi=1027,wc=1028,cs=1029,_i=1030,vo=1031;var bo=1033,Mo=33776,So=33777,wo=33778,Ao=33779,Ac=35840,Tc=35841,Ec=35842,Cc=35843,Rc=36196,Ic=37492,Pc=37496,Dc=37488,Lc=37489,To=37490,Nc=37491,Uc=37808,Bc=37809,Fc=37810,Oc=37811,zc=37812,Vc=37813,kc=37814,Gc=37815,Hc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,$c=37821,Zc=36492,Jc=36494,Kc=36495,jc=36283,Qc=36284,Eo=36285,tl=36286;var Vs=2300,Fa=2301,Aa=2302,Fh=2303,Oh=2400,zh=2401,Vh=2402;var Mp=3200;var el=0,Sp=1,yi="",rn="srgb",ks="srgb-linear",Gs="linear",oe="srgb";var hr=7680;var kh=519,wp=512,Ap=513,Tp=514,nl=515,Ep=516,Cp=517,il=518,Rp=519,Gh=35044;var xu="300 es",In=2e3,Zr=2001;function Yg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ip(){let i=Hs("canvas");return i.style.display="block",i}var gf={},Jr=null;function _u(...i){let t="THREE."+i.shift();Jr?Jr("log",t,...i):console.log(t,...i)}function Pp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Pp(i);let t="THREE."+i.shift();if(Jr)Jr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=Pp(i);let t="THREE."+i.shift();if(Jr)Jr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function dr(...i){let t=i.join(" ");t in gf||(gf[t]=!0,Ht(...i))}function Dp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Lp={[Ca]:Ra,[Ia]:La,[Pa]:Na,[pr]:Da,[Ra]:Ca,[La]:Ia,[Na]:Pa,[Da]:pr},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var oh=Math.PI/180,Oa=180/Math.PI;function ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Zg(i,t){return(i%t+t)%t}function ah(i,t,e){return(1-e)*i+e*t}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wu=class wu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wu.prototype.isVector2=!0;var ht=wu,jn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],u=n[r+1],d=n[r+2],m=n[r+3],f=s[o+0],g=s[o+1],_=s[o+2],A=s[o+3];if(m!==A||l!==f||u!==g||d!==_){let x=l*f+u*g+d*_+m*A;x<0&&(f=-f,g=-g,_=-_,A=-A,x=-x);let y=1-a;if(x<.9995){let w=Math.acos(x),p=Math.sin(w);y=Math.sin(y*w)/p,a=Math.sin(a*w)/p,l=l*y+f*a,u=u*y+g*a,d=d*y+_*a,m=m*y+A*a}else{l=l*y+f*a,u=u*y+g*a,d=d*y+_*a,m=m*y+A*a;let w=1/Math.sqrt(l*l+u*u+d*d+m*m);l*=w,u*=w,d*=w,m*=w}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],u=n[r+2],d=n[r+3],m=s[o],f=s[o+1],g=s[o+2],_=s[o+3];return t[e]=a*_+d*m+l*g-u*f,t[e+1]=l*_+d*f+u*m-a*g,t[e+2]=u*_+d*g+a*f-l*m,t[e+3]=d*_-a*m-l*f-u*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),d=a(r/2),m=a(s/2),f=l(n/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*m+u*g*_,this._y=u*g*m-f*d*_,this._z=u*d*_+f*g*m,this._w=u*d*m-f*g*_;break;case"YXZ":this._x=f*d*m+u*g*_,this._y=u*g*m-f*d*_,this._z=u*d*_-f*g*m,this._w=u*d*m+f*g*_;break;case"ZXY":this._x=f*d*m-u*g*_,this._y=u*g*m+f*d*_,this._z=u*d*_+f*g*m,this._w=u*d*m-f*g*_;break;case"ZYX":this._x=f*d*m-u*g*_,this._y=u*g*m+f*d*_,this._z=u*d*_-f*g*m,this._w=u*d*m+f*g*_;break;case"YZX":this._x=f*d*m+u*g*_,this._y=u*g*m+f*d*_,this._z=u*d*_-f*g*m,this._w=u*d*m-f*g*_;break;case"XZY":this._x=f*d*m-u*g*_,this._y=u*g*m-f*d*_,this._z=u*d*_+f*g*m,this._w=u*d*m+f*g*_;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],d=e[6],m=e[10],f=n+a+m;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(n>a&&n>m){let g=2*Math.sqrt(1+n-a-m);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>m){let g=2*Math.sqrt(1+a-n-m);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+m-n-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,d=e._w;return this._x=n*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-n*u,this._z=s*d+o*u+n*l-r*a,this._w=o*d-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let u=Math.acos(a),d=Math.sin(u);l=Math.sin(l*u)/d,e=Math.sin(e*u)/d,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Au=class Au{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*n),d=2*(a*e-s*r),m=2*(s*n-o*e);return this.x=e+l*u+o*m-a*d,this.y=n+l*d+a*u-s*m,this.z=r+l*m+s*d-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Au.prototype.isVector3=!0;var D=Au,ch=new D,xf=new jn,Tu=class Tu{constructor(t,e,n,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u)}set(t,e,n,r,s,o,a,l,u){let d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],d=n[4],m=n[7],f=n[2],g=n[5],_=n[8],A=r[0],x=r[3],y=r[6],w=r[1],p=r[4],c=r[7],b=r[2],h=r[5],C=r[8];return s[0]=o*A+a*w+l*b,s[3]=o*x+a*p+l*h,s[6]=o*y+a*c+l*C,s[1]=u*A+d*w+m*b,s[4]=u*x+d*p+m*h,s[7]=u*y+d*c+m*C,s[2]=f*A+g*w+_*b,s[5]=f*x+g*p+_*h,s[8]=f*y+g*c+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8];return e*o*d-e*a*u-n*s*d+n*a*l+r*s*u-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8],m=d*o-a*u,f=a*l-d*s,g=u*s-o*l,_=e*m+n*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/_;return t[0]=m*A,t[1]=(r*u-d*n)*A,t[2]=(a*n-r*o)*A,t[3]=f*A,t[4]=(d*e-r*l)*A,t[5]=(r*s-a*e)*A,t[6]=g*A,t[7]=(n*l-u*e)*A,t[8]=(o*e-n*s)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(t,e)),this}rotate(t){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-t)),this}translate(t,e){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Tu.prototype.isMatrix3=!0;var $t=Tu,lh=new $t,_f=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yf=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jg(){let i={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===oe&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(r.r=$r(r.r),r.g=$r(r.g),r.b=$r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ks]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:_f,fromXYZ:yf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:_f,fromXYZ:yf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var ne=Jg();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nr,za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Nr===void 0&&(Nr=Hs("canvas")),Nr.width=t.width,Nr.height=t.height;let r=Nr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kg=0,Kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hh(r[o].image)):s.push(hh(r[o]))}else s=hh(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function hh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var jg=0,uh=new D,hn=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,r=Zn,s=Xe,o=qi,a=sn,l=on,u=i.DEFAULT_ANISOTROPY,d=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ls(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=du;hn.DEFAULT_ANISOTROPY=1;var Eu=class Eu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,u=l[0],d=l[4],m=l[8],f=l[1],g=l[5],_=l[9],A=l[2],x=l[6],y=l[10];if(Math.abs(d-f)<.01&&Math.abs(m-A)<.01&&Math.abs(_-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(m+A)<.1&&Math.abs(_+x)<.1&&Math.abs(u+g+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let p=(u+1)/2,c=(g+1)/2,b=(y+1)/2,h=(d+f)/4,C=(m+A)/4,v=(_+x)/4;return p>c&&p>b?p<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(p),r=h/n,s=C/n):c>b?c<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),n=h/r,s=v/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=C/s,r=v/s),this.set(n,r,s,e),this}let w=Math.sqrt((x-_)*(x-_)+(m-A)*(m-A)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(x-_)/w,this.y=(m-A)/w,this.z=(f-d)/w,this.w=Math.acos((u+g+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eu.prototype.isVector4=!0;var se=Eu,Va=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Kr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Va{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ws=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mc=class mc{constructor(t,e,n,r,s,o,a,l,u,d,m,f,g,_,A,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,u,d,m,f,g,_,A,x)}set(t,e,n,r,s,o,a,l,u,d,m,f,g,_,A,x){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=r,y[1]=s,y[5]=o,y[9]=a,y[13]=l,y[2]=u,y[6]=d,y[10]=m,y[14]=f,y[3]=g,y[7]=_,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Ur.setFromMatrixColumn(t,0).length(),s=1/Ur.setFromMatrixColumn(t,1).length(),o=1/Ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){let f=o*d,g=o*m,_=a*d,A=a*m;e[0]=l*d,e[4]=-l*m,e[8]=u,e[1]=g+_*u,e[5]=f-A*u,e[9]=-a*l,e[2]=A-f*u,e[6]=_+g*u,e[10]=o*l}else if(t.order==="YXZ"){let f=l*d,g=l*m,_=u*d,A=u*m;e[0]=f+A*a,e[4]=_*a-g,e[8]=o*u,e[1]=o*m,e[5]=o*d,e[9]=-a,e[2]=g*a-_,e[6]=A+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*d,g=l*m,_=u*d,A=u*m;e[0]=f-A*a,e[4]=-o*m,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*d,e[9]=A-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*d,g=o*m,_=a*d,A=a*m;e[0]=l*d,e[4]=_*u-g,e[8]=f*u+A,e[1]=l*m,e[5]=A*u+f,e[9]=g*u-_,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,g=o*u,_=a*l,A=a*u;e[0]=l*d,e[4]=A-f*m,e[8]=_*m+g,e[1]=m,e[5]=o*d,e[9]=-a*d,e[2]=-u*d,e[6]=g*m+_,e[10]=f-A*m}else if(t.order==="XZY"){let f=o*l,g=o*u,_=a*l,A=a*u;e[0]=l*d,e[4]=-m,e[8]=u*d,e[1]=f*m+A,e[5]=o*d,e[9]=g*m-_,e[2]=_*m-g,e[6]=a*d,e[10]=A*m+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qg,t,t0)}lookAt(t,e,n){let r=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),Jo.crossVectors(gn,Pi),r[0]=Pi.x,r[4]=Jo.x,r[8]=gn.x,r[1]=Pi.y,r[5]=Jo.y,r[9]=gn.y,r[2]=Pi.z,r[6]=Jo.z,r[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],d=n[1],m=n[5],f=n[9],g=n[13],_=n[2],A=n[6],x=n[10],y=n[14],w=n[3],p=n[7],c=n[11],b=n[15],h=r[0],C=r[4],v=r[8],M=r[12],S=r[1],T=r[5],E=r[9],I=r[13],U=r[2],N=r[6],F=r[10],O=r[14],G=r[3],W=r[7],ot=r[11],K=r[15];return s[0]=o*h+a*S+l*U+u*G,s[4]=o*C+a*T+l*N+u*W,s[8]=o*v+a*E+l*F+u*ot,s[12]=o*M+a*I+l*O+u*K,s[1]=d*h+m*S+f*U+g*G,s[5]=d*C+m*T+f*N+g*W,s[9]=d*v+m*E+f*F+g*ot,s[13]=d*M+m*I+f*O+g*K,s[2]=_*h+A*S+x*U+y*G,s[6]=_*C+A*T+x*N+y*W,s[10]=_*v+A*E+x*F+y*ot,s[14]=_*M+A*I+x*O+y*K,s[3]=w*h+p*S+c*U+b*G,s[7]=w*C+p*T+c*N+b*W,s[11]=w*v+p*E+c*F+b*ot,s[15]=w*M+p*I+c*O+b*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],d=t[2],m=t[6],f=t[10],g=t[14],_=t[3],A=t[7],x=t[11],y=t[15],w=l*g-u*f,p=a*g-u*m,c=a*f-l*m,b=o*g-u*d,h=o*f-l*d,C=o*m-a*d;return e*(A*w-x*p+y*c)-n*(_*w-x*b+y*h)+r*(_*p-A*b+y*C)-s*(_*c-A*h+x*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],u=t[6],d=t[10];return e*(o*d-a*u)-n*(s*d-a*l)+r*(s*u-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8],m=t[9],f=t[10],g=t[11],_=t[12],A=t[13],x=t[14],y=t[15],w=e*a-n*o,p=e*l-r*o,c=e*u-s*o,b=n*l-r*a,h=n*u-s*a,C=r*u-s*l,v=d*A-m*_,M=d*x-f*_,S=d*y-g*_,T=m*x-f*A,E=m*y-g*A,I=f*y-g*x,U=w*I-p*E+c*T+b*S-h*M+C*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/U;return t[0]=(a*I-l*E+u*T)*N,t[1]=(r*E-n*I-s*T)*N,t[2]=(A*C-x*h+y*b)*N,t[3]=(f*h-m*C-g*b)*N,t[4]=(l*S-o*I-u*M)*N,t[5]=(e*I-r*S+s*M)*N,t[6]=(x*c-_*C-y*p)*N,t[7]=(d*C-f*c+g*p)*N,t[8]=(o*E-a*S+u*v)*N,t[9]=(n*S-e*E-s*v)*N,t[10]=(_*h-A*c+y*w)*N,t[11]=(m*c-d*h-g*w)*N,t[12]=(a*M-o*T-l*v)*N,t[13]=(e*T-n*M+r*v)*N,t[14]=(A*p-_*b-x*w)*N,t[15]=(d*b-m*p+f*w)*N,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,u=s*o,d=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+n,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,d=o+o,m=a+a,f=s*u,g=s*d,_=s*m,A=o*d,x=o*m,y=a*m,w=l*u,p=l*d,c=l*m,b=n.x,h=n.y,C=n.z;return r[0]=(1-(A+y))*b,r[1]=(g+c)*b,r[2]=(_-p)*b,r[3]=0,r[4]=(g-c)*h,r[5]=(1-(f+y))*h,r[6]=(x+w)*h,r[7]=0,r[8]=(_+p)*C,r[9]=(x-w)*C,r[10]=(1-(f+A))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Ur.set(r[0],r[1],r[2]).length(),a=Ur.set(r[4],r[5],r[6]).length(),l=Ur.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Nn.copy(this);let u=1/o,d=1/a,m=1/l;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=m,Nn.elements[9]*=m,Nn.elements[10]*=m,e.setFromRotationMatrix(Nn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=In,l=!1){let u=this.elements,d=2*s/(e-t),m=2*s/(n-r),f=(e+t)/(e-t),g=(n+r)/(n-r),_,A;if(l)_=s/(o-s),A=o*s/(o-s);else if(a===In)_=-(o+s)/(o-s),A=-2*o*s/(o-s);else if(a===Zr)_=-o/(o-s),A=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=m,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=A,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=In,l=!1){let u=this.elements,d=2/(e-t),m=2/(n-r),f=-(e+t)/(e-t),g=-(n+r)/(n-r),_,A;if(l)_=1/(o-s),A=o/(o-s);else if(a===In)_=-2/(o-s),A=-(o+s)/(o-s);else if(a===Zr)_=-1/(o-s),A=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=m,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=_,u[14]=A,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};mc.prototype.isMatrix4=!0;var Zt=mc,Ur=new D,Nn=new Zt,Qg=new D(0,0,0),t0=new D(1,1,1),Pi=new D,Jo=new D,gn=new D,vf=new Zt,bf=new jn,pi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],m=r[2],f=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bf.setFromEuler(this),this.setFromQuaternion(bf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},e0=0,Mf=new D,Br=new jn,ci=new Zt,Ko=new D,Ps=new D,n0=new D,i0=new jn,Sf=new D(1,0,0),wf=new D(0,1,0),Af=new D(0,0,1),Tf={type:"added"},r0={type:"removed"},Fr={type:"childadded",child:null},dh={type:"childremoved",child:null},Ue=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new pi,n=new jn,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new $t}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Sf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Af,t)}translateOnAxis(t,e){return Mf.copy(t).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ko.copy(t):Ko.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ps,Ko,this.up):ci.lookAt(Ko,Ps,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ci),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tf),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(r0),dh.child=t,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tf),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,n0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,i0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let m=l[u];s(t.shapes,m)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),u=o(t.textures),d=o(t.images),m=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){let l=[];for(let u in a){let d=a[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Ue.DEFAULT_UP=new D(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},s0={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(let A of t.hand.values()){let x=e.getJointPose(A,n),y=this._getHandJoint(u,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}let d=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],f=d.position.distanceTo(m.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},jo={h:0,s:0,l:0};function fh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ne.workingColorSpace){if(t=Zg(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=fh(o,s,t+1/3),this.g=fh(o,s,t),this.b=fh(o,s,t-1/3)}return ne.colorSpaceToWorking(this,r),this}setStyle(t,e=rn){function n(s){s!==void 0&&parseFloat(s)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=Np[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ne.workingToColorSpace(Ke.copy(this),t),Math.round(Kt(Ke.r*255,0,255))*65536+Math.round(Kt(Ke.g*255,0,255))*256+Math.round(Kt(Ke.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,r=Ke.g,s=Ke.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,u,d=(a+o)/2;if(a===o)l=0,u=0;else{let m=o-a;switch(u=d<=.5?m/(o+a):m/(2-o-a),o){case n:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-n)/m+2;break;case s:l=(n-r)/m+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=rn){ne.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,r=Ke.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(jo);let n=ah(Di.h,jo.h,e),r=ah(Di.s,jo.s,e),s=ah(Di.l,jo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Jt;Jt.NAMES=Np;var Xs=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new D,li=new D,ph=new D,hi=new D,Or=new D,zr=new D,Ef=new D,mh=new D,gh=new D,xh=new D,_h=new se,yh=new se,vh=new se,he=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Un.subVectors(t,e),r.cross(Un);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Un.subVectors(r,e),li.subVectors(n,e),ph.subVectors(t,e);let o=Un.dot(Un),a=Un.dot(li),l=Un.dot(ph),u=li.dot(li),d=li.dot(ph),m=o*u-a*a;if(m===0)return s.set(0,0,0),null;let f=1/m,g=(u*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-g-_,_,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return _h.setScalar(0),yh.setScalar(0),vh.setScalar(0),_h.fromBufferAttribute(t,e),yh.fromBufferAttribute(t,n),vh.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(_h,s.x),o.addScaledVector(yh,s.y),o.addScaledVector(vh,s.z),o}static isFrontFacing(t,e,n,r){return Un.subVectors(n,e),li.subVectors(t,e),Un.cross(li).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Or.subVectors(r,n),zr.subVectors(s,n),mh.subVectors(t,n);let l=Or.dot(mh),u=zr.dot(mh);if(l<=0&&u<=0)return e.copy(n);gh.subVectors(t,r);let d=Or.dot(gh),m=zr.dot(gh);if(d>=0&&m<=d)return e.copy(r);let f=l*m-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Or,o);xh.subVectors(t,s);let g=Or.dot(xh),_=zr.dot(xh);if(_>=0&&g<=_)return e.copy(s);let A=g*u-l*_;if(A<=0&&u>=0&&_<=0)return a=u/(u-_),e.copy(n).addScaledVector(zr,a);let x=d*_-g*m;if(x<=0&&m-d>=0&&g-_>=0)return Ef.subVectors(s,r),a=(m-d)/(m-d+(g-_)),e.copy(r).addScaledVector(Ef,a);let y=1/(x+A+f);return o=A*y,a=f*y,e.copy(n).addScaledVector(Or,o).addScaledVector(zr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_e=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),ta.subVectors(this.max,Ds),Vr.subVectors(t.a,Ds),kr.subVectors(t.b,Ds),Gr.subVectors(t.c,Ds),Li.subVectors(kr,Vr),Ni.subVectors(Gr,kr),rr.subVectors(Vr,Gr);let e=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-rr.z,rr.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,rr.z,0,-rr.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-rr.y,rr.x,0];return!bh(e,Vr,kr,Gr,ta)||(e=[1,0,0,0,1,0,0,0,1],!bh(e,Vr,kr,Gr,ta))?!1:(ea.crossVectors(Li,Ni),e=[ea.x,ea.y,ea.z],bh(e,Vr,kr,Gr,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ui=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,Qo=new _e,Vr=new D,kr=new D,Gr=new D,Li=new D,Ni=new D,rr=new D,Ds=new D,ta=new D,ea=new D,sr=new D;function bh(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){sr.fromArray(i,s);let a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=t.dot(sr),u=e.dot(sr),d=n.dot(sr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}var De=new D,na=new ht,o0=0,Ce=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var qs=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ys=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},a0=new _e,Ls=new D,Mh=new D,yn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):a0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ls,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Mh)),this.expandByPoint(Ls.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},c0=0,Rn=new Zt,Sh=new Ue,Hr=new D,xn=new _e,Ns=new _e,Ge=new D,Be=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yg(t)?Ys:qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _e);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(xn.min,Ns.min),xn.expandByPoint(Ge),Ge.addVectors(xn.max,Ns.max),xn.expandByPoint(Ge)):(xn.expandByPoint(Ns.min),xn.expandByPoint(Ns.max))}xn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ge));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Ge.fromBufferAttribute(a,u),l&&(Hr.fromBufferAttribute(t,u),Ge.add(Hr)),r=Math.max(r,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new D,l[v]=new D;let u=new D,d=new D,m=new D,f=new ht,g=new ht,_=new ht,A=new D,x=new D;function y(v,M,S){u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),m.fromBufferAttribute(n,S),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),d.sub(u),m.sub(u),g.sub(f),_.sub(f);let T=1/(g.x*_.y-_.x*g.y);isFinite(T)&&(A.copy(d).multiplyScalar(_.y).addScaledVector(m,-g.y).multiplyScalar(T),x.copy(m).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(T),a[v].add(A),a[M].add(A),a[S].add(A),l[v].add(x),l[M].add(x),l[S].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let v=0,M=w.length;v<M;++v){let S=w[v],T=S.start,E=S.count;for(let I=T,U=T+E;I<U;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let p=new D,c=new D,b=new D,h=new D;function C(v){b.fromBufferAttribute(r,v),h.copy(b);let M=a[v];p.copy(M),p.sub(b.multiplyScalar(b.dot(M))).normalize(),c.crossVectors(h,M);let T=c.dot(l[v])<0?-1:1;o.setXYZW(v,p.x,p.y,p.z,T)}for(let v=0,M=w.length;v<M;++v){let S=w[v],T=S.start,E=S.count;for(let I=T,U=T+E;I<U;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,d=new D,m=new D;if(t)for(let f=0,g=t.count;f<g;f+=3){let _=t.getX(f+0),A=t.getX(f+1),x=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,A),o.fromBufferAttribute(e,x),d.subVectors(o,s),m.subVectors(r,s),d.cross(m),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,x),a.add(d),l.add(d),u.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,g=e.count;f<g;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,s),m.subVectors(r,s),d.cross(m),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){let u=a.array,d=a.itemSize,m=a.normalized,f=new u.constructor(l.length*d),g=0,_=0;for(let A=0,x=l.length;A<x;A++){a.isInterleavedBufferAttribute?g=l[A]*a.data.stride+a.offset:g=l[A]*d;for(let y=0;y<d;y++)f[_++]=u[g++]}return new Ce(f,d,m)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],u=t(l,n);e.setAttribute(a,u)}let s=this.morphAttributes;for(let a in s){let l=[],u=s[a];for(let d=0,m=u.length;d<m;d++){let f=u[d],g=t(f,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let u=n[l];t.data.attributes[l]=u.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let m=0,f=u.length;m<f;m++){let g=u[m];d.push(g.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let u in r){let d=r[u];this.setAttribute(u,d.clone(e))}let s=t.morphAttributes;for(let u in s){let d=[],m=s[u];for(let f=0,g=m.length;f<g;f++)d.push(m[f].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,d=o.length;u<d;u++){let m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var l0=0,Qn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=fr,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Ea,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var di=new D,wh=new D,ia=new D,Ui=new D,Ah=new D,ra=new D,Th=new D,bn=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){wh.copy(t).add(e).multiplyScalar(.5),ia.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(wh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ia),a=Ui.dot(this.direction),l=-Ui.dot(ia),u=Ui.lengthSq(),d=Math.abs(1-o*o),m,f,g,_;if(d>0)if(m=o*l-a,f=o*a-l,_=s*d,m>=0)if(f>=-_)if(f<=_){let A=1/d;m*=A,f*=A,g=m*(m+o*f+2*a)+f*(o*m+f+2*l)+u}else f=s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*l)+u;else f=-s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*l)+u;else f<=-_?(m=Math.max(0,-(-o*s+a)),f=m>0?-s:Math.min(Math.max(-s,-l),s),g=-m*m+f*(f+2*l)+u):f<=_?(m=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(m=Math.max(0,-(o*s+a)),f=m>0?s:Math.min(Math.max(-s,-l),s),g=-m*m+f*(f+2*l)+u);else f=o>0?-s:s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(wh).addScaledVector(ia,f),g}intersectSphere(t,e){di.subVectors(t.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,u=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),d>=0?(s=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(s=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),m>=0?(a=(t.min.z-f.z)*m,l=(t.max.z-f.z)*m):(a=(t.max.z-f.z)*m,l=(t.min.z-f.z)*m),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,r,s){Ah.subVectors(e,t),ra.subVectors(n,t),Th.crossVectors(Ah,ra);let o=this.direction.dot(Th),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,t);let l=a*this.direction.dot(ra.crossVectors(Ui,ra));if(l<0)return null;let u=a*this.direction.dot(Ah.cross(Ui));if(u<0||l+u>o)return null;let d=-a*Ui.dot(Th);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mi=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Cf=new Zt,or=new bn,sa=new yn,Rf=new D,oa=new D,aa=new D,ca=new D,Eh=new D,la=new D,If=new D,ha=new D,me=class extends Ue{constructor(t=new Be,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let d=a[l],m=s[l];d!==0&&(Eh.fromBufferAttribute(m,t),o?la.addScaledVector(Eh,d):la.addScaledVector(Eh.sub(e),d))}e.add(la)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),or.copy(t.ray).recast(t.near),!(sa.containsPoint(or.origin)===!1&&(or.intersectSphere(sa,Rf)===null||or.origin.distanceToSquared(Rf)>(t.far-t.near)**2))&&(Cf.copy(s).invert(),or.copy(t.ray).applyMatrix4(Cf),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,or)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,A=f.length;_<A;_++){let x=f[_],y=o[x.materialIndex],w=Math.max(x.start,g.start),p=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let c=w,b=p;c<b;c+=3){let h=a.getX(c),C=a.getX(c+1),v=a.getX(c+2);r=ua(this,y,t,n,u,d,m,h,C,v),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let _=Math.max(0,g.start),A=Math.min(a.count,g.start+g.count);for(let x=_,y=A;x<y;x+=3){let w=a.getX(x),p=a.getX(x+1),c=a.getX(x+2);r=ua(this,o,t,n,u,d,m,w,p,c),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,A=f.length;_<A;_++){let x=f[_],y=o[x.materialIndex],w=Math.max(x.start,g.start),p=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let c=w,b=p;c<b;c+=3){let h=c,C=c+1,v=c+2;r=ua(this,y,t,n,u,d,m,h,C,v),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let _=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let x=_,y=A;x<y;x+=3){let w=x,p=x+1,c=x+2;r=ua(this,o,t,n,u,d,m,w,p,c),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function h0(i,t,e,n,r,s,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Pn,a),l===null)return null;ha.copy(a),ha.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(ha);return u<e.near||u>e.far?null:{distance:u,point:ha.clone(),object:i}}function ua(i,t,e,n,r,s,o,a,l,u){i.getVertexPosition(a,oa),i.getVertexPosition(l,aa),i.getVertexPosition(u,ca);let d=h0(i,t,e,n,oa,aa,ca,If);if(d){let m=new D;he.getBarycoord(If,oa,aa,ca,m),r&&(d.uv=he.getInterpolatedAttribute(r,a,l,u,m,new ht)),s&&(d.uv1=he.getInterpolatedAttribute(s,a,l,u,m,new ht)),o&&(d.normal=he.getInterpolatedAttribute(o,a,l,u,m,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a,b:l,c:u,normal:new D,materialIndex:0};he.getNormal(oa,aa,ca,f.normal),d.face=f,d.barycoord=m}return d}var Fi=class extends hn{constructor(t=null,e=1,n=1,r,s,o,a,l,u=Ne,d=Ne,m,f){super(null,o,a,l,u,d,r,s,m,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ch=new D,u0=new D,d0=new $t,He=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Ch.subVectors(n,e).cross(u0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Ch),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||d0.getNormalMatrix(t),r=this.coplanarPoint(Ch).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new yn,f0=new ht(.5,.5),da=new D,gi=class{constructor(t=new He,e=new He,n=new He,r=new He,s=new He,o=new He){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],u=s[3],d=s[4],m=s[5],f=s[6],g=s[7],_=s[8],A=s[9],x=s[10],y=s[11],w=s[12],p=s[13],c=s[14],b=s[15];if(r[0].setComponents(u-o,g-d,y-_,b-w).normalize(),r[1].setComponents(u+o,g+d,y+_,b+w).normalize(),r[2].setComponents(u+a,g+m,y+A,b+p).normalize(),r[3].setComponents(u-a,g-m,y-A,b-p).normalize(),n)r[4].setComponents(l,f,x,c).normalize(),r[5].setComponents(u-l,g-f,y-x,b-c).normalize();else if(r[4].setComponents(u-l,g-f,y-x,b-c).normalize(),e===In)r[5].setComponents(u+l,g+f,y+x,b+c).normalize();else if(e===Zr)r[5].setComponents(l,f,x,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);let e=f0.distanceTo(t.center);return ar.radius=.7071067811865476+e,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(da.x=r.normal.x>0?t.max.x:t.min.x,da.y=r.normal.y>0?t.max.y:t.min.y,da.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Pf=new Zt,Ga=class i{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let r=0;r<e.length;r++){let s=e[r];Pf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new gi),n[r].setFromProjectionMatrix(Pf,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let r=0;r<t._count;r++)e[r]===void 0&&(e[r]=new gi),e[r].copy(n[r]);return this._count=t._count,this}clone(){return new i().copy(this)}};function Rh(i,t){return i-t}function p0(i,t){return i.z-t.z}function m0(i,t){return t.z-i.z}var Hh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,r){let s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let a=s[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=r}reset(){this.list.length=0,this.index=0}},cn=new Zt,g0=new Jt(1,1,1),x0=new gi,_0=new Ga,fa=new _e,cr=new yn,Us=new D,Df=new D,y0=new D,Ih=new Hh,je=new me,pa=[];function v0(i,t,e=0){let n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){let r=i.count;for(let s=0;s<r;s++)for(let o=0;o<n;o++)t.setComponent(s+e,o,i.getComponent(s,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function lr(i,t){if(i.constructor!==t.constructor){let e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{let e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}var $s=class extends me{constructor(t,e,n=e*2,r){super(new Be,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new Fi(e,t,t,sn,ln);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new Fi(e,t,t,cs,An);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new Fi(e,t,t,sn,ln);n.colorSpace=ne.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in t.attributes){let o=t.getAttribute(s),{array:a,itemSize:l,normalized:u}=o,d=new a.constructor(n*l),m=new Ce(d,l,u);e.setAttribute(s,m)}if(t.getIndex()!==null){let s=n>65535?new Uint32Array(r):new Uint16Array(r);e.setIndex(new Ce(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let r=t.getAttribute(n),s=e.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _e);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,r=e.length;n<r;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,cn),this.getBoundingBoxAt(s,fa).applyMatrix4(cn),t.union(fa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,r=e.length;n<r;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,cn),this.getBoundingSphereAt(s,cr).applyMatrix4(cn),t.union(cr)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Rh),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=n):(r=this._instanceInfo.length,this._instanceInfo.push(n));let s=this._matricesTexture;cn.identity().toArray(s.image.data,r*16),s.needsUpdate=!0;let o=this._colorsTexture;return o&&(g0.toArray(o.image.data,r*4),o.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?o.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Rh),l=this._availableGeometryIds.shift(),s[l]=r):(l=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(l,t),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(r&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,u=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let d in n.attributes){let m=e.getAttribute(d),f=n.getAttribute(d);v0(m,f,l);let g=m.itemSize;for(let _=m.count,A=u;_<A;_++){let x=l+_;for(let y=0;y<g;y++)f.setComponent(x,y,0)}f.needsUpdate=!0,f.addUpdateRange(l*g,u*g)}if(r){let d=a.indexStart,m=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let f=0;f<o.count;f++)s.setX(d+f,l+o.getX(f));for(let f=o.count,g=m;f<g;f++)s.setX(d+f,l);s.needsUpdate=!0,s.addUpdateRange(d,a.reservedIndexCount)}return a.start=r?a.indexStart:a.vertexStart,a.count=r?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let r=0,s=n.length;r<s;r++)n[r].active&&n[r].geometryIndex===t&&this.deleteInstance(r);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,r=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=r[o],u=n[l];if(u.active!==!1){if(s.index!==null){if(u.indexStart!==e){let{indexStart:d,vertexStart:m,reservedIndexCount:f}=u,g=s.index,_=g.array,A=t-m;for(let x=d;x<d+f;x++)_[x]=_[x]+A;g.array.copyWithin(e,d,d+f),g.addUpdateRange(e,f),g.needsUpdate=!0,u.indexStart=e}e+=u.reservedIndexCount}if(u.vertexStart!==t){let{vertexStart:d,reservedVertexCount:m}=u,f=s.attributes;for(let g in f){let _=f[g],{array:A,itemSize:x}=_;A.copyWithin(t*x,d*x,(d+m)*x),_.addUpdateRange(t*x,m*x),_.needsUpdate=!0}u.vertexStart=t}t+=u.reservedVertexCount,u.start=s.index?u.indexStart:u.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[t];if(r.boundingBox===null){let s=new _e,o=n.index,a=n.attributes.position;for(let l=r.start,u=r.start+r.count;l<u;l++){let d=l;o&&(d=o.getX(d)),s.expandByPoint(Us.fromBufferAttribute(a,d))}r.boundingBox=s}return e.copy(r.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[t];if(r.boundingSphere===null){let s=new yn;this.getBoundingBoxAt(t,fa),fa.getCenter(s.center);let o=n.index,a=n.attributes.position,l=0;for(let u=r.start,d=r.start+r.count;u<d;u++){let m=u;o&&(m=o.getX(m)),Us.fromBufferAttribute(a,m),l=Math.max(l,s.center.distanceToSquared(Us))}s.radius=Math.sqrt(l),r.boundingSphere=s}return e.copy(r.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,r=this._matricesTexture.image.data;return e.toArray(r,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Rh);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let r=new Int32Array(t),s=new Int32Array(t);lr(this._multiDrawCounts,r),lr(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=t;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),lr(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),lr(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),lr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let s=this.geometry;s.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Be,this._initializeGeometry(s));let o=this.geometry;s.index&&lr(s.index.array,o.index.array);for(let a in s.attributes)lr(s.attributes[a].array,o.attributes[a].array)}raycast(t,e){let n=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,o=this.geometry;je.material=this.material,je.geometry.index=o.index,je.geometry.attributes=o.attributes,je.geometry.boundingBox===null&&(je.geometry.boundingBox=new _e),je.geometry.boundingSphere===null&&(je.geometry.boundingSphere=new yn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let u=n[a].geometryIndex,d=r[u];je.geometry.setDrawRange(d.start,d.count),this.getMatrixAt(a,je.matrixWorld).premultiply(s),this.getBoundingBoxAt(u,je.geometry.boundingBox),this.getBoundingSphereAt(u,je.geometry.boundingSphere),je.raycast(t,pa);for(let m=0,f=pa.length;m<f;m++){let g=pa[m];g.object=this,g.batchId=a,e.push(g)}pa.length=0}je.material=null,je.geometry.index=null,je.geometry.attributes={},je.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=r.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,a=r.attributes.position.count>65535?4:2);let u=this._instanceInfo,d=this._multiDrawStarts,m=this._multiDrawCounts,f=this._geometryInfo,g=this.perObjectFrustumCulled,_=this._indirectTexture,A=_.image.data,x=n.isArrayCamera?_0:x0;g&&(n.isArrayCamera?x.setFromArrayCamera(n):(cn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),x.setFromProjectionMatrix(cn,n.coordinateSystem,n.reversedDepth)));let y=0;if(this.sortObjects){cn.copy(this.matrixWorld).invert(),Us.setFromMatrixPosition(n.matrixWorld).applyMatrix4(cn),Df.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(cn);for(let c=0,b=u.length;c<b;c++)if(u[c].visible&&u[c].active){let h=u[c].geometryIndex;this.getMatrixAt(c,cn),this.getBoundingSphereAt(h,cr).applyMatrix4(cn);let C=!1;if(g&&(C=!x.intersectsSphere(cr)),!C){let v=f[h],M=y0.subVectors(cr.center,Us).dot(Df);Ih.push(v.start,v.count,M,c)}}let w=Ih.list,p=this.customSort;p===null?w.sort(s.transparent?m0:p0):p.call(this,w,n);for(let c=0,b=w.length;c<b;c++){let h=w[c];d[y]=h.start*a*l,m[y]=h.count*l,A[y]=h.index,y++}Ih.reset()}else for(let w=0,p=u.length;w<p;w++)if(u[w].visible&&u[w].active){let c=u[w].geometryIndex,b=!1;if(g&&(this.getMatrixAt(w,cn),this.getBoundingSphereAt(c,cr).applyMatrix4(cn),b=!x.intersectsSphere(cr)),!b){let h=f[c];d[y]=h.start*a*l,m[y]=h.count*l,A[y]=w,y++}}_.needsUpdate=!0,this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(t,e,n,r,s,o){this.onBeforeRender(t,null,r,s,o)}},ts=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ha=new D,Wa=new D,Lf=new Zt,Bs=new bn,ma=new yn,Ph=new D,Nf=new D,mr=class extends Ue{constructor(t=new Be,e=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ha.fromBufferAttribute(e,r-1),Wa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ha.distanceTo(Wa);t.setAttribute("lineDistance",new Se(n,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ma.radius+=s,t.ray.intersectsSphere(ma)===!1)return;Lf.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(Lf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){let g=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let A=g,x=_-1;A<x;A+=u){let y=d.getX(A),w=d.getX(A+1),p=ga(this,t,Bs,l,y,w,A);p&&e.push(p)}if(this.isLineLoop){let A=d.getX(_-1),x=d.getX(g),y=ga(this,t,Bs,l,A,x,_-1);y&&e.push(y)}}else{let g=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let A=g,x=_-1;A<x;A+=u){let y=ga(this,t,Bs,l,A,A+1,A);y&&e.push(y)}if(this.isLineLoop){let A=ga(this,t,Bs,l,_-1,g,_-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ga(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Ha.fromBufferAttribute(a,r),Wa.fromBufferAttribute(a,s),e.distanceSqToSegment(Ha,Wa,Ph,Nf)>n)return;Ph.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Ph);if(!(u<t.near||u>t.far))return{distance:u,point:Nf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Uf=new D,Bf=new D,es=class extends mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Uf.fromBufferAttribute(e,r),Bf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Uf.distanceTo(Bf);t.setAttribute("lineDistance",new Se(n,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zs=class extends mr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Xa=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ff=new Zt,Wh=new bn,xa=new yn,_a=new D,Js=class extends Ue{constructor(t=new Be,e=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),xa.radius+=s,t.ray.intersectsSphere(xa)===!1)return;Ff.copy(r).invert(),Wh.copy(t.ray).applyMatrix4(Ff);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,m=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,A=g;_<A;_++){let x=u.getX(_);_a.fromBufferAttribute(m,x),Of(_a,x,l,r,t,e,this)}}else{let f=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=f,A=g;_<A;_++)_a.fromBufferAttribute(m,_),Of(_a,_,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Of(i,t,e,n,r,s,o){let a=Wh.distanceSqToPoint(i);if(a<e){let l=new D;Wh.closestPointToPoint(i,l),l.applyMatrix4(n);let u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ks=class extends hn{constructor(t=[],e=Xi,n,r,s,o,a,l,u,d){super(t,e,n,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var xi=class extends hn{constructor(t,e,n=An,r,s,o,a=Ne,l=Ne,u,d=Jn,m=1){if(d!==Jn&&d!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:m};super(f,r,s,o,a,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qa=class extends xi{constructor(t,e=An,n=Xi,r,s,o=Ne,a=Ne,l,u=Jn){let d={width:t,height:t,depth:1},m=[d,d,d,d,d,d];super(t,t,e,n,r,s,o,a,l,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},js=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fn=class i extends Be{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],u=[],d=[],m=[],f=0,g=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(m,2));function _(A,x,y,w,p,c,b,h,C,v,M){let S=c/C,T=b/v,E=c/2,I=b/2,U=h/2,N=C+1,F=v+1,O=0,G=0,W=new D;for(let ot=0;ot<F;ot++){let K=ot*T-I;for(let rt=0;rt<N;rt++){let xt=rt*S-E;W[A]=xt*w,W[x]=K*p,W[y]=U,u.push(W.x,W.y,W.z),W[A]=0,W[x]=0,W[y]=h>0?1:-1,d.push(W.x,W.y,W.z),m.push(rt/C),m.push(1-ot/v),O+=1}}for(let ot=0;ot<v;ot++)for(let K=0;K<C;K++){let rt=f+K+N*ot,xt=f+K+N*(ot+1),Ct=f+(K+1)+N*(ot+1),_t=f+(K+1)+N*ot;l.push(rt,xt,_t),l.push(xt,Ct,_t),G+=6}a.addGroup(g,G,M),g+=G,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zi=class i extends Be{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let u=this;r=Math.floor(r),s=Math.floor(s);let d=[],m=[],f=[],g=[],_=0,A=[],x=n/2,y=0;w(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(d),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(g,2));function w(){let c=new D,b=new D,h=0,C=(e-t)/n;for(let v=0;v<=s;v++){let M=[],S=v/s,T=S*(e-t)+t;for(let E=0;E<=r;E++){let I=E/r,U=I*l+a,N=Math.sin(U),F=Math.cos(U);b.x=T*N,b.y=-S*n+x,b.z=T*F,m.push(b.x,b.y,b.z),c.set(N,C,F).normalize(),f.push(c.x,c.y,c.z),g.push(I,1-S),M.push(_++)}A.push(M)}for(let v=0;v<r;v++)for(let M=0;M<s;M++){let S=A[M][v],T=A[M+1][v],E=A[M+1][v+1],I=A[M][v+1];(t>0||M!==0)&&(d.push(S,T,I),h+=3),(e>0||M!==s-1)&&(d.push(T,E,I),h+=3)}u.addGroup(y,h,0),y+=h}function p(c){let b=_,h=new ht,C=new D,v=0,M=c===!0?t:e,S=c===!0?1:-1;for(let E=1;E<=r;E++)m.push(0,x*S,0),f.push(0,S,0),g.push(.5,.5),_++;let T=_;for(let E=0;E<=r;E++){let U=E/r*l+a,N=Math.cos(U),F=Math.sin(U);C.x=M*F,C.y=x*S,C.z=M*N,m.push(C.x,C.y,C.z),f.push(0,S,0),h.x=N*.5+.5,h.y=F*.5*S+.5,g.push(h.x,h.y),_++}for(let E=0;E<r;E++){let I=b+E,U=T+E;c===!0?d.push(U,U+1,I):d.push(U+1,U,I),v+=3}u.addGroup(y,v,c===!0?1:2),y+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ya=class i extends Be{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),u(n),d(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let p=new D,c=new D,b=new D;for(let h=0;h<e.length;h+=3)g(e[h+0],p),g(e[h+1],c),g(e[h+2],b),l(p,c,b,w)}function l(w,p,c,b){let h=b+1,C=[];for(let v=0;v<=h;v++){C[v]=[];let M=w.clone().lerp(c,v/h),S=p.clone().lerp(c,v/h),T=h-v;for(let E=0;E<=T;E++)E===0&&v===h?C[v][E]=M:C[v][E]=M.clone().lerp(S,E/T)}for(let v=0;v<h;v++)for(let M=0;M<2*(h-v)-1;M++){let S=Math.floor(M/2);M%2===0?(f(C[v][S+1]),f(C[v+1][S]),f(C[v][S])):(f(C[v][S+1]),f(C[v+1][S+1]),f(C[v+1][S]))}}function u(w){let p=new D;for(let c=0;c<s.length;c+=3)p.x=s[c+0],p.y=s[c+1],p.z=s[c+2],p.normalize().multiplyScalar(w),s[c+0]=p.x,s[c+1]=p.y,s[c+2]=p.z}function d(){let w=new D;for(let p=0;p<s.length;p+=3){w.x=s[p+0],w.y=s[p+1],w.z=s[p+2];let c=x(w)/2/Math.PI+.5,b=y(w)/Math.PI+.5;o.push(c,1-b)}_(),m()}function m(){for(let w=0;w<o.length;w+=6){let p=o[w+0],c=o[w+2],b=o[w+4],h=Math.max(p,c,b),C=Math.min(p,c,b);h>.9&&C<.1&&(p<.2&&(o[w+0]+=1),c<.2&&(o[w+2]+=1),b<.2&&(o[w+4]+=1))}}function f(w){s.push(w.x,w.y,w.z)}function g(w,p){let c=w*3;p.x=t[c+0],p.y=t[c+1],p.z=t[c+2]}function _(){let w=new D,p=new D,c=new D,b=new D,h=new ht,C=new ht,v=new ht;for(let M=0,S=0;M<s.length;M+=9,S+=6){w.set(s[M+0],s[M+1],s[M+2]),p.set(s[M+3],s[M+4],s[M+5]),c.set(s[M+6],s[M+7],s[M+8]),h.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),v.set(o[S+4],o[S+5]),b.copy(w).add(p).add(c).divideScalar(3);let T=x(b);A(h,S+0,w,T),A(C,S+2,p,T),A(v,S+4,c,T)}}function A(w,p,c,b){b<0&&w.x===1&&(o[p]=w.x-1),c.x===0&&c.z===0&&(o[p]=b/2/Math.PI+.5)}function x(w){return Math.atan2(w.z,-w.x)}function y(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=n[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let d=n[r],f=n[r+1]-d,g=(o-d)/f;return(r+g)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ht:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new Zt;for(let g=0;g<=t;g++){let _=g/t;r[g]=this.getTangentAt(_,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE,d=Math.abs(r[0].x),m=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=u&&(u=d,n.set(1,0,0)),m<=u&&(u=m,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=t;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Kt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,_))}o[g].crossVectors(r[g],s[g])}if(e===!0){let g=Math.acos(Kt(s[0].dot(s[t]),-1,1));g/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(g=-g);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],g*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ns=class extends Mn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),f=l-this.aX,g=u-this.aY;l=f*d-g*m+this.aX,u=f*m+g*d+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends ns{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yu(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,d,m){let f=(o-s)/u-(a-s)/(u+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+m)+(l-a)/m;f*=d,g*=d,r(o,a,f,g)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var zf=new D,Vf=new D,Dh=new yu,Lh=new yu,Nh=new yu,Za=class extends Mn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,d;this.closed||a>0?u=r[(a-1)%s]:(Vf.subVectors(r[0],r[1]).add(r[0]),u=Vf);let m=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(zf.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=zf),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(m),g),A=Math.pow(m.distanceToSquared(f),g),x=Math.pow(f.distanceToSquared(d),g);A<1e-4&&(A=1),_<1e-4&&(_=A),x<1e-4&&(x=A),Dh.initNonuniformCatmullRom(u.x,m.x,f.x,d.x,_,A,x),Lh.initNonuniformCatmullRom(u.y,m.y,f.y,d.y,_,A,x),Nh.initNonuniformCatmullRom(u.z,m.z,f.z,d.z,_,A,x)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(u.x,m.x,f.x,d.x,this.tension),Lh.initCatmullRom(u.y,m.y,f.y,d.y,this.tension),Nh.initCatmullRom(u.z,m.z,f.z,d.z,this.tension));return n.set(Dh.calc(l),Lh.calc(l),Nh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function kf(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function b0(i,t){let e=1-i;return e*e*t}function M0(i,t){return 2*(1-i)*i*t}function S0(i,t){return i*i*t}function Os(i,t,e,n){return b0(i,t)+M0(i,e)+S0(i,n)}function w0(i,t){let e=1-i;return e*e*e*t}function A0(i,t){let e=1-i;return 3*e*e*i*t}function T0(i,t){return 3*(1-i)*i*i*t}function E0(i,t){return i*i*i*t}function zs(i,t,e,n,r){return w0(i,t)+A0(i,e)+T0(i,n)+E0(i,r)}var Qs=class extends Mn{constructor(t=new ht,e=new ht,n=new ht,r=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ht){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,r.x,s.x,o.x,a.x),zs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends Mn{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,r.x,s.x,o.x,a.x),zs(t,r.y,s.y,o.y,a.y),zs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends Mn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Mn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends Mn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Os(t,r.x,s.x,o.x),Os(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends Mn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Os(t,r.x,s.x,o.x),Os(t,r.y,s.y,o.y),Os(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],d=r[o>r.length-2?r.length-1:o+1],m=r[o>r.length-3?r.length-1:o+2];return n.set(kf(a,l.x,u.x,d.x,m.x),kf(a,l.y,u.y,d.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new ht().fromArray(r))}return this}},Xh=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Za,CubicBezierCurve:Qs,CubicBezierCurve3:Ja,EllipseCurve:ns,LineCurve:to,LineCurve3:Ka,QuadraticBezierCurve:eo,QuadraticBezierCurve3:ja,SplineCurve:no}),Qa=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let u=0;u<l.length;u++){let d=l[u];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new Xh[r.type]().fromJSON(r))}return this}},io=class extends Qa{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new to(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new eo(this.currentPoint.clone(),new ht(t,e),new ht(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Qs(this.currentPoint.clone(),new ht(t,e),new ht(n,r),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new no(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let u=new ns(t,e,n,r,s,o,a,l);if(this.curves.length>0){let m=u.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vi=class extends io{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new io().fromJSON(r))}return this}};function C0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Up(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(n&&(s=L0(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let d=a,m=l;for(let f=e;f<r;f+=e){let g=i[f],_=i[f+1];g<a&&(a=g),_<l&&(l=_),g>d&&(d=g),_>m&&(m=_)}u=Math.max(d-a,m-l),u=u!==0?32767/u:0}return ro(s,o,e,a,l,u,0),o}function Up(i,t,e,n,r){let s;if(r===W0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Gf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Gf(o/n|0,i[o],i[o+1],s);return s&&is(s,s.next)&&(oo(s),s=s.next),s}function gr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(is(e,e.next)||xe(e.prev,e,e.next)===0)){if(oo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ro(i,t,e,n,r,s,o){if(!i)return;!o&&s&&O0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,u=i.next;if(s?I0(i,n,r,s):R0(i)){t.push(l.i,i.i,u.i),oo(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=P0(gr(i),t),ro(i,t,e,n,r,s,2)):o===2&&D0(i,t,e,n,r,s):ro(gr(i),t,e,n,r,s,1);break}}}function R0(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,u=n.y,d=Math.min(r,s,o),m=Math.min(a,l,u),f=Math.max(r,s,o),g=Math.max(a,l,u),_=n.next;for(;_!==t;){if(_.x>=d&&_.x<=f&&_.y>=m&&_.y<=g&&Fs(r,a,s,l,o,u,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function I0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(xe(r,s,o)>=0)return!1;let a=r.x,l=s.x,u=o.x,d=r.y,m=s.y,f=o.y,g=Math.min(a,l,u),_=Math.min(d,m,f),A=Math.max(a,l,u),x=Math.max(d,m,f),y=qh(g,_,t,e,n),w=qh(A,x,t,e,n),p=i.prevZ,c=i.nextZ;for(;p&&p.z>=y&&c&&c.z<=w;){if(p.x>=g&&p.x<=A&&p.y>=_&&p.y<=x&&p!==r&&p!==o&&Fs(a,d,l,m,u,f,p.x,p.y)&&xe(p.prev,p,p.next)>=0||(p=p.prevZ,c.x>=g&&c.x<=A&&c.y>=_&&c.y<=x&&c!==r&&c!==o&&Fs(a,d,l,m,u,f,c.x,c.y)&&xe(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;p&&p.z>=y;){if(p.x>=g&&p.x<=A&&p.y>=_&&p.y<=x&&p!==r&&p!==o&&Fs(a,d,l,m,u,f,p.x,p.y)&&xe(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;c&&c.z<=w;){if(c.x>=g&&c.x<=A&&c.y>=_&&c.y<=x&&c!==r&&c!==o&&Fs(a,d,l,m,u,f,c.x,c.y)&&xe(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function P0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!is(n,r)&&Fp(n,e,e.next,r)&&so(n,r)&&so(r,n)&&(t.push(n.i,e.i,r.i),oo(e),oo(e.next),e=i=r),e=e.next}while(e!==i);return gr(e)}function D0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k0(o,a)){let l=Op(o,a);o=gr(o,o.next),l=gr(l,l.next),ro(o,t,e,n,r,s,0),ro(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function L0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,u=Up(i,a,l,n,!1);u===u.next&&(u.steiner=!0),r.push(V0(u))}r.sort(N0);for(let s=0;s<r.length;s++)e=U0(r[s],e);return e}function N0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function U0(i,t){let e=B0(i,t);if(!e)return t;let n=Op(e,i);return gr(n,n.next),gr(e,e.next)}function B0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(is(i,e))return e;do{if(is(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let m=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>s&&(s=m,o=e.x<e.next.x?e:e.next,m===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,u=o.y,d=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Bp(r<u?n:s,r,l,u,r<u?s:n,r,e.x,e.y)){let m=Math.abs(r-e.y)/(n-e.x);so(e,i)&&(m<d||m===d&&(e.x>o.x||e.x===o.x&&F0(o,e)))&&(o=e,d=m)}e=e.next}while(e!==a);return o}function F0(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function O0(i,t,e,n){let r=i;do r.z===0&&(r.z=qh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,z0(r)}function z0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let u=0;u<e&&(a++,o=o.nextZ,!!o);u++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function qh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function V0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bp(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Fs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Bp(i,t,e,n,r,s,o,a)}function k0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!G0(i,t)&&(so(i,t)&&so(t,i)&&H0(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||is(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function is(i,t){return i.x===t.x&&i.y===t.y}function Fp(i,t,e,n){let r=va(xe(i,t,e)),s=va(xe(i,t,n)),o=va(xe(e,n,i)),a=va(xe(e,n,t));return!!(r!==s&&o!==a||r===0&&ya(i,e,t)||s===0&&ya(i,n,t)||o===0&&ya(e,i,n)||a===0&&ya(e,t,n))}function ya(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function va(i){return i>0?1:i<0?-1:0}function G0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function so(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function H0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Op(i,t){let e=Yh(i.i,i.x,i.y),n=Yh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Gf(i,t,e,n){let r=Yh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function W0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var $h=class{static triangulate(t,e,n=2){return C0(t,e,n)}},ur=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Hf(t),Wf(n,t);let o=t.length;e.forEach(Hf);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Wf(n,e[l]);let a=$h.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Hf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ao=class i extends Be{constructor(t=new Vi([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let u=t[a];o(u)}this.setAttribute("position",new Se(r,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals();function o(a){let l=[],u=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:X0,p,c=!1,b,h,C,v;if(y){p=y.getSpacedPoints(d),c=!0,f=!1;let Z=y.isCatmullRomCurve3?y.closed:!1;b=y.computeFrenetFrames(d,Z),h=new D,C=new D,v=new D}f||(x=0,g=0,_=0,A=0);let M=a.extractPoints(u),S=M.shape,T=M.holes;if(!ur.isClockWise(S)){S=S.reverse();for(let Z=0,et=T.length;Z<et;Z++){let j=T[Z];ur.isClockWise(j)&&(T[Z]=j.reverse())}}function I(Z){let j=10000000000000001e-36,at=Z[0];for(let gt=1;gt<=Z.length;gt++){let vt=gt%Z.length,ft=Z[vt],It=ft.x-at.x,Dt=ft.y-at.y,B=It*It+Dt*Dt,ie=Math.max(Math.abs(ft.x),Math.abs(ft.y),Math.abs(at.x),Math.abs(at.y)),Ut=j*ie*ie;if(B<=Ut){Z.splice(vt,1),gt--;continue}at=ft}}I(S),T.forEach(I);let U=T.length,N=S;for(let Z=0;Z<U;Z++){let et=T[Z];S=S.concat(et)}function F(Z,et,j){return et||Wt("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(et,j)}let O=S.length;function G(Z,et,j){let at,gt,vt,ft=Z.x-et.x,It=Z.y-et.y,Dt=j.x-Z.x,B=j.y-Z.y,ie=ft*ft+It*It,Ut=ft*B-It*Dt;if(Math.abs(Ut)>Number.EPSILON){let L=Math.sqrt(ie),R=Math.sqrt(Dt*Dt+B*B),z=et.x-It/L,H=et.y+ft/L,J=j.x-B/R,ut=j.y+Dt/R,mt=((J-z)*B-(ut-H)*Dt)/(ft*B-It*Dt);at=z+ft*mt-Z.x,gt=H+It*mt-Z.y;let Q=at*at+gt*gt;if(Q<=2)return new ht(at,gt);vt=Math.sqrt(Q/2)}else{let L=!1;ft>Number.EPSILON?Dt>Number.EPSILON&&(L=!0):ft<-Number.EPSILON?Dt<-Number.EPSILON&&(L=!0):Math.sign(It)===Math.sign(B)&&(L=!0),L?(at=-It,gt=ft,vt=Math.sqrt(ie)):(at=ft,gt=It,vt=Math.sqrt(ie/2))}return new ht(at/vt,gt/vt)}let W=[];for(let Z=0,et=N.length,j=et-1,at=Z+1;Z<et;Z++,j++,at++)j===et&&(j=0),at===et&&(at=0),W[Z]=G(N[Z],N[j],N[at]);let ot=[],K,rt=W.concat();for(let Z=0,et=U;Z<et;Z++){let j=T[Z];K=[];for(let at=0,gt=j.length,vt=gt-1,ft=at+1;at<gt;at++,vt++,ft++)vt===gt&&(vt=0),ft===gt&&(ft=0),K[at]=G(j[at],j[vt],j[ft]);ot.push(K),rt=rt.concat(K)}let xt;if(x===0)xt=ur.triangulateShape(N,T);else{let Z=[],et=[];for(let j=0;j<x;j++){let at=j/x,gt=g*Math.cos(at*Math.PI/2),vt=_*Math.sin(at*Math.PI/2)+A;for(let ft=0,It=N.length;ft<It;ft++){let Dt=F(N[ft],W[ft],vt);lt(Dt.x,Dt.y,-gt),at===0&&Z.push(Dt)}for(let ft=0,It=U;ft<It;ft++){let Dt=T[ft];K=ot[ft];let B=[];for(let ie=0,Ut=Dt.length;ie<Ut;ie++){let L=F(Dt[ie],K[ie],vt);lt(L.x,L.y,-gt),at===0&&B.push(L)}at===0&&et.push(B)}}xt=ur.triangulateShape(Z,et)}let Ct=xt.length,_t=_+A;for(let Z=0;Z<O;Z++){let et=f?F(S[Z],rt[Z],_t):S[Z];c?(C.copy(b.normals[0]).multiplyScalar(et.x),h.copy(b.binormals[0]).multiplyScalar(et.y),v.copy(p[0]).add(C).add(h),lt(v.x,v.y,v.z)):lt(et.x,et.y,0)}for(let Z=1;Z<=d;Z++)for(let et=0;et<O;et++){let j=f?F(S[et],rt[et],_t):S[et];c?(C.copy(b.normals[Z]).multiplyScalar(j.x),h.copy(b.binormals[Z]).multiplyScalar(j.y),v.copy(p[Z]).add(C).add(h),lt(v.x,v.y,v.z)):lt(j.x,j.y,m/d*Z)}for(let Z=x-1;Z>=0;Z--){let et=Z/x,j=g*Math.cos(et*Math.PI/2),at=_*Math.sin(et*Math.PI/2)+A;for(let gt=0,vt=N.length;gt<vt;gt++){let ft=F(N[gt],W[gt],at);lt(ft.x,ft.y,m+j)}for(let gt=0,vt=T.length;gt<vt;gt++){let ft=T[gt];K=ot[gt];for(let It=0,Dt=ft.length;It<Dt;It++){let B=F(ft[It],K[It],at);c?lt(B.x,B.y+p[d-1].y,p[d-1].x+j):lt(B.x,B.y,m+j)}}}$(),nt();function $(){let Z=r.length/3;if(f){let et=0,j=O*et;for(let at=0;at<Ct;at++){let gt=xt[at];pt(gt[2]+j,gt[1]+j,gt[0]+j)}et=d+x*2,j=O*et;for(let at=0;at<Ct;at++){let gt=xt[at];pt(gt[0]+j,gt[1]+j,gt[2]+j)}}else{for(let et=0;et<Ct;et++){let j=xt[et];pt(j[2],j[1],j[0])}for(let et=0;et<Ct;et++){let j=xt[et];pt(j[0]+O*d,j[1]+O*d,j[2]+O*d)}}n.addGroup(Z,r.length/3-Z,0)}function nt(){let Z=r.length/3,et=0;tt(N,et),et+=N.length;for(let j=0,at=T.length;j<at;j++){let gt=T[j];tt(gt,et),et+=gt.length}n.addGroup(Z,r.length/3-Z,1)}function tt(Z,et){let j=Z.length;for(;--j>=0;){let at=j,gt=j-1;gt<0&&(gt=Z.length-1);for(let vt=0,ft=d+x*2;vt<ft;vt++){let It=O*vt,Dt=O*(vt+1),B=et+at+It,ie=et+gt+It,Ut=et+gt+Dt,L=et+at+Dt;dt(B,ie,Ut,L)}}}function lt(Z,et,j){l.push(Z),l.push(et),l.push(j)}function pt(Z,et,j){Yt(Z),Yt(et),Yt(j);let at=r.length/3,gt=w.generateTopUV(n,r,at-3,at-2,at-1);wt(gt[0]),wt(gt[1]),wt(gt[2])}function dt(Z,et,j,at){Yt(Z),Yt(et),Yt(at),Yt(et),Yt(j),Yt(at);let gt=r.length/3,vt=w.generateSideWallUV(n,r,gt-6,gt-3,gt-2,gt-1);wt(vt[0]),wt(vt[1]),wt(vt[3]),wt(vt[1]),wt(vt[2]),wt(vt[3])}function Yt(Z){r.push(l[Z*3+0]),r.push(l[Z*3+1]),r.push(l[Z*3+2])}function wt(Z){s.push(Z.x),s.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return q0(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Xh[r.type]().fromJSON(r)),new i(n,t.options)}},X0={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],u=t[r*3],d=t[r*3+1];return[new ht(s,o),new ht(a,l),new ht(u,d)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],u=t[n*3],d=t[n*3+1],m=t[n*3+2],f=t[r*3],g=t[r*3+1],_=t[r*3+2],A=t[s*3],x=t[s*3+1],y=t[s*3+2];return Math.abs(a-d)<Math.abs(o-u)?[new ht(o,1-l),new ht(u,1-m),new ht(f,1-_),new ht(A,1-y)]:[new ht(a,1-l),new ht(d,1-m),new ht(g,1-_),new ht(x,1-y)]}};function q0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var co=class i extends Ya{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},lo=class i extends Be{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),u=a+1,d=l+1,m=t/a,f=e/l,g=[],_=[],A=[],x=[];for(let y=0;y<d;y++){let w=y*f-o;for(let p=0;p<u;p++){let c=p*m-s;_.push(c,-w,0),A.push(0,0,1),x.push(p/a),x.push(1-y/l)}}for(let y=0;y<l;y++)for(let w=0;w<a;w++){let p=w+u*y,c=w+u*(y+1),b=w+1+u*(y+1),h=w+1+u*y;g.push(p,c,h),g.push(c,b,h)}this.setIndex(g),this.setAttribute("position",new Se(_,3)),this.setAttribute("normal",new Se(A,3)),this.setAttribute("uv",new Se(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function yr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Xf(r))r.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Xf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=yr(i[e]);for(let r in n)t[r]=n[r]}return t}function Xf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Y0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var zp={clone:yr,merge:tn},$0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=Y0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(r.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new se().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Zt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tc=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ki=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ec=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nc=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ba(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var Gi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ic=class extends Gi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:s=t,a=2*e-n;break;case Vh:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:o=t,l=2*n-e;break;case Vh:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,u=l-a,d=this._offsetPrev,m=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(n-e)/(r-e),A=_*_,x=A*_,y=-f*x+2*f*A-f*_,w=(1+f)*x+(-1.5-2*f)*A+(-.5+f)*_+1,p=(-1-g)*x+(1.5+g)*A+.5*_,c=g*x-g*A;for(let b=0;b!==a;++b)s[b]=y*o[d+b]+w*o[u+b]+p*o[l+b]+c*o[m+b];return s}},rc=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,u=l-a,d=(n-e)/(r-e),m=1-d;for(let f=0;f!==a;++f)s[f]=o[u+f]*m+o[l+f]*d;return s}},sc=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},oc=class extends Gi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,u=l-a,d=this.inTangents,m=this.outTangents;if(!d||!m){let _=(n-e)/(r-e),A=1-_;for(let x=0;x!==a;++x)s[x]=o[u+x]*A+o[l+x]*_;return s}let f=a*2,g=t-1;for(let _=0;_!==a;++_){let A=o[u+_],x=o[l+_],y=g*f+_*2,w=m[y],p=m[y+1],c=t*f+_*2,b=d[c],h=d[c+1],C=(n-e)/(r-e),v,M,S,T,E;for(let I=0;I<8;I++){v=C*C,M=v*C,S=1-C,T=S*S,E=T*S;let N=E*e+3*T*C*w+3*S*v*b+M*r-n;if(Math.abs(N)<1e-10)break;let F=3*T*(w-e)+6*S*C*(b-w)+3*v*(r-b);if(Math.abs(F)<1e-10)break;C=C-N/F,C=Math.max(0,Math.min(1,C))}s[_]=E*A+3*T*C*p+3*S*v*h+M*x}return s}},wn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vs:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break;case Fh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Aa;case this.InterpolantFactoryMethodBezier:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&$g(r))for(let a=0,l=r.length;a!==l;++a){let u=r[a];if(isNaN(u)){Wt("KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Aa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,u=t[a],d=t[a+1];if(u!==d&&(a!==1||u!==t[0]))if(r)l=!0;else{let m=a*n,f=m-n,g=m+n;for(let _=0;_!==n;++_){let A=e[m+_];if(A!==e[f+_]||A!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let m=a*n,f=o*n;for(let g=0;g!==n;++g)e[f+g]=e[m+g]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,u=0;u!==n;++u)e[l+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Fa;var Hi=class extends wn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Vs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};ac.prototype.ValueTypeName="color";var cc=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};cc.prototype.ValueTypeName="number";var lc=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),u=t*a;for(let d=u+a;u!==d;u+=4)jn.slerpFlat(s,0,o,u-a,o,u,l);return s}},ho=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends wn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Vs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};hc.prototype.ValueTypeName="vector";var uc=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,m){return u.push(d,m),this},this.removeHandler=function(d){let m=u.indexOf(d);return m!==-1&&u.splice(m,2),this},this.getHandler=function(d){for(let m=0,f=u.length;m<f;m+=2){let g=u[m],_=u[m+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vp=new uc,dc=class{constructor(t){this.manager=t!==void 0?t:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fo=class extends uo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Uh=new Zt,qf=new D,Yf=new D,Zh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;qf.setFromMatrixPosition(t.matrixWorld),e.position.copy(qf),Yf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yf),e.updateMatrixWorld(),Uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Zr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ma=new D,Sa=new jn,$n=new D,po=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,Sa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ma,Sa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new D,$f=new ht,Zf=new ht,Qe=class extends po{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,$f,Zf),e.subVectors(Zf,$f)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(oh*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rs=class extends po{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jh=class extends Zh{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Jh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Wr=-90,Xr=1,fc=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(Wr,Xr,t,e);r.layers=this.layers,this.add(r);let s=new Qe(Wr,Xr,t,e);s.layers=this.layers,this.add(s);let o=new Qe(Wr,Xr,t,e);o.layers=this.layers,this.add(o);let a=new Qe(Wr,Xr,t,e);a.layers=this.layers,this.add(a);let l=new Qe(Wr,Xr,t,e);l.layers=this.layers,this.add(l);let u=new Qe(Wr,Xr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let u of e)this.remove(u);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,u,d]=this.children,m=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(m,f,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},pc=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var bu="\\[\\]\\.:\\/",J0=new RegExp("["+bu+"]","g"),Mu="[^"+bu+"]",K0="[^"+bu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",Mu),Q0=/(WCOD+)?/.source.replace("WCOD",K0),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),nx=new RegExp("^"+j0+Q0+tx+ex+"$"),ix=["material","materials","bones","map"],Kh=class{constructor(t,e,n){let r=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(t){let e=nx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ix.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[r];if(o===void 0){let u=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Kh;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f1=new Float32Array(1);var Jf=new Zt,mo=class{constructor(t,e,n=0,r=1/0){this.ray=new bn(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jf),this}intersectObject(t,e=!0,n=[]){return jh(t,this,n,e),n.sort(Kf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)jh(t[r],this,n,e);return n.sort(Kf),n}};function Kf(i,t){return i.distance-t.distance}function jh(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)jh(s[o],t,e,!0)}}var Cu=class Cu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Cu.prototype.isMatrix2=!0;var Qh=Cu;var jf=new D,wa=new D,qr=new D,Yr=new D,Bh=new D,rx=new D,sx=new D,ge=class{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jf.subVectors(t,this.start),wa.subVectors(this.end,this.start);let n=wa.dot(wa);if(n===0)return 0;let s=wa.dot(jf)/n;return e&&(s=Kt(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=rx,n=sx){let r=10000000000000001e-32,s,o,a=this.start,l=t.start,u=this.end,d=t.end;qr.subVectors(u,a),Yr.subVectors(d,l),Bh.subVectors(a,l);let m=qr.dot(qr),f=Yr.dot(Yr),g=Yr.dot(Bh);if(m<=r&&f<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(m<=r)s=0,o=g/f,o=Kt(o,0,1);else{let _=qr.dot(Bh);if(f<=r)o=0,s=Kt(-_/m,0,1);else{let A=qr.dot(Yr),x=m*f-A*A;x!==0?s=Kt((A*g-_*f)/x,0,1):s=0,o=(A*s+g)/f,o<0?(o=0,s=Kt(-_/m,0,1)):o>1&&(o=1,s=Kt((A-_)/m,0,1))}}return e.copy(a).addScaledVector(qr,s),n.copy(l).addScaledVector(Yr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Su(i,t,e,n){let r=ox(n);switch(e){case mu:return i*t;case wc:return i*t/r.components*r.byteLength;case cs:return i*t/r.components*r.byteLength;case _i:return i*t*2/r.components*r.byteLength;case vo:return i*t*2/r.components*r.byteLength;case gu:return i*t*3/r.components*r.byteLength;case sn:return i*t*4/r.components*r.byteLength;case bo:return i*t*4/r.components*r.byteLength;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Cc:return Math.max(i,16)*Math.max(t,8)/4;case Ac:case Ec:return Math.max(i,8)*Math.max(t,8)/2;case Rc:case Ic:case Dc:case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pc:case To:case Nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zc:case Jc:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Eo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ox(i){switch(i){case on:case vc:return{byteLength:1,components:1};case _r:case bc:case ei:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case An:case yo:case ln:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window!="undefined"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function lm(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ux(i){let t=new WeakMap;function e(a,l){let u=a.array,d=a.usage,m=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,d),a.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)g=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,u){let d=l.array,m=l.updateRanges;if(i.bindBuffer(u,a),m.length===0)i.bufferSubData(u,0,d);else{m.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<m.length;g++){let _=m[f],A=m[g];A.start<=_.start+_.count+1?_.count=Math.max(_.count,A.start+A.count-_.start):(++f,m[f]=A)}m.length=f+1;for(let g=0,_=m.length;g<_;g++){let A=m[g];i.bufferSubData(u,A.start*d.BYTES_PER_ELEMENT,d,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
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
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Tx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ux=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Fx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
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
}`,t_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,r_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,h_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	vec3 f0 = material.specularColorBlended;
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,u_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,m_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M_=`#if defined( USE_POINTS_UV )
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
#endif`,S_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`#ifdef USE_MORPHTARGETS
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
#endif`,R_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
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
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,K_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,j_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
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
}`,yy=`#if DEPTH_PACKING == 3200
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
}`,vy=`#define DISTANCE
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
}`,by=`#define DISTANCE
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Cy=`#define LAMBERT
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
}`,Ry=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Iy=`#define MATCAP
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
}`,Py=`#define MATCAP
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
}`,Dy=`#define NORMAL
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
}`,Ly=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Uy=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,By=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,Oy=`#define TOON
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
}`,zy=`#define TOON
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
}`,Vy=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Hy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:dx,alphahash_pars_fragment:fx,alphamap_fragment:px,alphamap_pars_fragment:mx,alphatest_fragment:gx,alphatest_pars_fragment:xx,aomap_fragment:_x,aomap_pars_fragment:yx,batching_pars_vertex:vx,batching_vertex:bx,begin_vertex:Mx,beginnormal_vertex:Sx,bsdfs:wx,iridescence_fragment:Ax,bumpmap_pars_fragment:Tx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Ix,color_fragment:Px,color_pars_fragment:Dx,color_pars_vertex:Lx,color_vertex:Nx,common:Ux,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Ox,displacementmap_vertex:zx,emissivemap_fragment:Vx,emissivemap_pars_fragment:kx,colorspace_fragment:Gx,colorspace_pars_fragment:Hx,envmap_fragment:Wx,envmap_common_pars_fragment:Xx,envmap_pars_fragment:qx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:r_,envmap_vertex:$x,fog_vertex:Zx,fog_pars_vertex:Jx,fog_fragment:Kx,fog_pars_fragment:jx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:t_,lights_lambert_fragment:e_,lights_lambert_pars_fragment:n_,lights_pars_begin:i_,lights_toon_fragment:s_,lights_toon_pars_fragment:o_,lights_phong_fragment:a_,lights_phong_pars_fragment:c_,lights_physical_fragment:l_,lights_physical_pars_fragment:h_,lights_fragment_begin:u_,lights_fragment_maps:d_,lights_fragment_end:f_,lightprobes_pars_fragment:p_,logdepthbuf_fragment:m_,logdepthbuf_pars_fragment:g_,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:__,map_fragment:y_,map_pars_fragment:v_,map_particle_fragment:b_,map_particle_pars_fragment:M_,metalnessmap_fragment:S_,metalnessmap_pars_fragment:w_,morphinstance_vertex:A_,morphcolor_vertex:T_,morphnormal_vertex:E_,morphtarget_pars_vertex:C_,morphtarget_vertex:R_,normal_fragment_begin:I_,normal_fragment_maps:P_,normal_pars_fragment:D_,normal_pars_vertex:L_,normal_vertex:N_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:F_,clearcoat_pars_fragment:O_,iridescence_pars_fragment:z_,opaque_fragment:V_,packing:k_,premultiplied_alpha_fragment:G_,project_vertex:H_,dithering_fragment:W_,dithering_pars_fragment:X_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:Z_,shadowmap_vertex:J_,shadowmask_pars_fragment:K_,skinbase_vertex:j_,skinning_pars_vertex:Q_,skinning_vertex:ty,skinnormal_vertex:ey,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:ry,tonemapping_pars_fragment:sy,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:cy,uv_pars_vertex:ly,uv_vertex:hy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:xy,depth_vert:_y,depth_frag:yy,distance_vert:vy,distance_frag:by,equirect_vert:My,equirect_frag:Sy,linedashed_vert:wy,linedashed_frag:Ay,meshbasic_vert:Ty,meshbasic_frag:Ey,meshlambert_vert:Cy,meshlambert_frag:Ry,meshmatcap_vert:Iy,meshmatcap_frag:Py,meshnormal_vert:Dy,meshnormal_frag:Ly,meshphong_vert:Ny,meshphong_frag:Uy,meshphysical_vert:By,meshphysical_frag:Fy,meshtoon_vert:Oy,meshtoon_frag:zy,points_vert:Vy,points_frag:ky,shadow_vert:Gy,shadow_frag:Hy,sprite_vert:Wy,sprite_frag:Xy},Tt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ii={basic:{uniforms:tn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:tn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:tn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:tn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:tn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:tn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:tn([Tt.points,Tt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:tn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:tn([Tt.common,Tt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:tn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:tn([Tt.sprite,Tt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:tn([Tt.common,Tt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:tn([Tt.lights,Tt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};ii.physical={uniforms:tn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var rl={r:0,b:0,g:0},qy=new Zt,hm=new $t;hm.set(-1,0,0,0,1,0,0,0,1);function Yy(i,t,e,n,r,s){let o=new Jt(0),a=r===!0?0:1,l,u,d=null,m=0,f=null;function g(w){let p=w.isScene===!0?w.background:null;if(p&&p.isTexture){let c=w.backgroundBlurriness>0;p=t.get(p,c)}return p}function _(w){let p=!1,c=g(w);c===null?x(o,a):c&&c.isColor&&(x(c,1),p=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||p)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(w,p){let c=g(p);c&&(c.isCubeTexture||c.mapping===xo)?(u===void 0&&(u=new me(new Fn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:yr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,h,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=c,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(p.backgroundRotation)).transpose(),c.isCubeTexture&&c.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(hm),u.material.toneMapped=ne.getTransfer(c.colorSpace)!==oe,(d!==c||m!==c.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=c,m=c.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):c&&c.isTexture&&(l===void 0&&(l=new me(new lo(2,2),new Sn({name:"BackgroundMaterial",uniforms:yr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=c,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ne.getTransfer(c.colorSpace)!==oe,c.matrixAutoUpdate===!0&&c.updateMatrix(),l.material.uniforms.uvTransform.value.copy(c.matrix),(d!==c||m!==c.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=c,m=c.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function x(w,p){w.getRGB(rl,vu(i)),e.buffers.color.setClear(rl.r,rl.g,rl.b,p,s)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,p=1){o.set(w),a=p,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,x(o,a)},render:_,addToRenderList:A,dispose:y}}function $y(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(T,E,I,U,N){let F=!1,O=m(T,U,I,E);s!==O&&(s=O,u(s.object)),F=g(T,U,I,N),F&&_(T,U,I,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,c(T,E,I,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function u(T){return i.bindVertexArray(T)}function d(T){return i.deleteVertexArray(T)}function m(T,E,I,U){let N=U.wireframe===!0,F=n[E.id];F===void 0&&(F={},n[E.id]=F);let O=T.isInstancedMesh===!0?T.id:0,G=F[O];G===void 0&&(G={},F[O]=G);let W=G[I.id];W===void 0&&(W={},G[I.id]=W);let ot=W[N];return ot===void 0&&(ot=f(l()),W[N]=ot),ot}function f(T){let E=[],I=[],U=[];for(let N=0;N<e;N++)E[N]=0,I[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:U,object:T,attributes:{},index:null}}function g(T,E,I,U){let N=s.attributes,F=E.attributes,O=0,G=I.getAttributes();for(let W in G)if(G[W].location>=0){let K=N[W],rt=F[W];if(rt===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(rt=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(rt=T.instanceColor)),K===void 0||K.attribute!==rt||rt&&K.data!==rt.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function _(T,E,I,U){let N={},F=E.attributes,O=0,G=I.getAttributes();for(let W in G)if(G[W].location>=0){let K=F[W];K===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(K=T.instanceColor));let rt={};rt.attribute=K,K&&K.data&&(rt.data=K.data),N[W]=rt,O++}s.attributes=N,s.attributesNum=O,s.index=U}function A(){let T=s.newAttributes;for(let E=0,I=T.length;E<I;E++)T[E]=0}function x(T){y(T,0)}function y(T,E){let I=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;I[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),N[T]!==E&&(i.vertexAttribDivisor(T,E),N[T]=E)}function w(){let T=s.newAttributes,E=s.enabledAttributes;for(let I=0,U=E.length;I<U;I++)E[I]!==T[I]&&(i.disableVertexAttribArray(I),E[I]=0)}function p(T,E,I,U,N,F,O){O===!0?i.vertexAttribIPointer(T,E,I,N,F):i.vertexAttribPointer(T,E,I,U,N,F)}function c(T,E,I,U){A();let N=U.attributes,F=I.getAttributes(),O=E.defaultAttributeValues;for(let G in F){let W=F[G];if(W.location>=0){let ot=N[G];if(ot===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor)),ot!==void 0){let K=ot.normalized,rt=ot.itemSize,xt=t.get(ot);if(xt===void 0)continue;let Ct=xt.buffer,_t=xt.type,$=xt.bytesPerElement,nt=_t===i.INT||_t===i.UNSIGNED_INT||ot.gpuType===yo;if(ot.isInterleavedBufferAttribute){let tt=ot.data,lt=tt.stride,pt=ot.offset;if(tt.isInstancedInterleavedBuffer){for(let dt=0;dt<W.locationSize;dt++)y(W.location+dt,tt.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let dt=0;dt<W.locationSize;dt++)x(W.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt,rt/W.locationSize,_t,K,lt*$,(pt+rt/W.locationSize*dt)*$,nt)}else{if(ot.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)y(W.location+tt,ot.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let tt=0;tt<W.locationSize;tt++)x(W.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let tt=0;tt<W.locationSize;tt++)p(W.location+tt,rt/W.locationSize,_t,K,rt*$,rt/W.locationSize*tt*$,nt)}}else if(O!==void 0){let K=O[G];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(W.location,K);break;case 3:i.vertexAttrib3fv(W.location,K);break;case 4:i.vertexAttrib4fv(W.location,K);break;default:i.vertexAttrib1fv(W.location,K)}}}}w()}function b(){M();for(let T in n){let E=n[T];for(let I in E){let U=E[I];for(let N in U){let F=U[N];for(let O in F)d(F[O].object),delete F[O];delete U[N]}}delete n[T]}}function h(T){if(n[T.id]===void 0)return;let E=n[T.id];for(let I in E){let U=E[I];for(let N in U){let F=U[N];for(let O in F)d(F[O].object),delete F[O];delete U[N]}}delete n[T.id]}function C(T){for(let E in n){let I=n[E];for(let U in I){let N=I[U];if(N[T.id]===void 0)continue;let F=N[T.id];for(let O in F)d(F[O].object),delete F[O];delete N[T.id]}}}function v(T){for(let E in n){let I=n[E],U=T.isInstancedMesh===!0?T.id:0,N=I[U];if(N!==void 0){for(let F in N){let O=N[F];for(let G in O)d(O[G].object),delete O[G];delete N[F]}delete I[U],Object.keys(I).length===0&&delete n[E]}}}function M(){S(),o=!0,s!==r&&(s=r,u(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:h,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:A,enableAttribute:x,disableUnusedAttributes:w}}function Zy(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Jy(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let v=C===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!v)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",d=l(u);d!==u&&(Ht("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let m=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),c=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),h=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:A,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:w,maxVaryings:p,maxFragmentUniforms:c,maxSamples:b,samples:h}}function Ky(i){let t=this,e=null,n=0,r=!1,s=!1,o=new He,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){let g=m.length!==0||f||n!==0||r;return r=f,n=m.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){e=d(m,f,0)},this.setState=function(m,f,g){let _=m.clippingPlanes,A=m.clipIntersection,x=m.clipShadows,y=i.get(m);if(!r||_===null||_.length===0||s&&!x)s?d(null):u();else{let w=s?0:n,p=w*4,c=y.clippingState||null;l.value=c,c=d(_,f,p,g);for(let b=0;b!==p;++b)c[b]=e[b];y.clippingState=c,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,f,g,_){let A=m!==null?m.length:0,x=null;if(A!==0){if(x=l.value,_!==!0||x===null){let y=g+A*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(x===null||x.length<y)&&(x=new Float32Array(y));for(let p=0,c=g;p!==A;++p,c+=4)o.copy(m[p]).applyMatrix4(w,a),o.normal.toArray(x,c),x[c+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,x}}var $i=4,kp=[.125,.215,.35,.446,.526,.582],vr=20,jy=256,Co=new rs,Gp=new Jt,Ru=null,Iu=0,Pu=0,Du=!1,Qy=new D,ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Qy}=s;Ru=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ru,Iu,Pu),this._renderer.xr.enabled=Du,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ru=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:ei,format:sn,colorSpace:ks,depthBuffer:!1},r=Hp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tv(s)),this._blurMaterial=nv(s,t,e),this._ggxMaterial=ev(s,t,e)}return r}_compileMaterial(t){let e=new me(new Be,t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,r,s){let l=new Qe(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,g=m.toneMapping;m.getClearColor(Gp),m.toneMapping=On,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new me(new Fn,new mi({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,x=A.material,y=!1,w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,y=!0):(x.color.copy(Gp),y=!0);for(let p=0;p<6;p++){let c=p%3;c===0?(l.up.set(0,u[p],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[p],s.y,s.z)):c===1?(l.up.set(0,0,u[p]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[p],s.z)):(l.up.set(0,u[p],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[p]));let b=this._cubeSize;hs(r,c*b,p>2?b:0,b,b),m.setRenderTarget(r),y&&m.render(A,l),m.render(t,l)}m.toneMapping=g,m.autoClear=f,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Xi||t.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),m=Math.sqrt(u*u-d*d),f=0+u*1.25,g=m*f,{_lodMax:_}=this,A=this._sizeLods[n],x=3*A*(n>_-$i?n-_+$i:0),y=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=_-e,hs(s,x,y,3*A,2*A),r.setRenderTarget(s),r.render(a,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,hs(t,x,y,3*A,2*A),r.setRenderTarget(t),r.render(a,Co)}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");let d=3,m=this._lodMeshes[r];m.material=u;let f=u.uniforms,g=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*vr-1),A=s/_,x=isFinite(s)?1+Math.floor(d*A):vr;x>vr&&Ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vr}`);let y=[],w=0;for(let C=0;C<vr;++C){let v=C/A,M=Math.exp(-v*v/2);y.push(M),C===0?w+=M:C<x&&(w+=2*M)}for(let C=0;C<y.length;C++)y[C]=y[C]/w;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=y,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:p}=this;f.dTheta.value=_,f.mipInt.value=p-n;let c=this._sizeLods[r],b=3*c*(r>p-$i?r-p+$i:0),h=4*(this._cubeSize-c);hs(e,b,h,3*c,2*c),l.setRenderTarget(e),l.render(m,Co)}};function tv(i){let t=[],e=[],n=[],r=i,s=i-$i+1+kp.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-$i?l=kp[o-i+$i-1]:o===0&&(l=0),e.push(l);let u=1/(a-2),d=-u,m=1+u,f=[d,d,m,d,m,m,d,d,m,m,d,m],g=6,_=6,A=3,x=2,y=1,w=new Float32Array(A*_*g),p=new Float32Array(x*_*g),c=new Float32Array(y*_*g);for(let h=0;h<g;h++){let C=h%3*2/3-1,v=h>2?0:-1,M=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];w.set(M,A*_*h),p.set(f,x*_*h);let S=[h,h,h,h,h,h];c.set(S,y*_*h)}let b=new Be;b.setAttribute("position",new Ce(w,A)),b.setAttribute("uv",new Ce(p,x)),b.setAttribute("faceIndex",new Ce(c,y)),n.push(new me(b,null)),r>$i&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Hp(i,t,e){let n=new vn(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ev(i,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function nv(i,t,e){let n=new Float32Array(vr),r=new D(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ll(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wp(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xp(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}var al=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ks(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fn(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ti});s.uniforms.tEquirect.value=e;let o=new me(r,s),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=Xe),new fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function iv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,g=!1){return f==null?null:g?o(f):s(f)}function s(f){if(f&&f.isTexture){let g=f.mapping;if(g===xc||g===_c)if(t.has(f)){let _=t.get(f).texture;return a(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let A=new al(_.height);return A.fromEquirectangularTexture(i,f),t.set(f,A),f.addEventListener("dispose",u),a(A.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let g=f.mapping,_=g===xc||g===_c,A=g===Xi||g===xr;if(_||A){let x=e.get(f),y=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new ol(i)),x=_?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{let w=f.image;return _&&w&&w.height>0||A&&w&&l(w)?(n===null&&(n=new ol(i)),x=_?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",d),x.texture):null}}}return f}function a(f,g){return g===xc?f.mapping=Xi:g===_c&&(f.mapping=xr),f}function l(f){let g=0,_=6;for(let A=0;A<_;A++)f[A]!==void 0&&g++;return g===_}function u(f){let g=f.target;g.removeEventListener("dispose",u);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function d(f){let g=f.target;g.removeEventListener("dispose",d);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function rv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&dr("WebGLRenderer: "+n+" extension not supported."),r}}}function sv(i,t,e,n){let r={},s=new WeakMap;function o(m){let f=m.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];let g=s.get(f);g&&(t.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(m,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(m){let f=m.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER)}function u(m){let f=[],g=m.index,_=m.attributes.position,A=0;if(_===void 0)return;if(g!==null){let w=g.array;A=g.version;for(let p=0,c=w.length;p<c;p+=3){let b=w[p+0],h=w[p+1],C=w[p+2];f.push(b,h,h,C,C,b)}}else{let w=_.array;A=_.version;for(let p=0,c=w.length/3-1;p<c;p+=3){let b=p+0,h=p+1,C=p+2;f.push(b,h,h,C,C,b)}}let x=new(_.count>=65535?Ys:qs)(f,1);x.version=A;let y=s.get(m);y&&t.remove(y),s.set(m,x)}function d(m){let f=s.get(m);if(f){let g=m.index;g!==null&&f.version<g.version&&u(m)}else u(m);return s.get(m)}return{get:a,update:l,getWireframeAttribute:d}}function ov(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,f){i.drawElements(n,f,s,m*o),e.update(f,n,1)}function u(m,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,m*o,g),e.update(f,n,g))}function d(m,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,m,0,g);let A=0;for(let x=0;x<g;x++)A+=f[x];e.update(A,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function av(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function cv(i,t,e){let n=new WeakMap,r=new se;function s(o,a,l){let u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0,f=n.get(a);if(f===void 0||f.count!==m){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],p=0;g===!0&&(p=1),_===!0&&(p=2),A===!0&&(p=3);let c=a.attributes.position.count*p,b=1;c>t.maxTextureSize&&(b=Math.ceil(c/t.maxTextureSize),c=t.maxTextureSize);let h=new Float32Array(c*b*4*m),C=new Ws(h,c,b,m);C.type=ln,C.needsUpdate=!0;let v=p*4;for(let S=0;S<m;S++){let T=x[S],E=y[S],I=w[S],U=c*b*4*S;for(let N=0;N<T.count;N++){let F=N*v;g===!0&&(r.fromBufferAttribute(T,N),h[U+F+0]=r.x,h[U+F+1]=r.y,h[U+F+2]=r.z,h[U+F+3]=0),_===!0&&(r.fromBufferAttribute(E,N),h[U+F+4]=r.x,h[U+F+5]=r.y,h[U+F+6]=r.z,h[U+F+7]=0),A===!0&&(r.fromBufferAttribute(I,N),h[U+F+8]=r.x,h[U+F+9]=r.y,h[U+F+10]=r.z,h[U+F+11]=I.itemSize===4?r.w:1)}}f={count:m,texture:C,size:new ht(c,b)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let A=0;A<u.length;A++)g+=u[A];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function lv(i,t,e,n,r){let s=new WeakMap;function o(u){let d=r.render.frame,m=u.geometry,f=t.get(u,m);if(s.get(f)!==d&&(t.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){let g=u.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return f}function a(){s=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var hv={[su]:"LINEAR_TONE_MAPPING",[ou]:"REINHARD_TONE_MAPPING",[au]:"CINEON_TONE_MAPPING",[cu]:"ACES_FILMIC_TONE_MAPPING",[hu]:"AGX_TONE_MAPPING",[uu]:"NEUTRAL_TONE_MAPPING",[lu]:"CUSTOM_TONE_MAPPING"};function uv(i,t,e,n,r,s){let o=new vn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new xi(t,e):void 0}),a=new vn(t,e,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Be;l.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Se([0,2,0,0,2,0],2));let u=new tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new me(l,u),m=new rs(-1,1,1,-1,0,1),f=null,g=null,_=!1,A,x=null,y=[],w=!1;this.setSize=function(p,c){o.setSize(p,c),a.setSize(p,c);for(let b=0;b<y.length;b++){let h=y[b];h.setSize&&h.setSize(p,c)}},this.setEffects=function(p){y=p,w=y.length>0&&y[0].isRenderPass===!0;let c=o.width,b=o.height;for(let h=0;h<y.length;h++){let C=y[h];C.setSize&&C.setSize(c,b)}},this.begin=function(p,c){if(_||p.toneMapping===On&&y.length===0)return!1;if(x=c,c!==null){let b=c.width,h=c.height;(o.width!==b||o.height!==h)&&this.setSize(b,h)}return w===!1&&p.setRenderTarget(o),A=p.toneMapping,p.toneMapping=On,!0},this.hasRenderPass=function(){return w},this.end=function(p,c){p.toneMapping=A,_=!0;let b=o,h=a;for(let C=0;C<y.length;C++){let v=y[C];if(v.enabled!==!1&&(v.render(p,h,b,c),v.needsSwap!==!1)){let M=b;b=h,h=M}}if(f!==p.outputColorSpace||g!==p.toneMapping){f=p.outputColorSpace,g=p.toneMapping,u.defines={},ne.getTransfer(f)===oe&&(u.defines.SRGB_TRANSFER="");let C=hv[g];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,p.setRenderTarget(x),p.render(d,m),x=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),u.dispose()}}var um=new hn,Uu=new xi(1,1),dm=new Ws,fm=new ka,pm=new Ks,qp=[],Yp=[],$p=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hl(i,t){let e=Yp[t];e===void 0&&(e=new Int32Array(t),Yp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function gv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Jp.set(n),i.uniformMatrix2fv(this.addr,!1,Jp),Oe(e,n)}}function xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Zp.set(n),i.uniformMatrix3fv(this.addr,!1,Zp),Oe(e,n)}}function _v(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;$p.set(n),i.uniformMatrix4fv(this.addr,!1,$p),Oe(e,n)}}function yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Sv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Ev(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Uu.compareFunction=e.isReversedDepthBuffer()?il:nl,s=Uu):s=um,e.setTexture2D(t||s,r)}function Cv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||fm,r)}function Rv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||pm,r)}function Iv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||dm,r)}function Pv(i){switch(i){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return vv;case 35668:case 35672:return bv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return wv;case 36295:return Av;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Dv(i,t){i.uniform1fv(this.addr,t)}function Lv(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function Nv(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function Uv(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Bv(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fv(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ov(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zv(i,t){i.uniform1iv(this.addr,t)}function Vv(i,t){i.uniform2iv(this.addr,t)}function kv(i,t){i.uniform3iv(this.addr,t)}function Gv(i,t){i.uniform4iv(this.addr,t)}function Hv(i,t){i.uniform1uiv(this.addr,t)}function Wv(i,t){i.uniform2uiv(this.addr,t)}function Xv(i,t){i.uniform3uiv(this.addr,t)}function qv(i,t){i.uniform4uiv(this.addr,t)}function Yv(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Uu:o=um;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function $v(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||fm,s[o])}function Zv(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||pm,s[o])}function Jv(i,t,e){let n=this.cache,r=t.length,s=hl(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||dm,s[o])}function Kv(i){switch(i){case 5126:return Dv;case 35664:return Lv;case 35665:return Nv;case 35666:return Uv;case 35674:return Bv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return zv;case 35667:case 35671:return Vv;case 35668:case 35672:return kv;case 35669:case 35673:return Gv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Jv}}var Bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pv(e.type)}},Fu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kv(e.type)}},Ou=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function Kp(i,t){i.seq.push(t),i.map[t.id]=t}function jv(i,t,e){let n=i.name,r=n.length;for(Lu.lastIndex=0;;){let s=Lu.exec(n),o=Lu.lastIndex,a=s[1],l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Kp(e,u===void 0?new Bu(a,i,t):new Fu(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new Ou(a),Kp(e,m)),e=m}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jv(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function jp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qv=37297,tb=0;function eb(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Qp=new $t;function nb(i){ne._getMatrix(Qp,ne.workingColorSpace,i);let t=`mat3( ${Qp.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Gs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+eb(i.getShaderSource(t),a)}else return s}function ib(i,t){let e=nb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var rb={[su]:"Linear",[ou]:"Reinhard",[au]:"Cineon",[cu]:"ACESFilmic",[hu]:"AgX",[uu]:"Neutral",[lu]:"Custom"};function sb(i,t){let e=rb[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new D;function ob(){ne.getLuminanceCoefficients(sl);let i=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ab(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function cb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Io(i){return i!==""}function em(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(i){return i.replace(hb,db)}var ub=new Map;function db(i,t){let e=te[t];if(e===void 0){let n=ub.get(t);if(n!==void 0)e=te[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zu(e)}var fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(i){return i.replace(fb,pb)}function pb(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var mb={[go]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function gb(i){return mb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xb={[Xi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function _b(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yb={[xr]:"ENVMAP_MODE_REFRACTION"};function vb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bb={[ru]:"ENVMAP_BLENDING_MULTIPLY",[yp]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function Mb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bb[i.combine]||"ENVMAP_BLENDING_NONE"}function Sb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wb(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=gb(e),u=_b(e),d=vb(e),m=Mb(e),f=Sb(e),g=ab(e),_=cb(s),A=r.createProgram(),x,y,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Io).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Io).join(`
`),y.length>0&&(y+=`
`)):(x=[rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),y=[rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?te.tonemapping_pars_fragment:"",e.toneMapping!==On?sb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,ib("linearToOutputTexel",e.outputColorSpace),ob(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),o=zu(o),o=em(o,e),o=nm(o,e),a=zu(a),a=em(a,e),a=nm(a,e),o=im(o),a=im(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",e.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let p=w+x+o,c=w+y+a,b=jp(r,r.VERTEX_SHADER,p),h=jp(r,r.FRAGMENT_SHADER,c);r.attachShader(A,b),r.attachShader(A,h),e.index0AttributeName!==void 0?r.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function C(T){if(i.debug.checkShaderErrors){let E=r.getProgramInfoLog(A)||"",I=r.getShaderInfoLog(b)||"",U=r.getShaderInfoLog(h)||"",N=E.trim(),F=I.trim(),O=U.trim(),G=!0,W=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,b,h);else{let ot=tm(r,b,"vertex"),K=tm(r,h,"fragment");Wt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+ot+`
`+K)}else N!==""?Ht("WebGLProgram: Program Info Log:",N):(F===""||O==="")&&(W=!1);W&&(T.diagnostics={runnable:G,programLog:N,vertexShader:{log:F,prefix:x},fragmentShader:{log:O,prefix:y}})}r.deleteShader(b),r.deleteShader(h),v=new us(r,A),M=lb(r,A)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(A,Qv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tb++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=b,this.fragmentShader=h,this}var Ab=0,Vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ku(t),e.set(t,n)),n}},ku=class{constructor(t){this.id=Ab++,this.code=t,this.usedTimes=0}};function Tb(i){return i===_i||i===To||i===Eo}function Eb(i,t,e,n,r,s){let o=new jr,a=new Vu,l=new Set,u=[],d=new Map,m=n.logarithmicDepthBuffer,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function A(v,M,S,T,E,I){let U=T.fog,N=E.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=t.get(v.envMap||F,O),W=G&&G.mapping===xo?G.image.height:null,ot=g[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Ht("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=K!==void 0?K.length:0,xt=0;N.morphAttributes.position!==void 0&&(xt=1),N.morphAttributes.normal!==void 0&&(xt=2),N.morphAttributes.color!==void 0&&(xt=3);let Ct,_t,$,nt;if(ot){let Bt=ii[ot];Ct=Bt.vertexShader,_t=Bt.fragmentShader}else{Ct=v.vertexShader,_t=v.fragmentShader;let Bt=a.getVertexShaderStage(v),be=a.getFragmentShaderStage(v);a.update(v,Bt,be),$=Bt.id,nt=be.id}let tt=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),pt=E.isInstancedMesh===!0,dt=E.isBatchedMesh===!0,Yt=!!v.map,wt=!!v.matcap,Z=!!G,et=!!v.aoMap,j=!!v.lightMap,at=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,vt=!!v.displacementMap,ft=!!v.emissiveMap,It=!!v.metalnessMap,Dt=!!v.roughnessMap,B=v.anisotropy>0,ie=v.clearcoat>0,Ut=v.dispersion>0,L=v.iridescence>0,R=v.sheen>0,z=v.transmission>0,H=B&&!!v.anisotropyMap,J=ie&&!!v.clearcoatMap,ut=ie&&!!v.clearcoatNormalMap,mt=ie&&!!v.clearcoatRoughnessMap,Q=L&&!!v.iridescenceMap,st=L&&!!v.iridescenceThicknessMap,bt=R&&!!v.sheenColorMap,zt=R&&!!v.sheenRoughnessMap,At=!!v.specularMap,Mt=!!v.specularColorMap,Gt=!!v.specularIntensityMap,qt=z&&!!v.transmissionMap,jt=z&&!!v.thicknessMap,V=!!v.gradientMap,yt=!!v.alphaMap,it=v.alphaTest>0,St=!!v.alphaHash,Pt=!!v.extensions,ct=On;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ct=i.toneMapping);let Ot={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:Ct,fragmentShader:_t,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:dt,batchingColor:dt&&E._colorsTexture!==null,instancing:pt,instancingColor:pt&&E.instanceColor!==null,instancingMorph:pt&&E.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:wt,envMap:Z,envMapMode:Z&&G.mapping,envMapCubeUVHeight:W,aoMap:et,lightMap:j,bumpMap:at,normalMap:gt,displacementMap:vt,emissiveMap:ft,normalMapObjectSpace:gt&&v.normalMapType===Sp,normalMapTangentSpace:gt&&v.normalMapType===el,packedNormalMap:gt&&v.normalMapType===el&&Tb(v.normalMap.format),metalnessMap:It,roughnessMap:Dt,anisotropy:B,anisotropyMap:H,clearcoat:ie,clearcoatMap:J,clearcoatNormalMap:ut,clearcoatRoughnessMap:mt,dispersion:Ut,iridescence:L,iridescenceMap:Q,iridescenceThicknessMap:st,sheen:R,sheenColorMap:bt,sheenRoughnessMap:zt,specularMap:At,specularColorMap:Mt,specularIntensityMap:Gt,transmission:z,transmissionMap:qt,thicknessMap:jt,gradientMap:V,opaque:v.transparent===!1&&v.blending===fr&&v.alphaToCoverage===!1,alphaMap:yt,alphaTest:it,alphaHash:St,combine:v.combine,mapUv:Yt&&_(v.map.channel),aoMapUv:et&&_(v.aoMap.channel),lightMapUv:j&&_(v.lightMap.channel),bumpMapUv:at&&_(v.bumpMap.channel),normalMapUv:gt&&_(v.normalMap.channel),displacementMapUv:vt&&_(v.displacementMap.channel),emissiveMapUv:ft&&_(v.emissiveMap.channel),metalnessMapUv:It&&_(v.metalnessMap.channel),roughnessMapUv:Dt&&_(v.roughnessMap.channel),anisotropyMapUv:H&&_(v.anisotropyMap.channel),clearcoatMapUv:J&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:zt&&_(v.sheenRoughnessMap.channel),specularMapUv:At&&_(v.specularMap.channel),specularColorMapUv:Mt&&_(v.specularColorMap.channel),specularIntensityMapUv:Gt&&_(v.specularIntensityMap.channel),transmissionMapUv:qt&&_(v.transmissionMap.channel),thicknessMapUv:jt&&_(v.thicknessMap.channel),alphaMapUv:yt&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(gt||B),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!N.attributes.uv&&(Yt||yt),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:lt,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===oe,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&v.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function x(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let S in v.defines)M.push(S),M.push(v.defines[S]);return v.isRawShaderMaterial===!1&&(y(M,v),w(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function y(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function w(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function p(v){let M=g[v.type],S;if(M){let T=ii[M];S=zp.clone(T.uniforms)}else S=v.uniforms;return S}function c(v,M){let S=d.get(M);return S!==void 0?++S.usedTimes:(S=new wb(i,M,v,r),u.push(S),d.set(M,S)),S}function b(v){if(--v.usedTimes===0){let M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function h(v){a.remove(v)}function C(){a.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:p,acquireProgram:c,releaseProgram:b,releaseShaderCache:h,programs:u,dispose:C}}function Cb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Rb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function om(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,_,A,x,y){let w=i[t];return w===void 0?(w={id:f.id,object:f,geometry:g,material:_,materialVariant:o(f),groupOrder:A,renderOrder:f.renderOrder,z:x,group:y},i[t]=w):(w.id=f.id,w.object=f,w.geometry=g,w.material=_,w.materialVariant=o(f),w.groupOrder=A,w.renderOrder=f.renderOrder,w.z=x,w.group=y),t++,w}function l(f,g,_,A,x,y){let w=a(f,g,_,A,x,y);_.transmission>0?n.push(w):_.transparent===!0?r.push(w):e.push(w)}function u(f,g,_,A,x,y){let w=a(f,g,_,A,x,y);_.transmission>0?n.unshift(w):_.transparent===!0?r.unshift(w):e.unshift(w)}function d(f,g,_){e.length>1&&e.sort(f||Rb),n.length>1&&n.sort(g||sm),r.length>1&&r.sort(g||sm),_&&(e.reverse(),n.reverse(),r.reverse())}function m(){for(let f=t,g=i.length;f<g;f++){let _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:m,sort:d}}function Ib(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new om,i.set(n,[o])):r>=s.length?(o=new om,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Jt};break;case"SpotLight":e={position:new D,direction:new D,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Db(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Lb=0;function Nb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ub(i){let t=new Pb,e=Db(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new D);let r=new D,s=new Zt,o=new Zt;function a(u){let d=0,m=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let g=0,_=0,A=0,x=0,y=0,w=0,p=0,c=0,b=0,h=0,C=0;u.sort(Nb);for(let M=0,S=u.length;M<S;M++){let T=u[M],E=T.color,I=T.intensity,U=T.distance,N=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===_i?N=T.shadow.map.texture:N=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)d+=E.r*I,m+=E.g*I,f+=E.b*I;else if(T.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(T.sh.coefficients[F],I);C++}else if(T.isDirectionalLight){let F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let O=T.shadow,G=e.get(T);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=T.shadow.matrix,w++}n.directional[g]=F,g++}else if(T.isSpotLight){let F=t.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(E).multiplyScalar(I),F.distance=U,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,n.spot[A]=F;let O=T.shadow;if(T.map&&(n.spotLightMap[b]=T.map,b++,O.updateMatrices(T),T.castShadow&&h++),n.spotLightMatrix[A]=O.matrix,T.castShadow){let G=e.get(T);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[A]=G,n.spotShadowMap[A]=N,c++}A++}else if(T.isRectAreaLight){let F=t.get(T);F.color.copy(E).multiplyScalar(I),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),n.rectArea[x]=F,x++}else if(T.isPointLight){let F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){let O=T.shadow,G=e.get(T);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=N,n.pointShadowMatrix[_]=T.shadow.matrix,p++}n.point[_]=F,_++}else if(T.isHemisphereLight){let F=t.get(T);F.skyColor.copy(T.color).multiplyScalar(I),F.groundColor.copy(T.groundColor).multiplyScalar(I),n.hemi[y]=F,y++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=f;let v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==A||v.rectAreaLength!==x||v.hemiLength!==y||v.numDirectionalShadows!==w||v.numPointShadows!==p||v.numSpotShadows!==c||v.numSpotMaps!==b||v.numLightProbes!==C)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=x,n.point.length=_,n.hemi.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=c,n.spotShadowMap.length=c,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=c+b-h,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=h,n.numLightProbes=C,v.directionalLength=g,v.pointLength=_,v.spotLength=A,v.rectAreaLength=x,v.hemiLength=y,v.numDirectionalShadows=w,v.numPointShadows=p,v.numSpotShadows=c,v.numSpotMaps=b,v.numLightProbes=C,n.version=Lb++)}function l(u,d){let m=0,f=0,g=0,_=0,A=0,x=d.matrixWorldInverse;for(let y=0,w=u.length;y<w;y++){let p=u[y];if(p.isDirectionalLight){let c=n.directional[m];c.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(x),m++}else if(p.isSpotLight){let c=n.spot[g];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(x),c.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(x),g++}else if(p.isRectAreaLight){let c=n.rectArea[_];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(x),o.identity(),s.copy(p.matrixWorld),s.premultiply(x),o.extractRotation(s),c.halfWidth.set(p.width*.5,0,0),c.halfHeight.set(0,p.height*.5,0),c.halfWidth.applyMatrix4(o),c.halfHeight.applyMatrix4(o),_++}else if(p.isPointLight){let c=n.point[f];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(x),f++}else if(p.isHemisphereLight){let c=n.hemi[A];c.direction.setFromMatrixPosition(p.matrixWorld),c.direction.transformDirection(x),A++}}}return{setup:a,setupView:l,state:n}}function am(i){let t=new Ub(i),e=[],n=[],r=[];function s(f){m.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function u(){t.setup(e)}function d(f){t.setupView(e,f)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Bb(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new am(i),t.set(r,[a])):s>=o.length?(a=new am(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ob=`uniform sampler2D shadow_pass;
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
}`,zb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Vb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],cm=new Zt,Ro=new D,Nu=new D;function kb(i,t,e){let n=new gi,r=new ht,s=new ht,o=new se,a=new ec,l=new nc,u={},d=e.maxTextureSize,m={[Pn]:qe,[qe]:Pn,[un]:un},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Fb,fragmentShader:Ob}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let _=new Be;_.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new me(_,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let y=this.type;this.render=function(h,C,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||h.length===0)return;this.type===gc&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=go);let M=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),E=i.state;E.setBlending(ti),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let I=y!==this.type;I&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(N=>N.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,N=h.length;U<N;U++){let F=h[U],O=F.shadow;if(O===void 0){Ht("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let G=O.getFrameExtents();r.multiply(G),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,O.mapSize.y=s.y));let W=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===os){if(F.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new vn(r.x,r.y,{format:_i,type:ei,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new xi(r.x,r.y,ln),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=Jn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ne,O.map.depthTexture.magFilter=Ne}else F.isPointLight?(O.map=new al(r.x),O.map.depthTexture=new qa(r.x,An)):(O.map=new vn(r.x,r.y),O.map.depthTexture=new xi(r.x,r.y,An)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=Jn,this.type===go?(O.map.depthTexture.compareFunction=W?il:nl,O.map.depthTexture.minFilter=Xe,O.map.depthTexture.magFilter=Xe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ne,O.map.depthTexture.magFilter=Ne);O.camera.updateProjectionMatrix()}let ot=O.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<ot;K++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,K),i.clear();else{K===0&&(i.setRenderTarget(O.map),i.clear());let rt=O.getViewport(K);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),E.viewport(o)}if(F.isPointLight){let rt=O.camera,xt=O.matrix,Ct=F.distance||rt.far;Ct!==rt.far&&(rt.far=Ct,rt.updateProjectionMatrix()),Ro.setFromMatrixPosition(F.matrixWorld),rt.position.copy(Ro),Nu.copy(rt.position),Nu.add(zb[K]),rt.up.copy(Vb[K]),rt.lookAt(Nu),rt.updateMatrixWorld(),xt.makeTranslation(-Ro.x,-Ro.y,-Ro.z),cm.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(cm,rt.coordinateSystem,rt.reversedDepth)}else O.updateMatrices(F);n=O.getFrustum(),c(C,v,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===os&&w(O,v),O.needsUpdate=!1}y=this.type,x.needsUpdate=!1,i.setRenderTarget(M,S,T)};function w(h,C){let v=t.update(A);f.defines.VSM_SAMPLES!==h.blurSamples&&(f.defines.VSM_SAMPLES=h.blurSamples,g.defines.VSM_SAMPLES=h.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),h.mapPass===null&&(h.mapPass=new vn(r.x,r.y,{format:_i,type:ei})),f.uniforms.shadow_pass.value=h.map.depthTexture,f.uniforms.resolution.value=h.mapSize,f.uniforms.radius.value=h.radius,i.setRenderTarget(h.mapPass),i.clear(),i.renderBufferDirect(C,null,v,f,A,null),g.uniforms.shadow_pass.value=h.mapPass.texture,g.uniforms.resolution.value=h.mapSize,g.uniforms.radius.value=h.radius,i.setRenderTarget(h.map),i.clear(),i.renderBufferDirect(C,null,v,g,A,null)}function p(h,C,v,M){let S=null,T=v.isPointLight===!0?h.customDistanceMaterial:h.customDepthMaterial;if(T!==void 0)S=T;else if(S=v.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let E=S.uuid,I=C.uuid,U=u[E];U===void 0&&(U={},u[E]=U);let N=U[I];N===void 0&&(N=S.clone(),U[I]=N,C.addEventListener("dispose",b)),S=N}if(S.visible=C.visible,S.wireframe=C.wireframe,M===os?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:m[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let E=i.properties.get(S);E.light=v}return S}function c(h,C,v,M,S){if(h.visible===!1)return;if(h.layers.test(C.layers)&&(h.isMesh||h.isLine||h.isPoints)&&(h.castShadow||h.receiveShadow&&S===os)&&(!h.frustumCulled||n.intersectsObject(h))){h.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,h.matrixWorld);let I=t.update(h),U=h.material;if(Array.isArray(U)){let N=I.groups;for(let F=0,O=N.length;F<O;F++){let G=N[F],W=U[G.materialIndex];if(W&&W.visible){let ot=p(h,W,M,S);h.onBeforeShadow(i,h,C,v,I,ot,G),i.renderBufferDirect(v,null,I,ot,h,G),h.onAfterShadow(i,h,C,v,I,ot,G)}}}else if(U.visible){let N=p(h,U,M,S);h.onBeforeShadow(i,h,C,v,I,N,null),i.renderBufferDirect(v,null,I,N,h,null),h.onAfterShadow(i,h,C,v,I,N,null)}}let E=h.children;for(let I=0,U=E.length;I<U;I++)c(E[I],C,v,M,S)}function b(h){h.target.removeEventListener("dispose",b);for(let v in u){let M=u[v],S=h.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Gb(i,t){function e(){let V=!1,yt=new se,it=null,St=new se(0,0,0,0);return{setMask:function(Pt){it!==Pt&&!V&&(i.colorMask(Pt,Pt,Pt,Pt),it=Pt)},setLocked:function(Pt){V=Pt},setClear:function(Pt,ct,Ot,Bt,be){be===!0&&(Pt*=Bt,ct*=Bt,Ot*=Bt),yt.set(Pt,ct,Ot,Bt),St.equals(yt)===!1&&(i.clearColor(Pt,ct,Ot,Bt),St.copy(yt))},reset:function(){V=!1,it=null,St.set(-1,0,0,0)}}}function n(){let V=!1,yt=!1,it=null,St=null,Pt=null;return{setReversed:function(ct){if(yt!==ct){let Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),yt=ct;let Bt=Pt;Pt=null,this.setClear(Bt)}},getReversed:function(){return yt},setTest:function(ct){ct?tt(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(ct){it!==ct&&!V&&(i.depthMask(ct),it=ct)},setFunc:function(ct){if(yt&&(ct=Lp[ct]),St!==ct){switch(ct){case Ca:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=ct}},setLocked:function(ct){V=ct},setClear:function(ct){Pt!==ct&&(Pt=ct,yt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){V=!1,it=null,St=null,Pt=null,yt=!1}}}function r(){let V=!1,yt=null,it=null,St=null,Pt=null,ct=null,Ot=null,Bt=null,be=null;return{setTest:function(ue){V||(ue?tt(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(ue){yt!==ue&&!V&&(i.stencilMask(ue),yt=ue)},setFunc:function(ue,Xn,qn){(it!==ue||St!==Xn||Pt!==qn)&&(i.stencilFunc(ue,Xn,qn),it=ue,St=Xn,Pt=qn)},setOp:function(ue,Xn,qn){(ct!==ue||Ot!==Xn||Bt!==qn)&&(i.stencilOp(ue,Xn,qn),ct=ue,Ot=Xn,Bt=qn)},setLocked:function(ue){V=ue},setClear:function(ue){be!==ue&&(i.clearStencil(ue),be=ue)},reset:function(){V=!1,yt=null,it=null,St=null,Pt=null,ct=null,Ot=null,Bt=null,be=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,u=new WeakMap,d={},m={},f={},g=new WeakMap,_=[],A=null,x=!1,y=null,w=null,p=null,c=null,b=null,h=null,C=null,v=new Jt(0,0,0),M=0,S=!1,T=null,E=null,I=null,U=null,N=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=G>=2);let ot=null,K={},rt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Ct=new se().fromArray(rt),_t=new se().fromArray(xt);function $(V,yt,it,St){let Pt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(V,ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<it;Ot++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(yt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ct}let nt={};nt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(pr),at(!1),gt(tu),tt(i.CULL_FACE),et(ti);function tt(V){d[V]!==!0&&(i.enable(V),d[V]=!0)}function lt(V){d[V]!==!1&&(i.disable(V),d[V]=!1)}function pt(V,yt){return f[V]!==yt?(i.bindFramebuffer(V,yt),f[V]=yt,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=yt),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function dt(V,yt){let it=_,St=!1;if(V){it=g.get(yt),it===void 0&&(it=[],g.set(yt,it));let Pt=V.textures;if(it.length!==Pt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ot=Pt.length;ct<Ot;ct++)it[ct]=i.COLOR_ATTACHMENT0+ct;it.length=Pt.length,St=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,St=!0);St&&i.drawBuffers(it)}function Yt(V){return A!==V?(i.useProgram(V),A=V,!0):!1}let wt={[Oi]:i.FUNC_ADD,[np]:i.FUNC_SUBTRACT,[ip]:i.FUNC_REVERSE_SUBTRACT};wt[rp]=i.MIN,wt[sp]=i.MAX;let Z={[op]:i.ZERO,[ap]:i.ONE,[cp]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[dp]:i.DST_COLOR,[hp]:i.DST_ALPHA,[lp]:i.ONE_MINUS_SRC_COLOR,[Ea]:i.ONE_MINUS_SRC_ALPHA,[fp]:i.ONE_MINUS_DST_COLOR,[up]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[gp]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[_p]:i.ONE_MINUS_CONSTANT_ALPHA};function et(V,yt,it,St,Pt,ct,Ot,Bt,be,ue){if(V===ti){x===!0&&(lt(i.BLEND),x=!1);return}if(x===!1&&(tt(i.BLEND),x=!0),V!==ep){if(V!==y||ue!==S){if((w!==Oi||b!==Oi)&&(i.blendEquation(i.FUNC_ADD),w=Oi,b=Oi),ue)switch(V){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFunc(i.ONE,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",V);break}else switch(V){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nu:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",V);break}p=null,c=null,h=null,C=null,v.set(0,0,0),M=0,y=V,S=ue}return}Pt=Pt||yt,ct=ct||it,Ot=Ot||St,(yt!==w||Pt!==b)&&(i.blendEquationSeparate(wt[yt],wt[Pt]),w=yt,b=Pt),(it!==p||St!==c||ct!==h||Ot!==C)&&(i.blendFuncSeparate(Z[it],Z[St],Z[ct],Z[Ot]),p=it,c=St,h=ct,C=Ot),(Bt.equals(v)===!1||be!==M)&&(i.blendColor(Bt.r,Bt.g,Bt.b,be),v.copy(Bt),M=be),y=V,S=!1}function j(V,yt){V.side===un?lt(i.CULL_FACE):tt(i.CULL_FACE);let it=V.side===qe;yt&&(it=!it),at(it),V.blending===fr&&V.transparent===!1?et(ti):et(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);let St=V.stencilWrite;a.setTest(St),St&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ft(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(V){T!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),T=V)}function gt(V){V!==Qf?(tt(i.CULL_FACE),V!==E&&(V===tu?i.cullFace(i.BACK):V===tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),E=V}function vt(V){V!==I&&(O&&i.lineWidth(V),I=V)}function ft(V,yt,it){V?(tt(i.POLYGON_OFFSET_FILL),(U!==yt||N!==it)&&(U=yt,N=it,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,it))):lt(i.POLYGON_OFFSET_FILL)}function It(V){V?tt(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Dt(V){V===void 0&&(V=i.TEXTURE0+F-1),ot!==V&&(i.activeTexture(V),ot=V)}function B(V,yt,it){it===void 0&&(ot===null?it=i.TEXTURE0+F-1:it=ot);let St=K[it];St===void 0&&(St={type:void 0,texture:void 0},K[it]=St),(St.type!==V||St.texture!==yt)&&(ot!==it&&(i.activeTexture(it),ot=it),i.bindTexture(V,yt||nt[V]),St.type=V,St.texture=yt)}function ie(){let V=K[ot];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ut(){try{i.compressedTexImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function R(){try{i.texSubImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function z(){try{i.texSubImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function ut(){try{i.texStorage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function mt(){try{i.texStorage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function Q(){try{i.texImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function st(){try{i.texImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function bt(V){return m[V]!==void 0?m[V]:i.getParameter(V)}function zt(V,yt){m[V]!==yt&&(i.pixelStorei(V,yt),m[V]=yt)}function At(V){Ct.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Ct.copy(V))}function Mt(V){_t.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),_t.copy(V))}function Gt(V,yt){let it=u.get(yt);it===void 0&&(it=new WeakMap,u.set(yt,it));let St=it.get(V);St===void 0&&(St=i.getUniformBlockIndex(yt,V.name),it.set(V,St))}function qt(V,yt){let St=u.get(yt).get(V);l.get(yt)!==St&&(i.uniformBlockBinding(yt,St,V.__bindingPointIndex),l.set(yt,St))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},ot=null,K={},f={},g=new WeakMap,_=[],A=null,x=!1,y=null,w=null,p=null,c=null,b=null,h=null,C=null,v=new Jt(0,0,0),M=0,S=!1,T=null,E=null,I=null,U=null,N=null,Ct.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:tt,disable:lt,bindFramebuffer:pt,drawBuffers:dt,useProgram:Yt,setBlending:et,setMaterial:j,setFlipSided:at,setCullFace:gt,setLineWidth:vt,setPolygonOffset:ft,setScissorTest:It,activeTexture:Dt,bindTexture:B,unbindTexture:ie,compressedTexImage2D:Ut,compressedTexImage3D:L,texImage2D:Q,texImage3D:st,pixelStorei:zt,getParameter:bt,updateUBOMapping:Gt,uniformBlockBinding:qt,texStorage2D:ut,texStorage3D:mt,texSubImage2D:R,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:At,viewport:Mt,reset:jt}}function Hb(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ht,d=new WeakMap,m=new Set,f,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(L){}function A(L,R){return _?new OffscreenCanvas(L,R):Hs("canvas")}function x(L,R,z){let H=1,J=Ut(L);if((J.width>z||J.height>z)&&(H=z/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let ut=Math.floor(H*J.width),mt=Math.floor(H*J.height);f===void 0&&(f=A(ut,mt));let Q=R?A(ut,mt):f;return Q.width=ut,Q.height=mt,Q.getContext("2d").drawImage(L,0,0,ut,mt),Ht("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+mt+")."),Q}else return"data"in L&&Ht("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function y(L){return L.generateMipmaps}function w(L){i.generateMipmap(L)}function p(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function c(L,R,z,H,J,ut=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let mt;H&&(mt=t.get("EXT_texture_norm16"),mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=R;if(R===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&mt&&(Q=mt.R16_EXT),z===i.SHORT&&mt&&(Q=mt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),R===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&mt&&(Q=mt.RG16_EXT),z===i.SHORT&&mt&&(Q=mt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),R===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),R===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),R===i.RGB&&(z===i.UNSIGNED_SHORT&&mt&&(Q=mt.RGB16_EXT),z===i.SHORT&&mt&&(Q=mt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),R===i.RGBA){let st=ut?Gs:ne.getTransfer(J);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=st===oe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&mt&&(Q=mt.RGBA16_EXT),z===i.SHORT&&mt&&(Q=mt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function b(L,R){let z;return L?R===null||R===An||R===as?z=i.DEPTH24_STENCIL8:R===ln?z=i.DEPTH32F_STENCIL8:R===_r&&(z=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===An||R===as?z=i.DEPTH_COMPONENT24:R===ln?z=i.DEPTH_COMPONENT32F:R===_r&&(z=i.DEPTH_COMPONENT16),z}function h(L,R){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ne&&L.minFilter!==Xe?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function C(L){let R=L.target;R.removeEventListener("dispose",C),M(R),R.isVideoTexture&&d.delete(R),R.isHTMLTexture&&m.delete(R)}function v(L){let R=L.target;R.removeEventListener("dispose",v),T(R)}function M(L){let R=n.get(L);if(R.__webglInit===void 0)return;let z=L.source,H=g.get(z);if(H){let J=H[R.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(L),Object.keys(H).length===0&&g.delete(z)}n.remove(L)}function S(L){let R=n.get(L);i.deleteTexture(R.__webglTexture);let z=L.source,H=g.get(z);delete H[R.__cacheKey],o.memory.textures--}function T(L){let R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(R.__webglFramebuffer[H]))for(let J=0;J<R.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(R.__webglFramebuffer[H][J]);else i.deleteFramebuffer(R.__webglFramebuffer[H]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[H])}else{if(Array.isArray(R.__webglFramebuffer))for(let H=0;H<R.__webglFramebuffer.length;H++)i.deleteFramebuffer(R.__webglFramebuffer[H]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let H=0;H<R.__webglColorRenderbuffer.length;H++)R.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[H]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let z=L.textures;for(let H=0,J=z.length;H<J;H++){let ut=n.get(z[H]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(z[H])}n.remove(L)}let E=0;function I(){E=0}function U(){return E}function N(L){E=L}function F(){let L=E;return L>=r.maxTextures&&Ht("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function O(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function G(L,R){let z=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){let H=L.image;if(H===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(z,L,R);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+R)}function W(L,R){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){lt(z,L,R);return}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+R)}function ot(L,R){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){lt(z,L,R);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+R)}function K(L,R){let z=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&z.__version!==L.version){pt(z,L,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+R)}let rt={[Ua]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},xt={[Ne]:i.NEAREST,[bp]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[yc]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Ct={[wp]:i.NEVER,[Rp]:i.ALWAYS,[Ap]:i.LESS,[nl]:i.LEQUAL,[Tp]:i.EQUAL,[il]:i.GEQUAL,[Ep]:i.GREATER,[Cp]:i.NOTEQUAL};function _t(L,R){if(R.type===ln&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Xe||R.magFilter===yc||R.magFilter===_o||R.magFilter===qi||R.minFilter===Xe||R.minFilter===yc||R.minFilter===_o||R.minFilter===qi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,rt[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,rt[R.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,rt[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,xt[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,xt[R.minFilter]),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ct[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ne||R.minFilter!==_o&&R.minFilter!==qi||R.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function $(L,R){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",C));let H=R.source,J=g.get(H);J===void 0&&(J={},g.set(H,J));let ut=O(R);if(ut!==L.__cacheKey){J[ut]===void 0&&(J[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[ut].usedTimes++;let mt=J[L.__cacheKey];mt!==void 0&&(J[L.__cacheKey].usedTimes--,mt.usedTimes===0&&S(R)),L.__cacheKey=ut,L.__webglTexture=J[ut].texture}return z}function nt(L,R,z){return Math.floor(Math.floor(L/z)/R)}function tt(L,R,z,H){let ut=L.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,z,H,R.data);else{ut.sort((zt,At)=>zt.start-At.start);let mt=0;for(let zt=1;zt<ut.length;zt++){let At=ut[mt],Mt=ut[zt],Gt=At.start+At.count,qt=nt(Mt.start,R.width,4),jt=nt(At.start,R.width,4);Mt.start<=Gt+1&&qt===jt&&nt(Mt.start+Mt.count-1,R.width,4)===qt?At.count=Math.max(At.count,Mt.start+Mt.count-At.start):(++mt,ut[mt]=Mt)}ut.length=mt+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let zt=0,At=ut.length;zt<At;zt++){let Mt=ut[zt],Gt=Math.floor(Mt.start/4),qt=Math.ceil(Mt.count/4),jt=Gt%R.width,V=Math.floor(Gt/R.width),yt=qt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,jt,V,yt,it,z,H,R.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function lt(L,R,z){let H=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(H=i.TEXTURE_3D);let J=$(L,R),ut=R.source;e.bindTexture(H,L.__webglTexture,i.TEXTURE0+z);let mt=n.get(ut);if(ut.version!==mt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&R.image instanceof ImageBitmap)===!1){let it=ne.getPrimaries(ne.workingColorSpace),St=R.colorSpace===yi?null:ne.getPrimaries(R.colorSpace),Pt=R.colorSpace===yi||it===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let st=x(R.image,!1,r.maxTextureSize);st=ie(R,st);let bt=s.convert(R.format,R.colorSpace),zt=s.convert(R.type),At=c(R.internalFormat,bt,zt,R.normalized,R.colorSpace,R.isVideoTexture);_t(H,R);let Mt,Gt=R.mipmaps,qt=R.isVideoTexture!==!0,jt=mt.__version===void 0||J===!0,V=ut.dataReady,yt=h(R,st);if(R.isDepthTexture)At=b(R.format===Yi,R.type),jt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,At,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,At,st.width,st.height,0,bt,zt,null));else if(R.isDataTexture)if(Gt.length>0){qt&&jt&&e.texStorage2D(i.TEXTURE_2D,yt,At,Gt[0].width,Gt[0].height);for(let it=0,St=Gt.length;it<St;it++)Mt=Gt[it],qt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,it,At,Mt.width,Mt.height,0,bt,zt,Mt.data);R.generateMipmaps=!1}else qt?(jt&&e.texStorage2D(i.TEXTURE_2D,yt,At,st.width,st.height),V&&tt(R,st,bt,zt)):e.texImage2D(i.TEXTURE_2D,0,At,st.width,st.height,0,bt,zt,st.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,At,Gt[0].width,Gt[0].height,st.depth);for(let it=0,St=Gt.length;it<St;it++)if(Mt=Gt[it],R.format!==sn)if(bt!==null)if(qt){if(V)if(R.layerUpdates.size>0){let Pt=Su(Mt.width,Mt.height,R.format,R.type);for(let ct of R.layerUpdates){let Ot=Mt.data.subarray(ct*Pt/Mt.data.BYTES_PER_ELEMENT,(ct+1)*Pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,ct,Mt.width,Mt.height,1,bt,Ot)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,st.depth,bt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,At,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,st.depth,bt,zt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,At,Mt.width,Mt.height,st.depth,0,bt,zt,Mt.data)}else{qt&&jt&&e.texStorage2D(i.TEXTURE_2D,yt,At,Gt[0].width,Gt[0].height);for(let it=0,St=Gt.length;it<St;it++)Mt=Gt[it],R.format!==sn?bt!==null?qt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,At,Mt.width,Mt.height,0,Mt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,it,At,Mt.width,Mt.height,0,bt,zt,Mt.data)}else if(R.isDataArrayTexture)if(qt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,At,st.width,st.height,st.depth),V)if(R.layerUpdates.size>0){let it=Su(st.width,st.height,R.format,R.type);for(let St of R.layerUpdates){let Pt=st.data.subarray(St*it/st.data.BYTES_PER_ELEMENT,(St+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,st.width,st.height,1,bt,zt,Pt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,bt,zt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,st.width,st.height,st.depth,0,bt,zt,st.data);else if(R.isData3DTexture)qt?(jt&&e.texStorage3D(i.TEXTURE_3D,yt,At,st.width,st.height,st.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,bt,zt,st.data)):e.texImage3D(i.TEXTURE_3D,0,At,st.width,st.height,st.depth,0,bt,zt,st.data);else if(R.isFramebufferTexture){if(jt)if(qt)e.texStorage2D(i.TEXTURE_2D,yt,At,st.width,st.height);else{let it=st.width,St=st.height;for(let Pt=0;Pt<yt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,At,it,St,0,bt,zt,null),it>>=1,St>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),m.add(R),it.onpaint=St=>{let Pt=St.changedElements;for(let ct of m)Pt.includes(ct.image)&&(ct.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let Pt=i.RGBA,ct=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,ct,Ot,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(qt&&jt){let it=Ut(Gt[0]);e.texStorage2D(i.TEXTURE_2D,yt,At,it.width,it.height)}for(let it=0,St=Gt.length;it<St;it++)Mt=Gt[it],qt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,bt,zt,Mt):e.texImage2D(i.TEXTURE_2D,it,At,bt,zt,Mt);R.generateMipmaps=!1}else if(qt){if(jt){let it=Ut(st);e.texStorage2D(i.TEXTURE_2D,yt,At,it.width,it.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,zt,st)}else e.texImage2D(i.TEXTURE_2D,0,At,bt,zt,st);y(R)&&w(H),mt.__version=ut.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function pt(L,R,z){if(R.image.length!==6)return;let H=$(L,R),J=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+z);let ut=n.get(J);if(J.version!==ut.__version||H===!0){e.activeTexture(i.TEXTURE0+z);let mt=ne.getPrimaries(ne.workingColorSpace),Q=R.colorSpace===yi?null:ne.getPrimaries(R.colorSpace),st=R.colorSpace===yi||mt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let bt=R.isCompressedTexture||R.image[0].isCompressedTexture,zt=R.image[0]&&R.image[0].isDataTexture,At=[];for(let ct=0;ct<6;ct++)!bt&&!zt?At[ct]=x(R.image[ct],!0,r.maxCubemapSize):At[ct]=zt?R.image[ct].image:R.image[ct],At[ct]=ie(R,At[ct]);let Mt=At[0],Gt=s.convert(R.format,R.colorSpace),qt=s.convert(R.type),jt=c(R.internalFormat,Gt,qt,R.normalized,R.colorSpace),V=R.isVideoTexture!==!0,yt=ut.__version===void 0||H===!0,it=J.dataReady,St=h(R,Mt);_t(i.TEXTURE_CUBE_MAP,R);let Pt;if(bt){V&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,jt,Mt.width,Mt.height);for(let ct=0;ct<6;ct++){Pt=At[ct].mipmaps;for(let Ot=0;Ot<Pt.length;Ot++){let Bt=Pt[Ot];R.format!==sn?Gt!==null?V?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,Bt.width,Bt.height,Gt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,jt,Bt.width,Bt.height,0,Bt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,Bt.width,Bt.height,Gt,qt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,jt,Bt.width,Bt.height,0,Gt,qt,Bt.data)}}}else{if(Pt=R.mipmaps,V&&yt){Pt.length>0&&St++;let ct=Ut(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(zt){V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At[ct].width,At[ct].height,Gt,qt,At[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,jt,At[ct].width,At[ct].height,0,Gt,qt,At[ct].data);for(let Ot=0;Ot<Pt.length;Ot++){let be=Pt[Ot].image[ct].image;V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,be.width,be.height,Gt,qt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,jt,be.width,be.height,0,Gt,qt,be.data)}}else{V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Gt,qt,At[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,jt,Gt,qt,At[ct]);for(let Ot=0;Ot<Pt.length;Ot++){let Bt=Pt[Ot];V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,Gt,qt,Bt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,jt,Gt,qt,Bt.image[ct])}}}y(R)&&w(i.TEXTURE_CUBE_MAP),ut.__version=J.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function dt(L,R,z,H,J,ut){let mt=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),st=c(z.internalFormat,mt,Q,z.normalized,z.colorSpace),bt=n.get(R),zt=n.get(z);if(zt.__renderTarget=R,!bt.__hasExternalTextures){let At=Math.max(1,R.width>>ut),Mt=Math.max(1,R.height>>ut);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,st,At,Mt,R.depth,0,mt,Q,null):e.texImage2D(J,ut,st,At,Mt,0,mt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Dt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,J,zt.__webglTexture,0,It(R)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,J,zt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(L,R,z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer){let H=R.depthTexture,J=H&&H.isDepthTexture?H.type:null,ut=b(R.stencilBuffer,J),mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(R),ut,R.width,R.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(R),ut,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ut,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,L)}else{let H=R.textures;for(let J=0;J<H.length;J++){let ut=H[J],mt=s.convert(ut.format,ut.colorSpace),Q=s.convert(ut.type),st=c(ut.internalFormat,mt,Q,ut.normalized,ut.colorSpace);Dt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(R),st,R.width,R.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(R),st,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,st,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(L,R,z){let H=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(R.depthTexture);if(J.__renderTarget=R,(!J.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,R.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),_t(i.TEXTURE_CUBE_MAP,R.depthTexture);let bt=s.convert(R.depthTexture.format),zt=s.convert(R.depthTexture.type),At;R.depthTexture.format===Jn?At=i.DEPTH_COMPONENT24:R.depthTexture.format===Yi&&(At=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,At,R.width,R.height,0,bt,zt,null)}}else G(R.depthTexture,0);let ut=J.__webglTexture,mt=It(R),Q=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,st=R.depthTexture.format===Yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===Jn)Dt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Q,ut,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,Q,ut,0);else if(R.depthTexture.format===Yi)Dt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Q,ut,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,Q,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(L){let R=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){let H=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),H){let J=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),R.__depthDisposeCallback=J}R.__boundDepthTexture=H}if(L.depthTexture&&!R.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)wt(R.__webglFramebuffer[H],L,H);else{let H=L.texture.mipmaps;H&&H.length>0?wt(R.__webglFramebuffer[0],L,0):wt(R.__webglFramebuffer,L,0)}else if(z){R.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[H]),R.__webglDepthbuffer[H]===void 0)R.__webglDepthbuffer[H]=i.createRenderbuffer(),Yt(R.__webglDepthbuffer[H],L,!1);else{let J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=R.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}else{let H=L.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Yt(R.__webglDepthbuffer,L,!1);else{let J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(L,R,z){let H=n.get(L);R!==void 0&&dt(H.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Z(L)}function j(L){let R=L.texture,z=n.get(L),H=n.get(R);L.addEventListener("dispose",v);let J=L.textures,ut=L.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=R.version,o.memory.textures++),ut){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(R.mipmaps&&R.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let st=0;st<R.mipmaps.length;st++)z.__webglFramebuffer[Q][st]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<R.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(mt)for(let Q=0,st=J.length;Q<st;Q++){let bt=n.get(J[Q]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Dt(L)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let st=J[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let bt=s.convert(st.format,st.colorSpace),zt=s.convert(st.type),At=c(st.internalFormat,bt,zt,st.normalized,st.colorSpace,L.isXRRenderTarget===!0),Mt=It(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,At,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),_t(i.TEXTURE_CUBE_MAP,R);for(let Q=0;Q<6;Q++)if(R.mipmaps&&R.mipmaps.length>0)for(let st=0;st<R.mipmaps.length;st++)dt(z.__webglFramebuffer[Q][st],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st);else dt(z.__webglFramebuffer[Q],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(R)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Q=0,st=J.length;Q<st;Q++){let bt=J[Q],zt=n.get(bt),At=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,zt.__webglTexture),_t(At,bt),dt(z.__webglFramebuffer,L,bt,i.COLOR_ATTACHMENT0+Q,At,0),y(bt)&&w(At)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,H.__webglTexture),_t(Q,R),R.mipmaps&&R.mipmaps.length>0)for(let st=0;st<R.mipmaps.length;st++)dt(z.__webglFramebuffer[st],L,R,i.COLOR_ATTACHMENT0,Q,st);else dt(z.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,Q,0);y(R)&&w(Q),e.unbindTexture()}L.depthBuffer&&Z(L)}function at(L){let R=L.textures;for(let z=0,H=R.length;z<H;z++){let J=R[z];if(y(J)){let ut=p(L),mt=n.get(J).__webglTexture;e.bindTexture(ut,mt),w(ut),e.unbindTexture()}}}let gt=[],vt=[];function ft(L){if(L.samples>0){if(Dt(L)===!1){let R=L.textures,z=L.width,H=L.height,J=i.COLOR_BUFFER_BIT,ut=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(L),Q=R.length>1;if(Q)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let st=L.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[bt]);let zt=n.get(R[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,J,i.NEAREST),l===!0&&(gt.length=0,vt.length=0,gt.push(i.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(gt.push(ut),vt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[bt]);let zt=n.get(R[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let R=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function It(L){return Math.min(r.maxSamples,L.samples)}function Dt(L){let R=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function B(L){let R=o.render.frame;d.get(L)!==R&&(d.set(L,R),L.update())}function ie(L,R){let z=L.colorSpace,H=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==ks&&z!==yi&&(ne.getTransfer(z)===oe?(H!==sn||J!==on)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",z)),R}function Ut(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.getTextureUnits=U,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=ot,this.setTextureCube=K,this.rebindTextures=et,this.setupRenderTarget=j,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wb(i,t){function e(n,r=yi){let s,o=ne.getTransfer(r);if(n===on)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vc)return i.BYTE;if(n===bc)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===mu)return i.ALPHA;if(n===gu)return i.RGB;if(n===sn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===cs)return i.RED_INTEGER;if(n===_i)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===Mo||n===So||n===wo||n===Ao)if(o===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Tc||n===Ec||n===Cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Ic||n===Pc||n===Dc||n===Lc||n===To||n===Nc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Ic)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dc)return s.COMPRESSED_R11_EAC;if(n===Lc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===To)return s.COMPRESSED_RG11_EAC;if(n===Nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uc||n===Bc||n===Fc||n===Oc||n===zc||n===Vc||n===kc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===$c)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===Jc||n===Kc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Zc)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Qc||n===Eo||n===tl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===jc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
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

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new js(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:Xb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends Kn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,m=null,f=null,g=null,_=null,A=typeof XRWebGLBinding!="undefined",x=new Gu,y={},w=e.getContextAttributes(),p=null,c=null,b=[],h=[],C=new ht,v=null,M=new Qe;M.viewport=new se;let S=new Qe;S.viewport=new se;let T=[M,S],E=new pc,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=b[$];return nt===void 0&&(nt=new Qr,b[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=b[$];return nt===void 0&&(nt=new Qr,b[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=b[$];return nt===void 0&&(nt=new Qr,b[$]=nt),nt.getHandSpace()};function N($){let nt=h.indexOf($.inputSource);if(nt===-1)return;let tt=b[nt];tt!==void 0&&(tt.update($.inputSource,$.frame,u||o),tt.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",O);for(let $=0;$<b.length;$++){let nt=h[$];nt!==null&&(h[$]=null,b[$].disconnect(nt))}I=null,U=null,x.reset();for(let $ in y)delete y[$];t.setRenderTarget(p),g=null,f=null,m=null,r=null,c=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(r,e)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",F),r.addEventListener("inputsourceschange",O),w.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,lt=null,pt=null;w.depth&&(pt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=w.stencil?Yi:Jn,lt=w.stencil?as:An);let dt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(dt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),c=new vn(f.textureWidth,f.textureHeight,{format:sn,type:on,depthTexture:new xi(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),c=new vn(g.framebufferWidth,g.framebufferHeight,{format:sn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O($){for(let nt=0;nt<$.removed.length;nt++){let tt=$.removed[nt],lt=h.indexOf(tt);lt>=0&&(h[lt]=null,b[lt].disconnect(tt))}for(let nt=0;nt<$.added.length;nt++){let tt=$.added[nt],lt=h.indexOf(tt);if(lt===-1){for(let dt=0;dt<b.length;dt++)if(dt>=h.length){h.push(tt),lt=dt;break}else if(h[dt]===null){h[dt]=tt,lt=dt;break}if(lt===-1)break}let pt=b[lt];pt&&pt.connect(tt)}}let G=new D,W=new D;function ot($,nt,tt){G.setFromMatrixPosition(nt.matrixWorld),W.setFromMatrixPosition(tt.matrixWorld);let lt=G.distanceTo(W),pt=nt.projectionMatrix.elements,dt=tt.projectionMatrix.elements,Yt=pt[14]/(pt[10]-1),wt=pt[14]/(pt[10]+1),Z=(pt[9]+1)/pt[5],et=(pt[9]-1)/pt[5],j=(pt[8]-1)/pt[0],at=(dt[8]+1)/dt[0],gt=Yt*j,vt=Yt*at,ft=lt/(-j+at),It=ft*-j;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ft),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),pt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Dt=Yt+ft,B=wt+ft,ie=gt-It,Ut=vt+(lt-It),L=Z*wt/B*Dt,R=et*wt/B*Dt;$.projectionMatrix.makePerspective(ie,Ut,L,R,Dt,B),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let nt=$.near,tt=$.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(tt=x.depthFar)),E.near=S.near=M.near=nt,E.far=S.far=M.far=tt,(I!==E.near||U!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,U=E.far),E.layers.mask=$.layers.mask|6,M.layers.mask=E.layers.mask&-5,S.layers.mask=E.layers.mask&-3;let lt=$.parent,pt=E.cameras;K(E,lt);for(let dt=0;dt<pt.length;dt++)K(pt[dt],lt);pt.length===2?ot(E,M,S):E.projectionMatrix.copy(M.projectionMatrix),rt($,E,lt)};function rt($,nt,tt){tt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)},this.getCameraTexture=function($){return y[$]};let xt=null;function Ct($,nt){if(d=nt.getViewerPose(u||o),_=nt,d!==null){let tt=d.views;g!==null&&(t.setRenderTargetFramebuffer(c,g.framebuffer),t.setRenderTarget(c));let lt=!1;tt.length!==E.cameras.length&&(E.cameras.length=0,lt=!0);for(let wt=0;wt<tt.length;wt++){let Z=tt[wt],et=null;if(g!==null)et=g.getViewport(Z);else{let at=m.getViewSubImage(f,Z);et=at.viewport,wt===0&&(t.setRenderTargetTextures(c,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(c))}let j=T[wt];j===void 0&&(j=new Qe,j.layers.enable(wt),j.viewport=new se,T[wt]=j),j.matrix.fromArray(Z.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Z.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),wt===0&&(E.matrix.copy(j.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),lt===!0&&E.cameras.push(j)}let pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){m=n.getBinding();let wt=m.getDepthInformation(tt[0]);wt&&wt.isValid&&wt.texture&&x.init(wt,r.renderState)}if(pt&&pt.includes("camera-access")&&A){t.state.unbindTexture(),m=n.getBinding();for(let wt=0;wt<tt.length;wt++){let Z=tt[wt].camera;if(Z){let et=y[Z];et||(et=new js,y[Z]=et);let j=m.getCameraImage(Z);et.sourceTexture=j}}}}for(let tt=0;tt<b.length;tt++){let lt=h[tt],pt=b[tt];lt!==null&&pt!==void 0&&pt.update(lt,nt,u||o)}xt&&xt($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}let _t=new lm;_t.setAnimationLoop(Ct),this.setAnimationLoop=function($){xt=$},this.dispose=function(){}}},Yb=new Zt,mm=new $t;mm.set(-1,0,0,0,1,0,0,0,1);function $b(i,t){function e(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,vu(i)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,w,p,c){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?s(x,y):y.isMeshLambertMaterial?(s(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(s(x,y),m(x,y)):y.isMeshPhongMaterial?(s(x,y),d(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(s(x,y),f(x,y),y.isMeshPhysicalMaterial&&g(x,y,c)):y.isMeshMatcapMaterial?(s(x,y),_(x,y)):y.isMeshDepthMaterial?s(x,y):y.isMeshDistanceMaterial?(s(x,y),A(x,y)):y.isMeshNormalMaterial?s(x,y):y.isLineBasicMaterial?(o(x,y),y.isLineDashedMaterial&&a(x,y)):y.isPointsMaterial?l(x,y,w,p):y.isSpriteMaterial?u(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,e(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,e(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===qe&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,e(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===qe&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,e(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,e(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);let w=t.get(y),p=w.envMap,c=w.envMapRotation;p&&(x.envMap.value=p,x.envMapRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(c)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(mm),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,x.aoMapTransform))}function o(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,e(y.map,x.mapTransform))}function a(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function l(x,y,w,p){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*w,x.scale.value=p*.5,y.map&&(x.map.value=y.map,e(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,e(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,e(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function m(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function f(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function g(x,y,w){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qe&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){let w=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Zb(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(c,b){let h=b.program;n.uniformBlockBinding(c,h)}function u(c,b){let h=r[c.id];h===void 0&&(x(c),h=d(c),r[c.id]=h,c.addEventListener("dispose",w));let C=b.program;n.updateUBOMapping(c,C);let v=t.render.frame;s[c.id]!==v&&(f(c),s[c.id]=v)}function d(c){let b=m();c.__bindingPointIndex=b;let h=i.createBuffer(),C=c.__size,v=c.usage;return i.bindBuffer(i.UNIFORM_BUFFER,h),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,h),h}function m(){for(let c=0;c<a;c++)if(o.indexOf(c)===-1)return o.push(c),c;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(c){let b=r[c.id],h=c.uniforms,C=c.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,M=h.length;v<M;v++){let S=h[v];if(Array.isArray(S))for(let T=0,E=S.length;T<E;T++)g(S[T],v,T,C);else g(S,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(c,b,h,C){if(A(c,b,h,C)===!0){let v=c.__offset,M=c.value;if(Array.isArray(M)){let S=0;for(let T=0;T<M.length;T++){let E=M[T],I=y(E);_(E,c.__data,S),typeof E!="number"&&typeof E!="boolean"&&!E.isMatrix3&&!ArrayBuffer.isView(E)&&(S+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,c.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,c.__data)}}function _(c,b,h){typeof c=="number"||typeof c=="boolean"?b[0]=c:c.isMatrix3?(b[0]=c.elements[0],b[1]=c.elements[1],b[2]=c.elements[2],b[3]=0,b[4]=c.elements[3],b[5]=c.elements[4],b[6]=c.elements[5],b[7]=0,b[8]=c.elements[6],b[9]=c.elements[7],b[10]=c.elements[8],b[11]=0):ArrayBuffer.isView(c)?b.set(new c.constructor(c.buffer,c.byteOffset,b.length)):c.toArray(b,h)}function A(c,b,h,C){let v=c.value,M=b+"_"+h;if(C[M]===void 0)return typeof v=="number"||typeof v=="boolean"?C[M]=v:ArrayBuffer.isView(v)?C[M]=v.slice():C[M]=v.clone(),!0;{let S=C[M];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return C[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function x(c){let b=c.uniforms,h=0,C=16;for(let M=0,S=b.length;M<S;M++){let T=Array.isArray(b[M])?b[M]:[b[M]];for(let E=0,I=T.length;E<I;E++){let U=T[E],N=Array.isArray(U.value)?U.value:[U.value];for(let F=0,O=N.length;F<O;F++){let G=N[F],W=y(G),ot=h%C,K=ot%W.boundary,rt=ot+K;h+=K,rt!==0&&C-rt<W.storage&&(h+=C-rt),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=h,h+=W.storage}}}let v=h%C;return v>0&&(h+=C-v),c.__size=h,c.__cache={},this}function y(c){let b={boundary:0,storage:0};return typeof c=="number"||typeof c=="boolean"?(b.boundary=4,b.storage=4):c.isVector2?(b.boundary=8,b.storage=8):c.isVector3||c.isColor?(b.boundary=16,b.storage=12):c.isVector4?(b.boundary=16,b.storage=16):c.isMatrix3?(b.boundary=48,b.storage=48):c.isMatrix4?(b.boundary=64,b.storage=64):c.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(c)?(b.boundary=16,b.storage=c.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",c),b}function w(c){let b=c.target;b.removeEventListener("dispose",w);let h=o.indexOf(b.__bindingPointIndex);o.splice(h,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let c in r)i.deleteBuffer(r[c]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}var Jb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Kb(){return ni===null&&(ni=new Fi(Jb,16,16,_i,ei),ni.name="DFG_LUT",ni.minFilter=Xe,ni.magFilter=Xe,ni.wrapS=Zn,ni.wrapT=Zn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var cl=class{constructor(t={}){let{canvas:e=Ip(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:g=on}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let A=g,x=new Set([bo,vo,cs]),y=new Set([on,An,_r,as,Mc,Sc]),w=new Uint32Array(4),p=new Int32Array(4),c=new D,b=null,h=null,C=[],v=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1,E=null,I=null,U=null,N=null;this._outputColorSpace=rn;let F=0,O=0,G=null,W=-1,ot=null,K=new se,rt=new se,xt=null,Ct=new Jt(0),_t=0,$=e.width,nt=e.height,tt=1,lt=null,pt=null,dt=new se(0,0,$,nt),Yt=new se(0,0,$,nt),wt=!1,Z=new gi,et=!1,j=!1,at=new Zt,gt=new D,vt=new se,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Dt(){return G===null?tt:1}let B=n;function ie(P,k){return e.getContext(P,k)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Xn,!1),B===null){let k="webgl2";if(B=ie(k,P),B===null)throw ie(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(P){throw Wt("WebGLRenderer: "+P.message),P}let Ut,L,R,z,H,J,ut,mt,Q,st,bt,zt,At,Mt,Gt,qt,jt,V,yt,it,St,Pt,ct;function Ot(){Ut=new rv(B),Ut.init(),St=new Wb(B,Ut),L=new Jy(B,Ut,t,St),R=new Gb(B,Ut),L.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),I=B.createFramebuffer(),U=B.createFramebuffer(),N=B.createFramebuffer(),z=new av(B),H=new Cb,J=new Hb(B,Ut,R,H,L,St,z),ut=new iv(S),mt=new ux(B),Pt=new $y(B,mt),Q=new sv(B,mt,z,Pt),st=new lv(B,Q,mt,Pt,z),V=new cv(B,L,J),Gt=new Ky(H),bt=new Eb(S,ut,Ut,L,Pt,Gt),zt=new $b(S,H),At=new Ib,Mt=new Bb(Ut),jt=new Yy(S,ut,R,st,_,l),qt=new kb(S,st,L),ct=new Zb(B,z,L,R),yt=new Zy(B,Ut,z),it=new ov(B,Ut,z),z.programs=bt.programs,S.capabilities=L,S.extensions=Ut,S.properties=H,S.renderLists=At,S.shadowMap=qt,S.state=R,S.info=z}Ot(),A!==on&&(M=new uv(A,e.width,e.height,a,r,s));let Bt=new Hu(S,B);this.xr=Bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=Ut.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ut.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(P){P!==void 0&&(tt=P,this.setSize($,nt,!1))},this.getSize=function(P){return P.set($,nt)},this.setSize=function(P,k,Y=!0){if(Bt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}$=P,nt=k,e.width=Math.floor(P*tt),e.height=Math.floor(k*tt),Y===!0&&(e.style.width=P+"px",e.style.height=k+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set($*tt,nt*tt).floor()},this.setDrawingBufferSize=function(P,k,Y){$=P,nt=k,tt=Y,e.width=Math.floor(P*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,P,k)},this.setEffects=function(P){if(A===on){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let k=0;k<P.length;k++)if(P[k].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(K)},this.getViewport=function(P){return P.copy(dt)},this.setViewport=function(P,k,Y,X){P.isVector4?dt.set(P.x,P.y,P.z,P.w):dt.set(P,k,Y,X),R.viewport(K.copy(dt).multiplyScalar(tt).round())},this.getScissor=function(P){return P.copy(Yt)},this.setScissor=function(P,k,Y,X){P.isVector4?Yt.set(P.x,P.y,P.z,P.w):Yt.set(P,k,Y,X),R.scissor(rt.copy(Yt).multiplyScalar(tt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(P){R.setScissorTest(wt=P)},this.setOpaqueSort=function(P){lt=P},this.setTransparentSort=function(P){pt=P},this.getClearColor=function(P){return P.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(P=!0,k=!0,Y=!0){let X=0;if(P){let q=!1;if(G!==null){let Rt=G.texture.format;q=x.has(Rt)}if(q){let Rt=G.texture.type,Nt=y.has(Rt),Et=jt.getClearColor(),Ft=jt.getClearAlpha(),Vt=Et.r,Qt=Et.g,ee=Et.b;Nt?(w[0]=Vt,w[1]=Qt,w[2]=ee,w[3]=Ft,B.clearBufferuiv(B.COLOR,0,w)):(p[0]=Vt,p[1]=Qt,p[2]=ee,p[3]=Ft,B.clearBufferiv(B.COLOR,0,p))}else X|=B.COLOR_BUFFER_BIT}k&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),E=P},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Xn,!1),jt.dispose(),At.dispose(),Mt.dispose(),H.dispose(),ut.dispose(),st.dispose(),Pt.dispose(),ct.dispose(),bt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",cf),Bt.removeEventListener("sessionend",lf),ir.stop()};function be(P){P.preventDefault(),_u("WebGLRenderer: Context Lost."),T=!0}function ue(){_u("WebGLRenderer: Context Restored."),T=!1;let P=z.autoReset,k=qt.enabled,Y=qt.autoUpdate,X=qt.needsUpdate,q=qt.type;Ot(),z.autoReset=P,qt.enabled=k,qt.autoUpdate=Y,qt.needsUpdate=X,qt.type=q}function Xn(P){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qn(P){let k=P.target;k.removeEventListener("dispose",qn),Vg(k)}function Vg(P){kg(P),H.remove(P)}function kg(P){let k=H.get(P).programs;k!==void 0&&(k.forEach(function(Y){bt.releaseProgram(Y)}),P.isShaderMaterial&&bt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,Y,X,q,Rt){k===null&&(k=ft);let Nt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Et=Wg(P,k,Y,X,q);R.setMaterial(X,Nt);let Ft=Y.index,Vt=1;if(X.wireframe===!0){if(Ft=Q.getWireframeAttribute(Y),Ft===void 0)return;Vt=2}let Qt=Y.drawRange,ee=Y.attributes.position,kt=Qt.start*Vt,ae=(Qt.start+Qt.count)*Vt;Rt!==null&&(kt=Math.max(kt,Rt.start*Vt),ae=Math.min(ae,(Rt.start+Rt.count)*Vt)),Ft!==null?(kt=Math.max(kt,0),ae=Math.min(ae,Ft.count)):ee!=null&&(kt=Math.max(kt,0),ae=Math.min(ae,ee.count));let Te=ae-kt;if(Te<0||Te===1/0)return;Pt.setup(q,X,Et,Y,Ft);let Me,ce=yt;if(Ft!==null&&(Me=mt.get(Ft),ce=it,ce.setIndex(Me)),q.isMesh)X.wireframe===!0?(R.setLineWidth(X.wireframeLinewidth*Dt()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(q.isLine){let Ze=X.linewidth;Ze===void 0&&(Ze=1),R.setLineWidth(Ze*Dt()),q.isLineSegments?ce.setMode(B.LINES):q.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else q.isPoints?ce.setMode(B.POINTS):q.isSprite&&ce.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ze=q._multiDrawStarts,Lt=q._multiDrawCounts,mn=q._multiDrawCount,re=Ft?mt.get(Ft).bytesPerElement:1,Cn=H.get(X).currentProgram.getUniforms();for(let Yn=0;Yn<mn;Yn++)Cn.setValue(B,"_gl_DrawID",Yn),ce.render(Ze[Yn]/re,Lt[Yn])}else if(q.isInstancedMesh)ce.renderInstances(kt,Te,q.count);else if(Y.isInstancedBufferGeometry){let Ze=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Lt=Math.min(Y.instanceCount,Ze);ce.renderInstances(kt,Te,Lt)}else ce.render(kt,Te)};function af(P,k,Y){P.transparent===!0&&P.side===un&&P.forceSinglePass===!1?(P.side=qe,P.needsUpdate=!0,Zo(P,k,Y),P.side=Pn,P.needsUpdate=!0,Zo(P,k,Y),P.side=un):Zo(P,k,Y)}this.compile=function(P,k,Y=null){Y===null&&(Y=P),h=Mt.get(Y),h.init(k),v.push(h),Y.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),P!==Y&&P.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),h.setupLights();let X=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Rt=q.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){let Et=Rt[Nt];af(Et,Y,q),X.add(Et)}else af(Rt,Y,q),X.add(Rt)}),h=v.pop(),X},this.compileAsync=function(P,k,Y=null){let X=this.compile(P,k,Y);return new Promise(q=>{function Rt(){if(X.forEach(function(Nt){H.get(Nt).currentProgram.isReady()&&X.delete(Nt)}),X.size===0){q(P);return}setTimeout(Rt,10)}Ut.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let rh=null;function Gg(P){rh&&rh(P)}function cf(){ir.stop()}function lf(){ir.start()}let ir=new lm;ir.setAnimationLoop(Gg),typeof self!="undefined"&&ir.setContext(self),this.setAnimationLoop=function(P){rh=P,Bt.setAnimationLoop(P),P===null?ir.stop():ir.start()},Bt.addEventListener("sessionstart",cf),Bt.addEventListener("sessionend",lf),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E!==null&&E.renderStart(P,k);let Y=Bt.enabled===!0&&Bt.isPresenting===!0,X=M!==null&&(G===null||Y)&&M.begin(S,G);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(k),k=Bt.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,k,G),h=Mt.get(P,v.length),h.init(k),h.state.textureUnits=J.getTextureUnits(),v.push(h),at.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(at,In,k.reversedDepth),j=this.localClippingEnabled,et=Gt.init(this.clippingPlanes,j),b=At.get(P,C.length),b.init(),C.push(b),Bt.enabled===!0&&Bt.isPresenting===!0){let Nt=S.xr.getDepthSensingMesh();Nt!==null&&sh(Nt,k,-1/0,S.sortObjects)}sh(P,k,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(lt,pt,k.reversedDepth),It=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,It&&jt.addToRenderList(b,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Gt.beginShadows();let q=h.state.shadowsArray;if(qt.render(q,P,k),et===!0&&Gt.endShadows(),(X&&M.hasRenderPass())===!1){let Nt=b.opaque,Et=b.transmissive;if(h.setupLights(),k.isArrayCamera){let Ft=k.cameras;if(Et.length>0)for(let Vt=0,Qt=Ft.length;Vt<Qt;Vt++){let ee=Ft[Vt];uf(Nt,Et,P,ee)}It&&jt.render(P);for(let Vt=0,Qt=Ft.length;Vt<Qt;Vt++){let ee=Ft[Vt];hf(b,P,ee,ee.viewport)}}else Et.length>0&&uf(Nt,Et,P,k),It&&jt.render(P),hf(b,P,k)}G!==null&&O===0&&(J.updateMultisampleRenderTarget(G),J.updateRenderTargetMipmap(G)),X&&M.end(S),P.isScene===!0&&P.onAfterRender(S,P,k),Pt.resetDefaultState(),W=-1,ot=null,v.pop(),v.length>0?(h=v[v.length-1],J.setTextureUnits(h.state.textureUnits),et===!0&&Gt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,E!==null&&E.renderEnd()};function sh(P,k,Y,X){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLightProbeGrid)h.pushLightProbeGrid(P);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){X&&vt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(at);let Nt=st.update(P),Et=P.material;Et.visible&&b.push(P,Nt,Et,Y,vt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){let Nt=st.update(P),Et=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),vt.copy(P.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),vt.copy(Nt.boundingSphere.center)),vt.applyMatrix4(P.matrixWorld).applyMatrix4(at)),Array.isArray(Et)){let Ft=Nt.groups;for(let Vt=0,Qt=Ft.length;Vt<Qt;Vt++){let ee=Ft[Vt],kt=Et[ee.materialIndex];kt&&kt.visible&&b.push(P,Nt,kt,Y,vt.z,ee)}}else Et.visible&&b.push(P,Nt,Et,Y,vt.z,null)}}let Rt=P.children;for(let Nt=0,Et=Rt.length;Nt<Et;Nt++)sh(Rt[Nt],k,Y,X)}function hf(P,k,Y,X){let{opaque:q,transmissive:Rt,transparent:Nt}=P;h.setupLightsView(Y),et===!0&&Gt.setGlobalState(S.clippingPlanes,Y),X&&R.viewport(K.copy(X)),q.length>0&&$o(q,k,Y),Rt.length>0&&$o(Rt,k,Y),Nt.length>0&&$o(Nt,k,Y),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function uf(P,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(h.state.transmissionRenderTarget[X.id]===void 0){let kt=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");h.state.transmissionRenderTarget[X.id]=new vn(1,1,{generateMipmaps:!0,type:kt?ei:on,minFilter:qi,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Rt=h.state.transmissionRenderTarget[X.id],Nt=X.viewport||K;Rt.setSize(Nt.z*S.transmissionResolutionScale,Nt.w*S.transmissionResolutionScale);let Et=S.getRenderTarget(),Ft=S.getActiveCubeFace(),Vt=S.getActiveMipmapLevel();S.setRenderTarget(Rt),S.getClearColor(Ct),_t=S.getClearAlpha(),_t<1&&S.setClearColor(16777215,.5),S.clear(),It&&jt.render(Y);let Qt=S.toneMapping;S.toneMapping=On;let ee=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),et===!0&&Gt.setGlobalState(S.clippingPlanes,X),$o(P,Y,X),J.updateMultisampleRenderTarget(Rt),J.updateRenderTargetMipmap(Rt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ae=0,Te=k.length;ae<Te;ae++){let Me=k[ae],{object:ce,geometry:Ze,material:Lt,group:mn}=Me;if(Lt.side===un&&ce.layers.test(X.layers)){let re=Lt.side;Lt.side=qe,Lt.needsUpdate=!0,df(ce,Y,X,Ze,Lt,mn),Lt.side=re,Lt.needsUpdate=!0,kt=!0}}kt===!0&&(J.updateMultisampleRenderTarget(Rt),J.updateRenderTargetMipmap(Rt))}S.setRenderTarget(Et,Ft,Vt),S.setClearColor(Ct,_t),ee!==void 0&&(X.viewport=ee),S.toneMapping=Qt}function $o(P,k,Y){let X=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Rt=P.length;q<Rt;q++){let Nt=P[q],{object:Et,geometry:Ft,group:Vt}=Nt,Qt=Nt.material;Qt.allowOverride===!0&&X!==null&&(Qt=X),Et.layers.test(Y.layers)&&df(Et,k,Y,Ft,Qt,Vt)}}function df(P,k,Y,X,q,Rt){P.onBeforeRender(S,k,Y,X,q,Rt),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(S,k,Y,X,P,Rt),q.transparent===!0&&q.side===un&&q.forceSinglePass===!1?(q.side=qe,q.needsUpdate=!0,S.renderBufferDirect(Y,k,X,q,P,Rt),q.side=Pn,q.needsUpdate=!0,S.renderBufferDirect(Y,k,X,q,P,Rt),q.side=un):S.renderBufferDirect(Y,k,X,q,P,Rt),P.onAfterRender(S,k,Y,X,q,Rt)}function Zo(P,k,Y){k.isScene!==!0&&(k=ft);let X=H.get(P),q=h.state.lights,Rt=h.state.shadowsArray,Nt=q.state.version,Et=bt.getParameters(P,q.state,Rt,k,Y,h.state.lightProbeGridArray),Ft=bt.getProgramCacheKey(Et),Vt=X.programs;X.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;let Qt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;X.envMap=ut.get(P.envMap||X.environment,Qt),X.envMapRotation=X.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Vt===void 0&&(P.addEventListener("dispose",qn),Vt=new Map,X.programs=Vt);let ee=Vt.get(Ft);if(ee!==void 0){if(X.currentProgram===ee&&X.lightsStateVersion===Nt)return pf(P,Et),ee}else Et.uniforms=bt.getUniforms(P),E!==null&&P.isNodeMaterial&&E.build(P,Y,Et),P.onBeforeCompile(Et,S),ee=bt.acquireProgram(Et,Ft),Vt.set(Ft,ee),X.uniforms=Et.uniforms;let kt=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(kt.clippingPlanes=Gt.uniform),pf(P,Et),X.needsLights=qg(P),X.lightsStateVersion=Nt,X.needsLights&&(kt.ambientLightColor.value=q.state.ambient,kt.lightProbe.value=q.state.probe,kt.directionalLights.value=q.state.directional,kt.directionalLightShadows.value=q.state.directionalShadow,kt.spotLights.value=q.state.spot,kt.spotLightShadows.value=q.state.spotShadow,kt.rectAreaLights.value=q.state.rectArea,kt.ltc_1.value=q.state.rectAreaLTC1,kt.ltc_2.value=q.state.rectAreaLTC2,kt.pointLights.value=q.state.point,kt.pointLightShadows.value=q.state.pointShadow,kt.hemisphereLights.value=q.state.hemi,kt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,kt.spotLightMatrix.value=q.state.spotLightMatrix,kt.spotLightMap.value=q.state.spotLightMap,kt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=h.state.lightProbeGridArray.length>0,X.currentProgram=ee,X.uniformsList=null,ee}function ff(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=us.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function pf(P,k){let Y=H.get(P);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Hg(P,k){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;c.setFromMatrixPosition(k.matrixWorld);for(let Y=0,X=P.length;Y<X;Y++){let q=P[Y];if(q.texture!==null&&q.boundingBox.containsPoint(c))return q}return null}function Wg(P,k,Y,X,q){k.isScene!==!0&&(k=ft),J.resetTextureUnits();let Rt=k.fog,Nt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,Et=G===null?S.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ne.workingColorSpace,Ft=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Vt=ut.get(X.envMap||Nt,Ft),Qt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ee=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!Y.morphAttributes.position,ae=!!Y.morphAttributes.normal,Te=!!Y.morphAttributes.color,Me=On;X.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Me=S.toneMapping);let ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ze=ce!==void 0?ce.length:0,Lt=H.get(X),mn=h.state.lights;if(et===!0&&(j===!0||P!==ot)){let de=P===ot&&X.id===W;Gt.setState(X,P,de)}let re=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==mn.state.version||Lt.outputColorSpace!==Et||q.isBatchedMesh&&Lt.batching===!1||!q.isBatchedMesh&&Lt.batching===!0||q.isBatchedMesh&&Lt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Lt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Lt.instancing===!1||!q.isInstancedMesh&&Lt.instancing===!0||q.isSkinnedMesh&&Lt.skinning===!1||!q.isSkinnedMesh&&Lt.skinning===!0||q.isInstancedMesh&&Lt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Lt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Lt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Lt.instancingMorph===!1&&q.morphTexture!==null||Lt.envMap!==Vt||X.fog===!0&&Lt.fog!==Rt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Gt.numPlanes||Lt.numIntersection!==Gt.numIntersection)||Lt.vertexAlphas!==Qt||Lt.vertexTangents!==ee||Lt.morphTargets!==kt||Lt.morphNormals!==ae||Lt.morphColors!==Te||Lt.toneMapping!==Me||Lt.morphTargetsCount!==Ze||!!Lt.lightProbeGrid!=h.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Lt.__version=X.version);let Cn=Lt.currentProgram;re===!0&&(Cn=Zo(X,k,q),E&&X.isNodeMaterial&&E.onUpdateProgram(X,Cn,Lt));let Yn=!1,Ci=!1,Dr=!1,le=Cn.getUniforms(),Ee=Lt.uniforms;if(R.useProgram(Cn.program)&&(Yn=!0,Ci=!0,Dr=!0),X.id!==W&&(W=X.id,Ci=!0),Lt.needsLights){let de=Hg(h.state.lightProbeGridArray,q);Lt.lightProbeGrid!==de&&(Lt.lightProbeGrid=de,Ci=!0)}if(Yn||ot!==P){R.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),le.setValue(B,"projectionMatrix",P.projectionMatrix),le.setValue(B,"viewMatrix",P.matrixWorldInverse);let Ii=le.map.cameraPosition;Ii!==void 0&&Ii.setValue(B,gt.setFromMatrixPosition(P.matrixWorld)),L.logarithmicDepthBuffer&&le.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),ot!==P&&(ot=P,Ci=!0,Dr=!0)}if(Lt.needsLights&&(mn.state.directionalShadowMap.length>0&&le.setValue(B,"directionalShadowMap",mn.state.directionalShadowMap,J),mn.state.spotShadowMap.length>0&&le.setValue(B,"spotShadowMap",mn.state.spotShadowMap,J),mn.state.pointShadowMap.length>0&&le.setValue(B,"pointShadowMap",mn.state.pointShadowMap,J)),q.isSkinnedMesh){le.setOptional(B,q,"bindMatrix"),le.setOptional(B,q,"bindMatrixInverse");let de=q.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),le.setValue(B,"boneTexture",de.boneTexture,J))}q.isBatchedMesh&&(le.setOptional(B,q,"batchingTexture"),le.setValue(B,"batchingTexture",q._matricesTexture,J),le.setOptional(B,q,"batchingIdTexture"),le.setValue(B,"batchingIdTexture",q._indirectTexture,J),le.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&le.setValue(B,"batchingColorTexture",q._colorsTexture,J));let Ri=Y.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&V.update(q,Y,Cn),(Ci||Lt.receiveShadow!==q.receiveShadow)&&(Lt.receiveShadow=q.receiveShadow,le.setValue(B,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(Ee.envMapIntensity.value=k.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Kb()),Ci){if(le.setValue(B,"toneMappingExposure",S.toneMappingExposure),Lt.needsLights&&Xg(Ee,Dr),Rt&&X.fog===!0&&zt.refreshFogUniforms(Ee,Rt),zt.refreshMaterialUniforms(Ee,X,tt,nt,h.state.transmissionRenderTarget[P.id]),Lt.needsLights&&Lt.lightProbeGrid){let de=Lt.lightProbeGrid;Ee.probesSH.value=de.texture,Ee.probesMin.value.copy(de.boundingBox.min),Ee.probesMax.value.copy(de.boundingBox.max),Ee.probesResolution.value.copy(de.resolution)}us.upload(B,ff(Lt),Ee,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(us.upload(B,ff(Lt),Ee,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(B,"center",q.center),le.setValue(B,"modelViewMatrix",q.modelViewMatrix),le.setValue(B,"normalMatrix",q.normalMatrix),le.setValue(B,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let de=X.uniformsGroups;for(let Ii=0,Lr=de.length;Ii<Lr;Ii++){let mf=de[Ii];ct.update(mf,Cn),ct.bind(mf,Cn)}}return Cn}function Xg(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function qg(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(P,k,Y){let X=H.get(P);X.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),H.get(P.texture).__webglTexture=k,H.get(P.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,k){let Y=H.get(P);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(P,k=0,Y=0){G=P,F=k,O=Y;let X=null,q=!1,Rt=!1;if(P){let Et=H.get(P);if(Et.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(B.FRAMEBUFFER,Et.__webglFramebuffer),K.copy(P.viewport),rt.copy(P.scissor),xt=P.scissorTest,R.viewport(K),R.scissor(rt),R.setScissorTest(xt),W=-1;return}else if(Et.__webglFramebuffer===void 0)J.setupRenderTarget(P);else if(Et.__hasExternalTextures)J.rebindTextures(P,H.get(P.texture).__webglTexture,H.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qt=P.depthTexture;if(Et.__boundDepthTexture!==Qt){if(Qt!==null&&H.has(Qt)&&(P.width!==Qt.image.width||P.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(P)}}let Ft=P.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Rt=!0);let Vt=H.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?X=Vt[k][Y]:X=Vt[k],q=!0):P.samples>0&&J.useMultisampledRTT(P)===!1?X=H.get(P).__webglMultisampledFramebuffer:Array.isArray(Vt)?X=Vt[Y]:X=Vt,K.copy(P.viewport),rt.copy(P.scissor),xt=P.scissorTest}else K.copy(dt).multiplyScalar(tt).floor(),rt.copy(Yt).multiplyScalar(tt).floor(),xt=wt;if(Y!==0&&(X=I),R.bindFramebuffer(B.FRAMEBUFFER,X)&&R.drawBuffers(P,X),R.viewport(K),R.scissor(rt),R.setScissorTest(xt),q){let Et=H.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Et.__webglTexture,Y)}else if(Rt){let Et=k;for(let Ft=0;Ft<P.textures.length;Ft++){let Vt=H.get(P.textures[Ft]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ft,Vt.__webglTexture,Y,Et)}}else if(P!==null&&Y!==0){let Et=H.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Et.__webglTexture,Y)}W=-1},this.readRenderTargetPixels=function(P,k,Y,X,q,Rt,Nt,Et=0){if(!(P&&P.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=H.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft){R.bindFramebuffer(B.FRAMEBUFFER,Ft);try{let Vt=P.textures[Et],Qt=Vt.format,ee=Vt.type;if(P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Et),!L.textureFormatReadable(Qt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(ee)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-X&&Y>=0&&Y<=P.height-q&&B.readPixels(k,Y,X,q,St.convert(Qt),St.convert(ee),Rt)}finally{let Vt=G!==null?H.get(G).__webglFramebuffer:null;R.bindFramebuffer(B.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(P,k,Y,X,q,Rt,Nt,Et=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=H.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft)if(k>=0&&k<=P.width-X&&Y>=0&&Y<=P.height-q){R.bindFramebuffer(B.FRAMEBUFFER,Ft);let Vt=P.textures[Et],Qt=Vt.format,ee=Vt.type;if(P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Et),!L.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let kt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,kt),B.bufferData(B.PIXEL_PACK_BUFFER,Rt.byteLength,B.STREAM_READ),B.readPixels(k,Y,X,q,St.convert(Qt),St.convert(ee),0);let ae=G!==null?H.get(G).__webglFramebuffer:null;R.bindFramebuffer(B.FRAMEBUFFER,ae);let Te=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Dp(B,Te,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,kt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Rt),B.deleteBuffer(kt),B.deleteSync(Te),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,k=null,Y=0){let X=Math.pow(2,-Y),q=Math.floor(P.image.width*X),Rt=Math.floor(P.image.height*X),Nt=k!==null?k.x:0,Et=k!==null?k.y:0;J.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Nt,Et,q,Rt),R.unbindTexture()},this.copyTextureToTexture=function(P,k,Y=null,X=null,q=0,Rt=0){let Nt,Et,Ft,Vt,Qt,ee,kt,ae,Te,Me=P.isCompressedTexture?P.mipmaps[Rt]:P.image;if(Y!==null)Nt=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,Ft=Y.isBox3?Y.max.z-Y.min.z:1,Vt=Y.min.x,Qt=Y.min.y,ee=Y.isBox3?Y.min.z:0;else{let Ee=Math.pow(2,-q);Nt=Math.floor(Me.width*Ee),Et=Math.floor(Me.height*Ee),P.isDataArrayTexture?Ft=Me.depth:P.isData3DTexture?Ft=Math.floor(Me.depth*Ee):Ft=1,Vt=0,Qt=0,ee=0}X!==null?(kt=X.x,ae=X.y,Te=X.z):(kt=0,ae=0,Te=0);let ce=St.convert(k.format),Ze=St.convert(k.type),Lt;k.isData3DTexture?(J.setTexture3D(k,0),Lt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(J.setTexture2DArray(k,0),Lt=B.TEXTURE_2D_ARRAY):(J.setTexture2D(k,0),Lt=B.TEXTURE_2D),R.activeTexture(B.TEXTURE0),R.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let mn=R.getParameter(B.UNPACK_ROW_LENGTH),re=R.getParameter(B.UNPACK_IMAGE_HEIGHT),Cn=R.getParameter(B.UNPACK_SKIP_PIXELS),Yn=R.getParameter(B.UNPACK_SKIP_ROWS),Ci=R.getParameter(B.UNPACK_SKIP_IMAGES);R.pixelStorei(B.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(B.UNPACK_SKIP_PIXELS,Vt),R.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),R.pixelStorei(B.UNPACK_SKIP_IMAGES,ee);let Dr=P.isDataArrayTexture||P.isData3DTexture,le=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){let Ee=H.get(P),Ri=H.get(k),de=H.get(Ee.__renderTarget),Ii=H.get(Ri.__renderTarget);R.bindFramebuffer(B.READ_FRAMEBUFFER,de.__webglFramebuffer),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Lr=0;Lr<Ft;Lr++)Dr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(P).__webglTexture,q,ee+Lr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(k).__webglTexture,Rt,Te+Lr)),B.blitFramebuffer(Vt,Qt,Nt,Et,kt,ae,Nt,Et,B.DEPTH_BUFFER_BIT,B.NEAREST);R.bindFramebuffer(B.READ_FRAMEBUFFER,null),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||H.has(P)){let Ee=H.get(P),Ri=H.get(k);R.bindFramebuffer(B.READ_FRAMEBUFFER,U),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let de=0;de<Ft;de++)Dr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.__webglTexture,q,ee+de):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,q),le?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ri.__webglTexture,Rt,Te+de):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ri.__webglTexture,Rt),q!==0?B.blitFramebuffer(Vt,Qt,Nt,Et,kt,ae,Nt,Et,B.COLOR_BUFFER_BIT,B.NEAREST):le?B.copyTexSubImage3D(Lt,Rt,kt,ae,Te+de,Vt,Qt,Nt,Et):B.copyTexSubImage2D(Lt,Rt,kt,ae,Vt,Qt,Nt,Et);R.bindFramebuffer(B.READ_FRAMEBUFFER,null),R.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else le?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(Lt,Rt,kt,ae,Te,Nt,Et,Ft,ce,Ze,Me.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Lt,Rt,kt,ae,Te,Nt,Et,Ft,ce,Me.data):B.texSubImage3D(Lt,Rt,kt,ae,Te,Nt,Et,Ft,ce,Ze,Me):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Rt,kt,ae,Nt,Et,ce,Ze,Me.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Rt,kt,ae,Me.width,Me.height,ce,Me.data):B.texSubImage2D(B.TEXTURE_2D,Rt,kt,ae,Nt,Et,ce,Ze,Me);R.pixelStorei(B.UNPACK_ROW_LENGTH,mn),R.pixelStorei(B.UNPACK_IMAGE_HEIGHT,re),R.pixelStorei(B.UNPACK_SKIP_PIXELS,Cn),R.pixelStorei(B.UNPACK_SKIP_ROWS,Yn),R.pixelStorei(B.UNPACK_SKIP_IMAGES,Ci),Rt===0&&k.generateMipmaps&&B.generateMipmap(Lt),R.unbindTexture()},this.initRenderTarget=function(P){H.get(P).__webglFramebuffer===void 0&&J.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?J.setTextureCube(P,0):P.isData3DTexture?J.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?J.setTexture2DArray(P,0):J.setTexture2D(P,0),R.unbindTexture()},this.resetState=function(){F=0,O=0,G=null,R.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Nm=0,Qb=1,tM=2;var gm=2,Wu=1.25,xm=1,en=32,ze=en/4,md=65535,yT=md<<16,Tl=Math.pow(2,-24),gd=Symbol("SKIP_GENERATION"),Um={strategy:Nm,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[gd]:!1};function we(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function td(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function _m(i,t){t.set(i)}function ym(i,t,e){let n,r;for(let s=0;s<3;s++){let o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function ul(i,t,e){for(let n=0;n<3;n++){let r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Po(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Re(i,t){return t[i+15]===md}function We(i,t){return t[i+6]}function nn(i,t){return t[i+14]}function Ve(i){return i+ze}function ke(i,t){let e=t[i+6];return i+e*ze}function xd(i,t){return t[i+7]}function Xu(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,u=-1/0,d=-1/0,m=1/0,f=1/0,g=1/0,_=-1/0,A=-1/0,x=-1/0,y=i.offset||0;for(let w=(t-y)*6,p=(t+e-y)*6;w<p;w+=6){let c=i[w+0],b=i[w+1],h=c-b,C=c+b;h<s&&(s=h),C>l&&(l=C),c<m&&(m=c),c>_&&(_=c);let v=i[w+2],M=i[w+3],S=v-M,T=v+M;S<o&&(o=S),T>u&&(u=T),v<f&&(f=v),v>A&&(A=v);let E=i[w+4],I=i[w+5],U=E-I,N=E+I;U<a&&(a=U),N>d&&(d=N),E<g&&(g=E),E>x&&(x=E)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=u,n[5]=d,r[0]=m,r[1]=f,r[2]=g,r[3]=_,r[4]=A,r[5]=x}var vi=32,eM=(i,t)=>i.candidate-t.candidate,Zi=new Array(vi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),dl=new Float32Array(6);function nM(i,t,e,n,r,s){let o=-1,a=0;if(s===Nm)o=td(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===Qb)o=td(i),o!==-1&&(a=iM(e,n,r,o));else if(s===tM){let l=Po(i),u=Wu*r,d=e.offset||0,m=(n-d)*6,f=(n+r-d)*6;for(let g=0;g<3;g++){let _=t[g],y=(t[g+3]-_)/vi;if(r<vi/4){let w=[...Zi];w.length=r;let p=0;for(let b=m;b<f;b+=6,p++){let h=w[p];h.candidate=e[b+2*g],h.count=0;let{bounds:C,leftCacheBounds:v,rightCacheBounds:M}=h;for(let S=0;S<3;S++)M[S]=1/0,M[S+3]=-1/0,v[S]=1/0,v[S+3]=-1/0,C[S]=1/0,C[S+3]=-1/0;ul(b,e,C)}w.sort(eM);let c=r;for(let b=0;b<c;b++){let h=w[b];for(;b+1<c&&w[b+1].candidate===h.candidate;)w.splice(b+1,1),c--}for(let b=m;b<f;b+=6){let h=e[b+2*g];for(let C=0;C<c;C++){let v=w[C];h>=v.candidate?ul(b,e,v.rightCacheBounds):(ul(b,e,v.leftCacheBounds),v.count++)}}for(let b=0;b<c;b++){let h=w[b],C=h.count,v=r-h.count,M=h.leftCacheBounds,S=h.rightCacheBounds,T=0;C!==0&&(T=Po(M)/l);let E=0;v!==0&&(E=Po(S)/l);let I=xm+Wu*(T*C+E*v);I<u&&(o=g,u=I,a=h.candidate)}}else{for(let c=0;c<vi;c++){let b=Zi[c];b.count=0,b.candidate=_+y+c*y;let h=b.bounds;for(let C=0;C<3;C++)h[C]=1/0,h[C+3]=-1/0}for(let c=m;c<f;c+=6){let C=~~((e[c+2*g]-_)/y);C>=vi&&(C=vi-1);let v=Zi[C];v.count++,ul(c,e,v.bounds)}let w=Zi[vi-1];_m(w.bounds,w.rightCacheBounds);for(let c=vi-2;c>=0;c--){let b=Zi[c],h=Zi[c+1];ym(b.bounds,h.rightCacheBounds,b.rightCacheBounds)}let p=0;for(let c=0;c<vi-1;c++){let b=Zi[c],h=b.count,C=b.bounds,M=Zi[c+1].rightCacheBounds;h!==0&&(p===0?_m(C,dl):ym(C,dl,dl)),p+=h;let S=0,T=0;p!==0&&(S=Po(dl)/l);let E=r-p;E!==0&&(T=Po(M)/l);let I=xm+Wu*(S*p+T*E);I<u&&(o=g,u=I,a=b.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function iM(i,t,e,n){let r=0,s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}var Oo=class{constructor(){this.boundingData=new Float32Array(6)}};function rM(i,t,e,n,r,s){let o=n,a=n+r-1,l=s.pos,u=s.axis*2,d=e.offset||0;for(;;){for(;o<=a&&e[(o-d)*6+u]<l;)o++;for(;o<=a&&e[(a-d)*6+u]>=l;)a--;if(o<a){for(let m=0;m<t;m++){let f=i[o*t+m];i[o*t+m]=i[a*t+m],i[a*t+m]=f}for(let m=0;m<6;m++){let f=o-d,g=a-d,_=e[f*6+m];e[f*6+m]=e[g*6+m],e[g*6+m]=_}o++,a--}else return o}}var Bm,El,ed,Fm,sM=Math.pow(2,32);function nd(i){return"count"in i?1:1+nd(i.left)+nd(i.right)}function oM(i,t,e){return Bm=new Float32Array(e),El=new Uint32Array(e),ed=new Uint16Array(e),Fm=new Uint8Array(e),id(i,t)}function id(i,t){let e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Bm[e+o]=s[o];if(r)return t.buffer?(Fm.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(El[e+6]=t.offset,ed[n+14]=t.count,ed[n+15]=md,i+en);{let{left:o,right:a,splitAxis:l}=t,u=i+en,d=id(u,o),m=i/en,g=d/en-m;if(g>sM)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return El[e+6]=g,El[e+7]=l,id(d,a)}}function aM(i,t,e,n,r,s){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:u=1/0,strategy:d,onProgress:m}=r,f=i.primitiveBuffer,g=i.primitiveBufferStride,_=new Float32Array(6),A=!1,x=new Oo;return Xu(t,e,n,x.boundingData,_),w(x,e,n,_),x;function y(p){m&&m((p-s.offset)/s.count)}function w(p,c,b,h=null,C=0){!A&&C>=o&&(A=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let v=b>u;if(b<=l&&!v||C>=o)return y(c+b),p.offset=c,p.count=b,p;let M=nM(p.boundingData,h,t,c,b,d),S=M.axis===-1?-1:rM(f,g,t,c,b,M);if(M.axis===-1||S===c||S===c+b){if(!v)return y(c+b),p.offset=c,p.count=b,p;M.axis=Math.max(0,td(p.boundingData)),S=c+Math.max(1,Math.floor(b/2))}p.splitAxis=M.axis;let T=new Oo,E=c,I=S-c;p.left=T,Xu(t,E,I,T.boundingData,_),w(T,E,I,_,C+1);let U=new Oo,N=S,F=b-I;return p.right=U,Xu(t,N,F,U.boundingData,_),w(U,N,F,_,C+1),p}}function cM(i,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{let u=aM(i,a,l.offset,l.count,t,o),d=nd(u),m=new e(en*d);return oM(0,u,m),m})}var Vo=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}},rd=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},pe=new rd,Ki,bs,fs=[],fl=new Vo(()=>new _e);function lM(i,t,e,n,r,s){Ki=fl.getPrimitive(),bs=fl.getPrimitive(),fs.push(Ki,bs),pe.setBuffer(i._roots[t]);let o=sd(0,i.geometry,e,n,r,s);pe.clearBuffer(),fl.releasePrimitive(Ki),fl.releasePrimitive(bs),fs.pop(),fs.pop();let a=fs.length;return a>0&&(bs=fs[a-1],Ki=fs[a-2]),o}function sd(i,t,e,n,r=null,s=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:u}=pe,d=i*2;if(Re(d,l)){let f=We(i,u),g=nn(d,l);return we(i,a,Ki),n(f,g,!1,o,s+i/ze,Ki)}else{let S=function(E){let{uint16Array:I,uint32Array:U}=pe,N=E*2;for(;!Re(N,I);)E=Ve(E),N=E*2;return We(E,U)},T=function(E){let{uint16Array:I,uint32Array:U}=pe,N=E*2;for(;!Re(N,I);)E=ke(E,U),N=E*2;return We(E,U)+nn(N,I)},f=Ve(i),g=ke(i,u),_=f,A=g,x,y,w,p;if(r&&(w=Ki,p=bs,we(_,a,w),we(A,a,p),x=r(w),y=r(p),y<x)){_=g,A=f;let E=x;x=y,y=E,w=p}w||(w=Ki,we(_,a,w));let c=Re(_*2,l),b=e(w,c,x,o+1,s+_/ze),h;if(b===gm){let E=S(_),U=T(_)-E;h=n(E,U,!0,o+1,s+_/ze,w)}else h=b&&sd(_,t,e,n,r,s,o+1);if(h)return!0;p=bs,we(A,a,p);let C=Re(A*2,l),v=e(p,C,y,o+1,s+A/ze),M;if(v===gm){let E=S(A),U=T(A)-E;M=n(E,U,!0,o+1,s+A/ze,p)}else M=v&&sd(A,t,e,n,r,s,o+1);return!!M}}var zo=new pe.constructor,Cl=new pe.constructor,Ji=new Vo(()=>new _e),ps=new _e,ms=new _e,qu=new _e,Yu=new _e,$u=!1;function hM(i,t,e,n){if($u)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");$u=!0;let r=i._roots,s=t._roots,o,a=0,l=0,u=new Zt().copy(e).invert();for(let d=0,m=r.length;d<m;d++){zo.setBuffer(r[d]),l=0;let f=Ji.getPrimitive();we(0,zo.float32Array,f),f.applyMatrix4(u);for(let g=0,_=s.length;g<_&&(Cl.setBuffer(s[g]),o=zn(0,0,e,u,n,a,l,0,0,f),Cl.clearBuffer(),l+=s[g].byteLength/en,!o);g++);if(Ji.releasePrimitive(f),zo.clearBuffer(),a+=r[d].byteLength/en,o)break}return $u=!1,o}function zn(i,t,e,n,r,s=0,o=0,a=0,l=0,u=null,d=!1){let m,f;d?(m=Cl,f=zo):(m=zo,f=Cl);let g=m.float32Array,_=m.uint32Array,A=m.uint16Array,x=f.float32Array,y=f.uint32Array,w=f.uint16Array,p=i*2,c=t*2,b=Re(p,A),h=Re(c,w),C=!1;if(h&&b)d?C=r(We(t,y),nn(t*2,w),We(i,_),nn(i*2,A),l,o+t/ze,a,s+i/ze):C=r(We(i,_),nn(i*2,A),We(t,y),nn(t*2,w),a,s+i/ze,l,o+t/ze);else if(h){let v=Ji.getPrimitive();we(t,x,v),v.applyMatrix4(e);let M=Ve(i),S=ke(i,_);we(M,g,ps),we(S,g,ms);let T=v.intersectsBox(ps),E=v.intersectsBox(ms);C=T&&zn(t,M,n,e,r,o,s,l,a+1,v,!d)||E&&zn(t,S,n,e,r,o,s,l,a+1,v,!d),Ji.releasePrimitive(v)}else{let v=Ve(t),M=ke(t,y);we(v,x,qu),we(M,x,Yu);let S=u.intersectsBox(qu),T=u.intersectsBox(Yu);if(S&&T)C=zn(i,v,e,n,r,s,o,a,l+1,u,d)||zn(i,M,e,n,r,s,o,a,l+1,u,d);else if(S)if(b)C=zn(i,v,e,n,r,s,o,a,l+1,u,d);else{let E=Ji.getPrimitive();E.copy(qu).applyMatrix4(e);let I=Ve(i),U=ke(i,_);we(I,g,ps),we(U,g,ms);let N=E.intersectsBox(ps),F=E.intersectsBox(ms);C=N&&zn(v,I,n,e,r,o,s,l,a+1,E,!d)||F&&zn(v,U,n,e,r,o,s,l,a+1,E,!d),Ji.releasePrimitive(E)}else if(T)if(b)C=zn(i,M,e,n,r,s,o,a,l+1,u,d);else{let E=Ji.getPrimitive();E.copy(Yu).applyMatrix4(e);let I=Ve(i),U=ke(i,_);we(I,g,ps),we(U,g,ms);let N=E.intersectsBox(ps),F=E.intersectsBox(ms);C=N&&zn(M,I,n,e,r,o,s,l,a+1,E,!d)||F&&zn(M,U,n,e,r,o,s,l,a+1,E,!d),Ji.releasePrimitive(E)}}return C}var Zu=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!Re(o,e);)s=Ve(s),o=s*2;return We(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!Re(o,e);)s=ke(s,t),o=s*2;return We(s,t)+nn(o,e)};let r=(s,o,a)=>{let l=o*2,u=Re(l,e);if(!s(a,u,o)&&!u){let m=Ve(o),f=ke(o,t);r(s,m,a+1),r(s,f,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,l)=>{if(a){let u=l*2,d=t[l+6],m=e[u+14];return s(o,a,new Float32Array(i,l*4,6),d,m)}else{let u=xd(l,t);return s(o,a,new Float32Array(i,l*4,6),u)}})}}},vm=new _e,gs=new Float32Array(6),od=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Um,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),cM(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,u=-1/0,d=-1/0;for(let m=t,f=t+e;m<f;m++){this.writePrimitiveBounds(m,gs,0);let[g,_,A,x,y,w]=gs;g<s&&(s=g),x>l&&(l=x),_<o&&(o=_),y>u&&(u=y),A<a&&(a=A),w>d&&(d=w)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=l,n[r+4]=u,n[r+5]=d,n}computePrimitiveBounds(t,e,n){let r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,gs,0);let[a,l,u,d,m,f]=gs,g=(a+d)/2,_=(l+m)/2,A=(u+f)/2,x=(d-a)/2,y=(m-l)/2,w=(f-u)/2,p=(s-r)*6;n[p+0]=g,n[p+1]=x+(Math.abs(g)+x)*Tl,n[p+2]=_,n[p+3]=y+(Math.abs(_)+y)*Tl,n[p+4]=A,n[p+5]=w+(Math.abs(A)+w)*Tl}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{let n=this._roots;for(let r=0;r<n.length;r++){let s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/en;for(let u=0;u<l;u++){let d=ze*u,m=2*d;Re(m,a)&&(o[d+6]+=t)}}}}traverse(t,e=0){Zu.setBVH(this,e),Zu.traverse(t),Zu.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),l=r.byteLength/en;for(let u=l-1;u>=0;u--){let d=u*ze,m=d*2;if(Re(m,o)){let g=We(d,s),_=nn(m,o);this.writePrimitiveRangeBounds(g,_,gs,0),a.set(gs,d)}else{let g=Ve(d),_=ke(d,s);for(let A=0;A<3;A++){let x=a[g+A],y=a[g+A+3],w=a[_+A],p=a[_+A+3];a[d+A]=x<w?x:w,a[d+A+3]=y>p?y:p}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{we(0,new Float32Array(n),vm),t.union(vm)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){let m=r;r=(f,g,_,A,x)=>m(f,g,_,A,x)?!0:a(f,g,this,s,_,A,o)}else r||(s?r=(m,f,g,_)=>a(m,f,this,s,g,_,o):r=(m,f,g)=>g);let l=!1,u=0,d=this._roots;for(let m=0,f=d.length;m<f;m++){let g=d[m];if(l=lM(this,m,n,r,e,u),l)break;u+=g.byteLength/en}return l}bvhcast(t,e,n){let{intersectsRanges:r}=n;return hM(this,t,e,r)}};function uM(){return typeof SharedArrayBuffer!="undefined"}function _d(i){return i.index?i.index.count:i.attributes.position.count}function Il(i){return _d(i)/3}function dM(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function fM(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=dM(e,n);i.setIndex(new Ce(r,1));for(let s=0;s<e;s++)r[s]=s}}function pM(i,t,e){let n=_d(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function mM(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function bm(i,t,e){let n=pM(i,t,e),r=mM(i,e);if(!r.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,l=_d(i)/e,u=[];for(let f of r){let{offset:g,count:_}=f,A=g,x=isFinite(_)?_:l-g,y=g+x;A<a&&y>o&&(u.push({pos:Math.max(o,A),isStart:!0}),u.push({pos:Math.min(a,y),isStart:!1}))}u.sort((f,g)=>f.pos!==g.pos?f.pos-g.pos:f.type==="end"?-1:1);let d=0,m=null;for(let f of u){let g=f.pos;d!==0&&g!==m&&s.push({offset:m,count:g-m}),d+=f.isStart?1:-1,m=g}return s}function gM(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((u,d)=>u+d.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o),l=0;for(let u=0;u<i.length;u++){let{offset:d,count:m}=i[u];for(let f=0;f<m;f++)a[l+f]=d+f;l+=m}return a}var ad=class extends od{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!uM())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Um,...e},e[gd]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let r=bm(e,t.range,n),s=gM(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else fM(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new _e))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:bm(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}},Vn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){let l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}};Vn.prototype.setFromBox=(function(){let i=new D;return function(e,n){let r=n.min,s=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){i.x=r.x*l+s.x*(1-l),i.y=r.y*u+s.y*(1-u),i.z=r.z*d+s.z*(1-d);let m=e.dot(i);o=Math.min(m,o),a=Math.max(m,a)}this.min=o,this.max=a}})();var xM=(function(){let i=new D,t=new D,e=new D;return function(r,s,o){let a=r.start,l=i,u=s.start,d=t;e.subVectors(a,u),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);let m=e.dot(d),f=d.dot(l),g=d.dot(d),_=e.dot(l),x=l.dot(l)*g-f*f,y,w;x!==0?y=(m*f-_*g)/x:y=0,w=(m+y*f)/g,o.x=y,o.y=w}})(),yd=(function(){let i=new ht,t=new D,e=new D;return function(r,s,o,a){xM(r,s,i);let l=i.x,u=i.y;if(l>=0&&l<=1&&u>=0&&u<=1){r.at(l,o),s.at(u,a);return}else if(l>=0&&l<=1){u<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let d;l<0?d=r.start:d=r.end;let m;u<0?m=s.start:m=s.end;let f=t,g=e;if(r.closestPointToPoint(m,!0,t),s.closestPointToPoint(d,!0,e),f.distanceToSquared(m)<=g.distanceToSquared(d)){o.copy(f),a.copy(m);return}else{o.copy(d),a.copy(g);return}}}})(),_M=(function(){let i=new D,t=new D,e=new He,n=new ge;return function(s,o){let{radius:a,center:l}=s,{a:u,b:d,c:m}=o;if(n.start=u,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=u,n.end=m,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=d,n.end=m,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let A=o.getPlane(e);if(Math.abs(A.distanceToPoint(l))<=a){let y=A.projectPoint(l,t);if(o.containsPoint(y))return!0}return!1}})(),yM=["x","y","z"],bi=1e-15,Mm=bi*bi;function Dn(i){return Math.abs(i)<bi}var Ye=class extends he{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new Vn),this.points=[this.a,this.b,this.c],this.plane=new He,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ge,this.needsUpdate=!0}intersectsSphere(t){return _M(t,this)}update(){let t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);let u=s[1],d=o[1];u.subVectors(t,e),d.setFromPoints(u,r);let m=s[2],f=o[2];m.subVectors(e,n),f.setFromPoints(m,r);let g=s[3],_=o[3];g.subVectors(n,t),_.setFromPoints(g,r);let A=u.length(),x=m.length(),y=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,A<bi?x<bi||y<bi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):x<bi?y<bi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):y<bi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ye.prototype.closestPointToSegment=(function(){let i=new D,t=new D,e=new ge;return function(r,s=null,o=null){let{start:a,end:l}=r,u=this.points,d,m=1/0;for(let f=0;f<3;f++){let g=(f+1)%3;e.start.copy(u[f]),e.end.copy(u[g]),yd(e,r,i,t),d=i.distanceToSquared(t),d<m&&(m=d,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),d=a.distanceToSquared(i),d<m&&(m=d,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),d=l.distanceToSquared(i),d<m&&(m=d,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(m)}})();Ye.prototype.intersectsTriangle=(function(){let i=new Ye,t=new Vn,e=new Vn,n=new D,r=new D,s=new D,o=new D,a=new ge,l=new ge,u=new D,d=new ht,m=new ht;function f(p,c,b,h){let C=n;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?C.copy(p.plane.normal):C.copy(c.plane.normal);let v=p.satBounds,M=p.satAxes;for(let E=1;E<4;E++){let I=v[E],U=M[E];if(t.setFromPoints(U,c.points),I.isSeparated(t)||(o.copy(C).cross(U),t.setFromPoints(o,p.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}let S=c.satBounds,T=c.satAxes;for(let E=1;E<4;E++){let I=S[E],U=T[E];if(t.setFromPoints(U,p.points),I.isSeparated(t)||(o.crossVectors(C,U),t.setFromPoints(o,p.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return b&&(h||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),b.start.set(0,0,0),b.end.set(0,0,0)),!0}function g(p,c,b,h,C,v,M,S,T,E,I){let U=M/(M-S);E.x=h+(C-h)*U,I.start.subVectors(c,p).multiplyScalar(U).add(p),U=M/(M-T),E.y=h+(v-h)*U,I.end.subVectors(b,p).multiplyScalar(U).add(p)}function _(p,c,b,h,C,v,M,S,T,E,I){if(C>0)g(p.c,p.a,p.b,h,c,b,T,M,S,E,I);else if(v>0)g(p.b,p.a,p.c,b,c,h,S,M,T,E,I);else if(S*T>0||M!=0)g(p.a,p.b,p.c,c,b,h,M,S,T,E,I);else if(S!=0)g(p.b,p.a,p.c,b,c,h,S,M,T,E,I);else if(T!=0)g(p.c,p.a,p.b,h,c,b,T,M,S,E,I);else return!0;return!1}function A(p,c,b,h){let C=c.degenerateSegment,v=p.plane.distanceToPoint(C.start),M=p.plane.distanceToPoint(C.end);return Dn(v)?Dn(M)?f(p,c,b,h):(b&&(b.start.copy(C.start),b.end.copy(C.start)),p.containsPoint(C.start)):Dn(M)?(b&&(b.start.copy(C.end),b.end.copy(C.end)),p.containsPoint(C.end)):p.plane.intersectLine(C,n)!=null?(b&&(b.start.copy(n),b.end.copy(n)),p.containsPoint(n)):!1}function x(p,c,b){let h=c.a;return Dn(p.plane.distanceToPoint(h))&&p.containsPoint(h)?(b&&(b.start.copy(h),b.end.copy(h)),!0):!1}function y(p,c,b){let h=p.degenerateSegment,C=c.a;return h.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<Mm?(b&&(b.start.copy(C),b.end.copy(C)),!0):!1}function w(p,c,b,h){if(p.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){let C=p.degenerateSegment,v=c.degenerateSegment,M=r,S=s;C.delta(M),v.delta(S);let T=n.subVectors(v.start,C.start),E=M.x*S.y-M.y*S.x;if(Dn(E))return!1;let I=(T.x*S.y-T.y*S.x)/E,U=-(M.x*T.y-M.y*T.x)/E;if(I<0||I>1||U<0||U>1)return!1;let N=C.start.z+M.z*I,F=v.start.z+S.z*U;return Dn(N-F)?(b&&(b.start.copy(C.start).addScaledVector(M,I),b.end.copy(C.start).addScaledVector(M,I)),!0):!1}else return c.isDegenerateIntoPoint?y(p,c,b):A(c,p,b,h);else{if(p.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(p.a)<Mm?(b&&(b.start.copy(p.a),b.end.copy(p.a)),!0):!1:c.isDegenerateIntoSegment?y(c,p,b):x(c,p,b);if(c.isDegenerateIntoPoint)return x(p,c,b);if(c.isDegenerateIntoSegment)return A(p,c,b,h)}}return function(c,b=null,h=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(i.copy(c),i.update(),c=i);let C=w(this,c,b,h);if(C!==void 0)return C;let v=this.plane,M=c.plane,S=M.distanceToPoint(this.a),T=M.distanceToPoint(this.b),E=M.distanceToPoint(this.c);Dn(S)&&(S=0),Dn(T)&&(T=0),Dn(E)&&(E=0);let I=S*T,U=S*E;if(I>0&&U>0)return!1;let N=v.distanceToPoint(c.a),F=v.distanceToPoint(c.b),O=v.distanceToPoint(c.c);Dn(N)&&(N=0),Dn(F)&&(F=0),Dn(O)&&(O=0);let G=N*F,W=N*O;if(G>0&&W>0)return!1;r.copy(v.normal),s.copy(M.normal);let ot=r.cross(s),K=0,rt=Math.abs(ot.x),xt=Math.abs(ot.y);xt>rt&&(rt=xt,K=1),Math.abs(ot.z)>rt&&(K=2);let _t=yM[K],$=this.a[_t],nt=this.b[_t],tt=this.c[_t],lt=c.a[_t],pt=c.b[_t],dt=c.c[_t];if(_(this,$,nt,tt,I,U,S,T,E,d,a))return f(this,c,b,h);if(_(c,lt,pt,dt,G,W,N,F,O,m,l))return f(this,c,b,h);if(d.y<d.x){let Yt=d.y;d.y=d.x,d.x=Yt,u.copy(a.start),a.start.copy(a.end),a.end.copy(u)}if(m.y<m.x){let Yt=m.y;m.y=m.x,m.x=Yt,u.copy(l.start),l.start.copy(l.end),l.end.copy(u)}return d.y<m.x||m.y<d.x?!1:(b&&(m.x>d.x?b.start.copy(l.start):b.start.copy(a.start),m.y<d.y?b.end.copy(l.end):b.end.copy(a.end)),!0)}})();Ye.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ye.prototype.distanceToTriangle=(function(){let i=new D,t=new D,e=["a","b","c"],n=new ge,r=new ge;return function(o,a=null,l=null){let u=a||l?n:null;if(this.intersectsTriangle(o,u,!0))return(a||l)&&(a&&u.getCenter(a),l&&u.getCenter(l)),0;let d=1/0;for(let m=0;m<3;m++){let f,g=e[m],_=o[g];this.closestPointToPoint(_,i),f=_.distanceToSquared(i),f<d&&(d=f,a&&a.copy(i),l&&l.copy(_));let A=this[g];o.closestPointToPoint(A,i),f=A.distanceToSquared(i),f<d&&(d=f,a&&a.copy(A),l&&l.copy(i))}for(let m=0;m<3;m++){let f=e[m],g=e[(m+1)%3];n.set(this[f],this[g]);for(let _=0;_<3;_++){let A=e[_],x=e[(_+1)%3];r.set(o[A],o[x]),yd(n,r,i,t);let y=i.distanceToSquared(t);y<d&&(d=y,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(d)}})();var $e=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Zt,this.invMatrix=new Zt,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new Vn),this.alignedSatBounds=new Array(3).fill().map(()=>new Vn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};$e.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,r=this.points;for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)for(let m=0;m<=1;m++){let f=1*u|2*d|4*m,g=r[f];g.x=u?n.x:e.x,g.y=d?n.y:e.y,g.z=m?n.z:e.z,g.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=r[0];for(let u=0;u<3;u++){let d=o[u],m=s[u],f=1<<u,g=r[f];d.subVectors(a,g),m.setFromPoints(d,r)}let l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();$e.prototype.intersectsBox=(function(){let i=new Vn;return function(e){this.needsUpdate&&this.update();let n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let u=o[l],d=s[l];if(i.setFromBox(u,e),d.isSeparated(i))return!1}return!0}})();$e.prototype.intersectsTriangle=(function(){let i=new Ye,t=new Array(3),e=new Vn,n=new Vn,r=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let g=a[f],_=l[f];if(e.setFromPoints(_,t),g.isSeparated(e))return!1}let u=o.satBounds,d=o.satAxes,m=this.points;for(let f=0;f<3;f++){let g=u[f],_=d[f];if(e.setFromPoints(_,m),g.isSeparated(e))return!1}for(let f=0;f<3;f++){let g=l[f];for(let _=0;_<4;_++){let A=d[_];if(r.crossVectors(g,A),e.setFromPoints(r,t),n.setFromPoints(r,m),e.isSeparated(n))return!1}}return!0}})();$e.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();$e.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();$e.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new ge),e=new Array(12).fill().map(()=>new ge),n=new D,r=new D;return function(o,a=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||u)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),u&&u.copy(r)),0;let d=a*a,m=o.min,f=o.max,g=this.points,_=1/0;for(let x=0;x<8;x++){let y=g[x];r.copy(y).clamp(m,f);let w=y.distanceToSquared(r);if(w<_&&(_=w,l&&l.copy(y),u&&u.copy(r),w<d))return Math.sqrt(w)}let A=0;for(let x=0;x<3;x++)for(let y=0;y<=1;y++)for(let w=0;w<=1;w++){let p=(x+1)%3,c=(x+2)%3,b=y<<p|w<<c,h=1<<x|y<<p|w<<c,C=g[b],v=g[h];t[A].set(C,v);let S=i[x],T=i[p],E=i[c],I=e[A],U=I.start,N=I.end;U[S]=m[S],U[T]=y?m[T]:f[T],U[E]=w?m[E]:f[T],N[S]=f[S],N[T]=y?m[T]:f[T],N[E]=w?m[E]:f[T],A++}for(let x=0;x<=1;x++)for(let y=0;y<=1;y++)for(let w=0;w<=1;w++){r.x=x?f.x:m.x,r.y=y?f.y:m.y,r.z=w?f.z:m.z,this.closestPointToPoint(r,n);let p=r.distanceToSquared(n);if(p<_&&(_=p,l&&l.copy(n),u&&u.copy(r),p<d))return Math.sqrt(p)}for(let x=0;x<12;x++){let y=t[x];for(let w=0;w<12;w++){let p=e[w];yd(y,p,n,r);let c=n.distanceToSquared(r);if(c<_&&(_=c,l&&l.copy(n),u&&u.copy(r),c<d))return Math.sqrt(c)}}return Math.sqrt(_)}})();var cd=class extends Vo{constructor(){super(()=>new Ye)}},Ln=new cd,Do=new D,Ju=new D;function vM(i,t,e={},n=0,r=1/0){let s=n*n,o=r*r,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:d=>(Do.copy(t).clamp(d.min,d.max),Do.distanceToSquared(t)),intersectsBounds:(d,m,f)=>f<a&&f<o,intersectsTriangle:(d,m)=>{d.closestPointToPoint(t,Do);let f=t.distanceToSquared(Do);return f<a&&(Ju.copy(Do),a=f,l=m),f<s}}),a===1/0)return null;let u=Math.sqrt(a);return e.point?e.point.copy(Ju):e.point=Ju.clone(),e.distance=u,e.faceIndex=l,e}var pl=parseInt("185")>=169,bM=parseInt("185")<=161,Mr=new D,Sr=new D,wr=new D,ml=new ht,gl=new ht,xl=new ht,Sm=new D,wm=new D,Am=new D,Lo=new D;function MM(i,t,e,n,r,s,o,a){let l;if(s===qe?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==un,r),l===null)return null;let u=i.origin.distanceTo(r);return u<o||u>a?null:{distance:u,point:r.clone()}}function Tm(i,t,e,n,r,s,o,a,l,u,d){Mr.fromBufferAttribute(t,s),Sr.fromBufferAttribute(t,o),wr.fromBufferAttribute(t,a);let m=MM(i,Mr,Sr,wr,Lo,l,u,d);if(m){if(n){ml.fromBufferAttribute(n,s),gl.fromBufferAttribute(n,o),xl.fromBufferAttribute(n,a),m.uv=new ht;let g=he.getInterpolation(Lo,Mr,Sr,wr,ml,gl,xl,m.uv);pl||(m.uv=g)}if(r){ml.fromBufferAttribute(r,s),gl.fromBufferAttribute(r,o),xl.fromBufferAttribute(r,a),m.uv1=new ht;let g=he.getInterpolation(Lo,Mr,Sr,wr,ml,gl,xl,m.uv1);pl||(m.uv1=g),bM&&(m.uv2=m.uv1)}if(e){Sm.fromBufferAttribute(e,s),wm.fromBufferAttribute(e,o),Am.fromBufferAttribute(e,a),m.normal=new D;let g=he.getInterpolation(Lo,Mr,Sr,wr,Sm,wm,Am,m.normal);m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1),pl||(m.normal=g)}let f={a:s,b:o,c:a,normal:new D,materialIndex:0};if(he.getNormal(Mr,Sr,wr,f.normal),m.face=f,m.faceIndex=s,pl){let g=new D;he.getBarycoord(Lo,Mr,Sr,wr,g),m.barycoord=g}}return m}function Em(i){return i&&i.isMaterial?i.side:i}function Pl(i,t,e,n,r,s,o){let a=n*3,l=a+0,u=a+1,d=a+2,{index:m,groups:f}=i;i.index&&(l=m.getX(l),u=m.getX(u),d=m.getX(d));let{position:g,normal:_,uv:A,uv1:x}=i.attributes;if(Array.isArray(t)){let y=n*3;for(let w=0,p=f.length;w<p;w++){let{start:c,count:b,materialIndex:h}=f[w];if(y>=c&&y<c+b){let C=Em(t[h]),v=Tm(e,g,_,A,x,l,u,d,C,s,o);if(v)if(v.faceIndex=n,v.face.materialIndex=h,r)r.push(v);else return v}}}else{let y=Em(t),w=Tm(e,g,_,A,x,l,u,d,y,s,o);if(w)if(w.faceIndex=n,w.face.materialIndex=0,r)r.push(w);else return w}return null}function Le(i,t,e,n){let r=i.a,s=i.b,o=i.c,a=t,l=t+1,u=t+2;e&&(a=e.getX(a),l=e.getX(l),u=e.getX(u)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function SM(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:u}=i;for(let d=n,m=n+r;d<m;d++)Pl(l,t,e,d,s,o,a)}function wM(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,u=1/0,d=null;for(let m=n,f=n+r;m<f;m++){let g;g=Pl(a,t,e,m,null,s,o),g&&g.distance<u&&(d=g,u=g.distance)}return d}function AM(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,u=a.attributes.position;for(let d=i,m=t+i;d<m;d++){let f;if(f=d,Le(o,f*3,l,u),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function TM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,u=0,d=i._roots;for(let f=0,g=d.length;f<g;f++)s=d[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),m(0,u),u+=s.byteLength;function m(f,g,_=!1){let A=f*2;if(Re(A,a)){let x=We(f,o),y=nn(A,a),w=1/0,p=1/0,c=1/0,b=-1/0,h=-1/0,C=-1/0;for(let v=3*x,M=3*(x+y);v<M;v++){let S=n[v],T=r.getX(S),E=r.getY(S),I=r.getZ(S);T<w&&(w=T),T>b&&(b=T),E<p&&(p=E),E>h&&(h=E),I<c&&(c=I),I>C&&(C=I)}return l[f+0]!==w||l[f+1]!==p||l[f+2]!==c||l[f+3]!==b||l[f+4]!==h||l[f+5]!==C?(l[f+0]=w,l[f+1]=p,l[f+2]=c,l[f+3]=b,l[f+4]=h,l[f+5]=C,!0):!1}else{let x=Ve(f),y=ke(f,o),w=_,p=!1,c=!1;if(t){if(!w){let S=x/ze+g/en,T=y/ze+g/en;p=t.has(S),c=t.has(T),w=!p&&!c}}else p=!0,c=!0;let b=w||p,h=w||c,C=!1;b&&(C=m(x,g,w));let v=!1;h&&(v=m(y,g,w));let M=C||v;if(M)for(let S=0;S<3;S++){let T=x+S,E=y+S,I=l[T],U=l[T+3],N=l[E],F=l[E+3];l[f+S]=I<N?I:N,l[f+S+3]=U>F?U:F}return M}}}function ji(i,t,e,n,r){let s,o,a,l,u,d,m=1/e.direction.x,f=1/e.direction.y,g=1/e.direction.z,_=e.origin.x,A=e.origin.y,x=e.origin.z,y=t[i],w=t[i+3],p=t[i+1],c=t[i+3+1],b=t[i+2],h=t[i+3+2];return m>=0?(s=(y-_)*m,o=(w-_)*m):(s=(w-_)*m,o=(y-_)*m),f>=0?(a=(p-A)*f,l=(c-A)*f):(a=(c-A)*f,l=(p-A)*f),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),g>=0?(u=(b-x)*g,d=(h-x)*g):(u=(h-x)*g,d=(b-x)*g),s>d||u>o)?!1:((u>s||s!==s)&&(s=u),(d<o||o!==o)&&(o=d),s<=r&&o>=n)}function EM(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:u}=i;for(let d=n,m=n+r;d<m;d++){let f=u?u[d]:d;Pl(l,t,e,f,s,o,a)}}function CM(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,u=1/0,d=null;for(let m=n,f=n+r;m<f;m++){let g;g=Pl(a,t,e,l?l[m]:m,null,s,o),g&&g.distance<u&&(d=g,u=g.distance)}return d}function RM(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,u=a.attributes.position;for(let d=i,m=t+i;d<m;d++){let f;if(f=e.resolveTriangleIndex(d),Le(o,f*3,l,u),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function IM(i,t,e,n,r,s,o){pe.setBuffer(i._roots[t]),ld(0,i,e,n,r,s,o),pe.clearBuffer()}function ld(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:u}=pe,d=i*2;if(Re(d,l)){let f=We(i,u),g=nn(d,l);SM(t,e,n,f,g,r,s,o)}else{let f=Ve(i);ji(f,a,n,s,o)&&ld(f,t,e,n,r,s,o);let g=ke(i,u);ji(g,a,n,s,o)&&ld(g,t,e,n,r,s,o)}}var PM=["x","y","z"];function DM(i,t,e,n,r,s){pe.setBuffer(i._roots[t]);let o=hd(0,i,e,n,r,s);return pe.clearBuffer(),o}function hd(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=pe,u=i*2;if(Re(u,a)){let m=We(i,l),f=nn(u,a);return wM(t,e,n,m,f,r,s)}else{let m=xd(i,l),f=PM[m],_=n.direction[f]>=0,A,x;_?(A=Ve(i),x=ke(i,l)):(A=ke(i,l),x=Ve(i));let w=ji(A,o,n,r,s)?hd(A,t,e,n,r,s):null;if(w){let b=w.point[f];if(_?b<=o[x+m]:b>=o[x+m+3])return w}let c=ji(x,o,n,r,s)?hd(x,t,e,n,r,s):null;return w&&c?w.distance<=c.distance?w:c:w||c||null}}var _l=new _e,xs=new Ye,_s=new Ye,No=new Zt,Cm=new $e,yl=new $e;function LM(i,t,e,n){pe.setBuffer(i._roots[t]);let r=ud(0,i,e,n);return pe.clearBuffer(),r}function ud(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=pe,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Cm.set(e.boundingBox.min,e.boundingBox.max,n),r=Cm),Re(l,o)){let d=t.geometry,m=d.index,f=d.attributes.position,g=e.index,_=e.attributes.position,A=We(i,a),x=nn(l,o);if(No.copy(n).invert(),e.boundsTree)return we(i,s,yl),yl.matrix.copy(No),yl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>yl.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let p=A*3,c=(x+A)*3;p<c;p+=3)if(Le(_s,p,m,f),_s.needsUpdate=!0,w.intersectsTriangle(_s))return!0;return!1}});{let y=Il(e);for(let w=A*3,p=(x+A)*3;w<p;w+=3){Le(xs,w,m,f),xs.a.applyMatrix4(No),xs.b.applyMatrix4(No),xs.c.applyMatrix4(No),xs.needsUpdate=!0;for(let c=0,b=y*3;c<b;c+=3)if(Le(_s,c,g,_),_s.needsUpdate=!0,xs.intersectsTriangle(_s))return!0}}}else{let d=Ve(i),m=ke(i,a);return we(d,s,_l),!!(r.intersectsBox(_l)&&ud(d,t,e,n,r)||(we(m,s,_l),r.intersectsBox(_l)&&ud(m,t,e,n,r)))}}var vl=new Zt,Ku=new $e,Uo=new $e,NM=new D,UM=new D,BM=new D,FM=new D;function OM(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ku.set(t.boundingBox.min,t.boundingBox.max,e),Ku.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,u=a.index,d=t.attributes.position,m=t.index,f=Ln.getPrimitive(),g=Ln.getPrimitive(),_=NM,A=UM,x=null,y=null;r&&(x=BM,y=FM);let w=1/0,p=null,c=null;return vl.copy(e).invert(),Uo.matrix.copy(vl),i.shapecast({boundsTraverseOrder:b=>Ku.distanceToBox(b),intersectsBounds:(b,h,C)=>C<w&&C<o?(h&&(Uo.min.copy(b.min),Uo.max.copy(b.max),Uo.needsUpdate=!0),!0):!1,intersectsRange:(b,h)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:v=>Uo.distanceToBox(v),intersectsBounds:(v,M,S)=>S<w&&S<o,intersectsRange:(v,M)=>{for(let S=v,T=v+M;S<T;S++){Le(g,3*S,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let E=b,I=b+h;E<I;E++){Le(f,3*E,u,l),f.needsUpdate=!0;let U=f.distanceToTriangle(g,_,x);if(U<w&&(A.copy(_),y&&y.copy(x),w=U,p=E,c=S),U<s)return!0}}}});{let C=Il(t);for(let v=0,M=C;v<M;v++){Le(g,3*v,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let S=b,T=b+h;S<T;S++){Le(f,3*S,u,l),f.needsUpdate=!0;let E=f.distanceToTriangle(g,_,x);if(E<w&&(A.copy(_),y&&y.copy(x),w=E,p=S,c=v),E<s)return!0}}}}}),Ln.releasePrimitive(f),Ln.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(A):n.point=A.clone(),n.distance=w,n.faceIndex=p,r&&(r.point?r.point.copy(y):r.point=y.clone(),r.point.applyMatrix4(vl),A.applyMatrix4(vl),r.distance=A.sub(r.point).length(),r.faceIndex=c),n)}function zM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,u=0,d=i._roots;for(let f=0,g=d.length;f<g;f++)s=d[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),m(0,u),u+=s.byteLength;function m(f,g,_=!1){let A=f*2;if(Re(A,a)){let x=We(f,o),y=nn(A,a),w=1/0,p=1/0,c=1/0,b=-1/0,h=-1/0,C=-1/0;for(let v=x,M=x+y;v<M;v++){let S=3*i.resolveTriangleIndex(v);for(let T=0;T<3;T++){let E=S+T;E=n?n[E]:E;let I=r.getX(E),U=r.getY(E),N=r.getZ(E);I<w&&(w=I),I>b&&(b=I),U<p&&(p=U),U>h&&(h=U),N<c&&(c=N),N>C&&(C=N)}}return l[f+0]!==w||l[f+1]!==p||l[f+2]!==c||l[f+3]!==b||l[f+4]!==h||l[f+5]!==C?(l[f+0]=w,l[f+1]=p,l[f+2]=c,l[f+3]=b,l[f+4]=h,l[f+5]=C,!0):!1}else{let x=Ve(f),y=ke(f,o),w=_,p=!1,c=!1;if(t){if(!w){let S=x/ze+g/en,T=y/ze+g/en;p=t.has(S),c=t.has(T),w=!p&&!c}}else p=!0,c=!0;let b=w||p,h=w||c,C=!1;b&&(C=m(x,g,w));let v=!1;h&&(v=m(y,g,w));let M=C||v;if(M)for(let S=0;S<3;S++){let T=x+S,E=y+S,I=l[T],U=l[T+3],N=l[E],F=l[E+3];l[f+S]=I<N?I:N,l[f+S+3]=U>F?U:F}return M}}}function VM(i,t,e,n,r,s,o){pe.setBuffer(i._roots[t]),dd(0,i,e,n,r,s,o),pe.clearBuffer()}function dd(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:u}=pe,d=i*2;if(Re(d,l)){let f=We(i,u),g=nn(d,l);EM(t,e,n,f,g,r,s,o)}else{let f=Ve(i);ji(f,a,n,s,o)&&dd(f,t,e,n,r,s,o);let g=ke(i,u);ji(g,a,n,s,o)&&dd(g,t,e,n,r,s,o)}}var kM=["x","y","z"];function GM(i,t,e,n,r,s){pe.setBuffer(i._roots[t]);let o=fd(0,i,e,n,r,s);return pe.clearBuffer(),o}function fd(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=pe,u=i*2;if(Re(u,a)){let m=We(i,l),f=nn(u,a);return CM(t,e,n,m,f,r,s)}else{let m=xd(i,l),f=kM[m],_=n.direction[f]>=0,A,x;_?(A=Ve(i),x=ke(i,l)):(A=ke(i,l),x=Ve(i));let w=ji(A,o,n,r,s)?fd(A,t,e,n,r,s):null;if(w){let b=w.point[f];if(_?b<=o[x+m]:b>=o[x+m+3])return w}let c=ji(x,o,n,r,s)?fd(x,t,e,n,r,s):null;return w&&c?w.distance<=c.distance?w:c:w||c||null}}var bl=new _e,ys=new Ye,vs=new Ye,Bo=new Zt,Rm=new $e,Ml=new $e;function HM(i,t,e,n){pe.setBuffer(i._roots[t]);let r=pd(0,i,e,n);return pe.clearBuffer(),r}function pd(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=pe,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Rm.set(e.boundingBox.min,e.boundingBox.max,n),r=Rm),Re(l,o)){let d=t.geometry,m=d.index,f=d.attributes.position,g=e.index,_=e.attributes.position,A=We(i,a),x=nn(l,o);if(Bo.copy(n).invert(),e.boundsTree)return we(i,s,Ml),Ml.matrix.copy(Bo),Ml.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>Ml.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let p=A,c=x+A;p<c;p++)if(Le(vs,3*t.resolveTriangleIndex(p),m,f),vs.needsUpdate=!0,w.intersectsTriangle(vs))return!0;return!1}});{let y=Il(e);for(let w=A,p=x+A;w<p;w++){let c=t.resolveTriangleIndex(w);Le(ys,3*c,m,f),ys.a.applyMatrix4(Bo),ys.b.applyMatrix4(Bo),ys.c.applyMatrix4(Bo),ys.needsUpdate=!0;for(let b=0,h=y*3;b<h;b+=3)if(Le(vs,b,g,_),vs.needsUpdate=!0,ys.intersectsTriangle(vs))return!0}}}else{let d=Ve(i),m=ke(i,a);return we(d,s,bl),!!(r.intersectsBox(bl)&&pd(d,t,e,n,r)||(we(m,s,bl),r.intersectsBox(bl)&&pd(m,t,e,n,r)))}}var Sl=new Zt,ju=new $e,Fo=new $e,WM=new D,XM=new D,qM=new D,YM=new D;function $M(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ju.set(t.boundingBox.min,t.boundingBox.max,e),ju.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,u=a.index,d=t.attributes.position,m=t.index,f=Ln.getPrimitive(),g=Ln.getPrimitive(),_=WM,A=XM,x=null,y=null;r&&(x=qM,y=YM);let w=1/0,p=null,c=null;return Sl.copy(e).invert(),Fo.matrix.copy(Sl),i.shapecast({boundsTraverseOrder:b=>ju.distanceToBox(b),intersectsBounds:(b,h,C)=>C<w&&C<o?(h&&(Fo.min.copy(b.min),Fo.max.copy(b.max),Fo.needsUpdate=!0),!0):!1,intersectsRange:(b,h)=>{if(t.boundsTree){let C=t.boundsTree;return C.shapecast({boundsTraverseOrder:v=>Fo.distanceToBox(v),intersectsBounds:(v,M,S)=>S<w&&S<o,intersectsRange:(v,M)=>{for(let S=v,T=v+M;S<T;S++){let E=C.resolveTriangleIndex(S);Le(g,3*E,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let I=b,U=b+h;I<U;I++){let N=i.resolveTriangleIndex(I);Le(f,3*N,u,l),f.needsUpdate=!0;let F=f.distanceToTriangle(g,_,x);if(F<w&&(A.copy(_),y&&y.copy(x),w=F,p=I,c=S),F<s)return!0}}}})}else{let C=Il(t);for(let v=0,M=C;v<M;v++){Le(g,3*v,m,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let S=b,T=b+h;S<T;S++){let E=i.resolveTriangleIndex(S);Le(f,3*E,u,l),f.needsUpdate=!0;let I=f.distanceToTriangle(g,_,x);if(I<w&&(A.copy(_),y&&y.copy(x),w=I,p=S,c=v),I<s)return!0}}}}}),Ln.releasePrimitive(f),Ln.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(A):n.point=A.clone(),n.distance=w,n.faceIndex=p,r&&(r.point?r.point.copy(y):r.point=y.clone(),r.point.applyMatrix4(Sl),A.applyMatrix4(Sl),r.distance=A.sub(r.point).length(),r.faceIndex=c),n)}function Im(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var wl=new $e,Al=new bn,Pm=new D,Dm=new Zt,Lm=new D,Qu=["getX","getY","getZ"],Rl=class i extends ad{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));let a=new i(e,{...n,[gd]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let u=e.getIndex();if(u===null){let d=new Ce(t.index,1,!1);e.setIndex(d)}else u.array!==r&&(u.array.set(r),u.needsUpdate=!0)}return a;function l(u){for(let d=0;d<u.length;d++){let m=u[d],f=new Uint32Array(m),g=new Uint16Array(m);for(let _=0,A=m.byteLength/en;_<A;_++){let x=ze*_,y=2*x;Re(y,g)||(f[x+6]=f[x+6]/ze-_)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=(s?s[t]:t)*3,d=u+0,m=u+1,f=u+2;a&&(d=a[d],m=a[m],f=a[f]);for(let g=0;g<3;g++){let _=o[Qu[g]](d),A=o[Qu[g]](m),x=o[Qu[g]](f),y=_;A<y&&(y=A),x<y&&(y=x);let w=_;A>w&&(w=A),x>w&&(w=x),e[n+g]=y,e[n+g+3]=w}return e}computePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let u=o.array,d=o.offset||0,m=3;o.isInterleavedBufferAttribute&&(m=o.data.stride);let f=["getX","getY","getZ"],g=n.offset;for(let _=t,A=t+e;_<A;_++){let y=(s?s[_]:_)*3,w=(_-g)*6,p=y+0,c=y+1,b=y+2;a&&(p=a[p],c=a[c],b=a[b]),l||(p=p*m+d,c=c*m+d,b=b*m+d);for(let h=0;h<3;h++){let C,v,M;l?(C=o[f[h]](p),v=o[f[h]](c),M=o[f[h]](b)):(C=u[p+h],v=u[c+h],M=u[b+h]);let S=C;v<S&&(S=v),M<S&&(S=M);let T=C;v>T&&(T=v),M>T&&(T=M);let E=(T-S)/2,I=h*2;n[w+I+0]=S+E,n[w+I+1]=E+(Math.abs(S)+E)*Tl}}return n}raycastObject3D(t,e,n=[]){let{material:r}=t;if(r===void 0)return;Dm.copy(t.matrixWorld).invert(),Al.copy(e.ray).applyMatrix4(Dm),Lm.setFromMatrixScale(t.matrixWorld),Pm.copy(Al.direction).multiply(Lm);let s=Pm.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(Al,r,o,a);l=Im(l,t,e),l&&n.push(l)}else{let l=this.raycast(Al,r,o,a);for(let u=0,d=l.length;u<d;u++){let m=Im(l[u],t,e);m&&n.push(m)}}return n}refit(t=null){return(this.indirect?zM:TM)(this,t)}raycast(t,e=Pn,n=0,r=1/0){let s=this._roots,o=[],a=this.indirect?VM:IM;for(let l=0,u=s.length;l<u;l++)a(this,l,e,t,o,n,r);return o}raycastFirst(t,e=Pn,n=0,r=1/0){let s=this._roots,o=null,a=this.indirect?GM:DM;for(let l=0,u=s.length;l<u;l++){let d=a(this,l,e,t,n,r);d!=null&&(o==null||d.distance<o.distance)&&(o=d)}return o}intersectsGeometry(t,e){let n=!1,r=this._roots,s=this.indirect?HM:LM;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=Ln.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?RM:AM});return Ln.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n,o=Ln.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?_=>{let A=this.resolveTriangleIndex(_);Le(o,A*3,a,l)}:_=>{Le(o,_*3,a,l)},d=Ln.getPrimitive(),m=t.geometry.index,f=t.geometry.attributes.position,g=t.indirect?_=>{let A=t.resolveTriangleIndex(_);Le(d,A*3,m,f)}:_=>{Le(d,_*3,m,f)};if(s){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let _=(A,x,y,w,p,c,b,h)=>{for(let C=y,v=y+w;C<v;C++){g(C),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=A,S=A+x;M<S;M++)if(u(M),o.needsUpdate=!0,s(o,d,M,C,p,c,b,h))return!0}return!1};if(r){let A=r;r=function(x,y,w,p,c,b,h,C){return A(x,y,w,p,c,b,h,C)?!0:_(x,y,w,p,c,b,h,C)}}else r=_}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return wl.set(t.min,t.max,e),wl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>wl.intersectsBox(n),intersectsTriangle:n=>wl.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?$M:OM)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return vM(this,t,e,n,r)}};var vT=parseInt("185")>=169,bT=parseInt("185")<=161;var MT=parseInt("185")>=166,ST={Mesh:me.prototype.raycast,Line:mr.prototype.raycast,LineSegments:es.prototype.raycast,LineLoop:Zs.prototype.raycast,Points:Js.prototype.raycast,BatchedMesh:$s.prototype.raycast};var ZM=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var JM=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`;var wT=`
	${ZM}
	${JM}
`;var dg=1e-6,KM=dg*.5,fg=Math.pow(10,-Math.log10(dg)),jM=KM*fg;function si(i){return~~(i*fg+jM)}function QM(i){return`${si(i.x)},${si(i.y)}`}function Om(i){return`${si(i.x)},${si(i.y)},${si(i.z)}`}function tS(i){return`${si(i.x)},${si(i.y)},${si(i.z)},${si(i.w)}`}function eS(i,t,e){e.direction.subVectors(t,i).normalize();let n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function pg(){return typeof SharedArrayBuffer!="undefined"}function nS(i){if(i.buffer instanceof SharedArrayBuffer)return i;let t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function iS(i){return i.index?i.index.count:i.attributes.position.count}function zd(i){return iS(i)/3}var rS=1e-8,sS=new D;function oS(i){return~~(i/3)}function aS(i){return i%3}function zm(i,t){return i.start-t.start}function Vm(i,t){return sS.subVectors(t,i.origin).dot(i.direction)}function cS(i,t,e,n=rS){i.sort(zm),t.sort(zm);for(let a=0;a<i.length;a++){let l=i[a];for(let u=0;u<t.length;u++){let d=t[u];if(!(d.start>l.end)){if(l.end<d.start||d.end<l.start)continue;if(l.start<=d.start&&l.end>=d.end)s(d.end,l.end)||i.splice(a+1,0,{start:d.end,end:l.end,index:l.index}),l.end=d.start,d.start=0,d.end=0;else if(l.start>=d.start&&l.end<=d.end)s(l.end,d.end)||t.splice(u+1,0,{start:l.end,end:d.end,index:d.index}),d.end=l.start,l.start=0,l.end=0;else if(l.start<=d.start&&l.end<=d.end){let m=l.end;l.end=d.start,d.start=m}else if(l.start>=d.start&&l.end>=d.end){let m=d.end;d.end=l.start,l.start=m}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(d.index)||e.set(d.index,[]),e.get(l.index).push(d.index),e.get(d.index).push(l.index),o(d)&&(t.splice(u,1),u--),o(l)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}var km=1e-5,Gm=1e-4,Ld=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(o(d,t)&&o(d,n))continue;let m=a(d,t),f=a(d,n),g=Math.min(m,f);g<r&&(r=g,s=d)}return s;function o(l,u){let d=l.origin.distanceTo(u.origin)>km;return l.direction.angleTo(u.direction)>Gm||d}function a(l,u){let d=l.origin.distanceTo(u.origin),m=l.direction.angleTo(u.direction);return d/km+m/Gm}}},vd=new D,bd=new D,Dl=new bn;function lS(i,t,e){let n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,l=Array.from(t),u=new Ld;for(let d=0,m=l.length;d<m;d++){let f=l[d],g=oS(f),_=aS(f),A=3*g+_,x=3*g+(_+1)%3;r&&(A=r.getX(A),x=r.getX(x)),vd.fromBufferAttribute(s,A),bd.fromBufferAttribute(s,x),eS(vd,bd,Dl);let y,w=u.findClosestRay(Dl);w===null&&(w=Dl.clone(),u.addRay(w)),a.has(w)||a.set(w,{forward:[],reverse:[],ray:w}),y=a.get(w);let p=Vm(w,vd),c=Vm(w,bd);p>c&&([p,c]=[c,p]),Dl.direction.dot(w.direction)<0?y.reverse.push({start:p,end:c,index:f}):y.forward.push({start:p,end:c,index:f})}return a.forEach(({forward:d,reverse:m},f)=>{cS(d,m,o,e),d.length===0&&m.length===0&&a.delete(f)}),{disjointConnectivityMap:o,fragmentMap:a}}var hS=new ht,Md=new D,uS=new se,Sd=["","",""],Nd=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?p:w,a=new Map,{attributes:l}=t,u=e?Object.keys(l):null,d=t.index,m=l.position,f=zd(t),g=f,_=0;n&&(_=t.drawRange.start,t.drawRange.count!==1/0&&(f=~~(t.drawRange.count/3)));let A=this.data;(!A||A.length<3*g)&&(A=new Int32Array(3*g)),A.fill(-1);let x=0,y=new Set;for(let c=_,b=f*3+_;c<b;c+=3){let h=c;for(let C=0;C<3;C++){let v=h+C;d&&(v=d.getX(v)),Sd[C]=o(v)}for(let C=0;C<3;C++){let v=(C+1)%3,M=Sd[C],S=Sd[v],T=`${S}_${M}`;if(a.has(T)){let E=h+C,I=a.get(T);A[E]=I,A[I]=E,a.delete(T),x+=2,y.delete(I)}else{let E=`${M}_${S}`,I=h+C;a.set(E,I),y.add(I)}}}if(r){let{fragmentMap:c,disjointConnectivityMap:b}=lS(t,y,s);y.clear(),c.forEach(({forward:h,reverse:C})=>{h.forEach(({index:v})=>y.add(v)),C.forEach(({index:v})=>y.add(v))}),this.unmatchedDisjointEdges=c,this.disjointConnections=b,x=f*3-y.size}this.matchedEdges=x,this.unmatchedEdges=y.size,this.data=A;function w(c){return Md.fromBufferAttribute(m,c),Om(Md)}function p(c){let b="";for(let h=0,C=u.length;h<C;h++){let v=l[u[h]],M;switch(v.itemSize){case 1:M=si(v.getX(c));break;case 2:M=QM(hS.fromBufferAttribute(v,c));break;case 3:M=Om(Md.fromBufferAttribute(v,c));break;case 4:M=tS(uS.fromBufferAttribute(v,c));break}b!==""&&(b+="|"),b+=M}return b}}},wi=class extends me{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Zt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=pg(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,l=`${t.uuid}_${o}_${a}`;if(this._hash===l)return;if(this._hash=l,n)for(let f in e){let g=e[f];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=nS(g.array)}t.boundsTree=new Rl(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Nd),t.halfEdges.updateFrom(t);let u=zd(t);(!t.groupIndices||t.groupIndices.length!==u)&&(t.groupIndices=new Uint16Array(u));let d=t.groupIndices,m=t.groups;for(let f=0,g=m.length;f<g;f++){let{start:_,count:A}=m[f];for(let x=_/3,y=(_+A)/3;x<y;x++)d[x]=f}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}},dS=Object.getOwnPropertyNames,En=(i,t)=>function(){return t||(0,i[dS(i)[0]])((t={exports:{}}).exports,t),t.exports},$l=En({"node_modules/binary-search-bounds/search-bounds.js"(i,t){"use strict";function e(l,u,d,m,f){for(var g=f+1;m<=f;){var _=m+f>>>1,A=l[_],x=d!==void 0?d(A,u):A-u;x>=0?(g=_,f=_-1):m=_+1}return g}function n(l,u,d,m,f){for(var g=f+1;m<=f;){var _=m+f>>>1,A=l[_],x=d!==void 0?d(A,u):A-u;x>0?(g=_,f=_-1):m=_+1}return g}function r(l,u,d,m,f){for(var g=m-1;m<=f;){var _=m+f>>>1,A=l[_],x=d!==void 0?d(A,u):A-u;x<0?(g=_,m=_+1):f=_-1}return g}function s(l,u,d,m,f){for(var g=m-1;m<=f;){var _=m+f>>>1,A=l[_],x=d!==void 0?d(A,u):A-u;x<=0?(g=_,m=_+1):f=_-1}return g}function o(l,u,d,m,f){for(;m<=f;){var g=m+f>>>1,_=l[g],A=d!==void 0?d(_,u):_-u;if(A===0)return g;A<=0?m=g+1:f=g-1}return-1}function a(l,u,d,m,f,g){return typeof d=="function"?g(l,u,d,m===void 0?0:m|0,f===void 0?l.length-1:f|0):g(l,u,void 0,d===void 0?0:d|0,m===void 0?l.length-1:m|0)}t.exports={ge:function(l,u,d,m,f){return a(l,u,d,m,f,e)},gt:function(l,u,d,m,f){return a(l,u,d,m,f,n)},lt:function(l,u,d,m,f){return a(l,u,d,m,f,r)},le:function(l,u,d,m,f){return a(l,u,d,m,f,s)},eq:function(l,u,d,m,f){return a(l,u,d,m,f,o)}}}}),Vd=En({"node_modules/two-product/two-product.js"(i,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,l=e*r,u=l-r,d=l-u,m=r-d,f=e*s,g=f-s,_=f-g,A=s-_,x=a-d*_,y=x-m*_,w=y-d*A,p=m*A-w;return o?(o[0]=p,o[1]=a,o):[p,a]}}}),mg=En({"node_modules/robust-sum/robust-sum.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,u=s-a,d=r-l,m=d+u;return m?[m,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var l=o+a,u=new Array(l),d=0,m=0,f=0,g=Math.abs,_=r[m],A=g(_),x=s[f],y=g(x),w,p;A<y?(p=_,m+=1,m<o&&(_=r[m],A=g(_))):(p=x,f+=1,f<a&&(x=s[f],y=g(x))),m<o&&A<y||f>=a?(w=_,m+=1,m<o&&(_=r[m],A=g(_))):(w=x,f+=1,f<a&&(x=s[f],y=g(x)));for(var c=w+p,b=c-w,h=p-b,C=h,v=c,M,S,T,E,I;m<o&&f<a;)A<y?(w=_,m+=1,m<o&&(_=r[m],A=g(_))):(w=x,f+=1,f<a&&(x=s[f],y=g(x))),p=C,c=w+p,b=c-w,h=p-b,h&&(u[d++]=h),M=v+c,S=M-v,T=M-S,E=c-S,I=v-T,C=I+E,v=M;for(;m<o;)w=_,p=C,c=w+p,b=c-w,h=p-b,h&&(u[d++]=h),M=v+c,S=M-v,T=M-S,E=c-S,I=v-T,C=I+E,v=M,m+=1,m<o&&(_=r[m]);for(;f<a;)w=x,p=C,c=w+p,b=c-w,h=p-b,h&&(u[d++]=h),M=v+c,S=M-v,T=M-S,E=c-S,I=v-T,C=I+E,v=M,f+=1,f<a&&(x=s[f]);return C&&(u[d++]=C),v&&(u[d++]=v),d||(u[d++]=0),u.length=d,u}}}),fS=En({"node_modules/two-sum/two-sum.js"(i,t){"use strict";t.exports=e;function e(n,r,s){var o=n+r,a=o-n,l=o-a,u=r-a,d=n-l;return s?(s[0]=d+u,s[1]=o,s):[d+u,o]}}}),gg=En({"node_modules/robust-scale/robust-scale.js"(i,t){"use strict";var e=Vd(),n=fS();t.exports=r;function r(s,o){var a=s.length;if(a===1){var l=e(s[0],o);return l[0]?l:[l[1]]}var u=new Array(2*a),d=[.1,.1],m=[.1,.1],f=0;e(s[0],o,d),d[0]&&(u[f++]=d[0]);for(var g=1;g<a;++g){e(s[g],o,m);var _=d[1];n(_,m[0],d),d[0]&&(u[f++]=d[0]);var A=m[1],x=d[1],y=A+x,w=y-A,p=x-w;d[1]=y,p&&(u[f++]=p)}return d[1]&&(u[f++]=d[1]),f===0&&(u[f++]=0),u.length=f,u}}}),xg=En({"node_modules/robust-subtract/robust-diff.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,u=s-a,d=r-l,m=d+u;return m?[m,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var l=o+a,u=new Array(l),d=0,m=0,f=0,g=Math.abs,_=r[m],A=g(_),x=-s[f],y=g(x),w,p;A<y?(p=_,m+=1,m<o&&(_=r[m],A=g(_))):(p=x,f+=1,f<a&&(x=-s[f],y=g(x))),m<o&&A<y||f>=a?(w=_,m+=1,m<o&&(_=r[m],A=g(_))):(w=x,f+=1,f<a&&(x=-s[f],y=g(x)));for(var c=w+p,b=c-w,h=p-b,C=h,v=c,M,S,T,E,I;m<o&&f<a;)A<y?(w=_,m+=1,m<o&&(_=r[m],A=g(_))):(w=x,f+=1,f<a&&(x=-s[f],y=g(x))),p=C,c=w+p,b=c-w,h=p-b,h&&(u[d++]=h),M=v+c,S=M-v,T=M-S,E=c-S,I=v-T,C=I+E,v=M;for(;m<o;)w=_,p=C,c=w+p,b=c-w,h=p-b,h&&(u[d++]=h),M=v+c,S=M-v,T=M-S,E=c-S,I=v-T,C=I+E,v=M,m+=1,m<o&&(_=r[m]);for(;f<a;)w=x,p=C,c=w+p,b=c-w,h=p-b,h&&(u[d++]=h),M=v+c,S=M-v,T=M-S,E=c-S,I=v-T,C=I+E,v=M,f+=1,f<a&&(x=-s[f]);return C&&(u[d++]=C),v&&(u[d++]=v),d||(u[d++]=0),u.length=d,u}}}),pS=En({"node_modules/robust-orientation/orientation.js"(i,t){"use strict";var e=Vd(),n=mg(),r=gg(),s=xg(),o=5,a=11102230246251565e-32,l=(3+16*a)*a,u=(7+56*a)*a;function d(c,b,h,C){return function(M,S,T){var E=c(c(b(S[1],T[0]),b(-T[1],S[0])),c(b(M[1],S[0]),b(-S[1],M[0]))),I=c(b(M[1],T[0]),b(-T[1],M[0])),U=C(E,I);return U[U.length-1]}}function m(c,b,h,C){return function(M,S,T,E){var I=c(c(h(c(b(T[1],E[0]),b(-E[1],T[0])),S[2]),c(h(c(b(S[1],E[0]),b(-E[1],S[0])),-T[2]),h(c(b(S[1],T[0]),b(-T[1],S[0])),E[2]))),c(h(c(b(S[1],E[0]),b(-E[1],S[0])),M[2]),c(h(c(b(M[1],E[0]),b(-E[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),E[2])))),U=c(c(h(c(b(T[1],E[0]),b(-E[1],T[0])),M[2]),c(h(c(b(M[1],E[0]),b(-E[1],M[0])),-T[2]),h(c(b(M[1],T[0]),b(-T[1],M[0])),E[2]))),c(h(c(b(S[1],T[0]),b(-T[1],S[0])),M[2]),c(h(c(b(M[1],T[0]),b(-T[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),T[2])))),N=C(I,U);return N[N.length-1]}}function f(c,b,h,C){return function(M,S,T,E,I){var U=c(c(c(h(c(h(c(b(E[1],I[0]),b(-I[1],E[0])),T[2]),c(h(c(b(T[1],I[0]),b(-I[1],T[0])),-E[2]),h(c(b(T[1],E[0]),b(-E[1],T[0])),I[2]))),S[3]),c(h(c(h(c(b(E[1],I[0]),b(-I[1],E[0])),S[2]),c(h(c(b(S[1],I[0]),b(-I[1],S[0])),-E[2]),h(c(b(S[1],E[0]),b(-E[1],S[0])),I[2]))),-T[3]),h(c(h(c(b(T[1],I[0]),b(-I[1],T[0])),S[2]),c(h(c(b(S[1],I[0]),b(-I[1],S[0])),-T[2]),h(c(b(S[1],T[0]),b(-T[1],S[0])),I[2]))),E[3]))),c(h(c(h(c(b(T[1],E[0]),b(-E[1],T[0])),S[2]),c(h(c(b(S[1],E[0]),b(-E[1],S[0])),-T[2]),h(c(b(S[1],T[0]),b(-T[1],S[0])),E[2]))),-I[3]),c(h(c(h(c(b(E[1],I[0]),b(-I[1],E[0])),S[2]),c(h(c(b(S[1],I[0]),b(-I[1],S[0])),-E[2]),h(c(b(S[1],E[0]),b(-E[1],S[0])),I[2]))),M[3]),h(c(h(c(b(E[1],I[0]),b(-I[1],E[0])),M[2]),c(h(c(b(M[1],I[0]),b(-I[1],M[0])),-E[2]),h(c(b(M[1],E[0]),b(-E[1],M[0])),I[2]))),-S[3])))),c(c(h(c(h(c(b(S[1],I[0]),b(-I[1],S[0])),M[2]),c(h(c(b(M[1],I[0]),b(-I[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),I[2]))),E[3]),c(h(c(h(c(b(S[1],E[0]),b(-E[1],S[0])),M[2]),c(h(c(b(M[1],E[0]),b(-E[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),E[2]))),-I[3]),h(c(h(c(b(T[1],E[0]),b(-E[1],T[0])),S[2]),c(h(c(b(S[1],E[0]),b(-E[1],S[0])),-T[2]),h(c(b(S[1],T[0]),b(-T[1],S[0])),E[2]))),M[3]))),c(h(c(h(c(b(T[1],E[0]),b(-E[1],T[0])),M[2]),c(h(c(b(M[1],E[0]),b(-E[1],M[0])),-T[2]),h(c(b(M[1],T[0]),b(-T[1],M[0])),E[2]))),-S[3]),c(h(c(h(c(b(S[1],E[0]),b(-E[1],S[0])),M[2]),c(h(c(b(M[1],E[0]),b(-E[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),E[2]))),T[3]),h(c(h(c(b(S[1],T[0]),b(-T[1],S[0])),M[2]),c(h(c(b(M[1],T[0]),b(-T[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),T[2]))),-E[3]))))),N=c(c(c(h(c(h(c(b(E[1],I[0]),b(-I[1],E[0])),T[2]),c(h(c(b(T[1],I[0]),b(-I[1],T[0])),-E[2]),h(c(b(T[1],E[0]),b(-E[1],T[0])),I[2]))),M[3]),h(c(h(c(b(E[1],I[0]),b(-I[1],E[0])),M[2]),c(h(c(b(M[1],I[0]),b(-I[1],M[0])),-E[2]),h(c(b(M[1],E[0]),b(-E[1],M[0])),I[2]))),-T[3])),c(h(c(h(c(b(T[1],I[0]),b(-I[1],T[0])),M[2]),c(h(c(b(M[1],I[0]),b(-I[1],M[0])),-T[2]),h(c(b(M[1],T[0]),b(-T[1],M[0])),I[2]))),E[3]),h(c(h(c(b(T[1],E[0]),b(-E[1],T[0])),M[2]),c(h(c(b(M[1],E[0]),b(-E[1],M[0])),-T[2]),h(c(b(M[1],T[0]),b(-T[1],M[0])),E[2]))),-I[3]))),c(c(h(c(h(c(b(T[1],I[0]),b(-I[1],T[0])),S[2]),c(h(c(b(S[1],I[0]),b(-I[1],S[0])),-T[2]),h(c(b(S[1],T[0]),b(-T[1],S[0])),I[2]))),M[3]),h(c(h(c(b(T[1],I[0]),b(-I[1],T[0])),M[2]),c(h(c(b(M[1],I[0]),b(-I[1],M[0])),-T[2]),h(c(b(M[1],T[0]),b(-T[1],M[0])),I[2]))),-S[3])),c(h(c(h(c(b(S[1],I[0]),b(-I[1],S[0])),M[2]),c(h(c(b(M[1],I[0]),b(-I[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),I[2]))),T[3]),h(c(h(c(b(S[1],T[0]),b(-T[1],S[0])),M[2]),c(h(c(b(M[1],T[0]),b(-T[1],M[0])),-S[2]),h(c(b(M[1],S[0]),b(-S[1],M[0])),T[2]))),-I[3])))),F=C(U,N);return F[F.length-1]}}function g(c){var b=c===3?d:c===4?m:f;return b(n,e,r,s)}var _=g(3),A=g(4),x=[function(){return 0},function(){return 0},function(b,h){return h[0]-b[0]},function(b,h,C){var v=(b[1]-C[1])*(h[0]-C[0]),M=(b[0]-C[0])*(h[1]-C[1]),S=v-M,T;if(v>0){if(M<=0)return S;T=v+M}else if(v<0){if(M>=0)return S;T=-(v+M)}else return S;var E=l*T;return S>=E||S<=-E?S:_(b,h,C)},function(b,h,C,v){var M=b[0]-v[0],S=h[0]-v[0],T=C[0]-v[0],E=b[1]-v[1],I=h[1]-v[1],U=C[1]-v[1],N=b[2]-v[2],F=h[2]-v[2],O=C[2]-v[2],G=S*U,W=T*I,ot=T*E,K=M*U,rt=M*I,xt=S*E,Ct=N*(G-W)+F*(ot-K)+O*(rt-xt),_t=(Math.abs(G)+Math.abs(W))*Math.abs(N)+(Math.abs(ot)+Math.abs(K))*Math.abs(F)+(Math.abs(rt)+Math.abs(xt))*Math.abs(O),$=u*_t;return Ct>$||-Ct>$?Ct:A(b,h,C,v)}];function y(c){var b=x[c.length];return b||(b=x[c.length]=g(c.length)),b.apply(void 0,c)}function w(c,b,h,C,v,M,S){return function(E,I,U,N,F){switch(arguments.length){case 0:case 1:return 0;case 2:return C(E,I);case 3:return v(E,I,U);case 4:return M(E,I,U,N);case 5:return S(E,I,U,N,F)}for(var O=new Array(arguments.length),G=0;G<arguments.length;++G)O[G]=arguments[G];return c(O)}}function p(){for(;x.length<=o;)x.push(g(x.length));t.exports=w.apply(void 0,[y].concat(x));for(var c=0;c<=o;++c)t.exports[c]=x[c]}p()}}),mS=En({"node_modules/cdt2d/lib/monotone.js"(i,t){"use strict";var e=$l(),n=pS()[3],r=0,s=1,o=2;t.exports=A;function a(x,y,w,p,c){this.a=x,this.b=y,this.idx=w,this.lowerIds=p,this.upperIds=c}function l(x,y,w,p){this.a=x,this.b=y,this.type=w,this.idx=p}function u(x,y){var w=x.a[0]-y.a[0]||x.a[1]-y.a[1]||x.type-y.type;return w||x.type!==r&&(w=n(x.a,x.b,y.b),w)?w:x.idx-y.idx}function d(x,y){return n(x.a,x.b,y)}function m(x,y,w,p,c){for(var b=e.lt(y,p,d),h=e.gt(y,p,d),C=b;C<h;++C){for(var v=y[C],M=v.lowerIds,T=M.length;T>1&&n(w[M[T-2]],w[M[T-1]],p)>0;)x.push([M[T-1],M[T-2],c]),T-=1;M.length=T,M.push(c);for(var S=v.upperIds,T=S.length;T>1&&n(w[S[T-2]],w[S[T-1]],p)<0;)x.push([S[T-2],S[T-1],c]),T-=1;S.length=T,S.push(c)}}function f(x,y){var w;return x.a[0]<y.a[0]?w=n(x.a,x.b,y.a):w=n(y.b,y.a,x.a),w||(y.b[0]<x.b[0]?w=n(x.a,x.b,y.b):w=n(y.b,y.a,x.b),w||x.idx-y.idx)}function g(x,y,w){var p=e.le(x,w,f),c=x[p],b=c.upperIds,h=b[b.length-1];c.upperIds=[h],x.splice(p+1,0,new a(w.a,w.b,w.idx,[h],b))}function _(x,y,w){var p=w.a;w.a=w.b,w.b=p;var c=e.eq(x,w,f),b=x[c],h=x[c-1];h.upperIds=b.upperIds,x.splice(c,1)}function A(x,y){for(var w=x.length,p=y.length,c=[],b=0;b<w;++b)c.push(new l(x[b],null,r,b));for(var b=0;b<p;++b){var h=y[b],C=x[h[0]],v=x[h[1]];C[0]<v[0]?c.push(new l(C,v,o,b),new l(v,C,s,b)):C[0]>v[0]&&c.push(new l(v,C,o,b),new l(C,v,s,b))}c.sort(u);for(var M=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),S=[new a([M,1],[M,0],-1,[],[],[],[])],T=[],b=0,E=c.length;b<E;++b){var I=c[b],U=I.type;U===r?m(T,S,x,I.a,I.idx):U===o?g(S,x,I):_(S,x,I)}return T}}}),gS=En({"node_modules/cdt2d/lib/triangulation.js"(i,t){"use strict";var e=$l();t.exports=o;function n(a,l){this.stars=a,this.edges=l}var r=n.prototype;function s(a,l,u){for(var d=1,m=a.length;d<m;d+=2)if(a[d-1]===l&&a[d]===u){a[d-1]=a[m-2],a[d]=a[m-1],a.length=m-2;return}}r.isConstraint=(function(){var a=[0,0];function l(u,d){return u[0]-d[0]||u[1]-d[1]}return function(u,d){return a[0]=Math.min(u,d),a[1]=Math.max(u,d),e.eq(this.edges,a,l)>=0}})(),r.removeTriangle=function(a,l,u){var d=this.stars;s(d[a],l,u),s(d[l],u,a),s(d[u],a,l)},r.addTriangle=function(a,l,u){var d=this.stars;d[a].push(l,u),d[l].push(u,a),d[u].push(a,l)},r.opposite=function(a,l){for(var u=this.stars[l],d=1,m=u.length;d<m;d+=2)if(u[d]===a)return u[d-1];return-1},r.flip=function(a,l){var u=this.opposite(a,l),d=this.opposite(l,a);this.removeTriangle(a,l,u),this.removeTriangle(l,a,d),this.addTriangle(a,d,u),this.addTriangle(l,u,d)},r.edges=function(){for(var a=this.stars,l=[],u=0,d=a.length;u<d;++u)for(var m=a[u],f=0,g=m.length;f<g;f+=2)l.push([m[f],m[f+1]]);return l},r.cells=function(){for(var a=this.stars,l=[],u=0,d=a.length;u<d;++u)for(var m=a[u],f=0,g=m.length;f<g;f+=2){var _=m[f],A=m[f+1];u<Math.min(_,A)&&l.push([u,_,A])}return l};function o(a,l){for(var u=new Array(a),d=0;d<a;++d)u[d]=[];return new n(u,l)}}}),xS=En({"node_modules/robust-in-sphere/in-sphere.js"(i,t){"use strict";var e=Vd(),n=mg(),r=xg(),s=gg(),o=6;function a(p){var c=p===3?m:p===4?f:p===5?g:_;return c(n,r,e,s)}function l(){return 0}function u(){return 0}function d(){return 0}function m(p,c,b,h){function C(v,M,S){var T=b(v[0],v[0]),E=h(T,M[0]),I=h(T,S[0]),U=b(M[0],M[0]),N=h(U,v[0]),F=h(U,S[0]),O=b(S[0],S[0]),G=h(O,v[0]),W=h(O,M[0]),ot=p(c(W,F),c(N,E)),K=c(G,I),rt=c(ot,K);return rt[rt.length-1]}return C}function f(p,c,b,h){function C(v,M,S,T){var E=p(b(v[0],v[0]),b(v[1],v[1])),I=h(E,M[0]),U=h(E,S[0]),N=h(E,T[0]),F=p(b(M[0],M[0]),b(M[1],M[1])),O=h(F,v[0]),G=h(F,S[0]),W=h(F,T[0]),ot=p(b(S[0],S[0]),b(S[1],S[1])),K=h(ot,v[0]),rt=h(ot,M[0]),xt=h(ot,T[0]),Ct=p(b(T[0],T[0]),b(T[1],T[1])),_t=h(Ct,v[0]),$=h(Ct,M[0]),nt=h(Ct,S[0]),tt=p(p(h(c(nt,xt),M[1]),p(h(c($,W),-S[1]),h(c(rt,G),T[1]))),p(h(c($,W),v[1]),p(h(c(_t,N),-M[1]),h(c(O,I),T[1])))),lt=p(p(h(c(nt,xt),v[1]),p(h(c(_t,N),-S[1]),h(c(K,U),T[1]))),p(h(c(rt,G),v[1]),p(h(c(K,U),-M[1]),h(c(O,I),S[1])))),pt=c(tt,lt);return pt[pt.length-1]}return C}function g(p,c,b,h){function C(v,M,S,T,E){var I=p(b(v[0],v[0]),p(b(v[1],v[1]),b(v[2],v[2]))),U=h(I,M[0]),N=h(I,S[0]),F=h(I,T[0]),O=h(I,E[0]),G=p(b(M[0],M[0]),p(b(M[1],M[1]),b(M[2],M[2]))),W=h(G,v[0]),ot=h(G,S[0]),K=h(G,T[0]),rt=h(G,E[0]),xt=p(b(S[0],S[0]),p(b(S[1],S[1]),b(S[2],S[2]))),Ct=h(xt,v[0]),_t=h(xt,M[0]),$=h(xt,T[0]),nt=h(xt,E[0]),tt=p(b(T[0],T[0]),p(b(T[1],T[1]),b(T[2],T[2]))),lt=h(tt,v[0]),pt=h(tt,M[0]),dt=h(tt,S[0]),Yt=h(tt,E[0]),wt=p(b(E[0],E[0]),p(b(E[1],E[1]),b(E[2],E[2]))),Z=h(wt,v[0]),et=h(wt,M[0]),j=h(wt,S[0]),at=h(wt,T[0]),gt=p(p(p(h(p(h(c(at,Yt),S[1]),p(h(c(j,nt),-T[1]),h(c(dt,$),E[1]))),M[2]),p(h(p(h(c(at,Yt),M[1]),p(h(c(et,rt),-T[1]),h(c(pt,K),E[1]))),-S[2]),h(p(h(c(j,nt),M[1]),p(h(c(et,rt),-S[1]),h(c(_t,ot),E[1]))),T[2]))),p(h(p(h(c(dt,$),M[1]),p(h(c(pt,K),-S[1]),h(c(_t,ot),T[1]))),-E[2]),p(h(p(h(c(at,Yt),M[1]),p(h(c(et,rt),-T[1]),h(c(pt,K),E[1]))),v[2]),h(p(h(c(at,Yt),v[1]),p(h(c(Z,O),-T[1]),h(c(lt,F),E[1]))),-M[2])))),p(p(h(p(h(c(et,rt),v[1]),p(h(c(Z,O),-M[1]),h(c(W,U),E[1]))),T[2]),p(h(p(h(c(pt,K),v[1]),p(h(c(lt,F),-M[1]),h(c(W,U),T[1]))),-E[2]),h(p(h(c(dt,$),M[1]),p(h(c(pt,K),-S[1]),h(c(_t,ot),T[1]))),v[2]))),p(h(p(h(c(dt,$),v[1]),p(h(c(lt,F),-S[1]),h(c(Ct,N),T[1]))),-M[2]),p(h(p(h(c(pt,K),v[1]),p(h(c(lt,F),-M[1]),h(c(W,U),T[1]))),S[2]),h(p(h(c(_t,ot),v[1]),p(h(c(Ct,N),-M[1]),h(c(W,U),S[1]))),-T[2]))))),vt=p(p(p(h(p(h(c(at,Yt),S[1]),p(h(c(j,nt),-T[1]),h(c(dt,$),E[1]))),v[2]),h(p(h(c(at,Yt),v[1]),p(h(c(Z,O),-T[1]),h(c(lt,F),E[1]))),-S[2])),p(h(p(h(c(j,nt),v[1]),p(h(c(Z,O),-S[1]),h(c(Ct,N),E[1]))),T[2]),h(p(h(c(dt,$),v[1]),p(h(c(lt,F),-S[1]),h(c(Ct,N),T[1]))),-E[2]))),p(p(h(p(h(c(j,nt),M[1]),p(h(c(et,rt),-S[1]),h(c(_t,ot),E[1]))),v[2]),h(p(h(c(j,nt),v[1]),p(h(c(Z,O),-S[1]),h(c(Ct,N),E[1]))),-M[2])),p(h(p(h(c(et,rt),v[1]),p(h(c(Z,O),-M[1]),h(c(W,U),E[1]))),S[2]),h(p(h(c(_t,ot),v[1]),p(h(c(Ct,N),-M[1]),h(c(W,U),S[1]))),-E[2])))),ft=c(gt,vt);return ft[ft.length-1]}return C}function _(p,c,b,h){function C(v,M,S,T,E,I){var U=p(p(b(v[0],v[0]),b(v[1],v[1])),p(b(v[2],v[2]),b(v[3],v[3]))),N=h(U,M[0]),F=h(U,S[0]),O=h(U,T[0]),G=h(U,E[0]),W=h(U,I[0]),ot=p(p(b(M[0],M[0]),b(M[1],M[1])),p(b(M[2],M[2]),b(M[3],M[3]))),K=h(ot,v[0]),rt=h(ot,S[0]),xt=h(ot,T[0]),Ct=h(ot,E[0]),_t=h(ot,I[0]),$=p(p(b(S[0],S[0]),b(S[1],S[1])),p(b(S[2],S[2]),b(S[3],S[3]))),nt=h($,v[0]),tt=h($,M[0]),lt=h($,T[0]),pt=h($,E[0]),dt=h($,I[0]),Yt=p(p(b(T[0],T[0]),b(T[1],T[1])),p(b(T[2],T[2]),b(T[3],T[3]))),wt=h(Yt,v[0]),Z=h(Yt,M[0]),et=h(Yt,S[0]),j=h(Yt,E[0]),at=h(Yt,I[0]),gt=p(p(b(E[0],E[0]),b(E[1],E[1])),p(b(E[2],E[2]),b(E[3],E[3]))),vt=h(gt,v[0]),ft=h(gt,M[0]),It=h(gt,S[0]),Dt=h(gt,T[0]),B=h(gt,I[0]),ie=p(p(b(I[0],I[0]),b(I[1],I[1])),p(b(I[2],I[2]),b(I[3],I[3]))),Ut=h(ie,v[0]),L=h(ie,M[0]),R=h(ie,S[0]),z=h(ie,T[0]),H=h(ie,E[0]),J=p(p(p(h(p(p(h(p(h(c(H,B),T[1]),p(h(c(z,at),-E[1]),h(c(Dt,j),I[1]))),S[2]),h(p(h(c(H,B),S[1]),p(h(c(R,dt),-E[1]),h(c(It,pt),I[1]))),-T[2])),p(h(p(h(c(z,at),S[1]),p(h(c(R,dt),-T[1]),h(c(et,lt),I[1]))),E[2]),h(p(h(c(Dt,j),S[1]),p(h(c(It,pt),-T[1]),h(c(et,lt),E[1]))),-I[2]))),M[3]),p(h(p(p(h(p(h(c(H,B),T[1]),p(h(c(z,at),-E[1]),h(c(Dt,j),I[1]))),M[2]),h(p(h(c(H,B),M[1]),p(h(c(L,_t),-E[1]),h(c(ft,Ct),I[1]))),-T[2])),p(h(p(h(c(z,at),M[1]),p(h(c(L,_t),-T[1]),h(c(Z,xt),I[1]))),E[2]),h(p(h(c(Dt,j),M[1]),p(h(c(ft,Ct),-T[1]),h(c(Z,xt),E[1]))),-I[2]))),-S[3]),h(p(p(h(p(h(c(H,B),S[1]),p(h(c(R,dt),-E[1]),h(c(It,pt),I[1]))),M[2]),h(p(h(c(H,B),M[1]),p(h(c(L,_t),-E[1]),h(c(ft,Ct),I[1]))),-S[2])),p(h(p(h(c(R,dt),M[1]),p(h(c(L,_t),-S[1]),h(c(tt,rt),I[1]))),E[2]),h(p(h(c(It,pt),M[1]),p(h(c(ft,Ct),-S[1]),h(c(tt,rt),E[1]))),-I[2]))),T[3]))),p(p(h(p(p(h(p(h(c(z,at),S[1]),p(h(c(R,dt),-T[1]),h(c(et,lt),I[1]))),M[2]),h(p(h(c(z,at),M[1]),p(h(c(L,_t),-T[1]),h(c(Z,xt),I[1]))),-S[2])),p(h(p(h(c(R,dt),M[1]),p(h(c(L,_t),-S[1]),h(c(tt,rt),I[1]))),T[2]),h(p(h(c(et,lt),M[1]),p(h(c(Z,xt),-S[1]),h(c(tt,rt),T[1]))),-I[2]))),-E[3]),h(p(p(h(p(h(c(Dt,j),S[1]),p(h(c(It,pt),-T[1]),h(c(et,lt),E[1]))),M[2]),h(p(h(c(Dt,j),M[1]),p(h(c(ft,Ct),-T[1]),h(c(Z,xt),E[1]))),-S[2])),p(h(p(h(c(It,pt),M[1]),p(h(c(ft,Ct),-S[1]),h(c(tt,rt),E[1]))),T[2]),h(p(h(c(et,lt),M[1]),p(h(c(Z,xt),-S[1]),h(c(tt,rt),T[1]))),-E[2]))),I[3])),p(h(p(p(h(p(h(c(H,B),T[1]),p(h(c(z,at),-E[1]),h(c(Dt,j),I[1]))),M[2]),h(p(h(c(H,B),M[1]),p(h(c(L,_t),-E[1]),h(c(ft,Ct),I[1]))),-T[2])),p(h(p(h(c(z,at),M[1]),p(h(c(L,_t),-T[1]),h(c(Z,xt),I[1]))),E[2]),h(p(h(c(Dt,j),M[1]),p(h(c(ft,Ct),-T[1]),h(c(Z,xt),E[1]))),-I[2]))),v[3]),h(p(p(h(p(h(c(H,B),T[1]),p(h(c(z,at),-E[1]),h(c(Dt,j),I[1]))),v[2]),h(p(h(c(H,B),v[1]),p(h(c(Ut,W),-E[1]),h(c(vt,G),I[1]))),-T[2])),p(h(p(h(c(z,at),v[1]),p(h(c(Ut,W),-T[1]),h(c(wt,O),I[1]))),E[2]),h(p(h(c(Dt,j),v[1]),p(h(c(vt,G),-T[1]),h(c(wt,O),E[1]))),-I[2]))),-M[3])))),p(p(p(h(p(p(h(p(h(c(H,B),M[1]),p(h(c(L,_t),-E[1]),h(c(ft,Ct),I[1]))),v[2]),h(p(h(c(H,B),v[1]),p(h(c(Ut,W),-E[1]),h(c(vt,G),I[1]))),-M[2])),p(h(p(h(c(L,_t),v[1]),p(h(c(Ut,W),-M[1]),h(c(K,N),I[1]))),E[2]),h(p(h(c(ft,Ct),v[1]),p(h(c(vt,G),-M[1]),h(c(K,N),E[1]))),-I[2]))),T[3]),h(p(p(h(p(h(c(z,at),M[1]),p(h(c(L,_t),-T[1]),h(c(Z,xt),I[1]))),v[2]),h(p(h(c(z,at),v[1]),p(h(c(Ut,W),-T[1]),h(c(wt,O),I[1]))),-M[2])),p(h(p(h(c(L,_t),v[1]),p(h(c(Ut,W),-M[1]),h(c(K,N),I[1]))),T[2]),h(p(h(c(Z,xt),v[1]),p(h(c(wt,O),-M[1]),h(c(K,N),T[1]))),-I[2]))),-E[3])),p(h(p(p(h(p(h(c(Dt,j),M[1]),p(h(c(ft,Ct),-T[1]),h(c(Z,xt),E[1]))),v[2]),h(p(h(c(Dt,j),v[1]),p(h(c(vt,G),-T[1]),h(c(wt,O),E[1]))),-M[2])),p(h(p(h(c(ft,Ct),v[1]),p(h(c(vt,G),-M[1]),h(c(K,N),E[1]))),T[2]),h(p(h(c(Z,xt),v[1]),p(h(c(wt,O),-M[1]),h(c(K,N),T[1]))),-E[2]))),I[3]),h(p(p(h(p(h(c(z,at),S[1]),p(h(c(R,dt),-T[1]),h(c(et,lt),I[1]))),M[2]),h(p(h(c(z,at),M[1]),p(h(c(L,_t),-T[1]),h(c(Z,xt),I[1]))),-S[2])),p(h(p(h(c(R,dt),M[1]),p(h(c(L,_t),-S[1]),h(c(tt,rt),I[1]))),T[2]),h(p(h(c(et,lt),M[1]),p(h(c(Z,xt),-S[1]),h(c(tt,rt),T[1]))),-I[2]))),v[3]))),p(p(h(p(p(h(p(h(c(z,at),S[1]),p(h(c(R,dt),-T[1]),h(c(et,lt),I[1]))),v[2]),h(p(h(c(z,at),v[1]),p(h(c(Ut,W),-T[1]),h(c(wt,O),I[1]))),-S[2])),p(h(p(h(c(R,dt),v[1]),p(h(c(Ut,W),-S[1]),h(c(nt,F),I[1]))),T[2]),h(p(h(c(et,lt),v[1]),p(h(c(wt,O),-S[1]),h(c(nt,F),T[1]))),-I[2]))),-M[3]),h(p(p(h(p(h(c(z,at),M[1]),p(h(c(L,_t),-T[1]),h(c(Z,xt),I[1]))),v[2]),h(p(h(c(z,at),v[1]),p(h(c(Ut,W),-T[1]),h(c(wt,O),I[1]))),-M[2])),p(h(p(h(c(L,_t),v[1]),p(h(c(Ut,W),-M[1]),h(c(K,N),I[1]))),T[2]),h(p(h(c(Z,xt),v[1]),p(h(c(wt,O),-M[1]),h(c(K,N),T[1]))),-I[2]))),S[3])),p(h(p(p(h(p(h(c(R,dt),M[1]),p(h(c(L,_t),-S[1]),h(c(tt,rt),I[1]))),v[2]),h(p(h(c(R,dt),v[1]),p(h(c(Ut,W),-S[1]),h(c(nt,F),I[1]))),-M[2])),p(h(p(h(c(L,_t),v[1]),p(h(c(Ut,W),-M[1]),h(c(K,N),I[1]))),S[2]),h(p(h(c(tt,rt),v[1]),p(h(c(nt,F),-M[1]),h(c(K,N),S[1]))),-I[2]))),-T[3]),h(p(p(h(p(h(c(et,lt),M[1]),p(h(c(Z,xt),-S[1]),h(c(tt,rt),T[1]))),v[2]),h(p(h(c(et,lt),v[1]),p(h(c(wt,O),-S[1]),h(c(nt,F),T[1]))),-M[2])),p(h(p(h(c(Z,xt),v[1]),p(h(c(wt,O),-M[1]),h(c(K,N),T[1]))),S[2]),h(p(h(c(tt,rt),v[1]),p(h(c(nt,F),-M[1]),h(c(K,N),S[1]))),-T[2]))),I[3]))))),ut=p(p(p(h(p(p(h(p(h(c(H,B),T[1]),p(h(c(z,at),-E[1]),h(c(Dt,j),I[1]))),S[2]),h(p(h(c(H,B),S[1]),p(h(c(R,dt),-E[1]),h(c(It,pt),I[1]))),-T[2])),p(h(p(h(c(z,at),S[1]),p(h(c(R,dt),-T[1]),h(c(et,lt),I[1]))),E[2]),h(p(h(c(Dt,j),S[1]),p(h(c(It,pt),-T[1]),h(c(et,lt),E[1]))),-I[2]))),v[3]),p(h(p(p(h(p(h(c(H,B),T[1]),p(h(c(z,at),-E[1]),h(c(Dt,j),I[1]))),v[2]),h(p(h(c(H,B),v[1]),p(h(c(Ut,W),-E[1]),h(c(vt,G),I[1]))),-T[2])),p(h(p(h(c(z,at),v[1]),p(h(c(Ut,W),-T[1]),h(c(wt,O),I[1]))),E[2]),h(p(h(c(Dt,j),v[1]),p(h(c(vt,G),-T[1]),h(c(wt,O),E[1]))),-I[2]))),-S[3]),h(p(p(h(p(h(c(H,B),S[1]),p(h(c(R,dt),-E[1]),h(c(It,pt),I[1]))),v[2]),h(p(h(c(H,B),v[1]),p(h(c(Ut,W),-E[1]),h(c(vt,G),I[1]))),-S[2])),p(h(p(h(c(R,dt),v[1]),p(h(c(Ut,W),-S[1]),h(c(nt,F),I[1]))),E[2]),h(p(h(c(It,pt),v[1]),p(h(c(vt,G),-S[1]),h(c(nt,F),E[1]))),-I[2]))),T[3]))),p(p(h(p(p(h(p(h(c(z,at),S[1]),p(h(c(R,dt),-T[1]),h(c(et,lt),I[1]))),v[2]),h(p(h(c(z,at),v[1]),p(h(c(Ut,W),-T[1]),h(c(wt,O),I[1]))),-S[2])),p(h(p(h(c(R,dt),v[1]),p(h(c(Ut,W),-S[1]),h(c(nt,F),I[1]))),T[2]),h(p(h(c(et,lt),v[1]),p(h(c(wt,O),-S[1]),h(c(nt,F),T[1]))),-I[2]))),-E[3]),h(p(p(h(p(h(c(Dt,j),S[1]),p(h(c(It,pt),-T[1]),h(c(et,lt),E[1]))),v[2]),h(p(h(c(Dt,j),v[1]),p(h(c(vt,G),-T[1]),h(c(wt,O),E[1]))),-S[2])),p(h(p(h(c(It,pt),v[1]),p(h(c(vt,G),-S[1]),h(c(nt,F),E[1]))),T[2]),h(p(h(c(et,lt),v[1]),p(h(c(wt,O),-S[1]),h(c(nt,F),T[1]))),-E[2]))),I[3])),p(h(p(p(h(p(h(c(H,B),S[1]),p(h(c(R,dt),-E[1]),h(c(It,pt),I[1]))),M[2]),h(p(h(c(H,B),M[1]),p(h(c(L,_t),-E[1]),h(c(ft,Ct),I[1]))),-S[2])),p(h(p(h(c(R,dt),M[1]),p(h(c(L,_t),-S[1]),h(c(tt,rt),I[1]))),E[2]),h(p(h(c(It,pt),M[1]),p(h(c(ft,Ct),-S[1]),h(c(tt,rt),E[1]))),-I[2]))),v[3]),h(p(p(h(p(h(c(H,B),S[1]),p(h(c(R,dt),-E[1]),h(c(It,pt),I[1]))),v[2]),h(p(h(c(H,B),v[1]),p(h(c(Ut,W),-E[1]),h(c(vt,G),I[1]))),-S[2])),p(h(p(h(c(R,dt),v[1]),p(h(c(Ut,W),-S[1]),h(c(nt,F),I[1]))),E[2]),h(p(h(c(It,pt),v[1]),p(h(c(vt,G),-S[1]),h(c(nt,F),E[1]))),-I[2]))),-M[3])))),p(p(p(h(p(p(h(p(h(c(H,B),M[1]),p(h(c(L,_t),-E[1]),h(c(ft,Ct),I[1]))),v[2]),h(p(h(c(H,B),v[1]),p(h(c(Ut,W),-E[1]),h(c(vt,G),I[1]))),-M[2])),p(h(p(h(c(L,_t),v[1]),p(h(c(Ut,W),-M[1]),h(c(K,N),I[1]))),E[2]),h(p(h(c(ft,Ct),v[1]),p(h(c(vt,G),-M[1]),h(c(K,N),E[1]))),-I[2]))),S[3]),h(p(p(h(p(h(c(R,dt),M[1]),p(h(c(L,_t),-S[1]),h(c(tt,rt),I[1]))),v[2]),h(p(h(c(R,dt),v[1]),p(h(c(Ut,W),-S[1]),h(c(nt,F),I[1]))),-M[2])),p(h(p(h(c(L,_t),v[1]),p(h(c(Ut,W),-M[1]),h(c(K,N),I[1]))),S[2]),h(p(h(c(tt,rt),v[1]),p(h(c(nt,F),-M[1]),h(c(K,N),S[1]))),-I[2]))),-E[3])),p(h(p(p(h(p(h(c(It,pt),M[1]),p(h(c(ft,Ct),-S[1]),h(c(tt,rt),E[1]))),v[2]),h(p(h(c(It,pt),v[1]),p(h(c(vt,G),-S[1]),h(c(nt,F),E[1]))),-M[2])),p(h(p(h(c(ft,Ct),v[1]),p(h(c(vt,G),-M[1]),h(c(K,N),E[1]))),S[2]),h(p(h(c(tt,rt),v[1]),p(h(c(nt,F),-M[1]),h(c(K,N),S[1]))),-E[2]))),I[3]),h(p(p(h(p(h(c(Dt,j),S[1]),p(h(c(It,pt),-T[1]),h(c(et,lt),E[1]))),M[2]),h(p(h(c(Dt,j),M[1]),p(h(c(ft,Ct),-T[1]),h(c(Z,xt),E[1]))),-S[2])),p(h(p(h(c(It,pt),M[1]),p(h(c(ft,Ct),-S[1]),h(c(tt,rt),E[1]))),T[2]),h(p(h(c(et,lt),M[1]),p(h(c(Z,xt),-S[1]),h(c(tt,rt),T[1]))),-E[2]))),v[3]))),p(p(h(p(p(h(p(h(c(Dt,j),S[1]),p(h(c(It,pt),-T[1]),h(c(et,lt),E[1]))),v[2]),h(p(h(c(Dt,j),v[1]),p(h(c(vt,G),-T[1]),h(c(wt,O),E[1]))),-S[2])),p(h(p(h(c(It,pt),v[1]),p(h(c(vt,G),-S[1]),h(c(nt,F),E[1]))),T[2]),h(p(h(c(et,lt),v[1]),p(h(c(wt,O),-S[1]),h(c(nt,F),T[1]))),-E[2]))),-M[3]),h(p(p(h(p(h(c(Dt,j),M[1]),p(h(c(ft,Ct),-T[1]),h(c(Z,xt),E[1]))),v[2]),h(p(h(c(Dt,j),v[1]),p(h(c(vt,G),-T[1]),h(c(wt,O),E[1]))),-M[2])),p(h(p(h(c(ft,Ct),v[1]),p(h(c(vt,G),-M[1]),h(c(K,N),E[1]))),T[2]),h(p(h(c(Z,xt),v[1]),p(h(c(wt,O),-M[1]),h(c(K,N),T[1]))),-E[2]))),S[3])),p(h(p(p(h(p(h(c(It,pt),M[1]),p(h(c(ft,Ct),-S[1]),h(c(tt,rt),E[1]))),v[2]),h(p(h(c(It,pt),v[1]),p(h(c(vt,G),-S[1]),h(c(nt,F),E[1]))),-M[2])),p(h(p(h(c(ft,Ct),v[1]),p(h(c(vt,G),-M[1]),h(c(K,N),E[1]))),S[2]),h(p(h(c(tt,rt),v[1]),p(h(c(nt,F),-M[1]),h(c(K,N),S[1]))),-E[2]))),-T[3]),h(p(p(h(p(h(c(et,lt),M[1]),p(h(c(Z,xt),-S[1]),h(c(tt,rt),T[1]))),v[2]),h(p(h(c(et,lt),v[1]),p(h(c(wt,O),-S[1]),h(c(nt,F),T[1]))),-M[2])),p(h(p(h(c(Z,xt),v[1]),p(h(c(wt,O),-M[1]),h(c(K,N),T[1]))),S[2]),h(p(h(c(tt,rt),v[1]),p(h(c(nt,F),-M[1]),h(c(K,N),S[1]))),-T[2]))),E[3]))))),mt=c(J,ut);return mt[mt.length-1]}return C}var A=[l,u,d];function x(p){var c=A[p.length];return c||(c=A[p.length]=a(p.length)),c.apply(void 0,p)}function y(p,c,b,h,C,v,M,S){function T(E,I,U,N,F,O){switch(arguments.length){case 0:case 1:return 0;case 2:return h(E,I);case 3:return C(E,I,U);case 4:return v(E,I,U,N);case 5:return M(E,I,U,N,F);case 6:return S(E,I,U,N,F,O)}for(var G=new Array(arguments.length),W=0;W<arguments.length;++W)G[W]=arguments[W];return p(G)}return T}function w(){for(;A.length<=o;)A.push(a(A.length));t.exports=y.apply(void 0,[x].concat(A));for(var p=0;p<=o;++p)t.exports[p]=A[p]}w()}}),_S=En({"node_modules/cdt2d/lib/delaunay.js"(i,t){"use strict";var e=xS()[4],n=$l();t.exports=s;function r(o,a,l,u,d,m){var f=a.opposite(u,d);if(!(f<0)){if(d<u){var g=u;u=d,d=g,g=m,m=f,f=g}a.isConstraint(u,d)||e(o[u],o[d],o[m],o[f])<0&&l.push(u,d)}}function s(o,a){for(var l=[],u=o.length,d=a.stars,m=0;m<u;++m)for(var f=d[m],g=1;g<f.length;g+=2){var _=f[g];if(!(_<m)&&!a.isConstraint(m,_)){for(var A=f[g-1],x=-1,y=1;y<f.length;y+=2)if(f[y-1]===_){x=f[y];break}x<0||e(o[m],o[_],o[A],o[x])<0&&l.push(m,_)}}for(;l.length>0;){for(var _=l.pop(),m=l.pop(),A=-1,x=-1,f=d[m],w=1;w<f.length;w+=2){var p=f[w-1],c=f[w];p===_?x=c:c===_&&(A=p)}A<0||x<0||e(o[m],o[_],o[A],o[x])>=0||(a.flip(m,_),r(o,a,l,A,m,x),r(o,a,l,m,x,A),r(o,a,l,x,_,A),r(o,a,l,_,A,x))}}}}),yS=En({"node_modules/cdt2d/lib/filter.js"(i,t){"use strict";var e=$l();t.exports=l;function n(u,d,m,f,g,_,A){this.cells=u,this.neighbor=d,this.flags=f,this.constraint=m,this.active=g,this.next=_,this.boundary=A}var r=n.prototype;function s(u,d){return u[0]-d[0]||u[1]-d[1]||u[2]-d[2]}r.locate=(function(){var u=[0,0,0];return function(d,m,f){var g=d,_=m,A=f;return m<f?m<d&&(g=m,_=f,A=d):f<d&&(g=f,_=d,A=m),g<0?-1:(u[0]=g,u[1]=_,u[2]=A,e.eq(this.cells,u,s))}})();function o(u,d){for(var m=u.cells(),f=m.length,g=0;g<f;++g){var _=m[g],A=_[0],x=_[1],y=_[2];x<y?x<A&&(_[0]=x,_[1]=y,_[2]=A):y<A&&(_[0]=y,_[1]=A,_[2]=x)}m.sort(s);for(var w=new Array(f),g=0;g<w.length;++g)w[g]=0;var p=[],c=[],b=new Array(3*f),h=new Array(3*f),C=null;d&&(C=[]);for(var v=new n(m,b,h,w,p,c,C),g=0;g<f;++g)for(var _=m[g],M=0;M<3;++M){var A=_[M],x=_[(M+1)%3],S=b[3*g+M]=v.locate(x,A,u.opposite(x,A)),T=h[3*g+M]=u.isConstraint(A,x);S<0&&(T?c.push(g):(p.push(g),w[g]=1),d&&C.push([x,A,-1]))}return v}function a(u,d,m){for(var f=0,g=0;g<u.length;++g)d[g]===m&&(u[f++]=u[g]);return u.length=f,u}function l(u,d,m){var f=o(u,m);if(d===0)return m?f.cells.concat(f.boundary):f.cells;for(var g=1,_=f.active,A=f.next,x=f.flags,y=f.cells,w=f.constraint,p=f.neighbor;_.length>0||A.length>0;){for(;_.length>0;){var c=_.pop();if(x[c]!==-g){x[c]=g;for(var b=y[c],h=0;h<3;++h){var C=p[3*c+h];C>=0&&x[C]===0&&(w[3*c+h]?A.push(C):(_.push(C),x[C]=g))}}}var v=A;A=_,_=v,A.length=0,g=-g}var M=a(y,x,d);return m?M.concat(f.boundary):M}}}),vS=En({"node_modules/cdt2d/cdt2d.js"(i,t){var e=mS(),n=gS(),r=_S(),s=yS();t.exports=d;function o(m){return[Math.min(m[0],m[1]),Math.max(m[0],m[1])]}function a(m,f){return m[0]-f[0]||m[1]-f[1]}function l(m){return m.map(o).sort(a)}function u(m,f,g){return f in m?m[f]:g}function d(m,f,g){Array.isArray(f)?(g=g||{},f=f||[]):(g=f||{},f=[]);var _=!!u(g,"delaunay",!0),A=!!u(g,"interior",!0),x=!!u(g,"exterior",!0),y=!!u(g,"infinity",!1);if(!A&&!x||m.length===0)return[];var w=e(m,f);if(_||A!==x||y){for(var p=n(m.length,l(f)),c=0;c<w.length;++c){var b=w[c];p.addTriangle(b[0],b[1],b[2])}return _&&r(m,p),x?A?y?s(p,0,y):p.cells():s(p,1,y):s(p,-1)}else return w}}}),bS=vS(),Ai=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}},Hm=1e-16,MS=1e-16,Cr=new D,Wm=new D,Xm=new Ai(()=>({param:0,index:0})),SS=new Ai(()=>new D);function wS(i,t,e,n){Xm.clear(),t.length=0,e.length=0;for(let u=0,d=i.length;u<d;u++){let m=i[u];l(m.start),l(m.end)}for(let u=0,d=i.length;u<d;u++){let m=i[u];for(let f=u+1;f<d;f++){let g=i[f];m.distanceSqToLine3(g,Cr,Wm)<Hm*n&&l(Wm)}}let r=[];for(let u=0,d=i.length;u<d;u++){r.length=0;let m=i[u];for(let f=0,g=t.length;f<g;f++){let _=t[f],A=m.closestPointToPointParameter(_,!0);if(m.at(A,Cr),_.distanceToSquared(Cr)<Hm*n){let x=Xm.getInstance();x.param=A,x.index=f,r.push(x)}}r.sort(a);for(let f=0,g=r.length-1;f<g;f++){let _=r[f].index,A=r[f+1].index;_!==A&&e.push([_,A])}}let s=new Set,o=0;for(let u=0,d=e.length;u<d;u++){let m=e[u],f=Math.min(m[0],m[1]),g=Math.max(m[0],m[1]),_=f+","+g;s.has(_)||(s.add(_),e[o++]=m)}e.length=o;function a(u,d){return u.param-d.param}function l(u){for(let d=0;d<t.length;d++){let m=t[d];if(u===m||u.distanceToSquared(m)<MS*n)return d}return t.push(SS.getInstance().copy(u)),t.length-1}}var Gl=class{constructor(){this.trianglePool=new Ai(()=>new Ye),this.linePool=new Ai(()=>new ge),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new D,this.projOrigin=new D,this.projU=new D,this.projV=new D,this.baseTri=new Ye,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();let{normal:s,baseTri:o,projU:a,projV:l,projOrigin:u,constrainedEdges:d,linePool:m,baseIndices:f}=this;t.getNormal(s),o.copy(t),o.update(),f[0]=e,f[1]=n,f[2]=r,d.length=0;let g=m.getInstance();g.start.copy(o.a),g.end.copy(o.b);let _=m.getInstance();_.start.copy(o.b),_.end.copy(o.c);let A=m.getInstance();A.start.copy(o.c),A.end.copy(o.a),d.push(g,_,A),u.copy(o.a),a.subVectors(o.b,o.a).normalize(),l.crossVectors(s,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){let{projOrigin:n,projU:r,projV:s}=this;return Cr.subVectors(t,n),e.set(Cr.dot(r),Cr.dot(s),0)}_from2D(t,e,n){let{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:l}=this;t.length=0,e.clear();let u=[];for(let y=0,w=a.length;y<w;y++){let p=a[y],c=s.getInstance();this._to2D(p.start,c.start),this._to2D(p.end,c.end),u.push(c)}let d=0;for(let y=0;y<3;y++){let w=this._to2D(o.points[y],Cr);d=Math.max(d,Math.abs(w.x),Math.abs(w.y))}let m=[],f=[];wS(u,m,f,d);let g=[];for(let y=0,w=m.length;y<w;y++){let p=m[y];g.push([p.x,p.y])}let _=bS(g,f,{exterior:!1}),A=new Map;for(let y=0,w=f.length;y<w;y++){let p=f[y];A.set(`${p[0]}_${p[1]}`,-1),A.set(`${p[1]}_${p[0]}`,-1)}let x=`${l[0]}_${l[1]}_${l[2]}_`;for(let y=0,w=_.length;y<w;y++){let p=_[y],[c,b,h]=p,C=e.getInstance();this._from2D(g[c][0],g[c][1],C.a),this._from2D(g[b][0],g[b][1],C.b),this._from2D(g[h][0],g[h][1],C.c),t.push(C);let v=[];n.push(v);let M=[];r.push(M);for(let S=0;S<3;S++){let T=p[S];M.push(T<3?l[T]:x+T);let E=p[(S+1)%3],I=`${T}_${E}`;if(A.has(I)){let U=A.get(I);U!==-1&&(v.push(U),n[U].push(y))}else{let U=`${E}_${T}`;A.set(U,y)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}},AS=1e-14,wd=new D,qm=new D,Ym=new D;function er(i,t=AS){wd.subVectors(i.b,i.a),qm.subVectors(i.c,i.a),Ym.subVectors(i.b,i.c);let e=wd.angleTo(qm),n=wd.angleTo(Ym),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}var Ad=1e-10,ko=1e-10,Mi=new ge,Ie=new ge,Si=new D,$m=new D,Zm=new D,Ll=new He,Td=new Ye,Hl=class{constructor(){this.trianglePool=new Ai(()=>new he),this.triangles=[],this.normal=new D}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){let a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Si).dot(r))>Ad)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let l=n.getInstance();l.copy(a),e.push(l)}else{t.getNormal(r);let s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){let a=n[s];a.coplanarCount=0}let r=[t.a,t.b,t.c];for(let s=0;s<3;s++){let o=(s+1)%3,a=r[s],l=r[o];t.getNormal($m).normalize(),Si.subVectors(l,a).normalize(),Zm.crossVectors($m,Si),Ll.setFromNormalAndCoplanarPoint(Zm,a),this.splitByPlane(Ll,t)}}else t.getPlane(Ll),this.splitByPlane(Ll,t)}splitByPlane(t,e){let{triangles:n,trianglePool:r}=this;Td.copy(e),Td.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){let a=n[s];if(!Td.intersectsTriangle(a,Mi,!0))continue;let{a:l,b:u,c:d}=a,m=0,f=-1,g=!1,_=[],A=[],x=[l,u,d];for(let y=0;y<3;y++){let w=(y+1)%3;Mi.start.copy(x[y]),Mi.end.copy(x[w]);let p=t.distanceToPoint(Mi.start),c=t.distanceToPoint(Mi.end);if(Math.abs(p)<ko&&Math.abs(c)<ko){g=!0;break}if(p>0?_.push(y):A.push(y),Math.abs(p)<ko)continue;let b=!!t.intersectLine(Mi,Si);!b&&Math.abs(c)<ko&&(Si.copy(Mi.end),b=!0),b&&!(Si.distanceTo(Mi.start)<Ad)&&(Si.distanceTo(Mi.end)<Ad&&(f=y),m===0?Ie.start.copy(Si):Ie.end.copy(Si),m++)}if(!g&&m===2&&Ie.distance()>ko)if(f!==-1){f=(f+1)%3;let y=0;y===f&&(y=(y+1)%3);let w=y+1;w===f&&(w=(w+1)%3);let p=r.getInstance();p.a.copy(x[w]),p.b.copy(Ie.end),p.c.copy(Ie.start),er(p)||n.push(p),a.a.copy(x[y]),a.b.copy(Ie.start),a.c.copy(Ie.end),er(a)&&(n.splice(s,1),s--,o--)}else{let y=_.length>=2?A[0]:_[0];if(y===0){let h=Ie.start;Ie.start=Ie.end,Ie.end=h}let w=(y+1)%3,p=(y+2)%3,c=r.getInstance(),b=r.getInstance();x[w].distanceToSquared(Ie.start)<x[p].distanceToSquared(Ie.end)?(c.a.copy(x[w]),c.b.copy(Ie.start),c.c.copy(Ie.end),b.a.copy(x[w]),b.b.copy(x[p]),b.c.copy(Ie.start)):(c.a.copy(x[p]),c.b.copy(Ie.start),c.c.copy(Ie.end),b.a.copy(x[w]),b.b.copy(x[p]),b.c.copy(Ie.end)),a.a.copy(x[y]),a.b.copy(Ie.end),a.c.copy(Ie.start),er(c)||n.push(c),er(b)||n.push(b),er(a)&&(n.splice(s,1),s--,o--)}else m===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}},Wl=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}},TS=0,Zl=1,ES=2,CS=3,RS=4,_g=5,yg=6,Ed=1e-10,IS=1e-15,PS=1e-10,DS=1e-10,Jm=new ge,Ms=new ge,Km=new D,jm=new D,Qm=new D,Cd=new He,Ts=new D,Xl=new D;function LS(i,t){i.getNormal(Ts),t.getNormal(Xl);let e=Ts.dot(Xl);if(Math.abs(1-Math.abs(e))>=PS)return!1;let n=Ts.dot(i.a),r=Ts.dot(t.a);return Math.abs(n-r)<DS}function tg(i,t,e,n){let r=0,s=1;i.delta(Km);let o=[t.a,t.b,t.c];for(let a=0;a<3;a++){let l=o[a],u=o[(a+1)%3];jm.subVectors(u,l),Qm.crossVectors(e,jm),Cd.setFromNormalAndCoplanarPoint(Qm,l);let d=Cd.distanceToPoint(i.start),m=Cd.normal.dot(Km);if(Math.abs(m)<IS){if(d<-Ed)return null;continue}let f=-d/m;if(m>0?r=Math.max(r,f):s=Math.min(s,f),r>s+Ed)return null}return s-r<Ed?null:(i.at(r,n.start),i.at(s,n.end),n)}function eg(i,t,e){let n=0;i.getNormal(Ts),t.getNormal(Xl);let r=[t.a,t.b,t.c];for(let o=0;o<3;o++){Ms.start.copy(r[o]),Ms.end.copy(r[(o+1)%3]);let a=tg(Ms,i,Ts,Jm);a!==null&&(n>=e.length&&e.push(new ge),e[n].copy(a),n++)}let s=[i.a,i.b,i.c];for(let o=0;o<3;o++){Ms.start.copy(s[o]),Ms.end.copy(s[(o+1)%3]);let a=tg(Ms,t,Xl,Jm);a!==null&&(n>=e.length&&e.push(new ge),e[n].copy(a),n++)}return n}var Ss=new bn,ng=new Zt,Nl=new ge,Rd=[],Ul=new Ai(()=>new ge),ws=-1,As=1,zl=-2,Vl=2,Go=0,Ar=1,kd=2,kl=null;function ig(i){kl=i}function vg(i,t,e=null){i.getMidpoint(Ss.origin),i.getNormal(Ss.direction),e&&(Ss.origin.applyMatrix4(e),Ss.direction.transformDirection(e));let n=t.raycastFirst(Ss,un);return!!(n&&Ss.direction.dot(n.face.normal)>0)?ws:As}function NS(i,t){let e=new Wl,n=new Wl;return Ul.clear(),ng.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,ng,{intersectsTriangles(r,s,o,a){if(!er(r)&&!er(s)){let u=(LS(r,s)?eg(r,s,Rd):0)>2;if(u||r.intersectsTriangle(s,Nl,!0)){let m=i.geometry.boundsTree.resolveTriangleIndex(o),f=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(m,f,u),n.add(f,m,u),u){let g=eg(r,s,Rd);for(let _=0;_<g;_++){let A=Ul.getInstance().copy(Rd[_]);e.addIntersectionEdge(m,A),n.addIntersectionEdge(f,A)}}else{let g=Ul.getInstance().copy(Nl),_=Ul.getInstance().copy(Nl);e.addIntersectionEdge(m,g),n.addIntersectionEdge(f,_)}kl&&(kl.addEdge(Nl),kl.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function bg(i,t,e=!1){switch(i){case TS:if(t===As||t===Vl&&!e)return Ar;break;case Zl:if(e){if(t===ws)return Go}else if(t===As||t===zl)return Ar;break;case ES:if(e){if(t===As||t===zl)return Ar}else if(t===ws)return Go;break;case RS:if(t===ws)return Go;if(t===As)return Ar;break;case CS:if(t===ws||t===Vl&&!e)return Ar;break;case _g:if(!e&&(t===As||t===zl))return Ar;break;case yg:if(!e&&(t===ws||t===Vl))return Ar;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return kd}var Ud=class{constructor(t){this.triangle=new he().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new he().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},ql=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){let{data:s}=this;s[t]||(s[t]=new Ud(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{let l=n[a].intersects;for(let u in l)r.has(u)||(r.add(u),s.push(l[u]))}};if(t!==null)o(t);else for(let a in n)o(a);return s}reset(){this.data={}}},Bd=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new ql,this.triangleIntersectsB=new ql,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){let{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),ig(this))}complete(){this.enabled&&ig(null)}},Tn=new Zt,Tr=new Zt,fn=new Zt,tr=new $t,kn=new he,Er=new he,Gn=new he,Qi=new he,Rr=[],ri=[],Bl=new Set,rg=new D,sg=new D,og=new Ai(()=>new he),ag=new D,Fl=[];function US(i,t,e,n,r,s={}){let{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=NS(i,t),u=[],d=null,m;return m=o?0:-1,lg(i,t,a,e,!1,r,m),cg(i,t,a,e,!1,n,r,m),e.findIndex(g=>g!==yg&&g!==_g)!==-1&&(r.forEach(g=>g.clearIndexMap()),m=o?i.geometry.groups.length||1:-1,lg(t,i,l,e,!0,r,m),cg(t,i,l,e,!0,n,r,m)),r.forEach(g=>g.clearIndexMap()),Rr.length=0,{groups:u,materials:d}}function cg(i,t,e,n,r,s,o,a=0){Tn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Tr.copy(Tn).invert(),r?fn.copy(Tn):fn.identity();let l=fn.determinant()<0;tr.getNormalMatrix(fn).multiplyScalar(l?-1:1);let u=i.geometry.groupIndices,d=i.geometry.index,m=i.geometry.attributes.position,f=t.geometry.boundsTree,g=t.geometry.index,_=t.geometry.attributes.position,A=e.ids;for(let x=0,y=A.length;x<y;x++){let w=A[x],p=a===-1?0:u[w]+a,c=3*w,b=c+0,h=c+1,C=c+2;d&&(b=d.getX(b),h=d.getX(h),C=d.getX(C)),kn.a.fromBufferAttribute(m,b),kn.b.fromBufferAttribute(m,h),kn.c.fromBufferAttribute(m,C),r&&(kn.a.applyMatrix4(Tn),kn.b.applyMatrix4(Tn),kn.c.applyMatrix4(Tn)),s.reset(),s.initialize(kn,b,h,C),Fl.length=0,og.clear(),kn.getNormal(sg);let v=e.coplanarSet.get(w);if(v)for(let E of v){let I=3*E,U=I+0,N=I+1,F=I+2;g&&(U=g.getX(U),N=g.getX(N),F=g.getX(F));let O=og.getInstance();O.a.fromBufferAttribute(_,U),O.b.fromBufferAttribute(_,N),O.c.fromBufferAttribute(_,F),r||(O.a.applyMatrix4(Tr),O.b.applyMatrix4(Tr),O.c.applyMatrix4(Tr)),Fl.push(O)}if(s.addConstraintEdge){let E=e.getIntersectionEdges(w);if(E)for(let I of E)s.addConstraintEdge(I);s.triangulate()}else{let I=e.intersectionSet.get(w);for(let U=0,N=I.length;U<N;U++){let F=I[U],O=v&&v.has(F),G=3*F,W=G+0,ot=G+1,K=G+2;g&&(W=g.getX(W),ot=g.getX(ot),K=g.getX(K)),Er.a.fromBufferAttribute(_,W),Er.b.fromBufferAttribute(_,ot),Er.c.fromBufferAttribute(_,K),r||(Er.a.applyMatrix4(Tr),Er.b.applyMatrix4(Tr),Er.c.applyMatrix4(Tr)),s.splitByTriangle(Er,O)}}let{triangles:M,triangleIndices:S=[],triangleConnectivity:T=[]}=s;for(let E=0,I=o.length;E<I;E++)o[E].initInterpolatedAttributeData(i.geometry,fn,tr,b,h,C);Bl.clear();for(let E=0,I=M.length;E<I;E++){if(Bl.has(E))continue;let U=M[E],N=r?null:Tn,F=null;U.getMidpoint(rg);for(let O=0,G=Fl.length;O<G;O++){let W=Fl[O];if(W.containsPoint(rg)){W.getNormal(ag),F=sg.dot(ag)>0?Vl:zl;break}}F===null&&(F=vg(U,f,N)),Rr.length=0,ri.length=0;for(let O=0,G=n.length;O<G;O++){let W=bg(n[O],F,r);W!==kd&&(Rr.push(W),ri.push(o[O]))}if(ri.length!==0){let O=[E];for(;O.length>0;){let G=O.pop();if(Bl.has(G))continue;Bl.add(G);let W=S[G],ot=null,K=null,rt=null;W&&(ot=W[0],K=W[1],rt=W[2]);let xt=M[G];kn.getBarycoord(xt.a,Qi.a),kn.getBarycoord(xt.b,Qi.b),kn.getBarycoord(xt.c,Qi.c);for(let Ct=0,_t=ri.length;Ct<_t;Ct++){let $=ri[Ct],tt=Rr[Ct]===Go,lt=l!==tt;$.appendInterpolatedAttributeData(p,Qi.a,ot,lt),lt?($.appendInterpolatedAttributeData(p,Qi.c,rt,lt),$.appendInterpolatedAttributeData(p,Qi.b,K,lt)):($.appendInterpolatedAttributeData(p,Qi.b,K,lt),$.appendInterpolatedAttributeData(p,Qi.c,rt,lt))}}}}}return A.length}function lg(i,t,e,n,r,s,o=0){Tn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?fn.copy(Tn):fn.identity();let a=fn.determinant()<0;tr.getNormalMatrix(fn).multiplyScalar(a?-1:1);let l=t.geometry.boundsTree,u=i.geometry.groupIndices,d=i.geometry.index,f=i.geometry.attributes.position,g=[],_=i.geometry.halfEdges,A=new Set(e.ids),x=zd(i.geometry);for(let y=0;y<x&&A.size!==x;y++){if(A.has(y))continue;A.add(y),g.push(y);let w=3*y,p=w+0,c=w+1,b=w+2;d&&(p=d.getX(p),c=d.getX(c),b=d.getX(b)),Gn.a.fromBufferAttribute(f,p),Gn.b.fromBufferAttribute(f,c),Gn.c.fromBufferAttribute(f,b),r&&(Gn.a.applyMatrix4(Tn),Gn.b.applyMatrix4(Tn),Gn.c.applyMatrix4(Tn));let h=vg(Gn,l,r?null:Tn);Rr.length=0,ri.length=0;for(let C=0,v=n.length;C<v;C++){let M=bg(n[C],h,r);M!==kd&&(Rr.push(M),ri.push(s[C]))}for(;g.length>0;){let C=g.pop();for(let v=0;v<3;v++){let M=_.getSiblingTriangleIndex(C,v);M!==-1&&!A.has(M)&&(g.push(M),A.add(M))}if(ri.length!==0){let v=3*C,M=v+0,S=v+1,T=v+2;d&&(M=d.getX(M),S=d.getX(S),T=d.getX(T));let E=o===-1?0:u[C]+o;if(Gn.a.fromBufferAttribute(f,M),Gn.b.fromBufferAttribute(f,S),Gn.c.fromBufferAttribute(f,T),!er(Gn))for(let I=0,U=ri.length;I<U;I++){let N=ri[I],G=Rr[I]===Go!==a;N.appendIndexFromGeometry(i.geometry,fn,tr,E,M,G),G?(N.appendIndexFromGeometry(i.geometry,fn,tr,E,T,G),N.appendIndexFromGeometry(i.geometry,fn,tr,E,S,G)):(N.appendIndexFromGeometry(i.geometry,fn,tr,E,S,G),N.appendIndexFromGeometry(i.geometry,fn,tr,E,T,G))}}}}}function BS(i){return i=~~i,i+4-i%4}var Fd=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=pg()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(BS(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}},dn=new D,Id=new D,Pd=new D,Dd=new D,Ol=new se,FS=new se,OS=new se,zS=new se;function VS(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function hg(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}var Ho=class extends Fd{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},Od=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=r[a],u=l.array.constructor;n[a]||(n[a]=new Ho(u)),n[a].setType(u),n[a].itemSize=l.itemSize,n[a].normalized=l.normalized}for(let s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){let{attributeData:a,interpolatedFields:l}=this,{attributes:u}=t;for(let d in a){let m=u[d];if(!m)throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let f,g,_;if(d==="position"?(f=Id.fromBufferAttribute(m,r).applyMatrix4(e),g=Pd.fromBufferAttribute(m,s).applyMatrix4(e),_=Dd.fromBufferAttribute(m,o).applyMatrix4(e)):d==="normal"?(f=Id.fromBufferAttribute(m,r).applyNormalMatrix(n),g=Pd.fromBufferAttribute(m,s).applyNormalMatrix(n),_=Dd.fromBufferAttribute(m,o).applyNormalMatrix(n)):d==="tangent"?(f=Id.fromBufferAttribute(m,r).transformDirection(e),g=Pd.fromBufferAttribute(m,s).transformDirection(e),_=Dd.fromBufferAttribute(m,o).transformDirection(e)):(f=FS.fromBufferAttribute(m,r),g=OS.fromBufferAttribute(m,s),_=zS.fromBufferAttribute(m,o)),!l[d])l[d]=[f.clone(),g.clone(),_.clone()];else{let A=l[d];A[0].copy(f),A[1].copy(g),A[2].copy(_)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){let{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:l,invertedIndexMap:u}=this;for(;s.length<=t;)s.push(new Ho(Uint32Array));let d=r?u:l,m=s[t];if(n!==null&&d.has(n))m.push(d.get(n));else{d.set(n,o.position.count),m.push(o.position.count);for(let f in a){let g=o[f],_=f==="normal"||f==="tangent",A=r&&_,x=g.itemSize,[y,w,p]=a[f];VS(y,w,p,e,Ol,_,A),hg(Ol,x,g)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){let{groupIndices:a,attributeData:l,forwardIndexMap:u,invertedIndexMap:d}=this;for(;a.length<=r;)a.push(new Ho(Uint32Array));let m=o?d:u,f=a[r];if(s!==null&&m.has(s))f.push(m.get(s));else{m.set(s,l.position.count),f.push(l.position.count);let{attributes:g}=t;for(let _ in l){let A=l[_],x=g[_];if(!x)throw new Error(`CSG Operations: Attribute ${_} not available on geometry.`);let y=x.itemSize;_==="position"?(dn.fromBufferAttribute(x,s).applyMatrix4(e),A.push(dn.x,dn.y,dn.z)):_==="normal"?(dn.fromBufferAttribute(x,s).applyNormalMatrix(n),o&&dn.multiplyScalar(-1),A.push(dn.x,dn.y,dn.z)):_==="tangent"?(dn.fromBufferAttribute(x,s).transformDirection(e),o&&dn.multiplyScalar(-1),A.push(dn.x,dn.y,dn.z)):(Ol.fromBufferAttribute(x,s),hg(Ol,y,A))}}}buildGeometry(t,e){let n=!1,{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(let d in s){let m=s[d],{type:f,itemSize:g,normalized:_,length:A,count:x}=m,y=m.array.buffer,w=o[d];(!w||w.count<x||w.array.type!==f)&&(w=new Ce(new f(A),g,_),t.setAttribute(d,w),n=!0),w.array.set(new f(y,0,A),0),w.needsUpdate=!0}let l=r.reduce((d,m)=>m.count+d,0);(!t.index||a.count<l||a.array.type!==Uint32Array)&&(t.setIndex(new Ce(new Uint32Array(l),1)),n=!0),t.clearGroups();let u=0;for(let d=0,m=Math.min(e.length,r.length);d<m;d++){let{index:f,materialIndex:g}=e[d],{count:_}=r[f],A=r[f].array.buffer;_!==0&&(t.index.array.set(new Uint32Array(A,0,_),u),t.addGroup(u,_,g),u+=_)}t.setDrawRange(0,u),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function kS(i,t){for(let e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function GS(i,t){let e=[];for(let n=0,r=i.length;n<r;n++){let s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function HS(i,t){let e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){let o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function WS(i){for(let t=0;t<i.length-1;t++){let e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){let r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function ug(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}var Yl=class{get useCDTClipping(){return this.triangleSplitter instanceof Gl}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Gl:new Hl)}constructor(){this.triangleSplitter=new Hl,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new Bd}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new wi){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:o,geometryBuilders:a,attributes:l,useGroups:u,consolidateGroups:d,removeUnusedMaterials:m,debug:f}=this;for(;a.length<r.length;)a.push(new Od);r.forEach((p,c)=>{a[c].initFromGeometry(t.geometry,l),kS(p.geometry,l)}),f.init(),US(t,e,n,o,a,{useGroups:u}),f.complete();let g=this.getGroupRanges(t.geometry),_=ug(g,t.material),A=this.getGroupRanges(e.geometry),x=ug(A,e.material);A.forEach(p=>p.materialIndex+=_.length);let y=[..._,...x],w=[...g,...A].map((p,c)=>({...p,index:c}));return u?u&&d&&(w=GS(w,y),w.sort((p,c)=>p.materialIndex-c.materialIndex)):w=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((p,c)=>{let b=p.geometry;a[c].buildGeometry(b,w),t.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.updateMatrix(),p.matrixWorld.copy(t.matrixWorld),u?(p.material=y,d&&WS(b.groups),m&&(p.material=HS(b.groups,y))):p.material=y[0]}),s?r:r[0]}evaluateHierarchy(t,e=new wi){t.updateMatrixWorld(!0);let n=(s,o)=>{let a=s.children;for(let l=0,u=a.length;l<u;l++){let d=a[l];d.isOperationGroup?n(d,o):o(d)}},r=s=>{let o=s.children,a=!1;for(let u=0,d=o.length;u<d;u++){let m=o[u];a=r(m)||a}let l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let u;return n(s,d=>{u?u=this.evaluate(u,d,d.operation):u=this.evaluate(s,d,d.operation)}),s._cachedGeometry=u.geometry,s._cachedMaterials=u.material,!0}else return a||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};var RT=new Zt;var IT=new he,PT=new he,DT=new D,LT=new D,NT=new D,UT=new D,BT=new D,FT=new D,OT=new D,zT=new D,VT=new D,kT=new D,GT=new D,HT=new D,WT=new He,XT=new He,qT=new D,YT=new bn,$T=new ge;var ZT=new he,JT=new D,KT=new D;var Ae=(i,t=document)=>t.querySelector(i),oi=i=>i[Math.floor(Math.random()*i.length)];function XS(i){for(let t=i.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[i[t],i[e]]=[i[e],i[t]]}return i}var Xo=(i,t,e)=>Math.min(e,Math.max(t,i)),qS=i=>1-Math.pow(1-i,3),Kl=i=>i*i*i,Ei=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Zd=i=>new Promise(t=>setTimeout(t,i));function Xd(i,t){let e;do e=Math.floor(Math.random()*t);while(e===i);return e}function YS(i,t,e){let n=[];for(let r=0;r<t;r++)Math.abs(r-i)>=e&&n.push(r);return n.length?oi(n):Xd(i,t)}var ve={ctx:null,enabled:!0,ensure(){if(!this.ctx)try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch(i){}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()},tone(i,t,e="sine",n=.25,r=0,s=null){if(!this.enabled||!this.ctx)return;let o=this.ctx.currentTime+r,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=e,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(s,o+t),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(n,o+.02),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(this.ctx.destination),a.start(o),a.stop(o+t+.06)},click(){this.tone(660,.09,"sine",.2)},whoosh(){this.tone(260,.4,"sawtooth",.05,0,560)},correct(){[523,659,784,1046].forEach((i,t)=>this.tone(i,.3,"sine",.26,t*.09))},wrong(){this.tone(230,.35,"sawtooth",.14,0,130),this.tone(150,.42,"square",.08,.06,100)},thud(){this.tone(130,.16,"sine",.35),this.tone(90,.26,"triangle",.22,.03,55)},clink(){this.tone(1500,.06,"sine",.12)},rattle(){[0,.1,.2,.3].forEach((i,t)=>this.tone(170+Math.random()*50,.06,"triangle",.13,i))},pop(){this.tone(880,.1,"triangle",.18)},fanfare(){[523,659,784,1046,784,1046,1318].forEach((i,t)=>this.tone(i,.32,"triangle",.22,t*.13))}},qd=["box","circle","ellipse","tri","star","heart"];var $S={box:[],circle:["ellipse"],ellipse:["circle"],tri:[],star:[],heart:[]},th={wide:[{id:"w1",size:.42},{id:"w2",size:.58},{id:"w3",size:.76},{id:"w4",size:.98},{id:"w5",size:1.24}],normal:[{id:"n1",size:.5},{id:"n2",size:.63},{id:"n3",size:.76},{id:"n4",size:.89},{id:"n5",size:1.02}],tight:[{id:"t1",size:.52},{id:"t2",size:.6},{id:"t3",size:.69},{id:"t4",size:.79},{id:"t5",size:.9}],extreme:[{id:"x1",size:.5},{id:"x2",size:.57},{id:"x3",size:.64},{id:"x4",size:.71},{id:"x5",size:.78},{id:"x6",size:.85},{id:"x7",size:.92},{id:"x8",size:.99}]},Jd=(i,t)=>th[i].find(e=>e.id===t),ZS=[{id:"up",label:"\u4E0A\u304B\u3089\u306F\u3081\u308B"},{id:"front",label:"\u6B63\u9762\u304B\u3089\u306F\u3081\u308B"}],Kd=[{id:"easy",label:"\u3084\u3055\u3057\u3044",sizes:"wide"},{id:"normal",label:"\u3075\u3064\u3046",sizes:"normal"},{id:"hard",label:"\u3080\u305A\u304B\u3057\u3044",sizes:"normal"},{id:"veryhard",label:"\u3061\u3087\u3046\u3080\u305A\u304B\u3057\u3044",sizes:"tight"},{id:"superhard",label:"\u305C\u3064\u3080",sizes:"extreme"}],eh=[{id:"rainbow",name:"\u306B\u3058\u3044\u308D",bg:"#bfe6ff",table:"#f3e6c9",tableDark:"#dfc9a0",block:"#f2c06b",pieces:["#ff5e5e","#ffc93c","#4cb75b","#4d9fff","#a86bff","#ff7ac2","#3fd6c0"]},{id:"pastel",name:"\u30D1\u30B9\u30C6\u30EB",bg:"#e6f4ff",table:"#ffffff",tableDark:"#e8edf2",block:"#c9b8ff",pieces:["#ffb3ba","#ffdfba","#baffc9","#bae1ff","#e0bbff","#ffd0f4","#fff0a8"]},{id:"vivid",name:"\u3052\u3093\u304D\u30D3\u30D3\u30C3\u30C9",bg:"#232a4d",table:"#3a3f63",tableDark:"#2a2e4d",block:"#8a2be2",pieces:["#ff3860","#ffdd57","#2ee073","#2f9df3","#b847ff","#ff9f43","#57e0d0"]},{id:"cool",name:"\u30AF\u30FC\u30EB",bg:"#d8f2ff",table:"#cfe9f5",tableDark:"#b7d6e8",block:"#5f9ed6",pieces:["#2d7fd6","#4aa3e8","#5bc8e0","#39b3a0","#6fb5f0","#8fd0f7","#a5e0ff"]},{id:"warm",name:"\u3042\u305F\u305F\u304B\u3044",bg:"#fff0e2",table:"#f7e0c6",tableDark:"#e8cfac",block:"#e08a4b",pieces:["#ff6f43","#ff9f43","#ffc443","#e85d5d","#f08a8a","#f2a65a","#ffd166"]},{id:"mono",name:"\u30B7\u30C3\u30AF\u30E2\u30CE\u30C8\u30FC\u30F3",bg:"#ececec",table:"#f7f7f7",tableDark:"#e0e0e0",block:"#8f97a1",pieces:["#2b2d42","#555b6e","#8d99ae","#6b6b6b","#a9a9a9","#3d3d3d","#c9c9c9"]}];function Gd(i,t){let e=new ao(i,{depth:t,bevelEnabled:!1,curveSegments:18});return e.rotateX(-Math.PI/2),e.translate(0,-t/2,0),e}function JS(i){let t=i*1.7,e=t/Math.sqrt(3),n=new Vi;return n.moveTo(0,e),n.lineTo(-t/2,-e/2),n.lineTo(t/2,-e/2),n.closePath(),n}function KS(i){let t=i*1.3,e=t*.45,n=new Vi;for(let r=0;r<10;r++){let s=-Math.PI/2+r*Math.PI/5,o=r%2===0?t:e,a=Math.cos(s)*o,l=Math.sin(s)*o;r===0?n.moveTo(a,l):n.lineTo(a,l)}return n.closePath(),n}function jS(i){let t=i*1,e=new Vi;return e.moveTo(0,.9*t),e.bezierCurveTo(.6*t,.5*t,1.1*t,0*t,0,-.95*t),e.bezierCurveTo(-1.1*t,0*t,-.6*t,.5*t,0,.9*t),e}function jd(i,t){return i==="box"?t:t*.6}function jl(i,t,e=1){let n=jd(i,t),r=t*e,s;switch(i){case"box":s=new Fn(r,r,r);break;case"circle":s=new zi(r,r,n,36);break;case"ellipse":{s=new zi(r,r,n,36),s.scale(1.5,1,.7);break}case"tri":s=Gd(JS(r),n);break;case"star":s=Gd(KS(r),n);break;case"heart":s=Gd(jS(r),n);break;default:s=new Fn(r,r,r)}return s}var Hd=new Map;function Mg(i,t,e){let n=`${e}|${i}|${t}`;if(Hd.has(n))return Hd.get(n);let r=jl(i,Jd(e,t).size,1);return Hd.set(n,r),r}var Eg=new Yl,Es=new Map;function Qd(i,t,e,n){let r=`${n}|${i}|${t}|${e}`;if(Es.has(r))return Es.get(r);let s=Jd(n,t).size,o=jd(i,s),a=jl(i,s,1.12);a.computeBoundingBox();let l=a.boundingBox,u=l.max.x-l.min.x,d=l.max.z-l.min.z,m=l.max.y-l.min.y,f,g;e==="square"?(f=u+1.5,g=d+1.5):(f=u+2.2,g=d+.9);let _=.47,x=_+o+.5,y=x-_+.02;a.scale(1,y/m,1),a.translate(0,_+y/2,0);let w=new wi(new Fn(f,x,g));w.updateMatrixWorld();let p=new wi(a);p.updateMatrixWorld();let h={geometry:Eg.evaluate(w,p,Zl).geometry,dims:{BW:f,BD:g,H:x,h:o,floorY:_,size:s}};return Es.set(r,h),h}function Cg(i,t,e,n){let r=`F|${n}|${i}|${t}|${e}`;if(Es.has(r))return Es.get(r);let s=Jd(n,t).size,o=jd(i,s),a=jl(i,s,1.12);a.computeBoundingBox();let l=a.boundingBox,u=l.max.x-l.min.x,d=l.max.z-l.min.z,m=l.max.y-l.min.y,f,g;e==="square"?(f=u+1.5,g=d+1.5):(f=u+2.2,g=d+.9);let _=o+.45,A=jl(i,s,1.12);A.rotateX(Math.PI/2),A.translate(0,0,_/2-m/2+.03);let x=new wi(new Fn(f,g,_));x.updateMatrixWorld();let y=new wi(A);y.updateMatrixWorld();let c={geometry:Eg.evaluate(x,y,Zl).geometry,dims:{BW:f,BD:g,BZ:_,h:o,w:u,d}};return Es.set(r,c),c}var QS=Ae("#stage"),Wn=new Xs,Pr=new Qe(45,1,.1,200),pn=new cl({antialias:!0});pn.setPixelRatio(Math.min(window.devicePixelRatio,2));pn.shadowMap.enabled=!0;pn.shadowMap.type=gc;pn.outputColorSpace=rn;QS.appendChild(pn.domElement);Wn.add(new fo(16777215,8952234,.75));var ai=new ss(16777215,1.7);ai.position.set(5,11,7);ai.castShadow=!0;ai.shadow.mapSize.set(1024,1024);ai.shadow.camera.left=-12;ai.shadow.camera.right=12;ai.shadow.camera.top=12;ai.shadow.camera.bottom=-12;ai.shadow.camera.near=1;ai.shadow.camera.far=40;Wn.add(ai);var Rg=new ss(12573183,.4);Rg.position.set(-5,4,-6);Wn.add(Rg);var nh=new me(new zi(8.5,8.5,.35,64),new ki({color:16777215,roughness:.8}));nh.position.y=-.175;nh.receiveShadow=!0;Wn.add(nh);var tf=new me(new zi(8.4,8.8,1.1,64),new ki({color:13421772,roughness:.9}));tf.position.y=-.9;Wn.add(tf);var Cs=new _n,Rs=new _n;Wn.add(Cs);Wn.add(Rs);var Ig=new ki({color:15908971,roughness:.4,metalness:.05}),Yd=[];function Pg(i){Wn.background=new Jt(i.bg),document.body.style.background=i.bg,nh.material.color.set(i.table),tf.material.color.set(i.tableDark),Ig.color.set(i.block),Yd=i.pieces.map(t=>new ki({color:t,roughness:.35,metalness:.05}))}Pg(eh[0]);var ye={theta:.6,phi:1.02,radius:13,target:new D(0,1.1,0)};function Dg(){let i=Math.sin(ye.phi),t=Math.cos(ye.phi);Pr.position.set(ye.target.x+ye.radius*i*Math.sin(ye.theta),ye.target.y+ye.radius*t,ye.target.z+ye.radius*i*Math.cos(ye.theta)),Pr.lookAt(ye.target)}var Xt={questionCount:10,difficulty:Kd[1],choices:3,theme:eh[0],mode:"up",questions:[],qi:0,score:0,totalWrong:0,currentFirst:!0,busy:!1},ef={H:1,BW:2,BD:2},nf={mode:"up"};function rf(i,t,e){let n=th[t.sizes],r=[];for(let s=0;s<i;s++){let o=oi(qd),a=Math.floor(Math.random()*n.length),l=n[a].id,u=$S[o],d=qd.filter(x=>x!==o),m=new Set([o]),f=new Set([a]),g=[],_=0;for(;g.length<e-1&&_++<300;){let x,y,w;if(t.id==="easy"){let p=d.filter(c=>!u.includes(c)&&!m.has(c));x=p.length?oi(p):oi(d.filter(c=>!m.has(c))),y=YS(a,n.length,2),w="wrongshape"}else if(t.id==="normal")x=oi(d.filter(p=>!m.has(p))),y=Math.floor(Math.random()*n.length),w="wrongshape";else if(t.id==="hard"){let p=u.filter(c=>!m.has(c));p.length?(x=oi(p),w="similarshape"):(x=oi(d.filter(c=>!m.has(c))),w="wrongshape"),y=a}else if(t.id==="veryhard"){if(x=o,y=Xd(a,n.length),f.has(y))continue;f.add(y),w=n[y].size>n[a].size*1.12?"toobig":"toosmall"}else if(Math.random()<.5&&u.length){let p=u.filter(c=>!m.has(c));x=p.length?oi(p):oi(u),y=a,w="similarshape"}else{if(x=o,y=Xd(a,n.length),f.has(y))continue;f.add(y),w=n[y].size>n[a].size*1.12?"toobig":"toosmall"}if(x!==o){if(m.has(x))continue;m.add(x)}g.push({shape:x,size:n[y].id,relation:w,correct:!1})}let A=g.concat([{shape:o,size:l,relation:"same",correct:!0}]);XS(A),r.push({answer:{shape:o,size:l,sizeIndex:a},pieces:A,sizesId:t.sizes})}return r}function t1(i,t){let e=Math.min(1.2,(i-1)*.5),n=[];for(let r=0;r<i;r++){let s=-e+2*e*r/(i-1);n.push(new D(Math.sin(s)*t,0,Math.cos(s)*t))}return n}function e1(i,t){let e=i.length,n=[];for(let g=1;g<e;g++)n.push(i[g-1].fw/2+i[g].fw/2+.5);let r=2.1,s=2.2,o=()=>n.map(g=>2*Math.asin(Math.min(.99,g/(2*s)))),a=o(),l=a.reduce((g,_)=>g+_,0),u=0;for(;l>r&&u++<20;)s*=1.15,a=o(),l=a.reduce((g,_)=>g+_,0);let d=l/2,m=[],f=0;for(let g=0;g<e;g++)m.push(new D(Math.sin(f-d)*s,0,t+Math.cos(f-d)*s)),g<e-1&&(f+=a[g]);return m}function n1(){for(let i of[Cs,Rs])for(;i.children.length;){let t=i.children[0];i.remove(t),t.geometry&&t.geometry.dispose()}Ql(null)}function ih(i){n1();let t=i.sizesId,e=Xt.mode==="front",n=e?Cg(i.answer.shape,i.answer.size,Math.random()<.5?"square":"rect",t):Qd(i.answer.shape,i.answer.size,Math.random()<.5?"square":"rect",t),r=n.dims;ef=r;let s=new me(n.geometry,Ig);s.castShadow=!0,s.receiveShadow=!0,s.position.y=e?r.BD/2:r.H/2,Cs.add(s);let o=i.pieces.map(l=>{let u=Mg(l.shape,l.size,t);u.computeBoundingBox();let d=u.boundingBox;return{p:l,fw:d.max.x-d.min.x,fd:d.max.z-d.min.z,h:d.max.y-d.min.y}});nf=e?{mode:"front",pocketY:r.BD/2,mouthZ:r.BZ/2,pocketZ:r.BZ/2-r.h/2-.02,floorY:r.BD/2-r.d/2}:{mode:"up"};let a=e?e1(o,r.BZ/2+.8):t1(i.pieces.length,Math.hypot(r.BW,r.BD)/2+1.45);i.pieces.forEach((l,u)=>{let d=o[u],m=new me(Mg(l.shape,l.size,t),Yd[u%Yd.length]);m.castShadow=!0;let f=a[u];m.userData={piece:l,slot:{x:f.x,z:f.z},pieceHeight:d.h,fw:d.fw,fd:d.fd,correct:l.correct,relation:l.relation},m.position.set(f.x,d.h/2,f.z),m.userData.slotY=d.h/2,Rs.add(m)}),Xt.busy=!1,ye.radius=Xo(Math.max(r.BW,r.BD)*2.6,9.5,20),ye.theta=.6,ye.phi=1.02,ye.target.y=e?r.BD*.45:r.H/2,Xt.currentFirst=!0,i1()}function i1(){Ae("#hud-q").textContent=`\u3082\u3093\u3060\u3044 ${Xt.qi+1} / ${Xt.questionCount}`,Ae("#hud-score").textContent=`\u305B\u3044\u304B\u3044 ${Xt.score}`}var Sg=null;function sf(i,t){let e=Ae("#message");e.textContent=i,e.className="show "+t,clearTimeout(Sg),Sg=setTimeout(()=>{e.className=""},1700)}var Jl=[];function r1(i){let t=new _n,e=26;for(let n=0;n<e;n++){let r=new me(new co(.05+Math.random()*.09),new mi({color:oi(Xt.theme.pieces)}));r.position.copy(i),r.userData.v=new D((Math.random()-.5)*2.2,Math.random()*2.2+1.2,(Math.random()-.5)*2.2),t.add(r)}Wn.add(t),Jl.push({group:t,life:1.1})}function s1(i){for(let t=Jl.length-1;t>=0;t--){let e=Jl[t];e.life-=i;for(let n of e.group.children){n.position.addScaledVector(n.userData.v,i),n.userData.v.y-=3.2*i;let r=Xo(e.life,0,1)*.4+.05;n.scale.setScalar(r)}e.life<=0&&(Wn.remove(e.group),e.group.children.forEach(n=>{n.geometry.dispose(),n.material.dispose()}),Jl.splice(t,1))}}function qo(i,t,e=Ei){return new Promise(n=>{let r=performance.now();function s(){let o=Math.min(1,(performance.now()-r)/i);t(e(o)),o<1?requestAnimationFrame(s):n()}requestAnimationFrame(s)})}function Hn(i,t,e,n,r){return qo(n,s=>i.position.lerpVectors(t,e,s),r)}async function Lg(i,t){ve.thud(),await qo(1e3,e=>{let n=Math.sin(e*Math.PI*6);i.rotation.z=n*.14*Math.sin(e*Math.PI),i.position.y=t.y+Math.abs(n)*.07}),i.rotation.z=0,i.position.y=t.y,ve.wrong(),Xt.currentFirst=!1,Xt.totalWrong++}async function Ng(i,t,e,n,r){i.position.copy(t),ve.clink(),ve.correct();let s=r.mode==="front";r1(new D(0,s?r.pocketY:t.y,s?r.pocketZ:0)),await qo(500,o=>{let a=1+.045*Math.sin(o*Math.PI);Cs.scale.setScalar(a)}),Cs.scale.setScalar(1),sf("\u305B\u3044\u304B\u3044\uFF01","correct"),Xt.currentFirst&&Xt.score++,await Zd(1600),l1()}async function o1(i,t,e,n,r,s){let o=r.H+t.pieceHeight+1.15;ve.whoosh();let a=new D(e.x,o,e.z);await Hn(i,e,a,600,qS);let l=new D(0,o,0);if(await Hn(i,a,l,800,Ei),t.correct){let u=new D(0,r.H-.02-t.pieceHeight/2,0);await Hn(i,l,u,1700,Kl),await Ng(i,u,t,r,s)}else{let u=new D(0,r.H+.12+t.pieceHeight/2,0);await Hn(i,l,u,1400,Kl),await Lg(i,u),sf("\u3053\u306E\u30D6\u30ED\u30C3\u30AF\u3067\u306F\u306A\u3044\u3088","wrong"),await Zd(1500);let d=new D(0,o,0);await Hn(i,u,d,450,Ei),await Hn(i,d,n,650,Ei),Xt.busy=!1}}async function a1(i,t){await qo(380,e=>{i.rotation.x=Math.PI/2*(1-Ei(e))}),i.rotation.x=0,await Hn(i,i.position,t,550,Ei)}async function c1(i,t,e,n,r,s){let o=new D(0,s.pocketY,s.mouthZ+.9);if(ve.whoosh(),await Hn(i,e,o,550,Ei),await qo(380,a=>{i.rotation.x=Math.PI/2*Ei(a)}),i.rotation.x=Math.PI/2,t.correct){let a=new D(0,s.pocketY,s.pocketZ);await Hn(i,o,a,1400,Kl),await Ng(i,a,t,r,s)}else{let a=new D(0,s.pocketY,s.mouthZ+t.pieceHeight/2+.05);await Hn(i,o,a,1200,Kl),await Lg(i,a),sf("\u3053\u306E\u30D6\u30ED\u30C3\u30AF\u3067\u306F\u306A\u3044\u3088","wrong"),await Zd(1500),await Hn(i,a,o,300,Ei),await a1(i,n),Xt.busy=!1}}async function of(i){if(Xt.busy)return;Xt.busy=!0,Ql(null);let t=i.userData,e=ef,n=nf,r=i.position.clone(),s=new D(t.slot.x,t.slotY,t.slot.z);n.mode==="front"?await c1(i,t,r,s,e,n):await o1(i,t,r,s,e,n)}function l1(){if(Xt.qi++,Xt.qi>=Xt.questionCount){h1();return}ih(Xt.questions[Xt.qi])}function h1(){let i=Xt.questionCount,t=Xt.score,e=i?t/i:0,n=Math.round(e*3),r="";for(let o=0;o<3;o++)r+=o<n?"\u2605":"\u2606";Ae("#end-stars").textContent=r,Ae("#end-text").textContent=`${t} \u3082\u3093 \u305B\u3044\u304B\u3044\uFF01 \uFF0F ${i} \u3082\u3093`;let s;t===i?s="\u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\uFF01 \u307B\u3093\u3068\u3046\u306B\u3059\u3054\u3044\uFF01":e>=.8?s="\u3058\u3087\u3046\u305A\uFF01 \u3055\u3044\u3053\u3046\u3060\u3088\uFF01":e>=.5?s="\u3044\u3044\u3061\u3087\u3046\u3057\uFF01 \u3082\u3063\u3068\u3084\u3063\u3066\u307F\u3088\u3046\uFF01":s="\u307E\u3048\u3080\u304D\u306B\u304C\u3093\u3070\u308C\uFF01 \u3064\u304E\u306F\u305C\u3063\u305F\u3044\u305B\u3044\u304B\u3044\uFF01",s+=`\uFF08\u307E\u3061\u304C\u3048\u305F \u304B\u3044\u3059\u3046\uFF1A${Xt.totalWrong}\uFF09`,Ae("#end-msg").textContent=s,Yo("end"),ve.fanfare()}function Yo(i){Ae("#start-screen").classList.toggle("hidden",i!=="start"),Ae("#game-hud").classList.toggle("hidden",i!=="game"),Ae("#hud-hint").classList.toggle("hidden",i!=="game"),Ae("#end-screen").classList.toggle("hidden",i!=="end")}var wg=new mo,Wd=new ht,Ir=null;function Ql(i){Ir!==i&&(Ir&&(Ir.material.emissiveIntensity=0),Ir=i,Ir?(Ir.material.emissive=new Jt(16777215),Ir.material.emissiveIntensity=.22,pn.domElement.style.cursor="pointer"):pn.domElement.style.cursor="default")}function Ug(i){let t=pn.domElement.getBoundingClientRect();Wd.x=(i.clientX-t.left)/t.width*2-1,Wd.y=-((i.clientY-t.top)/t.height)*2+1,wg.setFromCamera(Wd,Pr);let e=wg.intersectObjects(Rs.children,!1);return e.length?e[0].object:null}var Pe={active:!1,moved:!1,x:0,y:0,candidate:null},Ti=new Map,Wo=0;pn.domElement.addEventListener("pointerdown",i=>{if(ve.ensure(),Ti.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ti.size===2){let[t,e]=[...Ti.values()];Wo=Math.hypot(t.x-e.x,t.y-e.y),Pe.moved=!0;return}Pe.active=!0,Pe.moved=!1,Pe.x=i.clientX,Pe.y=i.clientY,Pe.candidate=Xt.busy?null:Ug(i),pn.domElement.setPointerCapture(i.pointerId)});window.addEventListener("pointermove",i=>{if(Ti.has(i.pointerId)&&(Ti.get(i.pointerId).x=i.clientX,Ti.get(i.pointerId).y=i.clientY),Ti.size>=2){let[t,e]=[...Ti.values()],n=Math.hypot(t.x-e.x,t.y-e.y);Wo>0&&(ye.radius=Xo(ye.radius*(Wo/n),4.5,24)),Wo=n,Pe.moved=!0;return}if(Pe.active){let t=i.clientX-Pe.x,e=i.clientY-Pe.y;!Pe.moved&&Math.hypot(t,e)>5&&(Pe.moved=!0),Pe.moved&&(ye.theta-=t*.008,ye.phi=Xo(ye.phi-e*.008,.25,1.5),Pe.x=i.clientX,Pe.y=i.clientY)}else if(!Xt.busy){let t=Ug(i);t&&t.userData&&t.userData.piece?Ql(t):Ql(null)}});function Bg(i){Ti.delete(i.pointerId),Pe.active&&!Pe.moved&&Pe.candidate&&(ve.click(),of(Pe.candidate)),Pe.active=!1,Pe.candidate=null,Wo=0}window.addEventListener("pointerup",Bg);window.addEventListener("pointercancel",Bg);pn.domElement.addEventListener("wheel",i=>{i.preventDefault(),ye.radius=Xo(ye.radius*Math.exp(i.deltaY*.001),4.5,24)},{passive:!1});var nr={count:10,diff:"normal",choices:3,theme:0,mode:"up"};document.querySelectorAll(".opts").forEach(i=>{let t=i.dataset.role;i.addEventListener("click",e=>{let n=e.target.closest("button");n&&(i.querySelectorAll("button").forEach(r=>r.classList.remove("sel")),n.classList.add("sel"),nr[t]=n.dataset.v,ve.click())})});var Ag=Ae('[data-role="theme"]');eh.forEach((i,t)=>{let e=document.createElement("div");e.className="swatch"+(t===0?" sel":""),e.dataset.v=t,e.style.background=i.pieces[0],e.innerHTML=`<div class="sw-name">${i.name}</div>`,e.addEventListener("click",()=>{Ag.querySelectorAll(".swatch").forEach(n=>n.classList.remove("sel")),e.classList.add("sel"),nr.theme=t,document.body.style.background=i.bg,ve.click()}),Ag.appendChild(e)});function u1(){ve.ensure(),ve.pop(),Xt.questionCount=parseInt(nr.count,10),Xt.difficulty=Kd.find(i=>i.id===nr.diff),Xt.choices=parseInt(nr.choices,10),Xt.theme=eh[nr.theme],Xt.mode=nr.mode,Pg(Xt.theme),Xt.questions=rf(Xt.questionCount,Xt.difficulty,Xt.choices),Xt.qi=0,Xt.score=0,Xt.totalWrong=0,Yo("game"),ih(Xt.questions[0]),zg(Xt.difficulty.sizes)}Ae("#btn-start").addEventListener("click",u1);Ae("#btn-sound").addEventListener("click",()=>{ve.enabled=!ve.enabled;let i=Ae("#btn-sound");i.textContent=ve.enabled?"\u304A\u3068":"\u304A\u3068OFF",i.classList.toggle("muted",!ve.enabled),ve.enabled&&ve.click()});Ae("#btn-home").addEventListener("click",()=>{ve.click(),Xt.busy=!0,Yo("start"),Xt.busy=!1});Ae("#btn-retry").addEventListener("click",()=>{ve.ensure(),ve.pop(),Xt.questions=rf(Xt.questionCount,Xt.difficulty,Xt.choices),Xt.qi=0,Xt.score=0,Xt.totalWrong=0,Yo("game"),ih(Xt.questions[0])});Ae("#btn-config").addEventListener("click",()=>{ve.click(),Yo("start")});function Fg(){let i=window.innerWidth,t=window.innerHeight;pn.setSize(i,t),Pr.aspect=i/t,Pr.updateProjectionMatrix()}window.addEventListener("resize",Fg);Fg();Dg();var Tg=performance.now();function Og(){requestAnimationFrame(Og);let i=performance.now(),t=Math.min(.05,(i-Tg)/1e3);Tg=i,Dg(),s1(t),pn.render(Wn,Pr)}Og();var $d=new Map;function zg(i){return $d.get(i)?Promise.resolve():new Promise(t=>{let e=th[i],n=[];for(let s of qd)for(let o of e)for(let a of["square","rect"])n.push([s,o.id,a]);let r=0;(function s(){if(r>=n.length){$d.set(i,!0),t();return}Qd(n[r][0],n[r][1],n[r][2],i),r++,setTimeout(s,0)})()})}zg("normal");Ae("#loading").style.display="none";window.addEventListener("error",i=>{let t=Ae("#errlog");t&&(t.textContent+=(i.message||"error")+`
`)});window.addEventListener("unhandledrejection",i=>{let t=Ae("#errlog");t&&(t.textContent+="REJECT: "+(i.reason&&i.reason.message?i.reason.message:String(i.reason))+`
`)});window.__game={state:Xt,piecesGroup:Rs,blockGroup:Cs,playAnswer:of,buildQuestion:ih,genQuestions:rf,getBlock:Qd,getBlockFront:Cg,currentBlock:()=>ef,layout:()=>nf,camera:Pr,orbit:ye,renderer:pn,selVals:nr,DIFFS:Kd,MODES:ZS,SIZE_TABLES:th,tablesReady:$d};window.__game.selectSlot=i=>{let t=Rs.children[i];return t?(of(t),t.userData.correct):null};var d1=new URLSearchParams(location.search);d1.has("autostart")&&setTimeout(()=>Ae("#btn-start").click(),400);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
