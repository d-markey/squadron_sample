(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.vj(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.q2(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.nN(b)
return new s(c,this)}:function(){if(s===null)s=A.nN(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.nN(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={nc:function nc(){},
rc(a){return new A.cg("Field '"+a+"' has been assigned during initialization.")},
kH(a){return new A.cg("Field '"+a+"' has not been initialized.")},
rd(a){return new A.cg("Field '"+a+"' has already been initialized.")},
bV(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
li(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ea(a,b,c){return a},
nS(a){var s,r
for(s=$.b4.length,r=0;r<s;++r)if(a===$.b4[r])return!0
return!1},
iB(a,b,c,d){A.bD(b,"start")
if(c!=null){A.bD(c,"end")
if(b>c)A.a1(A.aq(b,0,c,"start",null))}return new A.f9(a,b,c,d.m("f9<0>"))},
rf(a,b,c,d){return new A.el(a,b,c.m("@<0>").au(d).m("el<1,2>"))},
p3(a,b,c){var s="count"
if(t.gt.b(a)){A.k6(b,s,t.p)
A.bD(b,s)
return new A.dt(a,b,c.m("dt<0>"))}A.k6(b,s,t.p)
A.bD(b,s)
return new A.bT(a,b,c.m("bT<0>"))},
oC(){return new A.dY("No element")},
oD(){return new A.dY("Too few elements")},
cg:function cg(a){this.a=a},
bh:function bh(a){this.a=a},
mW:function mW(){},
l8:function l8(){},
t:function t(){},
bn:function bn(){},
f9:function f9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eN:function eN(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
cL:function cL(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
fi:function fi(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.$ti=c},
dt:function dt(a,b,c){this.a=a
this.b=b
this.$ti=c},
f6:function f6(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a){this.$ti=a},
en:function en(a){this.$ti=a},
aA:function aA(){},
cm:function cm(){},
e0:function e0(){},
r0(a){if(typeof a=="number")return B.b.gE(a)
if(t.ha.b(a))return A.f1(a)
return A.nU(a)},
r1(a){return new A.km(a)},
q3(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
v9(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
D(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ec(a)
return s},
f1(a){var s,r=$.oY
if(r==null)r=$.oY=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
l_(a){return A.rm(a)},
rm(a){var s,r,q,p
if(a instanceof A.N)return A.aS(A.ai(a),null)
s=J.d9(a)
if(s===B.cv||s===B.cy||t.cx.b(a)){r=B.aG(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aS(A.ai(a),null)},
ru(a){if(typeof a=="number"||A.d5(a))return J.ec(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cd)return a.A(0)
return"Instance of '"+A.l_(a)+"'"},
oX(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
rv(a){var s,r,q,p=A.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.an)(a),++r){q=a[r]
if(!A.fI(q))throw A.f(A.c4(q))
if(q<=65535)B.c.H(p,q)
else if(q<=1114111){B.c.H(p,55296+(B.a.j(q-65536,10)&1023))
B.c.H(p,56320+(q&1023))}else throw A.f(A.c4(q))}return A.oX(p)},
oZ(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.fI(q))throw A.f(A.c4(q))
if(q<0)throw A.f(A.c4(q))
if(q>65535)return A.rv(a)}return A.oX(a)},
rw(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
a2(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.j(s,10)|55296)>>>0,s&1023|56320)}throw A.f(A.aq(a,0,1114111,null,null))},
rx(a,b,c,d,e,f,g,h){var s,r=b-1
if(a<100){a+=400
r-=4800}s=Date.UTC(a,r,c,d,e,f,g)
if(isNaN(s)||s<-864e13||s>864e13)return null
return s},
b1(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
rt(a){return a.b?A.b1(a).getUTCFullYear()+0:A.b1(a).getFullYear()+0},
rr(a){return a.b?A.b1(a).getUTCMonth()+1:A.b1(a).getMonth()+1},
rn(a){return a.b?A.b1(a).getUTCDate()+0:A.b1(a).getDate()+0},
ro(a){return a.b?A.b1(a).getUTCHours()+0:A.b1(a).getHours()+0},
rq(a){return a.b?A.b1(a).getUTCMinutes()+0:A.b1(a).getMinutes()+0},
rs(a){return a.b?A.b1(a).getUTCSeconds()+0:A.b1(a).getSeconds()+0},
rp(a){return a.b?A.b1(a).getUTCMilliseconds()+0:A.b1(a).getMilliseconds()+0},
bf(a){throw A.f(A.c4(a))},
a(a,b){if(a==null)J.bH(a)
throw A.f(A.eb(a,b))},
eb(a,b){var s,r="index"
if(!A.fI(b))return new A.by(!0,b,r,null)
s=A.x(J.bH(a))
if(b<0||b>=s)return A.a8(b,s,a,r)
return new A.f5(null,null,!0,b,r,"Value not in range")},
uT(a,b,c){if(a<0||a>c)return A.aq(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aq(b,a,c,"end",null)
return new A.by(!0,b,"end",null)},
c4(a){return new A.by(!0,a,null,null)},
uO(a){if(!A.fI(a))throw A.f(A.c4(a))
return a},
f(a){var s,r
if(a==null)a=new A.bW()
s=new Error()
s.dartException=a
r=A.vk
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
vk(){return J.ec(this.dartException)},
a1(a){throw A.f(a)},
an(a){throw A.f(A.bK(a))},
bX(a){var s,r,q,p,o,n
a=A.vh(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.lq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
lr(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
p9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
nd(a,b){var s=b==null,r=s?null:b.method
return new A.hL(a,r,s?null:b.receiver)},
b5(a){var s
if(a==null)return new A.kV(a)
if(a instanceof A.ep){s=a.a
return A.cu(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cu(a,a.dartException)
return A.uG(a)},
cu(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
uG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.j(r,16)&8191)===10)switch(q){case 438:return A.cu(a,A.nd(A.D(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.D(s)
return A.cu(a,new A.eS(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.q7()
n=$.q8()
m=$.q9()
l=$.qa()
k=$.qd()
j=$.qe()
i=$.qc()
$.qb()
h=$.qg()
g=$.qf()
f=o.bB(s)
if(f!=null)return A.cu(a,A.nd(A.ax(s),f))
else{f=n.bB(s)
if(f!=null){f.method="call"
return A.cu(a,A.nd(A.ax(s),f))}else{f=m.bB(s)
if(f==null){f=l.bB(s)
if(f==null){f=k.bB(s)
if(f==null){f=j.bB(s)
if(f==null){f=i.bB(s)
if(f==null){f=l.bB(s)
if(f==null){f=h.bB(s)
if(f==null){f=g.bB(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.ax(s)
return A.cu(a,new A.eS(s,f==null?e:f.method))}}}return A.cu(a,new A.iO(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.f8()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.cu(a,new A.by(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.f8()
return a},
aT(a){var s
if(a instanceof A.ep)return a.b
if(a==null)return new A.fz(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.fz(a)},
nU(a){if(a==null||typeof a!="object")return J.c9(a)
else return A.f1(a)},
pW(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
v8(a,b,c,d,e,f){t.gY.a(a)
switch(A.x(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(new A.m7("Unsupported number of arguments for wrapped closure"))},
d7(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.v8)
a.$identity=s
return s},
qK(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iy().constructor.prototype):Object.create(new A.dd(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.of(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.qG(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.of(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
qG(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.qB)}throw A.f("Error in functionType of tearoff")},
qH(a,b,c,d){var s=A.oe
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
of(a,b,c,d){var s,r
if(c)return A.qJ(a,b,d)
s=b.length
r=A.qH(s,d,a,b)
return r},
qI(a,b,c,d){var s=A.oe,r=A.qC
switch(b?-1:a){case 0:throw A.f(new A.iu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
qJ(a,b,c){var s,r
if($.oc==null)$.oc=A.ob("interceptor")
if($.od==null)$.od=A.ob("receiver")
s=b.length
r=A.qI(s,c,a,b)
return r},
nN(a){return A.qK(a)},
qB(a,b){return A.mA(v.typeUniverse,A.ai(a.a),b)},
oe(a){return a.a},
qC(a){return a.b},
ob(a){var s,r,q,p=new A.dd("receiver","interceptor"),o=J.ky(Object.getOwnPropertyNames(p),t.O)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.f(A.dc("Field name "+a+" not found.",null))},
c5(a){if(a==null)A.uI("boolean expression must not be null")
return a},
uI(a){throw A.f(new A.iX(a))},
vj(a){throw A.f(new A.j3(a))},
v1(a){return v.getIsolateTag(a)},
eM(a,b,c){var s=new A.aY(a,b,c.m("aY<0>"))
s.c=a.e
return s},
xd(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
vb(a){var s,r,q,p,o,n=A.ax($.pX.$1(a)),m=$.mO[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mT[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.nI($.pQ.$2(a,n))
if(q!=null){m=$.mO[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.mT[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.mV(s)
$.mO[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.mT[n]=s
return s}if(p==="-"){o=A.mV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.pZ(a,s)
if(p==="*")throw A.f(A.ls(n))
if(v.leafTags[n]===true){o=A.mV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.pZ(a,s)},
pZ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.nT(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
mV(a){return J.nT(a,!1,null,!!a.$iL)},
vd(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.mV(s)
else return J.nT(s,c,null,null)},
v5(){if(!0===$.nR)return
$.nR=!0
A.v6()},
v6(){var s,r,q,p,o,n,m,l
$.mO=Object.create(null)
$.mT=Object.create(null)
A.v4()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.q_.$1(o)
if(n!=null){m=A.vd(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
v4(){var s,r,q,p,o,n,m=B.c6()
m=A.e9(B.c7,A.e9(B.c8,A.e9(B.aH,A.e9(B.aH,A.e9(B.c9,A.e9(B.ca,A.e9(B.cb(B.aG),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.pX=new A.mQ(p)
$.pQ=new A.mR(o)
$.q_=new A.mS(n)},
e9(a,b){return a(b)||b},
uS(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vh(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ei:function ei(){},
cz:function cz(a,b){this.a=a
this.$ti=b},
km:function km(a){this.a=a},
lq:function lq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eS:function eS(a,b){this.a=a
this.b=b},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
kV:function kV(a){this.a=a},
ep:function ep(a,b){this.a=a
this.b=b},
fz:function fz(a){this.a=a
this.b=null},
cd:function cd(){},
fW:function fW(){},
fX:function fX(){},
iD:function iD(){},
iy:function iy(){},
dd:function dd(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
iu:function iu(a){this.a=a},
iX:function iX(a){this.a=a},
b7:function b7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kF:function kF(a){this.a=a},
kE:function kE(a){this.a=a},
kK:function kK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bm:function bm(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
mQ:function mQ(a){this.a=a},
mR:function mR(a){this.a=a},
mS:function mS(a){this.a=a},
c(a){return A.a1(A.kH(a))},
nV(a){return A.a1(A.rd(a))},
q2(a){return A.a1(A.rc(a))},
nA(a){var s=new A.m2(a)
return s.b=s},
m2:function m2(a){this.a=a
this.b=null},
c2(a,b,c){},
J(a){var s,r,q
if(t.iy.b(a))return a
s=J.ae(a)
r=A.am(s.gn(a),null,!1,t.z)
for(q=0;q<s.gn(a);++q)B.c.h(r,q,s.l(a,q))
return r},
rg(a){return new Float32Array(a)},
rh(a,b,c){A.c2(a,b,c)
c=B.a.U(a.byteLength-b,4)
return new Float32Array(a,b,c)},
ri(a){return new Int32Array(a)},
oM(a){return new Int8Array(a)},
oN(a,b,c){A.c2(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
rj(a){return new Uint16Array(a)},
rk(a,b,c){A.c2(a,b,c)
c=B.a.U(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
rl(a){return new Uint32Array(a)},
b_(a,b,c){A.c2(a,b,c)
c=B.a.U(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
kT(a){return new Uint8Array(a)},
Q(a,b,c){A.c2(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
c1(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.eb(b,a))},
bu(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.f(A.uT(a,b,c))
if(b==null)return c
return b},
dO:function dO(){},
ak:function ak(){},
hX:function hX(){},
at:function at(){},
cj:function cj(){},
aZ:function aZ(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
cM:function cM(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
p1(a,b){var s=b.c
return s==null?b.c=A.nH(a,b.y,!0):s},
nr(a,b){var s=b.c
return s==null?b.c=A.fF(a,"bk",[b.y]):s},
p2(a){var s=a.x
if(s===6||s===7||s===8)return A.p2(a.y)
return s===12||s===13},
rz(a){return a.at},
ag(a){return A.jO(v.typeUniverse,a,!1)},
cs(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.cs(a,s,a0,a1)
if(r===s)return b
return A.pw(a,r,!0)
case 7:s=b.y
r=A.cs(a,s,a0,a1)
if(r===s)return b
return A.nH(a,r,!0)
case 8:s=b.y
r=A.cs(a,s,a0,a1)
if(r===s)return b
return A.pv(a,r,!0)
case 9:q=b.z
p=A.fL(a,q,a0,a1)
if(p===q)return b
return A.fF(a,b.y,p)
case 10:o=b.y
n=A.cs(a,o,a0,a1)
m=b.z
l=A.fL(a,m,a0,a1)
if(n===o&&l===m)return b
return A.nF(a,n,l)
case 12:k=b.y
j=A.cs(a,k,a0,a1)
i=b.z
h=A.uA(a,i,a0,a1)
if(j===k&&h===i)return b
return A.pu(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.fL(a,g,a0,a1)
o=b.y
n=A.cs(a,o,a0,a1)
if(f===g&&n===o)return b
return A.nG(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.f(A.fQ("Attempted to substitute unexpected RTI kind "+c))}},
fL(a,b,c,d){var s,r,q,p,o=b.length,n=A.mC(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cs(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
uB(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.mC(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cs(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
uA(a,b,c,d){var s,r=b.a,q=A.fL(a,r,c,d),p=b.b,o=A.fL(a,p,c,d),n=b.c,m=A.uB(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jc()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
pS(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.v3(r)
s=a.$S()
return s}return null},
v7(a,b){var s
if(A.p2(b))if(a instanceof A.cd){s=A.pS(a)
if(s!=null)return s}return A.ai(a)},
ai(a){if(a instanceof A.N)return A.o(a)
if(Array.isArray(a))return A.aQ(a)
return A.nL(J.d9(a))},
aQ(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.nL(a)},
nL(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ue(a,s)},
ue(a,b){var s=a instanceof A.cd?a.__proto__.__proto__.constructor:b,r=A.tV(v.typeUniverse,s.name)
b.$ccache=r
return r},
v3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.jO(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
v2(a){return A.d8(A.o(a))},
uz(a){var s=a instanceof A.cd?A.pS(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.qx(a).a
if(Array.isArray(a))return A.aQ(a)
return A.ai(a)},
d8(a){var s=a.w
return s==null?a.w=A.pE(a):s},
pE(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.jN(a)
s=A.jO(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.pE(s):r},
bw(a){return A.d8(A.jO(v.typeUniverse,a,!1))},
ud(a){var s,r,q,p,o,n=this
if(n===t.K)return A.c3(n,a,A.uj)
if(!A.c6(n))if(!(n===t._))s=!1
else s=!0
else s=!0
if(s)return A.c3(n,a,A.un)
s=n.x
if(s===7)return A.c3(n,a,A.ub)
if(s===1)return A.c3(n,a,A.pI)
r=s===6?n.y:n
s=r.x
if(s===8)return A.c3(n,a,A.uf)
if(r===t.p)q=A.fI
else if(r===t.V||r===t.cZ)q=A.ui
else if(r===t.N)q=A.ul
else q=r===t.v?A.d5:null
if(q!=null)return A.c3(n,a,q)
if(s===9){p=r.y
if(r.z.every(A.va)){n.r="$i"+p
if(p==="k")return A.c3(n,a,A.uh)
return A.c3(n,a,A.um)}}else if(s===11){o=A.uS(r.y,r.z)
return A.c3(n,a,o==null?A.pI:o)}return A.c3(n,a,A.u9)},
c3(a,b,c){a.b=c
return a.b(b)},
uc(a){var s,r=this,q=A.u8
if(!A.c6(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.u1
else if(r===t.K)q=A.u0
else{s=A.fM(r)
if(s)q=A.ua}r.a=q
return r.a(a)},
jZ(a){var s,r=a.x
if(!A.c6(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)if(!(r===6&&A.jZ(a.y)))s=r===8&&A.jZ(a.y)||a===t.P||a===t.u
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
u9(a){var s=this
if(a==null)return A.jZ(s)
return A.ac(v.typeUniverse,A.v7(a,s),null,s,null)},
ub(a){if(a==null)return!0
return this.y.b(a)},
um(a){var s,r=this
if(a==null)return A.jZ(r)
s=r.r
if(a instanceof A.N)return!!a[s]
return!!J.d9(a)[s]},
uh(a){var s,r=this
if(a==null)return A.jZ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.N)return!!a[s]
return!!J.d9(a)[s]},
u8(a){var s,r=this
if(a==null){s=A.fM(r)
if(s)return a}else if(r.b(a))return a
A.pF(a,r)},
ua(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.pF(a,s)},
pF(a,b){throw A.f(A.tK(A.pl(a,A.aS(b,null))))},
pl(a,b){return A.eo(a)+": type '"+A.aS(A.uz(a),null)+"' is not a subtype of type '"+b+"'"},
tK(a){return new A.fD("TypeError: "+a)},
aN(a,b){return new A.fD("TypeError: "+A.pl(a,b))},
uf(a){var s=this
return s.y.b(a)||A.nr(v.typeUniverse,s).b(a)},
uj(a){return a!=null},
u0(a){if(a!=null)return a
throw A.f(A.aN(a,"Object"))},
un(a){return!0},
u1(a){return a},
pI(a){return!1},
d5(a){return!0===a||!1===a},
pz(a){if(!0===a)return!0
if(!1===a)return!1
throw A.f(A.aN(a,"bool"))},
x4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.f(A.aN(a,"bool"))},
x3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.f(A.aN(a,"bool?"))},
tZ(a){if(typeof a=="number")return a
throw A.f(A.aN(a,"double"))},
x6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aN(a,"double"))},
x5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aN(a,"double?"))},
fI(a){return typeof a=="number"&&Math.floor(a)===a},
x(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.f(A.aN(a,"int"))},
x7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.f(A.aN(a,"int"))},
mE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.f(A.aN(a,"int?"))},
ui(a){return typeof a=="number"},
a6(a){if(typeof a=="number")return a
throw A.f(A.aN(a,"num"))},
x8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aN(a,"num"))},
u_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.f(A.aN(a,"num?"))},
ul(a){return typeof a=="string"},
ax(a){if(typeof a=="string")return a
throw A.f(A.aN(a,"String"))},
x9(a){if(typeof a=="string")return a
if(a==null)return a
throw A.f(A.aN(a,"String"))},
nI(a){if(typeof a=="string")return a
if(a==null)return a
throw A.f(A.aN(a,"String?"))},
pN(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aS(a[q],b)
return s},
ur(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.pN(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aS(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
pG(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.c.H(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.a(a5,j)
m=B.l.b9(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.aS(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.aS(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.aS(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.aS(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.aS(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aS(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.aS(a.y,b)
return s}if(l===7){r=a.y
s=A.aS(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.aS(a.y,b)+">"
if(l===9){p=A.uF(a.y)
o=a.z
return o.length>0?p+("<"+A.pN(o,b)+">"):p}if(l===11)return A.ur(a,b)
if(l===12)return A.pG(a,b,null)
if(l===13)return A.pG(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
uF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tW(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
tV(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.jO(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fG(a,5,"#")
q=A.mC(s)
for(p=0;p<s;++p)q[p]=r
o=A.fF(a,b,q)
n[b]=o
return o}else return m},
tT(a,b){return A.px(a.tR,b)},
tS(a,b){return A.px(a.eT,b)},
jO(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ps(A.pq(a,null,b,c))
r.set(b,s)
return s},
mA(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ps(A.pq(a,b,c,!0))
q.set(c,r)
return r},
tU(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.nF(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
c0(a,b){b.a=A.uc
b.b=A.ud
return b},
fG(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bc(null,null)
s.x=b
s.at=c
r=A.c0(a,s)
a.eC.set(c,r)
return r},
pw(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.tP(a,b,r,c)
a.eC.set(r,s)
return s},
tP(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c6(b))r=b===t.P||b===t.u||s===7||s===6
else r=!0
if(r)return b}q=new A.bc(null,null)
q.x=6
q.y=b
q.at=c
return A.c0(a,q)},
nH(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.tO(a,b,r,c)
a.eC.set(r,s)
return s},
tO(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.c6(b))if(!(b===t.P||b===t.u))if(s!==7)r=s===8&&A.fM(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.fM(q.y))return q
else return A.p1(a,b)}}p=new A.bc(null,null)
p.x=7
p.y=b
p.at=c
return A.c0(a,p)},
pv(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.tM(a,b,r,c)
a.eC.set(r,s)
return s},
tM(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c6(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.fF(a,"bk",[b])
else if(b===t.P||b===t.u)return t.gK}q=new A.bc(null,null)
q.x=8
q.y=b
q.at=c
return A.c0(a,q)},
tQ(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bc(null,null)
s.x=14
s.y=b
s.at=q
r=A.c0(a,s)
a.eC.set(q,r)
return r},
fE(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
tL(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
fF(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bc(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.c0(a,r)
a.eC.set(p,q)
return q},
nF(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.fE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bc(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.c0(a,o)
a.eC.set(q,n)
return n},
tR(a,b,c){var s,r,q="+"+(b+"("+A.fE(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bc(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.c0(a,s)
a.eC.set(q,r)
return r},
pu(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fE(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fE(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.tL(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bc(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.c0(a,p)
a.eC.set(r,o)
return o},
nG(a,b,c,d){var s,r=b.at+("<"+A.fE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.tN(a,b,c,r,d)
a.eC.set(r,s)
return s},
tN(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.mC(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.cs(a,b,r,0)
m=A.fL(a,c,r,0)
return A.nG(a,n,m,c!==m)}}l=new A.bc(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.c0(a,l)},
pq(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ps(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.tE(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.pr(a,r,l,k,!1)
else if(q===46)r=A.pr(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.cq(a.u,a.e,k.pop()))
break
case 94:k.push(A.tQ(a.u,k.pop()))
break
case 35:k.push(A.fG(a.u,5,"#"))
break
case 64:k.push(A.fG(a.u,2,"@"))
break
case 126:k.push(A.fG(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.tG(a,k)
break
case 38:A.tF(a,k)
break
case 42:p=a.u
k.push(A.pw(p,A.cq(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.nH(p,A.cq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.pv(p,A.cq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.tD(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.pt(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.tI(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.cq(a.u,a.e,m)},
tE(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
pr(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.tW(s,o.y)[p]
if(n==null)A.a1('No "'+p+'" in "'+A.rz(o)+'"')
d.push(A.mA(s,o,n))}else d.push(p)
return m},
tG(a,b){var s,r=a.u,q=A.pp(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fF(r,p,q))
else{s=A.cq(r,a.e,p)
switch(s.x){case 12:b.push(A.nG(r,s,q,a.n))
break
default:b.push(A.nF(r,s,q))
break}}},
tD(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
if(typeof l=="number")switch(l){case-1:s=b.pop()
r=n
break
case-2:r=b.pop()
s=n
break
default:b.push(l)
r=n
s=r
break}else{b.push(l)
r=n
s=r}q=A.pp(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.cq(m,a.e,l)
o=new A.jc()
o.a=q
o.b=s
o.c=r
b.push(A.pu(m,p,o))
return
case-4:b.push(A.tR(m,b.pop(),q))
return
default:throw A.f(A.fQ("Unexpected state under `()`: "+A.D(l)))}},
tF(a,b){var s=b.pop()
if(0===s){b.push(A.fG(a.u,1,"0&"))
return}if(1===s){b.push(A.fG(a.u,4,"1&"))
return}throw A.f(A.fQ("Unexpected extended operation "+A.D(s)))},
pp(a,b){var s=b.splice(a.p)
A.pt(a.u,a.e,s)
a.p=b.pop()
return s},
cq(a,b,c){if(typeof c=="string")return A.fF(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.tH(a,b,c)}else return c},
pt(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cq(a,b,c[s])},
tI(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cq(a,b,c[s])},
tH(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.f(A.fQ("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.f(A.fQ("Bad index "+c+" for "+b.A(0)))},
ac(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.c6(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.c6(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.ac(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.u
if(s){if(p===8)return A.ac(a,b,c,d.y,e)
return d===t.P||d===t.u||p===7||p===6}if(d===t.K){if(r===8)return A.ac(a,b.y,c,d,e)
if(r===6)return A.ac(a,b.y,c,d,e)
return r!==7}if(r===6)return A.ac(a,b.y,c,d,e)
if(p===6){s=A.p1(a,d)
return A.ac(a,b,c,s,e)}if(r===8){if(!A.ac(a,b.y,c,d,e))return!1
return A.ac(a,A.nr(a,b),c,d,e)}if(r===7){s=A.ac(a,t.P,c,d,e)
return s&&A.ac(a,b.y,c,d,e)}if(p===8){if(A.ac(a,b,c,d.y,e))return!0
return A.ac(a,b,c,A.nr(a,d),e)}if(p===7){s=A.ac(a,b,c,t.P,e)
return s||A.ac(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.gY)return!0
o=r===11
if(o&&d===t.lZ)return!0
if(p===13){if(b===t.et)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.ac(a,j,c,i,e)||!A.ac(a,i,e,j,c))return!1}return A.pH(a,b.y,c,d.y,e)}if(p===12){if(b===t.et)return!0
if(s)return!1
return A.pH(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ug(a,b,c,d,e)}if(o&&p===11)return A.uk(a,b,c,d,e)
return!1},
pH(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ac(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.ac(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ac(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ac(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.ac(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ug(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.mA(a,b,r[o])
return A.py(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.py(a,n,null,c,m,e)},
py(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.ac(a,r,d,q,f))return!1}return!0},
uk(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.ac(a,r[s],c,q[s],e))return!1
return!0},
fM(a){var s,r=a.x
if(!(a===t.P||a===t.u))if(!A.c6(a))if(r!==7)if(!(r===6&&A.fM(a.y)))s=r===8&&A.fM(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
va(a){var s
if(!A.c6(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
c6(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.O},
px(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
mC(a){return a>0?new Array(a):v.typeUniverse.sEA},
bc:function bc(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
jc:function jc(){this.c=this.b=this.a=null},
jN:function jN(a){this.a=a},
j8:function j8(){},
fD:function fD(a){this.a=a},
tu(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.uJ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.d7(new A.lZ(q),1)).observe(s,{childList:true})
return new A.lY(q,s,r)}else if(self.setImmediate!=null)return A.uK()
return A.uL()},
tv(a){self.scheduleImmediate(A.d7(new A.m_(t.M.a(a)),0))},
tw(a){self.setImmediate(A.d7(new A.m0(t.M.a(a)),0))},
tx(a){t.M.a(a)
A.tJ(0,a)},
tJ(a,b){var s=new A.mw()
s.hP(a,b)
return s},
pJ(a){return new A.iY(new A.ab($.a0,a.m("ab<0>")),a.m("iY<0>"))},
pC(a,b){a.$2(0,null)
b.b=!0
return b.a},
nJ(a,b){A.u2(a,b)},
pB(a,b){b.di(0,a)},
pA(a,b){b.e5(A.b5(a),A.aT(a))},
u2(a,b){var s,r,q=new A.mF(b),p=new A.mG(b)
if(a instanceof A.ab)a.fl(q,p,t.z)
else{s=t.z
if(t.c.b(a))a.ed(q,p,s)
else{r=new A.ab($.a0,t.d)
r.a=8
r.c=a
r.fl(q,p,s)}}},
pP(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.a0.fY(new A.mJ(s),t.Y,t.p,t.z)},
wN(a){return new A.e6(a,1)},
pn(){return B.jV},
po(a){return new A.e6(a,3)},
pK(a,b){return new A.fA(a,b.m("fA<0>"))},
k7(a,b){var s=A.ea(a,"error",t.K)
return new A.eg(s,b==null?A.o9(a):b)},
o9(a){var s
if(t.fz.b(a)){s=a.gcY()
if(s!=null)return s}return B.ce},
nB(a,b){var s,r,q
for(s=t.d;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.da()
b.dE(a)
A.e5(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.f9(q)}},
e5(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.c;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.mH(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.e5(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.mH(i.a,i.b)
return}f=$.a0
if(f!==g)$.a0=g
else f=null
b=b.c
if((b&15)===8)new A.mi(p,c,m).$0()
else if(n){if((b&1)!==0)new A.mh(p,i).$0()}else if((b&2)!==0)new A.mg(c,p).$0()
if(f!=null)$.a0=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.m("bk<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.dc(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.nB(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.dc(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
us(a,b){var s
if(t.U.b(a))return b.fY(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.f(A.n1(a,"onError",u.c))},
uq(){var s,r
for(s=$.e8;s!=null;s=$.e8){$.fK=null
r=s.b
$.e8=r
if(r==null)$.fJ=null
s.a.$0()}},
uy(){$.nM=!0
try{A.uq()}finally{$.fK=null
$.nM=!1
if($.e8!=null)$.nY().$1(A.pR())}},
pO(a){var s=new A.iZ(a),r=$.fJ
if(r==null){$.e8=$.fJ=s
if(!$.nM)$.nY().$1(A.pR())}else $.fJ=r.b=s},
ux(a){var s,r,q,p=$.e8
if(p==null){A.pO(a)
$.fK=$.fJ
return}s=new A.iZ(a)
r=$.fK
if(r==null){s.b=p
$.e8=$.fK=s}else{q=r.b
s.b=q
$.fK=r.b=s
if(q==null)$.fJ=s}},
vi(a){var s,r=null,q=$.a0
if(B.q===q){A.d6(r,r,B.q,a)
return}s=!1
if(s){A.d6(r,r,q,t.M.a(a))
return}A.d6(r,r,q,t.M.a(q.fz(a)))},
wr(a,b){A.ea(a,"stream",t.K)
return new A.jB(b.m("jB<0>"))},
mH(a,b){A.ux(new A.mI(a,b))},
pL(a,b,c,d,e){var s,r=$.a0
if(r===c)return d.$0()
$.a0=c
s=r
try{r=d.$0()
return r}finally{$.a0=s}},
pM(a,b,c,d,e,f,g){var s,r=$.a0
if(r===c)return d.$1(e)
$.a0=c
s=r
try{r=d.$1(e)
return r}finally{$.a0=s}},
ut(a,b,c,d,e,f,g,h,i){var s,r=$.a0
if(r===c)return d.$2(e,f)
$.a0=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a0=s}},
d6(a,b,c,d){t.M.a(d)
if(B.q!==c)d=c.fz(d)
A.pO(d)},
lZ:function lZ(a){this.a=a},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
m_:function m_(a){this.a=a},
m0:function m0(a){this.a=a},
mw:function mw(){},
mx:function mx(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=!1
this.$ti=b},
mF:function mF(a){this.a=a},
mG:function mG(a){this.a=a},
mJ:function mJ(a){this.a=a},
e6:function e6(a,b){this.a=a
this.b=b},
cr:function cr(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
fA:function fA(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b){this.a=a
this.b=b},
j0:function j0(){},
d4:function d4(a,b){this.a=a
this.$ti=b},
c_:function c_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ab:function ab(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
m8:function m8(a,b){this.a=a
this.b=b},
mf:function mf(a,b){this.a=a
this.b=b},
mb:function mb(a){this.a=a},
mc:function mc(a){this.a=a},
md:function md(a,b,c){this.a=a
this.b=b
this.c=c},
ma:function ma(a,b){this.a=a
this.b=b},
me:function me(a,b){this.a=a
this.b=b},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
mi:function mi(a,b,c){this.a=a
this.b=b
this.c=c},
mj:function mj(a){this.a=a},
mh:function mh(a,b){this.a=a
this.b=b},
mg:function mg(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a
this.b=null},
dZ:function dZ(){},
lf:function lf(a,b){this.a=a
this.b=b},
lg:function lg(a,b){this.a=a
this.b=b},
jB:function jB(a){this.$ti=a},
fH:function fH(){},
mI:function mI(a,b){this.a=a
this.b=b},
ju:function ju(){},
mr:function mr(a,b){this.a=a
this.b=b},
ms:function ms(a,b,c){this.a=a
this.b=b
this.c=c},
oI(a,b,c,d){var s
if(b==null){if(a==null)return new A.b7(c.m("@<0>").au(d).m("b7<1,2>"))
s=A.pU()}else{if(a==null)a=A.uP()
s=A.pU()}return A.tC(s,a,b,c,d)},
oJ(a,b,c){return b.m("@<0>").au(c).m("ne<1,2>").a(A.pW(a,new A.b7(b.m("@<0>").au(c).m("b7<1,2>"))))},
a_(a,b){return new A.b7(a.m("@<0>").au(b).m("b7<1,2>"))},
tC(a,b,c,d,e){var s=c!=null?c:new A.mq(d)
return new A.fl(a,b,s,d.m("@<0>").au(e).m("fl<1,2>"))},
re(a){return new A.fm(a.m("fm<0>"))},
nD(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
u4(a,b){return J.bg(a,b)},
u5(a){return J.c9(a)},
hQ(a,b,c){var s=A.oI(null,null,b,c)
a.ag(0,new A.kL(s,b,c))
return s},
ng(a){var s,r={}
if(A.nS(a))return"{...}"
s=new A.d_("")
try{B.c.H($.b4,a)
s.a+="{"
r.a=!0
J.o6(a,new A.kO(r,s))
s.a+="}"}finally{if(0>=$.b4.length)return A.a($.b4,-1)
$.b4.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
fl:function fl(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
mq:function mq(a){this.a=a},
fm:function fm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jj:function jj(a){this.a=a
this.b=null},
fn:function fn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
S:function S(){},
kO:function kO(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.$ti=b},
fp:function fp(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
dW:function dW(){},
fw:function fw(){},
rH(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.rI(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
rI(a,b,c,d){var s=a?$.qi():$.qh()
if(s==null)return null
if(0===c&&d===b.length)return A.pb(s,b)
return A.pb(s,b.subarray(c,A.bb(c,d,b.length)))},
pb(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
oH(a,b,c){return new A.eL(a,b)},
u6(a){return a.lJ()},
tA(a,b){return new A.mn(a,[],A.uQ())},
tB(a,b,c){var s,r=new A.d_(""),q=A.tA(r,b)
q.ds(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
tY(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
tX(a,b,c){var s,r,q,p,o=c-b,n=new Uint8Array(o)
for(s=a.length,r=0;r<o;++r){q=b+r
if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)>>>0!==0)p=255
if(!(r<o))return A.a(n,r)
n[r]=p}return n},
lv:function lv(){},
lu:function lu(){},
mz:function mz(){},
my:function my(){},
cw:function cw(){},
h0:function h0(){},
ha:function ha(){},
eL:function eL(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hM:function hM(){},
kG:function kG(a){this.b=a},
mo:function mo(){},
mp:function mp(a,b){this.a=a
this.b=b},
mn:function mn(a,b,c){this.c=a
this.a=b
this.b=c},
hO:function hO(){},
kJ:function kJ(){},
kI:function kI(a){this.a=a},
iR:function iR(){},
lt:function lt(a){this.a=a},
mB:function mB(a){this.a=a
this.b=16
this.c=0},
qP(a,b){a=A.f(a)
if(a==null)a=t.K.a(a)
a.stack=b.A(0)
throw a
throw A.f("unreachable")},
am(a,b,c,d){var s,r=c?J.dL(a,d):J.nb(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hR(a,b,c){var s,r=A.b([],c.m("E<0>"))
for(s=J.bx(a);s.C();)B.c.H(r,c.a(s.gJ(s)))
if(b)return r
return J.ky(r,c)},
B(a,b,c){var s
if(b)return A.oK(a,c)
s=J.ky(A.oK(a,c),c)
return s},
oK(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.m("E<0>"))
s=A.b([],b.m("E<0>"))
for(r=J.bx(a);r.C();)B.c.H(s,r.gJ(r))
return s},
nf(a,b,c){var s,r=J.dL(a,c)
for(s=0;s<a;++s)B.c.h(r,s,b.$1(s))
return r},
kM(a,b){var s=A.hR(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
lh(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.bb(b,c,r)
return A.oZ(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return A.rw(a,b,A.bb(b,c,a.length))
return A.rC(a,b,c)},
rC(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.f(A.aq(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw A.f(A.aq(c,b,a.length,o,o))
r=J.bx(a)
for(q=0;q<b;++q)if(!r.C())throw A.f(A.aq(b,0,q,o,o))
p=[]
if(s)for(;r.C();)p.push(r.gJ(r))
else for(q=b;q<c;++q){if(!r.C())throw A.f(A.aq(c,b,q,o,o))
p.push(r.gJ(r))}return A.oZ(p)},
p5(a,b,c){var s=J.bx(b)
if(!s.C())return a
if(c.length===0){do a+=A.D(s.gJ(s))
while(s.C())}else{a+=A.D(s.gJ(s))
for(;s.C();)a=a+c+A.D(s.gJ(s))}return a},
bs(){var s,r
if(A.c5($.qp()))return A.aT(new Error())
try{throw A.f("")}catch(r){s=A.aT(r)
return s}},
qM(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.a1(A.dc("DateTime is outside valid range: "+a,null))
A.ea(!0,"isUtc",t.v)
return new A.bA(a,!0)},
qN(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qO(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
h5(a){if(a>=10)return""+a
return"0"+a},
oh(a){return new A.h9(1000*a)},
eo(a){if(typeof a=="number"||A.d5(a)||a==null)return J.ec(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ru(a)},
fQ(a){return new A.ef(a)},
dc(a,b){return new A.by(!1,null,b,a)},
n1(a,b,c){return new A.by(!0,a,b,c)},
k6(a,b,c){return a},
aq(a,b,c,d,e){return new A.f5(b,c,!0,a,d,"Invalid value")},
bb(a,b,c){if(0>a||a>c)throw A.f(A.aq(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.aq(b,a,c,"end",null))
return b}return c},
bD(a,b){if(a<0)throw A.f(A.aq(a,0,null,b,null))
return a},
a8(a,b,c,d){return new A.hq(b,!0,a,d,"Index out of range")},
O(a){return new A.iP(a)},
ls(a){return new A.iN(a)},
ns(a){return new A.dY(a)},
bK(a){return new A.h_(a)},
ok(a,b,c){return new A.hi(a,b,c)},
r9(a,b,c){var s,r
if(A.nS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.c.H($.b4,a)
try{A.uo(a,s)}finally{if(0>=$.b4.length)return A.a($.b4,-1)
$.b4.pop()}r=A.p5(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
n9(a,b,c){var s,r
if(A.nS(a))return b+"..."+c
s=new A.d_(b)
B.c.H($.b4,a)
try{r=s
r.a=A.p5(r.a,a,", ")}finally{if(0>=$.b4.length)return A.a($.b4,-1)
$.b4.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
uo(a,b){var s,r,q,p,o,n,m,l=a.gF(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.C())return
s=A.D(l.gJ(l))
B.c.H(b,s)
k+=s.length+2;++j}if(!l.C()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gJ(l);++j
if(!l.C()){if(j<=4){B.c.H(b,A.D(p))
return}r=A.D(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gJ(l);++j
for(;l.C();p=o,o=n){n=l.gJ(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.c.H(b,"...")
return}}q=A.D(p)
r=A.D(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.H(b,m)
B.c.H(b,q)
B.c.H(b,r)},
nh(a,b,c,d){var s,r
if(B.W===c){s=B.b.gE(a)
b=B.b.gE(b)
return A.li(A.bV(A.bV($.k3(),s),b))}if(B.W===d){s=B.b.gE(a)
b=B.b.gE(b)
c=J.c9(c)
return A.li(A.bV(A.bV(A.bV($.k3(),s),b),c))}s=B.b.gE(a)
b=B.b.gE(b)
c=J.c9(c)
d=J.c9(d)
r=$.k3()
return A.li(A.bV(A.bV(A.bV(A.bV(r,s),b),c),d))},
r(a){var s,r,q=$.k3()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.an)(a),++r)q=A.bV(q,J.c9(a[r]))
return A.li(q)},
bA:function bA(a,b){this.a=a
this.b=b},
h9:function h9(a){this.a=a},
m3:function m3(){},
W:function W(){},
ef:function ef(a){this.a=a},
bW:function bW(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f5:function f5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hq:function hq(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iP:function iP(a){this.a=a},
iN:function iN(a){this.a=a},
dY:function dY(a){this.a=a},
h_:function h_(a){this.a=a},
i5:function i5(){},
f8:function f8(){},
m7:function m7(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
F:function F(){},
aa:function aa(){},
N:function N(){},
jE:function jE(){},
d_:function d_(a){this.a=a},
m5(a,b,c,d,e){var s=A.uH(new A.m6(c),t.fq)
if(s!=null&&!0)J.qr(a,b,s,!1)
return new A.fk(a,b,s,!1,e.m("fk<0>"))},
uH(a,b){var s=$.a0
if(s===B.q)return a
return s.ku(a,b)},
w:function w(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
cb:function cb(){},
bz:function bz(){},
h1:function h1(){},
T:function T(){},
dr:function dr(){},
kd:function kd(){},
ay:function ay(){},
bi:function bi(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
ds:function ds(){},
h6:function h6(){},
ej:function ej(){},
ek:function ek(){},
h7:function h7(){},
h8:function h8(){},
v:function v(){},
p:function p(){},
j:function j(){},
az:function az(){},
dw:function dw(){},
hg:function hg(){},
hh:function hh(){},
aC:function aC(){},
hk:function hk(){},
cA:function cA(){},
dD:function dD(){},
hS:function hS(){},
hT:function hT(){},
bR:function bR(){},
ci:function ci(){},
hU:function hU(){},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
hV:function hV(){},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
aE:function aE(){},
hW:function hW(){},
K:function K(){},
eR:function eR(){},
aF:function aF(){},
ib:function ib(){},
it:function it(){},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
iv:function iv(){},
dX:function dX(){},
aH:function aH(){},
iw:function iw(){},
aI:function aI(){},
ix:function ix(){},
aJ:function aJ(){},
iz:function iz(){},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
au:function au(){},
aK:function aK(){},
av:function av(){},
iE:function iE(){},
iF:function iF(){},
iJ:function iJ(){},
aM:function aM(){},
iK:function iK(){},
iL:function iL(){},
iQ:function iQ(){},
iV:function iV(){},
cp:function cp(){},
j1:function j1(){},
fj:function fj(){},
jd:function jd(){},
fq:function fq(){},
jy:function jy(){},
jG:function jG(){},
n3:function n3(a){this.$ti=a},
m4:function m4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fk:function fk(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
m6:function m6(a){this.a=a},
y:function y(){},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
j2:function j2(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
ja:function ja(){},
jb:function jb(){},
je:function je(){},
jf:function jf(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
js:function js(){},
jt:function jt(){},
jv:function jv(){},
fx:function fx(){},
fy:function fy(){},
jw:function jw(){},
jx:function jx(){},
jA:function jA(){},
jH:function jH(){},
jI:function jI(){},
fB:function fB(){},
fC:function fC(){},
jJ:function jJ(){},
jK:function jK(){},
jP:function jP(){},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
jT:function jT(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
jX:function jX(){},
jY:function jY(){},
pD(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.d5(a))return a
if(A.pY(a))return A.ct(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.pD(a[q]));++q}return r}return a},
ct(a){var s,r,q,p,o,n
if(a==null)return null
s=A.a_(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.an)(r),++p){o=r[p]
n=o
n.toString
s.h(0,n,A.pD(a[o]))}return s},
pY(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
mt:function mt(){},
mu:function mu(a,b){this.a=a
this.b=b},
mv:function mv(a,b){this.a=a
this.b=b},
lW:function lW(){},
lX:function lX(a,b){this.a=a
this.b=b},
jF:function jF(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b
this.c=!1},
vf(a,b){var s=new A.ab($.a0,b.m("ab<0>")),r=new A.d4(s,b.m("d4<0>"))
a.then(A.d7(new A.mX(r,b),1),A.d7(new A.mY(r),1))
return s},
mX:function mX(a,b){this.a=a
this.b=b},
mY:function mY(a){this.a=a},
kU:function kU(a){this.a=a},
aX:function aX(){},
hP:function hP(){},
b0:function b0(){},
i3:function i3(){},
ig:function ig(){},
iA:function iA(){},
b2:function b2(){},
iM:function iM(){},
jh:function jh(){},
ji:function ji(){},
jq:function jq(){},
jr:function jr(){},
jC:function jC(){},
jD:function jD(){},
jL:function jL(){},
jM:function jM(){},
fR:function fR(){},
fS:function fS(){},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
fT:function fT(){},
ca:function ca(){},
i4:function i4(){},
j_:function j_(){},
ed(a){return new A.k5(a,null,null)},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
cJ(a,b,c,d){var s,r
if(t.jv.b(a))s=A.Q(a.buffer,a.byteOffset,a.byteLength)
else s=t.L.b(a)?a:A.hR(t.R.a(a),!0,t.p)
r=new A.hs(s,d,d,b)
r.e=c==null?s.length:c
return r},
ht:function ht(){},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$},
kX(a,b){var s=b==null?32768:b
return new A.kW(a,new Uint8Array(s))},
kY:function kY(){},
kW:function kW(a,b){this.a=0
this.b=a
this.c=b},
mD:function mD(){},
og(a,b,c,d){var s,r=b*2,q=a.length
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
s=c*2
if(!(s>=0&&s<q))return A.a(a,s)
s=a[s]
if(r>=s)if(r===s){if(!(b>=0&&b<573))return A.a(d,b)
r=d[b]
if(!(c>=0&&c<573))return A.a(d,c)
r=r<=d[c]}else r=!1
else r=!0
return r},
nC(){return new A.mk()},
ty(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
for(s=0,r=1;r<=15;++r){s=s+c[r-1]<<1>>>0
if(!(r<16))return A.a(l,r)
l[r]=s}for(q=a.length,p=0;p<=b;++p){o=p*2
n=o+1
if(!(n<q))return A.a(a,n)
m=a[n]
if(m===0)continue
if(!(m>=0&&m<16))return A.a(l,m)
n=l[m]
if(!(m<16))return A.a(l,m)
l[m]=n+1
n=A.tz(n,m)
if(!(o<q))return A.a(a,o)
a[o]=n}},
tz(a,b){var s,r=0
do{s=A.aR(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.aR(r,1)},
pm(a){var s
if(a<256){if(!(a>=0))return A.a(B.ad,a)
s=B.ad[a]}else{s=256+A.aR(a,7)
if(!(s<512))return A.a(B.ad,s)
s=B.ad[s]}return s},
nE(a,b,c,d,e){return new A.jz(a,b,c,d,e)},
aR(a,b){if(a>=0)return B.a.aO(a,b)
else return B.a.aO(a,b)+B.a.O(2,(~b>>>0)+65536&65535)},
kf:function kf(a,b,c,d,e,f,g,h){var _=this
_.b=_.a=0
_.c=a
_.d=b
_.e=null
_.x=_.w=_.r=_.f=$
_.y=2
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=$
_.k2=0
_.p4=_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=$
_.R8=c
_.RG=d
_.rx=e
_.ry=f
_.to=g
_.x2=_.x1=$
_.xr=h
_.b5=_.b4=_.bK=_.bU=_.bJ=_.aR=_.bh=_.aQ=_.y2=_.y1=$},
be:function be(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mk:function mk(){this.c=this.b=this.a=$},
jz:function jz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dy(a){var s=new A.ko()
s.hy(a)
return s},
ko:function ko(){this.a=$
this.b=0
this.c=2147483647},
oz(a){var s=A.dy(B.b8),r=A.dy(B.bi)
r=new A.hr(A.cJ(a,0,null,0),A.kX(0,null),s,r)
r.b=!0
r.eW()
return r},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=!1
_.c=b
_.e=_.d=0
_.r=c
_.w=d},
lU:function lU(){},
lT:function lT(){},
lV:function lV(){},
kc:function kc(a,b){this.a=a
this.b=b},
Y:function Y(a){this.a=-1
this.b=a},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
dm:function dm(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
qL(a,b,c,d){var s=new A.eh(new Uint8Array(4))
s.ht(a,b,c,d)
return s},
bJ:function bJ(a){this.a=a},
fY:function fY(a){this.a=a},
eh:function eh(a){this.a=a},
nP(a,b,c){var s
if(b===c)return a
switch(b.a){case 0:if(a===0)s=0
else{s=B.bC.l(0,c)
s.toString}return s
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.x(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.x(a),6)
case 2:return B.a.j(A.x(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.j(A.x(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.x(a),14)
case 2:return B.a.j(A.x(a),12)
case 3:return B.a.j(A.x(a),8)
case 4:return a
case 5:return A.x(a)<<8>>>0
case 6:return B.a.j(A.x(a),9)
case 7:return B.a.j(A.x(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.x(a),30)
case 2:return B.a.j(A.x(a),28)
case 3:return B.a.j(A.x(a),24)
case 4:return B.a.j(A.x(a),16)
case 5:return a
case 6:return B.a.j(A.x(a),25)
case 7:return B.a.j(A.x(a),17)
case 8:return B.a.j(A.x(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.x(a),5)
case 2:return a<=0?0:B.a.j(A.x(a),3)
case 3:return a<=0?0:A.x(a)<<1>>>0
case 4:return a<=0?0:A.x(a)*516
case 5:return a<=0?0:A.x(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.x(a),15)
case 2:return a<=0?0:B.a.j(A.x(a),11)
case 3:return a<=0?0:B.a.j(A.x(a),7)
case 4:return a<=0?0:A.x(a)<<1>>>0
case 5:return a<=0?0:A.x(a)*131076
case 6:return B.a.j(A.x(a),8)
case 7:return a
case 8:return A.x(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.x(a),29)
case 2:return a<=0?0:B.a.j(A.x(a),27)
case 3:return a<=0?0:B.a.j(A.x(a),23)
case 4:return a<=0?0:B.a.j(A.x(a),16)
case 5:return a<=0?0:A.x(a)<<1>>>0
case 6:return B.a.j(A.x(a),24)
case 7:return B.a.j(A.x(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.i(B.b.I(a,0,1)*3)
case 2:return B.b.i(B.b.I(a,0,1)*15)
case 3:return B.b.i(B.b.I(a,0,1)*255)
case 4:return B.b.i(B.b.I(a,0,1)*65535)
case 5:return B.b.i(B.b.I(a,0,1)*4294967295)
case 6:return B.b.i(a<0?B.b.I(a,-1,1)*128:B.b.I(a,-1,1)*127)
case 7:return B.b.i(a<0?B.b.I(a,-1,1)*32768:B.b.I(a,-1,1)*32767)
case 8:return B.b.i(a<0?B.b.I(a,-1,1)*2147483648:B.b.I(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
aB:function aB(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
eq(a){var s=new A.du(A.a_(t.N,t.a))
s.hz(a)
return s},
du:function du(a){this.a=a},
j9:function j9(a,b){this.a=a
this.b=b},
i(a,b,c){return new A.hb(a,b)},
hb:function hb(a,b){this.a=a
this.b=b},
bN:function bN(a){this.a=a},
kr:function kr(a){this.a=a},
op(a){var s=new A.bB(A.a_(t.p,t.r),new A.bN(A.a_(t.N,t.a)))
s.kG(a)
return s},
bB:function bB(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ow(a,b){var s=new A.cI(new Uint16Array(b))
s.hE(a,b)
return s},
or(a,b){var s=new A.cD(new Uint32Array(b))
s.hB(a,b)
return s},
os(a,b){var s,r=J.na(b,t.i)
for(s=0;s<b;++s)r[s]=new A.dV(a.k(),a.k())
return new A.cE(r)},
ov(a,b){var s=new A.cH(new Int16Array(b))
s.hD(a,b)
return s},
ot(a,b){var s=new A.cF(new Int32Array(b))
s.hC(a,b)
return s},
ou(a,b){var s,r,q,p,o=J.na(b,t.i)
for(s=0;s<b;++s){r=a.k()
q=$.X()
q[0]=r
r=$.ao()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.k()
if(0>=r.length)return A.a(r,0)
o[s]=new A.dV(p,r[0])}return new A.cG(o)},
ox(a,b){var s=new A.dB(new Float32Array(b))
s.hF(a,b)
return s},
oq(a,b){var s=new A.dA(new Float64Array(b))
s.hA(a,b)
return s},
aw:function aw(a,b){this.a=a
this.b=b},
aj:function aj(){},
bM:function bM(a){this.a=a},
cC:function cC(a){this.a=a},
cI:function cI(a){this.a=a},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
cf:function cf(a){this.a=a},
cH:function cH(a){this.a=a},
cF:function cF(a){this.a=a},
cG:function cG(a){this.a=a},
dB:function dB(a){this.a=a},
dA:function dA(a){this.a=a},
dC:function dC(a){this.a=a},
oa(a){var s,r,q=new A.kb()
if(!A.n2(a))A.a1(A.q("Not a bitmap file."))
a.d+=2
s=a.k()
r=$.X()
r[0]=s
s=$.ao()
if(0>=s.length)return A.a(s,0)
a.d+=4
r[0]=a.k()
if(0>=s.length)return A.a(s,0)
q.b=s[0]
return q},
n2(a){if(a.c-a.d<2)return!1
return A.u(a,null,0).p()===19778},
qA(a,b){var s,r,q,p,o,n=b==null?A.oa(a):b,m=a.d,l=a.k(),k=a.k(),j=$.X()
j[0]=k
k=$.ao()
if(0>=k.length)return A.a(k,0)
s=k[0]
j[0]=a.k()
if(0>=k.length)return A.a(k,0)
r=k[0]
q=a.p()
p=a.p()
o=a.k()
if(!(o<14))return A.a(B.a8,o)
o=B.a8[o]
a.k()
j[0]=a.k()
if(0>=k.length)return A.a(k,0)
j[0]=a.k()
if(0>=k.length)return A.a(k,0)
k=a.k()
a.k()
m=new A.bI(n,s,r,l,q,p,o,k,m)
m.ej(a,b)
return m},
ar:function ar(a,b){this.a=a
this.b=b},
kb:function kb(){this.b=$},
bI:function bI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
fV:function fV(a){this.a=$
this.b=null
this.c=a},
ka:function ka(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kg:function kg(a){this.a=$
this.b=null
this.c=a},
ke:function ke(){},
kh:function kh(){},
hc:function hc(){},
eG:function eG(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
dv:function dv(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
hd:function hd(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
oi(a,b,c,d){var s,r
switch(a.a){case 1:return new A.hz(c,b)
case 2:return new A.eH(c,d==null?1:d,b)
case 3:return new A.eH(c,d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.hx(c,s,b)
r.hI(b,c,s)
return r
case 5:return new A.hy(c,d==null?16:d,b)
case 6:return new A.eG(c,d==null?32:d,!1,b)
case 7:return new A.eG(c,d==null?32:d,!0,b)
default:throw A.f(A.q("Invalid compression type: "+a.A(0)))}},
bj:function bj(a,b){this.a=a
this.b=b},
bL:function bL(){},
hv:function hv(){},
qT(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.f(A.q("Incomplete huffman data"))
return}s=a.d
r=a.k()
q=a.k()
a.d+=4
p=a.k()
if(r<65537)o=q>=65537
else o=!0
if(o)throw A.f(A.q("Invalid huffman table size"))
a.d+=4
n=A.am(65537,0,!1,t.p)
m=J.aD(16384,t.ho)
for(l=0;l<16384;++l)m[l]=new A.he()
A.qU(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.f(A.q("Error in header for Huffman-encoded data (invalid number of bits)."))
A.qQ(n,r,q,m)
A.qS(n,m,a,p,q,d,c)},
qS(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.b([0,0],t.t),h=c.d+B.a.U(d+7,8)
for(s=b.length,r=0;c.d<h;){A.n4(i,c)
for(;q=i[1],q>=14;){p=B.a.aO(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.n5(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.f(A.q(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
while(!0){q=i[1]
if(!(q<m&&c.d<h))break
A.n4(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.aO(i[0],q)&B.a.O(1,m)-1)>>>0){B.c.h(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.n5(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.f(A.q(j))}}}k=8-d&7
B.c.h(i,0,B.a.j(i[0],k))
B.c.h(i,1,i[1]-k)
for(;q=i[1],q>0;){p=B.a.W(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.h(i,1,q-p)
r=A.n5(o.b,e,i,c,g,r,f)}else throw A.f(A.q(j))}if(r!==f)throw A.f(A.q("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
n5(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.n4(c,d)
B.c.h(c,1,c[1]-8)
s=B.a.aO(c[0],c[1])&255
if(f+s>g)throw A.f(A.q(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(;o=s-1,s>0;s=o,f=n){n=f+1
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){n=f+1
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.f(A.q(m))
f=n}return f},
qQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t,q=t.p;b<=c;++b){if(!(b<65537))return A.a(a,b)
p=a[b]
o=p>>>6
n=p&63
if(B.a.a4(o,n)!==0)throw A.f(A.q(i))
if(n>14){p=B.a.Z(o,n-14)
if(!(p<s))return A.a(d,p)
m=d[p]
if(m.a!==0)throw A.f(A.q(i))
p=++m.b
l=m.c
if(l!=null){m.sfU(A.am(p,0,!1,q))
for(k=0;k<m.b-1;++k){p=m.c
p.toString
if(!(k<l.length))return A.a(l,k)
B.c.h(p,k,l[k])}}else m.sfU(A.b([0],r))
p=m.c
p.toString
B.c.h(p,m.b-1,b)}else if(n!==0){p=14-n
j=B.a.W(o,p)
if(!(j<s))return A.a(d,j)
for(k=B.a.W(1,p);k>0;--k,++j){if(!(j<s))return A.a(d,j)
m=d[j]
if(m.a!==0||m.c!=null)throw A.f(A.q(i))
m.a=n
m.b=b}}}},
qU(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.b([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.f(A.q(n))
r=A.oj(6,k,a)
B.c.h(e,c,r)
if(r===63){if(a.d-l>b)throw A.f(A.q(n))
q=A.oj(8,k,a)+6
if(c+q>s)throw A.f(A.q(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.f(A.q(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.h(e,c,0)}--c}}A.qR(e)},
qR(a){var s,r,q,p,o,n=A.am(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.c.h(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.c.h(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.c.h(n,o,r+1)
B.c.h(a,s,(o|r<<6)>>>0)}}},
n4(a,b){B.c.h(a,0,((a[0]<<8|b.B())&-1)>>>0)
B.c.h(a,1,(a[1]+8&-1)>>>0)},
oj(a,b,c){var s,r,q
for(;s=b[1],s<a;){s=b[0]
r=c.a
q=c.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
B.c.h(b,0,((s<<8|r[q])&-1)>>>0)
B.c.h(b,1,(b[1]+8&-1)>>>0)}B.c.h(b,1,s-a)
return(B.a.aO(b[0],b[1])&B.a.O(1,a)-1)>>>0},
he:function he(){this.b=this.a=0
this.c=null},
qV(a){var s=A.C(a,!1,null,0)
if(s.k()!==20000630)return!1
if(s.B()!==2)return!1
if((s.bo()&4294967289)>>>0!==0)return!1
return!0},
hf:function hf(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
oA(a,b,c){var s=new A.hw(a,A.b([],t.a_),A.a_(t.N,t.iW),B.aO,b)
s.hw(a,b,c,{})
return s},
er:function er(){},
kj:function kj(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.d=0
_.e=c
_.r=$
_.x=_.w=0
_.at=$
_.ax=d
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=e
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
hx:function hx(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
fv:function fv(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
hy:function hy(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
hz:function hz(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
eH:function eH(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
ki:function ki(){this.a=null},
ol(a){var s=new Uint8Array(a*3)
return new A.ev(A.r3(a),a,null,new A.b9(s,a,3))},
r2(a){return new A.ev(a.a,a.b,a.c,A.oO(a.d))},
r3(a){var s
for(s=1;s<=8;++s)if(B.a.O(1,s)>=a)return s
return 0},
ev:function ev(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(){},
hA:function hA(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=!0
_.x=$},
ex:function ex(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
kn:function kn(){var _=this
_.a=null
_.e=_.d=_.c=_.b=0
_.f=null
_.r=0
_.w=null
_.y=_.x=$
_.z=null
_.Q=0
_.as=null
_.ay=_.ax=_.at=0
_.ch=null
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=0},
oo(a){var s,r,q,p,o,n,m,l
if(a.p()!==0)return null
s=a.p()
if(s>=3)return null
if(B.fj[s]===B.aP)return null
r=a.p()
q=J.na(r,t.aw)
for(p=0;p<r;++p){o=a.a
n=a.d
m=a.d=n+1
l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=a.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=n+1
a.d=m
if(!(n>=0&&n<l))return A.a(o,n)
a.d=m+1
a.p()
a.p()
q[p]=new A.ho(a.k(),a.k())}return new A.hn(r,q)},
dz:function dz(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.d=a
this.e=b},
ho:function ho(a,b){this.d=a
this.e=b},
hm:function hm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
kq:function kq(){this.b=this.a=null},
fZ:function fZ(a,b,c){this.e=a
this.f=b
this.r=c},
ce:function ce(){},
cB:function cB(a){this.a=a},
ey:function ey(a){this.a=a},
kA:function kA(){this.d=null},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.y=_.x=_.w=_.r=_.f=_.e=$},
oG(){var s=A.am(4,null,!1,t.jH),r=A.b([],t.gU),q=t.iM,p=J.dL(0,q)
q=J.dL(0,q)
return new A.kB(new A.du(A.a_(t.N,t.a)),s,r,p,q,A.b([],t.an))},
kB:function kB(a,b,c,d,e,f){var _=this
_.b=_.a=$
_.e=_.d=_.c=null
_.r=a
_.w=b
_.x=c
_.y=d
_.z=e
_.Q=f},
kC:function kC(a,b){this.a=a
this.b=b},
e7:function e7(a){this.a=a
this.b=0},
hJ:function hJ(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
kD:function kD(){this.r=this.f=$},
hK:function hK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.cx=_.CW=_.ch=_.ay=0
_.cy=$},
hI:function hI(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
f0:function f0(){},
hB:function hB(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
oB(){var s=t.N
return new A.hC(A.a_(s,s),A.b([],t.fi),A.b([],t.t))},
ck:function ck(a,b){this.a=a
this.b=b},
ie:function ie(){},
hC:function hC(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.ay=1
_.CW=b
_.cx=c},
ic:function ic(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
id:function id(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null},
ih:function ih(){this.a=null},
ii:function ii(){this.a=null},
bC:function bC(){},
il:function il(){this.a=null},
im:function im(){this.a=null},
ip:function ip(){this.a=null},
iq:function iq(){this.a=null},
f3:function f3(a){this.b=a},
io:function io(){},
l0:function l0(){var _=this
_.w=_.r=_.f=_.e=$},
cZ:function cZ(a){this.a=a
this.c=$},
p_(a){var s=new A.ij(A.a_(t.p,t.ok))
s.hK(a)
return s},
nm(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.b.i(B.b.I((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
l2(a,b){if(b===0)return 0
return B.b.i(B.a.I(B.b.i(255*(1-(1-a/255)/(b/255))),0,255))},
l4(a,b){return B.b.i(B.a.I(a+b-255,0,255))},
no(a,b){return B.b.i(B.a.I(255-(255-b)*(255-a),0,255))},
l3(a,b){if(b===255)return 255
return B.b.i(B.b.I(a/255/(1-b/255)*255,0,255))},
np(a,b){var s=a/255,r=b/255,q=1-r
return B.b.c3(255*(q*r*s+r*(1-q*(1-s))))},
nk(a,b){var s=b/255,r=a/255
if(r<0.5)return B.b.c3(510*s*r)
else return B.b.c3(255*(1-2*(1-s)*(1-r)))},
nq(a,b){if(b<128)return A.l2(a,2*b)
else return A.l3(a,2*(b-128))},
nl(a,b){var s
if(b<128)return A.l4(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
nn(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
nj(a,b){return B.b.c3(b+a-2*b*a/255)},
p0(c2,c3,c4,c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0="data",c1=A.a_(t.p,t.dS)
for(s=c6.length,r=0;q=c6.length,r<q;c6.length===s||(0,A.an)(c6),++r){p=c6[r]
c1.h(0,p.a,p)}if(c3===8)o=1
else o=c3===16?2:-1
n=A.a5(b9,b9,B.e,0,B.h,c5,b9,0,q,b9,c4,!1)
if(o===-1)throw A.f(A.q("PSD: unsupported bit depth: "+A.D(c3)))
m=c1.l(0,0)
l=c1.l(0,1)
k=c1.l(0,2)
j=c1.l(0,-1)
i=-o
for(s=n.a,s=s.gF(s),h=q>=5,g=o===1,f=q===4,e=q>=2,q=q>=4;s.C();){d=s.gJ(s)
i+=o
switch(c2){case B.bK:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}d.sq(0,c)
c=l.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}d.st(c)
c=k.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}d.sv(0,c)
if(q){c=j.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}}else c=255
d.su(0,c)
if(d.gu(d)!==0){d.sq(0,(d.gq(d)+d.gu(d)-255)*255/d.gu(d))
d.st((d.gt()+d.gu(d)-255)*255/d.gu(d))
d.sv(0,(d.gv(d)+d.gu(d)-255)*255/d.gu(d))}break
case B.bM:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
c=a0}b=l.c
b===$&&A.c(c0)
a=b.length
if(g){if(!(i>=0&&i<a))return A.a(b,i)
b=b[i]}else{if(!(i>=0&&i<a))return A.a(b,i)
a0=b[i]
a1=i+1
if(!(a1<a))return A.a(b,a1)
a1=(a0<<8|b[a1])>>>8
b=a1}a=k.c
a===$&&A.c(c0)
a0=a.length
if(g){if(!(i>=0&&i<a0))return A.a(a,i)
a=a[i]}else{if(!(i>=0&&i<a0))return A.a(a,i)
a1=a[i]
a2=i+1
if(!(a2<a0))return A.a(a,a2)
a2=(a1<<8|a[a2])>>>8
a=a2}if(q){a0=j.c
a0===$&&A.c(c0)
a1=a0.length
if(g){if(!(i>=0&&i<a1))return A.a(a0,i)
a0=a0[i]
a3=a0}else{if(!(i>=0&&i<a1))return A.a(a0,i)
a2=a0[i]
a4=i+1
if(!(a4<a1))return A.a(a0,a4)
a4=(a2<<8|a0[a4])>>>8
a3=a4}}else a3=255
a5=((c*100>>>8)+16)/116
a6=(b-128)/500+a5
a7=a5-(a-128)/200
a8=Math.pow(a5,3)
a5=a8>0.008856?a8:(a5-0.13793103448275862)/7.787
a9=Math.pow(a6,3)
a6=a9>0.008856?a9:(a6-0.13793103448275862)/7.787
b0=Math.pow(a7,3)
a7=b0>0.008856?b0:(a7-0.13793103448275862)/7.787
a6=a6*95.047/100
a5=a5*100/100
a7=a7*108.883/100
b1=a6*3.2406+a5*-1.5372+a7*-0.4986
b2=a6*-0.9689+a5*1.8758+a7*0.0415
b3=a6*0.0557+a5*-0.204+a7*1.057
b1=b1>0.0031308?1.055*Math.pow(b1,0.4166666666666667)-0.055:12.92*b1
b2=b2>0.0031308?1.055*Math.pow(b2,0.4166666666666667)-0.055:12.92*b2
b3=b3>0.0031308?1.055*Math.pow(b3,0.4166666666666667)-0.055:12.92*b3
b4=[B.b.i(B.b.I(b1*255,0,255)),B.b.i(B.b.I(b2*255,0,255)),B.b.i(B.b.I(b3*255,0,255))]
d.sq(0,b4[0])
d.st(b4[1])
d.sv(0,b4[2])
d.su(0,a3)
break
case B.bJ:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b5=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b5=(a<<8|c[a0])>>>8}if(e){c=j.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]
a3=c}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
a3=a0}}else a3=255
d.sq(0,b5)
d.st(b5)
d.sv(0,b5)
d.su(0,a3)
break
case B.bL:c=m.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b6=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b6=(a<<8|c[a0])>>>8}c=l.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b7=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b7=(a<<8|c[a0])>>>8}c=k.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
a5=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a5=(a<<8|c[a0])>>>8}c=c1.l(0,f?-1:3).c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
b8=c[i]}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
b8=(a<<8|c[a0])>>>8}if(h){c=j.c
c===$&&A.c(c0)
b=c.length
if(g){if(!(i>=0&&i<b))return A.a(c,i)
c=c[i]
a3=c}else{if(!(i>=0&&i<b))return A.a(c,i)
a=c[i]
a0=i+1
if(!(a0<b))return A.a(c,a0)
a0=(a<<8|c[a0])>>>8
a3=a0}}else a3=255
b4=A.pT(255-b6,255-b7,255-a5,255-b8)
d.sq(0,b4[0])
d.st(b4[1])
d.sv(0,b4[2])
d.su(0,a3)
break
default:throw A.f(A.q("Unhandled color mode: "+A.D(c2)))}}return n},
bp:function bp(a,b){this.a=a
this.b=b},
ij:function ij(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.x=_.w=$
_.y=null
_.z=a
_.ay=_.ax=_.at=_.as=$},
ik:function ik(){},
f2:function f2(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=$
_.cy=c},
ry(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.k()
if(s>=12){if(b.ac(4)!=="8BIM")A.a1(A.q("Invalid key in layer additional data"))
b.ac(4)}if(s>=16)b.k()
return new A.io()
default:return new A.f3(b)}},
dR:function dR(){},
l1:function l1(){this.a=null},
ir:function ir(){},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
dT:function dT(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
f4:function f4(){this.y=this.b=this.a=0},
bS(a,b){var s,r=a>>>8
if(!(r<256))return A.a(B.O,r)
r=B.O[r]
s=b>>>8
if(!(s<256))return A.a(B.O,s)
return(r<<17|B.O[s]<<16|B.O[a&255]<<1|B.O[b&255])>>>0},
ba:function ba(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
l5:function l5(){this.b=this.a=null},
fa:function fa(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
aL:function aL(a,b){this.a=a
this.b=b},
lj:function lj(){this.a=null
this.b=$},
ll:function ll(a){this.a=a
this.c=this.b=0},
iG:function iG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
nt(a,b,c){var s=new A.ln(b,a),r=t.E
s.se9(A.am(b,null,!1,r))
s.se6(A.am(b,null,!1,r))
return s},
ln:function ln(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.r=_.f=_.e=1
_.w=c
_.x=d
_.y=!1
_.z=1
_.as=_.Q=$
_.ay=_.ax=0
_.CW=_.ch=null
_.cy=_.cx=$
_.dx=1
_.fr=_.dy=0
_.go=null
_.k2=_.k1=_.id=$},
d0:function d0(a,b){this.a=a
this.b=b},
al:function al(a,b){this.a=a
this.b=b},
bd:function bd(a,b){this.a=a
this.b=b},
iI:function iI(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
oL(){return new A.kN(new Uint8Array(4096))},
kN:function kN(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
lm:function lm(){this.a=null
this.c=$},
nw(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.am(8,null,!1,t.nX),n=A.am(4,null,!1,t.nk)
return new A.lw(a,b,new A.lC(),new A.lG(),new A.ly(s,r),new A.lI(q,p),o,n,new Uint8Array(4))},
pf(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
lw:function lw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.aQ=$
_.bh=null
_.bJ=_.aR=$
_.bU=null
_.bK=$},
lJ:function lJ(){},
pc(a){var s=new A.fc(a)
s.b=254
s.c=0
s.d=-8
return s},
fc:function fc(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
M(a,b,c){return B.a.ar(B.a.j(a+2*b+c+2,2),32)},
rU(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-33,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-32
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
l+=-31
if(!(l>=0&&l<j))return A.a(m,l)
l=A.M(k,s,m[l])
m=a.a
s=a.d
k=s+-32
j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
r=s+-31
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
s+=-30
if(!(s>=0&&s<j))return A.a(m,s)
s=A.M(k,r,m[s])
m=a.a
r=a.d
k=r+-31
j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
q=r+-30
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
r+=-29
if(!(r>=0&&r<j))return A.a(m,r)
r=A.M(k,q,m[r])
m=a.a
q=a.d
k=q+-30
j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
p=q+-29
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
q+=-28
if(!(q>=0&&q<j))return A.a(m,q)
o=A.b([l,s,r,A.M(k,p,m[q])],t.t)
for(n=0;n<4;++n)a.bV(n*32,4,o)},
rM(a){var s,r,q,p,o=a.a,n=a.d,m=n+-33,l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
s=n+-1
if(!(s>=0&&s<l))return A.a(o,s)
s=o[s]
r=n+31
if(!(r>=0&&r<l))return A.a(o,r)
r=o[r]
q=n+63
if(!(q>=0&&q<l))return A.a(o,q)
q=o[q]
n+=95
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
p=A.u(a,null,0)
o=p.cQ()
m=A.M(m,s,r)
if(0>=o.length)return A.a(o,0)
o[0]=16843009*m
p.d+=32
m=p.cQ()
s=A.M(s,r,q)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*s
p.d+=32
s=p.cQ()
r=A.M(r,q,n)
if(0>=s.length)return A.a(s,0)
s[0]=16843009*r
p.d+=32
r=p.cQ()
n=A.M(q,n,n)
if(0>=r.length)return A.a(r,0)
r[0]=16843009*n},
rK(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<4;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}p=B.a.j(p,3)
for(o=0;o<4;++o){s=a.a
r=a.d+o*32
J.bG(s,r,r+4,p)}},
nx(a,b){var s,r,q,p,o,n,m,l=a.a,k=a.d+-33
if(!(k>=0&&k<l.length))return A.a(l,k)
s=255-l[k]
for(r=0,q=0;q<b;++q){l=a.a
k=a.d+(r-1)
if(!(k>=0&&k<l.length))return A.a(l,k)
p=s+l[k]
for(o=0;o<b;++o){l=$.aU()
k=a.a
n=a.d
m=n+(-32+o)
if(!(m>=0&&m<k.length))return A.a(k,m)
m=p+k[m]
l.toString
if(!(m>=0&&m<766))return A.a(l,m)
J.H(k,n+(r+o),l[m])}r+=32}},
rS(a){A.nx(a,4)},
rT(a){A.nx(a,8)},
rR(a){A.nx(a,16)},
rQ(a){var s,r,q,p,o,n,m,l=a.a,k=a.d,j=k+-1,i=l.length
if(!(j>=0&&j<i))return A.a(l,j)
j=l[j]
s=k+31
if(!(s>=0&&s<i))return A.a(l,s)
s=l[s]
r=k+63
if(!(r>=0&&r<i))return A.a(l,r)
r=l[r]
q=k+95
if(!(q>=0&&q<i))return A.a(l,q)
q=l[q]
p=k+-33
if(!(p>=0&&p<i))return A.a(l,p)
p=l[p]
o=k+-32
if(!(o>=0&&o<i))return A.a(l,o)
o=l[o]
n=k+-31
if(!(n>=0&&n<i))return A.a(l,n)
n=l[n]
m=k+-30
if(!(m>=0&&m<i))return A.a(l,m)
m=l[m]
k+=-29
if(!(k>=0&&k<i))return A.a(l,k)
k=l[k]
a.h(0,96,A.M(s,r,q))
r=A.M(j,s,r)
a.h(0,97,r)
a.h(0,64,r)
s=A.M(p,j,s)
a.h(0,98,s)
a.h(0,65,s)
a.h(0,32,s)
j=A.M(o,p,j)
a.h(0,99,j)
a.h(0,66,j)
a.h(0,33,j)
a.h(0,0,j)
p=A.M(n,o,p)
a.h(0,67,p)
a.h(0,34,p)
a.h(0,1,p)
o=A.M(m,n,o)
a.h(0,35,o)
a.h(0,2,o)
a.h(0,3,A.M(k,m,n))},
rP(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-30
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-29
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-28
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-27
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-26
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-25
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
a.h(0,0,A.M(k,s,r))
s=A.M(s,r,q)
a.h(0,32,s)
a.h(0,1,s)
r=A.M(r,q,p)
a.h(0,64,r)
a.h(0,33,r)
a.h(0,2,r)
q=A.M(q,p,o)
a.h(0,96,q)
a.h(0,65,q)
a.h(0,34,q)
a.h(0,3,q)
p=A.M(p,o,n)
a.h(0,97,p)
a.h(0,66,p)
a.h(0,35,p)
o=A.M(o,n,l)
a.h(0,98,o)
a.h(0,67,o)
a.h(0,99,A.M(n,l,l))},
rW(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+63
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-33
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-32
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-31
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-30
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-29
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
m=B.a.ar(B.a.j(q+p+1,1),32)
a.h(0,65,m)
a.h(0,0,m)
m=B.a.ar(B.a.j(p+o+1,1),32)
a.h(0,66,m)
a.h(0,1,m)
m=B.a.ar(B.a.j(o+n+1,1),32)
a.h(0,67,m)
a.h(0,2,m)
a.h(0,3,B.a.ar(B.a.j(n+l+1,1),32))
a.h(0,96,A.M(r,s,k))
a.h(0,64,A.M(s,k,q))
k=A.M(k,q,p)
a.h(0,97,k)
a.h(0,32,k)
q=A.M(q,p,o)
a.h(0,98,q)
a.h(0,33,q)
p=A.M(p,o,n)
a.h(0,99,p)
a.h(0,34,p)
a.h(0,35,A.M(o,n,l))},
rV(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-32,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+-31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+-30
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+-29
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-28
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-27
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-26
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-25
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
a.h(0,0,B.a.ar(B.a.j(k+s+1,1),32))
m=B.a.ar(B.a.j(s+r+1,1),32)
a.h(0,64,m)
a.h(0,1,m)
m=B.a.ar(B.a.j(r+q+1,1),32)
a.h(0,65,m)
a.h(0,2,m)
m=B.a.ar(B.a.j(q+p+1,1),32)
a.h(0,66,m)
a.h(0,3,m)
a.h(0,32,A.M(k,s,r))
s=A.M(s,r,q)
a.h(0,96,s)
a.h(0,33,s)
r=A.M(r,q,p)
a.h(0,97,r)
a.h(0,34,r)
q=A.M(q,p,o)
a.h(0,98,q)
a.h(0,35,q)
a.h(0,67,A.M(p,o,n))
a.h(0,99,A.M(o,n,l))},
rN(a){var s,r,q=a.a,p=a.d,o=p+-1,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+31
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
r=p+63
if(!(r>=0&&r<n))return A.a(q,r)
r=q[r]
p+=95
if(!(p>=0&&p<n))return A.a(q,p)
p=q[p]
a.h(0,0,B.a.ar(B.a.j(o+s+1,1),32))
q=B.a.ar(B.a.j(s+r+1,1),32)
a.h(0,32,q)
a.h(0,2,q)
q=B.a.ar(B.a.j(r+p+1,1),32)
a.h(0,64,q)
a.h(0,34,q)
a.h(0,1,A.M(o,s,r))
s=A.M(s,r,p)
a.h(0,33,s)
a.h(0,3,s)
r=A.M(r,p,p)
a.h(0,65,r)
a.h(0,35,r)
a.h(0,99,p)
a.h(0,98,p)
a.h(0,97,p)
a.h(0,96,p)
a.h(0,66,p)
a.h(0,67,p)},
rL(a){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-1,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=l+31
if(!(s>=0&&s<j))return A.a(m,s)
s=m[s]
r=l+63
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
q=l+95
if(!(q>=0&&q<j))return A.a(m,q)
q=m[q]
p=l+-33
if(!(p>=0&&p<j))return A.a(m,p)
p=m[p]
o=l+-32
if(!(o>=0&&o<j))return A.a(m,o)
o=m[o]
n=l+-31
if(!(n>=0&&n<j))return A.a(m,n)
n=m[n]
l+=-30
if(!(l>=0&&l<j))return A.a(m,l)
l=m[l]
m=B.a.ar(B.a.j(k+p+1,1),32)
a.h(0,34,m)
a.h(0,0,m)
m=B.a.ar(B.a.j(s+k+1,1),32)
a.h(0,66,m)
a.h(0,32,m)
m=B.a.ar(B.a.j(r+s+1,1),32)
a.h(0,98,m)
a.h(0,64,m)
a.h(0,96,B.a.ar(B.a.j(q+r+1,1),32))
a.h(0,3,A.M(o,n,l))
a.h(0,2,A.M(p,o,n))
o=A.M(k,p,o)
a.h(0,35,o)
a.h(0,1,o)
p=A.M(s,k,p)
a.h(0,67,p)
a.h(0,33,p)
k=A.M(r,s,k)
a.h(0,99,k)
a.h(0,65,k)
a.h(0,97,A.M(q,r,s))},
t6(a){var s
for(s=0;s<16;++s)a.bl(s*32,16,a,-32)},
t4(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.bG(q,p,p+16,q[o])
s+=32}},
lA(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.bG(r,q,q+16,a)}},
rX(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=16,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(o-32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.lA(B.a.j(p,5),a)},
rZ(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lA(B.a.j(p,4),a)},
rY(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<16;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lA(B.a.j(p,4),a)},
t_(a){A.lA(128,a)},
t7(a){var s
for(s=0;s<8;++s)a.bl(s*32,8,a,-32)},
t5(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=a.a
p=a.d
o=p+(s-1)
if(!(o>=0&&o<q.length))return A.a(q,o)
p+=s
J.bG(q,p,p+8,q[o])
s+=32}},
lB(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.bG(r,q,q+8,a)}},
t0(a){var s,r,q,p,o,n,m
for(s=a.a,r=a.d,q=s.length,p=8,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
n=s[n]
m=r+(-1+o*32)
if(!(m>=0&&m<q))return A.a(s,m)
p+=n+s[m]}A.lB(B.a.j(p,4),a)},
t1(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(o-32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lB(B.a.j(p,3),a)},
t2(a){var s,r,q,p,o,n
for(s=a.a,r=a.d,q=s.length,p=4,o=0;o<8;++o){n=r+(-1+o*32)
if(!(n>=0&&n<q))return A.a(s,n)
p+=s[n]}A.lB(B.a.j(p,3),a)},
t3(a){A.lB(128,a)},
cn(a,b,c,d,e){var s=b+c+d*32,r=a.a,q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]+B.a.j(e,3)
if((q&-256)>>>0===0)r=q
else r=q<0?0:255
a.h(0,s,r)},
lz(a,b,c,d,e){A.cn(a,0,0,b,c+d)
A.cn(a,0,1,b,c+e)
A.cn(a,0,2,b,c-e)
A.cn(a,0,3,b,c-d)},
rO(){var s,r,q
if(!$.pd){for(s=-255;s<=255;++s){r=$.k1()
q=255+s
r[q]=s<0?-s:s
$.mZ()[q]=B.a.j(r[q],1)}for(s=-1020;s<=1020;++s){r=$.n_()
if(s<-128)q=-128
else q=s>127?127:s
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.k2()
if(s<-16)q=-16
else q=s>15?15:s
r[112+s]=q}for(s=-255;s<=510;++s){r=$.aU()
if(s<0)q=0
else q=s>255?255:s
r[255+s]=q}$.pd=!0}},
lx:function lx(){},
rJ(){var s,r=J.aD(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.fb(r)},
tm(){var s,r,q,p,o=new Uint8Array(3),n=J.aD(4,t.ac)
for(s=t.aO,r=0;r<4;++r){q=J.aD(8,s)
for(p=0;p<8;++p)q[p]=A.rJ()
n[r]=q}B.k.aL(o,0,3,255)
return new A.lH(o,n)},
lC:function lC(){this.d=$},
lG:function lG(){},
lI:function lI(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
fb:function fb(a){this.a=a},
lH:function lH(a,b){this.a=a
this.b=b},
ly:function ly(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bY:function bY(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
fe:function fe(){this.b=this.a=0},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
ny(a,b){var s,r=A.b([],t.nK),q=A.b([],t.ip),p=new Uint32Array(2),o=new A.iS(a,p)
p=o.d=A.Q(p.buffer,0,null)
s=a.B()
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.B()
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.B()
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.B()
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.B()
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.B()
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.B()
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.B()
if(7>=p.length)return A.a(p,7)
p[7]=s
return new A.fd(o,b,r,q)},
co(a,b){return B.a.j(a+B.a.O(1,b)-1,b)},
fd:function fd(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
hD:function hD(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.r=_.f=_.e=0
_.w=null
_.z=_.y=_.x=0
_.Q=null
_.as=0
_.at=c
_.ax=d
_.ay=0
_.ch=null
_.CW=$
_.db=_.cy=_.cx=null},
iS:function iS(a,b){var _=this
_.a=0
_.b=a
_.c=b
_.d=$},
lD:function lD(a,b){this.a=a
this.b=b},
lE(a,b,c){var s
if(!(b<a.length))return A.a(a,b)
s=a[b]
a[b]=(((s&4278255360)>>>0)+((c&4278255360)>>>0)&4278255360|(s&16711935)+(c&16711935)&16711935)>>>0},
bZ(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
d3(a){if(a<0)return 0
if(a>255)return 255
return a},
lF(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
t8(a,b,c){return 4278190080},
t9(a,b,c){return b},
te(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return a[c]},
tf(a,b,c){var s=c+1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
tg(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return a[s]},
th(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bZ(A.bZ(b,a[r]),s)},
ti(a,b,c){var s=c-1
if(!(s>=0&&s<a.length))return A.a(a,s)
return A.bZ(b,a[s])},
tj(a,b,c){if(!(c>=0&&c<a.length))return A.a(a,c)
return A.bZ(b,a[c])},
tk(a,b,c){var s=c-1,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
if(!(c>=0&&c<r))return A.a(a,c)
return A.bZ(s,a[c])},
tl(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<q))return A.a(a,r)
return A.bZ(s,a[r])},
ta(a,b,c){var s,r,q=c-1,p=a.length
if(!(q>=0&&q<p))return A.a(a,q)
q=a[q]
if(!(c>=0&&c<p))return A.a(a,c)
s=a[c]
r=c+1
if(!(r<p))return A.a(a,r)
r=a[r]
return A.bZ(A.bZ(b,q),A.bZ(s,r))},
tb(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return A.lF(s>>>24,b>>>24,r>>>24)+A.lF(s>>>16&255,b>>>16&255,r>>>16&255)+A.lF(s>>>8&255,b>>>8&255,r>>>8&255)+A.lF(s&255,b&255,r&255)<=0?s:b},
tc(a,b,c){var s,r,q=a.length
if(!(c>=0&&c<q))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
return(A.d3((b>>>24)+(s>>>24)-(r>>>24))<<24|A.d3((b>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.d3((b>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.d3((b&255)+(s&255)-(r&255)))>>>0},
td(a,b,c){var s,r,q,p,o,n=a.length
if(!(c>=0&&c<n))return A.a(a,c)
s=a[c]
r=c-1
if(!(r>=0&&r<n))return A.a(a,r)
r=a[r]
q=A.bZ(b,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.d3(s+B.a.U(s-(r>>>24),2))<<24|A.d3(n+B.a.U(n-(r>>>16&255),2))<<16|A.d3(p+B.a.U(p-(r>>>8&255),2))<<8|A.d3(o+B.a.U(o-(r&255),2)))>>>0},
d2:function d2(a,b){this.a=a
this.b=b},
iT:function iT(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
lK:function lK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
fh:function fh(){},
hE:function hE(a,b,c){var _=this
_.a=a
_.b=b
_.e=c
_.f=$
_.r=1
_.x=_.w=$},
om(){var s=new Uint8Array(128),r=new Int16Array(128)
s=new A.hl(s,r,new Int16Array(128))
s.dT(0)
return s},
r4(){var s,r=J.aD(5,t.gP)
for(s=0;s<5;++s)r[s]=A.om()
return new A.dx(r)},
hl:function hl(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.f=_.e=0},
dx:function dx(a){this.a=a},
e2:function e2(a,b){this.a=a
this.b=b},
e3:function e3(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
eI:function eI(a,b){var _=this
_.b=_.a=0
_.e=_.d=!1
_.f=a
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
lL:function lL(){this.b=this.a=null},
on(a){return new A.ez(a.a,a.b,B.k.hh(a.c,0))},
kp:function kp(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
a5(a,b,c,d,e,f,g,h,i,j,k,l){var s,r=new A.bO(null,null,null,a,h,e,d,0)
B.c.H(r.gaq(),r)
if(i<1||i>4)A.a1(A.q("Invalid number of channels for image "+i+". Must be between 1 and 4."))
r.c=g
if(b!=null)r.e=A.eq(b)
if(j==null)if(l)s=r.gG()===B.v||r.gG()===B.w||r.gG()===B.x||r.gG()===B.e
else s=!1
else s=!1
r.eA(k,f,c,i,s?r.ir(B.e,i):j)
return r},
hp(a,b,c,d){var s,r,q,p=null,o=a.e
o=o==null?p:A.eq(o)
s=a.c
s=s==null?p:A.on(s)
r=a.w
q=a.r
o=new A.bO(p,s,o,p,q,r,a.y,a.z)
o.hH(a,b,c,d)
return o},
bl(a,b,c){var s,r,q,p,o=null,n=a.a
n=n==null?o:n.bg(0,c)
s=a.e
s=s==null?o:A.eq(s)
r=a.c
r=r==null?o:A.on(r)
q=a.w
p=a.r
n=new A.bO(n,r,s,o,p,q,a.y,a.z)
n.hG(a,b,c)
return n},
hj:function hj(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
kw:function kw(a,b){this.a=a
this.b=b},
kv:function kv(){},
ap:function ap(){},
r5(a,b,c){return new A.dE(new Uint16Array(a*b*c),a,b,c)},
dE:function dE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
r6(a,b,c){return new A.dF(new Float32Array(a*b*c),a,b,c)},
dF:function dF(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eA:function eA(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eB:function eB(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eC:function eC(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eD:function eD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dG:function dG(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
eE:function eE(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dH:function dH(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
r7(a,b,c){return new A.dI(new Uint32Array(a*b*c),a,b,c)},
dI:function dI(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dJ:function dJ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
oy(a,b,c){return new A.dK(new Uint8Array(a*b*c),null,a,b,c)},
dK:function dK(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
hF:function hF(a,b){this.a=a
this.b=b},
b8:function b8(){},
eT:function eT(a,b,c){this.c=a
this.a=b
this.b=c},
eU:function eU(a,b,c){this.c=a
this.a=b
this.b=c},
eV:function eV(a,b,c){this.c=a
this.a=b
this.b=c},
eW:function eW(a,b,c){this.c=a
this.a=b
this.b=c},
eX:function eX(a,b,c){this.c=a
this.a=b
this.b=c},
eY:function eY(a,b,c){this.c=a
this.a=b
this.b=c},
eZ:function eZ(a,b,c){this.c=a
this.a=b
this.b=c},
dP:function dP(a,b,c){this.c=a
this.a=b
this.b=c},
oO(a){return new A.b9(new Uint8Array(A.J(a.c)),a.a,a.b)},
b9:function b9(a,b,c){this.c=a
this.a=b
this.b=c},
oP(a){return new A.cN(-1,0,-a.c,a)},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oQ(a){return new A.cO(-1,0,-a.c,a)},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oR(a){return new A.cP(-1,0,-a.c,a)},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oS(a){return new A.cQ(-1,0,-a.c,a)},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oT(a){return new A.cR(-1,0,-a.c,a)},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oU(a){return new A.cS(-1,0,-a.c,a)},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7(a){return new A.cT(-1,0,0,-1,0,a)},
cT:function cT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oV(a){return new A.cU(-1,0,-a.c,a)},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8(a){return new A.cV(-1,0,0,-2,0,a)},
cV:function cV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oW(a){return new A.cW(-1,0,-a.c,a)},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9(a){return new A.cX(-1,0,0,-(a.c<<2>>>0),a)},
cX:function cX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ni(a){return new A.cY(-1,0,-a.c,a)},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(){},
uW(a,b){switch(b.a){case 0:A.k0(a)
break
case 1:A.uY(a)
break
case 2:A.uX(a)
break}return a},
uY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=a.gaq().length
for(s=t.g,r=0;r<c;++r){q=a.x
if(q===$){q=A.b([],s)
a.sbP(q)}if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?d:o.a
if(m==null)m=0
l=n?d:o.b
if(l==null)l=0
k=B.a.U(l,2)
o=a.a
if((o==null?d:o.gP())!=null)for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.K(h,i,d)
if(g==null)g=new A.R()
o=p.a
f=o==null?d:o.K(h,j,d)
if(f==null)f=new A.R()
e=g.gL(g)
g.sL(0,f.gL(f))
f.sL(0,e)}else for(j=l-1,i=0;i<k;++i,--j)for(h=0;h<m;++h){o=p.a
g=o==null?d:o.K(h,i,d)
if(g==null)g=new A.R()
o=p.a
f=o==null?d:o.K(h,j,d)
if(f==null)f=new A.R()
e=g.gq(g)
g.sq(0,f.gq(f))
f.sq(0,e)
e=g.gt()
g.st(f.gt())
f.st(e)
e=g.gv(g)
g.sv(0,f.gv(f))
f.sv(0,e)
e=g.gu(g)
g.su(0,f.gu(f))
f.su(0,e)}}return a},
k0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a.gaq().length
for(s=t.g,r=0;r<b;++r){q=a.x
if(q===$){q=A.b([],s)
a.sbP(q)}if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?c:o.a
if(m==null)m=0
l=n?c:o.b
if(l==null)l=0
k=B.a.U(m,2)
o=a.a
if((o==null?c:o.gP())!=null)for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.K(g,i,c)
if(f==null)f=new A.R()
o=p.a
e=o==null?c:o.K(h,i,c)
if(e==null)e=new A.R()
d=f.gL(f)
f.sL(0,e.gL(e))
e.sL(0,d)}else for(j=m-1,i=0;i<l;++i)for(h=j,g=0;g<k;++g,--h){o=p.a
f=o==null?c:o.K(g,i,c)
if(f==null)f=new A.R()
o=p.a
e=o==null?c:o.K(h,i,c)
if(e==null)e=new A.R()
d=f.gq(f)
f.sq(0,e.gq(e))
e.sq(0,d)
d=f.gt()
f.st(e.gt())
e.st(d)
d=f.gv(f)
f.sv(0,e.gv(e))
e.sv(0,d)
d=f.gu(f)
f.su(0,e.gu(e))
e.su(0,d)}}return a},
uX(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=a0.gaq().length
for(s=t.g,r=0;r<a;++r){q=a0.x
if(q===$){q=A.b([],s)
a0.sbP(q)}if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?b:o.a
if(m==null)m=0
l=n?b:o.b
if(l==null)l=0
k=B.a.U(l,2)
if((n?b:o.gP())!=null)for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.K(f,h,b)
if(e==null)e=new A.R()
o=p.a
d=o==null?b:o.K(g,j,b)
if(d==null)d=new A.R()
c=e.gL(e)
e.sL(0,d.gL(d))
d.sL(0,c)}else for(j=l-1,i=m-1,h=0;h<k;++h,--j)for(g=i,f=0;f<m;++f,--g){o=p.a
e=o==null?b:o.K(f,h,b)
if(e==null)e=new A.R()
o=p.a
d=o==null?b:o.K(g,j,b)
if(d==null)d=new A.R()
c=e.gq(e)
e.sq(0,d.gq(d))
d.sq(0,c)
c=e.gt()
e.st(d.gt())
d.st(c)
c=e.gv(e)
e.sv(0,d.gv(d))
d.sv(0,c)
c=e.gu(e)
e.su(0,d.gu(d))
d.su(0,c)}}return a0},
kk:function kk(a,b){this.a=a
this.b=b},
q(a){return new A.ku(a)},
ku:function ku(a){this.a=a},
C(a,b,c,d){return new A.as(a,d,c==null?a.length:d+c,d,b)},
u(a,b,c){var s=a.a,r=a.d+c,q=a.b,p=b==null?a.c:r+b
return new A.as(s,q,p,r,a.e)},
as:function as(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i2:function i2(a){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.ax=_.at=$},
bo(a,b){return new A.i6(a,new Uint8Array(b))},
i6:function i6(a,b){this.a=0
this.b=a
this.c=b},
is:function is(){},
dV:function dV(a,b){this.a=a
this.b=b},
uN(a,b,c){var s,r,q,p,o,n,m=self
m.toString
t.dd.a(m)
s=new MessageChannel()
s.toString
r=A.lc()
$.br!=null
r.c=c
q=new A.lO(A.a_(t.p,t.kF),new A.lM(new A.mK(s,m),A.a_(t.N,t.m)))
p=s.port1
p.toString
o=t.m1
n=t.e
A.m5(p,"message",o.a(new A.mL(q)),!1,n)
A.m5(m,"message",o.a(new A.mM(q,s,a)),!1,n)},
mK:function mK(a,b){this.a=a
this.b=b},
mL:function mL(a){this.a=a},
mM:function mM(a,b,c){this.a=a
this.b=b
this.c=c},
m1:function m1(){},
jg:function jg(){this.a=null},
mm:function mm(a){this.a=a},
qE(a){var s
if(a==null)return null
s=J.ah(a)
return new A.cv(A.nI(s.l(a,1)),A.ax(s.l(a,0)))},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
lc(){var s=$.br
if(s==null){s=$.br=new A.l9(A.b([],t.t))
s.d=$.lb}return s},
p4(a){$.br!=null
return null},
l9:function l9(a){var _=this
_.a=2000
_.b=a
_.c=null
_.d=!1
_.f=_.e=null},
c7(a,b){var s
A.p4("SquadronError: "+a)
s=new A.f7(a,b)
s.hM(a,b)
return s},
f7:function f7(a,b){this.a=a
this.b=b},
la(a,b){var s,r,q=null
if(a instanceof A.f7)return a
else if(a instanceof A.e4){s=A.ph(a,q)
s.c=null
return A.ph(s,q)}else if(t.on.b(a)){s=a.a
r=new A.iC(a.x,s,q,q,q)
r.dw(s,q,q,q)
return r}else return A.nz(J.ec(a),q,b,q)},
bU:function bU(){},
nz(a,b,c,d){var s=new A.e4(a,c,d,b)
s.dw(a,b,c,d)
return s},
qF(a,b,c,d){var s=b==null?"The task has been cancelled":b,r=new A.de(s,c,d,a)
r.dw(s,a,c,d)
return r},
ph(a,b){a.d=b
return a},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a,b,c,d,e){var _=this
_.x=a
_.a=b
_.b=c
_.c=d
_.d=e},
cc:function cc(a,b,c){var _=this
_.e=a
_.f=0
_.a=b
_.b=c
_.d=_.c=null},
lo:function lo(){this.a=0},
lM:function lM(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.d=b
_.e=null
_.f=0},
lN:function lN(a){this.a=a},
lO:function lO(a,b){this.a=a
this.b=b},
lP:function lP(){},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a,b){this.a=a
this.b=b},
lR:function lR(a,b,c){this.a=a
this.b=b
this.c=c},
vc(){return A.uN(new A.mU(),null,null)},
mU:function mU(){},
e_:function e_(){this.a=$},
lk:function lk(a){this.a=a},
rF(a){throw A.f(A.O("Uint64List not supported on the web."))},
r8(a,b,c){A.c2(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
pa(a,b){var s
A.c2(a,b,null)
s=B.a.U(a.byteLength-b,4)
return new Uint32Array(a,b,s)},
qZ(a){var s
A.c2(a,0,null)
s=B.a.U(a.byteLength-0,4)
return new Float32Array(a,0,s)},
r_(a){return a.lH(0,0,null)},
ve(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
uZ(a){var s,r,q,p,o,n,m=a.length
for(s=m,r=1,q=0,p=0;s>0;){o=3800>s?s:3800
s-=o
for(;--o,o>=0;p=n){n=p+1
if(!(p>=0&&p<m))return A.a(a,p)
r+=a[p]&255
q+=r}r=B.a.a2(r,65521)
q=B.a.a2(q,65521)}return(q<<16|r)>>>0},
bF(a,b){var s,r,q,p=J.ae(a),o=p.gn(a)
b^=4294967295
for(s=0;o>=8;){r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
s=r+1
q=p.l(a,r)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
o-=8}if(o>0)do{r=s+1
q=p.l(a,s)
if(typeof q!=="number")return A.bf(q)
b=B.z[(b^q)&255]^b>>>8
if(--o,o>0){s=r
continue}else break}while(!0)
return(b^4294967295)>>>0},
pV(a,b,c,d,e){var s,r,q,p,o,n,m,l=null,k=b.gX(b),j=b.gM(b),i=a.gX(a)<b.gX(b)?a.gX(a):b.gX(b),h=a.gM(a)<b.gM(b)?a.gM(a):b.gM(b)
if(a.gbi())a.kE(a.gbm())
if(typeof h!=="number")return A.bf(h)
s=j/h
if(typeof i!=="number")return A.bf(i)
r=k/i
q=t.p
p=J.aD(h,q)
for(o=0;o<h;++o)p[o]=B.b.i(o*s)
n=J.aD(i,q)
for(m=0;m<i;++m)n[m]=B.b.i(m*r)
if(c===B.ah)A.u7(b,a,d,e,i,h,n,p,l,B.aM)
else A.u3(b,a,d,e,i,h,n,p,c,!1,l,B.aM)
return a},
u7(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.K(m,l,q)
if(q==null)q=new A.R()
b.bO(c+n,o,q)}},
u3(a,b,c,d,e,f,g,h,i,j,a0,a1){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.K(m,l,q)
if(q==null)q=new A.R()
A.uU(b,c+n,o,q,i,!1,a0,a1)}},
uU(a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
if(!a6.fO(a7,a8))return a6
if(b0===B.ah||a6.gbi())if(a6.fO(a7,a8)){a6.aK(a7,a8).ae(0,a9)
return a6}s=a9.ga8()
r=a9.ga0()
q=a9.ga5()
p=a9.gn(a9)<4?1:a9.ga9()
if(typeof p!=="number")return p.du()
if(p===0)return a6
o=a6.aK(a7,a8)
n=o.ga8()
m=o.ga0()
l=o.ga5()
k=o.ga9()
switch(b0.a){case 0:return a6
case 1:break
case 2:s=Math.max(n,s)
r=Math.max(m,r)
q=Math.max(l,q)
break
case 3:s=1-(1-s)*(1-n)
r=1-(1-r)*(1-m)
q=1-(1-q)*(1-l)
break
case 4:j=p*k
i=1-k
h=1-p
g=s*i+n*h
f=r*i+m*h
e=q*i+l*h
h=B.b.I(p,0.01,1)
i=p<0
d=i?0:1
c=B.b.I(s/h*d,0,0.99)
d=B.b.I(p,0.01,1)
h=i?0:1
b=B.b.I(r/d*h,0,0.99)
h=B.b.I(p,0.01,1)
i=i?0:1
a=B.b.I(q/h*i,0,0.99)
i=n*p
h=m*p
d=l*p
a0=j<s*k+i?0:1
a1=j<r*k+h?0:1
a2=j<q*k+d?0:1
s=(j+g)*(1-a0)+(i/(1-c)+g)*a0
r=(j+f)*(1-a1)+(h/(1-b)+f)*a1
q=(j+e)*(1-a2)+(d/(1-a)+e)*a2
break
case 5:s=n+s
r=m+r
q=l+q
break
case 6:s=Math.min(n,s)
r=Math.min(m,r)
q=Math.min(l,q)
break
case 7:s=n*s
r=m*r
q=l*q
break
case 8:s=s!==0?1-(1-n)/s:0
r=r!==0?1-(1-m)/r:0
q=q!==0?1-(1-l)/q:0
break
case 9:i=1-k
h=1-p
d=s*i
a3=n*h
s=2*n<k?2*s*n+d+a3:p*k-2*(k-n)*(p-s)+d+a3
d=r*i
a3=m*h
r=2*m<k?2*r*m+d+a3:p*k-2*(k-m)*(p-r)+d+a3
i=q*i
h=l*h
q=2*l<k?2*q*l+i+h:p*k-2*(k-l)*(p-q)+i+h
break
case 10:i=k===0
if(i)s=0
else{h=n/k
s=n*(p*h+2*s*(1-h))+s*(1-k)+n*(1-p)}if(i)r=0
else{h=m/k
r=m*(p*h+2*r*(1-h))+r*(1-k)+m*(1-p)}if(i)q=0
else{i=l/k
q=l*(p*i+2*q*(1-i))+q*(1-k)+l*(1-p)}break
case 11:i=2*s
h=1-k
d=1-p
a3=s*h
a4=n*d
s=i<p?i*n+a3+a4:p*k-2*(k-n)*(p-s)+a3+a4
i=2*r
a3=r*h
a4=m*d
r=i<p?i*m+a3+a4:p*k-2*(k-m)*(p-r)+a3+a4
i=2*q
h=q*h
d=l*d
q=i<p?i*l+h+d:p*k-2*(k-l)*(p-q)+h+d
break
case 12:s=Math.abs(s-n)
r=Math.abs(r-m)
q=Math.abs(q-l)
break
case 13:s=n-s
r=m-r
q=l-q
break
case 14:s=s!==0?n/s:0
r=r!==0?m/r:0
q=q!==0?l/q:0
break}a5=1-p
o.sa8(s*p+n*k*a5)
o.sa0(r*p+m*k*a5)
o.sa5(q*p+l*k*a5)
o.sa9(p+k*a5)
return a6},
qW(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
for(s=1;s<=a5;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.b([0,0],t.t)
for(p=a6.length,o=s,s=r;s>=1;o=s,s=r){n=a7+b1*(b0-o)
m=b1*s
l=b1*o
k=a9*s
j=a9*o
for(i=(a8&s)>>>0!==0,h=a9*(a8-o),g=a7;g<=n;g+=l){f=g+h
for(e=g;e<=f;e+=j){d=e+k
c=e+m
b=c+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.es(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.es(a,a6[b],q)
a2=q[0]
a3=q[1]
A.es(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.es(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.et(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.et(a,a6[b],q)
a2=q[0]
a3=q[1]
A.et(a0,a2,q)
a6[e]=q[0]
a6[d]=q[1]
A.et(a1,a3,q)
a6[c]=q[0]
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.es(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.et(a,a6[c],q)
a0=q[0]
a6[c]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.es(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.et(i,a6[d],q)
a0=q[0]
a6[d]=q[1]}if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
es(a,b,c){var s,r,q,p,o,n=$.aO()
n[0]=a
s=$.aV()
r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
n[0]=b
if(0>=r)return A.a(s,0)
p=s[0]
o=q+(p&1)+B.a.j(p,1)
B.c.h(c,0,o)
B.c.h(c,1,o-p)},
et(a,b,c){var s=a-B.a.j(b,1)&65535
B.c.h(c,1,s)
B.c.h(c,0,b+s-32768&65535)},
uV(a){var s,r,q,p,o,n,m,l,k,j=null
if(A.oG().ly(a))return new A.hI()
s=new A.ic(A.oB())
if(s.dn(a))return s
r=new A.kn()
r.f=A.C(a,!1,j,0)
r.a=new A.ex(A.b([],t.b))
if(r.eO())return r
q=new A.lL()
if(q.dn(a))return q
p=new A.lm()
if(p.fc(A.C(a,!1,j,0))!=null)return p
if(A.p_(a).c===943870035)return new A.l1()
if(A.qV(a))return new A.ki()
if(A.n2(A.C(a,!1,j,0)))return new A.fV(!1)
o=new A.lj()
n=A.C(a,!1,j,0)
m=o.a=new A.fa(B.ae)
m.ci(0,n)
if(m.fR())return o
l=new A.kq()
m=A.C(a,!1,j,0)
l.a=m
m=A.oo(m)
l.b=m
if(m!=null)return l
k=new A.l5()
if(k.bb(a)!=null)return k
return j},
vg(a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if($.nK==null){s=$.nK=new Uint8Array(768)
for(r=-256;r<0;++r)s[256+r]=0
for(r=0;r<256;++r)s[256+r]=r
for(r=256;r<512;++r)s[256+r]=255}for(r=0;r<64;++r){s=a5[r]
q=a4[r]
if(!(r<64))return A.a(a7,r)
a7[r]=s*q}for(p=0,r=0;r<8;++r,p+=8){s=1+p
if(!(s<64))return A.a(a7,s)
q=a7[s]
if(q===0){o=2+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=3+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=4+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=5+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=6+p
if(!(o<64))return A.a(a7,o)
if(a7[o]===0){o=7+p
if(!(o<64))return A.a(a7,o)
o=a7[o]===0}else o=!1}else o=!1}else o=!1}else o=!1}else o=!1}else o=!1
if(o){if(!(p<64))return A.a(a7,p)
s=B.a.j(5793*a7[p]+512,10)
n=(s&2147483647)-((s&2147483648)>>>0)
if(!(p<64))return A.a(a7,p)
a7[p]=n
s=p+1
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+2
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+3
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+4
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+5
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+6
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=p+7
if(!(s<64))return A.a(a7,s)
a7[s]=n
continue}if(!(p<64))return A.a(a7,p)
o=B.a.j(5793*a7[p]+128,8)
m=(o&2147483647)-((o&2147483648)>>>0)
o=4+p
if(!(o<64))return A.a(a7,o)
l=B.a.j(5793*a7[o]+128,8)
k=(l&2147483647)-((l&2147483648)>>>0)
l=2+p
if(!(l<64))return A.a(a7,l)
j=a7[l]
i=6+p
if(!(i<64))return A.a(a7,i)
h=a7[i]
g=7+p
if(!(g<64))return A.a(a7,g)
f=a7[g]
e=B.a.j(2896*(q-f)+128,8)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.j(2896*(q+f)+128,8)
c=(f&2147483647)-((f&2147483648)>>>0)
f=3+p
if(!(f<64))return A.a(a7,f)
q=a7[f]<<4
b=(q&2147483647)-((q&2147483648)>>>0)
q=5+p
if(!(q<64))return A.a(a7,q)
e=a7[q]<<4
a=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(j*3784+h*1567+128,8)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.j(j*1567-h*3784+128,8)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.j(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.j(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.j(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.j(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.j(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.j(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.j(b*4017-a0*799+2048,12)
b=(a0&2147483647)-((a0&2147483648)>>>0)
if(!(p<64))return A.a(a7,p)
a7[p]=m+n
if(!(g<64))return A.a(a7,g)
a7[g]=m-n
if(!(s<64))return A.a(a7,s)
a7[s]=k+a1
if(!(i<64))return A.a(a7,i)
a7[i]=k-a1
if(!(l<64))return A.a(a7,l)
a7[l]=e+b
if(!(q<64))return A.a(a7,q)
a7[q]=e-b
if(!(f<64))return A.a(a7,f)
a7[f]=a2+d
if(!(o<64))return A.a(a7,o)
a7[o]=a2-d}for(r=0;r<8;++r){s=8+r
q=a7[s]
if(q===0&&a7[16+r]===0&&a7[24+r]===0&&a7[32+r]===0&&a7[40+r]===0&&a7[48+r]===0&&a7[56+r]===0){q=B.a.j(5793*a7[r]+8192,14)
n=(q&2147483647)-((q&2147483648)>>>0)
if(!(r<64))return A.a(a7,r)
a7[r]=n
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=16+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=24+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=32+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=40+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=48+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
s=56+r
if(!(s<64))return A.a(a7,s)
a7[s]=n
continue}o=B.a.j(5793*a7[r]+2048,12)
m=(o&2147483647)-((o&2147483648)>>>0)
o=32+r
l=B.a.j(5793*a7[o]+2048,12)
k=(l&2147483647)-((l&2147483648)>>>0)
l=16+r
j=a7[l]
i=48+r
h=a7[i]
g=56+r
f=a7[g]
e=B.a.j(2896*(q-f)+2048,12)
d=(e&2147483647)-((e&2147483648)>>>0)
f=B.a.j(2896*(q+f)+2048,12)
c=(f&2147483647)-((f&2147483648)>>>0)
f=24+r
b=a7[f]
q=40+r
a=a7[q]
e=B.a.j(m-k+1,1)
n=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(m+k+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(j*3784+h*1567+2048,12)
e=(e&2147483647)-((e&2147483648)>>>0)
a0=B.a.j(j*1567-h*3784+2048,12)
j=(a0&2147483647)-((a0&2147483648)>>>0)
a0=B.a.j(d-a+1,1)
a0=(a0&2147483647)-((a0&2147483648)>>>0)
a1=B.a.j(d+a+1,1)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(c+b+1,1)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a2=B.a.j(c-b+1,1)
b=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(m-e+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
e=B.a.j(m+e+1,1)
m=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(n-j+1,1)
e=(e&2147483647)-((e&2147483648)>>>0)
a3=B.a.j(n+j+1,1)
k=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(d*2276+a1*3406+2048,12)
n=(a3&2147483647)-((a3&2147483648)>>>0)
a1=B.a.j(d*3406-a1*2276+2048,12)
d=(a1&2147483647)-((a1&2147483648)>>>0)
a1=B.a.j(b*799+a0*4017+2048,12)
a1=(a1&2147483647)-((a1&2147483648)>>>0)
a0=B.a.j(b*4017-a0*799+2048,12)
b=(a0&2147483647)-((a0&2147483648)>>>0)
if(!(r<64))return A.a(a7,r)
a7[r]=m+n
if(!(g<64))return A.a(a7,g)
a7[g]=m-n
a7[s]=k+a1
a7[i]=k-a1
a7[l]=e+b
a7[q]=e-b
a7[f]=a2+d
a7[o]=a2-d}for(s=$.nK,r=0;r<64;++r){s.toString
q=B.a.j(a7[r]+8,4)
q=384+((q&2147483647)-((q&2147483648)>>>0))
if(!(q>=0&&q<768))return A.a(s,q)
q=s[q]
if(!(r<64))return A.a(a6,r)
a6[r]=q}},
v_(e6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3=null,e4="ifd0",e5=e6.r
if(e5.l(0,e4).a.aI(0,274)){s=e5.l(0,e4)
s=s.gc2(s)
s.toString
r=s}else r=0
s=e6.d
q=s.e
q.toString
s=s.d
s.toString
p=r>=5&&r<=8
if(p)o=s
else o=q
if(p)n=q
else n=s
m=A.a5(e3,e3,B.e,0,B.h,n,e3,0,3,e3,o,!1)
m.e=A.eq(e5)
m.gbT().l(0,e4).sc2(0,e3)
l=s-1
k=q-1
e5=e6.Q
s=e5.length
switch(s){case 1:if(0>=s)return A.a(e5,0)
j=e5[0]
i=j.e
h=j.f
g=j.r
e5=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=i.length
a=0
while(!0){a0=e6.d.d
a0.toString
if(!(a<a0))break
a1=B.a.a4(a,g)
if(!(a1<b))return A.a(i,a1)
a2=i[a1]
a0=l-a
a3=0
while(!0){a4=e6.d.e
a4.toString
if(!(a3<a4))break
a5=B.a.a4(a3,h)
if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]
if(c){a4=m.a
if(a4!=null)a4.S(k-a3,a,a6,a6,a6)}else if(d){a4=m.a
if(a4!=null)a4.S(k-a3,a0,a6,a6,a6)}else if(e){a4=m.a
if(a4!=null)a4.S(a3,a0,a6,a6,a6)}else if(f){a4=m.a
if(a4!=null)a4.S(a,a3,a6,a6,a6)}else if(q){a4=m.a
if(a4!=null)a4.S(a0,a3,a6,a6,a6)}else if(s){a4=m.a
if(a4!=null)a4.S(a0,k-a3,a6,a6,a6)}else{a4=m.a
if(e5){if(a4!=null)a4.S(a,k-a3,a6,a6,a6)}else if(a4!=null)a4.S(a3,a,a6,a6,a6)}++a3}++a}break
case 3:if(0>=s)return A.a(e5,0)
j=e5[0]
if(1>=s)return A.a(e5,1)
a7=e5[1]
if(2>=s)return A.a(e5,2)
a8=e5[2]
a9=j.e
b0=a7.e
b1=a8.e
h=j.f
g=j.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
e5=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=a9.length
a0=b0.length
a4=b1.length
a=0
while(!0){b6=e6.d.d
b6.toString
if(!(a<b6))break
a1=B.a.a4(a,g)
b7=B.a.a4(a,b3)
b8=B.a.a4(a,b5)
if(!(a1<b))return A.a(a9,a1)
a2=a9[a1]
if(!(b7<a0))return A.a(b0,b7)
b9=b0[b7]
if(!(b8<a4))return A.a(b1,b8)
c0=b1[b8]
b6=l-a
a3=0
while(!0){c1=e6.d.e
c1.toString
if(!(a3<c1))break
a5=B.a.a4(a3,h)
c2=B.a.a4(a3,b2)
c3=B.a.a4(a3,b4)
if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]<<8>>>0
if(!(c2<b9.length))return A.a(b9,c2)
c4=b9[c2]-128
if(!(c3<c0.length))return A.a(c0,c3)
c5=c0[c3]-128
c1=B.a.j(a6+359*c5+128,8)
c6=B.a.I((c1&2147483647)-((c1&2147483648)>>>0),0,255)
c1=B.a.j(a6-88*c4-183*c5+128,8)
c7=B.a.I((c1&2147483647)-((c1&2147483648)>>>0),0,255)
c1=B.a.j(a6+454*c4+128,8)
c8=B.a.I((c1&2147483647)-((c1&2147483648)>>>0),0,255)
if(c){c1=m.a
if(c1!=null)c1.S(k-a3,a,c6,c7,c8)}else if(d){c1=m.a
if(c1!=null)c1.S(k-a3,b6,c6,c7,c8)}else if(e){c1=m.a
if(c1!=null)c1.S(a3,b6,c6,c7,c8)}else if(f){c1=m.a
if(c1!=null)c1.S(a,a3,c6,c7,c8)}else if(q){c1=m.a
if(c1!=null)c1.S(b6,a3,c6,c7,c8)}else if(s){c1=m.a
if(c1!=null)c1.S(b6,k-a3,c6,c7,c8)}else{c1=m.a
if(e5){if(c1!=null)c1.S(a,k-a3,c6,c7,c8)}else if(c1!=null)c1.S(a3,a,c6,c7,c8)}++a3}++a}break
case 4:q=e6.c
if(q==null)throw A.f(A.q("Unsupported color mode (4 components)"))
c9=q.d!==0&&!0
if(0>=s)return A.a(e5,0)
j=e5[0]
if(1>=s)return A.a(e5,1)
a7=e5[1]
if(2>=s)return A.a(e5,2)
a8=e5[2]
if(3>=s)return A.a(e5,3)
d0=e5[3]
a9=j.e
b0=a7.e
b1=a8.e
d1=d0.e
h=j.f
g=j.r
b2=a7.f
b3=a7.r
b4=a8.f
b5=a8.r
d2=d0.f
d3=d0.r
e5=r===8
s=r===7
q=r===6
f=r===5
e=r===4
d=r===3
c=r===2
b=!c9
a0=a9.length
a4=b0.length
b6=b1.length
c1=d1.length
a=0
while(!0){d4=e6.d.d
d4.toString
if(!(a<d4))break
a1=B.a.a4(a,g)
b7=B.a.a4(a,b3)
b8=B.a.a4(a,b5)
d5=B.a.a4(a,d3)
if(!(a1<a0))return A.a(a9,a1)
a2=a9[a1]
if(!(b7<a4))return A.a(b0,b7)
b9=b0[b7]
if(!(b8<b6))return A.a(b1,b8)
c0=b1[b8]
if(!(d5<c1))return A.a(d1,d5)
d6=d1[d5]
d4=l-a
a3=0
while(!0){d7=e6.d.e
d7.toString
if(!(a3<d7))break
a5=B.a.a4(a3,h)
c2=B.a.a4(a3,b2)
c3=B.a.a4(a3,b4)
d8=B.a.a4(a3,d2)
if(b){if(!(a5<a2.length))return A.a(a2,a5)
d9=a2[a5]
if(!(c2<b9.length))return A.a(b9,c2)
e0=b9[c2]
if(!(c3<c0.length))return A.a(c0,c3)
a6=c0[c3]
if(!(d8<d6.length))return A.a(d6,d8)
e1=d6[d8]}else{if(!(a5<a2.length))return A.a(a2,a5)
a6=a2[a5]
if(!(c2<b9.length))return A.a(b9,c2)
c4=b9[c2]
if(!(c3<c0.length))return A.a(c0,c3)
c5=c0[c3]
if(!(d8<d6.length))return A.a(d6,d8)
e1=d6[d8]
d7=c5-128
d9=255-B.a.I(B.b.i(a6+1.402*d7),0,255)
e2=c4-128
e0=255-B.b.i(B.b.I(a6-0.3441363*e2-0.71413636*d7,0,255))
a6=255-B.a.I(B.b.i(a6+1.772*e2),0,255)}d7=B.a.j(d9*e1,8)
c6=(d7&2147483647)-((d7&2147483648)>>>0)
d7=B.a.j(e0*e1,8)
c7=(d7&2147483647)-((d7&2147483648)>>>0)
d7=B.a.j(a6*e1,8)
c8=(d7&2147483647)-((d7&2147483648)>>>0)
if(c){d7=m.a
if(d7!=null)d7.S(k-a3,a,c6,c7,c8)}else if(d){d7=m.a
if(d7!=null)d7.S(k-a3,d4,c6,c7,c8)}else if(e){d7=m.a
if(d7!=null)d7.S(a3,d4,c6,c7,c8)}else if(f){d7=m.a
if(d7!=null)d7.S(a,a3,c6,c7,c8)}else if(q){d7=m.a
if(d7!=null)d7.S(d4,a3,c6,c7,c8)}else if(s){d7=m.a
if(d7!=null)d7.S(d4,k-a3,c6,c7,c8)}else{d7=m.a
if(e5){if(d7!=null)d7.S(a,k-a3,c6,c7,c8)}else if(d7!=null)d7.S(a3,a,c6,c7,c8)}++a3}++a}break
default:throw A.f(A.q("Unsupported color mode"))}return m},
tr(a,b,c,d,e,f){A.to(f,a,b,c,d,e,!0,f)},
ts(a,b,c,d,e,f){A.tp(f,a,b,c,d,e,!0,f)},
tq(a,b,c,d,e,f){A.tn(f,a,b,c,d,e,!0,f)},
e1(a,b,c,d,e){var s,r,q,p
for(s=0;s<d;++s){r=a.a
q=a.d+s
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=b.a
p=b.d+s
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.H(c.a,c.d+s,q+p)}},
to(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.C(a,!1,q,p),m=A.C(a,!1,q,p),l=A.u(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.e1(A.u(n,q,1),l,A.u(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.e1(n,A.u(l,q,s),m,1,!0)
A.e1(A.u(n,q,1),l,A.u(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
tp(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.C(a,!1,q,p),m=A.C(h,!1,q,p),l=A.u(m,q,0)
if(e===0){s=n.a
r=n.d
if(!(r>=0&&r<s.length))return A.a(s,r)
m.h(0,0,s[r])
A.e1(A.u(n,q,1),l,A.u(m,q,1),b-1,!0)
n.d+=d
m.d+=d
e=1}else l.d-=d
for(;e<o;){A.e1(n,l,m,b,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
tn(a,b,c,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i=null,h=a1*a0,g=a1+a2,f=A.C(a,!1,i,h),e=A.C(a4,!1,i,h),d=A.u(e,i,0)
if(a1===0){s=f.a
r=f.d
if(!(r>=0&&r<s.length))return A.a(s,r)
e.h(0,0,s[r])
A.e1(A.u(f,i,1),d,A.u(e,i,1),b-1,!0)
d.d+=a0
f.d+=a0
e.d+=a0
a1=1}for(s=-a0;a1<g;){A.e1(f,A.u(d,i,s),e,1,!0)
for(q=1;q<b;++q){r=d.a
p=d.d
o=p+(q-1)
n=r.length
if(!(o>=0&&o<n))return A.a(r,o)
o=r[o]
m=q-a0
l=p+m
if(!(l>=0&&l<n))return A.a(r,l)
l=r[l]
m=p+(m-1)
if(!(m>=0&&m<n))return A.a(r,m)
k=o+l-r[m]
if((k&4294967040)>>>0===0)j=k
else j=k<0?0:255
r=f.a
p=f.d+q
if(!(p>=0&&p<r.length))return A.a(r,p)
p=r[p]
J.H(e.a,e.d+q,p+j)}++a1
d.d+=a0
f.d+=a0
e.d+=a0}},
uM(a){var s,r="ifd0",q=A.bl(a,!1,!1)
if(a.gbT().l(0,r).a.aI(0,274)){s=a.gbT().l(0,r)
s=s.gc2(s)===1}else s=!0
if(s)return q
q.e=A.eq(a.gbT())
q.gbT().l(0,r).sc2(0,null)
s=a.gbT().l(0,r)
switch(s.gc2(s)){case 2:return A.k0(q)
case 3:return A.uW(q,B.cr)
case 4:return A.k0(A.k_(q,180))
case 5:return A.k0(A.k_(q,90))
case 6:return A.k_(q,90)
case 7:return A.k0(A.k_(q,-90))
case 8:return A.k_(q,-90)}return q},
uR(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
a.gbi()
if(a.gbT().l(0,"ifd0").a.aI(0,274)){s=a.gbT().l(0,"ifd0")
s=s.gc2(s)!==1}else s=!1
if(s)a=A.uM(a)
if(b<=0)b=B.b.i(a0*(a.gM(a)/a.gX(a)))
if(a0<=0)a0=B.b.i(b*(a.gX(a)/a.gM(a)))
if(a0===a.gX(a)&&b===a.gM(a))return A.bl(a,!1,!1)
r=new Int32Array(a0)
q=a.gX(a)/a0
for(p=0;p<a0;++p){s=B.b.i(p*q)
if(!(p<a0))return A.a(r,p)
r[p]=s}o=a.gaq().length
for(s=t.g,n=c,m=0;m<o;++m){l=a.x
if(l===$){l=A.b([],s)
a.sbP(l)}if(!(m<l.length))return A.a(l,m)
k=l[m]
j=A.hp(k,b,!0,a0)
i=n==null
if(!i)n.aH(j)
if(i)n=j
i=k.a
h=i==null
g=h?c:i.b
f=(g==null?0:g)/b
if((h?c:i.gP())!=null)for(e=0;e<b;++e){d=B.b.i(e*f)
for(p=0;p<a0;++p){if(!(p<a0))return A.a(r,p)
i=r[p]
h=k.a
if(h==null)i=c
else{i=h.aK(i,d)
i=B.b.i(i.gL(i))}if(i==null)i=0
h=j.a
if(h!=null)h.aE(p,e,i)}}else for(e=0;e<b;++e){d=B.b.i(e*f)
for(p=0;p<a0;++p){if(!(p<a0))return A.a(r,p)
i=r[p]
h=k.a
i=h==null?c:h.K(i,d,c)
j.bO(p,e,i==null?new A.R():i)}}}n.toString
return n},
k_(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=B.a.a2(a9,360)
a8.gbi()
if(B.a.a2(a7,90)===0)switch(B.a.U(a7,90)){case 1:return A.uw(a8)
case 2:return A.uu(a8)
case 3:return A.uv(a8)
default:return A.bl(a8,!1,!1)}s=a7*3.141592653589793/180
r=Math.cos(s)
q=Math.sin(s)
p=a8.gX(a8)
o=a8.gX(a8)
n=a8.gM(a8)
m=a8.gM(a8)
l=0.5*a8.gX(a8)
k=0.5*a8.gM(a8)
n=Math.abs(p*r)+Math.abs(n*q)
j=0.5*n
m=Math.abs(o*q)+Math.abs(m*r)
i=0.5*m
h=a8.gaq().length
for(p=t.g,g=a6,f=0;f<h;++f){e=a8.x
if(e===$){e=A.b([],p)
a8.sbP(e)}if(!(f<e.length))return A.a(e,f)
d=e[f]
o=g==null
c=o?a6:g.dh()
if(c==null){b=B.b.i(n)
c=A.hp(a8,B.b.i(m),!0,b)}if(o)g=c
for(o=c.a,o=o.gF(o);o.C();){a=o.gJ(o)
a0=a.gaT(a)
a1=a.gaU(a)
b=a0-j
a2=a1-i
a3=l+b*r+a2*q
a4=k-b*q+a2*r
if(a3>=0)if(a4>=0){b=d.a
a2=b==null
a5=a2?a6:b.a
if(a3<(a5==null?0:a5)){b=a2?a6:b.b
b=a4<(b==null?0:b)}else b=!1}else b=!1
else b=!1
if(b)c.bO(a0,a1,d.h8(a3,a4,B.cw))}}g.toString
return g},
uw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaq(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.an)(s),++p){o=s[p]
n=q==null
m=n?f:q.dh()
if(m==null){l=o.a
k=l==null
j=k?f:l.b
if(j==null)j=0
l=k?f:l.a
m=A.hp(o,l==null?0:l,!0,j)}if(n)q=m
n=o.a
n=n==null?f:n.b
i=(n==null?0:n)-1
h=0
while(!0){n=m.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
g=0
while(!0){n=m.a
n=n==null?f:n.a
if(!(g<(n==null?0:n)))break
n=o.a
n=n==null?f:n.K(h,i-g,f)
m.bO(g,h,n==null?new A.R():n);++g}++h}}q.toString
return q},
uu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaq(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.an)(s),++p){o=s[p]
n=o.a
m=n==null
l=m?f:n.a
k=(l==null?0:l)-1
n=m?f:n.b
j=(n==null?0:n)-1
n=q==null
i=n?f:q.dh()
if(i==null)i=A.bl(o,!0,!0)
if(n)q=i
h=0
while(!0){n=i.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
n=j-h
g=0
while(!0){m=i.a
m=m==null?f:m.a
if(!(g<(m==null?0:m)))break
m=o.a
m=m==null?f:m.K(k-g,n,f)
i.bO(g,h,m==null?new A.R():m);++g}++h}}q.toString
return q},
uv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
for(s=a.gaq(),r=s.length,q=f,p=0;p<s.length;s.length===r||(0,A.an)(s),++p){o=s[p]
n=a.a
n=n==null?f:n.a
m=(n==null?0:n)-1
n=q==null
l=n?f:q.dh()
if(l==null){k=o.a
j=k==null
i=j?f:k.b
if(i==null)i=0
k=j?f:k.a
l=A.hp(o,k==null?0:k,!0,i)}if(n)q=l
h=0
while(!0){n=l.a
n=n==null?f:n.b
if(!(h<(n==null?0:n)))break
n=m-h
g=0
while(!0){k=l.a
k=k==null?f:k.a
if(!(g<(k==null?0:k)))break
k=o.a
k=k==null?f:k.K(n,g,f)
l.bO(g,h,k==null?new A.R():k);++g}++h}}q.toString
return q},
mN(a){var s
a=(a&-a)>>>0
s=a!==0?31:32
if((a&65535)!==0)s-=16
if((a&16711935)!==0)s-=8
if((a&252645135)!==0)s-=4
if((a&858993459)!==0)s-=2
return(a&1431655765)!==0?s-1:s},
vl(a){$.o0().h(0,0,a)
return $.qo().l(0,0)},
q0(a,b,c,d){return(B.a.I(a,0,255)|B.a.I(b,0,255)<<8|B.a.I(c,0,255)<<16|B.a.I(d,0,255)<<24)>>>0},
bv(a,b,c){var s,r,q,p,o=b.gn(b),n=b.gG(),m=a.gP(),l=m==null?null:m.gG()
if(l==null)l=a.gG()
s=a.gn(a)
if(o===1){r=a.gn(a)>2?a.gah():a.l(0,0)
b.h(0,0,A.nP(A.fI(a.l(0,0))?B.b.dm(r):r,l,n))}else if(o<=s)for(q=0;q<o;++q)b.h(0,q,A.nP(a.l(0,q),l,n))
else{for(q=0;q<s;++q)b.h(0,q,A.nP(a.l(0,q),l,n))
p=s===1?b.l(0,0):0
for(q=s;q<o;++q)b.h(0,q,q===3?c:p)}return b},
nO(a,b,c,d,e){var s,r,q=a.gP(),p=q==null?null:q.gG()
if(p==null)p=a.gG()
q=e==null
s=q?null:e.gG()
c=s==null?c:s
if(c==null)c=a.gG()
s=q?null:e.gn(e)
d=s==null?d:s
if(d==null)d=a.gn(a)
if(b==null)b=0
if(c===p&&d===a.gn(a)){if(q)return a.N(0)
e.ae(0,a)
return e}switch(c.a){case 3:if(q)r=new A.bJ(new Uint8Array(d))
else r=e
return A.bv(a,r,b)
case 0:return A.bv(a,q?new A.dl(d,0):e,b)
case 1:return A.bv(a,q?new A.dn(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.dq(d,new Uint8Array(q))}else r=e
return A.bv(a,r,b)
case 4:if(q)r=new A.dm(new Uint16Array(d))
else r=e
return A.bv(a,r,b)
case 5:if(q)r=new A.dp(new Uint32Array(d))
else r=e
return A.bv(a,r,b)
case 6:if(q)r=new A.dk(new Int8Array(d))
else r=e
return A.bv(a,r,b)
case 7:if(q)r=new A.di(new Int16Array(d))
else r=e
return A.bv(a,r,b)
case 8:if(q)r=new A.dj(new Int32Array(d))
else r=e
return A.bv(a,r,b)
case 9:if(q)r=new A.df(new Uint16Array(d))
else r=e
return A.bv(a,r,b)
case 10:if(q)r=new A.dg(new Float32Array(d))
else r=e
return A.bv(a,r,b)
case 11:if(q)r=new A.dh(new Float64Array(d))
else r=e
return A.bv(a,r,b)}},
af(a){return 0.299*a.gq(a)+0.587*a.gt()+0.114*a.gv(a)},
pT(a,b,c,d){var s=1-d/255
return A.b([B.b.c3(255*(1-a/255)*s),B.b.c3(255*(1-b/255)*s),B.b.c3(255*(1-c/255)*s)],t.t)},
U(a){var s,r,q,p
$.nZ()[0]=a
s=$.qm()
if(0>=s.length)return A.a(s,0)
r=s[0]
if(a===0)return r>>>16
if($.Z==null)A.a4()
q=r>>>23&511
s=$.kl.cA()
if(!(q<s.length))return A.a(s,q)
q=s[q]
if(q!==0){p=r&8388607
return q+(p+4095+(p>>>13&1)>>>13)}return A.qX(r)},
qX(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.aO(o+(B.a.W(1,s-1)-1)+(B.a.Z(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
a4(){var s,r,q,p,o,n=$.Z
if(n!=null)return n
s=new Uint32Array(65536)
$.Z=A.rh(s.buffer,0,null)
n=new Uint16Array(512)
$.kl.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){$.kl.toString
n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{$.kl.toString
p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.qY(r)
n=$.Z
n.toString
return n},
qY(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{for(;(p&1024)===0;){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0},
rD(a){return a==null||typeof a=="string"||typeof a=="number"||A.d5(a)},
nu(a){if(a==null||typeof a=="string"||typeof a=="number"||A.d5(a))return!0
if(t.bF.b(a)||t.oT.b(a)||t.cq.b(a))return!0
if(t.j.b(a)&&J.o5(a,A.uE()))return!0
return!1},
rE(a){return!A.nu(a)},
lp(a,b){return A.pK(function(){var s=a,r=b
var q=0,p=1,o,n,m,l,k
return function $async$lp(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=J.qz(s,A.uD()),n=n.gF(n),m=t.K
case 2:if(!n.C()){q=3
break}l=n.gJ(n)
q=!r.bH(0,l)?4:5
break
case 4:k=l==null
r.H(0,k?m.a(l):l)
q=6
return k?m.a(l):l
case 6:case 5:q=2
break
case 3:return A.pn()
case 1:return A.po(o)}}},t.K)},
p7(a,b){return A.pK(function(){var s=a,r=b
var q=0,p=2,o,n,m,l,k,j,i,h
return function $async$p7(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:if(A.nu(s)){q=1
break}n=A.lp(s,r)
m=A.B(n,!0,n.$ti.m("e.E"))
n=t.R,l=t.f,k=0
case 3:if(!(k<m.length)){q=5
break}j=k+1
i=m[k]
q=l.b(i)?6:8
break
case 6:h=J.da(i)
if(!J.o5(h.gbk(i),A.uC()))A.a1(A.c7("Map keys must be strings, numbers or booleans.",A.bs()))
B.c.dg(m,A.lp(h.gbD(i),r))
q=7
break
case 8:q=n.b(i)?9:11
break
case 9:B.c.dg(m,A.lp(i,r))
q=10
break
case 11:q=12
return i
case 12:case 10:case 7:case 4:k=j
q=3
break
case 5:case 1:return A.pn()
case 2:return A.po(o)}}},t.K)},
tt(a){return A.x(J.db(a,2))},
pi(a){var s,r,q=J.ah(a),p=q.l(a,1)
if(p==null)p=null
else{s=new A.jg()
s.a=t.fT.a(p)
p=s}q.h(a,1,p)
q.h(a,4,A.qE(t.lH.a(q.l(a,4))))
if(q.l(a,7)==null)q.h(a,7,!1)
if(q.l(a,3)==null)q.h(a,3,B.bp)
r=q.l(a,0)
if(r!=null)q.h(a,0,A.oh(new A.bA(Date.now(),!1).h2().a-t.h.a($.o1()).a).a-A.x(r))},
q1(a){var s,r,q
try{if(a!=null)a.$0()}catch(r){s=A.b5(r)
A.D(a)
A.D(s)
q=$.br
q!=null}}},J={
nT(a,b,c,d){return{i:a,p:b,e:c,x:d}},
mP(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.nR==null){A.v5()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.f(A.ls("Return interceptor for "+A.D(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ml
if(o==null)o=$.ml=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.vb(a)
if(p!=null)return p
if(typeof a=="function")return B.cx
s=Object.getPrototypeOf(a)
if(s==null)return B.bE
if(s===Object.prototype)return B.bE
if(typeof q=="function"){o=$.ml
if(o==null)o=$.ml=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.aC,enumerable:false,writable:true,configurable:true})
return B.aC}return B.aC},
nb(a,b){if(a<0||a>4294967295)throw A.f(A.aq(a,0,4294967295,"length",null))
return J.oE(new Array(a),b)},
aD(a,b){if(a<0||a>4294967295)throw A.f(A.aq(a,0,4294967295,"length",null))
return J.oE(new Array(a),b)},
dL(a,b){if(a<0)throw A.f(A.dc("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.m("E<0>"))},
na(a,b){return A.b(new Array(a),b.m("E<0>"))},
oE(a,b){return J.ky(A.b(a,b.m("E<0>")),b)},
ky(a,b){a.fixed$length=Array
return a},
oF(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ra(a,b){var s,r
for(s=a.length;b<s;){r=B.l.bY(a,b)
if(r!==32&&r!==13&&!J.oF(r))break;++b}return b},
rb(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.l.cD(a,s)
if(r!==32&&r!==13&&!J.oF(r))break}return b},
d9(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eJ.prototype
return J.hH.prototype}if(typeof a=="string")return J.dN.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.hG.prototype
if(a.constructor==Array)return J.E.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof A.N)return a
return J.mP(a)},
ae(a){if(typeof a=="string")return J.dN.prototype
if(a==null)return a
if(a.constructor==Array)return J.E.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof A.N)return a
return J.mP(a)},
ah(a){if(a==null)return a
if(a.constructor==Array)return J.E.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof A.N)return a
return J.mP(a)},
v0(a){if(typeof a=="number")return J.dM.prototype
if(a==null)return a
if(!(a instanceof A.N))return J.d1.prototype
return a},
da(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof A.N)return a
return J.mP(a)},
nQ(a){if(a==null)return a
if(!(a instanceof A.N))return J.d1.prototype
return a},
bg(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d9(a).R(a,b)},
db(a,b){if(typeof b==="number")if(a.constructor==Array||A.v9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ah(a).l(a,b)},
H(a,b,c){return J.ah(a).h(a,b,c)},
qq(a,b,c,d){return J.da(a).kh(a,b,c,d)},
qr(a,b,c,d){return J.da(a).e2(a,b,c,d)},
qs(a){return J.nQ(a).e3(a)},
qt(a,b,c){return J.nQ(a).fG(a,b,c)},
qu(a,b){return J.ah(a).a7(a,b)},
o4(a,b){return J.nQ(a).kU(a,b)},
o5(a,b){return J.ah(a).dk(a,b)},
bG(a,b,c,d){return J.ah(a).aL(a,b,c,d)},
o6(a,b){return J.da(a).ag(a,b)},
c9(a){return J.d9(a).gE(a)},
qv(a){return J.ae(a).gaS(a)},
bx(a){return J.ah(a).gF(a)},
qw(a){return J.da(a).gbk(a)},
bH(a){return J.ae(a).gn(a)},
qx(a){return J.d9(a).gaC(a)},
o7(a,b,c){return J.da(a).hb(a,b,c)},
o8(a,b){return J.ah(a).bE(a,b)},
k4(a,b,c){return J.ah(a).bd(a,b,c)},
n0(a){return J.v0(a).i(a)},
qy(a){return J.ah(a).c4(a)},
ec(a){return J.d9(a).A(a)},
qz(a,b){return J.ah(a).c5(a,b)},
eF:function eF(){},
hG:function hG(){},
eK:function eK(){},
d:function d(){},
ch:function ch(){},
ia:function ia(){},
d1:function d1(){},
bP:function bP(){},
E:function E(a){this.$ti=a},
kz:function kz(a){this.$ti=a},
ee:function ee(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dM:function dM(){},
eJ:function eJ(){},
hH:function hH(){},
dN:function dN(){}},B={}
var w=[A,J,B]
var $={}
A.nc.prototype={}
J.eF.prototype={
R(a,b){return a===b},
gE(a){return A.f1(a)},
A(a){return"Instance of '"+A.l_(a)+"'"},
gaC(a){return A.d8(A.nL(this))}}
J.hG.prototype={
A(a){return String(a)},
gE(a){return a?519018:218159},
gaC(a){return A.d8(t.v)},
$iV:1,
$iad:1}
J.eK.prototype={
R(a,b){return null==b},
A(a){return"null"},
gE(a){return 0},
$iV:1,
$iaa:1}
J.d.prototype={$in:1}
J.ch.prototype={
gE(a){return 0},
A(a){return String(a)}}
J.ia.prototype={}
J.d1.prototype={}
J.bP.prototype={
A(a){var s=a[$.q5()]
if(s==null)return this.hs(a)
return"JavaScript function for "+J.ec(s)},
$icy:1}
J.E.prototype={
H(a,b){A.aQ(a).c.a(b)
if(!!a.fixed$length)A.a1(A.O("add"))
a.push(b)},
cj(a,b){var s
if(!!a.fixed$length)A.a1(A.O("remove"))
for(s=0;s<a.length;++s)if(J.bg(a[s],b)){a.splice(s,1)
return!0}return!1},
c5(a,b){var s=A.aQ(a)
return new A.b3(a,s.m("ad(1)").a(b),s.m("b3<1>"))},
dg(a,b){var s
A.aQ(a).m("e<1>").a(b)
if(!!a.fixed$length)A.a1(A.O("addAll"))
for(s=new A.cr(b.a(),b.$ti.m("cr<1>"));s.C();)a.push(s.gJ(s))},
bE(a,b){return A.iB(a,b,null,A.aQ(a).c)},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
bd(a,b,c){if(b<0||b>a.length)throw A.f(A.aq(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.f(A.aq(c,b,a.length,"end",null))
if(b===c)return A.b([],A.aQ(a))
return A.b(a.slice(b,c),A.aQ(a))},
gfS(a){var s=a.length
if(s>0)return a[s-1]
throw A.f(A.oC())},
ai(a,b,c,d,e){var s,r,q,p,o
A.aQ(a).m("e<1>").a(d)
if(!!a.immutable$list)A.a1(A.O("setRange"))
A.bb(b,c,a.length)
s=c-b
if(s===0)return
A.bD(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.o8(d,e).aM(0,!1)
q=0}p=J.ae(r)
if(q+s>p.gn(r))throw A.f(A.oD())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.l(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.l(r,q+o)},
aL(a,b,c,d){var s
A.aQ(a).m("1?").a(d)
if(!!a.immutable$list)A.a1(A.O("fill range"))
A.bb(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
dk(a,b){var s,r
A.aQ(a).m("ad(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.c5(b.$1(a[r])))return!1
if(a.length!==s)throw A.f(A.bK(a))}return!0},
bH(a,b){var s
for(s=0;s<a.length;++s)if(J.bg(a[s],b))return!0
return!1},
gaS(a){return a.length===0},
gfP(a){return a.length!==0},
A(a){return A.n9(a,"[","]")},
aM(a,b){var s=A.b(a.slice(0),A.aQ(a))
return s},
c4(a){return this.aM(a,!0)},
gF(a){return new J.ee(a,a.length,A.aQ(a).m("ee<1>"))},
gE(a){return A.f1(a)},
gn(a){return a.length},
sn(a,b){if(!!a.fixed$length)A.a1(A.O("set length"))
if(b<0)throw A.f(A.aq(b,0,null,"newLength",null))
if(b>a.length)A.aQ(a).c.a(null)
a.length=b},
l(a,b){if(!(b>=0&&b<a.length))throw A.f(A.eb(a,b))
return a[b]},
h(a,b,c){A.aQ(a).c.a(c)
if(!!a.immutable$list)A.a1(A.O("indexed set"))
if(!(b>=0&&b<a.length))throw A.f(A.eb(a,b))
a[b]=c},
$iI:1,
$it:1,
$ie:1,
$ik:1}
J.kz.prototype={}
J.ee.prototype={
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.an(q)
throw A.f(q)}s=r.c
if(s>=p){r.seB(null)
return!1}r.seB(q[s]);++r.c
return!0},
seB(a){this.d=this.$ti.m("1?").a(a)},
$iF:1}
J.dM.prototype={
e4(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ge8(b)
if(this.ge8(a)===s)return 0
if(this.ge8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ge8(a){return a===0?1/a<0:a<0},
i(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.f(A.O(""+a+".toInt()"))},
b2(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.f(A.O(""+a+".ceil()"))},
dm(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.f(A.O(""+a+".floor()"))},
c3(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.O(""+a+".round()"))},
I(a,b,c){if(this.e4(b,c)>0)throw A.f(A.c4(b))
if(this.e4(a,b)<0)return b
if(this.e4(a,c)>0)return c
return a},
cP(a,b){var s,r,q,p
if(b<2||b>36)throw A.f(A.aq(b,2,36,"radix",null))
s=a.toString(b)
if(B.l.cD(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.a1(A.O("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.a(r,1)
s=r[1]
if(3>=q)return A.a(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.l.du("0",p)},
A(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a2(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aA(a,b){A.a6(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fk(a,b)},
U(a,b){return(a|0)===a?a/b|0:this.fk(a,b)},
fk(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.f(A.O("Result of truncating division is "+A.D(s)+": "+A.D(a)+" ~/ "+b))},
W(a,b){if(b<0)throw A.f(A.c4(b))
return b>31?0:a<<b>>>0},
O(a,b){return b>31?0:a<<b>>>0},
aO(a,b){var s
if(b<0)throw A.f(A.c4(b))
if(a>0)s=this.a4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j(a,b){var s
if(a>0)s=this.a4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
Z(a,b){if(0>b)throw A.f(A.c4(b))
return this.a4(a,b)},
a4(a,b){return b>31?0:a>>>b},
gaC(a){return A.d8(t.cZ)},
$iP:1,
$il:1}
J.eJ.prototype={
ar(a,b){var s=this.W(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gaC(a){return A.d8(t.p)},
$iV:1,
$ih:1}
J.hH.prototype={
gaC(a){return A.d8(t.V)},
$iV:1}
J.dN.prototype={
cD(a,b){if(b<0)throw A.f(A.eb(a,b))
if(b>=a.length)A.a1(A.eb(a,b))
return a.charCodeAt(b)},
bY(a,b){if(b>=a.length)throw A.f(A.eb(a,b))
return a.charCodeAt(b)},
b9(a,b){return a+b},
d_(a,b,c){return a.substring(b,A.bb(b,c,a.length))},
lw(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.bY(p,0)===133){s=J.ra(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.cD(p,r)===133?J.rb(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
du(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.cc)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
lb(a,b,c){var s=b-a.length
if(s<=0)return a
return this.du(c,s)+a},
A(a){return a},
gE(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaC(a){return A.d8(t.N)},
gn(a){return a.length},
$iI:1,
$iV:1,
$iA:1}
A.cg.prototype={
A(a){return"LateInitializationError: "+this.a}}
A.bh.prototype={
gn(a){return this.a.length},
l(a,b){return B.l.cD(this.a,b)}}
A.mW.prototype={
$0(){var s=new A.ab($.a0,t.av)
s.dA(null)
return s},
$S:23}
A.l8.prototype={}
A.t.prototype={}
A.bn.prototype={
gF(a){var s=this
return new A.cK(s,s.gn(s),A.o(s).m("cK<bn.E>"))},
gaS(a){return this.gn(this)===0},
dk(a,b){var s,r,q=this
A.o(q).m("ad(bn.E)").a(b)
s=q.gn(q)
for(r=0;r<s;++r){if(!A.c5(b.$1(q.a7(0,r))))return!1
if(s!==q.gn(q))throw A.f(A.bK(q))}return!0},
c5(a,b){return this.hn(0,A.o(this).m("ad(bn.E)").a(b))},
bE(a,b){return A.iB(this,b,null,A.o(this).m("bn.E"))},
aM(a,b){return A.B(this,!0,A.o(this).m("bn.E"))},
c4(a){return this.aM(a,!0)}}
A.f9.prototype={
gj_(){var s=J.bH(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkn(){var s=J.bH(this.a),r=this.b
if(r>s)return s
return r},
gn(a){var s,r=J.bH(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.bc()
return s-q},
a7(a,b){var s=this,r=s.gkn()+b
if(b<0||r>=s.gj_())throw A.f(A.a8(b,s.gn(s),s,"index"))
return J.qu(s.a,r)},
bE(a,b){var s,r,q=this
A.bD(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.em(q.$ti.m("em<1>"))
return A.iB(q.a,s,r,q.$ti.c)},
aM(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ae(n),l=m.gn(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.dL(0,n):J.nb(0,n)}r=A.am(s,m.a7(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.c.h(r,q,m.a7(n,o+q))
if(m.gn(n)<l)throw A.f(A.bK(p))}return r},
c4(a){return this.aM(a,!0)}}
A.cK.prototype={
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s,r=this,q=r.a,p=J.ae(q),o=p.gn(q)
if(r.b!==o)throw A.f(A.bK(q))
s=r.c
if(s>=o){r.scn(null)
return!1}r.scn(p.a7(q,s));++r.c
return!0},
scn(a){this.d=this.$ti.m("1?").a(a)},
$iF:1}
A.eN.prototype={
gF(a){var s=A.o(this)
return new A.cL(J.bx(this.a),this.b,s.m("@<1>").au(s.z[1]).m("cL<1,2>"))},
gn(a){return J.bH(this.a)}}
A.el.prototype={$it:1}
A.cL.prototype={
C(){var s=this,r=s.b
if(r.C()){s.scn(s.c.$1(r.gJ(r)))
return!0}s.scn(null)
return!1},
gJ(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
scn(a){this.a=this.$ti.m("2?").a(a)},
$iF:1}
A.b3.prototype={
gF(a){return new A.fi(J.bx(this.a),this.b,this.$ti.m("fi<1>"))}}
A.fi.prototype={
C(){var s,r
for(s=this.a,r=this.b;s.C();)if(A.c5(r.$1(s.gJ(s))))return!0
return!1},
gJ(a){var s=this.a
return s.gJ(s)},
$iF:1}
A.bT.prototype={
bE(a,b){A.k6(b,"count",t.p)
A.bD(b,"count")
return new A.bT(this.a,this.b+b,A.o(this).m("bT<1>"))},
gF(a){return new A.f6(J.bx(this.a),this.b,A.o(this).m("f6<1>"))}}
A.dt.prototype={
gn(a){var s=J.bH(this.a)-this.b
if(s>=0)return s
return 0},
bE(a,b){A.k6(b,"count",t.p)
A.bD(b,"count")
return new A.dt(this.a,this.b+b,this.$ti)},
$it:1}
A.f6.prototype={
C(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.C()
this.b=0
return s.C()},
gJ(a){var s=this.a
return s.gJ(s)},
$iF:1}
A.em.prototype={
gF(a){return B.c5},
gn(a){return 0},
c5(a,b){this.$ti.m("ad(1)").a(b)
return this},
bE(a,b){A.bD(b,"count")
return this},
aM(a,b){var s=this.$ti.c
return b?J.dL(0,s):J.nb(0,s)},
c4(a){return this.aM(a,!0)}}
A.en.prototype={
C(){return!1},
gJ(a){throw A.f(A.oC())},
$iF:1}
A.aA.prototype={}
A.cm.prototype={
h(a,b,c){A.o(this).m("cm.E").a(c)
throw A.f(A.O("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){A.o(this).m("e<cm.E>").a(d)
throw A.f(A.O("Cannot modify an unmodifiable list"))},
bs(a,b,c,d){return this.ai(a,b,c,d,0)}}
A.e0.prototype={}
A.ei.prototype={
gaS(a){return this.gn(this)===0},
A(a){return A.ng(this)},
$ia9:1}
A.cz.prototype={
cv(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.r1(r)
o=A.oI(A.up(),q,r,s.z[1])
A.pW(p.a,o)
p.$map=o}return o},
l(a,b){return this.cv().l(0,b)},
ag(a,b){this.$ti.m("~(1,2)").a(b)
this.cv().ag(0,b)},
gbk(a){var s=this.cv()
return new A.bm(s,A.o(s).m("bm<1>"))},
gbD(a){var s=this.cv()
return s.gbD(s)},
gn(a){return this.cv().a}}
A.km.prototype={
$1(a){return this.a.b(a)},
$S:43}
A.lq.prototype={
bB(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.eS.prototype={
A(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.hL.prototype={
A(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iO.prototype={
A(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kV.prototype={
A(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ep.prototype={}
A.fz.prototype={
A(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icl:1}
A.cd.prototype={
A(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.q3(r==null?"unknown":r)+"'"},
$icy:1,
glC(){return this},
$C:"$1",
$R:1,
$D:null}
A.fW.prototype={$C:"$0",$R:0}
A.fX.prototype={$C:"$2",$R:2}
A.iD.prototype={}
A.iy.prototype={
A(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.q3(s)+"'"}}
A.dd.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dd))return!1
return this.$_target===b.$_target&&this.a===b.a},
gE(a){return(A.nU(this.a)^A.f1(this.$_target))>>>0},
A(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.l_(this.a)+"'")}}
A.j3.prototype={
A(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.iu.prototype={
A(a){return"RuntimeError: "+this.a}}
A.iX.prototype={
A(a){return"Assertion failed: "+A.eo(this.a)}}
A.b7.prototype={
gn(a){return this.a},
gaS(a){return this.a===0},
gbk(a){return new A.bm(this,A.o(this).m("bm<1>"))},
gbD(a){var s=A.o(this)
return A.rf(new A.bm(this,s.m("bm<1>")),new A.kF(this),s.c,s.z[1])},
aI(a,b){var s,r
if(typeof b=="string"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.fK(b)},
fK(a){var s=this.d
if(s==null)return!1
return this.cJ(s[this.cI(a)],a)>=0},
dg(a,b){A.o(this).m("a9<1,2>").a(b).ag(0,new A.kE(this))},
l(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.fL(b)},
fL(a){var s,r,q=this.d
if(q==null)return null
s=q[this.cI(a)]
r=this.cJ(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.el(s==null?q.b=q.dU():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.el(r==null?q.c=q.dU():r,b,c)}else q.fN(b,c)},
fN(a,b){var s,r,q,p,o=this,n=A.o(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.dU()
r=o.cI(a)
q=s[r]
if(q==null)s[r]=[o.dV(a,b)]
else{p=o.cJ(q,a)
if(p>=0)q[p].b=b
else q.push(o.dV(a,b))}},
lg(a,b,c){var s,r,q=this,p=A.o(q)
p.c.a(b)
p.m("2()").a(c)
if(q.aI(0,b)){s=q.l(0,b)
return s==null?p.z[1].a(s):s}r=c.$0()
q.h(0,b,r)
return r},
cj(a,b){var s=this
if(typeof b=="string")return s.fe(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fe(s.c,b)
else return s.fM(b)},
fM(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cI(a)
r=n[s]
q=o.cJ(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fo(p)
if(r.length===0)delete n[s]
return p.b},
ag(a,b){var s,r,q=this
A.o(q).m("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.f(A.bK(q))
s=s.c}},
el(a,b,c){var s,r=A.o(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.dV(b,c)
else s.b=c},
fe(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fo(s)
delete a[b]
return s.b},
f1(){this.r=this.r+1&1073741823},
dV(a,b){var s=this,r=A.o(s),q=new A.kK(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.f1()
return q},
fo(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.f1()},
cI(a){return J.c9(a)&0x3fffffff},
cJ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bg(a[r].a,b))return r
return-1},
A(a){return A.ng(this)},
dU(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ine:1}
A.kF.prototype={
$1(a){var s=this.a,r=A.o(s)
s=s.l(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.o(this.a).m("2(1)")}}
A.kE.prototype={
$2(a,b){var s=this.a,r=A.o(s)
s.h(0,r.c.a(a),r.z[1].a(b))},
$S(){return A.o(this.a).m("~(1,2)")}}
A.kK.prototype={}
A.bm.prototype={
gn(a){return this.a.a},
gaS(a){return this.a.a===0},
gF(a){var s=this.a,r=new A.aY(s,s.r,this.$ti.m("aY<1>"))
r.c=s.e
return r}}
A.aY.prototype={
gJ(a){return this.d},
C(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.f(A.bK(q))
s=r.c
if(s==null){r.sek(null)
return!1}else{r.sek(s.a)
r.c=s.c
return!0}},
sek(a){this.d=this.$ti.m("1?").a(a)},
$iF:1}
A.mQ.prototype={
$1(a){return this.a(a)},
$S:18}
A.mR.prototype={
$2(a,b){return this.a(a,b)},
$S:40}
A.mS.prototype={
$1(a){return this.a(A.ax(a))},
$S:22}
A.m2.prototype={
cA(){var s=this.b
if(s===this)throw A.f(A.kH(this.a))
return s}}
A.dO.prototype={
gaC(a){return B.jG},
$idO:1,
$iV:1}
A.ak.prototype={
jl(a,b,c,d){var s=A.aq(b,0,c,d,null)
throw A.f(s)},
ew(a,b,c,d){if(b>>>0!==b||b>c)this.jl(a,b,c,d)},
$iak:1,
$ia7:1}
A.hX.prototype={
gaC(a){return B.jH},
$iV:1}
A.at.prototype={
gn(a){return a.length},
fi(a,b,c,d,e){var s,r,q=a.length
this.ew(a,b,q,"start")
this.ew(a,c,q,"end")
if(b>c)throw A.f(A.aq(b,0,c,null,null))
s=c-b
if(e<0)throw A.f(A.dc(e,null))
r=d.length
if(r-e<s)throw A.f(A.ns("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iI:1,
$iL:1}
A.cj.prototype={
l(a,b){A.c1(b,a,a.length)
return a[b]},
h(a,b,c){A.tZ(c)
A.c1(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){t.id.a(d)
if(t.dQ.b(d)){this.fi(a,b,c,d,e)
return}this.ei(a,b,c,d,e)},
bs(a,b,c,d){return this.ai(a,b,c,d,0)},
$it:1,
$ie:1,
$ik:1}
A.aZ.prototype={
h(a,b,c){A.x(c)
A.c1(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){t.fm.a(d)
if(t.aj.b(d)){this.fi(a,b,c,d,e)
return}this.ei(a,b,c,d,e)},
bs(a,b,c,d){return this.ai(a,b,c,d,0)},
$it:1,
$ie:1,
$ik:1}
A.hY.prototype={
gaC(a){return B.jI},
bd(a,b,c){return new Float32Array(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1,
$in6:1}
A.hZ.prototype={
gaC(a){return B.jJ},
bd(a,b,c){return new Float64Array(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1,
$in7:1}
A.i_.prototype={
gaC(a){return B.jK},
l(a,b){A.c1(b,a,a.length)
return a[b]},
bd(a,b,c){return new Int16Array(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1,
$ikx:1}
A.i0.prototype={
gaC(a){return B.jL},
l(a,b){A.c1(b,a,a.length)
return a[b]},
bd(a,b,c){return new Int32Array(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1,
$ihu:1}
A.i1.prototype={
gaC(a){return B.jM},
l(a,b){A.c1(b,a,a.length)
return a[b]},
bd(a,b,c){return new Int8Array(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1,
$in8:1}
A.eO.prototype={
gaC(a){return B.jO},
l(a,b){A.c1(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint16Array(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1,
$inv:1}
A.eP.prototype={
gaC(a){return B.jP},
l(a,b){A.c1(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint32Array(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1,
$ibE:1}
A.eQ.prototype={
gaC(a){return B.jQ},
gn(a){return a.length},
l(a,b){A.c1(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.bu(b,c,a.length)))},
$iV:1}
A.cM.prototype={
gaC(a){return B.jR},
gn(a){return a.length},
l(a,b){A.c1(b,a,a.length)
return a[b]},
bd(a,b,c){return new Uint8Array(a.subarray(b,A.bu(b,c,a.length)))},
hh(a,b){return this.bd(a,b,null)},
$icM:1,
$iV:1,
$ibt:1}
A.fr.prototype={}
A.fs.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.bc.prototype={
m(a){return A.mA(v.typeUniverse,this,a)},
au(a){return A.tU(v.typeUniverse,this,a)}}
A.jc.prototype={}
A.jN.prototype={
A(a){return A.aS(this.a,null)},
$ip8:1}
A.j8.prototype={
A(a){return this.a}}
A.fD.prototype={$ibW:1}
A.lZ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
A.lY.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:25}
A.m_.prototype={
$0(){this.a.$0()},
$S:8}
A.m0.prototype={
$0(){this.a.$0()},
$S:8}
A.mw.prototype={
hP(a,b){if(self.setTimeout!=null)self.setTimeout(A.d7(new A.mx(this,b),0),a)
else throw A.f(A.O("`setTimeout()` not found."))}}
A.mx.prototype={
$0(){this.b.$0()},
$S:1}
A.iY.prototype={
di(a,b){var s,r=this,q=r.$ti
q.m("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.dA(b)
else{s=r.a
if(q.m("bk<1>").b(b))s.ev(b)
else s.dG(b)}},
e5(a,b){var s=this.a
if(this.b)s.cs(a,b)
else s.eq(a,b)}}
A.mF.prototype={
$1(a){return this.a.$2(0,a)},
$S:6}
A.mG.prototype={
$2(a,b){this.a.$2(1,new A.ep(a,t.l.a(b)))},
$S:29}
A.mJ.prototype={
$2(a,b){this.a(A.x(a),b)},
$S:31}
A.e6.prototype={
A(a){return"IterationMarker("+this.b+", "+A.D(this.a)+")"}}
A.cr.prototype={
gJ(a){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gJ(r)},
C(){var s,r,q,p,o,n,m=this
for(s=m.$ti.m("F<1>");!0;){r=m.c
if(r!=null)if(r.C())return!0
else m.sf4(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.e6){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sep(null)
return!1}if(0>=o.length)return A.a(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.bx(r))
if(n instanceof A.cr){r=m.d
if(r==null)r=m.d=[]
B.c.H(r,m.a)
m.a=n.a
continue}else{m.sf4(n)
continue}}}}else{m.sep(q)
return!0}}return!1},
sep(a){this.b=this.$ti.m("1?").a(a)},
sf4(a){this.c=this.$ti.m("F<1>?").a(a)},
$iF:1}
A.fA.prototype={
gF(a){return new A.cr(this.a(),this.$ti.m("cr<1>"))}}
A.eg.prototype={
A(a){return A.D(this.a)},
$iW:1,
gcY(){return this.b}}
A.j0.prototype={
e5(a,b){var s
A.ea(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.f(A.ns("Future already completed"))
if(b==null)b=A.o9(a)
s.eq(a,b)},
fD(a){return this.e5(a,null)}}
A.d4.prototype={
di(a,b){var s,r=this.$ti
r.m("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.f(A.ns("Future already completed"))
s.dA(r.m("1/").a(b))},
kA(a){return this.di(a,null)}}
A.c_.prototype={
l3(a){if((this.c&15)!==6)return!0
return this.b.b.ec(t.nU.a(this.d),a.a,t.v,t.K)},
l0(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.U.b(q))p=l.lq(q,m,a.b,o,n,t.l)
else p=l.ec(t.x.a(q),m,o,n)
try{o=r.$ti.m("2/").a(p)
return o}catch(s){if(t.do.b(A.b5(s))){if((r.c&1)!==0)throw A.f(A.dc("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.f(A.dc("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ab.prototype={
ed(a,b,c){var s,r,q,p=this.$ti
p.au(c).m("1/(2)").a(a)
s=$.a0
if(s===B.q){if(b!=null&&!t.U.b(b)&&!t.x.b(b))throw A.f(A.n1(b,"onError",u.c))}else{c.m("@<0/>").au(p.c).m("1(2)").a(a)
if(b!=null)b=A.us(b,s)}r=new A.ab(s,c.m("ab<0>"))
q=b==null?1:3
this.d0(new A.c_(r,q,a,b,p.m("@<1>").au(c).m("c_<1,2>")))
return r},
lt(a,b){return this.ed(a,null,b)},
fl(a,b,c){var s,r=this.$ti
r.au(c).m("1/(2)").a(a)
s=new A.ab($.a0,c.m("ab<0>"))
this.d0(new A.c_(s,3,a,b,r.m("@<1>").au(c).m("c_<1,2>")))
return s},
kk(a){this.a=this.a&1|16
this.c=a},
dE(a){this.a=a.a&30|this.a&1
this.c=a.c},
d0(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.d.a(r.c)
if((s.a&24)===0){s.d0(a)
return}r.dE(s)}A.d6(null,null,r.b,t.M.a(new A.m8(r,a)))}},
f9(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.d.a(m.c)
if((n.a&24)===0){n.f9(a)
return}m.dE(n)}l.a=m.dc(a)
A.d6(null,null,m.b,t.M.a(new A.mf(l,m)))}},
da(){var s=t.F.a(this.c)
this.c=null
return this.dc(s)},
dc(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
im(a){var s,r,q,p=this
p.a^=2
try{a.ed(new A.mb(p),new A.mc(p),t.P)}catch(q){s=A.b5(q)
r=A.aT(q)
A.vi(new A.md(p,s,r))}},
dG(a){var s,r=this
r.$ti.c.a(a)
s=r.da()
r.a=8
r.c=a
A.e5(r,s)},
cs(a,b){var s
t.l.a(b)
s=this.da()
this.kk(A.k7(a,b))
A.e5(this,s)},
dA(a){var s=this.$ti
s.m("1/").a(a)
if(s.m("bk<1>").b(a)){this.ev(a)
return}this.ib(a)},
ib(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.d6(null,null,s.b,t.M.a(new A.ma(s,a)))},
ev(a){var s=this,r=s.$ti
r.m("bk<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.d6(null,null,s.b,t.M.a(new A.me(s,a)))}else A.nB(a,s)
return}s.im(a)},
eq(a,b){this.a^=2
A.d6(null,null,this.b,t.M.a(new A.m9(this,a,b)))},
$ibk:1}
A.m8.prototype={
$0(){A.e5(this.a,this.b)},
$S:1}
A.mf.prototype={
$0(){A.e5(this.b,this.a.a)},
$S:1}
A.mb.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.dG(p.$ti.c.a(a))}catch(q){s=A.b5(q)
r=A.aT(q)
p.cs(s,r)}},
$S:13}
A.mc.prototype={
$2(a,b){this.a.cs(t.K.a(a),t.l.a(b))},
$S:32}
A.md.prototype={
$0(){this.a.cs(this.b,this.c)},
$S:1}
A.ma.prototype={
$0(){this.a.dG(this.b)},
$S:1}
A.me.prototype={
$0(){A.nB(this.b,this.a)},
$S:1}
A.m9.prototype={
$0(){this.a.cs(this.b,this.c)},
$S:1}
A.mi.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.fZ(t.mY.a(q.d),t.z)}catch(p){s=A.b5(p)
r=A.aT(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.k7(s,r)
o.b=!0
return}if(l instanceof A.ab&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.lt(new A.mj(n),t.z)
q.b=!1}},
$S:1}
A.mj.prototype={
$1(a){return this.a},
$S:34}
A.mh.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.ec(o.m("2/(1)").a(p.d),m,o.m("2/"),n)}catch(l){s=A.b5(l)
r=A.aT(l)
q=this.a
q.c=A.k7(s,r)
q.b=!0}},
$S:1}
A.mg.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.l3(s)&&p.a.e!=null){p.c=p.a.l0(s)
p.b=!1}}catch(o){r=A.b5(o)
q=A.aT(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.k7(r,q)
n.b=!0}},
$S:1}
A.iZ.prototype={}
A.dZ.prototype={
gn(a){var s,r,q=this,p={},o=new A.ab($.a0,t.hy)
p.a=0
s=q.$ti
r=s.m("~(1)?").a(new A.lf(p,q))
t.Z.a(new A.lg(p,o))
A.m5(q.a,q.b,r,!1,s.c)
return o}}
A.lf.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.m("~(1)")}}
A.lg.prototype={
$0(){var s=this.b,r=s.$ti,q=r.m("1/").a(this.a.a),p=s.da()
r.c.a(q)
s.a=8
s.c=q
A.e5(s,p)},
$S:1}
A.jB.prototype={}
A.fH.prototype={$ipk:1}
A.mI.prototype={
$0(){var s=this.a,r=this.b
A.ea(s,"error",t.K)
A.ea(r,"stackTrace",t.l)
A.qP(s,r)},
$S:1}
A.ju.prototype={
lr(a){var s,r,q
t.M.a(a)
try{if(B.q===$.a0){a.$0()
return}A.pL(null,null,this,a,t.Y)}catch(q){s=A.b5(q)
r=A.aT(q)
A.mH(t.K.a(s),t.l.a(r))}},
ls(a,b,c){var s,r,q
c.m("~(0)").a(a)
c.a(b)
try{if(B.q===$.a0){a.$1(b)
return}A.pM(null,null,this,a,b,t.Y,c)}catch(q){s=A.b5(q)
r=A.aT(q)
A.mH(t.K.a(s),t.l.a(r))}},
fz(a){return new A.mr(this,t.M.a(a))},
ku(a,b){return new A.ms(this,b.m("~(0)").a(a),b)},
fZ(a,b){b.m("0()").a(a)
if($.a0===B.q)return a.$0()
return A.pL(null,null,this,a,b)},
ec(a,b,c,d){c.m("@<0>").au(d).m("1(2)").a(a)
d.a(b)
if($.a0===B.q)return a.$1(b)
return A.pM(null,null,this,a,b,c,d)},
lq(a,b,c,d,e,f){d.m("@<0>").au(e).au(f).m("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a0===B.q)return a.$2(b,c)
return A.ut(null,null,this,a,b,c,d,e,f)},
fY(a,b,c,d){return b.m("@<0>").au(c).au(d).m("1(2,3)").a(a)}}
A.mr.prototype={
$0(){return this.a.lr(this.b)},
$S:1}
A.ms.prototype={
$1(a){var s=this.c
return this.a.ls(this.b,s.a(a),s)},
$S(){return this.c.m("~(0)")}}
A.fl.prototype={
l(a,b){if(!A.c5(this.y.$1(b)))return null
return this.hp(b)},
h(a,b,c){var s=this.$ti
this.hr(s.c.a(b),s.z[1].a(c))},
aI(a,b){if(!A.c5(this.y.$1(b)))return!1
return this.ho(b)},
cj(a,b){if(!A.c5(this.y.$1(b)))return null
return this.hq(b)},
cI(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
cJ(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.c5(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.mq.prototype={
$1(a){return this.a.b(a)},
$S:7}
A.fm.prototype={
gF(a){var s=this,r=new A.fn(s,s.r,s.$ti.m("fn<1>"))
r.c=s.e
return r},
gn(a){return this.a},
bH(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.W.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.W.a(r[b])!=null}else return this.io(b)},
io(a){var s=this.d
if(s==null)return!1
return this.eK(s[J.c9(a)&1073741823],a)>=0},
H(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ex(s==null?q.b=A.nD():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ex(r==null?q.c=A.nD():r,b)}else return q.i7(0,b)},
i7(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.nD()
r=J.c9(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.dF(b)]
else{if(p.eK(q,b)>=0)return!1
q.push(p.dF(b))}return!0},
ex(a,b){this.$ti.c.a(b)
if(t.W.a(a[b])!=null)return!1
a[b]=this.dF(b)
return!0},
dF(a){var s=this,r=new A.jj(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
eK(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bg(a[r].a,b))return r
return-1}}
A.jj.prototype={}
A.fn.prototype={
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
C(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.f(A.bK(q))
else if(r==null){s.sco(null)
return!1}else{s.sco(s.$ti.m("1?").a(r.a))
s.c=r.b
return!0}},
sco(a){this.d=this.$ti.m("1?").a(a)},
$iF:1}
A.kL.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:15}
A.m.prototype={
gF(a){return new A.cK(a,this.gn(a),A.ai(a).m("cK<m.E>"))},
a7(a,b){return this.l(a,b)},
gfP(a){return this.gn(a)!==0},
bH(a,b){var s,r=this.gn(a)
for(s=0;s<r;++s){if(J.bg(this.l(a,s),b))return!0
if(r!==this.gn(a))throw A.f(A.bK(a))}return!1},
dk(a,b){var s,r
A.ai(a).m("ad(m.E)").a(b)
s=this.gn(a)
for(r=0;r<s;++r){if(!A.c5(b.$1(this.l(a,r))))return!1
if(s!==this.gn(a))throw A.f(A.bK(a))}return!0},
c5(a,b){var s=A.ai(a)
return new A.b3(a,s.m("ad(m.E)").a(b),s.m("b3<m.E>"))},
bE(a,b){return A.iB(a,b,null,A.ai(a).m("m.E"))},
aM(a,b){var s,r,q,p,o=this
if(o.gn(a)===0){s=J.dL(0,A.ai(a).m("m.E"))
return s}r=o.l(a,0)
q=A.am(o.gn(a),r,!0,A.ai(a).m("m.E"))
for(p=1;p<o.gn(a);++p)B.c.h(q,p,o.l(a,p))
return q},
c4(a){return this.aM(a,!0)},
bd(a,b,c){var s,r=this.gn(a)
A.bb(b,c,r)
A.bb(b,c,this.gn(a))
s=A.ai(a).m("m.E")
return A.hR(A.iB(a,b,c,s),!0,s)},
aL(a,b,c,d){var s
A.ai(a).m("m.E?").a(d)
A.bb(b,c,this.gn(a))
for(s=b;s<c;++s)this.h(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o=A.ai(a)
o.m("e<m.E>").a(d)
A.bb(b,c,this.gn(a))
s=c-b
if(s===0)return
A.bD(e,"skipCount")
if(o.m("k<m.E>").b(d)){r=e
q=d}else{q=J.o8(d,e).aM(0,!1)
r=0}o=J.ae(q)
if(r+s>o.gn(q))throw A.f(A.oD())
if(r<b)for(p=s-1;p>=0;--p)this.h(a,b+p,o.l(q,r+p))
else for(p=0;p<s;++p)this.h(a,b+p,o.l(q,r+p))},
bs(a,b,c,d){return this.ai(a,b,c,d,0)},
hb(a,b,c){A.ai(a).m("e<m.E>").a(c)
this.bs(a,b,b+c.length,c)},
A(a){return A.n9(a,"[","]")},
$it:1,
$ie:1,
$ik:1}
A.S.prototype={
ag(a,b){var s,r,q,p=A.ai(a)
p.m("~(S.K,S.V)").a(b)
for(s=J.bx(this.gbk(a)),p=p.m("S.V");s.C();){r=s.gJ(s)
q=this.l(a,r)
b.$2(r,q==null?p.a(q):q)}},
gn(a){return J.bH(this.gbk(a))},
gaS(a){return J.qv(this.gbk(a))},
gbD(a){var s=A.ai(a)
return new A.fo(a,s.m("@<S.K>").au(s.m("S.V")).m("fo<1,2>"))},
A(a){return A.ng(a)},
$ia9:1}
A.kO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.D(a)
r.a=s+": "
r.a+=A.D(b)},
$S:11}
A.fo.prototype={
gn(a){return J.bH(this.a)},
gF(a){var s=this.a,r=this.$ti
return new A.fp(J.bx(J.qw(s)),s,r.m("@<1>").au(r.z[1]).m("fp<1,2>"))}}
A.fp.prototype={
C(){var s=this,r=s.a
if(r.C()){s.sco(J.db(s.b,r.gJ(r)))
return!0}s.sco(null)
return!1},
gJ(a){var s=this.c
return s==null?this.$ti.z[1].a(s):s},
sco(a){this.c=this.$ti.m("2?").a(a)},
$iF:1}
A.dW.prototype={
aM(a,b){return A.B(this,!0,this.$ti.c)},
c4(a){return this.aM(a,!0)},
A(a){return A.n9(this,"{","}")},
c5(a,b){var s=this.$ti
return new A.b3(this,s.m("ad(1)").a(b),s.m("b3<1>"))},
bE(a,b){return A.p3(this,b,this.$ti.c)},
$it:1,
$ie:1}
A.fw.prototype={}
A.lv.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:12}
A.lu.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:12}
A.mz.prototype={
c1(a){var s,r,q=A.bb(0,null,a.length)-0,p=new Uint8Array(q)
for(s=0;s<q;++s){r=B.l.bY(a,s)
if((r&4294967040)!==0)throw A.f(A.n1(a,"string","Contains invalid characters."))
if(!(s<q))return A.a(p,s)
p[s]=r}return p}}
A.my.prototype={
c1(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.bb(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.f(A.ok("Invalid value in input: "+p,null,null))
return this.iq(a,0,r)}}return A.lh(a,0,r)},
iq(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.a2((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.cw.prototype={}
A.h0.prototype={}
A.ha.prototype={}
A.eL.prototype={
A(a){var s=A.eo(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hN.prototype={
A(a){return"Cyclic error in JSON stringify"}}
A.hM.prototype={
fJ(a,b){var s=A.tB(a,this.gkT().b,null)
return s},
gkT(){return B.cz}}
A.kG.prototype={}
A.mo.prototype={
h5(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=B.l.bY(a,q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(B.l.bY(a,n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(B.l.cD(a,o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.l.d_(a,r,q)
r=q+1
s.a+=A.a2(92)
s.a+=A.a2(117)
s.a+=A.a2(100)
o=p>>>8&15
s.a+=A.a2(o<10?48+o:87+o)
o=p>>>4&15
s.a+=A.a2(o<10?48+o:87+o)
o=p&15
s.a+=A.a2(o<10?48+o:87+o)}}continue}if(p<32){if(q>r)s.a+=B.l.d_(a,r,q)
r=q+1
s.a+=A.a2(92)
switch(p){case 8:s.a+=A.a2(98)
break
case 9:s.a+=A.a2(116)
break
case 10:s.a+=A.a2(110)
break
case 12:s.a+=A.a2(102)
break
case 13:s.a+=A.a2(114)
break
default:s.a+=A.a2(117)
s.a+=A.a2(48)
s.a+=A.a2(48)
o=p>>>4&15
s.a+=A.a2(o<10?48+o:87+o)
o=p&15
s.a+=A.a2(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=B.l.d_(a,r,q)
r=q+1
s.a+=A.a2(92)
s.a+=A.a2(p)}}if(r===0)s.a+=a
else if(r<m)s.a+=B.l.d_(a,r,m)},
dC(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.f(new A.hN(a,null))}B.c.H(s,a)},
ds(a){var s,r,q,p,o=this
if(o.h4(a))return
o.dC(a)
try{s=o.b.$1(a)
if(!o.h4(s)){q=A.oH(a,null,o.gf7())
throw A.f(q)}q=o.a
if(0>=q.length)return A.a(q,-1)
q.pop()}catch(p){r=A.b5(p)
q=A.oH(a,r,o.gf7())
throw A.f(q)}},
h4(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.A(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.h5(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.dC(a)
q.lA(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.dC(a)
r=q.lB(a)
s=q.a
if(0>=s.length)return A.a(s,-1)
s.pop()
return r}else return!1},
lA(a){var s,r,q=this.c
q.a+="["
s=J.ae(a)
if(s.gfP(a)){this.ds(s.l(a,0))
for(r=1;r<s.gn(a);++r){q.a+=","
this.ds(s.l(a,r))}}q.a+="]"},
lB(a){var s,r,q,p,o,n=this,m={},l=J.ae(a)
if(l.gaS(a)){n.c.a+="{}"
return!0}s=l.gn(a)*2
r=A.am(s,null,!1,t.O)
q=m.a=0
m.b=!0
l.ag(a,new A.mp(m,r))
if(!m.b)return!1
l=n.c
l.a+="{"
for(p='"';q<s;q+=2,p=',"'){l.a+=p
n.h5(A.ax(r[q]))
l.a+='":'
o=q+1
if(!(o<s))return A.a(r,o)
n.ds(r[o])}l.a+="}"
return!0}}
A.mp.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.c.h(s,r.a++,a)
B.c.h(s,r.a++,b)},
$S:11}
A.mn.prototype={
gf7(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.hO.prototype={
bS(a,b){var s
t.L.a(b)
s=B.cA.c1(b)
return s}}
A.kJ.prototype={}
A.kI.prototype={}
A.iR.prototype={
kJ(a,b,c){t.L.a(b)
return B.bS.c1(b)}}
A.lt.prototype={
c1(a){var s,r
t.L.a(a)
s=this.a
r=A.rH(s,a,0,null)
if(r!=null)return r
return new A.mB(s).kF(a,0,null,!0)}}
A.mB.prototype={
kF(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.bb(b,c,a.length)
if(b===s)return""
r=A.tX(a,b,s)
q=n.dH(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.tY(p)
n.b=0
throw A.f(A.ok(o,a,b+n.c))}return q},
dH(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.U(b+c,2)
r=q.dH(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dH(a,s,c,d)}return q.kN(a,b,c,d)},
kN(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.d_(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.a(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.l.bY("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.l.bY(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.a2(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.a2(j)
break
case 65:g.a+=A.a2(j);--f
break
default:p=g.a+=A.a2(j)
g.a=p+A.a2(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(!(f>=0&&f<e))return A.a(a,f)
s=a[f]}o=f+1
if(!(f>=0&&f<e))return A.a(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(!(o>=0&&o<e))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(!(l<e))return A.a(a,l)
g.a+=A.a2(a[l])}else g.a+=A.lh(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.a2(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.bA.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.bA&&this.a===b.a&&this.b===b.b},
gE(a){var s=this.a
return(s^B.a.j(s,30))&1073741823},
h2(){if(this.b)return this
return A.qM(this.a,!0)},
A(a){var s=this,r=A.qN(A.rt(s)),q=A.h5(A.rr(s)),p=A.h5(A.rn(s)),o=A.h5(A.ro(s)),n=A.h5(A.rq(s)),m=A.h5(A.rs(s)),l=A.qO(A.rp(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.h9.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.h9&&this.a===b.a},
gE(a){return B.a.gE(this.a)},
A(a){var s,r,q,p,o,n=this.a,m=B.a.U(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.a.U(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.a.U(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.l.lb(B.a.A(n%1e6),6,"0")}}
A.m3.prototype={
A(a){return this.aj()}}
A.W.prototype={
gcY(){return A.aT(this.$thrownJsError)}}
A.ef.prototype={
A(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.eo(s)
return"Assertion failed"}}
A.bW.prototype={}
A.by.prototype={
gdM(){return"Invalid argument"+(!this.a?"(s)":"")},
gdL(){return""},
A(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.D(p),n=s.gdM()+q+o
if(!s.a)return n
return n+s.gdL()+": "+A.eo(s.ge7())},
ge7(){return this.b}}
A.f5.prototype={
ge7(){return A.u_(this.b)},
gdM(){return"RangeError"},
gdL(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.D(q):""
else if(q==null)s=": Not greater than or equal to "+A.D(r)
else if(q>r)s=": Not in inclusive range "+A.D(r)+".."+A.D(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.D(r)
return s}}
A.hq.prototype={
ge7(){return A.x(this.b)},
gdM(){return"RangeError"},
gdL(){if(A.x(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.iP.prototype={
A(a){return"Unsupported operation: "+this.a}}
A.iN.prototype={
A(a){return"UnimplementedError: "+this.a}}
A.dY.prototype={
A(a){return"Bad state: "+this.a}}
A.h_.prototype={
A(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eo(s)+"."}}
A.i5.prototype={
A(a){return"Out of Memory"},
gcY(){return null},
$iW:1}
A.f8.prototype={
A(a){return"Stack Overflow"},
gcY(){return null},
$iW:1}
A.m7.prototype={
A(a){return"Exception: "+this.a}}
A.hi.prototype={
A(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.c
return q!=null?r+(" (at offset "+A.D(q)+")"):r}}
A.e.prototype={
c5(a,b){var s=A.o(this)
return new A.b3(this,s.m("ad(e.E)").a(b),s.m("b3<e.E>"))},
dk(a,b){var s
A.o(this).m("ad(e.E)").a(b)
for(s=this.gF(this);s.C();)if(!A.c5(b.$1(s.gJ(s))))return!1
return!0},
aM(a,b){return A.B(this,b,A.o(this).m("e.E"))},
c4(a){return this.aM(a,!0)},
gn(a){var s,r=this.gF(this)
for(s=0;r.C();)++s
return s},
gaS(a){return!this.gF(this).C()},
bE(a,b){return A.p3(this,b,A.o(this).m("e.E"))},
a7(a,b){var s,r
A.bD(b,"index")
s=this.gF(this)
for(r=b;s.C();){if(r===0)return s.gJ(s);--r}throw A.f(A.a8(b,b-r,this,"index"))},
A(a){return A.r9(this,"(",")")}}
A.F.prototype={}
A.aa.prototype={
gE(a){return A.N.prototype.gE.call(this,this)},
A(a){return"null"}}
A.N.prototype={$iN:1,
R(a,b){return this===b},
gE(a){return A.f1(this)},
A(a){return"Instance of '"+A.l_(this)+"'"},
gaC(a){return A.v2(this)},
toString(){return this.A(this)}}
A.jE.prototype={
A(a){return""},
$icl:1}
A.d_.prototype={
gn(a){return this.a.length},
A(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$irB:1}
A.w.prototype={}
A.fN.prototype={
gn(a){return a.length}}
A.fO.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.fP.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.cb.prototype={$icb:1}
A.bz.prototype={
gn(a){return a.length}}
A.h1.prototype={
gn(a){return a.length}}
A.T.prototype={$iT:1}
A.dr.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.kd.prototype={}
A.ay.prototype={}
A.bi.prototype={}
A.h2.prototype={
gn(a){return a.length}}
A.h3.prototype={
gn(a){return a.length}}
A.h4.prototype={
gn(a){return a.length}}
A.ds.prototype={$ids:1}
A.h6.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.ej.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.q.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.ek.prototype={
A(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.D(r)+", "+A.D(s)+") "+A.D(this.gX(a))+" x "+A.D(this.gM(a))},
R(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.da(b)
s=this.gX(a)===s.gX(b)&&this.gM(a)===s.gM(b)}else s=!1}else s=!1}else s=!1
return s},
gE(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.nh(r,s,this.gX(a),this.gM(a))},
geT(a){return a.height},
gM(a){var s=this.geT(a)
s.toString
return s},
gft(a){return a.width},
gX(a){var s=this.gft(a)
s.toString
return s},
$ibq:1}
A.h7.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){A.ax(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.h8.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.v.prototype={
A(a){var s=a.localName
s.toString
return s}}
A.p.prototype={$ip:1}
A.j.prototype={
e2(a,b,c,d){t.y.a(c)
if(c!=null)this.i8(a,b,c,!1)},
i8(a,b,c,d){return a.addEventListener(b,A.d7(t.y.a(c),1),!1)},
kh(a,b,c,d){return a.removeEventListener(b,A.d7(t.y.a(c),1),!1)},
$ij:1}
A.az.prototype={$iaz:1}
A.dw.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.dY.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1,
$idw:1}
A.hg.prototype={
gn(a){return a.length}}
A.hh.prototype={
gn(a){return a.length}}
A.aC.prototype={$iaC:1}
A.hk.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.cA.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.Q.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.dD.prototype={$idD:1}
A.hS.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.hT.prototype={
gn(a){return a.length}}
A.bR.prototype={$ibR:1}
A.ci.prototype={
e2(a,b,c,d){t.y.a(c)
if(b==="message")a.start()
this.hl(a,b,c,!1)},
fV(a,b,c){t.nW.a(c)
if(c!=null){this.jJ(a,new A.jF([],[]).bN(b),c)
return}a.postMessage(new A.jF([],[]).bN(b))
return},
lc(a,b){return this.fV(a,b,null)},
jJ(a,b,c){return a.postMessage(b,t.ez.a(c))},
$ici:1}
A.hU.prototype={
l(a,b){return A.ct(a.get(A.ax(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ct(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.kP(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.kQ(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaS(a){var s=a.size
s.toString
return s===0},
$ia9:1}
A.kP.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.kQ.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.hV.prototype={
l(a,b){return A.ct(a.get(A.ax(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ct(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.kR(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.kS(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaS(a){var s=a.size
s.toString
return s===0},
$ia9:1}
A.kR.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.kS.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.aE.prototype={$iaE:1}
A.hW.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ib.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.K.prototype={
A(a){var s=a.nodeValue
return s==null?this.hm(a):s},
$iK:1}
A.eR.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.Q.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.aF.prototype={
gn(a){return a.length},
$iaF:1}
A.ib.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.d8.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.it.prototype={
l(a,b){return A.ct(a.get(A.ax(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ct(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.l6(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.l7(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaS(a){var s=a.size
s.toString
return s===0},
$ia9:1}
A.l6.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.l7.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.iv.prototype={
gn(a){return a.length}}
A.dX.prototype={$idX:1}
A.aH.prototype={$iaH:1}
A.iw.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ls.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.aI.prototype={$iaI:1}
A.ix.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.cA.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.aJ.prototype={
gn(a){return a.length},
$iaJ:1}
A.iz.prototype={
l(a,b){return a.getItem(A.ax(b))},
ag(a,b){var s,r,q
t.bm.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.ld(s))
return s},
gbD(a){var s=A.b([],t.s)
this.ag(a,new A.le(s))
return s},
gn(a){var s=a.length
s.toString
return s},
gaS(a){return a.key(0)==null},
$ia9:1}
A.ld.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:14}
A.le.prototype={
$2(a,b){return B.c.H(this.a,b)},
$S:14}
A.au.prototype={$iau:1}
A.aK.prototype={$iaK:1}
A.av.prototype={$iav:1}
A.iE.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.gJ.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.iF.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.dR.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.iJ.prototype={
gn(a){var s=a.length
s.toString
return s}}
A.aM.prototype={$iaM:1}
A.iK.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ki.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.iL.prototype={
gn(a){return a.length}}
A.iQ.prototype={
A(a){var s=String(a)
s.toString
return s}}
A.iV.prototype={
gn(a){return a.length}}
A.cp.prototype={}
A.j1.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.d5.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.fj.prototype={
A(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.D(p)+", "+A.D(s)+") "+A.D(r)+" x "+A.D(q)},
R(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=J.da(b)
if(s===r.gX(b)){s=a.height
s.toString
r=s===r.gM(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gE(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.nh(p,s,r,q)},
geT(a){return a.height},
gM(a){var s=a.height
s.toString
return s},
gft(a){return a.width},
gX(a){var s=a.width
s.toString
return s}}
A.jd.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
return a[b]},
h(a,b,c){t.ef.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.fq.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.Q.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.jy.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.hI.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.jG.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.f(A.a8(b,s,a,null))
s=a[b]
s.toString
return s},
h(a,b,c){t.ll.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
$iI:1,
$it:1,
$iL:1,
$ie:1,
$ik:1}
A.n3.prototype={}
A.m4.prototype={}
A.fk.prototype={
e3(a){var s,r=this,q=r.b
if(q==null)return $.o3()
s=r.d
if(s!=null)J.qq(q,r.c,t.y.a(s),!1)
r.b=null
r.sjv(null)
return $.o3()},
sjv(a){this.d=t.y.a(a)},
$irA:1}
A.m6.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:21}
A.y.prototype={
gF(a){return new A.eu(a,this.gn(a),A.ai(a).m("eu<y.E>"))},
ai(a,b,c,d,e){A.ai(a).m("e<y.E>").a(d)
throw A.f(A.O("Cannot setRange on immutable List."))},
bs(a,b,c,d){return this.ai(a,b,c,d,0)},
aL(a,b,c,d){A.ai(a).m("y.E?").a(d)
throw A.f(A.O("Cannot modify an immutable List."))}}
A.eu.prototype={
C(){var s=this,r=s.c+1,q=s.b
if(r<q){s.seV(J.db(s.a,r))
s.c=r
return!0}s.seV(null)
s.c=q
return!1},
gJ(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
seV(a){this.d=this.$ti.m("1?").a(a)},
$iF:1}
A.j2.prototype={}
A.j4.prototype={}
A.j5.prototype={}
A.j6.prototype={}
A.j7.prototype={}
A.ja.prototype={}
A.jb.prototype={}
A.je.prototype={}
A.jf.prototype={}
A.jk.prototype={}
A.jl.prototype={}
A.jm.prototype={}
A.jn.prototype={}
A.jo.prototype={}
A.jp.prototype={}
A.js.prototype={}
A.jt.prototype={}
A.jv.prototype={}
A.fx.prototype={}
A.fy.prototype={}
A.jw.prototype={}
A.jx.prototype={}
A.jA.prototype={}
A.jH.prototype={}
A.jI.prototype={}
A.fB.prototype={}
A.fC.prototype={}
A.jJ.prototype={}
A.jK.prototype={}
A.jP.prototype={}
A.jQ.prototype={}
A.jR.prototype={}
A.jS.prototype={}
A.jT.prototype={}
A.jU.prototype={}
A.jV.prototype={}
A.jW.prototype={}
A.jX.prototype={}
A.jY.prototype={}
A.mt.prototype={
cg(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.c.H(r,a)
B.c.H(this.b,null)
return q},
bN(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(A.d5(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof A.bA)return new Date(a.a)
if(t.dY.b(a))return a
if(t.fj.b(a))return a
if(t.kL.b(a))return a
if(t.ad.b(a))return a
if(t.hH.b(a)||t.hX.b(a)||t.oA.b(a)||t.kI.b(a))return a
if(t.f.b(a)){s=o.cg(a)
r=o.b
if(!(s<r.length))return A.a(r,s)
q=n.a=r[s]
if(q!=null)return q
q={}
n.a=q
B.c.h(r,s,q)
J.o6(a,new A.mu(n,o))
return n.a}if(t.j.b(a)){s=o.cg(a)
n=o.b
if(!(s<n.length))return A.a(n,s)
q=n[s]
if(q!=null)return q
return o.kH(a,s)}if(t.bp.b(a)){s=o.cg(a)
r=o.b
if(!(s<r.length))return A.a(r,s)
q=n.b=r[s]
if(q!=null)return q
p={}
p.toString
n.b=p
B.c.h(r,s,p)
o.kZ(a,new A.mv(n,o))
return n.b}throw A.f(A.ls("structured clone of other type"))},
kH(a,b){var s,r=J.ae(a),q=r.gn(a),p=new Array(q)
p.toString
B.c.h(this.b,b,p)
for(s=0;s<q;++s)B.c.h(p,s,this.bN(r.l(a,s)))
return p}}
A.mu.prototype={
$2(a,b){this.a.a[a]=this.b.bN(b)},
$S:15}
A.mv.prototype={
$2(a,b){this.a.b[a]=this.b.bN(b)},
$S:41}
A.lW.prototype={
cg(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.c.H(r,a)
B.c.H(this.b,null)
return q},
bN(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.d5(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.a1(A.dc("DateTime is outside valid range: "+s,null))
A.ea(!0,"isUtc",t.v)
return new A.bA(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.f(A.ls("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.vf(a,t.z)
if(A.pY(a)){q=j.cg(a)
s=j.b
if(!(q<s.length))return A.a(s,q)
p=s[q]
if(p!=null)return p
r=t.z
o=A.a_(r,r)
B.c.h(s,q,o)
j.kY(a,new A.lX(j,o))
return o}s=a instanceof Array
s.toString
if(s){s=a
s.toString
q=j.cg(s)
r=j.b
if(!(q<r.length))return A.a(r,q)
p=r[q]
if(p!=null)return p
n=J.ae(s)
m=n.gn(s)
if(j.c){l=new Array(m)
l.toString
p=l}else p=s
B.c.h(r,q,p)
for(r=J.ah(p),k=0;k<m;++k)r.h(p,k,j.bN(n.l(s,k)))
return p}return a},
fF(a,b){this.c=!0
return this.bN(a)}}
A.lX.prototype={
$2(a,b){var s=this.a.bN(b)
this.b.h(0,a,s)
return s},
$S:45}
A.jF.prototype={
kZ(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.an)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.iW.prototype={
kY(a,b){var s,r,q,p
t.p1.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.an)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.mX.prototype={
$1(a){return this.a.di(0,this.b.m("0/?").a(a))},
$S:6}
A.mY.prototype={
$1(a){if(a==null)return this.a.fD(new A.kU(a===undefined))
return this.a.fD(a)},
$S:6}
A.kU.prototype={
A(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.aX.prototype={$iaX:1}
A.hP.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.f(A.a8(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){t.kT.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$it:1,
$ie:1,
$ik:1}
A.b0.prototype={$ib0:1}
A.i3.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.f(A.a8(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){t.ai.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$it:1,
$ie:1,
$ik:1}
A.ig.prototype={
gn(a){return a.length}}
A.iA.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.f(A.a8(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){A.ax(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$it:1,
$ie:1,
$ik:1}
A.b2.prototype={$ib2:1}
A.iM.prototype={
gn(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.f(A.a8(b,this.gn(a),a,null))
s=a.getItem(b)
s.toString
return s},
h(a,b,c){t.hk.a(c)
throw A.f(A.O("Cannot assign element of immutable List."))},
a7(a,b){return this.l(a,b)},
$it:1,
$ie:1,
$ik:1}
A.jh.prototype={}
A.ji.prototype={}
A.jq.prototype={}
A.jr.prototype={}
A.jC.prototype={}
A.jD.prototype={}
A.jL.prototype={}
A.jM.prototype={}
A.fR.prototype={
gn(a){return a.length}}
A.fS.prototype={
l(a,b){return A.ct(a.get(A.ax(b)))},
ag(a,b){var s,r,q
t.w.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.ct(r.value[1]))}},
gbk(a){var s=A.b([],t.s)
this.ag(a,new A.k8(s))
return s},
gbD(a){var s=A.b([],t.C)
this.ag(a,new A.k9(s))
return s},
gn(a){var s=a.size
s.toString
return s},
gaS(a){var s=a.size
s.toString
return s===0},
$ia9:1}
A.k8.prototype={
$2(a,b){return B.c.H(this.a,a)},
$S:4}
A.k9.prototype={
$2(a,b){return B.c.H(this.a,t.f.a(b))},
$S:4}
A.fT.prototype={
gn(a){return a.length}}
A.ca.prototype={}
A.i4.prototype={
gn(a){return a.length}}
A.j_.prototype={}
A.k5.prototype={}
A.ht.prototype={}
A.hs.prototype={
gn(a){var s=this.e
s===$&&A.c("_length")
return s-(this.b-this.c)},
gcK(){var s=this.b,r=this.e
r===$&&A.c("_length")
return s>=this.c+r},
B(){var s=this.a,r=this.b++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
ab(a){var s,r,q,p=this,o=p.c,n=p.b-o+o
if(a<0){s=p.e
s===$&&A.c("_length")
r=s-(n-o)}else r=a
q=A.cJ(p.a,p.d,r,n)
p.b=p.b+q.gn(q)
return q},
k(){var s,r,q,p,o=this,n=o.a,m=o.b,l=o.b=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.av()
s=m&255
m=o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.av()
r=l&255
l=o.b=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.av()
q=m&255
o.b=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.av()
p=l&255
if(o.d===1)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
a_(){var s,r,q,p,o=this,n=o.gn(o),m=o.a
if(t.D.b(m)){s=o.b
r=m.length
if(s+n>r)n=r-s
return A.Q(m.buffer,m.byteOffset+s,n)}s=o.b
q=s+n
p=m.length
return new Uint8Array(A.J(J.k4(m,s,q>p?p:q)))}}
A.kY.prototype={}
A.kW.prototype={
V(a){var s,r,q=this
if(q.a===q.c.length)q.jw()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
dr(a,b){var s,r,q,p,o=this
t.L.a(a)
if(b==null)b=a.length
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.dW(r-p)
B.k.bs(q,s,r,a)
o.a+=b},
b8(a){return this.dr(a,null)},
lz(a){var s,r,q,p,o=this,n=a.c
while(!0){s=o.a
r=a.e
r===$&&A.c("_length")
r=s+(r-(a.b-n))
q=o.c
p=q.length
if(!(r>p))break
o.dW(r-p)}B.k.ai(q,s,s+a.gn(a),a.a,a.b)
o.a=o.a+a.gn(a)},
aD(a){var s=this
if(s.b===1){s.V(a>>>24&255)
s.V(a>>>16&255)
s.V(a>>>8&255)
s.V(a&255)
return}s.V(a&255)
s.V(a>>>8&255)
s.V(a>>>16&255)
s.V(a>>>24&255)},
eh(a,b){var s=this
if(a<0)a=s.a+a
if(b==null)b=s.a
else if(b<0)b=s.a+b
return A.Q(s.c.buffer,a,b-a)},
af(a){return this.eh(a,null)},
dW(a){var s=a!=null?a>32768?a:32768:32768,r=this.c,q=r.length,p=new Uint8Array((q+s)*2)
B.k.bs(p,0,q,r)
this.c=p},
jw(){return this.dW(null)},
gn(a){return this.a}}
A.mD.prototype={
cF(a,b){var s,r,q,p,o=a.B(),n=a.B(),m=o&8
B.a.j(o,3)
if(m!==8)throw A.f(A.ed("Only DEFLATE compression supported: "+m))
if(B.a.a2((o<<8>>>0)+n,31)!==0)throw A.f(A.ed("Invalid FCHECK"))
if((n>>>5&1)!==0){a.k()
throw A.f(A.ed("FDICT Encoding not currently supported"))}s=A.dy(B.b8)
r=A.dy(B.bi)
q=A.kX(0,null)
r=new A.hr(a,q,s,r)
r.b=!0
r.eW()
p=t.L.a(A.Q(q.c.buffer,0,q.a))
a.k()
return p}}
A.kf.prototype={
iS(a){var s,r,q,p,o=this
if(a>4||!1)throw A.f(A.ed("Invalid Deflate Parameter"))
s=o.x
s===$&&A.c("_pending")
if(s!==0)o.d6()
if(o.c.gcK()){s=o.k3
s===$&&A.c("_lookAhead")
if(s===0)s=a!==0&&o.e!==666
else s=!0}else s=!0
if(s){switch($.b6.cA().e){case 0:r=o.iV(a)
break
case 1:r=o.iT(a)
break
case 2:r=o.iU(a)
break
default:r=-1
break}s=r===2
if(s||r===3)o.e=666
if(r===0||s)return 0
if(r===1){if(a===1){o.aw(2,3)
o.cf(256,B.a5)
o.fw()
s=o.bK
s===$&&A.c("_lastEOBLen")
q=o.b5
q===$&&A.c("_numValidBits")
if(1+s+10-q<9){o.aw(2,3)
o.cf(256,B.a5)
o.fw()}o.bK=7}else{o.fm(0,0,!1)
if(a===3){s=o.db
s===$&&A.c("_hashSize")
q=o.cx
p=0
for(;p<s;++p){q===$&&A.c("_head")
if(!(p<q.length))return A.a(q,p)
q[p]=0}}}o.d6()}}if(a!==4)return 0
return 1},
jq(){var s,r,q,p=this,o=p.as
o===$&&A.c("_windowSize")
p.ch=2*o
o=p.cx
o===$&&A.c("_head")
s=p.db
s===$&&A.c("_hashSize");--s
r=o.length
if(!(s>=0&&s<r))return A.a(o,s)
o[s]=0
for(q=0;q<s;++q){if(!(q<r))return A.a(o,q)
o[q]=0}p.k3=p.fx=p.k1=0
p.fy=p.k4=2
p.cy=p.id=0},
eX(){var s,r,q,p,o=this,n="_dynamicLengthTree"
for(s=o.p2,r=0;r<286;++r){s===$&&A.c(n)
q=r*2
if(!(q<1146))return A.a(s,q)
s[q]=0}for(q=o.p3,r=0;r<30;++r){q===$&&A.c("_dynamicDistTree")
p=r*2
if(!(p<122))return A.a(q,p)
q[p]=0}for(q=o.p4,r=0;r<19;++r){q===$&&A.c("_bitLengthTree")
p=r*2
if(!(p<78))return A.a(q,p)
q[p]=0}s===$&&A.c(n)
s[512]=1
o.aQ=o.bU=o.aR=o.bJ=0},
dZ(a,b){var s,r,q,p,o,n=this.to
if(!(b>=0&&b<573))return A.a(n,b)
s=n[b]
r=b<<1>>>0
q=this.xr
while(!0){p=this.x1
p===$&&A.c("_heapLen")
if(!(r<=p))break
if(r<p){p=r+1
if(!(p>=0&&p<573))return A.a(n,p)
p=n[p]
if(!(r>=0&&r<573))return A.a(n,r)
p=A.og(a,p,n[r],q)}else p=!1
if(p)++r
if(!(r>=0&&r<573))return A.a(n,r)
if(A.og(a,s,n[r],q))break
p=n[r]
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=p
o=r<<1>>>0
b=r
r=o}if(!(b>=0&&b<573))return A.a(n,b)
n[b]=s},
fg(a,b){var s,r,q,p,o,n,m,l,k,j="_bitLengthTree",i=a.length
if(1>=i)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}p=(b+1)*2+1
if(!(p>=0&&p<i))return A.a(a,p)
a[p]=65535
for(p=this.p4,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<i))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else if(m<q){p===$&&A.c(j)
l=s*2
if(!(l>=0&&l<78))return A.a(p,l)
p[l]=p[l]+m}else if(s!==0){if(s!==n){p===$&&A.c(j)
l=s*2
if(!(l>=0&&l<78))return A.a(p,l)
p[l]=p[l]+1}p===$&&A.c(j)
p[32]=p[32]+1}else if(m<=10){p===$&&A.c(j)
p[34]=p[34]+1}else{p===$&&A.c(j)
p[36]=p[36]+1}if(k===0){r=138
q=3}else if(s===k){r=6
q=3}else{r=7
q=4}n=s
m=0}},
ig(){var s,r,q=this,p=q.p2
p===$&&A.c("_dynamicLengthTree")
s=q.R8.b
s===$&&A.c("maxCode")
q.fg(p,s)
s=q.p3
s===$&&A.c("_dynamicDistTree")
p=q.RG.b
p===$&&A.c("maxCode")
q.fg(s,p)
q.rx.dB(q)
for(p=q.p4,r=18;r>=3;--r){p===$&&A.c("_bitLengthTree")
s=B.a4[r]*2+1
if(!(s<78))return A.a(p,s)
if(p[s]!==0)break}p=q.aR
p===$&&A.c("_optimalLen")
q.aR=p+(3*(r+1)+5+5+4)
return r},
kj(a,b,c){var s,r,q,p,o=this
o.aw(a-257,5)
s=b-1
o.aw(s,5)
o.aw(c-4,4)
for(r=0;r<c;++r){q=o.p4
q===$&&A.c("_bitLengthTree")
if(!(r<19))return A.a(B.a4,r)
p=B.a4[r]*2+1
if(!(p<78))return A.a(q,p)
o.aw(q[p],3)}q=o.p2
q===$&&A.c("_dynamicLengthTree")
o.fh(q,a-1)
q=o.p3
q===$&&A.c("_dynamicDistTree")
o.fh(q,s)},
fh(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="_bitLengthTree",e=a.length
if(1>=e)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}for(p=t.L,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<e))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else if(m<q){l=s*2
j=l+1
do{i=g.p4
i===$&&A.c(f)
p.a(i)
if(!(l>=0&&l<78))return A.a(i,l)
h=i[l]
if(!(j>=0&&j<78))return A.a(i,j)
g.aw(h&65535,i[j]&65535)}while(--m,m!==0)}else if(s!==0){if(s!==n){l=g.p4
l===$&&A.c(f)
p.a(l)
j=s*2
if(!(j>=0&&j<78))return A.a(l,j)
i=l[j];++j
if(!(j<78))return A.a(l,j)
g.aw(i&65535,l[j]&65535);--m}l=g.p4
l===$&&A.c(f)
p.a(l)
g.aw(l[32]&65535,l[33]&65535)
g.aw(m-3,2)}else{l=g.p4
if(m<=10){l===$&&A.c(f)
p.a(l)
g.aw(l[34]&65535,l[35]&65535)
g.aw(m-3,3)}else{l===$&&A.c(f)
p.a(l)
g.aw(l[36]&65535,l[37]&65535)
g.aw(m-11,7)}}if(k===0){r=138
q=3}else if(s===k){r=6
q=3}else{r=7
q=4}n=s
m=0}},
jQ(a,b,c){var s,r,q=this
if(c===0)return
s=q.f
s===$&&A.c("_pendingBuffer")
r=q.x
r===$&&A.c("_pending")
B.k.ai(s,r,r+c,a,b)
q.x=q.x+c},
be(a){var s,r=this.f
r===$&&A.c("_pendingBuffer")
s=this.x
s===$&&A.c("_pending")
this.x=s+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a},
cf(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.aw(q&65535,b[s]&65535)},
aw(a,b){var s,r=this,q="_bitBuffer",p=r.b5
p===$&&A.c("_numValidBits")
s=r.b4
if(p>16-b){s===$&&A.c(q)
p=r.b4=(s|B.a.W(a,p)&65535)>>>0
r.be(p)
r.be(A.aR(p,8))
r.b4=A.aR(a,16-r.b5)
r.b5=r.b5+(b-16)}else{s===$&&A.c(q)
r.b4=(s|B.a.W(a,p)&65535)>>>0
r.b5=p+b}},
cC(a,b){var s,r,q,p,o,n=this,m="_dynamicLengthTree",l="_matches",k="_dynamicDistTree",j=n.f
j===$&&A.c("_pendingBuffer")
s=n.bh
s===$&&A.c("_dbuf")
r=n.aQ
r===$&&A.c("_lastLit")
r=s+r*2
s=A.aR(a,8)
if(!(r<j.length))return A.a(j,r)
j[r]=s
s=n.f
r=n.bh
j=n.aQ
r=r+j*2+1
q=s.length
if(!(r<q))return A.a(s,r)
s[r]=a
r=n.y1
r===$&&A.c("_lbuf")
r+=j
if(!(r<q))return A.a(s,r)
s[r]=b
n.aQ=j+1
if(a===0){j=n.p2
j===$&&A.c(m)
s=b*2
if(!(s>=0&&s<1146))return A.a(j,s)
j[s]=j[s]+1}else{j=n.bU
j===$&&A.c(l)
n.bU=j+1
j=n.p2
j===$&&A.c(m)
if(!(b>=0&&b<256))return A.a(B.ao,b)
s=(B.ao[b]+256+1)*2
if(!(s<1146))return A.a(j,s)
j[s]=j[s]+1
s=n.p3
s===$&&A.c(k)
j=A.pm(a-1)*2
if(!(j<122))return A.a(s,j)
s[j]=s[j]+1}j=n.aQ
if((j&8191)===0){s=n.ok
s===$&&A.c("_level")
s=s>2}else s=!1
if(s){p=j*8
j=n.k1
j===$&&A.c("_strStart")
s=n.fx
s===$&&A.c("_blockStart")
for(r=n.p3,o=0;o<30;++o){r===$&&A.c(k)
q=o*2
if(!(q<122))return A.a(r,q)
p+=r[q]*(5+B.S[o])}p=A.aR(p,3)
r=n.bU
r===$&&A.c(l)
q=n.aQ
if(r<q/2&&p<(j-s)/2)return!0
j=q}s=n.y2
s===$&&A.c("_litBufferSize")
return j===s-1},
ey(a,b){var s,r,q,p,o,n,m,l,k=this,j=t.L
j.a(a)
j.a(b)
j=k.aQ
j===$&&A.c("_lastLit")
if(j!==0){s=0
do{j=k.f
j===$&&A.c("_pendingBuffer")
r=k.bh
r===$&&A.c("_dbuf")
r+=s*2
q=j.length
if(!(r<q))return A.a(j,r)
p=j[r];++r
if(!(r<q))return A.a(j,r)
o=p<<8&65280|j[r]&255
r=k.y1
r===$&&A.c("_lbuf")
r+=s
if(!(r<q))return A.a(j,r)
n=j[r]&255;++s
if(o===0)k.cf(n,a)
else{m=B.ao[n]
k.cf(m+256+1,a)
if(!(m<29))return A.a(B.au,m)
l=B.au[m]
if(l!==0)k.aw(n-B.hw[m],l);--o
m=A.pm(o)
k.cf(m,b)
if(!(m<30))return A.a(B.S,m)
l=B.S[m]
if(l!==0)k.aw(o-B.ho[m],l)}}while(s<k.aQ)}k.cf(256,a)
if(513>=a.length)return A.a(a,513)
k.bK=a[513]},
hc(){var s,r,q,p,o,n="_dynamicLengthTree"
for(s=this.p2,r=0,q=0;r<7;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}for(o=0;r<128;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
o+=s[p];++r}for(;r<256;){s===$&&A.c(n)
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}this.y=q>A.aR(o,2)?0:1},
fw(){var s=this,r="_bitBuffer",q=s.b5
q===$&&A.c("_numValidBits")
if(q===16){q=s.b4
q===$&&A.c(r)
s.be(q)
s.be(A.aR(q,8))
s.b5=s.b4=0}else if(q>=8){q=s.b4
q===$&&A.c(r)
s.be(q)
s.b4=A.aR(s.b4,8)
s.b5=s.b5-8}},
er(){var s=this,r="_bitBuffer",q=s.b5
q===$&&A.c("_numValidBits")
if(q>8){q=s.b4
q===$&&A.c(r)
s.be(q)
s.be(A.aR(q,8))}else if(q>0){q=s.b4
q===$&&A.c(r)
s.be(q)}s.b5=s.b4=0},
bQ(a){var s,r,q,p,o,n=this,m=n.fx
m===$&&A.c("_blockStart")
if(m>=0)s=m
else s=-1
r=n.k1
r===$&&A.c("_strStart")
m=r-m
r=n.ok
r===$&&A.c("_level")
if(r>0){if(n.y===2)n.hc()
n.R8.dB(n)
n.RG.dB(n)
q=n.ig()
r=n.aR
r===$&&A.c("_optimalLen")
p=A.aR(r+3+7,3)
r=n.bJ
r===$&&A.c("_staticLen")
o=A.aR(r+3+7,3)
if(o<=p)p=o}else{o=m+5
p=o
q=0}if(m+4<=p&&s!==-1)n.fm(s,m,a)
else if(o===p){n.aw(2+(a?1:0),3)
n.ey(B.a5,B.bg)}else{n.aw(4+(a?1:0),3)
m=n.R8.b
m===$&&A.c("maxCode")
s=n.RG.b
s===$&&A.c("maxCode")
n.kj(m+1,s+1,q+1)
s=n.p2
s===$&&A.c("_dynamicLengthTree")
m=n.p3
m===$&&A.c("_dynamicDistTree")
n.ey(s,m)}n.eX()
if(a)n.er()
n.fx=n.k1
n.d6()},
iV(a){var s,r,q,p,o,n=this,m=n.r
m===$&&A.c("_pendingBufferSize")
s=m-5
s=65535>s?s:65535
for(m=a===0;!0;){r=n.k3
r===$&&A.c("_lookAhead")
if(r<=1){n.dO()
r=n.k3
q=r===0
if(q&&m)return 0
if(q)break}q=n.k1
q===$&&A.c("_strStart")
r=n.k1=q+r
n.k3=0
q=n.fx
q===$&&A.c("_blockStart")
p=q+s
if(r>=p){n.k3=r-p
n.k1=p
n.bQ(!1)}r=n.k1
q=n.fx
o=n.as
o===$&&A.c("_windowSize")
if(r-q>=o-262)n.bQ(!1)}m=a===4
n.bQ(m)
return m?3:1},
fm(a,b,c){var s,r=this
r.aw(c?1:0,3)
r.er()
r.bK=8
r.be(b)
r.be(A.aR(b,8))
s=(~b>>>0)+65536&65535
r.be(s)
r.be(A.aR(s,8))
s=r.ay
s===$&&A.c("_window")
r.jQ(s,a,b)},
dO(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_windowSize",f=h.c
do{s=h.ch
s===$&&A.c("_actualWindowSize")
r=h.k3
r===$&&A.c("_lookAhead")
q=h.k1
q===$&&A.c("_strStart")
p=s-r-q
if(p===0&&q===0&&r===0){s=h.as
s===$&&A.c(g)
p=s}else{s=h.as
s===$&&A.c(g)
if(q>=s+s-262){r=h.ay
r===$&&A.c("_window")
B.k.ai(r,0,s,r,s)
s=h.k2
o=h.as
h.k2=s-o
h.k1=h.k1-o
s=h.fx
s===$&&A.c("_blockStart")
h.fx=s-o
s=h.db
s===$&&A.c("_hashSize")
r=h.cx
r===$&&A.c("_head")
q=r.length
n=s
m=n
do{--n
if(!(n>=0&&n<q))return A.a(r,n)
l=r[n]&65535
r[n]=l>=o?l-o:0}while(--m,m!==0)
s=h.CW
s===$&&A.c("_prev")
r=s.length
n=o
m=n
do{--n
if(!(n>=0&&n<r))return A.a(s,n)
l=s[n]&65535
s[n]=l>=o?l-o:0}while(--m,m!==0)
p+=o}}if(f.gcK())return
s=h.ay
s===$&&A.c("_window")
m=h.jT(s,h.k1+h.k3,p)
s=h.k3=h.k3+m
if(s>=3){r=h.ay
q=h.k1
k=r.length
if(q>>>0!==q||q>=k)return A.a(r,q)
j=r[q]&255
h.cy=j
i=h.fr
i===$&&A.c("_hashShift")
i=B.a.W(j,i);++q
if(!(q<k))return A.a(r,q)
q=r[q]
r=h.dy
r===$&&A.c("_hashMask")
h.cy=((i^q&255)&r)>>>0}}while(s<262&&!f.gcK())},
iT(a){var s,r,q,p,o,n,m,l,k,j,i=this,h="_insertHash",g="_hashShift",f="_window",e="_strStart",d="_hashMask",c="_windowMask"
for(s=a===0,r=0;!0;){q=i.k3
q===$&&A.c("_lookAhead")
if(q<262){i.dO()
q=i.k3
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=i.cy
q===$&&A.c(h)
p=i.fr
p===$&&A.c(g)
p=B.a.W(q,p)
q=i.ay
q===$&&A.c(f)
o=i.k1
o===$&&A.c(e)
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=i.dy
q===$&&A.c(d)
q=((p^n&255)&q)>>>0
i.cy=q
n=i.cx
n===$&&A.c("_head")
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=i.CW
m===$&&A.c("_prev")
l=i.ax
l===$&&A.c(c)
l=(o&l)>>>0
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n[q]=o}if(r!==0){q=i.k1
q===$&&A.c(e)
p=i.as
p===$&&A.c("_windowSize")
p=(q-r&65535)<=p-262
q=p}else q=!1
if(q){q=i.p1
q===$&&A.c("_strategy")
if(q!==2)i.fy=i.f0(r)}q=i.fy
q===$&&A.c("_matchLength")
p=i.k1
if(q>=3){p===$&&A.c(e)
k=i.cC(p-i.k2,q-3)
q=i.k3
p=i.fy
q-=p
i.k3=q
o=$.b6.b
if(o==null?$.b6==null:o===$.b6)A.a1(A.kH($.b6.a))
if(p<=o.b&&q>=3){q=i.fy=p-1
do{p=i.k1=i.k1+1
o=i.cy
o===$&&A.c(h)
n=i.fr
n===$&&A.c(g)
n=B.a.W(o,n)
o=i.ay
o===$&&A.c(f)
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=i.dy
o===$&&A.c(d)
o=((n^m&255)&o)>>>0
i.cy=o
m=i.cx
m===$&&A.c("_head")
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=i.CW
l===$&&A.c("_prev")
j=i.ax
j===$&&A.c(c)
j=(p&j)>>>0
if(!(j>=0&&j<l.length))return A.a(l,j)
l[j]=n
m[o]=p}while(q=i.fy=q-1,q!==0)
i.k1=p+1}else{q=i.k1=i.k1+p
i.fy=0
p=i.ay
p===$&&A.c(f)
o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
n=p[q]&255
i.cy=n
m=i.fr
m===$&&A.c(g)
m=B.a.W(n,m);++q
if(!(q<o))return A.a(p,q)
q=p[q]
p=i.dy
p===$&&A.c(d)
i.cy=((m^q&255)&p)>>>0}}else{q=i.ay
q===$&&A.c(f)
p===$&&A.c(e)
if(!(p>=0&&p<q.length))return A.a(q,p)
k=i.cC(0,q[p]&255)
i.k3=i.k3-1
i.k1=i.k1+1}if(k)i.bQ(!1)}s=a===4
i.bQ(s)
return s?3:1},
iU(a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_insertHash",f="_hashShift",e="_window",d="_strStart",c="_hashMask",b="_windowMask",a="_matchAvailable"
for(s=a0===0,r=0;!0;){q=h.k3
q===$&&A.c("_lookAhead")
if(q<262){h.dO()
q=h.k3
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=h.cy
q===$&&A.c(g)
p=h.fr
p===$&&A.c(f)
p=B.a.W(q,p)
q=h.ay
q===$&&A.c(e)
o=h.k1
o===$&&A.c(d)
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=h.dy
q===$&&A.c(c)
q=((p^n&255)&q)>>>0
h.cy=q
n=h.cx
n===$&&A.c("_head")
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=h.CW
m===$&&A.c("_prev")
l=h.ax
l===$&&A.c(b)
l=(o&l)>>>0
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n[q]=o}q=h.fy
q===$&&A.c("_matchLength")
h.k4=q
h.go=h.k2
h.fy=2
if(r!==0){p=$.b6.b
if(p==null?$.b6==null:p===$.b6)A.a1(A.kH($.b6.a))
if(q<p.b){q=h.k1
q===$&&A.c(d)
p=h.as
p===$&&A.c("_windowSize")
p=(q-r&65535)<=p-262
q=p}else q=!1}else q=!1
if(q){q=h.p1
q===$&&A.c("_strategy")
if(q!==2){q=h.f0(r)
h.fy=q}else q=2
if(q<=5)if(h.p1!==1)if(q===3){p=h.k1
p===$&&A.c(d)
p=p-h.k2>4096}else p=!1
else p=!0
else p=!1
if(p){h.fy=2
q=2}}else q=2
p=h.k4
if(p>=3&&q<=p){q=h.k1
q===$&&A.c(d)
k=q+h.k3-3
j=h.cC(q-1-h.go,p-3)
p=h.k3
q=h.k4
h.k3=p-(q-1)
q=h.k4=q-2
do{p=h.k1=h.k1+1
if(p<=k){o=h.cy
o===$&&A.c(g)
n=h.fr
n===$&&A.c(f)
n=B.a.W(o,n)
o=h.ay
o===$&&A.c(e)
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=h.dy
o===$&&A.c(c)
o=((n^m&255)&o)>>>0
h.cy=o
m=h.cx
m===$&&A.c("_head")
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=h.CW
l===$&&A.c("_prev")
i=h.ax
i===$&&A.c(b)
i=(p&i)>>>0
if(!(i>=0&&i<l.length))return A.a(l,i)
l[i]=n
m[o]=p}}while(q=h.k4=q-1,q!==0)
h.id=0
h.fy=2
h.k1=p+1
if(j)h.bQ(!1)}else{q=h.id
q===$&&A.c(a)
if(q!==0){q=h.ay
q===$&&A.c(e)
p=h.k1
p===$&&A.c(d);--p
if(!(p>=0&&p<q.length))return A.a(q,p)
if(h.cC(0,q[p]&255))h.bQ(!1)
h.k1=h.k1+1
h.k3=h.k3-1}else{h.id=1
q=h.k1
q===$&&A.c(d)
h.k1=q+1
h.k3=h.k3-1}}}s=h.id
s===$&&A.c(a)
if(s!==0){s=h.ay
s===$&&A.c(e)
q=h.k1
q===$&&A.c(d);--q
if(!(q>=0&&q<s.length))return A.a(s,q)
h.cC(0,s[q]&255)
h.id=0}s=a0===4
h.bQ(s)
return s?3:1},
f0(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=$.b6.cA().d,a=c.k1
a===$&&A.c("_strStart")
s=c.k4
s===$&&A.c("_prevLength")
r=c.as
r===$&&A.c("_windowSize")
r-=262
q=a>r?a-r:0
p=$.b6.cA().c
r=c.ax
r===$&&A.c("_windowMask")
o=c.k1+258
n=c.ay
n===$&&A.c("_window")
m=a+s
l=m-1
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
if(!(m>=0&&m<k))return A.a(n,m)
i=n[m]
if(c.k4>=$.b6.cA().a)b=b>>>2
n=c.k3
n===$&&A.c("_lookAhead")
if(p>n)p=n
h=o-258
g=s
f=a
do{c$0:{a=c.ay
s=a0+g
n=a.length
if(!(s>=0&&s<n))return A.a(a,s)
if(a[s]===i){--s
if(!(s>=0))return A.a(a,s)
if(a[s]===j){if(!(a0>=0&&a0<n))return A.a(a,a0)
s=a[a0]
if(!(f>=0&&f<n))return A.a(a,f)
if(s===a[f]){e=a0+1
if(!(e<n))return A.a(a,e)
s=a[e]
m=f+1
if(!(m<n))return A.a(a,m)
m=s!==a[m]
s=m}else{e=a0
s=!0}}else{e=a0
s=!0}}else{e=a0
s=!0}if(s)break c$0
f+=2;++e
do{++f
if(!(f>=0&&f<n))return A.a(a,f)
s=a[f];++e
if(!(e>=0&&e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
s=s===a[e]&&f<o}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}while(s)
d=258-(o-f)
if(d>g){c.k2=a0
if(d>=p){g=d
break}a=c.ay
s=h+d
n=s-1
m=a.length
if(!(n>=0&&n<m))return A.a(a,n)
j=a[n]
if(!(s<m))return A.a(a,s)
i=a[s]
g=d}f=h}a=c.CW
a===$&&A.c("_prev")
s=a0&r
if(!(s>=0&&s<a.length))return A.a(a,s)
a0=a[s]&65535
if(a0>q){--b
a=b!==0}else a=!1}while(a)
a=c.k3
if(g<=a)return g
return a},
jT(a,b,c){var s,r,q,p,o=this
if(c===0||o.c.gcK())return 0
s=o.c.ab(c)
r=s.gn(s)
if(r===0)return 0
q=s.a_()
p=q.length
if(r>p)r=p
B.k.bs(a,b,b+r,q)
o.b+=r
o.a=A.bF(q,o.a)
return r},
d6(){var s,r=this,q=r.x
q===$&&A.c("_pending")
s=r.f
s===$&&A.c("_pendingBuffer")
r.d.dr(s,q)
s=r.w
s===$&&A.c("_pendingOut")
r.w=s+q
q=r.x-q
r.x=q
if(q===0)r.w=0},
jd(a){switch(a){case 0:return new A.be(0,0,0,0,0)
case 1:return new A.be(4,4,8,4,1)
case 2:return new A.be(4,5,16,8,1)
case 3:return new A.be(4,6,32,32,1)
case 4:return new A.be(4,4,16,16,2)
case 5:return new A.be(8,16,32,32,2)
case 6:return new A.be(8,16,128,128,2)
case 7:return new A.be(8,32,128,256,2)
case 8:return new A.be(32,128,258,1024,2)
case 9:return new A.be(32,258,258,4096,2)}throw A.f(A.ed("Invalid Deflate parameter"))}}
A.be.prototype={}
A.mk.prototype={
jb(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2="_optimalLen",a3=a1.a
a3===$&&A.c("dynamicTree")
s=a1.c
s===$&&A.c("staticDesc")
r=s.a
q=s.b
p=s.c
o=s.e
for(s=a4.ry,n=0;n<=15;++n)s[n]=0
m=a4.to
l=a4.x2
l===$&&A.c("_heapMax")
if(!(l>=0&&l<573))return A.a(m,l)
k=m[l]*2+1
j=a3.length
if(!(k>=0&&k<j))return A.a(a3,k)
a3[k]=0
for(i=l+1,l=r!=null,k=q.length,h=0;i<573;++i){g=m[i]
f=g*2
e=f+1
if(!(e>=0&&e<j))return A.a(a3,e)
d=a3[e]*2+1
if(!(d>=0&&d<j))return A.a(a3,d)
n=a3[d]+1
if(n>o){++h
n=o}a3[e]=n
d=a1.b
d===$&&A.c("maxCode")
if(g>d)continue
if(!(n>=0&&n<16))return A.a(s,n)
s[n]=s[n]+1
if(g>=p){d=g-p
if(!(d>=0&&d<k))return A.a(q,d)
c=q[d]}else c=0
if(!(f>=0&&f<j))return A.a(a3,f)
b=a3[f]
f=a4.aR
f===$&&A.c(a2)
a4.aR=f+b*(n+c)
if(l){f=a4.bJ
f===$&&A.c("_staticLen")
if(!(e<r.length))return A.a(r,e)
a4.bJ=f+b*(r[e]+c)}}if(h===0)return
n=o-1
do{a=n
while(!0){if(!(a>=0&&a<16))return A.a(s,a)
l=s[a]
if(!(l===0))break;--a}s[a]=l-1
l=a+1
if(!(l<16))return A.a(s,l)
s[l]=s[l]+2
if(!(o<16))return A.a(s,o)
s[o]=s[o]-1
h-=2}while(h>0)
for(n=o;n!==0;--n){if(!(n>=0))return A.a(s,n)
g=s[n]
for(;g!==0;){--i
if(!(i>=0&&i<573))return A.a(m,i)
a0=m[i]
l=a1.b
l===$&&A.c("maxCode")
if(a0>l)continue
l=a0*2
k=l+1
if(!(k>=0&&k<j))return A.a(a3,k)
f=a3[k]
if(f!==n){e=a4.aR
e===$&&A.c(a2)
if(!(l>=0&&l<j))return A.a(a3,l)
a4.aR=e+(n-f)*a3[l]
a3[k]=n}--g}}},
dB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
c===$&&A.c("dynamicTree")
s=d.c
s===$&&A.c("staticDesc")
r=s.a
q=s.d
a.x1=0
a.x2=573
for(s=c.length,p=a.to,o=a.xr,n=0,m=-1;n<q;++n){l=n*2
if(!(l<s))return A.a(c,l)
if(c[l]!==0){l=++a.x1
if(!(l>=0&&l<573))return A.a(p,l)
p[l]=n
if(!(n<573))return A.a(o,n)
o[n]=0
m=n}else{++l
if(!(l<s))return A.a(c,l)
c[l]=0}}for(l=r!=null;k=a.x1,k<2;){++k
a.x1=k
if(m<2){++m
j=m}else j=0
if(!(k>=0))return A.a(p,k)
p[k]=j
k=j*2
if(!(k>=0&&k<s))return A.a(c,k)
c[k]=1
o[j]=0
i=a.aR
i===$&&A.c("_optimalLen")
a.aR=i-1
if(l){i=a.bJ
i===$&&A.c("_staticLen");++k
if(!(k<r.length))return A.a(r,k)
a.bJ=i-r[k]}}d.b=m
for(n=B.a.U(k,2);n>=1;--n)a.dZ(c,n)
j=q
do{n=p[1]
l=a.x1--
if(!(l>=0&&l<573))return A.a(p,l)
p[1]=p[l]
a.dZ(c,1)
h=p[1]
l=--a.x2
if(!(l>=0&&l<573))return A.a(p,l)
p[l]=n;--l
a.x2=l
if(!(l>=0))return A.a(p,l)
p[l]=h
l=j*2
k=n*2
if(!(k>=0&&k<s))return A.a(c,k)
i=c[k]
g=h*2
if(!(g>=0&&g<s))return A.a(c,g)
f=c[g]
if(!(l<s))return A.a(c,l)
c[l]=i+f
if(!(n>=0&&n<573))return A.a(o,n)
f=o[n]
if(!(h>=0&&h<573))return A.a(o,h)
i=o[h]
l=f>i?f:i
if(!(j<573))return A.a(o,j)
o[j]=l+1;++k;++g
if(!(g<s))return A.a(c,g)
c[g]=j
if(!(k<s))return A.a(c,k)
c[k]=j
e=j+1
p[1]=j
a.dZ(c,1)
if(a.x1>=2){j=e
continue}else break}while(!0)
s=--a.x2
o=p[1]
if(!(s>=0&&s<573))return A.a(p,s)
p[s]=o
d.jb(a)
A.ty(c,m,a.ry)}}
A.jz.prototype={}
A.ko.prototype={
hy(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.b
if(typeof r!=="number")return r.lD()
if(r>q)h.sl4(r)
if(!(s<a.length))return A.a(a,s)
r=a[s]
q=h.c
if(typeof r!=="number")return r.ha()
if(r<q)h.sl8(r)}p=B.a.W(1,h.b)
h.a=new Uint32Array(p)
for(o=1,n=0,m=2;o<=h.b;){for(r=o<<16,s=0;s<g;++s){if(!(s<a.length))return A.a(a,s)
if(J.bg(a[s],o)){for(l=n,k=0,j=0;j<o;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(q=h.a,i=(r|s)>>>0,j=k;j<p;j+=m){if(!(j>=0&&j<q.length))return A.a(q,j)
q[j]=i}++n}}++o
n=n<<1>>>0
m=m<<1>>>0}},
sl4(a){this.b=A.x(a)},
sl8(a){this.c=A.x(a)}}
A.hr.prototype={
eW(){var s,r,q,p,o=this
o.e=o.d=0
if(!o.b)return
s=o.a
s===$&&A.c("input")
r=s.c
while(!0){q=s.b
p=s.e
p===$&&A.c("_length")
if(!(q<r+p))break
if(!o.jy())break}},
jy(){var s,r=this,q=r.a
q===$&&A.c("input")
if(q.gcK())return!1
s=r.bf(3)
switch(B.a.j(s,1)){case 0:if(r.jI()===-1)return!1
break
case 1:if(r.eE(r.r,r.w)===-1)return!1
break
case 2:if(r.jz()===-1)return!1
break
default:return!1}return(s&1)===0},
bf(a){var s,r,q,p,o=this
if(a===0)return 0
for(s=o.a;r=o.e,r<a;){s===$&&A.c("input")
q=s.b
p=s.e
p===$&&A.c("_length")
if(q>=s.c+p)return-1
p=s.a
s.b=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o.d=(o.d|B.a.W(q,r))>>>0
o.e=r+8}s=o.d
q=B.a.O(1,a)
o.d=B.a.a4(s,a)
o.e=r-a
return(s&q-1)>>>0},
e_(a){var s,r,q,p,o,n,m,l=this,k=a.a
k===$&&A.c("table")
s=a.b
for(r=l.a;q=l.e,q<s;){r===$&&A.c("input")
p=r.b
o=r.e
o===$&&A.c("_length")
if(p>=r.c+o)return-1
o=r.a
r.b=p+1
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
l.d=(l.d|B.a.W(p,q))>>>0
l.e=q+8}r=l.d
p=(r&B.a.W(1,s)-1)>>>0
if(!(p<k.length))return A.a(k,p)
n=k[p]
m=n>>>16
l.d=B.a.a4(r,m)
l.e=q-m
return n&65535},
jI(){var s,r,q=this
q.e=q.d=0
s=q.bf(16)
r=q.bf(16)
if(s!==0&&s!==(r^65535)>>>0)return-1
r=q.a
r===$&&A.c("input")
if(s>r.gn(r))return-1
q.c.lz(r.ab(s))
return 0},
jz(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.bf(5)
if(h===-1)return-1
h+=257
if(h>288)return-1
s=i.bf(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=i.bf(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=i.bf(3)
if(o===-1)return-1
n=B.a4[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=A.dy(q)
n=h+s
l=new Uint8Array(n)
k=A.Q(l.buffer,0,h)
j=A.Q(l.buffer,h,s)
if(i.is(n,m,l)===-1)return-1
return i.eE(A.dy(k),A.dy(j))},
eE(a,b){var s,r,q,p,o,n,m,l=this
for(s=l.c;!0;){r=l.e_(a)
if(r<0||r>285)return-1
if(r===256)break
if(r<256){s.V(r&255)
continue}q=r-257
if(!(q>=0&&q<29))return A.a(B.bl,q)
p=B.bl[q]+l.bf(B.dk[q])
o=l.e_(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.ba,o)
n=B.ba[o]+l.bf(B.S[o])
for(m=-n;p>n;){s.b8(s.af(m))
p-=n}if(p===n)s.b8(s.af(m))
else s.b8(s.eh(m,p-n))}for(s=l.a;m=l.e,m>=8;){l.e=m-8
s===$&&A.c("input")
if(--s.b<0)s.b=0}return 0},
is(a,b,c){var s,r,q,p,o,n,m,l=this
t.L.a(c)
for(s=c.length,r=0,q=0;q<a;){p=l.e_(b)
if(p===-1)return-1
switch(p){case 16:o=l.bf(2)
if(o===-1)return-1
o+=3
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=r}break
case 17:o=l.bf(3)
if(o===-1)return-1
o+=3
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
case 18:o=l.bf(7)
if(o===-1)return-1
o+=11
for(;n=o-1,o>0;o=n,q=m){m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=0}r=0
break
default:if(p<0||p>15)return-1
m=q+1
if(!(q>=0&&q<s))return A.a(c,q)
c[q]=p
q=m
r=p
break}}return 0}}
A.lU.prototype={}
A.lT.prototype={}
A.lV.prototype={
fI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=t.L
g.a(a)
s=A.kX(1,32768)
s.V(120)
for(r=0;q=(r|0)>>>0,(30720+q)%31!==0;)++r
s.V(q)
p=A.uZ(a)
o=A.cJ(a,1,null,0)
q=A.nC()
n=A.nC()
m=A.nC()
l=new Uint16Array(16)
k=new Uint32Array(573)
j=new Uint8Array(573)
i=A.kX(0,32768)
l=new A.kf(o,i,q,n,m,l,k,j)
if(b==null||b===-1)b=6
if(typeof b!=="number")return b.ha()
if(b<=9)k=!1
else k=!0
if(k)A.a1(A.ed("Invalid Deflate parameter"))
$.b6.b=l.jd(b)
k=new Uint16Array(1146)
l.p2=k
j=new Uint16Array(122)
l.p3=j
h=new Uint16Array(78)
l.p4=h
l.at=15
l.as=32768
l.ax=32767
l.dx=15
l.db=32768
l.dy=32767
l.fr=5
l.ay=new Uint8Array(65536)
l.CW=new Uint16Array(32768)
l.cx=new Uint16Array(32768)
l.y2=16384
l.f=new Uint8Array(65536)
l.r=65536
l.bh=16384
l.y1=49152
l.ok=A.x(b)
l.w=l.x=l.p1=0
l.e=113
l.a=0
q.a=k
k=t.aK
q.c=k.a($.ql())
n.a=j
n.c=k.a($.qk())
m.a=h
m.c=k.a($.qj())
l.b5=l.b4=0
l.bK=8
l.eX()
l.jq()
l.iS(4)
l.d6()
s.b8(g.a(A.Q(i.c.buffer,0,i.a)))
s.aD(p)
g=A.Q(s.c.buffer,0,s.a)
return g},
kR(a){return this.fI(a,null)}}
A.kc.prototype={
aj(){return"Channel."+this.b}}
A.Y.prototype={
C(){var s=this.b
return++this.a<s.gn(s)},
gJ(a){return this.b.l(0,this.a)}}
A.df.prototype={
N(a){return new A.df(new Uint16Array(A.J(this.a)))},
gG(){return B.A},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
h(a,b,c){var s,r,q
A.a6(c)
s=this.a
r=s.length
if(b<r){q=A.U(c)
if(!(b>=0))return A.a(s,b)
s[b]=q}},
gL(a){return this.gq(this)},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gt(){var s,r=this.a
if(r.length>1){r=r[1]
s=$.Z
s=s!=null?s:A.a4()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gv(a){var s,r=this.a
if(r.length>2){r=r[2]
s=$.Z
s=s!=null?s:A.a4()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gu(a){var s,r=this.a
if(r.length>3){r=r[3]
s=$.Z
s=s!=null?s:A.a4()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=A.U(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=A.U(s)
s=b.gv(b)
if(q>2)r[2]=A.U(s)
s=b.gu(b)
if(q>3)r[3]=A.U(s)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.dg.prototype={
N(a){return new A.dg(new Float32Array(A.J(this.a)))},
gG(){return B.E},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r
A.a6(c)
s=this.a
r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s[b]=c}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:1},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=s
s=b.gv(b)
if(q>2)r[2]=s
s=b.gu(b)
if(q>3)r[3]=s},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.dh.prototype={
N(a){return new A.dh(new Float64Array(A.J(this.a)))},
gG(){return B.H},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r
A.a6(c)
s=this.a
r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s[b]=c}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:1},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=s
s=b.gv(b)
if(q>2)r[2]=s
s=b.gu(b)
if(q>3)r[3]=s},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.di.prototype={
N(a){return new A.di(new Int16Array(A.J(this.a)))},
gG(){return B.J},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r,q
A.a6(c)
s=this.a
r=s.length
if(b<r){q=B.b.i(c)
if(!(b>=0))return A.a(s,b)
s[b]=q}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:0},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.dj.prototype={
N(a){return new A.dj(new Int32Array(A.J(this.a)))},
gG(){return B.K},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r,q
A.a6(c)
s=this.a
r=s.length
if(b<r){q=B.b.i(c)
if(!(b>=0))return A.a(s,b)
s[b]=q}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:0},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){A.x(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.dk.prototype={
N(a){return new A.dk(new Int8Array(A.J(this.a)))},
gG(){return B.I},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r,q
A.a6(c)
s=this.a
r=s.length
if(b<r){q=B.b.i(c)
if(!(b>=0))return A.a(s,b)
s[b]=q}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:0},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.dl.prototype={
N(a){var s=this.b
s===$&&A.c("data")
return new A.dl(this.a,s)},
gG(){return B.v},
gP(){return null},
c7(a){var s
if(a<this.a){s=this.b
s===$&&A.c("data")
s=B.a.Z(s,7-a)&1}else s=0
return s},
cp(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.c("data")
this.b=b!==0?(s|B.a.W(1,a))>>>0:(s&~(B.a.W(1,a)&255))>>>0},
l(a,b){return this.c7(b)},
h(a,b,c){return this.cp(b,A.a6(c))},
gL(a){return this.c7(0)},
gq(a){return this.c7(0)},
gt(){return this.c7(1)},
gv(a){return this.c7(2)},
gu(a){return this.c7(3)},
gah(){return A.af(this)},
ae(a,b){this.a3(b.gq(b),b.gt(),b.gv(b),b.gu(b))},
a3(a,b,c,d){var s=this
s.cp(0,a)
s.cp(1,b)
s.cp(2,c)
s.cp(3,d)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1,
gn(a){return this.a}}
A.dm.prototype={
N(a){return new A.dm(new Uint16Array(A.J(this.a)))},
gG(){return B.y},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r,q
A.a6(c)
s=this.a
r=s.length
if(b<r){q=B.b.i(c)
if(!(b>=0))return A.a(s,b)
s[b]=q}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:0},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.dn.prototype={
N(a){var s=this.b
s===$&&A.c("data")
return new A.dn(this.a,s)},
gG(){return B.w},
gP(){return null},
c8(a){var s
if(a<this.a){s=this.b
s===$&&A.c("data")
s=B.a.Z(s,6-(a<<1>>>0))&3}else s=0
return s},
cq(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.b5,a)
s=B.b5[a]
r=B.b.i(b)
q=this.b
q===$&&A.c("data")
this.b=(q&s|B.a.W(r&3,6-(a<<1>>>0)))>>>0},
l(a,b){return this.c8(b)},
h(a,b,c){return this.cq(b,A.a6(c))},
gL(a){return this.c8(0)},
gq(a){return this.c8(0)},
gt(){return this.c8(1)},
gv(a){return this.c8(2)},
gu(a){return this.c8(3)},
gah(){return A.af(this)},
ae(a,b){this.a3(b.gq(b),b.gt(),b.gv(b),b.gu(b))},
a3(a,b,c,d){var s=this
s.cq(0,a)
s.cq(1,b)
s.cq(2,c)
s.cq(3,d)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1,
gn(a){return this.a}}
A.dp.prototype={
N(a){return new A.dp(new Uint32Array(A.J(this.a)))},
gG(){return B.F},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r,q
A.a6(c)
s=this.a
r=s.length
if(b<r){q=B.b.i(c)
if(!(b>=0))return A.a(s,b)
s[b]=q}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:0},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.dq.prototype={
N(a){return new A.dq(this.a,new Uint8Array(A.J(this.b)))},
gG(){return B.x},
gP(){return null},
c9(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.Z(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.Z(s[1],4-((a&1)<<2))&15}}return s},
cr(a,b){var s,r,q
if(a>=this.a)return
s=B.a.I(B.b.i(b),0,15)
if(a>1){a&=1
r=1}else r=0
if(a===0){q=this.b
if(!(r<q.length))return A.a(q,r)
q[r]=(q[r]&15|s<<4)>>>0}else if(a===1){q=this.b
if(!(r<q.length))return A.a(q,r)
q[r]=(q[r]&240|s)>>>0}},
l(a,b){return this.c9(b)},
h(a,b,c){return this.cr(b,A.a6(c))},
gL(a){return this.c9(0)},
gq(a){return this.c9(0)},
gt(){return this.c9(1)},
gv(a){return this.c9(2)},
gu(a){return this.c9(3)},
gah(){return A.af(this)},
ae(a,b){this.a3(b.gq(b),b.gt(),b.gv(b),b.gu(b))},
a3(a,b,c,d){var s=this
s.cr(0,a)
s.cr(1,b)
s.cr(2,c)
s.cr(3,d)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1,
gn(a){return this.a}}
A.bJ.prototype={
ht(a,b,c,d){var s=this.a,r=s.length
if(0>=r)return A.a(s,0)
s[0]=a
if(1>=r)return A.a(s,1)
s[1]=b
if(2>=r)return A.a(s,2)
s[2]=c
if(3>=r)return A.a(s,3)
s[3]=d},
N(a){return new A.bJ(new Uint8Array(A.J(this.a)))},
gG(){return B.e},
gn(a){return this.a.length},
gP(){return null},
l(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
h(a,b,c){var s,r,q
A.a6(c)
s=this.a
r=s.length
if(b<r){q=B.b.i(c)
if(!(b>=0))return A.a(s,b)
s[b]=q}},
gL(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(a){var s=this.a,r=s.length
if(r!==0){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
return s},
gt(){var s=this.a
return s.length>1?s[1]:0},
gv(a){var s=this.a
return s.length>2?s[2]:0},
gu(a){var s=this.a
return s.length>3?s[3]:255},
gah(){return A.af(this)},
ae(a,b){var s=b.gq(b),r=this.a,q=r.length
if(q!==0){s=B.b.i(s)
if(0>=q)return A.a(r,0)
r[0]=s}s=b.gt()
if(q>1)r[1]=B.b.i(s)
s=b.gv(b)
if(q>2)r[2]=B.b.i(s)
s=b.gu(b)
if(q>3)r[3]=B.b.i(s)},
gF(a){return new A.Y(this)},
R(a,b){if(b==null)return!1
return t.G.b(b)&&b.gn(b)===this.a.length&&b.gE(b)===A.r(A.B(this,!0,A.o(this).m("e.E")))},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iG:1}
A.fY.prototype={}
A.eh.prototype={}
A.aB.prototype={
aj(){return"Format."+this.b}}
A.fU.prototype={
aj(){return"BlendMode."+this.b}}
A.du.prototype={
cW(a){var s=$.o2()
if(!s.aI(0,a))return"<unknown>"
return s.l(0,a).a},
A(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=A.eM(s,s.r,A.o(s).c),q=t.p,p=t.r,o=t.N,n=t.a,m="";r.C();){l=r.d
m+=l+"\n"
k=s.l(0,l)
for(l=k.a,j=new A.aY(l,l.r,A.o(l).m("aY<1>")),j.c=l.e;j.C();){l=j.d
i=k.l(0,l)
m=i==null?m+("\t"+e.cW(l)+"\n"):m+("\t"+e.cW(l)+": "+i.A(0)+"\n")}for(l=k.b.a,j=new A.aY(l,l.r,A.o(l).m("aY<1>")),j.c=l.e;j.C();){h=j.d
m+=h+"\n"
if(!l.aI(0,h))l.h(0,h,new A.bB(A.a_(q,p),new A.bN(A.a_(o,n))))
g=l.l(0,h)
for(h=g.a,f=new A.aY(h,h.r,A.o(h).m("aY<1>")),f.c=h.e;f.C();){h=f.d
i=g.l(0,h)
m=i==null?m+("\t"+e.cW(h)+"\n"):m+("\t"+e.cW(h)+": "+i.A(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
ci(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="Length must be a non-negative integer: ",a6=a8.e
a8.e=!0
s=a8.d
r=a8.p()
if(r===18761){a8.e=!1
if(a8.p()!==42){a8.e=a6
return!1}}else if(r===19789){a8.e=!0
if(a8.p()!==42){a8.e=a6
return!1}}else return!1
q=a8.k()
for(p=this.a,o=t.n0,n=t.p,m=t.r,l=t.N,k=t.a,j=0;q>0;){a8.d=s+q
i=new A.bB(A.a_(n,m),new A.bN(A.a_(l,k)))
h=a8.p()
g=A.b(new Array(h),o)
for(f=0;f<h;++f)g[f]=this.fb(a8,s)
for(e=g.length,d=0;d<g.length;g.length===e||(0,A.an)(g),++d){c=g[d]
b=c.b
if(b!=null)i.h(0,c.a,b)}p.h(0,"ifd"+j,i);++j
q=a8.k()}for(p=p.gbD(p),e=A.o(p),e=e.m("@<1>").au(e.z[1]),p=new A.cL(J.bx(p.a),p.b,e.m("cL<1,2>")),e=e.z[1];p.C();){b=p.a
if(b==null)b=e.a(b)
for(a=B.ax.gbk(B.ax),a=a.gF(a),a0=b.a,a1=b.b.a;a.C();){a2=a.gJ(a)
if(a0.aI(0,a2)){a8.d=s+b.l(0,a2).i(0)
i=new A.bB(A.a_(n,m),new A.bN(A.a_(l,k)))
h=a8.p()
g=A.b(new Array(h),o)
for(f=0;f<h;++f)g[f]=this.fb(a8,s)
for(a3=g.length,d=0;d<g.length;g.length===a3||(0,A.an)(g),++d){c=g[d]
a4=c.b
if(a4!=null)i.h(0,c.a,a4)}a2=B.ax.l(0,a2)
a2.toString
a1.h(0,a2,i)}}}a8.e=a6
return!1},
fb(a,b){var s,r,q,p,o=a.p(),n=a.p(),m=a.k(),l=new A.j9(o,null)
if(n>13)return l
if(!(n<13))return A.a(B.a0,n)
s=B.a0[n]
r=m*B.a3[n]
q=a.d
if((r>4?a.d=a.k()+b:q)+r>a.c)return l
p=a.ab(r)
switch(s.a){case 0:break
case 6:l.b=new A.cf(new Int8Array(A.J(A.oN(p.a_().buffer,0,m))))
break
case 1:l.b=new A.bM(new Uint8Array(A.J(p.ab(m).a_())))
break
case 7:l.b=new A.dC(new Uint8Array(A.J(p.ab(m).a_())))
break
case 2:l.b=new A.cC(m===0?"":p.ac(m-1))
break
case 3:l.b=A.ow(p,m)
break
case 4:l.b=A.or(p,m)
break
case 5:l.b=A.os(p,m)
break
case 10:l.b=A.ou(p,m)
break
case 8:l.b=A.ov(p,m)
break
case 9:l.b=A.ot(p,m)
break
case 11:l.b=A.ox(p,m)
break
case 12:l.b=A.oq(p,m)
break}a.d=q+4
return l}}
A.j9.prototype={}
A.hb.prototype={}
A.bN.prototype={
hz(a){a.a.ag(0,new A.kr(this))},
l(a,b){var s=this.a
if(!s.aI(0,b))s.h(0,b,new A.bB(A.a_(t.p,t.r),new A.bN(A.a_(t.N,t.a))))
s=s.l(0,b)
s.toString
return s}}
A.kr.prototype={
$2(a,b){var s
A.ax(a)
s=A.op(t.a.a(b))
this.a.a.h(0,a,s)
return s},
$S:16}
A.bB.prototype={
kG(a){a.a.ag(0,new A.ks(this))
a.b.a.ag(0,new A.kt(this))},
l(a,b){var s=this.a.l(0,b)
return s},
h(a,b,c){this.a.h(0,b,c)},
gc2(a){var s=this.a.l(0,274)
return s==null?null:J.n0(s)},
sc2(a,b){this.a.cj(0,274)}}
A.ks.prototype={
$2(a,b){var s
A.x(a)
s=t.r.a(b).N(0)
this.a.a.h(0,a,s)
return s},
$S:24}
A.kt.prototype={
$2(a,b){var s
A.ax(a)
s=A.op(t.a.a(b))
this.a.b.a.h(0,a,s)
return s},
$S:16}
A.aw.prototype={
aj(){return"IfdValueType."+this.b}}
A.aj.prototype={
ad(a,b){return 0},
i(a){return this.ad(a,0)},
bv(){return new Uint8Array(0)},
A(a){return""},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.aj&&s.gb7(s)===b.gb7(b)&&s.gn(s)===b.gn(b)&&s.gE(s)===b.gE(b)},
gE(a){return 0}}
A.bM.prototype={
N(a){return new A.bM(new Uint8Array(A.J(this.a)))},
gb7(a){return B.aQ},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bM){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gE(a){return A.r(this.a)},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bv(){return this.a},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.D(s)
return s}}
A.cC.prototype={
N(a){return new A.cC(this.a)},
gb7(a){return B.i},
gn(a){return this.a.length+1},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cC){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.l.gE(s)===B.l.gE(r)}else s=!1
return s},
gE(a){return B.l.gE(this.a)},
bv(){return new Uint8Array(A.J(new A.bh(this.a)))},
A(a){return this.a}}
A.cI.prototype={
hE(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.p()
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
N(a){return new A.cI(new Uint16Array(A.J(this.a)))},
gb7(a){return B.f},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cI){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bv(){return A.Q(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.D(s)
return s}}
A.cD.prototype={
hB(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.k()
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
N(a){return new A.cD(new Uint32Array(A.J(this.a)))},
gb7(a){return B.n},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cD){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bv(){return A.Q(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.D(s)
return s}}
A.cE.prototype={
N(a){return new A.cE(A.hR(this.a,!0,t.i))},
gb7(a){return B.p},
gn(a){return this.a.length},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return J.n0(s[b])},
i(a){return this.ad(a,0)},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cE){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.D(s[0])}else s=A.D(s)
return s}}
A.cf.prototype={
N(a){return new A.cf(new Int8Array(A.J(this.a)))},
gb7(a){return B.aU},
gn(a){return this.a.length},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cf){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gE(a){return A.r(this.a)},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bv(){return A.Q(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.D(s)
return s}}
A.cH.prototype={
hD(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.p()
$.aO()[0]=q
q=$.aV()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
N(a){return new A.cH(new Int16Array(A.J(this.a)))},
gb7(a){return B.aV},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cH){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bv(){return A.Q(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.D(s)
return s}}
A.cF.prototype={
hC(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.k()
$.X()[0]=q
q=$.ao()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
N(a){return new A.cF(new Int32Array(A.J(this.a)))},
gb7(a){return B.aW},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cF){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return s[b]},
i(a){return this.ad(a,0)},
bv(){return A.Q(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.D(s)
return s}}
A.cG.prototype={
N(a){return new A.cG(A.hR(this.a,!0,t.i))},
gb7(a){return B.aR},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cG){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
ad(a,b){var s=this.a
if(!(b<s.length))return A.a(s,b)
return J.n0(s[b])},
i(a){return this.ad(a,0)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.D(s[0])}else s=A.D(s)
return s}}
A.dB.prototype={
hF(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.k()
$.X()[0]=q
q=$.c8()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
N(a){return new A.dB(new Float32Array(A.J(this.a)))},
gb7(a){return B.aS},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.dB){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
bv(){return A.Q(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.D(s[0])}else s=A.D(s)
return s}}
A.dA.prototype={
hA(a,b){var s,r,q
for(s=this.a,r=0;r<b;++r){q=a.k()
$.X()[0]=q
q=$.c8()
if(0>=q.length)return A.a(q,0)
q=q[0]
if(!(r<s.length))return A.a(s,r)
s[r]=q}},
N(a){return new A.dA(new Float64Array(A.J(this.a)))},
gb7(a){return B.aT},
gn(a){return this.a.length},
R(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.dA){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.r(s)===A.r(q)}else s=!1
return s},
gE(a){return A.r(this.a)},
bv(){return A.Q(this.a.buffer,0,null)},
A(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.D(s[0])}else s=A.D(s)
return s}}
A.dC.prototype={
N(a){return new A.dC(new Uint8Array(A.J(this.a)))},
gb7(a){return B.L},
gn(a){return this.a.length},
bv(){return this.a},
R(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dC){s=this.a
r=b.a
s=s.length===r.length&&A.r(s)===A.r(r)}else s=!1
return s},
gE(a){return A.r(this.a)},
A(a){return"<data>"}}
A.ar.prototype={
aj(){return"BmpCompression."+this.b}}
A.kb.prototype={}
A.bI.prototype={
ej(a,b){var s,r,q,p,o,n,m,l=this,k=l.d,j=k<=40
if(j){s=l.r
s=s===B.ai||s===B.aj}else s=!0
if(s){s=l.as=a.k()
r=A.mN(s)
l.CW=r
q=B.a.Z(s,r)
s=q>0
l.cx=s?255/q:0
r=l.at=a.k()
p=A.mN(r)
l.cy=p
o=B.a.Z(r,p)
l.db=s?255/o:0
r=l.ax=a.k()
p=A.mN(r)
l.dx=p
n=B.a.Z(r,p)
l.dy=s?255/n:0
if(!j||l.r===B.aj){j=l.ay=a.k()
s=A.mN(j)
l.fr=s
m=B.a.Z(j,s)
l.fx=m>0?255/m:0}else if(l.f===16){l.ay=4278190080
l.fr=24
l.fx=1}else{l.ay=4278190080
l.fr=24
l.fx=1}}else if(l.f===16){l.as=31744
l.CW=10
l.cx=8.225806451612904
l.at=992
l.cy=5
l.db=8.225806451612904
l.ax=31
l.dx=0
l.dy=8.225806451612904
l.fx=l.fr=l.ay=0}else{l.as=16711680
l.CW=16
l.cx=1
l.at=65280
l.cy=8
l.db=1
l.ax=255
l.dx=0
l.dy=1
l.ay=4278190080
l.fr=24
l.fx=1}j=a.d
a.d=j+(k-(j-l.fy))
if(l.f<=8)l.lj(a)},
gcH(){var s=this.d
if(s!==40)if(s===124){s=this.ay
s===$&&A.c("alphaMask")
s=s===0}else s=!1
else s=!0
return s},
gM(a){return Math.abs(this.c)},
lj(a){var s,r,q,p,o,n,m,l=this,k=l.z
if(k===0)k=B.a.O(1,l.f)
l.ch=new A.b9(new Uint8Array(k*3),k,3)
for(s=0;s<k;++s){r=a.a
q=a.d
p=a.d=q+1
o=r.length
if(!(q>=0&&q<o))return A.a(r,q)
q=r[q]
n=a.d=p+1
if(!(p>=0&&p<o))return A.a(r,p)
p=r[p]
m=a.d=n+1
if(!(n>=0&&n<o))return A.a(r,n)
n=r[n]
a.d=m+1
if(!(m>=0&&m<o))return A.a(r,m)
m=r[m]
l.ch.cX(s,n,p,q,m)}},
kO(a2,a3){var s,r,q,p,o,n,m,l,k,j=this,i="_redShift",h="_redScale",g="greenMask",f="_greenShift",e="_greenScale",d="blueMask",c="_blueShift",b="_blueScale",a="alphaMask",a0="_alphaShift",a1="_alphaScale"
t.jO.a(a3)
if(j.ch!=null){s=j.f
if(s===1){r=a2.B()
for(q=7;q>=0;--q)a3.$4(B.a.aO(r,q)&1,0,0,0)
return}else if(s===2){r=a2.B()
for(q=6;q>=0;q-=2)a3.$4(B.a.aO(r,q)&2,0,0,0)}else if(s===4){r=a2.B()
a3.$4(B.a.j(r,4)&15,0,0,0)
a3.$4(r&15,0,0,0)
return}else if(s===8){a3.$4(a2.B(),0,0,0)
return}}s=j.r
if(s===B.ai&&j.f===32){p=a2.k()
s=j.as
s===$&&A.c("redMask")
o=j.CW
o===$&&A.c(i)
o=B.a.Z((p&s)>>>0,o)
s=j.cx
s===$&&A.c(h)
n=B.b.i(o*s)
s=j.at
s===$&&A.c(g)
o=j.cy
o===$&&A.c(f)
o=B.a.Z((p&s)>>>0,o)
s=j.db
s===$&&A.c(e)
m=B.b.i(o*s)
s=j.ax
s===$&&A.c(d)
o=j.dx
o===$&&A.c(c)
o=B.a.Z((p&s)>>>0,o)
s=j.dy
s===$&&A.c(b)
l=B.b.i(o*s)
if(j.gcH())k=255
else{s=j.ay
s===$&&A.c(a)
o=j.fr
o===$&&A.c(a0)
o=B.a.Z((p&s)>>>0,o)
s=j.fx
s===$&&A.c(a1)
k=B.b.i(o*s)}return a3.$4(n,m,l,k)}else{o=j.f
if(o===32&&s===B.aF){l=a2.B()
m=a2.B()
n=a2.B()
k=a2.B()
return a3.$4(n,m,l,j.gcH()?255:k)}else if(o===24){l=a2.B()
m=a2.B()
return a3.$4(a2.B(),m,l,255)}else if(o===16){p=a2.p()
s=j.as
s===$&&A.c("redMask")
o=j.CW
o===$&&A.c(i)
o=B.a.Z((p&s)>>>0,o)
s=j.cx
s===$&&A.c(h)
n=B.b.i(o*s)
s=j.at
s===$&&A.c(g)
o=j.cy
o===$&&A.c(f)
o=B.a.Z((p&s)>>>0,o)
s=j.db
s===$&&A.c(e)
m=B.b.i(o*s)
s=j.ax
s===$&&A.c(d)
o=j.dx
o===$&&A.c(c)
o=B.a.Z((p&s)>>>0,o)
s=j.dy
s===$&&A.c(b)
l=B.b.i(o*s)
if(j.gcH())k=255
else{s=j.ay
s===$&&A.c(a)
o=j.fr
o===$&&A.c(a0)
o=B.a.Z((p&s)>>>0,o)
s=j.fx
s===$&&A.c(a1)
k=B.b.i(o*s)}return a3.$4(n,m,l,k)}else throw A.f(A.q("Unsupported bitsPerPixel ("+o+") or compression ("+s.A(0)+")."))}},
$ia3:1}
A.fV.prototype={
bb(a){var s,r=null
if(!A.n2(A.C(a,!1,r,0)))return r
s=A.C(a,!1,r,0)
this.a=s
return this.b=A.qA(s,r)},
ap(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.b
if(a0==null)return new A.bO(a,a,a,a,0,B.h,0,0)
s=b.a
s===$&&A.c("_input")
r=a0.a.b
r===$&&A.c("imageOffset")
s.d=r
q=a0.f
r=a0.b
p=B.a.U(r*q+31,32)*4
s=b.c
if(s)o=4
else if(q===1||q===4||q===8)o=1
else{n=q===32?4:3
o=n}if(s)m=B.e
else if(q===1)m=B.v
else{if(q===2)n=B.w
else if(q===4)n=B.x
else{if(q!==8)if(q!==16)q!==24
n=B.e}m=n}l=s?a:a0.ch
k=A.a5(a,a,m,0,B.h,a0.gM(a0),a,0,o,l,r,!1)
for(j=k.gM(k)-1,s=a0.c,r=1/s<0,n=s<0,s=s===0;j>=0;--j){i={}
if(!(s?r:n))h=j
else{g=k.a
g=g==null?a:g.b
h=(g==null?0:g)-1-j}g=b.a
f=g.af(p)
g.d=g.d+(f.c-f.d)
g=k.a
e=g==null
d=e?a:g.a
if(d==null)d=0
i.a=0
c=e?a:g.K(0,h,a)
if(c==null)c=new A.R()
for(;i.a<d;)a0.kO(f,new A.ka(i,b,d,a0,c))}return k},
b3(a,b,c){if(this.bb(b)==null)return null
return this.ap(0)}}
A.ka.prototype={
$4(a,b,c,d){var s,r,q=this,p=q.a
if(p.a<q.c){s=q.b.c&&q.d.ch!=null
r=q.e
if(s){s=q.d
r.a3(s.ch.aX(a),s.ch.aW(a),s.ch.aV(a),s.ch.br(a))}else r.a3(a,b,c,d)
r.C();++p.a}},
$S:26}
A.kg.prototype={}
A.ke.prototype={}
A.kh.prototype={}
A.hc.prototype={}
A.eG.prototype={
cL(){return this.w},
bq(a,b,c,d,e){throw A.f(A.q("B44 compression not yet supported."))},
ck(a,b,c){return this.bq(a,b,c,null,null)},
A(a){return A.D(this.r)+" "+this.x}}
A.dv.prototype={
aj(){return"ExrChannelType."+this.b}}
A.cx.prototype={
aj(){return"ExrChannelName."+this.b}}
A.hd.prototype={
gkI(){var s=this.c
s===$&&A.c("dataType")
return s},
hu(a){var s=this,r=a.cN()
s.a=r
if(r.length===0)return
r=a.k()
if(!(r<3))return A.a(B.bs,r)
s.c=B.bs[r]
a.B()
a.d+=3
s.f=a.k()
s.r=a.k()
r=s.a
if(r==="R"){s.w=!0
s.b=B.cf}else if(r==="G"){s.w=!0
s.b=B.cg}else if(r==="B"){s.w=!0
s.b=B.ch}else if(r==="A"){s.w=!0
s.b=B.ci}else{s.w=!1
s.b=B.cj}switch(s.c.a){case 0:s.d=4
break
case 1:s.d=2
break
case 2:s.d=4
break
default:throw A.f(A.q("EXR Invalid pixel type: "+s.gkI().A(0)))}}}
A.bj.prototype={
aj(){return"ExrCompressorType."+this.b}}
A.bL.prototype={
bq(a,b,c,d,e){throw A.f(A.q("Unsupported compression type"))},
ck(a,b,c){return this.bq(a,b,c,null,null)}}
A.hv.prototype={}
A.he.prototype={
sfU(a){this.c=t.T.a(a)}}
A.hf.prototype={
hv(a){var s,r,q,p,o=this,n=A.C(a,!1,null,0)
if(n.k()!==20000630)throw A.f(A.q("File is not an OpenEXR image file."))
s=o.d=n.B()
if(s!==2)throw A.f(A.q("Cannot read version "+s+" image files."))
s=o.e=n.bo()
if((s&4294967289)>>>0!==0)throw A.f(A.q("The file format version number's flag field contains unrecognized flags."))
if((s&16)===0){r=o.c
q=A.oA(r.length,(s&2)!==0,n)
if(q.w>0)B.c.H(r,q)}else for(s=o.c;!0;){q=A.oA(s.length,(o.e&2)!==0,n)
if(q.w<=0)break
B.c.H(s,q)}s=o.c
r=s.length
if(r===0)throw A.f(A.q("Error reading image header"))
for(p=0;p<s.length;s.length===r||(0,A.an)(s),++p)s[p].li(n)
o.k5(n)},
k5(a){var s,r,q,p,o=this
for(s=o.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.an)(s),++q){p=s[q]
o.sX(0,Math.max(o.a,p.w))
o.sM(0,Math.max(o.b,p.x))
if(p.db)o.ke(p,a)
else o.kd(p,a)}},
ke(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=this.e
b4===$&&A.c("flags")
s=(b4&16)!==0
b4=b5.b
b4.toString
r=b5.CW
q=b5.ay
p=A.u(b6,b3,0)
o=b5.c
n=b5.a
m=0
l=0
while(!0){k=b5.k1
k.toString
if(!(m<k))break
j=0
while(!0){k=b5.id
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
while(!0){g=b5.go
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
while(!0){g=b5.fy
if(!(j<g.length))return A.a(g,j)
if(!(f<g[j]))break
if(k)break
if(!(l>=0&&l<q.length))return A.a(q,l)
g=q[l]
if(!(h>=0&&h<g.length))return A.a(g,h)
p.d=g[h]
if(s)if(p.k()!==n)throw A.f(A.q("Invalid Image Data"))
e=p.k()
d=p.k()
p.k()
p.k()
c=p.af(p.k())
p.d=p.d+(c.c-c.d)
g=b5.dy
g.toString
b=d*g
a=b5.dx
a.toString
g=r.bq(c,e*a,b,a,g)
a=g.length
a0=new A.as(g,0,a,0,!1)
a1=r.a
a2=r.b
a3=a-0
a4=o.length
a5=0
a6=0
while(!0){if(!(a6<a2&&b<this.b))break
for(a7=0;a7<a4;++a7){if(a5>=a3)break
if(!(a7<o.length))return A.a(o,a7)
a8=o[a7]
g=b5.dx
g.toString
a9=e*g
for(b0=0;b0<a1;++b0,++a9){g=a8.c
g===$&&A.c("dataType")
switch(g.a){case 1:g=a0.p()
a=$.Z
a=a!=null?a:A.a4()
if(!(g<a.length))return A.a(a,g)
b1=a[g]
break
case 2:b1=a0.p()
break
case 0:b1=a0.k()
break
default:b1=b3}g=a8.d
g===$&&A.c("dataSize")
a5+=g
g=a8.w
g===$&&A.c("isColorChannel")
if(g){g=b4.a
b2=g==null?b3:g.K(a9,b,b3)
if(b2==null)b2=new A.R()
g=a8.b
g===$&&A.c("nameType")
b2.h(0,g.a,b1)}else{g=a8.a
g===$&&A.c("name")
a=b4.b
g=a!=null?a.l(0,g):b3
if(g!=null)g.S(a9,b,b1,0,0)}}}++a6;++b}++f;++h}++i}++j;++l}++m}},
kd(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6=this.e
a6===$&&A.c("flags")
s=(a6&16)!==0
a6=a7.b
a6.toString
r=a7.CW
q=a7.ay
if(0>=q.length)return A.a(q,0)
p=q[0]
o=a7.cx
n=A.u(a8,a5,0)
for(q=p.length,m=a7.c,l=r!=null,k=0,j=0;j<q;++j){n.d=p[j]
if(s)if(n.k()!==3.141592653589793)throw A.f(A.q("Invalid Image Data"))
i=n.k()
h=$.X()
h[0]=i
i=$.ao()
if(0>=i.length)return A.a(i,0)
h[0]=n.k()
if(0>=i.length)return A.a(i,0)
g=n.af(i[0])
n.d=n.d+(g.c-g.d)
if(l){i=r.ck(g,0,k)
f=new A.as(i,0,i.length,0,!1)}else f=g
e=f.c-f.d
d=m.length
c=0
while(!0){if(!(c<o&&k<this.b))break
i=a7.cy
if(!(k>=0&&k<i.length))return A.a(i,k)
b=i[k]
if(b>=e)break
for(a=0;a<d;++a){if(b>=e)break
if(!(a<m.length))return A.a(m,a)
a0=m[a]
a1=a7.w
for(a2=0;a2<a1;++a2){i=a0.c
i===$&&A.c("dataType")
switch(i.a){case 1:i=f.p()
h=$.Z
h=h!=null?h:A.a4()
if(!(i<h.length))return A.a(h,i)
a3=h[i]
break
case 2:a3=f.p()
break
case 0:a3=f.k()
break
default:a3=a5}i=a0.d
i===$&&A.c("dataSize")
b+=i
i=a0.w
i===$&&A.c("isColorChannel")
if(i){i=a6.a
a4=i==null?a5:i.K(a2,k,a5)
if(a4==null)a4=new A.R()
i=a0.b
i===$&&A.c("nameType")
a4.h(0,i.a,a3)}else{i=a0.a
i===$&&A.c("name")
h=a6.b
i=h!=null?h.l(0,i):a5
if(i!=null)i.S(a2,k,a3,0,0)}}}++c;++k}}},
sX(a,b){this.a=A.x(b)},
sM(a,b){this.b=A.x(b)},
$ia3:1}
A.er.prototype={
hw(a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4="dataType",a5="dataWindow",a6=A.a_(t.N,t.X)
for(s=a2.e,r=t.t,q=t.L,p=a2.c,o=B.A;!0;){n=a9.cN()
if(n.length===0)break
a9.cN()
m=a9.af(a9.k())
a9.d=a9.d+(m.c-m.d)
s.h(0,n,new A.hc())
switch(n){case"channels":for(;!0;){l=new A.hd()
l.hu(m)
k=l.a
k===$&&A.c("name")
if(k.length===0)break
j=l.w
j===$&&A.c("isColorChannel")
if(j){++a2.d
k=l.c
k===$&&A.c(a4)
if(k===B.ak)o=B.A
else o=k===B.al?B.E:B.F}else{j=l.c
j===$&&A.c(a4)
if(j===B.ak){j=a2.w
i=a2.x
a6.h(0,k,new A.dE(new Uint16Array(j*i),j,i,1))}else if(j===B.al){j=a2.w
i=a2.x
a6.h(0,k,new A.dF(new Float32Array(j*i),j,i,1))}else if(j===B.aN){j=a2.w
i=a2.x
a6.h(0,k,new A.dI(new Uint32Array(j*i),j,i,1))}}B.c.H(p,l)}break
case"chromaticities":k=new Float32Array(8)
a2.at=k
j=m.k()
i=$.X()
i[0]=j
j=$.c8()
if(0>=j.length)return A.a(j,0)
k[0]=j[0]
k=a2.at
i[0]=m.k()
k[1]=j[0]
k=a2.at
i[0]=m.k()
k[2]=j[0]
k=a2.at
i[0]=m.k()
k[3]=j[0]
k=a2.at
i[0]=m.k()
k[4]=j[0]
k=a2.at
i[0]=m.k()
k[5]=j[0]
k=a2.at
i[0]=m.k()
k[6]=j[0]
k=a2.at
i[0]=m.k()
k[7]=j[0]
break
case"compression":k=m.a
j=m.d++
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
if(j>>>0!==j||j>=8)return A.a(B.bx,j)
a2.ax=B.bx[j]
break
case"dataWindow":k=m.k()
j=$.X()
j[0]=k
k=$.ao()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.k()
h=k[0]
j[0]=m.k()
g=k[0]
j[0]=m.k()
a2.shQ(q.a(A.b([i,h,g,k[0]],r)))
k=a2.r
k===$&&A.c(a5)
a2.w=k[2]-k[0]+1
a2.x=k[3]-k[1]+1
break
case"displayWindow":k=m.k()
j=$.X()
j[0]=k
k=$.ao()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.k()
h=k[0]
j[0]=m.k()
g=k[0]
j[0]=m.k()
a2.skQ(A.b([i,h,g,k[0]],r))
break
case"lineOrder":break
case"pixelAspectRatio":k=m.k()
$.X()[0]=k
k=$.c8()
if(0>=k.length)return A.a(k,0)
break
case"screenWindowCenter":k=m.k()
j=$.X()
j[0]=k
k=$.c8()
if(0>=k.length)return A.a(k,0)
j[0]=m.k()
break
case"screenWindowWidth":k=m.k()
$.X()[0]=k
k=$.c8()
if(0>=k.length)return A.a(k,0)
break
case"tiles":a2.dx=m.k()
a2.dy=m.k()
k=m.a
j=m.d++
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
a2.fr=j&15
a2.fx=B.a.j(j,4)&15
break
case"type":f=m.cN()
if(f!=="deepscanline")if(f!=="deeptile")throw A.f(A.q("EXR Invalid type: "+f))
break
default:break}}s=a2.w
a2.b=A.a5(a3,a3,o,0,B.h,a2.x,a3,0,a2.d,a3,s,!1)
for(s=A.eM(a6,a6.r,a6.$ti.c);s.C();){r=s.d
q=a2.b
q.toString
k=a6.l(0,r)
k.toString
q.hd(r,k)}if(a2.db){s=a2.r
s===$&&A.c(a5)
a2.id=a2.ik(s[0],s[2],s[1],s[3])
s=a2.r
a2.k1=a2.il(s[0],s[2],s[1],s[3])
if(a2.fr!==2)a2.k1=1
s=a2.id
s.toString
r=a2.r
a2.sjt(a2.eu(s,r[0],r[2],a2.dx,a2.fx))
r=a2.k1
r.toString
s=a2.r
a2.sju(a2.eu(r,s[1],s[3],a2.dy,a2.fx))
s=a2.ij()
a2.k2=s
r=a2.dx
r.toString
r=s*r
a2.k3=r
a2.CW=A.oi(a2.ax,a2,r,a2.dy)
b0.a=b0.b=0
r=a2.id
r.toString
s=a2.k1
s.toString
a2.sf6(A.nf(r*s,new A.kj(b0,a2),t.mC))}else{s=a2.x
r=a2.ch=new Uint32Array(s+1)
for(q=p.length,k=a2.r,j=a2.w,e=0;e<q;++e){d=p[e]
i=d.d
i===$&&A.c("dataSize")
h=d.f
h===$&&A.c("xSampling")
c=B.a.aA(i*j,h)
for(i=d.r,b=0;b<s;++b){k===$&&A.c(a5)
h=k[1]
i===$&&A.c("ySampling")
if(B.a.a2(b+h,i)===0)r[b]=r[b]+c}}for(a=0,b=0;b<s;++b)a=Math.max(a,r[b])
s=A.oi(a2.ax,a2,a,a3)
a2.CW=s
s=a2.cx=s.cL()
r=a2.ch
q=r.length
p=new Uint32Array(q)
a2.cy=p
for(--q,a0=0,a1=0;a1<=q;++a1){if(B.a.a2(a1,s)===0)a0=0
p[a1]=a0
a0+=r[a1]}s=B.a.aA(a2.x+s,s)
a2.sf6(A.b([new Uint32Array(s-1)],t.mD))}},
ik(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.x(r)
s=(q===0?o.d5(r):o.d1(r))+1
break
case 2:p=b-a+1
s=(o.fx===0?o.d5(p):o.d1(p))+1
break
default:throw A.f(A.q("Unknown LevelMode format."))}return s},
il(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.x(r)
s=(q===0?o.d5(r):o.d1(r))+1
break
case 2:p=d-c+1
s=(o.fx===0?o.d5(p):o.d1(p))+1
break
default:throw A.f(A.q("Unknown LevelMode format."))}return s},
d5(a){var s
for(s=0;a>1;){++s
a=B.a.j(a,1)}return s},
d1(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.j(a,1)}return s+r},
ij(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p].d
o===$&&A.c("dataSize")
q+=o}return q},
eu(a,b,c,d,e){var s,r,q,p,o,n,m=J.aD(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.O(1,q)
o=B.a.aA(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.aA(n+d-1,d)}return m},
skQ(a){t.T.a(a)},
shQ(a){this.r=t.L.a(a)},
sf6(a){this.ay=t.kX.a(a)},
sjt(a){this.fy=t.k.a(a)},
sju(a){this.go=t.k.a(a)}}
A.kj.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.fy,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.go
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.id){m.b=0
m.a=r+1}return q},
$S:27}
A.hw.prototype={
li(a){var s,r,q,p,o,n=this
if(n.db)for(s=0;s<n.ay.length;++s){r=0
while(!0){q=n.ay
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
q[r]=a.eb();++r}}else{q=n.ay
if(0>=q.length)return A.a(q,0)
p=q[0].length
for(s=0;s<p;++s){q=n.ay
if(0>=q.length)return A.a(q,0)
q=q[0]
o=a.eb()
if(!(s<q.length))return A.a(q,s)
q[s]=o}}}}
A.hx.prototype={
hI(a,b,c){var s,r,q,p=this,o=a.c.length,n=J.aD(o,t.nA)
for(s=0;s<o;++s)n[s]=new A.fv()
p.shR(t.a3.a(n))
r=p.w
r.toString
q=B.a.U(r*p.x,2)
p.z=new Uint16Array(q)},
cL(){return this.x},
bq(a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="_channelData"
if(b0==null)b0=a5.c.w
if(b1==null)b1=a5.c.cx
s=a8+b0-1
r=a9+b1-1
q=a5.c
p=q.w
if(s>p)s=p-1
p=q.x
if(r>p)r=p-1
a5.a=s-a8+1
a5.b=r-a9+1
o=q.c
n=o.length
for(m=0,l=0;l<n;++l){k=o[l]
q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
j.b=j.a=m
q=k.f
q===$&&A.c("xSampling")
i=B.a.aA(a8,q)
h=B.a.aA(s,q)
q=i*q<a8?0:1
q=h-i+q
j.c=q
p=k.r
p===$&&A.c("ySampling")
i=B.a.aA(a9,p)
h=B.a.aA(r,p)
g=i*p<a9?0:1
g=h-i+g
j.d=g
j.e=p
p=k.d
p===$&&A.c("dataSize")
p=p/2|0
j.f=p
m+=q*g*p}f=a7.p()
e=a7.p()
if(e>=8192)throw A.f(A.q("Error in header for PIZ-compressed data (invalid bitmap size)."))
d=new Uint8Array(8192)
if(f<=e){c=a7.ab(e-f+1)
q=c.d
b=c.c-q
for(p=c.a,g=p.length,a=f,l=0;l<b;++l,a=a0){a0=a+1
a1=q+l
if(!(a1>=0&&a1<g))return A.a(p,a1)
a1=p[a1]
if(!(a<8192))return A.a(d,a)
d[a]=a1}}a2=new Uint16Array(65536)
a3=a5.ki(d,a2)
A.qT(a7,a7.k(),a5.z,m)
for(l=0;l<n;++l){q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
a=0
while(!0){q=j.f
q===$&&A.c("size")
if(!(a<q))break
p=a5.z
p.toString
g=j.a
g===$&&A.c("start")
a1=j.c
a1===$&&A.c("nx")
a4=j.d
a4===$&&A.c("ny")
A.qW(p,g+a,a1,q,a4,a1*q,a3);++a}}q=a5.z
q.toString
a5.ia(a2,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.bo(!1,q*a5.x+73728)}q.a=0
for(;a9<=r;++a9)for(l=0;l<n;++l){q=a5.y
q===$&&A.c(a6)
if(!(l<q.length))return A.a(q,l)
j=q[l]
q=j.e
q===$&&A.c("ys")
if(B.a.a2(a9,q)!==0)continue
q=j.c
q===$&&A.c("nx")
p=j.f
p===$&&A.c("size")
a8=q*p
for(;a8>0;--a8){q=a5.r
q.toString
p=a5.z
p.toString
g=j.b
g===$&&A.c("end")
j.b=g+1
if(!(g>=0&&g<p.length))return A.a(p,g)
q.dt(p[g])}}q=a5.r
return A.Q(q.c.buffer,0,q.a)},
ck(a,b,c){return this.bq(a,b,c,null,null)},
ia(a,b,c){var s,r,q=t.L
q.a(a)
q.a(b)
for(q=b.length,s=0;s<c;++s){if(!(s<q))return A.a(b,s)
r=b[s]
if(!(r>=0&&r<65536))return A.a(a,r)
b[s]=a[r]}},
ki(a,b){var s,r,q,p,o
for(s=0,r=0;r<65536;++r){if(r!==0){q=r>>>3
if(!(q<8192))return A.a(a,q)
q=(a[q]&1<<(r&7))>>>0!==0}else q=!0
if(q){p=s+1
if(!(s<65536))return A.a(b,s)
b[s]=r
s=p}}for(p=s;p<65536;p=o){o=p+1
if(!(p<65536))return A.a(b,p)
b[p]=0}return s-1},
shR(a){this.y=t.a3.a(a)}}
A.fv.prototype={}
A.hy.prototype={
cL(){return this.x},
bq(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.R.cF(A.cJ(t.L.a(a4.a_()),1,null,0),!1),a3=a1.y
if(a3==null){a3=a1.w
a3.toString
a3=a1.y=A.bo(!1,a1.x*a3)}a3.a=0
s=A.b([0,0,0,0],t.t)
r=new Uint32Array(1)
q=A.Q(r.buffer,0,null)
if(a7==null)a7=a1.c.w
if(a8==null)a8=a1.c.cx
p=a5+a7-1
o=a6+a8-1
a3=a1.c
n=a3.w
if(p>n)p=n-1
n=a3.x
if(o>n)o=n-1
a1.a=p-a5+1
a1.b=o-a6+1
a3=a3.c
m=a3.length
for(n=q.length,l=a2.length,k=a6,j=0;k<=o;++k)for(i=0;i<m;++i){if(!(i<a3.length))return A.a(a3,i)
h=a3[i]
g=h.r
g===$&&A.c("ySampling")
if(B.a.a2(a6,g)!==0)continue
g=h.f
g===$&&A.c("xSampling")
f=B.a.aA(a5,g)
e=B.a.aA(p,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(r,0)
r[0]=0
g=h.c
g===$&&A.c("dataType")
switch(g.a){case 0:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.V(q[a0])}}break
case 1:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
j=s[1]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
r[0]=r[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.V(q[a0])}}break
case 2:B.c.h(s,0,j)
B.c.h(s,1,s[0]+d)
B.c.h(s,2,s[1]+d)
j=s[2]+d
for(c=0;c<d;++c){g=s[0]
B.c.h(s,0,g+1)
if(!(g>=0&&g<l))return A.a(a2,g)
g=a2[g]
b=s[1]
B.c.h(s,1,b+1)
if(!(b>=0&&b<l))return A.a(a2,b)
b=a2[b]
a=s[2]
B.c.h(s,2,a+1)
if(!(a>=0&&a<l))return A.a(a2,a)
a=a2[a]
r[0]=r[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.y
g.toString
if(!(a0<n))return A.a(q,a0)
g.V(q[a0])}}break}}a3=a1.y
return A.Q(a3.c.buffer,0,a3.a)},
ck(a,b,c){return this.bq(a,b,c,null,null)}}
A.hz.prototype={
cL(){return 1},
bq(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.bo(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.w
if(a4==null)a4=c.c.cx
s=a1+a3-1
r=a2+a4-1
q=c.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
c.a=s-a1+1
c.b=r-a2+1
for(;q=a0.d,q<b;){p=a0.a
a0.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
$.aP()[0]=q
q=$.aW()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.V(q[p])}}else for(n=o;m=n-1,n>=0;n=m){q=a0.a
p=a0.d++
if(!(p>=0&&p<q.length))return A.a(q,p)
a.V(q[p])}}l=A.Q(a.c.buffer,0,a.a)
k=l.length
for(j=1;j<k;++j)l[j]=l[j-1]+l[j]-128
b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.U(k+1,2)
for(i=0,h=0;!0;q=d,i=f){if(h<k){b.toString
g=h+1
f=i+1
if(!(i<k))return A.a(l,i)
p=l[i]
e=b.length
if(!(h<e))return A.a(b,h)
b[h]=p}else break
if(g<k){h=g+1
d=q+1
if(!(q<k))return A.a(l,q)
q=l[q]
if(!(g<e))return A.a(b,g)
b[g]=q}else break}b.toString
return b},
ck(a,b,c){return this.bq(a,b,c,null,null)},
A(a){return A.D(this.w)}}
A.eH.prototype={
cL(){return this.x},
bq(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=B.R.cF(A.cJ(t.L.a(a.a_()),1,null,0),!1)
if(d==null)d=f.c.w
if(a0==null)a0=f.c.cx
s=b+d-1
r=c+a0-1
q=f.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
f.a=s-b+1
f.b=r-c+1
o=e.length
for(n=1;n<o;++n)e[n]=e[n-1]+e[n]-128
q=f.y
if(q==null||q.length!==o)q=f.y=new Uint8Array(o)
p=B.a.U(o+1,2)
for(m=0,l=0;!0;p=g,m=j){if(l<o){q.toString
k=l+1
j=m+1
if(!(m<o))return A.a(e,m)
i=e[m]
h=q.length
if(!(l<h))return A.a(q,l)
q[l]=i}else break
if(k<o){l=k+1
g=p+1
if(!(p<o))return A.a(e,p)
p=e[p]
if(!(k<h))return A.a(q,k)
q[k]=p}else break}q.toString
return q},
ck(a,b,c){return this.bq(a,b,c,null,null)},
A(a){return A.D(this.w)}}
A.ki.prototype={
ap(a){var s=this.a
if(s==null)return null
s=s.c
if(!(a<s.length))return A.a(s,a)
return s[a].b},
b3(a,b,c){var s=new A.hf(A.b([],t.lv))
s.hv(b)
this.a=s
return this.ap(0)}}
A.ev.prototype={
ee(){var s,r,q,p,o,n,m,l=this
if(l.c==null)return l.d
s=l.d
r=s.a
q=new A.b9(new Uint8Array(r*4),r,4)
for(p=0;p<r;++p){o=s.aX(p)
n=s.aW(p)
m=s.aV(p)
q.cX(p,o,n,m,p===l.c?0:255)}return q}}
A.ew.prototype={
hx(a){var s,r,q,p,o,n,m,l,k=this
k.a=a.p()
k.b=a.p()
k.c=a.p()
k.d=a.p()
s=a.B()
k.e=(s&64)!==0
if((s&128)!==0){k.f=A.ol(B.a.O(1,(s&7)+1))
for(r=0;q=k.f,r<q.b;++r){p=a.a
o=a.d
n=a.d=o+1
m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
l=a.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
a.d=l+1
if(!(l>=0&&l<m))return A.a(p,l)
l=p[l]
q.d.aY(r,o,n,l)}}k.x=a.d-a.b}}
A.hA.prototype={}
A.ex.prototype={$ia3:1}
A.kn.prototype={
bb(a){var s,r,q,p,o,n,m,l,k,j=this
j.f=A.C(a,!1,null,0)
j.a=new A.ex(A.b([],t.b))
if(!j.eO())return null
try{for(;p=j.f,o=p.d,o<p.c;){n=p.a
m=p.d=o+1
l=n.length
if(!(o>=0&&o<l))return A.a(n,o)
s=n[o]
switch(s){case 44:r=j.fj()
if(r==null){p=j.a
return p}p=r
p.r=j.e
p.w=j.c===2
if(j.b!==0){if(r.f==null&&j.a.e!=null){p=j.a.e
o=p.a
n=p.b
m=p.c
p=p.d
r.f=new A.ev(o,n,m,new A.b9(new Uint8Array(A.J(p.c)),p.a,p.b))}if(r.f!=null)r.f.c=j.d}B.c.H(j.a.r,r)
break
case 33:p.d=m+1
if(!(m>=0&&m<l))return A.a(n,m)
q=n[m]
if(J.bg(q,255)){p=j.f
o=p.a
n=p.d++
if(!(n>=0&&n<o.length))return A.a(o,n)
if(p.ac(o[n])==="NETSCAPE2.0"){o=p.a
n=p.d
m=p.d=n+1
l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
if(n===3&&m===1)j.r=p.p()}else j.dd()}else if(J.bg(q,249)){p=j.f
p.toString
j.jY(p)}else j.dd()
break
case 59:p=j.a
return p
default:break}}}catch(k){}return j.a},
jY(a){var s,r,q,p,o=this
a.B()
s=a.B()
o.e=a.p()
o.d=a.B()
a.B()
o.c=B.a.j(s,2)&7
o.b=s&1
r=a.cZ(1,0)
q=r.a
r=r.d
if(!(r>=0&&r<q.length))return A.a(q,r)
if(q[r]===44){++a.d
p=o.fj()
if(p==null)return
p.r=o.e
p.w=o.c===2
if(o.b!==0){r=p.f
if(r==null&&o.a.e!=null){r=o.a.e
r.toString
r=p.f=A.r2(r)}if(r!=null)r.c=o.d}B.c.H(o.a.r,p)}},
ap(a){var s,r,q,p=this,o=p.f
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
o.toString
s=q.x
s===$&&A.c("_inputPosition")
o.d=s
return p.iG(q)},
b3(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(c.bb(a0)==null)return b
if(c.a.r.length===1||!1)return c.ap(0)
for(s=b,r=s,q=0;p=c.a.r,q<p.length;++q){a1=p[q]
o=c.ap(q)
if(o==null)return b
o.y=a1.r*10
if(r==null||s==null){o.r=c.r
s=o
r=s
continue}p=o.a
n=p==null
m=n?b:p.a
if(m==null)m=0
l=s.a
k=l==null
j=k?b:l.a
if(m===(j==null?0:j)){p=n?b:p.b
if(p==null)p=0
n=k?b:l.b
if(p===(n==null?0:n)){p=a1.a
p===$&&A.c("x")
if(p===0){p=a1.b
p===$&&A.c("y")
p=p===0&&a1.w}else p=!1}else p=!1}else p=!1
if(p){r.aH(o)
s=o
continue}if(a1.w){i=a1.f
if(!(i!=null)){p=c.a.e
p.toString
i=p}p=k?b:l.a
if(p==null)p=0
n=k?b:l.b
if(n==null)n=0
s=A.a5(b,b,B.e,0,B.h,n,b,0,1,i.ee(),p,!1)
p=c.a.c.a
n=p.length
if(n!==0){if(0>=n)return A.a(p,0)
p=p[0]}else p=0
n=i.d
h=n.aX(p)
g=n.aW(p)
f=n.aV(p)
e=p===i.c?0:255
p=new Uint8Array(4)
if(0>=4)return A.a(p,0)
p[0]=h
if(1>=4)return A.a(p,1)
p[1]=g
if(2>=4)return A.a(p,2)
p[2]=f
if(3>=4)return A.a(p,3)
p[3]=e
n=s.a
if(n!=null)n.aG(0,new A.bJ(p))}else s=A.bl(s,!1,!1)
s.y=o.y
for(p=o.a,p=p.gF(p);p.C();){d=p.gJ(p)
if(d.gu(d)!==0){n=d.gaT(d)
m=a1.a
m===$&&A.c("x")
l=d.gaU(d)
k=a1.b
k===$&&A.c("y")
s.bO(n+m,l+k,d)}}r.aH(s)}return r},
fj(){var s,r=this.f
if(r.d>=r.c)return null
s=new A.hA()
s.hx(r);++this.f.d
this.dd()
return s},
iG(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(i.w==null){i.w=new Uint8Array(256)
i.x=new Uint8Array(4095)
i.y=new Uint8Array(4096)
i.z=new Uint32Array(4096)}s=i.Q=i.f.B()
r=B.a.W(1,s)
i.dy=r;++r
i.dx=r
i.db=r+1;++s
i.cy=s
i.cx=B.a.W(1,s)
i.ay=0
i.CW=4098
i.at=i.ax=0
i.w[0]=0
s=i.z
s.toString
B.Q.aL(s,0,4096,4098)
s=a.c
s===$&&A.c("width")
r=a.d
r===$&&A.c("height")
q=a.a
q===$&&A.c("x")
p=i.a
if(q+s<=p.a){q=a.b
q===$&&A.c("y")
q=q+r>p.b}else q=!0
if(q)return h
o=a.f
if(!(o!=null)){q=p.e
q.toString
o=q}i.as=s*r
n=A.a5(h,h,B.e,0,B.h,r,h,0,1,o.ee(),s,!1)
m=new Uint8Array(s)
s=a.e
s===$&&A.c("interlaced")
if(s){s=a.b
s===$&&A.c("y")
for(r=s+r,l=0,k=0;l<4;++l)for(j=s+B.cL[l];j<r;j+=B.dy[l],++k){if(!i.eP(m))return n
i.fp(n,j,o,m)}}else for(j=0;j<r;++j){if(!i.eP(m))return n
i.fp(n,j,o,m)}return n},
fp(a,b,c,d){var s,r,q,p=d.length
for(s=0;s<p;++s){r=d[s]
q=a.a
if(q!=null)q.S(s,b,r,0,0)}},
eO(){var s,r,q,p,o,n,m,l,k,j=this,i=j.f.ac(6)
if(i!=="GIF87a"&&i!=="GIF89a")return!1
s=j.a
s.toString
s.a=j.f.p()
s=j.a
s.toString
s.b=j.f.p()
r=j.f.B()
s=j.a
s.toString
s.c=new A.bJ(new Uint8Array(A.J(A.b([j.f.B()],t.t))));++j.f.d
if((r&128)!==0){s=j.a
s.toString
s.e=A.ol(B.a.O(1,(r&7)+1))
for(q=0;s=j.a.e,q<s.b;++q){p=j.f
o=p.a
n=p.d
m=p.d=n+1
l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
k=p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
p.d=k+1
if(!(k>=0&&k<l))return A.a(o,k)
k=o[k]
s.d.aY(q,n,m,k)}}j.a.toString
return!0},
eP(a){var s=this,r=s.as
r.toString
s.as=r-a.length
if(!s.iR(a))return!1
if(s.as===0)s.dd()
return!0},
dd(){var s,r,q,p=this.f
if(p.d>=p.c)return!0
s=p.B()
while(!0){if(s!==0){p=this.f
p=p.d<p.c}else p=!1
if(!p)break
p=this.f
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
s=q[r]}return!0},
iR(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_stack",f="_suffix",e=h.ay
if(e>4095)return!1
s=a.length
if(e!==0){r=0
while(!0){if(!(e!==0&&r<s))break
q=r+1
p=h.x
p===$&&A.c(g)
e=h.ay=e-1
if(!(e>=0))return A.a(p,e)
p=p[e]
if(!(r<s))return A.a(a,r)
a[r]=p
r=q}}else r=0
for(;r<s;){o=h.ch=h.iQ()
if(o==null)return!1
e=h.dx
if(o===e)return!1
p=h.dy
if(o===p){for(p=h.z,n=0;n<=4095;++n)p[n]=4098
h.db=e+1
e=h.Q+1
h.cy=e
h.cx=B.a.W(1,e)
h.CW=4098}else{if(o<p){q=r+1
if(!(r>=0))return A.a(a,r)
a[r]=o
r=q}else{e=h.z
e.toString
if(o>>>0!==o||o>=4096)return A.a(e,o)
if(e[o]===4098){m=h.db-2
if(o===m){o=h.CW
l=h.y
l===$&&A.c(f)
k=h.x
k===$&&A.c(g)
j=h.ay++
p=h.dS(e,o,p)
if(!(j>=0&&j<4095))return A.a(k,j)
k[j]=p
if(!(m>=0&&m<4096))return A.a(l,m)
l[m]=p}else return!1}n=0
while(!0){i=n+1
if(!(n<=4095&&o>h.dy&&o<=4095))break
e=h.x
e===$&&A.c(g)
p=h.ay++
m=h.y
m===$&&A.c(f)
if(!(o>=0&&o<4096))return A.a(m,o)
m=m[o]
if(!(p>=0&&p<4095))return A.a(e,p)
e[p]=m
m=h.z
m.toString
if(!(o<4096))return A.a(m,o)
o=m[o]
n=i}if(i>=4095||o>4095)return!1
e=h.x
e===$&&A.c(g)
p=h.ay++
if(!(p>=0&&p<4095))return A.a(e,p)
e[p]=o
while(!0){e=h.ay
if(!(e!==0&&r<s))break
q=r+1
p=h.x;--e
h.ay=e
if(!(e>=0&&e<4095))return A.a(p,e)
e=p[e]
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=e
r=q}}e=h.CW
if(e!==4098){p=h.z
p.toString
m=h.db-2
if(!(m>=0&&m<4096))return A.a(p,m)
m=p[m]===4098
p=m}else p=!1
if(p){p=h.z
p.toString
m=h.db-2
if(!(m>=0&&m<4096))return A.a(p,m)
p[m]=e
l=h.ch
k=h.y
j=h.dy
if(l===m){k===$&&A.c(f)
k[m]=h.dS(p,e,j)}else{k===$&&A.c(f)
l.toString
k[m]=h.dS(p,l,j)}}e=h.ch
e.toString
h.CW=e}}return!0},
iQ(){var s,r,q,p,o=this
if(o.cy>12)return null
for(;s=o.ax,r=o.cy,s<r;){s=o.ie()
s.toString
r=o.at
q=o.ax
o.at=(r|B.a.W(s,q))>>>0
o.ax=q+8}q=o.at
if(!(r>=0&&r<13))return A.a(B.bA,r)
p=B.bA[r]
o.at=B.a.a4(q,r)
o.ax=s-r
s=o.db
if(s<4097){++s
o.db=s
s=s>o.cx&&r<12}else s=!1
if(s){o.cx=o.cx<<1>>>0
o.cy=r+1}return q&p},
dS(a,b,c){var s,r,q=0
while(!0){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
ie(){var s,r,q=this,p=q.w,o=p[0]
if(o===0){p[0]=q.f.B()
p=q.w
o=p[0]
if(o===0)return null
B.k.bs(p,1,1+o,q.f.ab(o).a_())
p=q.w
s=p[1]
p[1]=2
p[0]=p[0]-1}else{r=p[1]
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.dz.prototype={
aj(){return"IcoType."+this.b}}
A.hn.prototype={$ia3:1}
A.ho.prototype={}
A.hm.prototype={
gM(a){return B.a.U(A.bI.prototype.gM.call(this,this),2)},
gcH(){return!(this.d===40&&this.f===32)&&A.bI.prototype.gcH.call(this)}}
A.kq.prototype={
b3(a,b,c){var s,r,q,p=this,o=A.C(b,!1,null,0)
p.a=o
s=p.b=A.oo(o)
if(s==null)return null
if(s.e.length===1||!1)return p.ap(0)
for(r=null,q=0;q<p.b.e.length;++q){c=p.ap(q)
if(c==null)continue
if(r==null){c.w=B.h
r=c}else r.aH(c)}return r},
ap(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=this.a
if(a8!=null){s=this.b
s=s==null||a9>=s.d}else s=!0
if(s)return a7
s=this.b.e
if(!(a9<s.length))return A.a(s,a9)
r=s[a9]
s=a8.a
a8=a8.b+r.e
q=r.d
p=J.k4(s,a8,a8+q)
o=new A.ic(A.oB())
t.D.a(p)
if(o.dn(p))return o.bS(0,p)
n=A.bo(!1,14)
n.dt(19778)
n.aD(q)
n.aD(0)
n.aD(0)
a8=A.C(p,!1,a7,0)
s=A.oa(A.C(A.Q(n.c.buffer,0,n.a),!1,a7,0))
q=a8.d
m=a8.k()
l=a8.k()
k=$.X()
k[0]=l
l=$.ao()
if(0>=l.length)return A.a(l,0)
j=l[0]
k[0]=a8.k()
l=l[0]
i=a8.p()
h=a8.p()
g=a8.k()
if(!(g<14))return A.a(B.a8,g)
g=B.a8[g]
a8.k()
k[0]=a8.k()
k[0]=a8.k()
k=a8.k()
a8.k()
f=new A.hm(s,j,l,m,i,h,g,k,q)
f.ej(a8,s)
if(m!==40&&i!==1)return a7
e=k===0&&h<=8?40+4*B.a.O(1,h):40+4*k
s.b=e
n.a-=4
n.aD(e)
d=A.C(p,!1,a7,0)
c=new A.kg(!0)
c.a=d
c.b=f
b=c.ap(0)
if(h>=32)return b
a=32-B.a.a2(j,32)
a0=B.a.U(a===32?j:j+a,8)
for(a8=1/l<0,s=l<0,l=l===0,a1=0;a1<B.a.U(A.bI.prototype.gM.call(f,f),2);++a1){if(!(l?a8:s))a2=a1
else{q=b.a
q=q==null?a7:q.b
a2=(q==null?0:q)-1-a1}a3=d.af(a0)
d.d=d.d+(a3.c-a3.d)
q=b.a
a4=q==null?a7:q.K(0,a2,a7)
if(a4==null)a4=new A.R()
for(a5=0;a5<j;){q=a3.a
m=a3.d++
if(!(m>=0&&m<q.length))return A.a(q,m)
m=q[m]
a6=7
while(!0){if(!(a6>-1&&a5<j))break
if((m&B.a.W(1,a6))>>>0!==0)a4.su(0,0)
a4.C();++a5;--a6}}}return b}}
A.fZ.prototype={}
A.ce.prototype={}
A.cB.prototype={}
A.ey.prototype={}
A.kA.prototype={}
A.bQ.prototype={
shS(a){this.r=t.hK.a(a)},
shU(a){this.w=t.A.a(a)},
shT(a){this.x=t.A.a(a)}}
A.kB.prototype={
ly(a){var s,r,q,p,o,n,m,l=this,k=A.C(t.L.a(a),!0,null,0)
l.a=k
s=k.cZ(2,0)
k=s.a
r=s.d
q=k.length
if(!(r>=0&&r<q))return A.a(k,r)
if(k[r]===255){++r
if(!(r<q))return A.a(k,r)
r=k[r]!==216
k=r}else k=!0
if(k)return!1
if(l.cc()!==216)return!1
p=l.cc()
o=!1
n=!1
while(!0){if(p!==217){k=l.a
k=k.d<k.c}else k=!1
if(!k)break
m=l.a.p()
if(m<2)break
k=l.a
k.d=k.d+(m-2)
switch(p){case 192:case 193:case 194:o=!0
break
case 218:n=!0
break}p=l.cc()}return o&&n},
ci(a,b){var s,r,q,p,o,n,m,l,k=this
k.a=A.C(t.L.a(b),!0,null,0)
k.jR()
if(k.x.length!==1)throw A.f(A.q("Only single frame JPEGs supported"))
for(s=k.Q,r=0;q=k.d,p=q.z,r<p.length;++r){o=q.y.l(0,p[r])
q=o.a
p=k.d
n=p.f
m=o.b
l=p.r
p=k.ih(p,o)
q=q===1&&n===2?1:0
B.c.H(s,new A.fZ(p,q,m===1&&l===2?1:0))}},
jR(){var s,r,q,p,o,n,m,l,k=this
if(k.cc()!==216)throw A.f(A.q("Start Of Image marker not found."))
s=k.cc()
while(!0){if(s!==217){r=k.a
r===$&&A.c("input")
r=r.d<r.c}else r=!1
if(!r)break
r=k.a
r===$&&A.c("input")
q=r.p()
if(q<2)A.a1(A.q("Invalid Block"))
r=k.a
p=r.af(q-2)
r.d=r.d+(p.c-p.d)
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:k.jS(s,p)
break
case 219:k.jV(p)
break
case 192:case 193:case 194:k.jX(s,p)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.f(A.q("Unhandled frame type "+B.a.cP(s,16)))
case 196:k.jU(p)
break
case 221:k.e=p.p()
break
case 218:k.kc(p)
break
case 255:r=k.a
o=r.a
n=r.d
if(!(n>=0&&n<o.length))return A.a(o,n)
if(o[n]!==255)r.d=n-1
break
default:r=k.a
o=r.a
n=r.d
m=n+-3
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
if(o[m]===255){m=n+-2
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
o=m>=192&&m<=254}else o=!1
if(o){r.d=n-3
break}if(s!==0)throw A.f(A.q("Unknown JPEG marker "+B.a.cP(s,16)))
break}s=k.cc()}},
cc(){var s,r=this,q=r.a
q===$&&A.c("input")
if(q.d>=q.c)return 0
do{do{s=r.a.B()
if(s!==255){q=r.a
q=q.d<q.c}else q=!1}while(q)
q=r.a
if(q.d>=q.c)return s
do{s=r.a.B()
if(s===255){q=r.a
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.a
q=q.d<q.c}else q=!1}while(q)
return s},
jW(a){if(a.k()!==1165519206)return
if(a.p()!==0)return
this.r.ci(0,a)},
jS(a,b){var s,r,q,p,o,n=b
if(a===224){s=n
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===74){s=n
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=n
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===73){s=n
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===70){s=n
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=new A.kD()
r=n
q=r.a
r=r.d+5
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+6
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+7
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+8
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+9
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+10
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+11
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+12
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
s.f=q
r=n
p=r.a
r=r.d+13
if(!(r>=0&&r<p.length))return A.a(p,r)
r=p[r]
s.r=r
this.b=s
n.cZ(14+3*q*r,14)}}else if(a===225)this.jW(n)
else if(a===238){s=n
r=s.a
s=s.d
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===65){s=n
r=s.a
s=s.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===100){s=n
r=s.a
s=s.d+2
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===111){s=n
r=s.a
s=s.d+3
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===98){s=n
r=s.a
s=s.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===101){s=n
r=s.a
s=s.d+5
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]===0}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
if(s){s=new A.kA()
this.c=s
r=n
q=r.a
r=r.d+6
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+7
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+8
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+9
if(!(q>=0&&q<r.length))return A.a(r,q)
r=n
q=r.a
r=r.d+10
if(!(r>=0&&r<q.length))return A.a(q,r)
q=n
r=q.a
q=q.d+11
if(!(q>=0&&q<r.length))return A.a(r,q)
s.d=r[q]}}else if(a===254)try{n.ll()}catch(o){A.aT(o)}},
jV(a){var s,r,q,p,o,n,m,l,k,j
for(s=a.c,r=this.w;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
o=B.a.j(q,4)
n=q&15
if(n>=4)throw A.f(A.q("Invalid number of quantization tables"))
if(r[n]==null)B.c.h(r,n,new Int16Array(64))
m=r[n]
for(q=o!==0,l=0;l<64;++l){if(q)k=a.p()
else{p=a.a
j=a.d++
if(!(j>=0&&j<p.length))return A.a(p,j)
k=p[j]}m.toString
p=B.G[l]
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.f(A.q("Bad length for DQT block"))},
jX(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.d!=null)throw A.f(A.q("Duplicate JPG frame data found."))
s=j.d=new A.hJ(A.a_(t.p,t.e7),A.b([],t.t))
s.b=a===194
s.c=b.B()
s=j.d
s.toString
s.d=b.p()
s=j.d
s.toString
s.e=b.p()
r=b.B()
for(s=j.w,q=0;q<r;++q){p=b.a
o=b.d
n=b.d=o+1
m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
l=b.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
k=B.a.j(n,4)
b.d=l+1
if(!(l>=0&&l<m))return A.a(p,l)
l=p[l]
B.c.H(j.d.z,o)
j.d.y.h(0,o,new A.bQ(k&15,n&15,s,l))}j.d.le()
B.c.H(j.x,j.d)},
jU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=a.c,r=this.z,q=this.y;p=a.d,p<s;){o=a.a
n=a.d=p+1
if(!(p>=0&&p<o.length))return A.a(o,p)
m=o[p]
l=new Uint8Array(16)
for(p=n,k=0,j=0;j<16;++j,p=n){n=p+1
a.d=n
if(!(p>=0&&p<o.length))return A.a(o,p)
p=o[p]
if(!(j<16))return A.a(l,j)
l[j]=p
k+=l[j]}i=a.af(k)
a.d=a.d+(i.c-i.d)
h=i.a_()
if((m&16)!==0){m-=16
g=q}else g=r
if(g.length<=m)B.c.sn(g,m+1)
B.c.h(g,m,this.ii(l,h))}},
kc(a){var s,r,q,p,o,n,m,l=this,k=a.B()
if(k<1||k>4)throw A.f(A.q("Invalid SOS block"))
s=A.nf(k,new A.kC(l,a),t.e7)
r=a.B()
q=a.B()
p=a.B()
o=B.a.j(p,4)
n=l.a
n===$&&A.c("input")
m=l.d
o=new A.hK(n,m,s,l.e,r,q,o&15,p&15)
n=m.w
n===$&&A.c("mcusPerLine")
o.f=n
o.r=m.b
o.bI(0)},
ii(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=A.b([],t.kv),g=16
while(!0){if(!(g>0&&a[g-1]===0))break;--g}s=t.dj
B.c.H(h,new A.e7(A.b([],s)))
if(0>=h.length)return A.a(h,0)
r=h[0]
for(q=b.length,p=0,o=0;o<g;){for(n=0;n<a[o];++n){if(0>=h.length)return A.a(h,-1)
r=h.pop()
m=r.a
l=m.length
k=r.b
if(l<=k)B.c.sn(m,k+1)
l=r.b
if(!(p>=0&&p<q))return A.a(b,p)
B.c.h(m,l,new A.ey(b[p]))
for(;m=r.b,m>0;){if(0>=h.length)return A.a(h,-1)
r=h.pop()}r.b=m+1
B.c.H(h,r)
for(;h.length<=o;r=j){m=A.b([],s)
j=new A.e7(m)
B.c.H(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sn(l,i+1)
B.c.h(l,r.b,new A.cB(m))}++p}++o
if(o<g){m=A.b([],s)
j=new A.e7(m)
B.c.H(h,j)
l=r.a
k=l.length
i=r.b
if(k<=i)B.c.sn(l,i+1)
B.c.h(l,r.b,new A.cB(m))
r=j}}if(0>=h.length)return A.a(h,0)
return h[0].a},
ih(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a4.e
a2===$&&A.c("blocksPerLine")
s=a4.f
s===$&&A.c("blocksPerColumn")
r=a2<<3>>>0
q=new Int32Array(64)
p=new Uint8Array(64)
o=s*8
n=A.am(o,null,!1,t.nh)
for(m=a4.c,l=a4.d,k=0,j=0;j<s;++j){i=j<<3>>>0
for(h=0;h<8;++h,k=g){g=k+1
B.c.h(n,k,new Uint8Array(r))}for(f=0;f<a2;++f){if(!(l>=0&&l<4))return A.a(m,l)
e=m[l]
e.toString
d=a4.r
d===$&&A.c("blocks")
if(!(j<d.length))return A.a(d,j)
d=d[j]
if(!(f<d.length))return A.a(d,f)
A.vg(e,d[f],p,q)
c=f<<3>>>0
for(b=0,a=0;a<8;++a){e=i+a
if(!(e<o))return A.a(n,e)
a0=n[e]
for(h=0;h<8;++h,b=a1){a0.toString
e=c+h
a1=b+1
if(!(b>=0&&b<64))return A.a(p,b)
d=p[b]
if(!(e<a0.length))return A.a(a0,e)
a0[e]=d}}}}return n}}
A.kC.prototype={
$1(a){var s,r,q,p,o,n=this.b,m=n.B(),l=n.B()
n=this.a
if(!n.d.y.aI(0,m))throw A.f(A.q("Invalid Component in SOS block"))
s=n.d.y.l(0,m)
s.toString
r=B.a.j(l,4)&15
q=l&15
p=n.z
o=p.length
if(r<o){if(!(r<o))return A.a(p,r)
p=p[r]
p.toString
s.shU(t.A.a(p))}n=n.y
p=n.length
if(q<p){if(!(q<p))return A.a(n,q)
n=n[q]
n.toString
s.shT(t.A.a(n))}return s},
$S:28}
A.e7.prototype={}
A.hJ.prototype={
le(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
for(s=a.y,r=A.o(s).c,q=A.eM(s,s.r,r);q.C();){p=s.l(0,q.d)
a.sl5(Math.max(a.f,p.a))
a.sl6(Math.max(a.r,p.b))}q=a.e
q.toString
a.w=B.b.b2(q/8/a.f)
q=a.d
q.toString
a.x=B.b.b2(q/8/a.r)
for(r=A.eM(s,s.r,r),q=t.hK,o=t.bW,n=t.kn;r.C();){m=s.l(0,r.d)
m.toString
l=a.e
l.toString
k=m.a
j=B.b.b2(B.b.b2(l/8)*k/a.f)
l=a.d
l.toString
i=m.b
h=B.b.b2(B.b.b2(l/8)*i/a.r)
g=a.w*k
f=a.x*i
e=J.aD(f,n)
for(d=0;d<f;++d){c=J.aD(g,o)
for(b=0;b<g;++b)c[b]=new Int32Array(64)
e[d]=c}m.e=j
m.f=h
m.shS(q.a(e))}},
sl5(a){this.f=A.x(a)},
sl6(a){this.r=A.x(a)}}
A.kD.prototype={}
A.hK.prototype={
bI(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="blocksPerLine",a2=a0.y,a3=a2.length,a4=a0.r
a4.toString
if(a4)if(a0.Q===0)s=a0.at===0?a0.giC():a0.giE()
else s=a0.at===0?a0.git():a0.giv()
else s=a0.giz()
a4=a3===1
if(a4){if(0>=a3)return A.a(a2,0)
r=a2[0]
q=r.e
q===$&&A.c(a1)
r=r.f
r===$&&A.c("blocksPerColumn")
p=q*r}else{r=a0.f
r===$&&A.c("mcusPerLine")
q=a0.b.x
q===$&&A.c("mcusPerColumn")
p=r*q}r=a0.z
if(r==null||r===0)a0.z=p
for(r=a0.a,q=t.mX,o=0;o<p;){for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
a2[n].y=0}a0.CW=0
if(a4){if(0>=a2.length)return A.a(a2,0)
m=a2[0]
l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
q.a(s)
k=m.e
k===$&&A.c(a1)
j=B.a.aA(o,k)
i=B.a.a2(o,k)
k=m.r
k===$&&A.c("blocks")
if(!(j>=0&&j<k.length))return A.a(k,j)
k=k[j]
if(!(i>=0&&i<k.length))return A.a(k,i)
s.$2(m,k[i]);++o;++l}}else{l=0
while(!0){k=a0.z
k.toString
if(!(l<k))break
for(n=0;n<a3;++n){if(!(n<a2.length))return A.a(a2,n)
m=a2[n]
h=m.a
g=m.b
for(f=0;f<g;++f)for(e=0;e<h;++e)a0.iH(m,s,o,f,e)}++o;++l}}a0.ch=0
k=r.a
d=r.d
c=k.length
if(!(d>=0&&d<c))return A.a(k,d)
b=k[d]
a=d+1
if(!(a<c))return A.a(k,a)
a=k[a]
if(b===255)if(a>=208&&a<=215)r.d=d+2
else break}},
c_(){var s,r,q=this,p=q.ch
if(p>0){--p
q.ch=p
return B.a.aO(q.ay,p)&1}p=q.a
if(p.d>=p.c)return null
s=p.B()
q.ay=s
if(s===255){r=p.B()
if(r!==0)throw A.f(A.q("unexpected marker: "+B.a.cP((q.ay<<8|r)>>>0,16)))}q.ch=7
return B.a.j(q.ay,7)&1},
cz(a){var s,r,q=new A.cB(t.A.a(a))
for(;s=this.c_(),s!=null;){if(q instanceof A.cB){r=q.a
if(s>>>0!==s||s>=r.length)return A.a(r,s)
q=r[s]}if(q instanceof A.ey)return q.a}return null},
e0(a){var s,r
for(s=0;a>0;){r=this.c_()
if(r==null)return null
s=(s<<1|r)>>>0;--a}return s},
cB(a){var s
if(a===1)return this.c_()===1?1:-1
a.toString
s=this.e0(a)
s.toString
if(s>=B.a.W(1,a-1))return s
return s+B.a.O(-1,a)+1},
iA(a,b){var s,r,q,p,o,n,m,l=this
t.L.a(b)
s=a.w
s===$&&A.c("huffmanTableDC")
r=l.cz(s)
q=r===0?0:l.cB(r)
s=a.y
s===$&&A.c("pred")
s+=q
a.y=s
b[0]=s
for(p=1;p<64;){s=a.x
s===$&&A.c("huffmanTableAC")
s=l.cz(s)
s.toString
o=s&15
n=s>>>4
if(o===0){if(n<15)break
p+=16
continue}p+=n
o=l.cB(o)
if(!(p>=0&&p<80))return A.a(B.G,p)
m=B.G[p]
if(!(m<64))return A.a(b,m)
b[m]=o;++p}},
iD(a,b){var s,r,q
t.L.a(b)
s=a.w
s===$&&A.c("huffmanTableDC")
r=this.cz(s)
q=r===0?0:B.a.O(this.cB(r),this.ax)
s=a.y
s===$&&A.c("pred")
s+=q
a.y=s
b[0]=s},
iF(a,b){var s,r
t.L.a(b)
s=b[0]
r=this.c_()
r.toString
b[0]=(s|B.a.O(r,this.ax))>>>0},
iu(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=k.CW
if(s>0){k.CW=s-1
return}r=k.Q
q=k.as
for(s=k.ax;r<=q;){p=a.x
p===$&&A.c("huffmanTableAC")
p=k.cz(p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){s=k.e0(n)
s.toString
k.CW=s+B.a.O(1,n)-1
break}r+=16
continue}r+=n
if(!(r>=0&&r<80))return A.a(B.G,r)
m=B.G[r]
p=k.cB(o)
l=B.a.O(1,s)
if(!(m<64))return A.a(b,m)
b[m]=p*l;++r}},
iw(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.L.a(b)
s=j.Q
r=j.as
$label0$1:for(q=j.ax,p=0;s<=r;){if(!(s>=0&&s<80))return A.a(B.G,s)
o=B.G[s]
n=j.cx
switch(n){case 0:n=a.x
n===$&&A.c("huffmanTableAC")
m=j.cz(n)
if(m==null)throw A.f(A.q("Invalid progressive encoding"))
l=m&15
p=m>>>4
if(l===0)if(p<15){n=j.e0(p)
n.toString
j.CW=n+B.a.O(1,p)
j.cx=4}else{j.cx=1
p=16}else{if(l!==1)throw A.f(A.q("invalid ACn encoding"))
j.cy=j.cB(l)
j.cx=p!==0?2:3}continue $label0$1
case 1:case 2:if(!(o<64))return A.a(b,o)
k=b[o]
if(k!==0){n=j.c_()
n.toString
n=B.a.O(n,q)
if(!(o<64))return A.a(b,o)
b[o]=k+n}else{--p
if(p===0)j.cx=n===2?3:0}break
case 3:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.c_()
k.toString
k=B.a.O(k,q)
if(!(o<64))return A.a(b,o)
b[o]=n+k}else{n=j.cy
n===$&&A.c("successiveACNextValue")
n=B.a.O(n,q)
if(!(o<64))return A.a(b,o)
b[o]=n
j.cx=0}break
case 4:if(!(o<64))return A.a(b,o)
n=b[o]
if(n!==0){k=j.c_()
k.toString
k=B.a.O(k,q)
if(!(o<64))return A.a(b,o)
b[o]=n+k}break}++s}if(j.cx===4)if(--j.CW===0)j.cx=0},
iH(a,b,c,d,e){var s,r,q,p,o
t.mX.a(b)
s=this.f
s===$&&A.c("mcusPerLine")
r=B.a.aA(c,s)*a.b+d
q=B.a.a2(c,s)*a.a+e
s=a.r
s===$&&A.c("blocks")
p=s.length
if(r>=p)return
if(!(r>=0))return A.a(s,r)
s=s[r]
o=s.length
if(q>=o)return
if(!(q>=0))return A.a(s,q)
b.$2(a,s[q])}}
A.hI.prototype={
b3(a,b,c){var s=A.oG()
s.ci(0,b)
if(s.x.length!==1)throw A.f(A.q("only single frame JPEGs supported"))
return A.v_(s)},
bS(a,b){return this.b3(a,b,null)}}
A.dQ.prototype={
aj(){return"PngDisposeMode."+this.b}}
A.f_.prototype={
aj(){return"PngBlendMode."+this.b}}
A.f0.prototype={}
A.hB.prototype={}
A.ck.prototype={
aj(){return"PngFilterType."+this.b}}
A.ie.prototype={
sP(a){this.w=t.k.a(a)},
slv(a){this.x=t.T.a(a)},
$ia3:1}
A.hC.prototype={}
A.ic.prototype={
dn(a){var s,r,q,p,o,n=A.C(a,!0,null,0).ab(8)
for(s=n.a,r=n.d,q=s.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
if(s[o]!==B.bm[p])return!1}return!0},
bb(b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=A.C(b5,!0,b3,0)
b2.d=b4
s=b4.ab(8)
for(b4=s.a,r=s.d,q=b4.length,p=0;p<8;++p){o=r+p
if(!(o>=0&&o<q))return A.a(b4,o)
if(b4[o]!==B.bm[p])return b3}for(b4=b2.a,r=b4.CW,q=t.t,o=b4.cx,n=t.L,m=b4.ax;!0;){l=b2.d
k=l.d-l.b
j=l.k()
i=b2.d.ac(4)
switch(i){case"tEXt":l=b2.d
h=l.af(j)
l.d=l.d+(h.c-h.d)
g=h.a_()
f=g.length
for(p=0;p<f;++p)if(g[p]===0){l=p+1
m.h(0,B.aJ.bS(0,new Uint8Array(g.subarray(0,A.bu(0,p,f)))),B.aJ.bS(0,new Uint8Array(g.subarray(l,A.bu(l,b3,f)))))
break}b2.d.d+=4
break
case"IHDR":l=b2.d
h=l.af(j)
l.d=l.d+(h.c-h.d)
e=A.u(h,b3,0)
d=e.a_()
b4.a=e.k()
b4.b=e.k()
l=e.a
c=e.d
b=e.d=c+1
a=l.length
if(!(c>=0&&c<a))return A.a(l,c)
b4.c=l[c]
c=e.d=b+1
if(!(b>=0&&b<a))return A.a(l,b)
b=b4.d=l[b]
a0=e.d=c+1
if(!(c>=0&&c<a))return A.a(l,c)
c=e.d=a0+1
if(!(a0>=0&&a0<a))return A.a(l,a0)
a0=l[a0]
b4.f=a0
e.d=c+1
if(!(c>=0&&c<a))return A.a(l,c)
b4.r=l[c]
if(!(b===0||b===2||b===3||b===4||b===6))return b3
if(a0!==0)return b3
switch(b){case 0:if(!B.c.bH(A.b([1,2,4,8,16],q),b4.c))return b3
break
case 2:if(!B.c.bH(A.b([8,16],q),b4.c))return b3
break
case 3:if(!B.c.bH(A.b([1,2,4,8],q),b4.c))return b3
break
case 4:if(!B.c.bH(A.b([8,16],q),b4.c))return b3
break
case 6:if(!B.c.bH(A.b([8,16],q),b4.c))return b3
break}if(b2.d.k()!==A.bF(n.a(d),A.bF(new A.bh(i),0)))throw A.f(A.q("Invalid "+i+" checksum"))
break
case"PLTE":l=b2.d
h=l.af(j)
l.d=l.d+(h.c-h.d)
b4.sP(h.a_())
if(b2.d.k()!==A.bF(n.a(n.a(b4.w)),A.bF(new A.bh(i),0)))throw A.f(A.q("Invalid "+i+" checksum"))
break
case"tRNS":l=b2.d
h=l.af(j)
l.d=l.d+(h.c-h.d)
b4.slv(h.a_())
a1=b2.d.k()
l=b4.x
l.toString
if(a1!==A.bF(n.a(l),A.bF(new A.bh(i),0)))throw A.f(A.q("Invalid "+i+" checksum"))
break
case"IEND":b2.d.d+=4
break
case"gAMA":if(j!==4)throw A.f(A.q("Invalid gAMA chunk"))
b2.d.k()
b2.d.d+=4
break
case"IDAT":B.c.H(o,k)
l=b2.d
c=l.d+=j
l.d=c+4
break
case"acTL":b4.ay=b2.d.k()
b2.d.k()
b2.d.d+=4
break
case"fcTL":b2.d.k()
l=b2.d.k()
c=b2.d.k()
b=b2.d.k()
a=b2.d.k()
a0=b2.d.p()
a2=b2.d.p()
a3=b2.d
a4=a3.a
a5=a3.d
a6=a3.d=a5+1
a7=a4.length
if(!(a5>=0&&a5<a7))return A.a(a4,a5)
a5=a4[a5]
if(a5>>>0!==a5||a5>=3)return A.a(B.bz,a5)
a5=B.bz[a5]
a3.d=a6+1
if(!(a6>=0&&a6<a7))return A.a(a4,a6)
a6=a4[a6]
if(a6>>>0!==a6||a6>=2)return A.a(B.bh,a6)
a6=B.bh[a6]
B.c.H(r,new A.hB(A.b([],q),l,c,b,a,a0,a2,a5,a6))
b2.d.d+=4
break
case"fdAT":b2.d.k()
B.c.H(B.c.gfS(r).y,k)
l=b2.d
c=l.d+=j-4
l.d=c+4
break
case"bKGD":l=b4.d
if(l===3){l=b2.d
c=l.a
l=l.d++
if(!(l>=0&&l<c.length))return A.a(c,l)
l=c[l];--j
a8=l*3
c=b4.w
b=c.length
if(!(a8>=0&&a8<b))return A.a(c,a8)
a9=c[a8]
a=a8+1
if(!(a<b))return A.a(c,a)
b0=c[a]
a=a8+2
if(!(a<b))return A.a(c,a)
b1=c[a]
c=b4.x
if(c!=null){l=B.k.bH(c,l)?0:255
c=new Uint8Array(4)
c[0]=a9
c[1]=b0
c[2]=b1
c[3]=l
b4.z=new A.eh(c)}else{l=new Uint8Array(3)
l[0]=a9
l[1]=b0
l[2]=b1
b4.z=new A.fY(l)}}else if(l===0||l===4){b2.d.p()
j-=2}else if(l===2||l===6){l=b2.d
l.p()
l.p()
l.p()
j-=24}if(j>0)b2.d.d+=j
b2.d.d+=4
break
case"iCCP":l=b2.d.cN()
b4.Q=l
c=b2.d
b=c.a
a=c.d++
if(!(a>=0&&a<b.length))return A.a(b,a)
h=c.af(j-(l.length+2))
c.d=c.d+(h.c-h.d)
b4.at=h.a_()
b2.d.d+=4
break
default:l=b2.d
c=l.d+=j
l.d=c+4
break}if(i==="IEND")break
l=b2.d
if(l.d>=l.c)return b3}return b4},
ap(c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=null,b8=b5.a,b9=b8.a,c0=b8.b,c1=b8.CW,c2=c1.length
if(c2===0||c3===0){r=A.b([],t.bs)
c1=b8.cx
q=c1.length
for(c2=t.L,p=0,o=0;o<q;++o){n=b5.d
n===$&&A.c("_input")
if(!(o<c1.length))return A.a(c1,o)
n.d=c1[o]
m=n.k()
l=b5.d.ac(4)
n=b5.d
k=n.af(m)
n.d=n.d+(k.c-k.d)
j=k.a_()
p+=j.length
B.c.H(r,j)
if(b5.d.k()!==A.bF(c2.a(j),A.bF(new A.bh(l),0)))throw A.f(A.q("Invalid "+l+" checksum"))}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.an)(r),++h){j=r[h]
J.o7(b7,i,j)
i+=j.length}}else{if(c3>=c2)throw A.f(A.q("Invalid Frame Number: "+c3))
if(!(c3<c2))return A.a(c1,c3)
g=c1[c3]
b9=g.b
c0=g.c
r=A.b([],t.bs)
for(c1=g.y,p=0,o=0;o<c1.length;++o){c2=b5.d
c2===$&&A.c("_input")
c2.d=c1[o]
m=c2.k()
c2=b5.d
c2.ac(4)
c2.d+=4
c2=b5.d
k=c2.af(m-4)
c2.d=c2.d+(k.c-k.d)
j=k.a_()
p+=j.length
B.c.H(r,j)}b7=new Uint8Array(p)
for(c1=r.length,i=0,h=0;h<r.length;r.length===c1||(0,A.an)(r),++h){j=r[h]
J.o7(b7,i,j)
i+=j.length}}c1=b8.d
if(c1===3)f=1
else if(c1===0)f=1
else{if(c1===4)c1=2
else c1=c1===6?4:3
f=c1}s=null
try{s=B.R.cF(A.cJ(t.L.a(b7),1,b6,0),!1)}catch(e){return b6}d=A.C(s,!0,b6,0)
b5.c=b5.b=0
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
c=c2/3|0
b=b8.x
n=b!=null
a=n?b.length:0
a0=n?4:3
a1=new A.b9(new Uint8Array(c*a0),c,a0)
for(n=a0===4,o=0,a2=0;o<c;++o,a2+=3){if(n&&o<a){if(!(o<b.length))return A.a(b,o)
a3=b[o]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
a1.cX(o,a4,a5,c1[a6],a3)}}else a1=b6}else a1=b6
if(b8.d===0&&b8.x!=null&&a1==null&&b8.c<=8){b=b8.x
a7=b.length
c1=b8.c
c=B.a.W(1,c1)
a1=new A.b9(new Uint8Array(c*4),c,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(o=0;o<c;++o){a9=o*a8
a1.cX(o,a9,a9,a9,255)}for(c1=a1.b,c2=3<c1,n=a1.c,a4=n.length,o=0;o<a7;o+=2){a5=b[o]
a6=o+1
if(!(a6<a7))return A.a(b,a6)
b0=(a5&255)<<8|b[a6]&255
if(b0<c)if(c2){a5=b0*c1+3
if(!(a5>=0&&a5<a4))return A.a(n,a5)
n[a5]=0}}}c1=b8.c
if(c1===1)b1=B.v
else if(c1===2)b1=B.w
else{if(c1===4)c2=B.x
else c2=c1===16?B.y:B.e
b1=c2}c2=b8.d
if(c2===0&&b8.x!=null&&c1>8)f=4
b2=A.a5(b6,b6,b1,0,B.h,c0,b6,0,c2===2&&b8.x!=null?4:f,a1,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.bZ(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.bZ(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.bZ(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.bZ(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.bZ(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.bZ(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.bZ(d,b2,0,1,1,2,b9,c0>>>1)}else b5.jL(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.ez(b8.Q,B.am,c1)
b8=b8.ax
if(b8.a!==0)b2.kt(b8)
return b2},
b3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.bb(t.D.a(b))==null)return e
s=f.a
r=s.CW
if(r.length===0||!1){s=f.ap(0)
s.toString
return s}for(q=e,p=q,o=0;o<s.ay;++o){if(!(o<r.length))return A.a(r,o)
c=r[o]
n=f.ap(o)
if(n==null)continue
if(p==null||q==null){m=c.f
n.y=B.b.i((m===0||c.r===0?0:m/c.r)*1000)
q=n
p=q
continue}m=n.a
l=m==null
k=l?e:m.a
if(k==null)k=0
j=q.a
i=j==null
h=i?e:j.a
if(k===(h==null?0:h)){m=l?e:m.b
if(m==null)m=0
l=i?e:j.b
m=m===(l==null?0:l)&&c.d===0&&c.e===0&&c.x===B.bF}else m=!1
if(m){m=c.f
n.y=B.b.i((m===0||c.r===0?0:m/c.r)*1000)
p.aH(n)
q=n
continue}g=c.w
if(g===B.bH){q=A.bl(q,!1,!1)
m=s.z
l=q.a
if(l!=null)l.aG(0,m)}else q=g===B.bI?A.bl(q,!1,!1):A.bl(q,!1,!1)
m=c.f
q.y=B.b.i((m===0||c.r===0?0:m/c.r)*1000)
m=c.x===B.bG?B.aE:B.ah
A.pV(q,n,m,c.d,c.e)
p.aH(q)}return p},
bS(a,b){return this.b3(a,b,null)},
bZ(a4,a5,a6,a7,a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
if(a3===4)s=2
else if(a3===2)s=3
else{a3=a3===6?4:1
s=a3}r=s*a2.c
q=B.a.j(r+7,3)
p=B.a.j(r*b0+7,3)
o=A.b([null,null],t.e5)
n=A.b([0,0,0,0],t.t)
for(a2=a8>1,m=a8-a6,l=a7,k=0,j=0;k<b1;++k,l+=a9,++a1.e){a3=a4.a
i=a4.d++
if(!(i>=0&&i<a3.length))return A.a(a3,i)
i=a3[i]
if(i>>>0!==i||i>=5)return A.a(B.ab,i)
h=B.ab[i]
g=a4.af(p)
a4.d=a4.d+(g.c-g.d)
B.c.h(o,j,g.a_())
if(!(j>=0&&j<2))return A.a(o,j)
f=o[j]
j=1-j
e=o[j]
f.toString
a1.fn(h,q,f,e)
a1.c=a1.b=0
d=new A.as(f,0,f.length,0,!0)
for(a3=m<=1,c=a6,b=0;b<b0;++b,c+=a8){a1.fd(d,n)
i=a5.a
i=i==null?null:i.K(c,l,null)
a1.e1(i==null?new A.R():i,n)
if(!a3||a2)for(a=0;a<a8;++a)for(i=l+a,a0=0;a0<m;++a0)a1.e1(a5.ak(c+a0,i),n)}}},
jL(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)s=2
else if(a0===2)s=3
else{a0=a0===6?4:1
s=a0}r=s*a.c
q=a.a
p=a.b
o=B.a.j(q*r+7,3)
n=B.a.j(r+7,3)
m=A.am(o,0,!1,t.p)
l=A.b([m,m],t.S)
k=A.b([0,0,0,0],t.t)
a=a2.a
j=a.gF(a)
j.C()
for(i=0,h=0;i<p;++i,h=e){a=a1.a
a0=a1.d++
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
a0=a[a0]
if(a0>>>0!==a0||a0>=5)return A.a(B.ab,a0)
g=B.ab[a0]
f=a1.af(o)
a1.d=a1.d+(f.c-f.d)
B.c.h(l,h,f.a_())
if(!(h>=0&&h<2))return A.a(l,h)
e=1-h
b.fn(g,n,l[h],l[e])
b.c=b.b=0
a0=l[h]
a=a0.length
d=new A.as(a0,0,a,0,!0)
for(c=0;c<q;++c){b.fd(d,k)
b.e1(j.gJ(j),k)
j.C()}}},
fn(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t.L.a(c)
t.T.a(d)
s=c.length
switch(a.a){case 0:break
case 1:for(r=J.ah(c),q=b;q<s;++q){p=c.length
if(!(q<p))return A.a(c,q)
o=c[q]
n=q-b
if(!(n>=0&&n<p))return A.a(c,n)
n=c[n]
if(typeof o!=="number")return o.b9()
if(typeof n!=="number")return A.bf(n)
r.h(c,q,o+n&255)}break
case 2:for(r=J.ah(c),p=d!=null,q=0;q<s;++q){if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
o=c[q]
if(typeof o!=="number")return o.b9()
r.h(c,q,o+m&255)}break
case 3:for(r=J.ah(c),p=d!=null,q=0;q<s;++q){if(q<b)l=0
else{o=q-b
if(!(o>=0&&o<c.length))return A.a(c,o)
l=c[o]}if(p){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(!(q<c.length))return A.a(c,q)
o=c[q]
n=B.a.j(l+m,1)
if(typeof o!=="number")return o.b9()
r.h(c,q,o+n&255)}break
case 4:for(r=J.ah(c),p=d==null,o=!p,q=0;q<s;++q){n=q<b
if(n)l=0
else{k=q-b
if(!(k>=0&&k<c.length))return A.a(c,k)
l=c[k]}if(o){if(!(q<d.length))return A.a(d,q)
m=d[q]}else m=0
if(n||p)j=0
else{n=q-b
if(!(n>=0&&n<d.length))return A.a(d,n)
j=d[n]}i=l+m-j
h=Math.abs(i-l)
g=Math.abs(i-m)
f=Math.abs(i-j)
if(h<=g&&h<=f)e=l
else e=g<=f?m:j
if(!(q<c.length))return A.a(c,q)
n=c[q]
if(typeof n!=="number")return n.b9()
r.h(c,q,n+e&255)}break
default:throw A.f(A.q("Invalid filter value: "+a.A(0)))}},
bt(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.B()
if(b===16)return a.p()
for(s=a.c;r=n.c,r<b;){q=a.d
if(q>=s)throw A.f(A.q("Invalid PNG data."))
p=a.a
a.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
n.b=B.a.W(p[q],r)
n.c=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.Z(n.b,s)
n.c=s
return r&o},
fd(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.c.h(b,0,q.bt(a,s.c))
return
case 2:B.c.h(b,0,q.bt(a,s.c))
B.c.h(b,1,q.bt(a,s.c))
B.c.h(b,2,q.bt(a,s.c))
return
case 3:B.c.h(b,0,q.bt(a,s.c))
return
case 4:B.c.h(b,0,q.bt(a,s.c))
B.c.h(b,1,q.bt(a,s.c))
return
case 6:B.c.h(b,0,q.bt(a,s.c))
B.c.h(b,1,q.bt(a,s.c))
B.c.h(b,2,q.bt(a,s.c))
B.c.h(b,3,q.bt(a,s.c))
return}throw A.f(A.q("Invalid color type: "+r+"."))},
e1(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(b)
s=this.a
r=s.d
switch(r){case 0:q=s.x
if(q!=null&&s.c>8){s=q.length
if(0>=s)return A.a(q,0)
r=q[0]
if(1>=s)return A.a(q,1)
s=q[1]
p=b[0]
a.a3(p,p,p,p!==((r&255)<<24|s&255)>>>0?a.gD():0)
return}a.aB(b[0],0,0)
return
case 2:o=b[0]
p=b[1]
n=b[2]
s=s.x
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
m=s[0]
if(1>=r)return A.a(s,1)
l=s[1]
if(2>=r)return A.a(s,2)
k=s[2]
if(3>=r)return A.a(s,3)
j=s[3]
if(4>=r)return A.a(s,4)
i=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(o!==((m&255)<<8|l&255)||p!==((k&255)<<8|j&255)||n!==((i&255)<<8|s&255)){a.a3(o,p,n,a.gD())
return}}a.aB(o,p,n)
return
case 3:a.sL(0,b[0])
return
case 4:a.aB(b[0],b[1],0)
return
case 6:a.a3(b[0],b[1],b[2],b[3])
return}throw A.f(A.q("Invalid color type: "+r+"."))}}
A.id.prototype={
aj(){return"PngFilter."+this.b}}
A.kZ.prototype={
aH(a){var s,r,q,p,o,n,m,l,k,j=this,i=8192,h=a.a
h=h==null?null:h.gbj()
if(!(h===!0&&a.gG()!==B.y))h=a.gaF()<8&&!a.gbi()&&a.gbm()>1
else h=!0
if(h)a=a.kD(B.e)
if(j.w==null){h=A.bo(!0,i)
j.w=h
h.b8(A.b([137,80,78,71,13,10,26,10],t.t))
s=A.bo(!0,i)
s.aD(a.gX(a))
s.aD(a.gM(a))
s.V(a.gaF())
if(a.gbi())h=3
else if(a.gbm()===1)h=0
else if(a.gbm()===2)h=4
else h=a.gbm()===3?2:6
s.V(h)
s.V(0)
s.V(0)
s.V(0)
h=j.w
h.toString
j.bu(h,"IHDR",A.Q(s.c.buffer,0,s.a))
h=a.c
if(h!=null){s=A.bo(!0,i)
s.b8(new A.bh(h.a))
s.V(0)
s.V(0)
s.b8(h.kB())
h=j.w
h.toString
j.bu(h,"iCCP",A.Q(s.c.buffer,0,s.a))}if(a.gbi()){h=j.a
if(h!=null){h=h.a
h===$&&A.c("palette")
j.fv(h)}else{h=a.a
h=h==null?null:h.gP()
h.toString
j.fv(h)}}if(j.r){s=A.bo(!0,i)
h=j.e
h===$&&A.c("_frames")
s.aD(h)
s.aD(j.c)
h=j.w
h.toString
j.bu(h,"acTL",A.Q(s.c.buffer,0,s.a))}}r=a.gbi()?1:a.gbm()
q=a.gG()===B.y?2:1
h=a.gX(a)
p=a.gM(a)
o=a.gM(a)
n=new Uint8Array(h*p*r*q+o)
j.j3(0,a,n)
m=B.aL.fI(n,j.d)
h=a.d
if(h!=null)for(h=A.eM(h,h.r,A.o(h).c);h.C();){p=h.d
o=a.d.l(0,p)
o.toString
A.ax(o)
s=new A.i6(!0,new Uint8Array(8192))
s.b8(B.aK.c1(p))
s.V(0)
s.b8(B.aK.c1(o))
p=j.w
p.toString
o=s.c.buffer
l=s.a
o=new Uint8Array(o,0,l)
j.bu(p,"tEXt",o)}if(j.r){s=A.bo(!0,i)
s.aD(j.f)
s.aD(a.gX(a))
s.aD(a.gM(a))
s.aD(0)
s.aD(0)
s.dt(a.y)
s.dt(1000)
s.V(1)
s.V(0)
h=j.w
h.toString
j.bu(h,"fcTL",A.Q(s.c.buffer,0,s.a));++j.f}if(j.f<=1){h=j.w
h.toString
j.bu(h,"IDAT",m)}else{k=A.bo(!0,i)
k.aD(j.f)
k.b8(m)
h=j.w
h.toString
j.bu(h,"fdAT",A.Q(k.c.buffer,0,k.a));++j.f}},
kX(a){var s,r=this,q=r.w
if(q==null)return null
r.bu(q,"IEND",A.b([],t.t))
r.f=0
q=r.w
s=A.Q(q.c.buffer,0,q.a)
r.w=null
return s},
kS(a,b){var s,r,q,p,o,n,m=this
if(a.gaq().length<=1||!1){m.r=!1
m.aH(a)}else{m.r=!0
m.e=a.gaq().length
m.c=a.r
if(a.gbi()){s=new A.i2(new Int32Array(256))
s.jk(256)
s.kr(a)
m.a=s
for(r=a.gaq(),q=r.length,p=0;p<r.length;r.length===q||(0,A.an)(r),++p){o=r[p]
if(o!==a){s.f_(o)
s.eL()
s.eZ()
s.ez()}}}for(r=a.gaq(),q=r.length,p=0;p<r.length;r.length===q||(0,A.an)(r),++p){o=r[p]
n=m.a
if(n!=null)m.aH(n.h6(o))
else m.aH(o)}}r=m.kX(0)
r.toString
return r},
fv(a){var s,r,q,p=this
if(a.gG()===B.e&&a.b===3&&a.a===256){s=p.w
s.toString
p.bu(s,"PLTE",A.Q(a.ga6(a),0,null))}else{s=a.a
r=A.bo(!0,s*3)
for(q=0;q<s;++q){r.V(B.b.i(a.aX(q)))
r.V(B.b.i(a.aW(q)))
r.V(B.b.i(a.aV(q)))}s=p.w
s.toString
p.bu(s,"PLTE",A.Q(r.c.buffer,0,r.a))}if(a.b===4){s=a.a
r=A.bo(!0,s)
for(q=0;q<s;++q)r.V(B.b.i(a.br(q)))
s=p.w
s.toString
p.bu(s,"tRNS",A.Q(r.c.buffer,0,r.a))}},
bu(a,b,c){t.L.a(c)
a.aD(c.length)
a.b8(new A.bh(b))
a.b8(c)
a.aD(A.bF(c,A.bF(new A.bh(b),0)))},
j3(a,b,c){var s,r,q=this,p=b.gbi()?B.j8:q.b,o=b.ga6(b),n=b.a.gbp(),m=b.gbi()?1:b.gbm(),l=B.a.j(m*b.gaF()+7,3),k=b.gaF()+7>>>3,j=p.a,i=0,h=0,g=null,f=0
while(!0){s=b.a
s=s==null?null:s.b
if(!(f<(s==null?0:s)))break
r=new Uint8Array(o,h,n)
h+=n
switch(j){case 1:i=q.j8(r,k,l,c,i)
break
case 2:i=q.j9(r,g,k,c,i)
break
case 3:i=q.j4(r,g,k,l,c,i)
break
case 4:i=q.j6(r,g,k,l,c,i)
break
default:i=q.j5(r,k,c,i)
break}++f
g=r}},
fu(a,b,c,d,e){var s,r,q,p;--a
for(s=b.length,r=d.length;a>=0;e=q){q=e+1
p=c+a
if(!(p<s))return A.a(b,p)
p=b[p]
if(!(e<r))return A.a(d,e)
d[e]=p;--a}return e},
j5(a,b,c,d){var s,r,q,p=d+1,o=c.length
if(!(d<o))return A.a(c,d)
c[d]=0
s=a.length
if(b===1)for(d=p,r=0;r<s;++r,d=p){p=d+1
q=a[r]
if(!(d<o))return A.a(c,d)
c[d]=q}else for(d=p,r=0;r<s;r+=b)d=this.fu(b,a,r,c,d)
return d},
j8(a,b,c,d,e){var s,r,q,p,o,n,m,l=e+1,k=d.length
if(!(e<k))return A.a(d,e)
d[e]=1
for(e=l,s=0;s<c;s+=b)e=this.fu(b,a,s,d,e)
r=a.length
for(q=b-1,s=c;s<r;s+=b)for(p=q,o=0;o<b;++o,--p,e=l){l=e+1
n=s+p
if(!(n>=0&&n<r))return A.a(a,n)
m=a[n]
n-=c
if(!(n>=0))return A.a(a,n)
n=a[n]
if(!(e>=0&&e<k))return A.a(d,e)
d[e]=m-n&255}return e},
j9(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=e+1,j=d.length
if(!(e<j))return A.a(d,e)
d[e]=2
s=a.length
for(r=c-1,q=b!=null,e=k,p=0;p<s;p+=c)for(o=r,n=0;n<c;++n,--o,e=k){if(q){m=p+o
if(!(m>=0&&m<b.length))return A.a(b,m)
l=b[m]}else l=0
k=e+1
m=p+o
if(!(m>=0&&m<s))return A.a(a,m)
m=a[m]
if(!(e>=0&&e<j))return A.a(d,e)
d[e]=m-l&255}return e},
j4(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i,h=f+1,g=e.length
if(!(f<g))return A.a(e,f)
e[f]=3
s=a.length
for(r=c-1,q=b==null,f=h,p=0;p<s;p+=c)for(o=r,n=0;n<c;++n,--o,f=h){m=p+o
if(m<d)l=0
else{k=m-d
if(!(k>=0&&k<s))return A.a(a,k)
l=a[k]}if(q)j=0
else{if(!(m>=0&&m<b.length))return A.a(b,m)
j=b[m]}if(!(m>=0&&m<s))return A.a(a,m)
i=a[m]
h=f+1
if(!(f>=0&&f<g))return A.a(e,f)
e[f]=i-(l+j>>>1)}return f},
jx(a,b,c){var s=a+b-c,r=s>a?s-a:a-s,q=s>b?s-b:b-s,p=s>c?s-c:c-s
if(r<=q&&r<=p)return a
else if(q<=p)return b
return c},
j6(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a2+1,d=a1.length
if(!(a2<d))return A.a(a1,a2)
a1[a2]=4
s=a.length
for(r=c-1,q=b==null,a2=e,p=0;p<s;p+=c)for(o=r,n=0;n<c;++n,--o,a2=e){m=p+o
l=m<a0
if(l)k=0
else{j=m-a0
if(!(j>=0&&j<s))return A.a(a,j)
k=a[j]}if(q)i=0
else{if(!(m>=0&&m<b.length))return A.a(b,m)
i=b[m]}if(l||q)h=0
else{l=m-a0
if(!(l>=0&&l<b.length))return A.a(b,l)
h=b[l]}if(!(m>=0&&m<s))return A.a(a,m)
g=a[m]
f=this.jx(k,i,h)
e=a2+1
if(!(a2>=0&&a2<d))return A.a(a1,a2)
a1[a2]=g-f&255}return a2}}
A.ih.prototype={
sl1(a){t.T.a(a)},
she(a,b){t.T.a(b)},
slm(a){t.T.a(a)},
sln(a){t.T.a(a)}}
A.ii.prototype={
sbG(a,b){t.T.a(b)},
sbL(a){t.T.a(a)}}
A.bC.prototype={}
A.il.prototype={
sbG(a,b){t.T.a(b)},
sbL(a){t.T.a(a)}}
A.im.prototype={
sbG(a,b){t.T.a(b)},
sbL(a){t.T.a(a)}}
A.ip.prototype={
sbG(a,b){t.T.a(b)},
sbL(a){t.T.a(a)}}
A.iq.prototype={
sbG(a,b){t.T.a(b)},
sbL(a){t.T.a(a)}}
A.f3.prototype={}
A.io.prototype={}
A.l0.prototype={
hJ(a){var s,r,q,p,o=this
a.p()
a.p()
a.p()
a.p()
s=B.a.U(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=o.e
p=a.p()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.f
q=a.p()
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=o.r
p=a.p()
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.w
q=a.p()
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.cZ.prototype={
fX(a,b,c,d,e,f,g){if(e==null)e=a.p()
switch(e){case 0:d.toString
this.kb(a,b,c,d)
break
case 1:if(f==null)f=this.k8(a,c)
d.toString
this.ka(a,b,c,d,f,g)
break
default:throw A.f(A.q("Unsupported compression: "+e))}},
lk(a,b,c,d){return this.fX(a,b,c,d,null,null,0)},
k8(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.p()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
kb(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.k.aL(s,0,r,255)
return}this.c=a.ab(r).a_()},
ka(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
if(d===16)l*=2
s=new Uint8Array(l)
this.c=s
r=f*c
q=e.length
if(r>=q){B.k.aL(s,0,l,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.af(e[r])
a.d=a.d+(m.c-m.d)
this.iM(m,this.c,p)
p+=b}},
iM(a,b,c){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
o=a.d=q+1
n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
q=p[q]
$.aP()[0]=q
q=$.aW()
if(0>=q.length)return A.a(q,0)
m=q[0]
if(m<0){m=1-m
a.d=o+1
if(!(o>=0&&o<n))return A.a(p,o)
q=p[o]
for(l=0;l<m;++l,c=k){k=c+1
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}else{++m
for(q=o,l=0;l<m;++l,q=o,c=k){k=c+1
o=q+1
a.d=o
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}}}}
A.bp.prototype={
aj(){return"PsdColorMode."+this.b}}
A.ij.prototype={
hK(a){var s,r,q=this
q.as=A.C(a,!0,null,0)
q.jO()
if(q.c!==943870035)return
s=q.as.k()
q.as.ab(s)
s=q.as.k()
q.at=q.as.ab(s)
s=q.as.k()
q.ax=q.as.ab(s)
r=q.as
q.ay=r.ab(r.c-r.d)},
bI(a){var s,r=this
if(r.c===943870035){s=r.as
s===$&&A.c("_input")
s=s==null}else s=!0
if(s)return!1
r.k6()
r.k7()
r.k9()
r.ay=r.ax=r.at=r.as=null
return!0},
fH(){if(!this.bI(0))return null
return this.lp()},
lp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.y
if(a1!=null)return a1
a1=a.a
a1=A.a5(a0,a0,B.e,0,B.h,a.b,a0,0,4,a0,a1,!1)
a.y=a1
a1.kw(0)
s=0
while(!0){a1=a.w
a1===$&&A.c("layers")
if(!(s<a1.length))break
c$0:{r=a1[s]
a1=r.y
a1===$&&A.c("flags")
if((a1&2)!==0)break c$0
a1=r.w
a1===$&&A.c("opacity")
q=a1/255
p=r.r
a1=r.cx
a1===$&&A.c("layerImage")
o=r.a
o.toString
n=o
m=0
while(!0){o=r.f
o===$&&A.c("height")
if(!(m<o))break
o=r.a
o.toString
l=o+m
k=r.b
o=n>=0
j=0
while(!0){i=r.e
i===$&&A.c("width")
if(!(j<i))break
i=a1.a
h=i==null?a0:i.K(j,m,a0)
if(h==null)h=new A.R()
g=B.b.i(h.gq(h))
f=B.b.i(h.gt())
e=B.b.i(h.gv(h))
d=B.b.i(h.gu(h))
k.toString
if(k>=0&&k<a.a&&o&&n<a.b){i=r.b
i.toString
c=a.y.a
b=c==null?a0:c.K(i+j,l,a0)
if(b==null)b=new A.R()
a.ic(B.b.i(b.gq(b)),B.b.i(b.gt()),B.b.i(b.gv(b)),B.b.i(b.gu(b)),g,f,e,d,p,q,b)}++j;++k}++m;++n}}++s}a1=a.y
a1.toString
return a1},
ic(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n=h/255*j
switch(i){case 1885434739:s=d
r=c
q=b
p=a
break
case 1852797549:s=h
r=g
q=f
p=e
break
case 1684632435:s=h
r=g
q=f
p=e
break
case 1684107883:p=Math.min(a,e)
q=Math.min(b,f)
r=Math.min(c,g)
s=h
break
case 1836411936:p=B.a.j(a*e,8)
q=B.a.j(b*f,8)
r=B.a.j(c*g,8)
s=h
break
case 1768188278:p=A.l2(a,e)
q=A.l2(b,f)
r=A.l2(c,g)
s=h
break
case 1818391150:p=A.l4(a,e)
q=A.l4(b,f)
r=A.l4(c,g)
s=h
break
case 1684751212:s=h
r=g
q=f
p=e
break
case 1818850405:p=Math.max(a,e)
q=Math.max(b,f)
r=Math.max(c,g)
s=h
break
case 1935897198:p=A.no(a,e)
q=A.no(b,f)
r=A.no(c,g)
s=h
break
case 1684633120:p=A.l3(a,e)
q=A.l3(b,f)
r=A.l3(c,g)
s=h
break
case 1818518631:p=e+a>255?255:a+e
q=f+b>255?255:b+f
r=g+c>255?255:c+g
s=h
break
case 1818706796:s=h
r=g
q=f
p=e
break
case 1870030194:p=A.nm(a,e,d,h)
q=A.nm(b,f,d,h)
r=A.nm(c,g,d,h)
s=h
break
case 1934387572:p=A.np(a,e)
q=A.np(b,f)
r=A.np(c,g)
s=h
break
case 1749838196:p=A.nk(a,e)
q=A.nk(b,f)
r=A.nk(c,g)
s=h
break
case 1984719220:p=A.nq(a,e)
q=A.nq(b,f)
r=A.nq(c,g)
s=h
break
case 1816947060:p=A.nl(a,e)
q=A.nl(b,f)
r=A.nl(c,g)
s=h
break
case 1884055924:p=A.nn(a,e)
q=A.nn(b,f)
r=A.nn(c,g)
s=h
break
case 1749903736:p=e<255-a?0:255
q=f<255-b?0:255
r=g<255-c?0:255
s=h
break
case 1684629094:p=Math.abs(e-a)
q=Math.abs(f-b)
r=Math.abs(g-c)
s=h
break
case 1936553316:p=A.nj(a,e)
q=A.nj(b,f)
r=A.nj(c,g)
s=h
break
case 1718842722:s=h
r=g
q=f
p=e
break
case 1717856630:s=h
r=g
q=f
p=e
break
case 1752524064:s=h
r=g
q=f
p=e
break
case 1935766560:s=h
r=g
q=f
p=e
break
case 1668246642:s=h
r=g
q=f
p=e
break
case 1819634976:s=h
r=g
q=f
p=e
break
default:s=h
r=g
q=f
p=e}o=1-n
k.sq(0,B.b.i(a*o+p*n))
k.st(B.b.i(b*o+q*n))
k.sv(0,B.b.i(c*o+r*n))
k.su(0,B.b.i(d*o+s*n))},
jO(){var s,r,q,p,o,n=this,m=n.as
m===$&&A.c("_input")
n.c=m.k()
m=n.as.p()
n.d=m
if(m!==1){n.c=0
return}s=n.as.ab(6)
for(m=s.a,r=s.d,q=m.length,p=0;p<6;++p){o=r+p
if(!(o>=0&&o<q))return A.a(m,o)
if(m[o]!==0){n.c=0
return}}n.e=n.as.p()
n.b=n.as.k()
n.a=n.as.k()
n.f=n.as.p()
m=n.as.p()
if(!(m<8))return A.a(B.bw,m)
n.r=B.bw[m]},
k6(){var s,r,q,p,o,n,m,l=this,k=l.at
k===$&&A.c("_imageResourceData")
k.d=k.b
for(k=l.z;s=l.at,s.d<s.c;){r=s.k()
q=l.at.p()
s=l.at
p=s.a
o=s.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
o=p[o]
s.ac(o)
if((o&1)===0)++l.at.d
n=l.at.k()
s=l.at
m=s.af(n)
s.d=s.d+(m.c-m.d)
if((n&1)===1)++l.at.d
if(r===943868237)k.h(0,q,new A.ik())}},
k7(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.ax
h===$&&A.c("_layerAndMaskData")
h.d=h.b
s=h.k()
if((s&1)!==0)++s
r=i.ax.ab(s)
h=t.k9
i.shZ(t.f0.a(A.b([],h)))
if(s>0){q=r.p()
$.aO()[0]=q
q=$.aV()
if(0>=q.length)return A.a(q,0)
p=q[0]
if(p<0)p=-p
for(q=t.N,o=t.mi,n=t.na,m=0;m<p;++m){l=new A.f2(A.a_(q,o),A.b([],h),A.b([],n))
l.hL(r)
k=i.w
k===$&&A.c("layers")
B.c.H(k,l)}}m=0
while(!0){h=i.w
h===$&&A.c("layers")
if(!(m<h.length))break
h[m].lh(r,i);++m}s=i.ax.k()
j=i.ax.ab(s)
if(s>0){j.p()
j.p()
j.p()
j.p()
j.p()
j.p()
j.B()}},
k9(){var s,r,q,p,o,n,m,l,k=this,j="channels",i="mergeImageChannels",h=k.ay
h===$&&A.c("_imageData")
h.d=h.b
s=h.p()
if(s===1){h=k.b
r=k.e
r===$&&A.c(j)
q=h*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=k.ay.p()}else p=null
k.si_(t.I.a(A.b([],t.mS)))
o=0
while(!0){h=k.e
h===$&&A.c(j)
if(!(o<h))break
h=k.x
h===$&&A.c(i)
r=k.ay
r.toString
n=o===3?-1:o
n=new A.cZ(n)
n.fX(r,k.a,k.b,k.f,s,p,o)
B.c.H(h,n);++o}h=k.r
r=k.f
n=k.a
m=k.b
l=k.x
l===$&&A.c(i)
k.y=A.p0(h,r,n,m,l)},
shZ(a){this.w=t.f0.a(a)},
si_(a){this.x=t.I.a(a)},
$ia3:1}
A.ik.prototype={}
A.f2.prototype={
hL(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=a7.k(),a6=$.X()
a6[0]=a5
a5=$.ao()
if(0>=a5.length)return A.a(a5,0)
a4.a=a5[0]
a6[0]=a7.k()
a4.b=a5[0]
a6[0]=a7.k()
a4.c=a5[0]
a6[0]=a7.k()
a5=a5[0]
a4.d=a5
a6=a4.b
a6.toString
a4.e=a5-a6
a6=a4.c
a5=a4.a
a5.toString
a4.f=a6-a5
a4.si0(t.I.a(A.b([],t.mS)))
s=a7.p()
for(r=0;r<s;++r){a5=a7.p()
$.aO()[0]=a5
a5=$.aV()
if(0>=a5.length)return A.a(a5,0)
q=a5[0]
a7.k()
a5=a4.as
a5===$&&A.c("channels")
B.c.H(a5,new A.cZ(q))}p=a7.k()
if(p!==943868237)throw A.f(A.q("Invalid PSD layer signature: "+B.a.cP(p,16)))
a4.r=a7.k()
a4.w=a7.B()
a7.B()
a4.y=a7.B()
if(a7.B()!==0)throw A.f(A.q("Invalid PSD layer data"))
o=a7.k()
n=a7.ab(o)
if(o>0){o=n.k()
if(o>0){m=n.ab(o)
a5=m.d
m.k()
m.k()
m.k()
m.k()
m.B()
m.B()
if(m.c-a5===20)m.d+=2
else{m.B()
m.B()
m.k()
m.k()
m.k()
m.k()}}o=n.k()
if(o>0)new A.l0().hJ(n.ab(o))
o=n.B()
n.ac(o)
l=4-B.a.a2(o,4)-1
if(l>0)n.d+=l
for(a5=n.c,a6=a4.ay,k=a4.cy,j=t.t,i=t.dM;n.d<a5;){p=n.k()
if(p!==943868237)throw A.f(A.q("PSD invalid signature for layer additional data: "+B.a.cP(p,16)))
h=n.ac(4)
o=n.k()
g=n.af(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a6.h(0,h,A.ry(h,g))
if(h==="lrFX"){e=A.u(i.a(a6.l(0,"lrFX")).b,null,0)
e.p()
d=e.p()
for(c=0;c<d;++c){e.ac(4)
b=e.ac(4)
a=e.k()
if(b==="dsdw"){a0=new A.ii()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbG(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ac(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.sbL(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="isdw"){a0=new A.im()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.k()
a0.sbG(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ac(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.sbL(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="oglw"){a0=new A.ip()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbG(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ac(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2)a0.sbL(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else if(b==="iglw"){a0=new A.il()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
a0.sbG(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
e.ac(8)
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a0.sbL(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}}else if(b==="bevl"){a0=new A.ih()
B.c.H(k,a0)
a0.a=e.k()
e.k()
e.k()
e.k()
e.ac(8)
e.ac(8)
a0.sl1(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
a0.she(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a2=e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
a1=e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a2=e.d=a1+1
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
if(a0.a===2){a0.slm(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
a0.sln(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}}else if(b==="sofi"){a0=new A.iq()
B.c.H(k,a0)
a0.a=e.k()
e.ac(4)
a0.sbG(0,A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))
f=e.a
a1=e.d
a2=e.d=a1+1
a3=f.length
if(!(a1>=0&&a1<a3))return A.a(f,a1)
e.d=a2+1
if(!(a2>=0&&a2<a3))return A.a(f,a2)
a0.sbL(A.b([e.p(),e.p(),e.p(),e.p(),e.p()],j))}else e.d+=a}}}}},
lh(a,b){var s,r,q,p,o,n=this,m=0
while(!0){s=n.as
s===$&&A.c("channels")
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.c("width")
q=n.f
q===$&&A.c("height")
s.lk(a,r,q,b.f);++m}r=b.r
q=b.f
p=n.e
p===$&&A.c("width")
o=n.f
o===$&&A.c("height")
n.cx=A.p0(r,q,p,o,s)},
si0(a){this.as=t.I.a(a)}}
A.dR.prototype={}
A.l1.prototype={
b3(a,b,c){var s,r,q,p=null,o=A.p_(b)
this.a=o
s=1
if(s===1||!1){o=o.fH()
return o}for(r=p,q=0;q<s;++q){o=this.a
c=o==null?p:o.fH()
if(c==null)continue
if(r==null){c.w=B.cs
r=c}else r.aH(c)}return r}}
A.ir.prototype={}
A.dU.prototype={}
A.aG.prototype={
b9(a,b){var s=this
return new A.aG(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)}}
A.dS.prototype={$ia3:1,
gM(a){return this.b}}
A.dT.prototype={$ia3:1,
gM(a){return this.f}}
A.f4.prototype={$ia3:1,
gM(a){return this.b}}
A.ba.prototype={
scE(a){var s=this.a,r=this.b+1
if(!(r<s.length))return A.a(s,r)
s[r]=a},
cS(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.o,s)
return new A.dU(B.o[s],B.o[q>>>4&31],B.r[q&15])}else return new A.dU(B.r[q>>>7&15],B.r[q>>>3&15],B.a7[q&7])},
cU(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.o,s)
return new A.aG(B.o[s],B.o[q>>>4&31],B.r[q&15],255)}else return new A.aG(B.r[q>>>7&15],B.r[q>>>3&15],B.a7[q&7],B.a7[q>>>11&7])},
cT(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.o,s)
return new A.dU(B.o[s],B.o[q>>>5&31],B.o[q&31])}else return new A.dU(B.r[q>>>8&15],B.r[q>>>4&15],B.r[q&15])},
cV(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.o,s)
return new A.aG(B.o[s],B.o[q>>>5&31],B.o[q&31],255)}else return new A.aG(B.r[q>>>8&15],B.r[q>>>4&15],B.r[q&15],B.a7[q>>>12&7])},
cu(){var s=this,r=s.c?1:0,q=s.d,p=s.e?1:0,o=s.f,n=s.r?1:0
return(r|(q&16383)<<1|p<<15|(o&32767)<<16|n<<31)>>>0},
bA(a){var s,r=this,q=r.a,p=r.b+1
if(!(p<q.length))return A.a(q,p)
s=q[p]
r.c=(s&1)===1
r.scE(r.cu())
r.d=s>>>1&16383
r.scE(r.cu())
r.e=(s>>>15&1)===1
r.scE(r.cu())
r.f=s>>>16&32767
r.scE(r.cu())
r.r=(s>>>31&1)===1
r.scE(r.cu())}}
A.l5.prototype={
bb(a){var s,r=this,q=a.length,p=q-(q>>>1&1431655765)>>>0
p=(p&858993459)+(p>>>2&858993459)
if((p+(p>>>4)>>>0&252645135)*16843009>>>0>>>24===1){s=r.iy(a)
if(s!=null){r.a=a
return r.b=s}}s=r.iL(a)
if(s!=null){r.a=a
return r.b=s}s=r.iJ(a)
if(s!=null){r.a=a
return r.b=s}return null},
iL(a){var s,r,q=A.C(a,!1,null,0)
if(q.k()!==52)return null
if(q.k()!==55727696)return null
s=A.b([0,0,0,0],t.t)
r=new A.dT(s)
q.k()
r.b=q.k()
B.c.h(s,0,q.B())
B.c.h(s,1,q.B())
B.c.h(s,2,q.B())
B.c.h(s,3,q.B())
q.k()
q.k()
r.f=q.k()
r.r=q.k()
q.k()
q.k()
q.k()
q.k()
r.Q=q.k()
return r},
iJ(a){var s,r,q=A.C(a,!1,null,0)
if(q.k()!==52)return null
s=new A.dS()
s.b=q.k()
s.a=q.k()
q.k()
s.d=q.k()
q.k()
s.f=q.k()
q.k()
q.k()
q.k()
s.y=q.k()
r=q.k()
s.z=r
s.Q=q.k()
if(r!==559044176)return null
return s},
iy(a){var s,r,q,p,o,n,m=null,l=a.length,k=A.C(a,!1,m,0)
if(k.k()!==0)return m
s=new A.f4()
s.b=k.k()
s.a=k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
k.k()
r=k.k()
s.y=r
if(r===559044176)return m
if(l===32){q=0
p=8}else{o=0
while(!0){if(!(o<10)){q=1
p=8
break}n=o<<1>>>0
if((B.a.O(64,n)&l)>>>0!==0){p=B.a.O(16,o)
q=1
break}if((B.a.O(128,n)&l)>>>0!==0){p=B.a.O(16,o)
q=0
break}++o}if(o===10)return m}if((q+1)*2===4)return m
s.b=s.a=p
return s},
ap(a){var s,r,q=this,p=q.b
if(p==null||q.a==null)return null
if(p instanceof A.f4){p=p.a
s=q.b
s=s.gM(s)
r=q.a
r.toString
return q.dK(p,s,r)}else if(p instanceof A.dS){p=q.a
p.toString
return q.iI(p)}else if(p instanceof A.dT){p=q.a
p.toString
return q.iK(p)}return null},
b3(a,b,c){if(this.bb(b)==null)return null
return this.ap(0)},
iI(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=a.length
if(f<52||h.b==null)return g
s=h.b
s.toString
t.fF.a(s)
r=A.C(a,!1,g,0)
r.d+=52
q=s.Q
if(q<1)q=(s.d&4096)!==0?6:1
if(q!==1)return g
p=s.a
o=s.b
if(p*o*s.f/8>f-52)return g
switch(s.d&255){case 16:n=A.a5(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
p=r.a
o=r.d
l=r.d=o+1
k=p.length
if(!(o>=0&&o<k))return A.a(p,o)
o=p[o]
r.d=l+1
if(!(l>=0&&l<k))return A.a(p,l)
l=p[l]
m.sq(0,l&240)
m.st((l&15)<<4)
m.sv(0,o&240)
m.su(0,(o&15)<<4)}return n
case 17:n=A.a5(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
j=r.p()
i=(j&1)!==0?255:0
m.sq(0,j>>>8&248)
m.st(j>>>3&248)
m.sv(0,(j&62)<<2)
m.su(0,i)}return n
case 18:n=A.a5(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sq(0,p[o])
o=r.a
p=r.d++
if(!(p>=0&&p<o.length))return A.a(o,p)
m.st(o[p])
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sv(0,p[o])
o=r.a
p=r.d++
if(!(p>=0&&p<o.length))return A.a(o,p)
m.su(0,o[p])}return n
case 19:n=A.a5(g,g,B.e,0,B.h,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
j=r.p()
m.sq(0,j>>>8&248)
m.st(j>>>3&252)
m.sv(0,(j&31)<<3)}return n
case 20:n=A.a5(g,g,B.e,0,B.h,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
j=r.p()
m.sq(0,(j&31)<<3)
m.st(j>>>2&248)
m.sv(0,j>>>7&248)}return n
case 21:n=A.a5(g,g,B.e,0,B.h,o,g,0,3,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sq(0,p[o])
o=r.a
p=r.d++
if(!(p>=0&&p<o.length))return A.a(o,p)
m.st(o[p])
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sv(0,p[o])}return n
case 22:n=A.a5(g,g,B.e,0,B.h,o,g,0,1,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
p=r.a
o=r.d++
if(!(o>=0&&o<p.length))return A.a(p,o)
m.sq(0,p[o])}return n
case 23:n=A.a5(g,g,B.e,0,B.h,o,g,0,4,g,p,!1)
for(s=n.a,s=s.gF(s);s.C();){m=s.gJ(s)
p=r.a
o=r.d
l=r.d=o+1
k=p.length
if(!(o>=0&&o<k))return A.a(p,o)
o=p[o]
r.d=l+1
if(!(l>=0&&l<k))return A.a(p,l)
l=p[l]
m.sq(0,l)
m.st(l)
m.sv(0,l)
m.su(0,o)}return n
case 24:return g
case 25:return s.y===0?h.eH(p,o,r.a_()):h.dK(p,o,r.a_())}return g},
iK(a){var s,r,q=this.b
if(!(q instanceof A.dT))return null
s=A.C(a,!1,null,0)
r=s.d+=52
s.d=r+q.Q
if(q.c[0]===0)switch(q.b){case 2:return this.eH(q.r,q.f,s.a_())
case 3:return this.dK(q.r,q.f,s.a_())}return null},
eH(c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.a5(b6,b6,B.e,0,B.h,c7,b6,0,3,b6,c6,!1),b8=c6/4|0,b9=b8-1,c0=A.b_(c8.buffer,0,b6),c1=new A.ba(c0),c2=new A.ba(A.b_(c8.buffer,0,b6)),c3=new A.ba(A.b_(c8.buffer,0,b6)),c4=new A.ba(A.b_(c8.buffer,0,b6)),c5=new A.ba(A.b_(c8.buffer,0,b6))
for(s=c0.length,r=0,q=0;r<b8;++r,q+=4)for(p=0,o=0;p<b8;++p,o+=4){c1.b=A.bS(p,r)<<1>>>0
c1.bA(0)
n=c1.b
if(!(n<s))return A.a(c0,n)
m=c0[n]
l=c1.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&b9)>>>0
h=(i+1&b9)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&b9)>>>0
e=(f+1&b9)>>>0
c2.b=A.bS(f,i)<<1>>>0
c2.bA(0)
c3.b=A.bS(e,i)<<1>>>0
c3.bA(0)
c4.b=A.bS(f,h)<<1>>>0
c4.bA(0)
c5.b=A.bS(e,h)<<1>>>0
c5.bA(0)
d=c2.cS()
if(!(k>=0&&k<16))return A.a(B.m,k)
c=B.m[k][0]
b=c3.cS()
a=B.m[k][1]
a0=c4.cS()
a1=B.m[k][2]
a2=c5.cS()
a3=B.m[k][3]
a4=c2.cT()
a5=B.m[k][0]
a6=c3.cT()
a7=B.m[k][1]
a8=c4.cT()
a9=B.m[k][2]
b0=c5.cT()
b1=B.m[k][3]
b2=B.b6[l+m&3]
b3=b2[0]
b4=b2[1]
b5=b7.a
if(b5!=null)b5.S(g+o,n,(d.a*c+b.a*a+a0.a*a1+a2.a*a3)*b3+(a4.a*a5+a6.a*a7+a8.a*a9+b0.a*b1)*b4>>>7,(d.b*c+b.b*a+a0.b*a1+a2.b*a3)*b3+(a4.b*a5+a6.b*a7+a8.b*a9+b0.b*b1)*b4>>>7,(d.c*c+b.c*a+a0.c*a1+a2.c*a3)*b3+(a4.c*a5+a6.c*a7+a8.c*a9+b0.c*b1)*b4>>>7)
m=m>>>2;++k}}}return b7},
dK(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=A.a5(a4,a4,B.e,0,B.h,b5,a4,0,4,a4,b4,!1),a6=b4/4|0,a7=a6-1,a8=A.b_(b6.buffer,0,a4),a9=new A.ba(a8),b0=new A.ba(A.b_(b6.buffer,0,a4)),b1=new A.ba(A.b_(b6.buffer,0,a4)),b2=new A.ba(A.b_(b6.buffer,0,a4)),b3=new A.ba(A.b_(b6.buffer,0,a4))
for(s=a8.length,r=0,q=0;r<a6;++r,q+=4)for(p=0,o=0;p<a6;++p,o+=4){a9.b=A.bS(p,r)<<1>>>0
a9.bA(0)
n=a9.b
if(!(n<s))return A.a(a8,n)
m=a8[n]
l=a9.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&a7)>>>0
h=(i+1&a7)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&a7)>>>0
e=(f+1&a7)>>>0
b0.b=A.bS(f,i)<<1>>>0
b0.bA(0)
b1.b=A.bS(e,i)<<1>>>0
b1.bA(0)
b2.b=A.bS(f,h)<<1>>>0
b2.bA(0)
b3.b=A.bS(e,h)<<1>>>0
b3.bA(0)
d=b0.cU()
if(!(k>=0&&k<16))return A.a(B.m,k)
c=B.m[k][0]
b=b1.cU()
a=B.m[k][1]
a=new A.aG(d.a*c,d.b*c,d.c*c,d.d*c).b9(0,new A.aG(b.a*a,b.b*a,b.c*a,b.d*a))
b=b2.cU()
c=B.m[k][2]
c=a.b9(0,new A.aG(b.a*c,b.b*c,b.c*c,b.d*c))
b=b3.cU()
a=B.m[k][3]
a0=c.b9(0,new A.aG(b.a*a,b.b*a,b.c*a,b.d*a))
a=b0.cV()
b=B.m[k][0]
c=b1.cV()
d=B.m[k][1]
d=new A.aG(a.a*b,a.b*b,a.c*b,a.d*b).b9(0,new A.aG(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.cV()
b=B.m[k][2]
b=d.b9(0,new A.aG(c.a*b,c.b*b,c.c*b,c.d*b))
c=b3.cV()
d=B.m[k][3]
a1=b.b9(0,new A.aG(c.a*d,c.b*d,c.c*d,c.d*d))
a2=B.b6[l+m&3]
d=a2[0]
c=a2[1]
b=a2[2]
a=a2[3]
a3=a5.a
if(a3!=null)a3.al(g+o,n,a0.a*d+a1.a*c>>>7,a0.b*d+a1.b*c>>>7,a0.c*d+a1.c*c>>>7,a0.d*b+a1.d*a>>>7)
m=m>>>2;++k}}}return a5}}
A.fa.prototype={
ci(a,b){var s,r,q=this
if(b.c-b.d<18)return
q.a=b.B()
q.b=b.B()
s=b.B()
if(s<12){if(!(s>=0))return A.a(B.aX,s)
r=B.aX[s]}else r=B.ae
q.c=r
b.p()
q.e=b.p()
q.f=b.B()
b.p()
b.p()
q.x=b.p()
q.y=b.p()
q.z=b.B()
q.Q=b.B()},
fR(){var s=this,r=s.z
if(r!==8&&r!==16&&r!==24&&r!==32)return!1
r=s.c
if(r===B.C||r===B.D){if(s.e>256||s.b!==1)return!1
r=s.f
if(r!==16&&r!==24&&r!==32)return!1}else if(s.b===1)return!1
return!0},
$ia3:1}
A.aL.prototype={
aj(){return"TgaImageType."+this.b}}
A.lj.prototype={
b3(a,b,c){if(this.bb(b)==null)return null
return this.ap(0)},
bb(a){var s,r,q,p,o=this
o.a=new A.fa(B.ae)
s=A.C(a,!1,null,0)
o.b=s
r=s.ab(18)
o.a.ci(0,r)
if(!o.a.fR())return null
s=o.b
q=o.a
s.d+=q.a
p=q.c
if(p===B.C||p===B.D)q.as=s.ab(q.e*B.a.j(q.f,3)).a_()
s=o.a
s.ax=o.b.d
return s},
ap(a){var s=this,r=s.a
if(r==null)return null
r=r.c
if(r===B.bO)return s.eG()
else if(r===B.bN||r===B.D)return s.iN()
else if(r===B.C)return s.eG()
return null},
eC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=A.C(a,!1,null,0),e=g.a.f
if(e===16){e=g.b
e===$&&A.c("input")
s=e.p()
r=s>>>7&248
q=s>>>2&248
p=(s&31)<<3
o=(s&32768)!==0?0:255
for(n=0;n<g.a.e;++n){b.bz(n,r)
b.by(n,q)
b.bx(n,p)
b.bw(n,o)}}else{m=e===32
for(n=0;n<g.a.e;++n){e=f.a
l=f.d
k=f.d=l+1
j=e.length
if(!(l>=0&&l<j))return A.a(e,l)
l=e[l]
i=f.d=k+1
if(!(k>=0&&k<j))return A.a(e,k)
k=e[k]
h=f.d=i+1
if(!(i>=0&&i<j))return A.a(e,i)
i=e[i]
if(m){f.d=h+1
if(!(h>=0&&h<j))return A.a(e,h)
o=e[h]}else o=255
b.bz(n,i)
b.by(n,k)
b.bx(n,l)
b.bw(n,o)}}},
iN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.a,a0=a.z,a1=a0===16,a2=a1||a0===32,a3=a.x,a4=a.y,a5=a2?4:3
a=a.c
s=A.a5(b,b,B.e,0,B.h,a4,b,0,a5,b,a3,a===B.C||a===B.D)
a=s.a
if((a==null?b:a.gP())!=null){a=c.a.as
a.toString
a3=s.a
a3=a3==null?b:a3.gP()
a3.toString
c.eC(a,a3)}r=s.gX(s)
q=s.gM(s)-1
a=a0===8
p=0
while(!0){a3=c.b
a3===$&&A.c("input")
a4=a3.d
if(!(a4<a3.c&&q>=0))break
a5=a3.a
o=a3.d=a4+1
n=a5.length
if(!(a4>=0&&a4<n))return A.a(a5,a4)
a4=a5[a4]
m=(a4&127)+1
if((a4&128)!==0)if(a){a3.d=o+1
if(!(o>=0&&o<n))return A.a(a5,o)
a3=a5[o]
for(l=0;l<m;++l){k=p+1
a4=s.a
if(a4!=null)a4.aE(p,q,a3)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}}else if(a1){j=a3.p()
i=j>>>7&248
h=j>>>2&248
g=(j&31)<<3
f=(j&32768)!==0?0:255
for(l=0;l<m;++l){k=p+1
a3=s.a
if(a3!=null)a3.al(p,q,i,h,g,f)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}}else{a4=a3.d=o+1
if(!(o>=0&&o<n))return A.a(a5,o)
o=a5[o]
e=a3.d=a4+1
if(!(a4>=0&&a4<n))return A.a(a5,a4)
a4=a5[a4]
d=a3.d=e+1
if(!(e>=0&&e<n))return A.a(a5,e)
e=a5[e]
if(a2){a3.d=d+1
if(!(d>=0&&d<n))return A.a(a5,d)
f=a5[d]}else f=255
for(l=0;l<m;++l){k=p+1
a3=s.a
if(a3!=null)a3.al(p,q,e,a4,o,f)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}}else if(a)for(l=0;l<m;++l){a3=c.b
a4=a3.a
a3=a3.d++
if(!(a3>=0&&a3<a4.length))return A.a(a4,a3)
a3=a4[a3]
k=p+1
a4=s.a
if(a4!=null)a4.aE(p,q,a3)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}else if(a1)for(l=0;l<m;++l){j=a3.p()
f=(j&32768)!==0?0:255
k=p+1
a3=s.a
if(a3!=null)a3.al(p,q,j>>>7&248,j>>>2&248,(j&31)<<3,f)
a3=c.b
if(a3.d>=a3.c){p=k
break}if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}else for(l=0;l<m;++l){a3=c.b
a4=a3.a
a5=a3.d
o=a3.d=a5+1
n=a4.length
if(!(a5>=0&&a5<n))return A.a(a4,a5)
a5=a4[a5]
e=a3.d=o+1
if(!(o>=0&&o<n))return A.a(a4,o)
o=a4[o]
d=a3.d=e+1
if(!(e>=0&&e<n))return A.a(a4,e)
e=a4[e]
if(a2){a3.d=d+1
if(!(d>=0&&d<n))return A.a(a4,d)
f=a4[d]}else f=255
k=p+1
a3=s.a
if(a3!=null)a3.al(p,q,e,o,a5,f)
if(k>=r){--q
if(q<0){p=0
break}p=0}else p=k}if(p>=r){--q
if(q<0)break
p=0}}return s},
eG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b
b===$&&A.c("input")
s=d.a
b.d=s.ax
r=s.z
b=r===16
if(!b)if(r!==32){q=s.c
if(q===B.C||q===B.D){q=s.f
q=q===16||q===32}else q=!1
p=q}else p=!0
else p=!0
q=s.x
o=s.y
n=p?4:3
s=s.c
m=A.a5(c,c,B.e,0,B.h,o,c,0,n,c,q,s===B.C||s===B.D)
s=d.a
q=s.c
if(q===B.C||q===B.D){s=s.as
s.toString
q=m.a
q=q==null?c:q.gP()
q.toString
d.eC(s,q)}if(r===8)for(l=m.gM(m)-1;l>=0;--l){k=0
while(!0){b=m.a
s=b==null
q=s?c:b.a
if(!(k<(q==null?0:q)))break
q=d.b
o=q.a
q=q.d++
if(!(q>=0&&q<o.length))return A.a(o,q)
q=o[q]
if(!s)b.aE(k,l,q);++k}}else if(b)for(l=m.gM(m)-1;l>=0;--l){k=0
while(!0){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
j=d.b.p()
i=(j&32768)!==0?0:255
b=m.a
if(b!=null)b.al(k,l,j>>>7&248,j>>>2&248,(j&31)<<3,i);++k}}else for(l=m.gM(m)-1;l>=0;--l){k=0
while(!0){b=m.a
s=b==null
q=s?c:b.a
if(!(k<(q==null?0:q)))break
q=d.b
o=q.a
n=q.d
h=q.d=n+1
g=o.length
if(!(n>=0&&n<g))return A.a(o,n)
n=o[n]
f=q.d=h+1
if(!(h>=0&&h<g))return A.a(o,h)
h=o[h]
e=q.d=f+1
if(!(f>=0&&f<g))return A.a(o,f)
f=o[f]
if(p){q.d=e+1
if(!(e>=0&&e<g))return A.a(o,e)
i=o[e]}else i=255
if(!s)b.al(k,l,f,h,n,i);++k}}return m}}
A.ll.prototype={
aa(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.B()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.W(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.u,q)
r=p+(o&B.u[q])
a-=q
n.c=8
q=s.a
o=s.d++
if(!(o>=0&&o<q.length))return A.a(q,o)
n.b=q[o]}if(a>0){if(q===0){n.c=8
n.b=s.B()}s=B.a.W(r,a)
q=n.b
p=n.c-a
q=B.a.aO(q,p)
if(!(a<9))return A.a(B.u,a)
r=s+(q&B.u[a])
n.c=p}return r}}
A.iG.prototype={
A(a){var s=this,r=s.a,q=$.o2().l(0,r)
if(q!=null)return q.a+": "+s.b.A(0)+" "+s.c
return"<"+r+">: "+s.b.A(0)+" "+s.c},
bn(a){var s,r,q,p,o=this,n=o.e
if(n!=null)return n
n=o.f
n.d=o.d
s=o.c
r=o.b
if(r!==B.d){q=r.a
if(!(q<13))return A.a(B.a3,q)
q=B.a3[q]}else q=0
p=n.ab(s*q)
switch(r.a){case 1:return o.e=new A.bM(new Uint8Array(A.J(p.ab(s).a_())))
case 2:return o.e=new A.cC(s===0?"":p.ac(s-1))
case 7:return o.e=new A.bM(new Uint8Array(A.J(p.ab(s).a_())))
case 3:return o.e=A.ow(p,s)
case 4:return o.e=A.or(p,s)
case 5:return o.e=A.os(p,s)
case 11:return o.e=A.ox(p,s)
case 12:return o.e=A.oq(p,s)
case 6:return o.e=new A.cf(new Int8Array(A.J(A.oN(p.a_().buffer,0,s))))
case 8:return o.e=A.ov(p,s)
case 9:return o.e=A.ot(p,s)
case 10:return o.e=A.ou(p,s)
case 0:return null}}}
A.ln.prototype={
kL(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.U(p.a+7,8)
for(r=0,q=0;q<d;++q){p.dJ(a,r,c)
r+=s}},
dJ(a,b,c){var s,r,q,p,o,n,m,l=this
l.d=0
for(s=l.a,r=!0;c<s;){for(;r;){q=l.bR(10)
if(!(q<1024))return A.a(B.ac,q)
p=B.ac[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|l.aP(2))>>>0
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
n=B.a.j(p,1)
c+=B.a.j(p,4)&4095
l.az(4-(n&7))}else if(o===0)throw A.f(A.q("TIFFFaxDecoder0"))
else if(o===15)throw A.f(A.q("TIFFFaxDecoder1"))
else{c+=B.a.j(p,5)&2047
l.az(10-o)
if((p&1)===0){B.c.h(l.f,l.d++,c)
r=!1}}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}for(;!r;){q=l.aP(4)
if(!(q<16))return A.a(B.a9,q)
p=B.a9[q]
m=p>>>5&2047
if(m===100){q=l.bR(9)
if(!(q<512))return A.a(B.a6,q)
p=B.a6[q]
o=B.a.j(p,1)&15
m=B.a.j(p,5)&2047
if(o===12){l.az(5)
q=l.aP(4)
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
n=B.a.j(p,1)
m=B.a.j(p,4)&4095
l.b1(a,b,c,m)
c+=m
l.az(4-(n&7))}else if(o===15)throw A.f(A.q("TIFFFaxDecoder2"))
else{l.b1(a,b,c,m)
c+=m
l.az(9-o)
if((p&1)===0){B.c.h(l.f,l.d++,c)
r=!0}}}else{if(m===200){q=l.aP(2)
if(!(q<4))return A.a(B.Y,q)
p=B.Y[q]
m=p>>>5&2047
l.b1(a,b,c,m)
c+=m
l.az(2-(p>>>1&15))
B.c.h(l.f,l.d++,c)}else{l.b1(a,b,c,m)
c+=m
l.az(4-(p>>>1&15))
B.c.h(l.f,l.d++,c)}r=!0}}if(c===s){if(l.z===2)if(l.w!==0){s=l.x
s.toString
l.x=s+1
l.w=0}break}}B.c.h(l.f,l.d++,c)},
kM(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.U(s+7,8)
q=A.am(2,null,!1,t.E)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.fa()!==1)throw A.f(A.q("TIFFFaxDecoder3"))
a0.dJ(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.fa()===0){n=a0.e
a0.se9(a0.f)
a0.se6(n)
a0.y=0
m=a3
l=-1
k=!0
j=0
while(!0){m.toString
if(!(m<s))break
a0.eQ(l,k,q)
i=q[0]
h=q[1]
g=a0.aP(7)
if(!(g<128))return A.a(B.Z,g)
g=B.Z[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.b1(a1,p,m,h-m)}a0.az(7-e)
m=h
l=m}else if(f===1){a0.az(7-e)
d=j+1
c=d+1
if(k){m+=a0.d3()
B.c.h(a0.f,j,m)
b=a0.d2()
a0.b1(a1,p,m,b)
m+=b
B.c.h(a0.f,d,m)}else{b=a0.d2()
a0.b1(a1,p,m,b)
m+=b
B.c.h(a0.f,j,m)
m+=a0.d3()
B.c.h(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.h(a0.f,j,a)
k=!k
if(k)a0.b1(a1,p,m,a-m)
a0.az(7-e)}else throw A.f(A.q("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.c.h(a0.f,j,m)
a0.d=j+1}else a0.dJ(a1,p,a3)
p+=r}},
kP(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a3.r=a5
a3.z=4
a3.x=a3.w=0
s=a3.a
r=B.a.U(s+7,8)
q=A.am(2,null,!1,t.E)
p=a3.f
a3.d=0
a3.d=1
B.c.h(p,0,s)
B.c.h(p,a3.d++,s)
for(o=0,n=0;n<a7;++n){m=a3.e
a3.se9(a3.f)
a3.se6(m)
a3.y=0
l=a6
k=-1
j=!0
i=0
while(!0){l.toString
if(!(l<s))break
a3.eQ(k,j,q)
h=q[0]
g=q[1]
f=a3.aP(7)
if(!(f<128))return A.a(B.Z,f)
f=B.Z[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a3.b1(a4,o,l,g-l)}a3.az(7-d)
l=g
k=l}else if(e===1){a3.az(7-d)
c=i+1
b=c+1
if(j){l+=a3.d3()
B.c.h(m,i,l)
a=a3.d2()
a3.b1(a4,o,l,a)
l+=a
B.c.h(m,c,l)}else{a=a3.d2()
a3.b1(a4,o,l,a)
l+=a
B.c.h(m,i,l)
l+=a3.d3()
B.c.h(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.c.h(m,i,a0)
j=!j
if(j)a3.b1(a4,o,l,a0-l)
a3.az(7-d)
l=a0
i=c
k=l}else if(e===11){if(a3.aP(3)!==7)throw A.f(A.q("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;){for(;a3.aP(1)!==1;)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
if(a3.aP(1)===0){if(!j){c=i+1
B.c.h(m,i,l)
i=c}j=!0}else{if(j){c=i+1
B.c.h(m,i,l)
i=c}j=!1}a2=!0}if(a1===5){if(!j){c=i+1
B.c.h(m,i,l)
i=c}l+=a1
j=!0}else{l+=a1
c=i+1
B.c.h(m,i,l)
a3.b1(a4,o,l,1);++l
i=c
j=!1}}}else throw A.f(A.q("TIFFFaxDecoder5 "+e))}B.c.h(m,i,l)
a3.d=i+1
o+=r}},
d3(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.bR(10)
if(!(q<1024))return A.a(B.ac,q)
p=B.ac[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|m.aP(2))>>>0
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
n=B.a.j(p,1)
s+=B.a.j(p,4)&4095
m.az(4-(n&7))}else if(o===0)throw A.f(A.q("TIFFFaxDecoder0"))
else if(o===15)throw A.f(A.q("TIFFFaxDecoder1"))
else{s+=B.a.j(p,5)&2047
m.az(10-o)
if((p&1)===0)r=!1}}return s},
d2(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.aP(4)
if(!(q<16))return A.a(B.a9,q)
p=B.a9[q]
o=p>>>5&2047
if(o===100){q=l.bR(9)
if(!(q<512))return A.a(B.a6,q)
p=B.a6[q]
n=B.a.j(p,1)&15
m=B.a.j(p,5)
if(n===12){l.az(5)
q=l.aP(4)
if(!(q<16))return A.a(B.B,q)
p=B.B[q]
m=B.a.j(p,1)
s+=B.a.j(p,4)&4095
l.az(4-(m&7))}else if(n===15)throw A.f(A.q("TIFFFaxDecoder2"))
else{s+=m&2047
l.az(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.aP(2)
if(!(q<4))return A.a(B.Y,q)
p=B.Y[q]
s+=p>>>5&2047
l.az(2-(p>>>1&15))}else{s+=o
l.az(4-(p>>>1&15))}r=!0}}return s},
fa(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.bR(12)!==1)throw A.f(A.q("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.bR(s)!==0)throw A.f(A.q(p))
if(s<4)if(q.bR(8)!==0)throw A.f(A.q(p))
for(;r=q.bR(8),r!==1;)if(r!==0)throw A.f(A.q(p))}if(q.at===0)return 1
else return q.aP(1)},
eQ(a,b,c){var s,r,q,p,o,n,m=this
t.dW.a(c)
s=m.e
r=m.d
q=m.y
p=q>0?q-1:0
p=b?(p&4294967294)>>>0:(p|1)>>>0
for(q=s.length,o=p;o<r;o+=2){if(!(o<q))return A.a(s,o)
n=s[o]
n.toString
a.toString
if(n>a){m.y=o
B.c.h(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.c.h(c,1,s[n])}},
b1(a,b,c,d){var s,r,q,p,o,n=8*b+A.x(c),m=n+d,l=B.a.j(n,3),k=n&7
if(k>0){s=B.a.W(1,7-k)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
p=r[q]
while(!0){if(!(s>0&&n<m))break
p=(p|s)>>>0
s=s>>>1;++n}a.h(0,l,p)}l=B.a.j(n,3)
for(r=m-7;n<r;l=o){o=l+1
J.H(a.a,a.d+l,255)
n+=8}for(;n<m;){l=B.a.j(n,3)
r=a.a
q=a.d+l
if(!(q>=0&&q<r.length))return A.a(r,q)
J.H(r,q,(r[q]|B.a.W(1,7-(n&7)))>>>0);++n}},
bR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.r
c===$&&A.c("data")
s=c.d
r=c.c-s-1
q=d.x
p=d.c
if(p===1){q.toString
c=c.a
p=s+q
o=c.length
if(!(p>=0&&p<o))return A.a(c,p)
n=c[p]
if(q===r){m=0
l=0}else{p=q+1
k=s+p
if(p===r){if(!(k>=0&&k<o))return A.a(c,k)
m=c[k]
l=0}else{if(!(k>=0&&k<o))return A.a(c,k)
m=c[k]
s+=q+2
if(!(s>=0&&s<o))return A.a(c,s)
l=c[s]}}}else if(p===2){q.toString
c=c.a
p=s+q
o=c.length
if(!(p>=0&&p<o))return A.a(c,p)
n=B.M[c[p]&255]
if(q===r){m=0
l=0}else{p=q+1
k=s+p
if(p===r){if(!(k>=0&&k<o))return A.a(c,k)
m=B.M[c[k]&255]
l=0}else{if(!(k>=0&&k<o))return A.a(c,k)
m=B.M[c[k]&255]
s+=q+2
if(!(s>=0&&s<o))return A.a(c,s)
l=B.M[c[s]&255]}}}else throw A.f(A.q("TIFFFaxDecoder7"))
c=d.w
c.toString
j=8-c
i=a-j
if(i>8){h=i-8
g=8}else{g=i
h=0}q.toString
c=d.x=q+1
if(!(j>=0&&j<9))return A.a(B.u,j)
f=B.a.W(n&B.u[j],i)
if(!(g>=0))return A.a(B.N,g)
e=B.a.Z(m&B.N[g],8-g)
if(h!==0){e=B.a.W(e,h)
if(!(h<9))return A.a(B.N,h)
e|=B.a.Z(l&B.N[h],8-h)
d.x=c+1
d.w=h}else if(g===8){d.w=0
d.x=c+1}else d.w=g
return(f|e)>>>0},
aP(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r
g===$&&A.c("data")
s=g.d
r=g.c-s-1
q=h.x
p=h.c
if(p===1){q.toString
g=g.a
p=s+q
o=g.length
if(!(p>=0&&p<o))return A.a(g,p)
n=g[p]
if(q===r)m=0
else{s+=q+1
if(!(s>=0&&s<o))return A.a(g,s)
m=g[s]}}else if(p===2){q.toString
g=g.a
p=s+q
o=g.length
if(!(p>=0&&p<o))return A.a(g,p)
n=B.M[g[p]&255]
if(q===r)m=0
else{s+=q+1
if(!(s>=0&&s<o))return A.a(g,s)
m=B.M[g[s]&255]}}else throw A.f(A.q("TIFFFaxDecoder7"))
g=h.w
g.toString
l=8-g
k=a-l
j=l-a
if(j>=0){if(!(l>=0&&l<9))return A.a(B.u,l)
i=B.a.Z(n&B.u[l],j)
g+=a
h.w=g
if(g===8){h.w=0
q.toString
h.x=q+1}}else{if(!(l>=0&&l<9))return A.a(B.u,l)
i=B.a.W(n&B.u[l],-j)
if(!(k>=0&&k<9))return A.a(B.N,k)
i=(i|B.a.Z(m&B.N[k],8-k))>>>0
q.toString
h.x=q+1
h.w=k}return i},
az(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s},
se9(a){this.e=t.k.a(a)},
se6(a){this.f=t.k.a(a)}}
A.iH.prototype={
hN(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=A.u(a2,a,0),a1=a2.p()
for(s=b.a,r=0;r<a1;++r){q=a2.p()
p=a2.p()
if(!(p<13))return A.a(B.a0,p)
o=B.a0[p]
n=B.a3[p]
m=a2.k()
if(m*n>4)l=a2.k()
else{l=a2.d
a2.d=l+4}k=new A.iG(q,o,m,l,a0)
s.h(0,q,k)
if(q===256){j=k.bn(0)
j=j==null?a:j.i(0)
b.b=j==null?0:j}else if(q===257){j=k.bn(0)
j=j==null?a:j.i(0)
b.c=j==null?0:j}else if(q===262){i=k.bn(0)
h=i==null?a:i.i(0)
if(h==null)h=17
if(h<17){if(!(h>=0))return A.a(B.bd,h)
b.d=B.bd[h]}else b.d=B.aA}else if(q===259){j=k.bn(0)
j=j==null?a:j.i(0)
b.e=j==null?0:j}else if(q===258){j=k.bn(0)
j=j==null?a:j.i(0)
b.f=j==null?0:j}else if(q===277){j=k.bn(0)
j=j==null?a:j.i(0)
b.r=j==null?0:j}else if(q===317){j=k.bn(0)
j=j==null?a:j.i(0)
b.z=j==null?0:j}else if(q===339){j=k.bn(0)
i=j==null?a:j.i(0)
if(i==null)i=0
if(!(i>=0&&i<4))return A.a(B.b9,i)
b.w=B.b9[i]}else if(q===320){i=k.bn(0)
if(i!=null){j=i.bv().buffer
g=B.a.U(j.byteLength-0,2)
b.sky(new Uint16Array(j,0,g))
b.id=0
j=b.go.length/3|0
b.k1=j
b.k2=j*2}}}f=b.go
j=f!=null
if(j&&b.d===B.aB)b.r=1
if(b.b===0||b.c===0)return
if(j&&b.f===8){e=f.length
for(r=0;r<e;++r)f[r]=f[r]>>>8}if(b.d===B.az)b.y=!0
if(s.aI(0,324)){b.ax=b.ce(322)
b.ay=b.ce(323)
b.sh0(b.d9(324))
b.sh_(b.d9(325))}else{b.ax=b.d8(322,b.b)
if(!s.aI(0,278))b.ay=b.d8(323,b.c)
else{d=b.ce(278)
if(d===-1)b.ay=b.c
else b.ay=d}b.sh0(b.d9(273))
b.sh_(b.d9(279))}j=b.b
c=b.ax
b.cx=B.a.aA(j+c-1,c)
c=b.c
j=b.ay
b.cy=B.a.aA(c+j-1,j)
b.dx=b.d8(266,1)
b.dy=b.ce(292)
b.fr=b.ce(293)
b.ce(338)
switch(b.d.a){case 0:case 1:s=b.f
if(s===1&&b.r===1)b.x=B.ay
else if(s===4&&b.r===1)b.x=B.jm
else if(B.a.a2(s,8)===0){s=b.r
if(s===1)b.x=B.jn
else if(s===2)b.x=B.jo
else b.x=B.af}break
case 2:if(B.a.a2(b.f,8)===0){s=b.r
if(s===3)b.x=B.bQ
else if(s===4)b.x=B.jq
else b.x=B.af}break
case 3:if(b.r===1)if(b.go!=null){s=b.f
s=s===4||s===8||s===16}else s=!1
else s=!1
if(s)b.x=B.jp
break
case 4:if(b.f===1&&b.r===1)b.x=B.ay
break
case 6:if(b.e===7&&b.f===8&&b.r===3)b.x=B.bQ
else{if(s.aI(0,530)){i=s.l(0,530).bn(0)
b.Q=i.i(0)
s=b.as=i.ad(0,1)}else s=b.as=b.Q=2
j=b.Q
j===$&&A.c("chromaSubH")
if(j*s===1)b.x=B.af
else if(b.f===8&&b.r===3)b.x=B.jr}break
default:if(B.a.a2(b.f,8)===0)b.x=B.af
break}},
bS(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.w,b=c===B.U,a=c===B.j
c=e.f
if(c===1)s=B.v
else if(c===2)s=B.w
else{if(c===4)c=B.x
else if(b&&c===16)c=B.A
else if(b&&c===32)c=B.E
else if(b&&c===64)c=B.H
else if(a&&c===8)c=B.I
else if(a&&c===16)c=B.J
else if(a&&c===32)c=B.K
else if(c===16)c=B.y
else c=c===32?B.F:B.e
s=c}r=e.go!=null&&e.d===B.aB
q=r?3:e.r
c=e.b
p=A.a5(d,d,s,0,B.h,e.c,d,0,q,d,c,r)
if(r){c=p.a
c=c==null?d:c.gP()
c.toString
o=e.go
n=o.length
m=n/3|0
for(l=0;l<m;++l){k=e.id
k===$&&A.c("colorMapRed")
k+=l
if(!(k<n))return A.a(o,k)
k=o[k]
j=e.k1
j===$&&A.c("colorMapGreen")
j+=l
if(!(j<n))return A.a(o,j)
j=o[j]
i=e.k2
i===$&&A.c("colorMapBlue")
i+=l
if(!(i<n))return A.a(o,i)
c.aY(l,k,j,o[i])}}h=0
g=0
while(!0){c=e.cy
c===$&&A.c("tilesY")
if(!(h<c))break
f=0
while(!0){c=e.cx
c===$&&A.c("tilesX")
if(!(f<c))break
e.iO(a1,p,f,h);++f;++g}++h}return p},
iO(b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null
if(b2.x===B.ay){b2.iB(b4,b5,b6,b7)
return}p=b2.cx
p===$&&A.c("tilesX")
o=b7*p+b6
p=b2.ch
if(!(o>=0&&o<p.length))return A.a(p,o)
b4.sfT(0,p[o])
p=b2.ax
n=b6*p
m=b2.ay
l=b7*m
k=b2.CW
if(!(o<k.length))return A.a(k,o)
s=k[o]
j=p*m*b2.r
p=b2.f
m=p===16
if(m)j*=2
else if(p===32)j*=4
r=null
if(p===8||m||p===32||p===64){p=b2.e
if(p===1)r=b4
else if(p===5){r=A.C(new Uint8Array(j),!1,b3,0)
q=A.oL()
try{J.qt(q,A.u(b4,s,0),r.a)}catch(i){}if(b2.z===2)for(h=0;h<b2.ay;++h){g=b2.r
p=b2.ax
f=g*(h*p+1)
e=p*g
for(;g<e;++g){p=r
m=p.a
p=p.d+f
if(!(p>=0&&p<m.length))return A.a(m,p)
k=m[p]
d=r
c=b2.r
b=d.a
c=d.d+(f-c)
if(!(c>=0&&c<b.length))return A.a(b,c)
J.H(m,p,k+b[c]);++f}}}else if(p===32773){r=A.C(new Uint8Array(j),!1,b3,0)
b2.eF(b4,j,r.a)}else if(p===32946){p=A.oz(b4.cO(0,0,s)).c
r=A.C(t.L.a(A.Q(p.c.buffer,0,p.a)),!1,b3,0)}else if(p===8)r=A.C(B.R.cF(A.cJ(t.L.a(b4.cO(0,0,s)),1,b3,0),!1),!1,b3,0)
else if(p===6){b2.jo(new A.hI().bS(0,t.D.a(b4.cO(0,0,s))),b5,n,l,b2.ax,b2.ay)
return}else throw A.f(A.q("Unsupported Compression Type: "+p))
a=l
a0=0
while(!0){if(!(a0<b2.ay&&a<b2.c))break
a1=n
a2=0
while(!0){if(!(a2<b2.ax&&a1<b2.b))break
p=b2.r
if(p===1){p=b2.w
if(p===B.U){p=b2.f
if(p===32){p=r.k()
$.X()[0]=p
p=$.c8()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else if(p===64)a3=r.ea()
else if(p===16){p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
a3=m[p]}else a3=0
p=b5.a
if(p!=null)p.aE(a1,a,a3)}else{m=b2.f
if(m===8)if(p===B.j){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.aP()[0]=p
p=$.aW()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a3=m[p]}else if(m===16)if(p===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else a3=r.p()
else if(m===32)if(p===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a3=p[0]}else a3=r.k()
else a3=0
if(b2.d===B.az){p=b5.a
a4=p==null?b3:p.gD()
a3=(a4==null?0:a4)-a3}p=b5.a
if(p!=null)p.aE(a1,a,a3)}}else if(p===2){p=b2.f
if(p===8){p=b2.w===B.j
if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.aP()[0]=m
m=$.aW()
if(0>=m.length)return A.a(m,0)
a5=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a5=k[m]}if(p){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.aP()[0]=p
p=$.aW()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a6=m[p]}}else if(p===16){if(b2.w===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.p()
if(b2.w===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.p()}else if(p===32){if(b2.w===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.k()
if(b2.w===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a6=p[0]}else a6=r.k()}else{a5=0
a6=0}p=b5.a
if(p!=null)p.S(a1,a,a5,a6,0)}else if(p===3){p=b2.w
if(p===B.U){p=b2.f
if(p===32){p=r.k()
m=$.X()
m[0]=p
p=$.c8()
if(0>=p.length)return A.a(p,0)
a7=p[0]
m[0]=r.k()
a8=p[0]
m[0]=r.k()
a9=p[0]}else if(p===64){a7=r.ea()
a8=0
a9=0}else if(p===16){p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
a9=m[p]}else{a7=0
a8=0
a9=0}p=b5.a
if(p!=null)p.S(a1,a,a7,a8,a9)}else{m=b2.f
if(m===8){p=p===B.j
if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.aP()[0]=m
m=$.aW()
if(0>=m.length)return A.a(m,0)
a7=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a7=k[m]}if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.aP()[0]=m
m=$.aW()
if(0>=m.length)return A.a(m,0)
a8=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a8=k[m]}if(p){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.aP()[0]=p
p=$.aW()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
a9=m[p]}}else if(m===16){if(p===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.p()
if(b2.w===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.p()
if(b2.w===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.p()}else if(m===32){if(p===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b2.w===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b2.w===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()}else{a7=0
a8=0
a9=0}p=b5.a
if(p!=null)p.S(a1,a,a7,a8,a9)}}else if(p>=4){p=b2.w
if(p===B.U){p=b2.f
if(p===32){p=r.k()
m=$.X()
m[0]=p
p=$.c8()
if(0>=p.length)return A.a(p,0)
a7=p[0]
m[0]=r.k()
a8=p[0]
m[0]=r.k()
a9=p[0]
m[0]=r.k()
b0=p[0]}else if(p===64){a7=r.ea()
a8=0
a9=0
b0=0}else if(p===16){p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
a7=m[p]
p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
a8=m[p]
p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
a9=m[p]
p=r.p()
m=$.Z
m=m!=null?m:A.a4()
if(!(p<m.length))return A.a(m,p)
b0=m[p]}else{a7=0
a8=0
a9=0
b0=0}p=b5.a
if(p!=null)p.al(a1,a,a7,a8,a9,b0)}else{m=b2.f
if(m===8){p=p===B.j
if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.aP()[0]=m
m=$.aW()
if(0>=m.length)return A.a(m,0)
a7=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a7=k[m]}if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.aP()[0]=m
m=$.aW()
if(0>=m.length)return A.a(m,0)
a8=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a8=k[m]}if(p){m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
m=k[m]
$.aP()[0]=m
m=$.aW()
if(0>=m.length)return A.a(m,0)
a9=m[0]}else{m=r
k=m.a
m=m.d++
if(!(m>=0&&m<k.length))return A.a(k,m)
a9=k[m]}if(p){p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
p=m[p]
$.aP()[0]=p
p=$.aW()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else{p=r
m=p.a
p=p.d++
if(!(p>=0&&p<m.length))return A.a(m,p)
b0=m[p]}}else if(m===16){if(p===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.p()
if(b2.w===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.p()
if(b2.w===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.p()
if(b2.w===B.j){p=r.p()
$.aO()[0]=p
p=$.aV()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.p()}else if(m===32){if(p===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.k()
if(b2.w===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.k()
if(b2.w===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.k()
if(b2.w===B.j){p=r.k()
$.X()[0]=p
p=$.ao()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.k()}else{a7=0
a8=0
a9=0
b0=0}if(b2.d===B.bR){b1=A.pT(a7,a8,a9,b0)
a7=b1[0]
a8=b1[1]
a9=b1[2]
p=b5.a
b0=p==null?b3:p.gD()
if(b0==null)b0=0}p=b5.a
if(p!=null)p.al(a1,a,a7,a8,a9,b0)}}++a2;++a1}++a0;++a}}else throw A.f(A.q("Unsupported bitsPerSample: "+p))},
jo(a,b,c,d,e,f){var s,r,q,p
for(s=0;s<f;++s)for(r=s+d,q=0;q<e;++q){p=a.a
p=p==null?null:p.K(q,s,null)
if(p==null)p=new A.R()
b.bO(q+c,r,p)}},
iB(a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=a4.cx
a6===$&&A.c("tilesX")
r=b0*a6+a9
a6=a4.ch
if(!(r>=0&&r<a6.length))return A.a(a6,r)
a7.sfT(0,a6[r])
a6=a4.ax
q=a9*a6
p=a4.ay
o=b0*p
n=a4.CW
if(!(r<n.length))return A.a(n,r)
m=n[r]
s=null
n=a4.e
if(n===32773){l=B.a.a2(a6,8)===0?B.a.U(a6,8)*p:(B.a.U(a6,8)+1)*p
s=A.C(new Uint8Array(a6*p),!1,a5,0)
a4.eF(a7,l,s.a)}else if(n===5){s=A.C(new Uint8Array(a6*p),!1,a5,0)
A.oL().fG(0,A.u(a7,m,0),s.a)
if(a4.z===2)for(k=0;k<a4.c;++k){j=a4.r
i=j*(k*a4.b+1)
for(;a6=a4.b,p=a4.r,j<a6*p;++j){a6=s
n=a6.a
a6=a6.d+i
if(!(a6>=0&&a6<n.length))return A.a(n,a6)
h=n[a6]
g=s
f=g.a
p=g.d+(i-p)
if(!(p>=0&&p<f.length))return A.a(f,p)
J.H(n,a6,h+f[p]);++i}}}else if(n===2){s=A.C(new Uint8Array(a6*p),!1,a5,0)
try{A.nt(a4.dx,a6,p).kL(s,a7,0,a4.ay)}catch(e){}}else if(n===3){s=A.C(new Uint8Array(a6*p),!1,a5,0)
try{A.nt(a4.dx,a6,p).kM(s,a7,0,a4.ay,a4.dy)}catch(e){}}else if(n===4){s=A.C(new Uint8Array(a6*p),!1,a5,0)
try{A.nt(a4.dx,a6,p).kP(s,a7,0,a4.ay,a4.fr)}catch(e){}}else if(n===8)s=A.C(B.R.cF(A.cJ(t.L.a(a7.cO(0,0,m)),1,a5,0),!1),!1,a5,0)
else if(n===32946){a6=A.oz(a7.cO(0,0,m)).c
s=A.C(t.L.a(A.Q(a6.c.buffer,0,a6.a)),!1,a5,0)}else if(n===1)s=a7
else throw A.f(A.q("Unsupported Compression Type: "+n))
d=new A.ll(s)
c=a8.gD()
a6=a4.y
b=a6?c:0
a=a6?0:c
for(a0=o,a1=0;a1<a4.ay;++a1,++a0){for(a2=q,a3=0;a3<a4.ax;++a3,++a2){a6=a8.a
p=a6==null
n=p?a5:a6.b
if(a0<(n==null?0:n)){a6=p?a5:a6.a
a6=a2>=(a6==null?0:a6)}else a6=!0
if(a6)break
a6=d.aa(1)
p=a8.a
if(a6===0){if(p!=null)p.S(a2,a0,b,0,0)}else if(p!=null)p.S(a2,a0,a,0,0)}d.c=0}},
eF(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
t.L.a(c)
for(s=J.ah(c),r=0,q=0;q<b;){p=r+1
o=a.a
n=a.d
m=n+r
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
$.aP()[0]=m
m=$.aW()
if(0>=m.length)return A.a(m,0)
k=m[0]
if(k>=0&&k<=127)for(o=k+1,r=p,j=0;j<o;++j,q=i,r=p){i=q+1
p=r+1
n=a.a
m=a.d+r
if(!(m>=0&&m<n.length))return A.a(n,m)
s.h(c,q,n[m])}else{m=k<=-1&&k>=-127
r=p+1
if(m){n+=p
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
for(o=-k+1,j=0;j<o;++j,q=i){i=q+1
s.h(c,q,n)}}}}},
d8(a,b){var s=this.a
if(!s.aI(0,a))return b
s=s.l(0,a).bn(0)
s=s==null?null:s.i(0)
return s==null?0:s},
ce(a){return this.d8(a,0)},
d9(a){var s,r=this.a
if(!r.aI(0,a))return null
s=r.l(0,a)
r=s.bn(0)
r.toString
return A.nf(s.c,r.gbM(r),t.p)},
sh0(a){this.ch=t.T.a(a)},
sh_(a){this.CW=t.T.a(a)},
sky(a){this.go=t.T.a(a)}}
A.d0.prototype={
aj(){return"TiffFormat."+this.b}}
A.al.prototype={
aj(){return"TiffPhotometricType."+this.b}}
A.bd.prototype={
aj(){return"TiffImageType."+this.b}}
A.iI.prototype={$ia3:1}
A.kN.prototype={
fG(a,b,c){var s,r,q,p,o,n,m,l,k=this,j="_out",i="_bufferLength"
t.L.a(c)
k.shV(c)
s=c.length
k.w=0
r=t.D.a(b.a)
k.e=r
q=k.f=r.length
k.b=b.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.f(A.q("Invalid LZW Data"))
k.eY()
k.d=k.c=0
p=k.dR()
r=k.x
o=0
while(!0){if(!(p!==257&&k.w<s))break
if(p===256){k.eY()
p=k.dR()
k.as=0
if(p===257)break
q=k.r
q===$&&A.c(j)
J.H(q,k.w++,p)
o=p}else{q=k.Q
q.toString
if(p<q){k.eR(p)
q=k.as
q===$&&A.c(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.c(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.H(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.em(o,r[q])}else{k.eR(o)
q=k.as
q===$&&A.c(i)
n=q-1
for(;n>=0;--n){q=k.r
q===$&&A.c(j)
m=k.w++
if(!(n<4096))return A.a(r,n)
J.H(q,m,r[n])}q=k.r
q===$&&A.c(j)
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.H(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.em(o,r[l])}o=p}p=k.dR()}},
em(a,b){var s,r=this,q=r.y
q===$&&A.c("_table")
s=r.Q
s.toString
if(!(s<4096))return A.a(q,s)
q[s]=b
q=r.z
q===$&&A.c("_prefix")
q[s]=a
s=r.Q=s+1
if(s===511)r.a=10
else if(s===1023)r.a=11
else if(s===2047)r.a=12},
eR(a){var s,r,q,p,o,n,m,l=this
l.as=0
s=l.x
l.as=1
r=l.y
r===$&&A.c("_table")
if(!(a<4096))return A.a(r,a)
s[0]=r[a]
q=l.z
q===$&&A.c("_prefix")
p=q[a]
for(o=1;p!==4098;o=n){n=o+1
l.as=n
if(!(p>=0&&p<4096))return A.a(r,p)
m=r[p]
if(!(o<4096))return A.a(s,o)
s[o]=m
p=q[p]}},
dR(){var s,r,q,p,o=this,n=o.b,m=o.f
m===$&&A.c("_dataLength")
if(n>=m)return 257
for(;s=o.d,r=o.a,s<r;n=p){if(n>=m)return 257
r=o.c
q=o.e
q===$&&A.c("_data")
p=n+1
o.b=p
if(!(n>=0&&n<q.length))return A.a(q,n)
o.c=(r<<8>>>0)+q[n]>>>0
o.d=s+8}n=s-r
o.d=n
n=B.a.Z(o.c,n)
r-=9
if(!(r>=0&&r<4))return A.a(B.b2,r)
return n&B.b2[r]},
eY(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.Q.aL(s,0,4096,4098)
for(s=q.y,r=0;r<256;++r)s[r]=r
q.a=9
q.Q=258},
shV(a){this.r=t.L.a(a)}}
A.lm.prototype={
ap(a){var s,r,q=this.a
if(q==null)return null
q=q.f
if(!(a<q.length))return A.a(q,a)
q=q[a]
s=this.c
s===$&&A.c("_input")
r=q.bS(0,s)
return r},
b3(a,b,c){var s=this,r=A.C(b,!1,null,0)
s.c=r
r=s.fc(r)
s.a=r
if(r==null)return null
return s.ap(0)},
fc(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=A.b([],t.fZ),g=new A.iI(h),f=a.p()
if(f!==18761&&f!==19789)return i
if(f===19789)a.e=!0
else a.e=!1
q=a.p()
g.d=q
if(q!==42)return i
p=a.k()
o=A.u(a,i,0)
o.d=p
s=o
for(q=t.p,n=t.e8;p!==0;){r=null
try{m=new A.iH(A.a_(q,n),B.aA,B.bP,B.js)
m.hN(s)
r=m
l=r
if(!(l.b!==0&&l.c!==0))break}catch(k){break}B.c.H(h,r)
l=h.length
if(l===1){if(0>=l)return A.a(h,0)
j=h[0]
g.a=j.b
if(0>=l)return A.a(h,0)
g.b=j.c}p=s.k()
if(p!==0)s.d=p}return h.length!==0?g:i}}
A.lw.prototype={
cG(){var s,r=this.a,q=r.bo()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.bo()!==2752925)return!1
s=this.b
s.a=r.p()
s.b=r.p()
return!0},
bI(a){var s,r,q=this,p=null
if(!q.je())return p
s=q.b
r=s.a
q.d=A.a5(p,p,B.e,0,B.h,s.b,p,0,4,p,r,!1)
q.jj()
if(!q.jB())return p
return q.d},
je(){var s,r,q,p,o=this
if(!o.cG())return!1
o.fr=A.tm()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.c.h(s,r,new A.iU(q,p,new Int32Array(2)))}o.y=o.Q=0
s=o.b
q=s.a
o.z=q
s=s.b
o.as=s
o.at=q+15>>>4
o.ax=s+15>>>4
o.k1=0
s=o.a
q=o.f
p=q.d
p===$&&A.c("partitionLength")
p=A.pc(s.af(p))
o.c=p
s.d+=q.d
p.Y(1)
o.c.Y(1)
o.jH(o.x,o.fr)
o.jA()
if(!o.jD(s))return!1
o.jF()
o.c.Y(1)
o.jE()
return!0},
jH(a,b){var s,r,q,p=this,o=p.c
o===$&&A.c("br")
o=o.Y(1)!==0
a.a=o
if(o){a.b=p.c.Y(1)!==0
if(p.c.Y(1)!==0){a.c=p.c.Y(1)!==0
for(o=a.d,s=0;s<4;++s){if(p.c.Y(1)!==0){r=p.c
q=r.Y(7)
r=r.Y(1)===1?-q:q}else r=0
o[s]=r}for(o=a.e,s=0;s<4;++s){if(p.c.Y(1)!==0){r=p.c
q=r.Y(6)
r=r.Y(1)===1?-q:q}else r=0
o[s]=r}}if(a.b)for(s=0;s<3;++s){o=b.a
o[s]=p.c.Y(1)!==0?p.c.Y(8):255}}else a.b=!1
return!0},
jA(){var s,r,q,p=this,o=p.w,n=p.c
n===$&&A.c("br")
o.a=n.Y(1)!==0
o.b=p.c.Y(6)
o.c=p.c.Y(3)
n=p.c.Y(1)!==0
o.d=n
if(n)if(p.c.Y(1)!==0){for(n=o.e,s=0;s<4;++s)if(p.c.Y(1)!==0){r=p.c
q=r.Y(6)
n[s]=r.Y(1)===1?-q:q}for(n=o.f,s=0;s<4;++s)if(p.c.Y(1)!==0){r=p.c
q=r.Y(6)
n[s]=r.Y(1)===1?-q:q}}if(o.b===0)n=0
else n=o.a?1:2
p.bh=n
return!0},
jD(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c-a.d,g=this.c
g===$&&A.c("br")
g=B.a.O(1,g.Y(2))
this.cy=g
s=g-1
r=s*3
if(h<r)return!1
for(g=this.db,q=0,p=0;p<s;++p,r=i){o=a.cZ(3,q)
n=o.a
m=o.d
l=n.length
if(!(m>=0&&m<l))return A.a(n,m)
k=n[m]
j=m+1
if(!(j<l))return A.a(n,j)
j=n[j]
m+=2
if(!(m<l))return A.a(n,m)
i=r+((k|j<<8|n[m]<<16)>>>0)
if(i>h)i=h
n=new A.fc(a.bX(i-r,r))
n.b=254
n.c=0
n.d=-8
B.c.h(g,p,n)
q+=3}B.c.h(g,s,A.pc(a.bX(h-r,a.d-a.b+r)))
return r<h},
jF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.c("br")
s=e.Y(7)
r=f.c.Y(1)!==0?f.c.cm(4):0
q=f.c.Y(1)!==0?f.c.cm(4):0
p=f.c.Y(1)!==0?f.c.cm(4):0
o=f.c.Y(1)!==0?f.c.cm(4):0
n=f.c.Y(1)!==0?f.c.cm(4):0
m=f.x
for(e=f.dy,l=m.d,k=0;k<4;++k){if(m.a){j=l[k]
if(!m.c)j+=s}else{if(k>0){i=e[0]
if(!(k>=0&&k<4))return A.a(e,k)
e[k]=i
continue}j=s}h=e[k]
i=h.a
g=j+r
if(g<0)g=0
else if(g>127)g=127
i[0]=B.at[g]
if(j<0)g=0
else g=j>127?127:j
i[1]=B.as[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
g[0]=B.at[i]*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.as[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
i[0]=B.at[g]
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.as[g]}},
jE(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.c("br")
n=o.a1(B.dL[s][r][q][p])!==0?m.c.Y(8):B.i6[s][r][q][p]
o=l.b
if(!(s<o.length))return A.a(o,s)
o=o[s]
if(!(r<o.length))return A.a(o,r)
o=o[r].a
if(!(q<o.length))return A.a(o,q)
o[q][p]=n}o=m.c
o===$&&A.c("br")
o=o.Y(1)!==0
m.fx=o
if(o)m.fy=m.c.Y(8)},
jK(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.bh
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.aR
m===$&&A.c("_fStrengths")
if(!(o<m.length))return A.a(m,o)
k=m[o][l]
m=s.d
m===$&&A.c("useLfDelta")
if(m){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){m=s.c
m===$&&A.c("sharpness")
if(m>0){i=m>4?B.a.j(j,2):B.a.j(j,1)
h=9-m
if(i>h)i=h}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
jj(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.b,e=f.at
if(e!=null)h.bU=e
s=J.aD(4,t.jz)
for(e=t.by,r=0;r<4;++r)s[r]=A.b([new A.bY(),new A.bY()],e)
h.si3(t.mL.a(s))
e=h.at
e.toString
s=J.aD(e,t.ij)
for(q=0;q<e;++q){p=new Uint8Array(16)
o=new Uint8Array(8)
s[q]=new A.fg(p,o,new Uint8Array(8))}h.si6(t.f4.a(s))
h.ok=new Uint8Array(832)
e=h.at
e.toString
h.go=new Uint8Array(4*e)
p=h.p4=16*e
o=h.R8=8*e
n=h.bh
n.toString
if(!(n<3))return A.a(B.X,n)
m=B.X[n]
l=m*p
k=(m/2|0)*o
h.p1=A.C(new Uint8Array(16*p+l),!1,g,l)
p=8*o+k
h.p2=A.C(new Uint8Array(p),!1,g,k)
h.p3=A.C(new Uint8Array(p),!1,g,k)
f=f.a
h.RG=A.C(new Uint8Array(f),!1,g,0)
j=f+1>>>1
h.rx=A.C(new Uint8Array(j),!1,g,0)
h.ry=A.C(new Uint8Array(j),!1,g,0)
if(n===2)h.ch=h.ay=0
else{f=h.y
f===$&&A.c("_cropLeft")
f=B.a.U(f-m,16)
h.ay=f
p=h.Q
p.toString
p=B.a.U(p-m,16)
h.ch=p
if(f<0)h.ay=0
if(p<0)h.ch=0}f=h.as
f.toString
f=B.a.U(f+15+m,16)
h.cx=f
p=h.z
p===$&&A.c("_cropRight")
p=B.a.U(p+15+m,16)
h.CW=p
if(p>e)h.CW=e
p=h.ax
p.toString
if(f>p)h.cx=p
i=e+1
s=J.aD(i,t.f_)
for(q=0;q<i;++q)s[q]=new A.fe()
h.si5(t.jt.a(s))
f=h.at
f.toString
s=J.aD(f,t.h2)
for(q=0;q<f;++q){e=new Int16Array(384)
s[q]=new A.ff(e,new Uint8Array(16))}h.si4(t.as.a(s))
f=h.at
f.toString
h.si2(t.kb.a(A.am(f,g,!1,t.fA)))
h.jK()
A.rO()
h.e=new A.lx()
return!0},
jB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="isIntra4x4"
e.y2=0
s=e.id
r=e.x
q=e.db
p=0
while(!0){o=e.cx
o.toString
if(!(p<o))break
o=e.cy
o===$&&A.c("_numPartitions")
o=(p&o-1)>>>0
if(!(o>=0&&o<8))return A.a(q,o)
n=q[o]
while(!0){p=e.y1
o=e.at
o.toString
if(!(p<o))break
o=e.k3
o===$&&A.c("_mbInfo")
m=o.length
if(0>=m)return A.a(o,0)
l=o[0]
k=1+p
if(!(k<m))return A.a(o,k)
j=o[k]
k=e.aQ
k===$&&A.c("_mbData")
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.c("br")
p=p.a1(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.a1(m.a[1]):2+o.a1(m.a[2])}p=e.fx
p===$&&A.c("_useSkipProba")
if(p){p=e.c
p===$&&A.c("br")
o=e.fy
o===$&&A.c("_skipP")
h=p.a1(o)!==0}else h=!1
e.jC()
if(!h)h=e.jG(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.c(d)
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.bh
p.toString
if(p>0){p=e.k4
p===$&&A.c("_fInfo")
o=e.y1
m=e.aR
m===$&&A.c("_fStrengths")
k=e.k1
k===$&&A.c("_segment")
if(!(k<m.length))return A.a(m,k)
k=m[k]
m=i.b
m===$&&A.c(d)
B.c.h(p,o,k[m?1:0])
p=e.k4
o=e.y1
if(!(o<p.length))return A.a(p,o)
g=p[o]
g.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.c("_mbInfo")
if(0>=p.length)return A.a(p,0)
p=p[0]
p.b=p.a=0
B.k.aL(s,0,4,0)
e.y1=0
e.kg()
p=e.bh
p.toString
if(p>0){p=e.y2
o=e.ch
o===$&&A.c("_tlMbY")
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}else f=!1}else f=!1
if(!e.ja(f))return!1
p=++e.y2}return!0},
kg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5="_dsp",a6=a3.y2,a7=a3.ok
a7===$&&A.c("_yuvBlock")
s=A.C(a7,!1,a4,40)
r=A.C(a7,!1,a4,584)
q=A.C(a7,!1,a4,600)
a7=a6>0
p=0
while(!0){o=a3.at
o.toString
if(!(p<o))break
o=a3.aQ
o===$&&A.c("_mbData")
if(!(p<o.length))return A.a(o,p)
n=o[p]
if(p>0){for(m=-1;m<16;++m){o=m*32
s.bl(o-4,4,s,o+12)}for(m=-1;m<8;++m){o=m*32
l=o-4
o+=4
r.bl(l,4,r,o)
q.bl(l,4,q,o)}}else{for(m=0;m<16;++m)J.H(s.a,s.d+(m*32-1),129)
for(m=0;m<8;++m){o=m*32-1
J.H(r.a,r.d+o,129)
J.H(q.a,q.d+o,129)}if(a7){J.H(q.a,q.d+-33,129)
J.H(r.a,r.d+-33,129)
J.H(s.a,s.d+-33,129)}}o=a3.k2
o===$&&A.c("_yuvT")
if(!(p<o.length))return A.a(o,p)
k=o[p]
j=n.a
i=n.e
if(a7){s.bV(-32,16,k.a)
r.bV(-32,8,k.b)
q.bV(-32,8,k.c)}else if(p===0){o=s.a
l=s.d+-33
J.bG(o,l,l+21,127)
l=r.a
o=r.d+-33
J.bG(l,o,o+9,127)
o=q.a
l=q.d+-33
J.bG(o,l,l+9,127)}o=n.b
o===$&&A.c("isIntra4x4")
if(o){h=A.u(s,a4,-16)
g=h.cQ()
if(a7){o=a3.at
o.toString
if(p>=o-1){o=k.a[15]
l=h.a
f=h.d
J.bG(l,f,f+4,o)}else{o=a3.k2
l=p+1
if(!(l<o.length))return A.a(o,l)
h.bV(0,4,o[l].a)}}o=g.length
if(0>=o)return A.a(g,0)
e=g[0]
if(96>=o)return A.a(g,96)
g[96]=e
g[64]=e
g[32]=e
for(o=n.c,d=0;d<16;++d,i=i<<2>>>0){c=A.u(s,a4,B.bq[d])
l=o[d]
if(!(l<10))return A.a(B.by,l)
B.by[l].$1(c)
i.toString
l=d*16
a3.eI(i,new A.as(j,l,384,l,!1),c)}}else{o=A.pf(p,a6,n.c[0])
o.toString
if(!(o<7))return A.a(B.bb,o)
B.bb[o].$1(s)
if(i!==0)for(d=0;d<16;++d,i=i<<2>>>0){c=A.u(s,a4,B.bq[d])
i.toString
o=d*16
a3.eI(i,new A.as(j,o,384,o,!1),c)}}o=n.f
o===$&&A.c("nonZeroUV")
l=A.pf(p,a6,n.d)
l.toString
if(!(l<7))return A.a(B.an,l)
B.an[l].$1(r)
B.an[l].$1(q)
b=new A.as(j,256,384,256,!1)
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.bC(b,r)
l.bC(A.u(b,a4,16),A.u(r,a4,4))
f=A.u(b,a4,32)
a=A.u(r,a4,128)
l.bC(f,a)
l.bC(A.u(f,a4,16),A.u(a,a4,4))}else{l===$&&A.c(a5)
l.h3(b,r)}}a0=new A.as(j,320,384,320,!1)
o=o>>>8
if((o&255)!==0){l=a3.e
if((o&170)!==0){l===$&&A.c(a5)
l.bC(a0,q)
l.bC(A.u(a0,a4,16),A.u(q,a4,4))
o=A.u(a0,a4,32)
f=A.u(q,a4,128)
l.bC(o,f)
l.bC(A.u(o,a4,16),A.u(f,a4,4))}else{l===$&&A.c(a5)
l.h3(a0,q)}}o=a3.ax
o.toString
if(a6<o-1){B.k.ai(k.a,0,16,s.a_(),480)
B.k.ai(k.b,0,8,r.a_(),224)
B.k.ai(k.c,0,8,q.a_(),224)}a1=p*16
a2=p*8
for(m=0;m<16;++m){o=a3.p4
o.toString
l=a3.p1
l===$&&A.c("_cacheY")
l.bl(a1+m*o,16,s,m*32)}for(m=0;m<8;++m){o=a3.R8
o.toString
l=a3.p2
l===$&&A.c("_cacheU")
f=m*32
l.bl(a2+m*o,8,r,f)
o=a3.R8
o.toString
l=a3.p3
l===$&&A.c("_cacheV")
l.bl(a2+m*o,8,q,f)}++p}},
eI(a,b,c){var s,r,q,p,o,n,m,l,k="_dsp"
switch(a>>>30){case 3:s=this.e
s===$&&A.c(k)
s.lu(0,b,c,!1)
break
case 2:this.e===$&&A.c(k)
s=b.a
r=b.d
q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
p=s[r]+4
r+=4
if(!(r<q))return A.a(s,r)
o=B.a.ar(B.a.j(s[r]*35468,16),32)
r=b.a
s=b.d+4
if(!(s>=0&&s<r.length))return A.a(r,s)
n=B.a.ar(B.a.j(r[s]*85627,16),32)
s=b.a
r=b.d+1
if(!(r>=0&&r<s.length))return A.a(s,r)
m=B.a.ar(B.a.j(s[r]*35468,16),32)
r=b.a
s=b.d+1
if(!(s>=0&&s<r.length))return A.a(r,s)
l=B.a.ar(B.a.j(r[s]*85627,16),32)
A.lz(c,0,p+n,l,m)
A.lz(c,1,p+o,l,m)
A.lz(c,2,p-o,l,m)
A.lz(c,3,p-n,l,m)
break
case 1:s=this.e
s===$&&A.c(k)
s.cR(b,c)
break
default:break}},
iX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="_dsp",e=h.p4,d=h.k4
d===$&&A.c("_fInfo")
if(!(a>=0&&a<d.length))return A.a(d,a)
d=d[a]
d.toString
s=h.p1
s===$&&A.c("_cacheY")
r=A.u(s,g,a*16)
q=d.b
p=d.a
if(p===0)return
if(h.bh===1){if(a>0){s=h.e
s===$&&A.c(f)
e.toString
s.ef(r,e,p+4)}if(d.c){s=h.e
s===$&&A.c(f)
e.toString
s.hf(r,e,p)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
s.eg(r,e,p+4)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.hg(r,e,p)}}else{o=h.R8
s=h.p2
s===$&&A.c("_cacheU")
n=a*8
m=A.u(s,g,n)
s=h.p3
s===$&&A.c("_cacheV")
l=A.u(s,g,n)
k=d.d
if(a>0){s=h.e
s===$&&A.c(f)
e.toString
n=p+4
s.cb(r,1,e,16,n,q,k)
o.toString
s.cb(m,1,o,8,n,q,k)
s.cb(l,1,o,8,n,q,k)}if(d.c){s=h.e
s===$&&A.c(f)
e.toString
s.l_(r,e,p,q,k)
o.toString
j=A.u(m,g,4)
i=A.u(l,g,4)
s.ca(j,1,o,8,p,q,k)
s.ca(i,1,o,8,p,q,k)}if(b>0){s=h.e
s===$&&A.c(f)
e.toString
n=p+4
s.cb(r,e,1,16,n,q,k)
o.toString
s.cb(m,o,1,8,n,q,k)
s.cb(l,o,1,8,n,q,k)}if(d.c){d=h.e
d===$&&A.c(f)
e.toString
d.lx(r,e,p,q,k)
o.toString
s=4*o
j=A.u(m,g,s)
i=A.u(l,g,s)
d.ca(j,o,1,8,p,q,k)
d.ca(i,o,1,8,p,q,k)}}},
j7(){var s,r=this,q=r.ay
q===$&&A.c("_tlMbX")
s=q
while(!0){q=r.CW
q.toString
if(!(s<q))break
r.iX(s,r.y2);++s}},
ja(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.bh
a0.toString
if(!(a0<3))return A.a(B.X,a0)
s=B.X[a0]
a0=b.p4
a0.toString
r=s*a0
a0=b.R8
a0.toString
q=(s/2|0)*a0
a0=b.p1
a0===$&&A.c("_cacheY")
p=-r
o=A.u(a0,a,p)
a0=b.p2
a0===$&&A.c("_cacheU")
n=-q
m=A.u(a0,a,n)
a0=b.p3
a0===$&&A.c("_cacheV")
l=A.u(a0,a,n)
k=b.y2
a0=b.cx
a0.toString
j=k*16
i=(k+1)*16
if(a1)b.j7()
if(k!==0){j-=s
b.to=A.u(o,a,0)
b.x1=A.u(m,a,0)
b.x2=A.u(l,a,0)}else{b.to=A.u(b.p1,a,0)
b.x1=A.u(b.p2,a,0)
b.x2=A.u(b.p3,a,0)}a0=k<a0-1
if(a0)i-=s
h=b.as
h.toString
if(i>h)i=h
b.xr=null
if(b.bU!=null&&j<i){h=b.xr=b.iP(j,i-j)
if(h==null)return!1}else h=a
g=b.Q
g.toString
if(j<g){f=g-j
e=b.to
e===$&&A.c("_y")
d=e.d
c=b.p4
c.toString
e.d=d+c*f
c=b.x1
c===$&&A.c("_u")
d=c.d
e=b.R8
e.toString
e*=B.a.j(f,1)
c.d=d+e
d=b.x2
d===$&&A.c("_v")
d.d+=e
if(h!=null)h.d=h.d+b.b.a*f
j=g}if(j<i){e=b.to
e===$&&A.c("_y")
d=e.d
c=b.y
c===$&&A.c("_cropLeft")
e.d=d+c
d=b.x1
d===$&&A.c("_u")
e=c>>>1
d.d=d.d+e
d=b.x2
d===$&&A.c("_v")
d.d+=e
if(h!=null)h.d+=c
h=b.z
h===$&&A.c("_cropRight")
b.jP(0,j-g,h-c,i-j)}if(a0){a0=b.p1
h=b.p4
h.toString
a0.bl(p,r,o,16*h)
h=b.p2
p=b.R8
p.toString
h.bl(n,q,m,8*p)
p=b.p3
h=b.R8
h.toString
p.bl(n,q,l,8*h)}return!0},
jP(a,b,c,d){if(c<=0||d<=0)return!1
this.iZ(b,c,d)
this.iY(b,c,d)
return!0},
dD(a){var s
if((a&-4194304)>>>0===0)s=B.a.j(a,14)
else s=a<0?0:255
return s},
df(a,b,c,d){var s=19077*a
d.h(0,0,this.dD(s+26149*c+-3644112))
d.h(0,1,this.dD(s-6419*b-13320*c+2229552))
d.h(0,2,this.dD(s+33050*b+-4527440))},
de(a6,a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=new A.lJ(),a2=b4-1,a3=B.a.j(a2,1),a4=a8.a,a5=a8.d
if(!(a5>=0&&a5<a4.length))return A.a(a4,a5)
a5=a4[a5]
a4=a9.a
s=a9.d
if(!(s>=0&&s<a4.length))return A.a(a4,s)
r=a1.$2(a5,a4[s])
s=b0.a
a4=b0.d
if(!(a4>=0&&a4<s.length))return A.a(s,a4)
a4=s[a4]
s=b1.a
a5=b1.d
if(!(a5>=0&&a5<s.length))return A.a(s,a5)
q=a1.$2(a4,s[a5])
p=B.a.j(3*r+q+131074,2)
a5=a6.a
s=a6.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
a.df(a5[s],p&255,p>>>16,b2)
b2.h(0,3,255)
a4=a7!=null
if(a4){p=B.a.j(3*q+r+131074,2)
a5=a7.a
s=a7.d
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
b3.toString
a.df(s,p&255,p>>>16,b3)
b3.h(0,3,255)}for(o=1;o<=a3;++o,q=l,r=m){a5=a8.a
s=a8.d+o
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a9.a
n=a9.d+o
if(!(n>=0&&n<a5.length))return A.a(a5,n)
m=a1.$2(s,a5[n])
n=b0.a
a5=b0.d+o
if(!(a5>=0&&a5<n.length))return A.a(n,a5)
a5=n[a5]
n=b1.a
s=b1.d+o
if(!(s>=0&&s<n.length))return A.a(n,s)
l=a1.$2(a5,n[s])
k=r+m+q+l+524296
j=B.a.j(k+2*(m+q),3)
i=B.a.j(k+2*(r+l),3)
p=B.a.j(j+r,1)
h=B.a.j(i+m,1)
s=2*o
n=s-1
a5=a6.a
g=a6.d+n
if(!(g>=0&&g<a5.length))return A.a(a5,g)
g=a5[g]
a5=p&255
f=p>>>16
e=n*4
d=A.u(b2,a0,e)
g=19077*g
c=g+26149*f+-3644112
if((c&-4194304)>>>0===0)b=B.a.j(c,14)
else b=c<0?0:255
J.H(d.a,d.d,b)
f=g-6419*a5-13320*f+2229552
if((f&-4194304)>>>0===0)b=B.a.j(f,14)
else b=f<0?0:255
J.H(d.a,d.d+1,b)
a5=g+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.H(d.a,d.d+2,b)
J.H(d.a,d.d+3,255)
a5=s-0
g=a6.a
f=a6.d+a5
if(!(f>=0&&f<g.length))return A.a(g,f)
f=g[f]
g=h&255
d=h>>>16
a5=A.u(b2,a0,a5*4)
f=19077*f
c=f+26149*d+-3644112
if((c&-4194304)>>>0===0)b=B.a.j(c,14)
else b=c<0?0:255
J.H(a5.a,a5.d,b)
d=f-6419*g-13320*d+2229552
if((d&-4194304)>>>0===0)b=B.a.j(d,14)
else b=d<0?0:255
J.H(a5.a,a5.d+1,b)
g=f+33050*g+-4527440
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.H(a5.a,a5.d+2,b)
J.H(a5.a,a5.d+3,255)
if(a4){p=B.a.j(i+q,1)
h=B.a.j(j+l,1)
a5=a7.a
n=a7.d+n
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=p&255
g=p>>>16
b3.toString
e=A.u(b3,a0,e)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.j(f,14)
else b=f<0?0:255
J.H(e.a,e.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.H(e.a,e.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.H(e.a,e.d+2,b)
J.H(e.a,e.d+3,255)
a5=a7.a
n=a7.d+s
if(!(n>=0&&n<a5.length))return A.a(a5,n)
n=a5[n]
a5=h&255
g=h>>>16
s=A.u(b3,a0,s*4)
n=19077*n
f=n+26149*g+-3644112
if((f&-4194304)>>>0===0)b=B.a.j(f,14)
else b=f<0?0:255
J.H(s.a,s.d,b)
g=n-6419*a5-13320*g+2229552
if((g&-4194304)>>>0===0)b=B.a.j(g,14)
else b=g<0?0:255
J.H(s.a,s.d+1,b)
a5=n+33050*a5+-4527440
if((a5&-4194304)>>>0===0)b=B.a.j(a5,14)
else b=a5<0?0:255
J.H(s.a,s.d+2,b)
J.H(s.a,s.d+3,255)}}if((b4&1)===0){p=B.a.j(3*r+q+131074,2)
a5=a6.a
s=a6.d+a2
if(!(s>=0&&s<a5.length))return A.a(a5,s)
s=a5[s]
a5=a2*4
n=A.u(b2,a0,a5)
a.df(s,p&255,p>>>16,n)
n.h(0,3,255)
if(a4){p=B.a.j(3*q+r+131074,2)
a4=a7.a
a2=a7.d+a2
if(!(a2>=0&&a2<a4.length))return A.a(a4,a2)
a2=a4[a2]
b3.toString
a5=A.u(b3,a0,a5)
a.df(a2,p&255,p>>>16,a5)
a5.h(0,3,255)}}},
iY(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.xr
if(j==null)return
s=A.u(j,null,0)
if(a===0){r=c-1
q=a}else{q=a-1
s.d=s.d-k.b.a
r=c}j=k.Q
j.toString
p=k.as
if(j+a+c===p){p.toString
r=p-j-q}for(j=k.b,o=0;o<r;++o){for(p=o+q,n=0;n<b;++n){m=s.a
l=s.d+n
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=k.d.a
m=m==null?null:m.K(n,p,null);(m==null?new A.R():m).su(0,l)}s.d=s.d+j.a}},
iZ(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.d,b=A.Q(c.ga6(c),0,d)
c=e.b.a
s=A.C(b,!1,d,a*c*4)
r=e.to
r===$&&A.c("_y")
q=A.u(r,d,0)
r=e.x1
r===$&&A.c("_u")
p=A.u(r,d,0)
r=e.x2
r===$&&A.c("_v")
o=A.u(r,d,0)
n=a+a1
m=B.a.j(a0+1,1)
l=c*4
c=e.rx
c===$&&A.c("_tmpU")
k=A.u(c,d,0)
c=e.ry
c===$&&A.c("_tmpV")
j=A.u(c,d,0)
if(a===0){e.de(q,d,p,o,p,o,s,d,a0)
i=a1}else{c=e.RG
c===$&&A.c("_tmpY")
e.de(c,q,k,j,p,o,A.u(s,d,-l),s,a0)
i=a1+1}k.sa6(0,p.a)
j.sa6(0,o.a)
for(c=2*l,r=-l,h=a;h+=2,h<n;){k.d=p.d
j.d=o.d
g=p.d
f=e.R8
f.toString
p.d=g+f
o.d+=f
s.d+=c
f=q.d
g=e.p4
g.toString
q.d=f+2*g
e.de(A.u(q,d,-g),q,k,j,p,o,A.u(s,d,r),s,a0)}c=q.d
r=e.p4
r.toString
q.d=c+r
c=e.Q
c.toString
r=e.as
r.toString
if(c+n<r){c=e.RG
c===$&&A.c("_tmpY")
c.bV(0,a0,q)
e.rx.bV(0,m,p)
e.ry.bV(0,m,o);--i}else if((n&1)===0)e.de(q,d,p,o,p,o,A.u(s,d,l),d,a0)
return i},
iP(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_alphaPlane",f=i.b,e=f.a,d=f.b
if(a<0||b<=0||a+b>d)return h
if(a===0){f=e*d
i.bK=new Uint8Array(f)
s=i.bU
r=new A.lK(s,e,d)
q=s.B()
r.d=q&3
r.e=B.a.j(q,2)&3
r.f=B.a.j(q,4)&3
r.r=B.a.j(q,6)&3
if(r.gfQ()){p=r.d
if(p===0){if(s.c-s.d<f)r.r=1}else if(p===1){o=new A.e3(B.V,A.b([],t.J))
o.a=e
o.b=d
f=A.b([],t.nK)
p=A.b([],t.ip)
n=new Uint32Array(2)
m=new A.iS(s,n)
n=m.d=A.Q(n.buffer,0,h)
l=s.B()
k=n.length
if(0>=k)return A.a(n,0)
n[0]=l
l=s.B()
if(1>=k)return A.a(n,1)
n[1]=l
l=s.B()
if(2>=k)return A.a(n,2)
n[2]=l
l=s.B()
if(3>=k)return A.a(n,3)
n[3]=l
l=s.B()
if(4>=k)return A.a(n,4)
n[4]=l
l=s.B()
if(5>=k)return A.a(n,5)
n[5]=l
l=s.B()
if(6>=k)return A.a(n,6)
n[6]=l
s=s.B()
if(7>=k)return A.a(n,7)
n[7]=s
p=new A.hD(m,o,f,p)
p.db=e
r.x=p
p.ct(e,d,!0)
f=r.x
s=f.ax
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
f=s[0].a===B.bU&&f.jn()}else f=!1
if(f){r.y=!0
f=r.x
s=f.c
j=s.a*s.b
f.cx=0
s=B.a.a2(j,4)
s=new Uint8Array(j+(4-s))
f.CW=s
f.ch=A.b_(s.buffer,0,h)}else{r.y=!1
r.x.en()}}else r.r=1}i.bJ=r}f=i.bJ
f===$&&A.c("_alpha")
if(!f.w){s=i.bK
s===$&&A.c(g)
if(!f.kK(0,a,b,s))return h}f=i.bK
f===$&&A.c(g)
return A.C(f,!1,h,a*e)},
jG(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.fr.b,a5=a3.dy,a6=a3.k1
a6===$&&A.c("_segment")
if(!(a6<4))return A.a(a5,a6)
s=a5[a6]
a6=a3.aQ
a6===$&&A.c("_mbData")
a5=a3.y1
if(!(a5<a6.length))return A.a(a6,a5)
r=a6[a5]
q=A.C(r.a,!1,null,0)
a5=a3.k3
a5===$&&A.c("_mbInfo")
if(0>=a5.length)return A.a(a5,0)
p=a5[0]
q.l7(0,q.c-q.d,0)
a5=r.b
a5===$&&A.c("isIntra4x4")
if(!a5){o=A.C(new Int16Array(16),!1,null,0)
a5=a7.b
a6=p.b
if(1>=a4.length)return A.a(a4,1)
n=a3.dQ(a8,a4[1],a5+a6,s.b,0,o)
a7.b=p.b=n>0?1:0
if(n>1)a3.kp(o,q)
else{a5=o.a
a6=o.d
if(!(a6>=0&&a6<a5.length))return A.a(a5,a6)
m=B.a.j(a5[a6]+3,3)
for(l=0;l<256;l+=16)J.H(q.a,q.d+l,m)}k=a4[0]
j=1}else{if(3>=a4.length)return A.a(a4,3)
k=a4[3]
j=0}i=a7.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a3.dQ(a8,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a5=q.a
a6=q.d
if(!(a6>=0&&a6<a5.length))return A.a(a5,a6)
a5=a5[a6]!==0?1:0
if(n>3)a5=3
else if(n>1)a5=2
d=d<<2|a5
q.d=a6+16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}b=h>>>4
for(a5=a4.length,a=i,a0=0,a1=0;a1<4;a1+=2){a6=4+a1
i=B.a.a4(a7.a,a6)
h=B.a.a4(p.a,a6)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c){if(2>=a5)return A.a(a4,2)
n=a3.dQ(a8,a4[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a6=q.a
a2=q.d
if(!(a2>=0&&a2<a6.length))return A.a(a6,a2)
a6=a6[a2]!==0?1:0
if(n>3)a6=3
else if(n>1)a6=2
d=(d<<2|a6)>>>0
q.d=a2+16}i=i>>>2
h=h>>>1|e<<5}a0=(a0|B.a.O(d,4*a1))>>>0
a=(a|B.a.O(i<<4>>>0,a1))>>>0
b=(b|B.a.O(h&240,a1))>>>0}a7.a=a
p.a=b
r.e=g
r.f=a0
if((a0&43690)===0)s.toString
return(g|a0)>>>0===0},
kp(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
for(s=a.a,r=a.d,q=s.length,p=0;p<4;++p){o=r+p
if(!(o>=0&&o<q))return A.a(s,o)
o=s[o]
n=12+p
m=r+n
if(!(m>=0&&m<q))return A.a(s,m)
m=s[m]
l=o+m
k=4+p
j=r+k
if(!(j>=0&&j<q))return A.a(s,j)
j=s[j]
i=8+p
h=r+i
if(!(h>=0&&h<q))return A.a(s,h)
h=s[h]
g=j+h
f=j-h
e=o-m
if(!(p<16))return A.a(b,p)
b[p]=l+g
if(!(i<16))return A.a(b,i)
b[i]=l-g
b[k]=e+f
if(!(n<16))return A.a(b,n)
b[n]=e-f}for(d=0,p=0;p<4;++p){s=p*4
if(!(s<16))return A.a(b,s)
c=b[s]+3
r=3+s
if(!(r<16))return A.a(b,r)
r=b[r]
l=c+r
q=1+s
if(!(q<16))return A.a(b,q)
q=b[q]
s=2+s
if(!(s<16))return A.a(b,s)
s=b[s]
g=q+s
f=q-s
e=c-r
r=B.a.j(l+g,3)
J.H(a0.a,a0.d+d,r)
r=B.a.j(e+f,3)
J.H(a0.a,a0.d+(d+16),r)
r=B.a.j(l-g,3)
J.H(a0.a,a0.d+(d+32),r)
r=B.a.j(e-f,3)
J.H(a0.a,a0.d+(d+48),r)
d+=64}},
jf(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.a1(b[3])===0)s=a.a1(b[4])===0?2:3+a.a1(b[5])
else if(a.a1(b[6])===0)s=a.a1(b[7])===0?5+a.a1(159):7+2*a.a1(165)+a.a1(145)
else{r=a.a1(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.a1(b[q])
if(!(p<4))return A.a(B.bu,p)
o=B.bu[p]
n=o.length
for(s=0,m=0;m<n;++m)s+=s+a.a1(o[m])
s+=3+B.a.O(8,p)}return s},
dQ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.ac.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.a1(q[0])===0)return e
for(;a.a1(q[1])===0;){++e
if(!(e>=0&&e<17))return A.a(B.a1,e)
r=B.a1[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.a1,p)
r=B.a1[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.a1(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.jf(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.br,e)
r=B.br[e]
m=a.b
m===$&&A.c("_range")
l=a.es(B.a.j(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.a_,m)
k=B.a_[m]
a.b=B.bk[m]
m=a.d
m===$&&A.c("_bits")
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.H(f.a,f.d+r,m*j)}return 16},
jC(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.aQ
d===$&&A.c("_mbData")
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.c("br")
h=h.a1(145)===0
s.b=h
if(!h){if(i.c.a1(156)!==0)r=i.c.a1(128)!==0?1:3
else r=i.c.a1(163)!==0?2:0
s.c[0]=r
f.toString
B.k.aL(f,g,g+4,r)
B.k.aL(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.bo,d)
d=B.bo[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.a1(m[0])
if(!(l<18))return A.a(B.aa,l)
k=B.aa[l]
for(;k>0;){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.a1(m[k])
if(!(d>=0&&d<18))return A.a(B.aa,d)
k=B.aa[d]}r=-k
f[h]=r}j=p+4
f.toString
B.k.ai(q,p,j,f,g)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.a1(142)===0)h=0
else if(i.c.a1(114)===0)h=2
else h=i.c.a1(183)!==0?1:3
s.d=h},
si6(a){this.k2=t.f4.a(a)},
si5(a){this.k3=t.jt.a(a)},
si2(a){this.k4=t.kb.a(a)},
si4(a){this.aQ=t.as.a(a)},
si3(a){this.aR=t.mL.a(a)}}
A.lJ.prototype={
$2(a,b){return(a|b<<16)>>>0},
$S:30}
A.fc.prototype={
Y(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.W(this.a1(128),r))>>>0
return s},
cm(a){var s=this.Y(a)
return this.Y(1)===1?-s:s},
a1(a){var s,r=this,q=r.b
q===$&&A.c("_range")
s=r.es(B.a.j(q*a,8))
if(r.b<=126)r.kl()
return s},
es(a){var s,r,q,p,o,n=this,m="_value",l=n.d
l===$&&A.c("_bits")
if(l<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.B()
l=n.c
l===$&&A.c(m)
n.c=(p|l<<8)>>>0
l=n.d+8
n.d=l
o=l}else{if(q<r){l=s.B()
s=n.c
s===$&&A.c(m)
n.c=(l|s<<8)>>>0
s=n.d+8
n.d=s
l=s}else if(!n.e){s=n.c
s===$&&A.c(m)
n.c=s<<8>>>0
l+=8
n.d=l
n.e=!0}o=l}}else o=l
l=n.c
l===$&&A.c(m)
if(B.a.aO(l,o)>a){s=n.b
s===$&&A.c("_range")
r=a+1
n.b=s-r
n.c=l-B.a.W(r,o)
return 1}else{n.b=a
return 0}},
kl(){var s,r=this,q=r.b
q===$&&A.c("_range")
if(!(q>=0&&q<128))return A.a(B.a_,q)
s=B.a_[q]
r.b=B.bk[q]
q=r.d
q===$&&A.c("_bits")
r.d=q-s}}
A.lx.prototype={
eg(a,b,c){var s,r=A.u(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s
if(this.f2(r,b,c))this.d4(r,b)}},
ef(a,b,c){var s,r=A.u(a,null,0)
for(s=0;s<16;++s){r.d=a.d+s*b
if(this.f2(r,1,c))this.d4(r,1)}},
hg(a,b,c){var s,r,q=A.u(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.eg(q,b,c)}},
hf(a,b,c){var s,r=A.u(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.ef(r,b,c)}},
lx(a,b,c,d,e){var s,r,q=A.u(a,null,0)
for(s=4*b,r=3;r>0;--r){q.d+=s
this.ca(q,b,1,16,c,d,e)}},
l_(a,b,c,d,e){var s,r=A.u(a,null,0)
for(s=3;s>0;--s){r.d+=4
this.ca(r,1,b,16,c,d,e)}},
cb(a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.u(a1,null,0)
for(s=-3*a2,r=-2*a2,q=-a2,p=2*a2;o=a4-1,a4>0;a4=o){if(this.f3(a0,a2,a5,a6))if(this.eU(a0,a2,a7))this.d4(a0,a2)
else{n=a0.a
m=a0.d
l=m+s
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
i=m+r
if(!(i>=0&&i<k))return A.a(n,i)
i=n[i]
h=m+q
if(!(h>=0&&h<k))return A.a(n,h)
h=n[h]
if(!(m>=0&&m<k))return A.a(n,m)
g=n[m]
f=m+a2
if(!(f<k))return A.a(n,f)
f=n[f]
m+=p
if(!(m<k))return A.a(n,m)
m=n[m]
k=$.n_()
e=1020+i-f
k.toString
if(!(e>=0&&e<2041))return A.a(k,e)
e=1020+3*(g-h)+k[e]
if(!(e>=0&&e<2041))return A.a(k,e)
d=k[e]
e=B.a.j(27*d+63,7)
c=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(18*d+63,7)
b=(e&2147483647)-((e&2147483648)>>>0)
e=B.a.j(9*d+63,7)
a=(e&2147483647)-((e&2147483648)>>>0)
e=$.aU()
j=255+j+a
e.toString
if(!(j>=0&&j<766))return A.a(e,j)
J.H(n,l,e[j])
j=$.aU()
i=255+i+b
j.toString
if(!(i>=0&&i<766))return A.a(j,i)
i=j[i]
J.H(a0.a,a0.d+r,i)
i=$.aU()
h=255+h+c
i.toString
if(!(h>=0&&h<766))return A.a(i,h)
h=i[h]
J.H(a0.a,a0.d+q,h)
h=$.aU()
g=255+g-c
h.toString
if(!(g>=0&&g<766))return A.a(h,g)
g=h[g]
J.H(a0.a,a0.d,g)
g=$.aU()
f=255+f-b
g.toString
if(!(f>=0&&f<766))return A.a(g,f)
f=g[f]
J.H(a0.a,a0.d+a2,f)
f=$.aU()
m=255+m-a
f.toString
if(!(m>=0&&m<766))return A.a(f,m)
m=f[m]
J.H(a0.a,a0.d+p,m)}a0.d+=a3}},
ca(a,b,c,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.u(a,null,0)
for(s=-2*b,r=-b;q=a0-1,a0>0;a0=q){if(this.f3(d,b,a1,a2))if(this.eU(d,b,a3))this.d4(d,b)
else{p=d.a
o=d.d
n=o+s
m=p.length
if(!(n>=0&&n<m))return A.a(p,n)
l=p[n]
k=o+r
if(!(k>=0&&k<m))return A.a(p,k)
k=p[k]
if(!(o>=0&&o<m))return A.a(p,o)
j=p[o]
o+=b
if(!(o<m))return A.a(p,o)
o=p[o]
i=3*(j-k)
m=$.k2()
h=B.a.j(i+4,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
m.toString
if(!(h>=0&&h<225))return A.a(m,h)
g=m[h]
h=B.a.j(i+3,3)
h=112+((h&2147483647)-((h&2147483648)>>>0))
if(!(h>=0&&h<225))return A.a(m,h)
f=m[h]
h=B.a.j(g+1,1)
e=(h&2147483647)-((h&2147483648)>>>0)
h=$.aU()
l=255+l+e
h.toString
if(!(l>=0&&l<766))return A.a(h,l)
J.H(p,n,h[l])
l=$.aU()
k=255+k+f
l.toString
if(!(k>=0&&k<766))return A.a(l,k)
k=l[k]
J.H(d.a,d.d+r,k)
k=$.aU()
j=255+j-g
k.toString
if(!(j>=0&&j<766))return A.a(k,j)
j=k[j]
J.H(d.a,d.d,j)
j=$.aU()
o=255+o-e
j.toString
if(!(o>=0&&o<766))return A.a(j,o)
o=j[o]
J.H(d.a,d.d+b,o)}d.d+=c}},
d4(a,b){var s,r,q,p,o,n,m=a.a,l=a.d,k=l+-2*b,j=m.length
if(!(k>=0&&k<j))return A.a(m,k)
k=m[k]
s=-b
r=l+s
if(!(r>=0&&r<j))return A.a(m,r)
r=m[r]
if(!(l>=0&&l<j))return A.a(m,l)
q=m[l]
l+=b
if(!(l<j))return A.a(m,l)
l=m[l]
m=$.n_()
l=1020+k-l
m.toString
if(!(l>=0&&l<2041))return A.a(m,l)
p=3*(q-r)+m[l]
l=$.k2()
m=112+B.a.ar(B.a.j(p+4,3),32)
l.toString
if(!(m>=0&&m<225))return A.a(l,m)
o=l[m]
m=$.k2()
l=112+B.a.ar(B.a.j(p+3,3),32)
m.toString
if(!(l>=0&&l<225))return A.a(m,l)
n=m[l]
l=$.aU()
r=255+r+n
l.toString
if(!(r>=0&&r<766))return A.a(l,r)
a.h(0,s,l[r])
r=$.aU()
q=255+q-o
r.toString
if(!(q>=0&&q<766))return A.a(r,q)
a.h(0,0,r[q])},
eU(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+-b
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
if(!(p>=0&&p<n))return A.a(q,p)
r=q[p]
p+=b
if(!(p<n))return A.a(q,p)
p=q[p]
q=$.k1()
s=255+o-s
q.toString
if(!(s>=0&&s<511))return A.a(q,s)
if(q[s]<=c){p=255+p-r
if(!(p>=0&&p<511))return A.a(q,p)
p=q[p]>c
q=p}else q=!0
return q},
f2(a,b,c){var s,r,q=a.a,p=a.d,o=p+-2*b,n=q.length
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=p+-b
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
if(!(p>=0&&p<n))return A.a(q,p)
r=q[p]
p+=b
if(!(p<n))return A.a(q,p)
p=q[p]
q=$.k1()
r=255+s-r
q.toString
if(!(r>=0&&r<511))return A.a(q,r)
r=q[r]
q=$.mZ()
p=255+o-p
q.toString
if(!(p>=0&&p<511))return A.a(q,p)
return 2*r+q[p]<=c},
f3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.a,i=a.d,h=i+-4*b,g=j.length
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
s=i+-3*b
if(!(s>=0&&s<g))return A.a(j,s)
s=j[s]
r=i+-2*b
if(!(r>=0&&r<g))return A.a(j,r)
r=j[r]
q=i+-b
if(!(q>=0&&q<g))return A.a(j,q)
q=j[q]
if(!(i>=0&&i<g))return A.a(j,i)
p=j[i]
o=i+b
if(!(o<g))return A.a(j,o)
o=j[o]
n=i+2*b
if(!(n<g))return A.a(j,n)
n=j[n]
i+=3*b
if(!(i<g))return A.a(j,i)
i=j[i]
j=$.k1()
g=255+q-p
j.toString
if(!(g>=0&&g<511))return A.a(j,g)
g=j[g]
m=$.mZ()
l=255+r
k=l-o
m.toString
if(!(k>=0&&k<511))return A.a(m,k)
if(2*g+m[k]>c)return!1
h=255+h-s
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){h=255+s-r
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){h=l-q
if(!(h>=0&&h<511))return A.a(j,h)
if(j[h]<=d){i=255+i-n
if(!(i>=0&&i<511))return A.a(j,i)
if(j[i]<=d){i=255+n-o
if(!(i>=0&&i<511))return A.a(j,i)
if(j[i]<=d){i=255+o-p
if(!(i>=0&&i<511))return A.a(j,i)
i=j[i]<=d
j=i}else j=!1}else j=!1}else j=!1}else j=!1}else j=!1
return j},
bC(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new Int32Array(16)
for(s=a.a,r=a.d,q=s.length,p=0,o=0,n=0;n<4;++n){m=r+p
if(!(m>=0&&m<q))return A.a(s,m)
m=s[m]
l=r+(p+8)
if(!(l>=0&&l<q))return A.a(s,l)
l=s[l]
k=m+l
j=m-l
l=r+(p+4)
if(!(l>=0&&l<q))return A.a(s,l)
l=s[l]
m=B.a.j(l*35468,16)
i=r+(p+12)
if(!(i>=0&&i<q))return A.a(s,i)
i=s[i]
h=B.a.j(i*85627,16)
g=(m&2147483647)-((m&2147483648)>>>0)-((h&2147483647)-((h&2147483648)>>>0))
l=B.a.j(l*85627,16)
i=B.a.j(i*35468,16)
f=(l&2147483647)-((l&2147483648)>>>0)+((i&2147483647)-((i&2147483648)>>>0))
e=o+1
if(!(o<16))return A.a(b,o)
b[o]=k+f
o=e+1
if(!(e<16))return A.a(b,e)
b[e]=j+g
e=o+1
if(!(o<16))return A.a(b,o)
b[o]=j-g
o=e+1
if(!(e<16))return A.a(b,e)
b[e]=k-f;++p}for(d=0,o=0,n=0;n<4;++n){if(!(o<16))return A.a(b,o)
c=b[o]+4
s=o+8
if(!(s<16))return A.a(b,s)
s=b[s]
k=c+s
j=c-s
s=o+4
if(!(s<16))return A.a(b,s)
s=b[s]
r=B.a.j(s*35468,16)
q=o+12
if(!(q<16))return A.a(b,q)
q=b[q]
m=B.a.j(q*85627,16)
g=(r&2147483647)-((r&2147483648)>>>0)-((m&2147483647)-((m&2147483648)>>>0))
s=B.a.j(s*85627,16)
q=B.a.j(q*35468,16)
f=(s&2147483647)-((s&2147483648)>>>0)+((q&2147483647)-((q&2147483648)>>>0))
A.cn(a0,d,0,0,k+f)
A.cn(a0,d,1,0,j+g)
A.cn(a0,d,2,0,j-g)
A.cn(a0,d,3,0,k-f);++o
d+=32}},
lu(a,b,c,d){this.bC(b,c)
if(d)this.bC(A.u(b,null,16),A.u(c,null,4))},
cR(a,b){var s,r,q,p=a.a,o=a.d
if(!(o>=0&&o<p.length))return A.a(p,o)
s=p[o]+4
for(r=0;r<4;++r)for(q=0;q<4;++q)A.cn(b,0,q,r,s)},
h3(a,b){var s=this,r=null,q=a.a,p=a.d
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cR(a,b)
q=a.a
p=a.d+16
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cR(A.u(a,r,16),A.u(b,r,4))
q=a.a
p=a.d+32
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cR(A.u(a,r,32),A.u(b,r,128))
q=a.a
p=a.d+48
if(!(p>=0&&p<q.length))return A.a(q,p)
if(q[p]!==0)s.cR(A.u(a,r,48),A.u(b,r,132))}}
A.lC.prototype={}
A.lG.prototype={}
A.lI.prototype={}
A.fb.prototype={}
A.lH.prototype={}
A.ly.prototype={}
A.bY.prototype={}
A.fe.prototype={}
A.iU.prototype={}
A.ff.prototype={}
A.fg.prototype={}
A.fd.prototype={
cG(){var s,r=this.b
if(r.aa(8)!==47)return!1
s=this.c
s.f=B.ag
s.a=r.aa(14)+1
s.b=r.aa(14)+1
s.d=r.aa(1)!==0
if(r.aa(3)!==0)return!1
return!0},
bI(a){var s,r,q,p=this,o=null
p.e=0
if(!p.cG())return o
s=p.c
p.ct(s.a,s.b,!0)
p.en()
r=s.a
p.d=A.a5(o,o,B.e,0,B.h,s.b,o,0,4,o,r,!1)
r=p.ch
r.toString
q=s.a
s=s.b
if(!p.dI(r,q,s,s,p.gjM()))return o
return p.d},
en(){var s,r=this,q=r.c,p=q.a
q=p*q.b+p
s=new Uint32Array(q+p*16)
r.ch=s
r.CW=A.Q(s.buffer,0,null)
r.cx=q
return!0},
kf(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.aa(2)
q=l.ay
p=B.a.O(1,r)
if((q&p)>>>0!==0)return!1
l.ay=(q|p)>>>0
o=new A.iT(B.bT)
B.c.H(l.ax,o)
if(!(r<4))return A.a(B.bt,r)
q=B.bt[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.aa(3)+2
o.e=s
o.d=l.ct(A.co(o.b,s),A.co(o.c,o.e),!1)
break
case 3:n=s.aa(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.c.h(a,0,A.co(o.b,m))
o.e=m
o.d=l.ct(n,1,!1)
l.j1(n,o)
break
case 2:break
default:throw A.f(A.q("Invalid WebP transform type: "+r))}return!0},
ct(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c){for(s=k.b,r=t.t,q=b,p=a;s.aa(1)!==0;){o=A.b([p,q],r)
if(!k.kf(o))throw A.f(A.q("Invalid Transform"))
p=o[0]
q=o[1]}c=!0}else{q=b
p=a}s=k.b
if(s.aa(1)!==0){n=s.aa(4)
if(!(n>=1&&n<=11))throw A.f(A.q("Invalid Color Cache"))}else n=0
if(!k.k0(p,q,n,c))throw A.f(A.q("Invalid Huffman Codes"))
if(n>0){s=B.a.O(1,n)
k.r=s
k.w=new A.lD(new Uint32Array(s),32-n)}else k.r=0
s=k.c
s.a=p
s.b=q
m=k.y
k.z=A.co(p,m)
k.x=m===0?4294967295:B.a.O(1,m)-1
if(c){k.e=0
return null}l=new Uint32Array(p*q)
if(!k.dI(l,p,q,q,null))throw A.f(A.q("Failed to decode image data."))
k.e=0
return l},
dI(b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
t.bZ.a(b5)
s=b0.e
r=B.a.aA(s,b2)
q=B.a.a2(s,b2)
p=b0.eN(q,r)
o=b0.e
n=b2*b3
m=b2*b4
s=b0.r
l=280+s
k=s>0?b0.w:null
j=b0.x
s=b1.length
i=b0.b
h=b5!=null
g=o
while(!0){f=i.b
e=f.c
if(!(!(f.d>=e&&i.a>=64)&&o<m))break
if((q&j)>>>0===0){d=b0.cw(b0.Q,b0.z,b0.y,q,r)
f=b0.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(i.a>=32)i.c0()
f=p.a
e=f.length
if(0>=e)return A.a(f,0)
c=f[0].bW(i)
if(c<256){if(1>=e)return A.a(f,1)
b=f[1].bW(i)
if(i.a>=32)i.c0()
if(2>=e)return A.a(f,2)
a=f[2].bW(i)
if(3>=e)return A.a(f,3)
a0=A.q0(a,c,b,f[3].bW(i))
if(!(o>=0&&o<s))return A.a(b1,o)
b1[o]=a0;++o;++q
if(q>=b2){++r
if(B.a.a2(r,16)===0&&h)b5.$1(r)
if(k!=null)for(f=k.b,e=k.a,a1=e.length;g<o;){if(!(g>=0))return A.a(b1,g)
a2=b1[g]
a3=B.a.Z(a2*506832829>>>0,f)
if(!(a3<a1))return A.a(e,a3)
e[a3]=a2;++g}q=0}}else if(c<280){a4=b0.d7(c-256)
if(4>=e)return A.a(f,4)
a5=f[4].bW(i)
if(i.a>=32)i.c0()
a6=b0.f8(b2,b0.d7(a5))
if(o<a6||n-o<a4)return!1
else{a7=o-a6
for(a8=0;a8<a4;++a8){f=o+a8
e=a7+a8
if(!(e>=0&&e<s))return A.a(b1,e)
e=b1[e]
if(!(f>=0&&f<s))return A.a(b1,f)
b1[f]=e}o+=a4}q+=a4
for(;q>=b2;){q-=b2;++r
if(B.a.a2(r,16)===0&&h)b5.$1(r)}if(o<m){if((q&j)>>>0!==0){d=b0.cw(b0.Q,b0.z,b0.y,q,r)
f=b0.at
if(!(d<f.length))return A.a(f,d)
p=f[d]}if(k!=null)for(f=k.b,e=k.a,a1=e.length;g<o;){if(!(g>=0&&g<s))return A.a(b1,g)
a2=b1[g]
a3=B.a.Z(a2*506832829>>>0,f)
if(!(a3<a1))return A.a(e,a3)
e[a3]=a2;++g}}}else if(c<l){a3=c-280
for(;g<o;){k.toString
if(!(g>=0&&g<s))return A.a(b1,g)
f=b1[g]
a9=B.a.Z(f*506832829>>>0,k.b)
e=k.a
if(!(a9<e.length))return A.a(e,a9)
e[a9]=f;++g}f=k.a
e=f.length
if(!(a3<e))return A.a(f,a3)
a1=f[a3]
if(!(o>=0&&o<s))return A.a(b1,o)
b1[o]=a1;++o;++q
if(q>=b2){++r
if(B.a.a2(r,16)===0&&h)b5.$1(r)
for(a1=k.b;g<o;){if(!(g>=0))return A.a(b1,g)
a2=b1[g]
a3=B.a.Z(a2*506832829>>>0,a1)
if(!(a3<e))return A.a(f,a3)
f[a3]=a2;++g}q=0}}else return!1}if(h)b5.$1(r)
if(f.d>=e&&i.a>=64&&o<n)return!1
b0.e=o
return!0},
jn(){var s,r,q,p,o,n
if(this.r>0)return!1
for(s=this.as,r=this.at,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
if(o[1].f>1)return!1
if(2>=n)return A.a(o,2)
if(o[2].f>1)return!1
if(3>=n)return A.a(o,3)
if(o[3].f>1)return!1}return!0},
j2(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.f,g=a-h
if(g<=0)return
s=i.c
i.eo(g,s.a*h)
r=s.a
q=r*g
p=r*i.f
s=i.ch
s.toString
h=i.cx
h.toString
o=A.C(s,!1,null,h)
for(h=i.cy,s=o.a,n=o.d,m=s.length,l=0;l<q;++l){h.toString
k=p+l
j=n+l
if(!(j>=0&&j<m))return A.a(s,j)
j=B.a.j(s[j],8)
if(!(k>=0&&k<h.length))return A.a(h,k)
h[k]=j&255}i.f=a},
ix(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i=this,h="_pixels8",g=i.e,f=B.a.aA(g,a1),e=B.a.a2(g,a1),d=i.eN(e,f),c=i.e,b=a1*a2,a=a1*a3,a0=i.x
g=i.b
while(!0){s=g.b
if(!(!(s.d>=s.c&&g.a>=64)&&c<a))break
if((e&a0)>>>0===0){r=i.cw(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}if(g.a>=32)g.c0()
s=d.a
q=s.length
if(0>=q)return A.a(s,0)
p=s[0].bW(g)
if(p<256){s=i.CW
s===$&&A.c(h)
if(!(c>=0&&c<s.length))return A.a(s,c)
s[c]=p;++c;++e
if(e>=a1){++f
if(B.a.a2(f,16)===0)i.dN(f)
e=0}}else if(p<280){o=i.d7(p-256)
if(4>=q)return A.a(s,4)
n=s[4].bW(g)
if(g.a>=32)g.c0()
m=i.f8(a1,i.d7(n))
if(c>=m&&b-c>=o)for(s=i.CW,l=0;l<o;++l){s===$&&A.c(h)
q=c+l
k=q-m
j=s.length
if(!(k>=0&&k<j))return A.a(s,k)
k=s[k]
if(!(q>=0&&q<j))return A.a(s,q)
s[q]=k}else{i.e=c
return!0}c+=o
e+=o
for(;e>=a1;){e-=a1;++f
if(B.a.a2(f,16)===0)i.dN(f)}if(c<a&&(e&a0)>>>0!==0){r=i.cw(i.Q,i.z,i.y,e,f)
s=i.at
if(!(r<s.length))return A.a(s,r)
d=s[r]}}else return!1}i.dN(f)
i.e=c
return!0},
dN(a){var s,r,q,p=this,o=p.f,n=a-o,m=p.CW
m===$&&A.c("_pixels8")
s=A.C(m,!1,null,p.c.a*o)
if(n>0){m=p.cy
m.toString
r=p.db
r.toString
q=A.C(m,!1,null,r*o)
r=p.ax
if(0>=r.length)return A.a(r,0)
r[0].kx(o,o+n,s,q)}p.f=a},
jN(a){var s,r,q,p,o,n=this,m=n.c,l=m.a,k=n.f,j=a-k
if(j<=0)return
n.eo(j,l*k)
l=n.cx
l.toString
s=n.f
r=l
q=0
for(;q<j;++q,++s)for(p=0;p<m.a;++p,++r){l=n.ch
if(!(r>=0&&r<l.length))return A.a(l,r)
o=l[r]
l=n.d.a
if(l!=null)l.al(p,s,o>>>16&255,o>>>8&255,o&255,o>>>24&255)}n.f=a},
eo(a,b){var s,r,q,p=this,o=p.ax,n=o.length,m=p.c.a,l=p.f,k=l+a,j=p.cx
j.toString
s=p.ch
s.toString
B.Q.ai(s,j,j+m*a,s,b)
for(r=b;q=n-1,n>0;r=j,n=q){if(!(q>=0&&q<o.length))return A.a(o,q)
m=o[q]
s=p.ch
s.toString
m.l2(l,k,s,r,s,j)}},
k0(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d&&e.b.aa(1)!==0){s=e.b.aa(3)+2
r=A.co(a,s)
q=A.co(b,s)
p=r*q
o=e.ct(r,q,!1)
e.y=s
for(n=1,m=0;m<p;++m){if(!(m<o.length))return A.a(o,m)
l=o[m]>>>8&65535
o[m]=l
if(l>=n)n=l+1}}else{o=null
n=1}k=J.aD(n,t.co)
for(j=0;j<n;++j)k[j]=A.r4()
for(i=c>0,m=0;m<n;++m)for(h=0;h<5;++h){g=B.dP[h]
if(h===0&&i)g+=B.a.O(1,c)
if(!(m<n))return A.a(k,m)
f=k[m].a
if(!(h<f.length))return A.a(f,h)
if(!e.jZ(g,f[h]))return!1}e.Q=o
e.as=n
e.sjh(k)
return!0},
jZ(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.b
if(i.aa(1)!==0){s=t.t
r=A.b([0,0],s)
q=A.b([0,0],s)
p=A.b([0,0],s)
o=i.aa(1)+1
B.c.h(r,0,i.aa(i.aa(1)===0?1:8))
B.c.h(q,0,0)
s=o-1
B.c.h(p,0,s)
if(o===2){B.c.h(r,1,i.aa(8))
B.c.h(q,1,1)
B.c.h(p,1,s)}n=b.kv(p,q,r,a,o)}else{m=new Int32Array(19)
l=i.aa(4)+4
if(l>19)return!1
p=new Int32Array(a)
for(k=0;k<l;++k){s=B.hj[k]
j=i.aa(3)
if(!(s<19))return A.a(m,s)
m[s]=j}n=this.k_(m,a,p)
if(n)n=b.fB(p,a)}return n},
k_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.L
e.a(a)
e.a(c)
s=A.om()
if(!s.fB(a,19))return!1
e=this.b
if(e.aa(1)!==0){r=2+e.aa(2+2*e.aa(3))
if(r>b)return!1}else r=b
for(q=c.length,p=0,o=8;p<b;r=n){n=r-1
if(r===0)break
if(e.a>=32)e.c0()
m=s.bW(e)
if(m<16){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=m
if(m!==0)o=m
p=l}else{k=m-16
if(!(k<3))return A.a(B.b0,k)
j=B.b0[k]
i=B.d6[k]
h=e.aa(j)+i
if(p+h>b)return!1
else{g=m===16?o:0
for(;f=h-1,h>0;h=f,p=l){l=p+1
if(!(p>=0&&p<q))return A.a(c,p)
c[p]=g}}}}return!0},
d7(a){var s
if(a<4)return a+1
s=B.a.j(a-2,1)
return B.a.O(2+(a&1),s)+this.b.aa(s)+1},
f8(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.bB,s)
r=B.bB[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
j1(a,b){var s,r,q,p,o,n=B.a.O(1,B.a.a4(8,b.e)),m=new Uint32Array(n),l=A.Q(b.d.buffer,0,null),k=A.Q(m.buffer,0,null),j=b.d
if(0>=j.length)return A.a(j,0)
j=j[0]
if(0>=n)return A.a(m,0)
m[0]=j
s=4*a
for(j=l.length,r=k.length,q=4;q<s;++q){if(!(q<j))return A.a(l,q)
p=l[q]
o=q-4
if(!(o<r))return A.a(k,o)
o=k[o]
if(!(q<r))return A.a(k,q)
k[q]=p+o&255}for(s=4*n;q<s;++q){if(!(q<r))return A.a(k,q)
k[q]=0}b.d=m
return!0},
cw(a,b,c,d,e){var s
if(c===0)return 0
a.toString
s=b*B.a.j(e,c)+B.a.j(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
eN(a,b){var s=this,r=s.cw(s.Q,s.z,s.y,a,b),q=s.at
if(!(r<q.length))return A.a(q,r)
return q[r]},
sjh(a){this.at=t.kk.a(a)}}
A.hD.prototype={
kW(a){return this.j2(a)}}
A.iS.prototype={
fW(){var s,r,q,p=this.a
if(p<32){s=this.c
r=B.a.Z(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.T,p)
q=r+((s&B.T[p])>>>0)*(B.T[32-p]+1)}else{s=this.c
q=p===32?s[1]:B.a.Z(s[1],p-32)}return q},
aa(a){var s,r=this,q=r.b
if(!(q.d>=q.c&&r.a>=64)&&a<25){q=r.fW()
if(!(a<33))return A.a(B.T,a)
s=B.T[a]
r.a+=a
r.c0()
return(q&s)>>>0}else throw A.f(A.q("Not enough data in input."))},
c0(){var s,r,q,p,o=this,n=o.b,m=o.c,l=n.c
while(!0){s=o.a
if(!(s>=8&&n.d<l))break
r=n.a
q=n.d++
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=m[0]
p=m[1]
m[0]=(r>>>8)+(p&255)*16777216
m[1]=p>>>8
m[1]=(m[1]|q*16777216)>>>0
o.a=s-8}}}
A.lD.prototype={}
A.d2.prototype={
aj(){return"VP8LImageTransformType."+this.b}}
A.iT.prototype={
l2(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.kq(e,f,f+(b-a)*n)
break
case 0:o.ld(a,b,e,f)
if(b!==o.c){s=f-n
B.Q.ai(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.kz(a,b,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.co(n,o.e)
p=f+r*n-q
B.Q.ai(e,p,p+q,c,f)
o.fC(a,b,c,p,e,f)}else o.fC(a,b,c,d,e,f)
break}},
kx(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.a4(8,m),k=this.b,j=this.d
if(l<8){s=B.a.O(1,m)-1
r=B.a.O(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
p=m[n]
c.d=n+1}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.H(d.a,d.d,m>>>8&255);++d.d
p=B.a.j(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){m=c.a
n=c.d
if(!(n>=0&&n<m.length))return A.a(m,n)
m=m[n]
c.d=n+1
if(m>>>0!==m||m>=j.length)return A.a(j,m)
m=j[m]
J.H(d.a,d.d,m>>>8&255);++d.d}},
fC(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.a4(8,j),h=this.b,g=this.d
if(i<8){s=B.a.O(1,j)-1
r=B.a.O(1,i)-1
for(j=e.length,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<j))return A.a(e,f)
e[f]=k
o=B.a.a4(o,i)}}else for(j=c.length,q=e.length,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
if(!(f>=0&&f<q))return A.a(e,f)
e[f]=k}},
kz(a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.b,a2=a0.e,a3=B.a.O(1,a2)-1,a4=A.co(a1,a2),a5=B.a.j(a6,a0.e)*a4
for(a2=a8.length,s=a6;s<a7;){r=new Uint8Array(3)
for(q=a5,p=0;p<a1;++p){if((p&a3)>>>0===0){o=a0.d
n=q+1
if(!(q<o.length))return A.a(o,q)
o=o[q]
r[0]=o&255
r[1]=o>>>8&255
r[2]=o>>>16&255
q=n}o=a9+p
if(!(o<a2))return A.a(a8,o)
m=a8[o]
l=m>>>8&255
k=r[0]
j=$.aP()
j[0]=k
k=$.aW()
i=k.length
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=l
if(0>=i)return A.a(k,0)
g=k[0]
f=$.o_()
f[0]=h*g
e=$.qn()
d=e.length
if(0>=d)return A.a(e,0)
c=(m>>>16&255)+(e[0]>>>5)>>>0&255
j[0]=r[1]
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=l
if(0>=i)return A.a(k,0)
f[0]=h*k[0]
if(0>=d)return A.a(e,0)
b=e[0]
j[0]=r[2]
if(0>=i)return A.a(k,0)
h=k[0]
j[0]=c
if(0>=i)return A.a(k,0)
f[0]=h*k[0]
if(0>=d)return A.a(e,0)
a=e[0]
a8[o]=(m&4278255360|c<<16|((m&255)+(b>>>5)>>>0)+(a>>>5)>>>0&255)>>>0}a9+=a1;++s
if((s&a3)>>>0===0)a5+=a4}},
ld(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
if(a===0){s=d-1
r=c.length
if(!(s>=0&&s<r))return A.a(c,s)
A.lE(c,d,4278190080)
for(q=1;q<g;++q){s=d+q
p=s-1
if(!(p<r))return A.a(c,p)
A.lE(c,s,c[p])}d+=g;++a}s=h.e
o=B.a.O(1,s)-1
n=A.co(g,s)
m=B.a.j(a,h.e)*n
for(s=c.length,l=a;l<b;){r=d-1
if(!(r>=0&&r<s))return A.a(c,r)
r=d-g
if(!(r>=0&&r<s))return A.a(c,r)
A.lE(c,d,c[r])
r=h.d
k=m+1
if(!(m<r.length))return A.a(r,m)
j=$.pe[r[m]>>>8&15]
for(q=1;q<g;++q){if((q&o)>>>0===0){r=h.d
i=k+1
if(!(k<r.length))return A.a(r,k)
j=$.pe[r[k]>>>8&15]
k=i}r=d+q
p=r-1
if(!(p<s))return A.a(c,p)
A.lE(c,r,j.$3(c,c[p],r-g))}d+=g;++l
if((l&o)>>>0===0)m+=n}},
kq(a,b,c){var s,r,q,p
for(s=a.length;b<c;b=p){if(!(b<s))return A.a(a,b)
r=a[b]
q=r>>>8&255
p=b+1
a[b]=(r&4278255360|(r&16711935)+(q<<16|q)&16711935)>>>0}}}
A.lK.prototype={
gfQ(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
kK(a,b,c,d){var s,r,q,p,o,n,m=this
if(!m.gfQ())return!1
s=m.e
if(!(s<4))return A.a(B.bj,s)
r=B.bj[s]
if(m.d===0){s=m.b
q=b*s
p=m.a
B.k.ai(d,q,c*s,p.a,p.d-p.b+q)}else{s=b+c
p=m.x
p===$&&A.c("_vp8l")
p.cy=d
o=p.c
if(m.y)s=p.ix(o.a,o.b,s)
else{n=p.ch
n.toString
p=p.dI(n,o.a,o.b,s,t.lt.a(p.gkV()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,b,c,d)}if(m.f===1)if(!m.iW(d,m.b,m.c,b,c))return!1
if(b+c===m.c)m.w=!0
return!0},
iW(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.fh.prototype={
hO(a,b){var s=this,r=a.B()
s.r=0
s.f=(r&1)!==0
s.w=a.d-a.b
s.x=b-16}}
A.hE.prototype={}
A.hl.prototype={
dT(a){var s,r,q=this
if(a===0)return!1
s=(a<<1>>>0)-1
q.e=s
s=s<<1>>>0
r=q.d=new Int32Array(s)
if(1>=s)return A.a(r,1)
r[1]=-1
q.f=1
B.k.aL(q.a,0,128,255)
return!0},
fB(a,b){var s,r,q,p,o,n,m=this
t.L.a(a)
for(s=a.length,r=0,q=0,p=0;p<b;++p){if(!(p<s))return A.a(a,p)
if(a[p]>0){++r
q=p}}if(!m.dT(r))return!1
if(r===1){if(q<0||q>=b)return!1
return m.dz(q,0,0)}o=new Int32Array(b)
if(!m.ji(a,b,o))return!1
for(p=0;p<b;++p){if(!(p<s))return A.a(a,p)
n=a[p]
if(n>0)if(!m.dz(p,o[p],n))return!1}return m.f===m.e},
kv(a,b,c,d,e){var s,r,q=this,p=t.L
p.a(a)
p.a(b)
p.a(c)
if(!q.dT(e))return!1
for(s=0;s<e;++s){if(!(s<2))return A.a(b,s)
p=b[s]
if(p!==-1){r=c[s]
if(r>=d)return q.f===q.e
if(!q.dz(r,p,a[s]))return q.f===q.e}}return q.f===q.e},
bW(a){var s,r,q,p=this,o=a.fW(),n=a.a,m=o&127,l=p.a[m]
if(l<=7){a.a=n+l
return p.b[m]}s=p.c[m]
n+=7
o=o>>>7
do{r=p.d
r===$&&A.c("tree")
q=(s<<1>>>0)+1
if(!(q<r.length))return A.a(r,q)
s=s+r[q]+(o&1)
o=o>>>1;++n}while(p.f5(s))
a.a=n
r=p.d
q=s<<1>>>0
if(!(q<r.length))return A.a(r,q)
return r[q]},
dz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(c<=7){s=g.ff(b,c)
for(r=B.a.W(1,7-c),q=g.b,p=g.a,o=0;o<r;++o){n=(s|B.a.W(o,c))>>>0
if(!(n<128))return A.a(q,n)
q[n]=a
p[n]=c}}else s=g.ff(B.a.aO(b,c-7),7)
for(r=g.c,m=7,l=0;k=c-1,c>0;c=k){q=g.e
if(l>=q)return!1
p=g.d
p===$&&A.c("tree")
j=(l<<1>>>0)+1
i=p.length
if(!(j<i))return A.a(p,j)
h=p[j]
if(h<0){h=g.f
if(h===q)return!1
p[j]=h-l
g.f=h+2
q=(h<<1>>>0)+1
if(!(q<i))return A.a(p,q)
p[q]=-1
h=(h+1<<1>>>0)+1
if(!(h<i))return A.a(p,h)
p[h]=-1}else if(h===0)return!1
l+=p[j]+(B.a.aO(b,k)&1);--m
if(m===0){if(!(s<128))return A.a(r,s)
r[s]=l}}if(g.jr(l))g.js(l,0)
else if(g.f5(l))return!1
r=g.d
r===$&&A.c("tree")
q=l<<1>>>0
if(!(q<r.length))return A.a(r,q)
r[q]=a
return!0},
ff(a,b){var s=B.av[a&15],r=B.a.j(a,4)
if(!(r<16))return A.a(B.av,r)
return B.a.Z((s<<4|B.av[r])>>>0,8-b)},
js(a,b){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
r[s]=b},
f5(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]!==0},
jr(a){var s,r=this.d
r===$&&A.c("tree")
s=(a<<1>>>0)+1
if(!(s<r.length))return A.a(r,s)
return r[s]<0},
ji(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=t.L
i.a(a)
i.a(c)
s=new Int32Array(16)
r=new Int32Array(16)
for(i=a.length,q=0,p=0;q<b;++q){if(!(q<i))return A.a(a,q)
o=a[q]
if(o>p)p=o}if(p>15)return!1
for(q=0;q<b;++q){if(!(q<i))return A.a(a,q)
n=a[q]
if(!(n>=0&&n<16))return A.a(s,n)
m=s[n]
if(!(n<16))return A.a(s,n)
s[n]=m+1}if(0>=16)return A.a(s,0)
s[0]=0
if(0>=16)return A.a(r,0)
r[0]=-1
for(l=1,k=0;l<=p;++l){k=k+s[l-1]<<1>>>0
if(!(l<16))return A.a(r,l)
r[l]=k}for(n=c.length,q=0;q<b;++q){if(!(q<i))return A.a(a,q)
m=a[q]
if(m>0){if(!(m<16))return A.a(r,m)
j=r[m]
if(!(m<16))return A.a(r,m)
r[m]=j+1
if(!(q<n))return A.a(c,q)
c[q]=j}else{if(!(q<n))return A.a(c,q)
c[q]=-1}}return!0}}
A.dx.prototype={}
A.e2.prototype={
aj(){return"WebPFormat."+this.b}}
A.e3.prototype={$ia3:1}
A.eI.prototype={}
A.lL.prototype={
dn(a){var s=A.C(t.L.a(a),!1,null,0)
this.b=s
if(!this.eM(s))return!1
return!0},
bb(a){var s,r=this,q=null,p=A.C(t.L.a(a),!1,q,0)
r.b=p
if(!r.eM(p))return q
p=new A.eI(B.V,A.b([],t.J))
r.a=p
s=r.b
s.toString
if(!r.fs(s,p))return q
p=r.a
switch(p.f.a){case 3:p.as=p.z.length
return p
case 2:s=r.b
s.toString
s.d=p.ay
if(!A.ny(s,p).cG())return q
p=r.a
p.as=p.z.length
return p
case 1:s=r.b
s.toString
s.d=p.ay
if(!A.nw(s,p).cG())return q
p=r.a
p.as=p.z.length
return p
case 0:throw A.f(A.q("Unknown format for WebP"))}},
ap(a){var s,r,q,p,o=this,n=o.b
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.z
r=s.length
if(a>=r||!1)return null
if(!(a<r))return A.a(s,a)
q=s[a]
n.toString
s=q.x
s===$&&A.c("_frameSize")
r=q.w
r===$&&A.c("_framePosition")
return o.eD(n.bX(s,r),a)}r=s.f
if(r===B.ag){n.toString
p=n.bX(s.ch,s.ay)
n=o.a
n.toString
return A.ny(p,n).bI(0)}else if(r===B.aD){n.toString
p=n.bX(s.ch,s.ay)
n=o.a
n.toString
return A.nw(p,n).bI(0)}return null},
b3(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=null
if(k.bb(t.L.a(b))==null)return j
if(!k.a.e||!1)return k.ap(0)
for(s=j,r=s,q=0;p=k.a,q<p.as;++q){p=p.z
if(!(q<p.length))return A.a(p,q)
c=p[q]
o=k.ap(q)
if(o==null)continue
o.y=c.e
if(r==null||s==null){p=k.a
n=p.a
p=p.b
m=o.gbm()
l=o.a
l=l==null?j:l.gG()
r=A.a5(j,j,l==null?B.e:l,0,B.h,p,j,0,m,j,n,!1)
s=r}else{s=A.bl(s,!1,!1)
p=c.f
p===$&&A.c("clearFrame")
if(p){p=s.a
if(p!=null)p.aG(0,j)}}A.pV(s,o,B.aE,c.a,c.b)
r.aH(s)}return r},
eD(a,b){var s,r,q,p=null,o=A.b([],t.J),n=new A.eI(B.V,o)
if(!this.fs(a,n))return p
if(n.f===B.V)return p
n.as=this.a.as
if(n.e){s=o.length
if(b>=s||!1)return p
if(!(b<s))return A.a(o,b)
r=o[b]
o=r.x
o===$&&A.c("_frameSize")
s=r.w
s===$&&A.c("_framePosition")
return this.eD(a.bX(o,s),b)}else{q=a.bX(n.ch,n.ay)
o=n.f
if(o===B.ag)return A.ny(q,n).bI(0)
else if(o===B.aD)return A.nw(q,n).bI(0)}return p},
eM(a){if(a.ac(4)!=="RIFF")return!1
a.k()
if(a.ac(4)!=="WEBP")return!1
return!0},
fs(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.b,g=a.c,f=!1
while(!0){if(!(a.d<g&&!f))break
s=a.ac(4)
r=a.k()
q=r+1>>>1<<1>>>0
p=a.d
o=p-h
switch(s){case"VP8X":if(!this.jg(a,b))return!1
break
case"VP8 ":b.ay=o
b.ch=r
b.f=B.aD
f=!0
break
case"VP8L":b.ay=o
b.ch=r
b.f=B.ag
f=!0
break
case"ALPH":n=a.a
m=a.e
l=n.length
n=new A.as(n,0,l,0,m)
b.at=n
n.d=p
a.d+=q
break
case"ANIM":b.f=B.jU
k=a.k()
p=new Uint8Array(4)
if(0>=4)return A.a(p,0)
p[0]=k>>>8&255
if(1>=4)return A.a(p,1)
p[1]=k>>>16&255
if(2>=4)return A.a(p,2)
p[2]=k>>>24&255
if(3>=4)return A.a(p,3)
p[3]=k&255
a.p()
break
case"ANMF":if(!this.jc(a,b,r))return!1
break
case"ICCP":b.toString
j=a.af(r)
a.d=a.d+(j.c-j.d)
j.a_()
break
case"EXIF":b.toString
a.ac(r)
break
case"XMP ":b.toString
a.ac(r)
break
default:a.d=p+q
break}p=a.d
i=q-(p-h-o)
if(i>0)a.d=p+i}if(!b.d)b.d=b.at!=null
return b.f!==B.V},
jg(a,b){var s,r,q,p,o=a.B()
if((o&192)!==0)return!1
s=B.a.j(o,4)
r=B.a.j(o,1)
if((o&1)!==0)return!1
if(a.bo()!==0)return!1
q=a.bo()
p=a.bo()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
jc(a,b,c){var s,r=a.bo(),q=a.bo()
a.bo()
a.bo()
s=new A.hE(r*2,q*2,a.bo())
s.hO(a,c)
if(s.r!==0)return!1
B.c.H(b.z,s)
return!0}}
A.kp.prototype={
aj(){return"IccProfileCompression."+this.b}}
A.ez.prototype={
kB(){var s,r=this
if(r.b===B.am)return r.c
s=t.D.a(B.aL.kR(r.c))
r.c=s
r.b=B.am
return s}}
A.hj.prototype={
aj(){return"FrameType."+this.b}}
A.bO.prototype={
gaq(){var s=this.x
if(s===$){s=A.b([],t.g)
this.sbP(s)}return s},
hH(a,b,c,d){var s,r,q,p=this,o=a.gG(),n=a.gbm(),m=a.a
p.eA(d,b,o,n,m==null?null:m.gP())
o=a.b
if(o!=null)p.sdl(A.hQ(o,t.N,t.X))
o=a.d
if(o!=null){n=t.N
p.sdq(A.hQ(o,n,n))}B.c.H(p.gaq(),p)
if(!c){s=a.gaq().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$){q=A.b([],o)
a.sbP(q)}if(!(r<q.length))return A.a(q,r)
p.aH(A.hp(q[r],b,!1,d))}}},
hG(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.sdl(A.hQ(n,t.N,t.X))
n=a.d
if(n!=null){s=t.N
o.sdq(A.hQ(n,s,s))}B.c.H(o.gaq(),o)
if(!b&&a.gaq().length>1){r=a.gaq().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$){p=A.b([],n)
a.sbP(p)}if(!(q<p.length))return A.a(p,q)
o.aH(A.bl(p[q],!1,!1))}}},
aH(a){var s=this
if(a==null)a=A.bl(s,!0,!0)
a.z=s.gaq().length
if(B.c.gfS(s.gaq())!==a)B.c.H(s.gaq(),a)
return a},
dh(){return this.aH(null)},
eA(a,b,c,d,e){var s,r,q=this
switch(c.a){case 0:if(e==null){s=B.b.b2(a*d/8)
r=new A.dG($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b2(a/8)
r=new A.dG($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.b2(a*(d<<1>>>0)/8)
r=new A.dH($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b2(a/4)
r=new A.dH($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.b2(a*1.5):B.b.b2(a/2)
r=new A.dJ($,s,null,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.b2(a/2)
r=new A.dJ($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.oy(a,b,d)
else q.a=new A.dK(new Uint8Array(a*b),e,a,b,1)
break
case 4:q.a=new A.eE(new Uint16Array(a*b*d),a,b,d)
break
case 5:q.a=A.r7(a,b,d)
break
case 6:q.a=new A.eD(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.eB(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.eC(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=A.r5(a,b,d)
break
case 10:q.a=A.r6(a,b,d)
break
case 11:q.a=new A.eA(new Float64Array(a*b*4*d),a,b,d)
break}},
A(a){var s=this
return"Image("+s.gX(s)+", "+s.gM(s)+", "+s.gG().b+", "+s.gbm()+")"},
gX(a){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gM(a){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gG(){var s=this.a
s=s==null?null:s.gG()
return s==null?B.e:s},
gbT(){var s=this.e
return s==null?this.e=new A.du(A.a_(t.N,t.a)):s},
hd(a,b){var s=this
if(s.b==null)s.sdl(A.a_(t.N,t.X))
s.b.h(0,a,b)
if(s.b.a===0)s.sdl(null)},
gF(a){var s=this.a
return s.gF(s)},
ga6(a){var s=this.a
s=s==null?null:s.ga6(s)
if(s==null)s=new Uint8Array(0).buffer
return s},
gbm(){var s=this.a
s=s==null?null:s.gP()
s=s==null?null:s.b
if(s==null){s=this.a
s=s==null?null:s.c}return s==null?0:s},
gbi(){var s=this.a
return(s==null?null:s.gP())!=null},
gaF(){var s=this.a
s=s==null?null:s.gaF()
return s==null?0:s},
fO(a,b){var s=this
return a>=0&&b>=0&&a<s.gX(s)&&b<s.gM(s)},
aJ(a,b,c,d){var s=this.a
s=s==null?null:s.aJ(a,b,c,d)
if(s==null)s=new A.bJ(new Uint8Array(0))
return s},
K(a,b,c){var s=this.a
s=s==null?null:s.K(a,b,c)
return s==null?new A.R():s},
aK(a,b){return this.K(a,b,null)},
ak(a,b){var s=this
if(a<0||a>=s.gX(s)||b<0||b>=s.gM(s))return new A.R()
return s.K(a,b,null)},
h8(a,b,c){switch(c.a){case 0:return this.ak(B.b.i(a),B.b.i(b))
case 1:case 3:return this.h9(a,b)
case 2:return this.h7(a,b)}},
h9(a,b){var s,r,q,p,o,n,m=this,l=B.b.i(a),k=l-(a>=0?0:1),j=k+1
l=B.b.i(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.kw(a-k,b-s)
q=m.ak(k,s)
p=r>=m.gM(m)?q:m.ak(k,r)
o=j>=m.gX(m)?q:m.ak(j,s)
n=j>=m.gX(m)||r>=m.gM(m)?q:m.ak(j,r)
return m.aJ(l.$4(q.gq(q),o.gq(o),p.gq(p),n.gq(n)),l.$4(q.gt(),o.gt(),p.gt(),n.gt()),l.$4(q.gv(q),o.gv(o),p.gv(p),n.gv(n)),l.$4(q.gu(q),o.gu(o),p.gu(p),n.gu(n)))},
h7(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=this,c7=B.b.i(d2),c8=c7-(d2>=0?0:1),c9=c8-1,d0=c8+1,d1=c8+2
c7=B.b.i(d3)
s=c7-(d3>=0?0:1)
r=s-1
q=s+1
p=s+2
o=d2-c8
n=d3-s
c7=new A.kv()
m=c6.ak(c8,s)
l=c9<0
k=!l
j=!k||r<0?m:c6.ak(c9,r)
i=l?m:c6.ak(c8,r)
h=r<0
g=h||d0>=c6.gX(c6)?m:c6.ak(d0,r)
f=d1>=c6.gX(c6)||h?m:c6.ak(d1,r)
e=c7.$5(o,j.gq(j),i.gq(i),g.gq(g),f.gq(f))
d=c7.$5(o,j.gt(),i.gt(),g.gt(),f.gt())
c=c7.$5(o,j.gv(j),i.gv(i),g.gv(g),f.gv(f))
b=c7.$5(o,j.gu(j),i.gu(i),g.gu(g),f.gu(f))
a=l?m:c6.ak(c9,s)
a0=d0>=c6.gX(c6)?m:c6.ak(d0,s)
a1=d1>=c6.gX(c6)?m:c6.ak(d1,s)
a2=c7.$5(o,a.gq(a),m.gq(m),a0.gq(a0),a1.gq(a1))
a3=c7.$5(o,a.gt(),m.gt(),a0.gt(),a1.gt())
a4=c7.$5(o,a.gv(a),m.gv(m),a0.gv(a0),a1.gv(a1))
a5=c7.$5(o,a.gu(a),m.gu(m),a0.gu(a0),a1.gu(a1))
a6=!k||q>=c6.gM(c6)?m:c6.ak(c9,q)
a7=q>=c6.gM(c6)?m:c6.ak(c8,q)
a8=d0>=c6.gX(c6)||q>=c6.gM(c6)?m:c6.ak(d0,q)
a9=d1>=c6.gX(c6)||q>=c6.gM(c6)?m:c6.ak(d1,q)
b0=c7.$5(o,a6.gq(a6),a7.gq(a7),a8.gq(a8),a9.gq(a9))
b1=c7.$5(o,a6.gt(),a7.gt(),a8.gt(),a9.gt())
b2=c7.$5(o,a6.gv(a6),a7.gv(a7),a8.gv(a8),a9.gv(a9))
b3=c7.$5(o,a6.gu(a6),a7.gu(a7),a8.gu(a8),a9.gu(a9))
b4=!k||p>=c6.gM(c6)?m:c6.ak(c9,p)
b5=p>=c6.gM(c6)?m:c6.ak(c8,p)
b6=d0>=c6.gX(c6)||p>=c6.gM(c6)?m:c6.ak(d0,p)
b7=d1>=c6.gX(c6)||p>=c6.gM(c6)?m:c6.ak(d1,p)
b8=c7.$5(o,b4.gq(b4),b5.gq(b5),b6.gq(b6),b7.gq(b7))
b9=c7.$5(o,b4.gt(),b5.gt(),b6.gt(),b7.gt())
c0=c7.$5(o,b4.gv(b4),b5.gv(b5),b6.gv(b6),b7.gv(b7))
c1=c7.$5(o,b4.gu(b4),b5.gu(b5),b6.gu(b6),b7.gu(b7))
c2=c7.$5(n,e,a2,b0,b8)
c3=c7.$5(n,d,a3,b1,b9)
c4=c7.$5(n,c,a4,b2,c0)
c5=c7.$5(n,b,a5,b3,c1)
return c6.aJ(B.b.i(c2),B.b.i(c3),B.b.i(c4),B.b.i(c5))},
bO(a,b,c){var s
t.G.a(c)
if(t.mK.b(c))if(c.gb6(c).gP()!=null)if(this.gbi()){s=this.a
if(s!=null)s.S(a,b,c.gL(c),0,0)
return}s=this.a
if(s!=null)s.al(a,b,c.gq(c),c.gt(),c.gv(c),c.gu(c))},
gD(){var s=this.a
s=s==null?null:s.gD()
return s==null?0:s},
aG(a,b){var s=this.a
return s==null?null:s.aG(0,b)},
kw(a){return this.aG(a,null)},
fE(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null
if(a7==null)a7=a5.gG()
if(a8==null)a8=a5.gbm()
s=B.bC.l(0,a7)
if(a7.a<3)a5.gG()
if(a7===a5.gG())if(a8===a5.gbm()){r=a5.a
r=(r==null?a6:r.gP())==null
if(!r)r=!1
else r=!0}else r=!1
else r=!1
if(r)return A.bl(a5,!1,!1)
for(r=a5.gaq(),q=r.length,p=t.N,o=t.p,n=a6,m=0;m<r.length;r.length===q||(0,A.an)(r),++m,n=d){l=r[m]
k=l.a
j=k==null
i=j?a6:k.a
if(i==null)i=0
k=j?a6:k.b
if(k==null)k=0
j=l.e
j=j==null?a6:A.eq(j)
h=l.c
if(h==null)h=a6
else{g=h.a
f=h.b
h=h.c
h=new A.ez(g,f,new Uint8Array(h.subarray(0,A.bu(0,a6,h.length))))}g=l.w
f=l.r
e=A.a5(a6,j,a7,l.y,g,k,h,f,a8,a6,i,!1)
k=l.d
e.sdq(k!=null?A.hQ(k,p,p):a6)
if(n!=null){n.aH(e)
d=n}else d=e
k=e.a
c=k==null?a6:k.gP()
k=e.a
k=k==null?a6:k.gP()
b=k==null?a6:k.gG()
if(b==null)b=a7
k=l.a
if(c!=null){a=A.a_(o,o)
a0=k==null?a6:k.K(0,0,a6)
if(a0==null)a0=new A.R()
for(k=e.a,k=k.gF(k),a1=a6,a2=0;k.C();){a3=k.gJ(k)
a4=A.q0(B.b.dm(a0.ga8()*255),B.b.dm(a0.ga0()*255),B.b.dm(a0.ga5()*255),0)
if(a.aI(0,a4)){j=a.l(0,a4)
j.toString
a3.sL(0,j)}else{a.h(0,a4,a2)
a3.sL(0,a2)
a1=A.nO(a0,s,b,a8,a1)
c.aY(a2,a1.gq(a1),a1.gt(),a1.gv(a1));++a2}a0.C()}}else{a0=k==null?a6:k.K(0,0,a6)
if(a0==null)a0=new A.R()
for(k=e.a,k=k.gF(k);k.C();){A.nO(a0,s,a6,a6,k.gJ(k))
a0.C()}}}n.toString
return n},
kD(a){return this.fE(a,null)},
kE(a){return this.fE(null,a)},
kt(a){var s,r,q,p
t.je.a(a)
if(this.d==null){s=t.N
this.sdq(A.a_(s,s))}for(s=A.eM(a,a.r,A.o(a).c);s.C();){r=s.d
q=this.d
q.toString
p=a.l(0,r)
p.toString
q.h(0,r,p)}},
gbF(){var s,r=this
if(r.gG()===B.v)s=2
else if(r.gG()===B.w)s=4
else if(r.gG()===B.x)s=16
else s=r.gG()===B.e?256:0
return s},
ir(a,b){var s,r=this
switch(a.a){case 0:return null
case 1:return null
case 2:return null
case 3:s=r.gbF()
return new A.b9(new Uint8Array(s*b),s,b)
case 4:s=r.gbF()
return new A.eZ(new Uint16Array(s*b),s,b)
case 5:s=r.gbF()
return new A.dP(new Uint32Array(s*b),s,b)
case 6:s=r.gbF()
return new A.eY(new Int8Array(s*b),s,b)
case 7:s=r.gbF()
return new A.eW(new Int16Array(s*b),s,b)
case 8:s=r.gbF()
return new A.eX(new Int32Array(s*b),s,b)
case 9:s=r.gbF()
return new A.eT(new Uint16Array(s*b),s,b)
case 10:s=r.gbF()
return new A.eU(new Float32Array(s*b),s,b)
case 11:s=r.gbF()
return new A.eV(new Float64Array(s*b),s,b)}},
sdl(a){this.b=t.hL.a(a)},
sdq(a){this.d=t.lG.a(a)},
sbP(a){this.x=t.aL.a(a)}}
A.kw.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:44}
A.kv.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:33}
A.ap.prototype={
gP(){return null}}
A.dE.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Uint16Array(r.length)
else r=new Uint16Array(A.J(r))
return new A.dE(r,s.a,s.b,s.c)},
gG(){return B.A},
ga6(a){return this.d.buffer},
gaF(){return 16},
gbp(){return this.a*this.c*2},
gF(a){return A.oP(this)},
gn(a){return this.d.byteLength},
gD(){return 1},
gbj(){return!0},
aJ(a,b,c,d){var s=new Uint16Array(4),r=new A.df(s),q=A.U(a)
if(0>=4)return A.a(s,0)
s[0]=q
q=A.U(b)
if(1>=4)return A.a(s,1)
s[1]=q
q=A.U(c)
if(2>=4)return A.a(s,2)
s[2]=q
q=A.U(d)
if(3>=4)return A.a(s,3)
s[3]=q
s=r
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cN)||c.d!==this)c=A.oP(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=A.U(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.U(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.U(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=A.U(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.U(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.U(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=A.U(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=A.U(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.dF.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Float32Array(r.length)
else r=new Float32Array(A.J(r))
return new A.dF(r,s.a,s.b,s.c)},
gG(){return B.E},
ga6(a){return this.d.buffer},
gaF(){return 32},
gF(a){return A.oQ(this)},
gn(a){return this.d.byteLength},
gD(){return 1},
gbp(){return this.a*this.c*4},
gbj(){return!0},
aJ(a,b,c,d){var s=new Float32Array(4),r=new A.dg(s)
if(0>=4)return A.a(s,0)
s[0]=a
if(1>=4)return A.a(s,1)
s[1]=b
if(2>=4)return A.a(s,2)
s[2]=c
if(3>=4)return A.a(s,3)
s[3]=d
s=r
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cO)||c.d!==this)c=A.oQ(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<o))return A.a(p,r)
p[r]=e}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<o))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<o))return A.a(p,r)
p[r]=f}}}},
A(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.eA.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Float64Array(r.length)
else r=new Float64Array(A.J(r))
return new A.eA(r,s.a,s.b,s.c)},
gG(){return B.H},
ga6(a){return this.d.buffer},
gn(a){return this.d.byteLength},
gaF(){return 64},
gF(a){return A.oR(this)},
gD(){return 1},
gbp(){return this.a*this.c*8},
gbj(){return!0},
aJ(a,b,c,d){var s=new Float64Array(4),r=new A.dh(s)
if(0>=4)return A.a(s,0)
s[0]=a
if(1>=4)return A.a(s,1)
s[1]=b
if(2>=4)return A.a(s,2)
s[2]=c
if(3>=4)return A.a(s,3)
s[3]=d
s=r
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cP)||c.d!==this)c=A.oR(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<o))return A.a(p,r)
p[r]=e}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<o))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<o))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<o))return A.a(p,r)
p[r]=f}}}},
A(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.eB.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Int16Array(r.length)
else r=new Int16Array(A.J(r))
return new A.eB(r,s.a,s.b,s.c)},
gG(){return B.J},
ga6(a){return this.d.buffer},
gF(a){return A.oS(this)},
gn(a){return this.d.byteLength},
gD(){return 32767},
gbj(){return!0},
gaF(){return 16},
gbp(){return this.a*this.c*2},
aJ(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int16Array(4),n=new A.di(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cQ)||c.d!==this)c=A.oS(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.eC.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Int32Array(r.length)
else r=new Int32Array(A.J(r))
return new A.eC(r,s.a,s.b,s.c)},
gG(){return B.K},
ga6(a){return this.d.buffer},
gaF(){return 32},
gbp(){return this.a*this.c*4},
gF(a){return A.oT(this)},
gn(a){return this.d.byteLength},
gD(){return 2147483647},
gbj(){return!0},
aJ(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int32Array(4),n=new A.dj(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cR)||c.d!==this)c=A.oT(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.eD.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Int8Array(r.length)
else r=new Int8Array(A.J(r))
return new A.eD(r,s.a,s.b,s.c)},
gG(){return B.I},
ga6(a){return this.d.buffer},
gbp(){return this.a*this.c},
gF(a){return A.oU(this)},
gn(a){return this.d.byteLength},
gD(){return 127},
gbj(){return!0},
gaF(){return 8},
aJ(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Int8Array(4),n=new A.dk(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cS)||c.d!==this)c=A.oU(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.dG.prototype={
lE(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.nV("data")
this.d=s},
bg(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.J(q))}s=r.f
s=s==null?null:s.N(0)
return new A.dG(q,r.e,s,r.a,r.b,r.c)},
gG(){return B.v},
gn(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?1:s},
gbj(){return!1},
ga6(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gaF(){return 1},
gF(a){return A.i7(this)},
aJ(a,b,c,d){var s=new A.dl(4,0)
s.a3(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
K(a,b,c){if(c==null||!(c instanceof A.cT)||c.f!==this)c=A.i7(this)
c.aN(0,a,b)
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i7(r):s).aN(0,a,b)
r.r.am(0,c)},
S(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i7(r):s).aN(0,a,b)
r.r.aB(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i7(r):s).aN(0,a,b)
r.r.a3(c,d,e,f)},
A(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){},
gbp(){return this.e},
gP(){return this.f}}
A.eE.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Uint16Array(r.length)
else r=new Uint16Array(A.J(r))
return new A.eE(r,s.a,s.b,s.c)},
gG(){return B.y},
ga6(a){return this.d.buffer},
gaF(){return 16},
gD(){return 65535},
gbp(){return this.a*this.c*2},
gF(a){return A.oV(this)},
gn(a){return this.d.byteLength},
gbj(){return!0},
aJ(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint16Array(4),n=new A.dm(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cU)||c.d!==this)c=A.oV(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.dH.prototype={
lF(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.nV("data")
this.d=s},
bg(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.J(q))}s=r.f
s=s==null?null:s.N(0)
return new A.dH(q,r.e,s,r.a,r.b,r.c)},
gG(){return B.w},
gaF(){return 2},
ga6(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gF(a){return A.i8(this)},
gn(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?3:s},
gbj(){return!1},
aJ(a,b,c,d){var s=new A.dn(4,0)
s.a3(B.b.i(a),B.b.i(b),B.b.i(c),B.b.i(d))
return s},
K(a,b,c){if(c==null||!(c instanceof A.cV)||c.f!==this)c=A.i8(this)
c.aN(0,a,b)
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i8(r):s).aN(0,a,b)
r.r.an(0,c)},
S(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i8(r):s).aN(0,a,b)
r.r.aB(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i8(r):s).aN(0,a,b)
r.r.a3(c,d,e,f)},
A(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){},
gbp(){return this.e},
gP(){return this.f}}
A.dI.prototype={
bg(a,b){var s=this,r=s.d
if(b)r=new Uint32Array(r.length)
else r=new Uint32Array(A.J(r))
return new A.dI(r,s.a,s.b,s.c)},
gG(){return B.F},
ga6(a){return this.d.buffer},
gbp(){return this.a*this.c*4},
gaF(){return 32},
gD(){return 4294967295},
gF(a){return A.oW(this)},
gn(a){return this.d.byteLength},
gbj(){return!0},
aJ(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new Uint32Array(4),n=new A.dp(o)
if(0>=4)return A.a(o,0)
o[0]=s
if(1>=4)return A.a(o,1)
o[1]=r
if(2>=4)return A.a(o,2)
o[2]=q
if(3>=4)return A.a(o,3)
o[3]=p
s=n
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cW)||c.d!==this)c=A.oW(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){}}
A.dJ.prototype={
lG(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.nV("data")
this.d=s},
bg(a,b){var s,r=this,q=r.d
if(b){q===$&&A.c("data")
q=new Uint8Array(q.length)}else{q===$&&A.c("data")
q=new Uint8Array(A.J(q))}s=r.f
s=s==null?null:s.N(0)
return new A.dJ(q,r.e,s,r.a,r.b,r.c)},
gG(){return B.x},
ga6(a){var s=this.d
s===$&&A.c("data")
return s.buffer},
gF(a){return A.i9(this)},
gn(a){var s=this.d
s===$&&A.c("data")
return s.byteLength},
gD(){var s=this.f
s=s==null?null:s.gD()
return s==null?15:s},
gbj(){return!1},
gaF(){return 4},
aJ(a,b,c,d){var s=B.b.i(a),r=B.b.i(b),q=B.b.i(c),p=B.b.i(d),o=new A.dq(4,new Uint8Array(2))
o.a3(s,r,q,p)
s=o
return s},
K(a,b,c){if(c==null||!(c instanceof A.cX)||c.e!==this)c=A.i9(this)
c.aN(0,a,b)
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i9(r):s).aN(0,a,b)
r.r.ao(0,c)},
S(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i9(r):s).aN(0,a,b)
r.r.aB(c,d,e)},
al(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.i9(r):s).aN(0,a,b)
r.r.a3(c,d,e,f)},
A(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){},
gbp(){return this.e},
gP(){return this.f}}
A.dK.prototype={
bg(a,b){var s,r=this,q=r.d
if(b)q=new Uint8Array(q.length)
else q=new Uint8Array(A.J(q))
s=r.e
s=s==null?null:s.N(0)
return new A.dK(q,s,r.a,r.b,r.c)},
gG(){return B.e},
ga6(a){return this.d.buffer},
gbp(){return this.a*this.c},
gaF(){return 8},
gF(a){return A.ni(this)},
gn(a){return this.d.byteLength},
gD(){var s=this.e
s=s==null?null:s.gD()
return s==null?255:s},
gbj(){return!1},
aJ(a,b,c,d){var s=A.qL(B.b.i(B.b.I(a,0,255)),B.b.i(B.b.I(b,0,255)),B.b.i(B.b.I(c,0,255)),B.b.i(B.b.I(d,0,255)))
return s},
K(a,b,c){var s,r
if(c==null||!(c instanceof A.cY)||c.d!==this)c=A.ni(this)
c.a=a
c.b=b
s=c.d
r=s.c
c.c=b*s.a*r+a*r
return c},
aK(a,b){return this.K(a,b,null)},
aE(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.i(c)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
S(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.i(e)
if(!(r<n))return A.a(p,r)
p[r]=o}}},
al(a,b,c,d,e,f){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.i(c),n=p.length
if(!(q>=0&&q<n))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.i(d)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.b.i(e)
if(!(o<n))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.b.i(f)
if(!(r<n))return A.a(p,r)
p[r]=o}}}},
A(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=b==null?e:A.nO(b,e,B.e,e,e),c=f.c
if(c===1){s=d==null?0:B.a.I(A.x(d.gq(d)),0,255)
c=f.d
B.k.aL(c,0,c.length,s)}else if(c===2){c=d==null
s=c?0:B.a.I(A.x(d.gq(d)),0,255)
r=c?0:B.a.I(A.x(d.gt()),0,255)
q=A.rk(f.d.buffer,0,e)
B.j1.aL(q,0,q.length,(r<<8|s)>>>0)}else if(c===4){c=d==null
s=c?0:B.a.I(A.x(d.gq(d)),0,255)
r=c?0:B.a.I(A.x(d.gt()),0,255)
p=c?0:B.a.I(A.x(d.gv(d)),0,255)
o=c?0:B.a.I(A.x(d.gu(d)),0,255)
n=A.b_(f.d.buffer,0,e)
B.Q.aL(n,0,n.length,(o<<24|p<<16|r<<8|s)>>>0)}else{c=d==null
s=c?0:B.a.I(A.x(d.gq(d)),0,255)
r=c?0:B.a.I(A.x(d.gt()),0,255)
p=c?0:B.a.I(A.x(d.gv(d)),0,255)
for(m=A.ni(f),c=m.d,l=c.c,k=l>2,j=l>1,l=l>0,c=c.d,i=c.length;m.C();){if(l){h=m.c
g=B.b.i(B.a.I(s,0,255))
if(!(h>=0&&h<i))return A.a(c,h)
c[h]=g}if(j){h=m.c+1
g=B.b.i(B.a.I(r,0,255))
if(!(h>=0&&h<i))return A.a(c,h)
c[h]=g}if(k){h=m.c+2
g=B.b.i(B.a.I(p,0,255))
if(!(h>=0&&h<i))return A.a(c,h)
c[h]=g}}}},
gP(){return this.e}}
A.hF.prototype={
aj(){return"Interpolation."+this.b}}
A.b8.prototype={}
A.eT.prototype={
N(a){return new A.eT(new Uint16Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.A},
gD(){return 1},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=A.U(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aY(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=A.U(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=A.U(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=A.U(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Z
s=s!=null?s:A.a4()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s,r
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
return r[s]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Z
s=s!=null?s:A.a4()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Z
s=s!=null?s:A.a4()
if(!(r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.Z
s=s!=null?s:A.a4()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.eU.prototype={
N(a){return new A.eU(new Float32Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.E},
gD(){return 1},
T(a,b,c,d){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=d}},
aY(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.eV.prototype={
N(a){return new A.eV(new Float64Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.H},
gD(){return 1},
T(a,b,c,d){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=d}},
aY(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.eW.prototype={
N(a){return new A.eW(new Int16Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.J},
gD(){return 32767},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aY(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.eX.prototype={
N(a){return new A.eX(new Int32Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.K},
gD(){return 2147483647},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aY(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.eY.prototype={
N(a){return new A.eY(new Int8Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.I},
gD(){return 127},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aY(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.eZ.prototype={
N(a){return new A.eZ(new Uint16Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.y},
gD(){return 65535},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aY(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.dP.prototype={
N(a){return new A.dP(new Uint32Array(A.J(this.c)),this.a,this.b)},
ga6(a){return this.c.buffer},
gG(){return B.F},
gD(){return 4294967295},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.b.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aY(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aV(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
br(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.b9.prototype={
N(a){return A.oO(this)},
ga6(a){return this.c.buffer},
gG(){return B.e},
gD(){return 255},
T(a,b,c,d){var s,r,q=this.b
if(c<q){s=this.c
q=b*q+c
r=B.a.i(d)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
aY(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.i(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
cX(a,b,c,d,e){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.a.i(b)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.a.i(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){r=a+2
p=B.a.i(d)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>3){o=a+3
r=B.a.i(e)
if(!(o<q))return A.a(s,o)
s[o]=r}}}},
ba(a,b,c){var s,r=this.b
if(c<r){s=this.c
r=b*r+c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s,r
a*=this.b
s=this.c
r=s.length
if(a>=r)return 0
if(!(a>=0))return A.a(s,a)
return s[a]},
aW(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aV(a){var s,r,q=this.b
if(q<3)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+2
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
br(a){var s,r,q=this.b
if(q<4)return 255
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+3
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
bz(a,b){return this.T(0,a,0,b)},
by(a,b){return this.T(0,a,1,b)},
bx(a,b){return this.T(0,a,2,b)},
bw(a,b){return this.T(0,a,3,b)}}
A.cN.prototype={
N(a){var s=this
return new A.cN(s.a,s.b,s.c,s.d)},
gG(){return B.A},
gn(a){return this.d.c},
gP(){return null},
gD(){return 1},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
q=A.U(c)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.U(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=A.U(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=A.U(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.Z
r=r!=null?r:A.a4()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r,q,p=this.d
if(p.c>3){s=this.gt()
p=p.d
r=this.c+3
q=A.U(s)
if(!(r>=0&&r<p.length))return A.a(p,r)
p[r]=q}},
ga8(){return this.gq(this)/1},
sa8(a){this.sq(0,a)},
ga0(){return this.gt()/1},
sa0(a){this.st(a)},
ga5(){return this.gv(this)/1},
sa5(a){this.sv(0,a)},
ga9(){return this.gu(this)/1},
sa9(a){this.su(0,a)},
gah(){return A.af(this)},
ae(a,b){var s=this
if(s.d.c>0){s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))}},
aB(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.U(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.U(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){n=p.c+2
s=A.U(c)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.U(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){s=p.c+1
r=A.U(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){s=p.c+2
r=A.U(c)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>3){n=p.c+3
s=A.U(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cN)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cO.prototype={
N(a){var s=this
return new A.cO(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 1},
gG(){return B.E},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=1
return r},
su(a,b){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
ga8(){return this.gq(this)/1},
sa8(a){this.sq(0,a)},
ga0(){return this.gt()/1},
sa0(a){this.st(a)},
ga5(){return this.gv(this)/1},
sa5(a){this.sv(0,a)},
ga9(){return this.gu(this)/1},
sa9(a){this.su(0,a)},
gah(){return A.af(this)},
ae(a,b){var s=this
s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))},
aB(a,b,c){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<o))return A.a(q,r)
q[r]=c}}},
a3(a,b,c,d){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<o))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<o))return A.a(q,r)
q[r]=d}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cO)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cP.prototype={
N(a){var s=this
return new A.cP(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 1},
gG(){return B.H},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=b}},
ga8(){return this.gq(this)/1},
sa8(a){this.sq(0,a)},
ga0(){return this.gt()/1},
sa0(a){this.st(a)},
ga5(){return this.gv(this)/1},
sa5(a){this.sv(0,a)},
ga9(){return this.gu(this)/1},
sa9(a){this.su(0,a)},
gah(){return A.af(this)},
ae(a,b){var s=this
s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))},
aB(a,b,c){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<o))return A.a(q,r)
q[r]=c}}},
a3(a,b,c,d){var s,r=this.d,q=r.d,p=this.c,o=q.length
if(!(p>=0&&p<o))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<o))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<o))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<o))return A.a(q,r)
q[r]=d}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cP)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cQ.prototype={
N(a){var s=this
return new A.cQ(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 32767},
gG(){return B.J},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
q=B.b.i(c)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga8(){return this.gq(this)/32767},
sa8(a){this.sq(0,a*32767)},
ga0(){return this.gt()/32767},
sa0(a){this.st(a*32767)},
ga5(){return this.gv(this)/32767},
sa5(a){this.sv(0,a*32767)},
ga9(){return this.gu(this)/32767},
sa9(a){this.su(0,a*32767)},
gah(){return A.af(this)},
ae(a,b){var s=this
s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))},
aB(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cQ)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cR.prototype={
N(a){var s=this
return new A.cR(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 2147483647},
gG(){return B.K},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
q=B.b.i(c)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga8(){return this.gq(this)/2147483647},
sa8(a){this.sq(0,a*2147483647)},
ga0(){return this.gt()/2147483647},
sa0(a){this.st(a*2147483647)},
ga5(){return this.gv(this)/2147483647},
sa5(a){this.sv(0,a*2147483647)},
ga9(){return this.gu(this)/2147483647},
sa9(a){this.su(0,a*2147483647)},
gah(){return A.af(this)},
ae(a,b){var s=this
s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))},
aB(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cR)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cS.prototype={
N(a){var s=this
return new A.cS(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 127},
gG(){return B.I},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
q=B.b.i(c)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga8(){return this.gq(this)/127},
sa8(a){this.sq(0,a*127)},
ga0(){return this.gt()/127},
sa0(a){this.st(a*127)},
ga5(){return this.gv(this)/127},
sa5(a){this.sv(0,a*127)},
ga9(){return this.gu(this)/127},
sa9(a){this.su(0,a*127)},
gah(){return A.af(this)},
ae(a,b){var s=this
s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))},
aB(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cS)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cT.prototype={
N(a){var s=this
return new A.cT(s.a,s.b,s.c,s.d,s.e,s.f)},
gn(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.f.f},
gD(){return this.f.gD()},
gG(){return B.v},
gaT(a){return this.a},
gaU(a){return this.b},
aN(a,b,c){var s,r,q=this
q.a=b
q.b=c
s=q.f
r=c*s.e
q.e=r
s=b*s.c
q.c=r+B.a.j(s,3)
q.d=s&7},
gJ(a){return this},
C(){var s,r=this,q=++r.a,p=r.f
if(q===p.a){r.a=0
q=++r.b
r.d=0;++r.c
r.e=r.e+p.e
return q<p.b}s=p.c
if(p.f!=null||s===1){if(++r.d>7){r.d=0;++r.c}}else{q*=s
r.d=q&7
r.c=r.e+B.a.j(q,3)}q=r.c
p=p.d
p===$&&A.c("data")
return q<p.byteLength},
dX(a,b){var s,r,q=this.c,p=7-(this.d+b)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.c("data")
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.Z(s[q],p)&1},
b_(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dX(0,a):0
else s=r.ba(0,this.dX(0,0),a)
return s},
am(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=7-(this.d+a)
if(r<0){++s
r+=8}q=m.d
q===$&&A.c("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.I(B.b.i(b),0,1)
if(!(r>=0&&r<8))return A.a(B.bv,r)
n=B.bv[r]
q=B.b.W(o,r)
m=m.d
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
l(a,b){return this.b_(b)},
h(a,b,c){return this.am(b,A.a6(c))},
gL(a){return this.dX(0,0)},
sL(a,b){this.am(0,b)},
gq(a){return this.b_(0)},
sq(a,b){this.am(0,b)},
gt(){return this.b_(1)},
st(a){this.am(1,a)},
gv(a){return this.b_(2)},
sv(a,b){this.am(2,b)},
gu(a){return this.b_(3)},
su(a,b){this.am(3,b)},
ga8(){return this.b_(0)/this.f.gD()},
sa8(a){this.am(0,a*this.f.gD())},
ga0(){return this.b_(1)/this.f.gD()},
sa0(a){this.am(1,a*this.f.gD())},
ga5(){return this.b_(2)/this.f.gD()},
sa5(a){this.am(2,a*this.f.gD())},
ga9(){return this.b_(3)/this.f.gD()},
sa9(a){this.am(3,a*this.f.gD())},
gah(){return A.af(this)},
ae(a,b){var s=this
s.am(0,b.gq(b))
s.am(1,b.gt())
s.am(2,b.gv(b))
s.am(3,b.gu(b))},
aB(a,b,c){var s=this,r=s.f.c
if(r>0){s.am(0,a)
if(r>1){s.am(1,b)
if(r>2)s.am(2,c)}}},
a3(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.am(0,a)
if(r>1){s.am(1,b)
if(r>2){s.am(2,c)
if(r>3)s.am(3,d)}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cT)return A.r(A.B(p,!0,A.o(p).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.ae(b)
if(s.gn(b)!==q)return!1
if(p.b_(0)!==s.l(b,0))return!1
if(q>1){if(p.b_(1)!==s.l(b,1))return!1
if(q>2){if(p.b_(2)!==s.l(b,2))return!1
if(q>3)if(p.b_(3)!==s.l(b,3))return!1}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.f}}
A.cU.prototype={
N(a){var s=this
return new A.cU(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 65535},
gG(){return B.y},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
q=B.b.i(c)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga8(){return this.gq(this)/65535},
sa8(a){this.sq(0,a*65535)},
ga0(){return this.gt()/65535},
sa0(a){this.st(a*65535)},
ga5(){return this.gv(this)/65535},
sa5(a){this.sv(0,a*65535)},
ga9(){return this.gu(this)/65535},
sa9(a){this.su(0,a*65535)},
gah(){return A.af(this)},
ae(a,b){var s=this
s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))},
aB(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cU)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cV.prototype={
N(a){var s=this
return new A.cV(s.a,s.b,s.c,s.d,s.e,s.f)},
gn(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.f.f},
gD(){return this.f.gD()},
gG(){return B.w},
gfA(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gaT(a){return this.a},
gaU(a){return this.b},
aN(a,b,c){var s,r,q,p=this
p.a=b
p.b=c
s=p.gfA()
r=p.b*p.f.e
p.e=r
q=p.a*s
p.c=r+B.a.j(q,3)
p.d=q&7},
gJ(a){return this},
C(){var s,r,q=this,p=q.f
if(++q.a===p.a){q.a=0
s=++q.b
q.d=0;++q.c
q.e=q.e+p.e
return s<p.b}if(p.f!=null||p.c===1){s=q.d+=2
if(s>7){q.d=0;++q.c}}else{r=q.gfA()
s=q.a*r
q.d=s&7
q.c=q.e+B.a.j(s,3)}s=q.c
p=p.d
p===$&&A.c("data")
return s<p.length},
dY(a,b){var s,r=this.c,q=6-(this.d+(b<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.c("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.Z(s[r],q)&3},
b0(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.dY(0,a):0
else s=r.ba(0,this.dY(0,0),a)
return s},
an(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=6-(this.d+(a<<1>>>0))
if(r<0){++s
r+=8}q=m.d
q===$&&A.c("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.I(B.b.i(b),0,3)
q=B.a.j(r,1)
if(!(q<4))return A.a(B.aZ,q)
n=B.aZ[q]
q=B.b.W(o,r)
m=m.d
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
l(a,b){return this.b0(b)},
h(a,b,c){return this.an(b,A.a6(c))},
gL(a){return this.dY(0,0)},
sL(a,b){this.an(0,b)},
gq(a){return this.b0(0)},
sq(a,b){this.an(0,b)},
gt(){return this.b0(1)},
st(a){this.an(1,a)},
gv(a){return this.b0(2)},
sv(a,b){this.an(2,b)},
gu(a){return this.b0(3)},
su(a,b){this.an(3,b)},
ga8(){return this.b0(0)/this.f.gD()},
sa8(a){this.an(0,a*this.f.gD())},
ga0(){return this.b0(1)/this.f.gD()},
sa0(a){this.an(1,a*this.f.gD())},
ga5(){return this.b0(2)/this.f.gD()},
sa5(a){this.an(2,a*this.f.gD())},
ga9(){return this.b0(3)/this.f.gD()},
sa9(a){this.an(3,a*this.f.gD())},
gah(){return A.af(this)},
ae(a,b){var s=this
s.an(0,b.gq(b))
s.an(1,b.gt())
s.an(2,b.gv(b))
s.an(3,b.gu(b))},
aB(a,b,c){var s=this,r=s.f.c
if(r>0){s.an(0,a)
if(r>1){s.an(1,b)
if(r>2)s.an(2,c)}}},
a3(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.an(0,a)
if(r>1){s.an(1,b)
if(r>2){s.an(2,c)
if(r>3)s.an(3,d)}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cV)return A.r(A.B(p,!0,A.o(p).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.ae(b)
if(s.gn(b)!==q)return!1
if(p.b0(0)!==s.l(b,0))return!1
if(q>1){if(p.b0(1)!==s.l(b,1))return!1
if(q>2){if(p.b0(2)!==s.l(b,2))return!1
if(q>3)if(p.b0(3)!==s.l(b,3))return!1}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.f}}
A.cW.prototype={
N(a){var s=this
return new A.cW(s.a,s.b,s.c,s.d)},
gn(a){return this.d.c},
gP(){return null},
gD(){return 4294967295},
gG(){return B.F},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
l(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
h(a,b,c){var s,r,q
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
q=B.b.i(c)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q}},
gL(a){return this.gq(this)},
sL(a,b){this.sq(0,b)},
gq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d
if(r.c>1){r=r.d
s=this.c+1
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(a)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d
if(r.c>2){r=r.d
s=this.c+2
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d
if(r.c>3){r=r.d
s=this.c+3
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
su(a,b){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(b)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga8(){return this.gq(this)/4294967295},
sa8(a){this.sq(0,a*4294967295)},
ga0(){return this.gt()/4294967295},
sa0(a){this.st(a*4294967295)},
ga5(){return this.gv(this)/4294967295},
sa5(a){this.sv(0,a*4294967295)},
ga9(){return this.gu(this)/4294967295},
sa9(a){this.su(0,a*4294967295)},
gah(){return A.af(this)},
ae(a,b){var s=this
s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))},
aB(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cW)return A.r(A.B(n,!0,A.o(n).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=J.ae(b)
r=n.d
q=r.c
if(s.gn(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.l(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.l(b,3))return!1}}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.cX.prototype={
N(a){var s=this
return new A.cX(s.a,s.b,s.c,s.d,s.e)},
gn(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.e.f},
gD(){return this.e.gD()},
gG(){return B.x},
gaT(a){return this.a},
gaU(a){return this.b},
aN(a,b,c){var s,r,q,p=this
p.a=b
p.b=c
s=p.e
r=s.c*4
q=s.e
if(r===4)s=c*q+B.a.j(b,1)
else if(r===8)s=c*s.a+b
else{s=c*q
s=r===16?s+(b<<1>>>0):s+B.a.j(b*r,3)}p.c=s
s=b*r
p.d=r>7?s&4:s&7},
gJ(a){return this},
C(){var s,r,q,p=this,o=p.e
if(++p.a===o.a){p.a=0
s=++p.b
p.d=0
p.c=s*o.e
return s<o.b}r=o.c
s=o.f!=null||r===1
q=p.d
if(s){s=q+4
p.d=s
if(s>7){p.d=0;++p.c}}else{s=p.d=q+(r<<2>>>0)
for(;s>7;){s-=8
p.d=s;++p.c}}s=p.c
o=o.d
o===$&&A.c("data")
return s<o.length},
dP(a,b){var s,r=this.c,q=4-(this.d+(b<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.c("data")
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.Z(s[r],q)&15},
aZ(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.dP(0,a):0
else s=r.ba(0,this.dP(0,0),a)
return s},
ao(a,b){var s,r,q,p,o,n,m=this.e
if(a>=m.c)return
s=this.c
r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}q=m.d
q===$&&A.c("data")
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.I(B.b.i(b),0,15)
n=r===4?15:240
q=B.b.W(o,r)
m=m.d
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
l(a,b){return this.aZ(b)},
h(a,b,c){return this.ao(b,A.a6(c))},
gL(a){return this.dP(0,0)},
sL(a,b){this.ao(0,b)},
gq(a){return this.aZ(0)},
sq(a,b){this.ao(0,b)},
gt(){return this.aZ(1)},
st(a){this.ao(1,a)},
gv(a){return this.aZ(2)},
sv(a,b){this.ao(2,b)},
gu(a){return this.aZ(3)},
su(a,b){this.ao(3,b)},
ga8(){return this.aZ(0)/this.e.gD()},
sa8(a){this.ao(0,a*this.e.gD())},
ga0(){return this.aZ(1)/this.e.gD()},
sa0(a){this.ao(1,a*this.e.gD())},
ga5(){return this.aZ(2)/this.e.gD()},
sa5(a){this.ao(2,a*this.e.gD())},
ga9(){return this.aZ(3)/this.e.gD()},
sa9(a){this.ao(3,a*this.e.gD())},
gah(){return A.af(this)},
ae(a,b){var s=this
s.ao(0,b.gq(b))
s.ao(1,b.gt())
s.ao(2,b.gv(b))
s.ao(3,b.gu(b))},
aB(a,b,c){var s=this,r=s.e.c
if(r>0){s.ao(0,a)
if(r>1){s.ao(1,b)
if(r>2)s.ao(2,c)}}},
a3(a,b,c,d){var s=this,r=s.e.c
if(r>0){s.ao(0,a)
if(r>1){s.ao(1,b)
if(r>2){s.ao(2,c)
if(r>3)s.ao(3,d)}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q=this
if(b==null)return!1
if(b instanceof A.cX)return A.r(A.B(q,!0,A.o(q).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=q.e.c
r=J.ae(b)
if(r.gn(b)!==s)return!1
if(q.aZ(0)!==r.l(b,0))return!1
if(s>1){if(q.aZ(1)!==r.l(b,1))return!1
if(s>2){if(q.aZ(2)!==r.l(b,2))return!1
if(s>3)if(q.aZ(3)!==r.l(b,3))return!1}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.e}}
A.cY.prototype={
N(a){var s=this
return new A.cY(s.a,s.b,s.c,s.d)},
gn(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gP(){return this.d.e},
gD(){return this.d.gD()},
gG(){return B.e},
gaT(a){return this.a},
gaU(a){return this.b},
gJ(a){return this},
C(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
cl(a,b){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.ba(0,r[s],b)
r=s}else if(b<r.c){r=r.d
q=this.c+b
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
l(a,b){return this.cl(0,b)},
h(a,b,c){var s,r,q
A.a6(c)
s=this.d
if(b<s.c){s=s.d
r=this.c+b
q=B.b.i(B.b.I(c,0,255))
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q}},
gL(a){var s=this.d.d,r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
sL(a,b){var s=this.d.d,r=this.c,q=B.b.i(B.b.I(b,0,255))
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q},
gq(a){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aX(r[s])
r=s}return r},
sq(a,b){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.i(B.b.I(b,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gt(){var s,r=this.d,q=r.e
if(q==null)if(r.c>1){r=r.d
q=this.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aW(r[s])
r=s}return r},
st(a){var s,r,q=this.d
if(q.c>1){q=q.d
s=this.c+1
r=B.b.i(B.b.I(a,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(a){var s,r=this.d,q=r.e
if(q==null)if(r.c>2){r=r.d
q=this.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aV(r[s])
r=s}return r},
sv(a,b){var s,r,q=this.d
if(q.c>2){q=q.d
s=this.c+2
r=B.b.i(B.b.I(b,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gu(a){var s,r=this.d,q=r.e
if(q==null)if(r.c>3){r=r.d
q=this.c+3
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=255
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.br(r[s])
r=s}return r},
su(a,b){var s,r,q=this.d
if(q.c>3){q=q.d
s=this.c+3
r=B.b.i(B.b.I(b,0,255))
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
ga8(){return this.gq(this)/this.d.gD()},
sa8(a){this.sq(0,a*this.d.gD())},
ga0(){return this.gt()/this.d.gD()},
sa0(a){this.st(a*this.d.gD())},
ga5(){return this.gv(this)/this.d.gD()},
sa5(a){this.sv(0,a*this.d.gD())},
ga9(){return this.gu(this)/this.d.gD()},
sa9(a){this.su(0,a*this.d.gD())},
gah(){return A.af(this)},
ae(a,b){var s=this
if(s.d.e!=null)s.sL(0,b.gL(b))
else{s.sq(0,b.gq(b))
s.st(b.gt())
s.sv(0,b.gv(b))
s.su(0,b.gu(b))}},
aB(a,b,c){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){n=s+2
s=B.a.i(c)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
a3(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.i(a)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>1){r=s+1
p=B.a.i(b)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>2){r=s+2
p=B.a.i(c)
if(!(r<q))return A.a(o,r)
o[r]=p
if(n>3){n=s+3
s=B.a.i(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}}},
gF(a){return new A.Y(this)},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cY)return A.r(A.B(p,!0,A.o(p).m("e.E")))===A.r(A.B(b,!0,A.o(b).m("e.E")))
if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.ae(b)
if(s.gn(b)!==q)return!1
if(p.cl(0,0)!==s.l(b,0))return!1
if(q>1){if(p.cl(0,1)!==s.l(b,1))return!1
if(q>2){if(p.cl(0,2)!==s.l(b,2))return!1
if(q>3)if(p.cl(0,3)!==s.l(b,3))return!1}}return!0}return!1},
gE(a){return A.r(A.B(this,!0,A.o(this).m("e.E")))},
$iF:1,
$iG:1,
$iz:1,
gb6(a){return this.d}}
A.R.prototype={
N(a){return new A.R()},
gb6(a){return $.q6()},
gaT(a){return 0},
gaU(a){return 0},
gn(a){return 0},
gD(){return 0},
gG(){return B.e},
gP(){return null},
l(a,b){return 0},
h(a,b,c){A.a6(c)},
gL(a){return 0},
sL(a,b){},
gq(a){return 0},
sq(a,b){},
gt(){return 0},
st(a){},
gv(a){return 0},
sv(a,b){},
gu(a){return 0},
su(a,b){},
ga8(){return 0},
sa8(a){},
ga0(){return 0},
sa0(a){},
ga5(){return 0},
sa5(a){},
ga9(){return 0},
sa9(a){},
gah(){return 0},
ae(a,b){},
aB(a,b,c){},
a3(a,b,c,d){},
gJ(a){return this},
C(){return!1},
R(a,b){if(b==null)return!1
return b instanceof A.R},
gE(a){return 0},
gF(a){return new A.Y(this)},
$iF:1,
$iG:1,
$iz:1}
A.kk.prototype={
aj(){return"FlipDirection."+this.b}}
A.ku.prototype={
A(a){return"ImageException: "+this.a}}
A.as.prototype={
gn(a){return this.c-this.d},
h(a,b,c){J.H(this.a,this.d+b,c)
return c},
bl(a,b,c,d){var s=this.a,r=J.ah(s),q=this.d+a
if(c instanceof A.as)r.ai(s,q,q+b,c.a,c.d+d)
else r.ai(s,q,q+b,t.L.a(c),d)},
bV(a,b,c){return this.bl(a,b,c,0)},
l7(a,b,c){var s=this.a,r=this.d+a
J.bG(s,r,r+b,c)},
dv(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.C(s.a,s.e,a,r+b)},
af(a){return this.dv(a,0,null)},
bX(a,b){return this.dv(a,0,b)},
cZ(a,b){return this.dv(a,b,null)},
B(){var s=this.a,r=this.d++
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
ab(a){var s=this.af(a)
this.d=this.d+(s.c-s.d)
return s},
ac(a){var s,r,q,p,o=this
if(a==null){s=A.b([],t.t)
for(r=o.c;q=o.d,q<r;){p=o.a
o.d=q+1
if(!(q>=0&&q<p.length))return A.a(p,q)
q=p[q]
if(q===0)return A.lh(s,0,null)
B.c.H(s,q)}throw A.f(A.q("EOF reached without finding string terminator (length: "+A.D(a)+")"))}return A.lh(o.ab(a).a_(),0,null)},
cN(){return this.ac(null)},
ll(){var s,r,q,p=this,o=A.b([],t.t)
for(s=p.c;r=p.d,r<s;){q=p.a
p.d=r+1
if(!(r>=0&&r<q.length))return A.a(q,r)
r=q[r]
if(r===0){t.L.a(o)
return B.bS.c1(o)}B.c.H(o,r)}return B.cd.kJ(0,o,!0)},
p(){var s,r,q=this,p=q.a,o=q.d,n=q.d=o+1,m=p.length
if(!(o>=0&&o<m))return A.a(p,o)
o=p[o]
if(typeof o!=="number")return o.av()
s=o&255
q.d=n+1
if(!(n>=0&&n<m))return A.a(p,n)
n=p[n]
if(typeof n!=="number")return n.av()
r=n&255
if(q.e)return s<<8|r
return r<<8|s},
bo(){var s,r,q,p=this,o=p.a,n=p.d,m=p.d=n+1,l=o.length
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.av()
s=n&255
n=p.d=m+1
if(!(m>=0&&m<l))return A.a(o,m)
m=o[m]
if(typeof m!=="number")return m.av()
r=m&255
p.d=n+1
if(!(n>=0&&n<l))return A.a(o,n)
n=o[n]
if(typeof n!=="number")return n.av()
q=n&255
if(p.e)return q|r<<8|s<<16
return s|r<<8|q<<16},
k(){var s,r,q,p,o=this,n=o.a,m=o.d,l=o.d=m+1,k=n.length
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.av()
s=m&255
m=o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.av()
r=l&255
l=o.d=m+1
if(!(m>=0&&m<k))return A.a(n,m)
m=n[m]
if(typeof m!=="number")return m.av()
q=m&255
o.d=l+1
if(!(l>=0&&l<k))return A.a(n,l)
l=n[l]
if(typeof l!=="number")return l.av()
p=l&255
if(o.e)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
ea(){return A.vl(this.eb())},
eb(){var s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.d,h=k.d=i+1,g=j.length
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.av()
s=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.av()
r=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.av()
q=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.av()
p=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.av()
o=i&255
i=k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.av()
n=h&255
h=k.d=i+1
if(!(i>=0&&i<g))return A.a(j,i)
i=j[i]
if(typeof i!=="number")return i.av()
m=i&255
k.d=h+1
if(!(h>=0&&h<g))return A.a(j,h)
h=j[h]
if(typeof h!=="number")return h.av()
l=h&255
if(k.e)return(B.a.O(s,56)|B.a.O(r,48)|B.a.O(q,40)|B.a.O(p,32)|o<<24|n<<16|m<<8|l)>>>0
return(B.a.O(l,56)|B.a.O(m,48)|B.a.O(n,40)|B.a.O(o,32)|p<<24|q<<16|r<<8|s)>>>0},
cO(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.h1(b,c)
s=r.b+b+b
return J.k4(q,s,c<=0?r.c:s+c)},
h1(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return A.Q(p.buffer,p.byteOffset+r.d+a,q)
s=r.d+a
s=J.k4(p,s,s+q)
return new Uint8Array(A.J(s))},
a_(){return this.h1(0,null)},
cQ(){var s=this.a
if(t.D.b(s))return A.b_(s.buffer,s.byteOffset+this.d,null)
return A.b_(this.a_().buffer,0,null)},
sa6(a,b){this.a=t.L.a(b)},
sfT(a,b){this.d=A.x(b)}}
A.i2.prototype={
kr(a){var s=this
s.f_(a)
s.eL()
s.eZ()
s.ez()},
jk(a){var s,r,q,p,o,n,m,l,k=this
k.sl9(Math.max(a,4))
s=k.c
k.f=s-k.d
k.r=s-1
r=B.a.U(s,8)
k.w=r
k.x=r*256
k.Q=new A.dP(new Uint32Array(1024),256,4)
k.a=new A.b9(new Uint8Array(768),256,3)
k.d=3
k.e=2
r=B.a.j(s,3)
k.y=new Int32Array(r)
r=t.V
q=t.H
k.shY(q.a(A.am(s*3,0,!1,r)))
k.shW(q.a(A.am(k.c,0,!1,r)))
k.shX(q.a(A.am(k.c,0,!1,r)))
r=k.z
r===$&&A.c("_network")
B.c.h(r,0,0)
B.c.h(k.z,1,0)
B.c.h(k.z,2,0)
B.c.h(k.z,3,255)
B.c.h(k.z,4,255)
B.c.h(k.z,5,255)
p=1/k.c
for(o=0;n=k.d,o<n;++o){s=k.ax
s===$&&A.c("_freq")
B.c.h(s,o,p)
s=k.at
s===$&&A.c("_bias")
B.c.h(s,o,0)}for(m=n*3,o=n;o<k.c;++o,m=l){l=m+1
B.c.h(k.z,m,255*(o-k.d)/k.f)
m=l+1
B.c.h(k.z,l,255*(o-k.d)/k.f)
l=m+1
B.c.h(k.z,m,255*(o-k.d)/k.f)
s=k.ax
s===$&&A.c("_freq")
B.c.h(s,o,p)
s=k.at
s===$&&A.c("_bias")
B.c.h(s,o,0)}},
ez(){var s,r,q,p,o,n,m
for(s=0;s<this.c;++s){r=this.a
r===$&&A.c("palette")
q=this.Q
q===$&&A.c("_palette")
p=q.b
if(2<p){o=q.c
n=s*p+2
if(!(n>=0&&n<o.length))return A.a(o,n)
n=o[n]
o=n}else o=0
if(1<p){n=q.c
m=s*p+1
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
if(0<p){q=q.c
p=s*p
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0
r.aY(s,Math.abs(o),Math.abs(n),Math.abs(q))}},
jm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i="_palette",h=this.as
if(!(b>=0&&b<256))return A.a(h,b)
s=h[b]
r=s-1
q=this.c
h=this.Q
p=1000
o=-1
while(!0){n=s<q
if(!(n||r>=0))break
if(n){h===$&&A.c(i)
n=h.b
if(1<n){m=h.c
l=s*n+1
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
k=m-b
if(k>=p)s=q
else{if(k<0)k=-k
if(0<n){m=h.c
l=s*n
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
j=m-a
k+=j<0?-j:j
if(k<p){if(2<n){m=h.c
n=s*n+2
if(!(n>=0&&n<m.length))return A.a(m,n)
n=m[n]}else n=0
j=n-c
k+=j<0?-j:j
if(k<p){o=s
p=k}}++s}}if(r>=0){h===$&&A.c(i)
n=h.b
if(1<n){m=h.c
l=r*n+1
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
k=b-m
if(k>=p)r=-1
else{if(k<0)k=-k
if(0<n){m=h.c
l=r*n
if(!(l>=0&&l<m.length))return A.a(m,l)
l=m[l]
m=l}else m=0
j=m-a
k+=j<0?-j:j
if(k<p){if(2<n){m=h.c
n=r*n+2
if(!(n>=0&&n<m.length))return A.a(m,n)
n=m[n]}else n=0
j=n-c
k+=j<0?-j:j
if(k<p){o=r
p=k}}--r}}}return o},
eL(){var s,r,q,p,o,n,m,l=this,k="_palette"
for(s=0,r=0;s<l.c;++s){for(q=0;q<3;++q,++r){p=l.z
p===$&&A.c("_network")
if(!(r>=0&&r<p.length))return A.a(p,r)
p=p[r]
if(typeof p!=="number")return A.bf(p)
o=B.a.I(B.b.i(0.5+p),0,255)
p=l.Q
p===$&&A.c(k)
n=p.b
if(q<n){p=p.c
n=s*n+q
m=B.b.i(o)
if(!(n>=0&&n<p.length))return A.a(p,n)
p[n]=m}}p=l.Q
p===$&&A.c(k)
n=p.b
if(3<n){p=p.c
n=s*n+3
m=B.a.i(s)
if(!(n>=0&&n<p.length))return A.a(p,n)
p[n]=m}}},
eZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
for(s=c.c,r=c.Q,q=c.as,p=0,o=0,n=0;n<s;n=h){r===$&&A.c("_palette")
m=r.b
l=1<m
if(l){k=r.c
j=n*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
i=k[j]}else i=0
for(h=n+1,g=h,f=n;g<s;++g){if(l){k=r.c
j=g*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(k<i){if(l){k=r.c
j=g*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
i=k[j]}else i=0
f=g}}if(n!==f){k=0<m
if(k){j=r.c
e=f*m
if(!(e>=0&&e<j.length))return A.a(j,e)
g=j[e]}else g=0
if(k){j=r.c
e=n*m
if(!(e>=0&&e<j.length))return A.a(j,e)
e=j[e]
j=e}else j=0
if(k){d=f*m
e=r.c
j=B.a.i(j)
if(!(d>=0&&d<e.length))return A.a(e,d)
e[d]=j}if(k){d=n*m
k=r.c
j=B.a.i(g)
if(!(d>=0&&d<k.length))return A.a(k,d)
k[d]=j}if(l){k=r.c
j=f*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=r.c
j=n*m+1
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=r.c
e=f*m+1
k=B.a.i(k)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=r.c
k=n*m+1
j=B.a.i(g)
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=j}l=2<m
if(l){k=r.c
j=f*m+2
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=r.c
j=n*m+2
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=r.c
e=f*m+2
k=B.a.i(k)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=r.c
k=n*m+2
j=B.a.i(g)
if(!(k>=0&&k<l.length))return A.a(l,k)
l[k]=j}l=3<m
if(l){k=r.c
j=f*m+3
if(!(j>=0&&j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=r.c
j=n*m+3
if(!(j>=0&&j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=r.c
e=f*m+3
k=B.a.i(k)
if(!(e>=0&&e<j.length))return A.a(j,e)
j[e]=k}if(l){l=r.c
m=n*m+3
k=B.a.i(g)
if(!(m>=0&&m<l.length))return A.a(l,m)
l[m]=k}}if(i!==p){if(!(p>=0&&p<256))return A.a(q,p)
q[p]=o+n>>>1
for(g=p+1;g<i;++g){if(!(g<256))return A.a(q,g)
q[g]=n}o=n
p=i}}s=c.r
s.toString
r=B.a.j(o+s,1)
if(!(p>=0&&p<256))return A.a(q,p)
q[p]=r
for(h=p+1;h<256;++h)q[h]=s},
fq(a,b){var s,r,q,p
for(s=this.y,r=a*a,q=0;q<a;++q){s===$&&A.c("_radiusPower")
p=B.b.i(b*((r-q*q)*256/r))
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
f_(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4="_network",a5=a3.x
a5===$&&A.c("initBiasRadius")
s=30+B.a.U(a3.b-1,3)
r=a6.gX(a6)*a6.gM(a6)
q=B.a.aA(r,a3.b)
p=Math.max(B.a.U(q,100),1)
if(p===0)p=1
o=B.a.j(a5,8)
if(o<=1)o=0
a3.fq(o,1024)
if(r<1509)n=a3.b=1
else if(B.a.a2(r,499)!==0)n=499
else if(B.a.a2(r,491)!==0)n=491
else n=B.a.a2(r,487)!==0?487:503
m=a6.gX(a6)
l=a6.gM(a6)
for(k=a5,j=1024,i=0,h=0,g=0,f=0;f<q;){a5=a6.a
e=a5==null?null:a5.K(h,g,null)
if(e==null)e=new A.R()
d=e.gq(e)
c=e.gt()
b=e.gv(e)
if(f===0){a5=a3.z
a5===$&&A.c(a4)
a=a3.e
a===$&&A.c("bgColor")
B.c.h(a5,a*3,b)
B.c.h(a3.z,a3.e*3+1,c)
B.c.h(a3.z,a3.e*3+2,d)}a0=a3.km(b,c,d)
if(a0<0)a0=a3.ip(b,c,d)
if(a0>=a3.d){a1=j/1024
e=a0*3
a5=a3.z
a5===$&&A.c(a4)
if(!(e>=0&&e<a5.length))return A.a(a5,e)
a=a5[e]
if(typeof a!=="number")return a.bc()
B.c.h(a5,e,a-a1*(a-b))
a=a3.z
a5=e+1
if(!(a5<a.length))return A.a(a,a5)
a2=a[a5]
if(typeof a2!=="number")return a2.bc()
B.c.h(a,a5,a2-a1*(a2-c))
a2=a3.z
a5=e+2
if(!(a5<a2.length))return A.a(a2,a5)
a=a2[a5]
if(typeof a!=="number")return a.bc()
B.c.h(a2,a5,a-a1*(a-d))
if(o>0)a3.i9(a1,o,a0,b,c,d)}i+=n
h+=n
for(;h>m;){h-=m;++g}for(;i>=r;){i-=r
g-=l}++f
if(B.a.a2(f,p)===0){j-=B.a.aA(j,s)
k-=B.a.U(k,30)
o=B.a.j(k,8)
if(o<=1)o=0
a3.fq(o,j)}}},
i9(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="_network",f=c-b,e=h.d-1
if(f<e)f=e
s=c+b
r=h.c
if(s>r)s=r
q=c+1
p=c-1
o=1
while(!0){n=q<s
if(!(n||p>f))break
m=h.y
m===$&&A.c("_radiusPower")
l=o+1
if(!(o<m.length))return A.a(m,o)
k=m[o]
if(n){j=q*3
n=h.z
n===$&&A.c(g)
if(!(j>=0&&j<n.length))return A.a(n,j)
m=n[j]
if(typeof m!=="number")return m.bc()
B.c.h(n,j,m-k*(m-d)/262144)
m=h.z
n=j+1
if(!(n<m.length))return A.a(m,n)
i=m[n]
if(typeof i!=="number")return i.bc()
B.c.h(m,n,i-k*(i-a0)/262144)
i=h.z
n=j+2
if(!(n<i.length))return A.a(i,n)
m=i[n]
if(typeof m!=="number")return m.bc()
B.c.h(i,n,m-k*(m-a1)/262144);++q}if(p>f){j=p*3
n=h.z
n===$&&A.c(g)
if(!(j>=0&&j<n.length))return A.a(n,j)
m=n[j]
if(typeof m!=="number")return m.bc()
B.c.h(n,j,m-k*(m-d)/262144)
m=h.z
n=j+1
if(!(n<m.length))return A.a(m,n)
i=m[n]
if(typeof i!=="number")return i.bc()
B.c.h(m,n,i-k*(i-a0)/262144)
i=h.z
n=j+2
if(!(n<i.length))return A.a(i,n)
m=i[n]
if(typeof m!=="number")return m.bc()
B.c.h(i,n,m-k*(m-a1)/262144);--p}o=l}},
ip(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=1e30
for(s=e.d,r=s*3,q=d,p=q,o=-1,n=-1;s<e.c;++s,r=l){m=e.z
m===$&&A.c("_network")
l=r+1
k=m.length
if(!(r<k))return A.a(m,r)
j=m[r]
if(typeof j!=="number")return j.bc()
i=j-a
if(i<0)i=-i
r=l+1
if(!(l<k))return A.a(m,l)
j=m[l]
if(typeof j!=="number")return j.bc()
h=j-b
if(h<0)h=-h
l=r+1
if(!(r<k))return A.a(m,r)
m=m[r]
if(typeof m!=="number")return m.bc()
g=m-c
if(g<0)g=-g
i=i+h+g
if(i<p){o=s
p=i}m=e.at
m===$&&A.c("_bias")
if(!(s<m.length))return A.a(m,s)
f=i-m[s]
if(f<q){n=s
q=f}m=e.ax
m===$&&A.c("_freq")
if(!(s<m.length))return A.a(m,s)
k=m[s]
B.c.h(m,s,k-0.0009765625*k)
k=e.at
if(!(s<k.length))return A.a(k,s)
m=k[s]
j=e.ax
if(!(s<j.length))return A.a(j,s)
B.c.h(k,s,m+j[s])}m=e.ax
m===$&&A.c("_freq")
if(!(o>=0&&o<m.length))return A.a(m,o)
B.c.h(m,o,m[o]+0.0009765625)
m=e.at
m===$&&A.c("_bias")
if(!(o<m.length))return A.a(m,o)
B.c.h(m,o,m[o]-1)
return n},
km(a,b,c){var s,r,q,p,o=this
for(s=0,r=0;s<o.d;++s){q=o.z
q===$&&A.c("_network")
p=r+1
if(!(r<q.length))return A.a(q,r)
if(J.bg(q[r],a)){q=o.z
r=p+1
if(!(p<q.length))return A.a(q,p)
if(J.bg(q[p],b)){q=o.z
p=r+1
if(!(r<q.length))return A.a(q,r)
q=J.bg(q[r],c)
r=p}else q=!1}else{r=p
q=!1}if(q)return s}return-1},
sl9(a){this.c=A.x(a)},
shY(a){this.z=t.H.a(a)},
shW(a){this.at=t.H.a(a)},
shX(a){this.ax=t.H.a(a)}}
A.i6.prototype={
V(a){var s,r,q=this
if(q.a===q.c.length)q.j0()
s=q.c
r=q.a++
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a&255},
dr(a,b){var s,r,q,p,o=this
t.L.a(a)
b=J.bH(a)
for(;s=o.a,r=s+b,q=o.c,p=q.length,r>p;)o.eJ(r-p)
B.k.bs(q,s,r,a)
o.a+=b},
b8(a){return this.dr(a,null)},
dt(a){var s=this
if(s.b){s.V(B.a.j(a,8)&255)
s.V(a&255)
return}s.V(a&255)
s.V(B.a.j(a,8)&255)},
aD(a){var s=this
if(s.b){s.V(B.a.j(a,24)&255)
s.V(B.a.j(a,16)&255)
s.V(B.a.j(a,8)&255)
s.V(a&255)
return}s.V(a&255)
s.V(B.a.j(a,8)&255)
s.V(B.a.j(a,16)&255)
s.V(B.a.j(a,24)&255)},
eJ(a){var s,r,q,p
if(a!=null)s=a
else{r=this.c.length
s=r===0?8192:r*2}r=this.c
q=r.length
p=new Uint8Array(q+s)
B.k.bs(p,0,q,r)
this.c=p},
j0(){return this.eJ(null)},
gn(a){return this.a}}
A.is.prototype={
h6(a){var s,r,q,p,o,n,m=a.gX(a),l=a.gM(a),k=this.a
k===$&&A.c("palette")
s=A.a5(null,null,B.e,0,B.h,l,null,0,1,k,m,!1)
m=s.a
r=m.gF(m)
r.C()
for(m=a.a,m=m.gF(m);m.C();){q=m.gJ(m)
p=r.gJ(r)
o=B.b.i(q.gq(q))
n=B.b.i(q.gt())
p.h(0,0,this.jm(B.b.i(q.gv(q)),n,o))
r.C()}return s}}
A.dV.prototype={
i(a){var s=this.b
return s===0?0:B.a.aA(this.a,s)},
R(a,b){if(b==null)return!1
return b instanceof A.dV&&this.a===b.a&&this.b===b.b},
gE(a){return A.nh(this.a,this.b,B.W,B.W)},
A(a){return""+this.a+"/"+this.b}}
A.mK.prototype={
$0(){$.br!=null
var s=this.a
s.port1.close()
s.port2.close()
this.b.close()},
$S:1}
A.mL.prototype={
$1(a){return this.a.cM(t.j.a(new A.iW([],[]).fF(t.e.a(a).data,!0)))},
$S:19}
A.mM.prototype={
$1(a){var s=t.lH.a(new A.iW([],[]).fF(t.e.a(a).data,!0)),r=this.b.port2
r.toString
return this.a.dj(s,r,this.c)},
$S:19}
A.m1.prototype={
cd(a,b){var s,r,q,p,o,n
if(1>=a.length)return A.a(a,1)
p=a[1]
if(!t.j.b(p)&&t.R.b(p))B.c.h(a,1,J.qy(p))
if(2>=a.length)return A.a(a,2)
o=t.dD.a(a[2])
B.c.h(a,2,o==null?null:o.c6())
o=$.br
if(o==null?$.lb:o.d)B.c.h(a,0,A.oh(new A.bA(Date.now(),!1).h2().a-t.h.a($.o1()).a).a)
try{if(b){o=A.p7(a,A.re(t.K))
s=A.B(o,!0,o.$ti.m("e.E"))
o=this.a
o.toString
B.bD.fV(o,a,s)}else{o=this.a
o.toString
B.bD.lc(o,a)}}catch(n){r=A.b5(n)
q=A.aT(n)
A.p4("failed to post response "+A.D(a)+": error "+A.D(r))
o=A.la(r,q)
throw A.f(o)}}}
A.jg.prototype={
kU(a,b){var s,r=$.br
if(r==null?$.lb:r.d){s=new A.mm(b).$0()
A.ve("[DEBUG] "+A.D(s))}this.cd([null,null,A.la(b,null),null,null],!1)},
$ipg:1}
A.mm.prototype={
$0(){return"replying with error: "+this.a.A(0)},
$S:35}
A.cv.prototype={
ks(a,b){var s
t.M.a(b)
if(this.c!=null)A.q1(b)
else{s=this.d
if(s==null){s=A.b([],t.f7)
this.sjp(s)}B.c.H(s,b)}},
e3(a){var s,r,q,p,o=this
if(o.c==null){s=A.qF(null,o.a,null,null)
o.c=s}s=o.d
if(s==null)s=B.bp
r=s.length
q=t.Z
p=0
for(;p<s.length;s.length===r||(0,A.an)(s),++p)A.q1(q.a(s[p]))},
lo(a,b){var s
t.M.a(b)
s=this.d
return s==null?null:B.c.cj(s,b)},
sjp(a){this.d=t.gm.a(a)}}
A.l9.prototype={}
A.f7.prototype={
hM(a,b){var s
if(this.b==null)try{this.b=A.bs()}catch(s){}},
c6(){var s=this.b
s=s==null?null:s.A(0)
return A.kM([-1,this.a,s],t.z)},
A(a){return B.aI.fJ(this.c6(),null)},
$ibU:1}
A.bU.prototype={
A(a){return B.aI.fJ(this.c6(),null)}}
A.e4.prototype={
dw(a,b,c,d){var s
if(this.b==null)try{this.b=A.bs()}catch(s){}},
c6(){var s=this,r=s.b
r=r==null?null:r.A(0)
return A.kM([-2,s.a,r,s.c,s.d],t.z)}}
A.de.prototype={
c6(){var s=this,r=s.b
r=r==null?null:r.A(0)
return A.kM([-3,s.a,r,s.c,s.d],t.z)}}
A.iC.prototype={
c6(){var s,r,q,p=this,o=p.b
o=o==null?null:o.A(0)
s=p.c
r=p.d
q=p.x.glI()
return A.kM([-4,p.a,o,s,r,q],t.z)},
$ip6:1}
A.cc.prototype={}
A.lo.prototype={}
A.lM.prototype={
eS(a){return a==null?$.q4():this.d.lg(0,a.b,new A.lN(a))},
sko(a){this.e=t.fC.a(a)}}
A.lN.prototype={
$0(){var s=this.a.b,r=++$.nX().a,q=$.br
q=q==null?null:q.e
q=new A.cc(!0,null,""+r+"@"+A.D(q))
q.b=s
return q},
$S:36}
A.lO.prototype={
dj(a,b,c){return this.kC(a,b,t.f8.a(c))},
kC(a,a0,a1){var s=0,r=A.pJ(t.z),q=1,p,o=this,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$dj=A.pP(function(a2,a3){if(a2===1){p=a3
s=q}while(true)switch(s){case 0:c=a==null
if(!c)A.pi(a)
n=c?null:t.iu.a(J.db(a,1))
if(c)throw A.f(A.c7("connection request expected",A.bs()))
else if(n==null)throw A.f(A.c7("missing client for connection request",A.bs()))
q=3
c=J.ah(a)
if(A.x(c.l(a,2))!==-1){c=A.c7("connection request expected",A.bs())
throw A.f(c)}else{h=o.a
if(h.a!==0){c=A.c7("already connected",A.bs())
throw A.f(c)}}g=A.nI(c.l(a,6))
g.toString
f=A.lc()
if(f.e==null){e=B.l.lw(g)
if(e.length!==0)f.e=e}g=A.lc()
if(g.f==null)g.f=n
g=A.mE(c.l(a,5))
g.toString
f=A.lc()
f.a=g
c=A.mE(c.l(a,0))!=null
g=$.br
if(g==null)$.lb=c
else g.d=c
m=null
l=a1.$1(a)
s=t.c.b(l)?6:8
break
case 6:s=9
return A.nJ(l,$async$dj)
case 9:m=a3
s=7
break
case 8:m=l
case 7:k=m.gla()
c=k
g=A.ai(c).m("bm<1>")
g=new A.b3(new A.bm(c,g),g.m("ad(e.E)").a(new A.lP()),g.m("b3<e.E>"))
if(!g.gaS(g)){c=A.c7("invalid command identifier in service operations map; command ids must be > 0",A.bs())
throw A.f(c)}h.dg(0,k)
n.cd([null,a0,null,null,null],!0)
q=1
s=5
break
case 3:q=2
b=p
j=A.b5(b)
i=A.aT(b)
J.o4(n,A.la(j,i))
s=5
break
case 2:s=1
break
case 5:return A.pB(null,r)
case 1:return A.pA(p,r)}})
return A.pC($async$dj,r)},
cM(a){return this.lf(a)},
lf(a9){var s=0,r=A.pJ(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$cM=A.pP(function(b0,b1){if(b0===1){o=b1
s=p}while(true)switch(s){case 0:A.pi(a9)
a=J.ah(a9)
l=t.iu.a(a.l(a9,1))
if(A.x(a.l(a9,2))===-4){a=m.b
if(a.c===0)a.a.$0()
else a.b=!0
q=null
s=1
break}else if(A.x(a.l(a9,2))===-3){a=t.iv.a(a.l(a9,4))
a.toString
a=m.b.eS(a)
if(a.e)a.hj(0)
q=null
s=1
break}else if(A.x(a.l(a9,2))===-2){a=A.mE(a.l(a9,5))
a.toString
a0=m.b.e
if(a0==null)a=null
else{a=a0.l(0,a)
a=a==null?null:a.$0()}q=a
s=1
break}else if(l==null)throw A.f(A.c7("missing client for request: "+A.D(a9),A.bs()))
a0=m.b;++a0.c
a1=t.iv
a2=a0.eS(a1.a(a.l(a9,4)))
if(a2.e){++a2.f
if(a1.a(a.l(a9,4))==null||a1.a(a.l(a9,4)).b!==a2.b)A.a1(A.c7("cancellation token mismatch",A.bs()))
a.h(a9,4,a2)}else if(a1.a(a.l(a9,4))!=null)A.a1(A.c7("Token reference mismatch",A.bs()))
k=a2
p=4
if(A.x(a.l(a9,2))===-1){a=A.c7("unexpected connection request: "+A.D(a9),A.bs())
throw A.f(a)}else{a1=m.a
if(a1.a===0){a=A.nz("worker service is not ready",null,null,null)
throw A.f(a)}}j=a1.l(0,A.x(a.l(a9,2)))
if(j==null){a=A.nz("unknown command: "+A.tt(a9),null,null,null)
throw A.f(a)}i=j.$1(a9)
s=t.c.b(i)?7:8
break
case 7:s=9
return A.nJ(i,$async$cM)
case 9:i=b1
case 8:h=A.pz(a.l(a9,7))
if(i instanceof A.dZ){t.fw.a(i)
a=!0}else a=!1
s=a?10:12
break
case 10:g=A.nA("subscription")
f=new A.d4(new A.ab($.a0,t.d),t.jk)
e=new A.lS(l,g,f)
a=t.m.a(k)
a1=t.M
a3=a1.a(e)
a4=++a0.f
a5=a0.e
if(a5==null){a1=A.a_(t.p,a1)
a0.sko(a1)}else a1=a5
a1.h(0,a4,a3)
if(a.e)a.hi(0,a3)
d=a4
l.cd([null,A.x(d),null,null,null],!1)
a=g
a1=i
a3=A.ai(a1)
a4=a3.m("~(1)?").a(new A.lQ(l,h))
t.Z.a(e)
a3=A.m5(a1.a,a1.b,a4,!1,a3.c)
a1=a.b
if(a1==null?a!=null:a1!==a)A.a1(new A.cg("Local '"+a.a+"' has already been initialized."))
a.b=a3
a=f.a
a6=t.mY.a(new A.lR(m,k,d))
a1=a.$ti
i=new A.ab($.a0,a1)
a.d0(new A.c_(i,8,a6,null,a1.m("@<1>").au(a1.c).m("c_<1,2>")))
s=13
return A.nJ(i,$async$cM)
case 13:s=11
break
case 12:l.cd([null,i,null,null,null],A.pz(h))
case 11:n.push(6)
s=5
break
case 4:p=3
a8=o
c=A.b5(a8)
b=A.aT(a8)
J.o4(l,A.la(c,b))
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
a=t.m.a(k)
if(a.e)--a.f
if(a.f===0&&a.c==null)a0.d.cj(0,a.b)
a=--a0.c
if(a0.b&&a===0)a0.a.$0()
s=n.pop()
break
case 6:case 1:return A.pB(q,r)
case 2:return A.pA(o,r)}})
return A.pC($async$cM,r)}}
A.lP.prototype={
$1(a){return A.x(a)<=0},
$S:37}
A.lS.prototype={
$0(){var s,r
this.a.cd([null,null,null,!0,null],!1)
s=this.b
r=s.b
if(r===s)A.a1(new A.cg("Local '"+s.a+"' has not been initialized."))
J.qs(r)
this.c.kA(0)},
$S:1}
A.lQ.prototype={
$1(a){return this.a.cd([null,a,null,null,null],this.b)},
$S:6}
A.lR.prototype={
$0(){var s=this.a.b,r=this.b,q=this.c,p=s.e,o=p==null?null:p.l(0,q)
if(o!=null){t.M.a(o)
if(r.e)r.hk(0,o)
s=s.e
if(s!=null)s.cj(0,q)}},
$S:8}
A.mU.prototype={
$1(a){return new A.e_()},
$S:38}
A.e_.prototype={
gla(){var s,r=this,q=r.a
if(q===$){s=A.oJ([1,new A.lk(r)],t.p,t.kF)
r.a!==$&&A.q2("operations")
r.si1(s)
q=s}return q},
si1(a){this.a=t.lq.a(a)},
$ipj:1}
A.lk.prototype={
$1(a){var s,r,q,p,o=t.j
o.a(a)
s=J.ah(a)
A.mE(s.l(a,0))
$.br!=null
r=t.D.a(J.db(o.a(s.l(a,3)),0))
q=A.x(J.db(o.a(s.l(a,3)),1))
s=A.x(J.db(o.a(s.l(a,3)),2))
p=A.uV(r)
o=p==null?null:p.b3(0,r,null)
o.toString
return new Uint8Array(A.J(new A.kZ(B.j9,6).kS(A.uR(o,s,q),!1)))},
$S:39};(function aliases(){var s=J.eF.prototype
s.hm=s.A
s=J.ch.prototype
s.hs=s.A
s=A.b7.prototype
s.ho=s.fK
s.hp=s.fL
s.hr=s.fN
s.hq=s.fM
s=A.m.prototype
s.ei=s.ai
s=A.e.prototype
s.hn=s.c5
s=A.j.prototype
s.hl=s.e2
s=A.cv.prototype
s.hi=s.ks
s.hj=s.e3
s.hk=s.lo})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_1u,m=hunkHelpers.installStaticTearOff
s(A,"up","r0",20)
s(A,"uJ","tv",9)
s(A,"uK","tw",9)
s(A,"uL","tx",9)
r(A,"pR","uy",1)
q(A,"pU","u4",42)
s(A,"uP","u5",20)
s(A,"uQ","u6",18)
p(A.aj.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.bM.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.cI.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.cD.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.cE.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.cf.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.cH.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.cF.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
p(A.cG.prototype,"gbM",1,0,null,["$1","$0"],["ad","i"],3,0,0)
var l
o(l=A.hK.prototype,"giz","iA",5)
o(l,"giC","iD",5)
o(l,"giE","iF",5)
o(l,"git","iu",5)
o(l,"giv","iw",5)
s(A,"vv","rU",0)
s(A,"vo","rM",0)
s(A,"vm","rK",0)
s(A,"vt","rS",0)
s(A,"vu","rT",0)
s(A,"vs","rR",0)
s(A,"vr","rQ",0)
s(A,"vq","rP",0)
s(A,"vx","rW",0)
s(A,"vw","rV",0)
s(A,"vp","rN",0)
s(A,"vn","rL",0)
s(A,"vI","t6",0)
s(A,"vG","t4",0)
s(A,"vy","rX",0)
s(A,"vA","rZ",0)
s(A,"vz","rY",0)
s(A,"vB","t_",0)
s(A,"vJ","t7",0)
s(A,"vH","t5",0)
s(A,"vC","t0",0)
s(A,"vD","t1",0)
s(A,"vE","t2",0)
s(A,"vF","t3",0)
n(A.fd.prototype,"gjM","jN",17)
n(A.hD.prototype,"gkV","kW",17)
m(A,"nW",3,null,["$3"],["t8"],2,0)
m(A,"vK",3,null,["$3"],["t9"],2,0)
m(A,"vP",3,null,["$3"],["te"],2,0)
m(A,"vQ",3,null,["$3"],["tf"],2,0)
m(A,"vR",3,null,["$3"],["tg"],2,0)
m(A,"vS",3,null,["$3"],["th"],2,0)
m(A,"vT",3,null,["$3"],["ti"],2,0)
m(A,"vU",3,null,["$3"],["tj"],2,0)
m(A,"vV",3,null,["$3"],["tk"],2,0)
m(A,"vW",3,null,["$3"],["tl"],2,0)
m(A,"vL",3,null,["$3"],["ta"],2,0)
m(A,"vM",3,null,["$3"],["tb"],2,0)
m(A,"vN",3,null,["$3"],["tc"],2,0)
m(A,"vO",3,null,["$3"],["td"],2,0)
m(A,"vY",6,null,["$6"],["tr"],10,0)
m(A,"vZ",6,null,["$6"],["ts"],10,0)
m(A,"vX",6,null,["$6"],["tq"],10,0)
s(A,"uC","rD",7)
s(A,"uE","nu",7)
s(A,"uD","rE",7)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.N,null)
q(A.N,[A.nc,J.eF,J.ee,A.W,A.m,A.cd,A.l8,A.e,A.cK,A.cL,A.fi,A.f6,A.en,A.aA,A.cm,A.ei,A.lq,A.kV,A.ep,A.fz,A.S,A.kK,A.aY,A.m2,A.bc,A.jc,A.jN,A.mw,A.iY,A.e6,A.cr,A.eg,A.j0,A.c_,A.ab,A.iZ,A.dZ,A.jB,A.fH,A.dW,A.jj,A.fn,A.fp,A.h0,A.cw,A.mo,A.mB,A.bA,A.h9,A.m3,A.i5,A.f8,A.m7,A.hi,A.F,A.aa,A.jE,A.d_,A.kd,A.n3,A.fk,A.y,A.eu,A.mt,A.lW,A.kU,A.ht,A.kY,A.lU,A.kf,A.be,A.mk,A.jz,A.ko,A.hr,A.lT,A.lV,A.bN,A.j9,A.hb,A.bB,A.aj,A.kb,A.bI,A.ke,A.kh,A.hc,A.bL,A.hd,A.he,A.hf,A.er,A.fv,A.ev,A.ew,A.ex,A.hn,A.ho,A.fZ,A.ce,A.kA,A.bQ,A.kB,A.e7,A.hJ,A.kD,A.hK,A.f0,A.ie,A.bC,A.dR,A.l0,A.cZ,A.ij,A.ik,A.f2,A.ir,A.dS,A.dT,A.f4,A.ba,A.fa,A.ll,A.iG,A.ln,A.iH,A.iI,A.kN,A.lw,A.fc,A.lx,A.lC,A.lG,A.lI,A.fb,A.lH,A.ly,A.bY,A.fe,A.iU,A.ff,A.fg,A.fd,A.iS,A.lD,A.iT,A.lK,A.fh,A.hl,A.dx,A.e3,A.ez,A.b8,A.ku,A.as,A.is,A.i6,A.dV,A.m1,A.cv,A.l9,A.f7,A.bU,A.lo,A.lM,A.lO,A.e_])
q(J.eF,[J.hG,J.eK,J.d,J.dM,J.dN])
q(J.d,[J.ch,J.E,A.dO,A.ak,A.j,A.fN,A.cb,A.bi,A.T,A.j2,A.ay,A.h4,A.h6,A.j4,A.ek,A.j6,A.h8,A.p,A.ja,A.aC,A.hk,A.je,A.dD,A.hS,A.hT,A.jk,A.jl,A.aE,A.jm,A.jo,A.aF,A.js,A.jv,A.dX,A.aI,A.jw,A.aJ,A.jA,A.au,A.jH,A.iJ,A.aM,A.jJ,A.iL,A.iQ,A.jP,A.jR,A.jT,A.jV,A.jX,A.aX,A.jh,A.b0,A.jq,A.ig,A.jC,A.b2,A.jL,A.fR,A.j_])
q(J.ch,[J.ia,J.d1,J.bP])
r(J.kz,J.E)
q(J.dM,[J.eJ,J.hH])
q(A.W,[A.cg,A.bW,A.hL,A.iO,A.j3,A.iu,A.ef,A.j8,A.eL,A.by,A.iP,A.iN,A.dY,A.h_])
r(A.e0,A.m)
r(A.bh,A.e0)
q(A.cd,[A.fW,A.km,A.fX,A.iD,A.kF,A.mQ,A.mS,A.lZ,A.lY,A.mF,A.mb,A.mj,A.lf,A.ms,A.mq,A.m6,A.mX,A.mY,A.ka,A.kj,A.kC,A.kw,A.kv,A.mL,A.mM,A.lP,A.lQ,A.mU,A.lk])
q(A.fW,[A.mW,A.m_,A.m0,A.mx,A.m8,A.mf,A.md,A.ma,A.me,A.m9,A.mi,A.mh,A.mg,A.lg,A.mI,A.mr,A.lv,A.lu,A.mK,A.mm,A.lN,A.lS,A.lR])
q(A.e,[A.t,A.eN,A.b3,A.bT,A.fA,A.df,A.dg,A.dh,A.di,A.dj,A.dk,A.dl,A.dm,A.dn,A.dp,A.dq,A.bJ,A.bO,A.ap,A.cN,A.cO,A.cP,A.cQ,A.cR,A.cS,A.cT,A.cU,A.cV,A.cW,A.cX,A.cY,A.R])
q(A.t,[A.bn,A.em,A.bm,A.fo])
r(A.f9,A.bn)
r(A.el,A.eN)
r(A.dt,A.bT)
r(A.cz,A.ei)
r(A.eS,A.bW)
q(A.iD,[A.iy,A.dd])
r(A.iX,A.ef)
r(A.b7,A.S)
q(A.fX,[A.kE,A.mR,A.mG,A.mJ,A.mc,A.kL,A.kO,A.mp,A.kP,A.kQ,A.kR,A.kS,A.l6,A.l7,A.ld,A.le,A.mu,A.mv,A.lX,A.k8,A.k9,A.kr,A.ks,A.kt,A.lJ])
q(A.ak,[A.hX,A.at])
q(A.at,[A.fr,A.ft])
r(A.fs,A.fr)
r(A.cj,A.fs)
r(A.fu,A.ft)
r(A.aZ,A.fu)
q(A.cj,[A.hY,A.hZ])
q(A.aZ,[A.i_,A.i0,A.i1,A.eO,A.eP,A.eQ,A.cM])
r(A.fD,A.j8)
r(A.d4,A.j0)
r(A.ju,A.fH)
r(A.fl,A.b7)
r(A.fw,A.dW)
r(A.fm,A.fw)
q(A.h0,[A.mz,A.my,A.kG,A.lt])
q(A.cw,[A.ha,A.hM])
r(A.hN,A.eL)
r(A.mn,A.mo)
q(A.ha,[A.hO,A.iR])
r(A.kJ,A.mz)
r(A.kI,A.my)
q(A.by,[A.f5,A.hq])
q(A.j,[A.K,A.cp,A.hg,A.ci,A.aH,A.fx,A.aK,A.av,A.fB,A.iV,A.fT,A.ca])
q(A.K,[A.v,A.bz])
r(A.w,A.v)
q(A.w,[A.fO,A.fP,A.hh,A.iv])
r(A.h1,A.bi)
r(A.dr,A.j2)
q(A.ay,[A.h2,A.h3])
r(A.ds,A.cp)
r(A.j5,A.j4)
r(A.ej,A.j5)
r(A.j7,A.j6)
r(A.h7,A.j7)
r(A.az,A.cb)
r(A.jb,A.ja)
r(A.dw,A.jb)
r(A.jf,A.je)
r(A.cA,A.jf)
r(A.bR,A.p)
r(A.hU,A.jk)
r(A.hV,A.jl)
r(A.jn,A.jm)
r(A.hW,A.jn)
r(A.jp,A.jo)
r(A.eR,A.jp)
r(A.jt,A.js)
r(A.ib,A.jt)
r(A.it,A.jv)
r(A.fy,A.fx)
r(A.iw,A.fy)
r(A.jx,A.jw)
r(A.ix,A.jx)
r(A.iz,A.jA)
r(A.jI,A.jH)
r(A.iE,A.jI)
r(A.fC,A.fB)
r(A.iF,A.fC)
r(A.jK,A.jJ)
r(A.iK,A.jK)
r(A.jQ,A.jP)
r(A.j1,A.jQ)
r(A.fj,A.ek)
r(A.jS,A.jR)
r(A.jd,A.jS)
r(A.jU,A.jT)
r(A.fq,A.jU)
r(A.jW,A.jV)
r(A.jy,A.jW)
r(A.jY,A.jX)
r(A.jG,A.jY)
r(A.m4,A.dZ)
r(A.jF,A.mt)
r(A.iW,A.lW)
r(A.ji,A.jh)
r(A.hP,A.ji)
r(A.jr,A.jq)
r(A.i3,A.jr)
r(A.jD,A.jC)
r(A.iA,A.jD)
r(A.jM,A.jL)
r(A.iM,A.jM)
r(A.fS,A.j_)
r(A.i4,A.ca)
r(A.k5,A.hi)
r(A.hs,A.ht)
r(A.kW,A.kY)
r(A.mD,A.lU)
q(A.m3,[A.kc,A.aB,A.fU,A.aw,A.ar,A.dv,A.cx,A.bj,A.dz,A.dQ,A.f_,A.ck,A.id,A.bp,A.aL,A.d0,A.al,A.bd,A.d2,A.e2,A.kp,A.hj,A.hF,A.kk])
r(A.Y,A.F)
q(A.bJ,[A.fY,A.eh])
r(A.du,A.bN)
q(A.aj,[A.bM,A.cC,A.cI,A.cD,A.cE,A.cf,A.cH,A.cF,A.cG,A.dB,A.dA,A.dC])
q(A.ke,[A.fV,A.ki,A.kn,A.kq,A.hI,A.ic,A.l1,A.l5,A.lj,A.lm,A.lL])
r(A.kg,A.fV)
r(A.hv,A.bL)
q(A.hv,[A.eG,A.hx,A.hy,A.hz,A.eH])
r(A.hw,A.er)
r(A.hA,A.ew)
r(A.hm,A.bI)
q(A.ce,[A.cB,A.ey])
r(A.hB,A.f0)
r(A.hC,A.ie)
r(A.kZ,A.kh)
q(A.bC,[A.ih,A.ii,A.il,A.im,A.ip,A.iq])
q(A.dR,[A.f3,A.io])
q(A.ir,[A.dU,A.aG])
r(A.hD,A.fd)
r(A.hE,A.fh)
r(A.eI,A.e3)
q(A.ap,[A.dE,A.dF,A.eA,A.eB,A.eC,A.eD,A.dG,A.eE,A.dH,A.dI,A.dJ,A.dK])
q(A.b8,[A.eT,A.eU,A.eV,A.eW,A.eX,A.eY,A.eZ,A.dP,A.b9])
r(A.i2,A.is)
r(A.jg,A.m1)
r(A.e4,A.bU)
r(A.de,A.e4)
r(A.iC,A.de)
r(A.cc,A.cv)
s(A.e0,A.cm)
s(A.fr,A.m)
s(A.fs,A.aA)
s(A.ft,A.m)
s(A.fu,A.aA)
s(A.j2,A.kd)
s(A.j4,A.m)
s(A.j5,A.y)
s(A.j6,A.m)
s(A.j7,A.y)
s(A.ja,A.m)
s(A.jb,A.y)
s(A.je,A.m)
s(A.jf,A.y)
s(A.jk,A.S)
s(A.jl,A.S)
s(A.jm,A.m)
s(A.jn,A.y)
s(A.jo,A.m)
s(A.jp,A.y)
s(A.js,A.m)
s(A.jt,A.y)
s(A.jv,A.S)
s(A.fx,A.m)
s(A.fy,A.y)
s(A.jw,A.m)
s(A.jx,A.y)
s(A.jA,A.S)
s(A.jH,A.m)
s(A.jI,A.y)
s(A.fB,A.m)
s(A.fC,A.y)
s(A.jJ,A.m)
s(A.jK,A.y)
s(A.jP,A.m)
s(A.jQ,A.y)
s(A.jR,A.m)
s(A.jS,A.y)
s(A.jT,A.m)
s(A.jU,A.y)
s(A.jV,A.m)
s(A.jW,A.y)
s(A.jX,A.m)
s(A.jY,A.y)
s(A.jh,A.m)
s(A.ji,A.y)
s(A.jq,A.m)
s(A.jr,A.y)
s(A.jC,A.m)
s(A.jD,A.y)
s(A.jL,A.m)
s(A.jM,A.y)
s(A.j_,A.S)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",P:"double",l:"num",A:"String",ad:"bool",aa:"Null",k:"List"},mangledNames:{},types:["~(as)","~()","h(bE,h,h)","h([h])","~(A,@)","~(bQ,k<h>)","~(@)","ad(@)","aa()","~(~())","~(h,h,h,h,h,bt)","~(N?,N?)","@()","aa(@)","~(A,A)","~(@,@)","~(A,bB)","~(h)","@(@)","~(bR)","h(N?)","~(p)","@(A)","bk<aa>()","~(h,aj)","aa(~())","~(l,l,l,l)","bE(h)","bQ(h)","aa(@,cl)","h(h,h)","~(h,@)","aa(N,cl)","l(l,l,l,l,l)","ab<@>(@)","A()","cc()","ad(h)","e_(k<@>)","bt/(k<@>)","@(@,A)","aa(@,@)","ad(N?,N?)","ad(N?)","l(l,l,l,l)","@(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.tT(v.typeUniverse,JSON.parse('{"ia":"ch","d1":"ch","bP":"ch","wi":"d","wj":"d","w1":"d","w_":"p","wf":"p","w2":"ca","w0":"j","wm":"j","wp":"j","wk":"v","w3":"w","wl":"w","wg":"K","we":"K","wL":"av","wq":"cp","w5":"bz","ws":"bz","wh":"cA","w7":"T","w9":"bi","wb":"au","wc":"ay","w8":"ay","wa":"ay","hG":{"ad":[],"V":[]},"eK":{"aa":[],"V":[]},"d":{"n":[]},"ch":{"n":[]},"E":{"k":["1"],"t":["1"],"n":[],"e":["1"],"I":["1"]},"kz":{"E":["1"],"k":["1"],"t":["1"],"n":[],"e":["1"],"I":["1"]},"ee":{"F":["1"]},"dM":{"P":[],"l":[]},"eJ":{"P":[],"h":[],"l":[],"V":[]},"hH":{"P":[],"l":[],"V":[]},"dN":{"A":[],"I":["@"],"V":[]},"cg":{"W":[]},"bh":{"m":["h"],"cm":["h"],"k":["h"],"t":["h"],"e":["h"],"m.E":"h","cm.E":"h"},"t":{"e":["1"]},"bn":{"t":["1"],"e":["1"]},"f9":{"bn":["1"],"t":["1"],"e":["1"],"e.E":"1","bn.E":"1"},"cK":{"F":["1"]},"eN":{"e":["2"],"e.E":"2"},"el":{"eN":["1","2"],"t":["2"],"e":["2"],"e.E":"2"},"cL":{"F":["2"]},"b3":{"e":["1"],"e.E":"1"},"fi":{"F":["1"]},"bT":{"e":["1"],"e.E":"1"},"dt":{"bT":["1"],"t":["1"],"e":["1"],"e.E":"1"},"f6":{"F":["1"]},"em":{"t":["1"],"e":["1"],"e.E":"1"},"en":{"F":["1"]},"e0":{"m":["1"],"cm":["1"],"k":["1"],"t":["1"],"e":["1"]},"ei":{"a9":["1","2"]},"cz":{"ei":["1","2"],"a9":["1","2"]},"eS":{"bW":[],"W":[]},"hL":{"W":[]},"iO":{"W":[]},"fz":{"cl":[]},"cd":{"cy":[]},"fW":{"cy":[]},"fX":{"cy":[]},"iD":{"cy":[]},"iy":{"cy":[]},"dd":{"cy":[]},"j3":{"W":[]},"iu":{"W":[]},"iX":{"W":[]},"b7":{"S":["1","2"],"ne":["1","2"],"a9":["1","2"],"S.K":"1","S.V":"2"},"bm":{"t":["1"],"e":["1"],"e.E":"1"},"aY":{"F":["1"]},"dO":{"n":[],"V":[]},"ak":{"n":[],"a7":[]},"hX":{"ak":[],"n":[],"a7":[],"V":[]},"at":{"ak":[],"L":["1"],"n":[],"a7":[],"I":["1"]},"cj":{"at":["P"],"m":["P"],"ak":[],"L":["P"],"k":["P"],"t":["P"],"n":[],"a7":[],"I":["P"],"e":["P"],"aA":["P"]},"aZ":{"at":["h"],"m":["h"],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"]},"hY":{"cj":[],"at":["P"],"m":["P"],"n6":[],"ak":[],"L":["P"],"k":["P"],"t":["P"],"n":[],"a7":[],"I":["P"],"e":["P"],"aA":["P"],"V":[],"m.E":"P"},"hZ":{"cj":[],"at":["P"],"m":["P"],"n7":[],"ak":[],"L":["P"],"k":["P"],"t":["P"],"n":[],"a7":[],"I":["P"],"e":["P"],"aA":["P"],"V":[],"m.E":"P"},"i_":{"aZ":[],"at":["h"],"m":["h"],"kx":[],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"],"V":[],"m.E":"h"},"i0":{"aZ":[],"at":["h"],"m":["h"],"hu":[],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"],"V":[],"m.E":"h"},"i1":{"aZ":[],"at":["h"],"m":["h"],"n8":[],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"],"V":[],"m.E":"h"},"eO":{"aZ":[],"at":["h"],"m":["h"],"nv":[],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"],"V":[],"m.E":"h"},"eP":{"aZ":[],"at":["h"],"m":["h"],"bE":[],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"],"V":[],"m.E":"h"},"eQ":{"aZ":[],"at":["h"],"m":["h"],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"],"V":[],"m.E":"h"},"cM":{"aZ":[],"at":["h"],"m":["h"],"bt":[],"ak":[],"L":["h"],"k":["h"],"t":["h"],"n":[],"a7":[],"I":["h"],"e":["h"],"aA":["h"],"V":[],"m.E":"h"},"jN":{"p8":[]},"j8":{"W":[]},"fD":{"bW":[],"W":[]},"ab":{"bk":["1"]},"cr":{"F":["1"]},"fA":{"e":["1"],"e.E":"1"},"eg":{"W":[]},"d4":{"j0":["1"]},"fH":{"pk":[]},"ju":{"fH":[],"pk":[]},"fl":{"b7":["1","2"],"S":["1","2"],"ne":["1","2"],"a9":["1","2"],"S.K":"1","S.V":"2"},"fm":{"dW":["1"],"t":["1"],"e":["1"]},"fn":{"F":["1"]},"m":{"k":["1"],"t":["1"],"e":["1"]},"S":{"a9":["1","2"]},"fo":{"t":["2"],"e":["2"],"e.E":"2"},"fp":{"F":["2"]},"dW":{"t":["1"],"e":["1"]},"fw":{"dW":["1"],"t":["1"],"e":["1"]},"ha":{"cw":["A","k<h>"]},"eL":{"W":[]},"hN":{"W":[]},"hM":{"cw":["N?","A"]},"hO":{"cw":["A","k<h>"]},"iR":{"cw":["A","k<h>"]},"P":{"l":[]},"h":{"l":[]},"k":{"t":["1"],"e":["1"]},"ef":{"W":[]},"bW":{"W":[]},"by":{"W":[]},"f5":{"W":[]},"hq":{"W":[]},"iP":{"W":[]},"iN":{"W":[]},"dY":{"W":[]},"h_":{"W":[]},"i5":{"W":[]},"f8":{"W":[]},"jE":{"cl":[]},"d_":{"rB":[]},"T":{"n":[]},"p":{"n":[]},"az":{"cb":[],"n":[]},"aC":{"n":[]},"bR":{"p":[],"n":[]},"aE":{"n":[]},"K":{"j":[],"n":[]},"aF":{"n":[]},"aH":{"j":[],"n":[]},"aI":{"n":[]},"aJ":{"n":[]},"au":{"n":[]},"aK":{"j":[],"n":[]},"av":{"j":[],"n":[]},"aM":{"n":[]},"w":{"K":[],"j":[],"n":[]},"fN":{"n":[]},"fO":{"K":[],"j":[],"n":[]},"fP":{"K":[],"j":[],"n":[]},"cb":{"n":[]},"bz":{"K":[],"j":[],"n":[]},"h1":{"n":[]},"dr":{"n":[]},"ay":{"n":[]},"bi":{"n":[]},"h2":{"n":[]},"h3":{"n":[]},"h4":{"n":[]},"ds":{"j":[],"n":[]},"h6":{"n":[]},"ej":{"m":["bq<l>"],"y":["bq<l>"],"k":["bq<l>"],"L":["bq<l>"],"t":["bq<l>"],"n":[],"e":["bq<l>"],"I":["bq<l>"],"y.E":"bq<l>","m.E":"bq<l>"},"ek":{"bq":["l"],"n":[]},"h7":{"m":["A"],"y":["A"],"k":["A"],"L":["A"],"t":["A"],"n":[],"e":["A"],"I":["A"],"y.E":"A","m.E":"A"},"h8":{"n":[]},"v":{"K":[],"j":[],"n":[]},"j":{"n":[]},"dw":{"m":["az"],"y":["az"],"k":["az"],"L":["az"],"t":["az"],"n":[],"e":["az"],"I":["az"],"y.E":"az","m.E":"az"},"hg":{"j":[],"n":[]},"hh":{"K":[],"j":[],"n":[]},"hk":{"n":[]},"cA":{"m":["K"],"y":["K"],"k":["K"],"L":["K"],"t":["K"],"n":[],"e":["K"],"I":["K"],"y.E":"K","m.E":"K"},"dD":{"n":[]},"hS":{"n":[]},"hT":{"n":[]},"ci":{"j":[],"n":[]},"hU":{"S":["A","@"],"n":[],"a9":["A","@"],"S.K":"A","S.V":"@"},"hV":{"S":["A","@"],"n":[],"a9":["A","@"],"S.K":"A","S.V":"@"},"hW":{"m":["aE"],"y":["aE"],"k":["aE"],"L":["aE"],"t":["aE"],"n":[],"e":["aE"],"I":["aE"],"y.E":"aE","m.E":"aE"},"eR":{"m":["K"],"y":["K"],"k":["K"],"L":["K"],"t":["K"],"n":[],"e":["K"],"I":["K"],"y.E":"K","m.E":"K"},"ib":{"m":["aF"],"y":["aF"],"k":["aF"],"L":["aF"],"t":["aF"],"n":[],"e":["aF"],"I":["aF"],"y.E":"aF","m.E":"aF"},"it":{"S":["A","@"],"n":[],"a9":["A","@"],"S.K":"A","S.V":"@"},"iv":{"K":[],"j":[],"n":[]},"dX":{"n":[]},"iw":{"m":["aH"],"y":["aH"],"j":[],"k":["aH"],"L":["aH"],"t":["aH"],"n":[],"e":["aH"],"I":["aH"],"y.E":"aH","m.E":"aH"},"ix":{"m":["aI"],"y":["aI"],"k":["aI"],"L":["aI"],"t":["aI"],"n":[],"e":["aI"],"I":["aI"],"y.E":"aI","m.E":"aI"},"iz":{"S":["A","A"],"n":[],"a9":["A","A"],"S.K":"A","S.V":"A"},"iE":{"m":["av"],"y":["av"],"k":["av"],"L":["av"],"t":["av"],"n":[],"e":["av"],"I":["av"],"y.E":"av","m.E":"av"},"iF":{"m":["aK"],"y":["aK"],"j":[],"k":["aK"],"L":["aK"],"t":["aK"],"n":[],"e":["aK"],"I":["aK"],"y.E":"aK","m.E":"aK"},"iJ":{"n":[]},"iK":{"m":["aM"],"y":["aM"],"k":["aM"],"L":["aM"],"t":["aM"],"n":[],"e":["aM"],"I":["aM"],"y.E":"aM","m.E":"aM"},"iL":{"n":[]},"iQ":{"n":[]},"iV":{"j":[],"n":[]},"cp":{"j":[],"n":[]},"j1":{"m":["T"],"y":["T"],"k":["T"],"L":["T"],"t":["T"],"n":[],"e":["T"],"I":["T"],"y.E":"T","m.E":"T"},"fj":{"bq":["l"],"n":[]},"jd":{"m":["aC?"],"y":["aC?"],"k":["aC?"],"L":["aC?"],"t":["aC?"],"n":[],"e":["aC?"],"I":["aC?"],"y.E":"aC?","m.E":"aC?"},"fq":{"m":["K"],"y":["K"],"k":["K"],"L":["K"],"t":["K"],"n":[],"e":["K"],"I":["K"],"y.E":"K","m.E":"K"},"jy":{"m":["aJ"],"y":["aJ"],"k":["aJ"],"L":["aJ"],"t":["aJ"],"n":[],"e":["aJ"],"I":["aJ"],"y.E":"aJ","m.E":"aJ"},"jG":{"m":["au"],"y":["au"],"k":["au"],"L":["au"],"t":["au"],"n":[],"e":["au"],"I":["au"],"y.E":"au","m.E":"au"},"m4":{"dZ":["1"]},"fk":{"rA":["1"]},"eu":{"F":["1"]},"aX":{"n":[]},"b0":{"n":[]},"b2":{"n":[]},"hP":{"m":["aX"],"y":["aX"],"k":["aX"],"t":["aX"],"n":[],"e":["aX"],"y.E":"aX","m.E":"aX"},"i3":{"m":["b0"],"y":["b0"],"k":["b0"],"t":["b0"],"n":[],"e":["b0"],"y.E":"b0","m.E":"b0"},"ig":{"n":[]},"iA":{"m":["A"],"y":["A"],"k":["A"],"t":["A"],"n":[],"e":["A"],"y.E":"A","m.E":"A"},"iM":{"m":["b2"],"y":["b2"],"k":["b2"],"t":["b2"],"n":[],"e":["b2"],"y.E":"b2","m.E":"b2"},"fR":{"n":[]},"fS":{"S":["A","@"],"n":[],"a9":["A","@"],"S.K":"A","S.V":"@"},"fT":{"j":[],"n":[]},"ca":{"j":[],"n":[]},"i4":{"j":[],"n":[]},"hs":{"ht":[]},"Y":{"F":["l"]},"df":{"G":[],"e":["l"],"e.E":"l"},"dg":{"G":[],"e":["l"],"e.E":"l"},"dh":{"G":[],"e":["l"],"e.E":"l"},"di":{"G":[],"e":["l"],"e.E":"l"},"dj":{"G":[],"e":["l"],"e.E":"l"},"dk":{"G":[],"e":["l"],"e.E":"l"},"dl":{"G":[],"e":["l"],"e.E":"l"},"dm":{"G":[],"e":["l"],"e.E":"l"},"dn":{"G":[],"e":["l"],"e.E":"l"},"dp":{"G":[],"e":["l"],"e.E":"l"},"dq":{"G":[],"e":["l"],"e.E":"l"},"bJ":{"G":[],"e":["l"],"e.E":"l"},"fY":{"G":[],"e":["l"],"e.E":"l"},"eh":{"G":[],"e":["l"],"e.E":"l"},"du":{"bN":[]},"bM":{"aj":[]},"cC":{"aj":[]},"cI":{"aj":[]},"cD":{"aj":[]},"cE":{"aj":[]},"cf":{"aj":[]},"cH":{"aj":[]},"cF":{"aj":[]},"cG":{"aj":[]},"dB":{"aj":[]},"dA":{"aj":[]},"dC":{"aj":[]},"bI":{"a3":[]},"eG":{"bL":[]},"hv":{"bL":[]},"hf":{"a3":[]},"hw":{"er":[]},"hx":{"bL":[]},"hy":{"bL":[]},"hz":{"bL":[]},"eH":{"bL":[]},"hA":{"ew":[]},"ex":{"a3":[]},"hn":{"a3":[]},"hm":{"bI":[],"a3":[]},"cB":{"ce":[]},"ey":{"ce":[]},"hB":{"f0":[]},"ie":{"a3":[]},"hC":{"a3":[]},"ih":{"bC":[]},"ii":{"bC":[]},"il":{"bC":[]},"im":{"bC":[]},"ip":{"bC":[]},"iq":{"bC":[]},"f3":{"dR":[]},"io":{"dR":[]},"ij":{"a3":[]},"dS":{"a3":[]},"dT":{"a3":[]},"f4":{"a3":[]},"fa":{"a3":[]},"iI":{"a3":[]},"hE":{"fh":[]},"e3":{"a3":[]},"eI":{"e3":[],"a3":[]},"bO":{"e":["z"],"e.E":"z"},"ap":{"e":["z"]},"dE":{"ap":[],"e":["z"],"e.E":"z"},"dF":{"ap":[],"e":["z"],"e.E":"z"},"eA":{"ap":[],"e":["z"],"e.E":"z"},"eB":{"ap":[],"e":["z"],"e.E":"z"},"eC":{"ap":[],"e":["z"],"e.E":"z"},"eD":{"ap":[],"e":["z"],"e.E":"z"},"dG":{"ap":[],"e":["z"],"e.E":"z"},"eE":{"ap":[],"e":["z"],"e.E":"z"},"dH":{"ap":[],"e":["z"],"e.E":"z"},"dI":{"ap":[],"e":["z"],"e.E":"z"},"dJ":{"ap":[],"e":["z"],"e.E":"z"},"dK":{"ap":[],"e":["z"],"e.E":"z"},"eT":{"b8":[]},"eU":{"b8":[]},"eV":{"b8":[]},"eW":{"b8":[]},"eX":{"b8":[]},"eY":{"b8":[]},"eZ":{"b8":[]},"dP":{"b8":[]},"b9":{"b8":[]},"cN":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cO":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cP":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cQ":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cR":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cS":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cT":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cU":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cV":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cW":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cX":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"cY":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"R":{"z":[],"G":[],"e":["l"],"F":["z"],"e.E":"l"},"i2":{"is":[]},"jg":{"pg":[]},"f7":{"bU":[]},"e4":{"bU":[]},"de":{"bU":[]},"iC":{"de":[],"bU":[],"p6":[]},"cc":{"cv":[]},"e_":{"pj":[]},"qD":{"a7":[]},"n8":{"k":["h"],"t":["h"],"e":["h"],"a7":[]},"bt":{"k":["h"],"t":["h"],"e":["h"],"a7":[]},"rG":{"k":["h"],"t":["h"],"e":["h"],"a7":[]},"kx":{"k":["h"],"t":["h"],"e":["h"],"a7":[]},"nv":{"k":["h"],"t":["h"],"e":["h"],"a7":[]},"hu":{"k":["h"],"t":["h"],"e":["h"],"a7":[]},"bE":{"k":["h"],"t":["h"],"e":["h"],"a7":[]},"n6":{"k":["P"],"t":["P"],"e":["P"],"a7":[]},"n7":{"k":["P"],"t":["P"],"e":["P"],"a7":[]},"z":{"G":[],"F":["z"],"e":["l"]}}'))
A.tS(v.typeUniverse,JSON.parse('{"t":1,"e0":1,"at":1,"fw":1,"h0":2,"ir":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ag
return{n:s("eg"),fj:s("cb"),m:s("cc"),G:s("G"),d5:s("T"),h:s("bA"),dd:s("ds"),gt:s("t<@>"),fz:s("W"),fq:s("p"),iW:s("hc"),ho:s("he"),dY:s("az"),kL:s("dw"),gY:s("cy"),f8:s("pj/(k<@>)"),c:s("bk<@>"),co:s("dx"),gP:s("hl"),aw:s("ho"),a:s("bB"),r:s("aj"),ad:s("dD"),X:s("ap"),bW:s("hu"),id:s("e<P>"),R:s("e<@>"),fm:s("e<h>"),an:s("E<fZ>"),a_:s("E<hd>"),lv:s("E<er>"),b:s("E<ew>"),nK:s("E<dx>"),g:s("E<bO>"),hc:s("E<k<k<k<h>>>>"),o:s("E<k<k<h>>>"),S:s("E<k<h>>"),C:s("E<a9<@,@>>"),fi:s("E<f0>"),mS:s("E<cZ>"),na:s("E<bC>"),k9:s("E<f2>"),s:s("E<A>"),fZ:s("E<iH>"),bs:s("E<bt>"),by:s("E<bY>"),ip:s("E<iT>"),J:s("E<fh>"),n0:s("E<j9>"),kv:s("E<e7>"),dG:s("E<@>"),t:s("E<h>"),dj:s("E<ce?>"),gU:s("E<hJ?>"),mD:s("E<bE?>"),e5:s("E<bt?>"),f7:s("E<~()>"),B:s("E<~(as)>"),iy:s("I<@>"),u:s("eK"),bp:s("n"),et:s("bP"),dX:s("L<@>"),e7:s("bQ"),kT:s("aX"),kk:s("k<dx>"),aL:s("k<bO>"),kn:s("k<hu>"),hK:s("k<k<k<h>>>"),mL:s("k<k<bY>>"),ez:s("k<N>"),I:s("k<cZ>"),f0:s("k<f2>"),bF:s("k<A>"),ac:s("k<fb>"),jz:s("k<bY>"),jt:s("k<fe>"),as:s("k<ff>"),f4:s("k<fg>"),cq:s("k<ad>"),H:s("k<P>"),j:s("k<@>"),L:s("k<h>"),A:s("k<ce?>"),kb:s("k<bY?>"),a3:s("k<fv?>"),dW:s("k<h?>"),oT:s("k<l>"),je:s("a9<A,A>"),f:s("a9<@,@>"),lq:s("a9<h,@(k<@>)>"),e:s("bR"),oA:s("ci"),ib:s("aE"),hH:s("dO"),dQ:s("cj"),aj:s("aZ"),hX:s("ak"),hD:s("cM"),Q:s("K"),P:s("aa"),ai:s("b0"),K:s("N"),mK:s("z"),d8:s("aF"),dS:s("cZ"),ok:s("ik"),dM:s("f3"),mi:s("dR"),fF:s("dS"),i:s("dV"),lZ:s("wo"),q:s("bq<l>"),kI:s("dX"),ls:s("aH"),cA:s("aI"),hI:s("aJ"),l:s("cl"),fw:s("dZ<@>"),N:s("A"),ll:s("au"),dR:s("aK"),gJ:s("av"),e8:s("iG"),on:s("p6"),ki:s("aM"),hk:s("b2"),aJ:s("V"),ha:s("p8"),do:s("bW"),jv:s("a7"),mC:s("bE"),D:s("bt"),cx:s("d1"),aO:s("fb"),f_:s("fe"),h2:s("ff"),ij:s("fg"),jk:s("d4<@>"),av:s("ab<aa>"),d:s("ab<@>"),hy:s("ab<h>"),nA:s("fv"),aK:s("jz"),v:s("ad"),nU:s("ad(N)"),V:s("P"),z:s("@"),mY:s("@()"),kF:s("@(k<@>)"),x:s("@(N)"),U:s("@(N,cl)"),p1:s("@(@,@)"),p:s("h"),eK:s("0&*"),_:s("N*"),iv:s("cv?"),gK:s("bk<aa>?"),ef:s("aC?"),jH:s("kx?"),nW:s("k<N>?"),lH:s("k<@>?"),T:s("k<h>?"),iM:s("k<ce?>?"),kX:s("k<bE?>?"),k:s("k<h?>?"),gm:s("k<~()>?"),hL:s("a9<A,ap>?"),lG:s("a9<A,A>?"),fC:s("a9<h,~()>?"),fT:s("ci?"),O:s("N?"),dD:s("bU?"),nh:s("bt?"),nX:s("fc?"),fA:s("bY?"),nk:s("iU?"),iu:s("pg?"),F:s("c_<@,@>?"),W:s("jj?"),y:s("@(p)?"),E:s("h?"),Z:s("~()?"),m1:s("~(bR)?"),bZ:s("~(h)?"),cZ:s("l"),Y:s("~"),M:s("~()"),mX:s("~(bQ,k<h>)"),bm:s("~(A,A)"),w:s("~(A,@)"),lt:s("~(h)"),jO:s("~(l,l,l,l)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cv=J.eF.prototype
B.c=J.E.prototype
B.a=J.eJ.prototype
B.b=J.dM.prototype
B.l=J.dN.prototype
B.cx=J.bP.prototype
B.cy=J.d.prototype
B.bD=A.ci.prototype
B.j1=A.eO.prototype
B.Q=A.eP.prototype
B.k=A.cM.prototype
B.bE=J.ia.prototype
B.aC=J.d1.prototype
B.ah=new A.fU(0,"direct")
B.aE=new A.fU(1,"alpha")
B.aF=new A.ar(0,"none")
B.ai=new A.ar(3,"bitfields")
B.aj=new A.ar(6,"alphaBitfields")
B.c5=new A.en(A.ag("en<0&>"))
B.aG=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.c6=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.cb=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.c7=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.c8=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.ca=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.c9=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aH=function(hooks) { return hooks; }

B.aI=new A.hM()
B.aJ=new A.hO()
B.aK=new A.kJ()
B.cc=new A.i5()
B.W=new A.l8()
B.cd=new A.iR()
B.jW=new A.lT()
B.aL=new A.lV()
B.q=new A.ju()
B.ce=new A.jE()
B.R=new A.mD()
B.aM=new A.kc(4,"luminance")
B.cf=new A.cx(0,"red")
B.cg=new A.cx(1,"green")
B.ch=new A.cx(2,"blue")
B.ci=new A.cx(3,"alpha")
B.cj=new A.cx(4,"other")
B.aN=new A.dv(0,"uint")
B.ak=new A.dv(1,"half")
B.al=new A.dv(2,"float")
B.aO=new A.bj(0,"none")
B.cr=new A.kk(2,"both")
B.v=new A.aB(0,"uint1")
B.w=new A.aB(1,"uint2")
B.E=new A.aB(10,"float32")
B.H=new A.aB(11,"float64")
B.x=new A.aB(2,"uint4")
B.e=new A.aB(3,"uint8")
B.y=new A.aB(4,"uint16")
B.F=new A.aB(5,"uint32")
B.I=new A.aB(6,"int8")
B.J=new A.aB(7,"int16")
B.K=new A.aB(8,"int32")
B.A=new A.aB(9,"float16")
B.cs=new A.hj(1,"page")
B.h=new A.hj(2,"sequence")
B.am=new A.kp(1,"deflate")
B.aP=new A.dz(2,"cur")
B.d=new A.aw(0,"none")
B.aQ=new A.aw(1,"byte")
B.aR=new A.aw(10,"sRational")
B.aS=new A.aw(11,"single")
B.aT=new A.aw(12,"double")
B.i=new A.aw(2,"ascii")
B.f=new A.aw(3,"short")
B.n=new A.aw(4,"long")
B.p=new A.aw(5,"rational")
B.aU=new A.aw(6,"sByte")
B.L=new A.aw(7,"undefined")
B.aV=new A.aw(8,"sShort")
B.aW=new A.aw(9,"sLong")
B.cw=new A.hF(0,"nearest")
B.jX=new A.hF(1,"linear")
B.cz=new A.kG(null)
B.cA=new A.kI(!1)
B.an=A.b(s([A.vC(),A.vu(),A.vJ(),A.vH(),A.vE(),A.vD(),A.vF()]),t.B)
B.M=A.b(s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1]),t.t)
B.ae=new A.aL(0,"none")
B.C=new A.aL(1,"palette")
B.bO=new A.aL(2,"rgb")
B.jf=new A.aL(3,"gray")
B.jg=new A.aL(4,"reserved4")
B.jh=new A.aL(5,"reserved5")
B.ji=new A.aL(6,"reserved6")
B.jj=new A.aL(7,"reserved7")
B.jk=new A.aL(8,"reserved8")
B.D=new A.aL(9,"paletteRle")
B.bN=new A.aL(10,"rgbRle")
B.je=new A.aL(11,"grayRle")
B.aX=A.b(s([B.ae,B.C,B.bO,B.jf,B.jg,B.jh,B.ji,B.jj,B.jk,B.D,B.bN,B.je]),A.ag("E<aL>"))
B.X=A.b(s([0,2,8]),t.t)
B.cL=A.b(s([0,4,2,1]),t.t)
B.aZ=A.b(s([252,243,207,63]),t.t)
B.Y=A.b(s([292,260,226,226]),t.t)
B.b0=A.b(s([2,3,7]),t.t)
B.d6=A.b(s([3,3,11]),t.t)
B.b2=A.b(s([511,1023,2047,4095]),t.t)
B.b5=A.b(s([63,207,243,252]),t.t)
B.dk=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),t.t)
B.ao=A.b(s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28]),t.t)
B.u=A.b(s([0,1,3,7,15,31,63,127,255]),t.t)
B.N=A.b(s([0,128,192,224,240,248,252,254,255]),t.t)
B.r=A.b(s([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255]),t.t)
B.dy=A.b(s([8,8,4,2]),t.t)
B.ap=A.b(s([8,0,8,0]),t.t)
B.dj=A.b(s([5,3,5,3]),t.t)
B.d7=A.b(s([3,5,3,5]),t.t)
B.aY=A.b(s([0,8,0,8]),t.t)
B.b1=A.b(s([4,4,4,4]),t.t)
B.dc=A.b(s([4,4,0,0]),t.t)
B.b6=A.b(s([B.ap,B.dj,B.d7,B.aY,B.ap,B.b1,B.dc,B.aY]),t.S)
B.t=A.b(s([255,255,255,255,255,255,255,255,255,255,255]),t.t)
B.P=A.b(s([B.t,B.t,B.t]),t.S)
B.h7=A.b(s([176,246,255,255,255,255,255,255,255,255,255]),t.t)
B.fW=A.b(s([223,241,252,255,255,255,255,255,255,255,255]),t.t)
B.dz=A.b(s([249,253,253,255,255,255,255,255,255,255,255]),t.t)
B.hL=A.b(s([B.h7,B.fW,B.dz]),t.S)
B.df=A.b(s([255,244,252,255,255,255,255,255,255,255,255]),t.t)
B.i8=A.b(s([234,254,254,255,255,255,255,255,255,255,255]),t.t)
B.b7=A.b(s([253,255,255,255,255,255,255,255,255,255,255]),t.t)
B.hX=A.b(s([B.df,B.i8,B.b7]),t.S)
B.dg=A.b(s([255,246,254,255,255,255,255,255,255,255,255]),t.t)
B.dT=A.b(s([239,253,254,255,255,255,255,255,255,255,255]),t.t)
B.bf=A.b(s([254,255,254,255,255,255,255,255,255,255,255]),t.t)
B.hs=A.b(s([B.dg,B.dT,B.bf]),t.S)
B.b3=A.b(s([255,248,254,255,255,255,255,255,255,255,255]),t.t)
B.dU=A.b(s([251,255,254,255,255,255,255,255,255,255,255]),t.t)
B.d9=A.b(s([B.b3,B.dU,B.t]),t.S)
B.ar=A.b(s([255,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dh=A.b(s([251,254,254,255,255,255,255,255,255,255,255]),t.t)
B.ik=A.b(s([B.ar,B.dh,B.bf]),t.S)
B.fM=A.b(s([255,254,253,255,254,255,255,255,255,255,255]),t.t)
B.dS=A.b(s([250,255,254,255,254,255,255,255,255,255,255]),t.t)
B.a2=A.b(s([254,255,255,255,255,255,255,255,255,255,255]),t.t)
B.j0=A.b(s([B.fM,B.dS,B.a2]),t.S)
B.hQ=A.b(s([B.P,B.hL,B.hX,B.hs,B.d9,B.ik,B.j0,B.P]),t.o)
B.fP=A.b(s([217,255,255,255,255,255,255,255,255,255,255]),t.t)
B.h5=A.b(s([225,252,241,253,255,255,254,255,255,255,255]),t.t)
B.hD=A.b(s([234,250,241,250,253,255,253,254,255,255,255]),t.t)
B.h4=A.b(s([B.fP,B.h5,B.hD]),t.S)
B.aq=A.b(s([255,254,255,255,255,255,255,255,255,255,255]),t.t)
B.i9=A.b(s([223,254,254,255,255,255,255,255,255,255,255]),t.t)
B.dN=A.b(s([238,253,254,254,255,255,255,255,255,255,255]),t.t)
B.hZ=A.b(s([B.aq,B.i9,B.dN]),t.S)
B.dE=A.b(s([249,254,255,255,255,255,255,255,255,255,255]),t.t)
B.dp=A.b(s([B.b3,B.dE,B.t]),t.S)
B.dA=A.b(s([255,253,255,255,255,255,255,255,255,255,255]),t.t)
B.dF=A.b(s([247,254,255,255,255,255,255,255,255,255,255]),t.t)
B.de=A.b(s([B.dA,B.dF,B.t]),t.S)
B.fQ=A.b(s([252,255,255,255,255,255,255,255,255,255,255]),t.t)
B.hU=A.b(s([B.ar,B.fQ,B.t]),t.S)
B.b4=A.b(s([255,254,254,255,255,255,255,255,255,255,255]),t.t)
B.ii=A.b(s([B.b4,B.b7,B.t]),t.S)
B.dG=A.b(s([255,254,253,255,255,255,255,255,255,255,255]),t.t)
B.be=A.b(s([250,255,255,255,255,255,255,255,255,255,255]),t.t)
B.id=A.b(s([B.dG,B.be,B.a2]),t.S)
B.hJ=A.b(s([B.h4,B.hZ,B.dp,B.de,B.hU,B.ii,B.id,B.P]),t.o)
B.fX=A.b(s([186,251,250,255,255,255,255,255,255,255,255]),t.t)
B.dO=A.b(s([234,251,244,254,255,255,255,255,255,255,255]),t.t)
B.fK=A.b(s([251,251,243,253,254,255,254,255,255,255,255]),t.t)
B.ie=A.b(s([B.fX,B.dO,B.fK]),t.S)
B.fY=A.b(s([236,253,254,255,255,255,255,255,255,255,255]),t.t)
B.dw=A.b(s([251,253,253,254,254,255,255,255,255,255,255]),t.t)
B.fi=A.b(s([B.ar,B.fY,B.dw]),t.S)
B.ia=A.b(s([254,254,254,255,255,255,255,255,255,255,255]),t.t)
B.hY=A.b(s([B.b4,B.ia,B.t]),t.S)
B.h8=A.b(s([254,254,255,255,255,255,255,255,255,255,255]),t.t)
B.hn=A.b(s([B.aq,B.h8,B.a2]),t.S)
B.bn=A.b(s([B.t,B.a2,B.t]),t.S)
B.iX=A.b(s([B.ie,B.fi,B.hY,B.hn,B.bn,B.P,B.P,B.P]),t.o)
B.fR=A.b(s([248,255,255,255,255,255,255,255,255,255,255]),t.t)
B.iE=A.b(s([250,254,252,254,255,255,255,255,255,255,255]),t.t)
B.h9=A.b(s([248,254,249,253,255,255,255,255,255,255,255]),t.t)
B.hT=A.b(s([B.fR,B.iE,B.h9]),t.S)
B.dB=A.b(s([255,253,253,255,255,255,255,255,255,255,255]),t.t)
B.fS=A.b(s([246,253,253,255,255,255,255,255,255,255,255]),t.t)
B.cM=A.b(s([252,254,251,254,254,255,255,255,255,255,255]),t.t)
B.hI=A.b(s([B.dB,B.fS,B.cM]),t.S)
B.di=A.b(s([255,254,252,255,255,255,255,255,255,255,255]),t.t)
B.ha=A.b(s([248,254,253,255,255,255,255,255,255,255,255]),t.t)
B.hv=A.b(s([253,255,254,254,255,255,255,255,255,255,255]),t.t)
B.ih=A.b(s([B.di,B.ha,B.hv]),t.S)
B.dV=A.b(s([255,251,254,255,255,255,255,255,255,255,255]),t.t)
B.dW=A.b(s([245,251,254,255,255,255,255,255,255,255,255]),t.t)
B.dX=A.b(s([253,253,254,255,255,255,255,255,255,255,255]),t.t)
B.hF=A.b(s([B.dV,B.dW,B.dX]),t.S)
B.dC=A.b(s([255,251,253,255,255,255,255,255,255,255,255]),t.t)
B.fZ=A.b(s([252,253,254,255,255,255,255,255,255,255,255]),t.t)
B.hS=A.b(s([B.dC,B.fZ,B.aq]),t.S)
B.dH=A.b(s([255,252,255,255,255,255,255,255,255,255,255]),t.t)
B.dY=A.b(s([249,255,254,255,255,255,255,255,255,255,255]),t.t)
B.dZ=A.b(s([255,255,254,255,255,255,255,255,255,255,255]),t.t)
B.hV=A.b(s([B.dH,B.dY,B.dZ]),t.S)
B.dD=A.b(s([255,255,253,255,255,255,255,255,255,255,255]),t.t)
B.hK=A.b(s([B.dD,B.be,B.t]),t.S)
B.dR=A.b(s([B.hT,B.hI,B.ih,B.hF,B.hS,B.hV,B.hK,B.bn]),t.o)
B.dL=A.b(s([B.hQ,B.hJ,B.iX,B.dR]),t.hc)
B.b8=A.b(s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),t.t)
B.jl=new A.d0(0,"invalid")
B.bP=new A.d0(1,"uint")
B.j=new A.d0(2,"int")
B.U=new A.d0(3,"float")
B.b9=A.b(s([B.jl,B.bP,B.j,B.U]),A.ag("E<d0>"))
B.dP=A.b(s([280,256,256,256,40]),t.t)
B.ba=A.b(s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),t.t)
B.ct=new A.dz(0,"invalid")
B.cu=new A.dz(1,"ico")
B.fj=A.b(s([B.ct,B.cu,B.aP]),A.ag("E<dz>"))
B.bb=A.b(s([A.vy(),A.vs(),A.vI(),A.vG(),A.vA(),A.vz(),A.vB()]),t.B)
B.az=new A.al(0,"whiteIsZero")
B.jt=new A.al(1,"blackIsZero")
B.jA=new A.al(2,"rgb")
B.aB=new A.al(3,"palette")
B.jB=new A.al(4,"transparencyMask")
B.bR=new A.al(5,"cmyk")
B.jC=new A.al(6,"yCbCr")
B.jD=new A.al(7,"reserved7")
B.jE=new A.al(8,"cieLab")
B.jF=new A.al(9,"iccLab")
B.ju=new A.al(10,"ituLab")
B.jv=new A.al(11,"logL")
B.jw=new A.al(12,"logLuv")
B.jx=new A.al(13,"colorFilterArray")
B.jy=new A.al(14,"linearRaw")
B.jz=new A.al(15,"depth")
B.aA=new A.al(16,"unknown")
B.bd=A.b(s([B.az,B.jt,B.jA,B.aB,B.jB,B.bR,B.jC,B.jD,B.jE,B.jF,B.ju,B.jv,B.jw,B.jx,B.jy,B.jz,B.aA]),A.ag("E<al>"))
B.G=A.b(s([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),t.t)
B.as=A.b(s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284]),t.t)
B.at=A.b(s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157]),t.t)
B.a_=A.b(s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]),t.t)
B.Z=A.b(s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41]),t.t)
B.a0=A.b(s([B.d,B.aQ,B.i,B.f,B.n,B.p,B.aU,B.L,B.aV,B.aW,B.aR,B.aS,B.aT]),A.ag("E<aw>"))
B.a1=A.b(s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0]),t.t)
B.a3=A.b(s([0,1,1,2,4,8,1,1,2,4,8,4,8]),t.t)
B.bg=A.b(s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5]),t.t)
B.bF=new A.f_(0,"source")
B.bG=new A.f_(1,"over")
B.bh=A.b(s([B.bF,B.bG]),A.ag("E<f_>"))
B.d4=A.b(s([2,6,2,6]),t.t)
B.dl=A.b(s([6,2,6,2]),t.t)
B.d3=A.b(s([2,2,6,6]),t.t)
B.cS=A.b(s([1,3,3,9]),t.t)
B.da=A.b(s([4,0,12,0]),t.t)
B.d5=A.b(s([3,1,9,3]),t.t)
B.dx=A.b(s([8,8,0,0]),t.t)
B.db=A.b(s([4,12,0,0]),t.t)
B.cP=A.b(s([16,0,0,0]),t.t)
B.cO=A.b(s([12,4,0,0]),t.t)
B.dm=A.b(s([6,6,2,2]),t.t)
B.d8=A.b(s([3,9,1,3]),t.t)
B.cN=A.b(s([12,0,4,0]),t.t)
B.dJ=A.b(s([9,3,3,1]),t.t)
B.m=A.b(s([B.b1,B.d4,B.ap,B.dl,B.d3,B.cS,B.da,B.d5,B.dx,B.db,B.cP,B.cO,B.dm,B.d8,B.cN,B.dJ]),t.S)
B.hi=A.b(s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),t.t)
B.a4=A.b(s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t.t)
B.hj=A.b(s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15]),t.t)
B.o=A.b(s([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255]),t.t)
B.S=A.b(s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),t.t)
B.ho=A.b(s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576]),t.t)
B.bi=A.b(s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),t.t)
B.bj=A.b(s([null,A.vY(),A.vZ(),A.vX()]),A.ag("E<~(h,h,h,h,h,bt)?>"))
B.bk=A.b(s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127]),t.t)
B.a5=A.b(s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8]),t.t)
B.O=A.b(s([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845]),t.t)
B.au=A.b(s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),t.t)
B.hw=A.b(s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0]),t.t)
B.bl=A.b(s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),t.t)
B.a6=A.b(s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390]),t.t)
B.a7=A.b(s([0,36,72,109,145,182,218,255]),t.t)
B.bm=A.b(s([137,80,78,71,13,10,26,10]),t.t)
B.T=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295]),t.t)
B.bV=new A.ar(1,"rle8")
B.c_=new A.ar(2,"rle4")
B.c0=new A.ar(4,"jpeg")
B.c1=new A.ar(5,"png")
B.c2=new A.ar(7,"reserved7")
B.c3=new A.ar(8,"reserved8")
B.c4=new A.ar(9,"reserved9")
B.bW=new A.ar(10,"reserved10")
B.bX=new A.ar(11,"cmyk")
B.bY=new A.ar(12,"cmykRle8")
B.bZ=new A.ar(13,"cmykRle4")
B.a8=A.b(s([B.aF,B.bV,B.c_,B.ai,B.c0,B.c1,B.aj,B.c2,B.c3,B.c4,B.bW,B.bX,B.bY,B.bZ]),A.ag("E<ar>"))
B.iY=A.b(s([231,120,48,89,115,113,120,152,112]),t.t)
B.e_=A.b(s([152,179,64,126,170,118,46,70,95]),t.t)
B.e0=A.b(s([175,69,143,80,85,82,72,155,103]),t.t)
B.e1=A.b(s([56,58,10,171,218,189,17,13,152]),t.t)
B.ec=A.b(s([114,26,17,163,44,195,21,10,173]),t.t)
B.en=A.b(s([121,24,80,195,26,62,44,64,85]),t.t)
B.ey=A.b(s([144,71,10,38,171,213,144,34,26]),t.t)
B.eJ=A.b(s([170,46,55,19,136,160,33,206,71]),t.t)
B.eU=A.b(s([63,20,8,114,114,208,12,9,226]),t.t)
B.f4=A.b(s([81,40,11,96,182,84,29,16,36]),t.t)
B.dK=A.b(s([B.iY,B.e_,B.e0,B.e1,B.ec,B.en,B.ey,B.eJ,B.eU,B.f4]),t.S)
B.ff=A.b(s([134,183,89,137,98,101,106,165,148]),t.t)
B.fh=A.b(s([72,187,100,130,157,111,32,75,80]),t.t)
B.e2=A.b(s([66,102,167,99,74,62,40,234,128]),t.t)
B.fF=A.b(s([41,53,9,178,241,141,26,8,107]),t.t)
B.e3=A.b(s([74,43,26,146,73,166,49,23,157]),t.t)
B.e4=A.b(s([65,38,105,160,51,52,31,115,128]),t.t)
B.iN=A.b(s([104,79,12,27,217,255,87,17,7]),t.t)
B.e5=A.b(s([87,68,71,44,114,51,15,186,23]),t.t)
B.e6=A.b(s([47,41,14,110,182,183,21,17,194]),t.t)
B.e7=A.b(s([66,45,25,102,197,189,23,18,22]),t.t)
B.io=A.b(s([B.ff,B.fh,B.e2,B.fF,B.e3,B.e4,B.iN,B.e5,B.e6,B.e7]),t.S)
B.e8=A.b(s([88,88,147,150,42,46,45,196,205]),t.t)
B.e9=A.b(s([43,97,183,117,85,38,35,179,61]),t.t)
B.ea=A.b(s([39,53,200,87,26,21,43,232,171]),t.t)
B.eb=A.b(s([56,34,51,104,114,102,29,93,77]),t.t)
B.ed=A.b(s([39,28,85,171,58,165,90,98,64]),t.t)
B.ee=A.b(s([34,22,116,206,23,34,43,166,73]),t.t)
B.ef=A.b(s([107,54,32,26,51,1,81,43,31]),t.t)
B.eg=A.b(s([68,25,106,22,64,171,36,225,114]),t.t)
B.eh=A.b(s([34,19,21,102,132,188,16,76,124]),t.t)
B.ei=A.b(s([62,18,78,95,85,57,50,48,51]),t.t)
B.i5=A.b(s([B.e8,B.e9,B.ea,B.eb,B.ed,B.ee,B.ef,B.eg,B.eh,B.ei]),t.S)
B.ej=A.b(s([193,101,35,159,215,111,89,46,111]),t.t)
B.ek=A.b(s([60,148,31,172,219,228,21,18,111]),t.t)
B.iO=A.b(s([112,113,77,85,179,255,38,120,114]),t.t)
B.fG=A.b(s([40,42,1,196,245,209,10,25,109]),t.t)
B.el=A.b(s([88,43,29,140,166,213,37,43,154]),t.t)
B.em=A.b(s([61,63,30,155,67,45,68,1,209]),t.t)
B.eo=A.b(s([100,80,8,43,154,1,51,26,71]),t.t)
B.fH=A.b(s([142,78,78,16,255,128,34,197,171]),t.t)
B.ep=A.b(s([41,40,5,102,211,183,4,1,221]),t.t)
B.eq=A.b(s([51,50,17,168,209,192,23,25,82]),t.t)
B.h1=A.b(s([B.ej,B.ek,B.iO,B.fG,B.el,B.em,B.eo,B.fH,B.ep,B.eq]),t.S)
B.ds=A.b(s([138,31,36,171,27,166,38,44,229]),t.t)
B.er=A.b(s([67,87,58,169,82,115,26,59,179]),t.t)
B.es=A.b(s([63,59,90,180,59,166,93,73,154]),t.t)
B.et=A.b(s([40,40,21,116,143,209,34,39,175]),t.t)
B.eu=A.b(s([47,15,16,183,34,223,49,45,183]),t.t)
B.ev=A.b(s([46,17,33,183,6,98,15,32,183]),t.t)
B.ew=A.b(s([57,46,22,24,128,1,54,17,37]),t.t)
B.ex=A.b(s([65,32,73,115,28,128,23,128,205]),t.t)
B.ez=A.b(s([40,3,9,115,51,192,18,6,223]),t.t)
B.eA=A.b(s([87,37,9,115,59,77,64,21,47]),t.t)
B.fz=A.b(s([B.ds,B.er,B.es,B.et,B.eu,B.ev,B.ew,B.ex,B.ez,B.eA]),t.S)
B.eB=A.b(s([104,55,44,218,9,54,53,130,226]),t.t)
B.eC=A.b(s([64,90,70,205,40,41,23,26,57]),t.t)
B.eD=A.b(s([54,57,112,184,5,41,38,166,213]),t.t)
B.eE=A.b(s([30,34,26,133,152,116,10,32,134]),t.t)
B.dt=A.b(s([39,19,53,221,26,114,32,73,255]),t.t)
B.eF=A.b(s([31,9,65,234,2,15,1,118,73]),t.t)
B.iP=A.b(s([75,32,12,51,192,255,160,43,51]),t.t)
B.eG=A.b(s([88,31,35,67,102,85,55,186,85]),t.t)
B.eH=A.b(s([56,21,23,111,59,205,45,37,192]),t.t)
B.eI=A.b(s([55,38,70,124,73,102,1,34,98]),t.t)
B.hb=A.b(s([B.eB,B.eC,B.eD,B.eE,B.dt,B.eF,B.iP,B.eG,B.eH,B.eI]),t.S)
B.eK=A.b(s([125,98,42,88,104,85,117,175,82]),t.t)
B.eL=A.b(s([95,84,53,89,128,100,113,101,45]),t.t)
B.eM=A.b(s([75,79,123,47,51,128,81,171,1]),t.t)
B.eN=A.b(s([57,17,5,71,102,57,53,41,49]),t.t)
B.eO=A.b(s([38,33,13,121,57,73,26,1,85]),t.t)
B.eP=A.b(s([41,10,67,138,77,110,90,47,114]),t.t)
B.iQ=A.b(s([115,21,2,10,102,255,166,23,6]),t.t)
B.eQ=A.b(s([101,29,16,10,85,128,101,196,26]),t.t)
B.eR=A.b(s([57,18,10,102,102,213,34,20,43]),t.t)
B.eS=A.b(s([117,20,15,36,163,128,68,1,26]),t.t)
B.fB=A.b(s([B.eK,B.eL,B.eM,B.eN,B.eO,B.eP,B.iQ,B.eQ,B.eR,B.eS]),t.S)
B.dq=A.b(s([102,61,71,37,34,53,31,243,192]),t.t)
B.eT=A.b(s([69,60,71,38,73,119,28,222,37]),t.t)
B.dr=A.b(s([68,45,128,34,1,47,11,245,171]),t.t)
B.eV=A.b(s([62,17,19,70,146,85,55,62,70]),t.t)
B.eW=A.b(s([37,43,37,154,100,163,85,160,1]),t.t)
B.eX=A.b(s([63,9,92,136,28,64,32,201,85]),t.t)
B.iR=A.b(s([75,15,9,9,64,255,184,119,16]),t.t)
B.iS=A.b(s([86,6,28,5,64,255,25,248,1]),t.t)
B.iT=A.b(s([56,8,17,132,137,255,55,116,128]),t.t)
B.eY=A.b(s([58,15,20,82,135,57,26,121,40]),t.t)
B.fN=A.b(s([B.dq,B.eT,B.dr,B.eV,B.eW,B.eX,B.iR,B.iS,B.iT,B.eY]),t.S)
B.eZ=A.b(s([164,50,31,137,154,133,25,35,218]),t.t)
B.f_=A.b(s([51,103,44,131,131,123,31,6,158]),t.t)
B.f0=A.b(s([86,40,64,135,148,224,45,183,128]),t.t)
B.f1=A.b(s([22,26,17,131,240,154,14,1,209]),t.t)
B.f2=A.b(s([45,16,21,91,64,222,7,1,197]),t.t)
B.f3=A.b(s([56,21,39,155,60,138,23,102,213]),t.t)
B.iU=A.b(s([83,12,13,54,192,255,68,47,28]),t.t)
B.f5=A.b(s([85,26,85,85,128,128,32,146,171]),t.t)
B.f6=A.b(s([18,11,7,63,144,171,4,4,246]),t.t)
B.f7=A.b(s([35,27,10,146,174,171,12,26,128]),t.t)
B.fC=A.b(s([B.eZ,B.f_,B.f0,B.f1,B.f2,B.f3,B.iU,B.f5,B.f6,B.f7]),t.S)
B.f8=A.b(s([190,80,35,99,180,80,126,54,45]),t.t)
B.f9=A.b(s([85,126,47,87,176,51,41,20,32]),t.t)
B.fa=A.b(s([101,75,128,139,118,146,116,128,85]),t.t)
B.fb=A.b(s([56,41,15,176,236,85,37,9,62]),t.t)
B.iV=A.b(s([71,30,17,119,118,255,17,18,138]),t.t)
B.fc=A.b(s([101,38,60,138,55,70,43,26,142]),t.t)
B.iW=A.b(s([146,36,19,30,171,255,97,27,20]),t.t)
B.fd=A.b(s([138,45,61,62,219,1,81,188,64]),t.t)
B.fe=A.b(s([32,41,20,117,151,142,20,21,163]),t.t)
B.fg=A.b(s([112,19,12,61,195,128,48,4,24]),t.t)
B.h3=A.b(s([B.f8,B.f9,B.fa,B.fb,B.iV,B.fc,B.iW,B.fd,B.fe,B.fg]),t.S)
B.bo=A.b(s([B.dK,B.io,B.i5,B.h1,B.fz,B.hb,B.fB,B.fN,B.fC,B.h3]),t.o)
B.bp=A.b(s([]),t.dG)
B.br=A.b(s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15]),t.t)
B.bq=A.b(s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396]),t.t)
B.av=A.b(s([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15]),t.t)
B.bs=A.b(s([B.aN,B.ak,B.al]),A.ag("E<dv>"))
B.aw=A.b(s([128,128,128,128,128,128,128,128,128,128,128]),t.t)
B.bc=A.b(s([B.aw,B.aw,B.aw]),t.S)
B.h_=A.b(s([253,136,254,255,228,219,128,128,128,128,128]),t.t)
B.fp=A.b(s([189,129,242,255,227,213,255,219,128,128,128]),t.t)
B.hk=A.b(s([106,126,227,252,214,209,255,255,128,128,128]),t.t)
B.hq=A.b(s([B.h_,B.fp,B.hk]),t.S)
B.iF=A.b(s([1,98,248,255,236,226,255,255,128,128,128]),t.t)
B.is=A.b(s([181,133,238,254,221,234,255,154,128,128,128]),t.t)
B.fq=A.b(s([78,134,202,247,198,180,255,219,128,128,128]),t.t)
B.dM=A.b(s([B.iF,B.is,B.fq]),t.S)
B.il=A.b(s([1,185,249,255,243,255,128,128,128,128,128]),t.t)
B.cH=A.b(s([184,150,247,255,236,224,128,128,128,128,128]),t.t)
B.cB=A.b(s([77,110,216,255,236,230,128,128,128,128,128]),t.t)
B.ic=A.b(s([B.il,B.cH,B.cB]),t.S)
B.im=A.b(s([1,101,251,255,241,255,128,128,128,128,128]),t.t)
B.fO=A.b(s([170,139,241,252,236,209,255,255,128,128,128]),t.t)
B.fy=A.b(s([37,116,196,243,228,255,255,255,128,128,128]),t.t)
B.hp=A.b(s([B.im,B.fO,B.fy]),t.S)
B.iM=A.b(s([1,204,254,255,245,255,128,128,128,128,128]),t.t)
B.cC=A.b(s([207,160,250,255,238,128,128,128,128,128,128]),t.t)
B.cI=A.b(s([102,103,231,255,211,171,128,128,128,128,128]),t.t)
B.ib=A.b(s([B.iM,B.cC,B.cI]),t.S)
B.i_=A.b(s([1,152,252,255,240,255,128,128,128,128,128]),t.t)
B.cJ=A.b(s([177,135,243,255,234,225,128,128,128,128,128]),t.t)
B.cD=A.b(s([80,129,211,255,194,224,128,128,128,128,128]),t.t)
B.iZ=A.b(s([B.i_,B.cJ,B.cD]),t.S)
B.b_=A.b(s([1,1,255,128,128,128,128,128,128,128,128]),t.t)
B.cV=A.b(s([246,1,255,128,128,128,128,128,128,128,128]),t.t)
B.fo=A.b(s([255,128,128,128,128,128,128,128,128,128,128]),t.t)
B.h6=A.b(s([B.b_,B.cV,B.fo]),t.S)
B.hr=A.b(s([B.bc,B.hq,B.dM,B.ic,B.hp,B.ib,B.iZ,B.h6]),t.o)
B.cW=A.b(s([198,35,237,223,193,187,162,160,145,155,62]),t.t)
B.ip=A.b(s([131,45,198,221,172,176,220,157,252,221,1]),t.t)
B.hM=A.b(s([68,47,146,208,149,167,221,162,255,223,128]),t.t)
B.ir=A.b(s([B.cW,B.ip,B.hM]),t.S)
B.fl=A.b(s([1,149,241,255,221,224,255,255,128,128,128]),t.t)
B.fr=A.b(s([184,141,234,253,222,220,255,199,128,128,128]),t.t)
B.hc=A.b(s([81,99,181,242,176,190,249,202,255,255,128]),t.t)
B.hm=A.b(s([B.fl,B.fr,B.hc]),t.S)
B.fI=A.b(s([1,129,232,253,214,197,242,196,255,255,128]),t.t)
B.it=A.b(s([99,121,210,250,201,198,255,202,128,128,128]),t.t)
B.hd=A.b(s([23,91,163,242,170,187,247,210,255,255,128]),t.t)
B.dv=A.b(s([B.fI,B.it,B.hd]),t.S)
B.i0=A.b(s([1,200,246,255,234,255,128,128,128,128,128]),t.t)
B.fE=A.b(s([109,178,241,255,231,245,255,255,128,128,128]),t.t)
B.iG=A.b(s([44,130,201,253,205,192,255,255,128,128,128]),t.t)
B.fA=A.b(s([B.i0,B.fE,B.iG]),t.S)
B.cT=A.b(s([1,132,239,251,219,209,255,165,128,128,128]),t.t)
B.iH=A.b(s([94,136,225,251,218,190,255,255,128,128,128]),t.t)
B.fs=A.b(s([22,100,174,245,186,161,255,199,128,128,128]),t.t)
B.i7=A.b(s([B.cT,B.iH,B.fs]),t.S)
B.fT=A.b(s([1,182,249,255,232,235,128,128,128,128,128]),t.t)
B.cK=A.b(s([124,143,241,255,227,234,128,128,128,128,128]),t.t)
B.ft=A.b(s([35,77,181,251,193,211,255,205,128,128,128]),t.t)
B.hH=A.b(s([B.fT,B.cK,B.ft]),t.S)
B.hu=A.b(s([1,157,247,255,236,231,255,255,128,128,128]),t.t)
B.fm=A.b(s([121,141,235,255,225,227,255,255,128,128,128]),t.t)
B.fu=A.b(s([45,99,188,251,195,217,255,224,128,128,128]),t.t)
B.iB=A.b(s([B.hu,B.fm,B.fu]),t.S)
B.fU=A.b(s([1,1,251,255,213,255,128,128,128,128,128]),t.t)
B.hx=A.b(s([203,1,248,255,255,128,128,128,128,128,128]),t.t)
B.i1=A.b(s([137,1,177,255,224,255,128,128,128,128,128]),t.t)
B.iA=A.b(s([B.fU,B.hx,B.i1]),t.S)
B.ht=A.b(s([B.ir,B.hm,B.dv,B.fA,B.i7,B.hH,B.iB,B.iA]),t.o)
B.hW=A.b(s([253,9,248,251,207,208,255,192,128,128,128]),t.t)
B.h2=A.b(s([175,13,224,243,193,185,249,198,255,255,128]),t.t)
B.hN=A.b(s([73,17,171,221,161,179,236,167,255,234,128]),t.t)
B.ij=A.b(s([B.hW,B.h2,B.hN]),t.S)
B.fn=A.b(s([1,95,247,253,212,183,255,255,128,128,128]),t.t)
B.fk=A.b(s([239,90,244,250,211,209,255,255,128,128,128]),t.t)
B.hl=A.b(s([155,77,195,248,188,195,255,255,128,128,128]),t.t)
B.dI=A.b(s([B.fn,B.fk,B.hl]),t.S)
B.cU=A.b(s([1,24,239,251,218,219,255,205,128,128,128]),t.t)
B.cF=A.b(s([201,51,219,255,196,186,128,128,128,128,128]),t.t)
B.fv=A.b(s([69,46,190,239,201,218,255,228,128,128,128]),t.t)
B.iq=A.b(s([B.cU,B.cF,B.fv]),t.S)
B.hG=A.b(s([1,191,251,255,255,128,128,128,128,128,128]),t.t)
B.fV=A.b(s([223,165,249,255,213,255,128,128,128,128,128]),t.t)
B.hy=A.b(s([141,124,248,255,255,128,128,128,128,128,128]),t.t)
B.du=A.b(s([B.hG,B.fV,B.hy]),t.S)
B.hz=A.b(s([1,16,248,255,255,128,128,128,128,128,128]),t.t)
B.i2=A.b(s([190,36,230,255,236,255,128,128,128,128,128]),t.t)
B.cX=A.b(s([149,1,255,128,128,128,128,128,128,128,128]),t.t)
B.j_=A.b(s([B.hz,B.i2,B.cX]),t.S)
B.cY=A.b(s([1,226,255,128,128,128,128,128,128,128,128]),t.t)
B.i4=A.b(s([247,192,255,128,128,128,128,128,128,128,128]),t.t)
B.cZ=A.b(s([240,128,255,128,128,128,128,128,128,128,128]),t.t)
B.iz=A.b(s([B.cY,B.i4,B.cZ]),t.S)
B.hA=A.b(s([1,134,252,255,255,128,128,128,128,128,128]),t.t)
B.hB=A.b(s([213,62,250,255,255,128,128,128,128,128,128]),t.t)
B.d_=A.b(s([55,93,255,128,128,128,128,128,128,128,128]),t.t)
B.iL=A.b(s([B.hA,B.hB,B.d_]),t.S)
B.iD=A.b(s([B.ij,B.dI,B.iq,B.du,B.j_,B.iz,B.iL,B.bc]),t.o)
B.hE=A.b(s([202,24,213,235,186,191,220,160,240,175,255]),t.t)
B.hO=A.b(s([126,38,182,232,169,184,228,174,255,187,128]),t.t)
B.hP=A.b(s([61,46,138,219,151,178,240,170,255,216,128]),t.t)
B.iC=A.b(s([B.hE,B.hO,B.hP]),t.S)
B.he=A.b(s([1,112,230,250,199,191,247,159,255,255,128]),t.t)
B.iu=A.b(s([166,109,228,252,211,215,255,174,128,128,128]),t.t)
B.hf=A.b(s([39,77,162,232,172,180,245,178,255,255,128]),t.t)
B.cE=A.b(s([B.he,B.iu,B.hf]),t.S)
B.hg=A.b(s([1,52,220,246,198,199,249,220,255,255,128]),t.t)
B.fJ=A.b(s([124,74,191,243,183,193,250,221,255,255,128]),t.t)
B.hh=A.b(s([24,71,130,219,154,170,243,182,255,255,128]),t.t)
B.i3=A.b(s([B.hg,B.fJ,B.hh]),t.S)
B.fw=A.b(s([1,182,225,249,219,240,255,224,128,128,128]),t.t)
B.iv=A.b(s([149,150,226,252,216,205,255,171,128,128,128]),t.t)
B.dn=A.b(s([28,108,170,242,183,194,254,223,255,255,128]),t.t)
B.fD=A.b(s([B.fw,B.iv,B.dn]),t.S)
B.iw=A.b(s([1,81,230,252,204,203,255,192,128,128,128]),t.t)
B.iI=A.b(s([123,102,209,247,188,196,255,233,128,128,128]),t.t)
B.fx=A.b(s([20,95,153,243,164,173,255,203,128,128,128]),t.t)
B.h0=A.b(s([B.iw,B.iI,B.fx]),t.S)
B.cG=A.b(s([1,222,248,255,216,213,128,128,128,128,128]),t.t)
B.fL=A.b(s([168,175,246,252,235,205,255,255,128,128,128]),t.t)
B.iJ=A.b(s([47,116,215,255,211,212,255,255,128,128,128]),t.t)
B.hR=A.b(s([B.cG,B.fL,B.iJ]),t.S)
B.iK=A.b(s([1,121,236,253,212,214,255,255,128,128,128]),t.t)
B.ix=A.b(s([141,84,213,252,201,202,255,219,128,128,128]),t.t)
B.iy=A.b(s([42,80,160,240,162,185,255,205,128,128,128]),t.t)
B.ig=A.b(s([B.iK,B.ix,B.iy]),t.S)
B.d0=A.b(s([244,1,255,128,128,128,128,128,128,128,128]),t.t)
B.d1=A.b(s([238,1,255,128,128,128,128,128,128,128,128]),t.t)
B.dd=A.b(s([B.b_,B.d0,B.d1]),t.S)
B.hC=A.b(s([B.iC,B.cE,B.i3,B.fD,B.h0,B.hR,B.ig,B.dd]),t.o)
B.i6=A.b(s([B.hr,B.ht,B.iD,B.hC]),t.hc)
B.a9=A.b(s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68]),t.t)
B.bT=new A.d2(0,"predictor")
B.jS=new A.d2(1,"crossColor")
B.jT=new A.d2(2,"subtractGreen")
B.bU=new A.d2(3,"colorIndexing")
B.bt=A.b(s([B.bT,B.jS,B.jT,B.bU]),A.ag("E<d2>"))
B.cQ=A.b(s([173,148,140]),t.t)
B.cR=A.b(s([176,155,140,135]),t.t)
B.dQ=A.b(s([180,157,141,134,130]),t.t)
B.d2=A.b(s([254,254,243,230,196,177,153,140,133,130,129]),t.t)
B.bu=A.b(s([B.cQ,B.cR,B.dQ,B.d2]),t.S)
B.z=A.b(s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]),t.t)
B.bv=A.b(s([254,253,251,247,239,223,191,127]),t.t)
B.aa=A.b(s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9]),t.t)
B.ja=new A.bp(0,"bitmap")
B.bJ=new A.bp(1,"grayscale")
B.jb=new A.bp(2,"indexed")
B.bK=new A.bp(3,"rgb")
B.bL=new A.bp(4,"cmyk")
B.jc=new A.bp(5,"multiChannel")
B.jd=new A.bp(6,"duoTone")
B.bM=new A.bp(7,"lab")
B.bw=A.b(s([B.ja,B.bJ,B.jb,B.bK,B.bL,B.jc,B.jd,B.bM]),A.ag("E<bp>"))
B.B=A.b(s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567]),t.t)
B.j3=new A.ck(0,"none")
B.j4=new A.ck(1,"sub")
B.j5=new A.ck(2,"up")
B.j6=new A.ck(3,"average")
B.j7=new A.ck(4,"paeth")
B.ab=A.b(s([B.j3,B.j4,B.j5,B.j6,B.j7]),A.ag("E<ck>"))
B.ck=new A.bj(1,"rle")
B.cl=new A.bj(2,"zips")
B.cm=new A.bj(3,"zip")
B.cn=new A.bj(4,"piz")
B.co=new A.bj(5,"pxr24")
B.cp=new A.bj(6,"b44")
B.cq=new A.bj(7,"b44a")
B.bx=A.b(s([B.aO,B.ck,B.cl,B.cm,B.cn,B.co,B.cp,B.cq]),A.ag("E<bj>"))
B.by=A.b(s([A.vm(),A.vt(),A.vv(),A.vo(),A.vr(),A.vx(),A.vq(),A.vw(),A.vn(),A.vp()]),t.B)
B.j2=new A.dQ(0,"none")
B.bH=new A.dQ(1,"background")
B.bI=new A.dQ(2,"previous")
B.bz=A.b(s([B.j2,B.bH,B.bI]),A.ag("E<dQ>"))
B.bA=A.b(s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095]),t.t)
B.bB=A.b(s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112]),t.t)
B.ac=A.b(s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232]),t.t)
B.ad=A.b(s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29]),t.t)
B.bC=new A.cz([B.v,1,B.w,3,B.x,15,B.e,255,B.y,65535,B.F,4294967295,B.I,127,B.J,32767,B.K,2147483647,B.A,1,B.E,1,B.H,1],A.ag("cz<aB,h>"))
B.ax=new A.cz([34665,"exif",40965,"interop",34853,"gps"],A.ag("cz<h,A>"))
B.j8=new A.id(0,"none")
B.j9=new A.id(4,"paeth")
B.ay=new A.bd(0,"bilevel")
B.jm=new A.bd(1,"gray4bit")
B.jn=new A.bd(2,"gray")
B.jo=new A.bd(3,"grayAlpha")
B.jp=new A.bd(4,"palette")
B.bQ=new A.bd(5,"rgb")
B.jq=new A.bd(6,"rgba")
B.jr=new A.bd(7,"yCbCrSub")
B.af=new A.bd(8,"generic")
B.js=new A.bd(9,"invalid")
B.jG=A.bw("w4")
B.jH=A.bw("qD")
B.jI=A.bw("n6")
B.jJ=A.bw("n7")
B.jK=A.bw("kx")
B.jL=A.bw("hu")
B.jM=A.bw("n8")
B.jN=A.bw("N")
B.jO=A.bw("nv")
B.jP=A.bw("bE")
B.jQ=A.bw("rG")
B.jR=A.bw("bt")
B.bS=new A.lt(!0)
B.V=new A.e2(0,"undefined")
B.aD=new A.e2(1,"lossy")
B.ag=new A.e2(2,"lossless")
B.jU=new A.e2(3,"animated")
B.jV=new A.e6(null,2)})();(function staticFields(){$.ml=null
$.b4=A.b([],A.ag("E<N>"))
$.oY=null
$.od=null
$.oc=null
$.pX=null
$.pQ=null
$.q_=null
$.mO=null
$.mT=null
$.nR=null
$.e8=null
$.fJ=null
$.fK=null
$.nM=!1
$.a0=B.q
$.b6=A.nA("_config")
$.nK=null
$.pd=!1
$.pe=A.b([A.nW(),A.vK(),A.vP(),A.vQ(),A.vR(),A.vS(),A.vT(),A.vU(),A.vV(),A.vW(),A.vL(),A.vM(),A.vN(),A.vO(),A.nW(),A.nW()],A.ag("E<h(bE,h,h)>"))
$.Z=null
$.kl=A.nA("_eLut")
$.br=null
$.lb=!1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"wd","q5",()=>A.v1("_$dart_dartClosure"))
s($,"xf","o3",()=>B.q.fZ(new A.mW(),A.ag("bk<aa>")))
s($,"wu","q7",()=>A.bX(A.lr({
toString:function(){return"$receiver$"}})))
s($,"wv","q8",()=>A.bX(A.lr({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ww","q9",()=>A.bX(A.lr(null)))
s($,"wx","qa",()=>A.bX(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"wA","qd",()=>A.bX(A.lr(void 0)))
s($,"wB","qe",()=>A.bX(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"wz","qc",()=>A.bX(A.p9(null)))
s($,"wy","qb",()=>A.bX(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"wD","qg",()=>A.bX(A.p9(void 0)))
s($,"wC","qf",()=>A.bX(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"wM","nY",()=>A.tu())
s($,"wE","qh",()=>new A.lv().$0())
s($,"wF","qi",()=>new A.lu().$0())
r($,"xa","qp",()=>new Error().stack!=void 0)
s($,"xb","k3",()=>A.nU(B.jN))
s($,"wQ","ql",()=>A.nE(B.a5,B.au,257,286,15))
s($,"wP","qk",()=>A.nE(B.bg,B.S,0,30,15))
s($,"wO","qj",()=>A.nE(null,B.hi,0,19,7))
s($,"xe","o2",()=>{var q=null,p="ISOSpeed"
return A.oJ([11,A.i("ProcessingSoftware",B.i,q),254,A.i("SubfileType",B.n,1),255,A.i("OldSubfileType",B.n,1),256,A.i("ImageWidth",B.n,1),257,A.i("ImageLength",B.n,1),258,A.i("BitsPerSample",B.f,1),259,A.i("Compression",B.f,1),262,A.i("PhotometricInterpretation",B.f,1),263,A.i("Thresholding",B.f,1),264,A.i("CellWidth",B.f,1),265,A.i("CellLength",B.f,1),266,A.i("FillOrder",B.f,1),269,A.i("DocumentName",B.i,q),270,A.i("ImageDescription",B.i,q),271,A.i("Make",B.i,q),272,A.i("Model",B.i,q),273,A.i("StripOffsets",B.n,q),274,A.i("Orientation",B.f,1),277,A.i("SamplesPerPixel",B.f,1),278,A.i("RowsPerStrip",B.n,1),279,A.i("StripByteCounts",B.n,1),280,A.i("MinSampleValue",B.f,1),281,A.i("MaxSampleValue",B.f,1),282,A.i("XResolution",B.p,1),283,A.i("YResolution",B.p,1),284,A.i("PlanarConfiguration",B.f,1),285,A.i("PageName",B.i,q),286,A.i("XPosition",B.p,1),287,A.i("YPosition",B.p,1),290,A.i("GrayResponseUnit",B.f,1),291,A.i("GrayResponseCurve",B.d,q),292,A.i("T4Options",B.d,q),293,A.i("T6Options",B.d,q),296,A.i("ResolutionUnit",B.f,1),297,A.i("PageNumber",B.f,2),300,A.i("ColorResponseUnit",B.d,q),301,A.i("TransferFunction",B.f,768),305,A.i("Software",B.i,q),306,A.i("DateTime",B.i,q),315,A.i("Artist",B.i,q),316,A.i("HostComputer",B.i,q),317,A.i("Predictor",B.f,1),318,A.i("WhitePoint",B.p,2),319,A.i("PrimaryChromaticities",B.p,6),320,A.i("ColorMap",B.f,q),321,A.i("HalftoneHints",B.f,2),322,A.i("TileWidth",B.n,1),323,A.i("TileLength",B.n,1),324,A.i("TileOffsets",B.n,q),325,A.i("TileByteCounts",B.d,q),326,A.i("BadFaxLines",B.d,q),327,A.i("CleanFaxData",B.d,q),328,A.i("ConsecutiveBadFaxLines",B.d,q),332,A.i("InkSet",B.d,q),333,A.i("InkNames",B.d,q),334,A.i("NumberofInks",B.d,q),336,A.i("DotRange",B.d,q),337,A.i("TargetPrinter",B.i,q),338,A.i("ExtraSamples",B.d,q),339,A.i("SampleFormat",B.f,1),340,A.i("SMinSampleValue",B.d,q),341,A.i("SMaxSampleValue",B.d,q),342,A.i("TransferRange",B.d,q),343,A.i("ClipPath",B.d,q),512,A.i("JPEGProc",B.d,q),513,A.i("JPEGInterchangeFormat",B.d,q),514,A.i("JPEGInterchangeFormatLength",B.d,q),529,A.i("YCbCrCoefficients",B.p,3),530,A.i("YCbCrSubSampling",B.f,1),531,A.i("YCbCrPositioning",B.f,1),532,A.i("ReferenceBlackWhite",B.p,6),700,A.i("ApplicationNotes",B.f,1),18246,A.i("Rating",B.f,1),33421,A.i("CFARepeatPatternDim",B.d,q),33422,A.i("CFAPattern",B.d,q),33423,A.i("BatteryLevel",B.d,q),33432,A.i("Copyright",B.i,q),33434,A.i("ExposureTime",B.p,1),33437,A.i("FNumber",B.p,q),33723,A.i("IPTC-NAA",B.n,1),34665,A.i("ExifOffset",B.d,q),34675,A.i("InterColorProfile",B.d,q),34850,A.i("ExposureProgram",B.f,1),34852,A.i("SpectralSensitivity",B.i,q),34853,A.i("GPSOffset",B.d,q),34855,A.i(p,B.n,1),34856,A.i("OECF",B.d,q),34864,A.i("SensitivityType",B.f,1),34866,A.i("RecommendedExposureIndex",B.n,1),34867,A.i(p,B.n,1),36864,A.i("ExifVersion",B.L,q),36867,A.i("DateTimeOriginal",B.i,q),36868,A.i("DateTimeDigitized",B.i,q),36880,A.i("OffsetTime",B.i,q),36881,A.i("OffsetTimeOriginal",B.i,q),36882,A.i("OffsetTimeDigitized",B.i,q),37121,A.i("ComponentsConfiguration",B.L,q),37122,A.i("CompressedBitsPerPixel",B.d,q),37377,A.i("ShutterSpeedValue",B.d,q),37378,A.i("ApertureValue",B.d,q),37379,A.i("BrightnessValue",B.d,q),37380,A.i("ExposureBiasValue",B.d,q),37381,A.i("MaxApertureValue",B.d,q),37382,A.i("SubjectDistance",B.d,q),37383,A.i("MeteringMode",B.d,q),37384,A.i("LightSource",B.d,q),37385,A.i("Flash",B.d,q),37386,A.i("FocalLength",B.d,q),37396,A.i("SubjectArea",B.d,q),37500,A.i("MakerNote",B.L,q),37510,A.i("UserComment",B.L,q),37520,A.i("SubSecTime",B.d,q),37521,A.i("SubSecTimeOriginal",B.d,q),37522,A.i("SubSecTimeDigitized",B.d,q),40091,A.i("XPTitle",B.d,q),40092,A.i("XPComment",B.d,q),40093,A.i("XPAuthor",B.d,q),40094,A.i("XPKeywords",B.d,q),40095,A.i("XPSubject",B.d,q),40960,A.i("FlashPixVersion",B.d,q),40961,A.i("ColorSpace",B.f,1),40962,A.i("ExifImageWidth",B.f,1),40963,A.i("ExifImageLength",B.f,1),40964,A.i("RelatedSoundFile",B.d,q),40965,A.i("InteroperabilityOffset",B.d,q),41483,A.i("FlashEnergy",B.d,q),41484,A.i("SpatialFrequencyResponse",B.d,q),41486,A.i("FocalPlaneXResolution",B.d,q),41487,A.i("FocalPlaneYResolution",B.d,q),41488,A.i("FocalPlaneResolutionUnit",B.d,q),41492,A.i("SubjectLocation",B.d,q),41493,A.i("ExposureIndex",B.d,q),41495,A.i("SensingMethod",B.d,q),41728,A.i("FileSource",B.d,q),41729,A.i("SceneType",B.d,q),41730,A.i("CVAPattern",B.d,q),41985,A.i("CustomRendered",B.d,q),41986,A.i("ExposureMode",B.d,q),41987,A.i("WhiteBalance",B.d,q),41988,A.i("DigitalZoomRatio",B.d,q),41989,A.i("FocalLengthIn35mmFilm",B.d,q),41990,A.i("SceneCaptureType",B.d,q),41991,A.i("GainControl",B.d,q),41992,A.i("Contrast",B.d,q),41993,A.i("Saturation",B.d,q),41994,A.i("Sharpness",B.d,q),41995,A.i("DeviceSettingDescription",B.d,q),41996,A.i("SubjectDistanceRange",B.d,q),42016,A.i("ImageUniqueID",B.d,q),42032,A.i("CameraOwnerName",B.i,q),42033,A.i("BodySerialNumber",B.i,q),42034,A.i("LensSpecification",B.d,q),42035,A.i("LensMake",B.i,q),42036,A.i("LensModel",B.i,q),42037,A.i("LensSerialNumber",B.i,q),42240,A.i("Gamma",B.p,1),50341,A.i("PrintIM",B.d,q),59932,A.i("Padding",B.d,q),59933,A.i("OffsetSchema",B.d,q),65e3,A.i("OwnerName",B.i,q),65001,A.i("SerialNumber",B.i,q)],t.p,A.ag("hb"))})
r($,"wG","k1",()=>A.kT(511))
r($,"wH","mZ",()=>A.kT(511))
r($,"wJ","n_",()=>A.oM(2041))
r($,"wK","k2",()=>A.oM(225))
r($,"wI","aU",()=>A.kT(766))
s($,"wn","q6",()=>A.oy(0,0,0))
s($,"x1","aP",()=>A.kT(1))
s($,"x2","aW",()=>A.r8($.aP().buffer,0,null))
s($,"wV","aO",()=>A.rj(1))
s($,"wW","aV",()=>{var q,p=$.aO().buffer
A.c2(p,0,null)
q=B.a.U(p.byteLength-0,2)
return new Int16Array(p,0,q)})
s($,"wX","X",()=>A.rl(1))
s($,"wZ","ao",()=>{var q,p=$.X().buffer
A.c2(p,0,null)
q=B.a.U(p.byteLength-0,4)
return new Int32Array(p,0,q)})
s($,"wY","c8",()=>A.qZ($.X().buffer))
s($,"wT","o_",()=>A.ri(1))
s($,"wU","qn",()=>A.pa($.o_().buffer,0))
s($,"wR","nZ",()=>A.rg(1))
s($,"wS","qm",()=>A.pa($.nZ().buffer,0))
s($,"x_","o0",()=>A.rF(1))
s($,"x0","qo",()=>{var q=$.o0()
return A.r_(q.ga6(q))})
s($,"w6","q4",()=>{var q=++$.nX().a,p=$.br
p=p==null?null:p.e
p=new A.cc(!1,null,""+q+"@"+A.D(p))
p.f=1
p.b=""
return p})
s($,"xc","o1",()=>new A.bA(A.uO(A.rx(2020,1,1,0,0,0,0,!0)),!0))
s($,"wt","nX",()=>new A.lo())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.d,AnimationEffectTiming:J.d,AnimationEffectTimingReadOnly:J.d,AnimationTimeline:J.d,AnimationWorkletGlobalScope:J.d,AuthenticatorAssertionResponse:J.d,AuthenticatorAttestationResponse:J.d,AuthenticatorResponse:J.d,BackgroundFetchFetch:J.d,BackgroundFetchManager:J.d,BackgroundFetchSettledFetch:J.d,BarProp:J.d,BarcodeDetector:J.d,BluetoothRemoteGATTDescriptor:J.d,Body:J.d,BudgetState:J.d,CacheStorage:J.d,CanvasGradient:J.d,CanvasPattern:J.d,CanvasRenderingContext2D:J.d,Client:J.d,Clients:J.d,CookieStore:J.d,Coordinates:J.d,Credential:J.d,CredentialUserData:J.d,CredentialsContainer:J.d,Crypto:J.d,CryptoKey:J.d,CSS:J.d,CSSVariableReferenceValue:J.d,CustomElementRegistry:J.d,DataTransfer:J.d,DataTransferItem:J.d,DeprecatedStorageInfo:J.d,DeprecatedStorageQuota:J.d,DeprecationReport:J.d,DetectedBarcode:J.d,DetectedFace:J.d,DetectedText:J.d,DeviceAcceleration:J.d,DeviceRotationRate:J.d,DirectoryEntry:J.d,webkitFileSystemDirectoryEntry:J.d,FileSystemDirectoryEntry:J.d,DirectoryReader:J.d,WebKitDirectoryReader:J.d,webkitFileSystemDirectoryReader:J.d,FileSystemDirectoryReader:J.d,DocumentOrShadowRoot:J.d,DocumentTimeline:J.d,DOMError:J.d,DOMImplementation:J.d,Iterator:J.d,DOMMatrix:J.d,DOMMatrixReadOnly:J.d,DOMParser:J.d,DOMPoint:J.d,DOMPointReadOnly:J.d,DOMQuad:J.d,DOMStringMap:J.d,Entry:J.d,webkitFileSystemEntry:J.d,FileSystemEntry:J.d,External:J.d,FaceDetector:J.d,FederatedCredential:J.d,FileEntry:J.d,webkitFileSystemFileEntry:J.d,FileSystemFileEntry:J.d,DOMFileSystem:J.d,WebKitFileSystem:J.d,webkitFileSystem:J.d,FileSystem:J.d,FontFace:J.d,FontFaceSource:J.d,FormData:J.d,GamepadButton:J.d,GamepadPose:J.d,Geolocation:J.d,Position:J.d,GeolocationPosition:J.d,Headers:J.d,HTMLHyperlinkElementUtils:J.d,IdleDeadline:J.d,ImageBitmap:J.d,ImageBitmapRenderingContext:J.d,ImageCapture:J.d,InputDeviceCapabilities:J.d,IntersectionObserver:J.d,IntersectionObserverEntry:J.d,InterventionReport:J.d,KeyframeEffect:J.d,KeyframeEffectReadOnly:J.d,MediaCapabilities:J.d,MediaCapabilitiesInfo:J.d,MediaDeviceInfo:J.d,MediaError:J.d,MediaKeyStatusMap:J.d,MediaKeySystemAccess:J.d,MediaKeys:J.d,MediaKeysPolicy:J.d,MediaMetadata:J.d,MediaSession:J.d,MediaSettingsRange:J.d,MemoryInfo:J.d,MessageChannel:J.d,Metadata:J.d,MutationObserver:J.d,WebKitMutationObserver:J.d,MutationRecord:J.d,NavigationPreloadManager:J.d,Navigator:J.d,NavigatorAutomationInformation:J.d,NavigatorConcurrentHardware:J.d,NavigatorCookies:J.d,NavigatorUserMediaError:J.d,NodeFilter:J.d,NodeIterator:J.d,NonDocumentTypeChildNode:J.d,NonElementParentNode:J.d,NoncedElement:J.d,OffscreenCanvasRenderingContext2D:J.d,OverconstrainedError:J.d,PaintRenderingContext2D:J.d,PaintSize:J.d,PaintWorkletGlobalScope:J.d,PasswordCredential:J.d,Path2D:J.d,PaymentAddress:J.d,PaymentInstruments:J.d,PaymentManager:J.d,PaymentResponse:J.d,PerformanceEntry:J.d,PerformanceLongTaskTiming:J.d,PerformanceMark:J.d,PerformanceMeasure:J.d,PerformanceNavigation:J.d,PerformanceNavigationTiming:J.d,PerformanceObserver:J.d,PerformanceObserverEntryList:J.d,PerformancePaintTiming:J.d,PerformanceResourceTiming:J.d,PerformanceServerTiming:J.d,PerformanceTiming:J.d,Permissions:J.d,PhotoCapabilities:J.d,PositionError:J.d,GeolocationPositionError:J.d,Presentation:J.d,PresentationReceiver:J.d,PublicKeyCredential:J.d,PushManager:J.d,PushMessageData:J.d,PushSubscription:J.d,PushSubscriptionOptions:J.d,Range:J.d,RelatedApplication:J.d,ReportBody:J.d,ReportingObserver:J.d,ResizeObserver:J.d,ResizeObserverEntry:J.d,RTCCertificate:J.d,RTCIceCandidate:J.d,mozRTCIceCandidate:J.d,RTCLegacyStatsReport:J.d,RTCRtpContributingSource:J.d,RTCRtpReceiver:J.d,RTCRtpSender:J.d,RTCSessionDescription:J.d,mozRTCSessionDescription:J.d,RTCStatsResponse:J.d,Screen:J.d,ScrollState:J.d,ScrollTimeline:J.d,Selection:J.d,SpeechRecognitionAlternative:J.d,SpeechSynthesisVoice:J.d,StaticRange:J.d,StorageManager:J.d,StyleMedia:J.d,StylePropertyMap:J.d,StylePropertyMapReadonly:J.d,SyncManager:J.d,TaskAttributionTiming:J.d,TextDetector:J.d,TextMetrics:J.d,TrackDefault:J.d,TreeWalker:J.d,TrustedHTML:J.d,TrustedScriptURL:J.d,TrustedURL:J.d,UnderlyingSourceBase:J.d,URLSearchParams:J.d,VRCoordinateSystem:J.d,VRDisplayCapabilities:J.d,VREyeParameters:J.d,VRFrameData:J.d,VRFrameOfReference:J.d,VRPose:J.d,VRStageBounds:J.d,VRStageBoundsPoint:J.d,VRStageParameters:J.d,ValidityState:J.d,VideoPlaybackQuality:J.d,VideoTrack:J.d,VTTRegion:J.d,WindowClient:J.d,WorkletAnimation:J.d,WorkletGlobalScope:J.d,XPathEvaluator:J.d,XPathExpression:J.d,XPathNSResolver:J.d,XPathResult:J.d,XMLSerializer:J.d,XSLTProcessor:J.d,Bluetooth:J.d,BluetoothCharacteristicProperties:J.d,BluetoothRemoteGATTServer:J.d,BluetoothRemoteGATTService:J.d,BluetoothUUID:J.d,BudgetService:J.d,Cache:J.d,DOMFileSystemSync:J.d,DirectoryEntrySync:J.d,DirectoryReaderSync:J.d,EntrySync:J.d,FileEntrySync:J.d,FileReaderSync:J.d,FileWriterSync:J.d,HTMLAllCollection:J.d,Mojo:J.d,MojoHandle:J.d,MojoWatcher:J.d,NFC:J.d,PagePopupController:J.d,Report:J.d,Request:J.d,Response:J.d,SubtleCrypto:J.d,USBAlternateInterface:J.d,USBConfiguration:J.d,USBDevice:J.d,USBEndpoint:J.d,USBInTransferResult:J.d,USBInterface:J.d,USBIsochronousInTransferPacket:J.d,USBIsochronousInTransferResult:J.d,USBIsochronousOutTransferPacket:J.d,USBIsochronousOutTransferResult:J.d,USBOutTransferResult:J.d,WorkerLocation:J.d,WorkerNavigator:J.d,Worklet:J.d,IDBCursor:J.d,IDBCursorWithValue:J.d,IDBFactory:J.d,IDBIndex:J.d,IDBKeyRange:J.d,IDBObjectStore:J.d,IDBObservation:J.d,IDBObserver:J.d,IDBObserverChanges:J.d,SVGAngle:J.d,SVGAnimatedAngle:J.d,SVGAnimatedBoolean:J.d,SVGAnimatedEnumeration:J.d,SVGAnimatedInteger:J.d,SVGAnimatedLength:J.d,SVGAnimatedLengthList:J.d,SVGAnimatedNumber:J.d,SVGAnimatedNumberList:J.d,SVGAnimatedPreserveAspectRatio:J.d,SVGAnimatedRect:J.d,SVGAnimatedString:J.d,SVGAnimatedTransformList:J.d,SVGMatrix:J.d,SVGPoint:J.d,SVGPreserveAspectRatio:J.d,SVGRect:J.d,SVGUnitTypes:J.d,AudioListener:J.d,AudioParam:J.d,AudioTrack:J.d,AudioWorkletGlobalScope:J.d,AudioWorkletProcessor:J.d,PeriodicWave:J.d,WebGLActiveInfo:J.d,ANGLEInstancedArrays:J.d,ANGLE_instanced_arrays:J.d,WebGLBuffer:J.d,WebGLCanvas:J.d,WebGLColorBufferFloat:J.d,WebGLCompressedTextureASTC:J.d,WebGLCompressedTextureATC:J.d,WEBGL_compressed_texture_atc:J.d,WebGLCompressedTextureETC1:J.d,WEBGL_compressed_texture_etc1:J.d,WebGLCompressedTextureETC:J.d,WebGLCompressedTexturePVRTC:J.d,WEBGL_compressed_texture_pvrtc:J.d,WebGLCompressedTextureS3TC:J.d,WEBGL_compressed_texture_s3tc:J.d,WebGLCompressedTextureS3TCsRGB:J.d,WebGLDebugRendererInfo:J.d,WEBGL_debug_renderer_info:J.d,WebGLDebugShaders:J.d,WEBGL_debug_shaders:J.d,WebGLDepthTexture:J.d,WEBGL_depth_texture:J.d,WebGLDrawBuffers:J.d,WEBGL_draw_buffers:J.d,EXTsRGB:J.d,EXT_sRGB:J.d,EXTBlendMinMax:J.d,EXT_blend_minmax:J.d,EXTColorBufferFloat:J.d,EXTColorBufferHalfFloat:J.d,EXTDisjointTimerQuery:J.d,EXTDisjointTimerQueryWebGL2:J.d,EXTFragDepth:J.d,EXT_frag_depth:J.d,EXTShaderTextureLOD:J.d,EXT_shader_texture_lod:J.d,EXTTextureFilterAnisotropic:J.d,EXT_texture_filter_anisotropic:J.d,WebGLFramebuffer:J.d,WebGLGetBufferSubDataAsync:J.d,WebGLLoseContext:J.d,WebGLExtensionLoseContext:J.d,WEBGL_lose_context:J.d,OESElementIndexUint:J.d,OES_element_index_uint:J.d,OESStandardDerivatives:J.d,OES_standard_derivatives:J.d,OESTextureFloat:J.d,OES_texture_float:J.d,OESTextureFloatLinear:J.d,OES_texture_float_linear:J.d,OESTextureHalfFloat:J.d,OES_texture_half_float:J.d,OESTextureHalfFloatLinear:J.d,OES_texture_half_float_linear:J.d,OESVertexArrayObject:J.d,OES_vertex_array_object:J.d,WebGLProgram:J.d,WebGLQuery:J.d,WebGLRenderbuffer:J.d,WebGLRenderingContext:J.d,WebGL2RenderingContext:J.d,WebGLSampler:J.d,WebGLShader:J.d,WebGLShaderPrecisionFormat:J.d,WebGLSync:J.d,WebGLTexture:J.d,WebGLTimerQueryEXT:J.d,WebGLTransformFeedback:J.d,WebGLUniformLocation:J.d,WebGLVertexArrayObject:J.d,WebGLVertexArrayObjectOES:J.d,WebGL2RenderingContextBase:J.d,ArrayBuffer:A.dO,ArrayBufferView:A.ak,DataView:A.hX,Float32Array:A.hY,Float64Array:A.hZ,Int16Array:A.i_,Int32Array:A.i0,Int8Array:A.i1,Uint16Array:A.eO,Uint32Array:A.eP,Uint8ClampedArray:A.eQ,CanvasPixelArray:A.eQ,Uint8Array:A.cM,HTMLAudioElement:A.w,HTMLBRElement:A.w,HTMLBaseElement:A.w,HTMLBodyElement:A.w,HTMLButtonElement:A.w,HTMLCanvasElement:A.w,HTMLContentElement:A.w,HTMLDListElement:A.w,HTMLDataElement:A.w,HTMLDataListElement:A.w,HTMLDetailsElement:A.w,HTMLDialogElement:A.w,HTMLDivElement:A.w,HTMLEmbedElement:A.w,HTMLFieldSetElement:A.w,HTMLHRElement:A.w,HTMLHeadElement:A.w,HTMLHeadingElement:A.w,HTMLHtmlElement:A.w,HTMLIFrameElement:A.w,HTMLImageElement:A.w,HTMLInputElement:A.w,HTMLLIElement:A.w,HTMLLabelElement:A.w,HTMLLegendElement:A.w,HTMLLinkElement:A.w,HTMLMapElement:A.w,HTMLMediaElement:A.w,HTMLMenuElement:A.w,HTMLMetaElement:A.w,HTMLMeterElement:A.w,HTMLModElement:A.w,HTMLOListElement:A.w,HTMLObjectElement:A.w,HTMLOptGroupElement:A.w,HTMLOptionElement:A.w,HTMLOutputElement:A.w,HTMLParagraphElement:A.w,HTMLParamElement:A.w,HTMLPictureElement:A.w,HTMLPreElement:A.w,HTMLProgressElement:A.w,HTMLQuoteElement:A.w,HTMLScriptElement:A.w,HTMLShadowElement:A.w,HTMLSlotElement:A.w,HTMLSourceElement:A.w,HTMLSpanElement:A.w,HTMLStyleElement:A.w,HTMLTableCaptionElement:A.w,HTMLTableCellElement:A.w,HTMLTableDataCellElement:A.w,HTMLTableHeaderCellElement:A.w,HTMLTableColElement:A.w,HTMLTableElement:A.w,HTMLTableRowElement:A.w,HTMLTableSectionElement:A.w,HTMLTemplateElement:A.w,HTMLTextAreaElement:A.w,HTMLTimeElement:A.w,HTMLTitleElement:A.w,HTMLTrackElement:A.w,HTMLUListElement:A.w,HTMLUnknownElement:A.w,HTMLVideoElement:A.w,HTMLDirectoryElement:A.w,HTMLFontElement:A.w,HTMLFrameElement:A.w,HTMLFrameSetElement:A.w,HTMLMarqueeElement:A.w,HTMLElement:A.w,AccessibleNodeList:A.fN,HTMLAnchorElement:A.fO,HTMLAreaElement:A.fP,Blob:A.cb,CDATASection:A.bz,CharacterData:A.bz,Comment:A.bz,ProcessingInstruction:A.bz,Text:A.bz,CSSPerspective:A.h1,CSSCharsetRule:A.T,CSSConditionRule:A.T,CSSFontFaceRule:A.T,CSSGroupingRule:A.T,CSSImportRule:A.T,CSSKeyframeRule:A.T,MozCSSKeyframeRule:A.T,WebKitCSSKeyframeRule:A.T,CSSKeyframesRule:A.T,MozCSSKeyframesRule:A.T,WebKitCSSKeyframesRule:A.T,CSSMediaRule:A.T,CSSNamespaceRule:A.T,CSSPageRule:A.T,CSSRule:A.T,CSSStyleRule:A.T,CSSSupportsRule:A.T,CSSViewportRule:A.T,CSSStyleDeclaration:A.dr,MSStyleCSSProperties:A.dr,CSS2Properties:A.dr,CSSImageValue:A.ay,CSSKeywordValue:A.ay,CSSNumericValue:A.ay,CSSPositionValue:A.ay,CSSResourceValue:A.ay,CSSUnitValue:A.ay,CSSURLImageValue:A.ay,CSSStyleValue:A.ay,CSSMatrixComponent:A.bi,CSSRotation:A.bi,CSSScale:A.bi,CSSSkew:A.bi,CSSTranslation:A.bi,CSSTransformComponent:A.bi,CSSTransformValue:A.h2,CSSUnparsedValue:A.h3,DataTransferItemList:A.h4,DedicatedWorkerGlobalScope:A.ds,DOMException:A.h6,ClientRectList:A.ej,DOMRectList:A.ej,DOMRectReadOnly:A.ek,DOMStringList:A.h7,DOMTokenList:A.h8,MathMLElement:A.v,SVGAElement:A.v,SVGAnimateElement:A.v,SVGAnimateMotionElement:A.v,SVGAnimateTransformElement:A.v,SVGAnimationElement:A.v,SVGCircleElement:A.v,SVGClipPathElement:A.v,SVGDefsElement:A.v,SVGDescElement:A.v,SVGDiscardElement:A.v,SVGEllipseElement:A.v,SVGFEBlendElement:A.v,SVGFEColorMatrixElement:A.v,SVGFEComponentTransferElement:A.v,SVGFECompositeElement:A.v,SVGFEConvolveMatrixElement:A.v,SVGFEDiffuseLightingElement:A.v,SVGFEDisplacementMapElement:A.v,SVGFEDistantLightElement:A.v,SVGFEFloodElement:A.v,SVGFEFuncAElement:A.v,SVGFEFuncBElement:A.v,SVGFEFuncGElement:A.v,SVGFEFuncRElement:A.v,SVGFEGaussianBlurElement:A.v,SVGFEImageElement:A.v,SVGFEMergeElement:A.v,SVGFEMergeNodeElement:A.v,SVGFEMorphologyElement:A.v,SVGFEOffsetElement:A.v,SVGFEPointLightElement:A.v,SVGFESpecularLightingElement:A.v,SVGFESpotLightElement:A.v,SVGFETileElement:A.v,SVGFETurbulenceElement:A.v,SVGFilterElement:A.v,SVGForeignObjectElement:A.v,SVGGElement:A.v,SVGGeometryElement:A.v,SVGGraphicsElement:A.v,SVGImageElement:A.v,SVGLineElement:A.v,SVGLinearGradientElement:A.v,SVGMarkerElement:A.v,SVGMaskElement:A.v,SVGMetadataElement:A.v,SVGPathElement:A.v,SVGPatternElement:A.v,SVGPolygonElement:A.v,SVGPolylineElement:A.v,SVGRadialGradientElement:A.v,SVGRectElement:A.v,SVGScriptElement:A.v,SVGSetElement:A.v,SVGStopElement:A.v,SVGStyleElement:A.v,SVGElement:A.v,SVGSVGElement:A.v,SVGSwitchElement:A.v,SVGSymbolElement:A.v,SVGTSpanElement:A.v,SVGTextContentElement:A.v,SVGTextElement:A.v,SVGTextPathElement:A.v,SVGTextPositioningElement:A.v,SVGTitleElement:A.v,SVGUseElement:A.v,SVGViewElement:A.v,SVGGradientElement:A.v,SVGComponentTransferFunctionElement:A.v,SVGFEDropShadowElement:A.v,SVGMPathElement:A.v,Element:A.v,AbortPaymentEvent:A.p,AnimationEvent:A.p,AnimationPlaybackEvent:A.p,ApplicationCacheErrorEvent:A.p,BackgroundFetchClickEvent:A.p,BackgroundFetchEvent:A.p,BackgroundFetchFailEvent:A.p,BackgroundFetchedEvent:A.p,BeforeInstallPromptEvent:A.p,BeforeUnloadEvent:A.p,BlobEvent:A.p,CanMakePaymentEvent:A.p,ClipboardEvent:A.p,CloseEvent:A.p,CompositionEvent:A.p,CustomEvent:A.p,DeviceMotionEvent:A.p,DeviceOrientationEvent:A.p,ErrorEvent:A.p,ExtendableEvent:A.p,ExtendableMessageEvent:A.p,FetchEvent:A.p,FocusEvent:A.p,FontFaceSetLoadEvent:A.p,ForeignFetchEvent:A.p,GamepadEvent:A.p,HashChangeEvent:A.p,InstallEvent:A.p,KeyboardEvent:A.p,MediaEncryptedEvent:A.p,MediaKeyMessageEvent:A.p,MediaQueryListEvent:A.p,MediaStreamEvent:A.p,MediaStreamTrackEvent:A.p,MIDIConnectionEvent:A.p,MIDIMessageEvent:A.p,MouseEvent:A.p,DragEvent:A.p,MutationEvent:A.p,NotificationEvent:A.p,PageTransitionEvent:A.p,PaymentRequestEvent:A.p,PaymentRequestUpdateEvent:A.p,PointerEvent:A.p,PopStateEvent:A.p,PresentationConnectionAvailableEvent:A.p,PresentationConnectionCloseEvent:A.p,ProgressEvent:A.p,PromiseRejectionEvent:A.p,PushEvent:A.p,RTCDataChannelEvent:A.p,RTCDTMFToneChangeEvent:A.p,RTCPeerConnectionIceEvent:A.p,RTCTrackEvent:A.p,SecurityPolicyViolationEvent:A.p,SensorErrorEvent:A.p,SpeechRecognitionError:A.p,SpeechRecognitionEvent:A.p,SpeechSynthesisEvent:A.p,StorageEvent:A.p,SyncEvent:A.p,TextEvent:A.p,TouchEvent:A.p,TrackEvent:A.p,TransitionEvent:A.p,WebKitTransitionEvent:A.p,UIEvent:A.p,VRDeviceEvent:A.p,VRDisplayEvent:A.p,VRSessionEvent:A.p,WheelEvent:A.p,MojoInterfaceRequestEvent:A.p,ResourceProgressEvent:A.p,USBConnectionEvent:A.p,IDBVersionChangeEvent:A.p,AudioProcessingEvent:A.p,OfflineAudioCompletionEvent:A.p,WebGLContextEvent:A.p,Event:A.p,InputEvent:A.p,SubmitEvent:A.p,AbsoluteOrientationSensor:A.j,Accelerometer:A.j,AccessibleNode:A.j,AmbientLightSensor:A.j,Animation:A.j,ApplicationCache:A.j,DOMApplicationCache:A.j,OfflineResourceList:A.j,BackgroundFetchRegistration:A.j,BatteryManager:A.j,BroadcastChannel:A.j,CanvasCaptureMediaStreamTrack:A.j,EventSource:A.j,FileReader:A.j,FontFaceSet:A.j,Gyroscope:A.j,XMLHttpRequest:A.j,XMLHttpRequestEventTarget:A.j,XMLHttpRequestUpload:A.j,LinearAccelerationSensor:A.j,Magnetometer:A.j,MediaDevices:A.j,MediaKeySession:A.j,MediaQueryList:A.j,MediaRecorder:A.j,MediaSource:A.j,MediaStream:A.j,MediaStreamTrack:A.j,MIDIAccess:A.j,MIDIInput:A.j,MIDIOutput:A.j,MIDIPort:A.j,NetworkInformation:A.j,Notification:A.j,OffscreenCanvas:A.j,OrientationSensor:A.j,PaymentRequest:A.j,Performance:A.j,PermissionStatus:A.j,PresentationAvailability:A.j,PresentationConnection:A.j,PresentationConnectionList:A.j,PresentationRequest:A.j,RelativeOrientationSensor:A.j,RemotePlayback:A.j,RTCDataChannel:A.j,DataChannel:A.j,RTCDTMFSender:A.j,RTCPeerConnection:A.j,webkitRTCPeerConnection:A.j,mozRTCPeerConnection:A.j,ScreenOrientation:A.j,Sensor:A.j,ServiceWorker:A.j,ServiceWorkerContainer:A.j,ServiceWorkerRegistration:A.j,SharedWorker:A.j,SpeechRecognition:A.j,webkitSpeechRecognition:A.j,SpeechSynthesis:A.j,SpeechSynthesisUtterance:A.j,VR:A.j,VRDevice:A.j,VRDisplay:A.j,VRSession:A.j,VisualViewport:A.j,WebSocket:A.j,Window:A.j,DOMWindow:A.j,Worker:A.j,WorkerPerformance:A.j,BluetoothDevice:A.j,BluetoothRemoteGATTCharacteristic:A.j,Clipboard:A.j,MojoInterfaceInterceptor:A.j,USB:A.j,IDBDatabase:A.j,IDBOpenDBRequest:A.j,IDBVersionChangeRequest:A.j,IDBRequest:A.j,IDBTransaction:A.j,AnalyserNode:A.j,RealtimeAnalyserNode:A.j,AudioBufferSourceNode:A.j,AudioDestinationNode:A.j,AudioNode:A.j,AudioScheduledSourceNode:A.j,AudioWorkletNode:A.j,BiquadFilterNode:A.j,ChannelMergerNode:A.j,AudioChannelMerger:A.j,ChannelSplitterNode:A.j,AudioChannelSplitter:A.j,ConstantSourceNode:A.j,ConvolverNode:A.j,DelayNode:A.j,DynamicsCompressorNode:A.j,GainNode:A.j,AudioGainNode:A.j,IIRFilterNode:A.j,MediaElementAudioSourceNode:A.j,MediaStreamAudioDestinationNode:A.j,MediaStreamAudioSourceNode:A.j,OscillatorNode:A.j,Oscillator:A.j,PannerNode:A.j,AudioPannerNode:A.j,webkitAudioPannerNode:A.j,ScriptProcessorNode:A.j,JavaScriptAudioNode:A.j,StereoPannerNode:A.j,WaveShaperNode:A.j,EventTarget:A.j,File:A.az,FileList:A.dw,FileWriter:A.hg,HTMLFormElement:A.hh,Gamepad:A.aC,History:A.hk,HTMLCollection:A.cA,HTMLFormControlsCollection:A.cA,HTMLOptionsCollection:A.cA,ImageData:A.dD,Location:A.hS,MediaList:A.hT,MessageEvent:A.bR,MessagePort:A.ci,MIDIInputMap:A.hU,MIDIOutputMap:A.hV,MimeType:A.aE,MimeTypeArray:A.hW,Document:A.K,DocumentFragment:A.K,HTMLDocument:A.K,ShadowRoot:A.K,XMLDocument:A.K,Attr:A.K,DocumentType:A.K,Node:A.K,NodeList:A.eR,RadioNodeList:A.eR,Plugin:A.aF,PluginArray:A.ib,RTCStatsReport:A.it,HTMLSelectElement:A.iv,SharedArrayBuffer:A.dX,SourceBuffer:A.aH,SourceBufferList:A.iw,SpeechGrammar:A.aI,SpeechGrammarList:A.ix,SpeechRecognitionResult:A.aJ,Storage:A.iz,CSSStyleSheet:A.au,StyleSheet:A.au,TextTrack:A.aK,TextTrackCue:A.av,VTTCue:A.av,TextTrackCueList:A.iE,TextTrackList:A.iF,TimeRanges:A.iJ,Touch:A.aM,TouchList:A.iK,TrackDefaultList:A.iL,URL:A.iQ,VideoTrackList:A.iV,ServiceWorkerGlobalScope:A.cp,SharedWorkerGlobalScope:A.cp,WorkerGlobalScope:A.cp,CSSRuleList:A.j1,ClientRect:A.fj,DOMRect:A.fj,GamepadList:A.jd,NamedNodeMap:A.fq,MozNamedAttrMap:A.fq,SpeechRecognitionResultList:A.jy,StyleSheetList:A.jG,SVGLength:A.aX,SVGLengthList:A.hP,SVGNumber:A.b0,SVGNumberList:A.i3,SVGPointList:A.ig,SVGStringList:A.iA,SVGTransform:A.b2,SVGTransformList:A.iM,AudioBuffer:A.fR,AudioParamMap:A.fS,AudioTrackList:A.fT,AudioContext:A.ca,webkitAudioContext:A.ca,BaseAudioContext:A.ca,OfflineAudioContext:A.i4})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DedicatedWorkerGlobalScope:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,Location:true,MediaList:true,MessageEvent:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SharedArrayBuffer:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,VideoTrackList:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:false,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true})
A.at.$nativeSuperclassTag="ArrayBufferView"
A.fr.$nativeSuperclassTag="ArrayBufferView"
A.fs.$nativeSuperclassTag="ArrayBufferView"
A.cj.$nativeSuperclassTag="ArrayBufferView"
A.ft.$nativeSuperclassTag="ArrayBufferView"
A.fu.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.fx.$nativeSuperclassTag="EventTarget"
A.fy.$nativeSuperclassTag="EventTarget"
A.fB.$nativeSuperclassTag="EventTarget"
A.fC.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.vc
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=thumbnail_worker.dart.js.map
